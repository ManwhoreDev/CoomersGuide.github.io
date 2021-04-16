const base64Decode = (data) => {
	let buffer = new Buffer(data, 'base64')
	return buffer.toString('utf8')
}

const loadGame = (data) => {
	try {
		let rawData = base64Decode(data)
		let savedCharacter = JSON.parse(rawData)

		if (
			!savedCharacter
			|| !savedCharacter.name
			|| !savedCharacter.physicalDescription
			|| !savedCharacter.mentalDescription
			|| !savedCharacter.dialogExamples
			|| !savedCharacter.customAN
		) {
			throw new Error("Invalid Saved character loaded.")
		}

		state.name = savedCharacter.name
		state.physicalDescription = savedCharacter.physicalDescription
		state.mentalDescription = savedCharacter.mentalDescription
		state.dialogExamples = savedCharacter.dialogExamples
		state.authorsNote = savedCharacter.customAN
	}
	catch(error) {
		console.log(error)
		state.message = "Error while loading game. Make sure to copy/paste text from /save command."
	}
}

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = "" // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN
  state.rawAuthorsNote = false // Whether to not surround the note with [Author's note: ]

  state.name = ''
  state.physicalDescription = ''
  state.mentalDescription = ''
  state.dialogExamples = ''
}
