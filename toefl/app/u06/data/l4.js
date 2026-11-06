/* Unit 6 · Food, Energy and the Body — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: linking in phrasal verbs. */
(function () {
  window.PAGE = {
    id: "u06-l4", unit: "u06", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Check that you have understood",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>So you mean…?</i><i>Just to check — is that…?</i><i>Sorry, which one?</i>" },
        items: [
          { who: "dan", say: "Can you warm it up for me?",
            options: [
              { text: "Sure — what temperature?", correct: true, why: "Accepts and asks the one thing that is missing." },
              { text: "Warm up it, yes.", why: "<i>Warm up it</i> is not possible with a pronoun." },
              { text: "It warmed up.", why: "Reports the past instead of agreeing to do it." }
            ] },
          { who: "mei", say: "Whose tray is that?",
            options: [
              { text: "Ours, I think.", correct: true, why: "A possessive pronoun answers <i>whose</i>, with no noun after it." },
              { text: "Ours tray.", why: "<i>Ours</i> never takes a noun. <i>Our tray</i> would be correct." },
              { text: "That's a tray.", why: "Answers <i>what</i>, not <i>whose</i>." }
            ] },
          { who: "priya", say: "The enzyme's been denatured.",
            options: [
              { text: "So we need to start again?", correct: true,
                why: "Checks the consequence — exactly the move this unit's On Campus page teaches." },
              { text: "Yes, it denatures.", why: "Shifts to a general truth and misses the news." },
              { text: "I denatured it yesterday.", why: "Possible, but it does not respond to what was said." }
            ] },
          { who: "tomas", say: "Just go over it once more before you start.",
            options: [
              { text: "The method, you mean?", correct: true, why: "Checks what <i>it</i> refers to, which is the commonest real ambiguity in a lab." },
              { text: "Go it over, right.", why: "<i>Go over</i> is inseparable." },
              { text: "I went over yesterday.", why: "Leaves the object out and changes the time." }
            ] },
          { who: "dan", say: "We've used up nearly all the reagent.",
            options: [
              { text: "Is there enough for one more run?", correct: true, why: "Takes the news and asks the practical consequence." },
              { text: "We used up it.", why: "A pronoun object must split the verb: <i>used it up</i>." },
              { text: "It uses up quickly.", why: "Wrong voice — the reagent does not use itself up." }
            ] },
          { who: "mei", say: "If we'd checked the bath, we wouldn't have lost the run.",
            options: [
              { text: "Let's check it first next time.", correct: true,
                why: "They did <b>not</b> check it and they <b>did</b> lose the run. Only this reply follows." },
              { text: "Good thing we checked it.", why: "The counterfactual says they did not." },
              { text: "So the run was fine.", why: "The opposite of what the sentence means." }
            ] }
        ] },

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. In three of them you have to work out what <i>it</i> refers to before you can answer.",
        items: [
          { who: "mei", say: "Shall I warm it up now?",
            options: [
              { text: "Give it another minute — the bath is still at thirty four.", correct: true,
                why: "Answers the offer with a reason, and the reason tells you <i>it</i> was the sample." },
              { text: "Yes, warm up it now.", why: "The word order is impossible with a pronoun object." },
              { text: "What is it?", why: "The referent is obvious from the bench; asking marks you as not following." }
            ] },
          { who: "dan", say: "Have you gone over the method yet?",
            options: [
              { text: "Twice — I've marked the step I don't follow.", correct: true,
                why: "Answers the <i>yet</i> question and adds what came of it, which is what makes the reply useful." },
              { text: "I went it over twice.", why: "<i>Go over</i> is inseparable; nothing can sit inside it." },
              { text: "No, I will go over it yesterday.", why: "Two errors: the auxiliary and the time." }
            ] },
          { who: "priya", say: "The lactate builds up faster than we expected.",
            options: [
              { text: "Faster than in the first run, or faster than the model says?", correct: true,
                why: "<i>Than we expected</i> leaves the comparison open, and the useful reply closes it." },
              { text: "Yes, it was built up.", why: "<i>Build up</i> has no object here, so it cannot go passive." },
              { text: "Build it up again, then.", why: "Nobody is building anything; it happens on its own." }
            ] },
          { who: "tomas", say: "Whose readings are these?",
            options: [
              { text: "Ours, I think — that's my handwriting.", correct: true,
                why: "A possessive pronoun standing alone, with no noun after it and no apostrophe in it." },
              { text: "Our.", why: "<i>Our</i> needs a noun to go with." },
              { text: "Their's.", why: "No possessive pronoun takes an apostrophe." }
            ] },
          { who: "haddad", say: "Once the curve levels off, stop recording.",
            options: [
              { text: "How flat does it have to be before we call it level?", correct: true,
                why: "A procedural instruction with a threshold hidden inside it, and the reply goes after the threshold." },
              { text: "When will it level off?", why: "Unanswerable in advance, which is why the instruction was phrased as a condition." },
              { text: "Shall I level it off?", why: "The curve levels off by itself; there is no object to act on." }
            ] },
          { who: "dan", say: "If we'd warmed it up first, the reading wouldn't have drifted.",
            options: [
              { text: "Let's warm it up before we start the second run, then.", correct: true,
                why: "They did <b>not</b> warm it up and the reading did drift. Only this reply works from that." },
              { text: "Good, so the reading was stable.", why: "It was not: the counterfactual says so." },
              { text: "So we warmed it up first.", why: "They did not; that is what makes the sentence counterfactual." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference", "cause"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students at the bench. Listen once.",
        speaker: "tomas", speakerNote: "with Mei Lin",
        audio: { track: "6-05", label: "At the bench", lines: [
          { who: "tomas", text: "It's not clearing. It should have gone clear by now." },
          { who: "mei", text: "How long has it been in the bath?" },
          { who: "tomas", text: "About twelve minutes. Which is the problem, isn't it — the method says five." },
          { who: "mei", text: "Then the enzyme's probably been denatured. Did you add it before or after the sample reached temperature?" },
          { who: "tomas", text: "Before. I warmed them up together." },
          { who: "mei", text: "That'll be it. Start again, and this time add it once the bath is at thirty-seven." }
        ] },
        items: [
          { q: "What is wrong?",
            options: [
              { text: "The mixture has not cleared.", correct: true, why: "Tomás's first line, and the whole diagnosis follows from it." },
              { text: "The bath is at the wrong temperature.", why: "The bath is not faulted; the timing of the addition is." },
              { text: "The sample was the wrong one.", why: "Never suggested." }
            ] },
          { q: "What does Mei work out is the cause?",
            options: [
              { text: "The enzyme was added before the sample reached temperature.", correct: true,
                why: "She asks the diagnostic question and his answer confirms it — <i>I warmed them up together</i>." },
              { text: "The reagent had been used up.", why: "Supply is not mentioned." },
              { text: "The timer was started too late.", why: "The twelve minutes is a symptom, not the cause." }
            ] },
          { q: "Why does Mei ask about the order?",
            options: [
              { text: "To confirm her suspicion that the enzyme was denatured.", correct: true,
                why: "She states the suspicion first, then asks the one question that would settle it. Purpose items sit on moves like this." },
              { text: "To find out how long it has been in the bath.", why: "She asked that in her first line." },
              { text: "To check whose sample it is.", why: "Ownership never comes up." }
            ] },
          { q: "What should Tomás do differently?",
            options: [
              { text: "Add the enzyme once the bath is at temperature.", correct: true, why: "Mei's last line, with <i>once</i> marking the stage that must come first." },
              { text: "Leave it in the bath longer.", why: "Twelve minutes is already too long." },
              { text: "Use a different enzyme.", why: "The enzyme is fine; the sequence was not." }
            ] }
        ] },

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students checking a result that came out too neat. Listen once.",
        speaker: "priya", speakerNote: "with Dan Okafor",
        audio: { track: "6-05", label: "Too good a curve", lines: [
          { who: "priya", text: "Every point is on the line. Every single one." },
          { who: "dan", text: "That is not a good sign, is it." },
          { who: "priya", text: "No. Either we have done something very well or we have worked the figures out from the standard curve twice." },
          { who: "dan", text: "We calculated the concentrations from it, and then we plotted them against it." },
          { who: "priya", text: "Then the line is the line we drew. It is not a result." },
          { who: "dan", text: "We will have to go over the whole calculation before the write-up." }
        ] },
        items: [
          { q: "Why is Priya uneasy?",
            options: [
              { text: "The points fit the line perfectly.", correct: true,
                why: "<i>Every single one</i> — and Dan's reply confirms that a perfect fit is suspicious rather than pleasing." },
              { text: "The points are scattered widely.", why: "The opposite: they are too close." },
              { text: "The curve has not flattened.", why: "The shape of the curve is not what they are discussing." }
            ] },
          { q: "What does Dan realise they did?",
            options: [
              { text: "They used the standard curve to calculate the values and then plotted them against it.", correct: true,
                why: "He states both steps in one sentence, which is the moment the problem becomes visible." },
              { text: "They plotted the wrong axis.", why: "The axes are not mentioned." },
              { text: "They used the wrong standard curve.", why: "It is the right curve, used twice." }
            ] },
          { q: "What does Priya mean by “the line is the line we drew”?",
            options: [
              { text: "The fit is guaranteed by the method, so it demonstrates nothing.", correct: true,
                why: "A circular procedure: the answer was assumed in getting the numbers, so agreeing with it is not evidence." },
              { text: "Somebody drew the line by hand.", why: "<i>We drew</i> here means the line they derived, not a pencil." },
              { text: "The line should be redrawn.", why: "Redrawing would not help; the problem is where the numbers came from." }
            ] },
          { q: "What do they decide to do?",
            options: [
              { text: "Go over the whole calculation before writing it up.", correct: true,
                why: "Dan's last line, and <i>go over</i> is the inseparable phrasal verb this unit teaches." },
              { text: "Repeat the whole experiment.", why: "Nobody proposes going back to the bench." },
              { text: "Report the result as it stands.", why: "They have just established that it is not a result." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "In a phrasal verb the particle <b>links</b> onto what follows. <i>Break it down</i> sounds like <i>brea-ki-down</i>. Hearing the link is how you catch the particle at speed.",
        speaker: "haddad",
        lines: [
          { text: "Break it down.", note: "<i>brea-ki-down</i> — the <i>k</i> links onto <i>it</i>." },
          { text: "We used it up and carried it out again.",
            note: "<i>use-di-tup</i> and <i>carrie-di-tout</i>. Four words each, two sounds of linking." },
          { text: "Once the bath has warmed up, take the reading.",
            note: "<i>warm-dup</i>. The <i>d</i> of <i>warmed</i> links onto <i>up</i>." },
          { text: "The students who had gone over it carefully picked the error up immediately.",
            note: "<i>go-nover-it</i>, <i>picke-di-tup</i> — relative clause plus a split phrasal verb at the end." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more. When a consonant meets a vowel across a word boundary, the two run together — and that is exactly where the particle hides.",
        speaker: "haddad",
        lines: [
          { text: "Take it in.", note: "<i>ta-ki-tin</i> — three words, no gaps anywhere." },
          { text: "We worked it out and wrote it up.", note: "<i>wor-ki-tout</i>, <i>wro-ti-tup</i>. Two split verbs in one breath." },
          { text: "Once it has levelled off, write the time down.",
            note: "<i>on-si-tas</i>, <i>levell-doff</i>. The particle is unstressed and the linking is what carries it." },
          { text: "The group that had gone over it carefully picked the error up almost at once.",
            note: "<i>go-nover-it</i>, <i>picke-di-tup</i>, <i>almo-sta-tonce</i> — linking across a whole relative clause." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>These pairs are not different sounds. They are the same sounds grouped differently, because an ending consonant links onto a following vowel. <i>Picked it up</i> becomes <i>pi-ckdi-tup</i>, and the boundaries you think you hear are not where the words are. This is why a phrasal verb at speed is so much harder than the same verb written down.</p>" +
               "<i>made out → may doubt</i><i>picked it up → pick dit up</i><i>warmed up → warm dup</i>",
        items: [
          { say: "made out",
            options: [
              { text: "made out", correct: true, why: "two words; the <i>d</i> links onto <i>out</i> and the result sounds like one." },
              { text: "may doubt", why: "also two words, also linked, and almost identical. Only the grammar of the sentence tells them apart." }
            ] },
          { say: "used it up",
            options: [
              { text: "use ditup", why: "not English, but it is what the ear receives: the <i>d</i> has moved onto <i>it</i>." },
              { text: "used it up", correct: true, why: "three words, and the pronoun is in the middle because the verb is separable." }
            ] },
          { say: "gone over it",
            options: [
              { text: "gone over it", correct: true, why: "the object follows the whole verb, because <i>go over</i> never splits." },
              { text: "gone it over", why: "the order a learner expects from <i>break it down</i>, and it is not possible here." }
            ] },
          { say: "warmed up",
            options: [
              { text: "warm dup", why: "what it sounds like. There is no pause between the <i>d</i> and the <i>u</i>." },
              { text: "warmed up", correct: true, why: "and the <i>-ed</i> is still there, carrying the tense, even though you cannot hear a separate syllable." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. The particles are unstressed; write them anyway.",
        items: [
          { answer: "The enzyme breaks it down within a few minutes",
            why: "<i>breaks it down</i> arrives as one block of sound, and the pronoun in the middle is the easiest word to lose." },
          { answer: "We went over the method before we started",
            why: "<i>went over the</i> runs together, and the verb is inseparable, so nothing comes between its two halves." },
          { answer: "The lactate builds up faster than it is cleared",
            why: "<i>builds up</i> has no object, which is why nothing can sit inside it." },
          { answer: "Those readings are ours and the rest are theirs",
            why: "both possessives stand alone, so neither takes a noun and neither takes an apostrophe." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … put the pronoun in the right place · check what <i>it</i> referred to · hear the particle at speed.</p>" } }
    ]
  };
})();
