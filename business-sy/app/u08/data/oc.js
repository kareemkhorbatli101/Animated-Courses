/* Unit 8 · How the Business Has Changed — AT WORK
   Report a problem to a supervisor. */
(function () {
  window.PAGE = {
    id: "u08-oc", unit: "u08", block: "oc", up: "../", tab: "AT WORK",
    objective: "Report a problem so that it can be acted on rather than worried about",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "How to report a problem", letter: "A",
        concepts: ["listen", "escalation"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour sets out what she wants in a problem report. Fill in the form as you listen.",
        audio: { track: "u08-reporting", label: "What a problem report needs",
          lines: [
            { who: "nour", text: "Four things, and the fourth is the one that separates a report from a complaint." },
            { who: "nour", text: "One: what happened, with a number in it. Not <i>the generator keeps cutting out</i>. Four times since Monday of last week, each time about twenty minutes." },
            { who: "nour", text: "Two: what it has cost so far, even if the answer is nothing. <i>Nothing yet</i> is a fact and it is worth saying, because it tells me how fast I have to move." },
            { who: "nour", text: "Three: what it will cost if nothing changes. This is the one people leave out, and it is the only part that is about the future." },
            { who: "nour", text: "Four: what you have already done about it, and what you want from me. If you have done nothing, say that too — but you usually have." },
            { who: "nour", text: "If you bring me those four I can decide in under a minute. If you bring me the first one alone, we both spend ten minutes getting to the other three." },
            { who: "nour", text: "And bring the log if you have one. An impression is an impression. A log with a time of day on it is a cheap fix waiting to be found." } ] },
        title: "A problem report — four things",
        lines: [
          "One: what happened, with a ___ in it",
          "Two: what it has cost ___ ",
          "Three: what it will cost if ___ changes",
          "Four: what you have already done, and what you ___ ",
          "Bring the ___ if you have one",
          "A log with a ___ of day on it can find a cheap fix"
        ],
        gaps: [
          { answer: "number", why: "She gives the bad version and the good version of the same sentence, which is what makes the rule stick." },
          { answer: "so far", why: "<i>Even if the answer is nothing</i> — and she explains why nothing is worth saying." },
          { answer: "nothing", why: "The only forward-looking part, and the one most often missing." },
          { answer: "want", why: "A report with no request leaves the decision ownerless." },
          { answer: "log", why: "The difference between an impression and evidence." },
          { answer: "time", why: "Three of four cut-outs after two o'clock produced a fix that cost nothing." }
        ],
        note: { kind: "life", title: "The third thing",
                body: "<p>What it has cost is history. What it will cost if nothing changes is the sentence that makes someone act. Most reports contain the first and not the second, and then the writer wonders why nothing happened.</p>" },
        explain: { terms: [
          { en: "so far", gloss: "up to now", ar: "حتى الآن" },
          { en: "a cheap fix", gloss: "a solution that costs little", ar: "حلّ غير مكلف" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "How to report a problem", letter: "B",
        concepts: ["listen", "people"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "Three reports, done three ways. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Fadi, Marwan and Lina",
        audio: { track: "u08-three", label: "Three problem reports",
          lines: [
            { who: "marwan", text: "Nour, the generator is being difficult again." },
            { who: "nour", text: "How difficult, in numbers?" },
            { who: "marwan", text: "It cuts out sometimes. Not every day." },
            { who: "nour", text: "Then I cannot do anything with that. Come back when you can tell me how many times and how long." },
            { who: "fadi", text: "Mine is the same problem with the numbers on it. Four cut-outs since Monday of last week, about twenty minutes each. Nothing lost yet. The dark blue goes in the bath on Thursday and a cut-out then costs us the batch, which is about four hundred metres. I have been logging the hours since January. I would like the generator serviced this week." },
            { who: "nour", text: "That is the whole thing in six sentences. Service it. Anything else?" },
            { who: "fadi", text: "Three of the four were after two o'clock, so I would also move the dyeing to the mornings until it is fixed. That costs nothing." },
            { who: "nour", text: "Do it. You had the answer before you came in." },
            { who: "fadi", text: "I was not sure it was mine to decide." },
            { who: "nour", text: "It costs nothing and it is reversible. Both of those mean it is yours." },
            { who: "lina", text: "Can I bring one that has no number yet? Two clients have asked about longer payment terms in the last fortnight. That is all I have. It may be nothing." },
            { who: "nour", text: "Two in a fortnight is a number." },
            { who: "lina", text: "It is a very small one." },
            { who: "nour", text: "It is still the only one either of us has, and you have brought it while it is still small. What would you want to do about it?" },
            { who: "lina", text: "Nothing yet. I would like to count them for another month and tell you again." },
            { who: "nour", text: "That is a plan, and it is the right one. Bringing me something early with no action attached is not a waste of my time. It is the only way I ever hear about anything before it is expensive." },
            { who: "marwan", text: "Can I try mine again? Four cut-outs since Monday of last week, about twenty minutes each. Nothing lost on my shifts. I have not been logging them, so I am going from memory." },
            { who: "nour", text: "Better. And saying you are going from memory is worth as much as the numbers, because now I know how much to trust them." },
            { who: "marwan", text: "Should I start logging?" },
            { who: "nour", text: "Fadi already is, so no. Ask him for the file rather than starting a second one — two logs that disagree are worse than one." },
            { who: "fadi", text: "I will send it to you both tonight." },
            { who: "nour", text: "Then we are done. Marwan, the difference between your first version and your second was about fifteen seconds of thinking before you spoke." } ] },
        items: [
          { q: "Why can Nour do nothing with Marwan's report?",
            options: [
              { text: "It has no numbers in it.", correct: true,
                why: "<i>It cuts out sometimes</i> cannot be acted on, costed or compared with last month." },
              { text: "It is not his area.", why: "Nobody suggests that." },
              { text: "She is busy.", why: "She hears two more reports immediately afterwards." } ] },
          { q: "What does Fadi's report contain that Marwan's does not?",
            options: [
              { text: "Frequency, duration, current cost, future cost, a log and a request.", correct: true,
                why: "All four of Nour's things, plus the log, in six sentences." },
              { text: "An apology.", why: "There is none, and none is wanted." },
              { text: "A longer explanation.", why: "It is shorter than the conversation Marwan's produced." } ] },
          { q: "What is the second thing Fadi proposes?",
            options: [
              { text: "Moving dyeing to the mornings, because three of four cut-outs were after two.", correct: true,
                why: "The log produced it. Without the times of day the idea does not exist." },
              { text: "Buying a new generator.", why: "Not raised by anyone." },
              { text: "Stopping dyeing altogether.", why: "He proposes moving it, not stopping it." } ] },
          { q: "Why does Nour say the morning change was his to decide?",
            options: [
              { text: "Because it costs nothing and is reversible.", correct: true,
                why: "A usable test for anyone unsure where their authority ends." },
              { text: "Because he is the supervisor.", why: "She gives the two properties, not the job title." },
              { text: "Because she was not available.", why: "She was in the room." } ] },
          { q: "What is unusual about Lina's report?",
            options: [
              { text: "It has almost no evidence and no action attached.", correct: true,
                why: "Two enquiries in a fortnight, and she says herself it may be nothing." },
              { text: "It is about the generator.", why: "It is about payment terms." },
              { text: "It asks for a decision.", why: "She explicitly wants nothing done yet." } ] },
          { q: "How does Nour respond to <i>it is a very small number</i>?",
            options: [
              { text: "She says it is the only one either of them has.", correct: true,
                why: "Small and early beats large and late, which is the point of the whole exchange." },
              { text: "She agrees it is too small to matter.", why: "She argues the opposite." },
              { text: "She asks for more data first.", why: "She asks what Lina would want to do." } ] },
          { q: "What does Lina propose?",
            options: [
              { text: "To keep counting for another month and report again.", correct: true,
                why: "A plan with a timescale, which is what turns a worry into something manageable." },
              { text: "To change the payment terms.", why: "She proposes nothing of the kind." },
              { text: "To tell the clients no.", why: "No clients are contacted." } ] },
          { q: "What is Nour's closing point?",
            options: [
              { text: "Early information with no action attached is how she hears about things before they are expensive.", correct: true,
                why: "It echoes Unit 4's third kind of message, now applied to a trend rather than an event." },
              { text: "Only bring problems with solutions.", why: "She accepts one with no solution at all." },
              { text: "Reports should be longer.", why: "The best one in the scene was six sentences." } ] }
        ],
        explain: { terms: [
          { en: "reversible", gloss: "able to be undone", ar: "قابل للتراجع عنه" },
          { en: "a fortnight", gloss: "two weeks", ar: "أسبوعان" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Report so it can be acted on", letter: "A",
        concepts: ["speak", "escalation"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that turn a worry into a decision. Click each one.",
        note: { kind: "life", title: "The shape is always the same",
                body: "<p>Number, cost so far, cost if nothing changes, what you did and what you want. Said in that order it takes about twenty seconds, and the other person can decide without asking anything.</p>" },
        text: "Four cut-outs since Monday of last week, about twenty minutes each. Nothing lost yet. A cut-out on Thursday costs us the batch, about four hundred metres. I have been logging the hours since January. I would like the generator serviced this week. Three of the four were after two o'clock, so I would also move the dyeing to the mornings. That costs nothing. Two clients have asked in the last fortnight. It may be nothing. I would like to count them for another month.",
        phrases: [
          { text: "Four cut-outs since Monday of last week, about twenty minutes each.",
            why: "Frequency and duration. The same fact as <i>it cuts out sometimes</i>, and the only version that can be acted on." },
          { text: "Nothing lost yet.",
            why: "Three words that tell the listener how fast to move. Leaving them out makes every report sound equally urgent." },
          { text: "A cut-out on Thursday costs us the batch, about four hundred metres.",
            why: "The future cost. This is the sentence that makes something happen, and it is the one most often missing." },
          { text: "I have been logging the hours since January.",
            why: "Turns an impression into evidence, and it is what produced the free fix two sentences later." },
          { text: "That costs nothing.",
            why: "Naming the price of your own proposal, especially when it is zero. It removes the only reason to say no." },
          { text: "It may be nothing. I would like to count them for another month.",
            why: "An early signal with its own uncertainty admitted and a plan attached. Nour calls this the only way she hears about anything in time." }
        ],
        after: "<p>Two of these are about the future, one is about the past, and one admits that the speaker may be wrong. All four are rare.</p>" },

      { id: "2b", section: 2, sectionTitle: "Report so it can be acted on", letter: "B",
        concepts: ["escalation", "evidence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "The same problem, reported two ways",
        head: ["Part of the report", "Weak version", "Strong version"],
        rows: [
          ["What happened", "It cuts out sometimes", "Four times since Monday, about ___ minutes each"],
          ["Cost so far", "(not mentioned)", "Nothing ___ "],
          ["Cost if nothing changes", "(not mentioned)", "A cut-out on Thursday costs the ___ "],
          ["What you want", "Something should be done", "Service it this week, and move dyeing to the ___ "]
        ],
        gaps: [
          { answer: "twenty", why: "Duration as well as frequency. Twenty minutes and two minutes are different problems." },
          { answer: "yet", why: "<i>Nothing yet</i> sets the pace. It is information, not reassurance." },
          { answer: "batch", why: "The forward-looking sentence, and the only one that creates urgency." },
          { answer: "mornings", why: "Two requests, one costing money and one costing nothing, which makes the second easy to grant." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Report so it can be acted on", letter: "C",
        concepts: ["recall", "escalation"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people reporting. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Marwan", detail: "Reports that the generator is being difficult again." },
          { id: "c2", label: "Hiba", detail: "Reports a fault accurately and does not say what it will cost if it continues." },
          { id: "c3", label: "Fadi", detail: "Has a zero-cost, reversible idea and waits to be told to do it." },
          { id: "c4", label: "Lina", detail: "Notices two enquiries in a fortnight and nearly says nothing because it may be nothing." }
        ],
        takeaways: [
          { text: "Put a number on it, or nothing can be done with it.", caseId: "c1",
            why: "<i>Sometimes</i> cannot be costed, compared or acted on, and the conversation it starts takes ten minutes." },
          { text: "The forward cost is the part that makes people act.", caseId: "c2",
            why: "What it has cost is history. What it will cost on Thursday is the sentence that gets a generator serviced." },
          { text: "Free and reversible means it is yours to decide.", caseId: "c3",
            why: "A usable test for the edge of your own authority, and one that stops good ideas waiting a week." },
          { text: "Bring it while it is still small.", caseId: "c4",
            why: "Two in a fortnight is the only number anyone has, and it is the only way a trend is ever heard about before it is expensive." }
        ],
        closer: "<p>Next unit: meetings and minutes, where what was decided and what was said have to be written down by somebody.</p>" }

    ]
  };
})();
