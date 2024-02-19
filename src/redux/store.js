import { applyMiddleware, legacy_createStore } from "redux";
import { ticketReducer } from "./reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./conbineReducer";


export const ReduxStore=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))