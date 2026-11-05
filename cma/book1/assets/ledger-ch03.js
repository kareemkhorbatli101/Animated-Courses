/* ledger-ch03.js — Chapter 3's numbers, one source for all of them.
 *
 * WHY A LEDGER PER CHAPTER. The provenance lock widens its numeric vocabulary from
 * whatever LEDGER it is handed, so pointing Chapter 3 at Chapter 2's figures would
 * quietly licence the balance sheet's numbers inside the income statement's pages.
 * Each chapter brings its own, and the cross-chapter agreements are asserted rather
 * than assumed - see checkTies() at the end.
 *
 * WHERE EACH NUMBER COMES FROM. Every figure below is printed in Figure F03-02,
 * "Orontes Foods Inc. - statement of income and comprehensive income, 2025", except
 * the two noted as DERIVED, and each of those is one subtraction of two printed
 * figures. The ladder of subtotals is what this chapter is about, so every rung of it
 * is recomputed in checkTies() from the lines above it: a mistyped figure fails the
 * gate instead of quietly teaching a wrong statement.
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

  /* ---- printed in the chapter (Figure F03-02 unless noted) ---- */
  var P = {
    netSales:        42000000,
    cogs:           -27300000,
    grossProfit:     14700000,

    sga:             -7237000,
    creditLoss:        -63000,
    randd:            -500000,
    impairment:      -2724000,
    totalOpEx:      -10524000,
    operatingIncome:  4176000,

    interestExpense:  -390000,
    interestIncome:      3800,
    unrealizedGains:     4000,
    equityMethod:      177000,
    gainOnEquipment:     3000,
    lossOnReceivables: -15000,
    totalOther:       -217200,

    preTaxIncome:     3958800,
    taxExpense:       -989700,
    netIncome:        2969100,

    eps:                 0.37,            /* "$0.37", basic and diluted */
    wavgShares:       8099726,

    ociTax:               375,            /* "net of tax of 375" */
    ociLoss:            -1125,            /* unrealized loss on AFS debt securities */
    comprehensive:    2967975,

    /* the single-step form, printed in Figure F03-10 (Extended Example 3A). These are
       NOT derived: the author prints both totals, and checkTies() proves that the same
       lines, grouped the other way, reach them. */
    totalRevenues:   42187800,
    totalExpenses:  -39218700,
    ociBeforeTax:       -1500,

    /* the Barada case, 2026, in USD 000 (Figure F03-13 and the author's key) */
    caseOperatingIncome: 380,
    caseContinuing:      240,
    caseDiscontinued:     75,
    caseNetIncome:       165
  };

  /* ---- derived: two rungs the chapter states in words rather than printing ---- */
  /* "Income before income taxes" less tax is net income; both are printed, so the tax
     RATE is the only thing derived here, and it is only ever shown as a check. */
  var effectiveRate = Math.round((-P.taxExpense / P.preTaxIncome) * 10000) / 10000;
  /* The single-step form reaches the same net income from a different grouping; the
     chapter's whole point in F03-03. Total revenues and total expenses are DERIVED. */
  var totalRevenues = P.netSales + P.interestIncome + P.unrealizedGains +
                      P.equityMethod + P.gainOnEquipment;
  var totalExpenses = P.cogs + P.totalOpEx + P.interestExpense + P.lossOnReceivables +
                      P.taxExpense;

  var is = {
    grossProfit: P.netSales + P.cogs,
    totalOpEx: P.sga + P.creditLoss + P.randd + P.impairment,
    operatingIncome: P.netSales + P.cogs + (P.sga + P.creditLoss + P.randd + P.impairment),
    totalOther: P.interestExpense + P.interestIncome + P.unrealizedGains +
                P.equityMethod + P.gainOnEquipment + P.lossOnReceivables,
    netIncome: P.preTaxIncome + P.taxExpense,
    comprehensive: P.netIncome + P.ociLoss,
    effectiveRate: effectiveRate,
    totalRevenues: totalRevenues,
    totalExpenses: totalExpenses,
    singleStepNetIncome: totalRevenues + totalExpenses
  };
  is.preTaxIncome = is.operatingIncome + is.totalOther;

  var kase = {
    operatingIncome: P.caseOperatingIncome,
    continuing: P.caseContinuing,
    discontinued: P.caseDiscontinued,
    netIncome: P.caseNetIncome
  };

  /* Every rung the chapter itself asserts, recomputed from the lines above it. */
  function checkTies() {
    function t(label, left, right) {
      return { label: label, left: left, right: right, ok: Math.abs(left - right) < 0.001 };
    }
    return [
      t("Net sales less cost of goods sold = gross profit", is.grossProfit, P.grossProfit),
      t("The four operating expenses = total operating expenses", is.totalOpEx, P.totalOpEx),
      t("Gross profit less operating expenses = operating income",
        P.grossProfit + P.totalOpEx, P.operatingIncome),
      t("The six other items = total other income and expense", is.totalOther, P.totalOther),
      t("Operating income plus other = income before income taxes",
        P.operatingIncome + P.totalOther, P.preTaxIncome),
      t("Income before taxes less tax = net income", is.netIncome, P.netIncome),
      t("Net income plus OCI = comprehensive income", is.comprehensive, P.comprehensive),
      /* THE CHAPTER'S OWN POINT: the two formats must reach the same net income. */
      t("Single-step reaches the same net income as multi-step",
        is.singleStepNetIncome, P.netIncome),
      t("The same lines, grouped as revenues and gains, give the printed total",
        totalRevenues, P.totalRevenues),
      t("The same lines, grouped as expenses and losses, give the printed total",
        totalExpenses, P.totalExpenses),
      t("Printed single-step total revenues less total expenses = net income",
        P.totalRevenues + P.totalExpenses, P.netIncome),
      t("The OCI loss before tax, less the tax effect, is the OCI shown",
        P.ociBeforeTax + P.ociTax, P.ociLoss),
      /* the case, from the author's key */
      t("Case: operating income", kase.operatingIncome, 380),
      t("Case: income from continuing operations", kase.continuing, 240),
      t("Case: loss from discontinued operations, net of tax", kase.discontinued, 75),
      t("Case: continuing less discontinued = net income",
        kase.continuing - kase.discontinued, kase.netIncome)
    ];
  }

  /* The four statements describe ONE company and ONE year, so Chapter 3's net income is
     the figure Chapter 4 rolls forward and Chapter 5 starts from, and its comprehensive
     income is the figure Chapter 2 carries in AOCI. Those agreements are asserted in
     gates/cma_crosstie rather than here, because no single chapter owns them. */
  root.LEDGER = {
    unit: "USD",
    caseUnit: "USD 000",
    company: { orontes: "Orontes Foods, Inc.", barada: "Barada Wholesale, Inc." },
    printed: P, is: is, "case": kase,
    checkTies: checkTies,
    money: money, plain: plain, signed: signed, arrow: arrow
  };
})(window);
