const modifier = (text) => {
  
  // update based on output text
  updateGauge(text)
  updateDisplay()
  
  return { text: text }
}

// Don't modify this part
modifier(text)
