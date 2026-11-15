/* ============================================================
   English for Auto Maintenance B1 — eam-extras.js

   Everything this course adds to the engine's behaviour, in one file.

   IT DECORATES, IT DOES NOT EDIT. core.js, components.js, art.js, scene.js and tutor.js are
   byte-for-byte lifts of the published accounting course, so that a fix made there can be
   re-lifted here. Changing them would make that impossible. Every addition below wraps an
   existing function and calls through to it, which is why this file loads AFTER components.js
   and tutor.js and before any data file.

   What it adds:

     1. AI MARKERS. Every control that sends anything to a language model carries a visible
        `AI` chip, and says so in its accessible name. A learner should never be able to reach
        a model from a button that does not admit it is one. Enforced by gates/eam_ai.py.
     2. THE WRITING SCAFFOLD. A writing task becomes four labelled steps instead of one empty
        box: ask for ideas, plan, draft, then ask for a marking. The three AI steps have
        separate prompts with separate rules - the ideas step may not write the learner's
        sentences, and the marking step may not score.
     3. THE WORKED ROLE PLAY. A button that plays the whole exchange in a modal, so the model
        is available AFTER an attempt rather than printed above it.
   ============================================================ */
(function (w, d) {
  'use strict';
  var EAM = w.EAM;
  if (!EAM || !EAM.ex) { return; }
  var U = EAM.util, EX = EAM.ex, el = U.el, esc = U.esc;

  /* ============================================================
     1. THE AI MARKER
     ============================================================ */
  var AI_CHIP = '<span class="ai-chip" aria-hidden="true">AI</span>';

  /* Put the chip on a button and say so where a screen reader will hear it. The chip is
     decorative to assistive tech because the accessible name carries the same fact in words -
     a chip read out as "A I" in the middle of a sentence is worse than silence. */
  function markAI(btn, label) {
    if (!btn || btn.getAttribute('data-ai') === '1') { return btn; }
    btn.setAttribute('data-ai', '1');
    btn.classList.add('is-ai');
    btn.innerHTML = btn.innerHTML + ' ' + AI_CHIP;
    btn.setAttribute('aria-label', (label || btn.textContent.trim())
      + ' — this sends your work to a language model');
    return btn;
  }
  EAM.markAI = markAI;

  /* The one door to the model. Every AI call in this course goes through here, so the rules
     below are kept in one place instead of once per button:
       - the key is the learner's own, held by Keyring, and is never put in a URL or the DOM
       - the response is run through the tutor's scrubber, which removes a score
       - a missing key is a sentence, not an exception */
  function askAI(opts) {
    var K = w.Keyring;
    if (!K || !K.get || !K.get()) {
      return Promise.reject(new Error('NO_KEY'));
    }
    if (!w.GeminiProvider) {
      return Promise.reject(new Error('The AI helper could not load on this page.'));
    }
    var pref = '';
    try { pref = w.localStorage.getItem('la.gemini.model') || ''; } catch (e) { pref = ''; }
    var P = new w.GeminiProvider({ keyring: K });
    return P.askWithFailover({
      system: opts.system,
      prompt: opts.prompt,
      maxTokens: opts.maxTokens || 600,
      temperature: opts.temperature === undefined ? 0.4 : opts.temperature,
      preferred: pref
    }).then(function (res) {
      try { if (res.model) w.localStorage.setItem('la.gemini.model', res.model); } catch (e) {}
      var scrub = (EAM.tutor && EAM.tutor._scrub) || function (x) { return x; };
      return { text: scrub(res.text), model: res.model, ms: res.ms };
    });
  }
  EAM.askAI = askAI;

  /* The standing caution. Not dismissible, and the same words everywhere it appears. */
  function caution() {
    var n = el('p', 'wc tutor-honest');
    n.textContent = 'This is a second opinion from a language model, not a mark. It is '
      + 'confidently wrong often enough to be worth checking, and it never scores your work. '
      + 'Where the book prints a model answer, the book is the authority.';
    return n;
  }

  function keyRow(onReady) {
    var row = el('div', 'btn-row');
    var K = w.Keyring;
    var b = el('button', 'btn btn-sm btn-ghost', 'Use my Gemini key');
    b.type = 'button';
    function refresh() {
      var has = K && K.get && K.get();
      b.textContent = has ? ('Key: ' + (K.hint ? K.hint() : 'set')) : 'Use my Gemini key';
      if (onReady) { onReady(!!has); }
    }
    b.onclick = function () {
      if (K && K.prompt) { K.prompt(refresh); } else { refresh(); }
    };
    row.appendChild(b);
    refresh();
    return { row: row, refresh: refresh };
  }

  /* ============================================================
     2. THE WRITING SCAFFOLD

     A writing card declares `scaffold`, and gets four numbered steps. The book's own plan and
     checklist stay exactly where they were; this is the ladder beside them.

     WHY THE IDEAS STEP IS NOT ALLOWED TO WRITE. A learner who asks for ideas and receives
     three finished sentences has been given the task's answer, not its scaffolding. The ideas
     prompt therefore asks for NOUNS AND SHORT PHRASES IN THE LEARNER'S FIRST LANGUAGE OR
     SIMPLE ENGLISH, never a sentence, and the rule is in the system prompt and restated in the
     user prompt so a model that drifts has been told twice.
     ============================================================ */
  var IDEAS_SYSTEM =
    'You help a B1 learner of English for the motor trade to START a short piece of writing. '
    + 'You suggest THINGS TO WRITE ABOUT. You never write the learner’s sentences for '
    + 'them, you never produce a model answer, and you never write a paragraph. Reply with at '
    + 'most six short bullet points. Each bullet is a noun phrase of one to five words - a '
    + 'topic, not a sentence - and must not contain a finite verb. Never give a mark, a score, '
    + 'a grade or a percentage.';

  var PLAN_SYSTEM =
    'You check a B1 learner’s PLAN for a short piece of writing in English for the motor '
    + 'trade. You are given the task and the learner’s plan. Say, in at most four short '
    + 'sentences: what the plan already covers, and what the task asks for that the plan does '
    + 'not yet mention. Do not write any part of the piece. Do not rewrite the plan. Never '
    + 'give a mark, a score, a grade or a percentage.';

  function stepBox(n, title, note) {
    var b = el('div', 'scaf-step');
    b.innerHTML = '<div class="scaf-n">' + n + '</div><div class="scaf-t"><b>' + esc(title)
      + '</b>' + (note ? '<div class="wc">' + note + '</div>' : '') + '</div>';
    return b;
  }

  function scaffoldPanel(card, getText, getPlan) {
    var cfg = card.scaffold;
    var box = el('div', 'scaffold');
    box.appendChild(el('div', 'scaf-head', '<b>How to do this, step by step</b>'));

    /* ---- step 1: ideas ---- */
    var s1 = stepBox(1, 'Get some ideas',
      'Stuck for something to say? Ask for topics — not sentences. You still write the piece.');
    var out1 = el('div', 'scaf-out');
    out1.style.display = 'none';
    var b1 = el('button', 'btn btn-sm', 'Ask AI for ideas');
    b1.type = 'button';
    markAI(b1, 'Ask AI for ideas');
    b1.onclick = function () {
      out1.style.display = 'block';
      out1.innerHTML = '<p class="wc">Thinking of topics…</p>';
      b1.disabled = true;
      askAI({
        system: IDEAS_SYSTEM,
        prompt: 'The task: ' + cfg.task + '\n'
          + 'The unit’s words: ' + (cfg.words || []).join(', ') + '\n'
          + 'Give at most six SHORT TOPICS the learner could write about. '
          + 'Noun phrases only, no sentences, no finite verbs.',
        maxTokens: 220, temperature: 0.7
      }).then(function (res) {
        b1.disabled = false;
        out1.innerHTML = render(res.text);
        out1.appendChild(caution());
      }, function (e) {
        b1.disabled = false;
        out1.innerHTML = noKey(e, 'ideas');
      });
    };
    s1.querySelector('.scaf-t').appendChild(el('div', 'btn-row')).appendChild(b1);
    s1.querySelector('.scaf-t').appendChild(out1);
    box.appendChild(s1);

    /* ---- step 2: plan ---- */
    var s2 = stepBox(2, 'Write your plan',
      'A few words for each part. The plan is not the piece.');
    var plan = el('textarea', 'ta scaf-plan');
    plan.rows = 3;
    plan.placeholder = cfg.planPlaceholder || 'My plan: 1)…  2)…  3)…';
    var out2 = el('div', 'scaf-out');
    out2.style.display = 'none';
    var b2 = el('button', 'btn btn-sm', 'Check my plan');
    b2.type = 'button';
    markAI(b2, 'Check my plan');
    b2.onclick = function () {
      var txt = plan.value.trim();
      out2.style.display = 'block';
      if (U.words(txt) < 4) {
        out2.innerHTML = '<p class="wc">Write a few words of a plan first — even three '
          + 'fragments is enough to check.</p>';
        return;
      }
      out2.innerHTML = '<p class="wc">Reading your plan…</p>';
      b2.disabled = true;
      askAI({
        system: PLAN_SYSTEM,
        prompt: 'The task: ' + cfg.task + '\n'
          + 'It must include: ' + (cfg.must || []).join('; ') + '\n'
          + 'The learner’s plan:\n' + txt,
        maxTokens: 300, temperature: 0.2
      }).then(function (res) {
        b2.disabled = false;
        out2.innerHTML = render(res.text);
        out2.appendChild(caution());
      }, function (e) {
        b2.disabled = false;
        out2.innerHTML = noKey(e, 'plan check');
      });
    };
    var t2 = s2.querySelector('.scaf-t');
    t2.appendChild(plan);
    t2.appendChild(el('div', 'btn-row')).appendChild(b2);
    t2.appendChild(out2);
    box.appendChild(s2);

    /* ---- step 3: write ---- */
    box.appendChild(stepBox(3, 'Write the piece',
      'In the boxes above. Use your plan, and the model if you want to see one.'));

    /* ---- step 4: marking ---- */
    box.appendChild(stepBox(4, 'Ask for a marking',
      'The <b>Mark my work</b> panel below reads what you wrote against this task’s own '
      + 'criteria. It comments; it never scores.'));

    box.appendChild(keyRow().row);
    return { box: box, plan: plan };
  }

  function noKey(e, what) {
    if (e && e.message === 'NO_KEY') {
      return '<p class="wc">This step uses <b>your own</b> Gemini key, from Google AI Studio. '
        + 'Press <b>Use my Gemini key</b> below and paste it in — it stays in this browser and '
        + 'is sent only to Google. Without a key the ' + esc(what) + ' step is simply not '
        + 'available, and everything else on this card works as it does now.</p>';
    }
    return '<p class="verdict show no">' + esc(String(e && e.message || e)) + '</p>';
  }

  /* The model's reply, as paragraphs and bullets. Markup is escaped first: the reply is
     untrusted text and must never become markup on the page. */
  function render(text) {
    var lines = String(text || '').split(/\n+/);
    var out = '', inList = false;
    lines.forEach(function (ln) {
      var s = ln.trim();
      if (!s) { return; }
      var m = s.match(/^[-*•]\s+(.*)$/);
      if (m) {
        if (!inList) { out += '<ul class="scaf-ul">'; inList = true; }
        out += '<li>' + esc(m[1]) + '</li>';
      } else {
        if (inList) { out += '</ul>'; inList = false; }
        out += '<p>' + esc(s) + '</p>';
      }
    });
    if (inList) { out += '</ul>'; }
    return out;
  }

  /* ---- decorate EX.writer so a card declaring `scaffold` grows the ladder ---- */
  var baseWriter = EX.writer;
  EX.writer = function (card, host, api) {
    var ctl = baseWriter(card, host, api);
    if (card.scaffold) {
      var sc = scaffoldPanel(card);
      /* the scaffold belongs BEFORE the boxes a learner types in, because its first two steps
         happen before any writing does */
      host.insertBefore(sc.box, host.firstChild);
      var baseGet = ctl && ctl.getState, baseSet = ctl && ctl.setState;
      if (baseGet) {
        ctl.getState = function () { return { w: baseGet(), plan: sc.plan.value }; };
        ctl.setState = function (s) {
          if (s && typeof s === 'object' && !Array.isArray(s)) {
            if (baseSet) { baseSet(s.w); }
            sc.plan.value = s.plan || '';
          } else if (baseSet) { baseSet(s); }
        };
      }
    }
    return ctl;
  };

  /* ============================================================
     3. THE WORKED ROLE PLAY, IN A MODAL
     ============================================================ */
  var baseRoleplay = EX.roleplay;
  EX.roleplay = function (card, host, api) {
    var ctl = baseRoleplay(card, host, api);

    /* THE TWO ROLE CARDS. The book prints a brief for each part - "Card A — Mechanic: report
       on the fluids; Card B — Foreman: ask how low, then decide" - and the engine's roleplay
       renders only the role BUTTONS, so without this the learner picked a side and was never
       told what that side has to do. The briefs sit above the recorder, each under its own
       heading, so a pair sharing a screen can read their own and not the other's. */
    if (card.briefs && card.briefs.length) {
      var bx = el('div', 'briefs');
      card.briefs.forEach(function (bf) {
        var one = el('div', 'brief');
        one.innerHTML = '<h4>' + esc(bf.label || '') + '</h4><div>' + esc(bf.text || '')
          + '</div>';
        bx.appendChild(one);
      });
      /* above the Remember note when there is one, so the order reads: pick your role, this
         is what your role has to do, these are the words you can use. */
      var anchor = host.querySelector('.note.warm')
        || host.querySelector('.rec-row, .recorder')
        || host.querySelector('textarea');
      host.insertBefore(bx, anchor || null);
    }

    if (card.modelScene && EAM.modal && EAM.cine) {
      var row = el('div', 'btn-row');
      var b = el('button', 'btn btn-sm',
        EAM.art.icon('play', 15) + esc(card.modelScene.label || 'See it played'));
      b.type = 'button';
      b.onclick = function () {
        var body = el('div');
        if (card.modelScene.note) {
          body.appendChild(el('p', 'wc', card.modelScene.note));
        }
        var holder = el('div', 'scene-shell');
        body.appendChild(holder);
        var m = EAM.modal({ title: card.modelScene.label || 'A worked example', body: body,
                            wide: true });
        /* mounted after the modal is in the document, or the stage measures zero */
        setTimeout(function () { EAM.cine.mount(holder, card.modelScene.id); }, 30);
        return m;
      };
      row.appendChild(b);
      host.appendChild(row);
    }
    return ctl;
  };

  /* ============================================================
     4. MARK EVERY AI BUTTON THE ENGINE ITSELF MAKES

     tutor.js builds its own "Check my writing" button, and it is a lifted file. Rather than
     edit it, its panel is swept once after it mounts and anything that talks to a model is
     badged. The sweep is by BUTTON TEXT against a known list, and it fails loudly in the gate
     if the engine renames a button, which is better than a silent miss.
     ============================================================ */
  var AI_BUTTON_TEXT = [/check my writing/i, /ask ai/i, /check my plan/i, /mark my work/i];

  /* THERE ARE TWO AI SURFACES, NOT ONE, and the first version of this sweep only knew about
     the tutor. `EAM.ui.coach` builds its own "Mark my work" button for every card that carries
     a `coach` block - which is most of the open-ended ones - so six buttons across four screens
     reached a model from an unlabelled control. The gate found them; this covers them. */
  function sweep(root) {
    if (!root) { return; }
    [].forEach.call(root.querySelectorAll('button'), function (b) {
      var txt = b.textContent || '';
      for (var i = 0; i < AI_BUTTON_TEXT.length; i++) {
        if (AI_BUTTON_TEXT[i].test(txt)) {
          if (/check my writing/i.test(txt)) { b.innerHTML = 'Mark my work'; }
          markAI(b);
          return;
        }
      }
    });
  }
  EAM.sweepAI = sweep;

  if (EAM.ui && EAM.ui.coach) {
    var baseCoach = EAM.ui.coach;
    EAM.ui.coach = function (cfg, host, api, getText) {
      var r = baseCoach.call(EAM.ui, cfg, host, api, getText);
      try { sweep(host.querySelector('.coach') || host); } catch (e) { /* gate will say so */ }
      return r;
    };
  }

  var baseMount = EAM.tutor && EAM.tutor.mount;
  if (baseMount) {
    EAM.tutor.mount = function (host, card, api) {
      var r = baseMount.call(EAM.tutor, host, card, api);
      try {
        var panel = host.querySelector('.tutor');
        if (panel) {
          var head = panel.querySelector('.tutor-head');
          if (head && !/mark my work/i.test(head.textContent)) {
            head.innerHTML = '<b>Mark my work</b> ' + AI_CHIP;
          }
          sweep(panel);
        }
      } catch (e) { /* the panel still works unbadged; the gate will say so */ }
      return r;
    };
  }

}(window, document));
