/* Unit 2 · Climate and Prediction — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u02-tw", unit: "u02", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write the request properly",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email.",
        scenarioTitle: "The situation",
        scenario: "<p>The estuary field trip was cut from three sites to two, and your group's report was meant to compare all three. Dr Okonkwo set the assignment.</p><p><b>Write to Dr Okonkwo.</b> Explain what happened, say what you propose to do instead, and ask whether that is acceptable.</p>",
        to: "r.okonkwo@university.edu", re: "Estuary report — site three cancelled",
        placeholder: "Dear Dr Okonkwo,…",
        minWords: 60,
        note: { kind: "help",
                body: "<i>I am writing to let you know that…</i><i>As a result, we propose to…</i><i>Would that be acceptable?</i><i>Please let me know if you would prefer…</i>" },
        checklist: [
          "I said why I was writing in the first sentence.",
          "I explained the problem without blaming anyone.",
          "I proposed a specific alternative.",
          "I asked a question the reader can answer yes or no."
        ],
        model: "<p>Dear Dr Okonkwo,</p><p>I am writing to let you know that site three was cancelled on Friday, as the path was still flooded, so our group was only able to sample sites one and two.</p><p>As a result, we propose to compare the two estuary sites in detail and to use the published figures for site three, clearly marked as secondary data. Would that be acceptable, or would you prefer us to wait for a second visit?</p><p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a plan you made that had to change. What did you do instead?",
        model: "<p>We had planned to sample three sites on an estuary field trip, and the day before, one of them flooded. We could either go anyway and rush, or drop a site. We decided to do two sites properly rather than three badly, and to use published figures for the third, clearly marked as somebody else's data. It made the report weaker in one way and more honest in another.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking for a prediction and a reason.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Do you think people will change their behaviour because of climate reports? Why, or why not?",
        model: "<p>Partly, but not mainly because of the reports. I think reports change what governments can be held to, and it is the rules that follow which change what people do. On their own, numbers are easy to set aside, especially when they come as a range and anyone can hear the comfortable end of it. So I would predict slow change driven by policy rather than quick change driven by information.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "We ____ collect the samples on Thursday — we decided last week.", from: "Lesson 3",
            options: [
              { text: "are going to", correct: true, why: "A decision already taken takes <i>be going to</i>." },
              { text: "will", why: "<i>Will</i> suits a prediction or a decision made as you speak." },
              { text: "would rather", why: "That is for a preference between options." }
            ] },
          { q: "I'd rather ____ on Friday.", from: "Lesson 3",
            options: [
              { text: "go", correct: true, why: "<i>would rather</i> takes the bare infinitive — no <i>to</i>." },
              { text: "to go", why: "<i>would like to go</i>, but <i>would rather go</i>." },
              { text: "going", why: "Not a form <i>would rather</i> takes." }
            ] },
          { q: "A result the authors themselves are not confident in is:", from: "Lesson 1",
            options: [
              { text: "doubtful", correct: true, why: "<i>doubt + ful</i>." },
              { text: "harmful", why: "That is about damage, not confidence." },
              { text: "powerful", why: "That is about explanatory reach." }
            ] },
          { q: "The article says a range means:", from: "Lesson 5",
            options: [
              { text: "the span across scenarios and across models.", correct: true,
                why: "Those are the two sources it names." },
              { text: "that every value in it is equally likely.", why: "The final paragraph rules this out explicitly." },
              { text: "that the science is unsettled.", why: "The article argues the range is a statement of knowledge." }
            ] },
          { q: "You hear: “We'd have got there in time if we'd left at seven.” The speaker:", from: "Lesson 4",
            options: [
              { text: "did not leave at seven, and was late.", correct: true, why: "A counterfactual: both clauses describe what did not happen." },
              { text: "left at seven and arrived on time.", why: "<i>We'd have</i> marks the opposite." },
              { text: "is planning to leave at seven.", why: "The sentence is about the past." }
            ] },
          { q: "Two models given identical emissions still differ. Professor Haddad calls this:", from: "On Campus",
            options: [
              { text: "the interesting kind of disagreement.", correct: true,
                why: "She divides disagreements in two and says this one tells you about the physics." },
              { text: "a sign the models are unreliable.", why: "She says that of neither kind." },
              { text: "a scenario difference.", why: "Identical emissions means the scenario is <i>not</i> the cause." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say aloud why a climate report gives a range, naming both sources of width. Two sentences.</p>" } }
    ]
  };
})();
