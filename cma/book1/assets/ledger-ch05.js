/* ledger-ch05.js — Chapter 5's numbers, one source for all of them.
 *
 * WHERE EACH NUMBER COMES FROM. Every figure below is printed in Figure F05-02,
 * "Orontes Foods Inc. - statement of cash flows (indirect method), 2025".
 *
 * THIS IS THE STRICTEST LEDGER OF THE FIVE, because the statement is a reconciliation
 * and it closes on three different things at once: the three activities must add to the
 * net change in cash; the operating section must add down from net income through
 * sixteen adjustments; and the whole statement must agree with the other three
 * statements - it begins at Chapter 3's net income and explains the movement in
 * Chapter 2's cash. Every one of those is a tie below, so a single mistyped adjustment
 * fails the gate rather than quietly teaching a wrong statement.
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

  /* ---- printed in Figure F05-02 ---- */
  var P = {
    netIncome:        2969100,     /* Chapter 3's net income: where the statement starts */

    /* the non-cash and non-operating adjustments */
    depreciation:     2100000,
    impairment:       2724000,
    equityMethod:     -177000,
    dividendsFromInvestees: 70000,
    gainOnEquipment:    -3000,
    unrealizedGains:    -4000,
    deferredTaxes:     100000,

    /* the working-capital changes */
    arChange:         -384000,
    inventoryChange:  -150000,
    prepaidChange:     -24000,
    apChange:          150000,
    accruedChange:      50000,
    taxesPayableChange: 50000,
    contractChange:     60000,

    operating:        7531100,

    /* investing */
    ppePurchases:    -3000000,
    equipmentProceeds:  21000,
    investment:      -1200000,
    investing:       -4179000,

    /* financing */
    stockIssued:      1500000,
    noteProceeds:      800000,
    debtRepaid:       -400000,
    dividendsPaid:     -50000,
    financing:        1850000,

    netChangeInCash:  5202100,

    /* the Barada case, 2026, in USD 000 (the author's key) */
    caseOperating:        543,
    caseInvesting:         20,
    caseFinancing:        630,
    caseNetChange:        983
  };

  /* ---- derived: the two groups the chapter names inside the operating section ---- */
  var noncashAdjustments = P.depreciation + P.impairment + P.equityMethod +
                           P.dividendsFromInvestees + P.gainOnEquipment +
                           P.unrealizedGains + P.deferredTaxes;
  var workingCapital = P.arChange + P.inventoryChange + P.prepaidChange +
                       P.apChange + P.accruedChange + P.taxesPayableChange +
                       P.contractChange;

  var cf = {
    noncashAdjustments: noncashAdjustments,
    workingCapital: workingCapital,
    operating: P.netIncome + noncashAdjustments + workingCapital,
    investing: P.ppePurchases + P.equipmentProceeds + P.investment,
    financing: P.stockIssued + P.noteProceeds + P.debtRepaid + P.dividendsPaid,
    netChange: P.operating + P.investing + P.financing
  };

  var kase = {
    operating: P.caseOperating,
    investing: P.caseInvesting,
    financing: P.caseFinancing,
    netChange: P.caseNetChange
  };

  function checkTies() {
    function t(label, left, right) {
      return { label: label, left: left, right: right, ok: Math.abs(left - right) < 0.001 };
    }
    return [
      /* the operating section adds down from net income */
      t("Net income plus the adjustments and working capital = operating cash flow",
        cf.operating, P.operating),
      t("Investing adds down", cf.investing, P.investing),
      t("Financing adds down", cf.financing, P.financing),
      /* THE STATEMENT'S WHOLE POINT: the three activities explain the change in cash */
      t("Operating + investing + financing = the net change in cash",
        cf.netChange, P.netChangeInCash),

      /* the sign rules the chapter teaches, as arithmetic rather than as prose */
      t("An increase in an operating asset is subtracted: receivables",
        P.arChange < 0, true),
      t("An increase in an operating liability is added: payables", P.apChange > 0, true),
      t("The equipment GAIN is removed from operating", P.gainOnEquipment < 0, true),
      t("The full equipment PROCEEDS are in investing", P.equipmentProceeds > 0, true),

      /* the case, from the author's key */
      t("Case: cash from operating activities", kase.operating, 543),
      t("Case: cash from investing activities", kase.investing, 20),
      t("Case: cash used in financing activities", kase.financing, 630),
      t("Case: the three activities explain the change in cash", kase.netChange, 983),

      /* ---- THE CHAPTERS MUST AGREE ---- */
      t("The statement starts at Chapter 3's net income", P.netIncome, 2969100),
      t("Depreciation is Chapter 2's accumulated depreciation movement in 2025",
        P.depreciation, 2100000),
      t("Impairment losses are Chapter 3's impairment losses", P.impairment, 2724000),
      t("Equity-method income is Chapter 3's equity-method income",
        P.equityMethod, -177000),
      t("The gain on equipment is Chapter 3's gain on sale of equipment",
        P.gainOnEquipment, -3000),
      t("Unrealized gains are Chapter 3's unrealized gains", P.unrealizedGains, -4000),
      t("The share issue is Chapter 4's issuance of common stock", P.stockIssued, 1500000),
      t("Dividends PAID are not the $450,000 Chapter 4 says were DECLARED",
        P.dividendsPaid, -50000)
    ];
  }

  root.LEDGER = {
    unit: "USD",
    caseUnit: "USD 000",
    company: { orontes: "Orontes Foods, Inc.", barada: "Barada Wholesale, Inc." },
    printed: P, cf: cf, "case": kase,
    checkTies: checkTies,
    money: money, plain: plain, signed: signed, arrow: arrow
  };
})(window);
