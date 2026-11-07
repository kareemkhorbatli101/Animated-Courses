/* Unit 6 · Calls and Handovers — AT WORK
   Check that you have understood. */
(function () {
  window.PAGE = {
    id: "u06-oc", unit: "u06", block: "oc", up: "../", tab: "AT WORK",
    objective: "Confirm out loud that you have understood, and find the item you missed",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Checking you have it", letter: "A",
        concepts: ["listen", "people"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour explains why she asks people to repeat things back. Fill in the form as you listen.",
        audio: { track: "u06-checking", label: "Why we read back",
          lines: [
            { who: "nour", text: "Two minutes on something that looks like a small habit and is not." },
            { who: "nour", text: "When somebody gives you instructions, say them back. Not all of them — the three or four that matter. It takes about eight seconds." },
            { who: "nour", text: "The reason is not politeness. It is that you cannot tell the difference, from the inside, between having understood and having followed. They feel identical while someone is talking." },
            { who: "nour", text: "Saying it back is the only cheap test. If you can produce it, you have it. If you stumble, you do not, and you have found that out while the other person is still in the room." },
            { who: "nour", text: "In March we lost nineteen hours on loom three. Two of the four stoppages were never passed on. In both cases the handover was written and not spoken, so nobody said anything back and nobody noticed that the message had not landed." },
            { who: "nour", text: "There is a second benefit and it is the one people miss. When you say it back, the other person hears their own instruction from outside their head, and about one time in five they correct themselves." },
            { who: "nour", text: "So: three or four items, in your own words, out loud. And if there were four and you can only remember three, say that too. Asking which one you have lost is not a weakness." } ] },
        title: "Reading back — notes",
        lines: [
          "Say back the ___ or four items that matter",
          "It takes about ___ seconds",
          "You cannot tell from the inside between understanding and ___ ",
          "In March, ___ hours were lost on loom three",
          "Those handovers were written and not ___ ",
          "About one time in ___ , the speaker corrects themselves"
        ],
        gaps: [
          { answer: "three", why: "Not everything — she is explicit that reading back everything is not the habit." },
          { answer: "eight", why: "The number that makes it an easy habit to adopt. A cost nobody can argue with." },
          { answer: "following", why: "The core of the argument: the two feel identical while someone is talking." },
          { answer: "nineteen", why: "From last lesson's report, used here as the evidence rather than as a figure." },
          { answer: "spoken", why: "The mechanism. A written handover has no moment where anything is said back." },
          { answer: "five", why: "The second benefit, and the one she says people miss: the speaker hears their own instruction from outside." }
        ],
        note: { kind: "life", title: "The test you can run on yourself",
                body: "<p>Understanding and following feel identical from the inside. Saying it back is the only cheap way to tell them apart, and the only time it is free is while the other person is still standing there.</p>" },
        explain: { terms: [
          { en: "to land", gloss: "to be received and understood", ar: "يصل ويُفهم" },
          { en: "from the inside", gloss: "from your own point of view", ar: "من الداخل" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Checking you have it", letter: "B",
        concepts: ["listen", "sequence"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "Three handovers, done three ways. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Fadi, Marwan and Lina",
        audio: { track: "u06-three", label: "Three handovers",
          lines: [
            { who: "fadi", text: "Marwan. Three things. Pallets made up but not counted, do not release them. Loom three is off, do not restart it. Dye house van at ten, take it but do not sign." },
            { who: "marwan", text: "Fine." },
            { who: "fadi", text: "Say them back." },
            { who: "marwan", text: "Do not release the pallets. Do not restart loom three. And the van." },
            { who: "fadi", text: "What about the van?" },
            { who: "marwan", text: "Take it. And… do not sign. I nearly lost that one." },
            { who: "fadi", text: "You did lose it. That is why I asked." },
            { who: "nour", text: "That is the whole lesson, and it took nine seconds." },
            { who: "lina", text: "Can I do a harder one? Yesterday Samer gave me four things on the phone and I wrote them all down, so I did not say any of them back." },
            { who: "nour", text: "And?" },
            { who: "lina", text: "And three of my four notes were right and the fourth was the opposite of what he meant. He said hold the credit note until the quantity is confirmed. I wrote issue it once the quantity is confirmed. Both sound like the same sentence at speed." },
            { who: "nour", text: "They are not even close in consequence." },
            { who: "lina", text: "No. If I had said it back he would have stopped me in two words." },
            { who: "fadi", text: "Writing it down feels like checking, though. That is what makes it dangerous." },
            { who: "nour", text: "Yes. Writing captures the sound of a sentence. Saying it back tests the meaning, which is a different thing entirely." },
            { who: "marwan", text: "What if I say it back and get it wrong in front of everyone?" },
            { who: "nour", text: "Then you have got it wrong eight seconds after being told, in a room with the person who can fix it, instead of at two in the morning on your own. That is not embarrassment. That is the system working." },
            { who: "lina", text: "There is a version of this for the phone too. When Samer gives me figures I now repeat the number and the unit, not just the number. Eighteen hundred a metre, not eighteen hundred." },
            { who: "nour", text: "Give me an example of why." },
            { who: "lina", text: "Because eighteen hundred a metre and eighteen hundred for the roll are both things a supplier might say, and I have written the wrong one before. The unit is where the money is." },
            { who: "fadi", text: "Same on the floor. I read back the quantity and the colour together, because the quantity is almost always right and the colour is the one that goes wrong." },
            { who: "nour", text: "Then both of you have found the same thing from different ends. Read back the part that is most expensive to get wrong, not the part that is easiest to remember." },
            { who: "marwan", text: "How do I know which that is?" },
            { who: "nour", text: "Ask yourself which one, if you had it backwards, nobody would notice until the goods were on a truck. That is the one." } ] },
        items: [
          { q: "What does Marwan miss the first time?",
            options: [
              { text: "The second half of the van instruction — do not sign.", correct: true,
                why: "He reaches the van and stops, which is exactly what reading back is designed to expose." },
              { text: "The pallets.", why: "He gets that one first." },
              { text: "Loom three.", why: "He gets that one too." } ] },
          { q: "What does Fadi do when Marwan says <i>and the van</i>?",
            options: [
              { text: "Asks what about the van, rather than supplying the answer.", correct: true,
                why: "Supplying it would hide the gap. The question makes Marwan produce it." },
              { text: "Repeats the instruction.", why: "He makes Marwan do the work." },
              { text: "Moves on.", why: "He does not." } ] },
          { q: "What is Marwan's reaction, and Fadi's correction of it?",
            options: [
              { text: "He says he nearly lost it; Fadi says he did lose it.", correct: true,
                why: "The distinction matters. He produced it only after being prompted, which is not having it." },
              { text: "He denies missing anything.", why: "He admits it immediately." },
              { text: "Fadi agrees it was nearly.", why: "Fadi corrects him precisely on that word." } ] },
          { q: "What went wrong with Lina's four notes?",
            options: [
              { text: "One of the four recorded the opposite of what was meant.", correct: true,
                why: "<i>Hold the credit note until</i> against <i>issue it once</i> — and she wrote it down confidently." },
              { text: "She forgot one entirely.", why: "She had four notes. One was wrong, not missing." },
              { text: "She could not read her writing.", why: "Nothing to do with handwriting." } ] },
          { q: "Why does she say writing it down did not protect her?",
            options: [
              { text: "Because she wrote it instead of saying it back.", correct: true,
                why: "<i>I wrote them all down, so I did not say any of them back.</i> The writing displaced the check." },
              { text: "Because she wrote too fast.", why: "Speed is not the point she makes." },
              { text: "Because Samer was unclear.", why: "She does not blame him; she says both versions sound alike at speed." } ] },
          { q: "What is Fadi's observation about writing?",
            options: [
              { text: "It feels like checking, which is what makes it dangerous.", correct: true,
                why: "The sharpest line in the scene, and the reason the habit is hard to adopt." },
              { text: "It is a waste of time.", why: "Nobody says that; the handover note exists and matters." },
              { text: "It is always better than speaking.", why: "The opposite of the scene's conclusion." } ] },
          { q: "How does Nour distinguish writing from reading back?",
            options: [
              { text: "Writing captures the sound; saying it back tests the meaning.", correct: true,
                why: "It explains Lina's error exactly: she captured the sentence and inverted its sense." },
              { text: "Writing is for long instructions only.", why: "Not the distinction she draws." },
              { text: "There is no real difference.", why: "She says they are different things entirely." } ] },
          { q: "What is her answer to Marwan's worry about getting it wrong publicly?",
            options: [
              { text: "Getting it wrong in the room is the system working.", correct: true,
                why: "Eight seconds after being told, with the person who can fix it present, against two in the morning alone." },
              { text: "He should practise privately first.", why: "Not suggested." },
              { text: "Nobody will notice.", why: "She does not minimise it; she reframes what it means." } ] }
        ],
        explain: { terms: [
          { en: "at speed", gloss: "when spoken quickly", ar: "بسرعة الكلام" },
          { en: "to lose an item", gloss: "to fail to retain one thing from a list", ar: "يفوته بند" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Check out loud", letter: "A",
        concepts: ["speak", "people"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that make checking normal rather than awkward. Click each one.",
        note: { kind: "life", title: "Make it a habit, not an event",
                body: "<p>If reading back happens only when you are unsure, it signals doubt. If it happens every time, it signals nothing — and that is when people stop minding.</p>" },
        text: "Say them back. What about the van? Let me read that back to you. So: three things, and one is a do-not. I have three of the four — which one have I lost? If I have any of that wrong, tell me. Let me check I have this right. You said hold it, not issue it.",
        phrases: [
          { text: "Say them back.",
            why: "The instruction from the other side. A supervisor who asks for it every time has removed the awkwardness from it entirely." },
          { text: "I have three of the four — which one have I lost?",
            why: "Admits the gap and asks a specific question. Far faster than hearing all four again, and it shows you were counting." },
          { text: "Let me read that back to you.",
            why: "Announces the check before doing it, so the other person knows to listen rather than to interrupt." },
          { text: "So: three things, and one is a do-not.",
            why: "A summary of the shape before the content. It tells the listener how many to hold on to." },
          { text: "You said hold it, not issue it.",
            why: "Naming both the right version and the wrong one. This is how Lina's four-note error would have been caught in two words." },
          { text: "If I have any of that wrong, tell me.",
            why: "Turns your summary into a draft rather than a claim, which makes correcting you easy." }
        ],
        after: "<p>Every one of these is short, and none of them admits to anything except being a person listening to a list.</p>" },

      { id: "2b", section: 2, sectionTitle: "Check out loud", letter: "B",
        concepts: ["people", "sequence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "What each kind of checking actually tests",
        head: ["What you do", "What it tests", "What it misses"],
        rows: [
          ["Nod and say fine", "___ ", "Everything"],
          ["Write it down", "That you captured the ___ ", "Whether you have the meaning"],
          ["Say it back in your own words", "That you have the ___ ", "Nothing much"],
          ["Say it back and name what you ___ ", "Both, and it finds the gap", "Nothing"]
        ],
        gaps: [
          { answer: "Nothing", why: "Understanding and following feel identical from the inside, and nodding tests neither." },
          { answer: "sound", why: "Lina captured the sentence accurately and inverted its sense." },
          { answer: "meaning", why: "Your own words cannot be produced from a sentence you did not understand." },
          { answer: "lost", why: "<i>I have three of the four — which one have I lost?</i> The version that closes the gap as well as finding it." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check out loud", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people being told things. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Marwan", detail: "Says <i>fine</i> to a three-item handover and is asked to repeat it." },
          { id: "c2", label: "Lina", detail: "Writes down four instructions carefully and says none of them back." },
          { id: "c3", label: "Hadi", detail: "Realises he has lost one of four items and asks for all four again." },
          { id: "c4", label: "Rima", detail: "Only reads things back when she is unsure, so her colleagues notice when she does." }
        ],
        takeaways: [
          { text: "Saying it back is the only cheap test.", caseId: "c1",
            why: "He produced two of three and stopped at the van. Eight seconds found what a whole night would have found expensively." },
          { text: "Writing captures the sound. Saying it back tests the meaning.", caseId: "c2",
            why: "Her note said <i>issue it once</i> where the instruction was <i>hold it until</i>. Both sound the same at speed and mean opposite things." },
          { text: "Name the gap instead of asking for the whole list.", caseId: "c3",
            why: "<i>I have three of the four — which one have I lost?</i> is faster, and it shows he was counting." },
          { text: "Do it every time, and it stops meaning anything.", caseId: "c4",
            why: "A check reserved for doubt signals doubt. A check that always happens is invisible, which is when people stop minding it." }
        ],
        closer: "<p>Next unit: terms and negotiation, where what you agreed and what you said are the same sentence read by two people.</p>" }

    ]
  };
})();
