/* §1.1 Who uses financial statements — seven scenes.
   F01-02 becomes a table you click rather than a table you read, and the primary
   user rule is taught by its MECHANISM (who can simply ask for internal numbers)
   rather than as a list. */
(function () {
  var T = window.TERMS;

  window.PAGE = {
    id: "s1-1", n: "1.1", up: "../",
    title: "Who uses financial statements, and why?",
    terms: T.bridge("1.1"),
    scenes: [

    { id: "table", kind: "table",
      kicker: "Figure F01-02",
      title: "Seven readers, seven different questions",
      say: "Click each one. Three of them are marked PRIMARY — by the end you should see what they have in common.",
      seats: [
        { user: "Investors (shareholders)", primary: true, decision: "Buy, hold or sell shares",
          q: "Will the company create future cash flows and returns?",
          stmts: "Income statement, cash flows, balance sheet" },
        { user: "Lenders (banks, bondholders)", primary: true, decision: "Lend, renew or stop a loan",
          q: "Can the company pay interest and repay the principal on time?",
          stmts: "Cash flows, balance sheet" },
        { user: "Other creditors (suppliers)", primary: true, decision: "Sell on credit, set credit terms",
          q: "Will the company pay its bills when due?",
          stmts: "Balance sheet (short-term items), cash flows" },
        { user: "Employees and unions", primary: false, decision: "Stay, negotiate pay",
          q: "Is the company stable and profitable?", stmts: "Income statement" },
        { user: "Customers", primary: false, decision: "Sign long-term contracts",
          q: "Will the company continue to supply us?", stmts: "Balance sheet, income statement" },
        { user: "Governments and regulators", primary: false, decision: "Tax, oversight, statistics",
          q: "Does the company follow the rules and pay its taxes?", stmts: "All statements and notes" },
        { user: "Managers (internal)", primary: false, decision: "Plan and control operations",
          q: "Not a primary user: can use internal reports", stmts: "Internal management reports" }
      ] },

    { id: "ask", kind: "sort", board: "trays",
      kicker: "The rule behind the list",
      title: "Who can simply ask the company for numbers?",
      say: "Most companies publish <em>general-purpose</em> statements \u2014 for many readers at once, not for one special reader. That is why this question matters.",
      traps: ["primary-user"],
      targets: [
        { id: "depends", label: "Depends on the published statements", sub: "cannot ask for a special report" },
        { id: "canask", label: "Can get internal information instead", sub: "does not depend on these statements" }
      ],
      items: [
        { name: "Existing and potential investors", to: "depends",
          why: "They give resources and usually cannot ask the company for special reports." },
        { name: "Existing and potential lenders", to: "depends",
          why: "They give resources and usually cannot ask the company for special reports." },
        { name: "Other creditors (suppliers)", to: "depends",
          why: "They give resources and usually cannot ask the company for special reports." },
        { name: "The company's managers", to: "canask", trap: "primary-user",
          why: "Managers are users, but not primary users, because they can get any internal information they need. Reporting for managers is management accounting." },
        { name: "The company's internal auditors", to: "canask",
          why: "They work inside the company and use internal records." },
        { name: "The company's board of directors", to: "canask",
          why: "The board directs the company and can demand internal reports." }
      ],
      distractors: [
        { name: "The company's external auditor's report",
          why: "A document, not a reader." }
      ] },

    { id: "three", kind: "sort", board: "trays",
      kicker: "Three questions",
      title: "Which statement answers each question?",
      say: "Whatever the reader, it comes down to three questions.",
      targets: [
        { id: "bs", label: "Balance sheet" },
        { id: "is", label: "Income statement" },
        { id: "cf", label: "Statement of cash flows" }
      ],
      items: [
        { name: "What does the company have, and what does it owe?", to: "bs", why: "" },
        { name: "How did the company perform in the period?", to: "is", why: "" },
        { name: "Where did cash come from, and where did it go?", to: "cf", why: "" }
      ],
      distractors: [
        { name: "Why did each equity account change?",
          why: "A real question — but the statement of changes in equity answers it, and that is not one of the three here. You meet it in section 1.6." },
        { name: "How well did the managers use the owners' resources?",
          why: "This is stewardship. Users judge it from the statements as a whole, not from one of them." }
      ] },

    { id: "podium", kind: "sort", board: "podium",
      kicker: "What makes information useful",
      title: "Two qualities are fundamental. Four are only enhancing.",
      say: "The podium has room for exactly two on top. If a quality will not fit there, it is not fundamental.",
      traps: ["fundamental-vs-enhancing"],
      tiers: ["Fundamental — only two", "Enhancing — four of them", "Not a quality"],
      targets: [
        { id: "f1", label: "Fundamental", sub: "exactly two go here", tier: 0 },
        { id: "e1", label: "Enhancing", sub: "exactly four go here", tier: 1 },
        { id: "c1", label: "A constraint", sub: "not a quality at all", tier: 2 }
      ],
      items: [
        { name: "Relevance", to: "f1", trap: "fundamental-vs-enhancing",
          why: "One of the two fundamental qualities: it can make a difference to a decision." },
        { name: "Faithful representation", to: "f1", trap: "fundamental-vs-enhancing",
          why: "The other fundamental quality: complete, neutral and free from error." },
        { name: "Comparability", to: "e1", trap: "fundamental-vs-enhancing", why: "Enhancing only." },
        { name: "Verifiability", to: "e1", trap: "fundamental-vs-enhancing", why: "Enhancing only." },
        { name: "Timeliness", to: "e1", trap: "fundamental-vs-enhancing", why: "Enhancing only." },
        { name: "Understandability", to: "e1", trap: "fundamental-vs-enhancing", why: "Enhancing only." },
        { name: "The cost constraint", to: "c1",
          why: "Not a quality: the benefit of reporting information should be greater than its cost." }
      ],
      distractors: [
        { name: "Predictive value", why: "Part of relevance, not a quality in its own right: it helps users predict the future." },
        { name: "Materiality", why: "Part of relevance: an item is material if omitting or misstating it could change users' decisions." }
      ] },

    { id: "verbs", kind: "sort", board: "lanes",
      kicker: "Language focus",
      title: "One sale, five verbs",
      say: "These verbs have exact meanings in exam questions. Put each one at the step it describes.",
      targets: [
        { id: "v1", label: "① give it a name and an amount in the statements" },
        { id: "v2", label: "② decide the amount" },
        { id: "v3", label: "③ enter it in the journal and ledger" },
        { id: "v4", label: "④ show it on the face of a statement" },
        { id: "v5", label: "⑤ explain it in the notes" }
      ],
      items: [
        { name: "recognize", to: "v1", why: "Include an item in the statements, with a name and an amount. Orontes recognizes revenue when it delivers the goods." },
        { name: "measure", to: "v2", why: "Decide the amount of the item. Orontes measures the revenue at the invoice price." },
        { name: "record", to: "v3", why: "Enter the item in the accounts — the journal and the ledger." },
        { name: "present", to: "v4", why: "Show the item on the face of a statement. Orontes presents revenue in the income statement." },
        { name: "disclose", to: "v5", why: "Explain the item in the notes. Orontes discloses its revenue policy in the notes." }
      ],
      distractors: [
        { name: "report", why: "Not one of the five. The exam uses these five words with exact meanings." },
        { name: "estimate", why: "Not one of the five either." }
      ] },

    { id: "sc1", kind: "check", kicker: "SC1-1",
      title: "Which group is a primary user of general-purpose financial statements?",
      traps: ["primary-user"],
      options: [
        { text: "The company's managers", why: "Managers can get internal information, so they are not primary users." },
        { text: "The company's internal auditors", why: "Internal auditors work inside the company and use internal records." },
        { text: "The company's board of directors", why: "The board directs the company and can demand internal reports." },
        { text: "Existing and potential lenders", correct: true,
          why: "The primary users are existing and potential investors, lenders and other creditors." }
      ] },

    { id: "sc2", kind: "check", kicker: "SC1-2",
      title: "Information helps an investor forecast next year's cash flows",
      say: "This information has:",
      options: [
        { text: "predictive value", correct: true,
          why: "Predictive value is part of relevance: the information helps users predict the future." },
        { text: "verifiability", why: "Verifiability means independent people could agree on the amount." },
        { text: "comparability", why: "Comparability means users can compare companies or periods." },
        { text: "timeliness", why: "Timeliness means the information arrives in time to affect the decision." }
      ] }
    ]
  };
})();
