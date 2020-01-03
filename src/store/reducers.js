import { combineReducers } from 'redux'
import homeInfo from './homeInfo/reducer'
import cityInfo from './cityInfo/reducer'

export default combineReducers({
  homeInfo,
  cityInfo
})