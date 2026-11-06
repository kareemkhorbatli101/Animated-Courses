/* Unit 10 · Rules, Rights and Ethics — ON CAMPUS
   Function: take a position in a debate. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "10-12", label: "Two ways of breaking a rule", lines: [{ who: "haddad", text:
          "I want to put a question to you that sounds simple and is not. Should a rule ever be broken? The usual classroom answer is that it depends on the rule, which is true and almost useless, so let us be more precise. There is a difference between a rule you think is wrong and a rule you think does not apply to you. Breaking a rule you believe is unjust, openly, and accepting the penalty, is a recognised political act with a long history. Breaking the same rule quietly, because it is inconvenient, is not that act, even when the rule is equally unjust and the person equally sincere. The difference is not in the rule and it is not in the motive. It is in whether you are trying to change the rule or trying to escape it. And notice what follows. Accepting the penalty is not a moral flourish. It is the thing that makes the act legible as an argument rather than as an evasion. Take that away and the observer cannot tell the two cases apart, which means the act can no longer do the work it was meant to do." }] };

  window.PAGE = {
    id: "u10-oc", unit: "u10", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Take a position in a debate",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
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

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out before a debate. It plays once.",
        speaker: "dan", speakerNote: "debating society",
        audio: { track: "10-13", label: "Thursday's debate", lines: [{ who: "dan", text:
          "Three things about Thursday. Speakers get seven minutes each and we will cut you off at seven, which sounds harsh and is the only way the evening finishes. Sides are assigned, not chosen, and if you find yourself arguing for something you do not believe, that is the exercise rather than an accident. And a procedural note: objections to the wording of the motion go to the committee by Tuesday, in writing. Raising them on the night is not an objection, it is a speech, and it will come out of your seven minutes." }] },
        items: [
          { q: "What happens at seven minutes?",
            options: [
              { text: "The speaker is stopped.", correct: true,
                why: "<i>We will cut you off</i>, and he gives the reason: otherwise the evening does not end." },
              { text: "The speaker gets a warning.", why: "No warning is mentioned." },
              { text: "The debate moves to questions.", why: "Nothing about questions appears." }
            ] },
          { q: "What does he say about being assigned a side you disagree with?",
            options: [
              { text: "That it is the point of the exercise.", correct: true,
                why: "<i>That is the exercise rather than an accident</i> — he forestalls the complaint before it arrives." },
              { text: "That you may ask to swap.", why: "Sides are assigned, not chosen." },
              { text: "That you should say so in your speech.", why: "He makes no such suggestion." }
            ] },
          { q: "How must an objection to the wording be made?",
            options: [
              { text: "In writing, to the committee, by Tuesday.", correct: true,
                why: "Three conditions in one sentence, and the last line says what happens if you ignore them." },
              { text: "At the start of your speech.", why: "That would come out of your seven minutes, which is his point." },
              { text: "To the chair on the night.", why: "He rules this out explicitly." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen", "inference"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on whether a rule may be broken. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
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

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on how two true accounts can disagree.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "10-14", label: "Everything in it is true", lines: [{ who: "haddad", text:
          "Here are two reports of the same afternoon. The first begins with eleven arrests. The second begins with four thousand people. Both numbers appear in both reports. Nothing has been invented and nothing has been omitted. And yet a reader of the first comes away with a disturbance, and a reader of the second with a demonstration. So where did that come from? Two places, and neither of them is a lie. The first is order. Whatever stands at the top of a report is what the report is about, and deciding what goes first is a judgement about what matters, made by somebody, usually in a hurry. The second is the verb. A crowd that clashed with police has done something. A crowd that was dispersed by police has had something done to it. Same afternoon, and the agent has moved from one side of the sentence to the other. Now, I am not telling you both reports are equally good. I am telling you that you cannot settle which is better by checking the facts, because the facts are not where the disagreement is. You settle it by asking what each report decided to put first, and why." }] },
        transcript: "<p>Order and voice. Whatever stands first is what the report is about, and a crowd that clashed has done something while a crowd that was dispersed has had something done to it.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "Two reports can differ in impression without differing in fact.", correct: true,
                why: "She establishes that nothing is invented or omitted, then names the two levers that remain." },
              { text: "One of the two reports is dishonest.", why: "<i>Neither of them is a lie</i> — she says so directly." },
              { text: "Readers should check the facts more carefully.", why: "Her closing point is that checking facts will not settle it." }
            ] },
          { q: "What does she say about whatever stands at the top of a report?",
            options: [
              { text: "It is what the report is about, and placing it there is a judgement.", correct: true,
                why: "And she adds who makes the judgement and under what conditions — somebody, usually in a hurry." },
              { text: "It is the most reliable fact in the report.", why: "Reliability is not what ordering tracks." },
              { text: "It is chosen by the editor rather than the reporter.", why: "She says <i>somebody</i> and leaves it there." }
            ] },
          { q: "What is the difference she draws between the two verbs?",
            options: [
              { text: "One makes the crowd the doer; the other makes it the thing done to.", correct: true,
                why: "<i>The agent has moved from one side of the sentence to the other</i>." },
              { text: "One is more violent than the other.", why: "Her point is about who acts, not about degree." },
              { text: "One is a passive and therefore less accurate.", why: "She never suggests the passive is inaccurate." }
            ] },
          { q: "How does she say the question should be settled?",
            options: [
              { text: "By asking what each report put first, and why.", correct: true,
                why: "Her closing instruction, and it follows from the facts being identical in both." },
              { text: "By checking the facts against a third source.", why: "She has just said the facts are not where the disagreement is." },
              { text: "By preferring whichever report is longer.", why: "Length never comes up." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — two ways of breaking a rule",
        note: { kind: "reader",
                body: "<p>She refuses the easy answer, draws a distinction, says where the distinction is <i>not</i>, and then says what follows. The third line is the one worth copying into your own notes.</p>" },
        lines: [
          "Question: should a rule ever be broken? <i>It depends</i> is true and almost ___",
          "- Open breaking, accepting the ___ : a recognised political act",
          "- The difference is not in the rule and not in the ___",
          "- It is whether you are trying to ___ the rule or to escape it"
        ],
        gaps: [
          { answer: "useless", why: "her own verdict on the classroom answer, and the reason the talk continues." },
          { answer: "penalty", why: "the condition that makes the act what it is." },
          { answer: "motive", why: "the thing she rules out, which Lesson 5's second article then argues at length." },
          { answer: "change", why: "the criterion, in one word, and the one to leave with." }
        ] },

      { id: "c", section: 3, sectionTitle: "Take a position", letter: "A",
        concepts: ["read", "claim"],
        kind: "phrases", task: null, n: 0,

        phrases: [

          { text: "Say what you accept before you say what you reject.",

            say: "Say what you accept before you say what you reject.",

            when: "The first move of any disagreement.",

            why: "It proves you have understood the other case and shrinks the argument to the part genuinely in dispute, which is usually smaller than either side expected." },

          { text: "Narrow the claim you are defending until you can defend it.",

            say: "Narrow the claim you are defending until you can defend it.",

            when: "As soon as you notice you are defending more than you believe.",

            why: "A narrow claim you can hold beats a broad one you cannot. Most positions are lost defending the parts nobody needed to claim." },

          { text: "Name what would change your mind.",

            say: "Name what would change your mind.",

            when: "Before the argument hardens.",

            why: "The rarest and the most powerful. It costs nothing if you are right, and it is the only thing that tells anyone you are arguing rather than defending." },

          { text: "I accept that the rule is badly drafted. What I dispute is that it is unjust.",

            say: "I accept that the rule is badly drafted. What I dispute is that it is unjust.",

            when: "When the other side has a real point that does not reach their conclusion.",

            why: "Concede and narrow in two sentences. The whole disagreement is now one word wide, and both sides can see where it is." },

          { text: "My objection isn\u0027t to the policy \u2014 it\u0027s to how it was introduced.",

            say: "My objection is not to the policy. It is to how it was introduced.",

            when: "When you are being argued with about something you do not actually dispute.",

            why: "Relocates the disagreement rather than defending ground you never wanted. Saying what you are not objecting to is half the sentence." },

          { text: "If it turned out the consultation was genuine, I would drop the objection.",

            say: "If it turned out the consultation was genuine, I would drop the objection.",

            when: "Once your objection rests on a question of fact.",

            why: "A falsifiable position, offered freely. It converts an argument into a question somebody can go and answer." }

        ],
        prompt: "In a debate the strongest openings concede before they argue. Hear each line, say it along with the model, then rate what you could produce unprompted.",
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
        after: "<p>The third is the rarest and the most powerful. Naming in advance what would change your mind is what separates an argument from a position.</p>" },

      { id: "c2", section: 3, sectionTitle: "Take a position", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each move costs the other side.",
        caption: "Four moves, and what each one costs the other side",
        head: ["Move", "What you say", "What it costs them"],
        rows: [
          ["Concede first",   "I ___ that the rule is badly drafted", "the easy reply, which was to prove the thing you just granted"],
          ["Narrow the claim","What I ___ is that it is unjust", "the version of your position they had prepared for"],
          ["Separate two things", "My objection isn't to the policy, it's to ___ it was introduced", "the right to defend the policy instead of the process"],
          ["Name your own defeat", "If the consultation turned out to be ___ , I would drop the objection", "the suspicion that you cannot be ___ "]
        ],
        gaps: [
          { answer: "accept", why: "conceding a specific point, not the whole case, which is what makes it usable." },
          { answer: "dispute", why: "the narrower the claim, the easier it is to hold." },
          { answer: "how", why: "splitting one argument into two, only one of which you are having." },
          { answer: "genuine", why: "the condition that would defeat you, stated before anybody asks for it." },
          { answer: "moved", why: "the rarest move, and the one that converts a position into an argument." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Take a position", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "y1", label: "The fortified position",

            detail: "Ahmad has argued the same point for an hour and could not say what evidence would move him, because he has not asked himself." },

          { id: "y2", label: "The cost that was not there",

            detail: "Lamis believes naming a condition would weaken her case, so she keeps it to herself and the discussion stalls." },

          { id: "y3", label: "The unreadable opponent",

            detail: "Two students cannot tell whether the other is reasoning or defending, so neither concedes anything at all." }

        ],

        takeaways: [

          { text: "<b>Saying in advance what would change your mind</b>", caseId: "y1",

            why: "Ahmad is defending rather than arguing and does not know it. The question he has not asked himself is the one that would tell him." },

          { text: "<b>costs you nothing if you are right,</b>", caseId: "y2",

            why: "Lamis has imagined a cost that does not exist. If her condition is never met, she has conceded nothing; if it is, she was wrong and wanted to know." },

          { text: "<b>and it is the only thing that tells anyone you are arguing rather than defending.</b>", caseId: "y3",

            why: "Without it there is no way to tell the two apart from outside, so neither student can safely give ground. One stated condition unlocks both sides." }

        ],
        prompt: "One sentence to leave with \u2014 and three arguments that will not end. Drag each part onto the one it would change.",
        text: { blocks: [{ lines: [
          "Saying in advance what would change your mind costs you nothing if you are right, and it is the only thing that tells anyone you are arguing rather than defending."
        ],
        closer: { kind: "life",
          body: "<p>In your next disagreement, say one thing you accept before the thing you reject. Notice whether the other person softens.</p>" } }] } }
    ]
  };
})();
