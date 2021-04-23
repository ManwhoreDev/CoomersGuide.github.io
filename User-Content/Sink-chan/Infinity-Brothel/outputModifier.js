const modifier = (text) => {
  if (info.actionCount === 1) {
    return { text: "." } // Restrict the first output
  }
  else if (!state.type) {
  	return {text: '' } // If we're not loaded, block outputs.
  }

  return { text: text }
}

modifier(text)
