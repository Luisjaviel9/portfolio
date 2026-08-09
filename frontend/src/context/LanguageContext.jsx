import { createContext, useState } from "react";

export const LanguageContext = createContext();
import es from "../translations/es";
import en from "../translations/en";

export function LanguageProvider({ children }) {
  console.log("LanguageProvider se está ejecutando");

  const [idioma, setIdioma] = useState("es");
  const t = idioma === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma , t}}>
      {children}
    </LanguageContext.Provider>
  );
}