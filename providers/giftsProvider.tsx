"use client";
import { useSearchParams } from "next/navigation";

import { createContext, useEffect, useState } from "react";

export const GiftContext = createContext({});

export const GiftsProvider = ({ children }: { children: React.ReactNode }) => {
  let [gifts, setGifts] = useState({});

  return (
    <GiftContext.Provider value={{ gifts }}>{children}</GiftContext.Provider>
  );
};
