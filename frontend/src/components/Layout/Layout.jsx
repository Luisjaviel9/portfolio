import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Layout({ children }) {
  const { modoOscuro } = useContext(ThemeContext);

  return (
    <div
      className={
        modoOscuro
          ? "min-h-screen bg-slate-900 text-white"
          : "min-h-screen bg-white text-slate-900"
      }
    >
      {children}
    </div>
  );
}