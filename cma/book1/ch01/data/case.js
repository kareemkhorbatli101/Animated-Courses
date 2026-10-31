/* Case question · Barada Wholesale, Inc. — the CBQ, in the exam's own item types.
   C1-1 drag-and-drop, C1-2/C1-3/C1-5 numeric entry with the book's wrong-answer
   diagnostics wired to the actual entry, C1-4 select from a list, C1-6 fill in
   the blank. The exhibit is the same ledger object the rest of the chapter uses. */
(function () {
  var L = window.LEDGER, is = L.is, sce = L.sce, bs = L.bs;

  window.PAGE = {
    id: "case", kind: "back", up: "../",
    eyebrow: "Chapter 1 · Case question",
    title: "Case question: " + L.company.barada,
    crumb: "Case question",
    question: "A case, an exhibit, and six independent items in the formats the exam actually uses.",
    blocks: [

    { type: "prose", html:
      "<p>" + L.company.barada + " is a food wholesaler in Amman and one of Orontes's largest customers. It buys " +
      "tahini, halva and oils from Orontes and sells them to shops across Jordan. Barada prepares its statements " +
      "under U.S. GAAP because its bank and its main supplier ask for them.</p>" +
      "<p>At the end of 2025 Barada's bookkeeper prepared a trial balance. It lists every account with its debit or " +
      "credit balance, and total debits equal total credits. The list includes cash, receivables, inventory, prepaid " +
      "rent, equipment and accumulated depreciation, loans, dividends payable, revenue and several expenses.</p>" +
      "<p>Barada's bank is reviewing its loan and wants three figures from the statements before it renews the " +
      "credit line: <strong>net income for the year, total assets and total liabilities at the year-end</strong>. " +
      "The bank also wants to know how the year's results changed retained earnings after closing.</p>" +
      "<p>Barada's owner, Mr Haddad, asks you to help. He is not an accountant, so he wants " +
      "<em class=\"sig\">each account placed in the right category before any total is calculated</em>. Amounts in " +
      "the trial balance are in thousands of U.S. dollars. He also wants to know whether dividends reduce net " +
      "income, because a friend told him they do.</p>" },

    { type: "box", kind: "language", title: "How to enter answers", html:
      "<p>Enter amounts in <strong>thousands of U.S. dollars (USD 000)</strong>, " +
      "<strong>without the $ sign and without commas</strong> — for example <code>1250</code>. " +
      "This is the exam's own instruction, and the boxes below accept answers the same way the exam does.</p>" },

    { type: "heading", text: "Exhibit · Figure F01-10", anchor: "exhibit" },

    { type: "figure", figure: "trialbalance", label: "Exhibit (Figure F01-10)", anchor: "f01-10",
      caption: L.company.barada + " — trial balance, December 31, 2025 (USD 000). " +
        "Use this exhibit for items C1-1 to C1-6." },

    { type: "imagedrop", id: "c1-1", badge: "C1-1",
      title: "C1-1 · Match each account to its category",
      tag: "Drag and drop",
      instruction: "On the exam screen you would drag each account into a box. This is that item.",
      figure: "statement-sorter",
      prompt: "First, the step Mr Haddad asked for: place each account on the statement it reaches, before any total is calculated.",
      items: [
        { name: "Prepaid rent", zone: "bs", why: "An asset — the balance sheet." },
        { name: "Land", zone: "bs", why: "An asset — the balance sheet." },
        { name: "Dividends payable", zone: "bs", why: "A liability — the balance sheet. Not equity: it is an obligation to pay cash." },
        { name: "Additional paid-in capital", zone: "bs", why: "Equity — the balance sheet." },
        { name: "Sales revenue", zone: "is", why: "A revenue — the income statement." },
        { name: "Interest expense", zone: "is", why: "An expense — the income statement." },
        { name: "Allowance for credit losses", zone: "bs", trap: "contra-netting",
          why: "A contra-asset. It sits with the assets on the balance sheet but carries a credit balance." },
        { name: "Accumulated depreciation", zone: "bs", trap: "contra-netting",
          why: "A contra-asset. It sits with the assets on the balance sheet but carries a credit balance." },
        { name: "Dividends declared", zone: "sce", trap: "dividend-not-expense",
          why: "It reduces equity, so it belongs in the statement of changes in equity — never in the income statement as an expense." }
      ],
      distractors: [
        { name: "Net income", why: "Not an account in the trial balance: it is the result the income statement produces." },
        { name: "Working capital", why: "A measure calculated from the balance sheet, not an account." }
      ],
      traps: ["contra-netting", "dividend-not-expense"] },

    { type: "classify", id: "c1-1b", badge: "C1-1b",
      title: "C1-1 continued · the six categories",
      tag: "Drag and drop",
      instruction: "The categories the exam gives are: Asset · Contra-asset · Liability · Equity · Revenue · Expense.",
      prompt: "Now place the same eight accounts in the exact category the exam asks for. Two of them are the ones Mr Haddad will get wrong.",
      categories: [
        { id: "asset", label: "Asset" },
        { id: "contra", label: "Contra-asset" },
        { id: "liability", label: "Liability" },
        { id: "equity", label: "Equity" },
        { id: "revenue", label: "Revenue" },
        { id: "expense", label: "Expense" }
      ],
      items: [
        { name: "Prepaid rent", cat: "asset", why: "Asset." },
        { name: "Land", cat: "asset", why: "Asset." },
        { name: "Dividends payable", cat: "liability",
          why: "Liability. Dividends PAYABLE is an obligation to pay cash; dividends DECLARED reduce equity. Do not mix them up." },
        { name: "Additional paid-in capital", cat: "equity", why: "Equity." },
        { name: "Sales revenue", cat: "revenue", why: "Revenue." },
        { name: "Interest expense", cat: "expense", why: "Expense." },
        { name: "Allowance for credit losses", cat: "contra", trap: "contra-netting",
          why: "Contra-asset. Watch the two contra-asset accounts: they sit with the assets but have credit balances." },
        { name: "Accumulated depreciation", cat: "contra", trap: "contra-netting",
          why: "Contra-asset. Watch the two contra-asset accounts: they sit with the assets but have credit balances." }
      ],
      distractors: [
        { name: "Depreciation expense",
          why: "An expense — but it is not one of the eight accounts this item lists. Note how easily it is confused with accumulated depreciation." },
        { name: "Retained earnings, January 1",
          why: "Equity — but again, not one of the eight accounts this item lists." }
      ],
      traps: ["contra-netting"] },

    { type: "number", id: "c1-2", badge: "C1-2",
      title: "C1-2 · Net income for 2025",
      tag: "Numeric entry",
      exhibit: { href: "#f01-10", label: "the exhibit above" },
      prompt: "Enter Barada's net income for 2025 (USD 000).",
      label: "Net income",
      answer: is.netIncome,
      unit: "USD 000",
      explanation: "Revenue " + L.money(is.revenue) + " − cost of goods sold " + L.money(is.cogs) +
        " = gross profit " + L.money(is.grossProfit) + "; less wages " + L.money(is.wages) +
        " and depreciation " + L.money(is.depreciation) + " = operating income " + L.money(is.operatingIncome) +
        "; less interest " + L.money(is.interest) + " = " + L.money(is.netIncome) + ".",
      diagnostics: [
        { value: 280, says: "This answer subtracts the dividends declared as if they were an expense." },
        { value: 1240, says: "This answer stops at gross profit (revenue minus cost of goods sold)." },
        { value: 3100, says: "This answer reports revenue instead of net income." }
      ],
      traps: ["dividend-not-expense"] },

    { type: "number", id: "c1-3", badge: "C1-3",
      title: "C1-3 · Total assets at December 31, 2025",
      tag: "Numeric entry",
      exhibit: { href: "#f01-10", label: "the exhibit above" },
      prompt: "Enter Barada's total assets at December 31, 2025 (USD 000).",
      label: "Total assets",
      answer: bs.totalAssets,
      unit: "USD 000",
      explanation: "Current assets " + L.money(bs.currentAssets) + " (with receivables net of the allowance at " +
        L.money(bs.arNet) + ") plus non-current assets " + L.money(bs.noncurrentAssets) +
        " (with equipment net of accumulated depreciation at " + L.money(bs.equipmentNet) + ") = " +
        L.money(bs.totalAssets) + ".",
      diagnostics: [
        { value: 6030, says: "This answer ignores the allowance for credit losses." },
        { value: 6910, says: "This answer ignores accumulated depreciation." },
        { value: 7850, says: "This answer adds the contra-asset balances instead of subtracting them." }
      ],
      traps: ["contra-netting"] },

    { type: "selectlist", id: "c1-4", badge: "C1-4",
      title: "C1-4 · Retained earnings after closing",
      tag: "Select from a list",
      instruction: "A select-from-a-list item, as the exam presents it.",
      prompt: "After closing, Barada's retained earnings at December 31, 2025 are:",
      ariaLabel: "Closing retained earnings",
      options: [
        { text: "1,280", correct: true,
          why: "Opening retained earnings " + L.money(sce.reOpening) + " + net income " + L.money(is.netIncome) +
            " − dividends declared " + L.money(sce.dividends) + " = " + L.money(sce.reClosing) + "." },
        { text: "1,330", why: "This answer forgets to subtract the dividends declared." },
        { text: "330", why: "This answer reports only this year's net income." },
        { text: "1,000", why: "This is the opening balance, before net income is added." }
      ] },

    { type: "number", id: "c1-5", badge: "C1-5",
      title: "C1-5 · Total liabilities at December 31, 2025",
      tag: "Numeric entry",
      exhibit: { href: "#f01-10", label: "the exhibit above" },
      prompt: "Enter Barada's total liabilities at December 31, 2025 (USD 000).",
      label: "Total liabilities",
      answer: bs.totalLiabilities,
      unit: "USD 000",
      explanation: "Accounts payable " + L.money(bs.ap) + " + dividends payable " + L.money(bs.dividendsPayable) +
        " + the long-term note " + L.money(bs.notePayable) + " = " + L.money(bs.totalLiabilities) + ".",
      diagnostics: [
        { value: 2280, says: "This answer also counts dividends declared (an equity item) as a liability." },
        { value: 2180, says: "This answer leaves out dividends payable, which is a liability." }
      ] },

    { type: "blank", id: "c1-6", badge: "C1-6",
      title: "C1-6 · What does a dividend reduce?",
      tag: "Fill in the blank",
      instruction: "A fill-in-the-blank item — and the answer to the question Mr Haddad's friend got wrong.",
      parts: [
        "When Barada declares a cash dividend, the dividend reduces ",
        "; it is not an expense."
      ],
      options: [
        { text: "retained earnings", correct: true,
          why: "A dividend is a distribution to owners. It reduces retained earnings and never appears in the income statement." },
        { text: "net income",
          why: "This answer treats a dividend as an expense that reduces net income. It is not an expense." },
        { text: "revenue",
          why: "This answer misreads the nature of a dividend: it is a distribution, not a reduction of revenue." },
        { text: "total assets on the declaration date",
          why: "This answer misses the timing: cash leaves only when the dividend is paid. Declaration creates a liability." }
      ],
      traps: ["dividend-not-expense"] },

    { type: "selfex", id: "c1-7", badge: "C1-7",
      title: "Answer Mr Haddad in one paragraph",
      tag: "Explain it",
      prompt: "Mr Haddad's friend told him that dividends reduce net income. Write the reply you would give him — in plain English, as you would to someone who is not an accountant.",
      placeholder: "Your friend is thinking of…",
      checklist: [
        "Did you say clearly that a dividend is not an expense?",
        "Did you say what a dividend IS — a distribution to the owners?",
        "Did you say that it reduces retained earnings rather than net income?",
        "Did you mention that declaring it creates a liability, and the cash leaves later?",
        "Did you keep it free of jargon he would not follow?"
      ],
      model: "Your friend is mixing up two different things. An <strong>expense</strong> is a cost of running the " +
        "business — wages, rent, the cost of the goods you sell — and expenses do reduce net income. " +
        "A <strong>dividend</strong> is not a cost of running the business at all: it is a " +
        "<strong>distribution of profit to the owners</strong>, decided by the board after the profit has been " +
        "earned. So it never appears in the income statement, and net income is exactly the same whether you pay a " +
        "dividend or not. What it does reduce is <strong>retained earnings</strong> — the pile of past profit " +
        "the company has kept. And note the timing: on the day the dividend is declared you owe it, so a liability " +
        "(dividends payable) appears; the cash itself only leaves when you pay it." },

    { type: "prose", html:
      "<p class=\"fig-note\"><strong>What the bank asked for.</strong> Net income " + L.money(is.netIncome) +
      ", total assets " + L.money(bs.totalAssets) + ", total liabilities " + L.money(bs.totalLiabilities) +
      ", and closing retained earnings " + L.money(sce.reClosing) + " — which is the opening " +
      L.money(sce.reOpening) + " plus the year's " + L.money(is.netIncome) + " less the " +
      L.money(sce.dividends) + " dividend. Section <a href=\"s1-7.html\">1.7</a> builds all three statements in " +
      "full, and the <a href=\"answers.html\">answer section</a> sets out every explanation.</p>" }
    ]
  };
})();
