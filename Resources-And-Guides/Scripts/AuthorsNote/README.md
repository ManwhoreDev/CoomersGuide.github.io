# Introduction
These scripts provide functionality similar to the feature "Author's Note", except where noted in the description below. The scripts make use of AI Dungeon's scripting feature which is free for all players. 

## Motivation
There are a number of reasons why you might want to make use of these scripts. You may want to explore the deeper scripting functionality of AI Dungeon and are looking for an example of how to modify input, persist state, and manipulate context. If you are a Griffon user, you may want to try functionality that adds an "Author's Note" to your context. If you are a Dragon user, you may want more fine-grain control over your "Author's Note" insertion depth, length, etc.

# Functionality
The contents of the scripts modifies the behavior of AI Dungeon in the following way. It monitors the input given by the player. When an input line that starts with "/an" is detected, then the rest of that line is set to be the new "Author's Note". When a line that starts with "/and" is detected and followed by an integer between 1 and 9 (inclusive), then that number will be set as the Author's Note Depth. A notification is displayed on the window, reminding the user what the current "Author's Note" is as well as its depth. Author's Notes created in this way are inserted n lines from the bottom of the context, where n is the depth, and can be of any length. This means you may supply an Author's Note of a length greater than 150 characters. Note: this does not alter the maximum context length and any additional characters used by the Author's Note will be removed from the top of the context before the request is submitted to the server.

Note: This functionality also works in tandem with the existing Author's Note feature. This means if you use this script _and_ set Author's Note in the UI, two Author's Notes will be set in your context.

## How To Install The Scripts
The scripts are easy to install and can be copy/pasted from this repository without modification.
1. Download `scenario.zip` from the repo.
2. Create a New Scenario (or open an existing scenario)
3. Click "Edit"
4. Scroll down until the "Scripts" button is visible
5. Click the "Scripts" button
6. In the Scripts page, click the "Upload" button (looks like a computer box with an up arrow)
7. Select `scenario.zip` on your computer and click "Open"

### Optional: Copy/Paste The Contents into the script editors
*Note: This is the old way to get the content into the scripts. If the `scenario.zip` upload worked, you don't need to do this step. Skip this and move to the test step.*
1. In the "Shared Library" tab, delete the contents and paste the contents of sharedLibrary.js
    * Click the "Save" icon
2. In the "Input Modifier" tab, delete the contents and paste the contents of inputModifier.js
    * Click the "Save" icon
3. In the "Context Modifier" tab, delete the contents and paste the contents of contextModifier.js
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
/and 3
Another test command.
/anv
```
Click the "Play" button. You should see an output like the following:
```
Modifier Result:
Text: This is my test command!
Another test command.
State:
{
  "memory": {},
  "setup": true,
  "authorsNote": "This is a test Author's Note",
  "authorsNoteDepth": 3,
  "authorsNoteDisplay": false,
  "message": ""
}

```
Test the input modifier again to show that toggling the AN visibility sets the message:
State:
```
{
  "memory": {},
  "setup": true,
  "authorsNote": "This is a test Author's Note",
  "authorsNoteDepth": 3,
  "authorsNoteDisplay": false,
  "message": ""
}
```
Text:
```
/an This is a different Author's Note
This is my test command!
/and 2
Another test command.
/anv
```
Click the "Play" button. You should see an output like the following:
```
Modifier Result:
Text: This is my test command!
Another test command.
State:
{
  "memory": {},
  "setup": true,
  "authorsNote": "This is a different Author's Note",
  "authorsNoteDepth": 2,
  "authorsNoteDisplay": true,
  "message": "Author's Note (2): This is a different Author's Note"
}
```

### Test Context Modifier
From the Scripts "Context Modifier" tab, scroll to the "Test Context Modifier" section. Enter the following inputs:
State:
```
{
  "setup": true,
  "authorsNote": "This is a test Author's Note",
  "authorsNoteDepth": 3
}
```
Text:
```
My first line
My second line
My third line
My fourth line
```
Click the "Play" button. You should see an output like the following:
```
Modifier Result:
Text: My first line
[Author's note: This is a test Author's Note]
My second line
My third line
My fourth line
State:
{
  "setup": true,
  "authorsNote": "This is a test Author's Note",
  "authorsNoteDepth": 3,
  "memory": {}
}
```

## How to use Author's Note / Depth in your Prompt Adventures
From here, any adventures made on the edited prompt will have this "Author's Note"-like functionality. You can add a line to any input of the form `/an This is my new Author's Note` to update the Author's Note. You can add a line to any input of the form `/and 2` to update the Author's Note Depth to 2, for instance. You can, change the current Author's Note / Depth at any time and select a length greater than 150 characters. Note that this does not increase the total size of the context, so any additional characters in the Author's Note will result in the same number of characters being removed from the top of the context.

### Examples
Here are some examples of how the Author's Note script can be used:

This single-line Author's Note example will assign the current Author's Note and issue an empty action which does not consume an action:
```
/an My new Author's Note
```

This single-line Author's Note Depth example will assign the current Author's Note Depth and issue an empty action which does not consume an action:
```
/and 2
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

The examples below shows how to change both Author's Note and Author's Note Depth in the same input. The commands can be given in any order and interspersed with actual player commands as well:
```
My player command!
/an My new Author's Note
/and 3
```

```
/an My new Author's Note
My player command!
/and 3
```

```
/an My new Author's Note
/and 3
My player command!
```

This example shows how to toggle the Author's Note display.
```
/anv
```
If the display was hidden, the command will show it. If the display was shown, the command will hide it.

By default, the author's note will be put in the context surrounded by brackets. For example, if your note is "This is a strange story.", the AI will receive "[Author's note: This is a strange story.]". Usually, this is what you want, but if you need more control, you can pass the raw flag:

```
/an -r [Content warning: exploding heads]
```

When using this, you should delimit your note manually, so the AI knows it's not a proper part of the story.

## Modifications
### Changing Default Author's Note
You can change the default Author's Note by changing the value of `currentAuthorsNote` in shared.js. To make this change, you can edit shared.js like so:
```
// Some kind of Singleton?!
if (!state.setup)
{
  state.setup = true // Ensure this is only set once and never wiped.
  state.currentAuthorsNote = "My initial AN here!" // Makes a state that holds a string for AN. To be set later with input modifier.
}
```

# Tests
For those making changes to the Author's Note script, there are tests to run as well to make sure it behaves as expected.
```
npm install && npm test
```
For more information see the [AIDG Test](https://github.com/CoomersGuide/CoomersGuide.github.io/tree/main/Resources-And-Guides/Scripts/AIDG%20Test) Project.
