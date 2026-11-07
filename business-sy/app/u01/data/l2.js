/* Unit 1 · Introducing the Business — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u01-l2", unit: "u01", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a short internal message and a first reply to an enquiry",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What an internal message is made of", letter: "A",
        concepts: ["write", "sequence"],
        kind: "annotate", task: null, n: 0,
        prompt: "A note from Nour to the warehouse. Click each sentence, then say what job it is doing.",
        note: { kind: "writer", title: "Four jobs, in order",
                body: "<p>A short internal message almost always does the same four things, in the same order. Knowing the order is what lets you write one in two minutes instead of twenty.</p>" },
        jobs: [
          "Says why you are writing",
          "Gives the fact the reader needs",
          "Says what you want the reader to do",
          "Says when, or what happens next"
        ],
        sentences: [
          { text: "I am writing about the Amman order that goes out on Thursday.",
            job: "Says why you are writing",
            why: "It names the order and the day in the first line. A reader who has thirty messages can decide from this sentence alone whether to read on." },
          { text: "The client has added 200 metres of the dark blue to the original order.",
            job: "Gives the fact the reader needs",
            why: "One fact, with a number and a colour. Without it the request in the next line cannot be acted on." },
          { text: "Please check we have enough of that colour in stock before Wednesday midday.",
            job: "Says what you want the reader to do",
            why: "One action, for one person. A message asking for three things usually gets one of them done." },
          { text: "If we are short, tell me the same day so I can warn them before the truck is booked.",
            job: "Says when, or what happens next",
            why: "It says what to do if the answer is bad, and why the timing matters. That is what stops a reply arriving too late to be useful." }
        ],
        after: "<p>Notice how short it is. An internal message is not a letter: the reader already knows who you are and what the company does.</p>",
        explain: { terms: [
          { en: "internal", gloss: "inside the same company", ar: "داخلي" },
          { en: "in stock", gloss: "here now, ready to use", ar: "متوفّر في المخزون" },
          { en: "be short of", gloss: "not have enough", ar: "ينقصنا" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What an internal message is made of", letter: "B",
        concepts: ["write", "deliverable"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the message. Keep it to the four jobs you have just labelled.",
        scenarioTitle: "A colour is running low",
        scenario: "You are Nour Haddad, operations manager. Fadi in the warehouse has told you that the dark blue yarn is down to about 80 metres. The Amman order needs 200 metres of it and is due to be dispatched on Thursday.",
        to: "Samer Khoury, export coordinator",
        re: "Amman order — dark blue",
        placeholder: "Samer,\n\n",
        minWords: 30,
        frames: [
          "I am writing about …",
          "We only have … in stock.",
          "Please could you …",
          "Let me know by … so that …"
        ],
        note: { kind: "writer", title: "Length",
                body: "<p>30 to 40 words. That is the published length for an internal message at this level, and it is enough for four short sentences.</p>" },
        checklist: [
          "Does the first line say what it is about?",
          "Is the fact — how much is left — actually in the message?",
          "Have you asked for one specific action?",
          "Have you given a time, or said what happens next?"
        ],
        modelJobs: [
          "Says why you are writing",
          "Gives the fact the reader needs",
          "Says what you want the reader to do",
          "Says when, or what happens next"
        ],
        model: "Samer,\n\nI am writing about the Amman order due out on Thursday. We only have about 80 metres of the dark blue left, and the order needs 200. Please could you ask the client whether they will accept a part delivery. Let me know by Wednesday midday so I can decide about the truck." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "sequence"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. Each one is a sentence you could send today.",
        items: [
          { cue: "Say what the company does.", band: "B1",
            target: "We weave and finish cotton fabric near Hama",
            jobs: { "We": "subject", "and": "linker", "near": "adverbial" },
            why: "<i>Weave and finish</i> are two verbs sharing one subject, so <i>and</i> joins them and <i>we</i> is not repeated." },
          { cue: "Say how long you have been selling abroad.", band: "B1",
            target: "We have exported to Jordan since 2019",
            jobs: { "We": "subject", "have": "verb", "to": "adverbial", "since": "linker" },
            why: "<i>Since</i> takes the point the exporting started, not the length of it. Unit 4 is built on this." },
          { cue: "Ask the client a question about quantity.", band: "B1",
            target: "How many metres do you need for the first order",
            jobs: { "do": "verb", "you": "subject", "for": "adverbial" },
            why: "<i>How many</i> goes with a countable noun. The auxiliary <i>do</i> comes before the subject, and <i>need</i> stays bare." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "cost"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These are the sentences a first reply to an enquiry is made of.",
        items: [
          { cue: "Thank the writer and name what they asked about.", band: "B1",
            target: "Thank you for your enquiry about our cotton fabric",
            jobs: { "for": "adverbial", "about": "adverbial" },
            why: "<i>Enquiry about</i> is the fixed pair. <i>Enquiry for</i> is wrong, though <i>ask for</i> is right." },
          { cue: "Give the price, with a condition on it.", band: "B1",
            target: "Our prices are subject to change if the cotton price moves",
            jobs: { "Our prices": "subject", "are": "verb", "if": "linker" },
            why: "A real conditional: present tense in the <i>if</i> clause, even though it is about the future. Unit 7 returns to this." },
          { cue: "Offer to send something.", band: "B1",
            target: "I can send you a sample this week at no charge",
            jobs: { "I": "subject", "can": "verb", "this week": "adverbial", "at": "adverbial" },
            why: "Two adverbials, time before manner-or-cost. <i>At no charge</i> is more formal than <i>for free</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A second internal message. Same four jobs, different situation.",
        scenarioTitle: "The Thursday meeting moves",
        scenario: "You are Samer. The Thursday meeting has been moved to 09:00 and will be in the office rather than the workshop. Three people need to know: Nour, Lina and Fadi. Fadi starts his shift at 06:00 and will not see an email after 08:00.",
        to: "Nour, Lina, Fadi",
        re: "Thursday meeting — new time and room",
        placeholder: "All,\n\n",
        minWords: 30,
        frames: [
          "This week's meeting …",
          "It will be in … , not …",
          "Fadi — please …",
          "Let me know if …"
        ],
        note: { kind: "writer", title: "One reader is different",
                body: "<p>Fadi cannot read an email after 08:00. A message that ignores that is a message that fails for one of its three readers. Say so inside the message.</p>" },
        checklist: [
          "Is the new time in the first line?",
          "Have you said the room has changed as well?",
          "Have you dealt with the fact that Fadi will not see this in time?",
          "Is it still under about 50 words?"
        ],
        modelJobs: [
          "Says why you are writing",
          "Gives the fact the reader needs",
          "Says what you want the reader to do",
          "Says when, or what happens next"
        ],
        model: "All,\n\nThis week's meeting moves to 09:00 on Thursday. It will be in the office, not the workshop. Fadi, you will be on shift before this reaches you, so I will tell you in person at six. Let me know today if 09:00 does not work." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now write outside the company. The reader does not know you, so more of the message has to do the work.",
        scenarioTitle: "Reply to an enquiry",
        scenario: "Rana Darwish, a buyer at a home textiles retailer in Amman, has written asking what cotton fabric you make, what the lead time is, and whether you can send a sample. Your lead time is four weeks, six for an order above 2,000 metres. Samples are free.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Your enquiry — cotton fabric",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "Thank you for your enquiry about …",
          "We are a manufacturer of …",
          "Our standard lead time is … , though …",
          "I can send … at no charge.",
          "I look forward to hearing from you."
        ],
        note: { kind: "writer", title: "Length, and why it changes",
                body: "<p>60 to 80 words here, against 30 to 40 for the internal note. The extra words are not politeness: they are the facts a stranger does not already have — who you are, what you make, and the condition on the lead time.</p>" },
        checklist: [
          "Have you named what she asked about?",
          "Have you said what the company actually makes?",
          "Is the condition on the lead time there, not just the four weeks?",
          "Have you answered the sample question with a yes or a no?",
          "Is there a greeting and a sign-off?"
        ],
        modelJobs: [
          "Thanks the writer and names the enquiry",
          "Says who the company is",
          "Answers the question about time, with its condition",
          "Answers the question about the sample",
          "Closes and invites a reply"
        ],
        model: "Dear Ms Darwish,\n\nThank you for your enquiry about our cotton fabric. We are a manufacturer of woven and finished cotton, based near Hama, and we have exported to the Jordanian market since 2019.\n\nOur standard lead time is four weeks. For an order above 2,000 metres it is six. I can send you a sample this week at no charge — please confirm which weight you would like.\n\nI look forward to hearing from you.\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "evidence"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the company's own profile page. Facts, in an order a reader can follow.",
        min: 60,
        note: { kind: "writer", title: "Order matters more than vocabulary",
                body: "<p>A profile that jumps from staff numbers to export markets to history reads as a list. The order below is the one most company profiles use, and it is worth copying before you vary it.</p>" },
        must: [
          "What the company makes",
          "Where it is",
          "Who it sells to",
          "One number — staff, years, or turnover"
        ],
        model: "Orontes Textiles is a family firm near Hama that weaves and finishes cotton fabric. Its forty staff work in a single workshop, with a small sales office in Damascus. The company supplies home textile retailers in Jordan, Lebanon and Iraq, and has exported to the Jordanian market since 2019. Last year its turnover was just over forty million Syrian pounds.",
        explain: { terms: [
          { en: "family firm", gloss: "a company owned and run by one family", ar: "شركة عائلية" },
          { en: "supply", gloss: "to sell goods to, regularly", ar: "يزوِّد" },
          { en: "turnover", gloss: "total sales in a period", ar: "حجم الأعمال" }
        ] } }

    ]
  };
})();
