import {useState} from "react";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBriefcase,
} from "react-icons/fa";

export default function Contacto() {
const[formulario, setFormulario]= useState({

  nombre:  "",
  correo:  "",
  mensaje: "",
});

const [enviando, setEnviando] = useState(false);
const [estado, setEstado] = useState("");

const enviarFormulario = async (e) => {
  e.preventDefault();

  setEnviando(true);
  setEstado("");

  try {
    const respuesta = await fetch(
      "http://127.0.0.1:8000/api/contacto/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
      }
    );

    if (respuesta.ok) {
      setEstado("Mensaje enviado correctamente.");

      setFormulario({
        nombre: "",
        correo: "",
        mensaje: "",
      });

    setTimeout(() => {
  setEstado("");
}, 4000);

    } else {
      setEstado("No se pudo enviar el mensaje.");
    }
  } catch (error) {
    setEstado("Error de conexión con el servidor.");
    console.error(error);
  } finally {
    setEnviando(false);
  }
};
return (

    <section
      id="contacto"
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-6">
        Contacto
      </h2>

      <p className=" text-center max-w-2xl mx-auto text-lg leading-8 mb-14">
        ¿Tienes una idea, un proyecto o una oportunidad laboral?
        Estoy disponible para colaborar y crear soluciones reales.
      </p>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-10">
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
              className="text-white hover:text-cyan-400 transition "
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
              className="text-white hover:text-cyan-400 transition text-center"
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
        {/* Formulario de contacto */}
<div className="mt-12 border-t border-slate-700 pt-10">
  <h3 className="text-2xl font-bold text-white text-center mb-8">
    Envíame un mensaje
  </h3>
   <form
    onSubmit={enviarFormulario}
    className="max-w-2xl mx-auto space-y-6"
>

    <div>
      <label
        htmlFor="nombre"
        className="block text-cyan-400 font-semibold mb-2"
      >
        Nombre
      </label>
        <input
  type="text"
  id="nombre"
  name="nombre"
  placeholder="Tu nombre"
  required
  value={formulario.nombre}
  onChange={(e) => {
    const valor = e.target.value.replace(
      /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
      ""
    );

    setFormulario({
      ...formulario,
      nombre: valor,
    });
  }}
  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
/>
   
    </div>

    <div>
      <label
        htmlFor="correo"
        className="block text-cyan-400 font-semibold mb-2"
      >
        Correo
      </label>
      <input
        type="email"
        id="correo"
        name="correo"
        placeholder="tucorreo@gmail.com"
         required
       value={formulario.correo}
       onChange={(e) =>
       setFormulario({
       ...formulario,
       correo: e.target.value,
    })
  }
        className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
      />
    </div>

    <div>
      <label
        htmlFor="mensaje"
        className="block text-cyan-400 font-semibold mb-2"
      >
        Mensaje
      </label>

      <textarea
        id="mensaje"
        name="mensaje"
        rows="6"
        placeholder="Escribe tu mensaje..."
         required
       value={formulario.mensaje}
       onChange={(e)=>
        setFormulario({
          ...formulario,
          mensaje: e.target.value
        })
       }

        className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition resize-none"
      ></textarea>
    </div>

    <button
  type="submit"
  disabled={enviando}
  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
>
  {enviando ? "Enviando..." : "Enviar mensaje"}
</button>

  {estado && (
  <p className="text-center text-white">
    {estado}
  </p>
)}
  </form>
  </div>

        {/* Botones */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 mt-14">

         <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=deluisjaviel7@gmail.com"
        target="_blank"
         rel="noopener noreferrer"
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition text-center"
>
         Enviar correo
        </a>
          <a
            href="https://github.com/Luisjaviel9"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition text-center"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/luis-de-la-rosa-6a8251241/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition text-center"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/18094577329?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo%20sobre%20una%20oportunidad."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition text-center"
          >
            WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}