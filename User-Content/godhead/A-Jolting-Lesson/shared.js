// Some kind of Singleton?!
if (!state.setup) {
  state.setup = true // Ensure this is only set once and never wiped.
  state.authorsNote = "Story was about female sexual and psychological domination, told in explicit detail. Elaborate feeling of detachment and career blackmail followed." // String for Author's Note.
  state.authorsNoteDepth = 2 // AN inserted n lined from the end of context
  state.authorsNoteDisplay = true // Toggle display of the AN
}
