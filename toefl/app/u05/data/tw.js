/* Unit 5 · Exploring Space — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u05-tw", unit: "u05", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write the message in four parts",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        frames: [
          { frame: "Has ___ been ___ yet?",
            why: "<i>Yet</i> at the end, and only in questions and negatives." },
          { frame: "What if we ___? ___ anyway.",
            why: "<i>What if</i> opens a suggestion as a question rather than an instruction." },
          { frame: "Would it help if I ___?",
            why: "Attaches your own labour to the suggestion, which is what turns it into an offer." },
        ],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write", "claim"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,

              frames: [

                { frame: "Has ___ been ___ yet?",

                  why: "<i>Yet</i> at the end, and only in questions and negatives." },

                { frame: "What if we ___? ___ anyway.",

                  why: "<i>What if</i> opens a suggestion as a question rather than an instruction." },

                { frame: "Would it help if I ___?",

                  why: "Attaches your own labour to the suggestion, which is what turns it into an offer." },

              ],
        prompt: "A second situation. This one asks you to argue for less than you were offered.",
        scenarioTitle: "The situation",
        scenario: "<p>Your group has been offered four extra nights in March to make up for the three lost to cloud. Your targets are only observable for two of those four, and the other two would be spent pointing at a field nobody has asked about. Another group has been refused time altogether.</p><p><b>Write to the time allocation committee.</b> Accept two nights, say why the other two are no use to you, and say what you think should happen to them.</p>",
        to: "tac@university.edu", re: "March compensation nights — accepting two of four",
        placeholder: "Dear members of the committee,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>Giving time back is rare enough that it reads as a mistake unless you say why. Name the astronomical reason, not the generous one: <i>our targets are below the horizon</i> is checkable, and <i>we did not want to be greedy</i> is not.</p><i>We should like to accept…</i><i>The remaining two are of no use to us, because…</i><i>We would suggest that…</i>" },
        checklist: [
          "Paragraph 1 says what I am accepting.",
          "Paragraph 2 gives the astronomical reason the other two are useless to us.",
          "Paragraph 3 says what I think should happen to them.",
          "I did not claim credit for giving them back.",
          "I used the present perfect at least once, correctly."
        ],
        model: "<p>Dear members of the committee,</p>" +
               "<p>Thank you for the four compensation nights offered for March. We should like to accept the nights of the eighth and the ninth.</p>" +
               "<p>The remaining two are of no use to us: our field sets before eleven in the second half of March, so on the twenty-second and twenty-third we would have under an hour of usable dark time. We have already checked this against the ephemeris rather than assuming it.</p>" +
               "<p>We would suggest that the two nights go to the group whose November request was refused, if their targets are better placed. We are happy for our name not to be attached to that suggestion.</p>" +
               "<p>Kind regards,<br>Tomás Beltrán</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe something you have never done but would like to. Why has it not happened yet?",
        model: "<p>I have never observed a full night at a telescope. I have been to an observatory twice, but both visits were two hours and both were partly clouded out. It has not happened mainly because the sessions are booked months ahead and the good ones go to research groups rather than to students. I have already put my name down for the spring run, so I am hoping that changes.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to weigh two things.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Is it better to send people into space, or machines? Give your reasons.",
        model: "<p>For almost everything we have actually attempted, machines. They can wait decades, they carry far more instruments for the same mass, and losing one costs money rather than lives. But I would not say the question is settled, because we have only really tested it where machines were always going to win — long journeys and steady measurement. The one thing a person has is judgement on the spot, and we have barely tried that anywhere.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak", "comparison"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, asking about a time you reported something awkward.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you had to report a result that was less impressive than people were expecting. How did you do it?",
        model: "<p>We had been given eleven candidates and told, informally, that the group was hoping for ten detections. Four of them were strong and the rest were marginal. What I did in the end was report the four as detections and all eleven as candidates, with a sentence saying exactly what separated the two groups. The number at the top of the report was smaller than anybody wanted, but nobody could accuse us of hiding the other seven, and two of them have since been confirmed.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to judge a general practice.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should scientific results be announced as soon as they are found, or held until they are confirmed? Why?",
        model: "<p>Held, mostly, and the reason is asymmetry rather than caution. An announcement travels a long way and a retraction does not, so the cost of being early is paid by everyone who read the first version and never saw the second. The exception is anything that other people need in order to observe the same thing — a transient event, a passing object — where holding it means nobody can check you at all. So my rule would be: announce early if announcing lets others verify, and otherwise wait.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "evidence", "sample"],
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
            ] },
          { q: "Which use of <b>un-</b> reverses an action rather than negating a quality?", from: "Lesson 1",
            options: [
              { text: "unfold", correct: true, why: "The panel was folded first; <i>unfold</i> undoes that." },
              { text: "unstable", why: "You cannot <i>stable</i> something, so nothing is being undone." },
              { text: "unlikely", why: "An adjective: the quality is simply absent." }
            ] },
          { q: "Which sentence is correct?", from: "Lesson 3",
            options: [
              { text: "The probe was launched in two thousand and four.", correct: true,
                why: "A named year closes the window, so the simple past." },
              { text: "The probe has launched in two thousand and four.", why: "The present perfect cannot reach a closed window." },
              { text: "The probe has been launching in two thousand and four.", why: "Two errors: the tense and the aspect." }
            ] },
          { q: "You hear /aɪl/. The speaker said:", from: "Lesson 4",
            options: [
              { text: "I'll — a promise.", correct: true, why: "The /l/ is held. <i>I'd</i> ends in a released tap and <i>I'm</i> in a nasal." },
              { text: "I'd — a condition.", why: "That would end in /d/." },
              { text: "I'm — a state.", why: "That would end in /m/, with the lips closed." }
            ] },
          { q: "According to Lesson 5's second article, calling something a <i>candidate</i> is:", from: "Lesson 5",
            options: [
              { text: "a statement about which error the authors chose to risk.", correct: true,
                why: "The article rejects modesty as the explanation in the same sentence." },
              { text: "a sign the authors doubt the result.", why: "They may be privately confident, which the article says explicitly." },
              { text: "a requirement of the journal.", why: "No editorial rule appears in the text." }
            ] },
          { q: "Professor Haddad's three reasons for uncrewed missions are duration, mass and:", from: "On Campus",
            options: [
              { text: "risk.", correct: true, why: "The third, and the one she says people like least." },
              { text: "cost.", why: "Cost is implied by mass but is not one of her three headings." },
              { text: "distance.", why: "Distance is part of duration in her account, not a separate reason." }
            ] },
          { q: "Rather than ____ the night, we would like to take the second half.", from: "Lesson 2",
            options: [
              { text: "split", correct: true, why: "<i>Rather than</i> takes the bare infinitive." },
              { text: "to split", why: "<i>Rather than to</i> is possible in very formal writing and sounds wrong here." },
              { text: "splitting", why: "Possible after <i>instead of</i>, not after <i>rather than</i> in this construction." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "claim"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight statements about a planet search. Sort them by whether they describe the universe or describe the instrument.",
        note: { kind: "reader",
                body: "<p>This unit's whole argument is that these two get confused, and that the confusion is invisible because both kinds of sentence are true. The habit is to ask, of every result, whether it would look different with a better instrument.</p>" },
        bins: [
          { id: "universe",   label: "About the universe", hint: "would stay true with a better instrument" },
          { id: "instrument", label: "About the method",   hint: "would change with a better instrument" }
        ],
        items: [
          { text: "Smaller planets are the commonest variety", bin: "universe",
            why: "a claim about what is out there, and the one that survived the correction for bias." },
          { text: "This star is slightly cooler than the Sun", bin: "universe",
            why: "a measured property of an object." },
          { text: "The orbital period is three point two days", bin: "universe",
            why: "a property of the system, not of the telescope that found it." },
          { text: "Planets like Jupiter are commoner than planets like Earth", bin: "universe",
            why: "a claim of the same kind as the first — and the one the early catalogues got wrong, which is why it belongs here rather than in the other column." },
          { text: "Most of the first few hundred discoveries were large and close in", bin: "instrument",
            why: "a fact about what the method could see first." },
          { text: "A small planet on a wide orbit may take years to produce a trustworthy signal", bin: "instrument",
            why: "a statement about detection time, which better instruments have already shortened." },
          { text: "Half the sky is effectively unobserved at these wavelengths", bin: "instrument",
            why: "the sky is there; the coverage is not." },
          { text: "Four of the eleven candidates are strong", bin: "instrument",
            why: "the subtlest. <i>Strong</i> means strong in this data set, at this threshold, which Lesson 5's second article showed is a decision rather than a property." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences why the first planets found were the strangest, and what that tells you about any catalogue.</p>" } }
    ]
  };
})();
