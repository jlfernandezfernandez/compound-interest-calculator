// store/types.ts

import { store } from "./index";

// Define los tipos RootState y AppDispatch aquí
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
