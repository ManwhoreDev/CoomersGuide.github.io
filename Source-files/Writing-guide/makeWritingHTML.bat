REM This file converts "/AIDG/ Writing Guide" to HTML and moves both that file and the latest PDF compile to an appropriate place in the repo.

SET PATH=%PATH%;%~dp0%..\3rd-party-software\pdf2htmlEX-win32-0.14.6-with-poppler-data

cd "%~dp0%..\Writing-guide"

pdf2htmlEX --data-dir %~dp0%..\3rd-party-software\pdf2htmlEX-win32-0.14.6-with-poppler-data\data\ --vdpi 300 --hdpi 300 Writing-main.pdf Writing-main.html

MOVE "Writing-main.html" "%~dp0%..\..\AIDG-Writing-Guide\AIDG Writing Guide.html"

COPY "Writing-main.pdf" "Writing-temp.pdf"

MOVE "Writing-temp.pdf" "%~dp0%..\..\AIDG-Writing-Guide\AIDG Writing Guide.pdf"

