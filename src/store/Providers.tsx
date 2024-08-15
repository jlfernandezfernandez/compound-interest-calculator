// /store/Providers.tsx

"use client";

import { Provider } from "react-redux";
import { store, persistor } from ".";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
