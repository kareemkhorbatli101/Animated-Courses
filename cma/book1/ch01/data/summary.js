/* Chapter summary — F01-13 as the clickable rule map, the summary paragraph with
   each clause linked back to its section, a cloze over the summary, and the
   chapter's tie recap. */
(function () {
  var L = window.LEDGER, is = L.is, sce = L.sce, bs = L.bs;

  window.PAGE = {
    id: "summary", kind: "back", up: "../",
    eyebrow: "Chapter 1 · Summary",
    title: "Chapter summary",
    crumb: "Summary",
    question: "The one rule that matters from each of the seven topics.",
    blocks: [

    { type: "prose", html:
      "<p>Figure F01-13 brings the chapter together. Each box shows the key rule for its topic — click any box " +
      "to go back to that section. <span id=\"page-progress\" class=\"page-progress\"></span></p>" },

    { type: "figure", figure: "summarymap", label: "Figure F01-13", anchor: "f01-13",
      caption: "Chapter 1 summary map: the key rule for each of the seven topics. Completed sections are marked." },

    { type: "prose", html:
      "<p>General-purpose financial statements serve <a href=\"s1-1.html\">investors, lenders and other " +
      "creditors</a>. Useful information is <a href=\"s1-1.html#useful\">relevant and faithfully represented</a>. " +
      "The statements are built from <a href=\"s1-2.html\">elements that the accounting equation links</a>: assets " +
      "equal liabilities plus equity. Every transaction is recorded with " +
      "<a href=\"s1-3.html\">equal debits and credits</a>. The " +
      "<a href=\"s1-4.html\">accrual basis</a> records revenues when they are earned and expenses when they are " +
      "incurred, and it matches expenses to the revenues they help to produce. The " +
      "<a href=\"s1-5.html\">FASB writes U.S. GAAP in the ASC, and the IASB writes IFRS</a>. The CMA exam uses " +
      "U.S. GAAP and tests the main IFRS differences. The <a href=\"s1-6.html\">balance sheet shows one date</a>, " +
      "while the other three statements cover a period, and net income and cash link them.</p>" },

    { type: "cloze", id: "x01", badge: "01",
      title: "Complete the chapter summary",
      tag: "Recall",
      instruction: "The paragraph above, with its load-bearing words removed. Fill it in without scrolling back if you can.",
      hint: "Drag a word into each blank, or tap a word and then tap a blank. There are more words than blanks.",
      parts: [
        "General-purpose financial statements serve investors, lenders and other ",
        ". Useful information is relevant and ",
        " represented. Assets equal liabilities plus ",
        ". Every transaction is recorded with equal debits and ",
        ". The accrual basis records revenues when they are ",
        " and expenses when they are ",
        ". The ",
        " writes U.S. GAAP in the ASC. Only the ",
        " shows a single date; the other three statements cover a period."
      ],
      answers: [
        { word: "creditors", why: "The three primary users are existing and potential investors, lenders and other creditors." },
        { word: "faithfully", why: "Relevance and faithful representation are the two fundamental qualities." },
        { word: "equity", why: "A = L + E. Equity is the residual interest after deducting liabilities." },
        { word: "credits", why: "Total debits always equal total credits, which is why the equation always balances." },
        { word: "earned", why: "Revenue is recorded when earned — when the goods or services are delivered." },
        { word: "incurred", why: "Expenses are recorded when incurred, not when paid." },
        { word: "FASB", why: "The FASB writes U.S. GAAP and keeps it in the Accounting Standards Codification." },
        { word: "balance sheet", why: "The balance sheet reports a position at one date. The other three cover a period." }
      ],
      extra: ["SEC", "PCAOB", "collected", "income statement", "paid"] },

    { type: "match", id: "x02", badge: "02",
      title: "One rule per topic",
      tag: "Matching",
      instruction: "If you can only remember seven things from this chapter, remember these.",
      hint: "Drag the key rule into the box beside its topic. Two rules belong to no topic here.",
      dropHint: "the key rule is…",
      speakPrompt: false,
      pairs: [
        { a: "1.1 · Users", b: "Primary users are investors, lenders and other creditors — managers are not.",
          why: "Managers can obtain internal information, so they do not depend on general-purpose statements." },
        { a: "1.2 · Elements", b: "Assets = liabilities + equity, and a dividend is never an expense.",
          why: "A dividend reduces retained earnings as a distribution to owners." },
        { a: "1.3 · Double entry", b: "Every entry has equal debits and credits; the left of the expanded equation increases with a debit.",
          why: "Assets, expenses and dividends increase with a debit; liabilities, equity and revenues with a credit." },
        { a: "1.4 · Accrual basis", b: "Revenue when earned and expenses when incurred — match expenses to revenues, not to cash.",
          why: "The timing of the cash never decides the period." },
        { a: "1.5 · Rule makers", b: "FASB writes U.S. GAAP in the ASC; the SEC has legal authority; the PCAOB audits; the IASB writes IFRS.",
          why: "Four bodies, four jobs — and the PCAOB sets auditing, not accounting, standards." },
        { a: "1.6 · Four statements", b: "Only the balance sheet is at a date; net income and cash link the four.",
          why: "Net income flows into retained earnings, and the net change in cash explains the cash balance." },
        { a: "1.7 · Trial balance to statements", b: "Sort by element, build the income statement first, net the contra accounts, make it tie.",
          why: "The income statement must come first because the next statement needs net income." }
      ],
      distractors: [
        { b: "Cash received in advance is revenue as soon as the money arrives.",
          why: "False — it is a contract liability. The company still owes the goods." },
        { b: "The PCAOB writes U.S. GAAP for public companies.",
          why: "False — the PCAOB sets auditing standards. The FASB writes U.S. GAAP." }
      ] },

    { type: "heading", text: "The chapter's figures, in one place", anchor: "ties" },

    { type: "table", caption: "Everything in Chapter 1 that has to tie — all of it computed, none of it typed",
      head: ["Check", "Figure"],
      rows: L.checkTies().map(function (t) {
        return [t.label, "<strong>" + L.money(t.left) + "</strong> = " + L.money(t.right) +
          " &nbsp;<span style=\"color:var(--good);font-weight:800\">✓</span>"];
      }),
      note: "Every one of these recomputes from the single ledger behind this site. If a future edit broke one, the " +
        "quality-check page would refuse to pass." },

    { type: "number", id: "x03", badge: "03",
      title: "Recall the chapter's key figures without looking",
      tag: "Calculation",
      instruction: "No exhibit this time. If you have built the statements in section 1.7, these should come back.",
      prompt: "Barada Wholesale, from the trial balance you have worked with all chapter.",
      unit: "USD 000",
      fields: [
        { key: "ni", label: "Net income", answer: is.netIncome,
          explain: "Operating income " + L.money(is.operatingIncome) + " less interest " + L.money(is.interest) + "." },
        { key: "ta", label: "Total assets", answer: bs.totalAssets,
          explain: "Current " + L.money(bs.currentAssets) + " + non-current " + L.money(bs.noncurrentAssets) + ", both net of the contra accounts." },
        { key: "tl", label: "Total liabilities", answer: bs.totalLiabilities,
          explain: "Current " + L.money(bs.currentLiabilities) + " + the long-term note " + L.money(bs.notePayable) + "." },
        { key: "re", label: "Closing retained earnings", answer: sce.reClosing,
          explain: L.money(sce.reOpening) + " + " + L.money(is.netIncome) + " − " + L.money(sce.dividends) + "." },
        { key: "te", label: "Total equity", answer: sce.totalEquity,
          explain: "Contributed capital " + L.money(sce.contributed) + " + retained earnings " + L.money(sce.reClosing) + "." }
      ],
      note: "Assets " + L.money(bs.totalAssets) + " = liabilities " + L.money(bs.totalLiabilities) +
        " + equity " + L.money(sce.totalEquity) + "." },

    { type: "prose", html:
      "<p class=\"fig-note\">Next: the <a href=\"practice.html\">practice set</a> (P01–P16), the " +
      "<a href=\"case.html\">case question</a>, and the <a href=\"review.html\">mixed review</a>, which interleaves " +
      "items from every section and shows you the traps you have actually fallen into.</p>" }
    ]
  };
})();
