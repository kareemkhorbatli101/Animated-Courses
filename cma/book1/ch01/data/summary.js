/* Chapter summary — F01-13 as seven rule cards, plus a recall of the figures. */
(function () {
  var L = window.LEDGER, T = window.TERMS, is = L.is, sce = L.sce, bs = L.bs, m = L.money;

  window.PAGE = {
    id: "summary", up: "../",
    title: "Chapter summary",
    terms: T.keys().slice(8),
    /* THIS COMMENT USED TO SAY the page had "no prose of the author's to summarise". It had
       two paragraphs of it - the chapter's own closing summary - and saying so was how they
       went unwritten. They are here now. No `anim`: the drawing this page needs is F01-13
       itself, which the figure scene already routes into the Brief with `inBrief`.

       The second paragraph is the whole chapter in one breath, and the `para` cloze blanks
       its load-bearing words. So it is SEALED behind that cloze: reading it first would not
       be revision, it would be the answer sheet. */
    brief: {
      read: [
        { h: "Chapter summary",
          p: [
            "Figure F01-13 brings the chapter together. Each box now shows the key rule for its topic."
          ]
        },
        { h: "The key rule for each of the seven topics",
          p: [
            "General-purpose financial statements serve investors, lenders and other creditors. Useful information is relevant and faithfully represented. The statements are built from elements that the accounting equation links: assets equal liabilities plus equity. Every transaction is recorded with equal debits and credits. The accrual basis records revenues when they are earned and expenses when they are incurred, and it matches expenses to the revenues they help to produce. The FASB writes U.S. GAAP in the ASC, and the IASB writes IFRS. The CMA exam uses U.S. GAAP and tests the main IFRS differences. The balance sheet shows one date, while the other three statements cover a period, and net income and cash link them."
          ]
        }
      ],
      seal: { "para": ["The key rule for each of the seven topics"] }
    },
    scenes: [

    { id: "fig-f01-13", from: ["F01-13"], kind: "figure",
      /* The summary map prints six of the eight words the summary cloze blanks and
         the key rule the summary sort asks for, so there is nowhere on this page it
         can stand without being the answer. It goes to the Brief. */
      inBrief: true, file: "F01-13.png",
      label: "Figure F01-13.", caption: "Chapter 1 summary map: the key rule for each of the seven topics." },


    { id: "rules", from: ["F01-13"], kind: "sort", board: "trays",
      kicker: "Figure F01-13",
      title: "One rule from each of the seven topics",
      say: "The key rule for each of the seven topics. Put each rule with its topic.",
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
        { name: "Cash received in advance is revenue",
          why: "False. Cash received in advance is a liability, not revenue." },
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
      kicker: "The chapter summary",
      title: "Fill the load-bearing words",
      say: "From memory, if you can.",
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
