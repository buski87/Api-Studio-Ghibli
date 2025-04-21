# 🎥 Ghibli Films - Plataforma de Películas

Este es un proyecto web creado con [Next.js 14](https://nextjs.org/) que simula una plataforma de streaming para películas del Studio Ghibli. El objetivo es ofrecer una experiencia visual atractiva e interactiva, permitiendo a los usuarios explorar, añadir y gestionar sus películas favoritas.

## 🚀 Tecnologías Usadas

- **Next.js 14** + App Router
- **React** + Hooks
- **Tailwind CSS** para el diseño y responsividad
- **Framer Motion** para animaciones
- **LocalStorage** para persistencia local de películas creadas
- **API externa de Studio Ghibli**
- **Dark/Light Mode** con persistencia en `localStorage`

## ✨ Funcionalidades Principales

- 🎞️ Listado de películas con paginación y filtros por director, año y búsqueda.
- 📥 Añadir tus propias películas con formulario validado.
- 🧠 Sistema de edición y borrado de películas guardadas en tu navegador desde Mis películas.
- 📱 Diseño totalmente responsive (mobile-first).
- 📂 Acordeón de FAQs con diseño moderno.
- 🖼️ Banner animado estilo Studio Ghibli con llamada a la acción.


## 🛠️ Instalación y Uso

1. **Clona este repositorio**

```bash
git clone https://github.com/tuusuario/ghibli-films-app.git
cd ghibli-films-app

Instala las dependencias
npm install
# o
yarn install

Levanta el servidor de desarrollo
npm run dev

Abre http://localhost:3000 para ver el proyecto en tu navegador.

🧪 Scripts disponibles
npm run dev – inicia el servidor de desarrollo

npm run build – genera la build de producción

npm run start – lanza la app en modo producción

npm run lint – ejecuta ESLint

📦 Estructura del Proyecto
/app
  /films          # Página con todas las películas
  /form           # Formulario para añadir películas
  /collection     # Tus películas guardadas
  /faqs           # Preguntas frecuentes
/components       # Componentes reutilizables
/lib              # Lógica para llamadas a la API
/public/images    # Imágenes del proyecto

📤 Despliegue
Este proyecto está optimizado para ser desplegado en Vercel. Solo debes enlazar el repositorio y seguir las instrucciones.

🧑‍💻 Autor
Buski87 – @buski87