// These colors will be assigned to players in the list display to make the
// display more clear.
const colors = [
	'aqua',
	'aquamarine',
	'blue-violet',
	'chartreuse',
	'coral',
	'crimson',
	'deep-pink',
	'forest-green',
	'gold',
	'golden-rod',
	'green-yellow',
	'orange-red',
	'rebecca-purple',
	'pale-violet-red',
	'salmon',
	'teal',
	'thistle',
	'turquoise',
	'violet',
	'tomato',
	'yellow'
]

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.

  // AN Variables
  state.authorsNote = "" // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lined from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN

  // MP Variables
  state.playerListDisplay = true
  state.playerListMapping = {}

  state.nextTurnDisplay = true
  state.currentCharacter = ''
  state.characterList = {}
}

// Checks the current info.characters against the state's player list. At any
// time during the MP session, characters could enter or leave. Even if the
// number stays the same, that could mean one player leaving and a new one
// joining.
const reconcilePlayerList = () => {
	if (
		info.characters
		&& info.characters.length > 0
	) {
		// For each registered character, if that character is on the in-game
		// list but not info.characters, then they have left between the last
		// action and now. Remove them from the list of characters.
		Object.keys(state.characterList).forEach((character) => {
			if (!info.characters.some((infoCharacter) => {
				return infoCharacter.name === character
			})) {
				delete state.characterList[character]
			}
		})

		// For each character in info.characters, check to see if it's on the
		// list or not. If not, we need to add it with a unique color.
		info.characters.forEach((character) => {
			if(
				character
				&& character.name
				&& character.name.length > 0
			) {
				const characterName = character.name

				if (state.characterList.hasOwnProperty(characterName)) {
					//noop
				}
				else {
					const characterColors = Object.values(state.characterList)
					const validColors = colors.filter((color) => {
						return !characterColors.includes(color)
					})
					const colorIndex = Math.floor(Math.random() * validColors.length);
					state.characterList[characterName] = colors[colorIndex]

					// If this is the first character in the game, make it their
					// turn.
					if (Object.keys(state.characterList).length === 1) {
						state.currentCharacter = characterName
					}
				}
			}
		})

		// If the current player left, reset the turn order
		const newCharacters = Object.keys(state.characterList)
		if (!newCharacters.includes(state.currentCharacter)) {
			passTurn()
		}
		
	}
	else {
		state.currentCharacter = ''
		state.characterList = {}
	}
}

// Takes an array of characters and the current one and will roatate through
// them alphabetically until the end and then wrap around.
const passTurn = () => {
	let currentCharacter = state.currentCharacter
	let characterList = Object.keys(state.characterList).sort()
	
	if (
		characterList
		&& characterList.length > 0
		&& currentCharacter
		&& currentCharacter.length > 0
	) {
		// If the current character has left, put them on the temporary list to
		// determine who goes after them.
		if (!characterList.includes(currentCharacter)) {
			characterList.push(currentCharacter).sort()
		}

		// If there are characters to switch between, switch. Otherwise, the
		// current character will be the only character on the list.
		if (characterList.length > 1) {
			// Get the index of the current character. If the character is not
			// on the list, this will return -1, which will set it to get index
			// 0.
			const currentIndex = characterList.indexOf(currentCharacter)

			let nextIndex = currentIndex + 1
			if (nextIndex >= characterList.length) {
				state.currentCharacter = characterList[0]
			}
			else {
				state.currentCharacter = characterList[nextIndex]
			}
		}
		else {
			state.currentCharacter = characterList[0]
		}
	}
}

const updatePlayerList = (playerCharacterMapping) => {
	let playerMappings = playerCharacterMapping.split("|")
	if (
		playerMappings
		&& playerMappings.length > 0
	) {
		playerMappings.forEach((mapping) => {
			let mappingTokens = mapping.split(":")
			if (
				mappingTokens
				&& mappingTokens.length === 2
			) {
				// The the player is mapped to a valid character, add it to the
				// mapping.
				let playerName = mappingTokens[0].trim()
				let characterName = mappingTokens[1].trim()
				if (Object.keys(state.characterList).includes(characterName)) {
					state.playerListMapping[characterName] = playerName
				}
			}
		})
	}
}

const updateDisplay = () => {
	let displayStats = []
	if (state.playerListDisplay) {
		displayStats.push({
			key: 'Player names',
			value: '',
			color: 'white'
		})

		for (let [characterName, playerName] of Object.entries(state.playerListMapping)) {
			if (Object.keys(state.characterList).includes(characterName)) {
				const characterColor = state.characterList[characterName]
				displayStats.push({
					key: playerName,
					value: characterName + " ",
					color: characterColor
				})
			}
		}
	}
	state.displayStats = displayStats

	let message = ''
	if (state.nextTurnDisplay) {
		const characterList = Object.keys(state.characterList).sort()
		
		if (characterList.length > 0) {
			message += "It's " + state.currentCharacter + "\'s turn!"

			const currentIndex = characterList.indexOf(state.currentCharacter)
			if(currentIndex >= 0) {
				for (let i = 1; i <= 3; i++) {
					let nextIndex = (currentIndex + i) % characterList.length
					if (characterList[nextIndex] === state.currentCharacter) {
						break;
					}
					if (i === 1) {
						message += " Next: "
					}
					else {
						message += " > "
					}
					message += characterList[nextIndex]
				}
			}
		}
	}

	if (state.authorsNoteDisplay) {
		if (
			state.authorsNote.length > 0
			&& state.authorsNoteDepth >= 1
		) {
			message += "\nAuthor's Note (" + state.authorsNoteDepth + "): " + state.authorsNote
		}
	}
	state.message = message
}
