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
 ko:{map:'UI 지도',mapH:'어떤 걸 하고 싶으세요?',l1H:'어떤 걸 찾으세요?',kinds:'종류',items:'개',patterns:'패턴',pick:'이걸로 ↗',view:'카드로 보기 ↗',home:'← 처음으로',prev:'‹ 이전',next:'다음 ›',
  popular:'많이 씀',top:'인기',pairs:'헷갈리는 짝 보기 ↗',others:'의 다른 종류 ↗',toMap:'UI 지도로 ↗',soon:'미리보기 준비 중',
  note:'순서는 많이 쓰이는 정도를 기준으로 한 경험적 판단이에요. 용어를 몰라도 상황을 말로 적으면 찾아 드려요.',
  l2H:n=>`"${n} 넣어줘" 대신 이 이름으로 말해 보세요`,showQ:n=>`${n} 보여줘`,pairsQ:n=>`${n} 헷갈리는 짝 보여줘`,mapQ:'UI 뭐가 있어',
  pickQ:(k,e,l1,l2)=>`UI 패턴 선택: ${k} (${e}) — ${l1} › ${l2}`},
 en:{map:'UI map',mapH:'What do you want to do?',l1H:'What are you looking for?',kinds:'kinds',items:'',patterns:'patterns',pick:'Use this ↗',view:'See cards ↗',home:'← Back to map',prev:'‹ Prev',next:'Next ›',
  popular:'Popular',top:'Top',pairs:'Look-alike pairs ↗',others:': other kinds ↗',toMap:'UI map ↗',soon:'Preview coming soon',
  note:'Order reflects how commonly each is used (a judgment call, not measured data). You can also just describe the situation.',
  l2H:n=>`Say the exact name instead of "add some ${n.toLowerCase()}"`,showQ:n=>`Show me ${n}`,pairsQ:n=>`Show look-alike ${n} pairs`,mapQ:'What UI patterns are there',
  pickQ:(k,e,l1,l2)=>`UI pattern picked: ${e} — ${l1} › ${l2}`}
};

let IDX=null;
function index(){ if(IDX) return IDX; IDX={l1:{},l2:{}};
 CAT.forEach(g=>{IDX.l1[g.id]=g; g.l2.forEach(c=>{
  c.list=c.items.split(';').map(s=>{const p=s.split('~');return {id:p[0],ko:p[1],en:p[2],hko:p[3]||'',hen:p[4]||''}});
  c.parent=g; IDX.l2[c.id]=c; });}); return IDX; }

function injectCss(){ if(document.getElementById('uip-css')) return; const s=document.createElement('style'); s.id='uip-css'; s.textContent=CSS; document.head.appendChild(s); }
const send=q=>{ if(typeof window.sendPrompt==='function') window.sendPrompt(q); else { try{navigator.clipboard.writeText(q)}catch(e){} alert&&0; } };
UIP._send=send;

function name(o,L,both){ return L==='ko'? (both? `${o.ko} <span style="color:var(--uip-sub);font-weight:400">${o.en}</span>`:o.ko) : o.en; }
function demo(key,L){ const f=D[key]; const t=(k,e)=>L==='ko'?k:e; return f? f(t) : `<div class="uip-soon">${TX[L].soon}</div>`; }
function esc(s){return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;')}
function pager(st,total,rerender){ if(total<=PER) return ''; const pages=Math.ceil(total/PER), T=TX[st.L];
 const id='p'+Math.random().toString(36).slice(2,7); UIP['_'+id]=d=>{st.page=(st.page+d+pages)%pages; rerender();};
 return `<div class="uip-nav"><button onclick="UIP._${id}(-1)">${T.prev}</button><span class="uip-pi">${st.page+1} / ${pages}</span><button onclick="UIP._${id}(1)">${T.next}</button></div>`; }

function renderMap(root,st){ const I=index(), T=TX[st.L]; const all=CAT;
 const tot=all.reduce((a,g)=>a+g.l2.reduce((b,c)=>b+c.list.length,0),0), kinds=all.reduce((a,g)=>a+g.l2.length,0);
 const s=st.page*PER, slice=all.slice(s,s+PER);
 root.innerHTML=`<div class="uip-head"><div><span class="uip-badge">${T.map} · ${all.length} · ${kinds}${st.L==='ko'?'종류':' kinds'} · ${tot}${st.L==='ko'?'개':' patterns'}</span><p class="uip-h">${T.mapH}</p></div></div>
 <div class="uip-grid">${slice.map((g,i)=>{const n=g.l2.reduce((b,c)=>b+c.list.length,0);return `<div class="uip-card tile" data-l1="${g.id}"><div class="uip-pv">${demo(g.rep,st.L)}</div><p class="uip-n"><b>${String(s+i+1).padStart(2,'0')}</b>${st.L==='ko'?g.ko:g.en}</p><p class="uip-e">${st.L==='ko'?g.en:''}</p><p class="uip-c">${g.l2.length} ${T.kinds} · ${n}${T.items||' '+T.patterns}</p></div>`}).join('')}</div>
 ${pager(st,all.length,()=>renderMap(root,st))}<p class="uip-note">${T.note}</p>`;
 root.querySelectorAll('[data-l1]').forEach(el=>el.onclick=e=>{ if(e.target.closest('button,input,.uip-btn')) return; const sub={L:st.L,page:0,back:()=>renderMap(root,st)}; renderL1(root,sub,el.dataset.l1);});
}

function renderL1(root,st,id){ const g=index().l1[id], T=TX[st.L]; const s=st.page*PER, slice=g.l2.slice(s,s+PER);
 root.innerHTML=`<div class="uip-head"><div><span class="uip-badge">${st.L==='ko'?g.ko:g.en} · ${g.l2.length} ${T.kinds}</span><p class="uip-h">${T.l1H}</p></div>${st.back?`<button class="uip-back">${T.home}</button>`:`<button class="uip-back">${T.toMap}</button>`}</div>
 <div class="uip-grid">${slice.map((c,i)=>{const lab=st.L==='ko'?c.easy[0]:c.easy[1];const top=c.list.slice(0,3).map(x=>st.L==='ko'?x.ko:x.en).join(' · ');return `<div class="uip-card tile" data-l2="${c.id}"><div class="uip-pv">${demo(c.id+'.'+c.list[0].id,st.L)}</div><p class="uip-n"><b>${s+i+1}</b>${lab}</p><p class="uip-e">${st.L==='ko'?c.ko+' '+c.en:c.en}</p><p class="uip-c">${c.list.length} ${T.patterns}</p><p class="uip-x">${T.top}: ${top}</p><p class="uip-c">${T.view}</p></div>`}).join('')}</div>
 ${pager(st,g.l2.length,()=>renderL1(root,st,id))}`;
 root.querySelector('.uip-back').onclick=()=> st.back? st.back() : send(T.mapQ);
 root.querySelectorAll('[data-l2]').forEach(el=>el.onclick=e=>{ if(e.target.closest('button,input,.uip-btn')) return; const c=index().l2[el.dataset.l2]; send(T.showQ(st.L==='ko'?c.ko:c.en)); });
}

function renderL2(root,st,id,hl){ const c=index().l2[id], g=c.parent, T=TX[st.L];
 if(hl && st.page===0 && !st._jumped){ const k=c.list.findIndex(x=>x.id===hl); if(k>=0) st.page=Math.floor(k/PER); st._jumped=1; }
 const s=st.page*PER, slice=c.list.slice(s,s+PER), cn=st.L==='ko'?c.ko:c.en, gn=st.L==='ko'?g.ko:g.en;
 root.innerHTML=`<div class="uip-head"><div><span class="uip-badge">${gn} › ${cn} ${c.list.length}${st.L==='ko'?'가지':''}</span><p class="uip-h">${T.l2H(cn)}</p></div></div>
 <div class="uip-grid">${slice.map((x,i)=>{const n=s+i;const hint=st.L==='ko'?x.hko:x.hen;return `<div class="uip-card${x.id===hl?' hl':''}"><div class="uip-pv">${demo(c.id+'.'+x.id,st.L)}</div><p class="uip-n"><b>${String(n+1).padStart(2,'0')}</b>${st.L==='ko'?x.ko:x.en}${n<3?`<span class="uip-tag">${T.popular}</span>`:''}</p><p class="uip-e">${st.L==='ko'?x.en:''}</p><p class="uip-x">${hint}</p><button class="uip-pick" data-q="${esc(T.pickQ(x.ko,x.en,gn,cn))}">${T.pick}</button></div>`}).join('')}</div>
 ${pager(st,c.list.length,()=>renderL2(root,st,id,hl))}
 <div class="uip-foot"><button data-q="${esc(T.pairsQ(cn))}">${T.pairs}</button><button data-q="${esc(T.showQ(gn))}">${gn}${T.others}</button><button data-q="${esc(T.mapQ)}">${T.toMap}</button></div>`;
 root.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>send(b.dataset.q.replace(/\\'/g,"'")));
 UIP.fx._init(root);
}

UIP.show=function(elId,target,lang){ injectCss(); index(); const root=document.getElementById(elId); root.classList.add('uip');
 const L=(lang==='en')?'en':'ko', st={L,page:0}; target=(target||'map').trim();
 if(target==='map') return renderMap(root,st);
 if(IDX.l1[target]) return renderL1(root,st,target);
 const [a,b]=target.split('.'); if(IDX.l2[a]) return renderL2(root,st,a,b);
 const q=target.toLowerCase(); const hit=Object.values(IDX.l2).find(c=>c.ko===target||c.en.toLowerCase()===q);
 if(hit) return renderL2(root,st,hit.id);
 renderMap(root,st);
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
 menu(b){const m=b.parentNode.querySelector('.uip-menu'); m.classList.toggle('open');},
 _init(root){ root.querySelectorAll('.uip-steps').forEach(el=>{ let k=0; const tick=()=>{ if(!document.body.contains(el)) return clearInterval(iv); k=(k+1)%4; el.querySelectorAll('.uip-step').forEach((s,i)=>s.classList.toggle('on',i<k)); }; const iv=setInterval(tick,900); tick(); }); }
};
})();
