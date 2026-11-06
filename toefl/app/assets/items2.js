/* items2.js — the remaining shapes the lesson templates need.
   orderset  Build a Sentence as a set (it is 10 items on the real test)
   cloze     the book's "Language connection": choose between two forms
   respond   Listen and Choose a Response — one audio per item
   quiz      a cluster of choice items with no stimulus (the mixed review)
   and the notepad on Listen to an Academic Talk. */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;
  /* audio.js and write.js load after this file, so resolve them at call time. */
  function A() { return root.AudioKit; }
  function W() { return root.Write; }
  function C() { return root.CAST; }

  /* ----------------------------------------------------------- orderset --- */
  D.register("orderset", function (stage, spec, api) {
    var rows = [], jobsSeen = [];
    spec.items.forEach(function (it, i) {
      var box = E("div");
      box.style.cssText = "border:1px solid var(--rule);border-radius:9px;padding:13px 15px;margin:0 0 11px";
      var h = E("p", "item");
      h.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + (it.cue || "Put the words in order.") +
        (it.band ? " <span style='color:var(--ink-3);font-size:12.5px'>" + it.band + "</span>" : "");
      box.appendChild(h);

      var want = String(it.target).trim().split(/\s+/);
      var tiles = api.shuffle(want.concat(it.extra || []));
      var slot = E("div", "slot"), tray = E("div", "tray");
      slot.setAttribute("data-hint", "Tap a word, or drag it here");

      /* F27 — the spare words are silent. A learner who reaches for one
         has made a specific mistake, and that moment is when the answer
         to it is worth something. */
      var spare = {};
      (it.extra || []).forEach(function (x) {
        spare[String(typeof x === "string" ? x : x.word)] =
          (typeof x === "object" && x.why) || (it.extraWhy && it.extraWhy[x]) || null;
      });

      function mk(w) {
        var t = E("button", "tile", w);
        t.type = "button"; t.draggable = true;
        t.addEventListener("click", function () {
          if (t.parentNode === tray) slot.appendChild(t); else tray.appendChild(t);
          t.classList.toggle("set"); t.classList.remove("ok", "no");
          if (t.parentNode === slot && Object.prototype.hasOwnProperty.call(spare, w) &&
              root.Gram) root.Gram.explainExtra(box, w, spare[w]);
        });
        t.addEventListener("dragstart", function () { t.dataset.dragging = "1"; });
        t.addEventListener("dragend", function () { delete t.dataset.dragging; });
        return t;
      }
      tiles.forEach(function (w) { tray.appendChild(mk(w)); });
      [slot, tray].forEach(function (z) {
        z.addEventListener("dragover", function (e) { e.preventDefault(); });
        z.addEventListener("drop", function (e) {
          e.preventDefault();
          var t = box.querySelector('.tile[data-dragging="1"]');
          if (!t) return;
          z.appendChild(t); t.classList.toggle("set", z === slot); t.classList.remove("ok", "no");
        });
      });
      box.appendChild(slot); box.appendChild(tray);
      stage.appendChild(box);
      /* F23 — colour each tile by the job it does, so an order becomes a
         pattern that transfers rather than a sequence to memorise. */
      if (root.Gram && it.jobs) {
        root.Gram.colourTiles(box, function (word) { return it.jobs[word]; });
        jobsSeen = jobsSeen.concat(Object.keys(it.jobs).map(function (k) { return it.jobs[k]; }));
      }
      rows.push({ it: it, want: want, slot: slot });
    });

    /* The key explains the colours, so it goes above the first thing it
       explains. Appending it as the first coloured item was built left it
       sitting between exercise one and exercise two. */
    if (jobsSeen.length && root.Gram) {
      var uniq = jobsSeen.filter(function (v, n, a) { return a.indexOf(v) === n; });
      var key = root.Gram.jobKey(stage, uniq);
      if (key) stage.insertBefore(key, stage.firstChild);
    }

    return function () {
      var right = 0, miss = [];
      rows.forEach(function (r, i) {
        var got = [].map.call(r.slot.children, function (c) { return c.textContent; });
        var good = got.length === r.want.length && got.every(function (w, j) { return w === r.want[j]; });
        [].forEach.call(r.slot.children, function (c, j) {
          c.classList.toggle("ok", r.want[j] === c.textContent);
          c.classList.toggle("no", r.want[j] !== c.textContent);
        });
        if (good) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(r.it.target) + (r.it.why ? " — " + r.it.why : ""));
      });
      return { score: right, total: rows.length,
        html: miss.length ? "<p>Not in order yet:</p>" + api.fbList(miss)
                          : "<p>Every sentence built correctly.</p>" };
    };
  });

  /* -------------------------------------------------------------- cloze --- */
  /* The book's Language connection: a paragraph with choices under each gap. */
  D.register("cloze", function (stage, spec, api) {
    var panel = E("div", "panel");
    if (spec.heading) panel.appendChild(E("h3", null, spec.heading));
    var body = E("div");
    var html = spec.text, sels = [];
    var parts = html.split("___");
    var frag = doc.createDocumentFragment();
    parts.forEach(function (p, i) {
      var sp = E("span"); sp.innerHTML = p; frag.appendChild(sp);
      if (i < spec.gaps.length) {
        var g = spec.gaps[i];
        var wrap = E("span");
        wrap.style.cssText = "display:inline-flex;flex-direction:column;align-items:center;margin:0 3px;vertical-align:top";
        var sel = doc.createElement("select");
        sel.className = "abox";
        sel.style.cssText = "height:27px;font-family:var(--ui);padding:0 4px";
        sel.setAttribute("aria-label", "Gap " + (i + 1));
        var blank = doc.createElement("option"); blank.value = ""; blank.textContent = "—";
        sel.appendChild(blank);
        api.shuffle(g.options.slice()).forEach(function (o) {
          var op = doc.createElement("option"); op.value = o; op.textContent = o; sel.appendChild(op);
        });
        wrap.appendChild(sel);
        var hint = E("small", null, "(" + g.options.join(" / ") + ")");
        hint.style.cssText = "font-size:10.5px;color:var(--ink-3);font-family:var(--ui)";
        wrap.appendChild(hint);
        frag.appendChild(wrap);
        sels.push({ sel: sel, g: g });
      }
    });
    body.appendChild(frag);
    panel.appendChild(body);
    stage.appendChild(panel);

    /* F24 — the rule is built out of the learner's own correct answers
       rather than read off a note beforehand. Filled on check, never on
       selection, so watching it grow cannot tell you an answer you have
       not yet committed to. */
    var fillRule = root.Gram ? root.Gram.ruleCard(stage, spec.ruleTitle) : null;

    return function () {
      var right = 0, miss = [];
      sels.forEach(function (s, i) {
        var good = s.sel.value === s.g.answer;
        s.sel.classList.toggle("ok", good);
        s.sel.classList.toggle("no", !good);
        if (good) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(s.g.answer) + (s.g.why ? " — " + s.g.why : ""));
      });
      if (fillRule) fillRule(sels.map(function (s) {
        return { ok: s.sel.value === s.g.answer, answer: s.g.answer, why: s.g.why };
      }));
      return { score: right, total: sels.length,
        html: miss.length ? "<p>Say the rule back to yourself:</p>" + api.fbList(miss)
                          : "<p>That is the rule, in your own words.</p>" };
    };
  });

  /* ------------------------------------------------------------ respond --- */
  /* Listen and Choose a Response: each item is its OWN short utterance. */
  D.register("respond", function (stage, spec, api) {
    var note = E("p", "once", "You hear one short line. Choose the natural reply. Each plays once.");
    stage.appendChild(note);
    var graders = [];
    spec.items.forEach(function (it, i) {
      var box = E("div");
      box.style.cssText = "border:1px solid var(--rule);border-radius:9px;padding:13px 15px;margin:0 0 11px";
      var hd = E("div");
      hd.style.cssText = "display:flex;gap:11px;align-items:center;margin-bottom:9px";
      if (it.who && C()) {
        var av = E("span");
        av.innerHTML = C().svg(it.who, 34);
        av.style.cssText = "flex:0 0 34px;line-height:0";
        hd.appendChild(av);
      }
      var p = A().player({ text: it.say, speaker: it.who, label: "Line " + (i + 1), once: spec.once !== false });
      p.style.flex = "1";
      hd.appendChild(p);
      box.appendChild(hd);
      stage.appendChild(box);
      var sub = E("div");
      box.appendChild(sub);
      graders.push({ it: it, g: D._choiceInto(sub, it.options, api) });
    });
    return function () {
      var right = 0, miss = [];
      graders.forEach(function (row, i) {
        var r = row.g();
        if (r.ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> “" + esc(row.it.say) + "” → " +
          (r.rightText || "") + (r.rightWhy ? " — " + r.rightWhy : ""));
      });
      return { score: right, total: graders.length,
        html: miss.length ? "<p>Listen again for these:</p>" + api.fbList(miss)
                          : "<p>Every reply fits what you heard.</p>" };
    };
  });

  /* --------------------------------------------------------------- quiz --- */
  D.register("quiz", function (stage, spec, api) {
    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var h = E("p", "item");
      h.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + it.q +
        (it.from ? " <span style='color:var(--ink-3);font-size:12.5px'>" + it.from + "</span>" : "");
      stage.appendChild(h);
      /* F2 — a review question that asks about a text read two lessons ago
         must carry enough to find that text again. The snippet says which
         article and what it was about; it does not say what it concluded,
         because recalling that is the question. */
      if (it.recall) {
        var rc = E("p", "quiz-recall");
        rc.innerHTML = it.recall;
        stage.appendChild(rc);
      }
      var sub = E("div");
      stage.appendChild(sub);
      graders.push(D._choiceInto(sub, it.options, api));
    });
    return function () {
      var right = 0, miss = [];
      graders.forEach(function (g, i) {
        var r = g();
        if (r.ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + (r.rightText || "") +
          (r.rightWhy ? " — " + r.rightWhy : ""));
      });
      return { score: right, total: graders.length,
        html: miss.length ? "<p>Worth going back to:</p>" + api.fbList(miss)
                          : "<p>All of it held, across the whole unit.</p>" };
    };
  });

  /* ---------------------------------------------------------- talk + pad --- */
  /* Listen to an Academic Talk: a notepad opens beside the player. You may
     type while it runs; the notes stay for the items, the audio does not. */
  D.register("talk", function (stage, spec, api) {
    var cols = E("div", "cols");
    var left = E("div");
    if (spec.speaker && C()) left.appendChild(C().speakerBlock(spec.speaker, spec.speakerNote));
    var p = A().player({ text: spec.audio && (spec.audio.lines || spec.audio.text),
                       src: spec.audio && spec.audio.src, speaker: spec.speaker,
                       label: spec.audio && spec.audio.label || "The talk", once: true });
    left.appendChild(p);
    left.appendChild(E("p", "once", "Plays once. Take notes while it runs — that is the skill this task assumes."));
    cols.appendChild(left);
    var padHost = E("div");
    W().notepad(padHost, "Your notes");
    cols.appendChild(padHost);
    stage.appendChild(cols);

    var host = E("div");
    host.style.marginTop = "14px";
    stage.appendChild(host);
    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var h = E("p", "item");
      h.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + it.q;
      host.appendChild(h);
      var sub = E("div");
      host.appendChild(sub);
      graders.push(D._choiceInto(sub, it.options, api));
    });
    return function () {
      var right = 0, miss = [];
      graders.forEach(function (g, i) {
        var r = g();
        if (r.ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + (r.rightText || "") +
          (r.rightWhy ? " — " + r.rightWhy : ""));
      });
      return { score: right, total: graders.length,
        html: (miss.length ? "<p>Check your notes against these:</p>" + api.fbList(miss)
                           : "<p>Answered from one pass and your own notes.</p>") +
              (spec.transcript ? "<details style='margin-top:9px'><summary>Transcript</summary>" +
                "<div class='model' style='margin-top:8px'>" + spec.transcript + "</div></details>" : "")
      };
    };
  });
})(window, document);
