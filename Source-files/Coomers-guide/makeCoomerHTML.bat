REM This file converts "A Coomer's Guide to AI Dungeon" to HTML and moves both that file and the latest PDF compile to an appropriate place in the repo.

SET PATH=%PATH%;%~dp0%..\3rd-party-software\pdf2htmlEX-win32-0.14.6-with-poppler-data

pdf2htmlEX --data-dir %~dp0%..\3rd-party-software\pdf2htmlEX-win32-0.14.6-with-poppler-data\data\ --vdpi 300 --hdpi 300 Coomer-main.pdf Coomer-main.html

MOVE "Coomer-main.html" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A Coomer's Guide to AI Dungeon.html"

COPY "Coomer-main.pdf" "Coomer-temp.pdf"

MOVE "Coomer-temp.pdf" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A Coomer's Guide to AI Dungeon.pdf"

