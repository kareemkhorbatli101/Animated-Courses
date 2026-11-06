/* write.js — the two productive writing tasks, plus the notepad.
 *
 * These are AI-scored out of 5 on the real test, so the book cannot mark them.
 * What it can do is what Step Forward does: give a model, make the learner
 * study how the model does each job, give a template, then a four-tick editing
 * checklist, then ask them to judge their own draft against it. The checklist
 * IS the grading here, and it is honest about that.
 */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc, Docs = root.Docs, C = root.CAST;

  function checklist(spec, host) {
    var r = E("div", "rubric");
    r.appendChild(E("h4", null, spec.checklistTitle || "Editing checklist"));
    var boxes = [];
    (spec.checklist || []).forEach(function (t, i) {
      var lab = doc.createElement("label");
      var cb = doc.createElement("input");
      cb.type = "checkbox";
      cb.className = "cbx";
      var sp = E("span");
      sp.innerHTML = t;
      lab.appendChild(cb);
      lab.appendChild(sp);
      r.appendChild(lab);
      boxes.push({ cb: cb, text: t, id: "ck" + i });
    });
    host.appendChild(r);
    return boxes;
  }

  function counter(ta, host, min) {
    /* F30 — a ring, read at a glance while writing. The plain number is
       kept as the fallback when ws.js is not loaded. */
    if (root.WS) return root.WS.wordRing(ta, host, min);
    var c = E("p", "wc");
    host.appendChild(c);
    function upd() {
      var n = (ta.value.trim().match(/\S+/g) || []).length;
      c.textContent = n + (min ? " / " + min + " words" : " words");
      c.classList.toggle("ok", !min || n >= min);
    }
    ta.addEventListener("input", upd);
    upd();
    return function () { return (ta.value.trim().match(/\S+/g) || []).length; };
  }

  /* ------------------------------------------------------- the model + dial */
  /* The book's Unit 11 Lesson 2 exercise, made live: two versions of the same
     message, one formal and one not, and a switch between them. */
  D.register("register-dial", function (stage, spec, api) {
    var dial = E("div", "dial"), host = E("div"), btns = [];
    var keys = Object.keys(spec.versions);
    keys.forEach(function (k) {
      var b = E("button", null, spec.versions[k].label || k);
      b.type = "button";
      b.setAttribute("aria-pressed", String(k === keys[0]));
      b.addEventListener("click", function () { show(k); });
      btns.push({ k: k, b: b });
      dial.appendChild(b);
    });
    function show(k) {
      btns.forEach(function (x) { x.b.setAttribute("aria-pressed", String(x.k === k)); });
      host.innerHTML = "";
      host.appendChild(Docs.email(spec.versions[k]));
    }
    stage.appendChild(dial);
    var cols = E("div", "cols");
    cols.appendChild(host);
    if (spec.note) { var n = api.note(spec.note); if (n) cols.appendChild(n); }
    stage.appendChild(cols);
    show(keys[0]);

    /* The comparison question the book asks. */
    var g = null;
    if (spec.ask) {
      var q = E("p", "item");
      q.innerHTML = spec.ask;
      stage.appendChild(q);
      var sub = E("div");
      stage.appendChild(sub);
      g = D._choiceInto(sub, spec.options, api);
    }
    return function () {
      if (!g) return { ok: true, total: 1, verdict: "Compared",
                       html: spec.after || "<p>Flip the switch and read both again.</p>" };
      var r = g();
      return { ok: r.ok, total: 1, verdict: r.ok ? "Right" : "Not yet", html: r.html };
    };
  });

  /* ------------------------------------------------------------- write-email */
  D.register("write-email", function (stage, spec, api) {
    if (spec.scenario) {
      var sc = E("div", "panel");
      sc.innerHTML = "<h3>" + esc(spec.scenarioTitle || "The situation") + "</h3>" + spec.scenario;
      stage.appendChild(sc);
    }
    var cols = E("div", "cols");
    var left = E("div");
    var mail = Docs.email({
      editable: true, from: spec.from || "you@university.edu",
      to: spec.to || "", re: spec.re || "",
      placeholder: spec.placeholder || "Write your email here…"
    });
    left.appendChild(mail);
    cols.appendChild(left);
    if (spec.note) { var n = api.note(spec.note); if (n) cols.appendChild(n); }
    stage.appendChild(cols);

    var count = counter(mail.textarea, left, spec.minWords || null);
    /* F31 — the shapes go above the checklist, because they help while you
       write and the checklist is for when you have stopped. */
    if (root.WS) root.WS.frames(left, mail.textarea, spec.frames);
    if (root.WS && spec.modelJobs) root.WS.modelJobs(stage, spec.model, spec.modelJobs);
    var boxes = checklist(spec, stage);
    /* F29 — a tick has to find the sentence that earns it. */
    if (root.WS) root.WS.pointingChecklist(boxes, mail.textarea, stage);

    /* Draft survives Try Again and a reload: losing a draft is unforgivable. */
    var key = "toefl.draft." + (root.PAGE ? root.PAGE.id : "x") + "." + spec.id;
    try {
      var saved = root.localStorage.getItem(key);
      if (saved) { mail.textarea.value = saved; count(); }
      mail.textarea.addEventListener("input", function () {
        try { root.localStorage.setItem(key, mail.textarea.value); } catch (e) {}
      });
    } catch (e) {}

    return function () {
      var n = count(), ticked = boxes.filter(function (b) { return b.cb.checked; });
      var missing = boxes.filter(function (b) { return !b.cb.checked; });
      /* F34 — your length against the model's. In writing this is really
         measurable, unlike speaking, where nothing records what you said. */
      var old = stage.querySelector(".ws-len");
      if (old) old.parentNode.removeChild(old);
      if (root.WS && spec.model && n) {
        var mw = root.WS.words(String(spec.model).replace(/<[^>]+>/g, " "));
        if (mw) root.WS.lengthVsModel(stage, n, mw);
      }
      if (!n) return { ok: false, total: 1, verdict: "Nothing written",
                       html: "<p>Write the email first, then check it against the list.</p>" };
      if (spec.minWords && n < spec.minWords) {
        return { ok: false, total: 1, verdict: n + " words",
                 html: "<p>The task asks for at least " + spec.minWords +
                       " words. You have " + n + ".</p>" };
      }
      var ok = missing.length === 0;
      return {
        ok: ok, total: 1,
        verdict: ticked.length + " of " + boxes.length + " ticked",
        html: (ok
          ? "<p>All " + boxes.length + " ticked, and " + n + " words. " +
            "On the real test this is scored out of 5 by machine, so the list is the " +
            "closest thing to a mark this book can honestly give you.</p>"
          : "<p>Still to do before this would score well:</p>" +
            api.fbList(missing.map(function (b) { return b.text; }))) +
          (spec.model ? "<p><b>A model answer:</b></p><div class='model'>" + spec.model + "</div>" : "")
      };
    };
  });

  /* ------------------------------------------------- write-academic-discussion */
  D.register("discussion", function (stage, spec, api) {
    (spec.posts || []).forEach(function (p) {
      var el = E("div", "post" + (p.role === "prof" ? " prof" : ""));
      var hd = E("div", "hd");
      hd.innerHTML = C.svg(p.who, 30) + "<b>" + esc(C.person(p.who) ? C.person(p.who).name : p.who) +
        "</b><em>" + esc(p.when || "") + "</em>";
      el.appendChild(hd);
      var body = E("p");
      body.innerHTML = p.text;
      el.appendChild(body);
      stage.appendChild(el);
    });

    var mine = E("div", "post me");
    var mh = E("div", "hd");
    mh.innerHTML = C.svg("you", 30) + "<b>Your reply</b><em>" +
      esc((spec.minWords || 100) + " words or more") + "</em>";
    mine.appendChild(mh);
    var ta = doc.createElement("textarea");
    ta.placeholder = spec.placeholder || "Take a side, give a reason from your own experience, and answer a classmate by name…";
    ta.setAttribute("aria-label", "Your reply");
    mine.appendChild(ta);
    stage.appendChild(mine);

    var cnt = counter(ta, stage, spec.minWords || 100);
    if (root.WS) root.WS.frames(stage, ta, spec.frames);
    if (root.WS && spec.modelJobs) root.WS.modelJobs(stage, spec.model, spec.modelJobs);
    var boxes = checklist(spec, stage);
    if (root.WS) root.WS.pointingChecklist(boxes, ta, stage);

    var key = "toefl.draft." + (root.PAGE ? root.PAGE.id : "x") + "." + spec.id;
    try {
      var saved = root.localStorage.getItem(key);
      if (saved) { ta.value = saved; cnt(); }
      ta.addEventListener("input", function () {
        try { root.localStorage.setItem(key, ta.value); } catch (e) {}
      });
    } catch (e) {}

    /* The one thing that is machine-checkable here, and it is the thing that
       separates a 3 from a 5: did you answer a classmate BY NAME? */
    var names = (spec.posts || []).filter(function (p) { return p.role !== "prof"; })
      .map(function (p) { return (C.person(p.who) || {}).name || ""; })
      .map(function (n) { return n.split(" ")[0]; }).filter(Boolean);

    return function () {
      var n = cnt();
      if (!n) return { ok: false, total: 1, verdict: "Nothing written",
                       html: "<p>Write your reply first.</p>" };
      var named = names.filter(function (nm) {
        return new RegExp("\\b" + nm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(ta.value);
      });
      var missing = boxes.filter(function (b) { return !b.cb.checked; });
      var longEnough = n >= (spec.minWords || 100);
      var ok = !missing.length && longEnough && named.length > 0;
      var rows = [];
      if (!longEnough) rows.push("Write at least " + (spec.minWords || 100) + " words — you have " + n + ".");
      if (!named.length) rows.push("Answer <b>" + names.join(" or ") +
        "</b> by name. Restating the question is a 3; engaging a classmate is a 5.");
      missing.forEach(function (b) { rows.push(b.text); });
      return {
        ok: ok, total: 1,
        verdict: ok ? "Ready" : (named.length ? n + " words" : "No classmate named"),
        html: ok
          ? "<p>" + n + " words, you answered <b>" + named.join(" and ") +
            "</b> by name, and every box is ticked.</p>" +
            (spec.model ? "<p><b>A model answer:</b></p><div class='model'>" + spec.model + "</div>" : "")
          : api.fbList(rows)
      };
    };
  });

  /* ------------------------------------------------------------------ notepad */
  function notepad(host, label) {
    var p = E("div", "pad");
    p.appendChild(E("h4", null, label || "Your notes"));
    var ta = doc.createElement("textarea");
    ta.setAttribute("aria-label", "Notes");
    ta.placeholder = "Type while it plays. The audio does not come back.";
    p.appendChild(ta);
    host.appendChild(p);
    return ta;
  }
  root.Write = { notepad: notepad, checklist: checklist, counter: counter };
})(window, document);
