# World Info, and how to use it

*by [Zetsumi](https://play.aidungeon.io/main/profile?username=Zetsumi)*

Seeing as there still seems to be a lot of misconceptions, confusion and ignorance out there about how WI works, I thought I'd offer some brief tips on it.
Two important things.
First, WI is fairly new, and our understanding of the best way to use it is a developing one.
I won't be covering the various styles that are emerging here, because that is still a developing field.
It's better to see people trying their own ideas and discovering new ways of doing things to share than it is to see everyone assume that any one method is the 'correct' way, ESPECIALLY this early in our developing understanding of it.
Second, I'm still not 100% sure about a lot of this stuff myself, so if I do have the wrong information, please comment to correct me on it.

There's a lot to cover here, so this is going to be pretty infodump heavy.

## Basics

The basic process here is, when a keyword appears either in your text or the AI's output, the WI using that keyword is loaded into memory. However, there's a couple things we need to be aware of.
First and of paramount importance, there is a limited amount of tokens and a limited number of characters that can be used by WI at any one time. This comes out to just under 1400 characters, though I usually treat it as 1350 because it's better to err on the side of caution. Even more importantly, this limit is shared with /remember, and remember takes priority. This means that, if you have used up 1000 characters in remember, only 350 characters of WI can be loaded. The maximum size of a WI entry is 500 characters, which means to load a single full WI entry, you need to keep remember under 850 characters. If there isn't enough space to load a full WI entry in memory, it will be loaded anyway, but it will be truncated, meaning parts of the entry will be cut off. For this reason, it's important to lay out your WI entries with this in mind. Due to the way WI is processed, the most important information should be last in the entry.
If two or more keywords are used at once, the WI for the keyword appearing first in the text will be loaded first. If two WI entries are both loaded at once, the earliest created/highest in the list will be loaded first. If two WI's share a keyword, the highest priority entry should be higher in the list.
A WI will not be loaded by its keyword appearing in another WI entry, but it will be loaded if the AI's output based on that entry includes its keyword.

## Keys

Just as important as what's in our WI entry, is the keywords we choose. I've seen, for example, a lot of people only using an NPC's name as a keyword, and that's a problem. Why? Because they only mention the NPC's name in that WI entry. This is a lockout loop - the AI and player only know the character's name if it appears in the story, remember, or AN. If neither the player or AI know the NPC's name, neither of them will ever use it, meaning the NPC's WI will never be activated, meaning the player and AI will never know the NPC's name, and that goes around in a circle. The WI is effectively not there. Instead, add keywords that you expect will come up in reference to that character, as well as their name. Try to stick to words that are likely to ONLY describe that character - for example, if the character I'm writing a WI for is a female elf who's a bookworm, well, I'm probably going to run into plenty of female characters, and I'm probably going to run into plenty of elves. I don't want this character's WI in memory every time I meet someone of the same gender or race as her, I want to limit it as much as I can to keywords that are going to be used in reference to her, but seldom in reference to others. In this case, I probably want to focus on words like 'book,bookworm,reader'. This does mean her WI will be loaded whenever I visit the local library, but that just makes her more likely to appear visiting there, which is in character, so that's an acceptable crossover.

Keywords are not case sensitive, however, if a space is used in a WI keyword, only the whole keyword will activate the WI entry. This goes for a space after a comma, as well as in the middle of two words. EG.
Entry: blue,red milk,green
The words red and milk will not activate this WI, but red milk will.
Entry: blue, red,green
The word red will activate this WI if it is preceded by a space. This means that in certain instances, such as "Red!" as a line of dialogue preceded by a quotation mark and not a space, it won't activate the WI.
Because of the limited character space we have for WI, we need to carefully manage what WI's are loaded at any given time as best we can - we need to make sure that when a character's name is used, there's space for that WI to be loaded, and that space isn't currently being occupied by something that isn't relevant, like another character's WI. For these reasons, I recommend you:
- Avoid using extremely common words as keywords. (Girl, man, him, her, and ESPECIALLY you.)
- Avoid giving two WI's the same keyword.
If you are splitting information about one character, concept, ect across multiple WI's, you need to give extra careful consideration to when these WI's are active and how they refer to each other. Remember, if a WI isn't currently loaded, the information in it may as well not exist to the AI. Say I'm making a superhero, and I use two different WI's, one for the superhero Worldinfoman, and one for his civilian alter ego, Bruce Kent. If I have Bruce Kent's WI loaded but not Worldinfoman's, the AI doesn't know who Worldinfoman is unless that's a recent part of the story, or there's a statement in remember about him. So I can't just put 'Bruce Kent looks the same as WIMan, but wearing glasses' in the entry, because until WIMan's WI is loaded, the AI has no idea what he looks like. We can use this to our advantage - if I put all of Bruce Kent and WIMan's information in one WI, the AI will know everything, and so will its characters. This means random muggers suddenly know WIMan's secret identity. If I use two separate WI's, however, and simply mention WIMan's name when Bruce turns into him, or Bruce's name when he takes his super suit off, that goes a long way towards keeping those two identities seperate for the AI.

## Entry

Onto the entry itself. Again, I won't discuss style here, but as mentioned in the previous part, it's important to lay out your WI out so the most critical information is last, and the least important first. Moreover, again because of the limited memory we have to work with, it's important to keep our WI entries as short and to-the-point as possible. If it isn't a vital part of the character or important for the AI to know, we shouldn't be wasting WI space on it. We don't need to know Bruce Kent's favourite food - and if we do, we don't need to know it whenever he's in the story, so we can create a seperate WI with the keywords 'favorite food,favorite meal' and note how much Bruce loves hamburgers in its entry. When considering what belongs in a WI, ask yourself questions about how important a piece of info is: Do we and the AI need to know this at all times when the character is in the story? If not, it doesn't belong in their main WI, it belongs in a small specialized side WI at the very bottom of your list.
Another common misconception. Keywords are not loaded into memory when a WI is active. Say you lay out your WI like this.

 **Tags:** Bruce,kent
 **Entry:** Loves hamburgers.

When this WI is active, it doesn't tell the AI 'Bruce Kent loves hamburgers'. It tells the AI SOMEONE or SOMETHING loves hamburgers. Using this WI, the AI is just as likely to decide that the bird Bruce just saw fly by loves hamburgers as much as it is to give that quality to Bruce himself - and as discussed in my tips about getting the most out of the AI, the AI assumes everything is relevant, so don't be surprised when it suddenly brings that bird crashing through the window to steal Bruce's buns.
