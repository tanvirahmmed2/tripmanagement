'use client'
import { createContext, useState } from "react";

export const MyContext = createContext();

export function ContextProvider({ children }) {
    const [isLogin, setIslogin]=useState(false)
    const [isSidebar, setIsSidebar]=useState(false)





    const contextValues={
        isLogin, setIslogin,isSidebar, setIsSidebar



    }
  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
}