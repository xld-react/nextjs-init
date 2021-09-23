import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface AppStateValue {
  name: string;
  shopCart: {
    items: {
      id: number;
      name: string;
    }[];
  };
}

const defaultContext: AppStateValue = {
  name: "城南花已开",
  shopCart: {
    items: [],
  },
};

export const RootContext = createContext(defaultContext);
export const RootContextSetState = createContext<Dispatch<SetStateAction<AppStateValue>> | undefined>(undefined);

export const RootContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultContext);
  return (
    <RootContext.Provider value={state}>
      <RootContextSetState.Provider value={setState}>{children}</RootContextSetState.Provider>
    </RootContext.Provider>
  );
};
