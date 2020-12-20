cd "E:\CoomersGuide.github.io\Source-files\Coomers-guide\"

pdf2htmlEX --data-dir e:\Latex\pdf2htmlEX\data\ --vdpi 300 --hdpi 300 Coomer-main.pdf Coomer-main.html

MOVE /Y "E:\CoomersGuide.github.io\Source-files\Coomers-guide\Coomer-main.html" "e:\CoomersGuide.github.io\A-Coomers-guide-to-AI-Dungeon\A Coomer's Guide to AI Dungeon.html"

COPY /Y "E:\CoomersGuide.github.io\Source-files\Coomers-guide\Coomer-main.pdf" "e:\CoomersGuide.github.io\Source-files\Coomers-guide\Coomer-temp.pdf"

MOVE /Y "E:\CoomersGuide.github.io\Source-files\Coomers-guide\Coomer-temp.pdf" "e:\CoomersGuide.github.io\A-Coomers-guide-to-AI-Dungeon\A Coomer's Guide to AI Dungeon.pdf"


cd "E:\CoomersGuide.github.io\Source-files\Writing-guide\"

pdf2htmlEX --data-dir e:\Latex\pdf2htmlEX\data\ --vdpi 300 --hdpi 300 Writing-main.pdf Writing-main.html

MOVE /Y "E:\CoomersGuide.github.io\Source-files\Writing-guide\Writing-main.html" "e:\CoomersGuide.github.io\AIDG-Writing-Guide\AIDG Writing Guide.html"

COPY /Y "E:\CoomersGuide.github.io\Source-files\Writing-guide\Writing-main.pdf" "e:\CoomersGuide.github.io\Source-files\Coomers-guide\Writing-temp.pdf"

MOVE /Y "E:\CoomersGuide.github.io\Source-files\Writing-guide\Writing-temp.pdf" "e:\CoomersGuide.github.io\AIDG-Writing-Guide\AIDG Writing Guide.pdf"
