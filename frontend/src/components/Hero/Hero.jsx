export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 min-h-[65vh] flex items-center">

     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto */}

        <div>

          <p className="text-cyan-400 text-xl font-semibold">
            Hola, soy 👋
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-5 leading-tight">
             Luis De La Rosa
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
           <div className="flex gap-5 mt-10 flex-wrap">

         <a
          href="#proyectos"
          className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg text-white font-semibold transition duration-300"
          >
          Ver Proyectos
         </a>

        <a
          href="/cv/Luis_De_La_Rosa_CV.pdf"
          download
         className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-7 py-3 rounded-lg transition duration-300"
        >
         Descargar CV
       </a>

       <a
         href="https://github.com/Luisjaviel9"
         target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/40 px-7 py-3 rounded-lg transition-all duration-300"
>
        GitHub
       </a>

       </div>
      
        </div>

        {/* Imagen */}

        <div className="flex justify-center">

      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-slate-800 border-4 border-cyan-500 flex items-center justify-center">

            <span className="text-slate-500 text-xl">
              Tu Foto
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}