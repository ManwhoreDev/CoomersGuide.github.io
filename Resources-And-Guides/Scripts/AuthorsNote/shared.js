// Some kind of Singleton?!
if (!state.setup)
{
  state.setup = true // Ensure this is only set once and never wiped.
  state.currentAuthorsNote = "" // Makes a state that holds a string for AN. To be set later with input modifier.
}
