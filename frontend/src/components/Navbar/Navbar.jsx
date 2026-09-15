import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const { modoOscuro } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  return (
    <nav
      className={`w-full shadow-lg border-b transition-colors duration-300 ${
        modoOscuro
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Contenedor principal */}
      <div className="flex h-20 w-full items-center px-12 lg:px-20">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-cyan-400">
          LuisDev
        </h1>

        {/* Menú escritorio */}
        <ul
          className={`hidden md:flex items-center gap-10 ml-280 mr-3 ${
            modoOscuro ? "text-white" : "text-slate-900"
          }`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.navbar.inicio}
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors  whitespace-nowrap"
            >
              {t.navbar.sobreMi}
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.navbar.tecnologias}
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.navbar.proyectos}
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.navbar.contacto}
            </a>
          </li>
        </ul>

        {/* Botones */}
        <div className="ml-auto flex items-center gap-4">
          <LanguageToggle />
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
            <a
              href="#home"
              onClick={() => setMenuAbierto(false)}
            >
              {t.navbar.inicio}
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenuAbierto(false)}
            >
              {t.navbar.sobreMi}
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              onClick={() => setMenuAbierto(false)}
            >
              {t.navbar.tecnologias}
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              onClick={() => setMenuAbierto(false)}
            >
              {t.navbar.proyectos}
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              onClick={() => setMenuAbierto(false)}
            >
              {t.navbar.contacto}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
} 