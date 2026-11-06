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
        concepts: ["write"],
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


      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        concepts: ["sequence"],
        kind: "sequence", task: null, n: 0,
        prompt: "A formal request has a fixed order, and it is not the order you think of things in. Put the five moves on the right rung.",
        note: { kind: "writer",
                body: "<p>The reader is deciding, in about four seconds, whether this message is work for them. Everything in this order exists to answer that question early: what you want, why, by when, and what it costs them.</p>" },
        steps: [
          { text: "State what you are writing to ask", pos: 1,
            why: "a reader who reaches the second paragraph without knowing the purpose has already started skimming." },
          { text: "Give the reason, in one sentence", pos: 2,
            why: "after the request, because the reason is only interesting once the request is known." },
          { text: "Make the request specific", pos: 3,
            why: "<i>the emissions figures from Tuesday</i>, not <i>some data</i>. A vague ask is work for the reader." },
          { text: "Name the date you need it by", pos: 4,
            why: "a request with no date gets filed, not refused. The date is what makes it actionable." },
          { text: "Say what you will do in return", pos: 5,
            why: "last, and briefly: citing the source, or sending the finished thing back." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word", "time"],
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


      { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. These are the sentences that place you for a reader who does not know you.",
        items: [
          { cue: "Identify yourself.", band: "A2",
            target: "I am a second year student on the earth science programme",
            extra: ["was", "studying"],
            why: "Simple present for a standing fact about yourself." },
          { cue: "Say where you met the material.", band: "B1",
            target: "I attended your lecture on emissions scenarios last Tuesday",
            extra: ["attend", "attending", "which"],
            why: "Simple past with a finished time expression, which is also what makes the reference checkable." },
          { cue: "Ask, conditionally and politely.", band: "B2",
            target: "I wondered whether it might be possible to see the raw figures",
            extra: ["can", "wondering", "will"],
            why: "The past form <i>wondered</i> is not about the past: in a request it is a politeness marker, and <i>might</i> doubles it." },
          { cue: "Close by taking work off the reader.", band: "C1",
            target: "Please do not reply if the figures are already on the module page",
            extra: ["replying", "will", "although"],
            why: "An imperative plus an <i>if</i> clause. Giving the reader permission not to answer is what makes a request easy to say yes to." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "time"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from student emails to staff. One word in each is wrong. Click it, then type the correction.",
        note: { kind: "writer",
                body: "<p>None of these would stop the reader understanding you. All of them mark the message as written by someone who has not read many formal emails, which is a different kind of cost.</p>" },
        items: [
          { text: "I am writing for ask about the emissions figures.",
            fixed: "I am writing to ask about the emissions figures.",
            wrong: "for", right: "to",
            why: "Purpose before a verb is <i>to</i>. <i>For</i> takes a noun: <i>writing for information</i>." },
          { text: "I would be grateful if you can send them by Friday.",
            fixed: "I would be grateful if you could send them by Friday.",
            wrong: "can", right: "could",
            why: "<i>Would</i> in the first half asks for a past form in the second. <i>Can</i> makes the sentence read as half polite." },
          { text: "Hi Dr Okonkwo, thx for Tuesday's lecture.",
            fixed: "Hi Dr Okonkwo, thank you for Tuesday's lecture.",
            wrong: "thx", right: "thank you",
            why: "An abbreviation that belongs in a message to a friend. The greeting is already too casual, but this is the word that gives it away." },
          { text: "I am looking forward to hear from you.",
            fixed: "I am looking forward to hearing from you.",
            wrong: "hear", right: "hearing",
            why: "<i>Look forward to</i> ends in a preposition, so the verb after it takes <i>-ing</i>." },
          { text: "Please let me know if is possible.",
            fixed: "Please let me know if it is possible.",
            wrong: "if", right: "if it",
            why: "English needs a subject even when there is nothing to be the subject of. <i>It</i> is that placeholder." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "If ___, ___ will ___.",

            why: "The real conditional: present in the <i>if</i> clause, the future carried once by the main clause." },

          { frame: "___ may ___, though ___.",

            why: "<i>May</i> for what the evidence leaves open — the hedge this subject requires." },

          { frame: "I would separate ___ from ___.",

            why: "Splits a claim that has merged two things, which Unit 2 names as the commonest disagreement." },

        ],
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
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write", "claim"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "If ___, ___ will ___.",

            why: "The real conditional: present in the <i>if</i> clause, the future carried once by the main clause." },

          { frame: "___ may ___, though ___.",

            why: "<i>May</i> for what the evidence leaves open — the hedge this subject requires." },

          { frame: "I would separate ___ from ___.",

            why: "Splits a claim that has merged two things, which Unit 2 names as the commonest disagreement." },

        ],
        prompt: "A second question, about who a projection is written for.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates below agree on the facts and disagree about the audience. A reply that argues about the facts has missed what the disagreement is.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "A climate projection is written for scientists and read by everyone else. Should the published version be written for the specialists who can check it, or for the public who will act on it?" },
          { who: "mei", when: "4 hours ago",
            text: "Write it for the specialists. The moment you simplify for a general reader you have made a judgement on their behalf, and they cannot see that you made it." },
          { who: "dan", when: "90 minutes ago",
            text: "A document nobody outside the field can read is not a public good, whatever is in it. If the public version has to be written by a journalist, the field has handed the decision away." }
        ],
        checklist: [
          "My first paragraph says who the published version should be written for.",
          "I gave a reason, not only a preference.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about the audience, not about whether the science is right.",
          "I wrote 100 words or more."
        ],
        model: "<p>The published version should be written for the specialists, and a second version should exist.</p>" +
               "<p>Mei is right that simplifying hides a judgement. Choosing which number to lead with, or which caveat to drop, is an editorial decision that the reader cannot see and cannot undo, and it is made by whoever writes the simple version.</p>" +
               "<p>But Dan is right that this cannot be the end of it. The answer is not to simplify the paper; it is to write the summary as well, under the same names, so that the judgement is at least made by people who can be asked about it.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
