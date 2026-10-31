/* Mixed review — interleaved retrieval across all seven sections, re-shuffled on
   every visit, plus the trap counter. Interleaving and spacing are desirable
   difficulties: the point is that you do NOT know which section an item is from. */
(function () {
  var L = window.LEDGER, T = window.TERMS, is = L.is, bs = L.bs, sce = L.sce;

  /* Every named trap in the chapter, with where to go back to. */
  var TRAP_NAMES = {
    "primary-user": { label: "Who counts as a primary user", href: "s1-1.html",
      note: "Investors, lenders and other creditors. Managers are users but not primary users, because they can obtain internal information." },
    "fundamental-vs-enhancing": { label: "Fundamental versus enhancing qualities", href: "s1-1.html#useful",
      note: "Only relevance and faithful representation are fundamental. Comparability, verifiability, timeliness and understandability are enhancing." },
    "dividend-not-expense": { label: "A dividend is not an expense", href: "s1-2.html",
      note: "It reduces retained earnings as a distribution to owners, and never appears in the income statement." },
    "stock-means-shares": { label: "“Stock” means shares, not inventory", href: "s1-2.html",
      note: "In U.S. English and on the exam, stock means shares. The goods are always called inventory." },
    "financing-not-revenue": { label: "Money from owners or lenders is not revenue", href: "s1-3.html",
      note: "Issuing shares and borrowing are financing. Neither is income." },
    "equipment-not-expense": { label: "Buying an asset is not an expense today", href: "s1-3.html",
      note: "One asset becomes another. The cost becomes an expense later, through depreciation." },
    "contra-netting": { label: "Contra accounts sit with the asset they reduce", href: "s1-3.html",
      note: "Accumulated depreciation and the allowance for credit losses have credit balances but are not liabilities. Net them off, never add them." },
    "estihlak-depreciation": { label: "Three Arabic words, one English word", href: "s1-3.html",
      note: "استهلاك, اهتلاك and إهلاك are regional. In English, always say depreciation." },
    "allowance-vs-provision": { label: "Allowance versus provision", href: "s1-3.html",
      note: "Arabic مخصص covers both. An allowance reduces an asset; a provision is a liability. Never say “reserve for bad debts”." },
    "cash-not-trigger": { label: "Cash is not the trigger", href: "s1-4.html",
      note: "Cash received in advance is a liability; cash paid in advance is an asset. Matching is to revenues, not to cash." },
    "four-bodies": { label: "Four bodies, four jobs", href: "s1-5.html",
      note: "FASB writes U.S. GAAP; the SEC has legal authority; the PCAOB sets AUDITING standards; the IASB writes IFRS." }
  };

  window.PAGE = {
    id: "review", kind: "back", up: "../",
    eyebrow: "Chapter 1 · Mixed review",
    title: "Mixed review",
    crumb: "Mixed review",
    question: "Items from every section, interleaved, so you have to work out which idea applies before you apply it.",
    blocks: [

    { type: "prose", html:
      "<p>Everything above this page was organised by topic, which makes each exercise easier than it should be: " +
      "you always knew which idea to reach for. <em class=\"sig\">Here you do not.</em> The items below are drawn " +
      "from all seven sections and mixed together, and they re-shuffle every time you open the page or press " +
      "<strong>Try Again</strong>.</p>" +
      "<p>That feels harder, and it is meant to — working out <em>which</em> rule applies is most of what the " +
      "exam actually tests. Come back to this page a few days after finishing the chapter rather than straight " +
      "away. <span id=\"page-progress\" class=\"page-progress\"></span></p>" },

    { type: "traps", names: TRAP_NAMES },

    { type: "heading", text: "Mixed items", anchor: "items" },

    { type: "classify", id: "r01", badge: "01",
      title: "Sort twelve things that look alike",
      tag: "Interleaved",
      instruction: "Drawn from sections 1.1, 1.2, 1.3 and 1.4 at once. Nothing tells you which is which.",
      prompt: "Put each item in the right box. Two tiles belong in no box.",
      categories: [
        { id: "quality", label: "A quality of useful information" },
        { id: "element", label: "An element of the financial statements" },
        { id: "account", label: "An account that appears in a trial balance" },
        { id: "adjustment", label: "An accrual or deferral adjustment type" }
      ],
      items: [
        { name: "Materiality", cat: "quality", why: "Part of relevance — a fundamental quality (section 1.1)." },
        { name: "Timeliness", cat: "quality", why: "An enhancing quality (section 1.1)." },
        { name: "Comprehensive income", cat: "element", why: "One of the ten elements: the total change in equity from non-owner sources (section 1.2)." },
        { name: "Distributions to owners", cat: "element", why: "One of the ten elements (section 1.2)." },
        { name: "Allowance for credit losses", cat: "account", trap: "contra-netting",
          why: "A contra-asset account in the trial balance (sections 1.3 and 1.6)." },
        { name: "Dividends payable", cat: "account", why: "A liability account in the trial balance (section 1.6)." },
        { name: "Accumulated depreciation", cat: "account", trap: "contra-netting",
          why: "A contra-asset account in the trial balance (sections 1.3 and 1.6)." },
        { name: "Prepaid expense", cat: "adjustment", trap: "cash-not-trigger",
          why: "Cash paid before the expense is incurred — it creates an asset (section 1.4)." },
        { name: "Contract liability", cat: "adjustment", trap: "cash-not-trigger",
          why: "Cash received before the revenue is earned — it creates a liability (section 1.4)." },
        { name: "Accrued expense", cat: "adjustment",
          why: "The expense is incurred before cash is paid — it creates a liability (section 1.4)." }
      ],
      distractors: [
        { name: "FASB", why: "A standard setter, not a quality, element, account or adjustment (section 1.5)." },
        { name: "The cost constraint", why: "A constraint on reporting, not a quality of the information itself (section 1.1)." }
      ],
      traps: ["contra-netting", "cash-not-trigger"] },

    { type: "mcq", id: "r02", badge: "02",
      title: "Which one is NOT true?",
      tag: "Interleaved",
      prompt: "All of the following are true <strong>EXCEPT</strong>:",
      options: [
        { text: "A dividend declared reduces net income for the period.", correct: true,
          why: "This is the false one, so it is the answer. A dividend reduces retained earnings but is never an expense." },
        { text: "The FASB keeps all U.S. GAAP in the Accounting Standards Codification.",
          why: "True. The ASC is the single source of authoritative nongovernmental U.S. GAAP." },
        { text: "Accumulated depreciation has a credit balance but belongs with the assets.",
          why: "True. It is a contra-asset that reduces equipment to its net figure." },
        { text: "Only the balance sheet reports amounts at a single date.",
          why: "True. The other three statements cover a period." }
      ],
      traps: ["dividend-not-expense"] },

    { type: "mcq", id: "r03", badge: "03",
      title: "One transaction, four frameworks of thought",
      tag: "Interleaved",
      prompt: "On December 28, Orontes receives 60 in cash for pastries it will deliver in March, and on the same day it declares a dividend of 50 payable in February. What is the <strong>net effect</strong> on total liabilities at December 31?",
      options: [
        { text: "An increase of 110", correct: true,
          why: "The advance creates a contract liability of 60, and the declared dividend creates dividends payable of 50. Both are liabilities at December 31: 60 + 50 = 110." },
        { text: "An increase of 60",
          why: "That counts the customer advance but forgets that declaring a dividend creates a liability immediately." },
        { text: "An increase of 50",
          why: "That counts the dividend but treats the cash advance as revenue. Cash received before delivery is a liability." },
        { text: "An increase of 10",
          why: "The two do not net against each other — they are both liabilities and both increase the total." }
      ],
      traps: ["cash-not-trigger", "dividend-not-expense"] },

    { type: "equation", id: "r04", badge: "04",
      title: "A transaction you have not seen in this form",
      tag: "Interleaved",
      scenario: "Orontes pays 150 in cash to a supplier for olives it bought on credit last month.",
      lines: [
        { label: "Total assets", answer: "down", why: "Cash falls by 150. No other asset rises to replace it." },
        { label: "Total liabilities", answer: "down", why: "Accounts payable falls by 150: the obligation is settled." },
        { label: "Total equity", answer: "none", why: "Nothing touches equity. The expense was recorded when the olives were bought." },
        { label: "Net income", answer: "none", why: "No expense arises now — this only settles an existing liability." },
        { label: "Cash", answer: "down", why: "An operating outflow of 150." }
      ],
      note: "Assets −150 = liabilities −150 + equity 0. The equation holds." },

    { type: "number", id: "r05", badge: "05",
      title: "Five figures, no exhibit",
      tag: "Interleaved",
      instruction: "From memory if you can. This is retrieval, not reading.",
      prompt: "Barada Wholesale, December 31, 2025.",
      unit: "USD 000",
      fields: [
        { key: "gp", label: "Gross profit", answer: is.grossProfit, explain: "3,100 − 1,860." },
        { key: "ni", label: "Net income", answer: is.netIncome, explain: "420 operating income less 90 interest.",
          diagnostics: [{ value: 420, says: "That is operating income. Interest expense of 90 still comes off." }] },
        { key: "ca", label: "Total current assets", answer: bs.currentAssets,
          explain: "Cash 1,050 + receivables net 280 + inventory 420 + prepaid rent 24.",
          diagnostics: [{ value: 1794, says: "That adds the allowance back instead of subtracting it." }] },
        { key: "re", label: "Closing retained earnings", answer: sce.reClosing, explain: "1,000 + 330 − 50.",
          diagnostics: [{ value: 1330, says: "That forgets the dividend declared." }] },
        { key: "ta", label: "Total assets", answer: bs.totalAssets, explain: "1,774 + 4,236.",
          diagnostics: [
            { value: 6030, says: "That ignores the allowance for credit losses." },
            { value: 6910, says: "That ignores accumulated depreciation." }
          ] }
      ] },

    { type: "match", id: "r06", badge: "06",
      title: "Twelve terms from across the chapter",
      tag: "Term bridge",
      instruction: "A random twelve from the whole chapter's " + T.count + " terms, re-drawn on every Try Again.",
      hint: "Drag the Arabic term into the box beside its English exam term. Two tiles belong to terms not listed.",
      dropHint: "drop the Arabic term here",
      pairs: (function () {
        var pool = T.all.slice();
        for (var i = pool.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1)), t = pool[i]; pool[i] = pool[j]; pool[j] = t;
        }
        return pool.slice(0, 12).map(function (t) { return { a: t.en, b: t.ar, why: t.gloss + " (section " + t.sec + ")" }; });
      })(),
      distractors: [
        { b: "النسبة الجارية (نسبة التداول)",
          why: "The current ratio — a measure, and it may or may not be among the twelve terms drawn this time." },
        { b: "رأس المال العامل",
          why: "Working capital — again, a measure rather than one of the drawn terms." }
      ] },

    { type: "classify", id: "r07", badge: "07",
      title: "Does it change net income, cash, both, or neither?",
      tag: "Interleaved",
      instruction: "The hardest sort in the chapter, because it needs the accrual basis and the cash-flow categories at once.",
      prompt: "Sort each of the twelve Orontes transactions from January and February.",
      categories: [
        { id: "ni-only", label: "Net income only" },
        { id: "cash-only", label: "Cash only" },
        { id: "both", label: "Both net income and cash" },
        { id: "neither", label: "Neither" }
      ],
      items: [
        { name: "Sell olive oil on credit (revenue 300, cost 180)", cat: "ni-only",
          why: "Net income rises 120; no cash moves until the customer pays." },
        { name: "Accrue interest of 4 not yet paid", cat: "ni-only",
          why: "An expense of February reduces net income; the cash has not left." },
        { name: "Issue shares for 1,500 cash", cat: "cash-only",
          why: "Cash rises; it is financing, so net income is untouched." },
        { name: "Borrow 800 on a note", cat: "cash-only", why: "Cash rises; financing, not income." },
        { name: "Buy the bottling line for 1,200 cash", cat: "cash-only",
          why: "Cash falls; the cost sits in equipment and becomes expense later through depreciation." },
        { name: "Pay a supplier 150 for last month's olives", cat: "cash-only",
          why: "Cash falls and the liability falls. The expense was recorded last month." },
        { name: "Collect 200 from a customer", cat: "cash-only",
          why: "Cash rises, the receivable falls. The revenue was recorded on delivery." },
        { name: "Pay 24 for twelve months of rent in advance", cat: "cash-only",
          why: "Cash falls and an asset is created. It becomes expense month by month." },
        { name: "Receive 60 in advance for March pastries", cat: "cash-only",
          why: "Cash rises and a liability is created. No revenue until delivery." },
        { name: "Pay the 50 dividend declared in January", cat: "cash-only",
          why: "Cash falls and the liability falls. Retained earnings fell back in January, and it was never an expense." },
        { name: "Pay January wages of 40 in cash", cat: "both",
          why: "An expense reduces net income AND cash leaves. Few transactions do both." },
        { name: "Declare a dividend of 50 payable next month", cat: "neither", trap: "dividend-not-expense",
          why: "A liability appears and retained earnings fall, but net income does not change and no cash moves." }
      ],
      distractors: [
        { name: "Prepare the trial balance",
          why: "A bookkeeping step, not a transaction. It changes nothing." }
      ],
      traps: ["dividend-not-expense", "cash-not-trigger"] },

    { type: "selfex", id: "r08", badge: "08",
      title: "Teach the chapter in five sentences",
      tag: "Explain it",
      prompt: "A colleague is about to start Chapter 1. In five sentences, tell them what the chapter is actually about and the one trap you most want them to avoid.",
      placeholder: "Chapter 1 is about…",
      checklist: [
        "Did you say the chapter teaches the ENGLISH of accounting you already know, not the accounting itself?",
        "Did you mention the primary users: investors, lenders and other creditors?",
        "Did you state the accounting equation?",
        "Did you say revenue is recorded when earned and expenses when incurred, not when cash moves?",
        "Did you name a specific trap — the dividend, the contra accounts, or the four bodies?"
      ],
      model: "Chapter 1 does not teach you accounting — you already know it. It teaches you " +
        "<strong>the English words the CMA exam uses</strong>, the way U.S. rules organise them, and how to read " +
        "an exam question precisely. The statements are written for <strong>investors, lenders and other " +
        "creditors</strong>; managers are not primary users because they can get internal reports. Everything is " +
        "held together by <strong>assets = liabilities + equity</strong>, recorded with equal debits and credits. " +
        "Revenue is recorded <strong>when it is earned and expenses when they are incurred</strong>, so the date of " +
        "the cash almost never decides the period. The trap I would warn them about most is the " +
        "<strong>contra accounts</strong>: accumulated depreciation and the allowance for credit losses have credit " +
        "balances but belong with the assets they reduce, and forgetting to net them off is how you get 6,910 or " +
        "7,850 instead of 6,010." },

    { type: "prose", html:
      "<p class=\"fig-note\"><strong>Come back to this page.</strong> Retrieval practice works better spread out " +
      "than crammed, so the most useful thing you can do with this page is close it now and open it again in a few " +
      "days. The items will be in a different order and the term drill will draw a different twelve. The full " +
      "<a href=\"answers.html\">answer section</a> is there whenever you want to read the reasoning rather than " +
      "produce it.</p>" }
    ]
  };
})();
