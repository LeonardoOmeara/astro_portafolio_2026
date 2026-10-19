# Borrador de contenido (texto generado con IA)

Textos y datos que escribió la IA en el commit `eaf5e9f` y que **no** están en la
versión manual (`b8a907b`). Están guardados aquí para poder re-aplicarlos después,
pieza por pieza, sobre el diseño manual.

> Al re-aplicar: la versión manual usa claves i18n distintas (`project.capri.*`,
> `project.shortfilm.*`, `exp.title`, `skills.dev`, `skills.data`) y el componente
> `ExperienceItem` usa la prop `date` en vez de `period`. La tabla de equivalencias
> está al final.

---

## 1. Hero

| Clave | Español | English |
|---|---|---|
| `hero.title` | Leonardo Omeara | Leonardo Omeara |
| `hero.role` | Ingeniero de Sistemas y Desarrollador de Software | Systems Engineer & Software Developer |
| `hero.subtitle` | Desarrollo full-stack con enfoque en backend, SQL, datos y automatización de procesos. | Full-stack development with a focus on backend engineering, SQL, data, and process automation. |
| `hero.location` | Bogotá, Colombia | Bogotá, Colombia |

## 2. Sobre mí

| Clave | Español | English |
|---|---|---|
| `about.title` | Sobre mí | About me |
| `about.text` | Construyo soluciones de software prácticas que conectan procesos de negocio, datos y automatización. Soy sólido en SQL, Python, desarrollo backend y trabajo colaborativo con Git/GitHub. Actualmente desarrollo en ADRES un motor de auditoría médica automatizada, y en paralelo mantengo proyectos personales con Astro y Flutter. | I build practical software solutions that connect business processes, data, and automation. My strongest areas are SQL, Python, backend development, and collaborative work with Git/GitHub. I currently develop an automated medical claims audit engine at ADRES, while maintaining personal projects with Astro and Flutter. |

## 3. Proyectos

### Motor de Auditoría Automatizada de Cuentas Médicas
`project.audit.title` / `project.audit.tags`

- **ES tags:** Python, Django, SQL, Azure Blob Storage, IIS
- **EN tags:** Python, Django, SQL, Azure Blob Storage, IIS
- **ES desc:** Sistema interno de ADRES que procesa miles de reclamaciones de bajo costo comparando su información contra bases de datos SQL, tablas de referencia y reglas de negocio. Los soportes médicos se almacenan en Azure Blob Storage y se procesan con inteligencia artificial para extraer texto relevante y alimentar el resultado de auditoría, validado por auditores humanos.
- **EN desc:** Internal ADRES system that processes thousands of low-cost medical claims, comparing claim data against SQL databases, reference tables, and business rules. Medical support documents are stored in Azure Blob Storage and processed with artificial intelligence to extract relevant text and feed the audit result, which is validated by human auditors.
- **Tags del manual:** `HTML, CSS, JavaScript` (usaba esos, pero no aplican aquí)
- **Imagen en el manual:** ninguna (la IA lo dejó sin imagen; usar `src/assets/cabra2.jpeg` u otra captura)

### Llena Tu Álbum
`project.album.title` / `project.album.link`

- **ES desc:** Aplicación web personal para acompañar el álbum Panini del Mundial 2026. Permite llevar el progreso de pegatinas, filtrar faltantes y duplicados, y ofrece más opciones de registro que la experiencia tradicional del álbum físico.
- **EN desc:** Personal web app for tracking progress on the 2026 World Cup Panini-style album. It lets users track stickers, filter missing and duplicate ones, and offers more tracking options than the traditional physical album.
- **ES tags:** Astro, JavaScript, Supabase
- **EN tags:** Astro, JavaScript, Supabase
- **Link:** https://llena-tu-album.vercel.app/

### CABRApp — Inventario Caprino
`project.cabrapp.title`

- **ES desc:** Aplicación multiplataforma desarrollada con Flutter para un cliente del sector agropecuario. Gestiona inventario, registros productivos y sincronización en la nube. Por acuerdo comercial no se publica el enlace del cliente; se muestran capturas y tecnologías de forma genérica.
- **EN desc:** Cross-platform Flutter application built for an agricultural client. Manages inventory, productive records, and cloud synchronization. The client-facing URL is not published under agreement; only generic screenshots and technologies are shown.
- **ES tags:** Flutter, Dart, Supabase
- **EN tags:** Flutter, Dart, Supabase
- **Imagen en el manual:** `src/assets/cabrapp_portrait_3_devices.png` (con galería de 4 fotos)
- **Galería en el manual:** `cabrapp_portrait_main.png`, `cabrapp_2.png`, `cabrapp_3.png`, `cabrapp_4.png`

### Portafolio Personal
`project.portfolio.title`

- **ES desc:** Sitio bilingüe construido con Astro y Tailwind CSS para presentar mi experiencia, proyectos y stack técnico de forma clara, rápida y accesible.
- **EN desc:** Bilingual site built with Astro and Tailwind CSS to present my experience, projects, and technical stack in a clear, fast, and accessible way.
- **ES tags:** Astro, Tailwind CSS, TypeScript
- **EN tags:** Astro, Tailwind CSS, TypeScript
- **Imagen en el manual:** `src/assets/escondite_portrait_desktop_5_inclined.png` (con galería de 5 fotos)

## 4. Experiencia

### ADRES 2026 (nuevo, no existía en el manual)
`exp.adres26.*`

- **period:** Enero 2026 — Actualidad / January 2026 — Present
- **role:** Ingeniero de Sistemas y Desarrollador de Software / Systems Engineer & Software Developer
- **company:** ADRES
- **stack:** Python, Django, SQL, Azure Blob Storage, IIS, Power BI, Git
- **ES desc:** Desarrollo y evolución de un motor de auditoría automatizada para cuentas médicas de bajo costo. Proceso miles de reclamaciones comparándolas contra bases de datos SQL, tablas de referencia y reglas de negocio. Integro Azure Blob Storage para soportes médicos y trabajo con equipos de negocio para alinear el sistema con procesos reales validados.
- **EN desc:** Develop and evolve an automated audit engine for low-cost medical claims. Process thousands of claims by comparing them against SQL databases, reference tables, and business rules. Integrate Azure Blob Storage for medical support documents and work with business teams to align the system with validated real-world processes.

### ADRES 2024
`exp.adres24.*`

- **period:** Enero 2024 — Diciembre 2024 / January 2024 — December 2024
- **role:** Ingeniero de Sistemas y Analista de Datos / Systems Engineer & Data Analyst
- **company:** ADRES
- **stack:** SQL, Python, Power BI, SSMS
- **ES desc:** Análisis de datos y auditoría médica con SQL, Python y Power BI. Apoyo en la detección de inconsistencias y en la construcción de insumos para la toma de decisiones operativas.
- **EN desc:** Data analysis and medical auditing with SQL, Python, and Power BI. Supported inconsistency detection and built inputs for operational decision-making.
- **Texto del manual (b8a907b):** "Desarrollo de scripts SQL para auditorías de salud, detectando +50,000 procesos. Optimicé dashboards en Power BI reduciendo retrasos en un 10%." / "Developed a SQL script for health audits, detecting +50,000 processes. Optimized Power BI dashboards reducing process delays by 10%."

### Stanley Black & Decker
`exp.sbd.*`

- **period:** Enero 2022 — Julio 2022 / January 2022 — July 2022
- **role:** Practicante en Automatizaciones / Automation Intern
- **company:** Stanley Black & Decker
- **stack:** Python, SQL, APIs
- **ES desc:** Scripts en Python para extracción de datos vía API y gestión de bases de datos SQL para monitoreo de automatizaciones.
- **EN desc:** Python scripts for API data extraction and SQL database management for automation monitoring.
- **Texto del manual (b8a907b):** "Desarrollé scripts en Python para extracción de datos vía API y gestioné bases de datos SQL para el monitoreo de bots." / "Developed Python scripts for API data extraction and managed SQL databases for high-performance bot monitoring."

### Freelance
`exp.freelance.*`

- **period:** 2021
- **role:** Desarrollador Web Freelance / Freelance Web Developer
- **company:** Freelance
- **stack:** JavaScript, HTML, CSS
- **ES desc:** Desarrollo de sitios web responsivos con JavaScript, HTML y CSS para pequeños proyectos y clientes locales.
- **EN desc:** Development of responsive websites with JavaScript, HTML, and CSS for small projects and local clients.
- **Texto del manual (b8a907b):** "Diseño y desarrollo de plataformas web responsivas, incluyendo sistemas de recaudación de fondos para proyectos cinematográficos." / "Design and development of responsive web platforms, including fundraising systems for film projects."

## 5. Skills (3 tiers, reemplaza los 2 grupos del manual)

### Fortalezas principales / Strongest skills
| Icono | Nombre |
|---|---|
| `simple-icons:mysql` | SQL |
| `simple-icons:microsoftsqlserver` | SQL Server |
| `simple-icons:python` | Python |
| `simple-icons:git` | Git |
| `simple-icons:github` | GitHub |

### Conocimiento sólido / Working knowledge
| Icono | Nombre |
|---|---|
| `simple-icons:django` | Django |
| `simple-icons:azure` | Azure Blob |
| `simple-icons:javascript` | JavaScript |
| `simple-icons:mysql` | MySQL |
| `simple-icons:powerbi` | Power BI |
| `simple-icons:astro` | Astro |
| `simple-icons:docker` | Docker |
| `simple-icons:swagger` | APIs |

### Conocimiento complementario / Foundational knowledge
| Icono | Nombre |
|---|---|
| `simple-icons:react` | React |
| `simple-icons:nextdotjs` | Next.js |
| `simple-icons:flutter` | Flutter |
| `simple-icons:dart` | Dart |
| `simple-icons:postgresql` | PostgreSQL |
| `simple-icons:tailwindcss` | Tailwind CSS |

### Grupos del manual (b8a907b) — por si se quieren conservar
- `skills.dev` = "Desarrollo Frontend & Mobile" / "Frontend & Mobile Development"
  - Flutter, React, Next.js, Astro, JavaScript, TypeScript, Tailwind, Vite
- `skills.data` = "Análisis de Datos & Backend" / "Data Analysis & Backend"
  - Python, MySQL, PostgreSQL, Supabase, Power BI, SQLite, Git, AmazonS3

## 6. Contacto

| Clave | Español | English |
|---|---|---|
| `contact.title` | Contacto | Contact |
| `contact.text` | Si quieres conversar sobre un proyecto, una oportunidad o simplemente intercambiar ideas, puedes encontrarme aquí: | If you want to talk about a project, an opportunity, or just exchange ideas, you can reach me here: |
| `contact.linkedin` | LinkedIn | LinkedIn |
| `contact.github` | GitHub | GitHub |

- **LinkedIn:** https://www.linkedin.com/in/leonardo-omeara/
- **GitHub:** https://github.com/LeonardoOmeara

El manual además tiene el formulario de Formspree (`https://formspree.io/f/mqeevpgp`) con inputs
"Tu correo" / "Your email" y "¿En qué puedo ayudarte?" / "How can I help you?".

## 7. Navbar (rotulos)

| Clave | Español | English |
|---|---|---|
| `nav.about` | Sobre mí | About |
| `nav.projects` | Proyectos | Projects |
| `nav.experience` | Experiencia | Experience |
| `nav.skills` | Habilidades | Skills |
| `nav.contact` | Contacto | Contact |

## 8. Footer

| Clave | Español | English |
|---|---|---|
| `footer.credit` | Hecho con Astro y Tailwind CSS | Built with Astro and Tailwind CSS |

---

## Equivalencias manual ↔ IA

| Manual (`b8a907b`) | IA (`eaf5e9f`) |
|---|---|
| `project.capri.title` / `.desc` | `project.cabrapp.title` / `.desc` |
| `project.shortfilm.title` / `.desc` | `project.portfolio.title` / `.desc` |
| `projects.view_project` | `link` como prop en `ProjectCard` |
| `exp.title` | `experience.title` |
| `exp.adres.*` | `exp.adres24.*` |
| `exp.sbd.*` | `exp.sbd.*` |
| `exp.freelance.*` | `exp.freelance.*` |
| — | `exp.adres26.*` (solo IA) |
| `skills.dev` / `skills.data` | `skills.strongest` / `working` / `foundational` |
| `contact.subtitle` / `contact.description` | `contact.text` |
| `contact.button.chat` | `contact.linkedin` |
| `contact.button.mail` | `contact.github` |
| `ExperienceItem` prop `date` | `ExperienceItem` prop `period` |
| `ProjectCard` prop `galleryImages` | (eliminado por la IA) |
