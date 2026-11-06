/* Unit 2 · Climate and Prediction — LESSON 4 · EVERYDAY CONVERSATION
   Social Interpersonal. Pronunciation: j and ch. */
(function () {
  window.PAGE = {
    id: "u02-l4", unit: "u02", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Make plans, and say what you would rather do",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I'd rather not, if that's all right.</i><i>Either works for me.</i><i>Let's see what the forecast says.</i>" },
        items: [
          { who: "priya", say: "Are you coming on the field trip?",
            options: [
              { text: "Yes, I signed up last week.", correct: true, why: "Answers the yes/no question and adds a detail." },
              { text: "It's a long way.", why: "Comments on the trip without answering." },
              { text: "I came yesterday.", why: "Hears <i>coming</i> and answers about the past." }
            ] },
          { who: "dan", say: "What time are we leaving?",
            options: [
              { text: "Half past seven, from the main gate.", correct: true, why: "A time, which is what <i>what time</i> asks." },
              { text: "By minibus.", why: "Answers <i>how</i>, not <i>when</i>." },
              { text: "Yes, we are.", why: "A <i>wh-</i> question takes information, not yes or no." }
            ] },
          { who: "mei", say: "Shall we go on Thursday or Friday?",
            options: [
              { text: "I'd rather go Friday, if that's all right.", correct: true,
                why: "Chooses one and softens it — the preference form this unit teaches." },
              { text: "Yes, let's.", why: "An either/or question cannot be answered yes." },
              { text: "We went on Friday.", why: "Past tense for a question about the future." }
            ] },
          { who: "tomas", say: "Do you think it'll rain?",
            options: [
              { text: "Probably, by the afternoon.", correct: true, why: "A hedged prediction, which is what the question invites." },
              { text: "It rained a lot.", why: "Answers about the past." },
              { text: "I'm going to rain.", why: "Not possible — and the wrong subject." }
            ] },
          { who: "dan", say: "I'll bring the cold box.",
            options: [
              { text: "Great — I'll bring the batteries, then.", correct: true,
                why: "Recognises an offer and matches it with another. <i>Then</i> marks the coordination." },
              { text: "You brought it already?", why: "<i>I'll</i> is an undertaking about the future, not a report." },
              { text: "Would you rather I did?", why: "Odd: they have just volunteered." }
            ] },
          { who: "priya", say: "We'd have got there in time if we'd left at seven.",
            options: [
              { text: "Next time let's make it seven, then.", correct: true,
                why: "The speaker is saying they did <b>not</b> leave at seven and were late. Only this reply acts on that." },
              { text: "Good thing we left at seven.", why: "They did not. The counterfactual says so." },
              { text: "So we arrived on time.", why: "The opposite of what the sentence means." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students settling the arrangements. Listen once.",
        speaker: "tomas", speakerNote: "with Priya Raman",
        audio: { track: "2-04", label: "Settling the trip", lines: [
          { who: "priya", text: "So are we going Thursday or Friday?" },
          { who: "tomas", text: "Thursday was the plan, but the forecast has changed. There's heavy rain coming in after midday." },
          { who: "priya", text: "We could go early and be back before it starts." },
          { who: "tomas", text: "We could. Though site three is by the river, and if it rains overnight on Wednesday the path will already be under water." },
          { who: "priya", text: "Then I'd rather move the whole thing to Friday and do all three properly." },
          { who: "tomas", text: "Agreed. I'll email the group tonight." }
        ] },
        items: [
          { q: "What were they originally going to do?",
            options: [
              { text: "Go on Thursday.", correct: true, why: "“Thursday was the plan” — the past form marks it as the earlier decision." },
              { text: "Go on Friday.", why: "That is what they decide at the end, not what was planned." },
              { text: "Visit only site three.", why: "Three sites are in question throughout." }
            ] },
          { q: "Why does Tomás mention Wednesday night?",
            options: [
              { text: "To show that going early on Thursday would not solve the problem.", correct: true,
                why: "Priya's suggestion was to beat the rain; he points out the path may already be flooded. That is his purpose." },
              { text: "To suggest going on Wednesday instead.", why: "He never proposes Wednesday as a trip day." },
              { text: "To explain why site three was chosen.", why: "No reason for choosing it is given." }
            ] },
          { q: "What does Priya say she would rather do?",
            options: [
              { text: "Move everything to Friday and do all three sites.", correct: true,
                why: "“I'd rather move the whole thing to Friday and do all three properly.”" },
              { text: "Drop site three.", why: "She wants all three — that is her reason for moving the day." },
              { text: "Go early on Thursday.", why: "That was her first suggestion, which she then withdraws." }
            ] },
          { q: "What will happen tonight?",
            options: [
              { text: "Tomás will email the group.", correct: true, why: "His last line is a promise, in <i>will</i>." },
              { text: "They will check the forecast again.", why: "Not mentioned." },
              { text: "They will visit site three.", why: "The trip is now on Friday." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "This unit's sounds are <b>j</b> /dʒ/ and <b>ch</b> /tʃ/. They differ only in voicing, and English keeps them apart.",
        speaker: "haddad",
        lines: [
          { text: "The change was major.", note: "<i>change</i> /tʃ/, <i>major</i> /dʒ/ — both in four words." },
          { text: "We chose a cheaper journey and charged it to the project.",
            note: "/tʃ/ in <i>chose, cheaper, charged</i>; /dʒ/ in <i>journey, project</i>." },
          { text: "If the project changes, the budget will change too.",
            note: "Dependent clause, and the same pair twice." },
          { text: "The researchers who challenged the projection published a much larger adjustment.",
            note: "Relative clause plus a complex noun phrase — the top of this task's range." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … make a plan · state a preference · hear <i>ch</i> against <i>j</i>.</p>" } }
    ]
  };
})();
