"use client";
import { createContext } from "react";

const GiftsProvider = ({ children }: { children: React.ReactNode }) => {
  const GiftContext = createContext({});
  return (
    <GiftContext.Provider value={{ name: "gifts" }}>
      {children}
    </GiftContext.Provider>
  );
};

export default GiftsProvider;
