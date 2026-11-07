/* Unit 2 · Plans, Quotes and Promises — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u02-l2", unit: "u02", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a quotation that commits to a date, and an internal note that does not",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a quotation promises", letter: "A",
        concepts: ["write", "agreement"],
        kind: "annotate", task: null, n: 0,
        prompt: "A quotation, sentence by sentence. Click each one and say what job it does.",
        note: { kind: "writer", title: "Five jobs",
                body: "<p>A quotation is a legal document in a friendly coat. Each sentence below does exactly one job, and leaving one out is what causes the follow-up email.</p>" },
        jobs: [
          "Names what is being priced",
          "Gives the price, per unit",
          "Says how long the price holds",
          "Says when the goods would arrive",
          "States what is still not settled"
        ],
        sentences: [
          { text: "We are pleased to quote for 1,200 metres of our light weight cotton, in the shade you selected.",
            job: "Names what is being priced",
            why: "Quantity, product and specification. A quotation that does not say exactly what it covers cannot be compared with anyone else's." },
          { text: "The unit price is 1,650 Syrian pounds a metre.",
            job: "Gives the price, per unit",
            why: "<i>A metre</i> is doing the real work. A bare figure invites the buyer to read it as a total." },
          { text: "This price is valid for thirty days from the date of this letter.",
            job: "Says how long the price holds",
            why: "The end date is what turns an opinion about price into an offer." },
          { text: "Our lead time is four weeks from receipt of your order.",
            job: "Says when the goods would arrive",
            why: "<i>From receipt of your order</i>, not from today. The clock starts when they act, which protects you from a slow decision." },
          { text: "We are not yet able to confirm an earlier date, as the yarn delivery is still outstanding.",
            job: "States what is still not settled",
            why: "The sentence most people delete. Saying what is unsettled now is cheaper than explaining it after you have missed it." }
        ],
        after: "<p>Four of the five are promises. The fifth is a promise about what you are <i>not</i> promising, and it is the one that keeps the other four honest.</p>",
        explain: { terms: [
          { en: "outstanding", gloss: "still not done or not received", ar: "ما زال معلّقًا" },
          { en: "receipt", gloss: "the act of receiving something", ar: "استلام" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a quotation promises", letter: "B",
        concepts: ["write", "deadline"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Before the quotation goes out, warn your own side. Thirty to forty words.",
        scenarioTitle: "Hold the line on four weeks",
        scenario: "You are Samer. You are about to quote Cedar Linens in Beirut. The dyer has not confirmed the yarn, so you are not willing to offer less than four weeks. You know the buyer will push for three.",
        to: "Nour Haddad, operations",
        re: "Cedar Linens quote — lead time",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "I am going to quote …",
          "The dyer has not …",
          "If she asks for three weeks, I will …",
          "Tell me if …"
        ],
        note: { kind: "writer", title: "going to, not will",
                body: "<p>You decided this before you opened the message, so <b>I am going to quote</b> is the honest form. <b>I will quote</b> sounds like a decision taken while typing, which is not what happened.</p>" },
        checklist: [
          "Does the first line say what you are about to do?",
          "Is the reason for four weeks in the message?",
          "Have you said what you will do if she pushes back?",
          "Have you given Nour a way to stop you?"
        ],
        modelJobs: [
          "Says what you are going to do",
          "Gives the reason",
          "Says what happens if the client pushes",
          "Leaves the reader a way to object"
        ],
        model: "Nour,\n\nI am going to quote Cedar Linens four weeks this morning. The dyer still has not confirmed the yarn, so three weeks would be a date I cannot stand behind. If she pushes for three I will say I can review it once the yarn is confirmed. Tell me before eleven if you disagree." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "deadline"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. Each one is a different size of promise.",
        items: [
          { cue: "A decision you took before this conversation.", band: "B1",
            target: "We are going to quote four weeks on this order",
            jobs: { "We": "subject", "are": "verb", "on": "adverbial" },
            why: "<i>Going to</i> reports a decision already made. The evidence for it exists before you speak." },
          { cue: "A decision you are taking as you speak.", band: "B1",
            target: "I will call the dyer this afternoon and find out",
            jobs: { "I": "subject", "will": "verb", "this afternoon": "adverbial", "and": "linker" },
            why: "<i>Will</i> for a decision made at the moment of speaking. Offering to do something is its commonest use." },
          { cue: "A prediction, with the evidence in the sentence.", band: "B1",
            target: "The cotton price is going to rise again before spring",
            jobs: { "The cotton price": "subject", "is": "verb", "before": "adverbial" },
            why: "<i>Going to</i> also carries a prediction you can see coming. <i>Will rise</i> would be a flatter guess, with nothing behind it." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "comparison"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These are the sentences you use when you prefer one thing to another.",
        items: [
          { cue: "Say which of two options you prefer.", band: "B1",
            target: "I would rather quote thirty days than sixty",
            jobs: { "I": "subject", "would": "verb", "rather": "adverbial", "than": "linker" },
            why: "<i>Would rather X than Y</i> — and the verb after <i>rather</i> has no <i>to</i>. <i>Would rather to quote</i> is the usual error." },
          { cue: "Say what you would prefer someone else to do.", band: "B1",
            target: "I would rather you did not promise a date yet",
            jobs: { "I": "subject", "would": "verb", "you": "subject", "not": "verb" },
            why: "When the second person is different, <i>would rather</i> takes a past form: <i>I would rather you did not</i>. It is not about the past." },
          { cue: "Refuse a date without refusing the order.", band: "B1",
            target: "I cannot commit to the fourteenth until the yarn is confirmed",
            jobs: { "I": "subject", "cannot": "verb", "to": "adverbial", "until": "linker" },
            why: "<i>Until</i> turns a refusal into a condition. The buyer hears what has to happen rather than no." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A second internal note. The buyer has pushed back, as expected.",
        scenarioTitle: "She asked for three weeks",
        scenario: "Cedar Linens has replied asking for three weeks and hinting that another supplier has offered it. You still cannot commit. You want Nour to tell you whether the workshop could do three weeks if the yarn arrives on time.",
        to: "Nour Haddad, operations",
        re: "Cedar Linens — three weeks?",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "Cedar Linens has come back asking …",
          "I have not …",
          "If the yarn arrives on … , could we … ?",
          "I would rather … than …"
        ],
        note: { kind: "writer", title: "Ask a question that can be answered",
                body: "<p><i>Can we do three weeks?</i> cannot be answered honestly, because it depends on the yarn. <i>If the yarn arrives Thursday, could we do three weeks?</i> can be. Put the condition in the question.</p>" },
        checklist: [
          "Have you said what the client asked for?",
          "Have you made clear you did not agree to it?",
          "Is your question conditional, so it can actually be answered?",
          "Have you said what you would prefer?"
        ],
        modelJobs: [
          "Says what the client asked for",
          "Says what you did not do",
          "Asks a question with the condition inside it",
          "States your own preference"
        ],
        model: "Nour,\n\nCedar Linens has come back asking for three weeks, and hinting someone else has offered it. I have not agreed to anything. If the yarn arrives on Thursday, could the workshop finish 1,200 metres in three weeks? I would rather lose the order than quote a date we miss on a first delivery." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "cost"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now the quotation itself. Sixty to eighty words, and every number it needs.",
        scenarioTitle: "Quotation to Cedar Linens",
        scenario: "1,200 metres of light weight cotton. 1,650 Syrian pounds a metre, valid thirty days. Lead time four weeks from the order date. A 30% deposit applies because this is a first order. You cannot yet commit to anything earlier than four weeks.",
        to: "Ms Hiba Nasser, Cedar Linens, Beirut",
        re: "Quotation 2041 — light weight cotton",
        placeholder: "Dear Ms Nasser,\n\n",
        minWords: 60,
        frames: [
          "Thank you for …",
          "We are pleased to quote … at … a metre.",
          "This price is valid for …",
          "Our lead time is … from …",
          "As this is a first order, …",
          "I am not yet able to …"
        ],
        note: { kind: "writer", title: "Five numbers",
                body: "<p>Quantity, unit price, validity, lead time, deposit. A quotation missing one of the five always produces a reply asking for it, and that reply costs both sides a day.</p>" },
        checklist: [
          "Is the quantity there?",
          "Is the price per metre, not just a figure?",
          "Have you given the validity period?",
          "Is the lead time measured from the order, not from today?",
          "Have you explained the deposit rather than just stating it?",
          "Have you said what you cannot yet confirm?"
        ],
        modelJobs: [
          "Names what is being priced",
          "Gives the unit price",
          "Gives the validity",
          "Gives the lead time",
          "Explains the deposit",
          "States what is not settled"
        ],
        model: "Dear Ms Nasser,\n\nThank you for your enquiry and for visiting the workshop last week.\n\nWe are pleased to quote for 1,200 metres of our light weight cotton at 1,650 Syrian pounds a metre. This price is valid for thirty days from today. Our lead time is four weeks from receipt of your order.\n\nAs this is a first order, we ask for a deposit of thirty per cent, with the balance due thirty days after invoice.\n\nI am not yet able to confirm a shorter lead time, as our yarn delivery is still outstanding. I will write again as soon as it is confirmed.\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "margin"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph explaining the deposit to a client who has asked why it exists.",
        min: 60,
        note: { kind: "writer", title: "Explaining a term you cannot drop",
                body: "<p>Three moves: say what the term is, say why it exists, and say what would change it. Never only the first. A rule with no reason reads as a lack of trust, which is exactly what the client is worried about.</p>" },
        must: [
          "What the deposit is, as a figure",
          "Why it applies on a first order",
          "What happens to it — that it comes off the price",
          "When it would stop applying"
        ],
        model: "On a first order we ask for a deposit of thirty per cent of the total, with the balance due thirty days after we invoice you. The deposit is not an extra charge: it comes off the price, so the total you pay is the same. We ask for it because a first order means cutting and dyeing fabric to your specification before we have worked together, and that fabric cannot be sold to anyone else. From your second order onwards we invoice in full after dispatch, like our other regular clients.",
        explain: { terms: [
          { en: "non-refundable", gloss: "not returned if the order is cancelled", ar: "غير قابل للاسترداد" },
          { en: "to your specification", gloss: "made exactly as you asked", ar: "حسب مواصفاتكم" }
        ] } }

    ]
  };
})();
