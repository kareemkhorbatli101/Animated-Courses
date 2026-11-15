/* ============================================================
   English for Auto Maintenance B1 — art-eam-cast.js

   THE CAST, AND THE PLACES THEY WORK.

   Loaded after art.js and art-eam.js. It does three things and nothing else:

     1. names the six people of Cham Motors and fixes each one's face for ever
     2. adds the two sets they work in - the workshop and reception
     3. replaces the hand-drawn figures in art-eam.js with the engine's real actors

   WHY THE HAND-DRAWN FIGURES HAD TO GO. art-eam.js drew people as a circle for a head and a
   dome for a body: two dots for eyes, no eye, no brow, no nose, no arms, no lips, and nothing
   that could move. The engine has carried a proper rig all along - A.actor() returns a figure
   whose head, brows, eyelids, mouth, torso and both arms are NAMED ELEMENTS, so scene.js can
   drive the lips from measured visemes at 25 Hz and the brows from an expression. Unit 1
   shipped without using any of it.

   IDENTITY IS FIXED HERE AND NOWHERE ELSE. A named character is a rig plus a set of clothes,
   decided once in CAST below. Every card, every portrait, every scene and every unit asks for
   the person by NAME, never by rig - so Nabil cannot be a different man in unit 3 from the one
   in unit 1, which is what happens when each card picks its own colours.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ============================================================
     THE CAST
     ============================================================ */
  var CAST = {
    maher: { rig: 'm-50s-a', shirt: '#223243', shirt2: '#18242f',
             name: 'Maher', role: 'manager', voice: 'm', pitch: 0.9 },
    nabil: { rig: 'm-30s-a', shirt: '#2f5f86', shirt2: '#24496a',
             name: 'Nabil', role: 'mechanic', voice: 'm', pitch: 1.0 },
    rana:  { rig: 'f-30s-a', shirt: '#4a5a68', shirt2: '#3a4854',
             name: 'Rana', role: 'service advisor', voice: 'f', pitch: 1.08 },
    lina:  { rig: 'f-30s-h', shirt: '#3c6e63', shirt2: '#2d564d',
             name: 'Lina', role: 'diagnostic technician', voice: 'f', pitch: 1.0 },
    tarek: { rig: 'm-20s-b', shirt: '#7a6a4f', shirt2: '#5f533e',
             name: 'Tarek', role: 'apprentice', voice: 'm', pitch: 1.12 },
    aboud: { rig: 'm-50s-b', shirt: '#8a6e52', shirt2: '#6d5640',
             name: 'Mr Aboud', role: 'customer', voice: 'm', pitch: 0.94 },
    sami:  { rig: 'm-50s-a', shirt: '#6d6f8f', shirt2: '#54566f',
             name: 'Sami', role: 'garage owner', voice: 'm', pitch: 0.92 }
  };
  A.cast = CAST;
  A.castNames = Object.keys(CAST);

  /* One person, drawn by the engine's rig, at a scale and offset that fits a 200x140 spot.
     The actor's own box is 200x300 and holds head, neck, torso and both arms, so a spot shows
     it from the waist up: scale 0.60 and lift it so the eyes sit a third of the way down,
     which is where a face is expected to be. */
  function actorIn(id, who, sc, dx, dy) {
    var g = CAST[who] || CAST.nabil;
    sc = sc || 0.6;
    return '<g transform="translate(' + (dx || 0) + ',' + (dy || 0) + ') scale(' + sc + ')">'
      + A.actor(id, g.rig, { shirt: g.shirt, shirt2: g.shirt2 }) + '</g>';
  }
  A.actorIn = actorIn;

  /* A named person as a 200x140 spot: head and shoulders, with a prop if one is given. */
  function personSpot(who, prop, bg) {
    var s = r(0, 112, 200, 28, '#b9c4cb');
    s += actorIn('sp-' + who + '-' + (++seq), who, 0.62, 38, -4);
    if (prop) { s += prop(); }
    return frame(s, bg || '#edf1f4');
  }
  var seq = 0;

  /* ---- the six people, each as a spot ---- */
  A.addSpot('maher', function () {
    return personSpot('maher', function () {
      var s = r(140, 52, 36, 42, '#8d6e4a', 3) + r(144, 58, 28, 32, '#fbf8f1', 2);
      s += r(150, 64, 16, 2.4, '#9aa7b1') + r(150, 70, 16, 2.4, '#9aa7b1')
         + r(150, 76, 11, 2.4, '#9aa7b1');
      return s;                                                   /* the job cards he checks */
    }, '#f0eee9');
  });
  A.addSpot('nabil', function () {
    return personSpot('nabil', function () {
      return p('M 150 92 v -34', 'none',
               ' stroke="#52646f" stroke-width="7" stroke-linecap="round"')
        + c(150, 54, 9, '#76899a') + c(150, 54, 4, '#e9eef1');     /* a spanner */
    });
  });
  A.addSpot('rana', function () {
    return personSpot('rana', function () {
      return r(138, 58, 34, 24, '#2a3b48', 3) + r(142, 62, 26, 16, '#cfe6ef', 2);
    });                                                            /* her screen */
  });
  A.addSpot('lina', function () {
    return personSpot('lina', function () {
      var s = r(134, 52, 40, 30, '#27323a', 3) + r(138, 56, 32, 20, '#143039', 2);
      s += p('M 142 70 l 8 -10 l 7 8 l 9 -13', 'none',
             ' stroke="#49d6a0" stroke-width="2.6" stroke-linecap="round" fill="none"');
      return s;                                                    /* the diagnostic screen */
    });
  });
  A.addSpot('tarek', function () {
    return personSpot('tarek', function () {
      return p('M 140 76 q 16 -8 26 2', 'none',
               ' stroke="#e8b418" stroke-width="3.4" stroke-linecap="round"');
    }, '#eaeff2');
  });
  A.addSpot('aboud', function () {
    return personSpot('aboud', function () {
      return r(142, 74, 18, 11, '#c9892a', 2) + c(163, 79, 4, '#c9892a');   /* keys */
    });
  });
  A.addSpot('sami', function () { return personSpot('sami', null, '#f1ece3'); });

  /* A head-only portrait, for cue cards and lists. */
  A.addSpot('who-nabil', function () { return frame(A.portrait(CAST.nabil.rig, 1), '#eaf0f3'); });

  /* ============================================================
     THE SETS — three depth layers on a 1600x900 stage, which is what scene.js expects.

     art.js keeps SETS in a closure and exposes only A.set(), so there is no seam to add one
     through. Rather than edit the lifted engine - which has to stay a byte-for-byte copy so it
     can be re-lifted when the other courses improve it - A.set is WRAPPED here: this course's
     sets are tried first and anything else falls through to the engine's five.
     ============================================================ */
  var MY_SETS = {};
  var engineSet = A.set;
  A.set = function (name) { return MY_SETS[name] || engineSet(name); };
  A.addSet = function (name, def) {
    MY_SETS[name] = def;
    if (A.setNames.indexOf(name) < 0) { A.setNames.push(name); }
    return name;
  };

  function svg16(body) {
    return '<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" '
      + 'preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + body + '</svg>';
  }

  /* ---- the workshop: a lift, a tool wall, a roller door, a car on a ramp ---- */
  A.addSet('workshop', {
    back: function () {
      var s = r(0, 0, 1600, 900, '#dde6ec');
      s += r(0, 0, 1600, 580, '#cedbe4');
      s += r(0, 566, 1600, 22, '#aebecb');
      /* roller door, left */
      s += r(90, 150, 430, 420, '#9fb2bd', 8);
      for (var i = 0; i < 9; i++) { s += r(96, 164 + i * 46, 418, 30, '#b4c4ce', 4); }
      s += r(90, 150, 430, 420, 'none', 8)
        .replace('fill="none"', 'fill="none" stroke="#7d8f9b" stroke-width="8"');
      /* tool wall, right */
      s += r(900, 150, 600, 330, '#8d6e4a', 10);
      s += r(916, 166, 568, 298, '#a9814f', 6);
      for (var j = 0; j < 7; j++) {
        var x = 960 + j * 76;
        s += p('M ' + x + ' 220 v 130', 'none',
               ' stroke="#52646f" stroke-width="13" stroke-linecap="round"');
        s += c(x, 210, 17, '#76899a');
      }
      s += r(950, 380, 500, 14, '#7d6240', 4);
      s += t(1200, 530, 30, 'CHAM MOTORS', '#5d4b33', 'middle', 800);
      return svg16(s);
    },
    mid: function () {
      /* the two-post lift, with a car up on it */
      var s = r(430, 700, 740, 22, '#52646f', 6);
      s += r(470, 500, 34, 206, '#76899a', 5) + r(1096, 500, 34, 206, '#76899a', 5);
      s += r(430, 486, 740, 24, '#52646f', 6);
      /* the car, side on, sitting on the lift beams */
      s += p('M 520 486 l 70 -92 q 24 -32 66 -32 h 190 q 42 0 66 32 l 70 92 h 44 '
             + 'q 30 0 30 30 v 44 h -610 v -44 q 0 -30 30 -30 z', '#1f6f8b');
      s += p('M 604 480 l 46 -62 q 16 -22 44 -22 h 150 q 28 0 44 22 l 46 62 z', '#cfe6ef');
      s += p('M 776 396 v 84', 'none', ' stroke="#52646f" stroke-width="7"');
      s += c(640, 560, 46, '#2c3136') + c(640, 560, 19, '#76899a');
      s += c(980, 560, 46, '#2c3136') + c(980, 560, 19, '#76899a');
      s += c(508, 500, 15, '#e8b418');
      return svg16(s);
    },
    fore: function () {
      var s = r(0, 806, 1600, 94, '#9aa9b399');
      s += r(-20, 792, 1640, 26, '#aebecb', 8);
      /* an oil drum and a trolley jack, foreground left */
      s += r(60, 672, 112, 150, '#2f3a22', 8) + r(60, 690, 112, 26, '#44522c');
      s += p('M 1380 790 h 170 l -22 -40 h -126 z', '#b8432f');
      s += c(1404, 806, 17, '#2c3136') + c(1528, 806, 17, '#2c3136');
      return svg16(s);
    }
  });

  /* ---- reception: a counter, a screen, a waiting chair, the workshop door behind ---- */
  A.addSet('reception', {
    back: function () {
      var s = r(0, 0, 1600, 900, '#e6edf1');
      s += r(0, 0, 1600, 560, '#d8e3ea');
      s += r(0, 548, 1600, 20, '#bccbd5');
      s += r(120, 120, 520, 330, '#cfe6ef', 10);
      s += r(120, 120, 520, 330, 'none', 10)
        .replace('fill="none"', 'fill="none" stroke="#9fb3bf" stroke-width="12"');
      s += p('M 380 120 v 330 M 120 285 h 520', 'none',
             ' stroke="#9fb3bf" stroke-width="9"');
      /* the door through to the workshop */
      s += r(1010, 150, 300, 420, '#b4c4ce', 8);
      s += r(1026, 166, 268, 388, '#9fb2bd', 6);
      s += c(1270, 380, 11, '#52646f');
      s += t(1160, 112, 26, 'WORKSHOP', '#5a6b78', 'middle', 800);
      s += t(380, 500, 30, 'CHAM MOTORS', '#1f6f8b', 'middle', 800);
      return svg16(s);
    },
    mid: function () {
      var s = r(260, 600, 1080, 150, '#c8a97e', 10);
      s += r(248, 578, 1104, 34, '#dcc39b', 8);
      s += r(980, 470, 190, 118, '#2a3b48', 8) + r(996, 486, 158, 86, '#cfe6ef', 4);
      s += r(360, 496, 150, 92, '#8d6e4a', 5) + r(372, 508, 126, 68, '#fbf8f1', 3);
      s += r(392, 522, 86, 5, '#9aa7b1') + r(392, 540, 86, 5, '#9aa7b1')
         + r(392, 558, 56, 5, '#9aa7b1');
      return svg16(s);
    },
    fore: function () {
      var s = r(0, 812, 1600, 88, '#aebecb99');
      s += r(-20, 798, 1640, 26, '#c3d2da', 8);
      s += r(70, 600, 170, 30, '#5a6b78', 8) + r(84, 630, 24, 180, '#5a6b78')
         + r(202, 630, 24, 180, '#5a6b78');
      return svg16(s);
    }
  });

  /* ============================================================
     THE PEOPLE, REDRAWN — the role spots from art-eam.js, now using real actors.

     addSpot overwrites by name, so these replace the earlier hand-drawn versions without the
     earlier file being edited: art-eam.js keeps the OBJECTS it draws well (engine, battery,
     job card, the garage) and loses only the figures it drew badly.
     ============================================================ */
  A.addSpot('mechanic', function () {
    var s = r(0, 104, 200, 36, '#b9c4cb');
    s += r(30, 86, 150, 9, '#52646f', 3) + r(44, 95, 11, 20, '#76899a')
       + r(144, 95, 11, 20, '#76899a');
    s += '<g opacity="0.95">' + p('M 44 86 l 16 -22 q 6 -8 16 -8 h 44 q 10 0 16 8 l 16 22 z',
                                  '#1f6f8b') + '</g>';
    s += actorIn('rl-mech', 'nabil', 0.46, 104, 10);
    return frame(s, '#e9eef1');
  });

  A.addSpot('service-advisor', function () {
    var s = r(0, 104, 200, 36, '#b9c4cb');
    s += actorIn('rl-adv1', 'rana', 0.46, 10, 8);
    s += actorIn('rl-adv2', 'aboud', 0.44, 112, 12);
    s += r(18, 92, 164, 22, '#c8a97e', 4) + r(16, 86, 168, 8, '#dcc39b', 3);
    return frame(s, '#eef1f3');
  });

  A.addSpot('manager', function () {
    var s = r(0, 106, 200, 34, '#b9c4cb');
    s += actorIn('rl-mgr', 'maher', 0.5, 56, 4);
    s += r(14, 76, 40, 44, '#8d6e4a', 3) + r(18, 82, 32, 32, '#fbf8f1', 2);
    s += r(146, 76, 40, 44, '#8d6e4a', 3) + r(150, 82, 32, 32, '#fbf8f1', 2);
    return frame(s, '#f0eee9');
  });

  A.addSpot('technician', function () {
    var s = r(0, 106, 200, 34, '#b9c4cb');
    s += actorIn('rl-tech', 'lina', 0.48, 14, 6);
    s += r(120, 44, 64, 48, '#27323a', 4) + r(126, 50, 52, 30, '#143039', 2);
    s += p('M 132 68 l 11 -13 l 9 10 l 12 -16', 'none',
           ' stroke="#49d6a0" stroke-width="3" stroke-linecap="round" fill="none"');
    return frame(s, '#e8eef1');
  });

  A.addSpot('customer', function () {
    var s = r(0, 106, 200, 34, '#b9c4cb');
    s += actorIn('rl-cust', 'aboud', 0.48, 6, 6);
    s += '<g opacity="0.95">'
      + p('M 104 102 l 14 -20 q 5 -7 13 -7 h 34 q 8 0 13 7 l 14 20 h 6 q 6 0 6 6 v 10 '
          + 'q 0 4 -5 4 h -84 q -5 0 -5 -4 v -10 q 0 -6 6 -6 z', '#2d8fae')
      + c(122, 118, 8, '#2c3136') + c(170, 118, 8, '#2c3136') + '</g>';
    return frame(s, '#edf1f4');
  });

  A.addSpot('apprentice', function () {
    var s = r(0, 106, 200, 34, '#b9c4cb');
    s += actorIn('rl-app1', 'tarek', 0.46, 8, 8);
    s += actorIn('rl-app2', 'nabil', 0.46, 100, 6);
    return frame(s, '#eaeff2');
  });

  A.addSpot('service', function () {
    var s = r(0, 104, 200, 36, '#b9c4cb');
    s += r(26, 84, 150, 9, '#52646f', 3) + r(40, 93, 11, 20, '#76899a')
       + r(140, 93, 11, 20, '#76899a');
    s += p('M 40 84 l 16 -22 q 6 -8 16 -8 h 44 q 10 0 16 8 l 16 22 z', '#1f6f8b');
    s += p('M 96 98 v 14', 'none', ' stroke="#6b4a12" stroke-width="4"');
    s += p('M 92 112 q 4 10 8 0 z', '#6b4a12');
    s += actorIn('rl-serv', 'nabil', 0.44, 120, 14);
    return frame(s, '#e9eef1');
  });

  /* ============================================================
     DIORAMAS, REDRAWN with the same people
     ============================================================ */
  function inner(name) {
    return A.spot(name).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  }

  A.addDiorama('workshop-floor', function () {
    var s = r(0, 0, 400, 260, '#dbe5ea');
    s += r(0, 176, 400, 84, '#b9c4cb');
    s += p('M 0 176 h 400', 'none', ' stroke="#93a3ad" stroke-width="3"');
    s += r(150, 26, 104, 62, '#8d6e4a', 4);
    s += p('M 164 46 v 28 M 186 44 v 30 M 208 48 v 26 M 230 44 v 30', 'none',
           ' stroke="#52646f" stroke-width="5" stroke-linecap="round"');
    s += r(26, 150, 150, 8, '#52646f', 3);
    s += p('M 40 150 l 16 -24 q 6 -8 16 -8 h 44 q 10 0 16 8 l 16 24 z', '#1f6f8b');
    s += '<g transform="translate(238,74) scale(0.42)">'
      + A.actor('dio-w1', CAST.nabil.rig, { shirt: CAST.nabil.shirt, shirt2: CAST.nabil.shirt2 })
      + '</g>';
    s += '<g transform="translate(312,82) scale(0.38)">'
      + A.actor('dio-w2', CAST.tarek.rig, { shirt: CAST.tarek.shirt, shirt2: CAST.tarek.shirt2 })
      + '</g>';
    s += t(200, 250, 15, 'the workshop floor at Cham Motors', '#52646f', 'middle', 700);
    return D.svgFit('0 0 400 260', s);
  });

  A.addDiorama('reception-desk', function () {
    var s = r(0, 0, 400, 260, '#e3eaee');
    s += r(0, 186, 400, 74, '#b9c4cb');
    s += r(30, 28, 90, 56, '#cfdbe2', 4) + r(286, 28, 84, 56, '#cfdbe2', 4);
    s += '<g transform="translate(74,56) scale(0.42)">'
      + A.actor('dio-r1', CAST.rana.rig, { shirt: CAST.rana.shirt, shirt2: CAST.rana.shirt2 })
      + '</g>';
    s += '<g transform="translate(236,60) scale(0.42)">'
      + A.actor('dio-r2', CAST.aboud.rig, { shirt: CAST.aboud.shirt, shirt2: CAST.aboud.shirt2 })
      + '</g>';
    s += r(56, 170, 288, 54, '#c8a97e', 6) + r(56, 162, 288, 12, '#dcc39b', 4);
    s += t(200, 250, 15, 'reception, first thing in the morning', '#52646f', 'middle', 700);
    return D.svgFit('0 0 400 260', s);
  });

})(window);
