// Validate the decoded JSON against the character type "schema". For characters
// with no type defined, we will assume IB0; the original format.
const isValidMetadata = (decodedCharacter) => {
	if (decodedCharacter.type === 'IB1') {
		return decodedCharacter.name
			&& decodedCharacter.physicalDescription
			&& decodedCharacter.mentalDescription
			&& decodedCharacter.dialogExamples
	}
	else if (decodedCharacter.type === 'RAW') {
		return decodedCharacter.name
			&& decodedCharacter.rawCharacter
	}
	else { // Assume IB0
		return decodedCharacter.name
			&& decodedCharacter.physicalDescription
			&& decodedCharacter.mentalDescription
			&& decodedCharacter.dialogExamples
			&& decodedCharacter.customAN
	}
}

const setGameStateForCharacter = (decodedCharacter) => {
	if (decodedCharacter.type === 'IB1') {
		state.type = decodedCharacter.type
		state.name = decodedCharacter.name
		state.physicalDescription = decodedCharacter.physicalDescription
		state.mentalDescription = decodedCharacter.mentalDescription
		state.dialogExamples = decodedCharacter.dialogExamples
		if (decodedCharacter.customAN) {
			state.authorsNote = decodedCharacter.customAN			
		}
	}
	else if (decodedCharacter.type === 'RAW') {
		state.type = decodedCharacter.type
		state.name = decodedCharacter.name
		state.rawCharacter = decodedCharacter.rawCharacter
	}
	else { // Assume IB0
		state.type = "IB0"
		state.name = decodedCharacter.name
		state.physicalDescription = decodedCharacter.physicalDescription
		state.mentalDescription = decodedCharacter.mentalDescription
		state.dialogExamples = decodedCharacter.dialogExamples
		state.authorsNote = decodedCharacter.customAN
	}
}

const base64Decode = (data) => {
	let buffer = new Buffer(data, 'base64')
	return buffer.toString('utf8')
}

const loadCharacter = (data) => {
	try {
		let rawData = base64Decode(data)
		let decodedCharacter = JSON.parse(rawData)

		if (!isValidMetadata(decodedCharacter)) {
			throw new Error("Invalid Saved character loaded.")
		}

		setGameStateForCharacter(decodedCharacter)
	}
	catch(error) {
		console.log(error)
		state.message = "Error while loading game. Make sure to copy/paste text from /save command."
	}
}

// I know it seems a bit silly, since I pass in state as character here, but
// when we update for multiple character loading this will help
const getMemoryForCharacter = (character) => {
	if (character.type) {
		if (
			character.type === 'IB0'
			|| character.type === 'IB1'
		) {
			return `\nYou are with ${character.name}.\n`
				+ `[${character.name}'s physical description: ${character.physicalDescription}\n`
				+ `${character.name}'s mental description: ${character.mentalDescription}\n`
				+ `${character.name}'s dialog examples: ${character.dialogExamples}]`
		}
		else if (character.type === 'RAW') {
			return character.rawCharacter
		}
	}

	return ''
}

if (!state.setup) {
	state.setup = true // Ensure this is only set once and never wiped.
	state.authorsNote = "" // String for Author's Note.
	state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
	state.authorsNoteDisplay = true // Toggle display of the AN
	state.rawAuthorsNote = false // Whether to not surround the note with [Author's note: ]

	// Common fields
	state.type = '' // Having a type populated means a character is loaded
	state.name = ''

	// IB1 fields
	state.physicalDescription = ''
	state.mentalDescription = ''
	state.dialogExamples = ''

	// RAW fields
	state.rawCharacter = ''
}
