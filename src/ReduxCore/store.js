import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import carsReducer from "./reducers/CarsReducer";

const rootReducer= combineReducers({
   CARS: carsReducer
})
 const composeEnhancers =composeWithDevTools({
     trace: true,
     traceLimit: 25
 })

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
 export default store