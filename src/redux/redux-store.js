import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import newsReducer from "./news-reducer";
import currentNewsReducer from "./currentNews-reducer";
import commentsReducer from "./comments-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    newsPage: newsReducer,
    currentNewsPage: currentNewsReducer,
    comments: commentsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;