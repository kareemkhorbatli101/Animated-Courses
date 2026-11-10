/* grid.js — a WIDE printed statement, as an EXHIBIT inside an exercise.
 *
 * WHY THIS EXISTS AND lines.js DOES NOT COVER IT. assets/lines.js renders a statement as
 * a name and TWO amount columns, which is the shape of Chapter 2's balance sheet, Chapter
 * 3's income statement and Chapter 5's cash flow statement: one line, one or two years.
 * Chapter 4's Figure F04-02 is not that shape. It is a roll-forward matrix — seven
 * columns, one per component of equity — and tools.cma_scenes.statement_scene correctly
 * returned None for it, which meant the chapter's CENTRAL figure was on no screen at all.
 * The gate caught it as "0 rows of F04-02"; this is the exhibit that makes it true.
 *
 * WHY IT IS AN EXHIBIT AND NOT A SCENE. Same reason as lines.js: a printed statement
 * cannot be got wrong, so as a scene it was a slide. It folds into the exercise that
 * follows it, so the learner reads it while deciding.
 *
 * WHAT THE CLICKS DO. A roll-forward has two directions, and the chapter says both must
 * hold: every column adds DOWN to its closing balance, and the closing row adds ACROSS to
 * total equity. So a row click reads the row across, and a column-header click reads the
 * column down. Neither is scored — the deciding happens in the exercise this sits above.
 */
(function (root, doc) {
  "use strict";

  function E(tag, cls, text) {
    var e = doc.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function clear(wrap, sel) {
    Array.prototype.slice.call(wrap.querySelectorAll(sel)).forEach(function (x) {
      x.classList.remove("on");
    });
  }

  /* spec: { caption, cols[], rows[{name, cells[], total, head}], hint } */
  function grid(spec) {
    var cols = spec.cols || [];
    var host = E("div", "grd-host");
    var wrap = E("div", "grd");
    wrap.style.setProperty("--grd-cols", String(cols.length));

    var note = E("p", "note grd-note",
                 spec.hint || "Click a row to read it across, or a column to read it down.");

    var head = E("div", "grd-row grd-head");
    head.appendChild(E("span", "grd-name", spec.caption || ""));
    cols.forEach(function (c, i) {
      var b = E("button", "grd-n grd-col", c);
      b.type = "button";
      b.addEventListener("click", function () {
        clear(wrap, ".grd-col");
        clear(wrap, ".grd-row");
        b.classList.add("on");
        var opening = "", closing = "", moves = 0;
        (spec.rows || []).forEach(function (r) {
          if (r.head || r.note) return;
          var v = (r.cells || [])[i] || "";
          if (!v) return;
          if (r.opening) opening = v;
          else if (r.total) closing = v;
          else moves += 1;
        });
        note.textContent = opening && closing
          ? c + ": " + opening + ", then " + moves + " movement" + (moves === 1 ? "" : "s")
            + ", closing at " + closing + "."
          : c + ": read this column down to its closing balance.";
      });
      head.appendChild(b);
    });
    wrap.appendChild(head);

    (spec.rows || []).forEach(function (r) {
      if (r.head) {
        wrap.appendChild(E("div", "grd-head-row", r.name));
        return;
      }
      if (r.note) {
        wrap.appendChild(E("p", "grd-memo", r.name));
        return;
      }
      var row = E("button", "grd-row" + (r.total ? " is-total" : "")
                            + (r.opening ? " is-open" : ""));
      row.type = "button";
      row.appendChild(E("span", "grd-name", r.name));
      cols.forEach(function (_c, i) {
        row.appendChild(E("span", "grd-n", (r.cells || [])[i] || ""));
      });
      row.addEventListener("click", function () {
        clear(wrap, ".grd-row");
        clear(wrap, ".grd-col");
        row.classList.add("on");
        /* The LAST column of a roll-forward is the total, and the ones before it are the
           components. Reading a row across is naming them in order and landing on it. */
        var cells = r.cells || [];
        var parts = [];
        for (var i = 0; i < cols.length - 1; i += 1) {
          if (cells[i]) parts.push(cols[i] + " " + cells[i]);
        }
        var last = cells[cols.length - 1] || "";
        note.textContent = parts.length && last
          ? r.name + ": " + parts.join(", ") + " → " + last + "."
          : r.name + ": " + (last || "no amount in this row") + ".";
      });
      wrap.appendChild(row);
    });

    host.appendChild(wrap);
    host.appendChild(note);
    return host;
  }

  root.Exhibit = root.Exhibit || {};
  root.Exhibit.grid = grid;
})(window, document);
