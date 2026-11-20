/* UI Pattern Picker catalog: L1 > L2 > items, ordered by popularity.
   item string: id~Korean~English~Korean hint~English hint (hints optional) */
window.UIP_CATALOG = [
 {id:'act',ko:'누르고 고르기',en:'Actions & Selection',rep:'button.primary',l2:[
  {id:'button',ko:'버튼',en:'Button',easy:['누르는 것','Things to tap'],items:
   'primary~기본 버튼~Primary button~화면의 핵심 행동 하나~The one main action;secondary~보조 버튼~Secondary button~두 번째로 중요한 행동~The second action;text~텍스트 버튼~Text button~가벼운 행동, 링크처럼~Light, link-like action;icon~아이콘 버튼~Icon button~글자 없이 아이콘만~Icon only, no label;sticky~하단 고정 버튼~Sticky CTA~스크롤해도 아래에 붙어 있음~Stays at the bottom while scrolling;fab~플로팅 버튼~FAB~화면 위에 떠 있는 + 버튼~Floating action button;loading~로딩 버튼~Loading button~누른 뒤 처리 중 표시~Shows progress after tap;destructive~위험 버튼~Destructive button~삭제처럼 되돌리기 어려운 행동~For delete and irreversible acts;toggle~토글 버튼~Toggle button~눌러서 켜고 끄기~Press to switch on and off;social~소셜 로그인 버튼~Social login button~버튼 하나로 가입~Sign up in one tap;split~분할 버튼~Split button~주 행동 + 옆 화살표 메뉴~Main action plus a menu arrow;efab~확장 FAB~Extended FAB~아이콘 + 글자가 함께 떠 있음~Floating button with a label;group~버튼 그룹~Button group~관련 버튼을 한 줄로~Related buttons in one row'},
  {id:'states',ko:'버튼 상태',en:'Button states',easy:['버튼의 여러 얼굴','The faces of a button'],items:'default~기본~Default;pressed~눌림~Pressed;disabled~비활성~Disabled;loading~로딩~Loading;hover~호버~Hover;focus~포커스~Focus;selected~선택됨~Selected;success~성공~Success;error~오류~Error'},
  {id:'share',ko:'공유',en:'Share',easy:['보내고 퍼뜨리기','Send and spread'],items:'sheet~공유 시트~Share sheet;copy~링크 복사~Copy link;ios~iOS 공유 아이콘~Share on iOS;android~안드로이드 공유 아이콘~Share on Android;send~보내기~Send;forward~전달~Forward;repost~리포스트~Repost;qr~QR 공유~QR code;nearby~근처 공유~Nearby share'},
  {id:'selection',ko:'선택 컨트롤',en:'Selection controls',easy:['켜고 끄고 고르는 것','Switch and choose'],items:'switch~스위치~Switch;checkbox~체크박스~Checkbox;radio~라디오~Radio button;chip~칩~Chip;segmented~세그먼트 컨트롤~Segmented control;slider~슬라이더~Slider;stepper~스테퍼(±)~Stepper;rating~별점~Rating;range~범위 슬라이더~Range slider;card~선택 카드~Selectable card;color~컬러 피커~Color picker;thumbs~좋아요·싫어요~Thumbs up/down'},
  {id:'menu',ko:'드롭다운·메뉴',en:'Menus & Pickers',easy:['목록에서 고르는 것','Pick from a list'],items:'dropdown~드롭다운~Dropdown;select~셀렉트~Select;kebab~케밥 메뉴~Kebab menu;context~컨텍스트 메뉴~Context menu;action~액션 시트~Action sheet;combobox~콤보박스~Combobox;multi~멀티 셀렉트~Multi-select;wheel~휠 피커~Wheel picker;tree~트리 셀렉트~Tree select;cascader~캐스케이드~Cascader'},
  {id:'date',ko:'날짜·시간 선택',en:'Date & Time',easy:['날짜·시간 고르기','Pick a date or time'],items:'calendar~캘린더~Calendar;range~기간 선택~Date range;chips~빠른 선택 칩~Quick chips;wheel~휠 피커~Wheel picker;slots~시간 슬롯~Time slots;week~주간 스트립~Week strip;input~날짜 입력~Date input;checkin~체크인·체크아웃~Check-in/out;month~월 선택~Month picker;relative~상대 날짜~Relative date;recur~반복 설정~Recurrence;time~시간 피커~Time picker;tz~타임존 선택~Time zone'}]},
 {id:'input',ko:'입력받기',en:'Input & Forms',rep:'text.field',l2:[
  {id:'text',ko:'입력창',en:'Text input',easy:['글자 적는 칸','Fields to type in'],items:'field~텍스트 필드~Text field;password~비밀번호 보기~Password reveal;error~오류 문구~Error message;helper~도움말~Helper text;floating~플로팅 라벨~Floating label;otp~OTP 입력~OTP input;textarea~텍스트에어리어~Textarea;clear~지우기 버튼~Clear button;counter~글자 수 카운터~Character counter;tag~태그 입력~Tag input;mask~입력 마스크~Input mask;rich~리치 텍스트 에디터~Rich text editor'},
  {id:'search',ko:'검색',en:'Search',easy:['찾기','Finding things'],items:'bar~검색창~Search bar;auto~자동완성~Autocomplete;recent~최근 검색어~Recent searches;filter~필터 칩~Filter chips;sort~정렬~Sort;trend~인기 검색어~Trending;none~결과 없음~No results;highlight~검색어 강조~Highlight;scope~검색 범위 탭~Scope tabs;panel~필터 패널~Filter panel;facet~패싯 필터~Faceted filter;voice~음성 검색~Voice search'},
  {id:'form',ko:'폼 구성',en:'Forms',easy:['여러 칸을 묶어 받기','Collecting many fields'],items:'single~한 화면 폼~Single-page form;multi~단계형 폼~Multi-step form;inline~인라인 검증~Inline validation;required~필수·선택 표시~Required / Optional;terms~약관 동의~Terms agreement;address~주소 검색~Address lookup;fieldset~폼 그룹~Fieldset;autosave~자동 저장~Autosave;edit~인라인 편집~Inline edit'},
  {id:'upload',ko:'업로드',en:'Upload',easy:['파일·사진 받기','Files and photos'],items:'picker~파일 선택~File picker;drop~드래그 앤 드롭~Drag & drop zone;image~사진 업로드~Image upload;progress~업로드 진행~Upload progress;crop~이미지 자르기~Image crop;avatar~아바타 업로드~Avatar upload;camera~카메라 촬영~Camera capture;sign~서명 패드~Signature pad;voice~음성 녹음~Voice recorder'}]},
 {id:'feedback',ko:'알리고 기다리게 하기',en:'Feedback & Status',rep:'loading.spinner',l2:[
  {id:'loading',ko:'로딩',en:'Loading',easy:['기다리는 동안 보여주기','While people wait'],items:
   'spinner~스피너~Spinner~짧게 기다릴 때~Short waits;skeleton~스켈레톤~Skeleton~화면 모양을 미리 깔아 둠~Shows the layout before data;progress~프로그레스 바~Progress bar~얼마나 남았는지~How much is left;pull~당겨서 새로고침~Pull to refresh~목록을 아래로 당김~Pull the list down;button~로딩 버튼~Loading button~누른 버튼 안에서 처리 중~Busy state inside the button;dots~점 로더~Dot loader~챗봇이 답을 쓰는 중~A chatbot is typing;indeterminate~무한 로딩 바~Indeterminate bar~끝을 알 수 없을 때~When the end is unknown;ring~진행 링~Progress ring~퍼센트를 원으로~Percent as a circle;pulse~펄스~Pulse~스켈레톤의 깜빡이는 버전~Skeleton that blinks;splash~스플래시 로더~Splash loader~앱 켤 때 로고와 함께~App launch with logo;stepper~단계 표시~Stepper~여러 단계 중 어디인지~Which step you are on'},
  {id:'overlay',ko:'오버레이 창',en:'Overlays',easy:['화면 위에 뜨는 창','Things that pop up'],items:
   'modal~모달~Modal~꼭 답해야 하는 창~Must respond to continue;sheet~바텀시트~Bottom sheet~아래서 올라오는 판~Slides up from the bottom;toast~토스트~Toast~잠깐 떴다 사라짐~Appears briefly, then fades;alert~알럿~Alert~확인 버튼만~OK button only;confirm~컨펌~Confirm~확인 + 취소~OK plus Cancel;snackbar~스낵바~Snackbar~실행 취소 버튼 포함~Includes an Undo action;tooltip~툴팁~Tooltip~가리키면 짧은 설명~Short hint on hover;popup~팝업~Popup~공지·광고 창~Notice or promo window;drawer~드로어~Drawer~옆에서 밀려 나옴~Slides in from the side;popover~팝오버~Popover~누르면 작은 메뉴·내용~Small panel on tap;fullscreen~풀스크린 모달~Fullscreen modal~화면 전체를 덮음~Covers the whole screen;lightbox~라이트박스~Lightbox~사진을 크게 보기~Enlarged photo view'},
  {id:'notification',ko:'알림',en:'Notifications',easy:['새 소식 알려주기','Telling about news'],items:'badge~배지~Badge;dot~닷~Dot;banner~배너~Banner;push~푸시 알림~Push notification;center~알림 센터~Notification center;announce~공지 바~Announcement bar;inline~인라인 알림~Inline alert;live~라이브 액티비티~Live activity;coach~코치마크~Coach mark'},
  {id:'completion',ko:'완료 표시',en:'Completion feedback',easy:['다 됐다고 알려주기','Saying it is done'],items:'check~체크 그리기~Check animation;strike~할 일 줄긋기~Strikethrough;screen~완료 화면~Success screen;progress~진행률 완료~Progress complete;send~보냄 애니메이션~Send animation;morph~버튼 모핑~Button morph;confetti~컨페티~Confetti;badge~배지 획득~Badge unlock;stamp~스탬프~Stamp'},
  {id:'state',ko:'상태 화면',en:'Empty & Error states',easy:['비었거나 문제가 있을 때','Empty or broken'],items:'empty~빈 화면~Empty state;none~결과 없음~No results;error~에러 화면~Error state;success~성공 화면~Success state;tag~상태 태그~Status tag;offline~오프라인 배너~Offline banner;404~404 페이지~Not found;denied~권한 거절~Denied state;maint~점검 중~Maintenance;disabled~비활성 상태~Disabled state'},
  {id:'permission',ko:'권한 요청',en:'Permissions',easy:['허락 받기','Asking for access'],items:'notif~알림 권한~Notification;location~위치 권한~Location;system~시스템 모달~System dialog;pre~미리 안내~Pre-permission;camera~카메라 권한~Camera;limited~일부만 허용~Limited access;settings~설정으로 보내기~Go to settings;reprompt~다시 묻기~Re-prompt;denied~거절 뒤 화면~Denied state;cookie~쿠키 동의~Cookie consent'}]},
 {id:'nav',ko:'이동하기',en:'Navigation',rep:'primary.tabbar',l2:[
  {id:'primary',ko:'메인 내비',en:'Primary navigation',easy:['앱의 큰 메뉴','The main menu'],items:'tabbar~하단 탭 바~Bottom tab bar;topbar~상단 바~Top app bar;sidebar~사이드바~Sidebar;hamburger~햄버거 메뉴~Hamburger menu;gnb~글로벌 내비~Global nav (GNB);mega~메가 메뉴~Mega menu;rail~내비게이션 레일~Navigation rail;command~커맨드 팔레트~Command palette;floating~플로팅 내비~Floating nav'},
  {id:'tabs',ko:'탭',en:'Tabs',easy:['화면 안에서 바꿔 보기','Switch views in place'],items:'tabs~상단 탭~Tabs;segmented~세그먼트 탭~Segmented tabs;scroll~스크롤 탭~Scrollable tabs;chip~칩 탭~Chip tabs;sticky~스티키 탭~Sticky tabs;vertical~세로 탭~Vertical tabs;icon~아이콘 탭~Icon tabs'},
  {id:'wayfinding',ko:'페이지 이동',en:'Wayfinding',easy:['앞뒤·다음 페이지로','Back, next, more'],items:'back~뒤로가기~Back button;infinite~무한 스크롤~Infinite scroll;more~더보기 버튼~Load more;pagination~페이지네이션~Pagination;breadcrumb~브레드크럼~Breadcrumb;stepper~단계 표시~Stepper;top~맨 위로~Back to top;toc~목차~Table of contents;prevnext~이전·다음 글~Prev / Next'}]},
 {id:'display',ko:'보여주기',en:'Content Display',rep:'list.grid',l2:[
  {id:'list',ko:'목록',en:'Lists & Grids',easy:['여러 개 늘어놓기','Showing many items'],items:'list~리스트~List;grid~그리드~Grid;carousel~캐러셀~Carousel;feed~피드~Feed;accordion~아코디언~Accordion;swipe~스와이프 리스트~Swipe list;timeline~타임라인~Timeline;masonry~메이슨리~Masonry;kanban~칸반~Kanban;reorder~드래그 정렬~Reorderable list;sectioned~섹션 리스트~Sectioned list;tree~트리~Tree view'},
  {id:'card',ko:'카드',en:'Cards',easy:['상자로 묶어 보여주기','Content in boxes'],items:'product~상품 카드~Product card;media~미디어 카드~Media card;list~리스트 카드~List card;profile~프로필 카드~Profile card;stat~통계 카드~Stat card;pricing~가격표 카드~Pricing card;swipe~스와이프 카드~Swipe card;expand~확장 카드~Expandable card;flip~플립 카드~Flip card'},
  {id:'table',ko:'테이블',en:'Tables',easy:['표로 보여주기','Rows and columns'],items:'basic~기본 테이블~Basic table;sort~정렬 헤더~Sortable header;select~행 선택~Row selection;sticky~고정 헤더~Sticky header;expand~확장 행~Expandable row;edit~셀 편집~Editable cell;compare~비교표~Comparison table;grid~데이터 그리드~Data grid;pivot~피벗~Pivot table'},
  {id:'media',ko:'미디어',en:'Media',easy:['사진·영상 보여주기','Photos and video'],items:'gallery~이미지 갤러리~Image gallery;stories~스토리~Stories;video~비디오 플레이어~Video player;lightbox~라이트박스~Lightbox;thumbs~썸네일 그리드~Thumbnail grid;audio~오디오 플레이어~Audio player;beforeafter~전후 비교~Before/After slider;zoom~핀치 줌~Pinch zoom;360~360° 뷰어~360 viewer'},
  {id:'people',ko:'사람·프로필',en:'People',easy:['사람 보여주기','Showing people'],items:'avatar~아바타~Avatar;group~아바타 그룹~Avatar group;header~프로필 헤더~Profile header;comment~댓글~Comment;review~리뷰~Review;follow~팔로우 버튼~Follow button;verified~인증 배지~Verified badge;presence~온라인 표시~Presence dot;hover~호버 카드~Hover card'}]},
 {id:'data',ko:'숫자 보여주기',en:'Data Visualization',rep:'chart.bar',l2:[
  {id:'chart',ko:'차트',en:'Charts',easy:['그래프로 비교·추이','Compare and trend'],items:'bar~막대 그래프~Bar chart;line~선 그래프~Line chart;donut~도넛 차트~Donut chart;area~영역 그래프~Area chart;stacked~누적 막대~Stacked bar;spark~스파크라인~Sparkline;heatmap~히트맵~Heatmap;scatter~산점도~Scatter plot;funnel~퍼널~Funnel;candle~캔들스틱~Candlestick;radar~레이더~Radar chart;treemap~트리맵~Treemap;sankey~산키~Sankey'},
  {id:'metric',ko:'지표 위젯',en:'Metric widgets',easy:['핵심 숫자 하나','One key number'],items:'kpi~KPI 카드~KPI card;ring~진행 링~Progress ring;bar~진행 바~Progress bar;delta~증감 표시~Delta indicator;gauge~게이지~Gauge;goal~목표 대비~Goal tracker;leader~리더보드~Leaderboard;countup~카운트업 숫자~Count-up;bullet~불릿 차트~Bullet chart'},
  {id:'map',ko:'지도',en:'Maps',easy:['위치·지도','Places and maps'],items:'marker~마커 지도~Marker map;cluster~마커 클러스터~Marker cluster;route~경로 표시~Route;me~내 위치~Current location;list~지도+목록~Map + list;choropleth~단계구분도~Choropleth;live~실시간 추적~Live tracking'}]},
 {id:'layout',ko:'화면 구성',en:'Layout & Screens',rep:'page.bento',l2:[
  {id:'page',ko:'페이지 레이아웃',en:'Page layouts',easy:['화면 나누는 방식','How a screen is divided'],items:'cardgrid~카드 그리드~Card grid;sidebar~사이드바 레이아웃~Sidebar layout;hero~히어로~Hero;bento~벤토 그리드~Bento grid;dashboard~대시보드~Dashboard;split~스플릿~Split screen;masterdetail~마스터-디테일~Master-detail;magazine~매거진~Magazine;fullbleed~풀블리드~Full bleed;f~F 패턴~F-pattern;z~Z 패턴~Z-pattern;holygrail~홀리그레일~Holy grail'},
  {id:'landing',ko:'랜딩 섹션',en:'Landing sections',easy:['홈페이지 한 덩어리씩','Website sections'],items:'hero~히어로 섹션~Hero section;features~기능 소개~Feature grid;pricing~가격표~Pricing table;testimonials~고객 후기~Testimonials;logos~로고 띠~Logo cloud;faq~FAQ~FAQ;cta~CTA 배너~CTA banner;footer~푸터~Footer;stats~숫자 강조~Stats band;compare~비교 섹션~Comparison'},
  {id:'screens',ko:'앱 필수 화면',en:'Key screens',easy:['앱마다 있는 화면','Screens every app has'],items:'login~로그인~Login;signup~회원가입~Sign up;onboarding~온보딩~Onboarding;splash~스플래시~Splash;settings~설정~Settings;cart~장바구니~Cart;checkout~결제~Checkout;profile~마이페이지~Profile;detail~상품 상세~Product detail;orders~주문 내역~Order history;welcome~웰컴~Welcome;paywall~유료 전환~Paywall'}]},
 {id:'style',ko:'느낌·움직임',en:'Style & Motion',rep:'scroll.fadeup',l2:[
  {id:'visual',ko:'비주얼 스타일',en:'Visual styles',easy:['전체 분위기','Overall look'],items:'minimal~미니멀~Minimal;dark~다크 모드~Dark mode;flat~플랫~Flat;glass~글래스모피즘~Glassmorphism;bento~벤토~Bento;neobrutal~네오 브루탈리즘~Neo-brutalism;material~머티리얼~Material;clay~클레이모피즘~Claymorphism;neu~뉴모피즘~Neumorphism;skeuo~스큐어모피즘~Skeuomorphism;y2k~Y2K~Y2K;retro~레트로~Retro'},
  {id:'modern',ko:'모던한 느낌 요소',en:'Modern details',easy:['"모던하게"의 정체','What "modern" means'],items:'space~넉넉한 여백~White space;rounded~둥근 모서리~Rounded corners;accent~포인트 색 하나~One accent color;bigtype~큰 제목~Big type;cards~카드로 묶기~Card layout;shadow~옅은 그림자~Soft shadow;grays~회색 단계~Neutral grays;hairline~얇은 구분선~Hairline divider;icons~아이콘 일관성~Consistent icons'},
  {id:'type',ko:'글자 스타일',en:'Typography styles',easy:['글자 분위기','Lettering mood'],items:'minimal~미니멀~Minimal;editorial~에디토리얼~Editorial;chunky~청키~Chunky;gradient~그라데이션~Gradient;mono~모노스페이스~Monospace;swiss~스위스~Swiss;outline~아웃라인~Outline;neobrutal~네오 브루탈리즘~Neo-brutalism;kinetic~키네틱~Kinetic;hand~핸드레터링~Hand lettering;pixel~픽셀~Pixel;groovy~레트로 그루비~Retro groovy;neon~네온~Neon;brutal~브루탈리즘~Brutalism'},
  {id:'text',ko:'텍스트 등장',en:'Text animation',easy:['글자가 나타나는 방식','How text appears'],items:'typewriter~타이핑~Typewriter;fadeup~페이드 업~Fade up;countup~카운트 업~Count up;highlight~하이라이트~Highlight;stagger~글자 순차 등장~Letter stagger;rotate~단어 교체~Word rotate;mask~마스크 리빌~Mask reveal;blur~블러 인~Blur in;scramble~스크램블~Scramble'},
  {id:'scroll',ko:'스크롤 모션',en:'Scroll motion',easy:['스크롤할 때 움직임','Motion on scroll'],items:'fadeup~페이드 업~Fade up;sticky~스티키 헤더~Sticky header;horizontal~가로 스크롤~Horizontal scroll;parallax~패럴랙스~Parallax;stagger~스태거~Stagger;progress~읽기 진행 바~Reading progress;scale~스케일 인~Scale in;reveal~텍스트 리빌~Text reveal;snap~스냅 스크롤~Scroll snap;story~스크롤텔링~Scrollytelling'},
  {id:'micro',ko:'마이크로인터랙션',en:'Micro-interactions',easy:['누를 때 반응','Feedback on tap'],items:'like~하트 팝~Like burst;press~눌림 효과~Press scale;ripple~리플~Ripple;swipe~스와이프 액션~Swipe action;shake~흔들림~Shake;bounce~바운스~Bounce;check~성공 체크 애니~Success check;confetti~컨페티~Confetti;haptic~햅틱~Haptic;hover~호버 리프트~Hover lift'},
  {id:'transition',ko:'화면 전환',en:'Screen transitions',easy:['화면 넘어갈 때','Moving between screens'],items:'push~푸시~Push;modal~모달 등장~Modal present;tab~탭 전환~Tab switch;fadethrough~페이드 스루~Fade through;sheet~시트 확장~Sheet expand;card~카드 확장~Card expand;shared~공유 요소~Shared element;zoom~줌~Zoom;stagger~순차 등장~Stagger in;crossfade~크로스페이드~Crossfade;morph~모핑~Morph;curl~페이지 넘김~Page curl'}]},
 {id:'ai',ko:'AI·대화',en:'AI & Chat',rep:'chat.typing',l2:[
  {id:'chat',ko:'채팅 UI',en:'Chat UI',easy:['채팅 화면','Chat screens'],items:'bubble~말풍선~Chat bubble;prompt~프롬프트 입력창~Prompt input;typing~타이핑 표시~Typing indicator;stream~스트리밍 텍스트~Streaming text;suggest~추천 질문 칩~Suggested prompts;regen~복사·다시 생성~Copy / Regenerate;feedback~피드백 버튼~Feedback thumbs;cite~출처 표시~Citations;attach~파일 첨부~Attachment;voice~음성 입력~Voice input'},
  {id:'aistate',ko:'AI 작업 표시',en:'AI states',easy:['AI가 일하는 중','While AI works'],items:'thinking~생각 중~Thinking indicator;steps~단계 진행~Step progress;inline~인라인 제안~Inline suggestion;label~AI 라벨~AI label;diff~변경 수락·거절~Diff accept/reject;copilot~사이드 패널 어시스턴트~Side panel copilot;sparkle~스파크 버튼~Sparkle button;generating~생성 중 자리 표시~Generating placeholder'}]},
 {id:'pairs',ko:'헷갈리는 짝',en:'Look-alike pairs',rep:'icons.hamburger',l2:[
  {id:'uipairs',ko:'UI 짝',en:'UI pairs',easy:['비슷해 보이는 UI','UI that looks alike'],items:'dropdown~드롭다운 vs 셀렉트~Dropdown vs Select;buttonlink~버튼 vs 링크~Button vs Link;cardlist~카드 vs 리스트~Card vs List;bars~앱 바 vs 탭 바~App bar vs Tab bar;bannerpopup~배너 vs 팝업~Banner vs Popup;fabicon~FAB vs 아이콘 버튼~FAB vs Icon button;avatarthumb~아바타 vs 썸네일~Avatar vs Thumbnail;carousel~캐러셀 vs 가로 스크롤~Carousel vs Scroll;paging~페이징 vs 무한 스크롤~Paging vs Infinite;floating~플로팅 vs 하단 고정~Floating vs Sticky;accordion~아코디언 vs 더보기~Accordion vs More'},
  {id:'overlaypairs',ko:'창·알림 짝',en:'Overlay pairs',easy:['뜨는 창·알림','Pop-ups and alerts'],items:'popupmodal~팝업 vs 모달~Popup vs Modal;toastsnack~토스트 vs 스낵바~Toast vs Snackbar;alertconfirm~알럿 vs 컨펌~Alert vs Confirm;sheetdrawer~바텀시트 vs 드로어~Bottom sheet vs Drawer;tooltippopover~툴팁 vs 팝오버~Tooltip vs Popover;badgedot~배지 vs 닷~Badge vs Dot;bannerpush~배너 vs 푸시 알림~Banner vs Push;onboardcoach~온보딩 vs 코치마크~Onboarding vs Coach mark;dimblur~딤 vs 블러~Dim vs Blur;alerttoast~알럿 vs 토스트~Alert vs Toast'},
  {id:'inputpairs',ko:'입력창 짝',en:'Input pairs',easy:['입력창 속','Inside a field'],items:'placeholder~플레이스홀더 vs 라벨~Placeholder vs Label;helper~안내 vs 오류 문구~Helper vs Error;textarea~한 줄 vs 여러 줄~Input vs Textarea;auto~자동완성 vs 추천 검색어~Autocomplete vs Suggest;otp~비밀번호 vs 인증번호~Password vs OTP;clearshow~지우기 vs 보기~Clear vs Show;counter~글자 수 vs 입력 제한~Counter vs Max length;numpad~숫자 키패드 vs 키보드~Numpad vs Keyboard;date~날짜 입력 vs 날짜 선택~Date input vs Picker;required~필수 vs 선택~Required vs Optional'},
  {id:'icons',ko:'아이콘 짝',en:'Icon pairs',easy:['비슷한 아이콘','Icons that look alike'],items:'hamburger~햄버거 vs 케밥~Hamburger vs Kebab;kebab~케밥 vs 미트볼~Kebab vs Meatballs;closeback~닫기 vs 뒤로~Close vs Back;heartbookmark~하트 vs 북마크~Like vs Bookmark;shareexport~공유 vs 내보내기~Share vs Export;filtersort~필터 vs 정렬~Filter vs Sort;searchzoom~검색 vs 확대~Search vs Zoom in;refreshundo~새로고침 vs 되돌리기~Refresh vs Undo;editcompose~수정 vs 새 글~Edit vs Compose'}]}
];
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

/* ---------- chat ---------- */
(function(){
const D=window.UIP_DEMOS, A='var(--uip-ac)', S='var(--uip-surface)', B='var(--uip-b)';
const me=(x)=>`<div style="align-self:flex-end;background:${A};color:#fff;font-size:12px;padding:6px 10px;border-radius:12px 12px 2px 12px;max-width:80%">${x}</div>`;
const ai=(x,ex='')=>`<div style="align-self:flex-start;background:${S};border:0.5px solid ${B};font-size:12px;padding:6px 10px;border-radius:12px 12px 12px 2px;max-width:85%;${ex}">${x}</div>`;
const col=x=>`<div style="width:86%;display:flex;flex-direction:column;gap:6px">${x}</div>`;
D['chat.bubble']=t=>col(me(t('내일 회의 몇 시야?','When is the meeting?'))+ai(t('오전 10시예요','10 a.m. tomorrow'))+`<div style="align-self:flex-end;font-size:10px;color:var(--uip-mute)">${t('읽음 · 오후 2:14','Read · 2:14 PM')}</div>`);
D['chat.prompt']=t=>`<div style="width:88%;background:${S};border:0.5px solid var(--uip-bs);border-radius:16px;padding:8px 8px 8px 12px"><div class="uip-field" style="border:0;width:100%;height:auto;padding:0;background:none">${t('무엇이든 물어보세요','Ask anything')}<span class="uip-caret"></span></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><span style="font-size:16px;color:var(--uip-sub)">＋</span><button class="uip-btn" style="width:28px;height:28px;padding:0;border-radius:50%">↑</button></div></div>`;
D['chat.typing']=D['chat.typing']||(t=>'');
D['chat.stream']=t=>col(me(t('한 줄로 요약해줘','Sum it up in one line'))+ai(`<span class="uip-stream" data-text="${t('3분기 매출은 전년 대비 12% 늘었고, 신규 고객이 성장을 이끌었어요.','Q3 revenue grew 12% year over year, led by new customers.')}"></span><span class="uip-caret"></span>`,'min-height:44px'));
D['chat.suggest']=t=>`<div style="display:flex;flex-direction:column;gap:6px;width:86%">${[t('이 문서 요약해줘','Summarize this doc'),t('표로 정리해줘','Turn it into a table'),t('메일 초안 써줘','Draft an email')].map(x=>`<span class="uip-btn2" style="padding:6px 10px;font-size:12px;border-radius:999px;text-align:left" onclick="UIP.fx.press(this)">${x}</span>`).join('')}</div>`;
D['chat.regen']=t=>col(ai(t('초안을 작성했어요.','Here is a draft.'))+`<div style="display:flex;gap:6px;color:var(--uip-sub);font-size:13px"><span style="cursor:pointer" onclick="this.textContent='✓';setTimeout(()=>this.textContent='⧉',1200)">⧉</span><span style="cursor:pointer" onclick="this.animate([{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{duration:500})">↻</span><span style="font-size:11px">${t('복사 · 다시 생성','Copy · Regenerate')}</span></div>`);
D['chat.feedback']=t=>col(ai(t('도움이 됐나요?','Was this helpful?'))+`<div style="display:flex;gap:6px">${['👍','👎'].map(x=>`<button class="uip-ibtn" style="width:32px;height:30px;font-size:13px" onclick="[...this.parentNode.children].forEach(b=>b.style.borderColor='');this.style.borderColor='var(--uip-ac)'">${x}</button>`).join('')}</div>`);
D['chat.cite']=t=>col(ai(t('매출이 12% 늘었어요','Revenue rose 12%')+` <sup style="background:var(--uip-acbg);color:${A};border-radius:4px;padding:0 4px;font-size:10px">1</sup> <sup style="background:var(--uip-acbg);color:${A};border-radius:4px;padding:0 4px;font-size:10px">2</sup>`)+`<div style="display:flex;gap:4px;font-size:10px">${['IR 2026 Q3.pdf','news.example.com'].map((x,i)=>`<span style="border:0.5px solid ${B};border-radius:6px;padding:2px 6px;background:${S}">${i+1} ${x}</span>`).join('')}</div>`);
D['chat.attach']=t=>`<div style="width:88%;background:${S};border:0.5px solid var(--uip-bs);border-radius:14px;padding:8px"><div style="display:flex;gap:6px;margin-bottom:6px"><span style="display:flex;align-items:center;gap:6px;border:0.5px solid ${B};border-radius:8px;padding:4px 8px;font-size:11px"><span style="width:18px;height:18px;border-radius:4px;background:var(--uip-danger);color:#fff;font-size:8px;display:flex;align-items:center;justify-content:center">PDF</span>${t('보고서.pdf','report.pdf')} ✕</span></div><div style="font-size:12px;color:var(--uip-mute)">${t('이 파일 요약해줘','Summarize this file')}</div></div>`;
D['chat.voice']=t=>`<div style="display:flex;flex-direction:column;align-items:center;gap:10px"><div style="display:flex;gap:3px;align-items:center;height:28px">${[10,22,14,26,12,20,8].map((h,i)=>`<span style="width:4px;height:${h}px;border-radius:2px;background:${A};animation:uip-pulse .9s infinite ${i*.1}s"></span>`).join('')}</div><button class="uip-btn" style="width:40px;height:40px;padding:0;border-radius:50%">●</button><span class="uip-cap" style="margin:0">${t('듣고 있어요…','Listening…')}</span></div>`;
})();
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
 _init(root){ root.querySelectorAll('.uip-stream').forEach(el=>{const full=el.dataset.text;let i=0;const iv=setInterval(()=>{if(!document.body.contains(el))return clearInterval(iv);i=i>full.length+15?0:i+1;el.textContent=full.slice(0,i)},60)});  root.querySelectorAll('.uip-steps').forEach(el=>{ let k=0; const tick=()=>{ if(!document.body.contains(el)) return clearInterval(iv); k=(k+1)%4; el.querySelectorAll('.uip-step').forEach((s,i)=>s.classList.toggle('on',i<k)); }; const iv=setInterval(tick,900); tick(); }); }
};
})();
