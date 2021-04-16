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
    const targetShortAN = `${state.targetName} is ` + meters.arousal[state.gauge.arousal].display + ","
                                     + meters.corruption[state.gauge.corruption].display + ","
                                     + meters.obedience[state.gauge.obedience].display
    lines.splice(-depth, 0, state.rawAuthorsNote ? state.authorsNote : `[Author's note: ${state.authorsNote}, ${targetShortAN}]`)
  }

  // Set the memory to be the prompt memory plus the target's mental state
  const targetMentalState = "["
                           + state.meters.arousal.prefix + meters.arousal[state.gauge.arousal].note + ", "
                           + state.meters.corruption.prefix + meters.corruption[state.gauge.corruption].note + ", "
                           + state.meters.obedience.prefix + meters.obedience[state.gauge.obedience].note +
                           "]"
  state.memory.context = memory + "\n" + `You have hypnotized ${state.targetName}: ${state.targetDescription}\n` + targetMentalState

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

modifier(text)
