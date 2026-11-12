/* THE LESSON PAGE — the stage, the transcript, and a practice box under every question.
 *
 * THE SHAPE COMES FROM THE OWNER'S OWN SENTENCE: "allow the user to see the questions separately
 * under the animation and write down or speak in their own answers and have gemini ... give an
 * evaluation for that answer to that particular question ... in a pop-up per question not part
 * (except of course part 2 of each test, where the answer is one box to type in or speak into
 * through the microphone)". Every clause of that is a decision this file implements:
 *
 *   "separately under the animation"  the boxes are their own section below the stage, in the order
 *                                     the examiner asked them, not interleaved with the transcript.
 *   "write down OR speak in"          a textarea and a microphone that writes into the same textarea,
 *                                     so one answer goes to the tutor whichever way it was made.
 *   "a pop-up per question"           one dialog per box. Not a panel per part, and not one shared
 *                                     dialog that has to be told which question it is about.
 *   "except ... part 2"               Part 2 is one box for the whole long turn, with the cue card
 *                                     beside it, and a longer minimum before marking means anything.
 *
 * THE MICROPHONE IS A TRANSCRIBER, NOT A RECORDER. Web Speech recognition turns speech into text in
 * the browser; what is sent for marking is the text. The page says so before it listens, because a
 * learner who thinks their voice is being uploaded is owed the truth either way - and because
 * pronunciation is the one criterion nothing here can judge, which the tutor's own disclaimer states.
 */
(function (w) {
  'use strict';
  var IELTS = w.IELTS = w.IELTS || {};
  var DATA = null;

  IELTS.lesson = function (d) { DATA = d; };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  IELTS.page = function (host, o) {
    if (!DATA) throw new Error('page: no lesson data loaded');
    var L = DATA;
    o = o || {};
    host.innerHTML =
      '<header class="lesson-head">' +
      '<p class="eyebrow">IELTS Speaking · Test ' + L.test + '</p>' +
      '<h1>' + esc(L.title) + '</h1>' +
      '</header>' +
      '<section class="theatre"><div class="stagehost"></div>' +
      '<div class="tphost"></div></section>' +
      '<section class="script"><h2>What was said</h2><ol class="lines"></ol></section>' +
      '<section class="practice"><h2>Your turn</h2>' +
      '<p class="lead">Answer each question yourself — type it, or press the microphone and say ' +
      'it. Then have it marked against the IELTS criteria.</p>' +
      '<div class="boxes"></div></section>';

    var stage = IELTS.stage(host.querySelector('.stagehost'),
                            { candidate: L.candidate, page: o.page || null });
    var lines = host.querySelector('.lines');

    L.script.forEach(function (l, i) {
      var li = el('li', 'line');
      li.innerHTML =
        '<button type="button" class="linebtn" data-play="' + i + '" ' +
        'aria-label="Play from line ' + (i + 1) + '">▶</button>' +
        '<span class="who ' + l.who + '">' + (l.who === 'examiner' ? 'Examiner' : 'Candidate') +
        '</span><span class="tx">' + esc(l.text) + '</span>' +
        '<span class="ar" dir="rtl" lang="ar">' + esc(l.ar || '') + '</span>';
      lines.appendChild(li);
    });

    function mark(i) {
      lines.querySelectorAll('.line').forEach(function (n, k) {
        n.classList.toggle('active', k === i);
      });
    }

    /* ---------------------------------------------------------------- the transport
     *
     * THE THREE BUTTONS THAT USED TO BE HERE are gone, and every one of them is still on the page:
     * "Play the whole part" is ▶, "Stop" is the same button pressed again, and عربي is one of the
     * two subtitle switches. What replaced them is the cybersecurity course's transport - play,
     * replay, the line before, the line after, loop one line, close up, your turn, three speeds,
     * two subtitle switches, a scrub with a tick per line and a transcript toggle - because the
     * owner asked for that player, and because a speaking course needs the repeat controls more
     * than the course it was built for does.
     *
     * TWO WRAPPERS, NOT TWO COPIES OF THE STATE. The transport calls stage.onLine and
     * stage.applySubPrefs; the transcript highlight and the transcript's own Arabic column hang off
     * those same two calls rather than off a second listener that can disagree with them. */
    var baseOnLine = stage.onLine;
    stage.onLine = function (i) { baseOnLine(i); mark(i); };
    var baseSubs = stage.applySubPrefs;
    stage.applySubPrefs = function () {
      baseSubs();
      host.classList.toggle('no-ar', !(IELTS.prefs && IELTS.prefs.subAr));
    };
    var tp = IELTS.transport(host.querySelector('.tphost'), stage, L.script, { root: host });

    lines.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-play]');
      if (!b) return;
      tp.go(Number(b.dataset.play));       /* the transcript and the transport are the same cursor */
    });

    /* ------------------------------------------------------------------ the practice boxes */
    var boxes = host.querySelector('.boxes');
    L.boxes.forEach(function (b, i) {
      b.part = L.part;
      var art = el('article', 'box');
      art.innerHTML =
        '<p class="qnum">Question ' + (i + 1) + (b.topic ? ' · ' + esc(b.topic) : '') + '</p>' +
        '<p class="q">' + esc(b.q) + '</p>' +
        (b.bullets ? '<ul class="cue">' + b.bullets.map(function (x) {
          return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '') +
        '<textarea rows="' + (b.long ? 10 : 4) + '" placeholder="' +
        (b.long ? 'Speak for up to two minutes, or write what you would say.'
                : 'Your answer…') + '"></textarea>' +
        '<div class="btn-row">' +
        '<button type="button" class="ghost" data-mic>🎙 Say it instead</button>' +
        '<button type="button" class="ghost" data-model>Show a band 7 answer</button>' +
        '<button type="button" class="primary" data-mark>Mark my answer</button>' +
        '</div>' +
        '<div class="model" hidden><p class="label">A band 7 answer</p><p>' + esc(b.model || '') +
        '</p>' + (b.why ? '<p class="why">' + esc(b.why) + '</p>' : '') + '</div>';
      boxes.appendChild(art);

      var ta = art.querySelector('textarea');
      b._getText = function () { return ta.value; };

      art.querySelector('[data-model]').onclick = function (e) {
        var m = art.querySelector('.model');
        m.hidden = !m.hidden;
        e.target.textContent = m.hidden ? 'Show a band 7 answer' : 'Hide the band 7 answer';
      };

      /* THE MICROPHONE. It writes into the same textarea the keyboard does, so there is exactly one
         answer per question however it was made. Where the browser has no recognition it says so
         instead of failing silently - a dead button is worse than an absent one. */
      var mic = art.querySelector('[data-mic]');
      var SR = w.SpeechRecognition || w.webkitSpeechRecognition;
      if (!SR) {
        mic.disabled = true;
        mic.title = 'This browser cannot turn speech into text. Chrome and Edge can.';
      } else {
        var rec = null;
        mic.onclick = function () {
          if (rec) { rec.stop(); return; }
          rec = new SR();
          rec.lang = 'en-GB';
          rec.continuous = true;
          rec.interimResults = true;
          var fixed = ta.value ? ta.value + ' ' : '';
          rec.onresult = function (ev) {
            var s = '';
            for (var k = ev.resultIndex; k < ev.results.length; k++) {
              s += ev.results[k][0].transcript;
              if (ev.results[k].isFinal) { fixed += ev.results[k][0].transcript + ' '; s = ''; }
            }
            ta.value = fixed + s;
          };
          rec.onend = function () { rec = null; mic.textContent = '🎙 Say it instead';
                                    mic.classList.remove('live'); };
          rec.start();
          mic.textContent = '■ Stop listening';
          mic.classList.add('live');
        };
      }

      /* ONE DIALOG PER QUESTION, AND IT IS BUILT FRESH EVERY TIME IT OPENS.
       *
       * The owner was specific: a new pop-up, or the same pop-up opened again, starts a new
       * conversation. The first version built the dialog once and kept it, reasoning that a
       * learner comparing a second attempt with the first would want the old marking. That
       * reasoning was mine, not his, and it also quietly kept the whole chat thread alive - so
       * question nine of an eight-question limit arrived in a conversation the learner thought
       * they had closed. Rebuilding is one line and it is what was asked for. */
      art.querySelector('[data-mark]').onclick = function () {
        var dlg = el('dialog', 'tutorbox');
        dlg.innerHTML =
          '<form method="dialog" class="xrow"><strong>Question ' + (i + 1) + '</strong>' +
          '<button class="ghost tiny" value="close">Close</button></form>' +
          '<blockquote>' + esc(b.q) + '</blockquote><div class="mount"></div>';
        document.body.appendChild(dlg);
        IELTS.tutor.mount(dlg.querySelector('.mount'), b);
        dlg.addEventListener('close', function () { dlg.remove(); });
        dlg.showModal();
      };
    });

    return { stage: stage, data: L };
  };
}(window));
