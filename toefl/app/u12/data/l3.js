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

            { id: "1c", section: 1, sectionTitle: "Review the patterns", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "What happens when a person comes between the verb and the form it governs. Complete the rule.",
        heading: "Language connection: verb + object + form",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>verb + object + infinitive:</b> ask, tell, want, persuade, allow — <i>asked her to stay</i><br><b>verb + object + bare infinitive:</b> make, let — <i>made him leave</i>, <i>let her go</i><br><b>verb + object + -ing:</b> catch, find, keep — <i>found him waiting</i><br><i>Help</i> takes either: <i>helped her carry</i> or <i>helped her to carry</i>.</p>" },
        text: "After <i>ask</i> and <i>persuade</i>, a person is followed by ___ . After <i>make</i> and <i>let</i>, the verb that follows the person has ___ . After <i>find</i> and <i>keep</i>, the form is ___ . And <i>help</i> is unusual because ___ .",
        gaps: [
          { options: ["an infinitive", "a gerund"], answer: "an infinitive",
            why: "<i>asked her to stay</i>, <i>persuaded him to reconsider</i>." },
          { options: ["no to", "a to"], answer: "no to",
            why: "<i>made him leave</i>, never <i>made him to leave</i>. <i>Let</i> behaves the same way." },
          { options: ["-ing", "an infinitive"], answer: "-ing",
            why: "<i>found him waiting</i>, <i>kept her talking</i>." },
          { options: ["either works", "neither works"], answer: "either works",
            why: "<i>helped her carry</i> and <i>helped her to carry</i> are both standard." }
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

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        carry: "1a",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them put a person between the verb and the form it governs.",
        items: [
          { cue: "Verb + object + infinitive.", band: "A2",
            target: "The producer asked her to rewrite the ending",
            extra: ["rewriting", "rewrite"],
            why: "<i>Ask</i> takes an object and then a full infinitive." },
          { cue: "Verb + object + bare infinitive.", band: "B1",
            target: "The studio made him cut four minutes from the film",
            extra: ["to cut", "cutting"],
            why: "<i>Make</i> and <i>let</i> drop the <i>to</i>, which no other common verb in this group does." },
          { cue: "Verb + object + gerund.", band: "B1",
            target: "The critic found herself watching the ending twice",
            extra: ["to watch", "watch"],
            why: "<i>Find</i> with an object takes the <i>-ing</i> form." },
          { cue: "A verb that takes only an infinitive.", band: "B2",
            target: "The director refused to explain what the ending meant",
            extra: ["explaining", "explain"],
            why: "<i>Refuse</i> never takes a gerund." },
          { cue: "A verb that takes only a gerund.", band: "B2",
            target: "She avoided answering the question about the novel",
            extra: ["to answer", "answer"],
            why: "<i>Avoid</i> never takes an infinitive." },
          { cue: "The two meanings of <i>forget</i>.", band: "C1",
            target: "He forgot to mention the novel but never forgot reading it",
            extra: ["mentioning", "to read"],
            why: "<i>Forgot to mention</i> = failed to do it. <i>Forgot reading</i> would mean the memory itself had gone." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from essays. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "The producer asked her rewrite the ending.",
            fixed: "The producer asked her to rewrite the ending.",
            wrong: "rewrite", right: "to rewrite",
            why: "<i>Ask</i> takes a full infinitive after its object, unlike <i>make</i> and <i>let</i>." },
          { text: "The studio made him cutting four minutes from the film.",
            fixed: "The studio made him cut four minutes from the film.",
            wrong: "cutting", right: "cut",
            why: "<i>Make</i> is one of the two verbs that take a bare infinitive after their object." },
          { text: "She avoided answer the question about the novel.",
            fixed: "She avoided answering the question about the novel.",
            wrong: "answer", right: "answering",
            why: "<i>Avoid</i> takes a gerund, so the bare verb cannot follow it." },
          { text: "The critic found herself watch the ending twice.",
            fixed: "The critic found herself watching the ending twice.",
            wrong: "watch", right: "watching",
            why: "<i>Find</i> with an object takes <i>-ing</i> — the pattern of noticing rather than of intending." },
          { text: "He forgot mentioning the novel in his review entirely.",
            fixed: "He forgot to mention the novel in his review entirely.",
            wrong: "mentioning", right: "to mention",
            why: "<i>Forgot mentioning</i> would mean the memory had gone. Here he failed to do it, which takes the infinitive." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word stress", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word, then decide whether it is a noun or a verb — and where the stress falls.",
        items: [
          { text: "The c___ between the two endings is deliberate.", answer: "contrast", given: [0, 1, 2],
            why: "A noun, so <b>CON</b>trast." },
          { text: "She p___ her reading of the film to the seminar.", answer: "presented", given: [0, 1, 2],
            why: "A verb, so pre<b>SENT</b>ed." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word stress", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more pairs. Complete the word, then say it aloud and hear where the stress falls.",
        items: [
          { text: "The gallery had to i___ the frames from a dealer abroad.", answer: "import", given: [0, 1],
            why: "A verb, so im<b>PORT</b>. The noun <i>an <b>IM</b>port</i> moves the stress forward." },
          { text: "The c___ of the catalogue changed twice before it was printed.", answer: "content", given: [0, 1],
            why: "A noun, so <b>CON</b>tent. The adjective meaning satisfied is con<b>TENT</b>." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word stress", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a form into each gap. Two in the bank are not used, and each of them is the wrong form for the verb in front of it.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>There is no rule connecting the meaning of a verb to the form it takes. <i>Suggest</i> and <i>offer</i> mean almost the same thing and take opposite forms. It is learnt verb by verb, which is why these exercises exist.</p>" },
        extra: ["to cut", "answering"],
        items: [
          { text: "The editor suggested ___ the final scene.", answer: "cutting",
            why: "<i>suggest</i> takes a gerund, always." },
          { text: "The director chose ___ the film in silence.", answer: "to end",
            why: "<i>choose</i> takes an infinitive, always." },
          { text: "The studio made him ___ four minutes from the film.", answer: "cut",
            why: "<i>make</i> takes a bare infinitive after its object: no <i>to</i> at all." },
          { text: "The critic found herself ___ the ending twice.", answer: "watching",
            why: "<i>find</i> with an object takes <i>-ing</i>." },
          { text: "She refused ___ the question about the novel.", answer: "to answer",
            why: "<i>refuse</i> takes an infinitive — and the gerund form of the same verb is sitting in the bank." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one sentence with <i>stop</i> + gerund and one with <i>stop</i> + infinitive, and check that they mean different things.</p>" } }
    ]
  };
})();
