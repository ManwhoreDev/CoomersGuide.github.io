const modifier = (text) => {
  if (info.actionCount < 2) {
    resetGauge()
  }
  
  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength) : text
  const lines = context.split("\n")
 
  // Set the memory to be the prompt memory plus players's mental state
  const mentalState = "[" + meters.jarjar.prefix + meters.jarjar[state.gauge.jarjar].note + "]"

  // If there are enough lines to insert the Author's Note and we actually have
  // one, splice it in at n lines from the end of the context, where n is the
  // depth. I've selected 2 lines instead of 3 to compensate for using Griffon
  // instead of Dragon. Defaults to 1 because we can't insert lower in the
  // context than the end.
  const depth = state.authorsNoteDepth > 1 ? state.authorsNoteDepth : 1
  if (
    lines.length > (depth - 1)
  ) {
    lines.splice(-depth, 0, `[Author's note: ${state.authorsNote}, ${mentalState}]`)
  }
 
  state.memory.context = memory + "\n" + mentalState

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

// Don't modify this part
modifier(text)
