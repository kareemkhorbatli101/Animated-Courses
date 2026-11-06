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
        concepts: ["read", "claim"],
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
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A gallery room, hung for an exhibition. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A gallery room with framed works on the wall, a wall text panel, a bench in the middle, a visitor with a guide, and a label beside one work",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "poster",  x: 70,  y: 70,  s: 2.2 },
            { p: "poster",  x: 420, y: 90,  s: 1.6 },
            { p: "poster",  x: 620, y: 70,  s: 2.0 },
            { p: "board",   x: 840, y: 110, s: 1.4 },
            { p: "bench",   x: 300, y: 400, sx: 3.6, sy: 1.5 },
            { p: "person",  x: 640, y: 320, s: 1.5 },
            { p: "book",    x: 740, y: 374, s: 0.66 },
            { p: "plant",   x: 60,  y: 320, s: 0.95 }
          ] },
        pins: [
          { id: "p-work",   x: 15, y: 46, tx: 15, ty: 24, w: 150 },
          { id: "p-label",  x: 42, y: 44, tx: 46, ty: 26, w: 150 },
          { id: "p-text",   x: 88, y: 46, tx: 88, ty: 26, w: 160 },
          { id: "p-bench",  x: 18, y: 90, tx: 42, ty: 78, w: 150 },
          { id: "p-visitor",x: 46, y: 90, tx: 68, ty: 62, w: 160 },
          { id: "p-guide",  x: 80, y: 90, tx: 75, ty: 70, w: 150 }
        ],
        pairs: [
          { word: "framed work", pin: "p-work",
            why: "<i>Work</i> is the neutral word a gallery uses, because <i>painting</i>, <i>print</i> and <i>photograph</i> each assume a medium." },
          { word: "label", pin: "p-label",
            why: "the small card: title, date, medium, and how it was acquired. The last of those is often the most contested line in the room." },
          { word: "wall text", pin: "p-text",
            why: "two words, and it is the curator's argument. Where it is placed decides what you read before you look." },
          { word: "bench", pin: "p-bench",
            why: "the third use of this word in the book: a seat here, a laboratory surface in Unit 3, a judge in Unit 10." },
          { word: "visitor", pin: "p-visitor",
            why: "not <i>audience</i>. The audience is everyone a work reaches; a visitor is one person in a room." },
          { word: "guide", pin: "p-guide",
            why: "the booklet, and also the person. English uses the same word for the text and for whoever delivers it." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        concepts: ["word", "claim"],
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

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        carry: "1a",
        concepts: ["word", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the article in Lesson 5 is argued with.",
        items: [
          { text: "The a___ for a work is everyone it reaches, not everyone it was made for.", answer: "audience", given: [0, 1],
            why: "Uncountable as a group noun and countable as a count of events: <i>three audiences a night</i>." },
          { text: "A c___ is something a genre does because it has always done it.", answer: "convention", given: [0, 1],
            why: "<i>convene → convention</i>, though the sense here comes from agreement rather than meeting." },
          { text: "The r___ of a work is how it was actually received, as a fact of history.", answer: "reception", given: [0, 1],
            why: "<i>receive → reception</i>. It is a record of what happened, not a judgement of whether it should have." },
          { text: "The m___ is the material or form: film, print, paint.", answer: "medium", given: [0, 1],
            why: "Plural <i>media</i>, which in this sense takes a plural verb: <i>the media are</i>." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Stress in nouns and verbs", letter: "A",
        concepts: ["read"],
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
        concepts: ["word"],
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
        ] },

      { id: "2c", section: 2, sectionTitle: "Stress in nouns and verbs", letter: "C",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more pairs. Complete the word, then say it aloud and listen to where the stress lands.",
        items: [
          { text: "The gallery will not p___ the loan until the paperwork is complete.", answer: "permit", given: [0, 1],
            why: "A verb, so per<b>MIT</b>. The noun <i>a <b>PER</b>mit</i> is the same six letters." },
          { text: "The c___ of the exhibition changed twice before it opened.", answer: "content", given: [0, 1],
            why: "A noun, so <b>CON</b>tent. The adjective <i>con<b>TENT</b></i>, meaning satisfied, moves the stress." },
          { text: "They had to i___ the frames from a dealer in Antwerp.", answer: "import", given: [0, 1],
            why: "A verb, so im<b>PORT</b>. The noun <i>an <b>IM</b>port</i> is stressed in front." },
          { text: "The museum will not c___ on the attribution.", answer: "comment", given: [0, 1],
            why: "The exception that proves the rule: <i>comment</i> is stressed on the first syllable as both noun and verb." }
        ] },

      { id: "2d", section: 2, sectionTitle: "Stress in nouns and verbs", letter: "D",
        carry: "1a",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three move their stress between noun and verb",
            options: [
              { text: "record",   why: "a <b>RE</b>cord, to re<b>CORD</b>." },
              { text: "contrast", why: "a <b>CON</b>trast, to con<b>TRAST</b>." },
              { text: "permit",   why: "a <b>PER</b>mit, to per<b>MIT</b>." },
              { text: "comment", correct: true,
                why: "the odd one: <b>COM</b>ment either way. The pattern is reliable enough to guess with and not universal." }
            ] },
          { group: "three can be checked in the work itself",
            options: [
              { text: "the length of the final scene", why: "anyone with a stopwatch can settle it." },
              { text: "the colour of the background",  why: "visible, and not in dispute." },
              { text: "the date on the label",         why: "written down, and checkable against the record." },
              { text: "what the ending is saying", correct: true,
                why: "the odd one: an interpretation. It may be well argued and it cannot be checked the way the other three can." }
            ] },
          { group: "three describe how a work was received",
            options: [
              { text: "reception", why: "the historical fact of how it was taken." },
              { text: "reviews",   why: "the written evidence of that reception." },
              { text: "box office", why: "the commercial evidence of it." },
              { text: "intention", correct: true,
                why: "the odd one: intention belongs to the maker, before anybody received anything. Confusing the two is the commonest error in a first essay on this." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Observation or interpretation", letter: "A",
        concepts: ["comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight sentences from student essays about the same film. Sort them by whether anyone could check them against the film itself.",
        note: { kind: "words", title: "In other words…",
                body: "<p>Neither column is better. An essay of pure observation says nothing; an essay of pure interpretation rests on nothing. What marks a weak essay is that the two are mixed without any signal, so the reader cannot tell which claims are being offered for checking.</p>" },
        bins: [
          { id: "obs", label: "Anyone can check it", hint: "observation" },
          { id: "int", label: "It is a claim about meaning", hint: "interpretation" }
        ],
        items: [
          { text: "The final scene runs for four minutes without dialogue", bin: "obs",
            why: "a stopwatch settles it." },
          { text: "The camera stays behind the character throughout", bin: "obs",
            why: "visible in every frame of the sequence." },
          { text: "The same piece of music returns three times", bin: "obs",
            why: "countable, and the count is not in dispute." },
          { text: "The film was released two years after the novel", bin: "obs",
            why: "a date, checkable against the record." },
          { text: "The silence makes the ending feel unresolved", bin: "int",
            why: "a claim about effect. Well supported by the observation above it, and still a claim." },
          { text: "Staying behind the character denies us her reaction", bin: "int",
            why: "reads a consequence into a camera position. Reasonable, and arguable." },
          { text: "The repeated music ties her to the earlier scene", bin: "int",
            why: "the repetition is observable; what it ties together is not." },
          { text: "The adaptation is more faithful than its reputation suggests", bin: "int",
            why: "the hardest card, because <i>faithful</i> sounds measurable. It depends entirely on what you decide fidelity is to." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say <i>record</i> twice — once as a noun, once as a verb — and hear the stress move.</p>" } }
    ]
  };
})();
