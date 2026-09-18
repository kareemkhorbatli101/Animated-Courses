/* custom.js - v28.3: the customisation contract (package 07): SLOTS declared in the spec, VALUES from the host,
 * a RECORD of what was customised.
 *
 * The resolver is PURE and has a Python twin (engine/customize.py resolve()); gates/custom_parity compares the two
 * on a fixed case table as canonical JSON (CUS-18). Everything that could make two languages disagree is pinned:
 *   * numbers: round half-up to 3 decimals, integral values written as integers (num())
 *   * JSON: keys sorted, no spaces, non-ASCII kept (canonical())
 *   * hashes: sha256 of the UTF-8 canonical text, first 16 hex characters (sha16())
 *   * templates: ONE pass of {namespace.key} substitution - a value containing "{user.x}" is shown literally
 *
 * No look numbers live here (no_layout_in_player): a slot's position, size, colour and box come from its
 * declaration; the layer only converts them to the frame the lesson is drawn in.
 */
(function (global) {
  'use strict';

  var TIERS_SUPPORTED = {overlay: true};
  var PLACEHOLDER = /\{([A-Za-z_][A-Za-z0-9_]*\.[A-Za-z_][A-Za-z0-9_]*)\}/g;

  function num(x) {
    var v = Number(x);
    if (!isFinite(v)) return 0;
    var r = v < 0 ? -Math.floor(-v * 1000 + 0.5) / 1000 : Math.floor(v * 1000 + 0.5) / 1000;
    return r;
  }

  function canonical(v) {
    if (v === null || v === undefined) return 'null';
    if (typeof v === 'number') return JSON.stringify(num(v));
    if (typeof v === 'boolean') return v ? 'true' : 'false';
    if (typeof v === 'string') return JSON.stringify(v);
    if (Array.isArray(v)) return '[' + v.map(canonical).join(',') + ']';
    return '{' + Object.keys(v).sort().map(function (k) { return JSON.stringify(k) + ':' + canonical(v[k]); })
      .join(',') + '}';
  }

  function sha16(text) {
    var bytes = new TextEncoder().encode(text);
    return global.crypto.subtle.digest('SHA-256', bytes).then(function (d) {
      return Array.prototype.map.call(new Uint8Array(d), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('').slice(0, 16);
    });
  }

  function requiresOf(def) {
    return String(def.requires || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function defaultText(def) {
    var m = /^default:\s*"?(.*?)"?\s*$/.exec(String(def.missing || ''));
    return m ? m[1] : null;
  }

  // course slots, then lesson slots overriding by id; a lesson slot with disabled="1" removes the course slot
  function merge(courseSlots, lessonSlots) {
    var byId = {}, order = [];
    (courseSlots || []).forEach(function (s) { if (!byId[s.id]) order.push(s.id); byId[s.id] = s; });
    (lessonSlots || []).forEach(function (s) {
      if (String(s.disabled) === '1' || s.disabled === true) { delete byId[s.id]; return; }
      if (!byId[s.id]) order.push(s.id);
      byId[s.id] = s;
    });
    return order.filter(function (id) { return byId[id]; }).map(function (id) { return byId[id]; });
  }

  /* resolve(defs, values, enable) -> {enabled, ignored, unsupported, missing, unknown, slots:{id: resolved}, used} */
  function resolve(defs, values, enable) {
    values = values || {};
    var byId = {};
    (defs || []).forEach(function (d) { byId[d.id] = d; });
    var out = {enabled: [], ignored: [], unsupported: [], missing: [], unknown: [], slots: {}, used: []};
    var used = {};
    (enable || []).forEach(function (id) {
      var def = byId[id];
      if (!def) { out.unknown.push(id); return; }
      if (!TIERS_SUPPORTED[def.tier || 'overlay']) { out.unsupported.push(id); return; }
      var req = requiresOf(def);
      var lacking = req.filter(function (k) {
        return values[k] === undefined || values[k] === null || String(values[k]).trim() === '';
      });
      var text;
      if (lacking.length) {
        var dft = defaultText(def);
        if (dft === null) { out.missing.push(id); return; }
        text = dft;
      } else {
        text = String(def.template || '').replace(PLACEHOLDER, function (m, key) {
          if (values[key] === undefined || values[key] === null) return '';
          used[key] = true;
          return String(values[key]);
        });
      }
      out.enabled.push(id);
      out.slots[id] = {
        tier: def.tier || 'overlay', kind: def.kind || 'text', text: text,
        at: num(def.at || 0), dur: num(def.dur || 0), show: def.show || 'timeline',
        region: {x: num(def.x), y: num(def.y), width: num(def.width)},
        style: {size: num(def.size), color: String(def.color || ''), box: String(def.box || ''), layer: String(def.layer || '')},
        privacy: def.privacy || 'public'
      };
    });
    out.used = Object.keys(used).sort();
    out.ignored = Object.keys(values).filter(function (k) { return !used[k]; }).sort();
    return out;
  }

  function privacyOf(res) {
    return Object.keys(res.slots).some(function (id) { return res.slots[id].privacy === 'personal'; })
      ? 'personal' : 'public';
  }

  /* The record (package 07 §2.4, §2.5). Async because hashing is. */
  function record(ctx, res, values) {
    var usedValues = {};
    res.used.forEach(function (k) { usedValues[k] = String(values[k]); });
    var slotsOut = {};
    res.enabled.forEach(function (id) {
      var s = res.slots[id];
      slotsOut[id] = {tier: s.tier, kind: s.kind, text: s.text, at: s.at, dur: s.dur, show: s.show, region: s.region};
    });
    return Promise.all([
      sha16(canonical(ctx.courseSlots || [])),
      ctx.lessonSlots && ctx.lessonSlots.length ? sha16(canonical(ctx.lessonSlots)) : Promise.resolve(''),
      sha16(canonical(ctx.mergedSlots || []))
    ]).then(function (h) {
      var courseVersion = ctx.courseSlotsVersion || h[0];
      return sha16((ctx.fingerprint || '') + '|' + h[2] + '|' + canonical(usedValues)).then(function (identity) {
        return {
          schema: 'custom/1',
          base: {course: ctx.course, video: ctx.video, fingerprint: ctx.fingerprint || '', slotsHash: h[2],
                 slotSet: {courseSlotsVersion: courseVersion, lessonSlotsHash: h[1], resolvedSlotsHash: h[2]}},
          identity: identity,
          slots: slotsOut,
          values: usedValues,
          privacy: privacyOf(res),
          created: new Date().toISOString()
        };
      });
    });
  }

  function canonicalRecord(rec) {
    var r = JSON.parse(JSON.stringify(rec));
    delete r.created;
    return canonical(r);
  }

  /* ---- the overlay-tier layer: one element per enabled slot, placed from its declaration ------------------ */
  function Layer(host) {
    this.host = host;
    this.els = {};
    this.frame = {x: 0, y: 0, w: 1, h: 1, authoredH: 1080};
    this.boxFill = 'transparent';      // set from the LESSON's own subtitle box (spec), never chosen here
  }
  // box="solid" means "the same box the lesson's subtitles use": the fill the overlay computed from the spec's
  // scene.subtitles fill and opacity, handed over as it is - this file holds no colour of its own.
  Layer.prototype.setBox = function (css) {
    this.boxFill = css || 'transparent';
    var self = this;
    Object.keys(this.els).forEach(function (id) { self._place(id); });
  };
  Layer.prototype.setFrame = function (x, y, w, h, authoredH) {
    this.frame = {x: x, y: y, w: w, h: h, authoredH: authoredH || 1080};
    var self = this;
    Object.keys(this.els).forEach(function (id) { self._place(id); });
  };
  Layer.prototype.set = function (res) {
    var self = this;
    Object.keys(this.els).forEach(function (id) {
      if (!res || !res.slots[id]) { self.host.removeChild(self.els[id].el); delete self.els[id]; }
    });
    if (!res) return;
    res.enabled.forEach(function (id) {
      var s = res.slots[id];
      if (!self.els[id]) {
        var el = document.createElement('div');
        el.className = 'ap-slot';
        el.setAttribute('data-slot', id);
        el.setAttribute('dir', 'auto');
        el.setAttribute('role', 'status');
        self.host.appendChild(el);
        self.els[id] = {el: el, slot: s, on: false};
      }
      self.els[id].slot = s;
      self.els[id].el.textContent = s.text;           // text only: never HTML
      self._place(id);
    });
  };
  Layer.prototype._place = function (id) {
    var e = this.els[id], s = e.slot, f = this.frame, k = f.h / f.authoredH;
    var st = e.el.style;
    st.left = (f.x + s.region.x * f.w) + 'px';
    st.top = (f.y + s.region.y * f.h) + 'px';
    st.width = (s.region.width * f.w) + 'px';
    st.fontSize = (s.style.size * k) + 'px';
    st.color = s.style.color;
    st.background = s.style.box === 'solid' ? this.boxFill : 'transparent';
    st.zIndex = s.style.layer || '';
  };
  /* visible(id) decided by the caller (the show rule needs playback state); returns ids that turned ON */
  Layer.prototype.render = function (isVisible) {
    var self = this, turnedOn = [];
    Object.keys(this.els).forEach(function (id) {
      var want = !!isVisible(id, self.els[id].slot);
      if (want !== self.els[id].on) {
        self.els[id].on = want;
        self.els[id].el.classList.toggle('on', want);
        if (want) turnedOn.push(id);
      }
    });
    return turnedOn;
  };
  Layer.prototype.rects = function () {
    var out = {};
    var self = this;
    Object.keys(this.els).forEach(function (id) { out[id] = self.els[id].el.getBoundingClientRect(); });
    return out;
  };

  global.Custom = {resolve: resolve, merge: merge, record: record, canonical: canonical, canonicalRecord: canonicalRecord,
                   sha16: sha16, num: num, Layer: Layer, TIERS_SUPPORTED: TIERS_SUPPORTED};
})(typeof window !== 'undefined' ? window : globalThis);
