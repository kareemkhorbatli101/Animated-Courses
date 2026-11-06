/* Unit 12 · Art, Audience and Culture — TEAMWORK & LANGUAGE REVIEW
   The last block of the book. */
(function () {
  window.PAGE = {
    id: "u12-tw", unit: "u12", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and support a claim with something checkable",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        frames: [
          { frame: "Which part lost you — ___ or ___?",
            why: "Two candidates rather than an open question, which is far easier to answer." },
          { frame: "Here is what ___. Here is what ___ is claiming about it.",
            why: "Separates observation from interpretation out loud." },
          { frame: "Can you put that back to me in your own words?",
            why: "The only real test of understanding, and Unit 6's lesson arriving again." },
        ],
        prompt: "Read the situation, then write the email. This unit's strategy is detail — give something the reader can check.",
        scenarioTitle: "The situation",
        scenario: "<p>The gallery visit has been moved an hour earlier to accommodate a curator's tour. You teach a seminar that finishes at half past one across the city, and several students in your group are in it. The gallery is forty minutes away.</p><p><b>Write to the course administrator.</b> Explain the clash with something concrete, propose a workable alternative, and ask for a decision in time to tell people.</p>",
        to: "courses@university.edu", re: "Gallery visit timing — clash with the 12:30 seminar",
        placeholder: "Dear Administrator,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing about…</i><i>The difficulty is that…</i><i>Would it be possible for…?</i><i>Could you let us know by…?</i>" },
        checklist: [
          "I said what I was writing about in the first sentence.",
          "I gave concrete detail, not a general complaint.",
          "I proposed a workable alternative.",
          "I asked for a decision by a stated time."
        ],
        model: "<p>Dear Administrator,</p><p>I am writing about the new meeting time for Thursday's gallery visit.</p><p>The difficulty is that five students in our group are in the seminar that finishes at half past one across the city. The gallery is forty minutes away, which puts them at the entrance at about ten past two — twenty-five minutes after the group now meets, and ten minutes into the curator's tour.</p><p>Would it be possible for those five to join the tour in the second room, as the announcement already allows for latecomers? If so, could you let us know by Wednesday afternoon, so I can tell them before they make their own arrangements?</p><p>Kind regards,<br>Priya Raman</p>" },

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,

              frames: [

                { frame: "Which part lost you — ___ or ___?",

                  why: "Two candidates rather than an open question, which is far easier to answer." },

                { frame: "Here is what ___. Here is what ___ is claiming about it.",

                  why: "Separates observation from interpretation out loud." },

                { frame: "Can you put that back to me in your own words?",

                  why: "The only real test of understanding, and Unit 6's lesson arriving again." },

              ],
        prompt: "A second situation, and the last email in the book. This one asks you to disagree with a published reading of your own work.",
        scenarioTitle: "The situation",
        scenario: "<p>A review of your student film in the department magazine says you <i>refuse to resolve the ending</i>, and reads the final four silent minutes as a deliberate withholding. The silence was a sound fault you could not fix before the deadline. The reviewer is a classmate you will see every week for a year.</p><p><b>Write to the reviewer.</b> Correct the fact, concede what is fair in the reading, and do not ask for the review to be withdrawn.</p>",
        to: "t.beltran@university.edu", re: "Your review — the last four minutes",
        placeholder: "Dear Tomás,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>The temptation is to lead with the correction, which makes the whole message a complaint. Lead with what the review got right, and the correction arrives as information rather than as a rebuke — and you still have to work with this person on Thursday.</p><i>I thought the point about… was fair.</i><i>One thing I should tell you…</i><i>I am not asking you to…</i>" },
        checklist: [
          "My first paragraph says what the review got right, specifically.",
          "I corrected the factual claim without disputing the reading.",
          "I conceded that the effect may hold whatever caused it.",
          "I said clearly that I am not asking for a withdrawal.",
          "I separated an observation from an interpretation at least once."
        ],
        model: "<p>Dear Tomás,</p>" +
               "<p>Thank you for the review, and particularly for the paragraph about the camera staying behind her — that was deliberate, and nobody else noticed it.</p>" +
               "<p>One thing I should tell you. The four silent minutes at the end were not a choice. The location sound was unusable and I could not get a re-record before the deadline, so what you are hearing is a fault rather than a refusal. I am telling you because the review attributes an intention, and that part is not true.</p>" +
               "<p>What I will concede is that the effect may be real anyway. If the ending does feel unresolved to an audience, that is a fact about the film regardless of how it got there, and your reading of it does not depend on my having meant it. So I am not asking you to withdraw or correct anything. See you Thursday.</p>" +
               "<p>Best,<br>Mei</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a book, film or piece of music that changed your mind about something. Be specific about what did it.",
        model: "<p>A documentary about an orchestra changed how I listen. There is a sequence where the same two minutes are played three times: once by the full orchestra, once by the strings alone, and once by a single player. Nothing is explained over it. What changed for me was that I could finally hear what a part contributes, because I had heard the same passage with it and without it. Before that I had been told music was layered and had never actually perceived the layers.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "The last speaking task of the book. One pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Does an audience change a work, or only its own experience of it? Give your reasons.",
        model: "<p>I think it changes the experience, and I am not persuaded it changes the work. It is obviously true that a film means something different to someone who knows its tradition and someone who does not — nobody disputes that. The stronger claim is that these are therefore different works, and I resist it because it would make disagreement impossible. When two people argue about an ending they are arguing about the same sequence of shots, and that shared object is exactly what lets them disagree at all.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about explaining something to somebody else.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you explained something and the other person still did not understand. What went wrong?",
        model: "<p>I was explaining a reading of a film to someone in my seminar group and started from the beginning, which was the mistake. He had followed everything up to the last two minutes; what he had lost was one step, and I spent ten minutes re-covering ground he already had before we reached it. What I should have asked first was which part lost him. The second thing I got wrong was giving him my interpretation and the thing on screen in the same breath, so he could not tell which one he was being asked to accept.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "The last question in the book. It asks you to look back at the whole of it.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "What is one habit of reading or listening you would keep from this course, and why that one?",
        model: "<p>Asking what I would have to see in order to agree. It sounds like a small thing and it does most of the work of the others. It is the same question as asking what a rate was divided by, or what a chart was computed from, or which claim a sentence is actually making — all of those turned out to be one habit wearing different clothes. What I like about it is that it is not scepticism. It does not ask whether something is true. It asks what would settle it, which is a question you can answer, and often the answer is already on the page.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "evidence", "claim"],
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit — and the last six items in the book.",
        items: [
          { q: "The editor suggested ____ the final scene.", from: "Lesson 3",
            options: [
              { text: "cutting", correct: true, why: "<i>Suggest</i> always takes a gerund, whatever the meaning suggests." },
              { text: "to cut", why: "<i>Suggest</i> never takes an infinitive." },
              { text: "cut", why: "Not a possible form here." }
            ] },
          { q: "He stopped ____ and walked out.", from: "Lesson 3",
            options: [
              { text: "explaining", correct: true, why: "<i>Stop</i> + gerund = ceased doing it." },
              { text: "to explain", why: "That would mean he paused in order to explain." },
              { text: "explain", why: "Not a possible form." }
            ] },
          { q: "In <i>The gallery keeps a record</i>, the stress falls on:", from: "Lesson 1",
            options: [
              { text: "the first syllable — RE-cord.", correct: true, why: "A noun, so the stress moves forward." },
              { text: "the second syllable — re-CORD.", why: "That is the verb." },
              { text: "neither — both are equal.", why: "English words have one main stress." }
            ] },
          { recall: "From Lesson 5: the article on what an audience adds to a work, and where observation becomes interpretation.", q: "The article calls the weaker claim:", from: "Lesson 5",
            options: [
              { text: "plainly true.", correct: true, why: "And the stronger one <i>almost always interesting</i> — deliberately not a verdict." },
              { text: "obviously false.", why: "It accepts the weaker claim." },
              { text: "impossible to assess.", why: "It is the stronger claim that is harder to assess." }
            ] },
          { q: "In Professor Haddad's example, <i>refusing</i> is:", from: "On Campus",
            options: [
              { text: "interpretation — a word about intention.", correct: true,
                why: "Her exact analysis, and the joint she wants you to find." },
              { text: "observation — anyone can check it.", why: "What can be checked is how the film ends." },
              { text: "neither — it is a fact about the genre.", why: "Genres do not have intentions either." }
            ] },
          { q: "Why treat the gallery survey's 44% with caution?", from: "Lesson 5",
            options: [
              { text: "It was conducted inside a gallery, so it sampled gallery-goers.", correct: true,
                why: "The method guarantees the result — the same error Unit 5 found in early planet catalogues." },
              { text: "The sample was too small.", why: "1,200 is ample." },
              { text: "Pie charts cannot show percentages.", why: "That is exactly what they show." }
            ] },
          { q: "Which word does NOT move its stress between noun and verb?", from: "Lesson 1",
            options: [
              { text: "comment", correct: true, why: "<b>COM</b>ment either way. The pattern is reliable enough to guess with and not universal." },
              { text: "permit", why: "a <b>PER</b>mit, to per<b>MIT</b>." },
              { text: "import", why: "an <b>IM</b>port, to im<b>PORT</b>." }
            ] },
          { q: "The studio made him ____ four minutes from the film.", from: "Lesson 3",
            options: [
              { text: "cut", correct: true, why: "<i>Make</i> and <i>let</i> take a bare infinitive after their object." },
              { text: "to cut", why: "That is the pattern for <i>ask</i>, <i>tell</i> and <i>persuade</i>." },
              { text: "cutting", why: "That is the pattern for <i>find</i> and <i>keep</i>." }
            ] },
          { q: "You hear: <i>The responses fall into four discrete categories.</i> The word is:", from: "Lesson 4",
            options: [
              { text: "discrete — separate.", correct: true,
                why: "Nothing in the sound settles it; <i>four … categories</i> does." },
              { text: "discreet — tactful.", why: "A category cannot be tactful, which is the only clue there is." },
              { text: "Impossible to tell.", why: "Impossible to <i>hear</i>, which is why the sentence is played rather than the word." }
            ] },
          { q: "According to Lesson 5's second article, the word carrying the interpretation is:", from: "Lesson 5",
            options: [
              { text: "refuses", correct: true, why: "It attributes an intention, and no sequence of images can display one." },
              { text: "consolations", why: "Checkable against what such films usually offer." },
              { text: "genre", why: "The classification is not in dispute." }
            ] },
          { q: "Professor Haddad says essays on the audience usually argue for:", from: "On Campus",
            options: [
              { text: "the easy claim and conclude the hard one.", correct: true,
                why: "Different experiences, which nobody denies, used to establish a different work, which is contested." },
              { text: "the hard claim and conclude the easy one.", why: "That would at least be valid, if unnecessary." },
              { text: "neither claim clearly.", why: "She says they argue the first quite well." }
            ] },
          { q: "The critic ____ review you read disagreed.", from: "Lesson 2",
            options: [
              { text: "whose", correct: true, why: "Possessive, with no apostrophe — the same rule as <i>its</i>." },
              { text: "who's", why: "That is <i>who is</i>, which leaves <i>review</i> with nothing to do." },
              { text: "whom", why: "An object pronoun; a noun cannot follow it." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "measurement", "evidence"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight sentences from across the whole book. Sort them by whether they report something checkable or make a claim about what it means. This is the habit the course has been building since Unit 1.",
        note: { kind: "reader",
                body: "<p>Every unit has had its own version of this: observation against interpretation, measurement against inference, evidence against assertion, the disease against the counting. They are one distinction, and the right-hand column is never the weaker one — only the one that has to earn its place.</p>" },
        bins: [
          { id: "check", label: "Checkable",   hint: "someone could verify it" },
          { id: "claim", label: "A claim about meaning", hint: "it has to be argued for" }
        ],
        items: [
          { text: "The final scene runs for four minutes without dialogue", bin: "check",
            why: "Unit 12: a stopwatch settles it." },
          { text: "Fifty people died among three hundred and thirty tested", bin: "check",
            why: "Unit 8: both halves of the fraction, stated." },
          { text: "The corridor was closed when the coastal sites were occupied", bin: "check",
            why: "Unit 4: two dated facts, each independently established." },
          { text: "Beak depth rose by half a millimetre in two generations", bin: "check",
            why: "Unit 3: a measurement with its period attached." },
          { text: "The silence leaves the ending unresolved", bin: "claim",
            why: "Unit 12: a reading of the observation above it, and a good one." },
          { text: "The finches adapted to the drought", bin: "claim",
            why: "Unit 3: and the grammar hides which thing did the adapting." },
          { text: "The scheme achieved its target by changing the behaviour of the poorest", bin: "claim",
            why: "Unit 7: an inference from two facts, neither of which states it." },
          { text: "Retrieval is an episode of learning, not a test of it", bin: "claim",
            why: "Unit 1, the first claim in the book — well supported, and still a claim." }
        ],
        closer: { kind: "test",
          body: "<p>The last page of the book. Close it, and say in two sentences what separates an observation from an interpretation — and why it matters in every subject, not only this one.</p>" } }
    ]
  };
})();
