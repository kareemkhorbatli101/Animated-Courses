/* Unit 3 · Comparing Suppliers — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u03-l1", unit: "u03", block: "l1", up: "../", tab: "AT WORK",
    objective: "Describe and compare what three suppliers are offering",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words a buyer uses", letter: "A",
        concepts: ["comparison", "supplier"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words you need before you can compare two offers. Say what each means before you turn it over.",
        cards: [
          { term: "invitation to tender", ar: "مناقصة",
            meaning: "a formal invitation to several suppliers to quote for the same job",
            with: ["invite tenders", "submit a tender", "win the tender"],
            why: "The point of a tender is that everyone answers the same question, which is the only way prices can be compared at all." },
          { term: "specification", ar: "مواصفة",
            meaning: "exactly what is being asked for: material, size, finish, tolerance",
            with: ["to specification", "meet the spec", "a tight specification"],
            why: "Shortened to <i>spec</i> in speech. Two prices for different specs are not two prices for the same thing." },
          { term: "shortlist", ar: "قائمة مختصرة",
            meaning: "the few suppliers kept in after the first cut",
            with: ["draw up a shortlist", "on the shortlist", "shortlist three"],
            why: "Also a verb: <i>we shortlisted three</i>. Telling a supplier they are on it is a real signal and should not be given lightly." },
          { term: "track record", ar: "سجلّ الأداء",
            meaning: "what a supplier has actually done before, as against what they promise",
            with: ["a strong track record", "no track record", "check their track record"],
            why: "Two words. The thing most buyers weigh heaviest and most sellers mention last." },
          { term: "reference", ar: "جهة مرجعية",
            meaning: "a customer who will say what the supplier was like to deal with",
            with: ["ask for references", "a trade reference", "take up references"],
            why: "<i>Take up a reference</i> means actually contact them. Many buyers ask for references and never call." },
          { term: "capacity", ar: "الطاقة الإنتاجية",
            meaning: "how much a supplier can produce in a period",
            with: ["spare capacity", "at capacity", "capacity constraints"],
            why: "From Unit 1, now used about someone else. A cheap supplier at full capacity is not cheap; they are late." },
          { term: "compliance", ar: "الامتثال",
            meaning: "doing what the rules and the paperwork require",
            with: ["compliance documents", "fully compliant", "a compliance check"],
            why: "In cross-border trade this means the certificates and declarations that let goods move legally. Missing paperwork stops a shipment more often than missing goods do." },
          { term: "landed cost", ar: "التكلفة النهائية",
            meaning: "what the goods actually cost you once everything is paid",
            with: ["the landed cost", "compare landed costs", "landed in Amman"],
            why: "Price plus freight plus duty plus insurance. The only figure worth comparing, and the one least often quoted." },
          { term: "trade-off", ar: "مقايضة",
            meaning: "giving up some of one thing to get more of another",
            with: ["a trade-off between price and time", "accept the trade-off"],
            why: "Noun, hyphenated. Almost every supplier decision is one, and naming it out loud usually ends the argument." }
        ],
        explain: { terms: [
          { en: "specification", gloss: "exactly what is being asked for", ar: "مواصفة" },
          { en: "track record", gloss: "what a supplier has actually done before", ar: "سجلّ الأداء" },
          { en: "landed cost", gloss: "total cost once freight and duty are paid", ar: "التكلفة النهائية" },
          { en: "trade-off", gloss: "giving up one thing to get another", ar: "مقايضة" }
        ] },
        after: "<p>Keep <b>landed cost</b> in mind. Half of all supplier comparisons are wrong because one quotation included freight and another did not.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words a buyer uses", letter: "B",
        concepts: ["word", "comparison"],
        kind: "match", task: null, n: 0,
        prompt: "Three suppliers' samples laid out for comparison. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A long bench with three sample crates on it, a weighing scale, a ring binder of specifications, a laptop showing a comparison, a wall clock and a noticeboard",
          parts: [
            { p: "wall",     x: 0,   y: 0,   sx: 10,  sy: 5.4 },
            { p: "floor",    x: 0,   y: 335, sx: 10,  sy: 2.3 },
            { p: "board",    x: 90,  y: 70,  s: 2.3 },
            { p: "clock",    x: 700, y: 72,  s: 0.7 },
            { p: "poster",   x: 830, y: 80,  s: 1.6 },
            { p: "longdesk", x: 40,  y: 352, sx: 9.0, sy: 1.8 },
            { p: "crate",    x: 80,  y: 318, s: 0.62 },
            { p: "crate",    x: 190, y: 318, s: 0.62 },
            { p: "crate",    x: 300, y: 318, s: 0.62 },
            { p: "scales",   x: 430, y: 300, s: 0.95 },
            { p: "binder",   x: 580, y: 320, s: 0.85 },
            { p: "laptop",   x: 700, y: 318, s: 1.0 }
          ] },
        pins: [
          { id: "p-board",  x: 14, y: 20, tx: 16, ty: 6,  w: 125 },
          { id: "p-clock",  x: 72, y: 16, tx: 72, ty: 4,  w: 110 },
          { id: "p-bench",  x: 10, y: 86, tx: 4,  ty: 97, w: 120 },
          { id: "p-crate",  x: 26, y: 52, tx: 20, ty: 40, w: 120 },
          { id: "p-scales", x: 46, y: 86, tx: 46, ty: 97, w: 120 },
          { id: "p-binder", x: 62, y: 52, tx: 62, ty: 40, w: 125 },
          { id: "p-laptop", x: 80, y: 86, tx: 76, ty: 97, w: 120 }
        ],
        pairs: [
          { word: "noticeboard", pin: "p-board",  why: "one word. Where the tender notice goes up so every supplier sees the same thing." },
          { word: "clock",       pin: "p-clock",  why: "a tender has a closing time, not just a closing date." },
          { word: "bench",       pin: "p-bench",  why: "the long work surface the samples are laid on." },
          { word: "sample crate", pin: "p-crate", why: "two words. One crate from each supplier, so the fabric can be compared side by side rather than from memory." },
          { word: "scales",      pin: "p-scales", why: "always plural for the weighing instrument. Fabric is sold by weight as well as by length, and the two do not always agree." },
          { word: "ring binder", pin: "p-binder", why: "where the specifications are kept. If two quotations answer different specs, this is where you find out." },
          { word: "laptop",      pin: "p-laptop", why: "where the comparison is built. One row per supplier, one column per thing that matters." }
        ],
        explain: { terms: [
          { en: "side by side", gloss: "next to each other, so they can be compared", ar: "جنبًا إلى جنب" },
          { en: "closing time", gloss: "the moment after which a tender cannot be submitted", ar: "موعد الإغلاق" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Complete the comparison", letter: "A",
        concepts: ["comparison", "cost"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Rana's note comparing three mills. Choose the word for each gap.",
        heading: "Three quotations for the same specification",
        note: { kind: "words", title: "Before you start",
                body: "<p>Comparatives need something to compare with. Watch for <b>than</b>, and for the superlative <b>the</b> — if the sentence has one and not the other, the word in the gap is probably wrong.</p>" },
        text: "We invited three mills to quote against the same ___ . The cheapest unit price came from the mill in Aleppo, but their ___ cost is the highest once freight is added. Orontes is not the cheapest, but they have by far the strongest ___ record — nine deliveries, none late. The third mill is the ___ of the three, which worries me at this volume. All three are compliant, so there is no ___ to make on paperwork. The real ___ is between price and certainty, and at this quantity I would pay for certainty.",
        gaps: [
          { options: ["specification", "quotation"], answer: "specification",
            why: "They all quote against the same spec. If the specs differed, the prices would not be comparable at all." },
          { options: ["landed", "unit"], answer: "landed",
            why: "The sentence contrasts it with <i>unit price</i> and adds <i>once freight is added</i>, which is the definition." },
          { options: ["track", "trade"], answer: "track",
            why: "<i>Track record</i> — what they have done before. <i>Trade record</i> is not a phrase." },
          { options: ["smallest", "smaller"], answer: "smallest",
            why: "<i>The smallest of the three</i>. Three things take a superlative; two would take <i>smaller</i>." },
          { options: ["choice", "trade-off"], answer: "choice",
            why: "<i>No choice to make</i> — they are equal on this point. A trade-off needs two things that pull against each other." },
          { options: ["trade-off", "shortlist"], answer: "trade-off",
            why: "Price against certainty: giving up some of one to get more of the other." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the comparison", letter: "B",
        concepts: ["comparison", "evidence"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The reply from her manager. Choose the word for each gap.",
        heading: "Reply: before you decide",
        text: "Thank you — this is much ___ than the last comparison we did. Two questions. First, is the Aleppo mill's price really the ___ , or does it just look that way because they quoted ex works? Second, nine deliveries is a good record, but it is a ___ record than the one we have with our current supplier, who has done thirty. Before you shortlist, ask each of them for two ___ you can actually telephone. And please check that the third mill's capacity is ___ enough for 4,000 metres — a small mill at full capacity is not cheap, it is late. On the whole I would ___ pay more and sleep at night.",
        gaps: [
          { options: ["clearer", "clearest"], answer: "clearer",
            why: "Two things compared — this one and the last one. <i>Than</i> in the sentence confirms it." },
          { options: ["lowest", "lower"], answer: "lowest",
            why: "Out of three, so the superlative. <i>The</i> in front of the gap is the giveaway." },
          { options: ["shorter", "shortest"], answer: "shorter",
            why: "Nine against thirty — two records compared, and <i>than</i> follows." },
          { options: ["references", "specifications"], answer: "references",
            why: "People you telephone. A specification is a document and cannot answer the phone." },
          { options: ["large", "largest"], answer: "large",
            why: "<i>Large enough</i> is the pattern — adjective plus <i>enough</i>, with no comparison to anything else." },
          { options: ["rather", "better"], answer: "rather",
            why: "<i>I would rather pay more</i>. Unit 2's structure, reused where a buyer has to state a preference." }
        ],
        explain: { terms: [
          { en: "ex works", gloss: "price covers goods at the seller's gate only", ar: "تسليم المصنع" },
          { en: "to sleep at night", gloss: "to not worry about it", ar: "أن تنام مرتاح البال" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from a tender process. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "TENDER NOTICES",
          blocks: [
            { h: "Tender 17/04 — cotton sheeting", lines: [
              "Quotations must be received by 14:00 on 28 March.",
              "Quotations received after that time will be returned unopened." ] },
            { h: "Specification", lines: [
              "All quotations must be against specification 17/04-B, attached.",
              "A quotation against any other specification cannot be compared and will be set aside." ] },
            { h: "Prices", lines: [
              "Quote a landed cost to Amman, inclusive of freight and insurance.",
              "Ex works prices will be converted by us at the buyer's own freight rate." ] },
            { h: "References", lines: [
              "Supply two trade references we may contact.",
              "We will contact them. Please tell them to expect a call." ] }
          ] },
        items: [
          { para: 1, q: "A quotation arrives at 14:30 on 28 March. What happens?",
            options: [
              { text: "It is sent back without being opened.", correct: true,
                why: "<i>Returned unopened</i> — the second line says exactly what late means here." },
              { text: "It is accepted but marked late.", why: "The notice gives no such option." },
              { text: "It is opened and considered.", why: "The whole point of <i>unopened</i> is that it is not." } ] },
          { para: 2, q: "A mill quotes against its own standard specification instead of 17/04-B.",
            options: [
              { text: "It is set aside, because it cannot be compared.", correct: true,
                why: "The notice gives the reason as well as the consequence, which is unusual and useful." },
              { text: "It is rejected for being too expensive.", why: "Price is not mentioned in this notice at all." },
              { text: "It is accepted if the price is good.", why: "The notice rules this out: it cannot be compared." } ] },
          { para: 3, q: "A supplier quotes ex works. What will the buyer do?",
            options: [
              { text: "Add freight at their own rate to get a comparable figure.", correct: true,
                why: "<i>Converted by us at the buyer's own freight rate</i> — so quoting ex works does not make you look cheaper." },
              { text: "Reject the quotation.", why: "It is converted, not refused." },
              { text: "Ask the supplier to requote.", why: "The notice says the buyer does the conversion." } ] },
          { para: 4, q: "What is different about this reference request?",
            options: [
              { text: "The buyer says plainly that they will call.", correct: true,
                why: "<i>We will contact them. Please tell them to expect a call.</i> Most reference requests are never followed up, and this one announces that it will be." },
              { text: "Only one reference is needed.", why: "Two are asked for." },
              { text: "References are optional.", why: "They are required, and the notice goes further than usual." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "sequence"],
        kind: "build", task: null, n: 0,
        prompt: "The suffix <b>-tion</b> and the suffix <b>-ment</b>. Drag each root into the box for the suffix it takes.",
        note: { kind: "words", title: "Word building: making nouns from verbs",
                body: "<p><b>-tion</b> and <b>-ment</b> both turn a verb into a noun, and English chooses between them by habit rather than by rule.<br><em>negotiate → negotiation</em> · <em>ship → shipment</em><br>There is no <em>negotiatement</em> and no <em>shiption</em>. Learn them as whole words.</p>" },
        family: { word: "negotiate", forms: [
          { part: "verb", word: "ne·GO·ti·ate" },
          { part: "noun", word: "ne·go·ti·A·tion", note: "the stress moves" },
          { part: "noun, person", word: "ne·GO·ti·a·tor" },
          { part: "adjective", word: "ne·GO·ti·a·ble", note: "able to be changed" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "The <b>negotiation</b> took two weeks and the <b>agreement</b> took an afternoon.",
            "Every <b>shipment</b> needs a customs <b>declaration</b>.",
            "Our <b>production</b> is at capacity, so any <b>commitment</b> beyond June is a risk.",
            "The <b>distribution</b> contract needs the board's <b>approval</b>." ] } ] },
        items: [
          { root: "negotiate",  affix: "-tion", answer: "negotiation",  why: "the stress moves to the fourth syllable: ne-go-ti-A-tion." },
          { root: "produce",    affix: "-tion", answer: "production",   why: "the root changes shape as well as taking the suffix." },
          { root: "declare",    affix: "-tion", answer: "declaration",  why: "the customs document. Note the <i>-are</i> becomes <i>-ara</i>." },
          { root: "agree",      affix: "-ment", answer: "agreement",    why: "the <i>e</i> stays. <i>Agreetion</i> does not exist." },
          { root: "ship",       affix: "-ment", answer: "shipment",     why: "one consignment of goods. Also a verb: <i>we shipped it</i>." },
          { root: "commit",     affix: "-ment", answer: "commitment",   why: "double the <i>t</i>. Unit 2's verb, now a noun." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "evidence"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "evidence about a supplier's past", options: [
            { text: "track record", why: "what they have actually delivered before." },
            { text: "references", why: "customers who will describe working with them." },
            { text: "audit report", why: "a documented inspection of how they operate." },
            { text: "quotation", correct: true, why: "A quotation is a promise about the future. The other three are evidence about the past." } ] },
          { group: "costs that are added to a unit price", options: [
            { text: "freight", why: "the cost of moving the goods." },
            { text: "insurance", why: "cover while they are in transit." },
            { text: "duty", why: "tax charged at the border." },
            { text: "margin", correct: true, why: "Margin is inside the seller's price, not added to yours. It is their number, not your cost." } ] },
          { group: "stages of a tender", options: [
            { text: "invitation", why: "the notice going out to suppliers." },
            { text: "submission", why: "the quotations coming back in." },
            { text: "shortlist", why: "the cut made after the first read." },
            { text: "dispatch", correct: true, why: "Dispatch happens after the contract is awarded. The tender is over by then." } ] },
          { group: "words meaning the rules were followed", options: [
            { text: "compliant", why: "meeting the requirements." },
            { text: "certified", why: "with a document proving it." },
            { text: "approved", why: "signed off by whoever had to sign." },
            { text: "competitive", correct: true, why: "That is about price, not about rules. A compliant quotation can be expensive." } ] }
        ] },

      { id: "3d", section: 3, sectionTitle: "Read four short notices", letter: "D",
        concepts: ["sort", "comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each thing by whether a quotation can tell you about it.",
        note: { kind: "words", title: "What paper can and cannot show",
                body: "<p>A quotation is written by the supplier about the future. Anything you want to know about their past, or about how they behave when something goes wrong, has to come from somewhere else.</p>" },
        bins: [
          { id: "quote", label: "The quotation tells you" },
          { id: "else",  label: "You have to find out elsewhere" }
        ],
        items: [
          { text: "the unit price",             bin: "quote", why: "it is the main thing the document exists to state." },
          { text: "the lead time offered",      bin: "quote", why: "a promise about the future, which is what a quotation is." },
          { text: "whether freight is included", bin: "quote", why: "the delivery term says so — if you read it." },
          { text: "the validity period",        bin: "quote", why: "printed on it, or it should be." },
          { text: "whether they deliver on time", bin: "else", why: "that is a track record, and no supplier writes their own badly." },
          { text: "how they behave when late",  bin: "else", why: "only a reference who has been through it can tell you." },
          { text: "whether they have spare capacity", bin: "else", why: "rarely volunteered, and it decides whether the lead time is real." },
          { text: "what their other clients pay", bin: "else", why: "and mostly you will never find out, which is why quantity matters more than asking." }
        ],
        closer: "<p>Four of the eight are on the paper. The four that are not are the ones that decide whether the order goes well.</p>" }

    ]
  };
})();
