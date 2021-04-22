const modifier = (text) => {
	const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
	const context = info.memoryLength ? text.slice(info.memoryLength) : text
	const lines = context.split("\n")
	
	// If there are enough lines to insert the Author's Note and we actually have
	// one, splice it in at n lines from the end of the context, where n is the
	// depth. I've selected 2 lines instead of 3 to compensate for using Griffon
	// instead of Dragon. Defaults to 1 because we can't insert lower in the
	// context than the end.
	const depth = state.authorsNoteDepth > 1 ? state.authorsNoteDepth : 1
	if (
		lines.length > (depth - 1)
		&& state.authorsNote
		&& state.authorsNote.length > 0
	) {
		lines.splice(-depth, 0, state.rawAuthorsNote ? state.authorsNote : `[Author's note: ${state.authorsNote}]`)
	}

	// Get dynamic memory block if there is a character loaded
	let characterMemory = getMemoryForCharacter(state)
	if (characterMemory) {
		state.memory.context = `${memory}\n${characterMemory}`
	}
	else {
		// If no character memory, clear memory override and default to the
		// immutable memory variable
		if (
			state.memory
			&& state.memory.context
		) {
			delete state.memory.context
		}
	}

	// Make sure the new context isn't too long, or it will get truncated by the server.
	const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
	const finalText = [contextMemory, combinedLines].join("")
	return { text: finalText }
}

modifier(text)
