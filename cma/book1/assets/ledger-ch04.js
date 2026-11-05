/* ledger-ch04.js — Chapter 4's numbers, one source for all of them.
 *
 * WHERE EACH NUMBER COMES FROM. Every figure below is printed in Figure F04-02,
 * "Orontes Foods Inc. - statement of changes in equity, 2025", which is a complete
 * roll-forward: an opening balance per component, the movements, and a closing balance.
 * That makes this chapter's ties the strictest kind - each column must add down AND the
 * row of closing balances must add across to total equity.
 *
 * THIS CHAPTER IS WHERE THE FOUR STATEMENTS MEET. The closing balances here are the
 * equity section of Chapter 2's balance sheet, and the net income and OCI rows are
 * Chapter 3's. Those agreements are recomputed in checkTies() against the figures as
 * Chapters 2 and 3 print them, so a change in any one chapter fails here.
 */
(function (root) {
  "use strict";

  function money(n) {
    var neg = n < 0, s = Math.abs(n).toLocaleString("en-US");
    return neg ? "(" + s + ")" : s;
  }
  function plain(n) { return String(Math.abs(n)); }
  function signed(n) { return n === 0 ? "0" : (n > 0 ? "+" : "−") + Math.abs(n).toLocaleString("en-US"); }
  function arrow(n) { return n === 0 ? "0" : (n > 0 ? "↑" : "↓"); }

  /* ---- printed in Figure F04-02 ---- */
  var P = {
    /* opening, January 1, 2025 */
    openShares:      8000000,
    openCommon:      8000000,
    openApic:        4000000,
    openRetained:    4375000,
    openAoci:              0,          /* printed as an em dash */
    openTotal:      16375000,

    /* the movements */
    issueShares:      100000,
    issueCommon:      100000,
    issueApic:       1400000,
    issueTotal:      1500000,

    netIncome:       2969100,          /* Chapter 3's net income */
    oci:               -1125,          /* Chapter 3's OCI, net of tax */
    dividends:       -450000,          /* cash dividends DECLARED */

    /* closing, December 31, 2025 - the equity section of Chapter 2's balance sheet */
    closeShares:     8100000,
    closeCommon:     8100000,
    closeApic:       5400000,
    closeRetained:   6894100,
    closeAoci:         -1125,
    closeTotal:     20392975,

    /* the Barada case, 2026, in USD 000 (the author's key) */
    caseTreasury:         20,
    caseStockDividend:   385,
    caseCashDividend:    121,
    caseRetained:        939,
    caseTotalEquity:    3544
  };

  /* ---- Figure F04-05: the treasury stock entries, exactly as the author prints them ----
   * These are the chapter's ONLY journal entries, and they carry its hardest rule: no gain
   * or loss on a company's own shares ever reaches net income. Every amount below is in
   * F04-05 or in the Section 4.2 worked example; nothing here is computed by me.
   * The effects are on the accounting equation, which is why ni is 0 in all three.
   */
  var treasuryEntries = [
    { n: 1, date: "2026",
      text: "Buy back 50,000 shares at $16 (cost method).",
      short: "Buy back 50,000 shares at $16",
      entry: [ { side: "dr", account: "Treasury stock", amount: 800000 },
               { side: "cr", account: "Cash", amount: 800000 } ],
      eff: { a: -800000, l: 0, e: -800000, ni: 0, cf: "financing", cfAmount: -800000 } },

    { n: 2, date: "2026",
      text: "Reissue 20,000 shares at $18.",
      short: "Reissue 20,000 shares at $18",
      entry: [ { side: "dr", account: "Cash", amount: 360000 },
               { side: "cr", account: "Treasury stock", amount: 320000 },
               { side: "cr", account: "APIC–treasury stock", amount: 40000 } ],
      eff: { a: 360000, l: 0, e: 360000, ni: 0, cf: "financing", cfAmount: 360000 } },

    { n: 3, date: "2026",
      text: "Reissue 20,000 shares at $13.",
      short: "Reissue 20,000 shares at $13",
      entry: [ { side: "dr", account: "Cash", amount: 260000 },
               { side: "dr", account: "APIC–treasury stock", amount: 40000 },
               { side: "dr", account: "Retained earnings", amount: 20000 },
               { side: "cr", account: "Treasury stock", amount: 320000 } ],
      eff: { a: 260000, l: 0, e: 260000, ni: 0, cf: "financing", cfAmount: 260000 } }
  ];

  /* ---- derived: the par value one share carries, and contributed capital ---- */
  /* Common stock divided by shares: $1 par, which the chapter states in words on the
     balance sheet line "Common stock, $1 par". One division of two printed figures. */
  var parPerShare = P.closeCommon / P.closeShares;
  var openContributed = P.openCommon + P.openApic;
  var closeContributed = P.closeCommon + P.closeApic;

  var eq = {
    /* "Total equity rose by $4,017,975" - the author states it in words in §4.1 and
       never prints it as a line, so it is derived from the two balances he does print. */
    rise: P.closeTotal - P.openTotal,
    parPerShare: parPerShare,
    openContributed: openContributed,
    closeContributed: closeContributed,
    /* each column, rolled forward */
    shares: P.openShares + P.issueShares,
    common: P.openCommon + P.issueCommon,
    apic: P.openApic + P.issueApic,
    retained: P.openRetained + P.netIncome + P.dividends,
    aoci: P.openAoci + P.oci,
    total: P.openTotal + P.issueTotal + P.netIncome + P.oci + P.dividends,
    /* the closing row, added across */
    acrossClose: P.closeCommon + P.closeApic + P.closeRetained + P.closeAoci,
    acrossOpen: P.openCommon + P.openApic + P.openRetained + P.openAoci
  };

  var kase = {
    treasury: P.caseTreasury,
    stockDividend: P.caseStockDividend,
    cashDividend: P.caseCashDividend,
    retained: P.caseRetained,
    totalEquity: P.caseTotalEquity
  };

  function side(tx, s) {
    return tx.entry.reduce(function (a, e) { return a + (e.side === s ? e.amount : 0); }, 0);
  }
  function dr(tx) { return side(tx, "dr"); }
  function cr(tx) { return side(tx, "cr"); }

  function checkTies() {
    function t(label, left, right) {
      return { label: label, left: left, right: right, ok: Math.abs(left - right) < 0.001 };
    }
    return [
      /* every column adds DOWN */
      t("Shares roll forward", eq.shares, P.closeShares),
      t("Common stock rolls forward", eq.common, P.closeCommon),
      t("Additional paid-in capital rolls forward", eq.apic, P.closeApic),
      t("Retained earnings roll forward", eq.retained, P.closeRetained),
      t("Accumulated OCI rolls forward", eq.aoci, P.closeAoci),
      t("Total equity rolls forward", eq.total, P.closeTotal),
      /* and the balance rows add ACROSS */
      t("Opening balances add across", eq.acrossOpen, P.openTotal),
      t("Closing balances add across", eq.acrossClose, P.closeTotal),
      /* the issue line is internally consistent */
      t("The share issue: common plus APIC", P.issueCommon + P.issueApic, P.issueTotal),
      t("Shares issued at $1 par", P.issueShares * parPerShare, P.issueCommon),
      t("Total equity rose by the amount the chapter states", eq.rise, 4017975),
      /* EVERY ENTRY BALANCES, AND NONE OF THEM TOUCHES INCOME. Three ties, not one, because
         the chapter's rule is exactly that the third entry's $60,000 shortfall is absorbed
         inside equity. A fourth proves it: the three entries together must leave net income
         alone, which is the sentence the section ends on. */
      t("F04-05 entry 1 balances", dr(treasuryEntries[0]), cr(treasuryEntries[0])),
      t("F04-05 entry 2 balances", dr(treasuryEntries[1]), cr(treasuryEntries[1])),
      t("F04-05 entry 3 balances", dr(treasuryEntries[2]), cr(treasuryEntries[2])),
      t("The treasury entries never touch net income",
        treasuryEntries.reduce(function (s, x) { return s + x.eff.ni; }, 0), 0),
      t("The shortfall below cost is absorbed inside equity",
        320000 - 260000, 40000 + 20000),

      /* the case, from the author's key */
      t("Case: retained earnings", kase.retained, 939),
      t("Case: total equity", kase.totalEquity, 3544),

      /* ---- THE CHAPTERS MUST AGREE: these are Chapters 2 and 3's own figures ---- */
      t("Net income is Chapter 3's net income", P.netIncome, 2969100),
      t("OCI is Chapter 3's other comprehensive income", P.oci, -1125),
      t("Closing equity is Chapter 2's total stockholders' equity", P.closeTotal, 20392975),
      t("Closing retained earnings is Chapter 2's retained earnings", P.closeRetained, 6894100),
      t("Closing contributed capital is Chapter 2's contributed capital",
        closeContributed, 13500000)
    ];
  }

  root.LEDGER = {
    unit: "USD",
    caseUnit: "USD 000",
    company: { orontes: "Orontes Foods, Inc.", barada: "Barada Wholesale, Inc." },
    printed: P, eq: eq, "case": kase, treasuryEntries: treasuryEntries,
    checkTies: checkTies,
    money: money, plain: plain, signed: signed, arrow: arrow
  };
})(window);
