/* speak.js — the two speaking tasks.
 *
 * Recording is FEATURE-DETECTED, not assumed. Measured in Phase 1: file:// is a
 * secure context and getUserMedia is exposed, but the call fails with
 * NotSupportedError because the file:// origin is opaque and no permission can
 * attach to it. Served from http://localhost the same call succeeds. So the one
 * build tries to record, and falls back to self-assessment against a model the
 * moment it cannot - correct either way, with no decision to make.
 */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc, A = root.AudioKit, C = root.CAST;

  var recState = null;   /* null = untested, true/false once known */
  function canRecord() {
    if (recState !== null) return Promise.resolve(recState);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ||
        typeof MediaRecorder === "undefined") {
      recState = false;
      return Promise.resolve(false);
    }
    return navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function (s) { s.getTracks().forEach(function (t) { t.stop(); }); recState = true; return true; })
      .catch(function () { recState = false; return false; });
  }

  function selfRate(host, label) {
    var r = E("div", "rubric");
    r.appendChild(E("h4", null, label || "Rate your own answer"));
    var picked = null, btns = [];
    var rows = [
      [5, "Fluent, accurate, and fully developed."],
      [4, "Clear and mostly accurate, with minor slips."],
      [3, "Understandable, but hesitant or thin."],
      [2, "Hard to follow in places."],
      [1, "Only isolated words got through."]
    ];
    rows.forEach(function (row) {
      var lab = doc.createElement("label");
      var b = doc.createElement("input");
      b.type = "radio"; b.name = "rate-" + Math.random().toString(36).slice(2, 7);
      b.className = "cbx";
      b.addEventListener("change", function () { picked = row[0]; });
      lab.appendChild(b);
      var s = E("span", null, row[0] + " — " + row[1]);
      lab.appendChild(s);
      r.appendChild(lab);
      btns.push(b);
    });
    host.appendChild(r);
    return function () { return picked; };
  }

  /* --------------------------------------------------------- listen & repeat */
  D.register("repeat", function (stage, spec, api) {
    if (spec.speaker && C) stage.appendChild(C.speakerBlock(spec.speaker, spec.speakerNote));
    var idx = 0, revealed = false;
    var hint = E("p", "once", "Listen, then say it back. Reveal the model when you have tried it.");
    stage.appendChild(hint);

    var list = E("div");
    stage.appendChild(list);
    var rates = [];

    spec.lines.forEach(function (ln, i) {
      var row = E("div");
      row.style.cssText = "border:1px solid var(--rule);border-radius:9px;padding:12px 14px;margin:0 0 10px";
      var top = E("div");
      top.style.cssText = "display:flex;gap:11px;align-items:center";
      var p = A.player({ text: ln.text, speaker: spec.speaker, label: "Sentence " + (i + 1),
                         once: false, src: ln.src });
      p.style.flex = "1";
      top.appendChild(p);
      row.appendChild(top);

      var rev = E("button", "btn btn-ghost", "Reveal the model");
      rev.type = "button";
      rev.style.marginTop = "9px";
      var model = E("div");
      model.style.display = "none";
      model.innerHTML = "<p class='dialog'>" + esc(ln.text) + "</p>" +
        (ln.note ? "<p style='font-size:13px;color:var(--ink-2)'>" + ln.note + "</p>" : "");
      rev.addEventListener("click", function () {
        model.style.display = "";
        rev.style.display = "none";
        revealed = true;
      });
      row.appendChild(rev);
      row.appendChild(model);
      /* F16 — speaking along with the model is the part that trains rhythm,
         and it is available here where recording is not. */
      if (root.RL) root.RL.shadowBar(row, ln.text, spec.speaker);
      rates.push(selfRate(row, "How close were you?"));
      list.appendChild(row);
    });

    canRecord().then(function (ok) {
      hint.textContent = ok
        ? "Listen, say it back, then rate yourself. Your microphone is available on this page."
        : "Listen, then say it back aloud. Reveal the model and rate yourself — recording is not available from a file:// page, so this book marks speaking by self-assessment.";
    });

    return function () {
      var given = rates.map(function (f) { return f(); }).filter(function (x) { return x !== null; });
      if (given.length < spec.lines.length) {
        return { ok: false, total: 1,
                 verdict: given.length + " of " + spec.lines.length + " rated",
                 html: "<p>Say each sentence aloud, reveal the model, and rate yourself on all " +
                       spec.lines.length + ".</p>" };
      }
      var avg = given.reduce(function (a, b) { return a + b; }, 0) / given.length;
      return {
        ok: true, total: 1,
        verdict: "Self-rated " + (Math.round(avg * 10) / 10) + " / 5",
        html: "<p>Each of these is worth <b>5 points</b> on the real test and is machine-scored " +
              "for accuracy and intelligibility. Your own rating is the honest proxy this book " +
              "can give you — it is not a score.</p>" +
              (avg < 3.5 ? "<p>Go back to the ones you rated low and say them again now, " +
                           "slowly, before moving on.</p>" : "")
      };
    };
  });

  /* ------------------------------------------------------------- interview */
  D.register("interview", function (stage, spec, api) {
    if (spec.speaker && C) stage.appendChild(C.speakerBlock(spec.speaker, spec.speakerNote || "interviewer"));
    var seconds = spec.seconds || 45;
    var note = E("p", "once", "One question, one pass, " + seconds + " seconds. The clock starts when you press play.");
    stage.appendChild(note);

    var q = E("div", "panel");
    q.innerHTML = "<h3>The question</h3><p>" + spec.question + "</p>";
    stage.appendChild(q);

    var p = A.player({ text: spec.question.replace(/<[^>]+>/g, ""), speaker: spec.speaker,
                       label: "The question", once: false, src: spec.src });
    stage.appendChild(p);

    var clock = E("div");
    clock.style.cssText = "font:700 30px var(--mono);margin:12px 0;color:var(--ink-2)";
    clock.textContent = seconds + "s";
    stage.appendChild(clock);

    var go = E("button", "btn btn-ghost", "Start the clock");
    go.type = "button";
    stage.appendChild(go);
    var timer = null, started = false;
    go.addEventListener("click", function () {
      if (timer) return;
      started = true;
      var left = seconds;
      go.disabled = true;
      go.textContent = "Speaking…";
      timer = setInterval(function () {
        left--;
        clock.textContent = left + "s";
        if (left <= 0) {
          clearInterval(timer); timer = null;
          clock.textContent = "Time";
          clock.style.color = "var(--maroon)";
          go.disabled = false;
          go.textContent = "Again";
        }
      }, 1000);
    });

    var modelWrap = E("div");
    modelWrap.style.marginTop = "14px";
    var rev = E("button", "btn btn-ghost", "Reveal a model answer");
    rev.type = "button";
    var model = E("div", "model");
    model.style.display = "none";
    model.innerHTML = spec.model || "";
    rev.addEventListener("click", function () { model.style.display = ""; rev.style.display = "none"; });
    modelWrap.appendChild(rev);
    modelWrap.appendChild(model);
    stage.appendChild(modelWrap);

    var rate = selfRate(stage, "Rate your answer against the model");

    canRecord().then(function (ok) {
      if (!ok) note.textContent += " Recording is not available from a file:// page, so rate yourself against the model.";
    });

    return function () {
      var r = rate();
      if (!started) return { ok: false, total: 1, verdict: "Not attempted",
                             html: "<p>Start the clock and answer aloud first.</p>" };
      if (r === null) return { ok: false, total: 1, verdict: "Not rated",
                               html: "<p>Reveal the model, then rate your own answer.</p>" };
      return {
        ok: true, total: 1, verdict: "Self-rated " + r + " / 5",
        html: "<p>This task is worth <b>5 points</b> and is machine-scored for grammar, " +
              "vocabulary and prosody. " +
              (r >= 4 ? "If that rating is fair, you are in the band this task rewards."
                      : "Answer it once more now, using one structure from the model you did not use.") +
              "</p>"
      };
    };
  });

  root.Speak = { canRecord: canRecord, selfRate: selfRate };
})(window, document);
