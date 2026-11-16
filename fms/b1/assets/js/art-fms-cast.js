/* ============================================================
   English for Foreign Ministry Staff B1.1 — art-fms-cast.js

   THE CAST, AND THE ROOMS THEY WORK IN.

   Loaded after art.js and art-fms.js. It does two things:

     1. names the fifteen people of this course and fixes each one's face for ever
     2. adds the three rooms the scenes play in - reception, the meeting room, the forum

   IDENTITY IS FIXED HERE AND NOWHERE ELSE, for the reason the EAM course found the hard
   way: when each card picks its own colours, a character is a different person from one
   screen to the next, and two characters who share a rig become indistinguishable. Every
   card, portrait and scene asks for a person by NAME.

   THE NAMES AND ROLES COME FROM tools/fms_cast.py, which is also what maps the book's
   sixty-three speaker labels onto these fifteen. The book writes `Reception Officer`,
   `Ministry Officer`, `Senior Officer`, `Visitor` and `His Excellency` as if they were
   people; they are roles, and that table decides whose mouth each one is.

   `office` IS NOT DEFINED HERE. art.js already carries it, and A.set() falls back to it,
   so redefining it would quietly replace a room three other courses use.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.FMS && w.FMS.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t;
  var P = A.fmsPal, stroke = A.fmsStroke, sheet = A.fmsSheet, flag = A.fmsFlag;

  function svg16(s) { return D.svgFit('0 0 1600 900', s); }

  /* ============================================================
     ADDING A ROOM, WHEN THE ENGINE HAS NO addSet.

     art.js exposes addSpot, addFigure, addDiorama and addLive - and NOT addSet. Its sets live
     in a private `SETS` object with only a getter on top of it:

         A.set = function (name) { return SETS[name] || SETS.office; };

     So `A.addSet(...)` throws `A.addSet is not a function`, and the fallback in that getter
     means the scene still mounts - in the office. The EAM course calls A.addSet for its
     workshop and its reception desk and has been doing this since it shipped: measured here,
     the call throws on every page load and both of its rooms have always been the office.
     Worth telling its owner; not worth changing a live course from this one.

     The seam that DOES exist is the getter itself. Wrapping it registers a room without
     touching a lifted file and without losing the five rooms art.js already carries.
     ============================================================ */
  var ROOMS = {};
  function addRoom(name, layers) { ROOMS[name] = layers; return name; }
  var baseSet = A.set;
  A.set = function (name) { return ROOMS[name] || baseSet(name); };
  A.roomNames = function () { return Object.keys(ROOMS); };

  /* ============================================================
     THE CAST — kept in step with tools/fms_cast.py CAST
     ============================================================ */
  var CAST = {
    linh:       { rig: 'f-30s-a', shirt: '#3c6e63', shirt2: '#2d564d',
                  name: 'Linh', role: 'reception officer', voice: 'f', pitch: 1.06 },
    mai:        { rig: 'f-30s-h', shirt: '#4a5a68', shirt2: '#3a4854',
                  name: 'Mai', role: 'protocol officer', voice: 'f', pitch: 1.02 },
    huy:        { rig: 'm-30s-a', shirt: '#2f5f86', shirt2: '#24496a',
                  name: 'Huy', role: 'economic affairs specialist', voice: 'm', pitch: 1.0 },
    salma:      { rig: 'f-30s-h', shirt: '#6d5a7e', shirt2: '#544662',
                  name: 'Salma', role: 'liaison officer', voice: 'f', pitch: 1.04 },
    youssef:    { rig: 'm-50s-a', shirt: '#223243', shirt2: '#18242f',
                  name: 'Youssef', role: 'senior officer', voice: 'm', pitch: 0.92 },
    dawit:      { rig: 'm-20s-b', shirt: '#7a6a4f', shirt2: '#5f533e',
                  name: 'Dawit', role: 'desk officer', voice: 'm', pitch: 1.06 },
    selamawit:  { rig: 'f-30s-a', shirt: '#2f6f86', shirt2: '#245a6a',
                  name: 'Selamawit', role: 'press officer', voice: 'f', pitch: 1.1 },
    klaus:      { rig: 'm-50s-b', shirt: '#8a6e52', shirt2: '#6d5640',
                  name: 'Klaus Richter', role: 'investor, German Embassy',
                  voice: 'm', pitch: 0.94 },
    valentina:  { rig: 'f-30s-a', shirt: '#8a5a62', shirt2: '#6d474e',
                  name: 'Valentina', role: 'cultural attache', voice: 'f', pitch: 1.0 },
    daniyar:    { rig: 'm-50s-a', shirt: '#4f6a5a', shirt2: '#3d5246',
                  name: 'Daniyar Suleimenov', role: 'visiting delegate',
                  voice: 'm', pitch: 0.96 },
    aigerim:    { rig: 'f-30s-h', shirt: '#6d6f8f', shirt2: '#54566f',
                  name: 'Aigerim', role: 'delegation coordinator', voice: 'f', pitch: 1.08 },
    official:   { rig: 'm-50s-a', shirt: '#2c3f52', shirt2: '#21303e',
                  name: 'the ministry officer', role: 'ministry officer',
                  voice: 'm', pitch: 0.9 },
    visitor:    { rig: 'm-30s-a', shirt: '#5a6a7a', shirt2: '#46525e',
                  name: 'the visitor', role: 'foreign visitor', voice: 'm', pitch: 1.02 },
    guest:      { rig: 'f-30s-a', shirt: '#7a5a4f', shirt2: '#5f463e',
                  name: 'the guest', role: 'foreign guest', voice: 'f', pitch: 1.04 },
    ambassador: { rig: 'm-50s-b', shirt: '#2a2f45', shirt2: '#1f2335',
                  name: 'the ambassador', role: 'ambassador', voice: 'm', pitch: 0.88 }
  };
  A.cast = CAST;

  /* ============================================================
     THE ROOMS
     ============================================================ */

  /* RECEPTION — where every unit 1 scene plays, and most of 3B and 4A */
  addRoom('reception', {
    back: function () {
      var s = r(0, 0, 1600, 900, '#e6edf1');
      s += r(0, 0, 1600, 560, '#dce6ec');
      s += r(0, 548, 1600, 20, '#bccbd5');
      /* the glazed frontage, with the street behind it */
      s += r(90, 110, 560, 350, '#cfe6ef', 10);
      s += stroke('M 90 110 h 560 v 350 h -560 z', '#9fb3bf', 12);
      s += stroke('M 370 110 v 350 M 90 285 h 560', '#9fb3bf', 9);
      /* the ministry crest on the back wall */
      s += c(1130, 230, 96, '#d4dee6') + c(1130, 230, 74, '#e8eef3');
      s += p('M 1130 168 l 26 52 h -52 z', P.GOLD);
      s += p('M 1072 246 h 116 v 14 h -116 z', P.GOLD2);
      s += t(1130, 300, 26, 'MINISTRY OF', '#5a6d7a', 'middle', 700);
      s += t(1130, 334, 26, 'FOREIGN AFFAIRS', '#5a6d7a', 'middle', 700);
      /* signage over the corridor */
      s += r(820, 430, 620, 54, '#2f4257', 6);
      s += t(1130, 466, 24, 'PROTOCOL  ·  CONSULAR  ·  PRESS', '#dfe7ee', 'middle', 600);
      return svg16(s);
    },
    mid: function () {
      /* the reception counter, seen across */
      var s = r(300, 600, 1000, 150, '#c8a97e', 10);
      s += r(300, 582, 1000, 26, '#dcc39b', 6);
      s += stroke('M 330 650 h 940', '#b08968', 4);
      /* a visitor book and a pen tray on the counter */
      s += sheet(430, 520, 150, 60, 4);
      s += r(650, 556, 90, 20, '#3a4650', 4);
      /* the queue rail */
      s += r(1360, 560, 16, 200, '#9fb3bf', 6) + r(1500, 560, 16, 200, '#9fb3bf', 6);
      s += stroke('M 1368 600 h 140', '#b8432f', 7);
      return svg16(s);
    },
    fore: function () {
      var s = r(0, 806, 1600, 94, '#9aa9b399');
      s += r(-20, 792, 1640, 26, '#aebecb', 8);
      /* two flags on stands, which is what a ministry lobby has */
      s += flag(120, 600, 200, '#2f4257');
      s += flag(1480, 600, 200, '#3c6e63', true);
      /* a low table with magazines, foreground right */
      s += r(1180, 772, 220, 20, '#b08968', 5);
      s += sheet(1210, 744, 70, 28, 2);
      return svg16(s);
    }
  });

  /* THE MEETING ROOM — bilateral coordination, formal welcomes, the ceremonial unit 4 */
  addRoom('meeting', {
    back: function () {
      var s = r(0, 0, 1600, 900, '#e9eef2');
      s += r(0, 0, 1600, 560, '#dfe7ed');
      s += r(0, 548, 1600, 20, '#c2cfd8');
      /* panelled wall */
      for (var i = 0; i < 6; i++) {
        s += r(70 + i * 250, 110, 210, 330, '#d3c0a4', 6);
        s += stroke('M ' + (84 + i * 250) + ' 124 h 182 v 302 h -182 z', '#bda687', 3);
      }
      /* the two flags of a bilateral meeting, behind the head of the table */
      s += flag(690, 150, 280, '#2f4257');
      s += flag(910, 150, 280, '#8d3b3b', true);
      s += t(800, 492, 24, 'BILATERAL WORKING GROUP', '#6d5f49', 'middle', 700);
      return svg16(s);
    },
    mid: function () {
      /* the long table, with name cards along it */
      var s = e(800, 660, 620, 120, '#b08968') + e(800, 640, 620, 120, '#c8a97e');
      for (var i = 0; i < 6; i++) {
        var x = 360 + i * 180;
        s += p('M ' + x + ' 618 l 54 0 l -6 -26 h -42 z', '#f6f3ea');
        s += stroke('M ' + (x + 8) + ' 606 h 36', '#8d99a6', 3);
      }
      /* water glasses */
      for (var j = 0; j < 4; j++) {
        s += r(430 + j * 250, 586, 22, 30, '#cfe6efcc', 3);
      }
      return svg16(s);
    },
    fore: function () {
      var s = r(0, 806, 1600, 94, '#a3b0ba99');
      s += r(-20, 792, 1640, 26, '#b4c3cd', 8);
      /* a folder and a pen, close to the camera */
      s += r(140, 752, 240, 44, '#2f4257', 6);
      s += stroke('M 170 774 h 180', P.GOLD, 4);
      s += stroke('M 1340 768 l 120 -22', '#3a4650', 7);
      return svg16(s);
    }
  });

  /* THE FORUM — the investment forum and the press conference: a hall, a podium, an audience */
  addRoom('forum', {
    back: function () {
      var s = r(0, 0, 1600, 900, '#dfe4ea');
      s += r(0, 0, 1600, 580, '#d2d9e1');
      s += r(0, 568, 1600, 20, '#b4bfca');
      /* the backdrop wall a forum is always photographed against */
      s += r(260, 90, 1080, 400, '#2f4257', 8);
      s += t(800, 240, 46, 'INVESTMENT FORUM', '#e4ecf2', 'middle', 800);
      s += stroke('M 480 290 h 640', P.GOLD, 6);
      s += t(800, 360, 26, 'economic diplomacy  ·  partnership  ·  growth',
             '#b9c8d4', 'middle', 500);
      /* a repeated small crest along the bottom of the backdrop, as on a real step-and-repeat */
      for (var i = 0; i < 7; i++) {
        s += c(360 + i * 160, 430, 18, '#44586e');
        s += p('M ' + (360 + i * 160) + ' 418 l 8 16 h -16 z', P.GOLD);
      }
      return svg16(s);
    },
    mid: function () {
      /* the podium, off to one side so the actors are not hidden behind it */
      var s = r(1180, 560, 240, 230, '#2f4257', 8);
      s += r(1204, 584, 192, 26, P.GOLD, 4);
      s += stroke('M 1300 560 v -54', '#9fb3bf', 6) + c(1300, 496, 16, '#3a4650');
      /* a low stage edge */
      s += r(0, 778, 1600, 22, '#9aa9b3', 4);
      return svg16(s);
    },
    fore: function () {
      var s = r(0, 812, 1600, 88, '#97a6b099');
      /* the backs of seated heads, which is what a forum floor looks like */
      for (var i = 0; i < 9; i++) {
        s += c(90 + i * 180, 856, 34, '#44505c');
        s += p('M ' + (56 + i * 180) + ' 890 q 34 -26 68 0 z', '#36414b');
      }
      return svg16(s);
    }
  });

})(window);
