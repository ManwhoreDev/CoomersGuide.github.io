const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
environment.loadSharedLibrary()

const testAN = "This is a test Author's Note"
const testANDepth = 2

describe('Tests for the context modifier.', () => {
	it('should not insert the Author\'s Note if one is set, but there is enough context.', () => {
		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');

		environment.setState({
			authorsNote: testAN,
			authorsNoteDepth: testANDepth
		})

		const testText = "This is a test context."
		const output = modifier(testText)

		assert.equal(output.text, testText)
	})

	it('should insert the Author\'s Note if there is enough context and one is set.', () => {
		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');

		environment.setState({
			authorsNote: testAN,
			authorsNoteDepth: testANDepth
		})

		const testText = "This is a test context.\nThis is the second line.\nThis is the third line."
		const output = modifier(testText)

		assert.equal(output.text, "This is a test context.\n[Author's note: This is a test Author's Note]\nThis is the second line.\nThis is the third line.")
	})
})
