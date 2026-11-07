/* Unit 2 · Plans, Quotes and Promises — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u02-l1", unit: "u02", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words a quotation is made of, and say what each one commits you to",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words a quotation is made of", letter: "A",
        concepts: ["cost", "deadline"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words. Each one is a promise of a different size — say what each commits you to before you turn it over.",
        cards: [
          { term: "quotation", ar: "عرض سعر",
            meaning: "a written price for a stated job, which you are bound by",
            with: ["send a quotation", "a firm quotation", "the quotation expires"],
            why: "Often shortened to <i>a quote</i> in speech. Once sent, you cannot raise it inside its validity — which is why validity exists." },
          { term: "estimate", ar: "تقدير تقريبي",
            meaning: "an approximate price, not binding",
            with: ["a rough estimate", "an estimate only", "estimate the cost"],
            why: "The difference between this and a quotation is the whole of the risk. Say which one you are giving." },
          { term: "unit price", ar: "سعر الوحدة",
            meaning: "the price for one metre, one item, one kilo",
            with: ["the unit price", "price per unit", "unit price falls with volume"],
            why: "Always say what the unit is. <i>1,800</i> means nothing until you add <i>a metre</i>." },
          { term: "validity", ar: "مدة الصلاحية",
            meaning: "how long the price stays open",
            with: ["valid for thirty days", "the validity period", "the quote is no longer valid"],
            why: "A quotation without a validity is a price with no end date, and the cotton market will eventually make you regret it." },
          { term: "deposit", ar: "عربون",
            meaning: "part of the money, paid before the work starts",
            with: ["a 30% deposit", "pay a deposit", "the deposit is non-refundable"],
            why: "It is not a part payment of the price so much as a test of whether the order is real." },
          { term: "forecast", ar: "توقّع",
            meaning: "what you expect to happen, based on what you know",
            with: ["a sales forecast", "forecast demand", "the forecast was wrong"],
            why: "A forecast is not a promise, and the word carries that. Use it when you want to be understood as not committing." },
          { term: "commit", ar: "يلتزم",
            meaning: "to bind yourself to do something",
            with: ["commit to a date", "I cannot commit yet", "a firm commitment"],
            why: "<i>I cannot commit to that date yet</i> is one of the most useful sentences in this course. It refuses without refusing." },
          { term: "lead time", ar: "مدة التسليم",
            meaning: "the time between order and delivery",
            with: ["a four-week lead time", "quote a lead time", "the lead time has gone out"],
            why: "From Unit 1, and now it is something you promise rather than something you report." },
          { term: "penalty", ar: "غرامة تأخير",
            meaning: "money you owe if you miss an agreed date",
            with: ["a late-delivery penalty", "a penalty clause", "incur a penalty"],
            why: "Read these before you sign them. A penalty turns a lead time from an intention into a number on an invoice." }
        ],
        explain: { terms: [
          { en: "quotation", gloss: "a binding written price", ar: "عرض سعر" },
          { en: "estimate", gloss: "an approximate price, not binding", ar: "تقدير تقريبي" },
          { en: "validity", gloss: "how long the price stays open", ar: "مدة الصلاحية" },
          { en: "commit", gloss: "to bind yourself to something", ar: "يلتزم" }
        ] },
        after: "<p>Two of these nine are the ones that cause arguments: <b>quotation</b> and <b>estimate</b>. If you mean one, never write the other.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words a quotation is made of", letter: "B",
        concepts: ["word", "place"],
        kind: "match", task: null, n: 0,
        prompt: "The sales office in Damascus, where the quotations are written. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "An office: a wall with a window and a wall clock, a desk with a laptop and a telephone, a ring binder and a printed invoice on the desk, a filing shelf and a plant",
          parts: [
            { p: "wall",    x: 0,   y: 0,   sx: 10,  sy: 5.4 },
            { p: "floor",   x: 0,   y: 335, sx: 10,  sy: 2.3 },
            { p: "window",  x: 70,  y: 60,  s: 2.1 },
            { p: "clock",   x: 450, y: 70,  s: 0.7 },
            { p: "poster",  x: 640, y: 70,  s: 1.9 },
            { p: "shelf",   x: 840, y: 240, s: 1.6 },
            { p: "desk",    x: 120, y: 350, sx: 4.4, sy: 1.9 },
            { p: "laptop",  x: 180, y: 320, s: 1.1 },
            { p: "phone",   x: 330, y: 330, s: 0.7 },
            { p: "binder",  x: 420, y: 322, s: 0.9 },
            { p: "invoice", x: 520, y: 326, s: 0.85 },
            { p: "chair",   x: 240, y: 430, s: 1.2 },
            { p: "plant",   x: 700, y: 390, s: 1.3 }
          ] },
        pins: [
          { id: "p-window",  x: 13, y: 24, tx: 6,  ty: 7,  w: 120 },
          { id: "p-clock",   x: 47, y: 18, tx: 42, ty: 4,  w: 110 },
          { id: "p-laptop",  x: 22, y: 64, tx: 14, ty: 52, w: 120 },
          { id: "p-phone",   x: 36, y: 76, tx: 32, ty: 92, w: 120 },
          { id: "p-binder",  x: 50, y: 62, tx: 54, ty: 50, w: 120 },
          { id: "p-invoice", x: 64, y: 76, tx: 66, ty: 92, w: 120 },
          { id: "p-shelf",   x: 88, y: 50, tx: 88, ty: 32, w: 130 }
        ],
        pairs: [
          { word: "window",   pin: "p-window",  why: "also a period of time: <i>a delivery window</i> is the span inside which it will arrive." },
          { word: "clock",    pin: "p-clock",   why: "a quotation has one running too. That is what validity means." },
          { word: "laptop",   pin: "p-laptop",  why: "where the quotation is written. One word." },
          { word: "telephone", pin: "p-phone",  why: "usually shortened to <i>phone</i>. <i>To phone</i> is also a verb in British English." },
          { word: "ring binder", pin: "p-binder", why: "two words. Where signed quotations are kept, because a quotation is a document you may have to produce later." },
          { word: "invoice",  pin: "p-invoice", why: "the bill, sent after the goods go. A quotation comes before; an invoice comes after." },
          { word: "filing shelf", pin: "p-shelf", why: "<i>filing</i> from <i>to file</i>, to store a document where it can be found." }
        ],
        explain: { terms: [
          { en: "delivery window", gloss: "the span of time inside which goods will arrive", ar: "نافذة التسليم" },
          { en: "ring binder", gloss: "a folder with rings that hold punched paper", ar: "مُصنّف" },
          { en: "to file", gloss: "to store a document so it can be found again", ar: "يحفظ / يؤرشف" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Complete the quotation", letter: "A",
        concepts: ["cost", "write"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "A quotation going out this morning. Choose the word for each gap.",
        heading: "Quotation 2041 — Cedar Linens, Beirut",
        note: { kind: "words", title: "Before you start",
                body: "<p>Every gap has two words that both fit the grammar. Only one is the word a buyer would expect in a quotation — and in this document, the expected word is usually the binding one.</p>" },
        text: "Thank you for your enquiry. We are pleased to ___ for 1,200 metres of our light weight cotton. The ___ price is 1,650 Syrian pounds a metre, and this figure is ___ for thirty days from today. Our standard ___ time is four weeks from the order date. For a first order we ask for a ___ of thirty per cent, with the balance due thirty days after the invoice. We are not able to ___ to an earlier date until the yarn is confirmed.",
        gaps: [
          { options: ["quote", "estimate"], answer: "quote",
            why: "The document is headed <i>Quotation</i>. An estimate would not carry a validity period." },
          { options: ["unit", "total"], answer: "unit",
            why: "<i>1,650 a metre</i> is a price per unit. The total would be that figure times 1,200." },
          { options: ["valid", "available"], answer: "valid",
            why: "<i>Valid for thirty days</i> is the fixed phrase. <i>Available</i> would say the fabric exists, not that the price holds." },
          { options: ["lead", "delivery"], answer: "lead",
            why: "<i>Lead time</i> is the established pair. <i>Delivery time</i> is understood but reads as less precise." },
          { options: ["deposit", "discount"], answer: "deposit",
            why: "Money paid up front. A discount is money taken off, which is the opposite direction." },
          { options: ["commit", "promise"], answer: "commit",
            why: "<i>Commit to a date</i> is what a business says. <i>Promise</i> is warmer and vaguer, and a quotation is not the place for it." }
        ],
        explain: { terms: [
          { en: "balance", gloss: "the part of the money still owed", ar: "الرصيد المتبقّي" },
          { en: "due", gloss: "owed, and expected by a date", ar: "مستحقّ" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Complete the quotation", letter: "B",
        concepts: ["deadline", "risk"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The internal note that went round before the quotation was sent. Choose the word for each gap.",
        heading: "Note to the team",
        text: "I am ___ to send quotation 2041 this morning. Before I do, two things. The dyer has not confirmed the yarn, so I am not going to ___ a date earlier than four weeks whatever Beirut asks for. Second, I would ___ quote a validity of thirty days than sixty, because the cotton price is moving. If it falls we lose nothing, and if it ___ sharply we are not holding an old price for two months. My ___ for this client is two orders this year, but that is only a forecast. Do not treat it as a ___ .",
        gaps: [
          { options: ["going", "will"], answer: "going",
            why: "<i>I am going to send</i> — a decision already made, with the evidence in front of him. <i>I will send</i> would sound like he decided as he typed." },
          { options: ["commit", "estimate"], answer: "commit",
            why: "<i>Commit to a date</i> again. <i>Estimate a date</i> would be doing exactly what he is refusing to do." },
          { options: ["rather", "better"], answer: "rather",
            why: "<i>Would rather X than Y</i> — the whole structure needs <i>rather</i>. This unit's grammar." },
          { options: ["rises", "will rise"], answer: "rises",
            why: "After <i>if</i> about the future, English uses the present. Unit 7 is built on this; it appears here because a quotation cannot avoid it." },
          { options: ["forecast", "quotation"], answer: "forecast",
            why: "What he expects, not what he has promised. The next sentence tells you he means it that way." },
          { options: ["commitment", "deposit"], answer: "commitment",
            why: "<i>Do not treat it as a commitment</i> — the noun from the verb two gaps above." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices about prices and dates. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "FOUR NOTICES",
          blocks: [
            { h: "Sales office", lines: [
              "No quotation is to leave this office without a validity date on it.",
              "If you are unsure how long to give, ask before you send, not after." ] },
            { h: "Price list — cotton", lines: [
              "Prices shown are an estimate for budgeting only.",
              "A firm quotation will be issued on request for a stated quantity." ] },
            { h: "Dyeing — Homs", lines: [
              "The tank is back in service from Thursday.",
              "Work booked for this week has been moved, not cancelled." ] },
            { h: "To all sales staff", lines: [
              "A deposit of 30% applies to first orders only.",
              "Repeat clients are invoiced in full after dispatch." ] }
          ] },
        items: [
          { para: 1, q: "What must every quotation carry?",
            options: [
              { text: "A date showing how long the price holds.", correct: true,
                why: "<i>A validity date on it</i> — and the second line tells you to ask rather than guess." },
              { text: "The manager's signature.", why: "Not mentioned anywhere in the notice." },
              { text: "A deposit figure.", why: "Deposits are the fourth notice, and they apply only to first orders." } ] },
          { para: 2, q: "Can the prices on the list be relied on as a final price?",
            options: [
              { text: "No — they are only an estimate.", correct: true,
                why: "<i>An estimate for budgeting only</i>, and a firm quotation is offered as the separate thing." },
              { text: "Yes, for any quantity.", why: "The notice says the opposite in its first line." },
              { text: "Yes, but only for thirty days.", why: "Validity belongs to quotations. These are not quotations." } ] },
          { para: 3, q: "What happened to the work booked for this week?",
            options: [
              { text: "It was moved to a later date.", correct: true,
                why: "<i>Moved, not cancelled</i> — the notice anticipates the wrong assumption and blocks it." },
              { text: "It was cancelled.", why: "The notice rules this out explicitly." },
              { text: "It was done early.", why: "The tank was out of service, so nothing could be done early." } ] },
          { para: 4, q: "A client who has ordered from you twice before places a new order. What applies?",
            options: [
              { text: "They are invoiced in full after dispatch, with no deposit.", correct: true,
                why: "They are a repeat client, and the deposit is <i>first orders only</i>." },
              { text: "They pay a 30% deposit.", why: "That is the first-order rule, which no longer applies to them." },
              { text: "They pay in full before dispatch.", why: "The notice says after dispatch." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "approval"],
        kind: "build", task: null, n: 0,
        prompt: "The suffix <b>-ful</b> and the suffix <b>-less</b>. Drag each root into the box for the suffix it takes here.",
        note: { kind: "words", title: "Word building: -ful and -less",
                body: "<p><b>-ful</b> means <em>having it</em>: <em>care → careful</em>.<br><b>-less</b> means <em>without it</em>: <em>care → careless</em>.<br>Many roots take both and mean opposite things. A few take only one — there is no <em>successless</em>.</p>" },
        family: { word: "success", forms: [
          { part: "noun", word: "suc·CESS" },
          { part: "verb", word: "suc·CEED", note: "note the spelling changes" },
          { part: "adjective", word: "suc·CESS·ful", note: "two s, two c, one l" },
          { part: "adverb", word: "suc·CESS·ful·ly" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "Be <b>careful</b> with the validity date — a <b>careless</b> one costs money.",
            "The visit was <b>successful</b>, and her questions were <b>helpful</b>.",
            "It is <b>doubtful</b> that the dyer will be ready, so a firm date would be <b>useless</b> to them.",
            "A quotation with no quantity on it is <b>meaningless</b>." ] } ] },
        items: [
          { root: "care",    affix: "-ful",  answer: "careful",    why: "having care. <i>Careless</i> exists too and is its exact opposite." },
          { root: "success", affix: "-ful",  answer: "successful", why: "there is no <i>successless</i>. Some roots take only one of the two." },
          { root: "help",    affix: "-ful",  answer: "helpful",    why: "<i>Helpless</i> exists but means unable to act, not unhelpful — the pair is not symmetrical." },
          { root: "use",     affix: "-less", answer: "useless",    why: "<i>Useful</i> also exists. Both are common; the suffix decides the direction." },
          { root: "meaning", affix: "-less", answer: "meaningless", why: "<i>Meaningful</i> exists too. Note the <i>-ing</i> stays." },
          { root: "end",     affix: "-less", answer: "endless",    why: "no <i>endful</i>. The <i>-less</i> side is the only one that works." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "cost"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not, then say why.",
        items: [
          { group: "things that bind you", options: [
            { text: "quotation", why: "a written price you cannot raise inside its validity." },
            { text: "commitment", why: "the word itself means being bound." },
            { text: "penalty clause", why: "binds you to a date, with money attached." },
            { text: "estimate", correct: true, why: "An estimate binds nobody. That is the whole difference between it and a quotation." } ] },
          { group: "money paid before the goods go", options: [
            { text: "deposit", why: "part of the price, paid up front." },
            { text: "advance", why: "another word for money paid before the work." },
            { text: "down payment", why: "the same idea again, commoner in American English." },
            { text: "balance", correct: true, why: "The balance is what is left to pay <i>afterwards</i>. It is the other end of the same transaction." } ] },
          { group: "lengths of time", options: [
            { text: "lead time", why: "weeks between order and delivery." },
            { text: "validity", why: "how long a price stays open." },
            { text: "delivery window", why: "the span inside which goods will arrive." },
            { text: "unit price", correct: true, why: "A price, not a length of time. It is the only one here measured in money." } ] },
          { group: "words that avoid committing", options: [
            { text: "forecast", why: "what you expect, not what you promise." },
            { text: "estimate", why: "approximate by definition." },
            { text: "we hope to", why: "states an intention and no more." },
            { text: "we undertake to", correct: true, why: "<i>Undertake</i> is one of the strongest commitments in business English. It is the opposite of the other three." } ] }
        ] },

      { id: "3d", section: 3, sectionTitle: "Read four short notices", letter: "D",
        concepts: ["sort", "agreement"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each phrase by how much it commits you.",
        note: { kind: "words", title: "A scale, not a switch",
                body: "<p>English gives you a whole ladder between <em>no</em> and <em>yes</em>. Choosing the right rung is most of what a careful quotation does — and using a binding phrase when you meant a soft one is how people end up paying penalties.</p>" },
        bins: [
          { id: "soft", label: "Does not bind you" },
          { id: "firm", label: "Binds you" }
        ],
        items: [
          { text: "we expect to dispatch",       bin: "soft", why: "an expectation. If it slips, nothing was broken." },
          { text: "we hope to have it ready",    bin: "soft", why: "weaker still. Fine internally, poor in a quotation." },
          { text: "our forecast is",             bin: "soft", why: "the word announces that it may be wrong." },
          { text: "subject to confirmation",     bin: "soft", why: "explicitly makes the whole sentence provisional." },
          { text: "we undertake to deliver",     bin: "firm", why: "about as binding as business English gets." },
          { text: "we commit to the fourteenth", bin: "firm", why: "<i>commit</i> names the act of binding yourself." },
          { text: "this price is valid for 30 days", bin: "firm", why: "a promise with its own end date, which is still a promise." },
          { text: "delivery on or before 14 May", bin: "firm", why: "<i>on or before</i> is contract language. It admits no later date." }
        ],
        closer: "<p>The commonest mistake is not using a soft phrase when you should have used a firm one. It is writing <b>we will dispatch on the fourteenth</b> when you meant <b>we expect to</b>, and discovering the difference when the dyer is late.</p>" }

    ]
  };
})();
