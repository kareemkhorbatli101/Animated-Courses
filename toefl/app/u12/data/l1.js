/* Unit 12 · Art, Audience and Culture — LESSON 1 · VOCABULARY
   The book's Unit 12 word focus is not an affix but a stress pattern:
   word stress in nouns and verbs. */
(function () {
  window.PAGE = {
    id: "u12-l1", unit: "u12", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a critic does, and hear where the stress falls",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. The last two are the pair this unit turns on, and most criticism moves between them without saying so.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 audience</b> — the people a work is made for, or reaches",
          "<b>2 genre</b> — a kind of work, with expectations attached",
          "<b>3 convention</b> — something a genre does because it always has",
          "<b>4 medium</b> — the material or form: film, print, paint",
          "<b>5 critic</b> — someone who judges a work in public",
          "<b>6 reception</b> — how a work was actually received, as a fact of history",
          "<b>7 observation</b> — something anyone can check in the work itself",
          "<b>8 interpretation</b> — a claim about what the work is doing"
        ] }] },
        after: "<p>7 and 8 look alike in a sentence and are not alike at all. The talk in On Campus is about finding the joint between them.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A c___ judges a work in public and has to give reasons.", answer: "critic", given: [0, 1, 2],
            why: "<i>Critic</i> \u2014 giving reasons is what separates one from a person with an opinion." },
          { text: "Every g___ carries expectations its audience already holds.", answer: "genre", given: [0, 1],
            why: "<i>Genre</i> — and the expectations are what a work can then refuse." },
          { text: "An o___ is something anyone can check in the work itself.", answer: "observation", given: [0, 1, 2],
            why: "<i>observe → observation</i>." },
          { text: "An i___ is a claim about what the work is doing.", answer: "interpretation", given: [0, 1, 2],
            why: "<i>interpret → interpretation</i>, and it is not visible on the page or screen." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Stress in nouns and verbs", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Many English words are a noun and a verb with the same spelling. The <b>stress moves</b>, and that is the only difference you can hear.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Noun: stress the first syllable. Verb: stress the second.</b><br><b>RE</b>cord / re<b>CORD</b> · <b>CON</b>trast / con<b>TRAST</b> · <b>CON</b>duct / con<b>DUCT</b> · <b>PRO</b>ject / pro<b>JECT</b> · <b>PRE</b>sent / pre<b>SENT</b>.<br>The rule is reliable enough to guess with, though not universal.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "THE STRESS CARRIES THE PART OF SPEECH",
          blocks: [{ lines: [
            "The <b>RE</b>cord of its <b>re</b><b>CEP</b>tion survives. — They re<b>CORD</b>ed the first performance.",
            "The <b>CON</b>trast is deliberate. — She con<b>TRASTS</b> the two endings.",
            "His <b>CON</b>duct was criticised. — She con<b>DUCT</b>ed the survey herself.",
            "The <b>PRO</b>ject failed. — They pro<b>JECT</b>ed the image onto the wall."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "Stress in nouns and verbs", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word, then decide where the stress falls.",
        items: [
          { text: "The c___ between the two endings is the review's main point.", answer: "contrast", given: [0, 1, 2],
            why: "A noun here, so <b>CON</b>trast." },
          { text: "The gallery keeps a full r___ of every loan.", answer: "record", given: [0, 1, 2],
            why: "A noun, so <b>RE</b>cord." },
          { text: "They p___ the film onto the back wall of the room.", answer: "projected", given: [0, 1, 2],
            why: "A verb, so pro<b>JECT</b>ed." },
          { text: "She p___ her findings to the seminar last week.", answer: "presented", given: [0, 1, 2],
            why: "A verb, so pre<b>SENT</b>ed." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say <i>record</i> twice — once as a noun, once as a verb — and hear the stress move.</p>" } }
    ]
  };
})();
