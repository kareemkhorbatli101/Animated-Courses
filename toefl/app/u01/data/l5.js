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


  /* The second academic passage. Same band, same ceiling, different argument:
     the first is about HOW you study, this one about WHEN. */
  var PASSAGE2 = {
    masthead: "WHY THE GAP MATTERS",
    icon: "",
    every: 1,
    blocks: [
      { h: "Two ways to spend four hours", lines: [
        "Consider two students who each devote four hours to the same chapter before an examination.",
        "The first completes those four hours on a single evening; the second distributes them across four separate evenings within a fortnight.",
        "Although the total investment is identical, the second student will almost certainly retain more, and the difference is frequently substantial."
      ] },
      { h: "What forgetting contributes", lines: [
        "The mechanism is counterintuitive, because it depends upon forgetting rather than upon preventing it.",
        "During the interval between sessions a proportion of the material becomes temporarily inaccessible, and the following session therefore demands genuine reconstruction rather than mere recognition.",
        "Reconstruction is effortful, and effortful processing is what durable memory is assembled from."
      ] },
      { h: "A practical consequence", lines: [
        "The implication for a revision timetable is uncomfortable but straightforward.",
        "A schedule that concentrates a subject into one long block feels disciplined and delivers less; a schedule that returns to the same subject briefly on several occasions feels scattered and delivers more."
      ] }
    ],
    notes: ["interval: the gap between two study sessions, which this article argues is doing work"],
    source: "Illustrative summary of the distributed-practice literature, written for this book"
  };

  /* The second everyday text. Read in Daily Life sits at 15-50 words. */
  var NOTICE2 = {
    masthead: "DROP-IN: CHANGE OF ROOM",
    mastColor: "blue",
    every: 1,
    blocks: [{ lines: [
      "The Thursday drop-in moves to Library B-118 from next week.",
      "Bring the six questions you wrote, not the notes you wrote them from.",
      "We stop at 5:30 sharp.",
      "The 6:00 overflow session has been cancelled."
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
        carry: "1c",
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
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
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
        carry: "1c",
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


      { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>Every paragraph contains sentences doing different jobs: stating, supporting, conceding, recommending. The 2026 reading items are written on exactly this distinction, and an inference item is usually asking which job a sentence was doing.</p>" },
        items: [
          { prompt: "Which sentence states the finding, rather than the method?",
            text: "Two groups were given the same passage to study. One group read it four times over; the other read it once and then recalled it three times from memory. A week afterwards the recall group remembered half again as much. The re-reading group had been confident in advance that they would do better.",
            answer: "A week afterwards the recall group remembered half again as much.",
            why: "The sentences around it describe what was done and what people believed; only this one reports what came out." },
          { prompt: "Which sentence concedes a limitation?",
            text: "Spaced practice outperforms massed practice in almost every published study. The advantage holds across ages, subjects and levels of prior knowledge. It is smaller, however, when the test follows within a day of the learning. Teachers who see only short-term gains may therefore underrate the method.",
            answer: "It is smaller, however, when the test follows within a day of the learning.",
            why: "<i>However</i> plus a narrowed condition is the standard shape of a concession in academic prose." },
          { prompt: "Which sentence gives the author's recommendation?",
            text: "Highlighting is the most popular study technique and among the least effective. It marks what looks important while asking nothing at all of memory. Students should replace it with a question written in the margin. The habit is hard to break because it so closely resembles work.",
            answer: "Students should replace it with a question written in the margin.",
            why: "<i>Should</i> plus an action is a recommendation. The sentences on either side describe and explain, which is not the same thing." }
        ] },

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
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on when to study rather than how. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>This article and the first one agree, but they are not making the same claim. Hold both: one is about the activity, the other about its timing. Items that mix them up are the commonest way to lose marks on a paired reading.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The same hours of study produce more when they are spread out.", correct: true,
                why: "The first paragraph sets up equal totals; the rest explains why the distributed total wins." },
              { text: "Four hours of study is not enough before an examination.",
                why: "The article never argues about how many hours are needed; it holds the hours constant on purpose." },
              { text: "Students should avoid forgetting between sessions.",
                why: "The second paragraph argues the reverse: the forgetting is doing the work." }
            ] },
          { q: "What do the two students in the first paragraph have in common?",
            options: [
              { text: "The chapter and the number of hours.", correct: true,
                why: "<i>Each devote four hours to the same chapter</i> — holding both constant is what makes the comparison mean anything." },
              { text: "The number of evenings they study.",
                why: "That is the one thing deliberately made different: one evening against four." },
              { text: "Their examination result.",
                why: "The paragraph ends by saying the results differ, often substantially." }
            ] },
          { q: "In the second paragraph, <i>it</i> in “rather than upon preventing it” refers to:",
            options: [
              { text: "forgetting", correct: true,
                why: "The sentence contrasts two things one might depend upon, and both halves take the same object: depending on forgetting, not on preventing forgetting." },
              { text: "the mechanism",
                why: "The mechanism is the subject of the sentence; it cannot also be the thing being prevented." },
              { text: "the interval between sessions",
                why: "The interval appears in the next sentence, after this pronoun." }
            ] },
          { q: "What would this author most likely say about a timetable that gives each subject one whole day?",
            options: [
              { text: "It will feel organised and leave less behind than it should.", correct: true,
                why: "The last sentence says exactly this about block schedules, in the author's own words: disciplined, and delivering less." },
              { text: "It is the best way to cover a long syllabus.",
                why: "Coverage is never the article's measure; retention is." },
              { text: "It should be replaced by longer blocks.",
                why: "Longer blocks are more of what the article argues against." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>A wrong paraphrase almost never changes a word you do not know. It changes a relationship: a cause becomes a result, a hedge becomes a certainty, a part becomes the whole. Check the joins, not the vocabulary.</p>" },
        items: [
          { source: "Although the total investment is identical, the second student will almost certainly retain more.",
            options: [
              { text: "Both students put in the same hours, and the one who spread them out will very probably remember more.", correct: true,
                why: "Keeps the concession, the equal totals and the hedge <i>almost certainly</i>." },
              { text: "The second student puts in more hours and therefore remembers more.",
                why: "Breaks the premise the whole comparison rests on: the totals are equal." },
              { text: "Both students remember the same amount, although they studied differently.",
                why: "Reverses the finding." },
              { text: "The second student will certainly remember more.",
                why: "Drops <i>almost</i>. Turning a hedge into a certainty is the commonest wrong answer on this item type." }
            ] },
          { source: "That growing ease is routinely mistaken for growing knowledge.",
            options: [
              { text: "People regularly take the feeling that something has got easier as a sign that they have learnt it.", correct: true,
                why: "Keeps <i>routinely</i>, keeps the mistaking, and keeps which thing is mistaken for which." },
              { text: "Knowledge grows as the material becomes easier.",
                why: "States as fact the very thing the sentence calls a mistake." },
              { text: "Students rarely confuse ease with knowledge.",
                why: "<i>Routinely</i> means often, not rarely." },
              { text: "Growing knowledge makes the material feel easier.",
                why: "Reverses the direction. Plausible in itself, which is what makes it a good distractor." }
            ] },
          { source: "A schedule that concentrates a subject into one long block feels disciplined and delivers less.",
            options: [
              { text: "Blocking a subject into a single long session seems rigorous but produces a poorer result.", correct: true,
                why: "Keeps the contrast between how it feels and what it produces." },
              { text: "A long block is undisciplined and produces a poorer result.",
                why: "The sentence says it <i>feels</i> disciplined, which is the opposite of calling it undisciplined." },
              { text: "A disciplined schedule delivers more than a scattered one.",
                why: "Reverses the claim, and is what most readers expect to be true." },
              { text: "Long blocks deliver less because students lose concentration.",
                why: "Adds a cause the sentence does not give. A paraphrase may not explain." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "The drop-in from 1D has sent a follow-up. Read it.",
        text: NOTICE2,
        items: [
          { q: "Where is the session from next week?",
            options: [
              { text: "Library B-118.", correct: true, why: "Line 1 gives the new room." },
              { text: "Library B-214.", why: "That was the old room, in the first card." },
              { text: "The card does not say.", why: "It names the room in its first line." }
            ] },
          { q: "What should you bring?",
            options: [
              { text: "Your six questions.", correct: true,
                why: "Line 2 asks for the questions and explicitly rules out the notes they came from." },
              { text: "Your notes.", why: "Line 2 says <i>not the notes</i>." },
              { text: "Both the questions and the notes.", why: "The <i>not</i> in line 2 excludes the notes." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b> where you found it.",
        items: [
          { stem: "The drop-in has changed room.", answer: "T", line: 1,
            why: "Line 1: it <i>moves to Library B-118</i>." },
          { stem: "There is still a six o'clock session for people who arrive late.", answer: "F", line: 4,
            why: "Line 4 says the 6:00 overflow session has been cancelled." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "Both articles, both cards, one instruction.",
        text: { blocks: [{ lines: [
          "<b>How</b> — close the book and recall, rather than read again.",
          "<b>When</b> — four short evenings, rather than one long one.",
          "<b>What to bring</b> — the questions, not the pages they came from."
        ] }] },
        closer: { kind: "life",
          body: "<p>Take one page of your own notes tonight. Turn it into six questions, close the page, and answer them. Do it again on Thursday, and bring the six questions to class.</p>" } }
    ]
  };
})();
