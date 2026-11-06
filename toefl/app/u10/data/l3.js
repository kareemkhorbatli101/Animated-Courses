/* Unit 10 · Rules, Rights and Ethics — LESSON 3 · GRAMMAR
   Gerunds as subjects · gerunds against the present continuous ·
   verbs taking infinitives or gerunds. */
(function () {
  window.PAGE = {
    id: "u10-l3", unit: "u10", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Use an -ing form as a thing, not an action",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the gerund", letter: "A",
        concepts: ["read", "place"],
        kind: "annotate", task: null, n: 0,
        jobs: ["A gerund \u2014 the <i>-ing</i> form working as a noun",
               "A present participle \u2014 the <i>-ing</i> form inside a tense"],
        sentences: [
          { group: "The -ing form as a noun",
            text: "Lying is wrong.",
            job: "A gerund \u2014 the <i>-ing</i> form working as a noun",
            why: "<i>It is wrong</i> works, so <i>lying</i> is a noun here \u2014 the subject of the sentence, and not part of any tense." },
          { group: "The -ing form as a noun",
            text: "Protesting peacefully is protected.",
            job: "A gerund \u2014 the <i>-ing</i> form working as a noun",
            why: "Still a subject, and still replaceable by <i>it</i>, even with <i>peacefully</i> attached. A gerund can take adverbs and remain a noun." },
          { group: "The -ing form as a noun",
            text: "She admitted taking the documents.",
            job: "A gerund \u2014 the <i>-ing</i> form working as a noun",
            why: "Now an object rather than a subject: <i>she admitted it</i>. Certain verbs \u2014 <i>admit</i>, <i>deny</i>, <i>avoid</i> \u2014 take a gerund and never an infinitive." },
          { group: "The -ing form in a tense",
            text: "He is lying about where he was.",
            job: "A present participle \u2014 the <i>-ing</i> form inside a tense",
            why: "<i>He is it</i> is nonsense, so this is not a noun. <i>Is lying</i> is one verb in two words, and the <i>-ing</i> cannot be detached from it." },
          { group: "The -ing form in a tense",
            text: "They are protesting outside the building.",
            job: "A present participle \u2014 the <i>-ing</i> form inside a tense",
            why: "Same test, same answer. The identical word was a noun two lines ago; only its job in the sentence has changed." }
        ],
        prompt: "The same <i>-ing</i> form doing two completely different jobs. Click each line and say which. The test: could you replace the <i>-ing</i> word with <i>it</i>?",
        text: { every: 1, blocks: [
          { h: "A gerund — the -ing form as a noun", lines: [
            "Lying is wrong.",
            "Protesting peacefully is protected.",
            "She admitted taking the documents."
          ] },
          { h: "A present participle — the -ing form in a tense", lines: [
            "He is lying about where he was.",
            "They are protesting outside the building."
          ] }
        ] },
        after: "<p>In the first set you could replace the <i>-ing</i> word with <i>it</i>. In the second you could not. That is the test.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the gerund", letter: "B",
        concepts: ["word"],
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: gerunds and infinitives",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Gerund as subject:</b> takes a <b>singular</b> verb — <i>Breaking rules is…</i><br><b>Verb + gerund:</b> admit, avoid, consider, deny, enjoy, suggest<br><b>Verb + infinitive:</b> agree, decide, refuse, hope, promise, offer<br><b>Either, with a change of meaning:</b> <i>stop smoking</i> (give it up) / <i>stop to smoke</i> (pause in order to).</p>" },
        text: "A gerund used as the subject of a sentence takes a ___ verb. Verbs such as <i>admit</i> and <i>deny</i> are followed by a ___ . Verbs such as <i>refuse</i> and <i>agree</i> are followed by ___ . And with <i>stop</i>, the two forms mean ___ .",
        gaps: [
          { options: ["singular", "plural"], answer: "singular", why: "<i>Breaking rules <b>is</b> sometimes justified.</i>" },
          { options: ["gerund", "infinitive"], answer: "gerund", why: "<i>She admitted taking them.</i>" },
          { options: ["an infinitive", "a gerund"], answer: "an infinitive", why: "<i>They refused to accept it.</i>" },
          { options: ["different things", "the same thing"], answer: "different things",
            why: "<i>stop smoking</i> = give up; <i>stop to smoke</i> = pause in order to smoke." }
        ] },

            { id: "1c", section: 1, sectionTitle: "Review the gerund", letter: "C",
        concepts: ["word", "evidence"],
        kind: "cloze", task: null, n: 0,
        prompt: "The three verbs where the choice changes the meaning rather than only the form. Complete the rule.",
        heading: "Language connection: when the two forms mean different things",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>remember doing</b> — the memory of a past act · <b>remember to do</b> — not forgetting an obligation<br><b>try doing</b> — experiment with it · <b>try to do</b> — attempt something difficult<br><b>regret doing</b> — wish you had not · <b>regret to do</b> — a formal preface to bad news<br>With most other verbs the choice is simply fixed by the verb.</p>" },
        text: "<i>I remember signing it</i> refers to a ___ act. <i>I remembered to sign it</i> refers to an ___ that was not forgotten. <i>Try asking her</i> suggests an ___ , while <i>try to ask her</i> suggests the asking will be ___ . ",
        gaps: [
          { options: ["past", "future"], answer: "past",
            why: "The gerund looks back: you have the memory of doing it." },
          { options: ["obligation", "experiment"], answer: "obligation",
            why: "The infinitive looks forward: there was something you had to do." },
          { options: ["experiment", "difficulty"], answer: "experiment",
            why: "<i>Try doing</i> offers it as something to see whether it works." },
          { options: ["difficult", "easy"], answer: "difficult",
            why: "<i>Try to do</i> implies the attempt may not succeed." }
        ] },

      /* F26 \u2014 which verbs take a gerund, as a grid rather than a list. */
      { id: "1d", section: 1, sectionTitle: "Review the gerund", letter: "D",
        concepts: ["word"],
        kind: "matrix", task: null, n: 0,
        prompt: "Put each verb in its column. The test is whether you can replace what follows with <i>it</i>.",
        matrix: {
          rowLabel: "verb",
          cols: ["takes <i>doing</i>", "takes <i>to do</i>", "takes a <i>that</i> clause"],
          rows: [
            { item: "admit", col: "takes <i>doing</i>",
              why: "<i>She admitted taking the documents</i>, and <i>she admitted it</i> works, which is the test." },
            { item: "deny", col: "takes <i>doing</i>",
              why: "Same group as <i>admit</i>: verbs about owning or refusing an act take the gerund." },
            { item: "avoid", col: "takes <i>doing</i>",
              why: "<i>Avoid to answer</i> is not English, however reasonable it looks." },
            { item: "refuse", col: "takes <i>to do</i>",
              why: "<i>Refused answering</i> is wrong \u2014 and <i>refuse</i> sits next to <i>deny</i> in meaning, which is why this has to be learned rather than reasoned." },
            { item: "decide", col: "takes <i>to do</i>",
              why: "A decision points forward, and so does the infinitive. That is a memory aid, not a rule." },
            { item: "claim", col: "takes a <i>that</i> clause",
              why: "<i>Claimed that the consultation was genuine</i>. The gerund is not available here at all." },
            { item: "argue", col: "takes a <i>that</i> clause",
              why: "<i>Argue doing</i> and <i>argue to do</i> are both wrong; the clause is the only option." }
          ],
          note: "Notice <i>deny</i> and <i>refuse</i>: close in meaning, opposite in pattern."
        } },


      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A gerund as subject.", band: "A2",
            target: "Lying to a committee is a serious offence", jobs: { "is": "verb" },
            extra: ["Lie", "To lie", "are"], extraWhy: { "Lie": "Nothing in this sentence needs <i>Lie</i>. A word you cannot name a job for is the spare one.", "To lie": "Nothing in this sentence needs <i>To lie</i>. A word you cannot name a job for is the spare one.", "are": "<i>are</i> is a present form of <i>be</i> — and nothing in this sentence needs that done." },
            why: "A gerund subject takes a singular verb." },
          { cue: "A verb taking a gerund.", band: "B1",
            target: "He denied knowing anything about the decision", jobs: { "He": "subject", "about": "adverbial" },
            extra: ["to know", "know"], extraWhy: { "to know": "Nothing in this sentence needs <i>to know</i>. A word you cannot name a job for is the spare one.", "know": "The sentence uses <b>knowing</b>. <i>know</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>Deny</i> is always followed by <i>-ing</i>." },
          { cue: "A verb taking an infinitive.", band: "B1",
            target: "She agreed to appear before the committee", jobs: { "She": "subject", "before": "linker" },
            extra: ["appearing", "appear"], extraWhy: { "appearing": "The sentence uses <b>appear</b>. <i>appearing</i> is the same word in another form, and only one of them fits this slot.", "appear": "Nothing in this sentence needs <i>appear</i>. A word you cannot name a job for is the spare one." },
            why: "<i>Agree</i> takes <i>to</i> + infinitive." },
          { cue: "The present continuous, not a gerund.", band: "B2",
            target: "They are protesting outside the building this morning", jobs: { "They": "subject", "are": "verb" },
            extra: ["Protesting", "protest"], extraWhy: { "Protesting": "Nothing in this sentence needs <i>Protesting</i>. A word you cannot name a job for is the spare one.", "protest": "<i>protest</i> is not a word. A long adjective like <b>protesting</b> takes <i>more</i> or <i>most</i> in front of it, never an ending." },
            why: "Here the <i>-ing</i> form is part of the tense, not a noun." },
          { cue: "A gerund after a preposition.", band: "B2",
            target: "She was criticised for refusing to give evidence", jobs: { "She": "subject", "was": "verb", "for": "adverbial" },
            extra: ["refuse", "to refuse"], extraWhy: { "refuse": "The sentence uses <b>refusing</b>. <i>refuse</i> is the same word in another form, and only one of them fits this slot.", "to refuse": "Nothing in this sentence needs <i>to refuse</i>. A word you cannot name a job for is the spare one." },
            why: "After a preposition the <i>-ing</i> form is compulsory — and <i>refuse</i> keeps its own infinitive." },
          { cue: "The two forms of <i>stop</i>.", band: "C1",
            target: "He stopped answering questions but he did not stop to explain why", jobs: { "He": "subject", "but": "linker", "he": "subject", "did": "verb", "not": "verb" },
            extra: ["to answer", "explaining"], extraWhy: { "to answer": "Nothing in this sentence needs <i>to answer</i>. A word you cannot name a job for is the spare one.", "explaining": "The sentence uses <b>explain</b>. <i>explaining</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>stop answering</i> = ceased; <i>stop to explain</i> = paused in order to." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them turn on which form a particular verb insists upon.",
        items: [
          { cue: "A gerund as subject, with a long phrase.", band: "A2",
            target: "Refusing to give evidence carries its own penalty", jobs: {  },
            extra: ["Refuse", "To refuse", "carry"], extraWhy: { "Refuse": "The sentence uses <b>refusing</b>. <i>Refuse</i> is the same word in another form, and only one of them fits this slot.", "To refuse": "Nothing in this sentence needs <i>To refuse</i>. A word you cannot name a job for is the spare one.", "carry": "The sentence uses <b>carries</b>. <i>carry</i> is the same word in another form, and only one of them fits this slot." },
            why: "The whole phrase is the subject, and a gerund subject takes a singular verb however long it is." },
          { cue: "A verb that insists on a gerund.", band: "B1",
            target: "The committee considered adjourning until the following week", jobs: { "until": "linker" },
            extra: ["to adjourn", "adjourn"], extraWhy: { "to adjourn": "Nothing in this sentence needs <i>to adjourn</i>. A word you cannot name a job for is the spare one.", "adjourn": "The sentence uses <b>adjourning</b>. <i>adjourn</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>Consider</i> is always followed by <i>-ing</i> in this sense." },
          { cue: "A verb that insists on an infinitive.", band: "B1",
            target: "She refused to answer the question a second time", jobs: { "She": "subject" },
            extra: ["answering", "answer"], extraWhy: { "answering": "The sentence uses <b>answer</b>. <i>answering</i> is the same word in another form, and only one of them fits this slot.", "answer": "Nothing in this sentence needs <i>answer</i>. A word you cannot name a job for is the spare one." },
            why: "<i>Refuse</i> takes <i>to</i> + infinitive, with no alternative." },
          { cue: "A gerund after a preposition.", band: "B2",
            target: "He was accused of concealing the second report", jobs: { "He": "subject", "was": "verb", "of": "adverbial" },
            extra: ["conceal", "to conceal"], extraWhy: { "conceal": "The sentence uses <b>concealing</b>. <i>conceal</i> is the same word in another form, and only one of them fits this slot.", "to conceal": "Nothing in this sentence needs <i>to conceal</i>. A word you cannot name a job for is the spare one." },
            why: "<i>Accused of</i> ends in a preposition, so the verb after it takes <i>-ing</i>." },
          { cue: "Remember, looking backwards.", band: "B2",
            target: "She remembers signing the form but not reading it", jobs: { "She": "subject", "but": "linker", "not": "verb" },
            extra: ["to sign", "to read"], extraWhy: { "to sign": "Nothing in this sentence needs <i>to sign</i>. A word you cannot name a job for is the spare one.", "to read": "Nothing in this sentence needs <i>to read</i>. A word you cannot name a job for is the spare one." },
            why: "The gerund after <i>remember</i> refers to an act already performed." },
          { cue: "The two meanings of <i>stop</i>.", band: "C1",
            target: "He stopped answering questions but never stopped to explain why", jobs: { "He": "subject", "but": "linker", "never": "adverbial" },
            extra: ["to answer", "explaining"], extraWhy: { "to answer": "Nothing in this sentence needs <i>to answer</i>. A word you cannot name a job for is the spare one.", "explaining": "The sentence uses <b>explain</b>. <i>explaining</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>Stopped answering</i> means ceased; <i>stopped to explain</i> would mean paused in order to." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        concepts: ["correct", "evidence"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from essays. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "Breaking rules are sometimes justified.",
            fixed: "Breaking rules is sometimes justified.",
            wrong: "are", right: "is",
            why: "The subject is <i>breaking</i>, which is singular. The plural noun beside it is doing nothing to the verb." },
          { text: "He denied know anything about the decision.",
            fixed: "He denied knowing anything about the decision.",
            wrong: "know", right: "knowing",
            why: "<i>Deny</i> takes a gerund, so the bare verb cannot stand there." },
          { text: "She agreed appearing before the committee.",
            fixed: "She agreed to appear before the committee.",
            wrong: "appearing", right: "to appear",
            why: "<i>Agree</i> takes an infinitive, which is the opposite pattern from <i>deny</i>." },
          { text: "He was criticised for refuse to give evidence.",
            fixed: "He was criticised for refusing to give evidence.",
            wrong: "refuse", right: "refusing",
            why: "<i>For</i> is a preposition, so the verb after it takes <i>-ing</i> — and <i>refuse</i> keeps its own infinitive after that." },
          { text: "The committee considered adjourn until the following week.",
            fixed: "The committee considered adjourning until the following week.",
            wrong: "adjourn", right: "adjourning",
            why: "<i>Consider</i> takes a gerund in this sense, so the bare verb cannot follow it." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the noun. Both use this unit's suffix.",
        items: [
          { text: "Her a___ had two premises and one example.", answer: "argument", given: [0, 1, 2],
            why: "<i>argue → argument</i>, dropping the <i>e</i>." },
          { text: "A rule without e___ changes nothing.", answer: "enforcement", given: [0, 1, 2],
            why: "<i>enforce → enforcement</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more <b>-ment</b> nouns, both from verbs you have met in this unit.",
        items: [
          { text: "The two sides reached an a___ about the facts but not about the law.", answer: "agreement", given: [0, 1],
            why: "<i>agree → agreement</i>, keeping both <i>e</i>s — unlike <i>argue</i>, which loses one." },
          { text: "The a___ to the rule took effect at the start of the term.", answer: "amendment", given: [0, 1],
            why: "<i>amend → amendment</i>. The unrelated noun <i>amends</i> means something made good, not something changed." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        carry: "1a",
        concepts: ["word"],
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a verb form into each gap. Two in the bank are not used, and each of them is the wrong form for the verb in front of it.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Most of this is simply learnt verb by verb. The one reliable rule: after a preposition — <i>of</i>, <i>for</i>, <i>in</i>, <i>about</i>, <i>without</i> — the form is always <i>-ing</i>.</p>" },
        extra: ["to know", "appearing"],
        items: [
          { text: "He denied ___ anything about the second report.", answer: "knowing",
            why: "<i>deny</i> takes a gerund, always." },
          { text: "She agreed ___ before the committee.", answer: "to appear",
            why: "<i>agree</i> takes an infinitive, always." },
          { text: "He was accused of ___ the document.", answer: "concealing",
            why: "after a preposition the form is <i>-ing</i>, whatever the verb." },
          { text: "The committee considered ___ until Thursday.", answer: "adjourning",
            why: "<i>consider</i> takes a gerund in this sense." },
          { text: "She remembers ___ the form but not reading it.", answer: "signing",
            why: "the gerund after <i>remember</i> looks back at something done." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write three sentences beginning with a gerund subject. Check that each verb is singular.</p>" } }
    ]
  };
})();
