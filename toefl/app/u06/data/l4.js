/* Unit 6 · Food, Energy and the Body — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: linking in phrasal verbs. */
(function () {
  window.PAGE = {
    id: "u06-l4", unit: "u06", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Check that you have understood",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
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

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
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

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
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
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … put the pronoun in the right place · check what <i>it</i> referred to · hear the particle at speed.</p>" } }
    ]
  };
})();
