/* Unit 11 · How Science Works — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: rising and falling intonation. */
(function () {
  window.PAGE = {
    id: "u11-l4", unit: "u11", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Acknowledge a contribution, and hear a question in the tune",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>That was Priya's idea, not mine.</i><i>Building on what Tomás said…</i><i>Credit where it's due —</i>" },
        items: [
          { who: "dan", say: "Has the sample been weighed?",
            options: [
              { text: "Not yet — I'll do it before we start.", correct: true, why: "<i>Not yet</i> answers a present perfect passive question." },
              { text: "Yes, I weigh it.", why: "Present simple for a completed action." },
              { text: "It weighs.", why: "Wrong voice: the sample does not weigh itself." }
            ] },
          { who: "mei", say: "Nice catch on the calibration.",
            options: [
              { text: "That was Priya's, actually — she spotted the drift.", correct: true,
                why: "Redirects credit accurately, which is this unit's On Campus skill." },
              { text: "Yes, I'm good at that.", why: "Accepts credit that may not be due." },
              { text: "It was nothing.", why: "Polite, but it loses the information about who found it." }
            ] },
          { who: "priya", say: "Was the analysis done independently?",
            options: [
              { text: "It was — by a group in Leeds.", correct: true, why: "Confirms the passive and supplies the agent, which here is the whole point." },
              { text: "Yes, we did it.", why: "That is the opposite of independent." },
              { text: "It analysed itself.", why: "Not possible." }
            ] },
          { who: "tomas", say: "So nobody's been able to reproduce it?",
            options: [
              { text: "Three groups have tried. None has.", correct: true, why: "Answers precisely, and distinguishes trying from succeeding." },
              { text: "Nobody could reproduce.", why: "Incomplete, and <i>could</i> is the wrong form after <i>has been</i>." },
              { text: "Yes, it's reproduced.", why: "Contradicts the question it appears to confirm." }
            ] },
          { who: "mei", say: "The readings were taken every minute?",
            options: [
              { text: "Every thirty seconds, actually.", correct: true,
                why: "The rising tune makes a statement into a question; this answers the real one and corrects it." },
              { text: "Yes, they take them.", why: "Wrong tense and voice." },
              { text: "I'm taking them now.", why: "Answers about the present, not the method." }
            ] },
          { who: "dan", say: "If the method had been registered, nobody could object now.",
            options: [
              { text: "We should register the next one.", correct: true,
                why: "It was <b>not</b> registered and people <b>are</b> objecting. Only this reply follows." },
              { text: "Good thing it was registered.", why: "The counterfactual says it was not." },
              { text: "So nobody objects.", why: "The opposite of what is implied." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students after a seminar. Listen once.",
        speaker: "priya", speakerNote: "with Tomás Ferreira",
        audio: { track: "11-05", label: "After the seminar", lines: [
          { who: "tomas", text: "Your point about the denominator went down well. Haddad wrote it on the board." },
          { who: "priya", text: "That wasn't mine, though. Mei made it last week and I just repeated it." },
          { who: "tomas", text: "Did she? I don't remember that." },
          { who: "priya", text: "She said it quietly, right at the end, and nobody picked it up. Which is sort of the problem." },
          { who: "tomas", text: "Then say so on Thursday. It costs you nothing and it costs her a lot not to." }
        ] },
        items: [
          { q: "What is Priya's position?",
            options: [
              { text: "The idea she was praised for was Mei's.", correct: true, why: "She corrects the credit immediately and names the source." },
              { text: "She does not understand the point.", why: "She explains it well enough to repeat it." },
              { text: "Tomás made the point.", why: "He is the one giving the praise." }
            ] },
          { q: "Why does she say <i>which is sort of the problem</i>?",
            options: [
              { text: "Because a point made quietly can be lost and later credited elsewhere.", correct: true,
                why: "She has just explained that Mei said it quietly and nobody picked it up — the generalisation follows from that." },
              { text: "Because the seminar was too long.", why: "Length is not mentioned." },
              { text: "Because Haddad was not listening.", why: "Haddad wrote it on the board, so she was." }
            ] },
          { q: "What does Tomás suggest?",
            options: [
              { text: "That Priya credit Mei publicly on Thursday.", correct: true,
                why: "<i>Say so on Thursday</i>, with the asymmetry of cost as his reason." },
              { text: "That she say nothing, to avoid embarrassment.", why: "He argues the other way." },
              { text: "That she ask Haddad to correct the record.", why: "He puts it on Priya, not on the lecturer." }
            ] },
          { q: "What is his argument for doing it?",
            options: [
              { text: "The cost to Priya is nothing and the cost to Mei is large.", correct: true,
                why: "He states the asymmetry explicitly, which is what makes it an argument rather than an appeal." },
              { text: "That it is a rule of the seminar.", why: "No rule is mentioned." },
              { text: "That Mei will find out anyway.", why: "He never raises discovery." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "The tune carries meaning on its own. A <b>rising</b> end makes a statement into a question or signals you have not finished; a <b>falling</b> end closes it.",
        speaker: "haddad",
        lines: [
          { text: "The readings were taken every minute.",
            note: "Falling: a statement. Rising: a question, with not a word changed." },
          { text: "It was carried out independently, wasn't it?",
            note: "A falling tag expects agreement; a rising tag genuinely asks." },
          { text: "Three groups have tried, and none has succeeded.",
            note: "Rising on <i>tried</i> says more is coming; falling on <i>succeeded</i> closes it." },
          { text: "If the method had been registered beforehand, none of this would be in dispute.",
            note: "Rising through the conditional clause, falling on the main clause — the tune marks the structure." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … redirect credit accurately · use the passive without an agent · hear a question in the tune alone.</p>" } }
    ]
  };
})();
