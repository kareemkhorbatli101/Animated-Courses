/* Unit 5 · Exploring Space — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u05-tw", unit: "u05", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write the message in four parts",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's writing strategy is one job per paragraph.",
        scenarioTitle: "The situation",
        scenario: "<p>Your group and another have been given the same dome slot on Tuesday, because yours was rebooked after Monday was clouded out and nobody checked. Your targets do not rise until after midnight. The technician manages the bookings.</p><p><b>Write to the technician.</b> Explain the clash, propose taking the second half, and ask him to confirm by Monday afternoon.</p>",
        to: "dome@university.edu", re: "Tuesday dome slot — double booking",
        placeholder: "Dear Mr Adeyemi,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing about…</i><i>What appears to have happened is…</i><i>Rather than…, we would like to…</i><i>Could you confirm by…?</i>" },
        checklist: [
          "Paragraph 1 says why I am writing.",
          "Paragraph 2 says what happened.",
          "Paragraph 3 proposes something specific.",
          "Paragraph 4 asks for one thing, with a deadline."
        ],
        model: "<p>Dear Mr Adeyemi,</p><p>I am writing about the dome slot our group has been given for Tuesday evening.</p><p>Our session was rebooked after Monday was clouded out, and it appears the second group's booking was never cleared, so both of us arrived this morning expecting the same slot.</p><p>Rather than split the night and lose two setups, we would like to take the second half and let the other group begin. Our targets do not rise until after midnight, so the later slot suits us better in any case.</p><p>Could you confirm that this is acceptable by Monday afternoon, so that both groups can plan?</p><p>Kind regards,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe something you have never done but would like to. Why has it not happened yet?",
        model: "<p>I have never observed a full night at a telescope. I have been to an observatory twice, but both visits were two hours and both were partly clouded out. It has not happened mainly because the sessions are booked months ahead and the good ones go to research groups rather than to students. I have already put my name down for the spring run, so I am hoping that changes.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to weigh two things.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Is it better to send people into space, or machines? Give your reasons.",
        model: "<p>For almost everything we have actually attempted, machines. They can wait decades, they carry far more instruments for the same mass, and losing one costs money rather than lives. But I would not say the question is settled, because we have only really tested it where machines were always going to win — long journeys and steady measurement. The one thing a person has is judgement on the spot, and we have barely tried that anywhere.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "Has the observing plan been submitted ____?", from: "Lesson 3",
            options: [
              { text: "yet", correct: true, why: "<i>Yet</i> goes at the end of a question or a negative." },
              { text: "already", why: "<i>Already</i> belongs before the participle, in a positive statement." },
              { text: "ever", why: "<i>Ever</i> asks about any time up to now, which is a different question." }
            ] },
          { q: "We ____ the dome for Tuesday.", from: "Lesson 3",
            options: [
              { text: "have already booked", correct: true, why: "<i>Already</i> between auxiliary and participle." },
              { text: "have booked yet", why: "<i>Yet</i> does not appear in positive statements." },
              { text: "already booked yet", why: "Two time adverbs, and the wrong tense." }
            ] },
          { q: "A spacecraft carrying no people is:", from: "Lesson 1",
            options: [
              { text: "uncrewed", correct: true, why: "<i>un + crewed</i>." },
              { text: "unstable", why: "That is about the orbit." },
              { text: "unexplored", why: "That describes a place, not a vehicle." }
            ] },
          { q: "The article says early catalogues were a sample of:", from: "Lesson 5",
            options: [
              { text: "what is convenient to detect.", correct: true, why: "Its exact phrase, and the pivot of the argument." },
              { text: "what exists.", why: "That is precisely what it says they were <i>not</i>." },
              { text: "the nearest stars.", why: "Distance from us is not the variable." }
            ] },
          { q: "You hear: “We'd have seen the transit if the cloud had cleared.” This means:", from: "Lesson 4",
            options: [
              { text: "the cloud did not clear and they did not see it.", correct: true, why: "A past counterfactual reverses both clauses." },
              { text: "the cloud cleared and they saw it.", why: "<i>We'd have</i> marks what did not happen." },
              { text: "they will see it next time.", why: "The sentence is about the past." }
            ] },
          { q: "Professor Haddad says the loss of spacecraft is acceptable because:", from: "On Campus",
            options: [
              { text: "nobody is aboard.", correct: true, why: "<i>precisely because nobody is aboard</i>." },
              { text: "they are cheap.", why: "Cost is not the reason she gives." },
              { text: "they can be replaced quickly.", why: "Replacement is never mentioned." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences why the first planets found were the strangest, and what that tells you about any catalogue.</p>" } }
    ]
  };
})();
