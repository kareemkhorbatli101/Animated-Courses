/* Unit 3 · Adaptation and Diversity — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u03-tw", unit: "u03", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write with a subject line that works",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation. This one asks you to correct someone senior, in writing.",
        scenarioTitle: "The situation",
        scenario: "<p>The module handbook describes the finch result as showing that <i>the birds adapted their beaks to the drought</i>. After this unit you believe that sentence teaches the misunderstanding the lecture spent an hour removing. Professor Haddad wrote the handbook.</p><p><b>Write to Professor Haddad.</b> Say which sentence you mean, say what you think it implies, and propose a specific replacement.</p>",
        to: "a.haddad@university.edu", re: "Handbook p.14 — wording of the finch example",
        placeholder: "Dear Professor Haddad,…",
        minWords: 60,
        note: { kind: "help",
                body: "<p>Quote the sentence rather than describing it, propose a replacement rather than only objecting, and keep the whole message about the sentence. A correction that stays on the page is easy to accept.</p><i>I wondered whether…</i><i>As written, it could be read as…</i><i>Would <b>became adapted</b> work?</i>" },
        checklist: [
          "My subject line names the page.",
          "I quoted the exact sentence.",
          "I said what a reader might take from it, rather than calling it wrong.",
          "I proposed a specific replacement wording.",
          "I kept the message about the sentence, not about the handbook."
        ],
        model: "<p>Dear Professor Haddad,</p>" +
               "<p>I wondered whether I could ask about one sentence on page 14 of the handbook: <i>the birds adapted their beaks to the drought</i>.</p>" +
               "<p>As written, it puts the birds in the position of doing something to their own beaks, which is the reading you spent Tuesday's lecture removing, and it was certainly the reading I arrived with. Would <i>the population became adapted as deeper-beaked birds survived</i> work instead? It is longer, but it carries the mechanism.</p>" +
               "<p>Kind regards,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe something you once believed and later found out was wrong. What changed your mind?",
        model: "<p>For a long time I thought animals changed during their own lives to suit their surroundings — that a bird in a hard season would somehow grow a stronger beak. What changed my mind was a graph of beak depth across four seasons. The individual birds were not in the graph at all; only the average of the population was. Once I saw that the thing being measured was the group and not the animal, the whole subject rearranged itself.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to compare.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Which is more convincing — a very large study, or a small study repeated in a second place? Why?",
        model: "<p>I would take the repeat. A large study can be large and still wrong in one consistent way, because everything in it shares a method, a place and a season. If a smaller result appears again somewhere else, with different people measuring, the things that could have produced it by accident are far fewer. Size tells you about precision; repetition tells you whether the effect is real at all.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, asking you to compare two things and say which you would choose.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Would you rather learn a subject from one very good book, or from five ordinary ones? Why?",
        model: "<p>Five ordinary ones, though it is slower. A single book is one person's arrangement of the material, and if that arrangement has a hole in it you will never find out, because you have nothing to compare it against. With five, the disagreements become visible, and the disagreements are usually where the interesting part is. The cost is that you spend time on repetition, and some of the five will be worse than the one good book would have been.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, about how a field should talk to people outside it.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Some shorthand phrases are inaccurate but easy to understand. Should teachers use them? Give a reason.",
        model: "<p>I would use them and then break them, in that order. A phrase like <i>the species adapted</i> gets a beginner to the right rough picture in four words, and nothing else does that as fast. The problem is only that most courses stop there, and the shorthand hardens into the thing people believe. So I would use it on the first day and spend the second day taking it apart, which is roughly what happened to me and is why I now notice the sentence at all.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "inference", "evidence"],
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
            ] },
          { q: "A verb ending in <b>-de</b> usually makes its noun with:", from: "Lesson 1",
            options: [
              { text: "-sion", correct: true, why: "<i>conclude → conclusion</i>, <i>decide → decision</i>, <i>divide → division</i>." },
              { text: "-tion", why: "That is the default for most other endings: <i>migrate → migration</i>." },
              { text: "-ment", why: "A real suffix, but it goes with a different set of verbs: <i>improve → improvement</i>." }
            ] },
          { q: "The hard seeds weigh ____ the soft ones.", from: "Lesson 3",
            options: [
              { text: "three times as much as", correct: true, why: "A multiplier goes in front of the whole <i>as … as</i> frame." },
              { text: "three times more than", why: "Common in speech and ambiguous in writing: is it three times, or four?" },
              { text: "as much three times as", why: "Nothing may be inserted inside the frame." }
            ] },
          { q: "Which word is made with the lips closed and then opened?", from: "Lesson 4",
            options: [
              { text: "berry", correct: true, why: "/b/ — both lips meet and burst apart." },
              { text: "very", why: "/v/ — top teeth on bottom lip, and the sound can be held." },
              { text: "ferry", why: "/f/ — the same mouth as /v/, with the voice off." }
            ] },
          { q: "Two populations give bars of the same height. According to Lesson 5:", from: "Lesson 5",
            options: [
              { text: "they can still be quite different populations.", correct: true,
                why: "Identical means, different spreads — the article's whole demonstration." },
              { text: "they must contain the same birds.", why: "The article is written to rule this out." },
              { text: "one of the bars must be wrong.", why: "Both bars are correct; the complaint is about what a reader adds to them." }
            ] },
          { q: "Professor Haddad says the honest claim about the finch study is that:", from: "On Campus",
            options: [
              { text: "on this island, over this period, measured this way, it happened.", correct: true,
                why: "Her three qualifications match the three features she had just analysed." },
              { text: "selection works like this in general.", why: "That is the version she replaces." },
              { text: "one island cannot show anything.", why: "She calls it the clearest demonstration ever recorded." }
            ] },
          { q: "There were ____ seeds on the ground after the drought.", from: "Lesson 3",
            options: [
              { text: "fewer", correct: true, why: "Seeds are countable." },
              { text: "less", why: "<i>Less</i> goes with quantities you cannot count: <i>less rain</i>." },
              { text: "lesser", why: "A different word, meaning smaller in importance." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "sample"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight sentences about the same study. Sort them by whether the subject of the sentence is the thing that really acted.",
        note: { kind: "reader",
                body: "<p>This is the unit's one lasting habit. English lets you put anything in the subject position, and in this subject the thing most often put there — a species, a bird, a beak — is the thing being acted upon.</p>" },
        bins: [
          { id: "ok",    label: "The grammar matches the mechanism", hint: "the population, or selection, is doing it" },
          { id: "hides", label: "The grammar hides the mechanism",   hint: "an individual appears to act" }
        ],
        items: [
          { text: "Selection acted on variation already present", bin: "ok",
            why: "selection is the agent, variation the object. This is the mechanism in one clause." },
          { text: "The composition of the population changed", bin: "ok",
            why: "the population is the thing that changed, which is exactly right." },
          { text: "Deeper-beaked birds left more offspring", bin: "ok",
            why: "individuals in the subject position, but doing the thing individuals really do: surviving and breeding." },
          { text: "Beak depth increased across two generations", bin: "ok",
            why: "a measurement is the subject, and measurements may change without anyone acting." },
          { text: "The finches adapted their beaks to the drought", bin: "hides",
            why: "the birds act on their own beaks. Nothing of the kind happened." },
          { text: "The species responded to the harder seeds", bin: "hides",
            why: "<i>responded</i> makes the species an agent that noticed something." },
          { text: "The birds developed deeper beaks in order to survive", bin: "hides",
            why: "two errors at once: the individual acts, and it acts for a purpose." },
          { text: "Evolution gave the population a deeper beak", bin: "hides",
            why: "the subtlest one. Evolution is not an agent handing things out; it is the name for the outcome." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Tell the drought story in three sentences, using <i>variation</i>, <i>selection</i> and <i>adaptation</i> once each, in that order.</p>" } }
    ]
  };
})();
