/* Unit 5 · Exploring Space — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u05-l1", unit: "u05", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a mission is, and what it can see",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read", "comparison", "measurement"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "orbit", ar: "\u0645\u062f\u0627\u0631",
            meaning: "the path one body takes around another",
            with: ["enter orbit", "a stable orbit", "in orbit around"],
            why: "Both noun and verb, and the verb takes no preposition: a moon <i>orbits</i> a planet, not <i>orbits around</i> it." },
          { term: "probe", ar: "\u0645\u0633\u0628\u0627\u0631",
            meaning: "an uncrewed spacecraft sent to observe",
            with: ["launch a probe", "the probe returned data", "a deep-space probe"],
            why: "Also a verb meaning to investigate carefully, which is where the noun comes from: the craft is the question, sent out." },
          { term: "payload", ar: "\u0627\u0644\u062d\u0645\u0648\u0644\u0629",
            meaning: "what a vehicle carries, instruments included",
            with: ["the scientific payload", "payload capacity", "a heavy payload"],
            why: "Everything the mission exists to carry, as against the fuel and structure that exist to carry it." },
          { term: "transit", ar: "\u0639\u0628\u0648\u0631",
            meaning: "a planet passing in front of its star, seen from here",
            with: ["a transit event", "observe the transit", "transit depth"],
            why: "<i>Seen from here</i> is the whole word. A planet only transits relative to an observer, which is the first hint that this method is partial." },
          { term: "signal", ar: "\u0625\u0634\u0627\u0631\u0629",
            meaning: "the measurable trace an object leaves in the data",
            with: ["a weak signal", "signal-to-noise", "the signal disappeared"],
            why: "Not the object. A planet with no signal is still a planet, and that gap is what the Lesson 5 article is about." },
          { term: "catalogue", ar: "\u0641\u0647\u0631\u0633",
            meaning: "the published list of what has been found",
            with: ["in the catalogue", "a catalogue of planets", "catalogue entry"],
            why: "American English writes <i>catalog</i>. Found, not existing \u2014 and the article turns on that distinction." },
          { term: "sample", ar: "\u0639\u064a\u0651\u0646\u0629",
            meaning: "the part of a population you actually observed",
            with: ["a representative sample", "the sample size", "sampled at random"],
            why: "Hold this with <i>bias</i>. A catalogue is a sample, and treating it as the population is the mistake the whole unit is built around." },
          { term: "bias", ar: "\u062a\u062d\u064a\u0651\u0632",
            meaning: "the way a method makes some things easier to find than others",
            with: ["selection bias", "correct for bias", "a biased sample"],
            why: "Not dishonesty. A method that finds big close planets is biased towards big close planets by its physics, and saying so is a technical statement." }
        ],
        prompt: "Eight words. Say each meaning before you turn the card. The last pair matters most: a great deal of this subject turns on the difference between what is there and what can be detected.",
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
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A control room on an observing night. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A control room with a wall screen showing a plot, a clock set to universal time, a desk with two laptops, a logbook and a telephone",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "screen", x: 300, y: 30, s: 3.2 },
            { p: "clock",  x: 120, y: 70, s: 0.85 },
            { p: "poster", x: 760, y: 70, s: 1.9 },
            { p: "longdesk", x: 110, y: 370, sx: 7.8, sy: 1.7 },
            { p: "laptop", x: 190, y: 330, s: 1.0 },
            { p: "laptop", x: 420, y: 330, s: 1.0 },
            { p: "book",   x: 600, y: 352, s: 0.78 },
            { p: "phone",  x: 720, y: 342, s: 0.62 },
            { p: "seated", x: 300, y: 300, s: 1.35 }
          ] },
        pins: [
          { id: "p-screen", x: 50, y: 10, tx: 50, ty: 22, w: 150 },
          { id: "p-clock",  x: 14, y: 36, tx: 16, ty: 20, w: 150 },
          { id: "p-chart",  x: 86, y: 40, tx: 83, ty: 24, w: 160 },
          { id: "p-console",x: 17, y: 90, tx: 32, ty: 70, w: 160 },
          { id: "p-log",    x: 50, y: 90, tx: 63, ty: 68, w: 150 },
          { id: "p-phone",  x: 85, y: 76, tx: 75, ty: 67, w: 150 }
        ],
        pairs: [
          { word: "wall display", pin: "p-screen",
            why: "the shared screen everyone watches. <i>Display</i> is the thing; <i>screen</i> is also a verb, which is why reports prefer <i>display</i>." },
          { word: "clock", pin: "p-clock",
            why: "set to universal time, not local time, so that observations from anywhere can be compared." },
          { word: "finding chart", pin: "p-chart",
            why: "the printed map of the field you are pointing at, used to confirm you are looking at the right object." },
          { word: "console", pin: "p-console",
            why: "the position one observer works from. A <i>console</i> is a station, not a machine: it can hold two laptops." },
          { word: "logbook", pin: "p-log",
            why: "the running record of the night. Still on paper in most observatories, for the reason Unit 2 gave about batteries." },
          { word: "telephone", pin: "p-phone",
            why: "the line to the telescope operator. The most used object in the room and the one nobody photographs." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        concepts: ["word"],
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

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        concepts: ["word", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the argument in Lesson 5 is built from.",
        items: [
          { text: "The published c___ now lists several thousand confirmed planets.", answer: "catalogue", given: [0, 1],
            why: "Spelled <i>catalogue</i> in British English and <i>catalog</i> in American; both appear in the literature." },
          { text: "A clear s___ in the data is still only a trace of the object, not the object.", answer: "signal", given: [0, 1],
            why: "<i>Signal</i> is countable here. Its usual partner is <i>noise</i>, and the ratio between them is what decides a detection." },
          { text: "The telescope completes one o___ every ninety minutes.", answer: "orbit", given: [0, 1],
            why: "Both a noun and a verb: <i>it orbits</i>, <i>one orbit</i>." },
          { text: "What you observed is a s___, and it is not the same as what is there.", answer: "sample", given: [0, 1],
            why: "<i>Sample</i> against <i>population</i> — the distinction the whole unit turns on." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The prefix un-", letter: "A",
        concepts: ["read"],
        kind: "build", task: null, n: 0,

        family: {

          word: "expect",

          forms: [

            { part: "verb", word: "ex·PECT" },

            { part: "noun", word: "ex·pec·TA·tion" },

            { part: "adjective", word: "un·ex·PECT·ed", note: "the negative is the commoner form here" },

            { part: "adverb", word: "un·ex·PECT·ed·ly" },

          ]

        },

        items: [

          { root: "crewed", affix: "un-", answer: "uncrewed",

            why: "<i>un-</i> attaches happily to participles. <i>Unmanned</i> is the older word and still common in the literature." },

          { root: "stable", affix: "un-", answer: "unstable",

            why: "An unstable orbit is one that will not persist. <i>un-</i> before an adjective is the plainest use of it." },

          { root: "expected", affix: "un-", answer: "unexpected",

            why: "An unexpected result is worth reading twice: it is either a discovery or a mistake." },

          { root: "complete", affix: "in-", answer: "incomplete",

            why: "<i>in-</i> does the same job on a different set of words, and no rule tells you which takes which. <i>Uncomplete</i> is not English." },

          { root: "possible", affix: "im-", answer: "impossible",

            why: "<i>im-</i> is <i>in-</i> before <i>p</i>, <i>b</i> and <i>m</i>, because that is easier to say. The spelling follows the mouth." },

          { root: "regular", affix: "ir-", answer: "irregular",

            why: "And <i>ir-</i> before <i>r</i>, for the same reason. Four prefixes, one meaning, and the choice is phonetic rather than logical." }

        ],
        prompt: "<b>un-</b> negates, and it is the commonest negative prefix in English. Build each word \u2014 the other negatives are here because choosing the right one is most of the skill.",
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
        carry: "2a",
        concepts: ["word"],
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
        ] },

      { id: "2c", section: 2, sectionTitle: "The prefix un-", letter: "C",
        concepts: ["word", "measurement"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more. Two of them negate an adjective; two negate a verb, which is a different job.",
        items: [
          { text: "Half the sky remains effectively u___ at these wavelengths.", answer: "unobserved", given: [0, 1],
            why: "<i>un + observed</i>, negating a participle: it has not been done." },
          { text: "It is u___ that an orbit this tight would survive a billion years.", answer: "unlikely", given: [0, 1],
            why: "<i>un + likely</i>, negating an adjective. Note the construction <i>it is unlikely that</i>." },
          { text: "The instrument had to be u___ and rebuilt before launch.", answer: "unpacked", given: [0, 1],
            why: "Here <i>un-</i> reverses an action rather than negating a quality — the same two jobs Unit 1's <i>dis-</i> had." },
          { text: "Repeating the measurement proved u___ , since the first run had already settled it.", answer: "unnecessary", given: [0, 1],
            why: "Two <i>n</i>s, because the root already starts with one. This is the only spelling rule <i>un-</i> has." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The prefix un-", letter: "D",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three describe how an object was found",
            options: [
              { text: "transit",     why: "the planet crosses in front of its star and the starlight dips." },
              { text: "wobble",      why: "the star moves slightly as the planet pulls it, and the light shifts in colour." },
              { text: "imaging",     why: "the planet is photographed directly, which is rare and only works for the large and distant." },
              { text: "catalogue", correct: true,
                why: "the odd one: a catalogue is where the results are written down, not a way of getting them." }
            ] },
          { group: "three really carry this unit's prefix",
            options: [
              { text: "unstable",   why: "<i>un + stable</i>." },
              { text: "unlikely",   why: "<i>un + likely</i>." },
              { text: "unobserved", why: "<i>un + observed</i>." },
              { text: "universe", correct: true,
                why: "the odd one: <i>uni-</i> means one, as in <i>unit</i> and <i>uniform</i>. Nothing is being negated." }
            ] },
          { group: "three mean the data misrepresents what is out there",
            options: [
              { text: "biased",          why: "the method favours some objects over others." },
              { text: "unrepresentative", why: "the sample does not resemble the population." },
              { text: "skewed",          why: "the distribution leans one way, usually because of the method." },
              { text: "imprecise", correct: true,
                why: "the odd one: imprecise means the measurements scatter widely. A biased sample can be measured to five decimal places and still be biased, which is what makes the two easy to confuse." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Two jobs for un-", letter: "A",
        concepts: ["comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "<b>un-</b> does the same two jobs Unit 1's <i>dis-</i> did. Sort these eight by which one it is doing.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>On an adjective or a describing participle, <i>un-</i> says the quality is absent: <i>unstable</i>, <i>unlikely</i>. On an action verb it reverses what was done: <i>untie</i>, <i>unpack</i>. The test is whether the plain word is something you can <i>do</i>.</p>" },
        bins: [
          { id: "not",     label: "Says the quality is absent", hint: "unstable" },
          { id: "reverse", label: "Reverses the action",        hint: "unpack" }
        ],
        items: [
          { text: "unstable",   bin: "not",     why: "you cannot <i>stable</i> something, so nothing is being reversed." },
          { text: "unlikely",   bin: "not",     why: "an adjective: the likelihood is absent." },
          { text: "unexpected", bin: "not",     why: "a participle used as an adjective; it describes rather than acts." },
          { text: "uncrewed",   bin: "not",     why: "it never had a crew, so there is nothing to undo." },
          { text: "unpack",     bin: "reverse", why: "you packed it, and now you are undoing that." },
          { text: "unfold",     bin: "reverse", why: "a solar panel is folded and then unfolded, in that order." },
          { text: "unlock",     bin: "reverse", why: "the lock was locked first." },
          { text: "unplug",     bin: "reverse", why: "you plugged it in, and now you are taking it out again." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Explain in one sentence why an early catalogue of planets was a sample of the method rather than of the universe.</p>" } }
    ]
  };
})();
