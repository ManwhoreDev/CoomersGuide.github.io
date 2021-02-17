const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
//environment.loadSharedLibrary()

const testAN = "Input modifier test Author's Note"

describe('Tests for the input modifier.', () => {
	/*it('should set the author\'s note when a /an command is sent.', () => {
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
	})*/
})
