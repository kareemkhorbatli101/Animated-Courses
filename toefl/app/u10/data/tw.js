/* Unit 10 · Rules, Rights and Ethics — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u10-tw", unit: "u10", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and object to something properly",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation. This one asks you to decline something while staying on good terms.",
        scenarioTitle: "The situation",
        scenario: "<p>A student society has asked you to sign an open letter calling for a staff member to be dismissed. You agree with the criticism in the letter and you think dismissal is disproportionate. The letter is being published on Monday with the signatures attached.</p><p><b>Write to the society.</b> Say what you accept, say precisely what you do not, decline to sign, and say what you would sign.</p>",
        to: "society@university.edu", re: "Open letter — I agree with most of it and cannot sign",
        placeholder: "Dear all,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>The hard part is that agreement and refusal have to arrive in the same message without cancelling each other out. Put the agreement first and make it specific, or the refusal reads as a polite way of disagreeing with everything.</p><i>I accept that…</i><i>What I cannot sign up to is…</i><i>I would sign a letter that…</i>" },
        checklist: [
          "My first paragraph says what I accept, specifically.",
          "I named the single thing I will not sign.",
          "I declined clearly, without leaving it ambiguous.",
          "I said what I would sign instead.",
          "I used a contrast marker — <i>however</i>, <i>although</i> or <i>whereas</i> — with the right punctuation."
        ],
        model: "<p>Dear all,</p>" +
               "<p>I accept the substance of the letter. The account of what was said in the seminar matches what I heard, the response from the department was inadequate, and I would say both of those publicly under my own name.</p>" +
               "<p>What I cannot sign up to is the final paragraph. Dismissal is not proportionate to what is described in the three paragraphs above it, and signing would commit me to a conclusion I do not hold. So I will not be signing this version.</p>" +
               "<p>I would sign a letter that set out the same account and asked for the complaint to be reopened by someone outside the department. If that is of any use before Monday, I can draft the paragraph tonight.</p>" +
               "<p>Best wishes,<br>Tomás Beltrán</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a rule you disagree with. Would you break it, and how?",
        model: "<p>There is a rule at my university that library group rooms cannot be booked for more than two hours, which in practice means a long project gets interrupted halfway. I disagree with it, but I would not break it quietly by rebooking under a friend's name, which is what people do. If I thought it was worth breaking I would say so openly and accept whatever follows, because that is the only version that is an argument about the rule rather than an exception claimed for myself.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to judge between two accounts.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Two reports of the same event give very different impressions. How would you decide what happened?",
        model: "<p>I would start by assuming neither has lied, because that is usually true and it is the assumption that makes the comparison useful. Then I would look at what each put first, and at the verbs. <i>Protesters clashed with police</i> and <i>protesters were dispersed by police</i> describe the same afternoon and assign the action to different people. Once I had separated what was selected from what was asserted, I would look for the facts both reports contain, because those are the ones neither side thought worth leaving out.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak", "claim"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about changing your mind.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you argued for something and then changed your mind. What changed it?",
        model: "<p>I used to argue that an unenforced rule was not a rule, which sounded clean and turned out to be wrong. What changed my mind was watching somebody actually be asked to leave the library for eating. Nobody said there was no such rule. They said it was unfair to start enforcing it now, which is a completely different complaint — and it only makes sense if the rule had been there the whole time. So the rule existed, and what had gone was any expectation of consistency.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak", "claim"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to defend a position you may not hold.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Is there any value in being made to argue for a side you disagree with? Give a reason.",
        model: "<p>Yes, and the value is not the one usually given. People say it teaches you empathy, which I doubt. What it actually does is force you to find the best version of the other case, and most of us have never met the best version — we have only met the worst one, which is easy to beat. Having to build it yourself tells you exactly where your own position is weak, because you discover which of your objections survive it and which were only working against the weak version.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "comparison", "evidence"],
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
            ] },
          { q: "Which word is NOT built from a verb with this unit's suffix?", from: "Lesson 1",
            options: [
              { text: "monument", correct: true, why: "It comes whole from Latin; there is no English verb beneath it." },
              { text: "settlement", why: "<i>settle + ment</i>." },
              { text: "amendment", why: "<i>amend + ment</i>." }
            ] },
          { q: "The committee considered ____ until the following week.", from: "Lesson 3",
            options: [
              { text: "adjourning", correct: true, why: "<i>Consider</i> takes a gerund in this sense." },
              { text: "to adjourn", why: "That would mean regarding something as adjourning, which is a different sentence." },
              { text: "adjourn", why: "The bare verb cannot follow <i>consider</i>." }
            ] },
          { q: "<i>Principle</i> and <i>principal</i> differ in:", from: "Lesson 4",
            options: [
              { text: "spelling and meaning only — they sound identical.", correct: true,
                why: "Both end in a schwa, so speech cannot separate them and only the sense can." },
              { text: "the stressed syllable.", why: "Both are stressed on the first syllable." },
              { text: "the first vowel.", why: "The first vowels are the same." }
            ] },
          { q: "According to Lesson 5's second article, an act nobody can see:", from: "Lesson 5",
            options: [
              { text: "makes no claim and leaves the rule as it was.", correct: true,
                why: "Three consequences, and they are what the argument about acceptance rests on." },
              { text: "is morally worse than an open one.", why: "The article declines to rank them morally." },
              { text: "is still a protest if the motive is sincere.", why: "Sincerity is the criterion it rejects." }
            ] },
          { q: "Professor Haddad says the difference between disobedience and evasion lies in:", from: "On Campus",
            options: [
              { text: "whether you are trying to change the rule or to escape it.", correct: true,
                why: "Her criterion, and she rules out both the rule itself and the motive on the way to it." },
              { text: "how unjust the rule is.", why: "She holds the rule constant in her example." },
              { text: "how sincerely the person believes.", why: "She says explicitly that it is not in the motive." }
            ] },
          { q: "Both accounts are accurate ____ they are not equally useful.", from: "Lesson 2",
            options: [
              { text: ", although", correct: true, why: "<i>Although</i> can join two clauses with a comma." },
              { text: ", however", why: "<i>However</i> needs a full stop or a semicolon in front of it." },
              { text: ", despite", why: "<i>Despite</i> cannot take a clause at all." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "evidence", "claim"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight sentences a reviewer might write. Sort them by whether they attack the argument or the person making it.",
        note: { kind: "reader",
                body: "<p>The second column is not a list of insults. Several of the cards in it are polite, and two are true. What they have in common is that none of them would stop being said if the argument were corrected.</p>" },
        bins: [
          { id: "argument", label: "Addresses the argument", hint: "could be answered" },
          { id: "person",   label: "Addresses the person",   hint: "nothing could answer it" }
        ],
        items: [
          { text: "The second premise does not follow from the first", bin: "argument",
            why: "a claim about the reasoning, and one the author can meet." },
          { text: "This holds only if the consultation was genuine", bin: "argument",
            why: "names the condition the case depends on, which is the most useful objection there is." },
          { text: "The example is real but not representative", bin: "argument",
            why: "concedes the evidence and challenges its reach." },
          { text: "Two sources are cited and both say the opposite", bin: "argument",
            why: "checkable, and decisive if true." },
          { text: "You would say that, given where you work", bin: "person",
            why: "may well be accurate, and it would still be said if every premise were sound." },
          { text: "Nobody who had read the statute would argue this", bin: "person",
            why: "dressed as an argument about the statute, and it is about the author's competence." },
          { text: "This is what people always say at this stage", bin: "person",
            why: "places the author in a type rather than engaging the claim." },
          { text: "I am surprised you are willing to defend that", bin: "person",
            why: "the hardest card, because it is polite and sounds like engagement. Nothing in the argument could make it go away." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. State in two sentences what makes open rule-breaking a different act from quiet rule-breaking.</p>" } }
    ]
  };
})();
