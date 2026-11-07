/* rl.js — reading and listening mechanisms (F6-F17 of PLAN-INTERACTIVE.md).

   These behaviours are identical on every scene of their kind, so they live
   here and are applied by the deck, rather than being re-implemented inside
   each renderer where they would drift apart.

   Every class this file creates is prefixed `rl-`. Two bugs in this project
   came from reusing a class the deck or the solver selects on — `.dot` broke
   scene lookup, `.dialog` would have broken spoken dialogue lines — so the
   prefix is not tidiness, it is the fix. */
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
  var M = function () { return root.Motion; };

  /* ------------------------------------------------------- scratch keys --- */
  function key(page, spec, what) {
    return (root.COURSE && root.COURSE.ns || "toefl.") + "rl." + (page && page.id || "p") + "." + (spec && spec.id || "s") + "." + what;
  }
  function load(k) { try { return root.localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function save(k, v) { try { root.localStorage.setItem(k, v); } catch (e) {} }

  /* ============================================ F8 — reading pace band === */
  /* The ETS expectation for a passage of this length, filling as you read.
     It is a calibration, not a timer: it never stops you, it never scores,
     and when you pass the band it says you are reading deliberately rather
     than that you are late. A learner who does not know the expected pace
     cannot practise for it. */
  function paceBand(stage, spec) {
    var words = countWords(spec.text);
    if (!words) return;
    /* ETS academic reading runs about 200 words per minute for a strong
       B2/C1 reader; the band is that, plus a third for first reading. */
    var secs = Math.round(words / 200 * 60 * 1.33);
    var wrap = E("div", "rl-pace");
    var label = E("span", "rl-pace-label",
      words + " words · about " + fmt(secs) + " at test pace");
    var track = E("div", "rl-pace-track");
    var fill = E("div", "rl-pace-fill");
    track.appendChild(fill);
    wrap.appendChild(label);
    wrap.appendChild(track);
    stage.insertBefore(wrap, stage.firstChild);

    var t0 = Date.now(), stopped = false;
    var reduced = false;
    try { reduced = root.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    function tick() {
      if (stopped || !doc.body.contains(wrap)) return;
      var el = (Date.now() - t0) / 1000, pct = Math.min(100, el / secs * 100);
      fill.style.width = pct + "%";
      if (pct >= 100) {
        fill.classList.add("rl-over");
        label.textContent = words + " words · " + fmt(Math.round(el)) +
          " so far, past test pace — that is fine for a first read";
        stopped = true;
        return;
      }
      root.setTimeout(tick, reduced ? 1000 : 250);
    }
    tick();
  }
  function fmt(s) {
    return s < 60 ? s + "s" : Math.floor(s / 60) + "m " + (s % 60 ? (s % 60) + "s" : "").trim();
  }
  function countWords(text) {
    if (!text) return 0;
    var t = typeof text === "string" ? text : JSON.stringify(text);
    return t.replace(/<[^>]+>/g, " ").replace(/[^A-Za-z' ]+/g, " ")
            .split(/\s+/).filter(Boolean).length;
  }

  /* ============================================= F15 — notepad anywhere === */
  /* Note-taking is a scored skill on this test and the book only offered it
     inside `talk`. It persists per scene, survives Try Again, and is never
     graded — if it were graded it would stop being note-taking. */
  function notepad(stage, spec, page) {
    var k = key(page, spec, "notes");
    var wrap = E("div", "rl-pad");
    var head = E("div", "rl-pad-head");
    head.appendChild(E("span", null, "Your notes"));
    var hint = E("span", "rl-pad-hint", "kept on this device, never marked");
    head.appendChild(hint);
    var ta = doc.createElement("textarea");
    ta.className = "rl-pad-box";
    ta.setAttribute("aria-label", "Notes for this exercise");
    ta.placeholder = "Jot what you hear — names, numbers, the order things come in.";
    ta.value = load(k);
    ta.addEventListener("input", function () { save(k, ta.value); });
    wrap.appendChild(head);
    wrap.appendChild(ta);
    stage.appendChild(wrap);
  }

  /* ================================== F12 — transcript after, never before */
  /* Reading along while listening is reading practice wearing listening's
     clothes. The transcript is the review, so it cannot exist until an
     attempt has been made.

     The source is spec.audio.lines, which every listening scene in this book
     already carries as {who, text}. NOT spec.transcript — that field holds
     prose instructions on several scenes ("Read once, close the book..."),
     and printing it as a transcript would show the learner the wrong thing
     entirely. */
  function audioLines(spec) {
    var a = spec.audio;
    if (!a) return [];
    if (Array.isArray(a.lines)) return a.lines.filter(function (l) { return l && l.text; });
    if (typeof a.text === "string") return [{ who: spec.speaker, text: a.text }];
    return [];
  }

  function transcriptAfter(stage, spec, api) {
    var ls = audioLines(spec);
    if (!ls.length) return;
    var box = E("div", "rl-tr");
    box.hidden = true;
    stage.appendChild(box);
    api.onChecked(function () {
      if (!box.hidden) return;
      box.hidden = false;
      box.innerHTML = "";
      box.appendChild(E("h4", "rl-tr-h", "Transcript \u2014 now that you have tried it"));
      ls.forEach(function (ln) {
        var p = E("p", "rl-tr-line");
        var person = root.CAST && ln.who ? root.CAST.person(ln.who) : null;
        if (person) p.appendChild(E("b", "rl-tr-who", esc(person.name) + ": "));
        p.appendChild(E("span", null, esc(ln.text)));
        box.appendChild(p);
      });
      if (M()) M().reveal(box);
    });
  }

  /* ======================================== F13 — slow replay, earned ==== */
  /* 0.8x is a crutch if it is there from the start and a diagnostic if it is
     earned: you find out whether you missed the words or the speed. */
  function slowReplay(stage, spec, api) {
    var host = stage.querySelector(".audio, .rl-audio") || stage;
    var b = E("button", "rl-slow", "Play slower (0.8x)");
    b.type = "button";
    b.disabled = true;
    b.title = "Unlocks after your first attempt";
    b.setAttribute("aria-describedby", "");
    var note = E("span", "rl-slow-note", "after one attempt");
    var wrap = E("div", "rl-slow-wrap");
    wrap.appendChild(b); wrap.appendChild(note);
    host.appendChild(wrap);
    api.onChecked(function () {
      if (!b.disabled) return;
      b.disabled = false;
      b.title = "";
      note.textContent = "now: was it the words or the speed?";
    });
    b.addEventListener("click", function () {
      var text = spoken(spec);
      if (!text || !S()) { note.textContent = "No audio available on this device."; return; }
      S().speak(text, { lang: "en", rate: 0.8 });
    });
  }
  function spoken(spec) {
    return audioLines(spec).map(function (l) { return l.text; }).join(" ");
  }

  /* ============================================= F14 — who is speaking === */
  /* The cast portraits are drawn and were never shown during playback. With
     two voices alternating, knowing who is talking is most of the task. The
     speaking portrait lights as their line plays. */
  function portraits(stage, spec) {
    var ls = audioLines(spec), seen = [], order = [];
    ls.forEach(function (l) {
      if (l.who && seen.indexOf(l.who) < 0) { seen.push(l.who); order.push(l.who); }
    });
    if (!order.length && spec.speaker) order = [spec.speaker];
    if (order.length < 1 || !root.CAST) return null;

    var row = E("div", "rl-cast");
    var cells = {};
    order.forEach(function (who) {
      var person = root.CAST.person(who);
      if (!person) return;
      var cell = E("div", "rl-cast-cell");
      var art = root.CAST.svg(who, 56);
      if (art) cell.innerHTML = art;
      cell.appendChild(E("span", "rl-cast-name", esc(person.name)));
      row.appendChild(cell);
      cells[who] = cell;
    });
    if (!row.children.length) return null;

    /* The scene already shows one speaker in a `.speaker` block. Two rows of
       portraits for the same conversation is noise, so this row takes its
       place: it shows everyone who speaks, carries the same role line, and
       is the thing that lights up during playback. */
    var old = stage.querySelector(".speaker");
    if (old) {
      var note = old.querySelector("span");
      if (note && note.textContent) {
        /* The old block named one speaker and mentioned the other in prose
           ("peer advisor, with Mei Lin"). Both faces are shown now, so
           "with Mei Lin" repeats a portrait that is an inch away. */
        var txt = note.textContent;
        order.forEach(function (who) {
          var person = root.CAST.person(who);
          if (!person) return;
          txt = txt.replace(new RegExp(",?\\s*with " +
            person.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), "");
        });
        txt = txt.replace(/^\s*[,\u00b7]\s*/, "").trim();
        /* What can be left is a bare accent code. "US" on a line of its own
           says nothing a reader wants; the role is the part worth keeping. */
        if (txt && !/^[A-Z]{2,3}$/.test(txt))
          row.appendChild(E("p", "rl-cast-note", esc(txt)));
      }
      old.parentNode.replaceChild(row, old);
    } else {
      stage.insertBefore(row, stage.firstChild);
    }

    /* attach to whichever player this scene built */
    var pl = stage.querySelector(".player");
    if (pl && pl.opts) {
      pl.opts.onLine = function (ln) {
        for (var k in cells) if (cells.hasOwnProperty(k)) cells[k].classList.remove("rl-talking");
        if (ln.who && cells[ln.who]) cells[ln.who].classList.add("rl-talking");
      };
      if (pl.opts.onended) {
        var prev = pl.opts.onended;
        pl.opts.onended = function () {
          for (var k in cells) if (cells.hasOwnProperty(k)) cells[k].classList.remove("rl-talking");
          prev();
        };
      }
    }
    return row;
  }


  /* ======================= F12/F13 for scenes whose ITEMS carry the audio == */
  /* `respond` and `minimal-pairs` give each item its own short line rather
     than one talk for the scene. The same two principles apply, but the
     right place for them is beside the item, not in a block at the foot of
     the page: the learner needs the line next to the options they chose
     between, while the choice is still in mind. */
  function itemSay(spec) {
    return (spec.items || []).map(function (i) { return i && i.say ? String(i.say) : null; });
  }
  function itemAudioReview(stage, spec, api) {
    /* Pair players with the items that HAVE a line, not with every item.
       A scene where four of six items carry audio has four players, and
       comparing against six made the whole decoration silently do nothing. */
    var says = itemSay(spec).filter(Boolean);
    if (!says.length) return;
    /* Not the carried stimulus player at the top of the scene (F2) — that
       one belongs to the source, not to any item, and counting it made the
       shapes disagree on every scene that carries its audio in. */
    var players = [].slice.call(stage.querySelectorAll(".player"))
      .filter(function (pl) { return !pl.closest || !pl.closest(".rl-carried"); });
    if (players.length !== says.length) return;   /* shapes disagree: do nothing */

    var slows = [];
    players.forEach(function (pl, i) {
      if (!says[i]) return;
      var b = E("button", "rl-slow rl-slow-item", "0.8\u00d7");
      b.type = "button";
      b.disabled = true;
      b.setAttribute("aria-label", "Play line " + (i + 1) + " slowly");
      b.title = "Unlocks after your first attempt";
      b.addEventListener("click", function () {
        if (S()) S().speak(says[i], { lang: "en", rate: 0.8 });
      });
      pl.parentNode.appendChild(b);
      slows.push(b);
    });

    api.onChecked(function () {
      slows.forEach(function (b) { b.disabled = false; b.title = "Hear it slowly"; });
      players.forEach(function (pl, i) {
        if (!says[i]) return;
        var box = pl.closest ? pl.closest("div") : pl.parentNode;
        var host = (box && box.parentNode) || pl.parentNode;
        if (host.querySelector(".rl-said")) return;
        var said = E("p", "rl-said");
        said.appendChild(E("span", "rl-said-tag", "You heard"));
        said.appendChild(E("span", null, esc(says[i])));
        host.appendChild(said);
      });
    });
  }


  /* ========================================= F2 — carry the stimulus ===== */
  /* The book asks "write the line of the article" on a scene that does not
     contain the article, on a deck that shows one scene at a time. The
     learner cannot answer it without leaving. The passage keeps its single
     home and is carried here by reference, so it can never drift.

     F6 rides along: when the exercise wants a line cited, every line gets a
     number and a hit area, and clicking one fills the citation. */
  function carryStimulus(stage, spec, api) {
    var src = api.source;
    if (!src) return null;
    var host = E("div", "rl-carried");
    var tag = E("p", "rl-carried-tag");
    tag.textContent = srcLabel(src);
    host.appendChild(tag);

    var cite = wantsCite(spec);
    var body = null;
    if (src.text && root.Docs) {
      body = root.Docs.reading(src.text, cite ? {
        cite: true,
        onCite: function (n) { fillCite(stage, n); }
      } : {});
    } else if (src.chart && root.Charts && root.Charts.render) {
      body = root.Charts.render(src.chart);
    } else if (src.cards && src.cards.length) {
      /* a card deck carried into a later exercise is a reference list: the
         learner needs to look the terms up, not drill them again */
      body = E("div", "rl-terms");
      src.cards.forEach(function (c) {
        var row = E("div", "rl-term");
        row.appendChild(E("b", null, esc(c.term)));
        row.appendChild(E("span", null, " \u2014 " + esc(c.meaning || "")));
        body.appendChild(row);
      });
    } else if (src.phrases && src.phrases.length) {
      body = E("div", "rl-terms");
      src.phrases.forEach(function (ph) {
        var row = E("div", "rl-term");
        row.innerHTML = ph.text;
        body.appendChild(row);
      });
    } else if (audioLines(src).length) {
      body = E("div", "rl-carried-audio");
      var p = root.AudioKit ? root.AudioKit.player({
        text: audioLines(src), label: src.audio.label || "Listen again", once: false
      }) : null;
      if (p) body.appendChild(p);
    }
    if (!body) return null;
    host.appendChild(body);
    stage.insertBefore(host, stage.firstChild);
    return host;
  }
  function srcLabel(src) {
    if (src.cards) return "The terms from earlier, to look up";
    if (src.phrases) return "The phrases from earlier, to look up";
    if (src.sentences) return "The model, carried here so you can look at it";
    if (src.text) return "The passage, carried here so you can cite it";
    if (src.chart) return "The chart, carried here";
    return "The audio, carried here";
  }
  function wantsCite(spec) {
    return (spec.items || []).some(function (i) { return i && i.line != null; });
  }
  /* put the clicked line number into whichever citation box is focused, or
     the first empty one, which is what a reader reaching for a box means */
  function fillCite(stage, n) {
    var boxes = [].slice.call(stage.querySelectorAll(".rl-citebox"));
    if (!boxes.length) return;
    var target = boxes.filter(function (b) { return b === doc.activeElement; })[0] ||
                 boxes.filter(function (b) { return !b.value; })[0] ||
                 boxes[boxes.length - 1];
    target.value = String(n);
    target.dispatchEvent(new Event("input", { bubbles: true }));
    markCitedLine(stage, n);
    if (M()) M().pulse(target);
  }
  function markCitedLine(stage, n) {
    [].slice.call(stage.querySelectorAll(".ln")).forEach(function (r) {
      r.classList.toggle("rl-lit", String(r.dataset.line) === String(n));
    });
  }


  /* ================================================= F16 — shadowing ===== */
  /* Shadowing is speaking along WITH the model while it plays, half a beat
     behind. That is the part that trains rhythm and linking, and it needs
     no microphone at all — so it works here, from a file:// page, where
     getUserMedia does not.

     Recording is offered when the browser allows it and the page is served
     over http(s). From file:// the origin is opaque and getUserMedia fails
     with NotSupportedError, so rather than show a button that throws, the
     bar says plainly what is unavailable and why, and the self-rating that
     the exercise already had carries the comparison. */
  function canRecord() {
    try {
      return !!(root.navigator && root.navigator.mediaDevices &&
                root.navigator.mediaDevices.getUserMedia && root.MediaRecorder &&
                root.location && /^https?:$/.test(root.location.protocol));
    } catch (e) { return false; }
  }

  function shadowBar(host, text, speaker) {
    var bar = E("div", "rl-shadow");
    var label = E("span", "rl-shadow-label", "Shadow it");
    bar.appendChild(label);

    var along = E("button", "rl-shadow-btn", "Speak along");
    along.type = "button";
    along.title = "Play it and say it at the same time, half a beat behind";
    var caption = E("p", "rl-shadow-text");
    caption.hidden = true;
    caption.textContent = text;

    along.addEventListener("click", function () {
      caption.hidden = false;
      along.disabled = true;
      along.textContent = "Speak along \u2014 now";
      if (M()) M().pulse(caption);
      var done = function () {
        along.disabled = false;
        along.textContent = "Again";
      };
      if (S()) {
        S().speak(text, { lang: "en", rate: 0.92, onend: done });
        root.setTimeout(done, Math.max(2500, text.split(/\s+/).length * 420));
      } else done();
    });
    bar.appendChild(along);

    if (canRecord()) {
      var rec = E("button", "rl-shadow-btn", "Record and compare");
      rec.type = "button";
      var audio = null, chunks = [], mr = null, recording = false;
      rec.addEventListener("click", function () {
        if (recording) {
          recording = false;
          rec.textContent = "Record and compare";
          if (mr && mr.state === "recording") mr.stop();
          return;
        }
        root.navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          chunks = [];
          mr = new root.MediaRecorder(stream);
          mr.ondataavailable = function (e) { chunks.push(e.data); };
          mr.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            var url = URL.createObjectURL(new Blob(chunks));
            if (!audio) {
              audio = doc.createElement("audio");
              audio.controls = true;
              audio.className = "rl-shadow-audio";
              bar.appendChild(audio);
            }
            audio.src = url;
            /* yours first, then the model: comparison needs both, in that
               order, so the model is the thing you remember last */
            audio.onended = function () { if (S()) S().speak(text, { lang: "en" }); };
          };
          mr.start();
          recording = true;
          rec.textContent = "Stop";
        }).catch(function () {
          rec.disabled = true;
          rec.textContent = "Microphone unavailable";
        });
      });
      bar.appendChild(rec);
    } else {
      var why = E("span", "rl-shadow-why",
        "Recording needs the online version of this page \u2014 speaking along works here.");
      bar.appendChild(why);
    }

    bar.appendChild(caption);
    host.appendChild(bar);
    return bar;
  }


  /* ============================================ F7 — tappable glossary === */
  /* The book already glosses its hard words, in footnotes at the bottom of
     the passage. A footnote costs the reader their place: they look down,
     find the number, read, and come back having lost the sentence.

     The same gloss, opened where the word is, costs nothing. The data is
     the one already written — "term: definition" — and `ar` fills in as the
     Arabic lands (F18), so the rail is built once and improves as the
     content does. Inline, never a popup: the popup is for the task (F3),
     and a word you are reading is not a task. */
  function parseNote(n) {
    var t = String(n);
    var i = t.indexOf(":");
    if (i < 1) return null;
    return { term: t.slice(0, i).trim(), def: t.slice(i + 1).trim() };
  }

  /* Find a term in the passage's own text and make that occurrence tappable,
     without disturbing anything else on the line. Whole words only: glossing
     "raw" must not light up the "raw" inside "drawer". */
  function wrapInText(scope, term) {
    var re = new RegExp("\\b" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
    var walker = doc.createTreeWalker(scope, 4 /* TEXT_NODE */, null);
    var node;
    while ((node = walker.nextNode())) {
      if (node.parentNode && node.parentNode.closest &&
          node.parentNode.closest(".rl-gloss, .fn, .src")) continue;
      var m = re.exec(node.nodeValue);
      if (!m) continue;
      var after = node.splitText(m.index);
      after.nodeValue = after.nodeValue.slice(m[0].length);
      var btn = E("button", "rl-gloss", esc(m[0]));
      btn.type = "button";
      after.parentNode.insertBefore(btn, after);
      return btn;
    }
    return null;
  }

  function glossRail(wrap, notes, extra) {
    var defs = [];
    (notes || []).forEach(function (n) {
      var d = typeof n === "string" ? parseNote(n) : n;
      if (d && d.term) defs.push(d);
    });
    (extra || []).forEach(function (d) { if (d && d.term) defs.push(d); });
    if (!defs.length) return 0;

    var wired = 0;
    defs.forEach(function (d) {
      var key = d.term.toLowerCase();
      var btn = null;

      /* The academic passages bold their glossed words, so the bold element
         is the thing to make tappable. An everyday notice bolds nothing,
         and its hard words are just as worth glossing, so where there is no
         bold the word is found in the text itself and wrapped. */
      var hit = null;
      [].slice.call(wrap.querySelectorAll("b")).some(function (b) {
        if (b.dataset.glossed) return false;
        if (b.textContent.trim().toLowerCase().replace(/[.,;:]$/, "") !== key) return false;
        hit = b; return true;
      });
      if (hit) {
        hit.dataset.glossed = "1";
        btn = E("button", "rl-gloss");
        btn.type = "button";
        btn.innerHTML = hit.innerHTML;
        hit.parentNode.replaceChild(btn, hit);
      } else {
        btn = wrapInText(wrap, d.term);
        if (!btn) return;
      }
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", d.term + " \u2014 show meaning");
      wired++;

      var strip = null;
      btn.addEventListener("click", function () {
        if (strip && strip.parentNode) {
          strip.parentNode.removeChild(strip);
          strip = null;
          btn.setAttribute("aria-expanded", "false");
          return;
        }
        strip = E("div", "rl-gloss-strip");
        var h = E("div", "rl-gloss-top");
        h.appendChild(E("b", "rl-gloss-term", esc(d.term)));
        if (S()) h.appendChild(S().button(d.term, "en", "Say it"));
        strip.appendChild(h);
        strip.appendChild(E("p", "rl-gloss-def", esc(d.def)));
        if (d.ar) {
          var ar = E("p", "rl-gloss-ar", esc(d.ar));
          ar.setAttribute("lang", "ar");
          ar.setAttribute("dir", "rtl");
          strip.appendChild(ar);
          if (S()) strip.appendChild(S().button(d.ar, "ar", "\u0627\u0633\u0645\u0639"));
        }
        var line = btn.closest ? btn.closest(".ln") : null;
        if (line && line.parentNode) line.parentNode.insertBefore(strip, line.nextSibling);
        else btn.parentNode.appendChild(strip);
        btn.setAttribute("aria-expanded", "true");
        if (M()) M().reveal(strip);
      });
    });
    return wired;
  }


  /* ============================================= F49 — segmented audio == */
  /* Working memory is the binding constraint in listening. A 245-word talk
     played as one block exceeds it for most learners at this level, and
     the usual result is that they hear the first third and guess the rest.

     The parts are the lines the talk is already written in, grouped into
     three; no new data, and a learner who wants it whole still has the
     whole. Offered alongside the single play, never instead of it: the
     test plays it whole, and practising only in pieces would practise the
     wrong thing. */
  function segments(stage, spec) {
    var ls = audioLines(spec);
    if (ls.length < 3) return null;
    var per = Math.ceil(ls.length / 3), parts = [];
    for (var i = 0; i < ls.length; i += per) parts.push(ls.slice(i, i + per));
    if (parts.length < 2) return null;

    var wrap = E("div", "rl-seg");
    wrap.appendChild(E("span", "rl-seg-label", "Or take it in parts"));
    parts.forEach(function (part, n) {
      var b = E("button", "rl-seg-btn", "Part " + (n + 1));
      b.type = "button";
      var words = part.reduce(function (a, l) { return a + l.text.split(/\s+/).length; }, 0);
      b.title = part.length + (part.length === 1 ? " line, " : " lines, ") + words + " words";
      b.setAttribute("aria-label", "Play part " + (n + 1) + " of " + parts.length);
      b.addEventListener("click", function () {
        if (!S()) return;
        [].forEach.call(wrap.querySelectorAll(".rl-seg-btn"), function (x) {
          x.classList.remove("on");
        });
        b.classList.add("on");
        S().speakSegments(part.map(function (l) { return { text: l.text, lang: "en" }; }), {
          onDone: function () { b.classList.remove("on"); }
        });
      });
      wrap.appendChild(b);
    });
    var note = E("span", "rl-seg-note",
      "The test plays it whole \u2014 use the parts to find what you missed, then play it whole again.");
    wrap.appendChild(note);
    stage.appendChild(wrap);
    return wrap;
  }


  /* ========================================= F47 — signal, after only === */
  /* Highlighting the part of a passage an answer came from is a real aid
     and a complete giveaway, depending entirely on when it appears. Shown
     first it answers the question; shown on review it teaches where to
     look next time. Same highlight, opposite effect.

     The regions are the ones the items already cite — a line number, or
     the sentence a rationale quotes — so this needs no new data. */
  function signalOnReview(stage, spec, api) {
    var its = [].concat(spec.items || [], spec.gaps || []);
    if (!its.length) return null;
    api.onChecked(function () {
      var lit = 0;
      its.forEach(function (it) {
        if (!it) return;
        if (it.line != null) {
          var row = stage.querySelector('.ln[data-line="' + it.line + '"]');
          if (row && !row.classList.contains("rl-signal")) {
            row.classList.add("rl-signal"); lit++;
          }
          return;
        }
        /* a rationale that quotes the passage marks what it quotes */
        var q = /[\u201c"]([^\u201d"]{12,})[\u201d"]/.exec(String(it.why || ""));
        if (!q) return;
        var needle = q[1].toLowerCase().slice(0, 40);
        [].slice.call(stage.querySelectorAll(".ln, .tok-s")).some(function (row) {
          if (row.classList.contains("rl-signal")) return false;
          if (row.textContent.toLowerCase().indexOf(needle) < 0) return false;
          row.classList.add("rl-signal"); lit++; return true;
        });
      });
      if (lit) {
        var note = stage.querySelector(".rl-signal-note");
        if (!note) {
          note = E("p", "rl-signal-note",
            "Marked above: where each answer came from. Worth a look before the next one \u2014 " +
            "it is the same move every time.");
          var host = stage.querySelector(".rl-carried") || stage;
          host.appendChild(note);
        }
      }
    });
    return true;
  }


  /* ============================================= F10 — paragraph spine == */
  /* Which paragraph each question draws on, shown as a column beside the
     passage and filling in as the questions are answered. It is a map of
     where the work is: a learner who has answered everything from the
     first paragraph and nothing from the third can see that at a glance,
     and so can one who is hunting in the wrong place.

     `para: 0` means the whole passage \u2014 a main-idea question does not
     live in one paragraph, and pointing it at one would be a lie. */
  function paraSpine(stage, spec, api) {
    var its = spec.items || [];
    if (!its.length || !its.some(function (i) { return i && i.para != null; })) return null;
    var blocks = (spec.text && spec.text.blocks) || [];
    if (blocks.length < 2) return null;

    var wrap = E("div", "rl-spine");
    wrap.appendChild(E("span", "rl-spine-label", "Where the questions come from"));
    var cells = [];
    blocks.forEach(function (b, n) {
      var cell = E("div", "rl-spine-cell");
      cell.appendChild(E("span", "rl-spine-n", String(n + 1)));
      cell.appendChild(E("span", "rl-spine-h", esc(b.h || "Paragraph " + (n + 1))));
      var dots = E("span", "rl-spine-dots");
      its.forEach(function (it, j) {
        if (!it || it.para !== n + 1) return;
        var d = E("i", "rl-spine-dot");
        d.title = "Question " + (j + 1);
        dots.appendChild(d);
      });
      if (!dots.children.length) cell.classList.add("rl-spine-empty");
      cell.appendChild(dots);
      wrap.appendChild(cell);
      cells.push({ el: cell, dots: dots });
    });
    var whole = its.filter(function (i) { return i && i.para === 0; }).length;
    if (whole) {
      var w = E("div", "rl-spine-whole");
      w.textContent = whole === 1
        ? "1 question draws on the whole passage"
        : whole + " questions draw on the whole passage";
      wrap.appendChild(w);
    }

    var host = stage.querySelector(".read") || stage;
    if (host.parentNode) host.parentNode.insertBefore(wrap, host.nextSibling);
    else stage.appendChild(wrap);

    /* fill in as the questions are answered */
    api.onChecked(function () {
      cells.forEach(function (c) {
        [].forEach.call(c.dots.children, function (d) { d.classList.add("on"); });
      });
      wrap.classList.add("rl-spine-done");
    });
    return wrap;
  }

  /* ===================== F11 — light the word a distractor misreads ===== */
  /* The autopsy names the word; this is what makes it findable. Marks every
     occurrence in the passage on screen, because a reader hunting for one
     word should not have to decide which of three is meant. */
  function lightPhrase(phrase) {
    var scope = doc.querySelector(".stage");
    if (!scope || !phrase) return 0;
    [].forEach.call(scope.querySelectorAll(".rl-misread"), function (el) {
      el.classList.remove("rl-misread");
    });
    var needle = String(phrase).toLowerCase();
    var n = 0;
    [].forEach.call(scope.querySelectorAll(".ln, .rl-tr-line, .i6-intro p"), function (row) {
      if (row.textContent.toLowerCase().indexOf(needle) < 0) return;
      row.classList.add("rl-misread");
      n++;
    });
    return n;
  }

  /* ==================================================== the entry point === */
  function decorate(stage, spec, api, page) {
    if (!spec) return;
    carryStimulus(stage, spec, api);
    if (spec.kind === "read" || spec.carry || spec.chart) signalOnReview(stage, spec, api);
    if (spec.kind === "read") { paceBand(stage, spec); paraSpine(stage, spec, api); }
    if (audioLines(spec).length) {
      portraits(stage, spec);
      slowReplay(stage, spec, api);
      segments(stage, spec);
      transcriptAfter(stage, spec, api);
      notepad(stage, spec, page);
    } else if (itemSay(spec).some(Boolean)) {
      itemAudioReview(stage, spec, api);
      /* A notepad belongs where there is something to hold in mind. On
         minimal pairs the item is one word and a notepad is clutter. */
      if (spec.kind !== "minimal-pairs") notepad(stage, spec, page);
    }
  }

  root.RL = {
    decorate: decorate,
    paceBand: paceBand, notepad: notepad, transcriptAfter: transcriptAfter,
    slowReplay: slowReplay, portraits: portraits,
    itemAudioReview: itemAudioReview, itemSay: itemSay,
    carryStimulus: carryStimulus, markCitedLine: markCitedLine, fillCite: fillCite,
    shadowBar: shadowBar, canRecord: canRecord, glossRail: glossRail,
    segments: segments, signalOnReview: signalOnReview, paraSpine: paraSpine,
    lightPhrase: lightPhrase,
    countWords: countWords, audioLines: audioLines, _key: key
  };
})(window, document);
