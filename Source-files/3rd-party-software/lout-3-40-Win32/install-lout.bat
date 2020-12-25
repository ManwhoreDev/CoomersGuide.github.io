
REM This file moves Lout folder to C:\lout. This is requirement to be able to compile .lout files.

echo Moving Lout to C drive...

robocopy "..\lout-3-40-Win32" "C:\lout" /COPYALL /E

echo Done!

echo Deleting install-lout.bat...

del "C:\lout\*install-lout*" /s /f /q

echo Done!

cmd /k

