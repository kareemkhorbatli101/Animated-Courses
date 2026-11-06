/* Unit 8 · Disease and Public Health — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: the z and s sounds in use / used to. */
(function () {
  window.PAGE = {
    id: "u08-l4", unit: "u08", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Report a problem clearly, and say what changed",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        concepts: ["listen"],
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

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        concepts: ["listen", "measurement"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Three of them report a problem, and the reply has to hear which part is the problem.",
        items: [
          { who: "mei", say: "The incubator's been running warm since Tuesday.",
            options: [
              { text: "Since Tuesday — so this week's cultures are all in doubt.", correct: true,
                why: "Picks up the date and draws the consequence, which is the part the speaker has not yet said." },
              { text: "It used to run warm last year as well.", why: "History, when what is needed is what follows from now." },
              { text: "Have you turned it down?", why: "Jumps to a fix before establishing what has been affected." }
            ] },
          { who: "dan", say: "Did the clinic use to keep paper records?",
            options: [
              { text: "Until about two thousand and ten, I think.", correct: true,
                why: "Answers a <i>used to</i> question with the point at which the habit ended." },
              { text: "Yes, they are used to it.", why: "<i>Be used to</i> is a different construction meaning accustomed." },
              { text: "They have been keeping them for years.", why: "Present perfect continuous says the practice continues, which contradicts the question's premise." }
            ] },
          { who: "priya", say: "The rate has gone up to fifteen per cent.",
            options: [
              { text: "Out of how many tested?", correct: true,
                why: "A percentage with no denominator is not yet information. This unit's single most useful question." },
              { text: "That is very high.", why: "Accepts the figure before knowing what it is a fraction of." },
              { text: "It used to be lower.", why: "Comparing two rates whose denominators may differ compounds the problem." }
            ] },
          { who: "tomas", say: "I haven't told the other groups yet.",
            options: [
              { text: "Tell them now and I will write to the supervisor.", correct: true,
                why: "Divides the work and treats the disclosure as urgent, which it is." },
              { text: "Why not?", why: "Turns a disclosure into a reproach, and the speaker has volunteered it." },
              { text: "Neither have I.", why: "Nobody has, which is the problem rather than a comfort." }
            ] },
          { who: "haddad", say: "Have you been working on the register all week?",
            options: [
              { text: "Since Monday, yes — about half of it is done.", correct: true,
                why: "The present perfect continuous asks about an activity in progress; the answer gives the start and the state." },
              { text: "I used to work on it.", why: "That closes the door on something the question assumes is still open." },
              { text: "I worked on it on Monday.", why: "A single finished occasion answers a different question." }
            ] },
          { who: "dan", say: "If we'd checked the display against a thermometer, we'd have caught it on Tuesday.",
            options: [
              { text: "Let's put a second thermometer in it now.", correct: true,
                why: "They did <b>not</b> check and did <b>not</b> catch it. Only this reply works from that." },
              { text: "Good, so we caught it on Tuesday.", why: "They did not; the counterfactual says so." },
              { text: "So you checked it against a thermometer.", why: "That is precisely what did not happen." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference"],
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

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students working out what a rise in a rate actually means. Listen once.",
        speaker: "mei", speakerNote: "with Priya Raman",
        audio: { track: "8-05", label: "The rate went up", lines: [
          { who: "mei", text: "The fatality rate went from nine per cent to fifteen in a fortnight." },
          { who: "priya", text: "Did the deaths go up, or did the tests go down?" },
          { who: "mei", text: "Deaths rose from forty five to fifty. Tests fell from five hundred to three hundred and thirty." },
          { who: "priya", text: "So the top barely moved and the bottom fell by a third." },
          { who: "mei", text: "Which means the rise is mostly about who is being tested now." },
          { who: "priya", text: "It is still five more people. The rate is misleading and the deaths are real." }
        ] },
        items: [
          { q: "What is Priya's first question?",
            options: [
              { text: "Whether the change came from the deaths or from the testing.", correct: true,
                why: "She separates the two halves of the fraction before accepting anything about the rate." },
              { text: "Whether the figure is accurate.", why: "She never doubts the arithmetic, which is what makes her question sharper." },
              { text: "How many people have recovered.", why: "Recoveries are not mentioned." }
            ] },
          { q: "What happened to the number of tests?",
            options: [
              { text: "It fell from five hundred to three hundred and thirty.", correct: true,
                why: "Mei gives both numbers, and Priya immediately converts them into <i>a third</i>." },
              { text: "It rose to five hundred.", why: "Five hundred is where it started." },
              { text: "It stayed the same.", why: "The fall is what drives the whole conversation." }
            ] },
          { q: "What does Mei conclude about the rise?",
            options: [
              { text: "It is mostly a change in who is being tested.", correct: true,
                why: "The numerator barely moved, so the movement is in the denominator." },
              { text: "The outbreak has become more severe.", why: "That is what the rate appears to say and what the numbers do not support." },
              { text: "The deaths have been recorded wrongly.", why: "Nobody questions the death count." }
            ] },
          { q: "What is Priya's last point?",
            options: [
              { text: "The rate misleads, and the five extra deaths are still real.", correct: true,
                why: "She refuses to let the statistical correction become a reason to dismiss the thing being counted." },
              { text: "The rate should not have been published.", why: "Publication is not discussed here." },
              { text: "The deaths are a rounding error.", why: "She says the opposite in four words." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
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
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more. The same four letters, two sounds, and the difference carries the whole construction.",
        speaker: "haddad",
        lines: [
          { text: "I use it. I used to.", note: "/juːz/ for the verb, /juːst/ for the closed past. Two words apart." },
          { text: "We are used to using it every week.",
            note: "<i>used to</i> with /s/, then <i>using</i> with /z/, in one clause." },
          { text: "Did the clinic use to keep a paper register?",
            note: "No <i>d</i> on the page, and the sound is /juːs/ either way — which is why the spelling is so often wrong." },
          { text: "Staff who used to work nights are now used to working days instead.",
            note: "The closed past and the accustomed state in one sentence, both pronounced /juːst/. Only the grammar tells them apart." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>English writes one word and says two. The verb <i>use</i> ends in <b>/z/</b> and the noun <i>use</i> ends in <b>/s/</b>, and the same split runs through several common pairs. In <i>used to</i> the sound is /s/, which is why the <i>d</i> is so often left off in writing.</p>" +
               "<i>/z/ — to use · to close · to excuse · to house</i><i>/s/ — a use · close by · an excuse · a house</i>",
        items: [
          { say: "a use",
            options: [
              { text: "a use", correct: true, why: "/s/ — the noun. An article in front is the surest clue." },
              { text: "to use", why: "/z/ — the verb, and the <i>to</i> would be an infinitive marker rather than a preposition." }
            ] },
          { say: "to close",
            options: [
              { text: "close by", why: "/s/ — the adjective, meaning near." },
              { text: "to close", correct: true, why: "/z/ — the verb. The same letters mean two unrelated things." }
            ] },
          { say: "an excuse",
            options: [
              { text: "an excuse", correct: true, why: "/s/ — the noun, with an article." },
              { text: "to excuse", why: "/z/ — the verb, and the vowel before it is slightly longer." }
            ] },
          { say: "used to",
            options: [
              { text: "used to", correct: true, why: "/juːst/ — the closed past, and the <i>d</i> is written but not separately heard." },
              { text: "use to", why: "identical in sound, and correct only after <i>did</i>. The ear cannot settle this one; the grammar has to." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Two of them turn on a letter you cannot hear.",
        items: [
          { answer: "Cholera used to kill thousands every summer",
            why: "<i>used to</i> is /juːst tuː/ with no separate <i>d</i>, and writing <i>use to</i> here would be wrong." },
          { answer: "Did the clinic use to keep a paper register",
            why: "the same sound, and here the <i>d</i> must not be written, because <i>did</i> is carrying the past." },
          { answer: "Researchers have been tracking the decline for over a century",
            why: "<i>have been</i> reduces almost to nothing; write both words." },
          { answer: "Out of how many people tested",
            why: "the question this whole unit is about, and the one most worth being able to produce instantly." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … report a fault with its start date · use <i>didn't use to</i> · hear /s/ against /z/ in <i>use</i>.</p>" } }
    ]
  };
})();
