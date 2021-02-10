// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = "" // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lines from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN
  state.rawAuthorsNote = false // Whether to not surround the note with [Author's note: ]
}
