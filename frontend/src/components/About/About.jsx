export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 md:mb-12">
        Sobre mí
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Texto */}

        <div>

          <p className="text-slate-300 text-lg leading-9">
            Soy un desarrollador Full Stack apasionado por crear
            aplicaciones web modernas, eficientes y escalables.
          </p>

          <p className="text-slate-300 text-lg leading-9 mt-6">
            Actualmente me especializo en Python, Django,
            Django REST Framework, React y PostgreSQL.
          </p>

          <p className="text-slate-300 text-lg leading-9 mt-6">
            Mi objetivo es desarrollar software que ayude
            a resolver problemas reales mediante tecnología.
          </p>

        </div>

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
            Actualmente
          </h3>

          <ul className="space-y-5 text-slate-300">

            <li>🚀 Aprendiendo React y Django REST Framework</li>

            <li>💻 Construyendo proyectos Full Stack</li>

            <li>📚 Mejorando arquitectura de software</li>

            <li>🎯 Preparándome para trabajar como desarrollador</li>

          </ul>

        </div>

      </div>

    </section>
  );
}