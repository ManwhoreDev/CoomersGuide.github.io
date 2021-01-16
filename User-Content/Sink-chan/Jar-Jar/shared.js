const meters = {
	jarjar: {
		0: {
			display: 'Phantom ',
			note: 'still getting warmed up. Nowhere near climax.',
			color: 'plum'
		},
		1: {
			display: 'He Spake ',
			note: 'getting into it. He\'s doing the voice!',
			color: 'orchid'
		},
		2: {
			display: 'Jedi Caught Your Tongue ',
			note: 'feeling him inside you as he does the voice, and it\'s working',
			color: 'dark-magenta'
		},
		3: {
			display: 'Roger Roger ',
			note: 'having the best sex of your life. You don\t want it to end.',
			color: 'purple'
		},
		4: {
			display: 'BOM-BAD ',
			note: 'getting incredibly fucked incredibly hard. You\'re close to orgasm.',
			color: 'deep-pink'
		},
		5: {
			display: 'OH, MOOIE-MOOIE! I LOVE YOU! ',
			note: 'having the most intense orgasm of your life.',
			color: 'magenta'
		},
		prefix: 'Your Arousal Level: You are ',
		increaseKeywords: ['meesa', 'yoosa', 'wanna', 'bombad', 'bom-bad', 'gonna', 'wowza', 'mooie', 'disa', 'huhuhu', 'yoo', 'hoo', 'kay', 'yaa', 'woo', 'joo', 'waz', 'haz'],
		decreaseKeywords: []
	}
}

const updateDisplay = () => {
	state.displayStats = [
		{
			key:'Jar-Jar Binks Level',
			value: meters.jarjar[state.gauge.jarjar].display,
			color: meters.jarjar[state.gauge.jarjar].color
		}
	]
}

const updateGauge = (text) => {
	const lowerCaseText = text.toLowerCase()
	for (let meter in meters) {
		const increaseKeywords = meters[meter].increaseKeywords
		const increase = increaseKeywords.some((keyword) => {
			return lowerCaseText.includes(keyword)
		})

		if (
			increase
			&& state.gauge[meter] < 5
		) {
			state.gauge[meter]++
		}

		const decreaseKeywords = meters[meter].decreaseKeywords
		const decrease = decreaseKeywords.some((keyword) => {
			return lowerCaseText.includes(keyword)
		})

		if (
			decrease
			&& state.gauge[meter] < 5 // Point of no return
			&& state.gauge[meter] > 0
		) {
			state.gauge[meter]--
		}
	}
}

const resetGauge = () => {
  state.gauge = {
  	jarjar: 0
  }
}

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = "" // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
  
  state.gauge = {
  	jarjar: 0
  }
}
