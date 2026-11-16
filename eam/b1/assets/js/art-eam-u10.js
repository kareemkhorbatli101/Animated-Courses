/* ============================================================
   English for Auto Maintenance B1 — art-eam-u10.js

   UNIT 10'S OWN OBJECTS: the people the garage answers to.

   This is the hardest unit in the book to draw, because nine of its ten words are RELATIONS
   rather than objects: satisfaction, feedback, a recommendation, customer relations, training.
   A relation has two ends, and that is what makes it drawable — every figure here has two
   parties in it and something passing between them, and the word is the direction of travel:

     feedback          the customer speaks, the garage listens        customer -> garage
     recommend         the customer speaks to SOMEBODY ELSE           customer -> another person
     service reminder  the garage speaks first, before being asked    garage -> customer
     bulletin          the carmaker tells every garage at once        maker -> garage
     report            the team tells the manager what happened       team -> manager

   Drawn that way the five are not five labels in five boxes: they are five different arrows,
   and a learner can tell them apart with the names covered up.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a', CHROME = '#aebac4',
      PAINT = '#1f6f8b', PAINT2 = '#2d8fae', GLASS = '#cfe6ef',
      OCHRE = '#c9892a', AMBER = '#e8b418', RED = '#b8432f', GREEN = '#2f7d4f',
      SKIN = '#e8c39a', SKIN2 = '#d7b183', SKIN3 = '#c08a63',
      WOOD = '#c8a97e', WOOD2 = '#dcc39b', PAPER = '#fbf8f1', LINE = '#9aa7b1',
      FLOOR = '#b9c4cb', GOLD = '#b9912f';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function ring(cx, cy, rad, col, wd) {
    return c(cx, cy, rad, 'none').replace('fill="none"',
      'fill="none" stroke="' + col + '" stroke-width="' + (wd || 3) + '"');
  }
  function lines(x, y, wd, n, gap) {
    var s = '';
    for (var i = 0; i < n; i++) { s += r(x, y + i * (gap || 9), wd, 3.2, LINE, 2); }
    return s;
  }

  /* A HEAD AND SHOULDERS WITH A FACE ON IT. Every figure in this unit is a person, and a
     person drawn as a circle on a trapezium is a pictogram, not a character - the course's
     own rule. So the head carries eyes with a dark pupil inside the white, brows, and a
     mouth, and the shoulders carry a collar. `look` turns the eyes and the mouth: a listener
     looks towards the speaker, and a pleased customer's mouth curves up. */
  function person(x, y, sc, skin, shirt, look, mood) {
    var dir = look === 'left' ? -1 : (look === 'right' ? 1 : 0);
    var g = '<g transform="translate(' + x + ',' + y + ') scale(' + sc + ')">';
    /* shoulders and collar */
    g += p('M -30 54 q 4 -26 30 -26 q 26 0 30 26 Z', shirt);
    g += p('M -9 29 l 9 10 l 9 -10 l -5 -4 h -8 Z', '#f1eee8');
    /* neck */
    g += r(-6, 16, 12, 14, skin, 3);
    /* head */
    g += e(0, 0, 19, 23, skin);
    g += p('M -19 -4 q 2 -24 19 -24 q 17 0 19 24 q -6 -14 -19 -14 q -13 0 -19 14 Z',
      '#2b2320');
    /* the eyes: a white, then the ball inside it, then the light on the ball */
    g += e(-7.5, -2, 4.6, 3.4, '#fbf9f6') + e(7.5, -2, 4.6, 3.4, '#fbf9f6');
    g += c(-7.5 + dir * 1.6, -2, 2.3, '#3a2d24') + c(7.5 + dir * 1.6, -2, 2.3, '#3a2d24');
    g += c(-8.2 + dir * 1.6, -2.8, 0.8, '#fbf9f6') + c(6.8 + dir * 1.6, -2.8, 0.8, '#fbf9f6');
    /* the brows */
    g += stroke('M -12 -8 q 4 -3 9 -1', '#2b2320', 1.8);
    g += stroke('M 12 -8 q -4 -3 -9 -1', '#2b2320', 1.8);
    /* the nose and the mouth */
    g += stroke('M 0 0 v 5', '#c89a76', 1.6);
    if (mood === 'glad') { g += stroke('M -6 10 q 6 6 12 0', '#8d5a4a', 2); }
    else if (mood === 'speak') { g += e(0, 10, 4.4, 3.4, '#8d5a4a'); }
    else { g += stroke('M -5 10 h 10', '#8d5a4a', 2); }
    g += '</g>';
    return g;
  }

  function bubble(x, y, wd, h, fill, tail) {
    var s = r(x, y, wd, h, fill, 8);
    if (tail === 'left') { s += p('M ' + x + ' ' + (y + h - 8) + ' l -10 12 l 14 -4 Z', fill); }
    else { s += p('M ' + (x + wd) + ' ' + (y + h - 8) + ' l 10 12 l -14 -4 Z', fill); }
    return s;
  }

  function stars(x, y, n, lit) {
    var s = '';
    for (var i = 0; i < n; i++) {
      var cx = x + i * 17;
      s += p('M ' + cx + ' ' + (y - 8) + ' l 2.6 5.6 l 6.2 0.7 l -4.6 4.2 l 1.3 6 '
        + 'l -5.5 -3.1 l -5.5 3.1 l 1.3 -6 l -4.6 -4.2 l 6.2 -0.7 Z',
        i < lit ? GOLD : '#dfe3e6');
    }
    return s;
  }

  /* ---- customer relations: the two of them, across the counter, both listening ---- */
  A.addSpot('customer relations', function () {
    var s = '';
    s += r(0, 96, 200, 32, WOOD, 3) + r(0, 90, 200, 8, WOOD2, 3);
    s += person(52, 50, 1.0, SKIN2, '#b4531a', 'right', 'speak');
    s += person(148, 50, 1.0, SKIN, PAINT, 'left', 'glad');
    /* the handshake over the counter */
    s += p('M 74 96 q 14 -12 28 -4 q 10 4 2 10 q -14 6 -30 2 Z', SKIN2);
    s += p('M 126 96 q -14 -12 -28 -4 q -10 4 -2 10 q 14 6 30 2 Z', SKIN);
    s += stroke('M 92 24 q 8 -6 16 0', PAINT2, 2.4);
    s += stroke('M 86 16 q 14 -10 28 0', PAINT2, 2.4);
    return frame(s, '#f2eee6');
  });

  /* ---- satisfaction: the customer's own verdict, in stars ---- */
  A.addSpot('satisfaction', function () {
    var s = '';
    s += person(54, 56, 1.12, SKIN2, '#2f8f7e', 'right', 'glad');
    s += bubble(96, 30, 92, 50, '#e8f4f0', 'left');
    s += stars(108, 60, 5, 5);
    s += t(142, 74, 9, 'very happy', '#246f62', 'middle', 700);
    s += r(0, 112, 200, 16, FLOOR, 3);
    return frame(s, '#edf3f1');
  });

  /* ---- recommend: the customer telling SOMEBODY ELSE, which is the whole word ---- */
  A.addSpot('recommend', function () {
    var s = '';
    s += r(0, 110, 200, 18, FLOOR, 3);
    /* the garage, behind, being spoken about */
    s += p('M 4 62 h 44 v -14 l 12 -10 v 24 h 8 v 48 h -64 Z', '#9fadb6');
    s += r(12, 72, 12, 12, GLASS, 2) + r(30, 72, 12, 12, GLASS, 2);
    s += t(34, 104, 8, 'GARAGE', '#53616a', 'middle', 800);
    /* one customer telling another */
    s += person(104, 56, 1.0, SKIN2, '#b4531a', 'right', 'speak');
    s += person(170, 56, 0.92, SKIN3, '#4a5fb5', 'left', 'glad');
    /* the arrow pointing AT the other person, with the garage named in it */
    s += bubble(108, 10, 68, 26, '#fdf4e2', 'right');
    s += t(142, 27, 9, 'go to them', '#8a5d12', 'middle', 800);
    s += stroke('M 128 88 h 24', OCHRE, 3) + p('M 156 88 l -9 -5 v 10 Z', OCHRE);
    return frame(s, '#f1eeea');
  });

  /* ---- service reminder: the garage speaking FIRST, before being asked ---- */
  A.addSpot('service reminder', function () {
    var s = '';
    /* the phone, with the message on it */
    s += r(54, 10, 92, 120, '#27323a', 14);
    s += r(62, 22, 76, 96, '#eef4f7', 6);
    s += r(62, 22, 76, 16, PAINT, 6);
    s += t(100, 34, 8, 'YOUR GARAGE', PAPER, 'middle', 800);
    s += r(68, 46, 62, 34, '#d8ecf3', 5);
    s += t(99, 59, 9, 'Your service is', PAINT, 'middle', 700);
    s += t(99, 72, 9, 'due next week', PAINT, 'middle', 700);
    s += lines(68, 90, 44, 2, 9);
    /* the bell, which says it came unasked */
    s += c(150, 34, 17, AMBER);
    s += p('M 143 38 q -2 -14 7 -16 q 9 2 7 16 Z', '#6b5214');
    s += r(142, 38, 16, 3, '#6b5214', 1) + c(150, 44, 2.6, '#6b5214');
    s += t(100, 136, 9, 'we tell you first', STEEL2, 'middle', 700);
    return frame(s, '#eef2f4');
  });

  /* ---- manufacturer bulletin: ONE note from the carmaker to EVERY garage ---- */
  A.addSpot('manufacturer bulletin', function () {
    var s = '';
    /* the carmaker */
    s += p('M 8 66 h 48 v -20 l 13 -11 v 31 h 11 v 50 h -72 Z', STEEL);
    s += r(16, 78, 11, 11, AMBER, 2) + r(33, 78, 11, 11, AMBER, 2)
      + r(62, 78, 11, 11, AMBER, 2);
    s += t(44, 128, 8, 'the carmaker', '#41505a', 'middle', 700);
    /* the bulletin itself: a technical note, not a letter */
    s += r(104, 14, 84, 58, PAPER, 3) + r(104, 14, 84, 13, PAINT, 3);
    s += t(146, 24, 8, 'BULLETIN 41/26', PAPER, 'middle', 800);
    s += lines(112, 34, 50, 3, 9);
    s += stroke('M 168 36 l 3 3 l 6 -7', GREEN, 2.2);
    /* to every garage: three roofs */
    for (var i = 0; i < 3; i++) {
      var x = 108 + i * 30;
      s += p('M ' + x + ' 108 l 13 -13 l 13 13 Z', '#9fadb6');
      s += r(x + 4, 108, 18, 16, '#b3c0c8', 2);
    }
    s += stroke('M 128 76 v 14 M 146 76 v 14 M 164 76 v 14', PAINT2, 2.4);
    s += p('M 128 94 l -4 -8 h 8 Z', PAINT2) + p('M 146 94 l -4 -8 h 8 Z', PAINT2)
      + p('M 164 94 l -4 -8 h 8 Z', PAINT2);
    return frame(s, '#eef1f3');
  });

  /* ---- campaign: a plan with a date on it, run everywhere at once ---- */
  A.addSpot('campaign', function () {
    var s = '';
    s += r(18, 12, 164, 116, PAPER, 4);
    s += r(18, 12, 164, 20, '#b4531a', 4);
    s += t(100, 26, 10, 'WINTER CAMPAIGN', PAPER, 'middle', 800);
    /* the dated window it runs in */
    s += r(30, 42, 140, 22, '#fdf0e6', 3);
    s += t(100, 57, 10, '1 Nov  —  31 Dec', '#8a3f14', 'middle', 800);
    /* what is offered, three lines with a price off */
    var what = ['free battery check', 'coolant at half price', 'winter tyre fitting'];
    for (var i = 0; i < 3; i++) {
      var y = 74 + i * 16;
      s += c(40, y + 4, 5, OCHRE);
      s += t(52, y + 8, 9, what[i], STEEL, 'start', 700);
    }
    /* the loudhailer: it is announced, not waited for */
    s += '<g transform="translate(148,86) rotate(-14)">';
    s += p('M 0 0 h 10 l 18 -12 v 34 l -18 -12 h -10 Z', PAINT);
    s += stroke('M 32 2 q 7 8 0 16', PAINT2, 2.4);
    s += '</g>';
    return frame(s, '#f4efe9');
  });

  /* ---- feedback: the customer speaks, the garage WRITES IT DOWN ---- */
  A.addSpot('feedback', function () {
    var s = '';
    s += r(0, 100, 200, 28, WOOD, 3) + r(0, 94, 200, 8, WOOD2, 3);
    s += person(42, 54, 1.0, SKIN2, '#2f8f7e', 'right', 'speak');
    /* the words leaving the customer */
    s += bubble(78, 22, 54, 30, '#e8f4f0', 'left');
    s += stars(86, 44, 3, 3);
    /* the garage listening and writing — the arrow goes customer -> garage */
    s += person(166, 54, 0.92, SKIN, PAINT, 'left', null);
    s += stroke('M 108 78 h 28', '#2f8f7e', 3) + p('M 140 78 l -9 -5 v 10 Z', '#2f8f7e');
    s += r(124, 88, 40, 30, PAPER, 3) + lines(130, 96, 26, 3, 7);
    s += stroke('M 158 112 l 14 -14', OCHRE, 3.4);
    return frame(s, '#f2eee6');
  });

  /* ---- technical update: the new procedure replacing the old one ---- */
  A.addSpot('technical update', function () {
    var s = '';
    /* the old sheet, going */
    s += '<g transform="translate(16,30) rotate(-7)" opacity="0.55">';
    s += r(0, 0, 70, 84, '#ece7dc', 3) + r(0, 0, 70, 11, '#9fadb6', 3);
    s += t(35, 8, 7, 'ISSUE 1', '#f3f1ec', 'middle', 800);
    s += lines(8, 22, 44, 4, 10);
    s += '</g>';
    s += '<g transform="translate(20,56) rotate(-7)">';
    s += stroke('M 0 0 l 62 -28', RED, 2.6);
    s += '</g>';
    /* the new one, on top */
    s += r(96, 18, 86, 100, PAPER, 3) + r(96, 18, 86, 14, PAINT, 3);
    s += t(139, 29, 8, 'ISSUE 2 — NEW', PAPER, 'middle', 800);
    s += lines(106, 42, 56, 4, 11);
    s += r(106, 88, 46, 16, '#d8ecf3', 3);
    s += t(129, 100, 9, 'use this one', PAINT, 'middle', 800);
    /* the arrow, old -> new */
    s += stroke('M 82 72 h 8', STEEL2, 3) + p('M 94 72 l -9 -5 v 10 Z', STEEL2);
    return frame(s, '#eef2f4');
  });

  /* ---- training: somebody being taught, at the board, with the class watching ---- */
  A.addSpot('training', function () {
    var s = '';
    s += r(0, 112, 200, 16, FLOOR, 3);
    /* the board, with a real diagram on it, not squiggles */
    s += r(8, 10, 96, 76, '#2d4a3f', 4) + r(13, 15, 86, 66, '#35584b', 3);
    s += c(44, 46, 17, 'none').replace('fill="none"',
      'fill="none" stroke="#cfe6d8" stroke-width="2.4"');
    s += c(44, 46, 6, 'none').replace('fill="none"',
      'fill="none" stroke="#cfe6d8" stroke-width="2"');
    s += stroke('M 66 32 h 24 M 66 46 h 24 M 66 60 h 16', '#cfe6d8', 2.2);
    s += stroke('M 44 29 v -8 M 44 63 v 8', '#9fc9b6', 2);
    /* the trainer, pointing at it */
    s += person(126, 46, 0.95, SKIN, '#5c7a2e', 'left', 'speak');
    s += stroke('M 108 62 l -16 -10', SKIN, 5);
    /* two trainees, from behind, looking at the board */
    s += p('M 150 112 q 4 -26 20 -26 q 16 0 20 26 Z', '#3a6ea8');
    s += c(170, 80, 13, '#211c19');
    s += p('M 176 112 q 3 -22 17 -22 q 14 0 17 22 Z', '#c9a227');
    s += c(193, 86, 11, '#15110f');
    return frame(s, '#edf1f3');
  });

  /* ---- report: what happened, written up for somebody above you ---- */
  A.addSpot('report', function () {
    var s = '';
    s += r(26, 10, 148, 120, PAPER, 4);
    s += r(26, 10, 148, 18, PAINT, 4);
    s += t(100, 23, 9, 'SERVICE REPORT — WEEK 12', PAPER, 'middle', 800);
    /* a figure, because a report carries numbers */
    var h = [22, 34, 28, 40];
    for (var i = 0; i < 4; i++) {
      s += r(42 + i * 20, 86 - h[i], 13, h[i], i === 3 ? PAINT : PAINT2, 2);
    }
    s += stroke('M 38 86 h 86', STEEL, 2);
    s += stroke('M 38 86 v -52', STEEL, 2);
    /* the written half */
    s += lines(134, 40, 32, 4, 10);
    s += stroke('M 134 84 h 32', '#cfd7dc', 2);
    s += t(150, 100, 9, 'signed off', STEEL2, 'middle', 700);
    s += stroke('M 42 108 q 8 -10 14 -2 q 4 8 10 -4 q 6 -10 12 3', '#24405c', 2.4);
    return frame(s, '#eef2f4');
  });

  A.addSpot('customer-relations', function () { return A.spot('customer relations'); });
  A.addSpot('relations', function () { return A.spot('customer relations'); });
  A.addSpot('service-reminder', function () { return A.spot('service reminder'); });
  A.addSpot('reminder', function () { return A.spot('service reminder'); });
  A.addSpot('manufacturer-bulletin', function () { return A.spot('manufacturer bulletin'); });
  A.addSpot('bulletin', function () { return A.spot('manufacturer bulletin'); });
  A.addSpot('manufacturer', function () { return A.spot('manufacturer bulletin'); });
  A.addSpot('technical-update', function () { return A.spot('technical update'); });
  A.addSpot('update', function () { return A.spot('technical update'); });
  A.addSpot('satisfied', function () { return A.spot('satisfaction'); });
}(window));
