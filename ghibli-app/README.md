# 🎥 Ghibli Films - Plataforma de Películas

Este es un proyecto web creado con [Next.js 14](https://nextjs.org/) que simula una plataforma de streaming para películas del Studio Ghibli. El objetivo es ofrecer una experiencia visual atractiva e interactiva, permitiendo a los usuarios explorar, añadir y gestionar sus películas favoritas.

## 🚀 Tecnologías Usadas

 **Next.js 14** (App Router)
- **React** + Hooks
- **Tailwind CSS** para el diseño y responsividad
- **Framer Motion** para animaciones suaves
- **EmailJS** para contacto funcional
- **LocalStorage** para persistencia local
- **API externa de Studio Ghibli**

## ✨ Funcionalidades Principales

- 🎞️ Listado de películas con paginación, filtros y búsqueda por título.
- 📥 Añadir tus propias películas con formulario guiado e inspiración visual.
- ✏️ Editar y eliminar películas desde "Mis Películas".
- ❤️ Marcar favoritas y acceder a ellas desde "Favoritos".
- 💾 Persistencia en `localStorage` sin backend.
- 🧠 Sistema de ejemplo precargado (como "Kit y el dragón").
- 📱 Diseño mobile-first, totalmente responsive.
- 🖼️ Imagen ilustrativa al estilo Studio Ghibli para animarte a crear.
- ⚙️ Spinner de carga mientras se cargan los datos o detalle.
- 📫 Formulario de contacto funcional (EmailJS) + iconos de GitHub y LinkedIn.
- ❓ Sección de FAQ con diseño tipo acordeón.

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
  /films         → Listado de películas
  /[id]          → Detalle de cada película
  /form          → Formulario para crear nuevas películas
  /collection    → Sección "Mis Películas" (localStorage)
  /favorites     → Favoritos
  /contact       → Formulario de contacto
  /faqs          → Preguntas frecuentes
/components      → Reutilizables (FilmCard, Header, Footer, LoadingSpinner...)
/public/images   → Imágenes locales como ejemplo
/lib             → Lógica de conexión a la API

```
## 📤 Despliegue

Este proyecto está optimizado para ser desplegado fácilmente en [Vercel](https://vercel.com).

## 🧑‍💻 Autor

**Buski87** – [@buski87](https://github.com/buski87)

---

¡Explora, crea y guarda tus películas favoritas como si formaras parte del mundo de Studio Ghibli!