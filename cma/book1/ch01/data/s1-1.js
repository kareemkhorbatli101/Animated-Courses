/* Section 1.1 — Who uses financial statements, and why?
   Covers every atom of the printed section: the users table F01-02, the three
   user questions, stewardship, both fundamental qualities with their parts, the
   four enhancing qualities, the cost constraint, the Exam Trap, the Language
   Focus on the five verbs, the eight-row Term Bridge, and SC1-1 and SC1-2. */
window.PAGE = {
  id: "s1-1", kind: "section", n: "1.1", up: "../",
  title: "Who uses financial statements, and why?",
  crumb: "Section 1.1",
  question: "Who reads these statements, what does each reader decide, and what makes the information useful to them?",
  los: ["A.1.a", "A.1.b"],
  blocks: [

  { type: "prose", html:
    "<p>A company collects thousands of facts every day: sales, purchases, salaries and loans. " +
    "Financial statements summarize these facts in a standard form for people outside the company. " +
    "The four main statements are the <span class=\"defn\">balance sheet</span>, the " +
    "<span class=\"defn\">income statement</span>, the <span class=\"defn\">statement of changes in equity</span> " +
    "and the <span class=\"defn\">statement of cash flows</span>.</p>" +
    "<p>Most companies prepare <span class=\"defn\">general-purpose financial statements</span>. These are reports " +
    "for many readers at the same time, not for one special reader. The U.S. conceptual framework names the most " +
    "important readers. The <em class=\"sig\">primary users are existing and potential investors, lenders and other " +
    "creditors.</em> They give resources — money, goods or credit — to the company. They usually cannot ask " +
    "the company for special reports, so they depend on the published statements.</p>" +
    "<p>Each user makes a different decision, so each user looks for different information.</p>" },

  { type: "figure", figure: "users", label: "Figure F01-02", anchor: "f01-02",
    caption: "Users of financial statements and what they need. The three primary users are marked." },

  { type: "classify", id: "x01", badge: "01",
    title: "Primary user, or just a user?",
    tag: "Drag and drop",
    instruction: "The framework names three primary users. Everyone else reads the statements but is not a primary user.",
    prompt: "Sort each group. Two of the tiles are not users of the published statements at all.",
    categories: [
      { id: "primary", label: "Primary user", hint: "gives resources and cannot demand special reports" },
      { id: "other", label: "A user, but not a primary user", hint: "reads the statements for other reasons" }
    ],
    items: [
      { name: "Existing and potential investors", cat: "primary",
        why: "They provide resources by buying shares and decide whether to buy, hold or sell." },
      { name: "Existing and potential lenders", cat: "primary",
        why: "Banks and bondholders provide resources and cannot demand special reports." },
      { name: "Other creditors (suppliers)", cat: "primary",
        why: "Suppliers who sell on credit provide resources, so they are primary users." },
      { name: "Employees and unions", cat: "other",
        why: "They read the statements to judge stability and to negotiate pay, but the framework does not name them as primary." },
      { name: "Customers", cat: "other",
        why: "They want to know whether the company will keep supplying them." },
      { name: "Governments and regulators", cat: "other",
        why: "They use the statements for tax, oversight and statistics, but they are not the primary users the framework names." },
      { name: "The company's managers", cat: "other", trap: "primary-user",
        why: "Managers ARE users, but they can obtain any internal information they need, so they are not primary users of general-purpose statements. Reporting for managers is management accounting — the subject of most of the CMA exam." }
    ],
    distractors: [
      { name: "The company's internal auditors",
        why: "Internal auditors work inside the company and use internal records, not the published general-purpose statements." },
      { name: "The company's board of directors",
        why: "The board directs the company and can demand internal reports, so it does not depend on general-purpose statements." }
    ],
    traps: ["primary-user"] },

  { type: "imagedrop", id: "x02", badge: "02",
    title: "Which statement does each user lean on?",
    tag: "Drag onto the map",
    instruction: "Each user has a different decision, so each one reaches for a different statement first.",
    figure: "usersmap",
    prompt: "Drag each user to the statement they use most. One user does not use the general-purpose statements at all.",
    items: [
      { name: "Investors (shareholders)", zone: "income",
        why: "Their question is whether the company will create future cash flows and returns, so they lean on the income statement, then cash flows and the balance sheet." },
      { name: "Lenders (banks, bondholders)", zone: "cash",
        why: "Their question is whether the company can pay interest and repay principal on time, so cash flows come first, then the balance sheet." },
      { name: "Other creditors (suppliers)", zone: "balance",
        why: "Their question is whether the company will pay its bills when due, so they look at the short-term items on the balance sheet, then cash flows." },
      { name: "Employees and unions", zone: "income",
        why: "They want to know whether the company is stable and profitable, which the income statement shows." },
      { name: "Managers", zone: "internal", trap: "primary-user",
        why: "Managers can get any internal information they need. They use internal management reports, not general-purpose statements — which is exactly why they are not primary users." }
    ],
    distractors: [
      { name: "The external auditor's engagement letter",
        why: "Not a financial statement and not a user. It is an audit document." }
    ],
    traps: ["primary-user"] },

  { type: "match", id: "x03", badge: "03",
    title: "Each user's key question",
    tag: "Matching",
    instruction: "One word changes the decision. Match each user to the question they are actually asking.",
    hint: "Drag a question into the box beside its user, or tap a question and then tap a box. Two questions belong to nobody here.",
    dropHint: "drop the question here",
    speakPrompt: false,
    pairs: [
      { a: "Investors (shareholders)", b: "Will the company create future cash flows and returns?",
        why: "Their decision is to buy, hold or sell shares, so they are forecasting returns." },
      { a: "Lenders (banks, bondholders)", b: "Can the company pay interest and repay the principal on time?",
        why: "Their decision is to lend, renew or stop a loan. Repayment is the whole question." },
      { a: "Other creditors (suppliers)", b: "Will the company pay its bills when due?",
        why: "Their decision is whether to sell on credit and on what terms." },
      { a: "Employees and unions", b: "Is the company stable and profitable?",
        why: "Their decision is whether to stay and how to negotiate pay." },
      { a: "Customers", b: "Will the company continue to supply us?",
        why: "Their decision is whether to sign long-term contracts." },
      { a: "Governments and regulators", b: "Does the company follow the rules and pay its taxes?",
        why: "They use all the statements and the notes for tax, oversight and statistics." }
    ],
    distractors: [
      { b: "What was the highest and lowest share price during the year?",
        why: "This interests investors more than lenders, and it does not show repayment ability. It is not any user's framework question." },
      { b: "Who are the company's major shareholders?",
        why: "Ownership details answer none of the decisions in this table." }
    ] },

  { type: "prose", html:
    "<p>Other groups also read financial statements: employees, customers, governments, tax authorities and the " +
    "public. Managers read them too. However, <em class=\"sig\">managers are not primary users of general-purpose " +
    "statements, because they can get any internal information they need.</em> Reporting for managers is " +
    "<span class=\"defn\">management accounting</span>, the subject of most of the CMA exam.</p>" +
    "<p>What do all these users need? In simple terms, they ask three questions.</p>" +
    "<ul><li><strong>What does the company have, and what does it owe?</strong> The balance sheet answers this.</li>" +
    "<li><strong>How did the company perform in the period?</strong> The income statement answers this.</li>" +
    "<li><strong>Where did cash come from, and where did it go?</strong> The statement of cash flows answers this.</li></ul>" +
    "<p>Users also want to judge <span class=\"defn\">stewardship</span>: how well the managers used the owners' " +
    "resources.</p>" },

  { type: "classify", id: "x04", badge: "04",
    title: "The three questions every user asks",
    tag: "Drag and drop",
    instruction: "Each question is answered by one statement.",
    prompt: "Put each question under the statement that answers it.",
    categories: [
      { id: "bs", label: "Balance sheet" },
      { id: "is", label: "Income statement" },
      { id: "cf", label: "Statement of cash flows" }
    ],
    items: [
      { name: "What does the company have, and what does it owe?", cat: "bs",
        why: "The balance sheet lists assets, liabilities and the owners' residual claim." },
      { name: "How did the company perform in the period?", cat: "is",
        why: "The income statement reports performance for a period." },
      { name: "Where did cash come from, and where did it go?", cat: "cf",
        why: "The statement of cash flows explains the movement in cash." }
    ],
    distractors: [
      { name: "Why did each equity account change?",
        why: "A real question, but the statement of changes in equity answers it — and that statement is not one of the three boxes here. You meet it in section 1.6." },
      { name: "How much tax will the company pay next year?",
        why: "No general-purpose statement forecasts next year's tax. The statements report the past period." }
    ] },

  { type: "heading", text: "What makes information useful?", anchor: "useful" },

  { type: "prose", html:
    "<p>The conceptual framework lists the qualities of useful information. There are two <strong>fundamental " +
    "qualities</strong>. <span class=\"defn\">Relevance</span> means the information can make a difference to a " +
    "decision. It helps users predict the future (<em>predictive value</em>) or check their past predictions " +
    "(<em>confirmatory value</em>). Relevance includes <span class=\"defn\">materiality</span>: an item is material " +
    "if leaving it out or stating it wrongly could change users' decisions.</p>" +
    "<p><span class=\"defn\">Faithful representation</span> means the information shows what it claims to show. " +
    "It is <em>complete</em>, <em>neutral</em> and <em>free from error</em>. Four <strong>enhancing qualities</strong> " +
    "make information even more useful: <em>comparability</em>, <em>verifiability</em>, <em>timeliness</em> and " +
    "<em>understandability</em>. Finally, there is a <strong>cost constraint</strong>: the benefit of reporting " +
    "information should be greater than its cost.</p>" },

  { type: "classify", id: "x05", badge: "05",
    title: "Fundamental, enhancing, or a constraint?",
    tag: "Drag and drop",
    instruction: "The exam tests this distinction directly. Two qualities are fundamental; four are only enhancing.",
    prompt: "Sort every item into the right group.",
    categories: [
      { id: "fundamental", label: "Fundamental quality", hint: "there are exactly two" },
      { id: "part", label: "Part of relevance", hint: "inside a fundamental quality" },
      { id: "enhancing", label: "Enhancing quality", hint: "there are exactly four" },
      { id: "constraint", label: "A constraint, not a quality" }
    ],
    items: [
      { name: "Relevance", cat: "fundamental", trap: "fundamental-vs-enhancing",
        why: "One of the two fundamental qualities: the information can make a difference to a decision." },
      { name: "Faithful representation", cat: "fundamental", trap: "fundamental-vs-enhancing",
        why: "The other fundamental quality: complete, neutral and free from error." },
      { name: "Predictive value", cat: "part",
        why: "Part of relevance: it helps users predict the future." },
      { name: "Confirmatory value", cat: "part",
        why: "Part of relevance: it helps users check their past predictions." },
      { name: "Materiality", cat: "part",
        why: "Relevance includes materiality: an item is material if omitting or misstating it could change decisions." },
      { name: "Comparability", cat: "enhancing", trap: "fundamental-vs-enhancing",
        why: "Enhancing only. It lets users compare companies or periods." },
      { name: "Verifiability", cat: "enhancing", trap: "fundamental-vs-enhancing",
        why: "Enhancing only. Independent observers could reach the same result." },
      { name: "Timeliness", cat: "enhancing", trap: "fundamental-vs-enhancing",
        why: "Enhancing only. The information arrives in time to affect the decision." },
      { name: "Understandability", cat: "enhancing", trap: "fundamental-vs-enhancing",
        why: "Enhancing only. Users can comprehend the information." },
      { name: "The cost constraint", cat: "constraint",
        why: "Not a quality at all: the benefit of reporting information should be greater than its cost." }
    ],
    distractors: [
      { name: "Conservatism",
        why: "Not in the list of qualities. Faithful representation requires NEUTRALITY, which is the opposite of a deliberate bias." },
      { name: "Prudence",
        why: "Not one of the U.S. framework's qualities either. Again, neutrality is what faithful representation demands." }
    ],
    traps: ["fundamental-vs-enhancing"] },

  { type: "match", id: "x06", badge: "06",
    title: "Match each quality to what it actually means",
    tag: "Matching",
    instruction: "Exam questions describe the quality and ask you to name it. Practise it in that direction.",
    hint: "Drag the name of the quality into the box beside its description. Two names belong to no description here.",
    dropHint: "which quality is this?",
    speakPrompt: false,
    pairs: [
      { a: "Users can compare this company with another company, or with its own earlier years.", b: "Comparability",
        why: "Comparability lets users identify similarities and differences between companies or periods." },
      { a: "Two independent observers would reach the same amount.", b: "Verifiability",
        why: "Verifiability means independent people could agree on the amount." },
      { a: "The information arrives in time to affect the decision.", b: "Timeliness",
        why: "Late information cannot change a decision, however accurate it is." },
      { a: "A user with reasonable business knowledge can comprehend it.", b: "Understandability",
        why: "Understandability is about the information being comprehensible, not about simplifying it away." },
      { a: "It helps an investor forecast next year's cash flows.", b: "Predictive value",
        why: "Predictive value is part of relevance: it helps users predict the future." },
      { a: "It is complete, neutral and free from error.", b: "Faithful representation",
        why: "Those three words are the definition of faithful representation." },
      { a: "Leaving it out could change a user's decision.", b: "Materiality",
        why: "Materiality is part of relevance, judged by its effect on users' decisions." }
    ],
    distractors: [
      { b: "Prudence", why: "Not one of the framework's qualities. Neutrality is what faithful representation requires." },
      { b: "Consistency", why: "Close to comparability in everyday speech, but it is not the framework's term here." }
    ] },

  { type: "box", kind: "trap", title: "Who is a primary user?", html:
    "<p>Primary users are <strong>investors, lenders and other creditors</strong>. Managers are users, but not " +
    "primary users of general-purpose statements.</p>" +
    "<p>Also remember: <strong>relevance</strong> and <strong>faithful representation</strong> are the two " +
    "<em>fundamental</em> qualities. Comparability, verifiability, timeliness and understandability are only " +
    "<em>enhancing</em> qualities.</p>" },

  { type: "mcq", id: "x07", badge: "07",
    title: "Exam trap · fundamental or enhancing?",
    tag: "Exam trap",
    prompt: "Which pair names the two <strong>fundamental</strong> qualitative characteristics of useful financial information?",
    options: [
      { text: "Relevance and faithful representation", correct: true,
        why: "These are the two fundamental qualities. Everything else in the list is enhancing, or a constraint." },
      { text: "Comparability and verifiability",
        why: "Both are real qualities, but both are only <em>enhancing</em>. This is the trap the exam sets." },
      { text: "Timeliness and understandability",
        why: "Also enhancing qualities only. Useful, but not fundamental." },
      { text: "Relevance and comparability",
        why: "Half right, which is what makes it tempting. Relevance is fundamental; comparability is only enhancing." }
    ],
    traps: ["fundamental-vs-enhancing"] },

  { type: "box", kind: "language", title: "Five accounting verbs", html:
    "<p>These verbs have exact meanings in exam questions. Learn the difference.</p>" +
    "<table class=\"data-table\"><thead><tr><th>Verb</th><th>Meaning in financial reporting</th></tr></thead><tbody>" +
    "<tr><td class=\"row-head\">recognize</td><td>include an item in the statements, with a name and an amount</td></tr>" +
    "<tr><td class=\"row-head\">measure</td><td>decide the amount of the item</td></tr>" +
    "<tr><td class=\"row-head\">record</td><td>enter the item in the accounts (journal and ledger)</td></tr>" +
    "<tr><td class=\"row-head\">present</td><td>show the item on the face of a statement</td></tr>" +
    "<tr><td class=\"row-head\">disclose</td><td>explain the item in the notes to the statements</td></tr>" +
    "</tbody></table>" },

  { type: "cloze", id: "x08", badge: "08",
    title: "The five verbs in one sentence",
    tag: "Language focus",
    instruction: "This is the chapter's own worked sentence about Orontes. Put each verb where it belongs.",
    hint: "Drag a verb into each blank, or tap a verb and then tap a blank. There is one verb more than there are blanks.",
    parts: [
      "Orontes ",
      " revenue when it delivers the goods. It ",
      " the revenue at the invoice price. It ",
      " revenue in the income statement, and it ",
      " its revenue policy in the notes."
    ],
    answers: [
      { word: "recognizes", why: "To recognize is to include the item in the statements, with a name and an amount." },
      { word: "measures", why: "To measure is to decide the amount — here, the invoice price." },
      { word: "presents", why: "To present is to show the item on the face of a statement." },
      { word: "discloses", why: "To disclose is to explain the item in the notes, not on the face." }
    ],
    extra: ["records"],
    note: "To <em>record</em> is to enter the item in the journal and ledger — a bookkeeping step, not one of the four in this sentence." },

  { type: "selfex", id: "x09", badge: "09",
    title: "In your own words: why can't managers be primary users?",
    tag: "Explain it",
    prompt: "A colleague says: “Managers are the most important readers of the financial statements, so they must be primary users.” Why is that wrong?",
    placeholder: "Managers are not primary users because…",
    checklist: [
      "Did you say that managers can obtain any internal information they need?",
      "Did you say that primary users depend on the PUBLISHED statements because they cannot demand special reports?",
      "Did you name the primary users: investors, lenders and other creditors?",
      "Did you mention that reporting for managers is management accounting?"
    ],
    model: "Primary users are existing and potential investors, lenders and other creditors. They give resources to " +
      "the company and they usually <strong>cannot ask the company for special reports</strong>, so they depend on the " +
      "published general-purpose statements. Managers can get any internal information they need, so general-purpose " +
      "statements are not what they depend on. Managers are users — just not primary users. Reporting for managers " +
      "is management accounting, which is the subject of most of the CMA exam." },

  { type: "selfex", id: "x10", badge: "10",
    title: "In your own words: what is stewardship?",
    tag: "Explain it",
    prompt: "Users want more from the statements than a forecast. What does it mean to say they also judge <strong>stewardship</strong>?",
    placeholder: "Stewardship means…",
    checklist: [
      "Did you say it is about how well the managers used the resources?",
      "Did you say the resources belong to the owners?",
      "Did you keep it separate from predicting future cash flows?"
    ],
    model: "Stewardship is the judgement users make about <strong>how well the managers used the owners' " +
      "resources</strong>. It looks backwards at the stewardship of what was entrusted to management, rather than " +
      "forwards at future returns — though the same statements serve both purposes." },

  { type: "bridge", title: "Key words in this section", rows: window.TERMS.bridge("1.1") },

  { type: "match", id: "x11", badge: "11",
    title: "English ↔ Arabic · the terms of this section",
    tag: "Term bridge",
    instruction: "Recognition first. Use the 🔊 icons above to hear each term before you start.",
    hint: "Drag the Arabic term into the box beside its English exam term, or tap one and then the other. Two Arabic tiles belong to terms from other sections.",
    dropHint: "drop the Arabic term here",
    pairs: window.TERMS.bridge("1.1").map(function (t) {
      return { a: t.en, b: t.ar, why: t.gloss };
    }),
    distractors: [
      { b: "المعادلة المحاسبية",
        why: "This is the accounting equation — section 1.2, not 1.1." },
      { b: "أساس الاستحقاق",
        why: "This is the accrual basis — section 1.4, not 1.1." }
    ] },

  { type: "checkgroup", title: "Test yourself", note: "These are SC1-1 and SC1-2 from the book. The explanations say why each wrong option is wrong — read them even when you are right.",
    items: [
      { id: "sc1", type: "mcq", badge: "SC1-1",
        title: "SC1-1", tag: "Section check",
        prompt: "Which group is a primary user of general-purpose financial statements?",
        options: [
          { text: "The company's managers",
            why: "Managers can get internal information, so they are not primary users." },
          { text: "The company's internal auditors",
            why: "Internal auditors work inside the company and use internal records." },
          { text: "The company's board of directors",
            why: "The board directs the company and can demand internal reports." },
          { text: "Existing and potential lenders", correct: true,
            why: "The primary users are existing and potential investors, lenders and other creditors." }
        ],
        traps: ["primary-user"] },

      { id: "sc2", type: "mcq", badge: "SC1-2",
        title: "SC1-2", tag: "Section check",
        prompt: "Information helps an investor forecast next year's cash flows. This information has:",
        options: [
          { text: "predictive value", correct: true,
            why: "Predictive value is part of relevance: the information helps users predict the future." },
          { text: "verifiability",
            why: "Verifiability means independent people could agree on the amount." },
          { text: "comparability",
            why: "Comparability means users can compare companies or periods." },
          { text: "timeliness",
            why: "Timeliness means the information arrives in time to affect the decision." }
        ] }
    ] }
  ]
};
