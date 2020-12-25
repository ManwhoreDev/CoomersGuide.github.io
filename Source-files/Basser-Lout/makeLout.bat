REM This file compiles "A Coomer's Guide to AI Dungeon" Lout version, converts that to HTML and moves them both to an appropriate place in the repo.

SET PATH=%PATH%;C:\lout\bin\;

lout Coomer-main.lout > Coomer-main-lout.ps

ps2pdf Coomer-main-lout.ps Coomer-main-lout.pdf

lout Coomer-main.lout > Coomer-main-lout.ps

ps2pdf Coomer-main-lout.ps Coomer-main-lout.pdf

COPY "Coomer-main-lout.pdf" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A (Minimalist) Coomer's Guide to AI Dungeon.pdf"

COPY "Coomer-main-lout.ps" "%~dp0%..\..\A-Coomers-guide-to-AI-Dungeon\A (Minimalist) Coomer's Guide to AI Dungeon.ps"

cmd /k
