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
  /* ------------------------------------------------------------------
     THREE ARRANGEMENTS OF EACH ROOM.

     A unit is seven cycles and fourteen scenes, drawn in ONE room, and the room
     was the same picture every time - the same props at the same x, the same
     stack on the same shelf. A set that never changes stops being looked at,
     and a learner's eye had nothing to tell cycle 1.1 from cycle 1.6.

     `scene.js` now hands each layer an arrangement number, 0 1 or 2, derived
     from the scene's own id so it is stable across reloads. What it may change
     is deliberately narrow:

       * WHERE the loose props stand - rotated between positions that are each
         already inside a gap between the actor columns, so `clearOf` is
         satisfied by construction and not by luck;
       * what is stacked on which shelf, and where the lorry or the pallet sits.

     What it may NOT change is the viewBox. The actors are positioned on the
     stage in PER CENT, outside the SVG, so narrowing the room's viewBox would
     scale the room and leave every actor standing in the wrong place - a
     "closer camera" done this way would put a man through a wall. The closer
     framing is a camera matter and lives in the scene's own `cam`.
     ------------------------------------------------------------------ */
  function slot(arr, list) {
    return list[((arr | 0) % list.length + list.length) % list.length];
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
  /* ⚠ A PROP ON A SURFACE MUST BE OVER THE SURFACE. `rest` puts a prop's base on
     a given y and says nothing about x, and in the office the telephone sat at
     x=150 on a desk that begins at x=180: its base was exactly on the desk's top
     edge and it was hanging in the air beside it. The gate measured the actor
     bands, found the prop nowhere near a face, and passed. So the rooms that have
     one declare the SPAN of their surface here, and the gate asserts that nothing
     in the fore layer is painted outside it. */
  var SURFACES = {
    counter: { x0: 120, x1: 1480, top: 560 },
    meeting: { x0: 180, x1: 1420, top: 560 }
  };
  //: exported so gates/pbe_art.py can ask the page the same question it measures
  A.pbeContract = { spots: SPOTS, actorHalf: ACTOR_HALF, waistY: WAIST_Y,
                    clearOf: clearOf, surfaces: SURFACES };

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
    mid: function (arr) {
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
      /* HOW FAR THE BARRIER IS RAISED is the gate's own arrangement: fully up,
         half up, or just lifting. Every one of the three ends ABOVE the head
         band (0.25H = 225) along its whole run, which is the constraint that
         produced it - see the note on the room above. */
      var tipY = slot(arr, [150, 196, 178]);
      s += p('M 487 300 L 1250 ' + tipY, 'none',
             ' stroke="' + RUST + '" stroke-width="18" stroke-linecap="round"');
      for (var j = 0; j < 5; j++) {
        var fy = 300 - (300 - tipY) * ((j + 1) / 6);
        s += p('M ' + (560 + j * 140) + ' ' + (fy - 14) + ' l 48 -9', 'none',
               ' stroke="' + PAPER + '" stroke-width="16"');
      }
      return stage(s);
    },
    fore: function (arr) {
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
      /* THE LECTERN STANDS IN A DIFFERENT PLACE in each arrangement. It is
         furniture - its top at 694 is below WAIST_Y - so it is clear of the
         actor columns at every one of the three, and all three keep its full
         352-wide span inside the 1600 stage. */
      var dx = slot(arr, [0, -208, 176]);
      return stage('<g transform="translate(' + dx + ',0)">' + s + '</g>');
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
    mid: function (arr) {
      var s = '';
      var cols = ['#b4885c', '#a8714a', '#c49a68', '#9c8f80'];
      for (var b = 0; b < 4; b++) {
        for (var shelf = 0; shelf < 4; shelf++) {
          var surface = 170 + shelf * 112 + 14;      // the shelf's own top edge
          /* WHAT IS ON WHICH SHELF is the store's arrangement: the stock moves
             between cycles, which is the one thing this unit says about a store
             out loud - *read it every morning, it changes*. */
          var n = 2 + ((b + shelf + (arr | 0)) % 3);
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
      var card = slot(arr, [['ROW 3 · SHELF 2', '10 packets = 1 carton'],
                            ['ROW 2 · SHELF 1', 'shelf 1 is the BOTTOM'],
                            ['ROW 4 · SHELF 3', '36 cartons = 1 pallet']]);
      s += r(820, 300, 190, 64, PAPER, 5);
      s += text(828, 326, card[0], 21, INK, 'start', 700);
      s += text(828, 352, card[1], 17, STEEL2, 'start', 500);
      return stage(s);
    },
    fore: function (arr) {
      /* A PALLET OF CARTONS, A CARTON, AND A PACKET, side by side and named - the
         size contrast the unit is about, in one glance. They stand in the gap
         between the actor columns (24%, 44%, 62% => 384, 704, 992) at the left edge
         and far right, and everything rests on the floor line. */
      var FLOOR_Y = 884, s = '';
      /* THE THREE ARRANGEMENTS OF THIS FLOOR. The pallet and the carton are
         furniture height - their tops are below WAIST_Y - so they may stand
         anywhere, including between two speakers. The LADDER may not: it
         reaches y=300, which is inside the chest band, so its two positions
         are the only two gaps 150 wide that no actor column touches
         (0..248 and 1128..1600, from SPOTS.store = 24%, 62%, 44%). */
      var A = slot(arr, [{ pal: 40, car: 1390, lad: 1252 },
                         { pal: 1330, car: 40, lad: 1150 },
                         { pal: 40, car: 300, lad: 1252 }]);
      /* the pallet, with cartons stacked on it */
      s += shadow(A.pal + 110, FLOOR_Y, 250);
      s += rest(A.pal, FLOOR_Y, 220, 30, WOOD2, 3);
      for (var k = 0; k < 3; k++) {
        s += rest(A.pal + 12 + k * 70, FLOOR_Y - 30, 64, 62, '#a8714a', 4);
      }
      s += text(A.pal + 110, FLOOR_Y - 118, 'PALLET', 20, INK, 'middle', 700);
      /* a single carton, and a packet on top of it */
      s += shadow(A.car + 65, FLOOR_Y, 150);
      s += rest(A.car, FLOOR_Y, 130, 104, '#b4885c', 4);
      s += rest(A.car + 30, FLOOR_Y - 104, 60, 44, '#c49a68', 3);
      s += text(A.car + 65, FLOOR_Y - 164, 'CARTON · PACKET', 19, INK,
                'middle', 700);
      /* the ladder, leaning on the shelving rather than floating beside it */
      s += shadow(A.lad + 48, FLOOR_Y, 110);
      s += line(A.lad, FLOOR_Y, A.lad + 78, 300, WOOD2, 13);
      s += line(A.lad + 78, FLOOR_Y, A.lad + 150, 300, WOOD2, 13);
      for (var i = 0; i < 6; i++) {
        s += line(A.lad + 12 + i * 13, FLOOR_Y - 20 - i * 95,
                  A.lad + 90 + i * 12, FLOOR_Y - 28 - i * 95, WOOD, 9);
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
    mid: function (arr) {
      /* THE LORRY, AT LORRY SCALE. It used to be about as tall as a man; a box body
         is around twice a person, and the wheels now meet the floor line at 700.

         WHERE IT IS PARKED is the yard's arrangement - backed right up to the
         door, standing off, or gone, which is also the three states a yard is
         ever in. Gone means gone: the arrangement with no lorry has an empty
         bay, not a lorry drawn somewhere silly. */
      var FLOOR_Y = 700;
      var bx = slot(arr, [840, 700, null]);
      if (bx === null) {
        /* the empty bay: the marked-out ground a lorry stands on */
        var e = '';
        for (var m = 0; m < 6; m++) {
          e += r(880 + m * 110, FLOOR_Y - 4, 64, 10, PAPER, 5);
        }
        return stage(e);
      }
      var s = shadow(bx + 280, FLOOR_Y + 8, 620);
      s += rest(bx, FLOOR_Y, 520, 300, '#cfd7dc', 10);
      s += rest(bx, FLOOR_Y - 264, 520, 36, STEEL2, 6);
      s += rest(bx + 520, FLOOR_Y, 200, 220, RUST, 10);
      s += rest(bx + 558, FLOOR_Y - 120, 124, 78, SKY2, 4);
      s += c(bx + 100, FLOOR_Y - 6, 56, INK) + c(bx + 100, FLOOR_Y - 6, 24, STEEL);
      s += c(bx + 590, FLOOR_Y - 6, 56, INK) + c(bx + 590, FLOOR_Y - 6, 24, STEEL);
      return stage(s);
    },
    fore: function (arr) {
      /* pallets at the left edge and far right, clear of the three actor columns
         (20%, 46%, 68% => 320, 736, 1088) and standing on the floor */
      var FLOOR_Y = 886, s = '';
      /* two pallets, at two of three floor positions. All three are furniture
         height, so any of them is clear of the actor columns. */
      var P = slot(arr, [[20, 1422], [20, 540], [900, 1422]]);
      s += shadow(P[0] + 98, FLOOR_Y, 210);
      s += rest(P[0], FLOOR_Y, 196, 26, WOOD2, 3);
      s += rest(P[0] + 14, FLOOR_Y - 26, 168, 92, WOOD, 4);
      s += line(P[0] + 34, FLOOR_Y - 76, P[0] + 162, FLOOR_Y - 76, PAPER, 5);
      s += shadow(P[1] + 90, FLOOR_Y, 190);
      s += rest(P[1], FLOOR_Y, 180, 26, WOOD2, 3);
      s += rest(P[1] + 14, FLOOR_Y - 26, 152, 86, WOOD, 4);
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
    fore: function (arr) {
      /* THE THREE THINGS A COUNTER NEEDS, each RESTING on the counter top at
         560. The three gaps between the actor columns (26%, 47%, 68% => 416,
         752, 1088, each 272 wide) are 0..280, 552..616 and 1224..1600, and the
         arrangement rotates the three objects between them - so the same
         counter is laid out differently in each cycle and nothing ever lands on
         a speaker. The pen pot is the narrow one, so it takes the narrow gap. */
      var TOP = 560, s = '';
      /* ⚠ ALL THREE STAND ON THE COUNTER, which spans 120..1480 - see SURFACES
         above. The PEN POT is the one that reaches above WAIST_Y, so it takes
         one of the gaps the counter also covers (120..280, 552..616, 888..952,
         1224..1480); the bell and the papers are furniture height. */
      var G = slot(arr, [{ bell: 180, note: 890, pen: 1290 },
                         { bell: 1340, note: 700, pen: 160 },
                         { bell: 1000, note: 300, pen: 560 }]);
      /* the bell */
      s += rest(G.bell, TOP, 76, 18, '#a8861c', 4);
      s += '<ellipse cx="' + (G.bell + 38) + '" cy="' + (TOP - 18)
         + '" rx="36" ry="24" fill="#c9a227"/>';
      s += c(G.bell + 38, TOP - 44, 8, '#a8861c');
      /* the delivery note and the invoice, lying flat */
      s += rest(G.note, TOP, 200, 12, PAPER, 3);
      s += rest(G.note + 16, TOP - 12, 168, 10, '#f2ece0', 3);
      s += text(G.note + 16, TOP - 26, 'DELIVERY NOTE  4417', 17, STEEL2,
                'start', 600);
      /* the pen, IN A POT - it used to float */
      s += rest(G.pen, TOP, 54, 66, STEEL, 6);
      s += line(G.pen + 18, TOP - 60, G.pen + 28, TOP - 112, INK, 7);
      s += line(G.pen + 36, TOP - 60, G.pen + 46, TOP - 106, RUST, 7);
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
    mid: function (arr) {
      /* the tail-lift platform, and the pallet half off it.

         HOW FAR THROUGH THE UNLOADING is this dock's arrangement: three boxes
         still on the pallet, two, or one - which is what the unit's own
         counting scenes are about. */
      var FLOOR_Y = 700, s = '';
      var left = slot(arr, [3, 2, 1]);
      s += shadow(1250, FLOOR_Y + 6, 420);
      s += rest(1060, FLOOR_Y, 400, 30, STEEL2, 4);
      s += rest(1080, FLOOR_Y - 30, 40, 130, STEEL, 4);
      s += rest(1400, FLOOR_Y - 30, 40, 130, STEEL, 4);
      s += rest(1130, FLOOR_Y - 30, 240, 26, WOOD2, 3);
      for (var k = 0; k < left; k++) {
        s += rest(1140 + k * 78, FLOOR_Y - 56, 70, 66, '#b4885c', 4);
      }
      return stage(s);
    },
    fore: function (arr) {
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
      /* WHAT THE NOTE SAYS changes with the arrangement: the unit's three real
         notes. A learner who has read the same four lines fourteen times has
         read them once. */
      var N = slot(arr, [['BEIRUT CO.', '4 March', '16 boxes', 'counted 15'],
                         ['HOMS DEPOT', '11 March', '6 pallets', 'no note!'],
                         ['BEIRUT CO.', '18 March', '12 boxes', 'counted 12']]);
      s += text(36, TOP - 196, N[0], 17, INK, 'start', 700);
      s += text(36, TOP - 170, N[1], 16, STEEL2, 'start', 500);
      s += text(36, TOP - 138, N[2], 19, INK, 'start', 700);
      s += text(36, TOP - 110, N[3], 16, RUST, 'start', 600);
      s += line(36, TOP - 54, 174, TOP - 54, '#c9c0ae', 3);
      s += text(36, TOP - 28, 'sign here', 15, STEEL2, 'start', 500);
      /* a carton on the floor, FULLY in frame - the first draft ran it off the
         edge at x=1574 of a 1600 stage. It is furniture height, so the three
         positions are all clear of the actor columns. */
      var cx2 = slot(arr, [1380, 420, 1180]);
      s += shadow(cx2 + 72, FLOOR_Y, 160);
      s += rest(cx2, FLOOR_Y, 144, 112, '#a8714a', 4);
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
    fore: function (arr) {
      /* THE TELEPHONE, THE PAD AND THE SPIKE, resting on the desk at 560.
         Actor columns are 24%, 47%, 70% => 384, 752, 1120, so the gaps are
         0..248, 520..616 and 1256..1600, and the arrangement rotates the three
         objects between them. The telephone and the pad live NEXT TO EACH OTHER
         in every arrangement, because that is the rule the unit teaches out
         loud - *where do the pen and the pad live? next to the telephone* - and
         a set that contradicts its own lesson is worse than a dull one. */
      var TOP = 560, s = '';
      /* ⚠ EVERY ONE OF THESE SITS ON THE DESK, which spans 180..1420 - see
         SURFACES above and the defect that produced it. The SPIKE is the only
         one of the three that reaches above WAIST_Y, so its positions are the
         two gaps between the actor columns that the desk also covers
         (520..616 and 1256..1420). The telephone was redrawn lower, so the
         whole of it - cradle and handset - is furniture height and may stand
         anywhere the desk reaches. */
      var G = slot(arr, [{ tel: 230, pad: 400, spk: 1264 },
                         { tel: 1240, pad: 1060, spk: 520 },
                         { tel: 700, pad: 880, spk: 1300 }]);
      /* the telephone */
      s += rest(G.tel, TOP, 150, 34, INK, 6);
      s += rest(G.tel + 16, TOP - 34, 118, 14, '#4b545f', 5);
      s += p('M ' + (G.tel + 10) + ' ' + (TOP - 48) + ' q 70 -8 140 0', 'none',
             ' stroke="' + INK + '" stroke-width="16" stroke-linecap="round"');
      /* the message pad, with a slip on it - beside the telephone, always */
      s += rest(G.pad, TOP, 150, 14, PAPER, 3);
      s += rest(G.pad + 14, TOP - 14, 122, 10, '#f2ece0', 3);
      s += text(G.pad + 14, TOP - 30, 'MESSAGE', 15, STEEL2, 'start', 700);
      /* the spike, with slips on it - where the message should have gone */
      s += rest(G.spk, TOP, 96, 14, STEEL2, 3);
      s += line(G.spk + 48, TOP - 14, G.spk + 48, TOP - 120, STEEL, 7);
      s += rest(G.spk + 6, TOP - 44, 84, 30, PAPER, 2);
      s += rest(G.spk + 12, TOP - 70, 72, 26, '#f2ece0', 2);
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
  /* ============================================================
     WHAT A HAND CAN HOLD.

     `art.js` draws the arms as groups that rotate about the shoulder and, given
     `opts.hold`, asks the COURSE for the object - this function - and draws it
     inside the holding arm's group, so it travels with the arm. The origin here
     is the HAND, not the stage: (0,0) is the point at the end of the arm, which
     is why every prop is drawn around it and not at a y chosen by eye. It is
     the same contract the rooms follow with `rest`.

     They are the course's own objects, in the rooms' own palette. No stock
     icons: the clipboard in a man's hand is the clipboard on the dock stand,
     and the whole point of a held prop is that a learner recognises it.
     ============================================================ */
  var HELD = {
    /* the gate book - open, held across the forearm */
    book: function () {
      return p('M -26 -4 L 0 -12 L 26 -4 L 26 16 L 0 24 L -26 16 Z', PAPER)
        + p('M 0 -12 L 0 24', 'none',
            ' stroke="' + WOOD2 + '" stroke-width="3"')
        + p('M -26 -4 L 0 -12 L 26 -4', 'none',
            ' stroke="' + WOOD2 + '" stroke-width="3"')
        + p('M -19 4 L -6 1', 'none', ' stroke="#c9c0ae" stroke-width="2"')
        + p('M 7 1 L 20 4', 'none', ' stroke="#c9c0ae" stroke-width="2"');
    },
    pen: function () {
      return p('M -2 -2 L 6 -26', 'none',
               ' stroke="' + INK + '" stroke-width="5" stroke-linecap="round"')
        + c(7, -28, 2.6, RUST);
    },
    /* the dock clipboard, the course's most-read object */
    clipboard: function () {
      return r(-15, -6, 30, 40, '#8f98a1', 3)
        + r(-12, -2, 24, 33, PAPER, 2)
        + r(-7, -9, 14, 6, STEEL2, 2)
        + p('M -8 6 L 6 6', 'none', ' stroke="' + INK + '" stroke-width="2"')
        + p('M -8 13 L 8 13', 'none', ' stroke="#c9c0ae" stroke-width="2"')
        + p('M -8 20 L 4 20', 'none', ' stroke="#c9c0ae" stroke-width="2"');
    },
    /* a single sheet, held up to be read */
    sheet: function () {
      return r(-13, -8, 26, 34, PAPER, 2)
        + p('M -9 0 L 7 0', 'none', ' stroke="' + INK + '" stroke-width="2"')
        + p('M -9 7 L 9 7', 'none', ' stroke="#c9c0ae" stroke-width="2"')
        + p('M -9 14 L 5 14', 'none', ' stroke="#c9c0ae" stroke-width="2"');
    },
    note: function () { return HELD.sheet(); },
    /* the message slip - smaller than a sheet, which is the point of it */
    slip: function () {
      return r(-9, -5, 18, 22, '#f6f0e2', 2)
        + p('M -6 2 L 4 2', 'none', ' stroke="' + INK + '" stroke-width="2"')
        + p('M -6 8 L 6 8', 'none', ' stroke="#c9c0ae" stroke-width="2"');
    },
    carton: function () {
      return r(-20, -4, 40, 34, '#b4885c', 3)
        + r(-20, -4, 40, 7, WOOD2, 2)
        + p('M 0 3 L 0 30', 'none', ' stroke="#9c7046" stroke-width="2"');
    },
    box: function () { return HELD.carton(); },
    packet: function () {
      return r(-13, -2, 26, 20, '#c49a68', 3)
        + r(-13, -2, 26, 5, WOOD2, 2);
    },
    roll: function () {
      return '<ellipse cx="0" cy="2" rx="11" ry="7" fill="#d8cdb6"/>'
        + r(-11, 2, 22, 30, '#cbbfa6', 2)
        + c(0, 2, 4, '#a99c82');
    },
    /* the office handset, held at the ear - the whole of unit 6 */
    phone: function () {
      return p('M -7 -8 q 14 -10 22 2 l -6 6 q -6 -7 -12 -2 Z', INK)
        + p('M 9 20 q -14 10 -22 -2 l 6 -6 q 6 7 12 2 Z', INK)
        + p('M 8 2 L -1 12', 'none', ' stroke="' + INK + '" stroke-width="7"');
    },
    /* a key on a ring - the spare key on the hook, unit 4 */
    key: function () {
      return c(0, -2, 6, 'none').replace('fill="none"',
        'fill="none" stroke="' + STEEL2 + '" stroke-width="3"')
        + r(-1.5, 4, 3, 18, STEEL2, 1)
        + r(1.5, 14, 6, 3, STEEL2, 1)
        + r(1.5, 19, 5, 3, STEEL2, 1);
    }
  };
  A.heldProp = function (name) {
    var f = HELD[String(name || '').toLowerCase()];
    return f ? f() : '';
  };
  A.heldPropNames = function () { return Object.keys(HELD); };

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
