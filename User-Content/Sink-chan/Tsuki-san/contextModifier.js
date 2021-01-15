const modifier = (text) => {
  if (info.actionCount < 2) {
    resetGauge()
  }
  
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
    lines.splice(-depth, 0, `[Author's note: ${state.authorsNote}]`)
  }
 
  // Set the memory to be the prompt memory plus Tsuki's mental state
  const tsukiMentalState = "["
                           + meters.embarrassment.prefix + meters.embarrassment[state.gauge.embarrassment].note + ", "
                           + meters.arousal.prefix + meters.arousal[state.gauge.arousal].note + ", "
                           + meters.corruption.prefix + meters.corruption[state.gauge.corruption].note + ", "
                           + meters.mindBreak.prefix + meters.mindBreak[state.gauge.mindBreak].note + ", "
                           + meters.obedience.prefix + meters.obedience[state.gauge.obedience].note +
                           "]"
  state.memory.context = memory + "\n" + tsukiMentalState

  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

// Don't modify this part
modifier(text)
