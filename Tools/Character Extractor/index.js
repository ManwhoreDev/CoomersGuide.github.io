const fs = require('fs')
const exifr = require('exifr')

let inputFilename = process.argv[2]

console.log("Loading file")
let image = fs.readFileSync(inputFilename, {expanded: true})

console.log("Parsing Metadata")
exifr.parse(image, true).then((result) => {
	console.log("Looking for encoded character")
	let encodedCharacter
	if(result.ImageDescription) { // JPG image
		encodedCharacter = result.ImageDescription
	}
	else if ( // PNG image
		result.description
		&& result.description.value
	) {
		encodedCharacter = result.description.value
	}

	if (
		!encodedCharacter
	) {
		console.error("Could not find an encoded character!")
		process.exit(-1)
	}

	// Do some basic validation. Make sure the character can be decoded and has
	// the expected fields
	let buffer = new Buffer(encodedCharacter, 'base64')
	let decodedCharacter = JSON.parse(buffer.toString('utf8'))

	if (
		!decodedCharacter
		|| !decodedCharacter.name
		|| !decodedCharacter.physicalDescription
		|| !decodedCharacter.mentalDescription
		|| !decodedCharacter.dialogExamples
		|| !decodedCharacter.customAN
	) {
		console.error("Invalid Saved character loaded.")
	}

	console.log("Encoded character found!\n")
	console.log(encodedCharacter)
})
