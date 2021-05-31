import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import moviesReducer from "./movies/moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)))
export default store;