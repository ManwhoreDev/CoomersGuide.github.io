
REM This file deletes Lout folder from C:\lout. If you want to restore it, check out the repo.

echo Deleting Lout folder contents...

@RD /S /Q "C:\lout"

echo Done!

echo Please, delete the folder itself manually.

cmd /k
