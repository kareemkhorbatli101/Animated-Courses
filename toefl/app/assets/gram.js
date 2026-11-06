/* gram.js — grammar mechanisms (F21, F23, F24, F25, F27).
   Classes prefixed gr-. */
(function (root, doc) {
  "use strict";
  var E = function (t, c, h) {
    var e = doc.createElement(t);
    if (c) e.className = c;
    if (h != null) e.innerHTML = h;
    return e;
  };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var S = function () { return root.Speech; };
  var M = function () { return root.Motion; };

  /* ============================== F25 — the correction, animated ======== */
  /* The learner types a correction into a box and the sentence they were
     looking at never changes. The contrast between the two sentences is
     the whole lesson, so the sentence has to become the corrected one
     where they are looking, and then be said aloud: several of these
     errors are audible before they are visible (readed / read). */
  function animateFix(row, wrongEl, rightWord, fixedSentence) {
    if (!wrongEl) return;
    wrongEl.classList.add("gr-wasfixed");
    if (M()) M().swap(wrongEl, rightWord);
    else wrongEl.textContent = rightWord;

    var bar = row.querySelector(".gr-fixbar");
    if (!bar) {
      bar = E("div", "gr-fixbar");
      row.appendChild(bar);
    }
    bar.innerHTML = "";
    bar.appendChild(E("span", "gr-fixbar-tag", "corrected"));
    if (S() && fixedSentence) {
      var pair = E("div", "gr-hear");
      pair.appendChild(S().button(fixedSentence, "en", "Hear it right"));
      bar.appendChild(pair);
    }
    return bar;
  }

  /* ================================ F24 — the rule fills itself in ====== */
  /* A grammar note is read once and believed. A rule assembled out of the
     learner's own correct answers is a rule they have just derived, which
     is a different thing to remember. Built on check, not on selection, so
     that watching it fill never tells you an answer before you commit. */
  function ruleCard(host, title) {
    var card = E("div", "gr-rule");
    card.appendChild(E("h4", "gr-rule-h", title || "The rule, as you build it"));
    var list = E("ol", "gr-rule-list");
    card.appendChild(list);
    var foot = E("p", "gr-rule-foot", "Each line appears when you get its gap right.");
    card.appendChild(foot);
    host.appendChild(card);

    return function (rows) {
      list.innerHTML = "";
      var got = 0;
      rows.forEach(function (r, i) {
        var li = E("li", r.ok ? "gr-rule-got" : "gr-rule-blank");
        if (r.ok) {
          got++;
          li.innerHTML = "<b>" + esc(r.answer) + "</b> — " + (r.why || "");
        } else {
          li.innerHTML = "<span class='gr-rule-hole'>—</span> " +
            "<i>not yet: gap " + (i + 1) + "</i>";
        }
        list.appendChild(li);
      });
      foot.textContent = got === rows.length
        ? "That is the rule, in your own answers."
        : got + " of " + rows.length + " lines so far.";
      card.classList.toggle("gr-rule-done", got === rows.length);
      if (got && M()) M().reveal(list.children[Math.max(0, got - 1)]);
      return got;
    };
  }

  /* ============================= F23 — tiles coloured by their job ====== */
  /* Word order is taught as a sequence to memorise. Colouring each tile by
     what it DOES turns the sequence into a pattern that transfers to a
     sentence the learner has not seen. */
  var JOBS = ["subject", "verb", "object", "adverbial", "linker", "complement"];
  function colourTiles(scope, jobOf) {
    var any = 0;
    [].slice.call(scope.querySelectorAll(".tile")).forEach(function (t) {
      var job = jobOf(t.textContent.trim());
      if (!job) return;
      var n = JOBS.indexOf(String(job).toLowerCase());
      t.dataset.job = n >= 0 ? String(n) : "x";
      t.title = String(job);
      any++;
    });
    return any;
  }
  function jobKey(host, jobs) {
    if (!jobs || !jobs.length) return null;
    var k = E("div", "gr-key");
    jobs.forEach(function (j) {
      var n = JOBS.indexOf(String(j).toLowerCase());
      var chip = E("span", "gr-key-chip", esc(j));
      chip.dataset.job = n >= 0 ? String(n) : "x";
      k.appendChild(chip);
    });
    host.appendChild(k);
    return k;
  }

  /* ========================== F27 — why this tile cannot go there ======= */
  /* The spare tiles in an ordering exercise are silent. A learner who
     reaches for one has made a specific mistake, and the moment they reach
     for it is when the answer to it is worth something. */
  function explainExtra(host, text, why) {
    var box = host.querySelector(".gr-extra");
    if (!box) { box = E("div", "gr-extra"); host.appendChild(box); }
    box.innerHTML = "";
    box.appendChild(E("span", "gr-extra-tag", "“" + esc(text) + "”"));
    box.appendChild(E("span", "gr-extra-why",
      why || "This word belongs to a different sentence — nothing here needs it."));
    if (M()) M().pulse(box);
    return box;
  }

  /* ================================ F21 — stress made visible ========== */
  /* Unit 12 describes a difference of stress the learner cannot hear,
     because the speech engine will not move the stress on request. Showing
     which syllable carries it, and saying the syllables apart, is the
     honest version of that lesson. */
  function stressMark(host, word, stressIndex) {
    var parts = String(word).split(/[-·]/);
    if (parts.length < 2) return null;
    var wrap = E("span", "gr-stress");
    parts.forEach(function (p, i) {
      var sp = E("span", i === stressIndex ? "gr-syl gr-syl-on" : "gr-syl", esc(p));
      wrap.appendChild(sp);
      if (i < parts.length - 1) wrap.appendChild(E("span", "gr-syl-dot", "·"));
    });
    host.appendChild(wrap);
    return wrap;
  }

  root.Gram = {
    animateFix: animateFix, ruleCard: ruleCard,
    colourTiles: colourTiles, jobKey: jobKey, explainExtra: explainExtra,
    stressMark: stressMark, JOBS: JOBS
  };
})(window, document);
