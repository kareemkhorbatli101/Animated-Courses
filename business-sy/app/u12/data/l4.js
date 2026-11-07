/* Unit 12 · Clients and Proposals — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u12-l4", unit: "u12", block: "l4", up: "../", tab: "AT WORK",
    objective: "Explain something so that somebody else can use it, and tell homophones apart in writing",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Making somebody else able", letter: "A",
        concepts: ["listen", "question"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six questions from colleagues. Choose the answer that leaves the asker able to do it without you.",
        note: { kind: "life", title: "The test is what they can do next",
                body: "<p>An explanation that is correct and leaves the asker still dependent on you has not worked. The test is not whether they understood you; it is whether they could do it on Monday with you out of the building.</p>" },
        items: [
          { who: "fadi", say: "What is the minimum order and why does it exist?",
            options: [
              { text: "Two thousand metres a line, because a dye bath below that cannot hold shade across the run.", correct: true,
                why: "The figure and the reason. With the reason he can answer the next question himself." },
              { text: "Two thousand metres a line.", why: "Correct and unusable. He cannot defend it when a buyer pushes." },
              { text: "It is in the price list.", why: "Which answers neither half of what he asked." } ] },
          { who: "fadi", say: "A buyer asked for 1,200 metres. Can we do it?",
            options: [
              { text: "Not at that price, and you can offer 2,000 at the quoted rate or 1,200 as a sample run at a surcharge.", correct: true,
                why: "Gives him two things he may say. A rule plus the two permitted exceptions is what makes somebody independent." },
              { text: "No.", why: "True, and it ends the conversation he was having with a customer." },
              { text: "Ask me when it comes up.", why: "Guarantees it comes to you every time, which is the thing to avoid." } ] },
          { who: "lina", say: "What does <i>prices held for twelve months</i> actually commit us to?",
            options: [
              { text: "The quoted price for any order placed in those twelve months, whatever cotton costs.", correct: true,
                why: "The scope of the promise, stated in the terms she will need when she is asked to invoice." },
              { text: "It means we cannot raise prices.", why: "Nearly right, and it leaves open whether existing orders or new ones are meant." },
              { text: "It is standard.", why: "A reassurance about the market, not an answer about our obligation." } ] },
          { who: "fadi", say: "Why do we send the inspection sheet when nobody asks for it?",
            options: [
              { text: "So the buyer can see whether the sample was spread across the run, which no other document shows.", correct: true,
                why: "The purpose, not the practice. He will now send it when the procedure forgets to tell him to." } ,
              { text: "Because it is in the proposal.", why: "Tells him it is a rule and not what the rule is for." },
              { text: "Clients like paperwork.", why: "Untrue, and it makes the habit look arbitrary." } ] },
          { who: "lina", say: "The buyer wants to know our rework rate. Do we tell him?",
            options: [
              { text: "Yes — four per cent, and say what rework means, because a low figure with no definition looks invented.", correct: true,
                why: "Answers the question and hands over the thing that makes the answer credible." },
              { text: "Yes, four per cent.", why: "Leaves her unable to answer the obvious follow-up." },
              { text: "Better not to.", why: "Which a buyer reads as a figure we are ashamed of." } ] },
          { who: "fadi", say: "I still do not see why the July lead time is different.",
            options: [
              { text: "The dye house closes ten days in July, so an order placed then waits for the bath, not the loom.", correct: true,
                why: "Names the constraint rather than repeating the conclusion. Now he can explain it to somebody else." },
              { text: "It is six weeks in July. That is the rule.", why: "Repeating a rule to somebody who has said they do not understand it." },
              { text: "Everyone closes in July.", why: "Vague, and it does not say which stage waits." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Making somebody else able", letter: "B",
        concepts: ["listen", "people"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. Here the right answer checks whether the explaining worked.",
        items: [
          { who: "nour", say: "I have just explained the price hold to Fadi. How do I know it landed?",
            options: [
              { text: "Ask him to tell a buyer, in his own words, while you listen.", correct: true,
                why: "The only real test. Understanding you is easy; producing it is hard and is what the job needs." },
              { text: "Ask him whether he understood.", why: "Almost everybody says yes, including when they did not." },
              { text: "Send it to him in writing as well.", why: "Useful, and it tests nothing." } ] },
          { who: "nour", say: "He got it slightly wrong. Do I correct him in front of the buyer?",
            options: [
              { text: "Correct the fact at once and say nothing about him.", correct: true,
                why: "The buyer needs the right figure now. The learning conversation happens afterwards and without an audience." },
              { text: "Let it go and fix it later.", why: "Leaves a wrong figure with a customer, which is the one cost that is not recoverable." },
              { text: "Explain in front of the buyer where he went wrong.", why: "Corrects the fact and teaches him not to try again." } ] },
          { who: "fadi", say: "Can you just write it down for me?",
            options: [
              { text: "You write it and I will check it — then it is in your words.", correct: true,
                why: "Writing it is where the gaps appear. Handing over a note moves the paper and not the knowledge." },
              { text: "Yes, I will send you a note.", why: "Faster today, and he will ask again in a month." },
              { text: "It is already in the proposal.", why: "He has asked for help and been sent to a document." } ] },
          { who: "lina", say: "I do not want to look stupid in front of the buyer.",
            options: [
              { text: "Say you will confirm the figure and come back within the hour.", correct: true,
                why: "A sentence that is always available and always acceptable. It replaces guessing, which is the thing that actually looks bad." },
              { text: "Just give your best estimate.", why: "A figure a buyer may write into an order." },
              { text: "Nobody expects you to know everything.", why: "Kind, and it does not give her the sentence she needs." } ] },
          { who: "nour", say: "Should I explain the whole procedure or just this part?",
            options: [
              { text: "The part he needs, plus the one reason behind it.", correct: true,
                why: "The reason is what lets him handle the case you did not foresee. Everything else is for the handbook." },
              { text: "The whole procedure, so he has the full picture.", why: "Forty minutes, and he retains the part he needed anyway." },
              { text: "Just this part.", why: "Leaves him able to repeat and unable to extend." } ] },
          { who: "fadi", say: "Why are you explaining this to me and not to Samer?",
            options: [
              { text: "Because you are the one a buyer reaches when Samer is travelling.", correct: true,
                why: "A reason, and it also tells him when he will need it, which is most of what makes somebody remember." },
              { text: "Because you should know it too.", why: "Reads as an obligation rather than a purpose." },
              { text: "Samer already knows.", why: "Answers about Samer and not about him." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes while somebody explains", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Samer explains the tender to Fadi so that Fadi can answer the phone. Fill in the form as you listen.",
        audio: { track: "u12-handover", label: "Handing over the tender",
          lines: [
            { who: "fadi", text: "If a buyer rings while you are away, what do I actually need to know?" },
            { who: "samer", text: "Four things, and one reason for each. Price: three forty a metre for sheeting, three ninety for pillowcase cloth." },
            { who: "fadi", text: "Held for how long?" },
            { who: "samer", text: "Twelve months from award. The reason that matters is that we buy cotton twice a year, so one purchase falls inside the period at a price we cannot see yet. We accepted that knowingly." },
            { who: "fadi", text: "Minimum order?" },
            { who: "samer", text: "Two thousand metres a line, because a dye bath below that will not hold shade across the run. If somebody asks for less, you can offer a sample run at a surcharge. Do not just say no." },
            { who: "fadi", text: "And lead time." },
            { who: "samer", text: "Four weeks from order, except July, which is six. The dye house closes ten days in July, so the order waits for the bath and not for the loom. Say it that way and nobody argues." },
            { who: "fadi", text: "What is the fourth thing?" },
            { who: "samer", text: "The inspection sheet goes with every consignment. Nobody asked for it. It lets the buyer see whether the sample was spread across the run, which no other document shows." },
            { who: "fadi", text: "Can I write all that down?" },
            { who: "samer", text: "You write it and I will check it. If I write it, it is in my words and you will ring me anyway." },
            { who: "fadi", text: "Then tell me one more thing. What do I say when I do not know?" },
            { who: "samer", text: "That you will confirm the figure and come back within the hour. Never guess at a number a buyer might write into an order." } ] },
        title: "Tender handover — notes",
        lines: [
          "Sheeting: 3.40 a metre. Pillowcase cloth: ___ ",
          "Prices held twelve months from ___ ",
          "Why that is a risk: we buy cotton ___ a year",
          "Minimum order: ___ metres a line",
          "Reason: a dye bath below that will not hold ___ across the run",
          "Lead time four weeks, except July, which is ___ ",
          "Because the dye house closes ten days and the order waits for the ___ ",
          "If you do not know: say you will ___ and come back within the hour"
        ],
        gaps: [
          { answer: "3.90", why: "The second price. Both are needed, because a buyer rarely asks about only one line." },
          { answer: "award", why: "Not from submission and not from signature. The start point is the whole of the promise." },
          { answer: "twice", why: "March and September, which is why a twelve-month hold is a real exposure rather than a formality." },
          { answer: "2000", why: "The figure. He gives it with its reason in the same breath, which is the pattern of the whole handover." },
          { answer: "shade", why: "The constraint is physical. A rule with a physical reason behind it is one somebody can defend." },
          { answer: "six", why: "The exception, stated as part of the offer rather than as a footnote." },
          { answer: "bath", why: "Which stage waits. Samer says this is the version nobody argues with." },
          { answer: "confirm", why: "The sentence that replaces guessing, and the last thing he hands over." }
        ],
        note: { kind: "life", title: "You write it and I will check it",
                body: "<p>The single most useful line in the whole conversation. Writing it is where the gaps show, and a note in your own words is one you can use on the telephone.</p>" },
        explain: { terms: [
          { en: "to hand over", gloss: "to pass work or knowledge to somebody else", ar: "يسلّم المهمة" },
          { en: "a surcharge", gloss: "an extra charge added for a particular case", ar: "رسم إضافي" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Words you cannot hear apart", letter: "B",
        concepts: ["sound", "word"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        explain: {
          what: "Decide which spelling the sentence needs.",
          how: "Play the line if you like, then read the two sentences and choose by meaning. The audio cannot help you here: both options sound exactly the same.",
          why: "Homophones are the one case where listening settles nothing, and the one case where a spelling error survives being read aloud." },
        focus: "<p>Most pronunciation work asks you to hear a difference. Homophones are the opposite case: two spellings, two meanings, <b>one sound</b>. Listening cannot help you, and that is the lesson.</p><p>What decides it is the sentence. In each pair below the audio is no use at all — read the meaning and choose the spelling.</p>",
        items: [
          { say: "The coarse cotton is for sacking, not for sheets.", options: [
            { text: "The coarse cotton is for sacking, not for sheets.", correct: true,
              why: "<i>Coarse</i> means rough in texture. It is the word a textile business needs almost daily." },
            { text: "The course cotton is for sacking, not for sheets.",
              why: "<i>Course</i> is a direction, a programme of study or part of a meal. Identical in sound and wrong here." } ] },
          { say: "The dyeing takes two hours in a single bath.", options: [
            { text: "The dyeing takes two hours in a single bath.", correct: true,
              why: "<i>Dyeing</i> keeps the <i>e</i> precisely so that it can be told from the other word in writing." },
            { text: "The dying takes two hours in a single bath.",
              why: "<i>Dying</i> is from <i>die</i>. The spelling is the only thing standing between a process note and an unfortunate sentence." } ] },
          { say: "We order our stationery from a supplier in Damascus.", options: [
            { text: "We order our stationery from a supplier in Damascus.", correct: true,
              why: "<i>Stationery</i> with an <i>e</i> is paper and envelopes. Remember <i>e</i> for envelope." },
            { text: "We order our stationary from a supplier in Damascus.",
              why: "<i>Stationary</i> with an <i>a</i> means not moving. A common error on a purchase order." } ] },
          { say: "The principal reason for the delay is the dye house.", options: [
            { text: "The principal reason for the delay is the dye house.", correct: true,
              why: "<i>Principal</i> means main, or the head of something. The <i>-pal</i> is the one that means first." },
            { text: "The principle reason for the delay is the dye house.",
              why: "<i>Principle</i> is a rule or a belief: <i>a matter of principle</i>. It cannot modify a noun this way." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Words you cannot hear apart", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line. Each one holds two words that sound alike, and only the sentence tells you which is which.",
        speaker: "samer",
        lines: [
          "Of course the coarse cloth is cheaper, and it is not what they ordered.",
          "The dyeing is finished, and the shade is dying in the sunlight.",
          "Our stationery order is stationary in customs.",
          "The principal problem is a matter of principle."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. Each line has a homophone in it, and only the meaning decides the spelling.",
        items: [
          { answer: "The principal reason is the lead time in July.",
            why: "<i>Principal</i>, meaning main. Nothing in the sound tells you, and the sentence does." },
          { answer: "Of course we can supply the coarse grade as well.",
            why: "Both words in one line, and both spelled the way their meanings require." },
          { answer: "The dyeing was finished before the cloth was inspected.",
            why: "<i>Dyeing</i>, from dye. The <i>e</i> is the whole difference." },
          { answer: "We order stationery twice a year from Damascus.",
            why: "<i>Stationery</i>, with an e for envelope." },
          { answer: "It is a matter of principle and not of price.",
            why: "<i>Principle</i>, a rule. The same sound as the first line and the other spelling." }
        ],
        closer: "<p>Five lines, four pairs of words, and the audio helped with none of them. This is the one area of pronunciation where the answer lives entirely in the meaning.</p>" }

    ]
  };
})();
