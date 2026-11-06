/* Unit 3 · Adaptation and Diversity — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u03-tw", unit: "u03", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write with a subject line that works",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. Pay attention to the subject line — it is this unit's writing strategy.",
        scenarioTitle: "The situation",
        scenario: "<p>Two trays of specimens in the teaching collection have labels that do not match the collection order, which means last week's class may have recorded their measurements against the wrong dates. Dr Okonkwo runs the collection.</p><p><b>Write to Dr Okonkwo.</b> Say what you found, say why it matters, and ask what should happen to the recorded data.</p>",
        to: "r.okonkwo@university.edu", re: "",
        placeholder: "Dear Dr Okonkwo,…",
        minWords: 60,
        note: { kind: "help",
                body: "<i>I am writing to report…</i><i>This means that…</i><i>Should we… or would you prefer…?</i>" },
        checklist: [
          "My subject line names the thing <b>and</b> the action.",
          "I said what I found in the first sentence.",
          "I explained why it matters.",
          "I asked a question the reader can decide."
        ],
        model: "<p><b>Subject:</b> Trays 3 and 4 — labels do not match collection order</p><p>Dear Dr Okonkwo,</p><p>I am writing to report that the labels on trays three and four do not follow the order in which the specimens were collected. Tray four is the later sample, although its number suggests otherwise.</p><p>This means that last week's class may have recorded their beak measurements against the wrong dates. Should we re-measure both trays, or would you prefer us simply to swap the dates in the record and note the correction?</p><p>Kind regards,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe something you once believed and later found out was wrong. What changed your mind?",
        model: "<p>For a long time I thought animals changed during their own lives to suit their surroundings — that a bird in a hard season would somehow grow a stronger beak. What changed my mind was a graph of beak depth across four seasons. The individual birds were not in the graph at all; only the average of the population was. Once I saw that the thing being measured was the group and not the animal, the whole subject rearranged itself.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to compare.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Which is more convincing — a very large study, or a small study repeated in a second place? Why?",
        model: "<p>I would take the repeat. A large study can be large and still wrong in one consistent way, because everything in it shares a method, a place and a season. If a smaller result appears again somewhere else, with different people measuring, the things that could have produced it by accident are far fewer. Size tells you about precision; repetition tells you whether the effect is real at all.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "Cracking these seeds is ____ than cracking last year's.", from: "Lesson 3",
            options: [
              { text: "far more difficult", correct: true, why: "Three syllables, so <i>more</i>, with <i>far</i> intensifying it." },
              { text: "far difficulter", why: "Long adjectives never take <i>-er</i>." },
              { text: "the most difficult", why: "A superlative cannot take <i>than</i>." }
            ] },
          { q: "The second island was not ____ the first.", from: "Lesson 3",
            options: [
              { text: "as dry as", correct: true, why: "<i>not as … as</i> for equality; no comparative ending." },
              { text: "drier as", why: "<i>drier</i> takes <i>than</i>, not <i>as</i>." },
              { text: "as drier as", why: "Mixes the two patterns." }
            ] },
          { q: "<i>Vary</i> becomes which noun?", from: "Lesson 1",
            options: [
              { text: "variation", correct: true, why: "<i>-tion</i>, with <i>y → i</i>, and the stress moves to <i>-a-</i>." },
              { text: "varyness", why: "Not an English form." },
              { text: "varying", why: "A participle, not the process noun." }
            ] },
          { q: "The article says what changed during the drought was:", from: "Lesson 5",
            options: [
              { text: "the composition of the population.", correct: true, why: "Its exact phrase, and the point of the final paragraph." },
              { text: "the beaks of individual birds.", why: "Explicitly denied." },
              { text: "the hardness of the seeds the birds preferred.", why: "The seeds changed, but that is the cause, not what the article says changed." }
            ] },
          { q: "You hear: “If the seeds had stayed soft, the beaks wouldn't have changed.” This implies:", from: "Lesson 4",
            options: [
              { text: "the seeds hardened and the beaks did change.", correct: true, why: "A past counterfactual reverses both clauses." },
              { text: "the seeds stayed soft.", why: "The <i>if</i> clause describes what did not happen." },
              { text: "nobody knows what happened.", why: "The sentence presupposes what happened." }
            ] },
          { q: "Which question best asks for evidence without sounding like an accusation?", from: "On Campus",
            options: [
              { text: "I'd find that convincing if it happened on a second island — did it?", correct: true,
                why: "Names in advance what would convince you, which turns a challenge into a shared question." },
              { text: "How do you know that?", why: "Workable, but it puts the person rather than the claim on the spot." },
              { text: "That can't be right.", why: "Not a request for evidence at all." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Tell the drought story in three sentences, using <i>variation</i>, <i>selection</i> and <i>adaptation</i> once each, in that order.</p>" } }
    ]
  };
})();
