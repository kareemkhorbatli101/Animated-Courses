/* ============================================================
   English for Auto Maintenance B1 — art-eam-u5.js

   UNIT 5'S OWN OBJECTS: the steps of the service process.

   Every word in this unit is a VERB — book in, inspect, diagnose, road-test, hand over — so
   none of them is a thing that can be photographed. Each is drawn as the moment it happens, in
   the place it happens: booking in is the job card being written at the counter, road-testing
   is the car on the road with the technician in it, handing over is the key going across the
   desk. The moment is identifiable without its name underneath, which is what a matching card
   needs.
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
      FLOOR = '#b9c4cb', RUBBER = '#2b3238';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }

  /* a small side-on car, used by three of these drawings */
  function car(x, y, sc, body) {
    var s = '<g transform="translate(' + x + ',' + y + ') scale(' + sc + ')">';
    s += p('M 6 34 q 6 -20 22 -22 h 34 q 16 2 26 22 h -82 Z', body || PAINT);
    s += r(0, 34, 94, 14, body || PAINT, 5);
    s += p('M 20 20 q 6 -12 16 -12 h 20 q 12 2 18 12 Z', GLASS);
    s += c(24, 50, 10, RUBBER) + c(24, 50, 4, CHROME);
    s += c(70, 50, 10, RUBBER) + c(70, 50, 4, CHROME);
    s += '</g>';
    return s;
  }

  /* ---- book in: the job card being written at the counter when the car arrives ---- */
  A.addSpot('book in', function () {
    var s = '';
    s += r(0, 96, 200, 24, WOOD, 3) + r(0, 90, 200, 8, '#dcc39b', 3);   /* the counter */
    s += r(52, 36, 70, 56, PAPER, 3);                                   /* the job card */
    s += r(52, 36, 70, 11, PAINT, 3);
    s += t(87, 45, 9, 'JOB CARD', PAPER, 'middle', 800);
    for (var i = 0; i < 4; i++) { s += r(60, 54 + i * 9, 54, 3.4, LINE, 2); }
    s += stroke('M 118 84 L 148 52', OCHRE, 5);                         /* the pen, writing */
    s += p('M 112 90 l 10 -8 l 4 5 l -11 7 Z', '#4a3a24');
    s += car(126, 20, 0.5, PAINT2);                                     /* the car that arrived */
    return frame(s, '#eef2f4');
  });

  /* ---- inspect: the walk round with a torch and a clipboard ---- */
  A.addSpot('inspect', function () {
    var s = '';
    s += r(0, 104, 200, 16, FLOOR, 3);
    s += car(18, 52, 0.95, PAINT);
    s += c(140, 46, 12, '#3c4a54') + p('M 150 40 l 26 -10 l 0 24 Z', '#ffe9a8');  /* the torch */
    s += r(134, 70, 30, 38, PAPER, 3) + r(134, 70, 30, 7, '#3c4a54', 3);
    for (var i = 0; i < 3; i++) {
      s += r(140, 82 + i * 8, 18, 3, LINE, 2);
      s += stroke('M 160 ' + (84 + i * 8) + ' l 3 3 l 5 -7', GREEN, 2.4);
    }
    return frame(s, '#edf1f4');
  });

  /* ---- diagnose: the machine plugged in, the fault found on the screen ---- */
  A.addSpot('diagnose', function () {
    var s = '';
    s += r(0, 106, 200, 14, FLOOR, 3);
    s += r(22, 34, 84, 68, '#27323a', 8) + r(30, 42, 68, 44, '#143039', 4);
    s += stroke('M 36 72 l 10 -14 l 9 11 l 11 -18 l 10 14 l 10 -6', '#49d6a0', 3);
    s += c(64, 94, 6, '#49d6a0');
    s += stroke('M 106 70 q 30 10 36 -16', '#3c4a54', 6);               /* the lead */
    s += r(140, 44, 16, 14, AMBER, 2);                                  /* the socket */
    s += car(118, 66, 0.55, PAINT2);
    s += c(96, 30, 11, RED) + t(96, 34, 13, '!', PAPER, 'middle', 800); /* the fault */
    return frame(s, '#e9eef0');
  });

  /* ---- road-test: the car ON THE ROAD, moving, with somebody in it ---- */
  A.addSpot('road-test', function () {
    var s = '';
    s += r(0, 98, 200, 22, '#5b646c', 2);
    for (var i = 0; i < 5; i++) { s += r(14 + i * 40, 107, 22, 4, PAPER, 2); }  /* the markings */
    s += car(56, 44, 1.05, PAINT);
    s += c(92, 54, 8, SKIN);                                            /* the driver */
    s += stroke('M 44 58 h -28 M 40 72 h -34 M 48 86 h -24', STEEL2, 4);/* speed lines */
    s += t(160, 40, 12, '40 km/h', STEEL, 'middle', 700);
    return frame(s, '#eef1f3');
  });

  /* ---- quality check: the last look, with the tick that lets it go ---- */
  A.addSpot('quality check', function () {
    var s = '';
    s += r(0, 104, 200, 16, FLOOR, 3);
    s += car(22, 50, 0.95, PAINT);
    s += c(146, 56, 34, '#e4f3e9') + c(146, 56, 34, 'none')
      .replace('fill="none"', 'fill="none" stroke="' + GREEN + '" stroke-width="5"');
    s += stroke('M 130 56 l 11 12 l 22 -26', GREEN, 7);
    s += r(120, 96, 52, 14, PAPER, 3) + t(146, 107, 10, 'PASSED', GREEN, 'middle', 800);
    return frame(s, '#ecf3ee');
  });

  /* ---- hand over: the key going across the desk to the customer ---- */
  A.addSpot('hand over', function () {
    var s = '';
    s += r(0, 92, 200, 28, WOOD, 3) + r(0, 86, 200, 8, '#dcc39b', 3);
    /* two hands, one giving and one taking */
    s += p('M 30 86 q 18 -16 40 -8 q 10 4 4 12 q -14 8 -44 4 Z', SKIN);
    s += p('M 170 86 q -18 -16 -40 -8 q -10 4 -4 12 q 14 8 44 4 Z', '#d7b183');
    s += r(92, 56, 16, 22, OCHRE, 3) + c(100, 50, 10, OCHRE) + c(100, 50, 4, '#f1eee8');
    s += r(96, 78, 8, 6, '#8f5f16');                                    /* the key */
    s += stroke('M 70 64 h 14 M 116 64 h 14', GREEN, 3);
    s += car(132, 18, 0.42, PAINT2);
    return frame(s, '#f2eee6');
  });

  /* ---- invoice: the bill that lists the work and what it costs ---- */
  A.addSpot('invoice', function () {
    var s = '';
    s += r(48, 20, 104, 102, PAPER, 4);
    s += r(48, 20, 104, 16, PAINT, 4);
    s += t(100, 32, 10, 'INVOICE', PAPER, 'middle', 800);
    for (var i = 0; i < 4; i++) {
      s += r(58, 46 + i * 13, 56, 4, LINE, 2);
      s += r(124, 46 + i * 13, 18, 4, STEEL2, 2);
    }
    s += stroke('M 58 100 h 84', '#3c4a54', 2.5);
    s += t(66, 114, 11, 'TOTAL', STEEL, 'start', 800);
    s += t(140, 114, 12, '45 000', INK, 'end', 800);
    s += p('M 148 18 l 16 -6 l -4 16 Z', '#e3e9ed');                    /* the torn corner */
    return frame(s, '#eef2f4');
  });

  A.addSpot('book-in', function () { return A.spot('book in'); });
  A.addSpot('bookin', function () { return A.spot('book in'); });
  A.addSpot('hand-over', function () { return A.spot('hand over'); });
  A.addSpot('handover', function () { return A.spot('hand over'); });
  A.addSpot('quality-check', function () { return A.spot('quality check'); });
  A.addSpot('road test', function () { return A.spot('road-test'); });
}(window));
