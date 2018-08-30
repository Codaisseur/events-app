import {combineReducers} from 'redux'
import events from './events'
import event from './event'
import currentUser from './currentUser'

export default combineReducers({
  events,
  event,
  currentUser
})