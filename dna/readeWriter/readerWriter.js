function genesis() {
  return true
}

function validateCommit() {
  return true
}

function holoTextWrite(text) {
  var hash = commit('holoText', text)
  return hash
}

