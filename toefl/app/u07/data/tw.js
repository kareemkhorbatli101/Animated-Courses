/* Unit 7 · Markets and Choices — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u07-tw", unit: "u07", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and make a case with reasons",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write", "claim"],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write", "comparison", "claim"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation. This one asks you to argue against a rule rather than against its application.",
        scenarioTitle: "The situation",
        scenario: "<p>The department now ranks tutorial groups by average attendance and gives the top group priority in choosing project topics. Your group has noticed that the simplest way to rise in the ranking is to discourage the two students who attend irregularly from signing the sheet at all. Nobody has done this. Dr Okonkwo designed the scheme.</p><p><b>Write to Dr Okonkwo.</b> Describe the incentive the scheme creates, say why it is a design problem rather than an accusation, and propose a specific change.</p>",
        to: "r.okonkwo@university.edu", re: "Attendance ranking — an incentive worth removing",
        placeholder: "Dear Dr Okonkwo,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>The difficulty is that you are reporting something nobody has done. Say so early and plainly, or the message reads as an accusation with the name left out — which is worse than an accusation.</p><i>I want to raise a design point rather than a complaint…</i><i>As the scheme stands, the quickest route to…</i><i>Would it be possible to…?</i>" },
        checklist: [
          "My first sentence says this is about the design, not about anyone's conduct.",
          "I described the incentive the rules create, using <i>incentive</i> or <i>target</i> accurately.",
          "I said explicitly that nobody has done this.",
          "I proposed a specific change rather than asking for the scheme to be dropped.",
          "I used a real conditional at least once, correctly."
        ],
        model: "<p>Dear Dr Okonkwo,</p>" +
               "<p>I want to raise a design point about the attendance ranking rather than a complaint about anybody's conduct.</p>" +
               "<p>As the scheme stands, a group's average rises if its least regular members stop signing the sheet. Nobody in our group has done this and I am not suggesting anyone elsewhere has. The point is only that the rules make it the quickest route to the reward, and a scheme that rewards the number rather than the attendance will eventually find somebody who notices.</p>" +
               "<p>Would it be possible to rank on total attendances rather than the average? If the measure counts people rather than dividing by them, the incentive points the same way as the aim.</p>" +
               "<p>Kind regards,<br>Tomás Beltrán</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a rule or a price that changed how you behave. What did it change, and why?",
        model: "<p>My university introduced a charge for printing, about five pence a page. Before that I printed every reading and highlighted it on paper. Afterwards I read almost everything on screen. What interests me is that five pence is trivial — it was never about the money. It was that the charge made me decide each time, where before printing was the default and required no decision at all. The price worked by making the choice visible, not by making it expensive.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to predict and justify.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "If a university rewarded departments for student satisfaction scores, what do you think would happen?",
        model: "<p>Satisfaction scores would rise, and I would not be confident that satisfaction had. The cheapest route to a better score is usually not better teaching — it is asking at a different moment, or asking a slightly different question, or marking a little more generously. Nobody has to be dishonest for that to happen; people simply respond to what is rewarded. If I were designing it I would publish the scores but reward something harder to influence, and I would say in advance how the result would be checked.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about a cost that does not appear in money.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe something you gave up in order to do something else. Was it worth it?",
        model: "<p>I gave up a part-time job in my second year to take an unpaid placement. The financial cost was easy to state — about two hundred a month — and it was not the real cost. The real one was that the job had been the only fixed point in my week, and without it I stopped having a reason to be anywhere at a particular time. It was worth it in the end, but not for the reason I expected: the placement taught me less than the loss of structure did.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to design rather than to judge.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "If you had to reward one thing about a university course, what would you reward, and how would you check it?",
        model: "<p>I would reward the proportion of students who can still do the thing six months later, and I would check it by testing a random sample of them, not by asking anyone. The reason for choosing that measure is that almost every easier one can be hit without the thing happening: satisfaction can be bought with lenient marking, and pass rates with easier papers. A delayed test is expensive and awkward, and it is hard to hit by any route other than teaching well, which is the only property of a measure that really matters.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "evidence", "cause"],
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
            ] },
          { q: "Which word is NOT built with this unit's suffix?", from: "Lesson 1",
            options: [
              { text: "rival", correct: true, why: "It arrives whole from Latin; there is no English noun <i>riv</i> underneath it." },
              { text: "marginal", why: "<i>margin + al</i>." },
              { text: "seasonal", why: "<i>season + al</i>." }
            ] },
          { q: "Unless the charge ____, nothing will change.", from: "Lesson 3",
            options: [
              { text: "rises", correct: true, why: "<i>Unless</i> already means <i>if not</i>, so the clause after it stays positive." },
              { text: "does not rise", why: "Two negatives, which reverses the sentence." },
              { text: "will rise", why: "<i>Will</i> does not go into the conditional clause." }
            ] },
          { q: "You hear a stream of sound that could be <i>an aim</i> or <i>a name</i>. What settles it?", from: "Lesson 4",
            options: [
              { text: "The grammar of the rest of the sentence.", correct: true,
                why: "The sounds are identical; only what surrounds them tells you where the <i>n</i> belongs." },
              { text: "The length of the vowel.", why: "The vowels are the same in both." },
              { text: "The stress on the first syllable.", why: "Stress can help with <i>ice cream</i> and does nothing here." }
            ] },
          { q: "According to Lesson 5's second article, returning the revenue equally:", from: "Lesson 5",
            options: [
              { text: "reverses who is worse off without weakening the incentive.", correct: true,
                why: "The charge is unchanged, so the reason to drive less is unchanged." },
              { text: "removes the reason to drive less.", why: "Only a change to the charge itself could do that." },
              { text: "pays only the people who stopped driving.", why: "That would change the incentive; the payment is universal." }
            ] },
          { q: "Professor Haddad says that “the market will decide” is a way of:", from: "On Campus",
            options: [
              { text: "describing an outcome without naming anyone responsible for the rules.", correct: true,
                why: "Her objection is that it removes the agent, not that the outcome is wrong." },
              { text: "explaining how prices are set.", why: "She says the phrase explains nothing; it conceals." },
              { text: "arguing for less regulation.", why: "She treats it as a rhetorical move available to any side." }
            ] },
          { q: "Traffic fell by a fifth, ____ is more than the model predicted.", from: "Lesson 2",
            options: [
              { text: "which", correct: true, why: "A comma makes the clause non-defining, and a non-defining clause takes <i>which</i>." },
              { text: "that", why: "<i>That</i> cannot introduce a non-defining clause." },
              { text: "what", why: "<i>What</i> cannot refer back to a whole clause this way." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "measurement"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight ways a measure could be gamed. Sort them by whether the number would still be honest.",
        note: { kind: "reader",
                body: "<p>The uncomfortable half of this unit is the left-hand column: the number is accurate, nobody has lied, and the thing it stood for has gone. A scheme that only defends against dishonesty has defended against the easier problem.</p>" },
        bins: [
          { id: "honest",   label: "The number stays true", hint: "and means less" },
          { id: "dishonest", label: "The number becomes false", hint: "someone has lied" }
        ],
        items: [
          { text: "A hospital delays entering patients into the system", bin: "honest",
            why: "every recorded waiting time is correct. The recording simply starts later." },
          { text: "A group ranks higher because its least regular members stop signing", bin: "honest",
            why: "the average is computed correctly from the signatures that exist." },
          { text: "A school enters weaker candidates for an easier qualification", bin: "honest",
            why: "the pass rate is real, and it is a pass rate for a different thing." },
          { text: "A department raises satisfaction by marking more leniently", bin: "honest",
            why: "the survey responses are genuine. The hardest case, because nothing anywhere is untrue." },
          { text: "A clinic records a patient as seen before the appointment happened", bin: "dishonest",
            why: "a false entry, and the kind an audit is designed to find." },
          { text: "A manager alters the attendance sheet after the session", bin: "dishonest",
            why: "the record no longer describes what happened." },
          { text: "A report quotes the better of two measurements without saying so", bin: "dishonest",
            why: "selective reporting. Each number is true and the sentence containing it is not." },
          { text: "A target is reported as met using a figure from a different quarter", bin: "dishonest",
            why: "the figure is real and attached to the wrong period, which is a lie about what it refers to." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences what goes wrong when a measure becomes a target, and what a well designed scheme does about it.</p>" } }
    ]
  };
})();
