/* ============================================================
   English for Auto Maintenance B1 — art-eam-u8.js

   UNIT 8'S OWN OBJECTS: quality, and the promises behind it.

   The hard words here are the ABSTRACT ones — warranty, guarantee, standard, recall — and an
   abstraction drawn as a label in a box teaches nothing. Each is drawn instead as the thing a
   mechanic actually handles when the word is used: a warranty is the booklet with a date in it
   and the bill at zero, a recall is the carmaker's letter going out to many owners at once, a
   standard is the measured limit a reading is held against, a guarantee is the garage's own
   signature under its own promise. A defect and a sign-off are each a mark on paper, so they
   are told apart by WHAT the mark is: a ringed fault against a signed name.
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
      FLOOR = '#b9c4cb', RUBBER = '#2b3238', GOLD = '#b9912f';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function ring(cx, cy, rad, col, wd) {
    return c(cx, cy, rad, 'none').replace('fill="none"',
      'fill="none" stroke="' + col + '" stroke-width="' + (wd || 3) + '"');
  }
  function lines(x, y, wd, n, gap) {
    var s = '';
    for (var i = 0; i < n; i++) { s += r(x, y + i * (gap || 9), wd, 3.2, LINE, 2); }
    return s;
  }
  /* a handwritten signature, which is what a sign-off and a guarantee both carry */
  function signature(x, y, col) {
    return stroke('M ' + x + ' ' + y + ' q 8 -14 14 -2 q 4 10 10 -6 q 6 -14 12 4 '
      + 'q 4 12 14 -6', col || '#24405c', 2.8);
  }

  /* ---- defect: the fault found, ringed on the sheet ---- */
  A.addSpot('defect', function () {
    var s = '';
    s += r(34, 10, 132, 120, PAPER, 4);
    s += r(34, 10, 132, 16, STEEL, 4);
    s += t(100, 22, 9, 'INSPECTION', PAPER, 'middle', 800);
    var ok = [true, true, false, true];
    for (var i = 0; i < 4; i++) {
      var y = 38 + i * 22;
      s += r(44, y, 10, 10, ok[i] ? '#e3f0e7' : '#fdeae6', 2);
      if (ok[i]) { s += stroke('M 45 ' + (y + 5) + ' l 3.4 3.4 l 6 -7', GREEN, 2.4); }
      else { s += stroke('M 46 ' + (y + 2) + ' l 6 6 m 0 -6 l -6 6', RED, 2.6); }
      s += r(60, y + 2, 72, 3.6, LINE, 2);
    }
    /* the ring that makes it a DEFECT and not a tick list */
    s += '<g transform="translate(96,82) rotate(-6)">' + ring(0, 0, 26, RED, 3.2) + '</g>';
    s += c(150, 94, 15, RED) + t(150, 100, 17, '!', PAPER, 'middle', 800);
    return frame(s, '#f3eeec');
  });

  /* ---- sign-off: the name written that lets the car go ---- */
  A.addSpot('sign-off', function () {
    var s = '';
    s += r(26, 16, 148, 108, PAPER, 4);
    s += r(26, 16, 148, 14, GREEN, 4);
    s += t(100, 27, 9, 'WORK COMPLETE', PAPER, 'middle', 800);
    s += lines(38, 40, 92, 3, 10);
    for (var i = 0; i < 3; i++) {
      s += stroke('M 140 ' + (42 + i * 10) + ' l 3.2 3.2 l 6 -7', GREEN, 2.4);
    }
    /* the ruled line and the name on it: the whole point of the word */
    s += stroke('M 44 100 h 112', STEEL, 2.4);
    s += signature(52, 96, '#24405c');
    s += t(44, 116, 9, 'signed — Nabil, foreman', STEEL2, 'start', 700);
    s += c(160, 88, 13, '#e7f1ea') + ring(160, 88, 13, GREEN, 2.4);
    s += stroke('M 153 88 l 5 6 l 10 -12', GREEN, 3.4);
    return frame(s, '#edf3ee');
  });

  /* ---- warranty: the booklet with the date, and the bill at nothing ---- */
  A.addSpot('warranty', function () {
    var s = '';
    /* the booklet */
    s += r(18, 22, 86, 100, '#1d4e63', 4);
    s += r(24, 28, 74, 88, PAPER, 3);
    s += t(61, 46, 10, 'WARRANTY', PAINT, 'middle', 800);
    s += stroke('M 34 54 h 54', '#cfd7dc', 2);
    s += t(61, 72, 9, 'valid until', STEEL2, 'middle', 700);
    s += r(32, 78, 58, 18, '#e8f0f4', 3);
    s += t(61, 91, 11, '03 / 2028', INK, 'middle', 800);
    s += c(61, 108, 8, GOLD) + stroke('M 57 108 l 3 3 l 6 -7', PAPER, 2.4);
    /* what it means at the desk: a bill of nothing */
    s += r(116, 40, 68, 64, PAPER, 3) + r(116, 40, 68, 12, GREEN, 3);
    s += t(150, 50, 8, 'TO PAY', PAPER, 'middle', 800);
    s += lines(124, 60, 38, 2, 9);
    s += stroke('M 124 80 h 52', '#cfd7dc', 2);
    s += t(150, 97, 20, '0', GREEN, 'middle', 800);
    return frame(s, '#eef2f4');
  });

  /* ---- recall: ONE letter from the carmaker, going to MANY owners ---- */
  A.addSpot('recall', function () {
    var s = '';
    /* the carmaker, as the factory that sends it */
    s += p('M 10 70 h 54 v -22 l 14 -12 v 34 h 14 v 52 h -82 Z', STEEL);
    s += r(18, 80, 12, 12, AMBER, 2) + r(38, 80, 12, 12, AMBER, 2)
      + r(74, 80, 12, 12, AMBER, 2);
    s += r(6, 118, 90, 10, FLOOR, 3);
    /* the letters fanning out: the plural is the word */
    function letter(x, y, rot) {
      var g = '<g transform="translate(' + x + ',' + y + ') rotate(' + rot + ')">';
      g += r(0, 0, 40, 28, PAPER, 3) + p('M 0 0 l 20 16 l 20 -16', 'none')
        .replace('fill="none"', 'fill="none" stroke="' + RED + '" stroke-width="2.4"');
      g += '</g>';
      return g;
    }
    s += letter(106, 10, -8) + letter(142, 42, 4) + letter(106, 78, -4);
    s += stroke('M 96 70 q 14 -40 26 -48', RED, 2.4);
    s += stroke('M 96 70 q 26 -10 40 -8', RED, 2.4);
    s += stroke('M 96 70 q 14 22 26 24', RED, 2.4);
    s += t(100, 136, 10, 'free of charge, to every owner', STEEL, 'middle', 700);
    return frame(s, '#f2eeec');
  });

  /* ---- genuine part: the maker's box beside the plain one ---- */
  A.addSpot('genuine part', function () {
    var s = '';
    s += r(0, 112, 200, 16, FLOOR, 3);
    /* the genuine one: sealed, marked, holographic sticker */
    s += r(18, 36, 72, 76, '#1d4e63', 4);
    s += r(24, 42, 60, 42, '#e8f0f4', 3);
    s += t(54, 60, 10, 'GENUINE', PAINT, 'middle', 800);
    s += t(54, 74, 8, 'part no. 41 220', STEEL2, 'middle', 700);
    s += c(54, 96, 11, GOLD) + c(54, 96, 7, '#e3c76a');
    s += stroke('M 50 96 l 3.4 3.4 l 6.4 -7.4', '#6b5214', 2.6);
    /* the plain one: no mark at all */
    s += r(110, 48, 72, 64, '#9a8e7c', 4);
    s += r(116, 54, 60, 34, '#cbbfa8', 3);
    s += stroke('M 128 72 h 36', '#8b7f6d', 3);
    s += t(146, 104, 9, 'no maker, no number', '#5f5444', 'middle', 700);
    return frame(s, '#eef1f3');
  });

  /* ---- service standard: the limit a reading is held against ---- */
  A.addSpot('service standard', function () {
    var s = '';
    s += r(22, 14, 156, 112, PAPER, 4);
    s += r(22, 14, 156, 16, PAINT, 4);
    s += t(100, 26, 9, 'THE STANDARD', PAPER, 'middle', 800);
    /* the band that is allowed, with the limit lines drawn */
    s += r(40, 48, 120, 34, '#e3f0e7', 3);
    s += stroke('M 40 48 h 120 M 40 82 h 120', GREEN, 2.6);
    s += t(100, 70, 10, 'within the standard', '#245f3b', 'middle', 700);
    s += t(34, 44, 9, 'max', STEEL2, 'start', 700);
    s += t(34, 94, 9, 'min', STEEL2, 'start', 700);
    /* two readings: one inside it, one out */
    s += c(74, 64, 7, PAINT) + t(74, 40, 9, '2.1', PAINT, 'middle', 800);
    s += c(132, 98, 7, RED) + t(132, 116, 9, '1.2', RED, 'middle', 800);
    s += stroke('M 132 90 v -6', RED, 2);
    return frame(s, '#eef2f4');
  });

  /* ---- inspection sheet: the list of what gets checked, on its clipboard ---- */
  A.addSpot('inspection sheet', function () {
    var s = '';
    s += r(36, 18, 128, 112, '#3c4a54', 5);
    s += r(42, 28, 116, 96, PAPER, 3);
    s += r(76, 10, 48, 14, CHROME, 4) + r(86, 6, 28, 8, '#8e9aa3', 3);
    s += t(100, 42, 9, 'CHECK SHEET', STEEL, 'middle', 800);
    s += stroke('M 52 48 h 96', '#dfe5e9', 1.8);
    for (var i = 0; i < 5; i++) {
      var y = 56 + i * 13;
      s += r(52, y, 9, 9, '#eef2f4', 2);
      s += ring(56.5, y + 4.5, 4.5, LINE, 1.4);
      s += r(68, y + 2, 60, 3.4, LINE, 2);
    }
    return frame(s, '#eef1f3');
  });

  /* ---- guarantee: the garage's OWN promise, in its own hand ---- */
  A.addSpot('guarantee', function () {
    var s = '';
    s += r(24, 14, 152, 112, PAPER, 4);
    s += r(24, 14, 152, 4, GOLD, 2);
    s += t(100, 38, 11, 'OUR GUARANTEE', GOLD, 'middle', 800);
    s += t(100, 56, 9, 'this work, for six months', STEEL, 'middle', 700);
    s += stroke('M 56 66 h 88', '#e4dcc4', 2);
    /* the hand-written name: the garage's own, not the carmaker's */
    s += signature(58, 88, '#24405c');
    s += stroke('M 52 96 h 96', STEEL2, 2);
    s += t(100, 110, 9, 'Maher — the garage', STEEL2, 'middle', 700);
    /* the seal */
    s += c(160, 102, 16, '#f6edd4') + ring(160, 102, 16, GOLD, 2.4);
    s += ring(160, 102, 10, GOLD, 1.6);
    s += t(160, 106, 9, '6m', '#6b5214', 'middle', 800);
    return frame(s, '#f4f1e8');
  });

  A.addSpot('signoff', function () { return A.spot('sign-off'); });
  A.addSpot('sign off', function () { return A.spot('sign-off'); });
  A.addSpot('genuine-part', function () { return A.spot('genuine part'); });
  A.addSpot('genuine', function () { return A.spot('genuine part'); });
  A.addSpot('service-standard', function () { return A.spot('service standard'); });
  A.addSpot('standard', function () { return A.spot('service standard'); });
  A.addSpot('inspection-sheet', function () { return A.spot('inspection sheet'); });
  A.addSpot('inspection', function () { return A.spot('inspection sheet'); });
  A.addSpot('fault', function () { return A.spot('defect'); });
}(window));
