/* Unit 11 · How Science Works — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: rising and falling intonation. */
(function () {
  window.PAGE = {
    id: "u11-l4", unit: "u11", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Acknowledge a contribution, and hear a question in the tune",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>That was Priya's idea, not mine.</i><i>Building on what Tomás said…</i><i>Credit where it's due —</i>" },
        items: [
          { who: "dan", say: "Has the sample been weighed?",
            options: [
              { text: "Not yet — I'll do it before we start.", correct: true, why: "<i>Not yet</i> answers a present perfect passive question." },
              { text: "Yes, I weigh it.", why: "Present simple for a completed action." },
              { text: "It weighs.", why: "Wrong voice: the sample does not weigh itself." }
            ] },
          { who: "mei", say: "Nice catch on the calibration.",
            options: [
              { text: "That was Priya's, actually — she spotted the drift.", correct: true,
                why: "Redirects credit accurately, which is this unit's On Campus skill." },
              { text: "Yes, I'm good at that.", why: "Accepts credit that may not be due." },
              { text: "It was nothing.", why: "Polite, but it loses the information about who found it." }
            ] },
          { who: "priya", say: "Was the analysis done independently?",
            options: [
              { text: "It was — by a group in Leeds.", correct: true, why: "Confirms the passive and supplies the agent, which here is the whole point." },
              { text: "Yes, we did it.", why: "That is the opposite of independent." },
              { text: "It analysed itself.", why: "Not possible." }
            ] },
          { who: "tomas", say: "So nobody's been able to reproduce it?",
            options: [
              { text: "Three groups have tried. None has.", correct: true, why: "Answers precisely, and distinguishes trying from succeeding." },
              { text: "Nobody could reproduce.", why: "Incomplete, and <i>could</i> is the wrong form after <i>has been</i>." },
              { text: "Yes, it's reproduced.", why: "Contradicts the question it appears to confirm." }
            ] },
          { who: "mei", say: "The readings were taken every minute?",
            options: [
              { text: "Every thirty seconds, actually.", correct: true,
                why: "The rising tune makes a statement into a question; this answers the real one and corrects it." },
              { text: "Yes, they take them.", why: "Wrong tense and voice." },
              { text: "I'm taking them now.", why: "Answers about the present, not the method." }
            ] },
          { who: "dan", say: "If the method had been registered, nobody could object now.",
            options: [
              { text: "We should register the next one.", correct: true,
                why: "It was <b>not</b> registered and people <b>are</b> objecting. Only this reply follows." },
              { text: "Good thing it was registered.", why: "The counterfactual says it was not." },
              { text: "So nobody objects.", why: "The opposite of what is implied." }
            ] }
        ] },

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Three of them are chances to give credit, and the reply either takes them or does not.",
        items: [
          { who: "mei", say: "I think the problem is the denominator.",
            options: [
              { text: "That was Priya's point last week — and I think you're both right.", correct: true,
                why: "Credits the earlier source and agrees with the present one, which costs nothing and corrects the record." },
              { text: "Yes, somebody said that before.", why: "<i>Somebody</i> is the word that makes an acknowledgement useless." },
              { text: "I was going to say that.", why: "Claims priority instead of giving it." }
            ] },
          { who: "dan", say: "Has anyone managed to reproduce it?",
            options: [
              { text: "No group has been able to, as far as I know.", correct: true,
                why: "<i>Can</i> has no perfect form, so this is the only way to say it — and the hedge at the end is honest." },
              { text: "No group has could.", why: "Not a possible form in English, which is the reason <i>be able to</i> is taught." },
              { text: "It was reproduced.", why: "Answers the opposite of the question." }
            ] },
          { who: "priya", say: "The samples were heated to sixty degrees.",
            options: [
              { text: "By whom, or does it not matter?", correct: true,
                why: "Asks whether the dropped agent is a convention or a concealment, which is this unit's central question." },
              { text: "Who heated them?", why: "Reasonable, and it assumes the answer matters before checking whether it does." },
              { text: "They heated the samples.", why: "Rewrites the sentence actively without adding anything." }
            ] },
          { who: "tomas", say: "The difference was significant.",
            options: [
              { text: "Statistically significant, or large?", correct: true,
                why: "The two senses are nearly opposite, and the question takes three seconds." },
              { text: "How significant?", why: "Treats it as a matter of degree, which the technical sense is not." },
              { text: "So it is important.", why: "Exactly the inference the technical term does not license." }
            ] },
          { who: "haddad", say: "It's a theory, not a fact.",
            options: [
              { text: "In this field a theory is the strong case, not the weak one.", correct: true,
                why: "Corrects the everyday reading of a technical word, which Lesson 1 sorted." },
              { text: "Yes, so we can't rely on it.", why: "Takes the everyday sense and draws a conclusion from it." },
              { text: "Everything is a theory.", why: "True, unhelpful, and it dissolves the distinction rather than using it." }
            ] },
          { who: "dan", say: "If they'd registered the analysis, nobody could have questioned it.",
            options: [
              { text: "They didn't, so the question is open.", correct: true,
                why: "They did <b>not</b> register it. Only this reply works from that." },
              { text: "Good, so nobody questioned it.", why: "People did; the registration never happened." },
              { text: "So they registered the analysis.", why: "The counterfactual says the opposite." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students after a seminar. Listen once.",
        speaker: "priya", speakerNote: "with Tomás Ferreira",
        audio: { track: "11-05", label: "After the seminar", lines: [
          { who: "tomas", text: "Your point about the denominator went down well. Haddad wrote it on the board." },
          { who: "priya", text: "That wasn't mine, though. Mei made it last week and I just repeated it." },
          { who: "tomas", text: "Did she? I don't remember that." },
          { who: "priya", text: "She said it quietly, right at the end, and nobody picked it up. Which is sort of the problem." },
          { who: "tomas", text: "Then say so on Thursday. It costs you nothing and it costs her a lot not to." }
        ] },
        items: [
          { q: "What is Priya's position?",
            options: [
              { text: "The idea she was praised for was Mei's.", correct: true, why: "She corrects the credit immediately and names the source." },
              { text: "She does not understand the point.", why: "She explains it well enough to repeat it." },
              { text: "Tomás made the point.", why: "He is the one giving the praise." }
            ] },
          { q: "Why does she say <i>which is sort of the problem</i>?",
            options: [
              { text: "Because a point made quietly can be lost and later credited elsewhere.", correct: true,
                why: "She has just explained that Mei said it quietly and nobody picked it up — the generalisation follows from that." },
              { text: "Because the seminar was too long.", why: "Length is not mentioned." },
              { text: "Because Haddad was not listening.", why: "Haddad wrote it on the board, so she was." }
            ] },
          { q: "What does Tomás suggest?",
            options: [
              { text: "That Priya credit Mei publicly on Thursday.", correct: true,
                why: "<i>Say so on Thursday</i>, with the asymmetry of cost as his reason." },
              { text: "That she say nothing, to avoid embarrassment.", why: "He argues the other way." },
              { text: "That she ask Haddad to correct the record.", why: "He puts it on Priya, not on the lecturer." }
            ] },
          { q: "What is his argument for doing it?",
            options: [
              { text: "The cost to Priya is nothing and the cost to Mei is large.", correct: true,
                why: "He states the asymmetry explicitly, which is what makes it an argument rather than an appeal." },
              { text: "That it is a rule of the seminar.", why: "No rule is mentioned." },
              { text: "That Mei will find out anyway.", why: "He never raises discovery." }
            ] }
        ] },

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students trying to repeat somebody else's experiment. Listen once.",
        speaker: "mei", speakerNote: "with Tomás Beltrán",
        audio: { track: "11-05", label: "Eight per cent out", lines: [
          { who: "mei", text: "We are eight per cent below their figure, every single run." },
          { who: "tomas", text: "Every run the same way? Then it is not noise." },
          { who: "mei", text: "No. Something systematic. The method does not give the calibration settings." },
          { who: "tomas", text: "Is that in the supplementary material?" },
          { who: "mei", text: "I checked. It is not there either." },
          { who: "tomas", text: "Then write and ask. A consistent gap is a question about the method, not an accusation." }
        ] },
        items: [
          { q: "Why does Tomás say it is not noise?",
            options: [
              { text: "The discrepancy is the same in every run.", correct: true,
                why: "Random error scatters; a constant offset points at something in the procedure." },
              { text: "Eight per cent is too large for noise.", why: "He reasons from the consistency, not the size." },
              { text: "They have only run it once.", why: "Mei says <i>every single run</i>." }
            ] },
          { q: "What is missing from the published method?",
            options: [
              { text: "The calibration settings for the instrument.", correct: true,
                why: "And Mei has already checked the one place it would normally be hiding." },
              { text: "The number of runs.", why: "Not mentioned as missing." },
              { text: "The statistical analysis.", why: "The analysis is not in question here." }
            ] },
          { q: "What has Mei already done?",
            options: [
              { text: "Checked the supplementary material.", correct: true,
                why: "Which is what makes writing to the author a reasonable next step rather than a first resort." },
              { text: "Written to the authors.", why: "That is what Tomás suggests next." },
              { text: "Recalibrated the instrument.", why: "They do not know what to recalibrate it to." }
            ] },
          { q: "How does Tomás frame the message they should send?",
            options: [
              { text: "As a question about the method rather than an accusation.", correct: true,
                why: "The framing is the whole advice: a consistent gap has many innocent causes." },
              { text: "As a formal complaint.", why: "He says explicitly that it is not an accusation." },
              { text: "As a request to withdraw the paper.", why: "Nothing of the kind is proposed." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "The tune carries meaning on its own. A <b>rising</b> end makes a statement into a question or signals you have not finished; a <b>falling</b> end closes it.",
        speaker: "haddad",
        lines: [
          { text: "The readings were taken every minute.",
            note: "Falling: a statement. Rising: a question, with not a word changed." },
          { text: "It was carried out independently, wasn't it?",
            note: "A falling tag expects agreement; a rising tag genuinely asks." },
          { text: "Three groups have tried, and none has succeeded.",
            note: "Rising on <i>tried</i> says more is coming; falling on <i>succeeded</i> closes it." },
          { text: "If the method had been registered beforehand, none of this would be in dispute.",
            note: "Rising through the conditional clause, falling on the main clause — the tune marks the structure." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more. Say each line twice, once rising and once falling, and listen to what changes.",
        speaker: "haddad",
        lines: [
          { text: "They registered the analysis first.",
            note: "Falling: a statement of fact. Rising: you are checking, and perhaps surprised." },
          { text: "You checked the supplementary material, didn't you?",
            note: "Falling tag: you expect yes. Rising tag: you genuinely do not know." },
          { text: "It is not an accusation, it is a question.",
            note: "Rising on <i>accusation</i>, falling on <i>question</i>: the tune carries the correction." },
          { text: "If the settings had been published, none of this would have taken a fortnight.",
            note: "Rising through the conditional, falling on the main clause — the tune marks the structure of the sentence." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>Four pairs that are confused constantly in writing about method, and in speech the difference is one consonant or one vowel. In each case the two words make different claims about evidence, so hearing them wrongly changes what you think was found.</p>" +
               "<i>infer (work out from evidence) · imply (suggest without saying)</i><i>precision (how fine) · accuracy (how close to true)</i>",
        items: [
          { say: "infer",
            options: [
              { text: "infer", correct: true, why: "what the reader does: works it out from what is there." },
              { text: "imply", why: "what the writer does: suggests it without stating it. The two sit at opposite ends of the same sentence." }
            ] },
          { say: "accept",
            options: [
              { text: "except", why: "apart from. A preposition." },
              { text: "accept", correct: true, why: "to take or agree to. The first vowels are both schwas, so only the sense separates them." }
            ] },
          { say: "principle",
            options: [
              { text: "principle", correct: true, why: "a rule or basic truth — <i>the principle behind the method</i>." },
              { text: "principal", why: "chief, or the person in charge. Identical in speech." }
            ] },
          { say: "elicit",
            options: [
              { text: "illicit", why: "forbidden. An adjective." },
              { text: "elicit", correct: true, why: "to draw out a response. A verb, and the pair is near-identical: both begin with an unstressed vowel." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Two of them contain a word from 4A.",
        items: [
          { answer: "No group has been able to reproduce the original finding",
            why: "<i>has been able to</i> reduces heavily in speech; write all four words." },
          { answer: "The analysis was carried out by an independent team",
            why: "a passive whose agent is kept, because the independence is the point." },
          { answer: "We can infer that the gap is systematic rather than random",
            why: "<i>infer</i>, not <i>imply</i>: the reader is doing the work here." },
          { answer: "Each instrument is calibrated twice a year",
            why: "a present passive, and the <i>-ed</i> is almost inaudible before <i>twice</i>." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … redirect credit accurately · use the passive without an agent · hear a question in the tune alone.</p>" } }
    ]
  };
})();
