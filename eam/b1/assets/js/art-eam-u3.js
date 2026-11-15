/* ============================================================
   English for Auto Maintenance B1 — art-eam-u3.js

   UNIT 3'S OWN OBJECTS: the tools and the safety gear.

   Of this unit's ten words art-eam.js could draw two, and even those by proxy — `tools` is the
   wall board, not a spanner. A matching card whose prompt is the English word is not a matching
   card, so each tool is drawn as itself, at the size and shape that tells it apart from the one
   next to it: a torque wrench is a spanner WITH A SCALE AND A HANDLE, and that difference is
   the exercise.

   The safety gear is drawn as worn-or-used rather than as an object on a shelf, because the
   unit's grammar is the imperative and its subject is what you do before you start.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a', CHROME = '#aebac4',
      PAINT = '#1f6f8b', GLASS = '#cfe6ef', AMBER = '#e8b418', OCHRE = '#c9892a',
      RED = '#b8432f', RED2 = '#8f2f20', GREEN = '#2f7d4f',
      RUBBER = '#2b3238', PAPER = '#fbf8f1', LINE = '#9aa7b1', FLOOR = '#b9c4cb';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }

  /* ---- spanner: the open jaw at one end, the ring at the other ---- */
  A.addSpot('spanner', function () {
    var s = '';
    s += stroke('M 58 86 L 140 54', CHROME, 15);                  /* the shaft */
    s += stroke('M 58 86 L 140 54', '#c8d2d9', 7);
    /* open jaw */
    s += p('M 46 104 l 20 -8 l 6 14 l -14 6 Z', CHROME);
    s += p('M 36 88 l 22 -9 l 5 12 l -22 9 Z', CHROME);
    s += p('M 40 95 l 16 -6 l 3 7 l -16 6 Z', '#e7edf1');          /* the gap itself */
    /* ring end */
    s += c(150, 48, 20, CHROME) + c(150, 48, 10, '#e7edf1');
    s += c(150, 48, 10, 'none')
      .replace('fill="none"', 'fill="none" stroke="#8d9aa4" stroke-width="2"');
    return frame(s, '#eef2f5');
  });

  /* ---- socket set: the case, open, with sockets of different sizes in it ---- */
  A.addSpot('socket set', function () {
    var s = '';
    s += r(26, 58, 148, 60, '#2f3a44', 8);                         /* the case */
    s += r(26, 58, 148, 12, '#3f4d59', 8);
    s += r(34, 74, 132, 36, '#1d262e', 5);                         /* the foam tray */
    var sz = [16, 14, 12, 11, 10, 9, 8];
    for (var i = 0; i < sz.length; i++) {
      var cx = 46 + i * 19;
      s += c(cx, 92, sz[i], CHROME) + c(cx, 92, sz[i] - 5, '#2b343c');  /* each socket */
    }
    s += r(26, 40, 148, 18, '#3f4d59', 6);                         /* the lid, open */
    s += r(92, 32, 16, 10, STEEL, 2);                              /* the catch */
    return frame(s, '#eaeef1');
  });

  /* ---- torque wrench: a spanner with a SCALE and a setting handle ---- */
  A.addSpot('torque wrench', function () {
    var s = '';
    s += r(30, 70, 112, 16, CHROME, 7);                            /* the beam */
    s += r(30, 70, 46, 16, '#39434c', 7);                          /* the grip */
    for (var i = 0; i < 9; i++) { s += stroke('M ' + (82 + i * 6) + ' 70 v 7', INK, 2); }
    s += r(78, 58, 34, 12, PAPER, 3);                              /* the scale window */
    s += t(95, 68, 11, '90 Nm', INK, 'middle', 800);
    s += c(152, 78, 20, CHROME) + c(152, 78, 10, '#2b343c');       /* the square drive head */
    s += stroke('M 44 94 q 14 12 30 10', AMBER, 4);                /* the click */
    return frame(s, '#eef2f5');
  });

  /* ---- trolley jack: the wheeled body, the arm, the saddle under the car ---- */
  A.addSpot('trolley jack', function () {
    var s = '';
    s += r(10, 106, 180, 10, FLOOR, 4);                            /* the floor */
    s += p('M 28 100 h 96 q 14 0 14 -12 v -10 h -110 Z', RED);     /* the body */
    s += r(24, 76, 114, 10, RED2, 4);
    s += c(40, 104, 10, '#2b3238') + c(132, 104, 10, '#2b3238');   /* castors */
    s += stroke('M 60 78 L 150 48', '#39434c', 10);                /* the lifting arm */
    s += r(136, 36, 30, 14, STEEL, 3);                             /* the saddle */
    s += r(132, 26, 38, 10, '#2f3a44', 3);                         /* the car sill on it */
    s += stroke('M 36 74 L 10 46', '#39434c', 8);                  /* the handle */
    s += c(10, 44, 7, RUBBER);
    return frame(s, '#edf1f4');
  });

  /* ---- axle stand: the tripod and the toothed post, pinned ---- */
  A.addSpot('axle stand', function () {
    var s = '';
    s += r(10, 110, 180, 8, FLOOR, 4);
    s += p('M 54 110 L 86 58 h 28 L 146 110 Z', STEEL);            /* the legs */
    s += p('M 70 110 L 92 72 h 16 L 130 110 Z', '#e9eef1');        /* the gap between them */
    s += r(90, 24, 20, 56, '#39434c', 3);                          /* the post */
    for (var i = 0; i < 5; i++) { s += stroke('M 90 ' + (34 + i * 10) + ' h -8', STEEL2, 4); }
    s += p('M 82 24 h 36 l -8 12 h -20 Z', CHROME);                /* the saddle */
    s += c(112, 62, 5, AMBER);                                     /* the locking pin */
    s += r(76, 14, 48, 10, '#2f3a44', 3);                          /* the car sitting on it */
    return frame(s, '#edf1f4');
  });

  /* ---- wheel chock: the wedge against the tyre ---- */
  A.addSpot('wheel chock', function () {
    var s = '';
    s += r(10, 110, 180, 8, FLOOR, 4);
    s += c(122, 70, 42, RUBBER) + c(122, 70, 20, '#5b646c') + c(122, 70, 9, '#2b3238');
    s += p('M 36 110 L 84 110 L 84 70 Z', AMBER);                  /* the chock */
    s += p('M 48 110 L 84 110 L 84 80 Z', '#c99a12');
    for (var i = 0; i < 3; i++) { s += stroke('M ' + (56 + i * 10) + ' 106 v -10', '#8f6d0c', 3); }
    s += stroke('M 92 40 q 16 -6 26 0', RED, 4);                   /* it will not roll */
    s += p('M 118 34 l 10 6 l -10 6 Z', RED);
    return frame(s, '#f2efe6');
  });

  /* ---- gloves: a pair, one cuff turned ---- */
  A.addSpot('gloves', function () {
    var s = '';
    function glove(x, y, col, col2) {
      var g = p('M ' + x + ' ' + y + ' h 40 q 10 0 10 10 v 34 q 0 10 -10 10 h -40 q -10 0 -10 -10 '
        + 'v -34 q 0 -10 10 -10 Z', col);
      g += r(x - 8, y + 50, 56, 12, col2, 3);                      /* the cuff */
      g += stroke('M ' + (x + 6) + ' ' + y + ' v -16', col, 9);    /* fingers */
      g += stroke('M ' + (x + 18) + ' ' + y + ' v -22', col, 9);
      g += stroke('M ' + (x + 30) + ' ' + y + ' v -18', col, 9);
      g += stroke('M ' + (x + 42) + ' ' + (y + 8) + ' q 12 -6 10 -18', col, 9);
      return g;
    }
    s += glove(26, 56, '#2f5f86', '#24496a');
    s += glove(104, 56, '#3570a0', '#2a5a80');
    return frame(s, '#eaf0f4');
  });

  /* ---- PPE: what you put on before you start, together ---- */
  A.addSpot('ppe', function () {
    var s = '';
    s += r(62, 52, 76, 58, '#e8a31e', 8);                          /* the hi-vis vest */
    s += r(62, 52, 76, 10, '#d1900f', 8);
    s += r(78, 62, 10, 48, PAPER) + r(112, 62, 10, 48, PAPER);     /* the reflective bands */
    s += p('M 62 52 q 38 -18 76 0 v 10 q -38 -16 -76 0 Z', '#d1900f');
    s += e(100, 30, 30, 14, GLASS);                                /* the safety glasses */
    s += stroke('M 70 30 h -14 M 130 30 h 14', '#39434c', 4);
    s += e(100, 30, 30, 14, 'none')
      .replace('fill="none"', 'fill="none" stroke="#39434c" stroke-width="4"');
    s += r(26, 86, 28, 24, '#2f5f86', 5);                          /* a glove at the side */
    s += r(148, 86, 28, 24, '#2f5f86', 5);
    return frame(s, '#f3efe3');
  });

  /* ---- fire extinguisher: the red bottle, gauge, hose, on its bracket ---- */
  A.addSpot('fire extinguisher', function () {
    var s = '';
    s += p('M 74 52 h 48 q 8 0 8 10 v 48 q 0 8 -8 8 h -48 q -8 0 -8 -8 v -48 q 0 -10 8 -10 Z', RED);
    s += r(66, 70, 64, 16, PAPER, 2);                              /* the label */
    s += t(98, 82, 11, 'CO2', RED2, 'middle', 800);
    s += r(88, 34, 20, 18, '#39434c', 3);                          /* the neck */
    s += p('M 82 34 h 32 l -6 -10 h -20 Z', STEEL);                /* the handle */
    s += c(126, 30, 11, CHROME) + c(126, 30, 7, PAPER);            /* the gauge */
    s += stroke('M 126 30 l 5 -5', RED2, 2);
    s += stroke('M 112 40 q 26 8 22 40 q -2 14 -16 16', '#2b3238', 6);   /* the hose */
    s += p('M 112 100 l 16 -6 v 12 Z', '#39434c');                 /* the horn */
    s += r(60, 60, 8, 48, STEEL2, 2);                              /* the wall bracket */
    return frame(s, '#f3eceb');
  });

  /* The hyphenated spellings a card may ask for. A spot that does not exist draws a dashed
     "no drawing for X" box, so both spellings point at the one drawing. */
  A.addSpot('socket-set', function () { return A.spot('socket set'); });
  A.addSpot('torque-wrench', function () { return A.spot('torque wrench'); });
  A.addSpot('trolley-jack', function () { return A.spot('trolley jack'); });
  A.addSpot('axle-stand', function () { return A.spot('axle stand'); });
  A.addSpot('wheel-chock', function () { return A.spot('wheel chock'); });
  A.addSpot('fire-extinguisher', function () { return A.spot('fire extinguisher'); });
  A.addSpot('PPE', function () { return A.spot('ppe'); });
}(window));
