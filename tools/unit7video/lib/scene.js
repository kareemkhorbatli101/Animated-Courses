/* Deterministic lesson renderer.
   __init(timeline) builds the DOM once; __seek(t) renders the exact frame at
   t seconds. Nothing depends on wall-clock time, so frame N always looks the
   same no matter which worker renders it.                                   */
(function () {
'use strict';

var TL = null, SEG = [], cur = -1, prevIdx = -1;
var TR = 0.42;                     // panel crossfade
var $ = function (s) { return document.querySelector(s); };
var E = {};

/* ------------------------------------------------------------------ utils */
function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function eo3(p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 3); }
function eo4(p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 4); }
function eio(p) { p = clamp(p, 0, 1); return p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
function back(p) {                                  // soft overshoot
  p = clamp(p, 0, 1);
  var c = 1.9;
  return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2);
}
function stag(lt, delay, dur) { return clamp((lt - delay) / (dur || .55), 0, 1); }
function nz(t, s) { var x = Math.sin(t * 12.9898 + s * 78.233) * 43758.5453; return x - Math.floor(x); }
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
function norm(w) {
  return String(w).replace(/^[^\w$£€%]+|[^\w$£€%]+$/g, '').toLowerCase();
}
/* apply opacity + transform in one write */
function put(el, o, tx, ty, sc, rot) {
  el.style.opacity = o.toFixed(3);
  var tr = '';
  if (tx || ty) tr += 'translate(' + (tx || 0).toFixed(2) + 'px,' + (ty || 0).toFixed(2) + 'px)';
  if (sc !== undefined && sc !== 1) tr += ' scale(' + sc.toFixed(4) + ')';
  if (rot) tr += ' rotate(' + rot.toFixed(2) + 'deg)';
  el.style.transform = tr;
}

/* ------------------------------------------------------------- skylines */
var SKY = {
  damascus:
    '<svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax meet">' +
    '<g fill="currentColor">' +
    '<rect x="0" y="210" width="1200" height="90"/>' +
    '<rect x="40" y="170" width="120" height="60"/><rect x="70" y="150" width="20" height="24"/>' +
    '<path d="M200 190a56 56 0 0 1 112 0v40H200z"/><rect x="196" y="186" width="120" height="14"/>' +
    '<rect x="180" y="110" width="20" height="120" rx="8"/><circle cx="190" cy="104" r="12"/>' +
    '<rect x="312" y="110" width="20" height="120" rx="8"/><circle cx="322" cy="104" r="12"/>' +
    '<rect x="360" y="160" width="90" height="70"/><rect x="470" y="130" width="70" height="100"/>' +
    '<path d="M560 200a44 44 0 0 1 88 0v30h-88z"/><rect x="556" y="196" width="96" height="12"/>' +
    '<rect x="670" y="150" width="110" height="80"/><rect x="700" y="120" width="16" height="34"/>' +
    '<rect x="800" y="175" width="80" height="55"/>' +
    '<rect x="900" y="100" width="18" height="130" rx="7"/><circle cx="909" cy="94" r="11"/>' +
    '<path d="M930 195a40 40 0 0 1 80 0v35h-80z"/>' +
    '<rect x="1030" y="160" width="100" height="70"/><rect x="1140" y="185" width="60" height="45"/>' +
    '</g></svg>',
  shanghai:
    '<svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax meet">' +
    '<g fill="currentColor">' +
    '<rect x="0" y="220" width="1200" height="80"/>' +
    '<rect x="40" y="150" width="70" height="80"/><rect x="130" y="120" width="56" height="110"/>' +
    '<rect x="300" y="60" width="54" height="170"/><path d="M300 60l27-34 27 34z"/>' +
    '<rect x="318" y="8" width="18" height="24"/>' +
    '<circle cx="430" cy="92" r="34"/><circle cx="430" cy="172" r="22"/>' +
    '<rect x="422" y="40" width="16" height="190"/><rect x="424" y="4" width="12" height="40"/>' +
    '<path d="M520 230V86l34-28 34 28v144z"/><rect x="546" y="34" width="14" height="30"/>' +
    '<rect x="630" y="110" width="60" height="120"/><path d="M630 110l30-30 30 30z"/>' +
    '<path d="M730 230V70c0-10 40-10 40 0v160z"/><rect x="742" y="40" width="14" height="34"/>' +
    '<rect x="820" y="140" width="76" height="90"/><rect x="930" y="96" width="46" height="134"/>' +
    '<path d="M930 96l23-26 23 26z"/>' +
    '<rect x="1010" y="160" width="80" height="70"/><rect x="1120" y="130" width="60" height="100"/>' +
    '</g></svg>'
};

/* -------------------------------------------------------------- handset */
function handset(side, look) {
  var L = CHAR.LOOKS[look] || CHAR.LOOKS.lina;
  var m = side === 'right' ? ' transform="translate(400,0) scale(-1,1)"' : '';
  return '<g' + m + '><g transform="translate(92,208) rotate(-9) scale(.84)">' +
    /* body + ear/mouth pieces */
    '<rect x="-23" y="-26" width="46" height="146" rx="21" fill="#1b2735"/>' +
    '<ellipse cx="0" cy="-14" rx="30" ry="26" fill="#27394c"/>' +
    '<ellipse cx="0" cy="106" rx="30" ry="26" fill="#27394c"/>' +
    '<ellipse cx="0" cy="-14" rx="16" ry="13" fill="#0e1822"/>' +
    '<ellipse cx="0" cy="106" rx="16" ry="13" fill="#0e1822"/>' +
    /* the hand holding it */
    '<path fill="' + L.skin + '" d="M-27 22c0-13 11-21 27-21s27 8 27 21v36c0 13-11 21-27 21' +
      's-27-8-27-21z"/>' +
    '<g stroke="' + L.skinShade + '" stroke-width="3" stroke-linecap="round" fill="none">' +
    '<path d="M-17 33h34M-17 46h34M-17 59h34"/></g>' +
    '</g></g>';
}

/* ------------------------------------------------------------ cue layout */
function layoutCues(n, W, H, mode) {
  var g = 34, out = [], w, h, x0, y0;

  if (mode === 'stack') {                       // one column of wide rows
    h = Math.min(126, (H - g * (n - 1)) / n);
    y0 = (H - (h * n + g * (n - 1))) / 2;
    for (var i = 0; i < n; i++) out.push({ x: 0, y: y0 + i * (h + g), w: W, h: h });
    return out;
  }

  if (n <= 1) {
    w = Math.min(620, W * .52); h = Math.min(340, H * .64);
    return [{ x: (W - w) / 2, y: (H - h) / 2, w: w, h: h }];
  }
  if (n === 2) {
    w = Math.min(560, (W - g) / 2); h = Math.min(336, H * .64);
    y0 = (H - h) / 2; x0 = (W - (w * 2 + g)) / 2;
    return [{ x: x0, y: y0, w: w, h: h }, { x: x0 + w + g, y: y0, w: w, h: h }];
  }
  w = Math.min(540, (W - g) / 2); h = Math.min(252, (H - g) / 2);
  var y1 = (H - (h * 2 + g)) / 2;
  x0 = (W - (w * 2 + g)) / 2;
  out.push({ x: x0, y: y1, w: w, h: h });
  out.push({ x: x0 + w + g, y: y1, w: w, h: h });
  if (n === 3) out.push({ x: (W - w) / 2, y: y1 + h + g, w: w, h: h });
  else {
    out.push({ x: x0, y: y1 + h + g, w: w, h: h });
    out.push({ x: x0 + w + g, y: y1 + h + g, w: w, h: h });
  }
  return out.slice(0, n);
}

/* resolve each cue's absolute fire time from the word timings */
function prepCues(s) {
  if (s._cues) return s._cues;
  var cues = (s.data.cues || []), words = s.words || [], base = s.audioAt || s.t0;
  var used = {};
  s._cues = cues.map(function (c) {
    var key = norm(c.at), at = null;
    for (var i = 0; i < words.length; i++) {
      if (used[i]) continue;
      var w = norm(words[i].w);
      if (w === key || (key.length > 3 && w.indexOf(key) === 0)) { at = base + words[i].s; used[i] = 1; break; }
    }
    if (at === null) at = base + (words.length ? words[0].s : 0);
    return { c: c, at: at };
  });
  return s._cues;
}

function cueHTML(c, mode) {
  var cls = 'cue' + (c.tone ? ' ' + c.tone : '') + (c.big ? ' big' : '') +
            (mode === 'stack' ? ' row' : '');
  return '<div class="' + cls + '">' +
    (c.term ? '<span class="tag">KEY TERM</span>' : '') +
    '<span class="ci">' + window.icon(c.icon) + '</span>' +
    '<span class="cl">' + esc(c.label) + '</span></div>';
}

function renderCueStage(host, s, t, W, H, mode) {
  var list = prepCues(s);
  if (host._sig !== s.t0) {
    host.innerHTML = list.map(function (x) { return cueHTML(x.c, mode); }).join('');
    host._sig = s.t0;
    host._pos = layoutCues(list.length, W, H, mode);
    host._els = [].slice.call(host.children);
  }
  var endFade = s.t0 + s.dur;
  list.forEach(function (x, i) {
    var el = host._els[i], p = host._pos[i];
    el.style.left = p.x + 'px'; el.style.top = p.y + 'px';
    el.style.width = p.w + 'px'; el.style.height = p.h + 'px';
    var a = t - x.at;
    if (a < 0) { el.style.opacity = '0'; el.style.transform = 'translateY(46px) scale(.76)'; return; }
    var inP = back(a / .5), o = eo3(a / .35);
    var out = clamp((endFade - t) / .32, 0, 1);
    var fl = a < .55 ? (1 - a / .55) : 0;              // flash on fire
    var fy = Math.sin(t * 1.5 + i * 1.7) * 3.5;        // gentle idle float
    el.style.opacity = (o * out).toFixed(3);
    el.style.transform = 'translateY(' + ((1 - inP) * 46 + fy).toFixed(2) + 'px) scale(' +
      (0.76 + 0.24 * inP).toFixed(4) + ')';
    el.style.boxShadow = fl > 0
      ? '0 24px 60px rgba(0,0,0,.42), 0 0 ' + (54 * fl).toFixed(0) + 'px rgba(245,185,66,' + (.5 * fl).toFixed(2) + ')'
      : '0 24px 60px rgba(0,0,0,.42)';
  });
}

/* ------------------------------------------------------------- karaoke */
function buildWords(host, words) {
  host.innerHTML = words.map(function (w) {
    return '<w>' + esc(w.w) + '</w>';
  }).join(' ');
  host._w = [].slice.call(host.querySelectorAll('w'));
}
function paintWords(host, words, base, t, idle) {
  if (!host._w) return;
  var rt = t - base;
  for (var i = 0; i < host._w.length; i++) {
    var w = words[i], el = host._w[i], c = '';
    if (idle) c = 'on';
    else if (rt >= w.s && rt < w.e) c = 'on cur';
    else if (rt >= w.e) c = 'on';
    if (el.className !== c) el.className = c;
  }
}
function speaking(words, base, t) {
  var rt = t - base;
  for (var i = 0; i < words.length; i++) {
    if (rt >= words[i].s && rt < words[i].e) return 1;
    if (words[i].s > rt) break;
  }
  return 0;
}

/* ================================================================= init */
function init(tl) {
  TL = tl; SEG = tl.segments;
  document.documentElement.style.setProperty('--accent',
    tl.accent === 'teal' ? 'var(--teal)' : 'var(--amber)');
  document.documentElement.style.setProperty('--accentInk',
    tl.accent === 'teal' ? '#04231f' : '#2a1c05');

  E = {
    stage: $('#stage'), bgGlow: $('#bgGlow'), bgGrid: $('#bgGrid'), sky: $('#skyline'),
    prog: $('#prog'), unit: $('#unitTxt'), topTitle: $('#topTitle'), level: $('#levelChip'),
    subs: $('#subs'), subEn: $('#subEn'), subAr: $('#subAr'), subSpk: $('#subSpk'),
    subPhrase: $('#subPhrase'),
    pTitle: $('#pTitle'), pHeader: $('#pHeader'), pPreview: $('#pPreview'),
    pTeaser: $('#pTeaser'), pVocab: $('#pVocab'), pChapter: $('#pChapter'),
    pLine: $('#pLine'), pTurn: $('#pTurn'), pTakeaway: $('#pTakeaway'),
    pQuestion: $('#pQuestion'), pDiscussion: $('#pDiscussion'), pOutro: $('#pOutro'),
    cueStage: $('#cueStage'), cueStage2: $('#cueStage2'),
    rdChar: $('#rdChar'), rdCap: $('#rdCap'), callLink: $('#callLink'),
    sideL: $('#sideL'), sideR: $('#sideR')
  };
  E.unit.textContent = tl.meta.unit;
  E.topTitle.textContent = tl.meta.number + ' — ' + tl.meta.title;
  E.level.textContent = tl.meta.level;
  E.sky.innerHTML = SKY.damascus;
  E.sky.style.color = '#8fb6dd';

  /* reading narrator */
  if (tl.kind === 'reading') {
    E.rdChar.innerHTML = '<svg viewBox="52 66 296 372" preserveAspectRatio="xMidYMid slice">' +
      CHAR.build(tl.meta.narratorLook) + '</svg>';
    E.rdC = CHAR.cache(E.rdChar);
  } else {
    var sp = tl.meta.speakers;
    var keys = Object.keys(sp);
    var L = sp[keys[0]], R = sp[keys[1]];
    E.sides = {};
    [[E.sideL, L, keys[0], 'left'], [E.sideR, R, keys[1], 'right']].forEach(function (a) {
      var host = a[0], s = a[1], key = a[2], side = a[3];
      host.querySelector('.sky').innerHTML = SKY[s.place.toLowerCase()] || SKY.shanghai;
      host.querySelector('.sky').style.color = s.color;
      host.querySelector('.fig').innerHTML = '<svg viewBox="0 30 400 430">' +
        CHAR.build(s.look) + handset(side, s.look) + '</svg>';
      host.querySelector('.plate .nm').textContent = s.name;
      host.querySelector('.plate .rl').textContent = s.role;
      host.querySelector('.loc').textContent = s.place;
      E.sides[key] = {
        host: host, s: s, ch: CHAR.cache(host.querySelector('.fig')),
        ring: host.querySelector('.ring'), frame: host.querySelector('.frame')
      };
    });
    E.callLink.innerHTML =
      '<svg viewBox="0 0 600 120"><path id="clArc" d="M20 90q280-120 560 0" fill="none" ' +
      'stroke="rgba(255,255,255,.18)" stroke-width="3" stroke-dasharray="10 12"/>' +
      '<g id="clDots"></g></svg>';
    var dots = '';
    for (var i = 0; i < 5; i++) dots += '<circle r="7" fill="#fff" opacity=".9"/>';
    $('#clDots').innerHTML = dots;
    E.clDots = [].slice.call($('#clDots').children);
    E.clArc = $('#clArc');
  }
  window.__ready = true;
}

/* ------------------------------------------------------------ panel map */
function panelOf(type) {
  return ({
    title: E.pTitle, header: E.pHeader, preview: E.pPreview, teaser: E.pTeaser,
    vocab: E.pVocab, chapter: E.pChapter, line: E.pLine, turn: E.pTurn,
    takeaway: E.pTakeaway, question: E.pQuestion, discussion: E.pDiscussion,
    outro: E.pOutro
  })[type];
}

/* ------------------------------------------------------- segment entry */
function enter(i) {
  var s = SEG[i], d = s.data;
  switch (s.type) {
    case 'title':
      $('#tNum').textContent = d.number;
      $('#tTitle').textContent = d.title;
      $('#tTitleAr').textContent = d.titleAr || '';
      $('#tMeta').textContent = d.course;
      $('#tSetting').textContent = d.setting || '';
      if (d.speakers) {
        $('#tCast').innerHTML = Object.keys(d.speakers).map(function (k) {
          var sp = d.speakers[k];
          return '<div class="who"><div class="av" style="background:' + sp.color + '33">' +
            '<svg viewBox="112 104 176 176">' + CHAR.build(sp.look) + '</svg></div>' +
            '<div><div class="nm">' + esc(sp.name) + '</div>' +
            '<div class="rl">' + esc(sp.role) + '</div></div></div>';
        }).join('');
      } else $('#tCast').innerHTML = '';
      break;
    case 'header':
      $('#hStep').textContent = 'Part ' + d.step;
      $('#hEn').textContent = d.en; $('#hAr').textContent = d.ar;
      break;
    case 'preview':
      if (E.pPreview._sig !== 'built') {
        var all = [];
        for (var k = 0; k < SEG.length; k++)
          if (SEG[k].type === 'preview') all.push(SEG[k].data);
        $('#pvWrap').innerHTML = all.map(function (x, n) {
          return '<div class="pvRow"><div class="bul">' + window.icon(x.icon) + '</div>' +
            '<div class="tx"><div class="en">' + esc(x.en) + '</div>' +
            '<div class="ar">' + esc(x.ar) + '</div></div></div>';
        }).join('');
        E.pvRows = [].slice.call(document.querySelectorAll('.pvRow'));
        E.pPreview._sig = 'built';
      }
      break;
    case 'teaser':
      $('#tzEn').textContent = d.en; $('#tzAr').textContent = d.ar; break;
    case 'vocab':
      $('#vcIco').innerHTML = window.icon(d.icon);
      $('#vcTerm').textContent = d.term;
      $('#vcIpa').textContent = d.ipa || '';
      $('#vcCount').textContent = (d.index + 1) + ' / ' + d.total;
      $('#vcDef').textContent = d.def;
      $('#vcAr').textContent = d.ar;
      $('#vcArDef').textContent = d.arDef || '';
      break;
    case 'chapter':
      $('#cpIdx').textContent = String(d.index + 1).padStart(2, '0');
      $('#cpEn').textContent = d.en; $('#cpAr').textContent = d.ar;
      E.sky.innerHTML = SKY[d.scene === 'office_shanghai' ? 'shanghai' : 'damascus'];
      E.sky.style.color = '#8fb6dd';
      break;
    case 'line':
      buildWords(E.subEn, s.words || []);
      E.subAr.textContent = d.ar;
      E.subSpk.style.display = 'none';
      E.subPhrase.style.display = 'none';
      break;
    case 'turn':
      buildWords(E.subEn, s.words || []);
      E.subAr.innerHTML = '';
      buildWords(E.subAr, s.words2 || []);
      E.subSpk.style.display = 'flex';
      var pill = E.subSpk.querySelector('.pill');
      pill.textContent = d.speaker.name;
      pill.style.background = d.speaker.color;
      pill.style.color = '#06161d';
      E.subSpk.querySelector('.loc').textContent = d.speaker.role + ' · ' + d.speaker.place;
      if (d.phrase) {
        E.subPhrase.style.display = 'block';
        E.subPhrase.textContent = '◆ useful phrase:  ' + d.phrase;
      } else E.subPhrase.style.display = 'none';
      break;
    case 'takeaway':
      $('#tkIco').innerHTML = window.icon(d.icon);
      $('#tkEn').textContent = d.en; $('#tkAr').textContent = d.ar; break;
    case 'question':
      if (E.pQuestion._sig !== 'built') {
        $('#qList').innerHTML = d.all.map(function (q, n) {
          return '<div class="qRow"><div class="n">' + (n + 1) + '</div><div class="qt">' +
            '<div class="en">' + esc(q.en) + '</div>' +
            '<div class="ar">' + esc(q.ar) + '</div></div></div>';
        }).join('');
        E.qRows = [].slice.call(document.querySelectorAll('.qRow'));
        E.pQuestion._sig = 'built';
      }
      break;
    case 'discussion':
      $('#dsLabel').textContent = d.headline;
      $('#dsLabelAr').textContent = d.headlineAr;
      $('#dsEn').textContent = d.en; $('#dsAr').textContent = d.ar; break;
    case 'outro':
      $('#ouNum').textContent = d.number;
      $('#ouTitle').textContent = d.title;
      $('#ouCourse').textContent = d.course; break;
  }
}

/* ------------------------------------------------------- per-type paint */
function paint(s, lt, t, alpha) {
  var d = s.data, p = panelOf(s.type);
  switch (s.type) {
    case 'title': {
      put($('#tNum'), eo3(stag(lt, 0, .5)), 0, (1 - eo3(stag(lt, 0, .5))) * 26);
      $('#tRule').style.width = (eo3(stag(lt, .18, .55)) * 120).toFixed(0) + 'px';
      put($('#tTitle'), eo3(stag(lt, .3, .7)), 0, (1 - eo4(stag(lt, .3, .7))) * 44);
      put($('#tTitleAr'), eo3(stag(lt, .55, .7)), 0, (1 - eo4(stag(lt, .55, .7))) * 34);
      put($('#tSetting'), eo3(stag(lt, .75, .6)), 0, (1 - eo3(stag(lt, .75, .6))) * 20);
      put($('#tCast'), eo3(stag(lt, .9, .7)), 0, (1 - eo4(stag(lt, .9, .7))) * 30);
      put($('#tMeta'), eo3(stag(lt, 1.15, .7)), 0, (1 - eo3(stag(lt, 1.15, .7))) * 18);
      break;
    }
    case 'header': {
      put($('#hStep'), eo3(stag(lt, 0, .45)), 0, (1 - eo3(stag(lt, 0, .45))) * 20);
      put($('#hEn'), eo3(stag(lt, .12, .55)), 0, (1 - eo4(stag(lt, .12, .55))) * 38);
      put($('#hAr'), eo3(stag(lt, .3, .55)), 0, (1 - eo4(stag(lt, .3, .55))) * 28);
      $('#hRule').style.width = (eo3(stag(lt, .45, .7)) * 190).toFixed(0) + 'px';
      break;
    }
    case 'preview': {
      E.pvRows.forEach(function (row, n) {
        var act = n === d.index, seen = n < d.index;
        var pr = act ? eo4(stag(lt, 0, .5)) : 1;
        row.style.opacity = (act ? pr : seen ? .46 : .1).toFixed(3);
        row.style.transform = 'translateY(' + ((act ? (1 - pr) * 34 : 0)).toFixed(1) + 'px)';
        row.style.borderColor = act ? 'rgba(245,185,66,.42)' : 'rgba(255,255,255,.12)';
        row.style.background = act ? 'rgba(245,185,66,.1)' : 'rgba(255,255,255,.055)';
      });
      break;
    }
    case 'teaser': {
      var q = eo3(stag(lt, 0, .6));
      put($('#tzMark'), q * .35, 0, (1 - q) * 20, .8 + .2 * q);
      put($('#tzEn'), eo3(stag(lt, .15, .8)), 0, (1 - eo4(stag(lt, .15, .8))) * 34);
      put($('#tzAr'), eo3(stag(lt, .45, .8)), 0, (1 - eo4(stag(lt, .45, .8))) * 26);
      break;
    }
    case 'vocab': {
      var e = eo4(stag(lt, 0, .5));
      put($('#vcCard'), eo3(stag(lt, 0, .35)), (1 - e) * 54, 0, .97 + .03 * e);
      put($('#vcDef'), eo3(stag(lt, .3, .5)), 0, (1 - eo3(stag(lt, .3, .5))) * 16);
      put($('#vcArRow'), eo3(stag(lt, .5, .55)), 0, (1 - eo3(stag(lt, .5, .55))) * 16);
      break;
    }
    case 'chapter': {
      put($('#cpIdx'), eo3(stag(lt, 0, .5)) * 1, 0, (1 - eo4(stag(lt, 0, .6))) * 30, .92 + .08 * eo3(stag(lt, 0, .6)));
      put($('#cpEn'), eo3(stag(lt, .15, .55)), 0, (1 - eo4(stag(lt, .15, .55))) * 30);
      put($('#cpAr'), eo3(stag(lt, .32, .55)), 0, (1 - eo4(stag(lt, .32, .55))) * 22);
      $('#cpBar').style.width = (eo3(stag(lt, .45, .8)) * 260).toFixed(0) + 'px';
      break;
    }
    case 'line': {
      var base = s.audioAt, sp = speaking(s.words || [], base, t);
      CHAR.pose(E.rdC, { t: t, speak: sp, lean: 0 });
      renderCueStage(E.cueStage, s, t, 1310, 530, 'grid');
      E.rdCap.textContent = d.chapter || '';
      paintWords(E.subEn, s.words || [], base, t, false);
      var ap = eo3(stag(lt, .25, .6));
      put(E.subAr, ap, 0, (1 - ap) * 10);
      break;
    }
    case 'turn': {
      var b1 = s.audioAt, b2 = s.audio2At;
      var sp1 = speaking(s.words || [], b1, t);
      var sp2 = speaking(s.words2 || [], b2, t);
      var talking = sp1 || sp2;
      Object.keys(E.sides).forEach(function (k) {
        var S = E.sides[k], act = k === d.sp;
        CHAR.pose(S.ch, { t: t, speak: act ? talking : 0, lean: act ? (k === 'lina' ? 8 : -8) : 0 });
        var on = act ? 1 : 0;
        var e = eo3(stag(lt, 0, .45));
        var tgt = act ? 1 : .5;
        S.host.style.opacity = (act ? 1 : .68).toFixed(2);
        S.frame.style.filter = act ? 'none' : 'saturate(.72) brightness(.88)';
        S.frame.style.transform = 'scale(' + (act ? 1 : .962) + ')';
        S.ring.style.borderColor = act ? S.s.color : 'transparent';
        S.ring.style.boxShadow = act
          ? '0 0 46px ' + S.s.color + '66, inset 0 0 40px ' + S.s.color + '22' : 'none';
      });
      /* signal dots travel from the speaker outward */
      var dir = d.speaker.side === 'left' ? 1 : -1;
      E.clDots.forEach(function (c, i) {
        var ph = ((t * .42) + i / E.clDots.length) % 1;
        var u = dir > 0 ? ph : 1 - ph;
        var x = 20 + u * 560;
        var y = 90 - Math.sin(u * Math.PI) * 58;
        c.setAttribute('cx', x.toFixed(1)); c.setAttribute('cy', y.toFixed(1));
        c.setAttribute('opacity', (Math.sin(ph * Math.PI) * .85).toFixed(2));
        c.setAttribute('fill', d.speaker.color);
      });
      renderCueStage(E.cueStage2, s, t, 600, 436, 'stack');
      var arMode = t >= b2 - .15;
      paintWords(E.subEn, s.words || [], b1, t, arMode);
      E.subEn.style.opacity = arMode ? '.5' : '1';
      paintWords(E.subAr, s.words2 || [], b2, t, false);
      put(E.subAr, eo3(stag(lt, .25, .6)), 0, 0);
      break;
    }
    case 'takeaway': {
      var e2 = eo4(stag(lt, 0, .6));
      put($('#tkCard'), eo3(stag(lt, 0, .4)), 0, (1 - e2) * 40, .96 + .04 * e2);
      put($('#tkIco'), eo3(stag(lt, .2, .5)), 0, 0, .7 + .3 * back(stag(lt, .2, .6)));
      put($('#tkEn'), eo3(stag(lt, .35, .6)), 0, (1 - eo3(stag(lt, .35, .6))) * 18);
      put($('#tkAr'), eo3(stag(lt, .6, .6)), 0, (1 - eo3(stag(lt, .6, .6))) * 16);
      break;
    }
    case 'question': {
      E.qRows.forEach(function (row, n) {
        var act = n === d.index;
        row.className = 'qRow' + (act ? ' act' : '');
        var intro = eo4(stag(lt - n * .04, 0, .5));
        row.style.opacity = (act ? 1 : (n < d.index ? .5 : .26)).toFixed(2);
        row.style.transform = act
          ? 'translateX(' + ((1 - eo4(stag(lt, 0, .45))) * 22).toFixed(1) + 'px)' : 'none';
      });
      break;
    }
    case 'discussion': {
      put($('#dsLabel'), eo3(stag(lt, 0, .45)), 0, (1 - eo3(stag(lt, 0, .45))) * 18);
      put($('#dsLabelAr'), eo3(stag(lt, .15, .5)), 0, (1 - eo3(stag(lt, .15, .5))) * 14);
      put($('#dsEn'), eo3(stag(lt, .3, .7)), 0, (1 - eo4(stag(lt, .3, .7))) * 34);
      put($('#dsAr'), eo3(stag(lt, .6, .8)), 0, (1 - eo4(stag(lt, .6, .8))) * 26);
      break;
    }
    case 'outro': {
      put($('#ouNum'), eo3(stag(lt, 0, .5)), 0, (1 - eo3(stag(lt, 0, .5))) * 18);
      put($('#ouTitle'), eo3(stag(lt, .12, .6)), 0, (1 - eo4(stag(lt, .12, .6))) * 30);
      $('#ouRule').style.width = (eo3(stag(lt, .3, .7)) * 180).toFixed(0) + 'px';
      put($('#ouCourse'), eo3(stag(lt, .45, .7)), 0, (1 - eo3(stag(lt, .45, .7))) * 18);
      break;
    }
  }
}

/* ===================================================== the frame itself */
function seek(t) {
  t = Math.max(0, Math.min(t, TL.duration - 0.0001));

  /* locate segment */
  var i = cur >= 0 && t >= SEG[cur].t0 && t < SEG[cur].t0 + SEG[cur].dur ? cur : -1;
  if (i < 0) {
    var lo = 0, hi = SEG.length - 1;
    while (lo <= hi) {
      var m = (lo + hi) >> 1;
      if (t < SEG[m].t0) hi = m - 1;
      else if (t >= SEG[m].t0 + SEG[m].dur) lo = m + 1;
      else { i = m; break; }
    }
    if (i < 0) i = SEG.length - 1;
  }
  var s = SEG[i], lt = t - s.t0;

  /* ambient background drift */
  E.bgGrid.style.transform = 'translate(' + (Math.sin(t * .11) * 22).toFixed(1) + 'px,' +
    (Math.cos(t * .09) * 16).toFixed(1) + 'px)';
  E.bgGlow.style.background =
    'radial-gradient(760px 520px at ' + (24 + Math.sin(t * .13) * 7).toFixed(1) + '% ' +
    (22 + Math.cos(t * .11) * 8).toFixed(1) + '%, rgba(70,150,230,.20), transparent 64%),' +
    'radial-gradient(680px 480px at ' + (80 + Math.cos(t * .1) * 6).toFixed(1) + '% ' +
    (78 + Math.sin(t * .12) * 7).toFixed(1) + '%, rgba(245,185,66,.12), transparent 62%)';
  E.prog.style.width = (t / TL.duration * 1920).toFixed(1) + 'px';

  var body = s.type === 'line' || s.type === 'turn';
  E.sky.style.opacity = (body && TL.kind === 'reading') ? '.10' : '0';

  if (i !== cur) { enter(i); cur = i; }

  /* show the active panel, crossfade the previous one out */
  var act = panelOf(s.type);
  var prevSeg = i > 0 ? SEG[i - 1] : null;
  var prevPanel = prevSeg ? panelOf(prevSeg.type) : null;
  var fade = clamp(lt / TR, 0, 1);

  [E.pTitle, E.pHeader, E.pPreview, E.pTeaser, E.pVocab, E.pChapter, E.pLine,
   E.pTurn, E.pTakeaway, E.pQuestion, E.pDiscussion, E.pOutro].forEach(function (p) {
    var want = p === act || (p === prevPanel && prevPanel !== act && fade < 1);
    if (p.classList.contains('hidden') === want) p.classList.toggle('hidden', !want);
  });

  var alpha = prevPanel && prevPanel !== act ? eio(fade) : 1;
  act.style.opacity = alpha.toFixed(3);
  if (prevPanel && prevPanel !== act && fade < 1) {
    prevPanel.style.opacity = (1 - eio(fade)).toFixed(3);
    /* keep the outgoing panel in its final pose */
    paint(prevSeg, prevSeg.dur, prevSeg.t0 + prevSeg.dur, 1 - eio(fade));
  }

  /* subtitle bar */
  var showSubs = body;
  E.subs.classList.toggle('hidden', !showSubs);
  if (showSubs) {
    var sameRun = prevSeg && (prevSeg.type === s.type);
    E.subs.style.opacity = sameRun ? '1' : eio(fade).toFixed(3);
    var slide = sameRun ? (1 - eo4(clamp(lt / .4, 0, 1))) * 16 : 0;
    E.subs.style.transform = 'translateY(' + slide.toFixed(1) + 'px)';
  }

  paint(s, lt, t, alpha);
}

window.__init = init;
window.__seek = seek;
})();
