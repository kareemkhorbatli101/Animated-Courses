/* items.js — the four highest-volume item shapes.
   letterbox  Complete the Words   (30 of the 50 reading items on the real test)
   order      Build a Sentence
   choice     every multiple-choice item, reading and listening
   tfni       T / F / NI with a line citation  (the book's form, kept) */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;

  /* ---------------------------------------------------------- letterbox --- */
  /* spec.items: [{ text, answer, given:[indices], band }]
     `text` contains "___" where the word goes. Given letters are shown; the
     rest are boxes. A wrong letter marks THAT box only, never the whole word. */
  D.register("letterbox", function (stage, spec, api) {
    var rows = [];
    spec.items.forEach(function (it, i) {
      var p = E("p", "item");
      p.appendChild(E("span", "n", (i + 1) + "."));
      var parts = String(it.text).split("___");
      var frag = doc.createDocumentFragment();
      frag.appendChild(doc.createTextNode(parts[0]));
      var lb = E("span", "lb"), inputs = [];
      String(it.answer).split("").forEach(function (ch, j) {
        if ((it.given || []).indexOf(j) > -1) {
          lb.appendChild(E("span", null, ch));
          inputs.push(null);
        } else {
          var inp = doc.createElement("input");
          inp.type = "text";
          inp.maxLength = 1;
          inp.setAttribute("aria-label", "Letter " + (j + 1) + " of item " + (i + 1));
          inp.addEventListener("input", function () {
            inp.value = inp.value.replace(/[^a-zA-Z]/g, "").toLowerCase();
            inp.classList.remove("ok", "no");
            if (inp.value) {
              for (var k = j + 1; k < inputs.length; k++) if (inputs[k]) { inputs[k].focus(); break; }
            }
          });
          inp.addEventListener("keydown", function (e) {
            if (e.key === "Backspace" && !inp.value) {
              for (var k = j - 1; k >= 0; k--) if (inputs[k]) { inputs[k].focus(); break; }
            }
          });
          lb.appendChild(inp);
          inputs.push(inp);
        }
      });
      frag.appendChild(lb);
      frag.appendChild(doc.createTextNode(parts[1] || ""));
      p.appendChild(frag);
      stage.appendChild(p);
      rows.push({ it: it, inputs: inputs });
    });

    return function () {
      var right = 0, miss = [];
      rows.forEach(function (r, i) {
        var want = String(r.it.answer).split(""), all = true;
        r.inputs.forEach(function (inp, j) {
          if (!inp) return;
          var ok = inp.value.toLowerCase() === want[j].toLowerCase();
          inp.classList.toggle("ok", ok);
          inp.classList.toggle("no", !ok);
          if (!ok) all = false;
        });
        if (all) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + esc(r.it.answer) +
          (r.it.why ? " — " + r.it.why : ""));
      });
      return {
        score: right, total: rows.length,
        html: miss.length ? "<p>The words you have not got yet:</p>" + api.fbList(miss)
                          : "<p>Every word complete and correctly spelled.</p>"
      };
    };
  });

  /* -------------------------------------------------------------- order --- */
  /* spec.target: the sentence. spec.extra: distractor tiles (always some, so
     the last tile is never a free placement). Drag, click and keyboard. */
  D.register("order", function (stage, spec, api) {
    var want = String(spec.target).trim().split(/\s+/);
    var tiles = api.shuffle(want.concat(spec.extra || []));
    var slot = E("div", "slot"), tray = E("div", "tray");
    slot.setAttribute("data-hint", spec.hint || "Tap a word, or drag it here");
    slot.setAttribute("role", "list");

    function mk(word, inSlot) {
      var t = E("button", "tile" + (inSlot ? " set" : ""), word);
      t.type = "button";
      t.draggable = true;
      t.addEventListener("click", function () {
        if (t.parentNode === tray) slot.appendChild(t); else tray.appendChild(t);
        t.classList.toggle("set");
        t.classList.remove("ok", "no");
      });
      t.addEventListener("dragstart", function (e) {
        t.dataset.dragging = "1";
        try { e.dataTransfer.setData("text/plain", word); } catch (x) {}
      });
      t.addEventListener("dragend", function () { delete t.dataset.dragging; });
      return t;
    }
    tiles.forEach(function (w) { tray.appendChild(mk(w, false)); });

    [slot, tray].forEach(function (zone) {
      zone.addEventListener("dragover", function (e) { e.preventDefault(); });
      zone.addEventListener("drop", function (e) {
        e.preventDefault();
        var t = stage.querySelector('.tile[data-dragging="1"]');
        if (!t) return;
        zone.appendChild(t);
        t.classList.toggle("set", zone === slot);
        t.classList.remove("ok", "no");
      });
    });

    stage.appendChild(slot);
    stage.appendChild(tray);

    return function () {
      var got = [].map.call(slot.children, function (c) { return c.textContent; });
      var ok = got.length === want.length && got.every(function (w, i) { return w === want[i]; });
      [].forEach.call(slot.children, function (c, i) {
        var good = want[i] === c.textContent;
        c.classList.toggle("ok", good);
        c.classList.toggle("no", !good);
      });
      return {
        ok: ok, total: 1,
        verdict: ok ? "Right" : "Not yet",
        html: ok
          ? "<p>" + esc(spec.target) + (spec.why ? "</p><p>" + spec.why : "") + "</p>"
          : api.yoursFirst(got.length ? esc(got.join(" ")) : "<i>nothing placed yet</i>",
                           esc(spec.target)) + (spec.why ? "<p>" + spec.why + "</p>" : "")
      };
    };
  });

  /* ------------------------------------------------------------- choice --- */
  /* Shared by the standalone `choice` kind and by every listening cluster.
     Renders one option group into `host` and returns its grader. */
  function choiceInto(host, options, api) {
    var opts = api.shuffle(options.slice()), picked = null, btns = [];
    var box = E("div", "opts");
    opts.forEach(function (o, i) {
      var b = E("button", "opt");
      b.type = "button";
      b.setAttribute("aria-pressed", "false");
      b.appendChild(E("span", "k", String.fromCharCode(65 + i)));
      var s2 = E("span");
      s2.innerHTML = o.text;
      b.appendChild(s2);
      b.addEventListener("click", function () {
        picked = o;
        btns.forEach(function (x) { x.setAttribute("aria-pressed", "false"); x.classList.remove("ok", "no"); });
        b.setAttribute("aria-pressed", "true");
      });
      btns.push(b);
      box.appendChild(b);
    });
    host.appendChild(box);

    return function () {
      var right = opts.filter(function (o) { return o.correct; })[0] || {};
      if (!picked) {
        btns[opts.indexOf(right)].classList.add("ok");
        return { ok: false, picked: null, rightText: right.text, rightWhy: right.why,
                 html: "<p>Nothing chosen.</p>" };
      }
      var ok = !!picked.correct;
      opts.forEach(function (o, i) {
        if (o.correct) btns[i].classList.add("ok");
        else if (o === picked) btns[i].classList.add("no");
      });
      return {
        ok: ok, picked: picked, rightText: right.text, rightWhy: right.why,
        html: ok ? "<p>" + (picked.why || "Correct.") + "</p>"
                 : api.yoursFirst(picked.text + (picked.why ? " \u2014 " + picked.why : ""),
                                  right.text + (right.why ? " \u2014 " + right.why : ""))
      };
    };
  }
  D._choiceInto = choiceInto;

  D.register("choice", function (stage, spec, api) {
    var g = choiceInto(stage, spec.options, api);
    return function () {
      var r = g();
      return { ok: r.ok, total: 1, verdict: r.ok ? "Right" : (r.picked ? "Not yet" : "Choose one"), html: r.html };
    };
  });

  /* --------------------------------------------------------------- tfni --- */
  /* The book's form: mark T / F / NI, and for T or F cite the line.
     spec.items: [{ stem, answer:"T"|"F"|"NI", line: n|null, why }] */
  D.register("tfni", function (stage, spec, api) {
    var rows = [];
    spec.items.forEach(function (it, i) {
      var r = E("div", "tfni");
      var mark = E("span", "mark"), chosen = null, mb = {};
      ["T", "F", "NI"].forEach(function (v) {
        var b = E("button", null, v);
        b.type = "button";
        b.setAttribute("aria-pressed", "false");
        b.setAttribute("aria-label", v + " for statement " + (i + 1));
        b.addEventListener("click", function () {
          chosen = v;
          ["T", "F", "NI"].forEach(function (k) {
            mb[k].setAttribute("aria-pressed", String(k === v));
            mb[k].classList.remove("ok", "no");
          });
          line.disabled = (v === "NI");
          if (v === "NI") line.value = "";
        });
        mb[v] = b;
        mark.appendChild(b);
      });
      r.appendChild(mark);
      var st = E("span", "stem");
      st.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + it.stem;
      r.appendChild(st);
      var line = doc.createElement("input");
      line.type = "text";
      line.className = "abox sm";
      line.setAttribute("aria-label", "Line number for statement " + (i + 1));
      line.placeholder = "line";
      line.title = "The line number where you found it";
      r.appendChild(line);
      stage.appendChild(r);
      rows.push({ it: it, get chosen() { return chosen; }, mb: mb, line: line });
    });

    return function () {
      var right = 0, miss = [];
      rows.forEach(function (r, i) {
        var want = r.it.answer;
        var markOk = r.chosen === want;
        var lineOk = (want === "NI") || (String(r.line.value).trim() === String(r.it.line));
        var ok = markOk && lineOk;
        if (r.chosen) {
          r.mb[r.chosen].classList.add(markOk ? "ok" : "no");
          if (!markOk) r.mb[want].classList.add("ok");
        } else { r.mb[want].classList.add("ok"); }
        r.line.classList.toggle("ok", lineOk && want !== "NI");
        r.line.classList.toggle("no", !lineOk);
        if (ok) right++;
        else {
          miss.push("<b>" + (i + 1) + ". " + want +
            (want === "NI" ? "" : " (line " + r.it.line + ")") + "</b> — " +
            (r.it.why || "") + (markOk && !lineOk ? " <i>You had the mark right but not the line.</i>" : ""));
        }
      });
      return {
        score: right, total: rows.length,
        html: miss.length
          ? "<p>Each one needs the right mark <i>and</i> the line it came from:</p>" + api.fbList(miss)
          : "<p>Every statement marked, and every line cited.</p>"
      };
    };
  });

})(window, document);
