/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//Location: src/reducers/root_reducer.js

import { combineReducers } from "redux";
import { quoteReducer } from "./quote_reducer";

const rootReducer = combineReducers({
    quoteReducer
})

export default rootReducer;