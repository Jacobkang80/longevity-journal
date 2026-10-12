@echo off
echo WIN7 TISTORY PUBLISHER - github
chcp 65001 >nul
cd /d "%~dp0"
if not exist runtime\python.exe goto missing
runtime\python.exe -V
if errorlevel 1 goto runtime_error
runtime\python.exe publish_win7.py github
echo.
pause
exit /b
:missing
echo Extract ALL files from the ZIP. Python runtime is missing.
pause
exit /b 1
:runtime_error
echo Python runtime failed. Please share the Windows or DLL error.
pause
exit /b 1
