import { useState, useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBriefcase,
} from "react-icons/fa";

export default function Contacto() {
  const { t } = useContext(LanguageContext);

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
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
        setEstado("exito");

        setFormulario({
          nombre: "",
          correo: "",
          mensaje: "",
        });

        setTimeout(() => {
          setEstado("");
        }, 4000);
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado("conexion");
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
      {/* Título */}
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-6">
        {t.contacto.titulo}
      </h2>

      {/* Descripción */}
      <p className="text-center max-w-2xl mx-auto text-lg leading-8 mb-14">
        {t.contacto.descripcion}
      </p>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 md:p-10">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Correo */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-cyan-400 text-xl" />

              <h3 className="text-cyan-400 font-semibold text-lg">
                {t.contacto.correo}
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
                {t.contacto.ubicacion}
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
                {t.contacto.github}
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
                {t.contacto.linkedin}
              </h3>
            </div>

            <a
              href="https://www.linkedin.com/in/luis-de-la-rosa-6a8251241/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition"
            >
              {t.contacto.verLinkedin}
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaWhatsapp className="text-cyan-400 text-xl" />

              <h3 className="text-cyan-400 font-semibold text-lg">
                {t.contacto.whatsapp}
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
                {t.contacto.disponibilidad}
              </h3>
            </div>

            <p className="text-white">
              {t.contacto.disponibilidadTexto}
            </p>
          </div>

        </div>

        {/* Formulario */}
        <form
          onSubmit={enviarFormulario}
          className="mt-12 space-y-6"
        >

          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-cyan-400 font-semibold mb-2"
            >
              {t.contacto.nombre}
            </label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder={t.contacto.nombrePlaceholder}
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

          {/* Correo */}
          <div>
            <label
              htmlFor="correo"
              className="block text-cyan-400 font-semibold mb-2"
            >
              {t.contacto.correoLabel}
            </label>

            <input
              type="email"
              id="correo"
              name="correo"
              placeholder={t.contacto.correoPlaceholder}
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

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-cyan-400 font-semibold mb-2"
            >
              {t.contacto.mensaje}
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="6"
              placeholder={t.contacto.mensajePlaceholder}
              required
              value={formulario.mensaje}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  mensaje: e.target.value,
                })
              }
              className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 transition resize-none"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando
              ? t.contacto.enviando
              : t.contacto.enviarMensaje}
          </button>

          {/* Estado del envío */}
          {estado && (
            <p className="text-center text-cyan-400 font-semibold">
              {estado === "exito" && t.contacto.mensajeEnviado}
              {estado === "error" && t.contacto.errorMensaje}
              {estado === "conexion" && t.contacto.errorConexion}
            </p>
          )}

        </form>

        {/* Botones */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 mt-14">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deluisjaviel7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition text-center"
          >
            {t.contacto.enviarCorreo}
          </a>

          <a
            href="https://github.com/Luisjaviel9"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition text-center"
          >
            {t.contacto.github}
          </a>

          <a
            href="https://www.linkedin.com/in/luis-de-la-rosa-6a8251241/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition text-center"
          >
            {t.contacto.linkedin}
          </a>

          <a
            href="https://wa.me/18094577329?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo%20sobre%20una%20oportunidad."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition text-center"
          >
            {t.contacto.whatsapp}
          </a>

        </div>

      </div>
    </section>
  );
}