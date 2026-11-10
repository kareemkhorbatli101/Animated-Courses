/* ============================================================
   Cybersecurity B1 — art.js
   Every visual in the course is generated SVG. No binary assets,
   so everything scales, themes and works from file://.
   ============================================================ */
(function (w) {
  'use strict';
  var CSB1 = w.CSB1 = w.CSB1 || {};
  var A = CSB1.art = {};

  /* ---------- tiny helpers ---------- */
  function svg(vb, body, cls) {
    return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" ' +
      (cls ? 'class="' + cls + '" ' : '') + 'preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + body + '</svg>';
  }
  function svgFit(vb, body, cls) {
    return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" ' +
      (cls ? 'class="' + cls + '" ' : '') + 'preserveAspectRatio="xMidYMid meet" aria-hidden="true">' + body + '</svg>';
  }
  function r(x, y, wd, h, fill, rad) {
    return '<rect x="' + x + '" y="' + y + '" width="' + wd + '" height="' + h + '" fill="' + fill + '"' +
      (rad ? ' rx="' + rad + '"' : '') + '/>';
  }
  function c(cx, cy, rr, fill) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="' + fill + '"/>'; }
  function e(cx, cy, rx, ry, fill) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + fill + '"/>'; }
  function p(d, fill, extra) { return '<path d="' + d + '" fill="' + (fill || 'none') + '"' + (extra || '') + '/>'; }
  function t(x, y, s, txt, fill, anchor, weight) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + s + '" fill="' + (fill || '#fff') +
      '" font-family="Segoe UI,system-ui,sans-serif" font-weight="' + (weight || 600) +
      '" text-anchor="' + (anchor || 'start') + '">' + esc(txt) + '</text>';
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  A.esc = esc;

  /* ============================================================
     MOUTH — one parametric shape.

     The voice pipeline measures real speech as three continuous
     tracks at 25 Hz: loudness (how far the jaw drops), "wide"
     (how far the lips spread) and "round" (how far they purse).
     So the mouth is computed, not picked from a list of shapes.

     Loudness gates the other two: during a pause the wide/round
     values are meaningless, and without the gate a character
     grins through every silence.
     ============================================================ */
  function clamp01(v) { v = +v; return v < 0 ? 0 : (v > 1 ? 1 : (v === v ? v : 0)); }

  A.mouthPath = function (open, wide, round) {
    open = clamp01(open); wide = clamp01(wide); round = clamp01(round);
    if (open < 0.05) { open = 0; }                 /* closed is closed */
    var w = (6.5 + 9.5 * wide) * (1 - 0.42 * round);
    var h = 0.6 + 12 * open;
    var up = h * 0.40 + 1.0 * round + 0.6;
    return 'M ' + (-w).toFixed(1) + ' 0 Q 0 ' + h.toFixed(1) + ' ' + w.toFixed(1) +
      ' 0 Q 0 ' + (-up).toFixed(1) + ' ' + (-w).toFixed(1) + ' 0 Z';
  };

  /* Named shapes, kept so the browser-speech fallback still has
     something to drive when a line has no recording. */
  var VIS = {
    rest: [0.02, 0.50, 0.30], MBP: [0.00, 0.45, 0.35], FV: [0.12, 0.60, 0.25],
    TH: [0.30, 0.50, 0.30], EE: [0.25, 1.00, 0.00], AA: [0.95, 0.65, 0.10],
    OH: [0.70, 0.20, 0.80], OO: [0.45, 0.05, 1.00], L: [0.50, 0.55, 0.25]
  };
  A.visemes = VIS;
  A.viseme = function (k) {
    var v = VIS[k] || VIS.rest;
    return A.mouthPath(v[0], v[1], v[2]);
  };

  /* grapheme -> viseme, used by the offline/live lip-sync driver */
  var GV = [
    [/^(sh|ch|j|zh|ti|si)/i, 'OO'],
    [/^(th)/i, 'TH'],
    [/^(oo|ou|u|w)/i, 'OO'],
    [/^(o|aw|au)/i, 'OH'],
    [/^(ee|ea|i|y)/i, 'EE'],
    [/^(a|e)/i, 'AA'],
    [/^(m|b|p)/i, 'MBP'],
    [/^(f|v)/i, 'FV'],
    [/^(l)/i, 'L']
  ];
  A.wordToVisemes = function (word) {
    var out = [], s = String(word).toLowerCase().replace(/[^a-z]/g, ''), i = 0, guard = 0;
    while (i < s.length && guard++ < 40) {
      var rest = s.slice(i), hit = null;
      for (var k = 0; k < GV.length; k++) { var m = rest.match(GV[k][0]); if (m) { hit = [GV[k][1], m[0].length]; break; } }
      if (!hit) hit = ['rest', 1];
      if (!out.length || out[out.length - 1] !== hit[0]) out.push(hit[0]);
      i += hit[1];
    }
    if (!out.length) out = ['AA'];
    return out;
  };

  /* ============================================================
     ACTORS — flat 2D rigs with named parts for animation
     ============================================================ */
  var RIGS = {
    'f-20s-a': { skin: '#e8b793', skin2: '#d9a37c', hair: '#2f2a28', hair2: '#1e1a19', style: 'long', shirt: '#2f8f7e', shirt2: '#246f62', hijab: null },
    'f-20s-b': { skin: '#c98b63', skin2: '#b2744f', hair: '#3a2b22', hair2: '#261c16', style: 'bun', shirt: '#b4531a', shirt2: '#8c3f14', hijab: null },
    'f-30s-a': { skin: '#f0c8a8', skin2: '#deb08c', hair: '#6b3b1f', hair2: '#4c2914', style: 'bob', shirt: '#4a5fb5', shirt2: '#374990', hijab: null },
    'f-30s-h': { skin: '#d9a37c', skin2: '#c08a63', hair: '#2b2320', hair2: '#1c1715', style: 'hijab', shirt: '#7a4b9e', shirt2: '#5d3a7a', hijab: '#9b6bbf' },
    'f-50s-a': { skin: '#eec6a6', skin2: '#dcae89', hair: '#9aa0a6', hair2: '#7d848b', style: 'bob', shirt: '#1f7a63', shirt2: '#16604d', hijab: null },
    'm-20s-a': { skin: '#c98b63', skin2: '#b2744f', hair: '#211c19', hair2: '#120f0d', style: 'short', shirt: '#3a6ea8', shirt2: '#2b5586', hijab: null },
    'm-20s-b': { skin: '#8d5a3b', skin2: '#74462c', hair: '#15110f', hair2: '#0b0908', style: 'fade', shirt: '#c9a227', shirt2: '#a4821c', hijab: null },
    'm-30s-a': { skin: '#e8b793', skin2: '#d9a37c', hair: '#3b2d23', hair2: '#271d16', style: 'short', shirt: '#5c7a2e', shirt2: '#465d22', hijab: null },
    'm-50s-a': { skin: '#efc9ab', skin2: '#dcb08c', hair: '#8e949b', hair2: '#6f757c', style: 'short', shirt: '#6d6f8f', shirt2: '#54566f', hijab: null },
    'm-50s-b': { skin: '#7a4b31', skin2: '#633a24', hair: '#9b9b9b', hair2: '#7a7a7a', style: 'short', shirt: '#2f5d7a', shirt2: '#23465c', hijab: null }
  };
  A.rigs = RIGS;

  function hairFor(style, h1, h2) {
    switch (style) {
      /* the inner hairline must sit above the eyes (cy 98, top ≈ 89) */
      case 'long': return p('M 50 72 q 50 -54 100 0 q 10 72 2 110 q -14 -78 -16 -102 q -42 16 -72 0 q -4 24 -16 102 q -8 -40 2 -110 Z', h1) +
        p('M 50 72 q 50 -54 100 0 q -10 -34 -50 -34 q -40 0 -50 34 Z', h2);
      case 'bun': return p('M 52 76 q 48 -52 96 0 q 4 -42 -48 -42 q -52 0 -48 42 Z', h1) + c(100, 24, 20, h1) + c(100, 24, 12, h2);
      case 'bob': return p('M 48 78 q 52 -56 104 0 q 6 44 0 62 q -10 -46 -12 -62 q -40 16 -68 0 q -2 16 -12 62 q -6 -18 -12 -62 Z', h1) +
        p('M 48 78 q 52 -56 104 0 q -14 -32 -52 -32 q -38 0 -52 32 Z', h2);
      case 'hijab': return '';
      case 'fade': return p('M 54 74 q 46 -46 92 0 q 2 -42 -46 -42 q -48 0 -46 42 Z', h1) + p('M 54 74 q 46 -46 92 0 q -8 -14 -46 -14 q -38 0 -46 14 Z', h2);
      default: return p('M 54 76 q 46 -50 92 0 q 2 -44 -46 -44 q -48 0 -46 44 Z', h1) + p('M 54 76 q 46 -50 92 0 q -10 -18 -46 -18 q -36 0 -46 18 Z', h2);
    }
  }

  /**
   * actor(id, rigName, opts) -> svg <g> markup, sized in a 200x300 local box.
   * Named parts: {id}-head {id}-brows {id}-lidL {id}-lidR {id}-mouth {id}-armL {id}-armR {id}-torso
   */
  A.actor = function (id, rigName, opts) {
    opts = opts || {};
    var g = RIGS[rigName] || RIGS['m-30s-a'];
    var sh = opts.shirt || g.shirt, sh2 = opts.shirt2 || g.shirt2;
    var s = '';
    /* torso + arms */
    s += '<g id="' + id + '-torso">';
    s += p('M 100 168 q -58 10 -66 62 q -5 34 -5 70 h 142 q 0 -36 -5 -70 q -8 -52 -66 -62 Z', sh);
    s += p('M 100 168 q -20 4 -24 16 q 12 12 24 12 q 12 0 24 -12 q -4 -12 -24 -16 Z', sh2);
    s += '</g>';
    s += '<g id="' + id + '-armL" style="transform-origin:46px 196px">' + p('M 44 186 q -16 26 -14 72 q 1 20 10 22 q 10 2 12 -18 q 3 -44 10 -64 Z', sh2) + '</g>';
    s += '<g id="' + id + '-armR" style="transform-origin:154px 196px">' + p('M 156 186 q 16 26 14 72 q -1 20 -10 22 q -10 2 -12 -18 q -3 -44 -10 -64 Z', sh2) + '</g>';
    /* neck */
    s += p('M 86 140 h 28 v 34 q -14 10 -28 0 Z', g.skin2);
    /* head group */
    s += '<g id="' + id + '-head" style="transform-origin:100px 110px">';
    if (g.style === 'hijab') s += p('M 40 92 q 60 -74 120 0 q 10 72 -6 104 q -54 22 -108 0 q -16 -32 -6 -104 Z', g.hijab);
    s += e(100, 96, 46, 54, g.skin);
    s += p('M 54 96 a 46 54 0 0 0 92 0 a 46 54 0 0 1 -92 0 Z', g.skin2);
    s += e(55, 104, 7, 10, g.skin2) + e(145, 104, 7, 10, g.skin2);
    if (g.style !== 'hijab') s += hairFor(g.style, g.hair, g.hair2);
    else s += p('M 54 70 q 46 -34 92 0 q -8 -24 -46 -24 q -38 0 -46 24 Z', '#00000022');
    /* brows */
    s += '<g id="' + id + '-brows" style="transform-origin:100px 82px">';
    s += p('M 70 80 q 12 -8 24 -2', 'none', ' stroke="' + g.hair2 + '" stroke-width="4.5" stroke-linecap="round"');
    s += p('M 106 78 q 12 -6 24 2', 'none', ' stroke="' + g.hair2 + '" stroke-width="4.5" stroke-linecap="round"');
    s += '</g>';
    /* eyes */
    s += '<g id="' + id + '-eyes">';
    s += e(82, 98, 8.5, 9, '#fff') + e(118, 98, 8.5, 9, '#fff');
    s += c(83, 99, 4.4, '#2a2320') + c(119, 99, 4.4, '#2a2320');
    s += c(84.6, 97.2, 1.6, '#ffffff') + c(120.6, 97.2, 1.6, '#ffffff');
    s += '<rect id="' + id + '-lidL" x="73" y="88" width="19" height="20" fill="' + g.skin + '" style="transform-origin:82px 89px;transform:scaleY(0)"/>';
    s += '<rect id="' + id + '-lidR" x="109" y="88" width="19" height="20" fill="' + g.skin + '" style="transform-origin:118px 89px;transform:scaleY(0)"/>';
    s += '</g>';
    /* nose */
    s += p('M 100 104 q -5 12 1 15 q 5 2 8 -2', 'none', ' stroke="' + g.skin2 + '" stroke-width="3.5" stroke-linecap="round"');
    /* mouth */
    s += '<g transform="translate(100,130)"><path id="' + id + '-mouth" d="' + A.viseme('rest') + '" fill="#8c3b37"/></g>';
    s += '</g>'; /* head */
    return '<g class="rig" data-rig="' + rigName + '">' + s + '</g>';
  };

  /* small head-only portrait, used in lists and cue cards */
  A.portrait = function (rigName, size) {
    var g = RIGS[rigName] || RIGS['m-30s-a'], s = '';
    if (g.style === 'hijab') s += p('M 40 92 q 60 -74 120 0 q 10 72 -6 104 q -54 22 -108 0 q -16 -32 -6 -104 Z', g.hijab);
    s += e(100, 100, 46, 54, g.skin) + e(55, 108, 7, 10, g.skin2) + e(145, 108, 7, 10, g.skin2);
    if (g.style !== 'hijab') s += hairFor(g.style, g.hair, g.hair2);
    s += e(82, 102, 7, 8, '#fff') + e(118, 102, 7, 8, '#fff') + c(83, 103, 3.8, '#2a2320') + c(119, 103, 3.8, '#2a2320');
    s += p('M 86 134 q 14 9 28 0', 'none', ' stroke="#8c3b37" stroke-width="4" stroke-linecap="round"');
    return svgFit('28 40 144 128', s, 'portrait') .replace('<svg ', '<svg width="' + (size || 40) + '" height="' + (size || 40) + '" ');
  };

  /* ============================================================
     SETS — three depth layers for the CSS-3D stage (1600x900)
     ============================================================ */
  var SETS = {};

  SETS.classroom = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#dfe8ee');
      s += r(0, 0, 1600, 560, '#cfdde6');
      s += r(0, 548, 1600, 20, '#b6c7d2');
      /* whiteboard */
      s += r(140, 120, 620, 330, '#f8fafb', 10) + r(140, 120, 620, 330, 'none', 10).replace('fill="none"', 'fill="none" stroke="#9fb3bf" stroke-width="8"');
      s += p('M 210 200 h 150 M 210 240 h 230 M 210 280 h 180', 'none', ' stroke="#2f8f7e" stroke-width="7" stroke-linecap="round"');
      s += c(520, 220, 26, 'none').replace('fill="none"', 'fill="none" stroke="#b4531a" stroke-width="6"');
      s += c(620, 300, 26, 'none').replace('fill="none"', 'fill="none" stroke="#b4531a" stroke-width="6"');
      s += c(620, 160, 26, 'none').replace('fill="none"', 'fill="none" stroke="#b4531a" stroke-width="6"');
      s += p('M 546 220 L 594 300 M 546 212 L 596 170', 'none', ' stroke="#b4531a" stroke-width="5"');
      s += t(430, 410, 26, 'OUR NETWORK', '#0b5f6b', 'middle', 700);
      /* window */
      s += r(900, 130, 540, 310, '#9ed3e8', 10);
      s += r(900, 130, 540, 310, 'none', 10).replace('fill="none"', 'fill="none" stroke="#8aa3b0" stroke-width="12"');
      s += p('M 1170 130 v 310 M 900 285 h 540', 'none', ' stroke="#8aa3b0" stroke-width="10"');
      s += c(1330, 210, 42, '#fff6cf');
      s += p('M 920 400 q 110 -70 220 -10 q 90 -50 180 10 Z', '#bfe3c9');
      return svg('0 0 1600 900', s);
    },
    mid: function () {
      var s = '';
      for (var i = 0; i < 3; i++) {
        var x = 110 + i * 520;
        s += r(x, 640, 400, 26, '#c9a97e', 6) + r(x + 20, 666, 24, 120, '#8e7a5c') + r(x + 356, 666, 24, 120, '#8e7a5c');
      }
      return svg('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(0, 800, 1600, 100, '#a8826088');
      s += r(-20, 790, 1640, 30, '#b99468', 8);
      return svg('0 0 1600 900', s);
    }
  };

  SETS.cyberlab = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#121a21');
      s += r(0, 0, 1600, 600, '#19242e');
      /* server racks */
      for (var k = 0; k < 3; k++) {
        var rx = 90 + k * 230;
        s += r(rx, 120, 170, 460, '#0f171e', 8) + r(rx, 120, 170, 460, 'none', 8).replace('fill="none"', 'fill="none" stroke="#2b3a46" stroke-width="5"');
        for (var u = 0; u < 9; u++) {
          s += r(rx + 12, 140 + u * 48, 146, 34, '#223240', 4);
          s += c(rx + 28, 157 + u * 48, 5, (u + k) % 3 === 0 ? '#49d19a' : ((u + k) % 3 === 1 ? '#3fb3c6' : '#e5a84a'));
          s += c(rx + 44, 157 + u * 48, 5, '#2b3a46');
          s += r(rx + 70, 150 + u * 48, 76, 16, '#1a2730', 3);
        }
      }
      /* SILENCE booth */
      s += r(880, 150, 300, 430, '#16222b', 10) + r(880, 150, 300, 430, 'none', 10).replace('fill="none"', 'fill="none" stroke="#38505e" stroke-width="6"');
      s += r(930, 190, 200, 60, '#0b5f6b', 8) + t(1030, 232, 30, 'SILENCE', '#fff', 'middle', 800);
      s += r(910, 290, 240, 240, '#1d2b36', 6);
      /* LAB HOURS sign */
      s += r(1250, 160, 290, 230, '#fdf6d8', 8);
      s += t(1395, 200, 26, 'LAB HOURS', '#8c3f14', 'middle', 800);
      s += t(1275, 248, 21, 'Mon-Fri 8am-10pm', '#3b434e', 'start', 600);
      s += t(1275, 288, 21, 'Sat  9am-6pm', '#3b434e', 'start', 600);
      s += t(1275, 328, 21, 'Sunday CLOSED', '#b3261e', 'start', 700);
      s += r(0, 580, 1600, 20, '#0b1218');
      return svg('0 0 1600 900', s);
    },
    mid: function () {
      var s = '';
      for (var i = 0; i < 3; i++) {
        var x = 120 + i * 500;
        s += r(x, 600, 420, 22, '#2b3a46', 6) + r(x + 24, 622, 20, 150, '#1b2730') + r(x + 376, 622, 20, 150, '#1b2730');
        s += r(x + 120, 470, 190, 118, '#0d141a', 8) + r(x + 130, 480, 170, 98, '#0f2d38', 4);
        s += p('M ' + (x + 142) + ' 540 h 40 M ' + (x + 142) + ' 516 h 90 M ' + (x + 142) + ' 492 h 60', 'none', ' stroke="#49d19a" stroke-width="5" stroke-linecap="round"');
        s += r(x + 198, 588, 34, 14, '#1b2730');
      }
      return svg('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(0, 810, 1600, 90, '#0a1016cc');
      s += p('M -10 830 q 300 -70 620 10 q 320 80 1000 -20 v 100 h -1640 Z', '#101a22');
      return svg('0 0 1600 900', s);
    }
  };

  SETS.office = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#e7ded3');
      s += r(0, 0, 1600, 600, '#efe7dc');
      /* window */
      s += r(960, 120, 520, 330, '#a9d8ea', 8) + r(960, 120, 520, 330, 'none', 8).replace('fill="none"', 'fill="none" stroke="#9c8f80" stroke-width="12"');
      s += p('M 1220 120 v 330', 'none', ' stroke="#9c8f80" stroke-width="10"');
      s += r(990, 330, 60, 120, '#7fa8bd') + r(1070, 300, 70, 150, '#6d94a8') + r(1260, 320, 80, 130, '#7fa8bd');
      /* pathway poster */
      s += '<g id="pathway-poster" opacity="0">';
      s += r(150, 120, 420, 360, '#fff', 10) + r(150, 120, 420, 360, 'none', 10).replace('fill="none"', 'fill="none" stroke="#0b5f6b" stroke-width="8"');
      s += t(360, 176, 28, 'CYBER PATHWAYS', '#0b5f6b', 'middle', 800);
      var labs = ['Digital literacy', 'IT fundamentals', 'Certificate', 'College / University', 'Bootcamp'];
      for (var i = 0; i < 5; i++) {
        s += r(180, 200 + i * 52, 360 - i * 10, 40, i % 2 ? '#dff0f3' : '#fbeee3', 6);
        s += t(196, 227 + i * 52, 20, labs[i], '#3b434e', 'start', 600);
      }
      s += '</g>';
      /* diploma */
      s += r(640, 150, 230, 170, '#fff', 6) + r(640, 150, 230, 170, 'none', 6).replace('fill="none"', 'fill="none" stroke="#c9a227" stroke-width="7"');
      s += t(755, 220, 20, 'CERTIFIED', '#8c3f14', 'middle', 800) + t(755, 252, 16, 'SECURITY MENTOR', '#5b6470', 'middle', 600);
      s += r(0, 592, 1600, 18, '#cbbda9');
      return svg('0 0 1600 900', s);
    },
    mid: function () {
      var s = r(180, 650, 1240, 28, '#8b5e3c', 8);
      s += r(220, 678, 34, 180, '#6f492d') + r(1346, 678, 34, 180, '#6f492d');
      return svg('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(-20, 700, 1640, 200, '#a9714a');
      s += r(-20, 690, 1640, 26, '#c08a5e', 8);
      /* name placard */
      s += '<g transform="translate(980,700)">';
      s += p('M 0 0 h 300 l -22 -58 h -256 Z', '#f4efe6') + p('M 0 0 h 300 l -8 10 h -284 Z', '#d8cfc0');
      s += t(150, -34, 21, 'JOSEPH WESTON', '#171a1f', 'middle', 800);
      s += t(150, -12, 16, 'CYBER CAREER MENTOR', '#b4531a', 'middle', 700);
      s += '</g>';
      /* folder */
      s += p('M 150 700 h 250 l 18 -46 h -250 Z', '#e3b04b') + p('M 168 654 h 232 l -10 -14 h -222 Z', '#c9962f');
      return svg('0 0 1600 900', s);
    }
  };

  SETS.soc = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#0b1016');
      s += r(0, 0, 1600, 620, '#101922');
      /* video wall */
      s += r(120, 70, 1360, 420, '#070c11', 12) + r(120, 70, 1360, 420, 'none', 12).replace('fill="none"', 'fill="none" stroke="#223240" stroke-width="7"');
      var tiles = [[150, 100, 420, 190], [590, 100, 420, 190], [1030, 100, 420, 190], [150, 305, 640, 160], [810, 305, 640, 160]];
      var cols = ['#0f3038', '#13232e', '#0f3028', '#182030', '#101f2c'];
      for (var i = 0; i < tiles.length; i++) {
        var q = tiles[i];
        s += r(q[0], q[1], q[2], q[3], cols[i], 6);
        if (i === 0) {
          var pts = '';
          for (var x = 0; x <= 10; x++) pts += (q[0] + 20 + x * 38) + ',' + (q[1] + 150 - Math.abs(Math.sin(x * 1.1)) * 100) + ' ';
          s += '<polyline points="' + pts + '" fill="none" stroke="#49d19a" stroke-width="4"/>';
        } else if (i === 1) {
          for (var b = 0; b < 8; b++) s += r(q[0] + 24 + b * 48, q[1] + 160 - (18 + (b * 29 % 110)), 32, 18 + (b * 29 % 110), b === 5 ? '#e5564a' : '#3fb3c6', 3);
        } else if (i === 2) {
          s += c(q[0] + 210, q[1] + 95, 62, 'none').replace('fill="none"', 'fill="none" stroke="#2b3a46" stroke-width="12"');
          s += p('M ' + (q[0] + 210) + ' ' + (q[1] + 33) + ' a 62 62 0 0 1 48 100', 'none', ' stroke="#e5a84a" stroke-width="12"');
          s += t(q[0] + 210, q[1] + 104, 30, '72%', '#e5a84a', 'middle', 800);
        } else {
          for (var row = 0; row < 4; row++) {
            s += r(q[0] + 18, q[1] + 14 + row * 36, q[2] - 36, 26, '#1b2a36', 4);
            s += c(q[0] + 36, q[1] + 27 + row * 36, 7, row === 1 ? '#e5564a' : (row === 2 ? '#e5a84a' : '#49d19a'));
            s += r(q[0] + 56, q[1] + 20 + row * 36, 120 + row * 40, 12, '#2b3a46', 3);
          }
        }
      }
      s += t(800, 540, 24, 'SECURITY OPERATIONS CENTRE', '#3fb3c6', 'middle', 800);
      s += r(0, 600, 1600, 22, '#070c11');
      return svg('0 0 1600 900', s);
    },
    mid: function () {
      var s = '';
      for (var i = 0; i < 4; i++) {
        var x = 60 + i * 390;
        s += r(x, 640, 330, 22, '#1d2a35', 6) + r(x + 18, 662, 18, 150, '#141f28') + r(x + 294, 662, 18, 150, '#141f28');
        s += r(x + 80, 520, 170, 106, '#070c11', 6) + r(x + 88, 528, 154, 90, '#0f2d38', 3);
        s += p('M ' + (x + 100) + ' 580 h 50 M ' + (x + 100) + ' 560 h 90 M ' + (x + 100) + ' 600 h 34', 'none', ' stroke="#3fb3c6" stroke-width="4" stroke-linecap="round"');
      }
      return svg('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(-20, 790, 1640, 110, '#0a0f14');
      s += r(-20, 778, 1640, 26, '#16222c', 8);
      /* mug + headset */
      s += r(120, 726, 54, 52, '#b4531a', 6) + p('M 174 740 q 26 12 0 26', 'none', ' stroke="#b4531a" stroke-width="8"');
      s += p('M 1380 756 q 46 -56 92 0', 'none', ' stroke="#2b3a46" stroke-width="12" stroke-linecap="round"') + r(1366, 752, 24, 34, '#2b3a46', 6) + r(1462, 752, 24, 34, '#2b3a46', 6);
      return svg('0 0 1600 900', s);
    }
  };

  SETS.newsdesk = {
    back: function () {
      var s = r(0, 0, 1600, 900, '#eae2d6');
      s += r(0, 0, 1600, 600, '#f3ece1');
      s += r(120, 100, 480, 340, '#fff', 6) + r(120, 100, 480, 340, 'none', 6).replace('fill="none"', 'fill="none" stroke="#c7b9a4" stroke-width="10"');
      s += t(360, 170, 34, 'THE CITY HERALD', '#0b5f6b', 'middle', 800);
      s += p('M 160 210 h 400 M 160 250 h 400 M 160 290 h 300 M 160 330 h 360 M 160 370 h 240', 'none', ' stroke="#cfc4b2" stroke-width="9" stroke-linecap="round"');
      s += r(900, 120, 540, 320, '#a9d8ea', 8) + r(900, 120, 540, 320, 'none', 8).replace('fill="none"', 'fill="none" stroke="#b0a398" stroke-width="12"');
      s += r(0, 592, 1600, 18, '#d4c7b2');
      return svg('0 0 1600 900', s);
    },
    mid: function () {
      var s = r(140, 650, 1320, 26, '#7d5a3c', 8) + r(190, 676, 30, 180, '#63462e') + r(1380, 676, 30, 180, '#63462e');
      s += r(1050, 520, 230, 130, '#2b3a46', 8) + r(1062, 532, 206, 106, '#0f2d38', 4);
      return svg('0 0 1600 900', s);
    },
    fore: function () {
      var s = r(-20, 700, 1640, 200, '#9a7049') + r(-20, 690, 1640, 26, '#b4885c', 8);
      for (var i = 0; i < 4; i++) s += r(180 + i * 9, 640 - i * 7, 230, 16, '#fdfaf3', 3);
      return svg('0 0 1600 900', s);
    }
  };

  A.set = function (name) { return SETS[name] || SETS.office; };
  A.setNames = Object.keys(SETS);

  /* ============================================================
     SPOT ILLUSTRATIONS — study-skill scenes, pathway tiles, cards
     ============================================================ */
  function frame(body, bg) { return svgFit('0 0 200 140', r(0, 0, 200, 140, bg || '#eef4f7', 10) + body); }

  /* ------------------------------------------------------------
     The nine study skills.

     These nine are the only pictures in the course a learner has to
     READ rather than just look at: in Lesson 1 the word is dropped
     straight onto the drawing, with no sentence underneath saying
     what the drawing shows. So each one leads with one unmistakable
     object doing one thing — a pencil touching the page, a finger on
     the lips, a pause button beside a hot drink — and the small
     supporting detail comes second.
     ------------------------------------------------------------ */
  var SPOT = {
    'take-notes': function () {
      /* the pencil is mid-word: three lines written, the fourth half done */
      var s = r(26, 18, 120, 108, '#fff', 7) + r(26, 18, 120, 15, '#0b5f6b', 7);
      for (var i = 0; i < 4; i++) s += c(40 + i * 28, 26, 4, '#fdf6e6');
      s += p('M 40 56 h 92 M 40 74 h 92 M 40 92 h 92', 'none', ' stroke="#9fb3bf" stroke-width="6" stroke-linecap="round"');
      s += p('M 40 110 h 42', 'none', ' stroke="#0b5f6b" stroke-width="6" stroke-linecap="round"');
      s += p('M 92 118 l 62 -62 l 18 18 l -62 62 Z', '#e3b04b');
      s += p('M 92 118 l 11 -11 l 7 7 Z', '#2f2a28');
      s += p('M 154 56 l 18 18 l 9 -9 l -18 -18 Z', '#e5564a');
      return frame(s, '#e8f1f5');
    },
    'quiet-place': function () {
      /* the sign and the finger on the lips, nothing else */
      var s = r(18, 14, 164, 112, '#16222b', 10) + r(32, 24, 136, 40, '#e5564a', 6);
      s += t(100, 52, 21, 'SILENCE', '#fff', 'middle', 800);
      s += c(96, 92, 25, '#e8b793');
      s += p('M 83 79 q 7 -5 13 -1 M 97 78 q 7 -4 13 1', 'none', ' stroke="#8c6a52" stroke-width="3.5" stroke-linecap="round"');
      s += c(87, 87, 3.5, '#2f2a28') + c(105, 87, 3.5, '#2f2a28');
      s += e(96, 103, 5, 4, '#8c3b37');
      /* shh: the hand comes in from the side and one finger stands up
         in front of the lips, so it reads as a hand and not as a chin */
      s += e(116, 116, 15, 10, '#efc9ab');
      s += p('M 104 114 L 100 95', 'none', ' stroke="#efc9ab" stroke-width="11" stroke-linecap="round"');
      s += p('M 104 114 L 100 95', 'none', ' stroke="#b07f5c" stroke-width="11" stroke-linecap="round" stroke-opacity="0.22"');
      return frame(s, '#dfe8ee');
    },
    'do-research': function () {
      /* a big magnifier over the open report, with the books behind it */
      var s = r(16, 100, 168, 22, '#8b5e3c', 5);
      s += r(22, 56, 38, 44, '#3a6ea8', 3) + r(64, 42, 38, 58, '#b4531a', 3);
      s += p('M 30 70 h 22 M 72 56 h 22', 'none', ' stroke="#ffffffbb" stroke-width="5" stroke-linecap="round"');
      s += r(102, 48, 76, 52, '#fff', 4);
      s += p('M 110 62 h 60 M 110 92 h 42', 'none', ' stroke="#9fb3bf" stroke-width="5" stroke-linecap="round"');
      s += p('M 112 77 h 36', 'none', ' stroke="#0b5f6b" stroke-width="6" stroke-linecap="round"');
      s += '<circle cx="130" cy="77" r="27" fill="#ffffff55" stroke="#0b5f6b" stroke-width="8"/>';
      s += p('M 149 96 l 20 20', 'none', ' stroke="#0b5f6b" stroke-width="13" stroke-linecap="round"');
      return frame(s, '#f3ece1');
    },
    'take-break': function () {
      /* the work is paused and the drink is hot */
      var s = c(50, 48, 26, '#2f8f7e') + r(42, 38, 7, 20, '#fff', 2) + r(53, 38, 7, 20, '#fff', 2);
      s += p('M 132 48 q 11 -13 0 -26 M 150 48 q 11 -13 0 -26', 'none', ' stroke="#9fb3bf" stroke-width="5" stroke-linecap="round"');
      s += r(112, 60, 54, 48, '#fff', 7) + r(112, 60, 54, 9, '#e5564a', 4);
      s += '<path d="M 166 72 h 10 a 13 13 0 0 1 0 26 h -10" fill="none" stroke="#fff" stroke-width="8"/>';
      s += r(24, 84, 76, 12, '#3a5160', 3) + r(20, 96, 84, 12, '#2b3a46', 4);
      s += r(16, 112, 168, 10, '#8b5e3c', 4);
      return frame(s, '#fdf6e6');
    },
    'search-online': function () {
      /* a search box with a word being typed into it */
      var s = r(14, 14, 172, 92, '#2b3a46', 8) + r(22, 22, 156, 76, '#0f2d38', 4);
      s += r(34, 32, 132, 26, '#fff', 13);
      s += '<circle cx="50" cy="45" r="8" fill="none" stroke="#0b5f6b" stroke-width="4"/>';
      s += p('M 56 51 l 8 8', 'none', ' stroke="#0b5f6b" stroke-width="4" stroke-linecap="round"');
      s += t(70, 51, 15, 'phishing', '#2b3a46', 'start', 700);
      s += r(154, 37, 3, 16, '#2b3a46');
      s += p('M 34 72 h 124 M 34 86 h 84', 'none', ' stroke="#3fb3c6" stroke-width="7" stroke-linecap="round"');
      s += r(78, 106, 44, 10, '#2b3a46', 3) + r(62, 116, 76, 8, '#2b3a46', 4);
      return frame(s, '#dfe8ee');
    },
    'organize': function () {
      /* four labelled binders, all standing on the shelf */
      var s = r(14, 104, 172, 16, '#8b5e3c', 4);
      var bx = [[22, 34, 70, '#3a6ea8'], [66, 24, 80, '#b4531a'], [110, 40, 64, '#2f8f7e'], [150, 30, 74, '#7a4b9e']];
      for (var i = 0; i < 4; i++) {
        s += r(bx[i][0], bx[i][1], 34, bx[i][2], bx[i][3], 4);
        s += r(bx[i][0] + 5, bx[i][1] + 13, 24, 11, '#ffffffcc', 3);
        s += r(bx[i][0] + 5, bx[i][1] + 30, 17, 7, '#ffffff77', 3);
      }
      return frame(s, '#f0f8f9');
    },
    'schedule': function () {
      /* a named plan with one day already ticked off */
      var s = r(18, 14, 164, 112, '#fdf6e6', 8) + r(18, 14, 164, 26, '#b4531a', 8);
      s += t(100, 33, 14, 'MY STUDY WEEK', '#fff', 'middle', 800);
      var days = ['MON', 'TUE', 'WED', 'THU'];
      for (var i = 0; i < 4; i++) {
        s += t(30, 61 + i * 20, 13, days[i], '#8c3f14', 'start', 800);
        s += r(74, 50 + i * 20, 94, 13, i === 1 ? '#2f8f7e' : '#cfc4b2', 4);
      }
      s += p('M 80 56 l 6 6 l 11 -12', 'none', ' stroke="#1b7a45" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"');
      return frame(s, '#f3ece1');
    },
    'memorize': function () {
      /* a stack of flashcards and a go-round-again arrow */
      var s = r(28, 22, 100, 68, '#cfe3e8', 8) + r(22, 30, 100, 68, '#e6eff2', 8) + r(16, 38, 100, 68, '#fff', 8);
      s += t(66, 72, 17, 'phishing', '#0b5f6b', 'middle', 800);
      s += r(30, 84, 72, 7, '#cfd8de', 3);
      /* round and round until it is yours */
      s += '<path d="M 163 51 A 22 22 0 1 1 141 51" fill="none" stroke="#2f8f7e" stroke-width="8" stroke-linecap="round"/>';
      s += p('M 163 38 L 176 52 L 155 56 Z', '#2f8f7e');
      return frame(s, '#e8f1f5');
    },
    'outline': function () {
      /* a plan with levels: I, II, III and their indented sub-points */
      var s = r(24, 14, 152, 112, '#fff', 6) + r(24, 14, 152, 12, '#2f8f7e', 6);
      var num = ['I.', 'II.', 'III.'];
      for (var i = 0; i < 3; i++) {
        var y = 44 + i * 30;
        s += t(36, y, 14, num[i], '#b4531a', 'start', 800);
        s += r(62, y - 11, 86, 9, '#b4531a', 3);
        s += t(74, y + 16, 11, 'A.', '#5b6470', 'start', 700);
        s += r(92, y + 8, 56, 6, '#cfd8de', 3);
      }
      return frame(s, '#f0f8f9');
    },
    'phish-email': function () {
      return frame(r(24, 34, 152, 76, '#fff', 6) + p('M 24 40 l 76 48 l 76 -48', 'none', ' stroke="#e5564a" stroke-width="6"') +
        c(152, 44, 18, '#e5564a') + t(152, 50, 20, '!', '#fff', 'middle', 800) +
        t(100, 128, 14, 'Suspicious email', '#b3261e', 'middle', 700), '#fdeceb');
    },
    'mentor-badge': function () {
      return frame(r(40, 26, 120, 88, '#fff', 8) + r(40, 26, 120, 24, '#0b5f6b', 8) +
        c(70, 74, 18, '#e8b793') + p('M 56 74 q 14 -16 28 0', 'none', ' stroke="#8e949b" stroke-width="6"') +
        t(100, 44, 12, 'MENTOR', '#fff', 'middle', 800) +
        r(96, 64, 54, 7, '#cfd8de', 3) + r(96, 78, 42, 7, '#cfd8de', 3) + r(96, 92, 48, 7, '#2f8f7e', 3), '#dff0f3');
    },
    'password-manager': function () {
      return frame(r(56, 46, 88, 70, '#0b5f6b', 8) + p('M 76 46 v -14 a 24 24 0 0 1 48 0 v 14', 'none', ' stroke="#0b5f6b" stroke-width="10"') +
        c(100, 76, 9, '#fff') + r(96, 80, 8, 20, '#fff', 3), '#dff0f3');
    },
    'two-factor': function () {
      return frame(r(60, 24, 80, 100, '#2b3a46', 10) + r(68, 36, 64, 72, '#0f2d38', 4) +
        t(100, 80, 26, '4821', '#49d19a', 'middle', 800) + c(100, 116, 5, '#9fb3bf'), '#e8f1f5');
    },
    'backup': function () {
      return frame(r(30, 70, 60, 44, '#3a6ea8', 5) + r(110, 70, 60, 44, '#2f8f7e', 5) +
        p('M 94 50 q 6 -24 36 -24 q 30 0 36 24', 'none', ' stroke="#0b5f6b" stroke-width="6"') +
        p('M 160 44 l 6 10 l -12 0 Z', '#0b5f6b') +
        p('M 40 86 h 40 M 120 86 h 40', 'none', ' stroke="#ffffff99" stroke-width="5"'), '#f0f8f9');
    },
    'library': function () {
      return frame(r(22, 90, 156, 30, '#8b5e3c', 4) +
        r(30, 40, 20, 50, '#3a6ea8', 2) + r(54, 32, 18, 58, '#b4531a', 2) + r(76, 44, 22, 46, '#2f8f7e', 2) +
        r(102, 36, 18, 54, '#7a4b9e', 2) + r(124, 48, 20, 42, '#c9a227', 2) + r(148, 38, 20, 52, '#4a5fb5', 2), '#f3ece1');
    },
    'handover': function () {
      return frame(c(62, 70, 22, '#c98b63') + c(138, 70, 22, '#efc9ab') +
        p('M 86 92 q 14 10 28 0', 'none', ' stroke="#0b5f6b" stroke-width="7" stroke-linecap="round"') +
        r(40, 100, 44, 24, '#3a6ea8', 4) + r(116, 100, 44, 24, '#2f8f7e', 4) +
        t(100, 134, 12, 'shift handover', '#5b6470', 'middle', 700), '#e8f1f5');
    },
    'ctf': function () {
      return frame(p('M 60 110 v -84', 'none', ' stroke="#5b6470" stroke-width="8" stroke-linecap="round"') +
        p('M 64 30 q 50 -16 76 8 q -26 24 -76 10 Z', '#e5564a') +
        r(40, 110, 48, 10, '#5b6470', 4) +
        t(130, 108, 15, '90%', '#1b7a45', 'middle', 800), '#e4f6ec');
    }
  };

  /* pathway tiles (seven) */
  function pathwayTile(label, colour, glyph) {
    var s = r(0, 0, 200, 120, colour, 0);
    s += glyph;
    return svgFit('0 0 200 120', s);
  }
  SPOT['pw-digital'] = function () {
    return pathwayTile('', '#dff0f3', r(58, 34, 84, 56, '#2b3a46', 5) + r(66, 42, 68, 40, '#3fb3c6', 3) + r(84, 92, 32, 7, '#2b3a46', 3));
  };
  SPOT['pw-itfund'] = function () {
    return pathwayTile('', '#fbeee3', r(50, 32, 48, 56, '#b4531a', 4) + r(104, 32, 48, 56, '#d2691e', 4) +
      p('M 62 52 h 24 M 62 66 h 18 M 116 52 h 24 M 116 66 h 18', 'none', ' stroke="#ffffffcc" stroke-width="5"'));
  };
  SPOT['pw-highschool'] = function () {
    return pathwayTile('', '#e8f1f5', p('M 100 24 l 70 30 l -70 30 l -70 -30 Z', '#3a6ea8') +
      p('M 150 44 v 36', 'none', ' stroke="#b4531a" stroke-width="6"') + r(60, 70, 80, 26, '#2b5586', 3));
  };
  SPOT['pw-adult'] = function () {
    return pathwayTile('', '#f0f8f9', c(70, 56, 20, '#efc9ab') + c(126, 56, 20, '#c98b63') +
      p('M 44 96 q 26 -20 52 0 M 100 96 q 26 -20 52 0', 'none', ' stroke="#2f8f7e" stroke-width="14" stroke-linecap="round"'));
  };
  SPOT['pw-college'] = function () {
    return pathwayTile('', '#dff0f3', r(40, 48, 120, 48, '#0b5f6b', 4) + p('M 36 48 l 64 -26 l 64 26 Z', '#0e7684') +
      r(62, 66, 16, 30, '#dff0f3', 2) + r(92, 66, 16, 30, '#dff0f3', 2) + r(122, 66, 16, 30, '#dff0f3', 2));
  };
  SPOT['pw-university'] = function () {
    return pathwayTile('', '#efe7f5', p('M 100 26 l 72 26 l -72 26 l -72 -26 Z', '#5d3a7a') +
      r(88, 62, 24, 34, '#7a4b9e', 3) + p('M 164 54 v 30', 'none', ' stroke="#c9a227" stroke-width="6"') + c(164, 88, 7, '#c9a227'));
  };
  SPOT['pw-bootcamp'] = function () {
    /* a five-point star sized to the 200x120 tile — the previous one
       ran 28 units past the bottom edge and lost two of its points */
    return pathwayTile('', '#fdeceb',
      p('M 100 22 L 110.6 51.4 L 141.8 52.4 L 117.1 71.6 L 125.9 101.6 ' +
        'L 100 84 L 74.1 101.6 L 82.9 71.6 L 58.2 52.4 L 89.4 51.4 Z', '#e5564a') +
      t(100, 73, 20, '</>', '#fff', 'middle', 800));
  };

  A.spot = function (name) { return (SPOT[name] || SPOT['take-notes'])(); };
  A.hasSpot = function (name) { return !!SPOT[name]; };
  A.spotNames = Object.keys(SPOT);

  /* ============================================================
     DIORAMAS — big clickable illustrations for hotspot exercises
     ============================================================ */
  var DIO = {};

  /* Cyber Lab study-skills diorama: nine numbered vignettes.

     The nine are drawn ONCE, as SPOT illustrations, and the diorama
     reuses them. They used to be drawn twice — once here and once in
     SPOT — and when the SPOT nine were redrawn to be clearer, this
     half kept the old pictures. A learner then met one set in the
     Lesson 1 §1 picture grid and a different set in the Lesson 1 §2
     drill, for the same nine words. */
  var LAB_NINE = ['take-notes', 'quiet-place', 'do-research', 'take-break', 'search-online',
    'organize', 'schedule', 'memorize', 'outline'];
  DIO['studylab'] = function () {
    var s = r(0, 0, 1200, 760, '#f3f7fa', 14);
    var blobs = ['#dff0f3', '#fbeee3', '#e8f1f5', '#f0f8f9', '#fdf6e6', '#efe7f5', '#dff0f3', '#fbeee3', '#e8f1f5'];
    for (var i = 0; i < 9; i++) {
      var col = i % 3, row = (i / 3) | 0;
      var cx = 200 + col * 400, cy = 150 + row * 240;
      s += e(cx, cy, 168, 114, blobs[i]);
      /* each spot is a 200x140 drawing; place it at 1.5x inside the blob */
      var inner = SPOT[LAB_NINE[i]]()
        .replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
      s += '<g transform="translate(' + (cx - 150) + ',' + (cy - 105) + ') scale(1.5)">' + inner + '</g>';
    }
    return svgFit('0 0 1200 760', s);
  };

  /* Cyber Lab people diorama — five named people, NOW vs 10:30 */
  DIO['lab-people'] = function (past) {
    var s = r(0, 0, 1200, 620, '#111a21', 12);
    s += r(0, 0, 1200, 400, '#19242e');
    for (var k = 0; k < 4; k++) {
      var rx = 40 + k * 160;
      s += r(rx, 40, 120, 330, '#0f171e', 6) + r(rx, 40, 120, 330, 'none', 6).replace('fill="none"', 'fill="none" stroke="#2b3a46" stroke-width="4"');
      for (var u = 0; u < 7; u++) { s += r(rx + 8, 52 + u * 45, 104, 30, '#223240', 3); s += c(rx + 22, 67 + u * 45, 4, (u + k) % 2 ? '#49d19a' : '#3fb3c6'); }
    }
    /* lab hours */
    s += r(900, 50, 260, 180, '#fdf6d8', 8);
    s += t(1030, 86, 22, 'LAB HOURS', '#8c3f14', 'middle', 800);
    s += t(920, 128, 18, 'Mon-Fri 8am-10pm', '#3b434e', 'start', 600);
    s += t(920, 162, 18, 'Sat 9am-6pm', '#3b434e', 'start', 600);
    s += t(920, 196, 18, 'Sunday CLOSED', '#b3261e', 'start', 700);
    s += r(0, 396, 1200, 14, '#0b1218');
    /* benches */
    s += r(60, 470, 420, 18, '#2b3a46', 5) + r(560, 470, 300, 18, '#2b3a46', 5);
    /* people */
    function pers(x, y, rig, sc) { return '<g transform="translate(' + x + ',' + y + ') scale(' + sc + ')">' + A.actor('dio' + x, rig) + '</g>'; }
    s += pers(70, 250, 'f-20s-a', 0.62);
    s += pers(260, 250, 'm-20s-b', 0.62);
    s += pers(450, 240, 'm-20s-a', 0.64);
    s += pers(640, 250, 'f-30s-h', 0.62);
    s += pers(900, 250, 'm-30s-a', 0.62);
    /* props differ between NOW and 10:30 */
    if (past) {
      s += r(146, 420, 60, 42, '#fff', 3) + t(176, 448, 14, 'tissue', '#9fb3bf', 'middle', 600);
      s += r(336, 408, 70, 52, '#0f2d38', 4) + p('M 350 430 h 40', 'none', ' stroke="#49d19a" stroke-width="5"');
      s += r(520, 360, 76, 54, '#b4531a', 4) + t(558, 392, 15, 'box', '#fff', 'middle', 700);
      s += r(712, 418, 70, 46, '#3a6ea8', 4);
      s += r(972, 414, 74, 48, '#2f8f7e', 4);
    } else {
      s += r(146, 420, 56, 40, '#fff', 3);
      s += r(336, 414, 70, 48, '#1b2730', 4);
      s += r(520, 404, 70, 54, '#223240', 4) + p('M 534 426 h 42 M 534 442 h 28', 'none', ' stroke="#3fb3c6" stroke-width="5"');
      s += r(712, 414, 74, 50, '#fdf6e6', 4) + p('M 724 432 h 50 M 724 446 h 34', 'none', ' stroke="#cfc4b2" stroke-width="4"');
      s += r(960, 440, 86, 26, '#e3e9ed', 6) + t(1003, 458, 13, 'cast', '#5b6470', 'middle', 700);
    }
    return svgFit('0 0 1200 620', s);
  };

  /* Cohort day one — ten named people in a classroom */
  DIO['cohort'] = function () {
    var s = r(0, 0, 1200, 640, '#e3ecf1', 12);
    s += r(0, 0, 1200, 330, '#cfdde6');
    s += r(80, 50, 420, 230, '#f8fafb', 8) + r(80, 50, 420, 230, 'none', 8).replace('fill="none"', 'fill="none" stroke="#9fb3bf" stroke-width="6"');
    s += p('M 130 110 h 120 M 130 150 h 180 M 130 190 h 140', 'none', ' stroke="#2f8f7e" stroke-width="6" stroke-linecap="round"');
    s += t(290, 250, 20, 'WELCOME TO THE COHORT', '#0b5f6b', 'middle', 700);
    s += r(620, 60, 500, 220, '#9ed3e8', 8) + r(620, 60, 500, 220, 'none', 8).replace('fill="none"', 'fill="none" stroke="#8aa3b0" stroke-width="10"');
    s += c(1020, 130, 36, '#fff6cf');
    s += r(0, 322, 1200, 16, '#b6c7d2');
    /* desks */
    for (var row = 0; row < 2; row++) for (var col = 0; col < 5; col++) {
      var x = 50 + col * 230 - row * 40, y = 470 + row * 90;
      s += r(x, y, 170, 16, '#c9a97e', 4) + r(x + 12, y + 16, 14, 56, '#8e7a5c') + r(x + 144, y + 16, 14, 56, '#8e7a5c');
    }
    var cast = [['m-20s-a', 60, 330], ['f-20s-b', 290, 330], ['m-50s-a', 520, 330], ['m-20s-b', 750, 330], ['f-30s-a', 980, 330],
      ['f-50s-a', 20, 420], ['m-30s-a', 250, 420], ['f-30s-h', 480, 420], ['m-50s-b', 710, 420], ['f-20s-a', 940, 420]];
    for (var i2 = 0; i2 < cast.length; i2++) {
      s += '<g transform="translate(' + cast[i2][1] + ',' + cast[i2][2] + ') scale(0.56)">' + A.actor('co' + i2, cast[i2][0]) + '</g>';
    }
    return svgFit('0 0 1200 640', s);
  };

  /* Nervous group at a lab bench (Lesson 2 §1A) */
  DIO['first-day'] = function () {
    var s = r(0, 0, 1000, 560, '#eef4f7', 12);
    s += r(0, 0, 1000, 300, '#dde9ef');
    s += r(300, 40, 400, 220, '#2b3a46', 8) + r(312, 52, 376, 196, '#0f2d38', 4);
    s += p('M 340 100 l 160 96 l 160 -96', 'none', ' stroke="#e5564a" stroke-width="8"');
    s += r(340, 92, 320, 110, 'none', 4).replace('fill="none"', 'fill="none" stroke="#e5564a" stroke-width="8"');
    s += c(640, 112, 24, '#e5564a') + t(640, 121, 26, '!', '#fff', 'middle', 800);
    /* inside the screen, not under it: at y=290 the trainees were
       drawn over the top of this line and hid half of it */
    s += t(500, 232, 20, 'Is this email real?', '#9fd8e0', 'middle', 700);
    s += r(80, 400, 840, 20, '#c9a97e', 5);
    var who = [['m-50s-a', 70, 210, 'thinking'], ['f-30s-a', 300, 205, 'neutral'], ['f-20s-b', 530, 215, 'worried'], ['m-20s-b', 760, 208, 'neutral']];
    for (var i = 0; i < who.length; i++) {
      s += '<g transform="translate(' + who[i][1] + ',' + who[i][2] + ') scale(0.62)" data-mood="' + who[i][3] + '">' + A.actor('fd' + i, who[i][0]) + '</g>';
    }
    return svgFit('0 0 1000 560', s);
  };

  /* Mentor's office two-shot still (Lesson 4 §4A clue hunt) */
  DIO['mentor-office'] = function () {
    var s = r(0, 0, 1000, 560, '#efe7dc', 12);
    s += r(0, 0, 1000, 330, '#f3ece1');
    s += r(560, 50, 390, 220, '#a9d8ea', 6) + r(560, 50, 390, 220, 'none', 6).replace('fill="none"', 'fill="none" stroke="#9c8f80" stroke-width="9"');
    s += '<g id="clue-poster">' + r(70, 50, 300, 230, '#fff', 8) + r(70, 50, 300, 230, 'none', 8).replace('fill="none"', 'fill="none" stroke="#0b5f6b" stroke-width="6"') +
      t(220, 92, 20, 'CYBER PATHWAYS', '#0b5f6b', 'middle', 800);
    for (var i = 0; i < 4; i++) s += r(96, 110 + i * 38, 248 - i * 12, 26, i % 2 ? '#dff0f3' : '#fbeee3', 4);
    s += '</g>';
    s += '<g id="clue-bubble">' + p('M 400 60 q 150 -34 230 10 q 56 40 -10 78 q -70 34 -160 14 l -46 30 l 8 -40 q -56 -40 -22 -92 Z', '#fff') +
      t(520, 118, 18, 'Which career is right', '#3b434e', 'middle', 600) + t(520, 142, 18, 'for me?', '#3b434e', 'middle', 600) + '</g>';
    s += r(60, 400, 880, 18, '#8b5e3c', 5);
    s += '<g transform="translate(150,200) scale(0.72)">' + A.actor('mo1', 'm-50s-a') + '</g>';
    s += '<g transform="translate(620,205) scale(0.72)">' + A.actor('mo2', 'm-20s-a') + '</g>';
    s += '<g id="clue-placard">' + p('M 400 418 h 230 l -16 -42 h -198 Z', '#f4efe6') +
      t(515, 398, 16, 'JOSEPH WESTON', '#171a1f', 'middle', 800) + t(515, 412, 11, 'CYBER CAREER MENTOR', '#b4531a', 'middle', 700) + '</g>';
    s += '<g id="clue-folder">' + p('M 700 418 h 180 l 14 -36 h -180 Z', '#e3b04b') + '</g>';
    return svgFit('0 0 1000 560', s);
  };

  A.diorama = function (name, arg) { return (DIO[name] || DIO['studylab'])(arg); };

  /* ============================================================
     ICONS
     ============================================================ */
  var IC = {
    play: 'M8 5v14l11-7z', pause: 'M6 5h4v14H6zM14 5h4v14h-4z',
    replay: 'M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z',
    prev: 'M6 6h2v12H6zM20 6v12l-9-6z', next: 'M16 6h2v12h-2zM4 6l9 6-9 6z',
    loop: 'M7 7h8v3l5-4-5-4v3H5v6h2zm10 10H9v-3l-5 4 5 4v-3h10v-6h-2z',
    mic: 'M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11z',
    face: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-5 5h8a4 4 0 0 1-8 0z',
    mask: 'M4 8h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z',
    check: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
    x: 'M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z',
    bulb: 'M9 21h6v-1H9zm3-19A7 7 0 0 0 8 15h8a7 7 0 0 0-4-13zM9 17h6v2H9z',
    eye: 'M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z',
    print: 'M18 7H6V2h12zm1 2H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3zM8 20v-5h8v5z',
    moon: 'M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z',
    sun: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5h0v3h0zM12 19v3M2 12h3m14 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1',
    map: 'M9 3 3 5v16l6-2 6 2 6-2V3l-6 2zm0 2.2 6 2v13.6l-6-2z',
    sound: 'M4 9v6h4l5 5V4L8 9zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z',
    book: 'M4 4h7a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4zm16 0h-7a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h7z',
    lock: 'M7 10V7a5 5 0 0 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm2 0h6V7a3 3 0 0 0-6 0z',
    shield: 'M12 2 4 5v7c0 5 3.4 9.1 8 10 4.6-.9 8-5 8-10V5z'
  };
  A.icon = function (name, size, colour) {
    var d = IC[name] || IC.check;
    return '<svg width="' + (size || 18) + '" height="' + (size || 18) + '" viewBox="0 0 24 24" fill="' + (colour || 'currentColor') +
      '" aria-hidden="true"><path d="' + d + '"/></svg>';
  };

  A.logo = function () {
    return '<svg class="mark" viewBox="0 0 48 48" aria-hidden="true">' +
      '<path d="M24 3 6 10v13c0 11 7.6 20.4 18 22 10.4-1.6 18-11 18-22V10z" fill="#0b5f6b"/>' +
      '<path d="M24 3 6 10v13c0 11 7.6 20.4 18 22z" fill="#0e7684"/>' +
      '<path d="M16 24.5 21.5 30 33 18.5" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="24" cy="24" r="21" fill="none" stroke="#b4531a" stroke-width="2" opacity=".55"/></svg>';
  };

  /* learning pyramid */
  A.pyramid = function (rows) {
    var out = '<div class="pyramid">';
    var cols = ['#4a5fb5', '#3a6ea8', '#2f7f9e', '#1f7a8c', '#0e7684', '#b4531a'];
    for (var i = 0; i < rows.length; i++) {
      var pct = rows[i].pct, wpc = 22 + i * 14;
      out += '<div class="pyr-row" data-tier="' + i + '" tabindex="0" role="button">' +
        '<div class="bar" style="width:' + wpc + '%;--ins:' + (18 - i * 2) + 'px;background:' + cols[i] + '">' + pct + '%</div>' +
        '<div class="lab"><b>' + esc(rows[i].name) + '</b><span>' + esc(rows[i].eg) + '</span></div></div>';
    }
    return out + '</div>';
  };

  /* pie chart from [{label,value,colour}] */
  A.pie = function (data, size) {
    size = size || 220;
    var total = 0, i;
    for (i = 0; i < data.length; i++) total += Number(data[i].value) || 0;
    if (!total) return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="#dfe4ea" stroke-width="16"/></svg>';
    var cols = ['#0b5f6b', '#b4531a', '#2f8f7e', '#4a5fb5', '#c9a227', '#7a4b9e', '#e5564a'];
    var acc = 0, body = '';
    for (i = 0; i < data.length; i++) {
      var frac = (Number(data[i].value) || 0) / total;
      if (frac <= 0) continue;
      var a0 = acc * 2 * Math.PI - Math.PI / 2; acc += frac;
      var a1 = acc * 2 * Math.PI - Math.PI / 2;
      var x0 = 50 + 42 * Math.cos(a0), y0 = 50 + 42 * Math.sin(a0);
      var x1 = 50 + 42 * Math.cos(a1), y1 = 50 + 42 * Math.sin(a1);
      var big = frac > .5 ? 1 : 0;
      if (frac >= 0.9999) { body += '<circle cx="50" cy="50" r="42" fill="' + (data[i].colour || cols[i % cols.length]) + '"/>'; }
      else body += '<path d="M50 50 L ' + x0.toFixed(2) + ' ' + y0.toFixed(2) + ' A 42 42 0 ' + big + ' 1 ' + x1.toFixed(2) + ' ' + y1.toFixed(2) + ' Z" fill="' + (data[i].colour || cols[i % cols.length]) + '"/>';
    }
    body += '<circle cx="50" cy="50" r="20" fill="var(--surface)"/>';
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 100 100" role="img">' + body + '</svg>';
  };
  A.pieColours = ['#0b5f6b', '#b4531a', '#2f8f7e', '#4a5fb5', '#c9a227', '#7a4b9e', '#e5564a'];

  /* mouth-cam diagram for a given sound */
  A.mouthDiagram = function (sound) {
    var lip = sound === 'sh' ? 'M 40 92 q 60 -26 120 0 q -60 44 -120 0 Z'
      : sound === 'ch' ? 'M 48 94 q 52 -34 104 0 q -52 36 -104 0 Z'
        : 'M 46 92 q 54 -24 108 0 q -54 40 -108 0 Z';
    var tongue = sound === 'th' ? p('M 76 104 q 24 18 48 0 q -24 -8 -48 0 Z', '#d97d7d') : '';
    var s = r(0, 0, 200, 170, '#fdf1ea', 10);
    s += e(100, 92, 74, 58, '#e8b793');
    s += p(lip, '#8c3b37');
    s += p('M 56 84 q 44 -14 88 0', 'none', ' stroke="#fff" stroke-width="9" stroke-linecap="round"');
    s += p('M 62 104 q 38 12 76 0', 'none', ' stroke="#fff" stroke-width="7" stroke-linecap="round"');
    s += tongue;
    s += t(100, 158, 20, '/' + sound + '/', '#0b5f6b', 'middle', 800);
    return svgFit('0 0 200 170', s);
  };

  /* Danny's shift illustration keyed to an activity */
  A.shiftScene = function (act) {
    var s = r(0, 0, 420, 240, '#eef4f7', 10);
    var cap = act || 'sleep';
    var body = '';
    if (/brief/i.test(cap)) { body = r(40, 50, 150, 100, '#2b3a46', 6) + r(50, 60, 130, 76, '#0f2d38', 3) + p('M 66 110 h 60 M 66 92 h 94', 'none', ' stroke="#49d19a" stroke-width="5"') + '<g transform="translate(240,70) scale(0.42)">' + A.actor('ds1', 'm-20s-b') + '</g>'; }
    else if (/study/i.test(cap)) { body = r(60, 70, 120, 86, '#fff', 5) + p('M 78 96 h 84 M 78 116 h 60', 'none', ' stroke="#9fb3bf" stroke-width="5"') + '<g transform="translate(240,66) scale(0.44)">' + A.actor('ds2', 'm-20s-b') + '</g>'; }
    else if (/lunch/i.test(cap)) { body = c(120, 110, 44, '#fff') + c(120, 110, 30, '#e3b04b') + r(190, 80, 10, 64, '#9fb3bf', 3) + '<g transform="translate(250,66) scale(0.44)">' + A.actor('ds3', 'm-20s-b') + '</g>'; }
    else if (/SOC|work|shift/i.test(cap)) { body = r(30, 40, 180, 110, '#0b1016', 6) + r(40, 50, 160, 88, '#0f2d38', 3) + p('M 56 100 h 70 M 56 82 h 110 M 56 118 h 44', 'none', ' stroke="#3fb3c6" stroke-width="5"') + '<g transform="translate(250,66) scale(0.44)">' + A.actor('ds4', 'm-20s-b') + '</g>'; }
    else if (/dinner|TV/i.test(cap)) { body = r(40, 50, 170, 100, '#2b3a46', 6) + r(50, 60, 150, 78, '#4a5fb5', 3) + '<g transform="translate(250,70) scale(0.42)">' + A.actor('ds5', 'm-20s-b') + '</g>'; }
    else { body = r(60, 92, 200, 60, '#b7c7d2', 8) + c(118, 86, 30, '#e8b793') + p('M 180 70 q 10 -16 0 -28 M 204 76 q 10 -16 0 -28', 'none', ' stroke="#9fb3bf" stroke-width="6" stroke-linecap="round"'); }
    s += body;
    s += t(210, 224, 18, cap, '#0b5f6b', 'middle', 700);
    return svgFit('0 0 420 240', s);
  };

  /* ============================================================
     STILLS — one frame of a scene, used as a card illustration.

     Built from the same set layers and the same actor geometry as
     the live stage, so a still of a scene looks like that scene
     instead of like a different drawing of it.
     ============================================================ */
  var stillN = 0;
  A.still = function (sceneId, opts) {
    opts = opts || {};
    var sc = (CSB1.scenes || {})[sceneId];
    if (!sc) return A.diorama('studylab');
    var set = A.set(sc.set);
    var uid = 'st' + (++stillN);
    var keys = opts.only || Object.keys(sc.cast);
    var acts = '';
    keys.forEach(function (k) {
      var cst = sc.cast[k];
      if (!cst) return;
      acts += '<div class="still-a" style="left:' + (cst.at[0] * 100) + '%;width:' +
        ((cst.scale ? cst.scale * 26 : 26)) + '%;bottom:' + (cst.bottom === undefined ? -4 : cst.bottom) + '%">' +
        '<svg viewBox="0 0 200 300" style="width:100%;display:block;overflow:visible">' +
        A.actor(uid + '-' + k, cst.rig) + '</svg>' +
        (opts.names === false ? '' : '<span class="still-name">' + esc(cst.name || k) + '</span>') +
        '</div>';
    });
    return '<div class="still">' +
      '<div class="still-l">' + set.back() + '</div>' +
      '<div class="still-l">' + set.mid() + '</div>' +
      '<div class="still-l still-act">' + acts + '</div>' +
      '<div class="still-l">' + set.fore() + '</div>' +
      '</div>';
  };

  /* ============================================================
     FIGURES — diagrams that show the thing being taught.

     A grammar rule gets a picture of the rule, not decoration: the
     timeline is where the four tenses actually live, the mirror is
     why the short answer repeats the auxiliary, the machine is why
     "unhappy" is not "dishappy".
     ============================================================ */
  var FIG = {};

  /* ------------------------------------------------------------
     the four tenses on one timeline.

     The drawing carries one piece of grammar in its shapes, and it
     is the piece the four charts cannot show: a SIMPLE tense is a
     point, a CONTINUOUS tense is a bar. Simple present is many
     points because it keeps happening; simple past is one point
     because it finished. The two continuous tenses are bars
     because they take up time — one sitting on NOW, one lying in
     the past.

     The example sentences are deliberately NOT in here. Four of
     them pinned to four corners is what made the old drawing hard
     to read, and SVG text cannot wrap, so a full sentence clips on
     a phone. They live in the caption slot of the live wrapper
     instead, one at a time.
     ------------------------------------------------------------ */
  var TL = {
    ax: 158, x0: 50, x1: 858, now: 720,
    barY: 120,               /* the continuous bars sit just above the line */
    tens: [
      { k: 'sp', x: 20, fill: '#2f8f7e', label: 'simple present' },
      { k: 'prc', x: 240, fill: '#0e7684', label: 'present continuous' },
      { k: 'spa', x: 460, fill: '#b4531a', label: 'simple past' },
      { k: 'pac', x: 680, fill: '#4a5fb5', label: 'past continuous' }
    ],
    dots: [90, 166, 242, 318, 394, 470, 546, 622, 698],
    pt: 128,                 /* the one finished point */
    pacBar: [230, 170],      /* x, width — the stretch in the past */
    prcBar: [660, 120]       /* x, width — the stretch across NOW */
  };
  A.TL = TL;

  FIG['tense-timeline'] = function (arg) {
    var u = ((arg || {}).uid) || 'tl';
    var AX = TL.ax;
    var s = r(0, 0, 900, 218, 'var(--surface-2)', 14);

    /* the four names, in the order the four charts use below */
    TL.tens.forEach(function (ch) {
      s += '<g id="' + u + '-chip-' + ch.k + '" class="tl-chip">';
      s += r(ch.x, 20, 200, 42, ch.fill, 11);
      s += t(ch.x + 100, 47, 15, ch.label, '#fff', 'middle', 700);
      s += '</g>';
    });

    /* the line itself */
    s += p('M ' + TL.x0 + ' ' + AX + ' H ' + TL.x1, 'none', ' stroke="var(--ink-4)" stroke-width="3"');
    s += p('M ' + (TL.x1 - 14) + ' ' + (AX - 8) + ' l 16 8 l -16 8 Z', 'var(--ink-4)');
    s += '<g id="' + u + '-now">' +
      p('M ' + TL.now + ' ' + (AX - 26) + ' v 44', 'none',
        ' stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 4"') + '</g>';

    /* CONTINUOUS = a bar, drawn above the line so it reads as a
       span of time rather than a mark on it */
    s += '<g id="' + u + '-bar-pac">';
    s += '<g id="' + u + '-pactick">' + p('M ' + TL.pacBar[0] + ' ' + (TL.barY + 26) + ' v 12 M ' +
      (TL.pacBar[0] + TL.pacBar[1]) + ' ' + (TL.barY + 26) + ' v 12',
      'none', ' stroke="#4a5fb5" stroke-width="2.5"') + '</g>';
    s += '<rect id="' + u + '-pacrect" x="' + TL.pacBar[0] + '" y="' + TL.barY + '" width="' +
      TL.pacBar[1] + '" height="26" rx="8" fill="#4a5fb5"/>';
    s += '<g id="' + u + '-pactext">' +
      t(TL.pacBar[0] + TL.pacBar[1] / 2, TL.barY + 18, 13.5, 'was / were  -ing', '#fff', 'middle', 700) + '</g>';
    s += '</g>';

    s += '<g id="' + u + '-bar-prc">';
    s += '<rect id="' + u + '-prcrect" x="' + TL.prcBar[0] + '" y="' + TL.barY + '" width="' +
      TL.prcBar[1] + '" height="26" rx="8" fill="#0e7684"/>';
    s += '<g id="' + u + '-prctext">' +
      t(TL.prcBar[0] + TL.prcBar[1] / 2, TL.barY + 18, 13.5, 'am / is  -ing', '#fff', 'middle', 700) + '</g>';
    s += '</g>';

    /* SIMPLE = a point. Many for the present, one for the past. */
    s += '<g id="' + u + '-dots">';
    TL.dots.forEach(function (x, i) {
      s += '<circle class="tl-dot" id="' + u + '-dot-' + i + '" cx="' + x + '" cy="' + AX +
        '" r="5.5" fill="#2f8f7e"/>';
    });
    s += '</g>';
    s += '<g id="' + u + '-pt"><circle id="' + u + '-ptc" cx="' + TL.pt + '" cy="' + AX +
      '" r="11" fill="#b4531a"/></g>';

    /* when */
    s += t(110, 194, 16, 'yesterday', 'var(--text-2)', 'middle', 600);
    s += t(430, 194, 16, 'earlier today', 'var(--text-2)', 'middle', 600);
    s += t(TL.now, 194, 16, 'NOW', 'var(--accent)', 'middle', 800);
    s += t(826, 194, 16, 'later', 'var(--text-2)', 'middle', 600);

    /* connectors are drawn into here on a press, so they land on
       top of everything else */
    s += '<g id="' + u + '-conn"></g>';
    return svgFit('0 0 900 218', s);
  };

  /* the long action interrupted by the short one.

     The crossing rod sits well to the right of the bar's label: it
     has to cut through the long action to make the point, but when
     it crossed at the middle it landed on top of the last word. */
  /* The rod sits near the middle of the bar, not three-quarters
     along it. It has to cut across an action that is already
     running and still leave a visible stretch afterwards — that
     remaining stretch is the rule. The bar's own label moves left
     to keep clear of it. */
  var TA = { barX: 90, barW: 500, barY: 86, rodX: 370, labX: 200, hit: 0.66 };
  A.TA = TA;

  FIG['two-actions'] = function (arg) {
    var u = ((arg || {}).uid) || 'ta';
    var s = r(0, 0, 820, 250, 'var(--surface-2)', 14);
    s += '<g id="' + u + '-long">';
    s += '<rect id="' + u + '-bar" x="' + TA.barX + '" y="' + TA.barY + '" width="' + TA.barW +
      '" height="40" rx="10" fill="#4a5fb5"/>';
    s += '<g id="' + u + '-barlab">' + t(TA.labX, 112, 19, 'I was eating dinner', '#fff', 'middle', 700) + '</g>';
    s += '<g id="' + u + '-longcap">' +
      t(TA.labX, 70, 15, 'the long action — past continuous', 'var(--text-2)', 'middle', 600) + '</g>';
    s += '</g>';
    s += '<g id="' + u + '-short">';
    s += r(TA.rodX - 7, 60, 14, 120, '#b4531a', 5);
    s += c(TA.rodX, 56, 13, '#b4531a');
    s += t(TA.rodX, 206, 17, 'I answered some SMS messages', '#b4531a', 'middle', 700);
    s += t(TA.rodX, 228, 14, 'the short action — simple past', 'var(--text-2)', 'middle', 600);
    s += '</g>';
    s += '<g id="' + u + '-while">';
    s += t(640, 100, 22, 'while', 'var(--accent)', 'start', 800);
    s += t(640, 128, 14, 'joins them', 'var(--text-2)', 'start', 600);
    s += '<g id="' + u + '-join">' +
      p('M 598 104 h 32', 'none', ' stroke="var(--ink-4)" stroke-width="3"') + '</g>';
    s += '</g>';
    return svgFit('0 0 820 250', s);
  };

  /* ------------------------------------------------------------
     SHIFT-DAY — one person's Tuesday, drawn up to NOW and no further.

     This replaced a time slider. A slider says time is something you
     scrub in both directions, which is the opposite of the lesson:
     NOW is a wall, and which side of it you are on decides the tense.
     The old slider also ran two positions PAST now, into dinner and
     sleep, captioned "later today" — a future this lesson does not
     teach and the conversation never asks about.

     So the bar ENDS at the wall. There is nothing to the right of
     two o'clock because at two o'clock there is nothing there yet.

     The shape carries the rule, exactly as it does in tense-timeline:
     a finished block is CLOSED, with a hard right edge, and takes a
     simple past. The running block has NO right edge — it is cut off
     by the wall, still going — and takes a present continuous. The
     tense tags alternate rows for the same reason: the near row is
     the simple tenses, the far row the continuous ones, so the two
     families separate before you have read a word.
     ------------------------------------------------------------ */
  var SD = {
    x0: 64, x1: 784, h0: 8, h1: 14,         /* 8:00 a.m. on the left, 2:00 p.m. at the wall */
    axY: 150, blkY: 96, blkH: 48,
    rowS: 196, rowC: 218,                   /* tag rows: simple, continuous */
    ticks: [8, 9, 10, 11, 12, 13, 14],
    blocks: [
      { k: 'brief', from: 8, to: 10, lab: 'briefing', tag: 'simple past',
        fill: '#b4531a', cont: false, act: 'Attend the briefing' },
      { k: 'study', from: 10.5, to: 12.5, lab: 'study at home', tag: 'past continuous',
        fill: '#4a5fb5', cont: true, act: 'Study at home' },
      { k: 'lunch', from: 12.5, to: 13, lab: 'lunch', tag: 'simple past',
        fill: '#b4531a', cont: false, act: 'Eat lunch, review notes' },
      { k: 'shift', from: 13, to: 14, lab: 'on shift', tag: 'present continuous',
        fill: '#0e7684', cont: true, open: true, act: 'Shift at the SOC' }
    ]
  };
  /* hours to x. 120 user units an hour, which keeps every edge whole. */
  SD.at = function (h) { return SD.x0 + ((h - SD.h0) / (SD.h1 - SD.h0)) * (SD.x1 - SD.x0); };
  A.SD = SD;

  FIG['shift-day'] = function (arg) {
    var u = ((arg || {}).uid) || 'sd';
    var s = r(0, 0, 880, 250, 'var(--surface-2)', 14);

    /* The habit pass stacks faint copies of the whole day behind the
       real one. Drawn FIRST so it sits behind everything — and so it
       can never be mistaken for a shape painted over a label. */
    s += '<g id="' + u + '-ghost" opacity="0">';
    [[-22, -30, .22], [-11, -15, .34]].forEach(function (gh) {
      s += '<g transform="translate(' + gh[0] + ',' + gh[1] + ')" opacity="' + gh[2] + '">';
      SD.blocks.forEach(function (b) {
        s += r(SD.at(b.from), SD.blkY, SD.at(b.to) - SD.at(b.from), SD.blkH, b.fill, 8);
      });
      s += '</g>';
    });
    s += '</g>';

    /* the day line, with an hour tick and an hour label on each hour */
    s += p('M ' + SD.x0 + ' ' + SD.axY + ' H ' + SD.x1, 'none',
      ' stroke="var(--ink-4)" stroke-width="3" stroke-linecap="round"');
    SD.ticks.forEach(function (h) {
      var x = SD.at(h);
      s += p('M ' + x + ' ' + (SD.axY - 6) + ' v 12', 'none', ' stroke="var(--ink-4)" stroke-width="2"');
      s += t(x, SD.axY + 26, 13, (h > 12 ? h - 12 : h) + ':00', 'var(--text-2)', 'middle', 600);
    });
    s += t(SD.x0, SD.axY + 46, 12, 'a.m.', 'var(--text-2)', 'middle', 600);

    /* the four activities */
    s += '<g id="' + u + '-blocks">';
    SD.blocks.forEach(function (b) {
      var x = SD.at(b.from), wd = SD.at(b.to) - SD.at(b.from), mid = x + wd / 2;
      s += '<g id="' + u + '-blk-' + b.k + '">';
      if (b.open) {
        /* Three sides only, and the FILL is square on the right too —
           a rounded corner there would close the shape back up and
           undo the whole point. The missing edge IS the grammar: this
           action has not finished, so it has no end to draw. */
        var d = 'M ' + (x + 8) + ' ' + SD.blkY + ' H ' + SD.x1 + ' V ' + (SD.blkY + SD.blkH) +
          ' H ' + (x + 8) + ' q -8 0 -8 -8 V ' + (SD.blkY + 8) + ' q 0 -8 8 -8 Z';
        s += p(d, b.fill);
        s += p('M ' + SD.x1 + ' ' + SD.blkY + ' H ' + (x + 8) +
          ' q -8 0 -8 8 V ' + (SD.blkY + SD.blkH - 8) + ' q 0 8 8 8 H ' + SD.x1, 'none',
          ' stroke="var(--text)" stroke-width="2.5" stroke-linejoin="round"');
      } else {
        s += r(x, SD.blkY, wd, SD.blkH, b.fill, 8);
        /* a hard cap on the right edge: it ended, and it ended here */
        s += p('M ' + (x + wd) + ' ' + SD.blkY + ' v ' + SD.blkH, 'none',
          ' stroke="var(--text)" stroke-width="5" stroke-linecap="round"');
      }
      s += t(mid, SD.blkY + 30, (wd < 90 ? 12 : 15), b.lab, '#fff', 'middle', 700);
      s += '</g>';
      s += '<g id="' + u + '-tag-' + b.k + '">' +
        t(mid, b.cont ? SD.rowC : SD.rowS, 12.5, b.tag, b.fill, 'middle', 700) + '</g>';
    });
    s += '</g>';

    /* the wall. Nothing is drawn to the right of it, and the hatching
       says that is deliberate rather than unfinished. */
    s += '<g id="' + u + '-wall">';
    for (var i = 0; i < 5; i++) {
      s += p('M ' + (SD.x1 + 6 + i * 16) + ' 166 l 14 -100', 'none',
        ' stroke="var(--ink-4)" stroke-width="2" opacity="0.28"');
    }
    s += p('M ' + SD.x1 + ' 56 V 166', 'none',
      ' stroke="var(--accent)" stroke-width="5" stroke-linecap="round"');
    s += t(SD.x1, 44, 15, 'NOW · 2:00 p.m.', 'var(--accent)', 'middle', 800);
    s += '</g>';

    /* the playhead, last so it reads on top of the blocks it crosses */
    s += '<g id="' + u + '-head" style="transform-origin:0 0">';
    s += p('M ' + SD.x0 + ' 70 V 160', 'none',
      ' stroke="var(--text)" stroke-width="3" stroke-linecap="round" stroke-dasharray="5 4"');
    s += p('M ' + (SD.x0 - 8) + ' 56 h 16 l -8 12 Z', 'var(--text)');
    s += '</g>';
    return svgFit('0 0 880 250', s);
  };

  /* the auxiliary bounces back in the short answer */
  FIG['aux-mirror'] = function () {
    var s = r(0, 0, 840, 300, 'var(--surface-2)', 14);
    function box(x, y, wd, fill) { return r(x, y, wd, 76, fill, 12); }
    s += box(40, 40, 340, 'var(--surface)');
    s += r(40, 40, 340, 76, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += t(60, 76, 16, 'A:', 'var(--text-2)', 'start', 700);
    s += r(86, 56, 62, 32, '#b4531a', 8);
    s += t(117, 79, 18, 'Did', '#fff', 'middle', 800);
    s += t(158, 79, 18, 'you study yesterday?', 'var(--text)', 'start', 600);

    s += box(460, 40, 340, 'var(--surface)');
    s += r(460, 40, 340, 76, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += t(480, 76, 16, 'B:', 'var(--text-2)', 'start', 700);
    s += t(508, 79, 18, 'Yes, I', 'var(--text)', 'start', 600);
    s += r(576, 56, 56, 32, '#b4531a', 8);
    s += t(604, 79, 18, 'did', '#fff', 'middle', 800);
    s += t(640, 79, 18, '.', 'var(--text)', 'start', 600);

    s += p('M 148 132 q 230 86 436 -34', 'none', ' stroke="#b4531a" stroke-width="4" stroke-dasharray="7 6" fill="none"');
    s += p('M 574 94 l 18 4 l -12 14 Z', '#b4531a');
    s += t(420, 196, 18, 'the same auxiliary comes straight back', 'var(--accent)', 'middle', 700);

    s += t(60, 250, 16, 'Are you studying? → Yes, I am.', 'var(--text-2)', 'start', 600);
    s += t(60, 278, 16, 'Were you studying? → Yes, I was.', 'var(--text-2)', 'start', 600);
    s += t(470, 250, 16, 'Do you study? → Yes, I do.', 'var(--text-2)', 'start', 600);
    s += t(470, 278, 16, 'Does she study? → Yes, she does.', 'var(--text-2)', 'start', 600);
    return svgFit('0 0 840 300', s);
  };

  /* an adjective aims at a noun, an adverb aims at a verb */
  FIG['adj-adv'] = function () {
    var s = r(0, 0, 820, 300, 'var(--surface-2)', 14);
    /* left: adjective -> noun */
    s += t(190, 44, 18, 'adjective  →  noun', '#2f8f7e', 'middle', 800);
    s += r(50, 64, 130, 44, '#2f8f7e', 10);
    s += t(115, 93, 18, 'careful', '#fff', 'middle', 700);
    s += p('M 186 86 h 56', 'none', ' stroke="#2f8f7e" stroke-width="4"');
    s += p('M 238 78 l 16 8 l -16 8 Z', '#2f8f7e');
    s += '<g transform="translate(196,96) scale(0.33)">' + A.actor('aa1', 'm-30s-a') + '</g>';
    s += t(300, 212, 17, 'worker', 'var(--text)', 'middle', 700);
    s += t(190, 258, 16, 'He is a careful worker.', 'var(--text-2)', 'middle', 600);

    /* right: adverb -> verb */
    s += t(620, 44, 18, 'adverb  →  verb', '#b4531a', 'middle', 800);
    s += r(470, 64, 150, 44, '#b4531a', 10);
    s += t(545, 93, 18, 'carefully', '#fff', 'middle', 700);
    s += p('M 626 86 h 56', 'none', ' stroke="#b4531a" stroke-width="4"');
    s += p('M 678 78 l 16 8 l -16 8 Z', '#b4531a');
    /* a hand working a keyboard = the verb */
    s += r(700, 120, 96, 56, 'var(--surface)', 8);
    s += r(700, 120, 96, 56, 'none', 8).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="3"');
    s += p('M 712 140 h 72 M 712 156 h 48', 'none', ' stroke="#b4531a" stroke-width="5" stroke-linecap="round"');
    s += e(748, 186, 30, 14, '#e8b793');
    s += t(748, 212, 17, 'works', 'var(--text)', 'middle', 700);
    s += t(620, 258, 16, 'He works carefully.', 'var(--text-2)', 'middle', 600);

    s += p('M 410 56 V 270', 'none', ' stroke="var(--border)" stroke-width="2" stroke-dasharray="6 6"');
    return svgFit('0 0 820 300', s);
  };

  /* dis- goes on some words; others need a different prefix */
  FIG['prefix-machine'] = function () {
    var s = r(0, 0, 940, 330, 'var(--surface-2)', 14);
    /* hopper */
    s += p('M 300 24 h 220 l -34 70 h -152 Z', '#0e7684');
    s += t(410, 74, 30, 'dis-', '#fff', 'middle', 800);
    /* body */
    s += r(250, 94, 320, 130, '#084a54', 14);
    s += t(410, 132, 15, 'MEANING FLIPPER', '#a8dbe3', 'middle', 700);
    s += r(286, 148, 248, 56, '#06343b', 8);
    s += t(410, 172, 17, 'like  →  dislike', '#49d19a', 'middle', 700);
    s += t(410, 195, 15, 'agree → disagree   ·   obey → disobey', '#a8dbe3', 'middle', 600);
    /* input words on a belt */
    s += r(40, 240, 560, 16, 'var(--ink-4)', 8);
    ['like', 'agree', 'obey', 'honest', 'organized'].forEach(function (x, i) {
      s += r(46 + i * 112, 212, 100, 28, 'var(--surface)', 8);
      s += r(46 + i * 112, 212, 100, 28, 'none', 8).replace('fill="none"', 'fill="none" stroke="#0e7684" stroke-width="2"');
      s += t(96 + i * 112, 232, 14, x, 'var(--text)', 'middle', 600);
    });
    /* reject chute — kept clear of the right edge so the four
       words that do NOT take dis- are never clipped */
    s += p('M 614 224 l 56 46 h 250 v -30 h -226 Z', '#b3261e');
    s += t(800, 262, 14, 'NOT dis-', '#fff', 'middle', 800);
    s += t(798, 300, 14.5, 'unhappy · impossible · illegal · insecure', 'var(--no)', 'middle', 600);
    s += t(150, 300, 15, 'in goes the base word', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 940 330', s);
  };

  /* three paragraphs, three jobs */
  FIG['narrative-arc'] = function () {
    var s = r(0, 0, 840, 260, 'var(--surface-2)', 14);
    var cols = ['#b4531a', '#0e7684', '#2f8f7e'];
    var names = ['1 · the challenge', '2 · how you got through it', '3 · the lesson'];
    var subs = ['what was hard, and why you felt that way', 'what happened, and who or what helped', 'what you learned and will do next time'];
    for (var i = 0; i < 3; i++) {
      var x = 24 + i * 268;
      s += r(x, 28, 248, 160, 'var(--surface)', 12);
      s += r(x, 28, 248, 160, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      s += r(x, 28, 248, 36, cols[i], 12);
      s += r(x, 52, 248, 12, cols[i]);
      s += t(x + 124, 53, 15, names[i], '#fff', 'middle', 700);
      if (i === 0) { s += p('M ' + (x + 40) + ' 164 L ' + (x + 208) + ' 92', 'none', ' stroke="' + cols[0] + '" stroke-width="7" stroke-linecap="round"'); s += c(x + 56, 156, 13, '#e8b793'); }
      if (i === 1) { s += c(x + 86, 128, 20, '#e8b793'); s += c(x + 162, 128, 20, '#c98b63'); s += p('M ' + (x + 104) + ' 136 h 40', 'none', ' stroke="' + cols[1] + '" stroke-width="8" stroke-linecap="round"'); }
      if (i === 2) { s += c(x + 124, 122, 26, '#fdf3dc'); s += c(x + 124, 122, 26, 'none').replace('fill="none"', 'fill="none" stroke="#c9a227" stroke-width="5"'); s += p('M ' + (x + 112) + ' 150 h 24 M ' + (x + 116) + ' 160 h 16', 'none', ' stroke="#c9a227" stroke-width="5" stroke-linecap="round"'); }
      s += t(x + 124, 182, 13, subs[i], 'var(--text-2)', 'middle', 600);
      if (i < 2) { s += p('M ' + (x + 254) + ' 108 h 10', 'none', ' stroke="var(--ink-4)" stroke-width="3"'); s += p('M ' + (x + 262) + ' 100 l 12 8 l -12 8 Z', 'var(--ink-4)'); }
    }
    s += t(420, 232, 16, 'one main idea in each paragraph — never two', 'var(--accent)', 'middle', 700);
    return svgFit('0 0 840 260', s);
  };

  /* a draft, then the same draft improved */
  FIG['revision-ribbon'] = function () {
    var s = r(0, 0, 820, 230, 'var(--surface-2)', 14);
    s += r(30, 30, 350, 164, 'var(--surface)', 12);
    s += r(30, 30, 350, 164, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--no-line)" stroke-width="2"');
    s += t(50, 58, 14, 'FIRST DRAFT', 'var(--no)', 'start', 800);
    s += p('M 50 86 h 300 M 50 110 h 250 M 50 134 h 290 M 50 158 h 180', 'none', ' stroke="var(--ink-4)" stroke-width="7" stroke-linecap="round"');
    s += r(118, 102, 76, 16, 'var(--no-bg)', 4);
    s += r(206, 126, 92, 16, 'var(--no-bg)', 4);

    s += r(440, 30, 350, 164, 'var(--surface)', 12);
    s += r(440, 30, 350, 164, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--ok-line)" stroke-width="2"');
    s += t(460, 58, 14, 'AFTER REVISION', 'var(--ok)', 'start', 800);
    s += p('M 460 86 h 300 M 460 110 h 280 M 460 134 h 290 M 460 158 h 220', 'none', ' stroke="var(--ink-4)" stroke-width="7" stroke-linecap="round"');
    s += r(528, 102, 110, 16, 'var(--ok-bg)', 4);
    s += r(616, 126, 120, 16, 'var(--ok-bg)', 4);

    s += p('M 390 112 h 36', 'none', ' stroke="var(--primary)" stroke-width="4"');
    s += p('M 420 102 l 16 10 l -16 10 Z', 'var(--primary)');
    s += t(410, 216, 15, 'change at least one thing — and be able to say what', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 820 230', s);
  };

  /* a bar chart of an opinion split */
  FIG['opinion-bar'] = function (arg) {
    arg = arg || {};
    var dist = arg.dist || [10, 20, 30, 25, 15];
    var labs = arg.labels || ['strongly\ndisagree', 'disagree', 'not sure', 'agree', 'strongly\nagree'];
    var max = 1;
    dist.forEach(function (v) { if (v > max) max = v; });
    var s = r(0, 0, 720, 300, 'var(--surface-2)', 14);
    s += t(360, 36, 17, arg.title || 'What the rest of the class said', 'var(--text)', 'middle', 700);
    var cols = ['#b3261e', '#d2691e', '#8a929d', '#2f8f7e', '#0b5f6b'];
    for (var i = 0; i < dist.length; i++) {
      var h = Math.round(140 * dist[i] / max);
      var x = 60 + i * 120;
      s += r(x, 212 - h, 80, h, cols[i], 8);
      s += t(x + 40, 206 - h, 16, dist[i] + '%', 'var(--text)', 'middle', 800);
      var parts = String(labs[i]).split('\n');
      for (var j = 0; j < parts.length; j++) s += t(x + 40, 238 + j * 18, 14, parts[j], 'var(--text-2)', 'middle', 600);
    }
    s += p('M 44 212 H 680', 'none', ' stroke="var(--ink-4)" stroke-width="2"');
    return svgFit('0 0 720 300', s);
  };

  /* free places to learn, around a town */
  /* Four kinds of place, or — given `arg` — four real ones somebody
     actually found. A pin with a `sub` carries a second line, which
     is what turns the empty map into a filled one. */
  FIG['resource-map'] = function (arg) {
    arg = arg || {};
    var s = r(0, 0, 820, 320, '#dfe8ee', 14);
    s += p('M 0 170 H 820 M 330 0 V 320', 'none', ' stroke="#c3d2db" stroke-width="30"');
    s += p('M 0 170 H 820 M 330 0 V 320', 'none', ' stroke="#f8fafb" stroke-width="3" stroke-dasharray="18 14"');
    function pin(x, y, col, lbl, ic, sub) {
      var h = sub ? 44 : 30;
      var o = p('M ' + x + ' ' + y + ' c -22 -26 -34 -40 -34 -56 a 34 34 0 0 1 68 0 c 0 16 -12 30 -34 56 Z', col);
      o += c(x, y - 58, 18, '#fff');
      o += t(x, y - 51, 19, ic, col, 'middle', 800);
      /* 180 wide, not 156: "Regional Cyber Bootcamp" ran past the
         edge of its own box at the narrower size */
      o += r(x - 90, y + 6, 180, h, 'var(--surface)', 8);
      o += r(x - 90, y + 6, 180, h, 'none', 8).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      o += t(x, sub ? y + 23 : y + 26, 13, lbl, 'var(--text)', 'middle', 700);
      if (sub) o += t(x, y + 40, 11.5, sub, 'var(--text-2)', 'middle', 600);
      return o;
    }
    var at = [[150, 118], [470, 118], [660, 268], [190, 268]];
    var pins = arg.pins || [
      { t: 'public library', ic: 'i', col: '#0b5f6b' },
      { t: 'community college', ic: 'C', col: '#b4531a' },
      { t: 'free practice lab', ic: 'L', col: '#2f8f7e' },
      { t: 'cyber meet-up', ic: 'M', col: '#4a5fb5' }
    ];
    var COL = ['#0b5f6b', '#b4531a', '#2f8f7e', '#4a5fb5'];
    pins.slice(0, 4).forEach(function (pn, i) {
      s += pin(at[i][0], at[i][1], pn.col || COL[i], pn.t, pn.ic || String(i + 1), pn.sub);
    });
    s += t(410, 36, 17, arg.title || 'free places to learn, near you', 'var(--teal-800)', 'middle', 800);
    return svgFit('0 0 820 320', s);
  };

  /* the night shift help desk */
  FIG['night-desk'] = function () {
    var s = r(0, 0, 760, 300, '#0f1620', 14);
    for (var i = 0; i < 26; i++) s += c(30 + (i * 97) % 700, 24 + (i * 53) % 90, 1.8, '#5b6470');
    s += r(0, 150, 760, 150, '#1d232b', 0);
    s += r(60, 96, 200, 120, '#101820', 8);
    s += r(72, 108, 176, 86, '#0b2a33', 4);
    s += p('M 86 150 h 120 M 86 130 h 80 M 86 170 h 100', 'none', ' stroke="#3fb3c6" stroke-width="5" stroke-linecap="round"');
    s += r(480, 96, 200, 120, '#101820', 8);
    s += r(492, 108, 176, 86, '#2a1414', 4);
    s += t(580, 158, 18, '3 OPEN', '#ff8a80', 'middle', 800);
    s += r(40, 214, 680, 18, '#2b323c', 6);
    s += '<g transform="translate(300,104) scale(0.46)">' + A.actor('nd1', 'f-20s-b') + '</g>';
    s += t(380, 274, 16, 'the night shift — and nobody to ask yet', '#9aa4b1', 'middle', 600);
    return svgFit('0 0 760 300', s);
  };

  /* a desk set up for editing your own writing */
  FIG['editing-desk'] = function () {
    var s = r(0, 0, 760, 290, 'var(--surface-2)', 14);
    s += r(90, 34, 300, 212, 'var(--surface)', 10);
    s += r(90, 34, 300, 212, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += p('M 120 78 h 240 M 120 108 h 210 M 120 138 h 240 M 120 168 h 160 M 120 198 h 220', 'none', ' stroke="var(--ink-4)" stroke-width="7" stroke-linecap="round"');
    s += r(180, 100, 80, 16, 'var(--hint-bg)', 4);
    s += p('M 262 128 l 40 -4', 'none', ' stroke="#b3261e" stroke-width="4"');
    s += r(300, 128, 54, 16, 'var(--no-bg)', 4);
    /* red pen */
    s += '<g transform="rotate(28 470 150)">' + r(440, 60, 16, 150, '#b3261e', 6) + p('M 440 210 h 16 l -8 24 Z', '#2a2320') + '</g>';
    /* checklist */
    s += r(540, 46, 180, 198, 'var(--surface)', 10);
    s += r(540, 46, 180, 198, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += t(630, 76, 14, 'CHECKLIST', 'var(--primary)', 'middle', 800);
    for (var i = 0; i < 4; i++) {
      var y = 104 + i * 34;
      s += r(560, y - 12, 18, 18, i < 3 ? 'var(--ok-bg)' : 'var(--surface)', 4);
      s += r(560, y - 12, 18, 18, 'none', 4).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      if (i < 3) s += p('M 563 ' + (y - 3) + ' l 5 5 l 9 -11', 'none', ' stroke="var(--ok)" stroke-width="3" fill="none" stroke-linecap="round"');
      s += p('M 590 ' + (y - 3) + ' h ' + (110 - i * 14), 'none', ' stroke="var(--ink-4)" stroke-width="6" stroke-linecap="round"');
    }
    s += t(380, 278, 15, 'edit against the list before anybody else reads it', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 760 290', s);
  };

  /* reporting back to the class */
  FIG['podium-report'] = function () {
    var s = r(0, 0, 780, 300, 'var(--surface-2)', 14);
    s += r(40, 30, 320, 180, 'var(--surface)', 10);
    s += r(40, 30, 320, 180, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += t(200, 60, 14, 'OUR RESULTS', 'var(--primary)', 'middle', 800);
    var bars = [70, 120, 50, 95];
    for (var i = 0; i < bars.length; i++) {
      s += r(80 + i * 66, 186 - bars[i], 44, bars[i], ['#0b5f6b', '#b4531a', '#2f8f7e', '#4a5fb5'][i], 6);
    }
    s += p('M 64 186 H 344', 'none', ' stroke="var(--ink-4)" stroke-width="2"');
    s += '<g transform="translate(430,60) scale(0.52)">' + A.actor('pr1', 'f-30s-a') + '</g>';
    s += r(400, 230, 180, 50, '#8e7a5c', 8);
    /* audience heads */
    for (var j = 0; j < 4; j++) s += c(640 + (j % 2) * 70, 190 + Math.floor(j / 2) * 56, 26, j % 2 ? '#c98b63' : '#e8b793');
    s += t(390, 296, 15, 'say what your team found, not what you think alone', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 780 300', s);
  };

  /* three ways of saying you are not sure */
  FIG['uncertainty-faces'] = function () {
    var s = r(0, 0, 820, 270, 'var(--surface-2)', 14);
    var rigs = ['m-20s-a', 'f-20s-a', 'm-50s-a'];
    var says = ['I’m just not sure.', 'It’s hard to say.', 'I’m not certain.'];
    for (var i = 0; i < 3; i++) {
      var x = 30 + i * 268;
      s += r(x, 24, 248, 60, 'var(--surface)', 14);
      s += r(x, 24, 248, 60, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2"');
      s += p('M ' + (x + 110) + ' 84 l 14 20 l 18 -20 Z', 'var(--surface)');
      s += t(x + 124, 62, 16, says[i], 'var(--primary)', 'middle', 700);
      s += '<g transform="translate(' + (x + 48) + ',108) scale(0.4)">' + A.actor('uf' + i, rigs[i]) + '</g>';
      /* a shrug mark */
      s += t(x + 206, 160, 30, '?', 'var(--accent)', 'middle', 800);
    }
    s += t(410, 256, 15, 'all three mean the same thing — pick the one that fits the moment', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 820 270', s);
  };

  /* cards face down: predict before you listen */
  FIG['predict-cards'] = function () {
    var s = r(0, 0, 760, 250, 'var(--surface-2)', 14);
    for (var i = 0; i < 4; i++) {
      var x = 54 + i * 170, rot = [-6, 3, -3, 5][i];
      s += '<g transform="rotate(' + rot + ' ' + (x + 64) + ' 130)">' +
        r(x, 60, 128, 150, i === 1 ? 'var(--surface)' : '#0e7684', 10) +
        (i === 1
          ? r(x, 60, 128, 150, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="3"') +
          p('M ' + (x + 22) + ' 112 h 84 M ' + (x + 22) + ' 140 h 60 M ' + (x + 22) + ' 168 h 76', 'none', ' stroke="var(--ink-4)" stroke-width="7" stroke-linecap="round"')
          : t(x + 64, 150, 48, '?', '#a8dbe3', 'middle', 800)) +
        '</g>';
    }
    s += t(380, 38, 17, 'guess first — then listen and check', 'var(--accent)', 'middle', 700);
    s += t(380, 238, 15, 'a wrong prediction still makes you listen harder', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 760 250', s);
  };

  /* what active listening looks like */
  FIG['listening-cues'] = function () {
    var s = r(0, 0, 840, 280, 'var(--surface-2)', 14);
    var labs = ['lean forward', 'nod slowly', 'make eye contact', 'tilt your head', 'take notes'];
    for (var i = 0; i < 5; i++) {
      var x = 20 + i * 164;
      s += r(x, 28, 148, 200, 'var(--surface)', 12);
      s += r(x, 28, 148, 200, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      var tr = ['rotate(9 ' + (x + 74) + ' 150)', '', '', 'rotate(-13 ' + (x + 74) + ' 150)', ''][i];
      s += '<g transform="' + (tr ? tr + ' ' : '') + 'translate(' + (x + 14) + ',56) scale(0.42)">' + A.actor('lc' + i, i % 2 ? 'f-30s-a' : 'm-20s-a') + '</g>';
      if (i === 1) s += p('M ' + (x + 104) + ' 70 v 22 M ' + (x + 98) + ' 86 l 6 8 l 6 -8', 'none', ' stroke="var(--accent)" stroke-width="4" fill="none" stroke-linecap="round"');
      if (i === 2) s += p('M ' + (x + 100) + ' 86 h 34', 'none', ' stroke="var(--accent)" stroke-width="4" stroke-dasharray="5 4"');
      if (i === 4) s += r(x + 96, 150, 40, 48, '#fff', 4) + p('M ' + (x + 104) + ' 164 h 24 M ' + (x + 104) + ' 178 h 18', 'none', ' stroke="var(--ink-4)" stroke-width="4"');
      s += t(x + 74, 220, 13.5, labs[i], 'var(--text)', 'middle', 700);
    }
    s += t(420, 268, 15, 'and say: Really? · Uh-huh. · Go on… · Oh! · Hmm…', 'var(--primary)', 'middle', 700);
    return svgFit('0 0 840 280', s);
  };

  /* which auxiliary starts the question? */
  FIG['yesno-tree'] = function () {
    var s = r(0, 0, 820, 300, 'var(--surface-2)', 14);
    s += r(310, 22, 200, 46, '#0b5f6b', 12);
    s += t(410, 52, 17, 'yes / no question', '#fff', 'middle', 700);
    var leaves = [
      ['every day?', 'Do / Does', '#2f8f7e'],
      ['right now?', 'Are / Is', '#0e7684'],
      ['yesterday?', 'Did', '#b4531a'],
      ['at 8 last night?', 'Were / Was', '#4a5fb5']
    ];
    for (var i = 0; i < 4; i++) {
      var x = 30 + i * 200;
      s += p('M 410 70 L ' + (x + 80) + ' 120', 'none', ' stroke="var(--ink-4)" stroke-width="3"');
      s += r(x, 120, 160, 40, 'var(--surface)', 10);
      s += r(x, 120, 160, 40, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      s += t(x + 80, 146, 15, leaves[i][0], 'var(--text-2)', 'middle', 600);
      s += p('M ' + (x + 80) + ' 160 v 26', 'none', ' stroke="var(--ink-4)" stroke-width="3"');
      s += r(x + 10, 186, 140, 44, leaves[i][2], 10);
      s += t(x + 80, 215, 17, leaves[i][1], '#fff', 'middle', 800);
    }
    s += t(410, 274, 16, 'the short answer gives the same word back', 'var(--accent)', 'middle', 700);
    return svgFit('0 0 820 300', s);
  };

  /* passive in, active out */
  FIG['active-passive'] = function () {
    var s = r(0, 0, 800, 290, 'var(--surface-2)', 14);
    s += r(28, 28, 350, 234, 'var(--surface)', 12);
    s += r(28, 28, 350, 234, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += t(203, 58, 16, 'PASSIVE — you receive', 'var(--ink-3)', 'middle', 800);
    s += t(203, 92, 15, 'reading a policy  ·  10%', 'var(--text-2)', 'middle', 600);
    s += t(203, 122, 15, 'a webinar  ·  20%', 'var(--text-2)', 'middle', 600);
    s += t(203, 152, 15, 'a diagram  ·  30%', 'var(--text-2)', 'middle', 600);
    s += t(203, 182, 15, 'a demonstration  ·  50%', 'var(--text-2)', 'middle', 600);
    s += c(203, 222, 24, 'var(--surface-2)');
    s += e(203, 222, 15, 9, 'var(--ink-4)') + c(203, 222, 5, 'var(--surface)');

    s += r(422, 28, 350, 234, 'var(--teal-050)', 12);
    s += r(422, 28, 350, 234, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="3"');
    s += t(597, 58, 16, 'ACTIVE — you produce', 'var(--primary)', 'middle', 800);
    s += t(597, 100, 15, 'explaining it out loud  ·  70%', 'var(--text)', 'middle', 700);
    s += t(597, 136, 15, 'a hands-on lab  ·  90%', 'var(--text)', 'middle', 700);
    s += t(597, 172, 15, 'teaching somebody else  ·  90%', 'var(--text)', 'middle', 700);
    s += p('M 560 206 q 37 22 74 0', 'none', ' stroke="var(--accent)" stroke-width="6" stroke-linecap="round"');
    s += p('M 548 236 h 98', 'none', ' stroke="var(--primary)" stroke-width="6" stroke-linecap="round"');
    s += p('M 398 140 h 18', 'none', ' stroke="var(--accent)" stroke-width="4"');
    s += p('M 410 130 l 16 10 l -16 10 Z', 'var(--accent)');
    return svgFit('0 0 800 290', s);
  };

  /* a week you can actually plan */
  FIG['study-week'] = function () {
    var s = r(0, 0, 820, 230, 'var(--surface-2)', 14);
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (var i = 0; i < 7; i++) {
      var x = 24 + i * 113;
      s += r(x, 56, 100, 140, 'var(--surface)', 10);
      s += r(x, 56, 100, 140, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      s += t(x + 50, 44, 15, days[i], 'var(--text-2)', 'middle', 700);
      if (i === 3) {
        s += r(x + 8, 96, 84, 60, '#2f8f7e', 8);
        s += t(x + 50, 122, 13, 'hands-on', '#fff', 'middle', 700);
        s += t(x + 50, 140, 13, 'lab · 90%', '#fff', 'middle', 700);
      } else if (i === 1) {
        s += r(x + 8, 110, 84, 36, 'var(--ink-4)', 8);
        s += t(x + 50, 133, 13, 'reading 10%', '#fff', 'middle', 700);
      } else {
        s += p('M ' + (x + 16) + ' 120 h 68 M ' + (x + 16) + ' 142 h 48', 'none', ' stroke="var(--line)" stroke-width="7" stroke-linecap="round"');
      }
    }
    s += t(410, 220, 15, 'name the activity AND the evening — a plan with no day is a wish', 'var(--accent)', 'middle', 700);
    return svgFit('0 0 820 230', s);
  };

  /* two speakers taking turns — the frame for building a conversation */
  FIG['convo-frame'] = function () {
    var s = r(0, 0, 780, 250, 'var(--surface-2)', 14);
    s += '<g transform="translate(20,74) scale(0.46)">' + A.actor('cf1', 'f-20s-a') + '</g>';
    s += '<g transform="translate(646,74) scale(0.46)">' + A.actor('cf2', 'm-50s-a') + '</g>';
    s += r(132, 30, 250, 58, 'var(--surface)', 14);
    s += r(132, 30, 250, 58, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2"');
    s += p('M 150 88 l 10 20 l 22 -20 Z', 'var(--surface)');
    s += t(257, 65, 16, 'A asks a question', 'var(--primary)', 'middle', 700);
    s += r(400, 112, 250, 58, 'var(--teal-050)', 14);
    s += r(400, 112, 250, 58, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--accent)" stroke-width="2"');
    s += p('M 624 170 l 10 20 l -32 -20 Z', 'var(--teal-050)');
    s += t(525, 147, 16, 'B answers — and adds', 'var(--accent)', 'middle', 700);
    s += p('M 132 200 H 650', 'none', ' stroke="var(--ink-4)" stroke-width="2" stroke-dasharray="7 6"');
    s += t(390, 230, 15, 'each line has to make sense after the one before it', 'var(--text-2)', 'middle', 700);
    return svgFit('0 0 780 250', s);
  };

  /* the clue is in the partner's line, and it rules the others out */
  FIG['clue-line'] = function () {
    var s = r(0, 0, 780, 270, 'var(--surface-2)', 14);
    s += '<g transform="translate(16,42) scale(0.42)">' + A.actor('cl1', 'f-20s-a') + '</g>';
    /* her line, with the words that decide it marked */
    s += r(112, 20, 500, 62, 'var(--surface)', 14);
    s += r(112, 20, 500, 62, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += p('M 130 82 l 8 18 l 22 -18 Z', 'var(--surface)');
    s += t(132, 46, 15, '…I can never work at home,', 'var(--text-2)', 'start', 600);
    s += r(130, 56, 232, 18, 'var(--rust-100)', 5);
    s += t(132, 71, 15, 'my flatmate plays music all evening.', 'var(--rust-700)', 'start', 800);
    /* the arrow down to the gap */
    s += p('M 250 104 v 34', 'none', ' stroke="var(--accent)" stroke-width="4" stroke-linecap="round"');
    s += p('M 250 150 l -9 -16 h 18 Z', 'var(--accent)');
    /* your line, with the gap */
    s += r(112, 158, 500, 58, 'var(--teal-050)', 14);
    s += r(112, 158, 500, 58, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2"');
    s += t(132, 194, 15, 'I', 'var(--text)', 'start', 700);
    s += r(146, 173, 196, 28, 'var(--surface)', 14);
    s += r(146, 173, 196, 28, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2" stroke-dasharray="6 5"');
    s += t(244, 193, 14, 'find a quiet place', 'var(--primary)', 'middle', 800);
    s += t(356, 194, 15, '— the booth has a silence sign.', 'var(--text-2)', 'start', 600);
    /* and the ones her line has just ruled out */
    s += t(112, 248, 14, 'ruled out by her line:', 'var(--text-2)', 'start', 700);
    var out = ['do research', 'search online', 'make an outline'];
    for (var i = 0; i < 3; i++) {
      var x = 262 + i * 160;
      s += r(x, 230, 148, 26, 'var(--surface)', 13);
      s += r(x, 230, 148, 26, 'none', 13).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      s += t(x + 74, 248, 13, out[i], 'var(--ink-4)', 'middle', 700);
      s += p('M ' + (x + 14) + ' 236 l 120 14 M ' + (x + 14) + ' 250 l 120 -14', 'none',
        ' stroke="var(--no)" stroke-width="2" stroke-opacity="0.55"');
    }
    return svgFit('0 0 780 270', s);
  };

  /* first day, and the English is arriving faster than it can be
     written down — the challenge in the Lesson 2 §1C entry */
  FIG['too-fast'] = function () {
    var s = r(0, 0, 780, 300, 'var(--surface-2)', 14);
    /* the trainee, pen down, looking up */
    s += '<g transform="translate(34,96) scale(0.52)">' + A.actor('tf1', 'f-20s-b') + '</g>';
    /* the notebook in front of her, with only two words in it */
    s += r(28, 236, 196, 52, '#fff', 7);
    s += r(28, 236, 196, 52, 'none', 7).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += t(42, 258, 13, 'payload', '#0b5f6b', 'start', 700);
    s += t(42, 277, 13, 'patch  …', '#0b5f6b', 'start', 700);
    s += p('M 150 246 l 42 30', 'none', ' stroke="#e3b04b" stroke-width="9" stroke-linecap="round"');
    /* the words coming at her, getting smaller and fainter as they
       outrun her — the whole point in one gradient */
    var words = [
      ['escalate', 300, 54, 25, 1], ['perimeter', 470, 48, 23, .92],
      ['remediation', 300, 104, 22, .82], ['false positive', 498, 104, 20, .7],
      ['threat actor', 320, 150, 19, .58], ['lateral movement', 500, 152, 17, .46],
      ['containment', 330, 192, 16, .36], ['exfiltration', 510, 194, 15, .28],
      ['triage', 350, 230, 14, .2], ['indicator of compromise', 520, 232, 13, .15]
    ];
    words.forEach(function (wd) {
      s += '<g opacity="' + wd[4] + '">' + t(wd[1], wd[2], wd[3], wd[0], 'var(--primary)', 'start', 700) + '</g>';
    });
    /* the arrow of speed */
    s += p('M 272 262 H 742', 'none', ' stroke="var(--accent)" stroke-width="4" stroke-linecap="round"');
    s += p('M 742 262 l -16 -9 v 18 Z', 'var(--accent)');
    s += t(272, 286, 14, 'faster than you can write it down', 'var(--text-2)', 'start', 700);
    return svgFit('0 0 780 300', s);
  };

  /* the clue is in the REPLY, so the answer comes before the question */
  FIG['answer-first'] = function () {
    var s = r(0, 0, 780, 270, 'var(--surface-2)', 14);
    /* your line, with the gap, on top */
    s += r(40, 20, 540, 58, 'var(--teal-050)', 14);
    s += r(40, 20, 540, 58, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2"');
    s += t(60, 55, 15, 'What', 'var(--text)', 'start', 700);
    s += r(104, 33, 118, 30, 'var(--surface)', 15);
    s += r(104, 33, 118, 30, 'none', 15).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2" stroke-dasharray="6 5"');
    s += t(163, 54, 14, 'was', 'var(--primary)', 'middle', 800);
    s += t(234, 55, 15, 'Danny', 'var(--text)', 'start', 700);
    s += r(298, 33, 160, 30, 'var(--surface)', 15);
    s += r(298, 33, 160, 30, 'none', 15).replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="2" stroke-dasharray="6 5"');
    s += t(378, 54, 14, 'doing at 10:30', 'var(--primary)', 'middle', 800);
    s += t(470, 55, 15, '?', 'var(--text)', 'start', 700);
    /* the arrow points UP, from the answer to the question */
    s += p('M 300 150 v -42', 'none', ' stroke="var(--accent)" stroke-width="4" stroke-linecap="round"');
    s += p('M 300 96 l -9 16 h 18 Z', 'var(--accent)');
    s += t(322, 136, 14, 'the reply tells you what the question was', 'var(--text-2)', 'start', 700);
    /* the partner's reply, with the deciding words marked */
    s += '<g transform="translate(16,138) scale(0.42)">' + A.actor('af1', 'f-30s-a') + '</g>';
    s += r(112, 160, 500, 62, 'var(--surface)', 14);
    s += r(112, 160, 500, 62, 'none', 14).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
    s += p('M 130 160 l 8 -18 l 22 18 Z', 'var(--surface)');
    s += r(130, 170, 206, 18, 'var(--rust-100)', 5);
    s += t(132, 185, 15, 'At half past ten he was at home,', 'var(--rust-700)', 'start', 800);
    s += t(132, 211, 15, 'studying. He had the room to himself.', 'var(--text-2)', 'start', 600);
    s += t(112, 250, 14, 'Some of the chips answer a question nobody asked.', 'var(--text-2)', 'start', 700);
    return svgFit('0 0 780 270', s);
  };

  /* reading the same text three times, for three different things */
  FIG['three-passes'] = function () {
    var s = r(0, 0, 780, 240, 'var(--surface-2)', 14);
    var names = ['1 · the general idea', '2 · the details', '3 · the hard words'];
    var cols = ['#0e7684', '#2f8f7e', '#b4531a'];
    for (var i = 0; i < 3; i++) {
      var x = 24 + i * 250;
      s += r(x, 32, 230, 150, 'var(--surface)', 10);
      s += r(x, 32, 230, 150, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--border)" stroke-width="2"');
      s += t(x + 115, 60, 14.5, names[i], cols[i], 'middle', 800);
      for (var j = 0; j < 4; j++) {
        var y = 86 + j * 24;
        var full = 190 - (j === 3 ? 60 : 0);
        s += p('M ' + (x + 20) + ' ' + y + ' h ' + full, 'none', ' stroke="var(--line)" stroke-width="7" stroke-linecap="round"');
      }
      if (i === 0) s += p('M ' + (x + 20) + ' 86 h 190', 'none', ' stroke="' + cols[0] + '" stroke-width="7" stroke-linecap="round" opacity="0.35"');
      if (i === 1) { s += r(x + 56, 104, 70, 14, 'var(--hint-bg)', 4); s += r(x + 92, 128, 60, 14, 'var(--hint-bg)', 4); }
      if (i === 2) { s += c(x + 74, 112, 15, 'none').replace('fill="none"', 'fill="none" stroke="' + cols[2] + '" stroke-width="4"'); s += c(x + 150, 158, 15, 'none').replace('fill="none"', 'fill="none" stroke="' + cols[2] + '" stroke-width="4"'); }
      if (i < 2) { s += p('M ' + (x + 236) + ' 106 h 10', 'none', ' stroke="var(--ink-4)" stroke-width="3"'); s += p('M ' + (x + 244) + ' 98 l 12 8 l -12 8 Z', 'var(--ink-4)'); }
    }
    s += t(390, 216, 15, 'the same text, three times, looking for something different each time', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 780 240', s);
  };

  /* what a good first-day group actually looks like */
  FIG['group-roles'] = function () {
    var s = r(0, 0, 780, 270, 'var(--surface-2)', 14);
    s += c(390, 140, 96, 'var(--teal-050)');
    s += c(390, 140, 96, 'none').replace('fill="none"', 'fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="9 7"');
    s += t(390, 134, 15, 'one suspicious', 'var(--primary)', 'middle', 700);
    s += t(390, 156, 15, 'email', 'var(--primary)', 'middle', 700);
    var rigs = ['f-20s-a', 'm-20s-b', 'f-30s-h', 'm-30s-a'];
    var says = ['Me too.', 'Me three.', 'Me four.', 'I’m nervous.'];
    var at = [[70, 40], [620, 40], [620, 150], [70, 150]];
    for (var i = 0; i < 4; i++) {
      s += '<g transform="translate(' + at[i][0] + ',' + at[i][1] + ') scale(0.34)">' + A.actor('gr' + i, rigs[i]) + '</g>';
      var bx = at[i][0] < 300 ? at[i][0] + 78 : at[i][0] - 128;
      s += r(bx, at[i][1] + 10, 120, 34, 'var(--surface)', 10);
      s += r(bx, at[i][1] + 10, 120, 34, 'none', 10).replace('fill="none"', 'fill="none" stroke="var(--accent)" stroke-width="2"');
      s += t(bx + 60, at[i][1] + 33, 14, says[i], 'var(--accent)', 'middle', 700);
    }
    s += t(390, 256, 15, 'saying you are nervous is what stopped everyone being nervous', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 780 270', s);
  };

  /* five cyber jobs, and the fact that skills overlap */
  FIG['job-skills'] = function () {
    var s = r(0, 0, 900, 300, 'var(--surface-2)', 14);
    var jobs = [
      ['SOC analyst', '#0b5f6b', 'stays calm'],
      ['Network engineer', '#4a5fb5', 'reads diagrams'],
      ['Penetration tester', '#b4531a', 'thinks like an attacker'],
      ['Help-desk technician', '#2f8f7e', 'listens patiently'],
      ['Awareness trainer', '#7a4b9e', 'explains simply']
    ];
    for (var i = 0; i < 5; i++) {
      var x = 16 + i * 176;
      s += r(x, 28, 164, 150, 'var(--surface)', 12);
      s += r(x, 28, 164, 150, 'none', 12).replace('fill="none"', 'fill="none" stroke="' + jobs[i][1] + '" stroke-width="3"');
      s += r(x, 28, 164, 34, jobs[i][1], 12);
      s += r(x, 50, 164, 12, jobs[i][1]);
      s += t(x + 82, 51, 13, jobs[i][0], '#fff', 'middle', 700);
      s += '<g transform="translate(' + (x + 36) + ',76) scale(0.3)">' + A.actor('js' + i, i % 2 ? 'f-30s-a' : 'm-20s-a') + '</g>';
      s += t(x + 82, 166, 12.5, jobs[i][2], 'var(--text-2)', 'middle', 600);
    }
    s += r(120, 206, 660, 44, 'var(--teal-100)', 12);
    s += t(450, 234, 16, 'writes clear reports  ·  notices small details  ·  learns new tools quickly', 'var(--teal-800)', 'middle', 700);
    s += t(450, 282, 15, 'the skills in the bottom bar belong to all five jobs — that is the point', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 900 300', s);
  };

  /* the politest way to break a security rule */
  FIG['badge-door'] = function () {
    var s = r(0, 0, 760, 300, 'var(--surface-2)', 14);
    s += r(40, 30, 260, 240, '#b7c7d2', 6);
    s += r(56, 46, 228, 208, '#dfe8ee', 4);
    s += r(300, 30, 24, 240, '#8aa3b0', 3);
    /* badge reader, unused */
    s += r(336, 110, 44, 68, '#2b3a46', 7);
    s += c(358, 134, 11, '#ff8a80');
    s += t(358, 196, 13, 'not used', 'var(--no)', 'middle', 700);
    /* the polite colleague holding the door */
    s += '<g transform="translate(150,96) scale(0.5)">' + A.actor('bd1', 'm-30s-a') + '</g>';
    /* the visitor with no badge */
    s += '<g transform="translate(470,96) scale(0.5)">' + A.actor('bd2', 'm-50s-b') + '</g>';
    s += c(560, 150, 24, 'var(--surface)');
    s += c(560, 150, 24, 'none').replace('fill="none"', 'fill="none" stroke="var(--no)" stroke-width="4"');
    s += p('M 548 138 l 24 24 M 572 138 l -24 24', 'none', ' stroke="var(--no)" stroke-width="4" stroke-linecap="round"');
    s += t(560, 192, 13, 'no badge', 'var(--no)', 'middle', 700);
    s += r(596, 56, 150, 50, 'var(--surface)', 12);
    s += r(596, 56, 150, 50, 'none', 12).replace('fill="none"', 'fill="none" stroke="var(--accent)" stroke-width="2"');
    s += t(671, 78, 13, 'After you!', 'var(--accent)', 'middle', 700);
    s += t(671, 96, 11.5, 'polite — and wrong', 'var(--text-2)', 'middle', 600);
    s += t(380, 288, 15, 'he did not mean to disobey the rule, but he disobeyed it', 'var(--text-2)', 'middle', 600);
    return svgFit('0 0 760 300', s);
  };

  A.figure = function (name, arg) { return (FIG[name] || FIG['tense-timeline'])(arg); };
  A.hasFigure = function (name) { return !!FIG[name]; };
  A.figureNames = Object.keys(FIG);

  /* ============================================================
     MOTION — the runtime for figures that move when pressed.

     scene.js animates people against a recorded voice: it is built
     around an audio clock and measured tracks. This is the other
     kind of motion — short, pressed-for, silent — so it gets its
     own ~90 lines rather than bending the scene player around a
     job it was not designed for.

     One rule carries the whole thing: a run is cancellable, and a
     cancelled run can never paint again. Press a second tense
     while the first is mid-flight and the first must not write one
     more frame, or the figure ends up showing a mixture of two
     tenses — which is precisely the confusion it exists to fix.
     ============================================================ */
  var M = A.motion = {};

  M.reduced = function () {
    if (M._forceReduced !== undefined) return M._forceReduced;   /* test hook */
    try { return !!(w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches); }
    catch (e) { return false; }
  };

  M.easeOut = function (k) { return 1 - Math.pow(1 - k, 3); };
  M.easeInOut = function (k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; };

  /* The frame source is swappable for one reason: headless Chrome
     fires requestAnimationFrame once and then stops, so without
     this the only thing a gate could test is the reduced-motion
     path — which is the one path that has no motion in it. The
     test pump replaces these two and steps the clock by hand. */
  M._raf = function (fn) { return w.requestAnimationFrame(fn); };
  M._caf = function (id) { w.cancelAnimationFrame(id); };
  M._to = function (fn, ms) { return w.setTimeout(fn, ms); };
  M._ct = function (id) { w.clearTimeout(id); };

  /**
   * run() -> one figure's animation slot.
   *
   * begin() cancels whatever was running and returns a token; every
   * callback checks that token before touching the DOM. Under
   * reduced motion each step collapses to its end state and the
   * sequence completes synchronously, so the figure still teaches
   * — it just stops moving.
   */
  M.run = function () {
    var gen = 0, raf = 0, timers = [];
    var api = {
      cancel: function () {
        gen++;
        if (raf) { M._caf(raf); raf = 0; }
        timers.forEach(function (t2) { M._ct(t2); });
        timers = [];
      },
      live: function (g) { return g === gen; },
      begin: function () { api.cancel(); return gen; },
      /* step(k) is called with 0..1; done() once, at the end */
      tween: function (g, ms, step, done) {
        if (!api.live(g)) return;
        if (M.reduced() || ms <= 0) { step(1); if (done) done(); return; }
        /* null, not 0: a first timestamp of exactly 0 is legal, and
           `if (!t0)` would then re-base the tween on every frame */
        var t0 = null;
        function frame(ts) {
          if (!api.live(g)) return;
          if (t0 === null) t0 = ts;
          var k = Math.min(1, (ts - t0) / ms);
          step(k);
          if (k < 1) { raf = M._raf(frame); return; }
          raf = 0;
          if (done) done();
        }
        raf = M._raf(frame);
      },
      wait: function (g, ms, done) {
        if (!api.live(g)) return;
        if (M.reduced() || ms <= 0) { done(); return; }
        timers.push(M._to(function () { if (api.live(g)) done(); }, ms));
      },
      /* each step gets next(); calling it runs the following step */
      seq: function (g, steps) {
        var i = 0;
        (function next() {
          if (!api.live(g) || i >= steps.length) return;
          steps[i++](next);
        })();
      }
    };
    return api;
  };

  /* ============================================================
     CLOCK — a face whose hands are addressable.

     Drawn in its own 120x120 box. The hands are groups with the
     centre as transform-origin and pointing at twelve, so setting
     an angle is the entire API; the live figures spin them
     through cumulative degrees (which is how the hands can wind
     several turns backwards without snapping).
     ============================================================ */
  A.clock = function (id, opts) {
    opts = opts || {};
    var cx = 60, cy = 60, R = opts.r || 46, s = '';
    s += c(cx, cy, R, 'var(--surface)');
    s += c(cx, cy, R, 'none').replace('fill="none"',
      'fill="none" stroke="var(--ink-4)" stroke-width="4"');
    for (var i = 0; i < 12; i++) {
      var a = (i * 30) * Math.PI / 180;
      var o1 = i % 3 === 0 ? R - 11 : R - 7, o2 = R - 3;
      s += p('M ' + (cx + Math.sin(a) * o1).toFixed(1) + ' ' + (cy - Math.cos(a) * o1).toFixed(1) +
        ' L ' + (cx + Math.sin(a) * o2).toFixed(1) + ' ' + (cy - Math.cos(a) * o2).toFixed(1),
        'none', ' stroke="var(--ink-4)" stroke-width="' + (i % 3 === 0 ? 4 : 2) +
        '" stroke-linecap="round"');
    }
    s += '<g id="' + id + '-hr" style="transform-origin:60px 60px">' +
      p('M 60 60 L 60 36', 'none', ' stroke="var(--text)" stroke-width="6.5" stroke-linecap="round"') + '</g>';
    s += '<g id="' + id + '-min" style="transform-origin:60px 60px">' +
      p('M 60 60 L 60 24', 'none', ' stroke="var(--text)" stroke-width="4.5" stroke-linecap="round"') + '</g>';
    s += c(cx, cy, 5, 'var(--accent)');
    return s;
  };

  /** the two hand angles, in degrees, for a wall-clock time */
  A.clockAngles = function (h, m) {
    return { hr: ((h % 12) * 30) + (m * 0.5), min: m * 6 };
  };

  /* ============================================================
     LIVE — figures that build themselves into a DOM node.

     A normal figure is a string, which is why renderVisual can
     treat them all alike. A live figure needs elements it can
     keep hold of and handlers to hang off them, so it is handed a
     host and returns { destroy } for the caller to call when the
     card, modal or stage goes away.
     ============================================================ */
  var LIVE = {};
  var NS = 'http://www.w3.org/2000/svg';
  var liveSeq = 0;

  function mkEl(tag, cls, html) {
    var n = w.document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function svgEl(tag, attrs) {
    var n = w.document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    return n;
  }

  /* ------------------------------------------------------------
     Voice for the live animations.

     A narrator exists only when BOTH halves are loaded: the spoken
     strings (assets/data/unit1/narration.js) and a course voice to
     say them in (voices.js + audio.js). When either is absent this
     returns null — the animation then adds no button and makes no
     sound, and its DOM is exactly what it was before voice existed.
     That is deliberate: tools/check-motion.html and check-overlap.html
     load art.js and core.js WITHOUT the data files, and they must go
     on measuring the same drawing they always measured.
     ------------------------------------------------------------ */
  function narrator(fig) {
    var C = w.CSB1;
    if (!C || !C.narrationData || !C.narrationData[fig]) return null;
    if (typeof C.say !== 'function' || typeof C.voiceFor !== 'function') return null;
    if (!C.voiceFor('course')) return null;
    var seq = 0;
    return {
      lines: C.narrationData[fig],
      /* Each call supersedes the one before: a learner who presses a
         second tense must not hear the first one finish. The token is
         what makes the chained onend of a dropped line fall silent. */
      say: function (list) {
        var mine = ++seq, i = 0;
        (function step() {
          if (mine !== seq) return;
          while (i < list.length && !list[i]) i++;
          if (i >= list.length) return;
          C.say(list[i++], 'course', { onend: function () { if (mine === seq) step(); } });
        })();
      },
      stop: function () { seq++; try { C.stopSpeak(); } catch (e) { } }
    };
  }

  /* The speaker toggle, identical on both animations. Voice starts ON
     — the narration is the point of it — and this is how it is turned
     off, which matters in a classroom of twenty laptops. */
  function voiceBtn(onToggle) {
    var b = mkEl('button', 'tl-say on', A.icon('sound', 15) + 'Explain');
    b.type = 'button';
    b.title = 'Read the example and the explanation aloud';
    b.setAttribute('aria-pressed', 'true');
    b.addEventListener('click', function () {
      var on = b.classList.toggle('on');
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      onToggle(on);
    });
    return b;
  }

  /* ------------------------------------------------------------
     LIVE tense-timeline

     Press a tense and three things happen at once: the line shows
     WHEN it sits, the stage box shows WHAT the person is doing,
     and the caption says the sentence. Those three are the whole
     lesson, and separating them is what the old drawing got wrong
     — it showed all four at once, so it showed none of them.
     ------------------------------------------------------------ */
  var TENSE = {
    sp: {
      eg: 'I write my tasks in a notebook.',
      note: 'Every day — again and again. The simple present is not one of these days; it is all of them.',
      mark: '-dots', colour: '#2f8f7e', clock: 'every day'
    },
    prc: {
      eg: 'I am memorizing new terms.',
      note: 'Happening right now, and not finished. That unfinished part is why it needs <b>am / is / are</b>.',
      mark: '-bar-prc', colour: '#0e7684', clock: 'right now'
    },
    spa: {
      eg: 'I wrote the report on Monday.',
      note: 'One finished point behind you. It started and it ended, so the time is closed.',
      mark: '-pt', colour: '#b4531a', clock: 'Monday, 4:00'
    },
    pac: {
      eg: 'I was eating dinner at eight.',
      note: 'A stretch of time that was already running. Not one point — a length of the past.',
      mark: '-bar-pac', colour: '#4a5fb5', clock: '8:00 → 8:40'
    }
  };

  /* the thing in the learner's hands, one per tense */
  function propFor(k) {
    if (k === 'sp') {                                    /* a notebook, being written in */
      return r(184, 112, 66, 48, '#fdfdfb', 4) +
        p('M 184 112 v 48', 'none', ' stroke="#c9ccc6" stroke-width="3"') +
        p('M 196 128 h 44 M 196 140 h 36 M 196 151 h 26', 'none',
          ' stroke="#9fb3bf" stroke-width="3" stroke-linecap="round"');
    }
    if (k === 'prc') {                                   /* an open book, held up */
      return p('M 182 118 q 36 -12 36 6 v 36 q 0 -16 -36 -4 Z', '#fdfdfb') +
        p('M 254 118 q -36 -12 -36 6 v 36 q 0 -16 36 -4 Z', '#f3f1ea') +
        p('M 218 124 v 36', 'none', ' stroke="#c9ccc6" stroke-width="3"') +
        p('M 190 130 h 20 M 190 140 h 16 M 226 130 h 20 M 226 140 h 14', 'none',
          ' stroke="#b9c3c9" stroke-width="2.5" stroke-linecap="round"');
    }
    if (k === 'spa') {                                   /* the finished report */
      return r(186, 110, 64, 52, '#fdfdfb', 4) +
        p('M 196 126 h 44 M 196 137 h 44 M 196 148 h 30', 'none',
          ' stroke="#9fb3bf" stroke-width="3" stroke-linecap="round"');
    }
    /* pac — dinner */
    return e(218, 148, 40, 13, '#e7e3d8') + e(218, 144, 32, 10, '#fdfdfb') +
      e(214, 142, 13, 6, '#c08042') + e(228, 145, 10, 5, '#6f9a52');
  }

  LIVE['tense-timeline'] = function (host, arg) {
    arg = arg || {};
    var uid = 'tl' + (++liveSeq);
    var AX = TL.ax, RUN = M.run();
    var doc = w.document;

    /* ---------- the DOM ---------- */
    var wrap = mkEl('div', 'tl-live');
    var figBox = mkEl('div', 'tl-fig', FIG['tense-timeline']({ uid: uid }));
    wrap.appendChild(figBox);

    var row = mkEl('div', 'tl-row');
    var cap = mkEl('div', 'tl-cap');
    cap.setAttribute('role', 'status');
    cap.setAttribute('aria-live', 'polite');
    cap.innerHTML = '<div class="tl-eg tl-rest">Press a tense to see when it happens.</div>' +
      '<div class="tl-note">The line shows <b>when</b>; the panel beside it shows <b>what the person is doing</b>.</div>';
    row.appendChild(cap);

    var stage = mkEl('div', 'tl-stage');
    stage.innerHTML = '<svg viewBox="0 0 300 200" xmlns="' + NS + '" ' +
      'preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      r(0, 0, 300, 200, 'var(--surface-2)', 12) +
      '<g id="' + uid + '-clockdim">' +
      '<g transform="translate(6,30)">' + A.clock(uid) + '</g>' +
      t(66, 176, 13, '', 'var(--text-2)', 'middle', 700).replace('<text ', '<text id="' + uid + '-ctime" ') +
      '</g>' +
      p('M 150 170 H 290', 'none', ' stroke="var(--ink-4)" stroke-width="3" stroke-linecap="round"') +
      '<g transform="translate(168,22) scale(0.5)">' + A.actor(uid + '-p', 'm-20s-b') + '</g>' +
      '<g id="' + uid + '-prop"></g>' +
      '<g id="' + uid + '-spark"></g>' +
      '</svg>';
    row.appendChild(stage);
    wrap.appendChild(row);

    /* the controls are real buttons: the svg is aria-hidden like
       every other drawing here, so the keyboard and the screen
       reader need something of their own to press */
    var ctl = mkEl('div', 'tl-ctl no-print');
    TL.tens.forEach(function (ch) {
      var b = mkEl('button', 'tl-b', A.esc(ch.label));
      b.type = 'button';
      b.style.setProperty('--c', ch.fill);
      b.setAttribute('data-k', ch.k);
      b.setAttribute('aria-pressed', 'false');
      ctl.appendChild(b);
    });

    /* the voice: reads the example, then says why that tense fits */
    var NARR = narrator('tense-timeline'), voiceOn = true;
    if (NARR) {
      ctl.appendChild(voiceBtn(function (on) {
        voiceOn = on;
        if (!on) NARR.stop();
        else if (current) speakFor(current);
      }));
    }
    function speakFor(k) {
      if (!NARR || !voiceOn) return;
      var n = NARR.lines[k];
      if (n) NARR.say([n.eg, n.note]);
    }

    wrap.appendChild(ctl);

    /* on paper nothing can be pressed, so every sentence prints */
    var pr = mkEl('div', 'tl-print');
    pr.innerHTML = TL.tens.map(function (ch) {
      return '<div class="tl-pr"><b style="color:' + ch.fill + '">' + A.esc(ch.label) + '</b> — ' +
        A.esc(TENSE[ch.k].eg) + '</div>';
    }).join('');
    wrap.appendChild(pr);

    host.appendChild(wrap);

    /* ---------- handles ---------- */
    var svg = figBox.querySelector('svg');
    var sSvg = stage.querySelector('svg');
    function q(id) { return svg.querySelector('#' + uid + id); }
    function sq(id) { return sSvg.querySelector('#' + uid + id); }

    var conn = q('-conn'), prop = sq('-prop'), spark = sq('-spark');
    var hrH = sq('-hr'), minH = sq('-min'), cTime = sq('-ctime'), clockG = sq('-clockdim');
    var armL = sq('-p-armL'), armR = sq('-p-armR'), headG = sq('-p-head');
    var lidL = sq('-p-lidL'), lidR = sq('-p-lidR');
    var marks = { sp: q('-dots'), prc: q('-bar-prc'), spa: q('-pt'), pac: q('-bar-pac') };
    var chipG = {}; TL.tens.forEach(function (ch) { chipG[ch.k] = q('-chip-' + ch.k); });

    /* ---------- small painters ---------- */
    function drawIn(d, colour, width, ms, g, done) {
      var el = svgEl('path', {
        d: d, fill: 'none', stroke: colour, 'stroke-width': width,
        'stroke-linecap': 'round', 'stroke-linejoin': 'round'
      });
      conn.appendChild(el);
      var L = 0;
      try { L = el.getTotalLength(); } catch (e) { L = 0; }
      if (L) {
        el.style.strokeDasharray = L;
        el.style.strokeDashoffset = L;
        RUN.tween(g, ms, function (k) { el.style.strokeDashoffset = (L * (1 - k)).toFixed(2); }, done);
      } else if (done) done();
      return el;
    }
    function arrowAt(x, y, colour) {
      conn.appendChild(svgEl('path', {
        d: 'M ' + (x - 6) + ' ' + (y - 10) + ' L ' + (x + 6) + ' ' + (y - 10) + ' L ' + x + ' ' + y + ' Z',
        fill: colour
      }));
    }
    function setHands(hd, md) {
      if (hrH) hrH.style.transform = 'rotate(' + hd.toFixed(2) + 'deg)';
      if (minH) minH.style.transform = 'rotate(' + md.toFixed(2) + 'deg)';
    }
    function pose(l, rr) {
      if (armL) armL.style.transform = 'rotate(' + l + 'deg)';
      if (armR) armR.style.transform = 'rotate(' + rr + 'deg)';
    }

    /* Hands are tweened through cumulative degrees, not clock times,
       which is the only way they can wind several turns and still
       stop on the right hour. These pick an angle congruent to the
       target but a whole number of turns away in one direction. */
    function windBack(from, to, turns) {
      var d = (((from - to) % 360) + 360) % 360;
      return from - d - 360 * turns;
    }
    function windFwd(from, to, turns) {
      var d = (((to - from) % 360) + 360) % 360;
      return from + d + 360 * turns;
    }

    /* ---------- state ---------- */
    var hrDeg = 0, minDeg = 0, blinkT = 0, current = null;

    function restClock() {
      var now = new Date();
      if (arg.fixedNow) { now = new Date(2024, 0, 1, arg.fixedNow[0], arg.fixedNow[1]); }
      var a = A.clockAngles(now.getHours(), now.getMinutes());
      hrDeg = a.hr; minDeg = a.min;
      setHands(hrDeg, minDeg);
      return now;
    }

    function clearSel() {
      conn.innerHTML = '';
      prop.innerHTML = '';
      spark.innerHTML = '';
      TL.tens.forEach(function (ch) {
        chipG[ch.k].style.opacity = '1';
        marks[ch.k].style.opacity = '1';
      });
      clockG.style.opacity = '1';
      ctl.querySelectorAll('.tl-b').forEach(function (b) {
        b.classList.remove('on'); b.setAttribute('aria-pressed', 'false');
      });
      /* anything a previous tense resized goes back */
      q('-pacrect').setAttribute('width', TL.pacBar[1]);
      q('-pactext').style.opacity = '1';
      q('-prcrect').setAttribute('width', TL.prcBar[1]);
      q('-ptc').setAttribute('r', '11');
      for (var i = 0; i < TL.dots.length; i++) q('-dot-' + i).setAttribute('r', '5.5');
      pose(0, 0);
      if (headG) headG.style.transform = '';
    }

    function focus(k) {
      TL.tens.forEach(function (ch) {
        var on = ch.k === k;
        chipG[ch.k].style.opacity = on ? '1' : '.22';
        marks[ch.k].style.opacity = on ? '1' : '.18';
      });
      ctl.querySelectorAll('.tl-b').forEach(function (b) {
        var on = b.getAttribute('data-k') === k;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      var T = TENSE[k];
      cap.innerHTML = '<div class="tl-eg" style="border-color:' + T.colour + '">' +
        A.esc(T.eg) + '</div><div class="tl-note">' + T.note + '</div>';
      prop.innerHTML = propFor(k);
      if (cTime) cTime.textContent = T.clock;
    }

    /* ---------- blinking, so the figure is not a waxwork ---------- */
    function startBlink() {
      stopBlink();
      blinkT = setInterval(function () {
        if (!lidL) return;
        [lidL, lidR].forEach(function (l) { l.style.transition = 'transform .09s'; l.style.transform = 'scaleY(1)'; });
        setTimeout(function () {
          [lidL, lidR].forEach(function (l) { if (l) l.style.transform = 'scaleY(0)'; });
        }, 100);
      }, 3400);
    }
    function stopBlink() { if (blinkT) { clearInterval(blinkT); blinkT = 0; } }

    /* ---------- the four sequences ---------- */
    var RAIL = 84, CHIPBOT = 62;

    function play(k) {
      var g = RUN.begin();
      clearSel();
      focus(k);
      current = k;
      speakFor(k);
      var T = TENSE[k], cx = 0;
      TL.tens.forEach(function (ch) { if (ch.k === k) cx = ch.x + 100; });

      if (k === 'sp') {
        /* a comb: one stem, one rail, a tooth onto every day.
           Nine separate arrows from one chip would cross into a
           fan; the comb says "all of these" in one shape. */
        var teeth = [];
        RUN.seq(g, [
          function (next) { drawIn('M ' + cx + ' ' + CHIPBOT + ' V ' + RAIL, T.colour, 3, 160, g, next); },
          function (next) {
            drawIn('M ' + TL.dots[0] + ' ' + RAIL + ' H ' + TL.dots[TL.dots.length - 1],
              T.colour, 3, 420, g, next);
          },
          function (next) {
            TL.dots.forEach(function (x) {
              var el = svgEl('path', {
                d: 'M ' + x + ' ' + RAIL + ' V ' + (AX - 14), fill: 'none',
                stroke: T.colour, 'stroke-width': 2.5, 'stroke-linecap': 'round'
              });
              el.style.opacity = '0';
              conn.appendChild(el);
              var hd = svgEl('path', {
                d: 'M ' + (x - 5) + ' ' + (AX - 20) + ' L ' + (x + 5) + ' ' + (AX - 20) +
                  ' L ' + x + ' ' + (AX - 11) + ' Z', fill: T.colour
              });
              hd.style.opacity = '0';
              conn.appendChild(hd);
              teeth.push([el, hd]);
            });
            RUN.tween(g, 640, function (kk) {
              var n = Math.ceil(kk * teeth.length);
              for (var i = 0; i < teeth.length; i++) {
                var on = i < n ? '1' : '0';
                teeth[i][0].style.opacity = on; teeth[i][1].style.opacity = on;
              }
            }, next);
          },
          function (next) {
            /* and now the point of the whole thing: it keeps happening */
            RUN.tween(g, 1100, function (kk) {
              var pulse = Math.max(0, Math.sin(kk * Math.PI * 6));
              var rr = (5.5 + pulse * 4).toFixed(2);
              for (var i = 0; i < TL.dots.length; i++) q('-dot-' + i).setAttribute('r', rr);
            }, next);
          },
          function () { for (var i = 0; i < TL.dots.length; i++) q('-dot-' + i).setAttribute('r', '5.5'); }
        ]);
        /* writing, all the way through */
        RUN.tween(g, 2300, function (kk) { pose(-48, 52 + Math.sin(kk * Math.PI * 14) * 7); });
        return;
      }

      if (k === 'prc') {
        var nowD = restClock();
        RUN.seq(g, [
          function (next) {
            drawIn('M ' + cx + ' ' + CHIPBOT + ' V ' + RAIL + ' H ' + TL.now + ' V ' + (TL.barY - 10),
              T.colour, 3, 620, g, function () { arrowAt(TL.now, TL.barY - 2, T.colour); next(); });
          },
          function (next) {
            /* held open, read, and still going */
            pose(-58, 58);
            if (headG) { headG.style.transition = 'transform .4s'; headG.style.transform = 'rotate(5deg)'; }
            var bar = q('-prcrect');
            RUN.tween(g, 2000, function (kk) {
              var b = 0.5 + 0.5 * Math.sin(kk * Math.PI * 5);
              bar.style.opacity = (0.62 + b * 0.38).toFixed(3);
              /* new terms going in */
              var n = Math.floor(kk * 4);
              if (spark.childNodes.length <= n && n < 4) {
                var sp2 = svgEl('text', {
                  x: 196 + n * 14, y: 108 - n * 4, 'font-size': 15, fill: '#0e7684',
                  'font-family': 'Segoe UI,system-ui,sans-serif', 'font-weight': 800
                });
                sp2.textContent = '✦';
                spark.appendChild(sp2);
              }
              for (var i = 0; i < spark.childNodes.length; i++) {
                spark.childNodes[i].style.opacity = (0.3 + 0.7 * Math.abs(Math.sin(kk * Math.PI * 4 + i))).toFixed(2);
              }
            }, function () { bar.style.opacity = '1'; next(); });
          }
        ]);
        /* the face is a twelve-hour one, so the label has to be too,
           or the clock and its caption disagree in the evening */
        if (cTime) {
          var hh = nowD.getHours();
          cTime.textContent = (hh % 12 || 12) + ':' + ('0' + nowD.getMinutes()).slice(-2) +
            ' ' + (hh < 12 ? 'am' : 'pm') + ' — now';
        }
        return;
      }

      if (k === 'spa') {
        restClock();
        var h0 = hrDeg, m0 = minDeg;
        var target = A.clockAngles(4, 0);
        /* wind back and stop dead on Monday 4:00 */
        var hTo = windBack(h0, target.hr, 1);
        var mEnd = windBack(m0, target.min, 2);
        RUN.seq(g, [
          function (next) {
            drawIn('M ' + cx + ' ' + CHIPBOT + ' V ' + RAIL + ' H ' + TL.pt + ' V ' + (AX - 20),
              T.colour, 3, 620, g, function () { arrowAt(TL.pt, AX - 12, T.colour); next(); });
          },
          function (next) {
            /* the hands run backwards and brake — the only moment in
               the figure where time visibly reverses */
            RUN.tween(g, 1250, function (kk) {
              var e2 = M.easeOut(kk);
              setHands(h0 + (hTo - h0) * e2, m0 + (mEnd - m0) * e2);
              pose(-46, 50 + Math.sin(kk * Math.PI * 9) * 8);
            }, next);
          },
          function (next) {
            /* done: pen down, and a tick on the finished page */
            pose(-10, 8);
            var tick = svgEl('path', {
              d: 'M 230 132 l 7 8 l 14 -18', fill: 'none', stroke: '#2f8f7e',
              'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
            });
            prop.appendChild(tick);
            var L = 0; try { L = tick.getTotalLength(); } catch (e2) { }
            if (L) { tick.style.strokeDasharray = L; tick.style.strokeDashoffset = L; }
            RUN.tween(g, 280, function (kk) {
              if (L) tick.style.strokeDashoffset = (L * (1 - kk)).toFixed(2);
            }, next);
          },
          function (next) {
            var pt = q('-ptc');
            RUN.tween(g, 520, function (kk) {
              pt.setAttribute('r', (11 + Math.sin(kk * Math.PI) * 6).toFixed(2));
            }, function () { pt.setAttribute('r', '11'); next(); });
          }
        ]);
        return;
      }

      /* pac — back in time, then roll forward across a stretch */
      restClock();
      var ph0 = hrDeg, pm0 = minDeg;
      var at8 = A.clockAngles(8, 0), at840 = A.clockAngles(8, 40);
      var hBack = windBack(ph0, at8.hr, 1), mBack = windBack(pm0, at8.min, 1);
      var hFwd = windFwd(hBack, at840.hr, 0), mFwd = windFwd(mBack, at840.min, 0);
      var bar = q('-pacrect'), btx = q('-pactext'), btk = q('-pactick');
      RUN.seq(g, [
        function (next) {
          drawIn('M ' + cx + ' ' + CHIPBOT + ' V ' + RAIL + ' H ' +
            (TL.pacBar[0] + TL.pacBar[1] / 2) + ' V ' + (TL.barY - 10),
            T.colour, 3, 620, g, function () { arrowAt(TL.pacBar[0] + TL.pacBar[1] / 2, TL.barY - 2, T.colour); next(); });
        },
        function (next) {
          /* rewind: fast, and clearly backwards */
          bar.setAttribute('width', '0');
          btx.style.opacity = '0';
          btk.style.opacity = '0';
          RUN.tween(g, 820, function (kk) {
            var e2 = M.easeInOut(kk);
            setHands(ph0 + (hBack - ph0) * e2, pm0 + (mBack - pm0) * e2);
          }, next);
        },
        function (next) { RUN.wait(g, 260, next); },
        function (next) {
          /* and forward again, with the bar growing underneath —
             this is the stretch the past continuous names */
          RUN.tween(g, 1700, function (kk) {
            setHands(hBack + (hFwd - hBack) * kk, mBack + (mFwd - mBack) * kk);
            bar.setAttribute('width', (TL.pacBar[1] * kk).toFixed(1));
            pose(-44, 26 + Math.abs(Math.sin(kk * Math.PI * 5)) * 44);
          }, next);
        },
        function (next) {
          btk.style.opacity = '1';
          RUN.tween(g, 260, function (kk) { btx.style.opacity = kk.toFixed(2); },
            function () { btx.style.opacity = '1'; pose(-20, 16); next(); });
        }
      ]);
    }

    /* ---------- wiring ---------- */
    function onPress(k) { if (TENSE[k]) play(k); }

    ctl.addEventListener('click', function (ev) {
      var b = ev.target.closest ? ev.target.closest('.tl-b') : null;
      if (b) onPress(b.getAttribute('data-k'));
    });

    /* the chips in the drawing are pressable too, as a convenience
       for the mouse; the buttons above carry the keyboard duty */
    TL.tens.forEach(function (ch) {
      var gEl = chipG[ch.k];
      if (!gEl) return;
      gEl.style.cursor = 'pointer';
      gEl.addEventListener('click', function () { onPress(ch.k); });
    });

    restClock();
    startBlink();

    return {
      node: wrap,
      play: onPress,
      destroy: function () { RUN.cancel(); stopBlink(); if (NARR) NARR.stop(); }
    };
  };

  /* ------------------------------------------------------------
     LIVE two-actions — the pair that trips everyone up.

     A still picture can only assert that the long action carried
     on past the short one. Here it visibly does: the bar grows,
     the rod drops into the middle of it, and then the bar keeps
     growing. That continuing — after the interruption — is the
     whole rule, and it is the one thing the static drawing could
     never show.
     ------------------------------------------------------------ */
  var TA_STEPS = [
    'The long action starts, and keeps running.',
    'Then — at one point inside it — the short action happens.',
    'The long one did not stop. <b>while</b> joins them: ' +
    '<i>While I was eating dinner, I answered some SMS messages.</i>'
  ];

  LIVE['two-actions'] = function (host, arg) {
    arg = arg || {};
    var uid = 'ta' + (++liveSeq);
    var RUN = M.run();

    var wrap = mkEl('div', 'tl-live');
    var figBox = mkEl('div', 'tl-fig', FIG['two-actions']({ uid: uid }));
    wrap.appendChild(figBox);

    var cap = mkEl('div', 'ta-cap');
    cap.setAttribute('role', 'status');
    cap.setAttribute('aria-live', 'polite');
    wrap.appendChild(cap);

    var ctl = mkEl('div', 'tl-ctl tl-ctl-one no-print');
    var btn = mkEl('button', 'tl-b', 'Play');
    btn.type = 'button';
    btn.style.setProperty('--c', '#4a5fb5');
    ctl.appendChild(btn);

    /* The voice runs alongside the drawing, not inside its timing. The
       three stages take about 2.6 s and the three spoken lines rather
       longer, so the picture completes and the explanation goes on over
       the finished shape — a teacher talking across a diagram. Gating
       each stage on its line instead would have coupled the animation
       to the audio: CSB1.say drops its onend callback when play() is
       rejected, which would stall the sequence outright, and it would
       change the very timing tools/check-motion.html measures. */
    var NARR = narrator('two-actions'), voiceOn = true;
    if (NARR) {
      ctl.appendChild(voiceBtn(function (on) {
        voiceOn = on;
        if (!on) NARR.stop();
      }));
    }

    wrap.appendChild(ctl);

    var pr = mkEl('div', 'tl-print');
    pr.innerHTML = '<div class="tl-pr">' + TA_STEPS[2] + '</div>';
    wrap.appendChild(pr);

    host.appendChild(wrap);

    var svg = figBox.querySelector('svg');
    function q(id) { return svg.querySelector('#' + uid + id); }
    var bar = q('-bar'), barlab = q('-barlab'), longcap = q('-longcap'),
      shortG = q('-short'), whileG = q('-while');

    function rest() {
      RUN.cancel();
      bar.setAttribute('width', TA.barW);
      barlab.style.opacity = '1';
      longcap.style.opacity = '1';
      shortG.style.opacity = '1';
      shortG.style.transform = '';
      whileG.style.opacity = '1';
      cap.innerHTML = '<span class="ta-rest">Press play to watch the two actions meet.</span>';
      btn.textContent = 'Play';
    }

    function play() {
      var g = RUN.begin();
      btn.textContent = 'Play again';
      /* everything that the sequence will bring in, taken away */
      bar.setAttribute('width', '0');
      barlab.style.opacity = '0';
      longcap.style.opacity = '0';
      shortG.style.opacity = '0';
      shortG.style.transform = 'translateY(-70px)';
      whileG.style.opacity = '0';
      cap.innerHTML = TA_STEPS[0];
      if (NARR && voiceOn) NARR.say(NARR.lines.steps || []);

      var hit = TA.barW * TA.hit;          /* where the short action cuts in */
      RUN.seq(g, [
        function (next) {
          RUN.tween(g, 900, function (k) {
            bar.setAttribute('width', (hit * k).toFixed(1));
            longcap.style.opacity = Math.min(1, k * 2).toFixed(2);
            barlab.style.opacity = Math.max(0, (k - .45) * 2).toFixed(2);
          }, next);
        },
        function (next) {
          cap.innerHTML = TA_STEPS[1];
          /* the rod drops in and settles — a point, not a stretch */
          RUN.tween(g, 460, function (k) {
            var e2 = M.easeOut(k);
            shortG.style.opacity = Math.min(1, k * 3).toFixed(2);
            shortG.style.transform = 'translateY(' + (-70 * (1 - e2)).toFixed(1) + 'px)';
          }, next);
        },
        function (next) { RUN.wait(g, 260, next); },
        function (next) {
          cap.innerHTML = TA_STEPS[2];
          /* and on it goes — the part the still picture could not say */
          RUN.tween(g, 950, function (k) {
            bar.setAttribute('width', (hit + (TA.barW - hit) * k).toFixed(1));
            whileG.style.opacity = Math.max(0, (k - .35) / .65).toFixed(2);
          }, function () {
            bar.setAttribute('width', TA.barW);
            whileG.style.opacity = '1';
            next();
          });
        }
      ]);
    }

    btn.addEventListener('click', play);
    rest();

    return {
      node: wrap, play: play,
      destroy: function () { RUN.cancel(); if (NARR) NARR.stop(); }
    };
  };

  /* ------------------------------------------------------------
     LIVE shift-day — the day played forward, and stopped at NOW.

     The captions are the spoken lines with the key words marked;
     narration.js carries their twins for the voice. The last beat is
     the habit, and it needs its own moment because a single day
     structurally cannot show one: that is what the ghosted repeats
     are for, and it is why the old slider could never reach the
     simple present at all.
     ------------------------------------------------------------ */
  var SD_STEPS = [
    'At eight he <b>attended</b> the briefing. Finished — so it closes, and it takes a <b>simple past</b>.',
    'At half past ten he <b>was studying</b> at home. Still going on at that moment — <b>past continuous</b>.',
    'He <b>ate</b> lunch at half past twelve and reviewed his notes. Finished again.',
    'And now it is two o’clock. He <b>is sitting</b> at the SOC desk, an hour into his <b>shift</b>, and he has <b>not finished</b> — so this block has no end to draw. The day stops here.',
    'Every Tuesday it is the same: briefing, study, then the shift. A pattern, not one day — that is the <b>simple present</b>.'
  ];

  LIVE['shift-day'] = function (host, arg) {
    arg = arg || {};
    var uid = 'sd' + (++liveSeq);
    var RUN = M.run();

    var wrap = mkEl('div', 'tl-live');
    var figBox = mkEl('div', 'tl-fig', FIG['shift-day']({ uid: uid }));
    wrap.appendChild(figBox);

    var row = mkEl('div', 'tl-row');
    var cap = mkEl('div', 'tl-cap');
    cap.setAttribute('role', 'status');
    cap.setAttribute('aria-live', 'polite');
    row.appendChild(cap);

    var stage = mkEl('div', 'tl-stage');
    row.appendChild(stage);
    wrap.appendChild(row);

    var ctl = mkEl('div', 'tl-ctl tl-ctl-one no-print');
    var btn = mkEl('button', 'tl-b', 'Play the day');
    btn.type = 'button';
    btn.style.setProperty('--c', 'var(--accent)');
    ctl.appendChild(btn);

    var NARR = narrator('shift-day'), voiceOn = true;
    if (NARR) {
      ctl.appendChild(voiceBtn(function (on) {
        voiceOn = on;
        if (!on) NARR.stop();
      }));
    }
    wrap.appendChild(ctl);

    /* on paper nothing can be pressed, so every sentence prints */
    var pr = mkEl('div', 'tl-print');
    pr.innerHTML = SD_STEPS.map(function (s) {
      return '<div class="tl-pr">' + s + '</div>';
    }).join('');
    wrap.appendChild(pr);

    host.appendChild(wrap);

    /* ---------- handles ---------- */
    var svg = figBox.querySelector('svg');
    function q(id) { return svg.querySelector('#' + uid + id); }
    var head = q('-head'), ghost = q('-ghost');
    var blkG = {}, tagG = {};
    SD.blocks.forEach(function (b) {
      blkG[b.k] = q('-blk-' + b.k);
      tagG[b.k] = q('-tag-' + b.k);
    });

    /* On a phone the drawing is wider than the screen and scrolls
       sideways, so the playhead would simply walk off the right edge
       and the learner would never see NOW arrive — the one moment
       the whole figure exists for. Above 620px nothing overflows,
       scrollWidth equals clientWidth, and this does nothing. */
    function keepInView(x) {
      var max = figBox.scrollWidth - figBox.clientWidth;
      if (max <= 1) return;
      var px = (x / 880) * figBox.scrollWidth;          /* 880 = the viewBox width */
      figBox.scrollLeft = Math.max(0, Math.min(max, px - figBox.clientWidth * 0.55));
    }
    function headAt(x) {
      if (head) head.style.transform = 'translateX(' + (x - SD.x0).toFixed(1) + 'px)';
      keepInView(x);
    }
    function showStage(act) { stage.innerHTML = A.shiftScene(act); }

    function rest() {
      RUN.cancel();
      if (NARR) NARR.stop();
      headAt(SD.x0);
      SD.blocks.forEach(function (b) {
        blkG[b.k].style.opacity = '1';
        tagG[b.k].style.opacity = '1';
      });
      if (ghost) ghost.setAttribute('opacity', '0');
      cap.innerHTML = '<div class="tl-eg tl-rest">Press <b>Play the day</b> to walk through Danny’s Tuesday.</div>' +
        '<div class="tl-note">It runs from eight o’clock up to <b>now</b> — two o’clock — and stops there, ' +
        'because that is as far as the day has gone.</div>';
      /* at rest the stage shows what is true at NOW, which is the one
         thing the learner is about to be asked a question about */
      showStage(SD.blocks[SD.blocks.length - 1].act);
      btn.textContent = 'Play the day';
    }

    function play() {
      var g = RUN.begin();
      btn.textContent = 'Play it again';
      headAt(SD.x0);
      SD.blocks.forEach(function (b) {
        blkG[b.k].style.opacity = '0.22';
        tagG[b.k].style.opacity = '0';
      });
      if (ghost) ghost.setAttribute('opacity', '0');
      if (NARR && voiceOn) NARR.say(NARR.lines.steps || []);

      var steps = [];
      SD.blocks.forEach(function (b, i) {
        var from = i === 0 ? SD.x0 : SD.at(SD.blocks[i - 1].to);
        var to = SD.at(b.to);
        var enter = SD.at(b.from);
        /* the head crosses the gap between blocks too, so the pause
           between the briefing and getting home is real time passing
           rather than a jump cut */
        var kEnter = to === from ? 0 : (enter - from) / (to - from);
        var lit = false;
        steps.push(function (next) {
          cap.innerHTML = '<div class="tl-line">' + SD_STEPS[i] + '</div>';
          showStage(b.act);
          RUN.tween(g, 350 + Math.abs(to - from) * 2.2, function (k) {
            headAt(from + (to - from) * M.easeInOut(k));
            if (!lit && k >= kEnter) {
              lit = true;
              blkG[b.k].style.opacity = '1';
              tagG[b.k].style.opacity = '1';
            }
          }, function () {
            blkG[b.k].style.opacity = '1';
            tagG[b.k].style.opacity = '1';
            next();
          });
        });
        steps.push(function (next) { RUN.wait(g, 380, next); });
      });

      /* the habit: the same day again, and again, behind this one */
      steps.push(function (next) {
        cap.innerHTML = '<div class="tl-line">' + SD_STEPS[SD_STEPS.length - 1] + '</div>';
        RUN.tween(g, 820, function (k) {
          if (ghost) ghost.setAttribute('opacity', k.toFixed(3));
        }, function () {
          if (ghost) ghost.setAttribute('opacity', '1');
          next();
        });
      });

      RUN.seq(g, steps);
    }

    btn.addEventListener('click', play);
    rest();

    return {
      node: wrap, play: play,
      destroy: function () { RUN.cancel(); if (NARR) NARR.stop(); }
    };
  };

  A.live = function (name, host, arg) {
    return LIVE[name] ? LIVE[name](host, arg || {}) : null;
  };
  A.hasLive = function (name) { return !!LIVE[name]; };
  A.liveNames = function () { return Object.keys(LIVE); };

})(window);
