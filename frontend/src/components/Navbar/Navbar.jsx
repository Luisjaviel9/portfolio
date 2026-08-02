export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 shadow-lg border-b border-slate-700">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-4xl font-bold text-cyan-400">
          LuisDev
        </h1>

        <ul className="flex items-center gap-8 text-white">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Inicio
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Sobre mí
            </a>
          </li>

           <li>
            <a href="#technologies" className="hover:text-cyan-400 transition-colors">
              Tecnologías
            </a>
          </li>


          <li>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">
              Contacto
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}