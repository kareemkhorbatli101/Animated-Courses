/* ============================================================
   English for Banking B1 — art-bank.js

   THE BANK'S OWN OBJECTS, DRAWN. This course ships zero image files, as every course
   on this site does: the art is built in code so it themes, scales, needs no media
   repository, and cannot 404. The student book carries 52 PNGs; those were read as
   BRIEFS for what each picture should show, and the drawing is done here.

   WHY DRAWN AND NOT BORROWED. A bank's world is a counter, a cheque, a card, an ATM,
   an account number laid out so you can see which part is the country and which the
   bank, a transfer passing through a correspondent, a letter of credit with its four
   parties. None of that is an emoji and none of it is a stock icon: a generic
   "document" glyph tells a learner nothing about the difference between a statement
   and a letter of credit, which is exactly what the vocabulary parts are for.

   Loaded after art.js. Attaches only through A.addSpot, which the engine provides.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.BNK && w.BNK.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ---------------------------------------------------------- the bank palette */
  var STONE = '#d8dee3', STONE2 = '#b9c4cb', STONE3 = '#9aa8b2';
  var INK = '#52646f', NAVY = '#1f3d2b', NAVY2 = '#2f5742';
  var PAPER = '#f6f3ea', PAPER2 = '#e7e1d2', GOLD = '#c8a55c', GOLD2 = '#a8893f';
  var SEAL = '#8d3b3b', GREEN = '#3c6e63', SKY = '#eef4f2', BLUE = '#2e5a88';

  function stroke(d, col, wdt, cap) {
    return p(d, null, ' stroke="' + col + '" stroke-width="' + (wdt || 2) +
      '" stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }
  function dash(d, col, wdt, pat) {
    return p(d, null, ' stroke="' + col + '" stroke-width="' + (wdt || 1.4) +
      '" stroke-dasharray="' + (pat || '4 3') + '" stroke-linecap="round"');
  }
  function boxO(x, y, wd, ht, col, wdt, rad) {
    return p('M ' + x + ' ' + y + ' h ' + wd + ' v ' + ht + ' h ' + (-wd) + ' z',
      null, ' stroke="' + col + '" stroke-width="' + (wdt || 1.4) + '"' +
      (rad ? ' rx="' + rad + '"' : ''));
  }
  function caption(cx, y, text) {
    return t(cx, y, 8.5, text, INK, 'middle', 600);
  }
  /* a sheet of paper with ruled lines */
  function sheet(x, y, wd, ht, lines, tint) {
    var s = r(x, y, wd, ht, tint || PAPER, 2) + boxO(x, y, wd, ht, STONE3, 1.2);
    for (var i = 0; i < (lines || 4); i++) {
      s += stroke('M ' + (x + 5) + ' ' + (y + 8 + i * ((ht - 12) / (lines || 4))) +
        ' h ' + (wd - 12), STONE3, 1.6);
    }
    return s;
  }
  function seal(x, y, rad, col) {
    var s = '', i, a;
    for (i = 0; i < 12; i++) {
      a = i * Math.PI / 6;
      s += c(x + Math.cos(a) * rad, y + Math.sin(a) * rad, rad * 0.28, col || SEAL);
    }
    return s + c(x, y, rad * 0.8, col || SEAL) + c(x, y, rad * 0.45, PAPER);
  }
  /* a standing figure */
  function person(x, y, tone, skin) {
    return p('M ' + (x - 8) + ' ' + y + ' q 0 -15 8 -15 q 8 0 8 15 z', tone)
      + r(x - 8, y, 16, 2, tone, 1)
      + c(x, y - 19, 5.4, skin || '#d7b494');
  }
  function counter(y) {
    return r(10, y, 180, 15, STONE2, 3) + stroke('M 10 ' + y + ' h 180', STONE3, 1.5);
  }
  function coin(x, y, rad) {
    return c(x, y, rad, GOLD) + c(x, y, rad * 0.62, GOLD2);
  }
  function note(x, y, wd, ht, tint) {
    return r(x, y, wd, ht, tint || '#cfe3d6', 2) + boxO(x, y, wd, ht, GREEN, 1.2)
      + c(x + wd / 2, y + ht / 2, Math.min(wd, ht) * 0.22, '#ffffff')
      + c(x + wd / 2, y + ht / 2, Math.min(wd, ht) * 0.16, tint || '#cfe3d6');
  }

  /* ============================================================
     THE SPOTS
     ============================================================ */

  /* the counter: where most of this course happens */
  A.addSpot('bank-counter', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(14, 16, 172, 34, STONE, 3) + boxO(14, 16, 172, 34, STONE3, 1.2);
    s += stroke('M 30 24 v 18 M 60 24 v 18 M 90 24 v 18', STONE3, 1.4);
    s += counter(70);
    s += person(52, 66, NAVY);                       /* the teller, behind */
    s += person(140, 106, BLUE) + r(149, 98, 8, 7, INK, 1);   /* the customer */
    s += coin(96, 78, 4) + coin(106, 78, 4);
    s += caption(100, 132, 'the counter');
    return frame(s, SKY);
  });

  /* front office and back office, as a floor plan you can read */
  A.addSpot('branch-plan', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(12, 14, 176, 104, PAPER, 3) + boxO(12, 14, 176, 104, STONE3, 1.4);
    s += stroke('M 108 14 v 104', STONE3, 1.6);
    s += t(60, 28, 9, 'front office', NAVY, 'middle', 700);
    s += t(148, 28, 9, 'back office', GREEN, 'middle', 700);
    s += counter(44);
    s += person(38, 70, NAVY) + person(66, 70, BLUE) + person(92, 70, NAVY2);
    s += person(128, 70, GREEN) + person(156, 70, INK);
    s += t(60, 92, 7.5, 'with customers', INK, 'middle', 600);
    s += t(148, 92, 7.5, 'behind the scenes', INK, 'middle', 600);
    s += dash('M 108 100 v 14', STONE3, 1.2, '3 3');
    return frame(s, SKY);
  });

  /* an account number, laid out so each part is visible */
  A.addSpot('iban-anatomy', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(16, 40, 168, 30, PAPER, 3) + boxO(16, 40, 168, 30, STONE3, 1.3);
    var parts = [['SY', BLUE, 'country'], ['21', GOLD2, 'check'],
                 ['0011', GREEN, 'bank'], ['2233445566', NAVY, 'account']];
    var x = 24, i, wd;
    for (i = 0; i < parts.length; i++) {
      wd = 12 + parts[i][0].length * 7.4;
      s += r(x, 46, wd, 18, '#ffffff', 2) + boxO(x, 46, wd, 18, parts[i][1], 1.6);
      s += t(x + wd / 2, 59, 10, parts[i][0], parts[i][1], 'middle', 700);
      s += stroke('M ' + (x + wd / 2) + ' 70 v 12', parts[i][1], 1.2);
      s += t(x + wd / 2, 92, 7.5, parts[i][2], parts[i][1], 'middle', 600);
      x += wd + 6;
    }
    s += caption(100, 122, 'every part of the number says something');
    return frame(s, SKY);
  });

  /* a transfer crossing a border through a correspondent */
  A.addSpot('correspondent', function () {
    var s = r(0, 0, 200, 140, SKY);
    function bank(x, label, col) {
      var o = r(x - 22, 44, 44, 30, STONE, 2) + boxO(x - 22, 44, 44, 30, STONE3, 1.2);
      o += p('M ' + (x - 22) + ' 44 L ' + x + ' 32 L ' + (x + 22) + ' 44 z', col);
      o += t(x, 88, 8, label, col, 'middle', 700);
      return o;
    }
    s += bank(34, 'sending', NAVY);
    s += bank(100, 'correspondent', GOLD2);
    s += bank(166, 'receiving', GREEN);
    s += stroke('M 58 59 h 18', INK, 1.8) + p('M 76 59 l -5 -3 v 6 z', INK);
    s += stroke('M 124 59 h 18', INK, 1.8) + p('M 142 59 l -5 -3 v 6 z', INK);
    s += dash('M 67 24 v 96', STONE3, 1.2, '4 4');
    s += dash('M 133 24 v 96', STONE3, 1.2, '4 4');
    s += t(67, 20, 7.5, 'border', STONE3, 'middle', 600);
    s += caption(100, 132, 'money does not fly - it is passed on');
    return frame(s, SKY);
  });

  /* a cheque, with its fields named by position */
  A.addSpot('cheque', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(18, 34, 164, 72, PAPER, 3) + boxO(18, 34, 164, 72, STONE3, 1.4);
    s += stroke('M 26 50 h 86', STONE3, 1.8) + t(26, 46, 7, 'pay', INK, 'start', 600);
    s += r(126, 42, 48, 16, '#ffffff', 2) + boxO(126, 42, 48, 16, GOLD2, 1.4);
    s += t(150, 53, 9, 'amount', GOLD2, 'middle', 700);
    s += stroke('M 26 70 h 148', STONE3, 1.6);
    s += t(26, 66, 7, 'words', INK, 'start', 600);
    s += stroke('M 108 94 h 62', NAVY, 1.6);
    s += t(139, 102, 7, 'signature', INK, 'middle', 600);
    s += t(30, 96, 7, 'date', INK, 'start', 600) + stroke('M 26 90 h 50', STONE3, 1.4);
    return frame(s, SKY);
  });

  /* an ATM */
  A.addSpot('atm', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(62, 14, 76, 100, STONE, 4) + boxO(62, 14, 76, 100, STONE3, 1.4);
    s += r(72, 24, 56, 30, '#2b3c45', 2);
    s += stroke('M 80 34 h 30 M 80 42 h 20', '#8fd3b6', 2);
    s += r(74, 62, 20, 6, STONE3, 1) + r(104, 62, 20, 6, STONE3, 1);
    s += r(80, 76, 40, 14, '#1f2a30', 2) + t(100, 86, 7, 'cash', '#e8eef3', 'middle', 700);
    s += r(86, 98, 28, 5, GOLD, 1);
    s += caption(100, 130, 'a machine for cash withdrawals');
    return frame(s, SKY);
  });

  /* the card and its magnetic world */
  A.addSpot('bank-card', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(34, 36, 132, 76, BLUE, 6);
    s += r(48, 56, 24, 18, GOLD, 2) + stroke('M 48 65 h 24 M 60 56 v 18', GOLD2, 1.2);
    s += stroke('M 48 90 h 48 M 48 98 h 30', '#cfe0ef', 2.4);
    s += c(140, 92, 10, '#ffffff') + c(128, 92, 10, '#e2c98a');
    s += caption(100, 128, 'a debit or credit card');
    return frame(s, SKY);
  });

  /* a letter of credit and the four parties to it */
  A.addSpot('letter-of-credit', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += sheet(60, 18, 80, 60, 5);
    s += seal(128, 68, 8, SEAL);
    s += t(100, 14, 8, 'letter of credit', NAVY, 'middle', 700);
    var who = [[26, 96, 'buyer', BLUE], [74, 112, 'issuing bank', NAVY],
               [126, 112, 'advising bank', GREEN], [174, 96, 'seller', GOLD2]];
    for (var i = 0; i < who.length; i++) {
      s += c(who[i][0], who[i][1] - 14, 6, who[i][3]);
      s += t(who[i][0], who[i][1], 7, who[i][2], who[i][3], 'middle', 600);
    }
    s += dash('M 34 86 h 32 M 86 104 h 30 M 140 96 h 26', STONE3, 1.2, '3 3');
    return frame(s, SKY);
  });

  /* the exchange board */
  A.addSpot('rate-board', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(20, 16, 160, 104, '#22312c', 4);
    s += t(100, 32, 9, 'buy        sell', '#8fd3b6', 'middle', 700);
    var rows = ['USD', 'EUR', 'TRY', 'AED'];
    for (var i = 0; i < rows.length; i++) {
      var y = 50 + i * 18;
      s += t(38, y, 9, rows[i], '#e8eef3', 'start', 700);
      s += stroke('M 84 ' + (y - 3) + ' h 26', '#8fd3b6', 3);
      s += stroke('M 132 ' + (y - 3) + ' h 26', '#e2c98a', 3);
    }
    s += caption(100, 132, 'the spread is the gap between the two');
    return frame(s, SKY);
  });

  /* old note and new note, side by side - the redenomination */
  A.addSpot('redenomination', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += note(16, 40, 72, 42, '#e3d9c6');
    s += t(52, 32, 8, 'old note', INK, 'middle', 700);
    s += t(52, 100, 9, '50 000', INK, 'middle', 700);
    s += note(112, 40, 72, 42, '#cfe3d6');
    s += t(148, 32, 8, 'new note', GREEN, 'middle', 700);
    s += t(148, 100, 9, '500', GREEN, 'middle', 700);
    s += stroke('M 92 61 h 14', NAVY, 2) + p('M 106 61 l -5 -3 v 6 z', NAVY);
    s += t(100, 120, 8, 'two zeros fewer', NAVY, 'middle', 700);
    return frame(s, SKY);
  });

  /* a scam: the message that is not from the bank */
  A.addSpot('phishing', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(50, 20, 100, 94, '#2b3c45', 6);
    s += r(58, 32, 84, 52, PAPER, 2);
    s += stroke('M 66 44 h 60 M 66 54 h 46 M 66 64 h 54', STONE3, 2);
    s += r(66, 70, 40, 10, SEAL, 2) + t(86, 78, 7, 'click here', '#ffffff', 'middle', 700);
    s += c(150, 36, 13, SEAL) + t(150, 41, 15, '!', '#ffffff', 'middle', 800);
    s += caption(100, 128, 'a bank never asks for your password');
    return frame(s, SKY);
  });

  /* an organisation chart, for the management parts */
  A.addSpot('org-chart', function () {
    var s = r(0, 0, 200, 140, SKY);
    function box(x, y, wd, label, col) {
      return r(x, y, wd, 18, '#ffffff', 2) + boxO(x, y, wd, 18, col, 1.5)
        + t(x + wd / 2, y + 12, 7.5, label, col, 'middle', 700);
    }
    s += box(70, 18, 60, 'manager', NAVY);
    s += stroke('M 100 36 v 12', STONE3, 1.6);
    s += stroke('M 40 48 h 120', STONE3, 1.6);
    s += stroke('M 40 48 v 10 M 100 48 v 10 M 160 48 v 10', STONE3, 1.6);
    s += box(14, 58, 52, 'counter', GREEN);
    s += box(74, 58, 52, 'lending', BLUE);
    s += box(134, 58, 52, 'back office', INK);
    s += stroke('M 40 76 v 10 M 100 76 v 10 M 160 76 v 10', STONE3, 1.4);
    s += person(40, 108, GREEN) + person(100, 108, BLUE) + person(160, 108, INK);
    return frame(s, SKY);
  });

  /* a savings goal, as a column that fills */
  A.addSpot('savings-goal', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(66, 20, 68, 92, '#ffffff', 3) + boxO(66, 20, 68, 92, STONE3, 1.4);
    s += r(66, 64, 68, 48, '#cfe3d6', 0);
    s += stroke('M 66 64 h 68', GREEN, 2);
    s += t(100, 58, 8, 'saved', GREEN, 'middle', 700);
    s += t(100, 34, 8, 'goal', INK, 'middle', 700);
    s += dash('M 60 20 h 80', GOLD2, 1.4, '4 3');
    s += coin(44, 100, 6) + coin(44, 88, 6) + coin(44, 76, 6);
    s += caption(100, 130, 'a goal with a date is a plan');
    return frame(s, SKY);
  });

  /* the compliance check: who you are, and where it came from */
  A.addSpot('kyc-check', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += sheet(18, 28, 72, 58, 4);
    s += t(54, 22, 8, 'who you are', BLUE, 'middle', 700);
    s += c(36, 46, 7, '#d7b494') + stroke('M 30 60 q 6 -8 12 0', BLUE, 1.6);
    s += sheet(110, 28, 72, 58, 4, PAPER2);
    s += t(146, 22, 8, 'where it came from', GREEN, 'middle', 700);
    s += coin(130, 50, 5) + coin(144, 50, 5) + coin(158, 50, 5);
    s += c(100, 106, 13, GREEN) + t(100, 111, 13, '✓', '#ffffff', 'middle', 800);
    s += caption(100, 132, 'both, before the money moves');
    return frame(s, SKY);
  });

  /* a shariah-compliant sale: the bank buys, then sells on */
  A.addSpot('murabaha', function () {
    var s = r(0, 0, 200, 140, SKY);
    function node(x, label, col) {
      return c(x, 54, 15, '#ffffff') + p('M ' + x + ' 54 m -15 0 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0',
        null, ' stroke="' + col + '" stroke-width="1.8"')
        + t(x, 84, 7.5, label, col, 'middle', 700);
    }
    s += node(34, 'supplier', INK) + node(100, 'bank', NAVY) + node(166, 'customer', BLUE);
    s += r(28, 46, 12, 10, STONE2, 1) + r(94, 46, 12, 10, STONE2, 1)
      + r(160, 46, 12, 10, STONE2, 1);
    s += stroke('M 52 54 h 28', GREEN, 1.8) + p('M 80 54 l -5 -3 v 6 z', GREEN);
    s += stroke('M 118 54 h 30', GOLD2, 1.8) + p('M 148 54 l -5 -3 v 6 z', GOLD2);
    s += t(66, 44, 7, 'buys', GREEN, 'middle', 600);
    s += t(133, 44, 7, 'sells on', GOLD2, 'middle', 600);
    s += caption(100, 112, 'a known cost and a known profit, agreed in advance');
    return frame(s, SKY);
  });

  /* the parts of a professional email */
  A.addSpot('email-parts', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += r(24, 14, 152, 112, PAPER, 4) + boxO(24, 14, 152, 112, STONE3, 1.4);
    s += r(24, 14, 152, 16, NAVY, 0);
    s += stroke('M 32 22 h 44 M 84 22 h 24', '#dfe7ee', 2);
    var rows = [[40, 'subject', 0.6, GOLD], [54, 'greeting', 0.34, GREEN],
                [68, 'why you write', 0.84, GREEN], [82, 'detail', 0.76, GREEN],
                [96, 'next step', 0.54, GREEN], [112, 'close', 0.28, GREEN]];
    for (var i = 0; i < rows.length; i++) {
      s += stroke('M 36 ' + rows[i][0] + ' h ' + (128 * rows[i][2]).toFixed(1),
        STONE3, 2.2);
      s += c(31, rows[i][0], 2.2, rows[i][3]);
    }
    return frame(s, SKY);
  });

  /* a queue, for the service and throughput parts */
  A.addSpot('queue', function () {
    var s = r(0, 0, 200, 140, SKY);
    s += counter(34);
    s += person(40, 30, NAVY);
    var xs = [40, 70, 100, 130, 160];
    for (var i = 0; i < xs.length; i++) {
      s += person(xs[i], 104, i % 2 ? BLUE : INK);
    }
    s += dash('M 28 114 h 150', STONE3, 1.4, '5 4');
    s += caption(100, 132, 'every minute at the counter is five in the queue');
    return frame(s, SKY);
  });

})(window);
