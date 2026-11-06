/* solve.js — open every block of every built unit, solve every exercise through
   its own click path, and report. An item nobody can answer by operating the
   interface is a broken item however good its data looks. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT,'assets/spec.js'));
require(path.join(ROOT,'assets/book.js'));
const B = window.BOOK;

(async () => {
  const browser = await chromium.launch({ args:['--no-sandbox'] });
  let scenes = 0, okCount = 0, failures = [], errors = [];

  for (const u of B.UNITS) {
    const dir = path.join(ROOT, u.id);
    if (!fs.existsSync(dir)) continue;
    const blocks = B.BLOCKS.map(b=>b.id).filter(id=>fs.existsSync(path.join(dir,'data',id+'.js')));
    if (!blocks.length) continue;
    for (const blk of blocks) {
      const url = 'file://' + path.join(dir, blk + '.html');
      const pg = await browser.newPage({ viewport:{width:1020,height:900} });
      pg.on('pageerror', e => errors.push(`${u.id}/${blk}: ${e.message}`));
      pg.on('console', m => { if (m.type()==='error') errors.push(`${u.id}/${blk} console: ${m.text()}`); });
      await pg.goto(url + '?seed=5');
      await pg.waitForTimeout(220);
      const n = await pg.evaluate(()=>window.PAGE.scenes.length);

      for (let i=0;i<n;i++){
        const meta = await pg.evaluate(()=>{
          const idx=[...document.querySelectorAll('.dot')].findIndex(d=>d.classList.contains('now'));
          const s=window.PAGE.scenes[idx]; return {id:s.id, kind:s.kind};
        });
        await pg.evaluate(()=>{
          const idx=[...document.querySelectorAll('.dot')].findIndex(d=>d.classList.contains('now'));
          const s=window.PAGE.scenes[idx];
          // Match the option's own text EXACTLY. A substring match picks the
          // wrong button whenever one option contains another ("go" / "to go").
          const norm = t => t.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
          const pick = (box, wantText) => {
            const want = norm(wantText);
            const opts = [...box.querySelectorAll('.opt')];
            let b = opts.find(x => norm(x.lastChild.textContent) === want);
            if (!b) b = opts.find(x => norm(x.lastChild.textContent).startsWith(want));
            if (b) b.click(); else window.__pickFail = (window.__pickFail||0)+1;
          };
          const boxes = [...document.querySelectorAll('.opts')];
          if (s.kind==='choice' || s.kind==='register-dial'){
            if(boxes[0] && s.options) pick(boxes[0], (s.options.find(o=>o.correct)||{}).text||'');
          }
          else if (['read','chartread','listen','talk','quiz'].includes(s.kind)){
            (s.items||[]).forEach((it,j)=>{ if(boxes[j]&&it.options) pick(boxes[j],(it.options.find(o=>o.correct)||{}).text||''); });
          }
          else if (s.kind==='respond'){
            (s.items||[]).forEach((it,j)=>{ if(boxes[j]) pick(boxes[j],(it.options.find(o=>o.correct)||{}).text||''); });
          }
          else if (s.kind==='letterbox'){
            document.querySelectorAll('.item').forEach((it,j)=>{
              const w=s.items[j].answer;
              [...it.querySelectorAll('.lb span, .lb input')].forEach((el,k)=>{ if(el.tagName==='INPUT') el.value=w[k]; });
            });
          }
          else if (s.kind==='tfni'){
            document.querySelectorAll('.tfni').forEach((row,j)=>{
              const it=s.items[j];
              [...row.querySelectorAll('.mark button')].find(b=>b.textContent===it.answer).click();
              if (it.line!==null) row.querySelector('input').value=String(it.line);
            });
          }
          else if (s.kind==='order'){
            const want=s.target.trim().split(/\s+/); const tray=document.querySelector('.tray');
            want.forEach(w=>{ const t=[...tray.querySelectorAll('.tile')].find(x=>x.textContent===w); if(t)t.click(); });
          }
          else if (s.kind==='orderset'){
            document.querySelectorAll('.slot').forEach((slot,j)=>{
              const box=slot.parentNode, tray=box.querySelector('.tray');
              s.items[j].target.trim().split(/\s+/).forEach(w=>{
                const t=[...tray.querySelectorAll('.tile')].find(x=>x.textContent===w); if(t)t.click();
              });
            });
          }
          else if (s.kind==='cloze'){
            document.querySelectorAll('.panel select').forEach((sel,j)=>{ sel.value=s.gaps[j].answer; });
          }
          else if (s.kind==='repeat'){
            document.querySelectorAll('.rubric').forEach(r=>{ const b=r.querySelector('input[type=radio]'); if(b){b.checked=true;b.dispatchEvent(new Event('change'));} });
          }
          else if (s.kind==='interview'){
            const go=[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Start the clock')); if(go)go.click();
            const rv=[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Reveal')); if(rv)rv.click();
            const r=document.querySelector('.rubric input[type=radio]'); if(r){r.checked=true;r.dispatchEvent(new Event('change'));}
          }
          else if (s.kind==='discussion'){
            const ta=document.querySelector('.post.me textarea');
            ta.value = 'I think a study group helps most when it forces you to explain something out loud to another person. ' +
                       'Working alone lets you avoid ever finding out which parts of an explanation you cannot actually produce. ' +
                       'Priya is right that explaining is when you discover what you do not know, and that has been my own experience as well. ' +
                       'Last term I could not finish a single sentence about a formula I had read four times over, which told me far more than those four readings had. ' +
                       'Tomas is right that some groups carry passengers, but the remedy is to make every member explain one thing, rather than to abandon groups altogether.';
            ta.dispatchEvent(new Event('input'));
            document.querySelectorAll('.rubric input[type=checkbox]').forEach(c=>c.checked=true);
          }
          else if (s.kind==='write-email'){
            const ta=document.querySelector('.mail textarea');
            ta.value = 'Dear Dan, I am writing to ask whether there is still a place available in the Thursday study-skills workshop. ' +
                       'Unfortunately I missed the sign-up deadline by a single day, because I was away from campus on Friday afternoon and did not see the notice in time. ' +
                       'Would it be possible to add me to the waiting list for that session? Please could you also let me know what I should do next, ' +
                       'and whether the Tuesday morning group would be a better option for me. Many thanks for your help, Mei Lin';
            ta.dispatchEvent(new Event('input'));
            document.querySelectorAll('.rubric input[type=checkbox]').forEach(c=>c.checked=true);
          }
        });
        const pf = await pg.evaluate(()=>{ const n=window.__pickFail||0; window.__pickFail=0; return n; });
        if (pf) failures.push(`${u.id}/${blk}/${meta.id}: solver could not find ${pf} option(s)`);
        await pg.click('.btn-check'); await pg.waitForTimeout(90);
        const v = await pg.textContent('.verdict');
        const cls = await pg.getAttribute('.verdict','class');
        scenes++;
        if (cls.includes('ok')) okCount++;
        else failures.push(`${u.id}/${blk}/${meta.id} (${meta.kind}) -> "${v}"`);
        if (i<n-1){ await pg.click('.step-btn.next'); await pg.waitForTimeout(170); }
      }
      const over = await pg.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
      if (over) failures.push(`${u.id}/${blk}: horizontal overflow`);
      await pg.close();
    }
    console.log(`  ${u.id}  ${blocks.length} blocks walked`);
  }
  await browser.close();
  console.log(`\n${okCount}/${scenes} scenes solved through their own click path`);
  if (failures.length){ console.log('\nUNSOLVED'); failures.forEach(f=>console.log('  ✗ '+f)); }
  if (errors.length){ console.log('\nJS ERRORS'); [...new Set(errors)].forEach(e=>console.log('  ✗ '+e)); }
  if (failures.length || errors.length) process.exit(1);
})();
