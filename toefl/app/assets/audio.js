/* audio.js — the listening layer.
 *
 * Plays a recorded file when one is bundled (audio/<track>.mp3), and falls back
 * to the browser's own voices when it is not, so a unit is usable before its
 * audio has been recorded. ETS's own specification says 2026 listening stimuli
 * are "delivered using AI-generated audio", so synthetic voice is faithful here
 * rather than a compromise - but recorded audio remains the quality target,
 * because TTS cannot reliably deliver the accent spread the spec describes.
 *
 * Plays ONCE, as on the real test. That is stated before the first item rather
 * than sprung on the learner.
 */
(function (root, doc) {
  "use strict";
  var D = root.Deck, C = root.CAST;

  var voices = [];
  function loadVoices() {
    try { voices = root.speechSynthesis ? root.speechSynthesis.getVoices() : []; } catch (e) { voices = []; }
  }
  loadVoices();
  if (root.speechSynthesis && typeof root.speechSynthesis.onvoiceschanged !== "undefined") {
    root.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice(accent) {
    if (!voices.length) loadVoices();
    var exact = voices.filter(function (v) { return v.lang && v.lang.replace("_", "-") === accent; });
    if (exact.length) return exact[0];
    var lang = voices.filter(function (v) { return v.lang && v.lang.indexOf("en") === 0; });
    return lang[0] || voices[0] || null;
  }

  /* Build a player. opts: {track, src, text, speaker, once, onended} */
  /* ---- where a recording of this line would live (F39) ----------------
     The name is derived from the line itself, never from its position on
     the scene, so a recording can only ever play against the words it was
     made for. tools/audio-manifest.js computes the same name; the two
     copies of this hash must agree. */
  var sceneId = null;
  function setScene(id) { sceneId = id; }
  function hash(str) {
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return ("0000000" + h.toString(16)).slice(-8);
  }
  function plain(t) {
    return String(t == null ? "" : t).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }
  function fileFor(text) {
    var P = root.PAGE;
    if (!P || !sceneId) return null;
    var t = plain(text);
    if (!t) return null;
    return (P.up || "") + "audio/" + P.unit + "-" + P.block + "-" + sceneId +
           "-" + hash(t) + ".mp3";
  }

  function player(opts) {
    var wrap = doc.createElement("div");
    wrap.className = "player";

    var btn = doc.createElement("button");
    btn.className = "play";
    btn.type = "button";
    btn.innerHTML = "▶";
    btn.setAttribute("aria-label", "Play the audio");

    var meta = doc.createElement("div");
    meta.className = "meta";
    meta.innerHTML = "<b>" + (opts.label || "Listen") + "</b>" +
      (opts.once === false ? "You can play this as often as you like."
                           : "Plays once, as on the test.");

    var bars = doc.createElement("div");
    bars.className = "bars";
    for (var i = 0; i < 9; i++) {
      var b = doc.createElement("i");
      b.style.height = (6 + ((i * 5) % 15)) + "px";
      bars.appendChild(b);
    }

    wrap.appendChild(btn);
    wrap.appendChild(meta);
    wrap.appendChild(bars);

    var played = false, audioEl = null, mode = "none";

    function finish() {
      wrap.classList.remove("playing");
      if (opts.once !== false) { btn.disabled = true; meta.innerHTML = "<b>" + (opts.label || "Listen") + "</b>Played."; }
      if (opts.onended) opts.onended();
    }

    function playFile() {
      audioEl = new Audio(opts.src);
      audioEl.addEventListener("ended", finish);
      audioEl.addEventListener("error", function () { mode = "tts"; playTTS(); });
      var pr = audioEl.play();
      if (pr && pr.catch) pr.catch(function () { mode = "tts"; playTTS(); });
    }

    function playTTS() {
      if (!root.speechSynthesis || !opts.text) { finish(); return; }
      try {
        root.speechSynthesis.cancel();
        var lines = Array.isArray(opts.text) ? opts.text : [{ who: opts.speaker, text: opts.text }];
        var n = 0;
        lines.forEach(function (ln, idx) {
          var u = new root.SpeechSynthesisUtterance(ln.text);
          var person = C && ln.who ? C.person(ln.who) : null;
          var v = pickVoice(person ? person.accent : "en-US");
          if (v) u.voice = v;
          u.rate = opts.rate || 0.98;
          /* F14: the portraits were drawn and never used during playback.
             Whoever is listening needs to know who is talking. */
          u.onstart = function () { if (opts.onLine) try { opts.onLine(ln, idx); } catch (e) {} };
          u.onend = function () { if (++n >= lines.length) finish(); };
          u.onerror = function () { if (++n >= lines.length) finish(); };
          root.speechSynthesis.speak(u);
        });
      } catch (e) { finish(); }
    }

    btn.addEventListener("click", function () {
      if (played && opts.once !== false) return;
      played = true;
      wrap.classList.add("playing");
      /* A recording if one has been dropped in, the speech engine if not.
         The file handler already falls back on error, so a half-recorded
         book plays recordings where they exist and speaks the rest. */
      var src = opts.src;
      if (!src) {
        var one = Array.isArray(opts.text)
          ? (opts.text.length === 1 ? opts.text[0].text : null)
          : opts.text;
        if (one) src = fileFor(one);
      }
      if (src) { mode = "file"; opts.src = src; playFile(); }
      else { mode = "tts"; playTTS(); }
    });

    wrap.replay = function () { played = false; btn.disabled = false; };
    wrap.opts = opts;
    return wrap;
  }

  /* A listening stage: speaker portrait + player, which every listening item
     needs because the spec requires a visual representation of the speaker. */
  function stageFor(stage, spec) {
    if (spec.speaker && C) stage.appendChild(C.speakerBlock(spec.speaker, spec.speakerNote));
    var p = player({
      track: spec.audio && spec.audio.track,
      src: spec.audio && spec.audio.src,
      text: spec.audio && (spec.audio.lines || spec.audio.text),
      speaker: spec.speaker,
      label: spec.audio && spec.audio.label,
      once: spec.audio ? spec.audio.once : true
    });
    stage.appendChild(p);
    return p;
  }

  root.AudioKit = { player: player, stageFor: stageFor, pickVoice: pickVoice,
                    setScene: setScene, fileFor: fileFor, hash: hash,
                    voices: function () { return voices; } };

  /* ---- listening item kinds: one audio, a cluster of choice items ---- */
  /* This is the shape the AT WORK page already uses and the shape the test
     uses: gist, then detail, then inference, on a single stimulus. */
  D.register("listen", function (stage, spec, api) {
    root.AudioKit.stageFor(stage, spec);
    if (spec.note) { var n = api.note(spec.note); if (n) stage.appendChild(n); }

    var inner = D.E("div");
    stage.appendChild(inner);
    var graders = [];

    (spec.items || []).forEach(function (it, i) {
      var h = D.E("p", "item");
      h.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + it.q;
      inner.appendChild(h);
      var sub = D.E("div");
      inner.appendChild(sub);
      var g = root.Deck._choiceInto(sub, it.options, api);
      graders.push({ it: it, g: g });
    });

    return function () {
      var right = 0, miss = [];
      graders.forEach(function (row, i) {
        var r = row.g();
        if (r.ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + (r.rightText || "") +
          (r.rightWhy ? " — " + r.rightWhy : ""));
      });
      return {
        score: right, total: graders.length,
        html: miss.length ? "<p>Not yet:</p>" + api.fbList(miss)
                          : "<p>Every item right, on one listening.</p>"
      };
    };
  });
})(window, document);
