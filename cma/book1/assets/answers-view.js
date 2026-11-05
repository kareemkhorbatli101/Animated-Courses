/* answers-view.js — the answer section, rendered from the live scene definitions
   rather than transcribed, so it cannot drift from the scenes it answers. */
(function (root, doc) {
  "use strict";
  var L = root.LEDGER, P = root.Progress;
  var PAGES = root.CAPTURED || [];
  function E(t, c, x) { var n = doc.createElement(t); if (c) n.className = c; if (x !== undefined) n.textContent = x; return n; }
  function esc(s) { return String(s === null || s === undefined ? "" : s).replace(/[&<>]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function strip(s) { return esc(String(s).replace(/<[^>]*>/g, "")); }
  function m(n) { return L.money(n); }
  function ul(items) { return "<ul>" + items.join("") + "</ul>"; }
  function li(k, h) { return "<li class=\"" + k + "\">" + h + "</li>"; }

  function body(sc) {
    var k = sc.kind, h = "";
    if (k === "check") {
      var right = (sc.options || []).filter(function (o) { return o.correct; })[0] || {};
      h += "<p class=\"ans-a\"><b>Answer:</b> " + strip(right.text) + "</p>";
      return h + ul((sc.options || []).map(function (o) {
        return li(o.correct ? "y" : "n", "<b>" + strip(o.text) + "</b> " + (o.why || "")); }));
    }
    if (k === "number") {
      return ul((sc.fields || []).map(function (f) {
        var s = li("y", "<b>" + esc(f.label) + " = " + m(f.answer) + "</b> " + (f.why || ""));
        if (f.diag && f.diag.length) s += ul(f.diag.map(function (d) {
          return li("n", "<b>" + esc(d.v) + " is wrong:</b> " + esc(d.says)); }));
        return s; }));
    }
    if (k === "locks") {
      return ul((sc.ties || []).map(function (t) {
        return li("y", "<b>" + esc(t.label) + " = " + m(t.answer) + "</b> " + (t.why || "")); }));
    }
    if (k === "sort") {
      function lab(id) { var t = (sc.targets || []).filter(function (x) { return x.id === id; })[0];
        return t ? (t.label || (t.reveal ? t.reveal.name : id)) : id; }
      return ul((sc.items || []).map(function (i) {
        return li("y", "<b>" + esc(i.name) + "</b> → " + esc(lab(i.to)) + ". " + (i.why || "")); })
        .concat((sc.distractors || []).map(function (d) {
          return li("n", "<b>" + esc(d.name) + "</b> belongs nowhere here. " + (d.why || "")); })));
    }
    if (k === "statement") {
      h = "<table class=\"tbl\"><thead><tr><th>Line</th><th>Takes</th><th class=\"n\">Amount</th></tr></thead><tbody>";
      var val = {};
      (sc.sheet.lines || []).forEach(function (ln) {
        if (ln.t === "side") return;
        if (ln.expect) {
          var v = 0;
          ln.expect.forEach(function (id) {
            var c = (sc.chips || []).filter(function (x) { return x.id === id; })[0];
            if (c) v += c.neg ? -Math.abs(c.amount) : c.amount; });
          val[ln.slot] = v;
          h += "<tr><td>" + esc(ln.label) + "</td><td>" + ln.expect.map(esc).join(" + ") +
               "</td><td class=\"n\"><b>" + (v < 0 ? "(" + m(Math.abs(v)) + ")" : m(v)) + "</b></td></tr>";
        } else {
          var t = 0;
          (ln.of || []).forEach(function (s) { t += val[s] || 0; });
          h += "<tr><td><b>" + esc(ln.label) + "</b></td><td></td><td class=\"n\"><b>" + m(t) + "</b></td></tr>";
        }
      });
      h += "</tbody></table>";
      var notes = (sc.sheet.lines || []).filter(function (l) { return l.why; }).map(function (l) {
        return li("y", "<b>" + esc(l.label) + "</b> " + l.why); });
      if ((sc.distractors || []).length) notes = notes.concat(sc.distractors.map(function (d) {
        return li("n", "<b>" + esc(d.id) + "</b> does not belong on this statement. " + (d.why || "")); }));
      return h + ul(notes);
    }
    if (k === "post") {
      return "<div class=\"table-scroll\"><table class=\"tbl\"><thead><tr><th>#</th><th>Entry</th>" +
        "<th>A</th><th>L</th><th>E</th><th>NI</th><th>Cash flow</th></tr></thead><tbody>" +
        (sc.transactions || []).map(function (t) {
          return "<tr><td>" + t.n + (t.given ? " <span class=\"numunit\">given</span>" : "") + "</td><td>" +
            t.entry.map(function (ln) { return (ln.side === "dr" ? "Dr " : "Cr ") + esc(ln.account) + " " + m(ln.amount); }).join("<br>") +
            "</td><td>" + L.signed(t.eff.a) + "</td><td>" + L.signed(t.eff.l) + "</td><td>" + L.signed(t.eff.e) +
            "</td><td>" + L.signed(t.eff.ni) + "</td><td>" +
            (t.eff.cf === "none" ? "none" : t.eff.cf + " " + L.signed(t.eff.cfAmount)) + "</td></tr>" +
            ((sc.logic && sc.logic[t.n]) ? "<tr><td></td><td colspan=\"6\" class=\"note\">" + sc.logic[t.n] + "</td></tr>" : "");
        }).join("") + "</tbody></table></div>";
    }
    if (k === "cloze") {
      var sentence = "";
      (sc.parts || []).forEach(function (p, i) {
        sentence += esc(p);
        if (i < (sc.answers || []).length) sentence += " <b class=\"amt-ok\">" + esc(sc.answers[i].word) + "</b> ";
      });
      return "<p class=\"ans-a\">" + sentence + "</p>" + ul(sc.answers.map(function (a, i) {
        return li("y", "<b>" + esc(a.word) + "</b> " + (a.why || "")); }));
    }
    if (k === "probe") return ul((sc.probes || []).map(function (p) {
      return li("y", "<b>" + esc(p.q) + "</b><br>" + p.a); }));
    if (k === "cues") return ul((sc.stems || []).map(function (s) {
      return li("y", "<b>" + esc(s.text) + "</b><br>Cue: <b>" + esc(s.cue) + "</b> — " + esc(s.effect)); }));
    if (k === "contra") return ul([li("y", sc.rightWhy), li("n", sc.wrongWhy)]);
    if (k === "split") return ul([li("y", sc.rightWhy), li("n", sc.wrongWhy)]);
    if (k === "beam") return ul((sc.moves || []).map(function (x) {
      return li("y", "<b>" + esc(x.label) + "</b> " + x.why); }));
    if (k === "tank") return ul((sc.pipes || []).map(function (p) {
      return li(p.throughIncomeStatement === false ? "n" : "y", "<b>" + esc(p.label) + "</b> " + p.why); }));
    if (k === "timeline2") return ul((sc.stops || []).map(function (s) {
      return li("y", "<b>" + esc(s.when) + "</b> " + s.note); }));
    if (k === "wire") return ul((sc.links || []).map(function (l) { return li("y", l.why); }));
    if (k === "switch") return ul((sc.pairs || []).map(function (p) {
      return li("y", "<b>" + esc(p.us) + "</b> → " + esc(p.ifrs)); }));
    if (k === "table") return ul((sc.seats || []).map(function (s) {
      return li(s.primary ? "y" : "o", "<b>" + esc(s.user) + "</b> — " + esc(s.decision) + ". " +
        esc(s.q) + " Uses: " + esc(s.stmts)); }));
    if (k === "order") return ul((sc.items || []).slice().sort(function (a, b) { return a.pos - b.pos; })
      .map(function (x) { return li("y", "<b>" + x.pos + ". " + esc(x.text) + "</b> " + (x.why || "")); }));
    if (k === "gauges") return ul((sc.gauges || []).map(function (g) {
      return li("y", "<b>" + esc(g.key) + " = " + esc(g.value) + "</b> " + esc(g.note)); })
      .concat((sc.options || []).map(function (o) {
        return li(o.correct ? "y" : "n", "<b>" + strip(o.text) + "</b> " + o.why); })));
    if (k === "shelf") return ul((sc.volumes || []).filter(function (v) { return v.topic; }).map(function (v) {
      return li("y", "<b>ASC " + v.n + "</b> covers " + esc(v.topic) + ". " + esc(v.why || "")); }));
    /* Chapters 3-5. A kind with no branch here is an exercise whose answer a learner
       cannot look up, which gates/cma_interactive checks for every kind. */
    if (k === "waterfall") return ul((sc.rows || []).filter(function (r) { return r.subtotal; })
      .map(function (r) {
        return li("y", "<b>" + esc(r.label) + " " + esc(String(r.answer)) + "</b> " +
                       esc(r.why || "")); }));
    if (k === "treasury") return ul((sc.cases || []).map(function (c) {
      return li("y", "<b>" + esc(c.label) + " → " + esc(c.dest) + "</b> " +
                     esc(c.why || "")); }));
    if (k === "shares") return ul((sc.actions || []).map(function (a) {
      var cells = Object.keys(a.cells || {}).map(function (kk) {
        return esc(kk) + ": " + esc(a.cells[kk]); }).join(" · ");
      return li("y", "<b>" + esc(a.label) + "</b> " + cells + ". " + esc(a.why || "")); }));
    if (k === "signs") return ul((sc.items || []).map(function (i) {
      return li("y", "<b>" + (i.add ? "+ " : "− ") + esc(i.label) + "</b> " +
                     esc(i.why || "")); }));
    /* Chapters 6-18. Only the ENTERED cells of a schedule are answers; the given
       columns are the author's own figures and printing them here as if the learner
       had been asked for them would overstate what the exercise marked. */
    if (k === "schedule") {
      var sent = (sc.cols || []).filter(function (c) { return !c.given; });
      return ul((sc.rows || []).map(function (r) {
        var cells = sent.map(function (c) {
          return esc(c.label) + " " + esc(String((r.cells || {})[c.id]));
        }).join(" · ");
        return li("y", "<b>" + esc(r.label) + "</b> " + cells +
                       (r.why ? ". " + esc(r.why) : ""));
      }));
    }
    if (k === "rowpick") {
      var stp = sc.steps || [];
      return ul((sc.rows || []).map(function (r) {
        var picked = stp.map(function (s) {
          var src = (r.answers || {})[s.id];
          var lab = src;
          (sc.cols || []).forEach(function (c) { if (c.id === src) lab = c.label; });
          stp.forEach(function (s2) { if (s2.id === src) lab = s2.label; });
          return esc(s.label) + ": " + esc(lab);
        }).join(" · ");
        return li("y", "<b>" + esc(r.label) + "</b> " + picked +
                       (r.why ? ". " + esc(r.why) : ""));
      }));
    }
    if (k === "ladder") return ul((sc.rungs || []).map(function (r) {
      return li("y", "<b>" + esc(r.likelihood) + " → " + esc(r.treatment) + "</b> " +
                     esc(r.why || "")); }));
    /* The operating cycle: each leg's length, then the test that follows from the total.
       A kind with no branch here is an exercise whose answer a learner cannot look up,
       which is why gates/cma_interactive checks every kind against this file. */
    if (k === "cycle") return ul((sc.legs || []).map(function (g) {
      return li("y", "<b>" + esc(g.label) + ": " + g.days + " days</b> " + esc(g.why || "")); })
      .concat([li("y", esc(sc.ruleWhy || ""))]));
    if (k === "tbreader") return "<p class=\"note\">Every one of the twenty trial-balance lines, with the " +
      "statement it reaches, is built into the scene itself. The two that catch people are the contra-assets: " +
      "<b>allowance for credit losses</b> and <b>accumulated depreciation</b> both go to the balance sheet, " +
      "netted against the asset they reduce.</p>";
    if (k === "flash" || k === "termcards") return "<p class=\"note\">A drill over the chapter's " +
      L.TERMCOUNT + " bridged terms. Every term, with its Arabic and its meaning, is on the " +
      "<a href=\"terms.html\">Term bank</a> page and in <a href=\"../glossary.html\">Appendix A</a>.</p>";
    if (k === "traps") return "<p class=\"note\">Your own record, kept in this browser.</p>";
    /* A study scene has no answer, but it must still appear here: a reader looking for
       "where was that statement?" should find it, and a silent gap in this page is how an
       omitted scene hides. Both of these print what the scene shows. */
    if (k === "figure") return "<p class=\"note\"><b>" + esc(sc.label || "") + "</b> " +
      esc(sc.caption || "") + " Nothing to answer: the figure is the author's own.</p>";
    if (k === "lines") {
      h = "<table class=\"tbl\"><thead><tr><th>" + esc(sc.caption || "") + "</th><th class=\"n\">" +
          esc(sc.col1 || "") + "</th><th class=\"n\">" + esc(sc.col2 || "") + "</th></tr></thead><tbody>";
      (sc.rows || []).forEach(function (r) {
        var b0 = r.total ? "<b>" : "", b1 = r.total ? "</b>" : "";
        h += "<tr><td>" + b0 + esc(r.name) + b1 + "</td><td class=\"n\">" + b0 + esc(r.a || "") + b1 +
             "</td><td class=\"n\">" + b0 + esc(r.b || "") + b1 + "</td></tr>";
      });
      return h + "</tbody></table><p class=\"note\">A reading scene: nothing is marked.</p>";
    }
    /* `grid` is the wide form of `lines` (assets/grid.js): Chapter 4's roll-forward, one
       column per component of equity. Without a branch here it fell to "See the scene
       itself", which is the silent gap the comment above warns about. */
    if (k === "grid") {
      var cols = sc.cols || [];
      h = "<table class=\"tbl\"><thead><tr><th>" + esc(sc.caption || "") + "</th>";
      cols.forEach(function (c) { h += "<th class=\"n\">" + esc(c) + "</th>"; });
      h += "</tr></thead><tbody>";
      (sc.rows || []).forEach(function (r) {
        var b0 = r.total ? "<b>" : "", b1 = r.total ? "</b>" : "";
        h += "<tr><td>" + b0 + esc(r.name) + b1 + "</td>";
        cols.forEach(function (_c, i) {
          h += "<td class=\"n\">" + b0 + esc((r.cells || [])[i] || "") + b1 + "</td>";
        });
        h += "</tr>";
      });
      return h + "</tbody></table><p class=\"note\">A reading scene: nothing is marked.</p>";
    }
    return "<p class=\"note\">See the scene itself.</p>";
  }

  function controls(host) {
    var bar = E("div", "ansbar");
    bar.style.cssText = "display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:0 0 14px";
    var find = doc.createElement("input");
    find.type = "search";
    find.placeholder = "Find an answer…";
    find.setAttribute("aria-label", "Find an answer");
    find.className = "ansfind";
    var openAll = E("button", "btn btn-ghost", "Open all");
    openAll.type = "button";
    var shutAll = E("button", "btn btn-ghost", "Close all");
    shutAll.type = "button";
    var count = E("span", "note", "");

    function all() { return Array.prototype.slice.call(host.querySelectorAll("details.ans")); }
    openAll.addEventListener("click", function () { all().forEach(function (d) { d.open = true; }); });
    shutAll.addEventListener("click", function () { all().forEach(function (d) { d.open = false; }); });
    find.addEventListener("input", function () {
      var q = find.value.trim().toLowerCase();
      var shown = 0;
      all().forEach(function (d) {
        var hit = !q || d.textContent.toLowerCase().indexOf(q) >= 0;
        d.hidden = !hit;
        if (hit) shown++;
        if (q && hit) d.open = true;
      });
      host.querySelectorAll("h2.sec-h").forEach(function (h) {
        var any = false, n = h.nextElementSibling;
        while (n && n.tagName !== "H2") { if (!n.hidden) any = true; n = n.nextElementSibling; }
        h.hidden = !any;
      });
      count.textContent = q ? (shown + " answer" + (shown === 1 ? "" : "s") + " match") : "";
    });
    bar.appendChild(find); bar.appendChild(openAll); bar.appendChild(shutAll); bar.appendChild(count);
    host.parentNode.insertBefore(bar, host);
  }

  function run() {
    var host = doc.getElementById("content");
    var titles = {};
    P.TOC.forEach(function (t) { titles[t.id] = t; });
    PAGES.forEach(function (pg) {
      var t = titles[pg.id];
      var h2 = E("h2", "sec-h", t ? (t.n === "◆" ? t.title : t.n + " " + t.title) : pg.title);
      h2.id = "p-" + pg.id;
      host.appendChild(h2);
      /* ONE ANSWER AT A TIME. This page carried the whole key at once - ten and a half thousand
         words, no controls, the one screen in the chapter that was a wall to scroll past, on a site
         whose whole argument is that you should not have to. Each answer is now closed until it is
         asked for, which also stops a learner reading the answer to the next question by accident
         while looking up the last one. "Open all" is there for printing and for revision. */
      (pg.scenes || []).forEach(function (sc, i) {
        var art = E("details", "slot ans");
        art.style.marginBottom = "12px";
        var head = doc.createElement("summary");
        head.style.cssText = "display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;cursor:pointer";
        if (sc.kicker) head.appendChild(E("span", "card-b", sc.kicker));
        head.appendChild(E("span", "slot-h", sc.title));
        art.appendChild(head);
        var a = E("a", "note", "open the scene →");
        a.href = pg.id + ".html#s" + (i + 1);
        art.appendChild(a);
        if (sc.say) { var s = E("p", "note"); s.innerHTML = sc.say; art.appendChild(s); }
        var b = E("div", "fb show ok");
        b.innerHTML = body(sc);
        art.appendChild(b);
        host.appendChild(art);
      });
    });
    controls(host);
  }
  root.AnswersView = { run: run };
})(window, document);
