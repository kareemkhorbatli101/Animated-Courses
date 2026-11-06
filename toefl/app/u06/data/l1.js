/* Unit 6 · Food, Energy and the Body — LESSON 1 · VOCABULARY
   The one unit with no affix: the source book teaches phrasal verbs here
   instead, and that gap is kept rather than filled with an invented one. */
(function () {
  window.PAGE = {
    id: "u06-l1", unit: "u06", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what the body does to food",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "This subject runs on phrasal verbs. That is not casual English — it is the register the process itself is described in.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 break down</b> — to separate into smaller parts: <i>enzymes break starch down</i>",
          "<b>2 take in</b> — to absorb: <i>the gut takes in glucose</i>",
          "<b>3 give off</b> — to release: <i>the reaction gives off heat</i>",
          "<b>4 build up</b> — to accumulate: <i>lactate builds up in the muscle</i>",
          "<b>5 use up</b> — to consume entirely: <i>the cell uses up its store</i>",
          "<b>6 carry out</b> — to perform: <i>they carried out the assay</i>",
          "<b>7 make up</b> — to constitute: <i>water makes up most of the body</i>",
          "<b>8 convert</b> — the single-word equivalent of several of the above"
        ] }] },
        after: "<p>Number 8 matters. In writing you will often need the Latinate verb instead; the phrasal one is for speech and for the lab.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the particle — the small word that changes the verb's meaning entirely.",
        items: [
          { text: "Enzymes break starch d___ into simple sugars.", answer: "down", given: [0],
            why: "<i>break down</i> = separate into parts. <i>Break up</i> would be something else entirely." },
          { text: "The small intestine takes the glucose i___.", answer: "in", given: [0],
            why: "<i>take in</i> = absorb." },
          { text: "The reaction gives o___ a measurable amount of heat.", answer: "off", given: [0],
            why: "<i>give off</i> = release. <i>Give out</i> can mean the same, but <i>off</i> is standard for heat and gas." },
          { text: "Lactate builds u___ faster than it can be cleared.", answer: "up", given: [0],
            why: "<i>build up</i> = accumulate." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Separable and inseparable", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Some phrasal verbs let the object sit in the middle. Some do not, and getting it wrong is immediately audible.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Separable:</b> break it down · take it in · use it up · carry it out.<br>With a <b>pronoun</b> the object <i>must</i> go in the middle: <i>break it down</i>, never <i>break down it</i>.<br><b>Inseparable:</b> look after it · go over it · get over it. The object always follows the whole verb.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "WHERE THE OBJECT GOES",
          blocks: [
            { h: "Separable — both are fine with a noun", lines: [
              "Enzymes break <b>the starch</b> down. ✓",
              "Enzymes break down <b>the starch</b>. ✓",
              "Enzymes break <b>it</b> down. ✓ — but <i>break down it</i> ✗"
            ] },
            { h: "Inseparable — only one position", lines: [
              "We went over <b>the method</b>. ✓ — <i>went the method over</i> ✗",
              "We went over <b>it</b>. ✓ — <i>went it over</i> ✗"
            ] }
          ],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "Separable and inseparable", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word. These are the single-word verbs academic writing prefers.",
        items: [
          { text: "The liver c___ excess glucose into glycogen.", answer: "converts", given: [0, 1, 2],
            why: "<i>Convert</i> is the written equivalent of <i>turn into</i>." },
          { text: "The gut a___ nutrients across the intestinal wall.", answer: "absorbs", given: [0, 1, 2],
            why: "<i>Absorb</i> for <i>take in</i>." },
          { text: "The reaction r___ energy as heat.", answer: "releases", given: [0, 1, 2],
            why: "<i>Release</i> for <i>give off</i>." },
          { text: "Water c___ about sixty per cent of body mass.", answer: "constitutes", given: [0, 1, 2],
            why: "<i>Constitute</i> for <i>make up</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say the digestion of a piece of bread aloud, using four phrasal verbs from 1A. Then say it again using the single-word verbs from 2B.</p>" } }
    ]
  };
})();
