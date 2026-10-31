/* Section 1.6 — A first look at the four statements.
   Covers the four-statement table, F01-09, the January proof (net income 80,
   RE +30, cash +1,060 from its three categories), the net-income-is-not-cash
   point, the trial balance definition, the live F01-10 exhibit, the 5-row Term
   Bridge, the Language Focus on exam wording, SC6-1 and SC6-2. */
(function () {
  var L = window.LEDGER;

  window.PAGE = {
    id: "s1-6", kind: "section", n: "1.6", up: "../",
    title: "A first look at the four statements",
    crumb: "Section 1.6",
    question: "What does each of the four statements answer, which one shows a single date, and how do they link to each other?",
    los: ["A.1.b"],
    blocks: [

    { type: "prose", html:
      "<p>Each statement answers a different question for users. Chapters 2 to 5 study each statement in detail. " +
      "Here is the overview.</p>" },

    { type: "table", caption: "The four statements",
      head: ["Statement", "Question it answers", "Time", "Chapter"],
      rows: [
        ["Balance sheet", "What does the company have and owe, and what is the owners' claim?", "<strong>at a date</strong>", "2"],
        ["Income statement", "How did the company perform?", "for a period", "3"],
        ["Statement of changes in equity", "Why did each equity account change?", "for a period", "4"],
        ["Statement of cash flows", "Where did cash come from, and where did it go?", "for a period", "5"]
      ] },

    { type: "match", id: "x01", badge: "01",
      title: "Which statement answers which question?",
      tag: "Matching",
      instruction: "Four statements, four questions. The exam names the question and asks for the statement.",
      hint: "Drag the statement into the box beside the question it answers. Two statements belong to no question here.",
      dropHint: "which statement answers this?",
      speakPrompt: false,
      pairs: [
        { a: "What does the company have and owe, and what is the owners' claim?", b: "Balance sheet",
          why: "The only statement that reports a position at one date." },
        { a: "How did the company perform?", b: "Income statement",
          why: "Performance for a period: revenues and gains less expenses and losses." },
        { a: "Why did each equity account change?", b: "Statement of changes in equity",
          why: "It shows opening retained earnings, net income, dividends and the closing balance." },
        { a: "Where did cash come from, and where did it go?", b: "Statement of cash flows",
          why: "It explains the movement in cash across the three categories." }
      ],
      distractors: [
        { b: "Trial balance", why: "A bookkeeping list that checks debits equal credits. It is not a financial statement." },
        { b: "The notes to the financial statements", why: "They disclose and explain, but they do not answer any one of these four questions on their own." }
      ] },

    { type: "classify", id: "x02", badge: "02",
      title: "At a date, or for a period?",
      tag: "Drag and drop",
      instruction: "Only one of the four statements shows a single date. SC6-1 asks exactly this.",
      prompt: "Sort the four statements.",
      categories: [
        { id: "date", label: "Reports at a single date", hint: "there is only one" },
        { id: "period", label: "Covers a period of time", hint: "the other three" }
      ],
      items: [
        { name: "Balance sheet", cat: "date",
          why: "It shows position at one date — December 31, 2025, for example." },
        { name: "Income statement", cat: "period", why: "Performance for a period, such as the year 2025." },
        { name: "Statement of changes in equity", cat: "period", why: "It explains movements across a period." },
        { name: "Statement of cash flows", cat: "period", why: "It explains cash movements across a period." }
      ],
      distractors: [
        { name: "Statement of financial position",
          why: "A trap worth catching: this is just the IFRS name for the balance sheet, so it is the same statement, not a fifth one." },
        { name: "Trial balance",
          why: "Not a financial statement at all — though it is drawn up at a date." }
      ] },

    { type: "prose", html:
      "<p>The four statements are <em class=\"sig\">linked</em>. Figure F01-09 shows the two main links. " +
      "<strong>Net income flows into retained earnings</strong>, and <strong>the net change in cash explains the " +
      "cash balance</strong> on the balance sheet.</p>" },

    { type: "figure", figure: "links", label: "Figure F01-09", anchor: "f01-09",
      caption: "How the four statements connect through net income, retained earnings and cash." },

    { type: "prose", html:
      "<p>You can see both links in the January transactions of Orontes. Net income was " + L.money(L.jan.ni) +
      ": revenue of 300, minus cost of goods sold of 180, minus wages of 40. The dividend declared was 50, so " +
      "retained earnings rose by " + L.money(L.jan.retainedEarningsChange) + ". Cash rose by " +
      L.money(L.jan.cash) + ": an operating outflow of " + L.money(Math.abs(L.jan.operating)) +
      ", an investing outflow of " + L.money(Math.abs(L.jan.investing)) + " and a financing inflow of " +
      L.money(L.jan.financing) + ".</p>" +
      "<p><em class=\"sig\">Notice that net income and the change in cash are very different numbers.</em> " +
      "This is the accrual basis at work.</p>" },

    { type: "number", id: "x03", badge: "03",
      title: "The two links, in January's numbers",
      tag: "Calculation",
      instruction: "Trace each link with the actual figures. The gap between the last two answers is the whole point of the accrual basis.",
      prompt: "Use the January transactions of Orontes Foods.",
      unit: "USD 000",
      fields: [
        { key: "ni", label: "Net income for January", answer: L.jan.ni,
          explain: "Revenue 300 − cost of goods sold 180 − wages 40 = " + L.money(L.jan.ni) + "." },
        { key: "re", label: "Increase in retained earnings", answer: L.jan.retainedEarningsChange,
          explain: "Net income of " + L.money(L.jan.ni) + " less the dividend declared of 50 = " +
            L.money(L.jan.retainedEarningsChange) + ".",
          diagnostics: [
            { value: 80, says: "That is net income. The dividend of 50 also reduces retained earnings, so subtract it." },
            { value: 130, says: "That adds the dividend. A dividend REDUCES retained earnings." }
          ] },
        { key: "cash", label: "Increase in cash", answer: L.jan.cash,
          explain: "Operating −" + Math.abs(L.jan.operating) + ", investing −" + Math.abs(L.jan.investing) +
            ", financing +" + L.jan.financing + " = " + L.money(L.jan.cash) + ".",
          diagnostics: [
            { value: 80, says: "That is net income, not the change in cash. The two are very different numbers — that is the accrual basis." }
          ] }
      ],
      note: "Net income 80, but cash up 1,060. Neither number explains the other." },

    { type: "classify", id: "x04", badge: "04",
      title: "The three cash-flow categories",
      tag: "Drag and drop",
      instruction: "Chapter 5 studies this properly. For now, learn which January transaction sits where.",
      prompt: "Sort the January cash movements into their categories.",
      categories: [
        { id: "operating", label: "Operating", hint: "the day-to-day trading of the business" },
        { id: "investing", label: "Investing", hint: "buying and selling long-lived assets" },
        { id: "financing", label: "Financing", hint: "owners and lenders" }
      ],
      items: [
        { name: "Paying January wages, 40", cat: "operating",
          why: "Paying for the work of running the business is an operating outflow." },
        { name: "Buying the bottling line, 1,200", cat: "investing",
          why: "Buying a long-lived asset is an investing outflow." },
        { name: "Issuing shares for cash, 1,500", cat: "financing",
          why: "Cash from owners is a financing inflow." },
        { name: "Borrowing on the bank note, 800", cat: "financing",
          why: "Cash from a lender is a financing inflow." }
      ],
      distractors: [
        { name: "Selling olive oil on credit, 300",
          why: "No cash moved in January at all — the customer had not paid. It appears in no cash-flow category this month." },
        { name: "Declaring the dividend, 50",
          why: "Declaring moves no cash. The cash leaves in February, when it is paid, and that is a financing outflow." }
      ] },

    { type: "mcq", id: "x05", badge: "05",
      title: "Why isn't net income the same as cash?",
      tag: "Comprehension",
      prompt: "In January, Orontes had net income of 80 and its cash rose by 1,060. What best explains the difference?",
      options: [
        { text: "Most of the cash came from financing and none of it from income, while some income (the credit sale) brought in no cash at all.", correct: true,
          why: "2,300 of financing inflows and a 1,200 investing outflow dominate the cash movement, and the 300 credit sale produced revenue with no cash. The accrual basis separates earning from collecting." },
        { text: "The accounts must contain an error, because net income should equal the change in cash.",
          why: "Under the accrual basis the two are not expected to agree. That is why there are four statements, not one." },
        { text: "The dividend of 50 explains the difference.",
          why: "The dividend did not move any cash in January — it was paid on February 15 — and it is not an expense either." },
        { text: "Depreciation was added back.",
          why: "Orontes recorded no depreciation in January. The bottling line was only bought on January 10." }
      ] },

    { type: "heading", text: "Reading a trial balance", anchor: "trial-balance" },

    { type: "prose", html:
      "<p>Before you leave this chapter, practise reading a trial balance. A " +
      "<span class=\"defn\">trial balance</span> lists every account balance and checks that " +
      "<em class=\"sig\">total debits equal total credits</em>. Figure F01-10 is the trial balance of " +
      L.company.barada + ", a small food distributor that buys products from Orontes. You will use it in the " +
      "section check below, in the Extended Example in section 1.7, and in the practice and case sets.</p>" },

    { type: "figure", figure: "trialbalance", label: "Figure F01-10", anchor: "f01-10",
      caption: L.company.barada + " — trial balance, December 31, 2025 (USD 000). " +
        "This is the exhibit used by section 1.7, the practice set and the case question." },

    { type: "imagedrop", id: "x06", badge: "06",
      title: "Which statement does each account reach?",
      tag: "Drag onto the map",
      instruction: "This is the first step of every trial-balance question: sort by element before calculating anything.",
      figure: "statement-sorter",
      prompt: "Drag each account from the trial balance onto the statement it belongs to. Watch the two accounts that go to the statement of changes in equity.",
      items: [
        { name: "Sales revenue", zone: "is", why: "A revenue: it belongs to the income statement for the period." },
        { name: "Cost of goods sold", zone: "is", why: "An expense: income statement." },
        { name: "Wages expense", zone: "is", why: "An expense: income statement." },
        { name: "Depreciation expense", zone: "is", why: "An expense of the period: income statement. Do not confuse it with accumulated depreciation." },
        { name: "Interest expense", zone: "is", why: "A non-operating expense, below operating income on the income statement." },
        { name: "Retained earnings, January 1", zone: "sce",
          why: "The OPENING balance starts the statement of changes in equity. The closing balance then goes to the balance sheet." },
        { name: "Dividends declared", zone: "sce",
          why: "A distribution to owners. It appears in the statement of changes in equity as a deduction — never as an expense in the income statement." },
        { name: "Cash", zone: "bs", why: "An asset at the date: balance sheet." },
        { name: "Accumulated depreciation", zone: "bs", trap: "contra-netting",
          why: "A contra-asset on the balance sheet, netted against equipment. The EXPENSE is the income statement item; this is the running total." },
        { name: "Dividends payable", zone: "bs", why: "A liability at the date: balance sheet." },
        { name: "Common stock", zone: "bs", why: "Equity at the date: balance sheet." }
      ],
      distractors: [
        { name: "Net income", why: "Not an account in the trial balance. It is the RESULT of the income statement, which then flows into the statement of changes in equity." },
        { name: "Total debits 9,750", why: "A check total on the trial balance itself, not an account that reaches any statement." }
      ],
      traps: ["contra-netting"] },

    { type: "bridge", title: "Key words in this section", rows: window.TERMS.bridge("1.6") },

    { type: "match", id: "x07", badge: "07",
      title: "English ↔ Arabic · the four statements",
      tag: "Term bridge",
      instruction: "Note that the first two rows are the same statement under two frameworks.",
      hint: "Drag the Arabic term into the box beside its English exam term. Two Arabic tiles belong to terms from other sections.",
      dropHint: "drop the Arabic term here",
      pairs: window.TERMS.bridge("1.6").map(function (t) { return { a: t.en, b: t.ar, why: t.gloss }; }),
      distractors: [
        { b: "ميزان المراجعة",
          why: "This is the trial balance — a bookkeeping list, not one of the four statements." },
        { b: "الأسهم العادية",
          why: "This is common stock — section 1.2, not 1.6." }
      ] },

    { type: "box", kind: "language", title: "Reading exam questions", html:
      "<ul>" +
      "<li><strong>MOST likely</strong> or <strong>BEST describes</strong>: more than one option may be partly " +
      "true. Choose the best one.</li>" +
      "<li><strong>NOT</strong> or <strong>EXCEPT</strong>: three options are true. Find the one that is false.</li>" +
      "<li><strong>immediately after the transaction</strong>: ignore later events, such as the cash payment next " +
      "month.</li>" +
      "<li><strong>net effect</strong>: add the increases and decreases together before you answer.</li>" +
      "</ul>" },

    { type: "stem", id: "x08", badge: "08",
      title: "Spot the cue word in the stem",
      tag: "Language focus",
      instruction: "These four cues change what a correct answer looks like. Find the cue, then say what it does.",
      effects: [
        "More than one option may be partly true — choose the best one.",
        "Three options are true — find the one that is false.",
        "Ignore later events, such as next month's cash payment.",
        "Add the increases and decreases together before answering."
      ],
      stems: [
        { text: "Which information will the bank find MOST useful?",
          cue: "MOST", effect: "More than one option may be partly true — choose the best one.",
          why: "Several options may be true of a bank; only one is the most useful to its lending decision." },
        { text: "Accumulated depreciation is BEST described as:",
          cue: "BEST", effect: "More than one option may be partly true — choose the best one.",
          why: "Partly-true descriptions are offered; you must pick the most complete and accurate one." },
        { text: "Which transaction changes total assets but does NOT change total equity?",
          cue: "NOT", effect: "Three options are true — find the one that is false.",
          why: "The stem is looking for the exception, so reading past the NOT reverses your answer." },
        { text: "All of the following are enhancing qualities EXCEPT:",
          cue: "EXCEPT", effect: "Three options are true — find the one that is false.",
          why: "Same logic as NOT: you are hunting the odd one out, not the correct statement." },
        { text: "What is the effect immediately after the declaration?",
          cue: "immediately", effect: "Ignore later events, such as next month's cash payment.",
          why: "On the declaration date a liability arises and retained earnings fall. The cash does not move until the payment date." },
        { text: "What is the net effect of these transactions on total equity?",
          cue: "net", effect: "Add the increases and decreases together before answering.",
          why: "Each transaction may move equity in a different direction; the question wants the combined figure." }
      ] },

    { type: "checkgroup", title: "Test yourself",
      note: "These are SC6-1 and SC6-2 from the book, with the explanation for every option.",
      items: [
        { id: "sc1", type: "mcq", badge: "SC6-1", title: "SC6-1", tag: "Section check",
          prompt: "Which statement reports amounts at a single date?",
          options: [
            { text: "The income statement", why: "The income statement covers a period." },
            { text: "The balance sheet", correct: true,
              why: "The balance sheet shows position at one date. The other statements cover a period." },
            { text: "The statement of changes in equity", why: "The statement of changes in equity covers a period." },
            { text: "The statement of cash flows", why: "The statement of cash flows covers a period." }
          ] },

        { id: "sc2", type: "mcq", badge: "SC6-2", title: "SC6-2", tag: "Section check",
          exhibit: { href: "#f01-10", label: "the Barada trial balance, Figure F01-10, above" },
          prompt: "Look at Figure F01-10. Which two accounts are contra-asset accounts?",
          options: [
            { text: "Allowance for credit losses and dividends payable",
              why: "Dividends payable is a liability, not a contra-asset." },
            { text: "Accumulated depreciation and notes payable",
              why: "Notes payable is a liability, not a contra-asset." },
            { text: "Allowance for credit losses and accumulated depreciation", correct: true,
              why: "Both accounts reduce an asset — receivables and equipment — and both have credit balances." },
            { text: "Dividends declared and accumulated depreciation",
              why: "Dividends declared reduces equity, not an asset." }
          ],
          traps: ["contra-netting"] }
      ] }
    ]
  };
})();
