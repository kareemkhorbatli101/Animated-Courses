/* Unit 9 · Cities and Movement — ON CAMPUS
   Function: ask for directions on an unfamiliar campus. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "9-12", label: "A map is a decision", lines: [{ who: "haddad", text:
          "When you look at a map of a city you are looking at a decision, although it rarely announces itself as one. Streets do not arrange themselves. Somebody decided how wide they would be, who would pay for them, and what would be demolished to make room. Consider the grid. A grid is often described as the natural form of a city, and it is nothing of the kind. It is a form that makes land easy to survey, easy to divide and easy to sell, which is why it appears wherever land was being distributed quickly. The curving streets of an older European quarter are not a different aesthetic; they are the record of a different process, in which the street followed the boundary of whatever was already there. Now, why does this matter when you are reading about transport? Because the argument you will meet most often is that a city is congested because it was badly planned. Sometimes that is true. More often the city was planned for a different purpose, by people with different instruments, and what you are looking at is not a failure but an inheritance." }] };

  window.PAGE = {
    id: "u09-oc", unit: "u09", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask for directions on an unfamiliar campus",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen", "time"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about the shuttle. It plays once.",
        speaker: "dan", speakerNote: "estates and transport",
        audio: { track: "9-11", label: "A change to the shuttle", lines: [{ who: "dan", text:
          "A change to the shuttle. The north gate stop is suspended from Monday while the road is resurfaced, so the shuttle will turn at the science building instead. It will run every ten minutes rather than fifteen to make up the difference. The timetable on the website has already been updated." }] },
        items: [
          { q: "Why is the north gate stop suspended?",
            options: [
              { text: "The road is being resurfaced.", correct: true, why: "<i>while the road is resurfaced</i> gives the reason and its duration at once." },
              { text: "Too few people use it.", why: "Usage is not mentioned." },
              { text: "The shuttle is being withdrawn.", why: "It is running more often, not less." }
            ] },
          { q: "What happens to the frequency?",
            options: [
              { text: "It improves from every fifteen minutes to every ten.", correct: true,
                why: "And the purpose is given: <i>to make up the difference</i>." },
              { text: "It drops to every twenty minutes.", why: "The change goes the other way." },
              { text: "It stays the same.", why: "A change is explicitly announced." }
            ] },
          { q: "What does the speaker say about the timetable?",
            options: [
              { text: "It has already been updated online.", correct: true, why: "<i>has already been updated</i> — so no action is needed." },
              { text: "It will be updated next week.", why: "The present perfect says it is done." },
              { text: "It is only available at the stop.", why: "The website is named." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen", "inference"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out on the shuttle. It plays once.",
        speaker: "dan", speakerNote: "transport office",
        audio: { track: "9-13", label: "From November", lines: [{ who: "dan", text:
          "Three changes from November. The shuttle goes to every ten minutes until seven, which is better than it has been, and after seven it drops to one an hour on the hour, which is worse. The north gate stop closes while the path is resurfaced, and the nearest alternative is the library, about five minutes further on foot. And if you have a seminar that ends at half past seven, please tell your department rather than us: we set the timetable from the room bookings, and the bookings for the science building were submitted after the timetable was fixed." }] },
        items: [
          { q: "What changes about the evening service?",
            options: [
              { text: "After seven it drops to one bus an hour.", correct: true,
                why: "He gives the improvement and the worsening in the same sentence, which is why the second half is easy to miss." },
              { text: "It stops running after seven.", why: "There is still one an hour." },
              { text: "It becomes more frequent all day.", why: "The ten-minute service runs only until seven." }
            ] },
          { q: "Why does he ask students to tell their department?",
            options: [
              { text: "The timetable is set from room bookings, which arrived late.", correct: true,
                why: "The reason is the whole last sentence, and it explains why complaining to him would achieve nothing." },
              { text: "The transport office does not take complaints.", why: "He is taking this one; he is redirecting the one that would work." },
              { text: "Departments pay for the service.", why: "Funding is not mentioned." }
            ] },
          { q: "What is the alternative to the north gate stop?",
            options: [
              { text: "The library, five minutes further on foot.", correct: true,
                why: "He names the substitute and its cost in the same breath, which is what makes it usable information." },
              { text: "The science building.", why: "Not mentioned as a stop here." },
              { text: "There is no alternative.", why: "He gives one." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on reading a city map. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>A street plan is a record of decisions. A grid is not natural: it is a form that makes land easy to survey and sell. What looks like bad planning is often planning for a different purpose.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A street plan records past decisions and purposes, not a natural or failed design.", correct: true,
                why: "She opens with the claim and closes on inheritance rather than failure." },
              { text: "Grids are better than curving streets.", why: "She compares their origins, not their merits." },
              { text: "Cities should be planned more carefully.", why: "She never recommends anything." }
            ] },
          { q: "Why does she say the grid appears where it does?",
            options: [
              { text: "It makes land easy to survey, divide and sell.", correct: true,
                why: "All three are given in one clause — and <i>distributed quickly</i> is the condition." },
              { text: "It is the natural form of a city.", why: "She calls that description “nothing of the kind”." },
              { text: "It reduces congestion.", why: "Congestion is raised only later, as a separate argument." }
            ] },
          { q: "What do curving streets record?",
            options: [
              { text: "A process in which streets followed existing boundaries.", correct: true,
                why: "She contrasts process with aesthetic explicitly." },
              { text: "A preference for beauty over function.", why: "“not a different aesthetic”." },
              { text: "An older surveying technology.", why: "Surveying belongs to the grid half of the comparison." }
            ] },
          { q: "What does she mean by <i>an inheritance</i> rather than <i>a failure</i>?",
            options: [
              { text: "The city works badly now because it was built to do something else.", correct: true,
                why: "One step from her closing sentence — different purpose, different instruments." },
              { text: "Older cities cannot be improved.", why: "She makes no claim about what can be changed." },
              { text: "Planners of the past were more skilled.", why: "No comparison of skill is offered." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on the number that decides which schemes get built.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "9-14", label: "Counting the journeys nobody makes", lines: [{ who: "haddad", text:
          "Last week I said a map is a decision. Today I want to show you a number that is also a decision, and it is the one that decides which transport schemes get built. The number is time saved. You take the journeys people currently make along a corridor, you work out how much quicker each would be after the scheme, you multiply by a value per hour, and you compare that with the cost. It is a perfectly reasonable thing to compute. Now ask yourself who is in that calculation. Everyone who already makes the journey. And who is not? The person who cannot cross the road on foot and therefore makes no journey at all. The child who is not allowed to walk to school. Neither of them has a journey time, because neither of them has a journey, so neither contributes a single minute to the total. The measure is not biased because somebody wanted it to be. It is biased because of what it is made of: it counts the journeys the network already permits, which is exactly the set of journeys that needs the least help. And a measure like that will recommend making easy journeys easier, forever, and it will do it with impeccable arithmetic." }] },
        transcript: "<p>Time saved counts only the journeys people already make. The person who cannot cross the road has no journey time, because they have no journey — so the measure recommends making easy journeys easier, with impeccable arithmetic.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "The dominant appraisal measure can only see journeys that already happen.", correct: true,
                why: "She builds the measure up carefully, then asks who is inside it and who is not." },
              { text: "Transport appraisal uses the wrong value per hour.", why: "She calls the computation perfectly reasonable; her objection is about who is in it." },
              { text: "Most transport schemes are not worth building.", why: "She makes no claim about whether particular schemes are worthwhile." }
            ] },
          { q: "Why does the person who cannot cross the road contribute nothing?",
            options: [
              { text: "They make no journey, so they have no journey time.", correct: true,
                why: "She says it twice, in slightly different words, because it is the hinge of the argument." },
              { text: "Their journey is counted under walking rather than driving.", why: "There is no journey to count under any heading." },
              { text: "They were not surveyed.", why: "Surveying is not the issue; the measure has nowhere to put them." }
            ] },
          { q: "What does she mean by saying the bias is not deliberate?",
            options: [
              { text: "It follows from what the measure is made of, not from anybody's intention.", correct: true,
                why: "<i>It is biased because of what it is made of</i> — the same move Unit 7 made about incentives." },
              { text: "Nobody has noticed it before.", why: "She is teaching it, and names administrations elsewhere in the course who act on it." },
              { text: "The bias is too small to matter.", why: "She calls the effect systematic and permanent." }
            ] },
          { q: "What does she mean by “with impeccable arithmetic”?",
            options: [
              { text: "The sums are correct and the conclusion is still wrong.", correct: true,
                why: "The phrase is there to stop you looking for an error in the calculation, which is where people look first." },
              { text: "The arithmetic should be checked more carefully.", why: "She is saying it does not need checking." },
              { text: "Transport economists are unusually careful.", why: "The remark is about the measure, not about the people using it." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "claim"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — a map is a decision",
        note: { kind: "reader",
                body: "<p>She makes a claim, gives an example that is usually explained the wrong way, gives its real explanation, and ends with a warning about an argument you will meet. Four lines.</p>" },
        lines: [
          "Claim: a city map records a ___, not a natural form",
          "- The grid is popular because it makes land easy to survey, divide and ___",
          "- Curving streets are the record of a different ___ , not a different taste",
          "- Warning: congestion is more often an ___ than a failure of planning"
        ],
        gaps: [
          { answer: "decision", why: "her opening sentence, and the title of the whole talk." },
          { answer: "sell", why: "the third item in her list, and the one that explains where grids appear." },
          { answer: "process", why: "the street followed what was already there, which is a process rather than an aesthetic." },
          { answer: "inheritance", why: "her closing word, and the thing she wants you to weigh before blaming planners." }
        ] },

      { id: "c", section: 3, sectionTitle: "Ask for directions", letter: "A",
        concepts: ["read", "place"],
        kind: "phrases", task: null, n: 0,

        phrases: [

          { text: "Name the destination, not the building number.",

            say: "Name the destination, not the building number.",

            when: "Opening the question, every time.",

            why: "Almost nobody knows the numbers of buildings they walk past daily. Naming the thing gets an answer; naming the code gets a shrug." },

          { text: "Ask how long, not just which way.",

            say: "Ask how long, not just which way.",

            when: "As soon as you have the direction.",

            why: "A direction without a duration cannot be checked. Eight minutes tells you at minute twelve that something has gone wrong." },

          { text: "Ask what you will see when you have gone too far.",

            say: "Ask what you will see when you have gone too far.",

            when: "Last, and almost nobody does.",

            why: "The one that saves you. A landmark past the destination turns a direction into something you can test while you are still walking." },

          { text: "Am I going the right way for the science building?",

            say: "Am I going the right way for the science building?",

            when: "When you are already moving and want a yes or no.",

            why: "Answerable in one word, which is what makes it easy to ask of a stranger who is also walking somewhere." },

          { text: "How long is that on foot?",

            say: "How long is that on foot?",

            when: "Immediately after the direction.",

            why: "<i>On foot</i> matters: the same route is four minutes and fifteen depending on the assumption, and people answer for whichever they are picturing." },

          { text: "What will I see if I\u0027ve gone too far?",

            say: "What will I see if I have gone too far?",

            when: "The last thing you ask.",

            why: "It asks for a landmark you hope not to meet, and it is the only part of the answer that still works once you are lost." }

        ],
        prompt: "A good direction answers a question the asker did not know to ask. Hear each line, say it along with the model, then rate what you could produce unprompted.",
        note: { kind: "speak",
                body: "<i>Am I going the right way for…?</i><i>How long on foot?</i><i>Is it signposted?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT DIRECTIONS YOU CAN USE",
          blocks: [
            { h: "Do this", lines: [
              "Name the destination, not the building number.",
              "Ask how long, not just which way.",
              "Ask what you will see when you have gone too far."
            ] },
            { h: "Say this", lines: [
              "Am I going the right way for the science building?",
              "How long is that on foot?",
              "What will I see if I've gone too far?"
            ] }
          ] },
        after: "<p>The third question is the one almost nobody asks, and it is the one that saves you. A landmark past the destination turns a direction into something you can check as you walk.</p>" },

      { id: "c2", section: 3, sectionTitle: "Ask for directions", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each question protects you from.",
        caption: "Four questions, and what each one saves you",
        head: ["Question", "What you say", "What it saves you from"],
        rows: [
          ["Name the destination", "Am I going the right way for the ___ building?", "an answer about a number you cannot recognise"],
          ["Ask the time",         "How ___ is that on foot?", "<i>not far</i>, which means nothing"],
          ["Ask for a landmark",   "Is it ___ after the library?", "doubting yourself halfway there"],
          ["Ask what is too far",  "What will I see if I have gone too ___ ?", "walking twenty minutes past it before you ___"]
        ],
        gaps: [
          { answer: "science", why: "a name the other person can picture; a building number is only useful to someone who already knows." },
          { answer: "long", why: "a figure rather than a judgement." },
          { answer: "signposted", why: "a checkpoint partway, so you find out early rather than at the end." },
          { answer: "far", why: "the question almost nobody asks, and the one that makes a direction self-correcting." },
          { answer: "stop", why: "the failure mode this question exists to prevent." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Ask for directions", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "w1", label: "The overshoot",

            detail: "Imane follows a direction confidently for ten minutes, passes the building without noticing, and keeps going for another ten." },

          { id: "w2", label: "The vague yes",

            detail: "Karim is told the library is straight on. It is, for half a mile, past three turnings he cannot distinguish." },

          { id: "w3", label: "The check that worked",

            detail: "Sana is told to turn back if she reaches the bridge. She reaches the bridge, turns back, and finds it immediately." }

        ],

        takeaways: [

          { text: "<b>Ask what you will see if you have gone too far.</b>", caseId: "w1",

            why: "Imane had no way of knowing she had overshot, so confidence carried her further from the building with every step." },

          { text: "<b>It is the only question that turns a direction</b>", caseId: "w2",

            why: "Karim has a direction that is true and unusable. What he lacks is any way of telling, at any moment, whether he is still right." },

          { text: "<b>into something you can check while you are still walking.</b>", caseId: "w3",

            why: "Sana used the landmark exactly as intended: not to find the place, but to find out she had passed it, at the cost of ninety seconds." }

        ],
        prompt: "One sentence to leave with \u2014 and three people about to walk past the thing they are looking for. Drag each part onto the one it would help.",
        text: { blocks: [{ lines: [
          "Ask what you will see if you have gone too far. It is the only question that turns a direction into something you can check while you are still walking."
        ],
        closer: { kind: "life",
          body: "<p>Next time you ask the way, add the third question. Note whether the answer gets you there with less doubling back.</p>" } }] } }
    ]
  };
})();
