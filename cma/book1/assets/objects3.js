/* objects3.js — the instruments Chapters 3, 4 and 5 need.
 *
 * WHY A THIRD FILE. objects2.js already holds three separate IIFEs, and a renderer
 * appended to the end of it lands in the last one, which aliases only two helpers. That
 * cost an afternoon once: the cycle scene threw "yoursFirst is not defined" the moment a
 * learner pressed Check, with a live-looking button and an empty verdict. One file, one
 * IIFE, every helper aliased at the top.
 *
 * All four are grounded in a figure the author draws:
 *   waterfall  F03-04  the ladder from net sales to net income, and F05-01's three
 *                      activities that explain the change in cash - the same shape
 *   treasury   F04-04  treasury stock under the cost method: buy back, reissue, retire
 *   shares     F04-07  a small stock dividend, a large one, and a 2-for-1 split
 *   signs      F05-06  the sign rules of the indirect method
 */
(function (root, doc) {
  "use strict";

  var D = root.Deck, L = root.LEDGER;
  var E = D.util.E, esc = D.util.esc, shuffle = D.util.shuffle,
      Drag = D.util.Drag, fbList = D.util.fbList, yoursFirst = D.util.yoursFirst;
  var m = L ? L.money : function (x) { return String(x); };

  function norm(v) {
    return String(v === undefined || v === null ? "" : v)
      .replace(/[,\s$]/g, "").replace(/^\((.*)\)$/, "-$1");
  }

  /* ============================================================
   * WATERFALL — a ladder of subtotals, entered one rung at a time.
   *
   * The income statement IS its subtotals: gross profit, operating income, income
   * before taxes, net income. Printing them and asking a question about them teaches
   * nothing, because the arithmetic is the lesson. So the lines are given and every
   * SUBTOTAL is blank; entering one fills the bar beside it, and the next rung starts
   * from the figure just entered.
   *
   * spec: { rows: [ {label, amount} | {subtotal:true, label, answer, why} ] }
   * ============================================================ */
  D.register("waterfall", function (stage, spec, api) {
    var rows = spec.rows || [];
    var wrap = E("div", "wf");
    stage.appendChild(wrap);

    var max = Math.max.apply(null, rows.map(function (r) {
      return Math.abs(r.subtotal ? (Number(norm(r.answer)) || 0) : (r.amount || 0));
    }).concat([1]));

    var boxes = [];
    rows.forEach(function (r) {
      var line = E("div", "wf-row" + (r.subtotal ? " is-sub" : ""));
      line.appendChild(E("span", "wf-label", r.label));

      var track = E("div", "wf-track");
      var fill = E("div", "wf-fill" + ((r.amount || 0) < 0 ? " is-neg" : ""));
      track.appendChild(fill);
      line.appendChild(track);

      if (r.subtotal) {
        var inp = E("input", "wf-in");
        inp.type = "text";
        inp.inputMode = "numeric";
        inp.autocomplete = "off";
        inp.placeholder = "?";
        inp.setAttribute("aria-label", "Enter " + r.label);
        inp.addEventListener("input", function () { draw(); });
        line.appendChild(inp);
        boxes.push({ el: inp, row: r, fill: fill });
      } else {
        line.appendChild(E("span", "wf-amt", m(r.amount)));
        fill.style.width = Math.max(2, Math.abs(r.amount) / max * 100) + "%";
      }
      wrap.appendChild(line);
    });

    function draw() {
      boxes.forEach(function (b) {
        var v = Number(norm(b.el.value));
        b.fill.style.width = isFinite(v) && v
          ? Math.max(2, Math.min(100, Math.abs(v) / max * 100)) + "%" : "0%";
        b.fill.classList.toggle("is-neg", v < 0);
      });
    }
    draw();

    return function () {
      var right = 0, yours = [];
      boxes.forEach(function (b) {
        var ok = norm(b.el.value) !== "" && norm(b.el.value) === norm(b.row.answer);
        b.el.classList.remove("ok", "no");
        b.el.classList.add(ok ? "ok" : "no");
        if (ok) { right++; return; }
        yours.push({ k: "n", html: "<b>" + esc(b.row.label) + "</b> is " +
                                   esc(String(b.row.answer)) + ". " + (b.row.why || "") });
        b.el.value = String(b.row.answer);
      });
      draw();
      return { score: right, total: boxes.length, ok: right === boxes.length,
               verdict: right === boxes.length ? "Every subtotal right, all the way down."
                                               : right + " of " + boxes.length + " right",
               html: yoursFirst(yours, right === boxes.length
                 ? boxes.map(function (b) {
                     return { k: "y", html: "<b>" + esc(b.row.label) + "</b> " +
                                            (b.row.why || "") };
                   })
                 : []) };
    };
  });

  /* ============================================================
   * TREASURY — the cost method, and where the difference goes.
   *
   * The chapter's rule is that a company never reports a gain or a loss on its own
   * shares: reissue above cost credits additional paid-in capital from treasury stock,
   * and below cost debits that account first and retained earnings only when it runs
   * out. A learner who is told that remembers it for a page. So the reissue price is a
   * slider, the arithmetic moves with it, and for each of the author's own cases the
   * learner says where the difference lands.
   *
   * spec: { cost, shares, min, max, step, cases: [{price, dest, why}], dests: [...] }
   * ============================================================ */
  D.register("treasury", function (stage, spec, api) {
    var cases = spec.cases || [];
    var wrap = E("div", "tre");
    stage.appendChild(wrap);

    var bar = E("div", "tre-bar");
    var costMark = E("div", "tre-cost", "cost " + m(spec.cost));
    bar.appendChild(costMark);
    var pin = E("div", "tre-pin");
    bar.appendChild(pin);
    wrap.appendChild(bar);

    var sl = E("input", "tl-slider");
    sl.type = "range";
    sl.min = String(spec.min);
    sl.max = String(spec.max);
    sl.step = String(spec.step || 1);
    sl.value = String(spec.cost);
    sl.setAttribute("aria-label", "Reissue price per share");
    wrap.appendChild(sl);

    var read = E("p", "tre-read");
    wrap.appendChild(read);

    function draw() {
      var price = Number(sl.value);
      var pct = (price - spec.min) / Math.max(1, spec.max - spec.min) * 100;
      pin.style.left = pct + "%";
      costMark.style.left = ((spec.cost - spec.min) /
                             Math.max(1, spec.max - spec.min) * 100) + "%";
      var diff = (price - spec.cost) * spec.shares;
      read.innerHTML = "Reissue " + spec.shares.toLocaleString("en-US") + " shares at " +
        m(price) + ": " +
        (diff === 0 ? "no difference."
          : (diff > 0 ? "<b>" + m(diff) + " above cost</b>."
                      : "<b>" + m(-diff) + " below cost</b>."));
      read.className = "tre-read " + (diff > 0 ? "is-up" : (diff < 0 ? "is-down" : ""));
    }
    sl.addEventListener("input", draw);
    draw();

    /* the decisions: for each of the author's cases, where does the difference go? */
    var picks = {}, els = {};
    cases.forEach(function (c, i) {
      var row = E("div", "valve-ask");
      row.appendChild(E("div", "slot-h", c.label));
      var g = E("div", "role-pick");
      els[i] = {};
      (spec.dests || []).forEach(function (dst) {
        var b = E("button", "role-btn", dst);
        b.type = "button";
        b.addEventListener("click", function () {
          picks[i] = dst;
          sl.value = String(c.price);
          draw();
          Object.keys(els[i]).forEach(function (k) {
            els[i][k].classList.remove("on", "ok", "no");
          });
          b.classList.add("on");
        });
        els[i][dst] = b;
        g.appendChild(b);
      });
      row.appendChild(g);
      wrap.appendChild(row);
    });

    return function () {
      var right = 0, yours = [];
      cases.forEach(function (c, i) {
        var ok = picks[i] === c.dest;
        if (ok) right++;
        if (picks[i] && els[i][picks[i]]) {
          els[i][picks[i]].classList.remove("on");
          els[i][picks[i]].classList.add(ok ? "ok" : "no");
        }
        if (!ok) yours.push({ k: "n", html: "<b>" + esc(c.label) + "</b> " + c.why });
      });
      return { score: right, total: cases.length, ok: right === cases.length,
               verdict: right === cases.length
                 ? "Every difference in the right place — and never in income."
                 : right + " of " + cases.length + " right",
               html: yoursFirst(yours, right === cases.length
                 ? cases.map(function (c) {
                     return { k: "y", html: "<b>" + esc(c.label) + "</b> " + c.why };
                   })
                 : []) };
    };
  });

  /* ============================================================
   * SHARES — a stock dividend, a large one, and a split.
   *
   * Figure F04-07 puts the three side by side precisely because their effects differ in
   * a way that is easy to say and hard to keep straight: all three raise the share
   * count, only the dividends touch retained earnings, and NONE of them changes total
   * equity. The learner says what each one does to each column.
   *
   * spec: { base: {shares, par}, columns: [...], actions: [{label, newShares, cells:{}, why}] }
   * ============================================================ */
  D.register("shares", function (stage, spec, api) {
    var actions = spec.actions || [];
    var cols = spec.columns || [];
    var wrap = E("div", "shr");
    stage.appendChild(wrap);

    var head = E("div", "shr-row shr-head");
    head.appendChild(E("span", "shr-name", spec.base
      ? spec.base.shares.toLocaleString("en-US") + " shares, " + m(spec.base.par) + " par"
      : ""));
    cols.forEach(function (c) { head.appendChild(E("span", "shr-c", c.label)); });
    wrap.appendChild(head);

    var picks = {}, els = {};
    actions.forEach(function (a, i) {
      var row = E("div", "shr-row");
      row.appendChild(E("span", "shr-name", a.label));
      els[i] = {};
      cols.forEach(function (c) {
        var cell = E("span", "shr-c");
        els[i][c.id] = {};
        (c.options || []).forEach(function (o) {
          var b = E("button", "role-btn", o);
          b.type = "button";
          b.addEventListener("click", function () {
            picks[i] = picks[i] || {};
            picks[i][c.id] = o;
            Object.keys(els[i][c.id]).forEach(function (k) {
              els[i][c.id][k].classList.remove("on", "ok", "no");
            });
            b.classList.add("on");
          });
          els[i][c.id][o] = b;
          cell.appendChild(b);
        });
        row.appendChild(cell);
      });
      wrap.appendChild(row);
    });

    return function () {
      var right = 0, total = 0, yours = [];
      actions.forEach(function (a, i) {
        var bad = false;
        cols.forEach(function (c) {
          total++;
          var want = (a.cells || {})[c.id];
          var got = (picks[i] || {})[c.id];
          var ok = got === want;
          if (ok) right++; else bad = true;
          if (got && els[i][c.id][got]) {
            els[i][c.id][got].classList.remove("on");
            els[i][c.id][got].classList.add(ok ? "ok" : "no");
          }
        });
        if (bad) yours.push({ k: "n", html: "<b>" + esc(a.label) + "</b> " + a.why });
      });
      return { score: right, total: total, ok: right === total,
               verdict: right === total
                 ? "All three, in every column."
                 : right + " of " + total + " right",
               html: yoursFirst(yours, right === total
                 ? actions.map(function (a) {
                     return { k: "y", html: "<b>" + esc(a.label) + "</b> " + a.why };
                   })
                 : []) };
    };
  });

  /* ============================================================
   * SIGNS — add it back, or take it off.
   *
   * The indirect method is one rule applied sixteen times, and the rule is a SIGN. The
   * learner sets each adjustment to add or subtract and the running total moves, so a
   * wrong sign is visible as a number that will not reach the author's figure. Only the
   * signs are graded; the amounts are his.
   *
   * spec: { start: {label, amount}, items: [{label, amount, add:true|false, why}],
   *         target: {label, amount} }
   * ============================================================ */
  D.register("signs", function (stage, spec, api) {
    var items = spec.items || [];
    var wrap = E("div", "sgn");
    stage.appendChild(wrap);

    var top = E("div", "sgn-row sgn-start");
    top.appendChild(E("span", "sgn-name", (spec.start || {}).label || "Net income"));
    top.appendChild(E("span", "sgn-amt", m((spec.start || {}).amount || 0)));
    wrap.appendChild(top);

    var picks = {}, els = {};
    items.forEach(function (it, i) {
      var row = E("div", "sgn-row");
      row.appendChild(E("span", "sgn-name", it.label));
      var g = E("div", "sgn-pick");
      els[i] = {};
      [["+", true], ["−", false]].forEach(function (o) {
        var b = E("button", "sgn-btn", o[0]);
        b.type = "button";
        b.setAttribute("aria-label", (o[1] ? "Add " : "Subtract ") + it.label);
        b.addEventListener("click", function () {
          picks[i] = o[1];
          Object.keys(els[i]).forEach(function (k) {
            els[i][k].classList.remove("on", "ok", "no");
          });
          b.classList.add("on");
          draw();
        });
        els[i][String(o[1])] = b;
        g.appendChild(b);
      });
      row.appendChild(g);
      row.appendChild(E("span", "sgn-amt", m(Math.abs(it.amount))));
      wrap.appendChild(row);
    });

    var foot = E("div", "sgn-row sgn-total");
    foot.appendChild(E("span", "sgn-name", (spec.target || {}).label || "Running total"));
    var tot = E("span", "sgn-amt", "");
    foot.appendChild(tot);
    wrap.appendChild(foot);

    function running() {
      var v = (spec.start || {}).amount || 0;
      items.forEach(function (it, i) {
        if (picks[i] === undefined) return;
        v += (picks[i] ? 1 : -1) * Math.abs(it.amount);
      });
      return v;
    }
    function draw() {
      var v = running();
      var want = (spec.target || {}).amount;
      tot.textContent = m(v);
      var done = Object.keys(picks).length === items.length;
      foot.className = "sgn-row sgn-total" +
        (done ? (Math.abs(v - want) < 0.001 ? " is-ok" : " is-no") : "");
    }
    draw();

    return function () {
      var right = 0, yours = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === !!it.add;
        if (ok) right++;
        if (picks[i] !== undefined && els[i][String(picks[i])]) {
          els[i][String(picks[i])].classList.remove("on");
          els[i][String(picks[i])].classList.add(ok ? "ok" : "no");
        }
        if (!ok) yours.push({ k: "n", html: "<b>" + esc(it.label) + "</b> " + it.why });
      });
      draw();
      var reached = Math.abs(running() - ((spec.target || {}).amount || 0)) < 0.001;
      return { score: right, total: items.length,
               ok: right === items.length && reached,
               verdict: right === items.length
                 ? "Every sign right, and it reaches " + m((spec.target || {}).amount) + "."
                 : right + " of " + items.length + " right",
               html: yoursFirst(yours, right === items.length
                 ? items.map(function (it) {
                     return { k: "y", html: "<b>" + esc(it.label) + "</b> " + it.why };
                   })
                 : []) };
    };
  });
})(window, document);
