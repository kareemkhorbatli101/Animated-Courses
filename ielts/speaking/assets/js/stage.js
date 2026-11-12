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

    var cancel = null, lip = null, fellBack = [];

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
      });
    }

    function subtitle(l) {
      subEn.textContent = l ? l.text : '';
      subAr.textContent = l ? (l.ar || '') : '';
    }

    function one(l, done) {
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
      cut(l.cam || (l.who === 'examiner' ? 'examiner' : 'candidate'), 260);
      subtitle(l);
      talk(l.who);
      var fin = function () { stopLip(); done(); };
      if (l.clip) {
        var a = new Audio(clipUrl(l.clip));
        a.onended = fin;
        a.onerror = function () { fellBack.push(l.text); cancel = deviceSay(l.text, l.sex, fin); };
        a.play().catch(function () {
          fellBack.push(l.text); cancel = deviceSay(l.text, l.sex, fin);
        });
        cancel = function () { try { a.pause(); } catch (e) {} };
      } else {
        fellBack.push(l.text);
        cancel = deviceSay(l.text, l.sex, fin);
      }
    }

    var api = {
      el: host,
      cut: cut,
      /** show a card over the stage — the Part 2 cue card, or any other card the lesson needs */
      showCard: function (html) { card.innerHTML = html; card.hidden = false; },
      hideCard: function () { card.hidden = true; card.innerHTML = ''; },
      stop: function () {
        if (cancel) cancel();
        cancel = null; stopLip(); subtitle(null); api.playing = false;
      },
      playing: false,
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
          one(l, function () { setTimeout(step, 180); });
        })();
      },
      /** play one line on its own, which is what the ▶ beside a transcript line does */
      playLine: function (l, done) {
        api.stop(); api.playing = true;
        one(l, function () {
          api.playing = false;
          if (!l.cam) cut('two', 320);          /* a line that chose its framing keeps it */
          if (done) done();
        });
      }
    };
    return api;
  };
})();
