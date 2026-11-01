/* §1.7 Extended Example 1A — rebuilt as ten scenes.
   Every statement below is the complete figure from the book: every line, in the
   book's wording and order, with its amount. Nothing here is taught that is not
   in source/chapter-01.txt. */
(function () {
  var L = window.LEDGER, is = L.is, sce = L.sce, bs = L.bs, rt = L.ratios, T = window.TERMS;
  var m = L.money;

  window.PAGE = {
    id: "s1-7", n: "1.7", up: "../",
    title: "From a trial balance to a set of statements",
    terms: T.bridge("1.6"),
    scenes: [

    /* ---------- 1. sort by element ---------- */
    { id: "sort", kind: "sort", board: "lanes",
      /* A complete partition: all twenty trial-balance accounts, every one with a
         home. There is nothing left over to use as a distractor without inventing
         an account, which the provenance lock forbids. With six bins and twenty
         items the last placement is not deducible, so no distractor is needed. */
      partition: true,
      kicker: "Step 1",
      title: "Sort every account by element",
      say: "Nothing can be totalled until each account is in the right box. Two of them are the ones that catch people.",
      traps: ["contra-netting"],
      targets: [
        { id: "asset", label: "Asset" },
        { id: "contra", label: "Contra-asset", sub: "credit balance, sits with the assets" },
        { id: "liability", label: "Liability" },
        { id: "equity", label: "Equity" },
        { id: "revenue", label: "Revenue" },
        { id: "expense", label: "Expense" }
      ],
      items: [
        { name: "Cash", amount: 1050, to: "asset", why: "" },
        { name: "Accounts receivable", amount: 300, to: "asset", why: "" },
        { name: "Allowance for credit losses", amount: -20, to: "contra", trap: "contra-netting",
          why: "It reduces receivables, so it belongs with the assets even though its balance is a credit." },
        { name: "Inventory", amount: 420, to: "asset", why: "" },
        { name: "Prepaid rent", amount: 24, to: "asset", why: "" },
        { name: "Land", amount: 936, to: "asset", why: "" },
        { name: "Equipment", amount: 4200, to: "asset", why: "" },
        { name: "Accumulated depreciation", amount: -900, to: "contra", trap: "contra-netting",
          why: "It reduces equipment, so it belongs with the assets even though its balance is a credit." },
        { name: "Accounts payable", amount: 380, to: "liability", why: "" },
        { name: "Dividends payable", amount: 50, to: "liability",
          why: "An obligation to pay cash. Not to be confused with dividends declared, which reduce equity." },
        { name: "Notes payable (long-term)", amount: 1800, to: "liability", why: "" },
        { name: "Common stock", amount: 600, to: "equity", why: "" },
        { name: "Additional paid-in capital", amount: 1900, to: "equity", why: "" },
        { name: "Retained earnings, January 1", amount: 1000, to: "equity", why: "" },
        { name: "Dividends declared", amount: 50, to: "equity",
          why: "It reduces equity. It is never an expense." },
        { name: "Sales revenue", amount: 3100, to: "revenue", why: "" },
        { name: "Cost of goods sold", amount: 1860, to: "expense", why: "" },
        { name: "Wages expense", amount: 520, to: "expense", why: "" },
        { name: "Depreciation expense", amount: 300, to: "expense",
          why: "The period's charge. Accumulated depreciation is the running total, and it is a contra-asset." },
        { name: "Interest expense", amount: 90, to: "expense", why: "" }
      ] },

    /* ---------- 2. why this order ---------- */
    { id: "order", kind: "order",
      kicker: "Step 1",
      title: "Why the statements must be built in this order",
      say: "Each one needs a figure the one before it produces. Put them in the order a company actually prepares them.",
      items: [
        { text: "The income statement", pos: 1, needs: "nothing — it starts from the trial balance",
          why: "It must come first, because the next statement needs net income." },
        { text: "The statement of changes in equity", pos: 2, needs: "net income",
          why: "It takes net income and the dividends and produces closing retained earnings." },
        { text: "The balance sheet", pos: 3, needs: "closing retained earnings",
          why: "It comes last, because it needs the closing retained earnings figure." }
      ] },

    /* ---------- 3. build the income statement — complete F01-11 ---------- */
    { id: "is", kind: "statement",
      kicker: "Step 2 · Figure F01-11",
      title: "Build the income statement",
      say: "Drag each account onto its line. The amount travels with it, and the three subtotals work themselves out. Three accounts do not belong here at all.",
      sealText: "This is Figure F01-11 exactly: revenue " + m(is.revenue) + " down to net income " + m(is.netIncome) + ".",
      sheet: {
        title: L.company.barada + " — income statement, 2025",
        unit: L.unit,
        lines: [
          { t: "line", label: "Sales revenue", slot: "sales", expect: ["Sales revenue"],
            why: "The only revenue account in the trial balance." },
          { t: "line", label: "Cost of goods sold", slot: "cogs", expect: ["Cost of goods sold"],
            why: "Deducted from revenue to give gross profit." },
          { t: "sub", label: "Gross profit", of: ["sales", "cogs"] },
          { t: "line", label: "Wages expense", slot: "wages", expect: ["Wages expense"],
            why: "An operating expense, below gross profit." },
          { t: "line", label: "Depreciation expense", slot: "dep", expect: ["Depreciation expense"],
            why: "The period's charge — not accumulated depreciation, which is a contra-asset." },
          { t: "sub", label: "Operating income", of: ["sales", "cogs", "wages", "dep"] },
          { t: "line", label: "Interest expense", slot: "int", expect: ["Interest expense"],
            why: "Non-operating: it falls below operating income." },
          { t: "total", label: "Net income", of: ["sales", "cogs", "wages", "dep", "int"] }
        ]
      },
      chips: [
        { id: "Sales revenue", amount: 3100 },
        { id: "Cost of goods sold", amount: 1860, neg: true },
        { id: "Wages expense", amount: 520, neg: true },
        { id: "Depreciation expense", amount: 300, neg: true },
        { id: "Interest expense", amount: 90, neg: true }
      ],
      distractors: [
        { id: "Dividends declared", amount: 50, neg: true,
          why: "A distribution to owners. It belongs in the statement of changes in equity and never appears in the income statement." },
        { id: "Accumulated depreciation", amount: 900, neg: true,
          why: "A contra-asset on the balance sheet. Depreciation EXPENSE is the income statement item." },
        { id: "Prepaid rent", amount: 24,
          why: "An asset on the balance sheet." }
      ] },

    /* ---------- 4. build the statement of changes in equity ---------- */
    { id: "sce", kind: "statement",
      kicker: "Step 3",
      title: "Build the statement of changes in equity",
      say: "This is the statement that produces the one figure the balance sheet is waiting for.",
      sealText: "Closing retained earnings " + m(sce.reClosing) + " — carry it to the balance sheet.",
      sheet: {
        title: L.company.barada + " — retained earnings, 2025",
        unit: L.unit,
        lines: [
          { t: "line", label: "Retained earnings, January 1", slot: "re0", expect: ["Retained earnings, January 1"],
            why: "The opening balance from the trial balance." },
          { t: "line", label: "Net income", slot: "ni", expect: ["Net income"],
            why: "The figure the income statement just produced." },
          { t: "line", label: "Dividends declared", slot: "div", expect: ["Dividends declared"],
            why: "A deduction. It reduces retained earnings and is not an expense." },
          { t: "total", label: "Retained earnings, December 31", of: ["re0", "ni", "div"] }
        ]
      },
      chips: [
        { id: "Retained earnings, January 1", amount: 1000 },
        { id: "Net income", amount: 330 },
        { id: "Dividends declared", amount: 50, neg: true }
      ],
      distractors: [
        { id: "Common stock", amount: 600,
          why: "Contributed capital. It did not change this year and it is not part of retained earnings." },
        { id: "Sales revenue", amount: 3100,
          why: "Revenue reaches retained earnings only through net income, which is already on the statement." }
      ],
      traps: ["dividend-not-expense"] },

    /* ---------- 5. build the balance sheet — complete F01-12 ---------- */
    { id: "bs", kind: "statement",
      kicker: "Step 4 · Figure F01-12",
      title: "Build the classified balance sheet",
      say: "Two lines say <b>net of</b>. Each needs the asset <em>and</em> the account that reduces it — put only the asset on and watch what the total does.",
      sealText: "Assets " + m(bs.totalAssets) + " = liabilities " + m(bs.totalLiabilities) +
        " + equity " + m(bs.totalEquity) + ". The balance sheet balances.",
      traps: ["contra-netting"],
      sheet: {
        title: L.company.barada + " — balance sheet, December 31, 2025",
        unit: L.unit,
        lines: [
          { t: "line", label: "Cash", slot: "cash", expect: ["Cash"], why: "" },
          { t: "net", label: "Accounts receivable, net of the allowance", slot: "arnet",
            expect: ["Accounts receivable", "Allowance for credit losses"], trap: "contra-netting",
            why: "Receivables of " + m(300) + " less the allowance of " + m(20) + " = " + m(bs.arNet) +
              ". Reporting them gross would overstate assets." },
          { t: "line", label: "Inventory", slot: "inv", expect: ["Inventory"], why: "" },
          { t: "line", label: "Prepaid rent", slot: "pre", expect: ["Prepaid rent"], why: "" },
          { t: "sub", label: "Total current assets", of: ["cash", "arnet", "inv", "pre"] },
          { t: "line", label: "Land", slot: "land", expect: ["Land"], why: "" },
          { t: "net", label: "Equipment, net of accumulated depreciation", slot: "eqnet",
            expect: ["Equipment", "Accumulated depreciation"], trap: "contra-netting",
            why: "Equipment of " + m(4200) + " less accumulated depreciation of " + m(900) + " = " +
              m(bs.equipmentNet) + ". Reporting it gross would overstate assets." },
          { t: "total", label: "Total assets", of: ["cash", "arnet", "inv", "pre", "land", "eqnet"] },
          { t: "line", label: "Accounts payable and dividends payable", slot: "cl",
            expect: ["Accounts payable", "Dividends payable"],
            why: "Both are due within the year, so the book prints them on one line." },
          { t: "line", label: "Notes payable (long-term)", slot: "np", expect: ["Notes payable (long-term)"],
            why: "A five-year note, so it is not current." },
          { t: "sub", label: "Total liabilities", of: ["cl", "np"] },
          { t: "line", label: "Common stock and additional paid-in capital", slot: "cc",
            expect: ["Common stock", "Additional paid-in capital"],
            why: "Contributed capital: par value plus the amount paid above par." },
          { t: "line", label: "Retained earnings", slot: "re", expect: ["Retained earnings, December 31"],
            why: "The closing figure you produced in the previous scene." },
          { t: "sub", label: "Total equity", of: ["cc", "re"] },
          { t: "total", label: "Total liabilities and equity", of: ["cl", "np", "cc", "re"] }
        ]
      },
      chips: [
        { id: "Cash", amount: 1050 },
        { id: "Accounts receivable", amount: 300 },
        { id: "Allowance for credit losses", amount: 20, neg: true },
        { id: "Inventory", amount: 420 },
        { id: "Prepaid rent", amount: 24 },
        { id: "Land", amount: 936 },
        { id: "Equipment", amount: 4200 },
        { id: "Accumulated depreciation", amount: 900, neg: true },
        { id: "Accounts payable", amount: 380 },
        { id: "Dividends payable", amount: 50 },
        { id: "Notes payable (long-term)", amount: 1800 },
        { id: "Common stock", amount: 600 },
        { id: "Additional paid-in capital", amount: 1900 },
        { id: "Retained earnings, December 31", amount: 1280 }
      ],
      distractors: [
        { id: "Sales revenue", amount: 3100, why: "A revenue account: it belongs to the income statement." },
        { id: "Dividends declared", amount: 50, neg: true,
          why: "It belongs in the statement of changes in equity. The closing retained earnings figure already reflects it." },
        { id: "Retained earnings, January 1", amount: 1000,
          why: "The OPENING balance starts the statement of changes in equity. The balance sheet carries the CLOSING balance." }
      ] },

    /* ---------- 6. make it tie ---------- */
    { id: "ties", kind: "locks",
      kicker: "Step 5",
      title: "Make it tie",
      say: "Three locks. Each one shuts when its figure is right, and nothing is finished until all three are shut.",
      ties: [
        { label: "Total assets, which must equal liabilities plus equity", answer: bs.totalAssets,
          why: "Assets " + m(bs.totalAssets) + " = liabilities " + m(bs.totalLiabilities) +
            " + equity " + m(bs.totalEquity) + "." },
        { label: "Net income, which must equal operating income less interest", answer: is.netIncome,
          why: m(is.operatingIncome) + " − " + m(is.interest) + " = " + m(is.netIncome) + "." },
        { label: "Closing retained earnings, which must reach the balance sheet", answer: sce.reClosing,
          why: m(sce.reOpening) + " + " + m(is.netIncome) + " − " + m(sce.dividends) + " = " + m(sce.reClosing) + "." }
      ] },

    /* ---------- 7. reading the result ---------- */
    { id: "read", kind: "gauges",
      kicker: "Step 6",
      title: "What the lender sees",
      say: "Two measures from the statement you just built, and one comparison.",
      gauges: [
        { value: m(rt.workingCapital), key: "Working capital",
          note: "Current assets " + m(bs.currentAssets) + " − current liabilities " + m(bs.currentLiabilities) },
        { value: rt.currentRatio2, key: "Current ratio",
          note: m(bs.currentAssets) + " ÷ " + m(bs.currentLiabilities) }
      ],
      bars: [
        { label: "Long-term note", value: bs.notePayable, colour: "var(--bad)" },
        { label: "Total equity", value: bs.totalEquity, colour: "var(--accent)" }
      ],
      options: [
        { text: "Short-term position comfortable, but the long-term note is large against equity.", correct: true,
          why: "A current ratio of " + rt.currentRatio2 + " covers short-term obligations comfortably. A lender would also note that the note of " + m(bs.notePayable) + " is large against equity of " + m(bs.totalEquity) + "." },
        { text: "Barada cannot meet its short-term obligations.",
          why: "A current ratio of " + rt.currentRatio2 + " means current assets cover current liabilities more than four times over." },
        { text: "Nothing can be said without the statement of cash flows.",
          why: "The cash flow statement needs last year's balance sheet too, but working capital and the current ratio can be read from this one." },
        { text: "The company is financed almost entirely by its owners.",
          why: "Liabilities are " + m(bs.totalLiabilities) + " against equity of " + m(bs.totalEquity) + " — a substantial share, and the note alone is " + m(bs.notePayable) + "." }
      ] },

    /* ---------- 8. why not the fourth statement ---------- */
    { id: "fourth", kind: "check",
      kicker: "Step 7",
      title: "Why can't you build the fourth statement?",
      say: "You have a complete trial balance. You still cannot produce a statement of cash flows.",
      options: [
        { text: "It needs last year's balance sheet as well as this one.", correct: true,
          why: "A statement of cash flows needs last year's balance sheet as well as this one, so it cannot be built from a single trial balance. Chapter 5 prepares it for Orontes, which has both years." },
        { text: "The trial balance does not show the cash balance.",
          why: "It does — cash of " + m(bs.cash) + " is the first line. One date cannot show a movement, which is the real problem." },
        { text: "Barada is too small to be required to prepare one.",
          why: "Size is not the issue. All four statements form a complete set." },
        { text: "It is prepared only under IFRS.",
          why: "Both frameworks require it. Chapter 5 covers it under U.S. GAAP." }
      ] },

    /* ---------- 9-11. the book's section checks ---------- */
    { id: "sc1", kind: "check", kicker: "SC7-1", title: "Total current assets",
      say: "Use the statement you built.",
      traps: ["contra-netting"],
      options: [
        { text: "430", why: "This is total current liabilities." },
        { text: "1,774", correct: true, why: "Cash, receivables net of the allowance, inventory and prepaid rent." },
        { text: "1,794", why: "This adds the allowance back instead of subtracting it." },
        { text: "6,010", why: "This is total assets, including land and equipment." }
      ] },

    { id: "sc2", kind: "check", kicker: "SC7-2", title: "Closing retained earnings",
      say: "Use the statement you built.",
      options: [
        { text: "330", why: "This is net income, not the retained earnings balance." },
        { text: "1,000", why: "This is the opening balance, before net income." },
        { text: "1,280", correct: true, why: "Opening retained earnings plus net income less dividends declared." },
        { text: "1,330", why: "This ignores the dividend declared." }
      ] },

    { id: "sc3", kind: "check", kicker: "SC7-3", title: "Where does dividends payable appear?",
      say: "Use the statement you built.",
      options: [
        { text: "In equity, with retained earnings", why: "A declared dividend is a liability, not part of equity." },
        { text: "As a contra asset", why: "It reduces nothing on the asset side." },
        { text: "In non-current liabilities", why: "It is payable within the year." },
        { text: "In current liabilities", correct: true, why: "It is an obligation to pay cash within a year." }
      ] }
    ]
  };
})();
