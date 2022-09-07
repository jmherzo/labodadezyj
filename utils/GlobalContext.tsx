import { Gift } from "@/lib/types";
import React, { ReactNode, useContext, useMemo, useState } from "react";

type GlobalContext = {
  gift: Gift;
  setGift: React.Dispatch<React.SetStateAction<Gift>>;
};

const initialState = {
  id: -1,
  description: "",
  price: 0,
  amount: 0,
};

const GlobalContext = React.createContext<GlobalContext>({
  gift: initialState,
  setGift: () => {},
});

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [gift, setGift] = useState<Gift>(initialState);
  const contextValue = useMemo<GlobalContext>(
    () => ({ gift, setGift }),
    [gift],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
