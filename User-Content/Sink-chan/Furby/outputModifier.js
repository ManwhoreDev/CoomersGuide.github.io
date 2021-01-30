const modifier = (text) => {
	let lines = text.split('\n')

	if (info.actionCount > 1) {
		lines.forEach((line, index) => {
			// It's possible for the 0th line of the output to complete the
			// sentence in the last line in history
			let lastHistoryLine = ''
			if (index === 0) {
				if (
					history
					&& history.length > 0  
				) {
					const lastText = history[history.length -1].text
					if (getTokensIfSpeechMatches(line, lastText).matches) {
						lastHistoryLine = lastText
					}
				}
			}
			// Might need to strip duplicated output here?
			lines[index] = convertEnglishToFurbish(line, lastHistoryLine)
			updateDisplay()
		})
	}

	let convertedText = lines.join('\n')

	return { text: convertedText }
}

modifier(text)
