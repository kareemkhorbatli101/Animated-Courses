/* answers-view.js — renders the chapter's answer section.
 *
 * It does not transcribe the answers. answers.html loads every page's data file
 * in turn and stashes each one, and this file walks those real exercise
 * definitions to print the answer and the explanation for every option. So the
 * answer section cannot drift away from the exercises it answers.
 */
(function (root, doc) {
  "use strict";

  var L = root.LEDGER;
  var PAGES = root.CAPTURED || [];

  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function esc(s) {
    return String(s === undefined || s === null ? "" : s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }
  function strip(s) { return String(s).replace(/<[^>]*>/g, ""); }

  function page(id) {
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].id === id) return PAGES[i];
    return null;
  }

  /* Walk a page's blocks, including the ones nested inside a checkgroup. */
  function exercises(p) {
    var out = [];
    (function walk(blocks, group) {
      (blocks || []).forEach(function (b) {
        if (!b || typeof b !== "object") return;
        if (b.type === "checkgroup") { (b.items || []).forEach(function (it) { out.push({ ex: it, group: "check" }); }); return; }
        if (b.type === "group") { walk(b.blocks, group); return; }
        if (b.id && b.type) out.push({ ex: b, group: group });
      });
    })(p ? p.blocks : [], null);
    return out;
  }

  /* ---- one exercise's answer, as a block of HTML ---- */
  function answerFor(ex) {
    var t = ex.type, h = "";

    if (t === "mcq") {
      var right = (ex.options || []).filter(function (o) { return o.correct; });
      h += "<p class=\"ans-q\">" + ex.prompt + "</p>";
      h += "<p class=\"ans-a\"><strong>Answer:</strong> " + right.map(function (o) { return strip(o.text); }).join("; ") + "</p>";
      h += "<ul class=\"why-list\">" + (ex.options || []).map(function (o) {
        return "<li class=\"" + (o.correct ? "why-ok" : "why-no") + "\"><strong>" + strip(o.text) + "</strong> " +
          (o.why || "") + "</li>";
      }).join("") + "</ul>";
      return h;
    }
    if (t === "selectlist" || t === "blank") {
      var r = (ex.options || []).filter(function (o) { return o.correct; })[0] || {};
      h += "<p class=\"ans-q\">" + (ex.prompt || (ex.parts || []).join(" ______ ")) + "</p>";
      h += "<p class=\"ans-a\"><strong>Answer:</strong> " + strip(r.text || "") + "</p>";
      h += "<ul class=\"why-list\">" + (ex.options || []).map(function (o) {
        return "<li class=\"" + (o.correct ? "why-ok" : "why-no") + "\"><strong>" + strip(o.text) + "</strong> " +
          (o.why || "") + "</li>";
      }).join("") + "</ul>";
      return h;
    }
    if (t === "number") {
      var fields = ex.fields || [{ label: ex.label || "Answer", answer: ex.answer, explain: ex.explanation,
                                   display: ex.display, diagnostics: ex.diagnostics, unit: ex.unit }];
      if (ex.prompt) h += "<p class=\"ans-q\">" + ex.prompt + "</p>";
      h += "<ul class=\"why-list\">" + fields.map(function (f) {
        var s = "<li class=\"why-ok\"><strong>" + esc(f.label) + " = " +
          (f.display || L.money(f.answer)) + (f.unit || ex.unit ? " " + esc(f.unit || ex.unit) : "") +
          "</strong> " + (f.explain || "");
        if (f.diagnostics && f.diagnostics.length) {
          s += "<ul class=\"why-list ans-diag\">" + f.diagnostics.map(function (d) {
            return "<li class=\"why-no\"><strong>" + esc(d.value) + " is wrong:</strong> " + (d.says || "") + "</li>";
          }).join("") + "</ul>";
        }
        return s + "</li>";
      }).join("") + "</ul>";
      return h;
    }
    if (t === "tie") {
      h += "<ul class=\"why-list\">" + (ex.ties || []).map(function (x) {
        return "<li class=\"why-ok\"><strong>" + esc(x.prompt) + " = " + L.money(x.answer) + "</strong> " +
          (x.explain || "") + "</li>";
      }).join("") + "</ul>";
      return h;
    }
    if (t === "match") {
      if (ex.prompt) h += "<p class=\"ans-q\">" + ex.prompt + "</p>";
      h += "<ul class=\"why-list\">" + (ex.pairs || []).map(function (p) {
        return "<li class=\"why-ok\"><strong>" + esc(p.a) + " → " + esc(p.b) + "</strong> " + (p.why || "") + "</li>";
      }).join("");
      (ex.distractors || []).forEach(function (dd) {
        h += "<li class=\"why-no\"><strong>" + esc(dd.b) + " belongs to nothing here.</strong> " + (dd.why || "") + "</li>";
      });
      return h + "</ul>";
    }
    if (t === "classify" || t === "imagedrop") {
      var labelOf = function (id) {
        if (t === "classify") {
          var c = (ex.categories || []).filter(function (x) { return x.id === id; })[0];
          return c ? c.label : id;
        }
        return id;
      };
      if (ex.prompt) h += "<p class=\"ans-q\">" + ex.prompt + "</p>";
      h += "<ul class=\"why-list\">" + (ex.items || []).map(function (it) {
        return "<li class=\"why-ok\"><strong>" + esc(it.name) + " → " +
          esc(labelOf(it.cat || it.zone)) + "</strong> " + (it.why || "") + "</li>";
      }).join("");
      (ex.distractors || []).forEach(function (dd) {
        h += "<li class=\"why-no\"><strong>" + esc(dd.name) + " belongs in no box.</strong> " + (dd.why || "") + "</li>";
      });
      return h + "</ul>";
    }
    if (t === "cloze") {
      var sentence = "";
      (ex.parts || []).forEach(function (part, i) {
        sentence += part;
        if (i < (ex.answers || []).length) sentence += "<strong class=\"ans-fill\">" + esc(ex.answers[i].word) + "</strong>";
      });
      h += "<p class=\"ans-q\">" + sentence + "</p>";
      h += "<ul class=\"why-list\">" + (ex.answers || []).map(function (a, i) {
        return "<li class=\"why-ok\"><strong>Blank " + (i + 1) + ": " + esc(a.word) + "</strong> " + (a.why || "") + "</li>";
      }).join("") + "</ul>";
      if (ex.extra && ex.extra.length) {
        h += "<p class=\"ans-note\">Unused words: " + ex.extra.map(esc).join(", ") + ". " + (ex.note || "") + "</p>";
      }
      return h;
    }
    if (t === "order") {
      h += "<ol class=\"ans-order\">" + (ex.items || []).slice().sort(function (a, b) { return a.pos - b.pos; })
        .map(function (it) { return "<li><strong>" + esc(it.text) + "</strong> " + (it.why || "") + "</li>"; })
        .join("") + "</ol>";
      return h;
    }
    if (t === "journal") {
      h += "<p class=\"ans-q\">" + esc(ex.scenario) + (ex.date ? " <em>(" + esc(ex.date) + ")</em>" : "") + "</p>";
      h += "<table class=\"je\"><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>" +
        (ex.lines || []).map(function (ln) {
          return "<tr><td class=\"" + (ln.side === "cr" ? "je-indent" : "") + "\">" + esc(ln.account) + "</td>" +
            "<td>" + (ln.side === "dr" ? L.money(ln.amount) : "") + "</td>" +
            "<td>" + (ln.side === "cr" ? L.money(ln.amount) : "") + "</td></tr>";
        }).join("") + "</tbody></table>";
      if (ex.logic) h += "<p>" + ex.logic + "</p>";
      if (ex.equation) h += "<p class=\"ans-note\"><strong>Effects:</strong> " + esc(ex.equation) + "</p>";
      return h;
    }
    if (t === "grid") {
      h += "<div class=\"table-scroll\"><table class=\"je\"><thead><tr><th>Row</th><th>Journal entry</th>" +
        "<th>Assets</th><th>Liab.</th><th>Equity</th><th>Net income</th><th>Cash flow</th></tr></thead><tbody>" +
        (ex.rows || []).map(function (r) {
          return "<tr" + (r.given ? " class=\"given\"" : "") + "><td>" + r.n + (r.given ? " (given)" : "") + "</td><td>" +
            r.entry.map(function (ln) {
              return (ln.side === "dr" ? "Dr " : "Cr ") + esc(ln.account) + " " + L.money(ln.amount);
            }).join("<br>") + "</td>" +
            "<td>" + L.signed(r.eff.a) + "</td><td>" + L.signed(r.eff.l) + "</td>" +
            "<td>" + L.signed(r.eff.e) + "</td><td>" + L.signed(r.eff.ni) + "</td>" +
            "<td>" + (r.eff.cf === "none" ? "none" : r.eff.cf + " " + L.signed(r.eff.cfAmount)) + "</td></tr>" +
            (r.note ? "<tr><td></td><td colspan=\"6\" class=\"ans-note\">" + esc(r.note) + "</td></tr>" : "");
        }).join("") + "</tbody></table></div>";
      return h;
    }
    if (t === "equation") {
      h += "<p class=\"ans-q\">" + esc(ex.scenario) + "</p>";
      h += "<ul class=\"why-list\">" + (ex.lines || []).map(function (ln) {
        var w = ln.answer === "up" ? "increases" : ln.answer === "down" ? "decreases" : "does not change";
        return "<li class=\"why-ok\"><strong>" + esc(ln.label) + " " + w + ".</strong> " + (ln.why || "") + "</li>";
      }).join("") + "</ul>";
      if (ex.note) h += "<p class=\"ans-note\">" + esc(ex.note) + "</p>";
      return h;
    }
    if (t === "stem") {
      h += "<ul class=\"why-list\">" + (ex.stems || []).map(function (s) {
        return "<li class=\"why-ok\"><strong>" + esc(s.text) + "</strong><br>Cue word: <strong>" + esc(s.cue) +
          "</strong>. " + esc(s.effect) + " " + (s.why || "") + "</li>";
      }).join("") + "</ul>";
      return h;
    }
    if (t === "selfex") {
      h += "<p class=\"ans-q\">" + ex.prompt + "</p>";
      h += "<p>" + ex.model + "</p>";
      h += "<p class=\"ans-note\"><strong>Your answer should cover:</strong></p><ul class=\"why-list\">" +
        (ex.checklist || []).map(function (c) { return "<li class=\"why-other\">" + c + "</li>"; }).join("") + "</ul>";
      return h;
    }
    if (t === "flashcards") {
      return "<p class=\"ans-note\">A drill over the chapter's " + (ex.terms || []).length +
        " terms. Every term, with its Arabic equivalent and its meaning, is listed on the " +
        "<a href=\"terms.html\">Term bank</a> page and in <a href=\"../glossary.html\">Appendix A</a>.</p>";
    }
    return "<p class=\"ans-note\">See the exercise itself.</p>";
  }

  function section(host, title, intro, rows) {
    var h2 = E("h2", "sec-heading", title);
    h2.id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    host.appendChild(h2);
    if (intro) { var p = E("p", "sec-sub"); p.innerHTML = intro; host.appendChild(p); }
    rows.forEach(function (r) {
      var art = E("article", "ans-item");
      var head = E("div", "ans-head");
      head.appendChild(E("span", "ans-badge", r.badge));
      head.appendChild(E("h3", null, r.title));
      if (r.href) {
        var a = E("a", "ans-link", "open the exercise →");
        a.href = r.href;
        head.appendChild(a);
      }
      art.appendChild(head);
      var body = E("div", "ans-body");
      body.innerHTML = r.html;
      art.appendChild(body);
      host.appendChild(art);
    });
  }

  function run() {
    var host = doc.getElementById("content");
    if (!host) return;

    var secPages = ["s1-1", "s1-2", "s1-3", "s1-4", "s1-5", "s1-6", "s1-7"];
    var titles = {};
    (root.Progress ? root.Progress.TOC : []).forEach(function (p) { titles[p.id] = p; });

    /* 1. Section checks, in the book's order */
    var checks = [];
    secPages.forEach(function (pid) {
      exercises(page(pid)).filter(function (x) { return x.group === "check"; }).forEach(function (x) {
        checks.push({ badge: x.ex.badge, title: (titles[pid] ? "Section " + titles[pid].n : pid),
                      href: pid + ".html#ex-" + x.ex.id, html: answerFor(x.ex) });
      });
    });
    section(host, "Section checks",
      "The <strong>Test yourself</strong> items from each section, with the explanation for every option — " +
      "including why each wrong option is wrong.", checks);

    /* 2. Your turn: the February rows the learner completes */
    var yt = [];
    exercises(page("s1-3")).forEach(function (x) {
      if (x.ex.type === "grid") yt.push({ badge: "F01-06", title: "Your turn · the February effect grid",
        href: "s1-3.html#ex-" + x.ex.id, html: answerFor(x.ex) });
    });
    L.february.filter(function (r) { return !r.given; }).forEach(function (r) {
      var ex = exercises(page("s1-3")).filter(function (x) { return x.ex.id === "feb" + r.n; })[0];
      if (ex) yt.push({ badge: "Row " + r.n, title: r.short, href: "s1-3.html#ex-feb" + r.n, html: answerFor(ex.ex) });
    });
    section(host, "Your turn · February, rows 4 to 6",
      "Rows 1 to 3 are given in the book. These are the rows you complete, with the journal entry and the effects " +
      "for each.", yt);

    /* 3. Multiple-choice P01-P16 */
    section(host, "Multiple-choice questions",
      "P01 to P16, with the explanation for all four options of each question.",
      exercises(page("practice")).map(function (x) {
        return { badge: x.ex.badge, title: "Practice question " + x.ex.badge,
                 href: "practice.html#ex-" + x.ex.id, html: answerFor(x.ex) };
      }));

    /* 4. The case */
    section(host, "Case question · " + L.company.barada,
      "The case items in the exam's own formats, with the diagnosis for each named wrong answer.",
      exercises(page("case")).map(function (x) {
        return { badge: x.ex.badge, title: x.ex.title, href: "case.html#ex-" + x.ex.id, html: answerFor(x.ex) };
      }));

    /* 5. Everything else, section by section */
    var h2 = E("h2", "sec-heading", "Section exercises");
    h2.id = "section-exercises";
    host.appendChild(h2);
    var intro = E("p", "sec-sub");
    intro.innerHTML = "The book prints answers for its section checks, its Your Turn and its practice set. " +
      "These are the answers to the interactive exercises this site adds on top of them — every one of which " +
      "is built from the chapter's own content.";
    host.appendChild(intro);

    secPages.concat(["summary", "terms", "review"]).forEach(function (pid) {
      var rows = exercises(page(pid)).filter(function (x) { return x.group !== "check"; });
      if (!rows.length) return;
      var t = titles[pid];
      section(host, (t ? (t.n === "◆" ? t.title : "Section " + t.n + " · " + t.title) : pid), null,
        rows.map(function (x) {
          return { badge: x.ex.badge || x.ex.id, title: x.ex.title,
                   href: pid + ".html#ex-" + x.ex.id, html: answerFor(x.ex) };
        }));
    });

    if (root.Chrome) root.Chrome.refreshProgress();
  }

  root.AnswersView = { run: run };
})(window, document);
