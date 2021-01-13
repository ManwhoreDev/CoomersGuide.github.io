
// Checkout the repo examples to get an idea of other ways you can use scripting
// https://github.com/latitudegames/Scripting/blob/master/examples

// info.memoryLength is the length of the memory section of text.
// info.maxChars is the maximum length that text can be. The server will truncate the text you return to this length.

// This modifier re-implements Author's Note as an example.
const modifier = (text) => {
  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength) : text
  const lines = context.split("\n")
  
  // If there are enough lines to insert the Author's Note and we actually have
  // one, splice it in at 2 lines from the end of the context. I've selected 2
  // lines instead of 3 to compensate for using Griffon instead of Dragon. If
  // you are using Dragon, use the default settings of context -3.
  if (
    lines.length > 1
    && state.currentAuthorsNote
    && state.currentAuthorsNote.length > 0
  ) {
    lines.splice(-2, 0, `[Author's note: ${state.currentAuthorsNote}]`)
  }

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

// Don't modify this part
modifier(text)
