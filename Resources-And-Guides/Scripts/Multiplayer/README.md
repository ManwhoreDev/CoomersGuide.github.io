# Introduction
These scripts make use of AI Dungeon's scripting feature which is free for all players. The scripts are intended to be used with multiplayer prompts and are meant to improve the player experience.

## Motivation
These scripts are primarily for use in multiplayer to help disambiguate between players and character names and to keep track of who's turn it is. Once a player joins the game, they must take an action to be added to the `info.characters` list. Simply joining a game or pressing enter will not register you with the system. Please note: This is how Latitude built this feature. I'm just explaining it.

# Functionality
These scripts contain all of the [Scripted Author's Note](https://github.com/CoomersGuide/CoomersGuide.github.io/tree/main/Resources-And-Guides/Scripts/AuthorsNote) functionality and several additions. There are two main commands that can be passed in multiplayer mode:

`/playerlist`: This command takes a list of key-value pairs and assigns it to an active character in the game. You can use this command to let the other players know who is playing which character if your character name differs from your username. You may pass in a single player-character mapping or multiple. While the player name can be anything, the character names must match the character name given when you join the session exactly. You can map your own username/character name or other players'. Invalid mappings will be ignored. See examples section below for more information.

`/pass`: This command will pass the turn from the current user to the next one, according to the order show in the display at the bottom of the screen. The turn order is determined lexicographically based on character name. While it is your turn, you may take any number of actions. It will not change into the next player's turn until you (or another player) enters a `/pass` command. Any player can issues the `/pass` command and advance the active player. If they player whose turn it is leaves the game, the turn will pass to the player who is next in the order.

## How To Install The Scripts
The scripts are easy to install and can be uploaded from the file in this repository without modification.
1. Download `scenario.zip` from the repo.
2. Create a New Scenario (or open an existing scenario)
3. Click "Edit"
4. IMPORTANT: Enable the "3rd Person Only" toggle!
5. Scroll down until the "Scripts" button is visible
6. Click the "Scripts" button
7. In the Scripts page, click the "Upload" button (looks like a computer box with an up arrow)
8. Select `scenario.zip` on your computer and click "Open"

## Optional: Test the Scripts
### Test Input Modifier
From the Scripts "Input Modifier" tab, scroll to the "Test Input Modifier" section. Enter the following inputs:
State:
```
{}
```
Text:
```
/pass
```
Click the "Play" button. You should see an output like the following:
```
Modifier Result:
Text: 
State:
{
  "memory": {},
  "setup": true,
  "authorsNote": "",
  "authorsNoteDepth": 2,
  "authorsNoteDisplay": true,
  "playerListDisplay": true,
  "playerListMapping": {},
  "nextTurnDisplay": true,
  "currentCharacter": "",
  "characterList": {},
  "displayStats": [
    {
      "key": "Player names",
      "value": "",
      "color": "white"
    }
  ],
  "message": ""
}
```

### Examples
Here are some examples of how the Multiplayer script can be used:

After performing some actions, to pass your turn, enter the pass command like so:
```
/pass
```
If you haven't taken any actions, but you want to skip your turn, enter the pass command like so:
```
/pass
```
If you want to pass your turn after entering an action, you can enter the pass command like so:
```
My test action
/pass
```

If you've taken at least one action, you can register yourself with the player-character map like so:
```
/playerlist username:characterName
```
If you want to register all active characters (any character who has taken an action), you can enter the command like so:
```
/playerlist username1:characterName1|username2:characterName2|username3:characterName3
```
Please note that while the usernames don't have to match the account name excatly, but the character name must match!

### Notes
Please note the following things.
* These scripts are made for multiplayer prompts, so you need to have the "3rd Person Only" toggle enabled.
* You MUST take at least one non-empty action before you can be registered in the turn order or displayed in the top banner. This is a limitation of the framework. Please understand.
* You can change your name through the UI if you like, but you will need to re-register with the top banner if you do.
