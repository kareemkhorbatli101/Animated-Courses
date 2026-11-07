/* Unit 7 · Terms and Negotiation — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u07-l1", unit: "u07", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words of a contract term, and say what each one would cost you",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of a term", letter: "A",
        concepts: ["agreement", "cost"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words from the terms page. Say what each would cost you before you turn it over.",
        cards: [
          { term: "clause", ar: "بند",
            meaning: "one numbered provision in an agreement",
            with: ["clause 4.2", "a penalty clause", "strike out a clause"],
            why: "Always numbered, so it can be referred to without quoting it. <i>Clause 4.2</i> is how a negotiation stays short." },
          { term: "volume discount", ar: "خصم الكمية",
            meaning: "a lower unit price for ordering more",
            with: ["a volume discount", "the discount ladder"],
            why: "Usually a ladder with steps, not a line. The step edge is where a buyer adds fifty metres to save two per cent." },
          { term: "minimum order", ar: "الحد الأدنى للطلب",
            meaning: "the smallest quantity you will supply",
            with: ["our minimum order is", "below the minimum"],
            why: "Often abbreviated MOQ, for minimum order quantity. It protects you from orders that cost more to set up than they earn." },
          { term: "exclusivity", ar: "حصرية",
            meaning: "a promise to supply only one buyer in a market",
            with: ["grant exclusivity", "an exclusive distributor"],
            why: "The most expensive thing you can give away in a first contract, and the one most often given away casually." },
          { term: "indemnity", ar: "تعويض",
            meaning: "a promise to cover someone else's loss",
            with: ["an indemnity clause", "indemnify against"],
            why: "Read every indemnity you sign. It is the clause that turns a problem into your problem whoever caused it." },
          { term: "termination", ar: "إنهاء العقد",
            meaning: "the ending of an agreement, and the rules for it",
            with: ["termination for convenience", "ninety days' notice"],
            why: "Termination <i>for convenience</i> means either side can leave without a reason. Check whether both sides have it." },
          { term: "liability", ar: "المسؤولية",
            meaning: "legal responsibility for a loss",
            with: ["limit our liability", "liability is capped at"],
            why: "<i>Capped at the value of the order</i> is the usual limit and the usual fight. Unlimited liability on a small order is a bad trade." },
          { term: "force majeure", ar: "قوة قاهرة",
            meaning: "events outside anyone's control that excuse a missed obligation",
            with: ["a force majeure clause", "declare force majeure"],
            why: "From Unit 2. The thing to read is the list of what counts, because a clause that lists nothing covers nothing." },
          { term: "governing law", ar: "القانون الحاكم",
            meaning: "which country's law decides a dispute",
            with: ["governed by the laws of", "jurisdiction"],
            why: "Rarely negotiated and expensive if you need it. A contract governed by a law you cannot afford to litigate in is a contract with no remedy." }
        ],
        explain: { terms: [
          { en: "clause", gloss: "one numbered provision", ar: "بند" },
          { en: "exclusivity", gloss: "supplying only one buyer in a market", ar: "حصرية" },
          { en: "liability", gloss: "legal responsibility for a loss", ar: "المسؤولية" },
          { en: "governing law", gloss: "whose law decides a dispute", ar: "القانون الحاكم" }
        ] },
        after: "<p>Three of these are worth more than the price: <b>exclusivity</b>, <b>liability</b> and <b>termination</b>. A buyer who concedes on price and wins all three has had a very good day.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words of a term", letter: "B",
        concepts: ["sort", "risk"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each clause by which side it protects.",
        note: { kind: "words", title: "Every clause has a direction",
                body: "<p>A term is not neutral. Reading a contract usefully means asking, of each clause, who would reach for it when something goes wrong.</p>" },
        bins: [
          { id: "seller", label: "Protects the seller" },
          { id: "buyer",  label: "Protects the buyer" }
        ],
        items: [
          { text: "liability capped at the order value", bin: "seller", why: "limits what the seller can be made to pay." },
          { text: "minimum order quantity",             bin: "seller", why: "keeps out orders that cost more to set up than they earn." },
          { text: "price valid for thirty days",        bin: "seller", why: "lets the seller reprice after a month rather than being held indefinitely." },
          { text: "force majeure",                      bin: "seller", why: "excuses the party who has to deliver, which is usually the seller." },
          { text: "a late-delivery penalty",            bin: "buyer",  why: "puts a number on the seller's lateness." },
          { text: "exclusivity in the buyer's market",  bin: "buyer",  why: "stops the seller supplying the buyer's competitors." },
          { text: "termination on ninety days' notice", bin: "buyer",  why: "lets the buyer leave, usually without needing a reason." },
          { text: "an indemnity from the seller",       bin: "buyer",  why: "makes the seller cover losses the buyer suffers." }
        ],
        closer: "<p>Two of these appear on both sides in real contracts: <b>force majeure</b> and <b>termination</b> are usually mutual. If yours are not, that is the first thing to ask about.</p>" },

      { id: "2a", section: 2, sectionTitle: "Complete the terms", letter: "A",
        concepts: ["agreement", "cost"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The commercial terms Samer is proposing. Choose the word for each gap.",
        heading: "Proposed terms — Levant Home, annual agreement",
        note: { kind: "words", title: "Before you start",
                body: "<p>Several gaps sit inside a conditional. Remember the rule: after <b>if</b> about the future, English uses the present. The future goes in the other half.</p>" },
        text: "If you order more than six thousand metres in a year, the unit price ___ by two per cent. Our minimum ___ is five hundred metres a run. We will ___ you exclusivity in Jordan for the first year, provided the volume target is met. Our ___ is capped at the value of the order concerned. Either party may terminate on ninety days' written ___ . If the cotton price moves by more than ten per cent, we ___ reopen the price before the year ends.",
        gaps: [
          { options: ["falls", "will fall"], answer: "falls",
            why: "This is the <i>if</i> clause’s partner, and the price change is the main clause — so <i>will fall</i> would also be possible. Here the present is used for a rule that applies automatically, which is how terms are written." },
          { options: ["order", "run"], answer: "order",
            why: "<i>Minimum order</i> is the fixed pair. <i>Run</i> appears later in the same sentence with a different job." },
          { options: ["grant", "give"], answer: "grant",
            why: "<i>Grant exclusivity</i> is the contract verb. <i>Give</i> is understood and reads as informal." },
          { options: ["liability", "indemnity"], answer: "liability",
            why: "What we could be made to pay. An indemnity is a promise to cover someone else's loss." },
          { options: ["notice", "warning"], answer: "notice",
            why: "<i>Ninety days' written notice</i> — and note the apostrophe after <i>days</i>." },
          { options: ["may", "must"], answer: "may",
            why: "A right, not an obligation. <i>Must</i> would force a renegotiation neither side may want." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the terms", letter: "B",
        concepts: ["risk", "write"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Nour's comments on the draft. Choose the word for each gap.",
        heading: "Comments before we send it",
        text: "Two things worry me. First, if we ___ exclusivity for a year and they then order four thousand metres, we have locked ourselves out of Jordan for nothing. Tie it to the volume, which you have, but say what happens ___ the target is missed — at the moment the clause is silent. Second, the ___ clause: capped at the value of the order concerned is right for us, but check whether their standard terms override ours. When two sets of terms ___ , the one attached to the signed document usually wins. One more thing: when the cotton price ___ , we have the right to reopen, but no obligation. Make sure Samer understands that before he ___ it to her as a protection for them.",
        gaps: [
          { options: ["grant", "will grant"], answer: "grant",
            why: "After <i>if</i> about the future, English uses the present. The future sits in the main clause: <i>we have locked ourselves out</i>." },
          { options: ["if", "when"], answer: "if",
            why: "Missing the target is uncertain, so <i>if</i>. <i>When</i> would assume it happens." },
          { options: ["liability", "termination"], answer: "liability",
            why: "<i>Capped at the value of the order</i> is a liability cap." },
          { options: ["conflict", "agree"], answer: "conflict",
            why: "The sentence is about what happens when they disagree, which is what <i>conflict</i> names." },
          { options: ["moves", "will move"], answer: "moves",
            why: "After <i>when</i> about the future, the present again. Same rule, different linker." },
          { options: ["describes", "sells"], answer: "describes",
            why: "<i>Describes it to her as a protection</i> — the risk is Samer presenting a right as a promise." }
        ],
        explain: { terms: [
          { en: "to lock yourself out", gloss: "to make something impossible for yourself", ar: "تقييد نفسك" },
          { en: "to override", gloss: "to take priority over", ar: "يَجُبّ / يَعلو على" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices about contracts. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Signing", lines: [
              "Nobody below manager signs a contract, whatever the value.",
              "A purchase order is not a contract and may be signed by a supervisor." ] },
            { h: "Standard terms", lines: [
              "Our terms are attached to every quotation and every acknowledgement.",
              "If a client's terms arrive later and nobody objects, theirs may be the ones that apply." ] },
            { h: "Exclusivity", lines: [
              "No exclusivity is granted without the owner's agreement.",
              "This includes informal promises made on the telephone." ] },
            { h: "Discount ladder", lines: [
              "The ladder is in the price list and is not negotiable below the published steps.",
              "If a buyer is close to a step, tell them. Fifty metres is cheaper than an argument." ] }
          ] },
        items: [
          { para: 1, q: "A supervisor is handed a purchase order to sign. May they?",
            options: [
              { text: "Yes — a purchase order is not a contract.", correct: true,
                why: "The second line creates the exception the first line's <i>whatever the value</i> might otherwise close." },
              { text: "No — nobody below manager signs anything.", why: "The notice distinguishes two documents." },
              { text: "Only if the value is low.", why: "Value is explicitly not the test." } ] },
          { para: 2, q: "A client sends their own terms after your quotation and nobody replies. What may follow?",
            options: [
              { text: "Their terms may be the ones that apply.", correct: true,
                why: "<i>If nobody objects</i> — silence is the mechanism, which is why the notice exists." },
              { text: "Your terms always apply.", why: "The notice says exactly the opposite can happen." },
              { text: "Neither set applies.", why: "Not an outcome the notice offers." } ] },
          { para: 3, q: "A salesperson promises exclusivity on the telephone. What does the notice say?",
            options: [
              { text: "It still needs the owner's agreement — informal promises are included.", correct: true,
                why: "The second line exists because the first would otherwise be read as being about documents only." },
              { text: "Telephone promises do not count.", why: "The notice says they are included." },
              { text: "It is allowed if the client agrees.", why: "The client's agreement is not the permission being discussed." } ] },
          { para: 4, q: "A buyer orders 5,950 metres and the next discount step is at 6,000. What should you do?",
            options: [
              { text: "Tell them — fifty metres is cheaper than an argument.", correct: true,
                why: "The notice gives both the instruction and its reasoning." },
              { text: "Say nothing and invoice at the lower discount.", why: "Technically correct and the reason the notice is written." },
              { text: "Give them the discount anyway.", why: "The ladder is not negotiable below the published steps." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "agreement"],
        kind: "build", task: null, n: 0,
        prompt: "The suffix <b>-al</b> and the suffix <b>-able</b>. Drag each root into the box for the suffix it takes here.",
        note: { kind: "words", title: "Word building: -al and -able",
                body: "<p><b>-al</b> makes an adjective from a noun: <em>contract → contractual</em>, <em>commerce → commercial</em>.<br><b>-able</b> means <em>can be done</em>: <em>negotiate → negotiable</em>.<br>A few roots take both with different senses: <em>conditional</em> is dependent on a condition; <em>conditionable</em> is not a word.</p>" },
        family: { word: "commerce", forms: [
          { part: "noun", word: "COM·merce" },
          { part: "adjective", word: "com·MER·cial", note: "the stress moves and the c softens" },
          { part: "adverb", word: "com·MER·cial·ly" },
          { part: "verb", word: "com·MER·cial·ise" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "The price is <b>negotiable</b>; the <b>contractual</b> lead time is not.",
            "This is a <b>commercial</b> decision, not a <b>legal</b> one.",
            "The discount is <b>conditional</b> on the volume target being met.",
            "Our liability cap is not <b>transferable</b> to a third party." ] } ] },
        items: [
          { root: "contract",  affix: "-al",   answer: "contractual",  why: "note the <i>u</i>: <i>contractual</i>, not <i>contractal</i>." },
          { root: "commerce",  affix: "-al",   answer: "commercial",   why: "the root changes shape and the stress moves." },
          { root: "condition", affix: "-al",   answer: "conditional",  why: "dependent on a condition — the whole subject of this unit." },
          { root: "negotiate", affix: "-able", answer: "negotiable",   why: "can be negotiated. The <i>-ate</i> is dropped." },
          { root: "transfer",  affix: "-able", answer: "transferable", why: "can be passed to someone else. Double the <i>r</i> in British English." },
          { root: "enforce",   affix: "-able", answer: "enforceable",  why: "can be enforced. The silent <i>e</i> stays, to keep the <i>c</i> soft." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "agreement"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "clauses that limit what you can be made to pay", options: [
            { text: "liability cap", why: "sets a ceiling on your exposure." },
            { text: "force majeure", why: "excuses you when the cause is outside anyone's control." },
            { text: "exclusion of consequential loss", why: "keeps you out of the buyer's lost profits." },
            { text: "exclusivity", correct: true, why: "Exclusivity restricts who you may sell to. It has nothing to do with money you may owe." } ] },
          { group: "things a buyer gains", options: [
            { text: "a late-delivery penalty", why: "a number attached to the seller's lateness." },
            { text: "termination on notice", why: "the ability to leave." },
            { text: "an indemnity from the seller", why: "the seller covers the buyer's losses." },
            { text: "minimum order quantity", correct: true, why: "An MOQ protects the seller from small, expensive orders." } ] },
          { group: "words meaning can be done", options: [
            { text: "negotiable", why: "can be negotiated." },
            { text: "transferable", why: "can be transferred." },
            { text: "enforceable", why: "can be enforced." },
            { text: "contractual", correct: true, why: "<i>-al</i> makes an adjective from a noun. It does not mean <i>can be</i>." } ] },
          { group: "ways an agreement ends", options: [
            { text: "termination for convenience", why: "either side leaves, no reason needed." },
            { text: "expiry", why: "it simply runs out." },
            { text: "termination for breach", why: "one side has broken it." },
            { text: "variation", correct: true, why: "A variation changes an agreement and keeps it alive. It is the opposite of ending it." } ] }
        ] }

    ]
  };
})();
