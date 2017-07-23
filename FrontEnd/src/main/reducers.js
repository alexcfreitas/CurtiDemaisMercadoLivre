import { combineReducers } from 'redux'
import curtiReducer from '../curtiDemais/curtiReducer'

const rootReducer = combineReducers({
    curti: curtiReducer
})

export default rootReducer