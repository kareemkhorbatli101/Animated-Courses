/* Unit 11 · Reports and Processes — ORAL COMMUNICATION */
(function () {
  window.PAGE = {
    id: "u11-oc", unit: "u11", block: "oc", up: "../", tab: "AT WORK",
    objective: "Say who did what, and improve a procedure in a room without taking the credit for it",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Naming the person", letter: "A",
        concepts: ["listen", "people"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour on how to give credit so that it is worth something. Fill in the form as you listen.",
        audio: { track: "u11-credit", label: "Giving credit",
          lines: [
            { who: "nour", text: "A short thing about credit, because we are about to rewrite a procedure and I want the right names on it." },
            { who: "nour", text: "Most credit is given badly, and not out of meanness. It is given as a compliment when it should be given as a record." },
            { who: "nour", text: "A compliment is <i>well done, the report was much clearer</i>. A record is <i>Fadi split the defects from the non-conformances, and that is why the report is clearer</i>." },
            { who: "nour", text: "The difference is three things: the name, the specific thing done, and why it mattered. A compliment has none of them, and it evaporates by Thursday." },
            { who: "nour", text: "Say it in front of other people, not privately. Credit given privately is a kindness. Credit given in the room is a record, and a record is what somebody can be promoted on." },
            { who: "nour", text: "Expect the person to deflect. Almost everybody says <i>I only did what the procedure says</i>, and the answer to that is to point out that the procedure allowed it and most people do not do it." },
            { who: "nour", text: "And one rule for me as much as for you. If you do not know who did it, ask before you thank anybody. Thanking the wrong person is worse than thanking nobody, because the right person is usually in the room." } ] },
        title: "Giving credit",
        lines: [
          "A compliment evaporates; a ___ does not",
          "Three things it needs: the name, the specific thing done, and why it ___ ",
          "Say it in front of other ___ ",
          "Credit given privately is a ___ ",
          "Expect the person to ___ ",
          "If you do not know who did it, ___ first"
        ],
        gaps: [
          { answer: "record", why: "The whole distinction. A record can be acted on by somebody who was not there." },
          { answer: "mattered", why: "The third and most often missing part. Without it the credit is a fact with no consequence." },
          { answer: "people", why: "Not because the person wants an audience, but because a witness is what turns it into a record." },
          { answer: "kindness", why: "She does not say it is wrong. She says it is a different thing, and it is not what she needs today." },
          { answer: "deflect", why: "Predicting it is what lets you answer it rather than accept it." },
          { answer: "ask", why: "The rule she applies to herself. Thanking the wrong person is a very public kind of wrong." }
        ],
        note: { kind: "life", title: "A record, not a compliment",
                body: "<p>The test is whether somebody who was not in the room could repeat it accurately. <em>Well done</em> cannot be repeated. <em>Fadi split the defects from the non-conformances</em> can.</p>" },
        explain: { terms: [
          { en: "to deflect", gloss: "to turn credit or blame away from yourself", ar: "يصرف الإطراء عن نفسه" },
          { en: "a record", gloss: "something written or witnessed that can be relied on later", ar: "سجل" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Naming the person", letter: "B",
        concepts: ["listen", "sequence"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The meeting that rewrote the inspection procedure. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Samer, Lina and Fadi",
        audio: { track: "u11-procedure", label: "Rewriting the inspection procedure",
          lines: [
            { who: "nour", text: "Shade is forty-six per cent of our faults. We are not here to fix dyeing today. We are here to decide whether the inspection procedure is written well enough to catch it, and to say who wrote which part." },
            { who: "samer", text: "The procedure is written well. The problem is that step two is written well and performed badly. Sampling across the run is the rule and the bench makes end-sampling the easy thing." },
            { who: "nour", text: "That is a position. What would you do?" },
            { who: "samer", text: "Make the sheet record where each piece came from, with a position in metres, so that end-sampling leaves a trace." },
            { who: "lina", text: "The sheet already records position. Fadi added that field in March, after the audit, and it is the reason we can answer the client at all." },
            { who: "fadi", text: "I only added a column." },
            { who: "nour", text: "You added the column that makes step two checkable. Before it, the procedure said sample across the run and nothing in the world could tell whether anybody had. That is not a column." },
            { who: "samer", text: "Then my proposal is already done and I would like to know why end-sampling still happens." },
            { who: "lina", text: "Because nobody reads the positions back. The field is filled in and never looked at. A record that is never read is not a control." },
            { who: "nour", text: "That is the finding. What would you do about it?" },
            { who: "lina", text: "Once a month, take ten sheets at random and check that the positions are spread. It takes twenty minutes and it tells us whether step two happened." },
            { who: "fadi", text: "I would rather it was not me who checked. I filled the field in. Somebody who did not should read it." },
            { who: "nour", text: "Agreed, and that is the better of the two things you have said today. Lina reads them, Fadi fills them, and the separation is the point rather than an insult to either of you." },
            { who: "samer", text: "One more thing, which is about the client and not about us. Marwan found the shade fault on the Levant Home batch by resampling when the first set looked even. That is in no procedure anywhere." },
            { who: "nour", text: "Then write it in. Not as a rule, because a rule would be ignored. Write it as a note under step two: if a sample looks unusually uniform, take a second one." },
            { who: "lina", text: "And put his name on the note, in the revision history. People read the history." },
            { who: "nour", text: "His name goes on it. So: Fadi owns the position field, Lina owns the monthly read-back, Samer tells the client we have changed the procedure and why, and Marwan's note goes under step two with his name against it." },
            { who: "samer", text: "I came in wanting to add something that was already there, which I should have checked." },
            { who: "nour", text: "You came in with the right diagnosis and the wrong fix, and the room produced the right fix in about four minutes. That is what the meeting is for." },
            { who: "fadi", text: "Can I ask something? Will the revision history say I added the column in March?" },
            { who: "nour", text: "It will say it now. It should have said it in March, and that is mine, not yours." } ] },
        items: [
          { q: "What does Nour rule out of scope at the start?",
            options: [
              { text: "Fixing dyeing.", correct: true,
                why: "Shade is the biggest cause and she still separates the fault from the finding of the fault." },
              { text: "Discussing step two.", why: "Step two is most of what the meeting discusses." },
              { text: "Giving credit.", why: "She puts it in scope in the same sentence." } ] },
          { q: "What is Samer's diagnosis?",
            options: [
              { text: "Step two is written well and performed badly.", correct: true,
                why: "A distinction between the procedure and the practice, which is why his fix is about evidence rather than wording." },
              { text: "Step two is badly written.", why: "He says the opposite, explicitly." },
              { text: "The sheet is missing a field.", why: "His proposal, and it turns out to be wrong about the facts." } ] },
          { q: "Why does Nour refuse Fadi’s “I only added a column”?",
            options: [
              { text: "Because the column is what made step two checkable.", correct: true,
                why: "She names the specific consequence rather than repeating the compliment, which is the pattern from 1A." },
              { text: "Because he is being modest.", why: "She does not argue about his modesty. She argues about what the column does." },
              { text: "Because the audit required it.", why: "The audit prompted it. Her point is about what it achieved." } ] },
          { q: "What does Lina identify that Samer’s proposal would not have fixed?",
            options: [
              { text: "That nobody reads the recorded positions back.", correct: true,
                why: "The field exists, so adding it again changes nothing. A record never read is not a control." },
              { text: "That the positions are not recorded.", why: "They are, since March." },
              { text: "That the bench is in the wrong place.", why: "Mentioned as a cause of convenience and not as the finding." } ] },
          { q: "Why does Fadi ask not to be the one who checks?",
            options: [
              { text: "Because he fills the field in, so somebody else should read it.", correct: true,
                why: "He has invented the separation of duties from Unit 10 without being asked for it." },
              { text: "Because he is too busy.", why: "He gives no such reason." },
              { text: "Because he does not understand the positions.", why: "He created the field." } ] },
          { q: "Why does Nour write Marwan’s resampling in as a note rather than a rule?",
            options: [
              { text: "Because a rule to resample whenever a sample looks even would be ignored.", correct: true,
                why: "She says so directly. A procedure full of unenforceable rules teaches people to skim it." },
              { text: "Because it is not important enough for a rule.", why: "It found the fault that reached the client." },
              { text: "Because Marwan is not in the meeting.", why: "His absence is why his name must be written down, not why the note is a note." } ] },
          { q: "What does Lina add about the note?",
            options: [
              { text: "That Marwan’s name goes in the revision history, because people read it.", correct: true,
                why: "She turns credit into a record in the one document that outlives the meeting." },
              { text: "That he should be thanked in person.", why: "Which would be the kindness rather than the record." },
              { text: "That the note should be a rule after all.", why: "She does not reopen that." } ] },
          { q: "What does Nour take responsibility for at the end?",
            options: [
              { text: "That the revision history did not credit Fadi in March.", correct: true,
                why: "The last line of the meeting, and it is about her own failure to record somebody else's work." },
              { text: "That Samer’s proposal was wrong.", why: "She credits him with the diagnosis and leaves the fix with the room." },
              { text: "That shade faults are too high.", why: "Explicitly out of scope today." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Say who did what", letter: "A",
        concepts: ["speak", "people"],
        kind: "phrases", task: null, n: 0,
        prompt: "The sentences that put names on a procedure. Click each one.",
        note: { kind: "life", title: "Refuse the deflection with a fact",
                body: "<p>When somebody says <em>I only did X</em>, agreeing is easy and it ends the credit. Naming what X actually achieved is harder, takes one sentence, and is the only version anybody remembers.</p>" },
        text: "Fadi added that field in March, after the audit, and it is the reason we can answer the client at all. I only added a column. You added the column that makes step two checkable. That is the better of the two things you have said today. Marwan found the shade fault by resampling when the first set looked even. And put his name on the note, in the revision history. It should have said it in March, and that is mine, not yours.",
        phrases: [
          { text: "Fadi added that field in March, after the audit, and it is the reason we can answer the client at all.",
            why: "Name, date, specific act, and why it mattered. All three parts from 1A, said by somebody other than the person who did it." },
          { text: "I only added a column.",
            why: "The deflection, word for word. Worth learning to recognise in yourself, because it sounds like modesty and functions as erasure." },
          { text: "You added the column that makes step two checkable.",
            why: "The refusal. Same column, stated in terms of what it does, and now it cannot be given back." },
          { text: "That is the better of the two things you have said today.",
            why: "Comparative credit. It tells him which of his contributions to repeat, which plain praise never does." },
          { text: "Marwan found the shade fault by resampling when the first set looked even.",
            why: "Credit to somebody who is not in the room, which is the only kind that cannot be a favour." },
          { text: "And put his name on the note, in the revision history.",
            why: "Moves the credit out of the meeting and into a document. Six words, and it outlasts everyone present." },
          { text: "It should have said it in March, and that is mine, not yours.",
            why: "The manager taking the failure for the missing credit. Nobody states a name after this without being believed." }
        ],
        after: "<p>Three of these are about one column in a form. The procedure changed in four minutes; the naming is what took the rest of the meeting, and it is the part that will still be true next year.</p>" },

      { id: "2b", section: 2, sectionTitle: "Say who did what", letter: "B",
        concepts: ["people", "comparison"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "A compliment, and the same thing as a record",
        head: ["Compliment", "What is missing", "Record"],
        rows: [
          ["The report is much clearer", "A ___ ", "Fadi split the defects from the non-conformances"],
          ["Good catch on that batch", "The specific ___ ", "Marwan resampled when the first set looked even"],
          ["Thanks for the sheet", "Why it ___ ", "Filed by batch number, so it took two minutes"],
          ["Well done everyone", "___ at all", "Lina reads the sheets, Fadi fills them"]
        ],
        gaps: [
          { answer: "name", why: "The first thing a compliment drops, and the only one nobody can reconstruct later." },
          { answer: "act", why: "<i>Good catch</i> describes the outcome. Resampling a uniform-looking set is the thing that can be copied." },
          { answer: "mattered", why: "Filing by batch rather than by date is why it was quick, and it is advice to whoever files next." },
          { answer: "Names", why: "A group compliment is a decision not to say who, and people hear it as exactly that." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Say who did what", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people and a procedure. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Samer", detail: "Proposes a field that has existed since March, without checking." },
          { id: "c2", label: "Fadi", detail: "Answers credit with <i>I only added a column</i>." },
          { id: "c3", label: "Wael", detail: "Thanks the office for the quick inspection sheet." },
          { id: "c4", label: "Hala", detail: "Writes the resampling note into the procedure and leaves the name off it." }
        ],
        takeaways: [
          { text: "Check what the document already says before proposing to change it.",
            caseId: "c1",
            why: "His diagnosis was right and four minutes of reading would have moved the meeting straight to the real finding." },
          { text: "A deflection sounds like modesty and works like erasure.",
            caseId: "c2",
            why: "Nobody reading the procedure next year would know whose column it was, which is what Lina's revision-history line prevents." },
          { text: "Nobody can be thanked by department.",
            caseId: "c3",
            why: "From Unit 11's monologue: if you do not know who did it, ask first. The right person is usually in the room." },
          { text: "A note with no name is advice; a note with a name is a record.",
            caseId: "c4",
            why: "She has done the hard part and dropped the part that costs nothing and lasts longest." }
        ],
        closer: "<p>The meeting changed one note and one monthly habit. What it mostly did was decide whose names were on things, and that is why Fadi's last question is the one worth remembering.</p>" }

    ]
  };
})();
