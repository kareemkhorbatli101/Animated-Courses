/* objects2.js (2 of 2) — the rest of the interactive objects.
 * THE POSTING MACHINE is the other centrepiece: the learner posts the six
 * January entries and the effect grid (F01-05) writes itself row by row, so the
 * worked example becomes the thing they build rather than a table they read. */
(function (root, doc) {
  "use strict";
  var D = root.Deck, L = root.LEDGER;
  var E = D.util.E, esc = D.util.esc, ar = D.util.ar, shuffle = D.util.shuffle,
      Drag = D.util.Drag, fbList = D.util.fbList, yoursFirst = D.util.yoursFirst;
  var m = L.money;

  /* ============================================================
   * POSTING MACHINE
   * ============================================================ */
  D.register("post", function (stage, spec, api) {
    var txs = spec.transactions;
    var idx = 0, posted = {}, run = { a: 0, l: 0, e: 0 };
    /* rows the book prints as already done (the faded Your Turn grid) */
    txs.forEach(function (t) { if (t.given) { posted[t.n] = true; apply(t); } });
    for (var gi = 0; gi < txs.length; gi++) { if (!txs[gi].given) { idx = gi; break; } }
    function apply(t) { run.a += t.eff.a; run.l += t.eff.l; run.e += t.eff.e; }

    var wrap = E("div", "post");
    var left = E("div");
    var right = E("div");
    wrap.appendChild(left);
    wrap.appendChild(right);
    stage.appendChild(wrap);

    var story = E("div", "post-story");
    left.appendChild(story);
    var tray = E("div", "tray");
    left.appendChild(tray);
    var je = E("div", "je");
    left.appendChild(je);
    var bal = E("div", "je-bal");
    left.appendChild(bal);
    var navr = E("div");
    navr.style.cssText = "display:flex;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap";
    left.appendChild(navr);

    var eqbox = E("div", "eqbar");
    right.appendChild(eqbox);
    var gridWrap = E("div");
    right.appendChild(gridWrap);

    var dnd, zoneDr, zoneCr;

    function drawEntry() {
      var t = txs[idx];
      story.innerHTML = "";
      story.appendChild(E("div", "post-date", t.date + "  ·  entry " + (idx + 1) + " of " + txs.length));
      story.appendChild(E("p", "post-text", t.text));
      tray.innerHTML = "";
      je.innerHTML = "";

      var h = E("div", "je-h");
      h.appendChild(E("span", null, "Account"));
      h.appendChild(E("span", null, "Debit"));
      h.appendChild(E("span", null, "Credit"));
      je.appendChild(h);

      var rowD = E("div", "je-r");
      var zd = E("div", "zone");
      zd.setAttribute("aria-label", "Debit side");
      var hd = E("span", "drop-host");
      zd.appendChild(hd);
      rowD.appendChild(zd);
      var td = E("span", "je-amt on");
      rowD.appendChild(td);
      rowD.appendChild(E("span", "je-amt"));
      je.appendChild(rowD);

      var rowC = E("div", "je-r cr");
      var zc = E("div", "zone");
      zc.setAttribute("aria-label", "Credit side");
      var hc = E("span", "drop-host");
      zc.appendChild(hc);
      rowC.appendChild(zc);
      rowC.appendChild(E("span", "je-amt"));
      var tc = E("span", "je-amt on");
      rowC.appendChild(tc);
      je.appendChild(rowC);

      dnd = Drag({ tray: tray, live: api.live, change: recount });
      zoneDr = dnd.zone({ id: "dr", el: zd, host: hd, cap: 9, label: "the debit side", ghost: "drag the debited accounts here" });
      zoneCr = dnd.zone({ id: "cr", el: zc, host: hc, cap: 9, label: "the credit side", ghost: "drag the credited accounts here" });

      var chips = t.entry.map(function (ln) {
        return { id: ln.account + "|" + ln.amount, label: ln.account, amount: ln.amount, side: ln.side };
      });
      (spec.lures[t.n] || []).forEach(function (x) {
        chips.push({ id: x.name + "|" + x.amount, label: x.name, amount: x.amount, side: null, why: x.why });
      });
      shuffle(chips).forEach(function (c) { dnd.chip({ id: c.id, label: c.label, amount: c.amount }); });
      je._chips = chips;
      je._dr = td; je._cr = tc;
      recount();
      drawNav();
    }

    function recount() {
      var st = dnd.state(), d = 0, c = 0;
      (st.dr || []).forEach(function (id) { d += Number(id.split("|")[1]); });
      (st.cr || []).forEach(function (id) { c += Number(id.split("|")[1]); });
      je._dr.textContent = d ? m(d) : "";
      je._cr.textContent = c ? m(c) : "";
      var placed = (st.dr || []).length + (st.cr || []).length;
      var even = d === c && d > 0;
      bal.className = "je-bal" + (even ? " ok" : "");
      bal.textContent = placed === 0 ? "Put every account on the side that it belongs."
        : even ? "Debits " + m(d) + " = credits " + m(c) + ". The entry balances."
               : "Debits " + m(d) + " against credits " + m(c) + " — an entry cannot be posted until they are equal.";
    }

    function drawNav() {
      navr.innerHTML = "";
      var prev = E("button", "step-btn", "← previous entry");
      prev.type = "button";
      prev.disabled = idx === 0;
      prev.addEventListener("click", function () { idx--; drawEntry(); });
      var next = E("button", "step-btn", "next entry →");
      next.type = "button";
      next.disabled = idx >= txs.length - 1;
      next.addEventListener("click", function () { idx++; drawEntry(); });
      navr.appendChild(prev);
      navr.appendChild(next);
      var n = Object.keys(posted).length;
      navr.appendChild(E("span", "numunit", n + " of " + txs.length + " posted"));
    }

    function drawEq() {
      eqbox.innerHTML = "";
      eqbox.appendChild(E("h4", null, "Assets = Liabilities + Equity, so far"));
      var max = Math.max(1, Math.abs(run.a), Math.abs(run.l + run.e));
      [["Assets", run.a, "eq-a"], ["Liabilities", run.l, "eq-l"], ["Equity", run.e, "eq-re"]].forEach(function (r) {
        var row = E("div", "eqrow");
        row.appendChild(E("span", "eqkey", r[0]));
        var tr = E("div", "eqtrack");
        var f = E("div", "eqfill " + r[2], L.signed(r[1]));
        f.style.width = (Math.abs(r[1]) / max * 100) + "%";
        tr.appendChild(f);
        row.appendChild(tr);
        eqbox.appendChild(row);
      });
      var ok = Math.abs(run.a - (run.l + run.e)) < 0.001;
      var note = E("div", "eqnote " + (ok ? "ok" : "no"));
      note.textContent = ok
        ? "Assets " + L.signed(run.a) + " = liabilities " + L.signed(run.l) + " + equity " + L.signed(run.e) + "."
        : "Out by " + m(run.a - run.l - run.e);
      eqbox.appendChild(note);
    }

    function drawGrid() {
      gridWrap.innerHTML = "";
      if (!spec.grid) return;
      var t = E("table", "grid");
      t.innerHTML = "<thead><tr><th>" + (spec.gridTitle || "Effect grid") +
        "</th><th>A</th><th>L</th><th>E</th><th>NI</th><th>Cash flow</th></tr></thead>";
      var tb = E("tbody");
      txs.forEach(function (x) {
        var tr = E("tr", posted[x.n] ? "" : "pending");
        if (posted[x.n] && posted[x.n] === "fresh") { tr.className = "fresh"; posted[x.n] = true; }
        tr.innerHTML = "<td>" + x.n + ". " + esc(x.short) + "</td>" +
          (posted[x.n] ? ("<td>" + L.signed(x.eff.a) + "</td><td>" + L.signed(x.eff.l) + "</td><td>" +
            L.signed(x.eff.e) + "</td><td>" + L.signed(x.eff.ni) + "</td><td>" +
            (x.eff.cf === "none" ? "none" : x.eff.cf + " " + L.signed(x.eff.cfAmount)) + "</td>")
            : "<td>·</td><td>·</td><td>·</td><td>·</td><td>·</td>");
        tb.appendChild(tr);
      });
      if (Object.keys(posted).length === txs.length) {
        var tot = E("tr", "grid-tot");
        var r = txs.reduce(function (a, x) {
          a.a += x.eff.a; a.l += x.eff.l; a.e += x.eff.e; a.ni += x.eff.ni;
          if (x.eff.cf !== "none") a.c += x.eff.cfAmount;
          return a;
        }, { a: 0, l: 0, e: 0, ni: 0, c: 0 });
        tot.innerHTML = "<td>Totals</td><td>" + L.signed(r.a) + "</td><td>" + L.signed(r.l) + "</td><td>" +
          L.signed(r.e) + "</td><td>" + L.signed(r.ni) + "</td><td>" + L.signed(r.c) + "</td>";
        tb.appendChild(tot);
      }
      t.appendChild(tb);
      gridWrap.appendChild(t);
    }

    drawEntry();
    drawEq();
    drawGrid();

    return function () {
      var t = txs[idx], st = dnd.state(), yours = [], ok = true;
      var wantD = t.entry.filter(function (l) { return l.side === "dr"; })
        .map(function (l) { return l.account + "|" + l.amount; });
      var wantC = t.entry.filter(function (l) { return l.side === "cr"; })
        .map(function (l) { return l.account + "|" + l.amount; });
      function same(a, b) {
        return a.length === b.length && a.slice().sort().join("~") === b.slice().sort().join("~");
      }
      var dOK = same(st.dr || [], wantD), cOK = same(st.cr || [], wantC);
      dnd.mark("dr", dOK);
      dnd.mark("cr", cOK);
      if (!dOK || !cOK) {
        ok = false;
        (st.dr || []).concat(st.cr || []).forEach(function (id) {
          var side = (st.dr || []).indexOf(id) >= 0 ? "dr" : "cr";
          var want = (wantD.indexOf(id) >= 0) ? "dr" : (wantC.indexOf(id) >= 0 ? "cr" : null);
          var c = je._chips.filter(function (x) { return x.id === id; })[0];
          if (want === null) {
            yours.push({ k: "n", html: "<b>" + esc(c.label) + "</b> does not belong in this entry. " + esc(c.why || "") });
          } else if (want !== side) {
            yours.push({ k: "n", html: "<b>" + esc(c.label) + "</b> belongs on the <b>" +
              (want === "dr" ? "debit" : "credit") + "</b> side, not the " + (side === "dr" ? "debit" : "credit") + "." });
          }
        });
        t.entry.forEach(function (ln) {
          var id = ln.account + "|" + ln.amount;
          if ((st.dr || []).indexOf(id) < 0 && (st.cr || []).indexOf(id) < 0) {
            yours.push({ k: "n", html: "<b>" + esc(ln.account) + " " + m(ln.amount) +
              "</b> has not been placed. It is a " + (ln.side === "dr" ? "debit" : "credit") + "." });
          }
        });
      }
      if (ok && !posted[t.n]) {
        posted[t.n] = "fresh";
        apply(t);
        drawEq();
        drawGrid();
      }
      var n = Object.keys(posted).length;
      drawNav();
      var right = t.entry.map(function (ln) {
        return { k: "y", html: (ln.side === "dr" ? "Debit " : "Credit ") + "<b>" + esc(ln.account) +
          " " + m(ln.amount) + "</b>" };
      });
      if (ok && spec.logic && spec.logic[t.n]) right.push({ k: "o", html: spec.logic[t.n] });
      if (ok && idx < txs.length - 1) { idx++; drawEntry(); }
      return { score: n, total: txs.length, ok: n === txs.length,
               verdict: ok ? (n === txs.length ? "All " + txs.length + " posted. The grid is complete."
                                               : "Posted. " + n + " of " + txs.length + " — next entry is ready.")
                           : "Not posted — see why",
               html: yoursFirst(yours, right) };
    };
  });

  /* ============================================================
   * CONTRA — the overlay that visibly shortens the asset bar
   * ============================================================ */
  D.register("contra", function (stage, spec, api) {
    var state = { where: null };
    var wrap = E("div", "contra");
    var bars = E("div", "bars");
    var side = E("div");
    wrap.appendChild(bars);
    wrap.appendChild(side);
    stage.appendChild(wrap);

    var max = spec.asset.amount;
    function bar(label, amount, id) {
      var row = E("div", "barline");
      row.appendChild(E("span", "barlabel", label));
      var tr = E("div", "bartrack");
      var f = E("div", "barfill", m(amount));
      f.style.width = (amount / max * 100) + "%";
      tr.appendChild(f);
      row.appendChild(tr);
      bars.appendChild(row);
      return { row: row, track: tr, fill: f };
    }
    var assetBar = bar(spec.asset.label, spec.asset.amount);
    var totalRow = E("p", "warn-line");
    bars.appendChild(totalRow);

    side.appendChild(E("div", "slot-h", "Where does it go?"));
    side.appendChild(E("span", "slot-s", spec.contra.label + " " + m(spec.contra.amount) + ", a credit balance"));
    var tray = E("div", "tray");
    side.appendChild(tray);
    var zones = E("div");
    zones.style.display = "grid";
    zones.style.gap = "9px";
    side.appendChild(zones);

    var dnd = Drag({ tray: tray, live: api.live, change: redraw });
    dnd.chip({ id: "contra", label: spec.contra.label, amount: spec.contra.amount, negate: true });
    [{ id: "with", label: "With the assets, reducing " + spec.asset.label.toLowerCase() },
     { id: "liab", label: "With the liabilities" }].forEach(function (t) {
      var s = E("div", "slot");
      s.appendChild(E("div", "slot-h", t.label));
      var z = E("div", "zone");
      var h = E("span", "drop-host");
      z.appendChild(h);
      s.appendChild(z);
      dnd.zone({ id: t.id, el: z, host: h, cap: 1, label: t.label, ghost: "drop it here" });
      zones.appendChild(s);
    });

    function redraw(st) {
      st = st || dnd.state();
      var at = (st.with || []).length ? "with" : ((st.liab || []).length ? "liab" : null);
      state.where = at;
      var over = assetBar.track.querySelector(".barover");
      if (over) over.remove();
      if (at === "with") {
        var o = E("div", "barover", "−" + m(spec.contra.amount));
        o.style.right = "0";
        o.style.width = (spec.contra.amount / max * 100) + "%";
        assetBar.track.appendChild(o);
        assetBar.fill.style.width = ((spec.asset.amount - spec.contra.amount) / max * 100) + "%";
        assetBar.fill.textContent = m(spec.asset.amount - spec.contra.amount);
        totalRow.className = "net-line";
        totalRow.textContent = spec.netLabel + " " + m(spec.asset.amount - spec.contra.amount) +
          " — this is the line that reaches the balance sheet.";
      } else if (at === "liab") {
        assetBar.fill.style.width = "100%";
        assetBar.fill.textContent = m(spec.asset.amount);
        totalRow.className = "warn-line";
        totalRow.textContent = "Assets still show " + m(spec.asset.amount) + ": overstated by " +
          m(spec.contra.amount) + ". A credit balance does not make it a liability.";
      } else {
        assetBar.fill.style.width = "100%";
        assetBar.fill.textContent = m(spec.asset.amount);
        totalRow.className = "warn-line";
        totalRow.textContent = "";
      }
    }
    redraw();

    return function () {
      var ok = state.where === "with";
      dnd.mark("with", ok);
      if (state.where === "liab") dnd.mark("liab", false);
      return { score: ok ? 1 : 0, total: 1, ok: ok, traps: ok ? [] : ["contra-netting"],
               html: yoursFirst(ok ? [] : [{ k: "n", html: spec.wrongWhy }],
                 [{ k: "y", html: spec.rightWhy }]) };
    };
  });

  /* ============================================================
   * BEAM — A = L + E as a physical balance
   * ============================================================ */
  D.register("beam", function (stage, spec, api) {
    var st = { a: 0, l: 0, cc: 0, re: 0, log: [] };
    var wrap = E("div", "beam-wrap");
    var beam = E("div", "beam");
    var bar = E("div", "beam-bar");
    var piv = E("div", "beam-pivot");
    var panL = E("div", "beam-pan l");
    var panR = E("div", "beam-pan r");
    beam.appendChild(bar); beam.appendChild(piv); beam.appendChild(panL); beam.appendChild(panR);
    wrap.appendChild(beam);
    var note = E("p", "eqnote ok");
    wrap.appendChild(note);
    var btns = E("div", "valves");
    btns.style.gridTemplateColumns = "repeat(auto-fit,minmax(220px,1fr))";
    wrap.appendChild(btns);
    stage.appendChild(wrap);

    spec.moves.forEach(function (mv) {
      var b = E("button", "valve", mv.label);
      b.type = "button";
      b.addEventListener("click", function () {
        st.a += mv.a; st.l += mv.l; st.cc += mv.cc; st.re += mv.re;
        st.log.push(mv);
        b.disabled = true;
        b.style.opacity = ".45";
        draw(mv);
      });
      btns.appendChild(b);
    });
    var reset = E("button", "valve", "Start again");
    reset.type = "button";
    reset.addEventListener("click", function () {
      st = { a: 0, l: 0, cc: 0, re: 0, log: [] };
      Array.prototype.slice.call(btns.children).forEach(function (b) { b.disabled = false; b.style.opacity = ""; });
      draw(null);
    });
    btns.appendChild(reset);

    function stack(pan, blocks, max) {
      pan.innerHTML = "";
      var s = E("div", "beam-stack");
      blocks.forEach(function (b) {
        if (!b.v) return;
        var d = E("div", "beam-blk " + b.cls, m(b.v));
        d.style.height = Math.max(16, Math.abs(b.v) / max * 60) + "px";
        s.appendChild(d);
      });
      pan.appendChild(s);
      pan.appendChild(E("div", "beam-cap", blocks.map(function (b) { return b.name; }).join(" + ")));
    }
    function draw(mv) {
      var rightTotal = st.l + st.cc + st.re;
      var max = Math.max(1, Math.abs(st.a), Math.abs(rightTotal));
      stack(panL, [{ name: "Assets", v: st.a, cls: "eq-a" }], max);
      stack(panR, [{ name: "Liabilities", v: st.l, cls: "eq-l" },
                   { name: "Contributed capital", v: st.cc, cls: "eq-cc" },
                   { name: "Retained earnings", v: st.re, cls: "eq-re" }], max);
      var diff = st.a - rightTotal;
      bar.style.transform = "rotate(" + Math.max(-7, Math.min(7, diff / max * 7)) + "deg)";
      note.className = "eqnote " + (Math.abs(diff) < 0.001 ? "ok" : "no");
      note.textContent = mv ? mv.why
        : (st.a === 0 ? "Apply a transaction and watch both sides move together."
                      : "Assets " + m(st.a) + " = liabilities " + m(st.l) + " + equity " + m(st.cc + st.re) + ".");
    }
    draw(null);

    return function () {
      var done = st.log.length >= spec.moves.length;
      var bal = Math.abs(st.a - (st.l + st.cc + st.re)) < 0.001;
      return { score: st.log.length, total: spec.moves.length, ok: done && bal,
               verdict: done ? "All applied, and it still balances." : st.log.length + " of " + spec.moves.length + " applied",
               html: yoursFirst([], spec.moves.map(function (x) {
                 return { k: "y", html: "<b>" + esc(x.label) + "</b> " + x.why };
               })) };
    };
  });

  /* ============================================================
   * TANK — retained earnings, with the dividend pipe the IS rejects
   * ============================================================ */
  D.register("tank", function (stage, spec, api) {
    var level = spec.start, tried = {}, rejected = false;
    var wrap = E("div", "tank-wrap");
    var left = E("div");
    var right = E("div");
    wrap.appendChild(left); wrap.appendChild(right);
    stage.appendChild(wrap);

    var tank = E("div", "tank");
    var fluid = E("div", "tank-fluid");
    var val = E("div", "tank-val");
    tank.appendChild(fluid); tank.appendChild(val);
    left.appendChild(E("div", "slot-h", "Retained earnings"));
    left.appendChild(tank);

    var isPanel = E("div", "is-panel");
    isPanel.appendChild(E("h4", null, "Income statement"));
    var isBody = E("p", "note", "Revenues and gains, less expenses and losses.");
    isPanel.appendChild(isBody);
    left.appendChild(isPanel);

    var valves = E("div", "valves");
    right.appendChild(E("div", "slot-h", "Open a pipe"));
    right.appendChild(valves);
    var say = E("div", "bite");
    say.style.display = "none";
    right.appendChild(say);

    spec.pipes.forEach(function (p) {
      var b = E("button", "valve " + (p.dir > 0 ? "in" : "out") + (p.special ? " special" : ""));
      b.type = "button";
      b.appendChild(E("span", "dirn", p.dir > 0 ? "↑" : "↓"));
      b.appendChild(E("span", null, p.label));
      b.addEventListener("click", function () {
        tried[p.id] = true;
        if (p.throughIncomeStatement === false) {
          /* the dividend: the income statement physically refuses it */
          isPanel.classList.add("reject");
          setTimeout(function () { isPanel.classList.remove("reject"); }, 360);
          rejected = true;
          say.style.display = "";
          say.innerHTML = "<b>The income statement refuses it.</b> " + p.why;
        } else {
          say.style.display = "";
          say.innerHTML = p.why;
        }
        level += p.amount * p.dir;
        draw();
      });
      valves.appendChild(b);
    });

    function draw() {
      var pct = Math.max(4, Math.min(100, level / spec.max * 100));
      fluid.style.height = pct + "%";
      val.textContent = m(level);
    }
    draw();

    return function () {
      var n = Object.keys(tried).length;
      var all = n === spec.pipes.length;
      return { score: n, total: spec.pipes.length, ok: all && rejected,
               verdict: all ? "Every pipe tried." : n + " of " + spec.pipes.length + " tried",
               html: yoursFirst([], spec.pipes.map(function (p) {
                 return { k: p.throughIncomeStatement === false ? "n" : "y",
                          html: "<b>" + esc(p.label) + "</b> " + p.why };
               })) };
    };
  });

  /* ============================================================
   * SPLIT — par value against the amount above par
   * ============================================================ */
  D.register("split", function (stage, spec, api) {
    var v = Math.round(spec.total / 2);
    var wrap = E("div");
    stage.appendChild(wrap);
    var bars = E("div", "bars");
    wrap.appendChild(bars);

    function mk(label) {
      var row = E("div", "barline");
      row.appendChild(E("span", "barlabel", label));
      var tr = E("div", "bartrack");
      var f = E("div", "barfill", "");
      tr.appendChild(f);
      row.appendChild(tr);
      bars.appendChild(row);
      return f;
    }
    var f1 = mk(spec.a.label), f2 = mk(spec.b.label);
    f2.style.background = "var(--flag)";

    var sl = E("input", "tl-slider");
    sl.type = "range";
    sl.min = "0";
    sl.max = String(spec.total);
    sl.step = String(spec.step || 10);
    sl.value = String(v);
    sl.setAttribute("aria-label", "Move the divider between " + spec.a.label + " and " + spec.b.label);
    wrap.appendChild(sl);
    var note = E("p", "note");
    wrap.appendChild(note);

    sl.addEventListener("input", function () { v = Number(sl.value); draw(); });
    function draw() {
      f1.style.width = (v / spec.total * 100) + "%";
      f1.textContent = m(v);
      f2.style.width = ((spec.total - v) / spec.total * 100) + "%";
      f2.textContent = m(spec.total - v);
      var ok = v === spec.a.answer;
      note.textContent = ok ? spec.rightWhy : spec.hint;
      note.style.color = ok ? "var(--good)" : "";
      note.style.fontWeight = ok ? "800" : "";
    }
    draw();
    return function () {
      var ok = v === spec.a.answer;
      return { score: ok ? 1 : 0, total: 1, ok: ok,
               html: yoursFirst(ok ? [] : [{ k: "n", html: "You split it " + m(v) + " / " +
                 m(spec.total - v) + ". " + spec.wrongWhy }],
                 [{ k: "y", html: spec.rightWhy }]) };
    };
  });

  /* ============================================================
   * SWITCH — the U.S. GAAP / IFRS name toggle
   * ============================================================ */
  D.register("switch", function (stage, spec, api) {
    var ifrs = false, flips = 0;
    var head = E("div");
    head.style.cssText = "display:flex;gap:10px;align-items:center;margin-bottom:12px;flex-wrap:wrap";
    var b = E("button", "btn btn-ghost", "Show the IFRS names →");
    b.type = "button";
    head.appendChild(b);
    var tagEl = E("span", "numunit", "showing U.S. GAAP — the names the exam uses");
    head.appendChild(tagEl);
    stage.appendChild(head);

    var sheet = E("div", "sheet");
    var sh = E("div", "sheet-head");
    var title = E("h3", null, "");
    sh.appendChild(title);
    sh.appendChild(E("span", "sheet-unit", L.unit));
    sheet.appendChild(sh);
    var body = E("div", "sheet-body");
    sheet.appendChild(body);
    stage.appendChild(sheet);

    b.addEventListener("click", function () {
      ifrs = !ifrs;
      flips++;
      b.textContent = ifrs ? "← Show the U.S. GAAP names" : "Show the IFRS names →";
      tagEl.textContent = ifrs ? "showing IFRS" : "showing U.S. GAAP — the names the exam uses";
      draw();
    });
    function draw() {
      title.textContent = ifrs ? spec.titleIfrs : spec.titleUs;
      body.innerHTML = "";
      spec.pairs.forEach(function (p) {
        var r = E("div", "row");
        var n = E("span", "row-label", ifrs ? p.ifrs : p.us);
        n.style.transition = "none";
        r.appendChild(n);
        r.appendChild(E("span", "row-amt", p.amount !== undefined ? m(p.amount) : ""));
        body.appendChild(r);
      });
    }
    draw();
    return function () {
      return { score: flips ? 1 : 0, total: 1, ok: flips > 0,
               verdict: flips ? "Seen both" : "Flip the switch first",
               html: yoursFirst([], spec.pairs.map(function (p) {
                 return { k: "y", html: "<b>" + esc(p.us) + "</b> → " + esc(p.ifrs) };
               })) };
    };
  });

  /* ============================================================
   * TIMELINE2 — the same sale falling in two different years
   * ============================================================ */
  D.register("timeline2", function (stage, spec, api) {
    var at = 0, seen = {};
    var wrap = E("div", "tl");
    stage.appendChild(wrap);
    var when = E("div", "tl-when");
    wrap.appendChild(when);

    function track(name, cls) {
      var t = E("div", "tl-track " + (cls || ""));
      t.appendChild(E("span", "tl-name", name));
      spec.years.forEach(function (y) { t.appendChild(E("div", "tl-year", y)); });
      var tag = E("div", "tl-tag");
      t.appendChild(tag);
      wrap.appendChild(t);
      return tag;
    }
    var tagA = track("Accrual basis · U.S. GAAP");
    var tagC = track("Cash basis · not acceptable under U.S. GAAP", "tl-cash");

    var sl = E("input", "tl-slider");
    sl.type = "range";
    sl.min = "0";
    sl.max = String(spec.stops.length - 1);
    sl.value = "0";
    sl.step = "1";
    sl.setAttribute("aria-label", "Move through the timeline");
    wrap.appendChild(sl);
    var note = E("p", "bite");
    wrap.appendChild(note);

    sl.addEventListener("input", function () { at = Number(sl.value); seen[at] = true; draw(); });
    function draw() {
      var s = spec.stops[at];
      when.textContent = s.when;
      tagA.textContent = s.accrual.text;
      tagA.style.left = s.accrual.at + "%";
      tagA.style.opacity = s.accrual.text ? "1" : "0";
      tagC.textContent = s.cash.text;
      tagC.style.left = s.cash.at + "%";
      tagC.style.opacity = s.cash.text ? "1" : "0";
      note.innerHTML = s.note;
    }
    seen[0] = true;
    draw();
    return function () {
      var n = Object.keys(seen).length;
      return { score: n, total: spec.stops.length, ok: n === spec.stops.length,
               verdict: n === spec.stops.length ? "You have seen the whole timeline." : n + " of " + spec.stops.length + " stops",
               html: yoursFirst([], spec.stops.map(function (s) {
                 return { k: "y", html: "<b>" + esc(s.when) + "</b> " + s.note };
               })) };
    };
  });

  /* ============================================================
   * WIRE — connect net income and cash to where they land
   * ============================================================ */
  D.register("wire", function (stage, spec, api) {
    var sel = null, wired = {};
    var wrap = E("div", "wire");
    stage.appendChild(wrap);
    var svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "wire-svg");
    wrap.appendChild(svg);
    var ports = {};

    spec.cards.forEach(function (c) {
      var card = E("div", "wire-card");
      card.appendChild(E("h4", null, c.title));
      card.appendChild(E("p", null, c.sub));
      (c.ports || []).forEach(function (p) {
        var el = E("div", "port");
        el.tabIndex = 0;
        el.appendChild(E("span", "pin"));
        el.appendChild(E("span", null, p.label));
        el.addEventListener("click", function () { tap(p.id, el); });
        el.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tap(p.id, el); }
        });
        ports[p.id] = { el: el, spec: p };
        card.appendChild(el);
      });
      wrap.appendChild(card);
    });

    function tap(id, el) {
      if (wired[id]) return;
      if (!sel) { sel = id; el.classList.add("sel"); return; }
      if (sel === id) { sel = null; el.classList.remove("sel"); return; }
      var a = sel, b = id;
      ports[a].el.classList.remove("sel");
      var link = spec.links.filter(function (l) {
        return (l.from === a && l.to === b) || (l.from === b && l.to === a);
      })[0];
      if (link) {
        wired[a] = wired[b] = link.id;
        ports[a].el.classList.add("wired");
        ports[b].el.classList.add("wired");
        ports[a].el.querySelector("span:last-child").textContent += "  " + link.carries;
        redraw();
      } else {
        ports[b].el.classList.add("no");
        setTimeout(function () { ports[b].el.classList.remove("no"); }, 500);
        api.live.textContent = "Those two do not connect.";
      }
      sel = null;
    }
    function redraw() {
      svg.innerHTML = "";
      spec.links.forEach(function (l) {
        if (!wired[l.from]) return;
        var r1 = ports[l.from].el.getBoundingClientRect();
        var r2 = ports[l.to].el.getBoundingClientRect();
        var rw = wrap.getBoundingClientRect();
        var x1 = r1.right - rw.left, y1 = r1.top + r1.height / 2 - rw.top;
        var x2 = r2.left - rw.left, y2 = r2.top + r2.height / 2 - rw.top;
        var mid = (x1 + x2) / 2;
        var path = doc.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("class", "wire-path");
        path.setAttribute("d", "M " + x1 + " " + y1 + " C " + mid + " " + y1 + ", " + mid + " " + y2 +
          ", " + x2 + " " + y2);
        svg.appendChild(path);
      });
    }
    return function () {
      var n = Object.keys(wired).length / 2;
      return { score: n, total: spec.links.length, ok: n === spec.links.length,
               verdict: n === spec.links.length ? "Both links wired." : n + " of " + spec.links.length + " wired",
               html: yoursFirst([], spec.links.map(function (l) {
                 return { k: "y", html: l.why };
               })) };
    };
  });

  /* ============================================================
   * TBREADER — the complete trial balance, tagged line by line
   * ============================================================ */
  D.register("tbreader", function (stage, spec, api) {
    var tags = {}, cur = spec.tags[0].id;
    var bar = E("div", "tagbar");
    stage.appendChild(bar);
    spec.tags.forEach(function (t) {
      var b = E("button", "btn btn-ghost", t.label);
      b.type = "button";
      b.dataset.t = t.id;
      b.addEventListener("click", function () {
        cur = t.id;
        Array.prototype.slice.call(bar.children).forEach(function (x) {
          x.className = "btn " + (x.dataset.t === cur ? "btn-primary" : "btn-ghost");
        });
      });
      bar.appendChild(b);
    });
    bar.firstChild.className = "btn btn-primary";

    var box = E("div");
    box.style.cssText = "max-height:52vh;overflow:auto;border:1px solid var(--line);border-radius:9px;background:var(--card)";
    var t = E("table", "tbtable");
    t.innerHTML = "<thead><tr><th>Account</th><th class=\"n\">Debit</th><th class=\"n\">Credit</th>" +
      "<th>Goes to</th></tr></thead>";
    var tb = E("tbody");
    L.trialBalance.forEach(function (r) {
      var tr = E("tr");
      tr.dataset.k = r.key;
      tr.innerHTML = "<td>" + esc(r.name) + "</td><td class=\"n\">" + (r.dr ? m(r.dr) : "") +
        "</td><td class=\"n\">" + (r.cr ? m(r.cr) : "") + "</td><td class=\"tbtag\"></td>";
      tr.addEventListener("click", function () {
        tags[r.key] = cur;
        tr.className = "tag-" + cur;
        tr.querySelector(".tbtag").textContent = labelOf(cur);
      });
      tb.appendChild(tr);
    });
    var tot = E("tr", "tot");
    tot.innerHTML = "<td>Totals</td><td class=\"n\">" + m(L.totalDebits) + "</td><td class=\"n\">" +
      m(L.totalCredits) + "</td><td></td>";
    tb.appendChild(tot);
    t.appendChild(tb);
    box.appendChild(t);
    stage.appendChild(box);

    function labelOf(id) {
      var x = spec.tags.filter(function (y) { return y.id === id; })[0];
      return x ? x.short : id;
    }
    return function () {
      var right = 0, yours = [];
      L.trialBalance.forEach(function (r) {
        var want = r.stmt, got = tags[r.key];
        var tr = tb.querySelector('[data-k="' + r.key + '"]');
        tr.classList.remove("wrong");
        if (got === want) right++;
        else {
          tr.classList.add("wrong");
          if (got) yours.push({ k: "n", html: "<b>" + esc(r.name) + "</b> → " + labelOf(got) +
            ". It reaches the <b>" + labelOf(want) + "</b>. " + esc(spec.why[r.key] || "") });
        }
      });
      var untagged = L.trialBalance.length - Object.keys(tags).length;
      if (untagged) yours.unshift({ k: "n", html: untagged + " lines still have no tag." });
      return { score: right, total: L.trialBalance.length, ok: right === L.trialBalance.length,
               traps: right === L.trialBalance.length ? [] : ["contra-netting"],
               html: yoursFirst(yours, right === L.trialBalance.length
                 ? [{ k: "y", html: "Every one of the twenty lines is on the right statement." }] : []) };
    };
  });

  /* ============================================================
   * CUES — the exam-wording stems
   * ============================================================ */
  D.register("cues", function (stage, spec, api) {
    var at = 0, answers = {};
    var box = E("div");
    stage.appendChild(box);
    function draw() {
      box.innerHTML = "";
      var s = spec.stems[at];
      var card = E("div", "slot");
      var sent = E("p");
      sent.style.cssText = "font-size:var(--t-lead);line-height:1.9;margin:0 0 12px";
      s.text.split(/(\s+)/).forEach(function (tok) {
        if (/^\s+$/.test(tok)) { sent.appendChild(doc.createTextNode(tok)); return; }
        var bare = tok.replace(/[^A-Za-z']/g, "");
        if (!bare) { sent.appendChild(doc.createTextNode(tok)); return; }
        var b = E("button", "token", tok);
        b.type = "button";
        b.addEventListener("click", function () {
          Array.prototype.slice.call(sent.querySelectorAll(".token")).forEach(function (x) {
            x.classList.remove("picked");
          });
          b.classList.add("picked");
          answers[at] = answers[at] || {};
          answers[at].cue = bare.toLowerCase();
        });
        sent.appendChild(b);
      });
      card.appendChild(E("div", "slot-s", "Click the one word that changes how you must read this."));
      card.appendChild(sent);
      var sel = E("select", "select-answer");
      sel.style.cssText = "font:inherit;font-size:var(--t-small);padding:9px;border:1px solid var(--line-2);" +
        "border-radius:8px;background:var(--card);color:var(--ink);min-height:42px;width:100%;max-width:520px";
      sel.setAttribute("aria-label", "What does that cue tell you to do?");
      var o0 = E("option", null, "— what does it tell you to do? —");
      o0.value = "";
      sel.appendChild(o0);
      shuffle(spec.effects).forEach(function (e) {
        var o = E("option", null, e);
        o.value = e;
        sel.appendChild(o);
      });
      if (answers[at] && answers[at].eff) sel.value = answers[at].eff;
      sel.addEventListener("change", function () {
        answers[at] = answers[at] || {};
        answers[at].eff = sel.value;
      });
      card.appendChild(sel);
      box.appendChild(card);

      var nav = E("div");
      nav.style.cssText = "display:flex;gap:8px;margin-top:11px;align-items:center";
      var p = E("button", "step-btn", "←");
      p.type = "button"; p.disabled = at === 0;
      p.addEventListener("click", function () { at--; draw(); });
      var n = E("button", "step-btn", "→");
      n.type = "button"; n.disabled = at === spec.stems.length - 1;
      n.addEventListener("click", function () { at++; draw(); });
      nav.appendChild(p); nav.appendChild(n);
      nav.appendChild(E("span", "numunit", (at + 1) + " of " + spec.stems.length));
      box.appendChild(nav);
    }
    draw();
    return function () {
      var right = 0, yours = [];
      spec.stems.forEach(function (s, i) {
        var a = answers[i] || {};
        var ok = a.cue === s.cue.toLowerCase() && a.eff === s.effect;
        if (ok) right++;
        else yours.push({ k: "n", html: "<b>" + esc(s.text) + "</b> — the cue is <b>" + esc(s.cue) +
          "</b>: " + esc(s.effect) });
      });
      return { score: right, total: spec.stems.length, ok: right === spec.stems.length,
               html: yoursFirst(yours, right === spec.stems.length ? spec.stems.map(function (s) {
                 return { k: "y", html: "<b>" + esc(s.cue) + "</b> — " + esc(s.effect) };
               }) : []) };
    };
  });

  /* ============================================================
   * TABLE — the boardroom table (F01-02 made clickable)
   * ============================================================ */
  D.register("table", function (stage, spec, api) {
    var seen = {};
    var grid = E("div", "board board-lanes");
    stage.appendChild(grid);
    var panel = E("div", "bite");
    panel.style.display = "none";
    stage.appendChild(panel);

    spec.seats.forEach(function (s, i) {
      var b = E("button", "slot");
      b.type = "button";
      b.style.cssText = "text-align:left;cursor:pointer;font:inherit;color:inherit" +
        (s.primary ? ";border-color:var(--accent-line);background:var(--accent-wash)" : "");
      b.appendChild(E("div", "slot-h", s.user));
      b.appendChild(E("span", "slot-s", s.primary ? "● PRIMARY USER" : "another reader"));
      b.addEventListener("click", function () {
        seen[i] = true;
        panel.style.display = "";
        panel.innerHTML = "<b>" + esc(s.user) + "</b><br>" +
          "<b>Decision:</b> " + esc(s.decision) + "<br>" +
          "<b>Key question:</b> " + esc(s.q) + "<br>" +
          "<b>Statements used most:</b> " + esc(s.stmts);
        Array.prototype.slice.call(grid.children).forEach(function (x) { x.style.outline = ""; });
        b.style.outline = "3px solid var(--accent)";
      });
      grid.appendChild(b);
    });
    return function () {
      var n = Object.keys(seen).length;
      return { score: n, total: spec.seats.length, ok: n === spec.seats.length,
               verdict: n === spec.seats.length ? "Every seat read." : n + " of " + spec.seats.length + " read",
               html: yoursFirst([], spec.seats.filter(function (s) { return s.primary; }).map(function (s) {
                 return { k: "y", html: "<b>" + esc(s.user) + "</b> is a primary user: " + esc(s.q) };
               }).concat([{ k: "o", html: "Managers are users, but not primary users of general-purpose statements, because they can get any internal information they need." }])) };
    };
  });

  /* ============================================================
   * SHELF — the ASC, by topic number
   * ============================================================ */
  D.register("shelf", function (stage, spec, api) {
    var found = {};
    var row = E("div");
    row.style.cssText = "display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px";
    spec.volumes.forEach(function (v) {
      var b = E("button", "chip");
      b.type = "button";
      b.style.cssText = "cursor:pointer;min-width:62px;justify-content:center;font-family:var(--mono)";
      b.appendChild(E("span", null, "ASC " + v.n));
      b.addEventListener("click", function () {
        if (v.topic) {
          found[v.n] = true;
          b.style.background = "var(--good-wash)";
          b.style.borderColor = "var(--good-line)";
          note.innerHTML = "<b>ASC " + v.n + "</b> — " + esc(v.topic) + ". " + esc(v.why || "");
        } else {
          b.classList.add("reject");
          setTimeout(function () { b.classList.remove("reject"); }, 340);
          note.innerHTML = esc(spec.missWhy);
        }
      });
      row.appendChild(b);
    });
    stage.appendChild(E("p", "note", spec.ask));
    stage.appendChild(row);
    var note = E("div", "bite");
    note.innerHTML = spec.intro;
    stage.appendChild(note);
    return function () {
      var want = spec.volumes.filter(function (v) { return v.topic; });
      var n = Object.keys(found).length;
      return { score: n, total: want.length, ok: n === want.length,
               html: yoursFirst([], want.map(function (v) {
                 return { k: "y", html: "<b>ASC " + v.n + "</b> covers " + esc(v.topic) + "." };
               })) };
    };
  });

  /* ============================================================
   * CLOZE — the short grammar drill (Language Focus)
   * ============================================================ */
  D.register("cloze", function (stage, spec, api) {
    var tray = E("div", "tray");
    stage.appendChild(tray);
    var p = E("p");
    p.style.cssText = "font-size:var(--t-lead);line-height:2.5;max-width:60ch";
    stage.appendChild(p);
    var dnd = Drag({ tray: tray, live: api.live });
    shuffle(spec.answers.map(function (a) { return a.word; }).concat(spec.extra || []))
      .forEach(function (w) { dnd.chip({ id: w, label: w }); });
    spec.parts.forEach(function (part, i) {
      p.appendChild(doc.createTextNode(part));
      if (i < spec.answers.length) {
        var z = E("span", "zone");
        z.style.cssText = "display:inline-flex;min-width:92px;min-height:34px;vertical-align:middle;margin:0 4px";
        var h = E("span", "drop-host");
        z.appendChild(h);
        dnd.zone({ id: "b" + i, el: z, host: h, cap: 1, label: "blank " + (i + 1), ghost: "   " });
        p.appendChild(z);
      }
    });
    return function () {
      var st = dnd.state(), right = 0, yours = [];
      spec.answers.forEach(function (a, i) {
        var got = (st["b" + i] || [])[0];
        var ok = got === a.word;
        dnd.mark("b" + i, ok);
        if (ok) right++;
        else yours.push({ k: "n", html: "Blank " + (i + 1) + ": <b>" + esc(a.word) + "</b>. " + esc(a.why || "") });
      });
      return { score: right, total: spec.answers.length, ok: right === spec.answers.length,
               html: yoursFirst(yours, right === spec.answers.length ? spec.answers.map(function (a) {
                 return { k: "y", html: "<b>" + esc(a.word) + "</b> " + esc(a.why || "") };
               }) : []) };
    };
  });
})(window, document);

/* ============================================================
 * FLASH — the bilingual term drill, one card at a time
 * ============================================================ */
(function (root, doc) {
  "use strict";
  var D = root.Deck;
  var E = D.util.E, esc = D.util.esc, ar = D.util.ar, shuffle = D.util.shuffle,
      yoursFirst = D.util.yoursFirst;
  var S = root.Speech;

  D.register("flash", function (stage, spec, api) {
    var pool = shuffle(spec.terms).slice(0, spec.count || spec.terms.length);
    var i = 0, right = 0, seen = 0, missed = [];
    var card = E("div", "flashcard");
    card.style.cssText = "background:var(--card);border:1px solid var(--line);border-radius:var(--r);" +
      "padding:24px;text-align:center";
    stage.appendChild(card);
    var count = E("p", "note");
    count.style.textAlign = "center";
    stage.appendChild(count);

    function draw() {
      card.innerHTML = "";
      count.textContent = seen ? right + " of " + seen + " right · card " + Math.min(i + 1, pool.length) +
        " of " + pool.length : "card 1 of " + pool.length;
      if (i >= pool.length) {
        card.appendChild(E("h3", null, "Deck finished — " + right + " of " + seen + " right"));
        return;
      }
      var t = pool[i], askAr = spec.direction === "ar-en";
      var front = E("div");
      if (askAr) {
        var a = ar(t.ar);
        a.style.fontSize = "30px";
        front.appendChild(a);
        if (S) front.appendChild(S.button(t.ar, "ar", "Pronounce in Arabic"));
        front.appendChild(E("p", "note", "What is the English exam term?"));
      } else {
        var e = E("div", null, t.en);
        e.style.cssText = "font-size:26px;font-weight:800";
        front.appendChild(e);
        if (S) front.appendChild(S.button(t.en, "en", "Pronounce in English"));
        front.appendChild(E("p", "note", "What is the Arabic equivalent?"));
      }
      card.appendChild(front);

      var opts = shuffle([t].concat(shuffle(spec.terms.filter(function (x) { return x.en !== t.en; })).slice(0, 3)));
      var wrap = E("div", "choices");
      wrap.style.marginTop = "14px";
      opts.forEach(function (o) {
        var b = E("button", "choice");
        b.type = "button";
        b.style.justifyContent = "center";
        if (askAr) b.appendChild(E("span", null, o.en));
        else b.appendChild(ar(o.ar));
        b.addEventListener("click", function () {
          if (card.dataset.done) return;
          card.dataset.done = "1";
          seen++;
          var ok = o.en === t.en;
          if (ok) right++; else missed.push(t);
          b.classList.add(ok ? "ok" : "no");
          Array.prototype.slice.call(wrap.children).forEach(function (x) { x.disabled = true; });
          var rev = E("div", "bite");
          rev.innerHTML = "<b>" + esc(t.en) + "</b> · " + esc(t.ar) + "<br>" + esc(t.gloss) +
            " <span class=\"numunit\">section " + t.sec + "</span>";
          card.appendChild(rev);
          var n = E("button", "btn btn-primary", i + 1 >= pool.length ? "See the result" : "Next card");
          n.type = "button";
          n.style.marginTop = "12px";
          n.addEventListener("click", function () { i++; delete card.dataset.done; draw(); });
          card.appendChild(n);
          n.focus();
        });
        wrap.appendChild(b);
      });
      card.appendChild(wrap);
    }
    draw();
    return function () {
      return { score: right, total: pool.length, ok: i >= pool.length && right === pool.length,
               verdict: right + " of " + seen + " right",
               html: missed.length
                 ? "<h4>Terms to come back to</h4>" + D.util.fbList(missed.map(function (t) {
                     return { k: "n", html: "<b>" + esc(t.en) + "</b> · " + esc(t.ar) + " — " + esc(t.gloss) };
                   }))
                 : "<h4>Clean deck</h4><ul><li class=\"y\">Every card right.</li></ul>" };
    };
  });

  /* ============================================================
   * TERMCARDS — the reference list, by section, with pronunciation
   * ============================================================ */
  D.register("termcards", function (stage, spec, api) {
    var opened = {};
    var tabs = E("div", "tagbar");
    stage.appendChild(tabs);
    var list = E("div");
    list.style.cssText = "max-height:56vh;overflow:auto";
    stage.appendChild(list);

    spec.groups.forEach(function (g, gi) {
      var b = E("button", "btn btn-ghost", g.label);
      b.type = "button";
      b.addEventListener("click", function () { show(gi); });
      tabs.appendChild(b);
    });
    function show(gi) {
      opened[gi] = true;
      Array.prototype.slice.call(tabs.children).forEach(function (x, j) {
        x.className = "btn " + (j === gi ? "btn-primary" : "btn-ghost");
      });
      var g = spec.groups[gi];
      list.innerHTML = "";
      var t = E("table", "tbl");
      t.innerHTML = "<thead><tr><th>English (exam term)</th><th>" +
        (g.bilingual ? "العربية" : "Meaning") + "</th></tr></thead>";
      var tb = E("tbody");
      g.rows.forEach(function (r) {
        var tr = E("tr");
        var td1 = E("td");
        td1.appendChild(doc.createTextNode(r.en));
        if (S) td1.appendChild(S.button(r.en, "en", "Pronounce in English"));
        td1.appendChild(E("div", "note", r.gloss));
        var td2 = E("td");
        if (r.ar) {
          td2.appendChild(ar(r.ar));
          if (S) td2.appendChild(S.button(r.ar, "ar", "Pronounce in Arabic"));
        } else {
          var w = E("span", "numunit", "Arabic not in the chapter — awaiting the author");
          td2.appendChild(w);
        }
        tr.appendChild(td1);
        tr.appendChild(td2);
        tb.appendChild(tr);
      });
      t.appendChild(tb);
      list.appendChild(t);
    }
    show(0);
    return function () {
      var n = Object.keys(opened).length;
      return { score: n, total: spec.groups.length, ok: n === spec.groups.length,
               verdict: n + " of " + spec.groups.length + " lists opened",
               html: "<h4>Where these come from</h4><ul><li class=\"o\">" +
                 "The bilingual lists are the chapter's own Term Bridge boxes, reproduced exactly. " +
                 "The last list holds terms the chapter defines in its prose but does not bridge — " +
                 "they are shown in English only, because the chapter gives no Arabic for them.</li></ul>" };
    };
  });
})(window, document);

/* ============================================================
 * TRAPS — the traps this learner has actually failed, by name
 * ============================================================ */
(function (root, doc) {
  "use strict";
  var D = root.Deck, P = root.Progress;
  var E = D.util.E, esc = D.util.esc;

  var NAMES = {
    "primary-user": ["Who counts as a primary user", "s1-1.html",
      "Investors, lenders and other creditors. Managers are users but not primary users, because they can get internal information."],
    "fundamental-vs-enhancing": ["Fundamental versus enhancing qualities", "s1-1.html#s4",
      "Only relevance and faithful representation are fundamental. Comparability, verifiability, timeliness and understandability are enhancing."],
    "dividend-not-expense": ["A dividend is not an expense", "s1-2.html#s4",
      "It reduces retained earnings as a distribution to owners, and never appears in the income statement."],
    "stock-means-shares": ["“Stock” means shares, not inventory", "s1-2.html#s6",
      "In U.S. English and on the exam, stock means shares. The goods are always inventory."],
    "financing-not-revenue": ["Money from owners or lenders is not revenue", "s1-3.html#s4",
      "Issuing shares and borrowing are financing. Neither is income."],
    "equipment-not-expense": ["Buying an asset is not an expense today", "s1-3.html#s10",
      "One asset becomes another. The cost becomes an expense later, through depreciation."],
    "contra-netting": ["Contra accounts sit with the asset they reduce", "s1-3.html#s2",
      "Accumulated depreciation and the allowance have credit balances but are not liabilities. Net them off, never add them."],
    "estihlak-depreciation": ["Three Arabic words, one English word", "s1-3.html#s7",
      "استهلاك, اهتلاك and إهلاك are regional. In English, always say depreciation."],
    "allowance-vs-provision": ["Allowance versus provision", "s1-3.html#s7",
      "An allowance reduces an asset; a provision is a liability. Never say “reserve for bad debts”."],
    "cash-not-trigger": ["Cash is not the trigger", "s1-4.html#s4",
      "Cash received in advance is a liability; cash paid in advance is an asset. Matching is to revenues, not to cash."],
    "four-bodies": ["Four bodies, four jobs", "s1-5.html#s1",
      "FASB writes U.S. GAAP; the SEC has legal authority; the PCAOB sets AUDITING standards; the IASB writes IFRS."]
  };

  D.register("traps", function (stage, spec, api) {
    var failed = P ? P.trapsFailed() : [];
    if (!failed.length) {
      var p = E("div", "bite");
      p.innerHTML = "<b>Nothing logged yet.</b> Every Exam Trap and False-Friend item you get wrong is " +
        "recorded here by name, so you can come back to that one confusion instead of redoing the chapter.";
      stage.appendChild(p);
    } else {
      var list = E("div", "probes");
      failed.forEach(function (t) {
        var n = NAMES[t.trap] || [t.trap, "index.html", ""];
        var card = E("div", "slot");
        var a = E("a", "slot-h", n[0]);
        a.href = n[1];
        card.appendChild(a);
        card.appendChild(E("span", "slot-s", "missed " + t.fails + (t.fails === 1 ? " time" : " times") +
          (t.fixed ? ", since answered correctly" : "")));
        card.appendChild(E("p", "note", n[2]));
        list.appendChild(card);
      });
      stage.appendChild(list);
    }
    return function () {
      var f = P ? P.trapsFailed() : [];
      var open = f.filter(function (t) { return !t.fixed; });
      return { score: f.length - open.length, total: Math.max(1, f.length), ok: open.length === 0,
               verdict: f.length ? (open.length ? open.length + " still open" : "All cleared")
                                 : "Nothing logged",
               html: "<h4>How this works</h4><ul><li class=\"o\">A trap is cleared when you answer an item " +
                 "that tests it correctly. The list is kept in this browser on this computer.</li></ul>" };
    };
  });
})(window, document);
