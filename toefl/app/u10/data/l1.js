/* Unit 10 · Rules, Rights and Ethics — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u10-l1", unit: "u10", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name the parts of a rule and the ways of breaking one",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Four end in <b>-ment</b>, this unit's suffix, and they are all abstract nouns made from verbs.",
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

      { id: "2a", section: 2, sectionTitle: "The suffix -ment", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>-ment</b> turns a verb into a noun naming the act or its result.",
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
        ],
        closer: { kind: "test", body: "<p>Close the page. Say in one sentence what distinguishes civil disobedience from evasion.</p>" } }
    ]
  };
})();
