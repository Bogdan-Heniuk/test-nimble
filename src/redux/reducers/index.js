import {combineReducers} from 'redux'
import {trackerReducer} from './tracker'

const rootReducer = combineReducers({
    tracker : trackerReducer
})

export default rootReducer

