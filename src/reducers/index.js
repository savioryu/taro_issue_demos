import { combineReducers } from 'redux'
import message from './message'
import common from './common'

export default combineReducers({
  message,
  common
})
