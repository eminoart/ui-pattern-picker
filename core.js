/* UI Pattern Picker core. Usage in a widget:
   <div id="uip"></div>
   <script src="https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js"></script>
   <script>UIP.show('uip', 'loading', 'ko')</script>
   target: 'map' | L1 id | L2 id | 'l2id.itemid' (highlights that card) */
(function(){
const UIP = window.UIP = window.UIP || {};
const CAT = window.UIP_CATALOG, D = window.UIP_DEMOS;
const PER = 9;

const CSS = `
.uip{--uip-ac:var(--text-accent,#2f6bff);--uip-acbg:var(--bg-accent,#e8efff);--uip-surface:var(--surface-2,#fff);--uip-neutral:var(--bg-neutral,#f1f2f4);--uip-b:var(--border,rgba(0,0,0,.1));--uip-bs:var(--border-strong,rgba(0,0,0,.18));--uip-tx:var(--text-primary,#14171f);--uip-sub:var(--text-secondary,#6b7280);--uip-mute:var(--text-muted,#9aa0aa);--uip-danger:var(--text-danger,#e5484d);color:var(--uip-tx);font-family:inherit}
.uip *{box-sizing:border-box}
.uip-head{display:flex;justify-content:space-between;align-items:flex-end;gap:8px;flex-wrap:wrap;padding:.5rem 0 1rem}
.uip-badge{background:var(--uip-acbg);color:var(--uip-ac);font-size:12px;padding:4px 10px;border-radius:8px}
.uip-h{font-size:18px;font-weight:500;margin:10px 0 0}
.uip-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px}
.uip-card{background:var(--uip-surface);border:0.5px solid var(--uip-b);border-radius:12px;padding:10px;display:flex;flex-direction:column}
.uip-card.tile{cursor:pointer}.uip-card.tile:hover{border-color:var(--uip-bs)}
.uip-card.hl{border:2px solid var(--uip-ac)}
.uip-pv{background:var(--uip-neutral);border-radius:10px;height:130px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;gap:6px}
.uip-card.tile .uip-pv{height:92px}
.uip-n{margin:10px 2px 0;font-size:15px;font-weight:500}.uip-n b{color:var(--uip-ac);font-weight:500;font-size:13px;margin-right:6px}
.uip-e{font-size:13px;color:var(--uip-sub);margin:0 2px}
.uip-x{font-size:12px;color:var(--uip-mute);margin:2px 2px 8px;flex:1;line-height:1.5}
.uip-c{font-size:12px;color:var(--uip-ac);margin:4px 2px 0}
.uip-tag{font-size:11px;background:var(--uip-acbg);color:var(--uip-ac);padding:1px 6px;border-radius:999px;margin-left:6px;font-weight:400}
.uip-pick{width:100%;font-size:13px}
.uip-nav{display:flex;align-items:center;justify-content:center;gap:12px;margin:14px 0 4px}
.uip-pi{font-size:13px;color:var(--uip-sub)}
.uip-foot{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.uip-note{font-size:13px;color:var(--uip-sub);margin:10px 0 0}
.uip-top{position:relative;margin:.25rem 0 .5rem}
.uip-q{width:100%;height:40px;font-size:14px;padding:0 12px;border:0.5px solid var(--uip-bs);border-radius:10px;background:var(--uip-surface);color:var(--uip-tx);font-family:inherit}
.uip-q:focus{outline:none;border-color:var(--uip-ac);box-shadow:0 0 0 3px var(--uip-acbg)}
.uip-crumb{font-size:13px;color:var(--uip-sub);margin:6px 0 0;display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.uip-crumb a{color:var(--uip-ac);cursor:pointer;text-decoration:none}.uip-crumb a:hover{text-decoration:underline}.uip-crumb i{font-style:normal;color:var(--uip-mute)}
.uip-crumb span{color:inherit}
.uip-acts{display:flex;gap:6px}.uip-acts .uip-pick{flex:1}
.uip-add{font-size:13px;white-space:nowrap}.uip-add.on{background:var(--uip-acbg);color:var(--uip-ac);border-color:var(--uip-ac)}
.uip-catl{color:var(--uip-ac);cursor:pointer}
.uip-cats{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:0 0 12px;font-size:12px;color:var(--uip-sub)}
.uip-tray{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:10px 12px;margin:0 0 8px;border:0.5px solid var(--uip-ac);border-radius:12px;background:var(--uip-acbg)}
.uip-tray[hidden]{display:none}
.uip-tl{font-size:13px;color:var(--uip-ac);font-weight:500;margin-right:4px}
.uip-tray .uip-chip{display:inline-flex;align-items:center;gap:4px;cursor:default}
.uip-tray .uip-chip button{background:none;border:0;color:inherit;font-size:14px;line-height:1;padding:0 0 0 2px;cursor:pointer;min-height:0}
.uip-tsp{flex:1}
.uip-tclr{font-size:12px}
.uip-soon{font-size:12px;color:var(--uip-mute);text-align:center;padding:0 10px}
.uip-ln{height:7px;border-radius:4px;background:var(--uip-bs)}
.uip-row{padding:6px 0;border-bottom:0.5px solid var(--uip-b)}
.uip-cap{font-size:12px;color:var(--uip-sub);text-align:center;margin-top:6px}
.uip-btn{background:var(--uip-ac);color:#fff;border:0;font-size:13px;padding:8px 16px;border-radius:8px;cursor:pointer;transition:transform .1s;display:inline-flex;align-items:center;justify-content:center;gap:6px}
.uip-btn:active{transform:scale(.95)}
.uip-btn2{background:var(--uip-surface);color:var(--uip-tx);border:0.5px solid var(--uip-bs);font-size:13px;padding:8px 16px;border-radius:8px;cursor:pointer}
.uip-btn.sm,.uip-btn2.sm{padding:5px 0;flex:1;font-size:12px}
.uip-link{color:var(--uip-ac);font-size:13px;cursor:pointer}
.uip-ibtn{width:38px;height:38px;border-radius:10px;border:0.5px solid var(--uip-b);background:var(--uip-surface);font-size:16px;cursor:pointer;padding:0}
.uip-ibtn.on{color:var(--uip-danger)}
.uip-fab{position:absolute;right:14px;bottom:14px;width:44px;height:44px;border-radius:50%;border:0;background:var(--uip-ac);color:#fff;font-size:22px;cursor:pointer;transition:transform .25s;display:flex;align-items:center;justify-content:center}
.uip-seg{display:flex;background:var(--uip-b);border-radius:10px;padding:3px}
.uip-seg span{padding:6px 12px;border-radius:8px;font-size:12px;cursor:pointer}.uip-seg span.on{background:var(--uip-surface)}
.uip-menu{display:none;position:absolute;background:var(--uip-surface);border:0.5px solid var(--uip-b);border-radius:8px;padding:6px 12px;font-size:12px;line-height:2;white-space:nowrap;z-index:3}
.uip-menu.open{display:block}
.uip-spin{border:3px solid var(--uip-b);border-top-color:var(--uip-ac);border-radius:50%;animation:uip-sp .8s linear infinite;display:inline-block}
.uip-btn .uip-spin{border-color:rgba(255,255,255,.35);border-top-color:#fff;width:13px;height:13px;border-width:2px}
.uip-sk{background:linear-gradient(90deg,var(--uip-b) 0,var(--uip-surface) 50%,var(--uip-b) 100%);background-size:440px 100%;animation:uip-sh 1.5s linear infinite;border-radius:5px}
.uip-track{height:8px;border-radius:4px;background:var(--uip-b);overflow:hidden}.uip-fill{height:100%;background:var(--uip-ac)}
.uip-dot{width:11px;height:11px;border-radius:50%;background:var(--uip-ac);display:inline-block;animation:uip-bo 1.2s infinite}.uip-dot.sm{width:6px;height:6px;background:var(--uip-sub)}
.uip-steps{display:flex;align-items:center;gap:6px}.uip-step{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;border:1.5px solid var(--uip-bs);color:var(--uip-sub);transition:.3s}.uip-step.on{background:var(--uip-ac);border-color:var(--uip-ac);color:#fff}.uip-stepln{width:18px;height:2px;background:var(--uip-bs)}
.uip-dlg{position:relative;background:var(--uip-surface);border-radius:12px;padding:12px;width:74%;text-align:center;font-size:13px}
.uip-sheet{position:absolute;left:0;right:0;bottom:0;background:var(--uip-surface);border-radius:14px 14px 0 0;padding:6px 14px 12px}
.uip-grab{width:30px;height:4px;border-radius:2px;background:var(--uip-bs);margin:0 auto 8px}
.uip-toast{position:absolute;bottom:14px;background:#1b2140;color:#fff;font-size:13px;padding:8px 14px;border-radius:999px}
.uip-snack{position:absolute;bottom:12px;left:12px;right:12px;background:#1b2140;color:#fff;font-size:12px;padding:9px 12px;border-radius:10px;display:flex;justify-content:space-between}.uip-snack b{color:#8fb0ff;font-weight:500}
.uip-tipwrap{position:relative;width:24px;height:24px;border-radius:50%;border:1.5px solid var(--uip-sub);display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer}
.uip-tip{position:absolute;bottom:32px;white-space:nowrap;background:#1b2140;color:#fff;font-size:11px;padding:5px 9px;border-radius:7px;opacity:0;transition:.2s;pointer-events:none}
.uip-tipwrap:hover .uip-tip,.uip-tipwrap:focus .uip-tip{opacity:1}
.uip-drawer{position:absolute;top:0;bottom:0;left:0;width:52%;background:var(--uip-surface);padding:12px;font-size:12px}
.uip-field{width:72%;height:32px;border:0.5px solid var(--uip-bs);border-radius:8px;background:var(--uip-surface);display:flex;align-items:center;padding:0 10px;font-size:13px}
.uip-caret{width:1px;height:14px;background:var(--uip-ac);margin-left:2px;animation:uip-cur 1s infinite}
.uip-chip{display:inline-block;padding:4px 10px;border-radius:999px;font-size:12px;border:0.5px solid var(--uip-bs);background:var(--uip-surface);cursor:pointer;white-space:nowrap}
.uip-chip.on{background:var(--uip-ac);color:#fff;border-color:var(--uip-ac)}
.uip-box{background:var(--uip-surface);border:0.5px solid var(--uip-b);border-radius:10px}
.uip-ph{position:relative;width:96px;height:118px;border:1.5px solid var(--uip-bs);border-radius:14px;background:var(--uip-surface);overflow:hidden}
.uip-sel.on{background:var(--uip-acbg);color:var(--uip-ac)}
.uip-vs{display:flex;align-items:center;gap:10px}.uip-vs>i{font-style:normal;font-size:11px;color:var(--uip-mute)}
.uip-pv .uip-cap.abs{position:absolute;bottom:6px;left:0;right:0;margin:0}
@keyframes uip-sp{to{transform:rotate(360deg)}}@keyframes uip-sh{0%{background-position:-220px 0}100%{background-position:220px 0}}
@keyframes uip-fill{0%{width:0}80%,100%{width:100%}}@keyframes uip-bo{0%,80%,100%{transform:scale(.5);opacity:.4}40%{transform:scale(1);opacity:1}}
@keyframes uip-ind{0%{left:-40%}100%{left:100%}}@keyframes uip-ring{0%{stroke-dashoffset:126}80%,100%{stroke-dashoffset:0}}
@keyframes uip-pulse{50%{opacity:.35}}@keyframes uip-cur{50%{opacity:0}}@keyframes uip-grow{0%{transform:scaleY(.2)}40%,100%{transform:none}}
@keyframes uip-fadeup{0%{opacity:0;transform:translateY(10px)}30%,100%{opacity:1;transform:none}}
@keyframes uip-pop{0%,15%{transform:translateY(60px);opacity:0}25%,75%{transform:none;opacity:1}85%,100%{transform:translateY(60px);opacity:0}}
@keyframes uip-up{0%,15%{transform:translateY(100%)}30%,80%{transform:none}95%,100%{transform:translateY(100%)}}
@keyframes uip-slidein{0%,15%{transform:translateX(-100%)}30%,80%{transform:none}95%,100%{transform:translateX(-100%)}}
@keyframes uip-pulldown{0%,20%{opacity:0;transform:translateY(-14px)}40%,70%{opacity:1;transform:translateY(8px)}90%,100%{opacity:0;transform:translateY(-14px)}}
@keyframes uip-pulllist{0%,20%{transform:none}40%,70%{transform:translateY(22px)}90%,100%{transform:none}}`;

const TX = {
 ko:{map:'UI 지도',mapH:'어떤 걸 하고 싶으세요?',l1H:'어떤 걸 찾으세요?',kinds:'종류',items:'개',patterns:'패턴',pick:'이걸로 ↗',view:'카드로 보기',prev:'‹ 이전',next:'다음 ›',
  popular:'많이 씀',top:'인기',pairs:'헷갈리는 짝 보기',others:'의 다른 종류',toMap:'UI 지도로',soon:'미리보기 준비 중',
  note:'순서는 많이 쓰이는 정도를 기준으로 한 경험적 판단이에요. 용어를 몰라도 상황을 말로 적으면 찾아 드려요.',
  l2H:n=>`"${n} 넣어줘" 대신 이 이름으로 말해 보세요`,
  ph:'이름이나 상황으로 찾기 (예: 대시보드, 로딩, 빈 화면)',sH:(q,n)=>`"${q}" 검색 결과 ${n}개`,sNone:q=>`"${q}"에 맞는 패턴이 없어요. 상황을 말로 적어 주면 Claude가 찾아 드려요.`,sAsk:q=>`"${q}" 같은 UI를 찾고 있어 ↗`,askQ:q=>`"${q}" 같은 UI를 찾고 있어. 어떤 패턴이 맞을까?`,sCats:'종류 바로가기',clear:'지우기',
  add:'+ 담기',added:'✓ 담음',tray:n=>`담은 패턴 ${n}개`,traySend:n=>`${n}개로 프롬프트 만들기 ↗`,trayClear:'비우기',rm:'빼기',
  pickQ:(k,e,l1,l2)=>`UI 패턴 선택: ${k} (${e}) — ${l1} › ${l2}`,
  multiQ:list=>`UI 패턴 여러 개 선택 (${list.length}개):\n`+list.map(([k,e,l1,l2])=>`- ${k} (${e}) — ${l1} › ${l2}`).join('\n')},
 en:{map:'UI map',mapH:'What do you want to do?',l1H:'What are you looking for?',kinds:'kinds',items:'',patterns:'patterns',pick:'Use this ↗',view:'See cards',prev:'‹ Prev',next:'Next ›',
  popular:'Popular',top:'Top',pairs:'Look-alike pairs',others:': other kinds',toMap:'UI map',soon:'Preview coming soon',
  note:'Order reflects how commonly each is used (a judgment call, not measured data). You can also just describe the situation.',
  l2H:n=>`Say the exact name instead of "add some ${n.toLowerCase()}"`,
  ph:'Search by name or situation (e.g. dashboard, loading, empty state)',sH:(q,n)=>`${n} results for "${q}"`,sNone:q=>`No pattern matches "${q}". Describe the situation and Claude will find one.`,sAsk:q=>`Find UI like "${q}" ↗`,askQ:q=>`I'm looking for UI like "${q}". Which pattern fits?`,sCats:'Jump to a kind',clear:'Clear',
  add:'+ Add',added:'✓ Added',tray:n=>`${n} pattern${n>1?'s':''} picked`,traySend:n=>`Make a prompt from ${n} ↗`,trayClear:'Clear',rm:'Remove',
  pickQ:(k,e,l1,l2)=>`UI pattern picked: ${e} — ${l1} › ${l2}`,
  multiQ:list=>`UI patterns picked (${list.length}):\n`+list.map(([k,e,l1,l2])=>`- ${e} — ${l1} › ${l2}`).join('\n')}
};

let IDX=null;
function index(){ if(IDX) return IDX; IDX={l1:{},l2:{}};
 CAT.forEach(g=>{IDX.l1[g.id]=g; g.l2.forEach(c=>{
  c.list=c.items.split(';').map(s=>{const p=s.split('~');return {id:p[0],ko:p[1],en:p[2],hko:p[3]||'',hen:p[4]||''}});
  c.parent=g; IDX.l2[c.id]=c; });}); return IDX; }

function injectCss(){ if(document.getElementById('uip-css')) return; const s=document.createElement('style'); s.id='uip-css'; s.textContent=CSS; document.head.appendChild(s); }
const send=q=>{ if(typeof window.sendPrompt==='function') window.sendPrompt(q); else { try{navigator.clipboard.writeText(q)}catch(e){} alert&&0; } };
UIP._send=send;

function demo(key,L){ const f=D[key]; const t=(k,e)=>L==='ko'?k:e; return f? f(t) : `<div class="uip-soon">${TX[L].soon}</div>`; }
function h(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
const PAIRMAP={overlay:'overlaypairs',notification:'overlaypairs',permission:'overlaypairs',onboard:'overlaypairs',text:'inputpairs',search:'inputpairs',form:'inputpairs',date:'inputpairs'};
const pairsFor=c=>c.parent.id==='pairs'?null:(PAIRMAP[c.id]||(/icon/.test(c.id)?'icons':'uipairs'));
const nm=(o,L)=>L==='ko'?o.ko:o.en;
const norm=s=>String(s||'').toLowerCase().replace(/[\s·\-_()/'".,]/g,'');
const item=k=>{const [a,b]=k.split('.');const c=IDX.l2[a];const x=c&&c.list.find(y=>y.id===b);return x?{c,x}:null};
const pickArgs=(c,x,L)=>[x.ko,x.en,nm(c.parent,L),nm(c,L)];

function search(q){ const toks=q.split(/\s+/).map(norm).filter(Boolean); if(!toks.length) return {items:[],cats:[]};
 const items=[],cats=[]; let ord=0;
 CAT.forEach(g=>g.l2.forEach(c=>{
  const cf=[c.ko,c.en,c.easy[0],c.easy[1],c.id,g.ko,g.en].map(norm);
  let cs=0; if(toks.every(t=>cf.some(f=>f.includes(t)))){ cs=toks.reduce((a,t)=>a+(cf[0]===t||cf[1]===t?100:cf.slice(0,2).some(f=>f.startsWith(t))?60:20),0); cats.push({c,s:cs}); }
  c.list.forEach(x=>{ ord++;
   const nf=[x.ko,x.en].map(norm), hf=[x.hko,x.hen].map(norm), idf=norm(x.id);
   let s=0, ok=true;
   for(const t of toks){ let v=0;
    if(nf.some(f=>f===t)) v=100; else if(nf.some(f=>f.includes(t))) v=50;
    else if(idf.includes(t)) v=30; else if(cf.slice(0,4).some(f=>f.includes(t))) v=15; else if(hf.some(f=>f.includes(t))) v=10;
    if(!v){ok=false;break} if(v>=50&&cf.slice(0,2).some(f=>f.includes(t))) v+=20; s+=v; }
   if(ok) items.push({c,x,s,o:ord});
  });
 }));
 items.sort((a,b)=>b.s-a.s||a.o-b.o); cats.sort((a,b)=>b.s-a.s);
 return {items,cats:cats.slice(0,4).map(z=>z.c)};
}

function makeApp(root,L,start){
 const T=TX[L]; const st={L,v:start,page:0,cart:[],q:''};
 root.innerHTML=`<div class="uip-top"><input class="uip-q" type="search" placeholder="${h(T.ph)}" aria-label="${h(T.ph)}"></div><div class="uip-tray" hidden></div><div class="uip-body"></div>`;
 const body=root.querySelector('.uip-body'), tray=root.querySelector('.uip-tray'), qi=root.querySelector('.uip-q');
 const go=(v,keepPage)=>{ st.v=v; if(!keepPage) st.page=0; draw(); };
 const crumb=parts=>`<nav class="uip-crumb">${parts.map((p,i)=>i<parts.length-1?`<a data-nav="${p[0]}">${h(p[1])}</a>`:`<span>${h(p[1])}</span>`).join('<i>›</i>')}</nav>`;
 const pager=total=>{ if(total<=PER) return ''; const pages=Math.ceil(total/PER); return `<div class="uip-nav"><button data-pg="-1">${T.prev}</button><span class="uip-pi">${st.page+1} / ${pages}</span><button data-pg="1">${T.next}</button></div>`; };
 const inCart=k=>st.cart.includes(k);
 const card=(c,x,n,hl,showCat)=>{ const k=c.id+'.'+x.id, hint=L==='ko'?x.hko:x.hen;
  return `<div class="uip-card${hl?' hl':''}"><div class="uip-pv">${demo(k,L)}</div><p class="uip-n"><b>${String(n+1).padStart(2,'0')}</b>${h(nm(x,L))}${n<3&&!showCat?`<span class="uip-tag">${T.popular}</span>`:''}</p><p class="uip-e">${L==='ko'?h(x.en):''}${showCat?`${L==='ko'?' · ':''}<a class="uip-catl" data-nav="l2:${c.id}">${h(nm(c,L))}</a>`:''}</p><p class="uip-x">${h(hint)}</p><div class="uip-acts"><button class="uip-pick" data-pick="${k}">${T.pick}</button><button class="uip-add${inCart(k)?' on':''}" data-add="${k}" aria-pressed="${inCart(k)}">${inCart(k)?T.added:T.add}</button></div></div>`; };

 function draw(){ const v=st.v; let html='';
  if(v.t==='map'){ const tot=CAT.reduce((a,g)=>a+g.l2.reduce((b,c)=>b+c.list.length,0),0), kinds=CAT.reduce((a,g)=>a+g.l2.length,0); const s=st.page*PER, slice=CAT.slice(s,s+PER);
   html=`<div class="uip-head"><div><span class="uip-badge">${T.map} · ${CAT.length}${L==='ko'?'개 그룹':' groups'} · ${kinds}${L==='ko'?'종류':' kinds'} · ${tot}${L==='ko'?'개':' patterns'}</span><p class="uip-h">${T.mapH}</p></div></div>
   <div class="uip-grid">${slice.map((g,i)=>{const n=g.l2.reduce((b,c)=>b+c.list.length,0);return `<div class="uip-card tile" data-nav="l1:${g.id}" tabindex="0"><div class="uip-pv">${demo(g.rep,L)}</div><p class="uip-n"><b>${String(s+i+1).padStart(2,'0')}</b>${h(nm(g,L))}</p><p class="uip-e">${L==='ko'?h(g.en):''}</p><p class="uip-c">${g.l2.length} ${T.kinds} · ${n}${T.items||' '+T.patterns}</p></div>`}).join('')}</div>${pager(CAT.length)}<p class="uip-note">${T.note}</p>`;
  } else if(v.t==='l1'){ const g=IDX.l1[v.id], s=st.page*PER, slice=g.l2.slice(s,s+PER);
   html=`${crumb([['map',T.map],['',nm(g,L)]])}<div class="uip-head"><div><span class="uip-badge">${h(nm(g,L))} · ${g.l2.length} ${T.kinds}</span><p class="uip-h">${T.l1H}</p></div></div>
   <div class="uip-grid">${slice.map((c,i)=>{const lab=L==='ko'?c.easy[0]:c.easy[1];const top=c.list.slice(0,3).map(x=>nm(x,L)).join(' · ');return `<div class="uip-card tile" data-nav="l2:${c.id}" tabindex="0"><div class="uip-pv">${demo(c.id+'.'+c.list[0].id,L)}</div><p class="uip-n"><b>${s+i+1}</b>${h(lab)}</p><p class="uip-e">${L==='ko'?h(c.ko+' '+c.en):h(c.en)}</p><p class="uip-c">${c.list.length} ${T.patterns}</p><p class="uip-x">${T.top}: ${h(top)}</p><p class="uip-c">${T.view} ›</p></div>`}).join('')}</div>${pager(g.l2.length)}`;
  } else if(v.t==='l2'){ const c=IDX.l2[v.id], g=c.parent;
   if(v.hl && !v._j){ const k=c.list.findIndex(x=>x.id===v.hl); if(k>=0) st.page=Math.floor(k/PER); v._j=1; }
   const s=st.page*PER, slice=c.list.slice(s,s+PER), pr=pairsFor(c);
   html=`${crumb([['map',T.map],['l1:'+g.id,nm(g,L)],['',nm(c,L)]])}<div class="uip-head"><div><span class="uip-badge">${h(nm(g,L))} › ${h(nm(c,L))} ${c.list.length}${L==='ko'?'가지':''}</span><p class="uip-h">${h(T.l2H(nm(c,L)))}</p></div></div>
   <div class="uip-grid">${slice.map((x,i)=>card(c,x,s+i,x.id===v.hl)).join('')}</div>${pager(c.list.length)}
   <div class="uip-foot">${pr?`<button data-nav="l2:${pr}">${T.pairs}</button>`:''}<button data-nav="l1:${g.id}">${h(nm(g,L))}${T.others}</button><button data-nav="map">${T.toMap}</button></div>`;
  } else if(v.t==='q'){ const r=search(v.q), s=st.page*PER, slice=r.items.slice(s,s+PER);
   html=`${crumb([['map',T.map],['',v.q]])}<div class="uip-head"><div><span class="uip-badge">${h(T.sH(v.q,r.items.length))}</span></div></div>
   ${r.cats.length?`<div class="uip-cats"><span>${T.sCats}</span>${r.cats.map(c=>`<button class="uip-chip" data-nav="l2:${c.id}">${h(nm(c,L))} ${c.list.length}</button>`).join('')}</div>`:''}
   ${r.items.length?`<div class="uip-grid">${slice.map((z,i)=>card(z.c,z.x,s+i,false,true)).join('')}</div>${pager(r.items.length)}`:`<p class="uip-note">${h(T.sNone(v.q))}</p><div class="uip-foot"><button data-ask="1">${h(T.sAsk(v.q))}</button><button data-nav="map">${T.toMap}</button></div>`}`;
  }
  body.innerHTML=html; UIP.fx._init(body); drawTray();
 }
 function drawTray(){ const n=st.cart.length; tray.hidden=!n; if(!n){tray.innerHTML='';return;}
  tray.innerHTML=`<span class="uip-tl">${T.tray(n)}</span>${st.cart.map(k=>{const z=item(k);return `<span class="uip-chip on">${h(nm(z.x,L))}<button data-rm="${k}" aria-label="${T.rm} ${h(nm(z.x,L))}">×</button></span>`}).join('')}<span class="uip-tsp"></span><button class="uip-tclr" data-clr="1">${T.trayClear}</button><button class="uip-btn" data-send="1">${T.traySend(n)}</button>`; }
 const nav=s=>{ if(s==='map') return go({t:'map'}); const [t,id]=s.split(':'); if(t==='l1'&&IDX.l1[id]) go({t:'l1',id}); else if(t==='l2'&&IDX.l2[id]) go({t:'l2',id}); if(st.v.t!=='q'){ qi.value=''; st.q=''; } };
 root.addEventListener('click',e=>{ const el=e.target.closest('[data-nav],[data-pg],[data-pick],[data-add],[data-rm],[data-clr],[data-send],[data-ask]'); if(!el||!root.contains(el)) return;
  if(el.classList.contains('tile') && e.target.closest('.uip-pv button,.uip-pv input,.uip-pv .uip-btn')) return;
  const d=el.dataset;
  if(d.nav!=null){ e.preventDefault(); nav(d.nav); root.scrollIntoView&&root.getBoundingClientRect().top<0&&root.scrollIntoView({block:'start'}); }
  else if(d.pg){ const tot=st.v.t==='map'?CAT.length:st.v.t==='l1'?IDX.l1[st.v.id].l2.length:st.v.t==='l2'?IDX.l2[st.v.id].list.length:search(st.v.q).items.length; const pages=Math.ceil(tot/PER); st.page=(st.page+(+d.pg)+pages)%pages; draw(); }
  else if(d.pick){ const z=item(d.pick); send(T.pickQ(...pickArgs(z.c,z.x,L))); }
  else if(d.add){ const k=d.add, i=st.cart.indexOf(k); if(i>=0) st.cart.splice(i,1); else st.cart.push(k); el.classList.toggle('on',i<0); el.textContent=i<0?T.added:T.add; el.setAttribute('aria-pressed',i<0); drawTray(); }
  else if(d.rm){ st.cart=st.cart.filter(k=>k!==d.rm); body.querySelectorAll(`[data-add="${d.rm}"]`).forEach(b=>{b.classList.remove('on');b.textContent=T.add;b.setAttribute('aria-pressed','false')}); drawTray(); }
  else if(d.clr){ st.cart=[]; body.querySelectorAll('[data-add].on').forEach(b=>{b.classList.remove('on');b.textContent=T.add;b.setAttribute('aria-pressed','false')}); drawTray(); }
  else if(d.send){ if(st.cart.length===1){ const z=item(st.cart[0]); send(T.pickQ(...pickArgs(z.c,z.x,L))); } else send(T.multiQ(st.cart.map(k=>{const z=item(k);return pickArgs(z.c,z.x,L)}))); }
  else if(d.ask){ send(T.askQ(st.v.q)); }
 });
 root.addEventListener('keydown',e=>{ const t=e.target; if(t.classList&&t.classList.contains('tile')&&(e.key==='Enter'||e.key===' ')){ e.preventDefault(); nav(t.dataset.nav); } });
 let tm, before=null;
 qi.addEventListener('input',()=>{ clearTimeout(tm); tm=setTimeout(()=>{ const q=qi.value.trim(); st.q=q;
  if(q){ if(st.v.t!=='q') before={v:st.v,page:st.page}; st.v={t:'q',q}; st.page=0; draw(); }
  else if(st.v.t==='q'){ const b=before||{v:{t:'map'},page:0}; st.v=b.v; st.page=b.page; draw(); } },140); });
 qi.addEventListener('keydown',e=>{ if(e.key==='Escape'){ qi.value=''; qi.dispatchEvent(new Event('input')); } });
 if(start.t==='q') qi.value=start.q;
 draw();
}

UIP.show=function(elId,target,lang){ injectCss(); index(); const root=document.getElementById(elId); root.classList.add('uip');
 const L=(lang==='en')?'en':'ko'; UIP._L=L; target=String(target||'map').trim();
 let v={t:'map'};
 if(target==='map'||!target) v={t:'map'};
 else if(target[0]==='?') v=target.slice(1).trim()?{t:'q',q:target.slice(1).trim()}:{t:'map'};
 else if(IDX.l1[target]) v={t:'l1',id:target};
 else { const [a,b]=target.split('.'); if(IDX.l2[a]) v={t:'l2',id:a,hl:b};
  else { const q=target.toLowerCase(); const hit=Object.values(IDX.l2).find(c=>c.ko===target||c.en.toLowerCase()===q); v=hit?{t:'l2',id:hit.id}:{t:'q',q:target}; } }
 makeApp(root,L,v);
};
UIP.ids=()=>{index(); return Object.keys(IDX.l2);};

/* interactions used by demos */
UIP.fx={
 press(b){b.animate([{transform:'scale(1)'},{transform:'scale(.93)'},{transform:'scale(1)'}],{duration:180})},
 toggleOn(b){b.classList.toggle('on'); if(b.textContent==='♡'||b.textContent==='♥') b.textContent=b.classList.contains('on')?'♥':'♡';},
 toggleBtn(b,on,off){const o=b.dataset.on!=='1'; b.dataset.on=o?'1':''; b.textContent=o?on:off; b.className=o?'uip-btn':'uip-btn2';},
 loadbtn(b,busy,idle){ if(b.dataset.busy) return; b.dataset.busy=1; b.innerHTML=`<span class="uip-spin"></span>${busy}`; setTimeout(()=>{b.innerHTML='✓';setTimeout(()=>{b.textContent=idle;b.dataset.busy=''},900)},1500);},
 spin45(b){b.style.transform=b.style.transform?'':'rotate(45deg)'},
 seg(s){[...s.parentNode.children].forEach(x=>x.classList.toggle('on',x===s))},
 pick(e){[...e.parentNode.children].forEach(x=>x.classList.toggle('on',x===e))},
 tog(e){e.classList.toggle('on')},
 menu(b){const m=b.parentNode.querySelector('.uip-menu'); m.classList.toggle('open');},
 _init(root){ root.querySelectorAll('.uip-ba-l').forEach(l=>{const w=l.parentNode;const sync=()=>{const on=w.classList.contains('on');l.textContent=on?(UIP._L==='en'?'After':'후'):(UIP._L==='en'?'Before':'전');w.querySelector('.uip-ba-b').style.opacity=on?0:1;w.querySelector('.uip-ba-a').style.opacity=on?1:0};sync();w.addEventListener('click',()=>setTimeout(sync,0));const iv=setInterval(()=>{if(!document.body.contains(w))return clearInterval(iv);w.classList.toggle('on');sync()},2400)});
 root.querySelectorAll('.uip-count').forEach(el=>{const n=+el.dataset.n;const run=()=>{const t0=performance.now();const f=x=>{const k=Math.min(1,(x-t0)/1200);el.textContent=Math.round(n*(1-Math.pow(1-k,3))).toLocaleString();if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)};run();const iv=setInterval(()=>{if(!document.body.contains(el))return clearInterval(iv);run()},3000)});
 root.querySelectorAll('.uip-scr').forEach(el=>{const full=el.dataset.text,ch='ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&';let f=0;const iv=setInterval(()=>{if(!document.body.contains(el))return clearInterval(iv);f=(f+1)%40;const k=Math.min(full.length,Math.floor(f/2));el.textContent=full.split('').map((c,i)=>i<k||c===' '?c:ch[Math.floor(Math.random()*ch.length)]).join('')},70)});  root.querySelectorAll('.uip-cal').forEach(el=>{const range=el.dataset.mode==='range';let a=14,b=range?17:null;const draw=()=>{el.innerHTML='<div style="font-weight:500;font-size:12px;margin-bottom:4px">'+(UIP._L==='en'?'Nov 2026':'2026년 11월')+'</div><div style="display:grid;grid-template-columns:repeat(7,20px);gap:2px">'+Array.from({length:21},(_,i)=>{const d=i+8,on=d===a||d===b,mid=b&&d>a&&d<b;return '<span data-d="'+d+'" style="line-height:20px;border-radius:5px;cursor:pointer;'+(on?'background:var(--uip-ac);color:#fff':mid?'background:var(--uip-acbg);color:var(--uip-ac)':'')+'">'+d+'</span>'}).join('')+'</div>'};draw();el.onclick=e=>{const d=+e.target.dataset.d;if(!d)return;if(range){if(b||d<a){a=d;b=null}else b=d}else a=d;draw()}});
 root.querySelectorAll('.uip-rel').forEach(el=>{const L=el.dataset.l.split('|');let k=1;const iv=setInterval(()=>{if(!document.body.contains(el))return clearInterval(iv);k=(k+1)%L.length;el.textContent=L[k]},1400)});  root.querySelectorAll('.uip-stream').forEach(el=>{const full=el.dataset.text;let i=0;const iv=setInterval(()=>{if(!document.body.contains(el))return clearInterval(iv);i=i>full.length+15?0:i+1;el.textContent=full.slice(0,i)},60)});  root.querySelectorAll('.uip-steps').forEach(el=>{ let k=0; const tick=()=>{ if(!document.body.contains(el)) return clearInterval(iv); k=(k+1)%4; el.querySelectorAll('.uip-step').forEach((s,i)=>s.classList.toggle('on',i<k)); }; const iv=setInterval(tick,900); tick(); }); }
};
})();
