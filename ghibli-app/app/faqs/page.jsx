'use client';

import { useState } from 'react';

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
      'El formato correcto para la URL de la imagen es: `/images/mi-imagen.png`. Debes colocar el archivo de imagen dentro de la carpeta `public/images` de tu proyecto. Por ejemplo, si subes una imagen llamada `chico-programando.png` dentro de `public/images`, puedes usar `/images/chico-programando.png` como URL en el formulario.',
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center uppercase">
        Preguntas Frecuentes (FAQs)
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-4 border-yellow-500 rounded-xl overflow-hidden bg-black"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold uppercase hover:bg-yellow-500 hover:text-black transition"
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-4 pt-0 text-sm text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
