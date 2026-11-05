/* objects4.js — the two instruments the rest of the book needs.
 *
 * WHY A FOURTH FILE. Same reason objects3.js exists: one file, one IIFE, every helper
 * aliased at the top. A renderer appended to a file that holds several IIFEs lands in
 * the last one and throws on the first Check with a live-looking button.
 *
 * Both are grounded in a shape the author prints over and over, and neither of the
 * eleven kinds that already ship can hold it:
 *
 *   schedule  a row per period, where each row's CLOSING is the next row's OPENING.
 *             `waterfall` is one vertical ladder of subtotals; this is a recurrence,
 *             so a mistake has to propagate and be marked where it starts rather than
 *             where it shows. F09-09 the premium amortisation, F10-03 and F10-11 the
 *             depreciation schedules, F14-06, F14-07 and F14-10 the lease liability.
 *
 *   rowpick   per row, choose among THAT ROW'S OWN numbers. `shares` picks from a fixed
 *             vocabulary that is the same on every row; here the options are the row's
 *             own amounts, and the rule - market is the MIDDLE of replacement cost, the
 *             ceiling and the floor; the carrying amount is the LOWER of cost and market
 *             - is the whole of the lesson. F08-05, F08-10, F08-13.
 */
(function (root, doc) {
  "use strict";

  var D = root.Deck, L = root.LEDGER;
  var E = D.util.E, esc = D.util.esc, shuffle = D.util.shuffle,
      Drag = D.util.Drag, fbList = D.util.fbList, yoursFirst = D.util.yoursFirst;
  var m = L ? L.money : function (x) { return String(x); };

  function norm(v) {
    return String(v === undefined || v === null ? "" : v)
      .replace(/[,\s$%]/g, "").replace(/^\((.*)\)$/, "-$1");
  }
  function num(v) {
    var s = norm(v);
    return s === "" ? null : Number(s);
  }

  /* ============================================================
   * SCHEDULE — a row per period, and the chain between them.
   *
   * spec: {
   *   rule:  one sentence, the author's, saying how a row is worked out
   *   cols:  [ {id, label, given} ]      given columns are printed, the rest entered
   *   rows:  [ {label, cells: {id: value}, why} ]
   *   carry: {from: "closing", to: "opening"}   optional: the chain to show
   * }
   *
   * WHY THE CHAIN IS DRAWN. In a lease or a depreciation schedule the learner's own
   * closing figure is what the next year starts from, and a reader who cannot see that
   * treats each row as a separate sum. The arrow is drawn between the two cells, and a
   * row whose opening does not match the row above is marked even when the arithmetic
   * inside it is right - that is the error the exam actually tests.
   * ============================================================ */
  D.register("schedule", function (stage, spec, api) {
    var cols = spec.cols || [];
    var rows = spec.rows || [];
    var carry = spec.carry || null;

    if (spec.rule) stage.appendChild(E("p", "note sch-rule", spec.rule));

    var wrap = E("div", "sch");
    wrap.style.setProperty("--sch-cols", String(cols.length));
    stage.appendChild(wrap);

    var head = E("div", "sch-row sch-head");
    head.appendChild(E("span", "sch-name", spec.caption || ""));
    cols.forEach(function (c) { head.appendChild(E("span", "sch-n", c.label)); });
    wrap.appendChild(head);

    var boxes = [];
    rows.forEach(function (r, ri) {
      var line = E("div", "sch-row");
      line.appendChild(E("span", "sch-name", r.label));
      cols.forEach(function (c) {
        var v = (r.cells || {})[c.id];
        if (c.given) {
          line.appendChild(E("span", "sch-n sch-given", v == null ? "" : String(v)));
          return;
        }
        var cell = E("span", "sch-n");
        var inp = E("input", "sch-in");
        inp.type = "text";
        inp.inputMode = "decimal";
        inp.setAttribute("aria-label", r.label + ", " + c.label);
        cell.appendChild(inp);
        line.appendChild(cell);
        boxes.push({ el: inp, row: r, col: c, ri: ri, want: v });
      });
      wrap.appendChild(line);
    });

    /* the chain, drawn once the two columns are known */
    if (carry) {
      var a = cols.map(function (c) { return c.id; }).indexOf(carry.from);
      var b = cols.map(function (c) { return c.id; }).indexOf(carry.to);
      if (a >= 0 && b >= 0) {
        wrap.classList.add("has-carry");
        stage.appendChild(E("p", "note sch-carry",
          "The " + (cols[a].label || "").toLowerCase() + " of one row is the " +
          (cols[b].label || "").toLowerCase() + " of the next."));
      }
    }

    return function () {
      var right = 0, yours = [], mine = [];
      /* A ROW IS JUDGED AGAINST THE AUTHOR'S FIGURES, not against the learner's own
         previous row. Marking the chain instead would let a reader who made one early
         slip be told that nine later rows are right, which is the opposite of what a
         schedule teaches. */
      boxes.forEach(function (b) {
        var ok = norm(b.el.value) !== "" && num(b.el.value) !== null &&
                 num(b.el.value) === num(b.want);
        b.el.classList.remove("ok", "no");
        b.el.classList.add(ok ? "ok" : "no");
        if (ok) { right++; return; }
        yours.push({ k: "n", html: "<b>" + esc(b.row.label) + " · " +
                                   esc(b.col.label) + "</b> is " +
                                   esc(String(b.want)) + ". " + (b.row.why || "") });
        b.el.value = String(b.want);
      });
      if (right === boxes.length) {
        rows.forEach(function (r) {
          if (r.why) mine.push({ k: "y", html: "<b>" + esc(r.label) + "</b> " + r.why });
        });
      }
      /* THE VERDICT FOLLOWS THE SPEC, NOT THE KIND. "Every year right, and the chain
         holds" was hardcoded, and this renderer now also draws tables that have no years
         and no chain - three inventory methods side by side, a rate reconciliation, two
         measurement choices for goodwill. On those it announced a chain that was not
         there, which is a scene telling a learner something untrue about itself. A
         schedule declares `carry`; a table of figures does not. */
      return { score: right, total: boxes.length, ok: right === boxes.length,
               verdict: right === boxes.length
                 ? (carry ? "Every year right, and the chain holds."
                          : "Every figure right.")
                 : right + " of " + boxes.length + " right",
               html: yoursFirst(yours, mine) };
    };
  });

  /* ============================================================
   * ROWPICK — per row, choose among that row's own numbers.
   *
   * spec: {
   *   rule:  the author's sentence, e.g. "Market is the middle of the three."
   *   cols:  [ {id, label} ]                  the numbers each row offers
   *   steps: [ {id, label, from: [colid|stepid]} ]
   *   rows:  [ {label, values: {colid: v}, answers: {stepid: colid|stepid}, why} ]
   * }
   *
   * A step may choose from an earlier STEP as well as from a column, which is how the
   * second question - the carrying amount is the lower of cost and market - is asked
   * without naming market's value: it is whatever this row's first answer resolved to.
   * ============================================================ */
  D.register("rowpick", function (stage, spec, api) {
    var cols = spec.cols || [];
    var steps = spec.steps || [];
    var rows = spec.rows || [];

    if (spec.rule) stage.appendChild(E("p", "note rp-rule", spec.rule));

    var wrap = E("div", "rp");
    stage.appendChild(wrap);

    function labelOf(id) {
      for (var i = 0; i < cols.length; i++) if (cols[i].id === id) return cols[i].label;
      for (var j = 0; j < steps.length; j++) if (steps[j].id === id) return steps[j].label;
      return id;
    }
    /* what a row's source resolves to, following a step back to the column it picked */
    function valueOf(r, id, seen) {
      seen = seen || {};
      if (seen[id]) return "";
      seen[id] = 1;
      if ((r.values || {})[id] !== undefined) return r.values[id];
      var a = (r.answers || {})[id];
      return a ? valueOf(r, a, seen) : "";
    }

    var picks = [];
    rows.forEach(function (r, ri) {
      picks.push({});
      var card = E("div", "rp-row");
      card.appendChild(E("div", "rp-name", r.label));

      var given = E("div", "rp-given");
      cols.forEach(function (c) {
        var cell = E("span", "rp-fact");
        cell.appendChild(E("span", "rp-fact-k", c.label));
        cell.appendChild(E("span", "rp-fact-v", String((r.values || {})[c.id])));
        given.appendChild(cell);
      });
      card.appendChild(given);

      steps.forEach(function (st) {
        var line = E("div", "rp-step");
        line.appendChild(E("span", "rp-step-k", st.label));
        var opts = E("span", "rp-opts");
        (st.from || []).forEach(function (src) {
          var b = E("button", "rp-opt");
          b.type = "button";
          b.dataset.step = st.id;
          b.dataset.src = src;
          b.appendChild(E("span", "rp-opt-k", labelOf(src)));
          b.appendChild(E("span", "rp-opt-v", String(valueOf(r, src))));
          b.addEventListener("click", function () {
            picks[ri][st.id] = src;
            Array.prototype.slice.call(opts.children).forEach(function (x) {
              x.classList.remove("on");
            });
            b.classList.add("on");
          });
          opts.appendChild(b);
        });
        line.appendChild(opts);
        card.appendChild(line);
      });
      wrap.appendChild(card);
    });

    return function () {
      var right = 0, total = 0, yours = [], mine = [];
      rows.forEach(function (r, ri) {
        var rowOk = true;
        steps.forEach(function (st) {
          total++;
          var want = (r.answers || {})[st.id];
          var got = picks[ri][st.id];
          var ok = got === want;
          if (ok) right++; else rowOk = false;
          var sel = wrap.children[ri].querySelectorAll(
            '.rp-opt[data-step="' + st.id + '"]');
          Array.prototype.slice.call(sel).forEach(function (b) {
            b.classList.remove("ok", "no");
            if (b.dataset.src === want) b.classList.add("ok");
            else if (b.dataset.src === got) b.classList.add("no");
          });
        });
        if (!rowOk) {
          yours.push({ k: "n", html: "<b>" + esc(r.label) + "</b> " +
            steps.map(function (st) {
              return esc(st.label) + ": " + esc(labelOf((r.answers || {})[st.id])) +
                     ", " + esc(String(valueOf(r, (r.answers || {})[st.id])));
            }).join("; ") + ". " + (r.why || "") });
        }
      });
      if (right === total) {
        rows.forEach(function (r) {
          if (r.why) mine.push({ k: "y", html: "<b>" + esc(r.label) + "</b> " + r.why });
        });
      }
      return { score: right, total: total, ok: right === total,
               verdict: right === total
                 ? "Every row measured by the rule, not by eye."
                 : right + " of " + total + " right",
               html: yoursFirst(yours, mine) };
    };
  });
})(window, document);
