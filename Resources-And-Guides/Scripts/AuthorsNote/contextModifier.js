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

  state.memory.context = memory + `\nYou are with ${state.name}.\n`
    + `[${state.name}'s physical description: ${state.physicalDescription}\n`
    + `${state.name}'s mental description: ${state.mentalDescription}\n`
    + `${state.name}'s mental dialog examples: ${state.dialogExamples}]`

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

modifier(text)
