@echo off
echo LONGEVITY INSTALLER v0.2 - STARTING
chcp 65001 >nul
cd /d "%~dp0"
if errorlevel 1 goto folder_error
echo.
echo [1/6] Checking extracted files...
if not exist package.json goto missing_files
if not exist package-lock.json goto missing_files
if not exist publisher.mjs goto missing_files
if not exist test\core.test.mjs goto missing_files
echo Files OK.
echo.
echo [2/6] Checking Node.js 22 or newer...
where node >nul 2>&1
if errorlevel 1 goto install_node
node --version
node -e "if(Number(process.versions.node.split('.')[0])<22)process.exit(1)"
if errorlevel 1 goto old_node
echo.
echo [3/6] Checking GitHub CLI...
where gh >nul 2>&1
if errorlevel 1 goto install_gh
gh --version
echo.
echo [4/6] Downloading program dependencies...
echo This can take a few minutes. Network attempts time out after 30 seconds.
call npm ci --ignore-scripts --fetch-retries=1 --fetch-timeout=30000 --loglevel=notice
if errorlevel 1 goto fail
echo.
echo [5/6] Downloading Chromium browser...
echo This is a browser download. Tistory posts are NOT being published.
set PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=30000
node node_modules\playwright\cli.js install chromium
if errorlevel 1 goto fail
echo.
echo [6/6] Running checks and GitHub sign-in...
node --test test\core.test.mjs
if errorlevel 1 goto fail
gh auth status --hostname github.com
if errorlevel 1 goto github_login
goto success
:github_login
echo Your browser will open for GitHub sign-in. Use Jacobkang80.
gh auth login --hostname github.com --web --git-protocol https
if errorlevel 1 goto fail
goto success
:install_node
echo Node.js is missing. Installing the official LTS package...
where winget >nul 2>&1
if errorlevel 1 goto no_winget
winget install --id OpenJS.NodeJS.LTS -e --source winget
if errorlevel 1 goto fail
goto restart
:install_gh
echo GitHub CLI is missing. Installing the official package...
where winget >nul 2>&1
if errorlevel 1 goto no_winget
winget install --id GitHub.cli -e --source winget
if errorlevel 1 goto fail
goto restart
:old_node
echo Node.js is too old. Install Node.js LTS from https://nodejs.org/en/download
pause
exit /b 1
:no_winget
echo Windows winget is unavailable.
echo Install missing software from https://nodejs.org/en/download and https://cli.github.com
pause
exit /b 1
:restart
echo Installation finished. CLOSE this window and run 01_INSTALL.cmd again.
pause
exit /b 0
:missing_files
echo Required files are missing. Extract ALL files from the ZIP into one folder.
echo Do not run this CMD directly from inside the ZIP.
pause
exit /b 1
:folder_error
echo Cannot open the installation folder. Extract the ZIP to a local folder.
pause
exit /b 1
:fail
echo.
echo INSTALLATION STOPPED. Please share the last step number and error message.
echo Do NOT share passwords, authentication codes, or tokens.
pause
exit /b 1
:success
echo.
echo INSTALLATION COMPLETE. Next: 02_LOGIN.cmd
pause
exit /b 0
