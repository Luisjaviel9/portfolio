const proyectos = [
  {
    titulo: "Sistema de Planificación de Rutas",
    descripcion:
      "Sistema Full Stack para importar pedidos desde Excel, planificar rutas de distribución y administrar camiones.",
    tecnologias: "Django • Django REST Framework • React • PostgreSQL",
    estado: "En desarrollo",
  },

  {
    titulo: "Portafolio Web",
    descripcion:
      "Portafolio profesional desarrollado con React para mostrar mis habilidades y proyectos.",
    tecnologias: "React • Tailwind CSS • Vite",
    estado: "En desarrollo",
  },

  {
    titulo: "Sistema de Capacitación en Línea",
    descripcion:
      "Plataforma educativa desarrollada para fortalecer el aprendizaje mediante contenido interactivo.",
    tecnologias: "Python • Django • PostgreSQL",
    estado: "Finalizado",
  },
];

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-14">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {proyectos.map((proyecto) => (

          <div
            key={proyecto.titulo}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
          >

            <div className="h-44 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <span className="text-slate-400">
                Imagen del proyecto
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