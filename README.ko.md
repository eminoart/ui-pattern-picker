# UI 패턴 피커

[![skills.sh](https://skills.sh/b/eminoart/ui-pattern-picker)](https://skills.sh/eminoart/ui-pattern-picker)

**빠른 설치:** `npx skills add eminoart/ui-pattern-picker`

> **AI에게 맡기기:** 다른 AI에 `ui-pattern-picker 스킬 설치해줘 (github.com/eminoart/ui-pattern-picker)`라고 하면 [INSTALL.md](INSTALL.md)를 보고 설치합니다.

[English](README.md) · **한국어**

AI에게 "모던하게 해줘"라고 했는데 평범한 결과가 나온 적 있나요? 대부분은 이름을 몰라서예요. 보면 원하는 걸 알아보지만, 그게 뭐라고 불리는지는 모르는 거죠.

UI 패턴 피커는 **Claude 스킬**과 **UI 패턴 531개** 카드 모음입니다. 카드마다 눌러 보고, 입력해 보고, 움직이는 걸 볼 수 있는 **미리보기**가 있어요. Claude에게 평소 말투로 물어보고 마음에 드는 카드를 고르면, 정확한 이름과 바로 붙여 넣을 프롬프트를 받을 수 있습니다. 이름은 디자이너와 개발자가 실제로 쓰는 한국어·영어 용어를 따랐고, 많이 쓰이는 순서로 정렬돼 있어요.

<p align="center"><img src="docs/ko-map.png" alt="UI 지도: 패턴 그룹 10개" width="620"></p>

## 3단계로 시작하기

1. **스킬 설치하기** (아래 설치 방법, 1분 정도)
2. **Claude에게 묻기:** `UI 뭐가 있어` 대화창에 그룹 10개짜리 지도가 나옵니다.
3. **눌러서 내려가기:** 패턴까지 들어가 **이걸로 ↗**를 누르면, Claude가 언제 쓰는지 설명하고 다른 AI나 개발자에게 그대로 전달할 프롬프트를 써 줍니다.

더 빠르게: 맨 위 **검색창**에 `대시보드`, `스켈레톤`, `빈 화면`처럼 치면 531개 전체에서 바로 찾아 줍니다. 여러 카드에서 **+ 담기**를 누른 뒤 **N개로 프롬프트 만들기 ↗**를 누르면 한 번에 보낼 수 있어요. 단계 사이 이동은 카드 안에서 바로 되고, 답을 기다리지 않아도 됩니다.

용어를 몰라도 괜찮아요. 상황을 말로 설명해도 됩니다. 예: `데이터 불러오는 동안 화면이 비어 있어`

## 웹에서 바로 보기
설치 없이 **[eminoart.github.io/ui-pattern-picker](https://eminoart.github.io/ui-pattern-picker/)** 에서 볼 수 있어요. `?v=loading&lang=ko`처럼 주소를 붙이면 원하는 종류로 바로 가고, `?q=대시보드&lang=ko`처럼 붙이면 검색 결과가 열립니다. **이걸로 ↗**를 누르면 AI에 붙여넣을 문구가 복사돼요.

ChatGPT·Codex·Cursor처럼 대화창에 카드를 띄울 수 없는 곳에서는 스킬이 이 링크를 대신 알려줍니다.

## 설치 방법

### Claude 앱 (웹·데스크톱)
1. [`ui-pattern-picker-skill.zip`](ui-pattern-picker-skill.zip)을 내려받습니다. (파일을 누른 뒤 **Download raw file**)
2. Claude 왼쪽 메뉴에서 **Customize(사용자 지정)** → **Skills(스킬)**로 갑니다.
3. **+** → **Create skill** → **Upload a skill**을 누르고 zip 파일을 고릅니다.
4. 스킬이 켜져 있는지 확인한 뒤, 새 대화에서 `UI 뭐가 있어`라고 물어보세요.

스킬은 코드 실행 기능이 켜져 있어야 동작합니다. Team·Enterprise 요금제에서는 관리자가 조직 설정에서 스킬을 먼저 허용해야 할 수 있어요.

### Claude Code, Cursor, Codex 등 에이전트
```sh
npx skills add eminoart/ui-pattern-picker
```
직접 복사해도 됩니다:
```sh
git clone https://github.com/eminoart/ui-pattern-picker
cp -r ui-pattern-picker/skills/ui-pattern-picker ~/.claude/skills/
```
터미널에서는 대화창에 화면을 띄울 수 없어서, Claude가 브라우저로 열어 볼 HTML 파일을 만들어 줍니다.

## 이렇게 물어보세요 (나오는 화면)

| 이렇게 물으면 | 또는 이렇게 |
|---|---|
| `act` 누르고 고르기 | `button` 버튼 (13) · `btnstyle` 버튼 트렌드 (8) · `states` 버튼 상태 (9) · `share` 공유 (9) · `selection` 선택 컨트롤 (12) · `slider` 슬라이더 (8) · `toggle` 토글 스타일 (8) · `menu` 드롭다운·메뉴 (10) · `date` 날짜·시간 선택 (13) |
| `input` 입력받기 | `text` 입력창 (13) · `search` 검색 (12) · `form` 폼 구성 (9) · `upload` 업로드 (9) |
| `feedback` 알리고 기다리게 하기 | `loading` 로딩 (14) · `refresh` 새로고침 (8) · `overlay` 오버레이 창 (13) · `notification` 알림 (11) · `completion` 완료 표시 (9) · `state` 상태 화면 (10) · `permission` 권한 요청 (10) |
| `nav` 이동하기 | `primary` 메인 내비 (11) · `sidenav` 사이드 내비 (16) · `bottomnav` 하단 내비 (8) · `tabs` 탭 (7) · `wayfinding` 페이지 이동 (9) · `steps` 진행 단계 (8) |
| `display` 보여주기 | `list` 목록 (12) · `card` 카드 (9) · `table` 테이블 (9) · `media` 미디어 (9) · `people` 사람·프로필 (9) |
| `data` 숫자 보여주기 | `chart` 차트 (13) · `metric` 지표 위젯 (9) · `map` 지도 (7) |
| `layout` 화면 구성 | `page` 페이지 레이아웃 (12) · `landing` 랜딩 섹션 (10) · `screens` 앱 필수 화면 (12) · `onboard` 온보딩 방식 (8) |
| `style` 느낌·움직임 | `visual` 비주얼 스타일 (12) · `modern` 모던한 느낌 요소 (9) · `type` 글자 스타일 (14) · `textanim` 텍스트 등장 (9) · `scroll` 스크롤 모션 (17) · `micro` 마이크로인터랙션 (11) · `transition` 화면 전환 (15) |
| `ai` AI·대화 | `chat` 채팅 UI (10) · `aistate` AI 작업 표시 (8) |
| `pairs` 헷갈리는 짝 | `uipairs` UI 짝 (11) · `overlaypairs` 창·알림 짝 (10) · `inputpairs` 입력창 짝 (10) · `icons` 아이콘 짝 (9) |

이런 것도 물어보세요: `헷갈리는 아이콘 짝` · `토스트랑 스낵바 차이가 뭐야?` · `글래스모피즘` · `랜딩 페이지 구성` · `검색 결과가 없을 때 화면은?`

### **이걸로 ↗**를 누르면
Claude가 세 가지를 답해 줍니다.
1. **언제 쓰나**, 피해야 할 때, 가장 헷갈리는 짝과의 차이
2. **붙여 넣을 프롬프트**: 짧은 버전과 상세 버전. 예:
   ```
   로딩 상태는 스켈레톤(Skeleton) UI로. 실제 카드 레이아웃과 같은 모양의 회색 블록,
   좌→우 shimmer 1.5초 반복, 데이터 도착 시 fade-in 200ms로 교체.
   ```
3. **지금 작업 중인 화면에 적용**할지 묻기 (작업 중인 디자인이나 코드가 있으면 그 이름을 대고 "바로 적용 / 프롬프트만 / 다른 화면" 중에서 고르게 해요)

## 웹 페이지에 넣어 쓰기

카드 모음은 스크립트 파일 하나라서 Claude 밖에서도 쓸 수 있어요.

```html
<div id="uip"></div>
<script src="https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js"></script>
<script>UIP.show('uip', 'map', 'ko')</script>
```

`UIP.show(요소 id, 대상, 언어)`: 대상은 `map`, 그룹 id, 종류 id, `종류.패턴`(예: `loading.skeleton`), 검색어를 여는 `?검색어`(예: `?대시보드`) 중 하나이고, 언어는 `ko` 또는 `en`입니다. 채팅 밖에서는 **이걸로 ↗**를 누르면 문구가 클립보드에 복사돼요.

## 들어 있는 것

그룹 10개, 종류 51개, 패턴 531개. 괄호 안 숫자는 그 종류에 들어 있는 패턴 수입니다.

| 그룹 | 종류 |
|---|---|
| `act` 누르고 고르기 | `button` 버튼 (13) · `states` 버튼 상태 (9) · `share` 공유 (9) · `selection` 선택 컨트롤 (12) · `menu` 드롭다운·메뉴 (10) · `date` 날짜·시간 선택 (13) |
| `input` 입력받기 | `text` 입력창 (12) · `search` 검색 (12) · `form` 폼 구성 (9) · `upload` 업로드 (9) |
| `feedback` 알리고 기다리게 하기 | `loading` 로딩 (11) · `overlay` 오버레이 창 (12) · `notification` 알림 (9) · `completion` 완료 표시 (9) · `state` 상태 화면 (10) · `permission` 권한 요청 (10) |
| `nav` 이동하기 | `primary` 메인 내비 (9) · `tabs` 탭 (7) · `wayfinding` 페이지 이동 (9) |
| `display` 보여주기 | `list` 목록 (12) · `card` 카드 (9) · `table` 테이블 (9) · `media` 미디어 (9) · `people` 사람·프로필 (9) |
| `data` 숫자 보여주기 | `chart` 차트 (13) · `metric` 지표 위젯 (9) · `map` 지도 (7) |
| `layout` 화면 구성 | `page` 페이지 레이아웃 (12) · `landing` 랜딩 섹션 (10) · `screens` 앱 필수 화면 (12) |
| `style` 느낌·움직임 | `visual` 비주얼 스타일 (12) · `modern` 모던한 느낌 요소 (9) · `type` 글자 스타일 (14) · `textanim` 텍스트 등장 (9) · `scroll` 스크롤 모션 (10) · `micro` 마이크로인터랙션 (10) · `transition` 화면 전환 (12) |
| `ai` AI·대화 | `chat` 채팅 UI (10) · `aistate` AI 작업 표시 (8) |
| `pairs` 헷갈리는 짝 | `uipairs` UI 짝 (11) · `overlaypairs` 창·알림 짝 (10) · `inputpairs` 입력창 짝 (10) · `icons` 아이콘 짝 (9) |

순서는 널리 쓰이는 앱과 디자인 시스템에서 얼마나 자주 보이는지를 기준으로 한 경험적 판단이며, 측정한 통계는 아닙니다.

## 파일

| 파일 | 내용 |
|---|---|
| `skills/ui-pattern-picker/SKILL.md` | Claude 스킬 (`ui-pattern-picker-skill.zip`으로도 제공) |
| `catalog.js` | 모든 이름과 순서. 패턴 하나는 `id~한글~English~한글 설명~English hint` |
| `demos.js`, `demos-1.js` … `demos-5.js` | 미리보기. 키는 `종류.패턴` |
| `demos-h.js` | 미리보기에서 함께 쓰는 작은 도구 |
| `core.js` | 화면 그리기, 쪽 넘기기, 스타일, 동작 |
| `uip.js` | **CDN이 내보내는 완성 파일.** 직접 고치지 마세요 |
| `build.sh` | `uip.js`를 다시 만들고 모든 미리보기가 도는지 확인 |
| `docs/` | 안내서에 쓰는 예시 화면 |

## 업데이트하는 법

1. `catalog.js`에서 이름을 추가하거나 순서를 바꿉니다. 목록 안 위치가 곧 인기 순위예요.
2. `demos-*.js` 중 한 곳에 미리보기를 추가합니다.
   ```js
   D['loading.skeleton'] = t => `<div class="uip-sk" ...>${t('한국어 문구', 'English text')}</div>`;
   ```
   색은 `--uip-*` 변수를 써야 밝은 화면·어두운 화면에 맞춰집니다. 미리보기가 없는 카드는 "미리보기 준비 중"으로 나와요.
3. `./build.sh`를 실행한 뒤 커밋하고 올립니다.

jsDelivr는 `@main`을 최대 12시간 캐시합니다. `main`에서 `uip.js`가 바뀌면 GitHub Actions의 `Purge jsDelivr cache`가 캐시를 비워서 몇 분 안에 반영돼요. Actions 탭에서 직접 실행하거나 `@커밋해시`로 특정 버전을 불러올 수도 있어요.

## 라이선스

MIT
