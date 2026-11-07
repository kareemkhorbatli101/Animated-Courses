/* speech.js — pronunciation through the voices installed on the machine.
 *
 * Ported from the CMA build, which had already settled the three things
 * that break naive implementations (below), and extended here for what
 * this book needs: playing a sequence of segments with a cursor moving
 * through the text, a stop, and a rate control for the slow replay that
 * Lesson 4 only unlocks after a first attempt.
 *
 * On Windows, Chrome and Edge expose the installed Windows voices through
 * speechSynthesis; Edge also exposes Microsoft's online natural voices.
 *
 * Three things break naive implementations, and all three are handled here:
 *
 *   1. getVoices() returns [] on the first call. Voices load asynchronously, so
 *      we wait for the voiceschanged event and poll as a backstop. This is the
 *      single most common cause of a dead speaker button.
 *   2. Repeated clicks queue up. cancel() precedes every speak().
 *   3. A local Arabic voice is NOT guaranteed: Microsoft's ar-SA neural voices
 *      are an online service, not the local voice list. So the button must
 *      degrade visibly rather than silently do nothing.
 *
 * Fallback chain: local voice for the language -> any voice for the language ->
 * pre-rendered audio file -> the icon renders disabled with an instruction.
 */
(function (root, doc) {
  "use strict";

  var synth = root.speechSynthesis || null;
  var voices = [];
  var ready = false;
  var waiting = [];
  var AUDIO_DIR = null;          /* set by Speech.setAudioDir() when a pack ships */
  var PREF_KEY = (root.COURSE && root.COURSE.ns || "toefl.") + "voice.";

  function store(k, v) { try { root.localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return root.localStorage.getItem(k); } catch (e) { return null; } }

  function load() {
    if (!synth) return;
    var v = synth.getVoices() || [];
    if (v.length) { voices = v; ready = true; flush(); }
  }
  function flush() { var q = waiting; waiting = []; q.forEach(function (fn) { fn(); }); }

  if (synth) {
    load();
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", load);
    synth.onvoiceschanged = load;
    /* Backstop: some builds fire voiceschanged before our listener attaches. */
    var tries = 0;
    var poll = setInterval(function () {
      if (ready || ++tries > 20) { clearInterval(poll); if (!ready) { ready = true; flush(); } }
      else load();
    }, 150);
  } else {
    ready = true;
  }

  function whenReady(fn) { if (ready) fn(); else waiting.push(fn); }

  function langPrefixes(lang) {
    return lang === "ar" ? ["ar-sa", "ar-eg", "ar-ae", "ar-jo", "ar"] : ["en-us", "en-gb", "en-au", "en"];
  }

  /* Best voice for a language: a locally installed one first, because the
     package is meant to work with no internet. */
  function pick(lang) {
    if (!voices.length) return null;
    var saved = read(PREF_KEY + lang);
    if (saved) {
      for (var s = 0; s < voices.length; s++) if (voices[s].name === saved) return voices[s];
    }
    var prefixes = langPrefixes(lang), i, j, v, tag;
    for (i = 0; i < prefixes.length; i++) {
      for (j = 0; j < voices.length; j++) {
        v = voices[j]; tag = String(v.lang || "").toLowerCase().replace("_", "-");
        if (tag.indexOf(prefixes[i]) === 0 && v.localService) return v;
      }
    }
    for (i = 0; i < prefixes.length; i++) {
      for (j = 0; j < voices.length; j++) {
        v = voices[j]; tag = String(v.lang || "").toLowerCase().replace("_", "-");
        if (tag.indexOf(prefixes[i]) === 0) return v;
      }
    }
    return null;
  }

  function voicesFor(lang) {
    var prefixes = langPrefixes(lang);
    return voices.filter(function (v) {
      var tag = String(v.lang || "").toLowerCase().replace("_", "-");
      return prefixes.some(function (p) { return tag.indexOf(p) === 0; });
    });
  }

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  /* Pre-rendered audio, if an audio pack is present beside the page. */
  function playFile(text, lang, onFail) {
    if (!AUDIO_DIR) { onFail(); return; }
    var a = new root.Audio(AUDIO_DIR + lang + "/" + slug(text) + ".mp3");
    a.addEventListener("error", onFail);
    a.play().catch(onFail);
  }

  var state = { ar: null, en: null };   /* null = unknown, true/false = available */

  function available(lang) {
    if (!synth) return false;
    return !!pick(lang);
  }

  function speak(text, lang, onState) {
    lang = lang === "ar" ? "ar" : "en";
    whenReady(function () {
      var voice = pick(lang);
      if (voice && synth) {
        try { synth.cancel(); } catch (e) {}
        var u = new root.SpeechSynthesisUtterance(text);
        u.voice = voice;
        u.lang = voice.lang;
        u.rate = text.split(/\s+/).length > 3 ? 0.95 : 0.85;   /* slower for single terms */
        u.onend = function () { if (onState) onState("done"); };
        u.onerror = function () { playFile(text, lang, function () { if (onState) onState("unavailable"); }); };
        if (onState) onState("speaking");
        synth.speak(u);
        return;
      }
      playFile(text, lang, function () { if (onState) onState("unavailable"); });
    });
  }

  var HELP = {
    ar: "No Arabic voice is installed on this computer. Windows: Settings → Time & language → Speech → Add voices → Arabic.",
    en: "No English voice is available in this browser. Try Microsoft Edge or Google Chrome."
  };

  /* Build a speaker button. Used by the engine for every term, in both languages. */
  function button(text, lang, label) {
    var b = doc.createElement("button");
    b.type = "button";
    b.className = "speak";
    b.setAttribute("aria-label", (label || "Pronounce") + ": " + text);
    b.innerHTML = "<span aria-hidden=\"true\">🔊</span>";
    b.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      b.classList.remove("speak-dead");
      speak(text, lang, function (s) {
        b.classList.toggle("speaking", s === "speaking");
        if (s === "unavailable") {
          b.classList.add("speak-dead");
          b.title = HELP[lang === "ar" ? "ar" : "en"];
          var note = doc.getElementById("speech-note");
          if (note) { note.textContent = HELP[lang === "ar" ? "ar" : "en"]; note.hidden = false; }
        }
      });
    });
    whenReady(function () {
      if (!available(lang)) { b.classList.add("speak-dim"); b.title = HELP[lang === "ar" ? "ar" : "en"]; }
    });
    return b;
  }

  /* A voice picker, rendered in the page footer when there is a choice to make. */
  function picker(host) {
    whenReady(function () {
      ["en", "ar"].forEach(function (lang) {
        var list = voicesFor(lang);
        if (list.length < 2) return;
        var wrap = doc.createElement("label");
        wrap.className = "voice-pick";
        wrap.textContent = (lang === "ar" ? "Arabic voice " : "English voice ");
        var sel = doc.createElement("select");
        list.forEach(function (v) {
          var o = doc.createElement("option");
          o.value = v.name;
          o.textContent = v.name + (v.localService ? "" : " (online)");
          sel.appendChild(o);
        });
        var cur = pick(lang);
        if (cur) sel.value = cur.name;
        sel.addEventListener("change", function () { store(PREF_KEY + lang, sel.value); });
        wrap.appendChild(sel);
        host.appendChild(wrap);
      });
      if (!voicesFor("ar").length) {
        var n = doc.createElement("p");
        n.className = "voice-warn";
        n.textContent = HELP.ar;
        host.appendChild(n);
      }
    });
  }

  function stop() { try { if (synth) synth.cancel(); } catch (e) {} }

  /* Speak a list of segments in order, telling the caller which one is
     running. The page-level Play button uses this to move a cursor through
     the text, which is the whole point of reading it aloud: the learner
     has to be able to see where they are. */
  function speakSegments(segments, opts) {
    opts = opts || {};
    var i = -1, stopped = false;
    stop();
    function next() {
      if (stopped) return;
      i++;
      if (i >= segments.length) { if (opts.onDone) opts.onDone(); return; }
      var seg = segments[i];
      var text = typeof seg === "string" ? seg : seg.text;
      var lang = (typeof seg === "object" && seg.lang) || "en";
      if (opts.onSegment) opts.onSegment(i, seg);
      whenReady(function () {
        var voice = pick(lang);
        if (!voice || !synth) {
          /* No voice: still advance, so the cursor walks the page and the
             learner is not left staring at a dead button. */
          setTimeout(next, Math.min(2600, 420 + text.length * 26));
          return;
        }
        try { synth.cancel(); } catch (e) {}
        var u = new root.SpeechSynthesisUtterance(text);
        u.voice = voice;
        u.lang = voice.lang;
        u.rate = (opts.rate || 1) * (text.split(/\s+/).length > 3 ? 0.95 : 0.85);
        u.onend = next;
        u.onerror = next;
        synth.speak(u);
      });
    }
    next();
    return { cancel: function () { stopped = true; stop(); } };
  }

  root.Speech = {
    speak: speak, speakSegments: speakSegments, stop: stop,
    button: button, picker: picker, whenReady: whenReady,
    available: available, voicesFor: voicesFor,
    setAudioDir: function (d) { AUDIO_DIR = d; },
    get supported() { return !!synth; }
  };
})(window, document);
