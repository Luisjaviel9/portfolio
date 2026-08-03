import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { modoOscuro } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full shadow-lg border-b transition-colors duration-300 ${
        modoOscuro
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex h-20 w-full items-center px-12 lg:px-20">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-cyan-400">
          LuisDev
        </h1>

        {/* Menú escritorio */}
        <ul
          className={`hidden md:flex items-center gap-10 ml-280 ${
            modoOscuro ? "text-white" : "text-slate-900"
          }`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition-colors"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors"
            >
              Sobre mí
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="hover:text-cyan-400 transition-colors"
            >
              Tecnologías
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              className="hover:text-cyan-400 transition-colors"
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="hover:text-cyan-400 transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Luna */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>

        {/* Hamburguesa */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className={`md:hidden text-3xl ml-5 ${
            modoOscuro ? "text-white" : "text-slate-900"
          }`}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <ul
          className={`md:hidden flex flex-col px-8 pb-6 gap-4 ${
            modoOscuro ? "text-white" : "text-slate-900"
          }`}
        >
          <li>
            <a href="#home" onClick={() => setMenuAbierto(false)}>
              Inicio
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuAbierto(false)}>
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#technologies" onClick={() => setMenuAbierto(false)}>
              Tecnologías
            </a>
          </li>

          <li>
            <a href="#proyectos" onClick={() => setMenuAbierto(false)}>
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" onClick={() => setMenuAbierto(false)}>
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}