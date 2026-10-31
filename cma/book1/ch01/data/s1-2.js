/* Section 1.2 — The building blocks: elements and the accounting equation.
   Covers all ten elements, A = L + E, F01-03, contributed capital and retained
   earnings, the retained-earnings drivers with the dividend rule, the IFRS
   Contrast, all four False-Friend bullets, the 14-row Term Bridge, SC2-1, SC2-2. */
window.PAGE = {
  id: "s1-2", kind: "section", n: "1.2", up: "../",
  title: "The building blocks: elements and the accounting equation",
  crumb: "Section 1.2",
  question: "What are the ten elements of the financial statements, and how does the accounting equation hold them together?",
  los: ["A.1.e"],
  blocks: [

  { type: "prose", html:
    "<p>Every amount in the financial statements belongs to an <span class=\"defn\">element</span>. The FASB " +
    "conceptual framework defines <em class=\"sig\">ten elements</em>. Three of them describe the balance sheet at " +
    "one date.</p>" +
    "<ul>" +
    "<li>An <span class=\"defn\">asset</span> is a present right of an entity to an economic benefit. Examples: " +
    "cash, accounts receivable, inventory and equipment.</li>" +
    "<li>A <span class=\"defn\">liability</span> is a present obligation of an entity to transfer an economic " +
    "benefit. Examples: accounts payable, notes payable and wages payable.</li>" +
    "<li><span class=\"defn\">Equity</span> is the residual interest in the assets after the liabilities are " +
    "deducted. It is the owners' claim.</li>" +
    "</ul>" +
    "<p>The other elements describe changes during a period.</p>" +
    "<ul>" +
    "<li><span class=\"defn\">Revenues</span> and <span class=\"defn\">expenses</span> come from the company's " +
    "<em class=\"sig\">central, ongoing operations</em>. When Orontes sells olive oil, it earns revenue. When it " +
    "pays plant workers, it has an expense.</li>" +
    "<li><span class=\"defn\">Gains</span> and <span class=\"defn\">losses</span> come from " +
    "<em class=\"sig\">peripheral or incidental</em> events. If Orontes sells an old delivery truck for more than " +
    "its carrying amount, it has a gain.</li>" +
    "<li><span class=\"defn\">Investments by owners</span>, such as buying new shares, increase equity. " +
    "<span class=\"defn\">Distributions to owners</span>, such as dividends, decrease equity.</li>" +
    "<li><span class=\"defn\">Comprehensive income</span> is the total change in equity from sources other than " +
    "owners. You will meet it in Chapters 3 and 15.</li>" +
    "</ul>" },

  { type: "classify", id: "x01", badge: "01",
    title: "The ten elements: at a date, or during a period?",
    tag: "Drag and drop",
    instruction: "Three elements describe the balance sheet at one date. The other seven describe changes during a period.",
    prompt: "Sort all ten elements. Two tiles are not elements at all.",
    categories: [
      { id: "date", label: "Describes the balance sheet at one date", hint: "exactly three" },
      { id: "period", label: "Describes a change during a period", hint: "the other seven" }
    ],
    items: [
      { name: "Asset", cat: "date", why: "A present right to an economic benefit, held at the balance sheet date." },
      { name: "Liability", cat: "date", why: "A present obligation to transfer an economic benefit, owed at the date." },
      { name: "Equity", cat: "date", why: "The residual interest in the assets after deducting liabilities, at the date." },
      { name: "Revenue", cat: "period", why: "An inflow from central, ongoing operations during the period." },
      { name: "Expense", cat: "period", why: "An outflow from central, ongoing operations during the period." },
      { name: "Gain", cat: "period", why: "An increase from a peripheral or incidental event during the period." },
      { name: "Loss", cat: "period", why: "A decrease from a peripheral or incidental event during the period." },
      { name: "Investments by owners", cat: "period", why: "Owners putting resources in during the period, which increases equity." },
      { name: "Distributions to owners", cat: "period", why: "Resources going out to owners during the period, which decreases equity." },
      { name: "Comprehensive income", cat: "period", why: "The total change in equity during the period from sources other than owners." }
    ],
    distractors: [
      { name: "Trial balance", why: "A bookkeeping list that checks debits equal credits. It is not an element of the financial statements." },
      { name: "Materiality", why: "A quality of useful information (part of relevance), not an element." }
    ] },

  { type: "match", id: "x02", badge: "02",
    title: "Match each element to the framework's definition",
    tag: "Matching",
    instruction: "The exam uses these definitions almost word for word. Learn the wording, not just the idea.",
    hint: "Drag the element name into the box beside its definition. Two names belong to no definition here.",
    dropHint: "which element is this?",
    speakPrompt: false,
    pairs: [
      { a: "A present right of an entity to an economic benefit.", b: "Asset",
        why: "Note the wording: a present RIGHT. Cash, receivables, inventory and equipment are examples." },
      { a: "A present obligation of an entity to transfer an economic benefit.", b: "Liability",
        why: "A present OBLIGATION. Payables, notes payable and wages payable are examples." },
      { a: "The residual interest in the assets after the liabilities are deducted.", b: "Equity",
        why: "Equity is a residual — it is what is left, which is why it is the owners' claim." },
      { a: "An inflow from the company's central, ongoing operations.", b: "Revenue",
        why: "Central and ongoing is what separates revenue from a gain." },
      { a: "An increase from a peripheral or incidental event.", b: "Gain",
        why: "Selling an old delivery truck above its carrying amount produces a gain, not revenue." },
      { a: "The total change in equity from sources other than owners.", b: "Comprehensive income",
        why: "Studied fully in Chapters 3 and 15." },
      { a: "Resources going out to owners, such as a dividend.", b: "Distributions to owners",
        why: "It decreases equity, and it is never an expense." }
    ],
    distractors: [
      { b: "Net income", why: "A performance measure, not one of the ten elements. It is revenue and gains less expenses and losses." },
      { b: "Contributed capital", why: "A part of equity (common stock plus APIC), not one of the ten defined elements." }
    ] },

  { type: "classify", id: "x03", badge: "03",
    title: "Central and ongoing, or peripheral and incidental?",
    tag: "Drag and drop",
    instruction: "This single distinction decides whether an amount is revenue/expense or a gain/loss.",
    prompt: "Sort each event for Orontes Foods, a producer of olive oil, tahini and frozen pastries.",
    categories: [
      { id: "central", label: "Central, ongoing → revenue or expense" },
      { id: "peripheral", label: "Peripheral, incidental → gain or loss" }
    ],
    items: [
      { name: "Selling olive oil to a supermarket", cat: "central",
        why: "Selling food is Orontes's central, ongoing operation, so this is revenue." },
      { name: "Paying the plant workers' wages", cat: "central",
        why: "A cost of the central operations, so it is an expense." },
      { name: "The cost of the goods that were sold", cat: "central",
        why: "Directly tied to the central revenue-earning activity, so it is an expense." },
      { name: "Selling an old delivery truck above its carrying amount", cat: "peripheral",
        why: "Orontes is not in the business of selling trucks, so the excess is a gain, not revenue." },
      { name: "Selling a surplus plot of land at a loss", cat: "peripheral",
        why: "An incidental disposal, so the shortfall is a loss, not an expense." }
    ],
    distractors: [
      { name: "Issuing new shares to owners", why: "Neither. Money from owners is an investment by owners — it is financing, not income of any kind." },
      { name: "Borrowing cash from a bank", why: "Neither. Money from a lender creates a liability. It is financing, not income." }
    ] },

  { type: "heading", text: "The accounting equation", anchor: "equation" },

  { type: "prose", html:
    "<p>The <span class=\"defn\">accounting equation</span> connects the three balance sheet elements:</p>" +
    "<p class=\"dc-mnemonic\">Assets = Liabilities + Equity</p>" +
    "<p>The equation <em class=\"sig\">always holds</em>, because creditors (liabilities) or owners (equity) " +
    "finance every asset. Equity has two main parts. <span class=\"defn\">Contributed capital</span> is what owners " +
    "paid in: common stock at its <span class=\"defn\">par value</span>, plus " +
    "<span class=\"defn\">additional paid-in capital</span> (APIC). <span class=\"defn\">Retained earnings</span> " +
    "(RE) are the past net income that the company kept instead of paying it out as dividends.</p>" },

  { type: "figure", figure: "equation", label: "Figure F01-03", anchor: "f01-03",
    caption: "The accounting equation A = L + E, with equity split into contributed capital and retained earnings. " +
      "Apply the January transactions and watch both sides move together." },

  { type: "prose", html:
    "<p>Look at the lower part of Figure F01-03. Revenues and gains increase retained earnings. Expenses and losses " +
    "decrease it. <em class=\"sig\">Dividends also decrease it, but a dividend is not an expense.</em> It is a " +
    "distribution to owners, so it never appears in the income statement.</p>" },

  { type: "classify", id: "x04", badge: "04",
    title: "Where does each amount sit inside equity?",
    tag: "Drag and drop",
    instruction: "Equity is not one number. The exam asks which part of equity an amount lands in.",
    prompt: "Orontes issues 100,000 shares of $1 par common stock for $15 per share, in cash, and later declares a dividend. Place each amount.",
    categories: [
      { id: "cs", label: "Common stock", hint: "par value only" },
      { id: "apic", label: "Additional paid-in capital", hint: "the amount above par" },
      { id: "re", label: "Retained earnings", hint: "profit kept, less dividends" }
    ],
    items: [
      { name: "100 — the par value of the shares issued", cat: "cs",
        why: "Common stock holds only the par value: 100,000 shares × $1 = 100 (USD 000)." },
      { name: "1,400 — the amount received above par", cat: "apic",
        why: "The excess over par goes to additional paid-in capital: 100,000 × ($15 − $1) = 1,400." },
      { name: "The net income of the period", cat: "re",
        why: "Net income is closed into retained earnings." },
      { name: "The dividend declared", cat: "re",
        why: "A dividend reduces retained earnings. It is a distribution to owners, not an expense, so it never touches net income." }
    ],
    distractors: [
      { name: "The 800 borrowed from Levant Commerce Bank",
        why: "Not equity at all. Borrowing creates a liability — notes payable." },
      { name: "The 1,200 cost of the new bottling line",
        why: "Not equity at all. That is an asset: equipment." }
    ] },

  { type: "classify", id: "x05", badge: "05",
    title: "What moves retained earnings?",
    tag: "Drag and drop",
    instruction: "Four things move retained earnings, and one of them is the classic exam trap.",
    prompt: "Sort each item by its effect on retained earnings.",
    categories: [
      { id: "up", label: "Increases retained earnings" },
      { id: "down", label: "Decreases retained earnings" },
      { id: "none", label: "Does not touch retained earnings" }
    ],
    items: [
      { name: "Revenues", cat: "up", why: "Revenues increase retained earnings through net income." },
      { name: "Gains", cat: "up", why: "Gains increase retained earnings through net income." },
      { name: "Expenses", cat: "down", why: "Expenses decrease retained earnings through net income." },
      { name: "Losses", cat: "down", why: "Losses decrease retained earnings through net income." },
      { name: "Dividends declared", cat: "down", trap: "dividend-not-expense",
        why: "A dividend decreases retained earnings — but it is NOT an expense, so it never appears in the income statement." },
      { name: "Issuing new common shares", cat: "none",
        why: "An investment by owners. It increases contributed capital, not retained earnings." },
      { name: "Borrowing from a bank", cat: "none",
        why: "It creates a liability. Equity does not change at all." }
    ],
    distractors: [
      { name: "Buying equipment for cash",
        why: "One asset becomes another. Neither total assets nor retained earnings change." },
      { name: "Collecting a receivable from a customer",
        why: "One asset becomes another. Revenue was already recorded when the goods were delivered." }
    ],
    traps: ["dividend-not-expense"] },

  { type: "mcq", id: "x06", badge: "06",
    title: "Exam trap · is a dividend an expense?",
    tag: "Exam trap",
    prompt: "The board of Orontes declares a cash dividend of 50. Which statement is correct?",
    options: [
      { text: "It reduces retained earnings but it is not an expense, so net income does not change.", correct: true,
        why: "A dividend is a distribution to owners. It reduces retained earnings and never appears in the income statement." },
      { text: "It is an expense of the period, so net income falls by 50.",
        why: "This is the trap. A dividend is a distribution to owners, not a cost of operating, so it is never an expense." },
      { text: "It reduces revenue by 50.",
        why: "A dividend has nothing to do with revenue. Revenue comes from selling goods and services to customers." },
      { text: "It has no effect on equity until it is paid.",
        why: "Retained earnings fall on the DECLARATION date, when the obligation arises — not when the cash is paid." }
    ],
    traps: ["dividend-not-expense"] },

  { type: "box", kind: "ifrs", title: "Same idea, different words", html:
    "<p>The IFRS Conceptual Framework (2018) defines an asset as a <strong>present economic resource controlled by " +
    "the entity as a result of past events</strong>. The idea is the same as in U.S. GAAP; only the wording is " +
    "different. IFRS also uses the word <strong>income</strong> for both revenue and gains, while U.S. GAAP keeps " +
    "revenues and gains apart.</p>" +
    "<p>You may also know these IFRS names: <strong>statement of financial position</strong> (balance sheet), " +
    "<strong>share capital</strong> (common stock) and <strong>share premium</strong> (additional paid-in capital).</p>" },

  { type: "match", id: "x07", badge: "07",
    title: "U.S. GAAP name ↔ IFRS name",
    tag: "IFRS contrast",
    instruction: "If you trained under IFRS, this is the translation you need most. The exam uses the U.S. names.",
    hint: "Drag the U.S. GAAP term into the box beside the IFRS term that means the same thing. Two U.S. terms have no IFRS partner here.",
    dropHint: "the U.S. GAAP name is…",
    speakPrompt: false,
    pairs: [
      { a: "statement of financial position", b: "balance sheet",
        why: "Same statement, different name. The exam says balance sheet." },
      { a: "share capital (ordinary shares)", b: "common stock",
        why: "Same item. U.S. GAAP holds only the par value in common stock." },
      { a: "share premium", b: "additional paid-in capital",
        why: "Both mean the amount received for shares above their par value." },
      { a: "income (covers revenue and gains together)", b: "revenue and gains kept apart",
        why: "IFRS uses one word, income, for both. U.S. GAAP separates revenues from gains, and the exam tests that split." }
    ],
    distractors: [
      { b: "trial balance", why: "A bookkeeping list, not a statement. Both frameworks use it and neither renames it." },
      { b: "materiality", why: "A quality of useful information. The name is the same in both frameworks." }
    ] },

  { type: "box", kind: "friend", title: "Words that look familiar", html:
    "<ul>" +
    "<li><strong>stock</strong> — In U.S. English, <em>stock</em> means shares: common stock, a stock dividend. " +
    "In French and British English, <em>stock</em> often means inventory. <strong>In a CMA question, inventory is " +
    "always inventory.</strong></li>" +
    "<li><strong>income</strong> and <strong>revenue</strong> — Arabic " +
    "<span class=\"ar\" lang=\"ar\" dir=\"rtl\">دخل</span> is not " +
    "<span class=\"ar\" lang=\"ar\" dir=\"rtl\">إيراد</span>. Revenue is the gross amount " +
    "from sales. Net income is what remains after expenses. Do not use <em>income</em> when the question means " +
    "<em>revenue</em>.</li>" +
    "<li><strong>résultat</strong> and <strong>charges</strong> — In French, <em>résultat</em> is the " +
    "profit or loss (net income), and <em>charges</em> are expenses. In English, <em>charges</em> usually means " +
    "fees.</li>" +
    "<li><strong>balance</strong> — In French, <em>la balance</em> is the trial balance. The balance sheet is " +
    "<em>le bilan</em>.</li>" +
    "</ul>" },

  { type: "classify", id: "x08", badge: "08",
    title: "False friends · say it the U.S. GAAP way",
    tag: "False friend",
    instruction: "Each tile is a word that means one thing in your first language and something else on the exam. Put each one with the U.S. GAAP term it must become.",
    prompt: "Which U.S. GAAP term does each familiar word actually point to?",
    categories: [
      { id: "inventory", label: "inventory", hint: "goods held for sale" },
      { id: "shares", label: "shares / common stock", hint: "ownership in the company" },
      { id: "netincome", label: "net income", hint: "what remains after expenses" },
      { id: "revenue", label: "revenue", hint: "the gross amount from sales" },
      { id: "expenses", label: "expenses", hint: "costs of operating" },
      { id: "trialbalance", label: "trial balance", hint: "the list that checks debits = credits" },
      { id: "balancesheet", label: "balance sheet", hint: "assets, liabilities and equity at a date" }
    ],
    items: [
      { name: "“stock” in British or French usage", cat: "inventory", trap: "stock-means-shares",
        why: "In British and French usage, stock often means inventory. In U.S. English and on the exam, stock means shares — so the GOODS must be called inventory." },
      { name: "“stock” in U.S. usage", cat: "shares", trap: "stock-means-shares",
        why: "In U.S. English, stock means shares: common stock, a stock dividend." },
      { name: "French “résultat”", cat: "netincome",
        why: "In French, résultat is the profit or loss for the period — net income in English." },
      { name: "Arabic دخل", cat: "netincome",
        why: "دخل is income, which in English points to NET income — not to إيراد (revenue). Do not use income when the question means revenue." },
      { name: "Arabic إيراد", cat: "revenue",
        why: "إيراد is revenue: the gross amount from sales, before expenses." },
      { name: "French “charges”", cat: "expenses",
        why: "In French, charges are expenses. In English, charges usually means fees — so do not translate it literally." },
      { name: "French “la balance”", cat: "trialbalance",
        why: "In French, la balance is the trial balance." },
      { name: "French “le bilan”", cat: "balancesheet",
        why: "Le bilan is the balance sheet. Note how easily la balance and le bilan cross over into English the wrong way." }
    ],
    distractors: [
      { name: "English “stockholder”",
        why: "A shareholder — an owner. Not a trap: it follows the U.S. meaning of stock, and it is not one of the words this box warns about." }
    ],
    traps: ["stock-means-shares"] },

  { type: "bridge", title: "Key words in this section", rows: window.TERMS.bridge("1.2") },

  { type: "match", id: "x09", badge: "09",
    title: "English ↔ Arabic · the terms of this section",
    tag: "Term bridge",
    instruction: "Fourteen terms. Use the 🔊 icons above to hear each one before you start.",
    hint: "Drag the Arabic term into the box beside its English exam term. Two Arabic tiles belong to terms from other sections.",
    dropHint: "drop the Arabic term here",
    pairs: window.TERMS.bridge("1.2").map(function (t) { return { a: t.en, b: t.ar, why: t.gloss }; }),
    distractors: [
      { b: "ميزان المراجعة",
        why: "This is the trial balance — section 1.3, not 1.2." },
      { b: "الإطار المفاهيمي",
        why: "This is the conceptual framework — section 1.5, not 1.2." }
    ] },

  { type: "number", id: "x10", badge: "10",
    title: "Solve the equation in both directions",
    tag: "Calculation",
    instruction: "The exam rearranges A = L + E and asks for whichever term is missing.",
    prompt: "Work out each missing figure. Equity is always the residual: assets less liabilities.",
    unit: "USD 000",
    fields: [
      { key: "a", label: "Assets 500, liabilities 320. Equity = ?", answer: 180,
        explain: "Equity = assets − liabilities = 500 − 320 = 180.",
        diagnostics: [
          { value: 820, says: "That adds liabilities to assets. Equity is the RESIDUAL after deducting liabilities, so subtract." },
          { value: 320, says: "That is the liabilities figure, not equity." },
          { value: 500, says: "That is total assets, not equity." }
        ] },
      { key: "b", label: "Liabilities 2,230, equity 3,780. Assets = ?", answer: 6010,
        explain: "Assets = liabilities + equity = 2,230 + 3,780 = 6,010. These are Barada's figures, which you build in section 1.7.",
        diagnostics: [
          { value: 1550, says: "That subtracts. Assets are financed by creditors AND owners, so the two are added." }
        ] },
      { key: "c", label: "Assets 900, equity 550. Liabilities = ?", answer: 350,
        explain: "Liabilities = assets − equity = 900 − 550 = 350." }
    ] },

  { type: "checkgroup", title: "Test yourself",
    note: "These are SC2-1 and SC2-2 from the book, with the explanation for every option.",
    items: [
      { id: "sc1", type: "mcq", badge: "SC2-1", title: "SC2-1", tag: "Section check",
        prompt: "Which item is an expense?",
        options: [
          { text: "A cash dividend paid to shareholders",
            why: "A dividend is a distribution to owners. It reduces retained earnings but is not an expense." },
          { text: "Wages paid to plant workers", correct: true,
            why: "Wages are a cost of the company's central operations, so they are an expense." },
          { text: "Repayment of a bank loan",
            why: "Repaying principal reduces a liability and an asset. No expense arises." },
          { text: "Purchase of a new bottling line",
            why: "A bottling line is an asset. Its cost becomes an expense later, through depreciation." }
        ],
        traps: ["dividend-not-expense"] },

      { id: "sc2", type: "mcq", badge: "SC2-2", title: "SC2-2", tag: "Section check",
        prompt: "A company has total assets of 500 and total liabilities of 320. What is its equity?",
        options: [
          { text: "180", correct: true, why: "Equity = assets − liabilities = 500 − 320 = 180." },
          { text: "320", why: "This is the liabilities figure, not equity." },
          { text: "500", why: "This is total assets, not equity." },
          { text: "820", why: "This adds liabilities to assets. Equity is the residual after deducting liabilities." }
        ] }
    ] }
  ]
};
