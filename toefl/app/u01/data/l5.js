/* Unit 1 · How We Learn — LESSON 5 · READING
   Step Forward's Lesson 5 template, exercise for exercise:
     1 Read      A definitions · B preview and predict · C the passage + items
                 D the author's purpose · E T/F/NI citing the line
     2 Word study  A the affix chart · B apply it
     3 Talk it over A the data visual · B the notes chart
     BRING IT TO LIFE
   All content newly authored. */
(function () {
  "use strict";

  /* The academic passage. Held inside ETS's high band for this task
     (Flesch-Kincaid 10.5-20.0) and under the 200-word ceiling. */
  var PASSAGE = {
    masthead: "WHY RE-READING FAILS",
    icon: "",
    every: 1,
    blocks: [
      { h: "The feeling of knowing", lines: [
        "Most students prepare for an examination by reading their notes repeatedly, and the method feels effective because each pass through the material is easier than the one before.",
        "That growing ease is routinely mistaken for growing knowledge.",
        "Psychologists call the illusion <b>fluency</b><sup>1</sup>, and it is among the most reliable findings in the experimental study of memory."
      ] },
      { h: "What the experiments show", lines: [
        "What actually consolidates a memory is the effort of retrieving it.",
        "In experiments first reported in the 1970s and confirmed repeatedly since, students who closed their books and attempted to recall what they had read substantially outperformed students who simply reread the passage a second time.",
        "The margin was neither small nor confined to the day of the examination; a week later it had widened considerably."
      ] },
      { h: "Why it works", lines: [
        "The explanation is that retrieval constitutes a learning event in itself.",
        "Each time a fact is deliberately recovered from memory the pathway to it is reinforced, whereas rereading leaves that pathway entirely untouched.",
        "The practical recommendation follows directly: close the book earlier than feels comfortable, and treat the resulting difficulty as evidence that the method is working."
      ] }
    ],
    notes: ["fluency: the sense that material is easy, which is not the same as knowing it"],
    source: "Illustrative summary of the retrieval-practice literature, written for this book"
  };

  /* The everyday text: Read in Daily Life is Social Interpersonal and short -
     ETS puts easier texts at 15-50 words. This is a noticeboard card. */
  var NOTICE = {
    masthead: "STUDY SKILLS DROP-IN",
    mastColor: "blue",
    every: 5,
    blocks: [{ lines: [
      "Bring one set of notes and one past paper.",
      "We will show you how to turn them into questions you can test yourself with.",
      "Thursdays 4:00-5:30, Library B-214. No booking; just come.",
      "If the room is full we run a second session at 6:00."
    ] }],
    source: "Student Learning Centre"
  };

  window.PAGE = {
    id: "u01-l5", unit: "u01", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Identify ways to study more effectively",
    next: "../index.html",
    scenes: [

      /* ---------------- 1 Read ---------------- */
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions. You will meet these three words in the article.",
        text: { blocks: [{ lines: [
          "<span class='gloss'>retrieve</span> (v) to bring something back from memory without looking at it",
          "<span class='gloss'>fluency</span> (n) the feeling that material is easy",
          "<span class='gloss'>reinforce</span> (v) to make something stronger"
        ] }] },
        after: "<p>Watch for <i>fluency</i> in particular. The article argues it misleads you.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the reading. Look at the title and the three bold headings. What can you guess?",
        note: { kind: "reader", body: "<p>Read with a purpose. Before they read, good readers ask themselves: what do I want from this text?</p>" },
        options: [
          { text: "Re-reading feels useful but does not work well.", correct: true,
            why: "The title says re-reading fails, and the headings move from a feeling, to evidence, to a reason." },
          { text: "Students should not read their notes at all.",
            why: "Too strong. The article recommends a different method, not no reading." },
          { text: "Memory experiments are unreliable.",
            why: "The opposite: the second heading points to repeated confirmation." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read a complex text more than once: first for the general idea, then for the details, then for the difficult vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Re-reading produces a feeling of knowing that retrieval does not, and the feeling is misleading.", correct: true,
                why: "Paragraph 1 names the illusion; paragraphs 2 and 3 show what works instead and why." },
              { text: "Students in the 1970s studied differently from students today.",
                why: "The date is a detail about when the work began, not the point of the article." },
              { text: "Examinations measure memory rather than understanding.",
                why: "The article never discusses what examinations measure." }
            ] },
          { q: "What happened a week after the test?",
            options: [
              { text: "The gap between the two groups had grown.", correct: true,
                why: "“A week later it had widened” — <i>it</i> is the margin between the groups." },
              { text: "Both groups had forgotten most of the material.",
                why: "The article does not say this; it compares the groups rather than their absolute scores." },
              { text: "The groups performed about the same.",
                why: "That is the opposite of <i>widened</i>." }
            ] },
          { q: "In line 8, <i>that pathway</i> refers to:",
            options: [
              { text: "the route by which a fact is recalled from memory", correct: true,
                why: "The clause before it introduces <i>the pathway to it</i>, where <i>it</i> is the fact recovered from memory." },
              { text: "the practical advice the author gives",
                why: "The advice comes after, in a new sentence, and is not a path." },
              { text: "the order in which the notes were written",
                why: "Notes are not mentioned in that paragraph." }
            ] },
          { q: "What would the author most likely say about a student who only highlights their notes?",
            options: [
              { text: "They are building fluency rather than memory.", correct: true,
                why: "Highlighting is a form of re-reading: it makes the page feel easier without requiring retrieval." },
              { text: "They should highlight more of the page.",
                why: "Nothing in the article suggests doing more of what it criticises." },
              { text: "Highlighting is better than reading the notes twice.",
                why: "The article draws its line between retrieval and everything else, not between kinds of re-reading." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 0,
        prompt: "Now a short everyday text. Read the card from the noticeboard.",
        text: NOTICE,
        items: [
          { q: "What should you bring?",
            options: [
              { text: "Notes and a past paper.", correct: true, why: "Line 1 names both." },
              { text: "Nothing — materials are provided.", why: "The card asks you to bring two things." },
              { text: "A booking confirmation.", why: "It says there is no booking." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i> (true), <i>F</i> (false) or <i>NI</i> (no information). For T and F, write the line of the <b>article</b> where you found it.",
        items: [
          { stem: "Re-reading can feel more useful than it is.", answer: "T", line: 2,
            why: "Line 2: the growing ease is <i>routinely mistaken for growing knowledge</i>." },
          { stem: "The retrieval effect was found only once.", answer: "F", line: 5,
            why: "Line 5 says the experiments have been <i>confirmed repeatedly since</i> the 1970s." },
          { stem: "The author has taught a study-skills class.", answer: "NI", line: null,
            why: "The article never says anything about the author’s own teaching." }
        ],
        note: { kind: "reader", body: "<p>An <b>NI</b> is not a failed <b>F</b>. If the text neither states it nor rules it out, the honest mark is NI — and that habit protects you from a distractor built on information the passage never gave.</p>" } },

      /* ---------------- 2 Word study ---------------- */
      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "The prefix <b>dis-</b> means <i>not</i>, or reverses the verb. Complete the words.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><i>dis-</i> attaches to verbs and adjectives and does not move the stress: <b>dis</b>agree, <b>dis</b>prove, <b>dis</b>confirm, <b>dis</b>regard.</p>" },
        items: [
          { text: "Two researchers may ___ about what the data show.", answer: "disagree", given: [0,1,2],
            why: "<i>dis- + agree</i>." },
          { text: "A second experiment failed to ___ the claim.", answer: "disprove", given: [0,1,2],
            why: "<i>disprove</i> = show to be false. This is the verb a methods section uses." },
          { text: "It is bad practice to ___ a result you do not like.", answer: "disregard", given: [0,1,2],
            why: "<i>disregard</i> = ignore deliberately." }
        ] },

      /* ---------------- 3 Talk it over ---------------- */
      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 1,
        prompt: "Look at the graph and read the note. Then answer the question.",
        note: { kind: "reader", body: "<p>Match each line to the key before you read any value off the chart. Then read the axis labels. Only then look at the shape.</p>" },
        chart: {
          kind: "line", title: "What is left after two weeks",
          sub: "Forty facts, four hours of study, split two ways",
          unit: "%", xlabel: "Days after studying", ymax: 100,
          x: [1, 2, 3, 5, 7, 10, 14],
          series: [
            { name: "self-testing", v: [88, 82, 78, 73, 70, 66, 63] },
            { name: "re-reading",   v: [92, 74, 62, 48, 39, 30, 24] }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Day", "Self-testing", "Re-reading"],
          rows: [[1,88,92],[2,82,74],[3,78,62],[5,73,48],[7,70,39],[10,66,30],[14,63,24]]
        },
        items: [
          { q: "On day 1, re-reading is <i>ahead</i>. What does the chart show about that lead?",
            options: [
              { text: "It disappears within two days and then reverses.", correct: true,
                why: "Re-reading starts at 92 and self-testing at 88; by day 2 the order has already swapped. This is the chart's real argument, and it is the one the passage makes in words." },
              { text: "It holds for the whole fortnight.",
                why: "By day 14 re-reading is at 24 and self-testing at 63." },
              { text: "The chart does not show day 1.",
                why: "Day 1 is the first point on the horizontal axis." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Take one page of your own notes tonight. Turn it into six questions, close the page, and answer them. Bring the six questions to class.</p>" } }
    ]
  };
})();
