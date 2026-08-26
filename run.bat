@echo off
setlocal enabledelayedexpansion
title ACM GHRCEM 2026 Launcher

cd /d "%~dp0"

echo ============================================================
echo   Starting ACM GHRCEM 2026 Platform...
echo ============================================================

:: --- Prerequisites: Node 20+ on PATH -------------------
where npm >nul 2>&1 || goto :nonode

:: --- Install node modules on first run ------------------------
if not exist "node_modules" (
    echo [setup] Installing dependencies ^(first run only, this might take a minute^)...
    call npm install
)

:: --- Free port 3000 -------------------------------------------
echo [1/2] Checking port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1

:: --- Start server ------------------------------------------------------
echo [2/2] Starting Next.js frontend on port 3000...
start "ACM-Frontend" /min cmd /c "npm run dev"

echo.
echo Launching browser at http://localhost:3000 ...
timeout /t 3 /nobreak >nul
start "" http://localhost:3000

cls
echo ============================================================
echo   ACM GHRCEM 2026 is RUNNING!
echo ============================================================
echo   - Web Console:  http://localhost:3000
echo ============================================================
echo.
echo   [!] Keep this window OPEN while using the application.
echo   Press any key to STOP the server and exit...
echo ============================================================
pause >nul

echo.
echo Shutting down ACM server...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1
echo Done. Server stopped.
timeout /t 1 /nobreak >nul
exit /b 0

:nonode
echo.
echo [ERROR] Node.js / npm was not found on PATH. Install Node 20+ from nodejs.org and re-run.
pause >nul
exit /b 1
