/* ============================================================
   English for Auto Maintenance B1 — art-eam-u4.js

   UNIT 4'S OWN OBJECTS: measurement.

   This unit's words are the hardest to draw honestly, because most of them are not things.
   `tolerance` is not an object; `reading` is not an object; `worn` is an adjective. The rule
   art-eam.js sets is the one followed here: a term whose picture would only be a label is
   drawn as THE ACT IT NAMES or as the difference it describes. So tolerance is a scale with a
   green band and a needle inside it, reading is a display with a number on it, and worn is two
   tyres side by side — one with tread and one without. That difference IS the word, and it is
   what lets a learner match the picture without the English underneath it.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a', CHROME = '#aebac4',
      PAINT = '#1f6f8b', GLASS = '#cfe6ef', AMBER = '#e8b418',
      RED = '#b8432f', GREEN = '#2f7d4f', GREEN2 = '#a8ddb5',
      RUBBER = '#2b3238', TREAD = '#44494f', PAPER = '#fbf8f1', LINE = '#9aa7b1';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }

  /* a round dial with a needle at a given angle, in degrees from the left of the arc */
  function dial(cx, cy, rr, ang, face) {
    var s = c(cx, cy, rr, '#39434c') + c(cx, cy, rr - 5, face || PAPER);
    for (var i = 0; i <= 8; i++) {
      var a = Math.PI * (1 + i / 8);
      s += stroke('M ' + (cx + Math.cos(a) * (rr - 9)) + ' ' + (cy + Math.sin(a) * (rr - 9))
        + ' L ' + (cx + Math.cos(a) * (rr - 15)) + ' ' + (cy + Math.sin(a) * (rr - 15)),
        STEEL, 2);
    }
    var na = Math.PI * (1 + ang);
    s += stroke('M ' + cx + ' ' + cy + ' L ' + (cx + Math.cos(na) * (rr - 13)) + ' '
      + (cy + Math.sin(na) * (rr - 13)), RED, 3);
    s += c(cx, cy, 3.5, INK);
    return s;
  }

  /* ---- gauge: the dial itself, the tool that SHOWS a measurement ---- */
  A.addSpot('gauge', function () {
    var s = dial(100, 80, 44, 0.42);
    s += r(92, 118, 16, 14, STEEL, 2);
    s += t(100, 100, 12, 'bar', STEEL, 'middle', 700);
    return frame(s, '#eef2f5');
  });

  /* ---- tyre pressure: the gauge pressed onto the valve ---- */
  A.addSpot('tyre pressure', function () {
    var s = '';
    s += c(62, 76, 54, RUBBER) + c(62, 76, 30, '#5b646c') + c(62, 76, 13, '#2b3238');
    s += r(96, 68, 12, 16, CHROME, 2);                       /* the valve */
    s += r(108, 58, 58, 36, '#39434c', 6);                   /* the gauge body */
    s += r(114, 64, 46, 24, PAPER, 3);
    s += t(137, 82, 15, '2.2', INK, 'middle', 800);
    s += stroke('M 166 76 h 14', STEEL2, 5);
    return frame(s, '#edf1f4');
  });

  /* ---- tread depth: the depth gauge standing in a groove ---- */
  A.addSpot('tread depth', function () {
    var s = '';
    s += r(20, 84, 160, 34, RUBBER, 4);                      /* a block of tyre, cut through */
    for (var i = 0; i < 5; i++) {
      s += r(30 + i * 32, 84, 14, 22, '#171b1f', 2);         /* the grooves */
    }
    s += r(86, 30, 26, 56, CHROME, 4);                       /* the gauge body */
    s += stroke('M 99 86 v -30', '#39434c', 5);              /* the probe, down in the groove */
    s += r(90, 36, 18, 14, PAPER, 2);
    s += t(99, 47, 10, '6mm', INK, 'middle', 800);
    s += stroke('M 128 92 v 14 M 124 106 h 8', GREEN, 3);
    s += t(150, 110, 11, 'deep', GREEN, 'middle', 700);
    return frame(s, '#eceff1');
  });

  /* ---- voltage: the meter's probes on the battery posts ---- */
  A.addSpot('voltage', function () {
    var s = '';
    s += r(22, 66, 84, 50, '#20303c', 5) + r(22, 66, 84, 9, '#2f4654', 5);
    s += r(32, 56, 16, 11, CHROME, 2) + r(80, 56, 16, 11, '#8d3b2a', 2);
    s += r(118, 40, 62, 64, '#2f3a44', 6);                   /* the meter */
    s += r(126, 48, 46, 24, '#cfe9d6', 3);
    s += t(149, 66, 14, '12.1', INK, 'middle', 800);
    s += c(132, 88, 6, RED) + c(152, 88, 6, INK);
    s += stroke('M 118 70 q -14 -4 -22 -8', RED, 4);         /* the leads */
    s += stroke('M 118 86 q -22 2 -30 -22', INK, 4);
    s += t(149, 108, 10, 'VOLTS', STEEL2, 'middle', 700);
    return frame(s, '#eef2f4');
  });

  /* ---- temperature: the needle in the red, and the heat coming off ---- */
  A.addSpot('temperature', function () {
    var s = dial(76, 76, 40, 0.78, '#fdf2ea');
    s += p('M 76 36 a 40 40 0 0 1 36 22 l -12 6 a 27 27 0 0 0 -24 -15 Z', RED);
    s += t(76, 122, 11, 'HOT', RED, 'middle', 800);
    s += r(140, 44, 16, 58, '#e7eef2', 8);                   /* a thermometer beside it */
    s += r(140, 72, 16, 30, RED, 8) + c(148, 108, 13, RED);
    for (var i = 0; i < 5; i++) { s += stroke('M 156 ' + (52 + i * 11) + ' h 7', STEEL, 2); }
    return frame(s, '#f4efe9');
  });

  /* ---- tolerance: the allowed band, and a needle inside it ---- */
  A.addSpot('tolerance', function () {
    var s = '';
    s += r(20, 62, 160, 22, '#e3e9ed', 11);                  /* the scale */
    s += r(74, 62, 54, 22, GREEN2, 11);                      /* the band that is allowed */
    s += r(20, 62, 160, 22, 'none', 11)
      .replace('fill="none"', 'fill="none" stroke="' + STEEL2 + '" stroke-width="3"');
    s += stroke('M 101 54 v 38', INK, 4);                    /* the needle, inside it */
    s += p('M 101 44 l 7 10 h -14 Z', INK);
    s += stroke('M 74 92 v 10 M 128 92 v 10', GREEN, 3);
    s += t(74, 118, 11, '12.4', GREEN, 'middle', 700);
    s += t(128, 118, 11, '12.7', GREEN, 'middle', 700);
    s += t(101, 36, 11, 'within', GREEN, 'middle', 800);
    return frame(s, '#edf3ee');
  });

  /* ---- reading: the number the tool shows, on its display ---- */
  A.addSpot('reading', function () {
    var s = '';
    s += r(34, 40, 132, 68, '#2f3a44', 8);
    s += r(44, 50, 112, 38, '#cfe9d6', 4);
    s += t(100, 80, 26, '2.0', INK, 'middle', 800);
    s += t(140, 80, 12, 'mm', STEEL, 'middle', 700);
    s += c(58, 98, 5, RED) + c(76, 98, 5, AMBER) + c(94, 98, 5, GREEN);
    s += stroke('M 100 40 v -12', STEEL2, 4);
    return frame(s, '#eef2f4');
  });

  /* ---- worn: the same tyre with tread, and without. The DIFFERENCE is the word. ---- */
  A.addSpot('worn', function () {
    var s = '';
    s += c(58, 76, 42, RUBBER) + c(58, 76, 22, '#5b646c') + c(58, 76, 9, '#2b3238');
    for (var i = 0; i < 7; i++) {                            /* deep tread, left */
      var a = Math.PI * 2 * i / 7;
      s += stroke('M ' + (58 + Math.cos(a) * 42) + ' ' + (76 + Math.sin(a) * 42)
        + ' L ' + (58 + Math.cos(a) * 30) + ' ' + (76 + Math.sin(a) * 30), TREAD, 5);
    }
    s += c(142, 76, 42, '#3a4147') + c(142, 76, 22, '#5b646c') + c(142, 76, 9, '#2b3238');
    s += c(142, 76, 42, 'none')
      .replace('fill="none"', 'fill="none" stroke="#6a7278" stroke-width="2"');
    s += t(58, 130, 11, 'new', GREEN, 'middle', 800);
    s += t(142, 130, 11, 'worn', RED, 'middle', 800);
    return frame(s, '#eceff1');
  });

  /* ---- meter: the handheld instrument that takes the reading ---- */
  A.addSpot('meter', function () {
    var s = '';
    s += r(56, 26, 88, 100, '#2f3a44', 10);
    s += r(66, 36, 68, 30, '#cfe9d6', 4);
    s += t(100, 58, 17, '12.4', INK, 'middle', 800);
    s += c(100, 90, 20, '#49535c') + c(100, 90, 13, CHROME);
    s += stroke('M 100 90 l 9 -9', INK, 3);
    for (var i = 0; i < 8; i++) {
      var a = Math.PI * 2 * i / 8;
      s += c(100 + Math.cos(a) * 28, 90 + Math.sin(a) * 28, 2.4, STEEL2);
    }
    s += c(78, 120, 5, RED) + c(122, 120, 5, INK);
    return frame(s, '#eef2f4');
  });

  /* ---- millimetre: the smallest division on the rule ---- */
  A.addSpot('millimetre', function () {
    var s = '';
    s += r(16, 56, 168, 44, '#f3e6c4', 4);                   /* the rule */
    s += r(16, 56, 168, 6, '#dfc98f', 4);
    for (var i = 0; i <= 16; i++) {
      var x = 20 + i * 10;
      var big = i % 5 === 0;
      s += stroke('M ' + x + ' 62 v ' + (big ? 20 : 11), INK, big ? 2.6 : 1.6);
      if (big) { s += t(x, 94, 10, String(i), INK, 'middle', 700); }
    }
    s += stroke('M 70 112 h 10', RED, 3);
    s += stroke('M 70 108 v 8 M 80 108 v 8', RED, 3);
    s += t(122, 116, 11, 'one millimetre', RED, 'middle', 700);
    return frame(s, '#f6f1e4');
  });

  A.addSpot('tyre-pressure', function () { return A.spot('tyre pressure'); });
  A.addSpot('tread-depth', function () { return A.spot('tread depth'); });
}(window));
