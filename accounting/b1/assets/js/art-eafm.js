/* ============================================================
   English for Accounting and Financial Management B1 — art-eafm.js

   This course's own drawings. The Cybersecurity B1 art library is 24
   spots about phishing, password managers and study skills; not one of
   them is about money, so every vocabulary picture here is new.

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
  var A = w.EAFM && w.EAFM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  /* ---- this course's palette ---- */
  var INK = '#1a1d23', SLATE = '#1f4e5f', OCHRE = '#9a5b13',
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
  A.addSpot('finance-officer', function () {
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
  A.addSpot('donor', function () {
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

  /* ============================================================
     Figure 3.1 — Budget versus actual, by cost line.

     TWO PANELS, BECAUSE THE CHART ANSWERS TWO DIFFERENT QUESTIONS.
     The book asks both on the same screen: "Which cost line was the
     largest?" and "Which line was the furthest over budget?" A single
     pair of bars answers the first well and the second badly — at this
     scale salaries are 260px tall and transport's whole overspend is
     19px, so the most important fact in the unit would be the least
     visible thing on the page. So the left panel is the money, which
     shows that salaries dwarf everything, and the right panel is the
     variance in per cent against a zero line, which shows that
     transport is the furthest from its plan. Height on the left, gap on
     the right: the caption's own point, drawn.

     THE NUMBERS LIVE HERE AND NOWHERE ELSE. The book gives this figure
     a caption but no table, and scatters its numbers through three
     other sections. These five pairs are the one dataset that satisfies
     every statement the unit makes:

       Salaries  8200 -> 8000  -2.4%  "the largest cost ... slightly
                                       under budget"          (para 173)
       Transport 3000 -> 3600 +20.0%  "the transport budget was three
                                       thousand, but the actual was
                                       three thousand six hundred ...
                                       twenty per cent"       (para 198)
       Fuel      1200 -> 1290  +7.5%  "Fuel was also over budget, but
                                       its variance was noticeably
                                       smaller"               (para 173)
       Training  1000 ->  880 -12.0%  "Supplies and training were under
                                       budget"                (para 225)
       Supplies   900 ->  765 -15.0%  "Supplies were the lowest of all"
                                                              (para 306)
       total    14300 -> 14535 +1.6%  "the total stayed close to the
                                       plan"                  (para 173)

     Transport's +20.0% is the largest magnitude of the five, which is
     what "The biggest variance, in per cent, was transport" requires.
     ============================================================ */
  A.addFigure('bva-chart', function () {
    var ROWS = [
      { name: 'Salaries',  budget: 8200, actual: 8000 },
      { name: 'Transport', budget: 3000, actual: 3600 },
      { name: 'Fuel',      budget: 1200, actual: 1290 },
      { name: 'Training',  budget: 1000, actual:  880 },
      { name: 'Supplies',  budget:  900, actual:  765 }
    ];
    var W = 780, H = 430, s = '';
    s += r(0, 0, W, H, '#f4f8fa', 14);
    s += t(W / 2, 30, 19, 'Figure 3.1 · Budget versus actual, by cost line',
      SLATE, 'middle', 800);

    /* ---------- left panel: the money ----------
       The panel headings sit at y=58 and the legends at y=70, ABOVE the plot area,
       which starts at 96. An earlier version put the heading at 56 and the legend
       swatches at top-18 with top=76, so the two sat on the same line and collided;
       and the right-hand panel drew its background rectangle AFTER its heading, so
       the rectangle painted over it. Both were invisible in the source and obvious
       in a screenshot. */
    var ax = 62, aw = 372, base = 338, top = 96, span = base - top;
    var max = 8200, k = span / max;
    s += t(ax + aw / 2, 58, 13, 'How big is each cost?', OCHRE, 'middle', 700);
    s += p('M ' + ax + ' ' + base + ' H ' + (ax + aw), 'none',
      ' stroke="' + INK + '" stroke-width="2.5"');
    /* gridlines every 2000 */
    for (var g = 2000; g <= 8000; g += 2000) {
      var gy = base - g * k;
      s += p('M ' + ax + ' ' + gy.toFixed(1) + ' H ' + (ax + aw), 'none',
        ' stroke="' + LINE + '" stroke-width="1" stroke-dasharray="3 4"');
      s += t(ax - 6, gy + 4, 10, (g / 1000) + 'k', LINE, 'end', 600);
    }
    var gw = aw / ROWS.length, bw = 23;
    ROWS.forEach(function (d0, i) {
      var cx = ax + i * gw + gw / 2;
      var bh = d0.budget * k, ah = d0.actual * k;
      var over = d0.actual > d0.budget;
      /* budget: an outline, because it is a plan */
      s += r(cx - bw - 3, base - bh, bw, bh, '#ffffff', 2);
      s += p('M ' + (cx - bw - 3) + ' ' + (base - bh) + ' h ' + bw + ' v ' + bh,
        'none', ' stroke="' + SLATE + '" stroke-width="2"');
      /* actual: solid, and coloured by which side of the plan it landed */
      s += r(cx + 3, base - ah, bw, ah, over ? RED : GREEN, 2);
      s += t(cx, base + 15, 10.5, d0.name, INK, 'middle', 700);
    });
    s += r(ax + 4, 70, 11, 11, '#ffffff', 2);
    s += p('M ' + (ax + 4) + ' 70 h 11 v 11 h -11 z', 'none',
      ' stroke="' + SLATE + '" stroke-width="2"');
    s += t(ax + 20, 79, 10.5, 'budget (the plan)', INK, 'start', 600);
    s += r(ax + 150, 70, 11, 11, SLATE, 2);
    s += t(ax + 166, 79, 10.5, 'actual (what happened)', INK, 'start', 600);

    /* ---------- right panel: the variance ---------- */
    var bx = 486, bwid = 258, zero = 212, pk = 4.0;   /* 4px per per-cent */
    /* the background FIRST, then everything that has to be readable on top of it */
    s += r(bx - 10, 70, bwid + 24, 282, '#eef3f5', 10);
    s += t(bx + bwid / 2, 58, 13, 'How far from the plan?', OCHRE, 'middle', 700);
    s += p('M ' + bx + ' ' + zero + ' H ' + (bx + bwid), 'none',
      ' stroke="' + INK + '" stroke-width="2.5"');
    s += t(bx + bwid + 6, zero + 4, 10, '0%', INK, 'start', 700);
    var vw = bwid / ROWS.length;
    ROWS.forEach(function (d0, i) {
      var pct = (d0.actual - d0.budget) / d0.budget * 100;
      var cx = bx + i * vw + vw / 2, h = Math.abs(pct) * pk;
      var up = pct > 0;
      s += r(cx - 14, up ? zero - h : zero, 28, h, up ? RED : GREEN, 3);
      s += t(cx, up ? zero - h - 7 : zero + h + 14, 11,
        (up ? '+' : '−') + Math.abs(pct).toFixed(1) + '%',
        up ? RED : GREEN, 'middle', 800);
      s += t(cx, up ? zero + 15 : zero - 7, 9.5, d0.name.slice(0, 5), INK,
        'middle', 600);
    });
    /* the one line the whole unit is about */
    s += p('M ' + (bx + vw * 1.5 + 2) + ' ' + (zero - 20 * pk - 26) +
      ' v -14', 'none', ' stroke="' + OCHRE + '" stroke-width="2.5"');
    s += t(bx + vw * 1.5 + 2, zero - 20 * pk - 44, 11,
      'the biggest variance', OCHRE, 'middle', 800);

    s += r(28, 370, W - 56, 44, '#f0e6d2', 8);
    s += t(W / 2, 390, 12.5,
      'Salaries are the tallest pair — but transport is the widest gap.',
      INK, 'middle', 700);
    s += t(W / 2, 406, 11.5,
      'The largest cost and the biggest problem are different lines.',
      OCHRE, 'middle', 600);
    return D.svgFit('0 0 ' + W + ' ' + H, s);
  });

  /* ============================================================
     Figure 4.1 — HRI funding by source.

     The book names the shape itself: "This checks that you can read a
     donut chart." So it is a donut, not a pie — the hole carries the
     total, which is the one number the first question asks for and the
     one a pie has nowhere to put.

     THE NUMBERS. The caption fixes the total at $400,000, the three
     restricted funds at 85% together, and the core funding at 15%. It
     does NOT split the 85% between the three, so that split is chosen
     here, once, and it is the only invented quantity in the figure:

       Sophie Foundation   160,000   40.0%  restricted (health)
       Global Relief Fund  110,000   27.5%  restricted
       bilateral grant      70,000   17.5%  restricted
       ------------------- -------  ------
       restricted total    340,000   85.0%  "make up 85% of the money"
       core (unrestricted)  60,000   15.0%  "Only 15% is core"
       ------------------- -------  ------
       total               400,000  100.0%  "The total is $400,000"

     Reading A calls the Sophie Foundation's share "a substantial
     amount", so it is the largest of the three. Nothing else in the
     unit constrains the other two.

     The three restricted slices are drawn in one family of colour and
     the core slice in a contrasting pale one, because the question the
     chart has to answer at a glance is not "which fund is biggest" but
     "how much of this may we actually choose what to do with".
     ============================================================ */
  A.addFigure('funding-donut', function () {
    var ROWS = [
      { name: 'Sophie Foundation',  v: 160000, fill: SLATE,     restricted: true },
      { name: 'Global Relief Fund', v: 110000, fill: '#36788c', restricted: true },
      { name: 'bilateral grant',    v:  70000, fill: '#6aa3b0', restricted: true },
      { name: 'core funding',       v:  60000, fill: GOLD,      restricted: false }
    ];
    var W = 780, H = 430, s = '';
    var total = ROWS.reduce(function (a, b) { return a + b.v; }, 0);
    var cx = 232, cy = 232, R = 132, r0 = 74;

    s += r(0, 0, W, H, '#f4f8fa', 14);
    s += t(W / 2, 30, 19, 'Figure 4.1 · HRI funding by source', SLATE,
      'middle', 800);

    /* one donut segment, as an annular path */
    function seg(a0, a1, fill) {
      var x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
      var x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
      var i1 = cx + r0 * Math.cos(a1), j1 = cy + r0 * Math.sin(a1);
      var i0 = cx + r0 * Math.cos(a0), j0 = cy + r0 * Math.sin(a0);
      var big = (a1 - a0) > Math.PI ? 1 : 0;
      return p('M ' + x0.toFixed(1) + ' ' + y0.toFixed(1) +
        ' A ' + R + ' ' + R + ' 0 ' + big + ' 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) +
        ' L ' + i1.toFixed(1) + ' ' + j1.toFixed(1) +
        ' A ' + r0 + ' ' + r0 + ' 0 ' + big + ' 0 ' + i0.toFixed(1) + ' ' + j0.toFixed(1) +
        ' Z', fill, ' stroke="#f4f8fa" stroke-width="3"');
    }

    var a = -Math.PI / 2, i;
    for (i = 0; i < ROWS.length; i++) {
      var sweep = ROWS[i].v / total * Math.PI * 2;
      s += seg(a, a + sweep, ROWS[i].fill);
      /* the percentage, on the ring itself */
      var mid = a + sweep / 2, rr = (R + r0) / 2;
      var pct = Math.round(ROWS[i].v / total * 1000) / 10;
      if (sweep > 0.42) {
        s += t(cx + rr * Math.cos(mid), cy + rr * Math.sin(mid) + 5, 15,
          pct + '%', '#ffffff', 'middle', 800);
      }
      a += sweep;
    }

    /* the total lives in the hole: the donut's one advantage over a pie */
    s += t(cx, cy - 6, 15, 'total', SLATE, 'middle', 700);
    s += t(cx, cy + 18, 22, '$400,000', INK, 'middle', 800);

    /* the restricted / unrestricted split, stated as the chart's real subject */
    var bx = 420;
    s += t(bx, 74, 13, 'Which of it may we choose how to spend?', OCHRE, 'start', 700);
    s += r(bx, 90, 320, 44, '#eef3f5', 8);
    var fw = 320 * 0.85;
    s += r(bx, 90, fw, 44, SLATE, 8);
    s += t(bx + fw / 2, 118, 14, '85% restricted', '#ffffff', 'middle', 800);
    s += t(bx + fw + (320 - fw) / 2, 118, 12, '15%', INK, 'middle', 800);

    /* the legend, with money as well as per cent */
    for (i = 0; i < ROWS.length; i++) {
      var y = 160 + i * 30;
      s += r(bx, y, 14, 14, ROWS[i].fill, 3);
      s += t(bx + 22, y + 12, 12.5, ROWS[i].name, INK, 'start', 650);
      s += t(bx + 238, y + 12, 12.5,
        '$' + (ROWS[i].v / 1000) + 'k', INK, 'start', 700);
      s += t(bx + 292, y + 12, 11.5,
        ROWS[i].restricted ? 'tied' : 'free',
        ROWS[i].restricted ? SLATE : OCHRE, 'start', 700);
    }

    s += r(28, 370, W - 56, 44, '#f0e6d2', 8);
    s += t(W / 2, 390, 12.5,
      'Four funds, and only ONE of them may be spent on anything at all.',
      INK, 'middle', 700);
    s += t(W / 2, 406, 11.5,
      'Plenty of money in total — and few free choices.', OCHRE, 'middle', 600);
    return D.svgFit('0 0 ' + W + ' ' + H, s);
  });

  /* ============================================================
     Figure 5.1 — Cash-flow forecast, next six months.

     The caption specifies this one almost completely: "The teal bars
     show money in; the navy bars show money out; the blue line shows
     the projected closing balance. The balance will fall from $40k in
     January to a low of $6k in April, below the minimum reserve of
     $15k. This warns of a possible cash gap in the spring, before
     income rises again in May and June."

     WHAT HAD TO BE DERIVED. The caption fixes the BALANCE line and the
     reserve, but gives no monthly figures for the bars — and the bars
     are what cause the line, so they cannot be drawn freehand. Each
     month's closing balance is the month before it plus money in minus
     money out, so the six pairs were solved backwards from the four
     balances the caption names:

       month  in   out   closing            the caption's constraint
       ----- ---- ----- --------- ---------------------------------------
       (open)            46
       Jan     30    36    40      "from $40k in January"
       Feb     20    31    29      falls steadily
       Mar     16    27    18      falls steadily, still above 15
       Apr     13    25     6      "a low of $6k in April", below 15
       May     38    25    19      "income rises again in May"
       Jun     35    24    30      "...and June"
       ----- ---- ----- ---------
       total  152   168            46 - 16 = 30, which is June's close

     Only ONE month's balance is under the reserve, which is what makes
     the book call it "a possible cash gap" and not a crisis, and which
     is the answer to the figure's third question.

     Reading A supplies the story behind the bars: "Two important grants
     will arrive early in the year" (January's 30), "A third grant is
     going to start in May" (May's 38), "The salaries will stay the same
     every month" (the flat part of the outflow), and "The transport
     costs are going to rise a little in the spring".

     ONE TENSION WITH THE PROSE, followed deliberately. Reading A says
     April "is going to drop close to the minimum reserve"; the caption
     puts it at $6k against a $15k reserve, which is through the floor
     rather than close to it. The caption carries the numbers, so the
     chart follows the caption. Noted in ERRATA_for_the_author.md.
     ============================================================ */
  A.addFigure('cashflow-forecast', function () {
    var M = [
      { m: 'Jan', inn: 30, out: 36, bal: 40 },
      { m: 'Feb', inn: 20, out: 31, bal: 29 },
      { m: 'Mar', inn: 16, out: 27, bal: 18 },
      { m: 'Apr', inn: 13, out: 25, bal:  6 },
      { m: 'May', inn: 38, out: 25, bal: 19 },
      { m: 'Jun', inn: 35, out: 24, bal: 30 }
    ];
    var RESERVE = 15, TEAL = '#2f8f8c', NAVY = '#1f3a5f', LINE2 = '#2f6fd0';
    var W = 800, H = 440, s = '';
    var ax = 70, aw = 660, base = 330, top = 100, span = base - top;
    /* The axis runs to 45, not to the 40 of January's balance: with the top of the
       scale equal to the highest point, that point's label is pushed into the legend
       row above it. Five thousand of headroom costs nothing and keeps every label
       inside the plot. */
    var max = 45, k = span / max;

    /* A label that has to stay readable WHEREVER it lands — over a bar, over a
       gridline, over the dashed reserve. Measured from a screenshot: without the
       pale backing, four of the six balance labels sat on top of a bar and the
       reserve caption ran straight through May and June. Geometry has to be checked
       against pixels, and this is what that check produced. */
    function pill(x, y, txt, col, size, anchor) {
      var wpx = String(txt).length * size * 0.56 + 10;
      var ax0 = anchor === 'start' ? x - 5
        : (anchor === 'end' ? x - wpx + 5 : x - wpx / 2);
      return r(ax0, y - size + 1, wpx, size + 6, '#f4f8fa', 4) +
        t(x, y, size, txt, col, anchor || 'middle', 800);
    }

    s += r(0, 0, W, H, '#f4f8fa', 14);
    s += t(W / 2, 30, 19, 'Figure 5.1 · Cash-flow forecast, next six months',
      SLATE, 'middle', 800);
    s += t(W / 2, 52, 12.5,
      'Thousands of dollars. The bars cause the line.', OCHRE, 'middle', 650);

    /* gridlines and the axis */
    var g;
    for (g = 10; g <= 40; g += 10) {
      var gy = base - g * k;
      s += p('M ' + ax + ' ' + gy.toFixed(1) + ' H ' + (ax + aw), 'none',
        ' stroke="' + LINE + '" stroke-width="1" stroke-dasharray="3 4"');
      s += t(ax - 8, gy + 4, 10, '$' + g + 'k', LINE, 'end', 600);
    }
    s += p('M ' + ax + ' ' + base + ' H ' + (ax + aw), 'none',
      ' stroke="' + INK + '" stroke-width="2.5"');

    /* the minimum reserve: the floor the balance must not go through */
    var ry = base - RESERVE * k;
    s += p('M ' + ax + ' ' + ry.toFixed(1) + ' H ' + (ax + aw), 'none',
      ' stroke="' + RED + '" stroke-width="2.5" stroke-dasharray="8 5"');
    /* its caption lives in the legend, not on the line: at the right-hand end it ran
       through the May and June bars, and there is no month where the line is clear */

    /* the bars */
    var gw = aw / M.length, bw = 26, i;
    for (i = 0; i < M.length; i++) {
      var cx = ax + i * gw + gw / 2;
      s += r(cx - bw - 3, base - M[i].inn * k, bw, M[i].inn * k, TEAL, 2);
      s += r(cx + 3, base - M[i].out * k, bw, M[i].out * k, NAVY, 2);
      s += t(cx, base + 16, 11.5, M[i].m, INK, 'middle', 700);
    }

    /* the closing-balance line, drawn last so it sits on top */
    var pts = [], d2 = '';
    for (i = 0; i < M.length; i++) {
      var px = ax + i * gw + gw / 2, py = base - M[i].bal * k;
      pts.push([px, py]);
      d2 += (i ? ' L ' : 'M ') + px.toFixed(1) + ' ' + py.toFixed(1);
    }
    s += p(d2, 'none', ' stroke="' + LINE2 + '" stroke-width="4" ' +
      'stroke-linecap="round" stroke-linejoin="round"');
    for (i = 0; i < pts.length; i++) {
      var low = M[i].bal < RESERVE;
      s += c(pts[i][0], pts[i][1], low ? 8 : 6, low ? RED : LINE2);
      s += c(pts[i][0], pts[i][1], low ? 4 : 3, '#ffffff');
      /* April's label goes BELOW its point: above it is where the cash-gap caption
         has to be, and that caption is the one a reader must not miss */
      s += pill(pts[i][0], pts[i][1] + (low ? 26 : -14), '$' + M[i].bal + 'k',
        low ? RED : LINE2, 11.5);
    }

    /* the one month that goes through the floor */
    var apr = pts[3];
    s += pill(apr[0], apr[1] - 16, 'the cash gap', RED, 12);

    /* legend, including the reserve, on its own row above the plot */
    var ly = 80;
    s += r(ax, ly - 11, 13, 13, TEAL, 3);
    s += t(ax + 20, ly, 11, 'money in', INK, 'start', 650);
    s += r(ax + 104, ly - 11, 13, 13, NAVY, 3);
    s += t(ax + 124, ly, 11, 'money out', INK, 'start', 650);
    s += p('M ' + (ax + 216) + ' ' + (ly - 5) + ' h 22', 'none',
      ' stroke="' + LINE2 + '" stroke-width="4" stroke-linecap="round"');
    s += t(ax + 244, ly, 11, 'closing balance', INK, 'start', 650);
    s += p('M ' + (ax + 364) + ' ' + (ly - 5) + ' h 22', 'none',
      ' stroke="' + RED + '" stroke-width="3" stroke-dasharray="7 4"');
    s += t(ax + 392, ly, 11, 'minimum reserve $15k', RED, 'start', 750);

    s += r(28, 380, W - 56, 44, '#f0e6d2', 8);
    s += t(W / 2, 400, 12.5,
      'Only April goes below the reserve — one month, seen three months early.',
      INK, 'middle', 700);
    s += t(W / 2, 416, 11.5,
      'A gap is not a crisis when you see it early.', OCHRE, 'middle', 600);
    return D.svgFit('0 0 ' + W + ' ' + H, s);
  });

  w.EAFM.artReady = true;
}(window));
