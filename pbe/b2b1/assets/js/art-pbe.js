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
  var NS = w.PBE7;
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
    dock:    [0.22, 0.66, 0.44],
    safety:  [0.19, 0.72, 0.45],
    /* A2 Book 1 - Nour's twelve rooms. The level moves her from the store to the
       office, so these are the office's own corners, the warehouse she walks into,
       the counter, the loading yard, and the two places outside the company the
       book takes her to: a clinic and a hotel. Twelve units, twelve places - and
       all six office rooms are TRUE, because a second-floor office is not one
       picture and a learner must be able to tell unit 2 from unit 9. */
    reception:   [0.20, 0.70, 0.45],
    openplan:    [0.22, 0.68, 0.45],
    warehouse:   [0.24, 0.66, 0.45],
    orderdesk:   [0.26, 0.70, 0.48],
    paydesk:     [0.25, 0.69, 0.46],
    loadingyard: [0.19, 0.48, 0.74],
    boardroom:   [0.23, 0.71, 0.47],
    canteen:     [0.21, 0.67, 0.44],
    noticeboard: [0.18, 0.73, 0.46],
    clinic:      [0.24, 0.64, 0.44],
    hotel:       [0.22, 0.72, 0.47],
    guestroom:   [0.20, 0.66, 0.43],
    /* A2 Book 2 - units 13 to 24, the same company a year on. Twelve more places
       and, again, not one office twelve times: an interview is across a table, a
       complaint is over an opened box, an email is written alone at a screen, and
       the year ends in a shop that is still being fitted out. */
    interview:     [0.22, 0.70, 0.46],
    planning:      [0.21, 0.69, 0.45],
    printercorner: [0.24, 0.67, 0.44],
    archive:       [0.23, 0.65, 0.44],
    trainingroom:  [0.19, 0.72, 0.46],
    itcorner:      [0.25, 0.66, 0.45],
    showroom:      [0.22, 0.68, 0.46],
    shopfront:     [0.18, 0.50, 0.74],
    returnsdesk:   [0.26, 0.69, 0.47],
    writingdesk:   [0.24, 0.63, 0.43],
    rooftop:       [0.20, 0.47, 0.72],
    newbranch:     [0.21, 0.66, 0.45],
    /* B1 Book 1's four rooms of its own. Four rows and not twelve, because the
       other eight units use rooms already in this table - see the long note
       above MINE.accountdesk. */
    accountdesk:   [0.20, 0.72, 0.46],
    workbench:     [0.18, 0.74, 0.47],
    stocktake:     [0.17, 0.75, 0.46],
    signingdesk:   [0.24, 0.68, 0.46],
    /* B1 Book 2's five rooms of its own. Five rows and not twelve for the same
       reason as Book 1's four: the other seven units happen in rooms this table
       already has, and each of those seven is a room that IS the unit's subject
       (the archive is how it used to be done; the returns desk is a claim). */
    diarywall:     [0.21, 0.71, 0.46],
    incidentroom:  [0.19, 0.73, 0.47],
    quotetable:    [0.23, 0.69, 0.45],
    dealtable:     [0.25, 0.67, 0.46],
    pressdesk:     [0.20, 0.70, 0.47],
    /* B2 Book 1's six rooms of its own, and Book 2's five. Eleven rows for
       twenty-four units, because thirteen of those units happen in a room this
       table already has and each of the thirteen IS the unit's subject - the
       boardroom is where a decision was half-taken, the archive is a document
       that outlives its author, the quotation table is three options with one
       argued against.

       ⚠ THESE TRIPLES WERE CHOSEN FOR THEIR GAPS, NOT BY EYE. A prop above
       WAIST_Y must sit between two actor columns, and a column is 2 x
       ACTOR_HALF = 272 wide, so a triple with a 64-wide gap has nowhere to put
       a telephone. Each is one of four shapes whose gaps are written down:

         [0.20, 0.70, 0.46]  gaps 456..600 and 872..984
         [0.18, 0.74, 0.46]  gaps 424..600 and 872..1048
         [0.22, 0.72, 0.47]  gaps 488..616 and 888..1016
         [0.19, 0.73, 0.45]  gaps 440..584 and 856..1032

       Every tall prop in the eleven rooms below is placed at an x inside one of
       its own room's two gaps, which is why `clearOf` passes by construction
       rather than by luck - the mistake `incidentroom` made on 2026-11-21, when
       a carton was painted across 47% of a speaker's chest behind a comment
       claiming a proof that had never been run. */
    directorsroom: [0.22, 0.72, 0.47],
    fileroom:      [0.18, 0.74, 0.46],
    policydesk:    [0.20, 0.70, 0.46],
    bankdesk:      [0.19, 0.73, 0.45],
    editdesk:      [0.22, 0.72, 0.47],
    callroom:      [0.20, 0.70, 0.46],
    contractdesk:  [0.18, 0.74, 0.46],
    readingroom:   [0.20, 0.70, 0.46],
    tribunal:      [0.19, 0.73, 0.45],
    handoverdesk:  [0.22, 0.72, 0.47],
    letterdesk:    [0.20, 0.70, 0.46]
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
  /** A contact shadow for something standing on a TABLE, not the floor.
      Flatter and tighter than `shadow`, and - the reason it is its own helper -
      it never reaches outside the prop's own width, because in a room with a
      declared surface the gate measures the whole fore layer's painted span and a
      floor-sized shadow is what would push it off the end of the desk. */
  function sit(cx, surfaceY, wd) {
    return '<ellipse cx="' + cx + '" cy="' + surfaceY + '" rx="' + (wd / 2) +
      '" ry="' + Math.max(3, wd / 20) + '" fill="#000" opacity="0.10"/>';
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
    meeting: { x0: 180, x1: 1420, top: 560 },
    /* A2's rooms, where they have a top to put something on. A room is in this
       table only if EVERYTHING its fore layer paints belongs on that top - the
       check is on the whole layer's painted span, so a room that also wants a bin
       on the floor is better off out of the table than fighting it. That is why
       `warehouse`, `loadingyard` and `noticeboard` are absent: their fore props
       stand on the floor, below the waist line, where `clearOf` exempts them. */
    reception: { x0: 520, x1: 1120, top: 560 },
    openplan:  { x0: 180, x1: 1420, top: 572 },
    orderdesk: { x0: 420, x1: 1180, top: 560 },
    paydesk:   { x0: 140, x1: 1460, top: 548 },
    boardroom: { x0: 180, x1: 1420, top: 560 },
    canteen:   { x0: 260, x1: 1340, top: 584 },
    clinic:    { x0: 300, x1: 1300, top: 560 },
    hotel:     { x0: 380, x1: 1240, top: 552 },
    guestroom: { x0: 540, x1: 1100, top: 640 },
    /* Book 2's rooms that have a top. `shopfront`, `rooftop` and `newbranch` are
       deliberately absent: their fore props stand on the ground - a shutter, a
       water tank, a stack of tiles - below the waist line, where `clearOf`
       exempts them and a surface span would be a fight with the floor. */
    interview:     { x0: 420, x1: 1180, top: 560 },
    planning:      { x0: 180, x1: 1420, top: 566 },
    printercorner: { x0: 300, x1: 1300, top: 556 },
    archive:       { x0: 360, x1: 1240, top: 560 },
    trainingroom:  { x0: 220, x1: 1380, top: 574 },
    itcorner:      { x0: 320, x1: 1280, top: 552 },
    showroom:      { x0: 200, x1: 1400, top: 560 },
    returnsdesk:   { x0: 260, x1: 1340, top: 556 },
    writingdesk:   { x0: 460, x1: 1140, top: 558 },
    /* B1 Book 1. `stocktake` is deliberately absent: its fore layer stands on
       the floor of an aisle, below the waist line, and a surface span would be
       a fight with the floor - the same reason `warehouse` is absent. */
    accountdesk:   { x0: 400, x1: 1200, top: 560 },
    workbench:     { x0: 240, x1: 1360, top: 556 },
    signingdesk:   { x0: 440, x1: 1160, top: 558 },
    /* B1 Book 2. All five have one, because all five put their props on a
       surface rather than on the floor - which is itself the test: a room whose
       fore layer would stand things on the ground does not get a row here. */
    diarywall:     { x0: 380, x1: 1220, top: 562 },
    incidentroom:  { x0: 260, x1: 1340, top: 556 },
    quotetable:    { x0: 300, x1: 1300, top: 560 },
    dealtable:     { x0: 420, x1: 1180, top: 558 },
    pressdesk:     { x0: 340, x1: 1260, top: 560 },
    /* B2's eleven. All eleven have a surface, because B2 is a book of
       documents: every one of these rooms puts paper on a top, and not one of
       them wants a bin on the floor. The `top` is each room's own desk height
       from its `mid` layer, not a constant - a span copied from another room is
       how a prop ends up resting on air beside the desk. */
    directorsroom: { x0: 420, x1: 1180, top: 558 },
    fileroom:      { x0: 260, x1: 1340, top: 556 },
    policydesk:    { x0: 360, x1: 1240, top: 560 },
    bankdesk:      { x0: 300, x1: 1300, top: 556 },
    editdesk:      { x0: 440, x1: 1160, top: 558 },
    callroom:      { x0: 480, x1: 1120, top: 562 },
    contractdesk:  { x0: 280, x1: 1320, top: 558 },
    readingroom:   { x0: 300, x1: 1300, top: 560 },
    tribunal:      { x0: 240, x1: 1360, top: 556 },
    handoverdesk:  { x0: 420, x1: 1180, top: 558 },
    letterdesk:    { x0: 400, x1: 1200, top: 560 }
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

  /* ---------------------------------------------------------- 7 · THE SAFETY WALL
     Book 2, unit 10: the six signs, must and must not, STOP, the wet floor, and the
     light over the loading door that does not work.

     ⚠ THE UNIT NAMES ITS OWN SIGNS AND WHERE EACH ONE HANGS - NO SMOKING at the gate,
     KEEP OUT on the paint store, DANGER on the loading door, FLAMMABLE in the paint
     store, HARD HATS at the yard gate, and FIRE EXIT on the back door, which the book
     calls "the one that matters". A unit about reading six signs taught in a room
     with none would be the defect this course already had once, in a different
     costume. So they are on the wall, in capitals, readable, and the FIRE EXIT is the
     green one, because five of the six stop you and one saves you.

     The plates sit ABOVE y=225 for their whole height, which is the top of the head
     band, so a sign never lands on a speaker's face. The things that CAN be walked
     into - the wet floor, the broken pallet - are floor furniture in the fore layer
     and stand in the gaps between the actor columns at 19%, 72% and 45%.             */
  MINE.safety = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#dcd6ca') + r(0, 0, W, 200, '#cec7b8');
      s += r(0, 620, W, 280, FLOOR) + r(0, 620, W, 16, FLOOR2);
      /* THE SIX SIGNS, in the order the book's own table gives them. Five stop you
         and are rust-on-paper; the sixth saves you and is green. */
      var SIGNS = [['NO SMOKING', RUST], ['KEEP OUT', RUST], ['DANGER', RUST],
                   ['FLAMMABLE', RUST], ['HARD HATS', RUST],
                   ['FIRE EXIT', '#2f7d4f']];
      for (var i = 0; i < SIGNS.length; i++) {
        var x = 36 + i * 256, top = 44;
        s += r(x, top, 232, 118, PAPER, 8);
        s += r(x, top, 232, 118, 'none', 8).replace('fill="none"',
              'fill="none" stroke="' + SIGNS[i][1] + '" stroke-width="9"');
        s += r(x + 14, top + 14, 204, 34, SIGNS[i][1], 4);
        s += text(x + 116, top + 88, SIGNS[i][0], 25, INK, 'middle', 800);
      }
      /* the arrow under FIRE EXIT - the sign that tells you to GO */
      s += p('M 1300 196 L 1360 196 L 1360 184 L 1392 202 L 1360 220 L 1360 208 '
             + 'L 1300 208 Z', '#2f7d4f');
      /* which door is open is the room's arrangement */
      var open = slot(arr, [0, 1, 2]);
      /* the paint store door, with its own KEEP OUT plate at door height */
      s += r(150, 300, 290, 322, open === 1 ? SKY2 : '#b9ae9c', 6);
      s += r(150, 300, 290, 26, WOOD2, 4);
      s += r(214, 246, 162, 46, PAPER, 4);
      s += text(295, 278, 'KEEP OUT', 20, RUST, 'middle', 800);
      /* the back door - the fire exit, green, and never blocked */
      s += r(1160, 300, 300, 322, open === 2 ? '#cfe6d8' : '#b9c7bd', 6);
      s += r(1160, 300, 300, 26, '#2f7d4f', 4);
      s += r(1236, 246, 150, 46, PAPER, 4);
      s += text(1311, 278, 'FIRE EXIT', 20, '#2f7d4f', 'middle', 800);
      return stage(s);
    },
    mid: function (arr) {
      /* THE LIGHT OVER THE LOADING DOOR, and whether it is working - cycle 10.5 is
         one sentence long and the sentence is "there is a light over the loading
         door and it does not work". */
      var lit = slot(arr, [false, true, false]);
      var s = r(620, 330, 360, 292, '#a9b3ba', 6) + r(620, 330, 360, 24, STEEL2, 4);
      s += text(800, 310, 'LOADING', 22, STEEL2, 'middle', 700);
      /* the fitting, on its bracket, above every head */
      /* clear of the sign row above, which ends at y=162 */
      s += r(770, 182, 60, 16, STEEL2, 3);
      s += p('M 760 198 L 840 198 L 826 238 L 774 238 Z',
             lit ? '#f6e9b8' : '#8e9aa3');
      if (lit) {
        s += '<ellipse cx="800" cy="282" rx="130" ry="74" fill="#f6e9b8"'
           + ' opacity="0.3"/>';
      } else {
        s += text(800, 272, '✗', 30, RUST, 'middle', 800);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* The wet floor and the broken pallet. The actor columns here are 19%, 72% and
         45% => 304, 1152, 720, each 272 wide, so the gaps are 0..168, 440..584,
         856..1016 and 1288..1600. The wet-floor sign stands as tall as a child, so
         it takes a gap; the pallet is ankle height and may stand anywhere. */
      var FLOOR_Y = 884, s = '';
      var A = slot(arr, [{ wet: 40, pal: 1320 },
                         { wet: 1340, pal: 460 },
                         { wet: 880, pal: 40 }]);
      /* the A-frame WET FLOOR sign - yellow, because it is the one thing in this
         room that is a warning rather than a rule */
      s += shadow(A.wet + 62, FLOOR_Y, 150);
      s += p('M ' + (A.wet + 62) + ' ' + (FLOOR_Y - 196) + ' L ' + (A.wet + 8)
             + ' ' + FLOOR_Y + ' L ' + (A.wet + 116) + ' ' + FLOOR_Y + ' Z',
             '#e3b32a');
      s += text(A.wet + 62, FLOOR_Y - 118, 'WET', 22, INK, 'middle', 800);
      s += text(A.wet + 62, FLOOR_Y - 88, 'FLOOR', 20, INK, 'middle', 800);
      /* and the wet itself, or the sign is a sign about nothing */
      s += '<ellipse cx="' + (A.wet + 180) + '" cy="' + (FLOOR_Y - 6)
         + '" rx="96" ry="22" fill="#8fb6cc" opacity="0.45"/>';
      /* the broken pallet - one slat missing, which is what "broken" looks like */
      s += shadow(A.pal + 100, FLOOR_Y, 210);
      s += rest(A.pal, FLOOR_Y, 200, 24, WOOD2, 3);
      for (var k = 0; k < 4; k++) {
        if (k === 2) { continue; }            /* the missing slat */
        s += rest(A.pal + 6 + k * 50, FLOOR_Y - 24, 42, 16, WOOD, 2);
      }
      s += text(A.pal + 100, FLOOR_Y - 62, 'BROKEN', 19, RUST, 'middle', 800);
      return stage(s);
    }
  };

  /* ============================================================
     A2 BOOK 1 — THE TWELVE ROOMS OF NOUR'S FIRST YEAR.

     The company is the same company: an office on the second floor, a warehouse
     behind the building, a small trade counter at the front. The level is not.
     A1 is a storeman's book - the gate, the pallet, the delivery note - and A2 is
     an assistant's: a telephone, a stock list, an invoice, a diary.

     ⚠ SIX OF THESE TWELVE ARE THE SAME OFFICE, AND THAT IS NOT A SHORTCUT. The
     rule this course works to is that no two units of a book share a room, because
     a learner's eye is what tells cycle 2.3 from cycle 9.3. Six of A2's twelve
     units happen in the office - so the office is drawn as the six places it
     actually is: the front desk where you are greeted, the open-plan room where
     the day is worked, the meeting room, the tea corner, the corridor with the
     staff rules on it, and the room a guest is received in. Every one of them is
     true, and no two look alike. The alternative - putting unit 9's staff rules in
     a clinic because the office was "taken" - is the defect this course already
     had once, when unit 5's delivery note was taught in a room with no paper.

     WHICH UNIT IS WHERE is in tools/pbe_build_unit.py's UNIT_SET, per book.
     ============================================================ */

  /* -------------------------------------------------- 1 · THE FRONT DESK
     Unit 1: greeting, introducing, spelling a name and a company, the telephone.
     The room is the first thing Nour sees and the first thing the learner does:
     somebody says who they are and somebody writes it down.                      */
  MINE.reception = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e6ddce') + r(0, 0, W, 210, '#d8cdbb');
      s += r(0, 640, W, 260, FLOOR) + r(0, 640, W, 16, FLOOR2);
      /* the company's name, behind the desk, where a visitor reads it first */
      s += r(540, 70, 560, 132, PAPER, 8);
      s += r(540, 70, 560, 132, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="9"');
      s += text(820, 128, 'SHAM TRADING CO.', 42, INK, 'middle', 800);
      s += text(820, 174, 'IMPORT  ·  DISTRIBUTION', 24, STEEL2, 'middle', 600);
      /* the floor list - unit 1.4 is "which floor is the office on?" and the
         answer has to be somewhere a learner can find it */
      s += r(60, 262, 300, 300, PAPER, 6);
      s += r(60, 262, 300, 42, STEEL2, 4);
      s += text(210, 292, 'FLOORS', 22, PAPER, 'middle', 800);
      var FL = [['3', 'STORE'], ['2', 'OFFICE'], ['1', 'SALES'], ['G', 'COUNTER']];
      for (var i = 0; i < FL.length; i++) {
        s += text(84, 346 + i * 56, FL[i][0], 26, RUST, 'start', 800);
        s += text(126, 346 + i * 56, FL[i][1], 24, INK, 'start', 600);
      }
      /* THE STAIRS UP TO THE SECOND FLOOR, drawn as a staircase rather than as a
         stack of bars. The first version was five horizontal rectangles of
         decreasing width on a panel and read as a bookshelf; a learner asked in
         cycle 1.4 which floor the office is on should be able to see the way up. */
      s += p('M 1300 640 L 1300 596 L 1352 596 L 1352 548 L 1404 548 L 1404 500 '
             + 'L 1456 500 L 1456 452 L 1508 452 L 1508 404 L 1560 404 '
             + 'L 1560 640 Z', '#cdc2b0');
      s += p('M 1300 596 L 1352 596 L 1352 548 L 1404 548 L 1404 500 L 1456 500 '
             + 'L 1456 452 L 1508 452 L 1508 404 L 1560 404', 'none',
             ' stroke="' + STEEL2 + '" stroke-width="7" stroke-linejoin="round"');
      /* the handrail, rising with them */
      s += p('M 1306 522 L 1556 330', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="10" stroke-linecap="round"');
      s += p('M 1316 592 L 1316 526 M 1546 408 L 1546 342', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="7"');
      s += text(1430, 288, 'STAIRS', 22, STEEL2, 'middle', 700);
      /* the clock says what time the day starts - and the arrangement is the hour,
         because three scenes in one room at the same minute is the thing the
         arrangements exist to stop */
      var hr = slot(arr, [8, 11, 15]);
      s += c(1180, 150, 62, PAPER) + c(1180, 150, 62, 'none')
           .replace('fill="none"', 'fill="none" stroke="' + STEEL2 +
                    '" stroke-width="7"');
      s += line(1180, 150, 1180, 104, INK, 7);
      s += line(1180, 150, 1180 + Math.round(38 * Math.sin(hr / 12 * 2 * Math.PI)),
                150 - Math.round(38 * Math.cos(hr / 12 * 2 * Math.PI)), INK, 9);
      return stage(s);
    },
    mid: function (arr) {
      /* THE CHAIR IS DRAWN FIRST, so the desk stands in front of it. Drawn after,
         it was a chair pasted over the desk top at x=1160 - beside the desk, not
         behind it, and reading as a lectern. How far it is pushed in is the
         arrangement. */
      var cx = slot(arr, [900, 960, 860]);
      var s = shadow(cx, 700, 150);
      s += r(cx - 62, 500, 124, 24, STEEL2, 6);
      s += r(cx - 52, 524, 104, 110, '#9aa4ac', 4);
      s += r(cx - 8, 634, 16, 62, STEEL2, 3);
      /* the desk itself - its top is the declared surface at y=560 */
      s += shadow(820, 712, 660);
      s += r(520, 560, 600, 152, WOOD, 6) + r(520, 548, 600, 20, WOOD2, 4);
      s += r(548, 600, 544, 10, '#8a6540', 3);
      /* a plant, because every reception in Damascus has one */
      s += shadow(300, 700, 150);
      s += r(258, 600, 84, 100, '#a9663f', 6);
      s += p('M 300 600 C 240 540 236 470 268 428 C 292 480 296 540 300 600 Z',
             OLIVE);
      s += p('M 300 600 C 360 540 364 466 332 424 C 308 478 304 540 300 600 Z',
             '#5d6840');
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the visitors' book somebody's name is spelled into, the desk
         plate that says what this desk is, and the telephone cycle 1.6 is held on.
         The declared surface is 520..1120, so everything here - shadows included -
         is inside it; see SURFACES and the defect that produced that check. */
      /* ⚠ EVERY ONE OF THESE NUMBERS IS BOUNDED, AND TWO OF THEM WERE NOT. The desk
         runs 520..1120 and `sit` draws a shadow WIDER than the prop it is under, so
         a prop whose own right edge is on the desk can still paint past the end of
         it: the desk plate at x=1040 is 128 wide, 1168, and arrangements 1 and 2
         both hung it over the edge. The bound per prop is written beside it. */
      var TOP = 560, s = '';
      /* book  x-13 .. x+197  =>  533 <= bk <= 923
         phone x-9  .. x+114  =>  529 <= ph <= 1006
         plate x    .. x+128  =>  520 <= pl <= 992                                */
      var P = slot(arr, [{ bk: 540, ph: 760, pl: 900 },
                         { bk: 700, ph: 540, pl: 940 },
                         { bk: 860, ph: 540, pl: 700 }]);
      /* the open visitors' book - two pages, ruled, with the words at the top */
      s += sit(P.bk + 92, TOP, 210);
      s += rest(P.bk, TOP, 184, 14, PAPER, 3);
      s += p('M ' + P.bk + ' ' + (TOP - 14) + ' L ' + (P.bk + 92) + ' ' + (TOP - 26)
             + ' L ' + (P.bk + 184) + ' ' + (TOP - 14) + ' L ' + (P.bk + 184) + ' '
             + (TOP - 2) + ' L ' + P.bk + ' ' + (TOP - 2) + ' Z', PAPER);
      s += text(P.bk + 14, TOP - 16, 'NAME', 13, STEEL2, 'start', 700);
      s += text(P.bk + 112, TOP - 16, 'TIME', 13, STEEL2, 'start', 700);
      for (var i = 0; i < 2; i++) {
        s += line(P.bk + 14, TOP - 6 + i * 4, P.bk + 92, TOP - 9 + i * 4, INK, 3);
      }
      /* the telephone - a base, a handset lying across it, and a cord */
      s += sit(P.ph + 46, TOP, 110);
      s += rest(P.ph, TOP, 92, 30, INK, 5);
      s += rest(P.ph + 6, TOP - 30, 80, 16, '#4b535c', 6);
      s += p('M ' + (P.ph + 88) + ' ' + (TOP - 22) + ' q 26 14 10 30', 'none',
             ' stroke="#4b535c" stroke-width="5"');
      /* the desk plate, with the word on it */
      s += rest(P.pl, TOP, 128, 36, STEEL2, 3);
      s += text(P.pl + 64, TOP - 12, 'RECEPTION', 17, PAPER, 'middle', 800);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 2 · THE OPEN-PLAN OFFICE
     Unit 2: the working day, hour by hour - opening times, how often, what you are
     doing now, and asking somebody politely. The room's job is to carry TIME, so
     it has a clock whose hands move with the arrangement and a weekly timetable
     with real days and real hours on it.                                          */
  MINE.openplan = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e2dacb') + r(0, 0, W, 190, '#d4cab8');
      s += r(0, 650, W, 250, FLOOR) + r(0, 650, W, 16, FLOOR2);
      /* THE WEEK, on the wall, in the author's own order - the Syrian week starts
         on Sunday and the book's timetable does too. Cycle 2.7 reads this board. */
      s += r(60, 60, 760, 330, PAPER, 8);
      s += r(60, 60, 760, 54, STEEL2, 4);
      s += text(440, 100, 'THIS WEEK  ·  SHAM TRADING', 24, PAPER, 'middle', 800);
      var DAYS = [['SUN', '08:00 - 17:00'], ['MON', '08:00 - 17:00'],
                  ['TUE', '08:00 - 17:00'], ['WED', '08:00 - 15:00'],
                  ['THU', '08:00 - 13:00']];
      for (var i = 0; i < DAYS.length; i++) {
        s += text(88, 158 + i * 50, DAYS[i][0], 22, RUST, 'start', 800);
        s += text(190, 158 + i * 50, DAYS[i][1], 22, INK, 'start', 600);
        s += line(88, 170 + i * 50, 792, 170 + i * 50, '#ddd5c6', 2);
      }
      /* and the one thing that changes week to week, circled */
      var mark = slot(arr, [3, 4, 2]);
      s += r(174, 136 + mark * 50, 230, 32, 'none', 6).replace('fill="none"',
            'fill="none" stroke="' + RUST + '" stroke-width="5"');
      s += text(430, 158 + mark * 50, 'STOCK COUNT', 20, RUST, 'start', 800);
      /* THE CLOCK, and the hour is the arrangement: eight, one, five - the three
         times this unit actually teaches. */
      var hr = slot(arr, [8, 13, 17]);
      s += c(1240, 190, 110, PAPER);
      s += c(1240, 190, 110, 'none').replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="10"');
      for (var t = 0; t < 12; t++) {
        var a = t / 12 * 2 * Math.PI;
        s += c(1240 + Math.round(88 * Math.sin(a)),
               190 - Math.round(88 * Math.cos(a)), 5, STEEL2);
      }
      var ha = (hr % 12) / 12 * 2 * Math.PI;
      s += line(1240, 190, 1240 + Math.round(52 * Math.sin(ha)),
                190 - Math.round(52 * Math.cos(ha)), INK, 12);
      s += line(1240, 190, 1240, 108, INK, 8);
      s += text(1240, 342, hr + ':00', 30, STEEL2, 'middle', 700);
      return stage(s);
    },
    mid: function (arr) {
      /* two desks, side by side, because 2.4 is "what are you doing now?" and the
         answer comes from the person at the next desk */
      var s = '';
      var xs = [220, 900];
      for (var d = 0; d < xs.length; d++) {
        var x = xs[d];
        s += shadow(x + 240, 726, 520);
        s += r(x, 572, 480, 154, WOOD, 6) + r(x, 560, 480, 20, WOOD2, 4);
        /* the screen on it, switched on in one arrangement and off in another */
        var on = slot(arr + d, [true, false, true]);
        s += r(x + 150, 452, 180, 108, INK, 6);
        s += r(x + 160, 462, 160, 88, on ? '#9cc4d8' : '#4b535c', 3);
        s += r(x + 216, 560, 48, 14, STEEL2, 3);
        /* the chair */
        var cx2 = x + slot(arr + d, [400, 436, 372]);
        s += shadow(cx2, 716, 140);
        s += r(cx2 - 58, 540, 116, 22, STEEL2, 6);
        s += r(cx2 - 48, 562, 96, 92, '#9aa4ac', 4);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESKS: the diary the day is read from, the tray the post waits in,
         and a glass of tea. The surface is declared 180..1420 at y=572. */
      var TOP = 572, s = '';
      /* diary x-10 .. x+210   tray x-10 .. x+150   tea x-9 .. x+61
         the desk runs 180..1420, so the tray's own bound is tr <= 1270 - it was
         1280 in the third arrangement and painted to 1430 */
      var P = slot(arr, [{ dy: 300, tr: 980, tea: 760 },
                         { dy: 960, tr: 260, tea: 1300 },
                         { dy: 620, tr: 1240, tea: 240 }]);
      /* the desk diary, open, with two columns of hours */
      s += sit(P.dy + 100, TOP, 220);
      s += rest(P.dy, TOP, 200, 16, '#efe7d8', 3);
      s += p('M ' + P.dy + ' ' + (TOP - 16) + ' L ' + (P.dy + 100) + ' '
             + (TOP - 30) + ' L ' + (P.dy + 200) + ' ' + (TOP - 16) + ' Z', PAPER);
      s += text(P.dy + 16, TOP - 18, '08:00', 12, INK, 'start', 700);
      s += text(P.dy + 120, TOP - 18, '13:00', 12, INK, 'start', 700);
      s += line(P.dy + 14, TOP - 8, P.dy + 94, TOP - 19, STEEL2, 3);
      s += line(P.dy + 118, TOP - 19, P.dy + 190, TOP - 8, STEEL2, 3);
      /* the post tray, with two envelopes in it */
      s += sit(P.tr + 70, TOP, 160);
      s += rest(P.tr, TOP, 140, 20, STEEL2, 4);
      s += rest(P.tr + 10, TOP - 20, 120, 14, PAPER, 2);
      s += rest(P.tr + 16, TOP - 34, 108, 12, '#f2ece0', 2);
      s += text(P.tr + 70, TOP - 42, 'POST', 14, STEEL2, 'middle', 800);
      /* a glass of tea, the small kind, on a saucer */
      s += sit(P.tea + 26, TOP, 70);
      s += rest(P.tea, TOP, 52, 8, '#d8d0c0', 3);
      s += p('M ' + (P.tea + 8) + ' ' + (TOP - 8) + ' L ' + (P.tea + 44) + ' '
             + (TOP - 8) + ' L ' + (P.tea + 38) + ' ' + (TOP - 56) + ' L '
             + (P.tea + 14) + ' ' + (TOP - 56) + ' Z', '#c97f3f');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 3 · THE WAREHOUSE
     Unit 3: there is and there are, exactly where something is, what you have got
     on the shelves, the equipment, and directions INSIDE a building. So the room
     has to be navigable: a floor plan with the words on it, numbered bays, and a
     set of drawers whose second drawer is a thing a learner can point at.         */
  MINE.warehouse = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#d9d2c5') + r(0, 0, W, 180, '#cbc3b3');
      s += r(0, 648, W, 252, '#c2b7a3') + r(0, 648, W, 16, FLOOR2);
      /* the racking, three bays, each labelled the way the unit addresses them */
      for (var b = 0; b < 3; b++) {
        var x = 40 + b * 330;
        s += r(x, 196, 300, 452, '#c0b5a2', 6);
        for (var sh = 0; sh < 4; sh++) {
          s += r(x, 196 + sh * 113, 300, 14, STEEL2, 3);
        }
        s += r(x + 8, 160, 120, 34, PAPER, 4);
        s += text(x + 68, 186, 'BAY ' + (b + 1), 19, INK, 'middle', 800);
      }
      /* THE FLOOR PLAN, with the four words a direction in this unit uses. Cycle
         3.5 is "go down the stairs and turn left", and a plan with ruled boxes and
         no words would be a reading exercise left blank - see the note at the top
         of this file. */
      s += r(1080, 150, 470, 400, PAPER, 8);
      s += r(1080, 150, 470, 46, STEEL2, 4);
      s += text(1315, 184, 'FLOOR PLAN  ·  GROUND', 21, PAPER, 'middle', 800);
      var RM = [[1104, 212, 200, 130, 'OFFICE'], [1316, 212, 214, 130, 'COUNTER'],
                [1104, 354, 200, 180, 'WAREHOUSE'], [1316, 354, 214, 86, 'YARD']];
      for (var i = 0; i < RM.length; i++) {
        s += r(RM[i][0], RM[i][1], RM[i][2], RM[i][3], '#eee7d9', 4);
        s += r(RM[i][0], RM[i][1], RM[i][2], RM[i][3], 'none', 4)
             .replace('fill="none"', 'fill="none" stroke="' + STEEL2 +
                      '" stroke-width="4"');
        s += text(RM[i][0] + RM[i][2] / 2, RM[i][1] + 34, RM[i][4], 17, INK,
                  'middle', 700);
      }
      s += r(1316, 452, 214, 82, '#e3d9c9', 4);
      s += text(1423, 500, 'STAIRS', 17, RUST, 'middle', 800);
      /* YOU ARE HERE moves with the arrangement, so the plan is read again */
      var here = slot(arr, [[1204, 430], [1423, 400], [1204, 262]]);
      s += c(here[0], here[1], 13, RUST);
      s += c(here[0], here[1], 22, 'none').replace('fill="none"',
            'fill="none" stroke="' + RUST + '" stroke-width="4"');
      return stage(s);
    },
    mid: function (arr) {
      /* WHAT IS ON THE SHELVES, and it is not all the same size - unit 3.3 asks
         "have we got any plastic wrap?" and the answer is a shape on a shelf */
      var s = '';
      var cols = ['#b4885c', '#a8714a', '#c49a68', '#9c8f80'];
      for (var b = 0; b < 3; b++) {
        var x = 40 + b * 330;
        for (var sh = 0; sh < 4; sh++) {
          var top = 196 + sh * 113 + 14;
          var n = slot(arr + b + sh, [2, 3, 1]);
          for (var i = 0; i < n; i++) {
            var wd = 56 + ((b + sh + i) % 3) * 26;
            s += rest(x + 16 + i * 96, top + 99, wd, 62 + ((i + sh) % 2) * 20,
                      cols[(b + sh + i) % 4], 4);
          }
        }
      }
      /* THE DRAWERS, and one of them is open - "it's in the second drawer" is a
         whole cycle, so which drawer is open is the arrangement */
      var open = slot(arr, [1, 2, 0]);
      var dx = 1150;
      s += shadow(dx + 170, 712, 390);
      s += r(dx, 430, 340, 282, '#9b8f7c', 6);
      var LAB = ['FIRST', 'SECOND', 'THIRD'];
      for (var d = 0; d < 3; d++) {
        var dy = 442 + d * 90;
        s += r(dx + 12, dy, 316, 78, d === open ? '#cfc4b0' : '#b2a692', 4);
        s += r(dx + 126, dy + 32, 88, 12, STEEL2, 6);
        s += text(dx + 28, dy + 44, LAB[d], 17, INK, 'start', 700);
        if (d === open) {
          s += r(dx + 12, dy + 78, 316, 16, '#8a7f6c', 3);
          s += rest(dx + 40, dy + 70, 70, 28, PAPER, 2);
        }
      }
      /* the ladder, which is one of the three things 3.4 describes */
      var lx = slot(arr, [1010, 980, 1046]);
      s += shadow(lx + 30, 714, 150);
      s += p('M ' + lx + ' 714 L ' + (lx + 54) + ' 352', 'none',
             ' stroke="' + STEEL2 + '" stroke-width="12"');
      s += p('M ' + (lx + 94) + ' 714 L ' + (lx + 70) + ' 352', 'none',
             ' stroke="' + STEEL2 + '" stroke-width="12"');
      for (var k = 0; k < 6; k++) {
        var ry = 400 + k * 62;
        s += line(lx + 8 + (714 - ry) * 0.02, ry, lx + 92 - (714 - ry) * 0.01, ry,
                  '#a9b3ba', 9);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE FLOOR, in the gaps between the actor columns at 24%, 66% and 45%
         => 384, 1056, 720, each 272 wide: the gaps are 0..248, 520..584, 856..920
         and 1192..1600. Both props are ankle-to-knee height, so their tops are
         well below WAIST_Y and `clearOf` exempts them as furniture - but they are
         put in the gaps anyway, because an exemption is not a reason. */
      var FLOOR_Y = 886, s = '';
      var P = slot(arr, [{ wrap: 40, stack: 1250 },
                         { wrap: 1310, stack: 60 },
                         { wrap: 1220, stack: 1380 }]);
      /* the roll of plastic wrap, standing on its end, with its own label */
      s += shadow(P.wrap + 54, FLOOR_Y, 150);
      s += rest(P.wrap, FLOOR_Y, 108, 210, '#9fb6c2', 10);
      s += '<ellipse cx="' + (P.wrap + 54) + '" cy="' + (FLOOR_Y - 210)
         + '" rx="54" ry="16" fill="#c3d4dc"/>';
      s += rest(P.wrap + 10, FLOOR_Y - 96, 88, 40, PAPER, 3);
      s += text(P.wrap + 54, FLOOR_Y - 68, 'WRAP', 16, INK, 'middle', 800);
      /* a stack of flat cartons, which is what "we have got none made up" looks
         like on a warehouse floor */
      s += shadow(P.stack + 86, FLOOR_Y, 210);
      for (var i = 0; i < 5; i++) {
        s += rest(P.stack + i * 3, FLOOR_Y - i * 22, 170, 22,
                  i % 2 ? '#b4885c' : '#c49a68', 3);
      }
      return stage(s);
    }
  };

  /* -------------------------------------------------- 4 · THE ORDER DESK
     Unit 4: how much and how many, what is finished and what is low, a process in
     order, and placing an order ON THE TELEPHONE. The desk stands in the warehouse
     because that is where the stock list is kept, and the telephone is the one
     object the whole unit happens through.                                        */
  MINE.orderdesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#ded6c8') + r(0, 0, W, 170, '#d0c7b6');
      s += r(0, 644, W, 256, '#c5baa6') + r(0, 644, W, 16, FLOOR2);
      /* shelves behind, dimmer than the warehouse's own - this is a corner of it */
      for (var b = 0; b < 2; b++) {
        var x = 40 + b * 300;
        s += r(x, 230, 270, 414, '#cbc1ae', 6);
        for (var sh = 0; sh < 3; sh++) {
          s += r(x, 230 + sh * 138, 270, 12, '#a3aeb6', 3);
          var n2 = slot(arr + b + sh, [2, 1, 3]);
          for (var i2 = 0; i2 < n2; i2++) {
            s += rest(x + 18 + i2 * 82, 230 + sh * 138 + 126, 66, 54,
                      i2 % 2 ? '#bfae96' : '#cdbca2', 3);
          }
        }
      }
      /* THE STOCK BOARD - the words and the numbers this unit says out loud. The
         third column is the one 4.3 teaches: finished, low, none left. */
      s += r(700, 86, 850, 420, PAPER, 8);
      s += r(700, 86, 850, 52, STEEL2, 4);
      s += text(1125, 124, 'STOCK  ·  THIS MORNING', 23, PAPER, 'middle', 800);
      var ST = [['TAPE', '12 rolls', 'OK'], ['WRAP', '2 rolls', 'LOW'],
                ['CARTONS', '140', 'OK'], ['LABELS', '0', 'NONE LEFT'],
                ['PENS', '6', 'LOW']];
      for (var i = 0; i < ST.length; i++) {
        var y = 180 + i * 64;
        s += text(726, y, ST[i][0], 22, INK, 'start', 700);
        s += text(1050, y, ST[i][1], 22, STEEL2, 'start', 600);
        s += text(1310, y, ST[i][2], 21,
                  ST[i][2] === 'OK' ? '#2f7d4f' : RUST, 'start', 800);
        s += line(726, y + 14, 1524, y + 14, '#ded6c6', 2);
      }
      /* and which line the arrangement points at, so the board is read again */
      var row = slot(arr, [3, 1, 4]);
      s += p('M 1480 ' + (180 + row * 64 - 8) + ' l 44 0 l 0 -12 l 26 18 l -26 18 '
             + 'l 0 -12 l -44 0 Z', RUST);
      return stage(s);
    },
    mid: function (arr) {
      /* the desk - top is the declared surface at y=560 */
      var s = shadow(800, 718, 820);
      s += r(420, 560, 760, 158, WOOD, 6) + r(420, 548, 760, 20, WOOD2, 4);
      s += r(452, 604, 696, 10, '#8a6540', 3);
      /* the pedestal of order pads under it */
      s += r(452, 614, 160, 104, '#b2a692', 4);
      for (var i = 0; i < 3; i++) {
        s += r(464, 626 + i * 32, 136, 22, PAPER, 2);
      }
      /* the chair, pulled out by a different amount each time */
      var cx = slot(arr, [1240, 1286, 1210]);
      s += shadow(cx, 708, 148);
      s += r(cx - 60, 512, 120, 24, STEEL2, 6);
      s += r(cx - 50, 536, 100, 100, '#9aa4ac', 4);
      s += r(cx - 8, 636, 16, 64, STEEL2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the telephone the order is placed on, the stock list it is
         read from, the order pad it is written on, and the pen. Surface 420..1180. */
      /* ⚠ AND NOTHING HERE RISES INTO THE CHEST BAND. The desk top is y=560 and the
         chest band ends at y=504, so a prop on this desk may be 56 tall and no
         more - and three of these were taller: the stock list's raised page
         reached y=484 and the off-hook handset, standing on its end, reached 468.
         Both were inside a speaker's column, which is 10.5% of a body painted over
         in every arrangement. A desk prop is SHORT or it is in a gap; these are
         short, because a telephone and a sheet of paper are. */
      var TOP = 560, s = '';
      /* phone x-10 .. x+180   sheet x-8 .. x+192   pad x-15 .. x+135
         the desk runs 420..1180, so 430 <= ph <= 1000 */
      var P = slot(arr, [{ ph: 460, sheet: 700, pad: 980 },
                         { ph: 980, sheet: 700, pad: 450 },
                         { ph: 450, sheet: 940, pad: 690 }]);
      /* the telephone, handset OFF the base in one arrangement - because 4.6 is
         "is that everything?" and that is said with the handset in your hand. It
         lies BESIDE the base rather than standing: a handset on its end is 92 tall
         and this desk has 56 to give. */
      var off = slot(arr, [false, true, false]);
      s += sit(P.ph + 50, TOP, 120);
      s += rest(P.ph, TOP, 100, 32, INK, 5);
      if (off) {
        s += rest(P.ph + 108, TOP, 72, 20, '#4b535c', 7);
        s += p('M ' + (P.ph + 96) + ' ' + (TOP - 26) + ' q 22 22 14 16', 'none',
               ' stroke="#4b535c" stroke-width="5"');
      } else {
        s += rest(P.ph + 8, TOP - 32, 84, 18, '#4b535c', 7);
      }
      /* the stock list - a sheet with the order number and a quantity on it */
      s += sit(P.sheet + 92, TOP, 200);
      s += rest(P.sheet, TOP, 184, 12, PAPER, 2);
      s += p('M ' + P.sheet + ' ' + (TOP - 12) + ' L ' + (P.sheet + 184) + ' '
             + (TOP - 12) + ' L ' + (P.sheet + 172) + ' ' + (TOP - 50) + ' L '
             + (P.sheet + 12) + ' ' + (TOP - 50) + ' Z', PAPER);
      s += text(P.sheet + 28, TOP - 34, 'ORDER 4087', 13, INK, 'start', 800);
      s += text(P.sheet + 28, TOP - 18, '12 rolls  ·  40 boxes', 12, STEEL2,
                'start', 600);
      /* the order pad, and the pen lying on it */
      s += sit(P.pad + 60, TOP, 150);
      s += rest(P.pad, TOP, 120, 20, '#f2ece0', 3);
      s += rest(P.pad + 6, TOP - 20, 108, 10, PAPER, 2);
      s += p('M ' + (P.pad + 18) + ' ' + (TOP - 32) + ' L ' + (P.pad + 104) + ' '
             + (TOP - 44), 'none',
             ' stroke="' + INK + '" stroke-width="7" stroke-linecap="round"');
      s += c(P.pad + 108, TOP - 45, 5, RUST);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 5 · THE PAY COUNTER
     Unit 5: a price, two offers compared, the best of several, too expensive, whose
     invoice it is, taking payment and giving change. A1's `counter` is a TRADE
     counter - goods handed over a top. This one is where the money is: a price
     list with numbers on it, a till, an invoice on a spike and a receipt roll.    */
  MINE.paydesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e0d7c7') + r(0, 0, W, 200, '#d2c8b6');
      s += r(0, 636, W, 264, FLOOR) + r(0, 636, W, 16, FLOOR2);
      /* THE PRICE LIST, in figures, because every cycle of this unit says one of
         these numbers out loud. The third column is what 5.2 compares. */
      /* ⚠ THE BOARD ENDS AT y=408, AND IT USED TO END AT 510. The invoice spike in
         front of it rises to y=398, so with a board reaching 510 the spike and its
         four invoices were drawn straight across the bottom two prices and the
         word INVOICES landed on "DELIVERY, city". A horizontal gap between the
         actor columns is not the only thing a tall prop needs: it needs CLEAR WALL
         BEHIND IT, and this file had never said so. The two are reconciled here by
         ending the board above the spike rather than by moving the spike, because
         a counter's invoice spike stands where the person taking the money is. */
      s += r(60, 70, 900, 338, PAPER, 8);
      s += r(60, 70, 900, 48, STEEL2, 4);
      s += text(510, 104, 'PRICE LIST  ·  SYP', 23, PAPER, 'middle', 800);
      var PR = [['TAPE, roll', '4 000', 'Damascus'],
                ['WRAP, roll', '12 000', 'Aleppo'],
                ['CARTON, large', '2 500', 'Homs'],
                ['LABELS, 100', '7 500', 'Damascus'],
                ['DELIVERY, city', '15 000', '-']];
      for (var i = 0; i < PR.length; i++) {
        var y = 156 + i * 58;
        s += text(88, y, PR[i][0], 21, INK, 'start', 700);
        s += text(520, y, PR[i][1], 21, RUST, 'start', 800);
        s += text(720, y, PR[i][2], 19, STEEL2, 'start', 600);
        s += line(88, y + 12, 934, y + 12, '#ded6c6', 2);
      }
      /* which two lines are being compared is the arrangement - 5.2 is "Aleppo is
         cheaper, but Homs is nearer", and a learner should see WHICH two */
      var pick = slot(arr, [[1, 2], [0, 3], [2, 4]]);
      for (var k = 0; k < 2; k++) {
        s += r(500, 136 + pick[k] * 58, 200, 28, 'none', 5)
             .replace('fill="none"', 'fill="none" stroke="' + RUST +
                      '" stroke-width="5"');
      }
      /* the shutter above the counter, half down in one arrangement - the counter
         closes at three, which is a sentence in 5.1 */
      var sh = slot(arr, [0, 120, 44]);
      s += r(1020, 70, 540, 70 + sh, '#a9b3ba', 4);
      for (var g = 0; g < 7; g++) {
        s += r(1020, 84 + g * 18, 540, 8, '#8e9aa3', 3);
      }
      s += r(1070, 190 + sh, 440, 54, PAPER, 4);
      s += text(1290, 228 + sh, 'TRADE COUNTER', 24, INK, 'middle', 800);
      return stage(s);
    },
    mid: function (arr) {
      /* the counter body - full width, because a counter IS in front of the people
         and that is what the waist band is declared furniture territory for */
      var s = shadow(800, 742, 1400);
      s += r(140, 548, 1320, 194, '#b9a98c', 6);
      s += r(140, 536, 1320, 22, WOOD2, 4);
      s += r(180, 600, 1240, 12, '#9c8c70', 3);
      /* THE TILL, standing on the counter. It keeps to the MIDDLE of the counter,
         because the two ends are spoken for: the receipt roll always stands in
         the left window and the invoice spike in the right one, and the fore
         layer draws over this one - a spike painted across a till reads as a
         spike standing ON it. */
      var tx = slot(arr, [880, 500, 1000]);
      s += r(tx, 430, 216, 106, '#8e9aa3', 6);
      s += r(tx + 14, 444, 188, 56, '#4b535c', 4);
      s += text(tx + 108, 484, '192 000', 24, '#cfe6d8', 'middle', 800);
      for (var i = 0; i < 3; i++) {
        s += r(tx + 22 + i * 62, 508, 46, 16, '#cfc4b0', 3);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE COUNTER: the invoice on its spike, the receipt roll, the notes and
         the coins. The surface is declared 140..1460 at y=548. */
      /* ⚠ THIS COUNTER'S TOP IS AT y=548 AND THE CHEST BAND ENDS AT 504, so it has
         44 of clearance - less than any other room here. Two of these three props
         are taller than that and are therefore placed IN A GAP between the actor
         columns, every arrangement, by construction:

           columns  25%, 69%, 46%  =>  400, 1104, 736, each 272 wide
                                   =>  264..536, 968..1240, 600..872
           gaps     0..264, 536..600, 872..968, 1240..1600
           surface  140..1460, so the windows are 140..264, 536..600,
                    872..968 and 1240..1454
                                                                               */
      var TOP = 548, s = '';
      /* spike  x-24 .. x+84  (108 wide), 120 tall -> the right window, always:
                it is the only one with clear wall behind it all the way down
         roll   x-10 .. x+104 (114 wide), 56 tall  -> the left window, always
         money  x-10 .. x+200,            20 tall  -> short, so anywhere      */
      var P = slot(arr, [{ spk: 1290, rl: 152, mny: 380 },
                         { spk: 1330, rl: 150, mny: 880 },
                         { spk: 1250, rl: 154, mny: 560 }]);
      /* THE SPIKE, which is how an invoice is kept on a counter in Damascus. Its
         top at TOP-120 = 428 is well up into the chest band, which is why it
         never stands in a column - and below the price board, which ends at 408,
         which is why it never stands in front of one. */
      s += sit(P.spk + 30, TOP, 90);
      s += rest(P.spk + 6, TOP, 48, 12, STEEL2, 3);
      s += r(P.spk + 26, TOP - 120, 8, 108, '#6f7a83', 3);
      for (var i = 0; i < 4; i++) {
        s += rest(P.spk - 24 + i * 4, TOP - 20 - i * 20, 108, 20, PAPER, 2);
      }
      s += text(P.spk + 30, TOP - 102, 'INVOICES', 13, STEEL2, 'middle', 800);
      /* the receipt roll, with a tail of paper coming out of it */
      s += sit(P.rl + 38, TOP, 92);
      s += rest(P.rl, TOP, 76, 30, '#cfc4b0', 6);
      s += c(P.rl + 38, TOP - 30, 20, PAPER);
      s += c(P.rl + 38, TOP - 30, 6, '#b2a692');
      s += p('M ' + (P.rl + 54) + ' ' + (TOP - 40) + ' l 50 -8 l 0 24 l -50 6 Z',
             PAPER);
      s += text(P.rl + 38, TOP - 56, 'RECEIPT', 11, STEEL2, 'middle', 700);
      /* the notes and the coins - 5.6 is "that's 192,000, out of 200,000", so
         there are notes handed over and change coming back */
      s += sit(P.mny + 90, TOP, 210);
      for (var n = 0; n < 4; n++) {
        s += rest(P.mny + n * 16, TOP - n * 5, 146, 9,
                  n % 2 ? '#a8c49a' : '#bcd8ac', 2);
      }
      s += text(P.mny + 74, TOP - 24, '200 000', 13, '#4a6b42', 'middle', 800);
      s += c(P.mny + 168, TOP - 11, 15, '#c9a94e');
      s += c(P.mny + 196, TOP - 11, 15, '#b89a44');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 6 · THE LOADING YARD
     Unit 6: how goods travel, how long a journey takes, the rules of a yard, a
     plan agreed, a reason given, a delay explained. The first cycle is "it goes by
     lorry, not by van", so BOTH are in the yard and which one is at the door is
     the arrangement - the comparison is the picture.                              */
  MINE.loadingyard = {
    back: function (arr) {
      var s = r(0, 0, W, H, SKY) + r(0, 0, W, 240, SKY2);
      s += r(0, 300, W, 300, STONE) + r(0, 300, W, 24, STONE2);
      /* the loading door, open, with its height written on it - a lorry that does
         not fit is a delay, which is cycle 6.6 */
      s += r(520, 330, 520, 270, '#4b535c', 4);
      s += r(520, 330, 520, 26, STEEL2, 4);
      s += r(560, 290, 440, 40, PAPER, 4);
      s += text(780, 320, 'LOADING  ·  MAX 4.0 m', 21, INK, 'middle', 800);
      /* THE YARD RULES, on the wall, as sentences - 6.3 is "you mustn't park at
         the loading door" and the rule it comes from has to be readable */
      s += r(1100, 70, 460, 300, PAPER, 8);
      s += r(1100, 70, 460, 46, RUST, 4);
      s += text(1330, 104, 'YARD RULES', 22, PAPER, 'middle', 800);
      var RU = ['10 km/h', 'NO PARKING AT THE DOOR', 'HARD HATS', 'REVERSE SLOWLY'];
      for (var i = 0; i < RU.length; i++) {
        s += c(1128, 156 + i * 52, 7, RUST);
        s += text(1148, 163 + i * 52, RU[i], 19, INK, 'start', 600);
      }
      /* the road out, and the gate on it */
      s += r(0, 600, W, 300, '#b9ae9c') + r(0, 600, W, 16, '#a79b88');
      for (var k = 0; k < 6; k++) {
        s += r(90 + k * 260, 820, 130, 12, PAPER, 6);
      }
      /* the weather, because 6.6's delay has a reason and 11.3 teaches the words */
      var cl = slot(arr, [0, 3, 1]);
      for (var q = 0; q < cl; q++) {
        s += '<ellipse cx="' + (180 + q * 520) + '" cy="' + (96 + (q % 2) * 34)
           + '" rx="140" ry="44" fill="#ffffff" opacity="0.55"/>';
      }
      return stage(s);
    },
    mid: function (arr) {
      /* WHICH VEHICLE IS AT THE DOOR. The lorry is long and high, the van is short
         and low, and they are drawn to different sizes because the whole of 6.1 is
         choosing between them. */
      var s = '';
      var lorryLeft = slot(arr, [true, false, true]);
      var LX = lorryLeft ? 60 : 980, VX = lorryLeft ? 1120 : 170;
      /* the lorry: cab, box body, four wheels */
      s += shadow(LX + 230, 684, 520);
      s += r(LX + 150, 356, 330, 250, '#b6ac98', 6);
      s += r(LX + 150, 356, 330, 22, WOOD2, 3);
      s += text(LX + 315, 456, 'SHAM', 30, INK, 'middle', 800);
      s += text(LX + 315, 496, 'TRADING', 26, STEEL2, 'middle', 700);
      s += r(LX + 20, 436, 140, 170, RUST, 6);
      s += r(LX + 44, 460, 92, 62, SKY2, 4);
      s += c(LX + 74, 622, 42, '#3e444b') + c(LX + 74, 622, 18, '#8e9aa3');
      s += c(LX + 256, 622, 42, '#3e444b') + c(LX + 256, 622, 18, '#8e9aa3');
      s += c(LX + 404, 622, 42, '#3e444b') + c(LX + 404, 622, 18, '#8e9aa3');
      /* the van: one box, two wheels, visibly smaller */
      s += shadow(VX + 150, 668, 330);
      s += r(VX + 60, 452, 230, 152, '#cfc4b0', 6);
      s += r(VX, 494, 70, 110, '#9aa4ac', 6);
      s += r(VX + 10, 508, 50, 42, SKY2, 3);
      s += text(VX + 176, 540, 'VAN', 24, STEEL2, 'middle', 800);
      s += c(VX + 64, 614, 32, '#3e444b') + c(VX + 64, 614, 14, '#8e9aa3');
      s += c(VX + 248, 614, 32, '#3e444b') + c(VX + 248, 614, 14, '#8e9aa3');
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE GROUND, in the gaps between the actor columns at 19%, 48% and 74%
         => 304, 768, 1184, each 272 wide: the gaps are 0..168, 440..632,
         904..1048 and 1320..1600. A cone is knee-high and a pallet truck is lower,
         so both are furniture territory - but both are placed in the gaps anyway. */
      var FLOOR_Y = 884, s = '';
      var P = slot(arr, [{ cone: 40, pt: 1340 },
                         { cone: 940, pt: 460 },
                         { cone: 1360, pt: 40 }]);
      /* the cone - which is how a yard says "not here" without a sentence */
      s += shadow(P.cone + 46, FLOOR_Y, 130);
      s += rest(P.cone, FLOOR_Y, 92, 18, '#c9542f', 4);
      s += p('M ' + (P.cone + 46) + ' ' + (FLOOR_Y - 176) + ' L ' + (P.cone + 16)
             + ' ' + (FLOOR_Y - 18) + ' L ' + (P.cone + 76) + ' '
             + (FLOOR_Y - 18) + ' Z', '#d8632f');
      s += rest(P.cone + 22, FLOOR_Y - 96, 48, 20, PAPER, 2);
      /* the pallet truck, with its handle up */
      s += shadow(P.pt + 110, FLOOR_Y, 250);
      s += rest(P.pt, FLOOR_Y, 210, 26, STEEL2, 4);
      s += rest(P.pt + 14, FLOOR_Y - 26, 182, 14, '#6f7a83', 3);
      s += p('M ' + (P.pt + 186) + ' ' + (FLOOR_Y - 40) + ' L ' + (P.pt + 214)
             + ' ' + (FLOOR_Y - 196), 'none',
             ' stroke="' + STEEL2 + '" stroke-width="14" stroke-linecap="round"');
      s += line(P.pt + 190, FLOOR_Y - 196, P.pt + 246, FLOOR_Y - 196, INK, 12);
      s += c(P.pt + 26, FLOOR_Y - 8, 14, '#3e444b');
      s += c(P.pt + 184, FLOOR_Y - 8, 14, '#3e444b');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 7 · THE MEETING ROOM
     Unit 7: what you can and can't do, asking somebody to change a time, the diary
     and next week, suggesting another time, accepting and refusing, what you
     prefer. A1 has a `meeting` room already and it is the telephone room of unit
     6 - a desk and a phone. This one is the room an APPOINTMENT happens in: a long
     table, and a wall planner with the week on it that a time can be moved on.    */
  MINE.boardroom = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e4dccd') + r(0, 0, W, 200, '#d6ccba');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      /* THE WALL PLANNER - five days, three slots each, and the meeting written in
         one of them. Which one is the arrangement, because 7.4 is "how about
         Tuesday instead?" and instead-of-what has to be visible. */
      s += r(80, 60, 1000, 380, PAPER, 8);
      s += r(80, 60, 1000, 52, STEEL2, 4);
      s += text(580, 98, 'NEXT WEEK', 24, PAPER, 'middle', 800);
      var DY = ['SUN', 'MON', 'TUE', 'WED', 'THU'];
      for (var d = 0; d < DY.length; d++) {
        var x = 100 + d * 194;
        s += r(x, 128, 180, 294, '#f3ecdd', 5);
        s += r(x, 128, 180, 42, '#cfc4b0', 4);
        s += text(x + 90, 158, DY[d], 20, INK, 'middle', 800);
        for (var t = 0; t < 3; t++) {
          s += line(x + 14, 206 + t * 68, x + 166, 206 + t * 68, '#ded6c6', 3);
          s += text(x + 14, 200 + t * 68, ['10:00', '12:00', '15:00'][t], 13,
                    STEEL2, 'start', 600);
        }
      }
      var day = slot(arr, [2, 3, 1]), slotN = slot(arr, [0, 2, 1]);
      s += r(104 + day * 194, 184 + slotN * 68, 172, 40, '#f6e0c8', 4);
      s += r(104 + day * 194, 184 + slotN * 68, 172, 40, 'none', 4)
           .replace('fill="none"', 'fill="none" stroke="' + RUST +
                    '" stroke-width="4"');
      s += text(190 + day * 194, 212 + slotN * 68, 'MR AYOUB', 15, RUST,
                'middle', 800);
      /* the window, and the blind down by a different amount */
      var bl = slot(arr, [120, 60, 200]);
      s += r(1180, 150, 360, 300, SKY2, 6);
      s += r(1180, 150, 360, 300, 'none', 6).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="10"');
      s += r(1180, 150, 360, bl, '#cfc4b0', 4);
      s += line(1180, 150 + bl, 1540, 150 + bl, '#b2a692', 6);
      return stage(s);
    },
    mid: function (arr) {
      /* the long table - its top is the declared surface at y=560 */
      var s = shadow(800, 752, 1300);
      s += r(180, 560, 1240, 192, '#a97c4e', 8);
      s += r(180, 548, 1240, 22, WOOD2, 4);
      s += r(230, 612, 1140, 12, '#8a6540', 3);
      /* three chairs behind it, one of them pushed back */
      var out = slot(arr, [0, 2, 1]);
      for (var i = 0; i < 3; i++) {
        var cx = 420 + i * 390, dy = i === out ? 26 : 0;
        s += shadow(cx, 720 + dy, 150);
        s += r(cx - 64, 486 + dy, 128, 26, STEEL2, 6);
        s += r(cx - 54, 512 + dy, 108, 102, '#9aa4ac', 4);
        s += r(cx - 8, 614 + dy, 16, 60, STEEL2, 3);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the diary open at two days, the invitation 7.7 reads, and a
         glass of water. The surface is declared 180..1420 at y=560. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ dy: 300, inv: 760, gl: 1180 },
                         { dy: 940, inv: 300, gl: 700 },
                         { dy: 620, inv: 1160, gl: 300 }]);
      /* the diary, open, with a day on each page and a time written */
      s += sit(P.dy + 110, TOP, 240);
      s += p('M ' + P.dy + ' ' + (TOP - 4) + ' L ' + (P.dy + 110) + ' '
             + (TOP - 22) + ' L ' + (P.dy + 220) + ' ' + (TOP - 4) + ' L '
             + (P.dy + 220) + ' ' + TOP + ' L ' + P.dy + ' ' + TOP + ' Z',
             '#efe7d8');
      s += p('M ' + (P.dy + 4) + ' ' + (TOP - 8) + ' L ' + (P.dy + 110) + ' '
             + (TOP - 24) + ' L ' + (P.dy + 110) + ' ' + (TOP - 8) + ' Z', PAPER);
      s += text(P.dy + 18, TOP - 12, 'TUE', 13, INK, 'start', 800);
      s += text(P.dy + 132, TOP - 12, 'WED', 13, INK, 'start', 800);
      s += line(P.dy + 16, TOP - 4, P.dy + 100, TOP - 15, STEEL2, 3);
      s += line(P.dy + 130, TOP - 15, P.dy + 212, TOP - 4, STEEL2, 3);
      /* the invitation, with the words a learner must read in 7.7 */
      s += sit(P.inv + 92, TOP, 200);
      /* ⚠ 56 IS ALL THE HEIGHT THIS TABLE HAS. Its top is y=560 and the chest band
         ends at 504, so the invitation that used to rise to y=468 - 92 tall, three
         lines of words, in the middle of a speaker's column in all three
         arrangements - is now a card lying almost flat with two lines on it. */
      s += rest(P.inv, TOP, 184, 10, PAPER, 2);
      s += p('M ' + P.inv + ' ' + (TOP - 10) + ' L ' + (P.inv + 184) + ' '
             + (TOP - 10) + ' L ' + (P.inv + 170) + ' ' + (TOP - 50) + ' L '
             + (P.inv + 14) + ' ' + (TOP - 50) + ' Z', PAPER);
      s += text(P.inv + 92, TOP - 36, 'MEETING  WED  10:00', 13, INK,
                'middle', 800);
      s += text(P.inv + 92, TOP - 20, 'Room 2  ·  1 hour', 11, STEEL2,
                'middle', 600);
      /* a glass of water, and the jug is not in this room because nobody pours */
      s += sit(P.gl + 24, TOP, 66);
      s += p('M ' + (P.gl + 4) + ' ' + (TOP - 2) + ' L ' + (P.gl + 44) + ' '
             + (TOP - 2) + ' L ' + (P.gl + 39) + ' ' + (TOP - 52) + ' L '
             + (P.gl + 9) + ' ' + (TOP - 52) + ' Z', '#d6e6ee');
      s += p('M ' + (P.gl + 8) + ' ' + (TOP - 6) + ' L ' + (P.gl + 40) + ' '
             + (TOP - 6) + ' L ' + (P.gl + 37) + ' ' + (TOP - 34) + ' L '
             + (P.gl + 11) + ' ' + (TOP - 34) + ' Z', '#9cc4d8');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 8 · THE TEA CORNER
     Unit 8: what you did last week, the verbs that do not follow the rule, how a
     week was, asking about something that happened, a short work story, and
     reacting so somebody goes on talking. None of that happens at a desk. It
     happens standing by the urn with a glass of tea, which is where this room is. */
  MINE.canteen = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e8e0d0') + r(0, 0, W, 190, '#dad0be');
      /* the tiled half-wall, because a tea corner has one */
      s += r(0, 380, W, 280, '#d3dbd6');
      for (var i = 0; i < 16; i++) {
        s += line(i * 100, 380, i * 100, 660, '#c2cbc5', 3);
      }
      s += line(0, 520, W, 520, '#c2cbc5', 3);
      s += r(0, 652, W, 248, FLOOR) + r(0, 652, W, 16, FLOOR2);
      /* the urn on its stand, with the words on it */
      s += r(140, 300, 220, 80, '#b2a692', 4);
      s += r(168, 150, 164, 152, '#a9b3ba', 10);
      s += r(168, 150, 164, 26, STEEL2, 6);
      s += c(250, 230, 26, '#8e9aa3');
      s += r(236, 288, 28, 28, STEEL2, 3);
      s += text(250, 128, 'HOT WATER', 19, STEEL2, 'middle', 800);
      /* the mugs on their hooks - how many are left is the arrangement, because a
         Thursday afternoon has fewer */
      var left = slot(arr, [5, 3, 6]);
      s += r(460, 290, 420, 14, WOOD2, 3);
      for (var m = 0; m < left; m++) {
        s += r(478 + m * 66, 304, 44, 48, PAPER, 5);
        s += p('M ' + (522 + m * 66) + ' 318 q 20 12 0 24', 'none',
               ' stroke="' + PAPER + '" stroke-width="7"');
      }
      /* the notice by the urn, with a sentence on it */
      s += r(980, 150, 440, 200, PAPER, 6);
      s += r(980, 150, 440, 40, OLIVE, 4);
      s += text(1200, 180, 'THE TEA CORNER', 20, PAPER, 'middle', 800);
      s += text(1004, 234, 'WASH YOUR OWN GLASS.', 19, INK, 'start', 600);
      s += text(1004, 268, 'THE URN IS OFF AT 16:00.', 19, INK, 'start', 600);
      s += text(1004, 316, 'Week ' + slot(arr, [14, 15, 16])
                + ' report: on the table.', 17, RUST, 'start', 700);
      return stage(s);
    },
    mid: function (arr) {
      /* the table - its top is the declared surface at y=584 */
      var s = shadow(800, 768, 1140);
      s += r(260, 584, 1080, 184, '#b9a98c', 10);
      s += r(260, 572, 1080, 22, WOOD2, 4);
      s += r(300, 638, 1000, 12, '#9c8c70', 3);
      /* two stools, one pulled out */
      var out = slot(arr, [0, 1, 1]);
      for (var i = 0; i < 2; i++) {
        var cx = 520 + i * 560, dy = i === out ? 30 : 0;
        s += shadow(cx, 742 + dy, 130);
        s += r(cx - 56, 520 + dy, 112, 22, WOOD2, 6);
        s += r(cx - 10, 542 + dy, 20, 192, STEEL2, 4);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: two tea glasses and the week's report. The surface is
         declared 260..1340 at y=584. */
      var TOP = 584, s = '';
      var P = slot(arr, [{ rp: 400, g1: 900, g2: 1060 },
                         { rp: 880, g1: 360, g2: 520 },
                         { rp: 640, g1: 1120, g2: 340 }]);
      /* the report, with a heading a learner reads and three ruled lines */
      s += sit(P.rp + 110, TOP, 240);
      /* this table's top is y=584, so 80 of clearance - and the report was 96 */
      s += rest(P.rp, TOP, 220, 10, PAPER, 2);
      s += p('M ' + P.rp + ' ' + (TOP - 10) + ' L ' + (P.rp + 220) + ' '
             + (TOP - 10) + ' L ' + (P.rp + 202) + ' ' + (TOP - 74) + ' L '
             + (P.rp + 18) + ' ' + (TOP - 74) + ' Z', PAPER);
      s += text(P.rp + 110, TOP - 56, 'LAST WEEK', 14, INK, 'middle', 800);
      for (var i = 0; i < 2; i++) {
        s += line(P.rp + 34 + i, TOP - 42 + i * 14, P.rp + 184 - i,
                  TOP - 42 + i * 14, '#cfc7b6', 3);
      }
      s += text(P.rp + 110, TOP - 18, 'A BUSY WEEK', 12, RUST, 'middle', 700);
      /* two glasses of tea, one full and one nearly finished - 8.6 is a
         conversation that has been going on for a while */
      var gs = [[P.g1, 62], [P.g2, slot(arr, [22, 48, 14])]];
      for (var k = 0; k < gs.length; k++) {
        var gx = gs[k][0], fill = gs[k][1];
        s += sit(gx + 24, TOP, 66);
        s += p('M ' + (gx + 4) + ' ' + (TOP - 2) + ' L ' + (gx + 44) + ' '
               + (TOP - 2) + ' L ' + (gx + 38) + ' ' + (TOP - 72) + ' L '
               + (gx + 10) + ' ' + (TOP - 72) + ' Z', '#e6dfd2');
        s += p('M ' + (gx + 7) + ' ' + (TOP - 5) + ' L ' + (gx + 41) + ' '
               + (TOP - 5) + ' L ' + (gx + 39) + ' ' + (TOP - 5 - fill) + ' L '
               + (gx + 9) + ' ' + (TOP - 5 - fill) + ' Z', '#c97f3f');
      }
      return stage(s);
    }
  };

  /* -------------------------------------------------- 9 · THE RULES CORRIDOR
     Unit 9: what you are responsible for, a company rule and the reason behind it,
     what is necessary and what is not, asking permission, taking a message, and a
     short work email. Every one of those is a thing that happens in the corridor
     between the office and the stairs: the rules are on the wall there, the book
     everybody signs is on a stand, and the message pad is beside the pigeon-holes. */
  MINE.noticeboard = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#ded8cb') + r(0, 0, W, 180, '#d0c9b9');
      s += r(0, 300, W, 340, '#e5ded0') + r(0, 296, W, 10, '#c9c1b1');
      s += r(0, 640, W, 260, FLOOR) + r(0, 640, W, 16, FLOOR2);
      /* THE STAFF RULES, as sentences. Cycle 9.2 is "everybody must sign the book"
         and 9.3 is "you don't have to come in on Saturday" - a MUST and a DON'T
         HAVE TO, which is the whole grammar of the unit. Both are on the board, in
         those words, because the board is what 9.7 asks the learner to explain. */
      s += r(60, 60, 820, 440, PAPER, 8);
      s += r(60, 60, 820, 54, RUST, 4);
      s += text(470, 100, 'STAFF RULES  ·  SHAM TRADING', 23, PAPER,
                'middle', 800);
      var RU = ['EVERYBODY MUST SIGN THE BOOK.',
                'YOU MUST WEAR YOUR BADGE.',
                'YOU MUSTN’T SMOKE INSIDE.',
                'YOU DON’T HAVE TO COME IN ON SATURDAY.',
                'ASK BEFORE YOU LEAVE EARLY.'];
      for (var i = 0; i < RU.length; i++) {
        var y = 164 + i * 66;
        s += c(92, y - 7, 8, i === 2 ? RUST : OLIVE);
        s += text(116, y, RU[i], 19, INK, 'start', 600);
        s += line(92, y + 20, 848, y + 20, '#ded6c6', 2);
      }
      /* which rule somebody has just been told is the arrangement */
      var hl = slot(arr, [0, 3, 2]);
      s += r(104, 136 + hl * 66, 744, 40, 'none', 5).replace('fill="none"',
            'fill="none" stroke="' + RUST + '" stroke-width="4"');
      /* the pigeon-holes, with a name on each and one slip sticking out */
      s += r(1000, 120, 540, 380, '#c4b9a5', 6);
      var NM = ['AYOUB', 'NADIA', 'BASSEL', 'NOUR', 'ABU YASSER', 'HALA'];
      var full = slot(arr, [3, 0, 5]);
      for (var h = 0; h < 6; h++) {
        var hx = 1014 + (h % 2) * 266, hy = 134 + Math.floor(h / 2) * 122;
        s += r(hx, hy, 252, 108, '#ded5c3', 4);
        s += text(hx + 12, hy + 28, NM[h], 16, STEEL2, 'start', 700);
        if (h === full) {
          s += rest(hx + 24, hy + 96, 180, 48, PAPER, 2);
          s += text(hx + 114, hy + 74, 'MESSAGE', 14, RUST, 'middle', 800);
        }
      }
      return stage(s);
    },
    mid: function (arr) {
      /* THE MESSAGE PAD on the wall - 9.5 is "can I take a message?" and the pad
         it is taken on is a thing, not an idea */
      var s = r(620, 300, 300, 170, PAPER, 6);
      s += r(620, 300, 300, 36, STEEL2, 4);
      s += text(770, 326, 'MESSAGES', 18, PAPER, 'middle', 800);
      var rows = slot(arr, [2, 3, 1]);
      for (var i = 0; i < rows; i++) {
        s += line(644, 372 + i * 32, 896, 372 + i * 32, '#cfc7b6', 4);
      }
      s += r(880, 466, 14, 70, STEEL2, 3);
      /* a bin, which is where 9.6's draft goes */
      var bx = slot(arr, [1420, 100, 1430]);
      s += shadow(bx + 56, 700, 140);
      s += p('M ' + bx + ' 560 L ' + (bx + 112) + ' 560 L ' + (bx + 98)
             + ' 700 L ' + (bx + 14) + ' 700 Z', '#9aa4ac');
      s += r(bx - 6, 548, 124, 16, STEEL2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* THE BOOK EVERYBODY SIGNS, open on its stand. It is the same object as the
         gate book of A1 unit 1 and deliberately so: a learner who signed in at the
         gate at A1 signs in at the office at A2, and the rule in 9.2 is about this
         book. Its reading top at 700 is far below WAIST_Y, so it is furniture and
         `clearOf` exempts it - which is why `noticeboard` is NOT in SURFACES: this
         layer paints on the floor, not on a desk. */
      var FLOOR_Y = 884, TOP = 700;
      var dx = slot(arr, [0, -210, 190]);
      var s = shadow(760, FLOOR_Y, 240);
      s += r(738, TOP, 46, FLOOR_Y - TOP - 16, WOOD2, 6);
      s += r(650, FLOOR_Y - 22, 222, 22, WOOD2, 6);
      s += p('M 580 726 L 760 694 L 760 774 L 580 806 Z', PAPER);
      s += p('M 940 726 L 760 694 L 760 774 L 940 806 Z', '#f2ece0');
      s += p('M 580 726 L 760 694 L 940 726', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="7" stroke-linejoin="round"');
      s += text(612, 744, 'NAME', 15, STEEL2, 'start', 700);
      s += text(798, 736, 'IN', 15, STEEL2, 'start', 700);
      s += text(868, 748, 'OUT', 15, STEEL2, 'start', 700);
      for (var i = 0; i < 3; i++) {
        s += line(612, 760 + i * 15, 706, 743 + i * 15, INK, 5);
        s += line(792, 744 + i * 15, 848, 754 + i * 15, INK, 5);
      }
      /* the pen on a string, because the one on the gate book walked off */
      s += p('M 880 788 L 908 742', 'none',
             ' stroke="' + INK + '" stroke-width="8" stroke-linecap="round"');
      s += c(910, 740, 6, RUST);
      s += p('M 880 788 q -40 36 -70 20', 'none',
             ' stroke="#8e9aa3" stroke-width="3"');
      return stage('<g transform="translate(' + dx + ',0)">' + s + '</g>');
    }
  };

  /* -------------------------------------------------- 10 · THE CLINIC
     Unit 10: what is wrong, advice about lifting and screens and breaks, the
     instructions on medicine, making an appointment, a safety instruction at the
     moment it matters, and what to say to somebody who is ill. The unit is half at
     work and half at the clinic; the clinic is the room, because the warehouse is
     already unit 3's and the advice comes from here.                              */
  MINE.clinic = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e2eae8') + r(0, 0, W, 190, '#d4dedb');
      s += r(0, 648, W, 252, '#cdd6d2') + r(0, 648, W, 16, '#bcc6c1');
      /* THE LIFTING POSTER, drawn, because 10.2 is advice about lifting and a
         poster of ruled lines would teach nothing. A figure with bent knees and a
         straight back, and the words under it. */
      s += r(70, 70, 420, 440, PAPER, 8);
      s += r(70, 70, 420, 46, '#2f7d4f', 4);
      s += text(280, 104, 'LIFTING', 22, PAPER, 'middle', 800);
      /* ⚠ THE FIGURE HAD NO ARMS, in a poster whose whole subject is how to hold
         a box. It read as a wishbone with a crate floating at its chest. A back
         that is STRAIGHT and knees that are BENT is the thing being taught, so
         the spine is one vertical line, the thighs angle forward, the shins drop
         straight, and two arms go down from the shoulders to the box at knee
         height - which is where a box you have lifted correctly actually is. */
      s += c(280, 178, 32, '#8a6540');              /* head                     */
      s += p('M 280 210 L 280 300', 'none',         /* a straight back          */
             ' stroke="#2f6f8f" stroke-width="30" stroke-linecap="round"');
      s += p('M 280 300 L 238 356 M 280 300 L 322 356', 'none',   /* thighs     */
             ' stroke="#2f6f8f" stroke-width="26" stroke-linecap="round"');
      s += p('M 238 356 L 238 438 M 322 356 L 322 438', 'none',   /* shins      */
             ' stroke="#2f6f8f" stroke-width="24" stroke-linecap="round"');
      s += p('M 238 438 L 214 438 M 322 438 L 346 438', 'none',   /* feet       */
             ' stroke="#2f6f8f" stroke-width="18" stroke-linecap="round"');
      s += p('M 254 226 L 254 330 M 306 226 L 306 330', 'none',   /* two arms   */
             ' stroke="#2f6f8f" stroke-width="18" stroke-linecap="round"');
      s += r(236, 330, 88, 58, WOOD, 5);            /* the box, at knee height  */
      s += r(236, 330, 88, 12, WOOD2, 3);
      s += text(280, 492, 'BEND YOUR KNEES.', 19, INK, 'middle', 700);
      /* THE APPOINTMENT BOARD - 10.4 makes one, so there is a board with times */
      s += r(560, 70, 480, 300, PAPER, 8);
      s += r(560, 70, 480, 46, '#2f6f8f', 4);
      s += text(800, 104, 'MEZZEH CLINIC', 22, PAPER, 'middle', 800);
      var AP = [['09:00', 'Dr Haddad'], ['11:30', 'Dr Haddad'],
                ['16:00', 'Dr Samaan']];
      for (var i = 0; i < AP.length; i++) {
        var y = 168 + i * 66;
        s += text(588, y, AP[i][0], 22, RUST, 'start', 800);
        s += text(700, y, AP[i][1], 21, INK, 'start', 600);
        s += line(588, y + 14, 1012, y + 14, '#ded6c6', 2);
      }
      var free = slot(arr, [2, 0, 1]);
      s += text(900, 168 + free * 66, 'FREE', 19, '#2f7d4f', 'start', 800);
      /* the window, with the shutter at a different height each time */
      var sh = slot(arr, [80, 160, 30]);
      s += r(1120, 120, 420, 320, '#bfdbe6', 6);
      s += r(1120, 120, 420, 320, 'none', 6).replace('fill="none"',
            'fill="none" stroke="#9aa4ac" stroke-width="10"');
      s += r(1120, 120, 420, sh, '#aeb8bc', 3);
      return stage(s);
    },
    mid: function (arr) {
      /* the examination couch, and the desk whose top is the declared surface */
      var s = shadow(430, 740, 560);
      s += r(180, 596, 500, 144, '#cfd8d4', 6);
      s += r(180, 560, 500, 40, '#5e8fa8', 8);
      s += r(180, 560, 180, 40, '#4e7e97', 8);
      s += r(300, 530, 120, 34, PAPER, 4);
      /* the roll of paper at the head of the couch */
      s += c(214, 548, 22, PAPER);
      /* the desk - the declared surface is 300..1300 at y=560, and this is the
         right-hand half of it */
      s += shadow(1060, 736, 620);
      s += r(760, 560, 540, 176, WOOD, 6) + r(760, 548, 540, 20, WOOD2, 4);
      /* ⚠ THE MONITOR WAS DRAWN ACROSS THE APPOINTMENT BOARD. Its plate sat at
         y=330..406 and the board behind it runs to y=370, so the clinic's three
         appointment times - which cycle 10.4 asks the learner to read - had a
         blood-pressure reading painted over them. It is a mid-layer prop, so no
         check in `gates/pbe_art.py` looks at it: that gate measures the FORE
         layer, because the fore layer is the one that paints over PEOPLE. Nothing
         measures what the mid layer paints over, and this is why that matters.
         The stand now sits below the board entirely. */
      var mx = slot(arr, [716, 1340, 716]);
      s += shadow(mx + 14, 716, 120);
      s += r(mx + 4, 500, 20, 216, '#8e9aa3', 4);
      s += r(mx - 40, 436, 108, 70, PAPER, 6);
      s += r(mx - 40, 436, 108, 70, 'none', 6).replace('fill="none"',
            'fill="none" stroke="#6f7a83" stroke-width="6"');
      s += text(mx + 14, 480, '120/80', 19, INK, 'middle', 800);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the medicine box with the instruction ON it - 10.3 is "twice
         a day, after meals" and that sentence is printed on a box, not said into
         the air - the appointment card, and a glass of water. Surface 300..1300. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ bx: 820, cd: 1080, gl: 400 },
                         { bx: 380, cd: 640, gl: 1200 },
                         { bx: 1140, cd: 380, gl: 760 }]);
      /* ⚠ THE BOX LIES FLAT, AND IT DID NOT. Standing upright with its lid and
         three lines of label it reached y=448 - 112 tall on a desk with 56 to give
         - and this room's gaps are 520..568 and 840..888, both 48 wide, so there
         was nowhere to stand it either. A medicine box lying on a desk with the
         instruction printed on its lid is what a clinic desk actually has on it,
         and 10.3's whole lesson ("twice a day, after meals") is still READ rather
         than only heard. */
      s += sit(P.bx + 78, TOP, 170);
      s += rest(P.bx, TOP, 156, 20, '#e8e0d0', 4);
      s += rest(P.bx, TOP - 20, 156, 30, '#2f7d4f', 4);
      s += text(P.bx + 78, TOP - 30, 'TABLETS  ·  TWICE A DAY', 13, PAPER,
                'middle', 800);
      s += text(P.bx + 78, TOP - 6, 'AFTER MEALS', 12, INK, 'middle', 700);
      /* the appointment card, with the time written on it */
      s += sit(P.cd + 70, TOP, 160);
      s += rest(P.cd, TOP, 140, 8, PAPER, 2);
      s += p('M ' + P.cd + ' ' + (TOP - 8) + ' L ' + (P.cd + 140) + ' '
             + (TOP - 8) + ' L ' + (P.cd + 128) + ' ' + (TOP - 44) + ' L '
             + (P.cd + 12) + ' ' + (TOP - 44) + ' Z', PAPER);
      s += text(P.cd + 70, TOP - 30, 'APPOINTMENT', 11, STEEL2, 'middle', 800);
      s += text(P.cd + 70, TOP - 15, slot(arr, ['09:00', '11:30', '16:00']), 13,
                RUST, 'middle', 800);
      /* a glass of water, for the tablets */
      s += sit(P.gl + 24, TOP, 66);
      s += p('M ' + (P.gl + 4) + ' ' + (TOP - 2) + ' L ' + (P.gl + 44) + ' '
             + (TOP - 2) + ' L ' + (P.gl + 39) + ' ' + (TOP - 50) + ' L '
             + (P.gl + 9) + ' ' + (TOP - 50) + ' Z', '#e0ecf1');
      s += p('M ' + (P.gl + 8) + ' ' + (TOP - 6) + ' L ' + (P.gl + 40) + ' '
             + (TOP - 6) + ' L ' + (P.gl + 37) + ' ' + (TOP - 34) + ' L '
             + (P.gl + 11) + ' ' + (TOP - 34) + ' Z', '#9cc4d8');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 11 · THE HOTEL DESK
     Unit 11: what you are going to do on a trip, reserving a room and saying what
     you need, the weather, what is and is not included, recommending something to
     a visitor, and reading a timetable. Bassel goes to Aleppo and Homs and the
     room he books is the one place the whole unit returns to.                     */
  MINE.hotel = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e9e0cf') + r(0, 0, W, 210, '#dbd1bd');
      s += r(0, 640, W, 260, '#bda98c') + r(0, 640, W, 16, '#a8957a');
      /* the hotel's name, behind the desk */
      s += r(420, 60, 760, 120, '#3f5668', 8);
      s += text(800, 118, 'HOTEL BARRON STREET', 34, PAPER, 'middle', 800);
      s += text(800, 158, 'ALEPPO', 22, '#cfe6d8', 'middle', 600);
      /* THE KEY RACK, with the room numbers - and which key is MISSING is the
         arrangement, because 11.2 books a room and 11.4 checks in to 412 */
      var gone = slot(arr, [3, 0, 7]);
      s += r(80, 230, 580, 300, '#c4b9a5', 6);
      for (var i = 0; i < 8; i++) {
        var kx = 100 + (i % 4) * 140, ky = 250 + Math.floor(i / 4) * 140;
        s += r(kx, ky, 124, 120, '#ded5c3', 4);
        s += text(kx + 62, ky + 32, String(410 + i), 19, STEEL2, 'middle', 800);
        if (i !== gone) {
          s += c(kx + 62, ky + 68, 13, '#c9a94e');
          s += p('M ' + (kx + 62) + ' ' + (ky + 78) + ' L ' + (kx + 62) + ' '
                 + (ky + 108) + ' M ' + (kx + 62) + ' ' + (ky + 100) + ' l 14 0',
                 'none', ' stroke="#c9a94e" stroke-width="6"');
        }
      }
      /* WHAT IS INCLUDED, on a board, in the words 11.4 asks about */
      s += r(1000, 230, 540, 300, PAPER, 8);
      s += r(1000, 230, 540, 44, '#2f6f8f', 4);
      s += text(1270, 262, 'INCLUDED', 21, PAPER, 'middle', 800);
      var IN = ['BREAKFAST  06:30 - 10:00', 'WI-FI, in the room',
                'CAR PARK  -  FULL'];
      for (var j = 0; j < IN.length; j++) {
        s += c(1026, 320 + j * 60, 8, j === 2 ? RUST : '#2f7d4f');
        s += text(1048, 328 + j * 60, IN[j], 19, INK, 'start', 600);
      }
      s += text(1026, 506, 'Check out by 12:00.', 18, STEEL2, 'start', 600);
      return stage(s);
    },
    mid: function (arr) {
      /* the reception desk - its top is the declared surface at y=552 */
      var s = shadow(810, 744, 940);
      s += r(380, 552, 860, 192, '#8a6540', 8);
      s += r(380, 540, 860, 22, '#6f4f33', 4);
      s += r(420, 604, 780, 12, '#6f4f33', 3);
      /* the luggage trolley, off to one side, in a gap: the actor columns are 22%,
         72% and 47% => 352, 1152, 752, each 272 wide, so the gaps are 0..216,
         488..616, 888..1016 and 1288..1600 */
      var tx = slot(arr, [1330, 40, 1320]);
      s += shadow(tx + 110, 724, 250);
      s += r(tx, 520, 220, 26, STEEL2, 4);
      s += r(tx + 6, 546, 16, 170, '#6f7a83', 3);
      s += r(tx + 198, 546, 16, 170, '#6f7a83', 3);
      s += r(tx + 20, 400, 14, 146, '#6f7a83', 3);
      var cases = slot(arr, [2, 1, 2]);
      for (var i = 0; i < cases; i++) {
        s += rest(tx + 34 + i * 10, 520 - i * 54, 150, 54,
                  i % 2 ? '#6b6256' : '#8a4b2f', 5);
      }
      s += c(tx + 18, 722, 14, '#3e444b');
      s += c(tx + 202, 722, 14, '#3e444b');
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the bell, the registration card, and the bus timetable 11.6
         reads. The surface is declared 380..1240 at y=552. */
      var TOP = 552, s = '';
      var P = slot(arr, [{ bl: 420, cd: 640, tt: 940 },
                         { bl: 1160, cd: 860, tt: 420 },
                         { bl: 700, cd: 420, tt: 920 }]);
      /* ⚠ 48 OF CLEARANCE. This desk's top is y=552 and the chest band ends at
         504, which is the tightest of the nine surfaces in this file after the pay
         counter - so the bell is a low dome, the card lies almost flat, and the
         timetable's three departures are two lines instead of a column. */
      s += sit(P.bl + 34, TOP, 90);
      s += rest(P.bl, TOP, 68, 10, '#b89a44', 4);
      s += p('M ' + (P.bl + 8) + ' ' + (TOP - 10) + ' a 26 22 0 0 1 52 0 Z',
             '#c9a94e');
      s += c(P.bl + 34, TOP - 36, 6, '#8a6a2a');
      /* the registration card, with the fields a guest fills in */
      s += sit(P.cd + 86, TOP, 190);
      s += rest(P.cd, TOP, 172, 8, PAPER, 2);
      s += p('M ' + P.cd + ' ' + (TOP - 8) + ' L ' + (P.cd + 172) + ' '
             + (TOP - 8) + ' L ' + (P.cd + 158) + ' ' + (TOP - 44) + ' L '
             + (P.cd + 14) + ' ' + (TOP - 44) + ' Z', PAPER);
      s += text(P.cd + 86, TOP - 30, 'REGISTRATION', 11, INK, 'middle', 800);
      s += text(P.cd + 30, TOP - 14, 'Name', 10, STEEL2, 'start', 600);
      s += line(P.cd + 70, TOP - 13, P.cd + 146, TOP - 15, '#cfc7b6', 3);
      /* the bus timetable - 11.6 is "the bus leaves at seven" */
      s += sit(P.tt + 90, TOP, 200);
      s += rest(P.tt, TOP, 180, 8, '#f2ece0', 2);
      s += p('M ' + P.tt + ' ' + (TOP - 8) + ' L ' + (P.tt + 180) + ' '
             + (TOP - 8) + ' L ' + (P.tt + 166) + ' ' + (TOP - 44) + ' L '
             + (P.tt + 14) + ' ' + (TOP - 44) + ' Z', PAPER);
      s += text(P.tt + 90, TOP - 30, 'BUS  ALEPPO', 11, INK, 'middle', 800);
      var TM = ['07:00', '11:00', '15:30'];
      for (var i = 0; i < TM.length; i++) {
        s += text(P.tt + 24 + i * 56, TOP - 14, TM[i], 10,
                  i === slot(arr, [0, 2, 1]) ? RUST : STEEL2, 'start', 700);
      }
      return stage(s);
    }
  };

  /* -------------------------------------------------- 12 · THE GUEST ROOM
     Unit 12: congratulating somebody, describing a custom, apologising properly,
     thanking somebody so they know what for, offering hospitality, and closing a
     conversation politely. The unit's own cycle 12.5 is "would you like some tea
     while you wait?" and 12.2 is "it's polite to stay for the second cup" - so the
     room is the one a guest is received in, and THE SECOND CUP IS DRAWN.          */
  MINE.guestroom = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#ece2d2') + r(0, 0, W, 200, '#ded3c0');
      s += r(0, 636, W, 264, '#b89c7c') + r(0, 636, W, 16, '#a4886a');
      /* the pattern a Damascus receiving room has on its wall, kept quiet */
      for (var i = 0; i < 9; i++) {
        s += c(110 + i * 180, 250, 26, '#e3d8c6');
        s += c(110 + i * 180, 250, 12, '#d8cbb6');
      }
      /* THE CERTIFICATE - 12.1 is "congratulations on the new branch", so the new
         branch is on the wall, framed, with the words on it */
      s += r(540, 320, 520, 240, PAPER, 6);
      s += r(540, 320, 520, 240, 'none', 6).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="14"');
      s += text(800, 382, 'SHAM TRADING CO.', 24, INK, 'middle', 800);
      s += text(800, 426, 'NEW BRANCH', 22, RUST, 'middle', 800);
      s += text(800, 468, slot(arr, ['HOMS', 'ALEPPO', 'LATAKIA']), 30, INK,
                'middle', 800);
      s += text(800, 516, '2026', 20, STEEL2, 'middle', 600);
      /* the window with its blind, and the shelf with the cups on it */
      var bl = slot(arr, [90, 150, 50]);
      s += r(80, 300, 360, 280, '#bfdbe6', 6);
      s += r(80, 300, 360, 280, 'none', 6).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="12"');
      s += r(80, 300, 360, bl, '#cfc4b0', 3);
      s += r(1160, 420, 380, 16, WOOD2, 3);
      var cups = slot(arr, [4, 6, 3]);
      for (var k = 0; k < cups; k++) {
        s += r(1182 + k * 58, 372, 40, 48, PAPER, 5);
        s += line(1182 + k * 58, 392, 1222 + k * 58, 392, '#c97f3f', 4);
      }
      return stage(s);
    },
    mid: function (arr) {
      /* two armchairs, facing, with the low table between them - the table's top
         is the declared surface at y=640 */
      var s = '';
      var seats = [330, 1270];
      for (var i = 0; i < seats.length; i++) {
        var x = seats[i];
        s += shadow(x, 764, 300);
        s += r(x - 130, 470, 260, 130, '#7a5c3f', 14);
        s += r(x - 140, 586, 280, 110, '#8a6a4a', 10);
        s += r(x - 150, 600, 36, 96, '#6b4e34', 8);
        s += r(x + 114, 600, 36, 96, '#6b4e34', 8);
        s += r(x - 112, 574, 224, 30, '#9a7a56', 10);
      }
      /* the low table */
      s += shadow(820, 760, 600);
      s += r(540, 640, 560, 110, '#a97c4e', 8);
      s += r(540, 628, 560, 20, WOOD2, 4);
      s += r(580, 688, 480, 10, '#8a6540', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the tray with the small glasses, and HOW MANY ARE POURED is
         the arrangement - one, two, three. Cycle 12.2 is a custom about the second
         cup, and a learner who is told about a second cup should be able to see
         one. The surface is declared 540..1100 at y=640. */
      var TOP = 640, s = '';
      var poured = slot(arr, [1, 2, 3]);
      /* tray x-10 .. x+310   card x-11 .. x+119
         the table runs 540..1100, so 550 <= tr <= 790 and 551 <= cd <= 981 */
      var P = slot(arr, [{ tr: 580, cd: 960 },
                         { tr: 700, cd: 560 },
                         { tr: 620, cd: 975 }]);
      /* the tray */
      s += sit(P.tr + 150, TOP, 320);
      s += rest(P.tr, TOP, 300, 16, '#b89a44', 6);
      s += rest(P.tr - 4, TOP - 16, 308, 8, '#c9a94e', 4);
      /* three small glasses on it, the poured ones with tea in them */
      for (var i = 0; i < 3; i++) {
        var gx = P.tr + 30 + i * 86;
        s += p('M ' + gx + ' ' + (TOP - 24) + ' L ' + (gx + 44) + ' '
               + (TOP - 24) + ' L ' + (gx + 38) + ' ' + (TOP - 86) + ' L '
               + (gx + 6) + ' ' + (TOP - 86) + ' Z', '#e9e2d5');
        if (i < poured) {
          s += p('M ' + (gx + 3) + ' ' + (TOP - 27) + ' L ' + (gx + 41) + ' '
                 + (TOP - 27) + ' L ' + (gx + 37) + ' ' + (TOP - 74) + ' L '
                 + (gx + 7) + ' ' + (TOP - 74) + ' Z', '#c97f3f');
        }
      }
      /* the thank-you card 12.4 is written on, standing folded */
      s += sit(P.cd + 54, TOP, 130);
      s += p('M ' + P.cd + ' ' + TOP + ' L ' + (P.cd + 54) + ' ' + (TOP - 14)
             + ' L ' + (P.cd + 108) + ' ' + TOP + ' Z', '#f2ece0');
      s += p('M ' + (P.cd + 4) + ' ' + (TOP - 2) + ' L ' + (P.cd + 54) + ' '
             + (TOP - 90) + ' L ' + (P.cd + 104) + ' ' + (TOP - 2) + ' Z', PAPER);
      s += text(P.cd + 54, TOP - 44, 'THANK', 13, INK, 'middle', 800);
      s += text(P.cd + 54, TOP - 26, 'YOU', 13, INK, 'middle', 800);
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

  /* ============================================================
     A2 BOOK 2 - UNITS 13 TO 24

     The same company, a year on. Nour is no longer new; the book's subjects are
     experience, forecasts, suppliers, complaints, email and the year's end. The
     rooms follow the subjects, not the furniture: a CV is talked about across a
     table, a forecast in front of a chart, a complaint over a box that has been
     opened, an email at a desk with nobody else in the picture.

     WHICH UNIT IS WHERE is in tools/pbe_build_unit.py's UNIT_SET, per book.
     ============================================================ */

  /* -------------------------------------------------- 13 · THE INTERVIEW ROOM
     Unit 13: experience, the present perfect, and the CV. Two chairs, one table,
     a CV on it, and a wall calendar whose year makes "for eleven years" visible. */
  MINE.interview = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e4ddd0') + r(0, 0, W, 196, '#d6cdbb');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      /* the years on the wall - the unit's whole grammar in one picture */
      s += r(180, 236, 420, 300, PAPER, 8);
      s += r(180, 236, 420, 46, STEEL2, 4);
      s += text(390, 268, 'SHAM TRADING', 22, PAPER, 'middle', 800);
      var YR = [['1998', 'FOUNDED'], ['2014', 'HOMS BRANCH'],
                ['2019', 'WAREHOUSE'], ['2025', 'ALEPPO']];
      for (var i = 0; i < YR.length; i++) {
        s += text(206, 330 + i * 52, YR[i][0], 24, RUST, 'start', 800);
        s += text(300, 330 + i * 52, YR[i][1], 22, INK, 'start', 600);
      }
      /* a framed photograph of the first lorry, because a company that has been
         somewhere eleven years has one on the wall */
      s += r(1060, 250, 360, 240, '#cfc4b2', 6);
      s += r(1076, 266, 328, 180, '#bfd0da');
      s += r(1096, 372, 240, 60, STEEL, 4) + c(1140, 440, 22, INK)
           + c(1300, 440, 22, INK);
      s += text(1240, 476, 'THE FIRST LORRY', 18, STEEL2, 'middle', 700);
      return stage(s);
    },
    mid: function (arr) {
      /* two chairs facing each other across the table; which side is pushed in
         is the arrangement */
      var inx = slot(arr, [0, 26, -22]);
      var s = shadow(560 + inx, 716, 150);
      s += r(498 + inx, 506, 124, 22, WOOD2, 6);
      s += r(508 + inx, 528, 104, 112, '#b08a5e', 4);
      s += r(552 + inx, 640, 16, 68, WOOD2, 3);
      s += shadow(1040 - inx, 716, 150);
      s += r(978 - inx, 506, 124, 22, WOOD2, 6);
      s += r(988 - inx, 528, 104, 112, '#b08a5e', 4);
      s += r(1032 - inx, 640, 16, 68, WOOD2, 3);
      /* the table, top at the declared y=560 */
      s += shadow(800, 724, 740);
      s += r(420, 560, 760, 150, WOOD, 6) + r(420, 548, 760, 20, WOOD2, 4);
      s += r(452, 604, 696, 10, '#8a6540', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the CV being talked about, a notebook, and a glass of water.
         Surface 420..1180.
         cv    x-18 .. x+218  =>  438 <= cv <= 962
         pad   x-12 .. x+152  =>  432 <= pd <= 1028
         glass x-20 .. x+ 40  =>  440 <= gl <= 1140                                */
      var TOP = 560, s = '';
      var P = slot(arr, [{ cv: 470, pd: 760, gl: 1060 },
                         { cv: 640, pd: 460, gl: 1000 },
                         { cv: 820, pd: 500, gl: 1120 }]);
      /* ⚠ LYING FLAT, NOT STANDING UP. The first version propped the CV at 112
         high: its top was y=436, inside the chest band, and at 470 it overlapped
         the 0.22 actor column - so the gate failed all three arrangements with
         "the fore layer keeps off a speaker's chest". A page on a table lies on
         the table; nothing in the fore layer of a room with speakers may reach
         above WAIST_Y (504) unless it is in a gap between the columns, and these
         gaps are 112 wide against a 200-wide sheet. */
      s += sit(P.cv + 100, TOP, 236);
      s += rest(P.cv, TOP, 200, 12, PAPER, 2);
      s += rest(P.cv + 10, TOP - 12, 180, 40, PAPER, 3);
      s += text(P.cv + 24, TOP - 38, 'CV', 17, INK, 'start', 800);
      for (var i = 0; i < 3; i++) {
        s += line(P.cv + 74, TOP - 40 + i * 11, P.cv + 172, TOP - 40 + i * 11,
                  '#c6bda9', 4);
      }
      s += sit(P.pd + 70, TOP, 164);
      s += rest(P.pd, TOP, 140, 20, '#4f6b57', 3);
      s += rest(P.pd + 8, TOP - 20, 124, 10, PAPER, 2);
      s += sit(P.gl + 10, TOP, 60);
      s += rest(P.gl - 10, TOP, 40, 54, '#dfe9ec', 4);
      s += rest(P.gl - 10, TOP - 24, 40, 24, '#c3d7df', 2);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 14 · THE PLANNING ROOM
     Unit 14: going to, will, may, and first conditional. The room is a forecast,
     so the wall carries a chart with real months and a line that goes up.        */
  MINE.planning = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e1dbcf') + r(0, 0, W, 188, '#d3ccb9');
      s += r(0, 650, W, 250, FLOOR) + r(0, 650, W, 16, FLOOR2);
      /* the chart - six months, six bars, and the forecast drawn past them */
      s += r(220, 210, 1160, 330, PAPER, 8);
      s += r(220, 210, 1160, 44, STEEL2, 4);
      s += text(800, 242, 'SALES  ·  SIX MONTHS', 22, PAPER, 'middle', 800);
      var M = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
      var base = slot(arr, [0, 14, -10]);
      var hgt = [96, 112, 104, 138, 150, 176];
      for (var i = 0; i < 6; i++) {
        var bx = 288 + i * 176, bh = hgt[i] + base;
        s += r(bx, 500 - bh, 92, bh, i > 3 ? RUST : STEEL, 3);
        s += text(bx + 46, 524, M[i], 18, INK, 'middle', 700);
      }
      s += line(260, 504, 1340, 504, STEEL2, 4);
      s += p('M 300 410 L 1320 300', 'none',
             ' stroke="' + OLIVE + '" stroke-width="6" stroke-dasharray="14 10"');
      s += text(1320, 282, 'FORECAST', 18, OLIVE, 'end', 800);
      return stage(s);
    },
    mid: function (arr) {
      /* the long table everybody sits round, and two chairs that move */
      var a = slot(arr, [360, 420, 300]);
      var s = shadow(a, 714, 140);
      s += r(a - 58, 512, 116, 22, STEEL2, 6);
      s += r(a - 48, 534, 96, 104, '#9aa4ac', 4);
      s += shadow(1270, 714, 140);
      s += r(1212, 512, 116, 22, STEEL2, 6);
      s += r(1222, 534, 96, 104, '#9aa4ac', 4);
      s += shadow(800, 728, 1200);
      s += r(180, 566, 1240, 148, WOOD, 6) + r(180, 554, 1240, 20, WOOD2, 4);
      s += r(220, 608, 1160, 10, '#8a6540', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the printed forecast, a calculator and two cups.
         Surface 180..1420.
         sheet x-16 .. x+208  =>  196 <= sh <= 1212
         calc  x-10 .. x+110  =>  190 <= ca <= 1310
         cups  x-30 .. x+ 86  =>  210 <= cu <= 1334                                */
      var TOP = 566, s = '';
      var P = slot(arr, [{ sh: 300, ca: 760, cu: 1060 },
                         { sh: 620, ca: 240, cu: 1180 },
                         { sh: 900, ca: 420, cu: 260 }]);
      /* flat on the table - see the note on the CV in room 13 for why nothing in
         a fore layer with speakers in it reaches above y=504 */
      s += sit(P.sh + 96, TOP, 224);
      s += rest(P.sh, TOP, 192, 54, PAPER, 3);
      s += text(P.sh + 20, TOP - 38, 'FORECAST', 15, INK, 'start', 800);
      s += p('M ' + (P.sh + 22) + ' ' + (TOP - 14) + ' L ' + (P.sh + 90) + ' '
             + (TOP - 26) + ' L ' + (P.sh + 170) + ' ' + (TOP - 34), 'none',
             ' stroke="' + RUST + '" stroke-width="5"');
      s += sit(P.ca + 50, TOP, 120);
      s += rest(P.ca, TOP, 100, 56, '#59636c', 4);
      s += rest(P.ca + 10, TOP - 46, 80, 18, '#cfe0d8', 2);
      for (var i = 0; i < 3; i++) {
        s += r(P.ca + 12 + i * 26, TOP - 24, 18, 10, '#8c959d', 2);
      }
      s += sit(P.cu + 28, TOP, 116);
      s += rest(P.cu, TOP, 44, 36, PAPER, 4);
      s += rest(P.cu + 56, TOP, 44, 36, PAPER, 4);
      s += rest(P.cu + 4, TOP - 36, 36, 8, '#8e6a44', 2);
      s += rest(P.cu + 60, TOP - 36, 36, 8, '#8e6a44', 2);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 15 · THE PRINTER CORNER
     Unit 15: something is wrong and somebody has to fix it. The room is the
     corner everybody complains about - the printer that jams, its open tray, and
     the sign taped to it that nobody wrote properly.                             */
  MINE.printercorner = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e3dbcc') + r(0, 0, W, 200, '#d5ccb9');
      s += r(0, 644, W, 256, FLOOR) + r(0, 644, W, 16, FLOOR2);
      /* the taped sign, slightly crooked, as a taped sign always is */
      s += '<g transform="rotate(-3 420 300)">'
           + r(240, 236, 360, 128, PAPER, 4)
           + text(420, 290, 'OUT OF ORDER', 32, RUST, 'middle', 800)
           + text(420, 330, 'tell Nour - do not open it', 18, STEEL2, 'middle', 600)
           + '</g>';
      /* the shelf of paper nobody has reordered */
      s += r(1020, 230, 400, 300, '#cdc2b0', 6);
      s += r(1020, 360, 400, 12, STEEL2);
      var packs = slot(arr, [3, 1, 5]);
      for (var i = 0; i < packs; i++) {
        s += r(1044 + (i % 3) * 124, (i < 3 ? 288 : 418), 112, 68, '#dcd2bd', 3);
        s += r(1044 + (i % 3) * 124, (i < 3 ? 288 : 418), 112, 14, WOOD2, 2);
      }
      s += text(1220, 212, 'PAPER', 20, STEEL2, 'middle', 700);
      return stage(s);
    },
    mid: function (arr) {
      /* the printer itself, on its own low bench, with its tray pulled out by a
         different amount in each arrangement - the unit's own problem, visible */
      var pull = slot(arr, [0, 34, 18]);
      var s = shadow(800, 724, 1000);
      s += r(300, 562, 1000, 150, STEEL, 6) + r(300, 550, 1000, 20, STEEL2, 4);
      s += shadow(760, 556, 420);
      s += r(600, 400, 400, 156, '#8f99a1', 8);
      s += r(624, 420, 352, 60, '#6d777f', 4);
      s += r(640, 436, 180, 28, '#cfd8dd', 3);
      s += c(956, 450, 12, OLIVE);
      /* the tray, pulled out towards the room */
      s += r(620 - pull, 506, 360, 40, '#7e8890', 4);
      s += r(636 - pull, 512, 328, 14, PAPER, 2);
      /* the sheet that jammed, half out of the top */
      s += p('M 700 400 L 860 400 L 852 352 L 708 352 Z', PAPER);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE BENCH: a stack of printed delivery notes, a toner box and a pen.
         Surface 300..1300.
         stack x-18 .. x+218  =>  318 <= st <= 1082
         toner x-14 .. x+140  =>  314 <= to <= 1160
         pen   x- 4 .. x+ 92  =>  304 <= pn <= 1208                                */
      var TOP = 556, s = '';
      var P = slot(arr, [{ st: 360, to: 1020, pn: 760 },
                         { st: 820, to: 360, pn: 1120 },
                         { st: 1000, to: 620, pn: 340 }]);
      s += sit(P.st + 100, TOP, 236);
      for (var i = 0; i < 5; i++) {
        s += rest(P.st + (i % 2) * 6, TOP - i * 7, 200, 9, PAPER, 2);
      }
      s += text(P.st + 24, TOP - 46, 'DELIVERY NOTES', 15, STEEL2, 'start', 700);
      s += sit(P.to + 64, TOP, 154);
      s += rest(P.to, TOP, 128, 62, '#4a535b', 4);
      s += text(P.to + 64, TOP - 28, 'TONER', 16, PAPER, 'middle', 800);
      s += sit(P.pn + 44, TOP, 96);
      s += rest(P.pn, TOP, 88, 10, RUST, 4);
      s += rest(P.pn + 72, TOP, 16, 10, INK, 3);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 16 · THE ARCHIVE ROOM
     Unit 16: used to, the present perfect, and how the company has changed. The
     room is the past kept in boxes - the old ledgers, the first telephone, and
     the year written on every spine.                                            */
  MINE.archive = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#ded7c9') + r(0, 0, W, 184, '#cfc7b4');
      s += r(0, 652, W, 248, '#c2b6a2') + r(0, 652, W, 16, '#ad9f88');
      /* three shelves of ledgers, with years on the spines */
      for (var sh = 0; sh < 3; sh++) {
        var y = 220 + sh * 148;
        s += r(140, y, 1320, 128, '#cbbfa9', 4);
        s += r(140, y + 122, 1320, 14, WOOD2, 2);
        for (var i = 0; i < 14; i++) {
          var bx = 164 + i * 92, bw = 70 - (i % 3) * 8;
          s += r(bx, y + 18, bw, 104, i % 4 === 0 ? RUST
                 : (i % 3 === 0 ? OLIVE : '#8a6540'), 2);
          s += text(bx + bw / 2, y + 86, String(2012 + sh * 4 + (i % 4)), 13,
                    PAPER, 'middle', 700);
        }
      }
      s += text(800, 200, 'ARCHIVE  ·  1998 – 2026', 22, INK, 'middle', 800);
      return stage(s);
    },
    mid: function (arr) {
      /* the table the old boxes are opened on, and the stack beside it */
      var n = slot(arr, [2, 4, 3]);
      var s = shadow(800, 722, 920);
      s += r(360, 560, 880, 152, WOOD, 6) + r(360, 548, 880, 20, WOOD2, 4);
      s += shadow(200, 714, 200);
      for (var i = 0; i < n; i++) {
        s += r(130, 646 - i * 56, 150, 54, '#b4885c', 3);
        s += r(130, 646 - i * 56, 150, 11, WOOD2, 2);
        s += text(205, 682 - i * 56, String(2018 + i), 15, INK, 'middle', 700);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: an open ledger, the first telephone, and a dust cloth.
         Surface 360..1240.
         ledger x-14 .. x+244  =>  374 <= le <= 996
         phone  x- 8 .. x+116  =>  368 <= ph <= 1124
         cloth  x-12 .. x+108  =>  372 <= cl <= 1132                               */
      var TOP = 560, s = '';
      var P = slot(arr, [{ le: 420, ph: 900, cl: 1100 },
                         { le: 620, ph: 400, cl: 1060 },
                         { le: 860, ph: 420, cl: 680 }]);
      s += sit(P.le + 115, TOP, 258);
      s += rest(P.le, TOP, 230, 16, '#8a6540', 3);
      s += p('M ' + P.le + ' ' + (TOP - 16) + ' L ' + (P.le + 115) + ' '
             + (TOP - 34) + ' L ' + (P.le + 230) + ' ' + (TOP - 16) + ' L '
             + (P.le + 230) + ' ' + (TOP - 4) + ' L ' + P.le + ' ' + (TOP - 4)
             + ' Z', '#f3ecdc');
      for (var i = 0; i < 4; i++) {
        s += line(P.le + 16, TOP - 24 + i * 5, P.le + 108, TOP - 27 + i * 5,
                  '#b9ad94', 3);
        s += line(P.le + 126, TOP - 27 + i * 5, P.le + 216, TOP - 24 + i * 5,
                  '#b9ad94', 3);
      }
      /* the first telephone - the one with a dial */
      s += sit(P.ph + 54, TOP, 124);
      s += rest(P.ph, TOP, 108, 38, '#3c434b', 6);
      s += rest(P.ph + 10, TOP - 38, 88, 16, '#2f353c', 6);
      s += c(P.ph + 54, TOP - 20, 18, '#cfd8dd');
      s += sit(P.cl + 48, TOP, 120);
      s += p('M ' + P.cl + ' ' + TOP + ' q 24 -26 48 -6 q 26 -18 48 6 Z', '#b7c6cc');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 17 · THE TRAINING ROOM
     Unit 17: learning at work - a course notice, a timetable, and somebody being
     shown how. The room is set up for being taught in: a board with the week on
     it, rows of chairs, and a handout on every place.                            */
  MINE.trainingroom = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e5ded1') + r(0, 0, W, 192, '#d7cfbc');
      s += r(0, 654, W, 246, FLOOR) + r(0, 654, W, 16, FLOOR2);
      /* the board: three weeks, two days a week, five to seven */
      s += r(200, 212, 1200, 330, '#f3f0e6', 8);
      s += r(200, 212, 1200, 46, OLIVE, 4);
      s += text(800, 244, 'ACCOUNTS SYSTEM  ·  3 WEEKS', 22, PAPER, 'middle', 800);
      var RW = [['WEEK 1', 'TUE  THU', '17.00 – 19.00'],
                ['WEEK 2', 'TUE  THU', '17.00 – 19.00'],
                ['WEEK 3', 'TUE  THU', '17.00 – 19.00']];
      for (var i = 0; i < RW.length; i++) {
        var y = 318 + i * 74;
        s += text(240, y, RW[i][0], 24, RUST, 'start', 800);
        s += text(560, y, RW[i][1], 24, INK, 'start', 600);
        s += text(1010, y, RW[i][2], 24, INK, 'start', 600);
        s += line(240, y + 18, 1360, y + 18, '#ddd6c6', 3);
      }
      s += text(240, 528, 'bring your badge', 20, STEEL2, 'start', 600);
      return stage(s);
    },
    mid: function (arr) {
      /* two rows of chairs, the front row pushed in by the arrangement */
      var push = slot(arr, [0, 20, -16]);
      var s = '';
      for (var row = 0; row < 2; row++) {
        for (var i = 0; i < 4; i++) {
          var cx = 320 + i * 320 + (row ? 60 : push);
          var cy = row ? 520 : 566;
          s += shadow(cx, cy + 168, 120);
          s += r(cx - 52, cy, 104, 18, STEEL2, 5);
          s += r(cx - 44, cy + 18, 88, 92, '#9aa4ac', 4);
          s += r(cx - 6, cy + 110, 12, 56, STEEL2, 3);
        }
      }
      /* the long table at the front, top at y=574 */
      s += shadow(800, 736, 1140);
      s += r(220, 574, 1160, 146, WOOD, 6) + r(220, 562, 1160, 20, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: handouts, a marker, a badge. Surface 220..1380.
         hand x-16 .. x+208  =>  236 <= hd <= 1172
         mark x- 4 .. x+ 84  =>  224 <= mk <= 1296
         badge x-12 .. x+120 =>  232 <= bg <= 1260                                 */
      var TOP = 574, s = '';
      var P = slot(arr, [{ hd: 320, mk: 820, bg: 1120 },
                         { hd: 700, mk: 300, bg: 1180 },
                         { hd: 980, mk: 1240, bg: 420 }]);
      s += sit(P.hd + 96, TOP, 224);
      for (var i = 0; i < 3; i++) {
        s += rest(P.hd + i * 8, TOP - i * 8, 192, 10, PAPER, 2);
      }
      s += text(P.hd + 22, TOP - 32, 'HANDOUT', 15, STEEL2, 'start', 700);
      s += sit(P.mk + 40, TOP, 88);
      s += rest(P.mk, TOP, 80, 12, OLIVE, 4);
      s += rest(P.mk + 64, TOP, 16, 12, INK, 3);
      s += sit(P.bg + 54, TOP, 132);
      s += rest(P.bg, TOP, 108, 56, PAPER, 4);
      s += rest(P.bg, TOP - 56, 108, 14, STEEL2, 3);
      s += text(P.bg + 54, TOP - 26, 'BADGE', 15, INK, 'middle', 700);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 18 · THE IT CORNER
     Unit 18: the system, the shared folder, and the day it is down. The room is
     the cupboard nobody looks at until it stops: a rack, a tangle of cables, and
     one screen with a message on it.                                             */
  MINE.itcorner = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#dfd9cd') + r(0, 0, W, 186, '#d1cab7');
      s += r(0, 646, W, 254, '#c4b9a5') + r(0, 646, W, 16, '#b0a28b');
      /* the open rack, with lights that change with the arrangement */
      s += r(140, 214, 420, 420, '#5e6871', 8);
      s += r(160, 236, 380, 376, '#49525a', 4);
      var on = slot(arr, [6, 3, 8]);
      for (var i = 0; i < 9; i++) {
        s += r(180, 256 + i * 40, 340, 28, '#39414a', 3);
        s += c(206, 270 + i * 40, 7, i < on ? '#6fbf73' : '#8a3c3c');
        s += c(228, 270 + i * 40, 7, i < on ? '#6fbf73' : '#3f464e');
        s += line(252, 270 + i * 40, 500, 270 + i * 40, '#2f363d', 3);
      }
      /* cables, going nowhere tidy */
      s += p('M 560 300 q 120 60 60 160 q -50 90 80 130', 'none',
             ' stroke="#4f5862" stroke-width="9"');
      s += p('M 560 350 q 160 40 100 180', 'none',
             ' stroke="#6b7580" stroke-width="7"');
      /* the notice IT taped up, which unit 18.6 is about */
      s += r(1020, 232, 420, 196, PAPER, 6);
      s += r(1020, 232, 420, 44, RUST, 4);
      s += text(1230, 264, 'IT NOTICE', 22, PAPER, 'middle', 800);
      s += text(1046, 320, 'Do not click the link in', 20, INK, 'start', 600);
      s += text(1046, 352, 'the message about the', 20, INK, 'start', 600);
      s += text(1046, 384, 'invoice. Tell Nour.', 20, INK, 'start', 600);
      return stage(s);
    },
    mid: function (arr) {
      /* the bench and the screen with the message on it */
      var s = shadow(800, 718, 980);
      s += r(320, 558, 960, 148, STEEL, 6) + r(320, 546, 960, 20, STEEL2, 4);
      var mx = slot(arr, [760, 700, 840]);
      s += shadow(mx, 552, 300);
      s += r(mx - 150, 356, 300, 196, '#434b53', 8);
      s += r(mx - 134, 372, 268, 152, '#1f252b', 3);
      s += text(mx, 450, 'SYSTEM', 26, '#cfd8dd', 'middle', 800);
      s += text(mx, 484, 'UNAVAILABLE', 22, RUST, 'middle', 800);
      s += r(mx - 24, 552, 48, 22, '#434b53', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE BENCH: a keyboard, a coiled cable, a mug. Surface 320..1280.
         kbd  x-14 .. x+244  =>  334 <= kb <= 1036
         coil x-36 .. x+ 36  =>  356 <= co <= 1244
         mug  x-10 .. x+ 60  =>  330 <= mg <= 1220                                 */
      var TOP = 552, s = '';
      var P = slot(arr, [{ kb: 420, co: 1000, mg: 1180 },
                         { kb: 700, co: 400, mg: 1140 },
                         { kb: 960, co: 480, mg: 380 }]);
      s += sit(P.kb + 115, TOP, 258);
      s += rest(P.kb, TOP, 230, 22, '#59636c', 4);
      for (var i = 0; i < 10; i++) {
        s += r(P.kb + 12 + i * 21, TOP - 16, 14, 8, '#8c959d', 2);
      }
      s += sit(P.co, TOP, 72);
      s += c(P.co, TOP - 18, 30, 'none');
      s += p('M ' + (P.co - 28) + ' ' + (TOP - 18) + ' a 28 18 0 1 0 56 0 a 28 18 0 1 0 -56 0',
             'none', ' stroke="#4f5862" stroke-width="9"');
      s += sit(P.mg + 24, TOP, 70);
      s += rest(P.mg, TOP, 48, 44, PAPER, 4);
      s += p('M ' + (P.mg + 48) + ' ' + (TOP - 34) + ' q 18 10 0 22', 'none',
             ' stroke="' + PAPER + '" stroke-width="7"');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 19 · THE SUPPLIER'S SHOWROOM
     Unit 19: buying, bargaining and a relationship eleven years old. The room is
     THEIRS, not ours - their samples on their own shelves, their price card, and
     a counter with two sides to it.                                              */
  MINE.showroom = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e6dfd2') + r(0, 0, W, 190, '#d8d0bd');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      s += r(120, 214, 520, 324, '#cdc2b0', 6);
      s += r(120, 322, 520, 12, STEEL2) + r(120, 430, 520, 12, STEEL2);
      var kinds = slot(arr, [0, 1, 2]);
      for (var i = 0; i < 12; i++) {
        var bx = 146 + (i % 4) * 126, by = 246 + Math.floor(i / 4) * 108;
        var col = [['#d8cdb6', '#c49a68', '#b4885c'],
                   ['#c49a68', '#b4885c', '#d8cdb6'],
                   ['#b4885c', '#d8cdb6', '#c49a68']][kinds][i % 3];
        s += r(bx, by, 100, 62, col, 3) + r(bx, by, 100, 12, WOOD2, 2);
      }
      s += text(380, 200, 'SHAMSI PACKAGING', 22, INK, 'middle', 800);
      /* their price card, on the wall, with a number on it */
      s += r(1020, 230, 430, 260, PAPER, 6);
      s += r(1020, 230, 430, 44, OLIVE, 4);
      s += text(1235, 262, 'PRICE PER 100', 22, PAPER, 'middle', 800);
      var PR = [['SMALL BOX', '700'], ['LARGE BOX', '1,150'], ['WIDE WRAP', '8,000']];
      for (var j = 0; j < PR.length; j++) {
        s += text(1046, 320 + j * 54, PR[j][0], 20, INK, 'start', 600);
        s += text(1424, 320 + j * 54, PR[j][1], 20, RUST, 'end', 800);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 726, 1160);
      s += r(200, 560, 1200, 156, WOOD, 6) + r(200, 548, 1200, 20, WOOD2, 4);
      s += r(240, 606, 1120, 10, '#8a6540', 3);
      /* a pallet of their own stock behind the counter, higher in one arrangement */
      var h = slot(arr, [3, 5, 2]);
      s += shadow(1480, 714, 190);
      for (var i = 0; i < h; i++) {
        s += r(1392, 644 - i * 44, 180, 42, '#b4885c', 3);
        s += r(1392, 644 - i * 44, 180, 9, WOOD2, 2);
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE COUNTER: a sample box open, the order pad, a calculator.
         Surface 200..1400.
         sample x-16 .. x+176  =>  216 <= sa <= 1224
         pad    x-12 .. x+152  =>  212 <= pd <= 1248
         calc   x-10 .. x+110  =>  210 <= ca <= 1290                               */
      var TOP = 560, s = '';
      var P = slot(arr, [{ sa: 320, pd: 760, ca: 1100 },
                         { sa: 700, pd: 300, ca: 1180 },
                         { sa: 1000, pd: 480, ca: 260 }]);
      /* a shallow sample tray, not a box standing on end - see the note on the CV
         in room 13 for the y=504 rule this obeys */
      s += sit(P.sa + 80, TOP, 192);
      s += rest(P.sa, TOP, 160, 36, '#b4885c', 3);
      s += p('M ' + P.sa + ' ' + (TOP - 36) + ' L ' + (P.sa + 20) + ' '
             + (TOP - 52) + ' L ' + (P.sa + 180) + ' ' + (TOP - 52) + ' L '
             + (P.sa + 160) + ' ' + (TOP - 36) + ' Z', '#c49a68');
      s += text(P.sa + 80, TOP - 14, 'SAMPLE', 14, PAPER, 'middle', 800);
      s += sit(P.pd + 70, TOP, 164);
      s += rest(P.pd, TOP, 140, 12, PAPER, 2);
      s += rest(P.pd, TOP - 12, 140, 40, PAPER, 3);
      s += text(P.pd + 16, TOP - 36, 'ORDER', 14, STEEL2, 'start', 700);
      for (var i = 0; i < 2; i++) {
        s += line(P.pd + 16, TOP - 22 + i * 10, P.pd + 122, TOP - 22 + i * 10,
                  '#cfc6b2', 3);
      }
      s += sit(P.ca + 50, TOP, 120);
      s += rest(P.ca, TOP, 100, 54, '#59636c', 4);
      s += rest(P.ca + 10, TOP - 44, 80, 16, '#cfe0d8', 2);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 20 · THE SHOPFRONT
     Unit 20: a repair, from outside. The shutter that needs adjusting is the
     unit's own object, so it is drawn half down and the man is on the pavement.  */
  MINE.shopfront = {
    back: function (arr) {
      var s = r(0, 0, W, 430, SKY) + r(0, 0, W, 150, SKY2);
      s += r(0, 430, W, 470, '#c7bda9');
      /* the building front */
      s += r(100, 120, 1400, 330, STONE) + r(100, 120, 1400, 26, STONE2);
      s += r(140, 170, 1320, 36, '#b9ad94', 3);
      s += text(800, 198, 'SHAM TRADING  ·  TRADE COUNTER', 24, INK, 'middle', 800);
      /* the shutter, down by a different amount each time */
      var down = slot(arr, [150, 96, 210]);
      s += r(300, 244, 1000, down, STEEL, 2);
      for (var i = 0; i * 18 < down; i++) {
        s += line(300, 252 + i * 18, 1300, 252 + i * 18, STEEL2, 4);
      }
      s += r(300, 244 + down, 1000, 12, STEEL2, 2);
      s += r(300, 244 + down + 12, 1000, 450 - down - 12, '#5d6671');
      s += text(800, 420, 'CLOSED FOR REPAIR', 26, PAPER, 'middle', 800);
      /* the pavement and the kerb */
      s += r(0, 700, W, 28, '#aa9e88') + r(0, 728, W, 172, '#9e9280');
      return stage(s);
    },
    mid: function (arr) {
      /* the van the repair man came in, at one end or the other */
      var vx = slot(arr, [1230, 1330, 1150]);
      var s = shadow(vx, 806, 420);
      s += r(vx - 210, 620, 420, 150, '#cfd8dd', 8);
      s += r(vx - 210, 620, 180, 86, '#b9c6cc', 6);
      s += r(vx - 190, 638, 130, 56, '#9fb3bc', 4);
      s += c(vx - 130, 782, 34, '#49525a') + c(vx + 130, 782, 34, '#49525a');
      s += c(vx - 130, 782, 14, '#8c959d') + c(vx + 130, 782, 14, '#8c959d');
      s += text(vx + 60, 700, 'REPAIRS', 20, INK, 'middle', 800);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE PAVEMENT, below the waist line: the toolbox, a stepladder and the
         old part that came off. Nothing here is on a surface, so no SURFACES row. */
      var s = '';
      var P = slot(arr, [{ tb: 200, sl: 540, pt: 860 },
                         { tb: 520, sl: 180, pt: 980 },
                         { tb: 900, sl: 620, pt: 220 }]);
      s += shadow(P.tb + 70, 790, 180);
      s += r(P.tb, 700, 140, 86, RUST, 5);
      s += r(P.tb, 700, 140, 18, '#8e4f24', 3);
      s += p('M ' + (P.tb + 40) + ' 700 q 30 -34 60 0', 'none',
             ' stroke="#8e4f24" stroke-width="9"');
      s += shadow(P.sl + 54, 790, 170);
      s += p('M ' + P.sl + ' 786 L ' + (P.sl + 48) + ' 616 M ' + (P.sl + 108)
             + ' 786 L ' + (P.sl + 60) + ' 616', 'none',
             ' stroke="' + STEEL2 + '" stroke-width="10"');
      for (var i = 0; i < 3; i++) {
        s += line(P.sl + 14 + i * 4, 756 - i * 46, P.sl + 94 - i * 4, 756 - i * 46,
                  STEEL, 8);
      }
      s += shadow(P.pt + 44, 790, 120);
      s += r(P.pt, 752, 88, 32, '#7e8890', 3);
      s += c(P.pt + 16, 768, 8, '#5d6671') + c(P.pt + 72, 768, 8, '#5d6671');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 21 · THE RETURNS DESK
     Unit 21: quality and complaints. The unit's object is a crushed box, so the
     box is open on the bench and what came out of it is beside it.               */
  MINE.returnsdesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e2dbcd') + r(0, 0, W, 194, '#d4ccb9');
      s += r(0, 644, W, 256, FLOOR) + r(0, 644, W, 16, FLOOR2);
      s += r(180, 222, 520, 300, PAPER, 6);
      s += r(180, 222, 520, 44, RUST, 4);
      s += text(440, 254, 'GOODS RETURNED', 22, PAPER, 'middle', 800);
      var ST = ['1  Check on arrival', '2  Write it on the note',
                '3  Photograph it', '4  Tell the office the same day'];
      for (var i = 0; i < ST.length; i++) {
        s += text(206, 312 + i * 52, ST[i], 20, INK, 'start', 600);
      }
      /* the shelf of things waiting to go back, more or fewer by arrangement */
      var n = slot(arr, [4, 2, 6]);
      s += r(980, 240, 480, 290, '#cdc2b0', 6);
      s += r(980, 384, 480, 12, STEEL2);
      for (var j = 0; j < n; j++) {
        s += r(1006 + (j % 3) * 152, (j < 3 ? 288 : 428), 136, 84,
               j % 2 ? '#c49a68' : '#b4885c', 3);
        s += text(1074 + (j % 3) * 152, (j < 3 ? 338 : 478), 'RETURN', 14,
                  PAPER, 'middle', 700);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 722, 1060);
      s += r(260, 556, 1080, 152, STEEL, 6) + r(260, 544, 1080, 20, STEEL2, 4);
      /* a trolley parked at one end */
      var tx = slot(arr, [1480, 120, 1500]);
      s += shadow(tx, 716, 170);
      s += r(tx - 70, 520, 140, 14, STEEL2, 4);
      s += p('M ' + (tx - 62) + ' 534 L ' + (tx - 62) + ' 690 M ' + (tx + 62)
             + ' 534 L ' + (tx + 62) + ' 690', 'none',
             ' stroke="' + STEEL2 + '" stroke-width="9"');
      s += c(tx - 54, 700, 16, '#49525a') + c(tx + 54, 700, 16, '#49525a');
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE BENCH: the crushed box, open; the claim form; a camera.
         Surface 260..1340.
         box   x-18 .. x+218  =>  278 <= bx <= 1122
         form  x-12 .. x+152  =>  272 <= fm <= 1188
         cam   x-10 .. x+ 90  =>  270 <= cm <= 1250                                */
      var TOP = 556, s = '';
      var P = slot(arr, [{ bx: 340, fm: 760, cm: 1120 },
                         { bx: 700, fm: 320, cm: 1180 },
                         { bx: 1000, fm: 540, cm: 300 }]);
      /* the box, with one corner pushed in - the damage is the lesson */
      /* the box lies on its side, opened, which is both what a returned box looks
         like and what keeps it under y=504 - see the note on the CV in room 13 */
      s += sit(P.bx + 100, TOP, 236);
      s += p('M ' + P.bx + ' ' + TOP + ' L ' + P.bx + ' ' + (TOP - 40) + ' L '
             + (P.bx + 60) + ' ' + (TOP - 30) + ' L ' + (P.bx + 200) + ' '
             + (TOP - 48) + ' L ' + (P.bx + 200) + ' ' + TOP + ' Z', '#b4885c');
      s += p('M ' + P.bx + ' ' + (TOP - 40) + ' L ' + (P.bx + 60) + ' '
             + (TOP - 30) + ' L ' + (P.bx + 200) + ' ' + (TOP - 48), 'none',
             ' stroke="' + WOOD2 + '" stroke-width="6"');
      s += text(P.bx + 110, TOP - 14, 'FRAGILE', 14, PAPER, 'middle', 800);
      s += sit(P.fm + 70, TOP, 164);
      s += rest(P.fm, TOP, 140, 48, PAPER, 3);
      s += text(P.fm + 16, TOP - 32, 'CLAIM', 14, RUST, 'start', 800);
      for (var i = 0; i < 2; i++) {
        s += line(P.fm + 16, TOP - 20 + i * 10, P.fm + 122, TOP - 20 + i * 10,
                  '#cfc6b2', 3);
      }
      s += sit(P.cm + 40, TOP, 100);
      s += rest(P.cm, TOP, 80, 46, '#434b53', 5);
      s += c(P.cm + 40, TOP - 24, 15, '#8c959d');
      s += c(P.cm + 40, TOP - 24, 8, '#1f252b');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 22 · THE WRITING DESK
     Unit 22: emails - the greeting, the ask, the date, the close. One desk, one
     screen, and nobody else in the picture, because writing an email is the only
     thing in this course a learner does entirely alone.                          */
  MINE.writingdesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e7e0d3') + r(0, 0, W, 180, '#d9d1be');
      s += r(0, 650, W, 250, FLOOR) + r(0, 650, W, 16, FLOOR2);
      /* the window, with the light coming in from one side */
      var lit = slot(arr, [0, 1, 2]);
      s += r(980, 170, 460, 330, '#b7cdd9', 8);
      s += r(980, 170, 460, 330, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="10"');
      s += line(1210, 170, 1210, 500, STEEL2, 8);
      s += line(980, 336, 1440, 336, STEEL2, 8);
      if (lit === 1) { s += r(996, 186, 198, 134, '#d7e6ee'); }
      if (lit === 2) { s += r(1226, 352, 198, 134, '#d7e6ee'); }
      /* the one thing on the wall: the four lines of a good email */
      s += r(160, 236, 500, 280, PAPER, 6);
      s += r(160, 236, 500, 44, OLIVE, 4);
      s += text(410, 268, 'A GOOD EMAIL', 22, PAPER, 'middle', 800);
      var L = ['1  What you want', '2  Why', '3  By when', '4  Kind regards'];
      for (var i = 0; i < L.length; i++) {
        s += text(186, 330 + i * 48, L[i], 20, INK, 'start', 600);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 718, 720);
      s += r(460, 558, 700, 150, WOOD, 6) + r(460, 548, 700, 20, WOOD2, 4);
      var mx = slot(arr, [800, 760, 850]);
      s += shadow(mx, 552, 300);
      s += r(mx - 148, 352, 296, 196, '#434b53', 8);
      s += r(mx - 132, 368, 264, 154, '#f3f0e6', 3);
      s += text(mx - 112, 404, 'Dear Mr Ayoub,', 17, INK, 'start', 600);
      for (var i = 0; i < 4; i++) {
        s += line(mx - 112, 428 + i * 22, mx + 96 - (i === 3 ? 90 : 0),
                  428 + i * 22, '#c6bda9', 4);
      }
      s += r(mx - 24, 548, 48, 20, '#434b53', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: a keyboard, a notebook and a cup. Surface 460..1140.
         kbd  x-12 .. x+212  =>  472 <= kb <= 928
         note x-10 .. x+130  =>  470 <= nt <= 1010
         cup  x-10 .. x+ 58  =>  470 <= cp <= 1082                                 */
      var TOP = 558, s = '';
      var P = slot(arr, [{ kb: 620, nt: 500, cp: 1040 },
                         { kb: 660, nt: 900, cp: 480 },
                         { kb: 580, nt: 940, cp: 1060 }]);
      s += sit(P.kb + 100, TOP, 224);
      s += rest(P.kb, TOP, 200, 20, '#59636c', 4);
      for (var i = 0; i < 9; i++) {
        s += r(P.kb + 10 + i * 21, TOP - 15, 14, 8, '#8c959d', 2);
      }
      s += sit(P.nt + 60, TOP, 140);
      s += rest(P.nt, TOP, 120, 16, '#4f6b57', 3);
      s += rest(P.nt + 6, TOP - 16, 108, 8, PAPER, 2);
      s += sit(P.cp + 24, TOP, 68);
      s += rest(P.cp, TOP, 48, 42, PAPER, 4);
      s += p('M ' + (P.cp + 48) + ' ' + (TOP - 32) + ' q 18 10 0 22', 'none',
             ' stroke="' + PAPER + '" stroke-width="7"');
      return stage(s);
    }
  };

  /* -------------------------------------------------- 23 · THE ROOFTOP
     Unit 23: the company and the city - where it is, what it has, what it has
     not, and the power cut that explains everything. The roof is where the
     generator and the water tank live, and where the city is visible at all.     */
  MINE.rooftop = {
    back: function (arr) {
      var s = r(0, 0, W, 470, SKY) + r(0, 0, W, 170, SKY2);
      /* Damascus, low and flat, with the mountain behind it */
      s += p('M 0 300 L 180 232 L 420 268 L 700 206 L 980 252 L 1260 212 '
             + 'L 1600 258 L 1600 470 L 0 470 Z', '#bcc6c2');
      var lights = slot(arr, [0, 1, 2]);
      for (var i = 0; i < 26; i++) {
        var bx = 30 + i * 60, bh = 70 + ((i * 37) % 90);
        s += r(bx, 470 - bh, 48, bh, i % 3 ? '#cdc4b2' : '#c0b7a4');
        if ((i + lights) % 4 === 0) {
          s += r(bx + 10, 470 - bh + 18, 12, 14, '#e8dfae');
        }
      }
      s += r(0, 470, W, 60, '#b3a894') + r(0, 470, W, 14, '#a2967f');
      s += r(0, 530, W, 370, '#c9bda9');
      return stage(s);
    },
    mid: function (arr) {
      /* the parapet, the water tank and the generator - the unit's own facts */
      var s = r(0, 596, W, 44, '#bdb29e') + r(0, 596, W, 12, '#a99d87');
      var tx = slot(arr, [250, 300, 200]);
      s += shadow(tx, 706, 230);
      s += r(tx - 100, 470, 200, 190, '#9fb3bc', 16);
      s += r(tx - 100, 470, 200, 26, '#88a0ab', 10);
      s += text(tx, 580, 'WATER', 22, PAPER, 'middle', 800);
      s += shadow(1300, 710, 380);
      s += r(1130, 500, 340, 190, '#7e8890', 8);
      s += r(1150, 520, 300, 50, '#616b74', 4);
      s += text(1300, 554, 'GENERATOR', 20, PAPER, 'middle', 800);
      s += r(1420, 420, 34, 86, '#5d6671', 4);
      s += p('M 1437 420 q -14 -40 10 -62', 'none',
             ' stroke="#b9b2a4" stroke-width="10"');
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE ROOF, below the waist line: a fuel can, a coil of cable, a crate. */
      var s = '';
      var P = slot(arr, [{ fc: 520, cb: 760, cr: 980 },
                         { fc: 900, cb: 520, cr: 700 },
                         { fc: 700, cb: 980, cr: 520 }]);
      s += shadow(P.fc + 42, 782, 120);
      s += r(P.fc, 700, 84, 76, RUST, 5);
      s += r(P.fc + 26, 682, 32, 20, '#8e4f24', 3);
      s += text(P.fc + 42, 748, 'FUEL', 15, PAPER, 'middle', 800);
      s += shadow(P.cb, 782, 130);
      s += p('M ' + (P.cb - 52) + ' 756 a 52 28 0 1 0 104 0 a 52 28 0 1 0 -104 0',
             'none', ' stroke="#4f5862" stroke-width="12"');
      s += p('M ' + (P.cb - 34) + ' 756 a 34 18 0 1 0 68 0 a 34 18 0 1 0 -68 0',
             'none', ' stroke="#67707a" stroke-width="10"');
      s += shadow(P.cr + 66, 784, 170);
      s += r(P.cr, 698, 132, 80, '#b4885c', 4);
      s += r(P.cr, 698, 132, 14, WOOD2, 2);
      s += line(P.cr + 10, 738, P.cr + 122, 738, '#9c7046', 4);
      return stage(s);
    }
  };

  /* -------------------------------------------------- 24 · THE NEW BRANCH
     Unit 24: looking forward. The last room of the book is a shop that is not
     open yet - bare walls, a ladder, tiles still stacked, and a date on the
     window. Everything in it is about to happen, which is the unit's tense.      */
  MINE.newbranch = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#ece5d8') + r(0, 0, W, 186, '#ded6c3');
      s += r(0, 650, W, 250, '#cfc4b0') + r(0, 650, W, 16, '#bbb09a');
      /* the window onto the street, with the opening date written on it */
      s += r(820, 164, 640, 360, '#c3d7df', 8);
      s += r(820, 164, 640, 360, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="12"');
      s += '<g transform="rotate(-2 1140 330)">'
           + text(1140, 312, 'OPENING', 44, RUST, 'middle', 800)
           + text(1140, 374, 'THE FIRST', 34, RUST, 'middle', 800) + '</g>';
      /* the bare wall, with the new shelves marked out in pencil */
      s += r(120, 214, 560, 320, '#e0d8c7', 4);
      var marks = slot(arr, [3, 4, 2]);
      for (var i = 0; i < marks; i++) {
        s += line(150, 268 + i * 84, 650, 268 + i * 84, '#b7ab93', 4);
        s += text(160, 258 + i * 84, 'SHELF ' + (i + 1), 15, '#9b8f78',
                  'start', 700);
      }
      return stage(s);
    },
    mid: function (arr) {
      /* a stepladder and the counter that is not fixed down yet */
      var lx = slot(arr, [400, 330, 470]);
      var s = shadow(lx + 60, 742, 210);
      s += p('M ' + lx + ' 736 L ' + (lx + 54) + ' 520 M ' + (lx + 120) + ' 736 L '
             + (lx + 66) + ' 520', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="12"');
      for (var i = 0; i < 4; i++) {
        s += line(lx + 14 + i * 5, 700 - i * 50, lx + 106 - i * 5, 700 - i * 50,
                  WOOD, 9);
      }
      s += shadow(1020, 746, 560);
      s += '<g transform="rotate(-1 1020 640)">'
           + r(740, 586, 560, 150, WOOD, 6) + r(740, 574, 560, 20, WOOD2, 4)
           + '</g>';
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE FLOOR, below the waist line: tiles stacked, a paint tin, a roll of
         plan paper. Nothing stands on the counter - it is not fixed down yet. */
      var s = '';
      var P = slot(arr, [{ tl: 180, pt: 560, pl: 1380 },
                         { tl: 560, pt: 180, pl: 1420 },
                         { tl: 1340, pt: 220, pl: 600 }]);
      s += shadow(P.tl + 76, 790, 190);
      for (var i = 0; i < 5; i++) {
        s += r(P.tl + (i % 2) * 7, 760 - i * 12, 152, 12, '#cfd8dd', 2);
        s += r(P.tl + (i % 2) * 7, 760 - i * 12, 152, 4, '#adbcc4', 1);
      }
      s += text(P.tl + 76, 786, 'TILES', 14, '#7f8a92', 'middle', 700);
      s += shadow(P.pt + 42, 788, 120);
      s += r(P.pt, 706, 84, 78, '#dfe4e8', 5);
      s += r(P.pt, 706, 84, 16, '#b8c2c8', 3);
      s += p('M ' + (P.pt + 10) + ' 706 q 32 -30 64 0', 'none',
             ' stroke="#9aa4ac" stroke-width="7"');
      s += text(P.pt + 42, 756, 'PAINT', 14, '#6f7a83', 'middle', 700);
      s += shadow(P.pl, 786, 90);
      s += r(P.pl - 16, 672, 32, 112, PAPER, 6);
      s += '<ellipse cx="' + P.pl + '" cy="672" rx="16" ry="7" fill="#e6dfd0"/>';
      s += line(P.pl - 16, 712, P.pl + 16, 712, '#cfc6b2', 4);
      return stage(s);
    }
  };

  /* ============================================================
     B1 BOOK 1 — FOUR MORE ROOMS, AND EIGHT THE SERIES ALREADY HAS.

     B1's units are named after grammar: cause and effect, the second conditional,
     reported speech. A room cannot draw a tense. What it CAN draw is the document
     the unit turns on, and that is how this level's rooms are chosen - unit 7 is
     the written explanation, so it happens at the writing desk the series already
     has; unit 10 is reporting what was said, so it happens in the meeting room
     where it was said.

     Eight of the twelve are therefore rooms already drawn for A1 or A2. That is
     the rule in tools/pbe_build_unit.py working as intended rather than being
     dodged: a unit's room is the room the unit is ABOUT, and a near-duplicate of
     the canteen invented for "telling the story of a working day" would teach a
     learner nothing and cost them one more room to hold in their head. Reuse
     ACROSS books has always been allowed and A1 Book 2 did it five times out of
     six; what is forbidden is two units of the SAME book sharing a room, and no
     two of these twelve do.

     Four units have a world of their own, and get it:

        1  accountdesk  the account file, and the card of names behind it
        5  workbench    where the thing is actually done, and the card saying how
        9  stocktake    the half-counted aisle, where "about" is the honest word
       12  signingdesk  one page, two pens, and the log it is written into

     Mr Attar, the external auditor, is this book's recurring reader - he is in
     six of the twelve units - so he is deliberately NOT given a room. He comes
     to where the work is, which is the whole point of him.

     ⚠ AND THIS IS THE CANONICAL COPY. `course_engine --series-art pbe-a2b1`
     pushes this file to every other book of the series. The argument is the
     SOURCE: running it with any other book as the source overwrites this copy
     with that one, which is how these four rooms were written once and lost
     before they were ever committed. Edit here, then sync from here.
     ============================================================ */

  /* ------------------------------------------------- B1·1 · THE ACCOUNT DESK
     Unit 1: an account is not a company, it is a person who answers for it. The
     board on the wall is the lesson - three accounts, each with the name of who
     to speak to, and one name crossed out and replaced, which is why the unit
     exists at all. */
  MINE.accountdesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, STONE) + r(0, 0, W, 184, STONE2);
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      /* WHO TO SPEAK TO. The crossing-out is drawn, not implied: the unit's
         first cycle is about an account whose contact has changed. */
      s += r(150, 214, 540, 326, PAPER, 8);
      s += r(150, 214, 540, 50, STEEL2, 4);
      s += text(420, 248, 'WHO TO SPEAK TO', 22, PAPER, 'middle', 800);
      var ROWS = [['JABER FREIGHT', 'Mr Jaber'],
                  ['SHAMSI PACKAGING', 'Ms Shamsi'],
                  ['NAHHAS STEEL', 'Mr Nahhas']];
      for (var i = 0; i < ROWS.length; i++) {
        var y = 308 + i * 74;
        s += text(174, y, ROWS[i][0], 19, INK, 'start', 700);
        s += text(174, y + 28, ROWS[i][1], 19, OLIVE, 'start', 600);
        s += line(174, y + 44, 666, y + 44, '#e2dacb', 3);
      }
      /* the one that changed: the old name struck through, the new one beside it */
      s += text(430, 456, 'Samira', 19, STEEL2, 'start', 600);
      s += line(428, 450, 520, 450, RUST, 4);
      s += text(534, 456, '→ Mr Jaber', 19, RUST, 'start', 700);
      /* and a window, because this desk is in the office and not in a cupboard */
      s += r(1040, 206, 400, 300, SKY, 8);
      s += r(1040, 206, 400, 54, SKY2, 6);
      s += line(1240, 206, 1240, 506, STONE2, 10);
      s += line(1040, 356, 1440, 356, STONE2, 10);
      s += r(1024, 190, 432, 24, STEEL2, 6);
      return stage(s);
    },
    mid: function (arr) {
      /* the desk, top at the declared y=560, and the drawer unit beside it with
         one drawer open - the account files live in it and the unit opens one */
      var side = slot(arr, [0, 1, 2]);
      var s = shadow(800, 740, 860);
      s += r(400, 560, 800, 160, WOOD, 6) + r(400, 548, 800, 20, WOOD2, 4);
      s += r(436, 608, 728, 10, '#8a6540', 3);
      s += shadow(1296, 744, 240);
      s += r(1196, 556, 200, 188, STEEL, 6);
      for (var i = 0; i < 3; i++) {
        var out = (i === side) ? 34 : 0;
        s += r(1204 - out, 566 + i * 60, 184, 50,
               (i === side) ? STEEL2 : '#9aa6ae', 4);
        s += r(1264 - out, 584 + i * 60, 60, 10, '#c6ced3', 3);
        if (i === side) {
          s += r(1216 - out, 542 + i * 60, 40, 30, PAPER, 2);
          s += r(1262 - out, 542 + i * 60, 40, 30, '#f2ece0', 2);
        }
      }
      var inx = slot(arr, [0, 30, -24]);
      s += shadow(700 + inx, 760, 160);
      s += r(636 + inx, 500, 128, 22, WOOD2, 6);
      s += r(646 + inx, 522, 108, 120, '#b08a5e', 4);
      s += r(692 + inx, 642, 16, 112, WOOD2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the account file open, the card of names, the telephone.
         Surface 400..1200, top 560. Everything here is 46 or less, so its top is
         at or above y=514 - below the waist line at 504 is NEVER crossed, which
         is what keeps a page off a speaker's chest without depending on where
         the three arrangements happen to put it. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ fl: 470, cd: 830, ph: 1060 },
                         { fl: 620, cd: 480, ph: 1080 },
                         { fl: 790, cd: 530, ph: 1040 }]);
      s += sit(P.fl + 108, TOP, 240);
      s += rest(P.fl, TOP, 216, 14, '#e8dfcc', 2);
      s += rest(P.fl + 4, TOP - 14, 100, 10, PAPER, 1);
      s += rest(P.fl + 112, TOP - 14, 100, 10, '#f4eee2', 1);
      s += text(P.fl + 108, TOP - 30, 'ACCOUNT 3318', 14, STEEL2, 'middle', 700);
      s += sit(P.cd + 56, TOP, 130);
      s += rest(P.cd, TOP, 112, 12, PAPER, 2);
      s += text(P.cd + 56, TOP - 18, 'NAMES', 13, OLIVE, 'middle', 700);
      s += sit(P.ph + 52, TOP, 120);
      s += rest(P.ph, TOP, 104, 26, INK, 5);
      s += rest(P.ph + 10, TOP - 26, 84, 18, '#4b545f', 4);
      s += p('M ' + (P.ph + 8) + ' ' + (TOP - 46) + ' q 44 -14 88 0', 'none',
             ' stroke="' + INK + '" stroke-width="11" stroke-linecap="round"');
      return stage(s);
    }
  };

  /* --------------------------------------------------- B1·5 · THE WORKBENCH
     Unit 5: how it is done here - the passive, and a procedure that exists
     whether or not anybody has written it down. Here somebody has: the card on
     the wall is five numbered steps, and the tool board has an outline for every
     tool so a missing one is visible from the door. */
  MINE.workbench = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#dcd6c8') + r(0, 0, W, 176, '#cbc3b1');
      s += r(0, 648, W, 252, '#bfb49f') + r(0, 648, W, 16, FLOOR2);
      /* THE PROCEDURE, in five numbered steps, laminated and screwed to the wall */
      s += r(140, 206, 470, 334, PAPER, 6);
      s += r(140, 206, 470, 48, OLIVE, 4);
      s += text(375, 240, 'HOW IT IS DONE', 21, PAPER, 'middle', 800);
      var ST = ['1  The part is checked', '2  The jig is set',
                '3  The bolt is torqued', '4  It is signed for',
                '5  The sheet goes in the file'];
      for (var i = 0; i < ST.length; i++) {
        s += text(164, 296 + i * 48, ST[i], 18, INK, 'start', 600);
      }
      s += c(160, 222, 7, STEEL2) + c(590, 222, 7, STEEL2);
      s += c(160, 524, 7, STEEL2) + c(590, 524, 7, STEEL2);
      /* THE TOOL BOARD: an outline for every tool, and two of them empty, which
         is the only way a board like this ever says anything */
      s += r(1000, 196, 460, 300, '#b9a98c', 8);
      s += r(1016, 212, 428, 268, '#a08f72', 4);
      var TL = [[1052, 250], [1148, 250], [1244, 250], [1340, 250],
                [1052, 360], [1148, 360], [1244, 360], [1340, 360]];
      for (var j = 0; j < TL.length; j++) {
        var has = !(j === 2 || j === 5);
        s += r(TL[j][0], TL[j][1], 68, 86, '#8d7d62', 4);
        if (has) {
          s += r(TL[j][0] + 24, TL[j][1] + 10, 20, 54, STEEL2, 3);
          s += c(TL[j][0] + 34, TL[j][1] + 72, 12, STEEL);
        }
      }
      s += text(1230, 468, 'EVERY TOOL HAS A PLACE', 16, PAPER, 'middle', 700);
      return stage(s);
    },
    mid: function (arr) {
      /* the bench, top at the declared y=556, with a vice bolted to one end */
      var s = shadow(800, 756, 1040);
      s += r(240, 556, 1120, 44, WOOD2, 4) + r(240, 556, 1120, 14, '#9b7347', 3);
      s += r(276, 600, 40, 150, STEEL2, 4) + r(1284, 600, 40, 150, STEEL2, 4);
      s += r(300, 666, 1000, 20, STEEL, 3);
      var vx = slot(arr, [300, 1216, 300]);
      s += r(vx, 500, 84, 56, STEEL2, 5);
      s += r(vx + 14, 476, 56, 30, STEEL, 4);
      s += c(vx + 42, 470, 13, RUST);
      var sx = slot(arr, [640, 900, 760]);
      s += shadow(sx, 772, 130);
      s += r(sx - 54, 630, 108, 20, WOOD2, 5);
      s += r(sx - 8, 650, 16, 112, STEEL2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE BENCH: the step card lying flat, the wrench lying down, and the
         two parts - one done and stamped, one not. Surface 240..1360, top 556.
         Nothing is taller than 40, so no top reaches the waist line at 504. */
      var TOP = 556, s = '';
      var P = slot(arr, [{ cd: 330, wr: 700, a: 1060, b: 1180 },
                         { cd: 560, wr: 300, a: 980, b: 1100 },
                         { cd: 900, wr: 420, a: 1200, b: 1080 }]);
      s += sit(P.cd + 94, TOP, 210);
      s += rest(P.cd, TOP, 188, 12, PAPER, 2);
      s += line(P.cd + 12, TOP - 8, P.cd + 170, TOP - 8, '#d8d0bd', 2);
      s += text(P.cd + 94, TOP - 20, 'STEPS 1-5', 13, OLIVE, 'middle', 700);
      s += sit(P.wr + 90, TOP, 200);
      s += rest(P.wr, TOP, 180, 16, STEEL2, 6);
      s += rest(P.wr + 150, TOP, 44, 30, STEEL, 5);
      s += text(P.wr + 90, TOP - 36, 'TORQUE', 12, '#7f8a92', 'middle', 700);
      s += sit(P.a + 30, TOP, 76);
      s += rest(P.a, TOP, 64, 40, '#9aa6ae', 4);
      s += c(P.a + 32, TOP - 20, 9, OLIVE);
      s += sit(P.b + 30, TOP, 76);
      s += rest(P.b, TOP, 64, 40, '#b2bcc3', 4);
      return stage(s);
    }
  };

  /* ---------------------------------------------------- B1·9 · THE STOCKTAKE
     Unit 9: deduction, doubt and the honest estimate. The aisle is half counted -
     the bays ticked in chalk, one with a question mark - because the unit is
     about the difference between "there are 240" and "there are about 240, and
     here is what the difference would cost".
     ⚠ NOT IN `SURFACES`, deliberately: everything this room's fore layer paints
     stands on the FLOOR, where `clearOf` exempts it for being below the waist. A
     declared surface span would be a fight with the floor, exactly as the note on
     `warehouse` says. */
  MINE.stocktake = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#d7d2c6') + r(0, 0, W, 150, '#c4bdac');
      s += r(0, 620, W, 280, FLOOR) + r(0, 620, W, 18, FLOOR2);
      var BAY = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];
      var done = slot(arr, [4, 3, 5]);
      for (var i = 0; i < BAY.length; i++) {
        var x = 110 + i * 232;
        s += r(x, 170, 212, 452, '#b9b1a0', 5);
        s += r(x + 8, 178, 196, 436, '#a9a08d', 3);
        for (var k = 0; k < 3; k++) {
          s += r(x + 8, 250 + k * 124, 196, 14, STEEL2, 3);
          s += r(x + 22, 194 + k * 124, 74, 56, '#b4885c', 3);
          s += r(x + 108, 206 + k * 124, 74, 44, '#c49a68', 3);
        }
        s += r(x + 66, 596, 80, 30, PAPER, 3);
        s += text(x + 106, 618, BAY[i], 18, INK, 'middle', 800);
        if (i < done) {
          s += p('M ' + (x + 80) + ' 160 l 22 22 l 40 -46', 'none',
                 ' stroke="' + OLIVE + '" stroke-width="9" stroke-linecap="round"'
                 + ' stroke-linejoin="round"');
        } else if (i === done) {
          s += text(x + 106, 168, '?', 44, RUST, 'middle', 800);
        }
      }
      return stage(s);
    },
    mid: function (arr) {
      /* the stepladder and the trolley - where they are in the aisle is the
         arrangement, and both stand on the floor */
      var P = slot(arr, [{ ld: 420, tr: 1140 },
                         { ld: 1180, tr: 400 },
                         { ld: 760, tr: 1240 }]);
      var s = shadow(P.ld, 790, 220);
      s += line(P.ld - 60, 786, P.ld - 6, 516, STEEL2, 16);
      s += line(P.ld + 60, 786, P.ld + 6, 516, STEEL2, 16);
      for (var i = 0; i < 3; i++) {
        s += r(P.ld - 52 + i * 8, 700 - i * 62, 104 - i * 16, 14, STEEL, 3);
      }
      s += shadow(P.tr, 796, 260);
      s += r(P.tr - 118, 690, 236, 22, STEEL2, 5);
      s += line(P.tr + 110, 690, P.tr + 110, 500, STEEL2, 14);
      s += r(P.tr + 56, 492, 110, 18, STEEL, 4);
      s += c(P.tr - 90, 778, 20, INK) + c(P.tr + 90, 778, 20, INK);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE FLOOR, below the waist line: two stacks pulled out to be counted
         and the tally on a clipboard leaning against one. The tallest thing here
         tops out at y=626, which is far below the 504 waist line - and that is
         why this room needs no surface span. */
      var s = '';
      var P = slot(arr, [{ a: 210, b: 1240, cl: 360 },
                         { a: 560, b: 180, cl: 700 },
                         { a: 1180, b: 620, cl: 1320 }]);
      s += shadow(P.a + 78, 792, 200);
      for (var i = 0; i < 3; i++) {
        s += r(P.a + (i % 2) * 9, 750 - i * 42, 156, 42,
               i % 2 ? '#b4885c' : '#c49a68', 3);
        s += line(P.a + 20 + (i % 2) * 9, 770 - i * 42,
                  P.a + 120 + (i % 2) * 9, 770 - i * 42, '#9b7347', 3);
      }
      s += text(P.a + 78, 786, 'COUNTED', 14, '#6f7a83', 'middle', 700);
      s += shadow(P.b + 70, 792, 180);
      for (var j = 0; j < 2; j++) {
        s += r(P.b + (j % 2) * 7, 750 - j * 42, 140, 42,
               j % 2 ? '#c49a68' : '#b4885c', 3);
      }
      s += text(P.b + 70, 786, 'NOT YET', 14, RUST, 'middle', 700);
      s += shadow(P.cl, 790, 90);
      s += r(P.cl - 44, 646, 88, 144, '#8d7d62', 4);
      s += r(P.cl - 36, 656, 72, 124, PAPER, 2);
      for (var k = 0; k < 4; k++) {
        s += line(P.cl - 26, 692 + k * 24, P.cl + 26, 692 + k * 24, '#cfc6b2', 3);
      }
      s += text(P.cl, 678, 'TALLY', 13, OLIVE, 'middle', 700);
      return stage(s);
    }
  };

  /* -------------------------------------------------- B1·12 · THE SIGNING DESK
     Unit 12: opinions, agreement and the decision. The log on the wall is the
     unit's argument in one picture - two decisions dated and signed, and a third
     line still empty, which is what the seven cycles are for. */
  MINE.signingdesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e2dbcd') + r(0, 0, W, 190, '#d0c8b6');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      s += r(170, 212, 560, 330, PAPER, 8);
      s += r(170, 212, 560, 50, INK, 4);
      s += text(450, 246, 'DECISIONS', 22, PAPER, 'middle', 800);
      var D = [['14 Mar', 'Book kept for the daily close', 'K.A.'],
               ['02 Jun', 'Saturdays: Mezzeh only, 6 weeks', 'K.A.'],
               ['', '', '']];
      for (var i = 0; i < D.length; i++) {
        var y = 310 + i * 76;
        s += line(190, y + 26, 710, y + 26, '#ded6c4', 3);
        if (D[i][0]) {
          s += text(192, y, D[i][0], 18, RUST, 'start', 700);
          s += text(290, y, D[i][1], 17, INK, 'start', 600);
          s += text(690, y, D[i][2], 17, OLIVE, 'end', 700);
        } else {
          s += text(192, y, '—', 18, '#c3bcab', 'start', 700);
        }
      }
      /* the clock, because this unit ends in a decision and decisions are timed */
      s += c(1230, 330, 108, PAPER);
      s += c(1230, 330, 98, '#f4eee2') + c(1230, 330, 9, INK);
      for (var h = 0; h < 12; h++) {
        var a = h * Math.PI / 6;
        s += c(1230 + Math.sin(a) * 80, 330 - Math.cos(a) * 80, 5, STEEL2);
      }
      s += line(1230, 330, 1230, 268, INK, 8);
      s += line(1230, 330, 1278, 356, INK, 6);
      return stage(s);
    },
    mid: function (arr) {
      /* the table, top at the declared y=558, and two chairs turned towards each
         other rather than towards the camera - this is a conversation, not a desk */
      var inx = slot(arr, [0, 28, -20]);
      var s = shadow(560 + inx, 724, 150);
      s += r(498 + inx, 502, 124, 22, WOOD2, 6);
      s += r(508 + inx, 524, 104, 114, '#b08a5e', 4);
      s += r(552 + inx, 638, 16, 78, WOOD2, 3);
      s += shadow(1050 - inx, 724, 150);
      s += r(988 - inx, 502, 124, 22, WOOD2, 6);
      s += r(998 - inx, 524, 104, 114, '#b08a5e', 4);
      s += r(1042 - inx, 638, 16, 78, WOOD2, 3);
      s += shadow(800, 736, 760);
      s += r(440, 558, 720, 152, WOOD, 6) + r(440, 546, 720, 20, WOOD2, 4);
      s += r(472, 604, 656, 10, '#8a6540', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the one page, two pens, and the date stamp. Surface
         440..1160, top 558. The stamp is the tallest at 46, so its top is 512 -
         below the waist line at 504 - and the page lies FLAT, as a page on a
         table does. The first draft of the interview room stood its CV up in a
         stand and failed all three arrangements; it is written down in both
         places on purpose, because it is the mistake this layer invites. */
      var TOP = 558, s = '';
      var P = slot(arr, [{ pg: 520, p1: 800, p2: 860, st: 1060 },
                         { pg: 660, p1: 500, p2: 560, st: 1080 },
                         { pg: 800, p1: 520, p2: 1100, st: 580 }]);
      s += sit(P.pg + 108, TOP, 236);
      s += rest(P.pg, TOP, 212, 12, PAPER, 2);
      s += line(P.pg + 16, TOP - 8, P.pg + 196, TOP - 8, '#d8d0bd', 3);
      s += text(P.pg + 108, TOP - 20, 'ONE PAGE', 13, STEEL2, 'middle', 700);
      s += sit(P.p1 + 22, TOP, 60);
      s += rest(P.p1, TOP, 44, 10, INK, 4);
      s += sit(P.p2 + 22, TOP, 60);
      s += rest(P.p2, TOP, 44, 10, RUST, 4);
      s += sit(P.st + 34, TOP, 86);
      s += rest(P.st, TOP, 68, 24, '#4b545f', 4);
      s += rest(P.st + 18, TOP - 24, 32, 22, INK, 3);
      s += text(P.st + 34, TOP - 52, 'DATE', 12, '#9aa4ac', 'middle', 700);
      return stage(s);
    }
  };

  /* ────────────────────────────────────────────────────────────────────────
     B1 BOOK 2 - FIVE ROOMS, AND WHY THESE FIVE.
     Units 13-24 use twelve rooms; seven of them this file already draws. The
     five below are the units whose own artefact the series has never had to
     put on a stage:

       13  diarywall     what is ARRANGED, with the evidence beside it
       15  incidentroom  the post-mortem, reconstructed on a table
       16  quotetable    three offers side by side, and a column that is a guess
       21  dealtable     two people, two columns, and what each gave up
       23  pressdesk     the trade press - confirmed, claimed, and not known

     Each obeys the contract at the head of this file: 1600x900, back/mid/fore,
     nothing in a fore layer painting above WAIST_Y=504 inside an actor column,
     three arrangements through slot(), and every prop RESTING on a declared
     surface rather than at a y chosen by eye.
     ──────────────────────────────────────────────────────────────────────── */

  /* UNIT 13. The month on the wall is the unit's whole grammar: a square with a
     time written in it is an arrangement, a square with a word in it is an
     intention, and an empty square is a prediction. The sailing timetable
     beside it is there because 13.5 is the timetable present - the vessel sails
     at 6.40 whatever anybody intends. */
  MINE.diarywall = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e4ddd0') + r(0, 0, W, 176, '#d3cbb9');
      s += r(0, 652, W, 248, FLOOR) + r(0, 652, W, 16, FLOOR2);
      /* the month: six columns, four rows, drawn as a grid and not as a picture
         of one, so the squares can carry different KINDS of entry */
      s += r(150, 196, 700, 392, PAPER, 8);
      s += r(150, 196, 700, 52, OLIVE, 4);
      s += text(500, 232, 'MARCH', 22, PAPER, 'middle', 800);
      var DAY = ['M', 'T', 'W', 'T', 'F', 'S'];
      for (var d = 0; d < 6; d++) {
        s += text(206 + d * 114, 274, DAY[d], 14, STEEL2, 'middle', 700);
      }
      /* 10.00 is arranged, "Aleppo?" is intended, the blanks are neither */
      var CELL = [['', '10.00', '', 'wrap', '', ''],
                  ['Aleppo?', '', '14.00', '', '', ''],
                  ['', '', '', '', '6.40', '']];
      for (var rw = 0; rw < CELL.length; rw++) {
        for (var cl = 0; cl < 6; cl++) {
          var x = 164 + cl * 114, y = 292 + rw * 96;
          s += r(x, y, 104, 86, '#f4efe3', 3);
          s += line(x, y, x + 104, y, '#ddd5c2', 2);
          var v = CELL[rw][cl];
          if (v) {
            var arranged = /^[0-9]/.test(v);
            s += text(x + 52, y + 50, v, arranged ? 19 : 17,
                      arranged ? INK : '#a79f8e', 'middle', arranged ? 700 : 600);
          }
        }
      }
      s += text(500, 612, 'a time is an arrangement  ·  a word is an intention',
                15, '#9a9382', 'middle', 600);
      /* the sailing timetable: fixed, public, and nobody's intention */
      s += r(1010, 208, 440, 372, PAPER, 8);
      s += r(1010, 208, 440, 46, STEEL2, 4);
      s += text(1230, 240, 'SAILINGS', 18, PAPER, 'middle', 800);
      var SAIL = [['Lattakia', '06.40'], ['Tartus', '11.15'],
                  ['Lattakia', '18.00'], ['Tartus', '22.30']];
      for (var i = 0; i < SAIL.length; i++) {
        var sy = 288 + i * 68;
        s += line(1030, sy + 22, 1430, sy + 22, '#ded6c4', 2);
        s += text(1032, sy + 10, SAIL[i][0], 17, INK, 'start', 600);
        s += text(1428, sy + 10, SAIL[i][1], 18, RUST, 'end', 700);
      }
      return stage(s);
    },
    mid: function (arr) {
      /* a long table under the wall, top at the declared y=562 */
      var inx = slot(arr, [0, 26, -18]);
      var s = shadow(800, 742, 820);
      s += r(380, 562, 840, 146, WOOD, 6) + r(380, 550, 840, 20, WOOD2, 4);
      s += r(418, 606, 764, 10, '#8a6540', 3);
      /* one chair, pushed in - this room is read standing up */
      s += shadow(520 + inx, 730, 140);
      s += r(462 + inx, 512, 116, 20, WOOD2, 6);
      s += r(470 + inx, 532, 100, 106, '#b08a5e', 4);
      s += r(512 + inx, 638, 14, 74, WOOD2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the desk diary open, the confirmation that makes an
         arrangement an arrangement, and a pen. Surface 380..1220, top 562. The
         tallest is the diary's open board at 44, so its top is 518 - below the
         waist line at 504. The diary lies FLAT and open; it is not stood up. */
      var TOP = 562, s = '';
      var P = slot(arr, [{ dy: 470, cf: 820, pn: 1080 },
                         { dy: 700, cf: 440, pn: 1140 },
                         { dy: 940, cf: 560, pn: 420 }]);
      s += sit(P.dy + 132, TOP, 284);
      s += rest(P.dy, TOP, 264, 14, PAPER, 2);
      s += rest(P.dy + 128, TOP - 14, 8, 30, '#d8d0bd', 1);
      s += line(P.dy + 18, TOP - 10, P.dy + 118, TOP - 10, '#ded6c4', 3);
      s += line(P.dy + 146, TOP - 10, P.dy + 246, TOP - 10, '#ded6c4', 3);
      s += text(P.dy + 132, TOP - 34, 'DIARY', 13, STEEL2, 'middle', 700);
      s += sit(P.cf + 86, TOP, 184);
      s += rest(P.cf, TOP, 172, 12, '#f1ead9', 2);
      s += text(P.cf + 86, TOP - 26, 'CONFIRMED 10.00', 12, OLIVE, 'middle', 700);
      s += sit(P.pn + 22, TOP, 60);
      s += rest(P.pn, TOP, 46, 10, INK, 4);
      return stage(s);
    }
  };

  /* UNIT 15. The post-mortem room. The thing itself is on the table with the
     paper that was supposed to prevent it, and the board behind carries the
     five parts in order - because 15.6 is that page and the unit's point is that
     "what went wrong" and "what we would do differently" are different lines. */
  MINE.incidentroom = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e1dace') + r(0, 0, W, 184, '#cfc7b5');
      s += r(0, 646, W, 254, FLOOR) + r(0, 646, W, 16, FLOOR2);
      /* the five-part board */
      s += r(170, 196, 800, 404, PAPER, 8);
      s += r(170, 196, 800, 50, RUST, 4);
      s += text(570, 230, 'POST-MORTEM', 21, PAPER, 'middle', 800);
      var FIVE = ['1  what happened', '2  what it cost',
                  '3  what should have been asked', '4  what we have changed',
                  '5  what is still open'];
      for (var i = 0; i < FIVE.length; i++) {
        var y = 276 + i * 62;
        s += c(206, y + 14, 7, i < 4 ? OLIVE : '#c3bcab');
        s += text(228, y + 22, FIVE[i], 18, i < 4 ? INK : '#a79f8e', 'start', 600);
        s += line(190, y + 44, 950, y + 44, '#e4dccb', 2);
      }
      /* and the one line nobody writes: the date it was still cheap */
      s += r(1060, 234, 392, 236, PAPER, 8);
      s += r(1060, 234, 392, 44, STEEL2, 4);
      s += text(1256, 264, 'STILL RECOVERABLE', 15, PAPER, 'middle', 800);
      s += text(1256, 344, '14 Feb', 40, RUST, 'middle', 800);
      s += text(1256, 400, 'nothing was reported', 15, '#9a9382', 'middle', 600);
      s += text(1256, 432, 'that day', 15, '#9a9382', 'middle', 600);
      return stage(s);
    },
    mid: function (arr) {
      var inx = slot(arr, [0, 30, -22]);
      var s = shadow(800, 746, 900);
      s += r(260, 556, 1080, 156, WOOD, 6) + r(260, 544, 1080, 20, WOOD2, 4);
      s += r(300, 602, 1000, 10, '#8a6540', 3);
      s += shadow(1180 + inx, 732, 140);
      s += r(1122 + inx, 508, 116, 20, WOOD2, 6);
      s += r(1130 + inx, 528, 100, 106, '#b08a5e', 4);
      s += r(1172 + inx, 634, 14, 76, WOOD2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the damp carton that is the evidence, the gate sheet that
         was supposed to prevent it, and the tape measure. Surface 260..1340,
         top 556.

         ⚠ AND THE CARTON DOES NOT ROTATE, BECAUSE THERE IS NOWHERE FOR IT TO GO.
         The comment here used to say it was "placed in the arrangements only at
         x values clear of both actor columns, and clearOf is what proves it" -
         clearOf was never called, and it was not clear: the carton is 92 tall on
         a surface at 556, so its top is 464 and its label 448, both inside the
         chest band (405..504). The actor columns of this room are the spots
         0.19, 0.73 and 0.47 of 1600, each 136 either side:

             [168, 440]      [616, 888]      [1032, 1304]

         which leaves exactly one gap wide enough for a 92-tall prop, 440..616.
         Arrangement 0 put the carton at 760 (47% of the middle actor's chest)
         and arrangement 1 at 1140 (57% of the right one's); arrangement 2 sat
         20px inside the left column and passed the 6% allowance on margin
         alone, which is a flake waiting for a spot to move.

         So the carton is fixed, centred in that gap at 456..600, and the
         variety comes from the two FLAT props: the gate sheet is 12 tall and
         the tape measure 34, tops at 544 and 522, both below the chest band
         where furniture is expected and allowed. */
      var TOP = 556, s = '', BX = 456;
      var P = slot(arr, [{ gs: 660, tm: 1180 },
                         { gs: 1060, tm: 660 },
                         { gs: 260, tm: 980 }]);
      s += sit(BX + 72, TOP, 158);
      s += rest(BX, TOP, 144, 92, '#c6a572', 3);
      s += line(BX, TOP - 48, BX + 144, TOP - 48, '#a98a5c', 3);
      s += rest(BX + 42, TOP - 92, 60, 10, '#b4925f', 2);
      s += text(BX + 72, TOP - 108, '9 DAMP', 12, RUST, 'middle', 700);
      s += sit(P.gs + 96, TOP, 206);
      s += rest(P.gs, TOP, 192, 12, PAPER, 2);
      s += line(P.gs + 16, TOP - 8, P.gs + 176, TOP - 8, '#ded6c4', 3);
      s += text(P.gs + 96, TOP - 24, 'GATE SHEET', 12, STEEL2, 'middle', 700);
      s += sit(P.tm + 34, TOP, 88);
      s += rest(P.tm, TOP, 70, 34, OLIVE, 6);
      s += c(P.tm + 35, TOP - 17, 10, '#f4efe3');
      return stage(s);
    }
  };

  /* UNIT 16. Three quotations side by side. The columns are the unit: landed
     cost is not the price on the paper, and one column of the three is a guess -
     which is 16.6, and is why the third sheet carries a question mark where the
     others carry a number. */
  MINE.quotetable = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e4ddd0') + r(0, 0, W, 180, '#d3cbb9');
      s += r(0, 650, W, 250, FLOOR) + r(0, 650, W, 16, FLOOR2);
      /* the comparison, on the wall, as a table with a named dimension per row */
      s += r(140, 196, 1320, 398, PAPER, 8);
      s += r(140, 196, 1320, 52, OLIVE, 4);
      s += text(800, 232, 'THREE OFFERS  ·  LANDED', 21, PAPER, 'middle', 800);
      var HEAD = ['', 'Shamsi', 'Maarouf', 'Tarabishi'];
      var ROW = [['price / roll', '1,180', '1,090', '1,140'],
                 ['carriage', '    40', '   140', '    0'],
                 ['landed', '1,220', '1,230', '1,140'],
                 ['days', '    4', '    9', '    ?']];
      for (var h = 0; h < 4; h++) {
        s += text(h === 0 ? 180 : 500 + h * 300, 290, HEAD[h], 17,
                  STEEL2, h === 0 ? 'start' : 'middle', 700);
      }
      for (var i = 0; i < ROW.length; i++) {
        var y = 334 + i * 60, hot = (ROW[i][0] === 'landed');
        s += line(170, y + 26, 1430, y + 26, '#e4dccb', 2);
        s += text(180, y + 16, ROW[i][0], 17, hot ? INK : '#8e8777',
                  'start', hot ? 700 : 600);
        for (var j = 1; j < 4; j++) {
          var v = ROW[i][j].trim();
          s += text(500 + j * 300, y + 16, v, hot ? 22 : 18,
                    v === '?' ? RUST : (hot ? INK : '#6d665a'), 'middle',
                    hot ? 800 : 600);
        }
      }
      s += text(800, 572, 'the cheapest roll is not the cheapest offer',
                15, '#9a9382', 'middle', 600);
      return stage(s);
    },
    mid: function (arr) {
      var inx = slot(arr, [0, 24, -26]);
      var s = shadow(800, 744, 860);
      s += r(300, 560, 1000, 150, WOOD, 6) + r(300, 548, 1000, 20, WOOD2, 4);
      s += r(338, 606, 924, 10, '#8a6540', 3);
      s += shadow(420 + inx, 730, 140);
      s += r(362 + inx, 510, 116, 20, WOOD2, 6);
      s += r(370 + inx, 530, 100, 106, '#b08a5e', 4);
      s += r(412 + inx, 636, 14, 74, WOOD2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the three quotations as three flat sheets, fanned, and the
         calculator. Surface 300..1300, top 560. The calculator is the tallest at
         26, top 534, below the waist line. The sheets lie flat because a
         quotation on a table is read, not displayed. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ q: 420, cal: 1120 },
                         { q: 760, cal: 380 },
                         { q: 1020, cal: 700 }]);
      for (var i = 0; i < 3; i++) {
        var x = P.q + i * 54;
        s += sit(x + 82, TOP, 176);
        s += rest(x, TOP, 164, 12 - i * 2, i === 2 ? '#f6f0e2' : PAPER, 2);
        s += line(x + 14, TOP - 8, x + 150, TOP - 8, '#ded6c4', 3);
      }
      s += text(P.q + 136, TOP - 28, 'QUOTATIONS', 12, STEEL2, 'middle', 700);
      s += sit(P.cal + 42, TOP, 104);
      s += rest(P.cal, TOP, 84, 26, '#4b545f', 5);
      s += rest(P.cal + 10, TOP - 22, 64, 12, '#b9c6b0', 2);
      return stage(s);
    }
  };

  /* UNIT 21. Two people, one table, and a page with a line down the middle.
     The two columns are the unit: 21.3 is never a concession without one, so
     what is drawn is a page where each side has given something up, and both
     columns have the same number of lines. */
  MINE.dealtable = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e2dbcd') + r(0, 0, W, 188, '#d0c8b6');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      /* the two-column page, on the wall, so the room states its own grammar */
      s += r(300, 200, 1000, 388, PAPER, 8);
      s += r(300, 200, 1000, 50, STEEL2, 4);
      s += text(800, 234, 'WHAT EACH SIDE GAVE', 20, PAPER, 'middle', 800);
      s += line(800, 250, 800, 588, '#ded6c4', 3);
      s += text(550, 292, 'we gave', 16, OLIVE, 'middle', 700);
      s += text(1050, 292, 'they gave', 16, RUST, 'middle', 700);
      var OURS = ['60 days', 'Thursday delivery', 'price held 3 months'];
      var THEIRS = ['40 rolls a month', 'no returns after 14 days',
                    '14 days notice of a rise'];
      for (var i = 0; i < 3; i++) {
        var y = 346 + i * 72;
        s += c(342, y + 10, 6, OLIVE);
        s += text(360, y + 18, OURS[i], 17, INK, 'start', 600);
        s += c(842, y + 10, 6, RUST);
        s += text(860, y + 18, THEIRS[i], 17, INK, 'start', 600);
        s += line(320, y + 40, 1280, y + 40, '#e4dccb', 2);
      }
      s += text(800, 572, 'three each  ·  a concession with nothing back is a loss',
                14, '#9a9382', 'middle', 600);
      return stage(s);
    },
    mid: function (arr) {
      /* two chairs facing each other across the table - a negotiation is two
         people on opposite sides, which the geometry has to say */
      var inx = slot(arr, [0, 26, -24]);
      var s = shadow(540 + inx, 726, 148);
      s += r(480 + inx, 504, 120, 22, WOOD2, 6);
      s += r(490 + inx, 526, 102, 112, '#b08a5e', 4);
      s += r(532 + inx, 638, 16, 76, WOOD2, 3);
      s += shadow(1060 - inx, 726, 148);
      s += r(1000 - inx, 504, 120, 22, WOOD2, 6);
      s += r(1010 - inx, 526, 102, 112, '#b08a5e', 4);
      s += r(1052 - inx, 638, 16, 76, WOOD2, 3);
      s += shadow(800, 738, 740);
      s += r(420, 558, 760, 152, WOOD, 6) + r(420, 546, 760, 20, WOOD2, 4);
      s += r(456, 604, 688, 10, '#8a6540', 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the two-column page, two glasses of tea - one each, which
         is the point - and a pen. Surface 420..1180, top 558. The glasses are
         the tallest at 56, top 502, which clears the waist line at 504 by 2 and
         is why they are 56 and not 60. */
      var TOP = 558, s = '';
      var P = slot(arr, [{ pg: 640, t1: 480, t2: 1080, pn: 940 },
                         { pg: 820, t1: 520, t2: 1120, pn: 460 },
                         { pg: 500, t1: 760, t2: 1140, pn: 1060 }]);
      s += sit(P.pg + 104, TOP, 228);
      s += rest(P.pg, TOP, 208, 12, PAPER, 2);
      s += line(P.pg + 104, TOP - 12, P.pg + 104, TOP, '#ded6c4', 2);
      s += text(P.pg + 104, TOP - 24, 'TWO COLUMNS', 12, STEEL2, 'middle', 700);
      s += sit(P.t1 + 20, TOP, 56);
      s += rest(P.t1, TOP, 40, 56, '#c98b4a', 3);
      s += rest(P.t1 + 4, TOP - 52, 32, 8, '#f0d9b4', 2);
      s += sit(P.t2 + 20, TOP, 56);
      s += rest(P.t2, TOP, 40, 56, '#c98b4a', 3);
      s += rest(P.t2 + 4, TOP - 52, 32, 8, '#f0d9b4', 2);
      s += sit(P.pn + 22, TOP, 60);
      s += rest(P.pn, TOP, 46, 10, INK, 4);
      return stage(s);
    }
  };

  /* UNIT 23. The trade press. Three sentences, three kinds: what is confirmed,
     what is claimed, and what is not known - which is 23.5, and is drawn as
     three stacked strips in three weights, because the unit's whole work is
     telling them apart on a page that prints them in the same type. */
  MINE.pressdesk = {
    back: function (arr) {
      var s = r(0, 0, W, H, '#e4ddd0') + r(0, 0, W, 178, '#d3cbb9');
      s += r(0, 650, W, 250, FLOOR) + r(0, 650, W, 16, FLOOR2);
      /* the market note, pinned: the three kinds, labelled */
      s += r(160, 196, 760, 396, PAPER, 8);
      s += r(160, 196, 760, 50, INK, 4);
      s += text(540, 230, 'MARKET NOTE  ·  12 MAR', 19, PAPER, 'middle', 800);
      var KIND = [['CONFIRMED', OLIVE, 'The port reopened on the 9th.'],
                  ['CLAIMED', RUST, 'Two importers say stocks are short.'],
                  ['NOT KNOWN', '#8e8777', 'Whether the tariff changes in April.']];
      for (var i = 0; i < KIND.length; i++) {
        var y = 276 + i * 104;
        s += r(184, y, 712, 84, '#f4efe3', 4);
        s += r(184, y, 10, 84, KIND[i][1], 2);
        s += text(208, y + 30, KIND[i][0], 13, KIND[i][1], 'start', 800);
        s += text(208, y + 62, KIND[i][2], 17, INK, 'start', 600);
      }
      /* the newspaper on the wall behind, as columns and not as words */
      s += r(1000, 214, 450, 366, PAPER, 6);
      s += text(1225, 258, 'AL-IQTISAD', 20, INK, 'middle', 800);
      s += line(1020, 276, 1430, 276, INK, 3);
      for (var col = 0; col < 3; col++) {
        for (var ln = 0; ln < 11; ln++) {
          var lx = 1022 + col * 142, ly = 302 + ln * 24;
          s += r(lx, ly, (ln === 10 ? 72 : 126), 7, '#ddd5c2', 2);
        }
      }
      return stage(s);
    },
    mid: function (arr) {
      var inx = slot(arr, [0, 28, -20]);
      var s = shadow(800, 744, 840);
      s += r(340, 560, 920, 150, WOOD, 6) + r(340, 548, 920, 20, WOOD2, 4);
      s += r(378, 606, 844, 10, '#8a6540', 3);
      s += shadow(1140 + inx, 730, 140);
      s += r(1082 + inx, 510, 116, 20, WOOD2, 6);
      s += r(1090 + inx, 530, 100, 106, '#b08a5e', 4);
      s += r(1132 + inx, 636, 14, 74, WOOD2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the newspaper folded flat, the radio that is where
         "it is understood that" comes from, and a pen. Surface 340..1260, top
         560. The radio is the tallest at 64, top 496 - above the waist line at
         504 by 8 - so its x values in all three arrangements sit clear of both
         actor columns, and clearOf is what proves that rather than my eye. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ np: 480, rd: 1140, pn: 880 },
                         { np: 860, rd: 400, pn: 1180 },
                         { np: 1020, rd: 740, pn: 420 }]);
      s += sit(P.np + 110, TOP, 240);
      s += rest(P.np, TOP, 220, 14, PAPER, 2);
      s += line(P.np + 110, TOP - 14, P.np + 110, TOP, '#ded6c4', 2);
      s += line(P.np + 16, TOP - 9, P.np + 96, TOP - 9, '#ded6c4', 3);
      s += text(P.np + 110, TOP - 28, 'FOLDED', 12, STEEL2, 'middle', 700);
      s += sit(P.rd + 54, TOP, 128);
      s += rest(P.rd, TOP, 108, 64, '#6b6252', 5);
      s += c(P.rd + 34, TOP - 34, 20, '#4b4539');
      s += c(P.rd + 34, TOP - 34, 12, '#8e8777');
      s += rest(P.rd + 62, TOP - 44, 34, 8, '#b9b0a0', 2);
      s += rest(P.rd + 62, TOP - 28, 34, 8, '#b9b0a0', 2);
      s += sit(P.pn + 22, TOP, 60);
      s += rest(P.pn, TOP, 46, 10, INK, 4);
      return stage(s);
    }
  };

  /* ================================================================
     B2 BOOK 1 - SIX ROOMS. The level stops reporting and starts ARGUING, so
     every one of these rooms has a DOCUMENT in it and the document is drawn as
     the thing the unit turns on: unit 1's first four lines are legible on the
     wall and the rest of the page is grey; unit 5's policy is drawn as its own
     three parts; unit 9's draft carries twelve numbered lines with four of them
     ruled in another hand.

     Every tall prop below stands at an x taken from its room's own gap list in
     SPOTS above, so `clearOf` is satisfied by construction.
     ================================================================ */

  /* UNIT 1. The room where your own paper is read back to you. The note on the
     wall is the unit's lesson and not decoration: the first four lines are in
     ink and full size, and everything after them is grey rule - "I read four
     lines, of anything". Gaps 488..616 and 888..1016. */
  MINE.directorsroom = {
    back: function () {
      var s = r(0, 0, W, H, '#ded5c6') + r(0, 0, W, 196, '#cdc3b0');
      s += r(0, 640, W, 260, FLOOR) + r(0, 640, W, 16, FLOOR2);
      /* the panelling, which is what a room like this is made of */
      s += r(0, 196, W, 300, '#d6ccb9');
      for (var i = 0; i < 8; i++) s += line(200 * i, 196, 200 * i, 496, '#c6bba6', 4);
      /* THE NOTE, framed: four lines a reader can act on, then grey */
      s += r(300, 218, 600, 372, PAPER, 8);
      s += r(300, 218, 600, 372, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="9"');
      s += text(600, 262, 'NOTE  ·  THE DALLAL LETTER', 19, STEEL2, 'middle', 700);
      var FOUR = ['We should refuse the extension.',
                  'It would cost us 4.1m this quarter.',
                  'The decision is yours, not the committee’s.',
                  'I need your answer by Thursday.'];
      for (var j = 0; j < 4; j++) {
        s += text(330, 308 + j * 34, FOUR[j], 17, INK, 'start', 600);
      }
      s += line(330, 452, 870, 452, '#ded6c4', 3);
      for (var g = 0; g < 4; g++) {
        s += r(330, 470 + g * 26, (g === 3 ? 300 : 540), 9, '#e2dacb', 3);
      }
      s += text(600, 572, 'and everything after them', 14, '#a9a192', 'middle', 500);
      /* the appointment board - who has decided, and who only thinks so */
      s += r(1010, 240, 440, 300, '#f2eee4', 6);
      s += r(1010, 240, 440, 46, OLIVE, 4);
      s += text(1230, 272, 'DECIDED  ·  OPEN', 17, PAPER, 'middle', 800);
      var ROW = [['Beirut depot', 'DECIDED'], ['March terms', 'OPEN'],
                 ['Haddad facility', 'OPEN'], ['Store rent', 'DECIDED']];
      for (var k = 0; k < ROW.length; k++) {
        var ry = 302 + k * 58;
        s += text(1032, ry + 22, ROW[k][0], 16, INK, 'start', 600);
        s += text(1428, ry + 22, ROW[k][1], 14,
                  ROW[k][1] === 'DECIDED' ? OLIVE : RUST, 'end', 800);
        s += line(1032, ry + 40, 1428, ry + 40, '#e0d8c7', 2);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 756, 880);
      /* the desk this room is about - 420..1180, top 558 */
      s += r(420, 558, 760, 170, WOOD, 6) + r(420, 546, 760, 20, WOOD2, 4);
      s += r(462, 606, 676, 12, '#8a6540', 3);
      /* his chair behind it, and the arrangement is how far it is turned */
      var cx = slot(arr, [1248, 1296, 1216]);
      s += shadow(cx, 742, 190);
      s += r(cx - 84, 470, 168, 30, WOOD2, 8);
      s += r(cx - 74, 500, 148, 120, '#8d7b63', 6);
      s += r(cx - 12, 620, 24, 112, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the note itself, a pen, and the lamp. The lamp is 74 tall,
         top 484 - above WAIST_Y - so it rotates between 496, 896 and 512, all
         from this room's gap list. The note and pen are 40 and 10 tall, tops
         518 and 548, below the waist line where clearOf exempts them. */
      var TOP = 558, s = '';
      var P = slot(arr, [{ nt: 560, pn: 880, lp: 496 },
                         { nt: 700, pn: 1060, lp: 896 },
                         { nt: 940, pn: 660, lp: 512 }]);
      s += sit(P.nt + 96, TOP, 210);
      s += rest(P.nt, TOP, 192, 40, PAPER, 3);
      for (var i = 0; i < 4; i++) {
        s += line(P.nt + 16, TOP - 32 + i * 8, P.nt + 150, TOP - 32 + i * 8,
                  '#ded6c4', 3);
      }
      s += sit(P.pn + 24, TOP, 62);
      s += rest(P.pn, TOP, 48, 10, INK, 4);
      s += sit(P.lp + 48, TOP, 104);
      s += rest(P.lp + 38, TOP, 20, 74, STEEL2, 4);
      s += rest(P.lp + 14, TOP, 68, 10, STEEL2, 4);
      s += r(P.lp, TOP - 94, 96, 32, '#8e9aa3', 10);
      s += r(P.lp + 10, TOP - 68, 76, 8, '#f6e9c4', 4);
      return stage(s);
    }
  };

  /* UNIT 2. The file room, and not the archive: the archive is where a thing
     goes when it is finished, and unit 2 asks what THIS year's file supports
     before you write "it was decided". So the wall is the current four
     quarters, and the box that is out has its approval slip showing - with one
     signature on it and one blank, which is 2.5's hedged agency. Gaps 424..600
     and 872..1048. */
  MINE.fileroom = {
    back: function () {
      var s = r(0, 0, W, H, '#e0d8ca') + r(0, 0, W, 170, '#cfc6b3');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      /* four quarters of box files, this year only */
      var Q = ['Q1', 'Q2', 'Q3', 'Q4'];
      for (var band = 0; band < 2; band++) {
        var by = 196 + band * 190;
        s += r(120, by, 1360, 174, '#d8cfbc', 4);
        s += r(120, by + 160, 1360, 14, WOOD2, 3);
        for (var i = 0; i < 12; i++) {
          var bx = 136 + i * 112;
          s += r(bx, by + 14, 100, 146, band ? '#c9bda9' : '#d6c9ae', 4);
          s += r(bx + 10, by + 40, 80, 34, PAPER, 3);
          s += text(bx + 50, by + 64, Q[(i + band * 2) % 4] + '·' + (i + 1),
                    15, INK, 'middle', 700);
          s += r(bx + 34, by + 122, 32, 10, STEEL2, 4);
        }
      }
      /* the box that is OUT, with the approval slip in it */
      s += r(1060, 92, 420, 86, PAPER, 6);
      s += text(1270, 126, 'APPROVAL  ·  SECOND CONSIGNMENT', 16, INK,
                'middle', 700);
      s += text(1160, 160, 'Approved: N. Haddad', 14, OLIVE, 'middle', 600);
      s += text(1392, 160, 'Checked: —', 14, RUST, 'middle', 700);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 768, 1060);
      /* the long table - 260..1340, top 556 */
      s += r(260, 556, 1080, 160, WOOD, 6) + r(260, 544, 1080, 20, WOOD2, 4);
      s += r(300, 602, 1000, 12, '#8a6540', 3);
      /* the trolley the boxes came on, wheeled to one end or the other */
      var tx = slot(arr, [120, 1400, 132]);
      s += shadow(tx, 760, 170);
      s += r(tx - 76, 520, 152, 22, STEEL2, 4);
      s += r(tx - 68, 542, 136, 92, '#b9b0a0', 4);
      s += c(tx - 50, 748, 16, STEEL2) + c(tx + 50, 748, 16, STEEL2);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: two box files lying flat, the slip, and the one standing
         upright. The standing box is 84 tall, top 472, so it rotates between
         432, 880 and 940 - this room's gaps. The flat boxes are 48 tall, top
         508, below the waist line and exempt.
         ⚠ THEIR HANDLES WERE NOT. Drawn on TOP of a flat box at TOP-48 they sat
         at y=498, six pixels above the waist line and 140 wide - far too wide
         for any gap - so each one painted inside an actor column in every
         arrangement. A prop being exempt does not make the thing ON it exempt.
         The handle is now on the box's front face, at TOP-26. */
      var TOP = 556, s = '';
      var P = slot(arr, [{ a: 300, b: 1140, sl: 700, up: 432 },
                         { a: 640, b: 1160, sl: 340, up: 880 },
                         { a: 1060, b: 320, sl: 1180, up: 940 }]);
      s += sit(P.a + 70, TOP, 156);
      s += rest(P.a, TOP, 140, 48, '#d6c9ae', 4);
      s += rest(P.a + 42, TOP - 26, 56, 10, STEEL2, 3);
      s += sit(P.b + 70, TOP, 156);
      s += rest(P.b, TOP, 140, 48, '#c9bda9', 4);
      s += rest(P.b + 42, TOP - 26, 56, 10, STEEL2, 3);
      s += sit(P.sl + 54, TOP, 120);
      s += rest(P.sl, TOP, 108, 14, PAPER, 2);
      s += line(P.sl + 14, TOP - 8, P.sl + 94, TOP - 8, '#ded6c4', 3);
      s += sit(P.up + 44, TOP, 98);
      s += rest(P.up, TOP, 88, 84, '#d6c9ae', 5);
      s += rest(P.up + 12, TOP - 54, 64, 26, PAPER, 3);
      s += text(P.up + 44, TOP - 34, 'Q3', 15, INK, 'middle', 700);
      return stage(s);
    }
  };

  /* UNIT 5. The policy desk. The sheet on the wall is drawn as the three parts
     the unit teaches - SCOPE, EXCLUSIONS, and WHO MAY DECIDE AN EXCEPTION -
     because the unit's whole work is that a policy has those and a procedure
     does not. ⚠ This is why unit 5 is NOT in the noticeboard: that room is this
     series' wall of procedure, and it would have taught the opposite of the
     lesson. Gaps 456..600 and 872..984. */
  MINE.policydesk = {
    back: function () {
      var s = r(0, 0, W, H, '#e2dacb') + r(0, 0, W, 182, '#d1c8b5');
      s += r(0, 646, W, 254, FLOOR) + r(0, 646, W, 16, FLOOR2);
      /* the draft policy, pinned - its three parts, labelled */
      s += r(150, 206, 720, 396, PAPER, 8);
      s += r(150, 206, 720, 54, INK, 4);
      s += text(510, 242, 'POLICY  ·  CREDIT TERMS  ·  DRAFT 3', 19,
                PAPER, 'middle', 800);
      var PART = [['SCOPE', OLIVE, 'Every customer account opened after 1 April.'],
                  ['EXCLUSIONS', RUST, 'Not staff accounts. Not the two depots.'],
                  ['EXCEPTION', STEEL2, 'The finance director, in writing, once.']];
      for (var i = 0; i < PART.length; i++) {
        var y = 282 + i * 104;
        s += r(174, y, 672, 84, '#f4efe3', 4);
        s += r(174, y, 10, 84, PART[i][1], 2);
        s += text(198, y + 30, PART[i][0], 13, PART[i][1], 'start', 800);
        s += text(198, y + 62, PART[i][2], 16, INK, 'start', 600);
      }
      /* beside it, the procedure it is NOT: a numbered list of steps */
      s += r(960, 230, 490, 350, '#f2eee4', 6);
      s += text(1205, 268, 'PROCEDURE  (not a policy)', 16, STEEL2, 'middle', 700);
      s += line(980, 286, 1430, 286, '#ded6c4', 3);
      for (var j = 0; j < 7; j++) {
        s += text(1000, 322 + j * 34, (j + 1) + '.', 15, '#a9a192', 'start', 700);
        s += r(1026, 310 + j * 34, (j === 6 ? 220 : 390), 9, '#ddd5c2', 3);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 762, 940);
      /* the desk - 360..1240, top 560 */
      s += r(360, 560, 880, 164, WOOD, 6) + r(360, 548, 880, 20, WOOD2, 4);
      s += r(402, 608, 796, 12, '#8a6540', 3);
      var cx = slot(arr, [248, 1352, 262]);
      s += shadow(cx, 746, 180);
      s += r(cx - 78, 478, 156, 28, WOOD2, 8);
      s += r(cx - 68, 506, 136, 116, '#8d7b63', 6);
      s += r(cx - 12, 622, 24, 112, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the draft, the stamp that makes an exception official, and
         the box file of what the old rule cost. The box is 76 tall, top 484, so
         it takes 460, 876 or 480 from this room's gaps. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ dr: 640, st: 1080, bx: 460 },
                         { dr: 980, st: 420, bx: 876 },
                         { dr: 700, st: 1160, bx: 480 }]);
      s += sit(P.dr + 92, TOP, 200);
      s += rest(P.dr, TOP, 184, 42, PAPER, 3);
      s += rest(P.dr + 16, TOP - 34, 60, 12, OLIVE, 2);
      for (var i = 0; i < 3; i++) {
        s += line(P.dr + 16, TOP - 18 + i * 6, P.dr + 150, TOP - 18 + i * 6,
                  '#ded6c4', 3);
      }
      s += sit(P.st + 32, TOP, 78);
      s += rest(P.st, TOP, 64, 20, '#6b6252', 4);
      s += rest(P.st + 22, TOP - 20, 20, 30, STEEL2, 4);
      s += sit(P.bx + 48, TOP, 104);
      s += rest(P.bx, TOP, 96, 76, '#d6c9ae', 5);
      s += rest(P.bx + 14, TOP - 52, 68, 24, PAPER, 3);
      s += text(P.bx + 48, TOP - 34, 'TERMS', 13, INK, 'middle', 700);
      return stage(s);
    }
  };

  /* UNIT 8. The bank desk. The unit is numbers in prose, so the wall is the
     rate board a figure comes FROM and the facility paper is drawn as eleven
     sentences rather than nine numbers - which is 8.3 and the line Nour is
     given in track 8.3. Gaps 440..584 and 856..1032. */
  MINE.bankdesk = {
    back: function () {
      var s = r(0, 0, W, H, '#dcd4c6') + r(0, 0, W, 190, '#c7bda9');
      s += r(0, 650, W, 250, FLOOR) + r(0, 650, W, 16, FLOOR2);
      /* the board a figure has a basis in */
      s += r(130, 204, 560, 384, '#2f3640', 8);
      s += text(410, 250, 'RATES  ·  12 MARCH', 19, '#f0d9b4', 'middle', 800);
      s += line(154, 268, 666, 268, '#59616d', 3);
      var RT = [['Facility', '9.5%'], ['Overdraft', '13.0%'],
                ['90 days', '11.25%'], ['Deposit', '4.0%'],
                ['Last month', '9.0%'], ['Base', '8.5%']];
      for (var i = 0; i < RT.length; i++) {
        var y = 300 + i * 46;
        s += text(156, y + 22, RT[i][0], 17, '#c9d2dc', 'start', 600);
        s += text(664, y + 22, RT[i][1], 17,
                  i === 4 ? '#d9a06a' : '#f4efe3', 'end', 800);
      }
      /* the facility paper: eleven sentences, each with its basis */
      s += r(770, 214, 690, 374, PAPER, 8);
      s += r(770, 214, 690, 48, OLIVE, 4);
      s += text(1115, 246, 'FACILITY PAPER  ·  ELEVEN SENTENCES', 18,
                PAPER, 'middle', 800);
      for (var j = 0; j < 11; j++) {
        var ly = 278 + j * 28;
        s += text(792, ly + 14, (j + 1), 12, '#a9a192', 'start', 700);
        s += r(816, ly + 4, (j % 3 === 2 ? 420 : 606), 10, '#e4dccb', 3);
        if (j % 4 === 1) s += r(816, ly + 4, 92, 10, '#cfbf9a', 3);
      }
      s += text(1115, 606, 'period  ·  basis  ·  source', 15, STEEL2,
                'middle', 600);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 760, 1020);
      /* the counter - 300..1300, top 556 */
      s += r(300, 556, 1000, 166, STONE2, 6) + r(300, 542, 1000, 22, STONE, 4);
      s += r(340, 606, 920, 12, '#bdb09a', 3);
      /* The teller's glass screen, the hanging sign, and which window is open -
         this room's arrangement. All three are in the MID layer, which the
         player stacks BEHIND the cast (back, mid, CAST, fore), so a screen that
         crosses a chest passes behind the person's shoulder and is simply what a
         bank looks like. Only the FORE layer draws over the cast, and the chest
         band gates/pbe_art.py measures is measured on the fore layer alone -
         which is why the loose props below are pinned to this room's gaps and
         this screen needs no such care. I nearly deleted the screen for
         crossing a chest it was always behind. */
      var win = slot(arr, [0, 1, 2]);
      s += r(470, 112, 660, 84, '#2f3640', 8);
      s += text(800, 152, 'ENQUIRIES  ·  FACILITIES', 22, '#f0d9b4',
                'middle', 800);
      s += text(800, 182, 'NOW SERVING  ·  WINDOW ' + (win + 1), 17,
                '#9fb0a0', 'middle', 700);
      s += line(470, 196, 1130, 196, STEEL, 5);
      s += r(360, 336, 880, 206, '#cfe0ea', 6).replace('fill=',
            'opacity="0.42" fill=');
      s += line(360, 336, 1240, 336, STEEL, 6);
      for (var i = 0; i < 3; i++) {
        var wx = 400 + i * 290;
        s += line(wx, 336, wx, 542, STEEL, 4);
        if (i === win) {
          s += r(wx + 30, 452, 200, 76, '#f4efe3', 5);
          s += text(wx + 130, 500, 'OPEN', 20, OLIVE, 'middle', 800);
        }
      }
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE COUNTER: the paper, a calculator, and the card holder. The
         holder is 72 tall, top 484, so it takes 448, 864 or 920. */
      var TOP = 556, s = '';
      var P = slot(arr, [{ pp: 620, cl: 1060, hd: 448 },
                         { pp: 980, cl: 360, hd: 864 },
                         { pp: 640, cl: 1180, hd: 920 }]);
      s += sit(P.pp + 90, TOP, 196);
      s += rest(P.pp, TOP, 180, 40, PAPER, 3);
      for (var i = 0; i < 4; i++) {
        s += line(P.pp + 14, TOP - 32 + i * 8, P.pp + 148, TOP - 32 + i * 8,
                  '#ded6c4', 3);
      }
      s += sit(P.cl + 38, TOP, 90);
      s += rest(P.cl, TOP, 76, 44, '#6b6252', 5);
      s += rest(P.cl + 10, TOP - 38, 56, 12, '#9fb0a0', 2);
      for (var k = 0; k < 3; k++) {
        s += rest(P.cl + 12 + k * 20, TOP - 8, 14, 8, '#b9b0a0', 2);
      }
      s += sit(P.hd + 44, TOP, 96);
      s += rest(P.hd + 34, TOP, 18, 72, STEEL2, 4);
      s += rest(P.hd + 10, TOP, 66, 10, STEEL2, 4);
      s += r(P.hd, TOP - 92, 88, 30, PAPER, 4);
      s += text(P.hd + 44, TOP - 71, 'TAKE ONE', 12, STEEL2, 'middle', 700);
      return stage(s);
    }
  };

  /* UNIT 9. The editing desk - and deliberately not the writing desk, which is
     where one person writes alone. Here the page already has an author: the
     draft on the wall is twelve numbered lines with FOUR ruled in another
     colour, which is 9.4 and 9.7, "four of them are not yours". Gaps 488..616
     and 888..1016. */
  MINE.editdesk = {
    back: function () {
      var s = r(0, 0, W, H, '#e4ddd0') + r(0, 0, W, 176, '#d3cbb9');
      s += r(0, 642, W, 258, FLOOR) + r(0, 642, W, 16, FLOOR2);
      /* the draft, twelve lines, four of them not yours */
      s += r(210, 200, 700, 402, PAPER, 8);
      s += r(210, 200, 700, 50, STEEL2, 4);
      s += text(560, 234, 'DRAFT  ·  TWELVE LINES  ·  2nd HAND', 18,
                PAPER, 'middle', 800);
      var MINE_LINES = [1, 4, 7, 11];     // the four he may not improve
      for (var i = 0; i < 12; i++) {
        var ly = 272 + i * 27, his = MINE_LINES.indexOf(i) >= 0;
        s += text(234, ly + 14, (i + 1), 12, '#a9a192', 'start', 700);
        s += r(258, ly + 4, (i % 4 === 3 ? 430 : 620), 10,
               his ? '#d9c4b0' : '#e4dccb', 3);
        if (his) s += r(258, ly + 4, 10, 10, RUST, 2);
      }
      s += text(560, 582, 'four of these are not yours to improve', 15, RUST,
                'middle', 600);
      /* the two names it goes out over */
      s += r(1000, 236, 450, 150, '#f2eee4', 6);
      s += text(1225, 282, 'ONE DOCUMENT', 17, INK, 'middle', 800);
      s += text(1225, 318, 'TWO AUTHORS', 17, INK, 'middle', 800);
      s += text(1225, 356, 'ONE VOICE', 17, OLIVE, 'middle', 800);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 756, 860);
      /* the desk - 440..1160, top 558 */
      s += r(440, 558, 720, 168, WOOD, 6) + r(440, 546, 720, 20, WOOD2, 4);
      s += r(480, 606, 640, 12, '#8a6540', 3);
      var cx = slot(arr, [1256, 1300, 1228]);
      s += shadow(cx, 744, 182);
      s += r(cx - 78, 476, 156, 28, WOOD2, 8);
      s += r(cx - 68, 504, 136, 118, '#8d7b63', 6);
      s += r(cx - 12, 622, 24, 112, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the draft being marked, the red pen, and the pot. The pot
         is 70 tall, top 488, so it takes 496, 896 or 512. */
      var TOP = 558, s = '';
      var P = slot(arr, [{ dr: 640, pn: 900, pt: 496 },
                         { dr: 880, pn: 660, pt: 896 },
                         { dr: 660, pn: 1060, pt: 512 }]);
      s += sit(P.dr + 94, TOP, 204);
      s += rest(P.dr, TOP, 188, 44, PAPER, 3);
      for (var i = 0; i < 5; i++) {
        s += line(P.dr + 14, TOP - 36 + i * 7, P.dr + 152, TOP - 36 + i * 7,
                  i === 2 ? '#d99a74' : '#ded6c4', 3);
      }
      s += rest(P.dr + 150, TOP - 38, 28, 8, RUST, 2);
      s += sit(P.pn + 26, TOP, 66);
      s += rest(P.pn, TOP, 52, 10, RUST, 4);
      s += sit(P.pt + 36, TOP, 84);
      s += rest(P.pt + 4, TOP, 64, 54, '#6b6252', 6);
      s += rest(P.pt + 16, TOP - 54, 10, 16, RUST, 2);
      s += rest(P.pt + 34, TOP - 54, 10, 16, INK, 2);
      s += rest(P.pt + 50, TOP - 54, 10, 16, OLIVE, 2);
      return stage(s);
    }
  };

  /* UNIT 11. The call room: a small room with a door that shuts, which is what
     the unit needs - "who is the second person to know?" The card on the wall
     is the unit's own order of work, and the telephone is the room's point.
     Gaps 484..596 and 876..980 - the left gap is clipped at the surface's own
     x0=480, which is why it starts at 484 and not 456. */
  MINE.callroom = {
    back: function () {
      var s = r(0, 0, W, H, '#d8d2c6') + r(0, 0, W, 186, '#c6bfb0');
      s += r(0, 652, W, 248, FLOOR) + r(0, 652, W, 16, FLOOR2);
      /* the acoustic wall, in panels - a quiet room reads as texture */
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 3; j++) {
          s += r(100 + i * 160, 200 + j * 140, 144, 124, '#cdc6b7', 6);
        }
      }
      /* the door, shut, with its sign */
      s += r(1180, 196, 300, 420, '#b79a74', 6);
      s += r(1180, 196, 300, 420, 'none', 6).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="8"');
      s += c(1216, 420, 14, STEEL2);
      s += r(1232, 250, 206, 68, PAPER, 5);
      s += text(1335, 292, 'ENGAGED', 20, RUST, 'middle', 800);
      /* the card: the order of work this unit teaches */
      s += r(220, 236, 560, 300, PAPER, 8);
      s += r(220, 236, 560, 46, INK, 4);
      s += text(500, 268, 'BEFORE YOU CALL', 18, PAPER, 'middle', 800);
      var STEP = ['Write it, then take things out.',
                  'One of them is a number.',
                  'Who is the second person to know?',
                  'Give her something she can check.'];
      for (var k = 0; k < STEP.length; k++) {
        s += text(246, 320 + k * 48, '—', 16, OLIVE, 'start', 800);
        s += text(276, 320 + k * 48, STEP[k], 16, INK, 'start', 600);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 764, 700);
      /* the small table - 480..1120, top 562 */
      s += r(480, 562, 640, 158, WOOD, 6) + r(480, 550, 640, 20, WOOD2, 4);
      s += r(518, 608, 564, 12, '#8a6540', 3);
      var cx = slot(arr, [360, 1240, 374]);
      s += shadow(cx, 748, 170);
      s += r(cx - 72, 486, 144, 26, WOOD2, 8);
      s += r(cx - 62, 512, 124, 112, '#8d7b63', 6);
      s += r(cx - 12, 624, 24, 108, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the telephone, the note that was written first, and the
         glass. The telephone is 78 tall, top 484, so it takes 484, 876 or 500
         - all inside the surface span as well as the gaps. */
      var TOP = 562, s = '';
      var P = slot(arr, [{ ph: 484, nt: 760, gl: 1040 },
                         { ph: 876, nt: 560, gl: 700 },
                         { ph: 500, nt: 900, gl: 1060 }]);
      s += sit(P.ph + 46, TOP, 100);
      s += rest(P.ph, TOP, 92, 40, '#4b4539', 6);
      s += rest(P.ph + 8, TOP - 78, 76, 22, '#59545f', 8);
      s += line(P.ph + 14, TOP - 40, P.ph + 14, TOP - 58, '#59545f', 7);
      s += line(P.ph + 78, TOP - 40, P.ph + 78, TOP - 58, '#59545f', 7);
      for (var i = 0; i < 3; i++) {
        s += rest(P.ph + 22 + i * 18, TOP - 14, 12, 8, '#8e8777', 2);
      }
      s += sit(P.nt + 60, TOP, 132);
      s += rest(P.nt, TOP, 120, 16, PAPER, 2);
      s += line(P.nt + 14, TOP - 9, P.nt + 104, TOP - 9, '#ded6c4', 3);
      s += sit(P.gl + 22, TOP, 56);
      s += rest(P.gl, TOP, 44, 52, '#cfe0ea', 4).replace('fill=',
            'opacity="0.7" fill=');
      s += rest(P.gl + 4, TOP, 36, 22, '#b7d2e0', 3);
      return stage(s);
    }
  };

  /* ================================================================
     B2 BOOK 2 - FIVE ROOMS, and the last rooms in the series. The register is
     adversarial now: a contract read for what it obliges, a bundle nobody on
     your side has read for you, a tribunal, a handover, and the letters.

     Gaps, from this room's own triple in SPOTS:
       contractdesk  424..600, 872..1048      readingroom   456..600, 872..984
       tribunal      440..584, 856..1032      handoverdesk  488..616, 888..1016
       letterdesk    456..600, 872..984
     ================================================================ */

  /* UNIT 13. The contract desk. The register on the wall is the unit's own
     artefact - clause, act, owner, evidence - and ONE ROW'S OWNER IS BLANK,
     which is 13.4 and 13.7: the clause nobody here can perform, found before
     the other side finds it. */
  MINE.contractdesk = {
    back: function () {
      var s = r(0, 0, W, H, '#e1d9ca') + r(0, 0, W, 178, '#d0c7b4');
      s += r(0, 644, W, 256, FLOOR) + r(0, 644, W, 16, FLOOR2);
      /* the obligations register, four columns */
      s += r(120, 196, 1000, 412, PAPER, 8);
      s += r(120, 196, 1000, 54, INK, 4);
      s += text(620, 232, 'OBLIGATIONS REGISTER  ·  22 CLAUSES', 20, PAPER,
                'middle', 800);
      var COL = ['CLAUSE', 'ACT', 'OWNER', 'EVIDENCE'];
      var AT = [150, 330, 660, 860];
      for (var c0 = 0; c0 < 4; c0++) {
        s += text(AT[c0], 282, COL[c0], 13, STEEL2, 'start', 800);
      }
      s += line(144, 296, 1096, 296, '#ded6c4', 3);
      var ROWS = [['4.1', 'Monthly return, 10 days', 'Nadia', 'Signed copy'],
                  ['6.2', 'Keep stock at two depots', 'Bassel', 'Count sheet'],
                  ['9.4', 'Notice by telephone, 48h', '—', '—'],
                  ['11.1', 'Quarterly audit access', 'Mr Attar', 'Letter'],
                  ['14.3', 'Price review each April', 'Nour', 'Minute'],
                  ['18.6', 'Insurance at full value', 'Hala', 'Certificate']];
      for (var i = 0; i < ROWS.length; i++) {
        var y = 318 + i * 46, gap = ROWS[i][2] === '—';
        if (gap) s += r(136, y, 968, 42, '#f6e4da', 4);
        for (var j = 0; j < 4; j++) {
          s += text(AT[j], y + 28, ROWS[i][j], 16,
                    gap && j >= 2 ? RUST : INK, 'start', gap ? 700 : 600);
        }
      }
      s += text(620, 586, 'clause 9.4 has no owner, and we have one telephone',
                15, RUST, 'middle', 700);
      /* the contract itself, on the wall as a spine */
      s += r(1200, 230, 260, 350, '#8d7b63', 6);
      s += r(1216, 246, 228, 318, PAPER, 4);
      s += text(1330, 300, 'SUPPLY', 20, INK, 'middle', 800);
      s += text(1330, 330, 'AGREEMENT', 20, INK, 'middle', 800);
      s += line(1240, 352, 1420, 352, '#ded6c4', 3);
      s += text(1330, 392, '22 clauses', 16, STEEL2, 'middle', 600);
      s += text(1330, 424, 'eleven acts', 16, STEEL2, 'middle', 600);
      s += text(1330, 456, 'six names', 16, STEEL2, 'middle', 600);
      s += text(1330, 520, 'signed 4 Feb', 15, OLIVE, 'middle', 700);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 764, 1040);
      /* the desk - 280..1320, top 558 */
      s += r(280, 558, 1040, 164, WOOD, 6) + r(280, 546, 1040, 20, WOOD2, 4);
      s += r(320, 606, 960, 12, '#8a6540', 3);
      var cx = slot(arr, [180, 1420, 194]);
      s += shadow(cx, 748, 178);
      s += r(cx - 76, 480, 152, 28, WOOD2, 8);
      s += r(cx - 66, 508, 132, 114, '#8d7b63', 6);
      s += r(cx - 12, 622, 24, 110, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the contract open with its tabs, the register sheet, and
         the lamp. The lamp is 74 tall, top 484, so it takes 432, 880 or 940. */
      var TOP = 558, s = '';
      var P = slot(arr, [{ ct: 640, rg: 1120, lp: 432 },
                         { ct: 980, rg: 340, lp: 880 },
                         { ct: 660, rg: 1200, lp: 940 }]);
      s += sit(P.ct + 102, TOP, 220);
      s += rest(P.ct, TOP, 200, 46, PAPER, 3);
      s += line(P.ct + 100, TOP - 46, P.ct + 100, TOP, '#ded6c4', 3);
      for (var i = 0; i < 4; i++) {
        s += line(P.ct + 14, TOP - 36 + i * 8, P.ct + 88, TOP - 36 + i * 8,
                  '#ded6c4', 3);
        s += line(P.ct + 112, TOP - 36 + i * 8, P.ct + 186, TOP - 36 + i * 8,
                  '#ded6c4', 3);
      }
      /* the tabs, which is how you find clause 9.4 twice in a meeting */
      var TAB = [RUST, OLIVE, STEEL2];
      for (var t = 0; t < 3; t++) {
        s += rest(P.ct + 186, TOP - 38 + t * 13, 22, 9, TAB[t], 2);
      }
      s += sit(P.rg + 56, TOP, 124);
      s += rest(P.rg, TOP, 112, 16, PAPER, 2);
      s += line(P.rg + 12, TOP - 9, P.rg + 100, TOP - 9, '#ded6c4', 3);
      s += sit(P.lp + 48, TOP, 104);
      s += rest(P.lp + 38, TOP, 20, 74, STEEL2, 4);
      s += rest(P.lp + 14, TOP, 68, 10, STEEL2, 4);
      s += r(P.lp, TOP - 94, 96, 32, '#8e9aa3', 10);
      s += r(P.lp + 10, TOP - 68, 76, 8, '#f6e9c4', 4);
      return stage(s);
    }
  };

  /* UNIT 17. The reading room. Two hundred and fourteen pages and two readers,
     and the wall says what the unit says: the PROPORTIONS are the finding. The
     bar chart is how many pages each part of the bundle takes, because 17.3 is
     a learner discovering that four fifths of a dispute is about one thing. */
  MINE.readingroom = {
    back: function () {
      var s = r(0, 0, W, H, '#e3dbcd') + r(0, 0, W, 184, '#d2c9b6');
      s += r(0, 648, W, 252, FLOOR) + r(0, 648, W, 16, FLOOR2);
      /* the proportions of the bundle */
      s += r(140, 204, 700, 392, PAPER, 8);
      s += r(140, 204, 700, 50, OLIVE, 4);
      s += text(490, 238, 'THE BUNDLE  ·  214 PAGES', 19, PAPER, 'middle',
                800);
      var PART = [['Correspondence', 96], ['The disputed delivery', 62],
                  ['Invoices', 31], ['The contract', 18], ['Minutes', 7]];
      for (var i = 0; i < PART.length; i++) {
        var y = 280 + i * 60, wd = Math.round(PART[i][1] / 96 * 420);
        s += text(164, y + 20, PART[i][0], 16, INK, 'start', 600);
        s += r(164, y + 30, wd, 20, i < 2 ? RUST : '#c9bda9', 4);
        s += text(164 + wd + 14, y + 47, PART[i][1] + 'pp', 14, STEEL2, 'start',
                  700);
      }
      s += text(490, 578, 'the proportions are the finding', 15, RUST, 'middle',
                700);
      /* the shelf, and the notice that the bundle does not leave the room */
      s += r(950, 212, 510, 180, '#d8cfbc', 4);
      s += r(950, 378, 510, 14, WOOD2, 3);
      for (var b = 0; b < 7; b++) {
        s += r(966 + b * 70, 226, 56, 152, b % 2 ? '#c9bda9' : '#d6c9ae', 3);
      }
      s += r(950, 436, 510, 120, PAPER, 6);
      s += text(1205, 482, 'BUNDLE', 22, INK, 'middle', 800);
      s += text(1205, 522, 'DO NOT REMOVE', 18, RUST, 'middle', 800);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 766, 1000);
      /* the reading table - 300..1300, top 560 */
      s += r(300, 560, 1000, 162, WOOD, 6) + r(300, 548, 1000, 20, WOOD2, 4);
      s += r(340, 608, 920, 12, '#8a6540', 3);
      /* the reading lamp on a stand, behind the cast: mid, so it may be tall */
      var lx = slot(arr, [220, 1380, 236]);
      s += shadow(lx, 750, 150);
      s += r(lx - 10, 330, 20, 420, STEEL2, 4);
      s += r(lx - 62, 296, 124, 42, '#6f7a83', 10);
      s += r(lx - 50, 338, 100, 8, '#f6e9c4', 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the bundle, the slip index, and the water glass.
         ⚠ THE BUNDLE IS 220 WIDE AND NO GAP IN THIS ROOM IS WIDER THAN 144, so
         it cannot be placed clear of the actor columns and MUST clear the waist
         line by height instead. At 56 tall its top was exactly 504 - and
         WAIST_Y is 0.56 x 900, which in floating point is 504.00000000000006,
         so "exactly on the line" was on the wrong side of it. It is 44 tall
         now, top 516, and its tab is on the front face rather than on top. A
         threshold a prop sits exactly on is a flake either way. */
      var TOP = 560, s = '';
      var P = slot(arr, [{ bd: 620, sl: 1060, gl: 460 },
                         { bd: 960, sl: 360, gl: 876 },
                         { bd: 680, sl: 1180, gl: 480 }]);
      s += sit(P.bd + 110, TOP, 236);
      s += rest(P.bd, TOP, 220, 44, '#efe8da', 3);
      for (var i = 0; i < 5; i++) {
        s += line(P.bd + 6, TOP - 38 + i * 8, P.bd + 214, TOP - 38 + i * 8,
                  '#ddd5c2', 3);
      }
      s += rest(P.bd + 170, TOP - 14, 24, 9, RUST, 2);
      s += sit(P.sl + 52, TOP, 116);
      s += rest(P.sl, TOP, 104, 14, PAPER, 2);
      s += line(P.sl + 12, TOP - 8, P.sl + 92, TOP - 8, '#ded6c4', 3);
      s += sit(P.gl + 24, TOP, 60);
      s += rest(P.gl, TOP, 48, 58, '#cfe0ea', 4).replace('fill=',
            'opacity="0.7" fill=');
      s += rest(P.gl + 4, TOP, 40, 24, '#b7d2e0', 3);
      return stage(s);
    }
  };

  /* UNIT 19. The tribunal. The room where nobody is on your side, which is why
     the bench is drawn EMPTY and raised and facing the learner: three chairs
     that are not yours. The card on the wall is 19.1 - what a tribunal decides
     and what it will not decide however badly you were treated. */
  MINE.tribunal = {
    back: function () {
      var s = r(0, 0, W, H, '#d9d3c7') + r(0, 0, W, 196, '#c7c0b1');
      s += r(0, 654, W, 246, FLOOR) + r(0, 654, W, 16, FLOOR2);
      /* panelled wall, and the emblem */
      s += r(0, 196, W, 320, '#cec5b2');
      for (var i = 0; i < 10; i++) line(0, 0, 0, 0, '#000', 1);
      for (var p = 0; p < 9; p++) {
        s += line(178 * p, 196, 178 * p, 516, '#bfb5a1', 4);
      }
      s += c(800, 290, 62, '#b8ab92');
      s += c(800, 290, 48, '#cec5b2');
      s += text(800, 300, 'ARB', 26, INK, 'middle', 800);
      /* what it decides, and what it will not */
      s += r(140, 356, 520, 230, PAPER, 8);
      s += r(140, 356, 520, 44, INK, 4);
      s += text(400, 386, 'THE TRIBUNAL DECIDES', 17, PAPER, 'middle', 800);
      var DEC = [['the issues as pleaded', OLIVE],
                 ['what the contract says', OLIVE],
                 ['who pays the costs', OLIVE],
                 ['not whether they were fair', RUST]];
      for (var j = 0; j < DEC.length; j++) {
        s += text(164, 432 + j * 38, '—', 15, DEC[j][1], 'start', 800);
        s += text(192, 432 + j * 38, DEC[j][0], 16, DEC[j][1], 'start',
                  j === 3 ? 800 : 600);
      }
      /* the raised bench: three chairs, empty, facing out */
      s += r(940, 392, 520, 124, '#8d7b63', 6);
      s += r(940, 380, 520, 18, WOOD2, 4);
      for (var k = 0; k < 3; k++) {
        var bx = 976 + k * 164;
        s += r(bx, 320, 120, 62, '#7d6c56', 8);
        s += r(bx + 10, 330, 100, 44, '#938169', 6);
      }
      s += text(1200, 470, 'NEITHER OF YOU', 16, PAPER, 'middle', 800);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 768, 1120);
      /* the party's table - 240..1360, top 556 */
      s += r(240, 556, 1120, 162, WOOD, 6) + r(240, 544, 1120, 20, WOOD2, 4);
      s += r(280, 604, 1040, 12, '#8a6540', 3);
      /* the stenographer's small table, at one end or the other */
      var tx = slot(arr, [110, 1420, 124]);
      s += shadow(tx, 756, 150);
      s += r(tx - 66, 536, 132, 24, WOOD2, 4);
      s += r(tx - 56, 560, 112, 92, '#b08a5e', 4);
      s += r(tx - 10, 652, 20, 100, WOOD2, 3);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE TABLE: the bundle open at the document that hurts you, the
         pleaded-issues card, and the jug. The jug is 70 tall, top 486, so it
         takes 448, 864 or 920 from this room's gaps. */
      var TOP = 556, s = '';
      var P = slot(arr, [{ bd: 560, cd: 1040, jg: 448 },
                         { bd: 940, cd: 320, jg: 864 },
                         { bd: 600, cd: 1180, jg: 920 }]);
      s += sit(P.bd + 106, TOP, 228);
      s += rest(P.bd, TOP, 212, 50, '#efe8da', 3);
      s += line(P.bd + 106, TOP - 50, P.bd + 106, TOP, '#ded6c4', 3);
      for (var i = 0; i < 4; i++) {
        s += line(P.bd + 12, TOP - 40 + i * 8, P.bd + 94, TOP - 40 + i * 8,
                  '#ddd5c2', 3);
        s += line(P.bd + 118, TOP - 40 + i * 8, P.bd + 200, TOP - 40 + i * 8,
                  i === 1 ? '#d99a74' : '#ddd5c2', 3);
      }
      s += sit(P.cd + 50, TOP, 112);
      s += rest(P.cd, TOP, 100, 16, PAPER, 2);
      s += text(P.cd + 50, TOP - 4, 'ISSUES: 4', 12, STEEL2, 'middle', 700);
      s += sit(P.jg + 40, TOP, 92);
      s += rest(P.jg, TOP, 80, 70, '#b9b0a0', 8);
      s += rest(P.jg + 8, TOP - 70, 64, 12, '#cfc6b3', 4);
      s += rest(P.jg + 72, TOP - 54, 16, 30, '#b9b0a0', 6);
      return stage(s);
    }
  };

  /* UNIT 20. The handover desk, the week after you have gone. The sheet on the
     wall is the unit's distinction drawn as two columns: forty TASKS struck
     through, and the six JUDGEMENTS that are the real handover (20.1). The coat
     hook is empty, which is the only way to draw an absence. */
  MINE.handoverdesk = {
    back: function () {
      var s = r(0, 0, W, H, '#e2dacb') + r(0, 0, W, 180, '#d1c8b5');
      s += r(0, 642, W, 258, FLOOR) + r(0, 642, W, 16, FLOOR2);
      /* tasks, struck through; judgements, not */
      s += r(150, 200, 640, 400, PAPER, 8);
      s += r(150, 200, 640, 50, STEEL2, 4);
      s += text(470, 234, 'HANDOVER  ·  WHAT IS ACTUALLY MINE', 17, PAPER,
                'middle', 800);
      s += text(290, 288, 'TASKS  (40)', 14, '#a9a192', 'middle', 800);
      s += text(650, 288, 'JUDGEMENTS  (6)', 14, OLIVE, 'middle', 800);
      for (var i = 0; i < 9; i++) {
        var ty = 312 + i * 30;
        s += r(178, ty, 224, 10, '#e4dccb', 3);
        s += line(178, ty + 5, 402, ty + 5, '#c3b9a4', 3);
      }
      var JUD = ['Who we do not sell to.', 'When to stop a lorry.',
                 'Which late payer we carry.', 'What Mr Sayegh is told first.',
                 'The price I will not go under.', 'Who signs when I am away.'];
      for (var j = 0; j < JUD.length; j++) {
        s += text(508, 322 + j * 44, JUD[j], 15, INK, 'start', 600);
        s += r(492, 312 + j * 44, 8, 14, OLIVE, 2);
      }
      /* the empty hook, and the week's diary left open */
      s += r(1060, 214, 70, 20, STEEL2, 4);
      s += c(1095, 252, 16, 'none').replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="9"');
      s += text(1095, 310, 'empty', 15, '#a9a192', 'middle', 500);
      s += r(1200, 240, 260, 340, PAPER, 6);
      s += text(1330, 282, 'FIRST WEEK', 17, INK, 'middle', 800);
      s += line(1222, 300, 1438, 300, '#ded6c4', 3);
      var DAY = ['Mon  the Wednesday call', 'Tue  Abu Yasser, in person',
                 'Wed  the audit letter', 'Thu  nothing - on purpose',
                 'Fri  the one he will change'];
      for (var d = 0; d < DAY.length; d++) {
        s += text(1226, 336 + d * 46, DAY[d], 14, INK, 'start', 600);
      }
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 756, 860);
      /* the desk - 420..1180, top 558 - with one drawer out and empty */
      s += r(420, 558, 760, 170, WOOD, 6) + r(420, 546, 760, 20, WOOD2, 4);
      s += r(462, 606, 676, 12, '#8a6540', 3);
      var dw = slot(arr, [470, 820, 640]);
      s += r(dw, 622, 240, 70, '#8a6540', 4);
      s += r(dw + 10, 632, 220, 50, '#6f6253', 3);
      s += r(dw + 96, 650, 48, 12, WOOD2, 4);
      var cx = slot(arr, [1256, 1300, 1230]);
      s += shadow(cx, 744, 182);
      s += r(cx - 78, 476, 156, 28, WOOD2, 8);
      s += r(cx - 68, 504, 136, 118, '#8d7b63', 6);
      s += r(cx - 12, 622, 24, 112, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the handover folder, the keys being left, and the mug. The
         mug is 62 tall, top 496, so it takes 496, 896 or 512. */
      var TOP = 558, s = '';
      var P = slot(arr, [{ fd: 600, ky: 900, mg: 496 },
                         { fd: 920, ky: 640, mg: 896 },
                         { fd: 640, ky: 1060, mg: 512 }]);
      s += sit(P.fd + 98, TOP, 212);
      s += rest(P.fd, TOP, 196, 48, '#b08a5e', 4);
      /* the folder's label on its FRONT, not its top: at TOP-48 the label was
         at y=498, above the waist line and 72 wide, which painted inside an
         actor column in two of the three arrangements */
      s += rest(P.fd + 16, TOP - 30, 72, 12, PAPER, 2);
      s += text(P.fd + 52, TOP - 20, 'HANDOVER', 11, INK, 'middle', 700);
      s += rest(P.fd + 180, TOP - 40, 22, 9, OLIVE, 2);
      s += sit(P.ky + 30, TOP, 76);
      s += rest(P.ky, TOP, 60, 12, STEEL2, 6);
      s += c(P.ky + 14, TOP - 18, 9, 'none').replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="5"');
      s += sit(P.mg + 34, TOP, 80);
      s += rest(P.mg + 4, TOP, 60, 62, '#c9bda9', 8);
      s += rest(P.mg + 10, TOP - 62, 48, 10, '#6f7a4a', 3);
      s += rest(P.mg + 64, TOP - 46, 16, 28, '#c9bda9', 6);
      return stage(s);
    }
  };

  /* UNIT 24. The letter desk, and the last room in the series. Four envelopes:
     three the learner sealed at A1, A2 and B1 - two of them open now - and one
     still blank, addressed to C1, which is 24.6. This room is why unit 24 does
     NOT reuse the rooftop that closed A2 Book 2 and B1 Book 2: the unit is
     about the letters, so the room is the desk they are opened on. */
  MINE.letterdesk = {
    back: function () {
      var s = r(0, 0, W, H, '#e4ddd0') + r(0, 0, W, 176, '#d3cbb9');
      s += r(0, 646, W, 254, FLOOR) + r(0, 646, W, 16, FLOOR2);
      /* the four letters of the series, pinned in order */
      var L = [['A1', 'opened', OLIVE], ['A2', 'opened', OLIVE],
               ['B1', 'opened', OLIVE], ['C1', 'sealed', RUST]];
      for (var i = 0; i < 4; i++) {
        var x = 150 + i * 330;
        s += r(x, 216, 280, 200, i === 3 ? '#f6efe0' : PAPER, 6);
        s += r(x, 216, 280, 200, 'none', 6).replace('fill="none"',
              'fill="none" stroke="' + (i === 3 ? RUST : '#ded6c4') +
              '" stroke-width="5"');
        /* the flap: open on three, shut on the fourth */
        if (i === 3) {
          s += p('M ' + x + ' 216 L ' + (x + 140) + ' 330 L ' + (x + 280) +
                 ' 216', 'none', ' stroke="' + RUST + '" stroke-width="5"');
        } else {
          s += p('M ' + x + ' 216 L ' + (x + 140) + ' 150 L ' + (x + 280) +
                 ' 216', '#f2eee4', ' stroke="#ded6c4" stroke-width="5"');
        }
        s += text(x + 140, 372, L[i][0], 34, i === 3 ? RUST : INK, 'middle', 800);
        s += text(x + 140, 404, L[i][1], 14, L[i][2], 'middle', 700);
      }
      /* the count: what was undertaken against what was done (24.4) */
      s += r(420, 450, 760, 150, PAPER, 8);
      s += r(420, 450, 760, 44, INK, 4);
      s += text(800, 480, 'UNDERTOOK  ·  DID', 17, PAPER, 'middle', 800);
      s += text(560, 540, 'undertook  7', 20, INK, 'middle', 700);
      s += text(800, 540, 'did  4', 20, OLIVE, 'middle', 800);
      s += text(1040, 540, 'count it yourself', 16, STEEL2, 'middle', 600);
      s += text(800, 578, 'written in December, not in May', 14, '#a9a192',
                'middle', 500);
      return stage(s);
    },
    mid: function (arr) {
      var s = shadow(800, 760, 900);
      /* the desk - 400..1200, top 560 */
      s += r(400, 560, 800, 166, WOOD, 6) + r(400, 548, 800, 20, WOOD2, 4);
      s += r(440, 608, 720, 12, '#8a6540', 3);
      var cx = slot(arr, [240, 1360, 256]);
      s += shadow(cx, 748, 176);
      s += r(cx - 74, 482, 148, 28, WOOD2, 8);
      s += r(cx - 64, 510, 128, 112, '#8d7b63', 6);
      s += r(cx - 12, 622, 24, 110, WOOD2, 4);
      return stage(s);
    },
    fore: function (arr) {
      /* ON THE DESK: the letter unfolded and read, the knife it was opened
         with, and the one standing sealed for C1. The standing envelope is 72
         tall, top 488, so it takes 460, 876 or 480 from this room's gaps. */
      var TOP = 560, s = '';
      /* arr2's knife was at 1140 and is 88 long with a 28 handle beyond it: it
         ended at 1228 on a desk that stops at 1200, hanging off the end with
         its shadow. 1080 keeps the whole of it, and the shadow, on the wood. */
      var P = slot(arr, [{ lt: 620, kn: 1040, up: 460 },
                         { lt: 940, kn: 440, up: 876 },
                         { lt: 660, kn: 1080, up: 480 }]);
      s += sit(P.lt + 96, TOP, 208);
      s += rest(P.lt, TOP, 192, 44, PAPER, 3);
      for (var i = 0; i < 5; i++) {
        s += line(P.lt + 14, TOP - 36 + i * 7, P.lt + 150, TOP - 36 + i * 7,
                  '#ded6c4', 3);
      }
      s += line(P.lt + 96, TOP - 44, P.lt + 96, TOP, '#e4dccb', 2);
      s += sit(P.kn + 44, TOP, 100);
      s += rest(P.kn, TOP, 88, 10, STEEL2, 4);
      s += rest(P.kn + 60, TOP - 10, 28, 14, WOOD2, 3);
      s += sit(P.up + 44, TOP, 98);
      s += rest(P.up, TOP, 88, 72, '#f6efe0', 4);
      s += p('M ' + P.up + ' ' + (TOP - 72) + ' L ' + (P.up + 44) + ' ' +
             (TOP - 34) + ' L ' + (P.up + 88) + ' ' + (TOP - 72), 'none',
             ' stroke="' + RUST + '" stroke-width="4"');
      s += text(P.up + 44, TOP - 16, 'C1', 18, RUST, 'middle', 800);
      return stage(s);
    }
  };

  /* WRAPPED, NOT EDITED. A name this file knows resolves here; anything else falls
     through to the engine's own rooms, so a scene that asks for `office` still gets it. */
  var base = A.set;
  A.set = function (name) {
    return MINE[name] || base(name);
  };
  A.setNames = (A.setNames || []).concat(Object.keys(MINE));
})(window);
