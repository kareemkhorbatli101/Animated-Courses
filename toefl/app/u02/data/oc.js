/* Unit 2 · Climate and Prediction — ON CAMPUS
   Function: disagree politely in a seminar. */
(function () {

  /* Two exercises use this talk: the comprehension items and the outline
     that is filled in while it plays. */
  var TALK1 = { track: "2-12", label: "What a model does", lines: [{ who: "haddad", text:
          "People often picture a climate model as a very large piece of software that is asked what the temperature will be in 2080. That is not what it does. A model divides the atmosphere and the ocean into boxes, and for each box it applies the same physics you would apply to a bucket of air: conservation of energy, conservation of mass, the behaviour of water as it changes state. Then it steps forward, half an hour at a time, for a simulated century. Nothing in that process is a prediction. The model is told what the emissions are; it is not asked to guess them. So when two models disagree, it is worth asking which kind of disagreement it is. If they were given different emissions, they are answering different questions and the gap means very little. If they were given identical emissions and still differ, the gap is telling you something about the physics they represent differently, and clouds are almost always where that difference lives. That second kind is the interesting one, and it is the one that has narrowed slowly over thirty years." }] };

  window.PAGE = {
    id: "u02-oc", unit: "u02", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Disagree politely in a seminar",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice read out before the field trip. It plays once.",
        speaker: "dan", speakerNote: "trip coordinator",
        audio: { track: "2-11", label: "Two changes to Friday", lines: [{ who: "dan", text:
          "Two changes to Friday. The minibus now leaves at a quarter past seven, not half past, because the tide turns earlier than we thought. And site three is off: the path is still under water. We will do sites one and two properly instead. If you signed up for the afternoon group, check your email tonight." }] },
        items: [
          { q: "What has changed about the departure?",
            options: [
              { text: "It is fifteen minutes earlier.", correct: true, why: "A quarter past seven instead of half past." },
              { text: "It is fifteen minutes later.", why: "Quarter past comes before half past." },
              { text: "The meeting point has moved.", why: "No place is mentioned." }
            ] },
          { q: "Why is site three cancelled?",
            options: [
              { text: "The path is flooded.", correct: true, why: "“the path is still under water” — and <i>still</i> implies it has been for a while." },
              { text: "There is not enough time.", why: "Time is the reason for the earlier departure, not the cancellation." },
              { text: "The tide turns too early.", why: "That explains the departure time." }
            ] },
          { q: "Who needs to check their email?",
            options: [
              { text: "Students in the afternoon group.", correct: true, why: "The instruction is conditional, and the condition names that group." },
              { text: "Everyone on the trip.", why: "The <i>if</i> clause narrows it." },
              { text: "Nobody — all the changes have been announced.", why: "The last sentence asks for exactly this." }
            ] }
        ] },


      { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out at the end of a lecture. It plays once.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "2-13", label: "Next week's seminar", lines: [{ who: "haddad", text:
          "A short notice about next week's seminar. Dr Vasquez is coming to talk about ocean circulation, and because she is only here on the Tuesday, we are moving the seminar from Thursday to Tuesday at two. The reading is already on the module page. It is eleven pages, and she has asked that everyone comes with one question written down. The Thursday slot stays empty, so please do not turn up to it." }] },
        items: [
          { q: "Why has the seminar moved?",
            options: [
              { text: "The visiting speaker is only available on Tuesday.", correct: true,
                why: "The <i>because</i> clause gives the reason before the change itself." },
              { text: "The Thursday room was unavailable.", why: "The Thursday slot is said to stay empty, so the room is not the problem." },
              { text: "The reading was not ready.", why: "The reading is already posted." }
            ] },
          { q: "What has the speaker asked students to do?",
            options: [
              { text: "Come with one question written down.", correct: true,
                why: "<i>She has asked that everyone comes with…</i> — the request is reported, not issued by the lecturer." },
              { text: "Read eleven pages and summarise them.", why: "Eleven pages is the length of the reading; no summary is requested." },
              { text: "Email their questions in advance.", why: "The questions are to be brought, not sent." }
            ] },
          { q: "What should students NOT do?",
            options: [
              { text: "Turn up on Thursday.", correct: true,
                why: "The last clause is the only instruction in the negative, and it is there because people will." },
              { text: "Read the paper before Tuesday.", why: "Reading it is expected." },
              { text: "Ask Dr Vasquez questions.", why: "She has asked for questions." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on what a climate model actually does. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>A model applies known physics box by box and steps forward. It is told the emissions; it does not guess them. So the useful question about two disagreeing models is whether they were given the same emissions.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A model applies known physics step by step; it does not guess the future.", correct: true,
                why: "“Nothing in that process is a prediction” is the hinge of the talk." },
              { text: "Climate models are too large to understand.", why: "She explains the mechanism precisely to show it is understandable." },
              { text: "Models should be asked what the temperature will be.", why: "She opens by saying that is not what they do." }
            ] },
          { q: "How far forward does the model step at a time?",
            options: [
              { text: "About half an hour.", correct: true, why: "“half an hour at a time, for a simulated century” — a detail worth noting." },
              { text: "A year.", why: "A century is the total, not the step." },
              { text: "She does not say.", why: "She gives the figure." }
            ] },
          { q: "When is a disagreement between two models <i>interesting</i>?",
            options: [
              { text: "When they were given identical emissions and still differ.", correct: true,
                why: "She divides disagreements into two kinds and says plainly which one matters." },
              { text: "When they were given different emissions.", why: "She says that gap “means very little”." },
              { text: "Whenever the gap is large.", why: "Size is not her criterion; the cause is." }
            ] },
          { q: "What would she say about a headline comparing two models with different scenarios?",
            options: [
              { text: "It is comparing answers to different questions.", correct: true,
                why: "One step from what she states: different emissions means they are answering different questions." },
              { text: "It shows the models are unreliable.", why: "She says the opposite about that kind of gap." },
              { text: "It proves the physics is wrong.", why: "Physics differences belong to the second kind of disagreement." }
            ] }
        ] },


      { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "evidence"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on four words that carry numbers.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "2-14", label: "How likely is likely", lines: [{ who: "haddad", text:
          "I want to spend ten minutes on four words, because they are the four most misread words this field publishes. When a report says something is virtually certain, it means a probability above ninety-nine per cent. Very likely means above ninety. Likely means above sixty-six. And more likely than not means above fifty. Those are definitions, not impressions, and they are printed in a table at the front of the report. What happens next is entirely predictable. A newspaper reads likely and writes may. May has no number attached to it at all; it is compatible with one per cent and with ninety-nine. So a statement with a defined floor of two thirds becomes a statement with no floor, and nobody has told a lie. The second thing that happens is the reverse. A finding reported as more likely than not, which is barely better than a coin toss, gets reported as a finding, full stop, and the hedge simply disappears. If you take one thing from this hour, take this. When you meet one of those four phrases, go and find the table that defines it. It is always there, and almost nobody looks at it." }] },
        transcript: "<p>Virtually certain is above 99%, very likely above 90%, likely above 66%, more likely than not above 50%. The table defining them is at the front of every report.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "The field's probability words have defined thresholds, and reporting loses them.", correct: true,
                why: "She gives the four definitions, then two ways the definitions are destroyed in transit." },
              { text: "Newspapers deliberately misrepresent climate reports.", why: "She is explicit that nobody has lied; the loss happens through word choice." },
              { text: "Reports should stop using the word <i>likely</i>.", why: "Her advice is to look up the definition, not to abandon the word." }
            ] },
          { q: "According to the talk, <i>likely</i> means a probability above:",
            options: [
              { text: "two thirds", correct: true, why: "Sixty-six per cent, which she gives as a figure. This is the detail item on this task." },
              { text: "fifty per cent", why: "That is <i>more likely than not</i>." },
              { text: "ninety per cent", why: "That is <i>very likely</i>." }
            ] },
          { q: "Why is <i>may</i> a problem?",
            options: [
              { text: "It carries no threshold, so it fits any probability at all.", correct: true,
                why: "<i>Compatible with one per cent and with ninety-nine</i> — the floor is gone without anything false being said." },
              { text: "It is too formal for a newspaper.", why: "Register is not her complaint." },
              { text: "It means less than fifty per cent.", why: "She says it means nothing in particular, which is worse." }
            ] },
          { q: "What does she advise her students to do?",
            options: [
              { text: "Look up the table that defines the phrase.", correct: true,
                why: "Her closing instruction, and she adds that it is always printed and almost never consulted." },
              { text: "Avoid reading newspaper coverage.", why: "She never suggests this." },
              { text: "Convert every hedge into a number themselves.", why: "The numbers already exist; she asks them to find them." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "claim"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — what a model does",
        note: { kind: "reader",
                body: "<p>Four lines will hold a fifty-minute lecture if they are the right four: the claim, one number, one correction of a common belief, and the distinction the lecturer spent longest on.</p>" },
        lines: [
          "Main claim: a model applies known ___ box by box; it does not guess",
          "- Time step: about ___ an hour, for a simulated century",
          "- The model is ___ what the emissions are, not asked to guess them",
          "- Interesting disagreement: same emissions, different ___"
        ],
        gaps: [
          { answer: "physics", why: "her word, and the reason she says the process contains no prediction." },
          { answer: "half", why: "a figure, so it earns a place in four lines." },
          { answer: "told", why: "<i>the model is told what the emissions are</i> — the passive is the point." },
          { answer: "clouds", why: "she says this is almost always where the difference lives." }
        ] },

      { id: "c", section: 3, sectionTitle: "Disagree politely", letter: "A",
        concepts: ["read", "claim"],
        kind: "phrases", task: null, n: 0,

        phrases: [

          { text: "Name the part you accept before the part you don\u0027t.",

            say: "Name the part you accept before the part you do not.",

            when: "Before any disagreement, every time.",

            why: "It proves you were listening and narrows the argument to the part that is actually in dispute, which is usually smaller than it first looked." },

          { text: "Disagree with the claim, not the person who made it.",

            say: "Disagree with the claim, not the person who made it.",

            when: "Whenever you feel the urge to say <i>you are wrong</i>.",

            why: "<i>That assumes</i> invites an answer; <i>you assume</i> invites a defence. The grammar decides whether the seminar continues." },

          { text: "Ask a question when you are not yet sure you disagree.",

            say: "Ask a question when you are not yet sure you disagree.",

            when: "The moment before you commit to a position you may not hold.",

            why: "Most apparent disagreements are two people using one word differently. A question finds that out before anyone has to retreat." },

          { text: "I think that\u0027s right about the scenarios, but I\u0027d separate that from the model differences.",

            say: "I think that is right about the scenarios, but I would separate that from the model differences.",

            when: "When someone has merged two things that should be kept apart.",

            why: "Concede, then split. The disagreement is not about whether they are right but about where one claim ends and another begins." },

          { text: "That\u0027s true up to a point \u2014 though it assumes the extremes are as likely as the middle.",

            say: "That is true up to a point, though it assumes the extremes are as likely as the middle.",

            when: "When a claim holds under an assumption the speaker has not stated.",

            why: "<i>Up to a point</i> grants the ground; <i>it assumes</i> names the hidden step. Together they disagree without contradicting." },

          { text: "Can I check what you mean by <i>prediction</i> there?",

            say: "Can I check what you mean by prediction there?",

            when: "As soon as a word is doing two jobs in one conversation.",

            why: "Not a retreat. Asking what someone means by a word is the most efficient disagreement there is, and in this unit it is the whole argument." }

        ],
        prompt: "In a seminar, disagreeing well is a skill with its own phrases. Hear each one, say it along with the model, then rate what you could produce unprompted.",
        note: { kind: "speak",
                body: "<i>I see it slightly differently.</i><i>That's true up to a point, but…</i><i>I'd want to separate two things there.</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO DISAGREE POLITELY",
          blocks: [
            { h: "Do this", lines: [
              "Name the part you accept before the part you don't.",
              "Disagree with the claim, not the person who made it.",
              "Ask a question when you are not yet sure you disagree."
            ] },
            { h: "Say this", lines: [
              "I think that's right about the scenarios, but I'd separate that from the model differences.",
              "That's true up to a point — though it assumes the extremes are as likely as the middle.",
              "Can I check what you mean by <i>prediction</i> there?"
            ] }
          ] },
        after: "<p>The last one is not a retreat. Asking what someone means by a word is the most efficient disagreement there is.</p>" },

      { id: "c2", section: 3, sectionTitle: "Disagree politely", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each move is protecting.",
        caption: "Four moves, and what each one protects",
        head: ["Move", "What you say", "What it protects"],
        rows: [
          ["Concede first",       "I think that's ___ about the scenarios, but…", "the other person's standing in the room"],
          ["Separate two things", "I'd want to ___ that from the model differences", "the part of their claim that is sound"],
          ["Ask, don't assert",   "Can I ___ what you mean by prediction?", "you, if it turns out you misread them"],
          ["Attack the claim",    "that assumes the ___ are as likely as the middle", "the discussion, which survives a disagreement about claims"]
        ],
        gaps: [
          { answer: "right", why: "conceding a specific part, not the whole, is what makes the concession usable." },
          { answer: "separate", why: "the move that turns one argument into two, only one of which you are having." },
          { answer: "check", why: "asking what a word means is the cheapest disagreement available, and often ends it." },
          { answer: "extremes", why: "the claim is attacked at its assumption, which is where Lesson 5's article attacks it too." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Disagree politely", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "d1", label: "The soft retreat",

            detail: "Amal thinks the projection is being misread, says \u201cmaybe I am wrong, it is probably fine\u201d, and the point is never examined." },

          { id: "d2", label: "The flat no",

            detail: "Bilal says \u201cthat is not right\u201d and stops there. The other student defends the whole position rather than the part at issue." },

          { id: "d3", label: "The whole package",

            detail: "Dina disagrees with one assumption and ends up arguing against the entire paper, including the parts she accepts." }

        ],

        takeaways: [

          { text: "Disagreeing well is <b>not softening what you think</b>.", caseId: "d1",

            why: "Amal softened until there was nothing left to answer. Hedging a point out of existence is not politeness; it removes the thing the seminar was for." },

          { text: "It is <b>being precise</b>", caseId: "d2",

            why: "Bilal was precise about nothing. <i>That is not right</i> gives the other person no part to defend, so they defend everything." },

          { text: "<b>about which part of it you are disagreeing with</b>.", caseId: "d3",

            why: "Dina is arguing with a whole paper over one assumption. Naming the part she accepts would leave one question on the table instead of twenty." }

        ],
        prompt: "One sentence to leave with \u2014 and three seminars about to need it. Drag each part onto the person it would change.",
        text: { blocks: [{ lines: [
          "Disagreeing well is not softening what you think. It is being precise about which part of it you are disagreeing with."
        ] }] },
        closer: { kind: "life",
          body: "<p>In your next seminar, disagree once using the first pattern: name what you accept, then what you don't.</p>" } }
    ]
  };
})();
