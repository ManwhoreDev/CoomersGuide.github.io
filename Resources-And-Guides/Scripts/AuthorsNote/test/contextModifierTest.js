const assert = require('assert')
const rewire = require('rewire')
const environment = require('./environment')

// Preload environment with variables and functions from shared.js
environment.loadSharedLibrary()

const testAN = "This is a test Author's Note"
const testRawAN = "[Content Warning: Javascript]"
const testANDepth = 2
const defaultState = {
	authorsNote: testAN,
	authorsNoteDepth: testANDepth,
	rawAuthorsNote: false,
	memory: {}
}
const testText = "This is a test context."
const testMultilineText = "This is a test context.\nThis is the second line.\nThis is the third line."

describe('Tests for the context modifier.', () => {
	it('should not insert the Author\'s Note if one is set, but there is not enough context.', () => {
		environment.setState(defaultState)

		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');

		const output = modifier(testText)

		assert.equal(output.text, testText)
	})

	it('should insert the Author\'s Note if there is enough context and one is set.', () => {
		environment.setState(defaultState)

		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');

		const output = modifier(testMultilineText)

		assert.equal(output.text, `This is a test context.\n[Author's note: ${testAN}]\nThis is the second line.\nThis is the third line.`)
	})

	it('should insert the Raw Author\'s Note if the flag is set.', () => {
		environment.setState({
			authorsNote: testRawAN,
			authorsNoteDepth: testANDepth,
			rawAuthorsNote: true,
			memory: {}
		})

		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');

		const output = modifier(testMultilineText)

		assert.equal(output.text, `This is a test context.\n${testRawAN}\nThis is the second line.\nThis is the third line.`)
	})

	it('should not update the memory if there is no character loaded', () => {
		const testScenarioMemory = 'scenario memory test'
		environment.setState({
			authorsNote: testAN,
			authorsNoteDepth: testANDepth,
			rawAuthorsNote: false,
			memory: {}
		})

		environment.setMemory(testScenarioMemory)

		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');
		const output = modifier(testMultilineText)

		assert.equal(state.memory.context, undefined)
	})

	it('should update the memory if there is a character loaded', () => {
		const testScenarioMemory = 'scenario memory test'
		const testCharacterMemory = 'character memory test'
		environment.setState({
			authorsNote: testAN,
			authorsNoteDepth: testANDepth,
			rawAuthorsNote: false,
			memory: {},
			type: 'RAW',
			rawCharacter: testCharacterMemory
		})

		environment.setMemory(testScenarioMemory)

		const contextModifier = rewire('../contextModifier.js')
		const modifier = contextModifier.__get__('modifier');
		const output = modifier(testMultilineText)

		assert.equal(state.memory.context, `${testScenarioMemory}\n${testCharacterMemory}`)
	})
})
