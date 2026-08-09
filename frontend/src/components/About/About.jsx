import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function About() {
  const { t } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Columna izquierda */}
        <div>
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 md:mb-12">
       {t.about.titulo}
      </h2>

          <p className="text-lg leading-9">
            {t.about.sobreMi}
          </p>

          <p className="text-lg leading-9 mt-6">
            {t.about.especializacion}
          </p>

          <p className="text-lg leading-9 mt-6">
            {t.about.objetivo}
          </p>
        </div>

        {/* Columna derecha */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 md:mb-12">
         {t.about.crecimiento}
        </h3>

          {/* Tarjeta */}
          <div
            className="
              bg-slate-800
              rounded-2xl
              border
              border-slate-700
              p-5 md:p-8
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-400
              hover:shadow-2xl
              hover:shadow-cyan-500/20
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              {t.about.actualmente}
            </h3>

            <ul className="space-y-5 text-slate-300">
              <li>
                🚀 {t.about.aprendiendo}
              </li>

              <li>
                💻 {t.about.construyendo}
              </li>

              <li>
                📚 {t.about.mejorando}
              </li>

              <li>
                🎯 {t.about.preparandome}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}