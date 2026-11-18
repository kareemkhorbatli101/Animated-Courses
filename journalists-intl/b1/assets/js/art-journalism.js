/* ============================================================
   English for International Journalists B1 — art-journalism.js

   THE NEWSROOM'S OWN OBJECTS, DRAWN. This course ships zero image files, as
   every course on this site does: the art is built in code so it themes,
   scales, needs no media repository, and cannot 404.

   WHY DRAWN AND NOT BORROWED. A newsroom's world is a dateline, a byline, a
   slug line, a story built widest-fact-first, a claim set beside the source
   that carries it, a running order with one item climbing, a risk form signed
   before anyone leaves. None of that is an emoji and none of it is a stock
   icon: a generic "document" glyph tells a learner nothing about the
   difference between a wire take and an embargoed release, which is exactly
   what the vocabulary parts are for.

   Loaded after art.js. Attaches only through A.addSpot, which the engine
   provides.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.JRN && w.JRN.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ---------------------------------------------------------- the press palette */
  var NEWS = '#f7f4ec', NEWS2 = '#e8e2d2', RULE = '#9aa3ab';
  var INK = '#2b3440', INK2 = '#55626f', MAST = '#9e2b25', MAST2 = '#c2453c';
  var FIELD = '#2f6f62', DESK = '#2e5a88', AMBER = '#c8922c', SKY = '#eef2f4';
  var PAPER = '#ffffff', GREY = '#c6cdd3', GO = '#1b7a45', STOP = '#b3261e';

  function stroke(d, col, wdt, cap) {
    return p(d, null, ' stroke="' + col + '" stroke-width="' + (wdt || 2) +
      '" stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function dash(d, col, wdt, pat) {
    return p(d, null, ' stroke="' + col + '" stroke-width="' + (wdt || 1.4) +
      '" stroke-dasharray="' + (pat || '4 3') + '" stroke-linecap="round"');
  }
  function boxO(x, y, wd, ht, col, wdt) {
    return p('M ' + x + ' ' + y + ' h ' + wd + ' v ' + ht + ' h ' + (-wd) + ' z',
      null, ' stroke="' + col + '" stroke-width="' + (wdt || 1.4) + '"');
  }
  function caption(cx, y, text) { return t(cx, y, 8.5, text, INK2, 'middle', 600); }
  /* the quotation marks are the subject of their own drawing, so they are set
     in a serif face: the sans wedge does not read as a quote at display size. */
  function quote(x, y, size, glyph, col) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + size + '" fill="' + col +
      '" font-family="Georgia,Times New Roman,serif" font-weight="700"' +
      ' text-anchor="middle">' + glyph + '</text>';
  }
  /* a column of type, ruled */
  function column(x, y, wd, ht, lines, tint) {
    var s = r(x, y, wd, ht, tint || PAPER, 2) + boxO(x, y, wd, ht, RULE, 1.1), i;
    for (i = 0; i < (lines || 5); i++) {
      s += stroke('M ' + (x + 4) + ' ' + (y + 7 + i * ((ht - 10) / (lines || 5))) +
        ' h ' + (wd - 9), GREY, 1.7);
    }
    return s;
  }
  /* a standing figure */
  function person(x, y, tone, skin) {
    return p('M ' + (x - 8) + ' ' + y + ' q 0 -15 8 -15 q 8 0 8 15 z', tone)
      + r(x - 8, y, 16, 2, tone, 1)
      + c(x, y - 19, 5.4, skin || '#d7b494');
  }
  function notebook(x, y) {
    return r(x, y, 22, 16, AMBER, 2) + r(x + 2, y + 2, 18, 12, PAPER, 1)
      + stroke('M ' + (x + 4) + ' ' + (y + 6) + ' h 14 M ' + (x + 4) + ' ' + (y + 10) + ' h 10', RULE, 1.3);
  }
  function tag(x, y, wd, label, col) {
    return r(x, y, wd, 11, col, 2) + t(x + wd / 2, y + 8, 7, label, PAPER, 'middle', 700);
  }

  /* ============================================================
     THE SPOTS
     ============================================================ */

  /* the newsroom floor: the field side and the desk side, as a plan you can read.
     This is the course's workhorse, the way branch-plan is the bank's. */
  A.addSpot('newsroom-plan', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(12, 14, 176, 104, NEWS, 3) + boxO(12, 14, 176, 104, RULE, 1.4);
    s += stroke('M 108 14 v 104', RULE, 1.6);
    s += t(60, 28, 9, 'the field', FIELD, 'middle', 700);
    s += t(148, 28, 9, 'the desk', DESK, 'middle', 700);
    s += person(38, 70, FIELD) + person(66, 70, FIELD) + person(92, 70, '#3f8a79');
    s += person(128, 70, DESK) + person(156, 70, INK2);
    s += notebook(28, 44) + column(132, 40, 46, 22, 4, PAPER);
    s += t(60, 92, 7.5, 'reporting it', INK2, 'middle', 600);
    s += t(148, 92, 7.5, 'editing it', INK2, 'middle', 600);
    s += dash('M 108 100 v 14', RULE, 1.2, '3 3');
    return frame(s, SKY);
  });

  /* the desk where copy lands and is read before it moves */
  A.addSpot('news-desk', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 18, 172, 30, NEWS2, 3) + boxO(14, 18, 172, 30, RULE, 1.2);
    s += t(100, 38, 10, 'THE DESK', INK, 'middle', 800);
    s += r(10, 70, 180, 14, NEWS2, 3) + stroke('M 10 70 h 180', RULE, 1.5);
    s += person(52, 68, DESK);
    s += column(96, 56, 34, 26, 5, PAPER) + column(136, 56, 34, 26, 5, PAPER);
    s += person(150, 108, FIELD) + notebook(158, 100);
    s += caption(100, 132, 'copy comes in, and is read');
    return frame(s, SKY);
  });

  /* a byline and a dateline, laid out so each part is visible.
     The single most useful picture in the book: it names the furniture. */
  A.addSpot('byline', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 26, 172, 58, PAPER, 3) + boxO(14, 26, 172, 58, RULE, 1.3);
    s += t(22, 42, 10, 'Flood waters reach the ring road', INK, 'start', 800);
    s += t(22, 58, 8.5, 'By Aisha Bello', MAST, 'start', 700);
    s += t(96, 58, 8.5, 'JAKARTA, 14 March', DESK, 'start', 700);
    s += stroke('M 22 64 h 156', GREY, 1.2);
    s += t(22, 76, 7, 'Water rose overnight in the east of the city.', INK2, 'start', 500);
    s += tag(22, 92, 40, 'headline', INK2) + tag(68, 92, 34, 'byline', MAST)
       + tag(108, 92, 42, 'dateline', DESK) + tag(156, 92, 28, 'body', FIELD);
    s += caption(100, 126, 'the four parts of a story');
    return frame(s, SKY);
  });

  /* the inverted pyramid: the widest fact first */
  A.addSpot('inverted-pyramid', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += p('M 26 20 h 148 l -30 38 h -88 z', MAST2);
    s += p('M 56 62 h 88 l -22 30 h -44 z', DESK);
    s += p('M 70 96 h 60 l -16 22 h -28 z', FIELD);
    s += t(100, 43, 9, 'what happened', PAPER, 'middle', 800);
    s += t(100, 79, 8, 'the detail', PAPER, 'middle', 700);
    s += t(100, 108, 6.2, 'background', PAPER, 'middle', 700);
    s += caption(100, 130, 'widest fact first');
    return frame(s, SKY);
  });

  /* a wire take: slug, dateline, body, and the figure that will be updated */
  A.addSpot('wire-copy', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(16, 16, 168, 108, PAPER, 3) + boxO(16, 16, 168, 108, RULE, 1.3);
    s += r(16, 16, 168, 14, INK, 3) + t(24, 26, 8, 'URGENT  flood-jakarta  1st lead', PAPER, 'start', 700);
    s += t(24, 44, 8, 'JAKARTA (Crosswire)', DESK, 'start', 800);
    s += stroke('M 24 52 h 150 M 24 62 h 150 M 24 72 h 120', GREY, 2.2);
    s += r(24, 80, 54, 13, '#fdf0cf', 2) + boxO(24, 80, 54, 13, AMBER, 1.2);
    s += t(51, 90, 8, 'at least 40', INK, 'middle', 800);
    s += t(86, 90, 7.5, 'figure to be updated', INK2, 'start', 600);
    s += stroke('M 24 104 h 150 M 24 114 h 96', GREY, 2.2);
    return frame(s, SKY);
  });

  /* an accreditation card: the thing you show at the door */
  A.addSpot('press-card', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += stroke('M 100 8 v 22', RULE, 2.4);
    s += r(48, 30, 104, 82, PAPER, 5) + boxO(48, 30, 104, 82, RULE, 1.3);
    s += r(48, 30, 104, 18, MAST, 5) + t(100, 43, 9, 'PRESS', PAPER, 'middle', 800);
    s += c(74, 70, 13, '#e8c9a8') + p('M 61 84 q 13 -13 26 0', null, ' stroke="' + DESK + '" stroke-width="6"');
    s += t(96, 64, 7.5, 'A. Bello', INK, 'start', 800);
    s += t(96, 76, 7, 'Crosswire', INK2, 'start', 600);
    s += t(96, 88, 7, 'reporter', FIELD, 'start', 700);
    s += stroke('M 56 102 h 88', GREY, 1.4);
    s += caption(100, 128, 'accreditation');
    return frame(s, SKY);
  });

  /* who reports to whom in a bureau */
  A.addSpot('org-chart', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(74, 18, 52, 18, DESK, 3) + t(100, 31, 7.5, 'bureau chief', PAPER, 'middle', 700);
    s += stroke('M 100 36 v 12 M 44 48 h 112 M 44 48 v 10 M 100 48 v 10 M 156 48 v 10', RULE, 1.5);
    var cols = [[18, 'desk editor', INK2], [74, 'correspondent', FIELD], [130, 'picture editor', AMBER]];
    for (var i = 0; i < 3; i++) {
      s += r(cols[i][0], 58, 52, 16, cols[i][2], 3);
      s += t(cols[i][0] + 26, 70, 6.2, cols[i][1], PAPER, 'middle', 700);
    }
    s += stroke('M 100 74 v 12', RULE, 1.5);
    /* the widest label in the drawing: the box is sized to it, not to its
       siblings, or the text is clipped at the corners. */
    s += r(62, 86, 76, 16, '#3f8a79', 3)
      + t(100, 98, 6.2, 'reporter · stringer', PAPER, 'middle', 700);
    s += caption(100, 124, 'a bureau');
    return frame(s, SKY);
  });

  /* the fact-check grid: a claim never travels without its source */
  A.addSpot('fact-check', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 18, 172, 100, PAPER, 3) + boxO(14, 18, 172, 100, RULE, 1.3);
    s += r(14, 18, 172, 15, INK, 3);
    s += t(44, 29, 7, 'claim', PAPER, 'middle', 700) + t(108, 29, 7, 'source', PAPER, 'middle', 700)
       + t(162, 29, 7, 'stands?', PAPER, 'middle', 700);
    s += stroke('M 76 33 v 85 M 140 33 v 85', RULE, 1.2);
    var rows = [[48, GO, 'yes'], [76, GO, 'yes'], [104, STOP, 'no']];
    for (var i = 0; i < 3; i++) {
      s += stroke('M 20 ' + (rows[i][0] + 6) + ' h 50', GREY, 2.2);
      s += stroke('M 82 ' + (rows[i][0] + 6) + ' h 50', GREY, 2.2);
      s += c(162, rows[i][0] + 3, 6, rows[i][1]);
      s += t(162, rows[i][0] + 6, 7, i === 2 ? '✕' : '✓', PAPER, 'middle', 800);
    }
    s += caption(100, 132, 'one line per claim');
    return frame(s, SKY);
  });

  /* a recorder, running, with the level moving */
  A.addSpot('recorder', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(72, 20, 56, 100, INK, 8) + r(80, 30, 40, 26, '#0f2d38', 3);
    s += t(100, 47, 11, '12:04', '#49d19a', 'middle', 800);
    var h = [8, 16, 11, 20, 14, 7, 17, 10];
    for (var i = 0; i < 8; i++) s += r(82 + i * 5, 76 - h[i] / 2, 3, h[i], MAST2, 1);
    s += c(100, 98, 9, MAST) + c(100, 98, 4, PAPER);
    s += caption(100, 132, 'on the record');
    return frame(s, SKY);
  });

  /* two chairs, a notebook and the recorder between them */
  A.addSpot('interview-seats', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += person(54, 86, FIELD) + person(146, 86, DESK);
    s += r(36, 88, 36, 8, INK2, 2) + r(128, 88, 36, 8, INK2, 2);
    s += r(84, 74, 32, 24, NEWS2, 3) + boxO(84, 74, 32, 24, RULE, 1.2);
    s += r(94, 62, 12, 14, INK, 2) + c(100, 68, 3, MAST);
    s += notebook(40, 62);
    s += dash('M 70 64 h 20 M 110 64 h 20', RULE, 1.2, '3 2');
    s += caption(100, 126, 'the question, and the answer');
    return frame(s, SKY);
  });

  /* the podium, the seats, and whose turn it is to ask */
  A.addSpot('press-conference', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(78, 20, 44, 26, NEWS2, 2) + boxO(78, 20, 44, 26, RULE, 1.2);
    s += person(100, 20, DESK);
    s += stroke('M 100 30 v -8', INK2, 2) + c(100, 20, 2.5, INK);
    var i, j;
    for (i = 0; i < 3; i++) for (j = 0; j < 5; j++) {
      s += c(44 + j * 28, 74 + i * 18, 5.2, i === 0 && j === 2 ? MAST : INK2);
    }
    s += '<circle cx="100" cy="74" r="9.5" fill="none" stroke="' + MAST +
      '" stroke-width="1.8"/>';
    s += stroke('M 100 62 v -6', MAST, 2.2);
    s += caption(100, 132, 'the pool, and your turn');
    return frame(s, SKY);
  });

  /* the clock with the edition times on it */
  A.addSpot('deadline-clock', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += c(100, 68, 46, PAPER) + '<circle cx="100" cy="68" r="46" fill="none" stroke="' + RULE + '" stroke-width="2"/>';
    var i, a;
    for (i = 0; i < 12; i++) {
      a = i * Math.PI / 6;
      s += c(100 + Math.sin(a) * 38, 68 - Math.cos(a) * 38, 1.6, RULE);
    }
    s += p('M 100 68 L 100 38', null, ' stroke="' + INK + '" stroke-width="3.4" stroke-linecap="round"');
    s += p('M 100 68 L 126 80', null, ' stroke="' + MAST + '" stroke-width="3" stroke-linecap="round"');
    s += c(100, 68, 3.4, INK);
    s += p('M 100 68 L 100 22 A 46 46 0 0 1 132 35 Z', MAST2, ' fill-opacity="0.22"');
    s += t(150, 28, 7, 'first edition', MAST, 'middle', 700);
    s += caption(100, 130, 'the deadline');
    return frame(s, SKY);
  });

  /* what the passive hides: the actor, removed */
  A.addSpot('attribution', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 22, 172, 36, PAPER, 3) + boxO(14, 22, 172, 36, GO, 1.4);
    s += t(22, 38, 8.5, 'The police arrested the man.', INK, 'start', 700);
    s += t(22, 50, 7, 'you can see who acted', GO, 'start', 600);
    s += r(14, 70, 172, 36, PAPER, 3) + boxO(14, 70, 172, 36, STOP, 1.4);
    s += t(22, 86, 8.5, 'The man was arrested.', INK, 'start', 700);
    s += t(22, 98, 7, 'the actor is gone', STOP, 'start', 600);
    s += c(168, 40, 9, GO) + t(168, 43, 9, '✓', PAPER, 'middle', 800);
    s += c(168, 88, 9, AMBER) + t(168, 91, 9, '?', PAPER, 'middle', 800);
    s += caption(100, 128, 'who did it?');
    return frame(s, SKY);
  });

  /* the running order, with one item climbing */
  A.addSpot('running-order', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(16, 16, 168, 102, PAPER, 3) + boxO(16, 16, 168, 102, RULE, 1.3);
    var lab = ['1', '2', '3', '4', '5'], i;
    for (i = 0; i < 5; i++) {
      var y = 26 + i * 18;
      s += c(28, y + 6, 6.5, i === 2 ? MAST : INK2) + t(28, y + 9, 7.5, lab[i], PAPER, 'middle', 800);
      s += r(40, y, 118, 12, i === 2 ? '#fbe3e1' : NEWS2, 2);
      s += stroke('M 46 ' + (y + 6) + ' h ' + (i === 2 ? 70 : 92), i === 2 ? MAST2 : GREY, 2.2);
    }
    s += p('M 170 72 L 170 42 M 170 42 l -5 7 M 170 42 l 5 7', null,
      ' stroke="' + MAST + '" stroke-width="2.4" stroke-linecap="round"');
    s += caption(100, 132, 'the lead can move');
    return frame(s, SKY);
  });

  /* the field risk form, signed before anyone leaves */
  A.addSpot('risk-assessment', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(28, 14, 144, 108, PAPER, 3) + boxO(28, 14, 144, 108, RULE, 1.3);
    s += r(28, 14, 144, 15, FIELD, 3) + t(100, 25, 7.5, 'RISK ASSESSMENT', PAPER, 'middle', 800);
    var rows = ['route in and out', 'contact every hour', 'first aid kit', 'who to call'], i;
    for (i = 0; i < 4; i++) {
      var y = 38 + i * 17;
      s += r(38, y, 10, 10, PAPER, 2) + boxO(38, y, 10, 10, INK2, 1.2);
      s += stroke('M 40 ' + (y + 5) + ' l 3 3 l 5 -6', GO, 1.9);
      s += t(54, y + 8, 7.2, rows[i], INK, 'start', 600);
    }
    s += stroke('M 38 112 h 56', INK2, 1.3);
    s += t(100, 118, 6.6, 'signed', INK2, 'start', 600);
    return frame(s, SKY);
  });

  /* an embargo: the release exists, and the hour it may be used */
  A.addSpot('embargo', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(24, 18, 152, 102, PAPER, 3) + boxO(24, 18, 152, 102, RULE, 1.3);
    s += stroke('M 34 44 h 132 M 34 56 h 132 M 34 68 h 96', GREY, 2.2);
    s += r(34, 82, 132, 24, '#fdeceb', 2) + boxO(34, 82, 132, 24, STOP, 1.4);
    s += t(100, 97, 8, 'EMBARGOED UNTIL 09:00 GMT', STOP, 'middle', 800);
    s += r(34, 26, 60, 11, AMBER, 2) + t(64, 34, 7, 'news release', PAPER, 'middle', 700);
    s += caption(100, 132, 'not yet');
    return frame(s, SKY);
  });

  /* on the record, off the record */
  A.addSpot('quote-marks', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 24, 84, 72, PAPER, 4) + boxO(14, 24, 84, 72, GO, 1.5);
    s += quote(46, 64, 38, '“', GO) + quote(68, 64, 38, '”', GO);
    s += t(56, 76, 7.5, 'on the record', GO, 'middle', 700);
    s += t(56, 88, 6.6, 'you may quote and name', INK2, 'middle', 500);
    s += r(102, 24, 84, 72, PAPER, 4) + boxO(102, 24, 84, 72, INK2, 1.5);
    s += quote(134, 64, 38, '“', GREY) + quote(156, 64, 38, '”', GREY);
    s += dash('M 112 40 L 176 80', STOP, 2, '5 3');
    s += t(144, 76, 7.5, 'off the record', INK2, 'middle', 700);
    s += t(144, 88, 6.6, 'you may not', INK2, 'middle', 500);
    s += caption(100, 122, 'agree it before you ask');
    return frame(s, SKY);
  });

  /* the datelines this book travels to */
  A.addSpot('map-dateline', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(12, 30, 176, 76, '#dce8ec', 4) + boxO(12, 30, 176, 76, RULE, 1.2);
    var i;
    for (i = 1; i < 6; i++) s += dash('M ' + (12 + i * 29.3) + ' 30 v 76', RULE, 1, '3 4');
    for (i = 1; i < 3; i++) s += dash('M 12 ' + (30 + i * 25.3) + ' h 176', RULE, 1, '3 4');
    var pts = [[38, 70], [70, 48], [96, 82], [122, 56], [150, 90], [172, 62]];
    for (i = 0; i < pts.length; i++) {
      s += c(pts[i][0], pts[i][1], 4.6, MAST) + c(pts[i][0], pts[i][1], 1.8, PAPER);
    }
    s += t(100, 22, 8.5, 'where the story is', INK, 'middle', 800);
    s += caption(100, 124, 'one dateline a unit');
    return frame(s, SKY);
  });

  /* two sources, two figures, and the gap between them */
  A.addSpot('figure-check', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(16, 26, 76, 56, PAPER, 3) + boxO(16, 26, 76, 56, DESK, 1.4);
    s += t(54, 48, 7, 'the ministry', DESK, 'middle', 700);
    s += t(54, 68, 16, '40', INK, 'middle', 800);
    s += r(108, 26, 76, 56, PAPER, 3) + boxO(108, 26, 76, 56, FIELD, 1.4);
    s += t(146, 48, 7, 'the hospital', FIELD, 'middle', 700);
    s += t(146, 68, 16, '52', INK, 'middle', 800);
    s += dash('M 92 54 h 16', STOP, 2, '4 3');
    s += r(44, 94, 112, 20, '#fdf0cf', 3) + boxO(44, 94, 112, 20, AMBER, 1.3);
    s += t(100, 107, 7.5, 'say which figure, and whose', INK, 'middle', 700);
    return frame(s, SKY);
  });

  /* the parts of a pitch email, named */
  A.addSpot('email-parts', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(18, 16, 164, 106, PAPER, 3) + boxO(18, 16, 164, 106, RULE, 1.3);
    var rows = [['subject', 'Pitch — flood on the ring road', MAST],
                ['greeting', 'Dear Tomás,', INK2],
                ['opening', 'I am writing to pitch a story.', DESK],
                ['body', 'I cover transport. I am there now.', FIELD],
                ['sign-off', 'Best regards, Aisha', AMBER]], i;
    for (i = 0; i < 5; i++) {
      var y = 26 + i * 19;
      s += tag(24, y, 38, rows[i][0], rows[i][2]);
      s += t(68, y + 8, 6.8, rows[i][1], INK, 'start', 600);
      if (i < 4) s += stroke('M 24 ' + (y + 15) + ' h 150', GREY, 1);
    }
    return frame(s, SKY);
  });

})(window);
