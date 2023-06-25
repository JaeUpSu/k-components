"use client";

import { createContext } from "react";

export const NextRouterContext = createContext({});

const NextRouterContextProvider = ({ children, value }: any) => (
  <NextRouterContext.Provider value={value}>
    {children}
  </NextRouterContext.Provider>
);

export default NextRouterContextProvider;
