/* Unit 9 · Meetings and Minutes — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u09-tw", unit: "u09", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the minutes and the chasing note, and answer about meetings",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two documents", letter: "A",
        concepts: ["write", "people"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the minutes of the March meeting for circulation. Sixty to eighty words.",
        scenarioTitle: "Minutes, 4 March",
        scenario: "Present: Haddad, Khoury, Al-Masri, Barakat. Apologies: Darwish. Last minutes agreed. Generator service not booked — Barakat by Wednesday. Levant Home signed with clause 2 reversed. Second dye supplier: agreed in principle, no decision, Khoury to bring three names to April. Badges: Al-Masri to order.",
        to: "All present, and Darwish",
        re: "Minutes — operations, 4 March",
        placeholder: "",
        minWords: 60,
        frames: [
          "Present: … Apologies: …",
          "Minutes of the last meeting agreed as accurate.",
          "Matters arising: … ACTION: …",
          "… : noted and carried.",
          "… : agreed in principle; no decision taken. ACTION: …"
        ],
        note: { kind: "writer", title: "Three shapes, nothing else",
                body: "<p>Decision in the passive, action telegraphically with a name and a date, non-decision recorded as one. If a sentence is none of those three, ask whether it belongs.</p>" },
        checklist: [
          "Are attendance and apologies recorded?",
          "Does every action have a name and a date?",
          "Is the non-decision recorded as a non-decision?",
          "Have you avoided recording who argued for what?",
          "Is the next meeting fixed?"
        ],
        modelJobs: [
          "Attendance",
          "Last minutes",
          "Matters arising, with action",
          "Items, with decisions",
          "The non-decision, with its action"
        ],
        model: "Present: Haddad, Khoury, Al-Masri, Barakat. Apologies: Darwish.\n\nMinutes of the last meeting agreed as accurate.\n\nMatters arising: the generator service agreed on 4 February had not been booked. ACTION: Barakat to book it by Wednesday.\n\nLevant Home annual terms: signed by the client with clause 2 reversed. Noted and carried.\n\nSecond dye supplier: agreed in principle that one is necessary; no decision was taken. ACTION: Khoury to bring three possible suppliers to the April meeting.\n\nACTION: Al-Masri to order visitor badges.\n\nNext meeting: first Monday in April." },

      { id: "1b", section: 1, sectionTitle: "Write the two documents", letter: "B",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Chase an action point that has slipped twice. Sixty to eighty words, and keep it civil.",
        scenarioTitle: "The third time",
        scenario: "The generator service was agreed in February, not booked, re-set for Wednesday, and it is now Friday. Barakat owns it. You are the chair. He has had a difficult fortnight and this is the only thing he has dropped.",
        to: "Fadi Barakat",
        re: "Generator service",
        placeholder: "Fadi,\n\n",
        minWords: 60,
        frames: [
          "The generator service was set for … and it is now …",
          "I am not asking why — …",
          "What I need is …",
          "If something is in the way, …",
          "It goes in the April minutes as …"
        ],
        note: { kind: "writer", title: "Chase the action, not the person",
                body: "<p>Give the dates, ask for the next step, and offer a route if something is blocking it. A chase that opens with <em>why has this not been done</em> gets an explanation; one that asks for a date gets a date.</p>" },
        checklist: [
          "Are the two dates given plainly?",
          "Have you avoided asking for an explanation?",
          "Is there one specific request?",
          "Have you offered help if something is blocking it?",
          "Have you said what happens next either way?"
        ],
        modelJobs: [
          "States the facts",
          "Declines to ask why",
          "Makes one request",
          "Offers a route if blocked",
          "Says what happens next"
        ],
        model: "Fadi,\n\nThe generator service was agreed on 4 February, re-set for Wednesday, and it is now Friday.\n\nI am not asking why — you have had a hard fortnight and this is the only thing that has slipped.\n\nWhat I need is a booking reference, or a date when you will have one, by Monday morning.\n\nIf something is in the way — the engineer, the cost, anything — tell me and I will take it on. It is easier for me to deal with than for you.\n\nEither way it goes in the April minutes, so I would rather it went in as done.\n\nNour" },

      { id: "2a", section: 2, sectionTitle: "Answer about meetings", letter: "A",
        concepts: ["speak", "people"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "What makes a meeting useful?",
        model: "An agenda that went out beforehand, with each item marked for what it needs — decision, discussion or information. People prepare differently when they know which it is. Then a chair who closes each item rather than letting it drift, and who is willing to say that nothing is going to be decided today. And minutes within two days that record decisions rather than discussion, with a name and a date on every action. The thing that wastes most time is not long discussions; it is items coming back a second time because nobody wrote down what happened to them." },

      { id: "2b", section: 2, sectionTitle: "Answer about meetings", letter: "B",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Have you ever taken minutes? What did you learn?",
        model: "Yes, for about two years. What I learned is that minutes record what was decided, not what was said. Nobody ever reads a transcript, and a decision with no record gets taken again six months later. Almost every minute I wrote was one of three shapes: a decision in the passive, so it belongs to the room rather than to whoever argued for it; an action with a name and a date; or a line saying an item was discussed and nothing was decided, which stops it coming back as though it had been settled." },

      { id: "2c", section: 2, sectionTitle: "Answer about meetings", letter: "C",
        concepts: ["speak", "place"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you find your way in a building you have never visited?",
        model: "I tell the person at the desk that I have not been there before, which changes the version of the directions I get. Then I say them back — floor, direction, door — and I keep the negative, because directions almost always contain one thing to avoid and that is the part people drop. I ask what to do if the person I am meeting is not there, which usually produces somewhere better to wait than a corridor. It takes about forty seconds and it means I arrive once instead of twice." },

      { id: "2d", section: 2, sectionTitle: "Answer about meetings", letter: "D",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Should everything be written down, or do some things work better spoken?",
        model: "Decisions and actions get written down, always, because memories differ within about a fortnight and nobody argues with a document circulated two days afterwards. What I would not write down is who argued for what. Minutes that record positions make people careful about speaking, and a meeting where people are careful about speaking is a meeting that produces nothing. So the rule I use is that the outcome is written and the discussion is not. The one exception is when nothing was decided, and then I write that down too." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "time"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right after a negative?", from: "Lesson 3", recall: true,
            options: [
              { text: "Barakat did not object and Darwish did not either.", correct: true,
                why: "<i>Either</i> follows a negative." },
              { text: "Barakat did not object and Darwish did not too.", why: "<i>Too</i> belongs with positives." },
              { text: "Barakat did not object and neither did not Darwish.", why: "<i>Neither</i> already carries the negative." } ] },
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "Khoury supported it and so did Al-Masri.", correct: true,
                why: "<i>So did X</i> inverts subject and auxiliary after a positive." },
              { text: "Khoury supported it and so Al-Masri did.", why: "The inversion is compulsory in this structure." },
              { text: "Khoury supported it and also did Al-Masri.", why: "<i>Also</i> does not invert." } ] },
          { q: "What does <i>agreed in principle</i> mean?", from: "Lesson 5", recall: true,
            options: [
              { text: "The idea is accepted; the detail is not decided.", correct: true,
                why: "And it often appears in the same minute as <i>no decision was taken</i>." },
              { text: "It has been approved.", why: "Approval would be a decision." },
              { text: "It has been rejected.", why: "The opposite." } ] },
          { q: "An action point has a date but no name. What should happen?", from: "Lesson 1", recall: true,
            options: [
              { text: "It is removed before the minutes go out.", correct: true,
                why: "Both are required, and one alone belongs to nobody." },
              { text: "The chair takes it.", why: "Not a rule anywhere in this unit." },
              { text: "It stays as a reminder.", why: "Four meetings of evidence say it will be carried forward forever." } ] },
          { q: "How is <i>agenda</i> pronounced?", from: "Lesson 4", recall: true,
            options: [
              { text: "uh-JEN-duh — two schwas and one strong syllable.", correct: true,
                why: "The commonest vowel in English, and it is never written." },
              { text: "a-gen-da, three full vowels.", why: "Understandable, and twice as long as a listener expects." },
              { text: "AG-en-da.", why: "The stress is on the second syllable." } ] },
          { q: "What is the most useful thing to say at an unfamiliar reception desk?", from: "At Work", recall: true,
            options: [
              { text: "I have not been here before.", correct: true,
                why: "It changes which version of the directions you are given." },
              { text: "I am in a hurry.", why: "It shortens the directions, which is the opposite of helpful." },
              { text: "Nothing — just listen.", why: "Listening without checking is how people arrive at the store room." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "people"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "Nothing was decided until when the figures arrived.", correct: true,
                why: "<i>Until</i> is the linker; <i>when</i> cannot introduce the same clause." },
              { text: "Nothing was decided until the figures arrived.", why: "The corrected version." },
              { text: "Nothing was decided when the figures arrived.", why: "Correct, and it means something different." } ] },
          { q: "What is matters arising for?", from: "Lesson 1", recall: true,
            options: [
              { text: "Catching actions agreed last time and not done.", correct: true,
                why: "It is the item that makes action points mean anything." },
              { text: "New business.", why: "That is the main agenda." },
              { text: "Items not on the agenda.", why: "That is AOB." } ] },
          { q: "Minutes say an item was <i>carried forward</i> with no name attached. What does the evidence suggest?", from: "Lesson 5", recall: true,
            options: [
              { text: "It will be carried forward again.", correct: true,
                why: "Every such item across four meetings was." },
              { text: "It will be done before next time.", why: "Nobody owns it." },
              { text: "It has been dropped.", why: "Formally it is alive, which is what makes it hard to notice." } ] },
          { q: "<i>Subject to board approval</i> — what has been decided?", from: "Lesson 5", recall: true,
            options: [
              { text: "Nothing, until the board acts.", correct: true,
                why: "The condition is held by somebody who was not in the room." },
              { text: "Everything.", why: "The phrase exists to say otherwise." },
              { text: "It depends who wrote it.", why: "The phrase has a fixed meaning." } ] },
          { q: "What should a visitor keep from a set of directions?", from: "At Work", recall: true,
            options: [
              { text: "The negative — the thing to avoid.", correct: true,
                why: "<i>Not the first door</i> is the part that falls out of a list first." },
              { text: "The floor number only.", why: "Which is what Marwan kept." },
              { text: "The person's name.", why: "They already have that." } ] },
          { q: "Why circulate minutes within two days?", from: "Lesson 2", recall: true,
            options: [
              { text: "Because after that people correct them from memory, and memories differ.", correct: true,
                why: "The reason, not just the rule." },
              { text: "Because it is polite.", why: "The reason given is about accuracy." },
              { text: "Because the chair asks for them.", why: "Not a reason anyone gives." } ] }
        ] }

    ]
  };
})();
