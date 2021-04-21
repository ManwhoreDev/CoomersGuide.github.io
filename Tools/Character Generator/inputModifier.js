const modifier = (text) => {
  if (info.actionCount < 1) {
    if (generatorType === "IB1") {
      setIB1PromptPlaceholders(text)
    }
    else if (generatorType === "RAW") {
      setRAWPromptPlaceholders(text)
    }
    else {
      console.error("Invalid Generator Type")
      return {
        text: '',
        stop: true
      }
    }
    
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
