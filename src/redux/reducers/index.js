import {combineReducers} from 'redux'
import {trackersReducer} from './trackers'

const rootReducer = combineReducers({
    trackers : trackersReducer,
})

export default rootReducer

