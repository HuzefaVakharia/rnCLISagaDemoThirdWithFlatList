/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {FETCH_QUOTES, SET_QUOTES_DATA} from '../utils/constants';

// Action creator function for initiating the fetch quotes action
export function fetchQuotes() {
  return {
    type: FETCH_QUOTES,
  };
}

// Action creator function for setting quotes data in the Redux store
export function setQuotes(data) {
  return {
    type: SET_QUOTES_DATA,
    data,
  };
}