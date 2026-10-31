/* Section 1.4 — The accrual basis and the matching principle.
   Covers both bases, F01-07, the December sale with its gross profit, the three
   ways of applying matching, the four adjustment types and what each creates,
   the prepaid/contract-liability pair, the Exam Trap, the 5-row Term Bridge,
   SC4-1 and SC4-2. */
(function () {
  var L = window.LEDGER, d = L.decemberSale;

  window.PAGE = {
    id: "s1-4", kind: "section", n: "1.4", up: "../",
    title: "The accrual basis and the matching principle",
    crumb: "Section 1.4",
    question: "When should revenue and expense be recorded — and why is the date of the cash almost never the answer?",
    los: ["A.2.z"],
    blocks: [

    { type: "prose", html:
      "<p>When should a company record revenues and expenses? U.S. GAAP financial statements use the " +
      "<span class=\"defn\">accrual basis</span>. Under the accrual basis, a company records revenue " +
      "<em class=\"sig\">when it earns it</em> — that is, when it delivers the goods or services. It records " +
      "expenses <em class=\"sig\">when it incurs them</em>. " +
      "<strong>The timing of the cash does not decide the period.</strong></p>" +
      "<p>The <span class=\"defn\">cash basis</span> records items only when cash is received or paid. The cash " +
      "basis is simple, but it is <em class=\"sig\">not acceptable under U.S. GAAP</em>.</p>" +
      "<p>Figure F01-07 shows why the difference matters. On " + d.shipDate + ", Orontes ships olive oil to " +
      "GreenBasket Supermarkets and sends an invoice for " + L.money(d.invoice) + ". The goods cost Orontes " +
      L.money(d.cost) + ". GreenBasket pays on " + d.payDate + ".</p>" },

    { type: "figure", figure: "accrual", label: "Figure F01-07", anchor: "f01-07",
      caption: "Timeline of a December sale collected in January: accrual basis versus cash basis. " +
        "Move the slider and watch the same sale fall in a different year." },

    { type: "prose", html:
      "<p>Under the accrual basis, Orontes records the revenue and the cost of goods sold in fiscal " + d.accrualYear +
      ", the year it delivered the goods. The gross profit of " + L.money(d.grossProfit) + " belongs to " +
      d.accrualYear + ". In January, the cash receipt only changes one asset (the receivable) into another asset " +
      "(cash). Under the cash basis, the revenue would fall in " + d.cashBasisYear + ", " +
      "<em class=\"sig\">which is the wrong period</em>.</p>" },

    { type: "number", id: "x01", badge: "01",
      title: "The December sale, in both years",
      tag: "Calculation",
      instruction: "The same sale, measured under each basis. Only one of them is acceptable under U.S. GAAP.",
      prompt: "Orontes ships on " + d.shipDate + ", invoices " + L.money(d.invoice) + ", the goods cost " +
        L.money(d.cost) + ", and the customer pays on " + d.payDate + ". The fiscal year ends December 31.",
      unit: "USD 000",
      fields: [
        { key: "rev25", label: "Revenue reported in fiscal 2025 under the ACCRUAL basis", answer: d.invoice,
          explain: "Revenue is recorded when the goods are delivered, so the full " + L.money(d.invoice) + " falls in 2025.",
          diagnostics: [
            { value: 0, says: "That is cash-basis thinking. The cash timing does not decide the period." },
            { value: d.grossProfit, says: "That is the gross profit (revenue minus cost), not the revenue." },
            { value: d.cost, says: "That is the cost of goods sold, not the revenue." }
          ] },
        { key: "gp25", label: "Gross profit belonging to fiscal 2025", answer: d.grossProfit,
          explain: "Revenue " + L.money(d.invoice) + " less cost of goods sold " + L.money(d.cost) + " = " +
            L.money(d.grossProfit) + ". Both sides of the sale land in the same year, which is matching at work." },
        { key: "rev26", label: "Revenue reported in fiscal 2025 under the CASH basis", answer: 0,
          explain: "Under the cash basis nothing is recorded in 2025, because no cash arrived until January 2026 — the wrong period.",
          diagnostics: [
            { value: d.invoice, says: "Under the CASH basis, nothing is recorded until the cash arrives, which is January 2026." }
          ] }
      ] },

    { type: "equation", id: "x02", badge: "02",
      title: "What does the January collection actually change?",
      tag: "Effect",
      scenario: "On " + d.payDate + ", GreenBasket pays the " + L.money(d.invoice) + " it owes for goods Orontes delivered in December.",
      lines: [
        { label: "Total assets", answer: "none",
          why: "One asset becomes another: the receivable falls and cash rises by the same amount." },
        { label: "Total liabilities", answer: "none", why: "Nobody is owed anything new, and no obligation is settled." },
        { label: "Total equity", answer: "none", why: "Equity moved in December, when the revenue was earned." },
        { label: "Net income", answer: "none",
          why: "The revenue was already recognized in December, on delivery. Collecting the cash adds no income." },
        { label: "Cash", answer: "up", why: "Cash rises by " + L.money(d.invoice) + ". Only the cash line moves." }
      ],
      note: "This is the point of the accrual basis: the income statement already reported this sale. The collection is purely a balance sheet event." },

    { type: "heading", text: "The matching principle", anchor: "matching" },

    { type: "prose", html:
      "<p>The <span class=\"defn\">matching principle</span> says: <em class=\"sig\">record expenses in the same " +
      "period as the revenues they help to produce.</em> There are three ways to apply it.</p>" +
      "<ul>" +
      "<li><strong>Cause and effect.</strong> Some costs link directly to a sale. Cost of goods sold is the classic " +
      "example: Orontes records it at the same time as the sales revenue.</li>" +
      "<li><strong>Systematic and rational allocation.</strong> Some costs help many periods, such as a bottling " +
      "line. Depreciation spreads the cost over the years of use.</li>" +
      "<li><strong>Immediate recognition.</strong> Some costs have no clear link to future revenue, such as most " +
      "advertising and office salaries. They are expenses in the period in which they are incurred.</li>" +
      "</ul>" },

    { type: "classify", id: "x03", badge: "03",
      title: "Which way does matching apply?",
      tag: "Drag and drop",
      instruction: "SC4-2 asks this directly, and so does P11 in the practice set.",
      prompt: "Sort each cost by the way the matching principle applies to it.",
      categories: [
        { id: "cause", label: "Cause and effect", hint: "links directly to a specific sale" },
        { id: "systematic", label: "Systematic and rational allocation", hint: "helps many periods" },
        { id: "immediate", label: "Immediate recognition", hint: "no clear link to future revenue" }
      ],
      items: [
        { name: "Cost of goods sold", cat: "cause",
          why: "The classic example: it links directly to each sale, so it is recorded at the same time as the sales revenue." },
        { name: "Depreciation of the Amman bottling line", cat: "systematic",
          why: "The line helps many periods, so its cost is spread over the years of use." },
        { name: "Advertising for a new product", cat: "immediate",
          why: "Advertising has no clear link to specific revenue, so it is recognized immediately." },
        { name: "Office salaries", cat: "immediate",
          why: "A period cost with no clear link to a particular sale, so it is recognized immediately." },
        { name: "Rent for the head office", cat: "immediate",
          why: "A period cost, recognized immediately as it is incurred." }
      ],
      distractors: [
        { name: "A cash dividend declared on the shares",
          why: "Not an expense at all, so matching never applies to it. It is a distribution to owners." },
        { name: "The 1,200 paid for the bottling line itself",
          why: "That purchase is not an expense — it creates an asset. Only the DEPRECIATION of it is matched over the years of use." }
      ] },

    { type: "prose", html:
      "<p>The accrual basis creates four common types of adjustment. You met three of them in the February " +
      "transactions.</p>" },

    { type: "table", caption: "The four adjustment types",
      head: ["Type", "What happens", "Orontes example", "Creates"],
      rows: [
        ["Prepaid expense (deferral)", "Cash is paid before the expense is incurred.",
         "Rent paid in advance (February, row 3)", "<strong>an asset</strong>"],
        ["Contract liability, or unearned revenue (deferral)", "Cash is received before the revenue is earned.",
         "Hotel pays in advance (February, row 4)", "<strong>a liability</strong>"],
        ["Accrued expense", "The expense is incurred before cash is paid.",
         "Interest owed on the bank note (February, row 6)", "<strong>a liability</strong>"],
        ["Accrued revenue", "Revenue is earned before cash is received or billed.",
         "Studied in Chapter 11", "<strong>an asset</strong>"]
      ] },

    { type: "prose", html:
      "<p>Two of these names are important for the exam. A <span class=\"defn\">prepaid expense</span> is " +
      "<em class=\"sig\">an asset</em>: the company has paid for a future benefit. A " +
      "<span class=\"defn\">contract liability</span> (unearned revenue) is <em class=\"sig\">a liability</em>: " +
      "the company must still deliver the goods or services.</p>" },

    { type: "imagedrop", id: "x04", badge: "04",
      title: "Where does each adjustment land on the balance sheet?",
      tag: "Drag onto the statement",
      instruction: "Cash paid in advance is an asset. Cash received in advance is a liability. The exam trades on confusing the two.",
      figure: "adjustments",
      prompt: "Drag each adjustment type onto the side of the balance sheet it creates.",
      items: [
        { name: "Prepaid expense", zone: "adj.asset", trap: "cash-not-trigger",
          why: "An ASSET. Cash was paid before the expense was incurred, so the company has paid for a future benefit — Orontes's twelve months of warehouse rent." },
        { name: "Contract liability (unearned revenue)", zone: "adj.liability", trap: "cash-not-trigger",
          why: "A LIABILITY. Cash was received before the revenue was earned, so the company still owes the goods — the Dubai hotel group's pastries." },
        { name: "Accrued expense", zone: "adj.liability",
          why: "A LIABILITY. The expense is incurred before cash is paid — the interest Orontes owes on the bank note at February 28." },
        { name: "Accrued revenue", zone: "adj.asset",
          why: "An ASSET. Revenue is earned before cash is received or even billed. Chapter 11 covers it." }
      ],
      distractors: [
        { name: "Depreciation expense",
          why: "Not one of the four deferral/accrual adjustment types in this table. It is an allocation of a cost already capitalised as an asset." }
      ],
      traps: ["cash-not-trigger"] },

    { type: "match", id: "x05", badge: "05",
      title: "Adjustment type ↔ what it means",
      tag: "Matching",
      instruction: "Exam questions describe the timing and ask you to name the item.",
      hint: "Drag the name of the adjustment into the box beside its description. Two names belong to no description here.",
      dropHint: "which adjustment is this?",
      speakPrompt: false,
      pairs: [
        { a: "Cash is paid before the expense is incurred.", b: "Prepaid expense",
          why: "It creates an asset. Orontes paid twelve months of warehouse rent in advance." },
        { a: "Cash is received before the revenue is earned.", b: "Contract liability (unearned revenue)",
          why: "It creates a liability. The Dubai hotel group paid in February for March pastries." },
        { a: "The expense is incurred before cash is paid.", b: "Accrued expense",
          why: "It creates a liability. Orontes owed interest at February 28 and had not paid it." },
        { a: "Revenue is earned before cash is received or billed.", b: "Accrued revenue",
          why: "It creates an asset. Chapter 11 studies it." }
      ],
      distractors: [
        { b: "Dividends payable", why: "A liability, but it arises from declaring a dividend — not from an accrual or deferral adjustment." },
        { b: "Accumulated depreciation", why: "A contra-asset. It is the running total of depreciation, not one of the four adjustment types." }
      ] },

    { type: "box", kind: "trap", title: "Cash is not the trigger", html:
      "<ul>" +
      "<li><strong>Cash received in advance is a liability, not revenue.</strong></li>" +
      "<li><strong>Cash paid in advance is an asset, not an expense.</strong></li>" +
      "<li><strong>Matching means matching expenses to revenues, not to cash payments.</strong></li>" +
      "</ul>" },

    { type: "mcq", id: "x06", badge: "06",
      title: "Exam trap · what does the cash tell you?",
      tag: "Exam trap",
      prompt: "On December 28, a Dubai hotel group pays Orontes 60 in cash for pastries that Orontes will deliver in March. Which statement is correct at December 31?",
      options: [
        { text: "Orontes has a liability of 60, because it still owes the goods.", correct: true,
          why: "Cash received in advance is a contract liability (unearned revenue). The revenue is not earned until delivery." },
        { text: "Orontes has revenue of 60, because the cash has been received.",
          why: "This is the trap. Cash is not the trigger: revenue is earned on delivery, which happens in March." },
        { text: "Orontes records nothing, because the goods have not been delivered.",
          why: "Cash HAS been received, so the transaction must be recorded now — as an asset and a liability." },
        { text: "Orontes has an asset of 60 and revenue of 60.",
          why: "The cash asset is right, but the other side is a liability, not revenue." }
      ],
      traps: ["cash-not-trigger"] },

    { type: "mcq", id: "x07", badge: "07",
      title: "Exam trap · matched to what?",
      tag: "Exam trap",
      prompt: "Which statement about the matching principle is correct?",
      options: [
        { text: "Expenses are recognized in the same period as the revenues they help to produce.", correct: true,
          why: "This is the definition of matching." },
        { text: "Expenses are recognized in the period in which they are paid.",
          why: "Payment timing does not decide when an expense is recognized. That is cash-basis thinking." },
        { text: "Revenues are recognized in the period in which cash is received.",
          why: "Revenue is recognized when earned, not when cash is received." },
        { text: "All costs are capitalized as assets until the related revenue is earned.",
          why: "Many costs — advertising, office salaries, head-office rent — are expensed immediately." }
      ],
      traps: ["cash-not-trigger"] },

    { type: "bridge", title: "Key words in this section", rows: window.TERMS.bridge("1.4") },

    { type: "match", id: "x08", badge: "08",
      title: "English ↔ Arabic · the terms of this section",
      tag: "Term bridge",
      instruction: "Five terms, and two of them are the exam-critical pair.",
      hint: "Drag the Arabic term into the box beside its English exam term. Two Arabic tiles belong to terms from other sections.",
      dropHint: "drop the Arabic term here",
      pairs: window.TERMS.bridge("1.4").map(function (t) { return { a: t.en, b: t.ar, why: t.gloss }; }),
      distractors: [
        { b: "الأرباح المحتجزة",
          why: "This is retained earnings — section 1.2, not 1.4." },
        { b: "نظام القيد المزدوج",
          why: "This is the double-entry system — section 1.3, not 1.4." }
      ] },

    { type: "checkgroup", title: "Test yourself",
      note: "These are SC4-1 and SC4-2 from the book, with the explanation for every option.",
      items: [
        { id: "sc1", type: "mcq", badge: "SC4-1", title: "SC4-1", tag: "Section check",
          prompt: "On December 28, a customer pays Orontes 60 for goods that Orontes will deliver in January. What does Orontes report at December 31?",
          options: [
            { text: "A liability of 60", correct: true,
              why: "Cash increases, and Orontes owes the customer the goods. This is a contract liability (unearned revenue)." },
            { text: "Revenue of 60", why: "Revenue is not earned until the goods are delivered in January." },
            { text: "An asset of 60 and revenue of 60", why: "The cash asset is correct, but the credit is a liability, not revenue." },
            { text: "Nothing until the goods are delivered", why: "Cash has been received, so Orontes must record it now." }
          ],
          traps: ["cash-not-trigger"] },

        { id: "sc2", type: "mcq", badge: "SC4-2", title: "SC4-2", tag: "Section check",
          prompt: "Which cost is matched to revenue by cause and effect?",
          options: [
            { text: "Depreciation of the Amman bottling line",
              why: "Depreciation uses systematic and rational allocation over the years of use." },
            { text: "Advertising for a new product",
              why: "Advertising has no clear link to specific revenue, so it is recognized immediately." },
            { text: "Cost of goods sold", correct: true,
              why: "Cost of goods sold links directly to each sale, so it is recorded with the sales revenue." },
            { text: "Rent for the head office",
              why: "Head-office rent is a period cost, recognized immediately." }
          ] }
      ] }
    ]
  };
})();
