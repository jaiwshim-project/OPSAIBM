@echo off
echo ========================================
echo OPS & AI-Buckingham Machine Website
echo Starting Local Development Server...
echo ========================================
echo.

REM Try Python 3 first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with Python 3...
    echo.
    echo Website will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto :end
)

REM Try Python 2
python2 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with Python 2...
    echo.
    echo Website will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python2 -m SimpleHTTPServer 8000
    goto :end
)

REM No Python found
echo ERROR: Python is not installed or not in PATH
echo.
echo Please install Python from https://www.python.org/
echo Or use one of these alternatives:
echo.
echo 1. Using Node.js: npx http-server -p 8000
echo 2. Using PHP: php -S localhost:8000
echo 3. Open index.html directly in your browser
echo.
pause

:end
