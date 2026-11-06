/* items3.js — the three drag shapes.
   match      Match the words to the numbered picture   (Step Forward L1, restored)
   sort       Sort into categories                      (the book's "Which column?")
   wordbank   Gap-fill from a word bank                 (the book's boxed-words task)

   All three allow a wrong placement and judge on Check Answers, because the
   book's contract is check-then-correct, not refuse-at-the-door. A drop only
   springs back when it is structurally impossible. */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;
  function S() { return root.SCENES; }

  /* Build a tray + live region and return { tray, drag } with eviction. */
  function rig(stage, api, opts) {
    var live = E("div", "sr-live"); live.setAttribute("aria-live", "polite");
    stage.appendChild(live);
    var tray = E("div", "tiles tray");
    var dg = root.Drag({
      live: live, tray: tray,
      onDrop: function (chipId, zoneId) {
        var z = stage.querySelector('[data-zone-id="' + zoneId + '"]');
        if (!z) return "That target is gone.";
        var cap = parseInt(z.dataset.cap || "0", 10);
        if (cap > 0) {
          var held = z.querySelectorAll(".chip");
          if (held.length >= cap) {                 /* swap, do not refuse */
            for (var i = 0; i < held.length; i++) {
              held[i].classList.remove("placed", "ok", "no");
              tray.appendChild(held[i]);
            }
          }
        }
        return true;
      }
    });
    dg.trayDrop(tray);
    return { tray: tray, drag: dg, live: live };
  }

  function chipsInto(tray, items, api, dg) {
    api.shuffle(items.slice()).forEach(function (it) {
      tray.appendChild(dg.chip({ id: it.id, label: it.label }));
    });
  }

  function mark(el, ok) { el.classList.remove("ok", "no"); el.classList.add(ok ? "ok" : "no"); }

  /* ------------------------------------------------------------- match --- */
  /* spec.scene : { w,h,alt,parts } drawn by SCENES, with spec.pins
       pins : [{ id, x, y, w? }]   x,y are PERCENTAGES of the picture box
       pairs: [{ pin, word, why }]
     With no scene, the same data renders as labelled rows, which is the
     book's other matching form (word to meaning). */
  D.register("match", function (stage, spec, api) {
    var r = rig(stage, api), zones = {};

    if (spec.scene) {
      var frame = E("div", "scene");
      frame.innerHTML = S().draw(spec.scene);
      /* Leader lines first, under the labels: a label that sits on top of the
         thing it names hides the thing it names. */
      var lead = ['<svg class="leads" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">'];
      (spec.pins || []).forEach(function (pn) {
        if (pn.tx === undefined) return;
        lead.push('<line x1="' + pn.x + '" y1="' + pn.y + '" x2="' + pn.tx + '" y2="' + pn.ty + '"/>');
        lead.push('<line class="lead-dot" x1="' + pn.tx + '" y1="' + pn.ty + '" x2="' + pn.tx + '" y2="' + pn.ty + '"/>');
      });
      lead.push("</svg>");
      var ov = doc.createElement("div");
      ov.innerHTML = lead.join("");
      frame.appendChild(ov.firstChild);

      var layer = E("div", "pins");
      (spec.pins || []).forEach(function (pn, i) {
        var pin = E("div", "pin");
        pin.style.left = pn.x + "%";
        pin.style.top = pn.y + "%";
        if (pn.w) pin.style.width = pn.w + "px";
        pin.appendChild(E("span", "pin-n", String(i + 1)));
        var z = r.drag.zone({ id: pn.id, label: "position " + (i + 1) });
        z.dataset.cap = "1";
        z.classList.add("pin-z");
        pin.appendChild(z);
        layer.appendChild(pin);
        zones[pn.id] = z;
      });
      frame.appendChild(layer);
      stage.appendChild(frame);
    } else {
      var rows = E("div", "mrows");
      api.shuffle((spec.pairs || []).slice()).forEach(function (p) {
        var row = E("div", "mrow");
        row.appendChild(E("div", "mdef", p.label || p.clue));
        var z = r.drag.zone({ id: p.pin || p.word, label: p.label || p.clue });
        z.dataset.cap = "1";
        row.appendChild(z);
        rows.appendChild(row);
        zones[p.pin || p.word] = z;
      });
      stage.appendChild(rows);
    }

    stage.appendChild(E("p", "tray-label", "Drag each word into place. Click a word, then click its target, or use Tab and Enter."));
    stage.appendChild(r.tray);
    chipsInto(r.tray, (spec.pairs || []).map(function (p) {
      return { id: p.word, label: p.word };
    }), api, r.drag);

    return function () {
      var place = r.drag.placement(), right = 0, miss = [];
      (spec.pairs || []).forEach(function (p, i) {
        var want = p.pin || p.word, got = place[p.word];
        var ok = got === want;
        mark(r.drag.chipEl(p.word), ok);
        if (ok) right++;
        else miss.push("<b>" + esc(p.word) + "</b> → " +
          (spec.scene ? "position " + (indexOfPin(want) + 1) : esc(p.label || p.clue)) +
          (p.why ? " — " + p.why : ""));
      });
      function indexOfPin(id) {
        for (var k = 0; k < (spec.pins || []).length; k++) if (spec.pins[k].id === id) return k;
        return -1;
      }
      return {
        score: right, total: (spec.pairs || []).length,
        html: miss.length ? "<p>Still to place correctly:</p>" + api.fbList(miss)
                          : "<p>Every word in the right place.</p>"
      };
    };
  });

  /* -------------------------------------------------------------- sort --- */
  /* spec.bins : [{ id, label, hint }]   spec.items : [{ text, bin, why }] */
  D.register("sort", function (stage, spec, api) {
    var r = rig(stage, api);
    var bins = E("div", "bins c" + Math.min(3, (spec.bins || []).length));
    (spec.bins || []).forEach(function (b) {
      var col = E("div", "bin");
      col.appendChild(E("p", "zone-label", b.label));
      if (b.hint) col.appendChild(E("p", "bin-hint", b.hint));
      var z = r.drag.zone({ id: b.id, label: b.label });
      col.appendChild(z);
      bins.appendChild(col);
    });
    stage.appendChild(bins);
    stage.appendChild(E("p", "tray-label", "Drag each one into a column. Click a card, then click a column, or use Tab and Enter."));
    stage.appendChild(r.tray);
    chipsInto(r.tray, (spec.items || []).map(function (it) {
      return { id: it.text, label: it.text };
    }), api, r.drag);

    return function () {
      var place = r.drag.placement(), right = 0, miss = [];
      (spec.items || []).forEach(function (it) {
        var ok = place[it.text] === it.bin;
        mark(r.drag.chipEl(it.text), ok);
        if (ok) right++;
        else {
          var lab = "";
          (spec.bins || []).forEach(function (b) { if (b.id === it.bin) lab = b.label; });
          miss.push("<b>" + esc(it.text) + "</b> belongs in <b>" + esc(lab) + "</b>" +
            (it.why ? " — " + it.why : ""));
        }
      });
      return {
        score: right, total: (spec.items || []).length,
        html: miss.length ? "<p>These are in the wrong column:</p>" + api.fbList(miss)
                          : "<p>Every card sorted correctly.</p>"
      };
    };
  });

  /* ---------------------------------------------------------- wordbank --- */
  /* spec.items : [{ text:"... ___ ...", answer, why }]   spec.extra : [words] */
  D.register("wordbank", function (stage, spec, api) {
    var r = rig(stage, api);
    stage.appendChild(E("p", "tray-label", "Word bank — drag a word into each gap. Extra words are not used."));
    stage.appendChild(r.tray);
    var list = E("div", "gaps");
    (spec.items || []).forEach(function (it, i) {
      var p = E("p", "item gapline");
      p.appendChild(E("span", "n", (i + 1) + "."));
      var parts = String(it.text).split("___");
      p.appendChild(doc.createTextNode(parts[0]));
      var z = r.drag.zone({ id: "g" + i, label: "gap " + (i + 1) });
      z.dataset.cap = "1";
      z.classList.add("gap-z");
      p.appendChild(z);
      p.appendChild(doc.createTextNode(parts[1] || ""));
      list.appendChild(p);
    });
    stage.appendChild(list);
    var words = (spec.items || []).map(function (it) { return it.answer; })
      .concat(spec.extra || []);
    chipsInto(r.tray, words.map(function (w) { return { id: w, label: w }; }), api, r.drag);

    return function () {
      var place = r.drag.placement(), right = 0, miss = [];
      (spec.items || []).forEach(function (it, i) {
        var ok = place[it.answer] === ("g" + i);
        mark(r.drag.chipEl(it.answer), ok);
        if (ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(it.answer) +
          (it.why ? " — " + it.why : ""));
      });
      (spec.extra || []).forEach(function (w) {
        var el = r.drag.chipEl(w);
        if (place[w]) mark(el, false);
      });
      return {
        score: right, total: (spec.items || []).length,
        html: miss.length ? "<p>Gaps not yet right:</p>" + api.fbList(miss)
                          : "<p>Every gap filled with the right word.</p>"
      };
    };
  });
})(window, document);
