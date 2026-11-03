<div align="center">

# 💼 Javier Guerrero · Portfolio

Portafolio personal de **Javier Guerrero**, desarrollador web Full Stack.
Sitio estático, bilingüe (ES / EN), rápido y optimizado para SEO, construido con **Astro** y **Tailwind CSS**.

[![Netlify](https://img.shields.io/badge/Demo-javierguerrero--pf.netlify.app-00C7B7?logo=netlify&logoColor=white)](https://javierguerrero-pf.netlify.app)
[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

🔗 **[Ver el portafolio en vivo](https://javierguerrero-pf.netlify.app)**

![Vista previa del portafolio](./public/imgs/og-image.jpg)

</div>

---

## 📋 Tabla de contenidos

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Empezar](#-empezar)
- [Scripts disponibles](#-scripts-disponibles)
- [Internacionalización](#-internacionalización-i18n)
- [SEO](#-seo)
- [Despliegue](#-despliegue)
- [Contacto](#-contacto)

---

## 🧑‍💻 Sobre el proyecto

Este repositorio contiene el código de mi portafolio personal: una página única donde presento quién soy, mi experiencia profesional, los proyectos en los que he trabajado y cómo contactar conmigo.

El objetivo es tener un sitio **ligero, accesible y fácil de mantener**, que cargue prácticamente sin JavaScript en el cliente gracias a la arquitectura de islas de Astro, y que se pueda leer tanto en español como en inglés.

### Secciones

| Sección            | Descripción                                                          |
| :----------------- | :------------------------------------------------------------------- |
| **Sobre mí**       | Presentación, foto y enlace para descargar el currículum.            |
| **Experiencia**    | Línea temporal con mi trayectoria profesional (Grupo CGI, Capgemini). |
| **Proyectos**      | Tarjetas con proyectos destacados, tecnologías usadas y enlace a GitHub. |
| **Contacto**       | Datos de contacto y accesos directos para enviar un correo o llamar. |

---

## ✨ Características

- 🌍 **Bilingüe (ES / EN)** usando el sistema de i18n nativo de Astro, con selector de idioma.
- ⚡ **Rendimiento**: HTML estático generado en build, imágenes en formato `webp` y JavaScript mínimo.
- 🎞️ **Transiciones de página** con la View Transitions API (`<ClientRouter />` de Astro).
- 🔎 **SEO completo**: metaetiquetas Open Graph y Twitter, `canonical`, `hreflang`, datos estructurados JSON-LD (Schema.org), `sitemap.xml` y `robots.txt`.
- ♿ **Accesibilidad**: HTML semántico, textos alternativos en las imágenes y atributos ARIA.
- 📱 **Diseño responsive** con Tailwind CSS 4 y la fuente variable *Onest*.
- 🧩 **Componentes reutilizables** e iconos como componentes `.astro` (SVG en línea).
- ✅ **Comprobación de tipos** con `astro check` antes de cada build.

---

## 🛠️ Tecnologías

| Tecnología | Uso en el proyecto |
| :--------- | :----------------- |
| [Astro 7](https://astro.build) | Framework principal, generación estática, routing, i18n y View Transitions. |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos, integrado mediante el plugin de Vite `@tailwindcss/vite`. |
| [React 18](https://react.dev) | Integración `@astrojs/react` para componentes interactivos (islas). |
| [TypeScript 5](https://www.typescriptlang.org) | Tipado de la lógica (i18n, constantes, props de componentes). |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Generación automática del sitemap con soporte multidioma. |
| [@astrojs/check](https://docs.astro.build/en/reference/cli-reference/#astro-check) | Diagnóstico y comprobación de tipos de los archivos `.astro`. |
| [Fontsource · Onest](https://fontsource.org/fonts/onest) | Tipografía variable autoalojada. |
| [Netlify](https://www.netlify.com) | Hosting y despliegue continuo. |
| [pnpm](https://pnpm.io) | Gestor de paquetes. |

---

## 📁 Estructura del proyecto

```text
/
├── public/                  # Recursos estáticos servidos tal cual
│   ├── imgs/                # Fotos, capturas de proyectos e imágenes Open Graph
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/          # Secciones y componentes de la página
│   │   ├── Header.astro           # Navegación principal
│   │   ├── SobreMi.astro          # Presentación
│   │   ├── Experiencia.astro      # Experiencia laboral
│   │   ├── Proyectos.astro        # Listado de proyectos
│   │   ├── Card.astro             # Tarjeta de proyecto
│   │   ├── Contacto.astro         # Datos de contacto
│   │   ├── Footer.astro
│   │   ├── LenguagesSelector.astro # Selector de idioma
│   │   ├── StructuredData.astro   # JSON-LD para SEO
│   │   └── App.astro              # Composición de todas las secciones
│   ├── flags/               # Banderas del selector de idioma (SVG)
│   ├── icons/               # Iconos SVG como componentes Astro
│   ├── i18n/                # Traducciones y utilidades de idioma
│   │   ├── es.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── layouts/
│   │   └── Layout.astro     # <head>, metaetiquetas SEO y estructura base
│   ├── pages/
│   │   ├── index.astro      # Versión en español  →  /
│   │   └── en/index.astro   # Versión en inglés   →  /en/
│   ├── styles/
│   │   └── global.css       # Tailwind, fuente y estilos globales
│   └── consts.ts            # URL del sitio, nombre, autor y redes sociales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Empezar

### Requisitos previos

- [Node.js](https://nodejs.org) **>= 22.23.4**
- [pnpm](https://pnpm.io/installation) (recomendado; también funciona con npm)

### Instalación

```sh
# 1. Clona el repositorio
git clone https://github.com/javiergg13/MyPortfolio.git
cd MyPortfolio

# 2. Instala las dependencias
pnpm install

# 3. Arranca el servidor de desarrollo
pnpm dev
```

La web estará disponible en [`http://localhost:4321`](http://localhost:4321).

---

## 🧞 Scripts disponibles

| Comando            | Acción                                                         |
| :----------------- | :------------------------------------------------------------- |
| `pnpm install`     | Instala las dependencias.                                      |
| `pnpm dev`         | Inicia el servidor de desarrollo en `localhost:4321`.          |
| `pnpm start`       | Alias de `pnpm dev`.                                           |
| `pnpm build`       | Ejecuta `astro check` y genera el sitio de producción en `./dist/`. |
| `pnpm preview`     | Sirve localmente la build de producción para revisarla.        |
| `pnpm astro ...`   | Ejecuta comandos de la CLI de Astro (`astro add`, `astro check`…). |

---

## 🌍 Internacionalización (i18n)

El sitio usa el [routing i18n de Astro](https://docs.astro.build/en/guides/internationalization/):

- **Español** es el idioma por defecto y se sirve sin prefijo (`/`).
- **Inglés** se sirve bajo el prefijo `/en/`.

Todos los textos están en `src/i18n/es.json` y `src/i18n/en.json`. Para usarlos en un componente:

```astro
---
import { getI18N } from "../i18n/index";

const { currentLocale } = Astro;
const i18n = getI18N({ currentLocale });
---

<h2>{i18n.PROJECTS_TITLE}</h2>
```

Para añadir o modificar un texto, edita la misma clave en ambos archivos JSON.

---

## 🔎 SEO

El `Layout.astro` y el componente `StructuredData.astro` se encargan de:

- `title`, `description` y `canonical` por idioma.
- Enlaces `hreflang` (`es`, `en` y `x-default`).
- Metaetiquetas **Open Graph** y **Twitter Card** con imágenes específicas por idioma.
- Datos estructurados **JSON-LD** (`WebSite`, `Person` y `ProfilePage`).
- `sitemap-index.xml` generado automáticamente por `@astrojs/sitemap`.
- `robots.txt` apuntando al sitemap.

La URL base y los datos del autor se configuran en `src/consts.ts`.

---

## ☁️ Despliegue

El portafolio está desplegado en **Netlify**: [javierguerrero-pf.netlify.app](https://javierguerrero-pf.netlify.app).

Configuración de build:

| Ajuste              | Valor        |
| :------------------ | :----------- |
| Comando de build    | `pnpm build` |
| Directorio de salida | `dist`      |
| Versión de Node     | `22.23.4` o superior |

> Si cambias de dominio, actualiza `SITE_URL` en `src/consts.ts` y la línea `Sitemap` de `public/robots.txt`.

---

## 📬 Contacto

**Javier Guerrero Gallo** — Desarrollador Web Full Stack

- 🌐 Portafolio: [javierguerrero-pf.netlify.app](https://javierguerrero-pf.netlify.app)
- 💼 LinkedIn: [javier-guerrero-gallo](https://www.linkedin.com/in/javier-guerrero-gallo-3989b9228/)
- 🐙 GitHub: [@javiergg13](https://github.com/javiergg13)

---

<div align="center">

Hecho con 💖 y [Astro](https://astro.build)

</div>
