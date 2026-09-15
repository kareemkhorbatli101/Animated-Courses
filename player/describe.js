/* TRACK B - the world in sentences, in the browser. Mirrors engine/describe.py line for line.
 *
 * The two rules are the same ones the Python states, and they are the reason this exists at all:
 *
 *   NO WORD IS INVENTED. Every adjective traces to a measured value. A model handed this text can still
 *   write badly; it cannot be misled by us.
 *
 *   THE SAME INPUTS GIVE THE SAME BYTES - and now also ACROSS LANGUAGES, which is what the parity gate
 *   checks. If the browser's sentence and the engine's sentence ever differ, the grounding a model
 *   receives is no longer the grounding we tested, and every claim about truthfulness is void.
 */
(function (root) {
  'use strict';

  var S = root.Spatial;

  var EDGE = 3.0;
  // Above this a thing is OFF THE FLOOR and the prose says so. A model asked which car was higher off
  // the ground could not answer: every sentence gave sizes and floor positions, none gave elevation.
  var RAISED = 0.30;
  var ORDINALS = ['', '', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth',
                  'ninth', 'tenth'];
  // Mass nouns: English has no "a furniture" or "an equipment". The index's class vocabulary is a
  // classification, not a phrase, and is left free to say the true thing.
  var CLASS_NOUN = { furniture: 'piece of furniture', equipment: 'piece of equipment' };

  // ONE formatter for every distance, so the text cannot drift between sentences OR between languages.
  // Uses the shared half-up rule (Spatial.r), never toFixed on a raw double.
  function m(x) {
    var v = S.r(Number(x), 2);
    var neg = v < 0;
    var cents = Math.round(Math.abs(v) * 100);
    var whole = Math.floor(cents / 100), frac = cents % 100;
    return (neg ? '-' : '') + whole + '.' + (frac < 10 ? '0' : '') + frac + ' m';
  }

  function join(items) {
    items = items.filter(function (i) { return i; });
    if (!items.length) return '';
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  }

  function article(word) {
    return 'aeiou'.indexOf(String(word).charAt(0).toLowerCase()) >= 0 ? 'an' : 'a';
  }

  function label(name) { return String(name).split('_').join(' '); }

  // Only the first character - capitalize() would lower-case "Maher" inside its own sentence.
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  // 'tool_cabinet_2' -> 'the second tool cabinet'. The trailing number is the builder's instance
  // counter; rendering it as an ordinal keeps the text readable without losing the distinction.
  function noun(name) {
    var parts = String(name).split('_');
    var ordWord = '';
    var last = parts[parts.length - 1];
    if (parts.length > 1 && /^\d+$/.test(last)) {
      var n = parseInt(last, 10);
      ordWord = n < ORDINALS.length ? ORDINALS[n] : 'number ' + n;
      parts = parts.slice(0, -1);
    }
    var base = parts.join(' ');
    return 'the ' + (ordWord ? ordWord + ' ' + base : base);
  }

  // From the PLAN, not from any camera - this is how a person finds a thing in the room they are in.
  function where(centre) {
    var x = centre[0], z = centre[2];
    var side = x < -EDGE ? 'on the left' : (x > EDGE ? 'on the right' : 'in the middle');
    var end = z > EDGE ? ' at the back' : (z < -EDGE ? ' at the front' : '');
    return side + end;
  }

  function objectLine(o) {
    var size = m(o.size[0]) + ' wide, ' + m(o.size[1]) + ' tall and ' + m(o.size[2]) + ' deep';
    var colour = o.colourName ? o.colourName + ' ' : '';
    var kind = CLASS_NOUN[o['class']] || o['class'] || 'object';
    var lift = (o.min && o.min[1] > RAISED) ? (', raised ' + m(o.min[1]) + ' off the floor') : '';
    return cap(noun(o.name) + ' is ' + article(colour || kind) + ' ' + colour + kind + ', '
               + size + ', ' + where(o.centre) + lift + '.');
  }

  function relationLine(a, b, cam) {
    var rel = S.relate(a.centre, b.centre, cam);
    // Each relation carries its OWN preposition: "nearer TO the camera" and "farther FROM the camera"
    // cannot share a connector. Gluing bare words gave "nearer than and below the car".
    var phrases = [];
    if (rel.side !== 'level with') phrases.push('to the ' + rel.side + ' of %s');
    if (rel.depth === 'nearer') phrases.push('nearer to the camera than %s');
    else if (rel.depth === 'farther') phrases.push('farther from the camera than %s');
    if (rel.height !== 'level with') phrases.push(rel.height + ' %s');
    if (!phrases.length) phrases = ['in the same place as %s'];
    var filled = phrases.map(function (p, i) {
      return p.replace('%s', i === 0 ? noun(b.name) : 'it');
    });
    return 'From this camera, ' + noun(a.name) + ' is ' + join(filled) + ', ' + m(rel.distance)
           + ' away' + (rel.near ? ' - the two are next to each other' : '') + '.';
  }

  // NEAREST FIRST, with the same tie-break as the Python so the two orders cannot diverge.
  function inShot(index, cam, fov, aspect) {
    var out = [];
    index.objects.forEach(function (o) {
      if (S.inView(o.min, o.max, cam, fov, aspect)) {
        out.push([S.r(S.toCamera(o.centre, cam)[2], 4), o]);
      }
    });
    out.sort(function (p, q) {
      if (p[0] !== q[0]) return p[0] < q[0] ? -1 : 1;
      return p[1].name < q[1].name ? -1 : (p[1].name > q[1].name ? 1 : 0);
    });
    return out.map(function (p) { return p[1]; });
  }

  function shotLine(index, cam, fov, aspect) {
    var vis = inShot(index, cam, fov, aspect);
    if (!vis.length) return 'Nothing in the index is inside this shot.';
    return 'This shot contains ' + join(vis.map(function (o) { return noun(o.name); }))
           + ' - nearest first.';
  }

  function actorsLine(scene, index, cam) {
    var actors = (scene && scene.actors) || [];
    if (!actors.length) return '';
    var sorted = actors.slice().sort(function (a, b) {
      var x = a.id || '', y = b.id || '';
      return x < y ? -1 : (x > y ? 1 : 0);
    });
    var lines = [];
    sorted.forEach(function (a) {
      if (!a.pos) return;
      // The nearest named object is the landmark a person would actually use.
      var best = null, bestKey = null;
      index.objects.forEach(function (o) {
        var key = [S.r(S.distance(a.pos, o.centre), 4), o.name];
        if (bestKey === null || key[0] < bestKey[0] || (key[0] === bestKey[0] && key[1] < bestKey[1])) {
          best = o; bestKey = key;
        }
      });
      var d = S.distance(a.pos, best.centre);
      lines.push(cap(String(a.id || 'someone')) + ' is standing ' + where(a.pos) + ', ' + m(d)
                 + ' from ' + noun(best.name) + '.');
    });
    return lines.join(' ');
  }

  // Camera-dependent statements appear ONLY when a camera is given, and stay in their own sentences, so
  // text produced without one can never carry a claim that depends on one.
  function worldProse(index, scene, cam, fov) {
    var objs = index.objects.slice().sort(function (a, b) {
      return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    });
    var ex = index.extent || {};
    var xs = ex.x || [0, 0], zs = ex.z || [0, 0];
    var head = 'The ' + label(index.set) + ' is about ' + m(xs[1] - xs[0]) + ' across and '
               + m(zs[1] - zs[0]) + ' deep, and holds ' + objs.length + ' named objects.';
    var parts = [head].concat(objs.map(objectLine));
    if (scene && cam) parts.push(actorsLine(scene, index, cam));
    if (cam && fov) parts.push(shotLine(index, cam, fov));
    return parts.filter(function (p) { return p; }).join(' ');
  }

  root.Describe = {
    EDGE: EDGE, CLASS_NOUN: CLASS_NOUN,
    m: m, join: join, article: article, label: label, cap: cap, noun: noun, where: where,
    objectLine: objectLine, relationLine: relationLine, inShot: inShot, shotLine: shotLine,
    actorsLine: actorsLine, worldProse: worldProse
  };
})(typeof window !== 'undefined' ? window : globalThis);
