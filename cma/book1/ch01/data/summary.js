/* Chapter summary — F01-13 as seven rule cards, plus a recall of the figures. */
(function () {
  var L = window.LEDGER, T = window.TERMS, is = L.is, sce = L.sce, bs = L.bs, m = L.money;

  window.PAGE = {
    id: "summary", up: "../",
    title: "Chapter summary",
    terms: T.keys().slice(8),
    scenes: [

    { id: "rules", kind: "sort", board: "trays",
      kicker: "Figure F01-13",
      title: "One rule from each of the seven topics",
      say: "If you remember seven things from this chapter, these are the seven. Put each rule with its topic.",
      targets: [
        { id: "t1", label: "1.1 Users" },
        { id: "t2", label: "1.2 Elements" },
        { id: "t3", label: "1.3 Double entry" },
        { id: "t4", label: "1.4 Accrual basis" },
        { id: "t5", label: "1.5 Rule makers" },
        { id: "t6", label: "1.6 Four statements" },
        { id: "t7", label: "1.7 Trial balance" }
      ],
      items: [
        { name: "Primary users are investors, lenders and other creditors — managers are not", to: "t1",
          why: "Managers can obtain internal information, so they do not depend on general-purpose statements." },
        { name: "Assets = liabilities + equity, and a dividend is never an expense", to: "t2",
          why: "A dividend reduces retained earnings as a distribution to owners." },
        { name: "Equal debits and credits; the left of the expanded equation increases with a debit", to: "t3",
          why: "Assets, expenses and dividends increase with a debit; liabilities, equity and revenues with a credit." },
        { name: "Revenue when earned and expenses when incurred — match to revenues, not to cash", to: "t4",
          why: "The timing of the cash never decides the period." },
        { name: "FASB writes U.S. GAAP in the ASC; the SEC has authority; the PCAOB audits; the IASB writes IFRS", to: "t5",
          why: "Four bodies, four jobs — and the PCAOB sets auditing, not accounting, standards." },
        { name: "Only the balance sheet is at a date; net income and cash link the four", to: "t6",
          why: "Net income flows into retained earnings, and the net change in cash explains the cash balance." },
        { name: "Sort by element, build the income statement first, net the contra accounts, make it tie", to: "t7",
          why: "The income statement comes first because the next statement needs net income." }
      ],
      distractors: [
        { name: "Cash received in advance is revenue as soon as the money arrives",
          why: "False. It is a contract liability — the company still owes the goods." },
        { name: "The PCAOB writes U.S. GAAP for public companies",
          why: "False. The PCAOB sets auditing standards. The FASB writes U.S. GAAP." }
      ] },

    { id: "figures", kind: "number",
      kicker: "From memory",
      title: "The chapter's figures, without the exhibit",
      say: "If you built the statements in section 1.7, these should come back.",
      fields: [
        { label: "Net income", answer: is.netIncome,
          why: "Operating income " + m(is.operatingIncome) + " less interest " + m(is.interest) + "." },
        { label: "Total assets", answer: bs.totalAssets,
          why: "Current " + m(bs.currentAssets) + " + non-current " + m(bs.noncurrentAssets) + ", both net of the contra accounts.",
          diag: [{ v: 6030, says: "That ignores the allowance for credit losses." },
                 { v: 6910, says: "That ignores accumulated depreciation." }] },
        { label: "Total liabilities", answer: bs.totalLiabilities,
          why: "Current " + m(bs.currentLiabilities) + " + the long-term note " + m(bs.notePayable) + "." },
        { label: "Closing retained earnings", answer: sce.reClosing,
          why: m(sce.reOpening) + " + " + m(is.netIncome) + " − " + m(sce.dividends) + ".",
          diag: [{ v: 1330, says: "That forgets the dividend declared." }] },
        { label: "Total equity", answer: sce.totalEquity,
          why: "Contributed capital " + m(sce.contributed) + " + retained earnings " + m(sce.reClosing) + "." }
      ],
      hint: "Assets " + m(bs.totalAssets) + " = liabilities " + m(bs.totalLiabilities) + " + equity " + m(sce.totalEquity) + "." },

    { id: "para", kind: "cloze",
      kicker: "The chapter in one paragraph",
      title: "Fill the load-bearing words",
      say: "Without scrolling back, if you can.",
      parts: [
        "General-purpose statements serve investors, lenders and other ",
        ". Useful information is relevant and ",
        " represented. Assets equal liabilities plus ",
        ". Every transaction is recorded with equal debits and ",
        ". The accrual basis records revenues when they are ",
        " and expenses when they are ",
        ". The ",
        " writes U.S. GAAP in the ASC, and only the ",
        " reports at a single date."
      ],
      answers: [
        { word: "creditors", why: "Investors, lenders and other creditors." },
        { word: "faithfully", why: "Relevance and faithful representation are the two fundamental qualities." },
        { word: "equity", why: "A = L + E. Equity is the residual." },
        { word: "credits", why: "Total debits always equal total credits." },
        { word: "earned", why: "Revenue when earned — when the goods or services are delivered." },
        { word: "incurred", why: "Expenses when incurred, not when paid." },
        { word: "FASB", why: "The FASB writes U.S. GAAP and keeps it in the Codification." },
        { word: "balance sheet", why: "The other three statements cover a period." }
      ],
      extra: ["SEC", "PCAOB", "collected", "income statement", "paid"] }
    ]
  };
})();
