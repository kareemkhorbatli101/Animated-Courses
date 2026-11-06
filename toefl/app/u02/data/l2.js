/* Unit 2 · Climate and Prediction — LESSON 2 · WRITING
   The book's Unit 2 writing strategy is "writing a business email", so the
   register contrast (its own Unit 11 exercise) is brought forward here. */
(function () {
  window.PAGE = {
    id: "u02-l2", unit: "u02", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Write at the register the reader expects",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "register-dial", task: null, n: 0,
        prompt: "Two messages. Same writer, same request, same day. Flip the switch and read both.",
        note: { kind: "writer",
                body: "<p>In a formal message, avoid text abbreviations and incomplete sentences. State the purpose in the first line, and give the reader a date to work to.</p>" },
        versions: {
          formal: { label: "To Dr Okonkwo", from: "m.lin@university.edu",
            to: "r.okonkwo@university.edu", re: "Request: data for the Unit 2 presentation",
            body: [
              "Dear Dr Okonkwo,",
              "I am writing to ask whether I could use the emissions figures from your Tuesday lecture in a presentation for my seminar group.",
              "I would need them by Friday 14 March, and I would of course cite the source.",
              "Thank you for your time.",
              "Kind regards,<br>Mei Lin"
            ] },
          informal: { label: "To Priya", from: "m.lin@university.edu",
            to: "p.raman@university.edu", re: "those emissions numbers?",
            body: [
              "Hey Priya —",
              "Any chance you still have the emissions numbers from Tuesday? Need them for the seminar thing.",
              "By Fri if poss! thx",
              "M"
            ] } },
        ask: "Which message states its purpose in the first sentence, and how can you tell?",
        options: [
          { text: "The formal one — it opens with <i>I am writing to ask whether…</i>", correct: true,
            why: "That phrase exists to put the purpose first. The informal version buries the request in a question and never names the task." },
          { text: "Both do, in different words.",
            why: "The informal one opens with a greeting and a vague <i>any chance</i>; the purpose arrives late and incompletely." },
          { text: "Neither — both start with a greeting.",
            why: "A greeting is not the first <i>sentence</i>. Look at what follows it." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. These are the sentences a formal request needs.",
        items: [
          { cue: "State the purpose.", band: "A2",
            target: "I am writing to ask about the emissions figures",
            extra: ["wrote", "for"],
            why: "<i>I am writing to…</i> is the opening a formal request expects." },
          { cue: "Give a reason.", band: "B1",
            target: "I would like to use them in a presentation for my seminar group",
            extra: ["liking", "because"],
            why: "<i>would like to</i> + infinitive." },
          { cue: "Name a deadline politely.", band: "B2",
            target: "I would be grateful if I could have them by Friday",
            extra: ["will", "am", "having"],
            why: "<i>would be grateful if</i> + past form is the standard polite conditional." },
          { cue: "Offer something in return.", band: "C1",
            target: "I would of course cite the source in the presentation itself",
            extra: ["citing", "will", "which"],
            why: "<i>of course</i> between modal and verb signals that this goes without saying." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion board question about how certainty should be reported.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Climate reports give a range rather than a single number. Some people say this makes them easy to dismiss; others say a single number would be dishonest. Which view is closer to yours?" },
          { who: "priya", when: "3 hours ago",
            text: "Give the range. A single number pretends to a precision nobody has, and when it turns out wrong the whole field gets blamed." },
          { who: "tomas", when: "1 hour ago",
            text: "In principle yes, but in practice a range lets anyone pick the end they like. If you tell me it's between two and five degrees, I'll hear two." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think the range has to be reported, but Tomás has identified a real cost.</p><p>A single number would be a claim nobody can support, and when it failed it would discredit the work that was done properly. The range is the honest statement of what is known.</p><p>Tomás is right that people hear the comfortable end. The answer is not to hide the range but to say which end is more likely and why — which is what the better reports now do.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
