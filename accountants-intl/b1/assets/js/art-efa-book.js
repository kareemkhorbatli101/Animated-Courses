/* ============================================================
   English for Accountants B1 International — art-efa-book.js

   THIS BOOK'S OWN THINGS. art-efa.js is the NGO-accounting library,
   ported: it draws the ledger, the journal, the receipt, the close.
   Most of it fits, because both courses are about money. What it has
   no picture for is what THIS book is actually about — the invoice,
   the petty cash voucher, the stock shelf, the reorder point, the
   payment run, the trial balance.

   Kept in a second file rather than spliced into the first, so the
   ported library stays a clean copy that can be diffed against its
   origin, and so a drawing added for this course is visibly this
   course's.

   The rule, carried over: a word gets a drawing of the THING, built
   from geometry — never a letter in a circle and never a borrowed
   icon. Where the word names an act rather than an object it is drawn
   as the act: a payment run is a queue of invoices leaving on one
   date, a variance is two bars and the gap between them.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EFA && w.EFA.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1a1d23', SLATE = '#24505c', OCHRE = '#b06c1a',
      PAPER = '#fdfbf6', LINE = '#9fb3bf', GREEN = '#2e7d52', RED = '#b3472f',
      GOLD = '#e3b04b';

  function ruled(x, y, wd, n, gap, col) {
    var s = '', i;
    for (i = 0; i < n; i++) {
      s += p('M ' + x + ' ' + (y + i * gap) + ' h ' + wd, 'none',
        ' stroke="' + (col || LINE) + '" stroke-width="4" stroke-linecap="round"');
    }
    return s;
  }
  function arrow(d, col, wd) {
    return p(d, 'none', ' stroke="' + (col || SLATE) + '" stroke-width="' + (wd || 5) +
      '" fill="none" stroke-linecap="round" marker-end="url(#efa-ah)"');
  }
  function coin(cx, cy, rr) {
    return c(cx, cy, rr, GOLD) + c(cx, cy, rr - 4, PAPER);
  }
  function head(cx, cy, rr) {
    return c(cx, cy, rr, '#e8b793') + c(cx, cy, rr, 'none',
      ' stroke="' + INK + '" stroke-width="3" fill="none"');
  }
  /* the arrowhead the arrows above point with */
  function defs() {
    return '<defs><marker id="efa-ah" viewBox="0 0 10 10" refX="8" refY="5" ' +
      'markerWidth="5" markerHeight="5" orient="auto-start-reverse">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" fill="' + OCHRE + '"/></marker></defs>';
  }

  /* invoice — a bill ASKING for money: the amount block and the due date */
  A.addSpot('invoice', function () {
    var s = defs() + r(44, 16, 112, 112, PAPER, 5);
    s += r(44, 16, 112, 22, SLATE, 5) + t(100, 32, 12, 'INVOICE', PAPER, 'middle', 800);
    s += ruled(58, 58, 60, 3, 12);
    s += r(112, 74, 34, 18, OCHRE, 3) + t(129, 88, 11, 'DUE', PAPER, 'middle', 800);
    s += p('M 58 104 h 84', 'none', ' stroke="' + INK + '" stroke-width="3"');
    s += t(100, 120, 14, 'EUR 450', INK, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* expense claim — a form with the receipt pinned to it */
  A.addSpot('expense-claim', function () {
    var s = r(30, 20, 100, 104, PAPER, 5) + ruled(44, 46, 60, 4, 16);
    s += r(112, 36, 56, 72, PAPER, 3);
    s += p('M 112 108 l 9 7 l 9 -7 l 9 7 l 9 -7 l 9 7 l 9 -7', PAPER);
    s += c(140, 34, 7, OCHRE);
    return frame(s, '#eef3f5');
  });

  /* source document — the original, with its copy behind it */
  A.addSpot('source-document', function () {
    var s = r(58, 28, 92, 96, '#e7eef2', 4);
    s += r(46, 18, 92, 96, PAPER, 4) + ruled(60, 44, 64, 4, 15);
    s += t(92, 112, 10, 'ORIGINAL', SLATE, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* discrepancy — two totals that do not agree */
  A.addSpot('discrepancy', function () {
    var s = r(28, 34, 62, 74, PAPER, 4) + r(110, 34, 62, 74, PAPER, 4);
    s += t(59, 60, 15, '8,400', INK, 'middle', 800);
    s += t(141, 60, 15, '8,970', INK, 'middle', 800);
    s += p('M 92 70 h 16', 'none', ' stroke="' + RED + '" stroke-width="5"');
    s += c(100, 98, 15, RED) + t(100, 104, 16, '!', PAPER, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* chart of accounts — numbered accounts, indented into a tree */
  A.addSpot('chart-of-accounts', function () {
    var s = r(30, 20, 140, 104, PAPER, 5), i;
    for (i = 0; i < 4; i++) {
      s += r(44 + (i % 2) * 14, 36 + i * 20, 26, 11, SLATE, 2);
      s += r(78 + (i % 2) * 14, 36 + i * 20, 70 - (i % 2) * 14, 11, LINE, 2);
    }
    return frame(s, '#eef3f5');
  });

  /* petty cash voucher — small, signed, and paid in coin */
  A.addSpot('petty-voucher', function () {
    var s = r(40, 30, 104, 76, PAPER, 4) + r(40, 30, 104, 18, OCHRE, 4);
    s += t(92, 44, 10, 'PETTY CASH', PAPER, 'middle', 800);
    s += ruled(54, 64, 52, 2, 13);
    s += p('M 54 96 q 10 -10 20 0 q 10 10 20 0', 'none',
      ' stroke="' + SLATE + '" stroke-width="3" fill="none"');
    s += coin(128, 92, 12);
    return frame(s, '#eef3f5');
  });

  /* stock — the shelf that stocktaking counts */
  A.addSpot('stock', function () {
    var s = '', i, j;
    for (j = 0; j < 3; j++) {
      s += p('M 30 ' + (50 + j * 30) + ' h 140', 'none',
        ' stroke="' + SLATE + '" stroke-width="5" stroke-linecap="round"');
      for (i = 0; i < 4 - j; i++) {
        s += r(38 + i * 32, 24 + j * 30, 24, 24, (i + j) % 2 ? OCHRE : PAPER, 2);
      }
    }
    return frame(s, '#eef3f5');
  });

  /* reorder point — the level the line is drawn at */
  A.addSpot('reorder-point', function () {
    var s = r(56, 20, 88, 108, PAPER, 5);
    s += r(60, 80, 80, 44, '#cfe0e8', 3);
    s += p('M 44 80 h 112', 'none', ' stroke="' + RED +
      '" stroke-width="5" stroke-dasharray="10 7" stroke-linecap="round"');
    s += t(100, 114, 11, 'REORDER', SLATE, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* obsolete — still here, no longer wanted */
  A.addSpot('obsolete', function () {
    var s = r(44, 36, 112, 72, '#d9dde2', 5) + r(58, 50, 84, 34, '#aeb6bd', 3);
    s += p('M 40 30 L 160 114 M 160 30 L 40 114', 'none',
      ' stroke="' + RED + '" stroke-width="7" stroke-linecap="round"');
    return frame(s, '#eef3f5');
  });

  /* variance — two bars, and the gap, which is the whole word */
  A.addSpot('variance', function () {
    var s = defs() + r(46, 48, 36, 74, LINE, 3) + r(110, 24, 36, 98, OCHRE, 3);
    s += p('M 64 42 v -12 M 128 18 v -4', 'none',
      ' stroke="' + INK + '" stroke-width="3"');
    s += p('M 64 32 h 64', 'none', ' stroke="' + RED + '" stroke-width="4"');
    s += t(96, 24, 11, 'GAP', RED, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* forecast — the part of the line that has not happened yet */
  A.addSpot('forecast', function () {
    var s = p('M 30 108 L 62 86 L 94 94 L 126 62', 'none',
      ' stroke="' + SLATE + '" stroke-width="6" fill="none" stroke-linecap="round"');
    s += p('M 126 62 L 162 34', 'none', ' stroke="' + OCHRE +
      '" stroke-width="6" fill="none" stroke-dasharray="9 8" stroke-linecap="round"');
    s += c(126, 62, 7, PAPER, ' stroke="' + SLATE + '" stroke-width="4"');
    return frame(s, '#eef3f5');
  });

  /* payment run — a queue of invoices leaving together, on one date */
  A.addSpot('payment-run', function () {
    var s = defs(), i;
    for (i = 0; i < 3; i++) { s += r(24 + i * 18, 40 + i * 6, 50, 62, PAPER, 3); }
    s += arrow('M 92 72 h 32', OCHRE, 6);
    s += c(152, 72, 24, SLATE) + t(152, 78, 15, 'EUR', PAPER, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* debtor — the one who owes, and the clock that is running */
  A.addSpot('debtor', function () {
    var s = head(72, 60, 24) + r(48, 90, 48, 36, SLATE, 6);
    s += c(142, 84, 26, PAPER, ' stroke="' + RED + '" stroke-width="5"');
    s += p('M 142 84 v -14 M 142 84 l 12 7', 'none',
      ' stroke="' + RED + '" stroke-width="4" stroke-linecap="round"');
    return frame(s, '#eef3f5');
  });

  /* credit note — an invoice going the other way */
  A.addSpot('credit-note', function () {
    var s = defs() + r(44, 22, 112, 100, PAPER, 5) + r(44, 22, 112, 20, GREEN, 5);
    s += t(100, 37, 10, 'CREDIT NOTE', PAPER, 'middle', 800);
    s += ruled(58, 60, 84, 2, 14);
    s += arrow('M 134 102 h -60', GREEN, 5);
    return frame(s, '#eef3f5');
  });

  /* trial balance — two columns that must come to the same number */
  A.addSpot('trial-balance', function () {
    var s = r(30, 18, 64, 84, PAPER, 4) + r(106, 18, 64, 84, PAPER, 4);
    s += ruled(42, 40, 40, 3, 14) + ruled(118, 40, 40, 3, 14);
    s += p('M 42 92 h 40 M 118 92 h 40', 'none', ' stroke="' + INK + '" stroke-width="3"');
    s += c(100, 116, 14, GREEN);
    s += p('M 93 116 l 5 6 l 10 -12', 'none',
      ' stroke="' + PAPER + '" stroke-width="4" fill="none" stroke-linecap="round"');
    return frame(s, '#eef3f5');
  });

  /* closing the books — the last entry, and the cover coming down */
  A.addSpot('closing', function () {
    var s = defs() + r(40, 46, 120, 70, PAPER, 4) + r(40, 46, 12, 70, SLATE, 4);
    s += ruled(62, 64, 84, 3, 15);
    s += p('M 44 42 q 58 -24 116 0', 'none',
      ' stroke="' + OCHRE + '" stroke-width="6" fill="none" stroke-linecap="round"');
    s += arrow('M 100 16 v 18', OCHRE, 5);
    return frame(s, '#eef3f5');
  });

  /* certification — the qualification, and its seal */
  A.addSpot('certification', function () {
    var s = r(34, 24, 132, 84, PAPER, 4) + ruled(50, 44, 76, 3, 13);
    s += c(144, 92, 16, GOLD) + c(144, 92, 9, PAPER);
    s += p('M 136 104 l -6 20 l 14 -8 l 14 8 l -6 -20', GOLD);
    return frame(s, '#eef3f5');
  });

  /* migration — the same data, moving house */
  A.addSpot('migration', function () {
    var s = defs() + r(26, 44, 54, 62, '#aeb6bd', 5) + r(120, 44, 54, 62, SLATE, 5);
    s += arrow('M 88 74 h 24', OCHRE, 6);
    s += ruled(36, 62, 34, 3, 13, PAPER) + ruled(130, 62, 34, 3, 13, PAPER);
    return frame(s, '#eef3f5');
  });

  /* reported speech — what one person said, carried to another */
  A.addSpot('reporting', function () {
    var s = defs() + r(22, 32, 68, 44, PAPER, 10);
    s += p('M 40 76 l 2 16 l 14 -16', PAPER);
    s += r(110, 54, 68, 44, SLATE, 10);
    s += p('M 160 98 l -2 16 l -14 -16', SLATE);
    s += arrow('M 94 66 h 12', OCHRE, 5);
    return frame(s, '#eef3f5');
  });


  /* ============================================================
     THE STAGES.

     The engine ships five and every one belongs to another course: the
     office wall reads CERTIFIED SECURITY MENTOR and the desk placard
     JOSEPH WESTON - CYBER CAREER MENTOR; the newsroom is THE CITY
     HERALD. A learner of THIS book would see a cyber-security mentor's
     nameplate behind Marta while she explains the filing.

     So this course brings its own two: the Krakow shared service centre
     where most of the book happens, and the briefing room where the
     monthly numbers are reported. Same three-layer contract as the
     engine's - back, mid, fore - so scene.js stands the actors between
     the middle and the foreground exactly as before.
     ============================================================ */
  var SV = D.svg;

  function wall(s) {
    s += r(0, 0, 1600, 900, '#e7ded3');
    s += r(0, 0, 1600, 600, '#efe7dc');
    s += r(0, 592, 1600, 18, '#cbbda9');
    return s;
  }
  function window16(x) {
    var s = r(x, 120, 520, 330, '#a9d8ea', 8);
    s += r(x, 120, 520, 330, 'none', 8).replace('fill="none"',
      'fill="none" stroke="#9c8f80" stroke-width="12"');
    s += p('M ' + (x + 260) + ' 120 v 330', 'none',
      ' stroke="#9c8f80" stroke-width="10"');
    /* the rooftops of a European city, which is where the book puts us */
    s += r(x + 30, 330, 60, 120, '#7fa8bd') + r(x + 110, 300, 70, 150, '#6d94a8');
    s += r(x + 300, 320, 80, 130, '#7fa8bd');
    s += p('M ' + (x + 190) + ' 330 l 40 -46 l 40 46 z', '#8aa9bb');
    return s;
  }

  A.addSet('accounts', {
    back: function () {
      var s = wall('');
      s += window16(960);
      /* the wall planner: twelve months, the closed ones ticked */
      s += r(150, 130, 430, 330, PAPER, 10);
      s += r(150, 130, 430, 54, SLATE, 10);
      s += t(365, 167, 26, 'NORTHWIND GROUP', PAPER, 'middle', 800);
      s += t(365, 212, 19, 'Kraków · shared service centre', '#5b6470', 'middle', 600);
      var i, mo = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'];
      for (i = 0; i < 8; i++) {
        var cx = 190 + (i % 4) * 100, cy = 250 + Math.floor(i / 4) * 92;
        s += r(cx, cy, 82, 70, i < 5 ? '#dff0f3' : '#f3efe8', 6);
        s += t(cx + 41, cy + 28, 16, mo[i], '#3b434e', 'middle', 700);
        if (i < 5) {
          s += p('M ' + (cx + 26) + ' ' + (cy + 46) + ' l 10 12 l 22 -26, ', 'none',
            ' stroke="' + GREEN + '" stroke-width="6" fill="none" stroke-linecap="round"');
        }
      }
      /* the ledger shelf */
      s += r(640, 150, 250, 180, '#efe7dc', 6);
      for (i = 0; i < 4; i++) {
        s += r(656 + i * 58, 166, 46, 148, i % 2 ? SLATE : OCHRE, 4);
        s += r(656 + i * 58, 196, 46, 12, PAPER);
      }
      return SV('0 0 1600 900', s);
    },
    mid: function () {
      var s = r(180, 650, 1240, 28, '#8b5e3c', 8);
      s += r(220, 678, 34, 180, '#6f492d') + r(1346, 678, 34, 180, '#6f492d');
      return SV('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(-20, 700, 1640, 200, '#a9714a');
      s += r(-20, 690, 1640, 26, '#c08a5e', 8);
      /* an invoice tray, a ledger and a coffee - the desk of this book */
      s += p('M 150 700 h 250 l 18 -46 h -250 Z', '#e3b04b');
      s += p('M 168 654 h 232 l -10 -14 h -212 Z', PAPER);
      s += r(470, 646, 150, 54, PAPER, 4) + r(470, 646, 16, 54, SLATE, 4);
      s += r(1180, 640, 120, 60, '#f4efe6', 6);
      s += t(1240, 678, 17, 'LEDGER', SLATE, 'middle', 800);
      s += c(1390, 672, 26, PAPER) + c(1390, 672, 18, '#6f492d');
      return SV('0 0 1600 900', s);
    }
  });

  A.addSet('boardroom', {
    back: function () {
      var s = wall('');
      s += window16(60);
      /* the month's numbers, on the wall where they are argued about */
      s += r(700, 120, 780, 400, PAPER, 10);
      s += r(700, 120, 780, 56, SLATE, 10);
      s += t(1090, 158, 26, 'MONTHLY PERFORMANCE', PAPER, 'middle', 800);
      var bars = [140, 210, 170, 300, 240], i;
      for (i = 0; i < 5; i++) {
        s += r(760 + i * 140, 470 - bars[i], 86, bars[i],
          i === 3 ? OCHRE : '#9fb3bf', 5);
      }
      s += p('M 740 470 h 700', 'none', ' stroke="' + INK + '" stroke-width="6"');
      s += p('M 760 330 h 700', 'none',
        ' stroke="' + RED + '" stroke-width="5" stroke-dasharray="14 10"');
      s += t(1450, 324, 17, 'budget', RED, 'end', 700);
      return SV('0 0 1600 900', s);
    },
    mid: function () {
      var s = r(140, 640, 1320, 40, '#6f492d', 10);
      s += r(160, 680, 40, 180, '#5c3c24') + r(1400, 680, 40, 180, '#5c3c24');
      return SV('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(-20, 700, 1640, 200, '#8d5f3e');
      s += r(-20, 690, 1640, 26, '#a97a52', 8);
      s += r(300, 638, 170, 62, PAPER, 5) + ruled(320, 658, 130, 2, 16);
      s += r(980, 644, 150, 56, '#f4efe6', 5);
      s += t(1055, 680, 16, 'Q3 REPORT', SLATE, 'middle', 800);
      return SV('0 0 1600 900', s);
    }
  });

  w.EFA.bookArtReady = true;
}(window));
