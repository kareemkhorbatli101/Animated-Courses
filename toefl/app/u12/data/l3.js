/* Unit 12 · Art, Audience and Culture — LESSON 3 · GRAMMAR
   Verbs + infinitives · verbs + gerunds or infinitives. */
(function () {
  window.PAGE = {
    id: "u12-l3", unit: "u12", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Choose the form the verb demands",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the patterns", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the three groups. The verb decides the form — there is no meaning rule behind it.",
        text: { every: 1, blocks: [
          { h: "Infinitive only", lines: [
            "She decided to leave the ending unresolved.",
            "They refused to explain it.",
            "He hopes to film the sequel next year."
          ] },
          { h: "Gerund only", lines: [
            "Audiences enjoy watching a story they know.",
            "She avoided answering the question.",
            "He suggested cutting the final scene."
          ] },
          { h: "Either", lines: [
            "Critics began to notice. / Critics began noticing.",
            "He stopped explaining. / He stopped to explain."
          ] }
        ] },
        after: "<p>The third group is the trap. With <i>begin</i> nothing changes; with <i>stop</i> everything does.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the patterns", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: which form follows which verb",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Infinitive:</b> decide, refuse, hope, agree, offer, promise, choose<br><b>Gerund:</b> enjoy, avoid, suggest, admit, deny, consider, finish<br><b>Either, same meaning:</b> begin, start, continue, like, prefer<br><b>Either, different meaning:</b> stop, remember, forget, try</p>" },
        text: "After <i>decide</i> and <i>refuse</i> we use ___ . After <i>enjoy</i> and <i>avoid</i> we use ___ . After <i>begin</i> either form is possible and the meaning is ___ . After <i>remember</i> and <i>forget</i> either form is possible and the meaning is ___ .",
        gaps: [
          { options: ["an infinitive", "a gerund"], answer: "an infinitive", why: "<i>decided to leave</i>, <i>refused to explain</i>." },
          { options: ["a gerund", "an infinitive"], answer: "a gerund", why: "<i>enjoy watching</i>, <i>avoided answering</i>." },
          { options: ["the same", "different"], answer: "the same",
            why: "<i>began to notice</i> and <i>began noticing</i> are interchangeable." },
          { options: ["different", "the same"], answer: "different",
            why: "<i>remember seeing</i> = you have the memory; <i>remember to see</i> = don't forget to." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "Infinitive only.", band: "A2",
            target: "She decided to leave the ending unresolved",
            extra: ["leaving", "leave"],
            why: "<i>Decide</i> takes <i>to</i> + infinitive." },
          { cue: "Gerund only.", band: "A2",
            target: "Audiences enjoy watching a familiar story",
            extra: ["to watch", "watch"],
            why: "<i>Enjoy</i> takes <i>-ing</i>." },
          { cue: "Gerund after suggest.", band: "B1",
            target: "The editor suggested cutting the final scene",
            extra: ["to cut", "cut"],
            why: "<i>Suggest</i> never takes an infinitive, despite what the meaning might lead you to expect." },
          { cue: "Either form, same meaning.", band: "B2",
            target: "Critics began to notice the pattern only years later",
            extra: ["noticed", "notice"],
            why: "<i>began noticing</i> would be equally correct." },
          { cue: "<i>Remember</i>, with the past meaning.", band: "B2",
            target: "He remembered seeing the film as a child",
            extra: ["to see", "see"],
            why: "<i>Remember seeing</i> = the memory of the event itself." },
          { cue: "The two meanings side by side.", band: "C1",
            target: "He stopped explaining the ending and then stopped to explain why",
            extra: ["to explain", "explaining"],
            why: "<i>Stopped explaining</i> = ceased. <i>Stopped to explain</i> = paused in order to." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word stress", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word, then decide whether it is a noun or a verb — and where the stress falls.",
        items: [
          { text: "The c___ between the two endings is deliberate.", answer: "contrast", given: [0, 1, 2],
            why: "A noun, so <b>CON</b>trast." },
          { text: "She p___ her reading of the film to the seminar.", answer: "presented", given: [0, 1, 2],
            why: "A verb, so pre<b>SENT</b>ed." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one sentence with <i>stop</i> + gerund and one with <i>stop</i> + infinitive, and check that they mean different things.</p>" } }
    ]
  };
})();
