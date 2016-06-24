import { combineReducers } from 'redux'
import counterReducer from './CounterReducer'
import userReducer from './UserReducer'

export default combineReducers({
  counter: counterReducer,
  user: userReducer
})
