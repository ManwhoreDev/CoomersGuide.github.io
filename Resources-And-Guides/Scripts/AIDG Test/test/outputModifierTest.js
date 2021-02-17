const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
//environment.loadSharedLibrary()

const testText = 'This is a text output line.'

describe('Tests for the output modifier.', () => {
	/*it('should return the same text that is passed in.', () => {
		// We import this resource with rewire to be able to extract unexported
		// variables and functions
		const outputModifier = rewire('../outputModifier.js')
		// This is how we get unexported functions with rewire. Once it's
		// extracted, you can call it like any other function.
		const modifier = outputModifier.__get__('modifier');
		const output = modifier(testText)

		assert.equal(output.text, testText)
	})*/
})
