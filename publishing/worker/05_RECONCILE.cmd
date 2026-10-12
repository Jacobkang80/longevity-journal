@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 결과가 불명확한 게시가 이미 등록되었는지 확인합니다. 새 글을 등록하지 않습니다.
node publisher.mjs reconcile
pause
