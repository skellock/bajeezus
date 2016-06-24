const INITIAL_STATE = { value: 0 }

// do something important & significant
const increment = (state, action) => ({ value: state.value + 1 })

// our reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT': return increment(state, action)
    default: return state
  }
}
