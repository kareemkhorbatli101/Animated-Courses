/* TRACK B - the lesson's speech in the browser. Mirrors engine/transcript.py line for line.
 *
 * The THIRD parity pair after spatial and describe, and each pair is permanent maintenance - noted in
 * RESIDUALS as the smallest, safest candidate for retiring a pair with WASM later, since this builder is
 * a pure function over scene.json with no transcendentals, no I/O and no platform surface.
 *
 * Until then it is held identical by gates/prose_parity.py, which compares FINISHED TEXT rather than
 * intermediate values, because the text is what the model and the person actually receive.
 */
(function (root) {
  'use strict';

  var NARRATOR = 'Narrator';
  var UNATTRIBUTED = 'Unattributed';

  // Head and tail kept, MIDDLE dropped: an opening establishes who is present, an ending carries the
  // resolution. Cutting the tail would leave a model answering "how did it end" from a transcript that
  // lacks the ending.
  var BUDGET_TURNS = 60, HEAD_TURNS = 24, TAIL_TURNS = 24;

  function mmss(t) {
    t = Math.max(0, Number(t) || 0);
    var m = Math.floor(t / 60), s = Math.floor(t - m * 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function displayName(actor) {
    return String(actor || '').replace(/-/g, '_').split('_').filter(Boolean)
      .map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1); }).join(' ');
  }

  function r3(x) { return Math.floor(x * 1000 + 0.5) / 1000; }   // the shared half-up rule

  function turns(scene) {
    var sp = ((scene || {}).speech || []).slice();
    var named = sp.some(function (s) { return !!(s.actor || s.speaker); });
    var voices = {};
    sp.forEach(function (s) { voices[s.voice || ''] = 1; });
    var nVoices = Object.keys(voices).length;
    var out = sp.map(function (s) {
      var actor = s.actor || '', who;
      if (actor) who = displayName(actor);
      // v28.4: a voice with no one on the stage that the lesson NAMES - engine/transcript.py makes the same call
      else if (s.speaker) who = String(s.speaker);
      else if (!named && nVoices <= 1) who = NARRATOR;
      else who = UNATTRIBUTED;
      var text = {};
      Object.keys(s.text || {}).forEach(function (k) { text[k] = s.text[k]; });
      return {start: Number(s.start) || 0, who: who, actor: actor, voice: s.voice || '', text: text};
    });
    // The tie-break is STATED, not left to sort stability.
    out.sort(function (a, b) {
      var ka = [r3(a.start), a.actor, a.voice, a.text.en || ''];
      var kb = [r3(b.start), b.actor, b.voice, b.text.en || ''];
      for (var i = 0; i < ka.length; i++) {
        if (ka[i] < kb[i]) return -1;
        if (ka[i] > kb[i]) return 1;
      }
      return 0;
    });
    return out;
  }

  function languages(scene) {
    var seen = {};
    ((scene || {}).speech || []).forEach(function (s) {
      Object.keys(s.text || {}).forEach(function (k) { seen[k] = 1; });
    });
    var ls = Object.keys(seen).sort();
    return (seen.en ? ['en'] : []).concat(ls.filter(function (l) { return l !== 'en'; }));
  }

  function roster(scene) {
    var ts = turns(scene);
    if (!ts.length) {
      return {shape: 'silent', speakers: [], turns: 0, languages: languages(scene)};
    }
    var order = [], counts = {};
    ts.forEach(function (t) {
      if (!(t.who in counts)) { order.push(t.who); counts[t.who] = 0; }
      counts[t.who]++;
    });
    var shape;
    if ((UNATTRIBUTED in counts) && order.length > 1) shape = 'mixed';
    else if (order.length === 1 && order[0] === NARRATOR) shape = 'narration';
    else if (UNATTRIBUTED in counts) shape = 'unattributed';
    else shape = 'dialogue';
    return {shape: shape, turns: ts.length, languages: languages(scene),
            speakers: order.map(function (w) { return [w, counts[w]]; })};
  }

  function header(r) {
    if (r.shape === 'narration') return 'NARRATION (' + r.turns + ' turns, read by one voice)';
    if (r.shape === 'silent') return 'This lesson has no spoken lines.';
    var who = r.speakers.map(function (p) { return p[0]; }).join(', ');
    var kind = r.shape === 'dialogue' ? 'CONVERSATION' : 'SPEECH (some lines are unattributed)';
    return kind + ' (' + r.turns + ' turns, ' + r.speakers.length + ' speaker'
           + (r.speakers.length === 1 ? '' : 's') + ': ' + who + ')';
  }

  function select(ts, budget, head, tail) {
    budget = budget === undefined ? BUDGET_TURNS : budget;
    head = head === undefined ? HEAD_TURNS : head;
    tail = tail === undefined ? TAIL_TURNS : tail;
    if (ts.length <= budget) return {kept: ts, cut: null};
    return {kept: ts.slice(0, head).concat(ts.slice(ts.length - tail)),
            cut: {shown: head + tail, total: ts.length, head: head, tail: tail,
                  from: head + 1, to: ts.length - tail}};
  }

  function transcriptText(scene, langs, budget) {
    var ts = turns(scene), r = roster(scene);
    if (!ts.length) return header(r);
    var use = langs || r.languages || ['en'];
    var sel = select(ts, budget), kept = sel.kept, cut = sel.cut;
    var lines = [header(r)];
    if (cut) {
      lines.push('PARTIAL TRANSCRIPT - ' + cut.shown + ' of ' + cut.total + ' turns shown: the first '
                 + cut.head + ' and the last ' + cut.tail + '. Turns ' + cut.from + ' to ' + cut.to
                 + ' are OMITTED. Do not answer about the omitted turns; say they are not included.');
    }
    kept.forEach(function (t, i) {
      if (cut && i === cut.head) lines.push('   ... turns ' + cut.from + ' to ' + cut.to + ' omitted ...');
      var first = true;
      use.forEach(function (lg) {
        var txt = (t.text || {})[lg];
        if (!txt) return;
        if (first) { lines.push('[' + mmss(t.start) + '] ' + t.who + ': ' + txt); first = false; }
        else { lines.push('       (' + lg + ') ' + txt); }
      });
      if (first) lines.push('[' + mmss(t.start) + '] ' + t.who + ': (no text)');
    });
    return lines.join('\n');
  }

  function rosterText(scene) {
    var r = roster(scene);
    if (r.shape === 'silent') return 'This lesson has no spoken lines.';
    if (r.shape === 'narration') {
      return 'This lesson is narrated by a single voice over ' + r.turns + ' turns.';
    }
    return 'In speaking order: ' + r.speakers.map(function (p) {
      return p[0] + ' speaks ' + p[1] + ' time' + (p[1] === 1 ? '' : 's');
    }).join('; ') + '.';
  }

  root.Transcript = {
    NARRATOR: NARRATOR, UNATTRIBUTED: UNATTRIBUTED, BUDGET_TURNS: BUDGET_TURNS,
    HEAD_TURNS: HEAD_TURNS, TAIL_TURNS: TAIL_TURNS,
    mmss: mmss, displayName: displayName, turns: turns, languages: languages, roster: roster,
    select: select, transcriptText: transcriptText, rosterText: rosterText
  };
})(typeof window !== 'undefined' ? window : globalThis);
