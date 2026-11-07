/* explain.js — the Explain popup, and what "play this page" means.
 *
 * Two rules decide the design, and both of them are pedagogical rather
 * than technical:
 *
 *   1. TASK help goes in the popup; CONTENT help stays on the page.
 *      You do not need to see an exercise to read what it is asking, so
 *      covering it costs nothing. You do need to see a passage while a
 *      word in it is explained, so the glossary rail, the line highlight
 *      and the transcript are never popups.
 *   2. The popup NEVER contains an answer. A help button that resolves
 *      the exercise destroys the retrieval the exercise exists to
 *      produce. Answers live in the hint ladder, behind an attempt.
 *
 * Coverage is guaranteed by generation: every scene gets a panel built
 * from its kind, prompt and note, and a hand-written `explain` block
 * overrides it. So the figure is 100% from this commit, and the content
 * work afterwards is improving panels rather than hunting for holes.
 *
 * Note the class names. `.dialog` is already taken in ui.css for spoken
 * dialogue lines, so this uses `.explain-sheet`. See tools/check.js,
 * rule `reserved-class`.
 */
(function (root, doc) {
  "use strict";
  function E(t, c, x) {
    var n = doc.createElement(t);
    if (c) n.className = c;
    if (x !== undefined) n.textContent = x;
    return n;
  }
  function strip(s) { return String(s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
  function S() { return root.Speech; }

  /* ---------------------------------------------------------------- */
  /* What each kind is, in words a learner can use. Generated panels    */
  /* are built from these, so a scene with no hand-written block still  */
  /* gets something true rather than something generic.                 */
  /* ---------------------------------------------------------------- */
  var KIND = {
    letterbox:  { what: "Complete each word. Some letters are given and you type the rest.",
                  how: "Click the first empty box and type. The boxes move on by themselves.",
                  why: "Complete the Words is the largest single task on the reading section." },
    order:      { what: "Build one sentence from the words given.",
                  how: "Click the words in the order you want them. Click a placed word to take it back.",
                  why: "Build a Sentence tests whether you can produce the structure, not only recognise it." },
    orderset:   { what: "Build several sentences, one at a time.",
                  how: "Click the words in order. There are always more words than places.",
                  why: "Build a Sentence tests whether you can produce the structure, not only recognise it." },
    choice:     { what: "Choose the one answer that fits.",
                  how: "Click an option, then Check Answers.",
                  why: "Most reading and listening items on the test take this shape." },
    read:       { what: "Read the text, then answer questions about it.",
                  how: "The text stays on screen while you answer. Scroll it if you need to.",
                  why: "This is the reading section's main task." },
    "read-only":{ what: "Read this before you go on.", how: "Read it.", why: "It sets up what follows." },
    tfni:       { what: "Decide whether each statement is true, false, or not given.",
                  how: "Choose T, F or NI. For T and F, say which line told you.",
                  why: "Not Given is not a weak False: it means the text neither says it nor rules it out." },
    listen:     { what: "Listen once, then answer.",
                  how: "Press play. The audio runs once, as it does on the test.",
                  why: "Listening on the test is single-play, so the practice is too." },
    talk:       { what: "Listen to a talk and take notes, then answer.",
                  how: "You may type while it plays. The notes stay; the audio does not.",
                  why: "Note-taking during a single play is the skill this task measures." },
    respond:    { what: "You hear one short line. Choose the reply that fits.",
                  how: "Press play, then choose.",
                  why: "Choose a Response tests whether you heard what the line was doing, not only its words." },
    repeat:     { what: "Listen, then say the line back.",
                  how: "Press play, say it aloud, then rate yourself honestly.",
                  why: "Pronunciation is scored on the speaking section." },
    interview:  { what: "Answer one question aloud, against the clock.",
                  how: "Start the clock, speak for the time given, then compare with the model.",
                  why: "Take an Interview is a timed independent speaking task." },
    cloze:      { what: "Complete a rule by choosing the right words.",
                  how: "Choose from each menu.",
                  why: "Stating the rule yourself is what makes it usable later." },
    match:      { what: "Match each word to the thing it names.",
                  how: "Drag a word onto a target, or click the word and then the target. Tab and Enter also work.",
                  why: "Vocabulary you can point to is vocabulary you can use." },
    sort:       { what: "Sort the cards into the right columns.",
                  how: "Drag a card to a column, or click the card and then the column.",
                  why: "Sorting tests whether you hold a distinction, not just recognise a word." },
    wordbank:   { what: "Put the right word into each gap.",
                  how: "Drag a word from the bank into a gap. Some words are not used.",
                  why: "This tests which word fits, where spelling exercises test the word itself." },
    sequence:   { what: "Put the steps into the right order.",
                  how: "Drag each step onto a rung, or click the step and then the rung.",
                  why: "A process you can order is a process you understand." },
    errorfix:   { what: "Find the one wrong word in each sentence and correct it.",
                  how: "Click the wrong word, then type what it should be.",
                  why: "Noticing an error is the step before avoiding it in your own writing." },
    selectintext:{ what: "Click the one sentence that does the job described.",
                  how: "Click a sentence in the paragraph. Click again to unselect.",
                  why: "Reading items are written on exactly this distinction between what sentences do." },
    table:      { what: "Complete the table.",
                  how: "Type into each box.",
                  why: "Organising information into a grid is how a complicated source becomes usable." },
    notes:      { what: "Complete the notes while the talk plays.",
                  how: "Type into each gap. You can replay.",
                  why: "Four good lines will hold a long talk; twelve pages of transcription will not." },
    dictation:  { what: "Write exactly what you hear.",
                  how: "Play each line as often as you like, then type it. Spelling counts; punctuation does not.",
                  why: "Dictation is the hardest honest test of listening there is." },
    "minimal-pairs": { what: "Decide which word you heard.",
                  how: "Play the line, then choose. You can replay as often as you like.",
                  why: "If you cannot hear a contrast you cannot produce it reliably." },
    paraphrase: { what: "Choose the sentence closest in meaning to the one in the box.",
                  how: "Read the source, then choose.",
                  why: "A wrong paraphrase usually changes a relationship, not a word." },
    oddone:     { what: "Choose the word that does not belong with the others.",
                  how: "Choose one from each row.",
                  why: "Knowing why three words group together is vocabulary depth rather than breadth." },
    quiz:       { what: "Mixed questions from across the whole unit.",
                  how: "Choose an answer for each.",
                  why: "Mixed practice is harder than blocked practice, and it is what the test gives you." },
    chartread:  { what: "Read the chart, then answer.",
                  how: "Read the key first, then the labels, then the shape.",
                  why: "A shape with no labels tells you nothing." },
    discussion: { what: "Write a reply on a discussion board.",
                  how: "Read the question and the two classmates, then write. Tick the checklist honestly.",
                  why: "Answering a classmate by name is what separates a top band from a middle one." },
    "write-email": { what: "Write an email for the situation given.",
                  how: "Read the situation, then write. Tick the checklist honestly.",
                  why: "Write an Email gives you an audience and a purpose, and marks you on meeting both." },
    paragraph:  { what: "Write one paragraph, using the model beside it.",
                  how: "Read the model, then write. Tick the checklist honestly.",
                  why: "A paragraph makes its claim first and spends the rest earning it." },
    "register-dial": { what: "Compare two versions of the same message.",
                  how: "Flip the switch to read each one, then answer.",
                  why: "Register is a choice, and seeing both versions is how the choice becomes visible." },
    cards:      { what: "Learn a set of terms by recalling them, not by reading them.",
                  how: "Try to say the meaning first, then flip the card to check.",
                  why: "Recalling before checking is what makes a term stick. Reading it again does not." },
    build:      { what: "Build words from a prefix or suffix and a root.",
                  how: "Drag the piece onto the root and read what it makes.",
                  why: "One affix unlocks a family of words you have never met." },
    compare:    { what: "Find what changed between the two versions.",
                  how: "Click each difference you can see.",
                  why: "Noticing the difference is the step before explaining it." },
    phrases:    { what: "Learn phrases you can use out loud.",
                  how: "Tap a phrase to hear it, say it back, then rate yourself.",
                  why: "A phrase you have said once is available to you; a phrase you have read is not." },
    recap:      { what: "Apply what the unit established to a new case.",
                  how: "Drag each takeaway onto the case it settles.",
                  why: "Restating is recognition. Applying is the thing being taught." },
    annotate:   { what: "Label what each sentence of the model is doing.",
                  how: "Click a sentence, then choose its job.",
                  why: "Seeing the shape of a good answer is how you build your own." }
  };

  /* ---------------------------------------------------------------- */
  /* sayable(spec) -> segments. What "play" means for each kind.        */
  /* Every registered kind must have one; tools/check.js enforces it.   */
  /* ---------------------------------------------------------------- */
  function blank(t) { return String(t).replace(/_{2,}/g, " blank "); }

  var SAY = {
    letterbox: function (s) { return (s.items || []).map(function (i) { return blank(strip(i.text)); }); },
    order: function (s) { return [strip(s.cue || ""), strip(s.target)].filter(Boolean); },
    orderset: function (s) { return (s.items || []).map(function (i) { return strip(i.cue) + ". " + strip(i.target); }); },
    choice: function (s) { return [strip(s.prompt)].concat((s.options || []).map(function (o) { return strip(o.text); })); },
    read: function (s) { return textSegments(s.text).concat((s.items || []).map(function (i) { return strip(i.q); })); },
    "read-only": function (s) { return textSegments(s.text); },
    tfni: function (s) { return (s.items || []).map(function (i) { return strip(i.stem); }); },
    listen: function (s) { return (s.items || []).map(function (i) { return strip(i.q); }); },
    talk: function (s) { return (s.items || []).map(function (i) { return strip(i.q); }); },
    respond: function (s) { return (s.items || []).map(function (i) { return strip(i.say); }); },
    repeat: function (s) { return (s.lines || []).map(function (l) { return strip(l.text); }); },
    interview: function (s) { return [strip(s.question)]; },
    cloze: function (s) { return [blank(strip(s.text))]; },
    match: function (s) { return (s.pairs || []).map(function (p) { return p.word; }); },
    sort: function (s) { return (s.bins || []).map(function (b) { return b.label; })
             .concat((s.items || []).map(function (i) { return strip(i.text); })); },
    wordbank: function (s) { return (s.items || []).map(function (i) { return blank(strip(i.text)); }); },
    sequence: function (s) { return (s.steps || []).slice().sort(function (a, b) { return a.pos - b.pos; })
             .map(function (x) { return strip(x.text); }); },
    /* The contrast is the teaching, so both sentences are read. */
    errorfix: function (s) { return (s.items || []).reduce(function (a, i) {
               return a.concat([strip(i.text), "Corrected: " + strip(i.fixed || "")]); }, []); },
    selectintext: function (s) { return (s.items || []).map(function (i) { return strip(i.prompt) + " " + strip(i.text); }); },
    table: function (s) { return (s.rows || []).map(function (r) { return blank(strip(r.join(", "))); }); },
    notes: function (s) { return (s.lines || []).map(function (l) { return blank(strip(l)); }); },
    dictation: function (s) { return (s.items || []).map(function (i) { return strip(i.answer); }); },
    "minimal-pairs": function (s) { return (s.items || []).map(function (i) { return strip(i.say); }); },
    paraphrase: function (s) { return (s.items || []).map(function (i) { return strip(i.source); }); },
    oddone: function (s) { return (s.items || []).map(function (i) {
               return (i.options || []).map(function (o) { return strip(o.text); }).join(", "); }); },
    quiz: function (s) { return (s.items || []).map(function (i) { return blank(strip(i.q)); }); },
    chartread: function (s) { return [strip(s.chart && s.chart.title)].concat((s.items || []).map(function (i) { return strip(i.q); })); },
    discussion: function (s) { return (s.posts || []).map(function (p) { return strip(p.text); }); },
    "write-email": function (s) { return [strip(s.scenario)]; },
    paragraph: function (s) { return [strip(s.task), strip(s.model)]; },
    "register-dial": function (s) { return [strip(s.ask)]; },
    cards: function (s) { return (s.cards || []).map(function (c) { return c.term; }); },
    build: function (s) { return (s.items || []).map(function (i) { return i.affix + " plus " + i.root; }); },
    compare: function (s) { return textSegments(s.before).concat(textSegments(s.after)); },
    phrases: function (s) { return (s.phrases || []).map(function (p) { return strip(p.say || p.text); }); },
    recap: function (s) { return (s.takeaways || []).map(function (t) { return strip(t.text); }); },
    annotate: function (s) { return (s.sentences || []).map(function (x) { return strip(x.text); }); }
  };

  function textSegments(t) {
    if (!t) return [];
    var out = [];
    (t.blocks || []).forEach(function (b) {
      if (b.h) out.push(strip(b.h));
      (b.lines || []).forEach(function (l) { out.push(strip(l)); });
    });
    return out.filter(Boolean);
  }

  function sayable(spec) {
    var f = SAY[spec.kind];
    var segs = f ? f(spec) : [];
    return [strip(spec.sectionTitle), strip(spec.prompt)].concat(segs).filter(Boolean);
  }

  /* ---------------------------------------------------------------- */
  /* The generated panel                                                */
  /* ---------------------------------------------------------------- */
  function generate(spec, page) {
    var k = KIND[spec.kind] || { what: "An exercise.", how: "Work through it, then check.", why: "" };
    var own = spec.explain || {};
    /* A scene may overrule its kind's generic explanation. The table below
       describes what a kind usually does, and occasionally a scene uses the
       kind for something else: the homophone exercise in the business course
       is built on `minimal-pairs` and its whole point is that the two options
       sound identical, which is the opposite of what that kind's "why" says.
       Any of what / how / why may be given; the rest fall back to the kind. */
    if (own.what || own.how || own.why)
      k = { what: own.what || k.what, how: own.how || k.how, why: own.why || k.why };
    var pageWalk = own.page;
    if (!pageWalk) {
      var bits = [];
      if (spec.sectionTitle) bits.push("This is " + spec.sectionTitle.toLowerCase() + ".");
      if (spec.text) bits.push("There is a text to read.");
      if (spec.audio) bits.push("There is audio to play.");
      if (spec.chart) bits.push("There is a chart.");
      if (spec.scene) bits.push("There is a picture with numbered places on it.");
      if (spec.note) bits.push("There is a note beside the exercise with the rule in it.");
      var n = countItems(spec);
      if (n) bits.push("There " + (n === 1 ? "is one question" : "are " + n + " questions") + ".");
      pageWalk = bits.join(" ");
    }
    return {
      what: own.what || k.what,
      how: own.how || k.how,
      why: own.why || k.why,
      page: pageWalk,
      terms: own.terms || [],
      generated: !spec.explain
    };
  }

  function countItems(s) {
    if (s.items) return s.items.length;
    if (s.pairs) return s.pairs.length;
    if (s.steps) return s.steps.length;
    if (s.gaps) return s.gaps.length;
    if (s.cards) return s.cards.length;
    return 0;
  }

  /* ---------------------------------------------------------------- */
  /* The popup                                                          */
  /* ---------------------------------------------------------------- */
  var sheet = null, titleEl = null, bodyEl = null, opener = null, playing = null;

  function ensure() {
    if (sheet) return sheet;
    sheet = doc.createElement("dialog");
    sheet.className = "explain-sheet";
    sheet.setAttribute("aria-labelledby", "explain-title");
    var head = E("div", "explain-head");
    titleEl = E("h2", null, "Explain");
    titleEl.id = "explain-title";
    var x = E("button", "explain-close", "Close");
    x.type = "button";
    x.addEventListener("click", function () { sheet.close(); });
    head.appendChild(titleEl);
    head.appendChild(x);
    bodyEl = E("div", "explain-body");
    sheet.appendChild(head);
    sheet.appendChild(bodyEl);
    /* Clicking the backdrop closes it. */
    sheet.addEventListener("click", function (e) { if (e.target === sheet) sheet.close(); });
    sheet.addEventListener("close", function () {
      if (playing) { playing.cancel(); playing = null; }
      if (S()) S().stop();
      if (opener) opener.focus();
    });
    doc.body.appendChild(sheet);
    return sheet;
  }

  function row(label, text, lang) {
    if (!text) return null;
    var r = E("div", "explain-row");
    var h = E("p", "explain-label", label);
    var p = E("p", "explain-text");
    p.innerHTML = text;
    if (lang === "ar") { p.dir = "rtl"; p.lang = "ar"; p.className = "explain-text ar"; }
    r.appendChild(h);
    var line = E("div", "explain-line");
    line.appendChild(p);
    if (S()) line.appendChild(S().button(strip(text), lang || "en", "Read aloud"));
    r.appendChild(line);
    return r;
  }

  function open(spec, page, btn) {
    ensure();
    opener = btn || null;
    var x = generate(spec, page);
    titleEl.textContent = (spec.sectionTitle || "This exercise") +
      (spec.letter ? " · " + spec.letter : "");
    bodyEl.innerHTML = "";
    [["What this asks", x.what], ["How to do it", x.how],
     ["Why it matters", x.why], ["What is on this page", x.page]].forEach(function (p) {
      var r = row(p[0], p[1]);
      if (r) bodyEl.appendChild(r);
    });
    if (x.terms.length) {
      var h = E("p", "explain-label", "Key words");
      bodyEl.appendChild(h);
      var list = E("div", "explain-terms");
      x.terms.forEach(function (t) {
        var card = E("div", "term-card" + (t.reviewed === false ? " unreviewed" : ""));
        var en = E("div", "term-en");
        en.appendChild(E("b", null, t.en));
        if (S()) en.appendChild(S().button(t.en, "en", "Pronounce in English"));
        card.appendChild(en);
        if (t.gloss) card.appendChild(E("p", "term-gloss", t.gloss));
        if (t.ar) {
          var ar = E("div", "term-ar");
          var a = E("span", "ar", t.ar);
          a.dir = "rtl"; a.lang = "ar";
          ar.appendChild(a);
          if (S()) ar.appendChild(S().button(t.ar, "ar", "Pronounce in Arabic"));
          card.appendChild(ar);
        }
        list.appendChild(card);
      });
      bodyEl.appendChild(list);
    }
    var foot = E("p", "explain-foot");
    foot.textContent = x.generated
      ? "This explanation is generated from the exercise itself."
      : "";
    if (foot.textContent) bodyEl.appendChild(foot);
    sheet.showModal();
  }

  /* The concepts a scene is about. Declared in the data where the author
     knows better; inferred from the kind otherwise, so every scene carries
     at least one and F50's "one concept, one icon, twelve units" holds
     without anybody having to remember. */
  var KIND_CONCEPTS = {
    letterbox: ["word"], order: ["word"], orderset: ["word"], cloze: ["grammar"],
    errorfix: ["error", "correct"], wordbank: ["word"], build: ["word"],
    read: ["read", "evidence"], "read-only": ["read"], tfni: ["read", "evidence"],
    selectintext: ["read", "evidence"], paraphrase: ["read", "claim"],
    chartread: ["measurement", "read"], annotate: ["read", "claim"],
    listen: ["listen"], talk: ["listen", "recall"], respond: ["listen", "speak"],
    notes: ["listen", "write"], dictation: ["listen", "word"],
    "minimal-pairs": ["sound"], repeat: ["speak", "sound"], interview: ["speak", "time"],
    phrases: ["speak", "sound"],
    discussion: ["write", "people"], "write-email": ["write", "people"],
    paragraph: ["write", "claim"], "register-dial": ["write", "comparison"],
    match: ["word", "place"], sort: ["comparison"], oddone: ["comparison", "word"],
    sequence: ["sequence"], table: ["measurement", "comparison"],
    quiz: ["recall", "spacing"], cards: ["cards", "recall"],
    compare: ["comparison"], recap: ["recall", "claim"], choice: ["question"]
  };

  function concepts(spec) {
    if (spec.concepts && spec.concepts.length) return spec.concepts;
    return KIND_CONCEPTS[spec.kind] || ["question"];
  }

  root.Explain = {
    open: open, sayable: sayable, generate: generate, concepts: concepts,
    KIND_CONCEPTS: KIND_CONCEPTS,
    KINDS: KIND, SAY: SAY,
    kindsCovered: function () { return Object.keys(SAY); }
  };
})(window, document);
