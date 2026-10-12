# LONGEVITY JOURNAL · Windows Tistory Publisher 0.1

새 원고 31편과 계산기 소개 글 1편을 My EPIC2의 `2. HEALTH`에 신규 공개 발행하기 위한 Windows 프로그램입니다. GitHub 발행 요청을 받아 동작하므로 ChatGPT의 Computer Use 메뉴가 필요하지 않습니다.

**현재 검증:** 로컬 보호 로직 테스트 11개 통과 / 32개 원고 유효성 확인. **미검증:** 석우님 PC 설치, Tistory 실제 공개 발행과 수정. Tistory의 비공식 관리자 통신 방식을 사용하므로 기능 변경·로그인·CAPTCHA·게시 제한에 의해 중단될 수 있습니다. 공식 API나 공식 Tistory 플러그인이 아닙니다.

## 처음 시작하기

1. ZIP을 Windows 개인 PC의 폴더에 **모두 압축 해제**합니다. ZIP 안에서 직접 실행하지 마세요. 회사 관리 PC에 설치 권한이 없다면 개인 PC를 사용하세요.
2. `01_INSTALL.cmd`를 실행합니다. 필요한 경우 공식 Node.js LTS와 GitHub CLI를 설치합니다. 새로 설치했으면 창을 닫고 같은 파일을 다시 실행해야 PATH가 반영됩니다. `winget`이 없거나 설치가 실패하면 더 진행하지 말고 표시된 오류를 알려주세요. Node.js 22 이상을 사용합니다.
3. GitHub 로그인 창에서 **Jacobkang80** 계정으로 인증합니다. 비밀번호·인증번호·토큰을 채팅에 보내지 않습니다. 기존 GitHub 로그인 계정이 다르면 프로그램이 중단합니다.
4. `02_LOGIN.cmd`를 실행합니다. 전용 Chromium 창에서 Tistory 카카오 로그인·문자 인증을 직접 완료합니다. My EPIC2 관리자 화면이 보이면 검은 실행 창으로 돌아가 Enter를 누릅니다. 기존 글 ID와 HEALTH 카테고리가 확인되어야 다음 단계로 넘어갑니다.
5. `03_TEST_ONE.cmd`를 실행합니다. **올리브유 새 글 1편을 공개로 실제 발행**합니다. 기존 글은 수정하지 않습니다. 성공 시 게시 주소와 `PUBLIC / 2. HEALTH`가 표시되고 GitHub에 결과가 기록됩니다.
6. 성공 주소를 ChatGPT에 알려주세요. 프로그램이 공개 접근 검증까지 통과했다면 `04_AUTO_PUBLISH.cmd`로 나머지를 순서대로 발행하고 이후의 GitHub 요청을 감시할 수 있습니다. 시험이 실패하면 04를 실행하지 마세요.

## 이후 요청

감시 프로그램이 실행되는 동안 ChatGPT에 “NMN 새 글을 수정하고 다시 공개 반영해줘”라고 요청합니다. ChatGPT가 `tistory-publishing` 브랜치의 `publishing/queue.json`을 수정하면 프로그램이 30초마다 읽어 처리합니다. 작업 결과는 같은 브랜치의 `publishing/results/windows.json`에서 확인합니다. GitHub에서 요청을 저장한 것과 Tistory 발행 완료는 다릅니다. 결과의 `succeeded`와 실제 게시 주소 확인을 완료 기준으로 삼습니다.

프로그램을 종료하거나 PC를 끄면 자동 발행이 멈춥니다. 다음 실행 때 처리하지 않은 요청부터 진행합니다. 로그인 만료 시 02를 다시 실행해야 하며 인증을 자동 우회하지 않습니다. **한 PC에서만 실행하세요.** 두 PC가 동시에 처리하는 분산 실행은 지원하지 않습니다. Windows 절전 모드에서의 동작은 보장하지 않습니다.

## 기존 글 보호와 중복 방지

- 처음 연결할 때 기존 글 ID를 기준 목록에 저장합니다. 이 ID의 글을 수정하지 않습니다.
- 새로운 글에는 관리용 본문 표식을 넣고 게시 주소를 기록합니다.
- 같은 작업 ID는 성공 후 다시 실행하지 않습니다. 본문 변경은 새 revision으로 요청해야 합니다.
- 수정은 관리 목록에 있는 slug와 정확한 expected_post_id가 일치하는 글만 가능합니다.
- 통신 오류·프로그램 종료·발행 URL 확인 실패는 `needs_reconciliation`으로 남깁니다. 무작정 재발행하지 않습니다.
- `05_RECONCILE.cmd`는 이미 생성된 글의 표식·본문 버전·공개 여부·카테고리를 확인합니다. **새 글을 생성하지 않습니다.** 없다고 판단되어도 자동 재시도하지 않으며, 결과 검토 후 별도의 조치가 필요합니다.
- 게시 후 결과 전송이 실패해도 PC의 성공 기록은 남습니다. 06에서 상태를 확인하고 같은 작업을 새 ID로 재요청하지 마세요.
- 삭제 기능은 제공하지 않습니다.

## 원고와 사진

이번 목록의 첫 글은 올리브유, 다음은 오메가3입니다. 계산기는 GitHub 계산기로 연결하는 소개 글로 발행합니다. Tistory에서 계산기 JavaScript를 실행시키지 않습니다. 원고는 앞서 준비한 최종 원고를 사용합니다. 외부 사진은 HTML의 기존 주소를 참조하며 Tistory의 첨부 저장소로 사진 파일을 새로 올리는 기능은 포함하지 않습니다. 사진이 없는 원고 14편은 그대로입니다. 논문 링크는 이번 프로그램 제작에서 재검증하지 않았습니다. 인터넷 연결과 외부 이미지 접근에 따라 사진 표시가 달라질 수 있습니다.

## 개인정보와 실행 위치

Tistory 로그인 상태는 `%LOCALAPPDATA%\LongevityTistoryPublisher\browser-profile`의 전용 프로필에만 보관합니다. 비밀번호를 프로그램에 입력하거나 GitHub에 저장하지 않습니다. PC의 `state.json`에는 보호 대상 글 ID와 새 게시 주소, 처리 결과가 남습니다. GitHub에는 원고와 제목·게시 주소·결과·보호 대상 ID만 전송합니다. 현재 원고 저장소는 공개 저장소이므로 비공개 개인정보 원고를 이 목록에 넣지 마세요.

폴더를 클라우드 공유하거나 인증 프로필을 GitHub에 올리지 마세요. 인증 실패·사람 확인·접근 거부가 발생하면 프로그램은 중단합니다. 게시 URL 외에 로그인 화면의 주소·쿠키·토큰·인증번호를 공유하지 마세요.

## 참고한 문서

- Playwright 전용 브라우저 프로필: https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context
- GitHub CLI 인증: https://cli.github.com/manual/gh_auth_login
- GitHub 파일 API: https://docs.github.com/en/rest/repos/contents
- Tistory Open API 종료: https://notice.tistory.com/2664
- 비공식 Tistory 관리자 요청 구조 참고: https://github.com/kim-se-hee/tistory-mcp/blob/main/docs/api.md

## 개발자용 발행 요청 규칙

큐 파일은 `schema=1`, `blog=https://myepic2.tistory.com`, `category=2. HEALTH`, `enabled=true/false`, `jobs[]`입니다. 최초 신규 작업은 `operation=create`이며 이후 반영은 `operation=update`, `expected_post_id`를 반드시 지정합니다. 동일 원고 slug를 유지하고 revision을 증가시키며 `id=slug-r{revision}` 및 UTF-8 HTML의 SHA-256을 갱신합니다. 성공한 작업의 본문을 같은 ID로 변경하지 마세요. 큐를 수정하기 전에 최신 GitHub 파일 SHA와 결과 파일을 먼저 읽으세요. 기준 원고와 변경한 문장은 함께 검토한 후 발행 요청에 넣습니다. `enabled=false`는 감시기의 새 처리만 멈추며 이미 진행 중인 요청을 취소하지는 않습니다.

기존에 큐에 들어 있는 create 작업이 성공했으면 그대로 둬도 skip 처리됩니다. 새 update를 추가할 때 성공 기록의 postId를 사용합니다. HTML에는 script/iframe/form/입력·버튼 요소와 이벤트 핸들러를 허용하지 않습니다. 서버 오류 응답을 인증정보와 함께 기록하지 않습니다. 원고 파일에는 임의의 실행 명령을 넣을 수 없습니다.
