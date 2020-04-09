import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import usersReducer from "./usersReducer";

import thunk from "redux-thunk";

const reducers = combineReducers({

    usersList: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;