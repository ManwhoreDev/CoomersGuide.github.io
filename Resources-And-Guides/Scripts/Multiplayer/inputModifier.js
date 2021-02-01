/*
 * Takes a multi-line input and splits the lines. If any begin with the "/an "
 * or "/and " tokens, take the rest of the line and make it the new Author's
 * Note or Author's Note Depth, respectively. This will be injected into the
 * context in the Context Modifier script. Rudimentary boundary checking so that
 * we don't do silly things like dereference an empty array and so on. No
 * negative scale tipping here!
 */
const modifier = (text) => {
  let modifiedText = text

  reconcilePlayerList()

  let authorsNoteIndex = -1
  let authorsNoteDepthIndex = -1
  let authorsNoteDisplayIndex = -1
  let passTurnIndex = -1
  let playerListIndex = -1
  
  // Split the input by line
  const inputLines = modifiedText.split("\n")
  
  // For each line, if it is one of the supported commands, try to execute the
  // command. Otherwise, ignore it.
  inputLines.forEach((line, index) => {
    if (line.startsWith("/an ")) {
      //If it's a properly-formatted Author's Note, copy it to set in the state.
      // Otherwise, ignore it.
      let authorsNoteTokens = line.split("/an ")
      if(
        2 === authorsNoteTokens.length
        && -1 === authorsNoteIndex
      ) {
        authorsNoteIndex = index
        state.authorsNote = authorsNoteTokens[1]
      }
      else {
        console.log("Invalid Author's Note passed: " + line)
      }
    }
    else if(line.startsWith("/and ")) {
      //If it's a properly-formatted Author's Note Depth, copy it to set in the
      // state. Otherwise, ignore it.
      let authorsNoteDepthTokens = line.split("/and ")
      if(
        2 === authorsNoteDepthTokens.length
        && -1 === authorsNoteDepthIndex
      ) {
        const depth = parseInt(authorsNoteDepthTokens[1])
        if (
          Number.isInteger(depth)
          && depth >= 1
          && depth < 10
        ) {
          state.authorsNoteDepth = depth
          authorsNoteDepthIndex = index
        }
        else {
          console.log("Invalid Author's Note Depth passed: " + line)
        }
      }
      else {
        console.log("Invalid Author's Note Depth passed: " + line)
      }
    }
    else if (line.startsWith("/anv")) {
      if(-1 === authorsNoteDisplayIndex) {
        authorsNoteDisplayIndex = index
        state.authorsNoteDisplay = !state.authorsNoteDisplay
      }
      else {
        console.log("Invalid Author's Note Display passed: " + line)
      }
    }
    else if (line.startsWith("/pass")) {
        if (-1 === passTurnIndex) {
          passTurnIndex = index
          passTurn()
          updateDisplay()
        }
    }
    else if (line.startsWith("/playerlist ")) {
        if (-1 === playerListIndex) {
          playerListIndex = index
          let playerMappingTokens = line.split("/playerlist ")
          if (
            playerMappingTokens
            && playerMappingTokens.length === 2
          ) {
            updatePlayerList(playerMappingTokens[1])
            updateDisplay()
          }
        }
    }
  })

  // Add any indexes we want to delete to an array
  let indexesToDelete = [];
  if (authorsNoteIndex >= 0) {
    indexesToDelete.push(authorsNoteIndex)
  }
  if (authorsNoteDepthIndex >= 0) {
    indexesToDelete.push(authorsNoteDepthIndex)
  }
  if (authorsNoteDisplayIndex >= 0) {
    indexesToDelete.push(authorsNoteDisplayIndex)
  }
  if (passTurnIndex >= 0) {
    indexesToDelete.push(passTurnIndex)
  }
  if (playerListIndex >= 0) {
    indexesToDelete.push(playerListIndex)
  }
  
  // Put them in reverse order, so we can delete from the highest index first.
  indexesToDelete.sort().reverse();
  
  // Splice out the command lines
  indexesToDelete.forEach((index) => {
    inputLines.splice(index, 1)
  })

  updateDisplay()

  modifiedText = inputLines.join("\n")
  
  // If we have extracted an Author's Note and the resulting player command is a
  // noop, issue the stop command to prevent energy usage.
  if(modifiedText.length <= 0) {
    return {
      text: '',
      stop: true
    }
  }
  else {
   return {
     text: modifiedText
   }
  }
}

modifier(text)
