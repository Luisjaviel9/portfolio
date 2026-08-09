import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function Hero() {
  const { t } = useContext(LanguageContext);
  const { modoOscuro } = useContext(ThemeContext);

  return (
    <section
      id="inicio"
      className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto */}
        <div>

          {/* Saludo */}
          <p className="text-cyan-400 text-xl font-semibold">
            {t.hero.saludo} 👋
          </p>

          {/* Nombre */}
          <h1
            className={`text-4xl md:text-6xl font-extrabold mt-5 leading-tight ${
              modoOscuro ? "text-white" : "text-slate-900"
            }`}
          >
            Luis De La Rosa
          </h1>

          {/* Profesión */}
          <p
            className={`text-2xl mt-8 ${
              modoOscuro ? "text-white" : "text-slate-900"
            }`}
          >
            {t.hero.profesion}
          </p>

          {/* Descripción */}
          <p
            className={`text-lg leading-8 mt-6 max-w-xl ${
              modoOscuro ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.hero.descripcion}
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* Ver proyectos */}
            <a
              href="#proyectos"
              className="
                bg-cyan-500
                hover:bg-cyan-600
                px-7
                py-3
                rounded-lg
                text-white
                font-semibold
                transition
                duration-300
              "
            >
              {t.hero.verProyectos}
            </a>

            {/* Descargar CV */}
            <a
              href="/cv/Luis_De_La_Rosa_CV.pdf"
              download
              className="
                border
                border-cyan-500
                text-cyan-400
                hover:bg-cyan-500
                hover:text-white
                px-7
                py-3
                rounded-lg
                transition
                duration-300
              "
            >
              {t.hero.descargarCv}
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Luisjaviel9"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border-2
                border-cyan-500
                text-cyan-400
                hover:bg-cyan-500
                hover:text-white
                hover:shadow-lg
                hover:shadow-cyan-500/40
                px-7
                py-3
                rounded-lg
                transition-all
                duration-300
              "
            >
              {t.hero.github}
            </a>

          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">

          <div
            className="
              w-72 h-72
              md:w-[420px] md:h-[420px]
              rounded-full
              overflow-hidden
              shadow-xl
              shadow-cyan-500/5
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <img
              src="/images/luis.png"
              alt="Luis de la Rosa"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}