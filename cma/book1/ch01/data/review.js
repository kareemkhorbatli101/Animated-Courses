/* Mixed review — items from every section, interleaved, plus the trap counter.
   Nothing new is invented here: every item is drawn from the chapter. */
(function () {
  var L = window.LEDGER, T = window.TERMS, m = L.money;

  window.PAGE = {
    id: "review", up: "../",
    title: "Mixed review",
    terms: T.bridge("1.4"),
    /* the Brief carries the terms and what this page asks; this page has no
       prose of the author's to summarise and no mechanism to draw. */
    brief: {
      /* the T: one side increases an account, the other reduces it */
      anim: "tAccount"
    },
    scenes: [

    { id: "traps", kind: "traps",
      kicker: "Your own record",
      title: "The traps you have fallen into",
      say: "Kept by name as you worked. Go back to the one that keeps catching you." },

    { id: "mixed", kind: "sort", board: "lanes",
      kicker: "Interleaved",
      title: "Things that look alike",
      say: "Drawn from four sections at once. Nothing tells you which is which.",
      traps: ["contra-netting", "cash-not-trigger"],
      targets: [
        { id: "q", label: "A quality of useful information" },
        { id: "el", label: "An element of the statements" },
        { id: "ac", label: "An account in the trial balance" },
        { id: "adj", label: "An accrual or deferral adjustment" }
      ],
      items: [
        { name: "Materiality", to: "q", why: "Part of relevance (1.1)." },
        { name: "Timeliness", to: "q", why: "An enhancing quality (1.1)." },
        { name: "Comprehensive income", to: "el", why: "One of the ten elements (1.2)." },
        { name: "Distributions to owners", to: "el", why: "One of the ten elements (1.2)." },
        { name: "Allowance for credit losses", to: "ac", trap: "contra-netting",
          why: "A contra-asset account in the trial balance (1.3, 1.6)." },
        { name: "Dividends payable", to: "ac", why: "A liability account in the trial balance (1.6)." },
        { name: "Prepaid expense", to: "adj", trap: "cash-not-trigger",
          why: "Cash paid before the expense is incurred — it creates an asset (1.4)." },
        { name: "Contract liability", to: "adj", trap: "cash-not-trigger",
          why: "Cash received before the revenue is earned — it creates a liability (1.4)." }
      ],
      distractors: [
        { name: "FASB", why: "A standard setter (1.5), not a quality, element, account or adjustment." },
        { name: "The cost constraint", why: "A constraint on reporting, not a quality of the information (1.1)." }
      ] },

    { id: "except", kind: "check",
      kicker: "Interleaved",
      title: "All of the following are true EXCEPT:",
      traps: ["dividend-not-expense"],
      options: [
        { text: "A dividend declared reduces net income for the period.", correct: true,
          why: "This is the false one, so it is the answer. A dividend reduces retained earnings and is never an expense." },
        { text: "The FASB keeps all U.S. GAAP in the Accounting Standards Codification.",
          why: "True. The ASC is the single source of authoritative nongovernmental U.S. GAAP." },
        { text: "Accumulated depreciation has a credit balance but belongs with the assets.",
          why: "True. It is a contra-asset that reduces equipment to its net figure." },
        { text: "Only the balance sheet reports amounts at a single date.",
          why: "True. The other three statements cover a period." }
      ] },

    { id: "figs", kind: "number",
      kicker: "Interleaved",
      title: "Five figures, no exhibit",
      say: "From memory if you can. The point is to produce them, not to read them.",
      fields: [
        { label: "Gross profit", answer: L.is.grossProfit, why: "3,100 − 1,860." },
        { label: "Net income", answer: L.is.netIncome, why: "420 operating income less 90 interest.",
          diag: [{ v: 420, says: "That is operating income. Interest of 90 leaves net income of 330." }] },
        { label: "Total current assets", answer: L.bs.currentAssets,
          why: "Cash 1,050 + receivables net 280 + inventory 420 + prepaid rent 24.",
          diag: [{ v: 1794, says: "That adds the allowance back instead of subtracting it." }] },
        { label: "Closing retained earnings", answer: L.sce.reClosing, why: "1,000 + 330 − 50.",
          diag: [{ v: 1330, says: "That forgets the dividend declared." }] },
        { label: "Total assets", answer: L.bs.totalAssets, why: "1,774 + 4,236.",
          diag: [{ v: 6030, says: "That ignores the allowance for credit losses." },
                 { v: 6910, says: "That ignores accumulated depreciation." }] }
      ] },

    { id: "effect", kind: "sort", board: "lanes",
      kicker: "Interleaved",
      title: "Net income, cash, both, or neither?",
      say: "This one needs the accrual basis and the three cash-flow categories at once.",
      traps: ["dividend-not-expense"],
      targets: [
        { id: "ni", label: "Net income only" },
        { id: "cash", label: "Cash only" },
        { id: "both", label: "Both" },
        { id: "neither", label: "Neither" }
      ],
      items: [
        { name: "Sell olive oil on credit (revenue 300, cost 180)", to: "ni",
          why: "Net income rises 120; no cash moves until the customer pays." },
        { name: "Accrue interest of 4 not yet paid", to: "ni",
          why: "An expense of February; the cash has not left." },
        { name: "Issue shares for 1,500 cash", to: "cash", why: "Selling shares is financing from owners, not revenue." },
        { name: "Buy the bottling line for 1,200 cash", to: "cash",
          why: "The cost sits in equipment and becomes expense later, through depreciation." },
        { name: "Collect 200 from a customer", to: "cash",
          why: "The cash receipt only changes one asset (the receivable) into another asset (cash)." },
        { name: "Pay January wages of 40 in cash", to: "both",
          why: "An expense reduces net income, and the cash goes out." },
        { name: "Declare a dividend of 50 payable next month", to: "neither", trap: "dividend-not-expense",
          why: "A liability appears and retained earnings fall, but net income does not change and no cash moves." }
      ],
      distractors: [
        { name: "Prepare the trial balance", why: "A trial balance lists every account balance and checks that total debits equal total credits. It is not a transaction." }
      ] }
    ]
  };
})();
