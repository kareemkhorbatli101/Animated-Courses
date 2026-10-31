/* figures.js — the chapter's thirteen figures, rebuilt as things the learner can work.
 *
 * Two techniques, chosen per figure rather than uniformly:
 *
 *   - Inline SVG for the three true diagrams (the roadmap, the statement-link
 *     flow, the summary map), where geometry carries the meaning.
 *   - HTML + CSS "paper" for the statements, grids and maps. A financial
 *     statement built as HTML takes a dropped HTML chip natively, recomputes
 *     its subtotals, prints, scales, reads correctly to a screen reader and
 *     needs no image file. SVG foreignObject would do none of that as well.
 *
 * Mayer's coherence principle is the test for every element here: if it carries
 * no information, it is not drawn.
 */
(function (root, doc) {
  "use strict";

  var L = root.LEDGER, S = root.Speech;
  var E = function (tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  var SVGNS = "http://www.w3.org/2000/svg";
  function svg(tag, attrs) {
    var n = doc.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function reduced() {
    try { return root.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  }

  var BUILDERS = {};
  var DROPS = {};

  /* ================================================================
   * F01-01 — Roadmap of Chapter 1 (inline SVG, clickable, completion-aware)
   * ================================================================ */
  BUILDERS["roadmap"] = function (host) {
    var nodes = [
      { n: 1, id: "s1-1", t: "Users",            s: "who reads them" },
      { n: 2, id: "s1-2", t: "Elements",         s: "A = L + E" },
      { n: 3, id: "s1-3", t: "Double entry",     s: "debits & credits" },
      { n: 4, id: "s1-4", t: "Accrual basis",    s: "& matching" },
      { n: 5, id: "s1-5", t: "Rule makers",      s: "GAAP & IFRS" },
      { n: 6, id: "s1-6", t: "Four statements",  s: "a first look" },
      { n: 7, id: "s1-7", t: "Trial balance",    s: "to statements" }
    ];
    var W = 920, H = 230, bw = 112, bh = 78, gap = (W - 40 - nodes.length * bw) / (nodes.length - 1);
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "fig-svg", role: "img",
      "aria-label": "Roadmap of Chapter 1: seven linked topics, from the users of financial statements to the four financial statements." });

    nodes.forEach(function (nd, i) {
      var x = 20 + i * (bw + gap), y = 70;
      if (i < nodes.length - 1) {
        var ax = x + bw, ax2 = x + bw + gap;
        s.appendChild(svg("line", { x1: ax + 2, y1: y + bh / 2, x2: ax2 - 8, y2: y + bh / 2, class: "fig-arrow" }));
        s.appendChild(svg("polygon", { points: (ax2 - 8) + "," + (y + bh / 2 - 4) + " " + (ax2 - 8) + "," + (y + bh / 2 + 4) + " " + (ax2 - 1) + "," + (y + bh / 2), class: "fig-arrowhead" }));
      }
      var a = svg("a", { href: nd.id + ".html", class: "fig-node", "data-section": nd.id });
      a.appendChild(svg("rect", { x: x, y: y, width: bw, height: bh, rx: 12, class: "fig-box" }));
      var num = svg("circle", { cx: x + 16, cy: y + 16, r: 11, class: "fig-bullet" });
      a.appendChild(num);
      var nt = svg("text", { x: x + 16, y: y + 20, class: "fig-bullet-text", "text-anchor": "middle" });
      nt.textContent = "1." + nd.n;
      a.appendChild(nt);
      var t1 = svg("text", { x: x + bw / 2, y: y + 46, class: "fig-label", "text-anchor": "middle" });
      t1.textContent = nd.t;
      a.appendChild(t1);
      var t2 = svg("text", { x: x + bw / 2, y: y + 63, class: "fig-sub", "text-anchor": "middle" });
      t2.textContent = nd.s;
      a.appendChild(t2);
      var tick = svg("text", { x: x + bw - 14, y: y + 20, class: "fig-tick", "text-anchor": "middle" });
      tick.textContent = "✓";
      tick.style.display = "none";
      a.appendChild(tick);
      if (root.Progress && root.Progress.pageStats(nd.id).complete) {
        tick.style.display = "";
        a.setAttribute("class", "fig-node is-done");
      }
      s.appendChild(a);
    });

    var cap = svg("text", { x: W / 2, y: 30, class: "fig-title", "text-anchor": "middle" });
    cap.textContent = "From the people who read the statements … to the statements themselves";
    s.appendChild(cap);
    var foot = svg("text", { x: W / 2, y: 190, class: "fig-sub", "text-anchor": "middle" });
    foot.textContent = "Each box is a section. Click one to open it.";
    s.appendChild(foot);
    host.appendChild(s);
  };

  /* ================================================================
   * F01-02 — Users of financial statements (flip cards)
   * ================================================================ */
  BUILDERS["users"] = function (host) {
    var rows = [
      { user: "Investors (shareholders)", primary: true, decision: "Buy, hold or sell shares",
        q: "Will the company create future cash flows and returns?",
        stmts: "Income statement, cash flows, balance sheet" },
      { user: "Lenders (banks, bondholders)", primary: true, decision: "Lend, renew or stop a loan",
        q: "Can the company pay interest and repay the principal on time?",
        stmts: "Cash flows, balance sheet" },
      { user: "Other creditors (suppliers)", primary: true, decision: "Sell on credit, set credit terms",
        q: "Will the company pay its bills when due?",
        stmts: "Balance sheet (short-term items), cash flows" },
      { user: "Employees and unions", primary: false, decision: "Stay, negotiate pay",
        q: "Is the company stable and profitable?", stmts: "Income statement" },
      { user: "Customers", primary: false, decision: "Sign long-term contracts",
        q: "Will the company continue to supply us?", stmts: "Balance sheet, income statement" },
      { user: "Governments and regulators", primary: false, decision: "Tax, oversight, statistics",
        q: "Does the company follow the rules and pay its taxes?", stmts: "All statements and notes" },
      { user: "Managers (internal)", primary: false, decision: "Plan and control operations",
        q: "Not a primary user: can use internal reports", stmts: "Internal management reports" }
    ];
    var wrap = E("div", "users-grid");
    rows.forEach(function (r) {
      var card = E("button", "user-card" + (r.primary ? " is-primary" : ""));
      card.type = "button";
      card.setAttribute("aria-expanded", "false");
      var front = E("div", "user-front");
      front.appendChild(E("span", "user-name", r.user));
      front.appendChild(E("span", "user-flag", r.primary ? "PRIMARY USER" : "other user"));
      front.appendChild(E("span", "user-more", "what do they need? ↓"));
      card.appendChild(front);
      var back = E("div", "user-back");
      back.appendChild(row("Decision", r.decision));
      back.appendChild(row("Key question", r.q));
      back.appendChild(row("Statements used most", r.stmts));
      card.appendChild(back);
      card.addEventListener("click", function () {
        var open = card.classList.toggle("open");
        card.setAttribute("aria-expanded", open ? "true" : "false");
      });
      wrap.appendChild(card);
      function row(k, v) {
        var d = E("div", "user-row");
        d.appendChild(E("span", "user-k", k));
        d.appendChild(E("span", "user-v", v));
        return d;
      }
    });
    host.appendChild(wrap);
    host.appendChild(E("p", "fig-hint", "Click a card to see the decision, the key question and the statements that user leans on. The three primary users are marked."));
  };

  /* ================================================================
   * F01-03 — The accounting equation machine
   * ================================================================ */
  BUILDERS["equation"] = function (host) {
    var state = { a: 0, l: 0, cc: 0, re: 0 };
    var moves = [
      { t: "Issue shares for cash 1,500", a: 1500, l: 0, cc: 1500, re: 0,
        why: "Cash comes in from owners. Contributed capital rises: common stock 100 at par plus APIC 1,400." },
      { t: "Borrow 800 on a note", a: 800, l: 800, cc: 0, re: 0,
        why: "Cash comes in from a lender, so a liability rises. This is financing, not income." },
      { t: "Buy equipment for cash 1,200", a: 0, l: 0, cc: 0, re: 0,
        why: "One asset becomes another. Total assets do not change, and nothing is an expense yet." },
      { t: "Sell goods on credit: revenue 300, cost 180", a: 120, l: 0, cc: 0, re: 120,
        why: "Receivables rise 300 and inventory falls 180. Retained earnings rise by the 120 of profit." },
      { t: "Pay wages 40 in cash", a: -40, l: 0, cc: 0, re: -40,
        why: "An expense reduces retained earnings, and cash goes out." },
      { t: "Declare a dividend 50", a: 0, l: 50, cc: 0, re: -50,
        why: "A distribution to owners. Retained earnings fall and a liability appears. It is NOT an expense." }
    ];

    var box = E("div", "eqm");
    var scale = E("div", "eqm-scale");
    var leftCol = E("div", "eqm-side eqm-left");
    leftCol.appendChild(E("h4", null, "Assets"));
    var aBar = E("div", "eqm-bar eqm-a");
    var aVal = E("span", "eqm-val", "0");
    aBar.appendChild(aVal);
    leftCol.appendChild(aBar);

    var eqSign = E("div", "eqm-eq", "=");

    var rightCol = E("div", "eqm-side eqm-right");
    rightCol.appendChild(E("h4", null, "Liabilities + Equity"));
    var lBar = E("div", "eqm-bar eqm-l");
    var lVal = E("span", "eqm-val", "0");
    lBar.appendChild(lVal);
    lBar.appendChild(E("span", "eqm-tag", "Liabilities"));
    rightCol.appendChild(lBar);
    var ccBar = E("div", "eqm-bar eqm-cc");
    var ccVal = E("span", "eqm-val", "0");
    ccBar.appendChild(ccVal);
    ccBar.appendChild(E("span", "eqm-tag", "Contributed capital"));
    rightCol.appendChild(ccBar);
    var reBar = E("div", "eqm-bar eqm-re");
    var reVal = E("span", "eqm-val", "0");
    reBar.appendChild(reVal);
    reBar.appendChild(E("span", "eqm-tag", "Retained earnings"));
    rightCol.appendChild(reBar);

    scale.appendChild(leftCol);
    scale.appendChild(eqSign);
    scale.appendChild(rightCol);
    box.appendChild(scale);

    var readout = E("p", "eqm-readout");
    box.appendChild(readout);

    var controls = E("div", "eqm-controls");
    moves.forEach(function (m) {
      var b = E("button", "eqm-btn", m.t);
      b.type = "button";
      b.addEventListener("click", function () {
        state.a += m.a; state.l += m.l; state.cc += m.cc; state.re += m.re;
        readout.textContent = m.why;
        draw();
      });
      controls.appendChild(b);
    });
    var reset = E("button", "eqm-btn eqm-reset", "Start again");
    reset.type = "button";
    reset.addEventListener("click", function () {
      state = { a: 0, l: 0, cc: 0, re: 0 };
      readout.textContent = "";
      draw();
    });
    controls.appendChild(reset);
    box.appendChild(controls);

    var note = E("p", "eqm-note");
    box.appendChild(note);

    function draw() {
      var right = state.l + state.cc + state.re;
      var max = Math.max(1, Math.abs(state.a), Math.abs(right));
      function pct(v) { return Math.max(0, Math.abs(v) / max * 100); }
      aBar.style.width = pct(state.a) + "%";
      lBar.style.width = pct(state.l) + "%";
      ccBar.style.width = pct(state.cc) + "%";
      reBar.style.width = pct(state.re) + "%";
      aVal.textContent = L.money(state.a);
      lVal.textContent = L.money(state.l);
      ccVal.textContent = L.money(state.cc);
      reVal.textContent = L.money(state.re);
      var balanced = Math.abs(state.a - right) < 0.001;
      box.classList.toggle("is-balanced", balanced);
      note.textContent = balanced
        ? "Assets " + L.money(state.a) + " = liabilities " + L.money(state.l) +
          " + equity " + L.money(state.cc + state.re) + ". The equation holds."
        : "Out of balance by " + L.money(state.a - right) + " — which cannot happen in double entry.";
      note.className = "eqm-note" + (balanced ? " is-ok" : " is-off");
    }
    draw();
    host.appendChild(box);
    host.appendChild(E("p", "fig-hint",
      "Apply the January transactions one at a time and watch both sides move together. " +
      "Note that the dividend reduces retained earnings without touching net income — it is not an expense."));
  };

  /* ================================================================
   * F01-04 — Debit and credit rules (six account types), self-testing
   * ================================================================ */
  BUILDERS["dcrules"] = function (host) {
    var types = [
      { t: "Assets",      side: "debit",  side2: "credit", ex: "Cash, receivables, inventory, equipment" },
      { t: "Expenses",    side: "debit",  side2: "credit", ex: "Cost of goods sold, wages, depreciation" },
      { t: "Dividends",   side: "debit",  side2: "credit", ex: "Dividends declared" },
      { t: "Liabilities", side: "credit", side2: "debit",  ex: "Payables, notes payable, interest payable" },
      { t: "Equity",      side: "credit", side2: "debit",  ex: "Common stock, APIC, retained earnings" },
      { t: "Revenues",    side: "credit", side2: "debit",  ex: "Sales revenue" }
    ];
    var wrap = E("div", "dc");
    var eq = E("p", "dc-mnemonic");
    eq.innerHTML = "Assets + Expenses + Dividends &nbsp;=&nbsp; Liabilities + Equity + Revenues";
    wrap.appendChild(eq);
    wrap.appendChild(E("p", "fig-hint",
      "Everything on the LEFT of that equation increases with a debit. Everything on the RIGHT increases with a credit. " +
      "Click a card to check yourself."));

    var grid = E("div", "dc-grid");
    types.forEach(function (ty) {
      var card = E("button", "dc-card dc-" + ty.side);
      card.type = "button";
      card.appendChild(E("span", "dc-type", ty.t));
      var tacct = E("span", "dc-t");
      var dr = E("span", "dc-half dc-dr");
      dr.appendChild(E("span", "dc-half-label", "debit"));
      dr.appendChild(E("span", "dc-sign", ty.side === "debit" ? "↑" : "↓"));
      var cr = E("span", "dc-half dc-cr");
      cr.appendChild(E("span", "dc-half-label", "credit"));
      cr.appendChild(E("span", "dc-sign", ty.side === "credit" ? "↑" : "↓"));
      tacct.appendChild(dr);
      tacct.appendChild(cr);
      card.appendChild(tacct);
      card.appendChild(E("span", "dc-normal", "normal balance: " + ty.side));
      card.appendChild(E("span", "dc-ex", ty.ex));
      card.addEventListener("click", function () { card.classList.toggle("revealed"); });
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    wrap.appendChild(E("p", "fig-note",
      "A contra account reverses this: accumulated depreciation reduces equipment, so it has a credit balance " +
      "even though it sits with the assets."));
    host.appendChild(wrap);
  };

  /* ================================================================
   * F01-05 — January effect grid (read-only, rows link to their entries)
   * ================================================================ */
  BUILDERS["effectgrid"] = function (host, spec) {
    var rows = (spec && spec.month === "february") ? L.february : L.january;
    var tot = (spec && spec.month === "february") ? L.feb : L.jan;
    var scroll = E("div", "table-scroll");
    var t = E("table", "data-table grid-static");
    t.innerHTML = "<thead><tr><th>#</th><th>Transaction</th><th>Assets</th><th>Liabilities</th>" +
      "<th>Equity</th><th>Net income</th><th>Cash flow</th></tr></thead>";
    var tb = E("tbody");
    rows.forEach(function (r) {
      var tr = E("tr");
      tr.className = "grid-static-row";
      tr.innerHTML = "<td class=\"row-head\">" + r.n + "</td>" +
        "<td><span class=\"gs-date\">" + r.date + "</span> " + r.short + "</td>" +
        "<td>" + L.signed(r.eff.a) + "</td>" +
        "<td>" + L.signed(r.eff.l) + "</td>" +
        "<td>" + L.signed(r.eff.e) + "</td>" +
        "<td>" + L.signed(r.eff.ni) + "</td>" +
        "<td>" + (r.eff.cf === "none" ? "none" :
          r.eff.cf.charAt(0).toUpperCase() + r.eff.cf.slice(1) + " " + L.signed(r.eff.cfAmount)) + "</td>";
      var detail = E("tr", "gs-detail");
      var td = E("td");
      td.colSpan = 7;
      td.innerHTML = "<strong>Journal entry.</strong> " + r.entry.map(function (ln) {
        return (ln.side === "dr" ? "Dr " : "Cr ") + ln.account + " " + L.money(ln.amount);
      }).join(" · ") + "<br><span class=\"gs-full\">" + r.text + "</span>";
      detail.appendChild(td);
      detail.hidden = true;
      tr.addEventListener("click", function () { detail.hidden = !detail.hidden; tr.classList.toggle("open"); });
      tr.setAttribute("tabindex", "0");
      tr.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); detail.hidden = !detail.hidden; }
      });
      tb.appendChild(tr);
      tb.appendChild(detail);
    });
    var tf = E("tr", "grid-total-row");
    tf.innerHTML = "<td class=\"row-head\"></td><td><strong>Totals</strong></td>" +
      "<td><strong>" + L.signed(tot.a) + "</strong></td>" +
      "<td><strong>" + L.signed(tot.l) + "</strong></td>" +
      "<td><strong>" + L.signed(tot.e) + "</strong></td>" +
      "<td><strong>" + L.signed(tot.ni) + "</strong></td>" +
      "<td><strong>" + L.signed(tot.cash) + "</strong></td>";
    tb.appendChild(tf);
    t.appendChild(tb);
    scroll.appendChild(t);
    host.appendChild(scroll);
    host.appendChild(E("p", "fig-hint", "Click any row to see its journal entry."));
    var proof = E("p", "fig-note");
    proof.innerHTML = "The totals prove the equation: assets <strong>" + L.signed(tot.a) +
      "</strong> = liabilities <strong>" + L.signed(tot.l) + "</strong> + equity <strong>" +
      L.signed(tot.e) + "</strong>.";
    host.appendChild(proof);
  };

  /* ================================================================
   * F01-07 — Accrual versus cash basis, on a slider
   * ================================================================ */
  BUILDERS["accrual"] = function (host) {
    var d = L.decemberSale;
    var wrap = E("div", "timeline");
    var stops = [
      { k: 0, date: "Before Dec 20, 2025", acc: "nothing recorded", cash: "nothing recorded",
        note: "The order exists but the goods have not been delivered." },
      { k: 1, date: d.shipDate, acc: "Revenue " + L.money(d.invoice) + " and cost of goods sold " + L.money(d.cost) + " in fiscal 2025",
        cash: "nothing recorded",
        note: "Accrual: Orontes delivered the goods, so it earned the revenue now. Gross profit of " +
          L.money(d.grossProfit) + " belongs to 2025. Cash basis records nothing, because no cash has moved." },
      { k: 2, date: "December 31, 2025 · year end", acc: "Gross profit " + L.money(d.grossProfit) + " is in fiscal 2025",
        cash: "Fiscal 2025 shows nothing from this sale",
        note: "This is the whole difference: the same sale lands in a different YEAR under the two bases." },
      { k: 3, date: d.payDate, acc: "One asset becomes another: receivable → cash",
        cash: "Revenue " + L.money(d.invoice) + " recorded in fiscal 2026",
        note: "Accrual: the collection changes nothing in income — it swaps a receivable for cash. " +
          "Cash basis puts the revenue in 2026, which is the wrong period." }
    ];

    var bar = E("div", "tl-bar");
    var fill = E("div", "tl-fill");
    bar.appendChild(fill);
    stops.forEach(function (s, i) {
      var dot = E("button", "tl-dot");
      dot.type = "button";
      dot.style.left = (i / (stops.length - 1) * 100) + "%";
      dot.setAttribute("aria-label", s.date);
      dot.addEventListener("click", function () { go(i); });
      bar.appendChild(dot);
    });
    wrap.appendChild(bar);

    var slider = E("input", "tl-slider");
    slider.type = "range";
    slider.min = "0";
    slider.max = String(stops.length - 1);
    slider.value = "0";
    slider.step = "1";
    slider.setAttribute("aria-label", "Move through the timeline from before the shipment to the collection");
    slider.addEventListener("input", function () { go(Number(slider.value)); });
    wrap.appendChild(slider);

    var dateLine = E("p", "tl-date");
    wrap.appendChild(dateLine);

    var cols = E("div", "tl-cols");
    var accCol = E("div", "tl-col tl-accrual");
    accCol.appendChild(E("h4", null, "Accrual basis · U.S. GAAP"));
    var accBody = E("p", "tl-body");
    accCol.appendChild(accBody);
    var cashCol = E("div", "tl-col tl-cash");
    cashCol.appendChild(E("h4", null, "Cash basis · not acceptable under U.S. GAAP"));
    var cashBody = E("p", "tl-body");
    cashCol.appendChild(cashBody);
    cols.appendChild(accCol);
    cols.appendChild(cashCol);
    wrap.appendChild(cols);

    var note = E("p", "tl-note");
    wrap.appendChild(note);

    function go(i) {
      var s = stops[i];
      slider.value = String(i);
      fill.style.width = (i / (stops.length - 1) * 100) + "%";
      Array.prototype.slice.call(bar.querySelectorAll(".tl-dot")).forEach(function (dot, j) {
        dot.classList.toggle("on", j <= i);
        dot.classList.toggle("current", j === i);
      });
      dateLine.textContent = s.date;
      accBody.textContent = s.acc;
      cashBody.textContent = s.cash;
      note.textContent = s.note;
    }
    go(0);
    host.appendChild(wrap);
    host.appendChild(E("p", "fig-hint",
      "Orontes ships olive oil on " + d.shipDate + " and invoices " + L.money(d.invoice) +
      "; the goods cost " + L.money(d.cost) + "; GreenBasket pays on " + d.payDate +
      ". Drag the slider to see where the revenue falls under each basis."));
  };

  /* ================================================================
   * F01-09 — How the four statements connect (inline SVG, animated flow)
   * ================================================================ */
  BUILDERS["links"] = function (host) {
    var W = 900, H = 330;
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "fig-svg", role: "img",
      "aria-label": "How the four statements connect: net income flows from the income statement into retained earnings in the statement of changes in equity, which closes into the balance sheet; the net change in cash from the statement of cash flows explains the cash balance on the balance sheet." });

    function card(x, y, w, h, title, sub, cls) {
      var g = svg("g", { class: "fig-card " + (cls || "") });
      g.appendChild(svg("rect", { x: x, y: y, width: w, height: h, rx: 12, class: "fig-box" }));
      var t = svg("text", { x: x + w / 2, y: y + 26, class: "fig-label", "text-anchor": "middle" });
      t.textContent = title;
      g.appendChild(t);
      var u = svg("text", { x: x + w / 2, y: y + 45, class: "fig-sub", "text-anchor": "middle" });
      u.textContent = sub;
      g.appendChild(u);
      s.appendChild(g);
      return g;
    }

    card(30, 40, 200, 64, "Income statement", "for a period");
    card(30, 150, 200, 64, "Statement of cash flows", "for a period");
    card(330, 40, 230, 64, "Statement of changes in equity", "for a period");
    card(660, 95, 210, 80, "Balance sheet", "at a date");

    function flow(x1, y1, x2, y2, label, value, cls) {
      var mid = (x1 + x2) / 2;
      var path = svg("path", {
        d: "M " + x1 + " " + y1 + " C " + mid + " " + y1 + ", " + mid + " " + y2 + ", " + (x2 - 10) + " " + y2,
        class: "fig-flow " + (cls || "")
      });
      s.appendChild(path);
      s.appendChild(svg("polygon", {
        points: (x2 - 10) + "," + (y2 - 5) + " " + (x2 - 10) + "," + (y2 + 5) + " " + (x2 - 1) + "," + y2,
        class: "fig-arrowhead"
      }));
      var tx = svg("text", { x: mid, y: (y1 + y2) / 2 - 8, class: "fig-flowlabel", "text-anchor": "middle" });
      tx.textContent = label;
      s.appendChild(tx);
      var tv = svg("text", { x: mid, y: (y1 + y2) / 2 + 9, class: "fig-flowvalue", "text-anchor": "middle" });
      tv.textContent = value;
      s.appendChild(tv);
      if (!reduced()) {
        var dot = svg("circle", { r: 5, class: "fig-dot" });
        var anim = svg("animateMotion", { dur: "3.2s", repeatCount: "indefinite",
          path: path.getAttribute("d") });
        dot.appendChild(anim);
        s.appendChild(dot);
      }
      return path;
    }

    flow(230, 72, 330, 72, "net income", L.money(L.is.netIncome), "flow-ni");
    flow(560, 72, 660, 120, "closing retained earnings", L.money(L.sce.reClosing), "flow-re");
    flow(230, 182, 660, 160, "net change in cash", "explains the cash balance", "flow-cash");

    var n1 = svg("text", { x: W / 2, y: 265, class: "fig-sub", "text-anchor": "middle" });
    n1.textContent = "Net income flows into retained earnings. The net change in cash explains the cash balance.";
    s.appendChild(n1);
    var n2 = svg("text", { x: W / 2, y: 288, class: "fig-sub", "text-anchor": "middle" });
    n2.textContent = "Three statements cover a period. Only the balance sheet shows one date.";
    s.appendChild(n2);
    var n3 = svg("text", { x: W / 2, y: 314, class: "fig-note-svg", "text-anchor": "middle" });
    n3.textContent = "For Orontes in January, net income was 80 but cash rose 1,060 — that gap is the accrual basis at work.";
    s.appendChild(n3);

    host.appendChild(s);
  };

  /* ================================================================
   * F01-10 — The Barada trial balance (the live exhibit)
   * ================================================================ */
  BUILDERS["trialbalance"] = function (host, spec) {
    var wrap = E("div", "paper paper-tb");
    if (spec && spec.anchor) wrap.id = spec.anchor + "-paper";
    var head = E("div", "paper-head");
    head.appendChild(E("h4", null, L.company.barada + " — trial balance, December 31, 2025"));
    head.appendChild(E("span", "paper-unit", L.unit));
    wrap.appendChild(head);

    var t = E("table", "paper-table");
    t.innerHTML = "<thead><tr><th>Account</th><th class=\"num\">Debit</th><th class=\"num\">Credit</th></tr></thead>";
    var tb = E("tbody");
    L.trialBalance.forEach(function (r) {
      var tr = E("tr");
      tr.dataset.cat = r.cat;
      tr.innerHTML = "<td>" + r.name + "</td>" +
        "<td class=\"num\">" + (r.dr ? L.money(r.dr) : "") + "</td>" +
        "<td class=\"num\">" + (r.cr ? L.money(r.cr) : "") + "</td>";
      tb.appendChild(tr);
    });
    var tot = E("tr", "paper-total");
    tot.innerHTML = "<td><strong>Totals</strong></td><td class=\"num\"><strong>" + L.money(L.totalDebits) +
      "</strong></td><td class=\"num\"><strong>" + L.money(L.totalCredits) + "</strong></td>";
    tb.appendChild(tot);
    t.appendChild(tb);
    wrap.appendChild(t);
    host.appendChild(wrap);

    var legend = E("div", "tb-legend");
    [["asset", "Asset"], ["contra-asset", "Contra-asset"], ["liability", "Liability"],
     ["equity", "Equity"], ["revenue", "Revenue"], ["expense", "Expense"]].forEach(function (p) {
      var b = E("button", "tb-key tb-key-" + p[0], p[1]);
      b.type = "button";
      b.addEventListener("click", function () {
        var on = b.classList.toggle("on");
        Array.prototype.slice.call(tb.querySelectorAll("tr")).forEach(function (tr) {
          if (tr.dataset.cat === p[0]) tr.classList.toggle("lit", on);
        });
      });
      legend.appendChild(b);
    });
    host.appendChild(legend);
    host.appendChild(E("p", "fig-hint",
      "Total debits equal total credits at " + L.money(L.totalDebits) + ", so the trial balance is in balance. " +
      "Click a category to highlight those accounts — note that the two contra-assets carry CREDIT balances."));
  };

  /* ================================================================
   * F01-13 — Chapter summary map (inline SVG, one key rule per topic)
   * ================================================================ */
  BUILDERS["summarymap"] = function (host) {
    var items = [
      { n: "1.1", id: "s1-1", t: "Users", rule: "Primary users are investors, lenders and other creditors. Managers are not." },
      { n: "1.2", id: "s1-2", t: "Elements", rule: "Assets = liabilities + equity. A dividend is never an expense." },
      { n: "1.3", id: "s1-3", t: "Double entry", rule: "Every entry has equal debits and credits. Left of the expanded equation increases with a debit." },
      { n: "1.4", id: "s1-4", t: "Accrual basis", rule: "Revenue when earned, expenses when incurred. Match expenses to revenues, not to cash." },
      { n: "1.5", id: "s1-5", t: "Rule makers", rule: "FASB writes U.S. GAAP in the ASC. SEC has legal authority. PCAOB audits. IASB writes IFRS." },
      { n: "1.6", id: "s1-6", t: "Four statements", rule: "Only the balance sheet is at a date. Net income and cash link the four." },
      { n: "1.7", id: "s1-7", t: "Trial balance", rule: "Sort by element, build income statement first, net the contra accounts, make it tie." }
    ];
    var grid = E("div", "summap");
    items.forEach(function (it) {
      var a = E("a", "summap-card");
      a.href = it.id + ".html";
      a.appendChild(E("span", "summap-n", it.n));
      a.appendChild(E("span", "summap-t", it.t));
      a.appendChild(E("span", "summap-rule", it.rule));
      if (root.Progress && root.Progress.pageStats(it.id).complete) {
        a.classList.add("is-done");
        a.appendChild(E("span", "summap-tick", "✓"));
      }
      grid.appendChild(a);
    });
    host.appendChild(grid);
  };

  /* ================================================================
   * F01-08 — Who writes the rules (an HTML map, used as a drop target)
   * ================================================================ */
  DROPS["orgmap"] = function (host, spec) {
    var wrap = E("div", "orgmap");
    var zones = [];
    var systems = [
      { key: "us", title: "United States · U.S. GAAP", flag: "■",
        slots: [
          { id: "sec", label: "Legal authority over public-company reporting", hint: "a U.S. government agency" },
          { id: "fasb", label: "Writes the standards", hint: "private and independent" },
          { id: "asc", label: "Holds all U.S. GAAP in one place", hint: "organized by topic number" },
          { id: "pcaob", label: "Sets AUDITING standards", hint: "not accounting standards" }
        ] },
      { key: "intl", title: "International · IFRS", flag: "●",
        slots: [
          { id: "iasb", label: "Writes IFRS", hint: "under the IFRS Foundation" },
          { id: "foundation", label: "The oversight body above the standard setter", hint: "" }
        ] }
    ];
    systems.forEach(function (sys) {
      var col = E("div", "org-col org-" + sys.key);
      var h = E("h4", null, sys.flag + " " + sys.title);
      col.appendChild(h);
      sys.slots.forEach(function (sl) {
        var row = E("div", "org-slot");
        var lab = E("div", "org-job");
        lab.appendChild(E("span", "org-job-text", sl.label));
        if (sl.hint) lab.appendChild(E("span", "org-job-hint", sl.hint));
        row.appendChild(lab);
        var drop = E("div", "drop drop-single org-drop");
        drop.setAttribute("aria-label", "Which body: " + sl.label);
        drop.appendChild(E("span", "drop-hint", "drop the body here"));
        var holder = E("span", "drop-holder");
        drop.appendChild(holder);
        row.appendChild(drop);
        col.appendChild(row);
        zones.push({ id: sl.id, el: drop, host: holder, label: sl.label });
      });
      wrap.appendChild(col);
    });
    host.appendChild(wrap);
    return { zones: zones };
  };

  /* ================================================================
   * F01-02 as a drop target — users to the statements they lean on
   * ================================================================ */
  DROPS["usersmap"] = function (host, spec) {
    var wrap = E("div", "usersmap");
    var zones = [];
    [
      { id: "income", label: "Income statement", sub: "How did the company perform?" },
      { id: "balance", label: "Balance sheet", sub: "What does it have and owe?" },
      { id: "cash", label: "Statement of cash flows", sub: "Where did cash come from and go?" },
      { id: "internal", label: "Internal management reports", sub: "Not a general-purpose statement" }
    ].forEach(function (s) {
      var col = E("div", "um-col");
      var head = E("div", "um-head");
      head.appendChild(E("span", "um-title", s.label));
      head.appendChild(E("span", "um-sub", s.sub));
      col.appendChild(head);
      var drop = E("div", "drop drop-multi um-drop");
      drop.setAttribute("aria-label", "Users who lean on the " + s.label);
      drop.appendChild(E("span", "drop-hint", "drop users here"));
      var holder = E("span", "drop-holder");
      drop.appendChild(holder);
      col.appendChild(drop);
      wrap.appendChild(col);
      zones.push({ id: s.id, el: drop, host: holder, label: s.label });
    });
    host.appendChild(wrap);
    return { zones: zones };
  };

  /* ================================================================
   * F01-11 — The income statement, built by dropping, with live subtotals
   * ================================================================ */
  DROPS["income-statement"] = function (host, spec) {
    var wrap = E("div", "paper paper-is");
    var head = E("div", "paper-head");
    head.appendChild(E("h4", null, L.company.barada + " — income statement, 2025"));
    head.appendChild(E("span", "paper-unit", L.unit));
    wrap.appendChild(head);

    var zones = [], subtotals = {};
    var bands = [
      { id: "is.revenue", label: "Revenue", lines: ["sales"] },
      { id: "is.cogs", label: "Cost of goods sold", lines: ["cogs"], negate: true },
      { sub: "grossProfit", label: "Gross profit" },
      { id: "is.operating", label: "Operating expenses", lines: ["wages", "depexp"], negate: true },
      { sub: "operatingIncome", label: "Operating income" },
      { id: "is.nonoperating", label: "Non-operating items", lines: ["interest"], negate: true },
      { sub: "netIncome", label: "Net income" }
    ];

    bands.forEach(function (b) {
      if (b.sub) {
        var row = E("div", "paper-row paper-sub");
        row.appendChild(E("span", "paper-label", b.label));
        var v = E("span", "paper-num", "—");
        row.appendChild(v);
        subtotals[b.sub] = v;
        wrap.appendChild(row);
        return;
      }
      var band = E("div", "paper-band");
      var bh = E("div", "paper-band-head");
      bh.appendChild(E("span", "paper-band-label", b.label));
      band.appendChild(bh);
      var drop = E("div", "drop drop-multi paper-drop");
      drop.setAttribute("aria-label", "Drop the accounts that belong in " + b.label);
      drop.appendChild(E("span", "drop-hint", "drop accounts here"));
      var holder = E("span", "drop-holder");
      drop.appendChild(holder);
      band.appendChild(drop);
      var amt = E("div", "paper-band-amt");
      band.appendChild(amt);
      wrap.appendChild(band);
      zones.push({ id: b.id, el: drop, host: holder, label: b.label, amt: amt, lines: b.lines, negate: b.negate });
    });

    host.appendChild(wrap);

    function nameToKey(name) {
      for (var i = 0; i < L.trialBalance.length; i++) if (L.trialBalance[i].name === name) return L.trialBalance[i].key;
      return null;
    }

    function update(placed) {
      var band = {};
      zones.forEach(function (z) {
        var total = 0;
        (placed[z.id] || []).forEach(function (name) {
          var k = nameToKey(name);
          if (k) total += L.bal(k);
        });
        band[z.id] = z.negate ? -total : total;
        z.amt.textContent = (placed[z.id] || []).length ? L.money(band[z.id]) : "";
      });
      var gross = (band["is.revenue"] || 0) + (band["is.cogs"] || 0);
      var op = gross + (band["is.operating"] || 0);
      var ni = op + (band["is.nonoperating"] || 0);
      show("grossProfit", gross, L.is.grossProfit);
      show("operatingIncome", op, L.is.operatingIncome);
      show("netIncome", ni, L.is.netIncome);
      function show(key, got, want) {
        var node = subtotals[key];
        if (!node) return;
        var any = zones.some(function (z) { return (placed[z.id] || []).length; });
        node.textContent = any ? L.money(got) : "—";
        node.classList.toggle("is-right", any && Math.abs(got - want) < 0.001);
        node.classList.toggle("is-wrong", any && Math.abs(got - want) >= 0.001);
      }
    }

    return { zones: zones, update: update };
  };

  /* ================================================================
   * F01-12 — The classified balance sheet, the banded drop target
   * ================================================================ */
  DROPS["balance-sheet"] = function (host, spec) {
    var wrap = E("div", "paper paper-bs");
    var head = E("div", "paper-head");
    head.appendChild(E("h4", null, L.company.barada + " — balance sheet, December 31, 2025"));
    head.appendChild(E("span", "paper-unit", L.unit));
    wrap.appendChild(head);

    var zones = [], subtotals = {};
    var layout = [
      { side: "ASSETS" },
      { id: "bs.current-assets", label: "Current assets", hint: "used or settled within a year" },
      { sub: "currentAssets", label: "Total current assets" },
      { id: "bs.noncurrent-assets", label: "Non-current assets", hint: "held for longer than a year" },
      { sub: "totalAssets", label: "Total assets", strong: true },
      { side: "LIABILITIES AND EQUITY" },
      { id: "bs.current-liabilities", label: "Current liabilities", hint: "due within a year" },
      { id: "bs.noncurrent-liabilities", label: "Non-current liabilities", hint: "due after a year" },
      { sub: "totalLiabilities", label: "Total liabilities" },
      { id: "bs.contributed", label: "Contributed capital", hint: "what owners paid in" },
      { id: "bs.retained", label: "Retained earnings", hint: "profit the company kept" },
      { sub: "totalEquity", label: "Total equity" },
      { sub: "totalLiabEquity", label: "Total liabilities and equity", strong: true }
    ];

    layout.forEach(function (b) {
      if (b.side) { wrap.appendChild(E("div", "paper-side", b.side)); return; }
      if (b.sub) {
        var row = E("div", "paper-row paper-sub" + (b.strong ? " paper-grand" : ""));
        row.appendChild(E("span", "paper-label", b.label));
        var v = E("span", "paper-num", "—");
        row.appendChild(v);
        subtotals[b.sub] = v;
        wrap.appendChild(row);
        return;
      }
      var band = E("div", "paper-band");
      var bh = E("div", "paper-band-head");
      bh.appendChild(E("span", "paper-band-label", b.label));
      if (b.hint) bh.appendChild(E("span", "paper-band-hint", b.hint));
      band.appendChild(bh);
      var drop = E("div", "drop drop-multi paper-drop");
      drop.setAttribute("aria-label", "Drop the accounts that belong in " + b.label);
      drop.appendChild(E("span", "drop-hint", "drop accounts here"));
      var holder = E("span", "drop-holder");
      drop.appendChild(holder);
      band.appendChild(drop);
      var amt = E("div", "paper-band-amt");
      band.appendChild(amt);
      wrap.appendChild(band);
      zones.push({ id: b.id, el: drop, host: holder, label: b.label, amt: amt });
    });

    host.appendChild(wrap);

    /* Net value of a dropped label: a contra account reduces the band it sits in,
       which is exactly what the learner has to internalise. */
    function valueOf(name) {
      for (var i = 0; i < L.trialBalance.length; i++) {
        var r = L.trialBalance[i];
        if (r.name !== name) continue;
        if (r.cat === "contra-asset") return -(r.cr || r.dr);
        if (r.key === "divdeclared") return -(r.dr);
        return r.dr || r.cr;
      }
      if (name === "Retained earnings, closing") return L.sce.reClosing;
      return 0;
    }

    function update(placed) {
      var band = {};
      zones.forEach(function (z) {
        var total = 0;
        (placed[z.id] || []).forEach(function (n) { total += valueOf(n); });
        band[z.id] = total;
        z.amt.textContent = (placed[z.id] || []).length ? L.money(total) : "";
      });
      var any = zones.some(function (z) { return (placed[z.id] || []).length; });
      var ca = band["bs.current-assets"] || 0;
      var nca = band["bs.noncurrent-assets"] || 0;
      var cl = band["bs.current-liabilities"] || 0;
      var ncl = band["bs.noncurrent-liabilities"] || 0;
      var cc = band["bs.contributed"] || 0;
      var re = band["bs.retained"] || 0;
      show("currentAssets", ca, L.bs.currentAssets);
      show("totalAssets", ca + nca, L.bs.totalAssets);
      show("totalLiabilities", cl + ncl, L.bs.totalLiabilities);
      show("totalEquity", cc + re, L.bs.totalEquity);
      show("totalLiabEquity", cl + ncl + cc + re, L.bs.totalLiabEquity);
      function show(key, got, want) {
        var node = subtotals[key];
        if (!node) return;
        node.textContent = any ? L.money(got) : "—";
        node.classList.toggle("is-right", any && Math.abs(got - want) < 0.001);
        node.classList.toggle("is-wrong", any && Math.abs(got - want) >= 0.001);
      }
      var balanced = any && Math.abs((ca + nca) - (cl + ncl + cc + re)) < 0.001;
      wrap.classList.toggle("is-balanced", balanced);
    }

    return { zones: zones, update: update };
  };

  /* ================================================================
   * A small balance sheet used in 1.4 for the four adjustment types
   * ================================================================ */
  DROPS["adjustments"] = function (host, spec) {
    var wrap = E("div", "paper paper-adj");
    wrap.appendChild(E("div", "paper-side", "WHERE THE ADJUSTMENT LANDS"));
    var zones = [];
    [
      { id: "adj.asset", label: "An asset on the balance sheet", hint: "the company has paid for, or earned, a future benefit" },
      { id: "adj.liability", label: "A liability on the balance sheet", hint: "the company still owes goods, services or cash" }
    ].forEach(function (b) {
      var band = E("div", "paper-band");
      var bh = E("div", "paper-band-head");
      bh.appendChild(E("span", "paper-band-label", b.label));
      bh.appendChild(E("span", "paper-band-hint", b.hint));
      band.appendChild(bh);
      var drop = E("div", "drop drop-multi paper-drop");
      drop.setAttribute("aria-label", "Drop the adjustment types that create " + b.label);
      drop.appendChild(E("span", "drop-hint", "drop adjustment types here"));
      var holder = E("span", "drop-holder");
      drop.appendChild(holder);
      band.appendChild(drop);
      wrap.appendChild(band);
      zones.push({ id: b.id, el: drop, host: holder, label: b.label });
    });
    host.appendChild(wrap);
    return { zones: zones };
  };

  /* ================================================================
   * Trial-balance sorter: which statement does each line reach?
   * ================================================================ */
  DROPS["statement-sorter"] = function (host, spec) {
    var wrap = E("div", "sorter");
    var zones = [];
    [
      { id: "is", label: "Income statement", sub: "revenues and expenses, for the period" },
      { id: "sce", label: "Statement of changes in equity", sub: "opening retained earnings and dividends declared" },
      { id: "bs", label: "Balance sheet", sub: "assets, liabilities and equity, at the date" }
    ].forEach(function (s) {
      var col = E("div", "sorter-col");
      var h = E("div", "sorter-head");
      h.appendChild(E("span", "sorter-title", s.label));
      h.appendChild(E("span", "sorter-sub", s.sub));
      col.appendChild(h);
      var drop = E("div", "drop drop-multi sorter-drop");
      drop.setAttribute("aria-label", "Drop the accounts that reach the " + s.label);
      drop.appendChild(E("span", "drop-hint", "drop accounts here"));
      var holder = E("span", "drop-holder");
      drop.appendChild(holder);
      col.appendChild(drop);
      wrap.appendChild(col);
      zones.push({ id: s.id, el: drop, host: holder, label: s.label });
    });
    host.appendChild(wrap);
    return { zones: zones };
  };

  root.Figures = {
    build: function (name, host, spec) {
      var b = BUILDERS[name];
      if (!b) { host.appendChild(E("p", "error", "Unknown figure: " + name)); return; }
      b(host, spec || {});
    },
    dropTarget: function (name, host, spec) {
      var d = DROPS[name];
      if (!d) { host.appendChild(E("p", "error", "Unknown drop figure: " + name)); return { zones: [] }; }
      return d(host, spec || {});
    },
    get names() { return Object.keys(BUILDERS); },
    get dropNames() { return Object.keys(DROPS); }
  };
})(window, document);
