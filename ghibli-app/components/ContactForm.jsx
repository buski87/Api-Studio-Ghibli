'use client';

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Mensaje enviado correctamente.");
          formRef.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("Error al enviar el mensaje.");
        }
      );
  };

  return (
    <div className="w-full max-w-xl bg-[#121f30] border border-cyan-500 rounded-xl p-8 shadow-2xl text-white text-center space-y-6">
      <h2 className="text-2xl font-bold text-cyan-400 uppercase">Formulario de Contacto</h2>
      
      <p className="text-sm text-gray-300">
        ¿Tienes alguna duda o sugerencia? ¡Escríbeme!
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-5 text-left">
        <input
          name="from_name"
          required
          placeholder="Nombre"
          className="w-full p-3 rounded bg-[#0f2a40] border border-cyan-500 text-white"
        />
        <input
          name="reply_to"
          type="email"
          required
          placeholder="Correo electrónico"
          className="w-full p-3 rounded bg-[#0f2a40] border border-cyan-500 text-white"
        />
        <textarea
          name="message"
          required
          placeholder="Tu mensaje"
          rows="5"
          className="w-full p-3 rounded bg-[#0f2a40] border border-cyan-500 text-white"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded hover:bg-cyan-300 transition"
        >
          Enviar mensaje
        </button>
        {status && <p className="text-sm text-center text-cyan-300 mt-2">{status}</p>}
      </form>

      {/* Iconos de contacto */}
      <div className="pt-6 flex justify-center gap-6 text-cyan-400 text-2xl">
        <a
          href="https://github.com/buski87"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition"
        >
          <FaGithub title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/pere-busquet-garcia-cascon/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
