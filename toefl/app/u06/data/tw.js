/* Unit 6 · Food, Energy and the Body — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u06-tw", unit: "u06", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and report a failed run in order",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's writing strategy is sequencing — mark every stage.",
        scenarioTitle: "The situation",
        scenario: "<p>Your enzyme assay failed. You added the enzyme before the water bath reached thirty-seven degrees, which denatured it, and you only noticed after twelve minutes when the mixture had not cleared. There is enough reagent for one more run, but not this week.</p><p><b>Write to the demonstrator.</b> Report what happened in order, say what you think went wrong, and ask whether you may repeat the run next week.</p>",
        to: "d.okafor@university.edu", re: "Enzyme assay — failed run, request to repeat",
        placeholder: "Dear Dan,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing to report…</i><i>First… Once… At this point…</i><i>I think what went wrong is…</i><i>Would it be possible to…?</i>" },
        checklist: [
          "I said why I was writing in the first sentence.",
          "I described the stages <b>in order</b>, and marked them.",
          "I said what I think went wrong, without guessing wildly.",
          "I made one specific request."
        ],
        model: "<p>Dear Dan,</p><p>I am writing to report that our enzyme assay failed this morning, and to ask whether we may repeat it next week.</p><p>First, we set the bath to thirty-seven and added the sample. Once it was in, we added the enzyme straight away rather than waiting for the bath to come up to temperature. At this point the mixture should have begun to clear; after twelve minutes it had not.</p><p>I think the enzyme was denatured by being warmed from cold along with the sample. We have enough reagent for one further run, but not until next week.</p><p>Would it be possible to book a bath for Tuesday?</p><p>Kind regards,<br>Tomás Ferreira</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a process you know well, step by step. Make the order clear.",
        model: "<p>I will describe an enzyme assay. First you set the water bath to thirty-seven degrees and let it stabilise, which takes a few minutes. Once it is at temperature, you put the sample in and let it equilibrate. Only then do you add the enzyme and start the timer. At this point the mixture should begin to clear within about five minutes; if it does not, the enzyme has probably been denatured and you have to start again. Finally you take readings every minute for ten minutes and plot them against time.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking for an opinion.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should food packaging give more information than it does, or less? Why?",
        model: "<p>Differently rather than more. A single calorie figure measures heat released by burning the food, which is not what happens in a body, and printing it in large bold type suggests a precision the method does not have. I would keep the number, because it lets you compare two packets, but I would present it as approximate. Adding more figures would not help — most people are making a quick comparison in a shop, not conducting an analysis.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "The enzyme breaks ____ almost immediately.", from: "Lesson 3",
            options: [
              { text: "it down", correct: true, why: "A pronoun object must split a separable phrasal verb." },
              { text: "down it", why: "Not possible with a pronoun." },
              { text: "down of it", why: "No such pattern." }
            ] },
          { q: "We ____ the method before we started.", from: "Lesson 3",
            options: [
              { text: "went over", correct: true, why: "<i>Go over</i> is inseparable, so the object follows the whole verb." },
              { text: "went it over", why: "Inseparable verbs never split." },
              { text: "went over of", why: "No such pattern." }
            ] },
          { q: "Those readings are ____.", from: "Lesson 3",
            options: [
              { text: "ours", correct: true, why: "A possessive pronoun: no noun after it, no apostrophe." },
              { text: "our's", why: "Possessive pronouns never take an apostrophe." },
              { text: "ours readings", why: "<i>Ours</i> cannot be followed by a noun; <i>our readings</i> would be correct." }
            ] },
          { q: "The article says the number on a packet measures:", from: "Lesson 5",
            options: [
              { text: "heat released when the food is burned in a laboratory.", correct: true, why: "Its exact claim, and the pivot of the piece." },
              { text: "energy absorbed by the body.", why: "That is precisely what it says the figure is <i>not</i>." },
              { text: "the mass of each nutrient class.", why: "Mass is not what a calorie measures." }
            ] },
          { q: "You hear: “If we'd checked the bath, we wouldn't have lost the run.” This means:", from: "Lesson 4",
            options: [
              { text: "they did not check it, and they lost the run.", correct: true, why: "A past counterfactual reverses both clauses." },
              { text: "they checked it and kept the run.", why: "<i>We'd have</i> marks what did not happen." },
              { text: "the run is still going.", why: "The sentence is about a finished run." }
            ] },
          { q: "Professor Haddad says that when intake falls, the body:", from: "On Campus",
            options: [
              { text: "quietly reduces what it spends.", correct: true, why: "Her central practical point, with three named mechanisms." },
              { text: "draws the whole difference from stored fat.", why: "That is the assumption she corrects." },
              { text: "raises body temperature to compensate.", why: "She says it lowers it slightly." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Explain in two sentences why a calorie figure is accurate and still misleading.</p>" } }
    ]
  };
})();
