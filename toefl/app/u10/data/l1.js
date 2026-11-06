/* Unit 10 · Rules, Rights and Ethics — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u10-l1", unit: "u10", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name the parts of a rule and the ways of breaking one",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read", "claim"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "judgment", ar: "\u062d\u064f\u0643\u0645",
            meaning: "a decision reached by weighing things",
            with: ["exercise judgment", "a matter of judgment", "in my judgment"],
            why: "A judgment may be wrong without being unreasonable, which is what makes it a judgment rather than a calculation. British English also spells it <i>judgement</i>." },
          { term: "enforcement", ar: "\u0625\u0646\u0641\u0627\u0630",
            meaning: "making a rule actually bind",
            with: ["strict enforcement", "enforcement of the rule", "enforce the law"],
            why: "What turns a rule into a constraint. An unenforced rule is a statement of preference, however it is written." },
          { term: "entitlement", ar: "\u0627\u0633\u062a\u062d\u0642\u0627\u0642",
            meaning: "something you may claim as of right",
            with: ["a legal entitlement", "entitled to", "entitlement to"],
            why: "A claim you need not justify, which is exactly what makes the word contested: saying something is an entitlement ends an argument by fiat." },
          { term: "argument", ar: "\u062d\u062c\u0651\u0629",
            meaning: "a case made with reasons",
            with: ["a strong argument", "the argument for", "advance an argument"],
            why: "Not a quarrel, in this register. The <i>e</i> of <i>argue</i> disappears, which is one of the two spellings this lesson asks you to learn." },
          { term: "consent", ar: "\u0645\u0648\u0627\u0641\u0642\u0629",
            meaning: "agreement freely given",
            with: ["informed consent", "without consent", "give consent"],
            why: "<i>Freely</i> does all the work. Agreement under threat has the form of consent and none of its force." },
          { term: "obligation", ar: "\u0627\u0644\u062a\u0632\u0627\u0645",
            meaning: "something you are bound to do",
            with: ["a moral obligation", "under an obligation", "obligation to"],
            why: "The mirror of <i>entitlement</i>: one person\u0027s entitlement is usually somebody else\u0027s obligation, and the two words name the same relation from opposite ends." },
          { term: "civil disobedience", ar: "\u0627\u0644\u0639\u0635\u064a\u0627\u0646 \u0627\u0644\u0645\u062f\u0646\u064a",
            meaning: "open rule-breaking that accepts the penalty",
            with: ["an act of civil disobedience", "engage in civil disobedience", "civil disobedience is"],
            why: "<i>Open</i> and <i>accepts the penalty</i> are the whole definition. Hide either and it stops being this and becomes the next word." },
          { term: "evasion", ar: "\u062a\u0647\u0631\u0651\u0628",
            meaning: "quiet rule-breaking that does not",
            with: ["tax evasion", "evasion of", "evade the rule"],
            why: "The same act without the audience and without the cost. The talk argues that is where the entire moral difference sits." }
        ],
        prompt: "Eight words. Say each meaning before you turn the card. Hold the last two apart \u2014 the talk in On Campus argues that the whole moral difference lies between them.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 judgment</b> — a decision reached by weighing things",
          "<b>2 enforcement</b> — making a rule actually bind",
          "<b>3 entitlement</b> — something you may claim as of right",
          "<b>4 argument</b> — a case made with reasons",
          "<b>5 consent</b> — agreement freely given",
          "<b>6 obligation</b> — something you are bound to do",
          "<b>7 civil disobedience</b> — open rule-breaking that accepts the penalty",
          "<b>8 evasion</b> — quiet rule-breaking that does not"
        ] }] },
        after: "<p>Hold 7 and 8 apart. The talk in On Campus argues that the whole moral difference lies between them.</p>" },

            { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A hearing room, laid out as these rooms always are. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A hearing room with a raised bench, a witness stand, a clerk's desk with a register, rows of seats for the public, a wall clock and a notice board",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "poster",  x: 70,  y: 60,  s: 1.9 },
            { p: "clock",   x: 880, y: 58,  s: 0.75 },
            { p: "counter", x: 330, y: 200, sx: 3.4, sy: 1.5 },
            { p: "podium",  x: 680, y: 240, s: 1.3 },
            { p: "desk",    x: 180, y: 330, sx: 1.9, sy: 1.1 },
            { p: "book",    x: 215, y: 334, s: 0.7 },
            { p: "longdesk", x: 300, y: 420, sx: 4.2, sy: 1.4 },
            { p: "seated",  x: 360, y: 360, s: 1.2 },
            { p: "seated",  x: 560, y: 360, s: 1.2 }
          ] },
        pins: [
          { id: "p-bench",  x: 48, y: 22, tx: 48, ty: 40, w: 150 },
          { id: "p-stand",  x: 82, y: 40, tx: 73, ty: 50, w: 150 },
          { id: "p-clerk",  x: 13, y: 76, tx: 22, ty: 63, w: 150 },
          { id: "p-reg",    x: 13, y: 90, tx: 23, ty: 61, w: 150 },
          { id: "p-public", x: 48, y: 92, tx: 46, ty: 80, w: 170 },
          { id: "p-notice", x: 14, y: 42, tx: 13, ty: 24, w: 150 }
        ],
        pairs: [
          { word: "bench", pin: "p-bench",
            why: "the raised desk, and by extension the judges who sit at it: <i>the bench ruled</i>. Unit 3 used the same word for a laboratory work surface." },
          { word: "witness stand", pin: "p-stand",
            why: "where evidence is given. <i>To take the stand</i> is the fixed phrase, and it means to give evidence rather than to stand up." },
          { word: "clerk's desk", pin: "p-clerk",
            why: "the clerk keeps the record. In British English the word rhymes with <i>dark</i>, which surprises most learners." },
          { word: "register", pin: "p-reg",
            why: "the official record of what happened. The same word names a range of formality in language, which Unit 2 used." },
          { word: "public gallery", pin: "p-public",
            why: "where anyone may sit. That it exists at all is a substantive claim about what a hearing is for." },
          { word: "notice board", pin: "p-notice",
            why: "where the day's list is posted. A hearing nobody can find out about is not quite a public one." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A rule without e___ is only a suggestion.", answer: "enforcement", given: [0, 1, 2],
            why: "<i>enforce → enforcement</i>." },
          { text: "An e___ is something you can claim as of right.", answer: "entitlement", given: [0, 1, 2],
            why: "<i>entitle → entitlement</i>." },
          { text: "C___ given under pressure is not consent at all.", answer: "consent", given: [0, 1, 2],
            why: "<i>Consent</i> — and the qualifier <i>freely</i> does the work." },
          { text: "E___ is breaking the rule quietly and hoping nobody notices.", answer: "evasion", given: [0, 1, 2],
            why: "<i>evade → evasion</i>, the opposite of open disobedience." }
        ] },

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        concepts: ["word", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the talk in On Campus is argued with.",
        items: [
          { text: "An o___ is something you are bound to do whether you want to or not.", answer: "obligation", given: [0, 1],
            why: "<i>oblige → obligation</i>. Note that the verb keeps the <i>g</i> soft and the noun does not." },
          { text: "A j___ may be wrong without being unreasonable.", answer: "judgment", given: [0, 1],
            why: "Spelled without the middle <i>e</i> in legal English; <i>judgement</i> is also correct in general use." },
          { text: "Open rule-breaking that accepts the penalty is civil d___ .", answer: "disobedience", given: [0, 1],
            why: "<i>dis + obedience</i> — Unit 1's prefix, doing its negating job." },
          { text: "A p___ is a statement an argument takes as given.", answer: "premise", given: [0, 1],
            why: "Spelled <i>premise</i> in this sense. <i>Premises</i>, confusingly, means a building." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -ment", letter: "A",
        concepts: ["read", "claim"],
        kind: "build", task: null, n: 0,

        items: [

          { root: "enforce", affix: "-ment", answer: "enforcement",

            why: "The plain case: nothing changes, the suffix simply attaches." },

          { root: "argue", affix: "-ment", answer: "argument",

            why: "The first spelling to learn: <i>argue</i> loses its <i>e</i>. <i>Arguement</i> is one of the commonest misspellings in English." },

          { root: "judge", affix: "-ment", answer: "judgment",

            why: "The second: the <i>e</i> may go or stay. <i>Judgment</i> is standard in law, <i>judgement</i> elsewhere in British English, and both are defensible." },

          { root: "entitle", affix: "-ment", answer: "entitlement",

            why: "Here the <i>e</i> stays, because it is doing work: <i>entitlment</i> would lose the sound of the syllable." },

          { root: "oblige", affix: "-ation", answer: "obligation",

            why: "Not every act noun takes <i>-ment</i>. This verb takes <i>-ation</i> and changes its stem, and no rule predicts that." },

          { root: "evade", affix: "-sion", answer: "evasion",

            why: "A third pattern again, with a consonant change: <i>-de</i> becomes <i>-sion</i>, as in <i>decide</i> and <i>decision</i>." }

        ],
        prompt: "<b>-ment</b> turns a verb into a noun naming the act or its result. Build each one \u2014 two of them change spelling, and the other suffixes are here to make the choice real.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>enforce → enforce<b>ment</b> · argue → argu<b>ment</b> · entitle → entitle<b>ment</b> · judge → judg<b>ment</b> · assess → assess<b>ment</b>.<br>Two spellings to learn: <i>argue</i> loses its <i>e</i>, and <i>judgment</i> is written without one in legal English (<i>judgement</i> is also correct in general use).</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-MENT IN LEGAL AND MORAL WRITING",
          blocks: [{ lines: [
            "An <b>argument</b> is a case made with reasons — not a quarrel, in this register.",
            "A <b>judgment</b> is a decision reached by weighing, and it may be wrong without being unreasonable.",
            "<b>Enforcement</b> is what turns a rule into a constraint.",
            "An <b>entitlement</b> is a claim you need not justify, which is what makes the word contested."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -ment", letter: "B",
        concepts: ["word", "measurement"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the noun. The sentence tells you the verb it comes from.",
        items: [
          { text: "Her a___ rested on two premises and one example.", answer: "argument", given: [0, 1, 2],
            why: "<i>argue → argument</i>: the <i>e</i> is dropped." },
          { text: "The j___ was unanimous but narrowly reasoned.", answer: "judgment", given: [0, 1, 2],
            why: "<i>judge → judgment</i>, without the middle <i>e</i> in legal usage." },
          { text: "The a___ counts for forty per cent of the module.", answer: "assessment", given: [0, 1, 2],
            why: "<i>assess → assessment</i>." },
          { text: "Without e___ the rule changed nothing at all.", answer: "enforcement", given: [0, 1, 2],
            why: "<i>enforce → enforcement</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The suffix -ment", letter: "C",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more <b>-ment</b> nouns. Two of them only look as though they are built that way.",
        items: [
          { text: "The court reached a s___ before the hearing began.", answer: "settlement", given: [0, 1],
            why: "<i>settle → settlement</i>, and the same word names a place where people settled." },
          { text: "The a___ to the rule took effect in September.", answer: "amendment", given: [0, 1],
            why: "<i>amend → amendment</i>. The noun <i>amends</i> is a different word with a different meaning." },
          { text: "The two sides reached an a___ about the facts but not the law.", answer: "agreement", given: [0, 1],
            why: "<i>agree → agreement</i>, keeping both <i>e</i>s, unlike <i>argue → argument</i>." },
          { text: "Her c___ to the principle survived the vote that went against her.", answer: "commitment", given: [0, 1],
            why: "<i>commit → commitment</i>, doubling the <i>t</i> because the stress falls on the final syllable of the verb." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The suffix -ment", letter: "D",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three are nouns made from verbs with this suffix",
            options: [
              { text: "enforcement", why: "<i>enforce + ment</i>." },
              { text: "settlement",  why: "<i>settle + ment</i>." },
              { text: "amendment",   why: "<i>amend + ment</i>." },
              { text: "monument", correct: true,
                why: "the odd one: it comes whole from Latin <i>monumentum</i>, and there is no English verb <i>to monu</i>." }
            ] },
          { group: "three are ways of not complying",
            options: [
              { text: "disobedience", why: "open refusal." },
              { text: "evasion",      why: "quiet avoidance." },
              { text: "non-compliance", why: "the neutral bureaucratic term for either." },
              { text: "enforcement", correct: true,
                why: "the odd one: enforcement is what the other side does. Putting it here is the commonest confusion in a first essay on this topic." }
            ] },
          { group: "three can be given or withheld",
            options: [
              { text: "consent",   why: "and it must be freely given to count." },
              { text: "agreement", why: "offered or refused." },
              { text: "permission", why: "granted or denied." },
              { text: "obligation", correct: true,
                why: "the odd one: an obligation binds you whether you give anything or not, which is precisely what distinguishes it from the other three." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Open or quiet", letter: "A",
        concepts: ["comparison", "claim"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight ways of not following a rule. Sort them by whether the rule-breaking is done openly.",
        note: { kind: "words", title: "In other words…",
                body: "<p>The distinction is not between legal and illegal: all eight break a rule. It is between acts that invite the penalty as part of the argument and acts that try to escape it. On Campus argues the entire moral difference sits there.</p>" },
        bins: [
          { id: "open",  label: "Done openly", hint: "the penalty is accepted" },
          { id: "quiet", label: "Done quietly", hint: "the penalty is avoided" }
        ],
        items: [
          { text: "sitting in a road and waiting to be arrested", bin: "open",
            why: "the textbook case: the arrest is not a failure of the act but part of it." },
          { text: "publishing a document and naming yourself as the source", bin: "open",
            why: "the naming is what converts a leak into civil disobedience." },
          { text: "refusing to pay a tax and writing to say so", bin: "open",
            why: "the letter is the point; without it this is simply non-payment." },
          { text: "occupying a building and inviting the press", bin: "open",
            why: "visibility is the instrument, which is why the press is invited rather than avoided." },
          { text: "paying cash so that the transaction is not recorded", bin: "quiet",
            why: "the whole design is to leave no trace." },
          { text: "copying an essay and changing the wording", bin: "quiet",
            why: "the rewriting exists to avoid detection, not to make an argument." },
          { text: "signing a form on somebody else's behalf", bin: "quiet",
            why: "nobody is meant to find out, which is what makes it evasion rather than protest." },
          { text: "quietly ignoring a rule that is never checked", bin: "quiet",
            why: "the hardest card, because it feels like nothing at all. It is still the quiet column: the rule survives, and so does the person breaking it." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say in one sentence what distinguishes civil disobedience from evasion.</p>" } }
    ]
  };
})();
