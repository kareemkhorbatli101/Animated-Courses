/* deck.js — the lesson as a deck of scenes.
 *
 * One scene = one lettered exercise (1A, 1B, 2A ...). It carries Step Forward's
 * chrome - the chevron banner, the section number, the exercise letter, a named
 * sidebar, the objective bar - but only ONE interactive object, so the page
 * never becomes a scroll-wall.
 *
 * Contract every scene keeps: a "Check Answers" button and a "Try Again" button,
 * per-element marking, and feedback that leads with the learner's own choice.
 */
(function (root, doc) {
  "use strict";

  var B = root.BOOK, SPEC = root.SPEC, P = root.Progress;

  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function esc(s) {
    return String(s === null || s === undefined ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Reproducible shuffling: ?seed=N makes a run repeatable for testing. */
  var seed = (function () {
    var m = String(root.location.search || "").match(/[?&]seed=(\d+)/);
    return m ? Number(m[1]) : null;
  })(), seedN = 0;
  function rnd() {
    if (seed === null) return Math.random;
    var s = (seed + (seedN++) * 7919) % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function shuffle(a) {
    var r = rnd(), x = a.slice(), i, j, t;
    for (i = x.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = x[i]; x[i] = x[j]; x[j] = t; }
    return x;
  }

  /* Feedback that names the learner's own answer before the right one. */
  function yoursFirst(yours, right) {
    var h = "";
    if (yours) h += "<p><b>You chose:</b> " + yours + "</p>";
    if (right) h += "<p><b>The answer:</b> " + right + "</p>";
    return h;
  }
  function fbList(rows) {
    if (!rows || !rows.length) return "";
    return "<ul>" + rows.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>";
  }

  var KINDS = {};
  var current = 0, api = null, page = null, done = {};

  function noteBox(note) {
    if (!note) return null;
    var cls = { reader: "note-reader", writer: "note-writer", words: "note-words",
                speak: "note-speak", help: "note-help", gram: "note-gram" }[note.kind] || "note-reader";
    var ttl = { reader: "Reader's Note", writer: "Writer's Note", words: "In other words…",
                speak: "Speaking Note", help: "Need help?", gram: "Grammar Notes" }[note.kind] || "Note";
    var n = E("aside", "note " + cls);
    n.appendChild(E("h3", null, note.title || ttl));
    var b = E("div");
    b.innerHTML = note.body || "";
    n.appendChild(b);
    return n;
  }

  function topBar() {
    var bar = E("div", "topbar");
    var home = E("a", "home", B.title);
    home.href = page.up ? page.up + "index.html" : "index.html";
    bar.appendChild(home);
    var w = E("div", "where"); w.id = "where";
    bar.appendChild(w);
    var th = E("button", null, "Theme");
    th.type = "button";
    th.addEventListener("click", function () {
      var cur = doc.documentElement.getAttribute("data-theme");
      if (!cur) cur = root.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var nx = cur === "dark" ? "light" : "dark";
      doc.documentElement.setAttribute("data-theme", nx);
      try { root.localStorage.setItem("toefl.theme", nx); } catch (e) {}
    });
    bar.appendChild(th);
    return bar;
  }

  function build() {
    page = root.PAGE;
    try {
      var t = root.localStorage.getItem("toefl.theme");
      if (t) doc.documentElement.setAttribute("data-theme", t);
    } catch (e) {}

    doc.body.appendChild(topBar());
    doc.body.appendChild(E("div", "motif"));

    var bw = E("div", "wrap");
    var ban = E("div", "banner", B.banner(page.block));
    bw.appendChild(ban);
    doc.body.appendChild(bw);

    if (page.tab) {
      var tab = E("div", "edgetab", page.tab);
      doc.body.appendChild(tab);
    }

    var w2 = E("div", "wrap");
    var sc = E("section", "scene");
    sc.id = "scene";
    w2.appendChild(sc);
    doc.body.appendChild(w2);

    var ob = E("div", "objbar");
    ob.id = "objbar";
    doc.body.appendChild(ob);

    go(startAt());

    doc.addEventListener("keydown", function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }

  function startAt() {
    var n = Number(String(root.location.hash || "").replace("#s", ""));
    return (n >= 1 && n <= page.scenes.length) ? n - 1 : 0;
  }

  function go(i) {
    current = Math.max(0, Math.min(i, page.scenes.length - 1));
    var spec = page.scenes[current];
    var host = doc.getElementById("scene");
    host.innerHTML = "";
    try { root.history.replaceState(null, "", "#s" + (current + 1)); } catch (e) {}

    var u = B.unit(page.unit);
    doc.getElementById("where").innerHTML =
      "<b>" + esc((u ? "Unit " + u.n + " · " + u.title : page.title)) + "</b>&nbsp;·&nbsp;" +
      (current + 1) + " of " + page.scenes.length;

    /* section heading, only when the section changes */
    var prev2 = page.scenes[current - 1];
    if (spec.section && (!prev2 || prev2.section !== spec.section)) {
      var s = E("div", "sec");
      s.appendChild(E("span", "num", String(spec.section)));
      s.appendChild(E("h2", null, spec.sectionTitle || ""));
      host.appendChild(s);
    }

    var ex = E("div", "ex");
    if (spec.audio) {
      var at = E("span", "audio-tag");
      var ab = E("button", null, "♪");
      ab.type = "button";
      ab.setAttribute("aria-label", "Play audio");
      ab.dataset.track = spec.audio.track || "";
      at.appendChild(ab);
      at.appendChild(E("span", null, spec.audio.track || ""));
      ex.appendChild(at);
    }
    ex.appendChild(E("span", "ltr", spec.letter || "A"));
    var body = E("div", "body");
    if (spec.prompt) {
      var p = E("p", "prompt");
      p.innerHTML = spec.prompt;
      body.appendChild(p);
    }
    var stage = E("div", "stage");
    body.appendChild(stage);
    ex.appendChild(body);
    host.appendChild(ex);

    var live = E("p", "live");
    live.setAttribute("aria-live", "polite");
    host.appendChild(live);

    var foot = E("div", "foot");
    var check = E("button", "btn btn-primary btn-check", "Check Answers");
    check.type = "button";
    var again = E("button", "btn btn-ghost btn-again", "Try Again");
    again.type = "button";
    var verdict = E("span", "verdict");
    verdict.setAttribute("aria-live", "polite");
    foot.appendChild(check); foot.appendChild(again); foot.appendChild(verdict);
    host.appendChild(foot);

    var fb = E("div", "fb");
    host.appendChild(fb);

    if (spec.closer) {
      var c = E("div", "closer" + (spec.closer.kind === "life" ? " life" : ""));
      c.appendChild(E("h3", null, spec.closer.kind === "life" ? "Bring it to life" : "Test yourself"));
      var cb = E("div"); cb.innerHTML = spec.closer.body || "";
      c.appendChild(cb);
      host.appendChild(c);
    }

    var steps = E("nav", "steps");
    var pv = E("button", "step-btn", "← Back");
    pv.type = "button"; pv.disabled = current === 0;
    pv.addEventListener("click", prev);
    var dots = E("div", "dots");
    page.scenes.forEach(function (sp, j) {
      var d = E("button", "dot" + (j === current ? " now" : (done[sp.id] ? " done" : "")));
      d.type = "button";
      d.title = (j + 1) + ". " + (sp.sectionTitle || sp.id);
      d.setAttribute("aria-label", "Go to exercise " + (j + 1));
      d.addEventListener("click", function () { go(j); });
      dots.appendChild(d);
    });
    var nx = E("button", "step-btn next", current === page.scenes.length - 1 ? "Finish →" : "Next →");
    nx.type = "button";
    nx.addEventListener("click", next);
    steps.appendChild(pv); steps.appendChild(dots); steps.appendChild(nx);
    host.appendChild(steps);

    doc.getElementById("objbar").innerHTML =
      "<span>" + esc(spec.objective || page.objective || "") + "</span>" +
      "<span>" + esc((u ? "Unit " + u.n + " " : "") + B.banner(page.block).replace(/ .*/, "")) + "</span>";

    api = { spec: spec, stage: stage, live: live, fb: fb, verdict: verdict,
            check: check, again: again, shuffle: shuffle, E: E, esc: esc,
            fbList: fbList, yoursFirst: yoursFirst, note: noteBox, SPEC: SPEC };

    function render() {
      stage.innerHTML = "";
      fb.className = "fb"; fb.innerHTML = "";
      verdict.textContent = ""; verdict.className = "verdict";
      var r = KINDS[spec.kind];
      if (!r) { stage.appendChild(E("p", null, "Unknown exercise kind: " + spec.kind)); return; }
      api.grade = r(stage, spec, api);
    }

    check.onclick = function () {
      if (!api.grade) return;
      var res = api.grade();
      if (!res) return;
      var ok = res.ok !== undefined ? res.ok : res.score === res.total;
      verdict.className = "verdict " + (ok ? "ok" : "no");
      verdict.textContent = res.verdict ||
        (res.total > 1 ? res.score + " of " + res.total + " right" : (ok ? "Right" : "Not yet"));
      fb.className = "fb show " + (ok ? "ok" : "no");
      fb.innerHTML = res.html || "";
      live.textContent = verdict.textContent;
      if (ok) {
        done[spec.id] = true;
        if (P) P.mark(page.id, spec.id);
        dots.children[current].classList.add("done");
      }
    };
    again.onclick = function () {
      render();
      live.textContent = "Reset and reshuffled.";
      var f = stage.querySelector("input,button,textarea,select,.tile");
      if (f) f.focus();
    };

    render();
    root.scrollTo(0, 0);
  }

  function next() {
    if (current < page.scenes.length - 1) go(current + 1);
    else if (page.next) root.location.href = page.next;
  }
  function prev() { if (current > 0) go(current - 1); }

  root.Deck = {
    register: function (kind, fn) { KINDS[kind] = fn; },
    kinds: function () { return Object.keys(KINDS); },
    start: function () {
      if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", build);
      else build();
    },
    E: E, esc: esc, shuffle: shuffle, noteBox: noteBox
  };
})(window, document);
