/* ============================================================
   art-pbe.js — the five rooms of Sham Trading, Mezzeh, Damascus.

   WHY THIS FILE EXISTS SEPARATELY FROM art.js. art.js is an ENGINE file: it is
   materialised from canon, it is identical across the courses bar the namespace, and
   `course_engine --drift` measures how far each copy has moved from the original.
   Adding a course's own rooms to it would make that measurement meaningless. So the
   rooms live here and `art.set` is WRAPPED rather than edited: a name this file knows
   resolves here, anything else falls through to the engine's own five.

   THE SERIES HAS NO PICTURES. Zero images in 5,442 pages, measured. Everything a
   learner sees of this workplace is drawn here, and the course is set in exactly five
   places, named on the book's own first page: a gate, a yard, two stores, a trade
   counter at the front, and an office upstairs.

   A SET IS THREE DEPTH LAYERS on a 1600x900 stage. `back` is the room, `mid` is what
   stands in it, `fore` is what the camera passes.

   ⚠ THE THIRD LAYER IS CALLED `fore`, NOT `front`. scene.js calls set.back(), set.mid()
   and set.fore(); a set that names it `front` throws "set.fore is not a function" the
   moment a scene mounts - and the sets proof page, which composes the layers itself,
   showed all three happily. The proof page is not the player. A prop that a line NAMES must be in
   the layer the camera sees when that line is spoken — the gate book, the shift list,
   the pallet and the counter bell are all here for that reason and not for decoration.
   ============================================================ */
(function (w) {
  'use strict';
  var NS = w.PBE1;
  if (!NS || !NS.art) return;
  var A = NS.art;

  /* the engine's own drawing helpers are private to art.js, so the few we need are
     repeated here rather than reached for - five lines against a cross-file dependency */
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
  function svg(vb, body) {
    return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" ' +
      'preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + body + '</svg>';
  }
  function stage(body) { return svg('0 0 1600 900', body); }

  /* Damascus daylight: warm stone, dusty blue sky, olive and rust. The palette is
     fixed here so five rooms built on different days look like one company. */
  var SKY = '#bcd4e2', SKY2 = '#a8c6d8', STONE = '#e3d9c9', STONE2 = '#d2c5b1',
      FLOOR = '#c9bda9', FLOOR2 = '#b6a890', STEEL = '#8e9aa3', STEEL2 = '#6f7a83',
      RUST = '#b4642f', OLIVE = '#6f7a4a', WOOD = '#a97c4e', WOOD2 = '#8a6540',
      PAPER = '#fbf7ee', INK = '#394049';

  var MINE = {};

  /* ---------------------------------------------------------- 1 · THE GATE
     Where A1 begins. Abu Raed, a barrier, and the gate book every name is written in. */
  MINE.gate = {
    back: function () {
      var s = r(0, 0, 1600, 900, SKY);
      s += r(0, 0, 1600, 300, SKY2);
      /* the compound wall and the company sign */
      s += r(0, 300, 1600, 250, STONE) + r(0, 300, 1600, 26, STONE2);
      s += r(1040, 150, 440, 150, PAPER, 8);
      s += r(1040, 150, 440, 150, 'none', 8).replace('fill="none"',
            'fill="none" stroke="' + WOOD2 + '" stroke-width="10"');
      s += line(1090, 205, 1430, 205, RUST, 14) + line(1090, 250, 1330, 250, STEEL2, 10);
      /* the road out */
      s += r(0, 550, 1600, 350, FLOOR) + r(0, 550, 1600, 18, FLOOR2);
      for (var i = 0; i < 7; i++) s += r(120 + i * 230, 760, 120, 12, PAPER, 6);
      return stage(s);
    },
    mid: function () {
      /* the gatehouse */
      var s = r(90, 330, 330, 300, STONE2, 6) + r(90, 330, 330, 40, WOOD2, 4);
      s += r(130, 400, 240, 150, SKY2, 4);
      s += r(130, 400, 240, 150, 'none', 4).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="8"');
      /* the barrier, raised */
      s += r(470, 520, 26, 120, STEEL2, 6);
      s += p('M 483 530 L 1180 430', 'none',
             ' stroke="' + RUST + '" stroke-width="18" stroke-linecap="round"');
      for (var j = 0; j < 5; j++) {
        s += p('M ' + (560 + j * 130) + ' ' + (521 - j * 19) + ' l 46 -7', 'none',
               ' stroke="' + PAPER + '" stroke-width="16"');
      }
      return stage(s);
    },
    fore: function () {
      /* THE GATE BOOK, open on a lectern. The first artefact of the course, and the
         one a learner must RECOGNISE: Abu Raed writes every name in it in cycle 1.1.
         Drawn as two ruled pages with a spine and a pen, large, because the first
         version read as a table with an umbrella over it - which teaches nothing.

         IT SITS BY THE BARRIER, not at the right of the stage, because the fore
         layer draws OVER the cast: at its first position it covered the chest of
         whoever stood at 74% of the stage, which in cycle 1.1 is Ammar. */
      var s = r(776, 690, 44, 190, WOOD2, 6);          /* lectern post */
      s += r(690, 856, 216, 24, WOOD2, 6);             /* its foot */
      /* the two open pages, tilted towards the camera */
      s += p('M 610 660 L 798 628 L 798 712 L 610 744 Z', PAPER);
      s += p('M 986 660 L 798 628 L 798 712 L 986 744 Z', '#f2ece0');
      s += p('M 610 660 L 798 628 L 986 660', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="7" stroke-linejoin="round"');
      s += p('M 798 628 L 798 712', 'none',
             ' stroke="' + WOOD2 + '" stroke-width="6"');
      /* ruled lines, and two names already written */
      for (var i = 0; i < 4; i++) {
        s += p('M ' + (636 + i * 2) + ' ' + (684 + i * 16) + ' L ' +
               (780 + i * 2) + ' ' + (658 + i * 16), 'none',
               ' stroke="#c9c0ae" stroke-width="3"');
        s += p('M ' + (818 - i * 2) + ' ' + (658 + i * 16) + ' L ' +
               (962 - i * 2) + ' ' + (684 + i * 16), 'none',
               ' stroke="#c9c0ae" stroke-width="3"');
      }
      s += line(646, 680, 730, 668, INK, 5);
      s += line(646, 696, 708, 686, INK, 5);
      /* the pen, resting across the spine */
      s += p('M 856 706 L 942 676', 'none',
             ' stroke="' + INK + '" stroke-width="8" stroke-linecap="round"');
      s += c(946, 675, 6, RUST);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 2 · THE YARD
     Deliveries, the lorry, pallets counted in the sun. */
  MINE.yard = {
    back: function () {
      var s = r(0, 0, 1600, 900, SKY) + r(0, 0, 1600, 260, SKY2);
      s += r(0, 260, 1600, 300, STONE) + r(0, 260, 1600, 20, STONE2);
      /* the roller shutter of the store, closed at the back */
      s += r(150, 300, 420, 260, STEEL, 6);
      for (var i = 0; i < 9; i++) s += r(150, 310 + i * 28, 420, 10, STEEL2);
      s += r(980, 300, 440, 260, STONE2, 6) + r(1040, 350, 140, 110, SKY2, 4);
      s += r(0, 560, 1600, 340, FLOOR) + r(0, 560, 1600, 16, FLOOR2);
      return stage(s);
    },
    mid: function () {
      /* the lorry, side on */
      var s = r(820, 360, 520, 230, '#cfd7dc', 10) + r(820, 360, 520, 36, STEEL2, 6);
      s += r(1340, 420, 180, 170, RUST, 10) + r(1380, 450, 110, 70, SKY2, 4);
      s += c(920, 610, 54, INK) + c(920, 610, 24, STEEL);
      s += c(1420, 610, 54, INK) + c(1420, 610, 24, STEEL);
      return stage(s);
    },
    fore: function () {
      /* pallets and boxes - what gets counted, and miscounted */
      var s = '';
      for (var k = 0; k < 3; k++) {
        var x = 150 + k * 190, y = 650 - (k % 2) * 30;
        s += r(x, y, 160, 26, WOOD2, 3);
        s += r(x + 10, y - 86, 140, 86, WOOD, 4) + r(x + 10, y - 86, 140, 12, WOOD2, 3);
        s += line(x + 26, y - 44, x + 134, y - 44, PAPER, 5);
      }
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 3 · THE STORE
     Shelves, a ladder, the back store counted on Mondays. */
  MINE.store = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#ded5c6') + r(0, 0, 1600, 240, '#cfc5b4');
      s += r(0, 620, 1600, 280, FLOOR) + r(0, 620, 1600, 16, FLOOR2);
      /* shelving bays, back wall */
      for (var b = 0; b < 4; b++) {
        var x = 60 + b * 390;
        s += r(x, 170, 330, 450, '#c6bba8', 6);
        for (var shelf = 0; shelf < 4; shelf++) {
          s += r(x, 170 + shelf * 112, 330, 14, STEEL2, 3);
        }
      }
      return stage(s);
    },
    mid: function () {
      var s = '';
      /* boxes on the shelves, deliberately uneven - a real store is not tidy */
      var cols = ['#b4885c', '#a8714a', '#c49a68', '#9c8f80'];
      for (var b = 0; b < 4; b++) {
        for (var shelf = 0; shelf < 4; shelf++) {
          var n = 2 + ((b + shelf) % 3);
          for (var i = 0; i < n; i++) {
            s += r(80 + b * 390 + i * 84, 196 + shelf * 112, 74, 72,
                   cols[(b + shelf + i) % 4], 4);
          }
        }
      }
      return stage(s);
    },
    fore: function () {
      /* the ladder and the clipboard */
      var s = line(1380, 880, 1430, 420, WOOD2, 14) + line(1470, 880, 1500, 420, WOOD2, 14);
      for (var i = 0; i < 6; i++) {
        s += line(1392 + i * 8, 820 - i * 72, 1478 + i * 6, 812 - i * 72, WOOD, 10);
      }
      s += r(120, 700, 150, 190, '#8f98a1', 8) + r(136, 716, 118, 150, PAPER, 4);
      s += line(156, 762, 236, 762, INK, 5) + line(156, 800, 214, 800, INK, 5);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 4 · THE COUNTER
     The trade counter at the front, where customers appear from A2. */
  MINE.counter = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#e9e1d4') + r(0, 0, 1600, 300, '#ddd3c3');
      /* shopfront window onto the street */
      s += r(60, 90, 640, 380, SKY2, 10);
      s += r(60, 90, 640, 380, 'none', 10).replace('fill="none"',
            'fill="none" stroke="' + STEEL2 + '" stroke-width="12"');
      s += p('M 380 90 v 380', 'none', ' stroke="' + STEEL2 + '" stroke-width="10"');
      /* price board */
      s += r(880, 120, 620, 300, PAPER, 8);
      for (var i = 0; i < 6; i++) {
        s += line(930, 180 + i * 42, 1300, 180 + i * 42, i % 2 ? STEEL : INK, 6);
      }
      s += r(0, 620, 1600, 280, FLOOR);
      return stage(s);
    },
    mid: function () {
      /* the counter itself */
      var s = r(120, 540, 1360, 120, WOOD, 10) + r(120, 540, 1360, 20, WOOD2, 6);
      s += r(160, 660, 1280, 200, WOOD2, 6);
      return stage(s);
    },
    fore: function () {
      /* the bell, the pad, the pen - the three things a counter needs */
      var s = c(1180, 520, 34, '#c9a227') + r(1146, 520, 68, 16, '#a8861c', 4);
      s += c(1180, 480, 9, '#a8861c');
      s += r(320, 500, 190, 54, PAPER, 4) + line(348, 528, 482, 528, STEEL, 4);
      s += line(560, 536, 640, 508, INK, 7);
      return stage(s);
    }
  };

  /* ---------------------------------------------------------- 5 · THE MEETING
     Where B1 and B2 live: a table, a screen, a supplier across it. */
  MINE.meeting = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#e6e9ec') + r(0, 0, 1600, 320, '#dde2e7');
      /* window wall */
      s += r(70, 90, 520, 340, SKY2, 8);
      s += p('M 330 90 v 340', 'none', ' stroke="#9aa7b2" stroke-width="10"');
      /* the screen on the wall */
      s += r(820, 110, 660, 370, INK, 10) + r(846, 136, 608, 318, '#2c6f8f', 6);
      s += line(900, 220, 1300, 220, PAPER, 10) + line(900, 280, 1180, 280, '#9fd0e4', 10);
      s += line(900, 340, 1240, 340, '#9fd0e4', 10);
      s += r(0, 640, 1600, 260, '#cfd5da');
      return stage(s);
    },
    mid: function () {
      var s = r(180, 560, 1240, 150, WOOD, 14) + r(180, 560, 1240, 22, WOOD2, 8);
      s += r(300, 710, 60, 150, WOOD2, 6) + r(1240, 710, 60, 150, WOOD2, 6);
      return stage(s);
    },
    fore: function () {
      /* papers, two cups, a phone face down */
      var s = r(420, 520, 210, 58, PAPER, 4) + line(448, 548, 602, 548, STEEL, 4);
      s += r(700, 528, 180, 50, PAPER, 4) + line(726, 552, 854, 552, STEEL, 4);
      s += c(980, 540, 30, '#f4efe6') + c(980, 540, 20, '#6f4a2f');
      s += c(1120, 548, 26, '#f4efe6') + c(1120, 548, 17, '#6f4a2f');
      s += r(1230, 524, 96, 48, INK, 8);
      return stage(s);
    }
  };

  /* WRAPPED, NOT EDITED. A name this file knows resolves here; anything else falls
     through to the engine's own rooms, so a scene that asks for `office` still gets it. */
  var base = A.set;
  A.set = function (name) {
    return Object.prototype.hasOwnProperty.call(MINE, name) ? MINE[name] : base(name);
  };
  A.setNames = (A.setNames || []).concat(Object.keys(MINE));
  A.pbeSets = Object.keys(MINE);
}(window));
