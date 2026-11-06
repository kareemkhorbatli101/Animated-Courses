/* Unit 2 · Climate and Prediction — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u02-l1", unit: "u02", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name the parts of a climate projection",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words that do specific work in this subject. Two of them are often confused, and the article in Lesson 5 turns on the difference.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 prediction</b> — a claim about what <i>will</i> happen",
          "<b>2 projection</b> — what would follow <i>if</i> a given scenario held",
          "<b>3 scenario</b> — one set of assumptions about emissions and policy",
          "<b>4 emissions</b> — the gases released, usually measured per year",
          "<b>5 trend</b> — the direction once year-to-year noise is removed",
          "<b>6 average</b> — the mean across a period, often thirty years",
          "<b>7 range</b> — the span between the lowest and highest result",
          "<b>8 uncertainty</b> — how wide that span is, stated honestly"
        ] }] },
        after: "<p>1 and 2 are the pair. A projection is conditional; a prediction is not.</p>" },


      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "match", task: null, n: 0,
        prompt: "Before the abstractions, the place the numbers come from. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A field site: a station building, a tree, a footpath, a signpost, and a bench with a sample bottle and a notebook on it",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 3.6 },
            { p: "floor", x: 0, y: 223, sx: 10, sy: 3.4 },
            { p: "building", x: 640, y: 60,  s: 2.4 },
            { p: "tree",     x: 60,  y: 100, s: 2.0 },
            { p: "path",     x: 200, y: 240, sx: 4.6, sy: 3.0 },
            { p: "sign",     x: 740, y: 330, s: 1.3 },
            { p: "bench",    x: 120, y: 390, sx: 3.3, sy: 1.6 },
            { p: "flask",    x: 170, y: 379, s: 0.8 },
            { p: "book",     x: 300, y: 390, s: 0.7 }
          ] },
        pins: [
          { id: "p-station",  x: 76, y: 10, tx: 76, ty: 32, w: 150 },
          { id: "p-path",     x: 46, y: 88, tx: 43, ty: 70, w: 140 },
          { id: "p-sign",     x: 84, y: 86, tx: 80, ty: 69, w: 140 },
          { id: "p-bench",    x: 13, y: 96, tx: 16, ty: 88, w: 130 },
          { id: "p-bottle",   x: 24, y: 58, tx: 21, ty: 75, w: 170 },
          { id: "p-notebook", x: 52, y: 60, tx: 33, ty: 76, w: 170 }
        ],
        pairs: [
          { word: "field station", pin: "p-station",
            why: "the building a team works out of. <i>Station</i> here means a place where readings are taken, not a place where trains stop." },
          { word: "footpath", pin: "p-path",
            why: "one word. A <i>path</i> is the thing; a <i>footpath</i> is the thing with its use named." },
          { word: "signpost", pin: "p-sign",
            why: "the post with the sign on it. <i>A sign</i> alone can be any notice; a signpost points." },
          { word: "bench", pin: "p-bench",
            why: "outdoors it is a seat; inside a laboratory the same word means the work surface. Both appear in this subject." },
          { word: "sample bottle", pin: "p-bottle",
            why: "<i>sample</i> is the thing collected, and it is also the verb: <i>we sampled three sites</i>." },
          { word: "field notebook", pin: "p-notebook",
            why: "<i>field</i> as a modifier means out of doors and away from the laboratory: fieldwork, field notes, field season." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A p___ says what would follow if a given scenario held.", answer: "projection", given: [0, 1, 2],
            why: "<i>Projection</i>, not prediction: it carries an <i>if</i>." },
          { text: "Each s___ makes different assumptions about policy.", answer: "scenario", given: [0, 1],
            why: "<i>Scenario</i> = one named set of assumptions." },
          { text: "Once the noisy years are removed, the t___ is clear.", answer: "trend", given: [0, 1],
            why: "<i>Trend</i> = direction over time, not any single year." },
          { text: "A wide r___ between the models is not a weakness; it is the uncertainty, stated.", answer: "range", given: [0, 1],
            why: "<i>Range</i> = lowest to highest." }
        ] },


      { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        from: "1a",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. Each one names a number, or the honesty around a number.",
        items: [
          { text: "Yearly e___ are measured in billions of tonnes.", answer: "emissions", given: [0, 1],
            why: "Almost always plural in this subject: <i>emissions are</i>, not <i>emission is</i>." },
          { text: "The thirty-year a___ smooths out the noisy years.", answer: "average", given: [0, 1],
            why: "<i>Average</i> is a noun here. It is also an adjective and a verb, which is why the article in front of it matters." },
          { text: "A wide range is not a flaw; it is the u___ stated honestly.", answer: "uncertainty", given: [0, 1],
            why: "Uncountable in this sense. <i>Uncertainties</i> exists, but it means the separate sources of it." },
          { text: "The f___ for Thursday afternoon is heavy rain.", answer: "forecast", given: [0, 1],
            why: "<i>Forecast</i> is short-range and <i>projection</i> is conditional. Neither is a <i>prediction</i> in the strict sense this unit uses." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -ful", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "This unit's affix. <b>-ful</b> turns a noun into an adjective meaning <i>full of</i> or <i>having</i>.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>harm → <b>harm</b>ful · power → <b>power</b>ful · meaning → <b>meaning</b>ful · doubt → <b>doubt</b>ful · use → <b>use</b>ful.<br>One <i>l</i>, always. The stress does not move.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-FUL IN ACADEMIC WRITING",
          blocks: [{ lines: [
            "A <b>meaningful</b> difference is one large enough to matter, not merely one you can measure.",
            "A <b>doubtful</b> result is one the authors themselves are not confident in.",
            "A <b>powerful</b> model is one that explains a lot with few assumptions.",
            "A <b>harmful</b> effect is one that causes damage, which is a claim, not an observation."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -ful", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the adjective. The sentence tells you which noun it is built from.",
        items: [
          { text: "The difference between the two runs was small but m___.", answer: "meaningful", given: [0, 1, 2],
            why: "<i>meaning + ful</i>: large enough to matter." },
          { text: "He called the third result d___, and said so in the paper.", answer: "doubtful", given: [0, 1],
            why: "<i>doubt + ful</i>: not confident in it." },
          { text: "A simple model that explains a great deal is a p___ one.", answer: "powerful", given: [0, 1],
            why: "<i>power + ful</i>." },
          { text: "They had to show the effect was h___ before anyone would act.", answer: "harmful", given: [0, 1],
            why: "<i>harm + ful</i>: causing damage." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The suffix -ful", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more <b>-ful</b> adjectives, all of them common in a results section.",
        items: [
          { text: "Rainfall is p___ in the north and scarce in the south.", answer: "plentiful", given: [0, 1],
            why: "<i>plenty + ful</i>, with the <i>y</i> becoming <i>i</i>. The opposite here is <i>scarce</i>, not <i>plentiless</i>." },
          { text: "A c___ reading of the axis labels prevents most chart errors.", answer: "careful", given: [0, 1],
            why: "<i>care + ful</i>, describing the noun <i>reading</i>. The adverb would be <i>carefully</i>." },
          { text: "The authors were h___ that the next model run would narrow the range.", answer: "hopeful", given: [0, 1],
            why: "<i>hope + ful</i>. Note the construction: <i>hopeful that</i>, not <i>hopeful of that</i>." },
          { text: "A f___ argument is not the same thing as a correct one.", answer: "forceful", given: [0, 1],
            why: "<i>force + ful</i>: delivered with conviction, which says nothing about whether it is true." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The suffix -ful", letter: "D",
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three summarise a set of numbers",
            options: [
              { text: "average", why: "the middle of the set, by the usual arithmetic." },
              { text: "median",  why: "the middle of the set, by position rather than arithmetic." },
              { text: "range",   why: "a summary of how spread out the set is." },
              { text: "scenario", correct: true,
                why: "the odd one: a scenario is a set of assumptions you feed into a model. It produces numbers; it does not summarise them." }
            ] },
          { group: "three say how sure a claim is",
            options: [
              { text: "likely",   why: "more probable than not, and short of certain." },
              { text: "probable", why: "the same ground as <i>likely</i>, in a more formal register." },
              { text: "plausible", why: "worth taking seriously, which is weaker than either of the other two." },
              { text: "inevitable", correct: true,
                why: "the odd one: inevitable means certain. The other three all leave room, and a results section lives in that room." }
            ] },
          { group: "three are built with this unit's suffix",
            options: [
              { text: "harmful",  why: "<i>harm + ful</i>: causing damage." },
              { text: "powerful", why: "<i>power + ful</i>." },
              { text: "doubtful", why: "<i>doubt + ful</i>." },
              { text: "harmless", correct: true,
                why: "the odd one: <i>-less</i>, not <i>-ful</i>, and it means the opposite of the first word in the row." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Two jobs for -ful", letter: "A",
        kind: "sort", task: null, n: 0,
        prompt: "<b>-ful</b> does two different jobs, and only one of them makes an adjective. Sort these eight.",
        note: { kind: "words", title: "In other words…",
                body: "<p>On an abstract noun, <i>-ful</i> makes an adjective: <i>harm → harmful</i>. On a container, it makes a countable noun meaning as much as that container holds: <i>a spoon → a spoonful</i>, and the plural is <i>spoonfuls</i>.</p>" },
        bins: [
          { id: "adj",    label: "An adjective", hint: "full of that quality" },
          { id: "amount", label: "A noun",       hint: "as much as it holds" }
        ],
        items: [
          { text: "harmful",    bin: "adj",    why: "describes a noun: <i>a harmful effect</i>." },
          { text: "powerful",   bin: "adj",    why: "describes a noun: <i>a powerful model</i>." },
          { text: "doubtful",   bin: "adj",    why: "describes a noun, or follows <i>be</i>: <i>she was doubtful</i>." },
          { text: "meaningful", bin: "adj",    why: "describes a noun: <i>a meaningful difference</i>." },
          { text: "a handful",  bin: "amount", why: "takes <i>a</i>, and pluralises: <i>two handfuls</i>." },
          { text: "a mouthful", bin: "amount", why: "a countable noun. It also means a word that is hard to say, which is the same idea stretched." },
          { text: "a spoonful", bin: "amount", why: "the plural is <i>spoonfuls</i>, not <i>spoonsful</i> — the ending goes on the whole word." },
          { text: "an armful",  bin: "amount", why: "the container can be a part of the body: <i>an armful of files</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Explain the difference between a prediction and a projection in one sentence each.</p>" } }
    ]
  };
})();
