// store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calculatorReducer from "./calculator/calculatorSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, calculatorReducer);

export const store = configureStore({
  reducer: { calculator: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necesario para redux-persist
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Crear persistor
export const persistor = persistStore(store);
