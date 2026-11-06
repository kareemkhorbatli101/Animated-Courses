/* Unit 9 · Cities and Movement — ON CAMPUS
   Function: ask for directions on an unfamiliar campus. */
(function () {
  window.PAGE = {
    id: "u09-oc", unit: "u09", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask for directions on an unfamiliar campus",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
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

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on reading a city map. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "9-12", label: "A map is a decision", lines: [{ who: "haddad", text:
          "When you look at a map of a city you are looking at a decision, although it rarely announces itself as one. Streets do not arrange themselves. Somebody decided how wide they would be, who would pay for them, and what would be demolished to make room. Consider the grid. A grid is often described as the natural form of a city, and it is nothing of the kind. It is a form that makes land easy to survey, easy to divide and easy to sell, which is why it appears wherever land was being distributed quickly. The curving streets of an older European quarter are not a different aesthetic; they are the record of a different process, in which the street followed the boundary of whatever was already there. Now, why does this matter when you are reading about transport? Because the argument you will meet most often is that a city is congested because it was badly planned. Sometimes that is true. More often the city was planned for a different purpose, by people with different instruments, and what you are looking at is not a failure but an inheritance." }] },
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

      { id: "c", section: 3, sectionTitle: "Ask for directions", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. A good direction answers a question the asker did not know to ask.",
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
        after: "<p>The third question is the one almost nobody asks, and it is the one that saves you. A landmark past the destination turns a direction into something you can check as you walk.</p>",
        closer: { kind: "life",
          body: "<p>Next time you ask the way, add the third question. Note whether the answer gets you there with less doubling back.</p>" } }
    ]
  };
})();
