import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
albums: albumsReducer,
})
const store = createStore(rootReducer, composeEnhancers(app) )
export default store
