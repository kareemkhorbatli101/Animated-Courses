
(function(w,d){
'use strict';
var IE = w.IELTS = w.IELTS || {};
var KEY = 'ielts.v3.progress.v1';

/* ---------------------------------------------------- marking --------- */
function fold(s){
  return (s||'').toString().normalize('NFKD')
    .replace(/[̀-ͯ]/g,'')
    .replace(/[‘’]/g,"'").replace(/[“”]/g,'"')
    .replace(/[–—]/g,'-')
    .toLowerCase().trim()
    .replace(/^[\s"'(\[]+|[\s"')\].,;:!?]+$/g,'')
    .replace(/\s+/g,' ');
}
var NUM={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,
 eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,
 eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,
 eighty:80,ninety:90,hundred:100,thousand:1000};
function numeric(s){
  var f=fold(s).replace(/,/g,'');
  if(/^\d+(\.\d+)?$/.test(f.replace(/\s/g,''))) return parseFloat(f.replace(/\s/g,''));
  var t=f.split(/[\s-]+/),tot=0,cur=0,any=false;
  for(var i=0;i<t.length;i++){var x=t[i]; if(x==='and')continue;
    if(!(x in NUM)) return null; any=true; var v=NUM[x];
    if(v===100) cur=(cur||1)*100; else if(v===1000){tot+=(cur||1)*1000;cur=0;} else cur+=v;}
  return any?tot+cur:null;
}
/* IELTS marking. A misspelling is NOT forgiven - it is wrong in the real exam,
   and a course that awards it teaches a candidate to lose the mark on the day.
   It is reported as 'near' so the page can say so without giving the mark. */
IE.judge = function(given,key,limit){
  var g=fold(given), k=fold(key);
  if(!g) return {ok:false,why:'nothing written',near:false};
  if(/^[a-h]$/.test(k)){
    g=g.replace(/^\(|\)$/g,'');
    return {ok:g===k, near:false,
            why: g===k?'':'not the right letter — try again, or open Show me'};
  }
  if(limit && g.split(' ').length>limit)
    return {ok:false,near:false,
      why:'over the limit of '+limit+' word'+(limit===1?'':'s')+
          ' — the real exam marks this wrong even when the content is right'};
  if(g===k) return {ok:true,why:'',near:false};
  var a=numeric(g), b=numeric(k);
  if(a!==null&&b!==null&&a===b) return {ok:true,why:'',near:false};
  var near = lev(g,k) <= Math.max(1, Math.floor(k.length/6));
  return {ok:false,near:near,
          why: near?'very close — check the spelling':'not right — try again, or open Show me'};
};
function lev(a,b){ if(a===b)return 0;
  var p=[],i,j; for(j=0;j<=b.length;j++)p[j]=j;
  for(i=1;i<=a.length;i++){var c=[i];
    for(j=1;j<=b.length;j++) c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]!==b[j-1]?1:0));
    p=c;}
  return p[b.length];
}

/* ---------------------------------------------------- progress -------- */
function load(){ try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};} }
function save(o){ try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){} }
IE.progress = load();
IE.record = function(id,patch){
  var r = IE.progress[id] = IE.progress[id] || {attempts:0,helped:false,erred:false};
  for(var k in patch) r[k]=patch[k];
  save(IE.progress);
};

/* ---------------------------------------------------- an exercise ----- */
IE.mountExercise = function(root, data){
  var state={}, lit=null;
  var passage = root.querySelector('.passage');
  root.querySelectorAll('[data-q]').forEach(function(el){
    var h=function(){ state[el.dataset.q]= (el.type==='radio'?el.value:el.value); };
    el.addEventListener('input',h); el.addEventListener('change',h);
  });
  function paintMarks(show){
    var right=0, answered=0;
    data.questions.forEach(function(q){
      var box=root.querySelector('#q-'+data.id+'-'+q.n);
      if(!box) return;
      var given=state['q-'+data.id+'-'+q.n]||'';
      box.classList.remove('ok','no');
      var m=box.querySelector('.mark'), why=box.querySelector('.why');
      if(!given){ m.textContent=''; why.textContent=''; return; }
      answered++;
      var v=IE.judge(given,q.answer,q.limit);
      box.classList.add(v.ok?'ok':'no');
      m.textContent = v.ok?'Correct':'Not right';
      why.textContent = v.ok?'':v.why;
      if(v.ok) right++;
    });
    return {right:right,answered:answered};
  }
  var check = root.querySelector('[data-act=check]');
  if(check) check.onclick=function(){
    var r=paintMarks(true);
    var vd=root.querySelector('.verdict');
    vd.textContent = r.answered===0 ? 'Nothing answered yet — nothing recorded.'
      : r.right+' of '+r.answered+' answered correctly'+
        (r.answered<data.questions.length?' ('+(data.questions.length-r.answered)+' still blank)':'');
    IE.record(data.id,{attempts:(IE.progress[data.id]||{}).attempts+1||1,
                       erred: r.right<r.answered || (IE.progress[data.id]||{}).erred,
                       score:r.right, max:data.questions.length});
  };
  var show = root.querySelector('[data-act=show]');
  if(show) show.onclick=function(){
    IE.record(data.id,{helped:true});
    IE.openAnswers(data, state);
  };
  /* clicking a question lights the sentence it came from, where we know it */
  root.querySelectorAll('.q').forEach(function(box){
    box.addEventListener('click',function(){
      if(!passage) return;
      var i=box.getAttribute('data-anchor');
      passage.querySelectorAll('p').forEach(function(p){p.classList.remove('lit');});
      if(i!==null && i!=='' ){ var p=passage.querySelector('p[data-i="'+i+'"]');
        if(p){p.classList.add('lit'); p.scrollIntoView({block:'nearest',behavior:'smooth'});} }
    });
  });
  IE.readingMeter(root, data);
};

/* the reading meter: speed measured, re-reads counted */
IE.readingMeter = function(root, data){
  var started=Date.now(), seen={}, last=null, rereads=0;
  var ps = root.querySelectorAll('.passage p[data-i]');
  ps.forEach(function(p){
    p.addEventListener('mouseenter',function(){
      var i=p.dataset.i;
      if(last!==null && last!==i && seen[i]) rereads++;
      seen[i]=true; last=i; paint();
    });
  });
  function paint(){
    var el=root.querySelector('[data-meter=reread]'); if(el) el.textContent=rereads;
    var t=root.querySelector('[data-meter=time]');
    var secs=(Date.now()-started)/1000;
    if(t) t.textContent=Math.round(secs)+'s';
    var wpm=root.querySelector('[data-meter=wpm]');
    if(wpm&&data.words) wpm.textContent = secs>8 ? Math.round(data.words/(secs/60))+' wpm' : '—';
  }
  setInterval(paint,1000); paint();
};

/* ------------------------------------------------- the answers panel -- */
IE.openAnswers = function(data, state){
  var p = IE.panel('The answers, beside yours');
  var b = p.querySelector('.learnbody'); b.innerHTML='';
  data.questions.forEach(function(q){
    var given=state['q-'+data.id+'-'+q.n]||'';
    var v=given?IE.judge(given,q.answer,q.limit):{ok:false};
    var wrongs='';
    if(q.wrongs && Object.keys(q.wrongs).length){
      wrongs='<ul class="wrongs">'+Object.keys(q.wrongs).sort().map(function(L){
        var mine=(given||'').toUpperCase().replace(/[()]/g,'')===L;
        return '<li'+(mine?' style="font-weight:600"':'')+'>('+L+') '+esc(q.wrongs[L])+
               (mine?' ← you chose this':'')+'</li>';}).join('')+'</ul>';
    }
    var el=d.createElement('div'); el.className='answer';
    el.innerHTML='<b>Question '+q.n+'</b><br>You wrote: <span style="color:var(--'+
      (v.ok?'ok':'no')+')">'+(given?esc(given):'<em>nothing</em>')+'</span><br>'+
      'The answer: <b style="color:var(--ok)">'+esc(q.answer)+'</b>'+
      '<div class="why">'+esc(q.why||'')+'</div>'+wrongs;
    b.appendChild(el);
  });
};

/* ------------------------------------------------- the LEARN panel ---- */
IE.openLearn = function(pack){
  var p = IE.panel(pack.title + '<span class="badge">teaching</span>');
  var body = p.querySelector('.learnbody');
  var tabs = d.createElement('div'); tabs.className='tabs';
  var names = [['walk','Walkthrough'],['practice','One more'],['ask','Ask']];
  if(!pack.practice) names.splice(1,1);
  tabs.innerHTML = names.map(function(n,i){
    return '<button class="tab" role="tab" data-tab="'+n[0]+'" aria-selected="'+(i===0)+'">'+n[1]+'</button>';
  }).join('');
  p.querySelector('header').insertAdjacentElement('afterend', tabs);
  function show(which){
    tabs.querySelectorAll('.tab').forEach(function(t){
      t.setAttribute('aria-selected', String(t.dataset.tab===which)); });
    body.innerHTML='';
    if(which==='walk') walk(body,pack);
    if(which==='practice') practice(body,pack);
    if(which==='ask') ask(body,pack);
  }
  tabs.addEventListener('click',function(e){
    var t=e.target.closest('.tab'); if(t) show(t.dataset.tab); });
  show('walk');
};

function walk(body, pack){
  var i=0, playing=false, timer=null, audio=null;
  var stage=d.createElement('div'); stage.className='stage';
  stage.innerHTML = IE.scene(pack.scene);
  var cap=d.createElement('div'); cap.className='cap'; cap.textContent=pack.scene.caption||'';
  var say=d.createElement('p'); say.className='say';
  var row=d.createElement('div'); row.className='playrow';
  row.innerHTML='<button class="btn primary" data-a="play">Play</button>'+
    '<button class="btn" data-a="prev">Back</button>'+
    '<button class="btn" data-a="next">Next</button>'+
    (pack.audio && pack.audio.reads_the_passage ?
      '<button class="btn" data-a="read">Read the passage aloud</button>' : '')+
    '<span class="dots"></span>';
  var dots=row.querySelector('.dots');
  pack.steps.forEach(function(_,n){
    var b=d.createElement('button'); b.className='dot'; b.setAttribute('aria-label','Step '+(n+1));
    b.onclick=function(){ stop(); goto(n); }; dots.appendChild(b);
  });
  body.appendChild(stage); body.appendChild(cap); body.appendChild(say); body.appendChild(row);
  var src=d.createElement('div'); src.className='src-list';
  src.innerHTML = 'Built from: '+esc((pack.sources.passage?pack.sources.passage+' · ':'')+
    (pack.sources.script?'recording '+pack.sources.script+' · ':'')+
    (pack.sources.questions||[]).length+' questions of the book') +
    '. This panel is an addition to the course, written from the book’s own material.';
  body.appendChild(src);

  function goto(n){
    i = Math.max(0, Math.min(pack.steps.length-1, n));
    var st = pack.steps[i];
    say.innerHTML = st.say;
    stage.querySelectorAll('.sv-part').forEach(function(el,k){
      el.classList.toggle('in', k<=lastIndexShown(i));
      el.classList.toggle('hot', el.dataset.part===st.show);
    });
    dots.querySelectorAll('.dot').forEach(function(b,k){ b.classList.toggle('on',k===i); });
    highlight(st.anchor);
  }
  function lastIndexShown(stepIdx){
    /* reveal every part named up to and including this step */
    var names={}; var count=-1;
    pack.scene.parts.forEach(function(p,k){ names[p.id]=k; });
    for(var s=0;s<=stepIdx;s++){ var id=pack.steps[s].show;
      if(id in names) count=Math.max(count,names[id]); }
    return count;
  }
  function highlight(anchor){
    var passage=d.querySelector('.passage'); if(!passage) return;
    passage.querySelectorAll('mark').forEach(function(m){
      m.replaceWith(d.createTextNode(m.textContent)); });
    passage.normalize();
    if(!anchor) return;
    var want=anchor.replace(/<[^>]+>/g,'').slice(0,60);
    passage.querySelectorAll('p').forEach(function(p){
      var ix=p.textContent.indexOf(want);
      if(ix<0) return;
      var t=p.textContent, m=d.createElement('mark'); m.textContent=t.slice(ix,ix+anchor.length);
      p.textContent=''; p.append(t.slice(0,ix), m, t.slice(ix+anchor.length));
      p.scrollIntoView({block:'nearest',behavior:'smooth'});
    });
  }
  function speak(){
    if(audio){audio.pause();audio=null;}
    var url = pack.audioBase ? pack.audioBase+'/step'+(i+1)+'.mp3' : null;
    if(url){ audio=new Audio(url);
      audio.onended=function(){ if(playing) advance(); };
      audio.onerror=function(){ if(playing) timer=setTimeout(advance,(pack.steps[i].seconds||8)*1000); };
      audio.play().catch(function(){
        if(playing) timer=setTimeout(advance,(pack.steps[i].seconds||8)*1000); });
    } else if(playing){
      timer=setTimeout(advance,(pack.steps[i].seconds||8)*1000);
    }
  }
  function advance(){ if(i<pack.steps.length-1){ goto(i+1); speak(); } else { stop(); } }
  function stop(){ playing=false; clearTimeout(timer);
    if(audio){audio.pause();audio=null;}
    row.querySelector('[data-a=play]').textContent='Play'; }
  /* THE PASSAGE, READ ALOUD, paragraph by paragraph, with the paragraph lit
     while it is being read. This is the "audio of the reading" the panel is
     for; the narration above is the course talking ABOUT the text. They use
     two different voices so a learner always knows which they are hearing. */
  var reading=false, rAudio=null, rIdx=0;
  function readPassage(){
    var passage=d.querySelector('.passage'); if(!passage) return stopRead();
    var ps=passage.querySelectorAll('p[data-i]');
    if(rIdx>=ps.length) return stopRead();
    ps.forEach(function(x){x.classList.remove('lit');});
    var p=ps[rIdx]; p.classList.add('lit');
    p.scrollIntoView({block:'nearest',behavior:'smooth'});
    if(rAudio){rAudio.pause();}
    rAudio=new Audio(pack.audioBase+'/read'+(rIdx+1)+'.mp3');
    rAudio.onended=function(){ rIdx++; if(reading) readPassage(); };
    rAudio.onerror=function(){ rIdx++; if(reading) setTimeout(readPassage,1200); };
    rAudio.play().catch(function(){ rIdx++; if(reading) setTimeout(readPassage,1200); });
  }
  function stopRead(){
    reading=false; rIdx=0;
    if(rAudio){rAudio.pause(); rAudio=null;}
    var b=row.querySelector('[data-a=read]'); if(b) b.textContent='Read the passage aloud';
    var passage=d.querySelector('.passage');
    if(passage) passage.querySelectorAll('p').forEach(function(x){x.classList.remove('lit');});
  }
  row.addEventListener('click',function(e){
    var a=e.target.closest('button'); if(!a||!a.dataset.a) return;
    if(a.dataset.a==='read'){
      if(reading){ stopRead(); }
      else { stop(); reading=true; rIdx=0; a.textContent='Stop reading'; readPassage(); }
      return;
    }
    if(a.dataset.a!=='read') stopRead();
    if(a.dataset.a==='play'){
      playing=!playing; a.textContent=playing?'Pause':'Play';
      if(playing) speak(); else stop();
    }
    if(a.dataset.a==='next'){ stop(); goto(i+1); }
    if(a.dataset.a==='prev'){ stop(); goto(i-1); }
  });
  goto(0);
}

function practice(body, pack){
  var pr=pack.practice, state={};
  var h=d.createElement('div'); h.className='keyhint';
  h.innerHTML='<b>'+esc(pr.task_type)+'</b> — '+esc(pr.instruction)+
   '<br><span style="opacity:.8">One more exercise on the same text, written for this panel.</span>';
  body.appendChild(h);
  pr.questions.forEach(function(q){
    var box=d.createElement('div'); box.className='q';
    var inner='<div class="stem"><span class="num">'+q.n+'.</span>'+esc(q.stem)+'</div>';
    if(q.options){ inner += q.options.map(function(o){
        return '<label class="opt"><input type="radio" name="pq'+q.n+'" value="'+o.letter+'">'+
               '<span><b>('+o.letter+')</b> '+esc(o.text)+'</span></label>'; }).join('');
    } else { inner += '<input type="text" aria-label="Answer '+q.n+'">'; }
    inner += '<div class="mark" role="status" aria-live="polite"></div><div class="why"></div>';
    box.innerHTML=inner;
    box.addEventListener('input',function(e){ state[q.n]=e.target.value; });
    box.addEventListener('change',function(e){ state[q.n]=e.target.value; });
    body.appendChild(box);
  });
  var f=d.createElement('div'); f.className='foot';
  f.innerHTML='<button class="btn primary" data-a="pcheck">Check</button>'+
              '<button class="btn" data-a="pshow">Show the answers</button>'+
              '<span class="verdict"></span>';
  body.appendChild(f);
  f.addEventListener('click',function(e){
    var a=e.target.closest('button'); if(!a) return;
    var boxes=body.querySelectorAll('.q'), right=0, answered=0;
    pr.questions.forEach(function(q,k){
      var box=boxes[k], given=state[q.n]||'';
      box.classList.remove('ok','no');
      var m=box.querySelector('.mark'), why=box.querySelector('.why');
      if(a.dataset.a==='pshow'){
        box.classList.add(fold(given)===fold(q.answer)?'ok':'no');
        m.textContent='Answer: '+q.answer;
        var extra = q.wrongs ? Object.keys(q.wrongs).sort().map(function(L){
          return '('+L+') '+q.wrongs[L]; }).join(' · ') : '';
        why.textContent = q.why + (extra?'  —  '+extra:'');
        return;
      }
      if(!given){ m.textContent=''; why.textContent=''; return; }
      answered++;
      var v=IE.judge(given,q.answer,null);
      box.classList.add(v.ok?'ok':'no');
      m.textContent=v.ok?'Correct':'Not right';
      why.textContent=v.ok?'':v.why;
      if(v.ok) right++;
    });
    if(a.dataset.a==='pcheck')
      f.querySelector('.verdict').textContent = answered? (right+' of '+answered+' correct') : '';
  });
}

function ask(body, pack){
  var a=pack.ask;
  var g=d.createElement('div'); g.className='keyhint';
  g.innerHTML='This pane answers from <b>'+esc(a.grounds.join(', '))+'</b> only. '+
    'If the answer is not there it will say so rather than invent one.';
  body.appendChild(g);
  var row=d.createElement('div'); row.className='askrow';
  row.innerHTML='<input type="text" placeholder="Ask about this text or the technique…" aria-label="Your question">'+
                '<button class="btn primary">Ask</button>';
  body.appendChild(row);
  var st=d.createElement('div');
  st.innerHTML = a.starters.map(function(s){
    return '<button class="starter">'+esc(s)+'</button>'; }).join('');
  body.appendChild(st);
  var out=d.createElement('div'); body.appendChild(out);

  function answer(q){
    if(!q) return;
    var el=d.createElement('div'); el.className='answer';
    el.innerHTML='<b>'+esc(q)+'</b><div style="margin-top:6px">'+
      esc(IE.askLocal(pack,q))+'</div>'+
      '<span class="src">Grounded in: '+esc(a.grounds.join(' · '))+'</span>';
    out.prepend(el);
  }
  row.querySelector('button').onclick=function(){
    var i=row.querySelector('input'); answer(i.value.trim()); i.value=''; };
  row.querySelector('input').addEventListener('keydown',function(e){
    if(e.key==='Enter'){ answer(e.target.value.trim()); e.target.value=''; }});
  st.addEventListener('click',function(e){
    var b=e.target.closest('.starter'); if(b) answer(b.textContent); });
}

/* The local, model-free answer. With a key configured this is where the
   bring-your-own-key call goes; without one the pane still answers from the
   pack's own material and refuses the rest, which is the behaviour the
   design requires anyway. */
IE.askLocal = function(pack, q){
  var fq = fold(q);
  var hits = [];
  (pack.steps||[]).forEach(function(s){
    var txt = s.say.replace(/<[^>]+>/g,'');
    var words = fold(q).split(' ').filter(function(x){return x.length>4;});
    var score = words.filter(function(wd){ return fold(txt).indexOf(wd)>=0; }).length;
    if(score) hits.push({score:score,txt:txt});
  });
  (pack.sources.quotes||[]).forEach(function(c){
    var words = fq.split(' ').filter(function(x){return x.length>4;});
    var score = words.filter(function(wd){ return fold(c).indexOf(wd)>=0; }).length;
    if(score) hits.push({score:score+0.5,txt:'The passage says: “'+c+'”'});
  });
  hits.sort(function(a,b){return b.score-a.score;});
  if(!hits.length) return pack.ask.refuse;
  return hits.slice(0,2).map(function(h){return h.txt;}).join(' ');
};

/* ------------------------------------------------- scene renderer ----- */
var TONE = {read:'--read',listen:'--listen',speak:'--speak',write:'--write',
            navy:'--navy',ok:'--ok',no:'--no',part:'--part',dim:'--dim'};
IE.scene = function(sc){
  var out = ['<svg viewBox="'+(sc.viewbox||'0 0 640 320')+'" role="img" aria-label="'+
             esc(sc.caption||'diagram')+'">'];
  (sc.parts||[]).forEach(function(p){
    var c='var('+(TONE[p.tone]||'--navy')+')';
    var a=p.at||[0,0,100,40], x=a[0],y=a[1],wd=a[2],ht=a[3];
    out.push('<g class="sv-part" data-part="'+esc(p.id)+'">');
    if(p.kind==='arrow'){
      out.push('<rect x="'+x+'" y="'+y+'" width="'+wd+'" height="'+ht+'" rx="8" fill="none" stroke="'+c+'" stroke-dasharray="5 4" opacity=".7"/>');
    } else if(p.kind==='label'){
      out.push('<rect x="'+x+'" y="'+y+'" width="'+wd+'" height="'+ht+'" rx="7" fill="'+c+'" opacity=".09"/>');
    } else if(p.kind==='bar'){
      out.push('<rect x="'+x+'" y="'+y+'" width="'+wd+'" height="'+ht+'" rx="6" fill="'+c+'" opacity=".22"/>');
      out.push('<rect x="'+x+'" y="'+y+'" width="6" height="'+ht+'" rx="3" fill="'+c+'"/>');
    } else if(p.kind==='group'){
      out.push('<rect x="'+x+'" y="'+y+'" width="'+wd+'" height="'+ht+'" rx="9" fill="none" stroke="'+c+'" stroke-width="1.5" opacity=".75"/>');
    } else {
      out.push('<rect x="'+x+'" y="'+y+'" width="'+wd+'" height="'+ht+'" rx="9" fill="'+c+'" opacity=".13" stroke="'+c+'" stroke-width="1.2"/>');
    }
    (p.text||'').split('\n').forEach(function(line,k,arr){
      var cy = y + ht/2 + (k - (arr.length-1)/2)*15 + 5;
      out.push('<text x="'+(x+wd/2)+'" y="'+cy+'" text-anchor="middle" font-size="12.5" '+
               'fill="var(--ink)" style="font-family:inherit">'+esc(line)+'</text>');
    });
    out.push('</g>');
  });
  out.push('</svg>');
  return out.join('');
};

/* ------------------------------------------------- the panel shell ---- */
IE.panel = function(titleHtml){
  var old=d.getElementById('ielts-panel'); if(old) old.remove();
  var p=d.createElement('div'); p.id='ielts-panel'; p.className='learnpanel on';
  p.setAttribute('role','dialog'); p.setAttribute('aria-label','Teaching panel');
  p.innerHTML='<header><h2>'+titleHtml+'</h2><button class="x" aria-label="Close">×</button></header>'+
              '<div class="learnbody"></div>';
  d.body.appendChild(p);
  p.querySelector('.x').onclick=function(){ p.remove(); };
  d.addEventListener('keydown',function esc2(e){
    if(e.key==='Escape' && d.getElementById('ielts-panel')===p){ p.remove();
      d.removeEventListener('keydown',esc2);} });
  var h=p.querySelector('header'), on=false, dx=0, dy=0;
  h.addEventListener('pointerdown',function(e){
    if(e.target.closest('.x')) return;
    on=true; h.setPointerCapture(e.pointerId);
    var r=p.getBoundingClientRect(); dx=e.clientX-r.left; dy=e.clientY-r.top; });
  h.addEventListener('pointermove',function(e){ if(!on) return;
    p.style.left=Math.max(4,Math.min(innerWidth-120,e.clientX-dx))+'px';
    p.style.top=Math.max(4,Math.min(innerHeight-60,e.clientY-dy))+'px';
    p.style.right='auto'; p.style.bottom='auto'; });
  h.addEventListener('pointerup',function(e){ on=false; h.releasePointerCapture(e.pointerId); });
  p.querySelector('.x').focus();
  return p;
};

function esc(s){ var e=d.createElement('div'); e.textContent=(s===undefined||s===null)?'':s;
                 return e.innerHTML; }
IE.esc = esc;

/* ------------------------------------------------- theme -------------- */
IE.theme = function(){
  var cur = d.documentElement.getAttribute('data-theme');
  var next = cur==='dark' ? 'light' : 'dark';
  d.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('ielts.theme', next); }catch(e){}
};
try{ var t=localStorage.getItem('ielts.theme');
     if(t) d.documentElement.setAttribute('data-theme',t); }catch(e){}

})(window, document);


(function(w,d){
'use strict';
var IE = w.IELTS = w.IELTS || {};

/* ---------------------------------------------------- the player ------ */
IE.mountPlayer = function(root, rec, exId){
  var turns = (rec.turns||[]).filter(function(t){return t.ok;});
  var i = 0, audio = null, playing = false;
  var played = 0;
  var btn = root.querySelector('[data-a=play]');
  var rep = root.querySelector('[data-a=replay]');
  var bar = root.querySelector('.plbar span');
  var who = root.querySelector('.plwho');
  var cast = root.querySelector('.plcast');
  if (cast) cast.textContent = (rec.cast||[]).length + ' voices · ' +
      turns.length + ' turns';
  if (!turns.length){
    if (btn){ btn.disabled = true; btn.textContent = 'No recording'; }
    var warn = d.createElement('div'); warn.className='keyhint';
    warn.textContent = 'This recording could not be generated. The questions still work, '+
      'and the script opens once you have answered.';
    root.querySelector('.player').appendChild(warn);
    return;
  }
  function step(){
    if (i >= turns.length){ stop(true); return; }
    var t = turns[i];
    if (who) who.textContent = t.speaker;
    if (bar) bar.style.width = Math.round((i/turns.length)*100)+'%';
    audio = new Audio(rec.base + '/' + t.file);
    audio.onended = function(){ i++; if (playing) step(); };
    audio.onerror = function(){ i++; if (playing) step(); };
    audio.play().catch(function(){ i++; if (playing) setTimeout(step, 400); });
  }
  function stop(done){
    playing = false;
    if (audio){ audio.pause(); audio = null; }
    if (btn) btn.textContent = done ? 'Played' : 'Play';
    if (done){
      played++;
      if (btn) btn.disabled = true;
      if (rep) rep.hidden = false;
      if (bar) bar.style.width = '100%';
    }
  }
  if (btn) btn.onclick = function(){
    if (playing){ stop(false); return; }
    playing = true; btn.textContent = 'Pause'; i = 0; step();
  };
  if (rep) rep.onclick = function(){
    IE.record(exId, {helped:true});
    rep.textContent = 'Replayed — recorded as help';
    playing = true; i = 0; step();
  };
};

/* the script stays shut until the attempt is in */
IE.unlockScript = function(root, rec, answers){
  var box = root.querySelector('.scriptbox');
  if (!box) return;
  box.hidden = false;
  var html = (rec.turns||[]).map(function(t){
    var line = IE.esc(t.text);
    (answers||[]).forEach(function(a){
      if (!a) return;
      var re = new RegExp('('+a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
      line = line.replace(re, '<mark>$1</mark>');
    });
    return '<p><b>'+IE.esc(t.speaker)+':</b> '+line+'</p>';
  }).join('');
  box.querySelector('.scriptbody').innerHTML = html ||
    '<p>The script for this recording is not available.</p>';
};

/* ---------------------------------------------------- grammar --------- */
IE.mountGrammar = function(root, g){
  var step = 0;
  var pane = root.querySelector('.gbody');
  var tabs = root.querySelectorAll('.gstep');
  function show(n){
    step = n;
    tabs.forEach(function(t,k){ t.setAttribute('aria-selected', String(k===n)); });
    pane.innerHTML = '';
    if (n===0) notice();
    if (n===1) match();
    if (n===2) produce();
  }
  tabs.forEach(function(t,k){ t.onclick = function(){ show(k); }; });

  function notice(){
    var box = d.createElement('div');
    box.innerHTML = '<p class="keyhint">'+IE.esc(g.prose.join(' '))+'</p>'+
      '<p>Here is the pattern in the model answer you have just read:</p>'+
      (g.notice||[]).map(function(n){
        return '<div class="answer"><b>direct:</b> '+IE.esc(n.direct)+
               '<br><b>in the letter:</b> '+n.indirect+'</div>'; }).join('');
    pane.appendChild(box);
  }

  function match(){
    var left = (g.pairs||[]).map(function(p,k){return {k:k,t:p.direct};});
    var right = (g.pairs||[]).map(function(p,k){return {k:k,t:p.indirect};});
    right.sort(function(){ return Math.random()-0.5; });
    var chosen = {}, sel = null;
    var wrap = d.createElement('div'); wrap.className='matchwrap';
    wrap.innerHTML = '<div class="mcol"></div><div class="mcol"></div>';
    var L = wrap.children[0], R = wrap.children[1];
    left.forEach(function(x){
      var b=d.createElement('button'); b.className='mitem'; b.textContent=x.t;
      b.onclick=function(){ sel=x.k;
        L.querySelectorAll('.mitem').forEach(function(y){y.classList.remove('sel');});
        b.classList.add('sel'); };
      L.appendChild(b);
    });
    right.forEach(function(x){
      var b=d.createElement('button'); b.className='mitem';
      b.innerHTML=IE.esc(x.t.replace(/<[^>]+>/g,''));
      b.onclick=function(){
        if (sel===null) return;
        chosen[sel]=x.k;
        b.classList.add(sel===x.k?'ok':'no');
        L.querySelector('.mitem.sel').classList.add(sel===x.k?'ok':'no');
        L.querySelector('.mitem.sel').classList.remove('sel');
        sel=null;
        var n=Object.keys(chosen).length;
        if (n===left.length){
          var right_n = Object.keys(chosen).filter(function(k){return chosen[k]==k;}).length;
          vd.textContent = right_n+' of '+left.length+' matched correctly';
        }
      };
      R.appendChild(b);
    });
    pane.appendChild(wrap);
    var vd=d.createElement('div'); vd.className='verdict'; vd.setAttribute('role','status');
    pane.appendChild(vd);
  }

  function produce(){
    var h=d.createElement('div'); h.className='keyhint';
    h.textContent = g.exercise.prompt;
    pane.appendChild(h);
    var state={};
    (g.exercise.items||[]).forEach(function(it){
      var box=d.createElement('div'); box.className='q';
      box.innerHTML='<div class="stem"><span class="num">'+it.n+'.</span>'+
        IE.esc(it.stem)+'</div><input type="text" aria-label="Rewrite '+it.n+'">'+
        '<div class="mark" role="status" aria-live="polite"></div><div class="why"></div>';
      box.querySelector('input').addEventListener('input',function(e){
        state[it.n]=e.target.value; });
      pane.appendChild(box);
    });
    var f=d.createElement('div'); f.className='foot';
    f.innerHTML='<button class="btn primary" data-a="gcheck">Check</button>'+
                '<button class="btn" data-a="gshow">Show the models</button>'+
                '<span class="verdict" role="status" aria-live="polite"></span>';
    pane.appendChild(f);
    f.addEventListener('click',function(e){
      var a=e.target.closest('button'); if(!a) return;
      var boxes=pane.querySelectorAll('.q'), good=0, tried=0;
      (g.exercise.items||[]).forEach(function(it,k){
        var box=boxes[k], m=box.querySelector('.mark'), why=box.querySelector('.why');
        var given=(state[it.n]||'').trim();
        box.classList.remove('ok','no');
        if (a.dataset.a==='gshow'){
          m.textContent='A model answer:';
          why.textContent=it.model || '(no model printed in the book)';
          return;
        }
        if(!given){ m.textContent=''; why.textContent=''; return; }
        tried++;
        var v = IE.judgeOpen(given, it.model);
        box.classList.add(v.ok?'ok':'no');
        m.textContent = v.ok ? 'That works' : (v.near ? 'Nearly' : 'Not yet');
        why.textContent = v.why;
        if (v.ok) good++;
      });
      if (a.dataset.a==='gcheck')
        f.querySelector('.verdict').textContent = tried ?
          (good+' of '+tried+' match the pattern') : '';
    });
  }
  show(0);
};

/* An open transformation is not one string. It is judged on whether the
   learner used the pattern, not on reproducing the book's wording. */
IE.judgeOpen = function(given, model){
  var g = given.toLowerCase().replace(/\s+/g,' ').trim();
  var m = (model||'').toLowerCase();
  if (!g) return {ok:false, near:false, why:''};
  var openers = ['i would be grateful','could you confirm','i should like to know',
                 'please let me know','i am writing to ask','could you tell me',
                 'i would like to know','would you be able to'];
  var hasOpener = openers.some(function(o){ return g.indexOf(o)>=0; });
  var hasLink = /\b(whether|if|that)\b/.test(g);
  var noInversion = !/^(am|is|are|do|does|did|will|can|have|has)\b/.test(g);
  if (hasOpener && hasLink && noInversion)
    return {ok:true, near:false, why:'Polite opener, the right linking word, and the word order back to normal.'};
  var why = [];
  if (!hasOpener) why.push('start with a polite opener such as “I would be grateful if you could…”');
  if (!hasLink) why.push('a yes-no question needs “whether” or “if”');
  if (!noInversion) why.push('the word order goes back to normal inside the clause');
  return {ok:false, near:(hasOpener||hasLink), why:why.join('; ')};
};

/* ---------------------------------------------------- the preview ----- */
IE.mountPreview = function(){
  var p = d.querySelector('.preview'); if(!p) return;
  var k = 'ielts.preview.'+(d.body.dataset.cycle||'x');
  var btn = p.querySelector('.ptoggle'), body = p.querySelector('.pbody');
  var shut = false;
  try{ shut = localStorage.getItem(k)==='shut'; }catch(e){}
  function set(s){ shut=s; body.hidden=s; btn.setAttribute('aria-expanded',String(!s));
    btn.textContent = s ? 'What this cycle teaches' : 'Hide';
    try{ localStorage.setItem(k, s?'shut':'open'); }catch(e){} }
  btn.onclick=function(){ set(!shut); };
  set(shut);
};

/* ---------------------------------------------------- progress strip -- */
IE.mountStrip = function(){
  var s = d.querySelector('.strip'); if(!s) return;
  s.querySelectorAll('a').forEach(function(a){
    var id=a.dataset.part;
    var r=(IE.progress||{})[id];
    if(r && r.score!==undefined) a.classList.add(r.score===r.max?'done':'part');
  });
};

/* course.js loads at the END of the body, so DOMContentLoaded has usually
   fired already and a listener for it never runs. The preview's toggle then
   has no handler and clicking it does nothing - which looks exactly like a
   collapsible that will not collapse. */
function ready(fn){
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', fn);
  else fn();
}
ready(function(){ IE.mountPreview(); IE.mountStrip(); });
})(window, document);
