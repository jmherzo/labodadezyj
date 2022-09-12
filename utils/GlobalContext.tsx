import { Gift } from "@/lib/types";
import React, { ReactNode, useContext, useMemo, useState } from "react";

type GlobalContext = {
  gift: Gift;
  setGift: React.Dispatch<React.SetStateAction<Gift>>;
};

export const initialGift: Gift = {
  id: 0,
  description: "",
  price: 0,
  amount: 0,
  imageSrc: "",
};

const GlobalContext = React.createContext<GlobalContext>({
  gift: initialGift,
  setGift: () => {},
});

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [gift, setGift] = useState<Gift>(initialGift);
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
