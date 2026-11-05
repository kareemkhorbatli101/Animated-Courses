/* objects5.js — YOURTURN, the author's own exercise, with the numbers travelling.
 *
 * WHY A FIFTH FILE. The same reason objects3.js and objects4.js exist: one file, one IIFE,
 * every helper aliased at the top. A renderer appended to a file that already holds an IIFE
 * lands inside the last one and throws on the first Check, with a button that looks live.
 *
 * WHAT IT IS FOR. Seventeen of the eighteen chapters end in a "Your turn" answer key: the
 * author blanks four to six cells of one figure and then answers them himself, with his
 * working. Those are the best exercises in the book and sixteen of them were on no screen.
 * `locks` is the nearest thing that ships and it cannot hold them, for three reasons:
 *
 *   1. It grades `Number(v)` against a bare answer, so `(25,000)` and `40%` and `$14,400` -
 *      three of the ways he writes a result - all come out NaN.
 *   2. It shows no working, so a line like `21,000 / 1.05 =` has nothing on screen to work
 *      from and the exercise becomes a memory test.
 *   3. It has no chain. His own arithmetic carries: Chapter 7's six lines end
 *      `$51,400 + $16,600 = $68,000`, and $51,400 and $16,600 are the answers to lines 4
 *      and 5. Printing that working hands both of them over.
 *
 * THE CHAIN IS THE POINT. A line whose working quotes an earlier answer stays SHUT - its
 * working hidden and its box dead - until every line it quotes is right. So a reader cannot
 * read the total off the sum of the parts; they have to produce the parts first, which is
 * exactly the order he teaches in. `needs` is computed in the generator by looking for each
 * earlier answer inside this line's working, so the chain is his, not a guess about his.
 *
 * spec: {
 *   caption: his caption for the figure the blanks belong to      (optional)
 *   note:    his closing sentence, the check he writes            (optional)
 *   blanks:  [ {label, prompt, working, shown, answer, needs:[i]} ]
 *            label   his name for the row
 *            prompt  his working up to the `=`; "" when the label carries the arithmetic
 *            working his whole line, shown only in the feedback
 *            shown   the result as HE prints it ("$14,400", "40%", "(25,000)")
 *            answer  the same as a number, which is what is graded. `norm` below strips a
 *                    per cent sign and turns "(25,000)" into -25000, so all three of his
 *                    ways of writing a result grade from one number and no flag is needed.
 * }
 *
 * THE FIELD IS `blanks` AND NOT `lines`. scene.js folds an exhibit in before the renderer
 * runs, and `spec.lines` is one of the three keys it folds: a scene carrying its own `lines`
 * would have had Exhibit.lines() try to draw them as a printed statement above the exercise,
 * and the renderer below would still have worked - so the only sign would have been a garbled
 * table on sixteen screens. `caption` IS shared with that exhibit and means the same thing
 * here, which is why it keeps its name.
 */
(function (root, doc) {
  "use strict";

  var D = root.Deck;
  var E = D.util.E, esc = D.util.esc, yoursFirst = D.util.yoursFirst;

  function norm(v) {
    return String(v === undefined || v === null ? "" : v)
      .replace(/[,\s$%]/g, "").replace(/^\((.*)\)$/, "-$1");
  }
  function num(v) {
    var s = norm(v);
    if (s === "" || !/^-?\d+(\.\d+)?$/.test(s)) return null;
    return Number(s);
  }

  D.register("yourturn", function (stage, spec, api) {
    var blanks = spec.blanks || [];

    /* HIS INSTRUCTION FIRST, then his caption for the figure the blanks belong to. The
       instruction is in `exhibit` and not in `say` because the learner reads it to answer -
       so it is the author's content, checked word by word, rather than interface text under
       a word budget. `check` and `number` already draw `spec.exhibit` the same way. */
    if (spec.exhibit) {
      var ex = E("p", "note");
      ex.innerHTML = spec.exhibit;
      stage.appendChild(ex);
    }
    if (spec.caption) stage.appendChild(E("p", "note yt-cap", spec.caption));

    var wrap = E("div", "yt");
    stage.appendChild(wrap);

    var rowsOf = [];
    blanks.forEach(function (ln, i) {
      var row = E("div", "yt-row");
      row.appendChild(E("span", "yt-ic", "🔓"));
      row.appendChild(E("span", "yt-lk", ln.label));

      /* his working, with the result cut off. A line that waits shows why it waits instead,
         because showing the working early is the one thing that would give the answer away. */
      var work = E("span", "yt-work", ln.prompt || "");
      row.appendChild(work);

      var inp = E("input", "yt-in");
      inp.type = "text";
      inp.inputMode = "decimal";
      inp.autocomplete = "off";
      inp.setAttribute("aria-label", ln.label);
      row.appendChild(inp);
      wrap.appendChild(row);

      rowsOf.push({ ln: ln, i: i, row: row, work: work, inp: inp,
                    needs: (ln.needs || []).slice() });
    });

    function right(x) {
      var v = num(x.inp.value);
      return v !== null && Math.abs(v - Number(x.ln.answer)) < 0.001;
    }

    /* a row opens only when every row it quotes is right */
    function gate() {
      rowsOf.forEach(function (x) {
        var open = x.needs.every(function (j) { return right(rowsOf[j]); });
        x.row.classList.toggle("waiting", !open);
        x.inp.disabled = !open;
        if (!open) {
          x.inp.value = "";
          x.work.textContent = "";
          x.work.classList.add("yt-wait");
          x.work.setAttribute("data-wait", "Answer the lines above first");
        } else {
          x.work.classList.remove("yt-wait");
          x.work.removeAttribute("data-wait");
          x.work.textContent = x.ln.prompt || "";
        }
      });
    }

    rowsOf.forEach(function (x) {
      x.inp.addEventListener("input", function () {
        var ok = right(x);
        x.row.classList.toggle("shut", ok);
        x.row.querySelector(".yt-ic").textContent = ok ? "🔒" : "🔓";
        gate();
      });
    });
    gate();

    return function () {
      var got = 0, yours = [], mine = [];
      rowsOf.forEach(function (x) {
        var ok = right(x);
        x.row.classList.toggle("shut", ok);
        x.row.querySelector(".yt-ic").textContent = ok ? "🔒" : "🔓";
        if (ok) { got++; return; }
        /* A WAITING LINE IS NOT MARKED WRONG. Its box was dead, so the reader was never
           given the chance to answer it; counting it against them would punish the slip
           above twice. It is reported as waiting and left out of the score. */
        var waiting = x.needs.some(function (j) { return !right(rowsOf[j]); });
        yours.push({ k: "n", html: waiting
          ? "<b>" + esc(x.ln.label) + "</b> waits on the line above it."
          : "<b>" + esc(x.ln.label) + "</b> is " + esc(String(x.ln.shown)) + ". " +
            esc(x.ln.working || "") });
      });
      var asked = rowsOf.filter(function (x) {
        return x.needs.every(function (j) { return right(rowsOf[j]); });
      }).length;
      var all = got === rowsOf.length;
      if (all) {
        rowsOf.forEach(function (x) {
          mine.push({ k: "y", html: "<b>" + esc(x.ln.label) + "</b> " +
                                    esc(x.ln.working || String(x.ln.shown)) });
        });
        if (spec.note) mine.push({ k: "y", html: esc(spec.note) });
      }
      return { score: got, total: rowsOf.length, ok: all,
               verdict: all ? "Every line closed, and the chain with it."
                            : got + " of " + rowsOf.length + " closed" +
                              (asked < rowsOf.length ? " · " + (rowsOf.length - asked) +
                               " still waiting" : ""),
               html: yoursFirst(yours, mine) };
    };
  });

}(window, document));
