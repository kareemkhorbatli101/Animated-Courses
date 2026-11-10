/* THE OS VOICE - speech the device makes, as opposed to the recordings that ship with the page.

   TWO KINDS OF SOUND, AND THE SEAM BETWEEN THEM IS DELIBERATE.

   The readings and the dialogues are PRE-RECORDED Piper mp3s. They are the lesson: the same words, the
   same voice, the same timing for every learner on every device, offline, forever. Nothing here touches
   them.

   Everything else a learner might want to HEAR rather than read - the answer revealed when they press
   Check, a role-play they are about to perform, an Arabic translation, a single prompt - is spoken by
   the device itself through speechSynthesis. It costs no bytes, needs no build step, works offline, and
   it can say text that did not exist when the page was published. That is the whole reason it is here:
   recording every answer in the book would be ~2,300 more clips of audio for lines nobody listens to
   twice.

   WHAT THE MACHINE ACTUALLY HAS, measured on this one: eight voices - en-US David (m), Mark (m), Zira
   (f), ar-SA Naayf (m), ar-EG Hoda (f), and three Portuguese. So English can be cast with two men and
   one woman, and Arabic with one of each. Other devices differ, which is why nothing here assumes: the
   list is read at run time, a request is matched as closely as it can be, and when there is no voice at
   all the page says so instead of a button doing nothing.

   TWO WOMEN IN ONE SCENE WILL SHARE A VOICE on a machine like this, because Zira is the only female
   English voice. They are separated by pitch and rate instead - weaker than two real voices, and
   honest about it.   */
(function () {
  var A = window.AHB;
  if (!A) return;

  /* A voice's sex is not in the API. These are the Microsoft and Apple names this book is likely to
     meet; anything unknown falls through to `null` and is used only when nothing better matches. */
  var MALE = ['david', 'mark', 'george', 'james', 'ryan', 'guy', 'naayf', 'hamed', 'shakir', 'daniel',
    'thomas', 'william', 'liam', 'christopher', 'brian', 'andrew', 'eric', 'roger', 'steffan',
    'alex', 'fred', 'rishi', 'ravi', 'oliver'];
  var FEMALE = ['zira', 'hazel', 'susan', 'linda', 'heera', 'hoda', 'salma', 'amany', 'maria', 'helia',
    'catherine', 'hayley', 'emma', 'ava', 'jenny', 'aria', 'michelle', 'libby', 'sonia', 'natasha',
    'samantha', 'victoria', 'karen', 'moira', 'tessa', 'fiona', 'neerja', 'luna'];

  function sexOf(v) {
    var n = (v.name || '').toLowerCase();
    for (var i = 0; i < MALE.length; i++) if (n.indexOf(MALE[i]) >= 0) return 'm';
    for (var j = 0; j < FEMALE.length; j++) if (n.indexOf(FEMALE[j]) >= 0) return 'f';
    return null;
  }

  var S = { ready: false, voices: [], supported: ('speechSynthesis' in window) };

  function load() {
    if (!S.supported) return;
    var vs = window.speechSynthesis.getVoices() || [];
    if (!vs.length) return;
    S.voices = vs.map(function (v) { return { v: v, lang: v.lang || '', sex: sexOf(v) }; });
    S.ready = true;
  }
  if (S.supported) {
    load();
    try { window.speechSynthesis.onvoiceschanged = load; } catch (e) { }
  }

  /* Pick the closest voice to what was asked for: the right language first, then the right sex, then
     anything of that language, then the default. Deterministic for a given voice list, which is what
     lets gates/ah_site_speech check the casting rather than guess at it. */
  S.pick = function (lang, sex, nth) {
    if (!S.ready) load();
    if (!S.voices.length) return null;
    lang = (lang || 'en').slice(0, 2).toLowerCase();
    var same = S.voices.filter(function (x) { return x.lang.slice(0, 2).toLowerCase() === lang; });
    var pool = same.filter(function (x) { return !sex || x.sex === sex; });
    if (!pool.length) pool = same;
    if (!pool.length) pool = S.voices;
    return pool[(nth || 0) % pool.length];
  };

  /* Two actors of the same sex on a machine with one voice for it: separate them by pitch and rate.
     The offsets are small enough to stay natural and large enough to tell two people apart. */
  S.tone = function (nth) {
    var t = [{ p: 1.0, r: 1.0 }, { p: 0.86, r: 0.96 }, { p: 1.14, r: 1.04 }, { p: 0.94, r: 1.08 }];
    return t[(nth || 0) % t.length];
  };

  var current = null;

  S.stop = function () {
    current = null;
    try { window.speechSynthesis.cancel(); } catch (e) { }
  };

  /** speak(text, {lang, sex, nth, rate, pitch, onend, onerror}) -> true if it was started */
  S.speak = function (text, o) {
    o = o || {};
    if (!S.supported || !text) { if (o.onend) o.onend(); return false; }
    S.stop();
    var chosen = S.pick(o.lang, o.sex, o.nth);
    if (!chosen) { if (o.onend) o.onend(); return false; }
    var tone = S.tone(o.nth);
    var u = new SpeechSynthesisUtterance(String(text));
    u.voice = chosen.v;
    u.lang = chosen.v.lang;
    u.rate = o.rate != null ? o.rate : tone.r;
    u.pitch = o.pitch != null ? o.pitch : tone.p;
    var me = u;
    current = u;
    u.onend = function () { if (current === me && o.onend) o.onend(); };
    u.onerror = function () { if (current === me) { if (o.onerror) o.onerror(); else if (o.onend) o.onend(); } };
    try { window.speechSynthesis.speak(u); } catch (e) { if (o.onend) o.onend(); return false; }
    return true;
  };

  /** Speak a list of {text, lang, sex, nth} one after another; returns a canceller. */
  S.sequence = function (lines, opt) {
    opt = opt || {};
    var i = 0, live = true;
    function step() {
      if (!live || i >= lines.length) { if (live && opt.onend) opt.onend(); return; }
      var L = lines[i++];
      if (opt.online) opt.online(L, i - 1);
      S.speak(L.text, {
        lang: L.lang, sex: L.sex, nth: L.nth,
        onend: function () { if (live) step(); }
      });
    }
    step();
    return function () { live = false; S.stop(); };
  };

  /** One short line explaining why a speak button may do nothing on this device. */
  S.why = function () {
    if (!S.supported) return 'This browser has no speech engine, so the read-aloud buttons are off.';
    if (!S.ready || !S.voices.length) return 'This device has no installed voices, so nothing can be read aloud.';
    return '';
  };

  S.has = function (lang) {
    if (!S.ready) load();
    return S.voices.some(function (x) { return x.lang.slice(0, 2).toLowerCase() === (lang || 'en').slice(0, 2); });
  };

  A.say = S;
})();
