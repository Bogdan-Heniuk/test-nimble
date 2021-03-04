import {combineReducers} from 'redux'
import {trackersReducer} from './trackers'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['trackers']
}

const rootReducer = persistReducer(persistConfig, combineReducers({
    trackers: trackersReducer
}))

export default rootReducer

