/* items4.js — five more shapes, each one a real task on the test or a real
   exercise in the book.
   sequence      Put the steps in order            (the book's process task)
   errorfix      Find and correct the error        (ETS writing; the book's "Correct the sentence")
   selectintext  Click the sentence that ...       (ETS reading, insert/locate)
   table         Complete the table                (ETS listening/reading organiser)
   notes         Complete the notes                (ETS lecture note-taking)
   dictation     Hear it, write it                 (the book's listen-and-write) */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;
  function A() { return root.AudioKit; }

  function norm(s) {
    return String(s).toLowerCase().replace(/[‘’']/g, "'")
      .replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
  }

  /* ---------------------------------------------------------- sequence --- */
  /* spec.steps : [{ text, pos, why }]  pos is 1-based */
  D.register("sequence", function (stage, spec, api) {
    var live = E("div", "sr-live"); live.setAttribute("aria-live", "polite");
    stage.appendChild(live);
    var tray = E("div", "tiles tray");
    var dg = root.Drag({
      live: live, tray: tray,
      onDrop: function (chipId, zoneId) {
        var z = stage.querySelector('[data-zone-id="' + zoneId + '"]');
        if (!z) return "That step is gone.";
        var held = z.querySelectorAll(".chip");
        for (var i = 0; i < held.length; i++) {
          held[i].classList.remove("placed", "ok", "no");
          tray.appendChild(held[i]);
        }
        return true;
      }
    });
    dg.trayDrop(tray);
    var ladder = E("ol", "ladder");
    (spec.steps || []).forEach(function (st, i) {
      var li = E("li", "rung");
      li.appendChild(E("span", "rung-n", String(i + 1)));
      var z = dg.zone({ id: "p" + (i + 1), label: "step " + (i + 1) });
      z.classList.add("rung-z");
      li.appendChild(z);
      ladder.appendChild(li);
    });
    stage.appendChild(ladder);
    stage.appendChild(E("p", "tray-label", "Drag each step onto a rung. Click a step, then click a rung, or use Tab and Enter."));
    stage.appendChild(tray);
    api.shuffle((spec.steps || []).slice()).forEach(function (st) {
      tray.appendChild(dg.chip({ id: st.text, label: st.text }));
    });

    return function () {
      var place = dg.placement(), right = 0, miss = [];
      (spec.steps || []).forEach(function (st) {
        var ok = place[st.text] === ("p" + st.pos);
        var el = dg.chipEl(st.text);
        el.classList.remove("ok", "no"); el.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else miss.push("<b>" + esc(st.text) + "</b> is step " + st.pos +
          (st.why ? " — " + st.why : ""));
      });
      return {
        score: right, total: (spec.steps || []).length,
        html: miss.length ? "<p>Steps not yet on the right rung:</p>" + api.fbList(miss)
                          : "<p>The whole process is in order.</p>"
      };
    };
  });

  /* --------------------------------------------------------- tokeniser --- */
  /* Split into clickable units. `by` is "word" or "sentence". */
  function tokens(host, text, by, onPick) {
    var units = by === "sentence"
      ? String(text).match(/[^.!?]+[.!?]*\s*/g) || [String(text)]
      : String(text).split(/(\s+)/);
    var chosen = null;
    units.forEach(function (u) {
      if (by === "word" && /^\s+$/.test(u)) { host.appendChild(doc.createTextNode(u)); return; }
      if (!u.trim()) return;
      var b = E("button", "tok", u.trim());
      b.type = "button";
      if (by === "sentence") b.classList.add("tok-s");
      b.addEventListener("click", function () {
        if (chosen) chosen.classList.remove("on");
        if (chosen === b) { chosen = null; onPick(null, null); return; }
        chosen = b; b.classList.add("on");
        onPick(u.trim(), b);
      });
      host.appendChild(b);
      if (by === "word") host.appendChild(doc.createTextNode(" "));
    });
    return { get: function () { return chosen ? chosen.textContent : null; },
             el: function () { return chosen; } };
  }

  /* ---------------------------------------------------------- errorfix --- */
  /* spec.items : [{ text, wrong, right, why }] — `wrong` is one word in `text` */
  D.register("errorfix", function (stage, spec, api) {
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "One word in each sentence is wrong. Click that word, then type the correction."));
    var rows = [];
    (spec.items || []).forEach(function (it, i) {
      var box = E("div", "efx");
      var line = E("p", "efx-line");
      line.appendChild(E("span", "n", (i + 1) + "."));
      var picked = null;
      var tk = tokens(line, it.text, "word", function (t) {
        picked = t;
        inp.disabled = !t;                 /* stable layout; the box is simply dead until a word is chosen */
        if (t) inp.focus();
      });
      box.appendChild(line);
      var fix = E("div", "efx-fix");
      fix.appendChild(E("label", null, "Correction:"));
      var inp = doc.createElement("input");
      inp.type = "text";
      inp.className = "efx-in";
      inp.disabled = true;
      inp.placeholder = "click the wrong word first";
      inp.setAttribute("aria-label", "Correction for sentence " + (i + 1));
      fix.appendChild(inp);
      box.appendChild(fix);
      stage.appendChild(box);
      rows.push({ it: it, tk: tk, inp: inp, box: box, get: function () { return picked; } });
    });

    return function () {
      var right = 0, miss = [];
      rows.forEach(function (r, i) {
        var gotWord = r.tk.get(), gotFix = norm(r.inp.value);
        var wordOk = gotWord && norm(gotWord) === norm(r.it.wrong);
        var fixOk = gotFix === norm(r.it.right);
        var ok = wordOk && fixOk;
        r.box.classList.remove("ok", "no"); r.box.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(r.it.wrong) + " → " +
          esc(r.it.right) + (r.it.why ? " — " + r.it.why : ""));
      });
      return {
        score: right, total: rows.length,
        html: miss.length ? "<p>Not corrected yet:</p>" + api.fbList(miss)
                          : "<p>Every error found and corrected.</p>"
      };
    };
  });

  /* ----------------------------------------------------- selectintext --- */
  /* spec.items : [{ prompt, text, answer, why }] — answer is one sentence of text */
  D.register("selectintext", function (stage, spec, api) {
    var rows = [];
    (spec.items || []).forEach(function (it, i) {
      var box = E("div", "sit");
      var q = E("p", "sit-q");
      q.appendChild(E("span", "n", (i + 1) + "."));
      q.appendChild(doc.createTextNode(it.prompt));
      box.appendChild(q);
      var para = E("div", "sit-p");
      var tk = tokens(para, it.text, "sentence", function () {});
      box.appendChild(para);
      stage.appendChild(box);
      rows.push({ it: it, tk: tk, box: box });
    });

    return function () {
      var right = 0, miss = [];
      rows.forEach(function (r, i) {
        var got = r.tk.get();
        var ok = got && norm(got) === norm(r.it.answer);
        r.box.classList.remove("ok", "no"); r.box.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(r.it.answer) +
          (r.it.why ? " — " + r.it.why : ""));
      });
      return {
        score: right, total: rows.length,
        html: miss.length ? "<p>The sentence you were looking for:</p>" + api.fbList(miss)
                          : "<p>Every sentence correctly located.</p>"
      };
    };
  });

  /* --------------------------------------------- gap inputs in a shell --- */
  /* Walks text containing "___", pairing each gap with spec.gaps[k] in order. */
  function gapify(host, text, gaps, state) {
    String(text).split("___").forEach(function (part, j) {
      host.appendChild(doc.createTextNode(part));
      if (j < String(text).split("___").length - 1) {
        var k = state.k++;
        var inp = doc.createElement("input");
        inp.type = "text";
        inp.className = "cellin";
        inp.setAttribute("aria-label", "Gap " + (k + 1));
        inp.addEventListener("input", function () { inp.classList.remove("ok", "no"); });
        host.appendChild(inp);
        state.inputs.push({ inp: inp, g: gaps[k] || {} });
      }
    });
  }

  function gapGrade(state, api, noun) {
    return function () {
      var right = 0, miss = [];
      state.inputs.forEach(function (r, i) {
        var ok = norm(r.inp.value) === norm(r.g.answer || "");
        r.inp.classList.remove("ok", "no"); r.inp.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(r.g.answer || "") +
          (r.g.why ? " — " + r.g.why : ""));
      });
      return {
        score: right, total: state.inputs.length,
        html: miss.length ? "<p>" + noun + " still to complete:</p>" + api.fbList(miss)
                          : "<p>Every gap right.</p>"
      };
    };
  }

  /* ------------------------------------------------------------- table --- */
  /* spec.head : [col titles]   spec.rows : [[cell, cell, ...]] with "___"
     spec.gaps : [{ answer, why }] in row-major order */
  D.register("table", function (stage, spec, api) {
    if (spec.audio) A().stageFor(stage, spec);
    var state = { k: 0, inputs: [] };
    var wrap = E("div", "tablewrap");
    var t = doc.createElement("table");
    t.className = "gridtable";
    if (spec.caption) {
      var cap = doc.createElement("caption");
      cap.textContent = spec.caption;
      t.appendChild(cap);
    }
    var thead = doc.createElement("thead"), tr = doc.createElement("tr");
    (spec.head || []).forEach(function (h) {
      var th = doc.createElement("th"); th.scope = "col"; th.textContent = h; tr.appendChild(th);
    });
    thead.appendChild(tr); t.appendChild(thead);
    var tb = doc.createElement("tbody");
    (spec.rows || []).forEach(function (row) {
      var r = doc.createElement("tr");
      row.forEach(function (cell, ci) {
        var td = doc.createElement(ci === 0 ? "th" : "td");
        if (ci === 0) td.scope = "row";
        gapify(td, cell, spec.gaps || [], state);
        r.appendChild(td);
      });
      tb.appendChild(r);
    });
    t.appendChild(tb);
    wrap.appendChild(t);
    stage.appendChild(wrap);
    return gapGrade(state, api, "Cells");
  });

  /* ------------------------------------------------------------- notes --- */
  /* spec.lines : [note lines with "___"]   spec.gaps : [{ answer, why }] */
  D.register("notes", function (stage, spec, api) {
    if (spec.audio) A().stageFor(stage, spec);
    var state = { k: 0, inputs: [] };
    var pad = E("div", "notepage");
    if (spec.title) pad.appendChild(E("p", "notepage-h", spec.title));
    (spec.lines || []).forEach(function (ln) {
      var cls = /^- /.test(ln) ? "nline sub" : "nline";
      var p = E("p", cls);
      gapify(p, ln.replace(/^- /, ""), spec.gaps || [], state);
      pad.appendChild(p);
    });
    stage.appendChild(pad);
    return gapGrade(state, api, "Notes");
  });

  /* --------------------------------------------------------- dictation --- */
  /* spec.items : [{ answer, why }] — the sentence is both the audio and the key */
  /* Longest common subsequence over words, so the two lines are aligned
     before they are compared. Dictation lines are short, so the quadratic
     table costs nothing and is far easier to read than a windowed diff. */
  function diff(want, got) {
    var n = want.length, m = got.length, i, j;
    var t = [];
    for (i = 0; i <= n; i++) { t[i] = []; for (j = 0; j <= m; j++) t[i][j] = 0; }
    for (i = n - 1; i >= 0; i--)
      for (j = m - 1; j >= 0; j--)
        t[i][j] = want[i] === got[j] ? t[i + 1][j + 1] + 1
                                     : Math.max(t[i + 1][j], t[i][j + 1]);
    var out = [];
    i = 0; j = 0;
    while (i < n && j < m) {
      if (want[i] === got[j]) { out.push({ op: "same", w: want[i] }); i++; j++; }
      else if (t[i + 1][j] >= t[i][j + 1]) { out.push({ op: "missed", w: want[i] }); i++; }
      else { out.push({ op: "extra", w: got[j] }); j++; }
    }
    while (i < n) { out.push({ op: "missed", w: want[i] }); i++; }
    while (j < m) { out.push({ op: "extra", w: got[j] }); j++; }
    return out;
  }

  D.register("dictation", function (stage, spec, api) {
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Play each line and write exactly what you hear. Spelling counts; punctuation does not."));
    var rows = [];
    (spec.items || []).forEach(function (it, i) {
      var row = E("div", "dict-row");
      row.appendChild(E("span", "n", (i + 1) + "."));
      var pl = A().player({ label: "Line " + (i + 1), say: it.answer,
                            src: it.src, once: false, compact: true });
      row.appendChild(pl);
      var inp = doc.createElement("input");
      inp.type = "text";
      inp.className = "dict-in";
      inp.setAttribute("aria-label", "What you heard in line " + (i + 1));
      inp.placeholder = "Write the whole line";
      inp.addEventListener("input", function () { inp.classList.remove("ok", "no"); });
      row.appendChild(inp);
      stage.appendChild(row);
      rows.push({ it: it, inp: inp });
    });

    return function () {
      var right = 0, miss = [];
      rows.forEach(function (r, i) {
        var old = r.inp.parentNode.querySelector(".dict-diff");
        if (old) old.parentNode.removeChild(old);
        var want = norm(r.it.answer), got = norm(r.inp.value);
        var ok = got === want;
        r.inp.classList.remove("ok", "no"); r.inp.classList.add(ok ? "ok" : "no");
        if (ok) right++;
        else {
          /* F17 — show the comparison aligned, in place.
             The old check compared word j with word j, so a single word
             typed in extra marked every word after it wrong, and the
             feedback blamed the learner for words they had heard correctly.
             This aligns the two lines first. */
          var d = diff(want.split(" "), got.split(" "));
          var strip = E("div", "dict-diff");
          strip.setAttribute("aria-label", "Your line compared with the original");
          d.forEach(function (part) {
            var cls = part.op === "same" ? "d-ok" : part.op === "missed" ? "d-miss" : "d-extra";
            var w = E("span", cls, esc(part.w));
            if (part.op === "extra") w.title = "You wrote this; it is not in the line";
            if (part.op === "missed") w.title = "This word is in the line; you did not write it";
            strip.appendChild(w);
          });
          var key = E("p", "dict-key");
          key.innerHTML = "<span class='d-miss'>missed</span> " +
                          "<span class='d-extra'>written but not said</span>";
          strip.appendChild(key);
          r.inp.parentNode.appendChild(strip);

          var bad = d.filter(function (x) { return x.op === "missed"; })
                     .map(function (x) { return x.w; });
          miss.push("<b>" + (i + 1) + ".</b> " + esc(r.it.answer) +
            (bad.length ? " <i>(missed: " + esc(bad.slice(0, 6).join(", ")) + ")</i>" : "") +
            (r.it.why ? " — " + r.it.why : ""));
        }
      });
      return {
        score: right, total: rows.length,
        html: miss.length ? "<p>Lines not yet exact:</p>" + api.fbList(miss)
                          : "<p>Every line written exactly.</p>"
      };
    };
  });
})(window, document);
