REM This file compiles "A Coomer's Guide to AI Dungeon" Lout version, converts that to HTML and moves them both to an appropriate place in the repo.

SET PATH=%PATH%;C:\lout\bin\;%~dp0%..\3rd-party-software\pdf2htmlEX-win32-0.14.6-with-poppler-data

lout Coomer-main.lout > Coomer-main-lout.ps

ps2pdf Coomer-main-lout.ps Coomer-main-lout.pdf

lout Coomer-main.lout > Coomer-main-lout.ps

ps2pdf Coomer-main-lout.ps Coomer-main-lout.pdf

pdf2htmlEX --data-dir %~dp0%..\3rd-party-software\pdf2htmlEX-win32-0.14.6-with-poppler-data\data\ Coomer-main-lout.pdf Coomer-main-lout.html

COPY "Coomer-main-lout.html" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A (Minimalist) Coomer's Guide to AI Dungeon.html"

COPY "Coomer-main-lout.pdf" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A (Minimalist) Coomer's Guide to AI Dungeon.pdf"

COPY "Coomer-main-lout.ps" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A (Minimalist) Coomer's Guide to AI Dungeon.ps"

cmd /k
