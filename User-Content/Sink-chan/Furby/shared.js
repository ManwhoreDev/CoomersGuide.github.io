// https://official-furby.fandom.com/wiki/Furbish_(language)
// Added some extra entries with reasonable translations to allow for more
// natural language.
const furbishDictionary = {
	"above"        : "oo",
	"up"           : "oo",
	"high"         : "oo",
	"again"        : "koh-koh",
	"another"      : "koh-koh",
	"more"         : "koh-koh",
	"and"          : "koh",
	"ask"          : "oh-too-mah",
	"baby"         : "bay-bee",
	"bad"          : "boo-dah",
	"be"           : "boh",
	"to be"        : "boh",
	"beautiful"    : "ee-kah",
	"pretty"       : "ee-kah",
	"best"         : "dee-mak",
	"best fun"     : "dee-doo-ay",
	"radical"      : "dee-doo-ay",
	"big"          : "dah",
	"no"           : "dah-boo",
	"big no"       : "dah-boo",
	"big yes"      : "dah-ee-tah",
	"birth"        : "tee-toh",
	"birthday"     : "toh-toh",
	"boring"       : "koo-dah-way-loh",
	"bottle"       : "bah-bah",
	"change"       : "boo-tay",
	"cloud"        : "ay-loh-may-lah",
	"come"         : "bye-bye-oo-bah",
	"coming"       : "bye-bye-oo-bah",
	"complete"     : "toh",
	"cute"         : "doh-dee",
	"dance"        : "noh-lah",
	"delicious"    : "yumm-wah",
	"tastes good"  : "yumm-wah",
	"diamond"      : "ay-koo",
	"dizzy"        : "ay-way",
	"do"           : "doo-dah",
	"dog"          : "bar-bar",
	"done"         : "toh-dye",
	"down"         : "nah-bah",
	"dream"        : "way-loo",
	"dude"         : "dee-doh",
	"face"         : "kay-tay",
	"feed"         : "ah-tah",
	"food"         : "ah-tah",
	"finally"      : "oo-tah-tah-toh",
	"friend"       : "noo-lah",
	"buddy"        : "noo-lah",
	"full"         : "oo-loo",
	"fun"          : "doo-ay",
	"funny"        : "doo-loo",
	"game"         : "doo-ay-loo-lah",
	"game over"    : "kah boo koo-doh",
	"genius"       : "dah-way",
	"give"         : "tah",
	"go"           : "bye-bye",
	"going"        : "bye-bye",
	"bye"          : "bye-bye",
	"get out"      : "bye-bye",
	"good"         : "ee-day",
	"okay"         : "ee-day",
	"good morning" : "day-ay-loh-oo-tye",
	"good night"   : "day-ay-loh-nah-bah",
	"happy"        : "noo-loo",
	"have"         : "ah-mah",
	"health"       : "koo-doh",
	"healthy"      : "koo-doh",
	"help"         : "ah-noo",
	"hey"          : "hey",
	"hide"         : "woo-bye",
	"high"         : "oo-tah",
	"home"         : "lay-lah",
	"hug"          : "may-lah",
	"humor"        : "loo",
	"play"         : "loo",
	"joke"         : "loo-loo",
	"hungry"       : "ay-tay",
	"eat"          : "ay-tay",
	"island"       : "koo-wah",
	"just kidding" : "kah-loo-loo",
	"kiss"         : "may-tah",
	"life"         : "tee",
	"nature"       : "tee",
	"living thing" : "tee",
	"light"        : "ay-loh",
	"lightness"    : "ay",
	"like"         : "toh-loo",
	"similar to"   : "tay",
	"listen"       : "ay-ay-lee-koo",
	"little"       : "dee",
	"small"        : "dee",
	"live"         : "boh-dah",
	"log"          : "tee-loh",
	"look"         : "ay-ay",
	"love"         : "may-may",
	"love it"      : "dah-may-may",
	"maybe"        : "may-bee",
	"me"           : "kah",
	"mine"         : "kah",
	"myself"       : "kah",
	"i"            : "kah",
	"i'm"          : "kah",
	"money"        : "moo-lah",
	"monster"      : "moh-moh",
	"mountain"     : "koo-dah",
	"move"         : "noh-bah",
	"music"        : "ee-kah-lee-koo",
	"mm"           : "mm",
	"hmm"          : "hmm",
	"no"           : "boo",
	"stop"         : "boo",
	"no way"       : "dah-boo",
	"big no"       : "dah-boo",
	"noise"        : "bah-boo",
	"now"          : "nee-way",
	"oh"           : "oh",
	"oh my gosh"   : "oh-kah-tee",
	"oh my god"    : "oh-kah-tee",
	"ok"           : "oh-kay",
	"okay"         : "oh-kay",
	"over"         : "oo-bah",
	"party"        : "dah-no-lah",
	"party time"   : "dah-no-lah",
	"path"         : "bye-way",
	"pet"          : "ah-may",
	"play"         : "loo-lay",
	"please"       : "doo-moh",
	"pull"         : "ah-loo",
	"rain"         : "wah-wee-tee",
	"receive"      : "tah-tah",
	"seriously"    : "loo-loo-doo",
	"rock"         : "koo",
	"it"           : "koo",
	"this"         : "koo",
	"thing"        : "koo",
	"something"    : "koo",
	"sad"          : "boo-noo-loo",
	"scared"       : "dah-boh-bah",
	"sea"          : "ee-wah",
	"shake"        : "koo-bah",
	"sing"         : "wee-tee",
	"sleep"        : "way-loh",
	"so"           : "doh",
	"song"         : "wah-tee",
	"sound"        : "lee-koh",
	"stand"        : "oo-boh",
	"story"        : "wee-loo",
	"sun"          : "dah-ay-loh",
	"sweet"        : "nee-may",
	"tail"         : "dee-tee-tah",
	"talk"         : "noo-noo",
	"tell"         : "wee-tah",
	"thank"        : "dah-kah",
	"thank you"    : "dah-kah-oo-nye",
	"that's right" : "boh-ee-tay",
	"thinking"     : "way",
	"mind"         : "way",
	"tickle"       : "nee-tye",
	"time"         : "toh-toh",
	"touching"     : "ah",
	"holding"      : "ah",
	"touch"        : "tay-boo-koo",
	"tree"         : "tee-tah",
	"twinkle"      : "tee-wee-lah",
	"uh-huh"       : "uh-huh",
	"uh-oh"        : "uh-oh",
	"uh-uh"        : "uh-uh",
	"uncle"        : "oo-kah",
	"very"         : "mee-mee",
	"wait"         : "boo-toh",
	"water"        : "wah-tah",
	"wise"         : "way-lah",
	"wisely"       : "way-lah",
	"wonder"       : "way-nah",
	"worried"      : "boh-bay",
	"yay"          : "yay",
	"yeah"         : "wah",
	"yes"          : "ee-tay",
	"yippie"       : "yippie",
	"you"          : "oo-nye",
	"furby"        : "furby",
	"affirmative"  : "ee",
	"interrogative": "doo",
	"comparative"  : "tay",
	"negative"     : "boo"
}

// Furbish has different sentence modifier depending on the content of the
// sentence itself. For instance, an interrogative sentence will begin with
// "Doo" in addition to ending with a question mark.
const furbishSentenceModifiers = {
	"affirmative"   : "ee",
	"interrogative" : "doo",
	"comparative"   : "tay", // Unused
	"negative"      : "boo"
}

// These tokens will be used to determine a negative sentence.
const negativeTokens = [
	"don't",
	"can't",
	"won't",
	"shouldn't",
	"not",
	"wrong"
]

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  
  // Scripted AN variables
  state.authorsNote = "This is a haunting tale of a curse come to life. Focus on the confusion and despair brough about by the involuntary transformation." // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lined from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN

  // Speech alteration variables
  state.speechAlterationTarget = "you"
  state.speechAlterationDictionary = furbishDictionary
  state.originalMessage = ''
}

const getTokensIfSpeechMatches = (line, context = '') => {
	const matchText = context + line
	const matches = matchText.match(/(("[^"+]")?([^"]+){1}("[^"+]")?)/g)

	if (
		matches
		&& (matches.length === 2
		|| matches.length === 3)
	) {
		let subjectIndex = -1
		if (matches.length === 3) {
			subjectIndex = 1
		}
		else if (line.startsWith("\"")) {
			subjectIndex = 1
		}
		else {
			subjectIndex = 0
		}

		const subjectToken = matches[subjectIndex]
		if (
			subjectToken.toLowerCase().startsWith(state.speechAlterationTarget + " ")
			|| subjectToken.toLowerCase().startsWith(" " + state.speechAlterationTarget + " ")
		) {
			return {
				matches: matches,
				subjectIndex: subjectIndex
			}
		}
		else {
			console.log(`Dialog detected, but subject is not ${state.speechAlterationTarget}.`)
		}
	}
	else {
		console.log("Non-dialog or unsupported dialog line detected.")
	}

	return {}
}

const getDictionaryWordForEnglishWord = (word) => {
	let dictionaryWord = ''

	if (
		word
		&& word.length > 0
	) {
		if (state.speechAlterationDictionary.hasOwnProperty(word.toLowerCase())) {
			dictionaryWord = state.speechAlterationDictionary[word.toLowerCase()]
		}
		else if (Object.values(state.speechAlterationDictionary).includes(word.toLowerCase())) {
			dictionaryWord = word
		}
	}

	return dictionaryWord
}

const convertEnglishToFurbish = (line, context = '') => {
	let convertedLine = line

	let matches = getTokensIfSpeechMatches(line, context)
	if (
		matches
		&& matches.matches
	) {
		matches.matches.forEach((match, index) => {
			if (index === matches.subjectIndex) {
				// noop
				//convertedLine += match
			}
			else {
				let isAffirmative = false
				let isInterrogative = false
				let isNegative = false

				let convertedMatch = ''
				const words = match.match(/[a-zA-z\']+|[\.,\?\!]/g)
				words.forEach((word) => {
					if (word.match(/[\.,\?\!]/g)) {
						convertedMatch += word + " "
					}
					else {
						let furbishWord = getDictionaryWordForEnglishWord(word)
						convertedMatch += furbishWord + " "
					}

					// Set prefix flags based on sentence composition
					if (isNegativeToken(word)) {
						isNegative = true
					}
					if (isInterrogativeToken(word)) {
						isInterrogative = true
					}
					if (isAffirmativeToken(word)) {
						isAffirmative = true
					}
				})

				// Only one prefix allowed, in this priority order
				if (isNegative) {
					convertedMatch = getFurbishPrefix("negative") + " " + convertedMatch
				}
				else if (isInterrogative) {
					convertedMatch = getFurbishPrefix("interrogative") + " " + convertedMatch
				}
				else if (
					isAffirmative
					&& words.length > 2 // Applies to matches with more than one word+!
				) {
					convertedMatch = getFurbishPrefix("affirmative") + " " + convertedMatch
				}

				// If the match has a single word with no equivalent replaced...
				if (convertedMatch === ' , ') {
					convertedMatch = 'boh , '
				}

				// Capitalize the first letter, strip excess whitespace
				convertedMatch = capitalize(convertedMatch.replace(/\s+/g,' ').replace(/ +(\W)/g, "$1").trim())
				convertedLine = convertedLine.replace(match, convertedMatch)
			}
		})
	}

	if (convertedLine !== line) {
		state.originalMessage = line
	}

	return convertedLine
}

const getFurbishPrefix = (type) => {
	let furbishPrefix = ''

	if (furbishSentenceModifiers.hasOwnProperty(type)) {
		furbishPrefix = furbishSentenceModifiers[type]
	}

	return furbishPrefix
}

const isNegativeToken = (word) => {
	return negativeTokens.includes(word)
}

const isInterrogativeToken = (word) => {
	return word === '?'
}

const isAffirmativeToken = (word) => {
	return word === '!'
}

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const updateDisplay = () => {
	state.displayStats = []

	if (
		state.originalMessage
		&& state.originalMessage.length > 0
	) {
		state.displayStats.push({
			key: 'Translation',
			value: state.originalMessage, 
			colors: 'white'
		})
	}
}
