/* Unit 10 · Records and Responsibility — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u10-l1", unit: "u10", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words of documentation and audit, and say what each record is for",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of a record", letter: "A",
        concepts: ["evidence", "approval"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words from the filing cabinet. Say what each is for before you turn it over.",
        cards: [
          { term: "audit trail", ar: "مسار التدقيق",
            meaning: "the chain of records showing how something was decided or done",
            with: ["leave an audit trail", "a complete audit trail"],
            why: "Two words. Not a document but a path through documents. If one link is missing, the trail is broken, however good the others are." },
          { term: "retention period", ar: "مدة الحفظ",
            meaning: "how long a record must be kept before it may be destroyed",
            with: ["a seven-year retention period"],
            why: "Both halves matter: keeping a document too long can be as much of a problem as destroying it too soon." },
          { term: "supporting document", ar: "مستند داعم",
            meaning: "the paper that proves an entry is real",
            with: ["supporting documents", "no supporting documentation"],
            why: "An invoice supports a payment; a delivery note supports an invoice. Each one points at the one behind it." },
          { term: "declaration", ar: "إقرار",
            meaning: "a formal statement of fact made to an authority",
            with: ["a customs declaration", "make a declaration"],
            why: "Signed by somebody by name. A declaration that turns out to be wrong is a different matter from an invoice that turns out to be wrong." },
          { term: "licence", ar: "ترخيص",
            meaning: "official permission to do something",
            with: ["an export licence", "renew the licence"],
            why: "Noun with a <i>c</i> in British English, verb with an <i>s</i>: <i>to license</i>. American English uses <i>license</i> for both." },
          { term: "compliance", ar: "الامتثال",
            meaning: "doing what the rules require, and being able to show it",
            with: ["compliance check", "fully compliant"],
            why: "Being compliant and being able to prove it are different things, and an audit tests the second." },
          { term: "discrepancy", ar: "تباين",
            meaning: "a difference between two records that should agree",
            with: ["a discrepancy of two pallets", "explain the discrepancy"],
            why: "A neutral word. It names the gap without claiming anyone caused it, which is why auditors use it constantly." },
          { term: "reconcile", ar: "يطابق",
            meaning: "to make two sets of records agree, or explain why they do not",
            with: ["reconcile the accounts", "it does not reconcile"],
            why: "From Unit 5. Reconciling is not making them match; it is accounting for every difference." },
          { term: "sign-off", ar: "اعتماد نهائي",
            meaning: "formal approval by somebody with the authority to give it",
            with: ["get sign-off", "awaiting sign-off"],
            why: "Hyphenated as a noun, two words as a verb: <i>to sign off</i>. A sign-off names a person, which is the whole point of it." }
        ],
        explain: { terms: [
          { en: "audit trail", gloss: "the chain of records showing how something was done", ar: "مسار التدقيق" },
          { en: "supporting document", gloss: "the paper that proves an entry is real", ar: "مستند داعم" },
          { en: "declaration", gloss: "a formal statement of fact to an authority", ar: "إقرار" },
          { en: "discrepancy", gloss: "a difference between records that should agree", ar: "تباين" }
        ] },
        after: "<p>The one to be most careful with is <b>declaration</b>. It is signed by a named person, and the standard it is held to is accuracy, not best effort.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words of a record", letter: "B",
        concepts: ["sequence", "evidence"],
        kind: "sequence", task: null, n: 0,
        prompt: "Put the documents of one export consignment into the order they are created.",
        note: { kind: "life", title: "Each one points at the one before it",
                body: "<p>An audit trail is read backwards. Somebody starts at the payment and asks what proves it, then asks what proves that. A gap anywhere breaks the chain above it as well.</p>" },
        steps: [
          { text: "The purchase order from the client", pos: 1, why: "What they asked for, in their own words and under their own reference." },
          { text: "Our written order confirmation", pos: 2, why: "Quantity, price and date agreed. From Unit 1: without all three it is not an order." },
          { text: "The packing list", pos: 3, why: "What actually went on the pallets, counted at the point of packing." },
          { text: "The commercial invoice", pos: 4, why: "Must agree with the packing list exactly — the pallet count that sends people away at the counter in Unit 7." },
          { text: "The customs declaration", pos: 5, why: "A formal statement to an authority, signed by a named person, drawn from the two documents above it." },
          { text: "The signed delivery note", pos: 6, why: "Proof that the goods reached the right place. The last link, and the one most often never returned." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Complete the audit note", letter: "A",
        concepts: ["write", "evidence"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "The auditor's note after a sample check. Choose the word for each gap.",
        heading: "Sample check — ten consignments",
        note: { kind: "words", title: "Before you start",
                body: "<p>Audit language is deliberately neutral. It names gaps without naming causes, because the cause is what the company is being asked to supply.</p>" },
        text: "Ten consignments were examined. In eight cases the ___ trail was complete. In two cases the signed delivery note was missing, so the ___ document for the final entry could not be produced. One ___ of two pallets was found between the packing list and the invoice; this had been corrected by a reissued invoice and the correction was documented. No ___ was found to have been made on incomplete information. The company's ___ period for shipping records is seven years and the sample was within it. We recommend that delivery notes be chased within thirty days and that the ___ for reissued invoices name the person who authorised them.",
        gaps: [
          { options: ["audit", "paper"], answer: "audit",
            why: "<i>Audit trail</i> — the chain of records, not any single one." },
          { options: ["supporting", "additional"], answer: "supporting",
            why: "The paper that proves an entry is real." },
          { options: ["discrepancy", "mistake"], answer: "discrepancy",
            why: "Neutral. <i>Mistake</i> assigns fault, which an audit note avoids until it has evidence." },
          { options: ["declaration", "invoice"], answer: "declaration",
            why: "The strongest finding in the note, and the one a company most wants to be able to state." },
          { options: ["retention", "notice"], answer: "retention",
            why: "How long records must be kept — here seven years." },
          { options: ["sign-off", "signature"], answer: "sign-off",
            why: "Formal approval naming the person. A signature alone does not say what was approved." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the audit note", letter: "B",
        concepts: ["approval", "risk"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Nour's reply to the auditor. Choose the word for each gap.",
        heading: "Our response",
        text: "Thank you. We accept both findings. Chasing delivery notes within thirty days is something we should have been ___ already, and I have put a name against it rather than leaving it to whoever notices. On reissued invoices, the person authorising the reissue will now ___ off and be named on the document. One point of clarification: the two-pallet discrepancy was found by our own warehouse before the goods left, which is why the invoice was ___ rather than amended. I mention it because ___ a document by hand would have been the easier course and is the one we are careful to avoid. I would rather be slow and ___ than quick and unable to show how a figure was reached. If anything in our response is unclear, I am happy to ___ it with you.",
        gaps: [
          { options: ["doing", "done"], answer: "doing",
            why: "<i>Should have been doing</i> — a continuing obligation that was not met." },
          { options: ["sign", "signing"], answer: "sign",
            why: "<i>Will sign off</i> — a modal takes the bare verb." },
          { options: ["reissued", "corrected"], answer: "reissued",
            why: "The rule from Unit 7: a document is reissued, never corrected by hand." },
          { options: ["correcting", "correct"], answer: "correcting",
            why: "A gerund as the subject of the clause — this unit's grammar, arriving early." },
          { options: ["traceable", "careful"], answer: "traceable",
            why: "The contrast is with <i>unable to show how a figure was reached</i>, which is about the trail rather than about care." },
          { options: ["go through", "go over"], answer: "go through",
            why: "<i>Go through</i> something means examine it item by item, which is what an auditor wants offered." }
        ],
        explain: { terms: [
          { en: "to put a name against something", gloss: "to make one person responsible for it", ar: "تحديد مسؤول بالاسم" },
          { en: "traceable", gloss: "able to be followed back through records", ar: "قابل للتتبّع" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices about records. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Corrections", lines: [
              "A document that is wrong is reissued under a new number, with the original kept.",
              "Nothing is corrected by hand and nothing is destroyed." ] },
            { h: "Declarations", lines: [
              "A customs declaration is signed by the person who prepared it, by name.",
              "If you are not certain of a figure, do not sign. Ask." ] },
            { h: "Retention", lines: [
              "Shipping records are kept for seven years from the date of the consignment.",
              "Do not destroy anything early, and do not keep personal data longer than the period requires." ] },
            { h: "Access", lines: [
              "Anyone may read the shipping file. Only two people may add to it.",
              "If you find something missing, say so — do not fill the gap yourself." ] }
          ] },
        items: [
          { para: 1, q: "An invoice has the wrong pallet count. What happens to the original?",
            options: [
              { text: "It is kept, and a new one is issued under a new number.", correct: true,
                why: "<i>With the original kept</i> and <i>nothing is destroyed</i> — the trail has to show the correction happened." },
              { text: "It is destroyed.", why: "Explicitly forbidden." },
              { text: "It is amended in pen.", why: "Also explicitly forbidden, and Unit 7 showed what it costs at the counter." } ] },
          { para: 2, q: "You are unsure whether a figure on a declaration is right. What does the notice say?",
            options: [
              { text: "Do not sign it — ask.", correct: true,
                why: "Two words, and they are the most consequential instruction in this unit." },
              { text: "Sign it and correct it later.", why: "A declaration is a formal statement of fact; there is no later." },
              { text: "Ask someone else to sign it.", why: "The signature belongs to whoever prepared it." } ] },
          { para: 3, q: "A shipping record is six years old. May it be destroyed?",
            options: [
              { text: "No — the period is seven years from the consignment date.", correct: true,
                why: "And the notice warns against destroying early as clearly as against keeping too long." },
              { text: "Yes, if the file is full.", why: "Not a reason the notice recognises." },
              { text: "Only with the auditor's permission.", why: "No such permission is mentioned." } ] },
          { para: 4, q: "You notice a delivery note missing from a file you may read but not write to.",
            options: [
              { text: "Report it — do not add anything yourself.", correct: true,
                why: "<i>Do not fill the gap yourself</i>, which protects both the file and you." },
              { text: "Add a copy from your own records.", why: "Exactly what the notice forbids." },
              { text: "Ignore it.", why: "The notice asks you to say so." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "approval"],
        kind: "build", task: null, n: 0,
        prompt: "The suffix <b>-ment</b> and the suffix <b>-ance</b>. Drag each root into the box for the suffix it takes.",
        note: { kind: "words", title: "Word building: making a noun from a verb",
                body: "<p>Both turn a verb into an abstract noun, and English chooses by habit.<br><i>ship → shipment</i> · <i>comply → compliance</i><br>There is no <i>complyment</i> and no <i>shipance</i>. Verbs ending in <i>-y</i> after a consonant often take <i>-ance</i>.</p>" },
        family: { word: "comply", forms: [
          { part: "verb", word: "com·PLY" },
          { part: "noun", word: "com·PLI·ance", note: "the y becomes i" },
          { part: "adjective", word: "com·PLI·ant" },
          { part: "adverb", word: "—", note: "no adverb in ordinary use" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "Every <b>shipment</b> needs a <b>declaration</b> and the <b>compliance</b> file needs both.",
            "The <b>agreement</b> requires our <b>assurance</b> that records are kept for seven years.",
            "<b>Management</b> sign-off is needed before any <b>clearance</b> is requested.",
            "There is a <b>discrepancy</b> and we need an <b>acknowledgement</b> that it was found by us." ] } ] },
        items: [
          { root: "ship",    affix: "-ment",  answer: "shipment",       why: "one consignment of goods. No <i>shipance</i>." },
          { root: "agree",   affix: "-ment",  answer: "agreement",      why: "the <i>e</i> stays before <i>-ment</i>." },
          { root: "manage",  affix: "-ment",  answer: "management",     why: "and note the <i>e</i> survives here too." },
          { root: "comply",  affix: "-ance",  answer: "compliance",     why: "the <i>y</i> becomes <i>i</i>." },
          { root: "assure",  affix: "-ance",  answer: "assurance",      why: "the silent <i>e</i> is dropped." },
          { root: "clear",   affix: "-ance",  answer: "clearance",      why: "as in customs clearance, from Unit 4." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "evidence"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "documents in an export file", options: [
            { text: "packing list", why: "what went on the pallets." },
            { text: "commercial invoice", why: "what is being charged for." },
            { text: "customs declaration", why: "the statement to the authority." },
            { text: "audit trail", correct: true, why: "Not a document but the chain through all of them." } ] },
          { group: "neutral audit words", options: [
            { text: "discrepancy", why: "names a gap without claiming a cause." },
            { text: "finding", why: "what an audit produces." },
            { text: "observation", why: "weaker than a finding, and equally neutral." },
            { text: "negligence", correct: true, why: "A judgement about conduct. An audit note reaches that only with evidence, and usually not at all." } ] },
          { group: "things a signature commits you to", options: [
            { text: "a declaration", why: "a formal statement of fact, by name." },
            { text: "a delivery note", why: "that what arrived is what the note says." },
            { text: "a sign-off", why: "that you approved it with the authority to do so." },
            { text: "a retention period", correct: true, why: "A rule about how long to keep things. Nobody signs it." } ] },
          { group: "correct ways to fix a wrong document", options: [
            { text: "reissue under a new number", why: "the rule in this unit." },
            { text: "issue a credit note", why: "from Unit 5, for an overcharge." },
            { text: "record the correction in the file", why: "so the trail shows what happened." },
            { text: "amend it by hand", correct: true, why: "Forbidden here and refused at the counter in Unit 7. It breaks the trail by making two versions indistinguishable." } ] }
        ] }

    ]
  };
})();
