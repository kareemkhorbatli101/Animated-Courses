/* ============================================================
   English for Auto Maintenance B1 — art-eam-u2.js

   UNIT 2'S OWN OBJECTS: the six words under the bonnet that art-eam.js had no drawing for.

   Unit 2 teaches ten words and the course could draw four of them. The other six were shown to
   the learner as their own English label, which is not a prompt — a matching card whose
   "picture" is the word spells out the answer. These six are the things themselves, built from
   geometry in this course's palette, so the drawing can be the prompt and the word can be the
   answer.

   THE RULE THEY FOLLOW is art-eam.js's own: the THING, in this course's world, never a letter
   in a circle and never a borrowed icon. A fluid is drawn as what holds it and what it does —
   coolant is the green liquid in the expansion tank with the cap off, not a generic bottle.

   Registered through A.addSpot, which overwrites by name, so nothing here edits a lifted file.
   tools/eam_shells.py adds the <script> tag only on units that have one of these files.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a',
      PAINT = '#1f6f8b', GLASS = '#cfe6ef',
      OIL = '#6b4a12', OCHRE = '#c9892a', AMBER = '#e8b418',
      RUBBER = '#2b3238', RUBBER2 = '#3d464e',
      COOL = '#39a05a', PAPER = '#fbf8f1', LINE = '#9aa7b1';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }

  /* ---- alternator: a cased motor on a bracket, with the pulley it is turned by ---- */
  A.addSpot('alternator', function () {
    var s = '';
    s += r(58, 44, 76, 56, STEEL, 9);                       /* the case */
    s += r(58, 52, 76, 8, STEEL2);                          /* the cooling band */
    for (var i = 0; i < 7; i++) { s += r(64 + i * 10, 64, 4, 28, '#41525d', 2); }  /* vents */
    s += c(144, 72, 18, '#3c4a54') + c(144, 72, 11, STEEL2) + c(144, 72, 4, INK);
    s += stroke('M 144 54 v -12', STEEL2, 4);               /* the belt runs off the pulley */
    s += r(40, 64, 20, 16, '#3c4a54', 3);                   /* the mounting bracket */
    s += stroke('M 70 40 l 8 -12 l 10 10', AMBER, 4);       /* it MAKES electricity */
    s += stroke('M 88 38 l 8 -12 l 10 10', AMBER, 4);
    return frame(s, '#e7edf1');
  });

  /* ---- belt: the rubber loop, on the two pulleys it turns ---- */
  A.addSpot('belt', function () {
    var s = '';
    s += c(68, 76, 26, '#45535e') + c(68, 76, 15, STEEL2) + c(68, 76, 5, INK);
    s += c(140, 56, 18, '#45535e') + c(140, 56, 10, STEEL2) + c(140, 56, 4, INK);
    /* the loop itself, drawn as a closed band around both */
    s += stroke('M 68 46 q 40 -10 72 -8 q 20 2 20 18 q 0 16 -20 18 q -40 4 -72 10', RUBBER, 9);
    s += stroke('M 42 76 a 26 26 0 0 0 26 26', RUBBER, 9);
    s += stroke('M 68 102 q 40 6 72 -4', RUBBER, 9);
    s += stroke('M 42 76 a 26 26 0 0 1 26 -30', RUBBER, 9);
    /* the ribs that make it a belt and not a rope */
    for (var i = 0; i < 6; i++) { s += stroke('M ' + (82 + i * 11) + ' 40 l -3 7', RUBBER2, 3); }
    return frame(s, '#eaf0f3');
  });

  /* ---- hose: the rubber pipe, with its clip, carrying a fluid ---- */
  A.addSpot('hose', function () {
    var s = '';
    s += stroke('M 26 48 q 44 6 56 32 q 12 26 54 26 q 24 0 38 -12', RUBBER, 16);
    s += stroke('M 26 48 q 44 6 56 32 q 12 26 54 26 q 24 0 38 -12', RUBBER2, 8);
    s += r(22, 38, 14, 20, STEEL, 3);                       /* the stub it pushes onto */
    s += r(40, 42, 9, 18, '#7d8d99', 2);                    /* the clip */
    s += r(160, 56, 14, 20, STEEL, 3);
    s += stroke('M 150 92 q -6 9 0 15 q 6 -6 0 -15', PAINT, 4);   /* a drop of what it carries */
    return frame(s, '#e9eff2');
  });

  /* ---- coolant: the expansion tank, cap off, green to the MAX line ---- */
  A.addSpot('coolant', function () {
    var s = '';
    s += r(62, 34, 76, 82, '#dde7ec', 8);                   /* the translucent tank */
    s += r(62, 70, 76, 46, COOL, 8);                        /* the liquid, to the line */
    s += r(62, 68, 76, 5, '#2f8a4c');                       /* the surface */
    s += r(62, 34, 76, 82, 'none', 8)
      .replace('fill="none"', 'fill="none" stroke="' + STEEL2 + '" stroke-width="4"');
    s += stroke('M 138 60 h 16', '#b8432f', 3) + t(166, 64, 11, 'MAX', '#b8432f', 'middle', 800);
    s += stroke('M 138 100 h 16', LINE, 3) + t(166, 104, 11, 'MIN', STEEL, 'middle', 800);
    s += r(84, 18, 32, 18, STEEL, 4);                       /* the cap, lifted off */
    s += stroke('M 100 36 v 6', STEEL2, 3);
    /* the heat it carries away */
    s += stroke('M 40 92 q 6 -10 0 -18 q -6 -8 0 -16', '#b8432f', 3);
    s += stroke('M 50 96 q 6 -10 0 -18', '#b8432f', 3);
    return frame(s, '#eaf2ee');
  });

  /* ---- air filter: the pleated element in its housing, clean air out ---- */
  A.addSpot('air filter', function () {
    var s = '';
    s += r(46, 46, 108, 58, '#3c4a54', 7);                  /* the housing */
    s += r(52, 52, 96, 46, PAPER, 4);                       /* the paper element */
    for (var i = 0; i < 12; i++) {
      s += stroke('M ' + (56 + i * 8) + ' 54 v 42', OCHRE, 3);   /* the pleats */
    }
    s += r(28, 62, 20, 26, STEEL, 3) + r(152, 62, 20, 26, STEEL, 3);
    s += stroke('M 14 66 h 12 M 14 76 h 12 M 14 86 h 12', '#8c8f93', 3);   /* dusty air in */
    s += stroke('M 174 72 h 14 M 174 82 h 14', '#5fb3cf', 3);              /* clean air out */
    return frame(s, '#eef2f4');
  });

  /* ---- dipstick: the stick out of the tube, oil to the level mark ---- */
  A.addSpot('dipstick', function () {
    var s = '';
    s += r(52, 96, 110, 22, STEEL, 5);                      /* the sump it comes out of */
    s += r(96, 88, 18, 14, '#3c4a54', 3);                   /* the tube */
    s += stroke('M 105 90 v -62', STEEL2, 7);               /* the stick */
    s += stroke('M 105 90 v -26', OIL, 7);                  /* the oil on it */
    s += c(105, 24, 10, '#c9892a') + c(105, 24, 5, '#8f5f16');   /* the ring handle */
    s += stroke('M 118 62 h 12', '#b8432f', 3) + t(146, 66, 11, 'MAX', '#b8432f', 'middle', 800);
    s += stroke('M 118 76 h 12', LINE, 3) + t(146, 80, 11, 'MIN', STEEL, 'middle', 800);
    return frame(s, '#f1eee8');
  });

  /* ---- fuel: the pump nozzle and what it fills ---- */
  A.addSpot('fuel', function () {
    var s = '';
    s += r(36, 40, 50, 74, '#b8432f', 8);                   /* the pump */
    s += r(44, 48, 34, 22, '#f6efe0', 3);
    s += t(61, 64, 12, '45.0', '#1b1f24', 'middle', 800);
    s += r(48, 80, 26, 26, '#8f2f20', 4);
    s += stroke('M 86 64 q 34 -6 38 26 q 2 16 -12 18', '#2b3238', 8);   /* the hose */
    s += p('M 104 110 l 24 -8 v 18 Z', '#39434c');          /* the nozzle */
    s += p('M 138 46 q 14 18 14 28 a 14 14 0 0 1 -28 0 q 0 -10 14 -28 Z', OCHRE);  /* a drop */
    return frame(s, '#f3ece6');
  });

  /* THE NAME ON THE CARD IS NOT ALWAYS THE NAME OF THE DRAWING. A matching target is labelled
     with the book's own words - "Engine oil", "Brake fluid" - while the drawing registered in
     art-eam.js is called `oil` or `brakes`, so four targets on the vocabulary screen showed no
     picture at all. These aliases are the book's labels pointing at the drawings that already
     exist; an alias is only ever added where the drawing really is of that thing.

     Each alias is written out in full rather than looped, because tools/eam_build_unit.py
     finds a unit's drawings by reading `A.addSpot('<name>'` out of this file: a name built at
     run time is invisible to it, and the target would keep its label instead of its picture. */
  A.addSpot('air-filter', function () { return A.spot('air filter'); });
  A.addSpot('engine oil', function () { return A.spot('oil'); });
  A.addSpot('engine-oil', function () { return A.spot('oil'); });
  A.addSpot('brake fluid', function () { return A.spot('brakes'); });
  A.addSpot('brake-fluid', function () { return A.spot('brakes'); });
  A.addSpot('washer fluid', function () { return A.spot('windscreen'); });
  A.addSpot('washer-fluid', function () { return A.spot('windscreen'); });
}(window));
