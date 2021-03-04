import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore} from "redux-persist";
import {rehydrateTrackers} from "./actions";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const onRehydrate = () => {
    store.dispatch(rehydrateTrackers())
}
export const persistor = persistStore(store, null, onRehydrate)
export default store