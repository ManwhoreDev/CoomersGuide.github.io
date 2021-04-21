const generatorType = "IB1" // Set to "RAW" for a RAW generator

const setIB1PromptPlaceholders = (rawText) => {
	const placeholderRegex = /<.*>/g
	const matches = rawText.match(placeholderRegex)

	if (
		!matches
		|| matches.length != 5
	) {
		throw new Error("Incorrect number of placeholders found.")
	}

	const name = matches[0].substring(1, matches[0].length - 1).trim()
	const physicalDescription = matches[1].substring(1, matches[1].length - 1).trim()
	const mentalDescription = matches[2].substring(1, matches[2].length - 1).trim()
	const dialogExamples = matches[3].substring(1, matches[3].length - 1).trim()
	const customAN = matches[4].substring(1, matches[4].length - 1).trim()

	state.name = name
	state.physicalDescription = physicalDescription
	state.mentalDescription = mentalDescription
	state.dialogExamples = dialogExamples
	state.customAN = customAN

	return
}

const setRAWPromptPlaceholders = (rawText) => {
	const placeholderRegex = /<.*>/g
	const matches = rawText.match(placeholderRegex)

	if (
		!matches
		|| matches.length != 2
	) {
		throw new Error("Incorrect number of placeholders found.")
	}

	const name = matches[0].substring(1, matches[0].length - 1).trim()
	const rawCharacter = matches[1].substring(1, matches[1].length - 1).trim()

	state.name = name
	state.rawCharacter = rawCharacter

	return
}

const base64Encode = (text) => {
	let buffer = new Buffer(text)
	return buffer.toString('base64')
}

const saveCharacter = () => {
	// Here is where we will determine the encoded character's "type", or
	// version/schema. I'm trying to keep it simple here, with the default of no
	// type defined = IB0. Characters made in the format before this will be
	// assumed to be IB0 type with all characters going forward expected to
	// specify a type. Scripts will be able to define what types of characters
	// they support, although I will strive to have all versions of the scripts
	// accept all versions of characters.
	let characterType = (state.rawCharacter.length > 0) ? "RAW" : "IB1"

	let savedCharacter
	if (characterType === "RAW") {
		savedCharacter = {
			type: characterType,
			name: state.name,
			rawCharacter: state.rawCharacter
		}

	}
	else if (characterType === "IB1") {
		savedCharacter = {
			type: characterType,
			name: state.name,
			physicalDescription: state.physicalDescription,
			mentalDescription: state.mentalDescription,
			dialogExamples: state.dialogExamples
		}
		// Make the Custom AN field optional
		if (state.customAN.length > 0) {
			savedCharacter.customAN = state.customAN

		}
	}
	else {
		console.error("Unsupported character type found!")
		return
	}

	let rawData = JSON.stringify(savedCharacter)
	return base64Encode(rawData)
}

if (!state.setup) {
	state.setup = true

	// Common fields
	state.name = ''

	// IB1 fields
	state.physicalDescription = ''
	state.mentalDescription = ''
	state.dialogExamples = ''
	state.customAN = ''

	// RAW fields
	state.rawCharacter = ''
}
