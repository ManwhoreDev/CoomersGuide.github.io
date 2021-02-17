# Introduction
These scripts provide a basic framework to test AID scripts outside of the Web Application. With this test framework, you can see your code running similar to as if it were running in a live prompt, without using energy.

## Motivation
The current framework for testing user scripts in prompts is very limited. Although the Web Application has a basic script runner with context editing, it lacks the ability to modify the info property and several other properties. Additionally, if one makes a change to their script, one must manually test each use case before releasing it, a tedious and time-consuming task. These scripts are aimed at giving user script `powerusers` the tools they need to craft complicated and in-depth user scripts without having to spend an undue amount of time testing. The scripts aim to provide the user with a way to test and validate their code without spending too much time or energy.

## Setup
In order to run these tests, you will need to have working and updated installations of `nodejs` and `npm`. If you do not already have these installed and running, the associated websites have good instructions on how to install, configure, and run these tools.

These scripts were written with `nodejs (version >= v14.15.5)` and `npm (version >= 6.14.11)`, so it is recommended that your tools be at least those versions before proceeding.

Once you have the tools installed, navigate to the `AIDG Test` folder in your command line and run: `npm install`. This will install the required dependencies needed to run the tests.

## Writing Tests
The tests are written with the NodeJS library `mocha`. You can review their documentation for complete instructions, but I have provided some basic examples in `AIDG Test` and `AuthorsNote`. When writing tests, I recommend you start with the template provided for each of the four files under test. The general test structure is as follows:

Have your script files in the base folder. Check out `AuthorsNote` for an example, but basically, you want `shared.js`, `inputModifier.js`, `contextModifier.js`, and `outputModifier.js` to be at the siblings of the `test` folder.

Next, in each file, we import the utility libraries:
```
const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')
```

For tests other than `sharedTest.js`, we also need to load the shared library in a similar manner to how it's loaded in the Web Application:
```
environment.loadSharedLibrary()
```

Next, you have the top-level test definition. Like so:
```
describe('Tests for the input modifier.', () => {
	// Tests go here!
})
```

Inside your `describe` block, you will define a number of `it` tests like so:
```
it('should set the author\'s note when a /an command is sent.', () => {
	// We import this resource with rewire to be able to extract unexported
	// variables and functions
	const inputModifier = rewire('../inputModifier.js')
	// This is how we get unexported functions with rewire. Once it's
	// extracted, you can call it like any other function.
	const modifier = inputModifier.__get__('modifier');
	// Here the function under test is being called and the side-effect on
	// the global state is being tested below.
	const output = modifier('/an ' + testAN)

	assert.equal(state.authorsNote, testAN)
})
```
In each of these tests, the module under test is loaded with `rewire` and then we use it to extract the function under test. The function is called and the return (or side-effect) is tested with an assert statement.

## Running Tests
To run the tests, you simply need to run:
```
npm test
```
This will run each of the tests and report the results. Enjoy!

## Limitations / Caveats
Because of how AID relies on global variables (state, info, text, etc.), writing tests for AID scripts can be difficult. Often times you may find that state is persisting between tests in an unexpeced way. I wish it could be different, but I don't know of a way to do this and have the code behave the same in test as in AID. Please understand.

Another limitation of the test framework is that is relies heavily on mocked state. We need to accurately set state, info, and other properties in the same way AID would set them for the tests to actually test what we intend. Also, I have not mocked out every single part of the AID state. Notably, WI mutators and Evaluation Bots do not have mocks as of yet.
