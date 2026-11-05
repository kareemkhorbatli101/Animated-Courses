/* ledger-ch02.js — Chapter 2's numbers, one source for all of them.
 *
 * WHY A SECOND LEDGER. assets/ledger.js holds Chapter 1's Barada trial balance in USD 000.
 * Chapter 2's statement is Orontes in whole US dollars, and the provenance lock widens its
 * numeric vocabulary from whatever LEDGER it is handed — so pointing Chapter 2 at Chapter 1's
 * figures would quietly licence Chapter 1's numbers inside Chapter 2's pages. Each chapter
 * brings its own.
 *
 * WHERE EACH NUMBER COMES FROM. Every figure below carries the block of the chapter that prints
 * it. Both contra amounts ARE printed — Figure F02-02 puts them in the line labels themselves,
 * "Accounts receivable, net of allowance (2025: 156,000; 2024: 140,000)" and "Property, plant and
 * equipment, net of accumulated depreciation (2025: 11,988,000; 2024: 8,000,000)" — so only the
 * two GROSS amounts are derived, and each is one addition of two printed figures:
 *
 *   receivables net 4,144,000 + allowance 156,000 ..... 4,300,000    DERIVED
 *   PP&E net 14,802,000 + depreciation 11,988,000 .... 26,790,000    DERIVED
 *
 * The chapter also prints what it calls the commonest error in the topic: reporting the assets
 * before their contra accounts, which would make total assets 43,816,600 (§2.6 ¶91). That is an
 * independent statement of the same arithmetic, so checkTies() closes the loop on it —
 * 31,672,600 + 156,000 + 11,988,000 = 43,816,600 — and a mistyped contra amount here fails the
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

  /* ---- printed in the chapter ---- */
  var P = {
    cash:            7302100,   /* F02-10 */
    arNet:           4144000,   /* F02-10, §2.6 ¶90 */
    otherCA:         2742000,   /* F02-10 */
    currentAssets:  14188100,   /* F02-10, §2.6 ¶86, F02-11 */
    ppeNet:         14802000,   /* F02-10, §2.6 ¶90 */
    goodwillEtc:     2682500,   /* F02-10 */
    noncurrentAssets: 17484500, /* §2.6 ¶86, WORKED EXAMPLE ¶95 */
    totalAssets:    31672600,   /* F02-10, §2.6 ¶86 */
    ap:              2050000,   /* F02-10 */
    cpltd:            400000,   /* F02-10, §2.2 WORKED EXAMPLE, §2.3 ¶39 */
    otherCL:         1830000,   /* F02-10 */
    currentLiabs:    4280000,   /* F02-10, §2.6 ¶86, F02-11 */
    ltd:             6000000,   /* §2.3 ¶39 */
    dtl:              999625,   /* §2.4 ¶54 */
    noncurrentLiabs: 6999625,   /* F02-10, §2.6 ¶86 */
    totalLiabs:     11279625,   /* F02-10, §2.6 ¶86 */
    commonStock:     8100000,   /* §2.6 ¶93 */
    apic:            5400000,   /* §2.6 ¶93 */
    contributed:    13500000,   /* F02-10, §2.6 ¶93 */
    retained:        6894100,   /* F02-10, §2.6 ¶93 */
    aoci:              -1125,   /* F02-10, §2.6 ¶93 */
    totalEquity:    20392975,   /* F02-10, §2.6 ¶93, ¶95 */
    allowance:        156000,   /* F02-02, in the receivables line label */
    accumDep:       11988000,   /* F02-02 line label, §2.6 ¶90 */
    grossError:     43816600,   /* §2.6 ¶91 */
    workingCapital:  9908100,   /* §2.6 ¶97, F02-11 */
    currentRatio:       3.31,   /* §2.2 ¶29, §2.6 ¶97, F02-11 */
    priorRatio:         2.35,   /* §2.2 ¶29 */
    commonError:     2908475,   /* F02-11, the row the author labels "A common error" */
    cycleInventory:       32,   /* §2.2 ¶25 */
    cycleCollect:         34,   /* §2.2 ¶25 */
    cycleDays:            66    /* §2.2 ¶25 */
  };

  /* ---- derived: the two gross amounts, each one printed net plus its printed contra ---- */
  var allowance   = P.allowance;                       /*    156,000, printed */
  var contraTotal = allowance + P.accumDep;            /* 12,144,000 */
  var arGross     = P.arNet + allowance;               /*  4,300,000 */
  var ppeGross    = P.ppeNet + P.accumDep;             /* 26,790,000 */

  /* The whole bank debt. Figure F02-10 prints the two LINES it reaches the balance
     sheet as - "Current portion of long-term debt 400,000" and "Long-term debt, less
     current portion 6,000,000" - and never their sum, because the sum is not a line on
     a classified balance sheet. The §2.3 split exercise needs the one obligation the
     learner is dividing, so it is derived here, from two printed figures, and tied
     below like every other derivation. */
  P.debtTotal = P.cpltd + P.ltd;                       /*  6,400,000 DERIVED */

  /* The raw accounts a preparer starts from: this is what the §2.6 statement scene hands the
     learner, so the contra accounts have to be netted and the debt split by hand. */
  var accounts = [
    { id: "Cash",                                    amount: P.cash },
    { id: "Accounts receivable",                     amount: arGross },
    { id: "Allowance for credit losses",             amount: allowance, neg: true },
    { id: "Other current assets",                    amount: P.otherCA },
    { id: "Property, plant and equipment",           amount: ppeGross },
    { id: "Accumulated depreciation",                amount: P.accumDep, neg: true },
    { id: "Goodwill and other non-current assets",   amount: P.goodwillEtc },
    { id: "Accounts payable",                        amount: P.ap },
    { id: "Current portion of long-term debt",       amount: P.cpltd },
    { id: "Other current liabilities",               amount: P.otherCL },
    { id: "Long-term debt",                          amount: P.ltd },
    { id: "Deferred tax liability",                  amount: P.dtl },
    { id: "Common stock",                            amount: P.commonStock },
    { id: "Additional paid-in capital",              amount: P.apic },
    { id: "Retained earnings",                       amount: P.retained },
    { id: "Accumulated other comprehensive income",  amount: Math.abs(P.aoci), neg: true }
  ];

  /* ---- the Barada case exhibit, F02-13, in USD 000 ---- */
  var caseRows = [
    { id: "Cash",                              amount: 1050, side: "debit" },
    { id: "Accounts receivable",               amount: 300,  side: "debit" },
    { id: "Allowance for credit losses",       amount: 20,   side: "credit" },
    { id: "Inventory",                         amount: 420,  side: "debit" },
    { id: "Prepaid rent",                      amount: 24,   side: "debit" },
    { id: "Land",                              amount: 936,  side: "debit" },
    { id: "Equipment",                         amount: 4200, side: "debit" },
    { id: "Accumulated depreciation",          amount: 900,  side: "credit" },
    { id: "Accounts payable",                  amount: 380,  side: "credit" },
    { id: "Dividends payable",                 amount: 50,   side: "credit" },
    { id: "Notes payable (long-term)",         amount: 1800, side: "credit" },
    { id: "Common stock",                      amount: 600,  side: "credit" },
    { id: "Additional paid-in capital",        amount: 1900, side: "credit" },
    { id: "Retained earnings, December 31 (after closing)", amount: 1280, side: "credit" }
  ];
  /* M1 splits the note: 300 of it is an installment due June 30, 2026, the rest is due 2029. */
  var kase = {
    installment: 300,
    currentAssets: 1050 + 300 - 20 + 420 + 24,          /* 1,774 — the answer the key prints */
    currentLiabs: 380 + 50 + 300,                        /*   730 */
    rows: caseRows
  };
  kase.workingCapital = kase.currentAssets - kase.currentLiabs;   /* 1,044 */

  var bs = {
    currentAssets: P.cash + P.arNet + P.otherCA,
    noncurrentAssets: P.ppeNet + P.goodwillEtc,
    currentLiabs: P.ap + P.cpltd + P.otherCL,
    noncurrentLiabs: P.ltd + P.dtl,
    contributed: P.commonStock + P.apic,
    arNet: arGross - allowance,
    ppeNet: ppeGross - P.accumDep,
    allowance: allowance, arGross: arGross, ppeGross: ppeGross,
    accumDep: P.accumDep, contraTotal: contraTotal
  };
  bs.totalAssets = bs.currentAssets + bs.noncurrentAssets;
  bs.totalLiabs = bs.currentLiabs + bs.noncurrentLiabs;
  bs.totalEquity = bs.contributed + P.retained + P.aoci;
  bs.grossAssets = bs.totalAssets + contraTotal;

  var ratios = {
    workingCapital: bs.currentAssets - bs.currentLiabs,
    currentRatio: Math.round((bs.currentAssets / bs.currentLiabs) * 100) / 100,
    commonError: bs.currentAssets - bs.totalLiabs
  };

  /* Every tie the chapter itself asserts, recomputed from the accounts above. */
  function checkTies() {
    function t(label, left, right) {
      return { label: label, left: left, right: right, ok: Math.abs(left - right) < 0.001 };
    }
    return [
      t("Assets = liabilities + equity", bs.totalAssets, bs.totalLiabs + bs.totalEquity),
      t("Current + non-current = total assets", bs.currentAssets + bs.noncurrentAssets, bs.totalAssets),
      t("Contributed + retained + AOCI = equity", bs.contributed + P.retained + P.aoci, bs.totalEquity),
      t("Total assets as printed", bs.totalAssets, P.totalAssets),
      t("Total liabilities as printed", bs.totalLiabs, P.totalLiabs),
      t("Total equity as printed", bs.totalEquity, P.totalEquity),
      t("Current assets as printed", bs.currentAssets, P.currentAssets),
      t("Current liabilities as printed", bs.currentLiabs, P.currentLiabs),
      t("Non-current assets as printed", bs.noncurrentAssets, P.noncurrentAssets),
      t("Non-current liabilities as printed", bs.noncurrentLiabs, P.noncurrentLiabs),
      t("Contributed capital as printed", bs.contributed, P.contributed),
      /* the derivation closing back on itself: the chapter's gross-total error */
      t("Gross assets = the error the chapter names", bs.grossAssets, P.grossError),
      t("Working capital as printed", ratios.workingCapital, P.workingCapital),
      t("Current ratio as printed", ratios.currentRatio, P.currentRatio),
      t("The common error as printed", ratios.commonError, P.commonError),
      t("Operating cycle in days", P.cycleInventory + P.cycleCollect, P.cycleDays),
      t("The bank debt splits into the two printed lines", P.debtTotal, P.cpltd + P.ltd),
      t("Case: total current assets", kase.currentAssets, 1774),
      t("Case: total current liabilities", kase.currentLiabs, 730),
      t("Case: working capital", kase.workingCapital, 1044)
    ];
  }

  root.LEDGER = {
    unit: "USD",
    caseUnit: "USD 000",
    company: { orontes: "Orontes Foods, Inc.", barada: "Barada Wholesale, Inc." },
    printed: P, accounts: accounts, bs: bs, ratios: ratios, "case": kase,
    checkTies: checkTies,
    money: money, plain: plain, signed: signed, arrow: arrow
  };
})(window);
