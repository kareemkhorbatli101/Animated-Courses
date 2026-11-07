/* Unit 3 · Comparing Suppliers — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u03-l4", unit: "u03", block: "l4", up: "../", tab: "AT WORK",
    objective: "Question a supplier's claim on the phone, and keep /v/, /f/ and /b/ apart while doing it",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Ask the question behind the claim", letter: "A",
        concepts: ["listen", "evidence"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six things a supplier says. Choose the reply that asks for the evidence rather than accepting the claim.",
        note: { kind: "life", title: "The useful question is almost always a number",
                body: "<p>A supplier's claim is usually true and vague at the same time. <em>How many</em>, <em>since when</em> and <em>compared with what</em> turn it into something you can check.</p>" },
        items: [
          { who: "fadi", say: "We have a very strong record on delivery.",
            options: [
              { text: "How many orders, and how many were late?", correct: true,
                why: "Turns <i>strong</i> into two numbers. Either they have them or they do not, and both answers tell you something." },
              { text: "That's good to hear.", why: "Accepts the claim and learns nothing." },
              { text: "So do we.", why: "Changes the subject to yourself." } ] },
          { who: "samer", say: "Our prices are the most competitive in the region.",
            options: [
              { text: "Compared with which suppliers, and at what quantity?", correct: true,
                why: "A superlative needs a group. Asking for the group is how you find out whether the claim means anything." },
              { text: "I doubt that.", why: "Picks a fight instead of asking a question, and you still have no information." },
              { text: "Then send me a quotation.", why: "Reasonable later. It skips the chance to test the claim." } ] },
          { who: "nour", say: "We can usually turn an order round in three weeks.",
            options: [
              { text: "What does <i>usually</i> mean — how often has it been longer?", correct: true,
                why: "<i>Usually</i> is the word to catch. The supplier chose it carefully and you should treat it as carefully." },
              { text: "Three weeks is fine.", why: "Accepts the softest version of the promise as if it were the firm one." },
              { text: "Can you do two?", why: "Negotiates a number you have not yet established is real." } ] },
          { who: "lina", say: "All our paperwork is fully compliant.",
            options: [
              { text: "Which certificates do you hold, and when were they last renewed?", correct: true,
                why: "Compliance is a set of documents with dates on them. Naming them is the only way to check." },
              { text: "Good, that saves time.", why: "Takes the most consequential claim in cross-border trade entirely on trust." },
              { text: "Everyone says that.", why: "Sceptical and useless. It invites a defence, not a document." } ] },
          { who: "rana", say: "We have plenty of capacity for an order this size.",
            options: [
              { text: "What are you running at now, as a percentage?", correct: true,
                why: "<i>Plenty</i> is a feeling; a utilisation figure is a fact. A mill at ninety per cent has plenty until one machine stops." },
              { text: "How big is your workshop?", why: "Size is not capacity, and a large mill can be fully booked." },
              { text: "Good.", why: "Accepts the vaguest word in the sentence." } ] },
          { who: "fadi", say: "We have worked with buyers in Amman for years.",
            options: [
              { text: "Could you give me two I could telephone?", correct: true,
                why: "Converts a claim about the past into a reference you can take up. The hesitation tells you as much as the answer." },
              { text: "Which part of Amman?", why: "A detail that cannot be checked and does not matter." },
              { text: "So have we.", why: "Again, turns their claim into a conversation about you." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Ask the question behind the claim", letter: "B",
        concepts: ["listen", "risk"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. Here the right answer keeps the relationship while still refusing to be satisfied.",
        items: [
          { who: "samer", say: "I'd rather not give references — our clients value their privacy.",
            options: [
              { text: "I understand. Could you ask two of them whether they would mind?", correct: true,
                why: "Accepts the reason and keeps the request alive. Most clients say yes when actually asked." },
              { text: "Then we can't proceed.", why: "Possibly true at the end. As a first response it throws away an order over a question." },
              { text: "That's fine, don't worry.", why: "Drops the single best piece of evidence available to you." } ] },
          { who: "nour", say: "The price is only valid if you confirm today.",
            options: [
              { text: "I can't decide today. What would the price be on Thursday?", correct: true,
                why: "Refuses the pressure without refusing the deal, and finds out whether the deadline was real." },
              { text: "All right, I confirm.", why: "Decides under time pressure that the other side invented." },
              { text: "That's not how we work.", why: "A rule rather than a question. You still do not know Thursday's price." } ] },
          { who: "lina", say: "Everyone in the market is raising prices this quarter.",
            options: [
              { text: "By how much, in your case?", correct: true,
                why: "Takes the general claim and asks for the specific number, which is the only part that affects you." },
              { text: "Not everyone.", why: "Argues the premise instead of getting the figure." },
              { text: "That's unfortunate.", why: "Sympathy instead of information." } ] },
          { who: "fadi", say: "Three weeks, but I'd need the deposit by Thursday.",
            options: [
              { text: "And if the deposit is Friday — does three weeks still hold?", correct: true,
                why: "Tests the condition before agreeing to it. Conditions are where lead times quietly become longer." },
              { text: "Thursday is fine.", why: "Agrees to a date without checking what it buys." },
              { text: "Why Thursday?", why: "Not useless, but it asks about their reason rather than your consequence." } ] },
          { who: "rana", say: "We can beat any quotation you've had.",
            options: [
              { text: "I can't show you another supplier's quotation.", correct: true,
                why: "Declines cleanly. Showing one supplier's price to another is how buyers lose the trust of both." },
              { text: "It's 1,690 from Homs.", why: "Hands over confidential information that was given to you in a tender." },
              { text: "Go on then.", why: "Invites them to guess, which wastes a round of correspondence." } ] },
          { who: "samer", say: "Our last client had no complaints at all.",
            options: [
              { text: "Was anything late, even by a few days?", correct: true,
                why: "<i>No complaints</i> and <i>nothing went wrong</i> are different claims. The narrower question is harder to answer loosely." },
              { text: "That's a good sign.", why: "Treats an absence of complaints as evidence of performance." },
              { text: "Who were they?", why: "Fair, but it asks for a name rather than for what happened." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a supplier call", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Rana calls the Homs mill to test their quotation. Fill in the form as you listen.",
        audio: { track: "u03-call-1", label: "Call: Rana and Homs Spinning",
          lines: [
            { who: "rana", text: "Mr Haffar, thank you for your quotation. Before I put it to my manager I want to check three things." },
            { who: "ziad", text: "Of course." },
            { who: "rana", text: "You quoted 1,690 a metre. Is that ex works or landed in Amman?" },
            { who: "ziad", text: "Ex works Homs. Freight would be about ninety a metre on top." },
            { who: "rana", text: "So landed it is 1,780, not 1,690." },
            { who: "ziad", text: "Yes, that is right." },
            { who: "rana", text: "Second, you quoted seven weeks. How often has an order of this size taken longer?" },
            { who: "ziad", text: "Twice in the last year, out of nine orders. Both times it was the dye house, not us." },
            { who: "rana", text: "I appreciate you giving me the number. Twice in nine is not a disaster, but it is not nothing either." },
            { who: "ziad", text: "No. I would rather tell you than have you find out." },
            { who: "rana", text: "Third, references. Two I can telephone." },
            { who: "ziad", text: "I can give you one today. The other client I would have to ask first." },
            { who: "rana", text: "Ask them. If they say no, tell me they said no — that is useful to me too." },
            { who: "rana", text: "One last thing. Your quotation does not say what happens if the dye house is late again." },
            { who: "ziad", text: "No, it does not. What would you want it to say?" },
            { who: "rana", text: "That you tell me within a day of knowing, and give me a revised date. Not a penalty \u2014 I am not asking for money. I am asking not to find out from the delivery." },
            { who: "ziad", text: "I can put that in writing. That costs me nothing and I should have offered it." },
            { who: "ziad", text: "Understood. I will call you back on Wednesday." } ] },
        title: "Call notes — Homs Spinning, tender 17/04",
        lines: [
          "Quoted price: ___ a metre",
          "Delivery term: ex ___",
          "Freight adds about ___ a metre",
          "Landed cost: ___ a metre",
          "Quoted lead time: ___ weeks",
          "Orders over that time: ___ out of nine in the last year",
          "Cause given: the ___ house, not the mill",
          "References: one today, second by ___"
        ],
        gaps: [
          { answer: "1690", why: "The headline figure, which the rest of the call takes apart." },
          { answer: "works", why: "<i>Ex works Homs</i>. One word, and it moves ninety a metre." },
          { answer: "ninety", why: "He gives it without being pushed, which is itself a good sign." },
          { answer: "1780", why: "1,690 plus 90. Rana does the arithmetic out loud, which is how she checks he agrees." },
          { answer: "seven", why: "The quoted figure, before she tests it." },
          { answer: "twice", why: "The answer that makes the call worth making. A vague <i>rarely</i> would have told her nothing." },
          { answer: "dye", why: "He names the cause rather than denying the problem. Whether that reassures you is a judgement." },
          { answer: "Wednesday", why: "He gives a day for the thing he cannot do now, which is the right way to leave a loose end." }
        ],
        note: { kind: "life", title: "Write the term, not just the number",
                body: "<p>The most important thing in this call is two words: <b>ex works</b>. A note recording 1,690 and not recording the delivery term would make this mill look like the cheapest by ninety a metre.</p>" },
        explain: { terms: [
          { en: "on top", gloss: "in addition to the price already given", ar: "إضافةً إلى ذلك" },
          { en: "dye house", gloss: "a workshop that dyes fabric for others", ar: "مصبغة" },
          { en: "loose end", gloss: "something not yet finished or decided", ar: "أمر معلّق" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>Arabic has <b>/f/</b> and <b>/b/</b> but no <b>/v/</b> and no <b>/p/</b>, so English piles four sounds into two slots. The fix is mechanical rather than musical.</p><p><b>/f/</b> top teeth on bottom lip, no voice. <b>/v/</b> same position, voice on. <b>/b/</b> both lips together, voice on. <b>/p/</b> both lips, no voice.</p><em>/f/ — fan · file · proof</em><em>/v/ — van · vile · prove</em><em>/b/ — ban · bile · probe</em>",
        items: [
          { say: "van", options: [
            { text: "van", correct: true, why: "/v/ — teeth on lip, voice on. The vehicle that takes the goods." },
            { text: "fan", why: "/f/ — same mouth shape, no voice. Put a hand on your throat: <i>van</i> buzzes and <i>fan</i> does not." } ] },
          { say: "invoice", options: [
            { text: "invoice", correct: true, why: "/v/ in the middle. The commonest /v/ word in this whole course." },
            { text: "infoice", why: "Not a word — it is <i>invoice</i> with the voice switched off, and it is what a listener hears when the lip is not touching the teeth." } ] },
          { say: "verify", options: [
            { text: "verify", correct: true, why: "/v/ at the start and /f/ in the middle: the same mouth shape twice, voiced then unvoiced, in one word." },
            { text: "berify", why: "Not a word. <i>B</i> closes both lips; <i>v</i> needs the teeth on the lip. The two feel similar and sound completely different." } ] },
          { say: "available", options: [
            { text: "available", correct: true, why: "/v/ in the second syllable. <i>Is it available?</i> is a question you will ask every week." },
            { text: "abailable", why: "Not a word, and the single most recognisable Arabic-English substitution there is." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Every one makes you switch between the lip-and-teeth sounds and the two-lips ones.",
        speaker: "rana",
        lines: [
          "Please verify that the invoice is available before Friday.",
          "The van from the ferry brought five boxes of fabric.",
            "We have proof that the van was never delivered.",
          "Seven of the five invoices have been verified."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the call in 2A.",
        items: [
          { answer: "Is that ex works or landed in Amman?",
            why: "The question worth ninety a metre. <i>Ex works</i> is two words." },
          { answer: "Freight would be about ninety a metre on top.",
            why: "<i>On top</i> means in addition. <i>Freight</i> has the /f/, and <i>of</i> later would have the /v/." },
          { answer: "How often has an order of this size taken longer?",
            why: "<i>How often</i> asks for a count. <i>Have you ever been late</i> invites a no." },
          { answer: "Twice in the last year, out of nine orders.",
            why: "A number and a denominator. Twice out of nine means something; <i>twice</i> alone does not." },
          { answer: "I would rather tell you than have you find out.",
            why: "<i>Would rather X than Y</i> again, from Unit 2, in a supplier's mouth this time." }
        ],
        closer: "<p>Notice that the supplier who volunteered the bad number is the one who comes out of this call best. Rana now trusts his seven weeks more than she trusted it before he admitted to two late orders.</p>" }

    ]
  };
})();
