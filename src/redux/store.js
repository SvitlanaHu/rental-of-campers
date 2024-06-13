import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { camperReducer } from "./camperSlice";

const camperPersistConfig = {
  key: 'camperData',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    camperData: persistReducer(camperPersistConfig, camperReducer)
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store, null);
export { persistor }
