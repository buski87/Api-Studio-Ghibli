# 🎥 Ghibli Films - Plataforma de Películas

Este es un proyecto web creado con [Next.js 14](https://nextjs.org/) que simula una plataforma de streaming para películas del Studio Ghibli. El objetivo es ofrecer una experiencia visual atractiva e interactiva, permitiendo a los usuarios explorar, añadir y gestionar sus películas favoritas.

## 🚀 Tecnologías Usadas

- **Next.js 14** + App Router
- **React** + Hooks
- **Tailwind CSS** para el diseño y responsividad
- **Framer Motion** para animaciones
- **LocalStorage** para persistencia local de películas creadas
- **API externa de Studio Ghibli**

## ✨ Funcionalidades Principales

- 🎞️ Listado de películas con paginación y filtros por director, año y búsqueda.
- 📥 Añadir tus propias películas con formulario validado.
- ✏️ Editar y eliminar películas guardadas desde la sección "Mis películas".
- ❤️ Añadir y gestionar películas favoritas.
- 🧠 Sistema de ejemplo precargado para mostrar la funcionalidad si no hay datos en local.
- 🔍 Filtros combinados con búsqueda por título.
- 📱 Diseño totalmente responsive (mobile-first).
- 📂 Acordeón de FAQs con diseño moderno.
- 🖼️ Banner animado estilo Studio Ghibli con llamada a la acción.
- ⏳ Spinner de carga mientras se cargan los datos o la vista de detalle.

## 🛠️ Instalación y Uso

1. **Clona este repositorio**

```bash
git clone https://github.com/tuusuario/ghibli-films-app.git
cd ghibli-films-app
```

2. **Instala las dependencias**

```bash
npm install
# o
yarn install
```

3. **Levanta el servidor de desarrollo**

```bash
npm run dev
```

4. **Abre** `http://localhost:3000` en tu navegador para ver la app.

## 🧪 Scripts disponibles

```bash
npm run dev     # Inicia el servidor de desarrollo
npm run build   # Genera la build de producción
npm run start   # Ejecuta la app en producción
npm run lint    # Ejecuta ESLint para análisis de código
```

## 📦 Estructura del Proyecto

```
/app
  /films          # Página con todas las películas
  /[id]           # Página de detalle de la película
  /form           # Formulario para añadir películas
  /collection     # Tus películas guardadas (Mis Películas)
  /favorites      # Tus películas preferidas
  /faqs           # Preguntas frecuentes
/components       # Componentes reutilizables (FilmCard, Header, Footer...)
/lib              # Lógica de conexión con la API
/public/images    # Recursos gráficos e imágenes
```

## 📤 Despliegue

Este proyecto está optimizado para ser desplegado fácilmente en [Vercel](https://vercel.com).

## 🧑‍💻 Autor

**Buski87** – [@buski87](https://github.com/buski87)

---

¡Explora, crea y guarda tus películas favoritas como si formaras parte del mundo de Studio Ghibli! 🍃✨