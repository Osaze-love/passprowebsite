"use client";

import { useEffect, useState } from "react";
import {Provider} from 'react-redux';
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  // Only load persist state on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Provider store={store}>
      {isClient ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        children
      )}
    </Provider>
  );
}
