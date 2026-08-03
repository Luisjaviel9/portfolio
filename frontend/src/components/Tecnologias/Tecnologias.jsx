const tecnologias = [
  { nombre: "Python", icono: "🐍" },
  { nombre: "Django", icono: "🌐" },
  { nombre: "Django REST Framework", icono: "⚙️" },
  { nombre: "React", icono: "⚛️" },
  { nombre: "JavaScript", icono: "🟨" },
  { nombre: "PostgreSQL", icono: "🐘" },
  { nombre: "Git", icono: "🟢" },
  { nombre: "GitHub", icono: "⚫" },
];

export default function Tecnologias() {
  return (
    <section
      id="technologias"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-14">
        Tecnologías
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {tecnologias.map((tecnologia) => (

          <div
            key={tecnologia.nombre}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
          >

            <div className="text-5xl mb-5">
              {tecnologia.icono}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {tecnologia.nombre}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}