/* Unit 5 · Exploring Space — ON CAMPUS
   Function: give a helpful suggestion in a group project. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "5-12", label: "Why we send machines", lines: [{ who: "haddad", text:
          "I am often asked why so much of what we do in space is done without people, and the honest answer has three parts. The first is duration. A probe can wait. It can spend seven years travelling to a planet and then work for twenty more, and it does not need to be fed or brought home. No crewed mission has ever been designed on that timescale, and none realistically could be. The second is mass. Every kilogram of life support is a kilogram not spent on instruments, and the ratio is brutal: a crewed vehicle carries a small fraction of the scientific payload that an uncrewed one of the same mass can carry. The third part is the one people like least. It is risk. We have lost a great many spacecraft and we will lose more, and that is an acceptable cost precisely because nobody is aboard. Now, I want to be careful here, because this is not an argument that people should never go. There are things a geologist standing on a surface can do in an afternoon that a rover has not managed in a decade. But if the question is where the knowledge has come from so far, the answer is overwhelmingly from machines that went alone." }] };

  window.PAGE = {
    id: "u05-oc", unit: "u05", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Give a helpful suggestion in a group project",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen", "sample"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice sent to the observing group. It plays once.",
        speaker: "dan", speakerNote: "session coordinator",
        audio: { track: "5-11", label: "Tonight is off", lines: [{ who: "dan", text:
          "Tonight is off. Cloud cover is forecast at ninety per cent after ten, so the observing session is cancelled and we have rebooked the dome for Tuesday. If you have already written your observing plan, keep it. Nothing about the targets has changed, only the date." }] },
        items: [
          { q: "Why is the session cancelled?",
            options: [
              { text: "Heavy cloud is forecast.", correct: true, why: "Ninety per cent after ten, with <i>so</i> introducing the consequence." },
              { text: "The dome is unavailable.", why: "The dome has been rebooked, which is the fix, not the cause." },
              { text: "The targets have changed.", why: "The last line says exactly the opposite." }
            ] },
          { q: "What should students who wrote a plan do?",
            options: [
              { text: "Keep it — it is still valid.", correct: true,
                why: "“Nothing about the targets has changed, only the date” gives the reason for keeping it." },
              { text: "Write a new one for Tuesday.", why: "The announcement is at pains to say that is unnecessary." },
              { text: "Send it to the coordinator.", why: "No submission is requested." }
            ] },
          { q: "What has changed?",
            options: [
              { text: "Only the date.", correct: true, why: "Stated in the final clause, as a deliberate contrast." },
              { text: "The date and the targets.", why: "The targets are explicitly unchanged." },
              { text: "The location.", why: "The same dome has been rebooked." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out before an observing run. It plays once.",
        speaker: "dan", speakerNote: "dome technician",
        audio: { track: "5-13", label: "Before the run", lines: [{ who: "dan", text:
          "Three things before Tuesday. The shutter now takes about eight minutes to open rather than four, so start it before you do anything else and set up while it runs. The weather station is reading two degrees high, which the supplier is aware of, so take the humidity from the handheld instead until it is replaced. And a reminder that the logbook is a legal record of who was in the building: sign in even if you are only collecting something, and sign out even if the sky was useless." }] },
        items: [
          { q: "What should you do first on arrival?",
            options: [
              { text: "Start the shutter opening, then set up while it runs.", correct: true,
                why: "The instruction and its reason come together: it now takes eight minutes rather than four." },
              { text: "Check the weather station.", why: "The weather station is the second item, and he tells you not to trust it." },
              { text: "Sign the logbook.", why: "Required, but he does not order the three items by when they happen." }
            ] },
          { q: "Why should the humidity be taken from the handheld?",
            options: [
              { text: "The fixed weather station is reading two degrees high.", correct: true,
                why: "The fault is named, and the handheld is given as the substitute until it is replaced." },
              { text: "The handheld is more accurate in general.", why: "He says nothing about it except that it is the one to use for now." },
              { text: "The weather station has been removed.", why: "It is still there, and still wrong." }
            ] },
          { q: "What does he say about signing out?",
            options: [
              { text: "Do it even if the night produced nothing.", correct: true,
                why: "<i>Even if the sky was useless</i> — the clause exists because that is exactly when people forget." },
              { text: "Only sign out if you signed in.", why: "He asks for both, in all cases." },
              { text: "The operator signs out on your behalf.", why: "No such arrangement is mentioned." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on why so much exploration is uncrewed. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>Duration, mass and risk. And a caveat: a geologist on a surface can do in an afternoon what a rover has not managed in a decade.</p>",
        items: [
          { q: "What are the three reasons she gives?",
            options: [
              { text: "Duration, mass and risk.", correct: true, why: "She numbers them, which is the clearest possible signal to write them down." },
              { text: "Cost, distance and politics.", why: "None of these is named." },
              { text: "Speed, accuracy and training.", why: "Not her three." }
            ] },
          { q: "What does she mean by saying the mass ratio is <i>brutal</i>?",
            options: [
              { text: "Life support takes mass that would otherwise be instruments.", correct: true,
                why: "She states the trade directly: every kilogram of one is a kilogram not spent on the other." },
              { text: "Crewed vehicles are heavier overall.", why: "Her comparison holds mass constant — <i>of the same mass</i>." },
              { text: "Launching is physically dangerous.", why: "That is risk, her third reason, not mass." }
            ] },
          { q: "Why does she say the loss of spacecraft is acceptable?",
            options: [
              { text: "Because nobody is aboard.", correct: true, why: "“precisely because nobody is aboard” — the word <i>precisely</i> marks it as the whole reason." },
              { text: "Because they are inexpensive.", why: "Cost is not her argument here." },
              { text: "Because they are easily replaced.", why: "Replacement is not mentioned." }
            ] },
          { q: "What is the purpose of the last two sentences?",
            options: [
              { text: "To limit her own argument before someone else does.", correct: true,
                why: "“I want to be careful here, because this is not an argument that people should never go” — she concedes the one case against her." },
              { text: "To introduce a new topic.", why: "It returns to the same question she opened with." },
              { text: "To withdraw the three reasons.", why: "She reaffirms them in the final clause." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "measurement"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on how a field decides what it has found.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "5-14", label: "Candidate or detection", lines: [{ who: "haddad", text:
          "You will read the word candidate a great deal this term, and I want you to understand that it is not a hedge. It is a decision. Any method that looks for faint signals has to put a line somewhere, and wherever the line goes it creates two kinds of mistake. Put it low and you will catch every real object and also some things that are not objects at all. Put it high and you will throw away real ones. There is no setting that avoids both, and anyone who tells you otherwise is selling something. Now, which mistake would you rather make? This field has mostly chosen to risk missing things, and the reason is not statistical. It is about what happens afterwards. A false detection gets announced, repeated, built on, and then quietly withdrawn two years later, and the withdrawal reaches perhaps a tenth of the people the announcement reached. A missed planet is usually found by somebody else within a few years, and the embarrassment is confined to one team. So when a paper says candidate about an object the authors are privately confident in, they are not being coy. They are telling you which of those two futures they decided to risk." }] },
        transcript: "<p>A threshold creates two mistakes and removes neither. The field risks missing things, because a withdrawal travels less far than an announcement. <i>Candidate</i> is that decision, written down.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "<i>Candidate</i> records a choice between two unavoidable errors.", correct: true,
                why: "She opens by refusing to call it a hedge and closes by saying what it is instead." },
              { text: "Faint signals cannot be measured reliably.", why: "She says nothing against the measurements; the problem is where to draw the line." },
              { text: "Thresholds should be set lower.", why: "She describes the field's preference without recommending a change." }
            ] },
          { q: "What happens if the threshold is set low?",
            options: [
              { text: "Everything real is caught, and some things that are not real as well.", correct: true,
                why: "She gives both halves in one sentence, which is what makes it a trade-off." },
              { text: "Real objects are discarded.", why: "That is the high-threshold error." },
              { text: "Nothing is detected at all.", why: "A low threshold detects more, not less." }
            ] },
          { q: "Why does she say the field's preference is not statistical?",
            options: [
              { text: "Because it turns on how far a withdrawal travels compared with an announcement.", correct: true,
                why: "She puts a number on it — about a tenth — which is a fact about readers rather than about the data." },
              { text: "Because the statistics are too difficult.", why: "She never suggests the arithmetic is in doubt." },
              { text: "Because the threshold is chosen at random.", why: "The opposite: she describes it as a deliberate decision." }
            ] },
          { q: "What would she say about a paper that calls an object a candidate?",
            options: [
              { text: "The authors are telling you which error they chose to risk.", correct: true,
                why: "Her closing sentence, and she rules out coyness by name in the one before it." },
              { text: "The authors doubt their own measurement.", why: "She says they may be privately confident." },
              { text: "The object is probably not real.", why: "No probability attaches to the word; that is the point of it being a decision." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — why we send machines",
        note: { kind: "reader",
                body: "<p>She numbers her reasons out loud — <i>the first</i>, <i>the second</i>, <i>the third</i> — which is the clearest signal a lecturer ever gives that an outline is wanted. Take it.</p>" },
        lines: [
          "Three reasons for uncrewed missions",
          "- One: ___ — a probe can wait seven years and then work for twenty",
          "- Two: ___ — every kilogram of life support is a kilogram of instruments lost",
          "- Three: ___ — we lose spacecraft, and that is acceptable because nobody is aboard",
          "- Caveat: a ___ on a surface can do in an afternoon what a rover has not managed in a decade"
        ],
        gaps: [
          { answer: "duration", why: "her own heading for the first reason, and the one she spends longest on." },
          { answer: "mass", why: "the second, with the ratio she calls brutal." },
          { answer: "risk", why: "the third, and the one she says people like least." },
          { answer: "geologist", why: "the caveat matters more than the three reasons, because it is the part that is still open." }
        ] },

      { id: "c", section: 3, sectionTitle: "Make a suggestion", letter: "A",
        concepts: ["read"],
        kind: "phrases", task: null, n: 0,

        phrases: [

          { text: "Offer it as one option, not as the answer.",

            say: "Offer it as one option, not as the answer.",

            when: "Every time, and especially when you are confident.",

            why: "<i>One option would be</i> leaves room for a better idea. <i>We should</i> makes anyone with a better idea have to defeat yours first." },

          { text: "Say what problem it solves.",

            say: "Say what problem it solves.",

            when: "Attached to the suggestion, in the same breath.",

            why: "A suggestion without a problem is a preference. With one, the group can judge it on something other than who said it." },

          { text: "Offer to do part of it yourself.",

            say: "Offer to do part of it yourself.",

            when: "Before the group has to decide who would.",

            why: "The one that changes outcomes. Attaching your own labour is what separates a suggestion from an instruction." },

          { text: "What if we took the second half? Our targets don\u0027t rise until after midnight anyway.",

            say: "What if we took the second half? Our targets do not rise until after midnight anyway.",

            when: "When your preference happens to cost you nothing.",

            why: "<i>What if</i> opens it as a question, and the reason given makes clear you are not simply taking the better slot." },

          { text: "One option would be to split the night \u2014 though I think that wastes both setups.",

            say: "One option would be to split the night, though I think that wastes both setups.",

            when: "When you want to put an option on the table and argue against it.",

            why: "Naming the alternative yourself, with its weakness, is far more persuasive than waiting for someone else to raise it." },

          { text: "Would it help if I wrote to the technician this afternoon?",

            say: "Would it help if I wrote to the technician this afternoon?",

            when: "As the suggestion lands, before anyone asks who will do it.",

            why: "<i>Would it help</i> asks permission to take work on, which is the one request almost nobody refuses." }

        ],
        prompt: "In a group project, a suggestion lands or not depending almost entirely on how it is framed. Hear each line, say it along with the model, then rate what you could produce unprompted.",
        note: { kind: "speak",
                body: "<i>What if we…?</i><i>One option would be to…</i><i>Would it help if I…?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO SUGGEST SOMETHING",
          blocks: [
            { h: "Do this", lines: [
              "Offer it as one option, not as the answer.",
              "Say what problem it solves.",
              "Offer to do part of it yourself."
            ] },
            { h: "Say this", lines: [
              "What if we took the second half? Our targets don't rise until after midnight anyway.",
              "One option would be to split the night — though I think that wastes both setups.",
              "Would it help if I wrote to the technician this afternoon?"
            ] }
          ] },
        after: "<p>The third pattern is the one that changes outcomes. Attaching your own labour to a suggestion is what separates it from an instruction.</p>" },

      { id: "c2", section: 3, sectionTitle: "Make a suggestion", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each move prevents.",
        caption: "Four moves, and what each one prevents",
        head: ["Move", "What you say", "What it prevents"],
        rows: [
          ["Offer one option",  "___ if we took the second half?", "the suggestion being heard as a decision already taken"],
          ["Name the problem",  "Our targets don't ___ until after midnight anyway", "the question <i>why would we do that?</i> arriving later"],
          ["Show you considered the alternative", "___ option would be to split the night", "somebody proposing it an hour afterwards"],
          ["Attach your own labour", "Would it ___ if I wrote to the technician?", "the suggestion being work for everybody ___ you"]
        ],
        gaps: [
          { answer: "What", why: "<i>What if…?</i> puts the idea on the table without claiming it." },
          { answer: "rise", why: "the reason is a fact anyone can check, which is what makes it persuasive rather than preferential." },
          { answer: "One", why: "<i>One option would be</i> shows you have thought of it and sets up your objection to it." },
          { answer: "help", why: "<i>Would it help if I…</i> is the whole pattern in five words." },
          { answer: "except", why: "the move that separates a suggestion from an instruction." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Make a suggestion", letter: "C",
        concepts: ["read", "comparison"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "s1", label: "The good idea nobody took",

            detail: "Hana proposes a neat fix for the timetable. Everyone agrees it is sensible. Nobody does it, and the meeting moves on." },

          { id: "s2", label: "The instruction",

            detail: "Youssef says the group should rewrite the method section. The others hear it as being told what to do and resist a change they privately agree with." },

          { id: "s3", label: "The volunteer who was not asked",

            detail: "Dalia would happily write to the technician but waits to be assigned, and the task sits unclaimed for a week." }

        ],

        takeaways: [

          { text: "A suggestion <b>with your own name attached to part of the work</b>", caseId: "s1",

            why: "Hana\u0027s idea was accepted and orphaned. An idea with nobody\u0027s name on it is everybody\u0027s to agree with and nobody\u0027s to start." },

          { text: "<b>is not a suggestion any more</b>.", caseId: "s2",

            why: "Youssef made a proposal that only other people would carry out, which is what an instruction is. The content was right; the shape made it refusable." },

          { text: "It is <b>an offer, and offers get accepted</b>.", caseId: "s3",

            why: "Dalia is waiting for a process that is not coming. <i>Would it help if I...</i> converts a stalled task into an accepted offer in one sentence." }

        ],
        prompt: "One sentence to leave with \u2014 and three meetings where a good idea is about to die. Drag each part onto the one it would save.",
        text: { blocks: [{ lines: [
          "A suggestion with your own name attached to part of the work is not a suggestion any more. It is an offer, and offers get accepted."
        ],
        closer: { kind: "life",
          body: "<p>In your next group meeting, make one suggestion using the third pattern. Notice whether it is taken up more readily than your usual phrasing.</p>" } }] } }
    ]
  };
})();
