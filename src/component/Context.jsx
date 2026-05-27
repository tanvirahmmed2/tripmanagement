'use client'
import { createContext } from "react";

export const MyContext = createContext();

export function ContextProvider({ children }) {
  return (
    <MyContext.Provider value={{}}>
      {children}
    </MyContext.Provider>
  );
}