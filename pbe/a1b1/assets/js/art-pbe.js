/* ============================================================
   art-pbe.js — the rooms of Sham Trading, Mezzeh, Damascus.

   WHY THIS FILE EXISTS SEPARATELY FROM art.js. art.js is an ENGINE file: it is
   materialised from canon, it is identical across the courses bar the namespace, and
   `course_engine --drift` measures how far each copy has moved from the original.
   Adding a course's own rooms to it would make that measurement meaningless. So the
   rooms live here and `art.set` is WRAPPED rather than edited: a name this file knows
   resolves here, anything else falls through to the engine's own five.

   THE SERIES HAS NO PICTURES. Zero images in 5,442 pages, measured. Everything a
   learner sees of this workplace is drawn here.

   A SET IS THREE DEPTH LAYERS on a 1600x900 stage. `back` is the room, `mid` is what
   stands in it, `fore` is what the camera passes.

   ⚠ THE THIRD LAYER IS CALLED `fore`, NOT `front`. scene.js calls set.back(),
   set.mid() and set.fore(); a set that names it `front` throws "set.fore is not a
   function" the moment a scene mounts - and the sets proof page, which composes the
   layers itself, showed all three happily. The proof page is not the player.

   ------------------------------------------------------------------------------
   THE PROP CONTRACT, added 2026-11-20 after the owner said the sets looked wrong.

   They did, and a green gate had been saying otherwise. `gates/pbe_art.py` checked
   ONE band - HEAD_BAND = 0.25..0.45 of the stage - and asked whether the fore layer
   painted inside a standing speaker's head. Measured over five bands instead, the
   fore layer covered up to 58% of a speaker's BODY while the head band read 0.0% on
   every set. In the meeting room a coffee cup was drawn on a man's sternum.

   The cause was not carelessness about that cup. It was that THREE COORDINATE
   SYSTEMS had nothing to do with each other:

     * a surface was drawn at an absolute y  (the table top at y = 560),
     * a prop was placed at another absolute y chosen by eye (the cup at 540),
     * an actor was placed as a FRACTION of the stage with `at: [x, 0.62]`.

   So nothing related a prop's height to the surface under it, or to the body beside
   it. Three rules now do, and `gates/pbe_art.py` checks all three:

     1. A PROP RESTS ON A DECLARED SURFACE. `rest(x, surfaceY, w, h)` puts the prop's
        BASE on that surface. No prop is positioned by a y chosen by eye.
     2. A PROP KEEPS OUT OF AN ACTOR'S COLUMN above the waist. `SPOTS` holds where the
        cast stands; `clearOf` refuses an x that would put a small prop across a body.
        Full-width furniture is exempt and declared so - a counter IS in front of the
        person, and that is what a counter is for.
     3. EVERYTHING THAT TOUCHES THE FLOOR CASTS A CONTACT SHADOW. Without one the
        room reads as cut-out shapes, which is what it did.

   AND THE ROOM CARRIES ITS OWN UNIT'S LESSON. Unit 2 teaches packets against cartons
   against pallets - a lesson entirely about size - and its shelves held boxes that
   were all the same size. Unit 6 is the telephone and its room was a boardroom with
   two coffee cups and no telephone. Every sign in every room was ruled lines with no
   words, in a course for people learning to read workplace English.
   ============================================================ */
(function (w) {
  'use strict';
  var NS = w.PBE1;
  if (!NS || !NS.art) return;
  var A = NS.art;

  /* the engine's own drawing helpers are private to art.js, so the few we need are
     repeated here rather than reached for - a few lines against a cross-file dependency */
  function r(x, y, wd, h, fill, rad) {
    return '<rect x="' + x + '" y="' + y + '" width="' + wd + '" height="' + h +
      '" fill="' + fill + '"' + (rad ? ' rx="' + rad + '"' : '') + '/>';
  }
  function c(cx, cy, rr, fill) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="' + fill + '"/>';
  }
  function p(d, fill, extra) {
    return '<path d="' + d + '" fill="' + (fill || 'none') + '"' + (extra || '') + '/>';
  }
  function line(x1, y1, x2, y2, col, wd) {
    return p('M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2, 'none',
             ' stroke="' + col + '" stroke-width="' + (wd || 6) + '" stroke-linecap="round"');
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  /* WORDS ON THE WALL. Every sign in all five rooms used to be ruled lines with no
     words - a free reading exercise, in a reading course, left blank five times. */
  function text(x, y, s, size, col, anchor, weight) {
    return '<text x="' + x + '" y="' + y + '" font-family="Segoe UI, Arial, sans-serif"'
      + ' font-size="' + (size || 26) + '" font-weight="' + (weight || 600) + '"'
      + ' fill="' + (col || '#394049') + '"'
      + ' text-anchor="' + (anchor || 'start') + '">' + esc(s) + '</text>';
  }
  function svg(vb, body) {
    return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" ' +
      'preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + body + '</svg>';
  }
  function stage(body) { return svg('0 0 1600 900', body); }

  /* ---------------------------------------------------------- the contract */
  var W = 1600, H = 900;
  //: where the cast stands in each room, as a fraction of the width. KEPT IN STEP
  //: WITH tools/pbe_build_unit.py SET_SPOTS - gates/pbe_art.py asserts they agree,
  //: because a prop placed clear of the wrong column is placed clear of nothing.
  var SPOTS = {
    gate:    [0.17, 0.74, 0.45],
    yard:    [0.20, 0.46, 0.68],
    store:   [0.24, 0.62, 0.44],
    counter: [0.26, 0.68, 0.47],
    meeting: [0.24, 0.70, 0.47],
    dock:    [0.22, 0.66, 0.44]
  };
  var ACTOR_HALF = 0.085 * W;          // half an actor box, in stage units
  var WAIST_Y = 0.56 * H;              // above this, a small prop is across a body

  /** A prop RESTING on a surface: its base is the surface, never a y chosen by eye. */
  function rest(x, surfaceY, wd, h, fill, rad) {
    return r(x, surfaceY - h, wd, h, fill, rad);
  }
  /** A contact shadow for something standing on the floor. */
  function shadow(cx, floorY, wd) {
    return '<ellipse cx="' + cx + '" cy="' + floorY + '" rx="' + (wd / 2) +
      '" ry="' + Math.max(6, wd / 12) + '" fill="#000" opacity="0.13"/>';
  }
  /** Is this small prop clear of every actor column, at this height? */
  function clearOf(room, x, wd, topY) {
    if (topY >= WAIST_Y) return true;            // below the waist: furniture territory
    var sp = SPOTS[room] || [];
    for (var i = 0; i < sp.length; i++) {
      var cx = sp[i] * W;
      if (x + wd > cx - ACTOR_HALF && x < cx + ACTOR_HALF) return false;
    }
    return true;
  }
  //: exported so gates/pbe_art.py can ask the page the same question it measures
  A.pbeContract = { spots: SPOTS, actorHalf: ACTOR_HALF, waistY: WAIST_Y,
                    clearOf: clearOf };

  /* Damascus daylight: warm stone, dusty blue sky, olive and rust. The palette is
     fixed here so the rooms, built on different days, look like one company. */
  var SKY = '#bcd4e2', SKY2 = '#a8c6d8', STONE = '#e3d9c9', STONE2 = '#d2c5b1',
      FLOOR = '#c9bda9', FLOOR2 = '#b6a890', STEEL = '#8e9aa3', STEEL2 = '#6f7a83',
      RUST = '#b4642f', OLIVE = '#6f7a4a', WOOD = '#a97c4e', WOOD2 = '#8a6540',
      PAPER = '#fbf7ee', INK = '#394049';

  var MINE = {};

  /* ---------------------------------------------------------- 1 · THE GATE
     Unit 1: names, jobs, spelling, and the gate book every name is written in.

     ⚠ THE BARRIER USED TO END AT A MAN'S THROAT. It ran from y=530 down to y=430
     across the full width, and the cast stands at 74% - so the arm terminated at
     Ammar's neck and read as though it went through him. It is now ABOVE head
     height for its whole span, which is also what a raised barrier looks like.    */
  MINE.gate = {
    back: function () {
      var s = r(0, 0, W, H, SKY) + r(0, 0, W, 300, SKY2);
      s += r(0, 300, W, 250, STONE) + r(0, 300, W, 26, STONE2);
      /* the company sign - with the company's name on it */
      s += r(1010, 96, 500, 150, PAPER, 8);
      s += r(1010, 96, 500, 150, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="10"');
      s += text(1260, 158, 'SHAM TRADING', 40, INK, 'middle', 800);
      s += text(1260, 206, 'GATE 1  ·  06:00 – 18:00', 26, STEEL2, 'middle', 600);
      /* the road out */
      s += r(0, 550, W, 350, FLOOR) + r(0, 550, W, 18, FLOOR2);
      for (var i = 0; i < 7; i++) s += r(120 + i * 230, 790, 120, 12, PAPER, 6);
      return stage(s);
    },
    mid: function () {
      /* the gatehouse, sized to a person */
      var s = shadow(255, 648, 360);
      s += r(80, 318, 350, 330, STONE2, 6) + r(80, 318, 350, 40, WOOD2, 4);
      s += r(118, 384, 274, 176, SKY2, 4);
      s += r(118, 384, 274, 176, 'none', 4).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="8"');
      /* THE BARRIER, RAISED AND CLEAR OF EVERY HEAD. The post stands on the floor
         line; the arm lifts from 300 to 150, which is above the head band (0.25H =
         225) for its whole run. */
      s += shadow(497, 650, 70);
      s += r(474, 300, 26, 350, STEEL2, 6);
      s += p('M 487 300 L 1250 150', 'none',
             ' stroke="' + RUST + '" stroke-width="18" stroke-linecap="round"');
      for (var j = 0; j < 5; j++) {
        s += p('M ' + (560 + j * 140) + ' ' + (286 - j * 27) + ' l 48 -9', 'none',
               ' stroke="' + PAPER + '" stroke-width="16"');
      }
      return stage(s);
    },
    fore: function () {
      /* THE GATE BOOK, open on a lectern, BETWEEN the two men and below the waist.
         It is the first artefact of the course and the one a learner must
         recognise - Abu Raed writes every name in it in cycle 1.1. It stands in the
         gap between the actor columns at 17% and 74%, and its top is below WAIST_Y,
         so it passes `clearOf` on both counts rather than by luck. */
      var FLOOR_Y = 880, TOP = 700;              // the reading surface
      var s = shadow(798, FLOOR_Y, 230);
      s += r(776, TOP, 44, FLOOR_Y - TOP - 16, WOOD2, 6);   // post
      s += r(690, FLOOR_Y - 22, 216, 22, WOOD2, 6);         // foot
      /* the two open pages, tilted towards the camera, resting on the post */
      s += p('M 622 724 L 798 694 L 798 772 L 622 802 Z', PAPER);
      s += p('M 974 724 L 798 694 L 798 772 L 974 802 Z', '#f2ece0');
      s += p('M 622 724 L 798 694 L 974 724', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="7" stroke-linejoin="round"');
      s += p('M 798 694 L 798 772', 'none', ' stroke="' + WOOD2 + '" stroke-width="6"');
      for (var i = 0; i < 4; i++) {
        s += p('M ' + (646 + i * 2) + ' ' + (746 + i * 15) + ' L ' +
               (782 + i * 2) + ' ' + (722 + i * 15), 'none',
               ' stroke="#c9c0ae" stroke-width="3"');
        s += p('M ' + (816 - i * 2) + ' ' + (722 + i * 15) + ' L ' +
               (952 - i * 2) + ' ' + (746 + i * 15), 'none',
               ' stroke="#c9c0ae" stroke-width="3"');
      }
      s += text(652, 742, 'NAME', 15, STEEL2, 'start', 700);
      s += line(652, 758, 744, 742, INK, 5);
      s += line(652, 774, 722, 762, INK, 5);
      s += text(834, 736, 'IN', 15, STEEL2, 'start', 700);
      /* the pen, lying on the spine */
      s += p('M 846 770 L 930 742', 'none',
             ' stroke="' + INK + '" stroke-width="8" stroke-linecap="round"');
      s += c(934, 741, 6, RUST);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 2 · THE STORE
     Units 2 and 3: counting, and the words that go with the numbers.

     ⚠ THE SHELVES USED TO HOLD BOXES THAT WERE ALL THE SAME SIZE, in the unit whose
     whole lesson is a packet against a carton against a pallet. The three sizes are
     now visibly different and labelled, and a shelf card gives an address in the
     form the unit teaches.                                                        */
  MINE.store = {
    back: function () {
      var s = r(0, 0, W, H, '#ded5c6') + r(0, 0, W, 240, '#cfc5b4');
      s += r(0, 620, W, 280, FLOOR) + r(0, 620, W, 16, FLOOR2);
      for (var b = 0; b < 4; b++) {
        var x = 60 + b * 390;
        s += r(x, 170, 330, 450, '#c6bba8', 6);
        for (var shelf = 0; shelf < 4; shelf++) {
          s += r(x, 170 + shelf * 112, 330, 14, STEEL2, 3);
        }
        /* the row number, painted on the upright, counted FROM THE DOOR */
        s += text(x + 12, 206, 'ROW ' + (b + 1), 20, STEEL2, 'start', 700);
      }
      return stage(s);
    },
    mid: function () {
      var s = '';
      var cols = ['#b4885c', '#a8714a', '#c49a68', '#9c8f80'];
      for (var b = 0; b < 4; b++) {
        for (var shelf = 0; shelf < 4; shelf++) {
          var surface = 170 + shelf * 112 + 14;      // the shelf's own top edge
          var n = 2 + ((b + shelf) % 3);
          for (var i = 0; i < n; i++) {
            /* THREE SIZES, because that is the lesson. A packet is small, ten
               packets make a carton, and the carton is visibly bigger. */
            var small = (shelf + i) % 3 === 0;
            var wd = small ? 44 : 78, ht = small ? 40 : 76;
            s += rest(80 + b * 390 + i * 86, surface + 96, wd, ht,
                      cols[(b + shelf + i) % 4], 4);
          }
        }
      }
      /* the shelf card, on the front of row 3 - an address in the unit's own form */
      s += r(820, 300, 190, 64, PAPER, 5);
      s += text(828, 326, 'ROW 3 · SHELF 2', 21, INK, 'start', 700);
      s += text(828, 352, '10 packets = 1 carton', 17, STEEL2, 'start', 500);
      return stage(s);
    },
    fore: function () {
      /* A PALLET OF CARTONS, A CARTON, AND A PACKET, side by side and named - the
         size contrast the unit is about, in one glance. They stand in the gap
         between the actor columns (24%, 44%, 62% => 384, 704, 992) at the left edge
         and far right, and everything rests on the floor line. */
      var FLOOR_Y = 884, s = '';
      /* far left: the pallet, with cartons stacked on it */
      s += shadow(150, FLOOR_Y, 250);
      s += rest(40, FLOOR_Y, 220, 30, WOOD2, 3);
      for (var k = 0; k < 3; k++) {
        s += rest(52 + k * 70, FLOOR_Y - 30, 64, 62, '#a8714a', 4);
      }
      s += text(150, FLOOR_Y - 118, 'PALLET', 20, INK, 'middle', 700);
      /* far right: a single carton, and a packet on top of it */
      s += shadow(1455, FLOOR_Y, 150);
      s += rest(1390, FLOOR_Y, 130, 104, '#b4885c', 4);
      s += rest(1420, FLOOR_Y - 104, 60, 44, '#c49a68', 3);
      s += text(1455, FLOOR_Y - 164, 'CARTON · PACKET', 19, INK, 'middle', 700);
      /* the ladder, leaning on the shelving rather than floating beside it */
      s += shadow(1300, FLOOR_Y, 110);
      s += line(1252, FLOOR_Y, 1330, 300, WOOD2, 13);
      s += line(1330, FLOOR_Y, 1402, 300, WOOD2, 13);
      for (var i = 0; i < 6; i++) {
        s += line(1264 + i * 13, FLOOR_Y - 20 - i * 95, 1342 + i * 12,
                  FLOOR_Y - 28 - i * 95, WOOD, 9);
      }
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 3 · THE YARD
     Unit 3: the week, the clock, the shift board.

     ⚠ THE UNIT TEACHES THE CLOCK TWO WAYS and the yard had no clock at all, and no
     board. Both are now on the wall, at the two times the dialogue says aloud.     */
  MINE.yard = {
    back: function () {
      var s = r(0, 0, W, H, SKY) + r(0, 0, W, 260, SKY2);
      s += r(0, 260, W, 300, STONE) + r(0, 260, W, 20, STONE2);
      /* the roller shutter */
      s += r(120, 300, 400, 260, STEEL, 6);
      for (var i = 0; i < 9; i++) s += r(120, 310 + i * 28, 400, 10, STEEL2);
      /* THE SHIFT BOARD - the week, which is the unit's first lesson */
      s += r(900, 286, 560, 268, PAPER, 8);
      s += r(900, 286, 560, 42, STEEL2, 8);
      s += text(1180, 318, 'THIS WEEK', 25, PAPER, 'middle', 800);
      var days = ['SUN', 'MON', 'TUE', 'WED', 'THU'];
      for (var d = 0; d < 5; d++) {
        s += text(938 + d * 108, 372, days[d], 21, INK, 'start', 700);
        s += text(938 + d * 108, 404, d === 1 ? 'DELIVERY' : (d === 4 ? 'COUNT' : '—'),
                  14, STEEL2, 'start', 500);
      }
      s += text(938, 460, 'Gate 07:00', 22, INK, 'start', 600);
      s += text(938, 494, 'Lorry 07:15  =  quarter past seven', 20, RUST, 'start', 600);
      s += text(938, 528, 'Break 10:30  =  half past ten', 20, STEEL2, 'start', 600);
      s += r(0, 560, W, 340, FLOOR) + r(0, 560, W, 16, FLOOR2);
      return stage(s);
    },
    mid: function () {
      /* THE LORRY, AT LORRY SCALE. It used to be about as tall as a man; a box body
         is around twice a person, and the wheels now meet the floor line at 700. */
      var FLOOR_Y = 700;
      var s = shadow(1120, FLOOR_Y + 8, 620);
      s += rest(840, FLOOR_Y, 520, 300, '#cfd7dc', 10);
      s += rest(840, FLOOR_Y - 264, 520, 36, STEEL2, 6);
      s += rest(1360, FLOOR_Y, 200, 220, RUST, 10);
      s += rest(1398, FLOOR_Y - 120, 124, 78, SKY2, 4);
      s += c(940, FLOOR_Y - 6, 56, INK) + c(940, FLOOR_Y - 6, 24, STEEL);
      s += c(1430, FLOOR_Y - 6, 56, INK) + c(1430, FLOOR_Y - 6, 24, STEEL);
      return stage(s);
    },
    fore: function () {
      /* pallets at the left edge and far right, clear of the three actor columns
         (20%, 46%, 68% => 320, 736, 1088) and standing on the floor */
      var FLOOR_Y = 886, s = '';
      s += shadow(118, FLOOR_Y, 210);
      s += rest(20, FLOOR_Y, 196, 26, WOOD2, 3);
      s += rest(34, FLOOR_Y - 26, 168, 92, WOOD, 4);
      s += line(54, FLOOR_Y - 76, 182, FLOOR_Y - 76, PAPER, 5);
      s += shadow(1512, FLOOR_Y, 190);
      s += rest(1422, FLOOR_Y, 180, 26, WOOD2, 3);
      s += rest(1436, FLOOR_Y - 26, 152, 86, WOOD, 4);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 4 · THE COUNTER
     Unit 4: where a thing is, and the paper that says so.

     ⚠ THE PEN USED TO FLOAT IN MID-AIR beside the pad, touching nothing, and the
     price board had six ruled lines and no prices. Both are fixed; the pen is in a
     pot, which is where a counter keeps one.                                       */
  MINE.counter = {
    back: function () {
      var s = r(0, 0, W, H, '#e9e1d4') + r(0, 0, W, 300, '#ddd3c3');
      /* shopfront window, fully inside the frame rather than sliced by its edge */
      s += r(90, 96, 600, 370, SKY2, 10);
      s += r(90, 96, 600, 370, 'none', 10).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="12"');
      s += p('M 390 96 v 370', 'none', ' stroke="' + STEEL2 + '" stroke-width="10"');
      /* THE BOARD, with the unit's own words on it */
      s += r(870, 110, 640, 330, PAPER, 8);
      s += r(870, 110, 640, 46, WOOD2, 8);
      s += text(1190, 144, 'TRADE COUNTER', 26, PAPER, 'middle', 800);
      var rows = [['Packet', '20 in a packet'], ['Carton', '10 packets'],
                  ['Pallet', '36 cartons'], ['Delivery note', 'sign at the bottom']];
      for (var i = 0; i < rows.length; i++) {
        s += text(902, 206 + i * 56, rows[i][0], 23, INK, 'start', 700);
        s += text(1478, 206 + i * 56, rows[i][1], 21, STEEL2, 'end', 500);
        s += line(902, 222 + i * 56, 1478, 222 + i * 56, '#e4ddcd', 2);
      }
      s += r(0, 620, W, 280, FLOOR);
      return stage(s);
    },
    mid: function () {
      /* the counter itself - full-width furniture, which is exempt from `clearOf`
         by declaration: a counter IS in front of the person, and that is the point */
      var TOP = 560;
      var s = r(120, TOP, 1360, 120, WOOD, 10) + r(120, TOP, 1360, 20, WOOD2, 6);
      s += r(160, TOP + 120, 1280, 200, WOOD2, 6);
      return stage(s);
    },
    fore: function () {
      /* the three things a counter needs, each RESTING on the counter top at 560 and
         each in a gap between the actor columns (26%, 47%, 68% => 416, 752, 1088) */
      var TOP = 560, s = '';
      /* the bell, near the left edge */
      s += rest(150, TOP, 76, 18, '#a8861c', 4);
      s += '<ellipse cx="188" cy="' + (TOP - 18) + '" rx="36" ry="30" fill="#c9a227"/>';
      s += c(188, TOP - 52, 9, '#a8861c');
      /* the delivery note and the invoice, lying flat between the speakers */
      s += rest(890, TOP, 200, 12, PAPER, 3);
      s += rest(906, TOP - 12, 168, 10, '#f2ece0', 3);
      s += text(906, TOP - 26, 'DELIVERY NOTE  4417', 17, STEEL2, 'start', 600);
      /* the pen, IN A POT - it used to float */
      s += rest(1290, TOP, 54, 66, STEEL, 6);
      s += line(1308, TOP - 60, 1318, TOP - 112, INK, 7);
      s += line(1326, TOP - 60, 1336, TOP - 106, RUST, 7);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 5 · THE DOCK
     Unit 5: the delivery note, and the four things on it.

     ⚠ UNIT 5 USED TO REUSE UNIT 2'S SHELVES. The unit is about a piece of paper and
     the room had no paper in it, and two whole units looked identical. This is its
     own room: a tail-lift, a half-unloaded pallet, and a clipboard big enough to
     read the four fields the unit names.                                           */
  MINE.dock = {
    back: function () {
      var s = r(0, 0, W, H, '#ddd8ce') + r(0, 0, W, 230, '#cdc7bb');
      /* the open dock door onto daylight */
      s += r(1000, 150, 520, 420, SKY2, 8);
      s += r(1000, 150, 520, 420, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="14"');
      s += r(1000, 150, 520, 40, STEEL2, 8);
      /* THE NOTICE SITS ABOVE THE HEAD BAND. A wall notice behind a person is
         correct - they stand in front of the wall - but the head band is 0.25..0.45
         of the stage (225..405) and the first draft put all four lines inside it, so
         the speaker at 22% covered line 4. It now ends at y=250, clear of every
         head, and the room still reads as a wall with a notice on it. */
      s += r(70, 56, 560, 194, PAPER, 8);
      s += r(70, 56, 560, 42, RUST, 8);
      s += text(350, 88, 'BEFORE YOU SIGN', 24, PAPER, 'middle', 800);
      var four = ['1  the name at the top', '2  the date', '3  the quantity',
                  '4  the line at the bottom'];
      for (var i = 0; i < 4; i++) {
        s += text(100, 128 + i * 30, four[i], 20, INK, 'start', 600);
      }
      s += r(0, 570, W, 330, FLOOR) + r(0, 570, W, 16, FLOOR2);
      return stage(s);
    },
    mid: function () {
      /* the tail-lift platform, and the pallet half off it */
      var FLOOR_Y = 700, s = '';
      s += shadow(1250, FLOOR_Y + 6, 420);
      s += rest(1060, FLOOR_Y, 400, 30, STEEL2, 4);
      s += rest(1080, FLOOR_Y - 30, 40, 130, STEEL, 4);
      s += rest(1400, FLOOR_Y - 30, 40, 130, STEEL, 4);
      s += rest(1130, FLOOR_Y - 30, 240, 26, WOOD2, 3);
      for (var k = 0; k < 3; k++) {
        s += rest(1140 + k * 78, FLOOR_Y - 56, 70, 66, '#b4885c', 4);
      }
      return stage(s);
    },
    fore: function () {
      /* THE CLIPBOARD, large and readable, standing in the gap at the left of the
         three actor columns (22%, 44%, 66% => 352, 704, 1056). The whole unit is
         about being able to read these four things off one piece of paper. */
      var FLOOR_Y = 888, s = '';
      /* the actor columns here are 22%, 44% and 66% => 352, 704, 1056, each 272
         wide, so the only gap wide enough for the clipboard is the left edge:
         0..216. It is drawn inside that, not merely near it. */
      s += shadow(104, FLOOR_Y, 210);
      s += rest(26, FLOOR_Y, 32, 290, STEEL2, 4);      // the stand
      s += rest(150, FLOOR_Y, 32, 290, STEEL2, 4);
      var TOP = FLOOR_Y - 290;
      s += r(10, TOP - 240, 190, 240, '#8f98a1', 8);
      s += r(24, TOP - 226, 162, 212, PAPER, 4);
      s += text(36, TOP - 196, 'BEIRUT CO.', 17, INK, 'start', 700);
      s += text(36, TOP - 170, '4 March', 16, STEEL2, 'start', 500);
      s += text(36, TOP - 138, '16 boxes', 19, INK, 'start', 700);
      s += text(36, TOP - 110, 'counted 15', 16, RUST, 'start', 600);
      s += line(36, TOP - 54, 174, TOP - 54, '#c9c0ae', 3);
      s += text(36, TOP - 28, 'sign here', 15, STEEL2, 'start', 500);
      /* a single carton at the far right, FULLY in frame - the first draft ran it
         off the edge at x=1574 of a 1600 stage */
      s += shadow(1452, FLOOR_Y, 160);
      s += rest(1380, FLOOR_Y, 144, 112, '#a8714a', 4);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 6 · THE OFFICE
     Unit 6: the telephone, the message slip, the spike.

     ⚠ THE UNIT IS ENTIRELY ABOUT THE TELEPHONE and this room was a boardroom with
     two coffee cups and no telephone. One of those cups was drawn on a speaker's
     chest - the defect that produced the whole prop contract above. The cups are
     gone; the telephone, the pad and the spike are here, and all three REST on the
     desk at 560 in the gaps between the actor columns.                             */
  MINE.meeting = {
    back: function () {
      var s = r(0, 0, W, H, '#e6e9ec') + r(0, 0, W, 320, '#dde2e7');
      /* window, inside the frame */
      s += r(90, 96, 480, 330, SKY2, 8);
      s += p('M 330 96 v 330', 'none', ' stroke="#9aa7b2" stroke-width="10"');
      /* THE WHO-IS-WHERE BOARD, which is what a caller is really asking about */
      s += r(820, 110, 680, 370, PAPER, 10);
      s += r(820, 110, 680, 46, '#2c6f8f', 10);
      s += text(1160, 144, 'WHO IS WHERE', 26, PAPER, 'middle', 800);
      var who = [['Mr Khalil', 'Homs — back Thursday'],
                 ['Mrs Mansour', 'lunch — back at 2'],
                 ['Abu Yasser', 'the store'],
                 ['Nour', 'the office']];
      for (var i = 0; i < who.length; i++) {
        s += text(852, 208 + i * 62, who[i][0], 24, INK, 'start', 700);
        s += text(1468, 208 + i * 62, who[i][1], 21, STEEL2, 'end', 500);
        s += line(852, 226 + i * 62, 1468, 226 + i * 62, '#e2e6ea', 2);
      }
      s += r(0, 640, W, 260, '#cfd5da');
      return stage(s);
    },
    mid: function () {
      /* the desk - full-width furniture, exempt by declaration */
      var TOP = 560;
      var s = r(180, TOP, 1240, 150, WOOD, 14) + r(180, TOP, 1240, 22, WOOD2, 8);
      s += shadow(330, 862, 90) + shadow(1270, 862, 90);
      s += r(300, TOP + 150, 60, 150, WOOD2, 6) + r(1240, TOP + 150, 60, 150, WOOD2, 6);
      return stage(s);
    },
    fore: function () {
      /* THE TELEPHONE, THE PAD AND THE SPIKE, resting on the desk at 560.
         Actor columns are 24%, 47%, 70% => 384, 752, 1120, so these sit at the far
         left, in the 520-620 gap and at the far right. */
      var TOP = 560, s = '';
      /* the telephone */
      s += rest(150, TOP, 150, 40, INK, 6);
      s += rest(166, TOP - 40, 118, 22, '#4b545f', 5);
      s += p('M 160 ' + (TOP - 62) + ' q 70 -34 140 0', 'none',
             ' stroke="' + INK + '" stroke-width="20" stroke-linecap="round"');
      /* the message pad, with a slip on it */
      s += rest(560, TOP, 150, 14, PAPER, 3);
      s += rest(574, TOP - 14, 122, 10, '#f2ece0', 3);
      s += text(574, TOP - 30, 'MESSAGE', 15, STEEL2, 'start', 700);
      /* the spike, with slips on it - where the message should have gone */
      s += rest(1350, TOP, 96, 14, STEEL2, 3);
      s += line(1398, TOP - 14, 1398, TOP - 120, STEEL, 7);
      s += rest(1356, TOP - 44, 84, 30, PAPER, 2);
      s += rest(1362, TOP - 70, 72, 26, '#f2ece0', 2);
      return stage(s);
    }
  };

  /* ============================================================
     THE WORD PICTURES — a drawing for a word, shown as it is spoken.

     Every recording in this course already carries the start time of every word:
     625 clips, 4,410 timestamps, computed from each clip's own loudness envelope at
     build time, and `scene.js` already lights the current word in the English
     subtitle from them. Nothing had ever used them for anything else.

     WHICH WORDS ARE KEY IS NOT A SEPARATE LIST. A word is key exactly when there is
     a picture of it here. That is deliberate: a hand-written list of key words and a
     hand-drawn set of pictures are two things to keep in step, and the one nobody
     updates is the one that silently points at nothing. `wordArt` IS the list.

     They are the course's own objects, drawn the way the rooms draw them - no stock
     icons and no emoji, because the whole point of the reinforcement is that the
     thing in the card is the thing in the room.
     ============================================================ */
  function box(wd, h, fill, top) {
    return r(26, 70 - h, wd, h, fill, 4) + r(26, 70 - h, wd, 10, top || WOOD2, 3);
  }
  var WORDS = {
    packet: function () { return box(44, 40, '#c49a68'); },
    packets: function () { return WORDS.packet(); },
    carton: function () { return box(70, 64, '#b4885c'); },
    cartons: function () { return WORDS.carton(); },
    box: function () { return box(70, 64, '#b4885c'); },
    boxes: function () { return WORDS.box(); },
    pallet: function () {
      return r(16, 60, 92, 14, WOOD2, 2) + r(24, 24, 32, 36, '#a8714a', 3)
           + r(62, 24, 32, 36, '#b4885c', 3);
    },
    pallets: function () { return WORDS.pallet(); },
    shelf: function () {
      return r(14, 24, 96, 8, STEEL2, 2) + r(14, 56, 96, 8, STEEL2, 2)
           + r(22, 34, 26, 22, '#b4885c', 2) + r(54, 34, 26, 22, '#c49a68', 2);
    },
    shelves: function () { return WORDS.shelf(); },
    lorry: function () {
      return r(12, 28, 62, 36, '#cfd7dc', 4) + r(76, 40, 34, 24, RUST, 4)
           + c(32, 70, 10, INK) + c(94, 70, 10, INK);
    },
    gate: function () {
      return r(16, 30, 12, 46, STEEL2, 3)
           + p('M 22 32 L 110 20', 'none',
               ' stroke="' + RUST + '" stroke-width="10" stroke-linecap="round"');
    },
    book: function () {
      return p('M 16 30 L 62 22 L 62 66 L 16 74 Z', PAPER)
           + p('M 108 30 L 62 22 L 62 66 L 108 74 Z', '#f2ece0')
           + p('M 16 30 L 62 22 L 108 30', 'none',
               ' stroke="' + WOOD2 + '" stroke-width="5" stroke-linejoin="round"');
    },
    pen: function () {
      return p('M 20 72 L 96 24', 'none',
               ' stroke="' + INK + '" stroke-width="9" stroke-linecap="round"')
           + c(100, 21, 7, RUST);
    },
    paper: function () {
      return r(28, 18, 68, 58, PAPER, 3) + line(38, 36, 86, 36, STEEL, 4)
           + line(38, 50, 76, 50, STEEL, 4) + line(38, 64, 82, 64, STEEL, 4);
    },
    note: function () { return WORDS.paper(); },
    sheet: function () { return WORDS.paper(); },
    list: function () { return WORDS.paper(); },
    telephone: function () {
      return r(22, 54, 80, 22, INK, 5) + r(30, 42, 64, 14, '#4b545f', 4)
           + p('M 28 36 q 34 -22 68 0', 'none',
               ' stroke="' + INK + '" stroke-width="11" stroke-linecap="round"');
    },
    clock: function () {
      return c(62, 48, 32, PAPER) + c(62, 48, 32, 'none').replace('fill="none"',
             'fill="none" stroke="' + STEEL2 + '" stroke-width="6"')
           + line(62, 48, 62, 28, INK, 5) + line(62, 48, 78, 54, INK, 5);
    },
    ladder: function () {
      return line(30, 78, 44, 18, WOOD2, 8) + line(84, 78, 92, 18, WOOD2, 8)
           + line(34, 62, 86, 60, WOOD, 6) + line(38, 44, 88, 42, WOOD, 6);
    },
    door: function () {
      return r(34, 16, 56, 62, STONE2, 4) + c(80, 48, 5, STEEL2);
    },
    bell: function () {
      return r(30, 64, 64, 12, '#a8861c', 3)
           + '<ellipse cx="62" cy="52" rx="30" ry="24" fill="#c9a227"/>'
           + c(62, 24, 7, '#a8861c');
    },
    key: function () {
      return c(34, 48, 16, '#c9a227') + r(46, 42, 58, 12, '#c9a227', 3)
           + r(88, 54, 10, 14, '#c9a227', 2);
    },
    clipboard: function () {
      return r(28, 18, 68, 62, '#8f98a1', 4) + r(36, 26, 52, 46, PAPER, 2)
           + r(50, 12, 24, 12, STEEL2, 3);
    },
    slip: function () { return WORDS.paper(); },
    counter: function () {
      return r(14, 44, 96, 18, WOOD, 4) + r(22, 62, 80, 18, WOOD2, 3);
    }
  };

  /** The drawing for a word, or null. The word is lower-cased and stripped of
      punctuation by the caller. */
  A.wordArt = function (word, size) {
    var f = WORDS[String(word || '').toLowerCase()];
    if (!f) return null;
    return svg('0 0 124 92', f()).replace('<svg ',
      '<svg width="' + (size || 62) + '" height="' + Math.round((size || 62) * 0.74) + '" ');
  };
  A.wordArtHas = function (word) {
    return !!WORDS[String(word || '').toLowerCase()];
  };
  A.wordArtNames = function () { return Object.keys(WORDS); };

  /* WRAPPED, NOT EDITED. A name this file knows resolves here; anything else falls
     through to the engine's own rooms, so a scene that asks for `office` still gets it. */
  var base = A.set;
  A.set = function (name) {
    return MINE[name] || base(name);
  };
  A.setNames = (A.setNames || []).concat(Object.keys(MINE));
})(window);
