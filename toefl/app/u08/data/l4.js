/* Unit 8 · Disease and Public Health — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: the z and s sounds in use / used to. */
(function () {
  window.PAGE = {
    id: "u08-l4", unit: "u08", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Report a problem clearly, and say what changed",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>It's been doing that since Tuesday.</i><i>It didn't use to.</i><i>I've been meaning to report it.</i>" },
        items: [
          { who: "dan", say: "Did this fridge use to run colder?",
            options: [
              { text: "It did, yes — until about a month ago.", correct: true, why: "Answers the <i>used to</i> question and dates the change." },
              { text: "Yes, it uses to.", why: "<i>Use to</i> has no present form." },
              { text: "It is used to running cold.", why: "That means accustomed — a different construction." }
            ] },
          { who: "mei", say: "How long has the alarm been going off?",
            options: [
              { text: "Since about six this morning.", correct: true, why: "<i>How long … been —ing</i> asks for a duration or a starting point." },
              { text: "It went off.", why: "Closes a period the question treats as open." },
              { text: "It used to go off.", why: "Puts it in a finished past." }
            ] },
          { who: "priya", say: "Have you reported it yet?",
            options: [
              { text: "Not yet — I've been meaning to.", correct: true, why: "<i>Not yet</i> plus a present perfect continuous for the intention that has been running." },
              { text: "I used to report it.", why: "Suggests a past habit of reporting, which is not the question." },
              { text: "Yes, tomorrow.", why: "<i>Yes</i> claims it is done, then puts it in the future." }
            ] },
          { who: "tomas", say: "The readings have been drifting all week.",
            options: [
              { text: "Have they? Then the calibration's gone.", correct: true, why: "Echo question with the auxiliary, then the inference." },
              { text: "They used to drift.", why: "Puts a continuing problem in the closed past." },
              { text: "They drift yesterday.", why: "Not a possible form." }
            ] },
          { who: "mei", say: "I'm used to working nights, so I'll take the late shift.",
            options: [
              { text: "That's good of you — I'll do the early one.", correct: true, why: "Accepts and matches the offer." },
              { text: "You used to work nights?", why: "Misreads <i>be used to</i> as <i>used to</i> — the trap this unit sets." },
              { text: "I'm using to work nights.", why: "Not a possible form." }
            ] },
          { who: "dan", say: "If we'd reported it on Monday, it would have been fixed by now.",
            options: [
              { text: "Let's report it this morning, then.", correct: true,
                why: "They did <b>not</b> report it and it is <b>not</b> fixed. Only this reply follows." },
              { text: "Good thing we reported it.", why: "The counterfactual says they did not." },
              { text: "So it's been fixed.", why: "The opposite of what the sentence implies." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A student reporting a problem in the lab. Listen once.",
        speaker: "mei", speakerNote: "with Dan Okafor",
        audio: { track: "8-05", label: "Reporting a fault", lines: [
          { who: "mei", text: "The incubator's been running warm. About two degrees over, since Tuesday." },
          { who: "dan", text: "Since Tuesday? Has anyone been using it?" },
          { who: "mei", text: "Three groups, I think. It didn't use to drift at all — that's what worries me." },
          { who: "dan", text: "Then we have to assume anything cultured in it this week is unreliable. Have you told the other groups?" },
          { who: "mei", text: "Not yet. I wanted to check I wasn't misreading the display first." },
          { who: "dan", text: "You're not. I'll put a notice on it now and you tell the groups." }
        ] },
        items: [
          { q: "What is the problem?",
            options: [
              { text: "The incubator has been running about two degrees too warm.", correct: true,
                why: "Her first line gives the fault, the size and the start date." },
              { text: "The incubator has stopped working.", why: "It is running, just warm." },
              { text: "The display is broken.", why: "She wondered about that; Dan confirms she is not misreading it." }
            ] },
          { q: "Why does Mei say <i>that's what worries me</i>?",
            options: [
              { text: "Because it never used to drift, so the fault is new.", correct: true,
                why: "<i>It didn't use to drift at all</i> — the closed past is what makes the present alarming." },
              { text: "Because three groups used it.", why: "That is a consequence she mentions, not her stated worry." },
              { text: "Because she may be misreading it.", why: "That is a doubt about herself, not the thing that worries her." }
            ] },
          { q: "What does Dan conclude?",
            options: [
              { text: "Anything cultured this week must be treated as unreliable.", correct: true,
                why: "He draws it as a consequence, with <i>then we have to assume</i>." },
              { text: "The incubator should be replaced.", why: "Replacement is not discussed." },
              { text: "The other groups are at fault.", why: "Nobody is blamed." }
            ] },
          { q: "What do they agree to do?",
            options: [
              { text: "Dan will label the machine; Mei will tell the groups.", correct: true, why: "His last line divides the two tasks explicitly." },
              { text: "Mei will label it and Dan will tell the groups.", why: "The reverse of what he says." },
              { text: "They will wait and watch it another day.", why: "Both act immediately." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "<b>use</b> is pronounced two ways. The verb takes /z/ — <i>I use it</i>. The noun, and <i>used to</i>, take /s/ — <i>a use</i>, <i>I useto</i>.",
        speaker: "haddad",
        lines: [
          { text: "I use it. It used to work.",
            note: "<i>use</i> /juːz/ as a verb; <i>used to</i> /juːstoʊ/ with /s/, and the <i>d</i> disappears." },
          { text: "We used to reuse the samples, but the new rules refuse that.",
            note: "<i>used to</i> /s/, <i>reuse</i> /z/, <i>refuse</i> /z/ — three decisions in one sentence." },
          { text: "She is used to using the smaller incubator.",
            note: "<i>is used to</i> /s/, <i>using</i> /z/ — and the meaning is <i>accustomed</i>, not <i>formerly</i>." },
          { text: "The researchers who used to work here have been reusing the older equipment.",
            note: "Relative clause, both pronunciations, and a present perfect continuous at the end." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … report a fault with its start date · use <i>didn't use to</i> · hear /s/ against /z/ in <i>use</i>.</p>" } }
    ]
  };
})();
