/* Unit 10 · Rules, Rights and Ethics — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u10-tw", unit: "u10", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and object to something properly",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. Mark your contrast correctly — that is this unit's strategy.",
        scenarioTitle: "The situation",
        scenario: "<p>Thursday's debate motion reads <i>This house would break unjust laws</i>. The wording assumes the laws in question are unjust, which is the very thing the debate is meant to settle. You are speaking against the motion and have been assigned that side.</p><p><b>Write to the debating society.</b> Object to the wording, say precisely what is wrong with it, propose a rewording, and make clear you are not asking to change sides.</p>",
        to: "debating@university.edu", re: "Thursday's motion — the wording assumes its conclusion",
        placeholder: "Dear Committee,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing to raise a point about…</i><i>The difficulty is that…</i><i>However, I am not asking to…</i><i>Would the committee consider…?</i>" },
        checklist: [
          "I said what I was objecting to in the first sentence.",
          "I said precisely what is wrong, not that I dislike it.",
          "I used <i>however</i>, <i>although</i> or <i>whereas</i> correctly.",
          "I proposed a specific alternative."
        ],
        model: "<p>Dear Committee,</p><p>I am writing to raise a point about the wording of Thursday's motion, <i>This house would break unjust laws</i>.</p><p>The difficulty is that the phrase settles in advance the question the debate exists to examine. Whether the laws in question are unjust is precisely what the two sides disagree about, whereas the motion treats it as given.</p><p>Would the committee consider <i>This house would break laws it believes to be unjust</i>? That keeps the substance and removes the assumption.</p><p>However, I am not asking to change sides. I am happy to argue the motion as assigned once the wording is neutral.</p><p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a rule you disagree with. Would you break it, and how?",
        model: "<p>There is a rule at my university that library group rooms cannot be booked for more than two hours, which in practice means a long project gets interrupted halfway. I disagree with it, but I would not break it quietly by rebooking under a friend's name, which is what people do. If I thought it was worth breaking I would say so openly and accept whatever follows, because that is the only version that is an argument about the rule rather than an exception claimed for myself.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to judge between two accounts.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Two reports of the same event give very different impressions. How would you decide what happened?",
        model: "<p>I would start by assuming neither has lied, because that is usually true and it is the assumption that makes the comparison useful. Then I would look at what each put first, and at the verbs. <i>Protesters clashed with police</i> and <i>protesters were dispersed by police</i> describe the same afternoon and assign the action to different people. Once I had separated what was selected from what was asserted, I would look for the facts both reports contain, because those are the ones neither side thought worth leaving out.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "____ a rule openly is not the same as evading it.", from: "Lesson 3",
            options: [
              { text: "Breaking", correct: true, why: "A gerund as subject, taking a singular verb." },
              { text: "Break", why: "A bare infinitive cannot be a subject." },
              { text: "Broken", why: "A past participle cannot head a subject here." }
            ] },
          { q: "She denied ____ the documents.", from: "Lesson 3",
            options: [
              { text: "taking", correct: true, why: "<i>Deny</i> is always followed by a gerund." },
              { text: "to take", why: "<i>Deny</i> never takes an infinitive." },
              { text: "take", why: "Not a possible form after <i>denied</i>." }
            ] },
          { q: "____ the evidence, the committee reached no conclusion.", from: "Lesson 2",
            options: [
              { text: "Despite", correct: true, why: "<i>Despite</i> + noun. A clause would need <i>although</i>." },
              { text: "Although", why: "<i>Although</i> needs a clause, not a noun phrase." },
              { text: "However", why: "<i>However</i> needs a full stop or semicolon before it." }
            ] },
          { q: "<i>Enforce</i> gives which noun?", from: "Lesson 1",
            options: [
              { text: "enforcement", correct: true, why: "<i>-ment</i> makes the act or its result." },
              { text: "enforcing", why: "A gerund, not the abstract noun." },
              { text: "enforcation", why: "Not an English word." }
            ] },
          { q: "The article says two accurate reports can differ because of:", from: "Lesson 5",
            options: [
              { text: "selection and ordering.", correct: true, why: "Its two named levers." },
              { text: "one of them inventing facts.", why: "Explicitly ruled out." },
              { text: "the length of each report.", why: "Length is never discussed." }
            ] },
          { q: "Professor Haddad says accepting the penalty makes the act:", from: "On Campus",
            options: [
              { text: "legible as an argument rather than an evasion.", correct: true,
                why: "Her exact formulation, and the pivot of the talk." },
              { text: "morally superior.", why: "She calls it <i>not a moral flourish</i>." },
              { text: "legally defensible.", why: "No legal claim is made." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. State in two sentences what makes open rule-breaking a different act from quiet rule-breaking.</p>" } }
    ]
  };
})();
