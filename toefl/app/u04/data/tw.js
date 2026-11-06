/* Unit 4 · Migration and the Human Past — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u04-tw", unit: "u04", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and ask properly for what you need",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write", "time"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation, and a harder one: you are reporting a problem in work that is not yours.",
        scenarioTitle: "The situation",
        scenario: "<p>While checking the dating appendix of a departmental report you notice that four shell dates are listed with no marine correction stated, and that three of them are used in the conclusion. The report goes to the funder in a fortnight. Dr Okonkwo edited it.</p><p><b>Write to Dr Okonkwo.</b> Say what you found, use a colon correctly, say what you think should happen, and say what you will do if you hear nothing.</p>",
        to: "r.okonkwo@university.edu", re: "Dating appendix — four shell dates, correction not stated",
        placeholder: "Dear Dr Okonkwo,…",
        minWords: 60,
        note: { kind: "help",
                body: "<p>Report the absence, not the error. You do not know that the correction was omitted — only that the appendix does not say. The sentence <i>the appendix does not state whether…</i> is both more accurate and easier to answer.</p><i>I am writing about…</i><i>The appendix lists four dates: …</i><i>If I do not hear by Friday I will…</i>" },
        checklist: [
          "My subject line names the appendix and the problem.",
          "I used a colon, with a complete sentence in front of it.",
          "I said what the appendix does not state, rather than what was done wrong.",
          "I said why it matters — three of them are in the conclusion.",
          "I said what I will do if I hear nothing."
        ],
        model: "<p>Dear Dr Okonkwo,</p>" +
               "<p>I am writing about the dating appendix, which I was checking against the sample list. Four of the shell determinations are given without any statement of the marine correction: numbers 7, 9, 14 and 15. Three of those four are cited in the conclusion.</p>" +
               "<p>I should say that I do not know whether the correction was applied; only that the appendix does not record it either way. Could the sample sheets be checked before the report goes out? If I have not heard by Friday I will ask the laboratory directly, since they will hold the submission records.</p>" +
               "<p>Kind regards,<br>Tomás Beltrán</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you had to ask someone for help. How did you ask, and how did it go?",
        model: "<p>Last term I could not find a folder in an archive catalogue. I had already searched the catalogue and the index, so when I went to the desk I said that first, and then asked where I should look rather than asking what the answer was. The archivist told me immediately that it was held in a restricted series and had to be ordered a day ahead. Saying what I had already tried turned a thirty-second exchange into a useful one.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to take a position.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should a field change its mind quickly when new evidence appears, or slowly? Why?",
        model: "<p>Slowly, but not evenly slowly. A claim that overturns a whole framework should face a harder test than one that fits, because otherwise the framework is not doing any work at all. What I would object to is applying that standard in only one direction — examining the inconvenient evidence hard and letting the convenient evidence through. The delay is defensible; the asymmetry is not.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about a time you were wrong.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you defended a position longer than you should have. What finally changed your mind?",
        model: "<p>I argued for most of a term that a set of dates in a report were unusable, because two of them were obviously too old. What I had not done was read the sample descriptions, and when I finally did, both of the odd ones turned out to be driftwood. The dates were fine; my inference about them was not. What changed my mind was not somebody arguing with me — it was being asked, quite mildly, what the samples actually were, and realising I did not know.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to weigh a public good against a private one.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should archaeological sites be excavated now, or left for methods that do not exist yet? Give a reason.",
        model: "<p>Mostly left, with a clear exception. Excavation destroys the thing it studies: once a layer is lifted, the only record of it is the record you made, and every decade adds a question you did not know to ask. So the default should be to leave. The exception is a site that is going to be lost anyway, to a road or to the sea, and there the argument reverses completely, because the choice is not between now and later but between a record and nothing.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "evidence", "cause"],
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
            ] },
          { q: "<b>inter-</b> and <b>intra-</b>: which word means <i>within one group</i>?", from: "Lesson 1",
            options: [
              { text: "intragroup", correct: true, why: "<i>intra-</i> within. A single vowel separates it from its opposite." },
              { text: "intergroup", why: "<i>inter-</i> between: conflict between two groups." },
              { text: "interpersonal", why: "between people, which is <i>inter-</i> again." }
            ] },
          { q: "This is the first time I ____ a trench recorded this well.", from: "Lesson 3",
            options: [
              { text: "have seen", correct: true, why: "<i>The first time</i> counts up to now, so the present perfect follows it." },
              { text: "see", why: "The present simple cannot count occasions up to now." },
              { text: "saw", why: "The simple past would need a finished time, and there is none here." }
            ] },
          { q: "Which word has the <b>voiced</b> th?", from: "Lesson 4",
            options: [
              { text: "breathe", correct: true, why: "The verb. The <i>e</i> both lengthens the vowel and voices the consonant." },
              { text: "breath", why: "The noun, with a short vowel and a voiceless ending." },
              { text: "thin", why: "Voiceless: a content word, and no grammar-word clue." }
            ] },
          { q: "A laboratory date of eleven thousand years is a date of:", from: "On Campus",
            options: [
              { text: "the sample.", correct: true, why: "Not the fire, not the camp, not the people — her answer to her own question." },
              { text: "the occupation of the site.", why: "That is the inference, and it is the listener's to make." },
              { text: "the layer the sample came from.", why: "The layer may be older or younger than what is in it." }
            ] },
          { q: "The delay had two causes ____ the corridor dates and the marine correction.", from: "Lesson 2",
            options: [
              { text: ":", correct: true, why: "<i>The delay had two causes</i> is a complete sentence, so a colon may introduce the list." },
              { text: "by:", why: "<i>Caused by</i> is still waiting for its object; a colon cannot stand in the middle of the grammar." },
              { text: ", :", why: "A comma and a colon cannot both introduce the same list." }
            ] },
          { q: "According to Lesson 5's second article, the clue to a questionable date lies in:", from: "Lesson 5",
            options: [
              { text: "what the sample was and where it lay.", correct: true,
                why: "The last sentence puts it there, and adds <i>not in the date</i>." },
              { text: "the stated uncertainty.", why: "That describes the measurement, which is not where the problem is." },
              { text: "the number of determinations.", why: "Not discussed in that article." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "evidence", "claim"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight sentences about the same site. Sort them by whether they are reporting evidence or making an assertion — the distinction Lesson 1 opened with and On Campus closed on.",
        note: { kind: "reader",
                body: "<p>An assertion is not a lie. It is a claim with the part that would let you check it left out, and most of them are true. The habit worth building is noticing which kind you are reading, not deciding which to believe.</p>" },
        bins: [
          { id: "evidence",  label: "Reports evidence", hint: "you could check it" },
          { id: "assertion", label: "Asserts",          hint: "the checkable part is missing" }
        ],
        items: [
          { text: "Fourteen samples were submitted from the lowest layer", bin: "evidence",
            why: "a number and a provenance: both checkable." },
          { text: "Twelve returned dates within two centuries of each other", bin: "evidence",
            why: "a result with its spread stated." },
          { text: "The two outliers were fragments of reused wood", bin: "evidence",
            why: "says what the samples were, which is exactly what Lesson 5's second article asks for." },
          { text: "The marine correction of 410 years was applied to samples 7 and 9", bin: "evidence",
            why: "the correction, its size and which samples it touched. This is the sentence On Campus asks for." },
          { text: "The site is clearly the earliest on the coast", bin: "assertion",
            why: "<i>clearly</i> is doing the work of the evidence. Earliest compared with what, dated how?" },
          { text: "These dates are consistent with an early coastal route", bin: "assertion",
            why: "the trickiest one. <i>Consistent with</i> is true of a great many routes, and it sounds like a finding." },
          { text: "The corridor model can now be discarded", bin: "assertion",
            why: "a conclusion with no evidence attached. It may be right; the sentence does not let you tell." },
          { text: "Radiocarbon confirms human presence at eleven thousand years", bin: "assertion",
            why: "the subtlest. Radiocarbon dates the sample; <i>human presence</i> is the inference, and the sentence hides the join." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences why the corridor account was abandoned, and why it took twenty years.</p>" } }
    ]
  };
})();
