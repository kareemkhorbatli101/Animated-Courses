/* Unit 5 · Exploring Space — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u05-l1", unit: "u05", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a mission is, and what it can see",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. The last pair matters most: a great deal of this subject turns on the difference between what is there and what can be detected.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 orbit</b> — the path one body takes around another",
          "<b>2 probe</b> — an uncrewed spacecraft sent to observe",
          "<b>3 payload</b> — what a vehicle carries, instruments included",
          "<b>4 transit</b> — a planet passing in front of its star, seen from here",
          "<b>5 signal</b> — the measurable trace an object leaves in the data",
          "<b>6 catalogue</b> — the published list of what has been found",
          "<b>7 sample</b> — the part of a population you actually observed",
          "<b>8 bias</b> — the way a method makes some things easier to find than others"
        ] }] },
        after: "<p>Hold 7 and 8 together. The article in Lesson 5 is about what happens when a catalogue is mistaken for a population.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A p___ can work for twenty years without being brought home.", answer: "probe", given: [0, 1],
            why: "<i>Probe</i> — uncrewed, and that is the point of the On Campus talk." },
          { text: "Every kilogram of life support is a kilogram not spent on the p___.", answer: "payload", given: [0, 1, 2],
            why: "<i>Payload</i> = what the vehicle carries." },
          { text: "A t___ is the planet crossing in front of its star, from where we sit.", answer: "transit", given: [0, 1, 2],
            why: "<i>Transit</i> — one of the two main detection methods." },
          { text: "A b___ does not make the data wrong; it makes it unrepresentative.", answer: "bias", given: [0, 1],
            why: "<i>Bias</i> — some things are easier to find, so the sample tilts." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The prefix un-", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>un-</b> negates. It is the commonest negative prefix in English and it attaches to adjectives and participles.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>un + manned → <b>un</b>manned · un + stable → <b>un</b>stable · un + explored → <b>un</b>explored · un + likely → <b>un</b>likely · un + expected → <b>un</b>expected.<br>It does not move the stress, and it never doubles the <i>n</i> except where the word already begins with one: <i>un + necessary → unnecessary</i>.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "UN- IN ACADEMIC WRITING",
          blocks: [{ lines: [
            "An <b>uncrewed</b> mission carries no people. <i>Unmanned</i> is the older word and still common in the literature.",
            "An <b>unstable</b> orbit is one that will not persist.",
            "An <b>unexpected</b> result is the kind worth reading twice, because it is either a discovery or a mistake.",
            "An <b>unrepresentative</b> sample tells you about the method, not about the universe."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The prefix un-", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word. Each is built with this unit's prefix.",
        items: [
          { text: "Most of what we know came from u___ spacecraft.", answer: "uncrewed", given: [0, 1, 2],
            why: "<i>un + crewed</i>: carrying no people." },
          { text: "The orbit proved u___ and the satellite re-entered within a year.", answer: "unstable", given: [0, 1, 2],
            why: "<i>un + stable</i>." },
          { text: "An u___ result is either a discovery or an error.", answer: "unexpected", given: [0, 1, 2],
            why: "<i>un + expected</i>." },
          { text: "An u___ sample tells you about your method.", answer: "unrepresentative", given: [0, 1, 2],
            why: "<i>un + representative</i> — the article's whole subject." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Explain in one sentence why an early catalogue of planets was a sample of the method rather than of the universe.</p>" } }
    ]
  };
})();
