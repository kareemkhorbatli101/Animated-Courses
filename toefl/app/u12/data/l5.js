/* Unit 12 · Art, Audience and Culture — LESSON 5 · READING
   Reading strategy: identifying an author's opinion; reading sources.
   Data visual: pie. */
(function () {
  var PASSAGE = {
    masthead: "WHAT THE AUDIENCE ADDS", every: 1,
    blocks: [
      { h: "An older question than it looks", lines: [
        "The question of what an audience contributes to a work has a longer history than the modern language of interactivity suggests.",
        "A play does not exist in the same sense that a sculpture exists, since it requires an audience to be assembled before it can be said to happen at all."
      ] },
      { h: "Two claims, often confused", lines: [
        "What is newer is the claim that the audience <b>completes</b><sup>1</sup> the meaning rather than merely receiving it, and that claim is harder to assess than it first appears.",
        "It is plainly true that a film watched by somebody who knows nothing of its tradition is a different experience from the same film watched by a critic.",
        "Whether it is a different work is another matter, and the argument usually turns on that distinction without acknowledging that it has."
      ] },
      { h: "A discipline for reading criticism", lines: [
        "A useful discipline when reading such criticism is to ask which of the two claims is being made, because the weaker one is almost always true and the stronger one almost always interesting."
      ] }
    ],
    notes: ["completes: supplies something the work lacks without an audience, as against merely perceiving what is already there"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "GALLERY", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Gallery. No flash photography.",
      "Bags larger than A4 to the cloakroom.",
      "The upper floor closes thirty minutes before the rest of the building."
    ] }],
    source: "City Art Gallery"
  };

  /* The second academic passage: the first is about what an audience adds,
     this one about the joint between observation and interpretation. */
  var PASSAGE2 = {
    masthead: "WHERE THE SENTENCE TURNS", every: 1,
    blocks: [
      { h: "One sentence, two kinds of claim", lines: [
        "Consider a sentence of the sort that appears in almost every review: <i>the film refuses the consolations of its genre</i>.",
        "Part of it is an observation, available to anyone who watches the film and knows what such films usually do.",
        "The remainder is an interpretation, and the word carrying it is <i>refuses</i>, which attributes an intention that no sequence of images can display."
      ] },
      { h: "Why this is not a complaint", lines: [
        "Nothing is wrong with the sentence, and a criticism confined to the checkable would be a catalogue rather than an argument.",
        "The difficulty is only that the two kinds of claim are joined without a seam, so a reader who agrees with the first finds themselves having agreed to the second."
      ] },
      { h: "A reading habit", lines: [
        "The useful question is therefore not whether a claim is true but what one would have to see in order to accept it.",
        "Where a writer has shown that thing, the argument is made; where they have not, the sentence marks the place at which the argument was supposed to happen and did not."
      ] }
    ],
    notes: ["seam: the visible join between two things, here between what is reported and what is inferred"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "GALLERY · CURATOR'S TOUR", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Thursday's curator tour begins at two, not three.",
      "The tour lasts fifty minutes and does not include the upper floor.",
      "Places are limited to twenty and cannot be reserved by telephone.",
      "The gallery is forty minutes from the main campus by bus."
    ] }],
    source: "City Art Gallery"
  };

  window.PAGE = {
    id: "u12-l5", unit: "u12", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Find the author's own opinion inside the argument",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>assemble</span> (v) to gather in one place",
          "<span class='gloss'>assess</span> (v) to judge against criteria",
          "<span class='gloss'>turn on</span> (phr v) to depend entirely upon"
        ] }] },
        after: "<p>The third is a phrasal verb doing academic work, which Unit 6 said was unusual.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Where is the author's own opinion most likely to be?",
        note: { kind: "reader",
                body: "<p><b>Finding the author's opinion.</b> In academic prose it is rarely announced. Look for the sentence that evaluates rather than describes — often near the end, often carrying a hedge such as <i>useful</i>, <i>almost always</i> or <i>harder than it appears</i>.</p>" },
        options: [
          { text: "In the last section, where it recommends a way of reading.", correct: true,
            why: "The first two sections set out the question and the confusion; only the third says what the author thinks you should do." },
          { text: "In the first sentence.", why: "That states the subject, not a position on it." },
          { text: "The author expresses no opinion.", why: "<i>A useful discipline…</i> is plainly one." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the two claims it separates, once for the author's own view.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Two different claims about audiences are routinely run together, and separating them clarifies the argument.", correct: true,
                why: "The second section names both and the third turns that into a reading discipline." },
              { text: "Audiences complete the meaning of every work.", why: "The article treats that as the contested claim, not its own." },
              { text: "Interactivity is a modern invention.", why: "It says the question is older than that language." }
            ] },
          { q: "What is the <i>weaker</i> claim the article identifies?",
            options: [
              { text: "That a work is experienced differently by different audiences.", correct: true,
                why: "It calls this plainly true, and the critic example illustrates it." },
              { text: "That a work is a different work for each audience.", why: "That is the stronger claim." },
              { text: "That a play needs an audience to occur.", why: "That is the opening observation, not one of the two claims." }
            ] },
          { q: "<i>The argument usually turns on that distinction without acknowledging that it has</i> means:",
            options: [
              { text: "the whole disagreement depends on a difference the writers do not name.", correct: true,
                why: "<i>Turn on</i> means depend entirely upon, and <i>without acknowledging</i> is the criticism." },
              { text: "the distinction is unimportant.", why: "The opposite — everything depends on it." },
              { text: "both claims are false.", why: "The article calls the weaker one plainly true." }
            ] },
          { q: "What is the author's own view?",
            options: [
              { text: "That readers should ask which of the two claims is being made.", correct: true,
                why: "<i>A useful discipline… is to ask</i> — the only sentence that recommends rather than describes." },
              { text: "That criticism should be avoided.", why: "No such recommendation appears." },
              { text: "That the stronger claim is false.", why: "It calls it <i>interesting</i>, which is deliberately not a verdict." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card at the gallery entrance.",
        text: NOTICE,
        items: [
          { q: "When does the upper floor close?",
            options: [
              { text: "Half an hour before the rest of the building.", correct: true, why: "Stated exactly." },
              { text: "At the same time as the rest.", why: "The card says earlier." },
              { text: "It does not say.", why: "It gives the interval." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        carry: "1c",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark — and in a piece this carefully hedged, NI is often the right answer.</p>" },
        items: [
          { stem: "The article says a film is experienced differently by different viewers.", answer: "T", line: 4,
            why: "Line 4 calls this plainly true, with the critic example." },
          { stem: "The article concludes that the audience does complete the work.", answer: "F", line: 5,
            why: "Line 5 says whether it is a different work is <i>another matter</i> — it declines to settle it." },
          { stem: "The author prefers theatre to sculpture.", answer: "NI", line: null,
            why: "The comparison is about how each exists, not about which is better." }
        ] },

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        carry: "4a",
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This unit's reading strategy is finding the author's opinion. It is rarely the sentence with the strongest adjective in it; it is the sentence that would still be a claim if every adjective were removed.</p>" },
        items: [
          { prompt: "Which sentence is the author's own judgement rather than a report of someone else's?",
            text: "Contemporary reviews described the film as cold. Audiences stayed away in the first month and filled the cinemas in the second. Most later critics have read the coldness as deliberate. The reading is convenient, and the evidence for it is thinner than its popularity suggests.",
            answer: "The reading is convenient, and the evidence for it is thinner than its popularity suggests.",
            why: "The first three report what was said and what happened. Only the last one is the writer taking a position." },
          { prompt: "Which sentence is an observation rather than an interpretation?",
            text: "The camera remains behind the character for the whole of the final scene. This withholds her reaction at the moment it would matter most. The effect is to leave the ending unresolved. Several critics have called the choice evasive.",
            answer: "The camera remains behind the character for the whole of the final scene.",
            why: "Anyone can check it. <i>Withholds</i>, <i>unresolved</i> and <i>evasive</i> are all readings of that one fact." },
          { prompt: "Which sentence concedes something to the opposing view?",
            text: "The adaptation cuts two subplots and a narrator. Readers of the novel have objected for thirty years. It is true that the narrator carried most of the book's irony. Whether a film can carry irony the same way is a separate question, and the objection assumes it can.",
            answer: "It is true that the narrator carried most of the book's irony.",
            why: "<i>It is true that</i> grants the other side its strongest point, immediately before the sentence that limits it." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "Noun or verb? The stress decides.",
        items: [
          { text: "The gallery keeps a r___ of every loan it receives.", answer: "record", given: [0, 1, 2],
            why: "A noun, so <b>RE</b>cord." },
          { text: "They p___ the film onto the gallery wall each evening.", answer: "project", given: [0, 1, 2],
            why: "A verb, so pro<b>JECT</b>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the chart, then ask where the figures came from.",
        note: { kind: "reader",
                body: "<p><b>Reading sources.</b> Before believing a chart, find who collected the data and from whom. A survey of gallery visitors tells you about people who go to galleries — which is not the same population as everyone, and the chart will not say so.</p>" },
        chart: {
          kind: "pie", title: "How respondents said they last encountered a new artwork",
          sub: "Survey of 1,200 visitors, conducted inside the gallery",
          source: "Illustrative, authored for this item",
          slices: [
            { name: "In a gallery or museum", v: 44 },
            { name: "Online, by chance", v: 23 },
            { name: "Recommended by a friend", v: 14 },
            { name: "In a class or course", v: 10 },
            { name: "In a newspaper or magazine", v: 6 },
            { name: "Other", v: 3 }
          ],
          cols: ["Route", "Share"],
          rows: [["In a gallery or museum","44%"],["Online, by chance","23%"],["Recommended by a friend","14%"],
                 ["In a class or course","10%"],["In a newspaper or magazine","6%"],["Other","3%"]]
        },
        items: [
          { q: "Why should the 44% figure be treated with caution?",
            options: [
              { text: "The survey was conducted inside a gallery, so its respondents are gallery-goers.", correct: true,
                why: "The sampling method guarantees the result. It is in the subtitle, which is exactly where a reader stops looking — and it echoes Unit 5's point about a sample of the method rather than the population." },
              { text: "1,200 is too small a sample.", why: "1,200 is ample; the problem is who was in it." },
              { text: "The categories overlap.", why: "They are distinct routes." }
            ] }
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on a sentence of the kind you have been reading all unit. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>The second section is the one to read twice. It is there to stop the article being taken as an attack on criticism, which is how an argument of this shape is usually misread.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Observation and interpretation are joined without a seam, so agreeing to one can commit you to the other.", correct: true,
                why: "The three sections are the example, the refusal to complain about it, and the habit that follows." },
              { text: "Critics should avoid attributing intentions.", why: "<i>Nothing is wrong with the sentence</i> — the article says so explicitly." },
              { text: "Reviews should contain only checkable claims.", why: "That would be a catalogue, which the article names and rejects." }
            ] },
          { q: "Which word does the article identify as carrying the interpretation?",
            options: [
              { text: "refuses", correct: true,
                why: "Because it attributes an intention, and no sequence of images can display one." },
              { text: "consolations", why: "A description of what such films usually offer, which is checkable against the genre." },
              { text: "genre", why: "The classification is not what the article disputes." }
            ] },
          { q: "Why does the article say a purely checkable criticism would be worse?",
            options: [
              { text: "It would be a catalogue rather than an argument.", correct: true,
                why: "The concession is doing real work: it stops the article recommending the thing it is warning about." },
              { text: "It would be too short.", why: "Length is not mentioned." },
              { text: "Nobody would read it.", why: "Readership is not the article's concern." }
            ] },
          { q: "What question does the article recommend asking?",
            options: [
              { text: "What would I have to see in order to accept this?", correct: true,
                why: "And the article adds the follow-up: has the writer shown it?" },
              { text: "Is this claim true?", why: "The article says explicitly that this is not the useful question." },
              { text: "Does the critic know the genre?", why: "Expertise is not what the habit tests." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        carry: "4a",
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>The last unit of the book, and the same discipline as the first: the wrong answer is almost never about a word you did not know. It is about a relationship you did not notice.</p>" },
        items: [
          { source: "It is plainly true that a film watched by somebody who knows nothing of its tradition is a different experience from the same film watched by a critic.",
            options: [
              { text: "Obviously the same film is experienced differently by a newcomer and by a specialist.", correct: true,
                why: "Keeps <i>experience</i>, which is the weaker of the two claims the article separates." },
              { text: "A newcomer and a critic are watching two different films.",
                why: "That is the stronger claim, and the next sentence calls it <i>another matter</i>." },
              { text: "Critics understand films better than other viewers.",
                why: "Nothing about understanding or quality; the claim is about difference." },
              { text: "Tradition has no effect on how a film is watched.",
                why: "Reverses it." }
            ] },
          { source: "The difficulty is only that the two kinds of claim are joined without a seam, so a reader who agrees with the first finds themselves having agreed to the second.",
            options: [
              { text: "The trouble is that nothing marks the join, so accepting the first half quietly commits you to the second.", correct: true,
                why: "Keeps <i>only</i>, which limits the complaint, and keeps the mechanism." },
              { text: "Critics deliberately disguise their interpretations as facts.",
                why: "Adds an intention the article is careful not to allege." },
              { text: "Readers should not agree with the first half.",
                why: "The first half is the checkable one; the article has no objection to it." },
              { text: "The two kinds of claim cannot be separated.",
                why: "The whole article is an exercise in separating them." }
            ] },
          { source: "Where a writer has shown that thing, the argument is made; where they have not, the sentence marks the place at which the argument was supposed to happen and did not.",
            options: [
              { text: "If the evidence is there, the case stands; if not, the sentence shows where the case should have been built.", correct: true,
                why: "Keeps both branches, and keeps the second one as a diagnosis rather than an accusation." },
              { text: "A sentence without evidence is dishonest.",
                why: "The article calls it a missing argument, not a lie." },
              { text: "Writers should show their evidence in every sentence.",
                why: "A rule the article does not propose; it has just conceded that criticism cannot work that way." },
              { text: "Arguments cannot be made in single sentences.",
                why: "The first branch says exactly that they can." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card from the gallery. Read it.",
        text: NOTICE2,
        items: [
          { q: "When does the tour finish?",
            options: [
              { text: "At ten to three.", correct: true, why: "Lines 1 and 2 together: two o'clock plus fifty minutes." },
              { text: "At three.", why: "Three is the time it no longer begins." },
              { text: "The card does not say.", why: "It gives the start and the length, which is the same as giving the end." }
            ] },
          { q: "How can a place be booked?",
            options: [
              { text: "By any means except the telephone.", correct: true,
                why: "Line 3 rules out one route and names no other, which is all you can conclude." },
              { text: "Only in person.", why: "The card excludes the telephone and says nothing about what remains." },
              { text: "Places cannot be booked at all.", why: "<i>Limited to twenty</i> implies they can." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "The tour includes the upper floor.", answer: "F", line: 2,
            why: "Line 2 excludes it, which matters because the first card said the upper floor closes early." },
          { stem: "The bus to the gallery runs every ten minutes.", answer: "NI", line: null,
            why: "Line 4 gives the journey time and nothing about frequency. The two are easy to conflate when you are planning." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, one chart, and the habit this book has been building for twelve units.",
        text: { blocks: [{ lines: [
          "<b>What the audience adds</b> — a different experience, certainly. A different work, arguably, and that is the interesting claim.",
          "<b>Where the sentence turns</b> — the word that attributes an intention nothing on screen can show.",
          "<b>What to ask, of anything</b> — what would I have to see in order to agree, and have they shown me that?"
        ],
        closer: { kind: "life",
          body: "<p>Find a survey result quoted in a newspaper. Who was asked, and where? If the article does not say, you cannot use the number.</p>" } }] } }
    ]
  };
})();
