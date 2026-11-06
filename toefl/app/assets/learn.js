/* learn.js — the cross-cutting learning layer (F35, F37, F40, F42-F45, F51, F52).

   These are not features of any one exercise. They are the things this book
   does around every exercise: offer help that is graded rather than given,
   ask for a prediction before the mark, ask for an explanation after a miss,
   keep what went wrong, and show the learner how well they know themselves.

   Classes prefixed ln-. State lives in localStorage under toefl.learn.*, in
   try/catch throughout: a private window where storage throws must degrade
   to a book that still works, not a book that stops. */
(function (root, doc) {
  "use strict";
  var E = function (t, c, h) {
    var e = doc.createElement(t);
    if (c) e.className = c;
    if (h != null) e.innerHTML = h;
    return e;
  };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var M = function () { return root.Motion; };

  /* --------------------------------------------------------- storage --- */
  var NS = "toefl.learn.";
  function get(k, dflt) {
    try {
      var v = root.localStorage.getItem(NS + k);
      return v == null ? dflt : JSON.parse(v);
    } catch (e) { return dflt; }
  }
  function set(k, v) {
    try { root.localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) {}
  }

  /* ======================================= F35 — hints, three levels ==== */
  /* A hint that gives the answer saves the learner the work that was the
     point. These go: look here, narrow it, here is the method. The third
     is the one worth having, and it is the method for the task type, which
     is what transfers to the test.

     Gated behind an attempt, because help taken before trying is help that
     replaces the trying. */
  var HINTS = {
    letterbox: ["Say the word aloud. The letters you have usually fix the sound.",
                "Count the empty boxes — that is exactly how many letters are missing.",
                "Work from the part you know outward, not left to right. The ending often decides the word class."],
    order:     ["Find the verb first. Everything else arranges itself around it.",
                "Who or what is doing the verb? That is your opening.",
                "Subject, verb, then object; time and place go last, and 'when' usually beats 'where' to the end."],
    orderset:  ["Find the verb first. Everything else arranges itself around it.",
                "Some words are spare. If a word has no job, it is not in this sentence.",
                "Subject, verb, object, then the extras. A word you cannot name a job for is the spare one."],
    choice:    ["Read the question again before the options. Answer it in your head first.",
                "Two options are usually close. Find what makes them different.",
                "Reject on evidence, not on feel: each wrong option gets something specific wrong."],
    read:      ["The answer is in the passage, not in what you know about the topic.",
                "Find the part of the text the question is about before you look at the options.",
                "Match the idea, not the words. An option that repeats the passage's words is often the trap."],
    tfni:      ["True and False both need a line. If you cannot find one, consider NI.",
                "NI means the passage does not say — not that it seems unlikely.",
                "Check the exact claim: a statement that says more than the line does is False, not True."],
    listen:    ["Listen for the answer to the question, not for every word.",
                "The answer is usually in what the second speaker says, not the first.",
                "Note the numbers, names and the order things happen in. Those are what the questions ask about."],
    talk:      ["Note the structure as it goes: what, why, and what follows.",
                "Signposts tell you what is coming: 'first', 'but', 'the reason is'.",
                "A talk answers a question. Work out the question and the structure follows."],
    respond:   ["Say the reply aloud before choosing. The wrong ones usually sound wrong.",
                "Was it a question or a statement? That decides what a reply can be.",
                "Match the function, not the topic: an offer takes an acceptance, a question takes information."],
    repeat:    ["Listen for the rhythm before the words.",
                "Where does the voice go up, and where down?",
                "Copy the stressed words first; the small ones compress by themselves."],
    interview: ["Answer the question directly in your first sentence.",
                "One reason and one example beat three reasons and none.",
                "Opening, reason, example, why it matters. Finish the sentence you are in."],
    cloze:     ["Read the whole sentence before choosing. The clue is often after the gap.",
                "Which option fits the time, and which fits the meaning?",
                "Name the form the slot needs before you choose: tense, number, word class."],
    match:     ["Start with the ones you are sure of; that narrows the rest.",
                "Match what the word means, not what it sounds like.",
                "Work by elimination once two are placed — the remaining pairs decide each other."],
    sort:      ["Read the bin labels again before moving anything.",
                "Place the obvious ones first and look at what is left.",
                "If an item could go in two bins, you have the wrong reading of one label."],
    wordbank:  ["Read past the gap to the end of the sentence first.",
                "What word class does the gap need?",
                "Some words in the bank belong to no sentence. Decide by the grammar, not the topic."],
    sequence:  ["Find the step that must come first — the one nothing else enables.",
                "What does each step need to have happened already?",
                "Order by dependency, not by how the sentences sound."],
    errorfix:  ["Read it aloud. Most of these errors are audible.",
                "One word only. If two look wrong, one is a consequence of the other.",
                "Name the rule being broken before you fix it, or you will fix the wrong word."],
    table:     ["Read the column headings before the rows.",
                "Each row answers one question. Which?",
                "Fill what you are sure of; the pattern across rows shows you the rest."],
    notes:     ["Notes keep the speaker's order. Work down, not around.",
                "What word class does each gap need?",
                "Listen for the word, not a paraphrase — notes take the words that were said."],
    dictation: ["Write what you hear, not what you expect.",
                "Leave the words you missed blank and come back.",
                "Small words carry grammar: articles, auxiliaries, plural endings. Those are what is scored."],
    paraphrase:["A paraphrase keeps the meaning and changes the words.",
                "An option that repeats the original's words usually changes its meaning.",
                "Check what each option leaves out. Leaving out a condition changes the claim."],
    oddone:    ["Say what the others have in common first.",
                "If two could be the odd one, your rule is not the right rule.",
                "Name the category, then test each word against it."],
    quiz:      ["Answer from the lesson it came from, not from general knowledge.",
                "Rule out what you know is wrong before choosing.",
                "If you cannot recall it, that is the item to come back to — not one to guess."],
    chartread: ["Read the axis labels and the key before the shape.",
                "What is the unit, and what is being compared?",
                "Say what the chart shows in one sentence before you answer anything."],
    discussion:["Answer the question, then answer a classmate by name.",
                "Agreeing is not a contribution unless you add a reason.",
                "Make a claim, give a reason, concede a point, then answer it."],
    cards:     ["Try to recall it before you turn it. The trying is the exercise.",
                "Where have you seen it used? The sentence is easier to recall than the word.",
                "Recall, check, and mark honestly. A card you nearly knew is a card you did not know."],
    build:     ["What does the prefix do — reverse, negate, repeat, or relate?",
                "Say the finished word aloud; the wrong affix usually sounds wrong.",
                "The affix carries the change in meaning and the root carries the subject."],
    compare:   ["Look for what changed, not for what is there.",
                "Compare line by line in the same order.",
                "A change in a number, a time or a place is a change in meaning."],
    phrases:   ["Hear it, then say it before you rate it.",
                "When would you actually use this? That is what makes it stick.",
                "Rate what you could say unprompted, not what you recognise."],
    recap:     ["Apply the idea to the new case, do not restate it.",
                "Which case does this takeaway change your answer about?",
                "If a takeaway fits every case, it is too vague to be the one."],
    annotate:  ["Ask what each sentence is doing, not what it says.",
                "A sentence that gives a reason usually has 'because' in it or implies it.",
                "Name the job before you choose it from the list."],
    selectintext: ["The answer is one sentence, exactly as written.",
                "Which sentence would you quote if someone asked you to prove it?",
                "Pick the sentence that states the claim, not one that illustrates it."],
    "minimal-pairs": ["Listen for where the sound is made, not how loud it is.",
                "Say both words yourself and feel the difference.",
                "The contrast is one feature. Name it, then listen for just that."],
    "write-email": ["Say why you are writing in the first sentence.",
                "One request, stated plainly, beats three hinted at.",
                "Purpose, context, request, close. The reader decides in the first line."],
    "register-dial": ["Who is reading it, and what can they do for you?",
                "Formality is in the verbs and the hedges, not only the greeting.",
                "Match the reader's distance: the further, the more indirect the request."],
    paragraph: ["Decide what the paragraph is for before you write a word of it.",
                "One idea per paragraph: if you have two, you have two paragraphs.",
                "Claim, support, and a sentence that says why it matters. That is the shape."],
    "read-only": ["Read it once for the shape, then once for the detail.",
                "What is this telling you that you will need later?",
                "Summarise it in one sentence from memory before moving on."]
  };
  var GENERIC = ["Read the task again before you answer it.",
                 "Deal with what you are sure of first, then look at what is left.",
                 "Name what the task is testing. The method follows from that."];

  function hintsFor(spec) {
    var h = (spec && spec.hints) || HINTS[spec && spec.kind] || GENERIC;
    return h.slice(0, 3);
  }

  function hintBar(host, spec, api) {
    var list = hintsFor(spec);
    if (!list.length) return null;
    var wrap = E("div", "ln-hints");
    var label = E("span", "ln-hints-label", "Stuck?");
    wrap.appendChild(label);
    var shown = 0;
    var out = E("div", "ln-hint-out");
    var btn = E("button", "ln-hint-btn", "Give me a hint");
    btn.type = "button";
    btn.title = "Three hints, each one more specific. None of them is the answer.";

    function note() {
      btn.disabled = shown >= list.length;
      btn.textContent = shown === 0 ? "Give me a hint"
                      : shown >= list.length ? "No more hints — the method is above"
                      : "Still stuck (" + (list.length - shown) + " left)";
    }
    btn.addEventListener("click", function () {
      if (shown >= list.length) return;
      var p = E("p", "ln-hint");
      p.appendChild(E("span", "ln-hint-n", String(shown + 1)));
      p.appendChild(E("span", null, list[shown]));
      out.appendChild(p);
      if (M()) M().reveal(p);
      shown++;
      note();
      bump("hints", 1);
    });
    note();
    wrap.appendChild(btn);
    wrap.appendChild(out);
    host.appendChild(wrap);
    return wrap;
  }


  /* ================== F40/F43 — a worked first item, which then fades === */
  /* "Show me one" does the first item with the reasoning attached, then
     leaves the rest to the learner. A worked example helps a beginner and
     gets in the way of someone who no longer needs it, so support that does
     not fade becomes a crutch: full in Lesson 1, offered but closed by
     Lesson 3, gone by Lesson 5. */
  function firstItem(spec) {
    /* Every kind names its items and its answer differently. Rather than a
       branch per kind, which would need editing each time a kind is added,
       this reads whichever list and whichever answer field is present. A
       kind it cannot read gets no worked example, which is the honest
       outcome: better none than a wrong one. */
    var it = (spec.items || spec.gaps || spec.cards || spec.sentences ||
              spec.pairs || spec.steps || spec.lines || spec.phrases || [])[0];
    if (!it) return null;
    var answer = it.answer != null ? it.answer
               : it.right != null ? it.right
               : it.target != null ? it.target
               : it.job != null ? it.job
               : it.bin != null ? it.bin          /* sort */
               : it.pin != null ? it.word         /* match: the word goes on the pin */
               : it.pos != null ? String(it.pos)  /* sequence: its place in the order */
               : it.meaning != null ? it.meaning
               : null;
    if (answer == null && Array.isArray(it.options || it.opts)) {
      var right = (it.options || it.opts).filter(function (o) { return o && o.correct; })[0];
      if (right) answer = right.text != null ? right.text : right;
    }

    var asked = it.q || it.stem || it.prompt || it.cue || it.group || it.say ||
                it.text || it.term || (it.pin ? "Which thing in the picture is this?" : "") || "";
    /* A match pair's answer is a place in a picture, which cannot be
       written out. Its teaching is entirely in the rationale, so the
       worked example shows that and no answer line at all. */
    if (it.pin != null) { asked = String(it.word); answer = null; }
    if (it.bin != null) { asked = String(it.text); }
    if (it.pos != null) { asked = String(it.text); answer = "step " + it.pos; }
    var why = it.why || (Array.isArray(it.options || it.opts)
      ? ((it.options || it.opts).filter(function (o) { return o && o.correct; })[0] || {}).why
      : "");
    if (answer == null && !why) return null;
    return { asked: String(asked), answer: answer == null ? null : String(answer),
             why: why || "" };
  }

  /* lesson number decides how much support is left */
  function fadeLevel(page) {
    var b = String((page && page.block) || "");
    var m = /^l(\d)$/.exec(b);
    if (!m) return "open";                       /* review and OC pages: as asked */
    var n = Number(m[1]);
    return n <= 2 ? "open" : n <= 4 ? "closed" : "gone";
  }

  /* Kinds where working the first item would destroy the exercise.

     A retrieval deck is shuffled, so the worked card is still in the pile:
     showing its meaning first turns a card the learner was about to recall
     into one they have just been told. Unit 1 spends a lesson arguing that
     recognition is not recall; the book must not contradict that in its own
     interface, which is the whole of F41.

     Shadowing has nothing to work: the task is to say the line, and the
     line is already printed. */
  var NO_WORKED = { cards: 1, repeat: 1, phrases: 1 };

  function workedExample(host, spec, page, api) {
    var level = fadeLevel(page);
    if (level === "gone") return null;
    if (NO_WORKED[spec.kind]) return null;
    var one = firstItem(spec);
    if (!one) return null;

    var wrap = E("div", "ln-worked");
    var btn = E("button", "ln-worked-btn", "Show me the first one");
    btn.type = "button";
    var body = E("div", "ln-worked-body");
    body.hidden = true;

    body.appendChild(E("p", "ln-worked-tag", "Worked example \u2014 item 1"));
    if (one.asked) body.appendChild(E("p", "ln-worked-q", esc(one.asked.slice(0, 220))));
    if (one.answer != null) {
      var ans = E("p", "ln-worked-a");
      ans.appendChild(E("span", "ln-worked-label", "Answer"));
      ans.appendChild(E("b", null, esc(one.answer)));
      body.appendChild(ans);
    }
    if (one.why) {
      var w = E("p", "ln-worked-why");
      w.innerHTML = "<span class='ln-worked-label'>Because</span> " + one.why;
      body.appendChild(w);
    }
    body.appendChild(E("p", "ln-worked-foot",
      "Now do the rest. This one is not counted for you \u2014 answer it yourself as well."));

    btn.addEventListener("click", function () {
      body.hidden = !body.hidden;
      btn.textContent = body.hidden ? "Show me the first one" : "Hide the worked example";
      if (!body.hidden && M()) M().reveal(body);
    });

    wrap.appendChild(btn);
    wrap.appendChild(body);
    /* Lessons 1-2 open it without being asked; later lessons make you ask. */
    if (level === "open") {
      body.hidden = false;
      btn.textContent = "Hide the worked example";
    }
    host.appendChild(wrap);
    return wrap;
  }

  /* ===================================== F42/F52 — predict, then check == */
  /* Unit 1's own article is about students mispredicting how much they
     know. The book should measure the thing it teaches, so before the mark
     it asks for one, and shows the two side by side. Optional, always:
     making it compulsory would turn a calibration into a toll gate. */
  function predictBar(host, total, api, page, spec) {
    if (!(total > 1)) return null;
    var wrap = E("div", "ln-predict");
    wrap.appendChild(E("span", "ln-predict-q",
      "Before you check — how many of these " + total + " will you get right?"));
    var row = E("div", "ln-predict-row");
    var picked = null, btns = [];
    for (var i = 0; i <= total; i++) (function (n) {
      var b = E("button", "ln-predict-n", String(n));
      b.type = "button";
      b.setAttribute("aria-label", "I will get " + n + " of " + total + " right");
      b.addEventListener("click", function () {
        picked = n;
        btns.forEach(function (x) { x.classList.toggle("on", x === b); });
      });
      btns.push(b);
      row.appendChild(b);
    })(i);
    wrap.appendChild(row);
    var skip = E("span", "ln-predict-skip", "Optional — it is here because guessing badly is the thing worth knowing.");
    wrap.appendChild(skip);
    var result = E("p", "ln-predict-res");
    result.hidden = true;
    wrap.appendChild(result);
    host.appendChild(wrap);

    api.onChecked(function (res) {
      if (picked == null) return;
      var got = res.score != null ? res.score : (res.ok ? total : 0);
      var gap = got - picked;
      result.hidden = false;
      result.className = "ln-predict-res " +
        (Math.abs(gap) <= 1 ? "ln-good" : gap < 0 ? "ln-over" : "ln-under");
      result.textContent = "You said " + picked + ". You got " + got + ". " +
        (Math.abs(gap) <= 1 ? "Well judged."
         : gap < 0 ? "You were more confident than the work supported — the gap Unit 1 is about."
                   : "You knew more than you thought. Trust the work next time.");
      row.querySelectorAll(".ln-predict-n").forEach(function (b, n) {
        b.classList.toggle("ln-actual", n === got);
      });
      logPrediction(page, spec, picked, got, total);
    });
    return wrap;
  }

  function logPrediction(page, spec, said, got, total) {
    var unit = (page && page.unit) || "u00";
    var all = get("calib." + unit, []);
    all.push({ p: (page && page.id) || "", s: (spec && spec.id) || "",
               said: said, got: got, total: total, at: Date.now() });
    set("calib." + unit, all.slice(-400));
  }

  function calibration(unit) {
    var all = get("calib." + unit, []);
    if (!all.length) return null;
    var over = 0, under = 0, close = 0, n = all.length;
    all.forEach(function (r) {
      var g = r.got - r.said;
      if (Math.abs(g) <= 1) close++; else if (g < 0) over++; else under++;
    });
    return { n: n, close: close, over: over, under: under, rows: all };
  }

  /* ============================ F44 — self-explanation after a miss ===== */
  /* Reading my rationale is not what consolidates it; producing one is.
     Ungraded and optional, kept, and surfaced again in review. */
  function selfExplain(host, page, spec) {
    var key = "why." + ((page && page.id) || "p") + "." + ((spec && spec.id) || "s");
    var wrap = E("div", "ln-why");
    wrap.appendChild(E("label", "ln-why-q",
      "In your own words — why is the right answer right?"));
    var ta = doc.createElement("textarea");
    ta.className = "ln-why-box";
    ta.rows = 2;
    ta.placeholder = "One line is enough. Not marked; it comes back in review.";
    ta.setAttribute("aria-label", "Why is the right answer right");
    ta.value = get(key, "");
    ta.addEventListener("input", function () { set(key, ta.value); });
    wrap.appendChild(ta);
    host.appendChild(wrap);
    return wrap;
  }

  /* ================== F45 — ask before you tell, on the distractors ===== */
  function askWhyFirst(host, onReveal) {
    var wrap = E("div", "ln-askwhy");
    wrap.appendChild(E("p", "ln-askwhy-q",
      "Before you read why those were wrong — what do you think was wrong with the one you picked?"));
    var ta = doc.createElement("textarea");
    ta.className = "ln-why-box";
    ta.rows = 2;
    ta.setAttribute("aria-label", "Why do you think your answer was wrong");
    wrap.appendChild(ta);
    var b = E("button", "ln-askwhy-go", "Now show me");
    b.type = "button";
    b.addEventListener("click", function () {
      wrap.classList.add("ln-answered");
      b.remove();
      if (onReveal) onReveal(ta.value);
    });
    wrap.appendChild(b);
    host.appendChild(wrap);
    return wrap;
  }

  /* ================================= F37/F51 — the mistake log ========== */
  /* Not a list of topics. The item itself, because a learner who got
     fewer/less wrong needs that sentence again, not a lesson on
     countability. */
  function logMiss(page, spec, items) {
    if (!items || !items.length) return;
    var unit = (page && page.unit) || "u00";
    var log = get("miss." + unit, []);
    items.forEach(function (it) {
      log.push({ p: (page && page.id) || "", s: (spec && spec.id) || "",
                 k: spec && spec.kind, text: String(it).slice(0, 320), at: Date.now() });
    });
    set("miss." + unit, log.slice(-300));
  }
  function misses(unit) { return get("miss." + unit, []); }
  function clearMisses(unit) { set("miss." + unit, []); }

  function bump(what, n) {
    var k = "count." + what;
    set(k, (get(k, 0) || 0) + (n || 1));
  }

  root.Learn = {
    hintBar: hintBar, hintsFor: hintsFor, HINTS: HINTS,
    predictBar: predictBar, calibration: calibration,
    workedExample: workedExample, firstItem: firstItem, fadeLevel: fadeLevel,
    selfExplain: selfExplain, askWhyFirst: askWhyFirst,
    logMiss: logMiss, misses: misses, clearMisses: clearMisses,
    get: get, set: set
  };
})(window, document);
