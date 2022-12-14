import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import auth from './auth';
// import TokenReducer from './TokenReducer';
import isApplunchFirst from './isApplunchFirst';
const persistConfig1 = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userData', 'token'],
};
export const store = configureStore({
  reducer: {
    userData: persistReducer(persistConfig1, auth),
  },
});
export const persistor = persistStore(store);
