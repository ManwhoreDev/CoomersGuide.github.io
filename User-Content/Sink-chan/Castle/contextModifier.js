const modifier = (text) => {
  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength) : text
  const lines = context.split("\n")
  
  // This prompt has two kinds of Author's Notes, hidden and exposed. While the
  // player can set an Author's Note, the prompt also sets one with the state of
  // the vampire and the escape from the castle.
  const depth = state.authorsNoteDepth > 1 ? state.authorsNoteDepth : 1
  if (
    lines.length > (depth - 1)
  ) {
    let playerAuthorsNote = ''
    if (
      state.authorsNote
      && state.authorsNote.length > 0
    ) {
      playerAuthorsNote = state.authorsNote
    }

    let escapeAuthorsNote = ''
    if (state.visitedAllRooms) {
      escapeAuthorsNote = 'You have collected all the key fragments and can escape through the main hall!'
    }
    else {
      escapeAuthorsNote = 'Without the key fragments, escape from this castle is impossible!'
    }

    let vampireAuthorsNote = ''
    if (state.isSameRoomAsVampire) {
      vampireAuthorsNote = 'Suddenly, Alcina attacks!'
    }
    else {
      vampireAuthorsNote = 'You appear to be alone in this bleak castle.'
    }

    let authorsNote = `[Author's note: ${playerAuthorsNote}, ${escapeAuthorsNote}, ${vampireAuthorsNote}]`
    lines.splice(-depth, 0, authorsNote)
  }

  //Append your current location to the memory
  let locationReminder = "You are currently in the " + state.currentRoom + "."
  if (isInAKeyRoom()) {
    locationReminder += " A key fragment is inside this room!"
  }
  if (state.isSameRoomAsVampire) {
    locationReminder += " Alcina is in the same room as you, poised to strike!"
  }
  state.memory.context = memory + "\n" + locationReminder

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

// Don't modify this part
modifier(text)
