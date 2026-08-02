import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBriefcase,
} from "react-icons/fa";

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
        Estoy disponible para colaborar y crear soluciones reales.
      </p>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Correo */}
        <div>
        <div className="flex items-center gap-3 mb-2">
        <FaEnvelope className="text-cyan-400 text-xl" />
        <h3 className="text-cyan-400 font-semibold text-lg">
        Correo
        </h3>
     </div>

            <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=deluisjaviel7@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
         className="text-white hover:text-cyan-400 transition"
>
         deluisjaviel7@gmail.com
        </a>
          </div>

          {/* Ubicación */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <h3 className="text-cyan-400 font-semibold text-lg">
                Ubicación
              </h3>
            </div>

            <p className="text-white">
              Santo Domingo Norte, República Dominicana
            </p>
          </div>

          {/* GitHub */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaGithub className="text-cyan-400 text-xl" />
              <h3 className="text-cyan-400 font-semibold text-lg">
                GitHub
              </h3>
            </div>

            <a
              href="https://github.com/Luisjaviel9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition"
            >
              github.com/Luisjaviel9
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaLinkedin className="text-cyan-400 text-xl" />
              <h3 className="text-cyan-400 font-semibold text-lg">
                LinkedIn
              </h3>
            </div>

            <a
              href="https://www.linkedin.com/in/luis-de-la-rosa-6a8251241/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition"
            >
              Ver mi perfil de LinkedIn
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaWhatsapp className="text-cyan-400 text-xl" />
              <h3 className="text-cyan-400 font-semibold text-lg">
                WhatsApp
              </h3>
            </div>

            <a
              href="https://wa.me/18094577329?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo%20sobre%20una%20oportunidad."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition"
            >
              +1 (809) 457-7329
            </a>
          </div>

          {/* Disponibilidad */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaBriefcase className="text-cyan-400 text-xl" />
              <h3 className="text-cyan-400 font-semibold text-lg">
                Disponibilidad
              </h3>
            </div>

            <p className="text-white">
              Disponible para oportunidades Full Stack y proyectos freelance.
            </p>
          </div>

        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-5 mt-14">

         <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=deluisjaviel7@gmail.com"
        target="_blank"
         rel="noopener noreferrer"
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition"
>
         Enviar correo
        </a>
          <a
            href="https://github.com/Luisjaviel9"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/luis-de-la-rosa-6a8251241/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/18094577329?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo%20sobre%20una%20oportunidad."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition"
          >
            WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}