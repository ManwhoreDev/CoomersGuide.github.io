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

		assert.equal(state.name, '')
		assert.equal(state.type, '')

		assert.equal(state.physicalDescription, '')
		assert.equal(state.mentalDescription, '')
		assert.equal(state.dialogExamples, '')

		assert.equal(state.rawCharacter, '')
	})
})

describe('Tests for isValidMetadata()', () => {
	it('should return false for a completely invalid character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(!isValidMetadata({}))
	})

	it('should return false for an invalid IB0 character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(!isValidMetadata({
			name: 'test',
		}))
	})

	it('should return true for a valid IB0 character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(isValidMetadata({
			name: 'test',
			physicalDescription: 'test',
			mentalDescription: 'test',
			dialogExamples: 'test',
			customAN: 'test'
		}))
	})

	it('should return false for an invalid IB1 character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(!isValidMetadata({
			type: 'IB1',
			name: 'test',
			physicalDescription: 'test',
			mentalDescription: 'test'
		}))
	})

	it('should return true for an IB1 character with no AN', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(isValidMetadata({
			type: 'IB1',
			name: 'test',
			physicalDescription: 'test',
			mentalDescription: 'test',
			dialogExamples: 'test'
		}))
	})

	it('should return true for an IB1 character with an AN', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(isValidMetadata({
			type: 'IB1',
			name: 'test',
			physicalDescription: 'test',
			mentalDescription: 'test',
			dialogExamples: 'test',
			customAN: 'test'
		}))
	})

	it('should return false for an invalid RAW character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(!isValidMetadata({
			type: 'RAW',
			name: 'test'
		}))
	})

	it('should return true for a valid RAW', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const isValidMetadata = shared.__get__('isValidMetadata')

		assert.ok(isValidMetadata({
			type: 'RAW',
			name: 'test',
			rawCharacter: 'test'
		}))
	})
})

describe('Tests for getMemoryForCharacter()', () => {
	it('should return empty string when no character is set.', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const getMemoryForCharacter = shared.__get__('getMemoryForCharacter');

		assert.equal(getMemoryForCharacter({}), '')
	})

	it('should return structured memory for an IB0 character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const getMemoryForCharacter = shared.__get__('getMemoryForCharacter');

		const name = 'Stella'
		const physicalDescription = 'physical description'
		const mentalDescription = 'mental description'
		const dialogExamples = 'dialog examples'
		const character = {
			type: 'IB0',
			name: name,
			physicalDescription: physicalDescription,
			mentalDescription: mentalDescription,
			dialogExamples: dialogExamples
		}

		assert.equal(getMemoryForCharacter(character), `\nYou are with ${name}.\n`
				+ `[${name}'s physical description: ${physicalDescription}\n`
				+ `${name}'s mental description: ${mentalDescription}\n`
				+ `${name}'s mental dialog examples: ${dialogExamples}]`
		)
	})

	it('should return structured memory for an IB1 character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const getMemoryForCharacter = shared.__get__('getMemoryForCharacter');

		const name = 'Stella'
		const physicalDescription = 'physical description'
		const mentalDescription = 'mental description'
		const dialogExamples = 'dialog examples'
		const character = {
			type: 'IB1',
			name: name,
			physicalDescription: physicalDescription,
			mentalDescription: mentalDescription,
			dialogExamples: dialogExamples
		}

		assert.equal(getMemoryForCharacter(character), `\nYou are with ${name}.\n`
				+ `[${name}'s physical description: ${physicalDescription}\n`
				+ `${name}'s mental description: ${mentalDescription}\n`
				+ `${name}'s mental dialog examples: ${dialogExamples}]`
		)
	})

	it('should return raw memory for a RAW character', () => {
		const shared = rewire(__dirname + '/../shared.js')
		const getMemoryForCharacter = shared.__get__('getMemoryForCharacter');

		const name = 'Stella'
		const rawCharacter = 'raw description'
		const character = {
			type: 'RAW',
			name: name,
			rawCharacter: rawCharacter
		}

		assert.equal(getMemoryForCharacter(character), rawCharacter)
	})
})
