/* lines.js — a printed statement, as an EXHIBIT inside an exercise.
 *
 * WHAT CHANGED, AND WHY. This used to register a "lines" SCENE that returned score 0
 * with the verdict "Read". Like the figure scenes, it could not be got wrong, so it
 * was a slide: the balance sheet was handed over to be looked at, on the screen before
 * the one that asked a question about it. Now the statement is an exhibit folded into
 * the exercise that follows, so the learner reads it while deciding, not before.
 *
 * WHY NOT REUSE "table". That scene kind looks general and is not: it labels every row
 * either "PRIMARY USER" or "another reader", because it was written for Chapter 1's
 * table of who reads financial statements. Pointed at a balance sheet it would announce
 * that "Total current assets" is a primary user.
 *
 * WHY NOT REUSE THE "statement" CLASSES either. .stmt-name is already the printed name
 * of a statement in site.css, and .stmt-row is a three-column drop grid. Borrowing them
 * for a two-year table inherits layout written for a different job, so this carries its
 * own .lns-* classes.
 *
 * Clicking a line still compares the two columns — that is a reading aid inside a task
 * now, not a thing the learner is scored on.
 */
(function (root, doc) {
  "use strict";

  function E(tag, cls, text) {
    var e = doc.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /* spec: { caption, col1, col2, rows[], hint } — the lines scene's own fields. */
  function lines(spec) {
    var host = E("div", "lns-host");
    var wrap = E("div", "lns");
    var head = E("div", "lns-row lns-head");
    head.appendChild(E("span", "lns-name", spec.caption || ""));
    head.appendChild(E("span", "lns-n", spec.col1 || ""));
    head.appendChild(E("span", "lns-n", spec.col2 || ""));
    wrap.appendChild(head);

    var note = E("p", "note lns-note",
                 spec.hint || "Click a line to compare the two columns.");

    (spec.rows || []).forEach(function (r) {
      /* A ROW IS ONE OF THREE THINGS, and rendering all three as clickable money lines
         was wrong in two ways a screenshot showed at once. A HEADING ("ASSETS",
         "Current assets") carries no figures, so it answered "Current assets: unchanged
         at " and drew a subtotal rule under two empty columns. A NOTE is the case
         exhibit's memos, two sentences of narrative that landed in a 128px monospace
         column as a tall ribbon of one or two words a line. */
      if (r.head) {
        wrap.appendChild(E("div", "lns-head-row", r.name));
        return;
      }
      if (r.note) {
        wrap.appendChild(E("p", "lns-memo", r.name));
        return;
      }
      var row = E("button", "lns-row" + (r.total ? " is-total" : ""));
      row.type = "button";
      row.appendChild(E("span", "lns-name", r.name));
      row.appendChild(E("span", "lns-n", r.a || ""));
      row.appendChild(E("span", "lns-n", r.b || ""));
      row.addEventListener("click", function () {
        Array.prototype.slice.call(wrap.querySelectorAll(".lns-row")).forEach(function (x) {
          x.classList.remove("on");
        });
        row.classList.add("on");
        var moved = "";
        if (r.a && r.b && r.a !== r.b) moved = r.name + ": " + r.b + " → " + r.a + ".";
        else if (r.a && !r.b) moved = r.name + " appears in the first column only.";
        note.textContent = moved || (r.name + ": unchanged at " + (r.a || ""));
      });
      wrap.appendChild(row);
    });

    host.appendChild(wrap);
    host.appendChild(note);
    return host;
  }

  root.Exhibit = root.Exhibit || {};
  root.Exhibit.lines = lines;
})(window, document);
