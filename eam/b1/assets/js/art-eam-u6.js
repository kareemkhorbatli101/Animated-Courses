/* ============================================================
   English for Auto Maintenance B1 — art-eam-u6.js

   UNIT 6'S OWN OBJECTS: a service, and the jobs inside it.

   Two kinds of word in this unit, and they need two kinds of drawing. The JOBS are things that
   happen to a part — an oil change is oil leaving the sump, a tyre rotation is four wheels
   moving round the car — so each is drawn as the part at the moment of the job, with the
   movement shown. The SCHEDULE words are not things at all: an interval is a distance between
   two services and mileage is a number on a dial, so those are drawn as the instrument or the
   chart that carries them, which is where a mechanic actually meets them.

   Every drawing fills the same 200x140 frame as the rest of the course and is identifiable
   without its name underneath, because a matching card shows the picture and asks for the word.
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
      FLOOR = '#b9c4cb', RUBBER = '#2b3238', OIL = '#4a3a1c', OIL2 = '#6b5526';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function dash(d, col, wd, pat) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-dasharray="' + (pat || '6 5') + '" stroke-linecap="round"');
  }

  /* a tyre seen face on, used by the rotation and the schedule chart */
  function tyre(cx, cy, rad) {
    return c(cx, cy, rad, RUBBER) + c(cx, cy, rad * 0.56, CHROME)
      + c(cx, cy, rad * 0.22, STEEL);
  }

  /* a plan view of a car, which is what a rotation diagram has to be */
  function carPlan(x, y, sc) {
    var s = '<g transform="translate(' + x + ',' + y + ') scale(' + sc + ')">';
    s += p('M 14 0 q 30 -10 60 0 l 6 18 v 70 l -6 18 q -30 10 -60 0 l -6 -18 v -70 Z', PAINT);
    s += p('M 22 16 h 44 l 4 16 h -52 Z', GLASS);
    s += p('M 18 76 h 52 l -4 14 h -44 Z', GLASS);
    s += '</g>';
    return s;
  }

  /* ---- oil change: the sump plug out, the old oil running into the tray ---- */
  A.addSpot('oil change', function () {
    var s = '';
    s += r(0, 112, 200, 14, FLOOR, 3);
    /* the sump, seen from below the engine */
    s += p('M 34 18 h 108 q 10 0 10 10 v 26 q 0 20 -22 20 h -84 q -22 0 -22 -20 v -26 '
      + 'q 0 -10 10 -10 Z', STEEL);
    s += r(40, 24, 96, 10, STEEL2, 3);
    s += r(80, 70, 18, 10, '#3d4b54', 2);                        /* the plug, out of its hole */
    /* the oil, falling */
    s += p('M 85 80 q -3 14 1 24 q 4 -10 1 -24 Z', OIL2);
    s += p('M 86 100 q -6 10 -2 14 q 8 2 10 -6 q -2 -8 -8 -8 Z', OIL);
    /* the drain tray, with old oil in it */
    s += p('M 48 112 h 108 l -8 -22 h -92 Z', '#3c4a54');
    s += p('M 60 108 h 84 l -4 -12 h -76 Z', OIL);
    s += e(102, 96, 38, 4, OIL2);
    /* the new filter and the fresh oil, waiting */
    s += r(160, 60, 26, 30, OCHRE, 3) + r(163, 63, 20, 20, '#f3e3c4', 2);
    s += r(166, 22, 22, 30, '#3f5a2f', 3) + r(172, 16, 10, 8, '#2f4522', 2);
    s += r(169, 34, 16, 9, '#f3e3c4', 1);
    return frame(s, '#eef2f4');
  });

  /* ---- brake pads: the pair of pads either side of the disc, one worn thin ---- */
  A.addSpot('brake pads', function () {
    var s = '';
    s += c(100, 68, 50, '#8e9aa3') + c(100, 68, 44, '#b7c2ca') + c(100, 68, 16, STEEL);
    for (var i = 0; i < 8; i++) {                                 /* the vent slots */
      var ang = i * Math.PI / 4;
      s += r(100 + Math.cos(ang) * 28 - 2.5, 68 + Math.sin(ang) * 28 - 7, 5, 14, '#93a0a9', 2);
    }
    /* the caliper, open, with a pad on each face */
    s += p('M 44 42 h 18 v 52 h -18 q -10 0 -10 -12 v -28 q 0 -12 10 -12 Z', PAINT);
    s += p('M 156 42 h -18 v 52 h 18 q 10 0 10 -12 v -28 q 0 -12 -10 -12 Z', PAINT);
    s += r(62, 46, 12, 44, '#3b2f28', 2) + r(64, 46, 8, 44, '#6d5a4c', 2);   /* a good pad */
    s += r(130, 46, 12, 44, '#3b2f28', 2) + r(132, 52, 4, 32, '#6d5a4c', 2); /* a worn pad */
    s += t(136, 122, 11, 'worn', RED, 'middle', 800);
    s += t(68, 122, 11, 'new', GREEN, 'middle', 800);
    s += stroke('M 68 108 v -12 M 136 108 v -12', LINE, 2);
    return frame(s, '#eceff2');
  });

  /* ---- tyre rotation: the four wheels of the car, moving round it ---- */
  A.addSpot('tyre rotation', function () {
    var s = '';
    s += carPlan(58, 14, 0.92);
    s += tyre(44, 40, 14) + tyre(156, 40, 14) + tyre(44, 104, 14) + tyre(156, 104, 14);
    /* the arrows that make it a rotation and not four tyres */
    s += dash('M 44 58 v 28', PAINT2, 3) + p('M 44 92 l -5 -9 h 10 Z', PAINT2);
    s += dash('M 156 86 v -28', PAINT2, 3) + p('M 156 52 l -5 9 h 10 Z', PAINT2);
    s += dash('M 58 112 h 84', OCHRE, 3) + p('M 148 112 l -9 -5 v 10 Z', OCHRE);
    s += dash('M 142 32 h -84', OCHRE, 3) + p('M 52 32 l 9 -5 v 10 Z', OCHRE);
    return frame(s, '#edf1f4');
  });

  /* ---- spark plugs: three of them, and the spark across the gap ---- */
  A.addSpot('spark plugs', function () {
    var s = '';
    function plug(x, y, sparking) {
      var g = '';
      g += r(x - 9, y, 18, 26, CHROME, 2);                        /* the terminal */
      g += p('M ' + (x - 13) + ' ' + (y + 26) + ' h 26 l -4 14 h -18 Z', '#d8d2c4'); /* ceramic */
      g += r(x - 15, y + 40, 30, 16, '#e8e2d4', 2);
      g += r(x - 11, y + 56, 22, 22, STEEL2, 2);                  /* the thread */
      for (var i = 0; i < 4; i++) { g += r(x - 11, y + 59 + i * 5, 22, 2, '#5f727e'); }
      g += r(x - 2, y + 78, 4, 14, CHROME);                       /* the centre electrode */
      g += p('M ' + (x - 11) + ' ' + (y + 78) + ' h 6 v 18 h 8', 'none')
        .replace('fill="none"', 'fill="none" stroke="' + STEEL + '" stroke-width="3.5"');
      if (sparking) {
        g += stroke('M ' + (x - 1) + ' ' + (y + 92) + ' l -5 2 l 4 3 l -6 3', AMBER, 2.6);
        g += c(x + 2, y + 95, 3.4, '#fff3c4');
      }
      return g;
    }
    s += plug(50, 18, false) + plug(100, 18, true) + plug(150, 18, false);
    s += r(0, 120, 200, 10, FLOOR, 3);
    return frame(s, '#eef1f3');
  });

  /* ---- service schedule: the plan of when each job falls due ---- */
  A.addSpot('service schedule', function () {
    var s = '';
    s += r(26, 12, 148, 114, PAPER, 4);
    s += r(26, 12, 148, 18, PAINT, 4);
    s += t(100, 25, 10, 'SERVICE SCHEDULE', PAPER, 'middle', 800);
    var km = ['10', '20', '30', '40'];
    for (var i = 0; i < 4; i++) {
      var y = 42 + i * 21;
      s += r(34, y, 50, 12, '#e7ecef', 2);
      s += t(38, y + 10, 10, km[i] + ' 000 km', STEEL, 'start', 700);
      /* which jobs fall at that distance: more as the car gets older */
      for (var j = 0; j <= i; j++) {
        s += c(96 + j * 15, y + 6, 5.2, j === 0 ? OCHRE : (j === 1 ? PAINT2 : GREEN));
      }
      s += stroke('M 34 ' + (y + 17) + ' h 132', '#dfe5e9', 1.4);
    }
    s += t(100, 10, 9, '', STEEL, 'middle', 700);
    return frame(s, '#eef2f4');
  });

  /* ---- interval: the DISTANCE BETWEEN two services, which is the whole word ---- */
  A.addSpot('interval', function () {
    var s = '';
    /* a road, with a service at each end and nothing in between */
    s += r(0, 72, 200, 26, '#5b646c', 2);
    for (var i = 0; i < 6; i++) { s += r(10 + i * 34, 83, 18, 4, PAPER, 2); }
    function marker(x, lab) {
      var g = stroke('M ' + x + ' 72 v -30', STEEL, 3);
      g += r(x - 15, 26, 30, 18, PAINT, 3);
      g += p('M ' + x + ' 44 l -5 -4 h 10 Z', PAINT);
      g += t(x, 39, 10, lab, PAPER, 'middle', 800);
      return g;
    }
    s += marker(36, 'SVC') + marker(164, 'SVC');
    /* the measured gap: the arrow is the word */
    s += stroke('M 44 112 h 112', OCHRE, 3);
    s += p('M 44 112 l 9 -5 v 10 Z', OCHRE) + p('M 156 112 l -9 -5 v 10 Z', OCHRE);
    s += r(72, 100, 56, 16, '#fdf4e2', 3);
    s += t(100, 112, 11, '10 000 km', '#8a5d12', 'middle', 800);
    return frame(s, '#eef1f3');
  });

  /* ---- mileage: the number on the dial, which is where a mechanic meets it ---- */
  A.addSpot('mileage', function () {
    var s = '';
    s += r(18, 16, 164, 100, '#20282e', 12);
    s += c(74, 64, 40, '#161d22') + c(74, 64, 36, '#0e1419');
    /* the speedometer sweep */
    for (var i = 0; i <= 8; i++) {
      var ang = (-220 + i * 25) * Math.PI / 180;
      s += r(74 + Math.cos(ang) * 30 - 1.5, 64 + Math.sin(ang) * 30 - 1.5, 3, 3, '#7f8d96', 1);
    }
    s += stroke('M 74 64 l 22 -16', RED, 3);
    s += c(74, 64, 5, CHROME);
    /* the odometer window: the number IS the word */
    s += r(112, 50, 62, 28, '#111a1f', 3);
    var dg = ['9', '4', '3', '2', '6'];
    for (var k = 0; k < 5; k++) {
      s += r(116 + k * 12, 54, 10, 20, '#e9f3f6', 2);
      s += t(121 + k * 12, 70, 14, dg[k], INK, 'middle', 800);
    }
    s += t(143, 92, 10, 'km', '#9fb0b8', 'middle', 700);
    return frame(s, '#e9edf0');
  });

  /* ---- coolant flush: the old coolant out, clean coolant in ---- */
  A.addSpot('coolant flush', function () {
    var s = '';
    s += r(0, 116, 200, 12, FLOOR, 3);
    /* the radiator */
    s += r(54, 16, 92, 76, '#8e9aa3', 4) + r(58, 20, 84, 68, '#6f7d87', 3);
    for (var i = 0; i < 9; i++) { s += r(60 + i * 9, 20, 4, 68, '#5a6872', 1); }
    s += r(50, 12, 100, 10, STEEL, 3) + r(92, 4, 22, 10, CHROME, 3);
    /* the dirty coolant leaving the bottom hose */
    s += stroke('M 60 92 q -16 10 -18 24', '#6f5a2a', 9);
    s += p('M 34 116 q -8 8 -2 12 q 10 2 12 -6 q -2 -8 -10 -6 Z', '#7a6630');
    /* the clean coolant going in at the top */
    s += stroke('M 103 4 q 26 -2 30 14', '#2f8fae', 7);
    s += r(150, 14, 30, 40, '#bfe2ee', 3) + r(150, 14, 30, 8, PAINT, 3);
    s += r(154, 26, 22, 24, '#4bb6d8', 2);
    s += t(165, 68, 10, 'new', PAINT, 'middle', 800);
    s += t(40, 136, 10, 'old', '#6f5a2a', 'middle', 800);
    return frame(s, '#eaf1f4');
  });

  /* ---- maintenance: the regular care, as the hand and the ticked plan together ---- */
  A.addSpot('maintenance', function () {
    var s = '';
    s += r(0, 112, 200, 16, FLOOR, 3);
    /* the bonnet up, somebody working under it */
    s += p('M 12 92 q 10 -40 54 -44 h 48 q 26 4 36 44 Z', PAINT);
    s += r(8, 92, 142, 16, PAINT2, 4);
    s += p('M 60 48 q 30 -34 62 -24 l -6 12 q -26 -8 -46 18 Z', '#8fb6c6');  /* the open bonnet */
    s += c(92, 66, 9, SKIN) + stroke('M 92 66 l 20 10', SKIN, 7);            /* hand reaching in */
    s += stroke('M 112 76 l 12 6', CHROME, 5);                               /* the spanner */
    /* the plan beside it, three jobs ticked */
    s += r(146, 24, 48, 70, PAPER, 3) + r(146, 24, 48, 10, STEEL, 3);
    for (var i = 0; i < 4; i++) {
      var y = 42 + i * 14;
      s += r(152, y, 8, 8, i < 3 ? '#e3f0e7' : '#f1eee8', 2);
      if (i < 3) { s += stroke('M 153 ' + (y + 4) + ' l 3 3 l 5 -6', GREEN, 2.4); }
      s += r(164, y + 2, 24, 3.4, LINE, 2);
    }
    return frame(s, '#edf1f3');
  });

  /* The generator reads these names out of this file, so each alias is written in full
     rather than built in a loop. A dragmatch target gets a picture only if its exact
     label resolves, and the book writes these words both ways. */
  A.addSpot('oil-change', function () { return A.spot('oil change'); });
  A.addSpot('brake-pads', function () { return A.spot('brake pads'); });
  A.addSpot('brake pad', function () { return A.spot('brake pads'); });
  A.addSpot('pads', function () { return A.spot('brake pads'); });
  A.addSpot('tyre-rotation', function () { return A.spot('tyre rotation'); });
  A.addSpot('tire rotation', function () { return A.spot('tyre rotation'); });
  A.addSpot('spark-plugs', function () { return A.spot('spark plugs'); });
  A.addSpot('spark plug', function () { return A.spot('spark plugs'); });
  A.addSpot('service-schedule', function () { return A.spot('service schedule'); });
  A.addSpot('schedule', function () { return A.spot('service schedule'); });
  A.addSpot('coolant-flush', function () { return A.spot('coolant flush'); });
  A.addSpot('flush', function () { return A.spot('coolant flush'); });
}(window));
