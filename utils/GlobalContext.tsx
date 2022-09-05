import React, { ReactNode, useContext, useMemo, useState } from "react";

type GlobalContext = {
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
};

const GlobalContext = React.createContext<GlobalContext>({
  price: 0,
  setPrice: () => {},
});

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [price, setPrice] = useState(0);
  const contextValue = useMemo<GlobalContext>(
    () => ({ price, setPrice }),
    [price],
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
