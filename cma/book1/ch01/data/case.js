/* Case question · Barada Wholesale — the CBQ in the exam's own item formats.
   C1-1 drag and drop, C1-2/3/5 numeric entry with the book's named wrong answers
   wired to the actual entry, C1-4 select from a list, C1-6 fill in the blank. */
(function () {
  var L = window.LEDGER, T = window.TERMS, is = L.is, sce = L.sce, bs = L.bs, m = L.money;

  window.PAGE = {
    id: "case", up: "../",
    title: "Case question · " + L.company.barada,
    terms: T.bridge("1.6"),
    scenes: [

    { id: "brief", kind: "probe",
      kicker: "The case",
      title: "What the bank and Mr Haddad want",
      say: "Open each card. Everything the six items need is here.",
      probes: [
        { q: "Who is Barada Wholesale?",
          a: "A food wholesaler in Amman and one of Orontes's largest customers. It buys tahini, halva and oils from Orontes and sells them to shops across Jordan. <b>It prepares its statements under U.S. GAAP</b> because its bank and its main supplier ask for them." },
        { q: "What does the bank want?",
          a: "It is reviewing its loan and wants three figures before it renews the credit line: <b>net income for the year, total assets and total liabilities at the year-end</b>. It also wants to know how the year's results changed retained earnings after closing." },
        { q: "What does Mr Haddad want?",
          a: "He is not an accountant, so he wants <b>each account placed in the right category before any total is calculated</b>. He also wants to know whether dividends reduce net income, because a friend told him they do." },
        { q: "How do I enter the amounts?",
          a: "In <b>thousands of U.S. dollars (USD 000), without the $ sign and without commas</b> — for example <code>1250</code>. The boxes here accept them exactly as the exam does." }
      ] },

    { id: "c1-1", kind: "sort", board: "lanes",
      kicker: "C1-1 · drag and drop",
      title: "Match each account to its category",
      say: "On the exam screen you would drag each account into a box. Two of the eight are the ones Mr Haddad will get wrong.",
      traps: ["contra-netting"],
      targets: [
        { id: "asset", label: "Asset" },
        { id: "contra", label: "Contra-asset" },
        { id: "liability", label: "Liability" },
        { id: "equity", label: "Equity" },
        { id: "revenue", label: "Revenue" },
        { id: "expense", label: "Expense" }
      ],
      items: [
        { name: "Prepaid rent", amount: 24, to: "asset", why: "" },
        { name: "Land", amount: 936, to: "asset", why: "" },
        { name: "Dividends payable", amount: 50, to: "liability",
          why: "Dividends PAYABLE is a liability. Dividends DECLARED reduce equity — do not mix them up." },
        { name: "Additional paid-in capital", amount: 1900, to: "equity", why: "" },
        { name: "Sales revenue", amount: 3100, to: "revenue", why: "" },
        { name: "Interest expense", amount: 90, to: "expense", why: "" },
        { name: "Allowance for credit losses", amount: 20, to: "contra", trap: "contra-netting",
          why: "Watch the two contra-asset accounts: they sit with the assets but have credit balances." },
        { name: "Accumulated depreciation", amount: 900, to: "contra", trap: "contra-netting",
          why: "Watch the two contra-asset accounts: they sit with the assets but have credit balances." }
      ],
      distractors: [
        { name: "Depreciation expense", amount: 300,
          why: "An expense — but not one of the eight accounts this item lists. Note how easily it is confused with accumulated depreciation." },
        { name: "Retained earnings, January 1", amount: 1000,
          why: "Equity — but again, not one of the eight accounts this item lists." }
      ] },

    { id: "c1-2", kind: "number",
      kicker: "C1-2 · numeric entry",
      title: "Net income for 2025",
      say: "Enter the amount in USD 000, with no $ sign and no commas.",
      traps: ["dividend-not-expense"],
      fields: [
        { label: "Net income", answer: is.netIncome,
          why: "Revenue " + m(is.revenue) + " − cost of goods sold " + m(is.cogs) + " = gross profit " +
            m(is.grossProfit) + "; less wages " + m(is.wages) + " and depreciation " + m(is.depreciation) +
            " = operating income " + m(is.operatingIncome) + "; less interest " + m(is.interest) + ".",
          diag: [
            { v: 280, says: "This answer subtracts the dividends declared as if they were an expense." },
            { v: 1240, says: "This answer stops at gross profit (revenue minus cost of goods sold)." },
            { v: 3100, says: "This answer reports revenue instead of net income." }
          ] }
      ] },

    { id: "c1-3", kind: "number",
      kicker: "C1-3 · numeric entry",
      title: "Total assets at December 31, 2025",
      say: "Watch the two contra accounts.",
      traps: ["contra-netting"],
      fields: [
        { label: "Total assets", answer: bs.totalAssets,
          why: "Current assets " + m(bs.currentAssets) + " (receivables net at " + m(bs.arNet) +
            ") plus non-current " + m(bs.noncurrentAssets) + " (equipment net at " + m(bs.equipmentNet) + ").",
          diag: [
            { v: 6030, says: "This answer ignores the allowance for credit losses." },
            { v: 6910, says: "This answer ignores accumulated depreciation." },
            { v: 7850, says: "This answer adds the contra-asset balances instead of subtracting them." }
          ] }
      ] },

    { id: "c1-4", kind: "check",
      kicker: "C1-4 · select from a list",
      title: "After closing, retained earnings at December 31, 2025 are:",
      options: [
        { text: "1,280", correct: true,
          why: "Opening " + m(sce.reOpening) + " + net income " + m(is.netIncome) + " − dividends declared " +
            m(sce.dividends) + "." },
        { text: "1,330", why: "This answer forgets to subtract the dividends declared." },
        { text: "330", why: "This answer reports only this year's net income." },
        { text: "1,000", why: "This is the opening balance, before net income is added." }
      ] },

    { id: "c1-5", kind: "number",
      kicker: "C1-5 · numeric entry",
      title: "Total liabilities at December 31, 2025",
      fields: [
        { label: "Total liabilities", answer: bs.totalLiabilities,
          why: "Accounts payable " + m(bs.ap) + " + dividends payable " + m(bs.dividendsPayable) +
            " + the long-term note " + m(bs.notePayable) + ".",
          diag: [
            { v: 2280, says: "This answer also counts dividends declared (an equity item) as a liability." },
            { v: 2180, says: "This answer leaves out dividends payable, which is a liability." }
          ] }
      ] },

    { id: "c1-6", kind: "check",
      kicker: "C1-6 · fill in the blank",
      title: "When Barada declares a cash dividend, the dividend reduces ____",
      say: "… it is not an expense.",
      traps: ["dividend-not-expense"],
      options: [
        { text: "retained earnings", correct: true,
          why: "A dividend is a distribution to owners. It reduces retained earnings and never appears in the income statement." },
        { text: "net income", why: "This answer treats a dividend as an expense that reduces net income." },
        { text: "revenue", why: "A dividend is a distribution, not a reduction of revenue." },
        { text: "total assets on the declaration date",
          why: "Cash leaves only when the dividend is paid; declaration creates a liability." }
      ] },

    { id: "answer", kind: "probe",
      kicker: "What you would send the bank",
      title: "The four figures",
      say: "And the answer to Mr Haddad's question.",
      probes: [
        { q: "Net income, total assets, total liabilities, closing retained earnings",
          a: "Net income <b>" + m(is.netIncome) + "</b>, total assets <b>" + m(bs.totalAssets) +
            "</b>, total liabilities <b>" + m(bs.totalLiabilities) + "</b>, closing retained earnings <b>" +
            m(sce.reClosing) + "</b> — the opening " + m(sce.reOpening) + " plus the year's " +
            m(is.netIncome) + " less the " + m(sce.dividends) + " dividend." },
        { q: "Do dividends reduce net income?",
          a: "<b>No.</b> A dividend is a distribution of profit to the owners, decided after the profit has been earned. It reduces <b>retained earnings</b>, never net income, and it never appears in the income statement. On the day it is declared a liability (dividends payable) appears; the cash leaves when it is paid." }
      ] }
    ]
  };
})();
