"use client";

import React, { createContext, useContext, useState } from "react";

export enum Theme {
  orange = "orange",
  cyan = "cyan",
  purple = "purple",
}

const AppContext = createContext<any>({
  theme: Theme.orange,
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [theme, setTheme] = useState<Theme>(Theme.orange);
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
