/* Unit 1 · How We Learn — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u01-l1", unit: "u01", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Identify the methods memory research distinguishes",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify ways of studying", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Nine things students do when they study. Two of them feel productive and are not — the rest of this unit is about which.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 re-read</b> — go through the same notes again",
          "<b>2 highlight</b> — mark the important lines in colour",
          "<b>3 test yourself</b> — close the book and try to recall",
          "<b>4 space your sessions</b> — spread the same hours over more days",
          "<b>5 summarise from memory</b> — write what you remember, then check",
          "<b>6 explain it aloud</b> — say it to someone who does not know it",
          "<b>7 interleave</b> — alternate two subjects instead of blocking one",
          "<b>8 take a break</b> — stop before the point of no return",
          "<b>9 check what you got wrong</b> — go back to the errors, not the whole chapter"
        ] }] },
        after: "<p>Keep 1 and 2 in mind. They are the two the research keeps finding against.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify ways of studying", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words. The first letters are given.",
        items: [
          { text: "Close the book and t___ yourself on what you have just read.", answer: "test", given: [0],
            why: "<i>test yourself</i> — the method this unit argues for." },
          { text: "Spread the same four hours over a week: s___ your sessions.", answer: "space", given: [0, 1],
            why: "<i>space</i> as a verb: spread out over time." },
          { text: "Trying to r___ something is harder than reading it again, and that is the point.", answer: "recall", given: [0, 1],
            why: "<i>recall</i> = bring back from memory without looking." },
          { text: "It helps to e___ an idea aloud to someone who does not know it.", answer: "explain", given: [0, 1],
            why: "<i>explain</i> forces you to find the gaps in what you know." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Learn what the evidence says", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the summary card. It uses the academic vocabulary this unit teaches.",
        note: { kind: "words", title: "Academic language",
                body: "<i>research</i><i>revise</i><i>accurately</i><i>challenge</i><i>improvement</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHAT THE RESEARCH FINDS",
          blocks: [{ lines: [
            "Decades of <b>research</b> agree on one uncomfortable finding.",
            "The methods that feel easiest produce the smallest <b>improvement</b>.",
            "Students who <b>revise</b> by re-reading predict their own scores badly; students who test themselves predict them <b>accurately</b>.",
            "The <b>challenge</b> is that the better method feels worse while you are doing it."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "Learn what the evidence says", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the academic words. Watch the word form — the sentence tells you whether you need a noun, a verb or an adverb.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>These five words change form: <i>research → researcher</i>, <i>revise → revision</i>, <i>accurate → accurately</i>, <i>improve → improvement</i>. The 2026 test's reading items test exactly this.</p>" },
        items: [
          { text: "She spent the summer doing r___ on how people forget.", answer: "research", given: [0, 1],
            why: "A noun here — <i>doing research</i>, not <i>doing researcher</i>." },
          { text: "Read your draft again tomorrow and r___ it.", answer: "revise", given: [0, 1],
            why: "A verb after <i>and</i>: <i>revise</i>, not <i>revision</i>." },
          { text: "Students who test themselves judge their own knowledge a___.", answer: "accurately", given: [0, 1, 2],
            why: "An adverb modifying <i>judge</i>: <i>accurate → accurately</i>." },
          { text: "Attending every week produced a steady i___ in her marks.", answer: "improvement", given: [0, 1, 2],
            why: "<i>a steady ___</i> needs a noun: <i>improve → improvement</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write down the nine methods from 1A. Which two did the card argue against, and why?</p>" } }
    ]
  };
})();
