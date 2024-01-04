/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//Location: src/store.js

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/root_reducer';

// Importing Redux Saga middleware and the root saga
import createSagaMiddleWare from 'redux-saga';
import sagaData from './saga';




/* To use redux persist we will import below  */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

//import persistReducer from 'redux-persist/es/persistReducer';
//import storage from 'redux-persist/lib/storage';
/*  */



let persistConfig={
  key:'root',
  
  storage: AsyncStorage,
}


let persistedReducer=persistReducer(persistConfig,rootReducer);

// Creating an instance of Redux Saga middleware
const sagaMiddleware = createSagaMiddleWare();

// Configuring the Redux store with the root reducer and middleware
const store = configureStore({
  //reducer: rootReducer,
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(sagaData);
export const persist_store = persistStore(store);
export default store;