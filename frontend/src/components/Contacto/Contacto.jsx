export default function Contacto() {
  return (
    <section
      id="contacto"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-6">
        Contacto
      </h2>

      <p className="text-slate-300 text-center max-w-2xl mx-auto text-lg leading-8 mb-14">
        ¿Tienes una idea, un proyecto o una oportunidad laboral?
        Estaré encantado de conversar contigo.
      </p>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10">

        <div className="space-y-8">

          <div>
            <h3 className="text-cyan-400 font-semibold text-lg">
              📧 Correo
            </h3>

            <p className="text-white">
              correo@ejemplo.com
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold text-lg">
              📍 Ubicación
            </h3>

            <p className="text-white">
              Santo Domingo, República Dominicana
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold text-lg">
              💼 Disponibilidad
            </h3>

            <p className="text-white">
              Disponible para proyectos Full Stack y oportunidades laborales.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center">

          <a
            href="mailto:correo@ejemplo.com"
            className="inline-block bg-cyan-500 text-black font-semibold px-8 py-4 rounded-xl hover:bg-cyan-400 transition-all duration-300"
          >
            Enviar correo
          </a>

        </div>

      </div>

    </section>
  );
}