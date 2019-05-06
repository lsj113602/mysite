import { combineReducers } from 'redux'
import userInfo from '../pages/HomePage/store/reducer'
import cityInfo from '../pages/CityPage/store/reducer'

export default combineReducers({
  userInfo,
  cityInfo
})