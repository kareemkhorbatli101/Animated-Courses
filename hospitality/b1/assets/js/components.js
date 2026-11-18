/* ============================================================
   English for Accounting and Financial Management B1 — components.js
   Copied unchanged from the Cybersecurity B1 engine (namespace renamed only).
   Every exercise type. Each factory returns
   { check, reset, hint, show, getState, setState }.
   Every drag interaction also works by click-to-place and keyboard.
   ============================================================ */
(function (w, d) {
  'use strict';
  var HSP = w.HSP, U = HSP.util, EX = HSP.ex, art = HSP.art;
  var el = U.el, esc = U.esc;

  function mk(tag, cls, html) { return el(tag, cls, html); }
  function attempt(host) { HSP.attempted(host); }

  /* ------------------------------------------------------------
     progressLine — what is DONE, then what is left.

     The engine had nine different ways of saying "not enough yet" and not one of
     them mentioned the part the learner had finished. Measured on 60 cards of this
     course: a real half-finished answer got a demand and nothing else, with the
     work silently saved. This is the one wording, so it only has to be got right
     once. RESIDUALS FM-30 / F4b.
     ------------------------------------------------------------ */
  function progressLine(done, total, noun, ask) {
    var n = noun || 'answers';
    if (done <= 0) return ask;
    if (done >= total) return ask;
    return done + ' of ' + total + ' ' + n + ' saved \u2014 ' + ask;
  }
  HSP.progressLine = progressLine;

  /* shallow copy with defaults, so a card-level setting can fall
     through to each of its questions without mutating the data */
  function withDefaults(defs, o) {
    var out = {}, k;
    for (k in defs) if (defs.hasOwnProperty(k)) out[k] = defs[k];
    for (k in o) if (o.hasOwnProperty(k) && o[k] !== undefined) out[k] = o[k];
    return out;
  }

  /* Your own sentence has no recording — nothing written it yet. These few
     buttons use the device's built-in voice, and say so. */
  var DEVICE_VOICE = 'Read back in your device’s own voice — your sentence is new, so there is no recording of it.';

  /* ------------------------------------------------------------
     shared pick-up / drop machinery
     ------------------------------------------------------------ */
  function Picker(host) {
    var self = { held: null };
    self.setHeld = function (chip) {
      if (self.held) self.held.classList.remove('sel');
      self.held = chip || null;
      if (chip) chip.classList.add('sel');
    };
    self.wireChip = function (chip) {
      chip.setAttribute('draggable', 'true');
      chip.setAttribute('tabindex', '0');
      chip.setAttribute('role', 'button');
      chip.addEventListener('dragstart', function (e) {
        self.setHeld(chip); chip.classList.add('dragging');
        try { e.dataTransfer.setData('text/plain', chip.dataset.cid || ''); } catch (err) { }
      });
      chip.addEventListener('dragend', function () { chip.classList.remove('dragging'); });
      chip.addEventListener('click', function () { self.setHeld(self.held === chip ? null : chip); });
      chip.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); self.setHeld(self.held === chip ? null : chip); }
      });
    };
    self.wireDrop = function (zone, onDrop) {
      zone.addEventListener('dragover', function (e) { e.preventDefault(); zone.classList.add('over'); });
      zone.addEventListener('dragleave', function () { zone.classList.remove('over'); });
      zone.addEventListener('drop', function (e) {
        e.preventDefault(); zone.classList.remove('over');
        if (self.held) { onDrop(self.held); self.setHeld(null); }
      });
      zone.addEventListener('click', function () { if (self.held) { onDrop(self.held); self.setHeld(null); } });
      zone.setAttribute('tabindex', '0');
      zone.addEventListener('keydown', function (e) {
        if ((e.key === 'Enter' || e.key === ' ') && self.held) { e.preventDefault(); onDrop(self.held); self.setHeld(null); }
      });
    };
    return self;
  }

  function clearMarks(nodes, classes) {
    classes = classes || ['ok', 'no', 'miss', 'want', 'reveal'];
    for (var i = 0; i < nodes.length; i++) classes.forEach(function (c) { nodes[i].classList.remove(c); });
  }

  /* ------------------------------------------------------------
     the reasons panel

     A score alone tells a learner they were wrong, not why. Any
     activity that owns a reason for every item can hand them here
     and get one block, built the same way everywhere:

       rows = [{ t:'the item', ok:true|false|null, why:'because…',
                 given:true }]

     `ok:null` means the learner left it alone — neither right nor
     wrong, and said so rather than silently counted as wrong.
     The panel is created once and refilled, so repeated checks do
     not stack up copies of themselves.
     ------------------------------------------------------------ */
  function Reasons(host, title) {
    var box = mk('div', 'reasons');
    box.hidden = true;
    /* The card puts a slot after its button row for exactly this
       panel; see the note in core.js buildCard. Appending to `host`
       instead would drop 600–800px of prose ABOVE the buttons and
       push them off the screen the moment Check is pressed. The
       fallback keeps a component usable on its own, which is how
       the browser suites mount some of them. */
    var owner = host.closest ? host.closest('.card') : null;
    var slot = owner ? owner.querySelector('.card-reasons') : null;
    (slot || host).appendChild(box);
    return {
      el: box,
      hide: function () { box.hidden = true; box.innerHTML = ''; },
      fill: function (rows) {
        if (!rows || !rows.length) { box.hidden = true; return; }
        var h = '<h5>' + esc(title || 'Why each one goes where it goes') + '</h5>';
        rows.forEach(function (rw) {
          var mark = rw.given ? '•' : (rw.ok === true ? '✓' : (rw.ok === false ? '✗' : '–'));
          var cls = rw.given ? 'rs-given' : (rw.ok === true ? 'rs-ok' : (rw.ok === false ? 'rs-no' : 'rs-skip'));
          /* the item is built from data and is escaped; the reason is
             authored prose and takes light markup, the same way an
             instruction and a caption do */
          h += '<div class="rs-row ' + cls + '"><span class="rs-mark">' + mark + '</span>' +
            '<span class="rs-t">' + esc(rw.t) + '</span>' +
            '<span class="rs-why">' + (rw.why || '') + '</span></div>';
        });
        box.innerHTML = h;
        box.hidden = false;
      }
    };
  }

  /* ============================================================
     study — reference content with a "studied it" completion
     ============================================================ */
  EX.study = function (card, host, api) {
    if (card.html) host.appendChild(mk('div', 'rich', card.html));
    if (card.playable) {
      var row = mk('div', 'btn-row');
      card.playable.forEach(function (line) {
        var b = mk('button', 'btn btn-sm', art.icon('sound', 15) + esc(line.length > 34 ? line.slice(0, 32) + '…' : line));
        b.type = 'button';
        b.onclick = function () { HSP.say(line, 'course'); };
        row.appendChild(b);
      });
      host.appendChild(row);
    }
    /* THE COMPLETION BUTTON GOES IN THE FOOTER, where every other card keeps its
       controls. It used to sit in the body, which left the footer of these cards
       offering "Try again" and nothing else - the only control on a reference card
       being the one that un-completes it. 25 study cards and 10 quiz-less scene
       cards of this course. `footer` is read by core.js buildCard.
       RESIDUALS FM-30 / F7. */
    var done = mk('button', 'btn btn-accent', art.icon('check', 16) + (card.doneLabel || "I've studied this"));
    done.onclick = function () { attempt(host); api.complete('Noted. You can come back to this chart at any time.'); };
    return { reset: function () { api.clearVerdict(); }, footer: [done] };
  };

  function renderTable(tb) {
    var wrapT = mk('div', 'matrix-wrap');
    var h = '<table class="tbl' + (tb.grammar ? ' grammar' : '') + '">';
    if (tb.title) h += '<caption style="text-align:left;font-weight:700;color:var(--accent);padding:6px 0">' + esc(tb.title) + '</caption>';
    if (tb.head) h += '<thead><tr>' + tb.head.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead>';
    h += '<tbody>' + tb.rows.map(function (r) {
      return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table>';
    wrapT.innerHTML = h;
    return wrapT;
  }
  HSP.renderTable = renderTable;

  /* ============================================================
     discuss — open questions, commit then compare with a model
     ============================================================ */
  EX.discuss = function (card, host, api) {
    var fields = [];
    if (card.picture) {
      var pic = mk('div', 'diorama');
      pic.innerHTML = art.diorama(card.picture);
      pic.style.marginBottom = '14px';
      host.appendChild(pic);
    }
    card.questions.forEach(function (q, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      cEl.appendChild(mk('div', 'qt', esc(q.q)));
      var f = qField(withDefaults({ minWords: card.minWords }, q), cEl);
      fields.push(f);
      row.appendChild(cEl);
      host.appendChild(row);
    });
    if (card.ideas) {
      var ideas = mk('div', 'note');
      ideas.innerHTML = '<h4>Idea bank</h4>';
      var ul = mk('div', 'chips');
      card.ideas.forEach(function (x) { var cc = mk('span', 'chip', esc(x)); cc.style.cursor = 'default'; ul.appendChild(cc); });
      ideas.appendChild(ul);
      ideas.style.display = 'none';
      var tog = mk('button', 'btn btn-sm', art.icon('bulb', 15) + 'Show the idea bank');
      tog.type = 'button';
      tog.onclick = function () { ideas.style.display = ideas.style.display === 'none' ? 'block' : 'none'; };
      host.appendChild(tog); host.appendChild(ideas);
    }
    function state() { return fields.map(function (f) { return f.getState(); }); }
    var sels = fields.filter(function (f) { return f.kind === 'sel'; });
    return {
      check: function () {
        attempt(host);
        var selOk = 0, txtOk = 0, txtN = 0;
        fields.forEach(function (f) {
          if (f.kind === 'sel') { if (f.mark(false)) selOk++; }
          else { txtN++; if (f.mark()) txtOk++; }
        });
        api.save(state());
        /* A question whose answer is in the source is scored; one that
           asks for the learner's own view is only checked for effort. */
        if (sels.length) {
          if (selOk < sels.length) { api.result(selOk, sels.length); return; }
          if (txtN && txtOk < txtN) {
            api.verdict('part', 'The selections are right. Now answer the open question in at least ' + (card.minWords || 4) + ' words.');
            return;
          }
          api.result(sels.length, sels.length);
          return;
        }
        if (txtOk >= txtN) api.complete(card.okMsg || 'Good — your answers are saved.');
        else api.verdict('part', progressLine(txtOk, txtN, 'answers',
          'answer the ' + (txtN - txtOk) + ' still to go, in at least '
          + (card.minWords || 4) + ' words each.'));
      },
      reset: function () { fields.forEach(function (f) { f.reset(); }); api.save(state()); },
      hint: function () {
        for (var i = 0; i < fields.length; i++) {
          if (fields[i].kind === 'sel' && !fields[i].ok()) {
            var q = card.questions[i];
            HSP.toast(q.evidence ? 'Look for: ' + q.evidence : 'Rule out the option that claims more than the source says.', 4600);
            return;
          }
        }
        HSP.toast('Use the model answers to compare once you have written your own.');
      },
      /* THE 30 DISCUSSION CARDS OF THIS COURSE SHOWED NOTHING AT ALL.
         Measured 2026-11-17: every question on all 30 is authored with only its
         text - no model, no accept, no keys - so qField's show() found nothing to
         write and wrote nothing, and the card still announced "Shown. Press Try
         again to do it yourself." The model answer does exist on all 30: it is in
         `coach.example`, behind a different button further down the card. So the
         panel reads it from there, and the button that promises the answer is at
         last the button that has it. RESIDUALS FM-30 / F3. */
      show: function () {
        var rows = [];
        fields.forEach(function (f, i) {
          var r = f.revealRow ? f.revealRow() : null;
          if (r) { rows.push(r); return; }
          var ex = card.coach && card.coach.example;
          var model = Array.isArray(ex) ? ex[i] : (i === 0 ? ex : null);
          if (model) {
            rows.push({ t: model, mine: f.text ? f.text() : '',
                        ok: f.ok && String(f.text()).trim() ? f.ok() : null,
                        why: '' });
          }
        });
        if (!rows.length) {
          api.reveal({
            title: card.title || 'About this exercise',
            note: 'The book prints no single answer for this discussion — it is yours to '
                + 'make. Use the checklist below the exercise to judge your own answer.'
          });
          return;
        }
        api.reveal({
          title: 'A model answer, beside yours',
          note: 'This is the book’s own sample answer. Yours does not have to match '
              + 'it word for word — compare the ideas and the structure.',
          rows: rows
        });
      },
      coachText: function () {
        return fields.filter(function (f) { return f.kind === 'txt'; })
          .map(function (f) { return f.text(); }).filter(Boolean).join('\n\n');
      },
      getState: state,
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (fields[i]) fields[i].setState(v); }); }
    };
  };

  /* ============================================================
     "look again" — send the learner back to the source.

     A comprehension item that only reddens teaches nothing. Every
     item names where its answer lives and can jump there: a scene
     is cued to the exact line and played, a reading is scrolled to
     and flashed.
     ============================================================ */
  function lookAgain(it) {
    if (!it.jump && !it.evidence) return null;
    var b = mk('button', 'btn btn-sm btn-ghost', art.icon('eye', 15) + (it.jumpLabel || 'Look again'));
    b.type = 'button';
    b.title = it.evidence ? 'Where to look: ' + it.evidence : 'Go back to the source';
    b.onclick = function () {
      var j = it.jump;
      if (j && j.scene && HSP.cine && HSP.cine.cue && HSP.cine.cue(j.scene, j.line)) return;
      var target = null;
      if (j && j.card) target = d.getElementById(j.card);
      if (!target && j && j.sel) target = d.querySelector(j.sel);
      if (!target) target = d.querySelector('.reading');
      if (target) {
        try { target.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { }
        target.classList.add('flash');
        setTimeout(function () { target.classList.remove('flash'); }, 1400);
      }
      if (it.evidence) HSP.toast('Look for: ' + it.evidence, 4200);
    };
    return b;
  }
  /* buildCard uses the same control for a card-level `seeAlso` */
  HSP.ui.lookAgain = lookAgain;

  /* ------------------------------------------------------------
     workedExample — the whole task, done once, in a panel.

     A learner who has never seen the finished thing does not know
     how much detail is enough. This shows one: the research filled
     in, the checklist ticked with what satisfied each tick, the
     report written out, and the report read aloud.

     It is NOT an answer key, and `about` has to say so and say which
     exercises it belongs to — check-refs fails the card otherwise.
     The learner's own answer is about where THEY live, so a key is
     impossible in principle, and saying that plainly is the point.
     ------------------------------------------------------------ */
  HSP.ui.workedExample = function (w) {
    var box = mk('div', 'wx');

    /* 1 — what this is, and what it has to do with the page */
    box.appendChild(mk('div', 'wx-about', w.about));

    /* 2 — the picture, filled in */
    if (w.visual) box.appendChild(HSP.renderVisual(w.visual));

    /* 3 — what the research turned up, against the card's own list */
    if (w.checklist && w.checklist.length) {
      box.appendChild(mk('h5', 'wx-h', esc(w.checklistTitle || 'What the research found')));
      var ul = mk('div', 'wx-check');
      w.checklist.forEach(function (it) {
        var row = mk('div', 'wxc-row');
        row.innerHTML = '<span class="wxc-mark">✓</span><span><b>' + esc(it.t) + '</b>' +
          (it.found ? '<span class="wxc-found">' + it.found + '</span>' : '') + '</span>';
        ul.appendChild(row);
      });
      box.appendChild(ul);
    }

    /* 4 — the table as the learner would have filled it */
    if (w.table) {
      /* one heading, in the panel's own style — renderTable would
         otherwise print the title a second time above the grid */
      box.appendChild(mk('h5', 'wx-h', esc(w.table.title || 'The table, filled in')));
      box.appendChild(HSP.renderTable(withDefaults(w.table, { title: null })));
    }

    /* 5 — the report, and hearing it said out loud */
    if (w.report) {
      box.appendChild(mk('h5', 'wx-h', esc(w.reportLabel || 'The report to the class')));
      var rep = mk('div', 'reading wx-report');
      rep.innerHTML = '<p>' + esc(w.report) + '</p>';
      box.appendChild(rep);

      /* Play, Pause and Stop. Thirty seconds of speech is long
         enough that a learner needs to hold it still and pick it up
         again — Stop alone means starting over. */
      var row2 = mk('div', 'btn-row');
      var play = mk('button', 'btn btn-accent', art.icon('sound', 16) + (w.say || 'Hear it read aloud'));
      var pause = mk('button', 'btn btn-sm', art.icon('pause', 15) + 'Pause');
      var stop = mk('button', 'btn btn-sm btn-ghost', art.icon('x', 15) + 'Stop');
      [play, pause, stop].forEach(function (b) { b.type = 'button'; });

      function idle() {
        pause.disabled = true; stop.disabled = true;
        pause.innerHTML = art.icon('pause', 15) + 'Pause';
      }
      function live() { pause.disabled = false; stop.disabled = false; }
      idle();

      play.onclick = function () {
        /* the recording if there is one, the device voice if not —
           HSP.say falls back on its own */
        var V = HSP.voiceMap || {};
        var v = null;
        if (w.voice && w.voice.scene) v = ((V.scene || {})[w.voice.scene] || {})[w.voice.who];
        else if (w.voice && w.voice.key) v = V[w.voice.key];
        HSP.say(w.report, v ? null : 'course', {
          voice: v, fallback: w.fallback || 'f', onend: idle
        });
        live();
      };
      pause.onclick = function () {
        var nowPlaying = HSP.togglePause();
        pause.innerHTML = nowPlaying ? art.icon('pause', 15) + 'Pause' : art.icon('play', 15) + 'Resume';
      };
      stop.onclick = function () { HSP.stopSpeak(); idle(); };

      row2.appendChild(play);
      row2.appendChild(pause);
      row2.appendChild(stop);
      box.appendChild(row2);
      if (w.listenFor) box.appendChild(mk('div', 'wc wx-listen', w.listenFor));
    }

    /* 6 — back to the learner's own version */
    if (w.after) box.appendChild(mk('div', 'note warm wx-after', w.after));

    return HSP.modal({ title: w.title || 'A finished example', node: box, wide: true });
  };

  /* ============================================================
     qField — one question, rendered the right way.

     Options present means the answer is in the source, so it is a
     selection and it is marked exactly. No options means the answer
     is the learner's own, so it is a text box and it is scaffolded
     instead of scored.
     ============================================================ */
  function qField(q, cEl) {
    if (q.options) {
      var wdg = HSP.ui.radioCards({
        options: q.options.map(function (o, i) { return { v: i, label: o.t, why: o.why, ok: !!o.ok }; }),
        label: q.q
      });
      cEl.appendChild(wdg.el);
      var la = lookAgain(q);
      if (la) {
        var tr = mk('div', 'btn-row');
        tr.style.marginTop = '4px';
        tr.appendChild(la);
        cEl.appendChild(tr);
      }
      var want = -1;
      q.options.forEach(function (o, i) { if (o.ok) want = i; });
      return {
        kind: 'sel',
        text: function () { var v = wdg.get(); return v === null ? '' : q.options[v].t; },
        ok: function () { return wdg.get() === want; },
        mark: function (reveal) {
          var got = wdg.get(), map = {};
          if (got !== null) map[got] = (got === want ? 'ok' : 'no');
          if (reveal) map[want] = 'ok';
          wdg.mark(map);
          wdg.showWhy(got === null ? (reveal ? want : null) : got);
          return got === want;
        },
        reset: function () { if (wdg.get() !== want) wdg.reset(); else wdg.hideWhy(); },
        /* REPORTS the answer instead of selecting it. `show()` used to call
           `wdg.set(want)`, which makes the right option the learner's own choice -
           so the next press of Check marked the card correct for an answer they
           never gave. Now it hands a row up to the card, which puts it in the
           panel. The learner's selection is not touched. RESIDUALS FM-30. */
        revealRow: function () {
          var got = wdg.get();
          return {
            t: want >= 0 ? q.options[want].t : '',
            mine: got === null || got === undefined ? '' : q.options[got].t,
            ok: (got === null || got === undefined) ? null : got === want,
            why: (want >= 0 && q.options[want].why) || q.evidence || ''
          };
        },
        getState: function () { return wdg.get(); },
        setState: function (v) { if (v !== null && v !== undefined) wdg.set(v); }
      };
    }
    var inp = mk('textarea', 'ta');
    inp.rows = q.rows || 2;
    inp.placeholder = q.placeholder || 'Write your answer…';
    cEl.appendChild(inp);
    if (q.model) cEl.appendChild(HSP.ui.modelBox(q.model));
    return {
      kind: 'txt',
      text: function () { return inp.value; },
      ok: function () {
        if (q.keys) return U.mentions(inp.value, q.keys, q.need || 1);
        return U.words(inp.value) >= (q.minWords || 4);
      },
      /* A WORD, NOT ONLY A COLOUR.
         This used to set `borderColor` and nothing else, and it is the only
         per-item feedback on the 30 discussion cards of this course - so which
         answer was short was communicated by the colour of a box and by nothing
         a screen reader could say. Measured 2026-11-17. RESIDUALS FM-30 / F18. */
      mark: function () {
        var k = this.ok();
        inp.style.borderColor = k ? 'var(--ok)' : 'var(--no)';
        if (!inp._fb) {
          inp._fb = mk('div', 'q-fb');
          inp.insertAdjacentElement('afterend', inp._fb);
        }
        var short = q.keys ? 'Mention the key points the source gives.'
          : 'A little short — aim for at least ' + (q.minWords || 4) + ' words.';
        inp._fb.className = 'q-fb ' + (k ? 'is-ok' : 'is-no');
        inp._fb.textContent = k ? 'Answered.' : short;
        inp.setAttribute('aria-describedby', inp._fb.id
          || (inp._fb.id = 'qfb' + Math.random().toString(36).slice(2, 8)));
        return k;
      },
      reset: function () {
        inp.style.borderColor = '';
        if (inp._fb) { inp._fb.textContent = ''; inp._fb.className = 'q-fb'; }
      },
      /* REPORTS the answer instead of typing it into the learner's box.
         `show()` used to do `inp.value = q.model`, which overwrote whatever the
         learner had written with no way back. The three places an answer may be
         authored are unchanged - a model, an accept list, or a set of keys, in
         that order - and `null` where there is none, which is what lets a card
         say "the book prints no answer for this one" instead of pretending.
         RESIDUALS FM-30. */
      revealRow: function () {
        var t = null;
        if (q.model) t = q.model;
        else {
          var a = Array.isArray(q.accept) ? q.accept[0] : q.accept;
          if (a) t = String(a);
          else if (Array.isArray(q.keys) && q.keys.length) t = q.keys.join(', ');
        }
        if (t === null) return null;
        return {
          t: t, mine: inp.value,
          ok: String(inp.value).trim() ? this.ok() : null,
          why: q.evidence ? 'Where to look: ' + esc(q.evidence) : ''
        };
      },
      getState: function () { return inp.value; },
      setState: function (v) { if (typeof v === 'string') inp.value = v; }
    };
  }

  /* ============================================================
     quizset — several selection questions on one card.

     This is the only instrument allowed for an answer that lives in
     a reading, a recording or a picture. Free text would have to be
     marked by keyword, which lets a wrong answer through and fails a
     right one; a selection is marked exactly.

     Long options are stacked radio cards, because a native <select>
     truncates them. A compact set may use the wrapped listbox.
     ============================================================ */
  EX.quizset = function (card, host, api) {
    var rows = [];
    card.items.forEach(function (it, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      var qt = mk('div', 'qt', esc(it.q));
      cEl.appendChild(qt);
      if (it.say !== false && card.say) {
        var sp = mk('button', 'btn btn-sm btn-ghost', art.icon('sound', 15) + 'Hear the question');
        sp.type = 'button';
        sp.onclick = function () { HSP.say(it.q, 'course'); };
        cEl.appendChild(sp);
      }

      var opts = it.options;
      var longest = 0;
      it.options.forEach(function (o) { if (String(o.t).length > longest) longest = String(o.t).length; });
      var useDrop = (it.display || card.display) === 'drop' ||
        ((it.display || card.display) !== 'cards' && longest <= 26);

      var widget;
      if (useDrop) {
        widget = HSP.ui.pick({
          options: opts.map(function (o, oi) { return { v: oi, label: o.t }; }),
          placeholder: it.placeholder || 'Choose the answer…',
          label: it.q
        });
      } else {
        widget = HSP.ui.radioCards({
          options: opts.map(function (o, oi) { return { v: oi, label: o.t, why: o.why, ok: !!o.ok }; }),
          label: it.q
        });
      }
      cEl.appendChild(widget.el);

      var tools = mk('div', 'btn-row');
      tools.style.marginTop = '4px';
      var la = lookAgain(it);
      if (la) tools.appendChild(la);
      if (tools.childNodes.length) cEl.appendChild(tools);

      var ev = mk('div', 'wc');
      ev.style.marginTop = '4px';
      ev.hidden = true;
      cEl.appendChild(ev);

      row.appendChild(cEl);
      host.appendChild(row);
      rows.push({ it: it, w: widget, drop: useDrop, ev: ev });
    });

    function correctIx(it) {
      for (var i = 0; i < it.options.length; i++) if (it.options[i].ok) return i;
      return -1;
    }
    function markRow(r, reveal) {
      var want = correctIx(r.it), got = r.w.get();
      var ok = got !== null && got === want;
      if (r.drop) {
        r.w.mark(got === null ? null : (ok ? 'ok' : 'no'));
        var chosen = got === null ? null : r.it.options[got];
        r.ev.hidden = false;
        r.ev.innerHTML = ok
          ? '<b style="color:var(--ok)">Right.</b> ' + esc(r.it.options[want].why || '')
          : (got === null
            ? 'Choose an answer.'
            : '<b style="color:var(--no)">Not this one.</b> ' + esc((chosen && chosen.why) || '') +
            (reveal ? ' <b>The answer is:</b> ' + esc(r.it.options[want].t) : ''));
      } else {
        var map = {};
        if (got !== null) map[got] = ok ? 'ok' : 'no';
        if (reveal || ok) map[want] = 'ok';
        r.w.mark(map);
        r.w.showWhy(got === null ? (reveal ? want : null) : got);
        if (!ok && got !== null && reveal) r.w.showWhy('all');
        r.ev.hidden = true;
      }
      return ok;
    }

    return {
      check: function () {
        attempt(host);
        var n = 0;
        rows.forEach(function (r) { if (markRow(r, false)) n++; });
        api.save(rows.map(function (r) { return r.w.get(); }));
        api.result(n, rows.length, rows.filter(function (r) {
          var g = r.w.get(); return g !== null && g !== undefined;
        }).length);
      },
      reset: function () {
        rows.forEach(function (r) {
          if (r.w.get() !== correctIx(r.it)) r.w.reset();
          else if (!r.drop) r.w.hideWhy();
          r.ev.hidden = true;
        });
      },
      hint: function () {
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          if (r.w.get() !== correctIx(r.it)) {
            if (r.it.evidence) { HSP.toast('Look for: ' + r.it.evidence, 4200); }
            else HSP.toast('Re-read the source and eliminate the option that says too much.', 4200);
            var la2 = r.ev;
            la2.hidden = false;
            la2.textContent = r.it.evidence ? 'Where to look: ' + r.it.evidence : '';
            return;
          }
        }
        HSP.toast('Every answer already looks right.');
      },
      /* It used to call `r.w.set(correctIx(r.it))`, which makes the right option the
         learner's own selection - so the next press of Check marked the whole card
         correct for answers they never chose. RESIDUALS FM-30. */
      show: function () {
        api.reveal({
          title: 'The answers, beside yours',
          rows: rows.map(function (r) {
            var want = correctIx(r.it), got = r.w.get();
            return {
              t: r.it.options[want] ? r.it.options[want].t : '',
              mine: (got === null || got === undefined) ? '' : r.it.options[got].t,
              ok: (got === null || got === undefined) ? null : got === want,
              why: (r.it.options[want] && r.it.options[want].why) || r.it.evidence || ''
            };
          })
        });
      },
      getState: function () { return rows.map(function (r) { return r.w.get(); }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (rows[i] && v !== null) rows[i].w.set(v); }); }
    };
  };

  /* ============================================================
     picker — one or more wrapped dropdowns that must agree, plus an
     optional reason box. Used where the choice is checkable but the
     reason behind it is the learner's own.
     ============================================================ */
  EX.picker = function (card, host, api) {
    var slots = [], ta = null;
    var frame = mk('div', 'qt');
    frame.style.lineHeight = '2.4';
    frame.innerHTML = String(card.frame).replace(/\[\[(\w+)\]\]/g, function (m, k) {
      return '<span class="rg-slot" data-pk="' + k + '"></span>';
    });
    host.appendChild(frame);

    Object.keys(card.banks).forEach(function (k) {
      var bank = card.banks[k];
      var p = HSP.ui.pick({
        options: bank.items.map(function (x) { return { v: x, label: x }; }),
        placeholder: bank.label || 'Choose…',
        label: bank.label || ('blank ' + k),
        inline: !!bank.inline
      });
      var slot = frame.querySelector('.rg-slot[data-pk="' + k + '"]');
      if (slot) slot.appendChild(p.el);
      else host.appendChild(p.el);
      slots.push({ k: k, p: p, bank: bank });
    });

    if (card.why) {
      var lbl = mk('div', 'qt', esc(card.why.q || 'Why?'));
      lbl.style.marginTop = '12px';
      host.appendChild(lbl);
      ta = mk('textarea', 'ta');
      ta.rows = 2;
      ta.placeholder = card.why.placeholder || 'Because…';
      host.appendChild(ta);
      if (card.why.model) host.appendChild(HSP.ui.modelBox(card.why.model));
    }

    function state() {
      return { picks: slots.map(function (s) { return s.p.get(); }), why: ta ? ta.value : '' };
    }
    return {
      check: function () {
        attempt(host);
        var n = 0, total = slots.length;
        slots.forEach(function (s) {
          var want = card.answers[s.k];
          var ok = want === undefined ? !!s.p.get()
            : U.accepts(s.p.get(), Array.isArray(want) ? want : [want]);
          s.p.mark(s.p.get() === null ? null : (ok ? 'ok' : 'no'));
          if (ok) n++;
        });
        var need = card.why ? (card.why.minWords || 6) : 0;
        var whyOk = !card.why || U.words(ta.value) >= need;
        api.save(state());
        if (n === total && whyOk) { api.result(total, total); return; }
        if (n === total && !whyOk) { api.verdict('part', 'Good choice. Now say why, in at least ' + need + ' words.'); return; }
        api.result(n, total);
      },
      reset: function () {
        slots.forEach(function (s) {
          var want = card.answers[s.k];
          if (want === undefined || !U.accepts(s.p.get(), Array.isArray(want) ? want : [want])) s.p.reset();
        });
      },
      hint: function () {
        if (card.hintText) { HSP.toast(card.hintText, 4200); return; }
        HSP.toast('Look at the chart above — which tier does your choice sit in?', 4200);
      },
      show: function () {
        /* ONLY THE SLOTS THE AUTHOR ANSWERED. A picker card may leave slots for the
           learner's own choice, and a row with an empty answer column is exactly how
           the gate recognises a component that cannot read its own key - so emitting
           one for a slot that was never keyed made a correct card look broken. */
        var keyedRows = [], mine = 0;
        slots.forEach(function (s) {
          var want = card.answers[s.k];
          want = Array.isArray(want) ? want[0] : want;
          var got = s.p.get ? s.p.get() : undefined;
          if (want === undefined || want === null || want === '') { mine++; return; }
          keyedRows.push({ t: String(want),
                           mine: got === undefined || got === null ? '' : String(got),
                           ok: (got === undefined || got === null) ? null : got === want,
                           why: '' });
        });
        api.reveal({
          title: 'Where each one belongs',
          note: 'You still have to say why.'
              + (mine ? '  ' + mine + (mine === 1 ? ' slot is' : ' slots are')
                 + ' yours to choose, so the book gives no answer for '
                 + (mine === 1 ? 'it' : 'them') + '.' : ''),
          rows: keyedRows
        });
      },
      getState: state,
      setState: function (s) {
        if (!s) return;
        if (Array.isArray(s.picks)) s.picks.forEach(function (v, i) { if (slots[i] && v) slots[i].p.set(v); });
        if (ta && s.why) ta.value = s.why;
      }
    };
  };

  /* ============================================================
     shortanswer — RETIRED. Do not use on new cards.

     It marks a prose answer by keyword, which lets a wrong answer
     through and fails a right one, and the learner cannot tell
     which happened. Anything whose answer is in a reading, a
     recording or a picture belongs in `quizset`.
     tools/check-deterministic.cjs fails the build if a card uses
     this type. It is kept only so old saved progress still loads.
     ============================================================ */
  EX.shortanswer = function (card, host, api) {
    if (card.passage) host.appendChild(passageNode(card.passage));
    var inputs = [];
    card.items.forEach(function (it, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      cEl.appendChild(mk('div', 'qt', esc(it.q)));
      var inp = mk('input', 'inp');
      inp.type = 'text';
      inp.placeholder = it.placeholder || 'Your answer';
      inputs.push(inp);
      cEl.appendChild(inp);
      var ev = mk('div', 'wc');
      ev.style.marginTop = '5px';
      ev.style.display = 'none';
      cEl.appendChild(ev);
      it._ev = ev;
      row.appendChild(cEl);
      host.appendChild(row);
    });
    return {
      check: function () {
        attempt(host);
        var n = 0;
        card.items.forEach(function (it, i) {
          var ok = U.accepts(inputs[i].value, it.accept) ||
            (it.keys && U.mentions(inputs[i].value, it.keys, it.need || it.keys.length));
          inputs[i].classList.remove('ok', 'no');
          inputs[i].style.borderColor = ok ? 'var(--ok)' : 'var(--no)';
          it._ev.style.display = ok ? 'none' : 'block';
          it._ev.textContent = ok ? '' : (it.evidence ? 'Look again: ' + it.evidence : '');
          if (ok) n++;
        });
        api.save(inputs.map(function (x) { return x.value; }));
        api.result(n, card.items.length,
          inputs.filter(function (x) { return String(x.value).trim(); }).length);
      },
      reset: function () {
        inputs.forEach(function (x, i) {
          if (!U.accepts(x.value, card.items[i].accept)) { x.value = ''; }
          x.style.borderColor = '';
          card.items[i]._ev.style.display = 'none';
        });
      },
      hint: function () {
        for (var i = 0; i < card.items.length; i++) {
          if (!U.accepts(inputs[i].value, card.items[i].accept)) {
            var a = Array.isArray(card.items[i].accept) ? card.items[i].accept[0] : card.items[i].accept;
            inputs[i].placeholder = 'Starts with: "' + String(a).slice(0, Math.max(2, Math.ceil(String(a).length / 3))) + '…"';
            inputs[i].focus();
            return;
          }
        }
        HSP.toast('All answers already look right.');
      },
      /* It used to type the model answer over the learner's sentence, in every box.
         Measured 2026-11-17: 5 cards of this course, each replacing what the learner
         had written with no way back. RESIDUALS FM-30. */
      show: function () {
        api.reveal({
          title: 'The answers, beside yours',
          rows: card.items.map(function (it, i) {
            var want = Array.isArray(it.accept) ? it.accept[0] : it.accept;
            return {
              t: want === undefined || want === null ? '' : String(want),
              mine: inputs[i].value,
              ok: String(inputs[i].value).trim()
                  ? (U.accepts(inputs[i].value, it.accept) ||
                     !!(it.keys && U.mentions(inputs[i].value, it.keys, it.need || it.keys.length)))
                  : null,
              why: it.evidence ? 'Where to look: ' + esc(it.evidence) : ''
            };
          })
        });
      },
      getState: function () { return inputs.map(function (x) { return x.value; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (inputs[i]) inputs[i].value = v; }); }
    };
  };

  /* ------------------------------------------------------------
     passageNode — a text the learner reads, and now hears.

     It used to read everything back in the flat device voice. A
     passage can now name a recorded voice instead, and then each
     paragraph gets its own play button: the whole point of a
     three-part entry is that you can take one part at a time, and
     in the ordering exercise you have to.

       say: { voice:'en-US-AriaNeural' }     // or
       say: { scene:'u1-journal', who:'writer' }
     ------------------------------------------------------------ */
  function castVoice(say) {
    if (!say) return null;
    var V = HSP.voiceMap || {};
    if (say.voice) return say.voice;
    if (say.scene) return ((V.scene || {})[say.scene] || {})[say.who];
    if (say.key) return V[say.key];
    return null;
  }
  HSP.castVoice = castVoice;

  function plain(s) { return String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); }

  function passageNode(p) {
    var box = mk('div', 'reading ' + (p.style || ''));
    var h = '';
    if (p.title) h += '<h4>' + esc(p.title) + '</h4>';
    (p.paras || []).forEach(function (t, i) { h += '<p data-pi="' + i + '">' + t + '</p>'; });
    if (p.html) h += p.html;
    box.innerHTML = h;

    var voice = castVoice(p.say);

    /* one small play button per paragraph, inside the text */
    if (voice && (p.paras || []).length > 1) {
      var ps = box.querySelectorAll('p[data-pi]');
      for (var i = 0; i < ps.length; i++) {
        (function (el, ix) {
          var b = mk('button', 'para-say no-print', art.icon('sound', 14));
          b.type = 'button';
          b.title = 'Hear paragraph ' + (ix + 1);
          b.setAttribute('aria-label', 'Hear paragraph ' + (ix + 1));
          b.onclick = function () { HSP.say(plain(p.paras[ix]), null, { voice: voice, fallback: p.voice || 'f' }); };
          el.appendChild(b);
        })(ps[i], i);
      }
    }

    if (p.speak !== false) {
      var row = mk('div', 'btn-row no-print');
      row.style.marginTop = '10px';
      var b2 = mk('button', 'btn btn-sm', art.icon('sound', 15) + (p.listenLabel || 'Listen to the whole entry'));
      b2.type = 'button';
      /* paragraph by paragraph, so the recordings line up with the
         text rather than one long clip that cannot be re-found */
      b2.onclick = function () {
        var k = 0, list = (p.paras || []).map(plain);
        (function next() {
          if (k >= list.length) return;
          var txt = list[k++];
          if (voice) HSP.say(txt, null, { voice: voice, fallback: p.voice || 'f', onend: next });
          else HSP.speak(txt, { voice: p.voice || 'f', onend: next });
        })();
      };
      row.appendChild(b2);
      var st = mk('button', 'btn btn-sm btn-ghost', art.icon('x', 15) + 'Stop');
      st.type = 'button';
      st.onclick = function () { HSP.stopSpeak(); };
      row.appendChild(st);

      /* …and, where there is an animated version, a way into it */
      if (p.watch && p.watch.scene) {
        var wb = mk('button', 'btn btn-sm btn-accent', art.icon('play', 15) + (p.watch.label || 'Watch it'));
        wb.type = 'button';
        wb.onclick = function () { HSP.ui.watchScene(p.watch); };
        row.appendChild(wb);
      }
      box.appendChild(row);
    }
    return box;
  }
  HSP.passageNode = passageNode;

  /* the animated version of a passage, in a panel of its own */
  HSP.ui.watchScene = function (wch) {
    var holder = mk('div');
    if (wch.lead) holder.appendChild(mk('div', 'wc', wch.lead));
    var stage = HSP.sceneInline(wch.scene, holder);
    holder.appendChild(stage);
    var m = HSP.modal({
      title: wch.title || 'Watch it',
      node: holder,
      wide: true,
      onClose: function () {
        /* the scene runs its own audio, which HSP.stopSpeak cannot
           reach — stop the player itself or it plays on unseen */
        try { var c = HSP.cine && HSP.cine.find && HSP.cine.find(wch.scene); if (c && c.stop) c.stop(); } catch (e) { }
      }
    });
    return m;
  };

  /* ------------------------------------------------------------
     sourcePanel — carry the material onto the card.

     A card that says "use the model journal entry in 1B" where 1B
     is on the previous page is asking about something it does not
     show. This renders that material in a panel the learner opens
     without leaving the page: the passage of another card, a scene
     transcript, or a short piece of text written here.

     A passage on another page only resolves if this page's shell
     loads that data file. check-refs.cjs enforces it, because the
     failure is invisible — the panel is simply empty.
     ------------------------------------------------------------ */
  HSP.sourcePanel = function (src) {
    var box = mk('details', 'src');
    var label = src.label || 'The text this exercise is about';
    box.innerHTML = '<summary>' + art.icon('eye', 15) + esc(label) + '</summary>';
    var inner = mk('div', 'src-body');

    if (src.passage) {
      var pg = HSP.pages[src.page || ''] || null;
      var target = pg && (pg.cards || []).filter(function (c) { return c.id === src.passage; })[0];
      if (target && target.passage) inner.appendChild(passageNode(withDefaults(target.passage, { speak: false })));
      else inner.appendChild(mk('div', 'wc', 'This text could not be loaded on this page.'));
    } else if (src.scene) {
      var sc = HSP.scenes[src.scene];
      if (sc) {
        var t = mk('div', 'reading');
        t.innerHTML = sc.lines.map(function (l) {
          var who = (sc.cast[l.who] || {}).name || l.who;
          return '<p><b>' + esc(who) + ':</b> ' + esc(l.en) + '</p>';
        }).join('');
        inner.appendChild(t);
      }
    } else if (src.html) {
      var hb = mk('div', 'reading');
      hb.innerHTML = src.html;
      inner.appendChild(hb);
    } else if (src.text) {
      var tb = mk('div', 'reading');
      tb.innerHTML = String(src.text).split('\n').map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
      inner.appendChild(tb);
    }
    if (src.note) inner.appendChild(mk('div', 'wc', src.note));
    box.appendChild(inner);
    if (src.open) box.open = true;
    return box;
  };

  /* ============================================================
     dragmatch — chips onto targets (list or picture hotspots)
     ============================================================ */
  EX.dragmatch = function (card, host, api) {
    var pick = Picker(host);
    var placed = {};           /* targetId -> chipId */
    var pool = mk('div', 'chips');
    var chipEls = {};

    var sceneBox = null, hsEls = {};
    if (card.scene) {
      sceneBox = mk('div', 'diorama');
      sceneBox.innerHTML = art.diorama(card.scene);
      sceneBox.style.marginBottom = '14px';
      host.appendChild(sceneBox);
    }

    var pics = card.targets.some(function (tg) { return tg.art; });
    var targetsWrap = mk('div', 'drops' + (pics ? ' pics' : '') + (card.cols ? ' cols-' + card.cols : ' cols-3'));
    card.targets.forEach(function (tg) {
      var zone = mk('div', 'drop' + (tg.art ? ' pic' : ''));
      zone.dataset.tid = tg.id;
      /* With a picture the drawing IS the prompt: printing a sentence
         describing it underneath would answer the question. `label`
         then only has to reach a screen reader. */
      zone.innerHTML = (tg.num !== undefined ? '<span class="num">' + esc(tg.num) + '</span>' : '') +
        (tg.art ? '<span class="pz-art">' + art.spot(tg.art) + '</span>'
          : '<span class="lbl">' + esc(tg.label) + '</span>') +
        '<span class="slot">drop here</span>';
      zone.setAttribute('aria-label', 'Picture ' + (tg.num !== undefined ? tg.num : '') + ': ' + tg.label);
      pick.wireDrop(zone, function (chip) { place(tg.id, chip.dataset.cid); });
      targetsWrap.appendChild(zone);
      tg._zone = zone;
      if (card.scene && tg.at) {
        var hs = mk('button', 'hs pulse', esc(tg.num !== undefined ? tg.num : '?'));
        hs.type = 'button';
        hs.style.left = tg.at[0] + '%';
        hs.style.top = tg.at[1] + '%';
        hs.title = 'Position ' + (tg.num !== undefined ? tg.num : '');
        hs.onclick = function () {
          if (pick.held) { place(tg.id, pick.held.dataset.cid); pick.setHeld(null); }
          else { zone.scrollIntoView({ block: 'center', behavior: 'smooth' }); zone.classList.add('over'); setTimeout(function () { zone.classList.remove('over'); }, 900); }
        };
        sceneBox.appendChild(hs);
        hsEls[tg.id] = hs;
      }
    });

    card.chips.forEach(function (ch) {
      var c = mk('span', 'chip', esc(ch.label));
      c.dataset.cid = ch.id;
      pick.wireChip(c);
      pool.appendChild(c);
      chipEls[ch.id] = c;
    });

    host.appendChild(mk('div', 'wc', card.poolLabel || 'Drag a word to its place — or click the word, then click where it goes.'));
    host.appendChild(pool);
    host.appendChild(targetsWrap);

    function place(tid, cid) {
      for (var k in placed) if (placed[k] === cid) { unplace(k); }
      if (placed[tid]) unplace(tid);
      placed[tid] = cid;
      var tg = find(tid);
      tg._zone.classList.add('filled');
      tg._zone.querySelector('.slot').textContent = chipEls[cid].textContent;
      chipEls[cid].classList.add('used');
      if (hsEls[tid]) hsEls[tid].classList.remove('pulse');
      api.save(placed);
    }
    function unplace(tid) {
      var cid = placed[tid];
      if (!cid) return;
      delete placed[tid];
      var tg = find(tid);
      tg._zone.classList.remove('filled', 'ok', 'no');
      tg._zone.querySelector('.slot').textContent = 'drop here';
      chipEls[cid].classList.remove('used', 'ok', 'no');
      if (hsEls[tid]) { hsEls[tid].classList.remove('ok'); hsEls[tid].classList.add('pulse'); }
    }
    function find(tid) { for (var i = 0; i < card.targets.length; i++) if (card.targets[i].id === tid) return card.targets[i]; }

    /* clicking a filled zone takes the chip back out */
    targetsWrap.addEventListener('dblclick', function (e) {
      var z = e.target.closest('.drop'); if (z) unplace(z.dataset.tid);
    });

    if (card.given) for (var g in card.given) place(g, card.given[g]);

    var labelOfChip = {};
    card.chips.forEach(function (c) { labelOfChip[c.id] = c.label; });
    var reasons = card.targets.some(function (t) { return t.why; })
      ? Reasons(host, card.whyTitle || 'What each picture shows') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(card.targets.map(function (tg) {
        return {
          t: (tg.num !== undefined ? tg.num + '. ' : '') + labelOfChip[tg.accept],
          given: !!(card.given && card.given[tg.id] !== undefined),
          ok: !placed[tg.id] ? null : placed[tg.id] === tg.accept,
          why: tg.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var n = 0;
        card.targets.forEach(function (tg) {
          tg._zone.classList.remove('ok', 'no');
          if (!placed[tg.id]) return;
          var ok = placed[tg.id] === tg.accept;
          tg._zone.classList.add(ok ? 'ok' : 'no');
          chipEls[placed[tg.id]].classList.add(ok ? 'ok' : 'no');
          if (hsEls[tg.id]) hsEls[tg.id].classList.toggle('ok', ok);
          if (ok) n++;
        });
        api.save(placed);
        tellWhy();
        api.result(n, card.targets.length, card.targets.filter(function (tg) {
          return !!placed[tg.id];
        }).length);
      },
      reset: function () {
        card.targets.forEach(function (tg) {
          if (placed[tg.id] && placed[tg.id] !== tg.accept) unplace(tg.id);
          tg._zone.classList.remove('ok', 'no');
        });
        Object.keys(chipEls).forEach(function (k) { chipEls[k].classList.remove('ok', 'no'); });
        if (reasons) reasons.hide();
      },
      hint: function () {
        for (var i = 0; i < card.targets.length; i++) {
          var tg = card.targets[i];
          if (placed[tg.id] !== tg.accept) {
            chipEls[tg.accept].classList.add('sel');
            tg._zone.classList.add('over');
            tg._zone.scrollIntoView({ block: 'center', behavior: 'smooth' });
            setTimeout(function (z, c) { return function () { z.classList.remove('over'); c.classList.remove('sel'); }; }(tg._zone, chipEls[tg.accept]), 1800);
            return;
          }
        }
        HSP.toast('Everything is already in the right place.');
      },
      /* It used to `place()` every chip in its right slot - and place() calls
         api.save(), so the revealed arrangement became the learner's saved answer
         and their own was gone for good, not merely off the screen. One of the 20
         cards in this course where that was true. RESIDUALS FM-30 / F17. */
      show: function () {
        api.reveal({
          title: 'What matches what',
          rows: card.targets.map(function (tg) {
            var ch = chipEls[tg.accept];
            var mineId = placed[tg.id];
            var mineEl = mineId ? chipEls[mineId] : null;
            return {
              t: (tg.label || tg.id) + ' \u2192 '
                 + (ch ? (ch.textContent || '').replace(/\s+/g, ' ').trim() : tg.accept),
              mine: mineEl ? (mineEl.textContent || '').replace(/\s+/g, ' ').trim() : '',
              ok: mineId === undefined ? null : mineId === tg.accept,
              why: tg.why || ''
            };
          })
        });
      },
      getState: function () { return placed; },
      setState: function (s) { if (s) for (var k in s) if (find(k) && chipEls[s[k]]) place(k, s[k]); }
    };
  };

  /* ============================================================
     dragcloze — picture/word tiles into numbered blanks in a text
     ============================================================ */
  EX.dragcloze = function (card, host, api) {
    var pick = Picker(host);
    var tiles = mk('div', 'tiles'), tileEls = {}, placed = {};

    /* tiles that are pictures lay out as a grid; tiles that are just
       words lay out as chips, because a phrase like "After this
       experience I learned that" does not fit a 130px grid cell and
       was being clipped mid-word */
    if (!card.tiles.some(function (t) { return t.art; })) tiles.classList.add('tiles-words');
    card.tiles.forEach(function (tl) {
      var tEl = mk('div', 'tile' + (tl.art ? '' : ' tile-word'));
      tEl.dataset.cid = tl.id;
      tEl.innerHTML = (tl.art ? art.spot(tl.art) : '') + '<div class="cap">' + esc(tl.label) + '</div>';
      pick.wireChip(tEl);
      /* say it again — the recording when there is one, the device
         voice otherwise. The button sits inside a draggable tile, so
         every handler has to stop before the tile picks the event up. */
      if (card.say) {
        var sp = mk('button', 'tile-say', art.icon('sound', 14));
        sp.type = 'button';
        sp.title = 'Hear "' + tl.label + '"';
        sp.setAttribute('aria-label', 'Hear ' + tl.label);
        sp.setAttribute('draggable', 'false');
        sp.onclick = function (ev) {
          ev.stopPropagation();
          HSP.say(tl.say || tl.label, card.role || 'course', { fallback: card.voice || 'f' });
        };
        sp.addEventListener('keydown', function (ev) { ev.stopPropagation(); });
        sp.addEventListener('dragstart', function (ev) { ev.preventDefault(); ev.stopPropagation(); });
        tEl.appendChild(sp);
      }
      tiles.appendChild(tEl);
      tileEls[tl.id] = tEl;
    });
    host.appendChild(tiles);

    var textBox = mk('div', 'reading');
    textBox.style.marginTop = '14px';
    textBox.innerHTML = card.text.replace(/\[\[(\w+)\]\]/g, function (m, k) {
      return '<span class="slot blankslot" data-bid="' + k + '" style="display:inline-grid;min-width:160px;vertical-align:middle">?</span>';
    });
    host.appendChild(textBox);

    var slots = textBox.querySelectorAll('.blankslot');
    for (var i = 0; i < slots.length; i++) {
      (function (sl) {
        pick.wireDrop(sl, function (chip) { place(sl.dataset.bid, chip.dataset.cid); });
        sl.addEventListener('dblclick', function () { unplace(sl.dataset.bid); });
      })(slots[i]);
    }
    function slotOf(bid) { return textBox.querySelector('.blankslot[data-bid="' + bid + '"]'); }
    function place(bid, cid) {
      for (var k in placed) if (placed[k] === cid) unplace(k);
      if (placed[bid]) unplace(bid);
      placed[bid] = cid;
      var s = slotOf(bid);
      s.textContent = card.tiles.filter(function (t) { return t.id === cid; })[0].label;
      s.style.borderStyle = 'solid';
      s.style.color = 'var(--text)';
      tileEls[cid].classList.add('used');
      api.save(placed);
      /* the toast is a reward for getting one right, so it must not
         fire for the worked example or for restoring saved work */
      if (!seeding && card.explain && card.explain[bid] && card.answers[bid] === cid) {
        HSP.toast(card.explain[bid], 3200);
      }
    }
    function unplace(bid) {
      var cid = placed[bid]; if (!cid) return;
      delete placed[bid];
      var s = slotOf(bid);
      s.textContent = '?'; s.style.borderStyle = 'dashed'; s.style.color = 'var(--ink-4)';
      s.classList.remove('ok', 'no');
      tileEls[cid].classList.remove('used');
    }
    var seeding = true;
    if (card.given) for (var g in card.given) place(g, card.given[g]);
    seeding = false;

    var reasons = card.explain ? Reasons(host, card.whyTitle || 'Why each expression belongs where it does') : null;
    function labelOf(cid) {
      for (var i = 0; i < card.tiles.length; i++) if (card.tiles[i].id === cid) return card.tiles[i].label;
      return cid;
    }
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(Object.keys(card.answers).map(function (bid) {
        var given = card.given && card.given[bid] !== undefined;
        return {
          t: labelOf(card.answers[bid]),
          given: given,
          ok: given ? null : (placed[bid] === undefined ? null : placed[bid] === card.answers[bid]),
          why: card.explain[bid] || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var n = 0, total = Object.keys(card.answers).length;
        for (var bid in card.answers) {
          var s = slotOf(bid);
          s.classList.remove('ok', 'no');
          if (!placed[bid]) continue;
          var ok = placed[bid] === card.answers[bid];
          s.classList.add(ok ? 'ok' : 'no');
          s.style.borderColor = ok ? 'var(--ok)' : 'var(--no)';
          s.style.color = ok ? 'var(--ok)' : 'var(--no)';
          if (ok) n++;
        }
        api.save(placed);
        tellWhy();
        /* the finished text is the reward, not the prompt: printing
           it above the gaps would hand over every answer */
        if (n === total && card.donePassage && !host.querySelector('.cloze-done')) {
          var dn = mk('div', 'cloze-done');
          dn.appendChild(mk('div', 'wc', card.doneLabel || 'Here it is complete — now hear it read properly.'));
          dn.appendChild(HSP.passageNode(card.donePassage));
          host.appendChild(dn);
        }
        api.result(n, total);
      },
      reset: function () {
        for (var bid in card.answers) if (placed[bid] !== card.answers[bid]) unplace(bid);
        var ss = textBox.querySelectorAll('.blankslot');
        for (var i = 0; i < ss.length; i++) { ss[i].classList.remove('ok', 'no'); ss[i].style.borderColor = ''; }
        if (reasons) reasons.hide();
        var dn2 = host.querySelector('.cloze-done');
        if (dn2) dn2.remove();
      },
      hint: function () {
        for (var bid in card.answers) if (placed[bid] !== card.answers[bid]) {
          tileEls[card.answers[bid]].classList.add('sel');
          slotOf(bid).classList.add('over');
          setTimeout(function (t, s) { return function () { t.classList.remove('sel'); s.classList.remove('over'); }; }(tileEls[card.answers[bid]], slotOf(bid)), 1800);
          return;
        }
        HSP.toast('All blanks are already correct.');
      },
      show: function () {
        var rows = [], i = 0;
        for (var bid in card.answers) {
          if (!card.answers.hasOwnProperty(bid)) continue;
          i++;
          var want = card.answers[bid];
          var wEl = tileEls[want], mEl = placed[bid] ? tileEls[placed[bid]] : null;
          var txt = function (el, fb) {
            return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : fb;
          };
          rows.push({
            t: i + '. ' + txt(wEl, String(want)),
            mine: txt(mEl, ''),
            ok: placed[bid] === undefined ? null : placed[bid] === want,
            why: (card.why && card.why[bid]) || ''
          });
        }
        api.reveal({ title: 'The words that go in the gaps', rows: rows });
      },
      getState: function () { return placed; },
      setState: function (s) {
        if (!s) return;
        seeding = true;
        try { for (var k in s) if (tileEls[s[k]]) place(k, s[k]); }
        finally { seeding = false; }
      }
    };
  };

  /* ============================================================
     cloze — typed blanks
     ============================================================ */
  EX.cloze = function (card, host, api) {
    if (card.before) host.appendChild(mk('div', 'note', card.before));

    /* A CLOZE WITH NO KEY IS A SUBMITTED EXERCISE, NOT A SCORED ONE.
       `U.accepts(value, [])` walks an empty list and returns false, so a card authored as
       `answers: {'1': [], '2': []}` marked every word a learner wrote as wrong, and
       show() wrote `a[0]` - the string "undefined" - into every blank. Fifteen cards of
       this course shipped that way, three per unit, because the BOOK prints no answer key
       for those exercises: 1D, 2C and 5C appear nowhere in the unit's own key.

       The answer is not to invent the author's key. It is to stop pretending there is
       one: the gaps still render, the learner still writes, the work is still saved and
       marked complete, and the card says what it cannot do. A card that CAN be marked is
       unaffected - this only reads as unkeyed when every single gap is empty. */
    var keyed = Object.keys(card.answers || {}).some(function (k) {
      var a = card.answers[k];
      return Array.isArray(a) ? a.length > 0 : (a !== undefined && a !== null && a !== '');
    });

    var box = mk('div', card.plain ? '' : 'reading');
    var idx = [];
    box.innerHTML = card.text.replace(/\[\[(\w+)\]\]/g, function (m, k) {
      idx.push(k);
      return '<input class="blank' + (card.small ? ' sm' : '') + '" data-bid="' + k + '" aria-label="blank ' + k + '">';
    });
    host.appendChild(box);
    if (card.bank) {
      var bank = mk('div', 'chips');
      bank.appendChild(mk('span', 'wc', 'Word bank: '));
      /* Shown in the authored order, NOT shuffled here. This was the
         one place in the course that rearranged itself at run time,
         which meant the bank a learner saw was not the bank on the
         printout or in the teacher's key, and reloading the page
         quietly dealt a different exercise. The scatter belongs in
         the data, where it can be read, checked and kept — the same
         rule the `order` type already follows. */
      card.bank.forEach(function (b) {
        var cEl = mk('span', 'chip', esc(b));
        cEl.onclick = function () {
          var f = box.querySelector('.blank:not([data-filled])') || box.querySelector('.blank');
          if (f) { f.value = b; f.setAttribute('data-filled', '1'); }
        };
        bank.appendChild(cEl);
      });
      host.appendChild(bank);
    }
    function ins() { return box.querySelectorAll('.blank'); }

    if (!keyed) {
      var nk = mk('div', 'note');
      nk.innerHTML = 'The book sets this exercise but prints <b>no answer key</b> for it, '
        + 'so this card does not mark your words right or wrong. Write your answers, press '
        + 'Check answers to save them, and compare each one with the unit&rsquo;s own '
        + 'vocabulary list.';
      host.appendChild(nk);
    }

    var reasons = card.why ? Reasons(host, card.whyTitle || 'Why each word is the one she says') : null;
    function tellWhy() {
      if (!reasons) return;
      var list = ins();
      reasons.fill(Array.prototype.map.call(list, function (el) {
        var bid = el.dataset.bid;
        var a = card.answers[bid];
        return {
          t: Array.isArray(a) ? (a[0] || '') : (a || ''),
          ok: (!keyed || !String(el.value).trim()) ? null : U.accepts(el.value, a),
          why: card.why[bid] || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var list = ins(), n = 0;
        if (!keyed) {
          /* submitted, not scored: a real attempt in every gap is what completes it */
          var filled = 0;
          for (var z = 0; z < list.length; z++) {
            list[z].classList.remove('ok', 'no');
            if (String(list[z].value).trim()) filled++;
          }
          api.save(Array.prototype.map.call(list, function (x) { return x.value; }));
          tellWhy();
          if (filled < list.length) {
            api.verdict('part', progressLine(filled, list.length, 'gaps',
              'fill in the ' + (list.length - filled) + ' still empty.')
              + ' The book prints no answer key for this exercise, so your words are '
              + 'saved rather than marked.');
            return;
          }
          api.complete('Saved — all ' + list.length + ' gaps filled. The book prints no '
            + 'answer key for this exercise, so compare your words with the vocabulary list.');
          return;
        }
        for (var i = 0; i < list.length; i++) {
          var bid = list[i].dataset.bid;
          var ok = U.accepts(list[i].value, card.answers[bid]);
          list[i].classList.remove('ok', 'no');
          list[i].classList.add(ok ? 'ok' : 'no');
          if (ok) n++;
        }
        api.save(Array.prototype.map.call(list, function (x) { return x.value; }));
        tellWhy();
        api.result(n, list.length, Array.prototype.filter.call(list, function (x) {
          return String(x.value).trim();
        }).length);
      },
      reset: function () {
        var list = ins();
        for (var i = 0; i < list.length; i++) {
          if (!U.accepts(list[i].value, card.answers[list[i].dataset.bid])) list[i].value = '';
          list[i].classList.remove('ok', 'no');
        }
        if (reasons) reasons.hide();
      },
      hint: function () {
        if (!keyed) {
          HSP.toast('The book prints no key for this exercise, so there is no letter to '
            + 'give. The words you need are on the vocabulary screen.', 4600);
          return;
        }
        var list = ins();
        for (var i = 0; i < list.length; i++) {
          if (!U.accepts(list[i].value, card.answers[list[i].dataset.bid])) {
            var a = card.answers[list[i].dataset.bid];
            a = Array.isArray(a) ? a[0] : a;
            list[i].value = String(a).slice(0, 1);
            list[i].focus();
            HSP.toast('First letter given.');
            return;
          }
        }
        HSP.toast('All blanks are already correct.');
      },
      show: function () {
        if (!keyed) {
          /* There is no key: the book really does not print one for these. (`a[0]` on an
             empty list wrote the string "undefined" into every blank, which is what the
             published card did before FM-14.) A toast said so and vanished after four
             seconds; the panel says it and stays, and shows the learner what they wrote
             so they can take it to the vocabulary list - which is what the direction
             asks them to do. */
          var listU = ins();
          api.reveal({
            title: 'This exercise has no answer key',
            note: 'The book sets this exercise and prints no answer key for it, so the page '
                + 'cannot mark your words right or wrong. Below is what you wrote. Compare '
                + 'each one with the unit’s own vocabulary list.',
            rows: Array.prototype.map.call(listU, function (el, i) {
              return { t: '—', mine: el.value, ok: null,
                       why: (card.why && card.why[el.dataset.bid]) || '' };
            })
          });
          return;
        }
        var list = ins();
        api.reveal({
          title: 'The words that go in the gaps',
          rows: Array.prototype.map.call(list, function (el, i) {
            var a = card.answers[el.dataset.bid];
            return {
              t: (i + 1) + '. ' + (Array.isArray(a) ? a[0] : a),
              mine: el.value,
              ok: String(el.value).trim() ? U.accepts(el.value, a) : null,
              why: (card.why && card.why[el.dataset.bid]) || ''
            };
          })
        });
      },
      getState: function () { return Array.prototype.map.call(ins(), function (x) { return x.value; }); },
      setState: function (s) { if (Array.isArray(s)) { var l = ins(); s.forEach(function (v, i) { if (l[i]) l[i].value = v; }); } }
    };
  };

  /* ============================================================
     choiceinline — "circle the correct word"
     ============================================================ */
  EX.choiceinline = function (card, host, api) {
    var picks = [];
    card.items.forEach(function (it, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      var holder = mk('div', 'qt');
      var parts = it.text.split(/\{\{(.*?)\}\}/);
      var p = { el: null, choice: null, answer: it.answer };
      parts.forEach(function (seg, j) {
        if (j % 2 === 0) { holder.appendChild(d.createTextNode(seg)); return; }
        var opts = seg.split('|');
        var pk = mk('span', 'pick');
        opts.forEach(function (o, oi) {
          var b = mk('button', '', esc(o.trim()));
          b.type = 'button';
          b.setAttribute('aria-pressed', 'false');
          b.onclick = function () {
            var bs = pk.querySelectorAll('button');
            for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
            b.setAttribute('aria-pressed', 'true');
            p.choice = oi;
            pk.classList.remove('ok', 'no');
            if (card.morph && oi === it.answer) HSP.toast(o.trim().replace(/^dis/, 'dis + ') + '  ✓', 1600);
          };
          pk.appendChild(b);
        });
        p.el = pk;
        holder.appendChild(pk);
      });
      cEl.appendChild(holder);
      row.appendChild(cEl);
      host.appendChild(row);
      picks.push(p);
    });

    var reasons = card.items.some(function (i) { return i.why; })
      ? Reasons(host, card.whyTitle || 'Why each one is the right word') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(card.items.map(function (it, i) {
        var opts = (it.text.match(/\{\{(.*?)\}\}/) || [, ''])[1].split('|');
        return {
          t: String(opts[it.answer] || '').trim(),
          ok: picks[i].choice === null ? null : picks[i].choice === it.answer,
          why: it.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var n = 0;
        picks.forEach(function (p) {
          p.el.classList.remove('ok', 'no');
          if (p.choice === null) return;
          var ok = p.choice === p.answer;
          p.el.classList.add(ok ? 'ok' : 'no');
          if (ok) n++;
        });
        api.save(picks.map(function (p) { return p.choice; }));
        tellWhy();
        api.result(n, picks.length, picks.filter(function (p) {
          return p.choice !== null && p.choice !== undefined;
        }).length);
      },
      reset: function () {
        picks.forEach(function (p) {
          if (p.choice !== p.answer) {
            p.choice = null;
            var bs = p.el.querySelectorAll('button');
            for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
          }
          p.el.classList.remove('ok', 'no');
        });
        if (reasons) reasons.hide();
      },
      show: function () {
        api.reveal({
          title: 'The right word in each sentence',
          rows: picks.map(function (p, i) {
            var bs = p.el.querySelectorAll('button');
            var txt = function (z) {
              return bs[z] ? (bs[z].textContent || '').replace(/\s+/g, ' ').trim() : '';
            };
            return {
              t: (i + 1) + '. ' + txt(p.answer),
              mine: (p.choice === null || p.choice === undefined) ? '' : txt(p.choice),
              ok: (p.choice === null || p.choice === undefined) ? null : p.choice === p.answer,
              why: (card.items[i] && card.items[i].why) || ''
            };
          })
        });
      },
      getState: function () { return picks.map(function (p) { return p.choice; }); },
      setState: function (s) {
        if (!Array.isArray(s)) return;
        s.forEach(function (v, i) {
          if (v === null || v === undefined || !picks[i]) return;
          var bs = picks[i].el.querySelectorAll('button');
          if (bs[v]) { bs[v].setAttribute('aria-pressed', 'true'); picks[i].choice = v; }
        });
      }
    };
  };

  /* ============================================================
     mcq
     ============================================================ */
  EX.mcq = function (card, host, api) {
    if (card.preview) {
      var pv = mk('div', 'diorama');
      pv.innerHTML = art.diorama(card.preview);
      pv.style.marginBottom = '14px';
      host.appendChild(pv);
    }
    var sel = null, opts = mk('div', 'opts');
    card.options.forEach(function (o, i) {
      var b = mk('div', 'opt');
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', 'false');
      b.setAttribute('tabindex', '0');
      b.innerHTML = '<span class="mk">' + String.fromCharCode(97 + i) + '</span><span><span>' + esc(o.t) + '</span>' +
        (o.why ? '<span class="why">' + esc(o.why) + '</span>' : '') + '</span>';
      function choose() {
        var all = opts.querySelectorAll('.opt');
        for (var z = 0; z < all.length; z++) { all[z].setAttribute('aria-checked', 'false'); all[z].classList.remove('ok', 'no'); }
        b.setAttribute('aria-checked', 'true'); sel = i;
      }
      b.onclick = choose;
      b.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); } };
      opts.appendChild(b);
    });
    host.appendChild(opts);
    return {
      check: function () {
        attempt(host);
        var all = opts.querySelectorAll('.opt');
        for (var z = 0; z < all.length; z++) {
          all[z].classList.add('reveal');
          if (card.options[z].ok) all[z].classList.add('ok');
          else if (z === sel) all[z].classList.add('no');
        }
        api.save(sel);
        api.result(sel !== null && card.options[sel].ok ? 1 : 0, 1,
          sel === null || sel === undefined ? 0 : 1);
      },
      reset: function () {
        var all = opts.querySelectorAll('.opt');
        for (var z = 0; z < all.length; z++) { all[z].classList.remove('ok', 'no', 'reveal'); all[z].setAttribute('aria-checked', 'false'); }
        sel = null;
      },
      /* It used to set `sel = z` - the learner's own answer variable - so the next
         press of Check scored full marks for a choice they never made. */
      show: function () {
        var want = -1;
        card.options.forEach(function (o, z) { if (o.ok) want = z; });
        api.reveal({
          title: 'The right option',
          rows: [{
            t: want >= 0 ? card.options[want].t : '',
            mine: (sel === null || sel === undefined) ? '' : card.options[sel].t,
            ok: (sel === null || sel === undefined) ? null : sel === want,
            why: (want >= 0 && card.options[want].why) || ''
          }]
        });
      },
      getState: function () { return sel; },
      setState: function (s) {
        if (s === null || s === undefined) return;
        var all = opts.querySelectorAll('.opt');
        if (all[s]) { all[s].setAttribute('aria-checked', 'true'); sel = s; }
      }
    };
  };

  /* ============================================================
     tristate — True / False / No information + evidence line
     ============================================================ */
  EX.tristate = function (card, host, api) {
    var rows = [];
    card.items.forEach(function (it, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      cEl.appendChild(mk('div', 'qt', esc(it.t)));
      var ctr = mk('div');
      ctr.style.display = 'flex'; ctr.style.gap = '8px'; ctr.style.flexWrap = 'wrap'; ctr.style.alignItems = 'center';
      var pk = mk('span', 'pick');
      ['T', 'F', 'NI'].forEach(function (v) {
        var b = mk('button', '', v);
        b.type = 'button'; b.setAttribute('aria-pressed', 'false');
        b.onclick = function () {
          var bs = pk.querySelectorAll('button');
          for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
          b.setAttribute('aria-pressed', 'true'); rows[i].v = v; pk.classList.remove('ok', 'no');
        };
        pk.appendChild(b);
      });
      ctr.appendChild(pk);
      var ln = mk('input', 'blank sm');
      ln.placeholder = 'line';
      ln.title = 'Which line number proves it?';
      if (it.ans === 'NI') { ln.disabled = true; ln.placeholder = '—'; }
      ctr.appendChild(mk('span', 'wc', 'line:'));
      ctr.appendChild(ln);
      cEl.appendChild(ctr);
      var fb = mk('div', 'wc'); fb.style.marginTop = '5px'; fb.style.display = 'none';
      cEl.appendChild(fb);
      row.appendChild(cEl);
      host.appendChild(row);
      rows.push({ v: null, pk: pk, ln: ln, fb: fb, it: it });
    });
    if (card.given) rows[0].pk.querySelectorAll('button')[0].click();

    var reasons = card.items.some(function (i) { return i.why; })
      ? Reasons(host, card.whyTitle || 'Why each one is true, false or neither') : null;
    var VERDICT = { T: 'true', F: 'false', NI: 'no information' };
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(rows.map(function (r, i) {
        return {
          t: r.it.t + ' — ' + VERDICT[r.it.ans] + (r.it.ans === 'NI' ? '' : ' (line ' + r.it.line + ')'),
          given: !!(card.given && i === 0),
          ok: r.v === null ? null : r.v === r.it.ans,
          why: r.it.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var n = 0;
        rows.forEach(function (r) {
          r.pk.classList.remove('ok', 'no');
          r.fb.style.display = 'none';
          var vOk = r.v === r.it.ans;
          var lOk = r.it.ans === 'NI' ? true : (parseInt(r.ln.value, 10) === r.it.line);
          r.ln.classList.remove('ok', 'no');
          if (r.v !== null) r.pk.classList.add(vOk ? 'ok' : 'no');
          if (r.it.ans !== 'NI' && r.ln.value) r.ln.classList.add(lOk ? 'ok' : 'no');
          if (vOk && lOk) n++;
          else if (r.v !== null) {
            r.fb.style.display = 'block';
            r.fb.textContent = !vOk ? (r.it.hint || 'Read that part of the column again.')
              : 'The verdict is right — now find the exact line number.';
          }
        });
        api.save(rows.map(function (r) { return [r.v, r.ln.value]; }));
        tellWhy();
        api.result(n, rows.length, rows.filter(function (r) { return !!r.v; }).length);
      },
      reset: function () {
        rows.forEach(function (r) {
          if (r.v !== r.it.ans) {
            r.v = null;
            var bs = r.pk.querySelectorAll('button');
            for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
          }
          r.pk.classList.remove('ok', 'no'); r.ln.classList.remove('ok', 'no'); r.fb.style.display = 'none';
        });
        if (reasons) reasons.hide();
      },
      show: function () {
        var LBL = { T: 'True', F: 'False', NI: 'Not given' };
        api.reveal({
          title: 'True, false or not given',
          rows: rows.map(function (r, i) {
            var want = LBL[r.it.ans] + (r.it.ans !== 'NI' && r.it.line
              ? '  (line ' + r.it.line + ')' : '');
            var mine = r.v ? LBL[r.v] : '';
            if (mine && r.ln && r.ln.value) mine += '  (line ' + r.ln.value + ')';
            return { t: (i + 1) + '. ' + want, mine: mine,
                     ok: r.v ? r.v === r.it.ans : null, why: r.it.why || '' };
          })
        });
      },
      getState: function () { return rows.map(function (r) { return [r.v, r.ln.value]; }); },
      setState: function (s) {
        if (!Array.isArray(s)) return;
        s.forEach(function (pair, i) {
          if (!rows[i] || !pair) return;
          var want = { T: 0, F: 1, NI: 2 }[pair[0]];
          if (want !== undefined) rows[i].pk.querySelectorAll('button')[want].click();
          rows[i].ln.value = pair[1] || '';
        });
      }
    };
  };

  /* ============================================================
     checklist — tick every item that applies
     ============================================================ */
  EX.checklist = function (card, host, api) {
    var box = mk('div', 'ckl'), cells = [];
    card.items.forEach(function (it, i) {
      var b = mk('div', 'ck');
      b.setAttribute('role', 'checkbox');
      b.setAttribute('aria-checked', 'false');
      b.setAttribute('tabindex', '0');
      b.innerHTML = '<span class="bx">✓</span><span>' + esc(it.t) + '</span>';
      function tog() {
        var on = b.getAttribute('aria-checked') === 'true';
        b.setAttribute('aria-checked', on ? 'false' : 'true');
        b.classList.remove('ok', 'no', 'miss');
        if (card.onToggle) card.onToggle(it, !on);
      }
      b.onclick = tog;
      b.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(); } };
      box.appendChild(b); cells.push(b);
    });
    host.appendChild(box);
    if (card.audio) host.appendChild(sceneInline(card.audio, host));

    var selfAssess = card.selfAssess;
    var reasons = !selfAssess && card.items.some(function (i) { return i.why; })
      ? Reasons(host, card.whyTitle || 'What was said, and what was not') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(card.items.map(function (it, i) {
        var on = cells[i].getAttribute('aria-checked') === 'true';
        return {
          t: it.t + (it.ok ? '' : '  —  not mentioned'),
          ok: on === !!it.ok ? true : false,
          why: it.why || ''
        };
      }));
    }

    /* a self-assessment has no right answer, so it has no "Show me" */
    var out = {
      check: function () {
        attempt(host);
        if (selfAssess) {
          var ticked = cells.filter(function (c) { return c.getAttribute('aria-checked') === 'true'; }).length;
          api.save(cells.map(function (c) { return c.getAttribute('aria-checked') === 'true'; }));
          if (ticked) api.complete('Saved — ' + ticked + ' of ' + cells.length + ' ticked. Your teacher can see this in the progress export.');
          else api.verdict('part', 'Tick at least one before saving.');
          return;
        }
        var n = 0, total = 0;
        card.items.forEach(function (it, i) {
          var on = cells[i].getAttribute('aria-checked') === 'true';
          cells[i].classList.remove('ok', 'no', 'miss');
          if (it.ok) { total++; if (on) { cells[i].classList.add('ok'); n++; } else cells[i].classList.add('miss'); }
          else if (on) { cells[i].classList.add('no'); n = Math.max(0, n - 1); }
        });
        api.save(cells.map(function (c) { return c.getAttribute('aria-checked') === 'true'; }));
        tellWhy();
        api.result(n, total);
      },
      reset: function () {
        cells.forEach(function (c, i) {
          if (!selfAssess && !card.items[i].ok) c.setAttribute('aria-checked', 'false');
          c.classList.remove('ok', 'no', 'miss');
        });
        if (reasons) reasons.hide();
      },
      show: function () {
        api.reveal({
          title: 'Which ones belong on the list',
          note: 'A tick in the left column is the answer; "you" says what you chose.',
          rows: card.items.map(function (it, i) {
            var minePicked = cells[i] && cells[i].getAttribute('aria-checked') === 'true';
            return {
              t: (it.ok ? 'YES \u2014 ' : 'no \u2014 ') + (it.t || it.label || ''),
              mine: minePicked ? 'you ticked it' : 'you left it',
              ok: minePicked === !!it.ok,
              why: it.why || ''
            };
          })
        });
      },
      getState: function () { return cells.map(function (c) { return c.getAttribute('aria-checked') === 'true'; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (cells[i]) cells[i].setAttribute('aria-checked', v ? 'true' : 'false'); }); }
    };
    if (selfAssess) delete out.show;
    return out;
  };

  /* ============================================================
     checkgrid — the 10-speaker × 4-tense matrix
     ============================================================ */
  EX.checkgrid = function (card, host, api) {
    var wrapG = mk('div', 'matrix-wrap');
    var h = '<table class="matrix"><thead><tr><th></th><th colspan="' + card.cols.length + '">' + esc(card.colGroup || '') + '</th></tr><tr><th></th>';
    card.cols.forEach(function (c, i) { h += '<th>' + esc(c.label !== undefined ? c.label : (i + 1)) + '</th>'; });
    h += '</tr></thead><tbody>';
    card.rows.forEach(function (rw, ri) {
      h += '<tr><th>' + esc(rw) + '</th>';
      card.cols.forEach(function (c, ci) {
        h += '<td data-r="' + ri + '" data-c="' + ci + '"><button type="button" aria-pressed="false" aria-label="' + esc(rw) + ' speaker ' + (ci + 1) + '">✓</button></td>';
      });
      h += '</tr>';
    });
    h += '</tbody></table>';
    wrapG.innerHTML = h;
    host.appendChild(wrapG);

    wrapG.addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      var td = b.parentElement, ci = td.dataset.c;
      var colCells = wrapG.querySelectorAll('td[data-c="' + ci + '"]');
      for (var i = 0; i < colCells.length; i++) {
        colCells[i].classList.remove('ok', 'no', 'want');
        colCells[i].querySelector('button').setAttribute('aria-pressed', 'false');
      }
      b.setAttribute('aria-pressed', 'true');
    });

    /* per-speaker players */
    var playRow = mk('div', 'chips');
    playRow.appendChild(mk('span', 'wc', 'Listen to each speaker: '));
    card.cols.forEach(function (c, i) {
      var b = mk('button', 'chip', art.icon('sound', 14) + ' ' + (i + 1));
      b.type = 'button';
      b.style.cursor = 'pointer';
      b.onclick = function () {
        /* the same recordings the Ten Voices scene uses */
        var V = HSP.voiceMap || {};
        var slot = (V.gridCast || [])[i];
        var gv = slot ? (V.scene[V.gridScene] || {})[slot] : null;
        HSP.say(c.line, null, { voice: gv, fallback: c.voice || (i % 2 ? 'f' : 'm') });
        b.classList.add('sel');
        setTimeout(function () { b.classList.remove('sel'); }, 2600);
      };
      playRow.appendChild(b);
    });
    host.appendChild(playRow);

    var transBtn = mk('button', 'btn btn-sm', art.icon('eye', 15) + 'Show transcript');
    var transBox = mk('div', 'note');
    transBox.style.display = 'none';
    transBox.innerHTML = '<h4>Transcript</h4>' + card.cols.map(function (c, i) {
      return '<div style="margin-bottom:5px"><b>' + (i + 1) + '.</b> ' + esc(c.line) + '</div>';
    }).join('');
    transBtn.onclick = function () {
      if (api.rec.attempts === 0) { HSP.toast('Try the grid once first — this is a listening task.'); return; }
      transBox.style.display = transBox.style.display === 'none' ? 'block' : 'none';
    };
    host.appendChild(transBtn);
    host.appendChild(transBox);

    function sel(ci) {
      var b = wrapG.querySelector('td[data-c="' + ci + '"] button[aria-pressed="true"]');
      return b ? parseInt(b.parentElement.dataset.r, 10) : null;
    }

    var reasons = card.cols.some(function (c) { return c.why; })
      ? Reasons(host, card.whyTitle || 'What gave each tense away') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(card.cols.map(function (c, ci) {
        var got = sel(ci);
        return {
          t: (ci + 1) + '. "' + c.line + '"  —  ' + card.rows[c.answer],
          ok: got === null ? null : got === c.answer,
          why: c.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var n = 0;
        card.cols.forEach(function (c, ci) {
          var want = c.answer, got = sel(ci);
          var cells = wrapG.querySelectorAll('td[data-c="' + ci + '"]');
          for (var i = 0; i < cells.length; i++) cells[i].classList.remove('ok', 'no', 'want');
          if (got === null) return;
          if (got === want) { cells[got].classList.add('ok'); n++; }
          else { cells[got].classList.add('no'); cells[want].classList.add('want'); }
        });
        api.save(card.cols.map(function (c, i) { return sel(i); }));
        tellWhy();
        api.result(n, card.cols.length, card.cols.filter(function (c, i) {
          return sel(i) !== null;
        }).length);
      },
      reset: function () {
        card.cols.forEach(function (c, ci) {
          var got = sel(ci);
          var cells = wrapG.querySelectorAll('td[data-c="' + ci + '"]');
          for (var i = 0; i < cells.length; i++) cells[i].classList.remove('ok', 'no', 'want');
          if (got !== null && got !== c.answer) cells[got].querySelector('button').setAttribute('aria-pressed', 'false');
        });
        if (reasons) reasons.hide();
      },
      show: function () {
        api.reveal({
          title: 'The right row in each column',
          note: 'The transcript is under the exercise, behind its own button.',
          rows: card.cols.map(function (c, ci) {
            var got = sel(ci);
            var name = function (i) {
              var r = card.rows && card.rows[i];
              if (!r) return 'row ' + (i + 1);
              return r.label || r.short || (typeof r === 'string' ? r : 'row ' + (i + 1));
            };
            /* EVERY FALLBACK, because a column is named four different ways across
               the five courses: `short`, `label`, or only the `line` it plays.
               Writing just `c.short || c.label` printed the word "undefined" into
               the panel on cybersecurity/b1, whose columns have neither. */
            var col = c.short || c.label || c.line || ('column ' + (ci + 1));
            return { t: col + ' \u2192 ' + name(c.answer),
                     mine: got === null ? '' : String(name(got)),
                     ok: got === null ? null : got === c.answer,
                     why: c.why || '' };
          })
        });
        /* The transcript is NOT opened here. The card already gives the learner a
           button for it, and a reveal that changes the card cannot be told apart
           from one that overwrites an answer - by the gate, or by the learner.
           An earlier version of this fix moved this line below the reveal and
           explained in a comment that it belonged in the panel, while leaving it
           doing exactly what it had always done. The gate was not fooled. */
      },
      getState: function () { return card.cols.map(function (c, i) { return sel(i); }); },
      setState: function (s) {
        if (!Array.isArray(s)) return;
        s.forEach(function (ri, ci) {
          if (ri === null || ri === undefined) return;
          var td = wrapG.querySelector('td[data-r="' + ri + '"][data-c="' + ci + '"]');
          if (td) td.querySelector('button').setAttribute('aria-pressed', 'true');
        });
      }
    };
  };

  /* ============================================================
     highlighter — select the sentences that answer / support
     ============================================================ */
  EX.highlighter = function (card, host, api) {
    var box = mk('div', 'reading ' + (card.style || ''));
    var h = '';
    if (card.textTitle) h += '<h4>' + esc(card.textTitle) + '</h4>';
    card.paras.forEach(function (pr) {
      h += '<p>';
      pr.forEach(function (s, i) { h += '<span class="hl-sent" data-si="' + s.i + '">' + s.t + ' </span>'; });
      h += '</p>';
    });
    box.innerHTML = h;
    host.appendChild(box);
    var spans = box.querySelectorAll('.hl-sent');
    for (var i = 0; i < spans.length; i++) {
      (function (sp) {
        sp.setAttribute('tabindex', '0');
        sp.setAttribute('role', 'button');
        function tog() { sp.classList.toggle('sel'); sp.classList.remove('ok', 'no'); }
        sp.onclick = tog;
        sp.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(); } };
      })(spans[i]);
    }
    host.appendChild(mk('div', 'wc', card.hintText || 'Click a sentence to underline it. Click again to remove it.'));

    var qf = [];
    if (card.questions) {
      card.questions.forEach(function (q, i) {
        var row = mk('div', 'q-row');
        row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
        var cEl = mk('div', 'qc');
        cEl.appendChild(mk('div', 'qt', esc(q.q)));
        qf.push(qField(q, cEl));
        row.appendChild(cEl);
        host.appendChild(row);
      });
    }

    function selected() {
      var out = [];
      for (var i = 0; i < spans.length; i++) if (spans[i].classList.contains('sel')) out.push(parseInt(spans[i].dataset.si, 10));
      return out;
    }
    return {
      check: function () {
        attempt(host);
        var want = card.answers, got = selected(), n = 0;
        for (var i = 0; i < spans.length; i++) {
          var si = parseInt(spans[i].dataset.si, 10);
          spans[i].classList.remove('ok', 'no');
          if (spans[i].classList.contains('sel')) {
            if (want.indexOf(si) >= 0) { spans[i].classList.add('ok'); n++; }
            else spans[i].classList.add('no');
          }
        }
        var qn = 0, qt = qf.length;
        qf.forEach(function (f) { if (f.kind === 'sel' ? f.mark(false) : f.mark()) qn++; });
        api.save({ sel: got, ans: qf.map(function (f) { return f.getState(); }) });
        api.result(n + qn, want.length + qt);
      },
      reset: function () {
        for (var i = 0; i < spans.length; i++) {
          var si = parseInt(spans[i].dataset.si, 10);
          if (card.answers.indexOf(si) < 0) spans[i].classList.remove('sel');
          spans[i].classList.remove('ok', 'no');
        }
        qf.forEach(function (f) { f.reset(); });
      },
      hint: function () {
        for (var i = 0; i < qf.length; i++) {
          if (!qf[i].ok()) {
            var q = card.questions[i];
            HSP.toast(q.evidence ? 'Look for: ' + q.evidence : 'The answer is in one of the sentences you underlined.', 4600);
            return;
          }
        }
        HSP.toast('Underline the sentences that carry the answer.');
      },
      /* The underlining is not written into the passage any more - it used to
         toggle `sel` on every sentence, which both replaced the learner's own
         underlining and, because it TOGGLED, un-underlined a sentence they had
         already found. The panel names the sentences instead. RESIDUALS FM-30. */
      show: function () {
        var mineSel = selected();
        var rows = [];
        card.answers.forEach(function (si) {
          var sp = null;
          for (var i = 0; i < spans.length; i++) {
            if (parseInt(spans[i].dataset.si, 10) === si) { sp = spans[i]; break; }
          }
          rows.push({
            t: sp ? (sp.textContent || '').replace(/\s+/g, ' ').trim() : ('sentence ' + (si + 1)),
            ok: mineSel.indexOf(si) >= 0 ? true : null,
            why: ''
          });
        });
        var extra = mineSel.filter(function (si) { return card.answers.indexOf(si) < 0; });
        qf.forEach(function (f) {
          var r = f.revealRow ? f.revealRow() : null;
          if (r) rows.push(r);
        });
        api.reveal({
          title: 'The sentences that carry the answer',
          note: 'A tick means you underlined it too.'
              + (extra.length ? ' You also underlined ' + extra.length
                 + (extra.length === 1 ? ' sentence' : ' sentences') + ' that is not in the key.'
                 : ''),
          rows: rows
        });
      },
      getState: function () { return { sel: selected(), ans: qf.map(function (f) { return f.getState(); }) }; },
      setState: function (s) {
        if (!s) return;
        (s.sel || []).forEach(function (si) {
          var sp = box.querySelector('.hl-sent[data-si="' + si + '"]'); if (sp) sp.classList.add('sel');
        });
        if (s.ans) s.ans.forEach(function (v, i) { if (qf[i]) qf[i].setState(v); });
      }
    };
  };

  /* ============================================================
     builder — build a sentence from tiles into a frame
     ============================================================ */
  EX.builder = function (card, host, api) {
    var made = [];
    var frame = mk('div', 'reading');
    frame.style.fontSize = '17px';
    var slots = [];
    frame.innerHTML = card.frame.replace(/\[\[(\w+)\]\]/g, function (m, k) {
      return '<span class="slot bslot" data-bid="' + k + '" style="display:inline-grid;min-width:150px;vertical-align:middle">…</span>';
    });
    host.appendChild(frame);

    var pick = Picker(host);
    var pools = mk('div');
    (card.banks || [{ label: '', items: card.tiles }]).forEach(function (bk) {
      if (bk.label) pools.appendChild(mk('div', 'wc', bk.label));
      var row = mk('div', 'chips');
      bk.items.forEach(function (lbl) {
        var cEl = mk('span', 'chip', esc(lbl));
        cEl.dataset.cid = lbl;
        pick.wireChip(cEl);
        row.appendChild(cEl);
      });
      pools.appendChild(row);
    });
    host.appendChild(pools);

    var sl = frame.querySelectorAll('.bslot');
    for (var i = 0; i < sl.length; i++) {
      (function (s) {
        slots.push(s);
        pick.wireDrop(s, function (chip) { s.textContent = chip.textContent; s.style.borderStyle = 'solid'; s.style.color = 'var(--text)'; });
        s.addEventListener('dblclick', function () { s.textContent = '…'; s.style.borderStyle = 'dashed'; s.style.color = 'var(--ink-4)'; });
      })(sl[i]);
    }

    var list = mk('div', 'rank');
    list.style.marginTop = '14px';
    host.appendChild(list);

    var row2 = mk('div', 'btn-row');
    var bSay = mk('button', 'btn btn-sm', art.icon('sound', 15) + 'Hear my sentence');
    bSay.title = DEVICE_VOICE;
    bSay.onclick = function () { HSP.speak(sentence()); };
    var bAdd = mk('button', 'btn btn-accent btn-sm', art.icon('check', 15) + 'Add this sentence');
    bAdd.onclick = function () {
      var s = sentence();
      if (slots.some(function (x) { return x.textContent === '…'; })) { HSP.toast('Fill every slot first.'); return; }
      if (made.indexOf(s) >= 0) { HSP.toast('You already made that one — try a different word.'); return; }
      made.push(s);
      redraw();
      slots.forEach(function (x) { x.textContent = '…'; x.style.borderStyle = 'dashed'; x.style.color = 'var(--ink-4)'; });
      var used = pools.querySelectorAll('.chip');
      for (var z = 0; z < used.length; z++) used[z].classList.remove('sel');
      api.save(made);
    };
    row2.appendChild(bSay); row2.appendChild(bAdd);
    if (card.record) row2.appendChild(HSP.ui.recorder());
    host.appendChild(row2);

    function sentence() {
      var out = '', nodes = frame.childNodes;
      function walk(n) {
        for (var i = 0; i < n.childNodes.length; i++) {
          var c = n.childNodes[i];
          if (c.nodeType === 3) out += c.nodeValue;
          else if (c.classList && c.classList.contains('bslot')) out += c.textContent === '…' ? '___' : c.textContent;
          else walk(c);
        }
      }
      walk(frame);
      return out.replace(/\s+/g, ' ').trim();
    }
    function redraw() {
      list.innerHTML = '';
      made.forEach(function (s, i) {
        var it = mk('div', 'rank-item');
        it.innerHTML = '<span class="pos"></span><span class="tx">' + esc(s) + '</span>';
        var del = mk('button', 'btn btn-sm btn-ghost', art.icon('x', 14));
        del.onclick = function () { made.splice(i, 1); redraw(); api.save(made); };
        it.appendChild(del);
        list.appendChild(it);
      });
    }
    return {
      check: function () {
        attempt(host);
        var need = card.need || 2;
        if (made.length < need) { api.verdict('part', 'Make ' + need + ' different sentences. You have ' + made.length + '.'); return; }
        if (card.tenses) {
          var seen = {};
          made.forEach(function (s) { seen[U.tense(s)] = 1; });
          var missing = card.tenses.filter(function (t) { return !seen[t]; });
          if (missing.length) {
            api.verdict('part', 'Still needed: ' + missing.map(U.tenseLabel).join(', ') + '. Try a sentence in that tense.');
            return;
          }
        }
        api.save(made);
        api.complete('All ' + made.length + ' sentences accepted.');
      },
      reset: function () { made = []; redraw(); api.save(made); },
      getState: function () { return made; },
      setState: function (s) { if (Array.isArray(s)) { made = s; redraw(); } }
    };
  };

  /* ============================================================
     convo — complete a conversation that is already running.

     Three unrelated copies of one frame teach the frame. A
     conversation teaches the frame AND what a reply has to do: each
     built line has to make sense after the line above it, because
     that line is already written and cannot be changed.

     Playback is the device voice, line by line or the whole
     exchange: the learner's lines are new, so no recording of them
     can exist. The two speakers get different voices so it sounds
     like two people.
     ============================================================ */
  EX.convo = function (card, host, api) {
    var cast = card.cast || {};
    var pick = Picker(host);

    if (card.lead) host.appendChild(mk('div', 'convo-hint', card.lead));

    var wrapC = mk('div', 'convo');
    var turns = [];
    /* every gap on the card, by id, so a card that knows its answers
       can mark them one by one */
    var slotById = {};
    /* assigned once the turns exist; the drop handlers below are
       written before it and only ever call it after a real drop */
    var player = null;
    function syncPlayer() { if (player && player.sync) player.sync(); }

    card.turns.forEach(function (tn, i) {
      var who = cast[tn.who] || { name: tn.who };
      var row = mk('div', 'cturn ' + (tn.say ? 'is-given' : 'is-mine'));
      row.appendChild(mk('div', 'ct-who', esc(who.name || tn.who) + ':'));
      var bodyT = mk('div', 'ct-body');

      var slots = [];
      if (tn.say) {
        bodyT.innerHTML = esc(tn.say);
      } else {
        bodyT.innerHTML = String(tn.frame).replace(/\[\[(\w+)\]\]/g, function (m, k) {
          return '<span class="slot bslot" data-bid="' + k + '" style="display:inline-grid;min-width:140px;vertical-align:middle">…</span>';
        });
        var sl = bodyT.querySelectorAll('.bslot');
        for (var z = 0; z < sl.length; z++) {
          (function (s) {
            slots.push(s);
            slotById[s.dataset.bid] = s;
            pick.wireDrop(s, function (chip) {
              s.textContent = chip.textContent;
              s.style.borderStyle = 'solid';
              s.style.color = 'var(--text)';
              s.classList.remove('ok', 'no');
              api.save(state());
              syncPlayer();
            });
            s.addEventListener('dblclick', function () {
              s.textContent = '…'; s.style.borderStyle = 'dashed'; s.style.color = 'var(--ink-4)';
              s.classList.remove('ok', 'no');
              api.save(state());
              syncPlayer();
            });
          })(sl[z]);
        }
      }
      row.appendChild(bodyT);

      var tools = mk('div', 'ct-tools');
      var bPlay = mk('button', 'btn btn-sm btn-ghost', art.icon('sound', 15));
      bPlay.type = 'button';
      /* A written turn whose cast slot names a real voice plays from
         its recording — that is what makes a card like 1D a listening
         exercise rather than a reading one. The learner's own lines
         are new by definition and stay on the device voice. */
      bPlay.title = (tn.say && HSP.turnRecorded(cast[tn.who], tn.say))
        ? 'Listen to this line'
        : (tn.say
          ? 'Read in your device’s own voice, so the two speakers sound different'
          : HSP.deviceVoiceNote);
      bPlay.setAttribute('aria-label', 'Hear this line');
      tools.appendChild(bPlay);
      row.appendChild(tools);

      var T = {
        who: tn.who, given: !!tn.say, row: row, slots: slots,
        text: function () {
          if (tn.say) return tn.say;
          var out = '';
          (function walk(n) {
            for (var q = 0; q < n.childNodes.length; q++) {
              var c = n.childNodes[q];
              if (c.nodeType === 3) out += c.nodeValue;
              else if (c.classList && c.classList.contains('bslot')) out += (c.textContent === '…' ? '' : c.textContent);
              else walk(c);
            }
          })(bodyT);
          return out.replace(/\s+/g, ' ').trim();
        },
        filled: function () {
          if (tn.say) return true;
          return slots.every(function (s) { return s.textContent !== '…'; });
        }
      };
      bPlay.onclick = function () {
        var txt = T.text();
        if (!txt) { HSP.toast('Fill this line in first.'); return; }
        HSP.sayTurn(cast[tn.who], txt);
      };
      turns.push(T);
      wrapC.appendChild(row);
    });
    host.appendChild(wrapC);

    /* the shared chip banks. A chip remembers which bank it came
       from, so a card that labels its banks can also enforce them. */
    var bankOfChip = {};
    var pools = mk('div');
    (card.banks || []).forEach(function (bk, bi) {
      if (bk.label) pools.appendChild(mk('div', 'wc', bk.label));
      var row = mk('div', 'chips');
      bk.items.forEach(function (lbl) {
        var cEl = mk('span', 'chip', esc(lbl));
        cEl.dataset.cid = lbl;
        cEl.dataset.bank = bi;
        if (bankOfChip[lbl] === undefined) bankOfChip[lbl] = bi;
        pick.wireChip(cEl);
        row.appendChild(cEl);
      });
      pools.appendChild(row);
    });
    host.appendChild(mk('div', 'wc', card.poolLabel || 'Click a phrase, then click the gap it belongs in — or drag it there.'));
    host.appendChild(pools);

    player = HSP.ui.convoPlayer(turns, cast);
    host.appendChild(player);
    if (card.record) host.appendChild(HSP.ui.recorder());

    var mine = turns.filter(function (t) { return !t.given; });

    function state() { return mine.map(function (t) { return t.text(); }); }

    /* ----------------------------------------------------------
       Two kinds of conversation live in this one component.

       Where the partner's line only sets a topic ("ask about a
       different pathway each time"), several phrases fit and the
       card carries no `answers`: the page checks that every gap is
       filled, that no two lines are identical, and that the tenses
       asked for are there.

       Where the partner's line carries the clue — "the booth at the
       back has a silence sign" — exactly one phrase fits, the card
       carries `answers`, and each gap is marked.
       ---------------------------------------------------------- */
    var keyed = !!card.answers;
    var reasons = (keyed && card.why) || card.gapBank
      ? Reasons(host, card.whyTitle || 'What in the line told you') : null;
    function wants(bid) {
      var a = card.answers[bid];
      return Array.isArray(a) ? a : [a];
    }
    /* A labelled bank that is not enforced is a suggestion. With
       gapBank, a chip from the wrong bank is wrong and is told why —
       which is how "I am a very carefully worker" stops passing. */
    function bankFault(bid, text) {
      if (!card.gapBank || card.gapBank[bid] === undefined) return null;
      var want = card.gapBank[bid], got = bankOfChip[text];
      if (got === undefined || got === want) return null;
      var wl = ((card.banks || [])[want] || {}).label || 'bank ' + (want + 1);
      var gl = ((card.banks || [])[got] || {}).label || 'bank ' + (got + 1);
      return '"' + text + '" comes from ' + gl.replace(/:$/, '') + '. This gap needs one from ' + wl.replace(/:$/, '') + '.';
    }
    function tellWhy() {
      if (!reasons) return;
      var ids = keyed ? Object.keys(card.answers) : Object.keys(slotById);
      reasons.fill(ids.map(function (bid) {
        var s = slotById[bid], got = s && s.textContent !== '…' ? s.textContent : null;
        var fault = got === null ? null : bankFault(bid, got);
        if (!keyed) {
          return { t: got || '(empty)', ok: got === null ? null : !fault, why: fault || (card.why && card.why[bid]) || '' };
        }
        return {
          t: wants(bid)[0],
          ok: got === null ? null : (!fault && wants(bid).indexOf(got) >= 0),
          why: fault || (card.why && card.why[bid]) || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var unfilled = mine.filter(function (t) { return !t.filled(); });
        mine.forEach(function (t) { t.row.classList.toggle('is-no', !t.filled()); });
        if (unfilled.length) {
          api.verdict('part', unfilled.length + ' of your ' + mine.length + ' lines still has an empty gap.');
          return;
        }
        if (keyed) {
          var n = 0, ids = Object.keys(card.answers);
          ids.forEach(function (bid) {
            var s = slotById[bid];
            if (!s) return;
            var ok = !bankFault(bid, s.textContent) && wants(bid).indexOf(s.textContent) >= 0;
            s.classList.remove('ok', 'no');
            s.classList.add(ok ? 'ok' : 'no');
            if (ok) n++;
          });
          mine.forEach(function (t) {
            t.row.classList.toggle('is-no', t.slots.some(function (s) { return s.classList.contains('no'); }));
          });
          api.save(state());
          tellWhy();
          api.result(n, ids.length);
          return;
        }
        /* an open conversation still enforces its banks if it labels them */
        if (card.gapBank) {
          var faults = 0;
          Object.keys(slotById).forEach(function (bid) {
            var s = slotById[bid];
            var bad = bankFault(bid, s.textContent);
            s.classList.remove('ok', 'no');
            if (bad) { s.classList.add('no'); faults++; }
          });
          mine.forEach(function (t) {
            t.row.classList.toggle('is-no', t.slots.some(function (s) { return s.classList.contains('no'); }));
          });
          if (faults) {
            tellWhy();
            api.verdict('part', faults + (faults === 1 ? ' word is' : ' words are') + ' from the wrong list — see the reasons below.');
            return;
          }
        }
        if (card.distinct) {
          var seen = {}, dup = 0;
          state().forEach(function (s) { if (seen[s]) dup++; seen[s] = 1; });
          if (dup) { api.verdict('part', 'Two of your lines are identical. A conversation does not repeat itself — change one.'); return; }
        }
        if (card.tenses) {
          var have = {};
          state().forEach(function (s) { have[U.tense(s)] = 1; });
          var missing = card.tenses.filter(function (t) { return !have[t]; });
          if (missing.length) {
            api.verdict('part', 'Still needed: ' + missing.map(U.tenseLabel).join(', ') + '. Change one line so it uses that tense.');
            return;
          }
        }
        api.save(state());
        api.complete('The whole conversation works. Press "Read the whole conversation" and listen to it once.');
      },
      reset: function () {
        mine.forEach(function (t) {
          t.row.classList.remove('is-no');
          t.slots.forEach(function (s) {
            /* a keyed conversation keeps the gaps that were right, the
               same as every other marked activity on the site */
            if (keyed && s.classList.contains('ok')) return;
            s.classList.remove('ok', 'no');
            s.textContent = '…'; s.style.borderStyle = 'dashed'; s.style.color = 'var(--ink-4)';
          });
        });
        if (reasons) reasons.hide();
        api.save(state());
      },
      hint: function () {
        for (var i = 0; i < turns.length; i++) {
          if (turns[i].given) continue;
          var t = turns[i], bad = null;
          if (keyed) {
            for (var z = 0; z < t.slots.length; z++) {
              var sl2 = t.slots[z];
              if (sl2.textContent === '…' || wants(sl2.dataset.bid).indexOf(sl2.textContent) < 0) { bad = sl2; break; }
            }
          } else if (!t.filled()) bad = t.slots[0];
          if (!bad) continue;
          var prev = i > 0 ? turns[i - 1] : null;
          var clue = keyed && card.clue && card.clue[bad.dataset.bid];
          HSP.toast(clue ? 'The clue is in the line above: "' + clue + '"'
            : (prev ? 'Read the line above again: "' + prev.text() + '" — your reply has to answer that.' : 'Start with the first gap.'), 5200);
          try { t.row.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { }
          return;
        }
        HSP.toast(keyed ? 'Every gap is already right — press Check answers.' : 'Every line is filled — press Check answers.');
      },
      /* THE WORST OF THE TWENTY-THREE, on the unkeyed path: it wrote a phrase from
         the bank into every empty slot AND called api.save(), so a conversation the
         engine invented became the learner's own saved work - a reveal that makes up
         an answer and then keeps it. The keyed path merely overwrote what they had
         written. Neither writes anything now. RESIDUALS FM-30 / F23. */
      show: function () {
        if (keyed) {
          api.reveal({
            title: 'The lines that complete the conversation',
            rows: Object.keys(card.answers).map(function (bid, i) {
              var s = slotById[bid];
              var got = s ? (s.textContent === '…' ? '' : s.textContent) : '';
              return {
                t: (i + 1) + '. ' + wants(bid)[0],
                mine: got,
                ok: got ? wants(bid).indexOf(got) >= 0 : null,
                why: (card.why && card.why[bid]) || (card.clue && card.clue[bid]) || ''
              };
            })
          });
          return;
        }
        var k = 0, banks = card.banks || [], rows = [];
        mine.forEach(function (t) {
          t.slots.forEach(function (s) {
            /* step through the bank so the suggested version reads as a real
               conversation and not the same phrase five times */
            var bank = banks[Math.min(k, banks.length - 1)];
            var sug = (bank && bank.items.length) ? bank.items[k % bank.items.length] : '';
            if (sug) {
              rows.push({ t: sug, mine: s.textContent === '…' ? '' : s.textContent, ok: null });
            }
            k++;
          });
        });
        api.reveal({
          title: 'One possible version of this conversation',
          note: 'There is no single right answer here. This is one version that works — '
              + 'yours can be different and still be good.',
          rows: rows
        });
      },
      getState: state,
      setState: function (s) {
        if (!Array.isArray(s)) return;
        mine.forEach(function (t, i) {
          var txt = s[i];
          if (!txt || !t.slots.length) return;
          /* re-place the chips that appear in the saved line */
          (card.banks || []).forEach(function (bk) {
            bk.items.forEach(function (item) {
              if (txt.indexOf(item) < 0) return;
              for (var z = 0; z < t.slots.length; z++) {
                if (t.slots[z].textContent === '…') {
                  t.slots[z].textContent = item;
                  t.slots[z].style.borderStyle = 'solid';
                  t.slots[z].style.color = 'var(--text)';
                  return;
                }
              }
            });
          });
        });
        syncPlayer();
      }
    };
  };

  /* ============================================================
     editor — correct the faulty sentence
     ============================================================ */
  /* Two ways to edit a faulty sentence.

     `fix` — the fault is one word, and the learner chooses the right
     form from three or four. That is what gets marked, because that
     is what the exercise is about. A box underneath still asks for
     the whole corrected sentence, as the book does, but it is not
     marked: a sentence typed out is prose, and prose matched against
     a list of accepted spellings fails right answers.

     `accept` — the older path, still here for a card that really does
     want the whole sentence marked. check-deterministic warns on it. */
  EX.editor = function (card, host, api) {
    var rows = [];
    card.items.forEach(function (it, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      var r = { it: it, pick: null, inp: null, out: null, given: !!it.model && !it.fix };

      if (r.given) {
        cEl.appendChild(mk('div', 'qt', it.wrong.replace(/\*(.+?)\*/g, '<s style="color:var(--no)">$1</s>')));
        cEl.appendChild(mk('div', 'qt', '<span style="color:var(--ok);font-weight:600">' + esc(it.model) + '</span> <span class="wc">(done for you)</span>'));
        row.appendChild(cEl); host.appendChild(row); rows.push(r);
        return;
      }

      if (it.fix) {
        /* the sentence, with the faulty word replaced by the choice */
        var holder = mk('div', 'qt');
        var parts = String(it.wrong).split(/\*(.+?)\*/);
        parts.forEach(function (seg, j) {
          if (j % 2 === 0) { holder.appendChild(d.createTextNode(seg)); return; }
          var pk = mk('span', 'pick');
          it.fix.forEach(function (o, oi) {
            var b = mk('button', '', esc(o.t));
            b.type = 'button';
            b.setAttribute('aria-pressed', 'false');
            b.onclick = function () {
              var bs = pk.querySelectorAll('button');
              for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
              b.setAttribute('aria-pressed', 'true');
              r.choice = oi;
              pk.classList.remove('ok', 'no');
              draw();
            };
            pk.appendChild(b);
          });
          r.pick = pk;
          holder.appendChild(pk);
        });
        cEl.appendChild(holder);
        r.choice = null;

        /* the sentence as it now reads, which is the thing to say aloud */
        var out = mk('div', 'ed-out');
        var say = mk('button', 'btn btn-sm btn-ghost', art.icon('sound', 15));
        say.type = 'button';
        say.title = HSP.deviceVoiceNote;
        say.setAttribute('aria-label', 'Read this sentence aloud');
        say.onclick = function () { if (r.choice !== null) HSP.speak(sentence(), { voice: 'f' }); };
        function sentence() {
          return String(it.wrong).replace(/\*(.+?)\*/, r.choice === null ? '______' : it.fix[r.choice].t)
            .replace(/\s+/g, ' ').trim();
        }
        function draw() {
          out.innerHTML = '';
          out.appendChild(mk('span', 'wc', 'Your sentence: '));
          out.appendChild(mk('b', '', esc(sentence())));
          out.appendChild(say);
        }
        draw();
        cEl.appendChild(out);
        r.sentence = sentence;
        /* show() sets the choice without clicking, so it needs a way
           to redraw the rebuilt sentence underneath */
        r.draw = draw;
      }

      if (it.accept || card.write !== false) {
        var inp = mk('input', 'inp');
        inp.placeholder = it.fix ? 'Now write the whole corrected sentence' : 'Write the corrected sentence';
        inp.style.marginTop = '6px';
        if (it.fix) inp.title = 'Practice — this box is not marked; the verb above is.';
        cEl.appendChild(inp);
        r.inp = inp;
      }
      row.appendChild(cEl);
      host.appendChild(row);
      rows.push(r);
    });

    var reasons = card.items.some(function (i) { return i.why || (i.fix && i.fix.some(function (o) { return o.why; })); })
      ? Reasons(host, card.whyTitle || 'The one fault in each sentence') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(rows.map(function (r) {
        var right = r.it.fix ? r.it.fix.filter(function (o) { return o.ok; })[0] : null;
        return {
          t: r.it.model || (right ? r.it.wrong.replace(/\*(.+?)\*/, right.t) : ''),
          given: r.given,
          ok: r.given ? null : (r.choice === undefined || r.choice === null ? null : !!r.it.fix[r.choice].ok),
          why: r.it.why || (right && right.why) || ''
        };
      }));
    }

    function live() { return rows.filter(function (r) { return r.inp; }); }
    return {
      check: function () {
        attempt(host);
        var n = 0, total = 0;
        rows.forEach(function (r) {
          if (r.given) return;
          if (r.it.fix) {
            total++;
            r.pick.classList.remove('ok', 'no');
            if (r.choice === null) return;
            var ok = !!r.it.fix[r.choice].ok;
            r.pick.classList.add(ok ? 'ok' : 'no');
            if (ok) n++;
            return;
          }
          if (!r.inp) return;
          total++;
          var okT = U.accepts(r.inp.value, r.it.accept);
          r.inp.style.borderColor = okT ? 'var(--ok)' : 'var(--no)';
          if (okT) n++;
        });
        api.save(rows.map(function (r) { return [r.choice === undefined ? null : r.choice, r.inp ? r.inp.value : '']; }));
        tellWhy();
        api.result(n, total);
      },
      reset: function () {
        rows.forEach(function (r) {
          if (r.given) return;
          if (r.it.fix) {
            if (r.choice !== null && !r.it.fix[r.choice].ok) {
              r.choice = null;
              var bs = r.pick.querySelectorAll('button');
              for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
              if (r.draw) r.draw();
            }
            r.pick.classList.remove('ok', 'no');
          } else if (r.inp) {
            if (!U.accepts(r.inp.value, r.it.accept)) r.inp.value = '';
            r.inp.style.borderColor = '';
          }
        });
        if (reasons) reasons.hide();
      },
      hint: function () {
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          if (r.given) continue;
          var wrong = r.it.fix ? (r.choice === null || !r.it.fix[r.choice].ok)
            : (r.inp && !U.accepts(r.inp.value, r.it.accept));
          if (wrong) {
            HSP.toast(r.it.hint || 'Find the time word first — now, every day, yesterday — and the verb form follows.', 4000);
            if (r.pick) r.pick.scrollIntoView({ block: 'center', behavior: 'smooth' });
            else if (r.inp) r.inp.focus();
            return;
          }
        }
        HSP.toast('Every sentence is already corrected.');
      },
      /* THE ONE COMPONENT THAT WAS ALREADY HALF RIGHT, and that is why it is worth a
         note: the multiple-choice branch protected a typed correction with
         `if (r.inp && !r.inp.value)` and only filled an empty box, while the branch
         four lines below it overwrote unconditionally. One author had already
         written the careful version. Now neither branch writes anything.
         RESIDUALS FM-30 / F21. */
      show: function () {
        var out = [];
        rows.forEach(function (r, i) {
          if (r.given) {
            out.push({ t: String(r.it.given || r.it.wrong || ''), given: true, why: r.it.why || '' });
            return;
          }
          if (r.it.fix) {
            var want = 0;
            r.it.fix.forEach(function (o, oi) { if (o.ok) want = oi; });
            var pickTxt = function (ix) {
              return (ix === null || ix === undefined || !r.it.fix[ix]) ? '' : r.it.fix[ix].t;
            };
            var mine = pickTxt(r.choice);
            if (r.inp && String(r.inp.value).trim()) {
              mine = (mine ? mine + ' \u2014 ' : '') + r.inp.value;
            }
            out.push({
              t: (i + 1) + '. ' + r.it.fix[want].t,
              mine: mine,
              ok: (r.choice === null || r.choice === undefined) ? null : r.choice === want,
              why: r.it.why || ''
            });
          } else if (r.inp) {
            var acc = Array.isArray(r.it.accept) ? r.it.accept[0] : r.it.accept;
            out.push({
              t: (i + 1) + '. ' + (acc === undefined ? '' : acc),
              mine: r.inp.value,
              ok: String(r.inp.value).trim() ? U.accepts(r.inp.value, r.it.accept) : null,
              why: r.it.why || ''
            });
          }
        });
        api.reveal({ title: 'The corrections, beside yours', rows: out });
      },
      getState: function () { return rows.map(function (r) { return [r.choice === undefined ? null : r.choice, r.inp ? r.inp.value : '']; }); },
      setState: function (s) {
        if (!Array.isArray(s)) return;
        s.forEach(function (pair, i) {
          var r = rows[i];
          if (!r || !pair) return;
          if (r.it.fix && pair[0] !== null && pair[0] !== undefined) {
            var bs = r.pick.querySelectorAll('button');
            if (bs[pair[0]]) bs[pair[0]].click();
          }
          if (r.inp) r.inp.value = pair[1] || '';
        });
      }
    };
  };

  /* ============================================================
     writer — scaffolded composition
     ============================================================ */
  EX.writer = function (card, host, api) {
    if (card.model) host.appendChild(HSP.ui.modelBox(card.model, 'Look at the model again'));
    var tas = [];
    card.paras.forEach(function (pp, i) {
      var block = mk('div');
      block.style.margin = '14px 0';
      block.innerHTML = '<div class="eyebrow" style="margin-bottom:5px">' + esc(pp.label) + '</div>' +
        '<div class="wc" style="margin-bottom:6px">' + esc(pp.purpose) + '</div>';
      var ta = mk('textarea', 'ta');
      ta.placeholder = pp.placeholder || '';
      ta.rows = pp.rows || 4;
      var meta = mk('div', 'wc');
      meta.style.marginTop = '5px';
      function upd() {
        var wds = U.words(ta.value);
        var past = U.pastVerbs(ta.value);
        meta.innerHTML = wds + ' words' + (card.pastCheck ? ' · past-tense verbs found: ' +
          (past.length ? '<b style="color:var(--ok)">' + past.map(esc).join(', ') + '</b>' : '<b style="color:var(--no)">none yet</b>') : '');
      }
      ta.addEventListener('input', upd);
      upd();
      block.appendChild(ta); block.appendChild(meta);
      host.appendChild(block);
      tas.push(ta);
    });
    if (card.stems) host.appendChild(HSP.ui.stems(card.stems, function (s) {
      var t = tas[0];
      t.value = (t.value ? t.value + ' ' : '') + s;
      t.dispatchEvent(new w.Event('input'));
      t.focus();
    }));
    var tools = mk('div', 'btn-row');
    var bRead = mk('button', 'btn btn-sm', art.icon('sound', 15) + 'Read my writing aloud');
    bRead.title = DEVICE_VOICE;
    bRead.onclick = function () { HSP.speak(tas.map(function (t) { return t.value; }).join(' ')); };
    tools.appendChild(bRead);
    host.appendChild(tools);

    function text() { return tas.map(function (t) { return t.value; }).join('\n\n'); }
    card._getText = text;

    return {
      check: function () {
        attempt(host);
        var total = U.words(text());
        var min = card.minWords || 50;
        var problems = [];
        if (total < min) {
          problems.push(total > 0
            ? total + ' of ' + min + ' words saved \u2014 ' + (min - total) + ' to go.'
            : 'Write at least ' + min + ' words in total.');
        }
        tas.forEach(function (t, i) { if (U.words(t.value) < (card.paras[i].min || 8)) problems.push('Paragraph ' + (i + 1) + ' is still very short.'); });
        if (card.pastCheck && U.pastVerbs(text()).length < 2) problems.push('Use the past tense — the checker found fewer than two past-tense verbs.');
        api.save(tas.map(function (t) { return t.value; }));
        if (problems.length) { api.verdict('part', problems.join(' ')); return; }
        api.complete('Saved — ' + total + ' words. Now move on to get feedback and revise.');
      },
      reset: function () { tas.forEach(function (t) { t.value = ''; t.dispatchEvent(new w.Event('input')); }); api.save([]); },
      getState: function () { return tas.map(function (t) { return t.value; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (tas[i]) { tas[i].value = v; tas[i].dispatchEvent(new w.Event('input')); } }); }
    };
  };

  /* ============================================================
     ranker — rank items into an ordered list, with reasons
     ============================================================ */
  EX.ranker = function (card, host, api) {
    var chosen = [];
    var pool = mk('div', 'chips');
    function drawPool() {
      pool.innerHTML = '';
      var own = mk('input', 'inp');
      own.placeholder = card.addPlaceholder || 'Add your own idea…';
      own.style.maxWidth = '240px';
      own.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && own.value.trim()) { add(own.value.trim()); own.value = ''; }
      });
      (card.pool || []).forEach(function (x) {
        if (chosen.some(function (cc) { return cc.t === x; })) return;
        var cEl = mk('span', 'chip', esc(x));
        cEl.onclick = function () { add(x); };
        pool.appendChild(cEl);
      });
      pool.appendChild(own);
    }
    function add(txt) {
      if (chosen.length >= (card.slots || 5)) { HSP.toast('That is your top ' + (card.slots || 5) + ' — remove one first.'); return; }
      chosen.push({ t: txt, why: '' });
      draw();
    }
    var list = mk('div', 'rank');
    function draw() {
      list.innerHTML = '';
      chosen.forEach(function (c, i) {
        var it = mk('div', 'rank-item');
        it.innerHTML = '<span class="pos"></span>';
        var mid = mk('div', 'tx');
        mid.innerHTML = '<div style="font-weight:600">' + esc(c.t) + '</div>';
        var why = mk('input', 'inp');
        why.placeholder = card.reasonPlaceholder || 'Why does this work well?';
        why.value = c.why || '';
        why.style.marginTop = '5px';
        why.addEventListener('input', function () { c.why = why.value; api.save(chosen); });
        mid.appendChild(why);
        it.appendChild(mid);
        var up = mk('button', 'btn btn-sm btn-ghost', '▲');
        up.onclick = function () { if (i > 0) { chosen.splice(i - 1, 0, chosen.splice(i, 1)[0]); draw(); } };
        var dn = mk('button', 'btn btn-sm btn-ghost', '▼');
        dn.onclick = function () { if (i < chosen.length - 1) { chosen.splice(i + 1, 0, chosen.splice(i, 1)[0]); draw(); } };
        var rm = mk('button', 'btn btn-sm btn-ghost', art.icon('x', 14));
        rm.onclick = function () { chosen.splice(i, 1); draw(); };
        it.appendChild(up); it.appendChild(dn); it.appendChild(rm);
        list.appendChild(it);
      });
      drawPool();
      api.save(chosen);
    }
    host.appendChild(mk('div', 'wc', card.poolLabel || 'Click an idea to add it, or type your own and press Enter.'));
    host.appendChild(pool);
    host.appendChild(mk('div', 'eyebrow', (card.listLabel || 'Your top ' + (card.slots || 5))));
    host.appendChild(list);
    draw();
    return {
      check: function () {
        attempt(host);
        var need = card.slots || 5;
        if (chosen.length < need) { api.verdict('part', 'Choose ' + need + ' ideas — you have ' + chosen.length + '.'); return; }
        var noWhy = chosen.filter(function (c) { return U.words(c.why) < 3; }).length;
        if (noWhy) { api.verdict('part', 'Write a reason for each one (' + noWhy + ' still empty).'); return; }
        api.save(chosen);
        api.complete('Your top ' + need + ' is saved with reasons.');
      },
      reset: function () { chosen = []; draw(); },
      getState: function () { return chosen; },
      setState: function (s) { if (Array.isArray(s)) { chosen = s; draw(); } }
    };
  };

  /* ============================================================
     chipcols — sort chips into columns (scored or open)
     ============================================================ */
  EX.chipcols = function (card, host, api) {
    var pick = Picker(host);
    var placed = {};  /* chip -> colIndex */
    var pool = mk('div', 'chips'), chipEls = {};
    var cols = mk('div', 'cols');
    var colBoxes = [];

    card.cols.forEach(function (c, i) {
      var b = mk('div', 'col-box');
      /* a column can be a picture as well as a word: the sh/ch/j sort
         drops each word onto the mouth that makes the sound */
      var head = '';
      var ca = (card.colArt || [])[i];
      if (ca) head += '<div class="col-art">' + (ca.mouth ? art.mouthDiagram(ca.mouth) : ca.spot ? art.spot(ca.spot) : art.figure(ca.art)) + '</div>';
      b.innerHTML = head + '<h5>' + esc(c.label) + '</h5>';
      var inner = mk('div', 'chips');
      b.appendChild(inner);
      pick.wireDrop(b, function (chip) { place(chip.dataset.cid, i); });
      b.addEventListener('dblclick', function (e) {
        var ch = e.target.closest('.chip'); if (ch) unplace(ch.dataset.cid);
      });
      cols.appendChild(b);
      colBoxes.push({ box: b, inner: inner });
      if (c.seed) c.seed.forEach(function (sd) {
        var s = mk('span', 'chip', esc(sd));
        s.style.opacity = '.72'; s.style.cursor = 'default';
        s.title = 'Given as an example';
        /* The seeded chips are the WORKED EXAMPLES — in the -ed drill they
           are the three sounds the book tells the learner to listen to
           first. They were the only chips with no speaker, which made the
           reference sounds the one thing on the card you could not hear. */
        if (card.sayChips) {
          var ss = mk('button', 'chip-say no-print', art.icon('sound', 13));
          ss.type = 'button';
          ss.title = 'Hear this word';
          ss.setAttribute('aria-label', 'Hear ' + sd);
          ss.style.cursor = 'pointer';
          ss.onclick = function (ev) {
            ev.stopPropagation();
            HSP.say(sd, typeof card.sayChips === 'string' ? card.sayChips : 'course');
          };
          s.appendChild(ss);
        }
        inner.appendChild(s);
      });
    });

    (card.pool || []).forEach(function (x) {
      var cEl = mk('span', 'chip', esc(x));
      cEl.dataset.cid = x;
      pick.wireChip(cEl);
      /* A sort whose columns are SOUNDS has to be audible: the -s and -ed
         ending drills ask the learner to hear a word before placing it, and
         chipcols could not say anything at all. `sayChips` adds a speaker to
         each chip without changing any card that does not ask for one. */
      if (card.sayChips) {
        var sp = mk('button', 'chip-say no-print', art.icon('sound', 13));
        sp.type = 'button';
        sp.title = 'Hear this word';
        sp.setAttribute('aria-label', 'Hear ' + x);
        sp.onclick = function (ev) {
          ev.stopPropagation();
          HSP.say(x, typeof card.sayChips === 'string' ? card.sayChips : 'course');
        };
        cEl.appendChild(sp);
      }
      pool.appendChild(cEl);
      chipEls[x] = cEl;
    });

    host.appendChild(mk('div', 'wc', card.poolLabel || 'Drag each item into a column — or click it, then click a column.'));
    host.appendChild(pool);
    if (card.allowOwn) {
      var own = mk('div', 'btn-row');
      var inp = mk('input', 'inp');
      inp.placeholder = 'Add your own…';
      inp.style.maxWidth = '240px';
      var add = mk('button', 'btn btn-sm', '+ Add');
      add.onclick = function () {
        var v = inp.value.trim(); if (!v || chipEls[v]) return;
        var cEl = mk('span', 'chip', esc(v));
        cEl.dataset.cid = v; pick.wireChip(cEl); pool.appendChild(cEl); chipEls[v] = cEl;
        inp.value = '';
      };
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') add.click(); });
      own.appendChild(inp); own.appendChild(add);
      host.appendChild(own);
    }
    host.appendChild(cols);

    var reasons = card.why ? Reasons(host, card.whyTitle) : null;
    /* every item on the card, in reading order: the worked examples
       at the top of each column first, then the ones to sort */
    function allItems() {
      var out = [];
      card.cols.forEach(function (cl, ci) {
        (cl.seed || []).forEach(function (sd) { out.push({ t: sd, col: ci, given: true }); });
      });
      (card.pool || []).forEach(function (x) { out.push({ t: x, given: false }); });
      return out;
    }
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(allItems().map(function (it) {
        var ok = null;
        if (!it.given && !card.reference) {
          var want = card.answers && card.answers[it.t];
          var got = placed[it.t];
          if (want !== undefined && got !== undefined) ok = Array.isArray(want) ? want.indexOf(got) >= 0 : want === got;
        }
        var col = it.given ? it.col : (card.answers ? (Array.isArray(card.answers[it.t]) ? card.answers[it.t][0] : card.answers[it.t]) : undefined);
        var head = col === undefined ? '' : card.cols[col].short || card.cols[col].label;
        return {
          t: it.t + (head ? ' — ' + head : ''),
          ok: ok, given: it.given, why: card.why[it.t] || ''
        };
      }));
    }

    function place(cid, ci) {
      unplace(cid);
      placed[cid] = ci;
      colBoxes[ci].inner.appendChild(chipEls[cid]);
      chipEls[cid].classList.remove('ok', 'no');
      api.save(placed);
    }
    function unplace(cid) {
      if (placed[cid] === undefined) return;
      delete placed[cid];
      pool.appendChild(chipEls[cid]);
      chipEls[cid].classList.remove('ok', 'no');
    }
    return {
      check: function () {
        attempt(host);
        if (!card.answers) {
          var cnt = Object.keys(placed).length;
          api.save(placed);
          if (cnt < (card.need || 4)) {
            api.verdict('part', progressLine(cnt, (card.need || 4), 'items',
              'place at least ' + ((card.need || 4) - cnt) + ' more.'));
            return;
          }
          /* Reference mode: there is no single right arrangement —
             a skill really does belong to more than one job — so
             nothing is scored, but everything is explained. */
          if (card.reference && reasons) {
            tellWhy();
            api.complete('Saved — ' + cnt + ' sorted. Now read how a working team would place them, below.');
            return;
          }
          api.complete('Saved — ' + cnt + ' items sorted.');
          return;
        }
        var n = 0, total = Object.keys(card.answers).length;
        for (var cid in card.answers) {
          var want = card.answers[cid];
          var got = placed[cid];
          if (!chipEls[cid]) continue;
          chipEls[cid].classList.remove('ok', 'no');
          if (got === undefined) continue;
          var ok = Array.isArray(want) ? want.indexOf(got) >= 0 : want === got;
          chipEls[cid].classList.add(ok ? 'ok' : 'no');
          if (ok) n++;
        }
        api.save(placed);
        tellWhy();
        api.result(n, total, Object.keys(card.answers).filter(function (cid) {
          return placed[cid] !== undefined;
        }).length);
      },
      reset: function () {
        for (var cid in placed) {
          if (card.answers) {
            var want = card.answers[cid];
            var ok = Array.isArray(want) ? want.indexOf(placed[cid]) >= 0 : want === placed[cid];
            if (ok) continue;
          }
          unplace(cid);
        }
        Object.keys(chipEls).forEach(function (k) { chipEls[k].classList.remove('ok', 'no'); });
        if (reasons) reasons.hide();
      },
      /* It used to `place()` every chip, and place() saves - so the revealed sort
         became the learner's saved answer. One of the 20 cards where Show me
         overwrote the saved record too. RESIDUALS FM-30 / F17. */
      show: function () {
        if (!card.answers) {
          api.reveal({
            title: 'How a working team would sort these',
            note: 'There is no single right arrangement for this one \u2014 a skill really '
                + 'does belong to more than one job. Read the notes under the exercise.'
          });
          return;
        }
        var rows = [];
        for (var cid in card.answers) {
          if (!card.answers.hasOwnProperty(cid)) continue;
          var want = card.answers[cid];
          want = Array.isArray(want) ? want[0] : want;
          var got = placed[cid];
          var colName = function (ci) {
            return (card.cols[ci] && (card.cols[ci].short || card.cols[ci].label)) || ('column ' + (ci + 1));
          };
          rows.push({ t: cid + ' \u2192 ' + colName(want),
                      mine: got === undefined ? '' : String(colName(got)),
                      ok: got === undefined ? null : got === want,
                      why: (card.why && card.why[cid]) || '' });
        }
        api.reveal({ title: 'Which column each one belongs in', rows: rows });
      },
      getState: function () { return placed; },
      setState: function (s) { if (s) for (var k in s) if (chipEls[k]) place(k, s[k]); }
    };
  };

  /* ============================================================
     order — put the parts of a text back in order

     The learner sees the blocks shuffled and says which position
     each one belongs in. Shuffled ONCE, in the data, not randomly
     at run time: a random shuffle gives a different exercise every
     reload, so the reasons cannot name what is where, and two
     learners cannot talk about it.

     Marked per position, and every position carries the reason that
     names the signal in the text — which is the whole lesson here,
     because the shape of a narrative is what this card teaches.
     ============================================================ */
  EX.order = function (card, host, api) {
    var pick = Picker(host);
    var placed = {};                  /* slotIndex -> blockId */
    var blocks = card.blocks || [];
    var slots = [], blockEls = {};

    /* `positions` MAY BE A LIST OF BLOCK-ID STRINGS, and in practice always is.
       Every course on this site authors `positions: ['b1','b2','b3']`, while the code
       below reads pos.answer, pos.job, pos.why and pos.hint. On a string those are all
       undefined, so check() compared a placed id against undefined and scored 0 of n
       however the learner arranged the blocks, and show() called place(i, undefined) and
       filled nothing. Measured on the published site: 9 cards in two courses and the
       original accounting course's own, every one of them saying "Not yet" to its own
       shown answer. Normalising here fixes every course that loads this file, and keeps
       the authored form - a bare order of ids - which is the right shape for a card whose
       slots are simply positions 1..n. */
    card.positions = (card.positions || []).map(function (p) {
      return (p && typeof p === 'object') ? p : { answer: p, job: '' };
    });

    if (card.poolLabel) host.appendChild(mk('div', 'wc', card.poolLabel));

    /* the slots: one per position, each saying what job it wants */
    var slotWrap = mk('div', 'ord-slots');
    (card.positions || []).forEach(function (pos, i) {
      var sl = mk('div', 'ord-slot');
      sl.innerHTML = '<div class="ord-n">' + (i + 1) + '</div>' +
        '<div class="ord-job">' + esc(pos.job) + '</div>' +
        '<div class="ord-drop slot">drop a paragraph here</div>';
      pick.wireDrop(sl.querySelector('.ord-drop'), function (chip) { place(i, chip.dataset.cid); });
      sl.querySelector('.ord-drop').addEventListener('dblclick', function () { unplace(i); });
      slotWrap.appendChild(sl);
      slots.push(sl);
    });

    /* the shuffled blocks */
    var poolWrap = mk('div', 'ord-pool');
    blocks.forEach(function (b) {
      var el2 = mk('div', 'ord-block');
      el2.dataset.cid = b.id;
      el2.innerHTML = '<div class="ord-tag">' + esc(b.tag || b.id) + '</div>' +
        '<div class="ord-text">' + b.text + '</div>';
      if (card.say) {
        var sp = mk('button', 'ord-say no-print', art.icon('sound', 14));
        sp.type = 'button';
        sp.title = 'Hear this paragraph';
        sp.setAttribute('aria-label', 'Hear paragraph ' + (b.tag || b.id));
        sp.onclick = function (ev) {
          ev.stopPropagation();
          HSP.say(String(b.text).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
            null, { voice: HSP.castVoice(card.say), fallback: card.voice || 'f' });
        };
        sp.addEventListener('keydown', function (ev) { ev.stopPropagation(); });
        sp.addEventListener('dragstart', function (ev) { ev.preventDefault(); ev.stopPropagation(); });
        el2.appendChild(sp);
      }
      pick.wireChip(el2);
      poolWrap.appendChild(el2);
      blockEls[b.id] = el2;
    });

    host.appendChild(poolWrap);
    host.appendChild(slotWrap);

    function place(ix, cid) {
      for (var k in placed) if (placed[k] === cid) unplace(+k);
      if (placed[ix]) unplace(ix);
      placed[ix] = cid;
      var drop = slots[ix].querySelector('.ord-drop');
      drop.innerHTML = '';
      drop.appendChild(blockEls[cid]);
      slots[ix].classList.add('filled');
      slots[ix].classList.remove('ok', 'no');
      api.save(placed);
    }
    function unplace(ix) {
      var cid = placed[ix];
      if (!cid) return;
      delete placed[ix];
      poolWrap.appendChild(blockEls[cid]);
      var drop = slots[ix].querySelector('.ord-drop');
      drop.textContent = 'drop a paragraph here';
      slots[ix].classList.remove('filled', 'ok', 'no');
    }

    var reasons = card.positions.some(function (p) { return p.why; })
      ? Reasons(host, card.whyTitle || 'How you can tell which part is which') : null;
    function blockById(id) { for (var i = 0; i < blocks.length; i++) if (blocks[i].id === id) return blocks[i]; return null; }
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(card.positions.map(function (pos, i) {
        var b = blockById(pos.answer);
        return {
          t: (i + 1) + '. ' + pos.job + '  —  paragraph ' + (b ? (b.tag || b.id) : '?'),
          ok: placed[i] === undefined ? null : placed[i] === pos.answer,
          why: pos.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        var n = 0;
        card.positions.forEach(function (pos, i) {
          slots[i].classList.remove('ok', 'no');
          if (placed[i] === undefined) return;
          var ok = placed[i] === pos.answer;
          slots[i].classList.add(ok ? 'ok' : 'no');
          if (ok) n++;
        });
        api.save(placed);
        tellWhy();
        if (n === card.positions.length && card.after) {
          if (!host.querySelector('.ord-after')) {
            var nt = mk('div', 'note warm ord-after', card.after);
            host.appendChild(nt);
          }
        }
        api.result(n, card.positions.length, card.positions.filter(function (pos, i) {
          return placed[i] !== undefined;
        }).length);
      },
      reset: function () {
        card.positions.forEach(function (pos, i) {
          if (placed[i] !== undefined && placed[i] !== pos.answer) unplace(i);
          slots[i].classList.remove('ok', 'no');
        });
        if (reasons) reasons.hide();
      },
      hint: function () {
        for (var i = 0; i < card.positions.length; i++) {
          var pos = card.positions[i];
          if (placed[i] !== pos.answer) {
            /* With a bare order of ids there is no job to name, so name the paragraph
               instead - "Position 1 is undefined." was what this said otherwise. */
            var b = blockById(pos.answer);
            var what = pos.job || ('paragraph ' + ((b && (b.tag || b.id)) || pos.answer));
            HSP.toast(pos.hint || ('Position ' + (i + 1) + ' is ' + what + '.'), 4600);
            try { slots[i].scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { }
            return;
          }
        }
        HSP.toast('They are already in the right order.');
      },
      show: function () {
        api.reveal({
          title: 'The order they go in',
          rows: card.positions.map(function (pos, i) {
            var b = blockById(pos.answer);
            var mineB = placed[i] ? blockById(placed[i]) : null;
            var txt = function (bl) {
              return bl ? String(bl.text || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
            };
            return { t: (i + 1) + '. ' + txt(b), mine: txt(mineB),
                     ok: placed[i] === undefined ? null : placed[i] === pos.answer,
                     why: pos.why || '' };
          })
        });
      },
      getState: function () { return placed; },
      setState: function (s) { if (s) for (var k in s) if (blockEls[s[k]]) place(+k, s[k]); }
    };
  };

  /* ============================================================
     fields — a fillable research / interview card
     ============================================================ */
  EX.fields = function (card, host, api) {
    var inputs = [];
    var grid = mk('div', 'drops cols-2');
    card.fields.forEach(function (f) {
      var row = mk('div', 'drop');
      row.style.borderStyle = 'solid';
      row.innerHTML = '<span class="lbl">' + esc(f.label) + '</span>';
      var inp = mk('input', 'inp');
      inp.style.maxWidth = '55%';
      inp.placeholder = f.placeholder || '';
      if (f.given) { inp.value = f.given; inp.disabled = true; }
      row.appendChild(inp);
      grid.appendChild(row);
      inputs.push(inp);
    });
    host.appendChild(grid);
    if (card.samples) {
      var box = mk('div', 'note');
      box.style.display = 'none';
      box.innerHTML = '<h4>' + esc(card.samplesTitle || 'Sample programmes you can look at') + '</h4>' +
        HSP.renderTable(card.samples).innerHTML;
      var tg = mk('button', 'btn btn-sm', art.icon('book', 15) + 'Browse sample programmes');
      tg.style.marginTop = '10px';
      tg.onclick = function () { box.style.display = box.style.display === 'none' ? 'block' : 'none'; };
      host.appendChild(tg); host.appendChild(box);
    }
    return {
      check: function () {
        attempt(host);
        var filled = inputs.filter(function (x) { return x.value.trim().length > 1; }).length;
        api.save(inputs.map(function (x) { return x.value; }));
        if (filled >= (card.need || inputs.length)) api.complete('Research card saved.');
        else api.verdict('part', 'Fill in at least ' + (card.need || inputs.length) + ' fields (you have ' + filled + ').');
      },
      reset: function () { inputs.forEach(function (x) { if (!x.disabled) x.value = ''; }); },
      getState: function () { return inputs.map(function (x) { return x.value; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (inputs[i] && !inputs[i].disabled) inputs[i].value = v; }); }
    };
  };

  /* ============================================================
     taskcard — out-of-class task, printable
     ============================================================ */
  EX.taskcard = function (card, host, api) {
    var box = mk('div', 'note warm');
    box.innerHTML = '<h4>' + esc(card.badge || 'Bring it to life') + '</h4><div style="font-size:15px">' + card.body + '</div>';
    host.appendChild(box);
    var ta = mk('textarea', 'ta');
    ta.placeholder = card.placeholder || 'Write what you found, and bring it to the next class…';
    host.appendChild(ta);
    var row = mk('div', 'btn-row');
    var pr = mk('button', 'btn btn-sm', art.icon('print', 15) + 'Print this task card');
    pr.onclick = function () { w.print(); };
    row.appendChild(pr);
    host.appendChild(row);
    return {
      check: function () {
        attempt(host);
        api.save(ta.value);
        if (U.words(ta.value) >= 5) api.complete('Task recorded. Your teacher will check back next session.');
        else api.verdict('part', 'Write a few words about what you found or plan to find.');
      },
      reset: function () { ta.value = ''; },
      getState: function () { return ta.value; },
      setState: function (s) { if (typeof s === 'string') ta.value = s; }
    };
  };

  /* ============================================================
     phrasebank — clickable phrase list with audio and swapping
     ============================================================ */
  EX.phrasebank = function (card, host, api) {
    var used = {};
    var box = mk('div', 'note');
    box.innerHTML = '<h4>' + esc(card.title || 'In other words…') + '</h4>';
    var list = mk('div', 'chips');
    card.phrases.forEach(function (ph) {
      var cEl = mk('span', 'chip', esc(ph));
      cEl.onclick = function () {
        HSP.say(ph, card.role || 'course', { fallback: card.voice || 'm' });
        used[ph] = true;
        cEl.classList.add('ok');
        if (card.swapTarget) {
          var tgt = d.getElementById(card.swapTarget);
          if (tgt) tgt.textContent = ph;
        }
        api.save(Object.keys(used));
      };
      list.appendChild(cEl);
    });
    box.appendChild(list);
    host.appendChild(box);
    if (card.swapLine) {
      var line = mk('div', 'reading');
      line.style.marginTop = '12px';
      line.innerHTML = card.swapLine.replace('[[swap]]', '<b id="' + card.swapTarget + '" style="color:var(--accent)">' + esc(card.phrases[0]) + '</b>');
      var sp = mk('button', 'btn btn-sm', art.icon('sound', 15) + 'Hear the line with this phrase');
      sp.style.marginTop = '8px';
      sp.onclick = function () { HSP.speak(line.textContent.replace(/\s+/g, ' ').trim(), { voice: 'm' }); };
      line.appendChild(sp);
      host.appendChild(line);
    }
    return {
      check: function () {
        attempt(host);
        var n = Object.keys(used).length;
        api.save(Object.keys(used));
        if (n >= (card.need || card.phrases.length)) api.complete('You have heard and banked all ' + n + ' phrases.');
        else api.verdict('part', 'Listen to all ' + card.phrases.length + ' phrases (' + n + ' so far).');
      },
      reset: function () { used = {}; var cs = list.querySelectorAll('.chip'); for (var i = 0; i < cs.length; i++) cs[i].classList.remove('ok'); },
      getState: function () { return Object.keys(used); },
      setState: function (s) {
        if (!Array.isArray(s)) return;
        s.forEach(function (ph) { used[ph] = true; });
        var cs = list.querySelectorAll('.chip');
        for (var i = 0; i < cs.length; i++) if (used[cs[i].textContent]) cs[i].classList.add('ok');
      }
    };
  };

  /* ============================================================
     opinion — agree/disagree slider plus reasons
     ============================================================ */
  EX.opinion = function (card, host, api) {
    var stmt = mk('div', 'reading');
    stmt.style.fontStyle = 'italic';
    stmt.style.fontSize = '17px';
    stmt.textContent = card.statement;
    host.appendChild(stmt);

    var sl = mk('input', '');
    sl.type = 'range'; sl.min = '0'; sl.max = '4'; sl.value = '2'; sl.style.width = '100%';
    sl.style.margin = '16px 0 4px';
    host.appendChild(sl);
    var labels = ['Strongly disagree', 'Disagree', 'Not sure', 'Agree', 'Strongly agree'];
    var lab = mk('div', 'eyebrow', labels[2]);
    lab.style.textAlign = 'center';
    host.appendChild(lab);
    sl.addEventListener('input', function () { lab.textContent = labels[sl.value]; });

    var ta = mk('textarea', 'ta');
    ta.placeholder = 'Why? Give at least one reason…';
    host.appendChild(ta);

    /* The class result is held back until the learner has committed
       to a view, then shown as a real chart so the split is visible
       rather than described. */
    var after = mk('div');
    after.style.display = 'none';
    after.appendChild(HSP.renderVisual({
      art: 'opinion-bar',
      arg: {
        dist: card.distribution,
        labels: ['strongly\ndisagree', 'disagree', 'not sure', 'agree', 'strongly\nagree'],
        title: 'What the rest of the class said'
      },
      caption: 'The class is split — which means your reason matters more than your answer.'
    }));
    var ctr = mk('div', 'note');
    ctr.innerHTML = '<h4>Now answer one of these</h4>' +
      card.counters.map(function (cc) { return '<div style="margin-top:5px">• ' + esc(cc) + '</div>'; }).join('');
    after.appendChild(ctr);
    host.appendChild(after);

    return {
      check: function () {
        attempt(host);
        api.save([sl.value, ta.value]);
        if (U.words(ta.value) < 6) { api.verdict('part', 'Give a reason of at least six words.'); return; }
        after.style.display = 'block';
        api.complete('Opinion saved. Read the counter-arguments and talk them over.');
      },
      reset: function () { sl.value = '2'; lab.textContent = labels[2]; ta.value = ''; after.style.display = 'none'; },
      coachText: function () { return labels[sl.value] + '. ' + ta.value; },
      getState: function () { return [sl.value, ta.value]; },
      setState: function (s) { if (Array.isArray(s)) { sl.value = s[0] || '2'; lab.textContent = labels[sl.value]; ta.value = s[1] || ''; } }
    };
  };

  /* ============================================================
     predict — guess before listening, then compare
     ============================================================ */
  EX.predict = function (card, host, api) {
    var rows = [];
    card.items.forEach(function (it, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      var line = mk('div', 'qt');
      line.innerHTML = it.text.replace('[[ ]]', '<input class="blank sm pred" aria-label="prediction">');
      cEl.appendChild(line);
      var cmp = mk('div', 'wc');
      cmp.style.marginTop = '4px'; cmp.style.display = 'none';
      cEl.appendChild(cmp);
      row.appendChild(cEl);
      host.appendChild(row);
      rows.push({ inp: line.querySelector('.pred'), cmp: cmp, it: it });
    });
    var locked = false;

    var reasons = card.items.some(function (i) { return i.why; })
      ? Reasons(host, card.whyTitle || 'What he actually said, and why') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(rows.map(function (r) {
        var a = Array.isArray(r.it.accept) ? r.it.accept[0] : r.it.accept;
        return {
          t: a,
          ok: !String(r.inp.value).trim() ? null : U.accepts(r.inp.value, r.it.accept),
          why: r.it.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        if (!locked) {
          var filled = rows.filter(function (r) { return r.inp.value.trim(); }).length;
          if (filled < rows.length) { api.verdict('part', 'Make a prediction for all ' + rows.length + ' before you listen.'); return; }
          locked = true;
          api.save(rows.map(function (r) { return r.inp.value; }));
          api.verdict('part', 'Predictions locked. Now play the interview below, then press Check answers again.');
          rows.forEach(function (r) { r.inp.disabled = true; r.inp.style.opacity = '.75'; });
          return;
        }
        var n = 0;
        rows.forEach(function (r) {
          var ok = U.accepts(r.inp.value, r.it.accept);
          r.cmp.style.display = 'block';
          r.cmp.innerHTML = ok
            ? '<b style="color:var(--ok)">✓ your prediction matched</b>'
            : 'you predicted <b>' + esc(r.inp.value) + '</b> — the speaker said <b style="color:var(--accent)">' + esc(Array.isArray(r.it.accept) ? r.it.accept[0] : r.it.accept) + '</b>';
          r.inp.classList.add(ok ? 'ok' : 'no');
          if (ok) n++;
        });
        tellWhy();
        api.result(n, rows.length);
      },
      reset: function () {
        locked = false;
        rows.forEach(function (r) { r.inp.disabled = false; r.inp.style.opacity = ''; r.inp.classList.remove('ok', 'no'); r.cmp.style.display = 'none'; });
        if (reasons) reasons.hide();
      },
      /* It used to type the answer into every box AND set `disabled = true` on
         them, so after a reveal the learner could not type at all until the card
         was destroyed and rebuilt. RESIDUALS FM-30 / F23. */
      show: function () {
        api.reveal({
          title: 'What the speaker actually said',
          note: 'Your predictions are still in the boxes \u2014 compare them.',
          rows: rows.map(function (r, i) {
            var a = Array.isArray(r.it.accept) ? r.it.accept[0] : r.it.accept;
            return { t: (i + 1) + '. ' + a, mine: r.inp.value,
                     ok: String(r.inp.value).trim() ? U.accepts(r.inp.value, r.it.accept) : null,
                     why: r.it.why || '' };
          })
        });
      },
      getState: function () { return rows.map(function (r) { return r.inp.value; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (rows[i]) rows[i].inp.value = v; }); }
    };
  };

  /* ============================================================
     flashcards — timed recall over a picture
     ============================================================ */
  EX.flashcards = function (card, host, api) {
    var order = [], pos = 0, score = 0, started = false;
    var stage = mk('div', 'flash');
    host.appendChild(stage);
    var sceneBox = mk('div', 'diorama');
    sceneBox.innerHTML = art.diorama(card.scene);
    sceneBox.style.marginTop = '12px';
    host.appendChild(sceneBox);
    var hs = {};
    card.items.forEach(function (it) {
      var b = mk('button', 'hs', esc(it.num));
      b.type = 'button';
      b.style.left = it.at[0] + '%'; b.style.top = it.at[1] + '%';
      b.onclick = function () { answer(it.id); };
      sceneBox.appendChild(b);
      hs[it.id] = b;
    });
    function start() {
      order = U.shuffle(card.items.map(function (x) { return x.id; }));
      pos = 0; score = 0; started = true;
      Object.keys(hs).forEach(function (k) { hs[k].classList.remove('ok', 'no'); });
      next();
    }
    function next() {
      if (pos >= order.length) {
        stage.innerHTML = '<div><div class="big">' + score + ' / ' + order.length + '</div><div class="wc">Press Check answers to record it.</div></div>';
        return;
      }
      var id = order[pos];
      var it = card.items.filter(function (x) { return x.id === id; })[0];
      stage.innerHTML = '<div><div class="wc">' + (pos + 1) + ' of ' + order.length + ' — point at the picture</div>' +
        '<div class="big">' + esc(it.label) + '</div></div>';
      HSP.say(it.label, 'course');
    }
    function answer(id) {
      if (!started) { HSP.toast('Press Start first.'); return; }
      if (pos >= order.length) return;
      var ok = id === order[pos];
      hs[id].classList.add(ok ? 'ok' : 'no');
      if (ok) score++;
      pos++;
      setTimeout(next, 420);
    }
    var row = mk('div', 'btn-row');
    var st = mk('button', 'btn btn-accent', art.icon('play', 16) + 'Start the drill');
    st.onclick = start;
    row.appendChild(st);
    host.appendChild(row);
    stage.innerHTML = '<div><div class="wc">A word is spoken — click the matching picture.</div><div class="big">Ready?</div></div>';
    return {
      check: function () {
        attempt(host);
        if (!started || pos < order.length) {
          api.verdict('part', !started
            ? 'Start the drill \u2014 turn over the first card.'
            : progressLine(pos, order.length, 'cards',
                'turn over the ' + (order.length - pos) + ' still to go.'));
          return;
        }
        api.save({ score: score, of: order.length });
        api.result(score, order.length);
      },
      reset: start,
      getState: function () { return { score: score, of: order.length }; }
    };
  };

  /* ============================================================
     pyramid — Active vs Passive Learning
     ============================================================ */
  EX.pyramid = function (card, host, api) {
    var box = mk('div');
    box.innerHTML = art.pyramid(card.tiers);
    host.appendChild(box);
    var info = mk('div', 'note');
    info.innerHTML = '<h4>Examples</h4><div id="pyr-eg">Hover or click a tier to see what counts.</div>';
    host.appendChild(info);
    box.addEventListener('click', function (ev) {
      var rw = ev.target.closest('.pyr-row'); if (!rw) return;
      var tier = card.tiers[parseInt(rw.dataset.tier, 10)];
      info.querySelector('#pyr-eg').innerHTML = '<b>' + esc(tier.name) + ' — ' + tier.pct + '% remembered after two weeks.</b><br>' + esc(tier.detail || tier.eg);
    });
    box.addEventListener('mouseover', function (ev) {
      var rw = ev.target.closest('.pyr-row'); if (!rw) return;
      var tier = card.tiers[parseInt(rw.dataset.tier, 10)];
      info.querySelector('#pyr-eg').innerHTML = '<b>' + esc(tier.name) + ' — ' + tier.pct + '%</b><br>' + esc(tier.detail || tier.eg);
    });
    if (card.readerNote) host.appendChild(mk('div', 'note warm', '<h4>Reader\'s note</h4>' + card.readerNote));

    /* the questions under the chart are whatever the card says they
       are — they used to be hardcoded as a cloze, which forced a
       phrase answer to be typed when it should have been chosen */
    var q = withDefaults(card.quiz, {});
    var sub = (HSP.ex[q.type] || HSP.ex.cloze)(q.type === 'cloze' || !q.type ? withDefaults(q, { plain: true }) : q, host, api);
    return sub;
  };

  /* ============================================================
     pie — class results chart
     ============================================================ */
  EX.pie = function (card, host, api) {
    var rows = (card.seed || []).map(function (s) { return { label: s.label, value: s.value }; });
    var wrapP = mk('div', 'pie-wrap');
    var chart = mk('div');
    var legend = mk('div', 'legend');
    wrapP.appendChild(chart); wrapP.appendChild(legend);
    host.appendChild(mk('div', 'eyebrow', card.question || 'Class results'));
    host.appendChild(wrapP);

    var tbl = mk('div');
    host.appendChild(tbl);

    function draw() {
      chart.innerHTML = art.pie(rows, 210);
      legend.innerHTML = rows.map(function (rr, i) {
        var total = rows.reduce(function (a, b) { return a + (Number(b.value) || 0); }, 0) || 1;
        return '<div><i style="background:' + art.pieColours[i % art.pieColours.length] + '"></i>' +
          esc(rr.label) + ' — <b>' + rr.value + '</b> (' + Math.round((rr.value / total) * 100) + '%)</div>';
      }).join('');
      tbl.innerHTML = '';
      var grid = mk('div', 'drops cols-2');
      rows.forEach(function (rr, i) {
        var line = mk('div', 'drop');
        line.style.borderStyle = 'solid';
        line.innerHTML = '<span class="lbl">' + esc(rr.label) + '</span>';
        var inp = mk('input', 'inp');
        inp.type = 'number'; inp.min = '0'; inp.value = rr.value; inp.style.maxWidth = '90px';
        inp.addEventListener('input', function () { rr.value = Number(inp.value) || 0; draw(); api.save(rows); });
        line.appendChild(inp);
        grid.appendChild(line);
      });
      tbl.appendChild(grid);
      /* accessible data table */
      var at = mk('table', 'tbl');
      at.innerHTML = '<caption class="sr">Data behind the pie chart</caption><thead><tr><th>Answer</th><th>Count</th></tr></thead><tbody>' +
        rows.map(function (rr) { return '<tr><td>' + esc(rr.label) + '</td><td>' + rr.value + '</td></tr>'; }).join('') + '</tbody>';
      at.classList.add('sr');
      tbl.appendChild(at);
    }
    draw();
    return {
      check: function () {
        attempt(host);
        var total = rows.reduce(function (a, b) { return a + (Number(b.value) || 0); }, 0);
        api.save(rows);
        if (total >= (card.minTotal || 3)) api.complete('Chart built from ' + total + ' answers.');
        else api.verdict('part', 'Enter the results of at least ' + (card.minTotal || 3) + ' people.');
      },
      reset: function () { rows.forEach(function (rr) { rr.value = 0; }); draw(); },
      getState: function () { return rows; },
      setState: function (s) { if (Array.isArray(s)) { rows = s; draw(); } }
    };
  };

  /* ============================================================
     clockscrub — Danny's shift, present vs past
     ============================================================ */
  EX.clockscrub = function (card, host, api) {
    /* This was a time slider, and a slider was the wrong instrument.
       It said time is something you scrub freely in both directions,
       when the lesson's whole point is that NOW is a wall and which
       side of it you are on decides the tense. It also ran two
       positions PAST now, into a future this lesson does not teach.

       The live figure plays the day forward instead, narrates each
       block in the tense that block demands, and stops dead at NOW.
       The static twin is what prints; `live` falls back to it by
       itself if the animation is ever unavailable. */
    var live = art.hasLive('shift-day') ? art.live('shift-day', host) : null;
    if (!live) {
      var pic = mk('div');
      pic.style.borderRadius = '12px'; pic.style.overflow = 'hidden';
      pic.style.border = '1px solid var(--border)';
      pic.innerHTML = art.figure('shift-day');
      host.appendChild(pic);
    }

    var tbl = HSP.renderTable({
      title: card.title2 || card.title,
      head: ['Time', 'Activity'],
      rows: card.slots.map(function (s) {
        /* the row that is still running is the one every present-tense
           question on this card is about, so it says so */
        var open = /now/i.test(s.time);
        return [s.time, s.act + (open ? ' — still going on now' : '')];
      })
    });
    host.appendChild(tbl);

    /* Four unrelated question-and-answer pairs teach the frame. One
       conversation that runs across the four tenses teaches the
       frame and what a reply has to do. */
    var sub = card.turns
      /* the whole card goes through: a hand-written list of
         fields silently drops anything added later, and a card that
         carried answers would have rendered perfectly and marked
         nothing. Only the two names that differ are overridden. */
      ? EX.convo(withDefaults(card, { lead: card.convoLead }), host, api)
      : EX.builder({
        frame: card.frame,
        banks: card.banks,
        need: card.need || 4,
        tenses: card.tenses
      }, host, api);
    return sub;
  };

  /* ============================================================
     hotspot — explorable diorama, click a person, build sentences
     ============================================================ */
  EX.hotspot = function (card, host, api) {
    var past = false;
    var box = mk('div', 'diorama');
    host.appendChild(box);
    var pins = [];

    function paint() {
      box.innerHTML = art.diorama(card.scene, past);
      pins.forEach(function (p) { box.appendChild(p); });
    }
    card.people.forEach(function (pp, i) {
      var b = mk('button', 'hs pulse', esc(i + 1));
      b.type = 'button';
      b.style.left = pp.at[0] + '%'; b.style.top = pp.at[1] + '%';
      b.title = pp.name;
      b.onclick = function () {
        var info = past ? pp.past : pp.now;
        HSP.toast(pp.name + ': ' + info, 3200);
        b.classList.remove('pulse');
        sel.textContent = pp.name;
        detail.innerHTML = '<b>' + esc(pp.name) + '</b> — ' + (past ? 'at ' + esc(card.pastTime) : 'now') + ': ' + esc(info);
      };
      pins.push(b);
    });
    paint();

    var ctr = mk('div', 'btn-row');
    if (card.pastTime) {
      var tog = mk('button', 'btn btn-accent', art.icon('loop', 16) + 'Rewind to ' + card.pastTime);
      tog.onclick = function () {
        past = !past;
        tog.innerHTML = art.icon('loop', 16) + (past ? 'Back to now' : 'Rewind to ' + card.pastTime);
        paint();
        detail.innerHTML = past
          ? 'It is ' + esc(card.pastTime) + '. Ask <i>What <b>was</b> … <b>doing</b>?</i>'
          : 'It is now. Ask <i>What <b>is</b> … <b>doing</b>?</i>';
      };
      ctr.appendChild(tog);
    }
    var sel = mk('span', 'bookchip', 'click a person');
    ctr.appendChild(sel);
    host.appendChild(ctr);

    var detail = mk('div', 'note');
    detail.innerHTML = 'Click any numbered person to see what they are doing.';
    host.appendChild(detail);

    var legend = mk('div', 'chips');
    card.people.forEach(function (pp, i) {
      var cEl = mk('span', 'chip', (i + 1) + '. ' + esc(pp.name));
      cEl.style.cursor = 'default';
      legend.appendChild(cEl);
    });
    host.appendChild(legend);

    var sub = card.turns
      /* the whole card goes through: a hand-written list of
         fields silently drops anything added later, and a card that
         carried answers would have rendered perfectly and marked
         nothing. Only the two names that differ are overridden. */
      ? EX.convo(withDefaults(card, { lead: card.convoLead }), host, api)
      : EX.builder({
        frame: card.frame,
        banks: card.banks,
        need: card.need || 4,
        tenses: card.tenses,
        record: card.record
      }, host, api);
    return sub;
  };

  /* ============================================================
     scene — embed a CineScene, with optional questions underneath
     ============================================================ */
  function sceneInline(sceneId, host) {
    var holder = mk('div', 'scene-shell');
    setTimeout(function () { HSP.cine.mount(holder, sceneId); }, 0);
    return holder;
  }
  HSP.sceneInline = sceneInline;

  EX.scene = function (card, host, api) {
    host.appendChild(sceneInline(card.scene, host));
    if (card.passage) host.appendChild(passageNode(card.passage));
    if (card.after) host.appendChild(mk('div', 'note', card.after));
    var sub = null;
    if (card.quiz) {
      var qcard = Object.assign({}, card.quiz);
      /* THE NESTED CARD'S OWN HEADING. core.js renders a card's title and instruction for the
         OUTER card only, so without this the learner reaches the questions under a listening
         scene with no direction at all. Patched by tools/fms_engine_lift.py, which REFUSES if
         this line goes, and checked by gates/fms_render.py. */
      if (qcard.title) host.appendChild(mk('h4', 'sub-h', esc(qcard.title)));
      if (qcard.instruction) host.appendChild(mk('p', 'instr', qcard.instruction));
      sub = EX[qcard.type](qcard, host, api);
    }
    if (!sub) {
      /* in the footer, for the same reason as EX.study - see the note there */
      var done = mk('button', 'btn btn-accent', art.icon('check', 16) + 'I have watched this');
      done.onclick = function () { attempt(host); api.complete('Marked as watched.'); };
      return { reset: function () { api.clearVerdict(); }, footer: [done] };
    }
    return sub;
  };

  /* ============================================================
     roleplay — pick a role, the scene plays the other part
     ============================================================ */
  EX.roleplay = function (card, host, api) {
    var holder = mk('div', 'scene-shell');
    host.appendChild(holder);
    var ctl;
    setTimeout(function () { ctl = HSP.cine.mount(holder, card.scene); }, 0);

    var roleRow = mk('div', 'btn-row');
    roleRow.appendChild(mk('span', 'wc', 'Your role: '));
    var seg = mk('div', 'tp-seg');
    card.roles.forEach(function (rr, i) {
      var b = mk('button', '', esc(rr.label));
      b.type = 'button';
      b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      b.onclick = function () {
        var bs = seg.querySelectorAll('button');
        for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
        b.setAttribute('aria-pressed', 'true');
        if (ctl) ctl.setMute(rr.who);
        HSP.toast('You are ' + rr.label + ' — the scene will pause for your lines.');
      };
      seg.appendChild(b);
    });
    roleRow.appendChild(seg);
    host.appendChild(roleRow);
    setTimeout(function () { if (ctl) ctl.setMute(card.roles[0].who); }, 50);

    if (card.remember) {
      var rem = mk('div', 'note warm');
      rem.innerHTML = '<h4>Remember</h4>' + card.remember.map(function (x) { return '<div style="margin-bottom:4px">• ' + esc(x) + '</div>'; }).join('');
      host.appendChild(rem);
    }
    if (card.table) host.appendChild(HSP.renderTable(card.table));
    host.appendChild(HSP.ui.recorder());

    var ta = mk('textarea', 'ta');
    ta.placeholder = card.notePlaceholder || 'Write two lines you said in the role-play…';
    ta.style.marginTop = '12px';
    host.appendChild(ta);

    return {
      check: function () {
        attempt(host);
        api.save(ta.value);
        if (U.words(ta.value) >= (card.minWords || 10)) api.complete('Role-play recorded. Swap roles and try the other part too.');
        else api.verdict('part', progressLine(U.words(ta.value), (card.minWords || 10),
          'words', 'write at least '
          + Math.max(0, (card.minWords || 10) - U.words(ta.value))
          + ' more from your role-play.'));
      },
      reset: function () { ta.value = ''; },
      getState: function () { return ta.value; },
      setState: function (s) { if (typeof s === 'string') ta.value = s; }
    };
  };

  /* ============================================================
     observer — tick active-listening behaviours in real time
     ============================================================ */
  EX.observer = function (card, host, api) {
    var holder = mk('div', 'scene-shell');
    host.appendChild(holder);
    var ctl, ticks = [], running = false;
    setTimeout(function () {
      ctl = HSP.cine.mount(holder, card.scene, {
        onLine: function (idx, line) {
          if (line && line.cue) lastCue = { cue: line.cue, at: Date.now() };
        },
        onPlay: function () { running = true; },
        onStop: function () { running = false; }
      });
    }, 0);
    var lastCue = null;

    var grid = mk('div', 'matrix-wrap');
    var h = '<table class="matrix"><thead><tr><th>Do</th><th>Seen</th><th>Say</th><th>Heard</th></tr></thead><tbody>';
    for (var i = 0; i < card.dos.length; i++) {
      h += '<tr><th>' + esc(card.dos[i]) + '</th><td><button type="button" data-cue="' + esc(card.dos[i]) + '" aria-pressed="false">✓</button></td>' +
        '<th>' + esc(card.says[i]) + '</th><td><button type="button" data-cue="' + esc(card.says[i]) + '" aria-pressed="false">✓</button></td></tr>';
    }
    h += '</tbody></table>';
    grid.innerHTML = h;
    host.appendChild(grid);

    grid.addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      var cue = b.dataset.cue;
      b.setAttribute('aria-pressed', 'true');
      var live = lastCue ? (Array.isArray(lastCue.cue) ? lastCue.cue : [lastCue.cue]) : [];
      var good = live.indexOf(cue) >= 0 && (Date.now() - lastCue.at) < (card.tolerance || 4500);
      b.parentElement.classList.remove('ok', 'no');
      b.parentElement.classList.add(good ? 'ok' : 'no');
      ticks.push({ cue: cue, good: good });
      api.save(ticks);
    });

    host.appendChild(mk('div', 'wc', 'Play the handover and tick each behaviour as it happens. A tick counts only if it lands within a few seconds of the real cue.'));

    return {
      check: function () {
        attempt(host);
        var good = {};
        ticks.forEach(function (t) { if (t.good) good[t.cue] = 1; });
        var cues = 0;
        HSP.scenes[card.scene].lines.forEach(function (l) {
          if (l.cue) cues += Array.isArray(l.cue) ? l.cue.length : 1;
        });
        api.save(ticks);
        api.result(Math.min(Object.keys(good).length, cues), cues);
      },
      reset: function () {
        ticks = [];
        var bs = grid.querySelectorAll('button');
        for (var i = 0; i < bs.length; i++) { bs[i].setAttribute('aria-pressed', 'false'); bs[i].parentElement.classList.remove('ok', 'no'); }
      },
      /* Already non-destructive - it only wrote a verdict. Moved into the panel so
         every reveal in the engine is in one place and reads the same way, and
         because a long list of cues in the one-line verdict box was unreadable. */
      show: function () {
        var sc = HSP.scenes[card.scene], list = [];
        sc.lines.forEach(function (l) {
          if (!l.cue) return;
          (Array.isArray(l.cue) ? l.cue : [l.cue]).forEach(function (x) { list.push(x); });
        });
        api.reveal({
          title: 'The cues, in order',
          rows: list.map(function (x, i) { return { t: (i + 1) + '. ' + x, ok: null }; })
        });
      },
      getState: function () { return ticks; },
      setState: function (s) { if (Array.isArray(s)) ticks = s; }
    };
  };

  /* ============================================================
     peerreview — comment on a seeded partner text
     ============================================================ */
  EX.peerreview = function (card, host, api) {
    var box = mk('div', 'reading journal');
    box.innerHTML = '<h4>' + esc(card.partner.title) + '</h4>' +
      card.partner.paras.map(function (pr, pi) {
        /* split into sentences without a lookbehind — those are a parse error on older Safari */
        var sents = pr.match(/[^.!?]+[.!?]+\s*|[^.!?]+$/g) || [pr];
        return '<p>' + sents.map(function (s, i) {
          return '<span class="hl-sent" data-si="' + pi + '-' + i + '">' + esc(s.trim()) + ' </span>';
        }).join('') + '</p>';
      }).join('');
    host.appendChild(box);
    var spans = box.querySelectorAll('.hl-sent');
    var chosen = null;
    for (var i = 0; i < spans.length; i++) {
      (function (sp) {
        sp.setAttribute('tabindex', '0');
        sp.onclick = function () {
          for (var z = 0; z < spans.length; z++) spans[z].classList.remove('sel');
          sp.classList.add('sel');
          chosen = sp.textContent.trim();
          pickedLbl.textContent = '“' + chosen.slice(0, 60) + (chosen.length > 60 ? '…' : '') + '”';
        };
      })(spans[i]);
    }
    var pickedLbl = mk('div', 'wc', 'No sentence chosen yet — click one above.');
    pickedLbl.style.margin = '8px 0';
    host.appendChild(pickedLbl);

    host.appendChild(mk('div', 'eyebrow', '1. Point out an idea you find interesting'));
    var c1 = mk('textarea', 'ta'); c1.rows = 2;
    c1.placeholder = 'e.g. Our challenges are similar. Your shift pattern sounds difficult!';
    host.appendChild(c1);
    host.appendChild(HSP.ui.stems(card.stems1, function (s) { c1.value = s; c1.focus(); }));

    host.appendChild(mk('div', 'eyebrow', '2. Ask your partner a question about their life lesson'));
    var c2 = mk('textarea', 'ta'); c2.rows = 2;
    c2.placeholder = 'e.g. Do you still like working in groups?';
    host.appendChild(c2);
    host.appendChild(HSP.ui.stems(card.stems2, function (s) { c2.value = s; c2.focus(); }));

    return {
      check: function () {
        attempt(host);
        var probs = [];
        if (!chosen) probs.push('Click a sentence in your partner\'s entry first.');
        if (U.words(c1.value) < 5) probs.push('Write a comment of at least five words.');
        var q = c2.value.trim();
        if (!/\?$/.test(q)) probs.push('Your question must end with a question mark.');
        else if (!/^(do|does|did|are|is|was|were|have|has|can|could|will|would|what|where|when|why|who|how)\b/i.test(q)) probs.push('Start your question with a question word or an auxiliary (Do, Did, Are, What, Why…).');
        api.save({ chosen: chosen, c1: c1.value, c2: c2.value });
        if (probs.length) { api.verdict('part', probs.join(' ')); return; }
        api.complete('Feedback written. Now use it to revise your own entry.');
      },
      reset: function () { c1.value = ''; c2.value = ''; chosen = null; for (var z = 0; z < spans.length; z++) spans[z].classList.remove('sel'); pickedLbl.textContent = 'No sentence chosen yet — click one above.'; },
      getState: function () { return { chosen: chosen, c1: c1.value, c2: c2.value }; },
      setState: function (s) { if (s) { c1.value = s.c1 || ''; c2.value = s.c2 || ''; chosen = s.chosen || null; } }
    };
  };

  /* ============================================================
     revise — diff the draft against the revision
     ============================================================ */
  EX.revise = function (card, host, api) {
    var src = HSP.progress.card(card.fromPage, card.fromCard);
    var original = (src && src.state && Array.isArray(src.state)) ? src.state.join('\n\n') : '';
    var box = mk('div', 'note');
    box.innerHTML = '<h4>Your draft from the last section</h4>' +
      (original ? '<div style="white-space:pre-wrap">' + esc(original) + '</div>'
        : '<div class="wc">No draft found yet — go back to §2 and write one, then return here.</div>');
    host.appendChild(box);

    var ta = mk('textarea', 'ta');
    ta.rows = 10;
    ta.value = original;
    ta.placeholder = 'Revise your journal entry here…';
    host.appendChild(ta);

    var diff = mk('div', 'note');
    diff.style.display = 'none';
    host.appendChild(diff);

    var row = mk('div', 'btn-row');
    var bd = mk('button', 'btn btn-sm', art.icon('eye', 15) + 'Show what changed');
    bd.onclick = function () {
      diff.style.display = 'block';
      var a = original.split(/\s+/), b = ta.value.split(/\s+/);
      var setA = {}; a.forEach(function (x) { setA[x.toLowerCase()] = 1; });
      var setB = {}; b.forEach(function (x) { setB[x.toLowerCase()] = 1; });
      var added = b.filter(function (x) { return x && !setA[x.toLowerCase()]; });
      var removed = a.filter(function (x) { return x && !setB[x.toLowerCase()]; });
      diff.innerHTML = '<h4>Changes</h4>' +
        '<div><b style="color:var(--ok)">Added:</b> ' + (added.length ? esc(added.join(' ')) : '—') + '</div>' +
        '<div style="margin-top:6px"><b style="color:var(--no)">Removed:</b> ' + (removed.length ? esc(removed.join(' ')) : '—') + '</div>';
    };
    row.appendChild(bd);
    host.appendChild(row);

    return {
      check: function () {
        attempt(host);
        api.save(ta.value);
        if (!ta.value.trim()) { api.verdict('part', 'Write your revised entry.'); return; }
        if (ta.value.trim() === original.trim()) { api.verdict('part', 'Nothing has changed yet — use the checklist and your partner\'s feedback to improve at least one thing.'); return; }
        api.complete('Revision saved.');
      },
      reset: function () { ta.value = original; diff.style.display = 'none'; },
      getState: function () { return ta.value; },
      setState: function (s) { if (typeof s === 'string' && s) ta.value = s; }
    };
  };

  /* ============================================================
     cluehunt — click the clues that reveal the topic
     ============================================================ */
  EX.cluehunt = function (card, host, api) {
    var box = mk('div', 'diorama');
    box.innerHTML = art.diorama(card.scene);
    host.appendChild(box);
    var found = {};
    card.clues.forEach(function (cl, i) {
      var b = mk('button', 'hs pulse', '?');
      b.type = 'button';
      b.style.left = cl.at[0] + '%'; b.style.top = cl.at[1] + '%';
      b.onclick = function () {
        if (found[cl.id]) return;
        found[cl.id] = true;
        b.classList.remove('pulse'); b.classList.add('ok'); b.textContent = '✓';
        var ln = mk('div');
        ln.innerHTML = '<b style="color:var(--ok)">✓ ' + esc(cl.label) + '</b> — ' + esc(cl.why);
        ln.style.marginBottom = '5px';
        list.appendChild(ln);
        api.save(Object.keys(found));
      };
      box.appendChild(b);
    });
    var list = mk('div', 'note');
    list.innerHTML = '<h4>Clues you have found</h4>';
    host.appendChild(list);
    /* The answer is in the picture, so it is a selection. */
    var qa = mk('div', 'q-row');
    qa.innerHTML = '<div class="qn">?</div>';
    var qc = mk('div', 'qc');
    qc.appendChild(mk('div', 'qt', esc(card.question)));
    var fld = qField({
      q: card.question, options: card.options, keys: card.keys,
      need: card.need, model: card.model, evidence: card.evidence,
      placeholder: 'What are they talking about?'
    }, qc);
    qa.appendChild(qc);
    host.appendChild(qa);

    return {
      check: function () {
        attempt(host);
        var n = Object.keys(found).length;
        var ok = fld.kind === 'sel' ? fld.mark(false) : fld.mark();
        api.save({ found: Object.keys(found), ans: fld.getState() });
        api.result(n + (ok ? 1 : 0), card.clues.length + 1);
      },
      reset: function () { fld.reset(); },
      hint: function () {
        var left = card.clues.filter(function (cl) { return !found[cl.id]; });
        if (left.length) { HSP.toast('There are still ' + left.length + ' clues in the picture — click them first.', 4200); return; }
        HSP.toast('Every clue points at the same subject. Which option names it without adding anything?', 5000);
      },
      /* IT USED TO CLICK EVERY HOTSPOT - and the click is a TOGGLE, so any clue
         the learner had already found was un-found by pressing Show me. The panel
         names the clues instead and the picture is left exactly as they left it.
         RESIDUALS FM-30 / F23. */
      show: function () {
        var rows = card.clues.map(function (cl) {
          return { t: cl.label || cl.text || cl.id, ok: found[cl.id] ? true : null,
                   why: cl.why || '' };
        });
        var r = fld.revealRow ? fld.revealRow() : null;
        if (r) rows.push(r);
        api.reveal({
          title: 'The clues, and what they point at',
          note: 'A tick means you had already found it in the picture.',
          rows: rows
        });
      },
      getState: function () { return { found: Object.keys(found), ans: fld.getState() }; },
      setState: function (s) { if (s && s.ans !== undefined && s.ans !== null) fld.setState(s.ans); }
    };
  };

  /* ============================================================
     mouthcam — pronunciation close-up with minimal pairs
     ============================================================ */
  EX.mouthcam = function (card, host, api) {
    var row = mk('div', 'cols');
    card.sounds.forEach(function (s) {
      var b = mk('div', 'col-box');
      b.style.cursor = 'pointer';
      b.innerHTML = art.mouthDiagram(s.key) + '<div class="wc" style="text-align:center;margin-top:6px">' + esc(s.how) + '</div>';
      b.onclick = function () { HSP.say(s.words.join(', '), 'course', { rate: 0.8 }); };
      row.appendChild(b);
    });
    host.appendChild(row);

    var ex = mk('div', 'chips');
    card.sounds.forEach(function (s) {
      s.words.forEach(function (wd) {
        var cEl = mk('span', 'chip', esc(wd) + ' /' + s.key + '/');
        cEl.onclick = function () { HSP.say(wd, 'course', { rate: 0.75 }); cEl.classList.add('ok'); };
        ex.appendChild(cEl);
      });
    });
    host.appendChild(mk('div', 'wc', 'Tap any word to hear it slowly.'));
    host.appendChild(ex);

    /* minimal pairs */
    var score = 0, asked = 0;
    var pairBox = mk('div', 'note');
    pairBox.innerHTML = '<h4>Minimal pairs — which word did you hear?</h4>';
    var qline = mk('div', 'btn-row');
    pairBox.appendChild(qline);
    var stat = mk('div', 'wc');
    pairBox.appendChild(stat);
    host.appendChild(pairBox);

    var current = null;
    function ask() {
      var pr = card.pairs[Math.floor(Math.random() * card.pairs.length)];
      var which = Math.random() < .5 ? 0 : 1;
      current = { pr: pr, which: which };
      qline.innerHTML = '';
      var play = mk('button', 'btn btn-sm btn-accent', art.icon('sound', 15) + 'Play');
      play.onclick = function () { HSP.say(pr[which], 'course', { rate: 0.8 }); };
      qline.appendChild(play);
      pr.forEach(function (wd, i) {
        var b = mk('button', 'btn btn-sm', esc(wd));
        b.onclick = function () {
          asked++;
          if (i === which) { score++; b.style.background = 'var(--ok-bg)'; b.style.borderColor = 'var(--ok)'; }
          else { b.style.background = 'var(--no-bg)'; b.style.borderColor = 'var(--no)'; }
          stat.textContent = score + ' correct out of ' + asked;
          setTimeout(ask, 800);
        };
        qline.appendChild(b);
      });
      HSP.say(pr[which], 'course', { rate: 0.8 });
    }
    var startB = mk('button', 'btn btn-sm', art.icon('play', 15) + 'Start the minimal-pair game');
    startB.onclick = ask;
    pairBox.insertBefore(startB, qline);

    host.appendChild(HSP.ui.recorder());

    return {
      check: function () {
        attempt(host);
        api.save({ score: score, asked: asked });
        if (asked < (card.minTries || 6)) { api.verdict('part', 'Play at least ' + (card.minTries || 6) + ' minimal pairs (you have done ' + asked + ').'); return; }
        api.result(score, asked);
      },
      reset: function () { score = 0; asked = 0; stat.textContent = ''; qline.innerHTML = ''; },
      getState: function () { return { score: score, asked: asked }; }
    };
  };

  /* ============================================================
     pairchart — adjective / adverb slot demonstration
     ============================================================ */
  EX.pairchart = function (card, host, api) {
    var nounSlot, verbSlot;
    var demo = mk('div', 'reading');
    demo.style.fontSize = '18px';
    demo.innerHTML = 'He\'s a <span class="slot" id="pc-adj" style="display:inline-grid;min-width:120px;vertical-align:middle">…</span> learner. ' +
      '&nbsp;&nbsp; He works <span class="slot" id="pc-adv" style="display:inline-grid;min-width:120px;vertical-align:middle">…</span>.';
    host.appendChild(demo);
    nounSlot = demo.querySelector('#pc-adj'); verbSlot = demo.querySelector('#pc-adv');

    var grid = mk('div', 'cols');
    var adjBox = mk('div', 'col-box'), advBox = mk('div', 'col-box');
    adjBox.innerHTML = '<h5>Adjectives — describe a noun</h5>';
    advBox.innerHTML = '<h5>Adverbs — describe a verb</h5>';
    var adjChips = mk('div', 'chips'), advChips = mk('div', 'chips');
    var tried = {};
    card.pairs.forEach(function (pr) {
      var a = mk('span', 'chip', esc(pr[0]));
      a.onclick = function () { nounSlot.textContent = pr[0]; nounSlot.style.borderStyle = 'solid'; nounSlot.style.color = 'var(--text)'; tried[pr[0]] = 1; HSP.say("He's a " + pr[0] + ' learner.', 'course'); };
      adjChips.appendChild(a);
      var b = mk('span', 'chip', esc(pr[1]));
      b.onclick = function () { verbSlot.textContent = pr[1]; verbSlot.style.borderStyle = 'solid'; verbSlot.style.color = 'var(--text)'; tried[pr[1]] = 1; HSP.say('He works ' + pr[1] + '.', 'course'); };
      advChips.appendChild(b);
      if (pr[2]) { a.title = pr[2]; b.title = pr[2]; a.style.borderColor = 'var(--accent)'; b.style.borderColor = 'var(--accent)'; }
    });
    adjBox.appendChild(adjChips); advBox.appendChild(advChips);
    grid.appendChild(adjBox); grid.appendChild(advBox);
    host.appendChild(grid);
    host.appendChild(mk('div', 'note warm', '<h4>Watch out</h4>' + card.notes));

    return {
      check: function () {
        attempt(host);
        var n = Object.keys(tried).length;
        api.save(Object.keys(tried));
        if (n >= (card.need || 6)) api.complete('You tried ' + n + ' words in both slots.');
        else api.verdict('part', 'Try at least ' + (card.need || 6) + ' words in the two slots (you have tried ' + n + ').');
      },
      reset: function () { tried = {}; nounSlot.textContent = '…'; verbSlot.textContent = '…'; },
      getState: function () { return Object.keys(tried); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (k) { tried[k] = 1; }); }
    };
  };

  /* ============================================================
     interview — three scripted classmates answer four questions
     ============================================================ */
  EX.interview = function (card, host, api) {
    var cells = [];
    var tbl = mk('div', 'matrix-wrap');
    var h = '<table class="matrix"><thead><tr><th>Question</th>';
    card.people.forEach(function (pp) { h += '<th>' + esc(pp.name) + '</th>'; });
    h += '<th>A real classmate</th></tr></thead><tbody>';
    card.questions.forEach(function (q, qi) {
      h += '<tr><th style="min-width:200px">' + esc(q) + '</th>';
      card.people.forEach(function (pp, pi) {
        h += '<td style="text-align:left"><button type="button" class="btn btn-sm" data-q="' + qi + '" data-p="' + pi + '">▶ ask</button>' +
          '<div class="ans" data-q="' + qi + '" data-p="' + pi + '" style="font-size:13px;margin-top:5px"></div></td>';
      });
      h += '<td><input class="inp" data-q="' + qi + '" placeholder="their answer"></td></tr>';
    });
    h += '</tbody></table>';
    tbl.innerHTML = h;
    host.appendChild(tbl);

    var heard = {};
    tbl.addEventListener('click', function (ev) {
      var b = ev.target.closest('button[data-q]'); if (!b) return;
      var qi = +b.dataset.q, pi = +b.dataset.p;
      var ans = card.people[pi].answers[qi];
      tbl.querySelector('.ans[data-q="' + qi + '"][data-p="' + pi + '"]').textContent = ans;
      HSP.say(ans, 'cm:' + card.people[pi].name, { fallback: card.people[pi].voice });
      heard[qi + '-' + pi] = 1;
      api.save({ heard: Object.keys(heard), own: own() });
    });
    function own() {
      var out = [], ins = tbl.querySelectorAll('input[data-q]');
      for (var i = 0; i < ins.length; i++) out.push(ins[i].value);
      return out;
    }
    return {
      check: function () {
        attempt(host);
        var n = Object.keys(heard).length;
        var need = card.questions.length * card.people.length;
        api.save({ heard: Object.keys(heard), own: own() });
        if (n < need) { api.verdict('part', 'Ask every classmate every question — ' + n + ' of ' + need + ' done.'); return; }
        api.complete('All ' + need + ' answers collected. Now build your pie chart below.');
      },
      reset: function () {
        heard = {};
        var as = tbl.querySelectorAll('.ans');
        for (var i = 0; i < as.length; i++) as[i].textContent = '';
      },
      getState: function () { return { heard: Object.keys(heard), own: own() }; },
      setState: function (s) {
        if (!s) return;
        (s.heard || []).forEach(function (k) { heard[k] = 1; });
        if (s.own) { var ins = tbl.querySelectorAll('input[data-q]'); s.own.forEach(function (v, i) { if (ins[i]) ins[i].value = v; }); }
      }
    };
  };

  /* ============================================================
     solutions — problem cards ranked on an easy/fast grid
     ============================================================ */
  EX.solutions = function (card, host, api) {
    var sols = [];
    var listBox = mk('div', 'rank');
    var row = mk('div', 'btn-row');
    var inp = mk('input', 'inp');
    inp.placeholder = card.placeholder || 'Write one solution…';
    inp.style.maxWidth = '340px';
    var add = mk('button', 'btn btn-accent btn-sm', '+ Add solution');
    function addSol() {
      var v = inp.value.trim(); if (!v) return;
      sols.push({ t: v, easy: 2, fast: 2 });
      inp.value = ''; draw();
    }
    add.onclick = addSol;
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') addSol(); });
    row.appendChild(inp); row.appendChild(add);
    host.appendChild(row);
    if (card.ideas) {
      var sug = mk('div', 'chips');
      sug.appendChild(mk('span', 'wc', 'Ideas: '));
      card.ideas.forEach(function (x) {
        var cEl = mk('span', 'chip', esc(x));
        cEl.onclick = function () { inp.value = x; inp.focus(); };
        sug.appendChild(cEl);
      });
      host.appendChild(sug);
    }
    host.appendChild(listBox);
    function draw() {
      listBox.innerHTML = '';
      sols.forEach(function (s, i) {
        var it = mk('div', 'rank-item');
        it.innerHTML = '<span class="pos"></span>';
        var mid = mk('div', 'tx');
        mid.innerHTML = '<div style="font-weight:600;margin-bottom:5px">' + esc(s.t) + '</div>';
        ['easy', 'fast'].forEach(function (k) {
          var lbl = mk('label', 'wc');
          lbl.style.marginRight = '14px';
          lbl.innerHTML = (k === 'easy' ? 'Hard ' : 'Slow ') + ' ';
          var sr = mk('input');
          sr.type = 'range'; sr.min = '0'; sr.max = '4'; sr.value = s[k];
          sr.style.width = '110px'; sr.style.verticalAlign = 'middle';
          sr.addEventListener('input', function () { s[k] = +sr.value; api.save(sols); });
          lbl.appendChild(sr);
          lbl.appendChild(d.createTextNode(k === 'easy' ? ' Easy' : ' Fast'));
          mid.appendChild(lbl);
        });
        it.appendChild(mid);
        var up = mk('button', 'btn btn-sm btn-ghost', '▲');
        up.onclick = function () { if (i > 0) { sols.splice(i - 1, 0, sols.splice(i, 1)[0]); draw(); } };
        var rm = mk('button', 'btn btn-sm btn-ghost', art.icon('x', 14));
        rm.onclick = function () { sols.splice(i, 1); draw(); };
        it.appendChild(up); it.appendChild(rm);
        listBox.appendChild(it);
      });
      api.save(sols);
    }
    var prob = mk('div');
    prob.innerHTML = '<div class="eyebrow">1. What is the problem?</div>';
    var pta = mk('textarea', 'ta'); pta.rows = 2;
    pta.placeholder = 'In one sentence…';
    prob.appendChild(pta);
    host.insertBefore(prob, row);
    host.insertBefore(mk('div', 'eyebrow', '2. What should she do? Add two or three solutions, then rank them.'), row);

    return {
      check: function () {
        attempt(host);
        var probs = [];
        if (U.words(pta.value) < 5) probs.push('Describe the problem in a full sentence.');
        if (sols.length < (card.need || 2)) probs.push('Add at least ' + (card.need || 2) + ' solutions (you have ' + sols.length + ').');
        api.save({ problem: pta.value, sols: sols });
        if (probs.length) { api.verdict('part', probs.join(' ')); return; }
        api.complete('Problem and ' + sols.length + ' ranked solutions saved. Use them in your letter below.');
      },
      reset: function () { sols = []; pta.value = ''; draw(); },
      getState: function () { return { problem: pta.value, sols: sols }; },
      setState: function (s) { if (s) { pta.value = s.problem || ''; sols = s.sols || []; draw(); } }
    };
  };

  /* ============================================================
     letter — composed letter with a fixed frame
     ============================================================ */
  EX.letter = function (card, host, api) {
    var box = mk('div', 'reading journal');
    box.innerHTML = '<p>' + esc(card.open) + '</p>';
    var ta = mk('textarea', 'ta');
    ta.rows = 7;
    ta.placeholder = card.placeholder || 'Write your ideas here, one per line…';
    box.appendChild(ta);
    box.insertAdjacentHTML('beforeend', '<p style="margin-top:12px">' + esc(card.close) + '</p>');
    var sign = mk('input', 'inp');
    sign.placeholder = 'Sincerely, (your name)';
    sign.style.maxWidth = '260px';
    box.appendChild(sign);
    host.appendChild(box);

    /* pull in ranked solutions from the previous card if present */
    var pull = mk('button', 'btn btn-sm', art.icon('bulb', 15) + 'Bring in my ranked solutions');
    pull.style.marginTop = '10px';
    pull.onclick = function () {
      var rec = HSP.progress.card(api.pageId, card.from || 'cb');
      var sv = rec && rec.state;
      if (sv && sv.sols && sv.sols.length) {
        ta.value = sv.sols.map(function (s) { return '• ' + s.t; }).join('\n');
      } else HSP.toast('No ranked solutions found yet — do the card above first.');
    };
    host.appendChild(pull);

    var checklist = mk('div', 'note');
    checklist.innerHTML = '<h4>Before you send it</h4>' + card.checklist.map(function (x) { return '<div style="margin-bottom:4px">☐ ' + esc(x) + '</div>'; }).join('');
    host.appendChild(checklist);

    return {
      check: function () {
        attempt(host);
        var ideas = ta.value.split('\n').filter(function (l) { return U.words(l) >= 3; }).length;
        api.save({ body: ta.value, sign: sign.value });
        var probs = [];
        if (ideas < (card.minIdeas || 2)) probs.push('Give at least ' + (card.minIdeas || 2) + ' ideas, one per line.');
        if (!sign.value.trim()) probs.push('Sign your letter.');
        if (probs.length) { api.verdict('part', probs.join(' ')); return; }
        api.complete('Letter finished — ' + ideas + ' ideas. You can print it from the toolbar.');
      },
      reset: function () { ta.value = ''; sign.value = ''; },
      getState: function () { return { body: ta.value, sign: sign.value }; },
      setState: function (s) { if (s) { ta.value = s.body || ''; sign.value = s.sign || ''; } }
    };
  };

  /* ============================================================
     report — guided report composer with read-back
     ============================================================ */
  EX.report = function (card, host, api) {
    var ta = mk('textarea', 'ta');
    ta.rows = 5;
    ta.placeholder = card.placeholder || 'Report what you found…';
    host.appendChild(HSP.ui.stems(card.stems, function (s) { ta.value = (ta.value ? ta.value + ' ' : '') + s; ta.focus(); }));
    host.appendChild(ta);
    var meta = mk('div', 'wc');
    ta.addEventListener('input', function () { meta.textContent = U.words(ta.value) + ' words'; });
    host.appendChild(meta);
    var row = mk('div', 'btn-row');
    var b = mk('button', 'btn btn-sm', art.icon('sound', 15) + 'Hear my report');
    b.title = DEVICE_VOICE;
    b.onclick = function () { HSP.speak(ta.value); };
    row.appendChild(b);
    row.appendChild(HSP.ui.recorder());
    host.appendChild(row);
    return {
      check: function () {
        attempt(host);
        api.save(ta.value);
        if (U.words(ta.value) >= (card.minWords || 20)) api.complete('Report saved (' + U.words(ta.value) + ' words).');
        else api.verdict('part', progressLine(U.words(ta.value), (card.minWords || 20),
          'words', 'write at least '
          + Math.max(0, (card.minWords || 20) - U.words(ta.value)) + ' more.'));
      },
      reset: function () { ta.value = ''; meta.textContent = ''; },
      getState: function () { return ta.value; },
      setState: function (s) { if (typeof s === 'string') { ta.value = s; meta.textContent = U.words(s) + ' words'; } }
    };
  };

  /* ============================================================
     listening-chart — the active-listening Do / Say demo
     ============================================================ */
  EX.listenchart = function (card, host, api) {
    var grid = mk('div', 'cols');
    var doBox = mk('div', 'col-box'), sayBox = mk('div', 'col-box');
    doBox.innerHTML = '<h5>Do this</h5>'; sayBox.innerHTML = '<h5>Say this</h5>';
    var figure = mk('div');
    figure.style.cssText = 'width:140px;margin:0 auto 10px';
    figure.innerHTML = '<svg viewBox="0 0 200 300" style="width:100%"><g id="lc-rig">' + art.actor('lc', 'f-30s-a') + '</g></svg>';
    doBox.insertBefore(figure, doBox.firstChild.nextSibling);

    var tried = {};
    card.dos.forEach(function (x) {
      var b = mk('button', 'btn btn-sm', esc(x));
      b.style.width = '100%'; b.style.marginBottom = '6px'; b.style.justifyContent = 'flex-start';
      b.onclick = function () {
        tried[x] = 1;
        var rig = figure.querySelector('#lc-rig');
        var head = figure.querySelector('#lc-head');
        rig.style.transition = 'transform .5s';
        if (/lean/i.test(x)) rig.style.transform = 'translateY(14px) scale(1.07)';
        else if (/nod/i.test(x)) { head.style.transition = 'transform .32s'; head.style.transform = 'rotate(0deg) translateY(9px)'; setTimeout(function () { head.style.transform = ''; }, 330); }
        else if (/tilt/i.test(x)) head.style.transform = 'rotate(13deg)';
        else if (/eye/i.test(x)) { rig.style.transform = 'scale(1.03)'; figure.querySelectorAll('rect[id$="lidL"],rect[id$="lidR"]').forEach(function (l) { l.style.transform = 'scaleY(0)'; }); }
        else rig.style.transform = 'translateY(6px)';
        setTimeout(function () { rig.style.transform = ''; head.style.transform = ''; }, 1400);
      };
      doBox.appendChild(b);
    });
    card.says.forEach(function (x) {
      var b = mk('button', 'btn btn-sm', art.icon('sound', 14) + esc(x));
      b.style.width = '100%'; b.style.marginBottom = '6px'; b.style.justifyContent = 'flex-start';
      b.onclick = function () { tried[x] = 1; HSP.say(x, 'lead', { fallback: 'f' }); };
      sayBox.appendChild(b);
    });
    grid.appendChild(doBox); grid.appendChild(sayBox);
    host.appendChild(grid);

    var qf = [];
    card.questions.forEach(function (q, i) {
      var row = mk('div', 'q-row');
      row.innerHTML = '<div class="qn">' + (i + 1) + '.</div>';
      var cEl = mk('div', 'qc');
      cEl.appendChild(mk('div', 'qt', esc(q.q)));
      qf.push(qField(withDefaults({ minWords: 5 }, q), cEl));
      row.appendChild(cEl);
      host.appendChild(row);
    });
    var sels = qf.filter(function (f) { return f.kind === 'sel'; });
    return {
      check: function () {
        attempt(host);
        var n = Object.keys(tried).length;
        api.save({ tried: Object.keys(tried), ans: qf.map(function (f) { return f.getState(); }) });
        if (n < 5) { api.verdict('part', 'Try at least five of the behaviours and phrases first (' + n + ' so far).'); return; }
        var selOk = 0, txtOk = 0, txtN = 0;
        qf.forEach(function (f) {
          if (f.kind === 'sel') { if (f.mark(false)) selOk++; }
          else { txtN++; if (f.mark()) txtOk++; }
        });
        if (sels.length && selOk < sels.length) { api.result(selOk, sels.length); return; }
        if (txtN && txtOk < txtN) { api.verdict('part', 'Answer the open question too, in at least five words.'); return; }
        if (sels.length) { api.result(sels.length, sels.length); return; }
        api.complete('Chart explored and all questions answered.');
      },
      reset: function () { qf.forEach(function (f) { f.reset(); }); tried = {}; },
      hint: function () {
        for (var i = 0; i < qf.length; i++) {
          if (qf[i].kind === 'sel' && !qf[i].ok()) {
            HSP.toast(card.questions[i].evidence || 'Think about what the speaker needs from you, not about being polite.', 5000);
            return;
          }
        }
        HSP.toast('Compare your own answer with the model below it.');
      },
      show: function () {
        var rows = [];
        qf.forEach(function (f) {
          var r = f.revealRow ? f.revealRow() : null;
          if (r) rows.push(r);
        });
        api.reveal({ title: 'The answers, beside yours', rows: rows });
      },
      coachText: function () {
        return qf.filter(function (f) { return f.kind === 'txt'; })
          .map(function (f) { return f.text(); }).filter(Boolean).join('\n\n');
      },
      getState: function () { return { tried: Object.keys(tried), ans: qf.map(function (f) { return f.getState(); }) }; },
      setState: function (s) {
        if (!s) return;
        (s.tried || []).forEach(function (k) { tried[k] = 1; });
        if (s.ans) s.ans.forEach(function (v, i) { if (qf[i]) qf[i].setState(v); });
      }
    };
  };

  /* ============================================================
     circlematch — stage 1 circle the auxiliary, stage 2 match a–f
     ============================================================ */
  EX.circlematch = function (card, host, api) {
    var stage = 1, picks = [], placed = {};
    var pick = Picker(host);
    var rows = [];

    var stageLbl = mk('div', 'eyebrow', 'Stage 1 — tap the correct word in each question');
    host.appendChild(stageLbl);

    var list = mk('div');
    card.items.forEach(function (it, i) {
      var row = mk('div', 'drop');
      row.style.borderStyle = 'solid';
      row.style.alignItems = 'flex-start';
      var slot = mk('span', 'slot');
      slot.textContent = '?';
      slot.style.minWidth = '46px';
      slot.style.flex = '0 0 46px';
      row.appendChild(slot);

      var holder = mk('div', 'lbl');
      var parts = it.text.split(/\{\{(.*?)\}\}/);
      var p = { el: null, choice: null, answer: it.answer, match: it.match, slot: slot };
      parts.forEach(function (seg, j) {
        if (j % 2 === 0) { holder.appendChild(d.createTextNode(seg)); return; }
        var opts = seg.split('|');
        var pk = mk('span', 'pick');
        opts.forEach(function (o, oi) {
          var b = mk('button', '', esc(o.trim()));
          b.type = 'button';
          b.setAttribute('aria-pressed', 'false');
          b.onclick = function () {
            if (stage !== 1) return;
            var bs = pk.querySelectorAll('button');
            for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
            b.setAttribute('aria-pressed', 'true');
            p.choice = oi; pk.classList.remove('ok', 'no');
          };
          pk.appendChild(b);
        });
        p.el = pk;
        holder.appendChild(pk);
      });
      row.appendChild(holder);
      list.appendChild(row);
      picks.push(p);
      rows.push(row);

      pick.wireDrop(row, function (chip) { if (stage === 2) place(i, chip.dataset.cid); });
      row.addEventListener('dblclick', function () { if (stage === 2) unplace(i); });
    });
    host.appendChild(list);

    var ansLbl = mk('div', 'eyebrow', 'Stage 2 — locked until stage 1 is correct');
    ansLbl.style.opacity = '.5';
    host.appendChild(ansLbl);
    var pool = mk('div', 'chips');
    pool.style.opacity = '.4';
    pool.style.pointerEvents = 'none';
    var chipEls = {};
    card.answers.forEach(function (a) {
      var cEl = mk('span', 'chip', a.id + '. ' + a.t);
      cEl.dataset.cid = a.id;
      pick.wireChip(cEl);
      pool.appendChild(cEl);
      chipEls[a.id] = cEl;
    });
    host.appendChild(pool);

    function place(i, cid) {
      for (var k in placed) if (placed[k] === cid) unplace(k);
      if (placed[i]) unplace(i);
      placed[i] = cid;
      picks[i].slot.textContent = cid;
      picks[i].slot.style.borderStyle = 'solid';
      picks[i].slot.style.color = 'var(--text)';
      chipEls[cid].classList.add('used');
      api.save({ picks: picks.map(function (p) { return p.choice; }), placed: placed });
    }
    function unplace(i) {
      var cid = placed[i]; if (!cid) return;
      delete placed[i];
      picks[i].slot.textContent = '?';
      picks[i].slot.style.borderStyle = 'dashed';
      picks[i].slot.style.color = 'var(--ink-4)';
      picks[i].slot.classList.remove('ok', 'no');
      chipEls[cid].classList.remove('used', 'ok', 'no');
    }
    function unlock() {
      stage = 2;
      stageLbl.textContent = 'Stage 1 — correct ✓';
      ansLbl.textContent = 'Stage 2 — drag each answer onto its question (or click the answer, then the question)';
      ansLbl.style.opacity = '1';
      pool.style.opacity = '1';
      pool.style.pointerEvents = '';
    }

    var ansById = {};
    card.answers.forEach(function (a) { ansById[a.id] = a.t; });
    var reasons = card.items.some(function (i) { return i.why; })
      ? Reasons(host, card.whyTitle || 'Which auxiliary, and why') : null;
    function tellWhy() {
      if (!reasons) return;
      reasons.fill(card.items.map(function (it, i) {
        var opts = (it.text.match(/\{\{(.*?)\}\}/) || [, ''])[1].split('|');
        return {
          t: String(opts[it.answer] || '').trim() + '  —  ' + (ansById[it.match] || ''),
          ok: picks[i].choice === null ? null : picks[i].choice === it.answer,
          why: it.why || ''
        };
      }));
    }

    return {
      check: function () {
        attempt(host);
        if (stage === 1) {
          var n = 0;
          picks.forEach(function (p) {
            p.el.classList.remove('ok', 'no');
            if (p.choice === null) return;
            var ok = p.choice === p.answer;
            p.el.classList.add(ok ? 'ok' : 'no');
            if (ok) n++;
          });
          api.save({ picks: picks.map(function (p) { return p.choice; }), placed: placed });
          tellWhy();
          if (n === picks.length) { unlock(); api.verdict('part', 'All six auxiliaries are right. Stage 2 is now unlocked — match the answers.'); }
          else api.result(n, picks.length * 2);
          return;
        }
        var m = 0;
        picks.forEach(function (p, i) {
          p.slot.classList.remove('ok', 'no');
          if (!placed[i]) return;
          var ok = placed[i] === p.match;
          p.slot.classList.add(ok ? 'ok' : 'no');
          chipEls[placed[i]].classList.add(ok ? 'ok' : 'no');
          if (ok) m++;
        });
        api.save({ picks: picks.map(function (p) { return p.choice; }), placed: placed });
        tellWhy();
        api.result(picks.length + m, picks.length * 2);
      },
      reset: function () {
        picks.forEach(function (p, i) {
          if (stage === 1 && p.choice !== p.answer) {
            p.choice = null;
            var bs = p.el.querySelectorAll('button');
            for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
          }
          p.el.classList.remove('ok', 'no');
          if (stage === 2 && placed[i] !== p.match) unplace(i);
        });
        if (reasons) reasons.hide();
      },
      hint: function () {
        if (stage === 1) { HSP.toast('"Yesterday" and "last week" need the past. "now" needs a continuous form.', 4000); return; }
        for (var i = 0; i < picks.length; i++) if (placed[i] !== picks[i].match) {
          chipEls[picks[i].match].classList.add('sel');
          rows[i].classList.add('over');
          setTimeout(function (c, r) { return function () { c.classList.remove('sel'); r.classList.remove('over'); }; }(chipEls[picks[i].match], rows[i]), 1800);
          return;
        }
      },
      show: function () {
        api.reveal({
          title: 'The right word, and what it matches',
          rows: picks.map(function (p, i) {
            var bs = p.el.querySelectorAll('button');
            var txt = function (z) {
              return bs[z] ? (bs[z].textContent || '').replace(/\s+/g, ' ').trim() : '';
            };
            return { t: (i + 1) + '. ' + txt(p.answer) + ' \u2192 ' + String(p.match),
                     mine: (p.choice === null || p.choice === undefined) ? '' : txt(p.choice),
                     ok: (p.choice === null || p.choice === undefined) ? null : p.choice === p.answer,
                     why: p.why || '' };
          })
        });
      },
      getState: function () { return { picks: picks.map(function (p) { return p.choice; }), placed: placed, stage: stage }; },
      setState: function (s) {
        if (!s) return;
        (s.picks || []).forEach(function (v, i) {
          if (v === null || v === undefined || !picks[i]) return;
          var bs = picks[i].el.querySelectorAll('button');
          if (bs[v]) { bs[v].setAttribute('aria-pressed', 'true'); picks[i].choice = v; }
        });
        if (s.stage === 2) { unlock(); if (s.placed) for (var k in s.placed) place(+k, s.placed[k]); }
      }
    };
  };

  /* ============================================================
     tensewrite — write one sentence in each required tense
     ============================================================ */
  EX.tensewrite = function (card, host, api) {
    var rows = [], turns = [];
    var cast = card.cast || { them: { name: card.themName || 'Them', voice: 'f', pitch: 1.06 }, me: { name: 'You', voice: 'm', pitch: 0.96 } };
    var isConvo = card.boxes.some(function (b) { return !!b.lead; });
    if (isConvo && card.lead) host.appendChild(mk('div', 'convo-hint', card.lead));
    var wrapT = isConvo ? mk('div', 'convo') : host;
    if (isConvo) host.appendChild(wrapT);

    card.boxes.forEach(function (bx, i) {
      /* In conversation mode the other side has already spoken, so
         the learner's question has to follow what was just said. */
      if (bx.lead) {
        var gr = mk('div', 'cturn is-given');
        gr.appendChild(mk('div', 'ct-who', esc(cast.them.name) + ':'));
        gr.appendChild(mk('div', 'ct-body', esc(bx.lead)));
        var gt = mk('div', 'ct-tools');
        var gb = mk('button', 'btn btn-sm btn-ghost', art.icon('sound', 15));
        gb.type = 'button';
        gb.setAttribute('aria-label', 'Hear this line');
        gb.onclick = function () { HSP.speak(bx.lead, { voice: cast.them.voice, pitch: cast.them.pitch }); };
        gt.appendChild(gb);
        gr.appendChild(gt);
        wrapT.appendChild(gr);
        turns.push({ who: 'them', row: gr, text: function () { return bx.lead; } });
      }

      var block = mk('div', isConvo ? 'cturn is-mine' : '');
      if (isConvo) block.appendChild(mk('div', 'ct-who', esc(cast.me.name) + ':'));
      else block.style.margin = '12px 0';
      var holder = mk('div', isConvo ? 'ct-body' : '');
      holder.innerHTML = (isConvo ? '' : '<div class="eyebrow" style="margin-bottom:4px">' + esc(bx.label) + '</div>') +
        '<div class="wc" style="margin-bottom:6px">' + (isConvo ? esc(bx.label) + ' — ' : '') + 'e.g. <i>' + esc(bx.eg) + '</i></div>';
      var inp = mk('input', 'inp');
      inp.placeholder = 'Write your sentence…';
      var fb = mk('div', 'wc');
      fb.style.marginTop = '5px';
      function upd() {
        var t = U.tense(inp.value);
        fb.innerHTML = inp.value.trim() ? 'The checker hears: <b>' + U.tenseLabel(t) + '</b>' : '';
      }
      inp.addEventListener('input', upd);
      holder.appendChild(inp); holder.appendChild(fb);
      block.appendChild(holder);
      if (isConvo) {
        var mt = mk('div', 'ct-tools');
        var mb = mk('button', 'btn btn-sm btn-ghost', art.icon('sound', 15));
        mb.type = 'button';
        mb.title = HSP.deviceVoiceNote;
        mb.setAttribute('aria-label', 'Hear this line');
        mb.onclick = function () {
          if (!inp.value.trim()) { HSP.toast('Write the line first.'); return; }
          HSP.speak(inp.value, { voice: cast.me.voice, pitch: cast.me.pitch });
        };
        mt.appendChild(mb);
        block.appendChild(mt);
      }
      wrapT.appendChild(block);
      rows.push({ inp: inp, fb: fb, bx: bx });
      turns.push({ who: 'me', row: block, text: function () { return inp.value; } });
    });

    if (isConvo) {
      var pl = HSP.ui.convoPlayer(turns, cast);
      /* here the learner types their lines rather than dropping chips,
         so the player's "still empty" count follows the typing */
      rows.forEach(function (r) {
        r.inp.addEventListener('input', function () { if (pl.sync) pl.sync(); });
      });
      host.appendChild(pl);
    } else {
      var row = mk('div', 'btn-row');
      var say = mk('button', 'btn btn-sm', art.icon('sound', 15) + 'Hear my sentences');
      say.type = 'button';
      say.title = DEVICE_VOICE;
      say.onclick = function () { HSP.speak(rows.map(function (r) { return r.inp.value; }).join('. ')); };
      row.appendChild(say);
      host.appendChild(row);
    }

    return {
      check: function () {
        attempt(host);
        var n = 0, notes = [];
        var seen = {};
        rows.forEach(function (r) {
          var t = U.tense(r.inp.value);
          r.inp.classList.remove('ok', 'no');
          if (U.words(r.inp.value) < 4) { r.inp.style.borderColor = 'var(--no)'; notes.push(r.bx.label + ': too short.'); return; }
          var ok;
          if (r.bx.any) {
            ok = !seen[t] && t !== 'unknown';
            if (!ok && seen[t]) notes.push(r.bx.label + ': you already used the ' + U.tenseLabel(t) + ' — use a different tense.');
          } else {
            ok = t === r.bx.tense;
            if (!ok) notes.push(r.bx.label + ': the checker heard the ' + U.tenseLabel(t) + '.');
          }
          seen[t] = 1;
          r.inp.style.borderColor = ok ? 'var(--ok)' : 'var(--no)';
          if (ok) n++;
        });
        api.save(rows.map(function (r) { return r.inp.value; }));
        if (notes.length) api.verdict('part', n + ' of ' + rows.length + ' accepted. ' + notes.join(' '));
        else api.result(n, rows.length);
      },
      reset: function () { rows.forEach(function (r) { r.inp.value = ''; r.inp.style.borderColor = ''; r.fb.innerHTML = ''; }); },
      /* It used to type the example into every box and fire an `input` event, so
         anything listening treated the model as the learner's typing. */
      show: function () {
        api.reveal({
          title: 'An example in each form',
          note: 'These are examples, not the only right answers \u2014 yours should be '
              + 'your own sentence in the same form.',
          rows: rows.map(function (r) {
            return { t: r.bx.eg, mine: r.inp.value,
                     ok: String(r.inp.value).trim() ? null : null,
                     why: r.bx.label ? esc(r.bx.label) : '' };
          })
        });
      },
      getState: function () { return rows.map(function (r) { return r.inp.value; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (rows[i]) { rows[i].inp.value = v; rows[i].inp.dispatchEvent(new w.Event('input')); } }); }
    };
  };

  /* ============================================================
     notes — a simple note pad that counts as a task
     ============================================================ */
  EX.notes = function (card, host, api) {
    var tas = [];
    card.prompts.forEach(function (q, i) {
      host.appendChild(mk('div', 'eyebrow', (i + 1) + '. ' + q));
      var ta = mk('textarea', 'ta');
      ta.rows = 3;
      ta.placeholder = 'Take notes…';
      host.appendChild(ta);
      tas.push(ta);
    });
    if (card.examples) {
      var box = mk('div', 'note');
      box.style.display = 'none';
      /* The heading used to be fixed at "here are eight challenges other
         learners wrote about", which is true of exactly one card in one unit
         of one course. A card showing four model sentences now says so. */
      box.innerHTML = '<h4>' + esc(card.examplesTitle ||
        'If you are stuck, here are some ideas other learners wrote') + '</h4>' +
        card.examples.map(function (x) { return '<div style="margin-bottom:4px">• ' + esc(x) + '</div>'; }).join('');
      var tg = mk('button', 'btn btn-sm', art.icon('bulb', 15) + 'I need an idea');
      tg.onclick = function () { box.style.display = box.style.display === 'none' ? 'block' : 'none'; };
      host.appendChild(tg); host.appendChild(box);
    }
    return {
      check: function () {
        attempt(host);
        var n = tas.filter(function (t) { return U.words(t.value) >= 5; }).length;
        api.save(tas.map(function (t) { return t.value; }));
        if (n >= tas.length) api.complete('Notes saved — you can use them in the next section.');
        else api.verdict('part', 'Take notes on all ' + tas.length + ' prompts (' + n + ' done).');
      },
      reset: function () { tas.forEach(function (t) { t.value = ''; }); },
      getState: function () { return tas.map(function (t) { return t.value; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (tas[i]) tas[i].value = v; }); }
    };
  };

  /* ============================================================
     checklistlive — editing checklist wired to the learner's draft
     ============================================================ */
  EX.checklistlive = function (card, host, api) {
    var rec = HSP.progress.card(card.fromPage, card.fromCard);
    var draft = (rec && Array.isArray(rec.state)) ? rec.state.join('\n\n') : '';
    var box = mk('div', 'note');
    box.innerHTML = '<h4>Your draft</h4>' + (draft
      ? '<div style="white-space:pre-wrap;font-size:14px">' + esc(draft) + '</div>'
      : '<div class="wc">No draft found. Go back to §2 and write one first.</div>');
    host.appendChild(box);

    var cells = [];
    var listBox = mk('div', 'ckl');
    card.items.forEach(function (it) {
      var b = mk('div', 'ck');
      b.setAttribute('role', 'checkbox');
      b.setAttribute('aria-checked', 'false');
      b.setAttribute('tabindex', '0');
      b.innerHTML = '<span class="bx">✓</span><span>' + esc(it.t) + '</span>';
      function tog() {
        var on = b.getAttribute('aria-checked') === 'true';
        b.setAttribute('aria-checked', on ? 'false' : 'true');
        b.classList.remove('ok', 'no');
        if (!on && it.verify) {
          var res = it.verify(draft, U);
          b.classList.add(res.ok ? 'ok' : 'no');
          HSP.toast(res.msg, 3400);
          if (res.highlight && res.highlight.length) {
            box.querySelector('div:last-child').innerHTML = esc(draft).replace(
              new RegExp('\\b(' + res.highlight.map(function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'gi'),
              '<mark style="background:var(--ok-bg);color:var(--ok);font-weight:700">$1</mark>');
          }
        }
      }
      b.onclick = tog;
      b.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(); } };
      listBox.appendChild(b);
      cells.push(b);
    });
    host.appendChild(listBox);
    return {
      check: function () {
        attempt(host);
        var ticked = cells.filter(function (c) { return c.getAttribute('aria-checked') === 'true' && !c.classList.contains('no'); }).length;
        api.save(cells.map(function (c) { return c.getAttribute('aria-checked') === 'true'; }));
        api.result(ticked, cells.length);
      },
      reset: function () { cells.forEach(function (c) { c.setAttribute('aria-checked', 'false'); c.classList.remove('ok', 'no'); }); },
      getState: function () { return cells.map(function (c) { return c.getAttribute('aria-checked') === 'true'; }); },
      setState: function (s) { if (Array.isArray(s)) s.forEach(function (v, i) { if (cells[i] && v) cells[i].setAttribute('aria-checked', 'true'); }); }
    };
  };

})(window, document);
