import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { idioma, setIdioma } = useContext(LanguageContext);

  return (
    <button
      onClick={() => setIdioma(idioma === "es" ? "en" : "es")}
      className="border border-cyan-400 px-3 py-1 rounded-md hover:bg-cyan-400 hover:text-white transition"
    >
      {idioma.toUpperCase()}
    </button>
  );
}