/* Unit 1 · Introducing the Business — LESSON 3 · GRAMMAR
   Present and past verb forms · yes/no questions and answers · adjectives
   and adverbs. The grammar spine is Step Forward's, unchanged; the
   sentences are the ones this unit's business actually needs. */
(function () {
  window.PAGE = {
    id: "u01-l3", unit: "u01", block: "l3", up: "../", tab: "AT WORK",
    objective: "Use present and past forms to say what a company does and what it did",
    next: "l4.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Present and past at work", letter: "A",
        concepts: ["word", "time"],
        kind: "annotate", task: null, n: 0,
        prompt: "Four sentences about the same company. Click each one, then say which form it uses.",
        jobs: [
          "Simple present — what is true every week",
          "Present continuous — what is happening now",
          "Simple past — one finished event, dated",
          "Past continuous — what was going on when something else happened"
        ],
        sentences: [
          { text: "We supply three retailers in Amman.",
            job: "Simple present \u2014 what is true every week",
            why: "No time expression at all, which is itself the signal: this is the standing arrangement, not what is happening today." },
          { text: "We are finishing the Amman order this week.",
            job: "Present continuous \u2014 what is happening now",
            why: "<i>This week</i> is a period that has started and not ended. <i>We finish it this week</i> would make it a timetable entry instead." },
          { text: "We opened the Damascus office in 2021.",
            job: "Simple past \u2014 one finished event, dated",
            why: "The date closes the event. Once a sentence says <i>in 2021</i>, no present form can be used with it." },
          { text: "We were loading the truck when the client called.",
            job: "Past continuous \u2014 what was going on when something else happened",
            why: "Two past actions of different lengths. The long one takes the continuous; the short one that cuts into it takes the simple past." }
        ],
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Simple present</b> we supply · it costs<br><b>Present continuous</b> we are finishing<br><b>Simple past</b> we opened · they sent<br><b>Past continuous</b> we were loading</p>" },
        after: "<p>A company profile runs almost entirely on the first one. The others appear when something is in progress, or when you are telling the story of how the company got here.</p>" },

      { id: "1b", section: 1, sectionTitle: "Present and past at work", letter: "B",
        concepts: ["word", "sequence"],
        kind: "cloze", task: null, n: 0,
        prompt: "Look back at 1A, then complete the rule in your own words.",
        heading: "Language connection: which form, and when",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Question</b> Do you supply them? · Did you open it in 2021?<br><b>Negative</b> We do not export to Iraq. · They did not send it.<br>In both, the tense sits in the auxiliary and the main verb goes bare.</p>" },
        text: "We use the ___ for what the company does regularly, and the ___ for what is going on at the moment of speaking. For a finished event with a date we use the ___ . To ask a yes/no question about a habit we put ___ in front of the subject, and the main verb goes back to its base form.",
        gaps: [
          { options: ["simple present", "simple past"], answer: "simple present",
            why: "<i>We supply three retailers</i> — true every week, not only today." },
          { options: ["present continuous", "simple past"], answer: "present continuous",
            why: "<i>We are finishing it this week</i> — started, not finished, and still running." },
          { options: ["simple past", "present perfect"], answer: "simple past",
            why: "<i>In 2021</i> is a finished time. A date closes the door on the present perfect; Unit 4 returns to this." },
          { options: ["do or does", "is or are"], answer: "do or does",
            why: "<i>Do you supply them?</i> <i>Are you supplying them?</i> asks about this week only." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "supplier"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 5,
        prompt: "Put the words in order. Watch which verb form the cue asks for.",
        items: [
          { cue: "What the company does every week.", band: "B1",
            target: "We deliver to three retailers in Amman every month",
            jobs: { "We": "subject", "deliver": "verb", "to": "adverbial", "every month": "adverbial" },
            why: "<i>Every month</i> is what makes the simple present right. Frequency goes at the end here, and the verb takes no <i>-ing</i>." },
          { cue: "What is going on right now.", band: "B1",
            target: "The workshop is running a double shift this week",
            jobs: { "The workshop": "subject", "is": "verb", "this week": "adverbial" },
            why: "<i>This week</i> is unfinished, so the continuous fits. <i>Runs</i> would make it the normal pattern instead of the exception." },
          { cue: "One finished event, with its date.", band: "B1",
            target: "We opened the Damascus office in 2021",
            jobs: { "We": "subject", "opened": "verb", "in": "adverbial" },
            why: "A date closes the event. <i>Have opened</i> would be wrong the moment you say <i>in 2021</i>." },
          { cue: "A yes/no question about what they normally do.", band: "B1",
            target: "Do you hold stock for your regular clients",
            jobs: { "Do": "verb", "you": "subject", "for": "adverbial" },
            why: "<i>Do</i> carries the tense and comes first; <i>hold</i> stays bare. <i>Do you held</i> is the commonest version of this mistake." },
          { cue: "Say what was going on when something interrupted.", band: "B1",
            target: "We were loading the truck when the client called",
            jobs: { "We": "subject", "were": "verb", "when": "linker", "the client": "subject" },
            why: "The long action takes the continuous, the short one that cuts into it takes the simple past. Swapping them tells a different story." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["word", "comparison"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 5,
        prompt: "Five more. These add an adjective or an adverb, and the two do not sit in the same place.",
        items: [
          { cue: "Describe the supplier, using an adjective.", band: "B1",
            target: "They are a reliable supplier of raw cotton",
            jobs: { "They": "subject", "are": "verb", "of": "adverbial" },
            why: "The adjective goes in front of the noun it describes. <i>A supplier reliable</i> is the Arabic order, not the English one." },
          { cue: "Describe how they deliver, using an adverb.", band: "B1",
            target: "They always deliver on time",
            jobs: { "They": "subject", "always": "adverbial", "deliver": "verb", "on time": "adverbial" },
            why: "<i>Always</i> goes before the main verb; <i>on time</i> goes after it. Two adverbials, two different places." },
          { cue: "Say the fabric is good, and say how good.", band: "B1",
            target: "The finish is extremely good on the heavier weights",
            jobs: { "The finish": "subject", "is": "verb", "on": "adverbial" },
            why: "<i>Extremely</i> modifies the adjective, so it sits immediately in front of it." },
          { cue: "A negative about an export market.", band: "B1",
            target: "We do not export to Iraq at the moment",
            jobs: { "We": "subject", "do": "verb", "not": "verb", "to": "adverbial", "at the moment": "adverbial" },
            why: "<i>Not</i> goes straight after the auxiliary, and <i>export</i> stays bare. <i>We do not exported</i> is the mistake to watch for." },
          { cue: "A question about a finished event.", band: "B1",
            target: "Did they send the sample last week",
            jobs: { "Did": "verb", "they": "subject", "last week": "adverbial" },
            why: "<i>Did</i> carries the past, so <i>send</i> goes back to its base form. <i>Did they sent</i> puts the past in twice." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Find the word that should not be there", letter: "A",
        concepts: ["error", "correct"],
        kind: "errorfix", task: "read-proofread", cefr: "B2", n: 3,
        prompt: "Each line has one word too many. Click the word that should come out.",
        note: { kind: "gram", title: "What this is testing",
                body: "<p>Not spelling, and not vocabulary. Every extra word below is a small, correct-looking English word that the sentence does not have room for. Read the sentence without the word you suspect: if it still works, that was the word.</p>" },
        items: [
          { text: "We are a manufacturer of the woven cotton fabric.",
            fixed: "We are a manufacturer of woven cotton fabric.",
            wrong: "the", drop: true,
            why: "<i>Woven cotton fabric</i> here means the material in general, not one particular batch of it, so it takes no article." },
          { text: "Our prices are subject to change if the cotton price it moves sharply.",
            fixed: "Our prices are subject to change if the cotton price moves sharply.",
            wrong: "it", drop: true,
            why: "<i>The cotton price</i> is already the subject. Adding <i>it</i> gives the clause two subjects — the commonest extra word in this task." },
          { text: "We have been exported to Jordan since 2019.",
            fixed: "We have exported to Jordan since 2019.",
            wrong: "been", drop: true,
            why: "<i>Been</i> turns it passive, and a company is not exported. It exports." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Find the word that should not be there", letter: "B",
        concepts: ["error", "write"],
        kind: "errorfix", task: "read-proofread", cefr: "B2", n: 3,
        prompt: "Three more. Same rule: one word in each line has to come out.",
        items: [
          { text: "Please could you to check the stock before Wednesday.",
            fixed: "Please could you check the stock before Wednesday.",
            wrong: "to", drop: true,
            why: "After a modal — <i>could</i>, <i>can</i>, <i>will</i> — the verb goes bare. <i>Could you to check</i> puts an infinitive where none belongs." },
          { text: "The meeting it will be held in the office this week.",
            fixed: "The meeting will be held in the office this week.",
            wrong: "it", drop: true,
            why: "Again two subjects. <i>The meeting</i> is doing that job already." },
          { text: "They are more reliable than what our last supplier was.",
            fixed: "They are more reliable than our last supplier was.",
            wrong: "what", drop: true,
            why: "<i>Than</i> introduces the comparison on its own. <i>Than what</i> is common in speech and wrong in writing." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Find the word that should not be there", letter: "C",
        concepts: ["word", "approval"],
        kind: "wordbank", task: null, n: 0,
        prompt: "Complete each line with one word from the bank. Two words are left over.",
        note: { kind: "gram", title: "Watch the auxiliary",
                body: "<p>Every gap below is an auxiliary or a negative. They are the smallest words in the sentence and they carry the tense, which is why getting them wrong changes the meaning rather than just the grammar.</p>" },
        extra: ["are", "have"],
        items: [
          { text: "___ you supply fabric to retailers in Lebanon?", answer: "Do",
            why: "A habit, so <i>do</i>. <i>Are you supplying</i> would ask about this week only." },
          { text: "Lina ___ not handle the Iraq accounts.", answer: "does",
            why: "Third person singular, so the <i>-s</i> moves onto the auxiliary and <i>handle</i> stays bare." },
          { text: "___ they send the sample last week?", answer: "Did",
            why: "A finished time, so the past auxiliary \u2014 and <i>send</i> stays bare after it." },
          { text: "The workshop ___ running a double shift this week.", answer: "is",
            why: "Continuous: <i>be</i> plus <i>-ing</i>. This is the one present gap that is not <i>do</i>." },
          { text: "We ___ loading the truck when the client called.", answer: "were",
            why: "Past continuous for the long action. <i>We</i> takes <i>were</i>, not <i>was</i>." }
        ],
        closer: "<p>The leftover words are <b>are</b> and <b>have</b>. Both are correct English; neither fits a sentence that already has its tense. Note the last line: <i>open</i> looks like a verb and behaves like an adjective, which is why it takes <b>is</b> and not <b>does</b>.</p>" }

    ]
  };
})();
