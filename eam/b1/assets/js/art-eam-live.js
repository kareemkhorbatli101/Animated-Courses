/* ============================================================
   English for Auto Maintenance B1 — art-eam-live.js

   ONE ANIMATED FIGURE PER UNIT'S GRAMMAR POINT.

   The question these answer is the one the plan sets: what IS the right visual for a grammar
   point? Not a picture of the rule — a rule is not a thing and drawing it gives you a label in
   a box. A picture of the DIFFERENCE THE RULE MARKS:

     unit 2  there is / there are, some / any / much / many   a difference in NUMBER and in
             whether a thing can be counted   ->  a shelf you put things on, and a tank you
             pour into: the sentence changes as the shelf does
     unit 3  imperatives and the order of the steps   a difference in SEQUENCE   ->  a job that
             plays step by step, and a button that runs it in the wrong order so the learner
             sees what the order was for
     unit 4  comparatives and superlatives   a difference in DEGREE   ->  four gauges, and the
             sentence that comes out of comparing two of them, then all four
     unit 5  the passive   a difference in WHO IS IN FOCUS   ->  the same action with the doer
             fading out of it, and the sentence rebuilding itself around the car

   Each is registered through A.addLive, which art.js exposes, so nothing here edits a lifted
   file. A card asks for one with `visual: { live: '<name>', wide: true }`; core.js falls back
   to a static drawing of the same name if the name is not registered, so a page can never lose
   its picture.

   THEY ARE READ, NOT ONLY WATCHED. Every figure writes its sentence as text in a live region
   as well as drawing it, so a screen reader hears what changed, and so the sentence can be
   copied into an answer.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addLive) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t;
  var NS = 'http://www.w3.org/2000/svg';
  var seq = 0;

  function el(tag, cls, html) {
    var n = w.document.createElement(tag);
    if (cls) { n.className = cls; }
    if (html != null) { n.innerHTML = html; }
    return n;
  }

  /* The shell every figure here shares: a stage, a caption that speaks, and a row of buttons.
     Built once so the four figures cannot drift apart in layout or in keyboard behaviour. */
  function shell(host, opts) {
    var wrap = el('div', 'tl-live');
    /* A full-width stage turns a 420x200 drawing into a 500px-tall wall. Capped here rather
       than in app.css so unit 1's tense-timeline, which is already live, is untouched. */
    wrap.style.maxWidth = '680px';
    wrap.style.margin = '0 auto';
    var stage = el('div', 'tl-fig');
    wrap.appendChild(stage);

    var row = el('div', 'tl-row');
    var cap = el('div', 'tl-cap');
    cap.setAttribute('role', 'status');
    cap.setAttribute('aria-live', 'polite');
    cap.innerHTML = '<div class="tl-eg tl-rest">' + (opts.rest || 'Press a button to see it.')
      + '</div><div class="tl-note">' + (opts.note || '') + '</div>';
    row.appendChild(cap);
    wrap.appendChild(row);

    var btns = el('div', 'btn-row');
    btns.style.marginTop = '10px';
    wrap.appendChild(btns);
    host.appendChild(wrap);

    return {
      stage: stage,
      buttons: btns,
      say: function (sentence, note) {
        cap.innerHTML = '<div class="tl-eg">' + sentence + '</div>'
          + '<div class="tl-note">' + (note || '') + '</div>';
      },
      button: function (label, fn) {
        var b = el('button', 'btn btn-sm', label);
        b.type = 'button';
        b.onclick = function () {
          var all = btns.querySelectorAll('button');
          for (var i = 0; i < all.length; i++) { all[i].setAttribute('aria-pressed', 'false'); }
          b.setAttribute('aria-pressed', 'true');
          fn();
        };
        b.setAttribute('aria-pressed', 'false');
        btns.appendChild(b);
        return b;
      },
      svg: function (body, vb) {
        stage.innerHTML = '<svg viewBox="' + (vb || '0 0 420 200') + '" xmlns="' + NS + '" '
          + 'preserveAspectRatio="xMidYMid meet" aria-hidden="true" '
          + 'style="display:block;width:100%;height:auto">' + body + '</svg>';
      }
    };
  }

  /* a small oil can, a filter and a tank, drawn small enough to sit on a shelf */
  function filterIcon(x, y) {
    return r(x, y - 26, 26, 26, '#c9892a', 3) + r(x + 3, y - 23, 20, 20, '#f3e3c4', 2)
      + r(x + 6, y - 20, 14, 14, '#c9892a', 1);
  }
  function canIcon(x, y) {
    return r(x, y - 30, 24, 30, '#3f5a2f', 3) + r(x + 7, y - 36, 10, 8, '#2f4522', 2)
      + r(x + 3, y - 22, 18, 9, '#f3e3c4', 1);
  }

  /* ============================================================
     UNIT 2 — there is / there are, some / any / much / many
     The shelf holds things you can COUNT. The tank holds what you cannot.
     ============================================================ */
  A.addLive('there-shelf', function (host) {
    var S = shell(host, {
      rest: 'Press a button. Watch the shelf, and read the sentence it makes.',
      note: 'The shelf holds things you can <b>count</b>. The tank holds what you <b>cannot</b>.'
    });
    var uid = 'ts' + (++seq);

    function draw(nFilters, oilPct, hi) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      /* the shelf */
      s += r(24, 120, 220, 10, '#8d6e4a', 3) + r(30, 130, 10, 44, '#6d5336')
        + r(228, 130, 10, 44, '#6d5336');
      for (var i = 0; i < nFilters; i++) { s += filterIcon(44 + i * 46, 120); }
      if (!nFilters) {
        s += t(134, 104, 15, 'empty', 'var(--text-2)', 'middle', 700);
      }
      s += t(134, 192, 13, 'filters — you can count them', 'var(--text-2)', 'middle', 600);
      /* the tank */
      s += r(292, 54, 86, 120, '#dde7ec', 10);
      var h = Math.round(118 * oilPct);
      s += r(292, 174 - h, 86, h, '#c9892a', 10);
      s += r(292, 54, 86, 120, 'none', 10)
        .replace('fill="none"', 'fill="none" stroke="#76899a" stroke-width="4"');
      s += t(335, 192, 13, 'oil — you cannot count it', 'var(--text-2)', 'middle', 600);
      if (hi) {
        s += r(hi[0], hi[1], hi[2], hi[3], 'none', 10)
          .replace('fill="none"', 'fill="none" stroke="var(--accent)" stroke-width="4"');
      }
      S.svg(s);
    }
    draw(3, 0.55);

    S.button('one filter', function () {
      draw(1, 0.55, [24, 86, 220, 96]);
      S.say('There <b>is</b> <b>a</b> filter on the shelf.',
        'One thing you can count: <b>there is</b>, and <b>a</b> in front of it.');
    });
    S.button('three filters', function () {
      draw(3, 0.55, [24, 86, 220, 96]);
      S.say('There <b>are</b> <b>some</b> filters on the shelf. How <b>many</b>? Three.',
        'More than one thing you can count: <b>there are</b>, <b>some</b> in a statement, '
        + 'and <b>many</b> when you ask the number.');
    });
    S.button('no filters', function () {
      draw(0, 0.55, [24, 86, 220, 96]);
      S.say('There <b>aren’t</b> <b>any</b> filters on the shelf.',
        '<b>any</b> belongs in the negative and in the question — not in a positive statement.');
    });
    S.button('the oil', function () {
      draw(3, 0.55, [288, 50, 94, 128]);
      S.say('There <b>is</b> <b>some</b> oil in the tank. How <b>much</b>? About half.',
        'Oil is not counted, so it takes <b>is</b> even though there is a lot of it, and '
        + '<b>much</b> when you ask the amount.');
    });
    S.button('almost no oil', function () {
      draw(3, 0.06, [288, 50, 94, 128]);
      S.say('There <b>isn’t much</b> oil left.',
        'Not <i>there aren’t many oil</i>. The thing itself decides, not the amount of it.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 3 — imperatives, and the order of the steps
     ============================================================ */
  A.addLive('safe-order', function (host) {
    var S = shell(host, {
      rest: 'Press Run to raise the car safely. Then press the other button.',
      note: 'Every instruction starts with the <b>verb</b>. The order is not decoration.'
    });
    var STEPS = [
      { v: 'Chock', rest: 'the back wheels.', ok: true },
      { v: 'Jack', rest: 'the car up at the jacking point.', ok: true },
      { v: 'Put', rest: 'an axle stand under the sill.', ok: true },
      { v: 'Lower', rest: 'the car onto the stand.', ok: true },
      { v: 'Work', rest: 'under the car.', ok: true }
    ];
    var timer = null, at = -1;

    function draw(step, bad) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      s += r(0, 164, 420, 14, '#b9c4cb');
      var lift = step >= 1 ? 26 : 0;
      /* the car */
      s += '<g transform="translate(96,' + (104 - lift) + ')">';
      s += p('M 10 44 q 10 -30 34 -32 h 58 q 26 2 40 32 h -132 Z', bad ? '#b8432f' : '#1f6f8b');
      s += r(0, 44, 152, 20, bad ? '#b8432f' : '#1f6f8b', 7);
      s += p('M 36 22 q 10 -16 24 -16 h 32 q 18 2 26 16 Z', '#cfe6ef');
      s += c(36, 68, 15, '#2b3238') + c(116, 68, 15, '#2b3238');
      s += '</g>';
      if (step >= 0) { s += p('M 206 164 l 22 -8 v 18 Z', '#e8b418'); }   /* the chock */
      if (step >= 1) {                                                     /* the jack */
        s += r(132, 164 - lift + 24, 46, 8, '#b8432f', 3);
        s += r(148, 164 - lift + 32, 14, lift, '#39434c');
      }
      if (step >= 2) {                                                     /* the stand */
        s += p('M 58 164 L 74 ' + (164 - lift) + ' h 12 L 102 164 Z', '#52646f');
      }
      if (step >= 4) { s += c(250, 150, 10, '#e8c39a') + r(236, 160, 28, 14, '#2f5f86', 3); }
      if (bad) {
        s += c(340, 54, 24, '#b8432f') + t(340, 62, 26, '!', '#fff', 'middle', 800);
      }
      S.svg(s);
    }
    draw(-1);

    function stop() { if (timer) { w.clearTimeout(timer); timer = null; } }

    S.button('Run the job', function () {
      stop(); at = -1;
      (function next() {
        at += 1;
        if (at >= STEPS.length) { return; }
        draw(at);
        S.say('<b>' + STEPS[at].v + '</b> ' + STEPS[at].rest,
          'Step ' + (at + 1) + ' of ' + STEPS.length
          + '. The sentence begins with the verb: no <i>I</i>, no <i>you</i>.');
        timer = w.setTimeout(next, 1500);
      }());
    });
    S.button('Run it in the wrong order', function () {
      stop();
      draw(4, true);
      S.say('<b>Work</b> under the car. <b>Then</b> put an axle stand under the sill.',
        'The car is on a jack and somebody is under it. A step that keeps somebody safe comes '
        + '<b>before</b> the work it protects — that is what the order is for.');
    });
    S.button('Reset', function () { stop(); draw(-1); S.say('Press Run the job.', ''); });
    return { destroy: function () { stop(); host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 4 — comparatives and superlatives
     ============================================================ */
  A.addLive('compare-gauges', function (host) {
    var S = shell(host, {
      rest: 'Four tyres, four readings. Press a button to compare them.',
      note: 'Two things take <b>-er … than</b> or <b>more … than</b>. All of them takes '
        + '<b>the -est</b> or <b>the most</b>.'
    });
    var MM = [6, 5, 2, 3];
    var NAME = ['front left', 'front right', 'rear left', 'rear right'];

    function draw(mark) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      for (var i = 0; i < 4; i++) {
        var x = 36 + i * 96, on = mark && mark.indexOf(i) >= 0;
        s += c(x + 30, 86, 34, on ? '#2b3238' : '#454d55');
        s += c(x + 30, 86, 18, '#5b646c') + c(x + 30, 86, 7, '#2b3238');
        /* the tread, as deep as the reading */
        for (var k = 0; k < 8; k++) {
          var a = Math.PI * 2 * k / 8;
          var len = 6 + MM[i] * 2.6;
          s += p('M ' + (x + 30 + Math.cos(a) * 34) + ' ' + (86 + Math.sin(a) * 34)
            + ' L ' + (x + 30 + Math.cos(a) * (34 - len)) + ' ' + (86 + Math.sin(a) * (34 - len)),
            'none', ' stroke="#8d969d" stroke-width="5" stroke-linecap="round"');
        }
        if (on) {
          s += c(x + 30, 86, 40, 'none')
            .replace('fill="none"', 'fill="none" stroke="var(--accent)" stroke-width="4"');
        }
        s += t(x + 30, 146, 17, MM[i] + ' mm', on ? 'var(--accent)' : 'var(--text)',
               'middle', 800);
        s += t(x + 30, 170, 12, NAME[i], 'var(--text-2)', 'middle', 600);
      }
      S.svg(s);
    }
    draw(null);

    S.button('compare two', function () {
      draw([2, 0]);
      S.say('The rear left tyre is <b>more worn than</b> the front left.',
        'Two things. <b>worn</b> is a long adjective, so it takes <b>more</b> — and the '
        + '<b>than</b> is not optional.');
    });
    S.button('a short adjective', function () {
      draw([2, 3]);
      S.say('The rear left reading is <b>lower than</b> the rear right.',
        '<b>low</b> is short, so it takes <b>-er</b>, not <i>more low</i>. Same job, different '
        + 'ending.');
    });
    S.button('all four', function () {
      draw([2]);
      S.say('The rear left is <b>the most worn</b> of the four.',
        'More than two, so it is a superlative — and a superlative always has <b>the</b> in '
        + 'front of it.');
    });
    S.button('the irregular ones', function () {
      draw([0, 2]);
      S.say('The front left is <b>better than</b> the rear left. The rear left is '
        + '<b>the worst</b>.',
        'Never <i>gooder</i>, never <i>more bad</i>. good → better → the best; bad → worse → '
        + 'the worst.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 5 — the passive: the same action, with the doer out of focus
     ============================================================ */
  A.addLive('passive-focus', function (host) {
    var S = shell(host, {
      rest: 'Press a button. Watch who stays in the picture.',
      note: 'The passive does not hide the doer for fun — it puts the <b>car</b> where the '
        + 'attention belongs.'
    });

    function draw(doer, step) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      s += r(0, 168, 420, 12, '#b9c4cb');
      s += '<g transform="translate(150,78)" opacity="1">';
      s += p('M 10 44 q 10 -30 34 -32 h 58 q 26 2 40 32 h -132 Z', '#1f6f8b');
      s += r(0, 44, 152, 20, '#1f6f8b', 7);
      s += p('M 36 22 q 10 -16 24 -16 h 32 q 18 2 26 16 Z', '#cfe6ef');
      s += c(36, 68, 15, '#2b3238') + c(116, 68, 15, '#2b3238');
      s += '</g>';
      /* The mechanic, at whatever opacity the sentence gives him. He is the ENGINE'S rig, not
         a circle and a box: this is Nabil, the same man as on every card and in every scene,
         which is the point of a fixed cast. */
      var g = (w.EAM.art.cast && w.EAM.art.cast.nabil) || {};
      s += '<g opacity="' + doer + '" transform="translate(28,10) scale(0.52)">'
        + A.actor('pf-doer', g.rig || 'm-30s-a', g) + '</g>';
      if (step) { s += t(330, 44, 14, step, 'var(--accent)', 'middle', 800); }
      S.svg(s);
    }
    draw(1, '');

    S.button('who does it', function () {
      draw(1, '');
      S.say('<b>The mechanic checks</b> the car.',
        'Active. The doer is the subject, and he is the first thing you read.');
    });
    S.button('what happens to it', function () {
      draw(0.12, 'passive');
      S.say('<b>The car is checked.</b>',
        'Passive: <b>is</b> + <b>checked</b>. The mechanic is still there — he has just stopped '
        + 'being the point. This is how a process is described.');
    });
    S.button('more than one', function () {
      draw(0.12, 'passive');
      S.say('The tyres <b>are checked</b>.',
        '<b>be</b> agrees with the subject, not with the doer: one car <b>is</b> checked, four '
        + 'tyres <b>are</b> checked.');
    });
    S.button('say the doer anyway', function () {
      draw(0.6, 'passive + by');
      S.say('The car is checked <b>by the mechanic</b>.',
        'You can put him back with <b>by</b> — but only when who did it actually matters.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     SHARED HELPERS for units 6 to 10.

     The first five figures each built their own strokes inline. Five more of those and the
     file drifts, so the shapes the later figures share are written once here. Colours go
     through the stylesheet's own variables wherever the shape is furniture rather than an
     object, so every figure below is correct in the dark theme without a second palette.
     ============================================================ */
  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"'
      + ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function dash(d, col, wd, pat) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"'
      + ' stroke-dasharray="' + (pat || '7 6') + '" stroke-linecap="round"');
  }
  function ring(cx, cy, rad, col, wd) {
    return c(cx, cy, rad, 'none').replace('fill="none"',
      'fill="none" stroke="' + col + '" stroke-width="' + (wd || 3) + '"');
  }
  function arrowR(x, y, len, col, wd) {
    return stroke('M ' + x + ' ' + y + ' h ' + len, col, wd || 3)
      + p('M ' + (x + len + 10) + ' ' + y + ' l -11 -6 v 12 Z', col);
  }

  /* A FACE THAT CAN CHANGE ITS EXPRESSION, because in three of the five figures below the
     grammar point is social and the listener's face is where it shows. Eyes are a white with
     a dark ball inside and a highlight on the ball - not a dot - and the brows and the mouth
     are what `mood` moves. */
  function head(x, y, sc, skin, mood) {
    var g = '<g transform="translate(' + x + ',' + y + ') scale(' + sc + ')">';
    g += e(0, 0, 26, 31, skin || '#e8c39a');
    g += p('M -26 -6 q 3 -32 26 -32 q 23 0 26 32 q -8 -19 -26 -19 q -18 0 -26 19 Z',
      '#2b2320');
    g += e(-10, -3, 6.4, 4.8, '#fbf9f6') + e(10, -3, 6.4, 4.8, '#fbf9f6');
    var lid = mood === 'cross' ? -1.4 : 0;
    g += c(-10, -3 + lid, 3.2, '#3a2d24') + c(10, -3 + lid, 3.2, '#3a2d24');
    g += c(-11, -4.4 + lid, 1.1, '#fbf9f6') + c(9, -4.4 + lid, 1.1, '#fbf9f6');
    if (mood === 'cross') {                       /* brows down and in */
      g += stroke('M -17 -14 q 6 2 11 5', '#2b2320', 2.4);
      g += stroke('M 17 -14 q -6 2 -11 5', '#2b2320', 2.4);
      g += stroke('M -8 16 q 8 -5 16 0', '#8d5a4a', 2.6);
    } else if (mood === 'glad') {                 /* brows up, mouth up */
      g += stroke('M -18 -13 q 6 -5 12 -2', '#2b2320', 2.2);
      g += stroke('M 18 -13 q -6 -5 -12 -2', '#2b2320', 2.2);
      g += stroke('M -9 12 q 9 9 18 0', '#8d5a4a', 2.8);
    } else {                                      /* level */
      g += stroke('M -18 -12 q 6 -3 12 -1', '#2b2320', 2.2);
      g += stroke('M 18 -12 q -6 -3 -12 -1', '#2b2320', 2.2);
      g += stroke('M -7 14 h 14', '#8d5a4a', 2.4);
    }
    g += stroke('M 0 0 v 7', '#c89a76', 1.8);
    g += '</g>';
    return g;
  }

  /* ============================================================
     UNIT 6 — can / could / would / shall / should

     THE DIFFICULTY IS NOT MEANING, IT IS FORCE. "Give me the key" and "Could you give me the
     key?" ask for exactly the same object, so a figure that draws the request teaches nothing:
     both drawings would be a key. What changes is what it does to the person you said it to,
     so this draws the CUSTOMER, and the meter beside him is how the sentence landed.
     ============================================================ */
  A.addLive('modal-ladder', function (host) {
    var S = shell(host, {
      rest: 'Press a button. The request is the same each time — watch the customer.',
      note: 'All four ask for the same thing. Only the <b>force</b> changes.'
    });

    function draw(level, kind) {
      /* level 0 = blunt, 3 = most polite */
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      var mood = level === 0 ? 'cross' : (level >= 2 ? 'glad' : 'level');
      s += head(96, 74, 1.25, '#d7b183', mood);
      s += r(58, 136, 78, 12, 'var(--line)', 6);     /* shoulders, suggested */
      /* the meter: how it landed */
      s += r(196, 46, 180, 20, 'var(--line)', 10);
      var cols = ['#b8432f', '#c9892a', '#2f7d4f', '#1f6f8b'];
      s += r(198, 48, 44 * (level + 1), 16, cols[level], 8);
      s += t(286, 36, 13, 'how it lands on him', 'var(--text-2)', 'middle', 700);
      s += t(200, 82, 12, 'blunt', 'var(--text-2)', 'start', 600);
      s += t(372, 82, 12, 'polite', 'var(--text-2)', 'end', 600);
      /* what kind of sentence it is */
      if (kind) {
        s += r(214, 108, 148, 30, 'var(--surface)', 8);
        s += t(288, 128, 14, kind, 'var(--accent)', 'middle', 800);
      }
      /* the key, the same in every version */
      s += r(286, 158, 14, 20, '#c9892a', 3) + c(293, 152, 9, '#c9892a')
        + c(293, 152, 3.4, 'var(--surface-2)');
      S.svg(s);
    }
    draw(1, '');

    S.button('an order', function () {
      draw(0, 'an order');
      S.say('<b>Give me</b> the key.',
        'No modal at all. Grammatically fine, and you would not say it to a customer — this is '
        + 'what the modals below are for.');
    });
    S.button('a request', function () {
      draw(1, 'a request');
      S.say('<b>Can you</b> give me the key?',
        '<b>can</b> + <b>you</b>, as a question. Note the plain verb after it: <b>give</b>, '
        + 'never <i>to give</i>.');
    });
    S.button('more polite', function () {
      draw(3, 'a polite request');
      S.say('<b>Could you</b> give me the key, please?',
        '<b>could</b> and <b>would</b> are the polite pair. Nothing is in the past — the past '
        + 'form is doing the politeness.');
    });
    S.button('an offer', function () {
      draw(2, 'an offer');
      S.say('<b>Shall I</b> bring the car round? <b>I\'ll</b> wash it for you.',
        'An offer, not a request: you are volunteering. <b>Shall I</b> asks whether to, '
        + '<b>I\'ll</b> says you will.');
    });
    S.button('advice', function () {
      draw(2, 'advice');
      S.say('You <b>should</b> change the oil. You <b>shouldn\'t</b> leave it much longer.',
        '<b>should</b> advises and leaves the decision with him. <b>must</b> would take it '
        + 'away — which is unit 8.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 7 — will / going to / present continuous

     ALL THREE ARE ABOUT THE FUTURE, so a timeline cannot separate them: the event sits on the
     same Thursday in all three sentences. What separates them is WHEN THE DECISION WAS MADE,
     which is a second point on the line. So the line carries two marks, not one, and the
     figure moves only the decision.
     ============================================================ */
  A.addLive('future-diary', function (host) {
    var S = shell(host, {
      rest: 'Press a button. The job is on Thursday every time — watch where the decision is.',
      note: 'The event never moves. The <b>decision</b> does, and that is what picks the form.'
    });

    function draw(decidedAt, label, diary) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      /* the line, with now on it */
      s += stroke('M 30 128 h 250', 'var(--text-2)', 3);
      s += stroke('M 150 112 v 32', 'var(--accent)', 3);
      s += t(150, 160, 13, 'now', 'var(--accent)', 'middle', 800);
      /* Thursday, where the work happens - fixed */
      s += r(234, 100, 56, 24, 'var(--surface)', 6);
      s += t(262, 117, 12, 'Thursday', 'var(--text)', 'middle', 800);
      s += stroke('M 262 124 v 10', 'var(--text-2)', 2.4);
      /* the decision, which is the thing that moves */
      if (decidedAt != null) {
        s += c(decidedAt, 128, 9, '#c9892a');
        s += t(decidedAt, 98, 12, 'decided', '#8a5d12', 'middle', 800);
        if (decidedAt < 150) { s += dash('M ' + (decidedAt + 12) + ' 128 h ' + (138 - decidedAt), '#c9892a', 2.4); }
      }
      if (label) { s += t(155, 184, 13, label, 'var(--accent)', 'middle', 800); }
      /* the diary, which only the present continuous writes in */
      s += r(300, 24, 104, 152, 'var(--surface)', 10);
      s += t(352, 46, 12, 'THE DIARY', 'var(--text-2)', 'middle', 800);
      s += stroke('M 314 56 h 76', 'var(--text-2)', 1.6);
      for (var i = 0; i < 4; i++) {
        s += r(314, 66 + i * 26, 20, 4, 'var(--text-2)', 2);
      }
      if (diary) {
        s += r(312, 86, 80, 24, '#d8ecf3', 5);
        s += t(352, 102, 11, diary, '#1f6f8b', 'middle', 800);
      }
      S.svg(s);
    }
    draw(null, '', '');

    S.button('already planned', function () {
      draw(62, 'going to', '');
      S.say('We\'re <b>going to</b> replace the brake pads on Thursday.',
        'The decision was made <b>before</b> you spoke — it is already a plan. That is what '
        + '<b>going to</b> reports.');
    });
    S.button('decided as you speak', function () {
      draw(150, 'will', '');
      S.say('That sounds bad — <b>I\'ll</b> book you in for Thursday.',
        'You decided it at the moment of speaking. <b>will</b> / <b>\'ll</b> is the form for a '
        + 'decision made now, and for a promise.');
    });
    S.button('in the diary', function () {
      draw(62, 'present continuous', '09:00 Thu');
      S.say('We\'re <b>collecting</b> it at nine on Thursday.',
        'A fixed arrangement, with a time, written down. The present continuous is the strongest '
        + 'of the three: it says this is settled.');
    });
    S.button('a prediction', function () {
      draw(150, 'will', '');
      S.say('It <b>will</b> probably need new discs as well.',
        '<b>will</b> is also how you predict. There is no plan here — it is what you think, so '
        + 'nothing goes in the diary.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 8 — must / have to / mustn't / don't have to

     THE PAIR THAT TRIPS EVERYONE is mustn't against don't have to, and learners hear them as
     the same thing because both are negative. They are opposites. A gate makes them two
     different objects: one is barred and one is standing open, and nothing about that picture
     can be misread.
     ============================================================ */
  A.addLive('rule-gate', function (host) {
    var S = shell(host, {
      rest: 'Press a button. Two of these sound alike and mean opposite things.',
      note: '<b>mustn\'t</b> is a locked gate. <b>don\'t have to</b> is an open one.'
    });

    function draw(mode, from) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      s += r(0, 158, 420, 42, 'var(--line)', 0);
      /* the posts, always there */
      s += r(132, 48, 14, 112, '#76899a', 4) + r(274, 48, 14, 112, '#76899a', 4);
      var open = mode === 'free' || mode === 'optional';
      if (open) {
        /* the gate swung back against the post: you may go through */
        s += '<g transform="translate(146,56) skewX(-16)">';
        s += r(0, 0, 26, 96, '#9fb0b8', 4);
        for (var i = 0; i < 3; i++) { s += r(4, 10 + i * 30, 18, 6, '#8097a3', 2); }
        s += '</g>';
        s += dash('M 160 140 h 100', '#2f7d4f', 3.4);
        s += p('M 274 140 l -12 -7 v 14 Z', '#2f7d4f');
        s += t(210, 120, 13, 'you may', '#2f7d4f', 'middle', 800);
      } else {
        /* barred across, with the cross on it */
        s += r(140, 68, 140, 72, '#b0bdc5', 5);
        for (var j = 0; j < 4; j++) { s += r(148, 76 + j * 17, 124, 9, '#93a4ae', 3); }
        s += c(210, 104, 26, '#fdeae6') + ring(210, 104, 26, '#b8432f', 4);
        s += stroke('M 198 92 l 24 24 m 0 -24 l -24 24', '#b8432f', 5);
      }
      /* the person, deciding */
      s += head(62, 96, 1.0, '#e8c39a', open ? 'level' : 'cross');
      s += r(30, 148, 64, 10, 'var(--line)', 5);
      /* where the rule comes from, which is the must/have-to difference */
      if (from) {
        s += r(306, 30, 100, 44, 'var(--surface)', 8);
        s += t(356, 48, 11, 'the rule comes', 'var(--text-2)', 'middle', 600);
        s += t(356, 64, 13, from, 'var(--accent)', 'middle', 800);
      }
      S.svg(s);
    }
    draw('shut', '');

    S.button('mustn\'t', function () {
      draw('shut', 'from the law');
      S.say('You <b>mustn\'t</b> work under a car on a jack alone.',
        'Forbidden. The gate is shut and locked: there is no choice here at all.');
    });
    S.button('don\'t have to', function () {
      draw('free', 'from nowhere');
      S.say('You <b>don\'t have to</b> wait here — we can call you.',
        'The opposite of forbidden: there is <b>no rule either way</b>. The gate is open and '
        + 'you choose. This is the one that is mistaken for <b>mustn\'t</b>.');
    });
    S.button('have to', function () {
      draw('shut', 'from the maker');
      S.say('We <b>have to</b> use a genuine part for a warranty repair.',
        'An obligation from <b>outside</b> you — the manufacturer, the law, the company. You '
        + 'are reporting a rule, not making one.');
    });
    S.button('must', function () {
      draw('shut', 'from me');
      S.say('You <b>must</b> see this crack before we go any further.',
        'The same obligation, but it is <b>yours</b>: you are the one insisting. Same plain '
        + 'verb after it — <b>see</b>, not <i>to see</i>.');
    });
    S.button('optional', function () {
      draw('optional', 'from nowhere');
      S.say('You <b>can</b> wait, or you <b>don\'t have to</b> — it\'s up to you.',
        'Both halves say the same thing: the gate is open. Say it this way and no customer can '
        + 'hear a rule that is not there.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 9 — the present perfect against the past simple

     THE FORM FOLLOWS THE TIME WORD, not the work. The same repair, on the same day, takes
     either form depending on whether the time it sits in is FINISHED. So the figure draws the
     time rather than the verb: a closed box round a finished day, and a band that is still
     open because its right-hand edge is now.
     ============================================================ */
  A.addLive('perfect-line', function (host) {
    var S = shell(host, {
      rest: 'Press a button. The work is the same every time — watch the time it sits in.',
      note: 'Finished time takes the <b>past simple</b>. Time that reaches <b>now</b> takes '
        + 'the present perfect.'
    });

    function draw(mode) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      s += stroke('M 26 120 h 368', 'var(--text-2)', 3);
      s += stroke('M 330 100 v 40', 'var(--accent)', 3.4);
      s += t(330, 158, 13, 'now', 'var(--accent)', 'middle', 800);
      /* the days */
      var days = [['Mon', 70], ['Tue', 135], ['Wed', 200], ['Thu', 265]];
      for (var i = 0; i < days.length; i++) {
        s += stroke('M ' + days[i][1] + ' 114 v 12', 'var(--text-2)', 2);
        s += t(days[i][1], 148, 11, days[i][0], 'var(--text-2)', 'middle', 600);
      }
      /* the work: a spanner on Tuesday, in every version */
      s += '<g transform="translate(135,88) rotate(-30)">';
      s += r(-4, -26, 8, 24, '#8e9aa3', 3);
      s += p('M -8 -32 h 16 l -3 8 h -10 Z', '#6f7d87');
      s += '</g>';
      if (mode === 'past') {
        /* a CLOSED box: the time is over and sealed */
        s += r(104, 54, 62, 52, 'none', 6).replace('fill="none"',
          'fill="rgba(184,67,47,0.10)" stroke="#b8432f" stroke-width="3"');
        s += t(135, 46, 12, 'Tuesday — over', '#b8432f', 'middle', 800);
        s += t(135, 182, 13, 'past simple', '#b8432f', 'middle', 800);
      } else if (mode === 'perfect') {
        /* a band that is still OPEN, because its edge is now */
        s += r(104, 62, 226, 40, 'none', 6).replace('fill="none"',
          'fill="rgba(47,125,79,0.12)" stroke="#2f7d4f" stroke-width="3" '
          + 'stroke-dasharray="0" ');
        s += stroke('M 104 62 v 40', '#2f7d4f', 3);
        s += dash('M 104 102 h 226 M 104 62 h 226', '#2f7d4f', 2.6);
        s += t(218, 46, 12, 'from then until now', '#245f3b', 'middle', 800);
        s += t(218, 182, 13, 'present perfect', '#2f7d4f', 'middle', 800);
      } else if (mode === 'result') {
        s += r(104, 62, 226, 40, 'none', 6).replace('fill="none"',
          'fill="rgba(47,125,79,0.12)" stroke="#2f7d4f" stroke-width="3"');
        /* the result, standing at now */
        s += c(366, 82, 20, '#e7f1ea') + ring(366, 82, 20, '#2f7d4f', 3);
        s += stroke('M 356 82 l 7 8 l 14 -17', '#2f7d4f', 4);
        s += t(366, 120, 11, 'the result', '#245f3b', 'middle', 700);
        s += t(218, 182, 13, 'present perfect', '#2f7d4f', 'middle', 800);
      } else {
        s += t(218, 182, 13, 'press a button', 'var(--text-2)', 'middle', 700);
      }
      S.svg(s);
    }
    draw('');

    S.button('on Tuesday', function () {
      draw('past');
      S.say('I <b>replaced</b> the brake pads <b>on Tuesday</b>.',
        '<b>on Tuesday</b> is finished time, so the verb is the past simple. You could not say '
        + '<i>I have replaced them on Tuesday</i>.');
    });
    S.button('already', function () {
      draw('perfect');
      S.say('I <b>have already replaced</b> the brake pads.',
        'No finished time word at all. <b>have</b> + <b>replaced</b>, and the sentence reaches '
        + 'all the way to now.');
    });
    S.button('the car is ready now', function () {
      draw('result');
      S.say('The warning light <b>has gone out</b>.',
        'The present perfect is for a past action with a result the customer can see <b>now</b>. '
        + 'That result is why you chose this form.');
    });
    S.button('how long', function () {
      draw('perfect');
      S.say('It <b>has been</b> in the workshop <b>since Tuesday</b>.',
        '<b>since</b> and <b>for</b> measure time that is still running, so they take the '
        + 'present perfect — never the past simple.');
    });
    S.button('a comeback', function () {
      draw('result');
      S.say('The car <b>has come back</b> with the same fault. We <b>found</b> it yesterday.',
        'Both in one report: the comeback matters now, so present perfect; the finding happened '
        + 'in a finished day, so past simple.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 10 — reported speech

     Reporting is a RELAY. The sentence leaves one person and arrives at another, and exactly
     three kinds of word change on the way: the tense, the pronoun and the time word. So the
     figure sends the sentence across the picture and lights up only those three, because a
     learner who can see WHICH words move does not have to remember a table.
     ============================================================ */
  A.addLive('report-relay', function (host) {
    var S = shell(host, {
      rest: 'Press a button. The customer speaks on the left; you report it on the right.',
      note: 'Three kinds of word change: the <b>tense</b>, the <b>pronoun</b> and the '
        + '<b>time word</b>.'
    });

    var HL = '#c9892a';

    function draw(said, reported, marks) {
      var s = r(0, 0, 420, 200, 'var(--surface-2)', 12);
      /* the two people */
      s += head(44, 104, 0.92, '#d7b183', 'level');
      s += r(16, 150, 56, 10, 'var(--line)', 5);
      s += t(44, 182, 11, 'the customer', 'var(--text-2)', 'middle', 700);
      s += head(376, 104, 0.92, '#e8c39a', 'level');
      s += r(348, 150, 56, 10, 'var(--line)', 5);
      s += t(376, 182, 11, 'you, reporting', 'var(--text-2)', 'middle', 700);
      /* what was said, in quotes */
      s += r(84, 18, 252, 42, 'var(--surface)', 8);
      s += t(210, 38, 12, said ? '“' + said + '”' : 'press a button',
        said ? 'var(--text)' : 'var(--text-2)', 'middle', said ? 700 : 600);
      /* the relay itself */
      s += arrowR(96, 104, 216, HL, 3);
      if (marks) {
        /* The three words that moved, named on the arrow.
           EACH CHIP IS SIZED TO ITS OWN LABEL. A fixed 68-wide box fitted "is -> was" and not
           "today -> that day", whose text ran out over the chip beside it - legible, and
           untidy in the one figure most likely to be shown to somebody. The widths are laid
           out left to right from the measured text instead, and the row is centred on the
           arrow as a whole. */
        var pad = 9, gap = 6, wds = [], total = 0;
        for (var i = 0; i < marks.length; i++) {
          wds.push(Math.max(54, marks[i].length * 5.9 + pad * 2));
          total += wds[i];
        }
        total += gap * (marks.length - 1);
        var cx = 204 - total / 2;
        for (i = 0; i < marks.length; i++) {
          s += r(cx, 84, wds[i], 20, '#fdf4e2', 6);
          s += t(cx + wds[i] / 2, 99, 11, marks[i], '#8a5d12', 'middle', 800);
          s += stroke('M ' + (cx + wds[i] / 2) + ' 104 v 8', HL, 2);
          cx += wds[i] + gap;
        }
      }
      /* the report */
      if (reported) {
        s += r(84, 128, 252, 40, '#e8f1f5', 8);
        s += t(210, 152, 12, reported, '#1f6f8b', 'middle', 800);
      }
      S.svg(s);
    }
    draw('', '', null);

    S.button('what she said', function () {
      draw('My car is making a noise today.', '', null);
      S.say('She said: <b>“My car is making a noise today.”</b>',
        'Her own words, in quotation marks. Nothing has changed yet — this is the starting '
        + 'point for every button below.');
    });
    S.button('report it', function () {
      draw('My car is making a noise today.',
        'She said her car was making a noise that day.',
        ['is → was', 'my → her', 'today → that day']);
      S.say('She said <b>her</b> car <b>was</b> making a noise <b>that day</b>.',
        'Three changes and no others: the tense steps back, the pronoun becomes hers from where '
        + 'you stand, and the time word moves because the day has passed.');
    });
    S.button('a question', function () {
      draw('When will it be ready?',
        'He asked when it would be ready.',
        ['will → would', 'no ?', 'no do/does']);
      S.say('He <b>asked when it would be ready</b>.',
        'A reported question keeps the question <i>word</i> and loses the question <i>mark</i>. '
        + 'The word order goes back to normal: <b>it would be</b>, not <i>would it be</i>.');
    });
    S.button('a yes/no question', function () {
      draw('Is the part in stock?',
        'She asked if the part was in stock.',
        ['add if', 'is → was', 'no ?']);
      S.say('She <b>asked if</b> the part <b>was</b> in stock.',
        'With no question word you have to supply one: <b>if</b> or <b>whether</b>. Then the '
        + 'tense steps back as usual.');
    });
    S.button('an instruction', function () {
      draw('Please call me before you start.',
        'He asked me to call him before we started.',
        ['to + verb', 'me → him', 'you → we']);
      S.say('He <b>asked me to call</b> him before we started.',
        'An order or a request is reported with <b>to</b> + the verb — <b>asked me to call</b>, '
        + '<b>told me to wait</b> — and not with <i>that</i>.');
    });
    S.button('still true', function () {
      draw('I drive to Aleppo every week.',
        'She said she drives to Aleppo every week.',
        ['drive → drives', 'I → she', 'time stays']);
      S.say('She said she <b>drives</b> to Aleppo every week.',
        'When the thing is <b>still true</b>, you may leave the tense alone. Only the pronoun '
        + 'has to change. This is the exception worth knowing.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });
}(window));
