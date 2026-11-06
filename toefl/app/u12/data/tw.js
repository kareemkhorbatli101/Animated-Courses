/* Unit 12 · Art, Audience and Culture — TEAMWORK & LANGUAGE REVIEW
   The last block of the book. */
(function () {
  window.PAGE = {
    id: "u12-tw", unit: "u12", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and support a claim with something checkable",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
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

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a book, film or piece of music that changed your mind about something. Be specific about what did it.",
        model: "<p>A documentary about an orchestra changed how I listen. There is a sequence where the same two minutes are played three times: once by the full orchestra, once by the strings alone, and once by a single player. Nothing is explained over it. What changed for me was that I could finally hear what a part contributes, because I had heard the same passage with it and without it. Before that I had been told music was layered and had never actually perceived the layers.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "The last speaking task of the book. One pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Does an audience change a work, or only its own experience of it? Give your reasons.",
        model: "<p>I think it changes the experience, and I am not persuaded it changes the work. It is obviously true that a film means something different to someone who knows its tradition and someone who does not — nobody disputes that. The stronger claim is that these are therefore different works, and I resist it because it would make disagreement impossible. When two people argue about an ending they are arguing about the same sequence of shots, and that shared object is exactly what lets them disagree at all.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
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
          { q: "The article calls the weaker claim:", from: "Lesson 5",
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
            ] }
        ],
        closer: { kind: "test",
          body: "<p>The last page of the book. Close it, and say in two sentences what separates an observation from an interpretation — and why it matters in every subject, not only this one.</p>" } }
    ]
  };
})();
