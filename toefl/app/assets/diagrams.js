/* diagrams.js — pictures that carry information the words cannot.

   The rule this book set itself is that a visual must be load-bearing:
   referenced by an item, a rationale or a label, and teaching something
   the prose beside it does not already say. That rule was read too
   strictly once, and 684 exercises were left with no picture on the
   grounds that a cloze does not need one. Several of them do:

     a tense lesson     — WHERE in time the event sits is spatial, and a
                          sentence can only assert it
     a minimal pair     — WHERE in the mouth the sound is made is the
                          whole difference, and no amount of text shows it
     an odd-one-out     — the category is a set, and a set has a shape
     a sequence         — order with dependencies is a graph
     a sentence to build— the pattern is a row of slots
     a paraphrase       — "same meaning, different words" is two boxes

   Every one of these is drawn from data the scene already carries, so a
   diagram cannot drift away from the exercise beside it. Classes are
   prefixed dg-. Every figure gets a role and a label, because a picture
   a screen reader cannot describe is a picture that excludes a reader. */
(function (root, doc) {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  function svg(w, h, label) {
    var s = doc.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 " + w + " " + h);
    s.setAttribute("class", "dg-svg");
    s.setAttribute("role", "img");
    if (label) s.setAttribute("aria-label", label);
    return s;
  }
  function el(tag, attrs) {
    var e = doc.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]);
    return e;
  }
  function txt(x, y, s, cls, anchor) {
    var t = el("text", { x: x, y: y, class: "dg-t " + (cls || ""),
                         "text-anchor": anchor || "middle" });
    t.textContent = s;
    return t;
  }
  function figure(cls, caption) {
    var f = doc.createElement("figure");
    f.className = "dg " + (cls || "");
    if (caption) {
      var c = doc.createElement("figcaption");
      c.className = "dg-cap";
      c.innerHTML = caption;
      f.appendChild(c);
    }
    return f;
  }
  var plain = function (h) {
    return String(h == null ? "" : h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  };

  /* ====================================================== 1. timeline === */
  /* Where in time a form puts its event. A tense lesson asserts this in
     words — "a line running from the past to now" — and the line is the
     one thing prose cannot draw. Points are given as {label, from, to},
     where 0 is the far past and 100 is now; `to` beyond 100 runs future. */
  function timeline(points, caption) {
    /* The axis carries 0..140, where 100 is now, so a future span has room
       instead of running off the right edge. Each label sits above the
       left end of its own span rather than after its right end: a span
       that reaches `now` leaves no room to the right of it, and "Present
       perfect" was being clipped to "Present perf". */
    var W = 320, ROW = 30, TOP = 8;
    var H = TOP + points.length * ROW + 24;
    var f = figure("dg-timeline", caption);
    var s = svg(W, H, "A time line. " + points.map(function (p) {
      return p.label + ": " + p.said;
    }).join(". "));

    var L = 10, R = W - 10, SPAN = 140;
    var x = function (v) { return L + (Math.max(0, Math.min(SPAN, v)) / SPAN) * (R - L); };
    var y0 = H - 16, nowX = x(100);

    s.appendChild(el("line", { x1: L, y1: y0, x2: R, y2: y0, class: "dg-axis" }));
    s.appendChild(el("line", { x1: nowX, y1: TOP, x2: nowX, y2: y0 + 5, class: "dg-now" }));
    s.appendChild(txt(nowX, y0 + 14, "now", "dg-small"));
    s.appendChild(txt(L + 2, y0 + 14, "past", "dg-small", "start"));
    s.appendChild(txt(R - 2, y0 + 14, "later", "dg-small", "end"));

    points.forEach(function (p, i) {
      var top = TOP + i * ROW;
      var yLine = top + 20;
      var a = x(p.from), b = x(p.to != null ? p.to : p.from);
      var cls = "dg-c" + (i % 4);
      s.appendChild(txt(a, top + 9, p.label, "dg-lab " + cls, "start"));
      if (b - a > 2) {
        s.appendChild(el("line", { x1: a, y1: yLine, x2: b, y2: yLine,
          class: "dg-span " + cls + (p.dash ? " dg-dash" : "") }));
        if (p.open) s.appendChild(el("polyline", {
          points: (b - 6) + "," + (yLine - 4) + " " + b + "," + yLine + " " +
                  (b - 6) + "," + (yLine + 4), class: "dg-arrow " + cls }));
      }
      s.appendChild(el("circle", { cx: a, cy: yLine, r: 3.4, class: "dg-dot " + cls }));
    });
    f.insertBefore(s, f.firstChild);
    return f;
  }

  /* ====================================================== 2. the mouth === */
  /* Where a consonant is made. Unit 12's own rationale says "you can hear
     the t stop the air before the hiss starts" — which describes a place
     and a manner that the page then does not show. */
  var PLACE = {
    p: [20, "lips together"], b: [20, "lips together"], m: [20, "lips together"],
    f: [29, "lip against teeth"], v: [29, "lip against teeth"],
    "θ": [38, "tongue at the teeth"], "ð": [38, "tongue at the teeth"],
    t: [50, "tongue at the ridge"], d: [50, "tongue at the ridge"],
    s: [50, "tongue at the ridge"], z: [50, "tongue at the ridge"],
    n: [50, "tongue at the ridge"], l: [50, "tongue at the ridge, air round the side"],
    r: [60, "tongue near the ridge, not touching"],
    "ʃ": [62, "tongue just behind the ridge"], "ʒ": [62, "tongue just behind the ridge"],
    "tʃ": [62, "tongue just behind the ridge"], "dʒ": [62, "tongue just behind the ridge"],
    j: [70, "tongue at the hard palate"],
    k: [80, "back of the tongue, soft palate"], g: [80, "back of the tongue, soft palate"],
    "ŋ": [80, "back of the tongue, soft palate"]
  };
  var MANNER = {
    p: "stopped, then released", b: "stopped, then released",
    t: "stopped, then released", d: "stopped, then released",
    k: "stopped, then released", g: "stopped, then released",
    f: "air hisses through", v: "air hisses through",
    "θ": "air hisses through", "ð": "air hisses through",
    s: "air hisses through", z: "air hisses through",
    "ʃ": "air hisses through", "ʒ": "air hisses through",
    "tʃ": "stopped first, then a hiss", "dʒ": "stopped first, then a hiss",
    m: "air through the nose", n: "air through the nose", "ŋ": "air through the nose",
    l: "air round the side of the tongue", r: "no contact at all",
    j: "no contact at all"
  };
  var VOICED = { b: 1, d: 1, g: 1, v: 1, "ð": 1, z: 1, "ʒ": 1, "dʒ": 1,
                 m: 1, n: 1, "ŋ": 1, l: 1, r: 1, j: 1 };

  function mouth(sym) {
    var key = String(sym).replace(/\//g, "");
    var place = PLACE[key];
    if (!place) return null;
    var W = 150, H = 96;
    var s = svg(W, H, "Side view of the mouth. " + key + ": " + place[1] + ", " +
      (MANNER[key] || "") + ", " + (VOICED[key] ? "with voice" : "without voice") + ".");

    /* roof: lips, teeth, ridge, hard palate, soft palate */
    s.appendChild(el("path", { class: "dg-mouth",
      d: "M14 44 L24 40 L34 40 L44 34 Q58 24 76 28 Q92 32 100 44 L104 56" }));
    /* jaw and tongue */
    s.appendChild(el("path", { class: "dg-mouth",
      d: "M14 56 L28 60 L44 62 Q66 70 92 62 L104 58" }));
    s.appendChild(el("path", { class: "dg-tongue",
      d: "M30 62 Q52 50 74 58 Q88 62 96 60 L96 66 Q60 74 30 66 Z" }));
    /* throat, where voicing happens */
    s.appendChild(el("line", { x1: 106, y1: 30, x2: 106, y2: 74, class: "dg-throat" }));

    /* the place marker */
    s.appendChild(el("circle", { cx: place[0] + 4, cy: 44, r: 6.5, class: "dg-place" }));
    s.appendChild(txt(place[0] + 4, 18, "/" + key + "/", "dg-sym"));

    if (VOICED[key]) {
      s.appendChild(el("path", { class: "dg-voice",
        d: "M112 46 q4 -6 8 0 t8 0 t8 0" }));
      s.appendChild(txt(126, 68, "voice on", "dg-small"));
    } else {
      s.appendChild(txt(126, 68, "no voice", "dg-small"));
    }
    return { svg: s, place: place[1], manner: MANNER[key] || "", voiced: !!VOICED[key] };
  }

  function mouthPair(a, b, caption) {
    var A = mouth(a), B = mouth(b);
    if (!A || !B) return null;
    var f = figure("dg-pair", caption);
    [[a, A], [b, B]].forEach(function (p) {
      var col = doc.createElement("div");
      col.className = "dg-col";
      col.appendChild(p[1].svg);
      var d = doc.createElement("p");
      d.className = "dg-note";
      d.innerHTML = "<b>/" + plain(p[0]).replace(/\//g, "") + "/</b> " + p[1].place +
        "; " + p[1].manner + "; " + (p[1].voiced ? "voice on" : "no voice") + ".";
      col.appendChild(d);
      f.insertBefore(col, f.querySelector(".dg-cap"));
    });
    return f;
  }

  /* ======================================================= 3. the set === */
  /* An odd-one-out is a claim about a category, and a category is a set.
     Three inside the ring, one outside, with the rule written on the ring. */
  function setDiagram(group, inside, odd, caption) {
    var W = 320, H = 150;
    var f = figure("dg-set", caption);
    var s = svg(W, H, "A set labelled " + group + " containing " +
      inside.join(", ") + ", with " + odd + " outside it.");
    s.appendChild(el("ellipse", { cx: 112, cy: 78, rx: 98, ry: 56, class: "dg-ring" }));
    s.appendChild(txt(112, 18, group, "dg-lab"));
    inside.slice(0, 4).forEach(function (w, i) {
      var cx = 112 + (i % 2 ? 46 : -46), cy = 60 + Math.floor(i / 2) * 36;
      s.appendChild(el("rect", { x: cx - 42, y: cy - 12, width: 84, height: 24,
                                 rx: 12, class: "dg-pill" }));
      s.appendChild(txt(cx, cy + 5, w, "dg-pill-t"));
    });
    s.appendChild(el("rect", { x: 230, y: 66, width: 82, height: 26, rx: 13,
                               class: "dg-pill dg-pill-out" }));
    s.appendChild(txt(271, 84, odd, "dg-pill-t dg-out-t"));
    s.appendChild(el("line", { x1: 212, y1: 79, x2: 228, y2: 79, class: "dg-link" }));
    return (f.insertBefore(s, f.firstChild), f);
  }

  /* ====================================================== 4. the flow === */
  /* Order with dependencies: each step, and the arrow saying it cannot
     start until the one before it has finished. */
  function flow(steps, caption) {
    var n = steps.length, W = 320, H = n * 44 + 10;
    var f = figure("dg-flow", caption);
    var s = svg(W, H, "A sequence of " + n + " steps: " + steps.join("; ") + ".");
    steps.forEach(function (t, i) {
      var y = 8 + i * 44;
      s.appendChild(el("rect", { x: 34, y: y, width: W - 44, height: 30, rx: 8,
                                 class: "dg-step" }));
      s.appendChild(el("circle", { cx: 18, cy: y + 15, r: 11, class: "dg-num" }));
      s.appendChild(txt(18, y + 19, String(i + 1), "dg-num-t"));
      var label = t.length > 46 ? t.slice(0, 44) + "…" : t;
      s.appendChild(txt(42, y + 19, label, "dg-step-t", "start"));
      if (i < n - 1) s.appendChild(el("polyline", {
        points: "18," + (y + 28) + " 18," + (y + 40) + " 22," + (y + 36),
        class: "dg-arrow" }));
      if (i < n - 1) s.appendChild(el("polyline", {
        points: "18," + (y + 40) + " 14," + (y + 36), class: "dg-arrow" }));
    });
    return (f.insertBefore(s, f.firstChild), f);
  }

  /* ===================================================== 5. the slots === */
  /* A sentence pattern is a row of slots. Seeing the row is what lets the
     order transfer to a sentence the learner has not met. */
  function slots(seq, caption) {
    var JOBS = ["subject", "verb", "object", "adverbial", "linker", "complement"];
    /* A row made only of the slots that could be named is not the shape of
       the sentence: the content words vanish and "subject, adverbial,
       linker" looks like a sentence with no verb in it. The runs between
       named slots are drawn too, unnamed, so the row is the whole line. */
    var n = seq.length, W = 320;
    var perRow = n <= 5 ? n : Math.ceil(n / 2);
    var rows = Math.ceil(n / perRow), H = rows * 34 + 20;
    var f = figure("dg-slots", caption);
    var s = svg(W, H, "Sentence shape: " + seq.map(function (x) {
      return x.job || ("the words " + x.words);
    }).join(", then ") + ".");
    var gap = 5, w = (W - 16 - gap * (perRow - 1)) / perRow;
    seq.forEach(function (sl, i) {
      var r = Math.floor(i / perRow), c = i % perRow;
      var x = 8 + c * (w + gap), y = 10 + r * 34;
      var k = sl.job ? JOBS.indexOf(sl.job) : -1;
      var rect = el("rect", { x: x, y: y, width: w, height: 26, rx: 7,
        class: "dg-slot " + (sl.job ? "dg-j" + (k < 0 ? "x" : k) : "dg-slot-open") });
      if (!sl.job) {
        var ttl = doc.createElementNS(NS, "title");
        ttl.textContent = sl.words;
        rect.appendChild(ttl);
      }
      s.appendChild(rect);
      var label = sl.job || (sl.n === 1 ? "1 word" : sl.n + " words");
      s.appendChild(txt(x + w / 2, y + 17, label, "dg-slot-t"));
    });
    return (f.insertBefore(s, f.firstChild), f);
  }

  /* ====================================================== 6. the twins == */
  /* "Same meaning, different words" is two boxes and an equals sign, with
     the words they share faded so the words they do not share stand out. */
  function twin(source, para, caption) {
    var f = figure("dg-twin", caption);
    var shared = {};
    plain(source).toLowerCase().split(/[^a-z']+/).forEach(function (w) {
      if (w.length > 3) shared[w] = 1;
    });
    function box(text, tag) {
      var d = doc.createElement("div");
      d.className = "dg-box";
      var h = doc.createElement("span");
      h.className = "dg-box-tag";
      h.textContent = tag;
      d.appendChild(h);
      var p = doc.createElement("p");
      p.className = "dg-box-t";
      plain(text).split(/(\s+)/).forEach(function (w) {
        var k = w.toLowerCase().replace(/[^a-z']/g, "");
        var sp = doc.createElement("span");
        sp.textContent = w;
        if (k.length > 3 && shared[k]) sp.className = "dg-same";
        p.appendChild(sp);
      });
      d.appendChild(p);
      return d;
    }
    f.insertBefore(box(source, "the original"), f.querySelector(".dg-cap"));
    var eq = doc.createElement("div");
    eq.className = "dg-eq";
    eq.textContent = "=";
    eq.setAttribute("aria-hidden", "true");
    f.insertBefore(eq, f.querySelector(".dg-cap"));
    f.insertBefore(box(para, "the paraphrase"), f.querySelector(".dg-cap"));
    return f;
  }

  /* What a form claims about time, keyed on the words its own job label
     uses. 0 is the far past, 100 is now, beyond that is later. The scene's
     labels were written before this table existed, so the match is on the
     tense name rather than on anything added for the picture. */
  var TIME = [
    [/present perfect continuous|still going on/i, { from: 25, to: 112, open: true,
      said: "from a point in the past, running past now" }],
    [/present perfect|running from the past to now|line to now/i, { from: 30, to: 100,
      said: "from a point in the past up to now" }],
    [/present continuous|going on right now/i, { from: 88, to: 100,
      said: "in progress at this moment" }],
    [/used to|past state that has ended|did not use to|did . use to/i, { from: 14, to: 52,
      said: "a span in the past, closed" }],
    [/simple present|habit|standing fact/i, { from: 12, to: 100, dash: true,
      said: "again and again, up to now" }],
    [/simple past|finished|dated|earlier of two/i, { from: 28, to: 36,
      said: "one finished point in the past" }],
    [/later of two past/i, { from: 52, to: 60, said: "the later of the two" }],
    [/by the time|past perfect/i, { from: 18, to: 44, said: "already complete when the other happened" }],
    [/going to|decision already made/i, { from: 92, to: 124,
      said: "decided now, done later" }],
    [/\bwill\b|evidence leads you to expect/i, { from: 114, to: 122,
      said: "expected, later" }],
    [/\bmay\b|possibility|leaves open/i, { from: 112, to: 134, dash: true,
      said: "possible, later, and not settled" }]
  ];
  function timeOf(job) {
    /* Only the HEAD of the label — the part before the em dash — names the
       form. The tail is prose about it, and prose mentions tense words
       without being them: "Separable — the object MAY sit in the middle"
       is about word order, and "An if clause — the condition, with no
       WILL" is the clause that must NOT take will. Testing the whole
       string put both on a time line. */
    var t = String(job).replace(/<[^>]+>/g, " ");
    var head = t.split(/\s[\u2014\u2013-]\s|:/)[0];
    for (var i = 0; i < TIME.length; i++) if (TIME[i][0].test(head)) return TIME[i][1];
    return null;
  }

  root.Diagrams = { timeline: timeline, timeOf: timeOf, mouth: mouth, mouthPair: mouthPair,
                    setDiagram: setDiagram, flow: flow, slots: slots, twin: twin,
                    PLACE: PLACE, MANNER: MANNER, VOICED: VOICED };
})(window, document);
