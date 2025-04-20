'use client';

import { useState } from 'react';
import FaqsElement from '@/components/FaqsElement';

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
      'Los campos de año y duración deben ser numéricos. Si introduces letras u otros símbolos, no se guardarán correctamente. Usa solo valores numéricos. Igualmente, una vez creada la película, podrás editar los datos en la página de Mis Películas en caso de error.',
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
            <FaqsElement
              key={index}
              index={index}
              isOpen={openIndex === index}
              onToggle={toggle}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
