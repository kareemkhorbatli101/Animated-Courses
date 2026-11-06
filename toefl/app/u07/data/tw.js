/* Unit 7 · Markets and Choices — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u07-tw", unit: "u07", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and make a case with reasons",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's writing strategy is joining a claim to its reason.",
        scenarioTitle: "The situation",
        scenario: "<p>You were charged a late fee on your second instalment. You had arranged a payment plan in March, which should have exempted you, but the plan was recorded against the wrong student number. You have the confirmation email.</p><p><b>Write to Student Finance.</b> State the claim, give the reason it is wrong, say what evidence you hold, and ask for the fee to be removed.</p>",
        to: "finance@university.edu", re: "Late fee charged in error — payment plan on record",
        placeholder: "Dear Student Finance,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing to ask you to…</i><i>Since I arranged a plan in March,…</i><i>… because the plan was recorded against the wrong number.</i><i>I can forward the confirmation if that would help.</i>" },
        checklist: [
          "I said what I wanted in the first sentence.",
          "I used <i>since</i> or <i>because</i> to join the claim to its reason.",
          "I said what evidence I hold.",
          "I asked for one specific action."
        ],
        model: "<p>Dear Student Finance,</p><p>I am writing to ask you to remove a late fee charged on my second instalment.</p><p>Since I arranged a payment plan on the eleventh of March, the fifteenth deadline should not have applied to me. The fee appears to have been charged because the plan was recorded against the wrong student number — one digit out from mine.</p><p>I have the confirmation email from March and can forward it if that would help.</p><p>Could you confirm that the fee has been removed, and that the plan is now attached to the correct record?</p><p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a rule or a price that changed how you behave. What did it change, and why?",
        model: "<p>My university introduced a charge for printing, about five pence a page. Before that I printed every reading and highlighted it on paper. Afterwards I read almost everything on screen. What interests me is that five pence is trivial — it was never about the money. It was that the charge made me decide each time, where before printing was the default and required no decision at all. The price worked by making the choice visible, not by making it expensive.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to predict and justify.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "If a university rewarded departments for student satisfaction scores, what do you think would happen?",
        model: "<p>Satisfaction scores would rise, and I would not be confident that satisfaction had. The cheapest route to a better score is usually not better teaching — it is asking at a different moment, or asking a slightly different question, or marking a little more generously. Nobody has to be dishonest for that to happen; people simply respond to what is rewarded. If I were designing it I would publish the scores but reward something harder to influence, and I would say in advance how the result would be checked.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "If the price ____, demand will fall.", from: "Lesson 3",
            options: [
              { text: "rises", correct: true, why: "The <i>if</i> clause of a real conditional takes the present, even about the future." },
              { text: "will rise", why: "English does not repeat the future in the <i>if</i> clause." },
              { text: "would rise", why: "<i>Would</i> belongs to unreal conditionals." }
            ] },
          { q: "We will not know ____ a full year has passed.", from: "Lesson 3",
            options: [
              { text: "until", correct: true, why: "A future time clause, taking the present perfect." },
              { text: "until will", why: "No future marker inside a time clause." },
              { text: "since", why: "<i>Since</i> looks backwards from now." }
            ] },
          { q: "Which puts the reason where the reader needs it?", from: "Lesson 2",
            options: [
              { text: "The scheme failed because the price was set too low.", correct: true,
                why: "The failure is known; the cause is the news, so <i>because</i> goes second." },
              { text: "Because the scheme failed, the price was set too low.",
                why: "Reverses cause and effect." },
              { text: "The scheme failed, since it failed.", why: "Circular." }
            ] },
          { q: "The effect of one more unit is the ____ effect.", from: "Lesson 1",
            options: [
              { text: "marginal", correct: true, why: "<i>margin + al</i> — not the average, and the two are constantly confused." },
              { text: "seasonal", why: "That is a pattern repeating each year." },
              { text: "financial", why: "That just means measured in money." }
            ] },
          { q: "The article says a result can be:", from: "Lesson 5",
            options: [
              { text: "technically correct and substantively absurd.", correct: true,
                why: "Its closing phrase, and the whole thesis in four words." },
              { text: "dishonest but useful.", why: "It insists nobody need be dishonest." },
              { text: "unmeasurable in principle.", why: "It is measured; that is the problem." }
            ] },
          { q: "Professor Haddad says <i>the market will decide</i> is suspicious because:", from: "On Campus",
            options: [
              { text: "it names an outcome without naming who set the rules.", correct: true,
                why: "Her exact objection, and the congestion charge is her worked example." },
              { text: "markets are unpredictable.", why: "She argues they are predictable given the rules." },
              { text: "prices never change behaviour.", why: "Her example is a price changing behaviour." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences what goes wrong when a measure becomes a target, and what a well designed scheme does about it.</p>" } }
    ]
  };
})();
