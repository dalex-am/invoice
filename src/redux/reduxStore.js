import {combineReducers, createStore, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import terminalsReducer from "./terminalsReducer"
import buyersReducer from "./buyersReducer"

let reducers = combineReducers({
    auth: authReducer,
    terminalsPage: terminalsReducer,
    buyersPage: buyersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;