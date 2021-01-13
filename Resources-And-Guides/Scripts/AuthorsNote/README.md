# Introduction
These scripts provide functionality similar to the feature "Author's Note", except where noted in the description below. The scripts make use of AI Dungeon's scripting feature which is free for all players. 

## Motivation
There are a number of reasons why you might want to make use of these scripts. You may want to explore the deeper scripting functionality of AI Dungeon and are looking for an example of how to modify input, persist state, and manipulate context. If you are a Griffon user, you may want to try functionality that adds an "Author's Note" to your context. If you are a Dragon user, you may want more fine-grain control over your "Author's Note" insertion, length, etc.

# Functionality
The contents of the scripts modifies the behavior of AI Dungeon in the following way. It monitors the input given by the player. When an input line that starts with "/an" is detected, then the rest of that line is set to be the new "Author's Note". A notification is displayed on the window, reminding the user what the current "Author's Note" is. Author's Notes created in this way are inserted two lines from the bottom of the context and can be of any length. This means you may supply an Author's Note of a length greater than 150 characters. Note: this does not alter the maximum context length and any additional characters used by the Author's Note will be removed from the top of the context before the request is submitted to the server.

## How To Install The Scripts
The scripts are easy to install and can be copy/pasted from this repository without modification.
1. Create a New Scenario (or open an existing scenario)
2. Click "Edit"
3. Scroll down until the "Scripts" button is visible
4. Click the "Scripts" button
5. In the "Shared Library" tab, paste the contents of sharedLibrary.js
    * Click the "Save" icon
6. In the "Input Modifier" tab, paste the contents of inputModifier.js
    * Click the "Save" icon
7. In the "Context Modifier" tab, paste the contents of contextModifier.js
    * Click the "Save" icon

## Optional: Test the Scripts
### Test Input Modifier
From the Scripts "Input Modifier" tab, scroll to the "Test Input Modifier" section. Enter the following inputs:
State:
```
{}
```
Text:
```
/an This is a test Author's Note
This is my test command!
```
Click the "Play" button. You should see an output like the following:
```
Modifier Result:
Text: This is my test command!
State:
{
  "memory": {},
  "setup": true,
  "currentAuthorsNote": "This is a test Author's Note",
  "message": "Set Author's Note to: This is a test Author's Note",
  "score": 0
}
```
### Test Context Modifier
From the Scripts "Context Modifier" tab, scroll to the "Test Context Modifier" section. Enter the following inputs:
State:
```
{
"setup": true,
"currentAuthorsNote": "This is a test Author's Note."
}
```
Text:
```
My first line
My second line
My third line
```
Click the "Play" button. You should see an output like the following:
```
Modifier Result:
Text: My first line
[Author's note: This is a test Author's Note.]
My second line
My third line
State:
{
  "setup": true,
  "currentAuthorsNote": "This is a test Author's Note.",
  "memory": {},
  "score": 0
}
```

## How to use Author's Note in your Prompt Adventures
From here, any adventures made on the edited prompt will have this "Author's Note"-like functionality. You can add a line to any input of the form `/an This is my new Author's Note` to update the Author's Note. You can, of course, change the current Author's Note at any time and select a length greater than 150 characters. Note that this does not increase the total size of the context, so any additional characters in the Author's Note will result in the same number of characters being removed from the top of the context.

### Examples
Here are some examples of how the Author's Note script can be used:

This single-line Author's Note example will assign the current Author's Note and issue an empty action which at the time of testing, does not consume an action
```
/an My new Author's Note
```

These multi-line Author's Note examples will assign the current Author's Note and issue the remaining lines as player actions. In all cases, the Author's Note is extracted and set *before* the player inputs are issued to the server, thus the given Author's Note will affect the next action, regardless of where it falls in the input. All three examples will have the same functionality.
```
/an My new Author's Note
The first line of my action
The second line of my action
```
```
The first line of my action
/an My new Author's Note
The second line of my action
```
```
The first line of my action
The second line of my action
/an My new Author's Note
```

## Modifications
Of course you may desire to make modifications to these scripts! If you desire to have the original functionality with the Author's Note placed three lines from the bottom of the context, you would make a modification like so to contextModifier.js:
```
if (
  lines.length > 2
  && state.currentAuthorsNote
  && state.currentAuthorsNote.length > 0
) {
  lines.splice(-3, 0, `[Author's note: ${state.currentAuthorsNote}]`)
}
```
