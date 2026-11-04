/* THE ROLE-PLAY THEATRE - a dialogue you can watch, and act in.

   A speaking task on paper is a wall: "Role-play: arrange shipping. Student A asks, Student B answers."
   A learner working alone has no partner, no model, and no idea what good sounds like. So every speaking
   task on these pages carries a worked sample conversation, and this opens it as a small stage.

   WHAT IT DOES. The people in the scene are drawn - the same seven figures the reading stage uses - and
   the one who is talking has their mouth moving and stands forward. You can play the whole scene, or any
   single line on its own, and you can take a part yourself: mute one actor and the scene stops at their
   lines and waits for you to say them before carrying on.

   THE VOICES ARE THE DEVICE'S, NOT RECORDINGS. A sample conversation is a model to copy, not lesson
   audio, and recording 51 of them would be ~400 clips of mp3 for lines a learner hears once. Each actor
   is cast by SEX from the cast list, so the man sounds like a man; where a device has only one voice of
   a sex, assets/v2/speak.js separates two such actors by pitch and rate instead.

   It is a dialog element, so Escape closes it and focus is trapped by the browser rather than by me. */
(function () {
  var A = window.AHB;
  if (!A) return;
  var esc = A.esc;

  function castOf(name) { return (A.castData || {})[name] || null; }

  /* The nth distinct speaker of each sex, so two men in a scene get different voices where the device
     has them, and a stable pitch where it does not. */
  function casting(script) {
    var seen = {}, out = {}, perSex = { m: 0, f: 0 };
    script.forEach(function (l) {
      if (seen[l.who]) return;
      seen[l.who] = 1;
      var c = castOf(l.who);
      var sex = (c && c.gender) || 'm';
      out[l.who] = { sex: sex, nth: perSex[sex]++ };
    });
    return out;
  }

  function build(ex, script, title) {
    var cast = casting(script);
    var names = Object.keys(cast);
    var people = names.map(function (n) {
      var c = castOf(n);
      return '<div class="actor" data-actor="' + esc(n) + '">' +
        (c ? c.svg : '<div class="nofacewarn">no drawing for ' + esc(n) + '</div>') +
        '<div class="who">' + esc(n) + '</div>' +
        '<button type="button" class="secondary tiny mine" data-mine="' + esc(n) + '"' +
        ' aria-pressed="false">I’ll say this part</button></div>';
    }).join('');

    var lines = script.map(function (l, i) {
      return '<li class="tline" data-line="' + i + '">' +
        '<button type="button" class="linebtn" data-play="' + i + '" aria-label="Play line ' + (i + 1) + '">' +
        '▶</button>' +
        '<span class="sp">' + esc(l.who) + '</span>' +
        '<span class="tx">' + esc(l.line) + '</span>' +
        (l.ar ? '<span class="ar" dir="rtl" lang="ar" hidden>' + esc(l.ar) + '</span>' : '') +
        '</li>';
    }).join('');

    var hasAr = script.some(function (l) { return l.ar; });
    return '<dialog class="theatre" aria-label="Sample conversation">' +
      '<form method="dialog" class="xrow"><strong>' + esc(title) + '</strong>' +
      '<button class="secondary tiny" value="close">Close</button></form>' +
      '<div class="tstage">' + people + '</div>' +
      '<div class="controls">' +
      '<button type="button" data-all>▶ Play the whole scene</button>' +
      '<button type="button" class="secondary" data-tstop>■ Stop</button>' +
      (hasAr ? '<button type="button" class="secondary" data-tar aria-pressed="false">عربي</button>' : '') +
      '<span class="small" data-tnote></span></div>' +
      '<ol class="tscript">' + lines + '</ol>' +
      '<p class="small">Play any line on its own with ▶. Choose “I’ll say this part” and the ' +
      'scene waits at that actor’s lines for you to say them, then carries on.</p>' +
      '</dialog>';
  }

  /** open(hostElement, script, title) - script is [{who, line, ar?}] */
  A.theatre = function (host, script, title) {
    if (!script || !script.length) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = build(host, script, title || 'Sample conversation');
    var dlg = wrap.firstChild;
    document.body.appendChild(dlg);

    var cast = casting(script);
    var mine = {};
    var cancel = null;
    var note = dlg.querySelector('[data-tnote]');
    var why = A.say ? A.say.why() : 'No speech engine.';
    if (why) note.textContent = why;

    function quiet() {
      dlg.querySelectorAll('.actor').forEach(function (a) { a.classList.remove('talk'); });
      dlg.querySelectorAll('.tline').forEach(function (l) { l.classList.remove('active'); });
    }
    function mark(i) {
      quiet();
      var li = dlg.querySelector('.tline[data-line="' + i + '"]');
      if (li) { li.classList.add('active'); li.scrollIntoView({ block: 'nearest' }); }
      var who = script[i].who;
      var a = dlg.querySelector('.actor[data-actor="' + CSS.escape(who) + '"]');
      if (a) a.classList.add('talk');
    }
    function stop() { if (cancel) cancel(); cancel = null; quiet(); }

    function playOne(i) {
      stop();
      mark(i);
      var c = cast[script[i].who] || { sex: 'm', nth: 0 };
      A.say.speak(script[i].line, { lang: 'en', sex: c.sex, nth: c.nth, onend: quiet });
    }

    function playAll() {
      stop();
      var i = 0;
      (function step() {
        if (i >= script.length) { quiet(); return; }
        var k = i++;
        mark(k);
        if (mine[script[k].who]) {
          /* The learner's own part: hold here until they say they have said it. */
          var li = dlg.querySelector('.tline[data-line="' + k + '"]');
          li.classList.add('yours');
          note.textContent = 'Your line — say it, then press Continue.';
          var go = document.createElement('button');
          go.type = 'button'; go.className = 'tiny'; go.textContent = 'Continue';
          go.onclick = function () { go.remove(); li.classList.remove('yours'); note.textContent = why || ''; step(); };
          li.appendChild(go);
          go.focus();
          return;
        }
        var c = cast[script[k].who] || { sex: 'm', nth: 0 };
        A.say.speak(script[k].line, {
          lang: 'en', sex: c.sex, nth: c.nth,
          onend: function () { step(); }
        });
      })();
      cancel = function () { A.say.stop(); i = script.length + 1; };
    }

    dlg.addEventListener('click', function (ev) {
      var t = ev.target;
      if (t.matches('[data-play]')) { playOne(Number(t.dataset.play)); return; }
      if (t.matches('[data-all]')) { playAll(); return; }
      if (t.matches('[data-tstop]')) { stop(); return; }
      if (t.matches('[data-mine]')) {
        var who = t.dataset.mine;
        mine[who] = !mine[who];
        t.setAttribute('aria-pressed', mine[who] ? 'true' : 'false');
        t.textContent = mine[who] ? 'You are ' + who : 'I’ll say this part';
        return;
      }
      if (t.matches('[data-tar]')) {
        var on = t.getAttribute('aria-pressed') === 'true';
        t.setAttribute('aria-pressed', on ? 'false' : 'true');
        dlg.querySelectorAll('.tline .ar').forEach(function (s) { s.hidden = on; });
        return;
      }
    });
    dlg.addEventListener('close', function () { stop(); dlg.remove(); });
    dlg.showModal();
    return dlg;
  };
})();
