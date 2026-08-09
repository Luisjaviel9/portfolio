import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Proyectos() {
  const { t } = useContext(LanguageContext);

  return (
    <section
      id="proyectos"
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 md:mb-12">
        {t.proyectos.titulo}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {t.proyectos.items.map((proyecto) => (

          <div
            key={proyecto.titulo}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
          >

            <div className="h-44 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <span className="text-slate-400">
                {t.proyectos.imagen}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {proyecto.titulo}
            </h3>

            <p className="text-slate-300 leading-7 mb-5">
              {proyecto.descripcion}
            </p>

            <p className="text-cyan-400 text-sm mb-5">
              {proyecto.tecnologias}
            </p>

            <span className="inline-block bg-cyan-500 text-black font-semibold px-4 py-2 rounded-full">
              {proyecto.estado}
            </span>

          </div>

        ))}

      </div>
    </section>
  );
}