const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
environment.loadSharedLibrary()

const testText = 'This is a text output line.'

describe('Tests for the output modifier.', () => {
	it('should return the same text that is passed in.', () => {
		const outputModifier = rewire('../outputModifier.js')
		const modifier = outputModifier.__get__('modifier');
		const output = modifier(testText)

		assert.equal(output.text, testText)
	})
})
