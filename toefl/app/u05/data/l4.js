/* Unit 5 · Exploring Space — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: I'm, I'd and I'll. */
(function () {
  window.PAGE = {
    id: "u05-l4", unit: "u05", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask what has been done, and offer to do the rest",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>Not yet, no.</i><i>Already done.</i><i>I'll do that now.</i>" },
        items: [
          { who: "mei", say: "Have you booked the dome?",
            options: [
              { text: "Not yet — I'll do it this afternoon.", correct: true, why: "<i>Not yet</i> is the natural partner, and the offer closes the gap." },
              { text: "Yes, I book it.", why: "Present simple for a completed action." },
              { text: "I booked it never.", why: "<i>Never</i> does not sit there in English." }
            ] },
          { who: "dan", say: "Have you ever worked a night shift?",
            options: [
              { text: "No, never. This will be the first.", correct: true, why: "<i>Never</i> answers <i>ever</i>, and the second clause adds what the asker wanted to know." },
              { text: "Yes, tomorrow.", why: "<i>Yes</i> claims experience, then puts it in the future." },
              { text: "I work it every night.", why: "Answers about habit, not experience." }
            ] },
          { who: "priya", say: "Has anyone sent the observing plan?",
            options: [
              { text: "Tomás already has, I think.", correct: true, why: "<i>Already</i> with the auxiliary standing in for the whole verb phrase." },
              { text: "Yes, nobody has.", why: "Contradicts itself." },
              { text: "He sends it yet.", why: "<i>Yet</i> does not go in a positive statement." }
            ] },
          { who: "tomas", say: "The forecast has changed again.",
            options: [
              { text: "Has it? Let me look.", correct: true, why: "Echo question with the auxiliary — the standard way to show you registered the news." },
              { text: "Did it change?", why: "Possible, but it shifts out of the present perfect the speaker chose." },
              { text: "It changes yet.", why: "Not a grammatical use of <i>yet</i>." }
            ] },
          { who: "mei", say: "I'd rather not take the early slot.",
            options: [
              { text: "That's fine — I'll take it.", correct: true, why: "Hears a preference and resolves it with an offer in <i>will</i>." },
              { text: "You took it already.", why: "The speaker is declining, not reporting." },
              { text: "I'd rather you did.", why: "Grammatical, but it refuses the preference without offering anything." }
            ] },
          { who: "dan", say: "We'd have seen the transit if the cloud had cleared.",
            options: [
              { text: "There's another one next month.", correct: true,
                why: "The cloud did <b>not</b> clear and they did <b>not</b> see it. Only this reply follows from that." },
              { text: "Good thing it cleared.", why: "The counterfactual says it did not." },
              { text: "So you saw it after all.", why: "The opposite of what the sentence means." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students sorting out a clash. Listen once.",
        speaker: "mei", speakerNote: "with Dan Okafor",
        audio: { track: "5-05", label: "Two groups, one dome", lines: [
          { who: "mei", text: "Have you heard about Tuesday? Both groups have been given the same slot." },
          { who: "dan", text: "I have, yes. Ours was rebooked after Monday was clouded out, and nobody checked." },
          { who: "mei", text: "Has anyone spoken to the technician yet?" },
          { who: "dan", text: "Not yet. I was going to suggest we take the second half — our targets don't rise until after midnight anyway." },
          { who: "mei", text: "That would suit us. Shall I write to him, or have you already?" },
          { who: "dan", text: "I haven't. Go ahead, and copy me in." }
        ] },
        items: [
          { q: "What is the problem?",
            options: [
              { text: "Two groups have the same observing slot.", correct: true, why: "Mei states it in her first line." },
              { text: "The dome is closed on Tuesday.", why: "It is open; it is double-booked." },
              { text: "The technician is unavailable.", why: "Nobody has spoken to him yet, which is different." }
            ] },
          { q: "Why does Dan suggest taking the second half?",
            options: [
              { text: "Their targets do not rise until after midnight.", correct: true,
                why: "He gives the reason himself, and <i>anyway</i> marks it as something true regardless of the clash." },
              { text: "The other group asked first.", why: "No priority is mentioned." },
              { text: "The telescope is better later.", why: "The telescope is not discussed." }
            ] },
          { q: "What has <i>not</i> happened yet?",
            options: [
              { text: "Nobody has written to the technician.", correct: true,
                why: "Mei asks with <i>yet</i>; Dan answers <i>not yet</i>, then confirms <i>I haven't</i>." },
              { text: "The dome has not been rebooked.", why: "It was rebooked — that is what caused the clash." },
              { text: "The targets have not risen.", why: "Not something that has or has not happened yet in this sense." }
            ] },
          { q: "Who will contact the technician?",
            options: [
              { text: "Mei, with Dan copied in.", correct: true, why: "She offers, he says go ahead and asks to be copied." },
              { text: "Dan, that evening.", why: "He explicitly says he has not and does not offer to." },
              { text: "Neither — they decided to wait.", why: "They agree it should be done now." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "<b>I'm</b>, <b>I'd</b> and <b>I'll</b> are easy to confuse and carry completely different meanings. Hear the consonant at the end.",
        speaker: "haddad",
        lines: [
          { text: "I'm ready. I'd rather wait. I'll go first.",
            note: "<i>I'm</i> = I am · <i>I'd</i> = I would · <i>I'll</i> = I will. Three words, three futures." },
          { text: "I'll send it tonight and I'm happy to copy you in.",
            note: "<i>I'll</i> for the undertaking, <i>I'm</i> for the state." },
          { text: "I'd have taken the later slot if I'd known it was free.",
            note: "<i>I'd</i> twice, and both are <i>I had</i> here, not <i>I would</i> — listen to what follows." },
          { text: "I'll admit I'd assumed the earlier slot was already taken by somebody else.",
            note: "All three contractions in one sentence, with a complex noun phrase at the end." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask with <i>yet</i> · answer with <i>already</i> · keep <i>I'd</i> and <i>I'll</i> apart.</p>" } }
    ]
  };
})();
