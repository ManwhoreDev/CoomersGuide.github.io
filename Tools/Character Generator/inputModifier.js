const modifier = (text) => {
  if (info.actionCount < 1) {
    setPromptPlaceholders(text)
    return {
      text: text
    }
  }

  return {
    text: '',
    stop: true
  }
}

modifier(text)
