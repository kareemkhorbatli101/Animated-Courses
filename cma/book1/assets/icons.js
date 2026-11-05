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
