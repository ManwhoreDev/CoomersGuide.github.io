const modifier = (text) => {
  if (info.actionCount === 1) {
    text = saveGame()
    return { text: "\n" + text + "\n" }
  }
  
  return { text: ''}
}

modifier(text)
