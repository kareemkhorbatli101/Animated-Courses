/* Unit 2 · Climate and Prediction — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u02-tw", unit: "u02", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write the request properly",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
        modelJobs: [
          { job: "said why I was writing in the first sentence",
            text: "I am writing to let you know that site three was cancelled on Friday, as the path was still flooded, so our group was only able to sample sites one and two.",
            why: "it is the first sentence of the message, where a reader looks for the point" },
          { job: "explained the problem without blaming anyone",
            text: "As a result, we propose to compare the two estuary sites in detail and to use the published figures for site three, clearly marked as secondary data.",
            why: "the model takes the jobs in the order the checklist lists them" },
          { job: "proposed a specific alternative",
            text: "Would that be acceptable, or would you prefer us to wait for a second visit?",
            why: "the model takes the jobs in the order the checklist lists them" },
        ],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        frames: [
          { frame: "We are going to ___ on ___.",
            why: "<i>Going to</i> for a decision already made, which is what a plan is." },
          { frame: "___ will probably ___, so ___.",
            why: "<i>Will</i> plus a hedge for what the evidence leads you to expect." },
          { frame: "Would it be possible to ___ if ___?",
            why: "A conditional request: the politest shape available for an awkward ask." },
        ],
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


      { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write"],
        modelJobs: [
          { job: "My first sentence names the clash",
            text: "I am writing because Tuesday's seminar at two clashes with the compulsory laboratory session for this module, which I understand cannot be moved.",
            why: "it is the first sentence of the message, where a reader looks for the point" },
          { job: "said what I will do anyway — the reading, the question",
            text: "I will do the eleven-page reading before Tuesday and send my question to Dr Vasquez by Monday evening, so that it can be raised in the session.",
            why: "it says what the writer will do regardless, which turns a request into a plan" },
          { job: "asked for one specific thing, not for an exemption in general",
            text: "Could I ask whether a recording or a set of notes will be available afterwards?",
            why: "a plain modal request, which is where politeness actually lives" },
          { job: "signed off in a way that matches the reader",
            text: "Kind regards, Priya Raman",
            why: "the sign-off matches the distance between writer and reader" },
        ],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,


        frames: [


          { frame: "We are going to ___ on ___.",


            why: "<i>Going to</i> for a decision already made, which is what a plan is." },


          { frame: "___ will probably ___, so ___.",


            why: "<i>Will</i> plus a hedge for what the evidence leads you to expect." },


          { frame: "Would it be possible to ___ if ___?",


            why: "A conditional request: the politest shape available for an awkward ask." },


        ],
        prompt: "A second situation. This one is about a clash you cannot resolve yourself.",
        scenarioTitle: "The situation",
        scenario: "<p>Next week's seminar has moved from Thursday to Tuesday at two, so that a visiting speaker can give it. You have a compulsory laboratory session at the same time, which cannot be moved.</p><p><b>Write to Professor Haddad.</b> Explain the clash, say what you will do about the reading and the question, and ask for one specific thing.</p>",
        to: "a.haddad@university.edu", re: "Tuesday seminar — clash with the lab session",
        placeholder: "Dear Professor Haddad,…",
        minWords: 60,
        note: { kind: "help",
                body: "<p>A message about a clash is easy to write badly, because the obvious shape is a complaint. Put the thing you will do before the thing you are asking for, and the message reads as a plan rather than a problem.</p><i>I am writing because…</i><i>I will still…</i><i>Could I ask whether…?</i>" },
        checklist: [
          "My first sentence names the clash.",
          "I said what I will do anyway — the reading, the question.",
          "I asked for one specific thing, not for an exemption in general.",
          "I did not ask anyone else's timetable to change.",
          "I signed off in a way that matches the reader."
        ],
        model: "<p>Dear Professor Haddad,</p>" +
               "<p>I am writing because Tuesday's seminar at two clashes with the compulsory laboratory session for this module, which I understand cannot be moved.</p>" +
               "<p>I will do the eleven-page reading before Tuesday and send my question to Dr Vasquez by Monday evening, so that it can be raised in the session. Could I ask whether a recording or a set of notes will be available afterwards?</p>" +
               "<p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a plan you made that had to change. What did you do instead?",
        model: "<p>We had planned to sample three sites on an estuary field trip, and the day before, one of them flooded. We could either go anyway and rush, or drop a site. We decided to do two sites properly rather than three badly, and to use published figures for the third, clearly marked as somebody else's data. It made the report weaker in one way and more honest in another.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking for a prediction and a reason.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Do you think people will change their behaviour because of climate reports? Why, or why not?",
        model: "<p>Partly, but not mainly because of the reports. I think reports change what governments can be held to, and it is the rules that follow which change what people do. On their own, numbers are easy to set aside, especially when they come as a range and anyone can hear the comfortable end of it. So I would predict slow change driven by policy rather than quick change driven by information.</p>" },


      { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about disagreement rather than planning.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you disagreed with someone in a group. How did you say it, and what happened?",
        model: "<p>We were deciding what to put on a poster, and one person wanted a single headline figure instead of the range. I did not want to say flatly that it was wrong, so I started with the part I agreed with: that a range is harder to read quickly. Then I separated the two things — readability, and what we would be claiming. Once it was two questions rather than one, we found a third option, which was to print the range and mark the likeliest part of it.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to weigh two goods against each other.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should scientists give simple answers to the public, even when the real answer is complicated? Why?",
        model: "<p>I would say yes to simple and no to simplified. A simple answer uses short words and keeps the hedge: <i>probably more than two degrees, and we are not sure how much more</i>. A simplified answer drops the hedge to get a headline, and the cost arrives later, when the number turns out to be at the other end and the audience concludes that nobody knew anything. So my test would be whether the simple version would still be true if the uncertain part turned out badly.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Twelve items, interleaved across the whole unit.",
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
          { recall: "From Lesson 5: the article on projections and scenarios, and why climate results are published as a span rather than a figure.", q: "The article says a range means:", from: "Lesson 5",
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
            ] },
          { q: "The shuttle to the field station ____ at nine fourteen.", from: "Lesson 3",
            options: [
              { text: "leaves", correct: true, why: "A timetable takes the present simple, however far ahead it is." },
              { text: "is leaving", why: "Possible for an arrangement, but a published timetable is treated as a present fact." },
              { text: "will leave", why: "Not wrong, but it sounds like a guess about something that is fixed." }
            ] },
          { q: "Which of these is a <b>noun</b>, not an adjective?", from: "Lesson 1",
            options: [
              { text: "a spoonful", correct: true, why: "<i>-ful</i> on a container gives a countable noun: <i>two spoonfuls</i>." },
              { text: "meaningful", why: "An adjective: <i>a meaningful difference</i>." },
              { text: "doubtful", why: "An adjective: <i>she was doubtful</i>." }
            ] },
          { q: "Which word is <b>voiced</b> at the end?", from: "Lesson 4",
            options: [
              { text: "badge", correct: true, why: "/dʒ/ — and the vowel in front of it is noticeably longer because of it." },
              { text: "batch", why: "/tʃ/, voiceless, with the vowel clipped short." },
              { text: "etch", why: "/tʃ/, voiceless." }
            ] },
          { q: "A report says a result is <i>likely</i>. The defined threshold is:", from: "On Campus",
            options: [
              { text: "above two thirds", correct: true, why: "Sixty-six per cent, printed in a table at the front of the report." },
              { text: "above a half", why: "That is <i>more likely than not</i>." },
              { text: "above ninety per cent", why: "That is <i>very likely</i>." }
            ] },
          { q: "According to Lesson 5's second article, ordering sectors by size:", from: "Lesson 5",
            options: [
              { text: "ranks them by a quantity nobody disputes and says nothing about difficulty.", correct: true,
                why: "That is the article's whole argument, and it does not claim the sizes are wrong." },
              { text: "shows which sector to tackle first.", why: "The inference the article is written to block." },
              { text: "gives figures that are disputed.", why: "It says the opposite." }
            ] },
          { q: "I am looking forward to ____ from you.", from: "Lesson 2",
            options: [
              { text: "hearing", correct: true, why: "<i>Look forward to</i> ends in a preposition, so the verb takes <i>-ing</i>." },
              { text: "hear", why: "The <i>to</i> here is not an infinitive marker, which is exactly what makes this one catch people." },
              { text: "heard", why: "No past form fits after a preposition." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "measurement", "evidence"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight sentences from this unit. Sort them by whether they report something measured or state what would follow under stated conditions.",
        note: { kind: "reader",
                body: "<p>This is the unit's single most useful habit. A sentence with <i>under this scenario</i>, <i>projected</i> or <i>if</i> is making a conditional claim, and quoting it without its condition changes what it says.</p>" },
        bins: [
          { id: "measured",    label: "Reports something measured or observed", hint: "already true" },
          { id: "conditional", label: "States what would follow if…",           hint: "true only under stated conditions" }
        ],
        items: [
          { text: "Average surface temperature has risen by about one degree", bin: "measured",
            why: "a present perfect about a completed measurement." },
          { text: "The Arctic has warmed roughly three times as fast", bin: "measured",
            why: "also measured, and the comparison is to the global figure in the previous card." },
          { text: "Renewables are the cheapest source of new electricity", bin: "measured",
            why: "a present fact about prices — though note <i>new</i>, which is itself a limit." },
          { text: "Most researchers regard the extremes as improbable", bin: "measured",
            why: "the trickiest one. It is a fact about what the field currently thinks, so it is reported rather than conditional." },
          { text: "Under the highest-emission scenario the figure rises three degrees", bin: "conditional",
            why: "<i>under … scenario</i> names the condition in the first three words." },
          { text: "Emissions are projected to peak before the end of the decade", bin: "conditional",
            why: "<i>projected</i> is the giveaway; a projection always has assumptions behind it." },
          { text: "If the river rises overnight the path will be under water", bin: "conditional",
            why: "a first conditional, and the plainest shape this distinction takes." },
          { text: "A model given these emissions warms by two point four degrees", bin: "conditional",
            why: "the condition is hidden in a participle: <i>given these emissions</i> is an <i>if</i> clause in disguise." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say aloud why a climate report gives a range, naming both sources of width. Two sentences.</p>" } }
    ]
  };
})();
