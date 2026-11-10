/* Chapter 1, before you start — the chapter's FRONT MATTER as three exercises.
 *
 * WHY THIS PAGE EXISTS. The chapter opens with three things the book prints and the site
 * exercised nowhere: the roadmap F01-01, the Learning Outcome Statements table, and the
 * "What you already know" box. The first two were shown on the hub and asked nothing. The
 * third had a six-item warm-up written for it in `data/index.js` — a file loaded by NO page
 * in this chapter, not even _qa.html, so the exercise had never shipped and the provenance
 * lock had never audited it. `index.js` is gone; its warm-up is the first scene here.
 *
 * The hub keeps the roadmap and the LOS table as the reference they are. This page asks about
 * them, which is what gates/cma_coverage C1 requires of every artifact in the chapter.
 */
(function () {
  var T = window.TERMS;

  window.PAGE = {
    id: "opener", n: "◆", up: "../",
    title: "Before you start",
    terms: [],
    brief: {
      about: "Financial reporting has its own language. You already know many of its ideas from your accounting studies in Arabic or French. In this chapter you meet the English words that the CMA exam uses for those ideas, and you see how U.S. rules organize them.",
      read: [
        { h: "How this chapter is built",
          p: [
            "We start with the people who read financial statements. Then we look at the building blocks of the statements, the accounting equation, double entry and the accrual basis. We finish with the rule makers and a first look at the four statements. Figure F01-01 is your map."
          ]
        },
        { h: "What this chapter is tested on",
          p: [
            "The official statements are quoted from the ICMA Learning Outcome Statements (effective September 1, 2024). The plain-words column restates them in simpler English. The exam may test any outcome up to Level C."
          ]
        },
        { h: "What you already know", box: "know",
          p: [
            "You have studied accounting before, perhaps in Arabic or French. The ideas in this chapter are not new to you: assets and liabilities, debit and credit, the trial balance. Three things are new.",
            "The English names. Some are close to your language and some are not. The False-Friend boxes warn you about words that look familiar but mean something else.",
            "The U.S. rules. The CMA exam uses U.S. GAAP. If you learned IFRS, most ideas are the same, but some names and some rules differ. The IFRS Contrast boxes show where.",
            "The exam wording. CMA questions use exact terms, and one word can change the answer. The Language Focus boxes help you read questions carefully."
          ]
        }
      ],
      seal: { "warmup": ["What you already know"] }
    },
    scenes: [

    /* The warm-up written for the hub and never loaded by anything. It is the author's box
       turned into a decision: which of these is genuinely new, and which is a word you
       already have in another language. */
    { id: "warmup", from: ["front/what-you-already-know"], kind: "sort", board: "trays",
      kicker: "Before you start",
      title: "What is actually new to you in this chapter?",
      say: "You already know the accounting. Sort each one by whether the chapter gives you something new, or an English name for something you can already do.",
      targets: [
        { id: "new", label: "New on the CMA exam", sub: "the three things the box names" },
        { id: "known", label: "You already know this", sub: "only the English name is new" }
      ],
      items: [
        { name: "The English names for the terms", to: "new",
          why: "The English names. Some are close to your language and some are not. The False-Friend boxes warn you about words that look familiar but mean something else." },
        { name: "Which U.S. rules differ from IFRS", to: "new",
          why: "The U.S. rules. The CMA exam uses U.S. GAAP. If you learned IFRS, most ideas are the same, but some names and some rules differ. The IFRS Contrast boxes show where." },
        { name: "How exam questions are worded", to: "new",
          why: "The exam wording. CMA questions use exact terms, and one word can change the answer. The Language Focus boxes help you read questions carefully." },
        { name: "That assets equal liabilities plus equity", to: "known",
          why: "The ideas in this chapter are not new to you: assets and liabilities, debit and credit, the trial balance." },
        { name: "That every entry has equal debits and credits", to: "known",
          why: "The ideas in this chapter are not new to you: assets and liabilities, debit and credit, the trial balance." },
        { name: "Reading a trial balance", to: "known",
          why: "The ideas in this chapter are not new to you: assets and liabilities, debit and credit, the trial balance." }
      ],
      distractors: [
        { name: "Management accounting",
          why: "Not something this chapter teaches at all. Reporting for managers is management accounting, the subject of most of the CMA exam." }
      ] },

    /* F01-01. The roadmap was a navigation picture: seven boxes that link to the sections and
       tick as you finish them. Useful, and it asked nothing. Its content is the ORDER the
       chapter builds its topics in, and that order is the chapter's argument - users first,
       because the statements exist for them; then what the statements are made of; then how
       entries are recorded; then when; then who decides; then the four statements together. */
    { id: "roadmap", from: ["F01-01"], kind: "order",
      kicker: "Figure F01-01",
      title: "The seven topics, in the order the chapter builds them",
      say: "Each one needs the one before it. Put them in the chapter's own order.",
      items: [
        { text: "Who uses financial statements, and why", pos: 1,
          needs: "nothing: the statements are for these readers",
          why: "We start with the people who read financial statements." },
        { text: "The building blocks: elements and the accounting equation", pos: 2,
          needs: "a reader to report to",
          why: "Then we look at the building blocks of the statements, the accounting equation, double entry and the accrual basis." },
        { text: "Double entry: debits and credits", pos: 3,
          needs: "the elements and the equation",
          why: "Then we look at the building blocks of the statements, the accounting equation, double entry and the accrual basis." },
        { text: "The accrual basis and the matching principle", pos: 4,
          needs: "a way to record a transaction",
          why: "Then we look at the building blocks of the statements, the accounting equation, double entry and the accrual basis." },
        { text: "Who writes the rules? U.S. GAAP and IFRS", pos: 5,
          needs: "the rules it is about to name",
          why: "We finish with the rule makers and a first look at the four statements." },
        { text: "A first look at the four statements", pos: 6,
          needs: "everything above",
          why: "We finish with the rule makers and a first look at the four statements." },
        { text: "Extended Example 1A: from a trial balance to a set of statements", pos: 7,
          needs: "all six topics at once",
          why: "Figure F01-01 is your map." }
      ] },

    /* The LOS table. The chapter prints it verbatim on the hub and nothing asked about it -
       the only table in Chapter 1 with no exercise anywhere. What matters to a learner is not
       the code but the DEPTH column: which outcomes this chapter finishes and which it only
       introduces, because the second kind will be asked again at full depth later. */
    { id: "los", from: ["front/t:los-official-sta"], kind: "sort", board: "trays",
      kicker: "What this chapter is tested on",
      title: "How much of each outcome does Chapter 1 finish?",
      say: "Four of these are ICMA learning outcome statements and one is background for this book. The exam may test any outcome up to Level C.",
      targets: [
        { id: "full", label: "Full treatment here", sub: "Chapter 1 finishes it" },
        { id: "later", label: "Started here, finished later", sub: "full in a later chapter" },
        { id: "back", label: "Background for this book", sub: "not an ICMA learning outcome" }
      ],
      items: [
        { name: "Identify the users of financial statements and what each user needs", to: "full",
          why: "A.1.a — identify the users of these financial statements and their needs. Full treatment." },
        { name: "State what each of the four financial statements is for", to: "later",
          why: "A.1.b — demonstrate an understanding of the purposes and uses of each statement. Overview here, full in Chapters 2 to 5." },
        { name: "Show how a transaction changes the accounting equation", to: "later",
          why: "A.1.e — identify how various financial transactions affect the elements of each of the financial statements and determine the proper classification of a given transaction. Introduction here, full in Chapters 2 to 5." },
        { name: "Explain the accrual basis and the matching principle", to: "later",
          why: "A.2.z — demonstrate an understanding of the matching principle with respect to revenues and expenses, and be able to apply it to a specific situation. Introduction here, full in Chapter 11." },
        { name: "Describe who sets U.S. GAAP and IFRS, and which rules the CMA exam uses", to: "back",
          why: "Background for this book, not an ICMA learning outcome." }
      ],
      distractors: [
        { name: "Prepare the statement of cash flows",
          why: "Not one of the outcomes this chapter lists. The statement of cash flows is studied in Chapter 5." }
      ] }
    ]
  };
})();
