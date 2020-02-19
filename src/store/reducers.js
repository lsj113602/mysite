import { combineReducers } from 'redux'
import homeInfo from './homeInfo/reducer'
import cityInfo from './cityInfo/reducer'
import productInfo from './product/reducer'

export default combineReducers({
  homeInfo,
  cityInfo,
  productInfo
})