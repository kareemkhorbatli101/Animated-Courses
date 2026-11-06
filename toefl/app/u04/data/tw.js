/* Unit 4 · Migration and the Human Past — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u04-tw", unit: "u04", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and ask properly for what you need",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's writing strategy is the colon — use one, correctly.",
        scenarioTitle: "The situation",
        scenario: "<p>The archive session on Thursday has been cut from three hours to two. You need the coastal survey folder, which must be ordered a day ahead and requires a supervisor's name. You have not ordered it.</p><p><b>Write to the archivist.</b> Request the folder for Friday, give what the form needs, and say why Thursday will no longer work.</p>",
        to: "archives@university.edu", re: "Coastal survey folder — request for Friday",
        placeholder: "Dear Archivist,…",
        minWords: 60,
        note: { kind: "help",
                body: "<i>I am writing to request…</i><i>The details are as follows:</i><i>Unfortunately the session has been shortened, so…</i>" },
        checklist: [
          "I said what I was asking for in the first sentence.",
          "I used a colon correctly, with a complete sentence before it.",
          "I gave every detail the form requires.",
          "I explained the change of day without blaming anyone."
        ],
        model: "<p>Dear Archivist,</p><p>I am writing to request the coastal survey folder from the restricted series for Friday morning. The details are as follows: Priya Raman, MSc Archaeology, supervisor Dr R. Okonkwo.</p><p>Our Thursday session has been shortened from three hours to two, so I would not be able to use the folder properly on that day. Friday would give me the time the material needs.</p><p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you had to ask someone for help. How did you ask, and how did it go?",
        model: "<p>Last term I could not find a folder in an archive catalogue. I had already searched the catalogue and the index, so when I went to the desk I said that first, and then asked where I should look rather than asking what the answer was. The archivist told me immediately that it was held in a restricted series and had to be ordered a day ahead. Saying what I had already tried turned a thirty-second exchange into a useful one.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to take a position.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should a field change its mind quickly when new evidence appears, or slowly? Why?",
        model: "<p>Slowly, but not evenly slowly. A claim that overturns a whole framework should face a harder test than one that fits, because otherwise the framework is not doing any work at all. What I would object to is applying that standard in only one direction — examining the inconvenient evidence hard and letting the convenient evidence through. The delay is defensible; the asymmetry is not.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "Archaeologists have known about these sites ____ the nineteen seventies.", from: "Lesson 3",
            options: [
              { text: "since", correct: true, why: "<i>since</i> + a point in time." },
              { text: "for", why: "<i>for</i> takes a length of time, not a date." },
              { text: "during", why: "<i>During</i> does not run up to the present." }
            ] },
          { q: "The trench ____ in 1976.", from: "Lesson 3",
            options: [
              { text: "was opened", correct: true, why: "A stated finished time takes the simple past, not the present perfect." },
              { text: "has been opened", why: "<i>in 1976</i> closes the period and blocks the present perfect." },
              { text: "has opened", why: "Wrong voice as well as wrong tense." }
            ] },
          { q: "Which uses the colon correctly?", from: "Lesson 2",
            options: [
              { text: "The delay had two causes: the dates and the correction.", correct: true,
                why: "A complete sentence before the colon, a list after it." },
              { text: "The delay was caused by: the dates and the correction.",
                why: "<i>caused by</i> is still waiting for its object." },
              { text: "Two causes: the delay had.", why: "The colon is facing the wrong way." }
            ] },
          { q: "<i>Inter-</i> means:", from: "Lesson 1",
            options: [
              { text: "between or among", correct: true, why: "<i>interval, interpret, interdisciplinary</i>." },
              { text: "within", why: "That is <i>intra-</i>." },
              { text: "against", why: "That is <i>anti-</i> or <i>counter-</i>." }
            ] },
          { q: "The article calls the evidence “each individually arguable and collectively decisive”. This means:", from: "Lesson 5",
            options: [
              { text: "no one finding settles it, but together they do.", correct: true,
                why: "The two adjectives are deliberately opposed." },
              { text: "the findings contradict one another.", why: "<i>Decisive</i> rules that out." },
              { text: "the matter is still open.", why: "<i>Decisive</i> says it is not." }
            ] },
          { q: "Professor Haddad says a date without its stated correction is:", from: "On Campus",
            options: [
              { text: "an assertion rather than a measurement.", correct: true,
                why: "Her exact contrast, and the pivot of the talk's ending." },
              { text: "always wrong.", why: "It may be right; it is simply uncheckable." },
              { text: "unusable in any form.", why: "She asks for correction, not for discarding." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences why the corridor account was abandoned, and why it took twenty years.</p>" } }
    ]
  };
})();
