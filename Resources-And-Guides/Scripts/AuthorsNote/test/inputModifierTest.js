const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
environment.loadSharedLibrary()

const testAN = "Input modifier test Author's Note"

describe('Tests for the input modifier.', () => {
	it('should set the author\'s note when a /an command is sent.', () => {
		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');
		const output = modifier('/an ' + testAN)

		assert.equal(state.authorsNote, testAN)
	})

	it('should set the author\'s note and raw flag when a raw /an command is sent.', () => {
		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');
		const output = modifier('/an -r ' + testAN)

		assert.equal(state.authorsNote, testAN)
		assert.equal(state.rawAuthorsNote, true)
	})
})
