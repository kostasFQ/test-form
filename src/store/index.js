import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import dataReducer from "./dataReducer";
import stateReducer from "./formStateReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    data: dataReducer,
    formState: stateReducer
  }),
  composedEnhancer);
export default store;
