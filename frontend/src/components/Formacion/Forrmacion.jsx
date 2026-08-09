import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function Formacion() {
  const { t } = useContext(LanguageContext);
  const { modoOscuro } = useContext(ThemeContext);

  return (
    <section
      id="formacion"
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-6">
        {t.formacion.titulo}
      </h2>

      {/* Descripción */}
      <p
        className={`text-center max-w-3xl mx-auto text-lg leading-8 mb-16 ${
          modoOscuro ? "text-slate-300" : "text-slate-800"
        }`}
      >
        {t.formacion.descripcion}
      </p>

      {/* Tarjetas */}
      <div className="grid md:grid-cols-2 gap-8">
        {t.formacion.items.map((item) => (
          <div
            key={item.titulo}
            className="
              bg-slate-800
              border border-slate-700
              rounded-2xl
              p-5 md:p-8
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-400
              hover:shadow-xl
              hover:shadow-cyan-500/20
            "
          >
            {/* Tipo */}
            <span className="text-cyan-400 text-sm font-semibold">
              {item.tipo}
            </span>

            {/* Título */}
            <h3 className="text-2xl text-white font-bold mt-3 mb-3">
              {item.titulo}
            </h3>

            {/* Institución */}
            <p className="text-slate-300 mb-4">
              {item.institucion}
            </p>

            {/* Estado */}
            <span
              className="
                inline-block
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                px-4 py-2
                rounded-full
                font-semibold
                transition
              "
            >
              {item.estado}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}