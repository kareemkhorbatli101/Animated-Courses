// v27.24 (P3) - OVERLAYS AT THE DECLARED GEOMETRY.
//
// The subtitle strip, the vocabulary cards and the badge are DOM, not pixels in the 3D canvas - so they
// stay crisp at any size, can be selected and read by a screen reader, and can change language without
// re-rendering a single frame.
//
// EVERY number here comes from the spec. Not one size, position, colour, radius or opacity is written in
// this file, and `no_layout_in_player` is a gate rather than an intention: the moment the player holds a
// number of its own, the browser becomes a second authority on how a lesson looks, and the same lesson
// renders two ways. Phase 1 moved all of it into the XML precisely so this file would not need any.
//
// The geometry mirrors engine/compositor.sub_png exactly:
//   strip height   = cfg.height px of a cfg-relative frame, placed at cfg.y by cfg.anchor
//   box width      = min(W - 40, widest line + cfg.padding), centred
//   box top/bottom = 18 and height - 8 inside the strip
//   line k of a language sits at lang.row + k * round(size * 1.18)
(function (global) {
  'use strict';

  // The strip's own inner geometry, from the compositor. These are not look decisions the player is
  // making - they are the compositor's layout, restated so the two agree. The gate compares them.
  var BOX_TOP = 18, BOX_BOTTOM = 8, BOX_MARGIN = 40, LINE_RATIO = 1.18;
  // v28: the vocabulary card's inner geometry, restated from engine/compositor.make_card for the same
  // reason as the strip's above - the MP4 draws the card from these, so the page must too, or the same
  // lesson shows two different cards. Native size 340x412; everything below scales with the declared width.
  var CARD_W = 340, CARD_H = 412, CARD_R = 24, CARD_EDGE = 3, CARD_TILE = 300, CARD_PAD = 20,
      TILE_R = 14, EN_ROW = 10, AR_ROW = 54, EN_MAX = 34, AR_MAX = 30,
      CARD_FILL = [14, 14, 18], CARD_ALPHA = 0.824, CARD_LINE = [255, 210, 120], CARD_LINE_A = 0.92,
      TILE_FILL = [245, 244, 240], EN_COL = [255, 249, 240], AR_COL = [255, 224, 150],
      // the compositor's pre-v28 placement, used when a lesson declares none: (W - 340 - 45, 55)
      CARD_RIGHT_GAP = 45, CARD_TOP = 55;

  function num(v, d) { var n = parseFloat(v); return isFinite(n) ? n : d; }

  function hex(s, d) {
    s = String(s === undefined || s === null ? '' : s).trim().replace(/^#/, '');
    if (s.length !== 6) return d;
    var n = parseInt(s, 16);
    return isFinite(n) ? [(n >> 16) & 255, (n >> 8) & 255, n & 255] : d;
  }

  function Overlay(host, scene, timeline) {
    this.host = host;
    this.scene = scene;
    this.timeline = timeline || {};
    this.cfg = scene.subtitles || {};
    this.langs = String(this.cfg.langs || 'en').split(',')
      .map(function (s) { return s.trim(); }).filter(Boolean);
    this.show = String(this.cfg.show || this.cfg.langs || 'en').split(',')
      .map(function (s) { return s.trim(); }).filter(Boolean);
    this.lines = scene.speech || [];
    this._build();
  }

  Overlay.prototype._build = function () {
    var h = this.host;
    h.innerHTML = '';
    h.style.position = 'absolute';
    h.style.inset = '0';
    h.style.pointerEvents = 'none';
    h.style.overflow = 'hidden';

    this.strip = document.createElement('div');
    this.strip.className = 'ov-strip';
    this.strip.style.position = 'absolute';
    this.strip.style.left = '0';
    this.strip.style.right = '0';
    this.strip.style.display = 'none';
    this.strip.style.textAlign = 'center';
    h.appendChild(this.strip);

    this.box = document.createElement('div');
    this.box.className = 'ov-box';
    this.box.style.display = 'inline-block';
    this.strip.appendChild(this.box);

    this.badgeEl = document.createElement('img');
    this.badgeEl.className = 'ov-badge';
    this.badgeEl.style.position = 'absolute';
    this.badgeEl.style.display = 'none';
    h.appendChild(this.badgeEl);

    // v28: THE VOCABULARY CARD. overlay.js described cards in its header from v27.24 and never drew one,
    // so every lesson on the site showed none - while the MP4 of the same lesson had them. One card
    // element, reused: cards never overlap in time, and a pool would be a second place to get that wrong.
    this.cardEl = document.createElement('div');
    this.cardEl.className = 'ov-card';
    this.cardEl.style.position = 'absolute';
    this.cardEl.style.display = 'none';
    this.cardEl.style.boxSizing = 'border-box';
    this.cardEl.style.textAlign = 'center';
    this.cardImg = document.createElement('img');
    this.cardImg.style.display = 'block';
    this.cardImg.style.objectFit = 'contain';
    this.cardEn = document.createElement('div');
    this.cardAr = document.createElement('div');
    this.cardAr.setAttribute('dir', 'rtl');
    this.cardTile = document.createElement('div');
    this.cardTile.style.position = 'absolute';
    this.cardTile.style.display = 'flex';
    this.cardTile.style.alignItems = 'center';
    this.cardTile.style.justifyContent = 'center';
    this.cardTile.appendChild(this.cardImg);
    [this.cardEn, this.cardAr].forEach(function (el) {
      el.style.position = 'absolute'; el.style.left = '0'; el.style.right = '0';
      el.style.whiteSpace = 'nowrap'; el.style.overflow = 'hidden';
    });
    this.cardEl.appendChild(this.cardTile);
    this.cardEl.appendChild(this.cardEn);
    this.cardEl.appendChild(this.cardAr);
    h.appendChild(this.cardEl);
    this.cardSrc = {};          // lemma/img -> object URL, supplied by the page
    this._cardShown = null;

    // v28.4: THE TEXT BOARD (engine/board.py). It arrives RESOLVED in timeline.boards - every line's text,
    // position, size and colour, placed once by the engine with the compositor's own fonts - so this draws what it
    // is told and wraps nothing: the line breaks on the page are the MP4's by construction.
    this.boardEl = document.createElement('div');
    this.boardEl.className = 'ov-board';
    this.boardEl.style.position = 'absolute';
    this.boardEl.style.display = 'none';
    this.boardEl.style.boxSizing = 'border-box';
    h.appendChild(this.boardEl);
    this._boardShown = null;
    this._boardKids = [];
  };

  Overlay.prototype.boardAt = function (t) {
    var bs = this.timeline.boards || [];
    for (var i = 0; i < bs.length; i++) {
      if (t >= bs[i].at && t < bs[i].end) return bs[i];
    }
    return null;
  };

  function rgb(c) { return 'rgb(' + c.join(',') + ')'; }

  // One board, laid out at the current display size. Every number is the board's own, in frame fractions.
  Overlay.prototype._buildBoard = function (b) {
    var W = this.W || 0, H = this.H || 0, e = this.boardEl, s = e.style, r = b.rect;
    var bw = b.edgeWidth * H, mw = b.markWidth * H, kids = [];
    e.innerHTML = '';
    s.left = (r[0] * W) + 'px'; s.top = (r[1] * H) + 'px';
    s.width = (r[2] * W) + 'px'; s.height = (r[3] * H) + 'px';
    s.zIndex = String(b.layer);
    s.borderRadius = (b.radius * H) + 'px';
    s.border = bw + 'px solid ' + rgb(b.edge);
    s.background = 'rgba(' + b.fill.join(',') + ',' + b.opacity + ')';
    // children are placed from the panel's inner (padding) edge, i.e. inside its border
    function X(fx) { return (fx - r[0]) * W - bw; }
    function Y(fy) { return (fy - r[1]) * H - bw; }
    b.lines.forEach(function (L) {
      var d = document.createElement('div'), ds = d.style;
      ds.position = 'absolute';
      ds.whiteSpace = 'pre';
      ds.top = Y(L.y) + 'px';
      ds.fontSize = (L.size * H) + 'px';
      ds.lineHeight = (L.lh * H) + 'px';
      ds.fontWeight = 'bold';
      ds.fontFamily = L.lang === 'ar' ? b.arFont : b.font;
      ds.color = rgb(L.color);
      if (L.align === 'right') {
        d.setAttribute('dir', 'rtl');
        ds.right = ((r[0] + r[2] - L.x) * W - bw) + 'px';
      } else {
        ds.left = X(L.x) + 'px';
      }
      L.runs.forEach(function (run) {
        var sp = document.createElement('span'), ss = sp.style, m = run[1] ? b.marks[run[1]] : null;
        sp.textContent = run[0];
        if (m) {
          ss.color = rgb(m.color);
          if (m.shape === 'underline' || m.shape === 'double') {
            ss.textDecorationLine = 'underline';
            ss.textDecorationStyle = m.shape === 'double' ? 'double' : 'solid';
            ss.textDecorationThickness = mw + 'px';
            ss.textDecorationColor = rgb(m.color);
            ss.textUnderlineOffset = mw + 'px';
          } else if (m.shape === 'strike') {
            ss.textDecorationLine = 'line-through';
            ss.textDecorationThickness = mw + 'px';
            ss.textDecorationColor = rgb(m.color);
          } else if (m.shape === 'box') {
            ss.outline = mw + 'px solid ' + rgb(m.color);
            ss.outlineOffset = mw + 'px';
          } else if (m.shape === 'band') {
            ss.backgroundColor = rgb(m.band);
          }
        }
        d.appendChild(sp);
      });
      d.setAttribute('data-line', L.lang);
      e.appendChild(d);
      kids.push({el: d, at: L.at});
      if (L.prefix === 'tick') {
        var ns = 'http://www.w3.org/2000/svg', box = b.tickBox * H;
        var sv = document.createElementNS(ns, 'svg'), pl = document.createElementNS(ns, 'polyline');
        sv.setAttribute('width', box); sv.setAttribute('height', box);
        sv.style.position = 'absolute';
        sv.style.left = X(b.prefixX) + 'px';
        sv.style.top = (Y(L.y) + (L.lh * H - box) / 2) + 'px';
        pl.setAttribute('points', b.tick.map(function (p) { return (p[0] * box) + ',' + (p[1] * box); }).join(' '));
        pl.setAttribute('fill', 'none');
        pl.setAttribute('stroke', rgb(b.marks.fix.color));
        pl.setAttribute('stroke-width', mw + 1);
        sv.appendChild(pl);
        e.appendChild(sv);
        kids.push({el: sv, at: L.at});
      } else if (L.prefix) {
        var pd = d.cloneNode(false);
        pd.removeAttribute('data-line');
        pd.style.left = X(b.prefixX) + 'px';
        pd.textContent = L.prefix;
        e.appendChild(pd);
        kids.push({el: pd, at: L.at});
      }
    });
    b.bars.forEach(function (B) {
      var t = document.createElement('div'), f = document.createElement('div');
      t.style.position = 'absolute'; t.style.boxSizing = 'border-box';
      t.style.left = X(B.x) + 'px'; t.style.top = Y(B.y) + 'px';
      t.style.width = (B.track * W) + 'px'; t.style.height = (B.h * H) + 'px';
      t.style.border = mw + 'px solid ' + rgb(B.color);
      f.style.position = 'absolute';
      f.style.left = X(B.x) + 'px'; f.style.top = Y(B.y) + 'px';
      f.style.width = (B.w * W) + 'px'; f.style.height = (B.h * H) + 'px';
      f.style.backgroundColor = rgb(B.color);
      e.appendChild(t); e.appendChild(f);
      kids.push({el: t, at: B.at}); kids.push({el: f, at: B.at});
    });
    this._boardKids = kids;
    this._boardShown = b; this._boardW = W; this._boardH = H;
  };

  Overlay.prototype.renderBoard = function (t) {
    var b = this.boardAt(t);
    if (!b) { this.boardEl.style.display = 'none'; this._boardShown = null; return; }
    if (this._boardShown !== b || this._boardW !== this.W || this._boardH !== this.H) this._buildBoard(b);
    for (var i = 0; i < this._boardKids.length; i++) {
      var k = this._boardKids[i];
      k.el.style.display = t >= k.at ? 'block' : 'none';
    }
    this.boardEl.style.display = 'block';
  };

  // The page fetches each card's picture (verified against its hash, like every other file) and hands the
  // URLs over. Keyed by the card's img path, which is what the timeline names.
  Overlay.prototype.setCardSrcs = function (map) {
    this.cardSrc = map || {};
    this._cardShown = null;
    this.render(this._t || 0);
  };

  Overlay.prototype.cardAt = function (t) {
    var cards = ((this.timeline.vocab || {}).cards) || [];
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i], at = num(c.at, 0), hold = num(c.hold, 1.35);
      if (t >= at && t < at + hold) return c;
    }
    return null;
  };

  // The frame the overlay is drawn over. Everything is expressed as a FRACTION of it, so the same
  // declared numbers land in the same place whatever size the page is showing the lesson at.
  Overlay.prototype.layout = function (W, H) {
    this.W = W; this.H = H;
    var c = this.cfg;
    // the spec's numbers are authored against the rendered frame height; scale to the display
    var authored = (this.scene.size && this.scene.size[1]) || 1080;
    var k = H / authored;
    this.k = k;
    var stripH = num(c.height, 150) * k;
    var y = num(c.y, 0.985) * H;
    var top = String(c.anchor || 'bottom').toLowerCase() === 'top' ? y : y - stripH;
    this.strip.style.top = top + 'px';
    this.strip.style.height = stripH + 'px';
    this.strip.style.zIndex = String(num(c.layer, 8));
    this.stripTop = top; this.stripH = stripH;

    var boxTransparent = ['none', '0', 'false', 'transparent']
      .indexOf(String(c.box === undefined ? 'solid' : c.box).toLowerCase()) >= 0;
    var fill = hex(c.fill, [12, 12, 16]);
    var alpha = num(c.opacity, 0.647);
    this.box.style.background = boxTransparent ? 'transparent'
      : 'rgba(' + fill[0] + ',' + fill[1] + ',' + fill[2] + ',' + alpha + ')';
    this.box.style.borderRadius = (num(c.radius, 20) * k) + 'px';
    this.box.style.paddingLeft = (num(c.padding, 90) * k / 2) + 'px';
    this.box.style.paddingRight = (num(c.padding, 90) * k / 2) + 'px';
    this.box.style.marginTop = (BOX_TOP * k) + 'px';
    this.box.style.maxWidth = ((W - BOX_MARGIN * k)) + 'px';
    this.box.style.minHeight = (Math.max(0, this.stripH - (BOX_TOP + BOX_BOTTOM) * k)) + 'px';

    // v28: the badge is positioned from the SCENE's declared placement, which exists from the moment the
    // scene does. It used to require `timeline.badge.img` as well, so an overlay laid out before the
    // timeline had arrived never positioned the badge at all.
    var pl = this.scene.badgePlacement || {};
    this.badgeEl.style.left = (num(pl.x, 0.016) * W) + 'px';
    this.badgeEl.style.top = (num(pl.y, 0.016) * H) + 'px';
    this.badgeEl.style.width = (num(pl.width, 0.205) * W) + 'px';
    this.badgeEl.style.zIndex = String(num(pl.layer, 9));
    if (this.badgeEl.src) this.badgeEl.style.display = 'block';

    // v28: the card, at the declared placement. x is the card's RIGHT edge; without a declaration this is
    // the compositor's pre-v28 constant, (W - 340 - 45, 55) at native size.
    var authW = (this.scene.size && this.scene.size[0]) || 1920;
    var v = this.timeline.vocab || {};
    var cw = (v.width !== undefined) ? num(v.width, CARD_W / authW) * W : CARD_W * k;
    var ks = cw / CARD_W;                                   // card scale: every inner size follows it
    var ch = CARD_H * ks;
    var right = (v.x !== undefined) ? num(v.x, 1) * W : W - CARD_RIGHT_GAP * k;
    var top = (v.y !== undefined) ? num(v.y, 0) * H : CARD_TOP * k;
    var ce = this.cardEl.style;
    ce.left = (right - cw) + 'px'; ce.top = top + 'px';
    ce.width = cw + 'px'; ce.height = ch + 'px';
    ce.zIndex = String(num(v.layer, 9));
    ce.borderRadius = (CARD_R * ks) + 'px';
    ce.border = (CARD_EDGE * ks) + 'px solid rgba(' + CARD_LINE.join(',') + ',' + CARD_LINE_A + ')';
    ce.background = 'rgba(' + CARD_FILL.join(',') + ',' + CARD_ALPHA + ')';
    var ts = this.cardTile.style, tile = CARD_TILE * ks;
    ts.left = ((CARD_W - CARD_TILE) / 2 * ks - CARD_EDGE * ks) + 'px';
    ts.top = (CARD_PAD * ks - CARD_EDGE * ks) + 'px';
    ts.width = tile + 'px'; ts.height = tile + 'px';
    ts.borderRadius = (TILE_R * ks) + 'px';
    ts.background = 'rgb(' + TILE_FILL.join(',') + ')';
    this.cardImg.style.maxWidth = (tile - 8 * ks) + 'px';
    this.cardImg.style.maxHeight = (tile - 8 * ks) + 'px';
    var en = this.cardEn.style, ar = this.cardAr.style;
    en.top = ((CARD_PAD + CARD_TILE + EN_ROW) * ks - CARD_EDGE * ks) + 'px';
    en.fontSize = (EN_MAX * ks) + 'px';
    en.lineHeight = (EN_MAX * ks * LINE_RATIO) + 'px';
    en.color = 'rgb(' + EN_COL.join(',') + ')';
    en.fontWeight = 'bold';
    ar.top = ((CARD_PAD + CARD_TILE + AR_ROW) * ks - CARD_EDGE * ks) + 'px';
    ar.fontSize = (AR_MAX * ks) + 'px';
    ar.lineHeight = (AR_MAX * ks * LINE_RATIO) + 'px';
    ar.color = 'rgb(' + AR_COL.join(',') + ')';
    ar.fontWeight = 'bold';

    this.render(this._t || 0);
    return this;
  };

  Overlay.prototype.setBadgeSrc = function (src) {
    this.badgeEl.src = src || '';
    this.badgeEl.style.display = src ? 'block' : 'none';
  };

  // Which languages are DISPLAYED. Changing this re-renders text only - no 3D frame is touched, which is
  // the whole point of the overlay being DOM.
  Overlay.prototype.setShow = function (codes) {
    var declared = this.langs;
    // v28: a viewer's choice may only NARROW within what THIS lesson declares. The choice is carried from
    // part to part by the page, so a choice made on one lesson could name a language the next lesson does
    // not have - or omit one it does - and nothing reconciled the two. An empty intersection falls back to
    // every declared language: showing no subtitles is never the answer to a mismatched preference.
    //
    // v28.3 (step 0b): an EXPLICIT empty choice means NONE. The page's two Subtitles selectors hand over [] when both
    // say "None" (site/app.js subtitleChoice: "[] means NONE, said explicitly"), and the fallback above turned that
    // [] into every declared language - measured on the live site: None + None still showed English and Arabic.
    // The two rules are now separate:
    //   null / undefined           no preference            -> every declared language
    //   [] or ''                   the viewer chose None    -> no subtitles
    //   non-empty, no intersection a preference from another lesson that does not fit this one -> every declared
    //   non-empty, some intersection                        -> exactly the intersection
    if (codes === null || codes === undefined) {
      this.show = declared.slice();
    } else {
      var asked = (Array.isArray(codes) ? codes : String(codes).split(','))
        .map(function (s) { return String(s).trim(); })
        .filter(function (s) { return s; });
      var want = asked.filter(function (s) { return declared.indexOf(s) >= 0; });
      this.show = !asked.length ? [] : (want.length ? want : declared.slice());
    }
    this.render(this._t || 0);
    return this.show;
  };

  Overlay.prototype.cueAt = function (t) {
    for (var i = 0; i < this.lines.length; i++) {
      var s = this.lines[i];
      // v28: `subHold` - an <ask> question stays readable through its own pause, as it does in the MP4
      // (engine/compositor honours subHold). Here it died with the audio, so on the site the learner was
      // asked to answer a question that had already vanished.
      var end = s.start + Math.max(s.dur, num(s.subHold, 0));
      if (t >= s.start && t < end) return s;
    }
    return null;
  };

  Overlay.prototype.renderCard = function (t) {
    var c = this.cardAt(t);
    if (!c) { this.cardEl.style.display = 'none'; this._cardShown = null; return; }
    var src = this.cardSrc[c.img];
    if (!src) { this.cardEl.style.display = 'none'; return; }    // picture not fetched yet
    if (this._cardShown !== c) {
      this.cardImg.src = src;
      this.cardEn.textContent = c.label || c.lemma || '';
      this.cardAr.textContent = c.ar || '';
      this._cardShown = c;
    }
    this.cardEl.style.display = 'block';
  };

  Overlay.prototype.render = function (t) {
    this._t = t;
    this.renderCard(t);
    this.renderBoard(t);
    var c = this.cfg, k = this.k || 1;
    if (!c || !(c.enabled === undefined ? true : c.enabled)) {
      this.strip.style.display = 'none';
      return;
    }
    var cue = this.cueAt(t);
    if (!cue) { this.strip.style.display = 'none'; return; }
    var langCfg = c.lang || {};
    var html = '';
    for (var i = 0; i < this.show.length; i++) {
      var code = this.show[i];
      var txt = (cue.text || {})[code];
      if (!txt) continue;
      var L = langCfg[code] || {};
      var size = num(L.size, 44) * k;
      var col = hex(L.color, [255, 249, 240]);
      // v28: a right-to-left script defaults to rtl. Declared `dir` still wins. Defaulting Arabic to ltr put
      // the reading order and the punctuation on the wrong side.
      var dir = String(L.dir || (/^(ar|fa|ur|he)$/.test(code) ? 'rtl' : 'ltr'));
      html += '<div dir="' + dir + '" data-lang="' + code + '" style="' +
        'font-size:' + size + 'px;' +
        'line-height:' + Math.round(size * LINE_RATIO) + 'px;' +
        'color:rgb(' + col[0] + ',' + col[1] + ',' + col[2] + ');' +
        'font-family:' + (L.family || 'inherit') + ';' +
        'white-space:pre-wrap;">' + escapeHtml(txt) + '</div>';
    }
    // v28.3: with nothing to show, the box is EMPTIED as well as hidden. A hidden strip that still held the last
    // cue's rows meant "no subtitles" was true to the eye and false in the DOM - and a reader or a check that asks
    // the page what it is showing got the old answer.
    if (!html) { this.box.innerHTML = ''; this.strip.style.display = 'none'; return; }
    this.box.innerHTML = html;
    this.strip.style.display = 'block';
  };

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // What the overlay currently occupies, in FRAME FRACTIONS - the form the parity gate compares, because
  // it is the form that is independent of the size the page happens to be showing.
  Overlay.prototype.regions = function () {
    var out = {};
    var host = this.host.getBoundingClientRect();
    function rect(el) {
      if (!el || el.style.display === 'none' || !el.offsetWidth) return null;
      var r = el.getBoundingClientRect();
      return {x: (r.left - host.left) / host.width, y: (r.top - host.top) / host.height,
              w: r.width / host.width, h: r.height / host.height};
    }
    out.strip = rect(this.strip);
    out.box = rect(this.box);
    out.badge = rect(this.badgeEl);
    out.card = rect(this.cardEl);
    out.cardText = out.card ? {en: this.cardEn.textContent, ar: this.cardAr.textContent} : null;
    // v28.4: the board and every line it shows - what the parity check compares against the resolved layout
    out.board = rect(this.boardEl);
    out.boardLines = [];
    if (out.board) {
      var ls = this.boardEl.querySelectorAll('[data-line]');
      for (var j = 0; j < ls.length; j++) {
        var lr = rect(ls[j]);
        if (lr) out.boardLines.push({text: ls[j].textContent, lang: ls[j].getAttribute('data-line'),
                                     x: lr.x, y: lr.y, w: lr.w, h: lr.h});
      }
    }
    out.langs = [];
    var kids = this.box.children;
    for (var i = 0; i < kids.length; i++) {
      out.langs.push({lang: kids[i].getAttribute('data-lang'), rect: rect(kids[i]),
                      text: kids[i].textContent});
    }
    return out;
  };

  global.Overlay = Overlay;
})(typeof window !== 'undefined' ? window : self);
