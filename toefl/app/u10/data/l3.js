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

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the noun. Both use this unit's suffix.",
        items: [
          { text: "Her a___ had two premises and one example.", answer: "argument", given: [0, 1, 2],
            why: "<i>argue → argument</i>, dropping the <i>e</i>." },
          { text: "A rule without e___ changes nothing.", answer: "enforcement", given: [0, 1, 2],
            why: "<i>enforce → enforcement</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write three sentences beginning with a gerund subject. Check that each verb is singular.</p>" } }
    ]
  };
})();
