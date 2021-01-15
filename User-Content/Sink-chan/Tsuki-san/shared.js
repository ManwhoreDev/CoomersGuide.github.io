const meters = {
	embarrassment: {
		0: {
			display: 'confident ',
			note: 'confident in herself and her purpose',
			color: 'blue'
		},
		1: {
			display: 'calm ',
			note: 'relaxed, dealing with a familiar situation',
			color: 'blue'
		},
		2: {
			display: 'nervous ',
			note: 'slightly nervous in a new and different situation',
			color: 'yellow'
		},
		3: {
			display: 'uncomfortable ',
			note: 'uncomfortable about the current situation and struggling',
			color: 'orange'
		},
		4: {
			display: 'embarrassed ',
			note: 'extremely embarrassed about what is happening',
			color: 'orange'
		},
		5: {
			display: 'ashamed ',
			note: 'completely and utterly ashamed about her current state',
			color: 'red'
		},
		prefix: 'Tsuki\'s Embarrassment Level: Tsuki is feeling ',
		increaseKeywords: ['sorry', 'not sure', 'embarrass', 'nervous', 'anxious', 'eyes widen', 'gulp', 'squirm', 'uncomfortable', 'whiny', 'hesitant'],
		decreaseKeywords: ['assured', 'confident', 'strong', 'calm', 'relaxed', 'peaceful']
	},
	arousal: {
		0: {
			display: 'cold ',
			note: 'cold, she\'s completely disinterested in sex',
			color: 'blue'
		},
		1: {
			display: 'cool ',
			note: 'cool and calm, she\'s disinterested in sex',
			color: 'blue'
		},
		2: {
			display: 'warm ',
			note: 'piqued, she\'s interested in sex at a later time',
			color: 'yellow'
		},
		3: {
			display: 'hot ',
			note: 'horny, she\'s interested in sex now, right now',
			color: 'red'
		},
		4: {
			display: 'on fire ',
			note: 'incredibly horny, she\'s can only think of sex',
			color: 'red'
		},
		5: {
			display: 'consumed ',
			note: 'too horny to talk or think straight, she desires sex above all else',
			color: 'deep-pink' // >when the arousal meter goes DEEP PINK
		},
		prefix: 'Tsuki\'s Arousal Level: Tsuki\'s lust is ',
		increaseKeywords: ['hot', 'horny', 'sex', 'fuck', 'suck', 'manhood', 'womanhood', 'desire', 'ravish', 'dick', 'cock', 'mount', 'thrust', 'fill me', 'seed', 'moist', 'slick', 'flush', 'rub', 'come', 'cum', 'sperm', 'into her mouth', 'wrapping her lips', 'shove', 'jerk'],
		decreaseKeywords: ['cool', 'cold', 'distant', 'stiff', 'groan', 'tense']
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
			note: 'corrupted beyond repair, nothing but the most vile acts bring her any pleasure',
			color: 'maroon'
		},
		prefix: 'Tsuki\'s Corruption Level: Tsuki\'s personality is ',
		increaseKeywords: ['dirt', 'gross', 'filth', 'pervert', 'depraved', 'pig', 'slut', 'choke', 'gag', 'from behind', 'screams', 'pain', 'bad girl', 'punished', 'nasty', 'eyes water', 'tear', 'cumslut'],
		decreaseKeywords: ['cute', 'pretty', 'love', 'nice', 'sweet', 'clean', 'neat']
	},
	mindBreak: {
		0: {
			display: 'coherent ',
			note: 'perfectly coherent and awake, able to converse normally',
			color: 'light-sky-blue'
		},
		1: {
			display: 'distracted ',
			note: 'slightly distracted, but otherwise coherent',
			color: 'sky-blue'
		},
		2: {
			display: 'fascinated ',
			note: 'focused mainly on a single thing, may forget other things',
			color: 'deep-sky-blue'
		},
		3: {
			display: 'engrossed ',
			note: 'focused only on one thing to the exclusion of almost everything else',
			color: 'olive'
		},
		4: {
			display: 'absorbed ',
			note: 'completely absorbed and incoherent, caring only about the object of her focus',
			color: 'olive-drab'
		},
		5: {
			display: 'incoherent ',
			note: 'completely and totally incohere, cannot respond normally',
			color: 'chocolate'
		},
		prefix: 'Tsuki\'s Mind-Break Level: Tsuki\'s mind is ',
		increaseKeywords: ['i can\'t', 'i won\'t', 'unbelieveable', 'pleasure', 'ecstasy', 'confused', 'why not', 'surprise', 'wha-', 'speechless', 'broken', 'fantas', 'despair', 'cry', 'sob'],
		decreaseKeywords: ['calm', 'smart', 'intelligent', 'detached']
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
		},
		prefix: 'Tsuki\'s Obedience Level: When listening to you, Tsuki is ',
		increaseKeywords: ['snap your fingers', 'please', 'beg', 'worship', 'obey', 'control', 'trapped', 'master', 'whimper', 'sir', 'comply', 'complies', 'crawl', 'on her knees', 'kneel', 'fill me'],
		decreaseKeywords: ['independent', 'argue', 'no', 'i don\'t', 'limit', 'boundary']
	}
}

const updateDisplay = () => {
	state.displayStats = [
		{
			key:'Embarrassment Level',
			value: meters.embarrassment[state.gauge.embarrassment].display,
			color: meters.embarrassment[state.gauge.embarrassment].color
		},
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
			key:'Mind-Break Level',
			value: meters.mindBreak[state.gauge.mindBreak].display,
			color: meters.mindBreak[state.gauge.mindBreak].color
		},
		{
			key:'Obedience Level',
			value: meters.obedience[state.gauge.obedience].display,
			color: meters.obedience[state.gauge.obedience].color
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
  	embarrassment: 0,
  	arousal: 0,
  	corruption: 0,
  	mindBreak: 0,
  	obedience: 0
  }
}

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = "" // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
  
  state.gauge = {
  	embarrassment: 0,
  	arousal: 0,
  	corruption: 0,
  	mindBreak: 0,
  	obedience: 0
  }

  state.alternateGauge = undefined
}
