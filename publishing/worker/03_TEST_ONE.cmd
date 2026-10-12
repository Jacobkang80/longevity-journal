@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 첫 원고인 올리브유 글 1편을 HEALTH에 공개 발행합니다.
echo 신규 공개 게시에 대한 시험이며 기존 글을 수정하지 않습니다.
node publisher.mjs test-post
pause
