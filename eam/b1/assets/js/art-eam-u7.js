/* ============================================================
   English for Auto Maintenance B1 — art-eam-u7.js

   UNIT 7'S OWN OBJECTS: the service desk, and the paper that crosses it.

   Almost every word in this unit is a DOCUMENT or a MOMENT AT A COUNTER, and the two are easy
   to draw badly: six sheets of paper with different headings look the same from across a room,
   which is exactly the failure a matching card punishes. So each document is drawn by the thing
   that makes it that document and not another one — an estimate has a price and the word
   BEFORE, a deposit has money going one way and a receipt coming back, an invoice has a total
   ruled under it, a parts order has a box and a van. And where the word is a moment rather than
   a paper — handover, collect, ready time — the drawing is the counter with the people at it.
   ============================================================ */
(function (w) {
  'use strict';
  var A = w.EAM && w.EAM.art;
  if (!A || !A.addSpot) { return; }
  var D = A.draw, r = D.r, c = D.c, e = D.e, p = D.p, t = D.t, frame = D.frame;

  var INK = '#1b1f24', STEEL = '#52646f', STEEL2 = '#76899a', CHROME = '#aebac4',
      PAINT = '#1f6f8b', PAINT2 = '#2d8fae', GLASS = '#cfe6ef',
      OCHRE = '#c9892a', AMBER = '#e8b418', RED = '#b8432f', GREEN = '#2f7d4f',
      SKIN = '#e8c39a', SKIN2 = '#d7b183', WOOD = '#c8a97e', WOOD2 = '#dcc39b',
      PAPER = '#fbf8f1', LINE = '#9aa7b1', FLOOR = '#b9c4cb', RUBBER = '#2b3238',
      MONEY = '#4f8a5b';

  function stroke(d, col, wd, cap) {
    return p(d, 'none', ' stroke="' + col + '" stroke-width="' + wd + '"' +
      ' stroke-linecap="' + (cap || 'round') + '" stroke-linejoin="round"');
  }

  /* the counter every desk word happens across */
  function counter(y) {
    return r(0, y, 200, 140 - y, WOOD, 3) + r(0, y - 6, 200, 8, WOOD2, 3);
  }

  /* a sheet of paper with a coloured head and ruled lines */
  function sheet(x, y, wd, h, head, label) {
    var s = r(x, y, wd, h, PAPER, 3) + r(x, y, wd, 14, head, 3);
    s += t(x + wd / 2, y + 10, 9, label, PAPER, 'middle', 800);
    return s;
  }

  function lines(x, y, wd, n, gap) {
    var s = '';
    for (var i = 0; i < n; i++) { s += r(x, y + i * (gap || 9), wd, 3.2, LINE, 2); }
    return s;
  }

  /* a small side-on car, for the collect and courtesy-car drawings */
  function car(x, y, sc, body) {
    var s = '<g transform="translate(' + x + ',' + y + ') scale(' + sc + ')">';
    s += p('M 6 34 q 6 -20 22 -22 h 34 q 16 2 26 22 h -82 Z', body || PAINT);
    s += r(0, 34, 94, 14, body || PAINT, 5);
    s += p('M 20 20 q 6 -12 16 -12 h 20 q 12 2 18 12 Z', GLASS);
    s += c(24, 50, 10, RUBBER) + c(24, 50, 4, CHROME);
    s += c(70, 50, 10, RUBBER) + c(70, 50, 4, CHROME);
    s += '</g>';
    return s;
  }

  /* ---- appointment: a day in the diary with a time against it ---- */
  A.addSpot('appointment', function () {
    var s = '';
    s += r(24, 10, 152, 120, PAPER, 4);
    s += r(24, 10, 152, 20, PAINT, 4);
    s += t(100, 24, 10, 'THURSDAY', PAPER, 'middle', 800);
    s += c(58, 10, 5, CHROME) + c(142, 10, 5, CHROME);            /* the diary rings */
    var tm = ['09:00', '10:30', '12:00', '14:00'];
    for (var i = 0; i < 4; i++) {
      var y = 40 + i * 22;
      s += t(38, y + 12, 10, tm[i], STEEL2, 'start', 700);
      s += stroke('M 34 ' + (y + 18) + ' h 132', '#e2e8ec', 1.4);
      if (i === 1) {
        s += r(74, y + 1, 94, 16, '#d8ecf3', 3);
        s += t(80, y + 13, 10, 'Mr Aboud — service', PAINT, 'start', 800);
      }
    }
    return frame(s, '#eef2f4');
  });

  /* ---- booking: the moment it is taken — the phone, and the entry being written ---- */
  A.addSpot('booking', function () {
    var s = '';
    s += counter(104);
    /* the handset, held */
    s += p('M 20 30 q 14 -10 22 2 l -8 8 q 8 16 22 24 l 8 -8 q 12 8 2 22 '
      + 'q -26 4 -44 -20 q -12 -18 -2 -28 Z', '#39434f');
    /* the book being written in */
    s += r(80, 44, 86, 58, PAPER, 3) + r(80, 44, 86, 12, PAINT, 3);
    s += t(123, 54, 9, 'BOOKINGS', PAPER, 'middle', 800);
    s += lines(88, 64, 54, 4);
    s += stroke('M 142 94 l 26 -26', OCHRE, 4.4);                 /* the pen */
    s += p('M 136 100 l 9 -7 l 4 5 l -10 6 Z', '#4a3a24');
    /* the speech coming down the line */
    s += p('M 44 14 q 8 -8 16 0 q -6 6 -16 0 Z', PAINT2);
    s += p('M 54 6 q 10 -10 20 0 q -8 8 -20 0 Z', PAINT2);
    return frame(s, '#f2eee6');
  });

  /* ---- estimate: a PRICE GIVEN BEFORE THE WORK, which is the whole of the word ---- */
  A.addSpot('estimate', function () {
    var s = '';
    s += sheet(30, 14, 108, 112, PAINT, 'ESTIMATE');
    s += lines(40, 36, 64, 3, 11);
    s += r(110, 36, 20, 3.2, STEEL2, 2) + r(110, 47, 20, 3.2, STEEL2, 2)
      + r(110, 58, 20, 3.2, STEEL2, 2);
    s += stroke('M 40 76 h 88', '#cfd7dc', 2);
    s += t(46, 92, 10, 'ABOUT', STEEL, 'start', 800);
    s += t(130, 93, 13, '38 000', INK, 'end', 800);
    /* the stamp that separates an estimate from an invoice */
    s += '<g transform="translate(118,96) rotate(-12)">';
    s += r(0, 0, 64, 24, 'none', 4).replace('fill="none"',
      'fill="#fdf0ee" stroke="' + RED + '" stroke-width="2.6"');
    s += t(32, 17, 11, 'BEFORE', RED, 'middle', 800);
    s += '</g>';
    return frame(s, '#eef2f4');
  });

  /* ---- deposit: money paid first, and the receipt that comes back ---- */
  A.addSpot('deposit', function () {
    var s = '';
    s += counter(96);
    /* the notes going across */
    s += '<g transform="translate(26,44) rotate(-8)">';
    s += r(0, 0, 56, 30, '#cfe6d4', 3) + r(4, 4, 48, 22, '#aed4b7', 2);
    s += c(28, 15, 8, MONEY) + t(28, 19, 11, '£', '#eef7f0', 'middle', 800);
    s += '</g>';
    s += stroke('M 88 54 h 24', MONEY, 4) + p('M 114 54 l -8 -5 v 10 Z', MONEY);
    /* the receipt coming back */
    s += r(122, 32, 52, 56, PAPER, 3) + r(122, 32, 52, 11, MONEY, 3);
    s += t(148, 41, 8, 'RECEIPT', PAPER, 'middle', 800);
    s += lines(128, 50, 32, 3, 8);
    s += t(148, 82, 11, '10 000', INK, 'middle', 800);
    s += stroke('M 118 76 h -22', STEEL2, 3) + p('M 92 76 l 8 -5 v 10 Z', STEEL2);
    s += t(100, 128, 11, 'paid first', STEEL, 'middle', 800);
    return frame(s, '#f2eee6');
  });

  /* ---- parts order: the box on its way, with the order against it ---- */
  A.addSpot('parts order', function () {
    var s = '';
    s += r(0, 112, 200, 16, FLOOR, 3);
    /* the van */
    s += r(96, 46, 94, 48, PAINT, 5);
    s += p('M 96 46 h -34 q -14 2 -20 22 v 26 h 54 Z', PAINT2);
    s += p('M 54 52 q 6 -4 16 -4 h 20 v 18 h -40 Z', GLASS);
    s += c(82, 100, 13, RUBBER) + c(82, 100, 5, CHROME);
    s += c(160, 100, 13, RUBBER) + c(160, 100, 5, CHROME);
    s += r(120, 58, 44, 26, WOOD, 2);                             /* the boxed part inside */
    s += stroke('M 120 71 h 44 M 142 58 v 26', '#a98d64', 2);
    /* the order form, in front */
    s += r(10, 36, 52, 68, PAPER, 3) + r(10, 36, 52, 12, OCHRE, 3);
    s += t(36, 46, 8, 'ORDER', PAPER, 'middle', 800);
    s += lines(16, 56, 30, 4, 9);
    s += stroke('M 48 58 l 3 3 l 5 -6 M 48 76 l 3 3 l 5 -6', GREEN, 2.2);
    return frame(s, '#eef1f3');
  });

  /* ---- courtesy car: the garage's own car, lent — the key handed with it ---- */
  A.addSpot('courtesy car', function () {
    var s = '';
    s += r(0, 108, 200, 20, FLOOR, 3);
    s += car(46, 46, 1.12, '#5f7f96');
    /* the garage's name on the door, which is what makes it the garage's car */
    s += r(74, 72, 44, 14, '#eef4f7', 2);
    s += t(96, 83, 9, 'GARAGE', PAINT, 'middle', 800);
    /* the key going to the customer */
    s += r(154, 40, 12, 18, OCHRE, 3) + c(160, 34, 8, OCHRE) + c(160, 34, 3.2, '#f1eee8');
    s += r(157, 58, 6, 5, '#8f5f16');
    s += p('M 140 96 q 16 -14 36 -6 q 8 4 2 11 q -12 7 -38 3 Z', SKIN);
    s += t(100, 24, 11, 'we lend it to you', STEEL, 'middle', 700);
    return frame(s, '#edf1f4');
  });

  /* ---- ready time: the clock, and the promise written against it ---- */
  A.addSpot('ready time', function () {
    var s = '';
    s += c(62, 66, 48, '#e7edf1') + c(62, 66, 42, PAPER) + c(62, 66, 42, 'none')
      .replace('fill="none"', 'fill="none" stroke="' + STEEL + '" stroke-width="3.4"');
    for (var i = 0; i < 12; i++) {
      var ang = i * Math.PI / 6;
      s += r(62 + Math.sin(ang) * 34 - 1.6, 66 - Math.cos(ang) * 34 - 1.6, 3.2, 3.2,
        i % 3 === 0 ? STEEL : LINE, 1);
    }
    s += stroke('M 62 66 l 0 -24', INK, 4);                       /* four o'clock */
    s += stroke('M 62 66 l 20 10', INK, 3);
    s += c(62, 66, 4.4, PAINT);
    /* the promise */
    s += r(118, 40, 72, 52, PAPER, 3) + r(118, 40, 72, 12, GREEN, 3);
    s += t(154, 50, 8, 'READY AT', PAPER, 'middle', 800);
    s += t(154, 72, 18, '4:00', INK, 'middle', 800);
    s += t(154, 86, 9, 'this afternoon', STEEL2, 'middle', 700);
    return frame(s, '#eef2f4');
  });

  /* ---- collect: the customer driving the car away, which is what collecting is ---- */
  A.addSpot('collect', function () {
    var s = '';
    s += r(0, 96, 200, 32, '#5b646c', 2);
    for (var i = 0; i < 5; i++) { s += r(12 + i * 40, 108, 20, 4, PAPER, 2); }
    s += car(70, 44, 1.16, PAINT);
    s += c(112, 56, 9, SKIN);                                     /* somebody in it, driving */
    s += stroke('M 58 60 h -26 M 54 74 h -32 M 62 88 h -22', STEEL2, 4);
    /* the empty bay it has left */
    s += r(150, 30, 42, 56, 'none', 4).replace('fill="none"',
      'fill="#e9eff2" stroke="' + LINE + '" stroke-width="2" stroke-dasharray="6 5"');
    s += t(171, 62, 10, 'gone', LINE, 'middle', 800);
    return frame(s, '#eef1f3');
  });

  A.addSpot('parts-order', function () { return A.spot('parts order'); });
  A.addSpot('order', function () { return A.spot('parts order'); });
  A.addSpot('courtesy-car', function () { return A.spot('courtesy car'); });
  A.addSpot('ready-time', function () { return A.spot('ready time'); });
  A.addSpot('service desk', function () { return A.spot('appointment'); });
  A.addSpot('service-desk', function () { return A.spot('appointment'); });
}(window));
