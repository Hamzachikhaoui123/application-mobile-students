import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { encryptTransform } from 'redux-persist-transform-encrypt';
import authServiceSaga from './auth/saga';
import authReducer from './auth/reducer';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const encryptor = encryptTransform({
  secretKey: 'Student',
  onError: function (error) {
    // Handle the error.
  },
})

const rootReducer = combineReducers({
  authReducer,

})

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,

  transforms: [encryptor],
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
  blacklist: []
};

const sagaMiddleware = createSagaMiddleware();

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authServiceSaga);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {
  store,
  persistor
};