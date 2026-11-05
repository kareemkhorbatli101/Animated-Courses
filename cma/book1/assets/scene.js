/* scene.js — the deck: one idea per screen.
 *
 * A section is a sequence of scenes. One scene fills one viewport and holds ONE
 * interactive object and at most ~40 words of text. There is no scroll-wall and
 * no stack of six text layers above the task.
 *
 * Every scene keeps the contract: a "Check Answers" button and a "Try Again"
 * button, per-element marking, feedback that leads with the learner's own choice.
 */
(function (root, doc) {
  "use strict";

  var L = root.LEDGER, P = root.Progress, S = root.Speech, T = root.TERMS;

  /* ---------------- tiny helpers ---------------- */
  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function esc(s) {
    return String(s === null || s === undefined ? "" : s)
      .replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
  }
  function ar(text) {
    var s = E("span", "ar");
    s.setAttribute("lang", "ar");
    s.setAttribute("dir", "rtl");
    s.textContent = text;
    return s;
  }
  var seed = (function () {
    var m = String(root.location.search || "").match(/[?&]seed=(\d+)/);
    return m ? Number(m[1]) : null;
  })(), seedN = 0;
  /* ?seed= EXISTS SO A SCREEN CAN BE REPRODUCED - to show somebody the exact board a
     learner was looking at, and so an automated check can compare two renders. It did
     not do that. seedN counted up forever, so the second render of the same scene drew
     from a different stream than the first: pressing Try Again, or simply coming back
     to a scene, reshuffled it even under a fixed seed, and a determinism check saw two
     different stages. Resetting the counter at the start of every render makes the nth
     shuffle WITHIN a scene reproducible, which is what reproducing a screen means. */
  function resetSeed() { seedN = 0; }
  function rnd() {
    if (seed === null) return Math.random;
    var s = (seed + (seedN++) * 7919) % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function shuffle(a) {
    var r = rnd(), x = a.slice();
    for (var i = x.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = x[i]; x[i] = x[j]; x[j] = t;
    }
    return x;
  }

  /* ---------------- drag: grip, lift, ghost, snap, spring-back ---------------- */
  function Drag(opts) {
    var self = {}, picked = null, zones = [], chips = {};

    function say(m) { if (opts.live) opts.live.textContent = m; }

    self.chip = function (spec) {
      /* spec: {id, label, ar, amount, negate} */
      var c = E("div", "chip" + (spec.negate ? " neg" : ""));
      c.tabIndex = 0;
      c.draggable = true;
      c.dataset.chip = spec.id;
      c.setAttribute("role", "button");
      var g = E("span", "grip", "\u283F");
      g.setAttribute("aria-hidden", "true");
      c.appendChild(g);
      c.appendChild(E("span", "chip-label", spec.label));
      if (spec.ar) c.appendChild(ar(spec.ar));
      /* The amount travels with the account. This is the whole point. */
      if (spec.amount !== undefined && spec.amount !== null) {
        c.appendChild(E("span", "chip-amt", spec.negate ? "(" + L.money(Math.abs(spec.amount)) + ")"
                                                        : L.money(spec.amount)));
      }
      c.setAttribute("aria-label", spec.label +
        (spec.amount !== undefined && spec.amount !== null ? ", " + L.money(spec.amount) : "") +
        ". Press Enter to pick up.");
      c.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", spec.id);
        e.dataTransfer.effectAllowed = "move";
        c.classList.add("lift");
        arm(true);
      });
      c.addEventListener("dragend", function () { c.classList.remove("lift"); arm(false); });
      c.addEventListener("click", function () { pick(spec.id); });
      c.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(spec.id); }
      });
      chips[spec.id] = { el: c, spec: spec };
      opts.tray.appendChild(c);
      return c;
    };

    function arm(on) { zones.forEach(function (z) { z.el.classList.toggle("armed", on); }); }
    function pick(id) {
      if (picked === id) { release(); return; }
      release();
      picked = id;
      chips[id].el.classList.add("picked");
      arm(true);
      say(chips[id].spec.label + " picked up. Choose where it goes.");
    }
    function release() {
      if (picked && chips[picked]) chips[picked].el.classList.remove("picked");
      picked = null;
      arm(false);
    }

    self.zone = function (spec) {
      /* spec: {id, el, host, cap, ghost} */
      var z = { id: spec.id, el: spec.el, host: spec.host || spec.el, cap: spec.cap || 1, label: spec.label };
      zones.push(z);
      /* the zone's logical id on the element: addressable for keyboard routing,
         for ?seed= reproduction and for the automated contract checks */
      z.el.dataset.zoneId = spec.id;
      z.el.tabIndex = 0;
      z.el.setAttribute("role", "button");
      if (spec.ghost) {
        var g = E("span", "ghost", spec.ghost);
        z.host.parentNode === z.el ? z.el.insertBefore(g, z.host) : z.el.appendChild(g);
      }
      z.el.addEventListener("dragover", function (e) { e.preventDefault(); z.el.classList.add("over"); });
      z.el.addEventListener("dragleave", function () { z.el.classList.remove("over"); });
      z.el.addEventListener("drop", function (e) {
        e.preventDefault(); z.el.classList.remove("over");
        drop(z, e.dataTransfer.getData("text/plain"));
      });
      z.el.addEventListener("click", function () { if (picked) drop(z, picked); });
      z.el.addEventListener("keydown", function (e) {
        if ((e.key === "Enter" || e.key === " ") && picked) { e.preventDefault(); drop(z, picked); }
      });
      return z;
    };

    function held(z) {
      return Array.prototype.slice.call(z.host.querySelectorAll("[data-held]"))
        .map(function (n) { return n.dataset.held; });
    }

    function drop(z, id) {
      var c = chips[id];
      if (!c) return;
      /* A guard lets the scene refuse a drop and say why, on the chip itself. */
      if (opts.guard) {
        var why = opts.guard(z, c.spec);
        if (why) { bounce(c.el, why); release(); return; }
      }
      var from = zoneOf(id);
      if (from === z) { release(); return; }
      if (from) pull(from, id);
      if (z.cap === 1) held(z).forEach(function (o) { pull(z, o); });
      var p = E("span", "placed");
      p.dataset.held = id;
      p.appendChild(E("span", null, c.spec.label));
      if (c.spec.amount !== undefined && c.spec.amount !== null) {
        p.appendChild(E("span", "chip-amt", c.spec.negate ? "(" + L.money(Math.abs(c.spec.amount)) + ")"
                                                          : L.money(c.spec.amount)));
      }
      var x = E("button", "x", "\u00d7");
      x.type = "button";
      x.setAttribute("aria-label", "Remove " + c.spec.label);
      x.addEventListener("click", function (e) { e.stopPropagation(); pull(z, id); });
      p.appendChild(x);
      z.host.appendChild(p);
      z.el.classList.add("filled");
      z.el.classList.remove("ok", "no");
      c.el.classList.add("used");
      release();
      say(c.spec.label + " placed in " + (z.label || z.id) + ".");
      if (opts.change) opts.change(self.state());
    }

    function bounce(el, why) {
      el.classList.add("reject");
      setTimeout(function () { el.classList.remove("reject"); }, 340);
      var t = E("div", "chip-why", why);
      doc.body.appendChild(t);
      var r = el.getBoundingClientRect();
      t.style.left = Math.max(8, Math.min(r.left, root.innerWidth - 312)) + "px";
      t.style.top = (r.top + root.scrollY - t.offsetHeight - 10) + "px";
      setTimeout(function () { t.remove(); }, 3200);
      say(why);
    }
    self.bounce = bounce;

    function pull(z, id) {
      var n = z.host.querySelector('[data-held="' + String(id).replace(/["\\]/g, "\\$&") + '"]');
      if (n) n.remove();
      if (!held(z).length) z.el.classList.remove("filled");
      z.el.classList.remove("ok", "no");
      if (chips[id]) chips[id].el.classList.remove("used");
      if (opts.change) opts.change(self.state());
    }
    function zoneOf(id) {
      for (var i = 0; i < zones.length; i++) if (held(zones[i]).indexOf(id) >= 0) return zones[i];
      return null;
    }

    self.state = function () {
      var o = {};
      zones.forEach(function (z) { o[z.id] = held(z); });
      return o;
    };
    self.zoneOf = zoneOf;
    self.zones = zones;
    self.chips = chips;
    self.mark = function (zid, ok) {
      zones.forEach(function (z) {
        if (z.id !== zid) return;
        z.el.classList.remove("ok", "no");
        z.el.classList.add(ok ? "ok" : "no");
      });
    };
    self.clearMarks = function () {
      zones.forEach(function (z) { z.el.classList.remove("ok", "no"); });
    };
    return self;
  }

  /* ---------------- feedback blocks ---------------- */
  function fbList(items) {
    return "<ul>" + items.map(function (i) {
      return "<li class=\"" + i.k + "\">" + i.html + "</li>";
    }).join("") + "</ul>";
  }
  function yoursFirst(yours, right) {
    var h = "";
    if (yours && yours.length) h += "<h4>What you chose</h4>" + fbList(yours);
    if (right && right.length) h += "<h4>" + (yours && yours.length ? "The answer" : "Correct") + "</h4>" + fbList(right);
    return h;
  }

  /* ---------------- the term strip ---------------- */
  function termStrip(host, terms) {
    if (!terms || !terms.length) return;
    doc.body.classList.add("has-strip");
    var bar = E("div", "strip");
    var w = E("div", "wrap");
    var inn = E("div", "strip-in");
    inn.appendChild(E("span", "strip-k", "Terms"));
    terms.forEach(function (t) {
      var c = E("button", "tchip");
      c.type = "button";
      /* a drawn mark for the term, from assets/icons.js: its family's shape with its own
         part lit. Absent if that file is not loaded, which is why it is guarded. */
      if (root.Icons) {
        var ic = root.Icons.icon(t.en);
        if (ic) c.appendChild(ic);
      }
      c.appendChild(E("span", null, t.en));
      if (S) {
        var b1 = S.button(t.en, "en", "Pronounce in English");
        b1.className = "speak";
        c.appendChild(b1);
      }
      if (t.ar) {
        c.appendChild(ar(t.ar));
        if (S) {
          var b2 = S.button(t.ar, "ar", "Pronounce in Arabic");
          b2.className = "speak";
          c.appendChild(b2);
        }
      }
      /* The book prints a third column, Français, for sixteen of these terms. It was the largest
         single piece of the chapter that never reached a learner. Shown only where the author gives
         it; the rest of the term bank has no French and none is invented here. */
      var fr = (root.TERMS_FR || {})[String(t.en).toLowerCase()];
      if (fr) {
        var f = E("span", "fr", fr);
        f.setAttribute("lang", "fr");
        c.appendChild(f);
      }
      c.title = t.gloss;
      inn.appendChild(c);
    });
    w.appendChild(inn);
    bar.appendChild(w);
    host.appendChild(bar);
  }

  /* ---------------- exhibits: a figure is never a scene ----------------
   *
   * The chapter's data decks list the author's figures and printed statements in the
   * order he prints them, as scenes of their own. That is faithful to the book and
   * wrong for a learner: a picture cannot be got wrong, so eleven figure scenes and
   * two statement scenes were thirteen screens that marked nobody, and a chapter made
   * of interactive objects still read as a lecture.
   *
   * So the deck is folded before it is shown. Each figure or statement becomes an
   * EXHIBIT on the next exercise, and that exercise is what gets marked. The data
   * decks are untouched — they stay the book's record — and no picture is lost; each
   * one now sits on the same screen as the question it is evidence for.
   *
   * An exhibit at the very end of a deck has nothing following it, so it attaches to
   * the last exercise instead. Attaching it to nothing would silently drop a figure.
   */
  /* `grid` is the wide form of `lines`: Chapter 4's Figure F04-02 is a roll-forward
     matrix with one column per component of equity, which the two-column `lines`
     exhibit cannot hold. See assets/grid.js. */
  var EXHIBIT_SLOT = { figure: "fig", lines: "lines", grid: "grid" };

  /* WHERE AN EXHIBIT GOES, AND THE MISTAKE THAT SETTLED IT.
   *
   * The first version folded every figure onto the NEXT exercise, which is where the
   * book prints it. That turned out to put the answer key directly above the question,
   * again and again, because the author prints a figure immediately before the exercise
   * built on it: F01-04 lists all six account types under "increase with a DEBIT" and
   * "increase with a CREDIT", and the sort beneath it asks exactly that; F01-09 labels
   * every statement "for a PERIOD" or "at a DATE", and the sort beneath it asks exactly
   * that; F02-03 prints "32 ... 34 ... 66 days ... shorter than a year, so Orontes uses
   * one year", which is every answer the cycle exercise wants. Eleven "Looked at" slides
   * had been replaced by eight answer keys, and it looked entirely normal.
   *
   * Moving each one on by a single exercise did not fix it - F01-09 simply landed on the
   * wire exercise it also answers - because the figure answers the SECTION, not one
   * question in it.
   *
   * So a figure is a REFERENCE and goes at the END of its section: the Brief explains
   * before, the exercises ask, and the author's own figure closes the section as the
   * thing to carry away. An exhibit the learner cannot answer WITHOUT - a list of
   * accounts to classify - declares `data: true` and folds forward instead.
   */
  function foldExhibits(scenes, page) {
    var out = [], atEnd = [];
    (scenes || []).forEach(function (s) {
      var slot = EXHIBIT_SLOT[s && s.kind];
      if (slot) {
        /* A FIGURE THAT ANSWERS ITS WHOLE PAGE HAS NOWHERE ON IT TO STAND. The chapter
           summary map is the clearest case: F01-13 prints six of the eight words the
           summary cloze blanks and the key rule the summary sort asks for, so wherever
           it lands on that page it is the answer. It goes to the Brief instead - the
           one place in this design that is allowed to explain - and the page stays a
           test. Declared with inBrief on the figure, never guessed. */
        if (s.inBrief) {
          page.brief = page.brief || {};
          page.brief.figs = (page.brief.figs || []).concat([s]);
          return;
        }
        atEnd.push({ slot: slot, data: s, now: !!s.data });
        return;
      }
      for (var i = atEnd.length - 1; i >= 0; i--) {
        if (!atEnd[i].now) continue;
        if (!s[atEnd[i].slot]) s[atEnd[i].slot] = atEnd[i].data;
        atEnd.splice(i, 1);
      }
      out.push(s);
    });
    /* Whatever is left is a reference, and it closes the PRACTICE - the last scene that
       is not one of the author's own section-check questions.
       Not simply the last scene: §2.5 ends with "Which amount on the statement of cash
       flows must equal an amount on the balance sheet?", and F02-09 draws that link with
       the arrow labelled. Putting the reference on the final question answered the
       author's own assessment. Landing it on the last practice scene instead means the
       learner meets the figure having done the work, and still has to answer the
       section check from what they now know. */
    var host = null;
    for (var j = out.length - 1; j >= 0; j--) {
      if (out[j].kind !== "check") { host = out[j]; break; }
    }
    if (!host) host = out[out.length - 1];
    atEnd.forEach(function (p) {
      if (host && !host[p.slot]) host[p.slot] = p.data;
    });
    return out;
  }

  /* ---------------- the deck ---------------- */
  var SCENES = {};        /* registered by objects.js */
  var current = 0, api = null, page = null, done = {};

  function build() {
    page = root.PAGE;
    page.scenes = foldExhibits(page.scenes, page);
    doc.body.insertBefore(topBar(), doc.body.firstChild);
    var deck = E("div", "deck");
    var w = E("div", "wrap");
    var sc = E("section", "scene");
    sc.id = "scene";
    w.appendChild(sc);
    deck.appendChild(w);
    doc.body.appendChild(deck);
    termStrip(deck, page.terms || []);
    drawer();
    go(startAt());
    doc.addEventListener("keydown", function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }

  function startAt() {
    var h = String(root.location.hash || "").replace("#s", "");
    var n = Number(h);
    if (n >= 1 && n <= page.scenes.length) return n - 1;
    return 0;
  }

  function topBar() {
    var bar = E("header", "bar");
    var w = E("div", "wrap");
    var home = E("a", "bar-home");
    home.href = (page.up || "") + "index.html";
    /* The chapter names itself (Progress reads window.CHAPTER_MARK / CHAPTER_LABEL, and
       falls back to Chapter 1), so this file is shared without being rewritten per chapter. */
    home.appendChild(E("span", "bar-mark", P ? P.mark : "C1"));
    home.appendChild(E("span", null, P ? P.label : "Chapter 1"));
    w.appendChild(home);
    var where = E("div", "bar-where");
    where.id = "where";
    w.appendChild(where);
    var b = E("button", "bar-menu", "Contents");
    b.type = "button";
    b.addEventListener("click", function () { doc.getElementById("drawer").classList.add("open"); });
    w.appendChild(b);
    bar.appendChild(w);
    return bar;
  }

  function drawer() {
    var d = E("div", "drawer");
    d.id = "drawer";
    var p = E("div", "drawer-panel");
    var x = E("button", "drawer-close", "\u00d7");
    x.type = "button";
    x.setAttribute("aria-label", "Close contents");
    x.addEventListener("click", function () { d.classList.remove("open"); });
    p.appendChild(x);
    p.appendChild(E("h2", null, P ? P.label : "Chapter 1"));
    var ol = E("ol");
    (P ? P.TOC : []).forEach(function (t) {
      var li = E("li", t.id === page.id ? "on" : "");
      var a = E("a");
      a.href = t.file;
      a.appendChild(E("span", "drawer-n", t.n));
      a.appendChild(E("span", null, t.title));
      var st = P.pageStats(t.id);
      if (st.complete) a.appendChild(E("span", "drawer-tick", "\u2713"));
      else if (st.done) a.appendChild(E("span", "drawer-tick", st.done + "/" + st.total));
      li.appendChild(a);
      ol.appendChild(li);
    });
    p.appendChild(ol);
    var f = E("div", "drawer-foot");
    f.innerHTML = '<a href="' + (page.up || "") + 'index.html">Book contents</a> &middot; ' +
      '<a href="' + (page.up || "") + 'glossary.html">Glossary</a> &middot; ' +
      '<a href="' + (page.up || "") + 'how-to-use.html">How to use</a>';
    p.appendChild(f);
    d.appendChild(p);
    d.addEventListener("click", function (e) { if (e.target === d) d.classList.remove("open"); });
    doc.body.appendChild(d);
  }

  function go(i) {
    current = Math.max(0, Math.min(i, page.scenes.length - 1));
    var spec = page.scenes[current];
    var host = doc.getElementById("scene");
    host.innerHTML = "";
    try { root.history.replaceState(null, "", "#s" + (current + 1)); } catch (e) {}

    doc.getElementById("where").innerHTML =
      "<b>" + esc(page.n ? page.n + " " + page.title : page.title) + "</b> &nbsp;·&nbsp; " +
      (current + 1) + " of " + page.scenes.length;

    var head = E("div", "scene-head");
    if (spec.kicker) head.appendChild(E("p", "scene-kicker", spec.kicker));
    head.appendChild(E("h2", null, spec.title));
    if (spec.say) {
      var s = E("p", "scene-say");
      s.innerHTML = spec.say;
      head.appendChild(s);
    }
    host.appendChild(head);

    var stage = E("div", "stage");
    host.appendChild(stage);

    var live = E("p", "live");
    live.setAttribute("aria-live", "polite");
    host.appendChild(live);

    var foot = E("div", "scene-foot");
    /* THERE ARE NO LONGER ANY STUDY SCENES, and that is the point of this rewrite.
       This used to hide marking for any figure, and for any scene declaring
       study:true, on the reasonable-sounding grounds that a Check button which tells
       you nothing teaches a learner to stop pressing it. The reasoning was sound and
       the conclusion was backwards: the answer is not to stop marking the screen, it
       is to stop having screens with nothing to mark. Figures and printed statements
       are now exhibits inside exercises (see foldExhibits), so every screen in the
       deck has a decision on it and every screen marks.

       study:true is deliberately NOT honoured any more. Leaving it as an escape hatch
       would let the next person reintroduce exactly the thing this removed, and the
       gate would have no way to tell an unmarkable screen from an intentional one. */
    var check = E("button", "btn btn-primary btn-check", "Check Answers");
    check.type = "button";
    var again = E("button", "btn btn-ghost btn-again", "Try Again");
    again.type = "button";
    var verdict = E("span", "verdict");
    verdict.setAttribute("aria-live", "polite");
    foot.appendChild(check);
    foot.appendChild(again);
    foot.appendChild(verdict);
    host.appendChild(foot);

    var fb = E("div", "fb");
    host.appendChild(fb);

    var steps = E("nav", "steps");
    var pv = E("button", "step-btn", "\u2190 Back");
    pv.type = "button";
    pv.disabled = current === 0;
    pv.addEventListener("click", prev);
    var dots = E("div", "dots");
    page.scenes.forEach(function (sp, j) {
      var d = E("button", "dot" + (j === current ? " now" : (done[sp.id] ? " done" : "")));
      d.type = "button";
      d.title = (j + 1) + ". " + sp.title;
      d.setAttribute("aria-label", "Go to scene " + (j + 1) + ": " + sp.title);
      d.addEventListener("click", function () { go(j); });
      dots.appendChild(d);
    });
    var nx = E("button", "step-btn next", current === page.scenes.length - 1 ? "Finish \u2192" : "Next \u2192");
    nx.type = "button";
    nx.addEventListener("click", next);
    steps.appendChild(pv);
    steps.appendChild(dots);
    steps.appendChild(nx);
    host.appendChild(steps);

    api = { spec: spec, stage: stage, live: live, fb: fb, verdict: verdict,
            check: check, again: again, Drag: Drag, shuffle: shuffle, E: E, ar: ar,
            esc: esc, fbList: fbList, yoursFirst: yoursFirst, L: L, S: S };

    function render() {
      /* the shuffle stream restarts here, so this scene renders the same way every
         time under a fixed ?seed= - including after Try Again */
      resetSeed();
      stage.innerHTML = "";
      fb.className = "fb";
      fb.innerHTML = "";
      verdict.textContent = "";
      verdict.className = "verdict";
      /* The exhibit goes in first, so the author's evidence is above the task that
         uses it. It is rebuilt on Try Again along with everything else, because a
         figure left behind while the exercise under it reset was the sort of stale
         half-screen that makes a learner distrust the whole page. */
      var X = root.Exhibit || {};
      if (spec.fig && X.fig) stage.appendChild(X.fig(spec.fig));
      if (spec.lines && X.lines) stage.appendChild(X.lines(spec.lines));
      if (spec.grid && X.grid) stage.appendChild(X.grid(spec.grid));
      var r = SCENES[spec.kind];
      if (!r) { stage.appendChild(E("p", null, "Unknown scene kind: " + spec.kind)); return; }
      api.grade = r(stage, spec, api);
    }

    check.onclick = function () {
      if (!api.grade) return;
      var res = api.grade();
      var ok = res.ok !== undefined ? res.ok : res.score === res.total;
      verdict.className = "verdict " + (ok ? "ok" : "no");
      verdict.textContent = res.verdict ||
        (res.total > 1 ? res.score + " of " + res.total + " right" : (ok ? "Right" : "Not yet"));
      fb.className = "fb show " + (ok ? "ok" : "no");
      fb.innerHTML = res.html || "";
      live.textContent = verdict.textContent;
      if (spec.traps) spec.traps.forEach(function (t) { ok ? P.trapPass(t) : P.trapFail(t); });
      if (res.traps) res.traps.forEach(function (t) { P.trapFail(t); });
      if (ok) {
        done[spec.id] = true;
        P.markExercise(page.id, spec.id);
        dots.children[current].classList.add("done");
      }
    };
    again.onclick = function () {
      render();
      live.textContent = "Reset and reshuffled.";
      var f = stage.querySelector(".chip,button,input,select,textarea");
      if (f) f.focus();
    };

    render();
    root.scrollTo(0, 0);
  }

  function next() { if (current < page.scenes.length - 1) go(current + 1); else root.location.href = nextPage(); }
  function prev() { if (current > 0) go(current - 1); }
  function nextPage() {
    var i = P.pageIndex(page.id);
    return (i >= 0 && i < P.TOC.length - 1) ? P.TOC[i + 1].file : "index.html";
  }

  root.Deck = {
    register: function (kind, fn) { SCENES[kind] = fn; },
    build: build,
    util: { E: E, esc: esc, ar: ar, shuffle: shuffle, Drag: Drag, fbList: fbList, yoursFirst: yoursFirst },
    get kinds() { return Object.keys(SCENES); }
  };

  doc.addEventListener("DOMContentLoaded", function () {
    if (!root.PAGE || !root.PAGE.scenes) return;
    build();
    var ids = root.PAGE.scenes.map(function (s) { return s.id; });
    P.register(root.PAGE.id, ids);
    P.lastVisit(root.PAGE.id);
  });
})(window, document);
