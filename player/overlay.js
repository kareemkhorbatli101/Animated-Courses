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

    var b = this.timeline.badge || {};
    var pl = this.scene.badgePlacement || {};
    if (b.img) {
      this.badgeEl.style.left = (num(pl.x, 0.016) * W) + 'px';
      this.badgeEl.style.top = (num(pl.y, 0.016) * H) + 'px';
      this.badgeEl.style.width = (num(pl.width, 0.205) * W) + 'px';
      this.badgeEl.style.zIndex = String(num(pl.layer, 9));
      this.badgeEl.style.display = 'block';
    }
    this.render(this._t || 0);
    return this;
  };

  Overlay.prototype.setBadgeSrc = function (src) {
    this.badgeEl.src = src;
    this.badgeEl.style.display = src ? 'block' : 'none';
  };

  // Which languages are DISPLAYED. Changing this re-renders text only - no 3D frame is touched, which is
  // the whole point of the overlay being DOM.
  Overlay.prototype.setShow = function (codes) {
    this.show = (Array.isArray(codes) ? codes : String(codes).split(','))
      .map(function (s) { return String(s).trim(); })
      .filter(function (s) { return s; });
    this.render(this._t || 0);
    return this.show;
  };

  Overlay.prototype.cueAt = function (t) {
    for (var i = 0; i < this.lines.length; i++) {
      var s = this.lines[i];
      if (t >= s.start && t < s.start + s.dur) return s;
    }
    return null;
  };

  Overlay.prototype.render = function (t) {
    this._t = t;
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
      var dir = String(L.dir || 'ltr');
      html += '<div dir="' + dir + '" data-lang="' + code + '" style="' +
        'font-size:' + size + 'px;' +
        'line-height:' + Math.round(size * LINE_RATIO) + 'px;' +
        'color:rgb(' + col[0] + ',' + col[1] + ',' + col[2] + ');' +
        'font-family:' + (L.family || 'inherit') + ';' +
        'white-space:pre-wrap;">' + escapeHtml(txt) + '</div>';
    }
    if (!html) { this.strip.style.display = 'none'; return; }
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
