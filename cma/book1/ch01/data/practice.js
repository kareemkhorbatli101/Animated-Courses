/* Practice P01–P16 — one question per screen, verbatim from the chapter,
   with the book's explanation for every option. Options shuffle on each render. */
(function () {
  var T = window.TERMS;
  function q(n, title, say, options, traps) {
    return { id: "p" + n, kind: "check", kicker: "P" + n, title: title, say: say,
             options: options, traps: traps };
  }

  window.PAGE = {
    id: "practice", up: "../",
    title: "Practice · P01–P16",
    terms: T.keys().slice(0, 8),
    scenes: [

    q("01", "The objective of general-purpose financial reporting",
      "It is to provide useful information mainly to:", [
      { text: "existing and potential investors, lenders and other creditors.", correct: true,
        why: "These are the primary users. They provide resources and cannot demand special reports." },
      { text: "the board of directors and senior management.",
        why: "Management can obtain internal information, so it is not a primary user." },
      { text: "government statisticians and tax authorities.",
        why: "Governments use the statements, but they are not the primary users named by the framework." },
      { text: "the company's employees and trade unions.",
        why: "Employees are users, but not the primary users named by the framework." }
    ], ["primary-user"]),

    q("02", "A bank is deciding whether to renew a five-year loan to Orontes",
      "Which information will the bank find MOST useful?", [
      { text: "The company's ability to generate cash to pay interest and repay principal", correct: true,
        why: "A lender's main question is repayment: can the borrower pay interest and principal on time?" },
      { text: "The highest and lowest share price during the year",
        why: "Share prices interest investors more than lenders and do not show repayment ability." },
      { text: "The number of products the company sells",
        why: "The product count does not show whether the company can repay the loan." },
      { text: "The names of the company's major shareholders",
        why: "Ownership details do not answer the lender's repayment question." }
    ]),

    q("03", "Two companies use the same accounting methods",
      "An analyst can therefore compare their results. This quality is called:", [
      { text: "comparability", correct: true,
        why: "Comparability lets users identify similarities and differences between companies or periods." },
      { text: "relevance", why: "Relevance means the information can make a difference to a decision." },
      { text: "verifiability", why: "Verifiability means independent observers could reach the same result." },
      { text: "faithful representation", why: "Faithful representation means complete, neutral and free from error." }
    ], ["fundamental-vs-enhancing"]),

    q("04", "A company issues common stock for cash",
      "What is the effect on the accounting equation?", [
      { text: "Assets increase and equity increases.", correct: true,
        why: "Cash (an asset) increases, and contributed capital (equity) increases by the same amount." },
      { text: "Assets increase and revenue increases.", why: "Selling shares is financing from owners, not revenue." },
      { text: "Assets increase and liabilities increase.",
        why: "Shares are equity, not debt. A liability arises only when the company borrows." },
      { text: "There is no effect on the equation.",
        why: "Both sides of the equation increase, so the equation changes but still balances." }
    ], ["financing-not-revenue"]),

    q("05", "The board declares a cash dividend payable next month",
      "What is the effect immediately after the declaration?", [
      { text: "Liabilities increase and equity decreases.", correct: true,
        why: "Declaring the dividend creates dividends payable (a liability) and reduces retained earnings." },
      { text: "Expenses increase and net income decreases.",
        why: "A dividend is a distribution to owners, not an expense." },
      { text: "Assets decrease and equity decreases.", why: "Cash decreases only on the payment date, next month." },
      { text: "There is no effect until the dividend is paid.",
        why: "The obligation exists from the declaration date, so it is recorded now." }
    ], ["dividend-not-expense"]),

    q("06", "Which transaction changes total assets but does NOT change total equity?", null, [
      { text: "Borrowing cash from a bank", correct: true,
        why: "Assets and liabilities both increase. Equity does not change." },
      { text: "Paying wages in cash", why: "Wages are an expense, so equity (retained earnings) also decreases." },
      { text: "Selling goods on credit at a profit", why: "A profitable sale increases equity through net income." },
      { text: "Buying equipment for cash", why: "One asset replaces another, so total assets do not change." }
    ]),

    q("07", "Assets 900, liabilities 350",
      "The company borrows 100 in cash and declares and pays a cash dividend of 40. What is total equity after these transactions?", [
      { text: "510", correct: true,
        why: "Equity starts at 550 (900 − 350). Borrowing does not change equity. The dividend reduces it by 40, so equity is 510." },
      { text: "450", why: "This is total liabilities after the loan (350 + 100), not equity." },
      { text: "550", why: "This ignores the dividend, which reduces retained earnings." },
      { text: "610", why: "This adds the loan to equity. A loan is a liability." }
    ]),

    q("08", "Which account normally has a debit balance?", null, [
      { text: "Prepaid rent", correct: true, why: "Prepaid rent is an asset, and assets have debit balances." },
      { text: "Accounts payable", why: "Accounts payable is a liability, with a credit balance." },
      { text: "Sales revenue", why: "Revenue increases equity, so it has a credit balance." },
      { text: "Additional paid-in capital", why: "APIC is equity, with a credit balance." }
    ]),

    q("09", "Accumulated depreciation is BEST described as:", null, [
      { text: "a contra-asset account with a credit balance.", correct: true,
        why: "It reduces the cost of equipment on the balance sheet and has a credit balance." },
      { text: "a liability for future asset replacement.", why: "The company owes nobody anything, so it is not a liability." },
      { text: "an expense of the current period.",
        why: "Depreciation expense is the period's charge; accumulated depreciation is the running total on the balance sheet." },
      { text: "a reduction of retained earnings.", why: "It reduces an asset, not equity directly." }
    ], ["contra-netting"]),

    q("10", "Orontes ships goods on December 20, 2025 and invoices 90",
      "The goods cost 54. The customer pays on January 15, 2026. The fiscal year ends December 31. How much revenue does Orontes report for fiscal 2025?", [
      { text: "90", correct: true, why: "Under the accrual basis, revenue is recorded when the goods are delivered, in 2025." },
      { text: "0", why: "This is cash-basis thinking. The cash timing does not decide the period." },
      { text: "36", why: "This is the gross profit (revenue minus cost), not the revenue." },
      { text: "54", why: "This is the cost of goods sold, not the revenue." }
    ], ["cash-not-trigger"]),

    q("11", "Which statement about the matching principle is correct?", null, [
      { text: "Expenses are recognized in the same period as the revenues they help to produce.", correct: true,
        why: "This is the definition of matching." },
      { text: "Expenses are recognized in the period in which they are paid.",
        why: "Payment timing does not decide when an expense is recognized." },
      { text: "Revenues are recognized in the period in which cash is received.",
        why: "Revenue is recognized when earned, not when cash is received." },
      { text: "All costs are capitalized as assets until related revenue is earned.",
        why: "Many costs (for example, advertising) are expensed immediately." }
    ], ["cash-not-trigger"]),

    q("12", "On February 10, Orontes pays 24 for 12 months of warehouse rent in advance",
      "How does the payment appear immediately after it is made?", [
      { text: "As an asset of 24", correct: true,
        why: "Prepaid rent is an asset: Orontes has paid for 12 months of future use." },
      { text: "As an expense of 24", why: "The benefit is in the future, so the cost becomes an expense month by month." },
      { text: "As a liability of 24", why: "This confuses a prepaid expense (asset) with unearned revenue (liability)." },
      { text: "It is not recorded until the end of the month.",
        why: "Cash has left the company, so the transaction must be recorded now." }
    ], ["cash-not-trigger"]),

    q("13", "Which statement explains why retained earnings changed during the year?", null, [
      { text: "The statement of changes in equity", correct: true,
        why: "It shows beginning retained earnings, net income, dividends and ending retained earnings." },
      { text: "The balance sheet", why: "The balance sheet shows only the ending balance at one date." },
      { text: "The statement of cash flows", why: "The statement of cash flows explains cash, not equity." },
      { text: "The income statement", why: "The income statement shows net income but not dividends or the opening balance." }
    ]),

    q("14", "Net income for the period flows directly into:", null, [
      { text: "retained earnings in the statement of changes in equity.", correct: true,
        why: "Net income is closed into retained earnings." },
      { text: "the cash balance on the balance sheet.",
        why: "Net income is not cash. The statement of cash flows explains the cash balance." },
      { text: "total liabilities.", why: "Net income belongs to the owners, so it goes to equity, not liabilities." },
      { text: "common stock.", why: "Common stock changes only when shares are issued or retired." }
    ]),

    q("15", "Which statement is TRUE?", null, [
      { text: "The SEC has legal authority over public company reporting and recognizes the FASB as the standard setter.", correct: true,
        why: "The SEC has the legal authority; the FASB sets the standards; the ASC holds U.S. GAAP." },
      { text: "The PCAOB writes U.S. GAAP for public companies.", why: "The PCAOB sets auditing standards." },
      { text: "The IASB writes U.S. GAAP for companies that also report under IFRS.", why: "The IASB writes IFRS only." },
      { text: "The ASC contains IFRS for U.S. companies.", why: "The ASC is U.S. GAAP. IFRS is a separate set of standards." }
    ], ["four-bodies"]),

    q("16", "A Jordanian company's IFRS statements show share premium of 400",
      "Under U.S. GAAP, the same item is called:", [
      { text: "additional paid-in capital.", correct: true,
        why: "Share premium and additional paid-in capital both mean the amount received above par value." },
      { text: "retained earnings.", why: "Retained earnings come from profits, not from issuing shares." },
      { text: "common stock.", why: "Common stock holds only the par value." },
      { text: "treasury stock.", why: "Treasury stock is the company's own shares that it bought back (Chapter 4)." }
    ])
    ]
  };
})();
