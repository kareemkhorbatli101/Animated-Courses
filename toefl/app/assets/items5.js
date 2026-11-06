/* items5.js — four shapes that close real gaps in the build.
   minimal-pairs  Which word did you hear?     (the book's pronunciation ladder, made audible)
   paraphrase     Which sentence says the same thing?   (ETS reading, sentence simplification)
   oddone         Which one does not belong?   (the book's vocabulary sorting drill)
   paragraph      Write a paragraph from a model  (the book's Lesson 2 productive task) */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;
  function A() { return root.AudioKit; }
  function W() { return root.Write; }

  function multi(stage, graders, api, lead, clean) {
    return function () {
      var right = 0, miss = [];
      graders.forEach(function (g, i) {
        var r = g();
        if (r.ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + (r.rightText || "") +
          (r.rightWhy ? " — " + r.rightWhy : ""));
      });
      return { score: right, total: graders.length,
        html: miss.length ? "<p>" + lead + "</p>" + api.fbList(miss)
                          : "<p>" + clean + "</p>" };
    };
  }

  /* ----------------------------------------------------- minimal-pairs --- */
  /* spec.focus : the contrast, e.g. "/iː/ as in seat, /ɪ/ as in sit"
     spec.items : [{ say, options:[{text,correct,why}] }]
     Audio replays freely: discrimination needs repetition, unlike a test item. */
  D.register("minimal-pairs", function (stage, spec, api) {
    if (spec.focus) stage.appendChild(api.note({ kind: "speak", title: "The contrast", body: spec.focus }));
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Play each line and choose the word you hear. Play it as often as you like."));
    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var sub = E("div", "sub mpair");
      sub.appendChild(E("p", "sub-h", "Line " + (i + 1)));
      sub.appendChild(A().player({ label: "Line " + (i + 1), say: it.say,
                                   src: it.src, once: false, compact: true }));
      graders.push(D._choiceInto(sub, it.options, api));
      stage.appendChild(sub);
    });
    return multi(stage, graders, api, "Lines to hear again:", "Every contrast heard correctly.");
  });

  /* -------------------------------------------------------- paraphrase --- */
  /* spec.items : [{ source, options:[{text,correct,why}] }]
     The source sits in quotation marks above its options, because the task is
     a comparison and the thing compared has to stay on screen. */
  D.register("paraphrase", function (stage, spec, api) {
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "Choose the sentence that is closest in meaning to the one in the box. " +
      "A wrong answer usually changes one relationship, not one word."));
    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var sub = E("div", "sub");
      sub.appendChild(E("p", "sub-h", "Sentence " + (i + 1)));
      var q = E("blockquote", "source");
      q.innerHTML = it.source;
      sub.appendChild(q);
      graders.push(D._choiceInto(sub, it.options, api));
      stage.appendChild(sub);
    });
    return multi(stage, graders, api, "Worth re-reading:", "Every paraphrase correctly matched.");
  });

  /* ------------------------------------------------------------ oddone --- */
  /* spec.items : [{ options:[{text,correct,why}], group }]
     `correct` marks the word that does NOT belong; `group` names what the
     other three share, which is the part worth learning. */
  D.register("oddone", function (stage, spec, api) {
    if (!spec.prompt) stage.appendChild(E("p", "prompt",
      "In each row, three words belong together and one does not. Choose the one that does not."));
    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var sub = E("div", "sub odd");
      sub.appendChild(E("p", "sub-h", "Row " + (i + 1) +
        (it.group ? " — " + it.group : "")));
      graders.push(D._choiceInto(sub, it.options, api));
      stage.appendChild(sub);
    });
    return multi(stage, graders, api, "Rows to look at again:", "Every row sorted correctly.");
  });

  /* --------------------------------------------------------- paragraph --- */
  /* spec.model   : the worked model paragraph (always shown: the book never
                    asks for production without a model in view)
     spec.task    : what to write
     spec.must    : [checklist lines]
     spec.min     : minimum words
     Self-assessed against the checklist, like the book's own writing tasks. */
  D.register("paragraph", function (stage, spec, api) {
    var cols = E("div", "cols even");
    var left = E("div", "col"), rightc = E("div", "col");

    left.appendChild(E("p", "sub-h", "Model"));
    var mod = E("div", "model");
    mod.innerHTML = spec.model;
    left.appendChild(mod);
    if (spec.note) left.appendChild(api.note({ kind: "writer", body: spec.note }));

    rightc.appendChild(E("p", "sub-h", "Your paragraph"));
    rightc.appendChild(E("p", "task", spec.task));
    var pad = W().notepad(rightc, "Your paragraph");
    pad.placeholder = "Write at least " + (spec.min || 70) + " words.";
    var count = W().counter(pad, rightc, spec.min || 70);
    var boxes = W().checklist({ checklist: spec.must || [],
      checklistTitle: spec.checklistTitle || "Before you check" }, rightc);

    cols.appendChild(left); cols.appendChild(rightc);
    stage.appendChild(cols);

    return function () {
      var words = count();
      var ticked = boxes.filter(function (b) { return b.cb.checked; }).length;
      var need = boxes.length;
      var longEnough = words >= (spec.min || 70);
      var ok = longEnough && ticked === need;
      var rows = [];
      if (!longEnough) rows.push("<b>Length.</b> " + words + " words; you need at least " +
        (spec.min || 70) + ". A short paragraph usually means a missing reason, not a missing word.");
      if (ticked < need) rows.push("<b>Checklist.</b> " + ticked + " of " + need +
        " ticked. Read your own paragraph against the model and tick only what is true.");
      return {
        ok: ok,
        verdict: ok ? "Complete" : "Not yet",
        html: ok ? "<p>Length and checklist both met. Now read the model once more and " +
                   "ask which of its moves your paragraph does not make yet.</p>"
                 : api.fbList(rows)
      };
    };
  });
})(window, document);
