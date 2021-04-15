# Introduction
These scripts provide a framework for generating `base64` encoded characters for AID. They can be run as a part of a scenario or from the command-line.

## Motivation
Character generation and persisting NPCs through AID has been a difficult problem to solve given the available tools. World Info entries only get triggered when one of the keys are mentioned in the context and copy/pasting into a Scenario prompt or memory can become tedious. I wanted to create a streamlined process for creating and loading characters that would allow them to behave consistently (as consistently as AID will allow, that is) and be portable. The scripts contained allow you to generate a reusable and sharable code for an NPC which can be used in prompts like [Infinity Brothel](https://github.com/CoomersGuide/CoomersGuide.github.io/tree/main/User-Content/Sink-chan/Infinity-Brothel/Infinity-Brothel).
Because I didn't want to force users to spend AID energy to essentially base64 encode a JSON string, I also provide a mechanism to run this generation from a user's command line.

## Setup
In order to run the Character Generator locally, you will need to have working and updated installations of `nodejs` and `npm`. If you do not already have these installed and running, the associated websites have good instructions on how to install, configure, and run these tools.

These scripts were written with `nodejs (version >= v14.15.5)` and `npm (version >= 6.14.11)`, so it is recommended that your tools be at least those versions before proceeding.

Once you have the tools installed, navigate to the `Character-Generator` folder in your command line and run: `npm install`. This will install the required dependencies needed to run the tests.

## Running The Generator
To run the generator, you simply need to run:
```
npm run generate
```
This will run the generator with each of the questions needed to create the NPC. Afterwards, the character's code will be printed to the command-line. Copy/paste that code into your running Scenarios to interact with that character.

Enjoy!

## Limitations / Caveats
These scripts are under development right now. I will likely migrate an updated copy to the `Resources-And-Guides/Scripts` folder once I have implemented more features. Additionally, I plan on updating the Author's Note Script to accept one (or more) NPCs through a `/load` command.
