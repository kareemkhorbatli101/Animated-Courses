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
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two sets. The same <i>-ing</i> form is doing two completely different jobs.",
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

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A gerund as subject.", band: "A2",
            target: "Lying to a committee is a serious offence",
            extra: ["Lie", "To lie", "are"],
            why: "A gerund subject takes a singular verb." },
          { cue: "A verb taking a gerund.", band: "B1",
            target: "He denied knowing anything about the decision",
            extra: ["to know", "know"],
            why: "<i>Deny</i> is always followed by <i>-ing</i>." },
          { cue: "A verb taking an infinitive.", band: "B1",
            target: "She agreed to appear before the committee",
            extra: ["appearing", "appear"],
            why: "<i>Agree</i> takes <i>to</i> + infinitive." },
          { cue: "The present continuous, not a gerund.", band: "B2",
            target: "They are protesting outside the building this morning",
            extra: ["Protesting", "protest"],
            why: "Here the <i>-ing</i> form is part of the tense, not a noun." },
          { cue: "A gerund after a preposition.", band: "B2",
            target: "She was criticised for refusing to give evidence",
            extra: ["refuse", "to refuse"],
            why: "After a preposition the <i>-ing</i> form is compulsory — and <i>refuse</i> keeps its own infinitive." },
          { cue: "The two forms of <i>stop</i>.", band: "C1",
            target: "He stopped answering questions but he did not stop to explain why",
            extra: ["to answer", "explaining"],
            why: "<i>stop answering</i> = ceased; <i>stop to explain</i> = paused in order to." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them turn on which form a particular verb insists upon.",
        items: [
          { cue: "A gerund as subject, with a long phrase.", band: "A2",
            target: "Refusing to give evidence carries its own penalty",
            extra: ["Refuse", "To refuse", "carry"],
            why: "The whole phrase is the subject, and a gerund subject takes a singular verb however long it is." },
          { cue: "A verb that insists on a gerund.", band: "B1",
            target: "The committee considered adjourning until the following week",
            extra: ["to adjourn", "adjourn"],
            why: "<i>Consider</i> is always followed by <i>-ing</i> in this sense." },
          { cue: "A verb that insists on an infinitive.", band: "B1",
            target: "She refused to answer the question a second time",
            extra: ["answering", "answer"],
            why: "<i>Refuse</i> takes <i>to</i> + infinitive, with no alternative." },
          { cue: "A gerund after a preposition.", band: "B2",
            target: "He was accused of concealing the second report",
            extra: ["conceal", "to conceal"],
            why: "<i>Accused of</i> ends in a preposition, so the verb after it takes <i>-ing</i>." },
          { cue: "Remember, looking backwards.", band: "B2",
            target: "She remembers signing the form but not reading it",
            extra: ["to sign", "to read"],
            why: "The gerund after <i>remember</i> refers to an act already performed." },
          { cue: "The two meanings of <i>stop</i>.", band: "C1",
            target: "He stopped answering questions but never stopped to explain why",
            extra: ["to answer", "explaining"],
            why: "<i>Stopped answering</i> means ceased; <i>stopped to explain</i> would mean paused in order to." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
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
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the noun. Both use this unit's suffix.",
        items: [
          { text: "Her a___ had two premises and one example.", answer: "argument", given: [0, 1, 2],
            why: "<i>argue → argument</i>, dropping the <i>e</i>." },
          { text: "A rule without e___ changes nothing.", answer: "enforcement", given: [0, 1, 2],
            why: "<i>enforce → enforcement</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more <b>-ment</b> nouns, both from verbs you have met in this unit.",
        items: [
          { text: "The two sides reached an a___ about the facts but not about the law.", answer: "agreement", given: [0, 1],
            why: "<i>agree → agreement</i>, keeping both <i>e</i>s — unlike <i>argue</i>, which loses one." },
          { text: "The a___ to the rule took effect at the start of the term.", answer: "amendment", given: [0, 1],
            why: "<i>amend → amendment</i>. The unrelated noun <i>amends</i> means something made good, not something changed." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        from: "1a",
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
