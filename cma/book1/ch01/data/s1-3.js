/* §1.3 Double entry — ten scenes.
   The six January entries are POSTED by the learner, and Figure F01-05 writes
   itself row by row as they go: the worked example becomes the thing they build.
   February is the same machine with rows 1-3 already posted, exactly as the book
   fades Figure F01-06. */
(function () {
  var L = window.LEDGER, T = window.TERMS, m = L.money;

  var JAN_LURES = {
    1: [{ name: "Sales revenue", amount: 1500, why: "Money from owners is financing, not revenue." },
        { name: "Notes payable (long-term)", amount: 1500, why: "Shares are equity, not debt. Nothing was borrowed." }],
    2: [{ name: "Sales revenue", amount: 800, why: "Borrowing is financing. It is not income." },
        { name: "Common stock", amount: 800, why: "The bank is a lender, not an owner. This creates a liability." }],
    3: [{ name: "Depreciation expense", amount: 1200, why: "Depreciation is recorded over the years of use, not when the asset is bought." },
        { name: "Accounts payable", amount: 1200, why: "Orontes paid cash; nothing is owed." }],
    4: [{ name: "Cash", amount: 300, why: "The sale was on credit. No cash moves until the customer pays." },
        { name: "Service revenue", amount: 300, why: "Orontes sold goods, not services." }],
    5: [{ name: "Accounts payable", amount: 40, why: "The wages were paid in cash, so nothing is left owing." },
        { name: "Prepaid rent", amount: 40, why: "Nothing was paid in advance here; the work has already been done." }],
    6: [{ name: "Dividend expense", amount: 50, why: "There is no such account. A dividend is a distribution to owners, never an expense." },
        { name: "Cash", amount: 50, why: "No cash moves on the declaration date. It is payable on February 15." }]
  };
  var FEB_LURES = {
    4: [{ name: "Sales revenue", amount: 60, why: "Cash received before delivery is a liability. Orontes must still deliver the pastries." },
        { name: "Accounts receivable", amount: 60, why: "The customer has paid; nobody owes Orontes anything." }],
    5: [{ name: "Retained earnings (dividends declared)", amount: 50, why: "Retained earnings already fell in January, when the dividend was declared." },
        { name: "Dividend expense", amount: 50, why: "There is no such account. A dividend is never an expense." }],
    6: [{ name: "Cash", amount: 4, why: "Orontes has not paid the interest yet." },
        { name: "Notes payable (long-term)", amount: 4, why: "Orontes has not paid it yet, and the principal has not changed." }]
  };
  var JAN_LOGIC = {
    1: "Only the par value of 100 goes to common stock; the other 1,400 is additional paid-in capital.",
    2: "Cash comes in from a lender, so a liability rises by the same amount.",
    3: "One asset becomes another. Total assets do not change, and nothing is an expense yet.",
    4: "Two entries record one sale: revenue of 300 on delivery, and the 180 cost out of inventory.",
    5: "Wages are an expense of January, so retained earnings fall by 40.",
    6: "Declaring the dividend creates a liability now and reduces retained earnings now. Net income does not change at all."
  };
  var FEB_LOGIC = {
    4: "Row 4 is a liability, not revenue: Orontes must still deliver the pastries.",
    5: "Row 5 reduces a liability and cash; retained earnings fell in January, when the dividend was declared.",
    6: "Row 6 is an accrued expense: interest is an expense of February even though Orontes has not paid it."
  };

  window.PAGE = {
    id: "s1-3", n: "1.3", up: "../",
    title: "Double entry: debits and credits",
    terms: T.bridge("1.3"),
    /* the Brief: the author's own opening for this section, the terms with
       his Arabic, a voice and one drawing. assets/brief.js builds it. */
    brief: {
      about: "Accountants record every transaction with the double-entry system. Each transaction affects at least two accounts, and total debits always equal total credits. This is why the accounting equation always balances.",
      anim: "tAccount"
    },
    scenes: [

    { id: "fig-f01-04", kind: "figure", file: "F01-04.png",
      label: "Figure F01-04.", caption: "Debit and credit rules: which six account types increase with a debit and which with a credit." },


    { id: "sides", kind: "sort", board: "trays",
      kicker: "Figure F01-04",
      title: "Which side increases it?",
      say: "Debit means the left side and credit means the right side. Neither means good or bad. Which side <em>increases</em> an account depends on the account.",
      targets: [
        { id: "debit", label: "Increases with a DEBIT", sub: "the left of Assets + Expenses + Dividends" },
        { id: "credit", label: "Increases with a CREDIT", sub: "the right of Liabilities + Equity + Revenues" }
      ],
      items: [
        { name: "Assets", to: "debit", why: "On the left of the expanded equation." },
        { name: "Expenses", to: "debit", why: "On the left of the expanded equation." },
        { name: "Dividends", to: "debit", why: "On the left of the expanded equation." },
        { name: "Liabilities", to: "credit", why: "On the right of the expanded equation." },
        { name: "Equity", to: "credit", why: "On the right of the expanded equation." },
        { name: "Revenues", to: "credit", why: "On the right of the expanded equation." }
      ],
      distractors: [
        { name: "Accumulated depreciation",
          why: "A contra account reduces a related account, so it has the opposite normal balance. It is not one of the six account types." },
        { name: "Net income",
          why: "Not an account. It is the result of closing revenues and expenses into retained earnings." }
      ] },

    { id: "contra", kind: "contra",
      kicker: "Contra accounts",
      title: "A credit balance that is not a liability",
      say: "Accumulated depreciation reduces equipment. Put it in the wrong place and watch total assets.",
      asset: { label: "Equipment", amount: 4200 },
      contra: { label: "Accumulated depreciation", amount: 900 },
      netLabel: "Equipment, net of accumulated depreciation",
      rightWhy: "A contra account reduces a related account, so it has the opposite normal balance. Accumulated depreciation has a credit balance, <b>but it belongs with the assets</b>, and equipment reaches the balance sheet net, at " + m(3300) + ".",
      wrongWhy: "A credit balance does not make it a liability — the company owes nobody anything. Left with the liabilities, equipment stays at " + m(4200) + " and assets are overstated by " + m(900) + "." },

    { id: "jan", kind: "post",
      kicker: "Worked example",
      title: "Record the January entries",
      say: "Accountants record every transaction with the double-entry system. Each line takes one account, and total debits always equal total credits.",
      transactions: L.january,
      lures: JAN_LURES,
      logic: JAN_LOGIC,
      grid: true,
      gridTitle: "Figure F01-05 · January",
      journalTitle: "Journal entries" },

    { id: "read", kind: "probe",
      kicker: "Figure F01-05",
      title: "Read the grid you just built",
      say: "Three things in it matter for the exam.",
      probes: [
        { q: "Rows 1 and 2 bring in cash of 2,300 in total. Is any of it revenue?",
          a: "<b>None of it.</b> Money from owners and lenders is financing. It is not income." },
        { q: "Row 4 creates revenue of 300. Does any cash come in?",
          a: "<b>None.</b> Orontes records revenue when it delivers the goods, not when the customer pays." },
        { q: "Row 6 reduces retained earnings by 50. Does net income change?",
          a: "<b>Nothing.</b> It creates a liability, and no cash moves until February. A dividend is not an expense." }
      ],
      traps: ["dividend-not-expense", "financing-not-revenue"] },

    { id: "prove", kind: "number",
      kicker: "The totals",
      title: "Prove the equation",
      say: "Add the January columns. The totals prove the equation — if they do not, something above is wrong.",
      fields: [
        { label: "Total change in assets", answer: L.jan.a,
          why: "Cash +1,060, equipment +1,200, receivables +300, inventory −180." },
        { label: "Total change in liabilities", answer: L.jan.l,
          why: "Notes payable +800 and dividends payable +50." },
        { label: "Total change in equity", answer: L.jan.e,
          why: "Contributed capital +1,500, plus net income of 80, less the dividend of 50." },
        { label: "Net income for January", answer: L.jan.ni,
          why: "Revenue 300 − cost of goods sold 180 − wages 40.",
          diag: [{ v: 120, says: "That is revenue less cost of goods sold. The wages of 40 are still to be deducted." },
                 { v: 30, says: "That subtracts the dividend. A dividend is not an expense." },
                 { v: 300, says: "That is revenue, not net income." }] }
      ],
      hint: "Assets " + L.signed(L.jan.a) + " = liabilities " + L.signed(L.jan.l) + " + equity " + L.signed(L.jan.e) + "." },

    { id: "feb", kind: "post",
      kicker: "Your turn · Figure F01-06",
      title: "February: all six rows are yours",
      /* the book works rows 1 to 3 and leaves 4 to 6; here all six are the learner's,
         and the author's worked version is in the Brief and the answer key. See the
         note on `february` in assets/ledger.js. */
      say: "Each transaction affects at least two accounts, and total debits always equal total credits. Then write the journal entries for them.",
      transactions: L.february,
      lures: FEB_LURES,
      logic: FEB_LOGIC,
      grid: true,
      gridTitle: "Figure F01-06 · February",
      journalTitle: "Journal entries",
      traps: ["cash-not-trigger"] },

    { id: "friends", kind: "sort", board: "trays",
      kicker: "False friends",
      title: "Three Arabic words, one English word",
      say: "Gulf, Levant and Egyptian texts use different words. Arabic also uses one word for two different things.",
      traps: ["estihlak-depreciation", "allowance-vs-provision"],
      targets: [
        { id: "dep", label: "depreciation", sub: "spread over the years of use" },
        { id: "allow", label: "allowance", sub: "a contra account that reduces an ASSET" },
        { id: "prov", label: "provision", sub: "a LIABILITY" }
      ],
      items: [
        { name: "استهلاك (Gulf)", to: "dep", trap: "estihlak-depreciation",
          why: "Gulf texts use it for depreciation, but it also means consumption. In English, always say depreciation." },
        { name: "اهتلاك (Levant)", to: "dep", trap: "estihlak-depreciation",
          why: "Syrian and Levant texts often say this. In English, always say depreciation." },
        { name: "إهلاك (Egyptian texts)", to: "dep", trap: "estihlak-depreciation",
          why: "Egyptian texts say this. In English, always say depreciation." },
        { name: "مخصص that reduces an asset", to: "allow", trap: "allowance-vs-provision",
          why: "The allowance for credit losses reduces accounts receivable. It is an allowance." },
        { name: "مخصص that the company owes", to: "prov", trap: "allowance-vs-provision",
          why: "When it describes something the company owes, the English word is provision, and it is a liability." }
      ],
      distractors: [
        { name: "“reserve for bad debts”",
          why: "Never say reserve for bad debts in a U.S. GAAP answer. The account is the allowance for credit losses." },
        { name: "“your bank credits your account”",
          why: "Your bank credits your account when it receives your money, because the bank now owes you. That is the bank’s view. Do not use banking habits to guess the accounting side." }
      ] },

    { id: "words", kind: "cloze",
      kicker: "Language focus",
      title: "Say it the way the exam says it",
      say: "Four small words that answer options turn on.",
      parts: ["Cash is debited ", " 1,500. Across January there was an increase ",
              " assets ", " 2,380, and equity increased ", " 1,530."],
      answers: [
        { word: "for", why: "<em>X is debited FOR an amount.</em>" },
        { word: "in", why: "<em>An increase IN</em> + the item." },
        { word: "of", why: "<em>An increase OF</em> + the amount." },
        { word: "by", why: "<em>Increase BY</em> the change. <em>Increase TO</em> would give the new total." }
      ],
      extra: ["to", "at"] },

    { id: "sc1", kind: "check", kicker: "SC3-1", title: "Which account normally has a credit balance?",
      traps: ["contra-netting"],
      options: [
        { text: "Prepaid rent", why: "Prepaid rent is an asset, so its normal balance is a debit." },
        { text: "Accumulated depreciation", correct: true,
          why: "It is a contra-asset account, so it has the opposite (credit) balance to assets." },
        { text: "Cost of goods sold", why: "An expense, so its normal balance is a debit." },
        { text: "Dividends declared", why: "Dividends declared reduce equity, so they have a debit balance." }
      ] },

    { id: "sc2", kind: "check", kicker: "SC3-2",
      title: "Orontes buys a bottling line for 1,200 in cash",
      say: "Which journal entry is correct?",
      traps: ["equipment-not-expense"],
      options: [
        { text: "Debit Cash 1,200; credit Equipment 1,200",
          why: "The sides are reversed: this would increase cash and decrease equipment." },
        { text: "Debit Equipment expense 1,200; credit Cash 1,200",
          why: "The bottling line is an asset, not an expense of this period." },
        { text: "Debit Equipment 1,200; credit Notes payable 1,200",
          why: "Orontes paid cash; it did not borrow. The credit side must be Cash." },
        { text: "Debit Equipment 1,200; credit Cash 1,200", correct: true,
          why: "One asset increases (debit Equipment) and another asset decreases (credit Cash)." }
      ] }
    ]
  };
})();
