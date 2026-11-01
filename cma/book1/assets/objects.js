/* objects.js (1 of 2) — the reusable interactive objects.
 *
 * THE STATEMENT SHEET is the centrepiece. It renders a complete financial
 * statement: every line of the source figure, in the book's wording and order,
 * with its amount. A line is a drop target; chips carry their account AND their
 * amount; subtotals count up as lines fill. A "net of" line resolves only when
 * BOTH the asset and its contra are on it, which makes the netting mechanical
 * rather than something to remember.
 */
(function (root, doc) {
  "use strict";
  var D = root.Deck, L = root.LEDGER;
  var E = D.util.E, esc = D.util.esc, ar = D.util.ar, shuffle = D.util.shuffle,
      Drag = D.util.Drag, fbList = D.util.fbList, yoursFirst = D.util.yoursFirst;

  function money(n) { return L.money(n); }
  function signedCell(n) { return L.signed(n); }

  /* ============================================================
   * STATEMENT SHEET
   * ============================================================ */
  D.register("statement", function (stage, spec, api) {
    var sheet = spec.sheet;
    /* A complete statement is legitimately taller than one screen. The tray of
       chips therefore sticks to the top while the sheet scrolls under it, so the
       learner never loses sight of what is left to place. */
    stage.classList.add("statement-stage");
    var tray = E("div", "tray");
    stage.appendChild(tray);

    var box = E("div", "sheet");
    var head = E("div", "sheet-head");
    head.appendChild(E("h3", null, sheet.title));
    head.appendChild(E("span", "sheet-unit", sheet.unit || L.unit));
    box.appendChild(head);
    var body = E("div", "sheet-body");
    box.appendChild(body);
    var seal = E("div", "sheet-seal");
    seal.style.display = "none";
    box.appendChild(seal);
    stage.appendChild(box);

    var lineNodes = {}, subNodes = [];
    var dnd = Drag({ tray: tray, live: api.live, change: update });

    sheet.lines.forEach(function (ln) {
      if (ln.t === "side") { body.appendChild(E("div", "row-side", ln.label)); return; }
      var row = E("div", "row" + (ln.t === "sub" ? " row-sub" : "") + (ln.t === "total" ? " row-total" : ""));
      if (ln.t === "sub" || ln.t === "total") {
        row.appendChild(E("span", "row-label", ln.label));
        var amt = E("span", "row-amt amt-wait", "—");
        row.appendChild(amt);
        subNodes.push({ ln: ln, amt: amt });
      } else {
        /* one statement line = one row: [caption] [drop zone] [amount] */
        row.classList.add("row-live");
        var cap = E("span", "row-line-name", ln.label);
        row.appendChild(cap);
        var z = E("span", "zone");
        z.setAttribute("aria-label", "Place the account for: " + ln.label);
        var host = E("span", "drop-host");
        z.appendChild(host);
        row.appendChild(z);
        var amt2 = E("span", "row-amt amt-wait", "—");
        row.appendChild(amt2);
        dnd.zone({ id: ln.slot, el: z, host: host, cap: 9, label: ln.label,
                   ghost: ln.ghost || (ln.t === "net" ? "needs the account and its contra account"
                                                      : "drop the account here") });
        lineNodes[ln.slot] = { ln: ln, amt: amt2, zone: z, row: row };
      }
      body.appendChild(row);
    });

    var all = spec.chips.concat(spec.distractors || []);
    shuffle(all).forEach(function (c) {
      dnd.chip({ id: c.id, label: c.id, amount: c.amount, negate: !!c.neg });
    });

    function slotValue(slot, state) {
      var v = 0;
      (state[slot] || []).forEach(function (id) {
        var c = chipOf(id);
        if (c) v += c.neg ? -Math.abs(c.amount) : c.amount;
      });
      return v;
    }
    function chipOf(id) {
      for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
      return null;
    }
    function expectValue(slot) {
      var ln = lineNodes[slot].ln, v = 0;
      (ln.expect || []).forEach(function (id) {
        var c = chipOf(id);
        if (c) v += c.neg ? -Math.abs(c.amount) : c.amount;
      });
      return v;
    }
    function sameSet(a, b) {
      if (a.length !== b.length) return false;
      var s = a.slice().sort().join("|"), t = b.slice().sort().join("|");
      return s === t;
    }

    function update(state) {
      state = state || dnd.state();
      var allRight = true;
      Object.keys(lineNodes).forEach(function (slot) {
        var n = lineNodes[slot], got = state[slot] || [], want = n.ln.expect || [];
        var val = slotValue(slot, state);
        var flag = n.row.querySelector(".gross-flag");
        if (flag) flag.remove();
        if (!got.length) {
          n.amt.textContent = "—";
          n.amt.className = "row-amt amt-wait";
          allRight = false;
          return;
        }
        n.amt.textContent = val < 0 ? "(" + money(Math.abs(val)) + ")" : money(val);
        var right = sameSet(got, want);
        n.amt.className = "row-amt " + (right ? "amt-ok" : "amt-no");
        if (!right) {
          allRight = false;
          /* the teaching moment: a net line holding only its gross account */
          var subset = got.every(function (g) { return want.indexOf(g) >= 0; });
          if (n.ln.t === "net" && subset && got.length < want.length) {
            var f = E("span", "gross-flag", "gross");
            n.row.querySelector(".row-line-name").appendChild(f);
          }
        }
      });
      subNodes.forEach(function (s) {
        var got = 0, want = 0, any = false;
        s.ln.of.forEach(function (slot) {
          got += slotValue(slot, state);
          want += expectValue(slot);
          if ((state[slot] || []).length) any = true;
        });
        s.amt.textContent = any ? (got < 0 ? "(" + money(Math.abs(got)) + ")" : money(got)) : "—";
        s.amt.className = "row-amt " + (!any ? "amt-wait" : (Math.abs(got - want) < 0.001 ? "amt-ok" : "amt-no"));
        if (any && Math.abs(got - want) >= 0.001) allRight = false;
      });
      box.classList.toggle("sealed", allRight);
      seal.style.display = allRight ? "" : "none";
      seal.textContent = spec.sealText || "Every line and every total agrees with the figure in the book.";
      return allRight;
    }
    update();

    return function () {
      var state = dnd.state(), right = 0, total = 0, yours = [], traps = [];
      Object.keys(lineNodes).forEach(function (slot) {
        total++;
        var n = lineNodes[slot], got = state[slot] || [], want = n.ln.expect || [];
        var ok = sameSet(got, want);
        dnd.mark(slot, ok);
        if (ok) { right++; return; }
        var missing = want.filter(function (w) { return got.indexOf(w) < 0; });
        var extra = got.filter(function (g) { return want.indexOf(g) < 0; });
        var msg = "<b>" + esc(n.ln.label) + "</b> ";
        if (!got.length) msg += "is empty. It takes " + want.map(esc).join(" and ") + ".";
        else if (missing.length && !extra.length)
          msg += "still needs " + missing.map(esc).join(" and ") + ". " + esc(n.ln.why || "");
        else msg += "should hold " + want.map(esc).join(" and ") + ", not " + got.map(esc).join(" and ") + ".";
        yours.push({ k: "n", html: msg });
        if (n.ln.trap) traps.push(n.ln.trap);
      });
      (spec.distractors || []).forEach(function (d) {
        Object.keys(state).forEach(function (slot) {
          if ((state[slot] || []).indexOf(d.id) >= 0) {
            yours.push({ k: "n", html: "<b>" + esc(d.id) + "</b> does not belong on this statement. " + esc(d.why || "") });
          }
        });
      });
      var done = update(state);
      var rightList = sheet.lines.filter(function (l) { return l.expect; }).map(function (l) {
        return { k: "y", html: "<b>" + esc(l.label) + "</b> " + esc(l.why || "") };
      });
      return { score: right, total: total, ok: done, traps: traps,
               verdict: done ? "The statement is complete and it ties." : right + " of " + total + " lines right",
               html: yoursFirst(yours, done ? [] : rightList) };
    };
  });

  /* ============================================================
   * SORT — one renderer, many boards. Chips to labelled targets.
   * board: trays | lanes | podium | pipes | grid2 | stations | org | shelves
   * ============================================================ */
  D.register("sort", function (stage, spec, api) {
    var tray = E("div", "tray");
    stage.appendChild(tray);
    var board = E("div", "board board-" + (spec.board || "trays"));
    if (spec.board === "podium") board.className = "podium";
    if (spec.board === "grid2") board.className = "board board-grid2";
    stage.appendChild(board);

    var zoneEls = {}, reveals = {};
    /* when a target is meant to NAME itself once the right item lands (the 2x2
       timing grid derives the four adjustment names this way) */
    function onChange(state) {
      if (!spec.revealOnCorrect) return;
      (spec.targets || []).forEach(function (t) {
        if (!t.reveal) return;
        var want = spec.items.filter(function (i) { return i.to === t.id; }).map(function (i) { return i.name; });
        var got = state[t.id] || [];
        var ok = want.length && want.every(function (w) { return got.indexOf(w) >= 0; });
        if (ok && !reveals[t.id]) {
          var n = E("span", "g2-name", t.reveal.name);
          if (t.reveal.kind) n.appendChild(E("span", "g2-kind", t.reveal.kind));
          zoneEls[t.id].parentNode.appendChild(n);
          reveals[t.id] = n;
        } else if (!ok && reveals[t.id]) {
          reveals[t.id].remove();
          delete reveals[t.id];
        }
      });
    }
    var dnd = Drag({ tray: tray, live: api.live, guard: spec.guard ? makeGuard(spec) : null,
                     change: onChange });

    function makeGuard(sp) {
      return function (z, chip) {
        var rule = (sp.refuse || []).filter(function (r) { return r.zone === z.id && r.chip === chip.id; })[0];
        return rule ? rule.why : null;
      };
    }

    function target(t, host) {
      var slot = E("div", "slot");
      var h = E("div", "slot-h", t.label);
      if (t.cap) h.appendChild(E("span", "slot-cap", "×" + t.cap));
      slot.appendChild(h);
      if (t.sub) slot.appendChild(E("span", "slot-s", t.sub));
      var z = E("div", "zone");
      z.setAttribute("aria-label", "Drop into " + t.label);
      var hostEl = E("span", "drop-host");
      z.appendChild(hostEl);
      slot.appendChild(z);
      dnd.zone({ id: t.id, el: z, host: hostEl, cap: 99, label: t.label,
                 ghost: t.ghost || "drop here" });
      zoneEls[t.id] = z;
      (host || board).appendChild(slot);
      return slot;
    }

    if (spec.board === "podium") {
      /* two tall steps, four short, one aside — the shape is the lesson */
      var top = E("div", "tier-top");
      top.appendChild(E("div", "tier-label", spec.tiers[0]));
      var topIn = E("div", "board board-lanes");
      top.appendChild(topIn);
      board.appendChild(top);
      spec.targets.filter(function (t) { return t.tier === 0; }).forEach(function (t) { target(t, topIn); });
      var low = E("div", "tier-low");
      low.style.gridColumn = "span 2";
      low.appendChild(E("div", "tier-label", spec.tiers[1]));
      var lowIn = E("div", "board board-lanes");
      low.appendChild(lowIn);
      board.appendChild(low);
      spec.targets.filter(function (t) { return t.tier === 1; }).forEach(function (t) { target(t, lowIn); });
      var side = E("div", "tier-side");
      side.appendChild(E("div", "tier-label", spec.tiers[2]));
      board.appendChild(side);
      spec.targets.filter(function (t) { return t.tier === 2; }).forEach(function (t) { target(t, side); });
    } else if (spec.board === "pipes") {
      spec.targets.forEach(function (t) {
        var p = E("div", "pipe");
        board.appendChild(p);
        target(t, p);
      });
      var src = E("div", "pipe-src", spec.source || "a cost arrives");
      stage.insertBefore(src, board);
    } else if (spec.board === "grid2") {
      board.appendChild(E("div", "g2-corner", spec.corner || ""));
      board.appendChild(E("div", "g2-col", spec.cols[0]));
      board.appendChild(E("div", "g2-col", spec.cols[1]));
      spec.rows.forEach(function (rowLabel, ri) {
        board.appendChild(E("div", "g2-row", rowLabel));
        spec.targets.filter(function (t) { return t.row === ri; })
          .sort(function (a, b) { return a.col - b.col; })
          .forEach(function (t) {
            var cell = E("div", "g2-cell");
            board.appendChild(cell);
            target(t, cell);
          });
      });
    } else if (spec.board === "org") {
      (spec.groups || []).forEach(function (g) {
        var col = E("div", "slot");
        col.appendChild(E("div", "slot-h", g.label));
        if (g.sub) col.appendChild(E("span", "slot-s", g.sub));
        board.appendChild(col);
        spec.targets.filter(function (t) { return t.group === g.id; }).forEach(function (t) {
          var row = E("div");
          row.style.marginBottom = "10px";
          row.appendChild(E("div", "slot-h", t.label));
          if (t.sub) row.appendChild(E("span", "slot-s", t.sub));
          var z = E("div", "zone");
          z.setAttribute("aria-label", "Which body: " + t.label);
          var hostEl = E("span", "drop-host");
          z.appendChild(hostEl);
          row.appendChild(z);
          dnd.zone({ id: t.id, el: z, host: hostEl, cap: 1, label: t.label, ghost: "drop the body here" });
          zoneEls[t.id] = z;
          col.appendChild(row);
        });
      });
    } else {
      spec.targets.forEach(function (t) { target(t); });
    }

    var pool = spec.items.map(function (i) { return { id: i.name, label: i.name, ar: i.ar, amount: i.amount }; })
      .concat((spec.distractors || []).map(function (d) {
        return { id: d.name, label: d.name, ar: d.ar, amount: d.amount };
      }));
    shuffle(pool).forEach(function (c) { dnd.chip(c); });

    function labelOf(id) {
      var t = (spec.targets || []).filter(function (x) { return x.id === id; })[0];
      return t ? t.label : id;
    }

    return function () {
      var state = dnd.state(), right = 0, yours = [], traps = [];
      dnd.clearMarks();
      var byZone = {};
      Object.keys(state).forEach(function (z) {
        (state[z] || []).forEach(function (id) { byZone[id] = z; });
      });
      spec.items.forEach(function (it) {
        var where = byZone[it.name];
        if (where === it.to) right++;
        else {
          yours.push({ k: "n", html: "<b>" + esc(it.name) + "</b> → " +
            (where ? esc(labelOf(where)) : "not placed") + ". It belongs in <b>" + esc(labelOf(it.to)) +
            "</b>. " + esc(it.why || "") });
          if (it.trap) traps.push(it.trap);
        }
      });
      (spec.distractors || []).forEach(function (d) {
        if (byZone[d.name]) {
          yours.push({ k: "n", html: "<b>" + esc(d.name) + "</b> belongs nowhere here. " + esc(d.why || "") });
        }
      });
      Object.keys(zoneEls).forEach(function (zid) {
        var got = state[zid] || [];
        if (!got.length) return;
        var want = spec.items.filter(function (i) { return i.to === zid; }).map(function (i) { return i.name; });
        dnd.mark(zid, got.length === want.length && got.every(function (g) { return want.indexOf(g) >= 0; }));
      });
      var stray = (spec.distractors || []).some(function (d) { return byZone[d.name]; });
      var ok = right === spec.items.length && !stray;
      return { score: right, total: spec.items.length, ok: ok, traps: traps,
               html: yoursFirst(yours, ok ? spec.items.map(function (i) {
                 return { k: "y", html: "<b>" + esc(i.name) + "</b> → " + esc(labelOf(i.to)) + ". " + esc(i.why || "") };
               }) : []) };
    };
  });

  /* ============================================================
   * CHECK — the book's multiple-choice items, verbatim
   * ============================================================ */
  D.register("check", function (stage, spec, api) {
    if (spec.exhibit) {
      var ex = E("p", "note");
      ex.innerHTML = spec.exhibit;
      stage.appendChild(ex);
    }
    var opts = shuffle(spec.options);
    var wrap = E("div", "choices");
    stage.appendChild(wrap);
    var name = "c-" + spec.id;
    opts.forEach(function (o, i) {
      var lab = E("label", "choice");
      var inp = E("input");
      inp.type = "radio";
      inp.name = name;
      inp.value = String(i);
      lab.appendChild(inp);
      var t = E("span");
      t.innerHTML = o.text;
      lab.appendChild(t);
      lab.dataset.i = String(i);
      wrap.appendChild(lab);
    });
    return function () {
      var pickIdx = -1;
      Array.prototype.slice.call(wrap.children).forEach(function (lab) {
        if (lab.querySelector("input").checked) pickIdx = Number(lab.dataset.i);
      });
      Array.prototype.slice.call(wrap.children).forEach(function (lab) {
        var i = Number(lab.dataset.i);
        lab.classList.remove("ok", "no");
        var mk = lab.querySelector(".mk");
        if (mk) mk.remove();
        if (i === pickIdx || opts[i].correct) {
          var good = !!opts[i].correct;
          lab.classList.add(good ? "ok" : "no");
          lab.appendChild(E("span", "mk", good ? "✓" : "✗"));
        }
      });
      var ok = pickIdx >= 0 && !!opts[pickIdx].correct;
      var yours = pickIdx < 0
        ? [{ k: "n", html: "Nothing chosen yet." }]
        : [{ k: ok ? "y" : "n", html: "<b>" + esc(opts[pickIdx].text.replace(/<[^>]*>/g, "")) + "</b> " + opts[pickIdx].why }];
      var rest = opts.map(function (o, i) {
        if (i === pickIdx) return null;
        return { k: o.correct ? "y" : "o", html: "<b>" + esc(o.text.replace(/<[^>]*>/g, "")) + "</b> " + o.why };
      }).filter(Boolean);
      return { score: ok ? 1 : 0, total: 1, ok: ok,
               verdict: ok ? "Right" : "Not right — read why",
               html: yoursFirst(yours, rest) };
    };
  });

  /* ============================================================
   * NUMBER — numeric entry with the book's own wrong-answer diagnostics
   * ============================================================ */
  D.register("number", function (stage, spec, api) {
    if (spec.exhibit) {
      var ex = E("p", "note");
      ex.innerHTML = spec.exhibit;
      stage.appendChild(ex);
    }
    var box = E("div", "nums");
    stage.appendChild(box);
    var rows = [];
    spec.fields.forEach(function (f) {
      var r = E("div", "numrow");
      r.appendChild(E("span", "numlabel", f.label));
      var i = E("input", "num");
      i.type = "text";
      i.inputMode = "decimal";
      i.autocomplete = "off";
      i.setAttribute("aria-label", f.label);
      i.addEventListener("input", function () { r.classList.remove("ok", "no"); });
      r.appendChild(i);
      r.appendChild(E("span", "numunit", f.unit || spec.unit || L.unit));
      box.appendChild(r);
      rows.push({ f: f, i: i, r: r });
    });
    if (spec.hint) stage.appendChild(E("p", "note", spec.hint));
    return function () {
      var right = 0, yours = [];
      rows.forEach(function (x) {
        var raw = String(x.i.value).replace(/[,\s$]/g, "");
        var tol = x.f.tol !== undefined ? x.f.tol : 0.001;
        var ok = raw !== "" && isFinite(Number(raw)) && Math.abs(Number(raw) - x.f.answer) <= tol;
        x.r.classList.remove("ok", "no");
        x.r.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else {
          var d = (x.f.diag || []).filter(function (g) {
            return Math.abs(Number(String(g.v).replace(/[,\s$]/g, "")) - Number(raw)) < 0.001;
          })[0];
          yours.push({ k: "n", html: "<b>" + esc(x.f.label) + "</b> — you entered " +
            esc(raw || "nothing") + ". " + (d ? "<em>" + esc(d.says) + "</em>"
              : "The answer is <b>" + money(x.f.answer) + "</b>. " + esc(x.f.why || "")) });
        }
      });
      return { score: right, total: rows.length, ok: right === rows.length,
               html: yoursFirst(yours, right === rows.length ? rows.map(function (x) {
                 return { k: "y", html: "<b>" + esc(x.f.label) + " = " + money(x.f.answer) + "</b> " + esc(x.f.why || "") };
               }) : []) };
    };
  });

  /* ============================================================
   * LOCKS — the tie lines, as three locks that must shut
   * ============================================================ */
  D.register("locks", function (stage, spec, api) {
    var box = E("div", "locks");
    stage.appendChild(box);
    var rows = [];
    spec.ties.forEach(function (t) {
      var r = E("div", "lock");
      r.appendChild(E("span", "ic", "🔓"));
      r.appendChild(E("span", "lk", t.label));
      var i = E("input", "num");
      i.type = "text";
      i.inputMode = "numeric";
      i.autocomplete = "off";
      i.setAttribute("aria-label", t.label);
      i.addEventListener("input", function () {
        var v = String(i.value).replace(/[,\s$]/g, "");
        var ok = v !== "" && Math.abs(Number(v) - t.answer) < 0.001;
        r.classList.toggle("shut", ok);
        r.querySelector(".ic").textContent = ok ? "🔒" : "🔓";
      });
      r.appendChild(i);
      box.appendChild(r);
      rows.push({ t: t, i: i, r: r });
    });
    return function () {
      var right = 0, yours = [];
      rows.forEach(function (x) {
        var v = String(x.i.value).replace(/[,\s$]/g, "");
        var ok = v !== "" && Math.abs(Number(v) - x.t.answer) < 0.001;
        x.r.classList.toggle("shut", ok);
        if (ok) right++;
        else yours.push({ k: "n", html: "<b>" + esc(x.t.label) + "</b> is " + money(x.t.answer) +
          ". " + esc(x.t.why || "") });
      });
      return { score: right, total: rows.length, ok: right === rows.length,
               verdict: right === rows.length ? "All three ties shut." : right + " of " + rows.length + " shut",
               html: yoursFirst(yours, right === rows.length ? rows.map(function (x) {
                 return { k: "y", html: "<b>" + esc(x.t.label) + " = " + money(x.t.answer) + "</b> " + esc(x.t.why || "") };
               }) : []) };
    };
  });

  /* ============================================================
   * GAUGES — read the result (working capital, current ratio, note vs equity)
   * ============================================================ */
  D.register("gauges", function (stage, spec, api) {
    var g = E("div", "gauges");
    spec.gauges.forEach(function (x) {
      var c = E("div", "gauge");
      c.appendChild(E("div", "gauge-v", x.value));
      c.appendChild(E("div", "gauge-k", x.key));
      c.appendChild(E("div", "gauge-n", x.note));
      g.appendChild(c);
    });
    stage.appendChild(g);
    if (spec.bars) {
      var vs = E("div", "vs");
      var max = Math.max.apply(null, spec.bars.map(function (b) { return b.value; }));
      spec.bars.forEach(function (b) {
        var r = E("div", "vs-row");
        r.appendChild(E("span", null, b.label));
        var tr = E("div", "vs-track");
        var f = E("div", "vs-fill", money(b.value));
        f.style.width = (b.value / max * 100) + "%";
        f.style.background = b.colour || "var(--accent)";
        tr.appendChild(f);
        r.appendChild(tr);
        vs.appendChild(r);
      });
      stage.appendChild(vs);
    }
    var q = D.util.E("div", "choices");
    stage.appendChild(q);
    var opts = shuffle(spec.options);
    opts.forEach(function (o, i) {
      var lab = E("label", "choice");
      var inp = E("input");
      inp.type = "radio";
      inp.name = "g-" + spec.id;
      inp.value = String(i);
      lab.appendChild(inp);
      lab.appendChild(E("span", null, o.text));
      lab.dataset.i = String(i);
      q.appendChild(lab);
    });
    return function () {
      var pick = -1;
      Array.prototype.slice.call(q.children).forEach(function (l) {
        if (l.querySelector("input").checked) pick = Number(l.dataset.i);
        l.classList.remove("ok", "no");
      });
      Array.prototype.slice.call(q.children).forEach(function (l) {
        var i = Number(l.dataset.i);
        if (i === pick || opts[i].correct) l.classList.add(opts[i].correct ? "ok" : "no");
      });
      var ok = pick >= 0 && opts[pick].correct;
      return { score: ok ? 1 : 0, total: 1, ok: ok,
               html: yoursFirst(pick < 0 ? [{ k: "n", html: "Nothing chosen." }]
                 : [{ k: ok ? "y" : "n", html: "<b>" + esc(opts[pick].text) + "</b> " + opts[pick].why }],
                 opts.map(function (o, i) {
                   return i === pick ? null : { k: o.correct ? "y" : "o", html: "<b>" + esc(o.text) + "</b> " + o.why };
                 }).filter(Boolean)) };
    };
  });

  /* ============================================================
   * ORDER — sequence with a visible dependency
   * ============================================================ */
  D.register("order", function (stage, spec, api) {
    var list = E("div", "board board-lanes");
    stage.appendChild(list);
    var items = shuffle(spec.items);
    if (items.every(function (x, i) { return x.pos === i + 1; }) && items.length > 2) items.push(items.shift());

    function draw() {
      list.innerHTML = "";
      items.forEach(function (it, i) {
        var card = E("div", "slot");
        card.draggable = true;
        card.dataset.pos = it.pos;
        var h = E("div", "slot-h", (i + 1) + ". " + it.text);
        card.appendChild(h);
        if (it.needs) card.appendChild(E("span", "slot-s", "⬇ needs " + it.needs));
        var ctl = E("div");
        ctl.style.marginTop = "8px";
        [["↑", -1], ["↓", 1]].forEach(function (b) {
          var btn = E("button", "step-btn", b[0]);
          btn.type = "button";
          btn.style.padding = "4px 10px";
          btn.style.minHeight = "32px";
          btn.setAttribute("aria-label", (b[1] < 0 ? "Move earlier: " : "Move later: ") + it.text);
          btn.addEventListener("click", function () {
            var j = i + b[1];
            if (j < 0 || j >= items.length) return;
            var t = items[i]; items[i] = items[j]; items[j] = t;
            draw();
          });
          ctl.appendChild(btn);
        });
        card.appendChild(ctl);
        card.addEventListener("dragstart", function (e) { e.dataTransfer.setData("text/plain", String(i)); });
        card.addEventListener("dragover", function (e) { e.preventDefault(); card.classList.add("over"); });
        card.addEventListener("dragleave", function () { card.classList.remove("over"); });
        card.addEventListener("drop", function (e) {
          e.preventDefault();
          var from = Number(e.dataTransfer.getData("text/plain"));
          var m = items.splice(from, 1)[0];
          items.splice(i, 0, m);
          draw();
        });
        list.appendChild(card);
      });
    }
    draw();
    return function () {
      var right = 0;
      Array.prototype.slice.call(list.children).forEach(function (c, i) {
        var ok = Number(c.dataset.pos) === i + 1;
        c.classList.remove("ok", "no");
        c.style.borderColor = ok ? "var(--good-line)" : "var(--bad-line)";
        c.style.background = ok ? "var(--good-wash)" : "var(--bad-wash)";
        if (ok) right++;
      });
      var sorted = spec.items.slice().sort(function (a, b) { return a.pos - b.pos; });
      return { score: right, total: spec.items.length, ok: right === spec.items.length,
               html: yoursFirst([], sorted.map(function (x) {
                 return { k: "y", html: "<b>" + x.pos + ". " + esc(x.text) + "</b> " + esc(x.why || "") };
               })) };
    };
  });

  /* ============================================================
   * PROBE — click a question, the artifact answers it
   * ============================================================ */
  D.register("probe", function (stage, spec, api) {
    if (spec.before) {
      var pre = E("div");
      pre.innerHTML = spec.before;
      stage.appendChild(pre);
    }
    var box = E("div", "probes");
    stage.appendChild(box);
    var opened = {};
    spec.probes.forEach(function (p, i) {
      var b = E("button", "probe-q", p.q);
      b.type = "button";
      box.appendChild(b);
      var a = E("div", "probe-a");
      a.innerHTML = p.a;
      a.style.display = "none";
      box.appendChild(a);
      b.addEventListener("click", function () {
        var open = a.style.display === "none";
        a.style.display = open ? "" : "none";
        opened[i] = opened[i] || open;
      });
    });
    return function () {
      var n = Object.keys(opened).filter(function (k) { return opened[k]; }).length;
      var all = n === spec.probes.length;
      return { score: n, total: spec.probes.length, ok: all,
               verdict: all ? "All read" : n + " of " + spec.probes.length + " read",
               html: all ? "<h4>Keep hold of these</h4>" + fbList(spec.probes.map(function (p) {
                 return { k: "y", html: p.a };
               })) : "<h4>Still to open</h4>" + fbList(spec.probes.map(function (p, i) {
                 return opened[i] ? null : { k: "o", html: esc(p.q) };
               }).filter(Boolean)) };
    };
  });
})(window, document);
