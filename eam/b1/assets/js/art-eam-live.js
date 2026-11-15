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
}(window));
