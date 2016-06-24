const INITIAL_STATE = {
  loggedIn: false,
  randomPieceOfData: null
}

// fires when it is time to save data
const saveData = (state, action) =>
  ({...state, randomPieceOfData: action.randomPieceOfData})

// fires when we login
const login = (state, action) =>
  ({...state, loggedIn: true})

// fires when we logout
const logout = (state, action) =>
  ({...state, loggedIn: false})

// our reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN': return login(state, action)
    case 'LOGOUT': return logout(state, action)
    case 'SAVE_DATA': return saveData(state, action)
    default: return state
  }
}
