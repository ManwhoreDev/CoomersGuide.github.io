/*
 * Takes a multi-line input and splits the lines. If any begin with the "/an "
 * token, take the rest of the line and make it the new Author's Note. This will
 * be injected into the context in the Context Modifier script. Rudimentary
 * boundary checking so that we don't do silly things like dereference an empty
 * array and so on. No negative scale tipping here!
 */
const modifier = (text) => {
  let modifiedText = text
  let authorsNote = ''
  let authorsNoteIndex = -1
  
  // Split the input by line
  const inputLines = modifiedText.split("\n")
  
  // For each line, if it's a properly-formatted Author's Note, copy it to set
  // in the state. Otherwise, ignore it.
  inputLines.forEach((line, index) => {
    if (line.startsWith("/an ")) {
      let authorsNoteTokens = line.split("/an ")
      if(2 === authorsNoteTokens.length) {
        authorsNoteIndex = index
        authorsNote = authorsNoteTokens[1]
      }
      else {
        console.log("Invalid Author's Note passed: " + line)
      }
    }
  })
  
  // If the current Author's Note has a length and a valid index, set it in the
  // state, remove it from the input, and set the message.
  if (
    authorsNote.length > 0
    && authorsNoteIndex >= 0
    && authorsNoteIndex < inputLines.length
  ) {
    state.currentAuthorsNote = authorsNote
    state.message = "Set Author's Note to: " + authorsNote
    inputLines.splice(authorsNoteIndex, 1)
  }
  
  modifiedText = inputLines.join("\n")
  
  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
