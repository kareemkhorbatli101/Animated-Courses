// v27.26 (P5) - the music bed, from the SAME note events the mix uses.
//
// The bundle already carries a mixed master track, and it would have been easy to just play that. It is
// the wrong thing for a player: a mixed track cannot be ducked under speech, its level cannot change per
// lesson, the language cannot change without re-downloading it, and it is the largest asset in a bundle.
// So the spec carries the NOTES, and this synthesises them.
//
// Two synths will never be sample-identical, and claiming otherwise would be a lie. What CAN be identical
// is the notes, their times, their lengths and their levels - the part that decides whether it is the
// same music - and the gate measures the rest by spectrogram structure rather than by sample equality.
//
// The timbre parameters (`partials`, `artic`) come from the SPEC, not from this file: engine/synth is the
// one authority on what "keys, sustained" sounds like, exactly as the lesson's spec is the one authority
// on what a subtitle looks like (P3).
(function (global) {
  'use strict';

  function midiToFreq(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  function MusicBed(spec) {
    this.spec = spec || {};
    this.events = this.spec.events || [];
    this.synth = this.spec.synth || {};
    this.gain = this.spec.gain === undefined ? 0.13 : +this.spec.gain;
    this.duck = [];
    this.duckAmount = 0.35;      // how far the bed drops under a spoken line; see setDuck
  }

  // The windows the bed drops under, declared - not detected. A level detector would hear the music
  // itself and duck against its own loudness.
  MusicBed.prototype.setDuck = function (windows, amount) {
    this.duck = (windows || []).slice();
    if (amount !== undefined) this.duckAmount = +amount;
    return this;
  };

  MusicBed.prototype.duckAt = function (t) {
    for (var i = 0; i < this.duck.length; i++) {
      var d = this.duck[i];
      if (t >= d.start && t < d.start + d.dur) return this.duckAmount;
    }
    return 1.0;
  };

  // Render the bed into an AudioBuffer. An OfflineAudioContext rather than live nodes: the result is
  // deterministic, it can be measured, and the same call serves both playback and the parity gate.
  MusicBed.prototype.render = function (ctx, duration) {
    var sr = ctx.sampleRate;
    var n = Math.max(1, Math.round(duration * sr));
    var buf = ctx.createBuffer(2, n, sr);
    var L = buf.getChannelData(0), R = buf.getChannelData(1);
    var partials = this.synth.partials || {};
    var artic = this.synth.artic || {};

    for (var e = 0; e < this.events.length; e++) {
      var ev = this.events[e];
      var amps = partials[ev.family] || [1];
      var ar = artic[ev.artic || 'legato'] || [0.006, 0.09];
      var atk = ar[0], rel = ar[1];
      var f0 = midiToFreq(ev.midi);
      var i0 = Math.round(ev.t0 * sr);
      var len = Math.round(ev.dur * sr);
      var vel = (ev.vel === undefined ? 64 : ev.vel) / 127;
      var g = (ev.gain === undefined ? 1 : ev.gain) * vel;
      var pan = ev.pan || 0;
      var gl = g * (1 - Math.max(0, pan)) , gr = g * (1 + Math.min(0, pan));
      var atkN = Math.max(1, Math.round(atk * sr));
      var relN = Math.max(1, Math.round(rel * sr));
      for (var k = 0; k < len; k++) {
        var i = i0 + k;
        if (i < 0 || i >= n) continue;
        // the same ADSR shape the engine applies: linear attack, linear release, sustain between
        var env = 1;
        if (k < atkN) env = k / atkN;
        else if (k > len - relN) env = Math.max(0, (len - k) / relN);
        var ph = 2 * Math.PI * f0 * (k / sr);
        var s = 0;
        for (var h = 0; h < amps.length; h++) s += amps[h] * Math.sin(ph * (h + 1));
        s = s / amps.length * env;
        L[i] += s * gl;
        R[i] += s * gr;
      }
    }
    // the declared level, then the declared ducking
    for (var j = 0; j < n; j++) {
      var d = this.duckAt(j / sr) * this.gain;
      L[j] *= d; R[j] *= d;
    }
    return buf;
  };

  MusicBed.prototype.samples = function (duration, sampleRate) {
    var OAC = global.OfflineAudioContext || global.webkitOfflineAudioContext;
    if (!OAC) return null;
    var sr = sampleRate || 22050;
    var ctx = new OAC(2, Math.max(1, Math.round(duration * sr)), sr);
    var buf = this.render(ctx, duration);
    return {sampleRate: sr, left: buf.getChannelData(0), right: buf.getChannelData(1)};
  };

  global.MusicBed = MusicBed;
})(typeof window !== 'undefined' ? window : self);
