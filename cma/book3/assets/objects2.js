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
    var idx = 0, posted = {}, run = { a: 0, l: 0, e: 0 }, view = "grid";
    txs.forEach(function (t) { if (t.given) { posted[t.n] = true; apply(t); } });
    for (var gi = 0; gi < txs.length; gi++) { if (!txs[gi].given) { idx = gi; break; } }
    function apply(t) { run.a += t.eff.a; run.l += t.eff.l; run.e += t.eff.e; }

    var wrap = E("div", "post");
    var left = E("div"), right = E("div");
    wrap.appendChild(left); wrap.appendChild(right);
    stage.appendChild(wrap);

    /* ---- left: a general journal page ---- */
    var jrnl = E("div", "jrnl");
    var jhead = E("div", "jrnl-head");
    jhead.appendChild(E("span", "jrnl-title", spec.journalTitle || "General journal"));
    var jwhen = E("span", "jrnl-when", "");
    jhead.appendChild(jwhen);
    jrnl.appendChild(jhead);
    var cols = E("div", "jrow jrow-h");
    ["Date", "Account and explanation", "Debit", "Credit"].forEach(function (c, i) {
      cols.appendChild(E("span", i >= 2 ? "jmoney" : null, c));
    });
    jrnl.appendChild(cols);
    var jbody = E("div", "jrnl-body");
    jrnl.appendChild(jbody);
    var jfoot = E("div", "jrow jrow-t");
    jfoot.appendChild(E("span", null, ""));
    jfoot.appendChild(E("span", null, "Totals"));
    var totD = E("span", "jmoney"), totC = E("span", "jmoney");
    jfoot.appendChild(totD); jfoot.appendChild(totC);
    jrnl.appendChild(jfoot);
    left.appendChild(jrnl);
    var bal = E("p", "jrnl-bal");
    left.appendChild(bal);
    var tray = E("div", "tray");
    left.appendChild(tray);
    var nav = E("div", "jrnl-nav");
    left.appendChild(nav);

    /* ---- right: the equation bar, then the grid or the posted journal ---- */
    var eqbox = E("div", "eqbar");
    right.appendChild(eqbox);
    var tabs = E("div", "tagbar");
    right.appendChild(tabs);
    var panel = E("div");
    right.appendChild(panel);
    [["grid", spec.gridTitle || "Effect grid"], ["book", "The entries so far"]].forEach(function (t) {
      var b = E("button", "btn btn-ghost", t[1]);
      b.type = "button";
      b.dataset.v = t[0];
      b.addEventListener("click", function () { view = t[0]; drawTabs(); drawPanel(); });
      tabs.appendChild(b);
    });
    function drawTabs() {
      Array.prototype.slice.call(tabs.children).forEach(function (b) {
        b.className = "btn " + (b.dataset.v === view ? "btn-primary" : "btn-ghost");
      });
    }

    var dnd, rows;

    function drawEntry() {
      var t = txs[idx];
      jrnl.dataset.entry = String(t.n);
      jwhen.textContent = t.date;
      jbody.innerHTML = "";
      tray.innerHTML = "";
      rows = [];
      dnd = Drag({ tray: tray, live: api.live, change: recount });

      t.entry.forEach(function (ln, i) {
        var r = E("div", "jrow");
        r.appendChild(E("span", "jdate", i === 0 ? t.date : ""));
        var z = E("div", "zone zone-acct");
        z.setAttribute("aria-label", "Account for line " + (i + 1));
        var host = E("span", "drop-host");
        z.appendChild(host);
        r.appendChild(z);
        var d = E("span", "jmoney"), c = E("span", "jmoney");
        r.appendChild(d); r.appendChild(c);
        jbody.appendChild(r);
        dnd.zone({ id: "L" + i, el: z, host: host, cap: 1, label: "line " + (i + 1),
                   ghost: "account" });
        rows.push({ el: r, zone: z, d: d, c: c, i: i });
      });

      /* the explanation line a journal entry always carries */
      var ex = E("div", "jrow jrow-x");
      ex.appendChild(E("span", null, ""));
      var exp = E("span", "jexp", t.text);
      exp.style.gridColumn = "2 / span 3";
      ex.appendChild(exp);
      jbody.appendChild(ex);

      var chips = t.entry.map(function (ln) {
        return { id: ln.account + "|" + ln.amount + "|" + ln.side, label: ln.account,
                 amount: ln.amount, side: ln.side };
      });
      (spec.lures[t.n] || []).forEach(function (x) {
        chips.push({ id: x.name + "|" + x.amount + "|?", label: x.name, amount: x.amount,
                     side: null, why: x.why });
      });
      jbody._chips = chips;
      shuffle(chips).forEach(function (c) { dnd.chip({ id: c.id, label: c.label, amount: c.amount }); });
      recount();
      drawNav();
    }

    function recount() {
      var st = dnd.state(), d = 0, c = 0, filled = 0;
      rows.forEach(function (r) {
        var id = (st["L" + r.i] || [])[0];
        r.d.textContent = ""; r.c.textContent = "";
        r.el.classList.remove("cr");
        if (!id) return;
        filled++;
        var parts = id.split("|");
        var amt = Number(parts[1]), side = txs[idx].entry[r.i].side;
        if (side === "dr") { r.d.textContent = L.money(amt); d += amt; }
        else { r.c.textContent = L.money(amt); c += amt; r.el.classList.add("cr"); }
      });
      totD.textContent = d ? L.money(d) : "";
      totC.textContent = c ? L.money(c) : "";
      var even = d === c && d > 0 && filled === rows.length;
      bal.className = "jrnl-bal" + (even ? " ok" : "");
      bal.textContent = !filled ? "Every line takes one account."
        : even ? "Debits " + L.money(d) + " = credits " + L.money(c) + "."
               : "Debits " + L.money(d) + " against credits " + L.money(c) +
                 " — total debits must equal total credits.";
    }

    function drawNav() {
      nav.innerHTML = "";
      var pv = E("button", "step-btn", "← previous");
      pv.type = "button"; pv.disabled = idx === 0;
      pv.addEventListener("click", function () { idx--; drawEntry(); });
      var nx = E("button", "step-btn", "next →");
      nx.type = "button"; nx.disabled = idx >= txs.length - 1;
      nx.addEventListener("click", function () { idx++; drawEntry(); });
      nav.appendChild(pv); nav.appendChild(nx);
      nav.appendChild(E("span", "numunit", Object.keys(posted).length + " of " + txs.length + " recorded"));
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
        tr.appendChild(f); row.appendChild(tr); eqbox.appendChild(row);
      });
      var ok = Math.abs(run.a - (run.l + run.e)) < 0.001;
      var note = E("div", "eqnote " + (ok ? "ok" : "no"));
      note.textContent = ok ? "Assets " + L.signed(run.a) + " = liabilities " + L.signed(run.l) +
        " + equity " + L.signed(run.e) + "." : "Out by " + L.money(run.a - run.l - run.e);
      eqbox.appendChild(note);
    }

    function drawPanel() {
      panel.innerHTML = "";
      if (view === "grid") { drawGrid(); return; }
      /* the general journal page, as the entries accumulate on it */
      var book = E("div", "jrnl jrnl-book");
      var bh = E("div", "jrnl-head");
      bh.appendChild(E("span", "jrnl-title", spec.journalTitle || "General journal"));
      book.appendChild(bh);
      var cr = E("div", "jrow jrow-h");
      ["Date", "Account and explanation", "Debit", "Credit"].forEach(function (c, i) {
        cr.appendChild(E("span", i >= 2 ? "jmoney" : null, c));
      });
      book.appendChild(cr);
      var bb = E("div", "jrnl-body");
      var any = false;
      txs.forEach(function (t) {
        if (!posted[t.n]) return;
        any = true;
        t.entry.forEach(function (ln, i) {
          var r = E("div", "jrow" + (ln.side === "cr" ? " cr" : ""));
          r.appendChild(E("span", "jdate", i === 0 ? t.date : ""));
          r.appendChild(E("span", "jacct", ln.account));
          r.appendChild(E("span", "jmoney", ln.side === "dr" ? L.money(ln.amount) : ""));
          r.appendChild(E("span", "jmoney", ln.side === "cr" ? L.money(ln.amount) : ""));
          bb.appendChild(r);
        });
        var x = E("div", "jrow jrow-x");
        x.appendChild(E("span", null, ""));
        var xe = E("span", "jexp", t.text);
        xe.style.gridColumn = "2 / span 3";
        x.appendChild(xe);
        bb.appendChild(x);
      });
      if (!any) bb.appendChild(E("p", "note", "Nothing recorded yet."));
      book.appendChild(bb);
      panel.appendChild(book);
    }

    function drawGrid() {
      if (!spec.grid) return;
      var t = E("table", "grid");
      t.innerHTML = "<thead><tr><th>" + (spec.gridTitle || "Effect grid") +
        "</th><th>A</th><th>L</th><th>E</th><th>NI</th><th>Cash flow</th></tr></thead>";
      var tb = E("tbody");
      txs.forEach(function (x) {
        var tr = E("tr", posted[x.n] ? "" : "pending");
        if (posted[x.n] === "fresh") { tr.className = "fresh"; posted[x.n] = true; }
        tr.innerHTML = "<td>" + x.n + ". " + esc(x.short) + "</td>" +
          (posted[x.n] ? ("<td>" + L.signed(x.eff.a) + "</td><td>" + L.signed(x.eff.l) + "</td><td>" +
            L.signed(x.eff.e) + "</td><td>" + L.signed(x.eff.ni) + "</td><td>" +
            (x.eff.cf === "none" ? "none" : x.eff.cf + " " + L.signed(x.eff.cfAmount)) + "</td>")
            : "<td>·</td><td>·</td><td>·</td><td>·</td><td>·</td>");
        tb.appendChild(tr);
      });
      if (Object.keys(posted).length === txs.length) {
        var r = txs.reduce(function (a, x) {
          a.a += x.eff.a; a.l += x.eff.l; a.e += x.eff.e; a.ni += x.eff.ni;
          if (x.eff.cf !== "none") a.c += x.eff.cfAmount;
          return a;
        }, { a: 0, l: 0, e: 0, ni: 0, c: 0 });
        var tt = E("tr", "grid-tot");
        tt.innerHTML = "<td>Totals</td><td>" + L.signed(r.a) + "</td><td>" + L.signed(r.l) + "</td><td>" +
          L.signed(r.e) + "</td><td>" + L.signed(r.ni) + "</td><td>" + L.signed(r.c) + "</td>";
        tb.appendChild(tt);
      }
      t.appendChild(tb);
      panel.appendChild(t);
    }

    drawEntry(); drawEq(); drawTabs(); drawPanel();

    return function () {
      var t = txs[idx], st = dnd.state(), yours = [], ok = true;
      rows.forEach(function (r) {
        var got = (st["L" + r.i] || [])[0];
        var want = t.entry[r.i].account + "|" + t.entry[r.i].amount + "|" + t.entry[r.i].side;
        var good = got === want;
        r.zone.classList.remove("ok", "no");
        r.zone.classList.add(good ? "ok" : "no");
        if (good) return;
        ok = false;
        var c = got ? jbody._chips.filter(function (x) { return x.id === got; })[0] : null;
        if (!got) {
          yours.push({ k: "n", html: "Line " + (r.i + 1) + " is empty. It takes <b>" +
            esc(t.entry[r.i].account) + "</b>, " + (t.entry[r.i].side === "dr" ? "debited" : "credited") +
            " " + L.money(t.entry[r.i].amount) + "." });
        } else if (c && c.side === null) {
          yours.push({ k: "n", html: "<b>" + esc(c.label) + "</b> is not in this entry. " + esc(c.why || "") });
        } else {
          yours.push({ k: "n", html: "Line " + (r.i + 1) + " takes <b>" + esc(t.entry[r.i].account) +
            "</b>, not " + esc(c ? c.label : got) + "." });
        }
      });
      if (ok && !posted[t.n]) { posted[t.n] = "fresh"; apply(t); drawEq(); }
      drawPanel();
      var n = Object.keys(posted).length;
      drawNav();
      var right = t.entry.map(function (ln) {
        return { k: "y", html: (ln.side === "dr" ? "Debit " : "Credit ") + "<b>" + esc(ln.account) +
          " " + L.money(ln.amount) + "</b>" };
      });
      if (ok && spec.logic && spec.logic[t.n]) right.push({ k: "o", html: spec.logic[t.n] });
      if (ok && idx < txs.length - 1) { idx++; drawEntry(); }
      return { score: n, total: txs.length, ok: n === txs.length,
               verdict: ok ? (n === txs.length ? "All " + txs.length + " recorded." :
                              "Recorded. " + n + " of " + txs.length + ".")
                           : "Not recorded — see why",
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
   * BEAM — A = L + E as a physical balance, DRIVEN BY DRAG.
   *
   * WHAT THIS USED TO BE, AND WHY IT CHANGED. Six buttons, one per January
   * transaction. Pressing them all applied them all, and the score was the number of
   * buttons pressed: "All applied, and it still balances." It could not be got wrong,
   * because a transaction the author wrote always balances - so the learner was being
   * marked on having pressed six buttons in any order. It was also the one scene in
   * the chapter the owner named by hand: it listed everything and asked nothing.
   *
   * Now each transaction has to be DRAGGED onto the effect it has on the equation, and
   * the effects are computed from the author's own deltas rather than written out: the
   * sign vector of (assets, liabilities, contributed capital, retained earnings) gives
   * each of the six transactions a distinct pattern, so this is a true one-to-one
   * match with no invented prose and no distractor that is not the author's own
   * arithmetic.
   *
   * The beam still moves as chips land, and it still stays level - that is the lesson,
   * and it is safe to show because EVERY transaction balances. Watching it stay level
   * therefore tells the learner nothing about whether they put the chip in the right
   * place, so the instrument can be honest and informative at the same time.
   * ============================================================ */
  D.register("beam", function (stage, spec, api) {
    var moves = spec.moves || [];

    function sgn(v) { return !v ? 0 : (v > 0 ? 1 : -1); }
    function sig(mv) { return [sgn(mv.a), sgn(mv.l), sgn(mv.cc), sgn(mv.re)].join(","); }
    function arrow(v) { return v > 0 ? "↑" : "↓"; }
    /* The label is the author's element names plus the direction his own numbers
       carry. "No total changes" is the all-zero case, which his reason for that
       transaction states in words: "One asset becomes another. Total assets do not
       change." */
    function label(mv) {
      var parts = [];
      if (sgn(mv.a)) parts.push("Assets " + arrow(mv.a));
      if (sgn(mv.l)) parts.push("Liabilities " + arrow(mv.l));
      if (sgn(mv.cc)) parts.push("Contributed capital " + arrow(mv.cc));
      if (sgn(mv.re)) parts.push("Retained earnings " + arrow(mv.re));
      return parts.length ? parts.join(" · ") : "No total changes";
    }

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
    stage.appendChild(wrap);

    var tray = E("div", "tray tray-wide");
    stage.appendChild(tray);
    var board = E("div", "board board-lanes");
    stage.appendChild(board);

    /* one zone per DISTINCT effect pattern, in the order the author's transactions
       first produce it; two transactions sharing a pattern would share a zone, and
       grading is by pattern rather than by position, so that stays correct */
    var zoneOrder = [], zoneFor = {};
    moves.forEach(function (mv) {
      var s = sig(mv);
      if (zoneFor[s] === undefined) { zoneFor[s] = zoneOrder.length; zoneOrder.push({ s: s, mv: mv }); }
    });

    var dnd = api.Drag({
      tray: tray, live: api.live,
      change: function () { recompute(); }
    });

    zoneOrder.forEach(function (z, i) {
      var slot = E("div", "slot");
      slot.appendChild(E("div", "slot-h", label(z.mv)));
      var zn = E("div", "zone");
      zn.setAttribute("aria-label", "Drop a transaction with the effect: " + label(z.mv));
      var host = E("span", "drop-host");
      zn.appendChild(host);
      slot.appendChild(zn);
      dnd.zone({ id: "p" + i, el: zn, host: host, cap: 99, label: label(z.mv),
                 ghost: "which transaction does this?" });
      board.appendChild(slot);
    });

    api.shuffle(moves.map(function (mv, i) { return i; })).forEach(function (i) {
      dnd.chip({ id: "t" + i, label: moves[i].label });
    });

    /* The beam reflects every transaction the learner has placed ANYWHERE, using the
       author's real deltas. It therefore always balances, which is the point, and it
       leaks nothing about whether the placement was right. */
    function recompute() {
      var state = dnd.state();
      st = { a: 0, l: 0, cc: 0, re: 0, log: [] };
      Object.keys(state).forEach(function (zid) {
        (state[zid] || []).forEach(function (cid) {
          var mv = moves[Number(String(cid).slice(1))];
          if (!mv) return;
          st.a += mv.a; st.l += mv.l; st.cc += mv.cc; st.re += mv.re;
          st.log.push(mv);
        });
      });
      draw(st.log.length ? st.log[st.log.length - 1] : null);
    }

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
      var state = dnd.state(), right = 0, yours = [], rest = [];
      dnd.clearMarks();
      zoneOrder.forEach(function (z, i) {
        var got = state["p" + i] || [];
        var allRight = got.length > 0;
        got.forEach(function (cid) {
          var mv = moves[Number(String(cid).slice(1))];
          if (mv && sig(mv) === z.s) {
            right++;
          } else {
            allRight = false;
            if (mv) {
              yours.push({ k: "n", html: "<b>" + esc(mv.label) + "</b> is not " +
                esc(label(z.mv)) + ". " + mv.why });
            }
          }
        });
        dnd.mark("p" + i, allRight);
      });

      moves.forEach(function (mv, i) {
        var placed = Object.keys(state).some(function (zid) {
          return (state[zid] || []).indexOf("t" + i) >= 0;
        });
        if (!placed) {
          rest.push({ k: "o", html: "<b>" + esc(mv.label) + "</b> is still in the tray: " +
                                    esc(label(mv)) + "." });
        }
      });

      var total = moves.length;
      var bal = Math.abs(st.a - (st.l + st.cc + st.re)) < 0.001;
      return { score: right, total: total, ok: right === total && bal,
               verdict: right === total ? "All six placed, and the equation holds."
                                        : right + " of " + total + " right",
               html: yoursFirst(yours.concat(rest), right === total
                 ? moves.map(function (x) {
                     return { k: "y", html: "<b>" + esc(x.label) + "</b> " + x.why };
                   })
                 : []) };
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

    /* PREDICT, THEN OPEN. This used to be five buttons: pressing each one opened a
       pipe, told you the answer and moved the tank, and the score was the number of
       pipes you had PRESSED - "Every pipe tried." The dividend pipe, which carries the
       chapter's named trap, announced "The income statement refuses it" the moment it
       was touched, so the one thing worth getting wrong could not be got wrong.

       Now each pipe asks for two commitments before it opens: which way it moves
       retained earnings, and whether it travels through the income statement. Both
       answers are in the author's own data - `dir` and `throughIncomeStatement` - so
       nothing here is invented, and the trap is now a decision instead of a caption. */
    var picks = {}, pickEls = {};

    function group(host, pid, field, opts) {
      var g = E("div", "role-pick");
      pickEls[pid] = pickEls[pid] || {};
      pickEls[pid][field] = {};
      opts.forEach(function (o) {
        var b = E("button", "role-btn", o.label);
        b.type = "button";
        b.addEventListener("click", function () {
          picks[pid] = picks[pid] || {};
          picks[pid][field] = o.val;
          Object.keys(pickEls[pid][field]).forEach(function (k) {
            pickEls[pid][field][k].classList.remove("on", "ok", "no");
          });
          b.classList.add("on");
        });
        pickEls[pid][field][String(o.val)] = b;
        g.appendChild(b);
      });
      host.appendChild(g);
    }

    spec.pipes.forEach(function (p) {
      var row = E("div", "valve-ask" + (p.special ? " special" : ""));
      row.appendChild(E("div", "slot-h", p.label));
      group(row, p.id, "dir", [
        { label: "↑ raises retained earnings", val: 1 },
        { label: "↓ lowers retained earnings", val: -1 }
      ]);
      group(row, p.id, "is", [
        { label: "through the income statement", val: 1 },
        { label: "not through the income statement", val: 0 }
      ]);
      valves.appendChild(row);
    });

    function draw() {
      var pct = Math.max(4, Math.min(100, level / spec.max * 100));
      fluid.style.height = pct + "%";
      val.textContent = m(level);
    }
    draw();

    return function () {
      var right = 0, total = spec.pipes.length * 2, yours = [];
      level = spec.start;

      spec.pipes.forEach(function (p) {
        var got = picks[p.id] || {};
        var wantDir = p.dir > 0 ? 1 : -1;
        var wantIs = p.throughIncomeStatement === false ? 0 : 1;
        var dOk = got.dir === wantDir, iOk = got.is === wantIs;
        if (dOk) right++;
        if (iOk) right++;
        ["dir", "is"].forEach(function (f) {
          var v = got[f];
          if (v === undefined) return;
          var el = pickEls[p.id][f][String(v)];
          if (!el) return;
          el.classList.remove("on");
          el.classList.add((f === "dir" ? dOk : iOk) ? "ok" : "no");
        });
        if (!dOk || !iOk) {
          yours.push({ k: "n", html: "<b>" + esc(p.label) + "</b> " + p.why });
        }
        /* now the pipes open: the tank moves and the income statement refuses the one
           distribution, which is the reveal the learner has earned */
        level += p.amount * p.dir;
        if (wantIs === 0) {
          isPanel.classList.add("reject");
          setTimeout(function () { isPanel.classList.remove("reject"); }, 360);
          rejected = true;
        }
        tried[p.id] = true;
      });
      draw();
      say.style.display = "";
      say.innerHTML = "Retained earnings move from " + m(spec.start) + " to " + m(level) + ".";

      return { score: right, total: total, ok: right === total,
               verdict: right === total ? "Every pipe predicted correctly."
                                        : right + " of " + total + " right",
               html: yoursFirst(yours, right === total ? spec.pipes.map(function (p) {
                 return { k: p.throughIncomeStatement === false ? "n" : "y",
                          html: "<b>" + esc(p.label) + "</b> " + p.why };
               }) : []) };
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
   * SWITCH — the U.S. GAAP / IFRS names, MATCHED before they are shown.
   *
   * WHAT THIS USED TO BE. One button. Pressing it swapped every name on the statement
   * from U.S. GAAP to IFRS and back, and the score was whether you had pressed it:
   * `flips ? 1 : 0`, verdict "Seen both". Two of these shipped, and between them they
   * carried ten name pairs the exam asks about - none of which the learner was ever
   * asked to produce.
   *
   * Now the pairs are matched first. The author's own `pairs` array is the answer key,
   * so every chip and every slot is his text, and each wrong name sits next to the
   * right one in the feedback. The toggle survives as the REVEAL: it unlocks once the
   * matching is checked, and reading the whole statement in both namings is then worth
   * something, because the learner has already committed.
   * ============================================================ */
  D.register("switch", function (stage, spec, api) {
    var pairs = spec.pairs || [];
    var checked = false;

    /* ---- the decision: match each U.S. GAAP name to its IFRS name ---- */
    var tray = E("div", "tray tray-wide");
    stage.appendChild(tray);
    var board = E("div", "board board-lanes");
    stage.appendChild(board);
    var dnd = api.Drag({ tray: tray, live: api.live });

    pairs.forEach(function (p, i) {
      var slot = E("div", "slot");
      slot.appendChild(E("div", "slot-h", p.us));
      var zn = E("div", "zone");
      zn.setAttribute("aria-label", "Drop the IFRS name for " + p.us);
      var host = E("span", "drop-host");
      zn.appendChild(host);
      slot.appendChild(zn);
      dnd.zone({ id: "n" + i, el: zn, host: host, cap: 1, label: p.us,
                 ghost: "the IFRS name" });
      board.appendChild(slot);
    });
    api.shuffle(pairs.map(function (p, i) { return i; })).forEach(function (i) {
      dnd.chip({ id: "i" + i, label: pairs[i].ifrs });
    });

    var ifrs = false, flips = 0;
    var head = E("div");
    head.style.cssText = "display:flex;gap:10px;align-items:center;margin-bottom:12px;flex-wrap:wrap";
    var b = E("button", "btn btn-ghost", "Show the IFRS names →");
    b.type = "button";
    b.disabled = true;
    head.appendChild(b);
    var tagEl = E("span", "numunit", "check your matching first, then read it both ways");
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
      var st = dnd.state(), right = 0, yours = [];
      dnd.clearMarks();
      pairs.forEach(function (p, i) {
        var got = (st["n" + i] || [])[0];
        var ok = got === "i" + i;
        dnd.mark("n" + i, ok);
        if (ok) { right++; return; }
        var line = "<b>" + esc(p.us) + "</b> is <b>" + esc(p.ifrs) + "</b> under IFRS.";
        if (got) {
          var j = Number(String(got).slice(1));
          line = "<b>" + esc(p.us) + "</b> is not " + esc(pairs[j].ifrs) + " — it is <b>" +
                 esc(p.ifrs) + "</b>.";
        }
        yours.push({ k: "n", html: line });
      });

      /* the reveal is earned: reading the statement in both namings is only useful
         once the learner has committed to an answer */
      checked = true;
      b.disabled = false;
      if (!flips) tagEl.textContent = "showing U.S. GAAP — the names the exam uses";

      return { score: right, total: pairs.length, ok: right === pairs.length,
               verdict: right === pairs.length
                 ? "All " + pairs.length + " matched — now read it both ways."
                 : right + " of " + pairs.length + " right",
               html: yoursFirst(yours, right === pairs.length
                 ? pairs.map(function (p) {
                     return { k: "y", html: "<b>" + esc(p.us) + "</b> → " + esc(p.ifrs) };
                   })
                 : []) };
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

    /* PREDICT AT EVERY STOP, BEFORE THE SLIDER REVEALS IT. This used to score the
       number of stops the learner had SEEN - "You have seen the whole timeline." -
       so dragging the slider from end to end scored full marks. The whole point of
       the figure is that the same sale falls in a different year on the two bases,
       and that judgement was never asked for.

       The answer key is already in the author's data and needs nothing added: a stop
       where a basis records nothing has an EMPTY `text`. So for each stop the learner
       decides, for each basis, "records something" or "records nothing", and the
       slider then shows what it was. */
    var ask = E("div", "tl-asks");
    stage.appendChild(ask);
    var picks = {}, pickEls = {};

    spec.stops.forEach(function (s, i) {
      var row = E("div", "valve-ask");
      row.appendChild(E("div", "slot-h", s.when));
      [["accrual", "Accrual basis"], ["cash", "Cash basis"]].forEach(function (basis) {
        var lab = E("div", "tl-ask-basis", basis[1]);
        row.appendChild(lab);
        var g = E("div", "role-pick");
        pickEls[i] = pickEls[i] || {};
        pickEls[i][basis[0]] = {};
        [["records something", 1], ["records nothing", 0]].forEach(function (o) {
          var b = E("button", "role-btn", o[0]);
          b.type = "button";
          b.addEventListener("click", function () {
            picks[i] = picks[i] || {};
            picks[i][basis[0]] = o[1];
            Object.keys(pickEls[i][basis[0]]).forEach(function (k) {
              pickEls[i][basis[0]][k].classList.remove("on", "ok", "no");
            });
            b.classList.add("on");
          });
          pickEls[i][basis[0]][String(o[1])] = b;
          g.appendChild(b);
        });
        row.appendChild(g);
      });
      ask.appendChild(row);
    });

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
      var right = 0, total = spec.stops.length * 2, yours = [];
      spec.stops.forEach(function (s, i) {
        var got = picks[i] || {};
        ["accrual", "cash"].forEach(function (basis) {
          var want = s[basis].text ? 1 : 0;
          var ok = got[basis] === want;
          if (ok) right++;
          if (got[basis] !== undefined) {
            var el = pickEls[i][basis][String(got[basis])];
            if (el) { el.classList.remove("on"); el.classList.add(ok ? "ok" : "no"); }
          }
        });
        var bad = got.accrual !== (s.accrual.text ? 1 : 0) || got.cash !== (s.cash.text ? 1 : 0);
        if (bad) yours.push({ k: "n", html: "<b>" + esc(s.when) + "</b> " + s.note });
      });
      return { score: right, total: total, ok: right === total,
               verdict: right === total ? "Every stop called correctly on both bases."
                                        : right + " of " + total + " right",
               html: yoursFirst(yours, right === total ? spec.stops.map(function (s) {
                 return { k: "y", html: "<b>" + esc(s.when) + "</b> " + s.note };
               }) : []) };
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

    /* THE LAYOUT MUST NOT BE THE ANSWER. The author lists the four statements in the
       order the figure draws them, and in that order the two links join port 1 to
       port 2 and port 3 to port 4 - so "connect each pair as they come down the page"
       was the whole answer, and clicking every port in turn solved the exercise
       without reading a label.
       So the cards are arranged so that no two consecutive ports are linked. This is
       computed from the author's own links rather than hand-ordered, which means it
       stays true if a card or a link is ever added. */
    var cardOrder = (function (cards, links) {
      function linked(p, q) {
        return links.some(function (l) {
          return (l.from === p && l.to === q) || (l.from === q && l.to === p);
        });
      }
      function portsOf(c) { return (c.ports || []).map(function (p) { return p.id; }); }
      var best = cards.slice(), bestBad = Infinity;
      /* a small deterministic search: rotations of a pass that pushes linked
         neighbours apart. Four cards make this trivial and it never runs long. */
      for (var start = 0; start < cards.length; start++) {
        var rest = cards.slice(), out = [rest.splice(start, 1)[0]];
        while (rest.length) {
          var tailPorts = portsOf(out[out.length - 1]);
          var pickIdx = 0;
          for (var i = 0; i < rest.length; i++) {
            var ps = portsOf(rest[i]);
            var clash = tailPorts.some(function (t) {
              return ps.some(function (p) { return linked(t, p); });
            });
            if (!clash) { pickIdx = i; break; }
          }
          out.push(rest.splice(pickIdx, 1)[0]);
        }
        var bad = 0;
        for (var j = 1; j < out.length; j++) {
          var a = portsOf(out[j - 1]), b = portsOf(out[j]);
          if (a.some(function (x) { return b.some(function (y) { return linked(x, y); }); })) bad++;
        }
        if (bad < bestBad) { bestBad = bad; best = out; }
        if (bad === 0) break;
      }
      return best;
    })(spec.cards || [], spec.links || []);

    cardOrder.forEach(function (c) {
      var card = E("div", "wire-card");
      card.appendChild(E("h4", null, c.title));
      card.appendChild(E("p", null, c.sub));
      (c.ports || []).forEach(function (p) {
        /* a real <button>: it was a div with a click handler, which took it off the
           keyboard's path in all but name and made it invisible to the check that
           every instrument exposes an operable control */
        var el = E("button", "port");
        el.type = "button";
        el.appendChild(E("span", "pin"));
        el.appendChild(E("span", null, p.label));
        el.addEventListener("click", function () { tap(p.id, el); });
        ports[p.id] = { el: el, spec: p };
        card.appendChild(el);
      });
      wrap.appendChild(card);
    });

    /* ANY CONNECTION CAN BE MADE, AND IT IS KEPT. This used to refuse a wrong pair -
       it flashed red, said "Those two do not connect." and dropped it - and then
       scored the number of links completed: "Both links wired." That is a scene you
       finish by trying every pair, which is not the judgement the figure is about, and
       the learner was never on record as having been wrong.

       Now a wrong wire is made, drawn and marked, and an extra connection costs the
       exercise. `made` is the learner's answer; spec.links is the author's key. */
    var made = [];

    function linkFor(a, b) {
      return spec.links.filter(function (l) {
        return (l.from === a && l.to === b) || (l.from === b && l.to === a);
      })[0];
    }
    function connected(id) {
      return made.filter(function (c) { return c.a === id || c.b === id; })[0];
    }

    function tap(id, el) {
      var existing = connected(id);
      if (existing) {                       /* tapping a wired port unmakes its wire */
        made = made.filter(function (c) { return c !== existing; });
        [existing.a, existing.b].forEach(function (p) {
          ports[p].el.classList.remove("wired", "no", "ok");
        });
        sel = null;
        redraw();
        api.live.textContent = "Connection removed.";
        return;
      }
      if (!sel) { sel = id; el.classList.add("sel"); return; }
      if (sel === id) { sel = null; el.classList.remove("sel"); return; }
      var a = sel, b = id;
      ports[a].el.classList.remove("sel");
      made.push({ a: a, b: b });
      ports[a].el.classList.add("wired");
      ports[b].el.classList.add("wired");
      sel = null;
      redraw();
      api.live.textContent = "Connected. Check your answer when every link you believe in is made.";
    }

    function redraw(marks) {
      svg.innerHTML = "";
      made.forEach(function (c) {
        var r1 = ports[c.a].el.getBoundingClientRect();
        var r2 = ports[c.b].el.getBoundingClientRect();
        var rw = wrap.getBoundingClientRect();
        var x1 = r1.right - rw.left, y1 = r1.top + r1.height / 2 - rw.top;
        var x2 = r2.left - rw.left, y2 = r2.top + r2.height / 2 - rw.top;
        var mid = (x1 + x2) / 2;
        var path = doc.createElementNS("http://www.w3.org/2000/svg", "path");
        var cls = "wire-path";
        if (marks) cls += linkFor(c.a, c.b) ? " is-ok" : " is-no";
        path.setAttribute("class", cls);
        path.setAttribute("d", "M " + x1 + " " + y1 + " C " + mid + " " + y1 + ", " + mid + " " + y2 +
          ", " + x2 + " " + y2);
        svg.appendChild(path);
      });
    }

    return function () {
      var right = 0, yours = [], missed = [];
      made.forEach(function (c) {
        var l = linkFor(c.a, c.b);
        [c.a, c.b].forEach(function (p) {
          ports[p].el.classList.remove("wired");
          ports[p].el.classList.add(l ? "ok" : "no");
        });
        if (l) {
          right++;
        } else {
          yours.push({ k: "n", html: "<b>" + esc(ports[c.a].spec.label) + "</b> and <b>" +
            esc(ports[c.b].spec.label) + "</b> are not one of the two links the figure draws." });
        }
      });
      spec.links.forEach(function (l) {
        var got = made.filter(function (c) { return linkFor(c.a, c.b) === l; })[0];
        if (!got) missed.push({ k: "o", html: l.why });
      });
      redraw(true);

      var extra = made.length - right;
      return { score: right, total: spec.links.length,
               ok: right === spec.links.length && extra === 0,
               verdict: (right === spec.links.length && extra === 0)
                 ? "Both links made, and nothing else."
                 : right + " of " + spec.links.length + " right" +
                   (extra > 0 ? ", " + extra + " that should not be there" : ""),
               html: yoursFirst(yours, missed.length ? missed : spec.links.map(function (l) {
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
   * TABLE — F01-02 as a MATCHING GRID.
   *
   * WHAT THIS USED TO BE, AND WHY IT CHANGED. It used to be seven buttons: click a
   * reader and a panel told you their decision, their question and the statements they
   * use. Its score was the number of seats you had READ and its verdict was "Every seat
   * read." Reading all seven scored full marks without one judgement, and the three
   * primary users were already tinted and labelled "PRIMARY USER" before you touched
   * anything - so the only thing the exercise tested was given away in the picture.
   *
   * Now the reader's own question has to be matched to them, and the primary users have
   * to be named. Fourteen decisions, every one of them the author's data: the questions
   * are his `q`, the two labels are the ones this scene already printed, and the
   * feedback is his `decision` and `stmts`. Nothing new is claimed.
   * ============================================================ */
  D.register("table", function (stage, spec, api) {
    var seats = spec.seats || [];
    var tray = E("div", "tray tray-wide");
    stage.appendChild(tray);
    var grid = E("div", "board board-lanes");
    stage.appendChild(grid);

    var dnd = api.Drag({ tray: tray, live: api.live });
    var role = {}, roleEls = {};

    seats.forEach(function (s, i) {
      var slot = E("div", "slot");
      slot.appendChild(E("div", "slot-h", s.user));
      var z = E("div", "zone");
      z.setAttribute("aria-label", "Drop this reader's key question onto " + s.user);
      var host = E("span", "drop-host");
      z.appendChild(host);
      slot.appendChild(z);
      dnd.zone({ id: "u" + i, el: z, host: host, cap: 1, label: s.user,
                 ghost: "the question this reader asks" });

      /* The second decision on the same reader. The two labels are this scene's own. */
      var pick = E("div", "role-pick");
      roleEls[i] = {};
      [["primary", "PRIMARY USER"], ["other", "another reader"]].forEach(function (p) {
        var b = E("button", "role-btn", p[1]);
        b.type = "button";
        b.addEventListener("click", function () {
          role[i] = p[0];
          Object.keys(roleEls[i]).forEach(function (k) {
            roleEls[i][k].classList.remove("on", "ok", "no");
          });
          b.classList.add("on");
        });
        roleEls[i][p[0]] = b;
        pick.appendChild(b);
      });
      slot.appendChild(pick);
      grid.appendChild(slot);
    });

    /* questions enter the tray shuffled, so position carries no hint */
    api.shuffle(seats.map(function (s, i) { return i; })).forEach(function (i) {
      dnd.chip({ id: "q" + i, label: seats[i].q });
    });

    return function () {
      var st = dnd.state(), right = 0, yours = [], missed = [];
      dnd.clearMarks();
      seats.forEach(function (s, i) {
        var got = (st["u" + i] || [])[0];
        var qok = got === "q" + i;
        dnd.mark("u" + i, qok);
        if (qok) right++;

        var want = s.primary ? "primary" : "other";
        var rok = role[i] === want;
        if (rok) right++;
        if (role[i] && roleEls[i][role[i]]) {
          roleEls[i][role[i]].classList.remove("on");
          roleEls[i][role[i]].classList.add(rok ? "ok" : "no");
        }

        if (qok && rok) return;
        var line = "<b>" + esc(s.user) + "</b> ";
        if (!qok) {
          line += "asks: " + esc(s.q) + " ";
          if (got) {
            var j = Number(String(got).slice(1));
            line += "(you gave them: " + esc(seats[j].q) + ") ";
          }
        }
        if (!rok) {
          line += s.primary
            ? "is a <b>primary user</b>. "
            : "is a reader, but <b>not a primary user</b> of general-purpose statements. ";
        }
        line += "Decision: " + esc(s.decision) + ". Statements used most: " + esc(s.stmts) + ".";
        (role[i] || got ? yours : missed).push({ k: "n", html: line });
      });

      var total = seats.length * 2;
      return { score: right, total: total, ok: right === total,
               verdict: right === total ? "All seven readers placed."
                                        : right + " of " + total + " right",
               html: yoursFirst(yours, missed.length ? missed : (right === total
                 ? seats.filter(function (s) { return s.primary; }).map(function (s) {
                     return { k: "y", html: "<b>" + esc(s.user) + "</b> is a primary user: " +
                                            esc(s.q) };
                   })
                 : [])) };
    };
  });

  /* ============================================================
   * SHELF — the ASC, by topic number
   * ============================================================ */
  /* SELECTING EVERYTHING MUST NOT PASS. This used to tell the learner, at the instant
     of the tap, whether a volume was one of the two: a right tap turned green and a
     wrong tap flashed and was discarded. The score counted only the right taps, so
     tapping all eight scored two out of two and the verdict was full marks. The
     exercise was "press every button", and the two topic numbers it wanted the learner
     to know were handed over one tap at a time.

     Now a tap SELECTS without judging. Grading compares the selected set with the
     author's two, and a volume selected wrongly costs the exercise. */
  D.register("shelf", function (stage, spec, api) {
    var picked = {}, btns = {};
    var row = E("div");
    row.style.cssText = "display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px";
    spec.volumes.forEach(function (v) {
      var b = E("button", "chip");
      b.type = "button";
      b.style.cssText = "cursor:pointer;min-width:62px;justify-content:center;font-family:var(--mono)";
      b.appendChild(E("span", null, "ASC " + v.n));
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        picked[v.n] = !picked[v.n];
        b.classList.toggle("picked", !!picked[v.n]);
        b.setAttribute("aria-pressed", picked[v.n] ? "true" : "false");
        api.live.textContent = "ASC " + v.n + (picked[v.n] ? " selected." : " unselected.");
      });
      btns[v.n] = b;
      row.appendChild(b);
    });
    stage.appendChild(E("p", "note", spec.ask));
    stage.appendChild(row);
    var note = E("div", "bite");
    note.innerHTML = spec.intro;
    stage.appendChild(note);

    return function () {
      var want = spec.volumes.filter(function (v) { return v.topic; });
      var right = 0, wrong = 0, yours = [];
      spec.volumes.forEach(function (v) {
        var sel = !!picked[v.n], should = !!v.topic;
        var b = btns[v.n];
        b.classList.remove("picked");
        if (sel) b.classList.add(should ? "is-ok" : "is-no");
        if (sel && should) right++;
        if (sel && !should) {
          wrong++;
          yours.push({ k: "n", html: "<b>ASC " + v.n + "</b> — " + esc(spec.missWhy) });
        }
      });
      return { score: right, total: want.length, ok: right === want.length && wrong === 0,
               verdict: (right === want.length && wrong === 0)
                 ? "Both topics found, and nothing else."
                 : right + " of " + want.length + " found" +
                   (wrong ? ", " + wrong + " that the chapter does not name" : ""),
               html: yoursFirst(yours, want.map(function (v) {
                 return { k: "y", html: "<b>ASC " + v.n + "</b> covers " + esc(v.topic) + ". " +
                                        esc(v.why || "") };
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
        if (root.Icons) {
          var ic = root.Icons.icon(r.en);
          if (ic) td1.appendChild(ic);
        }
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

    /* A RECALL DRILL, IN BOTH DIRECTIONS. The lists above are the term bank and stay
       exactly as they were - browsable, pronounceable, the author's Term Bridge boxes
       reproduced. What changed is the marking: this page used to score the number of
       LISTS OPENED, so clicking the tabs along the top scored full marks on the
       chapter's entire vocabulary.
       The drill below draws on the bridged rows only, and asks each one in one of the
       two directions. Every option is a term the author printed in this chapter; no
       distractor is invented, which is also why the options come from the same group. */
    var bridged = [];
    spec.groups.forEach(function (g) {
      if (!g.bilingual) return;
      (g.rows || []).forEach(function (r) { if (r.ar) bridged.push(r); });
    });

    var drill = [];
    if (bridged.length >= 4) {
      var pick = shuffle(bridged).slice(0, Math.min(8, bridged.length));
      pick.forEach(function (r, i) {
        var toAr = i % 2 === 1;                       /* alternate the direction */
        var pool = bridged.filter(function (x) { return x.en !== r.en; });
        var opts = shuffle(pool).slice(0, 3).concat([r]);
        drill.push({ row: r, toAr: toAr, opts: shuffle(opts) });
      });
    }

    var dBox = E("div", "drill");
    if (drill.length) {
      dBox.appendChild(E("div", "slot-h", "Recall, both ways"));
      drill.forEach(function (q, qi) {
        var card = E("div", "drill-q");
        var prompt = E("div", "drill-prompt");
        if (q.toAr) {
          prompt.appendChild(doc.createTextNode(q.row.en));
          prompt.appendChild(E("span", "numunit", " — which Arabic term?"));
        } else {
          prompt.appendChild(ar(q.row.ar));
          prompt.appendChild(E("span", "numunit", " — which English term?"));
        }
        card.appendChild(prompt);
        var ch = E("div", "choices");
        q.opts.forEach(function (o, oi) {
          var lab = E("label", "choice");
          var inp = E("input");
          inp.type = "radio";
          inp.name = "d-" + spec.id + "-" + qi;
          inp.value = String(oi);
          lab.appendChild(inp);
          if (q.toAr) lab.appendChild(ar(o.ar));
          else lab.appendChild(E("span", null, o.en));
          lab.dataset.i = String(oi);
          ch.appendChild(lab);
        });
        card.appendChild(ch);
        q.box = ch;
        dBox.appendChild(card);
      });
      stage.appendChild(dBox);
    }

    return function () {
      var right = 0, yours = [];
      drill.forEach(function (q) {
        var pick = -1;
        Array.prototype.slice.call(q.box.children).forEach(function (l) {
          if (l.querySelector("input").checked) pick = Number(l.dataset.i);
          l.classList.remove("ok", "no");
        });
        Array.prototype.slice.call(q.box.children).forEach(function (l) {
          var i = Number(l.dataset.i);
          var isRight = q.opts[i].en === q.row.en;
          if (i === pick || isRight) l.classList.add(isRight ? "ok" : "no");
        });
        var ok = pick >= 0 && q.opts[pick].en === q.row.en;
        if (ok) { right++; return; }
        yours.push({ k: "n", html: "<b>" + esc(q.row.en) + "</b> — " + esc(q.row.ar) +
                                   ". " + esc(q.row.gloss || "") });
      });
      var total = drill.length;
      return { score: right, total: total, ok: total > 0 && right === total,
               verdict: total === 0 ? "No bridged terms to drill"
                 : (right === total ? "Every term recalled, both ways."
                                    : right + " of " + total + " right"),
               html: yoursFirst(yours, [{ k: "o",
                 html: "The bilingual lists are the chapter's own Term Bridge boxes, reproduced " +
                       "exactly. The last list holds terms the chapter defines in its prose but " +
                       "does not bridge — they are shown in English only, because the chapter " +
                       "gives no Arabic for them." }]) };
    };
  });
})(window, document);

/* ============================================================
 * TRAPS — the traps this learner has actually failed, by name
 * ============================================================ */
(function (root, doc) {
  "use strict";
  var D = root.Deck, P = root.Progress;
  /* This file holds THREE separate IIFEs, and this third one aliased only E and esc
     because `traps` needed nothing else. A renderer appended at the end of the file
     therefore lands here, not in the first block, and reaching for yoursFirst threw
     "yoursFirst is not defined" at the moment the learner pressed Check - invisible
     until the scene was actually graded. The full set is aliased here now. */
  var E = D.util.E, esc = D.util.esc, ar = D.util.ar, shuffle = D.util.shuffle,
      Drag = D.util.Drag, fbList = D.util.fbList, yoursFirst = D.util.yoursFirst;

  /* Each chapter names its own traps: the slug a scene logs, the page it was taught on, and the
     one sentence that fixes the confusion. A chapter supplies window.TRAP_NAMES in its data/toc.js;
     Chapter 1's map is the default, so Chapter 1 needs no toc.js and does not change. */
  var CH01_NAMES = {
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
    var NAMES = root.TRAP_NAMES || CH01_NAMES;
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

  /* ============================================================
   * LADDER — likelihood on one axis, the treatment it forces on the other.
   *
   * Section 2.4 states the rule as three sentences: a probable, estimable loss must be
   * accrued; if it is only reasonably possible, the company discloses it in a note; if
   * it is remote, the company does nothing. The section tested that rule with two sorts
   * over ITEMS - which item is a liability, which is disclosed - and never once asked
   * for the rule itself, which is the thing the exam asks for.
   *
   * The rungs are the author's likelihoods in his order, highest first, and the chips
   * are his treatments. Dropping a treatment on a rung is the decision; the rung it
   * lands on lights so the ladder reads as a ladder.
   * ============================================================ */
  D.register("ladder", function (stage, spec, api) {
    var rungs = spec.rungs || [];
    var tray = E("div", "tray tray-wide");
    stage.appendChild(tray);
    var board = E("div", "ladder");
    stage.appendChild(board);
    var dnd = api.Drag({ tray: tray, live: api.live });

    rungs.forEach(function (r, i) {
      var row = E("div", "slot lad-rung");
      row.appendChild(E("div", "slot-h", r.likelihood));
      if (r.sub) row.appendChild(E("span", "slot-s", r.sub));
      var zn = E("div", "zone");
      zn.setAttribute("aria-label", "Drop the treatment for " + r.likelihood);
      var host = E("span", "drop-host");
      zn.appendChild(host);
      row.appendChild(zn);
      dnd.zone({ id: "r" + i, el: zn, host: host, cap: 1, label: r.likelihood,
                 ghost: "what does the company do?" });
      board.appendChild(row);
    });
    api.shuffle(rungs.map(function (r, i) { return i; })).forEach(function (i) {
      dnd.chip({ id: "t" + i, label: rungs[i].treatment });
    });

    return function () {
      var st = dnd.state(), right = 0, yours = [];
      dnd.clearMarks();
      rungs.forEach(function (r, i) {
        var got = (st["r" + i] || [])[0];
        var ok = got === "t" + i;
        dnd.mark("r" + i, ok);
        if (ok) { right++; return; }
        yours.push({ k: "n", html: "<b>" + esc(r.likelihood) + "</b> — " + r.why });
      });
      return { score: right, total: rungs.length, ok: right === rungs.length,
               verdict: right === rungs.length ? "All three treatments on the right rung."
                                               : right + " of " + rungs.length + " right",
               html: yoursFirst(yours, right === rungs.length
                 ? rungs.map(function (r) {
                     return { k: "y", html: "<b>" + esc(r.likelihood) + "</b> — " + r.why };
                   })
                 : []) };
    };
  });

  /* ============================================================
   * CYCLE — the operating cycle, and which test it makes you use.
   *
   * Chapter 2 turns on one decision that nothing in it asked the learner to make: an
   * item is current if it will be realised within ONE YEAR or within the OPERATING
   * CYCLE, whichever is longer. The chapter gives Orontes's cycle as 32 days to sell
   * inventory plus 34 days to collect, 66 in total, and concludes that because the
   * cycle is shorter than a year, Orontes uses one year.
   *
   * So the learner builds the cycle from its two parts and then says which test
   * governs. Both sliders have to be right AND the conclusion drawn from them, which
   * is why a learner who sets 66 by accident on the wrong two numbers does not pass.
   * ============================================================ */
  D.register("cycle", function (stage, spec, api) {
    var legs = spec.legs || [];
    var vals = legs.map(function () { return 0; });
    var wrap = E("div", "cycle");
    stage.appendChild(wrap);

    var rail = E("div", "cyc-rail");
    wrap.appendChild(rail);
    var segs = legs.map(function (p) {
      var s = E("div", "cyc-seg");
      s.appendChild(E("span", "cyc-seg-k", p.label));
      var v = E("span", "cyc-seg-v", "0");
      s.appendChild(v);
      rail.appendChild(s);
      return { el: s, v: v };
    });
    var yearMark = E("div", "cyc-year", "one year · 365 days");
    wrap.appendChild(yearMark);
    var totalEl = E("p", "cyc-total");
    wrap.appendChild(totalEl);

    legs.forEach(function (p, i) {
      var row = E("div", "cyc-ctl");
      row.appendChild(E("span", "cyc-ctl-k", p.label));
      var sl = E("input");
      sl.type = "range";
      sl.className = "tl-slider";
      sl.min = "0";
      sl.max = String(spec.maxDays || 120);
      sl.step = "1";
      sl.value = "0";
      sl.setAttribute("aria-label", p.label + ", in days");
      sl.addEventListener("input", function () { vals[i] = Number(sl.value); draw(); });
      row.appendChild(sl);
      wrap.appendChild(row);
    });

    /* the conclusion the two numbers force */
    var ask = E("div", "role-pick");
    var rules = [
      { id: "year", label: "Classify by one year" },
      { id: "cycle", label: "Classify by the operating cycle" }
    ];
    var chose = null, ruleEls = {};
    rules.forEach(function (r) {
      var b = E("button", "role-btn", r.label);
      b.type = "button";
      b.addEventListener("click", function () {
        chose = r.id;
        rules.forEach(function (x) { ruleEls[x.id].classList.remove("on", "ok", "no"); });
        b.classList.add("on");
      });
      ruleEls[r.id] = b;
      ask.appendChild(b);
    });
    wrap.appendChild(E("div", "slot-s", spec.ask || "Which test does that cycle make you use?"));
    wrap.appendChild(ask);

    function total() {
      return vals.reduce(function (a, b) { return a + b; }, 0);
    }
    function draw() {
      var t = total();
      segs.forEach(function (s, i) {
        /* A BASE OF ONE, not 0.0001. With flex-grow proportional to the raw value, a
           leg at zero collapsed to its min-width and the rail read as two stray boxes
           before the learner had touched anything. Adding a base keeps every leg
           visible at rest and still makes the rail proportional once there are days
           in it. */
        s.el.style.flexGrow = String(1 + vals[i]);
        s.v.textContent = vals[i] + "d";
        s.el.classList.toggle("is-zero", vals[i] === 0);
      });
      totalEl.textContent = t + " days in total — " +
        (t > 365 ? "longer than a year" : "shorter than a year");
      totalEl.className = "cyc-total " + (t > 365 ? "is-long" : "is-short");
      yearMark.style.opacity = t ? "1" : ".45";
    }
    draw();

    return function () {
      var right = 0, yours = [];
      legs.forEach(function (p, i) {
        var ok = vals[i] === p.days;
        if (ok) right++;
        segs[i].el.classList.remove("ok", "no");
        segs[i].el.classList.add(ok ? "ok" : "no");
        if (!ok) yours.push({ k: "n", html: "<b>" + esc(p.label) + "</b> is " + p.days +
                                            " days. " + (p.why || "") });
      });
      var rOk = chose === spec.rule;
      if (rOk) right++;
      if (chose && ruleEls[chose]) {
        ruleEls[chose].classList.remove("on");
        ruleEls[chose].classList.add(rOk ? "ok" : "no");
      }
      if (!rOk) yours.push({ k: "n", html: spec.ruleWhy });

      var total_ = legs.length + 1;
      return { score: right, total: total_, ok: right === total_,
               verdict: right === total_
                 ? "The cycle is " + total() + " days, and the right test follows."
                 : right + " of " + total_ + " right",
               html: yoursFirst(yours, right === total_
                 ? [{ k: "y", html: spec.ruleWhy }] : []) };
    };
  });
})(window, document);
