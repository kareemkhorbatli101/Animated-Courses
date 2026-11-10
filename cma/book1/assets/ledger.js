/* ledger.js — the single source of truth for every number in Chapter 1.
 *
 * The chapter's figures all descend from two sources: the Barada Wholesale trial
 * balance (F01-10) and the Orontes Foods January / February transactions. Nothing
 * downstream types a number: every statement line, subtotal, answer key and
 * numeric tolerance is computed here. _qa.html re-asserts the ties on every build.
 *
 * All amounts USD 000.
 */
(function (root) {
  "use strict";

  /* ---------------------------------------------------------------- *
   * 1. Barada Wholesale, Inc. — trial balance, December 31, 2025
   *    Figure F01-10, reproduced line for line.
   * ---------------------------------------------------------------- */

  var A = "asset", CA = "contra-asset", L = "liability", E = "equity",
      R = "revenue", X = "expense";

  var trialBalance = [
    { key: "cash",        name: "Cash",                         dr: 1050, cr: 0,   cat: A,  cls: "current",    stmt: "bs" },
    { key: "ar",          name: "Accounts receivable",          dr: 300,  cr: 0,   cat: A,  cls: "current",    stmt: "bs" },
    { key: "allowance",   name: "Allowance for credit losses",  dr: 0,    cr: 20,  cat: CA, cls: "current",    stmt: "bs", reduces: "ar" },
    { key: "inventory",   name: "Inventory",                    dr: 420,  cr: 0,   cat: A,  cls: "current",    stmt: "bs" },
    { key: "prepaid",     name: "Prepaid rent",                 dr: 24,   cr: 0,   cat: A,  cls: "current",    stmt: "bs" },
    { key: "land",        name: "Land",                         dr: 936,  cr: 0,   cat: A,  cls: "noncurrent", stmt: "bs" },
    { key: "equipment",   name: "Equipment",                    dr: 4200, cr: 0,   cat: A,  cls: "noncurrent", stmt: "bs" },
    { key: "accumdep",    name: "Accumulated depreciation",     dr: 0,    cr: 900, cat: CA, cls: "noncurrent", stmt: "bs", reduces: "equipment" },
    { key: "ap",          name: "Accounts payable",             dr: 0,    cr: 380, cat: L,  cls: "current",    stmt: "bs" },
    { key: "divpayable",  name: "Dividends payable",            dr: 0,    cr: 50,  cat: L,  cls: "current",    stmt: "bs" },
    { key: "np",          name: "Notes payable (long-term)",    dr: 0,    cr: 1800,cat: L,  cls: "noncurrent", stmt: "bs" },
    { key: "cs",          name: "Common stock",                 dr: 0,    cr: 600, cat: E,  cls: "contributed",stmt: "bs" },
    { key: "apic",        name: "Additional paid-in capital",   dr: 0,    cr: 1900,cat: E,  cls: "contributed",stmt: "bs" },
    { key: "re0",         name: "Retained earnings, January 1", dr: 0,    cr: 1000,cat: E,  cls: "retained",   stmt: "sce" },
    { key: "divdeclared", name: "Dividends declared",           dr: 50,   cr: 0,   cat: E,  cls: "retained",   stmt: "sce" },
    { key: "sales",       name: "Sales revenue",                dr: 0,    cr: 3100,cat: R,  cls: "revenue",    stmt: "is" },
    { key: "cogs",        name: "Cost of goods sold",           dr: 1860, cr: 0,   cat: X,  cls: "cogs",       stmt: "is" },
    { key: "wages",       name: "Wages expense",                dr: 520,  cr: 0,   cat: X,  cls: "operating",  stmt: "is" },
    { key: "depexp",      name: "Depreciation expense",         dr: 300,  cr: 0,   cat: X,  cls: "operating",  stmt: "is" },
    { key: "interest",    name: "Interest expense",             dr: 90,   cr: 0,   cat: X,  cls: "nonoperating",stmt: "is" }
  ];

  function tb(key) {
    for (var i = 0; i < trialBalance.length; i++) if (trialBalance[i].key === key) return trialBalance[i];
    throw new Error("ledger: no trial-balance line '" + key + "'");
  }
  function bal(key) { var r = tb(key); return r.dr || r.cr; }
  function sum(fn) { var t = 0; for (var i = 0; i < trialBalance.length; i++) t += fn(trialBalance[i]) || 0; return t; }

  var totalDebits  = sum(function (r) { return r.dr; });
  var totalCredits = sum(function (r) { return r.cr; });

  /* ---- derived: income statement (F01-11) ---- */
  var is = {};
  is.revenue        = bal("sales");
  is.cogs           = bal("cogs");
  is.grossProfit    = is.revenue - is.cogs;
  is.wages          = bal("wages");
  is.depreciation   = bal("depexp");
  is.operatingIncome= is.grossProfit - is.wages - is.depreciation;
  is.interest       = bal("interest");
  is.netIncome      = is.operatingIncome - is.interest;

  /* ---- derived: statement of changes in equity ---- */
  var sce = {};
  sce.reOpening     = bal("re0");
  sce.netIncome     = is.netIncome;
  sce.dividends     = bal("divdeclared");
  sce.reClosing     = sce.reOpening + sce.netIncome - sce.dividends;
  sce.commonStock   = bal("cs");
  sce.apic          = bal("apic");
  sce.contributed   = sce.commonStock + sce.apic;
  sce.totalEquity   = sce.contributed + sce.reClosing;

  /* ---- derived: classified balance sheet (F01-12) ---- */
  var bs = {};
  bs.cash              = bal("cash");
  bs.arNet             = bal("ar") - bal("allowance");
  bs.inventory         = bal("inventory");
  bs.prepaid           = bal("prepaid");
  bs.currentAssets     = bs.cash + bs.arNet + bs.inventory + bs.prepaid;
  bs.land              = bal("land");
  bs.equipmentNet      = bal("equipment") - bal("accumdep");
  bs.noncurrentAssets  = bs.land + bs.equipmentNet;
  bs.totalAssets       = bs.currentAssets + bs.noncurrentAssets;
  bs.ap                = bal("ap");
  bs.dividendsPayable  = bal("divpayable");
  bs.currentLiabilities= bs.ap + bs.dividendsPayable;
  bs.notePayable       = bal("np");
  bs.totalLiabilities  = bs.currentLiabilities + bs.notePayable;
  bs.contributed       = sce.contributed;
  bs.retainedEarnings  = sce.reClosing;
  bs.totalEquity       = sce.totalEquity;
  bs.totalLiabEquity   = bs.totalLiabilities + bs.totalEquity;

  /* ---- derived: reading the result (section 1.7, step 6) ---- */
  var ratios = {};
  ratios.workingCapital = bs.currentAssets - bs.currentLiabilities;
  ratios.currentRatio   = bs.currentAssets / bs.currentLiabilities;
  ratios.currentRatio2  = Math.round(ratios.currentRatio * 100) / 100;

  /* ---------------------------------------------------------------- *
   * 2. Orontes Foods, Inc. — January 2025 (the Worked Example, 1.3)
   *    Six transactions; F01-05 is the effect grid over them.
   *    cf: operating | investing | financing | none
   * ---------------------------------------------------------------- */

  var january = [
    { n: 1, date: "Jan 2",
      text: "Issued 100,000 new shares of $1 par common stock for $15 per share, in cash.",
      short: "Issue common shares for cash",
      entry: [ { side: "dr", account: "Cash", amount: 1500 },
               { side: "cr", account: "Common stock", amount: 100 },
               { side: "cr", account: "Additional paid-in capital", amount: 1400 } ],
      eff: { a: 1500, l: 0, e: 1500, ni: 0, cf: "financing", cfAmount: 1500 } },

    { n: 2, date: "Jan 5",
      text: "Borrowed cash from Levant Commerce Bank on a 5-year note at 6% interest.",
      short: "Borrow cash on a 5-year note",
      entry: [ { side: "dr", account: "Cash", amount: 800 },
               { side: "cr", account: "Notes payable (long-term)", amount: 800 } ],
      eff: { a: 800, l: 800, e: 0, ni: 0, cf: "financing", cfAmount: 800 } },

    { n: 3, date: "Jan 10",
      text: "Bought a new bottling line for the Amman plant and paid cash.",
      short: "Buy a bottling line for cash",
      entry: [ { side: "dr", account: "Equipment", amount: 1200 },
               { side: "cr", account: "Cash", amount: 1200 } ],
      eff: { a: 0, l: 0, e: 0, ni: 0, cf: "investing", cfAmount: -1200 } },

    { n: 4, date: "Jan 18",
      text: "Sold olive oil to GreenBasket Supermarkets on credit. The goods had cost Orontes less than the selling price.",
      short: "Sell olive oil on credit (two entries)",
      entry: [ { side: "dr", account: "Accounts receivable", amount: 300 },
               { side: "cr", account: "Sales revenue", amount: 300 },
               { side: "dr", account: "Cost of goods sold", amount: 180 },
               { side: "cr", account: "Inventory", amount: 180 } ],
      eff: { a: 120, l: 0, e: 120, ni: 120, cf: "none", cfAmount: 0 } },

    { n: 5, date: "Jan 31",
      text: "Paid January wages to plant workers in cash.",
      short: "Pay January wages",
      entry: [ { side: "dr", account: "Wages expense", amount: 40 },
               { side: "cr", account: "Cash", amount: 40 } ],
      eff: { a: -40, l: 0, e: -40, ni: -40, cf: "operating", cfAmount: -40 } },

    { n: 6, date: "Jan 31",
      text: "The board declared a cash dividend, payable on February 15.",
      short: "Declare a cash dividend",
      entry: [ { side: "dr", account: "Retained earnings (dividends declared)", amount: 50 },
               { side: "cr", account: "Dividends payable", amount: 50 } ],
      eff: { a: 0, l: 50, e: -50, ni: 0, cf: "none", cfAmount: 0 } }
  ];

  /* ---------------------------------------------------------------- *
   * 3. Orontes Foods, Inc. — February 2025 (Your Turn, 1.3)
   *    F01-06 is the FADED grid: in the BOOK, rows 1-3 are worked and rows 4-6 are the
   *    learner's. On the site all six are the learner's, and `given` is false on every
   *    one of them.
   *
   *    WHY THAT DIFFERS FROM THE PAGE. A worked row is worked for a reader who cannot be
   *    asked to do anything - it is the only way a printed page can demonstrate. Here the
   *    learner can be asked, and the three rows the author chose to demonstrate are the
   *    three that teach the most: paying a payable, collecting a receivable, and prepaying
   *    rent. Handing them over pre-posted meant the one who most needed the practice
   *    watched it happen. The author's worked version is still there - in the Brief and in
   *    the answer key - so nothing is withheld; it is just no longer done FOR them.
   *
   *    `given` is kept rather than deleted: it is the author's own structure, and a future
   *    chapter may want a demonstrated row again.
   * ---------------------------------------------------------------- */

  var february = [
    { n: 1, date: "Feb 3", given: false,
      text: "Paid a supplier for olives bought on credit in January.",
      short: "Pay a supplier",
      entry: [ { side: "dr", account: "Accounts payable", amount: 150 },
               { side: "cr", account: "Cash", amount: 150 } ],
      eff: { a: -150, l: -150, e: 0, ni: 0, cf: "operating", cfAmount: -150 } },

    { n: 2, date: "Feb 8", given: false,
      text: "Collected part of the January receivable from GreenBasket Supermarkets.",
      short: "Collect from a customer",
      entry: [ { side: "dr", account: "Cash", amount: 200 },
               { side: "cr", account: "Accounts receivable", amount: 200 } ],
      eff: { a: 0, l: 0, e: 0, ni: 0, cf: "operating", cfAmount: 200 } },

    { n: 3, date: "Feb 10", given: false,
      text: "Paid 12 months of warehouse rent in advance.",
      short: "Pay rent in advance",
      entry: [ { side: "dr", account: "Prepaid rent", amount: 24 },
               { side: "cr", account: "Cash", amount: 24 } ],
      eff: { a: 0, l: 0, e: 0, ni: 0, cf: "operating", cfAmount: -24 } },

    { n: 4, date: "Feb 12", given: false,
      text: "A Dubai hotel group paid cash in advance for pastries that Orontes will deliver in March.",
      short: "Receive a customer advance",
      entry: [ { side: "dr", account: "Cash", amount: 60 },
               { side: "cr", account: "Contract liability (unearned revenue)", amount: 60 } ],
      eff: { a: 60, l: 60, e: 0, ni: 0, cf: "operating", cfAmount: 60 },
      note: "Row 4 is a liability, not revenue: Orontes must still deliver the pastries." },

    { n: 5, date: "Feb 15", given: false,
      text: "Paid the dividend declared on January 31.",
      short: "Pay the declared dividend",
      entry: [ { side: "dr", account: "Dividends payable", amount: 50 },
               { side: "cr", account: "Cash", amount: 50 } ],
      eff: { a: -50, l: -50, e: 0, ni: 0, cf: "financing", cfAmount: -50 },
      note: "Row 5 reduces a liability and cash; retained earnings fell in January, when the dividend was declared." },

    { n: 6, date: "Feb 28", given: false,
      text: "Recorded one month of interest on the bank note. Orontes has not paid it yet.",
      short: "Accrue interest",
      entry: [ { side: "dr", account: "Interest expense", amount: 4 },
               { side: "cr", account: "Interest payable", amount: 4 } ],
      eff: { a: 0, l: 4, e: -4, ni: -4, cf: "none", cfAmount: 0 },
      note: "Row 6 is an accrued expense: interest is an expense of February even though Orontes has not paid it." }
  ];

  /* ---- derived: January roll-ups, quoted in 1.3 and 1.6 ---- */
  function roll(list) {
    var t = { a: 0, l: 0, e: 0, ni: 0, operating: 0, investing: 0, financing: 0, dr: 0, cr: 0 };
    list.forEach(function (x) {
      t.a += x.eff.a; t.l += x.eff.l; t.e += x.eff.e; t.ni += x.eff.ni;
      if (x.eff.cf !== "none") t[x.eff.cf] += x.eff.cfAmount;
      x.entry.forEach(function (ln) { if (ln.side === "dr") t.dr += ln.amount; else t.cr += ln.amount; });
    });
    t.cash = t.operating + t.investing + t.financing;
    return t;
  }

  var jan = roll(january);
  jan.dividendDeclared = 50;
  jan.retainedEarningsChange = jan.ni - jan.dividendDeclared;   // 80 - 50 = 30
  var feb = roll(february);

  /* ---- the December sale of F01-07 (accrual vs cash, 1.4) ---- */
  var decemberSale = {
    shipDate: "December 20, 2025", payDate: "January 15, 2026",
    invoice: 90, cost: 54,
    get grossProfit() { return this.invoice - this.cost; },      // 36
    accrualYear: 2025, cashBasisYear: 2026
  };

  /* ---------------------------------------------------------------- *
   * 4. The ties. _qa.html asserts every one of these.
   * ---------------------------------------------------------------- */

  var ties = [
    { label: "Trial balance: total debits = total credits",
      left: totalDebits, right: totalCredits },
    { label: "Current assets + non-current assets = total assets",
      left: bs.currentAssets + bs.noncurrentAssets, right: bs.totalAssets },
    { label: "Assets = liabilities + equity",
      left: bs.totalAssets, right: bs.totalLiabilities + bs.totalEquity },
    { label: "Operating income - interest = net income",
      left: is.operatingIncome - is.interest, right: is.netIncome },
    { label: "Gross profit = revenue - cost of goods sold",
      left: is.revenue - is.cogs, right: is.grossProfit },
    { label: "Opening RE + net income - dividends = closing RE",
      left: sce.reOpening + sce.netIncome - sce.dividends, right: sce.reClosing },
    { label: "Contributed capital + retained earnings = total equity",
      left: sce.contributed + sce.reClosing, right: sce.totalEquity },
    { label: "Working capital = current assets - current liabilities",
      left: bs.currentAssets - bs.currentLiabilities, right: ratios.workingCapital },
    { label: "January: debits = credits",
      left: jan.dr, right: jan.cr },
    { label: "January: change in assets = change in liabilities + change in equity",
      left: jan.a, right: jan.l + jan.e },
    { label: "January: net income = revenue - COGS - wages",
      left: 300 - 180 - 40, right: jan.ni },
    { label: "January: change in cash = operating + investing + financing",
      left: jan.operating + jan.investing + jan.financing, right: jan.cash },
    { label: "January: contributed capital + net income - dividend = change in equity",
      left: 1500 + jan.ni - jan.dividendDeclared, right: jan.e },
    { label: "February: debits = credits",
      left: feb.dr, right: feb.cr },
    { label: "February: change in assets = change in liabilities + change in equity",
      left: feb.a, right: feb.l + feb.e },
    { label: "December sale: invoice - cost = gross profit",
      left: decemberSale.invoice - decemberSale.cost, right: decemberSale.grossProfit }
  ];

  function checkTies() {
    return ties.map(function (t) {
      return { label: t.label, left: t.left, right: t.right, ok: Math.abs(t.left - t.right) < 1e-9 };
    });
  }

  /* ---------------------------------------------------------------- *
   * 5. Formatting helpers. Every money figure on the site goes
   *    through one of these, so the USD 000 convention is uniform.
   * ---------------------------------------------------------------- */

  function money(n) {
    var neg = n < 0, s = Math.abs(n).toLocaleString("en-US");
    return neg ? "(" + s + ")" : s;
  }
  function plain(n) { return String(Math.abs(n)); }
  function signed(n) { return n === 0 ? "0" : (n > 0 ? "+" : "−") + Math.abs(n).toLocaleString("en-US"); }
  function arrow(n) { return n === 0 ? "0" : (n > 0 ? "↑" : "↓"); }

  root.LEDGER = {
    unit: "USD 000",
    company: { orontes: "Orontes Foods, Inc.", barada: "Barada Wholesale, Inc.", cedar: "Cedar Retail S.A.L." },
    trialBalance: trialBalance, tb: tb, bal: bal,
    totalDebits: totalDebits, totalCredits: totalCredits,
    is: is, sce: sce, bs: bs, ratios: ratios,
    january: january, february: february, jan: jan, feb: feb,
    decemberSale: decemberSale,
    ties: ties, checkTies: checkTies,
    money: money, plain: plain, signed: signed, arrow: arrow
  };
})(window);
