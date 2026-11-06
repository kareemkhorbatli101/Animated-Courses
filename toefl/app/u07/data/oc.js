/* Unit 7 · Markets and Choices — ON CAMPUS
   Function: ask a procedural question at an office. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "7-12", label: "The market will decide", lines: [{ who: "haddad", text:
          "There is a sentence I want you to be suspicious of whenever you meet it, and it is that the market will decide. The market is not a person and it does not decide anything. What exists is a very large number of people, each responding to the prices and rules they face, and the pattern that results. Saying that the market decided is a way of describing an outcome without naming anyone responsible for the rules that produced it. Take a congestion charge. If you price entry to a city centre, traffic falls. That is not the market deciding; that is a specific rule, set by a specific body, having a predictable effect. If the charge is set too low, traffic does not fall and the scheme is called a failure of the market, when it was a failure of the price. The reason this matters to you is that almost every economic argument you will read contains at least one sentence of this kind. When you find it, ask who set the rule, and what they were trying to achieve. The answer is usually available and usually interesting." }] };

  window.PAGE = {
    id: "u07-oc", unit: "u07", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask a procedural question at an office",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about fees. It plays once.",
        speaker: "dan", speakerNote: "student finance",
        audio: { track: "7-11", label: "A reminder about fees", lines: [{ who: "dan", text:
          "A reminder about fees. The deadline for the second instalment is the fifteenth, not the end of the month as it was last year. If you have arranged a payment plan the deadline does not apply to you. The office is closed between one and two every day, so come before or after." }] },
        items: [
          { q: "What has changed since last year?",
            options: [
              { text: "The deadline has moved earlier in the month.", correct: true,
                why: "The fifteenth rather than the end of the month — the comparison is explicit." },
              { text: "The amount has increased.", why: "No amount is mentioned." },
              { text: "The office hours have changed.", why: "The hours are given, but not as a change." }
            ] },
          { q: "Who is exempt from the deadline?",
            options: [
              { text: "Students who have arranged a payment plan.", correct: true,
                why: "The <i>if</i> clause names them, and <i>does not apply to you</i> is the exemption." },
              { text: "Everyone, this year.", why: "The exemption is conditional." },
              { text: "Nobody.", why: "One group is named." }
            ] },
          { q: "Why does the speaker mention one to two?",
            options: [
              { text: "To stop people arriving when the office is shut.", correct: true,
                why: "<i>so come before or after</i> states the purpose directly." },
              { text: "To say when the deadline falls.", why: "The deadline is a date, not an hour." },
              { text: "To announce a change to the hours.", why: "It is presented as a standing fact." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out in the finance office queue. It plays once.",
        speaker: "dan", speakerNote: "office clerk",
        audio: { track: "7-13", label: "Three things about instalments", lines: [{ who: "dan", text:
          "Three things while you are waiting. Payment plans are recorded against your student number and not your name, so if you have changed your name this year, check the number on the confirmation rather than the heading. Second, we stop taking payments at half past three even though the office is open until four, because the till has to be reconciled, and people are caught by that every week. And third, a late fee can be reversed, but only on written evidence. A phone call is not evidence, however reasonable it sounds, and neither is my memory of this conversation." }] },
        items: [
          { q: "What should a student who has changed their name check?",
            options: [
              { text: "The student number on the confirmation.", correct: true,
                why: "He gives the reason first — plans are filed by number — and then what follows from it." },
              { text: "That the heading shows their new name.", why: "The heading is exactly what he says not to rely on." },
              { text: "Whether their plan has been cancelled.", why: "Cancellation is not mentioned." }
            ] },
          { q: "Why do payments stop at half past three?",
            options: [
              { text: "The till has to be reconciled before the office closes.", correct: true,
                why: "The <i>because</i> clause gives it, and the next clause says this catches people every week." },
              { text: "The office closes at half past three.", why: "It is open until four, which is what makes the rule catch people." },
              { text: "The clerk finishes at half past three.", why: "Staffing is not mentioned." }
            ] },
          { q: "What does he say about a phone call?",
            options: [
              { text: "It does not count as evidence for reversing a fee.", correct: true,
                why: "And he includes his own memory in the same sentence, which is the part that makes the rule credible." },
              { text: "It is enough if the clerk agrees.", why: "He explicitly rules out his own recollection." },
              { text: "It must be followed by a visit.", why: "Written evidence is what he asks for, not attendance." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a sentence to be suspicious of. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>“The market will decide” names an outcome without naming anyone responsible for the rules. Ask who set the rule, and what they were trying to achieve.</p>",
        items: [
          { q: "What is the speaker's objection to <i>the market will decide</i>?",
            options: [
              { text: "It describes an outcome while hiding who set the rules.", correct: true,
                why: "That is her own formulation, and the congestion charge is the worked example of it." },
              { text: "Markets do not produce predictable effects.", why: "She says a priced entry has a predictable effect." },
              { text: "Congestion charges do not work.", why: "She says they do, if the price is right." }
            ] },
          { q: "What happens if a congestion charge is set too low?",
            options: [
              { text: "Traffic does not fall, and the market is blamed.", correct: true,
                why: "She names the misdiagnosis explicitly: a failure of the price, called a failure of the market." },
              { text: "Traffic falls more slowly.", why: "She says it does not fall." },
              { text: "The charge is automatically raised.", why: "No mechanism of that kind is described." }
            ] },
          { q: "What two questions does she tell you to ask?",
            options: [
              { text: "Who set the rule, and what were they trying to achieve.", correct: true,
                why: "Her closing instruction — the thing worth writing on the pad." },
              { text: "What the price is, and who pays it.", why: "Not the pair she gives." },
              { text: "Whether the market is free, and whether it is fair.", why: "Neither word appears." }
            ] },
          { q: "What would she say about a report blaming <i>market forces</i> for rising rents?",
            options: [
              { text: "It is avoiding the question of who set the relevant rules.", correct: true,
                why: "One step from her thesis: the phrase names an outcome and leaves the rule-setters unnamed." },
              { text: "It is a complete explanation.", why: "That is the kind of sentence she is warning against." },
              { text: "It proves rents are not controllable.", why: "Her congestion example shows prices respond to rules." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on who a flat charge really falls on.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "7-14", label: "The same five pounds", lines: [{ who: "haddad", text:
          "Last week I asked you to be suspicious of the sentence that the market will decide. Today I want to take one rule and ask who it lands on. A congestion charge of five pounds. It is the same five pounds for everybody, which sounds like fairness and is not. For a household with very little spare income, five pounds a day is a prohibition. For a household with a great deal, it is a parking fee and barely noticed. Now hold those two facts together, because the consequence is uncomfortable. The traffic reduction the scheme reports comes almost entirely from the first household. The second one is still driving. So the scheme achieves its target by changing the behaviour of the people least able to absorb it, and the benefit — the quieter street, the cleaner air — is enjoyed most by the people who did not change. I am not telling you the charge is wrong. The instrument is good and the design is separable from it. Return the revenue as an equal payment to every resident and you keep the incentive exactly as it was, because the charge has not moved, while reversing who ends up worse off. That is not a compromise. It is the same policy, specified properly." }] },
        transcript: "<p>The same five pounds is a prohibition for one household and a parking fee for another. The reduction comes from the first; the benefit goes to the second. Returning the revenue equally reverses that without touching the incentive.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "An identical charge produces unequal effects, and the revenue can be used to correct that.", correct: true,
                why: "She states the asymmetry, draws the uncomfortable consequence, and then separates the design from the instrument." },
              { text: "Congestion charges should be abolished.", why: "<i>The instrument is good</i> — she says so directly." },
              { text: "The charge should vary with income.", why: "Her remedy leaves the charge identical and changes what happens afterwards." }
            ] },
          { q: "Where does she say the traffic reduction comes from?",
            options: [
              { text: "Almost entirely from the households least able to absorb the charge.", correct: true,
                why: "Because the other household is, in her words, still driving." },
              { text: "From both households roughly equally.", why: "That is what the flat sum looks like and not what it does." },
              { text: "From people who were already using the bus.", why: "They were never paying the charge, so they cannot be the source of a change." }
            ] },
          { q: "Why does she say her remedy keeps the incentive intact?",
            options: [
              { text: "The charge itself does not move, so the reason to drive less is unchanged.", correct: true,
                why: "The payment is separate from the charge and reaches everyone, driver or not." },
              { text: "The payment is only for people who stop driving.", why: "That would change the incentive, which is exactly what she avoids." },
              { text: "The revenue is returned to the roads.", why: "She returns it to residents." }
            ] },
          { q: "What does she mean by “not a compromise — the same policy, specified properly”?",
            options: [
              { text: "The redistribution is part of designing the policy well, not a concession to critics.", correct: true,
                why: "She is refusing the framing in which fairness is traded against effectiveness." },
              { text: "The policy should be weakened to make it acceptable.", why: "<i>Not a compromise</i> rejects this reading in three words." },
              { text: "The charge should be set lower.", why: "The level of the charge is not what she is changing." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — the market will decide",
        note: { kind: "reader",
                body: "<p>She opens with a sentence to distrust, says what is actually going on instead, gives an example, and ends with two questions to ask. Those four are the outline.</p>" },
        lines: [
          "Be suspicious of: <i>the market will ___ </i>",
          "- What exists instead: many people responding to ___ and rules",
          "- Example: a charge set too low is called a failure of the market, but it is a failure of the ___",
          "- Two questions to ask: who ___ the rule, and what were they trying to achieve"
        ],
        gaps: [
          { answer: "decide", why: "the sentence she spends the whole talk dismantling." },
          { answer: "prices", why: "her replacement for the agent that does not exist." },
          { answer: "price", why: "the example turns on the difference between the market and the number somebody chose." },
          { answer: "set", why: "the first of her two closing questions, and the one that restores the missing agent." }
        ] },

      { id: "c", section: 3, sectionTitle: "Ask a procedural question", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. At an office, the quality of the answer depends almost entirely on the shape of the question.",
        note: { kind: "speak",
                body: "<i>What happens if I…?</i><i>Is there a deadline for that?</i><i>What do I need to bring?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT A PROCEDURAL ANSWER",
          blocks: [
            { h: "Do this", lines: [
              "Ask what happens, not whether it is allowed.",
              "Ask for the deadline and the documents in the same breath.",
              "Ask what the fallback is, before you need it."
            ] },
            { h: "Say this", lines: [
              "What happens if I can't get here before the fifteenth?",
              "What do I need to bring, and is there a deadline for the form?",
              "If I miss it, is there a way to appeal — and how long does that take?"
            ] }
          ] },
        after: "<p>Asking what happens rather than whether you may gets you the rule itself, instead of one person's reading of it.</p>" },

      { id: "c2", section: 3, sectionTitle: "Ask a procedural question", letter: "B",
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each question gets you that the obvious one does not.",
        caption: "Four questions, and what each one gets you",
        head: ["Question", "What you say", "What it gets you"],
        rows: [
          ["Ask what happens",    "What ___ if I cannot get here before the fifteenth?", "the rule, instead of one person's reading of it"],
          ["Bundle the two",      "What do I need to bring, and is there a ___ for the form?", "both halves in one visit rather than two"],
          ["Ask for the fallback","If I miss it, is there a way to ___ ?", "the answer while you still have time to use it"],
          ["Ask about evidence",  "What would you need from me in ___ ?", "the thing to keep, before the ___ you need it"]
        ],
        gaps: [
          { answer: "happens", why: "<i>What happens if…</i> gets the procedure; <i>am I allowed</i> gets an opinion." },
          { answer: "deadline", why: "documents and dates are one question in practice and two in most people's mouths." },
          { answer: "appeal", why: "the fallback is useless once you need it and free to ask about now." },
          { answer: "writing", why: "Lesson 4's whole problem was a plan with no written trace against the right number." },
          { answer: "day", why: "evidence is cheap to obtain in advance and often impossible to obtain afterwards." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Ask a procedural question", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "One sentence to leave with.",
        text: { blocks: [{ lines: [
          "Ask what happens, not whether you may. The first question gets you the rule; the second gets you whatever the person in front of you believes about it."
        ],
        closer: { kind: "life",
          body: "<p>Next time you deal with an office, ask the fallback question before you need the fallback. Note how much it saves you later.</p>" } }] } }
    ]
  };
})();
