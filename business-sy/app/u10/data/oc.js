/* Unit 10 · Records and Responsibility — AT WORK
   Take a position in a discussion. */
(function () {
  window.PAGE = {
    id: "u10-oc", unit: "u10", block: "oc", up: "../", tab: "AT WORK",
    objective: "Say what you would do, not only what you think",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Having a position", letter: "A",
        concepts: ["listen", "people"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour explains the difference between a view and a position. Fill in the form as you listen.",
        audio: { track: "u10-position", label: "A view and a position",
          lines: [
            { who: "nour", text: "A short thing about meetings, and then I will stop talking about meetings for a while." },
            { who: "nour", text: "There is a difference between having a view and having a position, and most of us stop at the first." },
            { who: "nour", text: "A view is <i>I think paper records are safer</i>. A position is <i>I would keep paper for declarations only, for seven years, and I would check once a year that the scans still open</i>." },
            { who: "nour", text: "The difference is three things: a scope, a cost, and what you would do on Monday morning. A view has none of them." },
            { who: "nour", text: "The reason it matters is that a room full of views cannot decide anything. Two views are a disagreement. Two positions are a choice, and a choice can be made." },
            { who: "nour", text: "You are allowed to be wrong. I have changed my own position twice this year, both times because somebody put a better one beside it." },
            { who: "nour", text: "And if you genuinely do not have one, say that rather than producing a view to fill the silence. <i>I do not know enough to have a position on this</i> is a real contribution, and it is rarer than a bad position." } ] },
        title: "A view and a position",
        lines: [
          "A position has three things a view does not: a scope, a ___ , and what you would do",
          "Example: keep paper for ___ only",
          "For ___ years",
          "And check once a year that the scans still ___ ",
          "Two views are a disagreement; two positions are a ___ ",
          "If you do not have one, ___ so"
        ],
        gaps: [
          { answer: "cost", why: "The middle of the three, and the one most often missing from an otherwise good position." },
          { answer: "declarations", why: "The scope. Without it the proposal is about all records and is much harder to accept." },
          { answer: "seven", why: "From the retention period, which makes the position concrete rather than indefinite." },
          { answer: "open", why: "The control. A position about electronic storage with no test of readability is a hope." },
          { answer: "choice", why: "The sentence the whole talk exists for." },
          { answer: "say", why: "And she calls it a real contribution, which is what makes it safe to do." }
        ],
        note: { kind: "life", title: "What you would do on Monday morning",
                body: "<p>It is the simplest test available. If your contribution does not say what anybody would do differently tomorrow, it is a view, and the room cannot act on it.</p>" },
        explain: { terms: [
          { en: "a position", gloss: "a view with a scope, a cost and an action", ar: "موقف محدَّد" },
          { en: "to fill the silence", gloss: "to speak only because nobody is speaking", ar: "ملء الفراغ بالكلام" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Having a position", letter: "B",
        concepts: ["listen", "agreement"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The discussion about records. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Samer, Lina and Fadi",
        audio: { track: "u10-records", label: "Paper, electronic, or both",
          lines: [
            { who: "nour", text: "The auditor's observation about retention. Do we scan everything, keep paper, or both? Positions, not views." },
            { who: "samer", text: "Scan everything. Paper takes space we do not have and a scan cannot be lost in a move." },
            { who: "nour", text: "That is close to a position. What would you do on Monday?" },
            { who: "samer", text: "Buy a scanner for the export office, scan on dispatch, and destroy the paper after the retention period rather than before it." },
            { who: "lina", text: "I would not destroy anything. I would scan everything and keep paper for declarations only, for seven years, and check once a year that twenty files still open." },
            { who: "nour", text: "Why declarations?" },
            { who: "lina", text: "Because they are the only documents signed by a named person, and the only ones an authority asks for directly. Everything else can be reconstructed from the two documents either side of it." },
            { who: "samer", text: "That is a better answer than mine, and I want to argue with the yearly check. Twenty files out of how many?" },
            { who: "lina", text: "Out of about two hundred a year. It is a sample, like the auditor's." },
            { who: "fadi", text: "Can I say something that is not a position? I do not know enough about scanning to have one. What I do know is that nobody in the workshop will scan anything, so whoever does it has to be in the office." },
            { who: "nour", text: "That is worth more than a position. It rules out half of what we might have decided." },
            { who: "samer", text: "Then mine changes. Scan in the office on dispatch, not in the workshop." },
            { who: "nour", text: "So we have one position with two amendments to it. Lina's, with Samer's dispatch timing and Fadi's constraint about who does it." },
            { who: "lina", text: "I am happy with that. It is better than what I came in with." },
            { who: "nour", text: "Then that is the decision. Lina owns the procedure, Samer the scanner, and the yearly check goes in the April agenda every year from now." },
            { who: "samer", text: "One thing we have not settled. What do we do with the paper we already have, which is ten years of it?" },
            { who: "nour", text: "Good. What would you do?" },
            { who: "samer", text: "Separate the personal data, which the auditor asked for anyway, and keep the rest until each file reaches seven years from its own consignment date. That means nothing is destroyed on one day." },
            { who: "lina", text: "I would add one thing. Write down why we destroyed each batch and when, because an empty space in a file is exactly what we were told not to leave." },
            { who: "nour", text: "Both of those go in. Samer, that is the second time today you have turned a question into a position in one sentence." },
            { who: "samer", text: "It is easier when somebody asks what I would do rather than what I think." } ] },
        items: [
          { q: "Why does Nour say Samer's first contribution is only close to a position?",
            options: [
              { text: "It has a direction but no action for Monday.", correct: true,
                why: "He supplies the Monday action immediately afterwards, which completes it." },
              { text: "It is wrong.", why: "Nothing is called wrong in this scene." },
              { text: "It is too long.", why: "It is two sentences." } ] },
          { q: "What makes Lina's contribution a full position?",
            options: [
              { text: "Scope, period, and a yearly control.", correct: true,
                why: "Declarations only, seven years, twenty files checked. The three things from the briefing." },
              { text: "She disagrees with Samer.", why: "Disagreement is not what makes it a position." },
              { text: "She speaks last.", why: "She speaks second." } ] },
          { q: "What is her reason for limiting paper to declarations?",
            options: [
              { text: "They are signed by name and asked for directly; the rest can be reconstructed.", correct: true,
                why: "Two reasons, and the second is the one that makes the scope defensible." },
              { text: "They are the most important documents.", why: "She gives a sharper reason than importance." },
              { text: "They take the least space.", why: "Space is Samer's argument, not hers." } ] },
          { q: "How does Samer respond to her position?",
            options: [
              { text: "He says it is better than his and then questions one detail.", correct: true,
                why: "Conceding the whole and testing a part. The most useful shape in the scene." },
              { text: "He defends his own.", why: "He abandons it and later amends it." },
              { text: "He stays silent.", why: "He asks about the sample size." } ] },
          { q: "What does Fadi contribute?",
            options: [
              { text: "A constraint, and an admission that he has no position.", correct: true,
                why: "Nobody in the workshop will scan anything, which rules out half the options." },
              { text: "A third proposal.", why: "He says explicitly he does not have one." },
              { text: "Agreement with Samer.", why: "He addresses something neither of them had considered." } ] },
          { q: "What does Nour say about his contribution?",
            options: [
              { text: "It is worth more than a position, because it rules things out.", correct: true,
                why: "Which is also the justification for her briefing's last point." },
              { text: "He should have formed a position first.", why: "She values it above one." },
              { text: "It is off the subject.", why: "It changes the decision." } ] },
          { q: "What is the final decision?",
            options: [
              { text: "Lina's position, amended by Samer's timing and Fadi's constraint.", correct: true,
                why: "Nour states the composition explicitly, which is how a room knows what it agreed to." },
              { text: "Samer's original proposal.", why: "He amended it himself." },
              { text: "No decision was taken.", why: "Three owners are named at the end." } ] },
          { q: "What does Lina say about the outcome?",
            options: [
              { text: "It is better than what she came in with.", correct: true,
                why: "A position improved by other people is the thing the whole method is for." },
              { text: "That her original was better.", why: "She says the opposite." },
              { text: "Nothing.", why: "It is her last line." } ] }
        ],
        explain: { terms: [
          { en: "a constraint", gloss: "a limit on what is possible", ar: "قيد" },
          { en: "to rule something out", gloss: "to show it is not possible", ar: "يستبعد" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Take a position", letter: "A",
        concepts: ["speak", "agreement"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that turned four contributions into one decision. Click each one.",
        note: { kind: "life", title: "A position can be changed; a view has to be defended",
                body: "<p>Oddly, stating a full position makes it easier to give up. It is a proposal about the world rather than a claim about you, and somebody improving it is doing you a service.</p>" },
        text: "What would you do on Monday? I would keep paper for declarations only, for seven years, and check once a year that twenty files still open. Because they are the only documents signed by a named person. That is a better answer than mine, and I want to argue with the yearly check. I do not know enough about scanning to have a position. What I do know is that nobody in the workshop will scan anything. Then mine changes. It is better than what I came in with.",
        phrases: [
          { text: "What would you do on Monday?",
            why: "The question that converts a view into a position. It is almost impossible to answer vaguely." },
          { text: "I would keep paper for declarations only, for seven years, and check once a year that twenty files still open.",
            why: "Scope, period, control. The whole of a position in one sentence." },
          { text: "Because they are the only documents signed by a named person.",
            why: "A reason that is about the documents rather than about her preference, which is why it survives being questioned." },
          { text: "That is a better answer than mine, and I want to argue with the yearly check.",
            why: "Concede the whole, test a part. It costs nothing and it is how a proposal gets improved rather than defeated." },
          { text: "I do not know enough about scanning to have a position.",
            why: "Rarer than a bad position and worth more. It also makes the next sentence credible." },
          { text: "Then mine changes.",
            why: "Three words. Changing a position in public is only hard the first time, and it is what makes everyone else's positions worth stating." }
        ],
        after: "<p>Three of these are people giving ground, and the decision at the end is better than any of the three proposals that went in.</p>" },

      { id: "2b", section: 2, sectionTitle: "Take a position", letter: "B",
        concepts: ["agreement", "comparison"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "A view, and the same thing as a position",
        head: ["View", "What is missing", "Position"],
        rows: [
          ["Paper is safer", "A ___ ", "Paper for declarations only"],
          ["We should keep records longer", "A ___ ", "Seven years from the consignment date"],
          ["Scans might not open", "A ___ ", "Twenty files checked once a year"],
          ["Somebody should scan them", "A ___ ", "The export office, on dispatch"]
        ],
        gaps: [
          { answer: "scope", why: "Which records, not all of them. Scope is what makes a proposal acceptable." },
          { answer: "period", why: "A number and a start point, or the rule cannot be applied." },
          { answer: "control", why: "A test with a frequency and a sample size. Worry without a check changes nothing." },
          { answer: "owner", why: "Fadi's contribution: not the workshop. An action with no owner is the finding in Lesson 5." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Take a position", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people in a discussion. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Samer", detail: "Says scanning is better than paper and stops there." },
          { id: "c2", label: "Fadi", detail: "Has no opinion about scanning and nearly says nothing at all." },
          { id: "c3", label: "Tala", detail: "Defends her first proposal after a better one has been put beside it." },
          { id: "c4", label: "Munir", detail: "Produces an opinion because the room has gone quiet." }
        ],
        takeaways: [
          { text: "Say what you would do on Monday.", caseId: "c1",
            why: "It is the test that separates a view from a position, and he passes it the moment he is asked." },
          { text: "A constraint is worth more than an opinion.", caseId: "c2",
            why: "Nobody in the workshop will scan anything ruled out half of what the room might have decided." },
          { text: "Changing your position in public is the point of stating one.", caseId: "c3",
            why: "A position is a proposal about the world. Defending it past the evidence turns it into a claim about you." },
          { text: "<i>I do not know enough to have a position</i> is a real contribution.", caseId: "c4",
            why: "Rarer than a bad position, and it keeps the room from weighing something nobody actually believes." }
        ],
        closer: "<p>Next unit: reports and processes, where the passive does the work this unit gave to the gerund.</p>" }

    ]
  };
})();
