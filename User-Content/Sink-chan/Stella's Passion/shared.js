const meters = {
	passion: {
		0: {
			display: '',
			note: 'still getting warmed up. Ready to hear your words.',
			color: 'deep-pink'
		},
		1: {
			display: '🧡 ',
			note: 'getting into it. She loves hearing you speak. 🧡',
			color: 'deep-pink'
		},
		2: {
			display: '🧡🧡 ',
			note: 'incredibly horny. She can barely contrain her lust. 🧡🧡',
			color: 'deep-pink'
		},
		3: {
			display: '🧡🧡🧡 ',
			note: 'wants to have sex right now. She wants to touch you all over. 🧡🧡🧡',
			color: 'deep-pink'
		},
		4: {
			display: '🧡🧡🧡🧡 ',
			note: 'incredibly aroused. She will climax just from hearing your words. 🧡🧡🧡🧡',
			color: 'deep-pink'
		},
		5: {
			display: '🧡🧡🧡🧡🧡 ',
			note: 'consumed by the deepest thoughts of intimacy. 🧡🧡🧡🧡🧡',
			color: 'deep-pink'
		},
		prefix: 'Stella\'s Arousal Level: Stella is ',
		increaseKeywords: ['like', 'love', 'cute', 'passion', 'intimate', 'intimacy', 'close', 'cuddle', 'snuggle', 'caress', 'hug', 'hold', 'warm', 'embrace', 'gentle', 'smile', 'happy', 'pleasure', 'kind', 'peace', 'gentle', 'pure', 'sweet', 'kiss', 'cradl'],
		decreaseKeywords: []
	}
}

const updateDisplay = () => {
	state.displayStats = [
		{
			key:'Passion Level',
			value: meters.passion[state.gauge.passion].display,
			color: meters.passion[state.gauge.passion].color
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
  	passion: 0
  }
}

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = "" // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
  state.authorsNoteDisplay = false
  
  state.gauge = {
  	passion: 0
  }
}
