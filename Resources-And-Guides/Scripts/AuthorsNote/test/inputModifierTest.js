const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
environment.loadSharedLibrary()

const testAN = "Input modifier test Author's Note"
const defaultState = {
	authorsNote: '',
	authorsNoteDepth: 2,
	authorsNoteDisplay: true,
	rawAuthorsNote: false
}
const commandInput = 'This is a test command.'
const anotherCommandInput = 'This is a second test command.'
const newAuthorsNoteDepth = 4

describe('Tests for the input modifier.', () => {
	it('should return a stop command when sent an empty input.', () => {
		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');

		const output = modifier('')

		assert.equal(output.text, '')
		assert.equal(output.stop, true)
	})

	it('should return the command text when sent a normal input.', () => {
		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');

		let output = {}
		output = modifier(commandInput)

		assert.equal(output.text, commandInput)

		output = modifier(`${commandInput}\n${anotherCommandInput}`)

		assert.equal(output.text, `${commandInput}\n${anotherCommandInput}`)
	})

	it('should set the author\'s note when a /an command is sent.', () => {
		environment.setState(defaultState)

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');

		modifier('/an ' + testAN)

		assert.equal(state.authorsNote, testAN)
		assert.equal(state.message, `Author's Note (${state.authorsNoteDepth}): ${state.authorsNote}`)
	})

	it('should strip the author\'s note from the rest of the input when a /an command is sent.', () => {
		environment.setState(defaultState)

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');

		let output = {}
		// Should strip when the /an is first
		output = modifier(`/an ${testAN}\n${commandInput}`)
		assert.equal(output.text, commandInput)

		// Should strip when the /an is last
		output = modifier(`${commandInput}\n/an ${testAN}`)
		assert.equal(output.text, commandInput)

		// Should strip when the /an is in the middle
		output = modifier(`${commandInput}\n/an ${testAN}\n${anotherCommandInput}`)
		assert.equal(output.text, `${commandInput}\n${anotherCommandInput}`)
	})

	it('should set the author\'s note and raw flag when a raw /an command is sent.', () => {
		environment.setState(defaultState)

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');
		modifier('/an -r ' + testAN)

		assert.equal(state.authorsNote, testAN)
		assert.equal(state.rawAuthorsNote, true)
	})

	it('should set the author\'s note depth when a /and command is sent.', () => {
		environment.setState(defaultState)

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');
		modifier('/and ' + newAuthorsNoteDepth)

		assert.equal(state.authorsNoteDepth, newAuthorsNoteDepth)
	})

	it('should strip the author\'s note depth from the rest of the input when a /and command is sent.', () => {
		environment.setState(defaultState)

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');

		let output = {}
		// Should strip when the /an is first
		output = modifier(`/and ${newAuthorsNoteDepth}\n${commandInput}`)
		assert.equal(output.text, commandInput)

		// Should strip when the /an is last
		output = modifier(`${commandInput}\n/and ${newAuthorsNoteDepth}`)
		assert.equal(output.text, commandInput)

		// Should strip when the /an is in the middle
		output = modifier(`${commandInput}\n/and ${newAuthorsNoteDepth}\n${anotherCommandInput}`)
		assert.equal(output.text, `${commandInput}\n${anotherCommandInput}`)
	})

	it('should toggle the author\'s note visibility when a /anv command is sent.', () => {
		environment.setState(defaultState)

		const defaultVisibility = state.authorsNoteDisplay

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');
		modifier('/anv')

		assert.equal(state.authorsNoteDisplay, !defaultVisibility)

		// Call it a second time and make sure it's switched back.
		modifier('/anv')

		assert.equal(state.authorsNoteDisplay, defaultVisibility)
	})

	it('should strip the author\'s note visibility from the rest of the input when a /anv command is sent.', () => {
		environment.setState(defaultState)

		const inputModifier = rewire('../inputModifier.js')
		const modifier = inputModifier.__get__('modifier');

		let output = {}
		// Should strip when the /an is first
		output = modifier(`/anv\n${commandInput}`)
		assert.equal(output.text, commandInput)

		// Should strip when the /an is last
		output = modifier(`${commandInput}\n/anv`)
		assert.equal(output.text, commandInput)

		// Should strip when the /an is in the middle
		output = modifier(`${commandInput}\n/anv\n${anotherCommandInput}`)
		assert.equal(output.text, `${commandInput}\n${anotherCommandInput}`)
	})
})
