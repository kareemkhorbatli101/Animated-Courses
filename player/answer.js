/* TRACK B - ASK THE INDEX BEFORE ASKING THE MODEL. Mirrors engine/answer.py line for line.
 *
 * Both of the questions that produced this file were LOOKUPS, not inferences:
 *
 *     "how many cars does the first frame have"   -> a count over inView()
 *     "can I see a car in this frame"             -> a membership test on inShot()
 *
 * The first was answered "three" (there are four) and the second "no" (one filled the centre of the
 * picture). The page already holds inView(), Spatial.screen(), the class index and the counts, so
 * sending a question of that shape to a 0.5B model is choosing to be wrong slowly.
 *
 * A ROUTER THAT GUESSES IS WORSE THAN NO ROUTER: a wrong deterministic answer carries the authority
 * of a measurement. Every template either matches exactly and answers from the index, or DECLINES.
 * Matching the shape of a question is not permission to answer it.
 *
 * Held character-for-character equal to the Python by gates/answer_parity.py.
 */
(function (root) {
  'use strict';

  var S = root.Spatial;
  var D = root.Describe;
  var ASPECT = 16.0 / 9.0;

  // SEEING IS A FRAME WORD: "how many people can I see" asked in room mode answered about the whole
  // lesson, because nothing in the question named a frame - the very failure being fixed, reproduced
  // inside the fix. "the first frame" is here because it is what was actually typed.
  var FRAME_WORDS = new RegExp('\\b(?:this|the|current|first) (?:frame|shot|picture|image|view)\\b'
    + '|\\b(?:on screen|onscreen|in view|visible|right now|at the moment)\\b'
    + '|\\b(?:can|do|could) (?:i|you) see\\b|\\bi can see\\b', 'i');
  var ROOM_WORDS = new RegExp('\\b(?:the room|the workshop|the office|in total|altogether|anywhere'
    + '|in the whole|overall|in the lesson)\\b', 'i');

  var PEOPLE_WORDS = ['people', 'person', 'man', 'men', 'woman', 'women', 'human', 'humans',
    'character', 'characters', 'actor', 'actors', 'mechanic', 'mechanics', 'student', 'students',
    'worker', 'workers', 'everyone', 'anybody', 'anyone', 'somebody'];

  var PATTERNS = [
    ['who_visible', new RegExp('\\bwho\\s+(?:can i see|can you see|is (?:in|on)\\s+(?:this|the)\\s+'
      + '(?:frame|shot|picture|screen))', 'i')],
    ['who_speaks', new RegExp('\\bwho(?:\'s| is| was)\\s+(?:speaking|talking|saying)', 'i')],
    ['count', new RegExp('\\bhow many\\s+([a-z ]+?)\\s*(?:\\b(?:are|is|does|do|can|will|there)\\b'
      + '|\\?|$)', 'i')],
    // ARTICLE ALTERNATIVES RUN LONGEST FIRST. Written `a|an|any`, the engine matches the "a" of
    // "any tool cabinets" and leaves "ny tool cabinets" as the noun, declining a question it
    // understands. Found by the parity gate's coverage check, not by reading the pattern.
    ['can_see', new RegExp('\\b(?:can i see|do i see|can you see|do you see|is there|are there)\\s+'
      + '(?:any|an|a|the)?\\s*([a-z ]+?)\\s*(?:\\bin\\b|\\?|$)', 'i')],
    ['where', new RegExp('\\bwhere(?:\'s| is| are)\\s+(?:the|an|a)?\\s*([a-z ]+?)\\s*'
      + '(?:\\bin\\b|\\?|$)', 'i')],
    ['colour', new RegExp('\\bwhat colou?r\\s+(?:is|are)\\s+(?:the|an|a)?\\s*([a-z ]+?)\\s*'
      + '(?:\\?|$)', 'i')],
    ['size', new RegExp('\\bhow (?:big|large|wide|tall)\\s+(?:is|are)\\s+(?:the|an|a)?\\s*'
      + '([a-z ]+?)\\s*(?:\\?|$)', 'i')]
  ];

  // A spelling rule, not a morphology engine. It never invents a kind: an unmatched word simply
  // fails to be a kind, and the question is declined rather than answered about something else.
  function normKind(word) {
    var w = String(word).toLowerCase().replace(/[^a-z ]/g, ' ').replace(/^\s+|\s+$/g, '');
    w = w.replace(/\s+/g, '_');
    if (/ies$/.test(w)) w = w.slice(0, -3) + 'y';
    else if (/es$/.test(w) && /(s|x|z|ch|sh)$/.test(w.slice(0, -2))) w = w.slice(0, -2);
    else if (/s$/.test(w) && !/ss$/.test(w)) w = w.slice(0, -1);
    return w;
  }

  function scopeOf(question, def) {
    if (FRAME_WORDS.test(question)) return 'frame';
    if (ROOM_WORDS.test(question)) return 'room';
    return def;
  }

  function kinds(index) {
    var out = {};
    index.objects.slice().sort(function (a, b) {
      return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    }).forEach(function (o) {
      var k = D.kindOf(o.name);
      if (!out[k]) out[k] = [];
      out[k].push(o);
    });
    return out;
  }

  function visible(objs, cam, fov, aspect) {
    return objs.filter(function (o) { return S.inView(o.min, o.max, cam, fov, aspect); });
  }

  function plural(n, word) { return D.countWord(n) + ' ' + word + (n === 1 ? '' : 's'); }

  function nounOf(o, nouns) { return (nouns && nouns[String(o.name)]) || D.noun(o.name); }

  function one(o, cam, fov, nouns, aspect) {
    var q = S.screen(o.centre, cam, fov, aspect);
    if (!q) return nounOf(o, nouns);
    var hf = (o.max[1] - o.min[1]) / (2.0 * q[3]);
    return nounOf(o, nouns) + ' (' + (o.colourName || o['class'] || 'object') + '), '
      + D.screenWhere(q[0], q[1]) + ', ' + D.m(q[2]) + ' from the camera, ' + D.pct(hf)
      + ' of the frame height';
  }

  function count(index, scene, cam, fov, kind, scope, aspect) {
    var ks, lbl, total, vis, nouns;
    if (kind === 'person') {
      total = ((scene || {}).actors || []).length;
      if (scope !== 'frame' || !cam) {
        return total === 1 ? ('There ' + plural(total, 'person') + ' in the lesson.')
          : ('There are ' + plural(total, 'person') + ' in the lesson.');
      }
      vis = D.visibleActors(scene, cam, fov, aspect);
      var who = D.join(vis.map(function (p) { return D.cap(String(p[1].id)); }));
      return D.countWord(vis.length) + ' of the ' + total + ' in the lesson '
        + (vis.length === 1 ? 'is' : 'are') + ' visible in this frame'
        + (who ? (': ' + who) : '') + '.';
    }
    ks = kinds(index);
    if (!ks[kind]) return null;
    lbl = D.label(kind);
    total = ks[kind].length;
    if (scope === 'room' || !cam) {
      return 'There ' + (total === 1 ? 'is' : 'are') + ' ' + plural(total, lbl) + ' in the room.';
    }
    nouns = D.nounsFor(index);
    vis = visible(ks[kind], cam, fov, aspect);
    if (!vis.length) {
      return 'No ' + lbl + ' is visible in this frame. The room holds ' + plural(total, lbl)
        + ' in total.';
    }
    return plural(vis.length, lbl) + ' ' + (vis.length === 1 ? 'is' : 'are')
      + ' visible in this frame: '
      + D.join(vis.map(function (o) { return nounOf(o, nouns) + ' (' + (o.colourName || lbl) + ')'; }))
      + '. The room holds ' + plural(total, lbl) + ' in total.';
  }

  function canSee(index, scene, cam, fov, kind, yesno, aspect) {
    if (!cam) return null;
    var ks, lbl, vis, total, nouns;
    if (kind === 'person') {
      vis = D.visibleActors(scene, cam, fov, aspect);
      total = ((scene || {}).actors || []).length;
      if (!vis.length) return (yesno ? 'No, ' : '') + 'nobody is visible in this frame.';
      var body = D.join(vis.map(function (p) {
        return D.cap(String(p[1].id)) + ' (' + D.screenWhere(p[0][0], p[0][1]) + ', '
          + D.m(p[0][2]) + ' from the camera)';
      }));
      var seen = vis.map(function (p) { return String(p[1].id); });
      var away = ((scene || {}).actors || []).slice().sort(function (a, b) {
        var x = String(a.id || ''), y = String(b.id || '');
        return x < y ? -1 : (x > y ? 1 : 0);
      }).filter(function (a) { return seen.indexOf(String(a.id)) < 0; })
        .map(function (a) { return D.cap(String(a.id)); });
      var tail = away.length ? (' ' + D.join(away) + ' ' + (away.length === 1 ? 'is' : 'are')
        + ' in the lesson but outside this shot.') : '';
      return (yesno ? 'Yes. ' : '') + D.countWord(vis.length) + ' of the ' + total + ' '
        + (total === 1 ? 'person' : 'people') + ' in the lesson '
        + (vis.length === 1 ? 'is' : 'are') + ' visible: ' + body + '.' + tail;
    }
    ks = kinds(index);
    if (!ks[kind]) return null;
    lbl = D.label(kind);
    vis = visible(ks[kind], cam, fov, aspect);
    total = ks[kind].length;
    if (!vis.length) {
      return 'No, no ' + lbl + ' is visible in this frame. There ' + (total === 1 ? 'is' : 'are')
        + ' ' + plural(total, lbl) + ' in the room, but ' + (total === 1 ? 'it is' : 'they are')
        + ' outside this shot.';
    }
    nouns = D.nounsFor(index);
    return 'Yes, you can see ' + plural(vis.length, lbl) + ': '
      + vis.map(function (o) { return one(o, cam, fov, nouns, aspect); }).join('; ') + '.';
  }

  function whereIs(index, scene, cam, fov, kind, scope, aspect) {
    var ks = kinds(index);
    if (!ks[kind]) return null;
    var nouns = D.nounsFor(index);
    var outs = ks[kind].map(function (o) {
      if (scope === 'frame' && cam) {
        var seen = S.inView(o.min, o.max, cam, fov, aspect);
        var q = S.screen(o.centre, cam, fov, aspect);
        return nounOf(o, nouns) + ' is ' + ((q && seen)
          ? (D.screenWhere(q[0], q[1]) + ', ' + D.m(q[2]) + ' from the camera')
          : 'not visible in this frame');
      }
      return nounOf(o, nouns) + ' is ' + D.where(o.centre);
    });
    return D.cap(outs.join('; ') + '.');
  }

  function colour(index, kind) {
    var ks = kinds(index);
    if (!ks[kind]) return null;
    var nouns = D.nounsFor(index);
    return D.cap(ks[kind].map(function (o) {
      return nounOf(o, nouns) + ' is ' + (o.colourName || 'an unnamed colour');
    }).join('; ') + '.');
  }

  function size(index, kind) {
    var ks = kinds(index);
    if (!ks[kind]) return null;
    var nouns = D.nounsFor(index);
    return D.cap(ks[kind].map(function (o) {
      return nounOf(o, nouns) + ' is ' + D.m(o.size[0]) + ' wide, ' + D.m(o.size[1]) + ' tall and '
        + D.m(o.size[2]) + ' deep';
    }).join('; ') + '.');
  }

  function whoSpeaks(scene, t) {
    var who = D.speakingAt(scene, t);
    if (!who) return 'Nobody is speaking at ' + D.deg(t) + ' seconds.';
    var line = '';
    var sp = ((scene || {}).speech || []).slice().sort(function (a, b) {
      return (a.start || 0.0) - (b.start || 0.0);
    });
    for (var i = 0; i < sp.length; i++) {
      if (sp[i].actor === who && sp[i].start <= t && t < sp[i].start + (sp[i].dur || 0.0)) {
        line = (sp[i].text || {}).en || '';
        break;
      }
    }
    return D.cap(who) + ' is speaking' + (line ? (': \u201c' + line + '\u201d') : '') + '.';
  }

  // Returns [answer, template], or [null, null] meaning the model should handle it.
  function answer(question, index, scene, cam, fov, t, defaultScope, aspect) {
    if (fov === undefined || fov === null) fov = 38.0;
    if (t === undefined || t === null) t = 0.0;
    if (!defaultScope) defaultScope = 'room';
    if (!aspect) aspect = ASPECT;
    var q = String(question || '').split(/\s+/).filter(function (w) { return w; }).join(' ');
    if (!q) return [null, null];
    var scope = scopeOf(q, defaultScope);
    for (var i = 0; i < PATTERNS.length; i++) {
      var name = PATTERNS[i][0], mm = PATTERNS[i][1].exec(q);
      if (!mm) continue;
      if (name === 'who_visible') return [canSee(index, scene, cam, fov, 'person', false, aspect), name];
      if (name === 'who_speaks') return [whoSpeaks(scene, t), name];
      var raw = String(mm[1]).replace(/^\s+|\s+$/g, '');
      var nk = normKind(raw);
      var isPerson = PEOPLE_WORDS.map(normKind).indexOf(nk) >= 0;
      var kind = isPerson ? 'person' : nk;
      var out = null;
      if (name === 'count') out = count(index, scene, cam, fov, kind, scope, aspect);
      else if (name === 'can_see') out = canSee(index, scene, cam, fov, kind, true, aspect);
      else if (name === 'where') out = whereIs(index, scene, cam, fov, kind, scope, aspect);
      else if (name === 'colour') out = colour(index, kind);
      else if (name === 'size') out = size(index, kind);
      if (out) return [out, name];
      // MATCHED THE SHAPE, NOT THE VOCABULARY. Answering "0 unicorns" would be confidently wrong
      // about a question that was never understood.
      return [null, null];
    }
    return [null, null];
  }

  root.Answer = {
    FRAME_WORDS: FRAME_WORDS, ROOM_WORDS: ROOM_WORDS, PEOPLE_WORDS: PEOPLE_WORDS,
    normKind: normKind, scopeOf: scopeOf, answer: answer
  };
})(typeof window !== 'undefined' ? window : globalThis);
