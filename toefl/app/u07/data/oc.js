/* Unit 7 · Markets and Choices — ON CAMPUS
   Function: ask a procedural question at an office. */
(function () {
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

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a sentence to be suspicious of. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "7-12", label: "The market will decide", lines: [{ who: "haddad", text:
          "There is a sentence I want you to be suspicious of whenever you meet it, and it is that the market will decide. The market is not a person and it does not decide anything. What exists is a very large number of people, each responding to the prices and rules they face, and the pattern that results. Saying that the market decided is a way of describing an outcome without naming anyone responsible for the rules that produced it. Take a congestion charge. If you price entry to a city centre, traffic falls. That is not the market deciding; that is a specific rule, set by a specific body, having a predictable effect. If the charge is set too low, traffic does not fall and the scheme is called a failure of the market, when it was a failure of the price. The reason this matters to you is that almost every economic argument you will read contains at least one sentence of this kind. When you find it, ask who set the rule, and what they were trying to achieve. The answer is usually available and usually interesting." }] },
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
        after: "<p>Asking what happens rather than whether you may gets you the rule itself, instead of one person's reading of it.</p>",
        closer: { kind: "life",
          body: "<p>Next time you deal with an office, ask the fallback question before you need the fallback. Note how much it saves you later.</p>" } }
    ]
  };
})();
