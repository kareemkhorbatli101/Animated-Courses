/* Chapter 1 hub. Carries the chapter opener, F01-01 as the clickable roadmap,
   the Learning Outcome Statements table verbatim, the 16-row chapter key-terms
   table, the What You Already Know box, and the contents of all thirteen pages. */
(function () {
  var T = window.TERMS;

  window.PAGE = {
    id: "hub", kind: "hub", up: "../",
    eyebrow: "Part I · Foundations and the four financial statements · Chapter 1",
    title: "The Language and Framework of Financial Reporting",
    titleAr: "لغة التقارير المالية وإطارها",
    blocks: [

    { type: "prose", html:
      "<p>Financial reporting has its own language. You already know many of its ideas from your accounting studies " +
      "in Arabic or French. In this chapter you meet <em class=\"sig\">the English words that the CMA exam uses</em> " +
      "for those ideas, and you see how U.S. rules organize them.</p>" +
      "<p>We start with the people who read financial statements. Then we look at the building blocks of the " +
      "statements, the accounting equation, double entry and the accrual basis. We finish with the rule makers and " +
      "a first look at the four statements. Figure F01-01 is your map.</p>" },

    { type: "figure", figure: "roadmap", label: "Figure F01-01", anchor: "f01-01",
      caption: "Roadmap of Chapter 1: seven linked topics from users to the four financial statements. " +
        "Each box is a section — click one to open it. Boxes tick as you complete them." },

    { type: "heading", text: "Learning objectives", anchor: "objectives" },

    { type: "table", caption: "Official statements quoted from the ICMA Learning Outcome Statements (effective September 1, 2024)",
      head: ["LOS", "Official statement (ICMA, 2024)", "In plain words", "Depth here"],
      rows: [
        ["A.1.a", "identify the users of these financial statements and their needs",
         "Identify the users of financial statements and what each user needs.",
         "<strong>Full treatment</strong>"],
        ["A.1.b", "demonstrate an understanding of the purposes and uses of each statement",
         "State what each of the four financial statements is for.",
         "Overview <span class=\"los-tag\">full in Ch. 2–5</span>"],
        ["A.1.e", "identify how various financial transactions affect the elements of each of the financial statements and determine the proper classification of a given transaction",
         "Show how a transaction changes the accounting equation, and classify simple transactions.",
         "Introduction <span class=\"los-tag\">full in Ch. 2–5</span>"],
        ["A.2.z", "demonstrate an understanding of the matching principle with respect to revenues and expenses, and be able to apply it to a specific situation",
         "Explain the accrual basis and the matching principle.",
         "Introduction <span class=\"los-tag\">full in Ch. 11</span>"],
        ["Background", "Background for this book (not an ICMA learning outcome).",
         "Describe who sets U.S. GAAP and IFRS, and which rules the CMA exam uses.", "Background"]
      ],
      note: "The plain-words column restates the official statements in simpler English. The exam may test any outcome up to Level C." },

    { type: "box", kind: "know", title: "What you already know", html:
      "<p>You have studied accounting before, perhaps in Arabic or French. The ideas in this chapter are " +
      "<em>not new to you</em>: assets and liabilities, debit and credit, the trial balance. " +
      "<strong>Three things are new.</strong></p>" +
      "<ul>" +
      "<li><strong>The English names.</strong> Some are close to your language and some are not. The False-Friend " +
      "boxes warn you about words that look familiar but mean something else.</li>" +
      "<li><strong>The U.S. rules.</strong> The CMA exam uses U.S. GAAP. If you learned IFRS, most ideas are the " +
      "same, but some names and some rules differ. The IFRS Contrast boxes show where.</li>" +
      "<li><strong>The exam wording.</strong> CMA questions use exact terms, and one word can change the answer. " +
      "The Language Focus boxes help you read questions carefully.</li>" +
      "</ul>" },

    { type: "classify", id: "x01", badge: "01",
      title: "What is actually new to you in this chapter?",
      tag: "Warm-up",
      instruction: "A two-minute warm-up before you start. Nothing here is a trick.",
      prompt: "You already know the accounting. Sort each item by whether this chapter is teaching you something new, or giving an English name to something you can already do.",
      categories: [
        { id: "new", label: "Genuinely new on the CMA exam", hint: "the three things the box names" },
        { id: "known", label: "You already know this — only the English name is new" }
      ],
      items: [
        { name: "The English names for the terms", cat: "new",
          why: "The first of the three new things. Some are close to your language; the False-Friend boxes warn you about the ones that are not." },
        { name: "Which U.S. rules differ from IFRS", cat: "new",
          why: "The second new thing. Most ideas are the same, but some names and some rules differ — and Chapter 17 tests six differences." },
        { name: "How exam questions are worded", cat: "new",
          why: "The third new thing. One word — NOT, EXCEPT, MOST — changes the answer, so the Language Focus boxes matter." },
        { name: "That assets equal liabilities plus equity", cat: "known",
          why: "You know this already. Only the English wording is new." },
        { name: "That every entry has equal debits and credits", cat: "known",
          why: "You know this already. The chapter gives you the English vocabulary for it." },
        { name: "How to draw up a trial balance", cat: "known",
          why: "You know this already — the chapter just asks you to read one in English." }
      ],
      distractors: [
        { name: "Basic arithmetic",
          why: "Not something this chapter teaches at all. The calculations here are additions and subtractions." }
      ] },

    { type: "heading", text: "Key terms in this chapter", anchor: "key-terms" },

    { type: "prose", html:
      "<p>These sixteen terms recur throughout the chapter. Each one has a 🔊 icon in both languages — " +
      "the exam is in English, so being able to <em>say</em> these terms matters. The full chapter term bank, with " +
      "all " + T.count + " terms and a drill, is on the " +
      "<a href=\"terms.html\">Term bank</a> page.</p>" },

    { type: "bridge", title: "The sixteen chapter key terms", rows: T.keys() },

    { type: "heading", text: "The thirteen pages of this chapter", anchor: "contents" },

    { type: "prose", html:
      "<p>Seven numbered sections, then the chapter summary, the term bank, the practice set, the case question " +
      "in the exam's own item formats, a mixed review and the full answer section. " +
      "<span id=\"page-progress\" class=\"page-progress\"></span></p>" },

    { type: "contents" },

    { type: "prose", html:
      "<p class=\"fig-note\"><strong>How this works.</strong> Every exercise has <strong>Check Answers</strong> and " +
      "<strong>Try Again</strong>. Try Again re-shuffles the item rather than revealing the answer. When you are " +
      "wrong, the feedback begins with the reason for <em>the option you actually chose</em>, taken from the book's " +
      "own explanations. Your progress is saved in this browser on this computer, and no internet connection is " +
      "needed at any point.</p>" }
    ]
  };
})();
