const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
//environment.loadSharedLibrary()

const testAN = "This is a test Author's Note"
const testANDepth = 2

describe('Tests for the context modifier.', () => {
	/*it('should not insert the Author\'s Note if one is set, but there is enough context.', () => {
		// We import this resource with rewire to be able to extract unexported
		// variables and functions
		const contextModifier = rewire('../contextModifier.js')
		// This is how we get unexported functions with rewire. Once it's
		// extracted, you can call it like any other function.
		const modifier = contextModifier.__get__('modifier');
		// Here, we're using a helper function to set the global state before
		// the function under test is called.
		environment.setState({
			authorsNote: testAN,
			authorsNoteDepth: testANDepth
		})

		const testText = "This is a test context."
		const output = modifier(testText)

		assert.equal(output.text, testText)
	})*/
})
