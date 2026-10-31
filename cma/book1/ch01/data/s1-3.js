/* Section 1.3 — Double entry: debits and credits. The heaviest section.
   Every journal drill is GENERATED from LEDGER, so no account name or amount can
   drift from the chapter. Covers normal balances, contra accounts, the six
   January entries, F01-05, the three reading points, the totals proof, all three
   Exam Traps, the Your Turn February rows with the faded F01-06, all three False
   Friends, the Language Focus on describing effects, the 15-row Term Bridge,
   SC3-1 and SC3-2. */
(function () {
  var L = window.LEDGER;

  /* Why each account would or would not belong on a line. Any wrong placement in
     any journal drill gets an explanation from this one map. */
  var R = {
    "Cash": "Cash changes only when money actually moves. Check whether this transaction moves cash at all.",
    "Common stock": "Common stock holds only the PAR value of shares issued — nothing else.",
    "Additional paid-in capital": "APIC holds the amount received ABOVE par value, and nothing else.",
    "Notes payable (long-term)": "Notes payable records borrowing evidenced by a note, due after more than a year.",
    "Equipment": "Equipment is an asset. Buying it is not an expense today — the cost becomes expense later, through depreciation.",
    "Accounts receivable": "Accounts receivable is what customers owe. It rises on a credit sale and falls when they pay.",
    "Sales revenue": "Sales revenue is recorded when the goods are DELIVERED, not when the customer pays.",
    "Cost of goods sold": "Cost of goods sold is the cost of the goods that left inventory, recorded with the sales revenue.",
    "Inventory": "Inventory falls when goods are delivered to a customer.",
    "Wages expense": "Wages expense is a cost of the central operations, recorded when the work is done.",
    "Retained earnings (dividends declared)": "Declaring a dividend reduces retained earnings. It is NOT an expense.",
    "Dividends payable": "Declaring a dividend creates an obligation to pay cash later: a liability.",
    "Accounts payable": "Accounts payable is what the company owes suppliers. It falls when the supplier is paid.",
    "Prepaid rent": "Rent paid in advance is an ASSET: the company has paid for a future benefit.",
    "Contract liability (unearned revenue)": "Cash received before the goods are delivered is a LIABILITY — the company still owes the goods.",
    "Interest expense": "Interest is an expense of the period in which it is incurred, whether or not it has been paid.",
    "Interest payable": "Interest incurred but not yet paid is a liability.",
    "Rent expense": "Rent becomes an expense month by month as the benefit is used, not when the cash is paid in advance.",
    "Dividend expense": "There is no such account. A dividend is a distribution to owners, never an expense.",
    "Service revenue": "Orontes sells goods, not services, and in any case revenue is not earned until delivery.",
    "Depreciation expense": "Depreciation is recorded periodically against a long-lived asset, not when the asset is bought.",
    "Sales discount": "Not involved here. No discount is mentioned in this transaction."
  };

  /* Plausible wrong accounts for each transaction, so every drill has real distractors. */
  var DISTRACT = {
    1: ["Sales revenue", "Retained earnings (dividends declared)", "Notes payable (long-term)"],
    2: ["Sales revenue", "Common stock", "Interest expense"],
    3: ["Depreciation expense", "Accounts payable", "Inventory"],
    4: ["Cash", "Accounts payable", "Service revenue"],
    5: ["Accounts payable", "Prepaid rent", "Retained earnings (dividends declared)"],
    6: ["Dividend expense", "Cash", "Wages expense"]
  };
  var DISTRACT_FEB = {
    1: ["Wages expense", "Accounts receivable", "Inventory"],
    2: ["Sales revenue", "Cash", "Contract liability (unearned revenue)"],
    3: ["Rent expense", "Accounts payable", "Cash"],
    4: ["Sales revenue", "Accounts receivable", "Service revenue"],
    5: ["Retained earnings (dividends declared)", "Dividend expense", "Wages expense"],
    6: ["Cash", "Notes payable (long-term)", "Accounts payable"]
  };

  var LOGIC = {
    "jan1": "Cash of 1,500 comes in from owners. Only the par value of 100 goes to common stock; the other 1,400 is additional paid-in capital. Money from owners is financing — it is not revenue.",
    "jan2": "Cash of 800 comes in from a lender, so a liability rises by the same amount. Borrowing is financing, not income.",
    "jan3": "One asset becomes another: cash falls 1,200 and equipment rises 1,200. Total assets do not change, and nothing is an expense yet.",
    "jan4": "Two entries record one sale. The first recognizes revenue of 300 on delivery; the second moves the 180 cost out of inventory and into cost of goods sold. No cash moves.",
    "jan5": "Wages are an expense of January, and they were paid in cash, so cash falls and retained earnings fall by 40.",
    "jan6": "Declaring the dividend creates a liability now and reduces retained earnings now. No cash moves until February 15, and net income does not change at all.",
    "feb1": "Paying a supplier settles an existing obligation: the liability falls and so does cash. Nothing is an expense here — the expense was recorded when the olives were bought.",
    "feb2": "Collecting a receivable turns one asset into another. The revenue was already recorded in January, when the goods were delivered.",
    "feb3": "Rent paid in advance is an asset: Orontes has paid for twelve months of future use. It becomes rent expense month by month.",
    "feb4": "Cash received before delivery is a liability, not revenue. Orontes must still deliver the pastries in March.",
    "feb5": "Paying the declared dividend settles the liability. Retained earnings already fell in January, when the dividend was declared.",
    "feb6": "Interest is an expense of February even though no cash has been paid. The unpaid amount is a liability."
  };

  function eqNote(tx) {
    var e = tx.eff;
    function part(label, v) { return label + " " + L.signed(v); }
    return "Assets " + L.signed(e.a) + " = liabilities " + L.signed(e.l) + " + equity " + L.signed(e.e) +
      ". Net income " + L.signed(e.ni) + ". Cash flow: " +
      (e.cf === "none" ? "none." : e.cf + " " + L.signed(e.cfAmount) + ".");
  }

  function journal(tx, idx, month, distractMap) {
    var key = month + tx.n;
    return {
      type: "journal",
      id: month + tx.n,
      badge: String(idx).padStart(2, "0"),
      title: "Journal entry · " + tx.short,
      tag: month === "jan" ? "January" : "February",
      instruction: "Debits " + L.money(tx.entry.filter(function (l) { return l.side === "dr"; })
        .reduce(function (a, l) { return a + l.amount; }, 0)) + " must equal credits.",
      date: tx.date,
      scenario: tx.text,
      lines: tx.entry.map(function (l) { return { side: l.side, account: l.account, amount: l.amount }; }),
      choices: (distractMap[tx.n] || []).map(function (n) { return { name: n, reason: R[n] || "" }; })
        .concat(tx.entry.map(function (l) { return { name: l.account, reason: R[l.account] || "" }; })),
      logic: LOGIC[key],
      equation: eqNote(tx)
    };
  }

  var janDrills = L.january.map(function (tx, i) { return journal(tx, 5 + i, "jan", DISTRACT); });
  var febDrills = L.february.map(function (tx, i) { return journal(tx, 15 + i, "feb", DISTRACT_FEB); });

  window.PAGE = {
    id: "s1-3", kind: "section", n: "1.3", up: "../",
    title: "Double entry: debits and credits",
    crumb: "Section 1.3",
    question: "How does every transaction get recorded so that the accounting equation can never go out of balance?",
    los: ["A.1.e"],
    blocks: [

    { type: "prose", html:
      "<p>Accountants record every transaction with the <span class=\"defn\">double-entry system</span>. Each " +
      "transaction affects at least two accounts, and <em class=\"sig\">total debits always equal total " +
      "credits</em>. This is why the accounting equation always balances.</p>" +
      "<p><span class=\"defn\">Debit</span> simply means the <strong>left side</strong> of an account, and " +
      "<span class=\"defn\">credit</span> means the <strong>right side</strong>. " +
      "<em class=\"sig\">Neither word means good or bad, and neither word always means increase.</em> Whether a " +
      "debit increases an account depends on the type of account. Each account has a " +
      "<span class=\"defn\">normal balance</span>: the side that increases it.</p>" },

    { type: "figure", figure: "dcrules", label: "Figure F01-04", anchor: "f01-04",
      caption: "Debit and credit rules: which six account types increase with a debit and which with a credit. " +
        "The expanded equation at the top is the memory aid — accounts on the left increase with a debit." },

    { type: "classify", id: "x01", badge: "01",
      title: "Which side increases each account?",
      tag: "Drag and drop",
      instruction: "Six account types. Use the expanded equation: assets, expenses and dividends sit on the left.",
      prompt: "Sort each account type by its normal balance — the side that increases it.",
      categories: [
        { id: "debit", label: "Increases with a DEBIT", hint: "left of the expanded equation" },
        { id: "credit", label: "Increases with a CREDIT", hint: "right of the expanded equation" }
      ],
      items: [
        { name: "Assets", cat: "debit", why: "Assets sit on the left of the expanded equation, so a debit increases them." },
        { name: "Expenses", cat: "debit", why: "Expenses reduce equity, so they behave like the left side: a debit increases them." },
        { name: "Dividends declared", cat: "debit", why: "Dividends reduce equity, so a debit increases the dividends account." },
        { name: "Liabilities", cat: "credit", why: "Liabilities sit on the right of the equation, so a credit increases them." },
        { name: "Equity", cat: "credit", why: "Equity sits on the right, so a credit increases it." },
        { name: "Revenues", cat: "credit", why: "Revenues increase equity, so they behave like the right side: a credit increases them." }
      ],
      distractors: [
        { name: "Accumulated depreciation",
          why: "A trick: it is a CONTRA-asset, so it increases with a credit even though it belongs with the assets. It is not one of the six basic types." },
        { name: "Net income",
          why: "Not an account at all. It is the result of closing revenues and expenses into retained earnings." }
      ] },

    { type: "prose", html:
      "<p>A <span class=\"defn\">contra account</span> reduces a related account, so it has the " +
      "<em class=\"sig\">opposite normal balance</em>. For example, " +
      "<span class=\"defn\">accumulated depreciation</span> reduces equipment. It has a credit balance, but it " +
      "belongs with the assets. The <span class=\"defn\">allowance for credit losses</span> reduces accounts " +
      "receivable in the same way (Chapter 6).</p>" },

    { type: "classify", id: "x02", badge: "02",
      title: "Contra accounts: credit balances that live with the assets",
      tag: "Drag and drop",
      instruction: "This is the single most common slip in a trial-balance question.",
      prompt: "Sort each account. Watch the two that have credit balances but are not liabilities.",
      categories: [
        { id: "asset", label: "Asset · debit balance" },
        { id: "contra", label: "Contra-asset · CREDIT balance, sits with the assets" },
        { id: "liability", label: "Liability · credit balance" }
      ],
      items: [
        { name: "Equipment", cat: "asset", why: "An asset with a debit balance." },
        { name: "Accounts receivable", cat: "asset", why: "An asset with a debit balance: what customers owe." },
        { name: "Prepaid rent", cat: "asset", why: "An asset: the company has paid for a future benefit." },
        { name: "Accumulated depreciation", cat: "contra", trap: "contra-netting",
          why: "A contra-asset. It has a credit balance, but it reduces equipment, so it belongs with the assets — never with the liabilities." },
        { name: "Allowance for credit losses", cat: "contra", trap: "contra-netting",
          why: "A contra-asset that reduces accounts receivable. Chapter 6 covers it fully." },
        { name: "Accounts payable", cat: "liability", why: "A real obligation to a supplier: a liability." },
        { name: "Dividends payable", cat: "liability", why: "An obligation to pay cash to shareholders: a liability." }
      ],
      distractors: [
        { name: "Depreciation expense",
          why: "An expense of the current period, reported in the income statement. Accumulated depreciation is the running total on the balance sheet — do not confuse them." },
        { name: "Dividends declared",
          why: "This reduces EQUITY, not an asset, so it is not a contra-asset." }
      ],
      traps: ["contra-netting"] },

    { type: "mcq", id: "x03", badge: "03",
      title: "Does a debit mean good, or increase?",
      tag: "Exam trap",
      prompt: "Which statement about debits and credits is correct?",
      options: [
        { text: "A debit is the left side of an account, and whether it increases the account depends on the account type.", correct: true,
          why: "Exactly. Debit and credit are only sides. Assets, expenses and dividends increase with a debit; liabilities, equity and revenues increase with a credit." },
        { text: "A debit always increases an account, and a credit always decreases it.",
          why: "The classic error. A credit INCREASES a liability, equity or revenue account." },
        { text: "A debit is favourable and a credit is unfavourable.",
          why: "Neither word means good or bad. They are simply the left and right sides of an account." },
        { text: "A credit always means money has been received.",
          why: "This is banking habit, not accounting. Your bank credits your account because the bank now owes you — that is the bank's view, not yours." }
      ] },

    { type: "box", kind: "worked", title: "Orontes Foods in January", html:
      "<p>Orontes Foods, Inc. makes olive oil and tahini in Amman, Jordan, and frozen pastries in Dubai. Its shares " +
      "are listed on a U.S. stock exchange, and it reports under U.S. GAAP. The six drills below are its January 2025 " +
      "transactions. Amounts are in USD 000.</p>" +
      "<p><strong>Build each entry yourself first.</strong> The complete worked table and the effect grid follow, so " +
      "you can check every one against the book once you have tried them.</p>" },

    janDrills[0], janDrills[1], janDrills[2], janDrills[3], janDrills[4], janDrills[5],

    { type: "box", kind: "worked", title: "The six January entries, as the book prints them", html:
      "<p>Check each entry: the debits equal the credits, and the column totals are " +
      L.money(L.jan.dr) + " on both sides.</p>" +
      "<div class=\"table-scroll\"><table class=\"je\"><thead><tr><th>#</th><th>Date</th><th>Account</th>" +
      "<th>Debit</th><th>Credit</th></tr></thead><tbody>" +
      L.january.map(function (tx) {
        return tx.entry.map(function (ln, i) {
          return "<tr>" +
            (i === 0 ? "<td rowspan=\"" + tx.entry.length + "\">" + tx.n + "</td>" +
                       "<td rowspan=\"" + tx.entry.length + "\">" + tx.date + "</td>" : "") +
            "<td class=\"" + (ln.side === "cr" ? "je-indent" : "") + "\">" + ln.account + "</td>" +
            "<td>" + (ln.side === "dr" ? L.money(ln.amount) : "") + "</td>" +
            "<td>" + (ln.side === "cr" ? L.money(ln.amount) : "") + "</td></tr>";
        }).join("");
      }).join("") +
      "<tr class=\"je-total\"><td colspan=\"2\"></td><td>Totals</td><td>" + L.money(L.jan.dr) +
      "</td><td>" + L.money(L.jan.cr) + "</td></tr></tbody></table></div>" },

    { type: "figure", figure: "effectgrid", label: "Figure F01-05", anchor: "f01-05",
      caption: "Effect grid for the six Orontes Foods transactions in January 2025 (USD 000). " +
        "Click any row to see the journal entry behind it." },

    { type: "prose", html:
      "<p>Read the grid row by row. Three points matter for the exam.</p>" +
      "<ul>" +
      "<li>Rows 1 and 2 bring in cash of 2,300 in total, <em class=\"sig\">but no revenue</em>. Money from owners " +
      "and lenders is financing. It is not income.</li>" +
      "<li>Row 4 creates revenue of 300 <em class=\"sig\">but no cash</em>. Orontes records revenue when it delivers " +
      "the goods, not when the customer pays.</li>" +
      "<li>Row 6 reduces retained earnings by 50 and creates a liability. <em class=\"sig\">No cash moves until " +
      "February, and net income does not change.</em></li>" +
      "</ul>" },

    { type: "mcq", id: "x04", badge: "11",
      title: "Reading the effect grid",
      tag: "Comprehension",
      prompt: "In January, Orontes received cash of 2,300 from issuing shares and borrowing. How much of that is revenue?",
      options: [
        { text: "None of it. Money from owners and lenders is financing, not income.", correct: true,
          why: "Rows 1 and 2 bring in 2,300 of cash and zero revenue. Revenue comes from selling goods and services to customers." },
        { text: "All 2,300, because cash came into the business.",
          why: "Cash coming in is not the test for revenue. Owners' money and borrowed money are financing." },
        { text: "1,500, the amount received from the shareholders.",
          why: "Money from owners is an investment by owners, which increases contributed capital — not revenue." },
        { text: "800, the amount borrowed from the bank.",
          why: "Borrowing creates a liability. It is financing, and it is certainly not revenue." }
      ] },

    { type: "number", id: "x05", badge: "12",
      title: "The totals prove the equation",
      tag: "Calculation",
      instruction: "Add the January columns of the effect grid. The equation has to hold.",
      prompt: "Enter the total change in each element across all six January transactions.",
      unit: "USD 000",
      fields: [
        { key: "a", label: "Total change in assets", answer: L.jan.a,
          explain: "Cash +1,060, equipment +1,200, receivables +300, inventory −180 = +2,380." },
        { key: "l", label: "Total change in liabilities", answer: L.jan.l,
          explain: "Notes payable +800 and dividends payable +50 = +850." },
        { key: "e", label: "Total change in equity", answer: L.jan.e,
          explain: "Contributed capital +1,500, plus net income of 80, less the dividend of 50 = +1,530." },
        { key: "ni", label: "Net income for January", answer: L.jan.ni,
          explain: "Revenue 300 − cost of goods sold 180 − wages 40 = 80.",
          diagnostics: [
            { value: 120, says: "That is revenue less cost of goods sold — the gross profit. You still have to subtract the wages." },
            { value: 30, says: "That subtracts the dividend of 50. A dividend is not an expense, so it never reduces net income." },
            { value: 300, says: "That is revenue, not net income." }
          ] },
        { key: "cash", label: "Change in cash", answer: L.jan.cash,
          explain: "Operating −40, investing −1,200, financing +2,300 = +1,060. Note how different this is from net income of 80 — that gap is the accrual basis." }
      ],
      note: "Assets +2,380 = liabilities +850 + equity +1,530. The equation holds." },

    { type: "box", kind: "trap", title: "Three classic mistakes", html:
      "<ul>" +
      "<li><strong>A dividend is not an expense.</strong> It reduces retained earnings, not net income.</li>" +
      "<li><strong>Cash from borrowing or from issuing shares is not revenue.</strong> It is financing.</li>" +
      "<li><strong>Buying equipment for cash is not an expense today.</strong> One asset (cash) becomes another asset " +
      "(equipment). The cost becomes an expense later, through depreciation.</li>" +
      "</ul>" },

    { type: "classify", id: "x06", badge: "13",
      title: "The three classic mistakes, sorted",
      tag: "Exam trap",
      instruction: "Each tile is a transaction. Decide what it actually does.",
      prompt: "Sort each transaction by its effect on net income this period.",
      categories: [
        { id: "reduces", label: "Reduces net income this period", hint: "it is an expense now" },
        { id: "no-ni", label: "Does NOT touch net income", hint: "financing, a distribution, or an asset swap" },
        { id: "raises", label: "Raises net income this period" }
      ],
      items: [
        { name: "Paying January wages of 40 in cash", cat: "reduces",
          why: "Wages are an expense of the period, so net income falls by 40." },
        { name: "Declaring a cash dividend of 50", cat: "no-ni", trap: "dividend-not-expense",
          why: "A dividend reduces retained earnings but is NOT an expense, so net income does not change." },
        { name: "Borrowing 800 from the bank", cat: "no-ni", trap: "financing-not-revenue",
          why: "Borrowing is financing. It creates a liability and is not income." },
        { name: "Issuing shares for 1,500 cash", cat: "no-ni", trap: "financing-not-revenue",
          why: "Money from owners is an investment by owners. It increases contributed capital, not income." },
        { name: "Buying a bottling line for 1,200 cash", cat: "no-ni", trap: "equipment-not-expense",
          why: "One asset becomes another. The cost becomes an expense later, through depreciation." },
        { name: "Delivering olive oil invoiced at 300 that cost 180", cat: "raises",
          why: "Revenue 300 less cost of goods sold 180 raises net income by 120, even though no cash has moved." }
      ],
      distractors: [
        { name: "Collecting 200 from a customer who already took delivery",
          why: "No effect on net income — the revenue was recorded on delivery. This only swaps a receivable for cash." }
      ],
      traps: ["dividend-not-expense", "financing-not-revenue", "equipment-not-expense"] },

    { type: "box", kind: "turn", title: "Orontes Foods in February", html:
      "<p>Here are six transactions from February (USD 000). " +
      "<strong>Rows 1 to 3 of the grid are done for you. Complete rows 4 to 6</strong>, then build the journal " +
      "entries for those rows in the drills that follow.</p>" +
      "<ol>" +
      L.february.map(function (tx) {
        return "<li>" + tx.date + ": " + tx.text + " Amount: " +
          L.money(tx.entry[0].amount) + ".</li>";
      }).join("") +
      "</ol>" },

    { type: "grid", id: "x07", badge: "14",
      title: "Figure F01-06 · complete the February effect grid",
      tag: "Your turn",
      instruction: "Rows 1 to 3 are given, exactly as the book prints them. Rows 4 to 6 are yours.",
      prompt: "For each remaining row, choose the direction of the effect on each element, then the cash-flow category.",
      faded: true,
      rows: L.february },

    febDrills[0], febDrills[1], febDrills[2], febDrills[3], febDrills[4], febDrills[5],

    { type: "box", kind: "language", title: "Describing the effect of a transaction", html:
      "<ul>" +
      "<li><strong>debit X, credit Y</strong>: <em>Debit Equipment, credit Cash.</em></li>" +
      "<li><strong>X is debited</strong> (or credited) <strong>for an amount</strong>: <em>Cash is debited for 1,500.</em></li>" +
      "<li><strong>an increase in</strong> + the item; <strong>an increase of</strong> + the amount: " +
      "<em>an increase in assets of 2,380.</em></li>" +
      "<li><strong>increase by</strong> (the change) and <strong>increase to</strong> (the new total): " +
      "<em>Equity increased by 1,530.</em></li>" +
      "<li>Exam stems often say: <em>The effect of this transaction is to increase … and decrease …</em></li>" +
      "</ul>" },

    { type: "cloze", id: "x08", badge: "21",
      title: "Say it the way the exam says it",
      tag: "Language focus",
      instruction: "The difference between <em>of</em> and <em>in</em>, and between <em>by</em> and <em>to</em>, is tested in the wording of answer options.",
      hint: "Drag a word into each blank. There are more words than blanks.",
      parts: [
        "To buy the bottling line, Orontes debits Equipment and ",
        " Cash. Cash is debited ",
        " 1,500 when the shares are issued. Across January there was an increase ",
        " assets ",
        " 2,380. Equity increased ",
        " 1,530, so equity increased ",
        " 1,530 from a starting balance of zero."
      ],
      answers: [
        { word: "credits", why: "The pattern is <em>debit X, credit Y</em> — both verbs take the account as a direct object." },
        { word: "for", why: "<em>X is debited FOR an amount.</em>" },
        { word: "in", why: "<em>An increase IN</em> + the item. The item here is assets." },
        { word: "of", why: "<em>An increase OF</em> + the amount. The amount here is 2,380." },
        { word: "by", why: "<em>Increase BY</em> the change — the size of the movement." },
        { word: "to", why: "<em>Increase TO</em> the new total. Here the change and the new total happen to be the same number, because the balance started at zero." }
      ],
      extra: ["debits", "at", "from"] },

    { type: "box", kind: "friend", title: "Arabic and French traps in this section", html:
      "<ul>" +
      "<li><strong><span class=\"ar\" lang=\"ar\" dir=\"rtl\">استهلاك</span></strong> " +
      "— Gulf texts use it for <em>depreciation</em>, but it also means <em>consumption</em>. Syrian and Levant " +
      "texts often say <span class=\"ar\" lang=\"ar\" dir=\"rtl\">اهتلاك</span>, and " +
      "Egyptian texts say <span class=\"ar\" lang=\"ar\" dir=\"rtl\">إهلاك</span>. " +
      "<strong>In English, always say <em>depreciation</em>.</strong></li>" +
      "<li><strong><span class=\"ar\" lang=\"ar\" dir=\"rtl\">مخصص</span></strong> — Arabic " +
      "uses one word for two different things. An <strong>allowance</strong> (for example, the allowance for credit " +
      "losses) <em>reduces an asset</em>. A <strong>provision</strong> is a <em>liability</em>. " +
      "<strong>Never say “reserve for bad debts” in a U.S. GAAP answer.</strong></li>" +
      "<li><strong>credit</strong> — Your bank credits your account when it receives your money, because the " +
      "bank now owes you. <em>That is the bank's view.</em> Do not use banking habits to guess the accounting side.</li>" +
      "</ul>" },

    { type: "classify", id: "x09", badge: "22",
      title: "False friends · one English word for three Arabic ones",
      tag: "False friend",
      instruction: "Arabic has regional variants and one overloaded word. English does not.",
      prompt: "Sort each term by the single English term it must become in a U.S. GAAP answer.",
      categories: [
        { id: "depreciation", label: "depreciation", hint: "spreading an asset's cost over its life" },
        { id: "allowance", label: "allowance", hint: "a contra account that reduces an ASSET" },
        { id: "provision", label: "provision", hint: "a LIABILITY" }
      ],
      items: [
        { name: "استهلاك (Gulf usage)", cat: "depreciation", trap: "estihlak-depreciation",
          why: "Gulf texts use it for depreciation, though the same word also means consumption. In English, say depreciation." },
        { name: "اهتلاك (Levant usage)", cat: "depreciation", trap: "estihlak-depreciation",
          why: "The Syrian and Levant word for the same thing. English has only one word: depreciation." },
        { name: "إهلاك (Egyptian usage)", cat: "depreciation", trap: "estihlak-depreciation",
          why: "The Egyptian word for the same thing. Again: depreciation." },
        { name: "مخصص الخسائر الائتمانية", cat: "allowance", trap: "allowance-vs-provision",
          why: "The allowance for credit losses reduces accounts receivable, so it is an ALLOWANCE — a contra-asset, not a liability." },
        { name: "مخصص for an obligation the company owes", cat: "provision", trap: "allowance-vs-provision",
          why: "When مخصص describes something the company OWES, the English word is provision, and it is a liability." },
        { name: "مجمع الإهلاك", cat: "depreciation",
          why: "Accumulated depreciation — the running total of depreciation, a contra-asset on the balance sheet." }
      ],
      distractors: [
        { name: "“reserve for bad debts”",
          why: "Never use this phrase in a U.S. GAAP answer. The account is the ALLOWANCE for credit losses." },
        { name: "“the bank credited my account”",
          why: "Banking habit, not accounting. The bank credits your account because the bank owes you — that is the bank's books, not yours." }
      ],
      traps: ["estihlak-depreciation", "allowance-vs-provision"] },

    { type: "bridge", title: "Key words in this section", rows: window.TERMS.bridge("1.3") },

    { type: "match", id: "x10", badge: "23",
      title: "English ↔ Arabic · the terms of this section",
      tag: "Term bridge",
      instruction: "Fifteen terms — the largest bridge in the chapter. Hear each one with the 🔊 icons above.",
      hint: "Drag the Arabic term into the box beside its English exam term. Two Arabic tiles belong to terms from other sections.",
      dropHint: "drop the Arabic term here",
      pairs: window.TERMS.bridge("1.3").map(function (t) { return { a: t.en, b: t.ar, why: t.gloss }; }),
      distractors: [
        { b: "الملاءمة", why: "This is relevance — section 1.1, not 1.3." },
        { b: "قائمة التدفقات النقدية", why: "This is the statement of cash flows — section 1.6, not 1.3." }
      ] },

    { type: "checkgroup", title: "Test yourself",
      note: "These are SC3-1 and SC3-2 from the book, with the explanation for every option.",
      items: [
        { id: "sc1", type: "mcq", badge: "SC3-1", title: "SC3-1", tag: "Section check",
          prompt: "Which account normally has a credit balance?",
          options: [
            { text: "Prepaid rent", why: "Prepaid rent is an asset, so its normal balance is a debit." },
            { text: "Accumulated depreciation", correct: true,
              why: "Accumulated depreciation is a contra-asset account, so it has the opposite (credit) balance to assets." },
            { text: "Cost of goods sold", why: "Cost of goods sold is an expense, so its normal balance is a debit." },
            { text: "Dividends declared", why: "Dividends declared reduce equity, so they have a debit balance." }
          ],
          traps: ["contra-netting"] },

        { id: "sc2", type: "mcq", badge: "SC3-2", title: "SC3-2", tag: "Section check",
          prompt: "Orontes buys a bottling line for 1,200 in cash. Which journal entry is correct?",
          options: [
            { text: "Debit Cash 1,200; credit Equipment 1,200",
              why: "The sides are reversed: this entry would increase cash and decrease equipment." },
            { text: "Debit Equipment expense 1,200; credit Cash 1,200",
              why: "The bottling line is an asset, not an expense of this period." },
            { text: "Debit Equipment 1,200; credit Notes payable 1,200",
              why: "Orontes paid cash; it did not borrow. The credit side must be Cash." },
            { text: "Debit Equipment 1,200; credit Cash 1,200", correct: true,
              why: "One asset increases (debit Equipment) and another asset decreases (credit Cash)." }
          ],
          traps: ["equipment-not-expense"] }
      ] }
    ]
  };
})();
