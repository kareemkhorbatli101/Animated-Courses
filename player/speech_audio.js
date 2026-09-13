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

  function SpeechAudio(lines, fetcher, manifest) {
    this.lines = (lines || []).slice().sort(function (a, b) { return a.start - b.start; });
    this.fetcher = fetcher;
    this.manifest = manifest;
    this.buffers = {};        // key -> AudioBuffer
    this.ctx = null;
    this.playing = [];
  }

  SpeechAudio.prototype._context = function () {
    if (!this.ctx) {
      var AC = global.AudioContext || global.webkitAudioContext;
      this.ctx = AC ? new AC() : null;
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

  SpeechAudio.prototype.load = function (line) {
    var self = this;
    if (this.buffers[line.key]) return Promise.resolve(this.buffers[line.key]);
    var rec = this.recordFor(line);
    if (!rec) return Promise.resolve(null);
    return this.fetcher.get(rec).catch(function (err) {
      // A line that fails its checksum must be REPORTED, not quietly missing. A player that silently
      // drops a corrupted line plays a lesson with a gap where a sentence should be, which is the same
      // class of failure E3 removed from the renderer: a missing input degrading instead of failing.
      global.__speechError = true;
      global.__speechErrorMessage = String(err && err.message || err);
      throw err;
    }).then(function (buf) {
      var ctx = self._context();
      if (!ctx) return null;
      return new Promise(function (resolve) {
        // decodeAudioData detaches the buffer it is given, and the fetcher keeps its copy for the cache,
        // so decode a SLICE rather than the original.
        ctx.decodeAudioData(buf.slice(0), function (ab) {
          self.buffers[line.key] = ab;
          resolve(ab);
        }, function () { resolve(null); });
      });
    });
  };

  // Fetch the lines that start within `ahead` seconds of t. Lazy on purpose: a lesson should start
  // playing before all of its audio has arrived.
  SpeechAudio.prototype.prefetch = function (t, ahead) {
    var self = this, want = [];
    ahead = ahead === undefined ? 20 : ahead;
    this.lines.forEach(function (l) {
      if (l.start + l.dur >= t && l.start <= t + ahead) want.push(l);
    });
    return Promise.all(want.map(function (l) { return self.load(l); }));
  };

  SpeechAudio.prototype.stop = function () {
    this.playing.forEach(function (s) { try { s.stop(); } catch (e) { /* already ended */ } });
    this.playing = [];
  };

  // Start playing from lesson time t. Every line still to come is scheduled at its DECLARED offset, so
  // the timing is the spec's and not an accumulation of when things happened to be decoded.
  SpeechAudio.prototype.playFrom = function (t) {
    var self = this, ctx = this._context();
    if (!ctx) return Promise.resolve(0);
    if (ctx.state === 'suspended') ctx.resume();
    this.stop();
    return this.prefetch(t, 30).then(function () {
      var t0 = ctx.currentTime, n = 0;
      self.lines.forEach(function (l) {
        var ab = self.buffers[l.key];
        if (!ab) return;
        var when = l.start - t;
        var offset = 0;
        if (when < 0) {                       // already started: begin part-way in
          offset = -when;
          when = 0;
          if (offset >= ab.duration) return;  // already finished
        }
        var src = ctx.createBufferSource();
        src.buffer = ab;
        src.connect(ctx.destination);
        src.start(t0 + when, offset);
        self.playing.push(src);
        n++;
      });
      return n;
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
      for (var k = 0; k < len; k++) {
        if (base + k < 0) continue;
        out[base + k] += ch[Math.min(ch.length - 1, Math.round(k * step))];
      }
    }
    return {sampleRate: sr, data: out};
  };

  global.SpeechAudio = SpeechAudio;
})(typeof window !== 'undefined' ? window : self);
