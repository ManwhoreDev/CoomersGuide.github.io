# Introduction
This script replaces the double quote quotation style (the one AID defaults to) with the one using horizontal bars.
If you don't understand what those are, here is Wikipedia article explaining them:
<https://en.wikipedia.org/wiki/Quotation_mark#Quotation_dash>

# Purpose
It was made for flavor and unique quoting style. It *probably* pulls from some specific training data, but that is *not* a guarantee that the outputs are better with it.

# Functionality
This script does the following, simple text replacement.
From:
`"You are a big guy!" he mumbled, "I am a big guy too, unlike those "coomers" you mentioned."`
To:
`― You are a big guy! ― he mumbled, ― I am a big guy too, unlike those "coomers" you mentioned.`
This script expects you to use correct punctuation for it to work. Don't expect something like: `"grug want pick up stick" grug said",a` to convert successfully.
The script *relies* on punctuation characters to know whether "quotes" encase just a word or an actual quoted speech.
Since I am not much of coder, issues are to be expected. Just let me know which sentences are not converting correctly so I could fix regex.

## Output and Input Modifiers
The code works for both input and output. You can use both at the same time or just one of them, if you wish to.

# A/N script compatibility
The input part of this script is compatible with the [A/N script](https://github.com/CoomersGuide/CoomersGuide.github.io/tree/main/Resources-And-Guides/Scripts/AuthorsNote), but you need to insert the code at line 106 of it, between `modifiedText = inputLines.join("\n")` and `// If we have extracted an Author's Note and the resulting player command is a`.
For convenience's sake, the version of this script merged with A/N one inside is available in [this folder](https://github.com/CoomersGuide/CoomersGuide.github.io/tree/main/Resources-And-Guides/Scripts/HorizontalBars/ANscript-compatible-version).

# How to install the script
The script is easy to install and can be copy/pasted from this repository without modification.
1. Download `HorizontalBars` or `HorizontalBars-ANscript` from the repo.
2. Create a New Scenario (or open an existing scenario)
3. Click "Edit"
4. Scroll down until the "Scripts" button is visible
5. Click the "Scripts" button
6. In the Scripts page, click the "Upload" button (looks like a computer box with an up arrow)
7. Select `HorizontalBars` or `HorizontalBars-ANscript` on your computer and click "Open"
