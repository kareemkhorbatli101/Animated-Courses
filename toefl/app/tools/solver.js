/* solver.js — the in-page solving routine, shared by solve.js and the lab.
   It runs inside the browser, so it may close over nothing from Node.
   One branch per exercise kind. An exercise with no branch here cannot be
   verified, which is itself a finding the gate reports. */
function solveScene() {
  const idx = [...document.querySelectorAll('.dot')].findIndex(d => d.classList.contains('now'));
  const s = window.PAGE.scenes[idx];
  const norm = t => String(t).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const fail = () => { window.__pickFail = (window.__pickFail || 0) + 1; };

  /* Match an option by its own text EXACTLY. A substring match picks the wrong
     button whenever one option contains another ("go" / "to go"). */
  const pick = (box, wantText) => {
    const want = norm(wantText);
    const opts = [...box.querySelectorAll('.opt')];
    let b = opts.find(x => norm(x.lastChild.textContent) === want);
    if (!b) b = opts.find(x => norm(x.lastChild.textContent).startsWith(want));
    if (b) b.click(); else fail();
  };
  const boxes = [...document.querySelectorAll('.opts')];
  const correctOf = o => (o.options.find(x => x.correct) || {}).text || '';

  /* chip -> zone, through the click path the learner uses */
  const place = (chipText, zoneId) => {
    const chip = [...document.querySelectorAll('.chip')]
      .find(c => norm(c.textContent) === norm(chipText));
    const zone = document.querySelector('[data-zone-id="' + CSS.escape(String(zoneId)) + '"]');
    if (!chip || !zone) { fail(); return; }
    if (!chip.classList.contains('lifted')) chip.click();
    if (!chip.classList.contains('lifted')) chip.click();   /* placed -> tray -> lift */
    zone.click();
  };
  const tiles = (host, words) => words.forEach(w => {
    const t = [...host.querySelectorAll('.tile')].find(x => norm(x.textContent) === norm(w));
    if (t) t.click(); else fail();
  });
  const rubrics = () => {
    document.querySelectorAll('.rubric').forEach(r => {
      const b = r.querySelector('input[type=radio]');
      if (b) { b.checked = true; b.dispatchEvent(new Event('change')); }
    });
    document.querySelectorAll('.rubric input[type=checkbox]').forEach(c => { c.checked = true; });
  };
  const typeInto = (sel, text) => {
    const ta = document.querySelector(sel);
    if (!ta) { fail(); return; }
    ta.value = text;
    ta.dispatchEvent(new Event('input'));
  };

  switch (s.kind) {
    /* ---------- multiple choice families ---------- */
    case 'choice': case 'register-dial':
      if (boxes[0] && s.options) pick(boxes[0], correctOf(s)); else fail();
      break;
    case 'read': case 'chartread': case 'listen': case 'talk': case 'quiz':
    case 'respond': case 'minimal-pairs': case 'paraphrase': case 'oddone':
      (s.items || []).forEach((it, j) => {
        if (boxes[j] && it.options) pick(boxes[j], correctOf(it)); else fail();
      });
      break;

    /* ---------- typing ---------- */
    case 'letterbox':
      document.querySelectorAll('.item').forEach((it, j) => {
        const w = s.items[j].answer;
        [...it.querySelectorAll('.lb span, .lb input')]
          .forEach((el, k) => { if (el.tagName === 'INPUT') el.value = w[k]; });
      });
      break;
    case 'dictation':
      document.querySelectorAll('.dict-row input').forEach((inp, j) => {
        inp.value = s.items[j].answer; inp.dispatchEvent(new Event('input'));
      });
      break;
    case 'notes': case 'table':
      document.querySelectorAll('.cellin').forEach((inp, j) => {
        inp.value = (s.gaps[j] || {}).answer || ''; inp.dispatchEvent(new Event('input'));
      });
      break;

    /* ---------- tfni ---------- */
    case 'tfni':
      document.querySelectorAll('.tfni').forEach((row, j) => {
        const it = s.items[j];
        const b = [...row.querySelectorAll('.mark button')].find(x => x.textContent === it.answer);
        if (b) b.click(); else fail();
        if (it.line !== null && row.querySelector('input')) row.querySelector('input').value = String(it.line);
      });
      break;

    /* ---------- tile ordering ---------- */
    case 'order':
      tiles(document.querySelector('.tray'), s.target.trim().split(/\s+/));
      break;
    case 'orderset':
      document.querySelectorAll('.slot').forEach((slot, j) => {
        tiles(slot.parentNode.querySelector('.tray'), s.items[j].target.trim().split(/\s+/));
      });
      break;
    case 'cloze':
      document.querySelectorAll('.panel select').forEach((sel, j) => { sel.value = s.gaps[j].answer; });
      break;

    /* ---------- drag families ---------- */
    case 'match':
      (s.pairs || []).forEach(p => place(p.word, p.pin || p.word));
      break;
    case 'sort':
      (s.items || []).forEach(it => place(it.text, it.bin));
      break;
    case 'wordbank':
      (s.items || []).forEach((it, j) => place(it.answer, 'g' + j));
      break;
    case 'sequence':
      (s.steps || []).slice().sort((a, b) => a.pos - b.pos)
        .forEach(st => place(st.text, 'p' + st.pos));
      break;

    /* ---------- in-text selection ---------- */
    case 'selectintext':
      (s.items || []).forEach((it, j) => {
        const host = document.querySelectorAll('.sit')[j];
        if (!host) { fail(); return; }
        const t = [...host.querySelectorAll('.tok')].find(x => norm(x.textContent) === norm(it.answer));
        if (t) t.click(); else fail();
      });
      break;
    case 'errorfix':
      (s.items || []).forEach((it, j) => {
        const host = document.querySelectorAll('.efx')[j];
        if (!host) { fail(); return; }
        const t = [...host.querySelectorAll('.tok')].find(x => norm(x.textContent) === norm(it.wrong));
        if (t) t.click(); else { fail(); return; }
        const inp = host.querySelector('input');
        if (inp) { inp.value = it.right; inp.dispatchEvent(new Event('input')); }
      });
      break;

    /* ---------- self-assessed production ---------- */
    case 'repeat': case 'interview':
      {
        const go = [...document.querySelectorAll('button')].find(b => b.textContent.includes('Start the clock'));
        if (go) go.click();
        const rv = [...document.querySelectorAll('button')].find(b => b.textContent.includes('Reveal'));
        if (rv) rv.click();
        rubrics();
      }
      break;
    case 'discussion':
      typeInto('.post.me textarea',
        'I think a study group helps most when it forces you to explain something out loud to another person. ' +
        'Working alone lets you avoid ever finding out which parts of an explanation you cannot actually produce. ' +
        'Priya is right that explaining is when you discover what you do not know, and that has been my own experience as well. ' +
        'Last term I could not finish a single sentence about a formula I had read four times over, which told me far more than those four readings had. ' +
        'Tomas is right that some groups carry passengers, but the remedy is to make every member explain one thing, rather than to abandon groups altogether.');
      rubrics();
      break;
    case 'write-email':
      typeInto('.mail textarea',
        'Dear Dan, I am writing to ask whether there is still a place available in the Thursday study-skills workshop. ' +
        'Unfortunately I missed the sign-up deadline by a single day, because I was away from campus on Friday afternoon and did not see the notice in time. ' +
        'Would it be possible to add me to the waiting list for that session? Please could you also let me know what I should do next, ' +
        'and whether the Tuesday morning group would be a better option for me. Many thanks for your help, Mei Lin');
      rubrics();
      break;
    case 'paragraph':
      typeInto('.pad textarea',
        'The clearest reason to study with other people is that a group makes you say your reasoning out loud, and saying it out loud is the moment you find the gaps in it. ' +
        'When I revise alone I can reread a page four times and still not notice that I could not explain it to anyone. ' +
        'A group removes that comfort, because somebody will ask the question I have been quietly stepping around. ' +
        'The cost is that a group can also absorb a passenger who lets everyone else do the explaining, so the rule I now keep is simple: every member explains one thing before the session ends.');
      rubrics();
      break;

    /* Deliberately ungradable: a passage to read before the items that follow. */
    case 'read-only':
      break;

    default:
      window.__noBranch = (window.__noBranch || []).concat(s.kind);
  }
}
module.exports = { solveScene };
