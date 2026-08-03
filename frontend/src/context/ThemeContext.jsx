import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [modoOscuro, setModoOscuro] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ modoOscuro, setModoOscuro }}
    >
      {children}
    </ThemeContext.Provider>
  );
}