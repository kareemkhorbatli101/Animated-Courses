/* items6.js — the seven kinds that replace the 91 read-only scenes.
 *
 * Every one of them keeps all the text the read-only scene carried,
 * because that text is the teaching. What changes is that the learner
 * now has to do something with it.
 *
 *   cards     retrieval-first flip deck          (F1, F41)
 *   build     drag an affix onto a root          (F1)
 *   compare   find what changed between two      (F1)
 *   phrases   hear it, shadow it, rate it        (F1)
 *   recap     apply a takeaway to a NEW case     (F1, F48)
 *   annotate  label what each sentence does      (F1)
 */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;
  function S() { return root.Speech; }
  function M() { return root.Motion; }
  function ico(n, s) { return root.Icons ? root.Icons.svg(n, s || 18) : ""; }

  /* ------------------------------------------------------------ cards --- */
  /* spec.cards : [{ term, meaning, ar, why }]
     Retrieval first: the learner is asked to produce the meaning before
     the card turns. A deck that shows the meaning and then asks is
     recognition practice, which this book's own Unit 1 argues against. */
  /* A read-only panel became an exercise, and not one word of it is
     deleted: the text that was the whole scene is now the thing the
     exercise is about, printed above it. Any of the six can carry one. */
  function plainText(h) {
    return String(h == null ? "" : h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  }

  function intro(stage, spec, api, opts) {
    opts = opts || {};
    if (spec.text && !opts.skipText && root.Docs) {
      var r = root.Docs.reading(spec.text);
      r.classList.add("i6-intro");
      stage.appendChild(r);
      if (root.RL && root.RL.glossRail)
        root.RL.glossRail(r, spec.text.notes, spec.glossary);
    }
    if (spec.note && api && api.note) {
      var n = api.note(spec.note);
      if (n) stage.appendChild(n);
    }
  }

  D.register("cards", function (stage, spec, api) {
    intro(stage, spec, api);
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Try to say the meaning before you turn the card over."));
    var deck = api.shuffle((spec.cards || []).slice());
    var i = 0, tried = {}, got = {}, shaky = {};
    var wrap = E("div", "cardbox");
    var face = E("div", "card-face");
    var counter = E("p", "card-count");
    var controls = E("div", "card-controls");

    function draw() {
      var c = deck[i];
      face.innerHTML = "";
      face.classList.remove("flipped");
      var t = E("p", "card-term", c.term);
      face.appendChild(t);
      if (S()) {
        var sp = S().button(c.term, "en", "Pronounce");
        sp.className += " card-speak";
        face.appendChild(sp);
      }
      face.appendChild(E("p", "card-ask", "What does it mean?"));
      counter.textContent = "Card " + (i + 1) + " of " + deck.length +
        "  ·  recalled " + Object.keys(got).length + " of " + deck.length;
      controls.innerHTML = "";
      var flip = E("button", "card-btn", "Turn over");
      flip.type = "button";
      flip.addEventListener("click", function () { reveal(c); });
      controls.appendChild(flip);
    }

    function reveal(c) {
      tried[c.term] = true;
      face.classList.add("flipped");
      if (M()) M().reveal(face);
      face.innerHTML = "";
      face.appendChild(E("p", "card-term small", c.term));
      face.appendChild(E("p", "card-meaning", c.meaning));
      if (c.ar) {
        var ar = E("div", "card-ar");
        var a = E("span", "ar", c.ar);
        a.dir = "rtl"; a.lang = "ar";
        ar.appendChild(a);
        if (S()) ar.appendChild(S().button(c.ar, "ar", "Pronounce in Arabic"));
        face.appendChild(ar);
      }
      /* F20 — a word you can recognise is not a word you can use. The
         three words it usually sits beside are what make it usable, and
         they are what the learner will need to produce. */
      if (c["with"] && c["with"].length) {
        var coll = E("div", "card-with");
        coll.appendChild(E("span", "card-with-label", "usually sits beside"));
        c["with"].forEach(function (x) { coll.appendChild(E("span", "card-chip", esc(x))); });
        face.appendChild(coll);
      }
      if (c.why) {
        var w = E("p", "card-why");
        w.innerHTML = c.why;
        face.appendChild(w);
      }
      controls.innerHTML = "";
      /* F22 — "I had it" and "Not yet" are the sorting. What it feeds is
         the spaced schedule, so a card marked Not yet comes back sooner. */
      ["I had it", "Not yet"].forEach(function (lbl, n) {
        var b = E("button", "card-btn" + (n ? " no" : " yes"), lbl);
        b.type = "button";
        b.addEventListener("click", function () {
          if (n) { delete got[c.term]; shaky[c.term] = true; }
          else { got[c.term] = true; delete shaky[c.term]; }
          try {
            var key = "toefl.cards." + (root.PAGE ? root.PAGE.id : "p") + "." + spec.id;
            root.localStorage.setItem(key, JSON.stringify({ got: Object.keys(got), shaky: Object.keys(shaky) }));
          } catch (e) {}
          /* a card you did not have comes back two cards later, not at
             the end of the deck: that is what makes the sorting useful
             rather than a tally */
          if (n) {
            var card = deck.splice(i, 1)[0];
            deck.splice(Math.min(i + 2, deck.length), 0, card);
          } else i = (i + 1) % deck.length;
          if (i >= deck.length) i = 0;
          draw();
        });
        controls.appendChild(b);
      });
    }

    wrap.appendChild(face);
    wrap.appendChild(controls);
    wrap.appendChild(counter);
    stage.appendChild(wrap);
    draw();

    return function () {
      var n = Object.keys(got).length, seen = Object.keys(tried).length;
      var missed = deck.filter(function (c) { return !got[c.term]; });
      return {
        score: n, total: deck.length,
        html: n === deck.length
          ? "<p>Every term recalled. They go into the review schedule now.</p>"
          : (seen < deck.length
              ? "<p>Turn over every card at least once before you check.</p>"
              : "<p>Still to recall:</p>" + api.fbList(missed.map(function (c) {
                  return "<b>" + esc(c.term) + "</b> — " + c.meaning;
                })))
      };
    };
  });

  /* ------------------------------------------------------------ build --- */
  /* spec.items : [{ root, affix, answer, why }]
     The tray holds one chip per row, each carrying the affix that row
     needs, so the multiset of affixes is visible and WHICH affix goes
     where is the exercise. Grading compares the affix in the zone, not
     which copy of it was dragged — otherwise a learner who drags the
     second identical chip is marked wrong for being right. */
  D.register("build", function (stage, spec, api) {
    intro(stage, spec, api);
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Drag the piece onto each root and read what it makes."));
    var live = E("div", "sr-live"); live.setAttribute("aria-live", "polite");
    stage.appendChild(live);
    var tray = E("div", "tiles tray");
    var dg = root.Drag({
      live: live, tray: tray,
      onDrop: function (chipId, zoneId) {
        var z = stage.querySelector('[data-zone-id="' + zoneId + '"]');
        if (!z) return "That root is gone.";
        var held = z.querySelectorAll(".chip");
        for (var k = 0; k < held.length; k++) { held[k].classList.remove("placed"); tray.appendChild(held[k]); }
        return true;
      }
    });
    dg.trayDrop(tray);
    var rows = E("div", "buildrows");
    (spec.items || []).forEach(function (it, n) {
      var r = E("div", "buildrow");
      var z = dg.zone({ id: "r" + n, label: it.root });
      z.dataset.cap = "1";
      z.classList.add("build-z");
      r.appendChild(z);
      r.appendChild(E("span", "build-plus", "+"));
      r.appendChild(E("span", "build-root", it.root));
      r.appendChild(E("span", "build-eq", "="));
      var out = E("span", "build-out", "?");
      r.appendChild(out);
      if (S()) r.appendChild(S().button(it.answer, "en", "Pronounce"));
      rows.appendChild(r);
      it._out = out;
      it._zone = z;
    });
    stage.appendChild(rows);

    /* F19 — one word from this lesson, in all the forms it takes. An affix
       exercise teaches one step; the family shows the whole set, which is
       what a learner actually needs when writing. The stressed syllable is
       marked because it moves between the forms and nothing on the page
       would otherwise say so. */
    if (spec.family && spec.family.forms && root.Gram) {
      var fam = E("div", "i6-family");
      fam.appendChild(E("span", "i6-family-label",
        "The family of <b>" + esc(spec.family.word) + "</b>"));
      spec.family.forms.forEach(function (f) {
        var cell = E("div", "i6-fam-cell");
        cell.appendChild(E("span", "i6-fam-part", esc(f.part)));
        var w = E("div", "i6-fam-word");
        root.Gram.renderStress(w, f.word);
        cell.appendChild(w);
        if (S()) cell.appendChild(S().button(f.word.replace(/\u00b7/g, ""), "en", "Say it"));
        if (f.note) cell.appendChild(E("span", "i6-fam-note", f.note));
        fam.appendChild(cell);
      });
      stage.appendChild(fam);
    }

    stage.appendChild(E("p", "tray-label",
      "Drag the right piece onto each root, or click the piece and then the root."));
    stage.appendChild(tray);
    api.shuffle((spec.items || []).map(function (it, n) { return { a: it.affix, n: n }; }))
      .forEach(function (c) {
        tray.appendChild(dg.chip({ id: c.a + "#" + c.n, label: c.a }));
      });

    return function () {
      var right = 0, miss = [];
      (spec.items || []).forEach(function (it, n) {
        var held = it._zone.querySelector(".chip");
        var got = held ? held.textContent.replace(/\s+/g, "") : null;
        var ok = got === it.affix;
        if (held) { held.classList.remove("ok", "no"); held.classList.add(ok ? "ok" : "no"); }
        if (ok) {
          right++;
          if (it._out.textContent !== it.answer && M()) M().swap(it._out, it.answer);
          else it._out.textContent = it.answer;
        } else miss.push("<b>" + esc(it.affix) + " + " + esc(it.root) + "</b> = " +
          esc(it.answer) + (it.why ? " — " + it.why : ""));
      });
      return { score: right, total: (spec.items || []).length,
        html: miss.length ? "<p>Still to build:</p>" + api.fbList(miss)
                          : "<p>Every one built. The affix carries the meaning; the root carries the subject.</p>" };
    };
  });

  /* ---------------------------------------------------------- compare --- */
  /* spec.before / spec.after : [lines]  spec.changes : [{ text, why }] */
  D.register("compare", function (stage, spec, api) {
    intro(stage, spec, api);
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Click every difference you can find in the second version."));
    var cols = E("div", "cols even");
    var a = E("div", "col"), b = E("div", "col");
    a.appendChild(E("p", "sub-h", spec.beforeLabel || "Before"));
    b.appendChild(E("p", "sub-h", spec.afterLabel || "After"));
    (spec.before || []).forEach(function (l) {
      var p = E("p", "cmp-line"); p.innerHTML = l; a.appendChild(p);
    });
    var picked = {};
    (spec.after || []).forEach(function (l) {
      var p = E("p", "cmp-line");
      /* each clickable span is marked in the data with [[ ]] */
      String(l).split(/(\[\[[^\]]+\]\])/).forEach(function (part) {
        if (/^\[\[/.test(part)) {
          var txt = part.slice(2, -2);
          var sp = E("button", "cmp-hit", txt);
          sp.type = "button";
          sp.addEventListener("click", function () {
            var on = sp.classList.toggle("on");
            if (on) picked[txt] = true; else delete picked[txt];
            if (on && M()) M().pulse(sp);
          });
          p.appendChild(sp);
        } else if (part) {
          var s2 = E("span");
          s2.innerHTML = part;
          p.appendChild(s2);
        }
      });
      b.appendChild(p);
    });
    cols.appendChild(a); cols.appendChild(b);
    stage.appendChild(cols);

    return function () {
      var want = (spec.changes || []).map(function (c) { return c.text; });
      var right = 0, miss = [], wrong = 0;
      want.forEach(function (t) { if (picked[t]) right++; else miss.push(t); });
      Object.keys(picked).forEach(function (t) { if (want.indexOf(t) < 0) wrong++; });
      stage.querySelectorAll(".cmp-hit").forEach(function (el) {
        var t = el.textContent;
        el.classList.toggle("ok", want.indexOf(t) >= 0 && !!picked[t]);
        el.classList.toggle("no", want.indexOf(t) < 0 && !!picked[t]);
      });
      var rows = (spec.changes || []).filter(function (c) { return miss.indexOf(c.text) >= 0; })
        .map(function (c) { return "<b>" + esc(c.text) + "</b> — " + c.why; });
      if (wrong) rows.push("<b>" + wrong + "</b> of your choices did not change.");
      return { score: right, total: want.length,
        html: rows.length ? "<p>Still to find:</p>" + api.fbList(rows)
                          : "<p>Every difference found.</p>" };
    };
  });

  /* ---------------------------------------------------------- phrases --- */
  /* spec.phrases : [{ text, when, why }]  — hear it, say it, rate it */
  D.register("phrases", function (stage, spec, api) {
    intro(stage, spec, api);
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Tap each phrase to hear it, say it back, then rate yourself honestly."));
    var rated = {};
    (spec.phrases || []).forEach(function (ph, n) {
      var row = E("div", "phrase");
      var head = E("div", "phrase-head");
      var t = E("p", "phrase-text");
      t.innerHTML = ph.text;
      head.appendChild(t);
      if (S()) head.appendChild(S().button(String(ph.say || ph.text).replace(/<[^>]+>/g, ""), "en", "Hear it"));
      row.appendChild(head);
      if (ph.when) row.appendChild(E("p", "phrase-when", ph.when));
      /* F16 — say it WITH the model before you say it alone. */
      if (root.RL) root.RL.shadowBar(row, String(ph.say || ph.text).replace(/<[^>]+>/g, ""), null);
      var r = E("div", "rubric");
      r.appendChild(E("h4", null, "Say it aloud, then:"));
      ["I said it fluently", "I said it with effort", "I could not say it yet"].forEach(function (lbl, k) {
        var lab = doc.createElement("label");
        var rb = doc.createElement("input");
        rb.type = "radio"; rb.name = "ph" + n; rb.value = String(k);
        rb.addEventListener("change", function () { rated[n] = k; });
        lab.appendChild(rb);
        lab.appendChild(E("span", null, lbl));
        r.appendChild(lab);
      });
      row.appendChild(r);
      stage.appendChild(row);
    });

    return function () {
      var n = Object.keys(rated).length, total = (spec.phrases || []).length;
      var shaky = Object.keys(rated).filter(function (k) { return rated[k] > 0; })
        .map(function (k) { return "<b>" + esc(String(spec.phrases[k].text).replace(/<[^>]+>/g, "")) + "</b>" +
          (spec.phrases[k].why ? " — " + spec.phrases[k].why : ""); });
      return {
        ok: n === total,
        verdict: n === total ? "Rated" : n + " of " + total + " rated",
        html: n < total
          ? "<p>Say every phrase aloud and rate it. The rating is for you; nobody else sees it.</p>"
          : (shaky.length ? "<p>Worth another pass out loud:</p>" + api.fbList(shaky)
                          : "<p>All of them fluent. These are now phrases you have, not phrases you have read.</p>")
      };
    };
  });

  /* ------------------------------------------------------------ recap --- */
  /* spec.takeaways : [{ text, caseId, why }]  spec.cases : [{ id, label }]
     The point is transfer: apply the unit's distinction to a NEW case
     rather than restate it. */
  D.register("recap", function (stage, spec, api) {
    intro(stage, spec, api);
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "A new situation for each thing this unit established. Drag each one onto the case it settles."));
    var live = E("div", "sr-live"); live.setAttribute("aria-live", "polite");
    stage.appendChild(live);
    var tray = E("div", "tiles tray");
    var dg = root.Drag({
      live: live, tray: tray,
      onDrop: function (chipId, zoneId) {
        var z = stage.querySelector('[data-zone-id="' + zoneId + '"]');
        if (!z) return "That case is gone.";
        return true;
      }
    });
    dg.trayDrop(tray);
    var bins = E("div", "bins c" + Math.min(3, (spec.cases || []).length));
    (spec.cases || []).forEach(function (c) {
      var col = E("div", "bin");
      col.appendChild(E("p", "zone-label", c.label));
      if (c.detail) col.appendChild(E("p", "bin-hint", c.detail));
      col.appendChild(dg.zone({ id: c.id, label: c.label }));
      bins.appendChild(col);
    });
    stage.appendChild(bins);
    stage.appendChild(E("p", "tray-label", "Drag each finding onto the case it decides."));
    stage.appendChild(tray);
    /* a stable short id, not the sentence itself: an id that is also the
       visible text breaks the moment two takeaways share wording */
    (spec.takeaways || []).forEach(function (t, n) { t._id = "t" + n; });
    api.shuffle((spec.takeaways || []).slice()).forEach(function (t) {
      tray.appendChild(dg.chip({ id: t._id, label: plainText(t.text), html: t.text }));
    });

    return function () {
      var place = dg.placement(), right = 0, miss = [];
      (spec.takeaways || []).forEach(function (t) {
        var ok = place[t._id] === t.caseId;
        var el = dg.chipEl(t._id);
        el.classList.remove("ok", "no"); el.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else {
          var lab = "";
          (spec.cases || []).forEach(function (c) { if (c.id === t.caseId) lab = c.label; });
          miss.push("<b>" + esc(plainText(t.text)) + "</b> settles <b>" + esc(lab) + "</b>" +
            (t.why ? " — " + t.why : ""));
        }
      });
      return { score: right, total: (spec.takeaways || []).length,
        html: miss.length ? "<p>Not yet placed:</p>" + api.fbList(miss)
                          : "<p>Every finding applied to a case it was not taught on. That is the test of having it.</p>" };
    };
  });

  /* ----------------------------------------------------------- matrix --- */
  /* spec.matrix: { rows:[{item, col, why}], cols:[labels], rowLabel, note }

     A grid of one thing against another, filled in by the learner. Unit 12
     teaches that the verb decides whether it takes an infinitive or a
     gerund and that no meaning rule predicts which — which is exactly the
     kind of fact a table holds better than prose, and exactly the kind a
     learner has to build to remember.

     One cell per row, because the claim is that each verb takes one
     pattern. Where a verb takes both, that is its own column, and the
     rationale is where the difference lives. */
  D.register("matrix", function (stage, spec, api) {
    intro(stage, spec, api);
    var m = spec.matrix || {};
    var cols = m.cols || [];
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Put each one in its column."));

    var table = E("table", "mx");
    var head = E("tr");
    /* Column labels are authored markup: "takes <i>to do</i>". The deck's
       E() sets textContent, which printed the tags on screen, and esc()
       before it printed them escaped. They have to go in as innerHTML. */
    var rh = E("th", "mx-rowhead");
    rh.innerHTML = m.rowLabel || "";
    head.appendChild(rh);
    cols.forEach(function (c) {
      var th = E("th");
      th.innerHTML = c;
      head.appendChild(th);
    });
    table.appendChild(head);

    var picks = {};
    api.shuffle((m.rows || []).slice()).forEach(function (r, n) {
      var tr = E("tr");
      var th = E("th", "mx-item", esc(r.item));
      tr.appendChild(th);
      cols.forEach(function (c) {
        var td = E("td");
        var b = E("button", "mx-cell");
        b.type = "button";
        b.setAttribute("role", "radio");
        b.setAttribute("aria-checked", "false");
        b.setAttribute("aria-label", r.item + ": " + plainText(c));
        b.addEventListener("click", function () {
          picks[r.item] = c;
          [].forEach.call(tr.querySelectorAll(".mx-cell"), function (x) {
            x.classList.remove("on", "ok", "no");
            x.setAttribute("aria-checked", "false");
          });
          b.classList.add("on");
          b.setAttribute("aria-checked", "true");
        });
        td.appendChild(b);
        tr.appendChild(td);
      });
      table.appendChild(tr);
      r._row = tr;
    });
    stage.appendChild(table);
    if (m.note) stage.appendChild(E("p", "mx-note", m.note));

    return function () {
      var right = 0, miss = [];
      (m.rows || []).forEach(function (r) {
        var got = picks[r.item];
        var ok = got === r.col;
        var cells = r._row.querySelectorAll(".mx-cell");
        cols.forEach(function (c, i) {
          cells[i].classList.remove("ok", "no");
          if (c === r.col) cells[i].classList.add("ok");
          else if (c === got) cells[i].classList.add("no");
        });
        if (ok) right++;
        else miss.push("<b>" + esc(r.item) + "</b> — " + esc(r.col) +
          (r.why ? ". " + r.why : ""));
      });
      return { score: right, total: (m.rows || []).length,
        html: miss.length ? "<p>Not yet placed:</p>" + api.fbList(miss)
                          : "<p>Every verb in its column. There is no meaning rule behind this — the grid is the rule.</p>" };
    };
  });

  /* --------------------------------------------------------- annotate --- */
  /* spec.sentences : [{ text, job, why }]  spec.jobs : [labels] */
  D.register("annotate", function (stage, spec, api) {
    /* The sentences below ARE the passage, made clickable. Printing the
       passage above them as well shows the learner the same words twice
       and doubles the length of the scene. Where the original had block
       headings, each sentence carries its group instead, so nothing of
       the source is lost. */
    intro(stage, spec, api, { skipText: !!(spec.sentences || []).length });
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Click a sentence, then choose what it is doing."));
    var jobs = spec.jobs || [];
    var chosen = {};
    var model = E("div", "model annotated");
    /* Where in time each form puts its event. A tense lesson can only
       assert this in words; the line is the thing prose cannot draw. Shown
       from the start, not on review: it is the lesson, not the answer, and
       the exercise is which line each sentence belongs to. Drawn only when
       EVERY job maps, so a partial picture never stands for a whole one. */
    if (root.Diagrams && jobs.length) {
      var times = jobs.map(function (j) { return root.Diagrams.timeOf(j); });
      if (times.length >= 2 && times.every(Boolean)) {
        stage.appendChild(root.Diagrams.timeline(
          jobs.map(function (j, i) {
            return { label: plainText(j).split(/\s+\u2014\s+/)[0],
                     said: times[i].said, from: times[i].from, to: times[i].to,
                     open: times[i].open, dash: times[i].dash };
          }),
          "Where each form puts its event. The dashed line is what is not settled; " +
          "an arrow means it has not stopped."));
      }
    }

    var lastGroup = null;
    (spec.sentences || []).forEach(function (sn, n) {
      if (sn.group && sn.group !== lastGroup) {
        model.appendChild(E("h4", "ann-group", esc(sn.group)));
        lastGroup = sn.group;
      }
      var row = E("div", "ann-row");
      var b = E("button", "ann-sent", root.Gram && root.Gram.marked(sn.text) ? "" : sn.text);
      b.type = "button";
      /* F21 — where the lesson is about stress, show which syllable carries
         it rather than describing a difference the page cannot make audible. */
      if (root.Gram && root.Gram.marked(sn.text)) {
        root.Gram.renderStress(b, sn.text);
        var w = root.Gram.stressWord(sn.text);
        if (w && S()) {
          var sp = S().button(w, "en", "Hear " + w);
          sp.className += " ann-say";
          row.appendChild(sp);
        }
      }
      var sel = doc.createElement("select");
      sel.className = "ann-job";
      sel.setAttribute("aria-label", "What sentence " + (n + 1) + " does");
      var blank = doc.createElement("option");
      blank.value = ""; blank.textContent = "— what is it doing? —";
      sel.appendChild(blank);
      /* a <select> option is text only, so the markup in a job label has
         to come off here or the learner chooses between "<i>will</i> ..."
         and "<i>going to</i> ..." */
      api.shuffle(jobs.slice()).forEach(function (j) {
        var o = doc.createElement("option");
        o.value = j; o.textContent = plainText(j);
        sel.appendChild(o);
      });
      sel.addEventListener("change", function () {
        chosen[n] = sel.value;
        if (sel.value && M()) M().pulse(b);
      });
      b.addEventListener("click", function () { sel.focus(); });
      row.appendChild(b);
      row.appendChild(sel);
      model.appendChild(row);
      sn._btn = b;
    });
    stage.appendChild(model);

    return function () {
      var right = 0, miss = [];
      (spec.sentences || []).forEach(function (sn, n) {
        var ok = chosen[n] === sn.job;
        sn._btn.classList.remove("ok", "no");
        sn._btn.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else miss.push("<b>" + esc(sn.text.slice(0, 48)) + "…</b> is <b>" + esc(sn.job) + "</b>" +
          (sn.why ? " — " + sn.why : ""));
      });
      return { score: right, total: (spec.sentences || []).length,
        html: miss.length ? "<p>Sentences still to place:</p>" + api.fbList(miss)
                          : "<p>Every sentence's job named. That shape is the one to copy.</p>" };
    };
  });
})(window, document);
