/* §1.4 The accrual basis and matching — six scenes.
   F01-07 becomes two year-strips with one sale token that lands in different
   years under the two bases; the four adjustment names are DERIVED from a 2x2
   rather than listed. */
(function () {
  var L = window.LEDGER, T = window.TERMS, d = L.decemberSale, m = L.money;

  window.PAGE = {
    id: "s1-4", n: "1.4", up: "../",
    title: "The accrual basis and the matching principle",
    terms: T.bridge("1.4"),
    scenes: [

    { id: "fig-f01-07", kind: "figure", file: "F01-07.png",
      label: "Figure F01-07.", caption: "Timeline of a December sale collected in January: accrual basis versus cash basis." },


    { id: "two", kind: "timeline2",
      kicker: "Figure F01-07",
      title: "One sale, two years",
      say: "Orontes ships on " + d.shipDate + " and invoices " + m(d.invoice) + "; the goods cost " +
        m(d.cost) + "; the customer pays on " + d.payDate + ". Drag the slider.",
      years: ["fiscal 2025", "fiscal 2026"],
      stops: [
        { when: "Before December 20, 2025",
          accrual: { text: "", at: 10 }, cash: { text: "", at: 10 },
          note: "The goods have not been delivered and no cash has been received. Neither basis records anything." },
        { when: d.shipDate,
          accrual: { text: "Revenue " + m(d.invoice) + " · cost " + m(d.cost), at: 30 },
          cash: { text: "", at: 30 },
          note: "<b>Accrual:</b> Orontes records the revenue and the cost of goods sold in fiscal 2025, the year it delivered the goods. The gross profit of " +
            m(d.grossProfit) + " belongs to 2025. <b>Cash basis:</b> nothing, because no cash has been received." },
        { when: "December 31, 2025 · year end",
          accrual: { text: "Gross profit " + m(d.grossProfit) + " in 2025", at: 44 },
          cash: { text: "nothing in 2025", at: 44 },
          note: "This is the difference: the same sale falls in a different <b>year</b> under the accrual basis and the cash basis." },
        { when: d.payDate,
          accrual: { text: "receivable → cash", at: 70 },
          cash: { text: "Revenue " + m(d.invoice) + " in 2026", at: 70 },
          note: "<b>Accrual:</b> the cash receipt only changes one asset (the receivable) into another asset (cash). " +
            "<b>Cash basis:</b> the revenue would fall in 2026, which is the wrong period." }
      ] },

    { id: "which", kind: "number",
      kicker: "The same sale, measured",
      title: "How much revenue falls in fiscal 2025?",
      say: "Under each basis. The fiscal year ends December 31.",
      traps: ["cash-not-trigger"],
      fields: [
        { label: "Accrual basis · revenue in fiscal 2025", answer: d.invoice,
          why: "Revenue is recorded when the goods are delivered, so the full " + m(d.invoice) + " falls in 2025.",
          diag: [{ v: 0, says: "That is cash-basis thinking. The cash timing does not decide the period." },
                 { v: d.grossProfit, says: "That is the gross profit, not the revenue." },
                 { v: d.cost, says: "That is the cost of goods sold, not the revenue." }] },
        { label: "Accrual basis · gross profit belonging to 2025", answer: d.grossProfit,
          why: "Revenue " + m(d.invoice) + " less cost of goods sold " + m(d.cost) + ". Both sides land in the same year — that is matching." },
        { label: "Cash basis · revenue in fiscal 2025", answer: 0,
          why: "Nothing, because the cash did not arrive until January 2026 — the wrong period.",
          diag: [{ v: d.invoice, says: "Under the CASH basis nothing is recorded until the cash arrives, in January 2026." }] }
      ] },

    { id: "routes", kind: "sort", board: "pipes",
      kicker: "The matching principle",
      title: "Three ways to apply it",
      say: "Record expenses in the same period as the revenues they help to produce. There are three ways to apply it.",
      source: "a cost arrives",
      targets: [
        { id: "cause", label: "Cause and effect", sub: "links directly to a sale" },
        { id: "alloc", label: "Systematic and rational allocation", sub: "helps many periods" },
        { id: "now", label: "Immediate recognition", sub: "no clear link to future revenue" }
      ],
      items: [
        { name: "Cost of goods sold", to: "cause",
          why: "The classic example: Orontes records it at the same time as the sales revenue." },
        { name: "Depreciation of the Amman bottling line", to: "alloc",
          why: "The line helps many periods, so depreciation spreads the cost over the years of use." },
        { name: "Advertising for a new product", to: "now",
          why: "No clear link to future revenue, so it is an expense when incurred." },
        { name: "Office salaries", to: "now", why: "A period cost with no clear link to a particular sale." },
        { name: "Rent for the head office", to: "now", why: "A period cost, recognized immediately." }
      ],
      distractors: [
        { name: "A cash dividend declared", why: "Not an expense at all, so matching never applies. It is a distribution to owners." },
        { name: "The 1,200 paid for the bottling line", why: "That purchase creates an asset. Only its depreciation is matched over the years of use." }
      ] },

    { id: "grid", kind: "sort", board: "grid2",
      kicker: "The four adjustments",
      title: "Fill the grid and it names itself",
      say: "Two questions decide every one of them: has the cash been received or paid, and who still owes what?",
      traps: ["cash-not-trigger"],
      revealOnCorrect: true,
      corner: "",
      cols: ["Orontes pays", "Orontes receives"],
      rows: ["Cash has ALREADY moved", "Cash has NOT moved yet"],
      targets: [
        { id: "c00", label: "", row: 0, col: 0, reveal: { name: "Prepaid expense", kind: "creates an ASSET" } },
        { id: "c01", label: "", row: 0, col: 1, reveal: { name: "Contract liability", kind: "creates a LIABILITY" } },
        { id: "c10", label: "", row: 1, col: 0, reveal: { name: "Accrued expense", kind: "creates a LIABILITY" } },
        { id: "c11", label: "", row: 1, col: 1, reveal: { name: "Accrued revenue", kind: "creates an ASSET" } }
      ],
      items: [
        { name: "Paid 12 months of warehouse rent in advance", to: "c00",
          why: "Cash paid before the expense is incurred: a <b>prepaid expense</b>, which is an asset. The company has paid for a future benefit." },
        { name: "A Dubai hotel group pays in advance for March pastries", to: "c01", trap: "cash-not-trigger",
          why: "Cash received before the revenue is earned: a <b>contract liability</b> (unearned revenue). The company must still deliver the goods." },
        { name: "Interest owed on the bank note, not yet paid", to: "c10",
          why: "The expense is incurred before cash is paid: an <b>accrued expense</b>, which is a liability." },
        { name: "Revenue earned before it is received or billed", to: "c11",
          why: "An <b>accrued revenue</b>, which is an asset. Studied in Chapter 11." }
      ],
      distractors: [
        { name: "Depreciation of the bottling line",
          why: "Not one of the four. Depreciation spreads the cost over the years of use." }
      ] },

    { id: "sc1", kind: "check", kicker: "SC4-1",
      title: "A customer pays 60 on December 28 for goods Orontes will deliver in January",
      say: "What does Orontes report at December 31?",
      traps: ["cash-not-trigger"],
      options: [
        { text: "A liability of 60", correct: true,
          why: "Cash increases, and Orontes owes the customer the goods. This is a contract liability (unearned revenue)." },
        { text: "Revenue of 60", why: "Revenue is not earned until the goods are delivered in January." },
        { text: "An asset of 60 and revenue of 60", why: "The cash asset is correct, but the credit is a liability, not revenue." },
        { text: "Nothing until the goods are delivered", why: "Cash has been received, so Orontes must record it now." }
      ] },

    { id: "sc2", kind: "check", kicker: "SC4-2",
      title: "Which cost is matched to revenue by cause and effect?",
      options: [
        { text: "Depreciation of the Amman bottling line",
          why: "Depreciation uses systematic and rational allocation over the years of use." },
        { text: "Advertising for a new product",
          why: "Advertising has no clear link to specific revenue, so it is recognized immediately." },
        { text: "Cost of goods sold", correct: true,
          why: "Cost of goods sold links directly to each sale, so it is recorded with the sales revenue." },
        { text: "Rent for the head office", why: "Head-office rent is a period cost, recognized immediately." }
      ] }
    ]
  };
})();
