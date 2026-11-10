/* §1.2 Elements and the accounting equation — nine scenes.
   The equation is a beam you can unbalance; retained earnings is a tank whose
   dividend pipe the income statement physically refuses. */
(function () {
  var L = window.LEDGER, T = window.TERMS, m = L.money;

  window.PAGE = {
    id: "s1-2", n: "1.2", up: "../",
    title: "The building blocks: elements and the accounting equation",
    terms: T.bridge("1.2"),
    /* the Brief: the author's own opening for this section, the terms with
       his Arabic, a voice and one drawing. assets/brief.js builds it. */
    brief: {
      about: "Every amount in the financial statements belongs to an element. The FASB conceptual framework defines ten elements. Three of them describe the balance sheet at one date. • An asset is a present right of an entity to an economic benefit. Examples: cash, accounts receivable, inventory and equipment. • A liability is a present obligation of an entity to transfer an economic benefit. Examples: accounts payable, notes payable and wages payable.",
      anim: "equation",
      read: [
        { h: "The building blocks: elements and the accounting equation",
          p: [
            "Equity is the residual interest in the assets after the liabilities are deducted. It is the owners' claim.",
            "The other elements describe changes during a period.",
            "Revenues and expenses come from the company's central, ongoing operations. When Orontes sells olive oil, it earns revenue. When it pays plant workers, it has an expense.",
            "Gains and losses come from peripheral or incidental events. If Orontes sells an old delivery truck for more than its carrying amount, it has a gain.",
            "Investments by owners, such as buying new shares, increase equity. Distributions to owners, such as dividends, decrease equity.",
            "Comprehensive income is the total change in equity from sources other than owners. You will meet it in Chapters 3 and 15.",
            "The accounting equation connects the three balance sheet elements:",
            "Assets = Liabilities + Equity",
            "The equation always holds, because creditors (liabilities) or owners (equity) finance every asset. Equity has two main parts. Contributed capital is what owners paid in: common stock at its par value, plus additional paid-in capital (APIC). Retained earnings (RE) are the past net income that the company kept instead of paying it out as dividends. Figure F01-03 shows the full picture.",
            "Look at the lower part of Figure F01-03. Revenues and gains increase retained earnings. Expenses and losses decrease it. Dividends also decrease it, but a dividend is not an expense. It is a distribution to owners, so it never appears in the income statement."
          ]
        },
        { h: "Same idea, different words", box: "ifrs",
          p: [
            "The IFRS Conceptual Framework (2018) defines an asset as a present economic resource controlled by the entity as a result of past events. The idea is the same as in U.S. GAAP; only the wording is different. IFRS also uses the word income for both revenue and gains, while U.S. GAAP keeps revenues and gains apart. You may also know these IFRS names: statement of financial position (balance sheet), share capital (common stock) and share premium (additional paid-in capital)."
          ]
        },
        { h: "Words that look familiar", box: "false-friend",
          p: [
            "stock — In U.S. English, stock means shares: common stock, a stock dividend. In French and British English, stock often means inventory. In a CMA question, inventory is always inventory.",
            "income and revenue — Arabic دخل is not إيراد. Revenue is the gross amount from sales. Net income is what remains after expenses. Do not use income when the question means revenue.",
            "résultat and charges — In French, résultat is the profit or loss (net income), and charges are expenses. In English, charges usually means fees.",
            "balance — In French, la balance is the trial balance. The balance sheet is le bilan."
          ]
        }
      ],
      seal: {
        "doors": ["Words that look familiar"],
        "switch": ["Same idea, different words"]
      }
    },
    scenes: [

    { id: "fig-f01-03", from: ["F01-03"], kind: "figure", file: "F01-03.png",
      label: "Figure F01-03.", caption: "The accounting equation A = L + E, with equity split into contributed capital and retained earnings." },


    { id: "ten", kind: "sort", board: "trays",
      kicker: "The ten elements",
      title: "Three describe a date. Seven describe a period.",
      say: "The FASB conceptual framework defines ten elements. Put each on the right shelf.",
      targets: [
        { id: "date", label: "The balance sheet, at one date", sub: "exactly three" },
        { id: "period", label: "A change during a period", sub: "the other seven" }
      ],
      items: [
        { name: "Asset", to: "date", why: "A present right of an entity to an economic benefit." },
        { name: "Liability", to: "date", why: "A present obligation of an entity to transfer an economic benefit." },
        { name: "Equity", to: "date", why: "The residual interest in the assets after the liabilities are deducted." },
        { name: "Revenue", to: "period", why: "From the company's central, ongoing operations." },
        { name: "Expense", to: "period", why: "From the company's central, ongoing operations." },
        { name: "Gain", to: "period", why: "From a peripheral or incidental event." },
        { name: "Loss", to: "period", why: "From a peripheral or incidental event." },
        { name: "Investments by owners", to: "period", why: "Such as buying new shares. They increase equity." },
        { name: "Distributions to owners", to: "period", why: "Such as dividends. They decrease equity." },
        { name: "Comprehensive income", to: "period",
          why: "The total change in equity from sources other than owners. Chapters 3 and 15." }
      ],
      distractors: [
        { name: "Trial balance", why: "A trial balance lists every account balance and checks that total debits equal total credits. It is not an element." },
        { name: "Materiality", why: "A quality of useful information. Not an element." }
      ] },

    { id: "beam", from: ["F01-03"], kind: "beam",
      kicker: "Figure F01-03",
      title: "Assets = Liabilities + Equity",
      say: "Apply the January transactions one at a time. The equation always holds, because creditors or owners finance every asset.",
      moves: [
        { label: "Issue shares for 1,500 cash", a: 1500, l: 0, cc: 1500, re: 0,
          why: "Cash comes in from owners. Contributed capital rises by the same 1,500 — both sides move together." },
        { label: "Borrow 800 on a note", a: 800, l: 800, cc: 0, re: 0,
          why: "Cash comes in from a lender, so a liability rises. This is financing, not income." },
        { label: "Buy equipment for 1,200 cash", a: 0, l: 0, cc: 0, re: 0,
          why: "One asset becomes another. Total assets do not change, and nothing is an expense yet." },
        { label: "Sell goods: revenue 300, cost 180", a: 120, l: 0, cc: 0, re: 120,
          why: "Receivables rise 300 and inventory falls 180. Retained earnings rise by the 120 of profit." },
        { label: "Pay wages of 40 in cash", a: -40, l: 0, cc: 0, re: -40,
          why: "An expense reduces retained earnings, and cash goes out." },
        { label: "Declare a dividend of 50", a: 0, l: 50, cc: 0, re: -50,
          why: "A distribution to owners. Retained earnings fall and a liability appears — and net income does not change." }
      ] },

    { id: "split", from: ["F01-03"], kind: "split",
      kicker: "Contributed capital",
      title: "Where does the 1,500 go?",
      say: "Orontes issues 100,000 shares of $1 par common stock for $15 per share, in cash. Move the line until the two parts are right.",
      total: 1500, step: 10,
      a: { label: "Common stock", answer: 100 },
      b: { label: "Additional paid-in capital" },
      hint: "Common stock holds the par value and nothing else.",
      rightWhy: "Common stock holds only the <b>par value</b>: 100,000 shares × $1 = " + m(100) +
        ". The rest, " + m(1400) + ", is additional paid-in capital — the amount received above par.",
      wrongWhy: "Common stock holds only the par value of the shares. Everything received above par goes to additional paid-in capital." },

    { id: "tank", from: ["F01-03"], kind: "tank",
      kicker: "Retained earnings",
      title: "What moves retained earnings?",
      say: "Open each one. The last is marked differently — try sending it through the income statement.",
      traps: ["dividend-not-expense"],
      start: 1000, max: 1600,
      pipes: [
        { id: "rev", label: "Revenues", dir: 1, amount: 300,
          why: "Revenues increase retained earnings, through net income." },
        { id: "gain", label: "Gains", dir: 1, amount: 60,
          why: "Gains increase retained earnings too — they come from peripheral events, but they still reach net income." },
        { id: "exp", label: "Expenses", dir: -1, amount: 180,
          why: "Expenses decrease retained earnings, through net income." },
        { id: "loss", label: "Losses", dir: -1, amount: 40,
          why: "Losses decrease retained earnings, from peripheral events." },
        { id: "div", label: "Dividends declared", dir: -1, amount: 50, special: true,
          throughIncomeStatement: false,
          why: "A dividend reduces retained earnings, but it is a <b>distribution to owners</b>, not an expense — so it never appears in the income statement." }
      ] },

    { id: "central", kind: "sort", board: "trays",
      kicker: "Revenue or gain?",
      title: "Central and ongoing, or peripheral and incidental?",
      say: "This one difference decides whether an amount is a revenue or a gain, an expense or a loss.",
      targets: [
        { id: "central", label: "Central, ongoing", sub: "→ revenue or expense" },
        { id: "periph", label: "Peripheral, incidental", sub: "→ gain or loss" }
      ],
      items: [
        { name: "Orontes sells olive oil", to: "central", why: "Selling food is its central, ongoing operation, so this is revenue." },
        { name: "Orontes pays its plant workers", to: "central", why: "A cost of the central operations, so it is an expense." },
        { name: "Orontes sells an old delivery truck above its carrying amount", to: "periph",
          why: "If Orontes sells an old delivery truck for more than its carrying amount, it has a gain." }
      ],
      distractors: [
        { name: "Orontes issues new shares", why: "Neither. Money from owners is an investment by owners — financing, not income." },
        { name: "Orontes borrows from a bank", why: "Neither. Borrowing creates a liability. It is financing, not income." }
      ] },

    { id: "doors", from: ["1.2/false-friend-alert"], kind: "sort", board: "trays",
      kicker: "False friends",
      title: "The word you know, and the word the exam wants",
      say: "Each of these looks familiar and means something else in a CMA question.",
      traps: ["stock-means-shares"],
      targets: [
        { id: "inv", label: "inventory", sub: "goods held for sale" },
        { id: "shares", label: "common stock", sub: "shares — ownership" },
        { id: "ni", label: "net income", sub: "what remains after expenses" },
        { id: "rev", label: "revenue", sub: "the gross amount from sales" },
        { id: "exp", label: "expenses", sub: "costs of operating" },
        { id: "tb", label: "trial balance", sub: "checks debits = credits" },
        { id: "bs", label: "balance sheet", sub: "assets, liabilities and equity at a date" }
      ],
      items: [
        { name: "“stock” in French or British use", to: "inv", trap: "stock-means-shares",
          why: "There, stock often means inventory. In a CMA question, inventory is always inventory." },
        { name: "“stock” in U.S. use", to: "shares", trap: "stock-means-shares",
          why: "In U.S. English, stock means shares: common stock, a stock dividend." },
        { name: "French “résultat”", to: "ni", why: "In French, résultat is the profit or loss — net income." },
        { name: "Arabic دخل", to: "ni",
          why: "دخل is not إيراد. Do not use <em>income</em> when the question means <em>revenue</em>." },
        { name: "Arabic إيراد", to: "rev", why: "Revenue is the gross amount from sales." },
        { name: "French “charges”", to: "exp",
          why: "In French, charges are expenses. In English, <em>charges</em> usually means fees." },
        { name: "French “la balance”", to: "tb", why: "In French, la balance is the trial balance." },
        { name: "French “le bilan”", to: "bs", why: "Le bilan is the balance sheet." }
      ],
      distractors: [
        { name: "Arabic مخصص", why: "Arabic uses one word for two different things: an allowance reduces an asset, a provision is a liability. Neither is a box here." }
      ] },

    /* WHAT THIS SCENE USED TO BE, AND WHY IT HAD TO CHANGE. It was a `switch` over four
       U.S./IFRS name pairs - Balance sheet, Common stock, APIC, Accounts receivable - and all
       four of them are among the six in section 1.5's `names`. So this screen asked nothing
       1.5 did not ask again, and the box it claimed to teach said something else entirely:
       that IFRS defines an asset as a present economic resource CONTROLLED by the entity, and
       that IFRS uses `income` for revenue and gains together where U.S. GAAP keeps them apart.
       Neither sentence was anywhere on the site - `grep` found them in one file, the provenance
       baseline, which only the QA page loads.

       gates/cma_coverage C4 is the check that catches this shape: an answer key that is a
       SUBSET of another scene's. Equality would not have found it, because the smaller scene
       was not a copy - it was four of somebody else's six, dressed as its own exercise.

       The names stay in 1.5, where the author prints that table. What this scene now asks is
       the box's own question, and the two trays are the box's own words. */
    { id: "switch", from: ["1.2/ifrs-contrast"], kind: "sort", board: "trays",
      kicker: "IFRS contrast",
      title: "Same idea, different words — except once",
      say: "Most of these are only a new name for something you already know. One of them is more than that.",
      targets: [
        { id: "word", label: "Only the wording is different", sub: "the same idea, a new name" },
        { id: "apart", label: "U.S. GAAP keeps them apart", sub: "more than a new name" }
      ],
      items: [
        { name: "a present economic resource controlled by the entity", to: "word",
          why: "The IFRS Conceptual Framework (2018) defines an asset as a present economic resource controlled by the entity as a result of past events. The idea is the same as in U.S. GAAP; only the wording is different." },
        { name: "statement of financial position", to: "word",
          why: "You may also know these IFRS names: statement of financial position (balance sheet), share capital (common stock) and share premium (additional paid-in capital)." },
        { name: "share capital", to: "word",
          why: "Share capital is the IFRS name for common stock. Only the wording is different." },
        { name: "share premium", to: "word",
          why: "Share premium is the IFRS name for additional paid-in capital. Only the wording is different." },
        { name: "income", to: "apart",
          why: "IFRS also uses the word income for both revenue and gains, while U.S. GAAP keeps revenues and gains apart." }
      ],
      distractors: [
        { name: "comprehensive income",
          why: "Not one of the names this box lists. Comprehensive income is the total change in equity from sources other than owners, and it is the same idea under both." }
      ] },

    /* The section's own Term Bridge box, drilled where the author prints it. The pooled
       deck on terms.html keeps the whole chapter; this one keeps the 14 words of 1.2.
       `T.bridge("1.2")` is the box itself, so the English, the Arabic and the gloss are
       all the author's and nothing here can drift from the term bank. */
    { id: "bridge", from: ["1.2/term-bridge", "1.2/t:english-exam-ter"], kind: "flash",
      kicker: "Term bridge",
      title: "The fourteen words of this section",
      say: "English to Arabic. Say each one before you turn the card.",
      direction: "en-ar",
      terms: T.bridge("1.2") },

    { id: "sc1", from: ["1.2/section-check"], kind: "check", kicker: "SC2-1", title: "Which item is an expense?",
      traps: ["dividend-not-expense"],
      options: [
        { text: "A cash dividend paid to shareholders",
          why: "A dividend is a distribution to owners. It reduces retained earnings but is not an expense." },
        { text: "Wages paid to plant workers", correct: true,
          why: "Wages are a cost of the company's central operations, so they are an expense." },
        { text: "Repayment of a bank loan",
          why: "Repaying principal reduces a liability and an asset. No expense arises." },
        { text: "Purchase of a new bottling line",
          why: "A bottling line is an asset. Its cost becomes an expense later, through depreciation." }
      ] },

    { id: "sc2", from: ["1.2/section-check"], kind: "check", kicker: "SC2-2",
      title: "Total assets 500, total liabilities 320. What is equity?",
      options: [
        { text: "180", correct: true, why: "Equity = assets − liabilities = 500 − 320 = 180." },
        { text: "320", why: "This is the liabilities figure, not equity." },
        { text: "500", why: "This is total assets, not equity." },
        { text: "820", why: "This adds liabilities to assets. Equity is the residual after deducting liabilities." }
      ] }
    ]
  };
})();
