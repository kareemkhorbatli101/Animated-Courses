/* icons.js — a drawn mark for every term the chapter bridges.
 *
 * THE RULE THIS OBEYS. No emoji, no stock icon set, nothing bought in. A word with no
 * geometry of its own does not get a picture invented for it; it gets a typographic mark
 * and is counted as such, so the gap is visible rather than papered over.
 *
 * HOW 95 TERMS GET MARKS FROM 14 DRAWINGS, HONESTLY. The terms are not 95 unrelated
 * ideas: they fall into families that share a shape the book already draws. The
 * accounting equation, assets, liabilities, contributed capital and retained earnings are
 * all the BEAM; debit, credit, the T-account and every contra account are the T; the
 * balance-sheet sections are the BANDS. So each family is one drawing that takes the part
 * to highlight, and a term's mark is its family with its own part lit. That is not a
 * shortcut: it is the point. Seeing "retained earnings" and "contributed capital" as two
 * lit corners of the same beam is the thing a learner needs to remember.
 *
 * THREE TIERS, DECLARED PER TERM, never inferred:
 *   1 geometric    - the book draws this shape; the mark is a reduction of the author's
 *                    own figure.
 *   2 relational   - no shape of its own, but a relation the author states. Two marks
 *                    and a link, in the same visual language.
 *   3 typographic  - no geometry at all. The term's initial, set in the accent. Stated
 *                    openly; Icons.census() counts these so the tier-3 list can be read
 *                    and argued with.
 *
 * Every mark is one 24x24 viewBox, currentColor for the muted parts and var(--accent) for
 * the lit part, so it reads at 20px in a term chip and at 96px in the Brief, in both
 * themes, with no second asset.
 */
(function (root, doc) {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  function s(tag, attrs) {
    var n = doc.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function root24(cls) {
    return s("svg", { viewBox: "0 0 24 24", class: "ticon " + (cls || ""),
                      "aria-hidden": "true", focusable: "false" });
  }
  /* `on` marks the lit part; everything else draws muted */
  function cl(on, want) { return on === want || on === "all" ? "ti-on" : "ti-off"; }

  var F = {};

  /* --- 1. THE BEAM: assets on one pan, the two financing sides on the other --- */
  F.equation = function (part) {
    var g = root24("ti-eq");
    g.appendChild(s("line", { x1: 3, y1: 19, x2: 21, y2: 19, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 5, y1: 9, x2: 19, y2: 9, class: "ti-rule" }));
    g.appendChild(s("polygon", { points: "12,9 9,19 15,19", class: "ti-off" }));
    g.appendChild(s("rect", { x: 4, y: 4, width: 6, height: 4, rx: 1, class: cl(part, "a") }));
    g.appendChild(s("rect", { x: 13, y: 4, width: 3, height: 4, rx: 1, class: cl(part, "l") }));
    g.appendChild(s("rect", { x: 16.5, y: 4, width: 3, height: 4, rx: 1, class: cl(part, "cc") }));
    g.appendChild(s("rect", { x: 13, y: 1.5, width: 6.5, height: 2, rx: 1, class: cl(part, "re") }));
    return g;
  };

  /* --- 2. THE T: one side increases it, the other reduces it --- */
  F.tshape = function (part) {
    var g = root24("ti-t");
    g.appendChild(s("line", { x1: 3, y1: 6, x2: 21, y2: 6, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 12, y1: 6, x2: 12, y2: 21, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 5, y: 9, width: 5, height: 2.6, rx: 1, class: cl(part, "debit") }));
    g.appendChild(s("rect", { x: 14, y: 13, width: 5, height: 2.6, rx: 1, class: cl(part, "credit") }));
    if (part === "contra") {
      g.appendChild(s("rect", { x: 14, y: 9, width: 5, height: 2.6, rx: 1, class: "ti-on" }));
      g.appendChild(s("line", { x1: 5, y1: 10.3, x2: 10, y2: 10.3, class: "ti-strike" }));
    }
    return g;
  };

  /* --- 3. THE BANDS: the five sections of a classified balance sheet --- */
  F.bands = function (part) {
    var g = root24("ti-bands");
    [["ca", 2.5], ["nca", 6.6], ["cl", 10.7], ["ncl", 14.8], ["eq", 18.9]]
      .forEach(function (b) {
        g.appendChild(s("rect", { x: 3, y: b[1], width: 18, height: 3.2, rx: 1,
                                  class: cl(part, b[0]) }));
      });
    return g;
  };

  /* --- 4. THE TIMELINE: when the sale is earned, and when the cash moves --- */
  F.timeline = function (part) {
    var g = root24("ti-tl");
    g.appendChild(s("line", { x1: 3, y1: 15, x2: 21, y2: 15, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 12, y1: 7, x2: 12, y2: 20, class: "ti-dash" }));
    g.appendChild(s("rect", { x: 5, y: 9, width: 5.5, height: 4, rx: 1, class: cl(part, "earn") }));
    g.appendChild(s("rect", { x: 13.5, y: 17, width: 5.5, height: 4, rx: 1,
                              class: cl(part, "receive") }));
    if (part === "defer" || part === "accrue") {
      g.appendChild(s("path", { d: part === "defer" ? "M 10.5 11 L 13.5 19" : "M 13.5 19 L 10.5 11",
                                class: "ti-arrow" }));
    }
    return g;
  };

  /* --- 5. THE DIAL: a measure read off the statement --- */
  F.gauge = function (part) {
    var g = root24("ti-gauge");
    g.appendChild(s("path", { d: "M 4 18 A 8 8 0 0 1 20 18", class: "ti-rule" }));
    var ang = { wc: -55, ratio: -20, liq: -70, sol: 15, flex: -40 }[part];
    if (ang === undefined) ang = -35;
    g.appendChild(s("line", { x1: 12, y1: 18, x2: 12, y2: 9, class: "ti-on",
                              transform: "rotate(" + ang + " 12 18)" }));
    g.appendChild(s("circle", { cx: 12, cy: 18, r: 1.6, class: "ti-on" }));
    return g;
  };

  /* --- 6. THE CYCLE: cash to inventory to receivables to cash --- */
  F.cycle = function (part) {
    var g = root24("ti-cyc");
    g.appendChild(s("circle", { cx: 12, cy: 12, r: 7.5, class: "ti-ring" }));
    g.appendChild(s("circle", { cx: 12, cy: 4.5, r: 2, class: cl(part, "cash") }));
    g.appendChild(s("circle", { cx: 18.5, cy: 15, r: 2, class: cl(part, "inv") }));
    g.appendChild(s("circle", { cx: 5.5, cy: 15, r: 2, class: cl(part, "coll") }));
    return g;
  };

  /* --- 7. THE PAGE: one of the four statements, or the notes --- */
  F.doc = function (part) {
    var g = root24("ti-doc");
    g.appendChild(s("rect", { x: 4.5, y: 2.5, width: 15, height: 19, rx: 2, class: "ti-ring" }));
    var y = { is: 6, sce: 10, cf: 14, bs: 18, notes: 18 }[part];
    [6, 10, 14, 18].forEach(function (yy) {
      g.appendChild(s("line", { x1: 7.5, y1: yy, x2: 16.5, y2: yy,
                                class: (yy === y ? "ti-on-s" : "ti-rule") }));
    });
    if (part === "set") {
      g.appendChild(s("rect", { x: 2, y: 5, width: 15, height: 19, rx: 2, class: "ti-on-s" }));
    }
    if (part === "notes") g.appendChild(s("circle", { cx: 18.5, cy: 18, r: 2.4, class: "ti-on" }));
    return g;
  };

  /* --- 8. THE READERS: who the statements are written for --- */
  F.people = function (part) {
    var g = root24("ti-ppl");
    g.appendChild(s("rect", { x: 8.5, y: 9, width: 7, height: 6, rx: 1, class: "ti-ring" }));
    [[4, 6], [12, 3.5], [20, 6], [4, 18], [12, 20.5], [20, 18]].forEach(function (p, i) {
      g.appendChild(s("circle", { cx: p[0], cy: p[1], r: 2,
                                  class: (part === "inv" && i < 3) || part === "all"
                                    ? "ti-on" : "ti-off" }));
    });
    return g;
  };

  /* --- 9. TIER 2, RELATIONAL: two marks and the link the author states --- */
  F.relation = function (part) {
    var g = root24("ti-rel");
    g.appendChild(s("circle", { cx: 6, cy: 12, r: 3.2, class: cl(part, "a") }));
    g.appendChild(s("circle", { cx: 18, cy: 12, r: 3.2, class: cl(part, "b") }));
    g.appendChild(s("line", { x1: 9.4, y1: 12, x2: 14.6, y2: 12,
                              class: part === "both" ? "ti-on-s" : "ti-rule" }));
    return g;
  };

  /* --- 10. THE FIVE VERBS: record, measure, recognize, present, disclose --- */
  F.verbs = function (part) {
    var g = root24("ti-verbs");
    var order = ["record", "measure", "recognize", "present", "disclose"];
    order.forEach(function (nm, i) {
      g.appendChild(s("rect", { x: 3 + i * 3.7, y: 9, width: 2.6, height: 6, rx: .8,
                                class: cl(part, nm) }));
    });
    return g;
  };

  /* --- 11. THE LADDER: probable, reasonably possible, remote --- */
  F.ladder = function (part) {
    var g = root24("ti-lad");
    [["prob", 3.5], ["poss", 10], ["remote", 16.5]].forEach(function (r) {
      g.appendChild(s("rect", { x: 3, y: r[1], width: 18, height: 4.5, rx: 1,
                                class: cl(part, r[0]) }));
    });
    return g;
  };

  /* --- 12. THE SPLIT: one obligation reaching the sheet as two lines --- */
  F.split = function (part) {
    var g = root24("ti-split");
    g.appendChild(s("rect", { x: 3, y: 4, width: 18, height: 4.5, rx: 1,
                              class: part === "all" ? "ti-on" : "ti-off" }));
    g.appendChild(s("rect", { x: 3, y: 15, width: 5.5, height: 4.5, rx: 1, class: cl(part, "cur") }));
    g.appendChild(s("rect", { x: 9.5, y: 15, width: 11.5, height: 4.5, rx: 1,
                              class: cl(part, "ncur") }));
    g.appendChild(s("line", { x1: 8.7, y1: 9.5, x2: 8.7, y2: 14, class: "ti-dash" }));
    return g;
  };

  /* --- 13. THE RULEBOOK: who writes the rules, and where they live --- */
  F.book = function (part) {
    var g = root24("ti-book");
    g.appendChild(s("path", { d: "M 4 5 L 4 19 L 12 17.5 L 12 3.5 Z",
                              class: part === "us" || part === "all" ? "ti-on" : "ti-off" }));
    g.appendChild(s("path", { d: "M 20 5 L 20 19 L 12 17.5 L 12 3.5 Z",
                              class: part === "intl" || part === "all" ? "ti-on" : "ti-off" }));
    g.appendChild(s("line", { x1: 12, y1: 3.5, x2: 12, y2: 17.5, class: "ti-rule" }));
    return g;
  };

  /* =================================================================
   * FAMILIES 14 TO 21: CHAPTERS 3, 4 AND 5
   *
   * Thirty-four bridged terms in chapters 3 to 5 had no mark at all and fell through to
   * the typographic tier, which is the honest default and was never the finished state.
   * Each family below is one shape the author himself draws - the income ladder, the line
   * discontinued operations sit below, the roll-forward of shares, the three activities -
   * and a term's mark is that shape with its own part lit, exactly as families 1 to 13
   * work. No new CSS: the same ti-* classes.
   * ================================================================= */

  /* --- 14. THE LADDER OF SUBTOTALS (F03-04): each one smaller than the one above --- */
  F.steps = function (part) {
    var g = root24("ti-steps");
    [["gross", 3, 18], ["op", 7.5, 13], ["other", 12, 9], ["net", 16.5, 6]]
      .forEach(function (r) {
        g.appendChild(s("rect", { x: 3, y: r[1], width: r[2], height: 3.4, rx: 1,
                                  class: cl(part, r[0]) }));
      });
    return g;
  };

  /* --- 15. THE LINE (F03-06): what stays above it, and what crosses it net of tax --- */
  F.line = function (part) {
    var g = root24("ti-line");
    g.appendChild(s("rect", { x: 3, y: 3, width: 18, height: 3.6, rx: 1,
                              class: cl(part, "above") }));
    g.appendChild(s("rect", { x: 3, y: 7.6, width: 18, height: 3.6, rx: 1,
                              class: cl(part, "unusual") }));
    g.appendChild(s("line", { x1: 2, y1: 13.4, x2: 22, y2: 13.4, class: "ti-dash" }));
    g.appendChild(s("rect", { x: 3, y: 15.4, width: 18, height: 3.6, rx: 1,
                              class: cl(part, "below") }));
    /* the component that leaves is one piece of the line below; the tax split is the
       second, narrower bar beside it; the strategic shift is the arrow across */
    if (part === "component") {
      g.appendChild(s("rect", { x: 14, y: 15.4, width: 7, height: 3.6, rx: 1, class: "ti-on" }));
    }
    if (part === "tax") {
      g.appendChild(s("rect", { x: 3, y: 20, width: 18, height: 2, rx: .8, class: "ti-on" }));
    }
    if (part === "shift") {
      g.appendChild(s("path", { d: "M 12 11.2 L 12 15.4", class: "ti-arrow" }));
    }
    return g;
  };

  /* --- 16. COMPREHENSIVE INCOME (F03-08): net income plus OCI, and the balance OCI builds --- */
  F.oci = function (part) {
    var g = root24("ti-oci");
    g.appendChild(s("rect", { x: 2.5, y: 4, width: 8.5, height: 5, rx: 1, class: cl(part, "ni") }));
    g.appendChild(s("rect", { x: 12.5, y: 4, width: 4.5, height: 5, rx: 1, class: cl(part, "oci") }));
    g.appendChild(s("line", { x1: 2.5, y1: 11.5, x2: 21.5, y2: 11.5, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 12.5, y: 14, width: 4.5, height: 6.5, rx: 1,
                              class: cl(part, "aoci") }));
    if (part === "recycle") {
      g.appendChild(s("path", { d: "M 14.75 14 L 14.75 9", class: "ti-arrow" }));
      g.appendChild(s("rect", { x: 12.5, y: 4, width: 4.5, height: 5, rx: 1, class: "ti-on" }));
    }
    return g;
  };

  /* --- 17. THE THREE DATES (Section 4.3): and the one where nothing happens --- */
  F.dates = function (part) {
    var g = root24("ti-dates");
    g.appendChild(s("line", { x1: 3, y1: 14, x2: 21, y2: 14, class: "ti-rule" }));
    [["decl", 6], ["rec", 12], ["pay", 18]].forEach(function (p) {
      g.appendChild(s("circle", { cx: p[1], cy: 14, r: 2.4, class: cl(part, p[0]) }));
    });
    /* the date of record is the one with no entry: it is drawn hollow */
    if (part === "rec") {
      g.appendChild(s("circle", { cx: 12, cy: 14, r: 1, class: "ti-hole" }));
    }
    return g;
  };

  /* --- 18. THE SHARES (F04-04): issued, of which some are held as treasury --- */
  F.shares = function (part) {
    var g = root24("ti-shares");
    g.appendChild(s("rect", { x: 2.5, y: 7, width: 19, height: 10, rx: 1.5,
                              class: cl(part, "issued") }));
    g.appendChild(s("rect", { x: 14.5, y: 7, width: 7, height: 10, rx: 1.5,
                              class: cl(part, "treasury") }));
    g.appendChild(s("line", { x1: 14.5, y1: 7, x2: 14.5, y2: 17, class: "ti-rule" }));
    if (part === "outstanding") {
      g.appendChild(s("rect", { x: 2.5, y: 7, width: 12, height: 10, rx: 1.5, class: "ti-on" }));
      g.appendChild(s("line", { x1: 15, y1: 8.5, x2: 21, y2: 15.5, class: "ti-strike" }));
    }
    if (part === "cost") {
      g.appendChild(s("rect", { x: 14.5, y: 18.6, width: 7, height: 2.4, rx: .8, class: "ti-on" }));
    }
    /* a split: the same block, cut into twice as many pieces, and no larger */
    if (part === "split") {
      [6.5, 10.5, 14.5, 18.5].forEach(function (x) {
        g.appendChild(s("line", { x1: x, y1: 7, x2: x, y2: 17, class: "ti-on-s" }));
      });
    }
    return g;
  };

  /* --- 19. MOVING INSIDE EQUITY (F04-07): the labels move, the total need not --- */
  F.move = function (part) {
    var g = root24("ti-move");
    g.appendChild(s("rect", { x: 2.5, y: 3, width: 19, height: 3, rx: 1,
                              class: cl(part, "open") }));
    g.appendChild(s("rect", { x: 2.5, y: 9.5, width: 8, height: 8, rx: 1,
                              class: cl(part, "re") }));
    g.appendChild(s("rect", { x: 13.5, y: 9.5, width: 8, height: 8, rx: 1,
                              class: cl(part, "cc") }));
    if (part === "re2cc") {
      g.appendChild(s("path", { d: "M 10.5 13.5 L 13.5 13.5", class: "ti-arrow" }));
      g.appendChild(s("rect", { x: 13.5, y: 9.5, width: 8, height: 8, rx: 1, class: "ti-on" }));
    }
    /* a property or liquidating dividend leaves the company altogether */
    if (part === "out" || part === "capital") {
      g.appendChild(s("path", { d: "M 12 17.5 L 12 21.5", class: "ti-arrow" }));
      g.appendChild(s("rect", { x: 2.5, y: 9.5, width: 8, height: 8, rx: 1,
                                class: part === "capital" ? "ti-off" : "ti-on" }));
      g.appendChild(s("rect", { x: 13.5, y: 9.5, width: 8, height: 8, rx: 1,
                                class: part === "capital" ? "ti-on" : "ti-off" }));
    }
    /* appropriated retained earnings stay inside: a box drawn within the box */
    if (part === "within") {
      g.appendChild(s("rect", { x: 4.5, y: 11.5, width: 4, height: 4, rx: .8, class: "ti-on" }));
    }
    return g;
  };

  /* --- 20. THE THREE ACTIVITIES (F05-03): three bars, one change in cash --- */
  F.three = function (part) {
    var g = root24("ti-three");
    g.appendChild(s("line", { x1: 2, y1: 18, x2: 22, y2: 18, class: "ti-rule" }));
    [["op", 3, 11], ["inv", 8, 7], ["fin", 13, 4]].forEach(function (b) {
      g.appendChild(s("rect", { x: b[1], y: 18 - b[2], width: 3.6, height: b[2], rx: .8,
                                class: cl(part, b[0]) }));
    });
    g.appendChild(s("rect", { x: 18, y: 8, width: 3.6, height: 10, rx: .8,
                              class: cl(part, "cash") }));
    /* a noncash deal is outside the body of the statement: dashed, off the baseline */
    if (part === "none") {
      g.appendChild(s("rect", { x: 3, y: 2, width: 12, height: 3.6, rx: .8, class: "ti-dash" }));
      g.appendChild(s("rect", { x: 3.6, y: 2.8, width: 10.8, height: 2, rx: .6, class: "ti-on" }));
    }
    return g;
  };

  /* --- 21. TWO ROUTES, ONE TOTAL (F05-07) --- */
  F.routes = function (part) {
    var g = root24("ti-routes");
    g.appendChild(s("rect", { x: 2.5, y: 3.5, width: 10, height: 5, rx: 1,
                              class: cl(part, "indirect") }));
    g.appendChild(s("rect", { x: 2.5, y: 15.5, width: 10, height: 5, rx: 1,
                              class: cl(part, "direct") }));
    g.appendChild(s("rect", { x: 16.5, y: 9.5, width: 5, height: 5, rx: 1, class: "ti-on" }));
    g.appendChild(s("path", { d: "M 12.5 6 L 16.5 11", class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 12.5 18 L 16.5 13", class: "ti-rule" }));
    return g;
  };

  /* =================================================================
   * FAMILIES 22 TO 40: CHAPTERS 6 TO 18
   *
   * Two hundred and four bridged terms in the rest of the book had no mark and fell
   * through to the typographic tier. They are not two hundred and four ideas: they fall
   * into nineteen shapes the author already draws - the aging ladder, the cost layers,
   * the floor-and-ceiling band, the influence spectrum, the five steps, the six
   * capitals - and a term's mark is its family with its own part lit, exactly as
   * families 1 to 21 work. Same ti-* classes, no new CSS.
   * ================================================================= */

  /* --- 22. THE AGING LADDER (F06-03): older buckets, higher loss rates --- */
  F.aging = function (part) {
    var g = root24("ti-aging");
    [["current", 3, 15], ["mid", 8, 11], ["old", 13, 7], ["oldest", 18, 4]]
      .forEach(function (b) {
        g.appendChild(s("rect", { x: b[1], y: 19 - b[2], width: 3.4, height: b[2],
                                  rx: .7, class: cl(part, b[0]) }));
      });
    g.appendChild(s("line", { x1: 2, y1: 19.6, x2: 22, y2: 19.6, class: "ti-rule" }));
    if (part === "allowance" || part === "expense") {
      g.appendChild(s("rect", { x: 3, y: 2, width: 18, height: 2.6, rx: .8,
                                class: "ti-on" }));
    }
    if (part === "writeoff") {
      g.appendChild(s("line", { x1: 17, y1: 6, x2: 22, y2: 13, class: "ti-strike" }));
    }
    return g;
  };

  /* --- 23. THE TRANSFER (F06-07): out to the factor, or only pledged --- */
  F.transfer = function (part) {
    var g = root24("ti-transfer");
    g.appendChild(s("rect", { x: 2, y: 8, width: 7, height: 8, rx: 1.2,
                              class: cl(part, "seller") }));
    g.appendChild(s("rect", { x: 15, y: 8, width: 7, height: 8, rx: 1.2,
                              class: cl(part, "factor") }));
    g.appendChild(s("path", { d: "M 9.4 12 L 14.6 12",
                              class: part === "sale" ? "ti-arrow" : "ti-rule" }));
    if (part === "borrow" || part === "pledge") {
      g.appendChild(s("path", { d: "M 14.6 12 L 9.4 12", class: "ti-arrow" }));
      g.appendChild(s("line", { x1: 12, y1: 4, x2: 12, y2: 8, class: "ti-dash" }));
    }
    if (part === "recourse") {
      g.appendChild(s("path", { d: "M 18.5 16 L 18.5 21", class: "ti-arrow" }));
    }
    if (part === "holdback") {
      g.appendChild(s("rect", { x: 15, y: 17.6, width: 7, height: 2.6, rx: .8,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 24. THE COST LAYERS (F07-04): FIFO takes the bottom, LIFO the top --- */
  F.layers = function (part) {
    var g = root24("ti-layers");
    [3, 7.5, 12, 16.5].forEach(function (y, i) {
      g.appendChild(s("rect", { x: 4, y: y, width: 16, height: 3.6, rx: .8,
                                class: (part === "lifo" && i === 0) ||
                                       (part === "fifo" && i === 3) ||
                                       part === "gas" ? "ti-on" : "ti-off" }));
    });
    if (part === "avg" || part === "moving") {
      g.appendChild(s("line", { x1: 2.5, y1: 11.8, x2: 21.5, y2: 11.8,
                                class: "ti-on-s" }));
    }
    if (part === "spec") {
      g.appendChild(s("circle", { cx: 12, cy: 9.3, r: 1.6, class: "ti-on" }));
    }
    if (part === "reserve") {
      g.appendChild(s("rect", { x: 4, y: 3, width: 16, height: 3.6, rx: .8,
                                class: "ti-on" }));
      g.appendChild(s("rect", { x: 4, y: 16.5, width: 16, height: 3.6, rx: .8,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 25. IN TRANSIT (F07-02): whose goods are they while they travel --- */
  F.ship = function (part) {
    var g = root24("ti-ship");
    g.appendChild(s("rect", { x: 1.5, y: 7, width: 5, height: 10, rx: 1,
                              class: cl(part, "seller") }));
    g.appendChild(s("rect", { x: 17.5, y: 7, width: 5, height: 10, rx: 1,
                              class: cl(part, "buyer") }));
    g.appendChild(s("line", { x1: 6.5, y1: 12, x2: 17.5, y2: 12, class: "ti-dash" }));
    var at = part === "shipping" ? 8 : (part === "destination" ? 16 : 12);
    g.appendChild(s("rect", { x: at - 1.8, y: 9.6, width: 3.6, height: 4.8, rx: .8,
                              class: "ti-on" }));
    return g;
  };

  /* --- 26. INTO THE COST, OR STRAIGHT TO EXPENSE (F07-03) --- */
  F.costin = function (part) {
    var g = root24("ti-costin");
    g.appendChild(s("rect", { x: 7, y: 11, width: 10, height: 9, rx: 1.2,
                              class: "ti-ring" }));
    g.appendChild(s("path", { d: "M 12 3 L 12 10.6",
                              class: part === "in" ? "ti-arrow" : "ti-rule" }));
    g.appendChild(s("path", { d: "M 15.5 6 L 21 6",
                              class: part === "out" ? "ti-arrow" : "ti-rule" }));
    g.appendChild(s("rect", { x: 8.6, y: 13, width: 6.8, height: 5, rx: .8,
                              class: part === "in" ? "ti-on" : "ti-off" }));
    return g;
  };

  /* --- 27. THE BAND (F08-04): market between a floor and a ceiling --- */
  F.band = function (part) {
    var g = root24("ti-band");
    g.appendChild(s("line", { x1: 4, y1: 4.5, x2: 20, y2: 4.5,
                              class: part === "ceiling" ? "ti-on-s" : "ti-rule" }));
    g.appendChild(s("line", { x1: 4, y1: 19.5, x2: 20, y2: 19.5,
                              class: part === "floor" ? "ti-on-s" : "ti-rule" }));
    g.appendChild(s("line", { x1: 12, y1: 4.5, x2: 12, y2: 19.5, class: "ti-dash" }));
    var y = part === "cost" ? 8 : (part === "below" ? 17 : 12);
    g.appendChild(s("circle", { cx: 12, cy: y, r: 2.6, class: "ti-on" }));
    if (part === "write") {
      g.appendChild(s("path", { d: "M 12 9 L 12 16", class: "ti-arrow" }));
    }
    return g;
  };

  /* --- 28. COST AND RETAIL (F08-06): two columns and the ratio between them --- */
  F.retail = function (part) {
    var g = root24("ti-retail");
    g.appendChild(s("rect", { x: 3, y: 6, width: 7, height: 14, rx: 1,
                              class: cl(part, "cost") }));
    g.appendChild(s("rect", { x: 14, y: 2, width: 7, height: 18, rx: 1,
                              class: cl(part, "retail") }));
    g.appendChild(s("path", { d: "M 10.4 11 L 13.6 11",
                              class: part === "ratio" ? "ti-arrow" : "ti-rule" }));
    if (part === "markup") {
      g.appendChild(s("rect", { x: 14, y: 2, width: 7, height: 3.4, rx: .8,
                                class: "ti-on" }));
    }
    if (part === "markdown" || part === "shrink") {
      g.appendChild(s("rect", { x: 14, y: 16.6, width: 7, height: 3.4, rx: .8,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 29. THREE BUCKETS (F09-02): trading, available-for-sale, held-to-maturity --- */
  F.bucket3 = function (part) {
    var g = root24("ti-bucket3");
    [["trading", 2.5], ["afs", 9], ["htm", 15.5]].forEach(function (b) {
      g.appendChild(s("rect", { x: b[1], y: 7, width: 6, height: 11, rx: 1.2,
                                class: cl(part, b[0]) }));
    });
    if (part === "fv") {
      g.appendChild(s("line", { x1: 2.5, y1: 4.5, x2: 15, y2: 4.5, class: "ti-on-s" }));
    }
    if (part === "amortized") {
      g.appendChild(s("line", { x1: 15.5, y1: 4.5, x2: 21.5, y2: 4.5,
                                class: "ti-on-s" }));
    }
    return g;
  };

  /* --- 30. THE INFLUENCE SPECTRUM (F09-06, F16-01) --- */
  F.influence = function (part) {
    var g = root24("ti-influence");
    g.appendChild(s("line", { x1: 2.5, y1: 15, x2: 21.5, y2: 15, class: "ti-rule" }));
    [["fv", 5], ["equity", 12], ["consol", 19]].forEach(function (p) {
      g.appendChild(s("circle", { cx: p[1], cy: 15, r: 2.4, class: cl(part, p[0]) }));
    });
    if (part === "nci") {
      g.appendChild(s("rect", { x: 16.4, y: 5, width: 5.2, height: 5, rx: .8,
                                class: "ti-on" }));
    }
    if (part === "vie") {
      g.appendChild(s("rect", { x: 16.4, y: 5, width: 5.2, height: 5, rx: .8,
                                class: "ti-dash" }));
      g.appendChild(s("circle", { cx: 19, cy: 7.5, r: 1.2, class: "ti-on" }));
    }
    return g;
  };

  /* --- 31. THE CURVE (F10-02): a carrying amount falling to its salvage --- */
  F.curve = function (part) {
    var g = root24("ti-curve");
    g.appendChild(s("line", { x1: 3, y1: 19, x2: 21, y2: 19, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 3, y1: 19, x2: 3, y2: 3, class: "ti-rule" }));
    var d = { sl: "M 3 4 L 20 16", ddb: "M 3 4 C 8 14, 12 16, 20 16.6",
              syd: "M 3 4 C 7 12, 13 15.6, 20 16.4",
              uop: "M 3 4 L 7 8 L 9 8 L 14 14 L 20 16",
              premium: "M 3 6 C 9 10, 14 12, 20 13",
              discount: "M 3 16 C 9 13, 14 11, 20 9" }[part] || "M 3 4 L 20 16";
    g.appendChild(s("path", { d: d, class: "ti-on-s" }));
    if (part === "salvage" || part === "carrying") {
      g.appendChild(s("line", { x1: 3, y1: 16, x2: 21, y2: 16, class: "ti-dash" }));
      g.appendChild(s("circle", { cx: 20, cy: 16, r: 1.8, class: "ti-on" }));
    }
    if (part === "base") {
      g.appendChild(s("rect", { x: 2, y: 4, width: 2.4, height: 12, rx: .6,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 32. THE IMPAIRMENT STEP (F10-08): a gate, then a drop --- */
  F.impair = function (part) {
    var g = root24("ti-impair");
    g.appendChild(s("rect", { x: 3, y: 4, width: 7, height: 16, rx: 1,
                              class: cl(part, "carrying") }));
    g.appendChild(s("rect", { x: 14, y: 11, width: 7, height: 9, rx: 1,
                              class: cl(part, "value") }));
    g.appendChild(s("path", { d: "M 10.4 8 L 13.6 11",
                              class: part === "loss" ? "ti-arrow" : "ti-rule" }));
    if (part === "test") {
      g.appendChild(s("line", { x1: 12, y1: 2.5, x2: 12, y2: 21.5, class: "ti-dash" }));
    }
    if (part === "group" || part === "unit") {
      g.appendChild(s("rect", { x: 2, y: 3, width: 20, height: 18, rx: 2,
                                class: "ti-ring" }));
    }
    if (part === "goodwill") {
      g.appendChild(s("rect", { x: 3, y: 4, width: 7, height: 4.4, rx: 1,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 33. ONE OUTFLOW, TWO DESTINATIONS (F10-01): capitalise or expense --- */
  F.spend = function (part) {
    var g = root24("ti-spend");
    g.appendChild(s("rect", { x: 9, y: 2, width: 6, height: 4, rx: 1,
                              class: "ti-ring" }));
    g.appendChild(s("path", { d: "M 10 6.5 L 6 11", class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 14 6.5 L 18 11", class: "ti-rule" }));
    g.appendChild(s("rect", { x: 2, y: 11.5, width: 8, height: 8, rx: 1,
                              class: cl(part, "cap") }));
    g.appendChild(s("rect", { x: 14, y: 11.5, width: 8, height: 8, rx: 1,
                              class: cl(part, "rev") }));
    if (part === "estimate") {
      g.appendChild(s("path", { d: "M 6 15.5 L 18 15.5", class: "ti-arrow" }));
    }
    return g;
  };

  /* --- 34. THE FIVE STEPS (F11-01) --- */
  F.steps5 = function (part) {
    var g = root24("ti-steps5");
    for (var i = 0; i < 5; i++) {
      g.appendChild(s("rect", { x: 3 + i * 3.7, y: 16 - i * 2.6, width: 2.8,
                                height: 4 + i * 2.6, rx: .7,
                                class: cl(part, "s" + (i + 1)) }));
    }
    g.appendChild(s("line", { x1: 2, y1: 20.4, x2: 22, y2: 20.4, class: "ti-rule" }));
    if (part === "over") {
      g.appendChild(s("path", { d: "M 3 3 L 21 3", class: "ti-arrow" }));
    }
    if (part === "point") {
      g.appendChild(s("circle", { cx: 20, cy: 3, r: 2, class: "ti-on" }));
    }
    return g;
  };

  /* --- 35. CURRENT, OR PUSHED OUT (F12-04) --- */
  F.clock = function (part) {
    var g = root24("ti-clock");
    g.appendChild(s("line", { x1: 2, y1: 15, x2: 22, y2: 15, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 12, y1: 8, x2: 12, y2: 20, class: "ti-dash" }));
    g.appendChild(s("rect", { x: 4, y: 10.6, width: 6, height: 4.4, rx: .8,
                              class: cl(part, "current") }));
    g.appendChild(s("rect", { x: 14, y: 10.6, width: 6, height: 4.4, rx: .8,
                              class: cl(part, "noncurrent") }));
    if (part === "refin") {
      g.appendChild(s("path", { d: "M 10.4 12.8 L 13.6 12.8", class: "ti-arrow" }));
    }
    if (part === "accrue") {
      g.appendChild(s("rect", { x: 4, y: 3, width: 16, height: 3.4, rx: .8,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 36. TWO SETS OF BOOKS (F13-01): book income and taxable income --- */
  F.twobooks = function (part) {
    var g = root24("ti-twobooks");
    g.appendChild(s("rect", { x: 2.5, y: 4, width: 8, height: 16, rx: 1.2,
                              class: cl(part, "book") }));
    g.appendChild(s("rect", { x: 13.5, y: 4, width: 8, height: 16, rx: 1.2,
                              class: cl(part, "tax") }));
    if (part === "temp") {
      g.appendChild(s("path", { d: "M 10.9 9 L 13.1 9", class: "ti-arrow" }));
      g.appendChild(s("path", { d: "M 13.1 15 L 10.9 15", class: "ti-arrow" }));
    }
    if (part === "perm") {
      g.appendChild(s("line", { x1: 12, y1: 6, x2: 12, y2: 18, class: "ti-strike" }));
    }
    if (part === "dtl") {
      g.appendChild(s("rect", { x: 13.5, y: 16.2, width: 8, height: 3.8, rx: 1,
                                class: "ti-on" }));
    }
    if (part === "dta") {
      g.appendChild(s("rect", { x: 2.5, y: 16.2, width: 8, height: 3.8, rx: 1,
                                class: "ti-on" }));
    }
    if (part === "allow") {
      g.appendChild(s("rect", { x: 2.5, y: 16.2, width: 8, height: 3.8, rx: 1,
                                class: "ti-on" }));
      g.appendChild(s("line", { x1: 3.5, y1: 18.1, x2: 9.5, y2: 18.1,
                                class: "ti-strike" }));
    }
    return g;
  };

  /* --- 37. THE RIGHT OF USE (F14-01): an asset over a liability --- */
  F.rou = function (part) {
    var g = root24("ti-rou");
    g.appendChild(s("rect", { x: 3, y: 3, width: 18, height: 7, rx: 1.2,
                              class: cl(part, "asset") }));
    g.appendChild(s("rect", { x: 3, y: 13, width: 18, height: 7, rx: 1.2,
                              class: cl(part, "liability") }));
    g.appendChild(s("line", { x1: 2, y1: 11.5, x2: 22, y2: 11.5, class: "ti-rule" }));
    if (part === "finance") {
      g.appendChild(s("path", { d: "M 5 9 L 11 4.5", class: "ti-arrow" }));
    }
    if (part === "operating") {
      g.appendChild(s("line", { x1: 5, y1: 6.5, x2: 19, y2: 6.5, class: "ti-on-s" }));
    }
    if (part === "short") {
      g.appendChild(s("rect", { x: 3, y: 3, width: 5, height: 7, rx: 1.2,
                                class: "ti-on" }));
    }
    return g;
  };

  /* --- 38. REVALUED UPWARD (F17-04): the IFRS-only step --- */
  F.revalue = function (part) {
    var g = root24("ti-revalue");
    g.appendChild(s("line", { x1: 2, y1: 20, x2: 22, y2: 20, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 4, y: 11, width: 7, height: 9, rx: 1,
                              class: cl(part, "cost") }));
    g.appendChild(s("rect", { x: 14, y: 5, width: 7, height: 15, rx: 1,
                              class: cl(part, "revalued") }));
    g.appendChild(s("path", { d: "M 11.4 10 L 13.6 7",
                              class: part === "surplus" ? "ti-arrow" : "ti-rule" }));
    if (part === "surplus") {
      g.appendChild(s("rect", { x: 14, y: 5, width: 7, height: 4, rx: 1,
                                class: "ti-on" }));
    }
    if (part === "later") {
      g.appendChild(s("rect", { x: 14, y: 5, width: 7, height: 4, rx: 1,
                                class: "ti-dash" }));
    }
    return g;
  };

  /* --- 39. UP AND DOWN THE GROUP (F16-07) --- */
  F.flowsplit = function (part) {
    var g = root24("ti-flowsplit");
    g.appendChild(s("rect", { x: 7, y: 2, width: 10, height: 6, rx: 1.2,
                              class: "ti-ring" }));
    g.appendChild(s("rect", { x: 7, y: 16, width: 10, height: 6, rx: 1.2,
                              class: "ti-ring" }));
    g.appendChild(s("path", { d: "M 9.5 8.5 L 9.5 15.5",
                              class: part === "down" ? "ti-arrow" : "ti-rule" }));
    g.appendChild(s("path", { d: "M 14.5 15.5 L 14.5 8.5",
                              class: part === "up" ? "ti-arrow" : "ti-rule" }));
    if (part === "elim") {
      g.appendChild(s("line", { x1: 5, y1: 12, x2: 19, y2: 12, class: "ti-strike" }));
    }
    if (part === "profit") {
      g.appendChild(s("circle", { cx: 12, cy: 12, r: 2.2, class: "ti-on" }));
    }
    return g;
  };

  /* --- 40. THE SIX CAPITALS (F18-04) --- */
  F.capitals6 = function (part) {
    var g = root24("ti-capitals6");
    var at = { fin: 0, man: 1, intel: 2, human: 3, social: 4, natural: 5 }[part];
    for (var i = 0; i < 6; i++) {
      var x = 2.5 + (i % 3) * 3.4, y = i < 3 ? 3 : 9;
      g.appendChild(s("rect", { x: x, y: y, width: 2.8, height: 4.4, rx: .7,
                                class: (at === i || part === "all") ? "ti-on"
                                                                    : "ti-off" }));
    }
    g.appendChild(s("rect", { x: 14, y: 5, width: 7, height: 7, rx: 1.2,
                              class: part === "process" ? "ti-on" : "ti-ring" }));
    g.appendChild(s("path", { d: "M 12.6 8.5 L 13.8 8.5", class: "ti-rule" }));
    g.appendChild(s("rect", { x: 4, y: 16.5, width: 16, height: 4, rx: 1,
                              class: part === "out" ? "ti-on" : "ti-off" }));
    g.appendChild(s("path", { d: "M 17 12.5 L 17 16", class: "ti-rule" }));
    return g;
  };

  /* --- 14. TIER 3: a typographic mark, for a word with no geometry --- */
  F.type = function (part, term) {
    var g = root24("ti-type");
    g.appendChild(s("rect", { x: 2.5, y: 2.5, width: 19, height: 19, rx: 4, class: "ti-ring" }));
    var t = s("text", { x: 12, y: 16.6, class: "ti-letter" });
    t.textContent = String(term || "?").trim().charAt(0).toUpperCase() || "?";
    g.appendChild(t);
    return g;
  };

  /* =================================================================
   * THE REGISTRY. Every bridged term, with its family, the part of that
   * family it lights, and its tier. Written out rather than matched on
   * keywords: "current ratio" and "current assets" share a word and not a
   * shape, and a rule clever enough to tell them apart would be a rule
   * nobody could check. One line each, so it can be read and disputed.
   * ================================================================= */
  var R = {};
  function reg(tier, family, part, terms) {
    terms.forEach(function (t) { R[t] = { tier: tier, f: family, p: part }; });
  }

  /* --- the beam --- */
  reg(1, "equation", "all", ["accounting equation"]);
  reg(1, "equation", "a", ["asset", "inventory", "accounts receivable", "prepaid expense"]);
  reg(1, "equation", "l", ["liability", "accounts payable", "notes payable",
                           "contract liability (unearned revenue)", "accrued expense"]);
  reg(1, "equation", "cc", ["contributed capital", "common stock", "additional paid-in capital",
                            "par value", "investments by owners"]);
  reg(1, "equation", "re", ["retained earnings", "dividend", "distributions to owners"]);
  reg(1, "equation", "all", ["equity"]);

  /* --- the T --- */
  reg(1, "tshape", "debit", ["debit"]);
  reg(1, "tshape", "credit", ["credit"]);
  reg(1, "tshape", "all", ["t-account", "double-entry system", "normal balance",
                           "journal entry", "trial balance"]);
  reg(1, "tshape", "contra", ["contra account", "accumulated depreciation",
                              "allowance for credit losses"]);

  /* --- the bands --- */
  reg(1, "bands", "all", ["balance sheet", "classified balance sheet",
                          "statement of financial position"]);
  reg(1, "bands", "ca", ["current assets"]);
  reg(1, "bands", "cl", ["current liabilities"]);
  /* Restricted cash is the chapter's own warning that an asset which looks current may
     not be: it belongs in the non-current band, not among the plain assets. */
  reg(1, "bands", "nca", ["restricted cash"]);

  /* --- the timeline --- */
  reg(1, "timeline", "earn", ["accrual basis", "matching principle", "revenue", "expense",
                              "cost of goods sold"]);
  reg(1, "timeline", "receive", ["cash basis"]);
  reg(1, "timeline", "accrue", ["accrued revenue"]);
  /* Subsequent events are about WHEN, not where: an event after the balance-sheet date
     but before the statements are issued. It had been lit as a non-current asset band,
     which says something the chapter does not. */
  reg(1, "timeline", "receive", ["subsequent events"]);

  /* --- the dial --- */
  reg(1, "gauge", "wc", ["working capital"]);
  reg(1, "gauge", "ratio", ["current ratio"]);
  reg(1, "gauge", "liq", ["liquidity"]);
  reg(1, "gauge", "sol", ["solvency"]);
  reg(1, "gauge", "flex", ["financial flexibility"]);

  /* --- the cycle --- */
  reg(1, "cycle", "all", ["operating cycle"]);

  /* --- the statements --- */
  reg(1, "doc", "set", ["financial statements", "general-purpose financial statements"]);
  reg(1, "doc", "is", ["income statement", "net income", "gross profit", "operating income",
                       "gain", "loss"]);
  reg(1, "doc", "cf", ["statement of cash flows"]);
  reg(1, "doc", "sce", ["statement of changes in equity", "comprehensive income"]);
  reg(1, "doc", "notes", ["disclose"]);

  /* --- the readers --- */
  reg(1, "people", "inv", ["primary users"]);

  /* --- the five verbs --- */
  reg(1, "verbs", "record", ["record"]);
  reg(1, "verbs", "measure", ["measure"]);
  reg(1, "verbs", "recognize", ["recognize"]);
  reg(1, "verbs", "present", ["present"]);

  /* --- the contingency ladder --- */
  reg(1, "ladder", "prob", ["loss contingency"]);

  /* --- the split --- */
  reg(1, "split", "cur", ["current portion of long-term debt"]);
  reg(1, "split", "all", ["callable debt", "refinancing", "waiver", "grace period",
                          "covenant", "subjective acceleration clause"]);

  /* --- the rulebook --- */
  reg(1, "book", "us", ["u.s. gaap", "fasb", "sec", "pcaob",
                        "accounting standards codification (asc)",
                        "accounting standards update (asu)"]);
  reg(1, "book", "intl", ["ifrs", "iasb"]);
  reg(1, "book", "all", ["conceptual framework"]);

  /* --- tier 2: a relation the author states, with no shape of its own --- */
  reg(2, "relation", "a", ["relevance", "materiality", "predictive value",
                           "confirmatory value"]);
  reg(2, "relation", "b", ["faithful representation"]);
  reg(2, "relation", "both", ["comparability", "verifiability", "timeliness",
                              "understandability", "cost constraint", "stewardship",
                              "right of setoff"]);

  /* --- Chapter 3: the income statement --- */
  reg(1, "steps", "all", ["multi-step income statement"]);
  reg(1, "steps", "net", ["single-step income statement"]);
  reg(1, "steps", "op", ["function of expense"]);
  reg(1, "steps", "other", ["other income and expense"]);
  reg(1, "line", "above", ["income from continuing operations"]);
  reg(1, "line", "unusual", ["unusual or infrequent item"]);
  reg(1, "line", "below", ["discontinued operation"]);
  reg(1, "line", "component", ["component of an entity"]);
  reg(1, "line", "tax", ["intraperiod tax allocation"]);
  reg(1, "gauge", "eps", ["earnings per share (eps)"]);
  reg(1, "oci", "oci", ["other comprehensive income (oci)"]);
  reg(1, "oci", "aoci", ["accumulated other comprehensive income (aoci)"]);
  reg(1, "oci", "recycle", ["reclassification adjustment"]);

  /* --- Chapter 4: equity --- */
  reg(1, "equation", "cc", ["preferred stock"]);
  reg(1, "shares", "issued", ["issued shares"]);
  reg(1, "shares", "outstanding", ["outstanding shares"]);
  reg(1, "shares", "treasury", ["treasury stock"]);
  reg(1, "shares", "split", ["stock split"]);
  reg(1, "dates", "decl", ["declaration date"]);
  reg(1, "dates", "rec", ["date of record"]);
  reg(1, "move", "re2cc", ["stock dividend"]);
  reg(1, "move", "out", ["property dividend"]);
  reg(1, "move", "capital", ["liquidating dividend"]);
  reg(1, "move", "within", ["appropriated retained earnings"]);
  reg(1, "move", "open", ["prior-period adjustment"]);

  /* --- Chapter 5: cash flows --- */
  reg(1, "three", "cash", ["cash equivalents"]);
  reg(1, "three", "op", ["operating activities"]);
  reg(1, "three", "inv", ["investing activities"]);
  reg(1, "three", "fin", ["financing activities"]);
  reg(1, "three", "none", ["noncash investing and financing activities"]);
  reg(1, "routes", "indirect", ["indirect method"]);
  reg(1, "routes", "direct", ["direct method"]);

  /* --- tier 2 from chapters 3 and 4: a relation, not a shape of its own --- */
  reg(2, "line", "shift", ["strategic shift"]);
  reg(2, "shares", "cost", ["cost method"]);

  /* --- Chapter 6: receivables --- */
  reg(1, "aging", "all", ["aging schedule"]);
  reg(1, "aging", "allowance", ["current expected credit losses (cecl)"]);
  reg(1, "aging", "expense", ["credit loss expense"]);
  reg(1, "aging", "writeoff", ["write-off", "direct write-off method"]);
  reg(1, "aging", "oldest", ["recovery"]);
  reg(1, "transfer", "sale", ["factoring", "factor"]);
  reg(1, "transfer", "borrow", ["secured borrowing"]);
  reg(1, "transfer", "pledge", ["pledging"]);
  reg(1, "transfer", "recourse", ["recourse", "recourse liability"]);
  reg(1, "transfer", "holdback", ["holdback (due from factor)"]);
  reg(2, "transfer", "factor", ["effective control", "legal isolation"]);
  reg(1, "timeline", "earn", ["contract asset"]);
  reg(1, "timeline", "receive", ["cash discount", "notes receivable"]);
  reg(1, "curve", "carrying", ["amortized cost"]);

  /* --- Chapter 7: inventory, goods and cost flows --- */
  reg(1, "layers", "gas", ["goods available for sale"]);
  reg(1, "layers", "fifo", ["fifo (first-in, first-out)"]);
  reg(1, "layers", "lifo", ["lifo (last-in, first-out)", "lifo liquidation"]);
  reg(1, "layers", "avg", ["weighted-average cost"]);
  reg(1, "layers", "moving", ["moving average"]);
  reg(1, "layers", "spec", ["specific identification"]);
  reg(1, "layers", "reserve", ["lifo reserve"]);
  reg(2, "layers", "all", ["cost flow assumption", "lifo conformity rule"]);
  reg(1, "ship", "transit", ["goods in transit"]);
  reg(1, "ship", "shipping", ["fob shipping point"]);
  reg(1, "ship", "destination", ["fob destination"]);
  reg(1, "ship", "seller", ["consignor", "consignment"]);
  reg(1, "ship", "buyer", ["consignee"]);
  reg(2, "ship", "transit", ["physical count"]);
  reg(1, "costin", "in", ["inventoriable cost", "freight-in"]);
  reg(1, "costin", "out", ["period cost", "freight-out", "abnormal waste"]);
  reg(2, "costin", "in", ["purchase discount", "normal capacity"]);
  reg(1, "timeline", "defer", ["counterbalancing error"]);
  reg(1, "doc", "is", ["periodic inventory system"]);
  reg(1, "doc", "set", ["perpetual inventory system"]);

  /* --- Chapter 8: measurement tests and retail estimates --- */
  reg(1, "band", "ceiling", ["ceiling", "net realizable value (nrv)"]);
  reg(1, "band", "floor", ["floor", "normal profit margin"]);
  reg(1, "band", "market", ["replacement cost", "lower of cost or market (lcm)"]);
  reg(1, "band", "cost", ["lower of cost and net realizable value (lcnrv)"]);
  reg(1, "band", "write", ["write-down"]);
  reg(2, "band", "cost", ["item-by-item basis", "purchase commitment"]);
  reg(1, "retail", "ratio", ["cost-to-retail ratio", "retail inventory method"]);
  reg(1, "retail", "cost", ["conventional retail method", "gross profit method"]);
  reg(1, "retail", "markup", ["markup"]);
  reg(1, "retail", "markdown", ["markdown"]);
  reg(1, "retail", "shrink", ["shrinkage"]);

  /* --- Chapter 9: investments --- */
  reg(1, "bucket3", "trading", ["trading securities"]);
  reg(1, "bucket3", "afs", ["available-for-sale (afs) securities"]);
  reg(1, "bucket3", "htm", ["held-to-maturity (htm) securities"]);
  reg(1, "bucket3", "fv", ["fair value", "fair value option",
                           "measurement alternative"]);
  reg(1, "bucket3", "all", ["debt security", "equity security"]);
  reg(1, "oci", "oci", ["unrealized holding gain or loss"]);
  reg(1, "curve", "premium", ["bond premium"]);
  reg(1, "curve", "discount", ["bond discount"]);
  reg(2, "curve", "carrying", ["effective-interest method"]);
  reg(1, "influence", "equity", ["equity method", "significant influence"]);
  reg(2, "influence", "equity", ["investee", "basis difference"]);

  /* --- Chapter 10: long-lived assets --- */
  reg(1, "spend", "cap", ["property, plant and equipment (pp&e)",
                          "capital expenditure", "capitalized interest"]);
  reg(1, "spend", "rev", ["revenue expenditure", "research and development (r&d)"]);
  reg(1, "spend", "estimate", ["change in accounting estimate"]);
  reg(2, "spend", "cap", ["involuntary conversion", "commercial substance"]);
  reg(1, "curve", "base", ["depreciable base"]);
  reg(1, "curve", "salvage", ["salvage value"]);
  reg(1, "curve", "carrying", ["carrying amount"]);
  reg(1, "curve", "sl", ["straight-line method", "useful life", "amortization"]);
  reg(1, "curve", "ddb", ["double-declining-balance method"]);
  reg(1, "curve", "syd", ["sum-of-the-years'-digits method"]);
  reg(1, "curve", "uop", ["units-of-production method"]);
  reg(1, "impair", "loss", ["impairment"]);
  reg(1, "impair", "test", ["recoverability test"]);
  reg(1, "impair", "goodwill", ["goodwill"]);
  reg(1, "impair", "group", ["asset group"]);
  reg(1, "impair", "unit", ["reporting unit", "indefinite-lived intangible asset"]);
  reg(1, "impair", "value", ["held for sale"]);

  /* --- Chapter 11: revenue --- */
  reg(1, "steps5", "s1", ["performance obligation"]);
  reg(1, "steps5", "s3", ["transaction price", "variable consideration"]);
  reg(1, "steps5", "s4", ["standalone selling price"]);
  reg(1, "steps5", "over", ["over time", "input method", "output method"]);
  reg(1, "steps5", "point", ["point in time"]);
  reg(1, "steps5", "s5", ["principal", "agent"]);
  reg(2, "steps5", "s3", ["constraint on variable consideration",
                          "significant financing component",
                          "consideration payable to a customer", "breakage"]);
  reg(2, "steps5", "s2", ["material right", "bill-and-hold arrangement"]);
  reg(1, "clock", "accrue", ["refund liability",
                             "incremental costs of obtaining a contract"]);

  /* --- Chapter 12: current liabilities and warranties --- */
  reg(1, "clock", "current", ["short-term obligation", "commercial paper"]);
  reg(1, "clock", "refin", ["qualifying financing agreement"]);
  reg(1, "clock", "accrue", ["assurance-type warranty", "warranty liability",
                             "compensated absences"]);
  reg(1, "clock", "noncurrent", ["service-type warranty"]);
  reg(2, "clock", "current", ["withholding", "payroll taxes", "sales tax payable"]);

  /* --- Chapter 13: income taxes --- */
  reg(1, "twobooks", "tax", ["taxable income", "current tax expense", "tax basis"]);
  reg(1, "twobooks", "temp", ["temporary difference", "interperiod tax allocation"]);
  reg(1, "twobooks", "perm", ["permanent difference"]);
  reg(1, "twobooks", "dtl", ["deferred tax liability", "taxable temporary difference"]);
  reg(1, "twobooks", "dta", ["deferred tax asset", "deductible temporary difference",
                             "net operating loss carryforward"]);
  reg(1, "twobooks", "allow", ["valuation allowance"]);
  reg(1, "twobooks", "book", ["deferred tax expense", "effective tax rate"]);
  reg(2, "twobooks", "tax", ["enacted tax rate", "uncertain tax position"]);

  /* --- Chapter 14: leases --- */
  reg(1, "rou", "asset", ["right-of-use asset"]);
  reg(1, "rou", "liability", ["lease liability"]);
  reg(1, "rou", "finance", ["finance lease"]);
  reg(1, "rou", "operating", ["operating lease"]);
  reg(1, "rou", "short", ["short-term lease"]);
  reg(1, "rou", "all", ["lease"]);
  reg(2, "rou", "liability", ["incremental borrowing rate", "lease term",
                              "residual value guarantee", "sale and leaseback"]);
  reg(2, "rou", "asset", ["lessee", "lessor"]);

  /* --- Chapter 15: measuring income --- */
  reg(1, "impair", "value", ["disposal group", "fair value less cost to sell"]);
  reg(1, "oci", "oci", ["holding gain or loss"]);
  reg(2, "costin", "out", ["systematic and rational allocation"]);

  /* --- Chapter 16: consolidation --- */
  reg(1, "influence", "consol", ["consolidated financial statements",
                                 "controlling financial interest"]);
  reg(1, "influence", "nci", ["noncontrolling interest"]);
  reg(1, "influence", "vie", ["variable interest entity", "primary beneficiary"]);
  reg(1, "influence", "fv", ["proportionate consolidation"]);
  reg(2, "influence", "consol", ["parent", "subsidiary", "joint venture",
                                 "acquisition method"]);
  reg(1, "flowsplit", "down", ["downstream sale"]);
  reg(1, "flowsplit", "up", ["upstream sale"]);
  reg(1, "flowsplit", "elim", ["intercompany transaction"]);
  reg(1, "flowsplit", "profit", ["unrealized profit"]);

  /* --- Chapter 17: the six tested differences --- */
  reg(1, "revalue", "revalued", ["revaluation model"]);
  reg(1, "revalue", "surplus", ["revaluation surplus"]);
  reg(1, "revalue", "later", ["development costs"]);
  reg(1, "impair", "value", ["value in use", "recoverable amount",
                             "fair value less costs of disposal"]);
  reg(1, "impair", "unit", ["cash-generating unit"]);
  reg(1, "curve", "sl", ["component depreciation"]);
  reg(2, "revalue", "cost", ["prior service cost", "remeasurements", "graded vesting",
                             "defined benefit plan"]);

  /* --- Chapter 18: integrated reporting --- */
  reg(1, "capitals6", "all", ["capitals", "integrated reporting"]);
  reg(1, "capitals6", "fin", ["financial capital"]);
  reg(1, "capitals6", "man", ["manufactured capital"]);
  reg(1, "capitals6", "intel", ["intellectual capital"]);
  reg(1, "capitals6", "human", ["human capital"]);
  reg(1, "capitals6", "social", ["social and relationship capital"]);
  reg(1, "capitals6", "natural", ["natural capital"]);
  reg(1, "capitals6", "process", ["value creation process", "integrated thinking"]);
  reg(1, "capitals6", "out", ["outputs", "outcomes"]);
  reg(1, "doc", "notes", ["integrated report"]);
  reg(2, "verbs", "present", ["content elements", "guiding principles"]);

  /* =================================================================
   * Anything not above is tier 3 and gets a typographic mark. That is a
   * statement about the VOCABULARY, not a gap in this file: some of these
   * words name an act or a quality with nothing to draw.
   * ================================================================= */

  function key(en) { return String(en || "").trim().toLowerCase(); }

  function tier(en) {
    var r = R[key(en)];
    return r ? r.tier : 3;
  }

  function icon(en) {
    var k = key(en);
    if (!k) return null;
    var r = R[k];
    var g = r ? F[r.f](r.p) : F.type(null, k);
    g.setAttribute("data-term", k);
    g.setAttribute("data-tier", String(r ? r.tier : 3));
    return g;
  }

  /* The census the gate reads: how many terms sit in each tier, and which words are
     tier 3, so the list can be argued with instead of discovered. */
  function census(terms) {
    var out = { 1: 0, 2: 0, 3: 0, tier3: [], total: 0 };
    (terms || []).forEach(function (t) {
      var en = typeof t === "string" ? t : t.en;
      if (!en) return;
      out.total++;
      var tr = tier(en);
      out[tr]++;
      if (tr === 3) out.tier3.push(key(en));
    });
    return out;
  }

  root.Icons = { icon: icon, tier: tier, census: census,
                 families: Object.keys(F),
                 get registered() { return Object.keys(R).length; } };
})(window, document);
