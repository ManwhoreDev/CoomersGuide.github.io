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

  let authorsNote = ''
  let authorsNoteIndex = -1
  let authorsNoteDepth = -1
  let authorsNoteDepthIndex = -1
  
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
        authorsNote = authorsNoteTokens[1]
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
          authorsNoteDepth = depth
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
  })
  
  // If the current Author's Note has a length and a valid index, set it in the
  // state.
  if (authorsNote.length > 0) {
    state.authorsNote = authorsNote
  }
  
  // If the current Author's Note Depth is valid and has a valid index, set it
  // in the state.
  if (authorsNoteDepth >= 1) {
    state.authorsNoteDepth = authorsNoteDepth
  }
  
  // If we've accepted either (or both) /an and /and commands, remove the lines
  // from the input before continuing. I'f we've process both kinds of commands,
  // remove the one with the higher index first.
  if (
    authorsNoteIndex >= 0
    && authorsNoteDepthIndex >= 0
  ) {
    if (authorsNoteIndex > authorsNoteDepthIndex) {
      inputLines.splice(authorsNoteIndex, 1)
      inputLines.splice(authorsNoteDepthIndex, 1)

    }
    else {
      inputLines.splice(authorsNoteDepthIndex, 1)
      inputLines.splice(authorsNoteIndex, 1)
    }
  }
  else if(authorsNoteIndex >= 0) {
    inputLines.splice(authorsNoteIndex, 1)
  }
  else if (authorsNoteDepthIndex >= 0) {
    inputLines.splice(authorsNoteDepthIndex, 1)
  }
  
  // Set the message based on the current Author's Note and Depth
  if (
    state.authorsNote.length > 0
    && state.authorsNoteDepth >= 1
  ) {
    state.message = "Author's Note (" + state.authorsNoteDepth + "): " + state.authorsNote
  }

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
