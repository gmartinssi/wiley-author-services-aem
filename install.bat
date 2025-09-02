@echo off
echo ==================================================
echo Wiley Author Services AEM Prototype Installation
echo ==================================================
echo.

REM Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js v18 or higher.
    echo        Visit: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Node.js %NODE_VERSION% detected
echo.

REM Check for npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: npm is not installed. Please install npm v8 or higher.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo npm %NPM_VERSION% detected
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo Dependencies installed successfully
echo.

REM Create necessary directories
echo Setting up directory structure...
if not exist "content\dam\wiley\author-services\assets\images" mkdir "content\dam\wiley\author-services\assets\images"
if not exist "content\dam\wiley\author-services\assets\pdfs" mkdir "content\dam\wiley\author-services\assets\pdfs"
if not exist "content\dam\wiley\author-services\assets\videos" mkdir "content\dam\wiley\author-services\assets\videos"
echo Directory structure created
echo.

echo ==================================================
echo Installation Complete!
echo ==================================================
echo.
echo Next steps:
echo 1. Start the development server:
echo    npm start
echo.
echo 2. Open your browser to:
echo    http://localhost:3000
echo.
echo 3. For more information, see README.md
echo.
echo Happy coding!
pause
