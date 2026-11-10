/* ============================================================
   English for Accountants B1 International — art-efa.js

   This course's own drawings. Ported from the NGO-accounting course, whose library is 25
   spots about money, of which this book uses most. The NGO-only ones are
   gone and this book's own things are added below: the invoice, the petty
   cash voucher, the stock shelf, the trial balance, the payment run.

   Registered through A.addSpot / A.addFigure rather than by editing
   art.js, which stays a copy of the engine.

   The rule these follow: a word gets a drawing of the THING, in this
   course's own world, built from geometry — never a letter in a circle
   and never a borrowed icon. A term whose picture would only be a
   label is drawn as the act it names instead (reconcile = two columns
   and a tick; posting = an entry moving between two books).
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EFA && w.EFA.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ---- this course's palette ---- */
  var INK = '#1a1d23', SLATE = '#24505c', OCHRE = '#b06c1a',
      PAPER = '#fdfbf6', LINE = '#9fb3bf', GREEN = '#2e7d52', RED = '#b3472f',
      GOLD = '#e3b04b', SKIN = '#e8b793', SKIN2 = '#8c6a52';

  /* ---- small shared pieces ---- */
  function book(x, y, wd, h, spine, cover) {        /* a closed book, spine left */
    return r(x, y, wd, h, cover || PAPER, 4) +
      r(x, y, 11, h, spine || SLATE, 4) +
      p('M ' + (x + 20) + ' ' + (y + 12) + ' h ' + (wd - 32), 'none',
        ' stroke="' + LINE + '" stroke-width="4" stroke-linecap="round"');
  }
  function ruled(x, y, wd, n, gap, col) {           /* n ruled lines */
    var s = '', i;
    for (i = 0; i < n; i++) {
      s += p('M ' + x + ' ' + (y + i * gap) + ' h ' + wd, 'none',
        ' stroke="' + (col || LINE) + '" stroke-width="4" stroke-linecap="round"');
    }
    return s;
  }
  function coin(cx, cy, rr) {
    return c(cx, cy, rr, GOLD) + c(cx, cy, rr - 3.5, '#f1c76b') +
      t(cx, cy + rr * 0.42, rr * 1.15, '$', '#8a6520', 'middle', 800);
  }
  function note(x, y, wd, h) {                      /* a banknote */
    return r(x, y, wd, h, '#cfe3cf', 3) + r(x + 3, y + 3, wd - 6, h - 6, '#b9d6ba', 2) +
      c(x + wd / 2, y + h / 2, h * 0.28, '#8fbd94');
  }
  function head(cx, cy, rr) {
    return c(cx, cy, rr, SKIN) +
      p('M ' + (cx - rr * 0.6) + ' ' + (cy - rr * 0.28) + ' q ' + (rr * 0.3) + ' -' + (rr * 0.28) + ' ' + (rr * 0.56) + ' -0.4 ' +
        'M ' + (cx + rr * 0.06) + ' ' + (cy - rr * 0.3) + ' q ' + (rr * 0.3) + ' -' + (rr * 0.24) + ' ' + (rr * 0.56) + ' 0.6', 'none',
        ' stroke="' + SKIN2 + '" stroke-width="3" stroke-linecap="round"') +
      c(cx - rr * 0.34, cy - rr * 0.04, 3.2, INK) + c(cx + rr * 0.34, cy - rr * 0.04, 3.2, INK) +
      p('M ' + (cx - rr * 0.3) + ' ' + (cy + rr * 0.42) + ' q ' + (rr * 0.3) + ' ' + (rr * 0.26) + ' ' + (rr * 0.6) + ' 0', 'none',
        ' stroke="#8c3b37" stroke-width="3.2" stroke-linecap="round"');
  }
  function tick(x, y, s, col) {
    return p('M ' + x + ' ' + y + ' l ' + (s * 0.36) + ' ' + (s * 0.38) + ' L ' + (x + s) + ' ' + (y - s * 0.52),
      'none', ' stroke="' + (col || GREEN) + '" stroke-width="' + (s * 0.26) + '" stroke-linecap="round" stroke-linejoin="round"');
  }
  function arrow(d, col, wd) {
    return p(d, 'none', ' stroke="' + (col || SLATE) + '" stroke-width="' + (wd || 5) +
      '" stroke-linecap="round" marker-end="url(#eafm-ah)"');
  }
  /* one arrowhead marker, injected once by the first drawing that needs it */
  function defs() {
    return '<defs><marker id="eafm-ah" viewBox="0 0 10 10" refX="8" refY="5" ' +
      'markerWidth="5" markerHeight="5" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 9 5 L 0 9 z" fill="' + SLATE + '"/></marker></defs>';
  }

  /* ============================================================
     UNIT 1 vocabulary
     ============================================================ */

  /* finance officer — a person at the accounts, not a generic avatar */
  A.addSpot('accountant', function () {
    var s = r(22, 86, 156, 40, '#d9c2a3', 5);                 /* desk */
    s += book(34, 62, 60, 30, SLATE);
    s += ruled(44, 74, 40, 2, 9);
    s += head(132, 52, 21) + p('M 132 76 q -26 4 -30 24 h 60 q -4 -20 -30 -24', SLATE);
    s += p('M 118 84 L 100 74', 'none', ' stroke="' + SKIN + '" stroke-width="8" stroke-linecap="round"');
    s += p('M 104 78 l 16 -14', 'none', ' stroke="' + OCHRE + '" stroke-width="5" stroke-linecap="round"');
    return frame(s, '#e8f1f5');
  });

  /* ledger — the main book, thick, holding every account */
  A.addSpot('ledger', function () {
    var s = r(30, 30, 140, 86, '#c9d6dd', 6);                 /* the block of pages behind */
    s += book(26, 24, 148, 92, SLATE, PAPER);
    s += ruled(50, 46, 108, 5, 14);
    s += p('M 104 30 v 80', 'none', ' stroke="' + LINE + '" stroke-width="3"');
    s += t(78, 40, 12, 'accounts', SLATE, 'middle', 700);
    return frame(s, '#eef3f5');
  });

  /* transaction — one piece of business: money moving once, between two parties */
  A.addSpot('transaction', function () {
    var s = defs();
    s += r(16, 44, 54, 52, PAPER, 5) + t(43, 74, 13, 'payer', SLATE, 'middle', 700);
    s += r(130, 44, 54, 52, PAPER, 5) + t(157, 74, 13, 'payee', SLATE, 'middle', 700);
    s += coin(100, 54, 15);
    s += arrow('M 74 70 H 124', SLATE, 5);
    s += t(100, 108, 12, 'one payment, once', OCHRE, 'middle', 700);
    return frame(s, '#faf5ec');
  });

  /* account — one record for one purpose, so: a labelled page with its own running total */
  A.addSpot('account', function () {
    var s = r(34, 20, 132, 100, PAPER, 5);
    s += r(34, 20, 132, 22, SLATE, 5) + t(100, 36, 13, 'FUEL', '#fff', 'middle', 800);
    s += ruled(48, 58, 70, 3, 15);
    s += p('M 128 50 v 56', 'none', ' stroke="' + LINE + '" stroke-width="3"');
    s += t(147, 63, 12, '80', INK, 'middle', 700) + t(147, 78, 12, '40', INK, 'middle', 700);
    s += p('M 134 86 h 26', 'none', ' stroke="' + INK + '" stroke-width="3"');
    s += t(147, 101, 13, '120', GREEN, 'middle', 800);
    return frame(s, '#e8f1f5');
  });

  /* bookkeeping — the DAILY act: a hand writing one more line, today's date on the page */
  A.addSpot('bookkeeping', function () {
    var s = book(24, 22, 152, 96, SLATE, PAPER);
    /* the past days are quieter than today, but still readable: LINE on cream
       came out almost invisible on the proof sheet */
    s += t(46, 42, 12, 'Mon', SLATE, 'start', 700) + t(46, 60, 12, 'Tue', SLATE, 'start', 700) +
         t(46, 78, 12, 'Wed', OCHRE, 'start', 800);
    s += ruled(78, 38, 76, 2, 18);
    s += p('M 78 74 h 40', 'none', ' stroke="' + OCHRE + '" stroke-width="4" stroke-linecap="round"');
    s += p('M 118 86 l 44 -44 l 14 14 l -44 44 Z', GOLD);
    s += p('M 118 86 l 9 -9 l 5 5 Z', INK);
    return frame(s, '#faf5ec');
  });

  /* reconcile — two records set side by side and found to agree */
  A.addSpot('reconcile', function () {
    var s = r(18, 24, 70, 92, PAPER, 5) + r(112, 24, 70, 92, PAPER, 5);
    s += t(53, 42, 12, 'cash', SLATE, 'middle', 700) + t(147, 42, 12, 'bank', SLATE, 'middle', 700);
    var i, v = ['120', '80', '40'];
    for (i = 0; i < 3; i++) {
      s += t(53, 62 + i * 18, 13, v[i], INK, 'middle', 700);
      s += t(147, 62 + i * 18, 13, v[i], INK, 'middle', 700);
    }
    s += tick(92, 70, 16, GREEN);
    return frame(s, '#eef3f5');
  });

  /* cash — notes and coins, the physical thing */
  A.addSpot('cash', function () {
    var s = note(26, 52, 86, 44) + note(40, 40, 86, 44);
    s += coin(146, 84, 19) + coin(128, 60, 15);
    return frame(s, '#faf5ec');
  });

  /* balance — what is in the account AT ONE MOMENT: a scale come to rest */
  A.addSpot('balance', function () {
    var s = p('M 100 30 v 62', 'none', ' stroke="' + SLATE + '" stroke-width="6" stroke-linecap="round"');
    s += p('M 44 44 H 156', 'none', ' stroke="' + SLATE + '" stroke-width="6" stroke-linecap="round"');
    s += p('M 44 44 l 0 14 M 156 44 l 0 14', 'none', ' stroke="' + LINE + '" stroke-width="3"');
    s += e(44, 64, 20, 7, '#cfe3cf') + e(156, 64, 20, 7, '#cfe3cf');
    s += coin(44, 58, 9) + coin(156, 58, 9);
    s += p('M 76 92 h 48 l 10 22 H 66 Z', SLATE);
    s += t(100, 128, 12, 'equal, right now', OCHRE, 'middle', 700);
    return frame(s, '#e8f1f5');
  });

  /* entry — ONE line in the accounts, and the course's point: it has two sides */
  A.addSpot('entry', function () {
    var s = r(22, 34, 156, 72, PAPER, 5);
    s += p('M 100 34 v 72', 'none', ' stroke="' + LINE + '" stroke-width="3"');
    s += p('M 22 58 h 156', 'none', ' stroke="' + LINE + '" stroke-width="3"');
    s += t(61, 51, 12, 'Dr', RED, 'middle', 800) + t(139, 51, 12, 'Cr', GREEN, 'middle', 800);
    s += t(61, 86, 16, '80', INK, 'middle', 800) + t(139, 86, 16, '80', INK, 'middle', 800);
    s += t(100, 124, 12, 'one line, two sides', OCHRE, 'middle', 700);
    return frame(s, '#faf5ec');
  });

  /* cash box — where the notes and coins actually live */
  A.addSpot('cash-box', function () {
    var s = r(30, 56, 140, 58, '#8c6239', 6) + r(30, 44, 140, 16, '#a9774a', 5);
    s += r(86, 64, 28, 20, GOLD, 3) + c(100, 74, 4, '#8a6520');
    s += note(44, 30, 50, 22);
    s += coin(150, 34, 12);
    return frame(s, '#eef3f5');
  });

  /* report — a short document that goes to somebody */
  A.addSpot('report', function () {
    var s = r(44, 18, 112, 104, PAPER, 5);
    s += r(58, 32, 66, 10, SLATE, 3);
    s += ruled(58, 56, 84, 3, 13);
    s += p('M 58 100 h 42', 'none', ' stroke="' + OCHRE + '" stroke-width="5" stroke-linecap="round"');
    s += p('M 124 96 l 20 -20 l 12 12 l -20 20 Z', GOLD);
    return frame(s, '#e8f1f5');
  });

  /* budget — money planned forward, in columns, before it is spent */
  A.addSpot('budget', function () {
    var s = r(22, 20, 156, 100, PAPER, 5);
    var h = [34, 54, 42, 68], i;
    for (i = 0; i < 4; i++) {
      s += r(40 + i * 32, 100 - h[i], 20, h[i], i === 3 ? OCHRE : SLATE, 3);
    }
    s += p('M 30 102 h 140', 'none', ' stroke="' + INK + '" stroke-width="3"');
    s += t(100, 36, 12, 'plan', LINE, 'middle', 700);
    return frame(s, '#faf5ec');
  });

  /* donor — the outside reader who gives the money and asks for proof */
  A.addSpot('auditor', function () {
    var s = defs();
    s += head(56, 50, 20) + p('M 56 73 q -24 4 -28 22 h 56 q -4 -18 -28 -22', '#4a6b8a');
    s += r(118, 44, 62, 56, PAPER, 5) + ruled(130, 60, 38, 3, 12);
    s += arrow('M 84 62 H 112', SLATE, 5);
    s += coin(100, 100, 11);
    return frame(s, '#eef3f5');
  });

  /* manager — the inside reader, asking about his own project */
  A.addSpot('manager', function () {
    var s = r(20, 88, 160, 34, '#d9c2a3', 5);
    s += head(66, 52, 20) + p('M 66 75 q -24 4 -28 20 h 56 q -4 -16 -28 -20', OCHRE);
    s += head(136, 56, 17) + p('M 136 76 q -20 4 -24 16 h 48 q -4 -12 -24 -16', SLATE);
    s += r(92, 60, 24, 30, PAPER, 3) + ruled(97, 70, 14, 2, 9);
    return frame(s, '#faf5ec');
  });

  /* ============================================================
     UNIT 2 vocabulary
     ============================================================ */

  /* journal — the FIRST book, in date order */
  A.addSpot('journal', function () {
    var s = book(26, 22, 148, 96, OCHRE, PAPER);
    s += t(48, 44, 11, '03/11', LINE, 'start', 700) +
         t(48, 64, 11, '04/11', LINE, 'start', 700) +
         t(48, 84, 11, '05/11', LINE, 'start', 700);
    s += ruled(86, 40, 70, 3, 20);
    s += t(100, 110, 11, 'in date order', OCHRE, 'middle', 700);
    return frame(s, '#faf5ec');
  });

  /* debit — the LEFT side, and nothing else */
  A.addSpot('debit', function () {
    var s = r(26, 26, 148, 86, PAPER, 5);
    s += p('M 100 26 v 86', 'none', ' stroke="' + INK + '" stroke-width="4"');
    s += p('M 26 50 h 148', 'none', ' stroke="' + INK + '" stroke-width="4"');
    s += r(26, 50, 74, 62, '#f6dcd4', 0);
    s += t(63, 43, 13, 'debit', RED, 'middle', 800) + t(137, 43, 13, 'credit', LINE, 'middle', 700);
    s += t(63, 84, 18, '80', RED, 'middle', 800);
    s += t(63, 104, 11, 'LEFT', RED, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* credit — the RIGHT side; deliberately the mirror of debit, same geometry */
  A.addSpot('credit', function () {
    var s = r(26, 26, 148, 86, PAPER, 5);
    s += p('M 100 26 v 86', 'none', ' stroke="' + INK + '" stroke-width="4"');
    s += p('M 26 50 h 148', 'none', ' stroke="' + INK + '" stroke-width="4"');
    s += r(100, 50, 74, 62, '#d7e8da', 0);
    s += t(63, 43, 13, 'debit', LINE, 'middle', 700) + t(137, 43, 13, 'credit', GREEN, 'middle', 800);
    s += t(137, 84, 18, '80', GREEN, 'middle', 800);
    s += t(137, 104, 11, 'RIGHT', GREEN, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* expense — money leaving, and what it bought */
  A.addSpot('expense', function () {
    var s = defs();
    s += r(20, 46, 50, 48, '#8c6239', 5) + t(45, 76, 12, 'office', '#fff', 'middle', 700);
    s += coin(160, 70, 16);
    s += arrow('M 142 70 H 84', RED, 5);
    s += t(100, 112, 12, 'money goes out', RED, 'middle', 700);
    return frame(s, '#f9efec');
  });

  /* income — money arriving; the mirror of expense */
  A.addSpot('income', function () {
    var s = defs();
    s += r(130, 46, 50, 48, SLATE, 5) + t(155, 76, 12, 'us', '#fff', 'middle', 700);
    s += coin(40, 70, 16);
    s += arrow('M 58 70 H 116', GREEN, 5);
    s += t(100, 112, 12, 'money comes in', GREEN, 'middle', 700);
    return frame(s, '#eef6ef');
  });

  /* voucher — the paper that APPROVES, so the signature is the subject */
  A.addSpot('voucher', function () {
    var s = r(36, 18, 128, 104, PAPER, 5);
    s += r(50, 30, 80, 10, SLATE, 3);
    s += ruled(50, 56, 72, 2, 13);
    s += t(50, 92, 11, 'approved', OCHRE, 'start', 700);
    s += p('M 96 100 q 12 -14 22 -2 q 8 10 20 -6', 'none',
      ' stroke="' + SLATE + '" stroke-width="3.6" stroke-linecap="round"');
    s += c(150, 44, 16, 'rgba(179,71,47,.16)') +
         p('M 150 28 a 16 16 0 1 1 -0.1 0', 'none', ' stroke="' + RED + '" stroke-width="2.6"') +
         t(150, 48, 9, 'OK', RED, 'middle', 800);
    return frame(s, '#faf5ec');
  });

  /* receipt — the paper that PROVES a payment happened: torn edge, a total */
  A.addSpot('receipt', function () {
    var s = r(56, 14, 88, 100, PAPER, 3);
    s += p('M 56 114 l 11 8 l 11 -8 l 11 8 l 11 -8 l 11 8 l 11 -8 l 11 8 l 11 -8', PAPER);
    s += t(100, 36, 12, 'FUEL', SLATE, 'middle', 800);
    s += ruled(68, 52, 64, 3, 12);
    s += p('M 68 92 h 64', 'none', ' stroke="' + INK + '" stroke-width="3"');
    s += t(100, 108, 15, '$80', INK, 'middle', 800);
    return frame(s, '#eef3f5');
  });

  /* month-end — the last day, and the books closed */
  A.addSpot('month-end', function () {
    var s = r(26, 24, 148, 96, PAPER, 6) + r(26, 24, 148, 20, RED, 6);
    var i, row, col;
    for (i = 0; i < 20; i++) {
      row = (i / 5) | 0; col = i % 5;
      s += r(40 + col * 26, 52 + row * 16, 18, 11, '#dbe6ea', 2);
    }
    s += r(40 + 4 * 26, 52 + 3 * 16, 18, 11, OCHRE, 2);
    s += tick(132, 104, 18, GREEN);
    return frame(s, '#faf5ec');
  });

  /* posting — the ACT: one entry carried from the journal to the ledger */
  A.addSpot('posting', function () {
    var s = defs();
    s += book(14, 52, 64, 60, OCHRE, PAPER) + ruled(30, 70, 40, 2, 14);
    s += book(122, 52, 64, 60, SLATE, PAPER) + ruled(138, 70, 40, 2, 14);
    s += r(84, 24, 32, 22, '#fdf0d2', 3) +
         p('M 90 35 h 20', 'none', ' stroke="' + OCHRE + '" stroke-width="3.4" stroke-linecap="round"');
    s += arrow('M 60 42 Q 100 8 140 42', SLATE, 5);
    s += t(46, 126, 11, 'journal', OCHRE, 'middle', 700) +
         t(154, 126, 11, 'ledger', SLATE, 'middle', 700);
    return frame(s, '#eef3f5');
  });

  /* statement — the totals, income against expense, at the end */
  A.addSpot('statement', function () {
    var s = r(30, 16, 140, 106, PAPER, 5);
    s += r(44, 28, 74, 9, SLATE, 3);
    s += t(48, 60, 12, 'income', GREEN, 'start', 700) + t(152, 60, 12, '12,000', INK, 'end', 700);
    s += t(48, 80, 12, 'expense', RED, 'start', 700) + t(152, 80, 12, '9,400', INK, 'end', 700);
    s += p('M 48 90 h 104', 'none', ' stroke="' + INK + '" stroke-width="3"');
    s += t(48, 110, 13, 'left', SLATE, 'start', 800) + t(152, 110, 13, '2,600', GREEN, 'end', 800);
    return frame(s, '#faf5ec');
  });

  /* the two T-accounts, equal — Unit 2's whole idea in one picture */
  A.addSpot('t-accounts', function () {
    function tacc(x, label, dr, cr) {
      var s = t(x + 46, 34, 12, label, SLATE, 'middle', 800);
      s += p('M ' + x + ' 42 h 92 M ' + (x + 46) + ' 42 v 56', 'none',
        ' stroke="' + INK + '" stroke-width="3.6"');
      s += t(x + 23, 66, 14, dr, dr ? RED : LINE, 'middle', 800);
      s += t(x + 69, 66, 14, cr, cr ? GREEN : LINE, 'middle', 800);
      return s;
    }
    var s = tacc(6, 'fuel', '80', '') + tacc(102, 'cash', '', '80');
    s += t(100, 122, 11, 'the two sides are equal', OCHRE, 'middle', 700);
    return frame(s, '#eef3f5');
  });

  /* ============================================================
     The two book figures.

     Static here, and labelled, because the book's own PNG is the
     specification and a flat picture cannot be pressed or read aloud.
     A pressable version is a separate piece of work; see RESIDUALS.
     ============================================================ */

  /* Figure 1.1 — the finance cycle at HRI: five stages, and it returns */
  A.addFigure('finance-cycle', function () {
    var S = ['records the\\ntransactions', 'reconciles the\\ncash and bank',
             'reports to managers\\nand donors', 'helps to plan\\nthe budget',
             'advises on\\ndecisions'];
    var cx = 300, cy = 190, rad = 126, i, a, x, y, s = '';
    s += '<defs><marker id="eafm-cyc" viewBox="0 0 10 10" refX="8" refY="5" ' +
      'markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 9 5 L 0 9 z" fill="' + SLATE + '"/></marker></defs>';
    s += r(0, 0, 600, 380, '#f4f8fa', 14);
    s += t(300, 30, 19, 'Figure 1.1 · The finance cycle', SLATE, 'middle', 800);
    /* the ring */
    for (i = 0; i < 5; i++) {
      a = -Math.PI / 2 + i * 2 * Math.PI / 5;
      var a2 = -Math.PI / 2 + (i + 0.72) * 2 * Math.PI / 5;
      s += p('M ' + (cx + rad * Math.cos(a + 0.28)).toFixed(1) + ' ' + (cy + rad * Math.sin(a + 0.28)).toFixed(1) +
        ' A ' + rad + ' ' + rad + ' 0 0 1 ' +
        (cx + rad * Math.cos(a2)).toFixed(1) + ' ' + (cy + rad * Math.sin(a2)).toFixed(1),
        'none', ' stroke="' + LINE + '" stroke-width="5" marker-end="url(#eafm-cyc)"');
    }
    /* The label goes OUTWARD along its own spoke, not underneath the circle.
       Underneath put stage 5's label across the ring and up against the centre
       text; outward, each label sits in its own empty sector. */
    for (i = 0; i < 5; i++) {
      a = -Math.PI / 2 + i * 2 * Math.PI / 5;
      x = cx + rad * Math.cos(a); y = cy + rad * Math.sin(a);
      s += c(x, y, 36, i === 0 ? OCHRE : SLATE) +
        t(x, y + 6, 19, String(i + 1), '#fff', 'middle', 800);
      var ls = S[i].split('\\n'), k, lx, ly, anchor;
      if (i === 0) {
        /* the top stage has the title above it, so outward would put its label
           off the top edge and across the heading. It goes INWARD instead, into
           the gap between the circle and the centre caption. */
        lx = x; ly = y + 54; anchor = 'middle';
      } else {
        lx = cx + (rad + 56) * Math.cos(a);
        ly = cy + (rad + 56) * Math.sin(a) - (ls.length - 1) * 7 + 4;
        anchor = Math.abs(Math.cos(a)) < 0.25 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
        if (anchor === 'start') lx -= 22; else if (anchor === 'end') lx += 22;
      }
      for (k = 0; k < ls.length; k++) {
        s += t(lx, ly + k * 15, 12.5, ls[k], INK, anchor, 600);
      }
    }
    s += t(cx, cy - 6, 15, 'financial', SLATE, 'middle', 800) +
         t(cx, cy + 13, 15, 'management', SLATE, 'middle', 800) +
         t(cx, cy + 34, 11, 'then it starts again', OCHRE, 'middle', 700);
    return D.svgFit('0 0 600 380', s);
  });

  /* Figure 2.1 — one transaction, from receipt to ledger */
  A.addFigure('transaction-flow', function () {
    var s = '<defs><marker id="eafm-fl" viewBox="0 0 10 10" refX="8" refY="5" ' +
      'markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 9 5 L 0 9 z" fill="' + SLATE + '"/></marker></defs>';
    s += r(0, 0, 640, 380, '#fbf7ef', 14);
    s += t(320, 30, 19, 'Figure 2.1 · One transaction, from receipt to ledger',
      SLATE, 'middle', 800);

    /* 1 the source document */
    s += r(28, 62, 140, 150, PAPER, 6) + t(98, 86, 13, 'SOURCE DOCUMENT', OCHRE, 'middle', 800);
    s += t(98, 112, 12, 'receipt', INK, 'middle', 700);
    s += t(98, 136, 12, 'office supplies', INK, 'middle', 600);
    s += t(98, 168, 24, '$500', INK, 'middle', 800);
    s += c(98, 192, 11, OCHRE) + t(98, 196, 12, '1', '#fff', 'middle', 800);

    /* 2 the journal entry */
    s += r(214, 62, 196, 150, PAPER, 6) + t(312, 86, 13, 'JOURNAL ENTRY', OCHRE, 'middle', 800);
    s += p('M 232 100 h 160 M 312 100 v 86', 'none', ' stroke="' + LINE + '" stroke-width="2.6"');
    s += t(272, 118, 11, 'Dr', RED, 'middle', 800) + t(352, 118, 11, 'Cr', GREEN, 'middle', 800);
    s += t(272, 140, 11, 'office supplies', INK, 'middle', 600);
    s += t(272, 158, 14, '500', RED, 'middle', 800);
    s += t(352, 140, 11, 'cash', INK, 'middle', 600);
    s += t(352, 158, 14, '500', GREEN, 'middle', 800);
    s += p('M 232 172 h 160', 'none', ' stroke="' + INK + '" stroke-width="2.6"');
    s += t(272, 190, 13, '500', INK, 'middle', 800) + t(352, 190, 13, '500', INK, 'middle', 800);
    s += c(312, 230, 11, OCHRE) + t(312, 234, 12, '2', '#fff', 'middle', 800);

    /* 3 the ledger, as two T-accounts */
    s += r(452, 62, 160, 150, PAPER, 6) + t(532, 86, 13, 'LEDGER', OCHRE, 'middle', 800);
    function tt(x, y, lab, dr, cr) {
      var o = t(x, y, 11, lab, SLATE, 'middle', 800);
      o += p('M ' + (x - 42) + ' ' + (y + 8) + ' h 84 M ' + x + ' ' + (y + 8) + ' v 36', 'none',
        ' stroke="' + INK + '" stroke-width="2.6"');
      o += t(x - 21, y + 30, 12, dr, dr ? RED : LINE, 'middle', 800);
      o += t(x + 21, y + 30, 12, cr, cr ? GREEN : LINE, 'middle', 800);
      return o;
    }
    s += tt(532, 112, 'office supplies', '500', '–');
    s += tt(532, 168, 'cash', '–', '500');
    s += c(532, 230, 11, OCHRE) + t(532, 234, 12, '3', '#fff', 'middle', 800);

    s += p('M 176 136 H 206', 'none', ' stroke="' + SLATE + '" stroke-width="5" marker-end="url(#eafm-fl)"');
    s += p('M 418 136 H 444', 'none', ' stroke="' + SLATE + '" stroke-width="5" marker-end="url(#eafm-fl)"');
    s += t(191, 118, 10, 'check it', LINE, 'middle', 700);
    s += t(431, 118, 10, 'post it', LINE, 'middle', 700);

    s += r(28, 262, 584, 58, '#f0e6d2', 8);
    s += t(320, 286, 14, 'The debit and the credit are always equal.', INK, 'middle', 700);
    s += t(320, 308, 12, 'One receipt becomes one entry, and the entry reaches both accounts.',
      OCHRE, 'middle', 600);
    return D.svgFit('0 0 640 380', s);
  });

  w.EFA.artReady = true;
}(window));
