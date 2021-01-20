# Introduction
https://15.ai/ has recently started allowing users to generate arbitrary sound clips on their site. While the number of voices available currently is limited, there’s a lot of potential here. You can basically make a character say anything you want, with any tone or emotion you choose.

# Tools
In order to get the best use out of the tool, you will need to manually tell it which phonemes to generate. This site linked from 15.ai has some basic information (http://www.speech.cs.cmu.edu/cgi-bin/cmudict). Advanced phoneme information is available here (http://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/); including an exhaustive list of valid phonemes with stress notation and a complete mapping of English words to phoneme notation (including stress). Because of the length limit, if you want to compile longer clips together, you’ll need some kind of sound editing tool like (https://www.audacityteam.org/) or just google: `free sound editing tool`.

# Methodology
To generate a simple sound clip, go to the site and select your character. Enter the text and click generate. The results are non-deterministic (the same input can produce multiple outputs), so if the results are unsatisfactory, re-roll. Also keep in mind that the output is case-insensitive and your input will be converted to all lower-case internally before speech is generated.
When the AI is generating sounds, there are some tricks you can use to help improve your output:
* Punctuation: Punctuation is interpreted as “pause length”, with a comma representing a short pause and period, exclamation mark, and question mark being interpreted as long pause. Even these can vary, but you will need to add/remove punctuation in order to generate text with the desired cadence.
* Acronyms: The AI will try to pronounce acronyms as dictionary words. For this reason, the site’s author recommends spacing the letters in the acronym out. FBI = `F B I`. Testing has shown that even this is insufficient and spelling the letter’s sound `Eff Bee Eye` or directly using phonemes (see: Phoneme Notation).
* Homonyms/Homophones: When you are trying to get the AI to say certain words, you might find it saying one of the desired word’s homonyms (e.g.: Ai generates tear as in RIP AND TEAR instead of “she cried a single tear”). The AI uses the first pronunciation available for a dictionary word in the Oxford Dictionaries API (See: Bracket Notation). In this case, you should consider using a homophone for the desired word or try it with Bracket Notation; in our example, “she cried a single tier”.
* Accents: The AI generates text in a “standard” American English accent. If you want the Medic from TF2 to have his fake German accent, you will need to spell the desired words phonetically (“Anyvay zats how I lost my medical license!”) or use raw phonemes.

# Advanced Methodology
## Emotion Notation
The AI is also capable of speaking the desired text or phonemes with a specific emotion. This can lead to a much wider array of outputs. Adding an emotion notation is done by separating the output text with a `|` character and then providing a second “emotion” text. See: https://15.ai/examples For instance if you want Carl saying `Fryman, I’m so happy to see you! | I'm so relieved to see you!` would lead to a different output from `Fryman, I’m so happy to see you! | I fucking hate your guts!`.
The emotion is determined by the DeepMoji API. You can test out your sentence here: https://deepmoji.mit.edu/ and see what “emotions” your sentence has generated. The capabilities are still being discovered. Since this is a “coomer’s guide”, the notations you may want to start with sentences that contain words like: desperate, sexy, aroused, happy, breathy, sensual, FUCK ME. You may also want to use words from the point of view of the character speaking. For instance, if you want to have a Kyu say a dick-sucking line, try the emotion `I’m going to suck your dick!` Also please note the confidence level associated with the output. You should try a few variations of your desired emotion sentence to make sure you get a result with mid-to-high confidence values.

## Bracket Notation
By default, https://15.ai/ will use the pronunciation of the first entry in the Oxford Dictionaries API for a given word, if that word is a valid dictionary word. You can specify an override of this by wrapping the given word in square brackets. For example, try generating with this string: `tear, [tear] | I am here to inform you`. This will generally take up less space than specifying the text in phoneme form, so if the dictionary word does not use your desired pronunciation by default, try this before specifying phonemes.

## Phoneme Notation
Phoneme notation is as close to raw inputs into the AI as we can do (for now). Instead of relying on the site to parse the text into phonemes (specified by the Oxford Dictionaries API or the AI's training), you can manually assign them, giving you much greater control over the output. On the site (http://www.speech.cs.cmu.edu/cgi-bin/cmudict), you can look up the phoneme mapping of your desired words to build your sentence. Vowel sound phonemes also have a stress notation (0 = no stress, 1 = primary stress, 2 = secondary stress).
For instance, consider the sentence: `But how do I know which syllables get the emphasis? emphasis? emphasis?` In this example, we want the AI to place stress on a different vowel phoneme for each version of `emphasis`. You would achieve that with the following input: `But how do I know which syllables get the {EH2 M F AH0 S IH0 S}? {EH0 M F AH2 S IH0 S}? {EH0 M F AH0 S IH2 S}?`


Some more examples of phoneme annotation:
* I want a baseball bat up my ass! = {AY0} {W AA0 N T} {AH0} {B EY0 S B AO0 L} {B AE0 T} {AH0 P} {M AY0} {AE0 S}
* Fuck me! = {F AH1 K}{M IY1}
* Stick it until my womb breaks! = {S T IH0 K} {IH1 T} {AH0 N T IH1 L} {M AY1} {W UW1 M} {B R EY1 K S}!

This can also be used for moaning and other erotic sounds. Below are some examples:
* Uhhh = {AH0 AH1 AH2 AH0 AH0 AH0 AH0}
* Ooh = {OW0 OW1 OW1}
* Ahh = {AH0 AH1 AH2 }
* Mmm = {N M M}, {N M M}, {N M M}
* Hhh = {HH} {HH} {HH}
* Ohm = {AO1 OW0 M NG}
* Fuck = {F AH1 K}
* Yeah = {Y IY1 EH2}
* Coom = {K UW1 UW1 UW1 M M M}
* Anon = {AA0 N AA1 N}

Various Dick Sucking Sounds:
* {HH L M P}
* {M N HH L M L M L L M}
* {M P HH}
* {TH CH TH CH P}
* {P M P}
* {P M V P}
* {W M M N}{TH CH TH TH CH}{P M P}, {W M L M N}{TH CH TH TH CH}{P M P}

# Putting it All Together
You can combine all of the above techniques to manually specify the phonemes and stress you desire and mix it with emotional notation. Because the input length is limited, you will want to use the default pronunciation of most dictionary words unless you are altering their pronunciation and emphasis. Even so, you may still need to re-roll to get your desired results.

For example:
`{AH0 AH1 AH2 } {Y IY1 EH2}, I want a baseball bat up my ass!| I'm so excited I can barely breathe!`

# Limitations
The text generation itself is largely limited to words that can be produced by phonemes. The AI has a difficult time generating onomatopoeia because the language used to describe the desired output cannot describe onomatopoeia. For instance, if you want to get a character to make the noise *slurp*, spelling the words with the phoneme for slurp would simply make them say the word `slurp`. It may be possibly to use phonemes and emotion notation. The AI also has difficulty with sounds based on inflections, such as leading or trailing inflections for questions. In fact, the question mark seems to be more or less ignored.
