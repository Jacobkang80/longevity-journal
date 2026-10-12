@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
 echo Node.js가 없습니다. 공식 LTS 설치를 시작합니다.
 winget install --id OpenJS.NodeJS.LTS -e --source winget
 echo 설치 후 이 창을 닫고 01_INSTALL.cmd를 다시 실행하세요.
 pause
 exit /b
)
where gh >nul 2>&1
if errorlevel 1 (
 echo GitHub CLI가 없습니다. 공식 설치를 시작합니다.
 winget install --id GitHub.cli -e --source winget
 echo 설치 후 이 창을 닫고 01_INSTALL.cmd를 다시 실행하세요.
 pause
 exit /b
)
call npm ci --ignore-scripts
if errorlevel 1 goto fail
call npx playwright install chromium
if errorlevel 1 goto fail
node --test test/core.test.mjs
if errorlevel 1 goto fail
gh auth status --hostname github.com >nul 2>&1
if errorlevel 1 gh auth login --hostname github.com --web --git-protocol https
if errorlevel 1 goto fail
echo 설치 완료. GitHub에 Jacobkang80 계정으로 로그인했는지 확인하세요.
echo 다음은 02_LOGIN.cmd 입니다.
pause
exit /b
:fail
echo 설치 또는 연결에 실패했습니다. 이 창의 오류를 알려주세요.
pause
exit /b 1
