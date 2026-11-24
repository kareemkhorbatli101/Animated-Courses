/* objects6.js — MATCH, the author's label-and-description tables as an exercise.
 *
 * WHY A SIXTH FILE. The same reason objects3, 4 and 5 exist: one file, one IIFE, every helper
 * aliased at the top. A renderer appended to a file that already holds an IIFE lands inside the
 * last one and throws on the first Check, with a button that looks live.
 *
 * WHAT IT IS FOR. 204 of the author's tables ship as `lines` exhibits - something to look at -
 * and the largest class among them is one shape he uses in every volume: a label column and one
 * or two description columns.
 *
 *     The transfer of receivables | Without recourse        | With recourse
 *     Criterion                   | Warehouse (5 years)     | Olive press (4 years)
 *     Item                        | Finance lease           | Operating lease
 *     Risk                        | What it means           | At Orontes
 *
 * Nothing that ships could ask about one. `sort` holds at most four trays and these have as many
 * targets as rows; `shares` offers the same short option set on every row (`_decided` refuses a
 * column whose values are longer than 46 characters, and a description is a sentence); `check`
 * asks about one row and throws the rest away. So the table was shown and the learner was never
 * asked, which is the single largest share of "the activities are thin".
 *
 * WHY IT IS HARDER THAN RECOGNISING. Every row's answer is one of the same N descriptions, used
 * once each: it is a permutation, not N independent four-way guesses, so a learner who knows
 * three of five rows cannot arrive at the other two by elimination of a fresh option list. There
 * is no cue, because every option is the author's own wording from the same column.
 *
 * THE ANSWER IS NOT ON THE SCREEN TWICE. A matcher built from a table that is ALSO folded above
 * it as an exhibit would print its own answer key; 49 exercises in this course already do that
 * by another route. The generator replaces the exhibit with the matcher rather than adding one -
 * see tools/cma_scenes.auto_match - and gates/cma_coverage C1 is what keeps the table declared
 * exactly once.
 *
 * AND A PHRASE OF HIS ELSEWHERE ON THE PAGE IS NOT A LEAK, which was measured rather than
 * assumed: of 108 matchers, 2 have two or more of their answers appearing in another scene's
 * text on the same page - "Warranty liability" in section 12.6, "Zero-based budget" in 5.4.
 * Both are the term the section TEACHES, appearing in the author's own questions about it.
 * Knowing a phrase exists does not tell a learner which row it belongs to, because what this
 * exercise asks for is the PAIRING. The numeric leak test (gates/cma_interactive A9) does not
 * transfer to a mapping, and nothing here needs to be hidden.
 *
 * spec: {
 *   caption: his caption for the table                              (optional)
 *   col:     the heading of the column being matched                (his words)
 *   rows:    [ {label, right, why} ]  label  his first-column cell
 *                                    right  the cell that belongs to it
 *                                    why    the author's whole row, shown when it is wrong
 *   note:    a closing sentence of his                              (optional)
 * }
 *
 * The option list is derived from `rows` rather than carried: a separate `options` key could
 * disagree with the answers, and the one thing a matcher must not do is offer a set that does
 * not contain every answer exactly once.
 */
(function (root, doc) {
  "use strict";

  var D = root.Deck;
  var E = D.util.E, esc = D.util.esc, yoursFirst = D.util.yoursFirst;
  var shuffle = D.util.shuffle;

  D.register("match", function (stage, spec, api) {
    var rows = (spec.rows || []).filter(function (r) { return r && r.label && r.right; });

    if (spec.caption) stage.appendChild(E("p", "note mtc-cap", spec.caption));

    /* every answer, once, in a stable shuffled order. `D.util.shuffle` is the deck's own
       seeded stream, so the same scene shuffles the same way on every render and a screenshot
       of it can be compared with the next one. */
    var opts = rows.map(function (r) { return r.right; });
    var seen = {}, uniq = [];
    opts.forEach(function (o) { if (!seen[o]) { seen[o] = 1; uniq.push(o); } });
    var order = shuffle ? shuffle(uniq.slice()) : uniq.slice();

    var wrap = E("div", "mtc");
    stage.appendChild(wrap);
    var head = E("div", "mtc-row mtc-head");
    head.appendChild(E("span", "mtc-lab", spec.label || ""));
    head.appendChild(E("span", "mtc-pick", spec.col || ""));
    wrap.appendChild(head);

    var sels = [];
    rows.forEach(function (r, i) {
      var row = E("div", "mtc-row");
      row.appendChild(E("span", "mtc-lab", r.label));
      var sel = doc.createElement("select");
      sel.className = "mtc-sel";
      sel.setAttribute("aria-label", r.label);
      var blank = doc.createElement("option");
      blank.value = "";
      blank.textContent = "— choose —";
      sel.appendChild(blank);
      order.forEach(function (o) {
        var op = doc.createElement("option");
        op.value = o;
        op.textContent = o;
        sel.appendChild(op);
      });
      sel.addEventListener("change", function () {
        row.classList.remove("ok", "no");
      });
      row.appendChild(sel);
      wrap.appendChild(row);
      sels.push({ r: r, sel: sel, row: row });
    });

    return function () {
      var right = 0, yours = [], mine = [];
      sels.forEach(function (x) {
        var ok = x.sel.value === x.r.right;
        x.row.classList.remove("ok", "no");
        x.row.classList.add(ok ? "ok" : "no");
        if (ok) { right++; return; }
        yours.push({ k: "n", html: "<b>" + esc(x.r.label) + "</b> " +
                                   esc(x.r.why || (spec.col + ": " + x.r.right + ".")) });
      });
      var all = right === sels.length;
      if (all) {
        sels.forEach(function (x) {
          mine.push({ k: "y", html: "<b>" + esc(x.r.label) + "</b> " +
                                    esc(x.r.why || (spec.col + ": " + x.r.right + ".")) });
        });
        if (spec.note) mine.push({ k: "y", html: esc(spec.note) });
      }
      return { score: right, total: sels.length, ok: all,
               verdict: all ? "Every row placed."
                            : right + " of " + sels.length + " right",
               html: yoursFirst(yours, mine) };
    };
  });

}(window, document));
