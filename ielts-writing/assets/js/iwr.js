/* ============================================================
   Practise IELTS Writing (IWR) - iwr.js

   One essay per page, nine sections, built from window.IWR_ESSAY.

   WHY THIS IS NOT A COPY OF THE COURSE ENGINE. The site's course engine is 612 KB across four
   files and its page model is a screen graph driven by unit maps, scene and voice data. This
   course is one fixed page shape repeated per essay, using five of that engine's forty exercise
   types, and four of its nine sections do not exist there at all. So the proven PARTS are ported
   - the pick-up/drop machinery that also works by click and by keyboard, and the device-voice
   transport where pause is not stop - and the screen machinery is not.

   WHAT IS SHARED RATHER THAN COPIED: the site's AI layer at /assets/ask/ (keyring, gemini,
   marker). Nothing is fetched from it until a learner presses an AI button, so a page with no
   key, no network, or opened from a file still works in full except for those buttons.

   PROGRESS lives under its own key, "la.iwr.v1". Fifteen books on this site once shared progress
   keys, so finishing a unit in one course ticked a unit off in another.
   ============================================================ */
(function (w, d) {
  'use strict';

  var IWR = w.IWR = w.IWR || {};
  var KEY = 'la.iwr.v1';
  var FLOOR = 250;

  /* ---------- tiny helpers ---------- */
  function el(tag, cls, html) {
    var n = d.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function words(s) {
    var t = String(s || '').split(/\s+/);
    var n = 0;
    for (var i = 0; i < t.length; i++) if (/[A-Za-z0-9]/.test(t[i])) n++;
    return n;
  }
  IWR.words = words;

  /* A seeded shuffle, so a learner's bank order is stable across reloads and is NOT the answer
     order. An exercise whose bank happens to be in answer order is not an exercise.

     DERANGED, NOT MERELY SHUFFLED. The first version only refused the case where the shuffle
     reproduced the WHOLE order, which with five items leaves plenty of room for the first chip
     to be the first row's answer - and on essay 1's matching card that is exactly what happened,
     so the owner read the card as unshuffled. A learner who can pair the top chip with the top
     row has been given one answer free.

     So: after shuffling, any element still sitting at its original index is swapped away. The
     result is a derangement of the answers, with distractors - which have no home index - free
     to sit anywhere. */
  function shuffled(list, seed, keyOf) {
    var a = list.slice(), s = seed || 1, i, j, t;
    function rnd() { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }
    rnd();
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(rnd() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    if (a.length > 1) {
      var same = function (x, y) {
        return keyOf ? keyOf(x) === keyOf(y) : x === y;
      };
      for (i = 0; i < a.length; i++) {
        if (i < list.length && same(a[i], list[i])) {
          j = (i + 1) % a.length;
          /* swap with a neighbour that does not create the same problem there */
          for (var k = 1; k < a.length; k++) {
            var cand = (i + k) % a.length;
            var okHere = !(cand < list.length && same(a[i], list[cand]));
            var okThere = !(i < list.length && same(a[cand], list[i]));
            if (okHere && okThere) { j = cand; break; }
          }
          t = a[i]; a[i] = a[j]; a[j] = t;
        }
      }
    }
    return a;
  }
  IWR.shuffled = shuffled;

  /* Is any item sitting where its own answer belongs? The gate asks this too. */
  IWR.aligned = function (bank, answers) {
    var n = 0;
    for (var i = 0; i < answers.length && i < bank.length; i++) {
      if (bank[i] === answers[i]) n++;
    }
    return n;
  };

  /* ---------- progress ---------- */
  function load() {
    try { return JSON.parse(w.localStorage.getItem(KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function save(all) {
    try { w.localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) { /* private mode */ }
  }
  function state() {
    var all = load(), id = (w.IWR_ESSAY || {}).slug || 'unknown';
    all[id] = all[id] || {};
    return { all: all, me: all[id], id: id };
  }
  IWR.put = function (section, value) {
    var s = state();
    s.me[section] = value;
    save(s.all);
  };
  IWR.get = function (section) {
    return state().me[section];
  };
  IWR.progress = function (slug) {
    var all = load(), me = all[slug] || {}, n = 0, k;
    for (k in me) if (me.hasOwnProperty(k) && me[k] && me[k].done) n++;
    return n;
  };

  /* ---------- the shared pick-up / drop machinery ----------
     Ported from the course engine, which learned the hard way that a drag-only exercise is
     unusable on a phone and invisible to a screen reader. Three ways in: drag, click-to-pick
     then click-to-place, and keyboard (Space to pick up, Space to drop, Escape to let go). */
  function Picker(onPlace) {
    var self = { held: null };
    self.hold = function (tok) {
      if (self.held) self.held.classList.remove('sel');
      self.held = tok || null;
      if (tok) { tok.classList.add('sel'); tok.setAttribute('aria-pressed', 'true'); }
    };
    self.release = function () {
      if (self.held) {
        self.held.classList.remove('sel');
        self.held.setAttribute('aria-pressed', 'false');
      }
      self.held = null;
    };
    self.wireToken = function (tok) {
      tok.setAttribute('draggable', 'true');
      tok.setAttribute('role', 'button');
      tok.setAttribute('aria-pressed', 'false');
      tok.addEventListener('dragstart', function (e) {
        self.hold(tok);
        try { e.dataTransfer.setData('text/plain', tok.getAttribute('data-v') || ''); } catch (x) {}
      });
      tok.addEventListener('click', function () { self.hold(self.held === tok ? null : tok); });
      tok.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          self.hold(self.held === tok ? null : tok);
        } else if (e.key === 'Escape') { self.release(); }
      });
    };
    self.wireSlot = function (slot) {
      slot.setAttribute('tabindex', '0');
      slot.setAttribute('role', 'button');
      slot.addEventListener('dragover', function (e) { e.preventDefault(); slot.classList.add('over'); });
      slot.addEventListener('dragleave', function () { slot.classList.remove('over'); });
      slot.addEventListener('drop', function (e) {
        e.preventDefault();
        slot.classList.remove('over');
        if (self.held) { onPlace(slot, self.held); self.release(); }
      });
      slot.addEventListener('click', function () {
        if (self.held) { onPlace(slot, self.held); self.release(); }
        else if (slot.getAttribute('data-filled')) { onPlace(slot, null); }
      });
      slot.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (self.held) { onPlace(slot, self.held); self.release(); }
          else if (slot.getAttribute('data-filled')) { onPlace(slot, null); }
        }
      });
    };
    return self;
  }
  IWR.Picker = Picker;

  /* ---------- the device voice ----------
     speechSynthesis reads the voices installed where the PAGE is opened, not where it was
     built, so the player names the voice it used and offers whatever that device has. */
  var voices = [];
  function loadVoices() {
    try { voices = w.speechSynthesis ? w.speechSynthesis.getVoices() : []; }
    catch (e) { voices = []; }
  }
  if (w.speechSynthesis) {
    loadVoices();
    try { w.speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {}
  }
  IWR.voices = function () {
    if (!voices.length) loadVoices();
    return voices.filter(function (v) { return /^en/i.test(v.lang); });
  };
  IWR.pickVoice = function (name) {
    var pool = IWR.voices();
    if (!pool.length) return null;
    var i;
    if (name) { for (i = 0; i < pool.length; i++) if (pool[i].name === name) return pool[i]; }
    /* A "Natural" or "Online" voice is far better than the desktop ones and is a free Windows
       download, so prefer it when the learner's machine has one. */
    for (i = 0; i < pool.length; i++) if (/natural|neural/i.test(pool[i].name)) return pool[i];
    for (i = 0; i < pool.length; i++) if (/en[-_]US/i.test(pool[i].lang)) return pool[i];
    return pool[0];
  };

  var queue = [], qi = 0, speaking = false, onDone = null, chosenVoice = null;
  IWR.setVoice = function (name) { chosenVoice = name; };
  IWR.speakSeq = function (chunks, opts) {
    opts = opts || {};
    IWR.stop();
    queue = chunks.slice();
    qi = 0;
    onDone = opts.onend || null;
    speaking = true;
    step(opts);
  };
  function step(opts) {
    if (!speaking || qi >= queue.length) {
      speaking = false;
      if (onDone) onDone();
      return;
    }
    var c = queue[qi];
    if (opts.onchunk) opts.onchunk(c, qi);
    if (!w.speechSynthesis) { qi++; return step(opts); }
    var u = new w.SpeechSynthesisUtterance(c.text);
    var v = IWR.pickVoice(chosenVoice);
    if (v) u.voice = v;
    u.lang = (v && v.lang) || 'en-US';
    u.rate = opts.rate || 0.97;
    u.onend = function () {
      qi++;
      var gap = c.pause || 0;
      if (!speaking) return;
      if (gap) w.setTimeout(function () { step(opts); }, gap);
      else step(opts);
    };
    u.onerror = function () { qi++; step(opts); };
    try { w.speechSynthesis.speak(u); } catch (e) { qi++; step(opts); }
  }
  /* Pause is NOT stop: an essay is two minutes of speech and losing your place in it means
     starting over. */
  IWR.togglePause = function () {
    if (!w.speechSynthesis) return false;
    try {
      if (w.speechSynthesis.paused) { w.speechSynthesis.resume(); return true; }
      w.speechSynthesis.pause();
      return false;
    } catch (e) { return false; }
  };
  IWR.stop = function () {
    speaking = false;
    queue = [];
    qi = 0;
    try { if (w.speechSynthesis) w.speechSynthesis.cancel(); } catch (e) {}
  };
  IWR.hasVoice = function () { return !!(w.speechSynthesis && IWR.voices().length); };

  /* Sentence chunks with the pause table from the plan. The pauses are the pedagogy: the
     learner hears a paragraph as one thought and a transition as a turn. */
  IWR.chunk = function (paras, pp, sp) {
    var out = [];
    pp = pp == null ? 900 : pp;
    sp = sp == null ? 350 : sp;
    for (var p = 0; p < paras.length; p++) {
      var sents = String(paras[p]).match(/[^.!?]+[.!?]*/g) || [paras[p]];
      for (var s = 0; s < sents.length; s++) {
        var t = sents[s].trim();
        if (!t) continue;
        var last = (s === sents.length - 1);
        var pause = last ? pp : sp;
        if (/^(however|moreover|furthermore|in addition|on the other hand|nevertheless|therefore|in conclusion|firstly|secondly|finally)\b/i.test(t)) {
          pause += 250;
        }
        if (last && p === paras.length - 2) pause = 1200;   /* before the conclusion */
        out.push({ text: t, pause: pause, para: p, sent: s });
      }
    }
    return out;
  };

  /* ---------- the words button, section 0 and section 7 ---------- */
  IWR.wordPanel = function (counted, stated, extended) {
    var over = counted - FLOOR;
    var box = el('div', 'wordpanel');
    var pct = Math.max(4, Math.min(100, Math.round(counted / 400 * 100)));
    var markPct = Math.round(FLOOR / 400 * 100);
    box.appendChild(el('div', 'big', esc(counted) + ' words'));
    box.appendChild(el('div', '', over >= 0
      ? esc(over) + ' above the IELTS minimum of ' + FLOOR
      : '<strong>' + esc(-over) + ' short</strong> of the IELTS minimum of ' + FLOOR));
    var bar = el('div', 'wbar' + (over < 0 ? ' short' : ''));
    var fill = el('i');
    fill.style.width = pct + '%';
    var mark = el('b');
    mark.style.left = markPct + '%';
    bar.appendChild(fill);
    bar.appendChild(mark);
    box.appendChild(bar);
    var marks = el('div', 'wmark');
    marks.appendChild(el('span', '', '0'));
    marks.appendChild(el('span', '', String(FLOOR) + ' minimum'));
    box.appendChild(marks);
    if (stated && Math.abs(stated - counted) > 5) {
      box.appendChild(el('div', 'note',
        'The book prints ' + esc(stated) + '. This is a count of the text on this page — '
        + 'the book’s own figures are wrong for most of the essays that give one.'));
    }
    if (extended) {
      box.appendChild(el('div', 'note',
        'Completed to the author’s own outline: ' + esc(extended) + ' words added.'));
    }
    return box;
  };

  function discloser(label, build) {
    var btn = el('button', 'chip btn', esc(label) + ' ▸');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    var panel = el('div');
    panel.hidden = true;
    var built = false;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.innerHTML = esc(label) + (open ? ' ▸' : ' ▾');
      panel.hidden = open;
      if (!open && !built) { panel.appendChild(build()); built = true; }
    });
    return { btn: btn, panel: panel };
  }
  IWR.discloser = discloser;

  /* ---------- modal ---------- */
  IWR.modal = function (title, body) {
    var scrim = el('div', 'scrim');
    var box = el('div', 'modal');
    var x = el('button', 'btn btn-sm x', 'Close');
    x.type = 'button';
    box.appendChild(x);
    box.appendChild(el('h3', '', esc(title)));
    box.appendChild(body);
    scrim.appendChild(box);
    d.body.appendChild(scrim);
    var prev = d.activeElement;
    function close() {
      IWR.stop();
      if (scrim.parentNode) scrim.parentNode.removeChild(scrim);
      d.removeEventListener('keydown', onKey);
      if (prev && prev.focus) prev.focus();
    }
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        var f = box.querySelectorAll('button,select,textarea,input,a[href],[tabindex]');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    x.addEventListener('click', close);
    scrim.addEventListener('click', function (e) { if (e.target === scrim) close(); });
    d.addEventListener('keydown', onKey);
    x.focus();
    return { close: close, box: box };
  };

  /* ---------- the model answers in Markdown, so the page has to read it ----------
     A language model writes **bold**, ### headings, * bullets and --- rules whether or not you
     ask it not to, and asking it not to wastes instruction budget on formatting instead of on
     teaching. So the panel renders a small, safe subset instead of printing the asterisks:
     the learner was seeing "**IMPORTANT NOTICE:**" and "### Task Response".

     ESCAPED FIRST, ALWAYS. Everything is HTML-escaped before a single tag is introduced, so
     text coming back from the model - or quoted from the learner's own essay - can never
     become markup. Only the tags this function creates itself survive. */
  function mdInline(s) {
    return esc(s)
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  IWR.markdown = function (text) {
    var lines = String(text == null ? '' : text).split(/\r?\n/);
    var out = [], list = null, i, ln, m;

    function closeList() {
      if (list) { out.push('</' + list + '>'); list = null; }
    }
    for (i = 0; i < lines.length; i++) {
      ln = lines[i].replace(/\s+$/, '');
      if (!ln.trim()) { closeList(); continue; }
      if (/^\s*(---+|\*\*\*+|___+)\s*$/.test(ln)) { closeList(); out.push('<hr>'); continue; }
      m = ln.match(/^(#{1,6})\s+(.*)$/);
      if (m) {
        closeList();
        var lvl = Math.min(6, m[1].length + 2);      /* a model's ### is not a page heading */
        out.push('<h' + lvl + '>' + mdInline(m[2]) + '</h' + lvl + '>');
        continue;
      }
      m = ln.match(/^\s*[-*•]\s+(.*)$/);
      if (m) {
        if (list !== 'ul') { closeList(); out.push('<ul>'); list = 'ul'; }
        out.push('<li>' + mdInline(m[1]) + '</li>');
        continue;
      }
      m = ln.match(/^\s*(\d+)[.)]\s+(.*)$/);
      if (m) {
        if (list !== 'ol') { closeList(); out.push('<ol>'); list = 'ol'; }
        out.push('<li>' + mdInline(m[2]) + '</li>');
        continue;
      }
      closeList();
      out.push('<p>' + mdInline(ln) + '</p>');
    }
    closeList();
    return out.join('');
  };

  IWR.esc = esc;
  IWR.el = el;
  IWR.FLOOR = FLOOR;
})(window, document);
