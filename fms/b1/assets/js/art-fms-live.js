/* ============================================================
   English for Foreign Ministry Staff B1.1 — art-fms-live.js

   ONE ANIMATED FIGURE PER UNIT'S GRAMMAR POINT.

   Following the principle the EAM course settled on: a rule is not a thing, and drawing it
   gives you a label in a box. Draw the DIFFERENCE THE RULE MARKS.

     unit 1  present simple / present continuous   a difference in TIME SPAN     -> one clock
             ticking through a single visit, beside a week that repeats: the sentence changes
             as you move between them
     unit 2  modals for requests                   a difference in DISTANCE      -> a stair
             between two officials; the further apart they are, the longer the request gets
     unit 3  the passive and reporting verbs        a difference in FOCUS         -> one
             announcement with a lamp that moves off the ministry and onto what was announced
     unit 4  conditionals in formal writing         a difference in CONSEQUENCE   -> a gate
             that only opens when its condition is met, and the sentence it lets through
     unit 5  conditionals and commitment            a difference in HOW FIRM      -> a chain
             whose links are solid when the promise is real and dotted when it is hypothetical

   Registered through A.addLive, which art.js exposes, so nothing here edits a lifted file. A
   card asks for one with `visual: { live: '<name>', wide: true }`.

   ONLY CSS VARIABLES THAT EXIST ARE USED. app.css defines --surface, --surface-2, --text,
   --text-2, --accent, --line, --ok, --no and --hint; it does NOT define --surface-3 or
   --text-1, and an undefined variable in an SVG `fill` falls back to BLACK - a defect that
   shipped thirteen black shapes in the EAM course and that no structural check can see,
   because the markup is perfectly valid. gates/fms_art.py A7 asserts this file uses only
   defined names.

   THEY ARE READ, NOT ONLY WATCHED. Every figure writes its sentence into a live region as
   well as drawing it, so a screen reader hears what changed.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.FMS && w.FMS.art;
  if (!A || !A.addLive) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t;
  var NS = 'http://www.w3.org/2000/svg';
  var seq = 0;

  var SURF = 'var(--surface-2)', TX = 'var(--text)', TX2 = 'var(--text-2)';
  var ACC = 'var(--accent)', LINE = 'var(--line)', OKC = 'var(--ok)';
  var NAVY = '#2f4257', GOLD = '#c8a55c', PAPER = '#f6f3ea', GREEN = '#3c6e63';
  var SEALC = '#8d3b3b';

  function el(tag, cls, html) {
    var n = w.document.createElement(tag);
    if (cls) { n.className = cls; }
    if (html != null) { n.innerHTML = html; }
    return n;
  }
  function stroke(d, col, wdt, extra) {
    return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="'
      + (wdt || 2) + '" stroke-linecap="round" stroke-linejoin="round"'
      + (extra || '') + '/>';
  }
  function dash(d, col, wdt, pat) {
    return stroke(d, col, wdt, ' stroke-dasharray="' + (pat || '5 4') + '"');
  }

  function shell(host, opts) {
    var wrap = el('div', 'tl-live');
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
      say: function (sentence, note) {
        cap.innerHTML = '<div class="tl-eg">' + sentence + '</div>'
          + '<div class="tl-note">' + (note || '') + '</div>';
      },
      button: function (label, fn) {
        var b = el('button', 'btn btn-sm', label);
        b.type = 'button';
        b.setAttribute('aria-pressed', 'false');
        b.onclick = function () {
          var all = btns.querySelectorAll('button');
          for (var i = 0; i < all.length; i++) { all[i].setAttribute('aria-pressed', 'false'); }
          b.setAttribute('aria-pressed', 'true');
          fn();
        };
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

  /* a small clock face with hands at a given hour/minute */
  function clock(x, y, rad, hour, min, ring) {
    var s = c(x, y, rad, PAPER) + c(x, y, rad, 'none')
      .replace('fill="none"', 'fill="none" stroke="' + (ring || NAVY) + '" stroke-width="3"');
    for (var i = 0; i < 12; i++) {
      var a = i * Math.PI / 6;
      s += stroke('M ' + (x + Math.cos(a) * rad * 0.82).toFixed(1) + ' '
        + (y + Math.sin(a) * rad * 0.82).toFixed(1) + ' L '
        + (x + Math.cos(a) * rad * 0.94).toFixed(1) + ' '
        + (y + Math.sin(a) * rad * 0.94).toFixed(1), LINE, 1.6);
    }
    var ha = (hour % 12) * Math.PI / 6 - Math.PI / 2;
    var ma = min * Math.PI / 30 - Math.PI / 2;
    s += stroke('M ' + x + ' ' + y + ' L ' + (x + Math.cos(ha) * rad * 0.5).toFixed(1)
      + ' ' + (y + Math.sin(ha) * rad * 0.5).toFixed(1), NAVY, 3.4);
    s += stroke('M ' + x + ' ' + y + ' L ' + (x + Math.cos(ma) * rad * 0.76).toFixed(1)
      + ' ' + (y + Math.sin(ma) * rad * 0.76).toFixed(1), ACC, 2.4);
    return s + c(x, y, 2.4, NAVY);
  }

  /* a seated/standing official, small - enough to read as a person at this size */
  function person(x, y, col, h) {
    var ht = h || 1;
    return c(x, y - 30 * ht, 9 * ht, '#c8936b')
      + p('M ' + (x - 11 * ht) + ' ' + y + ' q 0 ' + (-19 * ht) + ' ' + (11 * ht) + ' '
        + (-19 * ht) + ' q ' + (11 * ht) + ' 0 ' + (11 * ht) + ' ' + (19 * ht) + ' z', col)
      + c(x - 3 * ht, y - 32 * ht, 1.5, '#2c2015') + c(x + 3 * ht, y - 32 * ht, 1.5, '#2c2015');
  }

  /* ============================================================
     UNIT 1 — now-and-always
     ============================================================ */
  A.addLive('now-and-always', function (host) {
    var S = shell(host, {
      rest: 'Press a button. Watch which side of the picture lights up.',
      note: 'The clock is <b>this visit, now</b>. The week is <b>every week</b>. '
        + 'English uses a different verb for each.'
    });

    function draw(side, hl) {
      var s = r(0, 0, 420, 200, SURF, 12);
      /* LEFT: one visit, happening now */
      var lon = side === 'now';
      s += r(14, 22, 182, 158, lon ? '#e8f1ee' : 'var(--surface)', 10);
      s += clock(72, 72, 34, 9, 40, lon ? GREEN : NAVY);
      s += person(142, 104, lon ? GREEN : '#8d99a6');
      s += t(104, 136, 13, 'one visitor, at the desk', TX2, 'middle', 600);
      s += t(104, 154, 12, 'right now', lon ? GREEN : TX2, 'middle', 700);
      s += t(104, 16, 12, 'NOW', lon ? GREEN : TX2, 'middle', 800);

      /* RIGHT: the same thing, every week */
      var ron = side === 'always';
      s += r(224, 22, 182, 158, ron ? '#f4eee2' : 'var(--surface)', 10);
      var days = ['M', 'T', 'W', 'T', 'F'];
      for (var i = 0; i < 5; i++) {
        var x = 240 + i * 34;
        s += r(x, 52, 26, 34, ron ? GOLD : '#dfe4ea', 4);
        s += t(x + 13, 74, 13, days[i], ron ? '#3b2d10' : TX2, 'middle', 700);
        s += c(x + 13, 98, 4, ron ? GOLD : '#c3ccd6');
      }
      s += t(315, 124, 13, 'the same thing happens', TX2, 'middle', 600);
      s += t(315, 142, 12, 'every week', ron ? '#8a6100' : TX2, 'middle', 700);
      s += t(315, 16, 12, 'ALWAYS', ron ? '#8a6100' : TX2, 'middle', 800);

      s += stroke('M 210 30 v 150', LINE, 1.6);
      if (hl) {
        s += r(hl[0], hl[1], hl[2], hl[3], 'none')
          .replace('fill="none"', 'fill="none" stroke="' + ACC + '" stroke-width="3.5"');
      }
      S.svg(s);
    }
    draw(null);

    S.button('what is happening now', function () {
      draw('now', [14, 22, 182, 158]);
      S.say('Mr Tran <b>is handling</b> another visitor. I <b>am meeting</b> him at ten.',
        'One thing, going on at this moment: <b>am/is/are + -ing</b>. It started and it has '
        + 'not finished.');
    });
    S.button('what always happens', function () {
      draw('always', [224, 22, 182, 158]);
      S.say('He <b>usually finishes</b> his morning meetings at ten. We <b>receive</b> '
        + 'visitors every day.',
        'A pattern, not a moment: the plain present. <i>usually</i>, <i>every day</i> and '
        + '<i>always</i> belong here.');
    });
    S.button('both in one turn', function () {
      draw('both', [14, 22, 392, 158]);
      S.say('He <b>usually finishes</b> at ten, but today he <b>is running</b> late.',
        'This is the sentence reception actually needs: the rule, then the exception to it. '
        + 'Two verbs, two time spans, one turn.');
    });
    S.button('the mistake to avoid', function () {
      draw('now', [14, 22, 182, 158]);
      S.say('<s>I meet him at ten and he finishes now.</s> &rarr; '
        + 'I <b>am meeting</b> him at ten and he <b>is finishing</b> now.',
        'Using the plain present for something in progress is the most common slip here, and '
        + 'it makes a live event sound like a timetable.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 2 — request-ladder
     ============================================================ */
  A.addLive('request-ladder', function (host) {
    var S = shell(host, {
      rest: 'Press a step. The further apart the two officials are, the longer the request.',
      note: 'English marks <b>social distance</b> with length. A close colleague gets three '
        + 'words; a foreign delegation lead gets eight.'
    });

    function draw(step) {
      var s = r(0, 0, 420, 200, SURF, 12);
      /* three steps, rising left to right */
      var steps = [[40, 150, 'colleague'], [160, 118, 'counterpart'],
                   [280, 86, 'delegation lead']];
      for (var i = 0; i < steps.length; i++) {
        var x = steps[i][0], y = steps[i][1];
        var on = (step === i);
        s += r(x, y, 104, 14, on ? GOLD : '#cdd6de', 4);
        s += stroke('M ' + (x + 52) + ' ' + (y + 14) + ' v ' + (178 - y - 14),
                    on ? GOLD : LINE, on ? 3 : 1.6);
        s += t(x + 52, y - 8, 12, steps[i][2], on ? '#3b2d10' : TX2, 'middle',
               on ? 700 : 500);
      }
      /* the asker stays put; the person being asked is further up each time */
      s += person(28, 182, NAVY, 0.9);
      if (step != null) {
        var tx = steps[step][0] + 52, ty = steps[step][1];
        s += person(tx, ty, GREEN, 0.9);
        s += dash('M 42 ' + (166) + ' Q ' + ((42 + tx) / 2) + ' ' + (ty - 46) + ' '
          + (tx - 14) + ' ' + (ty - 34), ACC, 2.4, '6 5');
      }
      s += t(210, 18, 12, 'the same favour, asked three ways', TX2, 'middle', 700);
      S.svg(s);
    }
    draw(null);

    S.button('a colleague', function () {
      draw(0);
      S.say('<b>Can you</b> send me the agenda?',
        '<b>can</b> is the short, everyday form. With someone you work beside every day, '
        + 'anything longer sounds oddly stiff.');
    });
    S.button('a counterpart', function () {
      draw(1);
      S.say('<b>Could you</b> send me the agenda before Tuesday, please?',
        '<b>could</b> + <i>please</i>. The step a ministry uses by default with anyone '
        + 'outside their own team.');
    });
    S.button('a delegation lead', function () {
      draw(2);
      S.say('<b>Would you mind</b> sending us the agenda before Tuesday?',
        '<b>Would you mind</b> + <i>-ing</i>. The longest form, for the most distance. Note '
        + 'the verb takes <b>-ing</b>, not <i>to</i>.');
    });
    S.button('offering, not asking', function () {
      draw(1);
      S.say('<b>Shall I</b> arrange the room? We <b>can</b> host it on the second floor.',
        'An offer, not a request. <b>Shall I</b> puts the work on you, which is the polite '
        + 'direction for a host to move in.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 3 — focus-shift
     ============================================================ */
  A.addLive('focus-shift', function (host) {
    var S = shell(host, {
      rest: 'Press a button. Watch the lamp move, and read what the sentence puts first.',
      note: 'Both sentences report the same event. They differ in <b>what the sentence is '
        + 'about</b> - and a press office chooses that on purpose.'
    });

    function draw(mode) {
      var s = r(0, 0, 420, 200, SURF, 12);
      var doerLit = (mode === 'active' || mode === null);
      var thingLit = (mode === 'passive' || mode === 'reported');

      /* the doer: the ministry */
      s += r(24, 62, 128, 96, doerLit ? '#e8f1ee' : 'var(--surface)', 8);
      s += r(44, 92, 88, 56, doerLit ? NAVY : '#aab6c0', 4);
      for (var i = 0; i < 3; i++) { s += r(54 + i * 26, 100, 16, 20, PAPER, 2); }
      s += t(88, 82, 12, 'the Ministry', doerLit ? TX : TX2, 'middle', 700);
      s += t(88, 172, 11, 'who did it', doerLit ? GREEN : TX2, 'middle', 600);

      /* the thing done: the framework, as a sealed document */
      s += r(268, 62, 128, 96, thingLit ? '#f4eee2' : 'var(--surface)', 8);
      s += r(296, 84, 72, 66, PAPER, 3);
      s += stroke('M 296 84 h 72 v 66 h -72 z', '#9aa8b2', 1.4);
      for (var j = 0; j < 4; j++) {
        s += stroke('M 304 ' + (96 + j * 13) + ' h ' + (56 - j * 6), '#9aa8b2', 1.8);
      }
      s += c(358, 142, 10, SEALC) + c(358, 142, 4, PAPER, 0.6);
      s += t(332, 82, 12, 'the framework', thingLit ? TX : TX2, 'middle', 700);
      s += t(332, 172, 11, 'what was done', thingLit ? '#8a6100' : TX2, 'middle', 600);

      /* the lamp, over whichever side is in focus */
      var lx = doerLit && !thingLit ? 88 : 332;
      s += p('M ' + (lx - 26) + ' 44 L ' + (lx + 26) + ' 44 L ' + (lx + 12) + ' 20 L '
        + (lx - 12) + ' 20 z', GOLD);
      s += p('M ' + (lx - 34) + ' 46 L ' + (lx + 34) + ' 46 L ' + (lx + 54) + ' 62 L '
        + (lx - 54) + ' 62 z', '#f6e6bb', 0);
      s += stroke('M 160 110 h 100', LINE, 1.6, ' marker-end=""');
      s += p('M 258 104 l 12 6 l -12 6 z', LINE);
      S.svg(s);
    }
    draw(null);

    S.button('the active sentence', function () {
      draw('active');
      S.say('The Ministry <b>announced</b> a new cooperation framework.',
        'The doer comes first, so the sentence is about the Ministry. Use this when who '
        + 'acted is the news.');
    });
    S.button('the passive sentence', function () {
      draw('passive');
      S.say('A new cooperation framework <b>was announced</b> by the Ministry.',
        '<b>was/were + past participle</b>. The thing done comes first, so the sentence is '
        + 'about the framework. The doer can stay or go.');
    });
    S.button('no doer at all', function () {
      draw('passive');
      S.say('A new cooperation framework <b>was announced</b> yesterday.',
        'Dropping <i>by the Ministry</i> is the real reason an official text chooses the '
        + 'passive: it reports the fact without naming who decided it.');
    });
    S.button('reporting what was said', function () {
      draw('reported');
      S.say('The spokesperson <b>said that</b> the framework <b>had been</b> agreed.',
        'A reporting verb puts the statement one step back: <i>was agreed</i> becomes '
        + '<b>had been agreed</b>, and the quotation marks go.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 4 — if-then-gate
     ============================================================ */
  A.addLive('if-then-gate', function (host) {
    var S = shell(host, {
      rest: 'Press a button. The gate opens only when its condition is met.',
      note: 'A formal letter rarely promises outright. It states a <b>condition</b>, and what '
        + 'follows from it.'
    });

    function draw(open, kind) {
      var s = r(0, 0, 420, 200, SURF, 12);
      /* the condition, left */
      s += r(14, 54, 136, 92, 'var(--surface)', 8);
      s += t(82, 44, 12, 'IF', NAVY, 'middle', 800);
      s += r(32, 74, 100, 52, kind === 'unreal' ? '#f1ecf4' : '#e8f1ee', 5);
      s += t(82, 96, 12, kind === 'unreal' ? 'if we RE-' : 'if you', TX2, 'middle', 600);
      s += t(82, 114, 12, kind === 'unreal' ? 'structured' : 'submit it', TX, 'middle', 700);

      /* the gate itself */
      var gx = 176;
      s += r(gx, 40, 10, 120, '#9aa8b2', 3) + r(gx + 58, 40, 10, 120, '#9aa8b2', 3);
      if (open) {
        s += r(gx + 10, 40, 58, 18, GOLD, 2);
        s += t(gx + 39, 150, 11, 'open', OKC, 'middle', 700);
      } else {
        s += r(gx + 10, 40, 58, 112, '#cdd6de', 3);
        for (var i = 0; i < 5; i++) {
          s += stroke('M ' + (gx + 12) + ' ' + (52 + i * 22) + ' h 54', '#aab6c0', 2);
        }
        s += t(gx + 39, 170, 11, 'shut', TX2, 'middle', 700);
      }
      /* the consequence, right */
      s += r(252, 54, 154, 92, 'var(--surface)', 8);
      s += t(329, 44, 12, 'THEN', NAVY, 'middle', 800);
      var cBox = open ? (kind === 'unreal' ? '#f1ecf4' : '#f4eee2') : 'var(--surface-2)';
      s += r(268, 74, 122, 52, cBox, 5);
      if (open) {
        s += t(329, 96, 12, kind === 'unreal' ? 'we WOULD' : 'we WILL', TX, 'middle', 700);
        s += t(329, 114, 12, kind === 'unreal' ? 'attract more' : 'fast-track it',
               TX2, 'middle', 600);
      } else {
        s += t(329, 104, 12, 'nothing follows', TX2, 'middle', 600);
      }
      /* the token travelling through */
      var tokX = open ? 300 : 158;
      s += c(tokX, 100, 9, ACC);
      if (kind === 'unreal') {
        s += dash('M 152 100 H ' + (tokX - 12), ACC, 2.2, '5 4');
      } else {
        s += stroke('M 152 100 H ' + (tokX - 12), ACC, 2.2);
      }
      S.svg(s);
    }
    draw(false, 'real');

    S.button('condition not met', function () {
      draw(false, 'real');
      S.say('No application, no decision.',
        'The gate is shut. This is the state a conditional sentence describes the way OUT of.');
    });
    S.button('a real condition', function () {
      draw(true, 'real');
      S.say('<b>If</b> you <b>submit</b> the application through the Agency, we <b>will '
        + 'fast-track</b> the review.',
        '<b>if + present</b>, then <b>will</b>. The condition is genuinely open, so this is '
        + 'a real offer and can be held to.');
    });
    S.button('a hypothetical one', function () {
      draw(true, 'unreal');
      S.say('<b>If</b> we <b>restructured</b> the package, we <b>would attract</b> more '
        + 'infrastructure companies.',
        '<b>if + past</b>, then <b>would</b>. Nothing has been decided; this is thinking '
        + 'aloud, and a counterpart hears it that way.');
    });
    S.button('the formal written form', function () {
      draw(true, 'real');
      S.say('<b>Should</b> your Ministry <b>wish</b> to proceed, we <b>shall</b> prepare '
        + 'the memorandum.',
        '<b>Should</b> at the front replaces <i>if</i> and drops it. This is the register a '
        + 'note verbale is written in.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

  /* ============================================================
     UNIT 5 — commitment-chain
     ============================================================ */
  A.addLive('commitment-chain', function (host) {
    var S = shell(host, {
      rest: 'Press a button. A solid link is a promise; a dotted link is a possibility.',
      note: 'An investor listens for exactly this difference. <b>will</b> can be held to; '
        + '<b>would</b> cannot.'
    });

    function draw(level) {
      var s = r(0, 0, 420, 200, SURF, 12);
      var steps = ['feasibility study', 'legal protection', 'letter of intent', 'signature'];
      var solidTo = level == null ? 0 : level;
      for (var i = 0; i < steps.length; i++) {
        var x = 36 + i * 96;
        var firm = i < solidTo;
        s += c(x, 86, 24, firm ? '#e8f1ee' : 'var(--surface)');
        s += c(x, 86, 24, 'none')
          .replace('fill="none"', 'fill="none" stroke="' + (firm ? GREEN : '#aab6c0')
            + '" stroke-width="' + (firm ? 4 : 2) + '"'
            + (firm ? '' : ' stroke-dasharray="5 4"'));
        s += t(x, 91, 11, String(i + 1), firm ? GREEN : TX2, 'middle', 800);
        s += t(x, 136, 11, steps[i], firm ? TX : TX2, 'middle', firm ? 700 : 500);
        if (i < steps.length - 1) {
          var d = 'M ' + (x + 26) + ' 86 H ' + (x + 70);
          s += (i < solidTo - 1) ? stroke(d, GREEN, 4) : dash(d, '#aab6c0', 2.4, '6 5');
        }
      }
      s += t(210, 32, 12, 'how firm is each step?', TX2, 'middle', 700);
      s += c(394, 86, 11, solidTo >= 4 ? GOLD : 'var(--surface)');
      if (solidTo >= 4) { s += c(394, 86, 5, SEALC); }
      S.svg(s);
    }
    draw(null);

    S.button('possible', function () {
      draw(1);
      S.say('If the legal framework <b>provided</b> that protection, we <b>would consider</b> '
        + 'a letter of intent.',
        '<b>would</b>: a possibility being weighed. Nothing has been committed to, and the '
        + 'chain beyond this point is dotted.');
    });
    S.button('likely', function () {
      draw(2);
      S.say('If the framework <b>provides</b> that protection, we <b>will prepare</b> '
        + 'a letter of intent.',
        '<b>will</b>: the same condition, now treated as real. This is the sentence that '
        + 'moves a negotiation forward.');
    });
    S.button('committed', function () {
      draw(3);
      S.say('<b>Once</b> the feasibility study <b>confirms</b> viability, we <b>will assign</b> '
        + 'a dedicated case officer.',
        '<b>Once</b> replaces <i>if</i>: the condition is no longer in doubt, only its timing. '
        + 'A firm commitment with a trigger.');
    });
    S.button('signed', function () {
      draw(4);
      S.say('We <b>are</b> ready to sign, and the Agency <b>has</b> fast-tracked the review.',
        'No condition left at all. The present tense is the strongest thing an official can '
        + 'say, which is why it is kept for the end.');
    });
    return { destroy: function () { host.innerHTML = ''; } };
  });

})(window);
