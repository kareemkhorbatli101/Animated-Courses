// v27.27 (P6) - the spoken lines, PER LINE, addressed by content hash.
//
// The bundle carries a mixed master as well, and the master is what the MP4 uses. A player wants the
// lines separately for reasons the master cannot serve:
//
//   * one line can be replayed on its own - which is what a language learner actually does;
//   * the spoken language can change without re-downloading the lesson;
//   * a line is fetched only when it is about to be needed, so a lesson starts before its audio is
//     complete;
//   * each line is verified against its own hash, so a corrupted or substituted line is caught rather
//     than mixed in.
//
// The schedule is the resolved spec's, not this file's: every line already carries the `start` the mix
// used and the `dur` the engine MEASURED, so the audio and the mouth are laid out from the same numbers.
(function (global) {
  'use strict';

  // v28.1 THE VOICE IS SCHEDULED CONTINUOUSLY, NOT ONCE.
  //
  // Measured on the live site before this: pressing Play on the Warm Up scheduled 8 of its 17 lines - the
  // ones already downloaded - and nothing fetched or scheduled again until the next Play. The voice stopped
  // at 46.5 s while the picture ran on; sliding back and pressing Play fetched the next stretch, so it
  // "came back". And a Play then Pause while lines were still downloading scheduled 4 lines AFTER the
  // pause: a voice playing over a paused lesson, doubled by the next Play.
  //
  // Now a playback is a GENERATION. While it lasts, a pump fetches FETCH_AHEAD seconds ahead and schedules
  // every line inside SCHEDULE_AHEAD that this generation has not scheduled yet, each against the lesson
  // clock read AT THAT MOMENT. stop() ends the generation, and every asynchronous step checks it before
  // scheduling anything, so nothing can start after a pause.
  var FETCH_AHEAD = 30;       // seconds of voice kept downloaded ahead of the playhead
  var SCHEDULE_AHEAD = 8;     // seconds of voice handed to the audio clock ahead of the playhead
  // v28.3: while the page is HIDDEN, a hidden player keeps playing (owner, v3) - and a background tab's timers are
  // throttled, so the pump may run once a second or less. Handing the audio clock 30 s at a time (never more than is
  // fetched) keeps the voice on time through that. Each line still starts once: the generation and `scheduled` hold.
  var SCHEDULE_AHEAD_HIDDEN = 30;
  var PUMP_MS = 250;
  var RETRY_MS = [400, 1200]; // network failures only; a checksum failure is final

  function SpeechAudio(lines, fetcher, manifest) {
    this.lines = (lines || []).slice().sort(function (a, b) { return a.start - b.start; });
    this.fetcher = fetcher;
    this.manifest = manifest;
    this.buffers = {};        // key -> AudioBuffer
    this.ctx = null;
    this.playing = [];
    this.gen = 0;             // current playback generation; 0 = stopped
    this.scheduled = {};      // line index -> true, for the current generation
    this.failed = {};         // key -> message, for lines that could not be fetched at all
    this._inflight = {};      // key -> Promise, so a pump never fetches the same line twice at once
    this._timer = null;
    this._clock = null;       // () -> lesson seconds now
    // v28.3: ONE master gain per instance. Every line goes through it and only it reaches the speakers, so a host can
    // silence this player without stopping it (02 §9.2). Before, each line connected straight to the destination.
    this.master = null;
    this._out = 1;
    this.onError = null;      // function(message): a failure reported to the owner of this instance
  }

  SpeechAudio.prototype._fail = function (key, message) {
    this.failed[key] = message;
    if (!global.__AP_NO_HOOKS) {
      global.__speechError = true;
      global.__speechErrorMessage = message;
    }
    if (this.onError) { try { this.onError(message); } catch (e) { /* the owner's handler must not break the voice */ } }
  };

  SpeechAudio.prototype.scheduleAhead = function () {
    var hidden = global.document && global.document.visibilityState === 'hidden';
    return hidden ? Math.min(SCHEDULE_AHEAD_HIDDEN, FETCH_AHEAD) : SCHEDULE_AHEAD;
  };

  // Mute (0), or a volume: ramped over ~30 ms so it never clicks. The clock, the pump and the schedule are untouched,
  // so unmuting is heard from where the current line has got to.
  SpeechAudio.prototype.setOutputGain = function (v) {
    this._out = Math.max(0, Math.min(1, +v || 0));
    if (this.master && this.ctx) {
      try {
        this.master.gain.cancelScheduledValues(this.ctx.currentTime);
        this.master.gain.setTargetAtTime(this._out, this.ctx.currentTime, 0.01);
      } catch (e) { this.master.gain.value = this._out; }
    }
    return this._out;
  };

  SpeechAudio.prototype.dispose = function () {
    this.stop();
    this.buffers = {};
    this._inflight = {};
    if (this.ctx && this.ctx.close) { try { this.ctx.close(); } catch (e) { /* already closed */ } }
    this.ctx = null;
    this.master = null;
  };

  SpeechAudio.prototype._context = function () {
    if (!this.ctx) {
      var AC = global.AudioContext || global.webkitAudioContext;
      this.ctx = AC ? new AC() : null;
      if (this.ctx && this.ctx.createGain) {
        this.master = this.ctx.createGain();
        this.master.gain.value = this._out;
        this.master.connect(this.ctx.destination);
      }
    }
    return this.ctx;
  };

  SpeechAudio.prototype.recordFor = function (line) {
    // `lines/<key>.mp3` is the readable path; the manifest turns it into the content address and the
    // hash the fetcher verifies against. The KEY is the identity - it is sha256(voice|text), so the same
    // sentence spoken by the same voice is the same file in every lesson that uses it.
    var rel = 'lines/' + line.key + '.mp3';
    var r = this.manifest.files[rel];
    if (!r) return null;
    return {address: r.address, sha: r.sha, bytes: r.bytes, rel: rel, kind: 'a spoken line'};
  };

  // A network or HTTP failure may be transient and is retried; a checksum mismatch or a refused consent is
  // a fact about the bytes or the person, and retrying would only repeat it.
  function retryable(err) {
    var m = String(err && err.message || err);
    return !(err && err.needsConsent) && m.indexOf('checksum mismatch') < 0;
  }

  // Resolves to the decoded line, or null if it could not be had. It NEVER rejects: one line that cannot be
  // fetched used to reject the whole prefetch, and playFrom then scheduled nothing - the entire lesson
  // silent over one bad request. The failure is still REPORTED (__speechError, and this.failed).
  SpeechAudio.prototype.load = function (line) {
    var self = this;
    if (this.buffers[line.key]) return Promise.resolve(this.buffers[line.key]);
    if (this._inflight[line.key]) return this._inflight[line.key];
    var rec = this.recordFor(line);
    if (!rec) return Promise.resolve(null);
    function attempt(k) {
      return self.fetcher.get(rec).catch(function (err) {
        if (k < RETRY_MS.length && retryable(err)) {
          return new Promise(function (res) { setTimeout(res, RETRY_MS[k]); })
            .then(function () { return attempt(k + 1); });
        }
        // A line that fails its checksum must be REPORTED, not quietly missing. A player that silently
        // drops a corrupted line plays a lesson with a gap where a sentence should be, which is the same
        // class of failure E3 removed from the renderer: a missing input degrading instead of failing.
        self._fail(line.key, String(err && err.message || err));
        return null;
      });
    }
    var p = attempt(0).then(function (buf) {
      if (!buf) return null;
      var ctx = self._context();
      if (!ctx) return null;
      return new Promise(function (resolve) {
        // decodeAudioData detaches the buffer it is given, and the fetcher keeps its copy for the cache,
        // so decode a SLICE rather than the original.
        ctx.decodeAudioData(buf.slice(0), function (ab) {
          self.buffers[line.key] = ab;
          resolve(ab);
        }, function () {
          self._fail(line.key, 'could not decode the spoken line ' + line.key);
          resolve(null);
        });
      });
    });
    this._inflight[line.key] = p;
    p.then(function () { delete self._inflight[line.key]; });
    return p;
  };

  // Fetch the lines that start within `ahead` seconds of t. Lazy on purpose: a lesson should start
  // playing before all of its audio has arrived.
  SpeechAudio.prototype.prefetch = function (t, ahead, onLine) {
    var self = this, want = [];
    ahead = ahead === undefined ? 20 : ahead;
    this.lines.forEach(function (l) {
      if (l.start + l.dur >= t && l.start <= t + ahead) want.push(l);
    });
    // onLine, when given, is called with the BYTES of each line that actually had to be fetched. The
    // page uses it to keep the download bar moving through the voice, which it previously could not
    // account for at all. A line already in memory reports nothing, so a second prefetch over the same
    // lines cannot inflate anyone's total.
    return Promise.all(want.map(function (l) {
      var had = !!self.buffers[l.key];
      return self.load(l).then(function (ab) {
        if (onLine && !had) {
          var r = self.recordFor(l);
          onLine((r && r.bytes) || 0, l.key);
        }
        return ab;
      });
    }));
  };

  // v28: a line's declared gain, as a linear factor. The MP4's mixer (make_video._build_audio_timeline)
  // has applied `gainDb` per clip since v14; this page ignored it, so a lesson levelled in the spec still
  // played every voice at whatever level its synthesiser produced - and one speaker in a dialogue ran
  // 5.5 dB under the other, which is what a listener hears as that voice dropping out.
  function lineGain(l) {
    var db = parseFloat(l.gainDb);
    return isFinite(db) ? Math.pow(10, db / 20) : 1;
  }

  // Ends the current generation: every scheduled source stops, the pump stops, and any fetch or resume
  // still in flight finds its generation gone and schedules nothing.
  SpeechAudio.prototype.stop = function () {
    this.gen++;
    this._active = false;
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
    this.playing.forEach(function (s) { try { s.stop(); } catch (e) { /* already ended */ } });
    this.playing = [];
    this.scheduled = {};
  };

  // One pump: fetch ahead, then hand every due line to the audio clock. Safe to call at any rate - a line
  // is scheduled at most once per generation, and a line already over is marked done without sound.
  SpeechAudio.prototype._pump = function (gen) {
    var self = this, ctx = this.ctx;
    if (gen !== this.gen || !this._active || !ctx) return 0;
    var now = this._clock();
    var n = 0, ahead = this.scheduleAhead(), out = this.master || ctx.destination;
    this.lines.forEach(function (l, i) {
      if (self.scheduled[i] || self.failed[l.key]) return;
      var end = l.start + (l.dur || 0);
      if (end < now) { self.scheduled[i] = true; return; }                 // already over
      if (l.start > now + FETCH_AHEAD) return;
      var ab = self.buffers[l.key];
      if (!ab) { self.load(l); return; }                                    // not here yet: fetch, next pump
      if (l.start > now + ahead) return;
      var when = l.start - now, offset = 0;
      if (when < 0) {                                                       // under way: begin part-way in
        offset = -when; when = 0;
        if (offset >= ab.duration) { self.scheduled[i] = true; return; }
      }
      var src = ctx.createBufferSource();
      src.buffer = ab;
      var g = lineGain(l);
      if (g !== 1 && ctx.createGain) {
        var gn = ctx.createGain();
        gn.gain.value = g;
        src.connect(gn);
        gn.connect(out);
      } else {
        src.connect(out);
      }
      src.__line = i;
      src.start(ctx.currentTime + when, offset);
      self.playing.push(src);
      self.scheduled[i] = true;
      n++;
    });
    return n;
  };

  // Start playing from lesson time t. `clock`, when given, returns the lesson time NOW - the page's own
  // picture clock - so each line is placed against the picture as it is when the line is scheduled, and a
  // slow fetch can never delay the voice relative to the picture. Without it, the clock runs from the call.
  // Returns (a promise of) how many lines the first pump after the initial fetch scheduled.
  SpeechAudio.prototype.playFrom = function (t, clock) {
    var self = this, ctx = this._context();
    if (!ctx) return Promise.resolve(0);
    this.stop();
    var gen = this.gen;
    var t0 = (global.performance && performance.now) ? performance.now() : Date.now();
    this._clock = clock || function () {
      var p = (global.performance && performance.now) ? performance.now() : Date.now();
      return t + (p - t0) / 1000;
    };
    this._active = true;
    // A suspended context has a frozen currentTime; scheduling against it would bunch every line together
    // the moment it resumes. Wait for it.
    var ready = (ctx.state === 'suspended' && ctx.resume) ? ctx.resume() : Promise.resolve();
    return Promise.resolve(ready).then(function () {
      if (gen !== self.gen) return 0;
      self._pump(gen);
      self._timer = setInterval(function () { self._pump(gen); }, PUMP_MS);
      return self.prefetch(self._clock(), self.scheduleAhead()).then(function () {
        if (gen !== self.gen) return 0;
        self._pump(gen);
        return self.playing.length;
      });
    });
  };

  // The assembled track, offline - what the parity gate measures against the MP4's audio.
  SpeechAudio.prototype.assemble = function (duration, sampleRate) {
    var OAC = global.OfflineAudioContext || global.webkitOfflineAudioContext;
    if (!OAC) return null;
    var sr = sampleRate || 22050;
    var n = Math.max(1, Math.round(duration * sr));
    var out = new Float32Array(n);
    for (var i = 0; i < this.lines.length; i++) {
      var l = this.lines[i], ab = this.buffers[l.key];
      if (!ab) continue;
      var ch = ab.getChannelData(0);
      var step = ab.sampleRate / sr;
      var base = Math.round(l.start * sr);
      var len = Math.min(Math.round(ab.duration * sr), n - base);
      var g = lineGain(l);                      // v28: the same gain the live path applies
      for (var k = 0; k < len; k++) {
        if (base + k < 0) continue;
        out[base + k] += g * ch[Math.min(ch.length - 1, Math.round(k * step))];
      }
    }
    return {sampleRate: sr, data: out};
  };

  global.SpeechAudio = SpeechAudio;
})(typeof window !== 'undefined' ? window : self);
