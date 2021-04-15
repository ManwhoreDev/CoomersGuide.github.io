const setPromptPlaceholders = (rawText) => {
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

const base64Encode = (text) => {
	let buffer = new Buffer(text)
	return buffer.toString('base64')
}

const saveGame = () => {
	let saveGame = {
		name: state.name,
		physicalDescription: state.physicalDescription,
		mentalDescription: state.mentalDescription,
		dialogExamples: state.dialogExamples,
		customAN: state.customAN
	}

	let rawData = JSON.stringify(saveGame)
	return base64Encode(rawData)
}

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true

  state.name = ''
  state.physicalDescription = ''
  state.mentalDescription = ''
  state.dialogExamples = ''
  state.customAN = ''
}
