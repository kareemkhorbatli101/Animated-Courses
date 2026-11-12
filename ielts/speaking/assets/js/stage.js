/* THE SPEAKING-TEST STAGE — one room, two people, and a camera that cuts to whoever is talking.
 *
 * WHAT THE OWNER ASKED FOR, in his words: "the characters in the website face each other but we also
 * cut to speakers". Both halves of that sentence are here, and they are different mechanisms.
 *
 *   FACING EACH OTHER is baked into the drawing. Each figure is generated already turned towards the
 *   other's seat (tools/ah_art.character's `turn`), so there is no run-time head rotation to go wrong
 *   and no frame in which they are looking past one another. The video track spent a day on exactly
 *   this problem in 3D before it was solved; on a flat drawing it costs nothing.
 *
 *   CUTTING is a viewBox. There is ONE drawing and three framings of it — the two-shot and a single
 *   on each person — so a cut cannot show somebody the wide shot did not contain. The video track's
 *   worst fault was a shot that held on the wrong person while the other spoke; here the camera is a
 *   pure function of whose line it is, and _tools/check_stage.py measures the framings on pixels.
 *
 * THE AUDIO SEAM, which this course inherits rather than invents. The lesson's own lines are
 * PRE-RECORDED — the same words, the same voice, the same timing for every learner on every device,
 * offline — exactly as assets/v2/speak.js states it for Al-Hasan. A line with no clip falls back to
 * the device's own voice so a page under construction is still playable, and that fallback is
 * reported, not hidden: `stage.unrecorded()` returns every line that fell back, and the publish gate
 * fails a page that has any.
 *
 * SUBTITLES ARE BILINGUAL ON EVERY LINE. Not a toggle defaulting to off, not "where it helps":
 * Arabic on 100% of spoken lines is a decision this project has already taken twice.
 */
(function () {
  'use strict';
  var IELTS = window.IELTS = window.IELTS || {};
  var ART = null, CAST = null;

  /* WHERE THE RECORDINGS COME FROM, which is not where the pages come from.
   *
   * 600 clips are 41 MB, and git keeps every version of every file for ever. The site's publish
   * repository reached 1,871 MB that way once, 91% of it media that never changes after it is
   * recorded, and pushes began to fail. So the recordings live in their own repository and are
   * served from its own GitHub Pages site, exactly as the accounting course does.
   *
   * NOT jsDelivr: it refuses a repository over 50 MB and refuses it PER FILE, so an over-size
   * repository serves most of its clips and 403s the rest - measured elsewhere at 15% of a course
   * silently missing. This course is 41 MB and would fit today, which is precisely the trap.
   *
   * AN UNSET MEDIA BASE FALLS BACK TO THE PAGE'S OWN PATH, so a checkout that still has its
   * clips/ folder beside it plays from the folder - which is what lets the whole course run from
   * a stick with no host at all. */
  /* THE DRAWINGS AND THE SENTENCE THEY BELONG TO. Both arrive as generated data; the stage
   * shows one beside the picture while a sentence that names something is being spoken, and
   * holds the last one over a sentence that names nothing. See _tools/build_visuals.py for why
   * holding is the honest version of "a picture every time somebody speaks". */
  var OBJECTS = null, VISUALS = null;
  IELTS.objects = function (d) { OBJECTS = d; };
  IELTS.visuals = function (d) { VISUALS = d; };

  var MEDIA = window.IELTS_MEDIA || "";
  function clipUrl(rel) {
    if (!MEDIA) return rel;                       /* '../clips/x.mp3', beside the pages */
    return MEDIA.replace(/\/*$/, "/") + String(rel).replace(/^(\.\.\/)+/, "");
  }
  IELTS.clipUrl = clipUrl;

  IELTS.art = function (d) { ART = d; };
  IELTS.cast = function (d) { CAST = d; };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------------------------------------------------------------- the device's voice, as fallback
   * Not the lesson's voice. See the seam note above: this exists so a page can be looked at before
   * its clips are recorded, and every use of it is counted.
   */
  function deviceSay(text, sex, done) {
    /* A WATCHDOG, BECAUSE `onend` IS NOT GUARANTEED. A browser with no installed voice - a headless
       one, a stripped Linux build, some mobile webviews - accepts speak() and then never fires
       either callback, and the scene stops dead on that line with no error anywhere. So the line
       also ends on a timer sized from its own length, and whichever comes first wins. */
    var fired = false;
    var fin = function () { if (!fired) { fired = true; done(); } };
    var ms = 1200 + String(text).trim().split(/\s+/).length * 380;
    var wd = setTimeout(fin, ms);
    done = (function (d) { return function () { clearTimeout(wd); d(); }; }(fin));
    try {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-GB';
      var vs = speechSynthesis.getVoices().filter(function (v) { return /^en/.test(v.lang); });
      if (vs.length) {
        /* the cheapest sex signal a browser gives is the voice's own name; where it gives none, a
           pitch shift separates the two speakers so a learner can still tell them apart. */
        var want = vs.filter(function (v) { return /female|woman|zira|hazel|susan/i.test(v.name); });
        var man = vs.filter(function (v) { return /male|man|david|george|mark/i.test(v.name); });
        u.voice = (sex === 'f' ? want[0] : man[0]) || vs[0];
        if (sex === 'f' && !want.length) u.pitch = 1.35;
        if (sex === 'm' && !man.length) u.pitch = 0.85;
      }
      u.onend = done; u.onerror = done;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
      return function () { clearTimeout(wd); try { speechSynthesis.cancel(); } catch (e) {} };
    } catch (e) { setTimeout(done, 600); return function () { clearTimeout(wd); }; }
  }

  /** mount(host, opts) -> a stage object.
   *  opts: { candidate: 'hadi', examiner: 'examiner' } */
  IELTS.stage = function (host, opts) {
    opts = opts || {};
    if (!ART || !ART.stage) throw new Error('stage: art.js has not loaded');
    var S = ART.stage;
    var exId = opts.examiner || 'examiner';
    var caId = opts.candidate || 'hadi';
    if (!S.actors[caId]) throw new Error('stage: nobody drawn for "' + caId + '"');

    host.innerHTML =
      '<div class="stagewrap">' +
      '<svg class="stage" viewBox="' + S.cameras.two + '" data-cam="two" role="img" ' +
      'aria-label="The examiner and the candidate at the examination table, facing each other">' +
      '<g data-layer="back">' + S.back + '</g>' +
      '<g data-layer="people">' + S.actors[exId] + S.actors[caId] + '</g>' +
      '<g data-layer="front">' + S.front + '</g>' +
      '</svg>' +
      '<div class="rail" hidden><div class="railbox"></div>' +
      '<p class="railcap"></p></div>' +
      '<p class="yourturn" hidden></p>' +
      '<div class="subs" aria-live="polite"><p class="en"></p><p class="ar" dir="rtl" lang="ar"></p>' +
      '</div>' +
      '<div class="card" hidden></div>' +
      '</div>';

    var svg = host.querySelector('svg.stage');
    var subEn = host.querySelector('.subs .en');
    var subAr = host.querySelector('.subs .ar');
    var card = host.querySelector('.card');
    var actors = {};
    host.querySelectorAll('[data-actor]').forEach(function (g) { actors[g.dataset.actor] = g; });

    var cancel = null, lip = null, fellBack = [], rafId = 0, audioEl = null;
    var rate = 1, closeUp = false, lastDrawing = null;
    var rail = host.querySelector('.rail');
    var railBox = host.querySelector('.railbox');
    var railCap = host.querySelector('.railcap');
    var turnTag = host.querySelector('.yourturn');
    var page = opts.page || null;        /* which data file, so the visuals can be looked up */
    var lineNo = -1;

    /* THE CUT. A viewBox is animatable, so a "cut" and a "move" are the same call with a different
       duration — and both are honest about what the camera did, because there is only one scene. */
    function cut(name, ms) {
      var to = S.cameras[name];
      if (!to) return;
      svg.dataset.cam = name;
      if (!ms) { svg.setAttribute('viewBox', to); return; }
      var from = svg.getAttribute('viewBox').split(/\s+/).map(Number);
      var dst = to.split(/\s+/).map(Number);
      var t0 = performance.now();
      (function step(t) {
        var k = Math.min(1, (t - t0) / ms);
        var e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;    /* ease in-out */
        svg.setAttribute('viewBox', from.map(function (v, i) {
          return (v + (dst[i] - v) * e).toFixed(2);
        }).join(' '));
        if (k < 1) requestAnimationFrame(step);
      })(performance.now());
    }

    /* THE MOUTH. class="mouth" is a contract the figure generator keeps and a gate enforces; here it
       is scoped to ONE actor, so the person not speaking does not move their lips. */
    function talk(who) {
      stopLip();
      var m = actors[who] && actors[who].querySelector('.mouth');
      if (!m) return;
      var base = m.getAttribute('stroke-width') || '2.8';
      var t0 = performance.now();
      lip = requestAnimationFrame(function step(t) {
        var k = 1 + 0.9 * Math.abs(Math.sin((t - t0) / 110));
        m.setAttribute('stroke-width', (parseFloat(base) * k).toFixed(2));
        lip = requestAnimationFrame(step);
      });
      m.dataset.base = base;
    }
    function stopLip() {
      if (lip) cancelAnimationFrame(lip);
      lip = null;
      host.querySelectorAll('.mouth').forEach(function (m) {
        if (m.dataset.base) m.setAttribute('stroke-width', m.dataset.base);
        m.style.transform = '';
        m.classList.remove('lipsync');
      });
    }

    /* THE SUBTITLE IS BUILT WORD BY WORD, so the voice can light it up as it reaches each one.
       The word times were measured off the recordings that already exist - see
       _tools/build_timings.py - so this costs nothing but the markup. */
    function subtitle(l) {
      if (!l) { subEn.innerHTML = ''; subAr.textContent = ''; return; }
      subEn.innerHTML = l.text.split(/\s+/).map(function (wd, i) {
        return '<span class="w" data-wi="' + i + '">' + esc(wd) + '</span>';
      }).join(' ');
      subAr.textContent = l.ar || '';
    }
    function markWord(i) {
      var ws = subEn.querySelectorAll('.w');
      for (var z = 0; z < ws.length; z++) ws[z].classList.toggle('on', z === i);
    }

    /* ---------------------------------------------------------------- the visual rail
     *
     * A picture beside the stage, for the sentence being spoken. It changes when the sentence
     * names something new and HOLDS when it does not, which is the rule the whole feature rests
     * on: 874 of this course's 1,632 sentences name nothing drawable, and inventing a picture
     * for those is the stock-art problem the owner ruled out, arriving by a different door.
     */
    function showDrawing(name) {
      if (!name || !OBJECTS || !OBJECTS[name]) return;
      if (name === lastDrawing) return;
      lastDrawing = name;
      railBox.innerHTML = '<svg viewBox="0 0 160 120" role="img" aria-label="' + esc(name)
        + '">' + OBJECTS[name].svg + '</svg>';
      railBox.classList.remove('in');
      void railBox.offsetWidth;                 /* restart the fade */
      railBox.classList.add('in');
      railCap.textContent = name.replace(/_/g, ' ');
      rail.hidden = false;
    }
    /* The assignment for one line, as [sentence, drawing|null] pairs. */
    function visualsFor(i) {
      if (!VISUALS || !page || !VISUALS[page]) return null;
      return VISUALS[page][i] || null;
    }

    function one(l, done, idx) {
      /* THE CARD BELONGS TO THE LINE, not to the playthrough. It used to be raised in play() only,
         so a learner who pressed ▶ beside a single line of the long turn watched the candidate
         answer a cue card that was not on the screen. Every path that speaks a line goes through
         here, so this is where the card is decided. */
      if (l.card) { api.showCard(l.card); } else { api.hideCard(); }
      /* A LINE MAY NAME ITS OWN FRAMING, and almost none do. In a lesson the camera is a pure
         function of who is speaking - that is the owner's instruction, "always cut to the
         speaker", and the fault it fixes. The marking page is the exception that proves it:
         there, one voice reports on a performance that has finished, so every block asks to hold
         the two-shot. Cutting to a single on somebody who is not speaking is the same fault
         pointing the other way. */
      var want = l.cam || (l.who === 'examiner' ? 'examiner' : 'candidate');
      cut(closeUp && !l.cam ? (want + '_close') : want, 260);
      subtitle(l);
      var pairs = visualsFor(idx == null ? lineNo : idx);
      if (pairs && pairs.length && pairs[0][1]) showDrawing(pairs[0][1]);
      var info = IELTS.clipInfo ? IELTS.clipInfo(l.text, l.voice) : null;
      var fin = function (ms) { stopLip(); markWord(-1); done(ms); };

      if (l.clip) {
        /* ONE AUDIO ELEMENT, AND IT LIVES IN THE PAGE. A fresh `new Audio()` per line leaks a
           decoder on a long part and, being outside the document, is invisible to anything that
           looks at the page - including the gate that has to prove the lips and the subtitle are
           following this recording and not a timer. */
        if (!audioEl) {
          audioEl = new window.Audio();
          audioEl.preload = 'auto';
          audioEl.hidden = true;
          host.appendChild(audioEl);
        }
        cancelAnimationFrame(rafId);
        audioEl.onended = null; audioEl.onerror = null;
        audioEl.src = clipUrl(l.clip);
        audioEl.playbackRate = rate;
        try { audioEl.preservesPitch = true; audioEl.mozPreservesPitch = true; } catch (e) {}
        var ended = false;
        var finish = function () {
          if (ended) return;
          ended = true;
          cancelAnimationFrame(rafId);
          fin(info ? (info.d * 1000 / rate) : 0);
        };
        audioEl.onended = finish;
        audioEl.onerror = function () {
          fellBack.push(l.text);
          cancel = deviceSay(l.text, l.sex, function () { fin(0); });
        };
        /* THE MOUTH AND THE SUBTITLE FOLLOW THE SOUND, not a timer. The envelope and the word
           onsets were measured off this very file, so the lips open on the loud parts and the
           highlight lands on the word being said. */
        if (info) {
          talkFromEnvelope(l.who, info);
          /* WHEN DOES EACH SENTENCE START? At the word it starts at. Each sentence's first word is
             counted off the front of the line, and that word's measured onset is the moment its
             picture goes up. Dividing the clip into equal slices instead would put the second
             picture up halfway through a line whose first sentence is three times as long - which
             is the kind of thing that looks fine until somebody watches it. */
          var multi = (pairs && pairs.length > 1) ? pairs : null;
          var starts = [0], acc = 0, si;
          for (si = 0; multi && si < multi.length - 1; si++) {
            acc += (multi[si][0] || '').split(/\s+/).filter(Boolean).length;
            starts.push(info.wd.length ? (info.wd[Math.min(acc, info.wd.length - 1)] || 0) : 0);
          }
          var sentIdx = 0;
          rafId = requestAnimationFrame(function tick() {
            if (ended) return;
            var t = audioEl.currentTime;
            var k = 0;
            while (k + 1 < info.wd.length && info.wd[k + 1] <= t) k++;
            markWord(k);
            var wantS = sentIdx;
            while (wantS + 1 < starts.length && starts[wantS + 1] <= t) wantS++;
            if (wantS !== sentIdx) {
              sentIdx = wantS;
              if (multi[wantS][1]) showDrawing(multi[wantS][1]);   /* else the last one HOLDS */
            }
            rafId = requestAnimationFrame(tick);
          });
        } else {
          talk(l.who);
        }
        audioEl.play().catch(function () {
          fellBack.push(l.text);
          cancel = deviceSay(l.text, l.sex, function () { fin(0); });
        });
        cancel = function () {
          ended = true;
          cancelAnimationFrame(rafId);
          try { audioEl.pause(); } catch (e) {}
        };
      } else {
        fellBack.push(l.text);
        talk(l.who);
        cancel = deviceSay(l.text, l.sex, function () { fin(0); });
      }
    }

    /* The lips driven by the measured loudness. The old path shook the mouth on a sine wave,
       which looks like talking and is not: it opens on silence and closes on a vowel. */
    function talkFromEnvelope(who, info) {
      stopLip();
      var m = actors[who] && actors[who].querySelector('.mouth');
      if (!m) return;
      var base = parseFloat(m.getAttribute('stroke-width') || '2.8');
      m.dataset.base = String(base);
      m.classList.add('lipsync');            /* transform-box: fill-box, so scaleX is about itself */
      lip = requestAnimationFrame(function step() {
        var t = audioEl ? audioEl.currentTime : 0;
        var i = Math.max(0, Math.min(info.env.length - 1, Math.round(t / info.hop)));
        var open = info.env[i] || 0;
        /* THREE MEASURED TRACKS, THREE THINGS THE MOUTH DOES. Loudness opens the jaw;
           "wide" (ee, ay) stretches it; "round" (oo, oh) purses it. All three came out of the
           same mp3 - engine/speech.visemes - so this is the recording's own mouth, not a
           chatter loop that opens on a silence. */
        var wd = info.wide.length ? (info.wide[Math.min(i, info.wide.length - 1)] || 0) : 0;
        var rn = info.round.length ? (info.round[Math.min(i, info.round.length - 1)] || 0) : 0;
        m.setAttribute('stroke-width', (base * (1 + open * 1.5)).toFixed(2));
        m.style.transform = 'scaleX(' + (1 + 0.3 * wd - 0.28 * rn).toFixed(3) + ')';
        lip = requestAnimationFrame(step);
      });
    }

    var api = {
      el: host,
      cut: cut,
      /** show a card over the stage — the Part 2 cue card, or any other card the lesson needs */
      showCard: function (html) { card.innerHTML = html; card.hidden = false; },
      hideCard: function () { card.hidden = true; card.innerHTML = ''; },
      stop: function () {
        if (cancel) cancel();
        cancel = null;
        cancelAnimationFrame(rafId);
        stopLip(); subtitle(null); api.sayTurn(''); api.playing = false;
      },
      playing: false,

      /* ------------------------------------------------- what the transport drives
       *
       * Five calls, and the reason they live here rather than in player.js is that each one is a
       * fact about the DRAWING: which crop is on screen, how fast the recording runs, which
       * subtitle track is shown, whether the learner has been handed the floor, and which line we
       * are on. player.js knows about buttons; this knows about the room. */

      /** the close-up switch: the singles push in on the head */
      setClose: function (on) {
        closeUp = !!on;
        var cam = svg.dataset.cam || 'two';
        var base = cam.replace(/_close$/, '');
        if (base === 'two') return;                     /* a two-shot has no close-up */
        cut(closeUp ? base + '_close' : base, 300);
      },

      /** 0.6 / 0.75 / 1. The pitch is held where the browser allows it, so a slowed examiner is
       *  still an examiner and not a cartoon. Set mid-line, it takes effect at once. */
      setRate: function (r) {
        rate = Number(r) || 1;
        if (audioEl) {
          audioEl.playbackRate = rate;
          try { audioEl.preservesPitch = true; audioEl.mozPreservesPitch = true; } catch (e) {}
        }
      },

      /** the two independent subtitle switches. NEITHER DEFAULTS OFF and neither hides the other:
       *  Arabic on every line is a decision this project has taken twice, and a learner turning
       *  English off to force themselves to listen is the other half of the same feature. */
      applySubPrefs: function () {
        var p = (IELTS.prefs || { subEn: true, subAr: true });
        subEn.hidden = !p.subEn;
        subAr.hidden = !p.subAr;
        host.classList.toggle('no-subs', !p.subEn && !p.subAr);
      },

      /** shadow mode's prompt. '' takes it down. */
      sayTurn: function (msg) {
        if (!turnTag) return;
        turnTag.textContent = msg || '';
        turnTag.hidden = !msg;
      },

      /** which line the transport is on, so a line played on its own still finds its pictures */
      onLine: function (i) { lineNo = i; },

      /** every line that had to fall back to the device's voice. The publish gate reads this. */
      unrecorded: function () { return fellBack.slice(); },
      /** play(script, opts) — script is [{who, text, ar, clip, sex}] */
      play: function (script, o) {
        o = o || {};
        api.stop();
        fellBack = [];
        api.playing = true;
        cut('two', 0);
        var i = 0;
        (function step() {
          if (!api.playing || i >= script.length) {
            api.playing = false; subtitle(null); cut('two', 420);
            if (o.onend) o.onend();
            return;
          }
          var l = script[i++];
          lineNo = i - 1;
          one(l, function () { setTimeout(step, 180); }, i - 1);
        })();
      },
      /** play one line on its own, which is what the ▶ beside a transcript line does, and what the
       *  transport steps through. `done(spokenMs)` carries the MEASURED length of the line, which
       *  is what lets shadow mode leave a gap the size of the thing being repeated. */
      playLine: function (l, done, idx) {
        api.stop(); api.playing = true;
        if (idx != null) lineNo = idx;
        one(l, function (ms) {
          api.playing = false;
          if (!l.cam) cut('two', 320);          /* a line that chose its framing keeps it */
          if (done) done(ms);
        }, idx);
      }
    };
    return api;
  };
})();
