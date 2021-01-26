const rooms = [
	'music room',
	'fencing room',
	'gallery',
	'tea room',
	'dining room',
	'game room',
	'trophy room',
	'smoking room',
	'private theater',
	'ballroom',
	"servants' quarters",
	'laundry room',
	'kitchen',
	'freezer',
	'pantry',
	'wine cellar',
	'crematorium',
	'infirmary',
	'kennel',
	'stables',
	'sewing room',
	"artist's studio",
	'laboratory',
	'basement study',
	'classroom',
	'attic nursery',
	'library',
	'observatory',
	'machine shop',
	'greenhouse',
	'chapel',
	'powder room',
	'bathhouse',
	'master bedroom',
	'meditation room',
	'aviary balcony',
	'water closet',
	"chambermaids' quarters",
	'main hall'
]

const transitionFlags = [
	'go to',
	'enter',
	'move to',
	'move over to',
	'transition',
	'head to',
	'open the door to',
	'travel to',
	'arrive',
	'you reach',
	'into the',
	'through the',
	'going to',
	'proceed to',
	'proceeding to',
	'head there',
	'go there',
	'entering the',
	'arriving at the',
	'head inside',
	'go inside'
]

// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.debug = false // Set to true to print debug messages to the console

  // Author's Note state
  state.authorsNote = "This is a dark and foreboding tale of narrow escape. Focus on the ever-present threat of Alcina Dimitrescu." // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lined from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN

  // Castle Adventure state
  state.currentRoom = "dungeon" // Initial room. Safe from vampire. Does not contain Key fragment
  state.map = {}
  state.mapSize = 5
  state.visitedAllRooms = false
  state.vampireLocations = {}
  state.vampireLocationSize = 10
  state.isSameRoomAsVampire = false
}

const initializeMap = () => {
	const roomArrayLength = rooms.length
	
	while (Object.keys(state.map).length < state.mapSize) {
		const room = Math.floor(Math.random() * roomArrayLength);
		state.map[rooms[room]] = false
	}

	if (state.debug) {
		console.log(state.map)
	}
}

const initializevampireLocation = () => {
	const roomArrayLength = rooms.length

	while (Object.keys(state.vampireLocations).length < state.vampireLocationSize) {
		const room = Math.floor(Math.random() * roomArrayLength);
		state.vampireLocations[rooms[room]] = true
	}


	const dangerRooms = Math.ceil(state.mapSize / 2)
	while(
		(Object.keys(state.map)).filter((room) => {
			return Object.keys(state.vampireLocations).includes(room)
		}).length < dangerRooms
	) {
		const room = Math.floor(Math.random() * dangerRooms);
		const dangerRoom = Object.keys(state.map)[room]
		state.vampireLocations[dangerRoom] = true
	}

	if (state.debug) {
		console.log(state.vampireLocations)
	}
}

const hasVisitedEveryRoom = () => {
	for (let hasVisited of Object.values(state.map)) {
		if (!hasVisited) {
			return false
		}
	}
	return true
}

const isInAKeyRoom = () => {
	if (Object.keys(state.map).includes(state.currentRoom)) {
		return true
	}
	return false
}

const isSameRoomAsVampire = () => {
	const vampireRooms = Object.keys(state.vampireLocations)
	return vampireRooms.includes(state.currentRoom)
}

const visitRoom = (visitedRoom) => {
	let room = state.map[visitedRoom]
	if (room !== undefined) {
		state.map[visitedRoom] = true
	}
}

const detectRoomChange = (text) => {
	let visitedRoom

	let includesTransitionFlag = transitionFlags.some((transitionFlag) => {
		return text.includes(transitionFlag)
	})

	if (includesTransitionFlag) {
		let detectedRooms = rooms.filter((room) => {
			return text.includes(room)
		})

		if (detectedRooms.length === 1) {
			visitedRoom = detectedRooms[0]
		}
	}

	return visitedRoom
}

const updateRoomState = (text) => {
	let visitedRoom = detectRoomChange(text.toLowerCase())

	if (visitedRoom) {
		state.currentRoom = visitedRoom;
		visitRoom(visitedRoom)
	}

	if (isSameRoomAsVampire()) {
		state.isSameRoomAsVampire = true
	}
	else {
		state.isSameRoomAsVampire = false
	}

	if (hasVisitedEveryRoom()) {
		state.visitedAllRooms = true
	}
}

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const updateDisplay = () => {
	state.displayStats = []

	const visitedAllRooms = hasVisitedEveryRoom()

	let mainDisplay = capitalize(state.currentRoom)

	if (visitedAllRooms) {
		mainDisplay += ", Objective: Escape through the main hall!"
	}
	else {
		mainDisplay += ", Key Fragments: "
	}

	state.displayStats.push({
		key: 'Current Location',
		value: mainDisplay, 
		colors: 'white'
	})

	if (!visitedAllRooms) {
		const rooms = Object.keys(state.map).sort()
		rooms.forEach((room, index) => {
			const separator = (index === rooms.length - 1) ? "" : ", "
			state.displayStats.push({
				key: capitalize(room),
				value: state.map[room] ? "✔" + separator : "✖" + separator,
				colors: 'white'
			})
		})
	}
}

const displayAuthorsNote = () => {
  if (
    state.authorsNote.length > 0
    && state.authorsNoteDepth >= 1
    && state.authorsNoteDisplay
  ) {
    state.message = "Author's Note (" + state.authorsNoteDepth + "): " + state.authorsNote
	
	if (state.debug) {
		state.message += ", visited rooms: " + state.visitedAllRooms + ", vampire present: " + state.isSameRoomAsVampire
	}
  }
  else {
    state.message = ''
  }
}
