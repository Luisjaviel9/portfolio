export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 min-h-[90vh] flex items-center">

      <div className="grid grid-cols-2 gap-16 items-center">

        {/* Texto */}

        <div>

          <p className="text-cyan-400 text-xl font-semibold">
            Hola, soy 👋
          </p>

         <h1 className="text-6xl font-extrabold text-white mt-5 leading-tight">
          Luis de la Rosa
         </h1>

          <p className="text-2xl text-slate-300 mt-8">
            Desarrollador Full Stack
          </p>

          <p className="text-slate-400 mt-6 leading-8 text-lg">
            Especializado en Python, Django,
            Django REST Framework y React.
            Actualmente desarrollo soluciones web
            modernas y escalables.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg text-white font-semibold duration-300">
              Ver Proyectos
            </button>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-7 py-3 rounded-lg duration-300">
              Descargar CV
            </button>

          </div>

        </div>

        {/* Imagen */}

        <div className="flex justify-center">

          <div className="w-96 h-96 rounded-full bg-slate-800 border-4 border-cyan-500 flex items-center justify-center">

            <span className="text-slate-500 text-xl">
              Tu Foto
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}