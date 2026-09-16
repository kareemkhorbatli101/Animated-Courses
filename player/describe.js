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
  // ORDINALS[1] USED TO BE EMPTY, and that blank string was the whole of the "three cars" defect.
  // The builder names the first instance without a suffix - car, car_2, car_3, car_4 - so the prose
  // read "The car / The second car / The third car / The fourth car": three countable ordinals for
  // four cars, which is the wrong answer a model gave, verbatim.
  var ORDINALS = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth',
                  'ninth', 'tenth'];
  // Counts are stated as digit AND word; each fails in a different way on its own.
  var NUMWORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                 'ten', 'eleven', 'twelve'];
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

  function countWord(n) { return n < NUMWORD.length ? (n + ' (' + NUMWORD[n] + ')') : String(n); }

  // 'car_2' -> 'car'. The instance counter off, so siblings can be recognised as siblings.
  function kindOf(name) {
    var parts = String(name).split('_');
    return (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1]))
      ? parts.slice(0, -1).join('_') : String(name);
  }

  function countsFor(index) {
    var counts = {};
    index.objects.slice().sort(function (a, b) {
      return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    }).forEach(function (o) {
      var k = kindOf(o.name);
      counts[k] = (counts[k] || 0) + 1;
    });
    return counts;
  }

  // name -> the phrase to call it by, KNOWING ITS SIBLINGS. noun() cannot do this: it sees one name,
  // and an unsuffixed `car` is indistinguishable from a kind with a single instance. If a kind has
  // more than one instance every instance gets an ordinal INCLUDING THE FIRST; if it has one, none,
  // because "the first service desk" would invent a second.
  function nounsFor(index) {
    var counts = countsFor(index), out = {};
    index.objects.forEach(function (o) {
      var name = String(o.name), k = kindOf(name), parts = name.split('_');
      var last = parts[parts.length - 1];
      var n = (parts.length > 1 && /^\d+$/.test(last)) ? parseInt(last, 10) : 1;
      if ((counts[k] || 1) > 1) {
        out[name] = 'the ' + (n < ORDINALS.length ? ORDINALS[n] : 'number ' + n) + ' ' + label(k);
      } else {
        out[name] = 'the ' + label(k);
      }
    });
    return out;
  }

  function nounOf(o, nouns) { return (nouns && nouns[String(o.name)]) || noun(o.name); }

  // From the PLAN, not from any camera - this is how a person finds a thing in the room they are in.
  function where(centre) {
    var x = centre[0], z = centre[2];
    var side = x < -EDGE ? 'on the left' : (x > EDGE ? 'on the right' : 'in the middle');
    var end = z > EDGE ? ' at the back' : (z < -EDGE ? ' at the front' : '');
    return side + end;
  }

  // `nouns` and `counts` are optional only so a caller holding a single object can still describe it.
  // When given, the sentence carries an ordinal on the first instance and the bare plural noun -
  // "one of 4 cars" - which matters because the question was "can I see A CAR" and the phrase "a car"
  // appeared nowhere: every mention was an ordinal.
  function objectLine(o, nouns, counts) {
    var size = m(o.size[0]) + ' wide, ' + m(o.size[1]) + ' tall and ' + m(o.size[2]) + ' deep';
    var colour = o.colourName ? o.colourName + ' ' : '';
    var kind = CLASS_NOUN[o['class']] || o['class'] || 'object';
    var lift = (o.min && o.min[1] > RAISED) ? (', raised ' + m(o.min[1]) + ' off the floor') : '';
    var k = kindOf(o.name);
    var n = (counts && counts[k]) || 1;
    // The digit alone here. countsLine carries digit AND word because the count IS the answer there;
    // repeating "4 (four)" on all fifteen instance lines only adds noise to read past.
    var tag = n > 1 ? (' (one of ' + n + ' ' + label(k) + 's)') : '';
    return cap(nounOf(o, nouns) + tag + ' is ' + article(colour || kind) + ' ' + colour + kind + ', '
               + size + ', ' + where(o.centre) + lift + '.');
  }

  function relationLine(a, b, cam, nouns) {
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
      return p.replace('%s', i === 0 ? nounOf(b, nouns) : 'it');
    });
    return 'From this camera, ' + nounOf(a, nouns) + ' is ' + join(filled) + ', ' + m(rel.distance)
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
    var nouns = nounsFor(index);
    return 'This shot contains ' + join(vis.map(function (o) { return nounOf(o, nouns); }))
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
  // HOW MANY OF EACH KIND. All three browser models answered "15" to "how many cars?", reading it off
  // "holds 15 named objects" - the only number in the paragraph. The count they needed was never stated,
  // so the fault was the grounding's. A small model cannot infer a count by scanning fifteen sentences
  // for a shared noun; it can read one that says it.
  function countsLine(index) {
    var order = [], counts = {};
    index.objects.slice().sort(function (a, b) {
      return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    }).forEach(function (o) {
      var parts = String(o.name).split('_');
      var base = (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1]))
        ? parts.slice(0, -1).join('_') : o.name;
      if (!(base in counts)) { order.push(base); counts[base] = 0; }
      counts[base]++;
    });
    var many = [], once = [];
    order.forEach(function (b) {
      if (counts[b] > 1) many.push(countWord(counts[b]) + ' ' + label(b) + 's');
      else once.push(label(b));
    });
    if (many.length && once.length) {
      return 'The room contains ' + many.join(', ') + ', and one each of ' + join(once) + '.';
    }
    if (many.length) return 'The room contains ' + join(many) + '.';
    if (once.length) return 'The room contains one each of ' + join(once) + '.';
    return '';
  }

  function worldProse(index, scene, cam, fov) {
    var objs = index.objects.slice().sort(function (a, b) {
      return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    });
    var ex = index.extent || {};
    var xs = ex.x || [0, 0], zs = ex.z || [0, 0];
    var head = 'The ' + label(index.set) + ' is about ' + m(xs[1] - xs[0]) + ' across and '
               + m(zs[1] - zs[0]) + ' deep, and holds ' + objs.length + ' named objects.';
    var nouns = nounsFor(index), counts = countsFor(index);
    // COUNTS FIRST, ENUMERATION SECOND. The answer to "how many" is reached before the list a reader
    // would otherwise try to count, which is where "three" came from.
    var parts = [head, countsLine(index)].concat(objs.map(function (o) {
      return objectLine(o, nouns, counts);
    }));
    if (scene && cam) parts.push(actorsLine(scene, index, cam));
    if (cam && fov) parts.push(shotLine(index, cam, fov));
    return parts.filter(function (p) { return p; }).join(' ');
  }

  // A signed two-decimal number by the shared rule. Screen coordinates, not distances.
  function sn(x) {
    var v = S.r(Number(x), 2);
    var cents = Math.floor(Math.abs(v) * 100 + 0.5);
    var whole = Math.floor(cents / 100), frac = cents % 100;
    return (v < 0 ? '-' : '+') + whole + '.' + (frac < 10 ? '0' : '') + frac;
  }

  function pct(x) { return Math.floor(S.r(Number(x), 4) * 100.0 + 0.5) + '%'; }

  // No trailing zeros - "38 degrees", not "38.00 degrees", which invites a precision nobody has.
  function deg(x) {
    var v = S.r(Number(x), 2);
    var cents = Math.floor(Math.abs(v) * 100 + 0.5);
    var sign = v < 0 ? '-' : '';
    var whole = Math.floor(cents / 100), frac = cents % 100;
    return frac === 0 ? (sign + whole) : (sign + whole + '.' + (frac < 10 ? '0' : '') + frac);
  }

  // Where in the PICTURE, in the words a person would use. Never where in the room.
  function screenWhere(sx, sy) {
    var side = sx < -0.33 ? 'left' : (sx > 0.33 ? 'right' : 'centre');
    var up = sy > 0.33 ? ', high' : (sy < -0.33 ? ', low' : '');
    var edge = (Math.abs(sx) > 1.0 || Math.abs(sy) > 1.0) ? ', partly out of frame' : '';
    return side + up + edge + ' (x ' + sn(sx) + ', y ' + sn(sy) + ')';
  }

  // Who is speaking at this instant - a frame fact the grounding never carried.
  function speakingAt(scene, t) {
    var sp = (((scene || {}).speech) || []).slice().sort(function (a, b) {
      return (a.start || 0.0) - (b.start || 0.0);
    });
    for (var i = 0; i < sp.length; i++) {
      if (sp[i].actor && sp[i].start <= t && t < sp[i].start + (sp[i].dur || 0.0)) {
        return String(sp[i].actor);
      }
    }
    return '';
  }

  // The people inside the frame, NEAREST FIRST. inShot() covers set objects only, so before this no
  // actor could ever appear in the visible set however the prose was worded.
  function visibleActors(scene, cam, fov, aspect) {
    var out = [];
    (((scene || {}).actors) || []).forEach(function (a) {
      if (!a.pos) return;
      var h = a.h || 1.78;
      var q = S.screen([a.pos[0], a.pos[1] + h / 2.0, a.pos[2]], cam, fov, aspect);
      if (q && Math.abs(q[0]) <= 1.0) out.push([q, a]);
    });
    out.sort(function (p, q) {
      var dp = S.r(p[0][2], 4), dq = S.r(q[0][2], 4);
      if (dp !== dq) return dp < dq ? -1 : 1;
      var x = String(p[1].id || ''), y = String(q[1].id || '');
      return x < y ? -1 : (x > y ? 1 : 0);
    });
    return out;
  }

  // HOW MANY OF EACH KIND ARE IN THIS FRAME - and how many are not. "How many X" is the commonest
  // question there is, and the old grounding answered it only for the whole room.
  function frameCountsLine(index, cam, fov, aspect) {
    var counts = countsFor(index), here = {};
    inShot(index, cam, fov, aspect).forEach(function (o) {
      var k = kindOf(o.name);
      here[k] = (here[k] || 0) + 1;
    });
    var shown = Object.keys(here).sort().map(function (k) {
      return countWord(here[k]) + ' ' + label(k) + (here[k] === 1 ? '' : 's');
    });
    // "more" ONLY where some of that kind is on screen. "1 more battery meter" was being said of the
    // only battery meter in the building, which asserts a second one that does not exist.
    var rest = [];
    Object.keys(counts).sort().forEach(function (k) {
      var left = counts[k] - (here[k] || 0);
      if (left <= 0) return;
      rest.push(countWord(left) + (here[k] ? ' more' : '') + ' ' + label(k) + (left === 1 ? '' : 's'));
    });
    var a = shown.length ? ('VISIBLE IN THIS FRAME: ' + join(shown) + '.')
      : 'VISIBLE IN THIS FRAME: none of the named objects.';
    var b = rest.length ? ('NOT VISIBLE IN THIS FRAME, elsewhere in the room: ' + join(rest) + '.')
      : 'NOT VISIBLE IN THIS FRAME: nothing - every named object is in this shot.';
    return a + ' ' + b;
  }

  // WHAT IS IN THIS PICTURE, separated from what is merely in the room. A TABLE, not prose, and the
  // reason is measured: truncated at any point a row is visibly short of its fields, while a truncated
  // sentence reads as a finished statement that is simply wrong.
  function frameBlock(index, scene, cam, fov, t, aspect, detail) {
    var nouns = nounsFor(index), counts = countsFor(index);
    var vis = inShot(index, cam, fov, aspect);
    var head = 'IN THIS FRAME at ' + deg(t) + ' seconds. Screen coordinates run -1.00 at the left or '
             + 'bottom edge to +1.00 at the right or top edge; the camera\'s field of view is '
             + deg(fov) + ' degrees.';
    var rows = ['| what it is | colour | where on screen | distance from camera | height on screen |'];
    vis.forEach(function (o) {
      var q = S.screen(o.centre, cam, fov, aspect);
      if (!q) return;
      var k = kindOf(o.name), n = counts[k] || 1;
      var what = nounOf(o, nouns) + (n > 1 ? (' - one of ' + n + ' ' + label(k) + 's in the room') : '');
      var hf = (o.max[1] - o.min[1]) / (2.0 * q[3]);
      rows.push('| ' + what + ' | ' + (o.colourName || 'unnamed colour') + ' | '
                + screenWhere(q[0], q[1]) + ' | ' + m(q[2]) + ' | ' + pct(hf) + ' |');
    });
    if (rows.length === 1) rows.push('| nothing in the index is inside this shot | - | - | - | - |');

    var people = visibleActors(scene, cam, fov, aspect);
    var spk = speakingAt(scene, t);
    var prow = ['PEOPLE IN THIS FRAME:',
                '| who | where on screen | distance from camera | speaking now |'];
    people.forEach(function (pair) {
      var q = pair[0], a = pair[1];
      prow.push('| ' + cap(String(a.id || 'someone')) + ' | ' + screenWhere(q[0], q[1]) + ' | '
                + m(q[2]) + ' | ' + (String(a.id) === spk ? 'yes' : 'no') + ' |');
    });
    if (!people.length) prow.push('| nobody is in this frame | - | - | - |');
    var seen = people.map(function (p) { return String(p[1].id); });
    var away = (((scene || {}).actors) || []).slice().sort(function (a, b) {
      var x = String(a.id || ''), y = String(b.id || '');
      return x < y ? -1 : (x > y ? 1 : 0);
    }).filter(function (a) { return seen.indexOf(String(a.id)) < 0; })
      .map(function (a) { return cap(String(a.id)); });
    if (away.length) {
      prow.push('NOT IN THIS FRAME: ' + join(away) + ' ' + (away.length === 1 ? 'is' : 'are')
                + ' in the lesson but outside this shot.');
    }
    if (spk && seen.indexOf(spk) < 0) {
      prow.push(cap(spk) + ' is speaking now but is not in this frame.');
    }

    var tail = [frameCountsLine(index, cam, fov, aspect)];
    if (detail) {
      tail.push('EVERY NAMED OBJECT IN THE ROOM, whether or not it is in this frame:');
      var objs = index.objects.slice().sort(function (a, b) {
        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
      });
      tail.push(objs.map(function (o) { return objectLine(o, nouns, counts); }).join(' '));
    } else {
      tail.push('Ask about the room, or tick Send full detail, for the objects that are not in '
                + 'this frame.');
    }
    return [head].concat(rows).concat(prow).concat(tail).join('\n');
  }

  // WHAT THESE FACTS COVER. The first wrong answer was to a question about "the first frame" asked in
  // a mode whose grounding contains no frame, no camera and no clock - and the model answered anyway.
  function scopeLine(hasCamera) {
    if (hasCamera) {
      return 'These facts describe ONE MOMENT of the lesson - the picture on screen at the time '
           + 'given - and the room around it.';
    }
    return 'These facts describe THE WHOLE ROOM across the whole lesson, not any single moment. '
         + 'They do not say what is on screen at any particular time. If the question is about what '
         + 'can be seen right now, it cannot be answered from these facts: say so, and say that '
         + '“Ask about the current frame” is the mode that answers it.';
  }

  root.Describe = {
    EDGE: EDGE, CLASS_NOUN: CLASS_NOUN,
    m: m, join: join, article: article, label: label, cap: cap, noun: noun, where: where,
    countsLine: countsLine, countWord: countWord, kindOf: kindOf, countsFor: countsFor,
    nounsFor: nounsFor, sn: sn, pct: pct, deg: deg, screenWhere: screenWhere,
    speakingAt: speakingAt, visibleActors: visibleActors, frameCountsLine: frameCountsLine,
    frameBlock: frameBlock, scopeLine: scopeLine,
    objectLine: objectLine, relationLine: relationLine, inShot: inShot, shotLine: shotLine,
    actorsLine: actorsLine, worldProse: worldProse
  };
})(typeof window !== 'undefined' ? window : globalThis);
