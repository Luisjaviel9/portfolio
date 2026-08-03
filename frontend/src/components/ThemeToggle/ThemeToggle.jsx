import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { modoOscuro, setModoOscuro } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setModoOscuro(!modoOscuro)}
      className="text-2xl cursor-pointer"
      type="button"
    >
      {modoOscuro ? "☀️" : "🌙"}
    </button>
  );
}