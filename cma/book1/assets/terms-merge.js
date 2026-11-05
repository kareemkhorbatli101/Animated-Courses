/* terms-merge.js — one term bank for the book's appendices.
 *
 * THE PROBLEM. Each chapter's term file assigns window.TERMS outright, so loading two of them
 * leaves only the second. The glossary and the term index are book-level pages: they say "every
 * Term Bridge row the chapter prints", and with one chapter loaded that sentence was true. With a
 * second chapter built and not loaded it would have become a silent omission — thirty bilingual
 * terms missing from the page whose whole job is to list them.
 *
 * HOW. The page loads each chapter's pair of files and snapshots window.TERMS and window.TERMS_FR
 * into window.TERM_SETS between them, then loads this. Nothing in a chapter's generated file
 * changes, and a chapter that is not loaded is simply not in the result.
 *
 * Each term keeps the chapter it came from, so the appendices can say where a term is taught and
 * a reader can tell Chapter 2's "current assets" from Chapter 1's vocabulary.
 */
(function (root) {
  "use strict";
  var SETS = root.TERM_SETS || [];
  if (!SETS.length) return;

  var all = [], english = [], fr = {}, seen = {};

  SETS.forEach(function (s) {
    var T = s.T;
    if (!T) return;
    (T.all || []).forEach(function (t) {
      var k = String(t.en).toLowerCase();
      if (seen[k]) {
        /* the same exam term bridged in two chapters: keep the first and record the second
           chapter it is taught in, rather than printing the row twice */
        if (seen[k].chapters.indexOf(s.n) < 0) seen[k].chapters.push(s.n);
        return;
      }
      var row = { en: t.en, ar: t.ar, gloss: t.gloss, sec: t.sec, bridge: true,
                  chapter: s.n, chapters: [s.n] };
      seen[k] = row;
      all.push(row);
    });
    (T.englishOnly || []).forEach(function (t) {
      english.push({ en: t.en, ar: null, gloss: t.gloss, sec: t.sec, bridge: false,
                     chapter: s.n, chapters: [s.n] });
    });
    Object.keys(s.fr || {}).forEach(function (k) { if (!(k in fr)) fr[k] = s.fr[k]; });
  });

  /* A TERM THE BOOK BRIDGES ANYWHERE IS BRIDGED. Chapter 1 defines "working capital" and
     "current ratio" in its prose and gives no Arabic for them, so they sit in its English-only
     list; Chapter 2 bridges both. Merged naively, the glossary printed each of them twice — once
     with the author's Arabic and once saying no Arabic was given. The bridged row wins, and it
     inherits Chapter 1's teaching gloss where the bridge itself has none. */
  english = english.filter(function (t) {
    var row = seen[String(t.en).toLowerCase()];
    if (!row) return true;
    if (!row.gloss && t.gloss) row.gloss = t.gloss;
    if (row.chapters.indexOf(t.chapter) < 0) row.chapters.push(t.chapter);
    row.chapters.sort();
    return false;
  });

  function find(en) {
    var k = String(en).toLowerCase();
    for (var i = 0; i < all.length; i++) if (all[i].en.toLowerCase() === k) return all[i];
    for (var j = 0; j < english.length; j++) if (english[j].en.toLowerCase() === k) return english[j];
    throw new Error("terms: no term '" + en + "'");
  }

  root.TERMS = {
    all: all,
    englishOnly: english,
    everything: all.concat(english),
    bridge: function (sec) { return all.filter(function (t) { return t.sec === sec; }); },
    keys: function () { return all.slice(); },
    find: find,
    count: all.length,
    chapters: SETS.map(function (s) { return s.n; })
  };
  root.TERMS_FR = fr;
})(window);
