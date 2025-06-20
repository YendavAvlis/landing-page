@echo off

setlocal EnableDelayedExpansion

REM === Check for commit message ===
if "%~1"=="" (
    echo ❌ Please provide a commit message.
    echo Usage: deploy.bat Your commit message
    exit /b 1
)

REM === Combine all arguments into one commit message ===
set "msg=%~1"
shift
:loop
if "%~1"=="" goto afterloop
    set "msg=!msg! %~1"
    shift
    goto loop
:afterloop

REM === Build the project ===
echo 🛠 Running build...
start /wait cmd /c "npm run build"

REM === Check if build was successful ===
if errorlevel 1 (
    echo ❌ Build failed. Exiting...
    exit /b 1
)

REM === Add changes to git ===
echo 📦 Adding changes...
git add .

REM === Check if anything changed ===
git diff --cached --quiet
if %ERRORLEVEL%==0 (
    echo ⚠️ No changes to commit.
    goto end
)

REM === Commit and push ===
echo 📝 Committing with message: "%msg%"
git commit -m "%msg%"

echo 🚀 Pushing to remote...
git push

:end
echo ✅ Done.
endlocal
