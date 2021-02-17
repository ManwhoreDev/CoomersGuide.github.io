const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

describe('Tests for the shared state.', () => {
	it('should set state variables when the module is loaded.', () => {
		const shared = rewire(__dirname + '/../shared.js')

		assert.equal(state.setup, true)
		assert.equal(state.authorsNote, '')
		assert.equal(state.authorsNoteDepth, 2)
		assert.equal(state.authorsNoteDisplay, true)
		assert.equal(state.rawAuthorsNote, false)
	})
})
