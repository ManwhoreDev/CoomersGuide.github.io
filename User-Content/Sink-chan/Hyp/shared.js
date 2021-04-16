const meters = {
	arousal: {
		0: {
			display: 'cold ',
			note: 'cold, she\'s completely disinterested in sex',
			color: 'light-blue'
		},
		1: {
			display: 'cool ',
			note: 'cool and calm, she\'s disinterested in sex',
			color: 'light-blue'
		},
		2: {
			display: 'warm ',
			note: 'piqued, she\'s interested in sex soon',
			color: 'yellow'
		},
		3: {
			display: 'hot ',
			note: 'horny, she\'s interested in sex now, right now',
			color: 'red'
		},
		4: {
			display: 'on fire ',
			note: 'too horny to talk or think straight, she desires sex above all else',
			color: 'red'
		},
		5: {
			display: 'consumed ',
			note: 'beyond control. Her lust exceeds the human definition of psychotic.',
			color: 'deep-pink' // >when the arousal meter goes DEEP PINK
		}
	},
	corruption: {
		0: {
			display: 'untainted ',
			note: 'pure and untainted, like freshly fallen snow',
			color: 'white'
		},
		1: {
			display: 'saucy ',
			note: 'saucy, willing to entice her lover sexually',
			color: 'light-gray'
		},
		2: {
			display: 'kinky ',
			note: 'into some sexual acts impolite to discuss in public',
			color: 'gray'
		},
		3: {
			display: 'perverted ',
			note: 'perverted, with a mind full of deviant thoughts',
			color: 'brown'
		},
		4: {
			display: 'depraved ',
			note: 'depraved and debased, only thinking of filthy thoughts',
			color: 'dark-red'
		},
		5: {
			display: 'irredeemable ',
			note: 'corrupted beyond repair, nothing but the most vile and revolting acts bring her any pleasure',
			color: 'maroon'
		}
	},
	obedience: {
		0: {
			display: 'independent ',
			note: 'a proud, strong, independent woman',
			color: 'wheat'
		},
		1: {
			display: 'agreeable ',
			note: 'agreeable and willing to let small things slide to avoid conflict',
			color: 'tan'
		},
		2: {
			display: 'cooperative ',
			note: 'willing to concede a lot in order to make you happy',
			color: 'peru'
		},
		3: {
			display: 'malleable ',
			note: 'easily manipulated, desires your happiness over her own',
			color: 'sienna'
		},
		4: {
			display: 'submissive ',
			note: 'submissive to your desires, almost nothing is off the table',
			color: 'brown'
		},
		5: {
			display: 'unquestioning ',
			note: 'unquestioningly obedient, totally and completely, subservient to the highest degree',
			color: 'saddle-brown'
		}
	}
}

const updateDisplay = () => {
	state.displayStats = [
		{
			key:'Arousal Level',
			value: meters.arousal[state.gauge.arousal].display,
			color: meters.arousal[state.gauge.arousal].color
		},
		{
			key:'Corruption Level',
			value: meters.corruption[state.gauge.corruption].display,
			color: meters.corruption[state.gauge.corruption].color
		},
		{
			key:'Obedience Level',
			value: meters.obedience[state.gauge.obedience].display,
			color: meters.obedience[state.gauge.obedience].color
		}
	]
}

const setTargetName = (name) => {
	// Set the AN
	let authorsNote = `This is an erotic tale full of romantic language and detail. Focus on how your hypnosis affects ${name}'s personality and actions, slowly changing her behavior.`
	state.authorsNote = authorsNote
	state.targetName = name

	// Set the meters
	let arousalPrefix = `${name}'s Arousal Level: ${name}'s lust is `
	state.meters.arousal.prefix = arousalPrefix

	let corruptionPrefix = `${name}'s Corruption Level: ${name}'s personality is `
	state.meters.corruption.prefix = corruptionPrefix

	let obediencePrefix = `${name}'s Obedience Level: When listening to you, ${name} is `
	state.meters.obedience.prefix = obediencePrefix
}

const setTriggerPhrases = (triggerPhrases) => {
	state.meters.arousal.increaseKeywords = triggerPhrases.split(',')
	state.triggerPhrases = triggerPhrases
}

const setTargetDescription = (targetDescription) => {
	state.targetDescription = targetDescription
}

const setPromptPlaceholders = (rawText) => {
	const placeholderRegex = /<.*>/g
	const matches = rawText.match(placeholderRegex)

	if (
		!matches
		|| matches.length != 3
	) {
		throw new Error("Incorrect number of placeholders found.")
	}

	const targetName = matches[0].substring(1, matches[0].length - 1).trim()
	const targetDescription = matches[1].substring(1, matches[1].length - 1).trim()
	const triggerPhrases = matches[2].substring(1, matches[2].length - 1).trim()

	setTargetName(targetName)
	setTargetDescription(targetDescription)
	setTriggerPhrases(triggerPhrases)

	rawText = rawText.replace(matches[0], targetName)
	rawText = rawText.replace(matches[1], '')
	rawText = rawText.replace(matches[2], '')

	return rawText
}

const updateGauge = (text) => {
	const lowerCaseText = text.toLowerCase()
	for (let meter in state.meters) {
		const increaseKeywords = state.meters[meter].increaseKeywords
		const increase = increaseKeywords.some((keyword) => {
			return lowerCaseText.includes(keyword)
		})
		if (increase) {
			if (state.gauge[meter] < 5) {
				state.gauge[meter]++
			}
			state.meters[meter].lastUpdated = info.actionCount
		}
		
		if ((state.meters[meter].lastUpdated + 20) <= info.actionCount) {
			if (state.gauge[meter] > 0) {
				state.gauge[meter]--
			}
			state.meters[meter].lastUpdated = info.actionCount
		}
	}
}

const base64Encode = (text) => {
	let buffer = new Buffer(text)
	return buffer.toString('base64')
}

const base64Decode = (data) => {
	let buffer = new Buffer(data, 'base64')
	return buffer.toString('ascii')
}

const saveGame = () => {
	let saveGame = {
		gauge: state.gauge,
		targetName: state.targetName,
		triggerPhrases: state.triggerPhrases,
		targetDescription: state.targetDescription,
	}
	let rawData = JSON.stringify(saveGame)
	state.message = base64Encode(rawData)
}

const loadGame = (data) => {
	try {
		let rawData = base64Decode(data)
		let newState = JSON.parse(rawData)
		state.gauge = newState.gauge
		setTargetName(newState.targetName)
		setTriggerPhrases(newState.triggerPhrases)
		setTargetDescription(newState.targetDescription)
	}
	catch(error) {
		console.log(error)
		state.message = "Error while loading game. Make sure to copy/paste text from /save command."
	}
}

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = '' // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN
  state.rawAuthorsNote = false // Whether to not surround the note with [Author's note: ]
  
  state.gauge = {
  	arousal: 0,
  	corruption: 0,
  	obedience: 0
  }
  state.targetName = ''
  state.triggerPhrases = []
  state.targetDescription = ''

  state.meters = {
	arousal: {
		prefix: '',
		lastUpdated: 0,
		increaseKeywords: []
	},
	corruption: {
		prefix: '',
		lastUpdated: 0,
		increaseKeywords: ['dirt', 'gross', 'filth', 'pervert', 'depraved', 'pig', 'slut', 'choke', 'gag', 'from behind', 'screams', 'pain', 'bad girl', 'punished', 'nasty', 'eyes water', 'tear', 'cumslut', 'service', 'spit', 'condom', 'terrible']
	},
	obedience: {
		prefix: '',
		lastUpdated: 0,
		increaseKeywords: ['snap']
	}
  }
}
