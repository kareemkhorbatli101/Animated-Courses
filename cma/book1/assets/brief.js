/* brief.js — the one place in this design that is allowed to lecture.
 *
 * THE SPLIT THIS FILE EXISTS TO MAKE. Every screen of a section now asks the learner to
 * decide something; nothing is handed over to be read. That is right for practice and
 * wrong for a first encounter, because a learner meeting "callable debt" for the first
 * time needs telling, not testing. So the telling moved into a pop-up the learner opens
 * on purpose: the page forces thinking, and the Brief explains.
 *
 * WHAT IS IN IT, AND WHERE EACH PART COMES FROM.
 *   1. What this page is about  - page.brief.about: the AUTHOR'S sentences for that
 *      section. It is audited as CONTENT by assets/provenance.js, so a summary written
 *      here in anybody else's words fails the build. Nothing is summarised loosely.
 *   2. The mechanism, animated  - one drawing per page, named by page.brief.anim. It may
 *      only move what the author's own figure already shows; an animation that implies a
 *      sequence he never stated would be a claim, and the hardest kind to notice. Every
 *      one has a still first frame and stops dead under prefers-reduced-motion.
 *   3. The terms on this page   - page.terms, which is T.bridge(section): the chapter's
 *      own Term Bridge boxes. The Arabic is the author's, never generated, and each term
 *      carries an English and an Arabic speaker through assets/speech.js.
 *   4. Play the brief           - Speech.speak over the summary, in English.
 *   5. What this page asks you  - one line per exercise, naming the decision. NOT the
 *      answer: a Brief that leaked an answer would undo the whole rewrite, so it lists
 *      scene TITLES and nothing else, and the gate checks that.
 *
 * It degrades on purpose. No Arabic voice installed, no Speech at all, no animation named,
 * no brief written: each part simply does not appear, and the rest still opens.
 */
(function (root, doc) {
  "use strict";

  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function svg(tag, attrs) {
    var n = doc.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function ar(text) {
    var s = E("span", "ar");
    s.setAttribute("lang", "ar");
    s.setAttribute("dir", "rtl");
    s.textContent = text;
    return s;
  }

  /* ------------------------------------------------------------------ *
   * THE ANIMATIONS
   *
   * One per page, each showing the movement its section is about and nothing more.
   * They are plain SVG with CSS classes; the motion lives in site.css so that one
   * prefers-reduced-motion block can stop all of them at once. Each returns an <svg>
   * that reads correctly with no animation running at all, because that is what a
   * learner who has asked for reduced motion - or a printed page - will get.
   * ------------------------------------------------------------------ */
  var W = 320, H = 132;

  function frame() {
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, class: "bf-anim",
                         role: "img", "aria-hidden": "true" });
    return s;
  }
  function txt(s, x, y, str, cls) {
    var t = svg("text", { x: x, y: y, class: "bf-t " + (cls || "") });
    t.textContent = str;
    s.appendChild(t);
    return t;
  }
  function rect(s, x, y, w, h, cls) {
    var r = svg("rect", { x: x, y: y, width: w, height: h, rx: 4, class: cls || "" });
    s.appendChild(r);
    return r;
  }

  var ANIM = {};

  /* A = L + E: the beam that always levels, because both sides move together. */
  ANIM.equation = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 28, y1: 96, x2: 292, y2: 96, class: "bf-base" }));
    var g = svg("g", { class: "bf-tip" });
    g.appendChild(svg("line", { x1: 60, y1: 58, x2: 260, y2: 58, class: "bf-beam" }));
    rect(g, 70, 34, 56, 20, "bf-a");
    rect(g, 196, 34, 30, 20, "bf-l");
    rect(g, 228, 34, 30, 20, "bf-e");
    s.appendChild(g);
    s.appendChild(svg("polygon", { points: "160,58 148,96 172,96", class: "bf-piv" }));
    txt(s, 78, 48, "Assets", "bf-sm");
    txt(s, 198, 48, "Liab", "bf-sm");
    txt(s, 232, 48, "Equity", "bf-sm");
    txt(s, 160, 122, "both sides move together", "bf-mid bf-sm");
    return s;
  };

  /* A date is a dot; a period is a bar. The single most tested distinction in Chapter 1. */
  ANIM.datePeriod = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 92, x2: 296, y2: 92, class: "bf-base" }));
    rect(s, 40, 44, 200, 14, "bf-span");
    txt(s, 140, 38, "for the year  — a period", "bf-mid bf-sm");
    s.appendChild(svg("circle", { cx: 240, cy: 92, r: 7, class: "bf-dot" }));
    txt(s, 240, 118, "at a date", "bf-mid bf-sm");
    return s;
  };

  /* The T-account: one side increases it, the other reduces it. */
  ANIM.tAccount = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 60, y1: 34, x2: 260, y2: 34, class: "bf-beam" }));
    s.appendChild(svg("line", { x1: 160, y1: 34, x2: 160, y2: 116, class: "bf-beam" }));
    txt(s, 108, 28, "Debit", "bf-mid bf-sm");
    txt(s, 212, 28, "Credit", "bf-mid bf-sm");
    rect(s, 76, 46, 64, 16, "bf-a bf-in");
    rect(s, 180, 70, 64, 16, "bf-l bf-in2");
    return s;
  };

  /* The same sale falling in two different years on the two bases. */
  ANIM.accrual = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 66, x2: 296, y2: 66, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 160, y1: 30, x2: 160, y2: 104, class: "bf-cut" }));
    txt(s, 88, 24, "2025", "bf-mid bf-sm");
    txt(s, 232, 24, "2026", "bf-mid bf-sm");
    rect(s, 96, 44, 54, 15, "bf-a");
    txt(s, 123, 40, "delivered", "bf-mid bf-tiny");
    rect(s, 176, 80, 54, 15, "bf-l bf-slide");
    txt(s, 203, 110, "paid", "bf-mid bf-tiny");
    return s;
  };

  /* The five bands of a classified balance sheet, in the order the author reads them. */
  ANIM.bands = function () {
    var s = frame();
    var names = ["Current assets", "Noncurrent assets", "Current liabilities",
                 "Noncurrent liabilities", "Equity"];
    names.forEach(function (nm, i) {
      var r = rect(s, 48, 14 + i * 22, 224, 17, "bf-band bf-band" + i);
      r.setAttribute("rx", "3");
      txt(s, 160, 26 + i * 22, nm, "bf-mid bf-tiny");
    });
    return s;
  };

  /* Cash to inventory to receivables to cash: the operating cycle. */
  ANIM.cycle = function () {
    var s = frame();
    s.appendChild(svg("circle", { cx: 160, cy: 66, r: 42, class: "bf-ring" }));
    var dot = svg("circle", { cx: 160, cy: 24, r: 6, class: "bf-dot bf-orbit" });
    s.appendChild(dot);
    txt(s, 160, 16, "cash", "bf-mid bf-tiny");
    txt(s, 216, 70, "inventory", "bf-mid bf-tiny");
    txt(s, 160, 122, "receivables", "bf-mid bf-tiny");
    txt(s, 160, 70, "66 days", "bf-mid bf-sm");
    return s;
  };

  /* One obligation reaching the balance sheet as two lines. */
  ANIM.split = function () {
    var s = frame();
    rect(s, 60, 26, 200, 18, "bf-a");
    txt(s, 160, 20, "one bank debt", "bf-mid bf-sm");
    rect(s, 60, 76, 40, 18, "bf-l bf-grow");
    txt(s, 80, 110, "current", "bf-mid bf-tiny");
    rect(s, 104, 76, 156, 18, "bf-e");
    txt(s, 182, 110, "noncurrent", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 100, y1: 48, x2: 100, y2: 72, class: "bf-cut" }));
    return s;
  };

  /* The contra account landing with the asset it reduces. */
  ANIM.contra = function () {
    var s = frame();
    txt(s, 160, 22, "gross, then net of its contra", "bf-mid bf-sm");
    rect(s, 50, 36, 220, 20, "bf-a");
    /* authored at the NET width on purpose: every animation in this file animates INTO
       its authored state, so the still frame a reduced-motion reader sees is the one
       that is true - here, the net line rather than the gross one */
    rect(s, 50, 72, 132, 20, "bf-l bf-shrink");
    txt(s, 160, 116, "the line that reaches the balance sheet", "bf-mid bf-tiny");
    return s;
  };

  /* Two amounts the balance sheet takes from another statement. */
  ANIM.links = function () {
    var s = frame();
    [["Income", 18], ["Equity", 92], ["Cash flows", 166], ["Balance sheet", 240]]
      .forEach(function (c, i) {
        rect(s, c[1], 30, 66, 30, "bf-card");
        txt(s, c[1] + 33, 49, c[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 84 45 L 92 45", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 158 45 L 166 45", class: "bf-flow bf-flow2" }));
    s.appendChild(svg("path", { d: "M 232 45 L 240 45", class: "bf-flow bf-flow3" }));
    txt(s, 160, 100, "net income → retained earnings → the balance sheet",
        "bf-mid bf-tiny");
    txt(s, 160, 118, "net change in cash → the cash balance", "bf-mid bf-tiny");
    return s;
  };

  /* Probable, reasonably possible, remote: three rungs, three treatments. */
  ANIM.ladder = function () {
    var s = frame();
    [["Probable", "accrue a liability", 0], ["Reasonably possible", "disclose in a note", 1],
     ["Remote", "do nothing", 2]].forEach(function (r, i) {
      rect(s, 34, 22 + i * 34, 252, 26, "bf-band bf-rung" + i);
      txt(s, 48, 39 + i * 34, r[0], "bf-tiny");
      txt(s, 272, 39 + i * 34, r[1], "bf-end bf-tiny");
    });
    return s;
  };

  /* Who reads the statements, and the one question each of them asks. */
  ANIM.readers = function () {
    var s = frame();
    s.appendChild(svg("ellipse", { cx: 160, cy: 74, rx: 86, ry: 30, class: "bf-ring" }));
    txt(s, 160, 78, "the statements", "bf-mid bf-tiny");
    [[40, 26], [160, 18], [280, 26], [44, 118], [160, 124], [276, 118]]
      .forEach(function (p, i) {
        var c = svg("circle", { cx: p[0], cy: p[1], r: 8,
                                class: "bf-dot bf-pulse bf-pulse" + (i % 3) });
        s.appendChild(c);
      });
    txt(s, 160, 10, "seven readers, seven questions", "bf-mid bf-tiny");
    return s;
  };

  /* Historical cost does not move when the market does. */
  ANIM.cost = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 104, x2: 290, y2: 104, class: "bf-base" }));
    rect(s, 60, 72, 70, 30, "bf-a");
    txt(s, 95, 118, "carrying amount", "bf-mid bf-tiny");
    var m = rect(s, 190, 40, 70, 62, "bf-l bf-rise");
    txt(s, 225, 118, "market value", "bf-mid bf-tiny");
    txt(s, 160, 24, "one moves; the other does not", "bf-mid bf-sm");
    return s;
  };

  /* Who writes the rules, and which set the exam uses. */
  ANIM.rules = function () {
    var s = frame();
    rect(s, 34, 34, 110, 58, "bf-card bf-band0");
    txt(s, 89, 56, "FASB", "bf-mid bf-sm");
    txt(s, 89, 74, "the ASC · U.S. GAAP", "bf-mid bf-tiny");
    rect(s, 176, 34, 110, 58, "bf-card bf-band1");
    txt(s, 231, 56, "IASB", "bf-mid bf-sm");
    txt(s, 231, 74, "IFRS", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 89 104 L 89 96", class: "bf-flow" }));
    txt(s, 89, 120, "the exam uses this one", "bf-mid bf-tiny");
    txt(s, 160, 22, "two sets of rules", "bf-mid bf-sm");
    return s;
  };

  /* The order the statements must be built in. */
  ANIM.order = function () {
    var s = frame();
    ["Income statement", "Changes in equity", "Balance sheet"].forEach(function (nm, i) {
      rect(s, 60, 20 + i * 38, 200, 26, "bf-band bf-step" + i);
      txt(s, 160, 37 + i * 38, nm, "bf-mid bf-tiny");
      if (i < 2) s.appendChild(svg("path", { d: "M 160 " + (48 + i * 38) + " L 160 " +
        (56 + i * 38), class: "bf-flow bf-flow" + (i + 1) }));
    });
    return s;
  };

  /* ------------------------------------------------------------------ *
   * THE PANEL
   * ------------------------------------------------------------------ */
  function build(page) {
    var S = root.Speech;
    var b = page.brief || {};
    var dlg = E("dialog", "brief");
    dlg.setAttribute("aria-label", "Brief for " + (page.title || "this page"));

    var head = E("div", "bf-head");
    var h = E("h2", null, (page.n ? page.n + " " : "") + (page.title || ""));
    head.appendChild(h);
    var x = E("button", "bf-x", "×");
    x.type = "button";
    x.setAttribute("aria-label", "Close the brief");
    x.addEventListener("click", function () { dlg.close(); });
    head.appendChild(x);
    dlg.appendChild(head);

    var body = E("div", "bf-body");
    dlg.appendChild(body);

    /* 1 + 4. the author's summary, and a voice for it */
    if (b.about) {
      var sec = E("section", "bf-sec");
      var k = E("div", "bf-k");
      k.appendChild(E("span", null, "What this page is about"));
      if (S && S.supported) {
        var play = S.button(b.about, "en", "Read this brief aloud");
        play.className = "bf-play";
        k.appendChild(play);
      }
      sec.appendChild(k);
      /* THE AUTHOR BULLETS SOME OF HIS PARAGRAPHS, and a bullet set in running prose
         reads as a typo: "...at one date. - An asset is a present right...". The text
         is his and is not touched; it is only laid out as what it already is. Split on
         the bullet character, keep the lead-in as a paragraph and the rest as a list. */
      var parts = String(b.about).split(/\s*•\s*/);
      var lead = parts.shift();
      if (lead && lead.trim()) sec.appendChild(E("p", "bf-about", lead.trim()));
      if (parts.length) {
        var ul = E("ul", "bf-about bf-about-list");
        parts.forEach(function (x) {
          if (x && x.trim()) ul.appendChild(E("li", null, x.trim()));
        });
        sec.appendChild(ul);
      }
      body.appendChild(sec);
    }

    /* 2. the mechanism */
    if (b.anim && ANIM[b.anim]) {
      var a = E("section", "bf-sec bf-sec-anim");
      a.appendChild(E("div", "bf-k", "The mechanism"));
      a.appendChild(ANIM[b.anim]());
      if (b.animNote) a.appendChild(E("p", "bf-note", b.animNote));
      body.appendChild(a);
    }

    /* 2b. a figure that answers its whole page. scene.js routes the chapter summary
       maps here, because there is nowhere on a summary page to put the summary. */
    var figs = b.figs || [];
    if (figs.length && root.Exhibit && root.Exhibit.fig) {
      var fs = E("section", "bf-sec");
      fs.appendChild(E("div", "bf-k", figs.length > 1 ? "The author's figures"
                                                      : "The author's figure"));
      figs.forEach(function (f) { fs.appendChild(root.Exhibit.fig(f)); });
      body.appendChild(fs);
    }

    /* 3. the terms, with the author's Arabic and both voices */
    var terms = page.terms || [];
    if (terms.length) {
      var t = E("section", "bf-sec");
      t.appendChild(E("div", "bf-k", "The terms on this page"));
      var list = E("div", "bf-terms");
      terms.forEach(function (tm) {
        var row = E("div", "bf-term");
        var en = E("div", "bf-en");
        /* the term's drawn mark, bigger here than in the strip: the Brief is where a
           learner meets the word for the first time, so the picture is worth the room */
        if (root.Icons) {
          var ic = root.Icons.icon(tm.en);
          if (ic) en.appendChild(ic);
        }
        en.appendChild(E("span", "bf-en-w", tm.en));
        if (S && S.supported) {
          var b1 = S.button(tm.en, "en", "Pronounce in English");
          b1.className = "speak";
          en.appendChild(b1);
        }
        row.appendChild(en);
        if (tm.ar) {
          var arw = E("div", "bf-ar");
          arw.appendChild(ar(tm.ar));
          if (S && S.supported) {
            var b2 = S.button(tm.ar, "ar", "Pronounce in Arabic");
            b2.className = "speak";
            arw.appendChild(b2);
          }
          row.appendChild(arw);
        }
        if (tm.gloss) row.appendChild(E("p", "bf-gloss", tm.gloss));
        var fr = (root.TERMS_FR || {})[String(tm.en).toLowerCase()];
        if (fr) {
          var f = E("span", "fr", fr);
          f.setAttribute("lang", "fr");
          row.appendChild(f);
        }
        list.appendChild(row);
      });
      t.appendChild(list);
      body.appendChild(t);
    }

    /* 5. what the page asks. TITLES ONLY - never an answer. */
    var scenes = (page.scenes || []).filter(function (s) { return s && s.title; });
    if (scenes.length) {
      var w = E("section", "bf-sec");
      w.appendChild(E("div", "bf-k", "What this page asks you to do"));
      var ol = E("ol", "bf-asks");
      scenes.forEach(function (s) { ol.appendChild(E("li", null, s.title)); });
      w.appendChild(ol);
      body.appendChild(w);
    }

    doc.body.appendChild(dlg);
    return dlg;
  }

  var current = null;
  function open() {
    var page = root.PAGE;
    if (!page) return;
    if (current) { current.remove(); current = null; }
    current = build(page);
    current.addEventListener("close", function () {
      if (current) { current.remove(); current = null; }
    });
    current.showModal();
  }

  function install() {
    var page = root.PAGE;
    if (!page) return;
    var bar = doc.querySelector(".bar .wrap");
    if (!bar) return;
    var btn = E("button", "bar-brief", "Brief");
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.title = "The explanation, the terms and the mechanism for this page";
    btn.addEventListener("click", open);
    /* before Contents, so the order reads: where you are, explain it, go elsewhere */
    var menu = bar.querySelector(".bar-menu");
    if (menu) bar.insertBefore(btn, menu);
    else bar.appendChild(btn);
  }

  /* scene.js builds the bar on DOMContentLoaded and folds page.scenes while it does.
     This file is loaded after it, so this listener runs after that one and sees both
     the bar and the folded deck. */
  doc.addEventListener("DOMContentLoaded", install);

  root.Brief = { open: open, anims: Object.keys(ANIM) };
})(window, document);
