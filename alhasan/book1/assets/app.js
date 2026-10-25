(() => {
  const D = window.UNIT5_DATA;
  const root = document.getElementById('app');
  const slug = document.body.dataset.slug;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const section = D.sections.find(x => x[0] === slug);
  const idx = D.sections.findIndex(x => x[0] === slug);
  const key = 'alhassan-unit5-progress';
  let state = {};
  try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch {}
  const persist = () => { try { localStorage.setItem(key, JSON.stringify(state)); } catch {} };
  const markDone = id => { state[id] = true; persist(); };
  const nav = () => '<nav class="nav"><a href="index.html">Unit 5 home</a>' + D.sections.map((s,i) => `<a class="${s[0]===slug?'active':''}" href="${s[0]}.html">${i===0?'Warm Up':'Part '+String(i).padStart(2,'0')}</a>`).join('') + '</nav>';
  const shuffle = items => {
    const a=[...items];
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    if(a.length>1&&a.every((x,i)=>x.id===i))a.push(a.shift());
    return a;
  };
  function renderOrderBody(e,i){
    if(e.type==='conversation'){
      const lines=shuffle(e.lines.map((line,id)=>({id,...line})));
      return `<div data-order-body><p class="small">Drag the labeled turns into conversation order. Keyboard: focus a turn and press Alt + ↑/↓ to move it.</p><ol class="sortable-list conversation-list" data-sort-list data-sequence-list>${lines.map(x=>`<li class="sortable-item conversation-line" draggable="true" tabindex="0" data-order-item data-id="${x.id}" data-drag-id="${slug}-${i}-line-${x.id}"><span class="drag-grip" aria-hidden="true">⠿</span><strong>${esc(x.speaker)}:</strong><span>${esc(x.text)}</span><span class="sr-only">Use Alt plus arrow keys to move this line.</span></li>`).join('')}</ol></div>`;
    }
    if(!Array.isArray(e.items[0])){
      const rows=shuffle(e.items.map((text,id)=>({text,id})));
      return `<div data-order-body><p class="small">Drag the steps into order. Keyboard: focus a step and press Alt + ↑/↓ to move it.</p><ol class="sortable-list" data-sort-list data-sequence-list>${rows.map(x=>`<li class="sortable-item" draggable="true" tabindex="0" data-order-item data-id="${x.id}" data-drag-id="${slug}-${i}-step-${x.id}"><span class="drag-grip" aria-hidden="true">⠿</span><span>${esc(x.text)}</span><span class="sr-only">Use Alt plus arrow keys to move this item.</span></li>`).join('')}</ol></div>`;
    }
      return `<div data-order-body><p class="small">Drag the words into each answer line. Keyboard: Alt + → moves a word into its answer; Alt + ← returns it to the bank; Alt + ↑/↓ reorders it.</p>${e.items.map((parts,j)=>{const words=shuffle(parts.join(' ').split(/\s+/).map((text,id)=>({text,id})));return `<section class="word-order-group" data-word-group="${j}"><h3>Instruction ${j+1}</h3><ul class="word-bank" data-sort-list data-word-bank>${words.map(x=>`<li class="word-chip" draggable="true" tabindex="0" data-word-token data-id="${x.id}" data-drag-id="${slug}-${i}-word-${j}-${x.id}">${esc(x.text)}</li>`).join('')}</ul><ol class="word-target" data-sort-list data-word-target aria-label="Instruction ${j+1} answer"></ol></section>`;}).join('')}</div>`;
  }
  function choiceResult(e,index){
    if(index<0)return {ok:false,msg:'Choose an answer first.'};
    const ok=e.options[index]===e.answer;
    const msg=e.feedback?.[index]||(ok?'Correct. '+e.explain:'Not quite. The best answer is “'+e.answer+'”. '+e.explain);
    return {ok,msg};
  }
  function showChoiceResult(ex,e,index){
    const result=choiceResult(e,index),fb=ex.querySelector('.feedback');
    fb.hidden=false;fb.className='feedback '+(result.ok?'good':'bad');fb.textContent=result.msg;
    if(result.ok)markDone(slug+'-'+ex.dataset.ex);
  }

  function story(text, scene) {
    if (!text) return '';
    return `<section class="story"><div class="eyebrow">Story Stage · ${esc(scene)}</div>
      <div class="stage" id="stage">
       <div class="person" data-name="Fadi"><svg class="character" viewBox="0 0 140 250" role="img" aria-label="Fadi, a male administrative assistant"><ellipse cx="70" cy="239" rx="40" ry="7" fill="#6f766f" opacity=".35"/><path d="M49 155 34 215 51 215 67 168M90 155 105 215 88 215 73 168" fill="#243b4d" stroke="#1d2d38" stroke-width="4"/><path d="M29 214h25v11H25q-5-4 4-11m52 0h25q9 6 3 11H83z" fill="#282c30"/><path d="M42 92q-18 9-22 49l-9 36 25 7 18-41m42-51q18 9 22 49l9 36-25 7-18-41" fill="#397c88" stroke="#183f4b" stroke-width="5"/><path d="M48 87h44l15 78H34z" fill="#4c9aa3" stroke="#183f4b" stroke-width="4"/><path d="m62 91 8 11 8-11 8 62-16 16-16-16z" fill="#f1f2ee"/><path d="m66 105 4 3 4-3-4 39z" fill="#c65b48"/><path d="M59 72h22v22q-10 15-22 0z" fill="#b57958"/><path d="M44 38q0-29 27-29 30 0 29 32l-4 29q-5 27-26 31-21-5-26-31z" fill="#bd8664" stroke="#593c34" stroke-width="4"/><path d="M43 50Q34 11 67 7q32-3 37 27l-5 15-7-18q-19 8-42 2z" fill="#26272a" stroke="#17191b" stroke-width="4"/><path d="M52 52q7-6 14 0m10 0q7-6 14 0" fill="none" stroke="#45302b" stroke-width="4"/><ellipse cx="60" cy="58" rx="3" ry="4" fill="#222"/><ellipse cx="83" cy="58" rx="3" ry="4" fill="#222"/><path d="m71 58-5 16 8 2m-13 9q10 8 21-1" fill="none" stroke="#744739" stroke-width="3" stroke-linecap="round"/><path class="mouth" d="M64 84q7 5 14 0" fill="none" stroke="#612e2d" stroke-width="3"/><path d="M46 64q0 28 13 37m30 0q12-12 13-38" fill="none" stroke="#4c322d" stroke-width="4"/><text x="70" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#163849">Fadi</text></svg></div>
       <div class="person" data-name="Ms. Chen"><svg class="character" viewBox="0 0 140 250" role="img" aria-label="Ms. Chen, a female business customer"><ellipse cx="70" cy="239" rx="40" ry="7" fill="#6f766f" opacity=".35"/><path d="M49 154 34 215h19l16-47m20-14 17 61H87l-16-47" fill="#303541" stroke="#222833" stroke-width="4"/><path d="M29 214h25v11H25q-5-4 4-11m58 0h25q9 6 3 11H83z" fill="#27272d"/><path d="M43 92q-19 11-22 48l-9 37 25 7 18-41m42-51q18 11 21 48l9 37-25 7-18-41" fill="#345b70" stroke="#203d50" stroke-width="5"/><path d="M49 88h43l15 81H34z" fill="#d6e3e5" stroke="#315466" stroke-width="4"/><path d="m58 91 12 12 12-12 10 78H48z" fill="#f8f1e7"/><path d="M59 72h22v22q-10 15-22 0z" fill="#d6a57d"/><path d="M40 37Q40 8 70 8q31 0 31 35v51l-12 13-2-20H51l-3 20-11-15z" fill="#171a20" stroke="#0e1117" stroke-width="4"/><ellipse cx="70" cy="54" rx="26" ry="34" fill="#e0b28b" stroke="#74553f" stroke-width="3"/><path d="M43 48Q42 12 70 10q31 1 31 35l-10-9q-18 5-34-4z" fill="#171a20"/><path d="M50 52q7-7 14 0m12 0q7-7 14 0" fill="none" stroke="#50352e" stroke-width="3"/><ellipse cx="58" cy="57" rx="3" ry="4" fill="#25242a"/><ellipse cx="83" cy="57" rx="3" ry="4" fill="#25242a"/><path d="m70 58-4 15 7 2m-11 9q8 7 17 0" fill="none" stroke="#9b624d" stroke-width="2.7" stroke-linecap="round"/><path class="mouth" d="M64 84q6 4 12 0" fill="none" stroke="#8b3d48" stroke-width="3"/><path d="M45 65q0 29 9 37m33 0q10-13 11-39" fill="none" stroke="#11151a" stroke-width="5"/><path d="M47 116 70 133l23-17" fill="none" stroke="#315466" stroke-width="3"/><text x="70" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#163849">Ms. Chen</text></svg></div>
       <div class="person" data-name="Karim"><svg class="character" viewBox="0 0 140 250" role="img" aria-label="Karim, a male financial controller"><ellipse cx="70" cy="239" rx="40" ry="7" fill="#6f766f" opacity=".35"/><path d="M49 155 34 215h19l16-47m20-13 17 60H87l-16-47" fill="#313c4a" stroke="#202c37" stroke-width="4"/><path d="M29 214h25v11H25q-5-4 4-11m58 0h25q9 6 3 11H83z" fill="#252c35"/><path d="M42 91q-18 11-21 50l-9 37 25 6 18-40m42-53q18 11 21 50l9 37-25 6-18-40" fill="#85594d" stroke="#553a35" stroke-width="5"/><path d="M48 87h44l15 81H34z" fill="#a87560" stroke="#553a35" stroke-width="4"/><path d="m58 91 12 11 12-11 9 77H49z" fill="#e9e3d5"/><path d="m67 102 3 4 4-4 7 47-11 14-11-14z" fill="#375d77"/><path d="M59 72h22v21q-10 15-22 0z" fill="#a96f55"/><path d="M43 40q0-30 28-30 30 0 30 31l-5 27q-8 31-25 34-21-4-26-34z" fill="#b98261" stroke="#573c34" stroke-width="4"/><path d="M42 48Q37 14 66 9q30-4 37 25l-7 13-8-20q-20 7-39 1z" fill="#211d1b" stroke="#171413" stroke-width="4"/><path d="M51 52q7-5 14 0m11 0q7-5 14 0" fill="none" stroke="#352622" stroke-width="4"/><ellipse cx="59" cy="58" rx="3" ry="4" fill="#201c1b"/><ellipse cx="83" cy="58" rx="3" ry="4" fill="#201c1b"/><path d="M49 54h19v12H49zm30 0h19v12H79zm-11 5h11" fill="none" stroke="#3b4146" stroke-width="2.5"/><path d="m71 60-4 14 7 2m-12 9q9 7 19-1" fill="none" stroke="#724535" stroke-width="3" stroke-linecap="round"/><path d="M58 82q12 10 25 0l-2 12q-11 12-21 0z" fill="#503a32"/><path class="mouth" d="M64 86q6 4 12 0" fill="none" stroke="#8e4840" stroke-width="3"/><text x="70" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#163849">Karim</text></svg></div>
      </div>
      <div class="controls"><button data-play>▶ Play</button><button data-pause class="secondary">Ⅱ Pause / Resume</button><button data-stop class="secondary">■ Stop</button><button data-replay class="secondary">↶ Replay</button><label class="small">Speed <select data-rate><option value="0.75">0.75×</option><option value="0.9">0.9×</option><option value="1" selected>1×</option><option value="1.1">1.1×</option><option value="1.25">1.25×</option></select></label><label class="small">Audio <select data-audio-set></select></label></div><audio data-audio preload="metadata"></audio><div class="speaker" data-speaker>Ready to listen</div><p class="audio-current" data-current-text aria-live="polite"></p><div class="transcript" data-transcript>${esc(text)}</div><p class="small">Pre-recorded Piper voices play from this folder. Reading narration uses Ms. Chen’s female voice; conversations use the named speakers. Audio and playback speed work offline.</p></section>`;
  }
  function renderExercise(e, i) {
    let body = '';
    if (e.type === 'choice') body = `<div class="options" role="group" aria-label="Answer choices">${e.options.map((v,j)=>`<button type="button" aria-pressed="false" data-opt="${j}">${esc(v)}</button>`).join('')}</div>`;
    if (e.type === 'match') body = '<div class="pairgrid">' + e.pairs.map((p,j)=>`<div class="pair">${esc(p[0])}<select data-match="${j}"><option value="">Choose a match…</option>${e.pairs.map((q,k)=>`<option value="${k}">${esc(q[1])}</option>`).join('')}</select></div>`).join('') + '</div><p class="small">Choose a match for each item. The same control works with mouse, touch, and keyboard.</p>';
    if (e.type === 'blanks') body = e.items.map((x,j)=>`<div class="blankrow">${esc(x[0]).replace('____',`<input aria-label="Answer ${j+1}" data-blank="${j}">`)}</div>`).join('');
    if (e.type === 'order' || e.type === 'conversation') body = renderOrderBody(e,i);
    if (e.type === 'writing') body = `<textarea class="long" data-writing placeholder="Write your answer here…"></textarea><div class="controls"><button type="button" class="secondary" data-save>Save draft</button><button type="button" class="secondary" data-copy>Copy</button><button type="button" class="secondary" data-download>Download</button>${slug==='part-06-writing'?'<button type="button" class="secondary" data-email>Open email app</button>':''}</div><p class="small">Draft stays in this browser on this device. Open email app prepares a message; it does not send it.</p>`;
    if (e.type === 'checklist') body = e.items.map((x,j)=>`<label class="blankrow"><input type="checkbox" data-check="${j}"> ${esc(x)}</label>`).join('');
    const draft = state['draft-'+slug+'-'+i];
    return `<section class="exercise" data-ex="${i}"><h2>${esc(e.prompt)}</h2>${body}<div class="controls"><button type="button" data-check-answer>Check</button><button type="button" class="secondary" data-reset>Reset</button></div><div class="feedback" aria-live="polite" hidden></div></section>`;
  }

  if (!section) {
    if (slug === 'unit-home') {
      const done = Object.keys(state).filter(k => !k.startsWith('draft-')).length;
      const total=D.sections.reduce((n,s)=>n+(D.pages[s[0]]?.exercises.length||0),0);
      root.innerHTML = `<header class="hero"><div class="eyebrow">Al-Hasan International · Admin</div><h1>Unit 5: Orders, Confirmations & Documents</h1><p>Receive and confirm an order, check and correct details, give instructions, and write a clear confirmation email.</p><p><strong>Can-Do:</strong> receive and confirm an order · check and correct details · give simple instructions · write an order-confirmation email.</p><div class="progress"><span style="width:${Math.min(100,Math.round(done/Math.max(1,total)*100))}%"></span></div><p>${done} activities saved on this device</p></header><div class="grid">${D.sections.map((s,i)=>`<article class="card"><div class="eyebrow">${i===0?'Warm Up':'Part '+String(i).padStart(2,'0')}</div><h2>${esc(s[1])}</h2><p>${esc(s[2])}</p><a class="button" href="${s[0]}.html">Open section</a></article>`).join('')}</div>`;
    }
    return;
  }

  const p = D.pages[slug];
  root.innerHTML = `<header class="hero"><div class="eyebrow">Unit 5 · ${esc(section[1])}</div><h1>${esc(p.title)}</h1><p>${esc(p.intro)}</p></header>${nav()}${story(p.reading,p.scene)}${p.exercises.map(renderExercise).join('')}<div class="controls"><a class="button secondary" href="${idx>0?D.sections[idx-1][0]+'.html':'index.html'}">← Previous</a><a class="button" href="${idx<D.sections.length-1?D.sections[idx+1][0]+'.html':'index.html'}">Next →</a></div>${nav()}`;
  root.querySelectorAll('[data-writing]').forEach(el => { const i=Number(el.closest('[data-ex]').dataset.ex); el.value = state['draft-'+slug+'-'+i] || ''; });
  root.querySelectorAll('[data-writing]').forEach(el => el.addEventListener('input', () => { const i=Number(el.closest('[data-ex]').dataset.ex); state['draft-'+slug+'-'+i]=el.value; persist(); }));

  let dragged=null;
  root.addEventListener('dragstart',ev=>{
    const item=ev.target.closest('[data-order-item],[data-word-token]');if(!item)return;
    dragged=item;item.classList.add('dragging');ev.dataTransfer.effectAllowed='move';ev.dataTransfer.setData('text/plain',item.dataset.dragId||'item');
  });
  root.addEventListener('dragend',()=>{if(dragged)dragged.classList.remove('dragging');dragged=null;});
  root.addEventListener('dragover',ev=>{if(ev.target.closest('[data-sort-list]')){ev.preventDefault();ev.dataTransfer.dropEffect='move';}});
  root.addEventListener('drop',ev=>{
    const list=ev.target.closest('[data-sort-list]');if(!list||!dragged)return;ev.preventDefault();
    const sourceGroup=dragged.closest('[data-word-group]'),targetGroup=list.closest('[data-word-group]');
    if(sourceGroup!==targetGroup)return;
    const over=ev.target.closest('[data-order-item],[data-word-token]');
    if(over&&over!==dragged&&over.parentElement===list){const r=over.getBoundingClientRect();list.insertBefore(dragged,ev.clientY>r.top+r.height/2?over.nextSibling:over);}
    else list.appendChild(dragged);
    dragged.focus();
  });
  root.addEventListener('keydown',ev=>{
    if(!ev.altKey)return;
    const item=ev.target.closest('[data-order-item],[data-word-token]');if(!item)return;
    const list=item.parentElement.closest('[data-sort-list]');if(!list)return;
    const group=item.closest('[data-word-group]');
    if(item.hasAttribute('data-word-token')&&ev.key==='ArrowRight'&&list.hasAttribute('data-word-bank')){ev.preventDefault();group.querySelector('[data-word-target]').appendChild(item);item.focus();return;}
    if(item.hasAttribute('data-word-token')&&ev.key==='ArrowLeft'&&list.hasAttribute('data-word-target')){ev.preventDefault();group.querySelector('[data-word-bank]').appendChild(item);item.focus();return;}
    if(ev.key==='ArrowUp'&&item.previousElementSibling){ev.preventDefault();list.insertBefore(item,item.previousElementSibling);item.focus();}
    if(ev.key==='ArrowDown'&&item.nextElementSibling){ev.preventDefault();list.insertBefore(item.nextElementSibling,item);item.focus();}
  });

  root.addEventListener('click', ev => {
    const ex = ev.target.closest('[data-ex]');
    if (!ex) return;
    const i = Number(ex.dataset.ex), e = p.exercises[i], fb = ex.querySelector('.feedback');
    if (ev.target.matches('[data-opt]')) { ex.querySelectorAll('[data-opt]').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false');}); ev.target.classList.add('selected');ev.target.setAttribute('aria-pressed','true');showChoiceResult(ex,e,Number(ev.target.dataset.opt));return; }
    if (ev.target.matches('[data-save]')) { state['draft-'+slug+'-'+i] = ex.querySelector('[data-writing]').value; persist(); fb.hidden=false; fb.textContent='Draft saved on this device.'; }
    if (ev.target.matches('[data-copy]')) { const t=ex.querySelector('[data-writing]').value; if(navigator.clipboard?.writeText) navigator.clipboard.writeText(t).then(()=>{fb.hidden=false;fb.textContent='Copied.'}).catch(()=>{fb.hidden=false;fb.textContent='Copy is unavailable here. Select the text and copy it manually.'}); else {fb.hidden=false;fb.textContent='Copy is unavailable here. Select the text and copy it manually.';} }
    if (ev.target.matches('[data-download]')) { const a=document.createElement('a'), b=new Blob([ex.querySelector('[data-writing]').value],{type:'text/plain'}); a.href=URL.createObjectURL(b);a.download='unit5-'+slug+'-answer.txt';a.click();URL.revokeObjectURL(a.href); }
    if (ev.target.matches('[data-email]')) { const text=ex.querySelector('[data-writing]').value; state['draft-'+slug+'-'+i]=text;persist();const subject='Unit 5 order-confirmation email practice'; const body='Student answer:\n\n'+text; location.href='mailto:mhdkh100@yahoo.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body); fb.hidden=false;fb.textContent='You can’t send now if no email app is configured. Your answer is saved on this device—copy it, download it, print it, or send it later.'; }
    if (ev.target.matches('[data-reset]')) { if(e.type==='order'||e.type==='conversation'){ex.querySelector('[data-order-body]').outerHTML=renderOrderBody(e,i);} ex.querySelectorAll('input,textarea').forEach(x=>{if(x.type==='checkbox')x.checked=false;else x.value=''});ex.querySelectorAll('select').forEach(x=>x.selectedIndex=0);ex.querySelectorAll('[data-opt]').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false');});fb.hidden=true;return; }
    if (!ev.target.matches('[data-check-answer]')) return;
    let ok=false,msg='';
    if(e.type==='choice'){const a=ex.querySelector('[data-opt].selected');const result=choiceResult(e,a?Number(a.dataset.opt):-1);ok=result.ok;msg=result.msg;}
    if(e.type==='match'){const fields=[...ex.querySelectorAll('[data-match]')];ok=fields.every((x,j)=>x.value!==''&&Number(x.value)===j);msg=ok?'All matches are correct.':e.pairs.map(x=>x[0]+' → '+x[1]).join(' · ');}
    if(e.type==='blanks'){const fields=[...ex.querySelectorAll('[data-blank]')];ok=fields.every(x=>x.value.trim().toLowerCase().replace(/[.!?]/g,'')===e.items[Number(x.dataset.blank)][1].toLowerCase().replace(/[.!?]/g,''));msg=ok?'Correct.':e.items.map(x=>x[0].replace('____',x[1])).join(' | ');}
    if(e.type==='conversation'){const vals=[...ex.querySelectorAll('[data-conversation-list] [data-order-item]')].map(x=>Number(x.dataset.id));ok=vals.length===e.lines.length&&vals.every((v,j)=>v===j);msg=ok?'Conversation order is correct. '+e.explain:'Try the exchange in this order: '+e.lines.map(x=>x.speaker+': '+x.text).join(' → ');}
    if(e.type==='order'&&!Array.isArray(e.items[0])){const vals=[...ex.querySelectorAll('[data-sequence-list] [data-order-item]')].map(x=>Number(x.dataset.id));ok=vals.length===e.items.length&&vals.every((v,j)=>v===j);msg=ok?'The steps are in the right order.':'Correct order: '+e.items.join(' → ');}
    if(e.type==='order'&&Array.isArray(e.items[0])){const groups=[...ex.querySelectorAll('[data-word-group]')];ok=groups.length===e.items.length&&groups.every((group,j)=>{const bank=group.querySelector('[data-word-bank]'),target=group.querySelector('[data-word-target]'),expected=e.items[j].join(' ').split(/\s+/);const tokens=[...target.querySelectorAll('[data-word-token]')];return bank.querySelectorAll('[data-word-token]').length===0&&tokens.length===expected.length&&tokens.every((x,k)=>Number(x.dataset.id)===k);});msg=ok?'All instructions are correctly built.':'Model instructions: '+e.items.map(x=>x.join(' ')).join(' · ');}
    if(e.type==='checklist'){ok=[...ex.querySelectorAll('[data-check]')].every(x=>x.checked);msg=ok?'Checklist complete.':'Tick each item when it is complete.';}
    if(e.type==='writing'){const t=ex.querySelector('[data-writing]').value.trim();state['draft-'+slug+'-'+i]=t;persist();ok=t.length>0;msg=ok?'Saved on this device. Review open responses using the prompt/checklist; they are not automatically graded.':e.tip;}
    fb.hidden=false;fb.className='feedback '+(ok?'good':'bad');fb.textContent=msg;if(ok)markDone(slug+'-'+i);
  });

  if (p.reading) {
    const stage=root.querySelector('#stage'), speaker=root.querySelector('[data-speaker]'), rate=root.querySelector('[data-rate]');
    const audio=root.querySelector('[data-audio]'), setMenu=root.querySelector('[data-audio-set]'), currentText=root.querySelector('[data-current-text]');
    const groups=(window.UNIT5_AUDIO&&window.UNIT5_AUDIO[slug])||[];
    const stopMouths=()=>stage.querySelectorAll('.person').forEach(x=>x.classList.remove('talk'));
    let groupIndex=0,lineIndex=0,playing=false;
    setMenu.innerHTML=groups.map((g,i)=>`<option value="${i}">${esc(g.title)}</option>`).join('');
    const activeGroup=()=>groups[groupIndex];
    function finish(){playing=false;stopMouths();speaker.textContent='Finished';}
    function playLine(){
      const group=activeGroup(); if(!group||!group.clips.length){speaker.textContent='No audio clips are bundled for this page.';return;}
      if(lineIndex>=group.clips.length){finish();return;}
      const clip=group.clips[lineIndex]; audio.src=clip.src; audio.playbackRate=Number(rate.value)||1;
      speaker.textContent=clip.speaker+' is speaking'; currentText.textContent=clip.text;
      stopMouths(); const person=[...stage.querySelectorAll('.person')].find(x=>x.dataset.name===clip.speaker);
      if(person)person.classList.add('talk'); playing=true;
      const request=audio.play(); if(request&&request.catch)request.catch(()=>{playing=false;stopMouths();speaker.textContent='Could not play this local audio file. Check that the audio folder is beside the page.';});
    }
    audio.addEventListener('ended',()=>{lineIndex++;playLine();});
    audio.addEventListener('pause',()=>{if(!audio.ended){playing=false;stopMouths();}});
    audio.addEventListener('play',()=>{playing=true;const c=activeGroup()?.clips[lineIndex];if(c){const person=[...stage.querySelectorAll('.person')].find(x=>x.dataset.name===c.speaker);if(person)person.classList.add('talk');}});
    setMenu.addEventListener('change',()=>{audio.pause();audio.currentTime=0;groupIndex=Number(setMenu.value)||0;lineIndex=0;currentText.textContent='';speaker.textContent='Ready to listen';stopMouths();});
    rate.addEventListener('change',()=>{audio.playbackRate=Number(rate.value)||1;});
    const start=()=>{if(!groups.length){speaker.textContent='Audio has not been bundled for this page.';return;}if(lineIndex>=activeGroup().clips.length)lineIndex=0;playLine();};
    root.querySelector('[data-play]').onclick=start; root.querySelector('[data-replay]').onclick=()=>{audio.pause();audio.currentTime=0;lineIndex=0;start();};
    root.querySelector('[data-pause]').onclick=()=>{if(audio.paused){if(audio.src){audio.play().catch(()=>{});}else start();}else audio.pause();};
    root.querySelector('[data-stop]').onclick=()=>{audio.pause();audio.currentTime=0;lineIndex=0;playing=false;stopMouths();speaker.textContent='Stopped';};
  }
})();
