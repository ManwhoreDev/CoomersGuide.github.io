const modifier = (text) => {
  
  if (info.actionCount > 1) {
  	// See if the AI has changed the rooms
  	updateRoomState(text)
  	updateDisplay()
  }
  
  return { text: text }
}

modifier(text)
