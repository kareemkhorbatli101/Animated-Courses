/* Unit 3 · Adaptation and Diversity — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u03-l1", unit: "u03", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what varies, and what is selected",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Four of them end in <b>-tion</b>, which is this unit's suffix and no accident: this subject names processes.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 variation</b> — the differences already present in a population",
          "<b>2 selection</b> — the differential survival of some of that variation",
          "<b>3 adaptation</b> — the outcome, after selection has acted",
          "<b>4 population</b> — the group selection acts on, never the individual",
          "<b>5 trait</b> — one measurable feature, such as beak depth",
          "<b>6 heritable</b> — passed from parent to offspring",
          "<b>7 offspring</b> — the next generation",
          "<b>8 species</b> — a group that breeds within itself"
        ] }] },
        after: "<p>Hold 1, 2 and 3 apart. They are three stages of one story, and most confusion comes from treating them as one word.</p>" },


      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "match", task: null, n: 0,
        prompt: "The bench where the measurements are actually made. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A laboratory bench under a window, with a microscope, a specimen jar, a field guide, a data sheet and a laptop on it",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "window", x: 620, y: 50, s: 2.3 },
            { p: "shelf",  x: 60,  y: 60, s: 2.2 },
            { p: "bench",  x: 120, y: 360, sx: 6.6, sy: 1.9 },
            { p: "microscope", x: 200, y: 340, s: 0.9 },
            { p: "flask",      x: 330, y: 355, s: 0.85 },
            { p: "book",       x: 430, y: 372, s: 0.75 },
            { p: "paper",      x: 540, y: 350, s: 0.78 },
            { p: "laptop",     x: 640, y: 352, s: 0.95 },
            { p: "plant",      x: 872, y: 300, s: 1.0 }
          ] },
        pins: [
          { id: "p-bench", x: 16, y: 94, tx: 25, ty: 79, w: 160 },
          { id: "p-scope", x: 15, y: 54, tx: 24, ty: 69, w: 150 },
          { id: "p-jar",   x: 40, y: 54, tx: 37, ty: 69, w: 160 },
          { id: "p-guide", x: 62, y: 94, tx: 46, ty: 73, w: 150 },
          { id: "p-sheet", x: 64, y: 56, tx: 57, ty: 69, w: 150 },
          { id: "p-laptop",x: 87, y: 58, tx: 68, ty: 70, w: 150 }
        ],
        pairs: [
          { word: "laboratory bench", pin: "p-bench",
            why: "indoors the word means a work surface. Outdoors the same word is a seat, which Unit 2 used." },
          { word: "microscope", pin: "p-scope",
            why: "<i>micro-</i> small, <i>-scope</i> look at. The same two pieces build <i>telescope</i> and <i>stethoscope</i>." },
          { word: "specimen jar", pin: "p-jar",
            why: "a <i>specimen</i> is one individual kept as evidence; a <i>sample</i> is a set drawn from a population." },
          { word: "field guide", pin: "p-guide",
            why: "the book you identify things from. <i>Guide</i> is both the book and the person." },
          { word: "data sheet", pin: "p-sheet",
            why: "<i>data</i> takes a plural verb in formal writing: <i>the data are</i>, though <i>the data is</i> is now common." },
          { word: "laptop", pin: "p-laptop",
            why: "where the sheet ends up. The order — sheet first, laptop second — is deliberate in field science: paper does not run out of battery." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "Selection acts on a p___, never on one individual.", answer: "population", given: [0, 1, 2],
            why: "<i>Population</i> — the unit this whole subject works in." },
          { text: "A t___ such as beak depth can be measured in millimetres.", answer: "trait", given: [0, 1],
            why: "<i>Trait</i> = one measurable feature." },
          { text: "A difference only matters to selection if it is h___.", answer: "heritable", given: [0, 1, 2],
            why: "<i>Heritable</i> = passed to offspring. Without that, selection has nothing to build on." },
          { text: "The survivors bred, and their o___ had deeper beaks on average.", answer: "offspring", given: [0, 1, 2],
            why: "<i>Offspring</i> is the same in singular and plural." }
        ] },


      { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the case study in Lesson 5 is built from.",
        items: [
          { text: "The finches on this island are a separate s___ and breed only with each other.", answer: "species", given: [0, 1],
            why: "Singular and plural are the same word: <i>one species, two species</i>. <i>Specie</i> is not the singular." },
          { text: "A d___ in 1977 killed almost all the small-seeded plants.", answer: "drought", given: [0, 1],
            why: "Spelled with <i>-ough</i> and said /draʊt/, to rhyme with <i>out</i>." },
          { text: "Only the birds with deeper beaks could c___ the hard seeds.", answer: "crack", given: [0, 1],
            why: "<i>Crack</i> takes a direct object here. It is also intransitive — <i>the seed cracked</i> — which is why the agent can disappear." },
          { text: "Beak depth is i___ from the parents, which is what lets selection work.", answer: "inherited", given: [0, 1],
            why: "<i>Inherit</i> is the verb, <i>heritable</i> the adjective, <i>heredity</i> the noun. All three appear in this unit." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -tion", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>-tion</b> turns a verb into a noun naming the process or its result.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>adapt → adapt<b>ation</b> · vary → vari<b>ation</b> · select → selec<b>tion</b> · populate → popula<b>tion</b> · observe → observa<b>tion</b>.<br><b>The stress moves to the syllable before -tion.</b> <i>ADapt → adapTAtion.</i> That shift is itself tested on the reading section.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-TION AND THE STRESS SHIFT",
          blocks: [{ lines: [
            "They <b>ob</b>serve the birds every morning. → The <b>ob</b>ser<b>va</b>tion took three years.",
            "Beak depth <b>va</b>ries across the island. → The <b>va</b>ri<b>a</b>tion was present before the drought.",
            "They se<b>lect</b> for deeper beaks. → Se<b>lec</b>tion acted within one season.",
            "The species a<b>dapt</b>ed. → The a<b>dap</b>ta<b>tion</b> is an outcome, not an effort."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -tion", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the noun. The sentence tells you the verb it comes from.",
        items: [
          { text: "The v___ was already present before the drought began.", answer: "variation", given: [0, 1, 2],
            why: "<i>vary → variation</i>. The <i>y</i> becomes <i>i</i>." },
          { text: "S___ does not create anything new; it chooses among what exists.", answer: "selection", given: [0, 1],
            why: "<i>select → selection</i>." },
          { text: "A___ is best read as an outcome, not an effort.", answer: "adaptation", given: [0, 1, 2],
            why: "<i>adapt → adaptation</i>, with the stress on the third syllable." },
          { text: "Their o___ of the island lasted three decades.", answer: "observation", given: [0, 1, 2],
            why: "<i>observe → observation</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The suffix -tion", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more <b>-tion</b> nouns. Say each one aloud and listen for where the stress lands.",
        items: [
          { text: "Regular m___ between islands keeps the two populations mixed.", answer: "migration", given: [0, 1],
            why: "<i>migrate → migration</i>, and the stress moves: <i>MI-grate</i> becomes <i>mi-GRA-tion</i>." },
          { text: "Their c___ that beak depth is heritable rests on thirty years of data.", answer: "conclusion", given: [0, 1],
            why: "<i>conclude → conclusion</i>, with <i>-sion</i>, not <i>-tion</i>. Verbs ending in <i>-de</i> usually go this way." },
          { text: "A single g___ was enough for the change to show.", answer: "generation", given: [0, 1],
            why: "<i>generate → generation</i>. The word means both the act of producing and the group produced." },
          { text: "The d___ of the drought was eighteen months.", answer: "duration", given: [0, 1],
            why: "<i>endure</i> and <i>durable</i> share its root. There is no modern English verb <i>durate</i>." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The suffix -tion", letter: "D",
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three are stages of one story",
            options: [
              { text: "variation",  why: "stage one: the differences are already there." },
              { text: "selection",  why: "stage two: some of those differences survive better." },
              { text: "adaptation", why: "stage three: what is left once selection has acted." },
              { text: "publication", correct: true,
                why: "the odd one: it is what the researchers do afterwards, and nothing to do with the mechanism." }
            ] },
          { group: "three mean passed from parent to offspring",
            options: [
              { text: "heritable", why: "able to be passed on — the adjective selection needs." },
              { text: "inherited", why: "received from a parent." },
              { text: "genetic",   why: "carried in the genes, so passed on." },
              { text: "acquired", correct: true,
                why: "the odd one: acquired means gained during a lifetime, and the whole of this subject turns on acquired characteristics <i>not</i> being passed on." }
            ] },
          { group: "three are nouns made from verbs",
            options: [
              { text: "migration",   why: "<i>migrate</i> + <i>-tion</i>." },
              { text: "duration",    why: "an old verb, but the shape is the same." },
              { text: "observation", why: "<i>observe</i> + <i>-ation</i>." },
              { text: "heritable", correct: true,
                why: "the odd one: it is an adjective, and it is built with <i>-able</i>, not with this unit's suffix." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "-tion or -sion", letter: "A",
        kind: "sort", task: null, n: 0,
        prompt: "Each of these verbs makes a noun. Sort them by which ending the noun takes. The verbs are given, not the nouns, so you have to know rather than see.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>The usual rule: a verb ending in <i>-de</i>, <i>-d</i> or <i>-se</i> takes <i>-sion</i> (<i>conclude → conclusion</i>, <i>extend → extension</i>). Almost everything else takes <i>-tion</i> or <i>-ation</i>. There are exceptions, but this covers most of what you will meet in a reading passage.</p>" },
        bins: [
          { id: "tion", label: "Takes -tion", hint: "migrate → migration" },
          { id: "sion", label: "Takes -sion", hint: "conclude → conclusion" }
        ],
        items: [
          { text: "migrate",  bin: "tion", why: "<i>migration</i>." },
          { text: "observe",  bin: "tion", why: "<i>observation</i> — note the extra <i>a</i>." },
          { text: "adapt",    bin: "tion", why: "<i>adaptation</i>, also with the extra <i>a</i>." },
          { text: "populate", bin: "tion", why: "<i>population</i>, dropping the final <i>e</i>." },
          { text: "conclude", bin: "sion", why: "ends in <i>-de</i>: <i>conclusion</i>." },
          { text: "decide",   bin: "sion", why: "ends in <i>-de</i>: <i>decision</i>." },
          { text: "divide",   bin: "sion", why: "ends in <i>-de</i>: <i>division</i>." },
          { text: "extend",   bin: "sion", why: "ends in <i>-d</i>: <i>extension</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say the three-stage story aloud using <i>variation</i>, <i>selection</i> and <i>adaptation</i>, in that order.</p>" } }
    ]
  };
})();
