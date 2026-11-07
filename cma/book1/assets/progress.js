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

  /* ---- WHICH CHAPTER AM I IN ----
     This file is shared by every chapter, so the chapter has to say who it is. A chapter
     ships a data/toc.js that sets window.CHAPTER_ID and window.CHAPTER_TOC before this
     script loads. Chapter 1 does not, and must never need to: its id and its contents are
     the defaults below, so nothing about Chapter 1 changes by adding Chapter 2.

     The id is also the storage prefix. Keeping it per chapter means a learner's Chapter 1
     progress is not read as Chapter 2 progress, and "Reset my progress" on one chapter
     does not wipe the other. */
  var CH = String(root.CHAPTER_ID || "ch01");

  /* THE VOLUME'S OWN PREFIX, taken off the chapter id by dropping its trailing number.
     Book 1's chapters are stored as "ch07", Book 2's as "b2ch07" - qualified because
     localStorage is per ORIGIN and both books are served from the same site, so an
     unqualified "ch07" would have shown a Book 2 learner their Book 1 progress.

     allChapters() below walked every key beginning "ch", which is right for Book 1 and
     finds NOTHING for any later volume: Book 2's hub would have shown an empty
     "all chapters" panel, and an empty panel looks like a learner who has not started.
     Deriving the prefix keeps each volume's roll-up to its own chapters, and for Book 1
     the prefix is "ch" and the behaviour is exactly what it was. */
  var BOOK_PREFIX = CH.replace(/\d+$/, "") || "ch";
  var CH_KEY = new RegExp("^(" + BOOK_PREFIX + "\\d+)\\.([^.]+)\\.(count|done)$");

  /* ---- the chapter's 13 pages, in the book's order. One definition, used by
         the rail, the hub, prev/next and the review page. ---- */
  var CH01_TOC = [
    { id: "s1-1",     file: "s1-1.html",     kind: "section", n: "1.1", title: "Who uses financial statements, and why?",          blurb: "The boardroom table, the quality podium, five verbs \u00b7 7 scenes" },
    { id: "s1-2",     file: "s1-2.html",     kind: "section", n: "1.2", title: "The building blocks: elements and the accounting equation", blurb: "The balance beam, the retained-earnings tank \u00b7 9 scenes" },
    { id: "s1-3",     file: "s1-3.html",     kind: "section", n: "1.3", title: "Double entry: debits and credits",                 blurb: "Post twelve entries and build the effect grid \u00b7 10 scenes" },
    { id: "s1-4",     file: "s1-4.html",     kind: "section", n: "1.4", title: "The accrual basis and the matching principle",     blurb: "One sale, two years; the four adjustments derived · 6 scenes" },
    { id: "s1-5",     file: "s1-5.html",     kind: "section", n: "1.5", title: "Who writes the rules? U.S. GAAP and IFRS",         blurb: "Four bodies, four jobs; the ASC shelf \u00b7 6 scenes" },
    { id: "s1-6",     file: "s1-6.html",     kind: "section", n: "1.6", title: "A first look at the four statements",              blurb: "Wire the statements; read the trial balance \u00b7 7 scenes" },
    { id: "s1-7",     file: "s1-7.html",     kind: "section", n: "1.7", title: "Extended Example 1A: from a trial balance to a set of statements", blurb: "Build all three statements, complete, and tie them \u00b7 11 scenes" },
    { id: "summary",  file: "summary.html",  kind: "back",    n: "◆", title: "Chapter summary",      blurb: "Seven rules, the figures from memory \u00b7 3 scenes" },
    { id: "terms",    file: "terms.html",    kind: "back",    n: "◆", title: "Term bank",            blurb: "54 bilingual terms, drilled both ways \u00b7 4 scenes" },
    { id: "practice", file: "practice.html", kind: "back",    n: "◆", title: "Practice · P01–P16", blurb: "P01\u2013P16, one question per screen" },
    { id: "case",     file: "case.html",     kind: "back",    n: "◆", title: "Case question · Barada Wholesale", blurb: "C1-1 to C1-6 in the exam's item formats · 8 scenes" },
    { id: "review",   file: "review.html",   kind: "back",    n: "◆", title: "Mixed review",         blurb: "Interleaved, plus the traps you have missed \u00b7 5 scenes" },
    { id: "answers",  file: "answers.html",  kind: "back",    n: "◆", title: "Answers and explanations", blurb: "Every answer, generated from the scenes" }
  ];

  var TOC = root.CHAPTER_TOC || CH01_TOC;

  function pageIndex(id) { for (var i = 0; i < TOC.length; i++) if (TOC[i].id === id) return i; return -1; }

  /* ---- exercise and page completion ---- */
  function doneKey(page, ex) { return CH + "." + page + "." + ex; }

  function markExercise(page, ex) {
    set(doneKey(page, ex), "yes");
    recount(page);
  }
  function exerciseDone(page, ex) { return get(doneKey(page, ex)) === "yes"; }

  var registered = {};          /* page id -> [exercise ids], set by the engine */
  function register(page, ids) {
    registered[page] = ids;
    set(CH + "." + page + ".count", String(ids.length));
    recount(page);
  }
  function recount(page) {
    var ids = registered[page];
    if (!ids) return;
    var n = 0;
    ids.forEach(function (id) { if (exerciseDone(page, id)) n++; });
    set(CH + "." + page + ".done", String(n));
    if (ids.length && n === ids.length) set(CH + "." + page + ".complete", "yes");
    if (root.Chrome && root.Chrome.refreshProgress) root.Chrome.refreshProgress();
  }
  function pageStats(id) {
    var total = Number(get(CH + "." + id + ".count") || 0);
    var done = Number(get(CH + "." + id + ".done") || 0);
    return { total: total, done: done, complete: get(CH + "." + id + ".complete") === "yes" };
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

  /* EVERY CHAPTER'S PROGRESS, FOR THE BOOK INDEX. A page loads one chapter's contents, so
     chapterStats() can only speak for that chapter. The book index belongs to no chapter and still
     has to say how far the reader has got, so this reads the stored counts back by prefix instead
     of from a TOC. It reports only chapters the reader has actually opened, because a chapter with
     nothing stored is indistinguishable from one that does not exist. */
  function allChapters() {
    var out = {};
    keysWithPrefix(BOOK_PREFIX).forEach(function (k) {
      var m = CH_KEY.exec(k);
      if (!m) return;
      var c = out[m[1]] || (out[m[1]] = { chapter: m[1], items: 0, done: 0, pages: 0 });
      var v = Number(get(k) || 0);
      if (m[3] === "count") { c.items += v; c.pages += 1; }
      else c.done += v;
    });
    return Object.keys(out).sort().map(function (k) { return out[k]; });
  }

  /* ---- the trap counter: failures recorded by named trap, not just counted ---- */
  function trapFail(trap) {
    var k = CH + ".trap." + trap;
    set(k, String(Number(get(k) || 0) + 1));
  }
  function trapPass(trap) {
    var k = CH + ".trap." + trap + ".ok";
    set(k, "yes");
  }
  function trapsFailed() {
    return keysWithPrefix(CH + ".trap.")
      .filter(function (k) { return k.indexOf(".ok") < 0; })
      .map(function (k) {
        var name = k.slice((CH + ".trap.").length);
        return { trap: name, fails: Number(get(k) || 0), fixed: get(k + ".ok") === "yes" };
      })
      .filter(function (t) { return t.fails > 0; })
      .sort(function (a, b) { return b.fails - a.fails; });
  }

  function reset() {
    keysWithPrefix(CH + ".").forEach(function (k) {
      if (usable) { try { root.localStorage.removeItem(NS + k); } catch (e) {} }
      delete mem[k];
    });
  }

  function lastVisit(id) {
    if (id) set(CH + ".last", id);
    return get(CH + ".last");
  }

  root.Progress = {
    chapter: CH,
    label: String(root.CHAPTER_LABEL || "Chapter 1"),
    mark: String(root.CHAPTER_MARK || "C1"),
    TOC: TOC, pageIndex: pageIndex,
    register: register, markExercise: markExercise, exerciseDone: exerciseDone,
    pageStats: pageStats, chapterStats: chapterStats, allChapters: allChapters,
    trapFail: trapFail, trapPass: trapPass, trapsFailed: trapsFailed,
    lastVisit: lastVisit, reset: reset,
    get storageWorks() { return usable; }
  };
})(window);
