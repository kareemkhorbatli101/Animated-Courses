/* ============================================================
   Practise IELTS Writing (IWR) - sections.js

   The nine sections of an essay page, in the order a learner meets them. Every exercise
   reports its own state into "la.iwr.v1" and restores it on load, because section 7 is a
   250-word essay and a learner who reloads must not lose it.

   MARKING RULES THAT ARE NOT NEGOTIABLE HERE, each from a defect that reached learners on this
   site before:
     * Show answers marks the card REVEALED, never correct.
     * An untouched card never reports "ok".
     * Clicking everything is not an answer.
   ============================================================ */
(function (w, d) {
  'use strict';
  var IWR = w.IWR;
  var el = IWR.el, esc = IWR.esc, words = IWR.words, shuffled = IWR.shuffled;

  function card(n, title, lead) {
    var c = el('section', 'card');
    c.appendChild(el('div', 'sec-n', esc(n)));
    c.appendChild(el('h2', '', esc(title)));
    if (lead) c.appendChild(el('p', 'lead', lead));
    return c;
  }
  function verdict(box, kind, text) {
    var v = box.querySelector('.verdict');
    if (!v) { v = el('div', 'verdict'); box.appendChild(v); }
    v.className = 'verdict ' + kind;
    v.innerHTML = text;
    return v;
  }
  function norm(s) {
    return String(s || '').replace(/[’‘]/g, "'").replace(/[“”]/g, '"')
      .replace(/\s+/g, ' ').trim().toLowerCase();
  }

  /* ============ 0 - the question ============ */
  function s0(E) {
    var c = el('section', 'card');
    var chips = el('div', 'chips');
    chips.appendChild(el('span', 'chip cat', esc(E.category)));
    if (E.qtype) chips.appendChild(el('span', 'chip', esc(E.qtype)));
    if (E.years) chips.appendChild(el('span', 'chip', 'Reported ' + esc(E.years)));

    c.appendChild(el('div', 'sec-n', 'ESSAY ' + esc(E.num)));
    c.appendChild(el('h2', '', esc(E.title)));
    var q = el('div', 'question');
    q.innerHTML = '<span class="q-mark">&ldquo;</span>' + esc(E.question || '')
      + '<span class="q-mark">&rdquo;</span>';
    c.appendChild(q);

    /* the band badge is a button: the model is Band 6.5-7 and a learner who copies its style
       believing it is a 9 has been taught the wrong thing by the page */
    var band = IWR.discloser('Band 6.5–7 — why, and what a Band 8 needs', function () {
      var box = el('div', 'wordpanel');
      if (!E.criteria || !E.criteria.length) {
        box.appendChild(el('div', 'note', 'This essay has no written justification in the book.'));
        return box;
      }
      E.criteria.forEach(function (cr) {
        box.appendChild(el('div', 'big', esc(cr.name) + (cr.band ? ' — Band ' + esc(cr.band) : '')));
        var ul = el('ul');
        (cr.lines || []).forEach(function (ln) { ul.appendChild(el('li', '', esc(ln))); });
        box.appendChild(ul);
      });
      return box;
    });
    band.btn.className = 'chip btn band';
    chips.appendChild(band.btn);

    /* the words button - closed by default, because a permanent word count beside a model
       essay teaches length imitation rather than structure */
    var wb = IWR.discloser('Words', function () {
      return IWR.wordPanel(E.words, E.stated, E.extended);
    });
    chips.appendChild(wb.btn);
    c.appendChild(chips);
    c.appendChild(band.panel);
    c.appendChild(wb.panel);

    if (E.pair) {
      var p = el('div', 'notice');
      p.innerHTML = 'Two different answers to this question exist in this book. '
        + '<a href="../' + esc(E.pair.category_slug) + '/' + esc(E.pair.slug) + '.html">'
        + 'Compare with essay ' + esc(E.pair.num) + '</a>.';
      c.appendChild(p);
    }
    var row = el('div', 'btn-row');
    var read = el('button', 'btn btn-primary', 'Read full essay');
    read.type = 'button';
    read.addEventListener('click', function () { IWR.player(E); });
    row.appendChild(read);
    var ask = el('button', 'btn', 'Ask about this essay');
    ask.type = 'button';
    ask.addEventListener('click', function () { IWR.askModel(E); });
    row.appendChild(ask);
    c.appendChild(row);
    return c;
  }

  /* ============ a shared gap-fill engine for sections 1 and 4 ============ */
  function gapExercise(opts) {
    var answers = opts.answers;                 /* [{id, text, why}] */
    var box = opts.box;
    var slots = {};
    var placed = {};
    var bank = el('div', 'bank');
    var pick = IWR.Picker(place);

    function tokenFor(v, long) {
      var t = el('button', 'tok' + (long ? ' long' : ''), esc(v));
      t.type = 'button';
      t.setAttribute('data-v', v);
      pick.wireToken(t);
      return t;
    }
    function place(slot, tok) {
      var id = slot.getAttribute('data-id');
      if (!tok) {                                /* take it back out */
        var old = placed[id];
        if (old != null) {
          bank.appendChild(tokenFor(old, old.length > 24));
          delete placed[id];
          slot.innerHTML = '&nbsp;';
          slot.removeAttribute('data-filled');
          slot.className = slot.className.replace(/\s*(filled|ok|no)/g, '');
        }
        return;
      }
      var v = tok.getAttribute('data-v');
      if (placed[id] != null) place(slot, null);
      if (tok.parentNode) tok.parentNode.removeChild(tok);
      placed[id] = v;
      slot.textContent = v;
      slot.setAttribute('data-filled', '1');
      slot.className = slot.className.replace(/\s*(ok|no)/g, '') + ' filled';
      persist();
    }
    function persist() {
      IWR.put(opts.key, { placed: placed, done: Object.keys(placed).length === answers.length });
    }

    opts.mount(function (id) {
      var s = el('span', 'slot' + (opts.block ? ' block' : ''), '&nbsp;');
      s.setAttribute('data-id', id);
      s.setAttribute('aria-label', 'answer slot ' + id);
      pick.wireSlot(s);
      slots[id] = s;
      return s;
    });

    /* The bank is a DERANGEMENT of the answer order: no chip may start in the position of the
       slot it belongs to, so the learner is never handed a pairing for free. The answers are
       listed first so their index IS their slot's index; distractors follow and have no home. */
    var pool = answers.map(function (a) { return a.text; }).concat(opts.distractors || []);
    var order = shuffled(pool, opts.seed);
    order.forEach(function (v) {
      bank.appendChild(tokenFor(v, v.length > 24));
    });
    /* The slot order this card expects, so a gate can ask whether the bank hands any pairing
       over for free. It is not a leak: the same answers are already in window.IWR_ESSAY. */
    box.setAttribute('data-key', opts.key);
    box.setAttribute('data-answers', JSON.stringify(answers.map(function (a) { return a.text; })));
    /* The bank goes immediately above the exercise body. insertBefore needs a DIRECT child of
       box, and in section 5 the exercise body is nested inside a grid - which threw, and took
       the whole page down with it. So walk up to box's own child, and append if there is none. */
    var ref = box.querySelector('.exbody');
    while (ref && ref.parentNode && ref.parentNode !== box) ref = ref.parentNode;
    if (ref && ref.parentNode === box) box.insertBefore(bank, ref);
    else box.appendChild(bank);

    var row = el('div', 'btn-row');
    var check = el('button', 'btn btn-primary', 'Check');
    check.type = 'button';
    var again = el('button', 'btn', 'Try again');
    again.type = 'button';
    var show = el('button', 'btn btn-sm', 'Show answers');
    show.type = 'button';
    row.appendChild(check);
    row.appendChild(again);
    row.appendChild(show);
    box.appendChild(row);

    check.addEventListener('click', function () {
      var right = 0, filled = 0, i, a, s;
      for (i = 0; i < answers.length; i++) {
        a = answers[i];
        s = slots[a.id];
        var got = placed[a.id];
        if (got != null) filled++;
        s.className = s.className.replace(/\s*(ok|no)/g, '');
        var whyEl = s.parentNode && s.parentNode.querySelector('.why[data-for="' + a.id + '"]');
        if (whyEl) whyEl.remove();
        if (got != null && norm(got) === norm(a.text)) { s.className += ' ok'; right++; }
        else if (got != null) {
          s.className += ' no';
          if (a.why) {
            var wn = el('span', 'why', esc(a.why));
            wn.setAttribute('data-for', a.id);
            if (s.parentNode) s.parentNode.appendChild(wn);
          }
        }
      }
      if (!filled) {
        verdict(box, 'plain', 'Nothing placed yet — put the words into the gaps first.');
        return;
      }
      var kind = right === answers.length ? 'ok' : (right ? 'part' : 'no');
      verdict(box, kind, esc(right) + ' of ' + esc(answers.length) + ' right'
        + (right === answers.length ? '.' : ' — the amber ones are not where they belong.'));
      IWR.put(opts.key, { placed: placed, right: right, of: answers.length,
                          done: right === answers.length });
    });
    again.addEventListener('click', function () {
      Object.keys(slots).forEach(function (id) { place(slots[id], null); });
      verdict(box, 'plain', 'Cleared. The bank has every word back.');
    });
    show.addEventListener('click', function () {
      answers.forEach(function (a) {
        var s = slots[a.id];
        Array.prototype.slice.call(bank.querySelectorAll('.tok')).forEach(function (t) {
          if (t.getAttribute('data-v') === a.text && t.parentNode) t.parentNode.removeChild(t);
        });
        placed[a.id] = a.text;
        s.textContent = a.text;
        s.setAttribute('data-filled', '1');
        s.className = s.className.replace(/\s*(ok|no|filled)/g, '') + ' filled';
      });
      /* REVEALED, not correct. A revealed card that reported itself correct is a defect this
         site has already shipped once. */
      verdict(box, 'plain', 'Answers shown. This card counts as <strong>revealed</strong>, '
        + 'not as correct — come back to it later.');
      IWR.put(opts.key, { revealed: true, done: false });
    });

    var saved = IWR.get(opts.key);
    if (saved && saved.placed) {
      Object.keys(saved.placed).forEach(function (id) {
        var v = saved.placed[id];
        var tok = null;
        Array.prototype.slice.call(bank.querySelectorAll('.tok')).forEach(function (t) {
          if (!tok && t.getAttribute('data-v') === v) tok = t;
        });
        if (tok && slots[id]) place(slots[id], tok);
      });
    }
    return { slots: slots };
  }

  /* ============ 1 - vocabulary in new sentences ============ */
  function s1(E) {
    var it = E.items || {};
    var set = it.setA || [];
    if (!set.length) return null;
    var c = card('SECTION 1', 'Learn the words: finish each sentence',
      'Five words from this essay, in five sentences that are <em>not</em> in it. '
      + 'Drag, or click a word and then click a gap.');
    var ul = el('ul', 'sents exbody');
    c.appendChild(ul);
    gapExercise({
      box: c, key: 's1', seed: E.num * 7 + 1,
      answers: set.map(function (x, i) { return { id: 'a' + i, text: x.word, why: null }; }),
      distractors: it.setA_distractors || [],
      mount: function (slotFor) {
        set.forEach(function (x, i) {
          var li = el('li');
          li.appendChild(el('span', 'n', String(i + 1) + '.'));
          var s = el('span', 's');
          var parts = String(x.sentence).split('____');
          s.appendChild(d.createTextNode(parts[0] || ''));
          s.appendChild(slotFor('a' + i));
          s.appendChild(d.createTextNode(parts[1] || ''));
          li.appendChild(s);
          ul.appendChild(li);
        });
      }
    });
    var where = IWR.discloser('Where these came from', function () {
      var box = el('div', 'wordpanel');
      set.forEach(function (x) {
        var line = null;
        (E.body || []).forEach(function (p) {
          if (!line && norm(p).indexOf(norm(x.word)) >= 0) {
            var m = p.match(new RegExp('[^.]*' + x.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^.]*\\.', 'i'));
            line = m ? m[0].trim() : null;
          }
        });
        box.appendChild(el('div', 'note', '<strong>' + esc(x.word) + '</strong> — '
          + esc(line || 'in this essay')));
      });
      return box;
    });
    var row = el('div', 'btn-row');
    row.appendChild(where.btn);
    c.appendChild(row);
    c.appendChild(where.panel);
    return c;
  }

  /* ============ 2 - match the words to their meanings ============ */
  function s2(E) {
    var it = E.items || {};
    var set = it.setB || [];
    if (!set.length) return null;
    var c = card('SECTION 2', 'Match the words to their meanings',
      'Five more words from this essay. The meanings are in a different order.');
    var box = el('div', 'match exbody');
    c.appendChild(box);
    var order = shuffled(set.map(function (_, i) { return i; }), E.num * 13 + 5);
    gapExercise({
      box: c, key: 's2', seed: E.num * 11 + 3, block: false,
      answers: order.map(function (idx, i) {
        return { id: 'b' + i, text: set[idx].word, why: null };
      }),
      distractors: [],
      mount: function (slotFor) {
        order.forEach(function (idx, i) {
          var row = el('div', 'row');
          row.appendChild(slotFor('b' + i));
          row.appendChild(el('span', 'def', esc(set[idx]['def'])));
          box.appendChild(row);
        });
      }
    });
    return c;
  }

  /* ============ 4 - put the essay back together ============ */
  function s4(E) {
    var it = E.items || {};
    var cl = (it.cloze || []);
    if (!cl.length) return null;
    var c = card('SECTION 4', 'Put the essay back together',
      'Ten words, phrases and one whole sentence have been lifted out. '
      + 'Put each one back where it belongs.');
    var body = el('div', 'essay exbody');
    c.appendChild(body);

    /* find each span in the body text, once, left to right */
    var remaining = cl.map(function (x, i) { return { id: 'c' + i, text: x.text, why: x.why }; });
    var answers = [];
    gapExercise({
      box: c, key: 's4', seed: E.num * 17 + 7,
      answers: (function () {
        /* the answer list has to be built in the order the slots are mounted, so this is
           computed inside mount and read back here */
        return remaining;
      })(),
      distractors: it.cloze_distractors || [],
      mount: function (slotFor) {
        (E.body || []).forEach(function (para) {
          var p = el('p');
          var text = para, guard = 0;
          while (guard++ < 40) {
            var best = -1, bestItem = null;
            remaining.forEach(function (r) {
              if (r.used) return;
              var at = text.indexOf(r.text);
              if (at >= 0 && (best < 0 || at < best)) { best = at; bestItem = r; }
            });
            if (!bestItem) break;
            p.appendChild(d.createTextNode(text.slice(0, best)));
            p.appendChild(slotFor(bestItem.id));
            bestItem.used = true;
            answers.push(bestItem);
            text = text.slice(best + bestItem.text.length);
          }
          p.appendChild(d.createTextNode(text));
          body.appendChild(p);
        });
      }
    });
    var row = el('div', 'btn-row');
    var whole = el('button', 'btn btn-sm', 'Show the essay whole');
    whole.type = 'button';
    whole.addEventListener('click', function () {
      body.innerHTML = '';
      (E.body || []).forEach(function (para) { body.appendChild(el('p', '', esc(para))); });
      verdict(c, 'plain', 'Shown whole. This card counts as <strong>revealed</strong>.');
      IWR.put('s4', { revealed: true, done: false });
    });
    row.appendChild(whole);
    var read = el('button', 'btn btn-sm', 'Read full essay');
    read.type = 'button';
    read.addEventListener('click', function () { IWR.player(E); });
    row.appendChild(read);
    c.appendChild(row);
    return c;
  }

  /* ============ 5 - build the outline ============ */
  function s5(E) {
    var out = E.outline || [];
    if (!out.length && !E.thesis) return null;
    var kindLabel = E.thesis_kind === 'roadmap'
      ? 'road-map statement (in this essay I will …)'
      : 'thesis statement (I believe …)';
    var c = card('SECTION 5', 'Build the outline',
      'Drag each statement into the right place. The introduction slot wants a <strong>'
      + esc(kindLabel) + '</strong> — one chip is the other kind, and does not belong.');
    var grid = el('div', 'outline');
    var skel = el('div', 'skel exbody');
    grid.appendChild(skel);
    c.appendChild(grid);

    var answers = [];
    var i = 0;
    gapExercise({
      box: c, key: 's5', seed: E.num * 19 + 11, block: true,
      answers: (function () {
        if (E.thesis) answers.push({ id: 'o' + (i++), text: E.thesis, why: null });
        out.forEach(function (s) {
          if (s.topic) answers.push({ id: 'o' + (i++), text: s.topic, why: null });
          (s.subs || []).slice(0, 3).forEach(function (sub) {
            answers.push({ id: 'o' + (i++), text: sub, why: null });
          });
        });
        return answers;
      })(),
      distractors: E.items && E.items.decoy ? [E.items.decoy] : [],
      mount: function (slotFor) {
        var k = 0;
        if (E.thesis) {
          var sec0 = el('div', 'sec');
          sec0.appendChild(el('div', 'lab', 'Introduction'));
          sec0.appendChild(el('div', 'hint', esc(kindLabel)));
          sec0.appendChild(slotFor('o' + (k++)));
          skel.appendChild(sec0);
        }
        out.forEach(function (s) {
          var sec = el('div', 'sec');
          sec.appendChild(el('div', 'lab', esc(s.label)));
          if (s.topic) sec.appendChild(slotFor('o' + (k++)));
          var subs = el('div', 'subs');
          (s.subs || []).slice(0, 3).forEach(function () { subs.appendChild(slotFor('o' + (k++))); });
          sec.appendChild(subs);
          skel.appendChild(sec);
        });
      }
    });

    /* Does the conclusion do real work, or only restate? The page says which, because a learner
       imitating a summary-only conclusion stays at the band this model sits in. */
    var last = out[out.length - 1];
    if (last && /conclusion/i.test(last.label)) {
      var note = el('div', 'notice');
      note.innerHTML = (last.subs && last.subs.length > 1)
        ? 'This conclusion does more than summarise — it recommends or sets a condition, '
          + 'which is why it has an outline of its own.'
        : 'This conclusion only summarises. That is enough for Band 7; a stronger one would add '
          + 'a recommendation or a condition.';
      c.appendChild(note);
    }
    return c;
  }

  /* ============ 8 - what you have done ============ */
  function s8(E) {
    var c = card('SECTION 8', 'What you have done here', null);
    var ul = el('ul');
    [['s1', 'Vocabulary 1'], ['s2', 'Vocabulary 2'], ['s3', 'Your own example'],
     ['s4', 'The essay puzzle'], ['s5', 'The outline'], ['s7', 'Your own essay']]
      .forEach(function (p) {
        var st = IWR.get(p[0]) || {};
        var mark = st.done ? '✓' : (st.revealed ? '○ revealed' : '·');
        var extra = (st.right != null) ? ' — ' + st.right + ' of ' + st.of : '';
        ul.appendChild(el('li', '', esc(mark) + ' ' + esc(p[1]) + esc(extra)));
      });
    c.appendChild(ul);
    return c;
  }

  IWR.sections = { s0: s0, s1: s1, s2: s2, s4: s4, s5: s5, s8: s8, card: card,
                   verdict: verdict, norm: norm };
})(window, document);
