/* ============================================================
   English for Auto Maintenance B1 — art-eam-u9.js

   UNIT 9'S OWN OBJECTS: a fault, and what is done about it.

   The distinction this unit lives on is the one between a SYMPTOM and a FAULT, and it is a
   distinction a drawing can carry better than a definition: a symptom is what the car DOES
   where the driver can see it — a noise, a wisp of smoke, a light on the dash — while the fault
   is the broken part itself, which is out of sight. So `symptom` is drawn from the driver's
   seat and `warning light` from behind the wheel, while `replace` and `reconditioned part` are
   drawn on the bench where the part is in the hand.

   `comeback` is the one word here that is an EVENT rather than a thing, and the drawing has to
   show the second arrival — the same car, the same fault, the U-turn — or it is just a car.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a', CHROME = '#aebac4',
      PAINT = '#1f6f8b', PAINT2 = '#2d8fae', GLASS = '#cfe6ef',
      OCHRE = '#c9892a', AMBER = '#e8b418', RED = '#b8432f', GREEN = '#2f7d4f',
      SKIN = '#e8c39a', WOOD = '#c8a97e', PAPER = '#fbf8f1', LINE = '#9aa7b1',
      FLOOR = '#b9c4cb', RUBBER = '#2b3238', SMOKE = '#aab4ba';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function dash(d, col, wd, pat) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-dasharray="' + (pat || '6 5') + '" stroke-linecap="round"');
  }
  function ring(cx, cy, rad, col, wd) {
    return c(cx, cy, rad, 'none').replace('fill="none"',
      'fill="none" stroke="' + col + '" stroke-width="' + (wd || 3) + '"');
  }
  function car(x, y, sc, body, flip) {
    var s = '<g transform="translate(' + x + ',' + y + ') scale(' + (flip ? -sc : sc) + ','
      + sc + ')">';
    s += p('M 6 34 q 6 -20 22 -22 h 34 q 16 2 26 22 h -82 Z', body || PAINT);
    s += r(0, 34, 94, 14, body || PAINT, 5);
    s += p('M 20 20 q 6 -12 16 -12 h 20 q 12 2 18 12 Z', GLASS);
    s += c(24, 50, 10, RUBBER) + c(24, 50, 4, CHROME);
    s += c(70, 50, 10, RUBBER) + c(70, 50, 4, CHROME);
    s += '</g>';
    return s;
  }

  /* ---- symptom: what the car DOES, where the driver notices it ---- */
  A.addSpot('symptom', function () {
    var s = '';
    s += r(0, 108, 200, 20, FLOOR, 3);
    s += car(22, 54, 1.08, PAINT);
    /* the smoke: the symptom itself, not the cause */
    s += c(118, 44, 10, SMOKE) + c(132, 32, 13, '#bcc5ca') + c(150, 22, 9, '#ccd4d8');
    s += c(108, 54, 7, '#9ea9b0');
    /* the noise, as the driver hears it */
    s += stroke('M 44 44 q -10 -10 -4 -22', STEEL2, 2.6);
    s += stroke('M 56 38 q -8 -14 0 -26', STEEL2, 2.6);
    s += stroke('M 68 36 q -4 -16 6 -26', STEEL2, 2.6);
    s += t(62, 18, 11, 'knock, knock', STEEL, 'middle', 700);
    /* nothing is open: the cause is NOT shown, which is the point */
    s += t(100, 136, 10, 'what the driver can see and hear', STEEL2, 'middle', 700);
    return frame(s, '#eef1f3');
  });

  /* ---- warning light: the dash from the driver's seat ---- */
  A.addSpot('warning light', function () {
    var s = '';
    s += r(10, 18, 180, 104, '#20282e', 12);
    s += r(18, 26, 164, 88, '#161d22', 9);
    /* two dials, dim */
    s += c(58, 68, 30, '#0e1419') + ring(58, 68, 30, '#3a464e', 2.4);
    s += stroke('M 58 68 l 16 -18', '#5d6a72', 3);
    s += c(142, 68, 30, '#0e1419') + ring(142, 68, 30, '#3a464e', 2.4);
    s += stroke('M 142 68 l -14 -20', '#5d6a72', 3);
    /* the one that is LIT: the engine-check outline, in amber */
    s += c(100, 60, 20, '#3a2f12');
    s += p('M 88 58 q 0 -10 8 -10 h 8 q 8 0 8 10 v 6 q 0 8 -8 8 h -8 q -8 0 -8 -8 Z', AMBER);
    s += r(96, 44, 8, 6, AMBER, 1) + r(84, 60, 6, 4, AMBER, 1) + r(110, 60, 6, 4, AMBER, 1);
    s += stroke('M 94 62 l 5 5 l 8 -9', '#3a2f12', 2.4);
    /* the glow */
    s += c(100, 60, 28, 'none').replace('fill="none"',
      'fill="none" stroke="' + AMBER + '" stroke-width="1.4" opacity="0.4"');
    s += t(100, 108, 10, 'on, and it stays on', '#c9a93a', 'middle', 700);
    return frame(s, '#e9edf0');
  });

  /* ---- replace: the old part out, the new part in, side by side ---- */
  A.addSpot('replace', function () {
    var s = '';
    s += r(0, 104, 200, 24, WOOD, 3) + r(0, 98, 200, 8, '#dcc39b', 3);
    /* the old one: cracked, dark */
    s += r(22, 40, 54, 58, '#6b5f52', 4) + r(28, 46, 42, 46, '#8a7c6b', 3);
    s += stroke('M 34 56 l 12 14 l -6 10 l 14 10', '#3f372e', 2.6);
    s += c(49, 30, 11, RED) + stroke('M 45 26 l 8 8 m 0 -8 l -8 8', PAPER, 2.4);
    /* the arrow: out, and in */
    s += stroke('M 86 68 h 26', PAINT2, 3.4) + p('M 116 68 l -9 -5 v 10 Z', PAINT2);
    /* the new one: clean, marked */
    s += r(124, 40, 54, 58, '#1d4e63', 4) + r(130, 46, 42, 46, '#cfe6ef', 3);
    s += stroke('M 138 58 h 26 M 138 70 h 26 M 138 82 h 18', PAINT, 2.6);
    s += c(151, 30, 11, GREEN) + stroke('M 146 30 l 4 4 l 7 -8', PAPER, 2.6);
    return frame(s, '#f2eee6');
  });

  /* ---- comeback: the SAME car arriving a SECOND time, with the same fault ---- */
  A.addSpot('comeback', function () {
    var s = '';
    s += r(0, 104, 200, 24, FLOOR, 3);
    /* the workshop door it is coming back through */
    s += r(0, 14, 56, 90, '#8e9aa3', 3) + r(6, 22, 44, 82, '#6f7d87', 3);
    for (var i = 0; i < 6; i++) { s += r(6, 24 + i * 13, 44, 9, '#7e8c96', 2); }
    /* the car, pointed back IN */
    s += car(146, 58, 1.0, PAINT, true);
    /* the U-turn: it went out and has come back */
    s += dash('M 92 34 q 48 -20 70 6 q 14 18 -8 26', OCHRE, 3, '7 6');
    s += p('M 152 68 l 10 -3 l -5 10 Z', OCHRE);
    s += t(120, 24, 11, 'again', OCHRE, 'middle', 800);
    /* the same fault, still there */
    s += c(78, 74, 13, RED) + t(78, 80, 15, '!', PAPER, 'middle', 800);
    s += t(100, 136, 10, 'the same fault, the second time', STEEL2, 'middle', 700);
    return frame(s, '#f1efeb');
  });

  /* ---- reconditioned part: an OLD part made good, which is neither new nor scrap ---- */
  A.addSpot('reconditioned part', function () {
    var s = '';
    s += r(0, 106, 200, 22, WOOD, 3) + r(0, 100, 200, 8, '#dcc39b', 3);
    /* one casing, half worn and half restored: the word is exactly this halfway state */
    s += p('M 44 34 h 112 q 12 0 12 12 v 42 q 0 12 -12 12 h -112 Z', '#8a7c6b');
    s += p('M 100 34 h 56 q 12 0 12 12 v 42 q 0 12 -12 12 h -56 Z', '#cfe6ef');
    s += stroke('M 100 34 v 66', STEEL, 2.4);
    /* the worn half */
    s += stroke('M 56 50 l 10 12 l -5 9', '#4a4238', 2.4);
    s += c(70, 82, 5, '#6b5f52');
    s += t(72, 124, 9, 'the old casing', '#5f5444', 'middle', 700);
    /* the restored half, with new seals and bolts */
    s += c(118, 52, 5, PAINT) + c(150, 52, 5, PAINT)
      + c(118, 82, 5, PAINT) + c(150, 82, 5, PAINT);
    s += r(112, 62, 44, 10, '#9ad0e4', 3);
    s += t(140, 124, 9, 'new inside', PAINT, 'middle', 700);
    /* the label that says what it is */
    s += '<g transform="translate(58,16) rotate(-5)">';
    s += r(0, 0, 84, 20, '#fdf4e2', 3).replace('fill="#fdf4e2"',
      'fill="#fdf4e2" stroke="' + OCHRE + '" stroke-width="2"');
    s += t(42, 14, 10, 'RECONDITIONED', '#8a5d12', 'middle', 800);
    s += '</g>';
    return frame(s, '#f2eee6');
  });

  /* ---- fault-find: the search itself — testing one thing at a time ---- */
  A.addSpot('fault-find', function () {
    var s = '';
    s += r(0, 112, 200, 16, FLOOR, 3);
    /* the branching tree: three candidates, two ruled out, one found */
    s += c(28, 64, 11, PAINT) + t(28, 69, 12, '?', PAPER, 'middle', 800);
    s += stroke('M 40 58 q 26 -18 44 -22', STEEL2, 2.4);
    s += stroke('M 40 64 h 44', STEEL2, 2.4);
    s += stroke('M 40 70 q 26 18 44 22', STEEL2, 2.4);
    function node(x, y, found) {
      var g = c(x, y, 14, found ? '#fdeae6' : '#eef1f3');
      g += c(x, y, 14, 'none').replace('fill="none"', 'fill="none" stroke="'
        + (found ? RED : LINE) + '" stroke-width="2.6"');
      if (found) { g += t(x, y + 6, 16, '!', RED, 'middle', 800); }
      else { g += stroke('M ' + (x - 5) + ' ' + (y - 5) + ' l 10 10 m 0 -10 l -10 10',
        LINE, 2.4); }
      return g;
    }
    s += node(98, 34, false) + node(98, 64, false) + node(98, 94, true);
    /* the meter in hand doing the testing */
    s += r(136, 42, 52, 60, '#27323a', 6) + r(142, 48, 40, 24, '#143039', 3);
    s += t(162, 66, 13, '0.0', '#49d6a0', 'middle', 800);
    s += c(152, 88, 5, AMBER) + c(172, 88, 5, RED);
    s += stroke('M 136 80 q -14 6 -24 12', '#3c4a54', 4);
    return frame(s, '#eef1f3');
  });

  /* ---- warranty repair: the work done, and nothing to pay for it ---- */
  A.addSpot('warranty repair', function () {
    var s = '';
    s += r(0, 110, 200, 18, FLOOR, 3);
    /* the work: a spanner on the part */
    s += c(58, 60, 34, '#dfe7eb') + c(58, 60, 26, CHROME) + c(58, 60, 10, STEEL);
    s += '<g transform="translate(58,60) rotate(-28)">';
    s += r(-6, -46, 12, 40, '#8e9aa3', 3);
    s += p('M -11 -52 h 22 l -4 10 h -14 Z', '#6f7d87');
    s += '</g>';
    /* the bill, at zero, stamped by the carmaker */
    s += r(108, 24, 78, 80, PAPER, 3) + r(108, 24, 78, 12, PAINT, 3);
    s += t(147, 34, 8, 'TO PAY', PAPER, 'middle', 800);
    for (var i = 0; i < 2; i++) { s += r(116, 44 + i * 10, 44, 3.2, LINE, 2); }
    s += stroke('M 116 66 h 62', '#cfd7dc', 2);
    s += t(147, 86, 20, '0', GREEN, 'middle', 800);
    s += '<g transform="translate(112,88) rotate(-9)">';
    s += r(0, 0, 70, 18, '#edf6f0', 3).replace('fill="#edf6f0"',
      'fill="#edf6f0" stroke="' + GREEN + '" stroke-width="2"');
    s += t(35, 13, 9, 'UNDER WARRANTY', '#245f3b', 'middle', 800);
    s += '</g>';
    return frame(s, '#eef2f4');
  });

  A.addSpot('warning-light', function () { return A.spot('warning light'); });
  A.addSpot('reconditioned-part', function () { return A.spot('reconditioned part'); });
  A.addSpot('reconditioned', function () { return A.spot('reconditioned part'); });
  A.addSpot('fault find', function () { return A.spot('fault-find'); });
  A.addSpot('faultfind', function () { return A.spot('fault-find'); });
  A.addSpot('warranty-repair', function () { return A.spot('warranty repair'); });
  A.addSpot('come back', function () { return A.spot('comeback'); });
}(window));
