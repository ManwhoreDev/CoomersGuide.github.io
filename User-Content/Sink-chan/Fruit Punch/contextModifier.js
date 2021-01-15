const getArousalLevel = (fruitPunchCount) => {
  switch (fruitPunchCount) {
      case 0:
        return {text: 'cold and distant', color: 'blue'}

      case 1:
        return {text: 'cool and receptive, open to sex at a later time', color: 'green'}

      case 2:
        return {text: 'horny, looking for sex soon', color: 'yellow'}

      case 3:
        return {text: 'incredibly horny, looking for sex now, practically begging for sex', color: 'orange'}

      case 4:
        return {text: 'uncontainable lust, touching herself, moaning in public', color: 'red'}

      case 5:
      default:
        return {text: 'mind and body consumed by sexual desire, no act is too depraved', color: 'magenta'}
    }
}

const modifier = (text) => {
  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength) : text
  const lines = context.split("\n")
  if (lines.length > 2) {
    const fruitPunchCount = (context.toLowerCase().match(/fruit punch/g) || []).length
    const arousalLevel = getArousalLevel(fruitPunchCount)
    const authorsNote = "This is an erotic story full of detail around Jessica's frustration. Jessica's sexual arousal level: " + arousalLevel.text
    
    state.displayStats = [{key:'Arousal Level', value: arousalLevel.text, color: arousalLevel.color}]
    lines.splice(-3, 0, `[Author's note: ${authorsNote}]`)
  }
  // Make sure the new context isn't too long, or it will get truncated by the server.
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  const finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}

modifier(text)
