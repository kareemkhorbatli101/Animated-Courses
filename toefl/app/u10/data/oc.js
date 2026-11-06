/* Unit 10 · Rules, Rights and Ethics — ON CAMPUS
   Function: take a position in a debate. */
(function () {
  window.PAGE = {
    id: "u10-oc", unit: "u10", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Take a position in a debate",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about Thursday's debate. It plays once.",
        speaker: "dan", speakerNote: "debating society",
        audio: { track: "10-11", label: "About the debate", lines: [{ who: "dan", text:
          "About the debate on Thursday. The motion has been reworded after a complaint that it assumed its own conclusion, and the new wording is on the noticeboard. Speakers keep the sides they were assigned. If you were planning to speak from the floor, you do not need to register in advance." }] },
        items: [
          { q: "Why was the motion reworded?",
            options: [
              { text: "Someone complained that it assumed its own conclusion.", correct: true,
                why: "Stated as the reason, and it is the same objection Priya raises in Lesson 4." },
              { text: "The topic was changed.", why: "The wording changed, not the topic." },
              { text: "Too few people registered.", why: "Registration is a separate point." }
            ] },
          { q: "What happens to the speakers' sides?",
            options: [
              { text: "They stay as assigned.", correct: true, why: "“Speakers keep the sides they were assigned.”" },
              { text: "They are reassigned with the new wording.", why: "Explicitly not." },
              { text: "Speakers may now choose.", why: "No choice is offered." }
            ] },
          { q: "What do floor speakers need to do?",
            options: [
              { text: "Nothing in advance.", correct: true, why: "“you do not need to register in advance”." },
              { text: "Register by Wednesday.", why: "The opposite." },
              { text: "Submit their point in writing.", why: "Not mentioned." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on whether a rule may be broken. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "10-12", label: "Two ways of breaking a rule", lines: [{ who: "haddad", text:
          "I want to put a question to you that sounds simple and is not. Should a rule ever be broken? The usual classroom answer is that it depends on the rule, which is true and almost useless, so let us be more precise. There is a difference between a rule you think is wrong and a rule you think does not apply to you. Breaking a rule you believe is unjust, openly, and accepting the penalty, is a recognised political act with a long history. Breaking the same rule quietly, because it is inconvenient, is not that act, even when the rule is equally unjust and the person equally sincere. The difference is not in the rule and it is not in the motive. It is in whether you are trying to change the rule or trying to escape it. And notice what follows. Accepting the penalty is not a moral flourish. It is the thing that makes the act legible as an argument rather than as an evasion. Take that away and the observer cannot tell the two cases apart, which means the act can no longer do the work it was meant to do." }] },
        transcript: "<p>The difference is not in the rule or the motive. It is whether you are trying to change the rule or escape it — and accepting the penalty is what makes that visible to anyone else.</p>",
        items: [
          { q: "What distinction is the speaker drawing?",
            options: [
              { text: "Between trying to change a rule and trying to escape it.", correct: true,
                why: "She says it in those words, after explicitly ruling out the rule and the motive." },
              { text: "Between just and unjust rules.", why: "She says the rule may be equally unjust in both cases." },
              { text: "Between sincere and insincere people.", why: "She says the person may be equally sincere." }
            ] },
          { q: "What does she say accepting the penalty is <i>not</i>?",
            options: [
              { text: "A moral flourish.", correct: true, why: "Her exact phrase, and she immediately says what it is instead." },
              { text: "A political act.", why: "She calls the whole thing a recognised political act." },
              { text: "Legally required.", why: "Legal requirement is not discussed." }
            ] },
          { q: "What is the function of accepting the penalty, on her account?",
            options: [
              { text: "It makes the act readable as an argument rather than an evasion.", correct: true,
                why: "<i>Legible</i> is her word, and it is about what an observer can tell." },
              { text: "It reduces the sentence.", why: "No sentencing effect is claimed." },
              { text: "It proves the rule is unjust.", why: "It proves nothing about the rule." }
            ] },
          { q: "Why does she say the act “can no longer do the work it was meant to do”?",
            options: [
              { text: "Because an observer cannot distinguish it from self-interest.", correct: true,
                why: "One step from the previous sentence — the two cases become indistinguishable." },
              { text: "Because the rule will not change.", why: "She makes no prediction about outcomes." },
              { text: "Because it becomes illegal.", why: "It was already a breach of the rule." }
            ] }
        ] },

      { id: "c", section: 3, sectionTitle: "Take a position", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. In a debate the strongest openings concede before they argue.",
        note: { kind: "speak",
                body: "<i>I accept that… What I dispute is…</i><i>My objection isn't to… it's to…</i><i>Even granting that, …</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO TAKE A POSITION",
          blocks: [
            { h: "Do this", lines: [
              "Say what you accept before you say what you reject.",
              "Narrow the claim you are defending until you can defend it.",
              "Name what would change your mind."
            ] },
            { h: "Say this", lines: [
              "I accept that the rule is badly drafted. What I dispute is that it is unjust.",
              "My objection isn't to the policy — it's to how it was introduced.",
              "If it turned out the consultation was genuine, I would drop the objection."
            ] }
          ] },
        after: "<p>The third is the rarest and the most powerful. Naming in advance what would change your mind is what separates an argument from a position.</p>",
        closer: { kind: "life",
          body: "<p>In your next disagreement, say one thing you accept before the thing you reject. Notice whether the other person softens.</p>" } }
    ]
  };
})();
