/* Section 1.7 — Extended Example 1A: from a trial balance to a set of statements.
   Covers all nine steps of the printed example: the plan, the income statement
   (F01-11), the statement of changes in equity, the classified balance sheet
   (F01-12), the contra netting, the three tie lines, reading the result, why the
   cash flow statement cannot be built, the exam view, and SC7-1 to SC7-3.
   Every figure is computed from LEDGER. */
(function () {
  var L = window.LEDGER, is = L.is, sce = L.sce, bs = L.bs, rt = L.ratios;

  window.PAGE = {
    id: "s1-7", kind: "section", n: "1.7", up: "../",
    title: "Extended Example 1A: from a trial balance to a set of statements",
    crumb: "Section 1.7",
    question: "Given one trial balance, how do you build a complete set of statements — and prove they tie?",
    los: ["A.1.b", "A.1.e"],
    blocks: [

    { type: "prose", html:
      "<p>This example takes the " + L.company.barada + " trial balance of Figure F01-10 and builds the statements " +
      "from it, in the order a company prepares them. It is <em class=\"sig\">exam-core</em>: the exam often gives a " +
      "trial balance and asks for one figure from one statement.</p>" },

    { type: "box", kind: "worked", title: "Step 1 · the plan", html:
      "<ul>" +
      "<li>Sort every account by element: asset, liability, equity, revenue or expense.</li>" +
      "<li>Prepare the <strong>income statement first</strong>, because net income is needed by the next statement.</li>" +
      "<li>Prepare the <strong>statement of changes in equity</strong>, which produces closing retained earnings.</li>" +
      "<li>Prepare the <strong>balance sheet last</strong>, using that closing figure.</li>" +
      "<li>Check that the balance sheet balances.</li>" +
      "</ul>" },

    { type: "order", id: "x01", badge: "01",
      title: "Put the five steps in the right order",
      tag: "Sequencing",
      instruction: "The order is not arbitrary: each statement needs a figure the previous one produces.",
      prompt: "Drag the steps into the order a company actually prepares them.",
      items: [
        { text: "Sort every account by element: asset, liability, equity, revenue or expense.", pos: 1,
          why: "Nothing can be totalled until each account is in the right category. This is where the contra accounts catch people out." },
        { text: "Prepare the income statement.", pos: 2,
          why: "It must come first, because the next statement needs net income." },
        { text: "Prepare the statement of changes in equity.", pos: 3,
          why: "It takes net income and the dividends and produces closing retained earnings." },
        { text: "Prepare the balance sheet.", pos: 4,
          why: "It comes last, because it needs the closing retained earnings figure." },
        { text: "Check that the balance sheet balances.", pos: 5,
          why: "Assets must equal liabilities plus equity. If they do not, something above is wrong." }
      ] },

    { type: "heading", text: "Step 2 · the income statement", anchor: "income-statement" },

    { type: "prose", html:
      "<p>Revenue of " + L.money(is.revenue) + " less cost of goods sold of " + L.money(is.cogs) +
      " gives a gross profit of " + L.money(is.grossProfit) + ". Operating expenses are wages of " +
      L.money(is.wages) + " and depreciation of " + L.money(is.depreciation) + ", so operating income is " +
      L.money(is.operatingIncome) + ". Interest of " + L.money(is.interest) + " leaves net income of " +
      "<strong>" + L.money(is.netIncome) + "</strong>.</p>" },

    { type: "imagedrop", id: "x02", badge: "02",
      title: "Figure F01-11 · build the income statement",
      tag: "Drag onto the statement",
      instruction: "The subtotals compute as you place each account. If a subtotal turns red, an account is in the wrong band.",
      figure: "income-statement",
      prompt: "Drag each account from the trial balance onto the band of the income statement where it belongs. Three accounts do not belong on this statement at all.",
      items: [
        { name: "Sales revenue", zone: "is.revenue", why: "The only revenue account: " + L.money(is.revenue) + "." },
        { name: "Cost of goods sold", zone: "is.cogs",
          why: "Deducted from revenue to give gross profit of " + L.money(is.grossProfit) + "." },
        { name: "Wages expense", zone: "is.operating", why: "An operating expense, deducted after gross profit." },
        { name: "Depreciation expense", zone: "is.operating",
          why: "An operating expense of the period. Note that this is the EXPENSE, not accumulated depreciation." },
        { name: "Interest expense", zone: "is.nonoperating",
          why: "Non-operating: it sits below operating income, which is why operating income is " +
            L.money(is.operatingIncome) + " but net income is " + L.money(is.netIncome) + "." }
      ],
      distractors: [
        { name: "Dividends declared",
          why: "A distribution to owners. It belongs in the statement of changes in equity and must NEVER appear in the income statement." },
        { name: "Accumulated depreciation",
          why: "A contra-asset on the balance sheet — the running total. Depreciation EXPENSE is the income statement item." },
        { name: "Prepaid rent",
          why: "An asset on the balance sheet. It becomes rent expense month by month as the benefit is used." }
      ] },

    { type: "number", id: "x03", badge: "03",
      title: "The income statement, line by line",
      tag: "Calculation",
      exhibit: { href: "s1-6.html#f01-10", label: "the Barada trial balance, Figure F01-10" },
      prompt: "Work down the income statement from the trial balance.",
      unit: "USD 000",
      fields: [
        { key: "gp", label: "Gross profit", answer: is.grossProfit,
          explain: "Revenue " + L.money(is.revenue) + " − cost of goods sold " + L.money(is.cogs) + " = " + L.money(is.grossProfit) + "." },
        { key: "oi", label: "Operating income", answer: is.operatingIncome,
          explain: "Gross profit " + L.money(is.grossProfit) + " − wages " + L.money(is.wages) +
            " − depreciation " + L.money(is.depreciation) + " = " + L.money(is.operatingIncome) + ".",
          diagnostics: [
            { value: 330, says: "That is net income — you have also deducted the interest. Interest is non-operating, so it comes after operating income." }
          ] },
        { key: "ni", label: "Net income", answer: is.netIncome,
          explain: "Operating income " + L.money(is.operatingIncome) + " − interest " + L.money(is.interest) + " = " + L.money(is.netIncome) + ".",
          diagnostics: [
            { value: 280, says: "That subtracts the dividends declared as if they were an expense. A dividend is a distribution to owners." },
            { value: 1240, says: "That stops at gross profit (revenue minus cost of goods sold)." },
            { value: 3100, says: "That reports revenue instead of net income." },
            { value: 420, says: "That is operating income. Interest expense of 90 still has to come off." }
          ] }
      ] },

    { type: "heading", text: "Step 3 · the statement of changes in equity", anchor: "equity" },

    { type: "prose", html:
      "<p>Retained earnings open at " + L.money(sce.reOpening) + ", rise by net income of " +
      L.money(sce.netIncome) + " and fall by dividends declared of " + L.money(sce.dividends) +
      ", closing at <strong>" + L.money(sce.reClosing) + "</strong>. Common stock of " +
      L.money(sce.commonStock) + " and additional paid-in capital of " + L.money(sce.apic) +
      " do not change this year, so total equity is <strong>" + L.money(sce.totalEquity) + "</strong>.</p>" },

    { type: "number", id: "x04", badge: "04",
      title: "Closing retained earnings and total equity",
      tag: "Calculation",
      prompt: "The statement of changes in equity produces the one figure the balance sheet is waiting for.",
      unit: "USD 000",
      fields: [
        { key: "re", label: "Closing retained earnings", answer: sce.reClosing,
          explain: "Opening " + L.money(sce.reOpening) + " + net income " + L.money(sce.netIncome) +
            " − dividends declared " + L.money(sce.dividends) + " = " + L.money(sce.reClosing) + ".",
          diagnostics: [
            { value: 1330, says: "That forgets to subtract the dividends declared of 50." },
            { value: 330, says: "That reports only this year's net income, not the retained earnings balance." },
            { value: 1000, says: "That is the opening balance, before net income." }
          ] },
        { key: "cc", label: "Contributed capital (common stock + APIC)", answer: sce.contributed,
          explain: "Common stock " + L.money(sce.commonStock) + " + APIC " + L.money(sce.apic) + " = " +
            L.money(sce.contributed) + ". Neither changed this year." },
        { key: "eq", label: "Total equity", answer: sce.totalEquity,
          explain: "Contributed capital " + L.money(sce.contributed) + " + closing retained earnings " +
            L.money(sce.reClosing) + " = " + L.money(sce.totalEquity) + "." }
      ] },

    { type: "heading", text: "Step 4 · the classified balance sheet", anchor: "balance-sheet" },

    { type: "prose", html:
      "<p>Current assets of " + L.money(bs.currentAssets) + " and non-current assets of " +
      L.money(bs.noncurrentAssets) + " give total assets of <strong>" + L.money(bs.totalAssets) +
      "</strong>. Current liabilities are " + L.money(bs.currentLiabilities) + " and the long-term note is " +
      L.money(bs.notePayable) + ".</p>" },

    { type: "imagedrop", id: "x05", badge: "05",
      title: "Figure F01-12 · build the classified balance sheet",
      tag: "Drag onto the statement",
      instruction: "Both contra accounts belong with the asset they reduce. Place them wrongly and the subtotal visibly breaks.",
      figure: "balance-sheet",
      prompt: "Drag each account onto the band where it belongs. The statement highlights itself when assets equal liabilities plus equity. Three accounts do not belong on the balance sheet.",
      items: [
        { name: "Cash", zone: "bs.current-assets", why: "A current asset: " + L.money(bs.cash) + "." },
        { name: "Accounts receivable", zone: "bs.current-assets",
          why: "A current asset, reported NET of the allowance at " + L.money(bs.arNet) + "." },
        { name: "Allowance for credit losses", zone: "bs.current-assets", trap: "contra-netting",
          why: "A contra-asset. It has a credit balance but it REDUCES receivables, so it sits with the current assets — never with the liabilities. Reporting receivables gross would overstate assets." },
        { name: "Inventory", zone: "bs.current-assets", why: "A current asset: " + L.money(bs.inventory) + "." },
        { name: "Prepaid rent", zone: "bs.current-assets",
          why: "A current asset: the company has paid for a future benefit within the year." },
        { name: "Land", zone: "bs.noncurrent-assets", why: "A non-current asset: " + L.money(bs.land) + "." },
        { name: "Equipment", zone: "bs.noncurrent-assets",
          why: "A non-current asset, reported NET of accumulated depreciation at " + L.money(bs.equipmentNet) + "." },
        { name: "Accumulated depreciation", zone: "bs.noncurrent-assets", trap: "contra-netting",
          why: "A contra-asset with a credit balance that reduces equipment, so it belongs with the non-current assets. Reporting equipment gross would overstate assets." },
        { name: "Accounts payable", zone: "bs.current-liabilities", why: "Due within a year: a current liability." },
        { name: "Dividends payable", zone: "bs.current-liabilities",
          why: "An obligation to pay cash within the year, so it is a current liability — not part of equity." },
        { name: "Notes payable (long-term)", zone: "bs.noncurrent-liabilities",
          why: "A five-year note, so it is non-current: " + L.money(bs.notePayable) + "." },
        { name: "Common stock", zone: "bs.contributed", why: "Contributed capital, at par value." },
        { name: "Additional paid-in capital", zone: "bs.contributed", why: "Contributed capital, above par value." },
        { name: "Retained earnings, closing", zone: "bs.retained",
          why: "The closing figure of " + L.money(bs.retainedEarnings) + " that the statement of changes in equity produced." }
      ],
      distractors: [
        { name: "Sales revenue",
          why: "A revenue account: it belongs to the income statement, not the balance sheet." },
        { name: "Dividends declared",
          why: "It belongs in the statement of changes in equity as a deduction from retained earnings. The closing retained earnings figure already reflects it." },
        { name: "Retained earnings, January 1",
          why: "The OPENING balance starts the statement of changes in equity. The balance sheet carries the CLOSING balance." }
      ],
      traps: ["contra-netting"] },

    { type: "number", id: "x06", badge: "06",
      title: "The balance sheet totals",
      tag: "Calculation",
      prompt: "Total the classified balance sheet. Watch the two contra accounts.",
      unit: "USD 000",
      fields: [
        { key: "ca", label: "Total current assets", answer: bs.currentAssets,
          explain: "Cash " + L.money(bs.cash) + " + receivables net of the allowance " + L.money(bs.arNet) +
            " + inventory " + L.money(bs.inventory) + " + prepaid rent " + L.money(bs.prepaid) + " = " +
            L.money(bs.currentAssets) + ".",
          diagnostics: [
            { value: 1794, says: "That adds the allowance back instead of subtracting it. Receivables are reported NET, at 280." },
            { value: 430, says: "That is total current LIABILITIES." },
            { value: 6010, says: "That is total assets, including land and equipment." }
          ] },
        { key: "nca", label: "Total non-current assets", answer: bs.noncurrentAssets,
          explain: "Land " + L.money(bs.land) + " + equipment net of accumulated depreciation " +
            L.money(bs.equipmentNet) + " = " + L.money(bs.noncurrentAssets) + ".",
          diagnostics: [
            { value: 5136, says: "That ignores accumulated depreciation. Equipment is reported net, at 3,300." }
          ] },
        { key: "ta", label: "Total assets", answer: bs.totalAssets,
          explain: "Current " + L.money(bs.currentAssets) + " + non-current " + L.money(bs.noncurrentAssets) +
            " = " + L.money(bs.totalAssets) + ".",
          diagnostics: [
            { value: 6030, says: "That ignores the allowance for credit losses." },
            { value: 6910, says: "That ignores accumulated depreciation." },
            { value: 7850, says: "That ADDS the contra-asset balances instead of subtracting them." }
          ] },
        { key: "cl", label: "Total current liabilities", answer: bs.currentLiabilities,
          explain: "Accounts payable " + L.money(bs.ap) + " + dividends payable " + L.money(bs.dividendsPayable) +
            " = " + L.money(bs.currentLiabilities) + "." },
        { key: "tl", label: "Total liabilities", answer: bs.totalLiabilities,
          explain: "Current " + L.money(bs.currentLiabilities) + " + the long-term note " + L.money(bs.notePayable) +
            " = " + L.money(bs.totalLiabilities) + ".",
          diagnostics: [
            { value: 2280, says: "That also counts dividends DECLARED, which is an equity item, as a liability." },
            { value: 2180, says: "That leaves out dividends payable, which is a liability." }
          ] }
      ] },

    { type: "prose", html:
      "<p>Two contra accounts matter here. Receivables appear <em class=\"sig\">net of the allowance</em> at " +
      L.money(bs.arNet) + ", and equipment appears <em class=\"sig\">net of accumulated depreciation</em> at " +
      L.money(bs.equipmentNet) + ". <strong>Reporting either one gross would overstate assets.</strong></p>" },

    { type: "number", id: "x07", badge: "07",
      title: "Netting the two contra accounts",
      tag: "Calculation",
      prompt: "Each contra account reduces the asset above it. Enter the net figure that reaches the balance sheet.",
      unit: "USD 000",
      fields: [
        { key: "ar", label: "Accounts receivable, net of the allowance", answer: bs.arNet,
          explain: L.money(L.bal("ar")) + " − " + L.money(L.bal("allowance")) + " = " + L.money(bs.arNet) + ".",
          diagnostics: [
            { value: 320, says: "That ADDS the allowance. A contra account reduces the asset it sits with." },
            { value: 300, says: "That is the gross receivable. Reporting it gross would overstate assets." }
          ] },
        { key: "eq", label: "Equipment, net of accumulated depreciation", answer: bs.equipmentNet,
          explain: L.money(L.bal("equipment")) + " − " + L.money(L.bal("accumdep")) + " = " + L.money(bs.equipmentNet) + ".",
          diagnostics: [
            { value: 5100, says: "That ADDS accumulated depreciation instead of subtracting it." },
            { value: 4200, says: "That is the gross cost. Reporting it gross would overstate assets." }
          ] }
      ] },

    { type: "mcq", id: "x08", badge: "08",
      title: "Where does a contra-asset sit?",
      tag: "Exam trap",
      prompt: "Accumulated depreciation has a credit balance. Where does it belong on the classified balance sheet?",
      options: [
        { text: "With the non-current assets, reducing equipment to its net figure.", correct: true,
          why: "A contra-asset belongs with the asset it reduces, however its balance is signed. Equipment appears net, at " + L.money(bs.equipmentNet) + "." },
        { text: "With the liabilities, because it has a credit balance.",
          why: "This is the trap. A credit balance does not make something a liability — the company owes nobody anything here." },
        { text: "As a deduction from retained earnings in equity.",
          why: "It reduces an asset, not equity. Depreciation expense affected retained earnings through net income; the accumulated total sits against the asset." },
        { text: "Only in the notes, because it is not a real account.",
          why: "It is a real account with a real balance, and the netting it produces appears on the face of the balance sheet." }
      ],
      traps: ["contra-netting"] },

    { type: "heading", text: "Step 5 · the tie line", anchor: "tie" },

    { type: "box", kind: "worked", title: "Everything ties", html:
      "<ul>" +
      "<li>Assets " + L.money(bs.totalAssets) + " = liabilities " + L.money(bs.totalLiabilities) +
      " + equity " + L.money(bs.totalEquity) + ".</li>" +
      "<li>Operating income " + L.money(is.operatingIncome) + " − interest " + L.money(is.interest) +
      " = net income " + L.money(is.netIncome) + ".</li>" +
      "<li>Opening retained earnings " + L.money(sce.reOpening) + " + " + L.money(is.netIncome) + " − " +
      L.money(sce.dividends) + " = " + L.money(sce.reClosing) + ", the figure on the balance sheet.</li>" +
      "</ul>" },

    { type: "tie", id: "x09", badge: "09",
      title: "Prove the three ties yourself",
      tag: "Tie check",
      instruction: "Nothing in this exercise passes until all three lines tie — which is exactly the final check in any trial-balance question.",
      ties: [
        { prompt: "Total assets, which must equal liabilities plus equity", answer: bs.totalAssets,
          explain: "Assets " + L.money(bs.totalAssets) + " = liabilities " + L.money(bs.totalLiabilities) +
            " + equity " + L.money(bs.totalEquity) + "." },
        { prompt: "Net income, which must equal operating income less interest", answer: is.netIncome,
          explain: L.money(is.operatingIncome) + " − " + L.money(is.interest) + " = " + L.money(is.netIncome) + "." },
        { prompt: "Closing retained earnings, which must reach the balance sheet", answer: sce.reClosing,
          explain: L.money(sce.reOpening) + " + " + L.money(is.netIncome) + " − " + L.money(sce.dividends) +
            " = " + L.money(sce.reClosing) + "." }
      ] },

    { type: "heading", text: "Step 6 · reading the result", anchor: "reading" },

    { type: "prose", html:
      "<p>Working capital is " + L.money(rt.workingCapital) + " and the current ratio is " + rt.currentRatio2 +
      ", so Barada can meet its short-term obligations comfortably. A lender would also note that the long-term " +
      "note of " + L.money(bs.notePayable) + " is large against equity of " + L.money(bs.totalEquity) + ".</p>" },

    { type: "number", id: "x10", badge: "10",
      title: "What a lender would calculate",
      tag: "Calculation",
      prompt: "Two short-term measures from the balance sheet you have just built.",
      fields: [
        { key: "wc", label: "Working capital", answer: rt.workingCapital, unit: "USD 000",
          explain: "Current assets " + L.money(bs.currentAssets) + " − current liabilities " +
            L.money(bs.currentLiabilities) + " = " + L.money(rt.workingCapital) + "." },
        { key: "cr", label: "Current ratio (to two decimal places)", answer: rt.currentRatio2, unit: "times",
          tolerance: 0.011,
          explain: L.money(bs.currentAssets) + " ÷ " + L.money(bs.currentLiabilities) + " = " + rt.currentRatio2 + "." }
      ] },

    { type: "selfex", id: "x11", badge: "11",
      title: "In your own words: what would the bank conclude?",
      tag: "Explain it",
      prompt: "Barada's bank is reviewing its loan. From the statements you have just built, what is reassuring and what is not?",
      placeholder: "The short-term position looks… but…",
      checklist: [
        "Did you say the current ratio of " + rt.currentRatio2 + " means short-term obligations are covered comfortably?",
        "Did you quote working capital of " + L.money(rt.workingCapital) + "?",
        "Did you note that the long-term note of " + L.money(bs.notePayable) + " is large against equity of " + L.money(bs.totalEquity) + "?",
        "Did you avoid confusing net income with cash?"
      ],
      model: "The short-term position is comfortable: working capital is " + L.money(rt.workingCapital) +
        " and the current ratio is " + rt.currentRatio2 + ", so current assets cover current liabilities several times " +
        "over. The concern is longer term: <strong>the long-term note of " + L.money(bs.notePayable) +
        " is large against equity of " + L.money(bs.totalEquity) + "</strong>. Note also that a lender cannot see " +
        "cash generation from this trial balance at all, because a statement of cash flows needs last year's balance " +
        "sheet too." },

    { type: "heading", text: "Step 7 · where the fourth statement comes from", anchor: "fourth" },

    { type: "prose", html:
      "<p>A statement of cash flows needs <em class=\"sig\">last year's balance sheet as well as this one</em>, so " +
      "it cannot be built from a single trial balance. Chapter 5 prepares it for Orontes, which has both years.</p>" },

    { type: "mcq", id: "x12", badge: "12",
      title: "Why can't you build the fourth statement?",
      tag: "Comprehension",
      prompt: "You have the Barada trial balance at December 31, 2025. Why can you not prepare its statement of cash flows?",
      options: [
        { text: "A statement of cash flows needs last year's balance sheet as well as this one, to measure the change in each account.", correct: true,
          why: "Cash flows are derived from MOVEMENTS, so two balance sheet dates are needed. Chapter 5 prepares it for Orontes, which has both years." },
        { text: "The trial balance does not show the cash balance.",
          why: "It does — cash of " + L.money(bs.cash) + " is the first line. The problem is that one date cannot show a movement." },
        { text: "Barada is too small to be required to prepare one.",
          why: "Size is not the issue. All four statements form a complete set under U.S. GAAP." },
        { text: "The statement of cash flows is prepared only under IFRS.",
          why: "Both frameworks require it. Chapter 5 covers it under U.S. GAAP." }
      ] },

    { type: "box", kind: "trap", title: "Exam view", html:
      "<p>A trial balance question usually asks for <strong>one number</strong>: total current assets, closing " +
      "retained earnings or net income. <strong>Sort the accounts by element first</strong>, and watch the contra " +
      "accounts, which belong with the asset they reduce rather than with liabilities.</p>" },

    { type: "mcq", id: "x13", badge: "13",
      title: "Exam trap · the first move in a trial-balance question",
      tag: "Exam trap",
      prompt: "A question gives you a twenty-line trial balance and asks for total current assets. What should you do first?",
      options: [
        { text: "Sort every account by element, then check which contra accounts reduce which assets.", correct: true,
          why: "Sorting first is what prevents the two classic errors: putting a contra-asset with the liabilities, and forgetting to net it off." },
        { text: "Add up every debit balance, because assets have debit balances.",
          why: "Expenses and dividends declared also have debit balances, and the contra-assets that must be SUBTRACTED have credit balances." },
        { text: "Start with the balance sheet, since that is what the question asks about.",
          why: "For a current-assets question you can go straight there — but only after sorting. If the question had asked for retained earnings you would need the income statement first." },
        { text: "Work out net income first, whatever the question asks.",
          why: "Only if the answer depends on it. A current-assets question does not need net income at all." }
      ],
      traps: ["contra-netting"] },

    { type: "checkgroup", title: "Test yourself",
      note: "These are SC7-1, SC7-2 and SC7-3 from the book, with the explanation for every option.",
      items: [
        { id: "sc1", type: "mcq", badge: "SC7-1", title: "SC7-1", tag: "Section check",
          prompt: "Use Extended Example 1A. What are Barada's total current assets?",
          options: [
            { text: "430", why: "This is total current liabilities." },
            { text: "1,774", correct: true,
              why: "Cash, receivables net of the allowance, inventory and prepaid rent." },
            { text: "1,794", why: "This adds the allowance back instead of subtracting it." },
            { text: "6,010", why: "This is total assets, including land and equipment." }
          ],
          traps: ["contra-netting"] },

        { id: "sc2", type: "mcq", badge: "SC7-2", title: "SC7-2", tag: "Section check",
          prompt: "Use Extended Example 1A. What is Barada's closing retained earnings?",
          options: [
            { text: "330", why: "This is net income, not the retained earnings balance." },
            { text: "1,000", why: "This is the opening balance, before net income." },
            { text: "1,280", correct: true,
              why: "Opening retained earnings plus net income less dividends declared." },
            { text: "1,330", why: "This ignores the dividend declared." }
          ] },

        { id: "sc3", type: "mcq", badge: "SC7-3", title: "SC7-3", tag: "Section check",
          prompt: "Use Extended Example 1A. Where does the dividends payable balance appear?",
          options: [
            { text: "In equity, with retained earnings", why: "A declared dividend is a liability, not part of equity." },
            { text: "As a contra asset", why: "It reduces nothing on the asset side." },
            { text: "In non-current liabilities", why: "It is payable within the year." },
            { text: "In current liabilities", correct: true,
              why: "It is an obligation to pay cash within a year." }
          ] }
      ] }
    ]
  };
})();
