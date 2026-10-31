/* progress.js — completion, the trap counter, and the chapter contents.
 *
 * localStorage works on file:// in Chrome, Edge and Firefox, but every file://
 * page shares one opaque origin. So keys are namespaced, every access is wrapped,
 * and the site degrades to in-memory progress if storage throws (private window,
 * blocked site data).
 */
(function (root) {
  "use strict";

  var NS = "cma1b1.";
  var mem = {};
  var usable = (function () {
    try { root.localStorage.setItem(NS + "probe", "1"); root.localStorage.removeItem(NS + "probe"); return true; }
    catch (e) { return false; }
  })();

  function set(k, v) {
    mem[k] = v;
    if (usable) { try { root.localStorage.setItem(NS + k, v); } catch (e) {} }
  }
  function get(k) {
    if (usable) { try { var v = root.localStorage.getItem(NS + k); if (v !== null) return v; } catch (e) {} }
    return k in mem ? mem[k] : null;
  }
  function keysWithPrefix(p) {
    var out = [];
    if (usable) {
      try {
        for (var i = 0; i < root.localStorage.length; i++) {
          var k = root.localStorage.key(i);
          if (k && k.indexOf(NS + p) === 0) out.push(k.slice(NS.length));
        }
      } catch (e) {}
    }
    Object.keys(mem).forEach(function (k) { if (k.indexOf(p) === 0 && out.indexOf(k) < 0) out.push(k); });
    return out;
  }

  /* ---- the chapter's 13 pages, in the book's order. One definition, used by
         the rail, the hub, prev/next and the review page. ---- */
  var TOC = [
    { id: "s1-1",     file: "s1-1.html",     kind: "section", n: "1.1", title: "Who uses financial statements, and why?",          blurb: "Users, their decisions, and what makes information useful" },
    { id: "s1-2",     file: "s1-2.html",     kind: "section", n: "1.2", title: "The building blocks: elements and the accounting equation", blurb: "Ten elements, A = L + E, and what moves retained earnings" },
    { id: "s1-3",     file: "s1-3.html",     kind: "section", n: "1.3", title: "Double entry: debits and credits",                 blurb: "Normal balances, contra accounts, and thirteen journal entries" },
    { id: "s1-4",     file: "s1-4.html",     kind: "section", n: "1.4", title: "The accrual basis and the matching principle",     blurb: "Earned, not collected · incurred, not paid" },
    { id: "s1-5",     file: "s1-5.html",     kind: "section", n: "1.5", title: "Who writes the rules? U.S. GAAP and IFRS",         blurb: "FASB, the ASC, the SEC, the PCAOB and the IASB" },
    { id: "s1-6",     file: "s1-6.html",     kind: "section", n: "1.6", title: "A first look at the four statements",              blurb: "What each one answers, and how they link" },
    { id: "s1-7",     file: "s1-7.html",     kind: "section", n: "1.7", title: "Extended Example 1A: from a trial balance to a set of statements", blurb: "Build all three statements and make them tie" },
    { id: "summary",  file: "summary.html",  kind: "back",    n: "◆", title: "Chapter summary",      blurb: "The key rule for each of the seven topics" },
    { id: "terms",    file: "terms.html",    kind: "back",    n: "◆", title: "Term bank",            blurb: "Every term in the chapter, English and Arabic, with pronunciation" },
    { id: "practice", file: "practice.html", kind: "back",    n: "◆", title: "Practice · P01–P16", blurb: "Sixteen exam-style multiple-choice questions" },
    { id: "case",     file: "case.html",     kind: "back",    n: "◆", title: "Case question · Barada Wholesale", blurb: "A case-based question in the exam's own item formats" },
    { id: "review",   file: "review.html",   kind: "back",    n: "◆", title: "Mixed review",         blurb: "Interleaved retrieval across all seven sections" },
    { id: "answers",  file: "answers.html",  kind: "back",    n: "◆", title: "Answers and explanations", blurb: "The full answer section, for reference" }
  ];

  function pageIndex(id) { for (var i = 0; i < TOC.length; i++) if (TOC[i].id === id) return i; return -1; }

  /* ---- exercise and page completion ---- */
  function doneKey(page, ex) { return "ch01." + page + "." + ex; }

  function markExercise(page, ex) {
    set(doneKey(page, ex), "yes");
    recount(page);
  }
  function exerciseDone(page, ex) { return get(doneKey(page, ex)) === "yes"; }

  var registered = {};          /* page id -> [exercise ids], set by the engine */
  function register(page, ids) {
    registered[page] = ids;
    set("ch01." + page + ".count", String(ids.length));
    recount(page);
  }
  function recount(page) {
    var ids = registered[page];
    if (!ids) return;
    var n = 0;
    ids.forEach(function (id) { if (exerciseDone(page, id)) n++; });
    set("ch01." + page + ".done", String(n));
    if (ids.length && n === ids.length) set("ch01." + page + ".complete", "yes");
    if (root.Chrome && root.Chrome.refreshProgress) root.Chrome.refreshProgress();
  }
  function pageStats(id) {
    var total = Number(get("ch01." + id + ".count") || 0);
    var done = Number(get("ch01." + id + ".done") || 0);
    return { total: total, done: done, complete: get("ch01." + id + ".complete") === "yes" };
  }
  function chapterStats() {
    var t = 0, d = 0, pages = 0;
    TOC.forEach(function (p) {
      var s = pageStats(p.id);
      t += s.total; d += s.done;
      if (s.complete) pages++;
    });
    return { items: t, done: d, pagesComplete: pages, pages: TOC.length };
  }

  /* ---- the trap counter: failures recorded by named trap, not just counted ---- */
  function trapFail(trap) {
    var k = "ch01.trap." + trap;
    set(k, String(Number(get(k) || 0) + 1));
  }
  function trapPass(trap) {
    var k = "ch01.trap." + trap + ".ok";
    set(k, "yes");
  }
  function trapsFailed() {
    return keysWithPrefix("ch01.trap.")
      .filter(function (k) { return k.indexOf(".ok") < 0; })
      .map(function (k) {
        var name = k.slice("ch01.trap.".length);
        return { trap: name, fails: Number(get(k) || 0), fixed: get(k + ".ok") === "yes" };
      })
      .filter(function (t) { return t.fails > 0; })
      .sort(function (a, b) { return b.fails - a.fails; });
  }

  function reset() {
    keysWithPrefix("ch01.").forEach(function (k) {
      if (usable) { try { root.localStorage.removeItem(NS + k); } catch (e) {} }
      delete mem[k];
    });
  }

  function lastVisit(id) {
    if (id) set("ch01.last", id);
    return get("ch01.last");
  }

  root.Progress = {
    TOC: TOC, pageIndex: pageIndex,
    register: register, markExercise: markExercise, exerciseDone: exerciseDone,
    pageStats: pageStats, chapterStats: chapterStats,
    trapFail: trapFail, trapPass: trapPass, trapsFailed: trapsFailed,
    lastVisit: lastVisit, reset: reset,
    get storageWorks() { return usable; }
  };
})(window);
