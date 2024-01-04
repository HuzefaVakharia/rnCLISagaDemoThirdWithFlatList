/**
 * @format
 */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store, {persist_store} from './src/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';






const AppRedux = () => (
    <Provider store={store}>
    <PersistGate persistor={persist_store}>
        <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);