'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Asegúrate de instalar este paquete

const faqs = [
  {
    question: '¿Qué datos son obligatorios para añadir una película?',
    answer:
      'Debes rellenar al menos el título, el director, el año de estreno y la descripción. Sin estos campos, no se permitirá guardar la película.',
  },
  {
    question: '¿Puedo dejar en blanco el campo de URL de imagen?',
    answer:
      'Sí. Si no proporcionas una URL, se usará una imagen por defecto o simplemente se verá en blanco. Se recomienda usar una imagen horizontal y representativa.',
  },
  {
    question: '¿Qué pasa si pongo mal el año o duración?',
    answer:
      'Los campos de año y duración deben ser números. Si introduces letras u otros símbolos, no se guardará correctamente. Usa sólo valores numéricos.',
  },
  {
    question: '¿Se guardan las películas que creo permanentemente?',
    answer:
      'Las películas se guardan en tu navegador mediante localStorage. No se eliminan al recargar la página, pero si borras la caché del navegador, sí se perderán.',
  },
  {
    question: '¿Qué formato debe tener la URL de la imagen y dónde se guarda?',
    answer:
      'El formato correcto para la URL de la imagen es: `/images/mi-imagen.png`. Debes colocar el archivo de imagen dentro de la carpeta `public/images` de tu proyecto.',
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#50b4ff] mb-12 text-center uppercase tracking-wide">
          Preguntas Frecuentes
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#121f30] border border-[#50b4ff] shadow-lg transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-white hover:bg-[#1a2e46] rounded-t-lg transition"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-[#50b4ff] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`px-6 pt-0 overflow-hidden text-gray-300 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0 pb-0'
                }`}
              >
                {openIndex === index && (
                  <p className="leading-relaxed">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
