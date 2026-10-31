/* Term bank — every term in Chapter 1, English and Arabic, with pronunciation.
   Two drills in both directions, a production drill, and the full searchable
   table. The book's 54 Term Bridge rows plus the 26 terms it defines in prose. */
(function () {
  var T = window.TERMS;
  var bridged = T.all.filter(function (t) { return t.bridge; });

  window.PAGE = {
    id: "terms", kind: "back", up: "../",
    eyebrow: "Chapter 1 · Term bank",
    title: "Term bank · " + T.count + " terms",
    crumb: "Term bank",
    question: "Every term in the chapter, in both languages, with a drill in each direction.",
    blocks: [

    { type: "prose", html:
      "<p>The chapter's eight Term Bridge boxes hold <strong>" + bridged.length + " rows</strong>, reproduced here " +
      "exactly as the book prints them. A further <strong>" + (T.count - bridged.length) + " terms</strong> are ones " +
      "the chapter defines in its prose without boxing them — the four enhancing qualities, the cost " +
      "constraint, stewardship, the ASU, the PCAOB, comprehensive income and the rest. All " + T.count +
      " are drilled here.</p>" +
      "<p>Every term has a 🔊 icon in <strong>both</strong> languages. The exam is in English, and an " +
      "accountant who has only ever read these terms can be hard to follow when they say them aloud — so use " +
      "the English speaker as much as the Arabic one. If the Arabic icon is dimmed, your computer has no Arabic " +
      "voice installed; the note at the foot of the page says how to add one.</p>" +
      "<p><span id=\"page-progress\" class=\"page-progress\"></span></p>" },

    { type: "heading", text: "Drill 1 · English → Arabic (recognition)", anchor: "drill-en" },

    { type: "flashcards", id: "x01", badge: "01",
      title: "See the English exam term, choose the Arabic",
      tag: "Flashcards",
      instruction: "Twenty cards drawn at random from all " + T.count + " terms. Press Check Answers at any point to see where you are.",
      direction: "en-ar",
      count: 20,
      terms: T.all },

    { type: "heading", text: "Drill 2 · Arabic → English (production)", anchor: "drill-ar" },

    { type: "prose", html:
      "<p>This is the harder and more useful direction: you know the concept in Arabic, and the exam will ask for it " +
      "in English. <em class=\"sig\">This is the direction the exam actually tests.</em></p>" },

    { type: "flashcards", id: "x02", badge: "02",
      title: "See the Arabic, choose the English exam term",
      tag: "Flashcards",
      instruction: "Twenty cards, the other way round.",
      direction: "ar-en",
      count: 20,
      terms: T.all },

    { type: "heading", text: "Drill 3 · the terms most often confused", anchor: "drill-confused" },

    { type: "match", id: "x03", badge: "03",
      title: "The pairs this chapter warns you about",
      tag: "Matching",
      instruction: "Every one of these pairs is the subject of a False-Friend or Exam-Trap box somewhere in the chapter.",
      hint: "Drag the right term into each box. Two tiles belong to nothing here.",
      dropHint: "which term is it?",
      speakPrompt: false,
      pairs: [
        { a: "The gross amount from sales, before any expenses", b: "revenue",
          why: "Arabic إيراد. Do not say <em>income</em> when the question means revenue." },
        { a: "What remains after expenses", b: "net income",
          why: "Arabic صافي الدخل. French <em>résultat</em>." },
        { a: "Goods held for sale", b: "inventory",
          why: "Never <em>stock</em> in a CMA question — in U.S. English, stock means shares." },
        { a: "Ownership in the company", b: "common stock",
          why: "In U.S. English, stock means shares. This is the trap that runs the other way." },
        { a: "A contra account that reduces an asset", b: "allowance",
          why: "Arabic مخصص covers this AND a provision. An allowance reduces an asset." },
        { a: "A liability for an obligation the company owes", b: "provision",
          why: "Arabic مخصص again — but a provision is a liability, not an asset reduction." },
        { a: "The list that checks total debits equal total credits", b: "trial balance",
          why: "French <em>la balance</em>. Not the balance sheet." },
        { a: "Assets, liabilities and equity at one date", b: "balance sheet",
          why: "French <em>le bilan</em>. IFRS: statement of financial position." },
        { a: "Spreading a long-lived asset's cost over its years of use", b: "depreciation",
          why: "Arabic has استهلاك, اهتلاك and إهلاك by region. English has one word." }
      ],
      distractors: [
        { b: "charges", why: "French <em>charges</em> means expenses, but in English <em>charges</em> usually means fees. Avoid it." },
        { b: "reserve for bad debts", why: "Never use this phrase in a U.S. GAAP answer. The account is the allowance for credit losses." }
      ] },

    { type: "heading", text: "The eight Term Bridge boxes", anchor: "bridges" },

    { type: "prose", html:
      "<p>Each box exactly as the book prints it, for the section it belongs to.</p>" },

    { type: "bridge", title: "Section 1.1 · Who uses financial statements", rows: T.bridge("1.1") },
    { type: "bridge", title: "Section 1.2 · Elements and the accounting equation", rows: T.bridge("1.2") },
    { type: "bridge", title: "Section 1.3 · Double entry", rows: T.bridge("1.3") },
    { type: "bridge", title: "Section 1.4 · The accrual basis and matching", rows: T.bridge("1.4") },
    { type: "bridge", title: "Section 1.5 · Who writes the rules", rows: T.bridge("1.5") },
    { type: "bridge", title: "Section 1.6 · The four statements", rows: T.bridge("1.6") },

    { type: "heading", text: "Terms the chapter defines in its prose", anchor: "prose-terms" },

    { type: "prose", html:
      "<p>These " + (T.count - bridged.length) + " terms are not in a Term Bridge box, but the chapter defines and " +
      "uses every one of them — and several are directly examinable.</p>" },

    { type: "bridge", title: "Not boxed, but taught",
      rows: T.all.filter(function (t) { return !t.bridge; }) },

    { type: "prose", html:
      "<p class=\"fig-note\">The whole-book glossary, searchable, is at " +
      "<a href=\"../glossary.html\">Appendix A · Glossary</a>, and " +
      "<a href=\"../term-index.html\">Appendix B · Index of terms</a> points each term to the section that " +
      "defines it.</p>" }
    ]
  };
})();
