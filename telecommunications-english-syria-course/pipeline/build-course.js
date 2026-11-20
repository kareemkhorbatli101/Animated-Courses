// node build-course.js <level> <out.docx> <session files...>
const L = require('./lib'), R = require('./render');
const { p, h1, h2, h3, pb, sp, box, table, C } = L;
const lvl = +process.argv[2], outPath = process.argv[3], files = process.argv.slice(4);
const S = files.map(f => require('./' + f.replace(/\.js$/, '')));
const NAME = { 1: 'Course 1 · Pre-Intermediate', 2: 'Course 2 · Intermediate', 3: 'Course 3 · Upper-Intermediate' }[lvl];
const SUB = { 1: 'From your first week in the network to a colleague the shift depends on',
              2: 'From dependable pair of hands to owning a site, a figure and a customer',
              3: 'From owning a site to running a team and answering to vendors, carriers and the regulator' }[lvl];
const out = [];
const answers = [];        // {session, q, a, tag}

out.push(h1('English for Telecommunication Companies · Syria'));
out.push(p('**' + NAME + '**', { color: R.SPINE[lvl] }));
out.push(p('_' + SUB + '_', { color: '7F7F7F' }));
out.push(sp());
out.push(R.fig('ladder', 620, 146));
out.push(box('How this book works', [
  '**Twelve sessions of two hours.** Each session has **three cycles** and a **case study**, every one of them set in a Syrian operator, a vendor or an international carrier. Every cycle has the same six parts, in the same order, so you never need to be told what to do next.',
  '**Read · Listen · Say it · Write it.** Three tasks follow each reading and each listening: one about **what each part is for**, one about **the details**, and one where you **rebuild the whole thing**. They never ask the same thing twice.',
  '**Every writing task gives you a model first**, then the same model with gaps, then a frame. Then you write your own.',
  '**The colours mean something, and they mean the same thing in all three books:**',
  table(['Colour', 'What it is'], [
    ['White box, blue rule', 'Something to **read** — it looks like the real document'],
    ['White box, teal rule', 'A passage with gaps — **rebuild the whole thing**'],
    ['Pale green', 'Something to **listen** to'],
    ['Pale blue', 'The **language box** — the phrases to use'],
    ['Pale yellow', 'A **writing model**, or the **case study** situation'],
    ['Pale orange', 'A **role-play card** — stand up and say it'],
    ['Grey', '**Your turn**, **the frame**, the words, the homework — and **Decide together** in the case study'],
    ['Your course tint', 'The session\'s own frame: what it is for, and can you do it now'],
  ], [1.9, 4.7]),
  '**Answers to every task are at the back**, with a sample answer for every piece of writing.',
], R.LFILL[lvl], R.SPINE[lvl]));

S.forEach(s => {
  const mine = [];                       // this session's answers, numbered 1..N from zero
  const res = R.renderSession(s, lvl, mine);
  mine.forEach(a => answers.push({ ...a, session: s.n }));
  out.push(...res.children);
});

// ---------------- APPENDICES ----------------
out.push(h1('Appendix A · Answer key', { brk: true }));
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
  out.push(p('_Your turn (' + s.cycles.map(c => c.code).join(', ') + ') and the contested questions in the case study: **open — no key. Judge them on whether the pair reached one answer and could say what it cost.**_', { color: '595959', after: 160 }));
});

out.push(h1('Appendix B · Sample answers', { brk: true }));
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

out.push(h1('Appendix C · Audio scripts', { brk: true }));
out.push(p('_Read each one aloud three times, slowly. A task follows each reading._', { color: '7F7F7F' }));
S.forEach(s => { out.push(h2('Session ' + s.n)); s.cycles.forEach(cy => out.push(R.AUDIO(cy.listen.track, cy.listen.turns))); });

out.push(h1('Appendix D · Words', { brk: true }));
out.push(p('_Twelve a session. The last column is for your own language._', { color: '7F7F7F' }));
S.forEach(s => {
  out.push(h3('Session ' + s.n + ' · ' + s.title));
  out.push(table(['Word or phrase', 'In your language', 'Word or phrase', 'In your language'],
    Array.from({ length: 6 }, (_, i) => [s.vocab[i * 2] || '', '', s.vocab[i * 2 + 1] || '', '']), [1.6, 1.4, 1.6, 1.4]));
});

out.push(h1('Appendix E · Role-play cards', { brk: true }));
out.push(p('_Photocopy and cut. One set per pair._', { color: '7F7F7F' }));
S.forEach(s => { out.push(h2('Session ' + s.n)); s.cycles.forEach(cy => {
  out.push(R.ROLE(cy.code + ' · ' + cy.role.setting, ['**A.** ' + cy.role.cardA, '**B.** ' + cy.role.cardB, '**Swap:** ' + cy.role.swap])); }); });

out.push(h1('Appendix F · Case-study packs', { brk: true }));
out.push(p('_Photocopy one pack per group of four._', { color: '7F7F7F' }));
S.forEach(s => { out.push(h2('Session ' + s.n + ' · ' + s.caseStudy.sector));
  out.push(R.CASE('The situation', [s.caseStudy.situation]));
  s.caseStudy.docs.forEach(d => out.push(R.DOC(d.title, d.lines))); });

out.push(h1('Appendix G · Teacher\'s notes', { brk: true }));
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
out.push(box('Running "Your turn" — the two minutes that make the rest worth doing', [
  '**It sits between the input and the practice, and that is deliberate.** The learners have just read and heard somebody else\'s property. Before they practise, they say what the same thing looks like in theirs. The role play afterwards is then about their work, not about Rima and Samih.',
  '**Two minutes, and you keep the clock.** Question 1 for one minute in pairs, question 2 for one minute. It is not a discussion; it is a collection.',
  '**Every question has three lines printed: the question, what the pair does, and what the class gets.** Do not skip the third. A pair that is never asked to report has a conversation in Arabic and nothing arrives.',
  '⚠ **Take one line from each pair, not the best answer from the room.** Five pairs, five contributions, forty seconds. If you take volunteers you will hear the same two learners for twelve sessions.',
  '**Write the output on the board where the printed page says to.** Several sessions tell you to keep it for a later cycle — 11.1 feeds 11.3.',
], C.grey, C.navy));
out.push(box('Running the case study — "Decide together"', [
  '**The three questions are built so that two reasonable people answer differently.** If every group gives the same answer in the same words, they have found the answer they think you want. Say so, and send them back.',
  '**The group must land on one answer and say what it costs them.** That sentence is the whole exercise. A group that lists both sides and stops has not done it.',
  '**You are not the arbiter.** There is a sample output in Appendix B, and it is one defensible answer, not the right one. Show it after they have committed to theirs, never before.',
  '⚠ **The documents disagree on purpose, and one of them is always incomplete.** Learners will ask you for the missing fact. Do not supply it — deciding without it is the skill being taught.',
  '**Twenty-two minutes:** read the three documents 6 · the three task forms 8 · decide and write 6 · two groups report 2.',
], C.grey, C.navy));
out.push(box('Feedback', [
  '**Listen in during pair work and note exactly two errors.** Give them at the end of the cycle, to the room, with no names.',
  '**Do not correct during the role play.** The second run, after the swap, is where it is fixed.',
  '⚠ **The writing is finished at home.** In class the learner completes the gapped model and starts their own. Collect it next session.',
], C.grey, C.navy));

out.push(h1('Appendix H · Progress record', { brk: true }));
out.push(table(['Session', 'Can do', '✓'],
  S.flatMap(s => s.canDo.map((c, i) => [i === 0 ? '**' + s.n + '** ' + s.title : '', c, '☐'])), [1.8, 4.6, 0.5]));

L.build(out, outPath, 'English for Telecommunication Companies · Syria — ' + NAME, 'English for Telecommunication Companies · Syria');
console.log('  answers recorded:', answers.length);
