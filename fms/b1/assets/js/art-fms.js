/* ============================================================
   English for Foreign Ministry Staff B1.1 — art-fms.js

   THE SHARED LAYER: the drawing primitives this course composes from, the four named
   diagrams its cards ask for, and the five phrase-box dioramas.

   WHY THE GEOMETRY IS BUILT AND NOT BORROWED. This course's world is a ministry: a
   reception desk, a protocol office, a press room, a signed agreement, a sealed note
   verbale, a visitor badge on a lanyard. None of that is an emoji and none of it is a
   stock icon - a glyph of a generic "document" tells a learner nothing about the
   difference between a note verbale and an aide-memoire, which is exactly what the
   glossary is for. So every drawing here is drawn, and the per-unit files compose the
   same primitives into a DIFFERENT arrangement for each term.

   Loaded after art.js. It touches nothing in the lifted engine: everything attaches
   through A.addSpot / A.addDiorama, which the engine already provides.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.FMS && w.FMS.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ---------------------------------------------------------- the ministry palette */
  var STONE = '#d8dee3', STONE2 = '#b9c4cb', STONE3 = '#9aa8b2';
  var NAVY = '#223243', NAVY2 = '#2f4257', INK = '#52646f';
  var PAPER = '#f6f3ea', PAPER2 = '#e7e1d2', GOLD = '#c8a55c', GOLD2 = '#a8893f';
  var SEAL = '#8d3b3b', GREEN = '#3c6e63', SKY = '#eaf2f8';

  function stroke(d, col, wdt, cap) {
    return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="'
      + (wdt || 2) + '" stroke-linecap="' + (cap || 'round')
      + '" stroke-linejoin="round"/>';
  }
  function dash(d, col, wdt, pat) {
    return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="'
      + (wdt || 1.6) + '" stroke-dasharray="' + (pat || '4 3') + '"/>';
  }
  /* OUTLINED SHAPES, DRAWN DIRECTLY.
     The engine's r() and c() take a fill, so the older art files get an outline by drawing
     a filled shape and then string-replacing `fill="none"` into it. That works and it is
     horrible to generate: the quotes have to survive Python, a shell and a JS literal, and
     tools/fms_art_gen.py could not emit it without the escaping terminating its own string.
     These three say what they mean instead. */
  function ring(x, y, rad, col, wdt, pat) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + rad + '" fill="none" stroke="'
      + col + '" stroke-width="' + (wdt || 2) + '"'
      + (pat ? ' stroke-dasharray="' + pat + '"' : '') + '/>';
  }
  function boxO(x, y, wd, ht, col, wdt, rad) {
    return '<rect x="' + x + '" y="' + y + '" width="' + wd + '" height="' + ht
      + '" rx="' + (rad || 0) + '" fill="none" stroke="' + col + '" stroke-width="'
      + (wdt || 2) + '"/>';
  }
  function ellO(x, y, rx, ry, col, wdt) {
    return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry
      + '" fill="none" stroke="' + col + '" stroke-width="' + (wdt || 2) + '"/>';
  }

  /* A CAPTION THAT IS WIDER THAN ITS FRAME IS CLIPPED AT BOTH ENDS.
     Three drawings shipped with captions 207, 237 and 247 units wide inside a 200-unit
     viewBox - centred, so the first and last few words were cut off on every screen that
     showed them. Nothing threw, and at a glance the picture looked fine.
     This picks a size that fits the text in the width available, so the caption is readable
     and the frame cannot be overrun. gates/fms_art A4 checks the result. */
  function caption(cx, y, text, maxW, col) {
    var w = maxW || 188;
    var size = Math.min(11, Math.max(7.5, w / ((text || '').length * 0.52)));
    return t(cx, y, Math.round(size * 10) / 10, text, col || INK, 'middle', 600);
  }

  A.fmsStroke = stroke;
  A.fmsDash = dash;
  A.fmsRing = ring;
  A.fmsBoxO = boxO;
  A.fmsEllO = ellO;
  A.fmsCaption = caption;
  A.fmsPal = { STONE: STONE, STONE2: STONE2, STONE3: STONE3, NAVY: NAVY, NAVY2: NAVY2,
               INK: INK, PAPER: PAPER, PAPER2: PAPER2, GOLD: GOLD, GOLD2: GOLD2,
               SEAL: SEAL, GREEN: GREEN, SKY: SKY };

  /* ---------------------------------------------------------- shared primitives
     Each returns a fragment positioned at (x, y). The per-unit glossary files compose
     these, so a term's picture is made of the same ministry objects the course talks
     about rather than of abstract shapes. */

  /* a sheet of paper with ruled lines */
  function sheet(x, y, wd, ht, lines, tint) {
    var s = r(x, y, wd, ht, tint || PAPER, 3)
      + stroke('M ' + x + ' ' + y + ' h ' + wd + ' v ' + ht + ' h ' + (-wd) + ' z',
               STONE3, 1.3);
    var n = lines || 4;
    for (var i = 0; i < n; i++) {
      var ly = y + 7 + i * ((ht - 12) / n);
      var lw = (i === 0) ? wd * 0.5 : wd * (0.62 + 0.26 * ((i * 7) % 3) / 2);
      s += stroke('M ' + (x + 5) + ' ' + ly + ' h ' + lw.toFixed(1), STONE3, 1.6);
    }
    return s;
  }
  A.fmsSheet = sheet;

  /* an embossed seal - the mark that makes a document official */
  function seal(x, y, rad, col) {
    var s = c(x, y, rad, col || SEAL) + c(x, y, rad * 0.74, '#fff', 0.18);
    for (var i = 0; i < 12; i++) {
      var a = i * Math.PI / 6;
      s += stroke('M ' + (x + Math.cos(a) * rad * 0.78).toFixed(1) + ' '
        + (y + Math.sin(a) * rad * 0.78).toFixed(1) + ' L '
        + (x + Math.cos(a) * rad).toFixed(1) + ' '
        + (y + Math.sin(a) * rad).toFixed(1), col || SEAL, 1.5);
    }
    return s + c(x, y, rad * 0.3, '#fff', 0.5);
  }
  A.fmsSeal = seal;

  /* a flag on a staff - two of them side by side is what "bilateral" looks like */
  function flag(x, y, ht, col, flip) {
    var dir = flip ? -1 : 1;
    return stroke('M ' + x + ' ' + y + ' v ' + ht, STONE3, 2.2)
      + p('M ' + x + ' ' + y + ' l ' + (dir * 22) + ' 5 l ' + (-dir * 22) + ' 5 z', col)
      + c(x, y - 2, 2.2, GOLD);
  }
  A.fmsFlag = flag;

  /* the ministry front: a classical portico, which is what these buildings look like */
  function portico(x, y, wd, ht) {
    var s = r(x, y + ht * 0.3, wd, ht * 0.7, STONE2, 2);
    s += p('M ' + x + ' ' + (y + ht * 0.3) + ' L ' + (x + wd / 2) + ' ' + y
      + ' L ' + (x + wd) + ' ' + (y + ht * 0.3) + ' z', STONE);
    var cols = 4;
    for (var i = 0; i < cols; i++) {
      var cx = x + wd * (0.14 + i * 0.24);
      s += r(cx, y + ht * 0.38, wd * 0.07, ht * 0.56, STONE, 1);
    }
    s += r(x + wd * 0.06, y + ht * 0.94, wd * 0.88, ht * 0.08, STONE3, 1);
    return s;
  }
  A.fmsPortico = portico;

  /* a speech bubble, for the things people say */
  function bubble(x, y, wd, ht, col) {
    return r(x, y, wd, ht, col || '#fff', 5)
      + p('M ' + (x + 12) + ' ' + (y + ht) + ' l 7 8 l 2 -8 z', col || '#fff')
      + stroke('M ' + x + ' ' + y + ' h ' + wd + ' v ' + ht + ' h ' + (-wd) + ' z',
               STONE3, 1.2);
  }
  A.fmsBubble = bubble;

  /* a handshake - cooperation, drawn rather than implied */
  function handshake(x, y, scale) {
    var k = scale || 1;
    return p('M ' + x + ' ' + y + ' l ' + (16 * k) + ' ' + (-5 * k) + ' l ' + (9 * k)
      + ' ' + (4 * k) + ' l ' + (-7 * k) + ' ' + (7 * k) + ' z', '#c8936b')
      + p('M ' + (x + 34 * k) + ' ' + (y - 1 * k) + ' l ' + (-16 * k) + ' ' + (-5 * k)
        + ' l ' + (-9 * k) + ' ' + (4 * k) + ' l ' + (7 * k) + ' ' + (7 * k) + ' z',
        '#a9754f')
      + stroke('M ' + (x + 2 * k) + ' ' + (y + 2 * k) + ' l ' + (30 * k) + ' '
        + (-6 * k), '#8a5f41', 1.4);
  }
  A.fmsHandshake = handshake;

  /* a lanyard badge */
  function badge(x, y) {
    return stroke('M ' + (x + 16) + ' ' + y + ' l -9 16 M ' + (x + 16) + ' ' + y
      + ' l 9 16', NAVY2, 2.4)
      + r(x, y + 15, 32, 40, PAPER, 3)
      + stroke('M ' + x + ' ' + (y + 15) + ' h 32 v 40 h -32 z', STONE3, 1.3)
      + r(x + 4, y + 19, 24, 7, GREEN, 1.5)
      + c(x + 16, y + 35, 6, '#c8936b')
      + p('M ' + (x + 7) + ' ' + (y + 51) + ' q 9 -11 18 0 z', NAVY2)
      + stroke('M ' + (x + 5) + ' ' + (y + 46) + ' h 22', STONE3, 1.2);
  }
  A.fmsBadge = badge;

  /* ============================================================
     THE FOUR NAMED DIAGRAMS
     ============================================================ */

  /* 1B - the visitor badge, which is the first object in the course's world */
  A.addSpot('visitor-badge', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(18, 96, 164, 30, STONE2, 3);                       /* the reception counter */
    s += stroke('M 18 96 h 164', STONE3, 1.6);
    s += badge(44, 24);
    s += sheet(104, 32, 56, 46, 4);
    s += seal(148, 70, 9, SEAL);
    s += caption(100, 136, 'a visitor pass, and its form');
    return frame(s, SKY);
  });

  /* 6A / 6C - what a professional email is made of, labelled by position */
  A.addSpot('email-anatomy', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(22, 12, 156, 112, PAPER, 4)
      + stroke('M 22 12 h 156 v 112 h -156 z', STONE3, 1.4);
    s += r(22, 12, 156, 16, NAVY2, 0) ;                        /* the header band */
    s += stroke('M 30 20 h 40 M 76 20 h 28', '#dfe7ee', 2);
    var rows = [[34, 'subject', 0.62], [50, 'greeting', 0.34],
                [64, 'purpose', 0.86], [78, 'detail', 0.78],
                [92, 'next step', 0.56], [108, 'close', 0.28]];
    for (var i = 0; i < rows.length; i++) {
      var y = rows[i][0], frac = rows[i][2];
      s += stroke('M 32 ' + y + ' h ' + (136 * frac).toFixed(1), STONE3, 2.2);
      s += c(27, y, 2.2, i === 0 ? GOLD : GREEN);
    }
    s += dash('M 24 42 h 152', STONE3, 1.2, '3 3');
    s += dash('M 24 100 h 152', STONE3, 1.2, '3 3');
    s += caption(100, 136, 'the parts of an email, top to bottom');
    return frame(s, SKY);
  });

  /* 7B - linking: where one word runs into the next */
  A.addSpot('linking-wave', function () {
    var s = r(0, 0, 200, 140, SKY);
    /* SEVEN CHUNKS HAVE TO FIT IN 200 UNITS. The first version used a chip width of
       10 + 6.4 per character with a 5-unit gap, which came to 244 units - so `is` and
       `try`, and two of the link loops, were drawn off the right-hand edge of the frame
       and simply never appeared. The sizes below are computed from the total so the row
       is centred and always inside; gates/fms_art A4 is what caught it. */
    var words = ['Wel', 'come', 'to', 'the', 'Min', 'is', 'try'];
    var gap = 3, pad = 7, per = 4.6, AVAIL = 186;
    var wds = [], total = 0, i;
    for (i = 0; i < words.length; i++) {
      wds.push(pad * 2 + words[i].length * per);
      total += wds[i];
    }
    total += gap * (words.length - 1);
    /* SCALED TO FIT, not tuned to fit. Hand-chosen constants came to 208 units in a
       200-unit frame and overran it by 4 at each end - close enough to look right and
       still clipped. Dividing by the measured total cannot be wrong by a few units. */
    if (total > AVAIL) {
      var k = (AVAIL - gap * (words.length - 1)) / (total - gap * (words.length - 1));
      total = gap * (words.length - 1);
      for (i = 0; i < wds.length; i++) {
        wds[i] = wds[i] * k;
        total += wds[i];
      }
    }
    var x = (200 - total) / 2;
    var xs = [];
    for (i = 0; i < words.length; i++) {
      var wd = wds[i];
      var stressed = (i === 0 || i === 4);
      s += r(x.toFixed(1), stressed ? 42 : 48, wd.toFixed(1), stressed ? 26 : 20,
             stressed ? GOLD : STONE2, 3);
      s += t((x + wd / 2).toFixed(1), stressed ? 60 : 62, stressed ? 11 : 9.5, words[i],
             stressed ? '#3b2d10' : INK, 'middle', stressed ? 700 : 500);
      xs.push(x + wd);
      x += wd + gap;
    }
    /* the links: a curve from the end of one chunk into the start of the next */
    for (var j = 0; j < xs.length - 1; j++) {
      s += stroke('M ' + xs[j].toFixed(1) + ' 80 q 1.5 8 ' + gap.toFixed(1) + ' 0',
                  GREEN, 2);
    }
    s += caption(100, 106, 'the gold syllables are loud; the loops are links');
    s += caption(100, 126, 'say it as three beats, not seven words', 188, GREEN);
    return frame(s, SKY);
  });

  /* 8B - the cultural comparison, as two columns that actually differ */
  A.addSpot('culture-table', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 16, 80, 104, PAPER, 3) + r(106, 16, 80, 104, PAPER2, 3);
    s += r(14, 16, 80, 18, NAVY2, 3) + r(106, 16, 80, 18, GREEN, 3);
    s += t(54, 29, 11, 'one custom', '#eef3f7', 'middle', 700);
    s += t(146, 29, 11, 'another', '#eef3f7', 'middle', 700);
    /* rows that are deliberately different lengths, so the two columns do not look alike */
    var left = [0.8, 0.5, 0.68, 0.42], right = [0.52, 0.78, 0.46, 0.7];
    for (var i = 0; i < 4; i++) {
      var y = 46 + i * 18;
      s += stroke('M 22 ' + y + ' h ' + (62 * left[i]).toFixed(1), STONE3, 2.1);
      s += stroke('M 114 ' + y + ' h ' + (62 * right[i]).toFixed(1), STONE3, 2.1);
      s += c(18, y, 2, NAVY2) + c(110, y, 2, GREEN);
    }
    s += stroke('M 100 20 v 96', STONE3, 1.4);
    s += handshake(76, 128, 0.7);
    return frame(s, SKY);
  });

  /* ============================================================
     "BEFORE YOU LISTEN" - the five 3A cards.

     Every unit's Part 3 opens by telling the learner to LOOK: "Look at these four
     visitors who are arriving at the Ministry today", "Look at these four coordination
     situations", "...four speakers", "...four diplomatic contexts", "...four investment
     scenarios". The card then lists them in words and the page drew nothing at all -
     six of the seven cards in the course whose text says "look at" had no drawing over
     eight nodes.

     THE FOUR ARE NUMBERED, and the numbers are the card's own 1-4. That is the point:
     the picture is not decoration beside the questions, it is the thing the questions
     are about, so a learner can look at figure 3 and answer question 3. It also makes
     one visual in the course ANSWERABLE, which none were.

     THE FIVE ARE DIFFERENT because the four things are different in each unit - people
     at a desk in unit 1, problems to solve in unit 2, speakers at a microphone in unit
     3, formal occasions in unit 4, stages of an investment conversation in unit 5. One
     drawing reused five times would be the stock-icon mistake in a larger size.
     ============================================================ */

  /* a standing figure, 0.5 scale-ish: head, shoulders, body. `tone` is the clothing. */
  function person(x, y, tone, skin) {
    var s = p('M ' + (x - 9) + ' ' + y + ' q 0 -17 9 -17 q 9 0 9 17 z', tone);
    s += r(x - 9, y, 18, 2, tone, 1);
    s += c(x, y - 21, 6, skin || '#d7b494');
    return s;
  }

  /* the little numeral that ties a figure to its question */
  function tag(x, y, n) {
    return c(x, y, 7.5, GOLD2) + t(x, y + 3.4, 9, String(n), '#fff', 'middle', 700);
  }

  function counter(y) {
    return r(10, y, 180, 16, STONE2, 3) + stroke('M 10 ' + y + ' h 180', STONE3, 1.5);
  }

  /* 3A unit 1 - four visitors arriving at the ministry reception desk.

     THE VISITORS STAND IN FRONT OF THE COUNTER. The first version put the desk at y=96,
     below their feet, so four people who have just walked in appeared to be standing
     behind the reception desk - which is where the STAFF stand. The desk is the thing
     they are approaching, so it sits behind them. */
  A.addSpot('predict-visitors', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += portico(48, 8, 104, 44);
    var xs = [32, 78, 124, 170];
    var tones = [NAVY, GREEN, INK, SEAL];
    s += counter(60);
    /* 1 a diplomat with a briefcase, 2 a field coordinator with a clipboard,
       3 a businessman with no appointment, 4 a journalist with a microphone */
    s += person(xs[0], 108, tones[0]) + r(xs[0] + 9, 100, 9, 8, NAVY2, 1);
    s += person(xs[1], 108, tones[1]) + sheet(xs[1] + 8, 92, 11, 14, 2);
    s += person(xs[2], 108, tones[2]) + r(xs[2] + 9, 100, 9, 8, '#7a6a52', 1)
      + t(xs[2] + 17, 90, 11, '?', NAVY, 'middle', 700);
    s += person(xs[3], 108, tones[3])
      + stroke('M ' + (xs[3] + 10) + ' 102 v -10', NAVY, 1.6)
      + c(xs[3] + 10, 90, 3.4, NAVY);
    for (var i = 0; i < 4; i++) { s += tag(xs[i], 124, i + 1); }
    return frame(s, SKY);
  });

  /* 3A unit 2 - the four things that go wrong before a bilateral meeting */
  A.addSpot('predict-coordination', function () {
    var s = r(0, 0, 200, 140, SKY);
    function cell(cx, cy, n, body) {
      var o = r(cx - 44, cy - 27, 88, 54, PAPER, 4)
        + stroke('M ' + (cx - 44) + ' ' + (cy - 27) + ' h 88 v 54 h -88 z', STONE3, 1.2);
      return o + body + tag(cx - 36, cy - 19, n);
    }
    /* 1 a delayed arrival, 2 a room that failed, 3 interpretation, 4 a clearance */
    s += cell(52, 36, 1, ring(62, 38, 12, NAVY2, 2) +
      stroke('M 62 38 v -7 M 62 38 h 6', NAVY2, 1.8) + dash('M 76 46 h 14', INK, 1.4, '3 2'));
    s += cell(148, 36, 2, r(140, 26, 26, 22, STONE2, 2) +
      stroke('M 140 26 l 26 22 M 166 26 l -26 22', SEAL, 2));
    s += cell(52, 104, 3, bubble(30, 88, 26, 16, NAVY2) + bubble(50, 100, 26, 16, GREEN));
    s += cell(148, 104, 4, badge(140, 86));
    return frame(s, SKY);
  });

  /* 3A unit 3 - four people saying official things, at four levels of formality */
  A.addSpot('predict-speakers', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += counter(104);
    var xs = [30, 76, 124, 170];
    var tones = [NAVY, GREEN, NAVY2, INK];
    for (var i = 0; i < 4; i++) {
      s += person(xs[i], 100, tones[i]);
      /* a microphone on a stand - taller for the two most formal speakers */
      var h = [22, 14, 20, 10][i];
      s += stroke('M ' + (xs[i] + 11) + ' 94 v -' + h, NAVY, 1.5)
        + c(xs[i] + 11, 94 - h, 3, NAVY);
      s += tag(xs[i], 126, i + 1);
    }
    /* two flags behind the most official of them */
    s += flag(14, 30, 20, GREEN) + flag(188, 30, 20, SEAL, true);
    return frame(s, SKY);
  });

  /* 3A unit 4 - four formal occasions where future language is used */
  A.addSpot('predict-contexts', function () {
    var s = r(0, 0, 200, 140, SKY);
    function cell(cx, cy, n, body) {
      var o = r(cx - 44, cy - 27, 88, 54, PAPER2, 4)
        + stroke('M ' + (cx - 44) + ' ' + (cy - 27) + ' h 88 v 54 h -88 z', STONE3, 1.2);
      return o + body + tag(cx - 36, cy - 19, n);
    }
    /* 1 a signing, 2 a conference, 3 a dinner toast, 4 a planning table */
    s += cell(52, 36, 1, sheet(44, 22, 28, 26, 4) + seal(68, 44, 6, SEAL));
    s += cell(148, 36, 2, r(126, 24, 44, 18, STONE2, 2)
      + stroke('M 148 42 v 8', STONE3, 2) + flag(170, 20, 12, GREEN));
    s += cell(52, 104, 3, p('M 40 112 q 6 -14 12 0 z', GOLD)
      + stroke('M 46 112 v 8', GOLD2, 1.6)
      + p('M 60 112 q 6 -14 12 0 z', GOLD) + stroke('M 66 112 v 8', GOLD2, 1.6));
    s += cell(148, 104, 4, r(124, 96, 48, 4, STONE3, 2)
      + person(134, 94, NAVY) + person(162, 94, GREEN));
    return frame(s, SKY);
  });

  /* 3A unit 5 - four moments of an investment conversation */
  A.addSpot('predict-investment', function () {
    var s = r(0, 0, 200, 140, SKY);
    function cell(cx, cy, n, body) {
      var o = r(cx - 44, cy - 27, 88, 54, PAPER, 4)
        + stroke('M ' + (cx - 44) + ' ' + (cy - 27) + ' h 88 v 54 h -88 z', STONE3, 1.2);
      return o + body + tag(cx - 36, cy - 19, n);
    }
    /* 1 a delegation arriving, 2 a question from the floor, 3 a phone call,
       4 a letter of intent being signed */
    s += cell(52, 36, 1, handshake(52, 42, 0.8));
    s += cell(148, 36, 2, bubble(122, 20, 30, 16, NAVY2)
      + t(137, 31, 10, '?', '#fff', 'middle', 700)
      + person(166, 48, GREEN));
    s += cell(52, 104, 3, person(30, 112, NAVY)
      + stroke('M 40 100 q 16 -10 32 0', INK, 1.6)
      + person(74, 112, SEAL));
    s += cell(148, 104, 4, sheet(130, 88, 30, 28, 4)
      + stroke('M 160 112 l 10 -10', NAVY, 2) + seal(140, 112, 5, SEAL));
    return frame(s, SKY);
  });

  /* ============================================================
     THE PHRASE BOXES - one diorama per unit, behind the Useful Phrases cards.
     Each is the room that unit's phrases are said in, so the five differ.
     ============================================================ */
  function phraseRoom(label, bodyFn, tint) {
    return function () {
      var s = r(0, 0, 400, 260, tint || '#e3eaee');
      s += r(0, 196, 400, 64, STONE2);
      s += bodyFn();
      s += t(200, 250, 15, label, INK, 'middle', 700);
      return D.svgFit('0 0 400 260', s);
    };
  }

  A.addDiorama('phrases-1', phraseRoom('what reception says, all day', function () {
    var s = r(40, 150, 320, 48, '#c8a97e', 6) + r(40, 142, 320, 12, '#dcc39b', 4);
    s += badge(60, 60) + badge(300, 60);
    s += sheet(150, 52, 100, 74, 5);
    s += seal(230, 112, 11);
    return s;
  }));

  A.addDiorama('phrases-2', phraseRoom('what a meeting opens with', function () {
    var s = e(200, 160, 150, 34, '#b08968') + e(200, 152, 150, 34, '#c8a97e');
    for (var i = 0; i < 5; i++) {
      s += r(84 + i * 58, 120, 30, 22, PAPER, 2);
    }
    s += flag(130, 40, 56, NAVY2) + flag(270, 40, 56, GREEN, true);
    s += bubble(154, 46, 92, 34);
    return s;
  }));

  A.addDiorama('phrases-3', phraseRoom('what the press room hears', function () {
    var s = r(150, 120, 100, 78, NAVY2, 4);                   /* the podium */
    s += r(162, 130, 76, 10, GOLD, 2);
    s += stroke('M 200 120 v -22', STONE3, 2.4) + c(200, 94, 7, '#3a4650');
    for (var i = 0; i < 4; i++) {
      s += c(58 + i * 30, 164, 9, '#2c3b47') + stroke('M ' + (58 + i * 30)
        + ' 173 v 14', '#2c3b47', 3);
    }
    s += bubble(252, 48, 104, 38);
    return s;
  }));

  A.addDiorama('phrases-4', phraseRoom('what a formal letter says', function () {
    var s = sheet(120, 40, 160, 150, 8);
    s += seal(254, 166, 15);
    s += stroke('M 140 60 h 70', NAVY2, 3);
    s += r(120, 40, 160, 10, NAVY2, 2);
    s += flag(70, 70, 60, GOLD);
    return s;
  }));

  A.addDiorama('phrases-5', phraseRoom('what an investor is told', function () {
    var s = r(60, 96, 280, 100, PAPER, 4);
    /* a rising bar chart - the thing an investment conversation is about */
    var h = [26, 40, 34, 58, 72];
    for (var i = 0; i < h.length; i++) {
      s += r(84 + i * 50, 182 - h[i], 32, h[i], i === 4 ? GREEN : STONE3, 2);
    }
    s += stroke('M 76 184 h 252', INK, 2);
    s += handshake(250, 120, 1.1);
    return s;
  }));

})(window);
