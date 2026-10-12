LONGEVITY JOURNAL · Win7 + Chrome 109 발행기 0.1

석우님 PC에서 Python 3.8.10, Chrome 109 제어, My EPIC2 공개 페이지와 GitHub 원고 목록 읽기까지 통과한 환경에 맞춘 버전입니다.
Node.js, winget, GitHub CLI, pip 설치가 필요하지 않습니다. 공식 Python과 ChromeDriver가 ZIP에 포함되어 있습니다.

검증 상태: 코드 문법과 기존 글 보호·중복 차단 등 오프라인 검증 완료. 사용자 PC에서 실제 관리자 로그인, 공개 발행, 수정은 아직 시험 전입니다.
Tistory 비공식 관리자 요청을 사용합니다. 추가 인증·CAPTCHA·요청 차단은 우회하지 않으며, 발생하면 중단합니다.

=== 순서 ===

ZIP 전체를 새 폴더에 압축 해제합니다. 호환성 확인 창이 남아 있으면 먼저 닫습니다.

1. 01_TISTORY_LOGIN.cmd
   전용 Chrome 창에서 카카오 로그인·문자 인증을 직접 완료합니다.
   My EPIC2 관리자 화면이 보이면 CMD 창으로 돌아가 Enter를 누릅니다.
   LOGIN VERIFIED 문구가 확인되어야 합니다. 기존 글 ID를 보호 목록으로 저장합니다.

2. 02_GITHUB_CONNECT.cmd
   발행 결과를 GitHub에 자동으로 기록하기 위한 1회 연결입니다.
   GitHub의 fine-grained token 만들기 페이지가 열립니다.
   Resource owner: Jacobkang80
   Repository access: Only select repositories → longevity-journal만 선택
   Repository permissions: Contents → Read and write
   만료일: 기본 안내 30일. 만료되면 이 연결을 다시 설정합니다.
   다른 계정·저장소·관리 권한은 필요하지 않습니다.
   Generate token 후 값을 복사하여 CMD의 숨김 입력 칸에만 붙여 넣고 Enter를 누릅니다.
   구형 CMD에서는 창의 우클릭 → 붙여넣기를 사용할 수 있습니다. 화면에 입력 문자가 안 보이는 것이 정상입니다.
   토큰은 비밀번호와 같은 비밀입니다. ChatGPT·스크린샷·GitHub 원고 파일에 보내지 마세요.
   Windows DPAPI로 현재 Windows 사용자에게 묶어 암호화 저장합니다.
   GITHUB CONNECTION VERIFIED와 같은 성공 문구를 확인합니다.
   https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

3. 03_TEST_ONE.cmd
   올리브유 새 글 1편을 2. HEALTH에 공개 발행합니다.
   PUBLIC / 2. HEALTH: https://myepic2.tistory.com/... 와 FIRST PUBLIC POST VERIFIED가 완료 기준입니다.
   게시 주소를 ChatGPT에 알려주세요. 실패했다면 같은 글을 수동으로 반복 등록하지 마세요.

4. 04_AUTO_PUBLISH.cmd
   첫 글 시험을 통과한 경우 남은 31편을 순서대로 공개 발행합니다.
   이후 GitHub 요청을 30초마다 읽어 석우님이 ChatGPT에 요청하신 수정·발행을 처리합니다.
   PC와 이 창을 실행 상태로 유지해야 합니다. 종료는 Ctrl+C입니다.
   한 PC에서만 실행하세요. 다른 PC와 동시에 처리하는 분산 실행은 지원하지 않습니다.

5. 05_RECONCILE.cmd
   발행 결과가 불명확할 때 이미 등록된 글의 표식·본문 버전·공개 상태를 확인합니다.
   새 글을 생성하지 않습니다. 일치 글을 확인하지 못하면 차단 상태를 유지합니다.

6. 06_STATUS.cmd
   로컬 처리 결과를 표시합니다. 캡처할 때 토큰 입력 창과 로그인 정보는 포함하지 마세요.

=== 결과와 요청 ===

GitHub: Jacobkang80/longevity-journal → tistory-publishing 브랜치
원고 요청: publishing/queue.json, publishing/jobs/slug-rN.json
발행 결과: publishing/results/windows.json
32편 큐는 기존에 만든 원고 31편과 GitHub 생체나이 계산기로 연결하는 소개 글 1편입니다.
기존 LONGEVITY JOURNAL 홈페이지와 Tistory 기존 글은 변경하지 않습니다.
현재 큐는 신규 공개 발행 요청이며, 결과를 확인한 뒤 이후 수정에는 새 revision과 등록된 postId를 사용합니다.

로컬 기록: %LOCALAPPDATA%\LongevityTistoryPublisher
전용 Chrome 프로필: %LOCALAPPDATA%\LongevityWin7Compatibility\ChromeProfile
Tistory 비밀번호를 프로그램에 넣거나 GitHub에 저장하지 않습니다.
GitHub에 업로드하는 것은 원고와 제목·게시 주소·처리 결과·보호 대상 ID입니다. 로그인 쿠키와 토큰은 보내지 않습니다.
현재 GitHub 저장소는 공개이므로 개인정보가 포함된 비공개 원고를 넣지 마세요.

=== 보호 기능 ===

기존 글 ID 수정 차단 / 관리 목록의 정확한 글만 업데이트 / 성공한 작업 중복 처리 차단
결과 불명확 시 재발행 차단 / 새 본문은 revision과 SHA-256 검증 / 삭제 기능 없음
인터넷 통신·사이트 변경으로 실패하면 자동으로 인증 보호를 해제하지 않습니다.
GitHub 결과 기록 실패 후에도 로컬 기록이 남습니다. 새로운 작업 ID로 동일한 원고를 재등록하지 마세요.

사진은 기존 HTML 외부 주소를 참조합니다. Tistory 첨부 저장소로 사진 파일을 복사하는 기능은 없습니다.
사진이 없는 원고는 그대로이며, 논문 검증을 이번 프로그램 개발에서 새로 수행하지 않았습니다.
Win7·Chrome109·Python3.8은 오래된 조합입니다. 최신 환경 수준의 보안 업데이트를 기대할 수 없습니다.

=== 프로그램 오류를 알려주실 때 ===

마지막 단계 또는 STOPPED 문구와 실제 게시 주소만 알려주세요.
토큰·카카오 비밀번호·문자 인증번호·로그인 주소의 토큰 부분은 공유하지 마세요.
처음 공개 발행과 업데이트는 실제 PC에서 검증 전입니다. 실행 전에 정상 발행을 보장하지 않습니다.
