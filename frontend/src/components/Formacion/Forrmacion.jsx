const formacion = [
  {
    tipo: "Formación Académica",
    titulo: "Técnico Superior en Desarrollo de Software",
    institucion: "Instituto Técnico Superior Comunitario (ITSC)",
    estado: "Finalizado",
  },

  {
    tipo: "Certificación",
    titulo: "React",
    institucion: "En proceso de aprendizaje",
    estado: "En progreso",
  },

  {
    tipo: "Certificación",
    titulo: "Django REST Framework",
    institucion: "En proceso de aprendizaje",
    estado: "En progreso",
  },

  {
    tipo: "Próximamente",
    titulo: "AWS Cloud Practitioner",
    institucion: "Meta profesional",
    estado: "Pendiente",
  },
];

export default function Formacion() {
  return (
    <section
      id="formacion"
     className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-6">
        Formación y Certificaciones
      </h2>

      <p className= "text-center max-w-3xl mx-auto text-lg leading-8 mb-16">
        Creo en el aprendizaje continuo. Mi objetivo es mantenerme
        actualizado con las tecnologías más demandadas del desarrollo
        de software y la computación en la nube.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {formacion.map((item) => (

          <div
            key={item.titulo}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-8 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
          >

            <span className="text-cyan-400 text-sm font-semibold">
              {item.tipo}
            </span>

            <h3 className="text-2xl text-white font-bold mt-3 mb-3">
              {item.titulo}
            </h3>

            <p className="text-slate-300 mb-3">
              {item.institucion}
            </p>

            <span className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-full font-semibold">
              {item.estado}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}