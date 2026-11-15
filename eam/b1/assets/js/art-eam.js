/* ============================================================
   English for Auto Maintenance B1 — art-eam.js

   This course's own drawings. The engine's art.js is a library about a classroom, an
   office and a SOC floor; not one of its 47 drawings is about a car, so every picture
   a learner needs here is new.

   Registered through A.addSpot / A.addFigure / A.addDiorama rather than by editing
   art.js, which stays a copy of the engine. art-eafm.js in the accounting course does
   the same and is the precedent: 30 drawings, no change to the library.

   THE RULE THESE FOLLOW. A word gets a drawing of the THING, in this course's own
   world, built from geometry. Never a letter in a circle, never a borrowed icon, never
   an emoji. A term whose picture would only be a label is drawn as the act it names
   instead (service = a car on a lift with a clipboard; honest = an invoice that matches
   the work). The drawing IS the prompt on a matching card, so it has to be identifiable
   without its name underneath - which is the whole reason a learner can do the exercise.

   WHY THE CAST IS DRAWN AND NOT WRITTEN. Unit 1's listening exercises match five people
   to what each is doing. They are the same five the acted videos use - Maher the
   manager, Nabil the mechanic, Rana at reception, Lina the diagnostic technician, Tarek
   the apprentice - so a learner meets one cast across the page and the video.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ---- this course's palette: a workshop, not an office ---- */
  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a',
      TYRE = '#2c3136', TREAD = '#44494f',
      PAINT = '#1f6f8b', PAINT2 = '#2d8fae', GLASS = '#cfe6ef',
      OIL = '#6b4a12', OCHRE = '#c9892a', AMBER = '#e8b418',
      RED = '#b8432f', GREEN = '#2f7d4f',
      SKIN = '#d9a97c', SKIN2 = '#b9853f', NAVY = '#223243',
      PAPER = '#fbf8f1', LINE = '#9aa7b1', FLOOR = '#b9c4cb';

  /* Reuse a spot inside a bigger drawing. A spot is a complete 200x140 <svg>, so it has to be
     unwrapped before it can be placed - the engine's own dioramas do exactly this. Drawing the
     same object twice is the defect art.js records against itself: the nine study-skill spots
     were drawn once in SPOT and once in the diorama, and when one set was improved the other
     kept the old pictures, so a learner met two different drawings of one word. */
  function inner(name) {
    return A.spot(name).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  }

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function ring(cx, cy, rr, col, wd) {
    return c(cx, cy, rr, 'none').replace('fill="none"',
      'fill="none" stroke="' + col + '" stroke-width="' + wd + '"');
  }

  /* ---------- shared pieces, so a car looks like the same car everywhere ---------- */

  /* A three-quarter saloon, 118 wide. Every car picture in the course is this shape, so
     "the bonnet" and "the boot" are recognisably parts of ONE object rather than two
     unrelated drawings. */
  function car(x, y, body) {
    var s = '';
    s += p('M ' + x + ' ' + (y + 30) +
           ' l 16 -18 q 6 -7 16 -7 h 34 q 10 0 17 7 l 17 18 h 10 q 8 0 8 8 v 12 q 0 6 -7 6' +
           ' h -104 q -7 0 -7 -6 v -12 q 0 -8 8 -8 z', body || PAINT);
    s += p('M ' + (x + 20) + ' ' + (y + 28) + ' l 11 -14 q 4 -5 10 -5 h 28 q 7 0 11 5 l 12 14 z',
           GLASS);                                                      /* windows */
    s += stroke('M ' + (x + 57) + ' ' + (y + 9) + ' v 19', STEEL, 2);   /* door pillar */
    s += c(x + 26, y + 56, 10, TYRE) + c(x + 26, y + 56, 4, STEEL2);
    s += c(x + 92, y + 56, 10, TYRE) + c(x + 92, y + 56, 4, STEEL2);
    s += c(x + 10, y + 42, 3.4, AMBER);                                 /* headlamp */
    return s;
  }

  /* a person: head, shoulders, overalls. `kit` colours the overalls so the cast reads
     apart at a glance - the mechanic in workshop blue, reception in grey. */
  function person(cx, cy, kit, hair, beard) {
    var s = '';
    s += p('M ' + (cx - 23) + ' ' + (cy + 54) + ' q 0 -30 23 -34 q 23 4 23 34 z', kit);
    s += c(cx, cy, 16, SKIN);
    s += p('M ' + (cx - 16) + ' ' + (cy - 4) + ' q 2 -18 16 -18 q 14 0 16 18 q -6 -9 -16 -9' +
           ' q -10 0 -16 9 z', hair || INK);
    if (beard) {
      s += p('M ' + (cx - 11) + ' ' + (cy + 6) + ' q 11 12 22 0 q -3 11 -11 11 q -8 0 -11 -11 z',
             hair || INK);
    }
    s += c(cx - 6, cy + 1, 1.7, INK) + c(cx + 6, cy + 1, 1.7, INK);
    return s;
  }

  function clipboard(x, y, w, h) {
    var s = r(x, y, w, h, '#8d6e4a', 3) + r(x + 3, y + 6, w - 6, h - 9, PAPER, 2);
    s += r(x + w / 2 - 7, y - 3, 14, 7, STEEL, 2);
    for (var i = 0; i < 4; i++) {
      s += r(x + 8, y + 14 + i * 8, w - 22, 2.4, LINE, 1);
    }
    return s;
  }

  function lift(x, y, w) {
    var s = r(x, y, w, 7, STEEL, 2);
    s += r(x + 8, y + 7, 9, 26, STEEL2) + r(x + w - 17, y + 7, 9, 26, STEEL2);
    s += r(x - 4, y + 33, w + 8, 6, STEEL, 2);
    return s;
  }

  /* ============================================================
     PARTS OF A CAR — each one drawn in place on the car it belongs to, with the rest of
     the car faded. A bonnet drawn alone is an unidentifiable curved panel; a bonnet
     drawn as the lid at the front of a car is a bonnet.
     ============================================================ */
  function onCar(partBody, bg) {
    return frame('<g opacity="0.3">' + car(40, 44, STEEL2) + '</g>' + partBody, bg || '#e9f1f4');
  }

  A.addSpot('bonnet', function () {
    var s = onCar(p('M 56 74 l 11 -14 q 4 -5 10 -5 h -37 l -14 15 q -2 2 0 4 z', PAINT2));
    return s.replace('</svg>',
      stroke('M 40 60 q 24 -12 44 2', AMBER, 3) +
      stroke('M 62 52 v -14 M 62 38 l -5 5 M 62 38 l 5 -5', AMBER, 2.6) + '</svg>');
  });

  A.addSpot('boot', function () {
    var s = onCar(p('M 125 70 h 19 q 8 0 8 8 v 12 h -27 z', PAINT2) +
                  stroke('M 128 72 q 14 -10 26 0', AMBER, 3));
    return s.replace('</svg>', r(118, 96, 36, 14, OCHRE, 3) +
      r(124, 92, 24, 6, OCHRE, 2) + '</svg>');          /* a bag in the space at the back */
  });

  A.addSpot('windscreen', function () {
    return onCar(p('M 60 72 l 11 -14 q 4 -5 10 -5 h 14 l 7 19 z', '#eaf6fb') +
      stroke('M 60 72 l 11 -14 q 4 -5 10 -5 h 14 l 7 19 z', PAINT, 2.6) +
      stroke('M 64 90 l 26 -12', STEEL, 3));            /* a wiper across the glass */
  });

  A.addSpot('door', function () {
    return onCar(p('M 97 72 h 26 v 26 h -26 z', PAINT2) +
      stroke('M 97 72 v 26', PAINT, 2) +
      r(101, 82, 11, 3.4, AMBER, 1.7) +                 /* the handle */
      stroke('M 118 78 h 2', STEEL, 2));
  });

  A.addSpot('wheel', function () {
    var s = c(100, 74, 34, TYRE) + c(100, 74, 25, TREAD) + c(100, 74, 16, STEEL2);
    s += c(100, 74, 5, STEEL);
    for (var i = 0; i < 5; i++) {
      var a = i * 72 * Math.PI / 180;
      s += c(100 + 10.5 * Math.sin(a), 74 - 10.5 * Math.cos(a), 2.3, STEEL);
    }
    for (var j = 0; j < 16; j++) {
      var b = j * 22.5 * Math.PI / 180;
      s += stroke('M ' + (100 + 27 * Math.sin(b)).toFixed(1) + ' ' +
                  (74 - 27 * Math.cos(b)).toFixed(1) + ' l ' +
                  (5 * Math.sin(b)).toFixed(1) + ' ' + (-5 * Math.cos(b)).toFixed(1),
                  '#1b1e21', 2.4);
    }
    s += stroke('M 30 112 h 140', FLOOR, 5);            /* the road it touches */
    return frame(s, '#eef2f4');
  });

  A.addSpot('tyre', function () {
    var s = c(100, 70, 36, TYRE) + c(100, 70, 20, '#e7edf0');
    for (var j = 0; j < 20; j++) {
      var b = j * 18 * Math.PI / 180;
      s += stroke('M ' + (100 + 22 * Math.sin(b)).toFixed(1) + ' ' +
                  (70 - 22 * Math.cos(b)).toFixed(1) + ' l ' +
                  (13 * Math.sin(b)).toFixed(1) + ' ' + (-13 * Math.cos(b)).toFixed(1),
                  '#15181b', 3.2);
    }
    s += stroke('M 26 118 h 148', FLOOR, 6);
    return frame(s, '#eef2f4');
  });

  /* ============================================================
     UNDER THE BONNET
     ============================================================ */
  A.addSpot('engine', function () {
    var s = r(52, 54, 96, 56, STEEL, 5);                          /* block */
    s += r(60, 42, 80, 14, STEEL2, 3);                            /* head */
    for (var i = 0; i < 4; i++) {
      s += r(66 + i * 19, 30, 11, 14, '#8d9aa4', 2);              /* four cylinders */
      s += c(71.5 + i * 19, 28, 3.2, AMBER);
    }
    s += c(72, 92, 11, '#3f4e58') + ring(72, 92, 5, STEEL2, 3);   /* pulley */
    s += c(126, 86, 8, '#3f4e58');
    s += stroke('M 83 92 q 22 -14 35 -6', '#2b343b', 4);          /* belt */
    s += r(46, 100, 108, 8, '#3f4e58', 3);
    return frame(s, '#e7eef1');
  });

  A.addSpot('battery', function () {
    var s = r(54, 48, 92, 62, '#20303c', 5) + r(54, 48, 92, 10, '#2f4654', 5);
    s += r(66, 38, 18, 12, STEEL2, 2) + r(116, 38, 18, 12, '#8d3b2a', 2);
    s += t(75, 34, 13, '+', PAPER, 'middle', 800) + t(125, 34, 13, '−', PAPER, 'middle', 800);
    s += r(64, 68, 72, 30, '#2a3d4a', 3);
    s += stroke('M 82 92 l 10 -16 h -8 l 10 -16', AMBER, 4);      /* a charge bolt */
    return frame(s, '#e6edf1');
  });

  A.addSpot('radiator', function () {
    var s = r(46, 36, 108, 72, STEEL2, 4) + r(52, 42, 96, 60, '#9fb2bd', 2);
    for (var i = 0; i < 11; i++) {
      s += r(55 + i * 8.6, 44, 3.4, 56, '#6c8491', 1);            /* the fins */
    }
    s += r(74, 26, 22, 12, STEEL, 3);                             /* filler neck */
    s += stroke('M 150 54 q 22 8 0 18', PAINT2, 5);               /* hose */
    s += stroke('M 100 112 q -8 10 0 18 q 8 -8 0 -18', PAINT2, 4);/* a drop of water */
    return frame(s, '#e6eff3');
  });

  A.addSpot('oil', function () {
    var s = p('M 70 44 h 46 q 6 0 6 6 v 48 q 0 8 -8 8 h -42 q -8 0 -8 -8 v -48 q 0 -6 6 -6 z',
              '#2f3a22');
    s += r(80, 34, 26, 12, '#44522c', 3) + r(72, 56, 42, 22, OCHRE, 2);
    s += t(93, 72, 12, 'OIL', '#2f3a22', 'middle', 800);
    s += p('M 136 70 q 10 14 0 22 q -10 -8 0 -22', OIL);          /* a falling drop */
    return frame(s, '#eeefe6');
  });

  A.addSpot('brakes', function () {
    var s = c(92, 70, 34, '#9fb2bd') + c(92, 70, 14, STEEL);      /* disc */
    s += p('M 112 44 q 20 0 20 26 q 0 26 -20 26 q 10 -26 0 -52 z', RED);  /* caliper */
    s += stroke('M 132 58 h 22', STEEL2, 4);
    s += stroke('M 58 104 l -14 12', '#1b1e21', 4);
    return frame(s, '#eceff1');
  });

  /* ============================================================
     THE DEPARTMENT: its places and its paper
     ============================================================ */
  A.addSpot('job-card', function () {
    var s = clipboard(56, 24, 88, 96);
    s += t(100, 46, 12, 'JOB CARD', NAVY, 'middle', 800);
    s += r(66, 52, 56, 2.6, LINE, 1);
    s += stroke('M 70 66 l 5 5 l 9 -11', GREEN, 3);
    s += stroke('M 70 82 l 5 5 l 9 -11', GREEN, 3);
    s += r(90, 62, 30, 2.6, LINE, 1) + r(90, 78, 34, 2.6, LINE, 1) + r(70, 96, 54, 2.6, LINE, 1);
    return frame(s, '#f2f0e8');
  });

  A.addSpot('service-bay', function () {
    var s = r(0, 96, 200, 44, FLOOR);
    s += stroke('M 26 96 v -62 M 174 96 v -62 M 26 34 h 148', STEEL2, 4);   /* the bay frame */
    s += lift(62, 84, 76);
    s += '<g>' + car(46, 30, PAINT) + '</g>';
    s += t(100, 24, 12, 'bay 2', STEEL, 'middle', 700);
    return frame(s, '#e9eef1');
  });

  A.addSpot('workshop', function () {
    var s = r(0, 92, 200, 48, FLOOR);
    s += p('M 12 92 v -54 l 88 -26 l 88 26 v 54 z', '#dfe8ed');     /* the shed */
    s += stroke('M 12 38 l 88 -26 l 88 26', STEEL, 4);
    s += r(34, 58, 40, 34, '#c3d2da', 3) + r(126, 58, 40, 34, '#c3d2da', 3);
    s += lift(40, 82, 46);
    s += '<g opacity="0.95">' + car(30, 34, PAINT2) + '</g>';
    s += person(146, 64, '#2f5f86');
    s += r(118, 78, 10, 30, STEEL2, 2);                             /* a tool board */
    return frame(s, '#eaf0f3');
  });

  A.addSpot('reception', function () {
    var s = r(0, 100, 200, 40, FLOOR);
    s += r(30, 72, 140, 28, '#c8a97e', 4) + r(30, 68, 140, 6, '#dcc39b', 3);
    s += person(64, 44, '#4a5a68');
    s += clipboard(104, 48, 34, 36);
    s += r(146, 54, 24, 16, '#2a3b48', 2) + r(149, 57, 18, 10, GLASS, 1);  /* a screen */
    return frame(s, '#eef1f3');
  });

  A.addSpot('parts-store', function () {
    var s = r(0, 104, 200, 36, FLOOR);
    s += r(22, 24, 156, 80, '#d6ad7a', 3);
    s += stroke('M 22 50 h 156 M 22 76 h 156 M 100 24 v 80', '#a9814f', 3);
    s += c(52, 37, 9, TYRE) + c(52, 37, 4, STEEL2);
    s += r(120, 30, 34, 14, '#2f3a22', 2);
    s += r(40, 58, 22, 14, '#20303c', 2) + c(140, 64, 10, '#9fb2bd');
    s += r(36, 84, 30, 14, OCHRE, 2) + r(118, 84, 40, 14, STEEL2, 2);
    return frame(s, '#f1ece3');
  });

  A.addSpot('garage', function () {
    var s = r(0, 100, 200, 40, FLOOR);
    s += p('M 16 100 v -46 h 168 v 46 z', '#dde6eb');
    s += p('M 8 54 l 92 -30 l 92 30 z', STEEL);
    s += r(40, 62, 50, 38, '#9fb2bd', 3) + r(110, 62, 50, 38, '#c3d2da', 3);
    s += stroke('M 40 72 h 50 M 40 82 h 50 M 40 92 h 50', '#7d8f9b', 2.4);   /* roller door */
    s += '<g>' + car(104, 60, PAINT2) + '</g>';
    /* The sign is a marking ON the building, so it is sized like one. At 13 units on a
       200-unit canvas it was 6.5% of the width — and `.vis-art > svg` stretches a card visual
       to the full card, which turned it into a 47px shout above the reading text. A diorama's
       caption is 1.25% of its canvas; this is now about 4%. */
    s += t(100, 42, 9, 'CHAM MOTORS', PAPER, 'middle', 800);
    return frame(s, '#e8eef1');
  });

  A.addSpot('diagnostic-machine', function () {
    var s = r(54, 24, 92, 70, '#27323a', 5) + r(60, 30, 80, 44, '#143039', 3);
    s += stroke('M 66 60 l 10 -14 l 9 12 l 11 -22 l 10 18 l 12 -8 l 8 6', '#49d6a0', 3);
    s += t(100, 86, 11, 'fault found', '#49d6a0', 'middle', 700);
    s += r(86, 94, 28, 10, STEEL2, 2) + r(70, 104, 60, 7, STEEL, 3);
    s += stroke('M 146 56 q 30 10 16 34 q -8 12 -24 10', AMBER, 4);  /* lead to the car */
    s += c(138, 102, 5, AMBER);
    return frame(s, '#e7eef1');
  });

  A.addSpot('tools', function () {
    var s = r(26, 90, 148, 10, '#8d6e4a', 3);
    s += stroke('M 54 86 v -46', STEEL, 7) + c(54, 36, 10, STEEL2) + c(54, 36, 4, '#e9eef1');
    s += p('M 92 86 v -40 l -7 -8 h 14 l -7 8', STEEL2);               /* screwdriver */
    s += r(88, 46, 8, 40, OCHRE, 2);
    s += p('M 126 86 v -34 q -10 -6 0 -14 q 10 8 0 14 z', STEEL);      /* spanner */
    s += stroke('M 148 86 v -36', STEEL, 6) + p('M 142 50 h 14 l -7 -12 z', STEEL2);
    return frame(s, '#eef1f2');
  });

  /* Drawn as two LENSES with a bridge and arms. The first version used four quadratic curves
     meeting at a point and rendered as a bowtie - a shape nobody would read as eye protection.
     Checked against the rendered picture, not against the path data. */
  A.addSpot('safety-glasses', function () {
    var s = r(40, 50, 50, 30, GLASS, 13) + r(110, 50, 50, 30, GLASS, 13);
    s += stroke('M 40 50 h 50 q 4 0 4 6 v 18 q 0 6 -6 6 h -44 q -6 0 -6 -6 v -18 q 0 -6 2 -6 z',
                NAVY, 3.4);
    s += stroke('M 160 50 h -50 q -4 0 -4 6 v 18 q 0 6 6 6 h 44 q 6 0 6 -6 v -18 q 0 -6 -2 -6 z',
                NAVY, 3.4);
    s += stroke('M 90 60 q 10 -7 20 0', NAVY, 4);                 /* the bridge */
    s += stroke('M 40 56 l -20 -9 M 160 56 l 20 -9', NAVY, 4);    /* the arms */
    s += t(100, 108, 12, 'always, in the workshop', RED, 'middle', 700);
    return frame(s, '#eaf2f6');
  });

  /* ============================================================
     THE CAST — the five people of Cham Motors, the same five the videos act
     ============================================================ */
  /* NO CAPTION UNDER A PERSON. Unit 1 matches these five to what each one is doing now, so a
     line reading "the mechanic, in the workshop" under Nabil's picture is most of the answer.
     The job is told by the prop in their hand and the colour of their overalls, which is what
     the learner is meant to read. The fourth argument is kept as a note to whoever edits this
     next, and is deliberately not drawn. */
  function cast(name, kit, hair, beard, prop, note) {
    A.addSpot(name, function () {
      var s = r(0, 112, 200, 28, FLOOR);
      s += person(100, 52, kit, hair, beard);
      if (prop) { s += prop(); }
      return frame(s, '#edf1f4');
    });
    return note;
  }
  cast('maher', NAVY, '#2b2b2b', true, function () {
    return clipboard(132, 58, 34, 38);
  }, 'the manager, in the office');
  cast('nabil', '#2f5f86', '#1f1f1f', true, function () {
    return stroke('M 136 78 v -26', STEEL, 6) + c(136, 50, 8, STEEL2);
  }, 'the mechanic, in the workshop');
  cast('rana', '#4a5a68', '#3a2a20', false, function () {
    return r(128, 62, 24, 16, '#2a3b48', 2) + r(131, 65, 18, 10, GLASS, 1);
  }, 'the service advisor, at reception');
  cast('lina', '#3c6e63', '#241a16', false, function () {
    return r(126, 58, 32, 24, '#27323a', 3) +
      stroke('M 132 72 l 7 -9 l 6 7 l 8 -12', '#49d6a0', 2.4);
  }, 'the diagnostic technician');
  cast('tarek', '#7a6a4f', '#20201c', false, function () {
    return stroke('M 132 70 q 14 -6 22 2', AMBER, 3);
  }, 'the apprentice, learning');

  /* the ROLES, drawn as the job rather than the person, for cards that ask what a job is */
  A.addSpot('mechanic', function () {
    var s = r(0, 108, 200, 32, FLOOR);
    s += lift(56, 84, 80) + '<g opacity="0.9">' + car(42, 26, PAINT) + '</g>';
    s += person(152, 58, '#2f5f86', '#1f1f1f', true);
    s += stroke('M 132 82 v -22', STEEL, 5);
    return frame(s, '#e9eef1');
  });

  A.addSpot('service-advisor', function () {
    var s = r(0, 104, 200, 36, FLOOR);
    s += r(24, 76, 152, 28, '#c8a97e', 4);
    s += person(58, 46, '#4a5a68');
    s += person(146, 50, '#8a6e52', '#2f2a26', true);
    s += clipboard(94, 50, 30, 34);
    return frame(s, '#eef1f3');
  });

  A.addSpot('manager', function () {
    var s = r(0, 106, 200, 34, FLOOR);
    s += r(28, 80, 144, 26, '#9a7b55', 3);
    s += person(100, 50, NAVY, '#2b2b2b', true);
    s += clipboard(36, 58, 28, 32) + clipboard(136, 58, 28, 32);
    return frame(s, '#f0eee9');
  });

  A.addSpot('technician', function () {
    var s = r(0, 108, 200, 32, FLOOR);
    s += person(68, 54, '#3c6e63', '#241a16');
    s += r(118, 44, 56, 42, '#27323a', 4) + r(124, 50, 44, 24, '#143039', 2);
    s += stroke('M 128 64 l 9 -11 l 7 8 l 10 -14', '#49d6a0', 2.6);
    s += stroke('M 118 86 q -16 10 -28 2', AMBER, 3.4);
    return frame(s, '#e8eef1');
  });

  A.addSpot('customer', function () {
    var s = r(0, 106, 200, 34, FLOOR);
    s += person(60, 52, '#8a6e52', '#2f2a26', true);
    s += '<g opacity="0.95">' + car(96, 58, PAINT2) + '</g>';
    s += r(44, 72, 16, 10, OCHRE, 2);                     /* keys in the hand */
    return frame(s, '#edf1f4');
  });

  A.addSpot('apprentice', function () {
    var s = r(0, 108, 200, 32, FLOOR);
    s += person(74, 54, '#7a6a4f', '#20201c');
    s += person(132, 50, '#2f5f86', '#1f1f1f', true);
    s += stroke('M 112 72 q 10 -10 20 -4', AMBER, 3);
    return frame(s, '#eaeff2');
  });

  /* ============================================================
     THE WORK ITSELF — words whose picture has to be an action
     ============================================================ */
  A.addSpot('service', function () {
    var s = r(0, 104, 200, 36, FLOOR);
    s += lift(50, 80, 86) + '<g>' + car(36, 22, PAINT) + '</g>';
    s += person(158, 56, '#2f5f86', '#1f1f1f', true);
    s += clipboard(14, 48, 26, 32);
    s += stroke('M 92 86 v 12', OIL, 4) + p('M 88 98 q 4 10 8 0 z', OIL);
    return frame(s, '#e9eef1');
  });

  A.addSpot('repair', function () {
    var s = p('M 36 56 h 54 v 28 h -54 z', STEEL2);
    s += stroke('M 62 44 v 52', RED, 4);                           /* the break */
    s += stroke('M 58 44 l 8 10 l -8 10 l 8 10 l -8 10 l 8 10', RED, 3);
    s += p('M 110 56 h 54 v 28 h -54 z', STEEL2);
    s += stroke('M 136 48 v 44', GREEN, 4);
    s += stroke('M 118 108 l 10 10 l 20 -24', GREEN, 5);           /* mended */
    s += t(62, 36, 11, 'broken', RED, 'middle', 700);
    s += t(136, 36, 11, 'fixed', GREEN, 'middle', 700);
    return frame(s, '#eef0f1');
  });

  A.addSpot('honest', function () {
    var s = clipboard(22, 26, 72, 86);
    s += t(58, 48, 11, 'the work done', NAVY, 'middle', 700);
    s += clipboard(110, 26, 72, 86);
    s += t(146, 48, 11, 'the bill', NAVY, 'middle', 700);
    s += stroke('M 34 62 h 44 M 34 76 h 44 M 34 90 h 30', LINE, 3);
    s += stroke('M 122 62 h 44 M 122 76 h 44 M 122 90 h 30', LINE, 3);
    s += stroke('M 96 76 h 8', GREEN, 4);
    return frame(s, '#eef3ef');
  });

  A.addSpot('safe', function () {
    var s = p('M 100 20 l 46 16 v 34 q 0 36 -46 50 q -46 -14 -46 -50 v -34 z', GREEN);
    s += stroke('M 80 72 l 13 14 l 28 -32', PAPER, 7);
    return frame(s, '#ecf3ee');
  });

  /* ============================================================
     FIGURES — a figure explains, a spot names. These carry the grammar.
     ============================================================ */
  /* A FIGURE IS DRAWN ON A BIG CANVAS, A SPOT ON A SMALL ONE, and the difference is not
     decoration. A card shows a figure at up to 1080px wide. Drawn on the spots' 200-unit
     canvas, a 12-unit letter becomes 65px on screen and the words cover the picture - which
     is exactly what the first version of `service-flow` did. At 600 units the same text is a
     reasonable 22px, and the engine's own dioramas use 1200 for the same reason. */
  A.addFigure('tense-two-clocks', function () {
    var s = r(10, 10, 580, 280, PAPER, 14);
    s += t(170, 56, 22, 'every day', NAVY, 'middle', 800);
    s += t(430, 56, 22, 'right now', OCHRE, 'middle', 800);
    s += ring(170, 150, 58, NAVY, 7) + stroke('M 170 150 v -36 M 170 150 l 26 18', NAVY, 7);
    s += ring(430, 150, 58, OCHRE, 7) + stroke('M 430 150 v -36 M 430 150 l 30 6', OCHRE, 7);
    s += stroke('M 110 222 h 120 M 110 236 h 120 M 110 250 h 120', NAVY, 5);
    s += stroke('M 370 236 h 120', OCHRE, 8);
    s += t(170, 278, 19, 'he services cars', NAVY, 'middle', 700);
    s += t(430, 278, 19, 'he is servicing', OCHRE, 'middle', 700);
    return D.svgFit('0 0 600 300', s);
  });

  A.addFigure('verb-s-rule', function () {
    var s = r(10, 10, 580, 280, PAPER, 14);
    s += t(300, 62, 24, 'he / she / it  +  -s', NAVY, 'middle', 800);
    s += t(180, 136, 23, 'change', RED, 'middle', 700);
    s += stroke('M 110 130 h 140', RED, 4);
    s += t(420, 136, 23, 'changes', GREEN, 'middle', 800);
    s += t(180, 206, 23, 'I checking', RED, 'middle', 700);
    s += stroke('M 100 200 h 160', RED, 4);
    s += t(420, 206, 23, 'I am checking', GREEN, 'middle', 800);
    s += t(300, 266, 18, 'the two mistakes to watch for', STEEL, 'middle', 600);
    return D.svgFit('0 0 600 300', s);
  });

  /* The three areas, left to right, in the order the car passes through them.
     THE FIRST VERSION PUT A WHOLE CAR IN THE MIDDLE PANEL. `car()` is 118 wide and the panel is
     56, so it covered the other two and the labels underneath. Each panel now holds one small
     emblem drawn to its own size. */
  /* The three areas, left to right, in the order a car passes through them. Each emblem is
     drawn to the panel it sits in - a reused `person()` is sized for the 200-unit canvas and
     filled the first version's middle panel with one enormous head. */
  A.addFigure('service-flow', function () {
    var s = '';
    var cols = [[20, 'reception'], [220, 'workshop'], [420, 'parts store']];
    for (var i = 0; i < 3; i++) {
      s += r(cols[i][0], 46, 160, 170, '#dfe8ed', 12);
      s += t(cols[i][0] + 80, 80, 21, cols[i][1], NAVY, 'middle', 700);
    }
    /* reception: an advisor behind a counter */
    s += c(100, 130, 22, SKIN) + p('M 68 190 q 0 -38 32 -42 q 32 4 32 42 z', '#4a5a68');
    s += r(40, 186, 120, 16, '#c8a97e', 3);
    /* workshop: a car on a lift */
    s += r(258, 140, 84, 26, PAINT, 6) + p('M 272 140 l 10 -16 h 40 l 10 16 z', GLASS);
    s += c(276, 172, 11, TYRE) + c(324, 172, 11, TYRE);
    s += r(252, 188, 96, 9, STEEL, 3) + r(268, 197, 10, 14, STEEL2) + r(322, 197, 10, 14, STEEL2);
    /* parts store: a loaded shelf */
    s += r(448, 118, 104, 84, '#d6ad7a', 5);
    s += stroke('M 448 146 h 104 M 448 174 h 104', '#a9814f', 5);
    s += c(472, 132, 11, TYRE) + r(498, 124, 40, 16, STEEL2, 2);
    s += r(458, 152, 34, 18, '#20303c', 2) + c(522, 161, 11, '#9fb2bd');
    s += r(462, 180, 30, 16, OCHRE, 2) + r(506, 180, 38, 16, STEEL2, 2);
    /* the arrows between them */
    s += stroke('M 184 130 h 26 M 384 130 h 26', OCHRE, 9);
    s += p('M 206 120 l 16 10 l -16 10 z', OCHRE) + p('M 406 120 l 16 10 l -16 10 z', OCHRE);
    s += t(300, 248, 22, 'the car moves this way', STEEL, 'middle', 700);
    s += t(300, 278, 18, 'job card first, then the work', STEEL, 'middle', 600);
    return D.svgFit('0 0 600 300', s);
  });

  A.addFigure('first-day', function () {
    var s = r(10, 10, 580, 280, PAPER, 14);
    var steps = ['welcome the new worker', 'introduce the team', 'show the workshop',
                 'give the safety rules', 'give the first small task'];
    for (var i = 0; i < steps.length; i++) {
      var y = 62 + i * 46;
      s += c(70, y, 20, i === 0 ? GREEN : STEEL2) +
        t(70, y + 8, 22, String(i + 1), PAPER, 'middle', 800);
      s += t(104, y + 8, 23, steps[i], NAVY, 'start', i === 0 ? 800 : 600);
      if (i < steps.length - 1) { s += stroke('M 70 ' + (y + 22) + ' v 10', STEEL2, 5); }
    }
    s += t(300, 290, 17, 'step 1 is done for you', STEEL, 'middle', 600);
    return D.svgFit('0 0 600 300', s);
  });

  /* ============================================================
     DIORAMAS — the situation a discussion or a role play happens in
     ============================================================ */
  /* A DIORAMA IS A ROOM, NOT A GRID OF SPOTS. The first version dropped the `tools` spot in at
     0.7 scale and it read as a white card floating in mid-air, because a spot carries its own
     frame and background. A spot is reused inside a bigger drawing only through `inner()`, which
     strips that frame - and here the tools are better drawn flat on a board against the wall. */
  A.addDiorama('workshop-floor', function () {
    var s = r(0, 0, 400, 260, '#dbe5ea');
    s += r(0, 176, 400, 84, FLOOR) + stroke('M 0 176 h 400', '#93a3ad', 3);
    s += r(24, 30, 76, 58, '#c3d2da', 4) + r(300, 30, 76, 58, '#c3d2da', 4);
    s += r(150, 26, 104, 62, '#8d6e4a', 4);                       /* the tool board */
    s += stroke('M 164 46 v 28 M 186 44 v 30 M 208 48 v 26 M 230 44 v 30', STEEL, 5);
    s += c(164, 42, 6, STEEL2) + p('M 224 44 h 12 l -6 -10 z', STEEL2);
    s += '<g transform="translate(26,86) scale(1.5)">' + lift(14, 42, 84) + '</g>';
    s += '<g transform="translate(30,70) scale(1.5)">' + car(8, 18, PAINT) + '</g>';
    s += '<g transform="translate(238,92) scale(1.45)">'
      + person(30, 36, '#2f5f86', '#1f1f1f', true) + '</g>';
    s += '<g transform="translate(300,100) scale(1.35)">'
      + person(30, 36, '#7a6a4f', '#20201c') + '</g>';
    s += t(200, 250, 15, 'the workshop floor at Cham Motors', STEEL, 'middle', 700);
    return D.svgFit('0 0 400 260', s);
  });

  /* THE TEN GLOSSARY WORDS, AS ONE PICTURE. The reinforcement deck speaks a word and the
     learner points at it, so the ten drawings have to be in one image with known positions.
     They are the SAME ten spots used everywhere else in the unit, reused through `inner()`
     rather than redrawn — art.js records against itself what happens when a set of pictures
     is drawn twice and only one copy is later improved.

     Five columns by two rows. The cell centres are at 10/30/50/70/90% across and 27/77% down,
     which is what the deck's hotspots are positioned on. */
  var GLOSS_TEN = ['engine', 'battery', 'radiator', 'bonnet', 'boot',
                   'service-bay', 'job-card', 'mechanic', 'service', 'workshop'];
  A.addDiorama('glossary-ten', function () {
    var s = r(0, 0, 1200, 560, '#eef3f6', 16);
    for (var i = 0; i < GLOSS_TEN.length; i++) {
      var col = i % 5, row = (i / 5) | 0;
      var cx = 120 + col * 240, cy = 150 + row * 280;
      s += e(cx, cy, 108, 84, row ? '#e2ecef' : '#e7eef1');
      s += '<g transform="translate(' + (cx - 150) + ',' + (cy - 105) + ') scale(1.5)">'
        + inner(GLOSS_TEN[i]) + '</g>';
    }
    return D.svgFit('0 0 1200 560', s);
  });

  A.addDiorama('reception-desk', function () {
    var s = r(0, 0, 400, 260, '#e3eaee');
    s += r(0, 186, 400, 74, FLOOR);
    s += r(56, 126, 288, 60, '#c8a97e', 6) + r(56, 118, 288, 12, '#dcc39b', 4);
    s += r(30, 28, 90, 56, '#cfdbe2', 4) + r(286, 28, 84, 56, '#cfdbe2', 4);
    s += '<g transform="translate(86,42) scale(1.5)">' + person(40, 40, '#4a5a68') + '</g>';
    s += '<g transform="translate(238,48) scale(1.5)">'
      + person(40, 40, '#8a6e52', '#2f2a26', true) + '</g>';
    s += '<g transform="translate(172,124) scale(1.2)">' + clipboard(0, 0, 50, 46) + '</g>';
    s += t(200, 250, 15, 'reception, first thing in the morning', STEEL, 'middle', 700);
    return D.svgFit('0 0 400 260', s);
  });

})(window);
