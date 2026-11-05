/* provenance.js — the lock.
 *
 * Every string the site shows is classified by role:
 *   CONTENT — anything the learner is taught: facts, rules, definitions, numbers,
 *             account names, rationales, question stems and options. Every word of
 *             it must appear in the author's chapter.
 *   CHROME  — pure interface. It may use ordinary English, but it must carry no
 *             accounting claim: no figure the author did not write, and no term
 *             outside the author's vocabulary and the interface whitelist.
 *
 * A CONTENT word the author never wrote is a provenance failure, and the gate fails.
 */
(function (root) {
  "use strict";
  var SRC = root.SOURCE_TEXT || "";

  function words(s) {
    return String(s)
      .replace(/<[^>]*>/g, " ")
      .replace(/&[a-z]+;/gi, " ")
      .toLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/[^a-z0-9'؀-ۿ.]+/g, " ")
      .split(/\s+/)
      .map(function (w) { return w.replace(/^[.']+|[.']+$/g, ""); })
      .filter(Boolean);
  }

  var VOCAB = {};
  words(SRC).forEach(function (w) { VOCAB[w] = 1; });
  (SRC.match(/\d[\d,]*/g) || []).forEach(function (n) { VOCAB[n.replace(/,/g, "")] = 1; });

  function addNumbers(L) {
    function push(v) {
      if (typeof v === "number" && isFinite(v)) {
        VOCAB[String(Math.round(Math.abs(v)))] = 1;
        VOCAB[String(Math.abs(v))] = 1;
      }
    }
    /* Each chapter brings its own ledger and they are not the same shape: Chapter 1 has a trial
       balance and two months of transactions, Chapter 2 a list of accounts. Read whatever is
       there rather than assuming one chapter's fields, so a missing field widens the vocabulary
       by nothing instead of throwing and leaving the lock unbuilt. */
    [L.is, L.sce, L.bs, L.ratios, L.jan, L.feb, L.decemberSale, L.printed, L["case"]]
      .forEach(function (o) { Object.keys(o || {}).forEach(function (k) { push(o[k]); }); });
    (L.trialBalance || []).forEach(function (r) { push(r.dr); push(r.cr); });
    (L.accounts || []).forEach(function (r) { push(r.amount); });
    ((L["case"] || {}).rows || []).forEach(function (r) { push(r.amount); });
    (L.january || []).concat(L.february || []).forEach(function (t) {
      t.entry.forEach(function (e) { push(e.amount); });
      Object.keys(t.eff).forEach(function (k) { push(t.eff[k]); });
    });
    push(L.totalDebits); push(L.totalCredits);
    var base = Object.keys(VOCAB).filter(function (x) { return /^\d+$/.test(x); }).map(Number);
    base.forEach(function (a) { base.forEach(function (b) { if (a > b) VOCAB[String(a - b)] = 1; }); });
  }
  if (root.LEDGER) addNumbers(root.LEDGER);

  function stems(w) {
    var o = {}; o[w] = 1;
    function add(x) { if (x.length > 2) o[x] = 1; }
    if (/ies$/.test(w)) add(w.slice(0, -3) + "y");
    if (/es$/.test(w)) add(w.slice(0, -2));
    if (/s$/.test(w)) add(w.slice(0, -1));
    if (/ed$/.test(w)) { add(w.slice(0, -2)); add(w.slice(0, -1)); }
    if (/ing$/.test(w)) { add(w.slice(0, -3)); add(w.slice(0, -3) + "e"); }
    if (/ly$/.test(w)) add(w.slice(0, -2));
    if (/'s$/.test(w)) add(w.slice(0, -2));
    add(w + "s"); add(w + "es"); add(w + "d"); add(w + "ed"); add(w + "ing");
    if (/y$/.test(w)) add(w.slice(0, -1) + "ies");
    if (/e$/.test(w)) { add(w.slice(0, -1) + "ing"); add(w + "d"); }
    return Object.keys(o);
  }
  function known(w) {
    var st = stems(w);
    for (var i = 0; i < st.length; i++) if (VOCAB[st[i]]) return true;
    return false;
  }

  /* Ordinary English for operating the interface. Nothing here is an accounting
     claim, and nothing may be added here that is. */
  var CHROME = {};
  ("drag drop drops dropped onto into here click clicks clicking tap taps tapping " +
   "scene scenes screen next back finish check answers try again open opens opened " +
   "slider slide move moves moving put puts place places placed sort sorts sorted " +
   "board shelf shelves tray chip chips zone card cards pipe pipes valve tank beam " +
   "podium step steps grid cell cells tab tabs fill fills filled watch see read " +
   "find choose chosen pick picks select selects selected type typing enter entered " +
   "button buttons keyboard press pressed arrow left right up down toggle switch " +
   "flip flips reshuffles reshuffled reveal reveals shown show shows hide hidden " +
   "highlight highlights your you yours yourself it its one two three four five six " +
   "seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen twenty " +
   "first second last each every all both none nothing something anything " +
   "and or but not if then than that this these those there here where when what " +
   "which who whom whose why how so as at by for from in into of off on to with " +
   "without a an the is are was were be been being has have had do does did " +
   "can could will would should may might must " +
   "itself themselves them they he she we us our ours my mine " +
   "now again still already yet once twice only just even also too very much many " +
   "more most less least few several some any other others another same different " +
   "wrong right correct incorrect answer answers explanation explanations " +
   "because since while before after until during about above below over under " +
   "between among through across along around against toward towards " +
   "deck decks page pages section sections chapter figure figures box boxes " +
   "learner reader exam book site progress saved browser computer offline " +
   "pronounce pronunciation speak speaker voice voices icon icons " +
   "memory remember recall practise practice drill drills interleaved mixed review " +
   "reference list lists table tables column columns row rows line lines " +
   "complete completed completes finish finished done ready start starts started " +
   "hard harder hardest easy easier simple simply quick short long " +
   "look looks looking think thinks reading says said say tell tells told " +
   "make makes made take takes taken give gives given get gets got " +
   "let lets leave leaves left keep keeps kept hold holds held " +
   "work works working build builds built create creates created " +
   "change changes changed turn turns turned run runs running " +
   "need needs needed want wants wanted know knows knew " +
   "use uses used using useful own real actual whole full " +
   "nothing everything someone anyone nobody out up down away back forth per via " +
   "plus minus s t re ve ll d m " +
   "shape marked sending connection came catch catching actually waiting comparison " +
   "alike drawn fallen pairs direction load bearing can't locks blank " +
   "somewhere random paragraph exhibit destination therefore top fit life whatever " +
   "labels happens logged " +
   /* Added for Chapter 2. Each of these is a word for operating or describing the interface, and
      not one of them can state an accounting fact on its own - which is the only test this list
      applies. Words that DID carry a claim were reworded instead of added: the tray labels "GAAP
      and IFRS differ"/"agree" became "A different answer under IFRS"/"The same answer under both",
      and "the author's three warnings" became "three sentences from the chapter". */
   "author author's name names sentence sentences assume assumed reach reaches " +
   "arrive arrives careful decimal missed confusion idea ideas foot number numbers " +
   "else true separately " +
   /* Added for Chapters 3-5. Same test: a word for operating or describing the interface
      that cannot state an accounting fact on its own. Words that DID carry a claim were
      reworded instead: "the statement the chapter prints" became the author's own
      sentence naming Figure F03-02, "where GAAP and IFRS treat the same item
      differently" became "The same item, two frameworks", and "what the income
      statement hands on" became "what it passes to the other statements". */
   /* "arabic" is the NAME OF A LANGUAGE, used only to label which side of the term drill
      the learner is reading. The chapters print the heading as العربية, so the English
      word is in no chapter's vocabulary, and the term deck's own chrome failed on it from
      Chapter 4 on. A language name cannot state an accounting fact. */
   "arabic english french trays go goes going gone " +
   /* Added for chapters 6 to 18. Every one is a word for OPERATING the page - setting a
      control, matching two things, filling a row - and not one of them can state an
      accounting fact on its own, which is the only test this list applies. The
      alternative was to contort thirteen chapters' instructions around whichever
      ordinary verbs those chapters happen to contain, which is how "The chapter files
      this under X" became "puts" became a guess. */
   "set sets setting match matches matched matching beside slip slips carries carried " +
   "belong belongs pairing year years rule rules above below starts " +
   /* The last of them. Each is a word for the EXERCISE - which topic a row is about,
      the extra chip, the line a figure closes on, the record of your own errors, the
      fact that a tie holds - and none can state an accounting fact alone. "row's" is
      here because the tokenizer keeps the apostrophe and "row" alone is already here. */
   "topic topics extra closes close closed record records holds hold row's " +
   /* "carry" only, never "carrying": a carrying amount is an accounting fact and this
      list may hold no word that can state one. The failing text was the summary page's
      "Five words carry the whole chapter." */
   "carry " +
   "recognition harder cards card drill drilled recall both ways way phrase phrases " +
   "missing put back framework frameworks passes column columns rung rungs " +
   "subtotal subtotals ladder step steps enter entered entering").split(/\s+/)
    .forEach(function (w) { CHROME[w] = 1; });

  function checkContent(text) {
    if (!text) return [];
    var bad = [];
    words(text).forEach(function (w) { if (!known(w) && bad.indexOf(w) < 0) bad.push(w); });
    return bad;
  }
  function checkChrome(text) {
    if (!text) return [];
    var bad = [];
    words(text).forEach(function (w) {
      if (!CHROME[w] && !known(w) && bad.indexOf(w) < 0) bad.push(w);
    });
    return bad;
  }

  /* Walk one deck, returning every failure. The role of each field is fixed here. */
  function audit(decks) {
    var out = [];
    function C(d, s, w, t) { var b = checkContent(t); if (b.length) out.push({ deck: d, scene: s, where: w, bad: b, text: String(t).slice(0, 90) }); }
    function H(d, s, w, t) { var b = checkChrome(t); if (b.length) out.push({ deck: d, scene: s, where: w, bad: b, text: String(t).slice(0, 90), chrome: true }); }
    decks.forEach(function (d) {
      /* THE BRIEF IS THE ONE PLACE THAT LECTURES, so it is the one place where a wrong
         sentence would be believed without being tested. Its summary is CONTENT: every
         word of it must appear in the author's chapter. The animation NAME is a key into
         assets/brief.js, not prose, so it is not audited as text - what keeps a drawing
         honest is the rule that it may only move what the author's figure already shows,
         and gates/cma_render checking that the name resolves to a real drawing. */
      if (d.brief && d.brief.about) C(d.id, "brief", "brief.about", d.brief.about);
      if (d.brief && d.brief.animNote) C(d.id, "brief", "brief.animNote", d.brief.animNote);
      (d.scenes || []).forEach(function (s) {
        H(d.id, s.id, "title", s.title); H(d.id, s.id, "say", s.say); H(d.id, s.id, "kicker", s.kicker);
        (s.targets || []).forEach(function (t) {
          H(d.id, s.id, "target", t.label); H(d.id, s.id, "target.sub", t.sub);
          if (t.reveal) { C(d.id, s.id, "reveal", t.reveal.name); C(d.id, s.id, "reveal.kind", t.reveal.kind); }
        });
        (s.groups || []).forEach(function (g) { H(d.id, s.id, "group", g.label); H(d.id, s.id, "group.sub", g.sub); });
        (s.items || []).forEach(function (i) { C(d.id, s.id, "item", i.name); C(d.id, s.id, "item.why", i.why); });
        (s.distractors || []).forEach(function (i) { C(d.id, s.id, "distractor", i.name || i.id); C(d.id, s.id, "distractor.why", i.why); });
        (s.options || []).forEach(function (o) { C(d.id, s.id, "option", o.text); C(d.id, s.id, "option.why", o.why); });
        /* The scenario a question is set in. It is the author's own words and the learner reads it
           to answer, so it is CONTENT - and it was not audited at all until Chapter 2 started
           putting the long exam stems here instead of in the say. */
        if (s.exhibit) C(d.id, s.id, "exhibit", s.exhibit);
        (s.fields || []).forEach(function (f) {
          C(d.id, s.id, "field", f.label); C(d.id, s.id, "field.why", f.why);
          (f.diag || []).forEach(function (x) { C(d.id, s.id, "diagnostic", x.says); });
        });
        (s.ties || []).forEach(function (t) { C(d.id, s.id, "tie", t.label); C(d.id, s.id, "tie.why", t.why); });
        (s.probes || []).forEach(function (p) { C(d.id, s.id, "probe", p.q); C(d.id, s.id, "probe.a", p.a); });
        (s.chips || []).forEach(function (c) { C(d.id, s.id, "chip", c.id); });
        ((s.sheet || {}).lines || []).forEach(function (l) { C(d.id, s.id, "line", l.label); C(d.id, s.id, "line.why", l.why); });
        if (s.sheet) { C(d.id, s.id, "sheet.company", s.sheet.company); C(d.id, s.id, "sheet.name", s.sheet.name); C(d.id, s.id, "sheet.when", s.sheet.when); }
        if (s.sealText) C(d.id, s.id, "sealText", s.sealText);
        Object.keys(s.logic || {}).forEach(function (k) { C(d.id, s.id, "logic", s.logic[k]); });
        Object.keys(s.lures || {}).forEach(function (k) {
          s.lures[k].forEach(function (x) { C(d.id, s.id, "lure", x.name); C(d.id, s.id, "lure.why", x.why); });
        });
        (s.moves || []).forEach(function (x) { C(d.id, s.id, "move", x.label); C(d.id, s.id, "move.why", x.why); });
        (s.pipes || []).forEach(function (x) { C(d.id, s.id, "pipe", x.label); C(d.id, s.id, "pipe.why", x.why); });
        (s.stops || []).forEach(function (x) {
          C(d.id, s.id, "stop", x.when); C(d.id, s.id, "stop.note", x.note);
          C(d.id, s.id, "stop.a", (x.accrual || {}).text); C(d.id, s.id, "stop.c", (x.cash || {}).text);
        });
        (s.links || []).forEach(function (x) { C(d.id, s.id, "link.why", x.why); });
        (s.cards || []).forEach(function (c) {
          C(d.id, s.id, "card", c.title); C(d.id, s.id, "card.sub", c.sub);
          (c.ports || []).forEach(function (p) { C(d.id, s.id, "port", p.label); });
        });
        (s.stems || []).forEach(function (x) { C(d.id, s.id, "stem", x.text); C(d.id, s.id, "stem.cue", x.cue); C(d.id, s.id, "stem.effect", x.effect); });
        (s.effects || []).forEach(function (x) { C(d.id, s.id, "effect", x); });
        (s.seats || []).forEach(function (x) {
          C(d.id, s.id, "seat", x.user); C(d.id, s.id, "seat.decision", x.decision);
          C(d.id, s.id, "seat.q", x.q); C(d.id, s.id, "seat.stmts", x.stmts);
        });
        (s.volumes || []).forEach(function (x) { C(d.id, s.id, "volume", x.topic); C(d.id, s.id, "volume.why", x.why); });
        (s.gauges || []).forEach(function (x) { C(d.id, s.id, "gauge", x.key); C(d.id, s.id, "gauge.note", x.note); });
        (s.bars || []).forEach(function (x) { C(d.id, s.id, "bar", x.label); });
        (s.answers || []).forEach(function (x) { C(d.id, s.id, "cloze", x.word); C(d.id, s.id, "cloze.why", x.why); });
        (s.extra || []).forEach(function (x) { C(d.id, s.id, "cloze.extra", x); });
        (s.parts || []).forEach(function (x) { C(d.id, s.id, "cloze.part", x); });
        /* "cycle" — the operating cycle built from its legs. The field is `legs` and not
           `parts` because `parts` above is the cloze's array of STRINGS: pointing this at
           objects made the lock stringify them and report "object" as taught content. */
        (s.legs || []).forEach(function (x) { C(d.id, s.id, "leg", x.label); C(d.id, s.id, "leg.why", x.why); });
        /* Chapters 3-5. A scene kind is a hole in this lock until its fields are listed
           here: it would teach the learner text that nothing checks. */
        (s.rows || []).forEach(function (x) {
          if (x && typeof x === "object" && !(x instanceof Array) && x.subtotal) {
            C(d.id, s.id, "waterfall.label", x.label);
            C(d.id, s.id, "waterfall.why", x.why);
          }
        });
        (s.cases || []).forEach(function (x) {
          C(d.id, s.id, "treasury.case", x.label); C(d.id, s.id, "treasury.why", x.why);
          C(d.id, s.id, "treasury.dest", x.dest);
        });
        (s.dests || []).forEach(function (x) { C(d.id, s.id, "treasury.dests", x); });
        (s.actions || []).forEach(function (x) {
          C(d.id, s.id, "shares.action", x.label); C(d.id, s.id, "shares.why", x.why);
          Object.keys(x.cells || {}).forEach(function (kk) {
            C(d.id, s.id, "shares.cell", x.cells[kk]);
          });
        });
        (s.columns || []).forEach(function (x) {
          H(d.id, s.id, "shares.column", x.label);
          (x.options || []).forEach(function (o) { C(d.id, s.id, "shares.option", o); });
        });
        (s.items || []).forEach(function (x) {
          if (x && typeof x === "object" && x.add !== undefined) {
            C(d.id, s.id, "signs.item", x.label); C(d.id, s.id, "signs.why", x.why);
          }
        });
        if (s.start && s.start.label) C(d.id, s.id, "signs.start", s.start.label);
        if (s.target && s.target.label) C(d.id, s.id, "signs.target", s.target.label);
        /* "ladder" - a likelihood, the treatment it forces, and the author's sentence. */
        (s.rungs || []).forEach(function (x) {
          C(d.id, s.id, "rung", x.likelihood); C(d.id, s.id, "rung.treatment", x.treatment);
          C(d.id, s.id, "rung.why", x.why);
        });
        if (s.ruleWhy) C(d.id, s.id, "ruleWhy", s.ruleWhy);
        /* A HOLE THAT PREDATES THE CYCLE SCENE. `shelf` carries three strings of its own -
           the question it asks, its opening note and the reason a wrong pick is wrong - and
           not one of them was audited, so the one scene in Chapter 1 that explains the
           Codification could have taught anything. `ask` is a prompt, so it is interface;
           `intro` and `missWhy` make statements about the chapter, so they are content. */
        if (s.ask) H(d.id, s.id, "ask", s.ask);
        if (s.intro) C(d.id, s.id, "intro", s.intro);
        if (s.missWhy) C(d.id, s.id, "missWhy", s.missWhy);
        (s.pairs || []).forEach(function (x) { C(d.id, s.id, "pair.us", x.us); C(d.id, s.id, "pair.ifrs", x.ifrs); });
        /* "lines" — a printed statement read two columns at a time. A scene kind whose fields are
           not listed here is a hole in the lock: it would render the learner taught text that
           nothing checks. The row names and the column headings are the author's statement, so
           they are CONTENT; the click prompt and the closing note are interface. */
        (s.rows || []).forEach(function (x) {
          if (x && typeof x === "object" && !(x instanceof Array)) {
            C(d.id, s.id, "line.name", x.name);
            /* a schedule and a rowpick name their rows `label` and give each one the
               author's reason; without these two lines a whole kind's taught text
               would be unchecked, which is the hole the "grid" comment warns about */
            C(d.id, s.id, "line.label", x.label);
            C(d.id, s.id, "line.why", x.why);
          }
        });
        if (s.caption) C(d.id, s.id, "caption", s.caption);
        if (s.col1) C(d.id, s.id, "col1", s.col1);
        if (s.col2) C(d.id, s.id, "col2", s.col2);
        /* "grid" — the wide form of "lines" (assets/grid.js). Its column HEADINGS are the
           author's own component names, so they are content, exactly as col1/col2 are. A
           kind added without a line here would teach text nothing checks.
           A `schedule` and a `rowpick` carry their columns as OBJECTS with a label, so
           both shapes are audited: a bare string, or {label}. */
        (s.cols || []).forEach(function (x) {
          if (x && typeof x === "object") C(d.id, s.id, "col.label", x.label);
          else C(d.id, s.id, "col", x);
        });
        /* "schedule" (assets/objects4.js): the rule is the author's sentence about how a
           row is worked out, and every row's name and reason is his. */
        if (s.rule) C(d.id, s.id, "rule", s.rule);
        (s.steps || []).forEach(function (x) { C(d.id, s.id, "step.label", x.label); });
        if (s.hint) H(d.id, s.id, "hint", s.hint);
        if (s.read) H(d.id, s.id, "read", s.read);
        if (s.label) H(d.id, s.id, "label", s.label);
        if (s.rightWhy) C(d.id, s.id, "rightWhy", s.rightWhy);
        if (s.wrongWhy) C(d.id, s.id, "wrongWhy", s.wrongWhy);
        if (s.asset) C(d.id, s.id, "asset", s.asset.label);
        if (s.contra) C(d.id, s.id, "contra", s.contra.label);
        if (s.netLabel) C(d.id, s.id, "netLabel", s.netLabel);
        if (s.a) C(d.id, s.id, "split.a", s.a.label);
        if (s.b) C(d.id, s.id, "split.b", s.b.label);
        if (s.intro) C(d.id, s.id, "intro", s.intro);
        if (s.ask) H(d.id, s.id, "ask", s.ask);
        if (s.missWhy) C(d.id, s.id, "missWhy", s.missWhy);
        if (s.titleUs) C(d.id, s.id, "titleUs", s.titleUs);
        if (s.titleIfrs) C(d.id, s.id, "titleIfrs", s.titleIfrs);
        (s.years || []).forEach(function (x) { C(d.id, s.id, "year", x); });
        (s.tags || []).forEach(function (x) { H(d.id, s.id, "tag", x.label); H(d.id, s.id, "tag.short", x.short); });
        Object.keys(s.why || {}).forEach(function (k) { C(d.id, s.id, "why", s.why[k]); });
      });
    });
    return out;
  }

  root.Provenance = {
    audit: audit, checkContent: checkContent, checkChrome: checkChrome,
    get vocabulary() { return Object.keys(VOCAB).length; },
    get sourceWords() { return words(SRC).length; }
  };
})(window);
