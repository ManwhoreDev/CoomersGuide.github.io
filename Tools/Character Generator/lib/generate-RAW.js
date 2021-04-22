const fs = require('fs');
const readline = require('readline-sync')
const rewire = require('rewire')
const uglifyJS = require("uglify-js");

state = {}

const fileContent = fs.readFileSync(__dirname + '/../shared.js', 'utf8');
const parsedShare = uglifyJS.parse(fileContent)
parsedShare.figure_out_scope()

const shared = rewire(__dirname + '/../shared.js')

Object.values(parsedShare.variables._values).forEach((variable) => {
	global[variable.name] = shared.__get__(variable.name)
})

state.name = readline.question(`Character name: `)
state.rawCharacter = readline.question(`Raw character description: `)

console.log(saveCharacter())
