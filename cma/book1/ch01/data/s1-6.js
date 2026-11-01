/* §1.6 A first look at the four statements — seven scenes.
   F01-09 becomes two wires the learner must connect; F01-10 is the complete
   twenty-line trial balance, tagged line by line. */
(function () {
  var L = window.LEDGER, T = window.TERMS, m = L.money;

  window.PAGE = {
    id: "s1-6", n: "1.6", up: "../",
    title: "A first look at the four statements",
    terms: T.bridge("1.6"),
    scenes: [

    { id: "when", kind: "sort", board: "trays",
      kicker: "The four statements",
      title: "A date, or a period?",
      say: "Three of the four cover a stretch of time. Only one reports a position at one moment.",
      targets: [
        { id: "date", label: "📍 At a single date", sub: "there is only one" },
        { id: "period", label: "🕓 For a period", sub: "the other three" }
      ],
      items: [
        { name: "Balance sheet", to: "date",
          why: "What the company has and owes, and the owners' claim — at one date." },
        { name: "Income statement", to: "period", why: "How the company performed, for a period." },
        { name: "Statement of changes in equity", to: "period", why: "Why each equity account changed, for a period." },
        { name: "Statement of cash flows", to: "period", why: "Where cash came from and went, for a period." }
      ],
      distractors: [
        { name: "Statement of financial position",
          why: "Worth catching: this is only the IFRS name for the balance sheet, so it is the same statement, not a fifth one." },
        { name: "Trial balance", why: "Not a financial statement at all, though it is drawn up at a date." }
      ] },

    { id: "wire", kind: "wire",
      kicker: "Figure F01-09",
      title: "Wire the statements together",
      say: "Two links hold the four statements together. Click a port, then the port it feeds. Wrong pairs will not connect.",
      cards: [
        { title: "Income statement", sub: "for a period",
          ports: [{ id: "ni", label: "net income " + m(L.jan.ni) }] },
        { title: "Statement of changes in equity", sub: "for a period",
          ports: [{ id: "re", label: "retained earnings" }] },
        { title: "Statement of cash flows", sub: "for a period",
          ports: [{ id: "cash", label: "net change in cash " + m(L.jan.cash) }] },
        { title: "Balance sheet", sub: "at a date",
          ports: [{ id: "cashbal", label: "the cash balance" }] }
      ],
      links: [
        { id: "l1", from: "ni", to: "re", carries: "→",
          why: "<b>Net income flows into retained earnings.</b> In January that was " + m(L.jan.ni) +
            ", and after the dividend of 50 retained earnings rose by " + m(L.jan.retainedEarningsChange) + "." },
        { id: "l2", from: "cash", to: "cashbal", carries: "→",
          why: "<b>The net change in cash explains the cash balance</b> on the balance sheet. In January cash rose " +
            m(L.jan.cash) + ": operating −40, investing −1,200, financing +2,300." }
      ] },

    { id: "gap", kind: "number",
      kicker: "The accrual basis at work",
      title: "Net income was 80. Cash rose 1,060.",
      say: "Both numbers are right, and neither explains the other. Work out where the cash actually came from.",
      fields: [
        { label: "Operating cash flow in January", answer: L.jan.operating,
          why: "Only the wages of 40 moved cash in operations — an outflow." },
        { label: "Investing cash flow in January", answer: L.jan.investing,
          why: "The bottling line, bought for 1,200 cash — an outflow." },
        { label: "Financing cash flow in January", answer: L.jan.financing,
          why: "1,500 from the share issue plus 800 borrowed = an inflow of 2,300." },
        { label: "Net income for January", answer: L.jan.ni,
          why: "Revenue 300 − cost of goods sold 180 − wages 40.",
          diag: [{ v: L.jan.cash, says: "That is the change in cash. Net income and cash are very different numbers — that is the accrual basis." }] }
      ],
      hint: "Operating −40, investing −1,200, financing +2,300 = +1,060 of cash, against net income of 80." },

    { id: "tb", kind: "tbreader",
      kicker: "Figure F01-10",
      title: "Read the trial balance",
      say: "Pick a destination, then click the lines that reach it. Total debits equal total credits at " +
        m(L.totalDebits) + " — and two lines catch people.",
      traps: ["contra-netting"],
      tags: [
        { id: "is", label: "Income statement", short: "income statement" },
        { id: "sce", label: "Changes in equity", short: "changes in equity" },
        { id: "bs", label: "Balance sheet", short: "balance sheet" }
      ],
      why: {
        re0: "The OPENING balance starts the statement of changes in equity. The closing balance goes to the balance sheet.",
        divdeclared: "A distribution to owners: it reduces equity in the statement of changes in equity, and is never an expense.",
        accumdep: "A contra-asset on the balance sheet. Depreciation EXPENSE is the income statement item.",
        allowance: "A contra-asset on the balance sheet, netted against receivables.",
        depexp: "The period's charge, in the income statement. Accumulated depreciation is the running total on the balance sheet."
      } },

    { id: "cues", kind: "cues",
      kicker: "Language focus",
      title: "The word that changes the question",
      say: "Click the one word that changes how you must read the stem, then say what it tells you to do.",
      effects: [
        "More than one option may be partly true — choose the best one.",
        "Three options are true — find the one that is false.",
        "Ignore later events, such as next month's cash payment.",
        "Add the increases and decreases together before answering."
      ],
      stems: [
        { text: "Which information will the bank find MOST useful?", cue: "MOST",
          effect: "More than one option may be partly true — choose the best one." },
        { text: "Accumulated depreciation is BEST described as:", cue: "BEST",
          effect: "More than one option may be partly true — choose the best one." },
        { text: "Which transaction changes total assets but does NOT change total equity?", cue: "NOT",
          effect: "Three options are true — find the one that is false." },
        { text: "What is the effect immediately after the declaration?", cue: "immediately",
          effect: "Ignore later events, such as next month's cash payment." },
        { text: "What is the net effect of these transactions on total equity?", cue: "net",
          effect: "Add the increases and decreases together before answering." }
      ] },

    { id: "sc1", kind: "check", kicker: "SC6-1", title: "Which statement reports amounts at a single date?",
      options: [
        { text: "The income statement", why: "The income statement covers a period." },
        { text: "The balance sheet", correct: true,
          why: "The balance sheet shows position at one date. The other statements cover a period." },
        { text: "The statement of changes in equity", why: "It covers a period." },
        { text: "The statement of cash flows", why: "It covers a period." }
      ] },

    { id: "sc2", kind: "check", kicker: "SC6-2",
      title: "Which two accounts in the trial balance are contra-asset accounts?",
      traps: ["contra-netting"],
      options: [
        { text: "Allowance for credit losses and dividends payable",
          why: "Dividends payable is a liability, not a contra-asset." },
        { text: "Accumulated depreciation and notes payable",
          why: "Notes payable is a liability, not a contra-asset." },
        { text: "Allowance for credit losses and accumulated depreciation", correct: true,
          why: "Both reduce an asset — receivables and equipment — and both have credit balances." },
        { text: "Dividends declared and accumulated depreciation",
          why: "Dividends declared reduces equity, not an asset." }
      ] }
    ]
  };
})();
