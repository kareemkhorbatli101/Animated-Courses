/* ws.js — writing and speaking mechanisms (F28-F34 of PLAN-INTERACTIVE.md).

   Prefix for every class here: ws-. Same reason as rl.js. */
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
  var S = function () { return root.Speech; };
  var words = function (t) { return (String(t || "").trim().match(/\S+/g) || []).length; };
  var reduced = function () {
    try { return root.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    catch (e) { return false; }
  };

  /* ===================================== a ring, used twice (F30, F32) === */
  /* One shape for "how much of the target have you reached" and "how much
     of your time is left". A bar would do for either; a ring is read at a
     glance without reading a number, which is the point while you are
     writing or speaking and cannot spare attention for arithmetic. */
  var R = 15.9155;                       /* radius giving a 100-unit circumference */
  function ring(opts) {
    opts = opts || {};
    var wrap = E("div", "ws-ring");
    var svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 36 36");
    svg.setAttribute("class", "ws-ring-svg");
    svg.setAttribute("aria-hidden", "true");
    function arc(cls) {
      var p = doc.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("class", cls);
      p.setAttribute("d", "M18 2.08 a " + R + " " + R + " 0 0 1 0 31.83 a " +
                           R + " " + R + " 0 0 1 0 -31.83");
      return p;
    }
    var track = arc("ws-ring-track"), fill = arc("ws-ring-fill");
    fill.setAttribute("stroke-dasharray", "0 100");
    svg.appendChild(track);
    svg.appendChild(fill);
    var num = E("span", "ws-ring-num", "0");
    wrap.appendChild(svg);
    wrap.appendChild(num);
    var cap = E("span", "ws-ring-cap", opts.label || "");
    wrap.appendChild(cap);

    var live = E("span", "sr-only");
    live.setAttribute("role", "status");
    live.setAttribute("aria-live", "polite");
    wrap.appendChild(live);

    var lastSaid = "";
    return {
      el: wrap,
      set: function (value, max, text, state) {
        var pct = max > 0 ? Math.max(0, Math.min(100, value / max * 100)) : 0;
        fill.setAttribute("stroke-dasharray", pct.toFixed(1) + " " + (100 - pct).toFixed(1));
        num.textContent = text != null ? text : String(value);
        wrap.className = "ws-ring" + (state ? " ws-" + state : "");
        /* announce milestones, not every keystroke */
        var say = state === "done" ? "target reached" : state === "over" ? "over the limit" : "";
        if (say && say !== lastSaid) { live.textContent = say; lastSaid = say; }
        if (!say) lastSaid = "";
      },
      caption: function (t) { cap.textContent = t; }
    };
  }

  /* ========================================== F30 — word-count ring ====== */
  function wordRing(ta, host, min, max) {
    var r = ring({ label: min ? "of " + min + " words" : "words" });
    host.appendChild(r.el);
    function upd() {
      var n = words(ta.value);
      var state = !min ? "" : n >= min ? (max && n > max ? "over" : "done") : "";
      r.set(n, min || Math.max(n, 1), String(n), state);
      if (min) r.caption(n >= min ? (max && n > max ? "over " + max : "of " + min + " — enough")
                                  : "of " + min + " words");
    }
    ta.addEventListener("input", upd);
    upd();
    return function () { return words(ta.value); };
  }

  /* ================================= F29 — a checklist that points ======= */
  /* Ticking "I gave a reason" is a claim. The checklist now has to find the
     sentence that backs it, and says so when it cannot. A learner who ticks
     everything and scores badly learns nothing from the checklist; one who
     ticks a line and watches it fail to find anything has just been shown
     the gap. */
  /* Words that describe WHERE a thing should be, or what the checklist is
     doing, rather than what the sentence should say. Left in, they match on
     position words: "I said why I was writing in the first sentence" found
     "I have already read the first two chapters" and called it a hit. */
  var STOP = ("a an the and or but to of in on at for with is are was were be been " +
              "it its this that these those i you he she we they my your have has had " +
              "do does did not so if then than as by from about into over under one " +
              "sentence sentences paragraph line write writing wrote written use used using " +
              "your my include included includes first last final begin beginning opening " +
              "close closing end ending briefly brief specific specifically clearly clear " +
              "least most more very make makes made give gives given say says said told")
              .split(" ");
  function keywords(t) {
    return String(t).replace(/<[^>]+>/g, " ").toLowerCase()
      .split(/[^a-z'-]+/)
      .filter(function (w) { return w.length > 2 && STOP.indexOf(w) < 0; });
  }
  function sentences(t) {
    return String(t || "").split(/(?<=[.!?])\s+|\n+/).map(function (s) { return s.trim(); })
      .filter(Boolean);
  }
  /* "the first sentence" means the first sentence of the message, not the
     greeting, and "the last" means the last real sentence, not the name you
     signed. Pointing at "Dear Dr Haddad." to judge whether you said why you
     were writing is worse than useless. */
  var GREETING = /^(dear|hi|hello|good (morning|afternoon|evening))\b/i;
  var SIGNOFF = /^(best wishes|best regards|kind regards|regards|yours( sincerely| faithfully)?|sincerely|many thanks|thanks|thank you)\b[,.]?\s*\w*[.,]?$/i;
  /* A greeting and the first real sentence often share one sentence:
     "Dear Dan, I am writing to ask whether there is still a place."
     Dropping that whole sentence as a greeting throws away the purpose,
     which is the one thing the first line is supposed to carry. The
     greeting is trimmed as a prefix instead, and only a sentence that is
     nothing but a greeting is dropped. */
  var GREET_PREFIX = /^(dear|hi|hello|good (morning|afternoon|evening))\b[^,.]{0,40}[,.]\s*/i;
  function body(ss) {
    var a = ss.map(function (x) {
      var t = x.replace(GREET_PREFIX, "").trim();
      return t.length > 2 ? t : x;
    });
    while (a.length > 1 && GREETING.test(a[0])) a.shift();
    while (a.length > 1 && SIGNOFF.test(a[a.length - 1])) a.pop();
    return a.length ? a : ss;
  }

  /* "in the first sentence" is a claim about position, which no amount of
     word matching can test. Find the position it names and show the learner
     that sentence. */
  function positional(text) {
    var t = String(text).toLowerCase();
    if (/\b(first|opening|begin|beginning|open)\b/.test(t)) return "first";
    /* A line ABOUT the sign-off must be shown the sign-off, which is
       exactly the part body() strips when looking for the last real
       sentence. Same word, opposite requirement. */
    if (/\bsign(ed|ing)?[ -]?off\b|\bgreeting\b|\bsalutation\b/.test(t)) return "signoff";
    if (/\b(last|final|closing|close|end)\b/.test(t)) return "last";
    return null;
  }

  /* Word overlap cannot see that "Could you add me to the list?" is the
     request the checklist asked for. These are the shapes those moves take
     in English, which is a thing the matcher CAN see. The learner still
     makes the judgement; this only decides which sentence to put in front
     of them. */
  var CUES = [
    { asks: /\brequest|\bask(ing|ed)?\b/i,
      looks: /\?\s*$|\bcould you\b|\bwould you\b|\bmay i\b|\bcan i\b|\bi would like\b|\bplease\b/i },
    { asks: /\breason|\bwhy\b|\bbecause\b|\bexplain/i,
      looks: /\bbecause\b|\bsince\b|\bso that\b|\bas i\b|\bdue to\b|\bthe reason\b/i },
    { asks: /\bexample|\bspecific|\bdetail/i,
      looks: /\bfor example\b|\bfor instance\b|\bsuch as\b|\blast (week|term|year|month)\b|\d/i },
    { asks: /\bhappen(ed)?\b|\bwhat went\b|\bsituation\b/i,
      looks: /\bi (missed|could not|couldn't|was|were|had|did not|didn't)\b|\bthere (was|were)\b/i },
    { asks: /\bpolite|\bformal|\btone|\bmatch(es)? the reader\b/i,
      looks: /\bplease\b|\bthank you\b|\bi would be grateful\b|\bkind(ly)?\b/i },
    { asks: /\bconcede|\bother side|\bagree/i,
      looks: /\bis right\b|\bi agree\b|\bit is true\b|\bgranted\b|\bof course\b/i }
  ];
  function byCue(itemText, ss) {
    for (var i = 0; i < CUES.length; i++) {
      if (!CUES[i].asks.test(itemText)) continue;
      for (var j = 0; j < ss.length; j++) if (CUES[i].looks.test(ss[j])) return ss[j];
    }
    return null;
  }

  function pointingChecklist(boxes, ta, host) {
    var out = E("div", "ws-point");
    out.hidden = true;
    (host || ta.parentNode).appendChild(out);

    boxes.forEach(function (b) {
      b.cb.addEventListener("change", function () {
        if (!b.cb.checked) { clear(b); return; }
        var ss = sentences(ta.value);
        if (!ss.length) { show(b, null, "none"); return; }

        var bs = body(ss);
        var pos = positional(b.text);
        if (pos) {
          var pick = pos === "first" ? bs[0]
                   : pos === "signoff" ? ss[ss.length - 1]
                   : bs[bs.length - 1];
          show(b, pick, "position", pos);
          return;
        }
        /* the shape of the move, before the words of it */
        var cued = byCue(b.text, bs);
        if (cued) { show(b, cued, "found"); return; }

        var want = keywords(b.text), best = null, bestHits = 0;
        ss.forEach(function (sn) {
          var sw = keywords(sn), hits = 0;
          want.forEach(function (w) {
            if (sw.indexOf(w) >= 0) hits += 1;
            else if (sw.some(function (x) { return x.length > 4 && x.indexOf(w.slice(0, 5)) === 0; })) hits += 0.5;
          });
          if (hits > bestHits) { bestHits = hits; best = sn; }
        });
        var need = Math.max(1, Math.min(2, Math.ceil(want.length * 0.34)));
        show(b, best, bestHits >= need ? "found" : bestHits > 0 ? "unsure" : "cannot");
      });
    });

    function clear(b) {
      var old = out.querySelector('[data-for="' + b.id + '"]');
      if (old) old.parentNode.removeChild(old);
      if (!out.children.length) out.hidden = true;
    }

    /* The pointer shows the sentence the claim is about. It does not pretend
       to grade it: a checklist line like "I explained what happened, briefly"
       is a judgement, and handing that judgement back to the learner with the
       sentence in front of them is the part that teaches. */
    function show(b, sentence, mode, pos) {
      clear(b);
      out.hidden = false;
      var row = E("div", "ws-point-row");
      row.dataset.for = b.id;
      var tag, ask;
      if (mode === "found") {
        tag = "found"; row.classList.add("ws-found");
        ask = "Does this sentence do it?";
      } else if (mode === "position") {
        tag = pos === "first" ? "your first sentence"
            : pos === "signoff" ? "how you signed off"
            : "your last sentence";
        row.classList.add("ws-found");
        ask = "That is the sentence this line is about. Does it do the job?";
      } else if (mode === "unsure") {
        tag = "closest"; row.classList.add("ws-unsure");
        ask = "This is the nearest sentence I can find. If it is not the one, the line may not be done yet.";
      } else if (mode === "cannot") {
        /* The matcher works on words. A learner who wrote "ask" where the
           list says "request" has done the thing, and telling them they
           have not would be a lie the checklist cannot support. */
        tag = "cannot tell"; row.classList.add("ws-unsure");
        sentence = null;
        ask = "Nothing in your draft matches this in so many words. Either it is missing, " +
              "or you said it differently \u2014 read your draft and decide.";
      } else {
        tag = "nothing written"; row.classList.add("ws-missing");
      }
      row.appendChild(E("span", "ws-point-tag", tag));
      var body = E("div");
      body.appendChild(E("p", "ws-point-item", b.text));
      if (sentence) body.appendChild(E("p", "ws-point-ev", "\u201c" + esc(sentence) + "\u201d"));
      else if (mode === "none")
        body.appendChild(E("p", "ws-point-ev", "There is nothing written yet for this to point at."));
      if (ask) body.appendChild(E("p", "ws-point-ask", ask));
      row.appendChild(body);
      out.appendChild(row);
    }
    return out;
  }

  /* ==================================== F31 — sentence-shape frames ====== */
  /* Three shapes from this unit's grammar, dropped at the cursor. Not a
     sentence to copy: a frame with the slots left open, so the grammar is
     supplied and the content is still the learner's. */
  function frames(host, ta, list) {
    if (!list || !list.length) return null;
    var wrap = E("div", "ws-frames");
    wrap.appendChild(E("span", "ws-frames-label", "Sentence shapes from this unit"));
    list.slice(0, 4).forEach(function (f) {
      var text = typeof f === "string" ? f : f.frame;
      var b = E("button", "ws-frame", esc(text));
      b.type = "button";
      b.title = (typeof f === "object" && f.why) ? f.why : "Insert this shape at the cursor";
      b.addEventListener("click", function () {
        var at = ta.selectionStart == null ? ta.value.length : ta.selectionStart;
        var pre = ta.value.slice(0, at), post = ta.value.slice(at);
        var sep = pre && !/\s$/.test(pre) ? " " : "";
        ta.value = pre + sep + text + post;
        ta.focus();
        var caret = (pre + sep + text).length;
        /* land on the first open slot if the frame has one */
        var slot = text.indexOf("___");
        if (slot >= 0) {
          var s = (pre + sep).length + slot;
          ta.setSelectionRange(s, s + 3);
        } else ta.setSelectionRange(caret, caret);
        ta.dispatchEvent(new Event("input", { bubbles: true }));
      });
      wrap.appendChild(b);
    });
    host.appendChild(wrap);
    return wrap;
  }

  /* ============================= F28 — model and draft side by side ====== */
  /* The model is shown and never used. Its sentences do four jobs, and
     naming them turns an example into a structure the learner can reuse. */
  function modelJobs(host, model, jobs) {
    if (!jobs || !jobs.length) return null;
    var wrap = E("div", "ws-jobs");
    wrap.appendChild(E("h4", "ws-jobs-h", "What each sentence of the model is doing"));
    jobs.forEach(function (j, i) {
      var row = E("div", "ws-job");
      row.dataset.job = String(i % 4);
      row.appendChild(E("span", "ws-job-tag", esc(j.job)));
      row.appendChild(E("p", "ws-job-text", esc(j.text)));
      if (j.why) row.appendChild(E("p", "ws-job-why", j.why));
      if (S()) row.appendChild(S().button(j.text, "en", "Hear it"));
      wrap.appendChild(row);
    });
    host.appendChild(wrap);
    return wrap;
  }

  /* ======================== F32 — countdown ring with band descriptors === */
  function countdown(host, seconds, bands) {
    var r = ring({ label: "seconds" });
    r.el.classList.add("ws-count");
    host.appendChild(r.el);
    var desc = E("p", "ws-band");
    /* Say what the band is for before it has anything to report, or the
       empty strip reads as something that failed to load. */
    desc.textContent = bands && bands.length
      ? "Starts when you do. This line will say what a good answer is doing at each stage."
      : "";
    desc.classList.add("ws-band-idle");
    host.appendChild(desc);
    var t = null, left = seconds;
    r.set(seconds, seconds, String(seconds), "");
    function band(el) {
      if (!bands || !bands.length) return "";
      var used = seconds - el;
      for (var i = 0; i < bands.length; i++)
        if (used <= bands[i].upTo) return bands[i].says;
      return bands[bands.length - 1].says;
    }
    return {
      start: function (onEnd) {
        if (t) return;
        left = seconds;
        desc.textContent = band(seconds);
        desc.classList.remove("ws-band-idle");
        t = setInterval(function () {
          left--;
          var state = left <= 0 ? "over" : left <= Math.max(3, seconds * 0.17) ? "warn" : "";
          r.set(left, seconds, String(Math.max(0, left)), state);
          desc.textContent = band(left);
          desc.classList.remove("ws-band-idle");
          if (left <= 0) { clearInterval(t); t = null; if (onEnd) onEnd(); }
        }, 1000);
      },
      stop: function () { if (t) { clearInterval(t); t = null; } },
      used: function () { return seconds - left; }
    };
  }

  /* ============================== F33/F34 — the model, played and timed == */
  function modelAnswer(host, text, seconds) {
    var wrap = E("div", "ws-model");
    var head = E("div", "ws-model-head");
    head.appendChild(E("span", "ws-model-label", "The model answer"));
    var n = words(text);
    /* ~150 words a minute is unhurried spoken English at this level */
    var secs = Math.round(n / 150 * 60);
    head.appendChild(E("span", "ws-model-meta",
      n + " words, about " + secs + "s" + (seconds ? " of the " + seconds + "s you have" : "")));
    if (S()) head.appendChild(S().button(text, "en", "Play the model"));
    wrap.appendChild(head);
    var body = E("p", "ws-model-text", esc(text));
    wrap.appendChild(body);
    host.appendChild(wrap);
    return { el: wrap, words: n, seconds: secs };
  }

  function lengthVsModel(host, yours, model) {
    var p = E("p", "ws-len");
    var ratio = model ? yours / model : 1;
    var verdict = ratio < 0.6 ? "Shorter than the model — which part did you leave out?"
                : ratio > 1.6 ? "Longer than the model — a scored answer does not reward extra words."
                : "About the length of the model.";
    p.textContent = yours + " words against the model's " + model + ". " + verdict;
    p.className = "ws-len " + (ratio < 0.6 || ratio > 1.6 ? "ws-len-off" : "ws-len-ok");
    host.appendChild(p);
    return p;
  }

  root.WS = {
    ring: ring, wordRing: wordRing, pointingChecklist: pointingChecklist,
    frames: frames, modelJobs: modelJobs, countdown: countdown,
    modelAnswer: modelAnswer, lengthVsModel: lengthVsModel,
    words: words, sentences: sentences, keywords: keywords, reduced: reduced,
    bodyOf: body, positional: positional
  };
})(window, document);
