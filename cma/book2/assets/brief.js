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
   * CHAPTERS 3 TO 5
   *
   * Each of these moves one thing its section is about, and the words and amounts in
   * them are the author's own, taken from the figure named in the comment. Chapters 3
   * to 5 had NO drawings at all - brief_anim returns None for a chapter with no entry,
   * which is the right default and was never meant to be the finished state.
   *
   * They reuse the bf-* classes rather than adding new ones: a drawing that needs its
   * own stylesheet is a drawing doing too much.
   * ------------------------------------------------------------------ */

  /* F03-04: net sales shrink, subtotal by subtotal, to net income. */
  ANIM.waterfall = function () {
    var s = frame();
    [["Net sales", 236, 0], ["Gross profit", 92, 1], ["Operating income", 46, 2],
     ["Net income", 34, 3]].forEach(function (r, i) {
      rect(s, 34, 16 + i * 30, r[1], 20, "bf-band bf-band" + i);
      txt(s, 40 + r[1] + 6, 31 + i * 30, r[0], "bf-tiny");
    });
    txt(s, 160, 130, "each subtotal is smaller than the one above", "bf-mid bf-tiny");
    return s;
  };

  /* F03-05: a gain reaches the statement net, not at its full proceeds. */
  ANIM.netGain = function () {
    var s = frame();
    txt(s, 160, 22, "proceeds, then the gain alone", "bf-mid bf-sm");
    rect(s, 50, 34, 220, 20, "bf-a");
    txt(s, 160, 48, "proceeds of the sale", "bf-mid bf-tiny");
    /* authored at the NET width, like ANIM.contra: the still frame is the true one */
    rect(s, 50, 74, 34, 20, "bf-l bf-shrink");
    txt(s, 160, 116, "only the gain appears, in other income", "bf-mid bf-tiny");
    return s;
  };

  /* F03-06: what stays in continuing operations, and what goes below the line. */
  ANIM.belowLine = function () {
    var s = frame();
    rect(s, 40, 18, 240, 24, "bf-band bf-band0");
    txt(s, 160, 34, "continuing operations", "bf-mid bf-tiny");
    rect(s, 40, 46, 240, 20, "bf-band bf-band1");
    txt(s, 160, 60, "unusual item · a separate line, before tax", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 30, y1: 78, x2: 290, y2: 78, class: "bf-cut" }));
    rect(s, 40, 86, 240, 22, "bf-e bf-slide");
    txt(s, 160, 101, "discontinued operations · net of tax", "bf-mid bf-tiny");
    txt(s, 160, 126, "only one of them crosses the line", "bf-mid bf-tiny");
    return s;
  };

  /* F03-08: net income plus OCI is comprehensive income, and OCI builds AOCI. */
  ANIM.oci = function () {
    var s = frame();
    rect(s, 30, 30, 96, 26, "bf-card bf-band0");
    txt(s, 78, 47, "net income", "bf-mid bf-tiny");
    rect(s, 134, 30, 52, 26, "bf-card bf-band1");
    txt(s, 160, 47, "OCI", "bf-mid bf-tiny");
    rect(s, 194, 30, 96, 26, "bf-card bf-band2");
    txt(s, 242, 47, "comprehensive", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 186 43 L 194 43", class: "bf-flow" }));
    rect(s, 134, 84, 52, 22, "bf-e bf-grow");
    txt(s, 160, 99, "AOCI", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 160 60 L 160 80", class: "bf-flow bf-flow2" }));
    txt(s, 160, 126, "OCI builds a balance in equity", "bf-mid bf-tiny");
    return s;
  };

  /* F03-09: the same year, measured two ways. */
  ANIM.incomeVsCash = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 110, x2: 290, y2: 110, class: "bf-base" }));
    rect(s, 64, 46, 64, 62, "bf-a");
    txt(s, 96, 126, "net income", "bf-mid bf-tiny");
    var c = rect(s, 190, 28, 64, 80, "bf-l bf-rise");
    txt(s, 222, 126, "cash from operations", "bf-mid bf-tiny");
    txt(s, 160, 20, "two measures of one year", "bf-mid bf-sm");
    return s;
  };

  /* F04-02: an opening balance, the movements, a closing balance. */
  ANIM.rollforward = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 112, x2: 290, y2: 112, class: "bf-base" }));
    rect(s, 40, 70, 50, 42, "bf-a");
    txt(s, 65, 128, "opening", "bf-mid bf-tiny");
    [["issue", 100, 24], ["income", 140, 34], ["OCI", 180, 6], ["dividend", 212, 14]]
      .forEach(function (m, i) {
        rect(s, m[1], 70 - m[2], 30, m[2], "bf-band bf-band" + i);
      });
    rect(s, 252, 46, 50, 66, "bf-e bf-grow");
    txt(s, 274, 128, "closing", "bf-mid bf-tiny");
    txt(s, 160, 24, "one column, rolled forward", "bf-mid bf-sm");
    return s;
  };

  /* F04-04: shares bought back are deducted from equity, not held as an asset. */
  ANIM.treasuryBox = function () {
    var s = frame();
    rect(s, 46, 26, 228, 54, "bf-card");
    txt(s, 160, 44, "equity", "bf-mid bf-sm");
    rect(s, 196, 52, 68, 22, "bf-l bf-shrink");
    txt(s, 230, 68, "treasury", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 230 90 L 230 82", class: "bf-flow" }));
    txt(s, 160, 112, "deducted from equity, never an asset", "bf-mid bf-tiny");
    txt(s, 160, 130, "and never a gain or a loss in income", "bf-mid bf-tiny");
    return s;
  };

  /* F04-07: a stock dividend moves labels inside equity; the total does not change. */
  ANIM.dividendMove = function () {
    var s = frame();
    rect(s, 40, 24, 240, 22, "bf-band bf-band0");
    txt(s, 160, 39, "total equity: no change", "bf-mid bf-tiny");
    rect(s, 40, 62, 112, 24, "bf-a bf-shrink");
    txt(s, 96, 102, "retained earnings", "bf-mid bf-tiny");
    rect(s, 158, 62, 122, 24, "bf-e bf-grow");
    txt(s, 219, 102, "common stock + APIC", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 150 74 L 158 74", class: "bf-flow" }));
    txt(s, 160, 128, "only the labels inside equity move", "bf-mid bf-tiny");
    return s;
  };

  /* Section 4.4: an old error is corrected in the OPENING balance, not in this year. */
  ANIM.priorPeriod = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 74, x2: 296, y2: 74, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 160, y1: 30, x2: 160, y2: 112, class: "bf-cut" }));
    txt(s, 86, 24, "earlier years", "bf-mid bf-tiny");
    txt(s, 234, 24, "this year", "bf-mid bf-tiny");
    rect(s, 92, 50, 56, 18, "bf-l bf-grow");
    txt(s, 120, 100, "opening balance restated", "bf-mid bf-tiny");
    rect(s, 176, 50, 56, 18, "bf-a");
    txt(s, 204, 100, "net income untouched", "bf-mid bf-tiny");
    return s;
  };

  /* F05-03: three activities, one change in cash. */
  ANIM.threeActivities = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 96, x2: 296, y2: 96, class: "bf-base" }));
    [["operating", 40, 62], ["investing", 112, 34], ["financing", 184, 16]]
      .forEach(function (b, i) {
        rect(s, b[1], 96 - b[2], 56, b[2], "bf-band bf-band" + i);
        txt(s, b[1] + 28, 112, b[0], "bf-mid bf-tiny");
      });
    rect(s, 256, 42, 46, 54, "bf-e bf-grow");
    txt(s, 279, 112, "change in cash", "bf-mid bf-tiny");
    txt(s, 160, 24, "three activities, one number", "bf-mid bf-sm");
    return s;
  };

  /* F05-06: the same rule, twice, with a sign on it. */
  ANIM.signs = function () {
    var s = frame();
    rect(s, 108, 56, 104, 26, "bf-card");
    txt(s, 160, 73, "net income", "bf-mid bf-tiny");
    rect(s, 34, 26, 68, 22, "bf-e bf-in");
    txt(s, 68, 42, "added back", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 102 44 L 112 56", class: "bf-flow" }));
    rect(s, 218, 90, 68, 22, "bf-l bf-in2");
    txt(s, 252, 106, "taken off", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 212 82 L 220 90", class: "bf-flow bf-flow2" }));
    txt(s, 160, 130, "every adjustment is a sign", "bf-mid bf-tiny");
    return s;
  };

  /* F05-07: two presentations, one total. */
  ANIM.twoMethods = function () {
    var s = frame();
    rect(s, 30, 26, 112, 26, "bf-card bf-band0");
    txt(s, 86, 43, "indirect", "bf-mid bf-tiny");
    rect(s, 30, 70, 112, 26, "bf-card bf-band1");
    txt(s, 86, 87, "direct", "bf-mid bf-tiny");
    rect(s, 196, 46, 94, 30, "bf-e bf-grow");
    txt(s, 243, 65, "one total", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 142 39 L 196 56", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 142 83 L 196 66", class: "bf-flow bf-flow2" }));
    txt(s, 160, 124, "only the presentation differs", "bf-mid bf-tiny");
    return s;
  };

  /* F05-08: the closing line of one statement is a line on another. */
  ANIM.cashLink = function () {
    var s = frame();
    rect(s, 24, 34, 120, 44, "bf-card bf-band0");
    txt(s, 84, 52, "statement of", "bf-mid bf-tiny");
    txt(s, 84, 68, "cash flows", "bf-mid bf-tiny");
    rect(s, 180, 34, 116, 44, "bf-card bf-band2");
    txt(s, 238, 52, "balance sheet", "bf-mid bf-tiny");
    txt(s, 238, 68, "cash", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 144 56 L 180 56", class: "bf-flow" }));
    txt(s, 160, 24, "net income starts it", "bf-mid bf-tiny");
    txt(s, 160, 110, "closing cash equals the cash on the balance sheet",
        "bf-mid bf-tiny");
    return s;
  };

  /* ------------------------------------------------------------------ *
   * CHAPTERS 6 TO 18
   *
   * Eighty-one sections opened a Brief with prose, terms and no picture. These are the
   * same nineteen mechanisms as the icon families added for those chapters, drawn at
   * panel size with the author's own words on them - the mark on a term chip and the
   * drawing in the Brief show the same thing, which is the design's own idea rather
   * than two unrelated pictures of one topic.
   *
   * Reuse was preferred wherever a mechanism really matched: the chapters below take
   * tAccount, contra, ladder, waterfall, twoMethods, oci, rollforward and links from
   * what already existed. A drawing is added only where nothing shows that movement.
   * ------------------------------------------------------------------ */

  /* F06-03: older money is worth less, and the allowance is what the ladder adds to. */
  ANIM.aging = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 104, x2: 296, y2: 104, class: "bf-base" }));
    [["current", 44, 16], ["1-30", 100, 34], ["31-60", 156, 56], ["60+", 212, 78]]
      .forEach(function (b, i) {
        rect(s, b[1], 104 - b[2], 40, b[2], "bf-band bf-band" + i);
        txt(s, b[1] + 20, 120, b[0], "bf-mid bf-tiny");
      });
    rect(s, 262, 48, 34, 56, "bf-e bf-grow");
    txt(s, 279, 120, "allowance", "bf-mid bf-tiny");
    txt(s, 160, 24, "the older it is, the more is expected to go", "bf-mid bf-sm");
    return s;
  };

  /* F06-07: out to the factor as a sale, or back as a loan against the receivables. */
  ANIM.transfer = function () {
    var s = frame();
    rect(s, 26, 44, 86, 46, "bf-card");
    txt(s, 69, 72, "the company", "bf-mid bf-tiny");
    rect(s, 208, 44, 86, 46, "bf-card");
    txt(s, 251, 72, "the factor", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 112 60 L 208 60", class: "bf-flow" }));
    txt(s, 160, 52, "a sale", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 208 80 L 112 80", class: "bf-flow bf-flow2" }));
    txt(s, 160, 98, "or a secured borrowing", "bf-mid bf-tiny");
    txt(s, 160, 126, "three conditions decide which", "bf-mid bf-tiny");
    return s;
  };

  /* F07-04: the same pile of cost, split from the bottom or from the top. */
  ANIM.layers = function () {
    var s = frame();
    [0, 1, 2, 3].forEach(function (i) {
      rect(s, 60, 22 + i * 24, 200, 19, "bf-band bf-band" + i);
    });
    txt(s, 160, 16, "cost of goods available", "bf-mid bf-sm");
    txt(s, 40, 35, "LIFO", "bf-mid bf-tiny");
    txt(s, 280, 107, "FIFO", "bf-mid bf-tiny");
    txt(s, 160, 130, "which layer becomes cost of goods sold", "bf-mid bf-tiny");
    return s;
  };

  /* F07-02: whose goods are they while they are on the road. */
  ANIM.ship = function () {
    var s = frame();
    rect(s, 20, 50, 60, 44, "bf-card");
    txt(s, 50, 76, "seller", "bf-mid bf-tiny");
    rect(s, 240, 50, 60, 44, "bf-card");
    txt(s, 270, 76, "buyer", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 80, y1: 72, x2: 240, y2: 72, class: "bf-cut" }));
    rect(s, 140, 62, 40, 20, "bf-a bf-slide");
    txt(s, 160, 112, "FOB decides who counts them in transit", "bf-mid bf-tiny");
    return s;
  };

  /* F08-04: market is the middle one, never the extreme. */
  ANIM.band = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 60, y1: 32, x2: 260, y2: 32, class: "bf-beam" }));
    txt(s, 160, 24, "ceiling", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 60, y1: 112, x2: 260, y2: 112, class: "bf-beam" }));
    txt(s, 160, 128, "floor", "bf-mid bf-tiny");
    s.appendChild(svg("circle", { cx: 160, cy: 72, r: 11, class: "bf-dot bf-orbit" }));
    txt(s, 160, 60, "market", "bf-mid bf-tiny");
    return s;
  };

  /* F08-06: cost and retail, and the ratio between the two columns. */
  ANIM.retail = function () {
    var s = frame();
    rect(s, 54, 46, 70, 70, "bf-a");
    txt(s, 89, 132, "at cost", "bf-mid bf-tiny");
    rect(s, 196, 20, 70, 96, "bf-l");
    txt(s, 231, 132, "at retail", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 124 76 L 196 76", class: "bf-flow" }));
    txt(s, 160, 66, "the ratio", "bf-mid bf-tiny");
    return s;
  };

  /* F09-02: three categories, and where the change in value goes. */
  ANIM.buckets = function () {
    var s = frame();
    [["trading", 28], ["available-for-sale", 118], ["held-to-maturity", 208]]
      .forEach(function (b, i) {
        rect(s, b[1], 44, 84, 50, "bf-card bf-band" + i);
        txt(s, b[1] + 42, 72, b[0], "bf-mid bf-tiny");
      });
    txt(s, 70, 118, "net income", "bf-mid bf-tiny");
    txt(s, 160, 118, "OCI", "bf-mid bf-tiny");
    txt(s, 250, 118, "amortised cost", "bf-mid bf-tiny");
    txt(s, 160, 24, "intent and ability decide the category", "bf-mid bf-sm");
    return s;
  };

  /* F09-06, F16-01: how much of it you own decides what you do with it. */
  ANIM.influence = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 76, x2: 290, y2: 76, class: "bf-base" }));
    [["fair value", 70], ["equity method", 160], ["consolidate", 250]]
      .forEach(function (p, i) {
        s.appendChild(svg("circle", { cx: p[1], cy: 76, r: 10,
                                      class: "bf-dot bf-pulse" + i }));
        txt(s, p[1], 100, p[0], "bf-mid bf-tiny");
      });
    txt(s, 70, 54, "under 20%", "bf-mid bf-tiny");
    txt(s, 160, 54, "20 to 50%", "bf-mid bf-tiny");
    txt(s, 250, 54, "over 50%", "bf-mid bf-tiny");
    return s;
  };

  /* F10-02: the same total depreciation, charged at different times. */
  ANIM.curve = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 36, y1: 110, x2: 292, y2: 110, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 36, y1: 110, x2: 36, y2: 24, class: "bf-base" }));
    s.appendChild(svg("path", { d: "M 36 30 L 280 96", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 36 30 C 110 92, 180 96, 280 98",
                                class: "bf-flow bf-flow2" }));
    s.appendChild(svg("line", { x1: 36, y1: 96, x2: 292, y2: 96, class: "bf-cut" }));
    txt(s, 290, 112, "salvage", "bf-end bf-tiny");
    txt(s, 160, 128, "same total, different years", "bf-mid bf-tiny");
    return s;
  };

  /* F10-08: the test first, then the drop. */
  ANIM.impair = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 112, x2: 296, y2: 112, class: "bf-base" }));
    rect(s, 50, 32, 70, 80, "bf-a");
    txt(s, 85, 128, "carrying", "bf-mid bf-tiny");
    rect(s, 200, 62, 70, 50, "bf-l bf-shrink");
    txt(s, 235, 128, "fair value", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 124 48 L 196 62", class: "bf-flow" }));
    txt(s, 160, 24, "only if the cash flows do not cover it", "bf-mid bf-sm");
    return s;
  };

  /* F11-01: five steps, and revenue at the end of them. */
  ANIM.fivesteps = function () {
    var s = frame();
    for (var i = 0; i < 5; i++) {
      rect(s, 26 + i * 56, 98 - i * 16, 44, 14 + i * 16, "bf-band bf-band" + (i % 5));
      txt(s, 48 + i * 56, 124, String(i + 1), "bf-mid bf-tiny");
    }
    s.appendChild(svg("line", { x1: 20, y1: 112, x2: 300, y2: 112, class: "bf-base" }));
    txt(s, 160, 24, "revenue when control passes", "bf-mid bf-sm");
    return s;
  };

  /* F12-04: the line between current and noncurrent, and what moves across it. */
  ANIM.refinance = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 160, y1: 30, x2: 160, y2: 112, class: "bf-cut" }));
    txt(s, 86, 24, "current", "bf-mid bf-tiny");
    txt(s, 234, 24, "noncurrent", "bf-mid bf-tiny");
    rect(s, 44, 56, 84, 30, "bf-l");
    rect(s, 192, 56, 84, 30, "bf-e bf-grow");
    s.appendChild(svg("path", { d: "M 128 71 L 192 71", class: "bf-flow" }));
    txt(s, 160, 126, "intent is not enough: a qualifying agreement",
        "bf-mid bf-tiny");
    return s;
  };

  /* F13-01: two sets of books, and the gap that reverses. */
  ANIM.twobooks = function () {
    var s = frame();
    rect(s, 34, 30, 100, 82, "bf-card bf-band0");
    txt(s, 84, 74, "book income", "bf-mid bf-tiny");
    rect(s, 186, 30, 100, 82, "bf-card bf-band2");
    txt(s, 236, 74, "taxable income", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 134 56 L 186 56", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 186 90 L 134 90", class: "bf-flow bf-flow2" }));
    txt(s, 160, 128, "a temporary difference comes back", "bf-mid bf-tiny");
    return s;
  };

  /* F14-01: one contract, an asset over a liability. */
  ANIM.rou = function () {
    var s = frame();
    rect(s, 54, 26, 212, 34, "bf-a");
    txt(s, 160, 46, "right-of-use asset", "bf-mid bf-tiny");
    rect(s, 54, 78, 212, 34, "bf-l");
    txt(s, 160, 98, "lease liability", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 40, y1: 69, x2: 280, y2: 69, class: "bf-base" }));
    txt(s, 160, 128, "both start at the present value of the payments",
        "bf-mid bf-tiny");
    return s;
  };

  /* F16-07: profit made inside the group is not profit yet. */
  ANIM.group = function () {
    var s = frame();
    rect(s, 100, 20, 120, 34, "bf-card");
    txt(s, 160, 40, "parent", "bf-mid bf-tiny");
    rect(s, 100, 86, 120, 34, "bf-card");
    txt(s, 160, 106, "subsidiary", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 130 56 L 130 84", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 190 84 L 190 56", class: "bf-flow bf-flow2" }));
    s.appendChild(svg("line", { x1: 72, y1: 70, x2: 248, y2: 70, class: "bf-cut" }));
    txt(s, 160, 134, "eliminated in full, whatever the share", "bf-mid bf-tiny");
    return s;
  };

  /* F17-04: the IFRS-only step back up. */
  ANIM.revalue = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 112, x2: 296, y2: 112, class: "bf-base" }));
    rect(s, 56, 64, 72, 48, "bf-a");
    txt(s, 92, 128, "U.S. GAAP", "bf-mid bf-tiny");
    rect(s, 196, 34, 72, 78, "bf-e bf-grow");
    txt(s, 232, 128, "IFRS", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 132 60 L 192 40", class: "bf-flow" }));
    txt(s, 160, 22, "one framework can go back up", "bf-mid bf-sm");
    return s;
  };

  /* F18-04: six capitals in, outputs and outcomes out. */
  ANIM.capitals = function () {
    var s = frame();
    for (var i = 0; i < 6; i++) {
      rect(s, 24 + (i % 3) * 30, 26 + Math.floor(i / 3) * 30, 24, 22,
           "bf-band bf-band" + (i % 5));
    }
    rect(s, 134, 34, 72, 54, "bf-card");
    txt(s, 170, 64, "business model", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 116 60 L 134 60", class: "bf-flow" }));
    rect(s, 234, 34, 62, 54, "bf-e bf-grow");
    txt(s, 265, 64, "outcomes", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 206 60 L 234 60", class: "bf-flow bf-flow2" }));
    txt(s, 160, 122, "six capitals, one process", "bf-mid bf-tiny");
    return s;
  };

  /* ==================================================================
   * BOOK 2: COST MANAGEMENT. Twenty-four mechanisms.
   *
   * WHY BOOK 2 COULD NOT REUSE THE FORTY-FOUR ABOVE. Every one of them has Book 1's
   * vocabulary lettered into it - "carrying amount" and "market value", "trading /
   * available-for-sale / held-to-maturity", "LIFO" and "FIFO", "FASB" and "IASB",
   * "parent" and "subsidiary", "Net sales -> Gross profit -> Net income". Naming one of
   * them for a cost-accounting section would have put the wrong words on the screen, and
   * the registry's own rule is that a Brief with no animation shows none, which is better
   * than a generic one implying a mechanism the section does not have.
   *
   * Same frame(), same bf-* classes, same 320x132 box: no new CSS, nothing new to load,
   * and each reads correctly with no animation running, which is what a learner who has
   * asked for reduced motion gets.
   * ================================================================== */

  /* What volume does to a cost: one line flat, one through the origin, one with a base. */
  ANIM.costLine = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 40, y1: 108, x2: 300, y2: 108, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 40, y1: 108, x2: 40, y2: 20, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 40, y1: 76, x2: 300, y2: 76, class: "bf-flow" }));
    txt(s, 304, 74, "fixed", "bf-tiny");
    s.appendChild(svg("path", { d: "M 40 108 L 300 36", class: "bf-flow2" }));
    txt(s, 304, 36, "variable", "bf-tiny");
    s.appendChild(svg("path", { d: "M 40 92 L 300 24", class: "bf-flow3 bf-grow" }));
    txt(s, 304, 22, "mixed", "bf-tiny");
    s.appendChild(svg("circle", { cx: 40, cy: 92, r: 3, class: "bf-dot" }));
    txt(s, 170, 126, "total cost against activity", "bf-mid bf-tiny");
    return s;
  };

  /* A pool, the base that should cause it, and the object it lands on. */
  ANIM.poolBase = function () {
    var s = frame();
    s.appendChild(svg("path", { d: "M 24 28 H 92 L 84 76 H 32 Z", class: "bf-band1" }));
    txt(s, 58, 20, "cost pool", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 96 52 H 200", class: "bf-flow bf-slide" }));
    txt(s, 148, 44, "allocation base", "bf-mid bf-tiny");
    txt(s, 148, 68, "the base should CAUSE the cost", "bf-mid bf-tiny");
    rect(s, 206, 28, 90, 48, "bf-band3");
    txt(s, 251, 20, "cost object", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 24, y1: 100, x2: 296, y2: 100, class: "bf-base" }));
    [60, 110, 160, 210, 260].forEach(function (x) {
      s.appendChild(svg("line", { x1: x, y1: 100, x2: x, y2: 110, class: "bf-base" }));
    });
    txt(s, 170, 126, "measured driver quantity", "bf-mid bf-tiny");
    return s;
  };

  /* Materials, in process, finished, sold: the cost moves with the goods. */
  ANIM.threeBoxes = function () {
    var s = frame();
    [["raw materials", 16], ["work in process", 116], ["finished goods", 216]]
      .forEach(function (b, i) {
        rect(s, b[1], 34, 88, 42, "bf-band" + i);
        txt(s, b[1] + 44, 28, b[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 106 55 H 114", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 206 55 H 214", class: "bf-flow bf-flow2" }));
    s.appendChild(svg("path", { d: "M 260 80 V 100", class: "bf-flow3 bf-slide" }));
    txt(s, 260, 118, "cost of goods sold", "bf-mid bf-tiny");
    txt(s, 160, 100, "cost of goods manufactured", "bf-mid bf-tiny");
    return s;
  };

  /* Three bars, two brackets: the middle one belongs to both totals. */
  ANIM.primeConv = function () {
    var s = frame();
    [["direct materials", 30], ["direct labor", 126], ["overhead", 222]]
      .forEach(function (b, i) {
        rect(s, b[1], 30, 72, 46, "bf-band" + (i + 1));
        txt(s, b[1] + 36, 24, b[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 30 86 V 94 H 198 V 86", class: "bf-beam" }));
    txt(s, 114, 108, "prime cost", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 126 100 V 114 H 294 V 100", class: "bf-beam bf-pulse" }));
    txt(s, 210, 128, "conversion cost", "bf-mid bf-tiny");
    return s;
  };

  /* The rate is a fraction, and the denominator is a choice. */
  ANIM.rateFraction = function () {
    var s = frame();
    rect(s, 78, 20, 164, 32, "bf-band1");
    txt(s, 160, 40, "budgeted overhead", "bf-mid bf-sm");
    s.appendChild(svg("line", { x1: 60, y1: 64, x2: 260, y2: 64, class: "bf-beam" }));
    rect(s, 78, 76, 164, 32, "bf-band3");
    txt(s, 160, 96, "chosen capacity level", "bf-mid bf-sm");
    txt(s, 286, 68, "= rate", "bf-tiny");
    txt(s, 160, 126, "a different denominator, a different unit cost",
        "bf-mid bf-tiny");
    return s;
  };

  /* Applied is an estimate; actual is what happened. The gap has a name. */
  ANIM.appliedActual = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 104, x2: 290, y2: 104, class: "bf-base" }));
    rect(s, 72, 44, 54, 60, "bf-band1");
    txt(s, 99, 36, "applied", "bf-mid bf-tiny");
    rect(s, 186, 26, 54, 78, "bf-band3");
    txt(s, 213, 18, "actual", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 72, y1: 44, x2: 240, y2: 44, class: "bf-cut" }));
    rect(s, 186, 26, 54, 18, "bf-pulse");
    txt(s, 160, 122, "underapplied: the gap is still in the accounts",
        "bf-mid bf-tiny");
    return s;
  };

  /* One job, its three costs, and the ledger that totals every job. */
  ANIM.jobCard = function () {
    var s = frame();
    rect(s, 26, 18, 150, 96, "bf-card");
    txt(s, 101, 34, "job cost sheet", "bf-mid bf-tiny");
    [["materials requisition", 54], ["labor time ticket", 74], ["overhead applied", 94]]
      .forEach(function (r, i) {
        s.appendChild(svg("line", { x1: 40, y1: r[1], x2: 162, y2: r[1],
                                    class: "bf-flow" + (i ? i + 1 : "") }));
        txt(s, 101, r[1] - 4, r[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 182 66 H 206", class: "bf-flow bf-slide" }));
    rect(s, 212, 34, 82, 64, "bf-band2");
    txt(s, 253, 26, "Overhead Control", "bf-mid bf-tiny");
    txt(s, 253, 70, "every job", "bf-mid bf-tiny");
    txt(s, 160, 128, "open sheets ARE work in process", "bf-mid bf-tiny");
    return s;
  };

  /* Part of a unit is still a cost: two half-finished make one equivalent unit. */
  ANIM.equivUnits = function () {
    var s = frame();
    rect(s, 36, 26, 68, 76, "bf-base");
    rect(s, 36, 64, 68, 38, "bf-band1 bf-rise");
    txt(s, 70, 20, "60% complete", "bf-mid bf-tiny");
    rect(s, 128, 26, 68, 76, "bf-base");
    rect(s, 128, 72, 68, 30, "bf-band1 bf-rise");
    txt(s, 162, 20, "40% complete", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 204 64 H 226", class: "bf-flow" }));
    rect(s, 232, 26, 62, 76, "bf-band3");
    txt(s, 263, 20, "1 equivalent", "bf-mid bf-tiny");
    txt(s, 160, 122, "partly finished work, expressed as whole units",
        "bf-mid bf-tiny");
    return s;
  };

  /* The inspection point, and the three places a bad unit can go. */
  ANIM.spoilGate = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 16, y1: 48, x2: 304, y2: 48, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 160, y1: 20, x2: 160, y2: 48, class: "bf-cut" }));
    s.appendChild(svg("circle", { cx: 160, cy: 18, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 160, 12, "inspection point", "bf-mid bf-tiny");
    rect(s, 262, 32, 40, 14, "bf-band3");
    txt(s, 282, 28, "good", "bf-mid bf-tiny");
    [["normal: to the good units", 20], ["abnormal: a period loss", 112],
     ["scrap: at disposal value", 204]].forEach(function (b, i) {
      rect(s, b[1], 70, 96, 30, "bf-band" + i);
      txt(s, b[1] + 48, 112, b[0], "bf-mid bf-tiny");
    });
    return s;
  };

  /* Before the split-off point the cost is joint; after it, it belongs to one product. */
  ANIM.splitPoint = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 16, y1: 66, x2: 140, y2: 66, class: "bf-beam" }));
    txt(s, 76, 58, "joint cost", "bf-mid bf-tiny");
    s.appendChild(svg("circle", { cx: 148, cy: 66, r: 6, class: "bf-dot bf-pulse" }));
    txt(s, 148, 50, "split-off point", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 156 60 L 254 34", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 156 72 L 254 98", class: "bf-flow2" }));
    rect(s, 258, 22, 44, 24, "bf-band1");
    txt(s, 280, 16, "joint product", "bf-mid bf-tiny");
    rect(s, 258, 86, 44, 24, "bf-band4");
    txt(s, 280, 122, "by-product", "bf-mid bf-tiny");
    txt(s, 205, 84, "separable", "bf-mid bf-tiny");
    return s;
  };

  /* A cost sits at the level that drives it, not at the unit by default. */
  ANIM.abcLevels = function () {
    var s = frame();
    [["unit", 26, 40], ["batch", 50, 80], ["product-sustaining", 74, 130],
     ["facility-sustaining", 98, 180]].forEach(function (b, i) {
      rect(s, 160 - b[2] / 2, b[1], b[2], 20, "bf-band" + i);
      txt(s, 160, b[1] + 14, b[0], "bf-mid bf-tiny");
    });
    txt(s, 160, 128, "one rate for everything flattens this", "bf-mid bf-tiny");
    return s;
  };

  /* Service departments serve production - and sometimes each other. */
  ANIM.svcArrows = function () {
    var s = frame();
    rect(s, 20, 20, 84, 32, "bf-band0");
    txt(s, 62, 40, "maintenance", "bf-mid bf-tiny");
    rect(s, 20, 72, 84, 32, "bf-band0");
    txt(s, 62, 92, "canteen", "bf-mid bf-tiny");
    rect(s, 216, 20, 84, 32, "bf-band3");
    txt(s, 258, 40, "blending", "bf-mid bf-tiny");
    rect(s, 216, 72, 84, 32, "bf-band3");
    txt(s, 258, 92, "bottling", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 110 34 H 210", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 110 88 H 210", class: "bf-flow2" }));
    s.appendChild(svg("path", { d: "M 62 58 V 66", class: "bf-flow3 bf-pulse" }));
    txt(s, 160, 126, "step-down allows one direction; reciprocal both",
        "bf-mid bf-tiny");
    return s;
  };

  /* Which capacity goes in the denominator decides the unit cost. */
  ANIM.capacityJar = function () {
    var s = frame();
    s.appendChild(svg("path", { d: "M 110 18 V 104 H 210 V 18", class: "bf-base" }));
    rect(s, 110, 60, 100, 44, "bf-band1 bf-rise");
    [["theoretical", 24], ["practical", 42], ["master budget", 72]]
      .forEach(function (m, i) {
        s.appendChild(svg("line", { x1: 86, y1: m[1], x2: 110, y2: m[1],
                                    class: i === 1 ? "bf-beam" : "bf-base" }));
        txt(s, 78, m[1] + 4, m[0], "bf-tiny bf-end");
      });
    txt(s, 236, 46, "unused", "bf-tiny");
    txt(s, 236, 60, "capacity", "bf-tiny");
    txt(s, 160, 126, "a smaller denominator makes every unit look dearer",
        "bf-mid bf-tiny");
    return s;
  };

  /* Two points, or all of them. */
  ANIM.scatterLine = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 40, y1: 104, x2: 300, y2: 104, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 40, y1: 104, x2: 40, y2: 18, class: "bf-base" }));
    [[70, 88], [100, 76], [130, 70], [160, 56], [196, 48], [250, 30]]
      .forEach(function (p, i) {
        s.appendChild(svg("circle", { cx: p[0], cy: p[1], r: 3.5,
                                      class: (i === 0 || i === 5) ? "bf-dot bf-pulse" : "bf-dot" }));
      });
    s.appendChild(svg("path", { d: "M 70 88 L 250 30", class: "bf-cut" }));
    txt(s, 286, 26, "high-low", "bf-tiny");
    s.appendChild(svg("path", { d: "M 40 96 L 300 26", class: "bf-flow bf-grow" }));
    txt(s, 286, 100, "regression", "bf-tiny");
    s.appendChild(svg("circle", { cx: 40, cy: 96, r: 4, class: "bf-dot" }));
    txt(s, 160, 126, "the intercept is the estimated fixed cost", "bf-mid bf-tiny");
    return s;
  };

  /* Each doubling of output takes the same proportion off the average. */
  ANIM.learnCurve = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 40, y1: 104, x2: 300, y2: 104, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 40, y1: 104, x2: 40, y2: 18, class: "bf-base" }));
    s.appendChild(svg("path", { d: "M 40 24 Q 120 92, 300 98", class: "bf-flow bf-grow" }));
    [[60, 36], [100, 62], [180, 86]].forEach(function (p) {
      s.appendChild(svg("line", { x1: p[0], y1: 104, x2: p[0], y2: p[1], class: "bf-cut" }));
      s.appendChild(svg("circle", { cx: p[0], cy: p[1], r: 3.5, class: "bf-dot" }));
    });
    txt(s, 60, 118, "1", "bf-mid bf-tiny");
    txt(s, 100, 118, "2", "bf-mid bf-tiny");
    txt(s, 180, 118, "4", "bf-mid bf-tiny");
    txt(s, 170, 132, "cumulative output doubles", "bf-mid bf-tiny");
    txt(s, 256, 30, "average time per unit", "bf-tiny bf-end");
    return s;
  };

  /* The same fixed overhead, on one side of the line or the other. */
  ANIM.absVar = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 160, y1: 16, x2: 160, y2: 116, class: "bf-cut" }));
    txt(s, 80, 16, "absorption", "bf-mid bf-tiny");
    rect(s, 40, 58, 80, 46, "bf-base");
    rect(s, 40, 26, 80, 30, "bf-band1");
    txt(s, 80, 46, "fixed OH", "bf-mid bf-tiny");
    txt(s, 80, 118, "in inventory", "bf-mid bf-tiny");
    txt(s, 240, 16, "variable", "bf-mid bf-tiny");
    rect(s, 200, 58, 80, 46, "bf-base");
    rect(s, 200, 26, 80, 20, "bf-band3 bf-pulse");
    txt(s, 240, 42, "fixed OH", "bf-mid bf-tiny");
    txt(s, 240, 118, "expensed now", "bf-mid bf-tiny");
    return s;
  };

  /* A price and a quantity, agreed before the work is done. */
  ANIM.stdCard = function () {
    var s = frame();
    rect(s, 44, 18, 232, 84, "bf-card");
    s.appendChild(svg("line", { x1: 160, y1: 18, x2: 160, y2: 102, class: "bf-base" }));
    rect(s, 64, 36, 76, 24, "bf-band1");
    txt(s, 102, 30, "price standard", "bf-mid bf-tiny");
    rect(s, 180, 36, 76, 24, "bf-band3");
    txt(s, 218, 30, "quantity standard", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 64, y1: 80, x2: 256, y2: 80, class: "bf-beam" }));
    txt(s, 160, 94, "standard cost of one unit", "bf-mid bf-tiny");
    txt(s, 160, 124, "attainable allows for normal loss; ideal does not",
        "bf-mid bf-tiny");
    return s;
  };

  /* Two costs are spent to prevent; two are paid because you did not. */
  ANIM.qualityFour = function () {
    var s = frame();
    [["prevention", 18], ["appraisal", 40]].forEach(function (b, i) {
      rect(s, 50, b[1], 220, 18, "bf-band" + i);
      txt(s, 160, b[1] + 13, b[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("line", { x1: 30, y1: 66, x2: 290, y2: 66, class: "bf-cut" }));
    txt(s, 160, 62, "the unit leaves", "bf-mid bf-tiny");
    [["internal failure", 72], ["external failure", 94]].forEach(function (b, i) {
      rect(s, 50, b[1], 220, 18, "bf-band" + (i + 3));
      txt(s, 160, b[1] + 13, b[0], "bf-mid bf-tiny");
    });
    txt(s, 160, 128, "spend above the line and more falls below it",
        "bf-mid bf-tiny");
    return s;
  };

  /* Who asks for the next unit: the step after, or the step before. */
  ANIM.pullPush = function () {
    var s = frame();
    rect(s, 30, 52, 76, 40, "bf-band1");
    txt(s, 68, 76, "blending", "bf-mid bf-tiny");
    rect(s, 214, 52, 76, 40, "bf-band3");
    txt(s, 252, 76, "bottling", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 208 64 H 112", class: "bf-flow bf-slide" }));
    txt(s, 160, 56, "pull: the signal travels back", "bf-mid bf-tiny");
    rect(s, 138, 20, 44, 20, "bf-card bf-pulse");
    txt(s, 160, 34, "kanban", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 112 84 H 208", class: "bf-flow3" }));
    txt(s, 160, 104, "push: made to a schedule instead", "bf-mid bf-tiny");
    return s;
  };

  /* Improve a step, then hold the new level. */
  ANIM.kaizenStair = function () {
    var s = frame();
    s.appendChild(svg("path", { d: "M 24 104 H 84 V 84 H 144 V 64 H 204 V 44 H 264 V 26",
                                class: "bf-flow bf-grow" }));
    txt(s, 150, 122, "many small steps, held each time", "bf-mid bf-tiny");
    s.appendChild(svg("circle", { cx: 262, cy: 60, r: 22, class: "bf-ring" }));
    s.appendChild(svg("path", { d: "M 262 38 A 22 22 0 0 1 284 60",
                                class: "bf-flow2 bf-orbit" }));
    txt(s, 262, 64, "PDCA", "bf-mid bf-tiny");
    return s;
  };

  /* The decision is early; the money is spent late. */
  ANIM.valueChain = function () {
    var s = frame();
    [["research", 16], ["design", 74], ["make", 132], ["market", 190], ["service", 248]]
      .forEach(function (b, i) {
        rect(s, b[1], 50, 54, 34, "bf-band" + (i % 5));
        txt(s, b[1] + 27, 70, b[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 101 30 V 46", class: "bf-flow bf-pulse" }));
    txt(s, 101, 24, "cost locked in here", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 159 100 V 88", class: "bf-flow3" }));
    txt(s, 170, 114, "and incurred here", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 16, y1: 96, x2: 70, y2: 96, class: "bf-beam" }));
    txt(s, 43, 110, "upstream", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 190, y1: 40, x2: 302, y2: 40, class: "bf-beam" }));
    txt(s, 246, 34, "downstream", "bf-mid bf-tiny");
    return s;
  };

  /* Map the steps, then ask which of them a customer would pay for. */
  ANIM.processMap = function () {
    var s = frame();
    rect(s, 20, 50, 62, 34, "bf-band1");
    txt(s, 51, 70, "receive", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 86 67 H 104", class: "bf-flow" }));
    s.appendChild(svg("polygon", { points: "136,44 168,67 136,90 104,67", class: "bf-band2" }));
    txt(s, 136, 70, "check?", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 172 67 H 190", class: "bf-flow2" }));
    rect(s, 194, 50, 62, 34, "bf-band4");
    txt(s, 225, 70, "re-type", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 198, y1: 54, x2: 252, y2: 80, class: "bf-cut" }));
    txt(s, 225, 100, "non-value-added", "bf-mid bf-tiny");
    txt(s, 51, 100, "value-added", "bf-mid bf-tiny");
    txt(s, 160, 126, "remove the step; do not do it faster", "bf-mid bf-tiny");
    return s;
  };

  /* One plan, read by every link in the chain. */
  ANIM.supplyPlan = function () {
    var s = frame();
    rect(s, 108, 16, 104, 30, "bf-band1");
    txt(s, 160, 36, "one plan", "bf-mid bf-tiny");
    [["supplier", 30], ["plant", 110], ["depot", 190], ["customer", 262]]
      .forEach(function (b, i) {
        s.appendChild(svg("circle", { cx: b[1] + 14, cy: 86, r: 13,
                                      class: "bf-band" + (i % 5) }));
        txt(s, b[1] + 14, 114, b[0], "bf-mid bf-tiny");
        if (i) {
          s.appendChild(svg("line", { x1: b[1] - 52, y1: 86, x2: b[1] + 1, y2: 86,
                                      class: "bf-flow" + (i > 1 ? i : "") }));
        }
        s.appendChild(svg("line", { x1: b[1] + 14, y1: 73, x2: 160, y2: 50,
                                    class: "bf-cut" }));
      });
    return s;
  };

  /* Cumulative profit, customer by customer: it rises, then it falls. */
  ANIM.whaleCurve = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 106, x2: 300, y2: 106, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 30, y1: 106, x2: 30, y2: 18, class: "bf-base" }));
    s.appendChild(svg("path", { d: "M 30 98 Q 120 14, 196 24 Q 260 32, 300 68",
                                class: "bf-flow bf-grow" }));
    s.appendChild(svg("circle", { cx: 192, cy: 23, r: 4, class: "bf-dot bf-pulse" }));
    txt(s, 192, 16, "total profit", "bf-mid bf-tiny");
    txt(s, 268, 86, "the tail costs", "bf-mid bf-tiny");
    txt(s, 160, 126, "a few customers earn more than all of it", "bf-mid bf-tiny");
    return s;
  };

  /* ================================================================== *
   * BOOK 3 - Strategy and Budgeting.
   *
   * Thirty-one drawings of its own. NONE of Book 1's or Book 2's is reused and none
   * could be: every one of them has its own volume's words lettered into it - "LIFO",
   * "equivalent units", "split-off point" - and gates/cma_brief B3 fails a page that
   * names another volume's drawing for exactly that reason. The shapes below are this
   * volume's: a ladder from mission to budget, two bars with the slack between them,
   * a transfer price between a floor and a ceiling, four perspectives on a wheel.
   * ================================================================== */

  /* The plan is a ladder, and the budget is its bottom rung - not its first. */
  ANIM.planLadder = function () {
    var s = frame();
    [["mission and vision", 0], ["long-term goals", 1], ["objectives", 2],
     ["tactics", 3], ["the budget", 4]].forEach(function (r, i) {
      rect(s, 30 + i * 54, 92 - i * 16, 50, 16, "bf-band" + (i % 4));
      txt(s, 55 + i * 54, 104 - i * 16, r[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("line", { x1: 24, y1: 110, x2: 300, y2: 110, class: "bf-base" }));
    txt(s, 160, 126, "every rung takes its goal from the one above", "bf-mid bf-tiny");
    return s;
  };

  /* Three to five years, and a year falls off the front each time it is reviewed. */
  ANIM.planHorizon = function () {
    var s = frame();
    for (var i = 0; i < 5; i++) {
      rect(s, 34 + i * 52, 44, 46, 26, i === 0 ? "bf-band3 bf-shrink" : "bf-band1");
      txt(s, 57 + i * 52, 62, "yr " + (i + 1), "bf-mid bf-tiny");
    }
    s.appendChild(svg("path", { d: "M 294 84 H 46", class: "bf-flow bf-slide" }));
    txt(s, 160, 100, "reviewed each year and rolled forward one", "bf-mid bf-tiny");
    txt(s, 160, 126, "so the view ahead is always the same length", "bf-mid bf-tiny");
    return s;
  };

  /* Outside and inside, in one square. */
  ANIM.swotGrid = function () {
    var s = frame();
    [["Strengths", 0, 0], ["Weaknesses", 1, 0], ["Opportunities", 0, 1],
     ["Threats", 1, 1]].forEach(function (c, i) {
      rect(s, 60 + c[1] * 102, 24 + c[2] * 46, 98, 42, "bf-band" + i);
      txt(s, 109 + c[1] * 102, 48 + c[2] * 46, c[0], "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "inside on the top row, outside on the bottom", "bf-mid bf-tiny");
    return s;
  };

  /* Five pressures on one industry. */
  ANIM.fiveForces = function () {
    var s = frame();
    rect(s, 126, 50, 68, 30, "bf-band3");
    txt(s, 160, 69, "rivalry", "bf-mid bf-tiny");
    [[160, 20, "M 160 30 V 48"], [36, 65, "M 70 65 H 124"], [284, 65, "M 250 65 H 196"],
     [160, 112, "M 160 100 V 82"]].forEach(function (p, i) {
      s.appendChild(svg("path", { d: p[2], class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      txt(s, p[0], p[1], ["new entrants", "buyers", "suppliers",
                          "substitutes"][i], "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "five forces set what the industry can earn", "bf-mid bf-tiny");
    return s;
  };

  /* Growth up the side, relative share along the bottom. */
  ANIM.bcgMatrix = function () {
    var s = frame();
    [["star", 0, 0], ["question", 1, 0], ["cash cow", 0, 1], ["dog", 1, 1]]
      .forEach(function (c, i) {
        rect(s, 72 + c[1] * 90, 20 + c[2] * 44, 86, 40, "bf-band" + i);
        txt(s, 115 + c[1] * 90, 43 + c[2] * 44, c[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("line", { x1: 64, y1: 108, x2: 252, y2: 108, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 64, y1: 108, x2: 64, y2: 16, class: "bf-base" }));
    txt(s, 160, 126, "market growth up, relative share across", "bf-mid bf-tiny");
    return s;
  };

  /* Three ways to win, and only three. */
  ANIM.genericStrat = function () {
    var s = frame();
    [["cost leadership", "the lowest cost"], ["differentiation", "something others lack"],
     ["focus", "one narrow segment"]].forEach(function (b, i) {
      rect(s, 18 + i * 98, 36, 90, 40, "bf-band" + i);
      txt(s, 63 + i * 98, 54, b[0], "bf-mid bf-tiny");
      txt(s, 63 + i * 98, 68, b[1], "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "a business that chooses none of them is stuck", "bf-mid bf-tiny");
    return s;
  };

  /* The gap between the easy figure and the figure the evidence supports. */
  ANIM.slackGap = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 20, y1: 100, x2: 300, y2: 100, class: "bf-base" }));
    rect(s, 54, 58, 70, 42, "bf-band1");
    txt(s, 89, 50, "the proposal", "bf-mid bf-tiny");
    rect(s, 196, 30, 70, 70, "bf-band3 bf-rise");
    txt(s, 231, 22, "the evidence", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 134, y1: 58, x2: 186, y2: 30, class: "bf-cut" }));
    txt(s, 160, 80, "slack", "bf-mid bf-tiny");
    txt(s, 160, 126, "measured from the evidence, not from the manager", "bf-mid bf-tiny");
    return s;
  };

  /* Imposed from above, built from below, agreed in the middle. */
  ANIM.topDownUp = function () {
    var s = frame();
    rect(s, 112, 16, 96, 22, "bf-band0");
    txt(s, 160, 31, "top management", "bf-mid bf-tiny");
    rect(s, 112, 92, 96, 22, "bf-band2");
    txt(s, 160, 107, "the managers", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 140 40 V 62", class: "bf-flow bf-pulse1" }));
    s.appendChild(svg("path", { d: "M 180 90 V 68", class: "bf-flow bf-pulse2" }));
    rect(s, 122, 60, 76, 10, "bf-band3");
    txt(s, 160, 126, "participation with review, not one or the other",
        "bf-mid bf-tiny");
    return s;
  };

  /* Two halves of the master budget, each ending in its own statement. */
  ANIM.masterMap = function () {
    var s = frame();
    rect(s, 16, 20, 84, 20, "bf-band3");
    txt(s, 58, 34, "sales", "bf-mid bf-tiny");
    rect(s, 16, 48, 84, 20, "bf-band1");
    txt(s, 58, 62, "operating", "bf-mid bf-tiny");
    rect(s, 16, 76, 84, 20, "bf-band2");
    txt(s, 58, 90, "financial", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 104 58 H 150", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 104 86 H 150", class: "bf-flow2" }));
    rect(s, 156, 44, 120, 24, "bf-band0");
    txt(s, 216, 60, "budgeted income statement", "bf-mid bf-tiny");
    rect(s, 156, 74, 120, 24, "bf-band0");
    txt(s, 216, 90, "budgeted balance sheet", "bf-mid bf-tiny");
    txt(s, 160, 126, "it starts with sales, because everything does",
        "bf-mid bf-tiny");
    return s;
  };

  /* One project, its whole life, and the part kept back for surprises. */
  ANIM.projectLife = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 20, y1: 86, x2: 300, y2: 86, class: "bf-base" }));
    ["design", "build", "install", "run in"].forEach(function (p, i) {
      rect(s, 24 + i * 58, 48, 54, 38, "bf-band" + i);
      txt(s, 51 + i * 58, 70, p, "bf-mid bf-tiny");
    });
    rect(s, 256, 48, 46, 38, "bf-band3 bf-pulse");
    txt(s, 279, 70, "contingency", "bf-mid bf-tiny");
    txt(s, 160, 126, "every cost of one project, over its life", "bf-mid bf-tiny");
    return s;
  };

  /* Demand for an activity, times the rate that activity costs. */
  ANIM.activityRate = function () {
    var s = frame();
    rect(s, 22, 48, 82, 36, "bf-band1");
    txt(s, 63, 70, "activity demand", "bf-mid bf-tiny");
    txt(s, 118, 70, "×", "bf-mid");
    rect(s, 132, 48, 68, 36, "bf-band2");
    txt(s, 166, 70, "activity rate", "bf-mid bf-tiny");
    txt(s, 212, 70, "=", "bf-mid");
    rect(s, 226, 48, 76, 36, "bf-band3 bf-grow");
    txt(s, 264, 70, "budgeted cost", "bf-mid bf-tiny");
    txt(s, 160, 126, "facility costs are budgeted on their own",
        "bf-mid bf-tiny");
    return s;
  };

  /* Packages ranked, and a line drawn where the money runs out. */
  ANIM.zeroBase = function () {
    var s = frame();
    for (var i = 0; i < 5; i++) {
      rect(s, 44, 22 + i * 18, 150 - i * 22, 14, i < 3 ? "bf-band1" : "bf-band0");
      txt(s, 212, 33 + i * 18, "package " + (i + 1), "bf-mid bf-tiny");
    }
    s.appendChild(svg("line", { x1: 28, y1: 76, x2: 292, y2: 76, class: "bf-cut bf-pulse" }));
    txt(s, 160, 126, "ranked from zero; funded down to the line", "bf-mid bf-tiny");
    return s;
  };

  /* A period drops off the front and a new one joins the back. */
  ANIM.rollFwd = function () {
    var s = frame();
    rect(s, 20, 46, 48, 34, "bf-band0 bf-shrink");
    txt(s, 44, 66, "done", "bf-mid bf-tiny");
    for (var i = 1; i < 4; i++) {
      rect(s, 20 + i * 58, 46, 48, 34, "bf-band1");
      txt(s, 44 + i * 58, 66, "Q" + (i + 1), "bf-mid bf-tiny");
    }
    rect(s, 252, 46, 48, 34, "bf-band3 bf-grow");
    txt(s, 276, 66, "new", "bf-mid bf-tiny");
    txt(s, 160, 126, "always the same number of periods ahead",
        "bf-mid bf-tiny");
    return s;
  };

  /* The budget bends to the volume actually achieved. */
  ANIM.flexLine = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 104, x2: 300, y2: 104, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 30, y1: 104, x2: 30, y2: 18, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 30, y1: 78, x2: 300, y2: 78, class: "bf-band0" }));
    txt(s, 262, 72, "fixed", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 30 78 L 300 26", class: "bf-flow bf-grow" }));
    txt(s, 250, 34, "total cost", "bf-mid bf-tiny");
    txt(s, 160, 126, "a cost formula budgets any level of activity",
        "bf-mid bf-tiny");
    return s;
  };

  /* One schedule that every other schedule waits for. */
  ANIM.salesFirst = function () {
    var s = frame();
    rect(s, 18, 50, 76, 32, "bf-band3 bf-pulse");
    txt(s, 56, 70, "sales budget", "bf-mid bf-tiny");
    ["production", "materials", "labor", "overhead"].forEach(function (p, i) {
      s.appendChild(svg("path", { d: "M 98 66 L 180 " + (26 + i * 26), class: "bf-flow" }));
      rect(s, 186, 16 + i * 26, 110, 20, "bf-band" + i);
      txt(s, 241, 30 + i * 26, p, "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "almost every other budget depends on it", "bf-mid bf-tiny");
    return s;
  };

  /* Need, plus what must be left, less what is already there. */
  ANIM.bridgeBar = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 16, y1: 96, x2: 304, y2: 96, class: "bf-base" }));
    [["need", 60, "bf-band1"], ["+ ending", 34, "bf-band2"],
     ["− beginning", 24, "bf-band0"], ["= budget", 70, "bf-band3 bf-rise"]]
      .forEach(function (b, i) {
        rect(s, 24 + i * 72, 96 - b[1], 62, b[1], b[2]);
        txt(s, 55 + i * 72, 112, b[0], "bf-mid bf-tiny");
      });
    txt(s, 160, 126, "the same bridge for production and for purchases",
        "bf-mid bf-tiny");
    return s;
  };

  /* One schedule opening into the three input budgets. */
  ANIM.inputsFan = function () {
    var s = frame();
    rect(s, 16, 48, 84, 34, "bf-band3");
    txt(s, 58, 69, "production", "bf-mid bf-tiny");
    ["direct materials", "direct labor", "overhead"].forEach(function (p, i) {
      s.appendChild(svg("path", { d: "M 104 65 L 176 " + (28 + i * 34), class: "bf-flow" }));
      rect(s, 182, 16 + i * 34, 116, 24, "bf-band" + i);
      txt(s, 240, 32 + i * 34, p, "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "all three start from the units to be made",
        "bf-mid bf-tiny");
    return s;
  };

  /* Money in, money out, and a floor the balance may not go below. */
  ANIM.cashLoop = function () {
    var s = frame();
    rect(s, 118, 40, 84, 44, "bf-band3");
    txt(s, 160, 66, "cash", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 24 62 H 112", class: "bf-flow bf-pulse1" }));
    txt(s, 66, 54, "collections", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 208 62 H 296", class: "bf-flow2 bf-pulse2" }));
    txt(s, 252, 54, "disbursements", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 100, y1: 98, x2: 220, y2: 98, class: "bf-cut" }));
    txt(s, 160, 112, "minimum balance", "bf-mid bf-tiny");
    txt(s, 160, 126, "borrowing keeps the balance above the floor",
        "bf-mid bf-tiny");
    return s;
  };

  /* One capital decision, reaching three statements by three different routes. */
  ANIM.capexPaths = function () {
    var s = frame();
    rect(s, 16, 50, 86, 32, "bf-band3");
    txt(s, 59, 70, "the purchase", "bf-mid bf-tiny");
    [["cash budget, when paid", 0], ["income statement, as depreciation", 1],
     ["balance sheet, as an asset", 2]].forEach(function (p, i) {
      s.appendChild(svg("path", { d: "M 106 66 L 150 " + (28 + i * 34), class: "bf-flow" }));
      rect(s, 156, 16 + i * 34, 148, 24, "bf-band" + i);
      txt(s, 230, 32 + i * 34, p[0], "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "one decision, three places it shows up", "bf-mid bf-tiny");
    return s;
  };

  /* Three statements that have to agree with each other. */
  ANIM.proForma3 = function () {
    var s = frame();
    ["income statement", "balance sheet", "cash flows"].forEach(function (p, i) {
      rect(s, 18 + i * 100, 32, 92, 44, "bf-band" + i);
      txt(s, 64 + i * 100, 58, p, "bf-mid bf-tiny");
    });
    s.appendChild(svg("path", { d: "M 110 54 H 118", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 210 54 H 218", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 64 84 Q 160 106, 264 84", class: "bf-flow bf-pulse" }));
    txt(s, 160, 126, "each is built from the schedules, and they tie",
        "bf-mid bf-tiny");
    return s;
  };

  /* The master-budget variance opens into two, and only one is about volume. */
  ANIM.varSplit = function () {
    var s = frame();
    rect(s, 112, 16, 96, 22, "bf-band3");
    txt(s, 160, 31, "master-budget variance", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 140 40 L 86 62", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 180 40 L 234 62", class: "bf-flow" }));
    rect(s, 22, 64, 128, 26, "bf-band1");
    txt(s, 86, 81, "sales-volume", "bf-mid bf-tiny");
    rect(s, 170, 64, 128, 26, "bf-band2");
    txt(s, 234, 81, "flexible-budget", "bf-mid bf-tiny");
    txt(s, 86, 104, "units, at budgeted margin", "bf-mid bf-tiny");
    txt(s, 234, 104, "prices and costs, at actual volume", "bf-mid bf-tiny");
    txt(s, 160, 126, "split it, or volume hides everything else",
        "bf-mid bf-tiny");
    return s;
  };

  /* Every input variance is the gap between three columns. */
  ANIM.threeCols = function () {
    var s = frame();
    [["actual qty", "actual price", 0], ["actual qty", "std price", 1],
     ["std qty allowed", "std price", 2]].forEach(function (c, i) {
      rect(s, 20 + i * 98, 32, 86, 48, "bf-band" + i);
      txt(s, 63 + i * 98, 52, c[0], "bf-mid bf-tiny");
      txt(s, 63 + i * 98, 68, c[1], "bf-mid bf-tiny");
    });
    s.appendChild(svg("line", { x1: 63, y1: 90, x2: 161, y2: 90, class: "bf-cut" }));
    txt(s, 112, 102, "price", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 161, y1: 90, x2: 259, y2: 90, class: "bf-cut" }));
    txt(s, 210, 102, "efficiency", "bf-mid bf-tiny");
    txt(s, 160, 126, "the middle column is what makes two variances",
        "bf-mid bf-tiny");
    return s;
  };

  /* When inputs can be swapped, the usage variance has two halves. */
  ANIM.mixYield = function () {
    var s = frame();
    rect(s, 112, 16, 96, 22, "bf-band3");
    txt(s, 160, 31, "usage variance", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 140 40 L 86 60", class: "bf-flow" }));
    s.appendChild(svg("path", { d: "M 180 40 L 234 60", class: "bf-flow" }));
    rect(s, 26, 62, 120, 26, "bf-band1");
    txt(s, 86, 79, "mix", "bf-mid bf-tiny");
    rect(s, 174, 62, 120, 26, "bf-band2");
    txt(s, 234, 79, "yield", "bf-mid bf-tiny");
    txt(s, 86, 102, "on the actual total input", "bf-mid bf-tiny");
    txt(s, 234, 102, "at the average standard price", "bf-mid bf-tiny");
    txt(s, 160, 126, "the same split works on the sales side",
        "bf-mid bf-tiny");
    return s;
  };

  /* Four overhead variances, and one of them is not about control. */
  ANIM.ohFour = function () {
    var s = frame();
    [["variable spending", 0], ["variable efficiency", 1],
     ["fixed spending", 2], ["production-volume", 3]].forEach(function (b, i) {
      rect(s, 18 + i * 74, 34, 66, 44, "bf-band" + i);
      txt(s, 51 + i * 74, 52, b[0].split(" ")[0], "bf-mid bf-tiny");
      txt(s, 51 + i * 74, 66, b[0].split(" ")[1], "bf-mid bf-tiny");
    });
    s.appendChild(svg("line", { x1: 240, y1: 84, x2: 306, y2: 84, class: "bf-cut bf-pulse" }));
    txt(s, 273, 98, "absorption, not control", "bf-mid bf-tiny");
    txt(s, 160, 126, "group them in four, three or two - same total",
        "bf-mid bf-tiny");
    return s;
  };

  /* What the manager controls decides which centre it is. */
  ANIM.respCenters = function () {
    var s = frame();
    [["cost", "costs"], ["revenue", "revenues"], ["profit", "both"],
     ["investment", "and the assets"]].forEach(function (c, i) {
      rect(s, 16 + i * 76, 86 - i * 16, 68, 16 + i * 16, "bf-band" + i);
      txt(s, 50 + i * 76, 100 - i * 16 + (i ? 8 : 0), c[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("line", { x1: 12, y1: 104, x2: 308, y2: 104, class: "bf-base" }));
    txt(s, 160, 126, "the centre is chosen to match the authority",
        "bf-mid bf-tiny");
    return s;
  };

  /* Three margins, and the manager is judged on the middle one. */
  ANIM.marginStack = function () {
    var s = frame();
    [["contribution margin", 240], ["controllable margin", 180],
     ["segment margin", 120]].forEach(function (b, i) {
      rect(s, 40, 26 + i * 26, b[1], 20, "bf-band" + i);
      txt(s, 40 + b[1] / 2, 40 + i * 26, b[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("line", { x1: 36, y1: 104, x2: 290, y2: 104, class: "bf-base" }));
    txt(s, 160, 126, "the manager on the middle, the segment on the last",
        "bf-mid bf-tiny");
    return s;
  };

  /* The price has a floor and a ceiling, and the room between them is the argument. */
  ANIM.transferBand = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 20, y1: 90, x2: 300, y2: 90, class: "bf-cut" }));
    txt(s, 160, 104, "floor: variable cost + opportunity cost", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 20, y1: 34, x2: 300, y2: 34, class: "bf-cut" }));
    txt(s, 160, 26, "ceiling: the outside price", "bf-mid bf-tiny");
    rect(s, 60, 42, 200, 42, "bf-band1 bf-pulse");
    txt(s, 160, 68, "negotiated, full cost or dual rates", "bf-mid bf-tiny");
    txt(s, 160, 126, "with spare capacity the floor is variable cost",
        "bf-mid bf-tiny");
    return s;
  };

  /* One ratio, two factors, and a manager can move either. */
  ANIM.roiTree = function () {
    var s = frame();
    rect(s, 22, 48, 96, 34, "bf-band1");
    txt(s, 70, 69, "return on sales", "bf-mid bf-tiny");
    txt(s, 130, 69, "×", "bf-mid");
    rect(s, 142, 48, 96, 34, "bf-band2");
    txt(s, 190, 69, "asset turnover", "bf-mid bf-tiny");
    txt(s, 250, 69, "=", "bf-mid");
    rect(s, 262, 48, 44, 34, "bf-band3 bf-grow");
    txt(s, 284, 69, "ROI", "bf-mid bf-tiny");
    txt(s, 160, 126, "operating income over operating assets",
        "bf-mid bf-tiny");
    return s;
  };

  /* Income, less what the capital itself was required to earn. */
  ANIM.riBar = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 20, y1: 96, x2: 300, y2: 96, class: "bf-base" }));
    rect(s, 40, 30, 90, 66, "bf-band1");
    txt(s, 85, 24, "operating income", "bf-mid bf-tiny");
    rect(s, 148, 58, 76, 38, "bf-band0");
    txt(s, 186, 52, "capital charge", "bf-mid bf-tiny");
    rect(s, 240, 68, 58, 28, "bf-band3 bf-rise");
    txt(s, 269, 62, "residual", "bf-mid bf-tiny");
    txt(s, 160, 126, "what is left after the required return",
        "bf-mid bf-tiny");
    return s;
  };

  /* Four perspectives, and the money is only one of them. */
  ANIM.scorecard4 = function () {
    var s = frame();
    [["financial", 0, 0], ["customer", 1, 0], ["internal process", 0, 1],
     ["learning and growth", 1, 1]].forEach(function (c, i) {
      rect(s, 48 + c[1] * 112, 20 + c[2] * 46, 108, 42, "bf-band" + i);
      txt(s, 102 + c[1] * 112, 44 + c[2] * 46, c[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("circle", { cx: 160, cy: 66, r: 7, class: "bf-dot bf-pulse" }));
    txt(s, 160, 126, "few measures, each owned, each tied to the strategy",
        "bf-mid bf-tiny");
    return s;
  };

  /* Why each measure is there: the chain that ends in the money. */
  ANIM.strategyMap = function () {
    var s = frame();
    ["train the crew", "fewer changeovers", "on-time delivery",
     "margin"].forEach(function (p, i) {
      rect(s, 14 + i * 78, 46, 68, 36, "bf-band" + i);
      txt(s, 48 + i * 78, 68, p, "bf-mid bf-tiny");
      if (i < 3) {
        s.appendChild(svg("path", { d: "M " + (84 + i * 78) + " 64 H " + (90 + i * 78),
                                    class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      }
    });
    txt(s, 160, 126, "a leading measure moves before the lagging one",
        "bf-mid bf-tiny");
    return s;
  };

  /* ================================================================== *
   * BOOK 4 - Internal Controls and Technology.
   *
   * Forty-two drawings of its own, and none of the ninety-nine above would do.
   * Book 4 spans three domains that the first three volumes never touch - why a
   * control fails, how the system that records the numbers is controlled, and how
   * data becomes an insight - so there is no shape here that a costing or budgeting
   * drawing could stand in for. gates/cma_brief B3 forbids borrowing another
   * volume's drawing anyway, and gates/cma_brief.OWNED[4] declares this set, because
   * an undeclared volume falls back to EVERY drawing in the file and B3 then cannot
   * fail for it whatever a page names.
   *
   * WHAT THEY ARE: four duties with one hand holding two, a dial that stops short of
   * certain, three recovery sites against the clock, a block carrying the hash of the
   * one before it, a ladder from a fact to an action, the same data on a cut axis.
   * ================================================================== */

  /* Three risks compound into one. Nothing here adds: they multiply. */
  ANIM.riskStack = function () {
    var s = frame();
    ["inherent", "control", "detection"].forEach(function (r, i) {
      rect(s, 22 + i * 70, 40, 62, 30, "bf-band" + i);
      txt(s, 53 + i * 70, 59, r, "bf-mid bf-tiny");
      txt(s, 90 + i * 70, 59, i < 2 ? "×" : "=", "bf-mid bf-sm");
    });
    rect(s, 238, 36, 62, 38, "bf-band3 bf-grow");
    txt(s, 269, 52, "audit", "bf-mid bf-tiny");
    txt(s, 269, 66, "risk", "bf-mid bf-tiny");
    txt(s, 160, 96, "high, high and high gave high", "bf-mid bf-tiny");
    txt(s, 160, 126, "three risks compound; they do not add", "bf-mid bf-tiny");
    return s;
  };

  /* Three objectives, and a failure can miss all three at once. */
  ANIM.threeObj = function () {
    var s = frame();
    ["operations", "reporting", "compliance"].forEach(function (o, i) {
      s.appendChild(svg("circle", { cx: 72 + i * 88, cy: 56, r: 26,
                                    class: "bf-band" + i }));
      txt(s, 72 + i * 88, 60, o, "bf-mid bf-tiny");
      s.appendChild(svg("path", { d: "M " + (58 + i * 88) + " 42 L " +
                                     (86 + i * 88) + " 70", class: "bf-cut bf-pulse" }));
    });
    txt(s, 160, 104, "one weakness missed every one of them", "bf-mid bf-tiny");
    txt(s, 160, 126, "the objectives are three, and so is the damage", "bf-mid bf-tiny");
    return s;
  };

  /* Four components rest on a fifth, and the fifth is the people. */
  ANIM.cosoBase = function () {
    var s = frame();
    ["risk assessment", "control activities", "information", "monitoring"]
      .forEach(function (c, i) {
        rect(s, 18 + i * 74, 32, 68, 28, "bf-band" + i);
        txt(s, 52 + i * 74, 49, c, "bf-mid bf-tiny");
      });
    rect(s, 18, 68, 284, 26, "bf-band3 bf-pulse");
    txt(s, 160, 85, "the control environment", "bf-mid bf-tiny");
    txt(s, 160, 126, "the other four stand on it, or they stand on nothing",
        "bf-mid bf-tiny");
    return s;
  };

  /* The dial stops short of certain, and that is the design, not the fault. */
  ANIM.assuranceDial = function () {
    var s = frame();
    s.appendChild(svg("path", { d: "M 60 90 A 100 100 0 0 1 260 90",
                                class: "bf-base" }));
    s.appendChild(svg("path", { d: "M 60 90 A 100 100 0 0 1 232 40",
                                class: "bf-flow bf-grow" }));
    s.appendChild(svg("line", { x1: 160, y1: 90, x2: 232, y2: 40,
                                class: "bf-beam bf-tip" }));
    s.appendChild(svg("circle", { cx: 160, cy: 90, r: 5, class: "bf-piv" }));
    txt(s, 54, 104, "none", "bf-mid bf-tiny");
    txt(s, 266, 104, "certain", "bf-mid bf-tiny");
    txt(s, 240, 30, "reasonable", "bf-mid bf-tiny");
    txt(s, 160, 126, "cost buys reasonable assurance, never certainty",
        "bf-mid bf-tiny");
    return s;
  };

  /* The higher the document, the harder it is to change. */
  ANIM.govPyramid = function () {
    var s = frame();
    [["shareholders: the charter", 0], ["the board: the bylaws", 1],
     ["management: the policies", 2]].forEach(function (r, i) {
      rect(s, 50 + i * 26, 26 + i * 26, 220 - i * 52, 22, "bf-band" + i);
      txt(s, 160, 41 + i * 26, r[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("path", { d: "M 26 96 V 30", class: "bf-flow bf-slide" }));
    txt(s, 160, 112, "harder to change, upward", "bf-mid bf-tiny");
    txt(s, 160, 126, "ask which document governs before asking who may act",
        "bf-mid bf-tiny");
    return s;
  };

  /* One line the structure holds: the auditor does not report to the audited. */
  ANIM.boardLine = function () {
    var s = frame();
    rect(s, 112, 20, 96, 24, "bf-band0");
    txt(s, 160, 36, "audit committee", "bf-mid bf-tiny");
    rect(s, 24, 72, 96, 24, "bf-band1");
    txt(s, 72, 88, "the auditor", "bf-mid bf-tiny");
    rect(s, 200, 72, 96, 24, "bf-band2");
    txt(s, 248, 88, "management", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 120 60 H 72 V 70",
                                class: "bf-flow bf-pulse1" }));
    s.appendChild(svg("path", { d: "M 200 60 H 248 V 70",
                                class: "bf-flow2 bf-pulse2" }));
    s.appendChild(svg("path", { d: "M 128 84 H 192", class: "bf-cut bf-pulse" }));
    txt(s, 160, 126, "the auditor answers to the committee, not to management",
        "bf-mid bf-tiny");
    return s;
  };

  /* Four duties. Any one hand holding two is the weakness. */
  ANIM.dutySplit = function () {
    var s = frame();
    ["authorise", "record", "custody", "reconcile"].forEach(function (d, i) {
      rect(s, 14 + i * 76, 38, 68, 30, "bf-band" + i);
      txt(s, 48 + i * 76, 57, d, "bf-mid bf-tiny");
    });
    s.appendChild(svg("path", { d: "M 48 80 H 200", class: "bf-cut bf-pulse" }));
    s.appendChild(svg("circle", { cx: 124, cy: 80, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 124, 98, "one hand on two", "bf-mid bf-tiny");
    txt(s, 160, 126, "move whichever of the two is easiest to move",
        "bf-mid bf-tiny");
    return s;
  };

  /* Custody is a duty, and it looks like a lock. */
  ANIM.assetVault = function () {
    var s = frame();
    rect(s, 104, 36, 112, 62, "bf-band1");
    s.appendChild(svg("path", { d: "M 142 36 V 24 A 18 18 0 0 1 178 24 V 36",
                                class: "bf-base" }));
    s.appendChild(svg("circle", { cx: 160, cy: 66, r: 11, class: "bf-band3 bf-pulse" }));
    s.appendChild(svg("path", { d: "M 44 66 H 98", class: "bf-flow bf-pulse1" }));
    txt(s, 40, 60, "access", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 222 66 H 276", class: "bf-cut bf-pulse2" }));
    txt(s, 280, 60, "denied", "bf-mid bf-tiny");
    txt(s, 160, 126, "whoever holds the asset must not also record it",
        "bf-mid bf-tiny");
    return s;
  };

  /* Prenumber the forms, and the gap is the test. */
  ANIM.prenumber = function () {
    var s = frame();
    [1, 2, 3, 5, 6].forEach(function (nn, i) {
      rect(s, 24 + i * 56, 44, 44, 34, nn === 5 ? "bf-band3" : "bf-band1");
      txt(s, 46 + i * 56, 66, "No " + nn, "bf-mid bf-tiny");
    });
    s.appendChild(svg("circle", { cx: 186, cy: 32, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 186, 24, "4 is missing", "bf-mid bf-tiny");
    txt(s, 160, 96, "completeness is testable only if the run is numbered",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "the gap is the finding", "bf-mid bf-tiny");
    return s;
  };

  /* Start at the statements, because that is where materiality is decided. */
  ANIM.auditTopDown = function () {
    var s = frame();
    [["the statements", 0], ["the assertions", 1], ["entity controls", 2],
     ["the controls to test", 3]].forEach(function (r, i) {
      rect(s, 60, 22 + i * 24, 200 - i * 24, 20, "bf-band" + i);
      txt(s, 160, 36 + i * 24, r[0], "bf-mid bf-tiny");
    });
    s.appendChild(svg("path", { d: "M 30 26 V 110", class: "bf-flow bf-slide" }));
    txt(s, 160, 126, "top-down: select the controls last", "bf-mid bf-tiny");
    return s;
  };

  /* One stops it; the other finds it afterwards. The event is the divide. */
  ANIM.preventDetect = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 20, y1: 70, x2: 300, y2: 70, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 160, y1: 34, x2: 160, y2: 100,
                                class: "bf-cut bf-pulse" }));
    txt(s, 160, 28, "the event", "bf-mid bf-tiny");
    rect(s, 34, 44, 108, 22, "bf-band0");
    txt(s, 88, 59, "preventive", "bf-mid bf-tiny");
    rect(s, 178, 44, 108, 22, "bf-band2");
    txt(s, 232, 59, "detective", "bf-mid bf-tiny");
    txt(s, 88, 90, "before: it cannot happen", "bf-mid bf-tiny");
    txt(s, 232, 90, "after: it is found", "bf-mid bf-tiny");
    txt(s, 160, 126, "a detective control admits the event will occur",
        "bf-mid bf-tiny");
    return s;
  };

  /* A deficiency is not closed when the control is written. */
  ANIM.remediate = function () {
    var s = frame();
    ["deficiency named", "control designed", "control run",
     "control tested"].forEach(function (p, i) {
      rect(s, 12 + i * 76, 44, 68, 32, "bf-band" + i);
      txt(s, 46 + i * 76, 64, p, "bf-mid bf-tiny");
      if (i < 3) {
        s.appendChild(svg("path", { d: "M " + (82 + i * 76) + " 60 H " + (88 + i * 76),
                                    class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      }
    });
    s.appendChild(svg("circle", { cx: 274, cy: 92, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 160, 110, "closed only here", "bf-mid bf-tiny");
    txt(s, 160, 126, "remediation ends with evidence, not with a policy",
        "bf-mid bf-tiny");
    return s;
  };

  /* Five roles, and two of them must never be the same person. */
  ANIM.sysRoles = function () {
    var s = frame();
    ["analyst", "programmer", "operator", "librarian", "admin"]
      .forEach(function (r, i) {
        rect(s, 10 + i * 61, 40, 54, 30, "bf-band" + (i % 4));
        txt(s, 37 + i * 61, 59, r, "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 71 84 H 159", class: "bf-cut bf-pulse" }));
    txt(s, 115, 100, "development", "bf-mid bf-tiny");
    txt(s, 220, 100, "production", "bf-mid bf-tiny");
    txt(s, 160, 126, "map the access, not the job title", "bf-mid bf-tiny");
    return s;
  };

  /* Many threats, one target. */
  ANIM.threatFan = function () {
    var s = frame();
    rect(s, 128, 52, 64, 32, "bf-band3");
    txt(s, 160, 72, "the system", "bf-mid bf-tiny");
    [["error", 22, 26], ["fraud", 22, 104], ["outage", 298, 26],
     ["attack", 298, 104]].forEach(function (t, i) {
      txt(s, t[1], t[2], t[0], "bf-mid bf-tiny");
      s.appendChild(svg("path", { d: "M " + (t[1] < 160 ? 50 : 270) + " " +
                                     (t[2] < 66 ? 32 : 98) + " L " +
                                     (t[1] < 160 ? 126 : 194) + " " +
                                     (t[2] < 66 ? 56 : 80),
                                  class: "bf-flow bf-pulse" + (i % 2 + 1) }));
    });
    txt(s, 160, 126, "the internet adds reach, so it adds every one of them",
        "bf-mid bf-tiny");
    return s;
  };

  /* One gate, two answers, and a log of both. */
  ANIM.accessGate = function () {
    var s = frame();
    rect(s, 136, 26, 48, 80, "bf-band1");
    txt(s, 160, 70, "gate", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 34 46 H 132", class: "bf-flow bf-pulse1" }));
    txt(s, 30, 40, "who you are", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 188 46 H 290", class: "bf-flow bf-pulse2" }));
    txt(s, 286, 40, "allowed", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 188 88 H 290", class: "bf-cut bf-pulse" }));
    txt(s, 286, 100, "refused", "bf-mid bf-tiny");
    txt(s, 160, 126, "physical keeps you out of the room, logical out of the file",
        "bf-mid bf-tiny");
    return s;
  };

  /* Three gates, and each catches something the others cannot. */
  ANIM.inputGate = function () {
    var s = frame();
    ["input", "processing", "output"].forEach(function (g, i) {
      rect(s, 22 + i * 98, 40, 82, 34, "bf-band" + i);
      txt(s, 63 + i * 98, 61, g, "bf-mid bf-tiny");
      txt(s, 63 + i * 98, 92, ["shape and range", "totals agree",
                               "it reached the reader"][i], "bf-mid bf-tiny");
      if (i < 2) {
        s.appendChild(svg("path", { d: "M " + (106 + i * 98) + " 57 H " +
                                       (118 + i * 98),
                                    class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      }
    });
    txt(s, 160, 126, "only a hash total catches one valid code put for another",
        "bf-mid bf-tiny");
    return s;
  };

  /* The shapes are the question; the dots are where a control sits. */
  ANIM.flowRead = function () {
    var s = frame();
    s.appendChild(svg("polygon", { points: "30,56 54,38 78,56 54,74",
                                   class: "bf-band0" }));
    txt(s, 54, 92, "decision", "bf-mid bf-tiny");
    rect(s, 118, 40, 64, 32, "bf-band1");
    txt(s, 150, 60, "process", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 226 40 h 60 v 32 h -60 z",
                                class: "bf-band2" }));
    txt(s, 256, 60, "store", "bf-mid bf-tiny");
    [[98, 56], [204, 56]].forEach(function (p, i) {
      s.appendChild(svg("path", { d: "M " + (p[0] - 16) + " 56 H " + (p[0] + 14),
                                  class: "bf-flow bf-pulse" + (i + 1) }));
      s.appendChild(svg("circle", { cx: p[0], cy: 30, r: 5,
                                    class: "bf-dot bf-pulse" }));
    });
    txt(s, 160, 112, "a control sits on an arrow, not in a box", "bf-mid bf-tiny");
    txt(s, 160, 126, "read the flowchart for what is unchecked", "bf-mid bf-tiny");
    return s;
  };

  /* Readable, unreadable, readable again - and only the ends hold the key. */
  ANIM.cryptoLock = function () {
    var s = frame();
    ["INVOICE", "8f2a41c9", "INVOICE"].forEach(function (t, i) {
      rect(s, 18 + i * 102, 44, 86, 32, "bf-band" + (i === 1 ? 3 : 0));
      txt(s, 61 + i * 102, 64, t, "bf-mid bf-tiny");
      if (i < 2) {
        s.appendChild(svg("path", { d: "M " + (106 + i * 102) + " 60 H " +
                                       (118 + i * 102),
                                    class: "bf-flow bf-pulse" + (i + 1) }));
      }
    });
    [61, 265].forEach(function (x) {
      s.appendChild(svg("circle", { cx: x, cy: 96, r: 5, class: "bf-dot bf-pulse" }));
    });
    txt(s, 61, 112, "key", "bf-mid bf-tiny");
    txt(s, 265, 112, "key", "bf-mid bf-tiny");
    txt(s, 160, 126, "in between, the message is useless to whoever reads it",
        "bf-mid bf-tiny");
    return s;
  };

  /* The copy that matters is the one somewhere else. */
  ANIM.offsiteCopy = function () {
    var s = frame();
    rect(s, 20, 36, 104, 56, "bf-band1");
    txt(s, 72, 60, "the building", "bf-mid bf-tiny");
    rect(s, 38, 66, 32, 18, "bf-band3");
    txt(s, 54, 79, "data", "bf-mid bf-tiny");
    rect(s, 84, 66, 32, 18, "bf-band3");
    txt(s, 100, 79, "copy", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 26 42 L 118 86", class: "bf-cut bf-pulse" }));
    rect(s, 212, 50, 88, 30, "bf-band0 bf-pulse");
    txt(s, 256, 69, "off site", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 130 64 H 206", class: "bf-flow bf-slide" }));
    txt(s, 160, 112, "one fire takes both copies that share a roof",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "one copy off site protects every plan", "bf-mid bf-tiny");
    return s;
  };

  /* The clock chooses the site, not the budget. */
  ANIM.siteTiers = function () {
    var s = frame();
    [["hot", "hours", 0], ["warm", "days", 1], ["cold", "weeks", 2]]
      .forEach(function (t, i) {
        rect(s, 26 + i * 96, 34, 80, 30, "bf-band" + i);
        txt(s, 66 + i * 96, 54, t[0], "bf-mid bf-tiny");
        txt(s, 66 + i * 96, 80, t[1], "bf-mid bf-tiny");
      });
    s.appendChild(svg("path", { d: "M 26 96 H 300", class: "bf-flow bf-slide" }));
    txt(s, 160, 112, "recovery time objective", "bf-mid bf-tiny");
    txt(s, 160, 126, "the RTO picks the site; the RPO picks the backup",
        "bf-mid bf-tiny");
    return s;
  };

  /* Detail in, summaries out. The ledger never sees the transaction. */
  ANIM.aisFlow = function () {
    var s = frame();
    for (var i = 0; i < 4; i++) {
      rect(s, 16, 26 + i * 22, 62, 17, "bf-band1");
      txt(s, 47, 39 + i * 22, "txn", "bf-mid bf-tiny");
    }
    rect(s, 120, 44, 76, 40, "bf-band0");
    txt(s, 158, 68, "the system", "bf-mid bf-tiny");
    rect(s, 234, 48, 68, 32, "bf-band3");
    txt(s, 268, 68, "ledger", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 84 62 H 114", class: "bf-flow bf-pulse1" }));
    s.appendChild(svg("path", { d: "M 202 62 H 228", class: "bf-flow2 bf-pulse2" }));
    txt(s, 268, 98, "summaries", "bf-mid bf-tiny");
    txt(s, 160, 126, "the ledger receives summaries, not detail", "bf-mid bf-tiny");
    return s;
  };

  /* Name the cycle by where the sequence ends. */
  ANIM.cycleRing = function () {
    var s = frame();
    s.appendChild(svg("circle", { cx: 160, cy: 62, r: 36,
                                  class: "bf-ring bf-orbit" }));
    [["cash in", 160, 16], ["finished goods", 258, 66], ["wages", 160, 112],
     ["cash out", 62, 66]].forEach(function (c, i) {
      rect(s, c[1] - 44, c[2] - 10, 88, 20, "bf-band" + i);
      txt(s, c[1], c[2] + 4, c[0], "bf-mid bf-tiny");
    });
    txt(s, 160, 66, "one event,", "bf-mid bf-tiny");
    txt(s, 160, 78, "two cycles", "bf-mid bf-tiny");
    txt(s, 160, 126, "hours belong to production and to payroll at once",
        "bf-mid bf-tiny");
    return s;
  };

  /* Two systems, and a person in the gap. */
  ANIM.siloCost = function () {
    var s = frame();
    rect(s, 20, 38, 100, 44, "bf-band0");
    txt(s, 70, 64, "sales system", "bf-mid bf-tiny");
    rect(s, 200, 38, 100, 44, "bf-band2");
    txt(s, 250, 64, "stock system", "bf-mid bf-tiny");
    rect(s, 134, 44, 52, 32, "bf-band3 bf-pulse");
    txt(s, 160, 64, "by hand", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 124 60 H 130", class: "bf-flow bf-pulse1" }));
    s.appendChild(svg("path", { d: "M 190 60 H 196", class: "bf-flow bf-pulse2" }));
    txt(s, 160, 100, "the detail cannot be reassembled without it",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "separate systems are paid for twice", "bf-mid bf-tiny");
    return s;
  };

  /* One place the data lives, and every function reads the same number. */
  ANIM.erpHub = function () {
    var s = frame();
    s.appendChild(svg("circle", { cx: 160, cy: 64, r: 28, class: "bf-band3" }));
    txt(s, 160, 68, "one base", "bf-mid bf-tiny");
    [["sales", 40, 30], ["stock", 280, 30], ["payroll", 40, 102],
     ["ledger", 280, 102]].forEach(function (f, i) {
      rect(s, f[1] - 36, f[2] - 11, 72, 22, "bf-band" + i);
      txt(s, f[1], f[2] + 3, f[0], "bf-mid bf-tiny");
      s.appendChild(svg("path", { d: "M " + (f[1] < 160 ? 78 : 242) + " " +
                                     (f[2] < 66 ? 36 : 96) + " L " +
                                     (f[1] < 160 ? 138 : 182) + " " +
                                     (f[2] < 66 ? 52 : 78),
                                  class: "bf-flow bf-pulse" + (i % 2 + 1) }));
    });
    txt(s, 160, 126, "worth most where the questions span the systems",
        "bf-mid bf-tiny");
    return s;
  };

  /* Two tables, one key, and the join is the whole idea. */
  ANIM.relTable = function () {
    var s = frame();
    [["customer", 0], ["order", 1]].forEach(function (t, i) {
      rect(s, 24 + i * 156, 28, 112, 20, "bf-band" + i);
      txt(s, 80 + i * 156, 42, t[0], "bf-mid bf-tiny");
      for (var r = 0; r < 3; r++) {
        rect(s, 24 + i * 156, 52 + r * 20, 112, 17, "bf-band3");
      }
    });
    txt(s, 80, 65, "id 7", "bf-mid bf-tiny");
    txt(s, 236, 65, "cust 7", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 140 61 H 176", class: "bf-flow bf-pulse" }));
    txt(s, 158, 92, "the key", "bf-mid bf-tiny");
    txt(s, 160, 126, "one fact stored once, and joined where it is needed",
        "bf-mid bf-tiny");
    return s;
  };

  /* One warehouse, and a mart cut from it for each question. */
  ANIM.warehouseMart = function () {
    var s = frame();
    rect(s, 92, 22, 136, 32, "bf-band3");
    txt(s, 160, 42, "the warehouse", "bf-mid bf-tiny");
    ["sales", "stock", "finance"].forEach(function (m, i) {
      rect(s, 30 + i * 96, 76, 80, 26, "bf-band" + i);
      txt(s, 70 + i * 96, 93, m, "bf-mid bf-tiny");
      s.appendChild(svg("path", { d: "M " + (130 + i * 30) + " 58 L " +
                                     (70 + i * 96) + " 72",
                                  class: "bf-flow bf-pulse" + (i % 2 + 1) }));
    });
    txt(s, 160, 126, "a mart answers one department's question faster",
        "bf-mid bf-tiny");
    return s;
  };

  /* Created, used, kept, and then purged - not archived. */
  ANIM.lifeCycle = function () {
    var s = frame();
    ["create", "use", "retain", "purge"].forEach(function (p, i) {
      rect(s, 14 + i * 76, 44, 68, 32, "bf-band" + i);
      txt(s, 48 + i * 76, 64, p, "bf-mid bf-tiny");
      if (i < 3) {
        s.appendChild(svg("path", { d: "M " + (84 + i * 76) + " 60 H " + (90 + i * 76),
                                    class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      }
    });
    s.appendChild(svg("path", { d: "M 274 86 H 48 V 80", class: "bf-flow2 bf-slide" }));
    txt(s, 160, 104, "the policy says when, in writing, beforehand",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "when the period ends the data is purged, not archived",
        "bf-mid bf-tiny");
    return s;
  };

  /* Each block carries the one before it, which is why nobody edits the middle. */
  ANIM.chainBlocks = function () {
    var s = frame();
    for (var i = 0; i < 4; i++) {
      rect(s, 18 + i * 76, 40, 64, 38, "bf-band" + i);
      txt(s, 50 + i * 76, 56, "block " + (i + 1), "bf-mid bf-tiny");
      txt(s, 50 + i * 76, 70, i ? "+ hash " + i : "genesis", "bf-mid bf-tiny");
      if (i < 3) {
        s.appendChild(svg("path", { d: "M " + (84 + i * 76) + " 59 H " + (90 + i * 76),
                                    class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      }
    }
    s.appendChild(svg("circle", { cx: 126, cy: 96, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 160, 112, "change block 2 and blocks 3 and 4 stop agreeing",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "the ledger is distributed, so there is no single copy to edit",
        "bf-mid bf-tiny");
    return s;
  };

  /* Three shapes, and only the first fits a table without work. */
  ANIM.dataShapes = function () {
    var s = frame();
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        rect(s, 20 + c * 24, 34 + r * 20, 20, 16, "bf-band0");
      }
    }
    txt(s, 52, 104, "structured", "bf-mid bf-tiny");
    [[128, 34], [136, 54], [128, 74]].forEach(function (p) {
      rect(s, p[0], p[1], 56, 16, "bf-band1");
    });
    txt(s, 158, 104, "semi", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 222 42 q 30 -12 56 10 q -20 26 -46 22 q -22 -12 -10 -32 z",
                                class: "bf-band3 bf-pulse" }));
    txt(s, 250, 104, "unstructured", "bf-mid bf-tiny");
    txt(s, 160, 126, "most of what a company holds is the shape on the right",
        "bf-mid bf-tiny");
    return s;
  };

  /* A fact is not a finding, and only the last rung supports an action. */
  ANIM.insightLadder = function () {
    var s = frame();
    ["data", "information", "knowledge", "insight"].forEach(function (r, i) {
      rect(s, 24 + i * 60, 86 - i * 18, 56, 18, "bf-band" + i);
      txt(s, 52 + i * 60, 99 - i * 18, r, "bf-mid bf-tiny");
    });
    rect(s, 264, 14, 46, 18, "bf-band3 bf-grow");
    txt(s, 287, 27, "action", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 18, y1: 106, x2: 310, y2: 106,
                                class: "bf-base" }));
    txt(s, 160, 122, "only insight supports an action, because only it says why",
        "bf-mid bf-tiny");
    return s;
  };

  /* What it buys on one side, what it costs on the other. */
  ANIM.oppChallenge = function () {
    var s = frame();
    rect(s, 18, 30, 126, 60, "bf-band0");
    txt(s, 81, 48, "what it buys", "bf-mid bf-tiny");
    txt(s, 81, 66, "speed, reach,", "bf-mid bf-tiny");
    txt(s, 81, 78, "questions answered", "bf-mid bf-tiny");
    rect(s, 176, 30, 126, 60, "bf-band2");
    txt(s, 239, 48, "what it costs", "bf-mid bf-tiny");
    txt(s, 239, 66, "skill, privacy,", "bf-mid bf-tiny");
    txt(s, 239, 78, "process change", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 160, y1: 26, x2: 160, y2: 94,
                                class: "bf-cut bf-pulse" }));
    txt(s, 160, 126, "the gain is never the software on its own", "bf-mid bf-tiny");
    return s;
  };

  /* Four questions, and each needs the one before it. */
  ANIM.fourAnalytics = function () {
    var s = frame();
    [["descriptive", "what happened"], ["diagnostic", "why"],
     ["predictive", "what next"], ["prescriptive", "what to do"]]
      .forEach(function (a, i) {
        rect(s, 12 + i * 76, 36, 68, 44, "bf-band" + i);
        txt(s, 46 + i * 76, 54, a[0], "bf-mid bf-tiny");
        txt(s, 46 + i * 76, 68, a[1], "bf-mid bf-tiny");
        if (i < 3) {
          s.appendChild(svg("path", { d: "M " + (82 + i * 76) + " 58 H " +
                                         (88 + i * 76),
                                      class: "bf-flow bf-pulse" + (i % 2 + 1) }));
        }
      });
    txt(s, 160, 100, "a recommendation is the only one that names an action",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "and it is still a recommendation, not a decision",
        "bf-mid bf-tiny");
    return s;
  };

  /* Too simple, right, too clever - and the third is the dangerous one. */
  ANIM.fitCurve = function () {
    var s = frame();
    [["under", 0], ["fitted", 1], ["over", 2]].forEach(function (f, i) {
      var x = 16 + i * 100;
      rect(s, x, 28, 88, 60, "bf-band" + i);
      [12, 30, 48, 66].forEach(function (dx, j) {
        s.appendChild(svg("circle", { cx: x + dx, cy: 72 - j * 9 + (j === 1 ? 8 : 0),
                                      r: 3, class: "bf-dot" }));
      });
      s.appendChild(svg("path", {
        d: i === 0 ? "M " + (x + 8) + " 72 H " + (x + 78)
          : i === 1 ? "M " + (x + 8) + " 76 L " + (x + 78) + " 38"
            : "M " + (x + 8) + " 76 q 18 -30 28 -4 q 12 -26 22 -14 q 10 -8 20 -22",
        class: "bf-flow bf-pulse" + (i % 2 + 1) }));
      txt(s, x + 44, 102, f[0], "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "the over-fitted model explains this sample and nothing else",
        "bf-mid bf-tiny");
    return s;
  };

  /* Clustering finds the groups; classification puts the next one in one. */
  ANIM.clusterClass = function () {
    var s = frame();
    rect(s, 18, 24, 128, 76, "bf-band0");
    [[40, 44], [52, 56], [36, 62], [104, 40], [118, 52], [110, 66]]
      .forEach(function (p, i) {
        s.appendChild(svg("circle", { cx: p[0], cy: p[1], r: 4,
                                      class: "bf-dot bf-pulse" + (i % 2 + 1) }));
      });
    txt(s, 82, 92, "clustering: find the groups", "bf-mid bf-tiny");
    rect(s, 174, 24, 128, 76, "bf-band2");
    s.appendChild(svg("line", { x1: 238, y1: 30, x2: 238, y2: 80,
                                class: "bf-cut bf-pulse" }));
    s.appendChild(svg("circle", { cx: 270, cy: 50, r: 5,
                                  class: "bf-dot bf-grow" }));
    txt(s, 238, 92, "classification: place the next", "bf-mid bf-tiny");
    txt(s, 160, 126, "the first has no answer to learn from; the second does",
        "bf-mid bf-tiny");
    return s;
  };

  /* One line, and every coefficient carries a sign a reader would expect. */
  ANIM.regPlane = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 36, y1: 96, x2: 300, y2: 96, class: "bf-base" }));
    s.appendChild(svg("line", { x1: 36, y1: 22, x2: 36, y2: 96, class: "bf-base" }));
    [[64, 84], [98, 76], [134, 66], [170, 60], [206, 48], [242, 42], [276, 32]]
      .forEach(function (p, i) {
        s.appendChild(svg("circle", { cx: p[0], cy: p[1], r: 3,
                                      class: "bf-dot bf-pulse" + (i % 2 + 1) }));
      });
    s.appendChild(svg("path", { d: "M 56 88 L 288 30", class: "bf-flow bf-grow" }));
    txt(s, 240, 72, "+ price", "bf-mid bf-tiny");
    txt(s, 240, 84, "− distance", "bf-mid bf-tiny");
    txt(s, 160, 112, "two drivers, one equation", "bf-mid bf-tiny");
    txt(s, 160, 126, "a coefficient with the wrong sign is a finding, not a result",
        "bf-mid bf-tiny");
    return s;
  };

  /* One series, and the parts it is made of. */
  ANIM.tsComponents = function () {
    var s = frame();
    s.appendChild(svg("path", { d: "M 20 70 q 24 -16 44 2 q 24 -22 44 -4 q 24 -20 44 -6",
                                class: "bf-flow bf-pulse1" }));
    txt(s, 86, 26, "the series", "bf-mid bf-tiny");
    s.appendChild(svg("line", { x1: 180, y1: 40, x2: 180, y2: 92,
                                class: "bf-cut" }));
    s.appendChild(svg("path", { d: "M 198 76 L 300 48", class: "bf-flow2 bf-grow" }));
    txt(s, 250, 38, "trend", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 198 92 q 14 -14 26 0 q 14 14 26 0 q 14 -14 26 0",
                                class: "bf-flow bf-pulse2" }));
    txt(s, 250, 108, "season", "bf-mid bf-tiny");
    txt(s, 160, 126, "the seasonal factors sum to zero, or they are not seasonal",
        "bf-mid bf-tiny");
    return s;
  };

  /* Look at it before you model it, and say how much of it there is. */
  ANIM.edaLook = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 30, y1: 96, x2: 300, y2: 96, class: "bf-base" }));
    [18, 34, 52, 64, 50, 30, 14].forEach(function (h, i) {
      rect(s, 38 + i * 36, 96 - h, 28, h, "bf-band" + (i % 4) + " bf-rise");
    });
    s.appendChild(svg("circle", { cx: 290, cy: 84, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 286, 70, "outlier", "bf-mid bf-tiny");
    txt(s, 160, 112, "investigated, not deleted, until its cause is known",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "the first look is a hypothesis, never a finding",
        "bf-mid bf-tiny");
    return s;
  };

  /* Weigh each outcome by how likely it is. */
  ANIM.evTree = function () {
    var s = frame();
    s.appendChild(svg("circle", { cx: 40, cy: 62, r: 6, class: "bf-piv" }));
    [["0.25 high", 26, 0], ["0.50 mid", 62, 1], ["0.25 low", 98, 2]]
      .forEach(function (b, i) {
        s.appendChild(svg("path", { d: "M 48 62 L 112 " + (26 + i * 36),
                                    class: "bf-flow bf-pulse" + (i % 2 + 1) }));
        rect(s, 116, 14 + i * 36, 94, 24, "bf-band" + i);
        txt(s, 163, 30 + i * 36, b[0], "bf-mid bf-tiny");
      });
    rect(s, 228, 48, 74, 28, "bf-band3 bf-grow");
    txt(s, 265, 66, "expected", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 214 62 H 224", class: "bf-flow2 bf-pulse" }));
    txt(s, 160, 126, "the expected value is a number no single outcome equals",
        "bf-mid bf-tiny");
    return s;
  };

  /* Move one input and watch which answer moves. */
  ANIM.whatIf = function () {
    var s = frame();
    ["price", "volume", "cost"].forEach(function (d, i) {
      txt(s, 44, 38 + i * 22, d, "bf-mid bf-tiny");
      s.appendChild(svg("line", { x1: 70, y1: 34 + i * 22, x2: 188,
                                  y2: 34 + i * 22, class: "bf-base" }));
      s.appendChild(svg("circle", { cx: i === 1 ? 160 : 108, cy: 34 + i * 22, r: 6,
                                    class: i === 1 ? "bf-dot bf-slide" : "bf-dot" }));
    });
    rect(s, 216, 34, 86, 46, "bf-band3 bf-grow");
    txt(s, 259, 52, "profit", "bf-mid bf-tiny");
    txt(s, 259, 68, "moves", "bf-mid bf-tiny");
    s.appendChild(svg("path", { d: "M 196 56 H 210", class: "bf-flow bf-pulse" }));
    txt(s, 160, 100, "goal seeking runs it backwards: fix the answer, find the input",
        "bf-mid bf-tiny");
    txt(s, 160, 126, "one at a time, or you cannot say which mattered",
        "bf-mid bf-tiny");
    return s;
  };

  /* Thousands of runs, and the shape of the answer. */
  ANIM.monteCloud = function () {
    var s = frame();
    s.appendChild(svg("line", { x1: 24, y1: 92, x2: 300, y2: 92, class: "bf-base" }));
    [8, 16, 28, 44, 58, 50, 34, 20, 10].forEach(function (h, i) {
      rect(s, 30 + i * 30, 92 - h, 24, h, "bf-band" + (i % 4) + " bf-rise");
    });
    s.appendChild(svg("line", { x1: 174, y1: 26, x2: 174, y2: 92,
                                class: "bf-cut bf-pulse" }));
    txt(s, 174, 20, "the mean", "bf-mid bf-tiny");
    txt(s, 62, 108, "5th", "bf-mid bf-tiny");
    txt(s, 286, 108, "95th", "bf-mid bf-tiny");
    txt(s, 160, 126, "one run is an anecdote; the distribution is the answer",
        "bf-mid bf-tiny");
    return s;
  };

  /* Three forms of the same number, and only one answers the question. */
  ANIM.chartPick = function () {
    var s = frame();
    [24, 24, 24].forEach(function (_u, i) {
      rect(s, 16 + i * 100, 24, 88, 64, "bf-band" + i);
    });
    [40, 56, 30].forEach(function (h, i) {
      rect(s, 28 + i * 20, 82 - h, 14, h, "bf-band3");
    });
    s.appendChild(svg("path", { d: "M 126 78 L 150 56 L 174 62 L 194 34",
                                class: "bf-flow bf-pulse1" }));
    s.appendChild(svg("circle", { cx: 260, cy: 56, r: 24, class: "bf-band3" }));
    s.appendChild(svg("path", { d: "M 260 32 A 24 24 0 0 1 282 62 L 260 56 z",
                                class: "bf-band0" }));
    ["compare", "over time", "share"].forEach(function (t, i) {
      txt(s, 60 + i * 100, 104, t, "bf-mid bf-tiny");
    });
    txt(s, 160, 126, "the question chooses the form, not the other way round",
        "bf-mid bf-tiny");
    return s;
  };

  /* The same two numbers, told twice. */
  ANIM.misleadAxis = function () {
    var s = frame();
    [["from zero", 0, "98", "100"], ["from 97", 2, "98", "100"]]
      .forEach(function (p, i) {
        var x = 20 + i * 156;
        s.appendChild(svg("line", { x1: x, y1: 92, x2: x + 124, y2: 92,
                                    class: "bf-base" }));
        s.appendChild(svg("line", { x1: x, y1: 24, x2: x, y2: 92,
                                    class: "bf-base" }));
        rect(s, x + 24, i ? 60 : 72, 30, i ? 32 : 20, "bf-band" + p[1]);
        rect(s, x + 70, 28, 30, i ? 64 : 24, "bf-band" + (p[1] + 1));
        txt(s, x + 62, 108, p[0], "bf-mid bf-tiny");
      });
    s.appendChild(svg("circle", { cx: 160, cy: 56, r: 5, class: "bf-dot bf-pulse" }));
    txt(s, 160, 126, "a 2% difference, drawn as if it were a doubling",
        "bf-mid bf-tiny");
    return s;
  };

  /* ------------------------------------------------------------------ *
   * THE PANEL
   * ------------------------------------------------------------------ */
  function build(page) {
    var S = root.Speech, P = root.Progress;
    var b = page.brief || {};
    var dlg = E("dialog", "brief");
    dlg.setAttribute("aria-label", "Brief for " + (page.title || "this page"));

    /* THE AUTHOR BULLETS SOME OF HIS PARAGRAPHS, and a bullet set in running prose reads as
       a typo: "...at one date. - An asset is a present right...". The text is his and is not
       touched; it is only laid out as what it already is. Split on the bullet character, keep
       the lead-in as a paragraph and the rest as a list. Shared by `about` and by every
       passage of `read`, because the author bullets in both and one of them having the
       behaviour would be the kind of difference nobody can see the reason for. */
    function prose(host, text, cls) {
      var parts = String(text).split(/\s*•\s*/);
      var lead = parts.shift();
      if (lead && lead.trim()) host.appendChild(E("p", cls, lead.trim()));
      if (parts.length) {
        var ul = E("ul", cls + " bf-about-list");
        parts.forEach(function (x) {
          if (x && x.trim()) ul.appendChild(E("li", null, x.trim()));
        });
        host.appendChild(ul);
      }
      return host;
    }

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
      prose(sec, b.about, "bf-about");
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

    /* 2c. THE SECTION ITSELF, in the author's words.
     *
     * WHAT THIS IS FOR. `about` is one string, so a section could carry one of its paragraphs
     * and the other eight had no slot in the data format at all. Chapter 1 shipped 16% of the
     * author's prose for that reason: the full chapter was in the repo the whole time, in
     * assets/source-text.js, loaded by exactly one page - the QA page. `read` is the slot.
     *
     * Each passage is the author's paragraph VERBATIM. provenance.js audits `read[].h` and
     * `read[].p` as CONTENT, the same as `about`, so a passage reworded here fails the build.
     * `box` styles a passage as the book styles it, because the book teaches partly by that
     * signal - an Exam Trap has to look like an Exam Trap.
     *
     * SEALING IS WHAT MAKES THIS SAFE. The page asks first and the Brief explains; a passage
     * that states the answer to a scene on the same page would undo that. `brief.seal` maps a
     * scene id to the passage headings withheld until Progress says that scene is done, and
     * the sealed card says which scene opens it. Nothing is hidden silently.
     */
    var read = b.read || [];
    if (read.length) {
      var rs = E("section", "bf-sec bf-sec-read");
      var rk = E("div", "bf-k");
      rk.appendChild(E("span", null, "The section, in the author's words"));
      var sealed = {};          /* passage heading (lower) -> the scene that opens it */
      Object.keys(b.seal || {}).forEach(function (sid) {
        (b.seal[sid] || []).forEach(function (t) {
          sealed[String(t).toLowerCase()] = sid;
        });
      });
      function isOpen(sid) {
        if (!P || !P.exerciseDone) return true;   /* no progress store: show everything */
        return P.exerciseDone(page.id, sid);
      }
      var sayable = [];
      read.forEach(function (blk) {
        var sid = sealed[String(blk.h || "").toLowerCase()];
        if (sid && !isOpen(sid)) return;
        (blk.p || []).forEach(function (p) { sayable.push(p); });
      });
      if (S && S.supported && sayable.length) {
        var all = S.button(sayable.join(" "), "en", "Read the whole section aloud");
        all.className = "bf-play";
        rk.appendChild(all);
      }
      rs.appendChild(rk);

      read.forEach(function (blk) {
        var sid = sealed[String(blk.h || "").toLowerCase()];
        var scene = (page.scenes || []).filter(function (s) { return s && s.id === sid; })[0];
        if (sid && !isOpen(sid)) {
          var lock = E("div", "bf-pass bf-sealed");
          lock.appendChild(E("h3", "bf-pass-h", blk.h || ""));
          lock.appendChild(E("p", "bf-note",
            "Opens once you have checked “" +
            ((scene && scene.title) || sid) + "” on this page. " +
            "It would answer it for you."));
          rs.appendChild(lock);
          return;
        }
        var pass = E("div", "bf-pass" + (blk.box ? " bf-pass-box bf-box-" + blk.box : ""));
        if (blk.h) pass.appendChild(E("h3", "bf-pass-h", blk.h));
        (blk.p || []).forEach(function (p) { prose(pass, p, "bf-pass-p"); });
        if (blk.table && blk.table.length) {
          var tb = E("table", "bf-pass-t");
          blk.table.forEach(function (row, i) {
            var tr = E("tr");
            row.forEach(function (cell) {
              var td = E(i === 0 ? "th" : "td", null, String(cell));
              tr.appendChild(td);
            });
            tb.appendChild(tr);
          });
          pass.appendChild(tb);
        }
        if (blk.fig && root.Exhibit && root.Exhibit.fig) {
          pass.appendChild(root.Exhibit.fig(blk.fig));
        }
        rs.appendChild(pass);
      });
      body.appendChild(rs);
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
