@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 첫 글 검증을 통과한 경우 남은 원고를 순서대로 공개 발행합니다.
echo 실행 중인 PC와 이 창을 유지하세요. 중지는 Ctrl+C 입니다.
node publisher.mjs watch
pause
