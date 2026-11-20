/* Live previews. Key = "l2.item". Each returns HTML for a 130px preview panel.
   t(ko,en) picks the current language. Interactions call window.UIP.fx.* */
(function(){
const D = window.UIP_DEMOS = {};
const A='var(--uip-ac)', S='var(--uip-surface)', BS='var(--uip-bs)', B='var(--uip-b)';
const btn=(txt,extra='')=>`<button class="uip-btn" ${extra}>${txt}</button>`;
const sp=(s=26)=>`<span class="uip-spin" style="width:${s}px;height:${s}px"></span>`;
const ln=(w='70%',c=BS)=>`<div class="uip-ln" style="width:${w};background:${c}"></div>`;

/* ---------- loading ---------- */
D['loading.spinner']=t=>sp(30);
D['loading.skeleton']=t=>`<div style="display:flex;gap:10px;width:80%"><div class="uip-sk" style="width:40px;height:40px;flex:none;border-radius:8px"></div><div style="flex:1"><div class="uip-sk" style="height:10px;margin-bottom:8px"></div><div class="uip-sk" style="height:8px;width:60%"></div></div></div>`;
D['loading.progress']=t=>`<div style="width:72%"><div class="uip-track"><div class="uip-fill" style="animation:uip-fill 2.5s ease-out infinite"></div></div><div class="uip-cap">${t('업로드 중 3/5','Uploading 3/5')}</div></div>`;
D['loading.pull']=t=>`<div style="width:78%;height:100%;position:relative"><div style="position:absolute;top:0;left:0;right:0;display:flex;justify-content:center;animation:uip-pulldown 2.4s ease-in-out infinite">${sp(18)}</div><div style="position:absolute;top:34px;left:0;right:0;animation:uip-pulllist 2.4s ease-in-out infinite">${[1,2,3].map(()=>`<div class="uip-row">${ln('60%')}</div>`).join('')}</div></div>`;
D['loading.button']=t=>`<button class="uip-btn" onclick="UIP.fx.loadbtn(this,'${t('저장 중','Saving')}','${t('저장','Save')}')">${t('저장','Save')}</button>`;
D['loading.dots']=t=>[0,.15,.3].map(d=>`<span class="uip-dot" style="animation-delay:${d}s"></span>`).join('');
D['loading.indeterminate']=t=>`<div style="position:absolute;top:0;left:0;right:0;height:4px;background:${B}"><div style="position:absolute;height:100%;width:40%;background:${A};animation:uip-ind 1.2s ease-in-out infinite"></div></div><span class="uip-cap">${t('페이지 이동 중','Loading page')}</span>`;
D['loading.ring']=t=>`<svg width="62" height="62" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="none" stroke="${B}" stroke-width="4"/><circle cx="24" cy="24" r="20" fill="none" stroke="${A}" stroke-width="4" stroke-linecap="round" stroke-dasharray="126" transform="rotate(-90 24 24)" style="animation:uip-ring 3s ease-out infinite"/></svg>`;
D['loading.pulse']=t=>`<div style="width:75%"><div class="uip-ln" style="height:12px;animation:uip-pulse 1.4s infinite;margin-bottom:8px"></div><div class="uip-ln" style="height:12px;width:60%;animation:uip-pulse 1.4s infinite .2s"></div></div>`;
D['loading.splash']=t=>`<div style="display:flex;flex-direction:column;align-items:center;gap:10px"><div style="width:40px;height:40px;border-radius:12px;background:${A};animation:uip-pulse 1.6s infinite"></div><div class="uip-track" style="width:56px;height:3px"><div class="uip-fill" style="animation:uip-fill 2s ease-out infinite"></div></div></div>`;
D['loading.stepper']=t=>`<div class="uip-steps" data-n="3">${[1,2,3].map((n,i)=>`<span class="uip-step">${n}</span>${i<2?'<span class="uip-stepln"></span>':''}`).join('')}</div>`;

/* ---------- button ---------- */
D['button.primary']=t=>btn(t('다음','Next'),'onclick="UIP.fx.press(this)"');
D['button.secondary']=t=>`<div style="display:flex;gap:8px">${btn(t('다음','Next'))}<button class="uip-btn2">${t('취소','Cancel')}</button></div>`;
D['button.text']=t=>`<div style="display:flex;flex-direction:column;align-items:center;gap:8px">${btn(t('구매하기','Buy now'))}<span class="uip-link">${t('자세히 보기','Learn more')}</span></div>`;
D['button.icon']=t=>`<div style="display:flex;gap:10px">${['♡','⤴','⋯'].map(i=>`<button class="uip-ibtn" onclick="UIP.fx.toggleOn(this)">${i}</button>`).join('')}</div>`;
D['button.sticky']=t=>`<div style="position:absolute;inset:0;padding:10px 14px">${[1,2,3,4].map(()=>`<div class="uip-row">${ln('70%')}</div>`).join('')}</div><div style="position:absolute;left:0;right:0;bottom:0;padding:8px 12px;background:${S};border-top:0.5px solid ${B}"><button class="uip-btn" style="width:100%">${t('장바구니 담기','Add to cart')}</button></div>`;
D['button.fab']=t=>`<div style="position:absolute;inset:12px">${[1,2,3].map(()=>`<div class="uip-row">${ln('75%')}</div>`).join('')}</div><button class="uip-fab" onclick="UIP.fx.spin45(this)">+</button>`;
D['button.loading']=D['loading.button'];
D['button.destructive']=t=>`<div style="display:flex;gap:8px"><button class="uip-btn2">${t('취소','Cancel')}</button><button class="uip-btn" style="background:var(--uip-danger)">${t('삭제','Delete')}</button></div>`;
D['button.toggle']=t=>`<button class="uip-btn2" onclick="UIP.fx.toggleBtn(this,'${t('팔로잉','Following')}','${t('+ 팔로우','+ Follow')}')">${t('+ 팔로우','+ Follow')}</button>`;
D['button.social']=t=>`<div style="display:flex;flex-direction:column;gap:6px;width:72%"><button class="uip-btn" style="background:#191919;color:#fff">${t('간편 로그인','Continue with SSO')}</button><button class="uip-btn2">${t('이메일로 시작','Continue with email')}</button></div>`;
D['button.split']=t=>`<div style="display:flex;position:relative"><button class="uip-btn" style="border-radius:8px 0 0 8px">${t('보내기','Send')}</button><button class="uip-btn" style="border-radius:0 8px 8px 0;border-left:1px solid rgba(255,255,255,.35);padding:0 10px" onclick="UIP.fx.menu(this)">▾</button><div class="uip-menu" style="top:40px;right:0">${t('예약 보내기','Schedule send')}<br>${t('임시 저장','Save draft')}</div></div>`;
D['button.efab']=t=>`<div style="position:absolute;inset:12px">${[1,2,3].map(()=>`<div class="uip-row">${ln('75%')}</div>`).join('')}</div><button class="uip-fab" style="width:auto;padding:0 16px;font-size:13px;border-radius:22px">✎ ${t('글쓰기','Compose')}</button>`;
D['button.group']=t=>`<div class="uip-seg">${[t('왼쪽','Left'),t('가운데','Center'),t('오른쪽','Right')].map((x,i)=>`<span class="${i==1?'on':''}" onclick="UIP.fx.seg(this)">${x}</span>`).join('')}</div>`;

/* ---------- overlay ---------- */
const dim=`<div style="position:absolute;inset:0;background:rgba(10,15,40,.35)"></div>`;
D['overlay.modal']=t=>`${dim}<div class="uip-dlg"><b>${t('정말 나갈까요?','Leave this page?')}</b><div class="uip-cap" style="margin:4px 0 8px">${t('작성 중인 내용이 사라져요','Your draft will be lost')}</div><div style="display:flex;gap:6px"><button class="uip-btn2 sm">${t('취소','Cancel')}</button><button class="uip-btn sm">${t('나가기','Leave')}</button></div></div>`;
D['overlay.sheet']=t=>`${dim}<div class="uip-sheet" style="animation:uip-up 3s ease-in-out infinite"><div class="uip-grab"></div><div style="font-size:12px;font-weight:600;margin-bottom:6px">${t('정렬','Sort by')}</div><div class="uip-cap" style="text-align:left">${t('추천순 · 낮은 가격순 · 리뷰 많은순','Popular · Price · Reviews')}</div></div>`;
D['overlay.toast']=t=>`<div class="uip-toast" style="animation:uip-pop 3.5s infinite">${t('저장했어요','Saved')}</div>`;
D['overlay.alert']=t=>`${dim}<div class="uip-dlg"><b>${t('비밀번호가 변경됐어요','Password updated')}</b><div style="margin-top:10px"><button class="uip-btn sm" style="width:100%">${t('확인','OK')}</button></div></div>`;
D['overlay.confirm']=t=>`${dim}<div class="uip-dlg"><b>${t('삭제할까요?','Delete this?')}</b><div style="display:flex;gap:6px;margin-top:10px"><button class="uip-btn2 sm">${t('취소','Cancel')}</button><button class="uip-btn sm">${t('확인','OK')}</button></div></div>`;
D['overlay.snackbar']=t=>`<div class="uip-snack" style="animation:uip-pop 4s infinite">${t('삭제했어요','Deleted')}<b>${t('실행 취소','Undo')}</b></div>`;
D['overlay.tooltip']=t=>`<span class="uip-tipwrap" tabindex="0">ⓘ<span class="uip-tip">${t('도움말이에요','Here is a hint')}</span></span><span class="uip-cap" style="position:absolute;bottom:8px">${t('아이콘에 올려보세요','Hover the icon')}</span>`;
D['overlay.popup']=t=>`${dim}<div class="uip-dlg" style="padding:0;overflow:hidden;width:62%"><div style="height:44px;background:${A};opacity:.8"></div><div style="padding:8px;font-size:12px"><b>${t('겨울 세일 40%','Winter sale 40%')}</b><div class="uip-cap" style="display:flex;justify-content:space-between;margin-top:6px"><span>${t('오늘 하루 안 보기','Hide today')}</span><span>${t('닫기','Close')}</span></div></div></div>`;
D['overlay.drawer']=t=>`${dim}<div class="uip-drawer" style="animation:uip-slidein 3s ease-in-out infinite">${[t('홈','Home'),t('주문 내역','Orders'),t('설정','Settings')].map((x,i)=>`<div style="padding:6px 0;${i?'':'color:'+A}">${x}</div>`).join('')}</div>`;
D['overlay.popover']=t=>`<div style="position:relative"><button class="uip-ibtn" onclick="UIP.fx.menu(this)">⋯</button><div class="uip-menu" style="top:40px;left:-40px">${t('수정','Edit')}<br>${t('공유','Share')}<br><span style="color:var(--uip-danger)">${t('삭제','Delete')}</span></div></div><span class="uip-cap" style="position:absolute;bottom:8px">${t('눌러보세요','Tap it')}</span>`;
D['overlay.fullscreen']=t=>`<div style="position:absolute;inset:6px;background:${S};border-radius:8px;padding:8px 10px"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:10px"><span>✕</span><b>${t('새 글','New post')}</b><span style="color:${A}">${t('완료','Done')}</span></div>${ln('80%')}<div style="height:6px"></div>${ln('60%')}</div>`;
D['overlay.lightbox']=t=>`<div style="position:absolute;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center"><div style="width:70%;height:64%;border-radius:6px;background:linear-gradient(135deg,#7ea6ff,#c49bff)"></div><span style="position:absolute;top:6px;right:10px;color:#fff">✕</span><span style="position:absolute;left:8px;color:#fff;font-size:20px">‹</span><span style="position:absolute;right:8px;color:#fff;font-size:20px">›</span></div>`;

/* ---------- L1 representative tiles that are not in the pilot ---------- */
D['text.field']=t=>`<div class="uip-field">${t('홍길동','Jane Doe')}<span class="uip-caret"></span></div>`;
D['primary.tabbar']=t=>`<div style="position:absolute;bottom:0;left:0;right:0;height:30px;background:${S};border-top:0.5px solid ${B};display:flex;justify-content:space-around;align-items:center;font-size:11px">${[t('홈','Home'),t('검색','Search'),'MY'].map((x,i)=>`<span style="color:${i?'var(--uip-sub)':A}">${x}</span>`).join('')}</div>${ln('60%')}`;
D['list.grid']=t=>`<div style="display:grid;grid-template-columns:repeat(3,26px);gap:5px">${[1,0,0,0,0,0].map(a=>`<div style="height:20px;border-radius:5px;background:${a?A:BS}"></div>`).join('')}</div>`;
D['chart.bar']=t=>`<div style="display:flex;align-items:flex-end;gap:6px;height:56px">${[24,38,56,32].map((h,i)=>`<div style="width:12px;height:${h}px;border-radius:3px 3px 0 0;background:${i==2?A:BS};transform-origin:bottom;animation:uip-grow 2.5s infinite"></div>`).join('')}</div>`;
D['page.bento']=t=>`<div style="display:grid;grid-template-columns:2fr 1fr;gap:4px;width:62%;height:56px"><div style="border-radius:6px;grid-row:span 2;background:${A}"></div><div class="uip-ln" style="height:auto"></div><div class="uip-ln" style="height:auto"></div></div>`;
D['scroll.fadeup']=t=>`<div style="width:58%">${[0,.2,.4].map((d,i)=>`<div class="uip-ln" style="margin:6px 0;width:${[100,70,45][i]}%;${i==2?'background:'+A+';':''}animation:uip-fadeup 2.4s infinite ${d}s"></div>`).join('')}</div>`;
D['chat.typing']=t=>`<div style="width:78%;display:flex;flex-direction:column;gap:8px"><div style="align-self:flex-end;background:var(--uip-acbg);color:${A};font-size:11px;padding:4px 10px;border-radius:10px">${t('요약해줘','Summarize this')}</div><div style="display:flex;gap:4px;padding:7px 10px;background:${S};border-radius:10px;width:fit-content">${[0,.2,.4].map(d=>`<span class="uip-dot sm" style="animation-delay:${d}s"></span>`).join('')}</div></div>`;
D['icons.hamburger']=t=>`<div style="display:flex;align-items:center;gap:12px;font-size:22px"><span style="animation:uip-pulse 2.4s infinite">≡</span><span class="uip-cap">vs</span><span style="animation:uip-pulse 2.4s infinite 1.2s">⋮</span></div>`;
})();
