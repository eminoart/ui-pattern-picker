/* shared helpers for preview files */
window.UIP_H=(function(){const A='var(--uip-ac)',S='var(--uip-surface)',B='var(--uip-b)',BS='var(--uip-bs)',M='var(--uip-mute)',SUB='var(--uip-sub)',DG='var(--uip-danger)';
const ln=(w='70%',c=BS,h=7)=>`<div class="uip-ln" style="width:${w};background:${c};height:${h}px"></div>`;
const rows=(n,w='75%')=>Array.from({length:n},(_,i)=>`<div class="uip-row">${ln(i%2?'55%':w)}</div>`).join('');
const col=(x,w='84%',g=6)=>`<div style="width:${w};display:flex;flex-direction:column;gap:${g}px">${x}</div>`;
const rowf=(x,g=6,ex='')=>`<div style="display:flex;align-items:center;gap:${g}px;${ex}">${x}</div>`;
const box=(x,ex='')=>`<div class="uip-box" style="padding:8px 10px;${ex}">${x}</div>`;
const chips=(arr,on=0,click=true)=>arr.map((x,i)=>`<span class="uip-chip${i===on?' on':''}" ${click?'onclick="UIP.fx.pick(this)"':''}>${x}</span>`).join('');
const btn=(x,ex='')=>`<button class="uip-btn" style="${ex}">${x}</button>`;
const btn2=(x,ex='')=>`<button class="uip-btn2" style="${ex}">${x}</button>`;
const sp=(s=22)=>`<span class="uip-spin" style="width:${s}px;height:${s}px"></span>`;
const phone=(x,ex='')=>`<div class="uip-ph" style="${ex}">${x}</div>`;
const cap=x=>`<span class="uip-cap abs">${x}</span>`;
const dim=`<div style="position:absolute;inset:0;background:rgba(10,15,40,.35)"></div>`;
const ic=(x,s=18,ex='')=>`<span style="font-size:${s}px;line-height:1;${ex}">${x}</span>`;
const vs=(a,b)=>`<div class="uip-vs"><div style="display:flex;flex-direction:column;align-items:center;gap:4px">${a}</div><i>vs</i><div style="display:flex;flex-direction:column;align-items:center;gap:4px">${b}</div></div>`;
const tag=(x,c=A,bg='var(--uip-acbg)')=>`<span style="font-size:11px;padding:2px 8px;border-radius:999px;background:${bg};color:${c}">${x}</span>`;
const sw=(on)=>`<span onclick="UIP.fx.tog(this);this.firstChild.style.transform=this.classList.contains('on')?'translateX(16px)':'';this.style.background=this.classList.contains('on')?'${A}':'${BS}'" class="${on?'on':''}" style="display:inline-block;width:38px;height:22px;border-radius:11px;background:${on?A:BS};padding:3px;cursor:pointer;transition:.2s;vertical-align:middle"><span style="display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:.2s;${on?'transform:translateX(16px)':''}"></span></span>`;
return {A,S,B,BS,M,SUB,DG,ln,rows,col,rowf,box,chips,btn,btn2,sp,phone,cap,dim,ic,vs,tag,sw};})();
