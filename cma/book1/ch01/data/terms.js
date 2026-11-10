/* Term bank — the chapter's 54 bridged terms, drilled in both directions.
   The terms the chapter defines in prose but does not bridge are listed in
   English only: no Arabic is invented for them. */
(function () {
  var T = window.TERMS;

  window.PAGE = {
    id: "terms", up: "../",
    title: "Term bank",
    /* the Brief carries the terms and what this page asks; this page has no
       prose of the author's to summarise and no mechanism to draw. */
    brief: {},
    scenes: [

    { id: "en-ar", kind: "flash",
      kicker: "Recognition",
      title: "English → Arabic",
      say: "Fifteen cards from the chapter's " + T.count + " terms. Use the 🔊 on every card.",
      direction: "en-ar", count: 15, terms: T.all },

    { id: "ar-en", kind: "flash",
      kicker: "The harder direction",
      title: "Arabic → English",
      say: "You know the idea in Arabic. The exam will ask for it in English — this is the direction it tests.",
      direction: "ar-en", count: 15, terms: T.all },

    { id: "confused", kind: "sort", board: "lanes",
      kicker: "The pairs the chapter warns about",
      title: "One idea, two languages, two different words",
      say: "Each of these is the subject of a False-Friend or an Exam Trap box in the chapter.",
      targets: [
        { id: "rev", label: "revenue", sub: "the gross amount from sales" },
        { id: "ni", label: "net income", sub: "what remains after expenses" },
        { id: "inv", label: "inventory", sub: "goods held for sale" },
        { id: "cs", label: "common stock", sub: "shares" }
      ],
      items: [
        { name: "إيراد", to: "rev", why: "Revenue: the gross amount from sales." },
        { name: "دخل", to: "ni", why: "Income — which points to NET income, not revenue." },
        { name: "French “résultat”", to: "ni", why: "The profit or loss for the period." },
        { name: "المخزون", to: "inv", why: "Inventory. In a CMA question, inventory is always inventory." },
        { name: "الأسهم العادية", to: "cs", why: "Common stock — shares, in U.S. English." }
      ],
      distractors: [
        { name: "French “charges”", why: "In French, charges are expenses. In English, charges usually means fees." },
        { name: "French “la balance”", why: "The trial balance, not the balance sheet (<em>le bilan</em>)." }
      ] },

    { id: "all", from: ["front/t:english-exam-ter"], kind: "termcards",
      kicker: "Reference",
      title: "Every term in the chapter",
      say: "The six Term Bridge boxes as the book gives them, then the terms it defines in its text only.",
      groups: [
        { label: "1.1", bilingual: true, rows: T.bridge("1.1") },
        { label: "1.2", bilingual: true, rows: T.bridge("1.2") },
        { label: "1.3", bilingual: true, rows: T.bridge("1.3") },
        { label: "1.4", bilingual: true, rows: T.bridge("1.4") },
        { label: "1.5", bilingual: true, rows: T.bridge("1.5") },
        { label: "1.6", bilingual: true, rows: T.bridge("1.6") },
        { label: "English only", bilingual: false, rows: T.englishOnly }
      ] }
    ]
  };
})();
