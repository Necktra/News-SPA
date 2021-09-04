import { applyMiddleware, combineReducers, createStore } from "redux";
import newsReducer from "./news-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    newsPage: newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;