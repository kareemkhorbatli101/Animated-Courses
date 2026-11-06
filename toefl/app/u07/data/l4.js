/* Unit 7 · Markets and Choices — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: linking words. */
(function () {
  window.PAGE = {
    id: "u07-l4", unit: "u07", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask a procedural question, and get a usable answer",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>What happens if I…?</i><i>Is there a deadline for that?</i><i>Who do I need to speak to?</i>" },
        items: [
          { who: "dan", say: "The office closes between one and two.",
            options: [
              { text: "Then I'll come back at two.", correct: true, why: "Takes the information and acts on it." },
              { text: "It closed at one.", why: "Reports the past instead of planning around it." },
              { text: "Will it close?", why: "Asks what has just been stated." }
            ] },
          { who: "mei", say: "What happens if I miss the deadline?",
            options: [
              { text: "You'll be charged a late fee.", correct: true, why: "A real conditional question takes a <i>will</i> answer." },
              { text: "You would have been charged.", why: "Unreal form for a real question about the future." },
              { text: "I missed it too.", why: "Answers about the speaker rather than the question." }
            ] },
          { who: "priya", say: "Do I need to bring anything?",
            options: [
              { text: "Photo ID and your student number.", correct: true, why: "A direct answer, with the two specific items." },
              { text: "Yes, you need.", why: "Incomplete — <i>need</i> requires an object here." },
              { text: "I brought mine.", why: "Does not tell the asker what to bring." }
            ] },
          { who: "tomas", say: "Can I pay in instalments?",
            options: [
              { text: "Yes, if you arrange it before the first one is due.", correct: true,
                why: "Answers and attaches the condition — which is what a procedural answer must do." },
              { text: "Yes, you paid.", why: "Wrong tense, and it asserts something false." },
              { text: "I would rather not.", why: "Answers a preference nobody asked about." }
            ] },
          { who: "dan", say: "I'm not sure that's the right form.",
            options: [
              { text: "Which one should I be using?", correct: true, why: "Converts the doubt into the next useful question." },
              { text: "It's definitely right.", why: "Closes the exchange before finding out." },
              { text: "I'm not sure either.", why: "Agrees without advancing anything." }
            ] },
          { who: "mei", say: "If I'd known about the fee, I'd have paid earlier.",
            options: [
              { text: "You can appeal it — the form's online.", correct: true,
                why: "The speaker did <b>not</b> know and did <b>not</b> pay early. Only this reply addresses what actually happened." },
              { text: "Good thing you knew.", why: "The counterfactual says they did not." },
              { text: "So you paid on time.", why: "The opposite of what the sentence implies." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A student at the bursar's office. Listen once.",
        speaker: "priya", speakerNote: "with Dan Okafor",
        audio: { track: "7-05", label: "At the bursar's office", lines: [
          { who: "priya", text: "I wanted to ask about paying in instalments. Is it too late to set one up?" },
          { who: "dan", text: "Not if the first instalment hasn't fallen due. When is yours?" },
          { who: "priya", text: "The fifteenth." },
          { who: "dan", text: "Then you've got nine days. You'll need to fill in the plan form and bring photo ID — and it has to be done in person, not online." },
          { who: "priya", text: "What happens if I can't get here before the fifteenth?" },
          { who: "dan", text: "You'd be charged the late fee, and then you can appeal it. But it's a lot easier to come in." }
        ] },
        items: [
          { q: "What does Priya want?",
            options: [
              { text: "To set up a payment plan.", correct: true, why: "Her first line asks exactly this." },
              { text: "To appeal a late fee.", why: "That is the fallback Dan mentions, not her request." },
              { text: "To change her student number.", why: "Never raised." }
            ] },
          { q: "What condition does Dan attach?",
            options: [
              { text: "The first instalment must not yet have fallen due.", correct: true,
                why: "“Not if the first instalment hasn't fallen due” — the whole answer turns on it." },
              { text: "She must apply online.", why: "He says the opposite: in person, not online." },
              { text: "She must pay the late fee first.", why: "The late fee only arises if she misses the window." }
            ] },
          { q: "Why does Dan ask when her instalment is due?",
            options: [
              { text: "To work out whether she still has time.", correct: true,
                why: "He has just made the condition depend on that date, so the question establishes whether she meets it." },
              { text: "To check which course she is on.", why: "Courses are not discussed." },
              { text: "To decide whether to charge her.", why: "He is not the one charging; he is explaining a rule." }
            ] },
          { q: "What does Dan recommend?",
            options: [
              { text: "Coming in before the fifteenth rather than appealing later.", correct: true,
                why: "“it's a lot easier to come in” — the recommendation is in his final clause." },
              { text: "Appealing the fee straight away.", why: "He presents that as the harder route." },
              { text: "Paying the whole amount now.", why: "Never suggested." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Words <b>link</b> across boundaries. A consonant runs onto a following vowel, and two vowels are joined by a glide. This is why fast speech sounds like one long word.",
        speaker: "haddad",
        lines: [
          { text: "Pick it up at eight.", note: "<i>pi-ki-tu-pa-teight</i> — four links in five words." },
          { text: "If it is set too low, it will not work.",
            note: "<i>i-fi-ti-zset</i> — the <i>f</i>, <i>t</i> and <i>s</i> all run onto the next vowel." },
          { text: "We will not know until a full year has passed.",
            note: "<i>un-ti-la-full</i>, <i>yea-ras-passed</i>." },
          { text: "The institutional incentives always outlast the individuals who argued about them.",
            note: "A long noun phrase, with linking throughout — the top of this task's range." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask a procedural question · attach a condition to an answer · hear words link together.</p>" } }
    ]
  };
})();
