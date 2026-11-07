/* Unit 12 · Clients and Proposals — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u12-l1", unit: "u12", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words of tendering, and hear the stress that tells a noun from a verb",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of tendering", letter: "A",
        concepts: ["word", "agreement"],
        kind: "cards", task: null, n: 0,
        prompt: "Eight words from an invitation to tender. Say what each means before you turn it over.",
        cards: [
          { term: "tender", ar: "عطاء",
            meaning: "a formal offer to supply, made to a fixed set of requirements",
            with: ["invited to tender", "submit a tender"],
            why: "Both noun and verb. A quotation answers a question you were asked; a tender answers a document, and the document decides what counts as an answer." },
          { term: "proposal", ar: "عرض مقترح",
            meaning: "a document offering to do something, usually with a method as well as a price",
            with: ["a written proposal", "put forward a proposal"],
            why: "Wider than a tender and less bound by rules. A proposal may suggest something the client did not ask for; a tender almost never can." },
          { term: "requirement", ar: "شرط مطلوب",
            meaning: "something the client has stated you must meet",
            with: ["a mandatory requirement", "meet the requirements"],
            why: "The word that divides the tender in two. A requirement missed is a tender rejected, however good the rest of it is." },
          { term: "scope", ar: "نطاق العمل",
            meaning: "exactly what is and is not included",
            with: ["in scope", "out of scope", "scope creep"],
            why: "Half of every later dispute is a disagreement about scope that nobody wrote down, which is why a proposal states what is excluded." },
          { term: "lead time", ar: "مدة التسليم",
            meaning: "the time from order to delivery",
            with: ["a four-week lead time"],
            why: "Two words as a noun, and it is not the same as production time. It includes everything between the order and the door." },
          { term: "unit price", ar: "سعر الوحدة",
            meaning: "the price of one of whatever is being bought",
            with: ["the unit price falls at volume"],
            why: "The figure a buyer compares across tenders, and the reason a cheap unit price with an expensive minimum order can lose." },
          { term: "reference", ar: "جهة مرجعية",
            meaning: "an existing customer who will speak for you",
            with: ["two trade references"],
            why: "Usually mandatory and usually treated as a formality. A buyer who actually telephones your references is the buyer worth winning." },
          { term: "award", ar: "إرساء العقد",
            meaning: "the decision giving the contract to one tenderer",
            with: ["the contract was awarded to", "notice of award"],
            why: "A verb and a noun. <i>Award</i> is the decision; signature comes afterwards, and the gap between them is where terms are still negotiated." }
        ],
        explain: { terms: [
          { en: "tender", gloss: "a formal offer to supply", ar: "عطاء" },
          { en: "scope", gloss: "what is and is not included", ar: "نطاق العمل" },
          { en: "lead time", gloss: "the time from order to delivery", ar: "مدة التسليم" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "The words of tendering", letter: "B",
        concepts: ["sort", "comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each line by whether it is something the client requires or something we are offering.",
        note: { kind: "words", title: "Why this distinction decides the document",
                body: "<p>A requirement is theirs and has to be met or the tender is discarded unread. An offer is ours and is where a tender can be won. Writing an offer where a requirement was asked for is the commonest reason a good supplier loses.</p>" },
        bins: [
          { id: "req",   label: "A requirement — theirs" },
          { id: "offer", label: "An offer — ours" }
        ],
        items: [
          { text: "two trade references must be supplied", bin: "req",
            why: "stated as a condition of being considered." },
          { text: "tenders close at noon on 14 July", bin: "req",
            why: "a deadline, and the one requirement nobody can fix afterwards." },
          { text: "all cloth to be certified free of azo dyes", bin: "req",
            why: "a standard the client has set; either you meet it or you do not tender." },
          { text: "prices to be held for twelve months", bin: "req",
            why: "a condition on the price, not a price." },
          { text: "a four-week lead time from order", bin: "offer",
            why: "ours to state, and ours to be held to." },
          { text: "a unit price of 3.40 dollars a metre", bin: "offer",
            why: "the figure we choose, inside whatever the requirement allows." },
          { text: "inspection sheets supplied with every consignment", bin: "offer",
            why: "not asked for, and the kind of thing that wins a tender on equal prices." },
          { text: "a named contact for the first six months", bin: "offer",
            why: "costs nothing and answers a worry the document never states." }
        ],
        closer: "<p>Every requirement here can be checked off a list by somebody who has never met us. Every offer is a choice. Spending your effort on the second while missing one of the first is how tenders are lost at the first reading.</p>" },

      { id: "2a", section: 2, sectionTitle: "Complete the tender summary", letter: "A",
        concepts: ["write", "agreement"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Samer's summary of the invitation. Choose the word for each gap.",
        heading: "Invitation to tender — Barada Hotels",
        note: { kind: "words", title: "Before you start",
                body: "<p>A summary of a tender document is written for people who will not read the document. Its job is to say what we must meet, what we may choose, and what would stop us tendering at all.</p>" },
        text: "Barada Hotels have invited us to ___ for bed linen across six hotels. There are four mandatory ___ : two trade references, certification that the cloth is free of azo dyes, prices held for twelve months, and submission by noon on 14 July. The ___ covers sheets and pillowcases only; towelling is explicitly excluded. We are free to ___ our own lead time and unit price. Tenders are opened together and the ___ is expected within three weeks. We have decided ___ , because we meet all four requirements and the volume is close to a quarter of a year's output.",
        gaps: [
          { options: ["tender", "quote"], answer: "tender",
            why: "The verb that matches the document. A quotation answers a question; a tender answers an invitation." },
          { options: ["requirements", "proposals"], answer: "requirements",
            why: "Theirs, and mandatory. A proposal is what we send back." },
          { options: ["scope", "price"], answer: "scope",
            why: "What is in and what is out. The exclusion of towelling is a scope statement." },
          { options: ["state", "ask"], answer: "state",
            why: "<i>Free to state our own lead time</i> — these are the offers rather than the requirements." },
          { options: ["award", "reference"], answer: "award",
            why: "The decision giving the contract to one tenderer." },
          { options: ["to tender", "tendering"], answer: "to tender",
            why: "<i>Decide</i> takes an infinitive and never a gerund. This unit's grammar, met early." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the tender summary", letter: "B",
        concepts: ["risk", "write"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Nour's comment on the summary. Choose the word for each gap.",
        heading: "Comment on the Barada tender",
        text: "This is the right length and I want to argue with one line. You say we are free to ___ our own lead time, and we are, but four weeks is only free if we can keep it in July. I would rather ___ six weeks and meet it than promise four and explain. Second: towelling is out of ___ , which you have noted, and I would add a sentence offering it separately. A buyer who excluded it usually has a reason and sometimes the reason has gone. Third, the references. We keep forgetting ___ Ms Sayegh before we name her, and one day she will hear it from the buyer first. Last, the stress on the word <i>contract</i>: the noun is CONtract and the verb is conTRACT, and we ___ going to say both in the same meeting. I have asked Lina ___ the figures again before Friday.",
        gaps: [
          { options: ["state", "stated"], answer: "state",
            why: "After <i>free to</i>, the bare infinitive follows <i>to</i>." },
          { options: ["offer", "offering"], answer: "offer",
            why: "<i>Would rather</i> takes the bare infinitive: <i>would rather offer</i>, not <i>to offer</i> and not <i>offering</i>." },
          { options: ["scope", "stock"], answer: "scope",
            why: "<i>Out of scope</i> is the fixed phrase, and it is what the exclusion of towelling means." },
          { options: ["to ask", "asking"], answer: "to ask",
            why: "<i>Forget to ask</i> means the asking did not happen. <i>Forget asking</i> would mean we cannot remember having asked." },
          { options: ["are", "will"], answer: "are",
            why: "<i>We are going to say</i> — the future with <i>going to</i> needs the verb <i>be</i>." },
          { options: ["to check", "checking"], answer: "to check",
            why: "<i>Ask somebody to do something</i>. <i>Ask</i> never takes a gerund after an object." }
        ],
        explain: { terms: [
          { en: "to hold a price", gloss: "to keep a price unchanged for a stated period", ar: "يثبّت السعر" },
          { en: "out of scope", gloss: "not included in what is being offered", ar: "خارج نطاق العمل" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from the tender file. Match each one to what it means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES \u2014 TENDER FILE",
          blocks: [
            { h: "Clarifications", lines: [
              "Questions about this invitation must be submitted in writing by 30 June.",
              "Answers are circulated to all tenderers without naming the questioner. No clarification is given by telephone." ] },
            { h: "Late submission", lines: [
              "A tender received after noon on 14 July is returned unopened.",
              "The time of receipt, not the time of sending, governs. Tenderers are advised not to rely on a courier for the final day." ] },
            { h: "Variant offers", lines: [
              "A tenderer may submit one variant in addition to a compliant tender. A variant alone is not considered.",
              "Variants are evaluated only after compliant tenders have been scored." ] },
            { h: "Award and signature", lines: [
              "Notice of award does not create a contract. A contract exists on signature of both parties.",
              "Barada Hotels reserves the right not to award." ] }
          ] },
        items: [
          { para: 1, q: "You telephone the buyer with a question about the azo dye certificate. What happens?",
            options: [
              { text: "Nothing useful — clarifications are in writing only.", correct: true,
                why: "And the written answer goes to every tenderer, which is the real reason the rule exists." },
              { text: "You get an answer your competitors do not have.", why: "The point of circulating answers is to prevent exactly that." },
              { text: "Your tender is disqualified.", why: "Nothing says so. You simply get no answer." } ] },
          { para: 2, q: "Your courier delivers at 12.10 on 14 July. What happens to your tender?",
            options: [
              { text: "It is returned unopened.", correct: true,
                why: "Receipt governs, and the notice warns about couriers in the same breath." },
              { text: "It is opened and scored late.", why: "The notice says unopened, which means no part of your work is read." },
              { text: "It depends how good it is.", why: "That is the one thing it does not depend on." } ] },
          { para: 3, q: "You want to offer six-week lead time at a lower price instead of four weeks. How?",
            options: [
              { text: "Submit a compliant tender and the cheaper one as a variant.", correct: true,
                why: "A variant alone is not considered, so the compliant tender is the ticket of entry." },
              { text: "Submit the cheaper one and explain why it is better.", why: "A variant alone is discarded, however good the explanation." },
              { text: "Ask for the requirement to be changed.", why: "Clarifications explain requirements; they do not negotiate them." } ] },
          { para: 4, q: "You receive notice of award. What do you not yet have?",
            options: [
              { text: "A contract — that needs both signatures.", correct: true,
                why: "The gap between award and signature is real, and it is where terms are still moved." },
              { text: "A price.", why: "The price is your own tender." },
              { text: "The scope.", why: "Stated in the invitation." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["sound", "word"],
        kind: "sort", task: null, n: 0,
        prompt: "Each word is both a noun and a verb. Sort each sentence by which syllable carries the stress.",
        note: { kind: "words", title: "Word stress: the noun goes first",
                body: "<p>A large group of English words work as noun and verb with the same spelling, and stress alone tells them apart. The noun is stressed on the <b>first</b> syllable, the verb on the <b>second</b>.</p><p>EXport (a thing we sell) — to exPORT (something we do).<br>CONtract (the document) — to conTRACT (to shrink, or to agree).<br>Get it wrong and a listener hears the other word for about a second, which in a meeting is long enough.</p>" },
        bins: [
          { id: "first",  label: "Stress on the FIRST syllable (noun)" },
          { id: "second", label: "Stress on the SECOND syllable (verb)" }
        ],
        items: [
          { text: "Our exports went up last year.", bin: "first",
            why: "EXports — the goods themselves, a noun." },
          { text: "We export mostly to Jordan.", bin: "second",
            why: "exPORT — what we do, a verb." },
          { text: "The contract was awarded in August.", bin: "first",
            why: "CONtract — the document." },
          { text: "Cotton will contract if it is washed hot.", bin: "second",
            why: "conTRACT — to shrink, a verb, and a real risk in bed linen." },
          { text: "There has been a sharp increase in freight.", bin: "first",
            why: "INcrease — the amount of the rise." },
          { text: "Freight costs increase every July.", bin: "second",
            why: "inCREASE — the action of rising." },
          { text: "The record shows who signed it.", bin: "first",
            why: "REcord — the document, as in Unit 10." },
          { text: "We record the position of each piece.", bin: "second",
            why: "reCORD — the act of writing it down." }
        ],
        closer: "<p>Four pairs, eight words, one spelling each. Nothing but stress separates them, which is why reading a tender aloud catches errors that reading it silently does not.</p>" },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["word", "comparison"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "documents you send to a client", options: [
            { text: "tender", why: "a formal offer against a fixed document." },
            { text: "quotation", why: "a price in answer to a question." },
            { text: "proposal", why: "an offer with a method as well as a price." },
            { text: "requirement", correct: true, why: "A requirement comes the other way. The client sets it and you meet it." } ] },
          { group: "terms of an offer", options: [
            { text: "scope", why: "what is in and what is out." },
            { text: "lead time", why: "order to delivery." },
            { text: "unit price", why: "the price of one." },
            { text: "azo dye", correct: true, why: "A substance, and here a standard to be certified against rather than a term you choose." } ] },
          { group: "the end of a tender process", options: [
            { text: "award", why: "the decision." },
            { text: "signature", why: "what actually makes the contract." },
            { text: "notice", why: "how the award is communicated." },
            { text: "variant", correct: true, why: "A variant belongs to the submission, weeks earlier." } ] },
          { group: "things that prove something about you", options: [
            { text: "reference", why: "a customer who will speak for you." },
            { text: "certificate", why: "a third party's statement about the goods." },
            { text: "testimonial", why: "a written endorsement." },
            { text: "deadline", correct: true, why: "It proves nothing and discards everything. From the notice in 3A." } ] },
          { group: "nouns, stressed on the first syllable", options: [
            { text: "CONtract", why: "the document." },
            { text: "EXport", why: "the goods." },
            { text: "REcord", why: "the written trace." },
            { text: "exPORT", correct: true, why: "The verb. Nothing but the stress separates it from the noun above it." } ] }
        ],
        closer: "<p>The last one is the test for this lesson's stress rule, and it is the only one of the five where the spelling gives you nothing.</p>" },

      { id: "3d", section: 3, sectionTitle: "Read four short notices", letter: "D",
        concepts: ["sound", "word"],
        kind: "annotate", task: null, n: 0,
        prompt: "Click each line and say whether the marked word is a noun or a verb. The dots show the syllables and the capitals show which one carries the stress.",
        stress: true,
        note: { kind: "words", title: "The grammar moves the stress, not the speaker",
                body: "<p>Nobody decides to shift the stress. It moves because the word is doing a different job in the sentence, and the words around it give the job away: an article or a possessive in front means a noun, an auxiliary or a subject pronoun means a verb.</p>" },
        jobs: [
          "Noun \u2014 stress on the first syllable",
          "Verb \u2014 stress on the second syllable"
        ],
        sentences: [
          { text: "Our EX\u00b7ports went up eleven per cent last year.",
            job: "Noun \u2014 stress on the first syllable",
            why: "<b>EX</b>ports. <i>Our</i> in front of it can only precede a noun, and the sentence already has its verb in <i>went</i>." },
          { text: "We ex\u00b7PORT mostly to Jordan and Lebanon.",
            job: "Verb \u2014 stress on the second syllable",
            why: "ex<b>PORT</b>. <i>We</i> in front of it and nothing else to be the verb, so the stress follows the grammar without anybody choosing to move it." },
          { text: "The CON\u00b7tract was awarded in August.",
            job: "Noun \u2014 stress on the first syllable",
            why: "<b>CON</b>tract, with <i>the</i> in front and <i>was awarded</i> already doing the work of the verb." },
          { text: "Cotton will con\u00b7TRACT if it is washed hot.",
            job: "Verb \u2014 stress on the second syllable",
            why: "con<b>TRACT</b>, meaning to shrink. <i>Will</i> in front of it settles the question, and in bed linen this is a real risk rather than a grammar example." },
          { text: "There has been a sharp IN\u00b7crease in freight.",
            job: "Noun \u2014 stress on the first syllable",
            why: "<b>IN</b>crease. <i>A sharp</i> is an article and an adjective, which can only be building a noun phrase." },
          { text: "Freight costs in\u00b7CREASE every July.",
            job: "Verb \u2014 stress on the second syllable",
            why: "in<b>CREASE</b>. <i>Freight costs</i> is the subject, so this word has to be the verb, and the stress has already moved to say so." }
        ],
        after: "<p>Six lines, three words, and each word appears twice with the stress in a different place. Notice that you never had to decide: the article, the auxiliary or the subject told you, every time.</p>",
        explain: { terms: [
          { en: "word stress", gloss: "which syllable of a word is said with most force", ar: "النبر في الكلمة" },
          { en: "an auxiliary", gloss: "a helping verb such as will, has or was", ar: "فعل مساعد" }
        ] } }

    ]
  };
})();
