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
  /* =================================================================
   * FAMILIES 41 TO 65: BOOK 2, COST MANAGEMENT
   *
   * Book 2's 166 new bridged terms are cost accounting, and they are not 166 ideas
   * either. They are the same two dozen shapes the author draws over and over: the
   * cost line against a volume axis, the three inventory boxes, the overhead rate as
   * a fraction, the pipe that splits at the split-off point, the four-level hierarchy,
   * the scatter with a line through it. So each family below is one of those drawings
   * and a term's mark is that drawing with its own part lit - families 1 to 40 exactly.
   *
   * Same ti-* classes and the same 24x24 box, so there is no new CSS and nothing new
   * to load. Nothing here is referenced by any Book 1 term, so Book 1's pages render
   * byte for byte as before; this file stays ONE shared renderer rather than becoming
   * two that drift.
   * ================================================================= */

  /* --- 41. THE COST LINE: what happens to cost as volume rises --- */
  F.costbehave = function (part) {
    var g = root24("ti-cb");
    g.appendChild(s("line", { x1: 4, y1: 20, x2: 21, y2: 20, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 4, y1: 20, x2: 4, y2: 4, class: "ti-rule" }));
    if (part === "step") {
      g.appendChild(s("path", { d: "M 4 17 H 9 V 13 H 14 V 9 H 19 V 5", class: "ti-on" }));
      return g;
    }
    if (part === "range") {
      g.appendChild(s("rect", { x: 8, y: 4, width: 8, height: 16, rx: 1, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 4 18 L 21 7", class: "ti-off" }));
      return g;
    }
    /* fixed is flat, variable rises from the origin, mixed rises from an intercept */
    g.appendChild(s("line", { x1: 4, y1: 9, x2: 21, y2: 9, class: cl(part, "fixed") }));
    g.appendChild(s("path", { d: "M 4 20 L 21 6", class: cl(part, "variable") }));
    g.appendChild(s("path", { d: "M 4 15 L 21 6", class: cl(part, "mixed") }));
    if (part === "mixed") {
      g.appendChild(s("circle", { cx: 4, cy: 15, r: 1.4, class: "ti-on" }));
    }
    return g;
  };

  /* --- 42. THE POOL, THE DRIVER AND THE OBJECT: how a cost gets somewhere --- */
  F.costobj = function (part) {
    var g = root24("ti-co");
    g.appendChild(s("path", { d: "M 3 4 H 10 L 9 11 H 4 Z", class: cl(part, "pool") }));
    g.appendChild(s("path", { d: "M 9.5 7.5 H 15.5", class: cl(part, "driver") }));
    g.appendChild(s("path", { d: "M 14 5.8 L 16.5 7.5 L 14 9.2 Z", class: cl(part, "driver") }));
    g.appendChild(s("rect", { x: 16, y: 4, width: 5, height: 7, rx: 1, class: cl(part, "object") }));
    /* the base is the measured thing the pool is divided by, drawn as its scale */
    g.appendChild(s("line", { x1: 3, y1: 16, x2: 21, y2: 16, class: cl(part, "base") }));
    [5.5, 9, 12.5, 16, 19.5].forEach(function (x) {
      g.appendChild(s("line", { x1: x, y1: 16, x2: x, y2: 19, class: cl(part, "base") }));
    });
    return g;
  };

  /* --- 43. THE THREE BOXES: materials, in process, finished, then out --- */
  F.flow3 = function (part) {
    var g = root24("ti-f3");
    g.appendChild(s("rect", { x: 2, y: 5, width: 5, height: 6, rx: 1, class: cl(part, "rm") }));
    g.appendChild(s("rect", { x: 9.5, y: 5, width: 5, height: 6, rx: 1, class: cl(part, "wip") }));
    g.appendChild(s("rect", { x: 17, y: 5, width: 5, height: 6, rx: 1, class: cl(part, "fg") }));
    g.appendChild(s("path", { d: "M 7.2 8 H 9.3 M 14.7 8 H 16.8", class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 19.5 11.3 V 15", class: cl(part, "cogs") }));
    g.appendChild(s("path", { d: "M 17.9 13.8 L 19.5 16.3 L 21.1 13.8 Z", class: cl(part, "cogs") }));
    g.appendChild(s("path", { d: "M 12 11.3 V 15", class: cl(part, "cogm") }));
    g.appendChild(s("path", { d: "M 10.4 13.8 L 12 16.3 L 13.6 13.8 Z", class: cl(part, "cogm") }));
    return g;
  };

  /* --- 44. THE THREE BARS AND THE TWO BRACKETS: prime is the first two, conversion
         the last two, and the middle bar belongs to both --- */
  F.dmdloh = function (part) {
    var g = root24("ti-dlo");
    g.appendChild(s("rect", { x: 3, y: 6, width: 4.5, height: 9, rx: 1, class: cl(part, "dm") }));
    g.appendChild(s("rect", { x: 9.5, y: 6, width: 4.5, height: 9, rx: 1, class: cl(part, "dl") }));
    g.appendChild(s("rect", { x: 16, y: 6, width: 4.5, height: 9, rx: 1, class: cl(part, "oh") }));
    if (part === "prime") {
      g.appendChild(s("path", { d: "M 3 18 V 20 H 14 V 18", class: "ti-on" }));
      g.appendChild(s("rect", { x: 3, y: 6, width: 4.5, height: 9, rx: 1, class: "ti-on" }));
      g.appendChild(s("rect", { x: 9.5, y: 6, width: 4.5, height: 9, rx: 1, class: "ti-on" }));
    }
    if (part === "conv") {
      g.appendChild(s("path", { d: "M 9.5 18 V 20 H 20.5 V 18", class: "ti-on" }));
      g.appendChild(s("rect", { x: 9.5, y: 6, width: 4.5, height: 9, rx: 1, class: "ti-on" }));
      g.appendChild(s("rect", { x: 16, y: 6, width: 4.5, height: 9, rx: 1, class: "ti-on" }));
    }
    if (part === "indirect") {
      g.appendChild(s("line", { x1: 16, y1: 10.5, x2: 20.5, y2: 10.5, class: "ti-dash" }));
    }
    return g;
  };

  /* --- 45. THE RATE: a budgeted pool over a denominator level --- */
  F.ohrate = function (part) {
    var g = root24("ti-rate");
    g.appendChild(s("rect", { x: 5, y: 3.5, width: 14, height: 5, rx: 1, class: cl(part, "num") }));
    g.appendChild(s("line", { x1: 3, y1: 11.5, x2: 21, y2: 11.5, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 5, y: 14.5, width: 14, height: 5, rx: 1, class: cl(part, "den") }));
    if (part === "plant") {
      g.appendChild(s("rect", { x: 5, y: 14.5, width: 14, height: 5, rx: 1, class: "ti-on" }));
    }
    if (part === "dept") {
      /* one rate per department: the denominator is cut into three */
      g.appendChild(s("line", { x1: 9.7, y1: 14.5, x2: 9.7, y2: 19.5, class: "ti-on" }));
      g.appendChild(s("line", { x1: 14.3, y1: 14.5, x2: 14.3, y2: 19.5, class: "ti-on" }));
    }
    return g;
  };

  /* --- 46. APPLIED AGAINST ACTUAL: the gap, and which way it falls --- */
  F.ohvar = function (part) {
    var g = root24("ti-ohv");
    g.appendChild(s("line", { x1: 3, y1: 20, x2: 21, y2: 20, class: "ti-rule" }));
    var ap = part === "over" ? 5 : (part === "under" ? 12 : 8);
    g.appendChild(s("rect", { x: 5, y: ap, width: 6, height: 20 - ap, rx: 1,
                              class: cl(part, "applied") }));
    g.appendChild(s("rect", { x: 13, y: 8, width: 6, height: 12, rx: 1,
                              class: cl(part, "actual") }));
    if (part === "over" || part === "under") {
      g.appendChild(s("line", { x1: 5, y1: ap, x2: 19, y2: ap, class: "ti-dash" }));
      g.appendChild(s("rect", { x: 13, y: Math.min(ap, 8), width: 6,
                                height: Math.abs(8 - ap), rx: 0.5, class: "ti-on" }));
    }
    if (part === "prorate") {
      g.appendChild(s("path", { d: "M 11 10 H 13 M 11 14 H 13 M 11 18 H 13", class: "ti-on" }));
    }
    if (part === "pvv") {
      g.appendChild(s("line", { x1: 3, y1: 8, x2: 21, y2: 8, class: "ti-on" }));
    }
    return g;
  };

  /* --- 47. THE JOB CARD: one job, its three costs, and the ledger behind it --- */
  F.jobsheet = function (part) {
    var g = root24("ti-job");
    g.appendChild(s("rect", { x: 3, y: 3, width: 14, height: 18, rx: 1.5,
                              class: cl(part, "sheet") }));
    g.appendChild(s("line", { x1: 5.5, y1: 8, x2: 14.5, y2: 8, class: cl(part, "mat") }));
    g.appendChild(s("line", { x1: 5.5, y1: 12, x2: 14.5, y2: 12, class: cl(part, "labor") }));
    g.appendChild(s("line", { x1: 5.5, y1: 16, x2: 14.5, y2: 16, class: cl(part, "oh") }));
    /* the subsidiary card behind, and the control account that totals them */
    g.appendChild(s("path", { d: "M 17 6 H 20.5 V 21 H 17", class: cl(part, "sub") }));
    if (part === "control") {
      g.appendChild(s("rect", { x: 3, y: 3, width: 14, height: 18, rx: 1.5, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 17 6 H 20.5 V 21 H 17", class: "ti-on" }));
    }
    return g;
  };

  /* --- 48. PART OF A UNIT IS STILL A COST: the equivalent-unit box --- */
  F.eunits = function (part) {
    var g = root24("ti-eu");
    g.appendChild(s("rect", { x: 3, y: 6, width: 8, height: 12, rx: 1, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 3, y: 11, width: 8, height: 7, rx: 1,
                              class: cl(part, "partial") }));
    g.appendChild(s("rect", { x: 13, y: 6, width: 8, height: 12, rx: 1,
                              class: cl(part, "whole") }));
    if (part === "transin") {
      g.appendChild(s("path", { d: "M 11.2 12 H 12.8", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 11.6 10.4 L 13.4 12 L 11.6 13.6 Z", class: "ti-on" }));
    }
    if (part === "report") {
      g.appendChild(s("line", { x1: 3, y1: 20.5, x2: 21, y2: 20.5, class: "ti-on" }));
    }
    return g;
  };

  /* --- 49. THE INSPECTION POINT: good units go on, the rest are sorted --- */
  F.spoil = function (part) {
    var g = root24("ti-sp");
    g.appendChild(s("line", { x1: 2, y1: 9, x2: 22, y2: 9, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 12, y1: 4, x2: 12, y2: 9, class: cl(part, "point") }));
    g.appendChild(s("circle", { cx: 12, cy: 4, r: 1.6, class: cl(part, "point") }));
    g.appendChild(s("rect", { x: 17, y: 5.5, width: 4.5, height: 3, rx: 0.8,
                              class: cl(part, "good") }));
    /* three bins under the line: expected loss, unexpected loss, and what is reworked */
    g.appendChild(s("rect", { x: 2.5, y: 13, width: 5, height: 6, rx: 1,
                              class: cl(part, "normal") }));
    g.appendChild(s("rect", { x: 9.5, y: 13, width: 5, height: 6, rx: 1,
                              class: cl(part, "abnormal") }));
    g.appendChild(s("rect", { x: 16.5, y: 13, width: 5, height: 6, rx: 1,
                              class: cl(part, "scrap") }));
    if (part === "rework") {
      g.appendChild(s("path", { d: "M 12 19 Q 4 21 4 12", class: "ti-arrow" }));
      g.appendChild(s("path", { d: "M 2.6 13.4 L 4 11 L 5.4 13.4 Z", class: "ti-on" }));
    }
    return g;
  };

  /* --- 50. THE SPLIT-OFF POINT: one process, then separate products --- */
  F.splitoff = function (part) {
    var g = root24("ti-so");
    g.appendChild(s("line", { x1: 2, y1: 12, x2: 11, y2: 12, class: cl(part, "joint") }));
    g.appendChild(s("circle", { cx: 11.5, cy: 12, r: 1.8, class: cl(part, "point") }));
    g.appendChild(s("path", { d: "M 13 11 L 21 6", class: cl(part, "main") }));
    g.appendChild(s("path", { d: "M 13 13 L 21 18", class: cl(part, "by") }));
    g.appendChild(s("rect", { x: 18.5, y: 4, width: 3.2, height: 3.2, rx: 0.7,
                              class: cl(part, "main") }));
    g.appendChild(s("rect", { x: 18.5, y: 16.5, width: 3.2, height: 3.2, rx: 0.7,
                              class: cl(part, "by") }));
    if (part === "sep") {
      /* costs incurred AFTER the split belong to one product alone */
      g.appendChild(s("line", { x1: 14.5, y1: 9.3, x2: 19.5, y2: 12.6, class: "ti-dash" }));
      g.appendChild(s("circle", { cx: 17, cy: 8, r: 1.3, class: "ti-on" }));
    }
    if (part === "further") {
      g.appendChild(s("path", { d: "M 21 6 L 21 2", class: "ti-arrow" }));
    }
    return g;
  };

  /* --- 51. THE HIERARCHY: a cost sits at the level that drives it --- */
  F.hier = function (part) {
    var g = root24("ti-hi");
    [["unit", 3.0, 3], ["batch", 7.2, 6], ["prod", 11.4, 9], ["fac", 15.6, 12]]
      .forEach(function (b) {
        g.appendChild(s("rect", { x: 12 - b[2] / 2 - 2, y: b[1], width: b[2] + 4, height: 3.4,
                                  rx: 0.8, class: cl(part, b[0]) }));
      });
    if (part === "cust") {
      g.appendChild(s("circle", { cx: 12, cy: 21.4, r: 2, class: "ti-on" }));
    }
    return g;
  };

  /* --- 52. SERVICE DEPARTMENTS FEED PRODUCING ONES, and sometimes each other --- */
  F.svcalloc = function (part) {
    var g = root24("ti-sa");
    g.appendChild(s("rect", { x: 2.5, y: 3, width: 6, height: 5, rx: 1, class: cl(part, "svc") }));
    g.appendChild(s("rect", { x: 2.5, y: 10, width: 6, height: 5, rx: 1, class: cl(part, "svc") }));
    g.appendChild(s("rect", { x: 15.5, y: 3, width: 6, height: 5, rx: 1, class: cl(part, "prod") }));
    g.appendChild(s("rect", { x: 15.5, y: 10, width: 6, height: 5, rx: 1, class: cl(part, "prod") }));
    g.appendChild(s("path", { d: "M 8.8 5.5 H 15.2 M 8.8 12.5 H 15.2", class: "ti-rule" }));
    if (part === "single") {
      g.appendChild(s("path", { d: "M 8.8 5.5 H 15.2 M 8.8 12.5 H 15.2", class: "ti-on" }));
    }
    if (part === "dual") {
      /* two rates: one for capacity, one for use */
      g.appendChild(s("path", { d: "M 8.8 4.6 H 15.2 M 8.8 6.4 H 15.2", class: "ti-on" }));
    }
    if (part === "step") {
      g.appendChild(s("path", { d: "M 5.5 8.2 V 9.8", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 4.1 8.4 L 5.5 10.8 L 6.9 8.4 Z", class: "ti-on" }));
    }
    if (part === "recip") {
      g.appendChild(s("path", { d: "M 4.4 8.2 V 9.8 M 6.6 9.8 V 8.2", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 3.2 8.4 L 4.4 10.6 L 5.6 8.4 Z", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 5.4 9.6 L 6.6 7.4 L 7.8 9.6 Z", class: "ti-on" }));
    }
    return g;
  };

  /* --- 53. THE VESSEL: how much of what could be made, is --- */
  F.capacity = function (part) {
    var g = root24("ti-cap");
    g.appendChild(s("path", { d: "M 6 3 V 20 H 18 V 3", class: "ti-rule" }));
    var lv = { theo: 4.5, prac: 7.5, master: 11, normal: 9.5 }[part];
    if (lv === undefined) lv = 7.5;
    g.appendChild(s("rect", { x: 6, y: lv, width: 12, height: 20 - lv, class: "ti-on" }));
    [["theo", 4.5], ["prac", 7.5], ["master", 11]].forEach(function (m) {
      g.appendChild(s("line", { x1: 3.5, y1: m[1], x2: 6, y2: m[1],
                                class: part === m[0] ? "ti-on" : "ti-off" }));
    });
    if (part === "unused") {
      g.appendChild(s("rect", { x: 6, y: 3, width: 12, height: 4.5, class: "ti-on" }));
      g.appendChild(s("rect", { x: 6, y: 7.5, width: 12, height: 12.5, class: "ti-off" }));
    }
    if (part === "spiral") {
      g.appendChild(s("path", { d: "M 8 5 L 16 9 L 8 13 L 16 17", class: "ti-on" }));
    }
    return g;
  };

  /* --- 54. THE SCATTER AND THE LINE THROUGH IT --- */
  F.scatter = function (part) {
    var g = root24("ti-sc");
    g.appendChild(s("line", { x1: 4, y1: 20, x2: 21, y2: 20, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 4, y1: 20, x2: 4, y2: 3, class: "ti-rule" }));
    [[7, 16], [9, 14], [11, 13], [13, 10], [15, 9], [18, 6]].forEach(function (p, i) {
      var lit = (part === "pts") || (part === "hilo" && (i === 0 || i === 5));
      g.appendChild(s("circle", { cx: p[0], cy: p[1], r: 1.3,
                                  class: lit ? "ti-on" : "ti-off" }));
    });
    g.appendChild(s("path", { d: "M 4 18 L 21 5",
                              class: cl(part, "line") }));
    if (part === "hilo") {
      g.appendChild(s("path", { d: "M 7 16 L 18 6", class: "ti-on" }));
    }
    if (part === "intercept") {
      g.appendChild(s("circle", { cx: 4, cy: 18, r: 1.8, class: "ti-on" }));
    }
    if (part === "spread") {
      /* the scatter about the line is what the error measures */
      g.appendChild(s("path", { d: "M 9 14 L 9 11.5 M 13 10 L 13 12.5 M 18 6 L 18 8",
                                class: "ti-on" }));
    }
    if (part === "axis") {
      g.appendChild(s("line", { x1: 4, y1: 20, x2: 21, y2: 20, class: "ti-on" }));
    }
    if (part === "yaxis") {
      g.appendChild(s("line", { x1: 4, y1: 20, x2: 4, y2: 3, class: "ti-on" }));
    }
    return g;
  };

  /* --- 55. THE LEARNING CURVE: the same task costs less each doubling --- */
  F.learn = function (part) {
    var g = root24("ti-lc");
    g.appendChild(s("line", { x1: 4, y1: 20, x2: 21, y2: 20, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 4, y1: 20, x2: 4, y2: 3, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 4 5 Q 10 17 21 18", class: cl(part, "curve") }));
    if (part === "rate") {
      /* the doublings: each one takes the same proportion off */
      g.appendChild(s("path", { d: "M 6 20 V 8.5 M 10 20 V 14 M 18 20 V 17.6",
                                class: "ti-dash" }));
      g.appendChild(s("circle", { cx: 6, cy: 8.5, r: 1.3, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 10, cy: 14, r: 1.3, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 18, cy: 17.6, r: 1.3, class: "ti-on" }));
    }
    if (part === "cumavg") {
      g.appendChild(s("path", { d: "M 4 5 Q 10 17 21 18", class: "ti-on" }));
    }
    if (part === "incr") {
      g.appendChild(s("path", { d: "M 4 8 Q 11 18 21 19", class: "ti-on" }));
    }
    if (part === "output") {
      g.appendChild(s("line", { x1: 4, y1: 20, x2: 21, y2: 20, class: "ti-on" }));
    }
    return g;
  };

  /* --- 56. WHICH SIDE OF THE LINE FIXED OVERHEAD FALLS ON --- */
  F.absvar = function (part) {
    var g = root24("ti-av");
    /* left column: absorption, fixed overhead inside the product cost */
    g.appendChild(s("rect", { x: 3, y: 12, width: 7, height: 8, rx: 1, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 3, y: 7, width: 7, height: 5, rx: 1, class: cl(part, "abs") }));
    /* right column: variable costing, the same fixed overhead expensed instead */
    g.appendChild(s("rect", { x: 14, y: 12, width: 7, height: 8, rx: 1, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 14, y: 3, width: 7, height: 4, rx: 1, class: cl(part, "var") }));
    g.appendChild(s("line", { x1: 12, y1: 3, x2: 12, y2: 21, class: "ti-dash" }));
    if (part === "cm") {
      g.appendChild(s("rect", { x: 14, y: 12, width: 7, height: 8, rx: 1, class: "ti-on" }));
    }
    if (part === "cmr") {
      g.appendChild(s("rect", { x: 14, y: 12, width: 7, height: 8, rx: 1, class: "ti-on" }));
      g.appendChild(s("line", { x1: 14, y1: 16, x2: 21, y2: 16, class: "ti-strike" }));
    }
    return g;
  };

  /* --- 57. THE STANDARD CARD: a price and a quantity, agreed in advance --- */
  F.stdcard = function (part) {
    var g = root24("ti-std");
    g.appendChild(s("rect", { x: 3, y: 4, width: 18, height: 16, rx: 1.5,
                              class: cl(part, "card") }));
    g.appendChild(s("line", { x1: 12, y1: 4, x2: 12, y2: 20, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 5, y: 7, width: 5, height: 3, rx: 0.7,
                              class: cl(part, "price") }));
    g.appendChild(s("rect", { x: 14, y: 7, width: 5, height: 3, rx: 0.7,
                              class: cl(part, "qty") }));
    g.appendChild(s("line", { x1: 5, y1: 16, x2: 19, y2: 16, class: cl(part, "allowed") }));
    if (part === "tight" || part === "fair") {
      /* where the standard is SET on the scale between ideal and attainable */
      g.appendChild(s("line", { x1: 5, y1: 13, x2: 19, y2: 13, class: "ti-rule" }));
      g.appendChild(s("circle", { cx: part === "tight" ? 6.5 : 14, cy: 13, r: 1.6,
                                  class: "ti-on" }));
    }
    return g;
  };

  /* --- 58. THE FOUR COSTS OF QUALITY: two spent before, two paid after --- */
  F.quality = function (part) {
    var g = root24("ti-q");
    [["prev", 3.2], ["appr", 7.4], ["intf", 12.6], ["extf", 16.8]].forEach(function (b) {
      g.appendChild(s("rect", { x: 3, y: b[1], width: 18, height: 3.6, rx: 0.8,
                                class: cl(part, b[0]) }));
    });
    /* the line is the moment the unit leaves: above it, conformance; below it, failure */
    g.appendChild(s("line", { x1: 2, y1: 11.8, x2: 22, y2: 11.8, class: "ti-dash" }));
    if (part === "six") {
      g.appendChild(s("circle", { cx: 12, cy: 11.8, r: 2.4, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 12, cy: 11.8, r: 1, class: "ti-hole" }));
    }
    return g;
  };

  /* --- 59. WHO ASKS FOR THE NEXT UNIT: the station after, or the one before --- */
  F.pull = function (part) {
    var g = root24("ti-pl");
    g.appendChild(s("rect", { x: 2.5, y: 9, width: 6, height: 6, rx: 1, class: "ti-rule" }));
    g.appendChild(s("rect", { x: 15.5, y: 9, width: 6, height: 6, rx: 1, class: "ti-rule" }));
    if (part === "push") {
      g.appendChild(s("path", { d: "M 9 12 H 14.6", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 13.2 10.4 L 15.6 12 L 13.2 13.6 Z", class: "ti-on" }));
    } else {
      /* the default drawing is the pull: the demand travels backwards */
      g.appendChild(s("path", { d: "M 15 12 H 9.4", class: cl(part, "pull") }));
      g.appendChild(s("path", { d: "M 10.8 10.4 L 8.4 12 L 10.8 13.6 Z", class: cl(part, "pull") }));
    }
    if (part === "kanban") {
      g.appendChild(s("rect", { x: 9.8, y: 4, width: 4.4, height: 3.4, rx: 0.6, class: "ti-on" }));
      g.appendChild(s("line", { x1: 12, y1: 7.4, x2: 12, y2: 10, class: "ti-dash" }));
    }
    if (part === "jit") {
      /* nothing waits between the stations */
      g.appendChild(s("circle", { cx: 12, cy: 18, r: 1.4, class: "ti-on" }));
    }
    if (part === "backflush") {
      g.appendChild(s("path", { d: "M 18.5 15.3 V 19 H 5.5 V 15.3", class: "ti-on" }));
    }
    if (part === "cycle") {
      g.appendChild(s("path", { d: "M 5.5 8.6 Q 12 3 18.5 8.6", class: "ti-arrow" }));
    }
    return g;
  };

  /* --- 60. THE STAIR AND THE WHEEL: improve it, then hold the new level --- */
  F.kaizen = function (part) {
    var g = root24("ti-kz");
    g.appendChild(s("path", { d: "M 3 20 H 8 V 16 H 13 V 12 H 18 V 8 H 21",
                              class: cl(part, "step") }));
    if (part === "pdca") {
      g.appendChild(s("circle", { cx: 12, cy: 8, r: 4.5, class: "ti-ring" }));
      g.appendChild(s("path", { d: "M 12 3.5 A 4.5 4.5 0 0 1 16.5 8", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 15.1 6.6 L 17.4 7.2 L 16.3 9.3 Z", class: "ti-on" }));
    }
    if (part === "bench") {
      /* somebody else's level, read off and aimed at */
      g.appendChild(s("line", { x1: 2, y1: 6, x2: 22, y2: 6, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 18 8 V 6.4", class: "ti-arrow" }));
    }
    if (part === "best") {
      g.appendChild(s("circle", { cx: 20, cy: 6, r: 1.8, class: "ti-on" }));
    }
    return g;
  };

  /* --- 61. THE CHAIN: where in the whole run of activities the cost is locked in --- */
  F.chain = function (part) {
    var g = root24("ti-ch");
    [["up", 3], ["up", 6.8], ["mid", 10.6], ["down", 14.4], ["down", 18.2]]
      .forEach(function (b) {
        g.appendChild(s("rect", { x: b[1], y: 8, width: 3.2, height: 8, rx: 0.8,
                                  class: cl(part, b[0]) }));
      });
    if (part === "primary") {
      g.appendChild(s("path", { d: "M 3 18.5 H 21.4", class: "ti-on" }));
    }
    if (part === "support") {
      g.appendChild(s("path", { d: "M 3 5.5 H 21.4", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 6 5.5 V 7.6 M 12 5.5 V 7.6 M 18 5.5 V 7.6",
                                class: "ti-dash" }));
    }
    if (part === "locked") {
      /* the decision is early; the money is spent late */
      g.appendChild(s("rect", { x: 3, y: 8, width: 3.2, height: 8, rx: 0.8, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 4.6 6.5 V 4", class: "ti-arrow" }));
      g.appendChild(s("circle", { cx: 4.6, cy: 3, r: 1.4, class: "ti-on" }));
    }
    if (part === "life") {
      g.appendChild(s("path", { d: "M 3 20.5 H 21.4", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 3 20.5 V 18.4 M 21.4 20.5 V 18.4", class: "ti-on" }));
    }
    return g;
  };

  /* --- 62. THE PROCESS MAP: the steps, and which of them add something --- */
  F.procmap = function (part) {
    var g = root24("ti-pm");
    g.appendChild(s("rect", { x: 2.5, y: 9.5, width: 5, height: 5, rx: 1, class: cl(part, "va") }));
    g.appendChild(s("polygon", { points: "12,8 15.5,12 12,16 8.5,12", class: cl(part, "map") }));
    g.appendChild(s("rect", { x: 16.5, y: 9.5, width: 5, height: 5, rx: 1,
                              class: cl(part, "nva") }));
    g.appendChild(s("path", { d: "M 7.7 12 H 8.3 M 15.7 12 H 16.3", class: "ti-rule" }));
    if (part === "nva") {
      g.appendChild(s("line", { x1: 16.8, y1: 9.8, x2: 21.2, y2: 14.2, class: "ti-strike" }));
    }
    if (part === "bpr") {
      /* the map is not improved, it is redrawn */
      g.appendChild(s("path", { d: "M 2.5 5 H 21.5", class: "ti-on" }));
      g.appendChild(s("line", { x1: 2.5, y1: 19, x2: 21.5, y2: 19, class: "ti-strike" }));
    }
    if (part === "activity") {
      g.appendChild(s("polygon", { points: "12,8 15.5,12 12,16 8.5,12", class: "ti-on" }));
    }
    return g;
  };

  /* --- 63. THE PLAN AND THE CHAIN OF SUPPLY --- */
  F.supply = function (part) {
    var g = root24("ti-su");
    g.appendChild(s("rect", { x: 7, y: 2.5, width: 10, height: 5, rx: 1, class: cl(part, "plan") }));
    [4, 9.3, 14.6, 19.9].forEach(function (x, i) {
      g.appendChild(s("circle", { cx: x, cy: 15, r: 2,
                                  class: cl(part, i === 0 ? "out" : "node") }));
      if (i) {
        g.appendChild(s("line", { x1: x - 3.3, y1: 15, x2: x - 2, y2: 15, class: "ti-rule" }));
      }
    });
    g.appendChild(s("line", { x1: 12, y1: 7.5, x2: 12, y2: 13, class: cl(part, "plan") }));
    if (part === "erp") {
      g.appendChild(s("rect", { x: 7, y: 2.5, width: 10, height: 5, rx: 1, class: "ti-on" }));
      [4, 9.3, 14.6, 19.9].forEach(function (x) {
        g.appendChild(s("line", { x1: x, y1: 13, x2: 12, y2: 7.5, class: "ti-dash" }));
      });
    }
    if (part === "out") {
      g.appendChild(s("line", { x1: 2.5, y1: 19, x2: 5.5, y2: 11, class: "ti-dash" }));
    }
    return g;
  };

  /* --- 64. THE WHALE CURVE: cumulative profit, customer by customer --- */
  F.whale = function (part) {
    var g = root24("ti-wh");
    g.appendChild(s("line", { x1: 3, y1: 20, x2: 21, y2: 20, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 3 18 Q 10 3 15 5 Q 19 6.5 21 12",
                              class: cl(part, "curve") }));
    if (part === "peak") {
      g.appendChild(s("circle", { cx: 14.2, cy: 4.9, r: 1.8, class: "ti-on" }));
    }
    if (part === "tail") {
      g.appendChild(s("path", { d: "M 15 5 Q 19 6.5 21 12", class: "ti-on" }));
    }
    if (part === "serve") {
      /* what it costs to serve, under the line that shows what it earns */
      g.appendChild(s("rect", { x: 16, y: 13, width: 5, height: 6, rx: 0.8, class: "ti-on" }));
    }
    return g;
  };

  /* --- 65. THE TWO WAYS TO COMPETE: be cheaper, or be different --- */
  F.strategy = function (part) {
    var g = root24("ti-sg");
    g.appendChild(s("circle", { cx: 5, cy: 12, r: 2, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 7 11 L 19 5", class: cl(part, "cost") }));
    g.appendChild(s("path", { d: "M 7 13 L 19 19", class: cl(part, "diff") }));
    g.appendChild(s("path", { d: "M 16.5 3.3 L 20.5 4.6 L 17.8 7.2 Z", class: cl(part, "cost") }));
    g.appendChild(s("polygon", { points: "19,16 21.4,19 19,22 16.6,19",
                                 class: cl(part, "diff") }));
    if (part === "unit") {
      g.appendChild(s("circle", { cx: 5, cy: 12, r: 2, class: "ti-on" }));
    }
    return g;
  };

  /* =================================================================
   * BOOK 4 - Internal Controls and Technology. Fourteen families.
   *
   * None of the sixty-six above would do. They draw an accounting idea - a T
   * account, a cost pool, a split-off point - and Book 4's vocabulary names a
   * shield, a gate, a key, a backup tier, a distribution. Registering its 158
   * terms into those families would have been the "shape for seven different
   * words" that I4 exists to catch.
   *
   * EVERY PART NAMED IN A REGISTRATION BELOW IS ONE THESE DRAWINGS LIGHT. On
   * Book 3, 28 of 120 registrations named a part that did not exist, because
   * the names were guessed from what the family sounded like; they are written
   * here against the drawing, and `cma_icons` I4 reads the drawing back.
   * ================================================================= */

  /* --- 67. THE SHIELD: what a control is, and how much it can promise --- */
  F.ctrl = function (part) {
    var g = root24("ti-ct");
    g.appendChild(s("path", { d: "M 12 2.5 L 20 5.5 V 12 Q 20 18.5 12 21.5 "
                                 + "Q 4 18.5 4 12 V 5.5 Z", class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 12 2.5 L 20 5.5 V 12 Q 20 18.5 12 21.5 Z",
                              class: cl(part, "prevent") }));
    g.appendChild(s("path", { d: "M 12 2.5 L 4 5.5 V 12 Q 4 18.5 12 21.5 Z",
                              class: cl(part, "detect") }));
    g.appendChild(s("line", { x1: 4, y1: 16.5, x2: 20, y2: 16.5,
                              class: cl(part, "envir") }));
    if (part === "assure") {
      /* the shield stops short of the top: reasonable, never absolute */
      g.appendChild(s("path", { d: "M 7 8 H 17", class: "ti-on" }));
    }
    if (part === "tone") {
      g.appendChild(s("circle", { cx: 12, cy: 5.6, r: 1.7, class: "ti-on" }));
    }
    if (part === "override") {
      g.appendChild(s("path", { d: "M 5 19 L 19 5", class: "ti-on" }));
    }
    return g;
  };

  /* --- 68. THREE RISKS, COMPOUNDING: they multiply, they do not add --- */
  F.risk3 = function (part) {
    var g = root24("ti-r3");
    g.appendChild(s("rect", { x: 3, y: 15, width: 5, height: 6, rx: 0.8,
                              class: cl(part, "inherent") }));
    g.appendChild(s("rect", { x: 9.5, y: 11, width: 5, height: 10, rx: 0.8,
                              class: cl(part, "control") }));
    g.appendChild(s("rect", { x: 16, y: 6, width: 5, height: 15, rx: 0.8,
                              class: cl(part, "detection") }));
    g.appendChild(s("line", { x1: 2, y1: 21.5, x2: 22, y2: 21.5, class: "ti-rule" }));
    if (part === "audit") {
      g.appendChild(s("path", { d: "M 3 14 Q 12 2 21 5", class: "ti-on" }));
    }
    if (part === "misstate") {
      g.appendChild(s("circle", { cx: 12, cy: 4, r: 1.8, class: "ti-on" }));
    }
    if (part === "weakness") {
      g.appendChild(s("path", { d: "M 9.5 11 L 14.5 21", class: "ti-on" }));
    }
    return g;
  };

  /* --- 69. THE HIERARCHY OF DOCUMENTS, and the line the committee holds --- */
  F.govern = function (part) {
    var g = root24("ti-gv");
    g.appendChild(s("rect", { x: 8, y: 3, width: 8, height: 4, rx: 0.8,
                              class: cl(part, "charter") }));
    g.appendChild(s("rect", { x: 5.5, y: 9, width: 13, height: 4, rx: 0.8,
                              class: cl(part, "bylaw") }));
    g.appendChild(s("rect", { x: 3, y: 15, width: 18, height: 4, rx: 0.8,
                              class: cl(part, "policy") }));
    if (part === "board") {
      g.appendChild(s("circle", { cx: 12, cy: 5, r: 1.6, class: "ti-on" }));
    }
    if (part === "committee") {
      g.appendChild(s("path", { d: "M 6 11 H 18", class: "ti-on" }));
      g.appendChild(s("circle", { cx: 6, cy: 11, r: 1.4, class: "ti-on" }));
    }
    if (part === "duty") {
      g.appendChild(s("path", { d: "M 12 19 V 21.5", class: "ti-on" }));
    }
    return g;
  };

  /* --- 70. FOUR DUTIES IN FOUR CORNERS: one hand on two is the weakness --- */
  F.duties4 = function (part) {
    var g = root24("ti-d4");
    g.appendChild(s("rect", { x: 3, y: 3, width: 8, height: 8, rx: 1,
                              class: cl(part, "authorise") }));
    g.appendChild(s("rect", { x: 13, y: 3, width: 8, height: 8, rx: 1,
                              class: cl(part, "record") }));
    g.appendChild(s("rect", { x: 3, y: 13, width: 8, height: 8, rx: 1,
                              class: cl(part, "custody") }));
    g.appendChild(s("rect", { x: 13, y: 13, width: 8, height: 8, rx: 1,
                              class: cl(part, "reconcile") }));
    if (part === "check") {
      g.appendChild(s("path", { d: "M 5 17 L 7.5 19.5 L 9.5 15", class: "ti-on" }));
    }
    if (part === "form") {
      g.appendChild(s("path", { d: "M 13 7 H 21", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 13 9 H 18", class: "ti-on" }));
    }
    if (part === "limit") {
      g.appendChild(s("line", { x1: 12, y1: 2, x2: 12, y2: 22, class: "ti-on" }));
    }
    return g;
  };

  /* --- 71. THE STATUTE: a page, a signature and an overseer --- */
  F.statute = function (part) {
    var g = root24("ti-st");
    g.appendChild(s("rect", { x: 4.5, y: 2.5, width: 13, height: 17, rx: 1.2,
                              class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 7 7 H 15", class: cl(part, "certify") }));
    g.appendChild(s("path", { d: "M 7 10.5 H 15", class: cl(part, "books") }));
    g.appendChild(s("path", { d: "M 7 14 H 12", class: cl(part, "bribe") }));
    if (part === "attest") {
      g.appendChild(s("circle", { cx: 17, cy: 17, r: 3, class: "ti-on" }));
    }
    if (part === "oversee") {
      g.appendChild(s("circle", { cx: 19, cy: 5, r: 2.4, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 19, cy: 5, r: 0.9, class: "ti-on" }));
    }
    if (part === "icfr") {
      g.appendChild(s("path", { d: "M 7 17.5 H 15", class: "ti-on" }));
    }
    if (part === "topdown") {
      g.appendChild(s("path", { d: "M 21 4 V 18", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 19.5 16 L 21 18.5 L 22.5 16", class: "ti-on" }));
    }
    if (part === "bottomup") {
      g.appendChild(s("path", { d: "M 21 18 V 4", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 19.5 6 L 21 3.5 L 22.5 6", class: "ti-on" }));
    }
    return g;
  };

  /* --- 72. THE FIVE SYSTEMS ROLES, and the wall between two of them --- */
  F.sysrole = function (part) {
    var g = root24("ti-sr");
    /* `b` AND NOT `p`: gates/cma_icons reads a family's part names out of an array
       literal only when the body loops over `b[0]` or `m[0]`, which is the convention
       the sixty-six families above follow. Written with `p`, these four parts were
       invisible to the gate and I4 called analyst and librarian dead registrations -
       correctly, on the evidence it could read. */
    [["analyst", 4], ["programmer", 9], ["operator", 15], ["librarian", 20]]
      .forEach(function (b) {
        g.appendChild(s("circle", { cx: b[1], cy: 7, r: 2.2, class: cl(part, b[0]) }));
        g.appendChild(s("path", { d: "M " + (b[1] - 2.4) + " 15 Q " + b[1]
                                     + " 10.5 " + (b[1] + 2.4) + " 15",
                                  class: cl(part, b[0]) }));
      });
    g.appendChild(s("line", { x1: 12, y1: 2, x2: 12, y2: 17, class: "ti-rule" }));
    if (part === "datactl") {
      g.appendChild(s("rect", { x: 3, y: 18.5, width: 18, height: 3, rx: 0.8,
                                class: "ti-on" }));
    }
    if (part === "threat") {
      g.appendChild(s("path", { d: "M 12 2 L 12 17", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 9 19 L 15 19", class: "ti-on" }));
    }
    return g;
  };

  /* --- 73. THE GATE: who may reach the room, and who may reach the file --- */
  F.access = function (part) {
    var g = root24("ti-ac");
    g.appendChild(s("rect", { x: 9.5, y: 2.5, width: 5, height: 19, rx: 1,
                              class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 2.5 7 H 8", class: cl(part, "physical") }));
    g.appendChild(s("path", { d: "M 16 7 H 21.5", class: cl(part, "physical") }));
    g.appendChild(s("path", { d: "M 2.5 16 H 8", class: cl(part, "logical") }));
    if (part === "privilege") {
      g.appendChild(s("circle", { cx: 12, cy: 9, r: 1.6, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 12 10.6 V 15", class: "ti-on" }));
    }
    if (part === "biometric") {
      g.appendChild(s("path", { d: "M 9 19 Q 12 15.5 15 19", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 10.4 20.4 Q 12 18.4 13.6 20.4", class: "ti-on" }));
    }
    if (part === "scan") {
      g.appendChild(s("circle", { cx: 18, cy: 17, r: 3, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 20.2 19.2 L 22 21", class: "ti-on" }));
    }
    return g;
  };

  /* --- 74. THE WIRE: two ends, and what happens in between --- */
  F.wire = function (part) {
    var g = root24("ti-wr");
    g.appendChild(s("circle", { cx: 4, cy: 12, r: 2, class: "ti-rule" }));
    g.appendChild(s("circle", { cx: 20, cy: 12, r: 2, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 6 12 Q 12 6 18 12", class: cl(part, "internet") }));
    g.appendChild(s("path", { d: "M 6 12 H 18", class: cl(part, "leased") }));
    if (part === "firewall") {
      g.appendChild(s("rect", { x: 10.5, y: 5, width: 3, height: 14, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "symmetric") {
      g.appendChild(s("circle", { cx: 8, cy: 17.5, r: 1.6, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 16, cy: 17.5, r: 1.6, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 9.6 17.5 H 14.4", class: "ti-on" }));
    }
    if (part === "asymmetric") {
      g.appendChild(s("circle", { cx: 8, cy: 17.5, r: 1.6, class: "ti-on" }));
      g.appendChild(s("rect", { x: 14.4, y: 16, width: 3.2, height: 3.2, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "signature") {
      g.appendChild(s("path", { d: "M 6 20 Q 9 16.5 12 20 Q 15 23 18 19",
                                class: "ti-on" }));
    }
    if (part === "middle") {
      g.appendChild(s("circle", { cx: 12, cy: 9, r: 2, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 10.6 7.6 L 13.4 10.4", class: "ti-on" }));
    }
    return g;
  };

  /* --- 75. THE COPY AND THE CLOCK: how far back, and how fast back --- */
  F.restore = function (part) {
    var g = root24("ti-rs");
    g.appendChild(s("rect", { x: 2.5, y: 4, width: 9, height: 6, rx: 1,
                              class: cl(part, "full") }));
    g.appendChild(s("rect", { x: 2.5, y: 11.5, width: 5.5, height: 4, rx: 0.8,
                              class: cl(part, "incr") }));
    g.appendChild(s("rect", { x: 2.5, y: 16.5, width: 7.5, height: 4, rx: 0.8,
                              class: cl(part, "diff") }));
    g.appendChild(s("circle", { cx: 18, cy: 12, r: 4, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 18 9 V 12 L 20.2 13.4", class: cl(part, "rto") }));
    if (part === "rpo") {
      g.appendChild(s("path", { d: "M 18 12 L 15.4 10.4", class: "ti-on" }));
    }
    if (part === "offsite" || part === "remote") {
      g.appendChild(s("path", { d: "M 12 7 H 21", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 19 5.4 L 21.4 7 L 19 8.6", class: "ti-on" }));
    }
    if (part === "bcp") {
      g.appendChild(s("path", { d: "M 2.5 22 H 21.5", class: "ti-on" }));
    }
    if (part === "dr") {
      g.appendChild(s("path", { d: "M 14 18 Q 18 21.5 22 18", class: "ti-on" }));
    }
    if (part === "bia") {
      g.appendChild(s("circle", { cx: 7, cy: 2.5, r: 1.6, class: "ti-on" }));
    }
    return g;
  };

  /* --- 76. THE CYCLES: four of them, all closing on the ledger --- */
  F.cycles = function (part) {
    var g = root24("ti-cy");
    g.appendChild(s("circle", { cx: 12, cy: 12, r: 8, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 12 4 A 8 8 0 0 1 20 12",
                              class: cl(part, "revenue") }));
    g.appendChild(s("path", { d: "M 20 12 A 8 8 0 0 1 12 20",
                              class: cl(part, "expenditure") }));
    g.appendChild(s("path", { d: "M 12 20 A 8 8 0 0 1 4 12",
                              class: cl(part, "production") }));
    g.appendChild(s("path", { d: "M 4 12 A 8 8 0 0 1 12 4",
                              class: cl(part, "payroll") }));
    if (part === "ledger") {
      g.appendChild(s("rect", { x: 9, y: 9, width: 6, height: 6, rx: 1,
                                class: "ti-on" }));
    }
    if (part === "ais") {
      g.appendChild(s("circle", { cx: 12, cy: 12, r: 2.4, class: "ti-on" }));
    }
    if (part === "single") {
      g.appendChild(s("path", { d: "M 12 4 V 20", class: "ti-on" }));
    }
    if (part === "nonfin") {
      g.appendChild(s("circle", { cx: 20.5, cy: 3.5, r: 1.8, class: "ti-on" }));
    }
    if (part === "txn") {
      g.appendChild(s("circle", { cx: 12, cy: 4, r: 1.6, class: "ti-on" }));
    }
    return g;
  };

  /* --- 77. TWO TABLES AND THE KEY THAT JOINS THEM --- */
  F.dbase = function (part) {
    var g = root24("ti-db");
    g.appendChild(s("rect", { x: 2.5, y: 4, width: 8, height: 15, rx: 1,
                              class: cl(part, "table") }));
    g.appendChild(s("rect", { x: 13.5, y: 4, width: 8, height: 15, rx: 1,
                              class: cl(part, "table") }));
    g.appendChild(s("path", { d: "M 2.5 8 H 10.5", class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 13.5 8 H 21.5", class: "ti-rule" }));
    if (part === "primary") {
      g.appendChild(s("circle", { cx: 6.5, cy: 11.5, r: 1.6, class: "ti-on" }));
    }
    if (part === "foreign") {
      g.appendChild(s("circle", { cx: 17.5, cy: 11.5, r: 1.6, class: "ti-on" }));
    }
    if (part === "integrity") {
      g.appendChild(s("path", { d: "M 10.5 11.5 H 13.5", class: "ti-on" }));
    }
    if (part === "warehouse") {
      g.appendChild(s("rect", { x: 2.5, y: 20, width: 19, height: 2.6, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "mart") {
      g.appendChild(s("rect", { x: 15.5, y: 20, width: 6, height: 2.6, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "module") {
      g.appendChild(s("rect", { x: 13.5, y: 4, width: 8, height: 4, rx: 1,
                                class: "ti-on" }));
    }
    if (part === "dbms") {
      g.appendChild(s("path", { d: "M 12 2 V 21", class: "ti-on" }));
    }
    if (part === "epm") {
      g.appendChild(s("path", { d: "M 4 2.5 Q 12 -0.5 20 2.5", class: "ti-on" }));
    }
    if (part === "integrate") {
      g.appendChild(s("path", { d: "M 10.5 6 H 13.5", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 10.5 16 H 13.5", class: "ti-on" }));
    }
    return g;
  };

  /* --- 78. THE LIFE CYCLE OF A FACT, ending in purge and not in archive --- */
  F.datalife = function (part) {
    var g = root24("ti-dl");
    g.appendChild(s("path", { d: "M 12 3.5 A 8.5 8.5 0 1 1 3.8 14",
                              class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 2.4 12 L 3.8 14.6 L 5.4 12", class: "ti-rule" }));
    g.appendChild(s("circle", { cx: 12, cy: 3.5, r: 1.8, class: cl(part, "capture") }));
    g.appendChild(s("circle", { cx: 20.5, cy: 12, r: 1.8, class: cl(part, "synth") }));
    g.appendChild(s("circle", { cx: 12, cy: 20.5, r: 1.8,
                                class: cl(part, "analytics") }));
    g.appendChild(s("circle", { cx: 3.5, cy: 12, r: 1.8, class: cl(part, "archive") }));
    if (part === "purge") {
      g.appendChild(s("path", { d: "M 2 10 L 5 14", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 5 10 L 2 14", class: "ti-on" }));
    }
    if (part === "govern") {
      g.appendChild(s("rect", { x: 9, y: 9.5, width: 6, height: 2.4, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "manage") {
      g.appendChild(s("rect", { x: 9, y: 12.5, width: 6, height: 2.4, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "retain") {
      g.appendChild(s("path", { d: "M 8 12 H 16", class: "ti-on" }));
    }
    if (part === "hold") {
      g.appendChild(s("rect", { x: 10.4, y: 10.4, width: 3.2, height: 3.2, rx: 0.6,
                                class: "ti-on" }));
    }
    if (part === "clean") {
      g.appendChild(s("path", { d: "M 9.5 11.5 L 11.5 13.5 L 15 9.5", class: "ti-on" }));
    }
    if (part === "owner") {
      g.appendChild(s("circle", { cx: 12, cy: 12, r: 1.5, class: "ti-on" }));
    }
    return g;
  };

  /* --- 79. THE BUILD: five stages, and the three ways to buy instead --- */
  F.build = function (part) {
    var g = root24("ti-bd");
    [["analysis", 3], ["conceptual", 7.5], ["physical", 12],
     ["implement", 16.5], ["operate", 21]].forEach(function (b, i) {
      g.appendChild(s("rect", { x: b[1] - 1.6, y: 14 - i * 2, width: 3.2,
                                height: 3.2, rx: 0.6, class: cl(part, b[0]) }));
    });
    g.appendChild(s("line", { x1: 2, y1: 21, x2: 22, y2: 21, class: "ti-rule" }));
    if (part === "bpa") {
      g.appendChild(s("path", { d: "M 3 4 H 21", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 19 2.4 L 21.4 4 L 19 5.6", class: "ti-on" }));
    }
    if (part === "rpa") {
      g.appendChild(s("rect", { x: 9, y: 2, width: 6, height: 5, rx: 1,
                                class: "ti-on" }));
      g.appendChild(s("circle", { cx: 10.8, cy: 4.4, r: 0.7, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 13.2, cy: 4.4, r: 0.7, class: "ti-on" }));
    }
    if (part === "cloud") {
      g.appendChild(s("path", { d: "M 7 6 Q 7 2.5 11 3 Q 13 1 15.5 3.2 "
                                   + "Q 18.5 3.2 18 6 Z", class: "ti-on" }));
    }
    if (part === "saas") {
      g.appendChild(s("path", { d: "M 7 6 Q 7 2.5 11 3 Q 13 1 15.5 3.2 "
                                   + "Q 18.5 3.2 18 6 Z", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 12 6 V 9", class: "ti-on" }));
    }
    if (part === "chain" || part === "dist" || part === "smart") {
      [4, 10, 16].forEach(function (x, i) {
        g.appendChild(s("rect", { x: x, y: 2, width: 4.5, height: 4, rx: 0.8,
                                  class: "ti-on" }));
        if (i < 2) {
          g.appendChild(s("path", { d: "M " + (x + 4.5) + " 4 H " + (x + 6),
                                    class: "ti-on" }));
        }
      });
      if (part === "smart") {
        g.appendChild(s("path", { d: "M 10.6 3.4 L 12 4.8 L 14.4 2.4",
                                  class: "ti-on" }));
      }
    }
    return g;
  };

  /* --- 80. THE FOUR V's, and the three shapes data arrives in --- */
  F.bigv = function (part) {
    var g = root24("ti-bv");
    g.appendChild(s("rect", { x: 3, y: 13, width: 3.6, height: 8, rx: 0.6,
                              class: cl(part, "volume") }));
    g.appendChild(s("rect", { x: 8, y: 10, width: 3.6, height: 11, rx: 0.6,
                              class: cl(part, "velocity") }));
    g.appendChild(s("rect", { x: 13, y: 7, width: 3.6, height: 14, rx: 0.6,
                              class: cl(part, "variety") }));
    g.appendChild(s("rect", { x: 18, y: 4, width: 3.6, height: 17, rx: 0.6,
                              class: cl(part, "veracity") }));
    if (part === "structured") {
      [3, 8, 13].forEach(function (x) {
        g.appendChild(s("rect", { x: x, y: 2, width: 3.2, height: 3.2, rx: 0.4,
                                  class: "ti-on" }));
      });
    }
    if (part === "semi") {
      g.appendChild(s("rect", { x: 3, y: 2, width: 7, height: 3.2, rx: 0.4,
                                class: "ti-on" }));
      g.appendChild(s("rect", { x: 11, y: 2, width: 4, height: 3.2, rx: 0.4,
                                class: "ti-on" }));
    }
    if (part === "unstruct") {
      g.appendChild(s("path", { d: "M 3 4 Q 7 0.5 12 3 Q 16 6 12 6 Q 5 7 3 4 Z",
                                class: "ti-on" }));
    }
    if (part === "insight") {
      g.appendChild(s("circle", { cx: 19.8, cy: 2, r: 1.7, class: "ti-on" }));
    }
    if (part === "bi") {
      g.appendChild(s("path", { d: "M 2 2.5 H 22", class: "ti-on" }));
    }
    if (part === "capab") {
      g.appendChild(s("path", { d: "M 3 21.5 H 21.6", class: "ti-on" }));
    }
    return g;
  };

  /* --- 81. FOUR QUESTIONS IN FOUR QUARTERS, and how a model is fitted --- */
  F.fourq = function (part) {
    var g = root24("ti-4q");
    g.appendChild(s("rect", { x: 3, y: 3, width: 8, height: 8, rx: 1,
                              class: cl(part, "descriptive") }));
    g.appendChild(s("rect", { x: 13, y: 3, width: 8, height: 8, rx: 1,
                              class: cl(part, "diagnostic") }));
    g.appendChild(s("rect", { x: 3, y: 13, width: 8, height: 8, rx: 1,
                              class: cl(part, "predictive") }));
    g.appendChild(s("rect", { x: 13, y: 13, width: 8, height: 8, rx: 1,
                              class: cl(part, "prescriptive") }));
    if (part === "cluster") {
      [[6, 6], [8, 8], [5.5, 8.5]].forEach(function (p) {
        g.appendChild(s("circle", { cx: p[0], cy: p[1], r: 1, class: "ti-on" }));
      });
    }
    if (part === "classify") {
      g.appendChild(s("line", { x1: 17, y1: 3.5, x2: 17, y2: 10.5, class: "ti-on" }));
    }
    if (part === "fit") {
      g.appendChild(s("path", { d: "M 4 20 L 10 14", class: "ti-on" }));
    }
    if (part === "over") {
      g.appendChild(s("path", { d: "M 4 20 Q 6 14 7.5 18 Q 9 13 10 14",
                                class: "ti-on" }));
    }
    if (part === "under") {
      g.appendChild(s("path", { d: "M 4 17 H 10", class: "ti-on" }));
    }
    if (part === "logistic") {
      g.appendChild(s("path", { d: "M 14 20 Q 17 20 17 16.5 Q 17 14 20 14",
                                class: "ti-on" }));
    }
    if (part === "corr") {
      g.appendChild(s("path", { d: "M 14 20 L 20 14", class: "ti-on" }));
    }
    return g;
  };

  /* --- 82. THE SERIES, AND ITS PARTS: trend, season, cycle, noise --- */
  F.tseries = function (part) {
    var g = root24("ti-ts");
    g.appendChild(s("line", { x1: 2.5, y1: 21, x2: 21.5, y2: 21, class: "ti-rule" }));
    g.appendChild(s("path", { d: "M 3 17 L 21 7", class: cl(part, "trend") }));
    g.appendChild(s("path", { d: "M 3 13 q 3 -4 6 0 q 3 4 6 0 q 3 -4 6 0",
                              class: cl(part, "seasonal") }));
    g.appendChild(s("path", { d: "M 3 5 q 6 -3 12 2 q 4 1.5 6 -1",
                              class: cl(part, "cyclical") }));
    if (part === "irregular") {
      g.appendChild(s("path", { d: "M 4 19 l 2 -2 l 1.5 2.5 l 2.5 -3 l 2 2 "
                                   + "l 3 -2.5 l 2 2", class: "ti-on" }));
    }
    if (part === "factor") {
      g.appendChild(s("circle", { cx: 9, cy: 13, r: 1.5, class: "ti-on" }));
    }
    if (part === "eda") {
      g.appendChild(s("circle", { cx: 19.5, cy: 18.5, r: 2.6, class: "ti-on" }));
      g.appendChild(s("path", { d: "M 21.4 20.4 L 23 22", class: "ti-on" }));
    }
    if (part === "interval") {
      g.appendChild(s("path", { d: "M 3 15 L 21 5", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 3 19 L 21 9", class: "ti-on" }));
    }
    if (part === "gof") {
      g.appendChild(s("path", { d: "M 17 3 L 19 5 L 22 1.5", class: "ti-on" }));
    }
    return g;
  };

  /* --- 83. THE SPREAD: one number is a weighted average of many --- */
  F.chance = function (part) {
    var g = root24("ti-ch");
    g.appendChild(s("line", { x1: 2.5, y1: 20.5, x2: 21.5, y2: 20.5,
                              class: "ti-rule" }));
    [[4, 4], [7, 8], [10, 13], [13.5, 15], [17, 9], [20, 5]].forEach(function (b) {
      g.appendChild(s("rect", { x: b[0] - 1.3, y: 20.5 - b[1], width: 2.6,
                                height: b[1], rx: 0.4, class: cl(part, "monte") }));
    });
    if (part === "expected") {
      g.appendChild(s("line", { x1: 12, y1: 2.5, x2: 12, y2: 20.5, class: "ti-on" }));
    }
    if (part === "model") {
      g.appendChild(s("path", { d: "M 3 18 Q 12 1 21 18", class: "ti-on" }));
    }
    if (part === "sens") {
      g.appendChild(s("path", { d: "M 3 3 H 15", class: "ti-on" }));
      g.appendChild(s("circle", { cx: 9, cy: 3, r: 1.6, class: "ti-on" }));
    }
    if (part === "whatif") {
      g.appendChild(s("path", { d: "M 3 3 H 15", class: "ti-on" }));
      g.appendChild(s("circle", { cx: 6, cy: 3, r: 1.4, class: "ti-on" }));
      g.appendChild(s("circle", { cx: 13, cy: 3, r: 1.4, class: "ti-on" }));
    }
    if (part === "goal") {
      g.appendChild(s("path", { d: "M 15 3 H 3", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 5 1.4 L 2.6 3 L 5 4.6", class: "ti-on" }));
    }
    if (part === "pct") {
      g.appendChild(s("line", { x1: 5.5, y1: 16, x2: 5.5, y2: 20.5, class: "ti-on" }));
      g.appendChild(s("line", { x1: 19, y1: 16, x2: 19, y2: 20.5, class: "ti-on" }));
    }
    return g;
  };

  /* --- 84. THE FORM FOLLOWS THE QUESTION, and a cut axis lies honestly --- */
  F.chartpick = function (part) {
    var g = root24("ti-cp");
    g.appendChild(s("line", { x1: 3, y1: 20.5, x2: 21, y2: 20.5, class: "ti-rule" }));
    g.appendChild(s("line", { x1: 3, y1: 3.5, x2: 3, y2: 20.5, class: "ti-rule" }));
    [[6, 7], [10, 12], [14, 9]].forEach(function (b) {
      g.appendChild(s("rect", { x: b[0] - 1.5, y: 20.5 - b[1], width: 3,
                                height: b[1], rx: 0.4, class: cl(part, "bar") }));
    });
    g.appendChild(s("path", { d: "M 5 16 L 10 11 L 14 13 L 20 6",
                              class: cl(part, "line") }));
    if (part === "scatter") {
      [[6, 16], [9, 13], [12, 14], [15, 9], [18, 7]].forEach(function (p) {
        g.appendChild(s("circle", { cx: p[0], cy: p[1], r: 1.1, class: "ti-on" }));
      });
    }
    if (part === "hist") {
      [5, 8, 11, 14, 17].forEach(function (x, i) {
        var h = [4, 9, 13, 8, 4][i];
        g.appendChild(s("rect", { x: x, y: 20.5 - h, width: 2.6, height: h,
                                  rx: 0, class: "ti-on" }));
      });
    }
    if (part === "box") {
      g.appendChild(s("rect", { x: 8, y: 9, width: 8, height: 6, rx: 0.6,
                                class: "ti-on" }));
      g.appendChild(s("path", { d: "M 4 12 H 8", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 16 12 H 20", class: "ti-on" }));
    }
    if (part === "table") {
      g.appendChild(s("rect", { x: 4, y: 4, width: 16, height: 14, rx: 0.8,
                                class: "ti-on" }));
      g.appendChild(s("path", { d: "M 4 9 H 20", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 12 4 V 18", class: "ti-on" }));
    }
    if (part === "dash") {
      g.appendChild(s("rect", { x: 3.5, y: 3.5, width: 7.5, height: 7, rx: 0.8,
                                class: "ti-on" }));
      g.appendChild(s("rect", { x: 13, y: 3.5, width: 7.5, height: 7, rx: 0.8,
                                class: "ti-on" }));
      g.appendChild(s("rect", { x: 3.5, y: 12.5, width: 17, height: 7, rx: 0.8,
                                class: "ti-on" }));
    }
    if (part === "truncate") {
      g.appendChild(s("path", { d: "M 2 15 L 4.5 15.8", class: "ti-on" }));
      g.appendChild(s("path", { d: "M 2 16.4 L 4.5 17.2", class: "ti-on" }));
    }
    if (part === "viz") {
      g.appendChild(s("circle", { cx: 20, cy: 3.5, r: 1.6, class: "ti-on" }));
    }
    return g;
  };

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
   * BOOK 2: COST MANAGEMENT. 166 terms over 25 families.
   *
   * Tier 1 is a shape the author draws and the mark is a reduction of it. Tier 2 is a
   * term with no shape of its own that names a RELATION or a CHOICE within one that is
   * drawn - "committed" and "discretionary" are both the flat fixed line and differ only
   * in whether management can cut it; "net realizable value method" and "physical measure
   * method" are both the split-off pipe and differ in what is divided by what. Those get
   * the family's shape with the relevant part lit and are declared tier 2, which is the
   * honest label: the learner sees the right geometry, and nothing here claims the author
   * drew a picture of the word.
   *
   * THREE OF BOOK 2's TERMS ARE ALREADY REGISTERED and are deliberately absent below -
   * "direct method", "normal capacity" and "period cost" keep the Book 1 families they
   * already have. Re-registering them here would silently move Book 1's marks.
   * ================================================================= */

  /* --- the cost line: what volume does to a cost --- */
  reg(1, "costbehave", "fixed", ["fixed cost"]);
  reg(1, "costbehave", "variable", ["variable cost"]);
  reg(1, "costbehave", "mixed", ["mixed cost"]);
  reg(1, "costbehave", "step", ["step cost"]);
  reg(1, "costbehave", "range", ["relevant range"]);
  reg(1, "costbehave", "all", ["cost behavior"]);
  /* both are the same flat line; the difference is whether it can be cut, which is a
     statement about management and not about the geometry */
  reg(2, "costbehave", "fixed", ["committed fixed cost", "discretionary fixed cost"]);
  reg(2, "costbehave", "all", ["account analysis"]);

  /* --- the pool, the driver, the object --- */
  reg(1, "costobj", "object", ["cost object"]);
  reg(1, "costobj", "pool", ["cost pool", "activity cost pool"]);
  reg(1, "costobj", "base", ["allocation base"]);
  reg(1, "costobj", "driver", ["cost driver", "resource driver", "activity driver",
                               "volume-based cost driver"]);

  /* --- the three inventory boxes --- */
  reg(1, "flow3", "rm", ["raw materials inventory"]);
  reg(1, "flow3", "wip", ["work in process"]);
  reg(1, "flow3", "fg", ["finished goods inventory"]);
  reg(1, "flow3", "cogm", ["cost of goods manufactured"]);
  reg(1, "flow3", "all", ["product cost"]);

  /* --- the three bars, and the two brackets over them --- */
  reg(1, "dmdloh", "dm", ["direct cost"]);
  reg(1, "dmdloh", "indirect", ["indirect cost"]);
  reg(1, "dmdloh", "oh", ["manufacturing overhead", "fixed overhead", "variable overhead"]);
  reg(1, "dmdloh", "prime", ["prime cost"]);
  reg(1, "dmdloh", "conv", ["conversion cost"]);
  /* a material, but traced to the overhead bar rather than to the job */
  reg(2, "dmdloh", "oh", ["indirect materials"]);

  /* --- the rate: a budgeted pool over a denominator level --- */
  reg(1, "ohrate", "all", ["predetermined overhead rate"]);
  reg(1, "ohrate", "num", ["budgeted rate"]);
  reg(1, "ohrate", "den", ["denominator level"]);
  reg(1, "ohrate", "plant", ["plantwide overhead rate"]);
  reg(1, "ohrate", "dept", ["departmental overhead rate"]);

  /* --- applied against actual, and which way the gap falls --- */
  reg(1, "ohvar", "applied", ["applied overhead"]);
  reg(1, "ohvar", "over", ["overapplied overhead"]);
  reg(1, "ohvar", "under", ["underapplied overhead"]);
  reg(1, "ohvar", "pvv", ["production-volume variance"]);
  /* which rate the system uses is a choice, not a shape */
  reg(2, "ohvar", "actual", ["actual costing"]);
  reg(2, "ohvar", "applied", ["normal costing"]);
  reg(2, "ohvar", "prorate", ["proration"]);

  /* --- the job card and the ledger behind it --- */
  reg(1, "jobsheet", "sheet", ["job cost sheet"]);
  reg(1, "jobsheet", "all", ["job order costing"]);
  reg(1, "jobsheet", "mat", ["materials requisition"]);
  reg(1, "jobsheet", "labor", ["labor time ticket"]);
  reg(1, "jobsheet", "control", ["control account"]);
  reg(1, "jobsheet", "sub", ["subsidiary ledger"]);

  /* --- part of a unit is still a cost --- */
  reg(1, "eunits", "partial", ["equivalent units"]);
  reg(1, "eunits", "all", ["process costing"]);
  reg(1, "eunits", "report", ["production cost report"]);
  reg(1, "eunits", "transin", ["transferred-in costs"]);

  /* --- the inspection point and the three bins --- */
  reg(1, "spoil", "all", ["spoilage"]);
  reg(1, "spoil", "point", ["inspection point"]);
  reg(1, "spoil", "normal", ["normal spoilage", "normal loss"]);
  reg(1, "spoil", "abnormal", ["abnormal spoilage"]);
  reg(1, "spoil", "scrap", ["scrap"]);
  reg(1, "spoil", "rework", ["rework"]);

  /* --- the split-off point --- */
  reg(1, "splitoff", "joint", ["joint products"]);
  reg(1, "splitoff", "point", ["split-off point"]);
  reg(1, "splitoff", "by", ["by-product"]);
  reg(1, "splitoff", "sep", ["separable costs"]);
  /* four ways to divide one joint cost; all of them are this pipe, and which one you use
     is arithmetic rather than geometry */
  reg(2, "splitoff", "point", ["sales value at split-off method"]);
  reg(2, "splitoff", "sep", ["net realizable value method"]);
  reg(2, "splitoff", "main", ["physical measure method",
                              "constant gross-margin percentage method"]);
  reg(2, "splitoff", "by", ["production method (by-products)", "sales method (by-products)"]);
  reg(2, "splitoff", "further", ["sell-or-process-further decision"]);

  /* --- the hierarchy: a cost sits at the level that drives it --- */
  reg(1, "hier", "all", ["cost hierarchy", "activity-based costing"]);
  /* The pyramid draws a unit level too, and no term in Book 1 or Book 2 names it - the author
     writes "batch-level cost" and the three sustaining costs and leaves the base implied. So
     the base is drawn as context and registered to nothing: a mark for a word the author never
     wrote would be this file inventing vocabulary, which is the one thing it must not do. */
  reg(1, "hier", "batch", ["batch-level cost"]);
  reg(1, "hier", "prod", ["product-sustaining cost"]);
  reg(1, "hier", "fac", ["facility-sustaining cost"]);
  reg(1, "hier", "cust", ["customer-sustaining cost", "customer cost hierarchy"]);

  /* --- service departments feed producing ones --- */
  reg(1, "svcalloc", "svc", ["service department"]);
  reg(1, "svcalloc", "prod", ["production department"]);
  reg(1, "svcalloc", "single", ["single-rate method"]);
  reg(1, "svcalloc", "dual", ["dual-rate method"]);
  reg(1, "svcalloc", "step", ["step-down method"]);
  reg(1, "svcalloc", "recip", ["reciprocal method"]);

  /* --- how much of what could be made, is --- */
  reg(1, "capacity", "theo", ["theoretical capacity"]);
  reg(1, "capacity", "prac", ["practical capacity"]);
  reg(1, "capacity", "master", ["master-budget capacity"]);
  reg(1, "capacity", "unused", ["unused capacity"]);
  reg(1, "capacity", "spiral", ["downward demand spiral"]);

  /* --- the scatter and the line through it --- */
  reg(1, "scatter", "pts", ["scatter plot"]);
  reg(1, "scatter", "line", ["regression analysis"]);
  reg(1, "scatter", "hilo", ["high-low method"]);
  reg(1, "scatter", "intercept", ["intercept"]);
  reg(1, "scatter", "axis", ["independent variable"]);
  reg(1, "scatter", "yaxis", ["dependent variable"]);
  /* these three MEASURE the fitted line rather than being a shape of their own */
  reg(2, "scatter", "line", ["coefficient of determination", "multiple regression"]);
  reg(2, "scatter", "spread", ["standard error of the estimate", "t-statistic"]);

  /* --- the learning curve --- */
  reg(1, "learn", "curve", ["learning curve"]);
  reg(1, "learn", "rate", ["learning rate"]);
  reg(1, "learn", "cumavg", ["cumulative average-time learning model"]);
  reg(1, "learn", "incr", ["incremental unit-time learning model"]);
  reg(1, "learn", "output", ["cumulative output"]);

  /* --- which side of the line fixed overhead falls on --- */
  reg(1, "absvar", "abs", ["absorption costing"]);
  reg(1, "absvar", "var", ["variable costing"]);
  reg(1, "absvar", "cm", ["contribution margin"]);
  reg(1, "absvar", "cmr", ["contribution margin ratio"]);
  reg(2, "absvar", "cm", ["controllable margin"]);

  /* --- the standard card --- */
  reg(1, "stdcard", "card", ["standard cost card"]);
  reg(1, "stdcard", "all", ["standard costing"]);
  reg(1, "stdcard", "price", ["price standard"]);
  reg(1, "stdcard", "qty", ["quantity standard"]);
  reg(1, "stdcard", "allowed", ["standard quantity allowed"]);
  reg(1, "stdcard", "tight", ["ideal standard"]);
  reg(1, "stdcard", "fair", ["currently attainable standard"]);
  /* who sets the standard is not a position on the scale */
  reg(2, "stdcard", "card", ["participative standard", "authoritative standard"]);

  /* --- the four costs of quality --- */
  reg(1, "quality", "all", ["cost of quality"]);
  reg(1, "quality", "prev", ["prevention costs"]);
  reg(1, "quality", "appr", ["appraisal costs"]);
  reg(1, "quality", "intf", ["internal failure costs"]);
  reg(1, "quality", "extf", ["external failure costs"]);
  reg(1, "quality", "six", ["six sigma"]);
  reg(2, "quality", "all", ["total quality management"]);

  /* --- who asks for the next unit --- */
  reg(1, "pull", "pull", ["pull system"]);
  reg(1, "pull", "push", ["push system"]);
  reg(1, "pull", "kanban", ["kanban"]);
  reg(1, "pull", "jit", ["just-in-time (jit)"]);
  reg(1, "pull", "backflush", ["backflush costing"]);
  reg(1, "pull", "cycle", ["cycle time"]);
  reg(2, "pull", "all", ["lean resource management"]);

  /* --- improve it, then hold the new level --- */
  reg(1, "kaizen", "step", ["kaizen"]);
  reg(1, "kaizen", "pdca", ["pdca cycle"]);
  reg(1, "kaizen", "bench", ["benchmarking"]);
  reg(2, "kaizen", "step", ["continuous improvement"]);
  /* the four benchmarkings are one drawing; they differ in WHO the line belongs to */
  reg(2, "kaizen", "bench", ["competitive benchmarking", "functional benchmarking",
                             "generic benchmarking", "internal benchmarking"]);
  reg(2, "kaizen", "best", ["best practice analysis"]);

  /* --- where in the chain the cost is locked in --- */
  reg(1, "chain", "all", ["value chain"]);
  reg(1, "chain", "up", ["upstream costs"]);
  reg(1, "chain", "down", ["downstream costs"]);
  reg(1, "chain", "locked", ["locked-in costs"]);
  reg(1, "chain", "life", ["life-cycle costing"]);
  reg(1, "chain", "primary", ["primary activities"]);
  reg(1, "chain", "support", ["support activities"]);
  reg(2, "chain", "all", ["value chain analysis"]);

  /* --- the steps, and which of them add something --- */
  reg(1, "procmap", "map", ["process map"]);
  reg(1, "procmap", "va", ["value-added activity"]);
  reg(1, "procmap", "nva", ["non-value-added activity"]);
  reg(1, "procmap", "bpr", ["business process reengineering"]);
  reg(1, "procmap", "activity", ["activity"]);
  reg(2, "procmap", "map", ["process analysis"]);
  reg(2, "procmap", "activity", ["activity analysis"]);

  /* --- the plan and the chain of supply --- */
  reg(1, "supply", "plan", ["master production schedule",
                            "material requirements planning (mrp)"]);
  reg(1, "supply", "erp", ["enterprise resource planning (erp)"]);
  reg(1, "supply", "out", ["outsourcing"]);
  reg(1, "supply", "all", ["supply chain management"]);

  /* --- cumulative profit, customer by customer --- */
  reg(1, "whale", "curve", ["whale curve"]);
  reg(1, "whale", "peak", ["customer profitability analysis"]);
  reg(2, "whale", "serve", ["cost to serve"]);

  /* --- the two ways to compete --- */
  reg(1, "strategy", "cost", ["cost leadership"]);
  reg(1, "strategy", "diff", ["differentiation"]);
  reg(2, "strategy", "unit", ["business unit"]);

  /* =================================================================
   * BOOK 3 - Strategy and Budgeting.
   *
   * 120 bridged terms, registered into the families already here. No new family is
   * drawn for them, and that is a claim about this volume's vocabulary rather than a
   * shortcut: a budget, a variance and a transfer price are the SAME geometry this
   * file already holds - a ladder of steps, two bars with the gap between them, a
   * price between a floor and a ceiling - seen in a different part of the business.
   *
   * TIER 1 is used where the family IS the picture of the word: the standard cost
   * card for a price or usage variance, the overhead-variance family for the overhead
   * variances, the floor/ceiling band for a minimum or market transfer price, the
   * ratio gauge for return on investment. TIER 2 is used where the learner sees the
   * right geometry with the relevant part lit but nothing here claims the author drew
   * a picture of that exact word - "budget revision" is the budget cycle, "static
   * budget" is the unflexed bar of the variance pair.
   * ================================================================= */

  /* --- the plan, as a ladder from mission to budget --- */
  /* `steps5` lights "point" and "over", not s1..s5 - a single rung, or the whole run.
     Every rung of the planning ladder is therefore "point": the geometry says "one step
     of an ordered run", which is true of each of these and is all it claims. */
  reg(2, "steps5", "point", ["mission statement", "vision statement", "long-term goals",
                             "short-term objectives", "tactics", "operational plan",
                             "sales budget"]);
  reg(1, "steps5", "all", ["strategic plan"]);
  reg(2, "steps5", "all", ["strategic planning", "annual profit plan", "master budget"]);

  /* --- choosing a strategy, and reading the field --- */
  reg(1, "strategy", "unit", ["focus strategy"]);
  reg(2, "strategy", "diff", ["competitive advantage"]);
  reg(1, "relation", "both", ["goal congruence"]);
  reg(2, "relation", "both", ["swot analysis", "five forces", "competitive analysis",
                              "situational analysis"]);
  reg(2, "relation", "a", ["pest analysis", "suboptimization"]);
  reg(2, "scatter", "axis", ["bcg growth-share matrix", "relative market share"]);
  reg(2, "scatter", "pts", ["sales forecast"]);
  reg(2, "scatter", "spread", ["sensitivity analysis"]);
  reg(1, "scatter", "line", ["cost formula"]);
  reg(2, "scatter", "line", ["flexible budget"]);
  reg(2, "spend", "estimate", ["contingency", "contingency planning", "scenario planning"]);

  /* --- the budget as a cycle, and who writes it --- */
  reg(1, "cycle", "all", ["budget", "budget cycle"]);
  reg(2, "cycle", "all", ["budget revision", "continuous (rolling) budget"]);
  reg(1, "people", "inv", ["participative budgeting"]);
  reg(2, "pull", "push", ["imposed budget"]);
  reg(2, "costbehave", "all", ["controllable cost"]);
  reg(1, "ladder", "all", ["zero-based budgeting"]);
  reg(2, "ladder", "all", ["decision package"]);
  reg(2, "steps", "all", ["incremental budgeting",
                          "selling and administrative expense budget"]);

  /* --- the operating budgets, which are the manufacturing flow again --- */
  reg(1, "dmdloh", "dm", ["direct materials budget"]);
  reg(1, "dmdloh", "oh", ["overhead budget"]);
  reg(1, "jobsheet", "labor", ["direct labor budget"]);
  reg(2, "flow3", "wip", ["production budget"]);
  reg(1, "flow3", "cogm", ["cost of goods sold budget"]);
  reg(2, "flow3", "fg", ["inventory policy"]);
  reg(2, "pull", "jit", ["procurement policy"]);
  reg(1, "steps", "all", ["operating budget"]);
  reg(2, "hier", "all", ["activity-based budgeting"]);
  reg(1, "spend", "cap", ["capital expenditure budget"]);
  reg(2, "spend", "cap", ["project budget"]);

  /* --- cash in, cash out, and what the plan needs from outside --- */
  reg(1, "three", "cash", ["cash budget"]);
  reg(1, "costin", "in", ["cash collections"]);
  reg(1, "costin", "out", ["cash disbursements"]);
  reg(2, "timeline", "receive", ["credit policy"]);
  reg(2, "band", "floor", ["minimum cash balance"]);
  reg(1, "three", "fin", ["required outside financing"]);
  reg(2, "move", "out", ["dividend policy"]);

  /* --- the pro forma set --- */
  /* `doc` lights "notes" and "set"; the individual statements are not separately lit, so
     each pro forma statement is the SET with the stack shown. */
  reg(1, "doc", "set", ["pro forma financial statements"]);
  reg(2, "doc", "set", ["financial budget",
                        "operating budget (budgeted income statement)",
                        "pro forma statement of cash flows"]);
  reg(1, "bands", "all", ["pro forma balance sheet"]);

  /* --- variances: two bars and the gap between them --- */
  reg(1, "absvar", "var", ["favorable variance"]);
  reg(2, "absvar", "var", ["unfavorable variance", "flexible-budget variance",
                           "budgetary slack"]);
  reg(2, "absvar", "abs", ["master-budget (static-budget) variance", "static budget"]);
  reg(1, "absvar", "cm", ["sales-volume variance"]);
  reg(2, "absvar", "cm", ["sales-mix variance", "sales-quantity variance"]);
  reg(2, "absvar", "cmr", ["sales-price variance", "weighted-average contribution margin"]);
  reg(2, "kaizen", "bench", ["management by exception"]);
  reg(1, "kaizen", "pdca", ["corrective action"]);

  /* --- the standard cost card: price on one axis, quantity on the other --- */
  reg(1, "stdcard", "price", ["direct material price variance", "direct labor rate variance"]);
  reg(1, "stdcard", "qty", ["direct material usage variance",
                            "direct labor efficiency variance"]);
  reg(2, "stdcard", "qty", ["materials mix variance"]);
  reg(2, "stdcard", "allowed", ["materials yield variance"]);

  /* --- overhead: actual against applied --- */
  reg(1, "ohvar", "actual", ["fixed overhead spending variance"]);
  reg(2, "ohvar", "actual", ["overhead spending variance",
                             "variable overhead spending variance"]);
  reg(2, "ohvar", "applied", ["variable overhead efficiency variance"]);

  /* --- responsibility centers and what is traced to them --- */
  reg(1, "flowsplit", "profit", ["profit center"]);
  reg(2, "flowsplit", "profit", ["investment center"]);
  reg(2, "flowsplit", "down", ["cost center"]);
  reg(2, "flowsplit", "up", ["revenue center"]);
  reg(2, "whale", "curve", ["segment margin"]);
  reg(2, "whale", "serve", ["customer perspective"]);
  reg(2, "svcalloc", "svc", ["common cost"]);
  reg(2, "svcalloc", "single", ["stand-alone cost allocation"]);
  reg(2, "svcalloc", "step", ["incremental cost allocation"]);

  /* --- the transfer price, between a floor and a ceiling --- */
  reg(1, "move", "within", ["transfer price"]);
  reg(1, "band", "floor", ["minimum transfer price"]);
  reg(2, "band", "floor", ["variable-cost transfer price"]);
  reg(1, "band", "cost", ["full-cost transfer price"]);
  /* the outside price IS the ceiling of the band, which is what `band` lights */
  reg(1, "band", "ceiling", ["market-based transfer price"]);
  reg(2, "band", "ceiling", ["negotiated transfer price"]);
  reg(1, "svcalloc", "dual", ["dual-rate transfer pricing"]);
  reg(2, "book", "intl", ["expropriation risk"]);

  /* --- the measures a division is judged on --- */
  /* `gauge` lights no part of its own - it is the dial, and the dial is the picture of a
     measure. Every one of these is a measure read off it. */
  reg(1, "gauge", "all", ["return on investment (roi)", "asset turnover"]);
  reg(2, "gauge", "all", ["return on sales (operating margin)", "investment base",
                          "required rate of return", "capital charge",
                          "key performance indicator (kpi)", "residual income (ri)",
                          "feasibility"]);

  /* --- the scorecard: four perspectives and the map between them --- */
  /* `capitals6` lights "process", "out" and "all". The financial and learning
     perspectives are not separately lit, so they take the whole wheel. */
  reg(1, "capitals6", "process", ["internal process perspective"]);
  reg(2, "capitals6", "all", ["financial perspective", "learning and growth perspective",
                              "balanced scorecard", "critical success factor (csf)"]);
  reg(1, "procmap", "map", ["strategy map"]);
  reg(2, "dates", "rec", ["lagging indicator"]);
  reg(2, "dates", "all", ["leading indicator"]);

  /* =================================================================
   * BOOK 4 - Internal Controls and Technology. 158 terms, into the
   * fourteen families written for them above. Every part named here is
   * one its family's drawing lights; `cma_icons` I4 reads the drawing
   * back and refused 28 of Book 3's 120 for naming parts that did not
   * exist. `all` lights the whole family and is used where the term
   * names the idea the family IS, rather than one piece of it.
   * ================================================================= */

  /* --- the shield: what a control is, and what it can promise --- */
  reg(1, "ctrl", "all", ["internal control", "control activity"]);
  reg(2, "ctrl", "prevent", ["preventive control", "safeguarding control"]);
  reg(2, "ctrl", "detect", ["detective control", "independent check"]);
  reg(2, "ctrl", "envir", ["control environment", "present and functioning"]);
  reg(2, "ctrl", "assure", ["reasonable assurance"]);
  reg(2, "ctrl", "tone", ["tone at the top"]);
  reg(2, "ctrl", "override", ["management override"]);

  /* --- three risks, compounding --- */
  reg(2, "risk3", "inherent", ["inherent risk"]);
  reg(2, "risk3", "control", ["control risk"]);
  reg(2, "risk3", "detection", ["detection risk"]);
  reg(2, "risk3", "audit", ["audit risk"]);
  reg(2, "risk3", "misstate", ["material misstatement"]);
  reg(2, "risk3", "weakness", ["material weakness", "adverse opinion"]);
  reg(2, "risk3", "all", ["re-performance"]);

  /* --- the hierarchy of documents --- */
  reg(1, "govern", "all", ["corporate governance"]);
  reg(2, "govern", "charter", ["articles of incorporation"]);
  reg(2, "govern", "bylaw", ["bylaws"]);
  reg(2, "govern", "policy", ["record retention policy"]);
  reg(2, "govern", "board", ["duty of care"]);
  reg(2, "govern", "committee", ["audit committee"]);
  reg(2, "govern", "duty", ["duty of loyalty", "job rotation", "mandatory leave"]);

  /* --- four duties in four corners --- */
  reg(1, "duties4", "all", ["segregation of duties"]);
  reg(2, "duties4", "authorise", ["authorization", "authority limit"]);
  reg(2, "duties4", "custody", ["custody", "custodial accountability"]);
  reg(2, "duties4", "form", ["prenumbered form"]);

  /* --- the statute, the signature and the overseer --- */
  reg(1, "statute", "all", ["sarbanes-oxley act"]);
  reg(2, "statute", "certify", ["internal control over financial reporting (icfr)"]);
  reg(2, "statute", "attest", ["accelerated filer"]);
  reg(2, "statute", "oversee", ["public company accounting oversight board (pcaob)"]);
  reg(2, "statute", "bribe", ["foreign corrupt practices act (fcpa)"]);
  reg(2, "statute", "books", ["internal accounting controls"]);
  reg(2, "statute", "topdown", ["top-down approach"]);
  reg(2, "statute", "bottomup", ["bottom-up approach"]);

  /* --- the five systems roles --- */
  reg(2, "sysrole", "analyst", ["systems analyst"]);
  reg(2, "sysrole", "librarian", ["librarian"]);
  reg(2, "sysrole", "threat", ["input manipulation", "program alteration",
                               "direct file alteration"]);

  /* --- the gate --- */
  reg(2, "access", "physical", ["physical access control"]);
  reg(2, "access", "logical", ["logical access control"]);
  reg(2, "access", "privilege", ["least privilege"]);
  reg(2, "access", "biometric", ["biometrics"]);
  reg(2, "access", "scan", ["vulnerability scanning", "penetration testing"]);

  /* --- the wire --- */
  reg(2, "wire", "internet", ["internet"]);
  reg(2, "wire", "leased", ["leased line"]);
  reg(2, "wire", "firewall", ["firewall"]);
  reg(2, "wire", "symmetric", ["symmetric encryption"]);
  reg(2, "wire", "asymmetric", ["asymmetric encryption"]);
  reg(2, "wire", "signature", ["digital signature"]);
  reg(2, "wire", "middle", ["man in the middle"]);
  reg(1, "wire", "all", ["data encryption"]);

  /* --- the copy and the clock --- */
  reg(2, "restore", "full", ["system development control", "adaptability"]);
  reg(2, "restore", "incr", ["incremental backup"]);
  reg(2, "restore", "diff", ["differential backup"]);
  reg(2, "restore", "offsite", ["remote site"]);
  reg(2, "restore", "rto", ["recovery time objective"]);
  reg(2, "restore", "rpo", ["recovery point objective"]);
  reg(2, "restore", "bcp", ["business continuity planning"]);
  reg(2, "restore", "dr", ["disaster recovery planning"]);
  reg(2, "restore", "bia", ["business impact analysis"]);

  /* --- the cycles --- */
  reg(1, "cycles", "ais", ["accounting information system"]);
  reg(2, "cycles", "revenue", ["revenue cycle"]);
  reg(2, "cycles", "expenditure", ["expenditure cycle"]);
  reg(2, "cycles", "production", ["production cycle"]);
  reg(2, "cycles", "ledger", ["general ledger and reporting cycle"]);
  reg(2, "cycles", "txn", ["transaction cycle"]);
  reg(2, "cycles", "single", ["single view"]);
  reg(2, "cycles", "nonfin", ["nonfinancial system"]);

  /* --- two tables and the key --- */
  reg(1, "dbase", "table", ["relational database"]);
  reg(2, "dbase", "primary", ["primary key"]);
  reg(2, "dbase", "foreign", ["foreign key", "join"]);
  reg(2, "dbase", "integrity", ["referential integrity"]);
  reg(2, "dbase", "warehouse", ["data warehouse"]);
  reg(2, "dbase", "mart", ["data mart"]);
  reg(2, "dbase", "module", ["module"]);
  reg(2, "dbase", "dbms", ["database management system (dbms)"]);
  reg(2, "dbase", "epm", ["enterprise performance management (epm)"]);
  reg(2, "dbase", "integrate", ["integration"]);
  reg(2, "dbase", "all", ["structured query language (sql)", "data dictionary"]);

  /* --- the life cycle of a fact --- */
  reg(1, "datalife", "all", ["data life cycle"]);
  reg(2, "datalife", "govern", ["data governance"]);
  reg(2, "datalife", "manage", ["data management"]);
  reg(2, "datalife", "capture", ["preprocessing"]);
  reg(2, "datalife", "synth", ["synthesis", "data reduction"]);
  reg(2, "datalife", "analytics", ["analytics"]);
  reg(2, "datalife", "archive", ["archival"]);
  reg(2, "datalife", "purge", ["purging"]);
  reg(2, "datalife", "retain", ["litigation hold"]);
  reg(2, "datalife", "clean", ["data cleaning"]);
  reg(2, "datalife", "owner", ["data owner"]);

  /* --- the build, and the three ways to buy instead --- */
  reg(1, "build", "all", ["system development life cycle (sdlc)"]);
  reg(2, "build", "conceptual", ["conceptual design"]);
  reg(2, "build", "physical", ["physical design"]);
  reg(2, "build", "bpa", ["business process analysis"]);
  reg(2, "build", "rpa", ["robotic process automation (rpa)"]);
  reg(2, "build", "cloud", ["cloud computing"]);
  reg(2, "build", "saas", ["software as a service (saas)"]);
  reg(2, "build", "chain", ["blockchain"]);
  reg(2, "build", "dist", ["distributed ledger"]);
  reg(2, "build", "smart", ["smart contract"]);

  /* --- the four V's and the three shapes --- */
  reg(1, "bigv", "all", ["big data"]);
  reg(2, "bigv", "volume", ["flowchart"]);
  reg(2, "bigv", "veracity", ["veracity"]);
  reg(2, "bigv", "structured", ["structured data"]);
  reg(2, "bigv", "semi", ["semi-structured data"]);
  reg(2, "bigv", "unstruct", ["unstructured data"]);
  reg(2, "bigv", "insight", ["insight"]);
  reg(2, "bigv", "bi", ["business intelligence (bi)"]);
  reg(2, "bigv", "capab", ["data science capability"]);

  /* --- four questions, and how a model is fitted --- */
  reg(2, "fourq", "descriptive", ["descriptive analytics"]);
  reg(2, "fourq", "diagnostic", ["diagnostic analytics"]);
  reg(2, "fourq", "predictive", ["predictive analytics"]);
  reg(2, "fourq", "prescriptive", ["prescriptive analytics"]);
  reg(2, "fourq", "cluster", ["clustering"]);
  reg(2, "fourq", "classify", ["classification"]);
  reg(2, "fourq", "over", ["overfitting"]);
  reg(2, "fourq", "under", ["underfitting"]);
  reg(2, "fourq", "logistic", ["logistic regression"]);
  reg(2, "fourq", "corr", ["correlation coefficient", "association"]);
  reg(1, "fourq", "all", ["data mining", "iterative process"]);

  /* --- the series and its parts --- */
  reg(2, "tseries", "trend", ["trend"]);
  reg(2, "tseries", "seasonal", ["seasonal variation"]);
  reg(2, "tseries", "cyclical", ["cyclical variation"]);
  reg(2, "tseries", "irregular", ["irregular variation"]);
  reg(2, "tseries", "factor", ["seasonal factor"]);
  reg(2, "tseries", "eda", ["exploratory data analysis"]);
  reg(2, "tseries", "interval", ["confidence interval"]);
  reg(2, "tseries", "gof", ["goodness of fit"]);

  /* --- the spread --- */
  reg(2, "chance", "expected", ["expected value"]);
  reg(2, "chance", "monte", ["monte carlo technique"]);
  reg(2, "chance", "model", ["simulation model"]);
  reg(2, "chance", "sens", ["batch total"]);
  reg(2, "chance", "whatif", ["what-if analysis"]);
  reg(2, "chance", "goal", ["goal seeking"]);
  reg(2, "chance", "pct", ["percentile"]);

  /* --- the form follows the question --- */
  reg(1, "chartpick", "all", ["data visualization"]);
  reg(2, "chartpick", "hist", ["histogram"]);
  reg(2, "chartpick", "box", ["box plot"]);
  reg(2, "chartpick", "dash", ["dashboard"]);
  reg(2, "chartpick", "truncate", ["truncated axis"]);
  reg(2, "chartpick", "table", ["hash total"]);
  reg(2, "chartpick", "bar", ["input control"]);

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
