/* Unit 5 · Exploring Space — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: I'm, I'd and I'll. */
(function () {
  window.PAGE = {
    id: "u05-l4", unit: "u05", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask what has been done, and offer to do the rest",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        concepts: ["listen"],
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

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Two of them turn on hearing which contraction was used.",
        items: [
          { who: "mei", say: "I'll take the first half of the night.",
            options: [
              { text: "Then I'll take the second.", correct: true,
                why: "<i>I'll</i> is an undertaking made now; the reply matches it with another." },
              { text: "When did you take it?", why: "Treats an offer about tonight as a report about the past." },
              { text: "Would you rather not?", why: "They have just volunteered, so this reads as doubting them." }
            ] },
          { who: "dan", say: "I'd take the first half, if nobody else wants it.",
            options: [
              { text: "Go ahead — nobody has claimed it.", correct: true,
                why: "<i>I'd</i> here is <i>I would</i>: a conditional offer, so the reply removes the condition." },
              { text: "So you took the first half.", why: "<i>I'd take</i> is not a report; nothing has been taken yet." },
              { text: "When had you taken it?", why: "Reads <i>I'd</i> as <i>I had</i>, which the following verb rules out." }
            ] },
          { who: "priya", say: "Has the dome been booked yet?",
            options: [
              { text: "Yes, I booked it this morning.", correct: true,
                why: "The question uses the present perfect; the answer supplies the occasion in the simple past, which is the normal pattern." },
              { text: "Yes, I have booked it this morning.", why: "<i>This morning</i> is a finished window, so the present perfect cannot stay." },
              { text: "No, I am booking it yesterday.", why: "Two errors: the tense and the time." }
            ] },
          { who: "tomas", say: "Have you ever used the spectrograph?",
            options: [
              { text: "Once, in my second year.", correct: true,
                why: "<i>Ever</i> opens the whole of time up to now; the answer narrows it to one occasion." },
              { text: "I use it tomorrow.", why: "The question is about experience, not the timetable." },
              { text: "Yes, it is very good.", why: "Reviews the instrument instead of answering." }
            ] },
          { who: "haddad", say: "We've lost three nights to cloud this month.",
            options: [
              { text: "Is there any slack left in the schedule?", correct: true,
                why: "<i>This month</i> is still open, so the losses are still accumulating — and the useful reply is about what remains." },
              { text: "Which three nights will you lose?", why: "They have been lost already; the present perfect says so." },
              { text: "So the month went well.", why: "The opposite of what was said." }
            ] },
          { who: "dan", say: "I'd have asked for the later slot if I'd known it was free.",
            options: [
              { text: "It is free next week as well, if you want it.", correct: true,
                why: "He did <b>not</b> ask and did <b>not</b> know. Only this reply works from that and offers a way out." },
              { text: "Good, so you have the later slot.", why: "He does not: the asking never happened." },
              { text: "You knew it was free, then.", why: "The counterfactual says exactly the opposite." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference"],
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

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen", "measurement"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students deciding what to put in a project report. Listen once.",
        speaker: "mei", speakerNote: "with Tomás Beltrán",
        audio: { track: "5-05", label: "What counts as a detection", lines: [
          { who: "mei", text: "We have eleven candidates. Four of them are strong." },
          { who: "tomas", text: "Do we report eleven or four?" },
          { who: "mei", text: "If we say eleven, the number looks better and half of them will not survive follow-up." },
          { who: "tomas", text: "And if we say four, somebody else confirms the other seven next year and we look as though we missed them." },
          { who: "mei", text: "Then we report four as detections and eleven as candidates, and we say what the difference is." },
          { who: "tomas", text: "That is more work and nobody can accuse us of either." }
        ] },
        items: [
          { q: "How many of the eleven does Mei call strong?",
            options: [
              { text: "Four.", correct: true, why: "Her first turn gives both numbers, and the whole conversation hangs on the gap between them." },
              { text: "Eleven.", why: "That is the total, including the weak ones." },
              { text: "Seven.", why: "That is the remainder, which Tomás mentions later." }
            ] },
          { q: "What is the risk of reporting eleven?",
            options: [
              { text: "About half will not survive follow-up.", correct: true,
                why: "Mei names the cost in the same breath as the benefit: <i>the number looks better and half of them will not survive</i>." },
              { text: "The work would take too long.", why: "Effort is Tomás's objection to the final plan, not to this option." },
              { text: "Somebody else would confirm them first.", why: "That is the risk of reporting only four." }
            ] },
          { q: "What does Tomás say would happen if they reported only four?",
            options: [
              { text: "Another group might confirm the rest and they would look as if they had missed them.", correct: true,
                why: "A reputational risk rather than a scientific one, which is why it is worth stating out loud." },
              { text: "The seven would never be found.", why: "He assumes they would be found, by somebody else." },
              { text: "The four would be challenged.", why: "The four are the secure ones in his account." }
            ] },
          { q: "What do they settle on?",
            options: [
              { text: "Report four detections and eleven candidates, and define the difference.", correct: true,
                why: "Mei proposes it and Tomás accepts it with the cost attached: more work, and no grounds for either accusation." },
              { text: "Report eleven detections.", why: "That is the option whose cost they have just spelled out." },
              { text: "Wait for follow-up before reporting anything.", why: "Delay is never proposed." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
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
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more. The whole difference between a promise, a preference and a report is one consonant at the end of one syllable.",
        speaker: "haddad",
        lines: [
          { text: "I'm here. I'll wait. I'd rather not.",
            note: "Three short sentences, three different words. Say them slowly, then at speed." },
          { text: "I'd already sent it when I'll admit I should have checked.",
            note: "<i>I'd</i> is <i>I had</i> here, because <i>sent</i> follows. The test is always what comes next." },
          { text: "I'm not sure I'll have finished by Monday.",
            note: "<i>I'm</i> for the state, <i>I'll</i> for the future, inside a single clause." },
          { text: "I'll say now that I'd have booked the later slot if I'd realised it was still free.",
            note: "All three, with two of the <i>I'd</i>s being different words. The top of this task's range." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>These are not sounds in isolation: they are whole words reduced almost to nothing, and the only thing left is the final consonant. <b>I'm</b> ends in a hum through the nose. <b>I'll</b> ends with the tongue on the ridge behind the teeth. <b>I'd</b> ends with a tap in the same place, released. The vowel is identical in all three.</p>" +
               "<i>I'm = I am · a state</i><i>I'll = I will · a promise</i><i>I'd = I would, or I had · a condition or a past</i>",
        items: [
          { say: "I'll",
            options: [
              { text: "I'll", correct: true, why: "/l/ — the tongue stays on the ridge and the sound can be held." },
              { text: "I'd", why: "/d/ — the tongue touches the same place and releases at once." }
            ] },
          { say: "I'm",
            options: [
              { text: "I'd", why: "/d/ — made with the tongue, not the lips, and the mouth is open at the end." },
              { text: "I'm", correct: true, why: "/m/ — the lips close and the sound comes down the nose." }
            ] },
          { say: "I'd",
            options: [
              { text: "I'd", correct: true, why: "/d/ — a single tap. In fast speech it is almost all that survives of <i>would</i> or <i>had</i>." },
              { text: "I'll", why: "/l/ — held, not tapped. This is the pair that changes a condition into a promise." }
            ] },
          { say: "I'll",
            options: [
              { text: "I'm", why: "/m/ — lips closed. A state rather than an undertaking." },
              { text: "I'll", correct: true, why: "/l/ — and getting this wrong turns <i>I will send it</i> into <i>I am sending it</i>, which is a different commitment." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Write the contractions as you hear them, with the apostrophe.",
        items: [
          { answer: "I'll take the second half of the night",
            why: "<i>I'll</i> rather than <i>I</i>: the /l/ is short but it is there, and it makes this a promise." },
          { answer: "I'd rather wait until the cloud clears",
            why: "<i>I'd</i> here is <i>I would</i>, which the bare infinitive after <i>rather</i> tells you." },
          { answer: "I'm not sure the dome has been booked yet",
            why: "Three unstressed syllables in a row — <i>sure the dome</i> — and <i>yet</i> at the end marks the negative." },
          { answer: "We have already lost three nights to cloud",
            why: "<i>have already</i> often reduces to something like <i>veralready</i>; write both words out." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask with <i>yet</i> · answer with <i>already</i> · keep <i>I'd</i> and <i>I'll</i> apart.</p>" } }
    ]
  };
})();
