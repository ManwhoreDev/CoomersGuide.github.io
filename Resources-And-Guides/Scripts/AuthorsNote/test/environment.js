const fs = require('fs');
const rewire = require('rewire')
const uglifyJS = require("uglify-js");

const defaultState = {
	memory: {}
}

const defaultInfo = {
	"actionCount": 7,
	"characters": [
		{
			"name": null
		}
	],
	"maxChars": 2937,
	"memoryLength": 0
}
const defaultText = ''
const defaultMemory = ''

state = defaultState
info = defaultInfo
text = defaultText
memory = defaultMemory

function setState(newState = defaultState) {
	state = newState
}

function setInfo(newInfo = defaultInfo) {
	info = newInfo
}

function setMemory(newMemory = defaultMemory) {
	memory = newMemory
}

/**
 * Okay, so this is how I was able to figure it out. Maybe there's a better way.
 * Essentially, we load the shared.js file in a js parser and then get all the
 * variables that it will export in AID. Then we take all those and get them
 * using rewire, injecting them as globals in the test context. This should
 * result in the variables and function calls in shared.js being available in
 * the namespace like they are when called in AID.
 *
 */
function loadSharedLibrary() {
	const fileContent = fs.readFileSync(__dirname + '/../shared.js', 'utf8');
	const parsedShare = uglifyJS.parse(fileContent)
	parsedShare.figure_out_scope()

	const shared = rewire(__dirname + '/../shared.js')

	Object.values(parsedShare.variables._values).forEach((variable) => {
		global[variable.name] = shared.__get__(variable.name)
	})
}

module.exports = {
	setState,
	setInfo,
	setMemory,
	loadSharedLibrary
}
