/* engine.js — the exercise renderers and the contract every one of them obeys.
 *
 * THE CONTRACT (asserted mechanically by _qa.html):
 *   1. Every exercise has a "Check Answers" button and a "Try Again" button.
 *   2. "Try Again" re-shuffles and re-renders from scratch. It never reveals the answer.
 *   3. Marking is per element, never one verdict for the whole item.
 *   4. Feedback leads with the rationale for what the learner ACTUALLY chose.
 *   5. Never colour alone: a glyph and a text label accompany every green and red.
 *   6. Drag always has a click/tap equivalent and full keyboard operation.
 *   7. An aria-live status announces the result.
 *   8. Completion is written through Progress, inside try/catch.
 *   9. Every target set carries at least two distractors more than it has slots.
 *
 * No fetch(), no modules, no absolute paths: this file runs from file://.
 */
(function (root, doc) {
  "use strict";

  var L = root.LEDGER, P = root.Progress, S = root.Speech;

  /* ================================================================
   * Utilities
   * ================================================================ */

  function esc(s) {
    return String(s === undefined || s === null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Authored explanation text (why / explain / says / reason / gloss) is written by
     us and may contain markup such as <em>. Learner input is NEVER passed through
     this -- it goes through esc(). */
  function rich(s) { return s === undefined || s === null ? "" : String(s); }

  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  /* Seeded shuffle, so ?seed=123 reproduces a specific arrangement when
     reporting a problem. Without a seed it is a fresh shuffle every render. */
  var seedParam = (function () {
    var m = String(root.location.search || "").match(/[?&]seed=(\d+)/);
    return m ? Number(m[1]) : null;
  })();
  var seedCounter = 0;

  function rng() {
    if (seedParam === null) return Math.random;
    var s = (seedParam + (seedCounter++) * 7919) % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }

  function shuffle(arr) {
    var a = arr.slice(), r = rng();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function arabic(text) {
    var s = el("span", "ar");
    s.setAttribute("lang", "ar");
    s.setAttribute("dir", "rtl");
    s.textContent = text;
    return s;
  }

  /* A term, bilingual, with a speaker on each language. */
  function termLine(t, opts) {
    opts = opts || {};
    var w = el("span", "term-line");
    var en = el("span", "term-en", t.en);
    w.appendChild(en);
    if (S && !opts.noSpeak) w.appendChild(S.button(t.en, "en", "Pronounce in English"));
    if (t.ar && !opts.enOnly) {
      w.appendChild(el("span", "term-sep", "\u00b7"));
      w.appendChild(arabic(t.ar));
      if (S && !opts.noSpeak) w.appendChild(S.button(t.ar, "ar", "Pronounce in Arabic"));
    }
    return w;
  }

  function glyph(ok) {
    var g = el("span", "glyph " + (ok ? "glyph-ok" : "glyph-no"));
    g.setAttribute("aria-hidden", "true");
    g.textContent = ok ? "\u2713" : "\u2717";
    return g;
  }

  function mark(node, ok) {
    node.classList.remove("good", "bad");
    node.classList.add(ok ? "good" : "bad");
    if (!node.querySelector(":scope > .glyph")) node.appendChild(glyph(ok));
    node.setAttribute("data-mark", ok ? "correct" : "incorrect");
  }

  function unmark(node) {
    node.classList.remove("good", "bad");
    node.removeAttribute("data-mark");
    var g = node.querySelector(":scope > .glyph");
    if (g) g.remove();
  }

  /* ================================================================
   * Drag, click and keyboard — one model for all drag exercises
   * ================================================================ */

  function DragSet(opts) {
    var self = {};
    var selected = null;
    var tiles = {};                 /* id -> {el, label, zone} */
    var zones = [];                 /* {id, el, capacity, host} */

    function announce(msg) { if (opts.live) opts.live.textContent = msg; }

    self.addTile = function (id, label, ar) {
      var b = el("button", "tile");
      b.type = "button";
      b.draggable = true;
      b.dataset.tile = id;
      b.appendChild(el("span", "tile-text", label));
      if (ar) b.appendChild(arabic(ar));
      b.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", id);
        e.dataTransfer.effectAllowed = "move";
        b.classList.add("dragging");
      });
      b.addEventListener("dragend", function () { b.classList.remove("dragging"); });
      b.addEventListener("click", function () { select(id); });
      tiles[id] = { el: b, label: label, zone: null };
      opts.bank.appendChild(b);
      return b;
    };

    function select(id) {
      var t = tiles[id];
      if (!t) return;
      if (selected === id) { clearSelection(); return; }
      clearSelection();
      selected = id;
      t.el.classList.add("selected");
      t.el.setAttribute("aria-pressed", "true");
      announce("Selected " + t.label + ". Now choose where it goes.");
      zones.forEach(function (z) { z.el.classList.add("awaiting"); });
    }
    function clearSelection() {
      if (selected && tiles[selected]) {
        tiles[selected].el.classList.remove("selected");
        tiles[selected].el.setAttribute("aria-pressed", "false");
      }
      selected = null;
      zones.forEach(function (z) { z.el.classList.remove("awaiting"); });
    }

    self.addZone = function (id, node, capacity, host) {
      var z = { id: id, el: node, capacity: capacity || 1, host: host || node };
      zones.push(z);
      /* The zone's logical id on the element itself: addressable for debugging,
         for ?seed= reproduction, and for the automated contract checks. */
      node.dataset.zoneId = id;
      node.setAttribute("tabindex", "0");
      node.setAttribute("role", "button");
      node.addEventListener("dragover", function (e) { e.preventDefault(); node.classList.add("over"); });
      node.addEventListener("dragleave", function () { node.classList.remove("over"); });
      node.addEventListener("drop", function (e) {
        e.preventDefault();
        node.classList.remove("over");
        place(z, e.dataTransfer.getData("text/plain"));
      });
      node.addEventListener("click", function () { if (selected) place(z, selected); });
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (selected) place(z, selected);
        }
      });
      return z;
    };

    function zoneOf(tileId) {
      for (var i = 0; i < zones.length; i++) if (contents(zones[i]).indexOf(tileId) >= 0) return zones[i];
      return null;
    }
    function contents(z) {
      return Array.prototype.slice.call(z.host.querySelectorAll("[data-chip]"))
        .map(function (c) { return c.dataset.chip; });
    }

    function place(z, tileId) {
      var t = tiles[tileId];
      if (!t) return;
      var from = zoneOf(tileId);
      if (from === z) { clearSelection(); return; }
      if (from) removeChip(from, tileId);
      if (z.capacity === 1) {
        contents(z).forEach(function (other) { removeChip(z, other); });
      }
      var chip = el("span", "chip");
      chip.dataset.chip = tileId;
      chip.appendChild(el("span", "chip-text", t.label));
      var x = el("button", "chip-x");
      x.type = "button";
      x.setAttribute("aria-label", "Remove " + t.label);
      x.textContent = "\u00d7";
      x.addEventListener("click", function (e) { e.stopPropagation(); removeChip(z, tileId); });
      chip.appendChild(x);
      z.host.appendChild(chip);
      z.el.classList.add("filled");
      unmark(z.el);
      t.el.classList.add("used");
      t.el.disabled = false;
      clearSelection();
      announce(t.label + " placed.");
      if (opts.onChange) opts.onChange();
    }

    function removeChip(z, tileId) {
      var chip = z.host.querySelector('[data-chip="' + cssEscape(tileId) + '"]');
      if (chip) chip.remove();
      if (!contents(z).length) z.el.classList.remove("filled");
      if (tiles[tileId]) tiles[tileId].el.classList.remove("used");
      unmark(z.el);
      if (opts.onChange) opts.onChange();
    }

    function cssEscape(s) { return String(s).replace(/["\\]/g, "\\$&"); }

    self.place = place;
    self.zones = zones;
    self.tiles = tiles;
    self.contents = contents;
    self.zoneOf = zoneOf;
    self.placements = function () {
      var out = {};
      zones.forEach(function (z) { out[z.id] = contents(z); });
      return out;
    };
    self.unplacedCount = function () {
      var n = 0;
      Object.keys(tiles).forEach(function (id) { if (!zoneOf(id)) n++; });
      return n;
    };
    return self;
  }

  /* ================================================================
   * The exercise shell — buttons, status, feedback, completion
   * ================================================================ */

  var registry = [];          /* every exercise mounted on this page */

  function shell(host, spec, index) {
    var sec = el("section", "exercise");
    sec.id = "ex-" + spec.id;
    sec.dataset.exercise = spec.id;
    sec.dataset.type = spec.type;

    var head = el("div", "ex-head");
    var badge = el("span", "ex-num", spec.badge || String(index + 1).padStart(2, "0"));
    head.appendChild(badge);
    var hx = el("div", "ex-headtext");
    var h = el("h3", null, spec.title);
    hx.appendChild(h);
    if (spec.instruction) hx.appendChild(el("p", "ex-instruction", spec.instruction));
    head.appendChild(hx);
    if (spec.tag) head.appendChild(el("span", "ex-tag", spec.tag));
    sec.appendChild(head);

    var body = el("div", "ex-body");
    sec.appendChild(body);

    var live = el("p", "ex-live");
    live.setAttribute("aria-live", "polite");
    sec.appendChild(live);

    var controls = el("div", "ex-controls");
    var check = el("button", "btn btn-primary", "Check Answers");
    check.type = "button";
    var again = el("button", "btn btn-ghost", "Try Again");
    again.type = "button";
    var status = el("span", "ex-status");
    status.setAttribute("aria-live", "polite");
    controls.appendChild(check);
    controls.appendChild(again);
    controls.appendChild(status);
    sec.appendChild(controls);

    var feedback = el("div", "ex-feedback");
    feedback.setAttribute("aria-live", "polite");
    sec.appendChild(feedback);

    host.appendChild(sec);

    if (P && P.exerciseDone(root.PAGE.id, spec.id)) sec.classList.add("was-done");

    var api = { sec: sec, body: body, live: live, status: status, feedback: feedback,
                check: check, again: again, spec: spec };

    function render() {
      body.innerHTML = "";
      feedback.innerHTML = "";
      feedback.classList.remove("show");
      status.textContent = "";
      status.className = "ex-status";
      live.textContent = "";
      var r = RENDERERS[spec.type];
      if (!r) { body.appendChild(el("p", "error", "Unknown exercise type: " + spec.type)); return; }
      api.grade = r(body, spec, api);
    }

    check.addEventListener("click", function () {
      if (!api.grade) return;
      var res = api.grade();
      var total = res.total, score = res.score;
      var allRight = res.ok !== undefined ? res.ok : score === total;

      status.className = "ex-status " + (allRight ? "is-good" : "is-retry");
      status.textContent = res.statusText ||
        (total > 1 ? score + " of " + total + " correct" : (allRight ? "Correct" : "Not yet"));

      feedback.innerHTML = res.html || "";
      feedback.classList.add("show");
      live.textContent = (allRight ? "All correct. " : "Not all correct. ") + status.textContent;

      if (spec.traps) {
        spec.traps.forEach(function (t) { allRight ? P.trapPass(t) : P.trapFail(t); });
      }
      if (res.trapFails) res.trapFails.forEach(function (t) { P.trapFail(t); });

      if (allRight && P) { P.markExercise(root.PAGE.id, spec.id); sec.classList.add("is-done"); }
      feedback.scrollIntoView({ block: "nearest", behavior: seedParam ? "auto" : "smooth" });
    });

    again.addEventListener("click", function () {
      sec.classList.remove("is-done");
      render();
      live.textContent = "Reset. The items have been shuffled.";
      var first = body.querySelector("button, input, select, textarea, [tabindex]");
      if (first) first.focus();
    });

    render();
    registry.push(api);
    return api;
  }

  /* ---- shared feedback builders ---- */

  function ul(items) {
    return "<ul class=\"why-list\">" + items.join("") + "</ul>";
  }
  function li(cls, head, body) {
    return "<li class=\"" + cls + "\"><strong>" + head + "</strong> " + body + "</li>";
  }
  function yourAnswerFirst(chosenHtml, correctHtml, restHtml) {
    var out = "";
    if (chosenHtml) out += "<div class=\"fb-block fb-yours\"><h4>Your answer</h4>" + chosenHtml + "</div>";
    if (correctHtml) out += "<div class=\"fb-block fb-correct\"><h4>The correct answer</h4>" + correctHtml + "</div>";
    if (restHtml) out += "<div class=\"fb-block fb-rest\"><h4>Why the other options are wrong</h4>" + restHtml + "</div>";
    return out;
  }

  /* ================================================================
   * Renderers
   * ================================================================ */

  var RENDERERS = {};

  /* ---------- match: term <-> meaning, with distractors ---------- */
  RENDERERS.match = function (body, spec, api) {
    var prompts = shuffle(spec.pairs);
    var answerPool = spec.pairs.map(function (p) { return { id: p.b, label: p.b, ar: p.bAr }; });
    (spec.distractors || []).forEach(function (d) {
      answerPool.push({ id: typeof d === "string" ? d : d.b, label: typeof d === "string" ? d : d.b,
                        ar: d.bAr, bogus: true, why: d.why });
    });

    var intro = el("p", "ex-hint", spec.hint ||
      "Drag a tile into a box, or tap a tile and then tap its box. Some tiles do not belong to any box.");
    body.appendChild(intro);

    var bank = el("div", "bank");
    body.appendChild(bank);
    var grid = el("div", "match-grid");
    body.appendChild(grid);

    var ds = DragSet({ bank: bank, live: api.live });
    shuffle(answerPool).forEach(function (a) { ds.addTile(a.id, a.label, a.ar); });

    prompts.forEach(function (p) {
      var row = el("div", "match-row");
      var q = el("div", "match-prompt");
      if (spec.promptLang === "ar") {
        q.appendChild(arabic(p.a));
        if (S) q.appendChild(S.button(p.a, "ar", "Pronounce in Arabic"));
      } else {
        q.appendChild(el("span", "match-prompt-text", p.a));
        if (S && spec.speakPrompt !== false) q.appendChild(S.button(p.a, "en", "Pronounce in English"));
      }
      var slot = el("div", "drop drop-single");
      slot.dataset.zone = p.b;
      slot.setAttribute("aria-label", "Drop the match for " + p.a);
      var holder = el("span", "drop-holder");
      slot.appendChild(el("span", "drop-hint", spec.dropHint || "drop the match here"));
      slot.appendChild(holder);
      ds.addZone(p.b, slot, 1, holder);
      row.appendChild(q);
      row.appendChild(slot);
      grid.appendChild(row);
    });

    return function () {
      var placed = ds.placements(), score = 0, chosen = [], total = spec.pairs.length;
      ds.zones.forEach(function (z) {
        var got = placed[z.id][0];
        var ok = got === z.id;
        if (got) { mark(z.el, ok); chosen.push({ want: z.id, got: got, ok: ok }); }
        else { unmark(z.el); z.el.classList.add("bad"); chosen.push({ want: z.id, got: null, ok: false }); }
        if (ok) score++;
      });
      var wrong = chosen.filter(function (c) { return !c.ok; });
      var yours = wrong.length
        ? ul(wrong.map(function (c) {
            var p = findPair(c.want);
            var d = (spec.distractors || []).filter(function (x) { return (typeof x === "string" ? x : x.b) === c.got; })[0];
            return li("why-no", esc(p.a) + " \u2192 " + esc(c.got || "nothing placed") + ".",
              c.got ? rich((d && d.why) || "That is the match for something else. " + correctFor(c.want)) :
                      "Nothing was placed here. " + correctFor(c.want));
          }))
        : "";
      var all = ul(spec.pairs.map(function (p) {
        return li("why-ok", esc(p.a) + " \u2192 " + esc(p.b) + ".", rich(p.why || ""));
      }));
      function findPair(b) { return spec.pairs.filter(function (p) { return p.b === b; })[0]; }
      function correctFor(b) { var p = findPair(b); return "The match is " + esc(p.b) + ": " + rich(p.why || ""); }

      return { score: score, total: total,
               html: yourAnswerFirst(yours, score === total ? all : "", score === total ? "" : all) };
    };
  };

  /* ---------- classify: items into category bins ---------- */
  RENDERERS.classify = function (body, spec, api) {
    if (spec.prompt) body.appendChild(el("p", "ex-question", spec.prompt));
    body.appendChild(el("p", "ex-hint", spec.hint ||
      "Drag each item into a box, or tap an item and then tap a box. Not every item belongs in a box."));

    var bank = el("div", "bank");
    body.appendChild(bank);
    var bins = el("div", "bins" + (spec.look === "t-account" ? " bins-t" : ""));
    bins.style.setProperty("--bin-count", String(spec.categories.length));
    body.appendChild(bins);

    var ds = DragSet({ bank: bank, live: api.live });
    var pool = spec.items.map(function (it) { return { id: it.name, label: it.name, ar: it.ar }; });
    (spec.distractors || []).forEach(function (d) {
      pool.push({ id: d.name, label: d.name, ar: d.ar, bogus: true, why: d.why });
    });
    shuffle(pool).forEach(function (t) { ds.addTile(t.id, t.label, t.ar); });

    spec.categories.forEach(function (c) {
      var bin = el("div", "bin");
      var head = el("div", "bin-head");
      head.appendChild(el("span", "bin-title", c.label));
      if (c.hint) head.appendChild(el("span", "bin-hint", c.hint));
      bin.appendChild(head);
      var drop = el("div", "drop drop-multi");
      drop.setAttribute("aria-label", "Drop items into " + c.label);
      drop.appendChild(el("span", "drop-hint", "drop here"));
      var holder = el("span", "drop-holder");
      drop.appendChild(holder);
      ds.addZone(c.id, drop, 99, holder);
      bin.appendChild(drop);
      bins.appendChild(bin);
    });

    return function () {
      var placed = ds.placements(), score = 0, wrongs = [], trapFails = [];
      var binEl = {};
      ds.zones.forEach(function (z) { binEl[z.id] = z.el; unmark(z.el); });

      spec.items.forEach(function (it) {
        var where = null;
        Object.keys(placed).forEach(function (k) { if (placed[k].indexOf(it.name) >= 0) where = k; });
        if (where === it.cat) score++;
        else {
          wrongs.push({ item: it, where: where });
          if (it.trap) trapFails.push(it.trap);
        }
      });
      var strays = [];
      (spec.distractors || []).forEach(function (d) {
        Object.keys(placed).forEach(function (k) {
          if (placed[k].indexOf(d.name) >= 0) strays.push(d);
        });
      });

      ds.zones.forEach(function (z) {
        var got = placed[z.id];
        var allOk = got.every(function (name) {
          var it = spec.items.filter(function (x) { return x.name === name; })[0];
          return it && it.cat === z.id;
        });
        var wants = spec.items.filter(function (x) { return x.cat === z.id; }).length;
        if (got.length) mark(z.el, allOk && got.length === wants);
      });

      var yours = (wrongs.length || strays.length) ? ul(
        wrongs.map(function (w) {
          var catLabel = w.where ? labelOf(w.where) : "nothing";
          return li("why-no", esc(w.item.name) + " \u2192 you put it in " + esc(catLabel) + ".",
            "It belongs in <strong>" + esc(labelOf(w.item.cat)) + "</strong>. " + rich(w.item.why || ""));
        }).concat(strays.map(function (d) {
          return li("why-no", esc(d.name) + " does not belong in any box.", rich(d.why || ""));
        }))
      ) : "";

      function labelOf(id) {
        var c = spec.categories.filter(function (x) { return x.id === id; })[0];
        return c ? c.label : id;
      }
      var all = ul(spec.items.map(function (it) {
        return li("why-ok", esc(it.name) + " \u2192 " + esc(labelOf(it.cat)) + ".", rich(it.why || ""));
      }));

      return { score: score, total: spec.items.length, trapFails: trapFails,
               ok: score === spec.items.length && !strays.length,
               html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- imagedrop: drop onto a figure, with live subtotals ---------- */
  RENDERERS.imagedrop = function (body, spec, api) {
    if (spec.prompt) body.appendChild(el("p", "ex-question", spec.prompt));
    body.appendChild(el("p", "ex-hint", spec.hint ||
      "Drag each label onto the right band of the statement, or tap a label and then tap a band. " +
      "The subtotals update as you place them \u2014 if a subtotal looks wrong, a label is in the wrong band."));

    var bank = el("div", "bank");
    body.appendChild(bank);

    var figWrap = el("div", "figure figure-live");
    body.appendChild(figWrap);

    var built = root.Figures.dropTarget(spec.figure, figWrap, spec);
    var ds = DragSet({ bank: bank, live: api.live, onChange: function () {
      if (built.update) built.update(ds.placements());
    } });

    var pool = spec.items.map(function (it) { return { id: it.name, label: it.name, ar: it.ar }; });
    (spec.distractors || []).forEach(function (d) {
      pool.push({ id: d.name, label: d.name, ar: d.ar, why: d.why });
    });
    shuffle(pool).forEach(function (t) { ds.addTile(t.id, t.label, t.ar); });

    built.zones.forEach(function (z) { ds.addZone(z.id, z.el, 99, z.host); });
    if (built.update) built.update(ds.placements());

    return function () {
      var placed = ds.placements(), score = 0, wrongs = [], trapFails = [], strays = [];
      built.zones.forEach(function (z) { unmark(z.el); });

      spec.items.forEach(function (it) {
        var where = null;
        Object.keys(placed).forEach(function (k) { if (placed[k].indexOf(it.name) >= 0) where = k; });
        if (where === it.zone) score++;
        else { wrongs.push({ item: it, where: where }); if (it.trap) trapFails.push(it.trap); }
      });
      (spec.distractors || []).forEach(function (d) {
        Object.keys(placed).forEach(function (k) { if (placed[k].indexOf(d.name) >= 0) strays.push(d); });
      });
      built.zones.forEach(function (z) {
        var got = placed[z.id];
        if (!got.length) return;
        var allOk = got.every(function (n) {
          var it = spec.items.filter(function (x) { return x.name === n; })[0];
          return it && it.zone === z.id;
        });
        var wants = spec.items.filter(function (x) { return x.zone === z.id; }).length;
        mark(z.el, allOk && got.length === wants);
      });

      function zoneLabel(id) {
        var z = built.zones.filter(function (x) { return x.id === id; })[0];
        return z ? z.label : id;
      }
      var yours = (wrongs.length || strays.length) ? ul(
        wrongs.map(function (w) {
          return li("why-no", esc(w.item.name) + " \u2192 " +
            (w.where ? "you put it in " + esc(zoneLabel(w.where)) : "not placed") + ".",
            "It belongs in <strong>" + esc(zoneLabel(w.item.zone)) + "</strong>. " + rich(w.item.why || ""));
        }).concat(strays.map(function (d) {
          return li("why-no", esc(d.name) + " does not belong on this statement.", rich(d.why || ""));
        }))
      ) : "";
      var all = ul(spec.items.map(function (it) {
        return li("why-ok", esc(it.name) + " \u2192 " + esc(zoneLabel(it.zone)) + ".", rich(it.why || ""));
      }));

      return { score: score, total: spec.items.length, trapFails: trapFails,
               ok: score === spec.items.length && !strays.length,
               html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- order: drag to sequence ---------- */
  RENDERERS.order = function (body, spec, api) {
    if (spec.prompt) body.appendChild(el("p", "ex-question", spec.prompt));
    body.appendChild(el("p", "ex-hint", "Drag the steps into order, or use the \u2191 \u2193 buttons."));

    var list = el("ol", "order-list");
    body.appendChild(list);

    var items = shuffle(spec.items);
    /* Never hand back the printed order as the starting arrangement. */
    if (items.every(function (it, i) { return it.pos === i + 1; }) && items.length > 2) {
      items.push(items.shift());
    }

    function redraw() {
      list.innerHTML = "";
      items.forEach(function (it, i) {
        var liEl = el("li", "order-item");
        liEl.draggable = true;
        liEl.dataset.pos = it.pos;
        var n = el("span", "order-n", String(i + 1));
        liEl.appendChild(n);
        liEl.appendChild(el("span", "order-text", it.text));
        var up = el("button", "order-btn", "\u2191");
        up.type = "button"; up.setAttribute("aria-label", "Move up: " + it.text);
        var dn = el("button", "order-btn", "\u2193");
        dn.type = "button"; dn.setAttribute("aria-label", "Move down: " + it.text);
        up.addEventListener("click", function () { if (i > 0) { swap(i, i - 1); } });
        dn.addEventListener("click", function () { if (i < items.length - 1) { swap(i, i + 1); } });
        var ctl = el("span", "order-ctl");
        ctl.appendChild(up); ctl.appendChild(dn);
        liEl.appendChild(ctl);
        liEl.addEventListener("dragstart", function (e) { e.dataTransfer.setData("text/plain", String(i)); });
        liEl.addEventListener("dragover", function (e) { e.preventDefault(); liEl.classList.add("over"); });
        liEl.addEventListener("dragleave", function () { liEl.classList.remove("over"); });
        liEl.addEventListener("drop", function (e) {
          e.preventDefault(); liEl.classList.remove("over");
          var from = Number(e.dataTransfer.getData("text/plain"));
          var moved = items.splice(from, 1)[0];
          items.splice(i, 0, moved);
          redraw();
        });
        list.appendChild(liEl);
      });
    }
    function swap(a, b) { var t = items[a]; items[a] = items[b]; items[b] = t; redraw(); }
    redraw();

    return function () {
      var score = 0, rows = Array.prototype.slice.call(list.children);
      rows.forEach(function (r, i) {
        var ok = Number(r.dataset.pos) === i + 1;
        mark(r, ok);
        if (ok) score++;
      });
      var right = spec.items.slice().sort(function (a, b) { return a.pos - b.pos; });
      var all = ul(right.map(function (it) {
        return li("why-ok", it.pos + ". " + esc(it.text), rich(it.why || ""));
      }));
      return { score: score, total: spec.items.length,
               html: yourAnswerFirst("", "", all),
               statusText: score + " of " + spec.items.length + " in the right place" };
    };
  };

  /* ---------- journal: debit and credit lines that must balance ---------- */
  RENDERERS.journal = function (body, spec, api) {
    var sc = el("div", "scenario");
    sc.appendChild(el("strong", null, spec.scenario));
    if (spec.date) sc.appendChild(el("span", "scenario-date", spec.date));
    if (spec.scenarioAr) sc.appendChild(arabic(spec.scenarioAr));
    body.appendChild(sc);

    body.appendChild(el("p", "ex-hint",
      "Drag an account onto each line, or tap an account and then tap a line. " +
      "An entry whose debits do not equal its credits is never correct."));

    var bank = el("div", "bank");
    body.appendChild(bank);

    var table = el("div", "journal");
    body.appendChild(table);

    var ds = DragSet({ bank: bank, live: api.live, onChange: updateTotals });

    var accounts = {};
    spec.lines.forEach(function (ln) { accounts[ln.account] = true; });
    (spec.choices || []).forEach(function (c) { accounts[c.name] = true; });
    shuffle(Object.keys(accounts)).forEach(function (name) { ds.addTile(name, name); });

    var head = el("div", "journal-row journal-head");
    head.appendChild(el("span", "j-acct", "Account"));
    head.appendChild(el("span", "j-amt", "Debit"));
    head.appendChild(el("span", "j-amt", "Credit"));
    table.appendChild(head);

    spec.lines.forEach(function (ln, i) {
      var row = el("div", "journal-row");
      var drop = el("div", "drop drop-single j-acct");
      drop.setAttribute("aria-label", "Account for the " + (ln.side === "dr" ? "debit" : "credit") +
        " of " + L.money(ln.amount));
      drop.appendChild(el("span", "drop-hint", ln.side === "dr" ? "debit account" : "credit account"));
      var holder = el("span", "drop-holder");
      drop.appendChild(holder);
      ds.addZone("line" + i, drop, 1, holder);
      row.appendChild(drop);
      row.appendChild(el("span", "j-amt" + (ln.side === "dr" ? " j-on" : ""),
        ln.side === "dr" ? L.money(ln.amount) : ""));
      row.appendChild(el("span", "j-amt" + (ln.side === "cr" ? " j-on" : ""),
        ln.side === "cr" ? L.money(ln.amount) : ""));
      if (ln.side === "cr") drop.classList.add("is-credit");
      table.appendChild(row);
    });

    var totals = el("div", "journal-row journal-total");
    totals.appendChild(el("span", "j-acct", "Totals"));
    var tdr = el("span", "j-amt");
    var tcr = el("span", "j-amt");
    totals.appendChild(tdr); totals.appendChild(tcr);
    table.appendChild(totals);

    var balanceNote = el("p", "journal-balance");
    body.appendChild(balanceNote);

    var dr = 0, cr = 0;
    spec.lines.forEach(function (ln) { if (ln.side === "dr") dr += ln.amount; else cr += ln.amount; });
    tdr.textContent = L.money(dr);
    tcr.textContent = L.money(cr);

    function updateTotals() {
      var filled = ds.zones.filter(function (z) { return ds.contents(z).length; }).length;
      balanceNote.textContent = filled === spec.lines.length
        ? "Debits " + L.money(dr) + " = credits " + L.money(cr) + ". The entry balances."
        : filled + " of " + spec.lines.length + " lines filled.";
      balanceNote.className = "journal-balance" + (filled === spec.lines.length ? " is-balanced" : "");
    }
    updateTotals();

    return function () {
      var placed = ds.placements(), score = 0, wrongs = [];
      ds.zones.forEach(function (z, i) {
        var got = placed[z.id][0];
        var want = spec.lines[i].account;
        var ok = got === want;
        if (got) mark(z.el, ok); else { z.el.classList.add("bad"); }
        if (ok) score++; else wrongs.push({ want: want, got: got, side: spec.lines[i].side, amount: spec.lines[i].amount });
      });

      var reasons = {};
      (spec.choices || []).forEach(function (c) { reasons[c.name] = c.reason; });

      var yours = wrongs.length ? ul(wrongs.map(function (w) {
        return li("why-no",
          (w.side === "dr" ? "Debit " : "Credit ") + L.money(w.amount) + " \u2192 " +
            esc(w.got || "nothing placed") + ".",
          w.got && reasons[w.got] ? esc(reasons[w.got]) :
            "The correct account is <strong>" + esc(w.want) + "</strong>.");
      })) : "";

      var entry = "<table class=\"je\"><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>" +
        spec.lines.map(function (ln) {
          return "<tr><td class=\"" + (ln.side === "cr" ? "je-indent" : "") + "\">" + esc(ln.account) + "</td>" +
            "<td>" + (ln.side === "dr" ? L.money(ln.amount) : "") + "</td>" +
            "<td>" + (ln.side === "cr" ? L.money(ln.amount) : "") + "</td></tr>";
        }).join("") +
        "<tr class=\"je-total\"><td>Totals</td><td>" + L.money(dr) + "</td><td>" + L.money(cr) + "</td></tr>" +
        "</tbody></table>";

      var correct = entry +
        (spec.logic ? "<p>" + rich(spec.logic) + "</p>" : "") +
        (spec.equation ? "<p class=\"eq-note\"><strong>Accounting equation:</strong> " + rich(spec.equation) + "</p>" : "");

      return { score: score, total: spec.lines.length,
               html: yourAnswerFirst(yours, correct, "") };
    };
  };

  /* ---------- grid: the effect grid, optionally faded ---------- */
  var GRID_COLS = [
    { key: "a",  label: "Assets" },
    { key: "l",  label: "Liabilities" },
    { key: "e",  label: "Equity" },
    { key: "ni", label: "Net income" },
    { key: "cf", label: "Cash flow" }
  ];
  var CF_OPTIONS = [
    { v: "operating", t: "Operating" },
    { v: "investing", t: "Investing" },
    { v: "financing", t: "Financing" },
    { v: "none", t: "No cash flow" }
  ];

  RENDERERS.grid = function (body, spec, api) {
    if (spec.prompt) body.appendChild(el("p", "ex-question", spec.prompt));
    if (spec.faded) {
      body.appendChild(el("p", "ex-hint",
        "The first rows are done for you. Complete the rest: choose the direction for each column, " +
        "then the cash-flow category."));
    }

    var rows = spec.rows;
    var tableWrap = el("div", "table-scroll");
    var t = el("table", "grid-table");
    var thead = el("thead");
    var hr = el("tr");
    hr.appendChild(el("th", "grid-rowhead", "Transaction"));
    GRID_COLS.forEach(function (c) { hr.appendChild(el("th", null, c.label)); });
    thead.appendChild(hr);
    t.appendChild(thead);
    var tbody = el("tbody");
    t.appendChild(tbody);
    tableWrap.appendChild(t);
    body.appendChild(tableWrap);

    var inputs = [];

    rows.forEach(function (r) {
      var tr = el("tr", r.given ? "given" : "to-do");
      var th = el("th", "grid-rowhead");
      th.appendChild(el("span", "grid-n", String(r.n)));
      th.appendChild(el("span", "grid-date", r.date || ""));
      th.appendChild(el("span", "grid-text", r.short || r.text));
      tr.appendChild(th);

      GRID_COLS.forEach(function (c) {
        var td = el("td", "grid-cell");
        if (r.given) {
          td.classList.add("is-given");
          td.appendChild(el("span", "val", cellText(r, c.key)));
        } else if (c.key === "cf") {
          var sel = el("select", "cf-select");
          sel.setAttribute("aria-label", "Cash flow category for transaction " + r.n);
          sel.appendChild(el("option", null, "\u2014"));
          shuffle(CF_OPTIONS).forEach(function (o) {
            var op = el("option", null, o.t);
            op.value = o.v;
            sel.appendChild(op);
          });
          td.appendChild(sel);
          inputs.push({ row: r, col: c.key, node: sel, td: td, kind: "cf" });
        } else {
          var group = el("div", "tri");
          group.setAttribute("role", "group");
          group.setAttribute("aria-label", c.label + " for transaction " + r.n);
          [["up", "\u2191"], ["none", "0"], ["down", "\u2193"]].forEach(function (o) {
            var b = el("button", "tri-btn", o[1]);
            b.type = "button";
            b.dataset.v = o[0];
            b.setAttribute("aria-label", c.label + " " +
              (o[0] === "up" ? "increases" : o[0] === "down" ? "decreases" : "does not change"));
            b.addEventListener("click", function () {
              group.querySelectorAll(".tri-btn").forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-pressed", "false"); });
              b.classList.add("on");
              b.setAttribute("aria-pressed", "true");
              group.dataset.v = o[0];
              unmark(td);
            });
            group.appendChild(b);
          });
          td.appendChild(group);
          inputs.push({ row: r, col: c.key, node: group, td: td, kind: "tri" });
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    function cellText(r, key) {
      if (key === "cf") {
        if (r.eff.cf === "none") return "none";
        return r.eff.cf.charAt(0).toUpperCase() + r.eff.cf.slice(1) + " " + L.signed(r.eff.cfAmount);
      }
      return L.signed(r.eff[key]);
    }
    function dirOf(n) { return n > 0 ? "up" : n < 0 ? "down" : "none"; }

    return function () {
      var score = 0, total = inputs.length, wrongs = [];
      inputs.forEach(function (inp) {
        var want, got;
        if (inp.kind === "cf") {
          want = inp.row.eff.cf;
          got = inp.node.value || null;
        } else {
          want = dirOf(inp.row.eff[inp.col]);
          got = inp.node.dataset.v || null;
        }
        var ok = got === want;
        mark(inp.td, ok);
        if (ok) score++;
        else wrongs.push({ row: inp.row, col: inp.col, want: want, got: got });
      });

      function colLabel(k) {
        return GRID_COLS.filter(function (c) { return c.key === k; })[0].label;
      }
      function dirWord(d) {
        return d === "up" ? "increases" : d === "down" ? "decreases" : d === "none" ? "does not change" : d;
      }
      var yours = wrongs.length ? ul(wrongs.map(function (w) {
        var wantTxt = w.col === "cf" ? cfWord(w.want) : dirWord(w.want);
        var gotTxt = w.got ? (w.col === "cf" ? cfWord(w.got) : dirWord(w.got)) : "nothing chosen";
        return li("why-no", "Row " + w.row.n + ", " + esc(colLabel(w.col)) + ": you said " + esc(gotTxt) + ".",
          "It <strong>" + esc(wantTxt) + "</strong> \u2014 " + esc(w.row.note || explain(w.row)));
      })) : "";
      function cfWord(v) {
        var o = CF_OPTIONS.filter(function (x) { return x.v === v; })[0];
        return o ? o.t.toLowerCase() : v;
      }
      function explain(r) {
        return "see the journal entry: " + r.entry.map(function (ln) {
          return (ln.side === "dr" ? "Dr " : "Cr ") + ln.account + " " + L.money(ln.amount);
        }).join("; ") + ".";
      }

      var all = "<div class=\"table-scroll\"><table class=\"je\"><thead><tr><th>Row</th><th>Journal entry</th>" +
        "<th>Assets</th><th>Liab.</th><th>Equity</th><th>Net income</th><th>Cash flow</th></tr></thead><tbody>" +
        rows.map(function (r) {
          return "<tr><td>" + r.n + "</td><td>" + r.entry.map(function (ln) {
            return (ln.side === "dr" ? "Dr " : "Cr ") + esc(ln.account) + " " + L.money(ln.amount);
          }).join("<br>") + "</td>" +
            "<td>" + L.signed(r.eff.a) + "</td><td>" + L.signed(r.eff.l) + "</td>" +
            "<td>" + L.signed(r.eff.e) + "</td><td>" + L.signed(r.eff.ni) + "</td>" +
            "<td>" + (r.eff.cf === "none" ? "none" : cfWord(r.eff.cf) + " " + L.signed(r.eff.cfAmount)) + "</td></tr>";
        }).join("") + "</tbody></table></div>";

      return { score: score, total: total, html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- tie: the book's tie lines, verified ---------- */
  RENDERERS.tie = function (body, spec, api) {
    body.appendChild(el("p", "ex-hint",
      "Enter each figure in USD 000 \u2014 no $ sign and no commas. Nothing passes until all three lines tie."));
    var list = el("div", "tie-list");
    body.appendChild(list);
    var fields = [];
    spec.ties.forEach(function (t, i) {
      var row = el("div", "tie-row");
      row.appendChild(el("span", "tie-label", t.prompt));
      var inp = el("input", "num");
      inp.type = "text";
      inp.inputMode = "numeric";
      inp.autocomplete = "off";
      inp.setAttribute("aria-label", t.prompt);
      inp.addEventListener("input", function () { unmark(row); });
      row.appendChild(inp);
      list.appendChild(row);
      fields.push({ t: t, inp: inp, row: row });
    });

    return function () {
      var score = 0, wrongs = [];
      fields.forEach(function (f) {
        var raw = String(f.inp.value).replace(/[,\s$]/g, "");
        var ok = raw !== "" && Math.abs(Number(raw) - f.t.answer) < 0.001;
        mark(f.row, ok);
        if (ok) score++; else wrongs.push({ f: f, raw: raw });
      });
      var yours = wrongs.length ? ul(wrongs.map(function (w) {
        var diag = (w.f.t.diagnostics || []).filter(function (d) { return String(d.value) === w.raw; })[0];
        return li("why-no", esc(w.f.t.prompt) + " \u2014 you entered " + esc(w.raw || "nothing") + ".",
          diag ? rich(diag.says) : "The figure is <strong>" + L.money(w.f.t.answer) + "</strong>. " + rich(w.f.t.explain || ""));
      })) : "";
      var all = ul(spec.ties.map(function (t) {
        return li("why-ok", esc(t.prompt) + " = " + L.money(t.answer) + ".", rich(t.explain || ""));
      }));
      return { score: score, total: fields.length, html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- mcq: single or multiple answer, shuffled, rationale per option ---------- */
  RENDERERS.mcq = function (body, spec, api) {
    var multi = !!spec.multi;
    var q = el("p", "ex-question");
    q.innerHTML = spec.prompt;
    body.appendChild(q);
    if (spec.promptAr) body.appendChild(arabic(spec.promptAr));
    if (spec.exhibit) body.appendChild(exhibitRef(spec.exhibit));
    if (multi) body.appendChild(el("p", "ex-hint", "More than one answer is correct. Choose all that apply."));

    var options = shuffle(spec.options);
    var wrap = el("div", "choices");
    body.appendChild(wrap);
    var name = "mcq-" + spec.id;
    options.forEach(function (o, i) {
      var lab = el("label", "choice");
      var inp = el("input");
      inp.type = multi ? "checkbox" : "radio";
      inp.name = name;
      inp.value = String(i);
      inp.addEventListener("change", function () { unmark(lab); });
      lab.appendChild(inp);
      var txt = el("span", "choice-text");
      txt.innerHTML = o.text;
      lab.appendChild(txt);
      if (o.ar) lab.appendChild(arabic(o.ar));
      lab.dataset.i = String(i);
      wrap.appendChild(lab);
    });

    return function () {
      var labs = Array.prototype.slice.call(wrap.querySelectorAll(".choice"));
      var chosen = [], correctIdx = [];
      options.forEach(function (o, i) { if (o.correct) correctIdx.push(i); });
      labs.forEach(function (lab) {
        var i = Number(lab.dataset.i);
        if (lab.querySelector("input").checked) chosen.push(i);
      });
      labs.forEach(function (lab) {
        var i = Number(lab.dataset.i);
        var picked = chosen.indexOf(i) >= 0;
        var right = !!options[i].correct;
        if (picked || right) mark(lab, picked && right);
        if (right) lab.classList.add("is-answer");
      });

      var ok = chosen.length === correctIdx.length &&
               chosen.every(function (i) { return options[i].correct; });

      var yours = chosen.length
        ? ul(chosen.map(function (i) {
            var o = options[i];
            return li(o.correct ? "why-ok" : "why-no",
              (o.correct ? "Correct \u2014 " : "Not correct \u2014 ") + stripTags(o.text),
              rich(o.why || ""));
          }))
        : ul([li("why-no", "Nothing chosen.", "Choose an option, then check again.")]);

      var correctHtml = ul(correctIdx.map(function (i) {
        return li("why-ok", stripTags(options[i].text), rich(options[i].why || ""));
      }));

      var rest = ul(options.map(function (o, i) {
        if (o.correct || chosen.indexOf(i) >= 0) return "";
        return li("why-other", stripTags(o.text), rich(o.why || ""));
      }).filter(Boolean));

      return { score: ok ? 1 : 0, total: 1, ok: ok,
               statusText: ok ? "Correct" : "Not correct \u2014 read the explanation",
               html: yourAnswerFirst(yours, ok ? "" : correctHtml, rest) };
    };
  };

  function stripTags(s) { return esc(String(s).replace(/<[^>]*>/g, "")); }

  function exhibitRef(which) {
    var p = el("p", "exhibit-ref");
    p.innerHTML = "Use <a href=\"" + (which.href || "s1-6.html#f01-10") + "\">" +
      esc(which.label || "the trial balance, Figure F01-10") + "</a>.";
    return p;
  }

  /* ---------- selectlist: dropdown answers ---------- */
  RENDERERS.selectlist = function (body, spec, api) {
    var q = el("p", "ex-question");
    q.innerHTML = spec.prompt;
    body.appendChild(q);
    if (spec.exhibit) body.appendChild(exhibitRef(spec.exhibit));

    var row = el("div", "select-row");
    var sel = el("select", "select-answer");
    sel.setAttribute("aria-label", spec.ariaLabel || "Choose the answer");
    var blank = el("option", null, "\u2014 select \u2014");
    blank.value = "";
    sel.appendChild(blank);
    shuffle(spec.options).forEach(function (o) {
      var op = el("option", null, o.text);
      op.value = o.text;
      sel.appendChild(op);
    });
    sel.addEventListener("change", function () { unmark(row); });
    row.appendChild(sel);
    body.appendChild(row);

    return function () {
      var got = sel.value;
      var picked = spec.options.filter(function (o) { return o.text === got; })[0];
      var right = spec.options.filter(function (o) { return o.correct; })[0];
      var ok = !!picked && !!picked.correct;
      mark(row, ok);
      var yours = ul([ li(ok ? "why-ok" : "why-no",
        got ? esc(got) : "Nothing selected.",
        picked ? rich(picked.why || "") : "Choose an option, then check again.") ]);
      var rest = ul(spec.options.filter(function (o) { return o !== picked && !o.correct; })
        .map(function (o) { return li("why-other", esc(o.text), rich(o.why || "")); }));
      return { score: ok ? 1 : 0, total: 1, ok: ok,
               statusText: ok ? "Correct" : "Not correct",
               html: yourAnswerFirst(yours, ok ? "" : ul([li("why-ok", esc(right.text), rich(right.why || ""))]), rest) };
    };
  };

  /* ---------- blank: fill in the blank from a list ---------- */
  RENDERERS.blank = function (body, spec, api) {
    body.appendChild(el("p", "ex-hint", "Choose the word or phrase for the blank."));
    var sentence = el("p", "blank-sentence");
    body.appendChild(sentence);

    var sel = el("select", "select-answer");
    sel.setAttribute("aria-label", "Choose the word for the blank");
    var blank = el("option", null, "\u2014 select \u2014");
    blank.value = "";
    sel.appendChild(blank);
    shuffle(spec.options).forEach(function (o) {
      var op = el("option", null, o.text);
      op.value = o.text;
      sel.appendChild(op);
    });

    spec.parts.forEach(function (part, i) {
      sentence.appendChild(doc.createTextNode(part));
      if (i === 0) sentence.appendChild(sel);
    });
    sel.addEventListener("change", function () { unmark(sentence); });

    return function () {
      var got = sel.value;
      var picked = spec.options.filter(function (o) { return o.text === got; })[0];
      var right = spec.options.filter(function (o) { return o.correct; })[0];
      var ok = !!picked && !!picked.correct;
      mark(sentence, ok);
      var yours = ul([ li(ok ? "why-ok" : "why-no", got ? esc(got) : "Nothing selected.",
        picked ? rich(picked.why || "") : "Choose an option, then check again.") ]);
      var rest = ul(spec.options.filter(function (o) { return o !== picked && !o.correct; })
        .map(function (o) { return li("why-other", esc(o.text), rich(o.why || "")); }));
      return { score: ok ? 1 : 0, total: 1, ok: ok,
               html: yourAnswerFirst(yours, ok ? "" : ul([li("why-ok", esc(right.text), rich(right.why || ""))]), rest) };
    };
  };

  /* ---------- number: numeric entry with the book's wrong-answer diagnostics ---------- */
  RENDERERS.number = function (body, spec, api) {
    var q = el("p", "ex-question");
    q.innerHTML = spec.prompt;
    body.appendChild(q);
    if (spec.promptAr) body.appendChild(arabic(spec.promptAr));
    if (spec.exhibit) body.appendChild(exhibitRef(spec.exhibit));

    body.appendChild(el("p", "ex-hint", spec.hint ||
      "Enter the amount in thousands of U.S. dollars (USD 000), without the $ sign and without commas \u2014 " +
      "for example 1250."));

    var fields = spec.fields || [{ key: "a", label: spec.label || "Answer", answer: spec.answer,
                                   unit: spec.unit, explain: spec.explanation,
                                   diagnostics: spec.diagnostics }];
    var rows = [];
    fields.forEach(function (f) {
      var row = el("div", "num-row");
      row.appendChild(el("label", "num-label", f.label));
      var inp = el("input", "num");
      inp.type = "text";
      inp.inputMode = "decimal";
      inp.autocomplete = "off";
      inp.setAttribute("aria-label", f.label);
      inp.addEventListener("input", function () { unmark(row); });
      row.appendChild(inp);
      if (f.unit || spec.unit) row.appendChild(el("span", "num-unit", f.unit || spec.unit));
      body.appendChild(row);
      rows.push({ f: f, inp: inp, row: row });
    });

    return function () {
      var score = 0, wrongs = [];
      rows.forEach(function (r) {
        var raw = String(r.inp.value).replace(/[,\s$]/g, "");
        var tol = r.f.tolerance !== undefined ? r.f.tolerance : (spec.tolerance !== undefined ? spec.tolerance : 0.001);
        var ok = raw !== "" && isFinite(Number(raw)) && Math.abs(Number(raw) - r.f.answer) <= tol;
        mark(r.row, ok);
        if (ok) score++; else wrongs.push({ r: r, raw: raw });
      });
      var yours = wrongs.length ? ul(wrongs.map(function (w) {
        var diag = (w.r.f.diagnostics || []).filter(function (d) {
          return Math.abs(Number(String(d.value).replace(/[,\s$]/g, "")) - Number(w.raw)) < 0.001;
        })[0];
        return li("why-no", esc(w.r.f.label) + " \u2014 you entered " + esc(w.raw || "nothing") + ".",
          diag ? "<em>" + rich(diag.says) + "</em>" :
            "The answer is <strong>" + (w.r.f.display || L.money(w.r.f.answer)) + "</strong>. " +
            rich(w.r.f.explain || ""));
      })) : "";
      var all = ul(rows.map(function (r) {
        return li("why-ok", esc(r.f.label) + " = " + (r.f.display || L.money(r.f.answer)) + ".",
          rich(r.f.explain || ""));
      }));
      return { score: score, total: rows.length, html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- cloze: word bank into blanks ---------- */
  RENDERERS.cloze = function (body, spec, api) {
    body.appendChild(el("p", "ex-hint", spec.hint ||
      "Drag a word into each blank, or tap a word and then tap a blank. There are more words than blanks."));
    var bank = el("div", "bank");
    body.appendChild(bank);
    var text = el("p", "cloze-text");
    body.appendChild(text);

    var ds = DragSet({ bank: bank, live: api.live });
    var words = spec.answers.map(function (a) { return a.word; }).concat(spec.extra || []);
    shuffle(words).forEach(function (w) { ds.addTile(w, w); });

    spec.parts.forEach(function (part, i) {
      var span = el("span", "cloze-part");
      span.innerHTML = part;
      text.appendChild(span);
      if (i < spec.answers.length) {
        var slot = el("span", "drop drop-inline");
        slot.setAttribute("aria-label", "Blank " + (i + 1));
        slot.appendChild(el("span", "drop-hint", "\u00a0\u00a0\u00a0\u00a0"));
        var holder = el("span", "drop-holder");
        slot.appendChild(holder);
        ds.addZone("b" + i, slot, 1, holder);
        text.appendChild(slot);
      }
    });

    return function () {
      var placed = ds.placements(), score = 0, wrongs = [];
      ds.zones.forEach(function (z, i) {
        var got = placed[z.id][0];
        var want = spec.answers[i].word;
        var ok = got === want;
        mark(z.el, ok);
        if (ok) score++; else wrongs.push({ i: i, got: got, a: spec.answers[i] });
      });
      var yours = wrongs.length ? ul(wrongs.map(function (w) {
        return li("why-no", "Blank " + (w.i + 1) + " \u2014 you placed " + esc(w.got || "nothing") + ".",
          "It should be <strong>" + esc(w.a.word) + "</strong>. " + rich(w.a.why || ""));
      })) : "";
      var all = ul(spec.answers.map(function (a, i) {
        return li("why-ok", "Blank " + (i + 1) + ": " + esc(a.word) + ".", rich(a.why || ""));
      }));
      return { score: score, total: spec.answers.length, html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- stem: the exam-wording cue reader ---------- */
  RENDERERS.stem = function (body, spec, api) {
    body.appendChild(el("p", "ex-hint",
      "For each exam stem: click the cue word that changes how you must read it, then say what it tells you to do."));
    var list = el("div", "stem-list");
    body.appendChild(list);
    var items = [];

    shuffle(spec.stems).forEach(function (st, n) {
      var card = el("div", "stem-card");
      var sent = el("p", "stem-sentence");
      var tokens = st.text.split(/(\s+)/);
      var pickedTok = null;
      tokens.forEach(function (tok) {
        if (/^\s+$/.test(tok)) { sent.appendChild(doc.createTextNode(tok)); return; }
        var bare = tok.replace(/[^A-Za-z'\u2019]/g, "");
        if (!bare) { sent.appendChild(doc.createTextNode(tok)); return; }
        var b = el("button", "token", tok);
        b.type = "button";
        b.dataset.word = bare.toLowerCase();
        b.addEventListener("click", function () {
          sent.querySelectorAll(".token").forEach(function (x) { x.classList.remove("picked"); });
          b.classList.add("picked");
          pickedTok = bare.toLowerCase();
          card.dataset.cue = pickedTok;
          unmark(card);
        });
        sent.appendChild(b);
      });
      card.appendChild(sent);

      var sel = el("select", "select-answer");
      sel.setAttribute("aria-label", "What the cue tells you to do, stem " + (n + 1));
      var blank = el("option", null, "\u2014 what does it tell you? \u2014");
      blank.value = "";
      sel.appendChild(blank);
      shuffle(spec.effects).forEach(function (e) {
        var op = el("option", null, e);
        op.value = e;
        sel.appendChild(op);
      });
      sel.addEventListener("change", function () { unmark(card); });
      card.appendChild(sel);
      list.appendChild(card);
      items.push({ st: st, card: card, sel: sel });
    });

    return function () {
      var score = 0, total = items.length * 2, wrongs = [];
      items.forEach(function (it) {
        var cueOk = (it.card.dataset.cue || "") === it.st.cue.toLowerCase();
        var effOk = it.sel.value === it.st.effect;
        if (cueOk) score++;
        if (effOk) score++;
        mark(it.card, cueOk && effOk);
        if (!cueOk || !effOk) wrongs.push({ it: it, cueOk: cueOk, effOk: effOk });
      });
      var yours = wrongs.length ? ul(wrongs.map(function (w) {
        var bits = [];
        if (!w.cueOk) bits.push("the cue word is <strong>" + esc(w.it.st.cue) + "</strong>");
        if (!w.effOk) bits.push("it tells you: <strong>" + esc(w.it.st.effect) + "</strong>");
        return li("why-no", esc(w.it.st.text), bits.join("; ") + ". " + rich(w.it.st.why || ""));
      })) : "";
      var all = ul(spec.stems.map(function (s) {
        return li("why-ok", esc(s.cue) + " \u2014 " + esc(s.text), esc(s.effect) + ". " + rich(s.why || ""));
      }));
      return { score: score, total: total, html: yourAnswerFirst(yours, "", all) };
    };
  };

  /* ---------- equation: direction of effect on each element ---------- */
  RENDERERS.equation = function (body, spec, api) {
    var sc = el("div", "scenario");
    sc.appendChild(el("strong", null, spec.scenario));
    if (spec.scenarioAr) sc.appendChild(arabic(spec.scenarioAr));
    body.appendChild(sc);
    body.appendChild(el("p", "ex-hint", "Choose the direction for each line: up, no change, or down."));

    var rowsHost = el("div", "eq-rows");
    body.appendChild(rowsHost);
    var rows = [];
    spec.lines.forEach(function (ln) {
      var row = el("div", "eq-row");
      row.appendChild(el("span", "eq-label", ln.label));
      var group = el("div", "tri");
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", ln.label);
      [["up", "\u2191 increases"], ["none", "0 no change"], ["down", "\u2193 decreases"]].forEach(function (o) {
        var b = el("button", "tri-btn tri-wide", o[1]);
        b.type = "button";
        b.dataset.v = o[0];
        b.addEventListener("click", function () {
          group.querySelectorAll(".tri-btn").forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-pressed", "false"); });
          b.classList.add("on");
          b.setAttribute("aria-pressed", "true");
          group.dataset.v = o[0];
          unmark(row);
        });
        group.appendChild(b);
      });
      row.appendChild(group);
      rowsHost.appendChild(row);
      rows.push({ ln: ln, group: group, row: row });
    });

    return function () {
      var score = 0, wrongs = [];
      rows.forEach(function (r) {
        var ok = (r.group.dataset.v || "") === r.ln.answer;
        mark(r.row, ok);
        if (ok) score++; else wrongs.push(r);
      });
      function word(d) { return d === "up" ? "increases" : d === "down" ? "decreases" : "does not change"; }
      var yours = wrongs.length ? ul(wrongs.map(function (r) {
        return li("why-no", esc(r.ln.label) + " \u2014 you said " +
          esc(r.group.dataset.v ? word(r.group.dataset.v) : "nothing") + ".",
          "It <strong>" + esc(word(r.ln.answer)) + "</strong>. " + rich(r.ln.why || ""));
      })) : "";
      var all = ul(spec.lines.map(function (ln) {
        return li("why-ok", esc(ln.label) + " " + esc(word(ln.answer)) + ".", rich(ln.why || ""));
      }));
      return { score: score, total: rows.length,
               html: yourAnswerFirst(yours, "", all) +
                 (spec.note ? "<p class=\"eq-note\">" + rich(spec.note) + "</p>" : "") };
    };
  };

  /* ---------- selfex: self-explanation, not auto-graded ---------- */
  RENDERERS.selfex = function (body, spec, api) {
    var q = el("p", "ex-question");
    q.innerHTML = spec.prompt;
    body.appendChild(q);
    body.appendChild(el("p", "ex-hint",
      "Write your reasoning in your own words first. Nothing here is auto-marked \u2014 " +
      "Check Answers shows the book's explanation and a checklist, and you judge your own answer against it."));
    var ta = el("textarea", "selfex");
    ta.rows = 4;
    ta.setAttribute("aria-label", "Your explanation");
    ta.placeholder = spec.placeholder || "Because\u2026";
    body.appendChild(ta);

    return function () {
      var written = ta.value.trim().length > 0;
      var checklist = "<ul class=\"checklist\">" + spec.checklist.map(function (c) {
        var cid = spec.id + "-ck-" + Math.random().toString(36).slice(2, 7);
        return "<li><label><input type=\"checkbox\" id=\"" + cid + "\"> " + rich(c) + "</label></li>";
      }).join("") + "</ul>";
      return { score: written ? 1 : 0, total: 1, ok: written,
               statusText: written ? "Recorded \u2014 now compare it" : "Write something first",
               html: "<div class=\"fb-block fb-yours\"><h4>Your explanation</h4><blockquote>" +
                 esc(ta.value || "(nothing written)") + "</blockquote></div>" +
                 "<div class=\"fb-block fb-correct\"><h4>What the chapter says</h4><p>" +
                 spec.model + "</p></div>" +
                 "<div class=\"fb-block fb-rest\"><h4>Did your answer cover these?</h4>" + checklist + "</div>" };
    };
  };

  /* ---------- flashcards: the term drill on terms.html ---------- */
  RENDERERS.flashcards = function (body, spec, api) {
    var pool = shuffle(spec.terms).slice(0, spec.count || spec.terms.length);
    var i = 0, right = 0, seen = 0, missed = [];

    var card = el("div", "flashcard");
    body.appendChild(card);
    var counter = el("p", "flash-counter");
    body.appendChild(counter);

    function draw() {
      card.innerHTML = "";
      counter.textContent = "Card " + (i + 1) + " of " + pool.length +
        (seen ? " \u00b7 " + right + " of " + seen + " right so far" : "");
      if (i >= pool.length) {
        card.appendChild(el("p", "flash-done", "Deck finished. " + right + " of " + seen + " right."));
        return;
      }
      var t = pool[i];
      var ask = spec.direction === "ar-en" ? "ar" : "en";
      var front = el("div", "flash-front");
      if (ask === "ar") {
        front.appendChild(arabic(t.ar));
        if (S) front.appendChild(S.button(t.ar, "ar", "Pronounce in Arabic"));
        front.appendChild(el("p", "flash-ask", "What is the English exam term?"));
      } else {
        front.appendChild(el("span", "flash-term", t.en));
        if (S) front.appendChild(S.button(t.en, "en", "Pronounce in English"));
        front.appendChild(el("p", "flash-ask", "What is the Arabic equivalent?"));
      }
      card.appendChild(front);

      var opts = [t];
      var others = shuffle(spec.terms.filter(function (x) { return x.en !== t.en; })).slice(0, 3);
      opts = shuffle(opts.concat(others));
      var wrap = el("div", "flash-options");
      opts.forEach(function (o) {
        var b = el("button", "flash-opt");
        b.type = "button";
        if (ask === "ar") b.appendChild(el("span", null, o.en));
        else b.appendChild(arabic(o.ar));
        b.addEventListener("click", function () {
          if (card.dataset.answered) return;
          card.dataset.answered = "1";
          seen++;
          var ok = o.en === t.en;
          if (ok) right++; else missed.push(t);
          mark(b, ok);
          wrap.querySelectorAll(".flash-opt").forEach(function (x) { x.disabled = true; });
          var rev = el("div", "flash-reveal");
          rev.appendChild(termLine(t));
          rev.appendChild(el("p", "flash-gloss", t.gloss));
          rev.appendChild(el("p", "flash-src", "Section " + t.sec));
          card.appendChild(rev);
          var next = el("button", "btn btn-primary", i + 1 >= pool.length ? "See the result" : "Next card");
          next.type = "button";
          next.addEventListener("click", function () { i++; delete card.dataset.answered; draw(); });
          card.appendChild(next);
          next.focus();
        });
        wrap.appendChild(b);
      });
      card.appendChild(wrap);
    }
    draw();

    return function () {
      var done = i >= pool.length;
      var html = "<div class=\"fb-block fb-yours\"><h4>This deck</h4><p>" +
        right + " of " + seen + " right" + (done ? "" : ", with " + (pool.length - i) + " cards left") +
        ".</p></div>";
      if (missed.length) {
        html += "<div class=\"fb-block fb-rest\"><h4>Terms to come back to</h4>" + ul(missed.map(function (t) {
          return li("why-no", esc(t.en) + " \u00b7 " + esc(t.ar), rich(t.gloss));
        })) + "</div>";
      }
      return { score: right, total: pool.length, ok: done && right === pool.length,
               statusText: right + " of " + seen + " right", html: html };
    };
  };

  /* ================================================================
   * Content blocks
   * ================================================================ */

  function renderTermBridge(host, spec) {
    var box = el("section", "box box-bridge");
    var head = el("div", "box-head");
    head.appendChild(el("span", "box-kind", "TERM BRIDGE"));
    head.appendChild(el("h3", null, spec.title || "Key words in this section"));
    box.appendChild(head);
    var table = el("table", "bridge-table");
    var thead = el("thead");
    thead.innerHTML = "<tr><th>English (exam term)</th><th>\u0627\u0644\u0639\u0631\u0628\u064a\u0629</th></tr>";
    table.appendChild(thead);
    var tb = el("tbody");
    spec.rows.forEach(function (t) {
      var tr = el("tr");
      var tdEn = el("td", "bridge-en");
      tdEn.appendChild(el("span", "bridge-term", t.en));
      if (S) tdEn.appendChild(S.button(t.en, "en", "Pronounce in English"));
      var tdAr = el("td", "bridge-ar");
      tdAr.appendChild(arabic(t.ar));
      if (S) tdAr.appendChild(S.button(t.ar, "ar", "Pronounce in Arabic"));
      tr.appendChild(tdEn);
      tr.appendChild(tdAr);
      if (t.gloss) tr.title = t.gloss;
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    box.appendChild(table);
    host.appendChild(box);
  }

  var BOX_KINDS = {
    know: "WHAT YOU ALREADY KNOW",
    trap: "EXAM TRAP",
    friend: "FALSE-FRIEND ALERT",
    language: "LANGUAGE FOCUS",
    ifrs: "IFRS CONTRAST",
    worked: "WORKED EXAMPLE",
    turn: "YOUR TURN",
    watch: "WATCH: NOT YET TESTABLE",
    check: "SECTION CHECK"
  };

  function renderBox(host, spec) {
    var box = el("section", "box box-" + spec.kind);
    var head = el("div", "box-head");
    head.appendChild(el("span", "box-kind", BOX_KINDS[spec.kind] || spec.kind.toUpperCase()));
    if (spec.title) head.appendChild(el("h3", null, spec.title));
    box.appendChild(head);
    if (spec.html) {
      var b = el("div", "box-body");
      b.innerHTML = spec.html;
      box.appendChild(b);
    }
    host.appendChild(box);
    return box;
  }

  function renderProse(host, spec) {
    var d = el("div", "prose");
    d.innerHTML = spec.html;
    host.appendChild(d);
  }

  function renderTable(host, spec) {
    var wrap = el("div", "table-block");
    if (spec.caption) wrap.appendChild(el("p", "table-caption", spec.caption));
    var scroll = el("div", "table-scroll");
    var t = el("table", "data-table" + (spec.className ? " " + spec.className : ""));
    t.innerHTML = "<thead><tr>" + spec.head.map(function (h) { return "<th>" + h + "</th>"; }).join("") +
      "</tr></thead><tbody>" + spec.rows.map(function (r) {
        return "<tr>" + r.map(function (c, i) {
          return "<td" + (i === 0 ? " class=\"row-head\"" : "") + ">" + c + "</td>";
        }).join("") + "</tr>";
      }).join("") + "</tbody>";
    scroll.appendChild(t);
    wrap.appendChild(scroll);
    if (spec.note) wrap.appendChild(el("p", "table-note", spec.note));
    host.appendChild(wrap);
  }

  function renderFigure(host, spec) {
    var fig = el("figure", "figure");
    if (spec.anchor) fig.id = spec.anchor;
    var holder = el("div", "figure-body");
    fig.appendChild(holder);
    var cap = el("figcaption");
    cap.innerHTML = "<strong>" + esc(spec.label) + ".</strong> " + spec.caption;
    fig.appendChild(cap);
    host.appendChild(fig);
    if (root.Figures && root.Figures.build) root.Figures.build(spec.figure, holder, spec);
  }

  function renderConcepts(host, spec) {
    var wrap = el("div", "concepts");
    spec.cards.forEach(function (c) {
      var art = el("article", "concept");
      art.appendChild(el("span", "concept-icon", c.icon || "\u25c6"));
      art.appendChild(el("h3", null, c.title));
      var p = el("p");
      p.innerHTML = c.text;
      art.appendChild(p);
      wrap.appendChild(art);
    });
    host.appendChild(wrap);
  }

  /* The chapter contents, rendered from the one TOC definition with live progress. */
  function renderContents(host, spec) {
    var wrap = el("div", "contents-grid");
    (P ? P.TOC : []).forEach(function (p, i) {
      var a = el("a", "contents-card contents-" + p.kind);
      a.href = p.file;
      a.appendChild(el("span", "contents-n", p.n));
      var tx = el("span", "contents-text");
      tx.appendChild(el("span", "contents-title", p.title));
      tx.appendChild(el("span", "contents-blurb", p.blurb));
      a.appendChild(tx);
      var st = P.pageStats(p.id);
      var badge = el("span", "contents-badge");
      if (st.complete) { badge.textContent = "✓ done"; a.classList.add("is-done"); }
      else if (st.done) badge.textContent = st.done + " of " + st.total;
      else badge.textContent = "start →";
      a.appendChild(badge);
      wrap.appendChild(a);
    });
    host.appendChild(wrap);
  }

  /* The trap counter: the traps this learner has actually failed, worst first. */
  function renderTrapCounter(host, spec) {
    var box = el("section", "box box-trap");
    var head = el("div", "box-head");
    head.appendChild(el("span", "box-kind", "YOUR TRAPS"));
    head.appendChild(el("h3", null, "The traps you have fallen into"));
    box.appendChild(head);
    var body = el("div", "box-body");
    var failed = P ? P.trapsFailed() : [];
    if (!failed.length) {
      body.appendChild(el("p", null,
        "Nothing recorded yet. As you work through the sections, any Exam Trap or False-Friend item you " +
        "get wrong is logged here by name, so you can come back to the specific confusion rather than " +
        "redoing the whole chapter."));
    } else {
      body.appendChild(el("p", null, "These are logged by name as you work. Revisit the linked section, then try the item again."));
      var list = el("ul", "trap-list");
      failed.forEach(function (t) {
        var name = spec.names[t.trap] || { label: t.trap, href: "index.html", note: "" };
        var liEl = el("li", t.fixed ? "trap-fixed" : "trap-open");
        var a = el("a", null, name.label);
        a.href = name.href;
        liEl.appendChild(a);
        liEl.appendChild(el("span", "trap-count", " · missed " + t.fails + (t.fails === 1 ? " time" : " times") +
          (t.fixed ? ", since answered correctly" : "")));
        if (name.note) liEl.appendChild(el("p", "trap-note", name.note));
        list.appendChild(liEl);
      });
      body.appendChild(list);
    }
    box.appendChild(body);
    host.appendChild(box);
  }

  function renderHeading(host, spec) {
    var h = el(spec.level || "h2", "sec-heading");
    h.innerHTML = spec.text;
    if (spec.anchor) h.id = spec.anchor;
    host.appendChild(h);
    if (spec.sub) host.appendChild(el("p", "sec-sub", spec.sub));
  }

  /* ================================================================
   * Page mount
   * ================================================================ */

  var exIndex = 0;

  function renderBlocks(host, blocks) {
    blocks.forEach(function (b) {
      /* A block whose type names a renderer IS an exercise. One key, no wrapper. */
      if (RENDERERS[b.type]) { shell(host, b, exIndex++); return; }
      switch (b.type) {
        case "prose":     renderProse(host, b); break;
        case "heading":   renderHeading(host, b); break;
        case "table":     renderTable(host, b); break;
        case "figure":    renderFigure(host, b); break;
        case "box":       renderBox(host, b); break;
        case "bridge":    renderTermBridge(host, b); break;
        case "concepts":  renderConcepts(host, b); break;
        case "contents":  renderContents(host, b); break;
        case "traps":     renderTrapCounter(host, b); break;
        case "exercise":  shell(host, b, exIndex++); break;
        case "checkgroup":
          var box = renderBox(host, { kind: "check", title: b.title || "Test yourself" });
          var inner = el("div", "check-body");
          box.appendChild(inner);
          b.items.forEach(function (it) { shell(inner, it, exIndex++); });
          if (b.note) box.appendChild(el("p", "box-note", b.note));
          break;
        case "group":
          var g = el("section", "block-group");
          if (b.title) g.appendChild(el("h2", "sec-heading", b.title));
          if (b.intro) { var p = el("p", "sec-sub"); p.innerHTML = b.intro; g.appendChild(p); }
          host.appendChild(g);
          renderBlocks(g, b.blocks);
          break;
        default:
          host.appendChild(el("p", "error", "Unknown block type: " + b.type));
      }
    });
  }

  function mount() {
    var page = root.PAGE;
    if (!page) return;
    var host = doc.getElementById("content");
    if (!host) return;
    exIndex = 0;
    registry.length = 0;
    renderBlocks(host, page.blocks || []);

    var ids = registry.map(function (r) { return r.spec.id; });
    if (P) { P.register(page.id, ids); P.lastVisit(page.id); }
    if (root.Chrome && root.Chrome.afterMount) root.Chrome.afterMount(ids.length);
  }

  root.Engine = {
    mount: mount, shell: shell, renderBlocks: renderBlocks,
    util: { esc: esc, el: el, shuffle: shuffle, arabic: arabic, termLine: termLine, mark: mark, unmark: unmark },
    get registry() { return registry; },
    get types() { return Object.keys(RENDERERS); }
  };
})(window, document);
