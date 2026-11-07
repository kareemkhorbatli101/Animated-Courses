/* Unit 9 · Meetings and Minutes — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u09-l4", unit: "u09", block: "l4", up: "../", tab: "AT WORK",
    objective: "Contribute to a meeting, and hear the vowel English throws away",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Taking part", letter: "A",
        concepts: ["listen", "people"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six moments in a meeting. Choose the reply that moves it forward.",
        note: { kind: "life", title: "Most of a meeting is procedure",
                body: "<p>Knowing the phrases for coming in, going back and closing an item is worth more than having opinions. A person who can run the procedure is useful in any meeting, including ones about things they know nothing about.</p>" },
        items: [
          { who: "nour", say: "Any matters arising from the last minutes?",
            options: [
              { text: "Yes — the generator service was agreed and has not been booked.", correct: true,
                why: "Names the action and its status. That is exactly what matters arising is for." },
              { text: "No, I think everything is fine.", why: "An action was outstanding, and the item exists to catch it." },
              { text: "Can we come back to that?", why: "This is the coming back to it." } ] },
          { who: "lina", say: "Sorry, could I come in on that?",
            options: [
              { text: "Go ahead.", correct: true, why: "The chair's job: let people in, briefly and clearly." },
              { text: "In a moment.", why: "Acceptable if the current speaker is mid-point, and a bare <i>in a moment</i> with no return is how people stop trying." },
              { text: "Is it relevant?", why: "Asks her to justify speaking before she has spoken." } ] },
          { who: "fadi", say: "I think we are going round in circles.",
            options: [
              { text: "We are. Shall we carry it forward and take the decision next week?", correct: true,
                why: "Agrees and proposes the mechanism. Naming the procedure is how a circular discussion ends." },
              { text: "Let us keep going.", why: "Ten more minutes of the same." },
              { text: "Whose fault is that?", why: "Turns a procedural observation into a personal one." } ] },
          { who: "nour", say: "So are we agreed on moving dyeing to mornings?",
            options: [
              { text: "Agreed. Barakat to book the service by Wednesday.", correct: true,
                why: "Confirms and immediately attaches the action, with a name and a date." },
              { text: "It sounds sensible.", why: "Sounds like agreement and is not recorded as any." },
              { text: "If everyone else is.", why: "Waits for a consensus that each person is also waiting for." } ] },
          { who: "lina", say: "Can we park the dye supplier question?",
            options: [
              { text: "Yes — shall I put it on next month's agenda?", correct: true,
                why: "Parking something without scheduling it is how an item disappears for a year." },
              { text: "Fine.", why: "Parked, and never picked up." },
              { text: "No, let us settle it now.", why: "Possible, and worth a reason if the meeting is already over time." } ] },
          { who: "nour", say: "Anything under any other business?",
            options: [
              { text: "One thing, and it will take a minute.", correct: true,
                why: "Signals the size before starting. AOB expands to fill whatever is left otherwise." },
              { text: "Yes, several things.", why: "AOB is a safety valve, not a second agenda." },
              { text: "It can wait until next time.", why: "Fine, unless it cannot — in which case say it in a minute." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Taking part", letter: "B",
        concepts: ["listen", "place"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more, this time finding your way in an unfamiliar building.",
        items: [
          { who: "ziad", say: "Can I help you?",
            options: [
              { text: "Yes — I have a meeting with Ms Darwish at ten. Which floor?", correct: true,
                why: "Who, when, and the one question you need. Reception can answer all three in a sentence." },
              { text: "I am looking for someone.", why: "True, and it makes them ask three more questions." },
              { text: "No thank you.", why: "Declines the only help available." } ] },
          { who: "ziad", say: "Third floor, turn right out of the lift.",
            options: [
              { text: "Third, right out of the lift. Thank you.", correct: true,
                why: "Reads it back — Unit 6's habit, used in ten seconds on a stranger." },
              { text: "Thank you.", why: "Polite, and nothing has been checked." },
              { text: "Is there a lift?", why: "They have just mentioned one." } ] },
          { who: "ziad", say: "You will need a visitor badge.",
            options: [
              { text: "Of course. Do I sign in here or upstairs?", correct: true,
                why: "Accepts and asks the procedural question before walking to the wrong place." },
              { text: "I was not told that.", why: "Argues with a rule the person at the desk did not make." },
              { text: "I will get one later.", why: "Usually not possible, and it is their job to stop you." } ] },
          { who: "ziad", say: "She is in a meeting — it may overrun.",
            options: [
              { text: "I am happy to wait. Is there somewhere I can sit?", correct: true,
                why: "Accepts without complaint and asks for the practical thing." },
              { text: "We agreed ten o'clock.", why: "Accurate and unhelpful to the person telling you." },
              { text: "Shall I come back?", why: "Possible, and it gives up a slot you have travelled for." } ] },
          { who: "ziad", say: "Do you know where the stairs are?",
            options: [
              { text: "No — could you point me?", correct: true,
                why: "A plain no and a request. Pretending to know is how people arrive late and in the wrong place." },
              { text: "I will find them.", why: "Declines help that was offered for free." },
              { text: "Yes, I think so.", why: "<i>I think so</i> is the most expensive two words in an unfamiliar building." } ] },
          { who: "ziad", say: "Sign here, and the badge goes back on your way out.",
            options: [
              { text: "On the way out, at this desk?", correct: true,
                why: "Checks where, not just that. Buildings have more than one exit." },
              { text: "Understood.", why: "Half the instruction confirmed." },
              { text: "Can I keep it?", why: "No, and it is not a useful question." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a meeting", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "The operations meeting. Fill in the minutes form as you listen.",
        audio: { track: "u09-meeting", label: "Operations meeting, Monday",
          lines: [
            { who: "nour", text: "Present: four of us. Apologies from Darwish. Minutes of the last meeting — any corrections? No. Agreed as accurate. Matters arising." },
            { who: "lina", text: "The generator service was agreed on the fourth and has not been booked." },
            { who: "fadi", text: "That is mine. I will book it by Wednesday." },
            { who: "nour", text: "Action: Barakat to book the generator service by Wednesday. Item three, Levant Home terms." },
            { who: "samer", text: "They have signed, with clause two reversed as we asked. The signature copy is in my file." },
            { who: "nour", text: "Noted and carried. Item four, a second dye supplier." },
            { who: "lina", text: "I raised it because everything goes through Homs. If they stop, we stop." },
            { who: "samer", text: "I agree in principle and I do not know who the second one would be." },
            { who: "fadi", text: "Nor do I. It would take months to qualify one." },
            { who: "nour", text: "So two views: it is necessary, and it is not available quickly. Nothing is going to be decided today. Can we carry it forward with something attached?" },
            { who: "lina", text: "Put a name on finding out who exists. That is not the same as choosing one." },
            { who: "samer", text: "I will do that. Three names by the April meeting." },
            { who: "nour", text: "Action: Khoury to bring three possible dye suppliers to the April meeting. Any other business?" },
            { who: "fadi", text: "One minute. The visitor badges have run out." },
            { who: "nour", text: "Action: Al-Masri to order badges. Next meeting, the first Monday in April." } ] },
        title: "Minutes — operations, Monday",
        lines: [
          "Apologies from ___ ",
          "Minutes of the last meeting agreed as ___ ",
          "Matters arising: the generator service had not been ___ ",
          "ACTION: Barakat to book it by ___ ",
          "Levant Home have signed with clause ___ reversed",
          "Second dye supplier: ___ was decided today",
          "ACTION: Khoury to bring ___ possible suppliers to April",
          "Next meeting: the first Monday in ___ "
        ],
        gaps: [
          { answer: "Darwish", why: "The first item, and the only name recorded in it." },
          { answer: "accurate", why: "The fixed phrase, and it is said after the corrections question gets no answer." },
          { answer: "booked", why: "Agreed on the fourth and not done — which is exactly what matters arising exists to catch." },
          { answer: "Wednesday", why: "The date Fadi offers himself, which is what makes it a real action point." },
          { answer: "two", why: "The order of precedence from Unit 7, now settled." },
          { answer: "nothing", why: "Recorded as a non-decision, because writing it down stops it reappearing as though settled." },
          { answer: "three", why: "A number attached to a vague task, which is what turns it into an action." },
          { answer: "April", why: "Fixed in the room, which is the only way it takes less than a week." }
        ],
        note: { kind: "life", title: "She separated two things",
                body: "<p>Nobody could choose a second dye supplier, so choosing one was not the action. Finding out who exists was. Splitting an impossible task into a possible first step is the most useful thing a chair does.</p>" },
        explain: { terms: [
          { en: "in principle", gloss: "agreeing with the idea, not yet with the detail", ar: "من حيث المبدأ" },
          { en: "to qualify a supplier", gloss: "to check and approve them before using them", ar: "اعتماد مورِّد" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>English throws away most of its unstressed vowels and replaces them with one neutral sound, the schwa. It is the commonest vowel in the language and it is never written.</p><p><em>agenda</em> is <b>uh-JEN-duh</b> — two schwas around one strong syllable. <em>supplier</em> is <b>suh-PLY-uh</b>.</p><p>Pronouncing every vowel fully is the single clearest marker of a learner, and it makes you harder to follow, not easier.</p>",
        items: [
          { say: "agenda", options: [
            { text: "agenda", correct: true, why: "<i>uh-JEN-duh</i>. One strong syllable in the middle and two schwas." },
            { text: "a-gen-da", why: "Three full vowels. Understandable, and it makes the word twice as long as the listener expects." } ] },
          { say: "supplier", options: [
            { text: "supplier", correct: true, why: "<i>suh-PLY-uh</i>. The first and last vowels both vanish into schwa." },
            { text: "sup-pli-er", why: "Every vowel pronounced. The stress then has nowhere to land." } ] },
          { say: "apologies", options: [
            { text: "apologies", correct: true, why: "<i>uh-POL-uh-jeez</i>. Two schwas, one strong syllable, one clear final sound." },
            { text: "a-po-lo-gies", why: "Four equal syllables, which is the opposite of what English does." } ] },
          { say: "the minutes of the meeting", options: [
            { text: "the minutes of the meeting", correct: true, why: "<i>thuh MIN-its uhv thuh MEE-ting</i>. Both <i>the</i> and <i>of</i> reduce to almost nothing." },
            { text: "the minutes of the meeting, fully", why: "Pronouncing <i>of</i> as a full word slows the phrase and signals a reading voice rather than a speaking one." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Let the unstressed vowels disappear.",
        speaker: "lina",
        lines: [
          "Apologies were received and the agenda was circulated.",
          "The supplier and the distributor were both at the meeting.",
          "The minutes of the last meeting were agreed as accurate.",
          "A decision about a second supplier was carried forward."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the meeting in 2A.",
        items: [
          { answer: "The minutes of the last meeting were agreed as accurate.",
            why: "Four schwas in one sentence, and none of them written." },
          { answer: "The generator service was agreed and has not been booked.",
            why: "The sentence matters arising exists to produce." },
          { answer: "It is necessary and it is not available quickly.",
            why: "Both positions recorded without either person being named." },
          { answer: "Nothing is going to be decided today.",
            why: "<i>Going to</i> from Unit 2, used by a chair to close an item honestly." },
          { answer: "Khoury to bring three possible suppliers to April.",
            why: "Telegraphic action form: name, task, number, date, no verb of agreement." }
        ],
        closer: "<p>Count the schwas in the first of those sentences: <i>thuh MIN-its uhv thuh LAHST MEE-ting wuh uh-GREED uhz AK-yuh-rit</i>. Eight syllables carry almost no vowel at all.</p>" }

    ]
  };
})();
