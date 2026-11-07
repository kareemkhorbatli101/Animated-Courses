/* Unit 9 · Meetings and Minutes — AT WORK
   Ask for directions in an unfamiliar building. */
(function () {
  window.PAGE = {
    id: "u09-oc", unit: "u09", block: "oc", up: "../", tab: "AT WORK",
    objective: "Arrive at the right room at the right time in a building you do not know",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Finding the room", letter: "A",
        concepts: ["listen", "place"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "A receptionist explains how to reach a meeting. Fill in the form as you listen.",
        audio: { track: "u09-directions", label: "At the reception desk",
          lines: [
            { who: "maya", text: "Right. You want Ms Darwish, third floor, and the lifts are behind me on the left." },
            { who: "maya", text: "Out of the lift, turn right, and her office is the second door after the glass partition. Not the first — the first is a store room and people knock on it every week." },
            { who: "maya", text: "You will need a badge. Sign here, and the badge goes back to this desk on your way out, not to the security desk at the side entrance." },
            { who: "maya", text: "If the lift is out, the stairs are past the kitchen on your right. It is four flights, because the ground floor counts as one." },
            { who: "maya", text: "She is in a meeting that was due to end at ten. If she is not there, wait in the seating area by the window rather than in the corridor." },
            { who: "maya", text: "And the meeting rooms are named, not numbered. Hers is Orontes, which confuses everybody, because it is also the name of one of your suppliers." },
            { who: "maya", text: "If you get lost, come back here rather than asking on the floor. Most of the people up there do not know either." } ] },
        title: "Directions — notes",
        lines: [
          "Floor: ___ ",
          "Out of the lift, turn ___ ",
          "Her office: the ___ door after the glass partition",
          "Badge returns to ___ desk, not security",
          "Stairs: past the kitchen, ___ flights",
          "If she is not there, wait in the ___ area"
        ],
        gaps: [
          { answer: "third", why: "The first thing she says, and the only one most visitors remember." },
          { answer: "right", why: "A direction given once. Reading it back is the habit from Unit 6." },
          { answer: "second", why: "And she says why: the first is a store room that people knock on weekly." },
          { answer: "this", why: "<i>This desk</i>, not the security desk — she rules out the wrong one in the same sentence." },
          { answer: "four", why: "With the reason: the ground floor counts as one, which is why it is not three." },
          { answer: "seating", why: "Rather than the corridor, which is the detail that stops a visitor standing awkwardly for twenty minutes." }
        ],
        note: { kind: "life", title: "She gives the wrong answers too",
                body: "<p>Not the first door. Not the security desk. Not three flights. Each time she names the thing people get wrong, which is worth more than the correct answer on its own.</p>" },
        explain: { terms: [
          { en: "glass partition", gloss: "a glass wall dividing an office", ar: "فاصل زجاجي" },
          { en: "flight of stairs", gloss: "one set of steps between floors", ar: "درج بين طابقين" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Finding the room", letter: "B",
        concepts: ["listen", "people"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "Two visitors, the same directions. Listen, then answer.",
        speaker: "maya",
        speakerNote: "with Marwan and Samer",
        audio: { track: "u09-two-visitors", label: "Two visitors",
          lines: [
            { who: "marwan", text: "I have a meeting with Ms Darwish." },
            { who: "maya", text: "Third floor. Out of the lift turn right, second door after the glass partition. Sign here for a badge." },
            { who: "marwan", text: "Thank you." },
            { who: "maya", text: "The badge comes back to this desk." },
            { who: "marwan", text: "Yes, fine." },
            { who: "maya", text: "He will be back in four minutes." },
            { who: "samer", text: "Good morning. I have a meeting with Ms Darwish at ten, and I have not been here before." },
            { who: "maya", text: "Third floor, right out of the lift, second door after the glass partition." },
            { who: "samer", text: "Third floor, right, second door after the partition. Not the first." },
            { who: "maya", text: "Not the first, that is a store room. You are the first person this month to say that back to me." },
            { who: "samer", text: "Badge?" },
            { who: "maya", text: "Sign here. It comes back to this desk on your way out, not the security desk." },
            { who: "samer", text: "This desk. And if she is not there?" },
            { who: "maya", text: "Wait in the seating area by the window, not in the corridor. She is in a meeting that was due to end at ten." },
            { who: "samer", text: "One more. What is the room called? You said the rooms have names." },
            { who: "maya", text: "Orontes. Which is confusing, because it is also one of your suppliers." },
            { who: "samer", text: "It is my own company. So I will not forget it." },
            { who: "maya", text: "Then you are the second person this month to make that joke, and the first to need the directions only once." },
            { who: "samer", text: "Can I ask you something, since you do this all day? What do most people get wrong?" },
            { who: "maya", text: "They take the first door, they bring the badge to the security desk because it is nearer the car park, and they stand in the corridor because they think the seating area is for someone else." },
            { who: "samer", text: "All three of those are things you told me and I would have forgotten two of them if I had not repeated them." },
            { who: "maya", text: "Most people are polite and most people do not listen. Those are not the same thing, and after four years here I can tell which one I am getting in about ten seconds." },
            { who: "samer", text: "What gives it away?" },
            { who: "maya", text: "Whether they ask a second question. Somebody who asks nothing has already stopped listening, and somebody who asks one more thing is still with me." },
            { who: "samer", text: "I will remember that. Third floor, right, second door, not the first." },
            { who: "maya", text: "Orontes. Enjoy your meeting." } ] },
        items: [
          { q: "Why is Marwan back in four minutes?",
            options: [
              { text: "He has gone to the wrong door or the wrong place.", correct: true,
                why: "He confirmed nothing. The receptionist predicts it before he has reached the lift." },
              { text: "He forgot his badge.", why: "He signed for one." },
              { text: "The meeting was cancelled.", why: "Nothing suggests that." } ] },
          { q: "What does Samer say that Marwan does not?",
            options: [
              { text: "That he has not been there before.", correct: true,
                why: "It tells the receptionist how much detail to give, and she gives more." },
              { text: "His company name.", why: "Only at the end, as a joke." },
              { text: "The time of his meeting.", why: "He gives it, and so could Marwan have." } ] },
          { q: "What does Samer add when he repeats the directions?",
            options: [
              { text: "<i>Not the first</i> — the thing to avoid.", correct: true,
                why: "He has heard the negative and keeps it, which is the part Marwan dropped." },
              { text: "The floor number.", why: "Both of them have that." },
              { text: "The room name.", why: "He asks for that separately, later." } ] },
          { q: "What is the receptionist's comment on the read-back?",
            options: [
              { text: "He is the first person that month to do it.", correct: true,
                why: "It costs five seconds and almost nobody does it." },
              { text: "It is unnecessary.", why: "She treats it as remarkable in the other direction." },
              { text: "He got it wrong.", why: "He got it right, including the negative." } ] },
          { q: "What does he check about the badge?",
            options: [
              { text: "Which desk it goes back to.", correct: true,
                why: "<i>This desk</i>, which she then confirms by ruling out the security desk." },
              { text: "Whether he needs one.", why: "He assumes he does and asks only the one-word question." },
              { text: "How long it is valid.", why: "Never raised." } ] },
          { q: "Why does he ask about the room name?",
            options: [
              { text: "Because she mentioned the rooms have names rather than numbers.", correct: true,
                why: "He picked up a detail she had given in passing and asked the question it implied." },
              { text: "Because he is lost.", why: "He has not left reception." },
              { text: "Because he knows the building.", why: "He has said he has not been there before." } ] },
          { q: "What is the coincidence at the end?",
            options: [
              { text: "The meeting room is named after his own company.", correct: true,
                why: "<i>Orontes</i>, which the receptionist had assumed was a supplier of theirs." },
              { text: "He has met her before.", why: "Nothing suggests it." },
              { text: "He works in the building.", why: "He has never been there." } ] },
          { q: "What is the difference in outcome between the two visitors?",
            options: [
              { text: "Samer needs the directions once; Marwan needs them twice.", correct: true,
                why: "About forty seconds of questions against a wasted trip to the third floor and back." },
              { text: "Samer gets a better room.", why: "The same room." },
              { text: "There is no difference.", why: "The receptionist names it herself." } ] }
        ],
        explain: { terms: [
          { en: "to say something back", gloss: "to repeat it to check you have it", ar: "إعادة القول للتأكيد" },
          { en: "in passing", gloss: "mentioned briefly, not as the main point", ar: "عَرَضًا" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Arrive once", letter: "A",
        concepts: ["speak", "place"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that got Samer there first time. Click each one.",
        note: { kind: "life", title: "The same habit as Unit 6",
                body: "<p>Saying it back works on strangers exactly as it works on colleagues, and in a building nobody minds at all — the person giving directions wants you to arrive as much as you do.</p>" },
        text: "I have a meeting with Ms Darwish at ten, and I have not been here before. Third floor, right, second door after the partition. Not the first. Badge? This desk. And if she is not there? One more. What is the room called?",
        phrases: [
          { text: "I have not been here before.",
            why: "Five words that change how much detail you are given. Without them you get the short version, which assumes you know the building." },
          { text: "Third floor, right, second door after the partition.",
            why: "The read-back, compressed. Nobody expects whole sentences; the list is enough to check it." },
          { text: "Not the first.",
            why: "Keeping the negative. Directions usually contain one thing to avoid, and it is the first thing people drop." },
          { text: "This desk.",
            why: "Two words confirming the badge. The alternative was the security desk at a different entrance." },
          { text: "And if she is not there?",
            why: "Asks about the failure case, as Unit 7 did at the counter. It produced the seating area instead of twenty minutes in a corridor." },
          { text: "One more. What is the room called?",
            why: "Picks up a detail given in passing and asks the question it implies. Signalling <i>one more</i> also tells the other person the end is near." }
        ],
        after: "<p>Six short questions, about forty seconds, and the difference between arriving once and arriving twice.</p>" },

      { id: "2b", section: 2, sectionTitle: "Arrive once", letter: "B",
        concepts: ["place", "sequence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "What to check before you leave the desk",
        head: ["Check", "Why", "What goes wrong without it"],
        rows: [
          ["Say the directions ___ ", "Tests that you have them", "You arrive at the store room"],
          ["Keep the ___ ", "Directions usually contain one thing to avoid", "You take the first door"],
          ["Ask what happens if they are ___ ", "The failure case", "Twenty minutes in a corridor"],
          ["Ask for the room ___ ", "Rooms may be named, not numbered", "You count doors instead of reading signs"]
        ],
        gaps: [
          { answer: "back", why: "The habit from Unit 6, applied to a stranger in five seconds." },
          { answer: "negative", why: "<i>Not the first</i> is the part Marwan dropped and the reason he came back." },
          { answer: "out", why: "<i>If she is not there</i> — and the answer was the seating area by the window." },
          { answer: "name", why: "She mentioned names in passing. Samer heard it and asked; Marwan did not." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Arrive once", letter: "C",
        concepts: ["recall", "place"],
        kind: "recap", task: null, n: 0,
        prompt: "Four visitors. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Marwan", detail: "Is given three directions and says only <i>thank you</i>." },
          { id: "c2", label: "Hiba", detail: "Is told <i>second door, not the first</i> and remembers only <i>second door</i>." },
          { id: "c3", label: "Zaid", detail: "Arrives, finds the person is still in a meeting, and stands in the corridor." },
          { id: "c4", label: "Nabil", detail: "Does not say that he has never been in the building before." }
        ],
        takeaways: [
          { text: "Say it back, even to a stranger.", caseId: "c1",
            why: "Five seconds. The receptionist predicted his return before he reached the lift." },
          { text: "The negative is the part that gets dropped.", caseId: "c2",
            why: "Directions usually contain one thing to avoid, and it is the first thing to fall out of a list." },
          { text: "Ask what to do if they are not there.", caseId: "c3",
            why: "The answer is almost always a better place to wait than the one you would choose." },
          { text: "Say you do not know the building.", caseId: "c4",
            why: "It changes the version of the directions you are given, from the short one to the one with the store room in it." }
        ],
        closer: "<p>Next unit: records and responsibility, where keeping the paperwork right is the whole job.</p>" }

    ]
  };
})();
