/* icons.js — line-art icons keyed by CONCEPT, not by picture.
 *
 * The point is F50: the same idea takes the same icon in all twelve
 * units, so the icon becomes a retrieval cue rather than decoration.
 * `measurement`, `comparison`, `evidence`, `inference` and `claim` recur
 * in every unit of this book under different subject matter, and this is
 * what makes that visible.
 *
 * Drawn in a 24x24 box, stroke only, currentColor, so an icon inherits
 * the colour of whatever it sits in and needs no second palette.
 */
(function (root) {
  "use strict";
  var P = {
    /* the five that recur across every unit */
    measurement: 'M3 17h18M6 17V9M11 17V5M16 17v-7M21 17v-4',
    comparison:  'M12 4v16M4 8h5M4 14h5M15 8h5M15 14h5',
    evidence:    'M5 4h10l4 4v12H5zM15 4v4h4M8 13h8M8 17h5',
    inference:   'M4 7h6M4 12h6M4 17h6M13 12h7M17 9l3 3-3 3',
    claim:       'M6 4h12v11H9l-3 3z',
    /* process and method */
    sequence:    'M4 6h5v4H4zM15 6h5v4h-5zM4 14h5v4H4zM9 8h6M9 16h6M12 10v4',
    cause:       'M4 16c3-9 6-9 9 0s6 9 7 0',
    sample:      'M4 19h16M8 19V9a4 4 0 118 0v10M8 13h8',
    error:       'M12 3l9 16H3zM12 9v5M12 17h.01',
    correct:     'M4 13l5 5L20 7',
    /* language */
    word:        'M5 19l5-14h4l5 14M8 14h8',
    sound:       'M4 9v6h4l5 4V5L8 9zM17 9a5 5 0 010 6',
    write:       'M4 20h16M5 16l10-10 3 3-10 10H5z',
    listen:      'M4 12a8 8 0 1116 0v5a3 3 0 01-3 3h-1M4 12v5a3 3 0 003 3h1',
    speak:       'M12 3a4 4 0 014 4v5a4 4 0 01-8 0V7a4 4 0 014-4zM5 11a7 7 0 0014 0M12 18v3',
    read:        'M12 6c-3-2-6-2-8-1v12c2-1 5-1 8 1 3-2 6-2 8-1V5c-2-1-5-1-8 1zM12 6v12',
    /* study and review */
    recall:      'M4 12a8 8 0 108-8v3M12 4L9 7l3 3M12 8v4l3 2',
    spacing:     'M4 12h3M11 12h2M17 12h3M5 8v8M19 8v8',
    card:        'M4 6h12v12H4zM8 3h12v12',
    time:        'M12 21a9 9 0 110-18 9 9 0 010 18zM12 7v5l3 2',
    place:       'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 8a2 2 0 100 4 2 2 0 000-4z',
    people:      'M8 11a3 3 0 100-6 3 3 0 000 6zM3 20v-1a5 5 0 015-5M16 11a3 3 0 100-6 3 3 0 000 6zM13 20v-1a5 5 0 015-5h1',
    money:       'M12 3v18M8 7h6a3 3 0 010 6H9a3 3 0 000 6h7',
    question:    'M9 9a3 3 0 115 2c-1 1-2 1.5-2 3M12 18h.01M12 21a9 9 0 110-18 9 9 0 010 18z'
  };

  /* A concept may be named by several words; map them to one drawing so
     a data file can say what it means rather than what to draw. */
  var ALIAS = {
    measure: 'measurement', number: 'measurement', chart: 'measurement', data: 'measurement',
    compare: 'comparison', contrast: 'comparison', sort: 'comparison',
    proof: 'evidence', source: 'evidence', cite: 'evidence', record: 'evidence',
    infer: 'inference', reason: 'inference', because: 'inference', conclude: 'inference',
    opinion: 'claim', argue: 'claim', interpretation: 'claim', assert: 'claim',
    order: 'sequence', process: 'sequence', steps: 'sequence',
    effect: 'cause', mechanism: 'cause',
    population: 'sample', denominator: 'sample', survey: 'sample',
    mistake: 'error', wrong: 'error', fix: 'correct', right: 'correct', check: 'correct',
    vocabulary: 'word', affix: 'word', spelling: 'word', grammar: 'word',
    audio: 'sound', pronounce: 'sound', hear: 'listen',
    essay: 'write', email: 'write', paragraph: 'write',
    passage: 'read', text: 'read', article: 'read',
    memory: 'recall', test: 'recall', review: 'spacing', schedule: 'spacing',
    cards: 'card', term: 'card',
    clock: 'time', duration: 'time',
    map: 'place', site: 'place', city: 'place',
    audience: 'people', group: 'people', team: 'people',
    cost: 'money', price: 'money', incentive: 'money',
    ask: 'question', hint: 'question', explain: 'question'
  };

  function resolve(name) {
    var k = String(name || "").toLowerCase();
    return P[k] ? k : (ALIAS[k] && P[ALIAS[k]] ? ALIAS[k] : null);
  }

  /* svg(name, size) -> markup, or "" when the concept is unknown, so a
     caller can tell the difference between "no icon" and "wrong icon". */
  function svg(name, size) {
    var k = resolve(name);
    if (!k) return "";
    var s = size || 20;
    return '<svg class="icon" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true"><path d="' + P[k] + '"/></svg>';
  }

  /* A labelled badge: icon plus the concept, for the top of an exercise. */
  function badge(doc, name, label) {
    var k = resolve(name);
    if (!k) return null;
    var b = doc.createElement("span");
    b.className = "icon-badge";
    b.innerHTML = svg(k, 18) + "<span>" + (label || k) + "</span>";
    return b;
  }

  root.Icons = { svg: svg, badge: badge, resolve: resolve,
                 names: Object.keys(P), aliases: Object.keys(ALIAS) };
})(window);
