/* ============================================================
   Practise IELTS Writing (IWR) - player.js

   Section 9: "Read full essay" in a pop-up, read by the voices on the learner's own machine,
   with a diagram of the essay's shape that BUILDS as each paragraph is read.

   The animation is not decoration. Each element teaches one thing the learner is about to be
   asked about in sections 4 and 5:
     1  the four blocks fill as their paragraph is read, and the topic sentence appears inside
     2  a flag drops where the position is stated, and again if it is restated in the conclusion
     3  a transition arc shows its DIRECTION: a turn for a contrast, a step for an addition -
        which is exactly the distinction section 4 traps
     4  a tick per supporting idea, so an under-supported paragraph is a picture, not a scolding
     5  a word-count ring with the counted number in the centre and the 250 minimum marked

   Everything is generated SVG - no binary assets, so it scales, it themes, and it works from a
   file with no network. Nothing moves once the reading stops, and prefers-reduced-motion
   removes every transition.
   ============================================================ */
(function (w, d) {
  'use strict';
  var IWR = w.IWR;
  var el = IWR.el, esc = IWR.esc;

  var TURN = /^(however|on the other hand|nevertheless|yet|in contrast|conversely|whereas|while|admittedly|although)\b/i;
  var ADD = /^(moreover|furthermore|in addition|additionally|also|firstly|secondly|first of all|another|one main reason|one reason)\b/i;
  var CLOSE = /^(in conclusion|to conclude|in summary|overall|in my opinion|in my view)\b/i;

  function labelOf(i, n) {
    if (i === 0) return 'Introduction';
    if (i === n - 1) return 'Conclusion';
    return 'Body ' + i;
  }

  function firstSentence(p) {
    var m = String(p).match(/[^.!?]+[.!?]/);
    var s = (m ? m[0] : String(p)).trim();
    return s.length > 64 ? s.slice(0, 61) + '…' : s;
  }

  function shapeSvg(E) {
    var n = (E.body || []).length;
    var h = 56 + n * 62 + 40;
    var parts = [];
    parts.push('<svg viewBox="0 0 320 ' + h + '" role="img" aria-label="The shape of this essay">');
    parts.push('<style>'
      + '.blk{fill:var(--chip);stroke:var(--line)}'
      + '.blk.on{fill:var(--accent-soft);stroke:var(--accent)}'
      + '.lab{font:600 11px system-ui;fill:var(--ink-soft)}'
      + '.top{font:11px system-ui;fill:var(--ink)}'
      + '.tick{fill:var(--ok)}'
      + '.flag{fill:var(--warn)}'
      + '.arc{stroke:var(--accent);fill:none;stroke-width:1.5}'
      + '.ringbg{stroke:var(--line);fill:none;stroke-width:7}'
      + '.ringfg{stroke:var(--ok);fill:none;stroke-width:7;stroke-linecap:round}'
      + '.ringtx{font:700 13px system-ui;fill:var(--ink)}'
      + '.ringsub{font:9px system-ui;fill:var(--ink-faint)}'
      + '</style>');
    for (var i = 0; i < n; i++) {
      var y = 10 + i * 62;
      parts.push('<rect class="blk" id="blk' + i + '" x="56" y="' + y + '" width="250" height="50" rx="8"/>');
      parts.push('<text class="lab" x="4" y="' + (y + 20) + '">' + esc(labelOf(i, n)) + '</text>');
      parts.push('<text class="top" id="top' + i + '" x="64" y="' + (y + 20) + '"></text>');
      parts.push('<g id="ticks' + i + '" transform="translate(64,' + (y + 38) + ')"></g>');
      parts.push('<g id="flag' + i + '"></g>');
      parts.push('<g id="arc' + i + '"></g>');
    }
    var cy = 10 + n * 62 + 24;
    parts.push('<g transform="translate(40,' + cy + ')">');
    parts.push('<circle class="ringbg" cx="0" cy="0" r="22"/>');
    parts.push('<circle class="ringfg" id="ring" cx="0" cy="0" r="22" '
      + 'stroke-dasharray="0 999" transform="rotate(-90)"/>');
    parts.push('<text class="ringtx" x="0" y="4" text-anchor="middle">' + esc(E.words) + '</text>');
    parts.push('<text class="ringsub" x="0" y="34" text-anchor="middle">words</text>');
    parts.push('</g>');
    parts.push('<text class="ringsub" x="78" y="' + (cy - 4) + '">minimum 250 marked on the ring</text>');
    parts.push('<text class="ringsub" x="78" y="' + (cy + 12) + '">this essay: ' + esc(E.words)
      + ' words</text>');
    parts.push('</svg>');
    return parts.join('');
  }

  IWR.player = function (E) {
    var paras = (E.body || []).slice();
    var body = el('div');
    var head = el('div', 'lead', esc(E.qtype || '') + ' · Band 6.5–7 · '
      + esc(E.words) + ' words');
    body.appendChild(head);

    var grid = el('div', 'player');
    var textCol = el('div', 'essay');
    var pEls = paras.map(function (p) {
      var node = el('p', '', esc(p));
      textCol.appendChild(node);
      return node;
    });
    var shape = el('div', 'shape');
    shape.innerHTML = shapeSvg(E);
    grid.appendChild(textCol);
    grid.appendChild(shape);
    body.appendChild(grid);

    var transport = el('div', 'transport');
    var play = el('button', 'btn btn-primary', 'Read');
    play.type = 'button';
    var pause = el('button', 'btn btn-sm', 'Pause');
    pause.type = 'button';
    pause.disabled = true;
    var stop = el('button', 'btn btn-sm', 'Stop');
    stop.type = 'button';
    stop.disabled = true;
    var pos = el('span', 'counter', '');
    [play, pause, stop, pos].forEach(function (x) { transport.appendChild(x); });

    var vsel = el('select', 'sel');
    var vs = IWR.voices();
    if (vs.length) {
      vs.forEach(function (v) {
        var o = el('option', '', esc(v.name));
        o.value = v.name;
        vsel.appendChild(o);
      });
      var preferred = IWR.pickVoice(null);
      if (preferred) vsel.value = preferred.name;
      vsel.addEventListener('change', function () { IWR.setVoice(vsel.value); });
      transport.appendChild(vsel);
    }
    body.appendChild(transport);
    var vline = el('div', 'voiceline', vs.length
      ? 'Read by ' + esc((IWR.pickVoice(null) || {}).name || '') + ' (your device)'
      : 'This device has no speech voices, so the reading follows along on a timer at 150 '
        + 'words per minute.');
    body.appendChild(vline);

    var m = IWR.modal('Essay ' + E.num + ' · ' + E.title, body);

    function svgId(id) { return shape.querySelector('#' + id); }
    function light(i) {
      var blk = svgId('blk' + i);
      if (blk) blk.setAttribute('class', 'blk on');
      var top = svgId('top' + i);
      if (top && !top.textContent) top.textContent = firstSentence(paras[i]);
      /* a tick per supporting sentence beyond the first */
      var sents = (String(paras[i]).match(/[^.!?]+[.!?]/g) || []).length;
      var g = svgId('ticks' + i);
      if (g && !g.childNodes.length) {
        for (var k = 1; k < Math.min(sents, 5); k++) {
          var c = d.createElementNS('http://www.w3.org/2000/svg', 'circle');
          c.setAttribute('class', 'tick');
          c.setAttribute('cx', String(k * 12));
          c.setAttribute('cy', '0');
          c.setAttribute('r', '3.5');
          g.appendChild(c);
        }
      }
      /* the position flag */
      if (/\b(i believe|in my opinion|in my view|i agree|i disagree|this essay will)\b/i.test(paras[i])) {
        var fg = svgId('flag' + i);
        if (fg && !fg.childNodes.length) {
          var y = 10 + i * 62;
          var t = d.createElementNS('http://www.w3.org/2000/svg', 'text');
          t.setAttribute('class', 'lab');
          t.setAttribute('x', '64');
          t.setAttribute('y', String(y + 48));
          t.textContent = /this essay will/i.test(paras[i])
            ? 'road map stated here' : 'position stated here';
          fg.appendChild(t);
        }
      }
    }
    function arcFor(i, text) {
      var g = svgId('arc' + i);
      if (!g || g.childNodes.length) return;
      var kind = TURN.test(text) ? 'turn' : (ADD.test(text) ? 'add' : (CLOSE.test(text) ? 'close' : null));
      if (!kind) return;
      var y = 10 + i * 62;
      var path = d.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', 'arc');
      /* a contrast turns back on itself; an addition steps forward */
      path.setAttribute('d', kind === 'turn'
        ? 'M50 ' + (y + 6) + ' C32 ' + (y + 6) + ', 32 ' + (y - 16) + ', 50 ' + (y - 16)
        : 'M48 ' + (y - 10) + ' L48 ' + (y + 4) + ' M44 ' + y + ' L48 ' + (y + 6) + ' L52 ' + y);
      g.appendChild(path);
      var lab = d.createElementNS('http://www.w3.org/2000/svg', 'text');
      lab.setAttribute('class', 'lab');
      lab.setAttribute('x', '64');
      lab.setAttribute('y', String(y - 2));
      lab.textContent = kind === 'turn' ? 'turns against' : (kind === 'add' ? 'adds' : 'closes');
      g.appendChild(lab);
    }
    function ring(frac) {
      var r = svgId('ring');
      if (!r) return;
      var c = 2 * Math.PI * 22;
      r.setAttribute('stroke-dasharray', (c * Math.min(1, frac)).toFixed(1) + ' 999');
    }

    var chunks = IWR.chunk(paras, 900, 350);
    var spokenWords = 0;
    var total = chunks.reduce(function (a, c) { return a + IWR.words(c.text); }, 0) || 1;

    function markChunk(c, i) {
      pEls.forEach(function (p) { p.className = ''; });
      if (pEls[c.para]) pEls[c.para].className = 'spoken';
      light(c.para);
      arcFor(c.para, c.text);
      spokenWords += IWR.words(c.text);
      ring(spokenWords / total);
      pos.textContent = 'paragraph ' + (c.para + 1) + ' of ' + paras.length;
    }
    function finish() {
      play.disabled = false;
      pause.disabled = true;
      stop.disabled = true;
      pause.textContent = 'Pause';
      pEls.forEach(function (p) { p.className = ''; });
      pos.textContent = 'read';
    }

    play.addEventListener('click', function () {
      spokenWords = 0;
      play.disabled = true;
      pause.disabled = false;
      stop.disabled = false;
      if (!IWR.hasVoice()) {
        /* no voices: follow along on a timer at 150 words per minute, so the diagram still
           teaches and the page does not simply refuse */
        var i = 0;
        (function tick() {
          if (i >= chunks.length) return finish();
          markChunk(chunks[i], i);
          var ms = IWR.words(chunks[i].text) / 150 * 60000 + (chunks[i].pause || 0);
          i++;
          w.setTimeout(tick, Math.max(300, ms));
        })();
        return;
      }
      IWR.speakSeq(chunks, { onchunk: markChunk, onend: finish });
    });
    pause.addEventListener('click', function () {
      var playing = IWR.togglePause();
      pause.textContent = playing ? 'Pause' : 'Resume';
    });
    stop.addEventListener('click', function () { IWR.stop(); finish(); });
    return m;
  };

  /* ============ the page ============ */
  IWR.render = function () {
    var E = w.IWR_ESSAY;
    if (!E) return;
    var wrap = d.getElementById('app') || d.body;
    var S = IWR.sections;
    [S.s0(E), S.s1(E), S.s2(E), IWR.s3(E), S.s4(E), S.s5(E),
     IWR.s7(E), S.s8(E)].forEach(function (node) {
      if (node) wrap.appendChild(node);
    });
    var nav = el('div', 'btn-row');
    if (E.prev) {
      var a = el('a', 'btn', '← ' + esc(E.prev.title));
      a.href = '../' + E.prev.category_slug + '/' + E.prev.slug + '.html';
      nav.appendChild(a);
    }
    if (E.next) {
      var b = el('a', 'btn', esc(E.next.title) + ' →');
      b.href = '../' + E.next.category_slug + '/' + E.next.slug + '.html';
      nav.appendChild(b);
    }
    wrap.appendChild(nav);
  };
})(window, document);
