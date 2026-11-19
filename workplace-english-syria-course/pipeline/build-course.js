// node build-course.js <level> <out.docx> <session files...>
const L = require('./lib'), R = require('./render');
const { p, h1, h2, h3, pb, sp, box, table, C } = L;
const lvl = +process.argv[2], outPath = process.argv[3], files = process.argv.slice(4);
const S = files.map(f => require('./' + f.replace(/\.js$/, '')));
const NAME = { 1: 'Course 1 · Pre-Intermediate', 2: 'Course 2 · Intermediate', 3: 'Course 3 · Upper-Intermediate' }[lvl];
const SUB = { 1: 'From new joiner to a colleague others depend on',
              2: 'From dependable pair of hands to owning something',
              3: 'From owning a task to supervising people' }[lvl];
const out = [];
const answers = [];        // {session, q, a, tag}

out.push(h1('English for the Workplace · Syria'));
out.push(p('**' + NAME + '**', { color: R.SPINE[lvl] }));
out.push(p('_' + SUB + '_', { color: '7F7F7F' }));
out.push(sp());
out.push(R.fig('ladder', 620, 146));
out.push(box('How this book works', [
  '**Twelve sessions of two hours.** Each session has **three cycles** and a **case study**. Every cycle has the same six parts, in the same order, so you never need to be told what to do next.',
  '**Read · Listen · Say it · Write it.** Three tasks follow each reading and each listening: one about **what each part is for**, one about **the details**, and one where you **rebuild the whole thing**. They never ask the same thing twice.',
  '**Every writing task gives you a model first**, then the same model with gaps, then a frame. Then you write your own.',
  '**The colours mean something, and they mean the same thing in all three books:**',
  table(['Colour', 'What it is'], [
    ['White box, blue rule', 'Something to **read** — it looks like the real document'],
    ['Pale green', 'Something to **listen** to'],
    ['Pale blue', 'The **language box** — the phrases to use'],
    ['Pale yellow', 'A **writing model**, or the **case study**'],
    ['Pale orange', 'A **role-play card** — stand up and say it'],
    ['Grey', '**Talk about it.** No right answer'],
  ], [1.6, 5]),
  '**Answers to every task are at the back**, with a sample answer for every piece of writing.',
], R.LFILL[lvl], R.SPINE[lvl]));

S.forEach(s => {
  const mine = [];                       // this session's answers, numbered 1..N from zero
  const res = R.renderSession(s, lvl, mine);
  mine.forEach(a => answers.push({ ...a, session: s.n }));
  out.push(...res.children);
});

// ---------------- APPENDICES ----------------
out.push(pb());
out.push(h1('Appendix A · Answer key'));
out.push(p('_Every closed task in this book. Discussion questions are open and are listed with no key._', { color: '7F7F7F' }));
S.forEach(s => {
  const a = answers.filter(x => x.session === s.n).sort((x, y) => x.q - y.q);
  out.push(h2('Session ' + s.n + ' · ' + s.title));
  const rows = [];
  for (let i = 0; i < a.length; i += 6) {
    rows.push(a.slice(i, i + 6).map(x => '**' + x.q + '**  ' + x.a));
    while (rows[rows.length - 1].length < 6) rows[rows.length - 1].push('');
  }
  out.push(table(null, rows, [1, 1, 1, 1, 1, 1]));
  out.push(p('_Discussion questions in ' + s.cycles.map(c => c.code).join(', ') + ' and the case study: **open, no key.**_', { color: '595959', after: 160 }));
});

out.push(pb());
out.push(h1('Appendix B · Sample answers'));
out.push(p('_A full sample for every piece of writing and every case study. Your learners\' answers will differ, and that is correct._', { color: '7F7F7F' }));
S.forEach(s => {
  out.push(h2('Session ' + s.n + ' · ' + s.title));
  s.cycles.forEach(cy => {
    out.push(h3(cy.code + '  ' + cy.title));
    out.push(R.MODEL('Sample answer', cy.wTask.sample));
  });
  out.push(h3('Case study · ' + s.caseStudy.sector));
  out.push(R.CASE('Sample output', s.caseStudy.sample));
});

out.push(pb());
out.push(h1('Appendix C · Audio scripts'));
out.push(p('_Read each one aloud three times, slowly. A task follows each reading._', { color: '7F7F7F' }));
S.forEach(s => { out.push(h2('Session ' + s.n)); s.cycles.forEach(cy => out.push(R.AUDIO(cy.listen.track, cy.listen.turns))); });

out.push(pb());
out.push(h1('Appendix D · Words'));
out.push(p('_Twelve a session. The last column is for your own language._', { color: '7F7F7F' }));
S.forEach(s => {
  out.push(h3('Session ' + s.n + ' · ' + s.title));
  out.push(table(['Word or phrase', 'In your language', 'Word or phrase', 'In your language'],
    Array.from({ length: 6 }, (_, i) => [s.vocab[i * 2] || '', '', s.vocab[i * 2 + 1] || '', '']), [1.6, 1.4, 1.6, 1.4]));
});

out.push(pb());
out.push(h1('Appendix E · Role-play cards'));
out.push(p('_Photocopy and cut. One set per pair._', { color: '7F7F7F' }));
S.forEach(s => { out.push(h2('Session ' + s.n)); s.cycles.forEach(cy => {
  out.push(R.ROLE(cy.code + ' · ' + cy.role.setting, ['**A.** ' + cy.role.cardA, '**B.** ' + cy.role.cardB, '**Swap:** ' + cy.role.swap])); }); });

out.push(pb());
out.push(h1('Appendix F · Case-study packs'));
out.push(p('_Photocopy one pack per group of four._', { color: '7F7F7F' }));
S.forEach(s => { out.push(h2('Session ' + s.n + ' · ' + s.caseStudy.sector));
  out.push(R.CASE('The situation', [s.caseStudy.situation]));
  s.caseStudy.docs.forEach(d => out.push(R.DOC(d.title, d.lines))); });

out.push(pb());
out.push(h1('Appendix G · Teacher\'s notes'));
out.push(box('The clock', [
  '**Opening 3 · Cycle 31 · Cycle 31 · Cycle 31 · Case study 22 · Close 2 = 120 minutes.**',
  'Inside a cycle: preview 2 · reading and its three tasks 8.5 · listening and its three tasks 7.5 · elicit 2 · pair role-play 5 · gapped model, start writing, report 6.',
  '⚠ **Read each listening three times and set one task after each reading.** That is why the listening battery costs seven minutes and not fifteen.',
], R.LFILL[lvl], R.SPINE[lvl]));
out.push(box('Pairs and fours', [
  '**Ten learners make five pairs.** Pairs, never threes — a three always has a silent member.',
  '**Re-pair every session**, and once inside a session. Nobody should practise only with one partner.',
  '**The case study uses fours**: two fours and one pair. Take the odd pair yourself.',
  '**Nine learners:** one four, one three, one pair — put the strongest learner in the three.',
], C.grey, C.navy));
out.push(box('Feedback', [
  '**Listen in during pair work and note exactly two errors.** Give them at the end of the cycle, to the room, with no names.',
  '**Do not correct during the role play.** The second run, after the swap, is where it is fixed.',
  '⚠ **The writing is finished at home.** In class the learner completes the gapped model and starts their own. Collect it next session.',
], C.grey, C.navy));

out.push(pb());
out.push(h1('Appendix H · Progress record'));
out.push(table(['Session', 'Can do', '✓'],
  S.flatMap(s => s.canDo.map((c, i) => [i === 0 ? '**' + s.n + '** ' + s.title : '', c, '☐'])), [1.8, 4.6, 0.5]));

L.build(out, outPath, 'English for the Workplace · Syria — ' + NAME, 'English for the Workplace · Syria');
console.log('  answers recorded:', answers.length);
