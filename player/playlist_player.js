// v27.25 (P4) - ONE CLOCK over a whole lesson.
//
// A coursebook lesson is several bundles: a presentation, a practice, a review. The MP4 pipeline joins
// them with ffmpeg and the join disappears into the file. Here the join has to be a rule, and the rule is
// that there is ONE time - the lesson's - and every part is a window onto it:
//
//   start[0] = 0
//   start[i] = start[i-1] + duration[i-1] - crossfade[i]
//   total    = start[n-1] + duration[n-1]
//
// which is the same arithmetic engine/playlist.total_of records, so the scrubber the page draws before
// fetching anything and the clock it runs afterwards cannot disagree. `at(t)` is a pure function of the
// global time: it says which part is showing and where inside it, for ANY t, including one the viewer
// scrubbed to backwards. Nothing here accumulates.
(function (global) {
  'use strict';

  function PlaylistClock(items) {
    this.items = items.map(function (it, i) {
      return {index: i, bundle: it.bundle, manifest: it.manifest, title: it.title || '',
              duration: +it.duration, crossfade: i === 0 ? 0 : (+it.crossfade || 0)};
    });
    var s = 0;
    for (var i = 0; i < this.items.length; i++) {
      if (i > 0) s = s + this.items[i - 1].duration - this.items[i].crossfade;
      this.items[i].start = s;
    }
    var last = this.items[this.items.length - 1];
    this.duration = last ? last.start + last.duration : 0;
  }

  // Which part is showing at global time t, and where inside it.
  //
  // During a crossfade two parts overlap, so `also` names the outgoing one and `mix` says how far the
  // handover has gone. Returning both rather than picking one keeps the decision with whoever is drawing:
  // a silent player can ignore `also`, and P5/P6's audio can use it to actually cross-fade.
  PlaylistClock.prototype.at = function (t) {
    if (!this.items.length) return null;
    if (t < 0) t = 0;
    if (t > this.duration) t = this.duration;
    var cur = this.items[0];
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].start <= t + 1e-9) cur = this.items[i];
      else break;
    }
    var local = t - cur.start;
    if (local > cur.duration) local = cur.duration;
    var out = {item: cur, local: local, also: null, mix: 0};
    var nxt = this.items[cur.index + 1];
    if (nxt && nxt.crossfade > 0 && t >= nxt.start - 1e-9) {
      // inside the overlap: `cur` is still the one this branch selected, so the INCOMING part is next
      out.also = nxt;
      out.alsoLocal = t - nxt.start;
      out.mix = Math.max(0, Math.min(1, (t - nxt.start) / nxt.crossfade));
    }
    return out;
  };

  PlaylistClock.prototype.indexAt = function (t) {
    var a = this.at(t);
    return a ? a.item.index : -1;
  };

  global.PlaylistClock = PlaylistClock;
})(typeof window !== 'undefined' ? window : self);
