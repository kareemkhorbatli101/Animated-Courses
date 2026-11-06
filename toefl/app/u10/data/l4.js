/* Unit 10 · Rules, Rights and Ethics — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: which words carry the stress in a sentence. */
(function () {
  window.PAGE = {
    id: "u10-l4", unit: "u10", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Take a position, and hear where the emphasis falls",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I'd put it differently.</i><i>That's fair, up to a point.</i><i>Which part are you objecting to?</i>" },
        items: [
          { who: "priya", say: "So you think the rule is unjust?",
            options: [
              { text: "I think it's badly drafted, which isn't the same thing.", correct: true,
                why: "Refuses a position it was not asked to hold, and names the real one." },
              { text: "Yes, I think rules.", why: "Incomplete." },
              { text: "The rule is a rule.", why: "Says nothing." }
            ] },
          { who: "dan", say: "Breaking it quietly is still breaking it.",
            options: [
              { text: "Agreed — but the two aren't the same kind of act.", correct: true,
                why: "Concedes the point and locates the actual disagreement, which is the move this unit teaches." },
              { text: "No, it's not breaking it.", why: "Denies something the speaker did not need to claim." },
              { text: "Quietly is better.", why: "Asserts without arguing." }
            ] },
          { who: "tomas", say: "Didn't she deny taking them?",
            options: [
              { text: "She did, and then the emails turned up.", correct: true, why: "Answers the tag question and adds what changed." },
              { text: "She denied to take them.", why: "<i>Deny</i> takes a gerund, never an infinitive." },
              { text: "Yes, she took them.", why: "<i>Yes</i> to a negative question is ambiguous, and this contradicts the denial it affirms." }
            ] },
          { who: "mei", say: "He stopped answering after the third question.",
            options: [
              { text: "Did he say why?", correct: true, why: "Picks up <i>stopped answering</i> as a cessation and asks the obvious next thing." },
              { text: "So he paused to answer.", why: "Confuses <i>stop —ing</i> with <i>stop to —</i>." },
              { text: "He stopped to answer.", why: "The opposite meaning." }
            ] },
          { who: "dan", say: "I'm not objecting to the policy, only to how it was introduced.",
            options: [
              { text: "Then we're closer than I thought.", correct: true, why: "Hears the narrowing and responds to it." },
              { text: "So you oppose the policy.", why: "The sentence explicitly denies this." },
              { text: "I'm objecting too.", why: "Agrees without noticing what was conceded." }
            ] },
          { who: "priya", say: "If she'd accepted the penalty, nobody would have doubted her.",
            options: [
              { text: "And now half the committee does.", correct: true,
                why: "She did <b>not</b> accept it and she <b>is</b> doubted. Only this reply follows." },
              { text: "Good thing she accepted it.", why: "The counterfactual says she did not." },
              { text: "So nobody doubts her.", why: "The opposite of what is implied." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students preparing for a debate. Listen once.",
        speaker: "tomas", speakerNote: "with Priya Raman",
        audio: { track: "10-05", label: "Preparing for the debate", lines: [
          { who: "priya", text: "I've been given the side I don't agree with, which is going to be awkward." },
          { who: "tomas", text: "That's the point of it, though. You argue the case, not your opinion." },
          { who: "priya", text: "I know. The trouble is that the motion assumes its own conclusion — it says <i>unjust laws</i>, so it's already decided they're unjust." },
          { who: "tomas", text: "Then say so in your first thirty seconds. Challenging the wording is a legitimate opening." },
          { who: "priya", text: "Won't that look like avoiding the question?" },
          { who: "tomas", text: "Not if you then answer it anyway. Object, and then argue it on their terms as well." }
        ] },
        items: [
          { q: "What is Priya's difficulty?",
            options: [
              { text: "She has been assigned the side she disagrees with.", correct: true, why: "Her opening line, and the rest follows from it." },
              { text: "She has not prepared.", why: "Preparation is not the issue raised." },
              { text: "She has been given no side at all.", why: "She has been given one; that is the problem." }
            ] },
          { q: "What does she object to in the motion?",
            options: [
              { text: "The wording assumes the conclusion it asks about.", correct: true,
                why: "She explains it precisely: <i>unjust laws</i> has already decided they are unjust." },
              { text: "It is too long.", why: "Length is not mentioned." },
              { text: "It is about the wrong topic.", why: "The topic is not disputed." }
            ] },
          { q: "What does Tomás advise?",
            options: [
              { text: "Challenge the wording, then argue the motion anyway.", correct: true,
                why: "His last line adds the second half — and that is what stops it looking evasive." },
              { text: "Refuse to take part.", why: "He never suggests withdrawing." },
              { text: "Argue only her own opinion.", why: "He says the opposite in his first line." }
            ] },
          { q: "Why does Tomás say <i>and then argue it on their terms as well</i>?",
            options: [
              { text: "So that the objection cannot be read as avoidance.", correct: true,
                why: "It answers Priya's own worry, which she voices in the line before — purpose items usually sit on a reply like this." },
              { text: "Because the objection is weak.", why: "He calls it legitimate." },
              { text: "To fill the remaining time.", why: "Time is not his concern." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "English stresses the words that carry meaning and swallows the rest. Moving the stress changes what a sentence argues, without changing a word.",
        speaker: "haddad",
        lines: [
          { text: "I didn't say she took them.",
            note: "Stress <i>say</i>: I implied it. Stress <i>she</i>: someone else took them. Six words, six meanings." },
          { text: "Breaking the rule openly is not the same as breaking it quietly.",
            note: "<i>openly</i> and <i>quietly</i> carry the contrast; everything else is unstressed." },
          { text: "I'm not objecting to the policy, only to how it was introduced.",
            note: "<i>policy</i> and <i>how</i> take the stress — that is the whole concession." },
          { text: "Accepting the penalty is what makes the act an argument rather than an evasion.",
            note: "Four stressed words: <i>accepting, penalty, argument, evasion</i>. The rest is scaffolding." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … concede and still disagree · use a gerund as a subject · move the stress to change the meaning.</p>" } }
    ]
  };
})();
