/* Unit 8 · Disease and Public Health — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u08-l1", unit: "u08", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a rate is a rate of",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Numbers 7 and 8 are the pair that decides whether a published rate means anything.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 outbreak</b> — a sudden rise in cases in one place",
          "<b>2 transmission</b> — the passing of infection from one person to another",
          "<b>3 immunity</b> — protection acquired by infection or vaccination",
          "<b>4 sanitation</b> — the removal of waste and the supply of clean water",
          "<b>5 mortality</b> — death, as a measured quantity",
          "<b>6 intervention</b> — anything deliberately done to change the course of a disease",
          "<b>7 numerator</b> — the number on top: here, the deaths",
          "<b>8 denominator</b> — the number underneath: here, the cases you know about"
        ] }] },
        after: "<p>A fatality rate is 7 divided by 8. The talk in On Campus is about what happens when 8 is wrong.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "Clean water and waste removal together are s___.", answer: "sanitation", given: [0, 1, 2],
            why: "<i>Sanitation</i> — and the article argues it mattered more than medicine." },
          { text: "An i___ is anything done deliberately to change the course of a disease.", answer: "intervention", given: [0, 1, 2],
            why: "<i>intervene → intervention</i>." },
          { text: "The d___ is the number of recorded cases, not the number infected.", answer: "denominator", given: [0, 1, 2],
            why: "<i>Denominator</i> — the bottom of the fraction, and the weak point." },
          { text: "M___ from tuberculosis fell for decades before any treatment existed.", answer: "mortality", given: [0, 1, 2],
            why: "<i>Mortality</i> = death as a measured quantity." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The prefix re-", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>re-</b> means <i>again</i> or <i>back</i>. In this subject it is everywhere, because disease is a thing that returns.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>re + cover → <b>re</b>cover · re + infect → <b>re</b>infect · re + currence → <b>re</b>currence · re + sistant → <b>re</b>sistant · re + duce → <b>re</b>duce.<br>Note that <i>recover</i> and <i>re-cover</i> are different words: the hyphen keeps <i>cover again</i> apart from <i>get better</i>.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "RE- IN PUBLIC HEALTH",
          blocks: [{ lines: [
            "A <b>resistant</b> strain survives the treatment that used to clear it.",
            "A <b>recurrence</b> is the disease returning in the same patient.",
            "To <b>reinfect</b> is to catch it a second time, which immunity is supposed to prevent.",
            "To <b>recover</b> is to get better. To <b>re-cover</b> is to put a lid back on — the hyphen is doing real work."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The prefix re-", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word. Each is built with this unit's prefix.",
        items: [
          { text: "A r___ strain survives the drug that once cleared it.", answer: "resistant", given: [0, 1, 2],
            why: "<i>re + sistant</i>: standing against." },
          { text: "A r___ is the same disease returning in the same patient.", answer: "recurrence", given: [0, 1, 2],
            why: "<i>re + currence</i>: running again." },
          { text: "Immunity is supposed to stop you being r___.", answer: "reinfected", given: [0, 1, 2],
            why: "<i>re + infected</i>." },
          { text: "Most patients r___ within a fortnight without treatment.", answer: "recover", given: [0, 1, 2],
            why: "<i>recover</i>, one word, no hyphen — <i>re-cover</i> would mean putting a lid back on." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say what a case fatality rate divides by what, and name one way the bottom number can be wrong.</p>" } }
    ]
  };
})();
