export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    'hero.title': 'Leonardo Omeara',
    'hero.role': 'Ingeniero de Sistemas y Desarrollador de Software',
    'hero.subtitle':
      'Desarrollo full-stack con enfoque en backend, SQL, datos y automatización de procesos.',
    'hero.location': 'Bogotá, Colombia',

    'about.title': 'Sobre mí',
    'about.text':
      'Construyo soluciones de software prácticas que conectan procesos de negocio, datos y automatización. Soy sólido en SQL, Python, desarrollo backend y trabajo colaborativo con Git/GitHub. Actualmente desarrollo en ADRES un motor de auditoría médica automatizada, y en paralelo mantengo proyectos personales con Astro y Flutter.',

    'projects.title': 'Proyectos destacados',

    'project.audit.title': 'Motor de Auditoría Automatizada de Cuentas Médicas',
    'project.audit.desc':
      'Sistema interno de ADRES que procesa miles de reclamaciones de bajo costo comparando su información contra bases de datos SQL, tablas de referencia y reglas de negocio. Los soportes médicos se almacenan en Azure Blob Storage y se procesan con inteligencia artificial para extraer texto relevante y alimentar el resultado de auditoría, validado por auditores humanos.',
    'project.audit.tags': 'Python,Django,SQL,Azure Blob Storage,IIS',

    'project.album.title': 'Llena Tu Álbum',
    'project.album.desc':
      'Aplicación web personal para acompañar el álbum Panini del Mundial 2026. Permite llevar el progreso de pegatinas, filtrar faltantes y duplicados, y ofrece más opciones de registro que la experiencia tradicional del álbum físico.',
    'project.album.tags': 'Astro,JavaScript,Supabase',
    'project.album.link': 'https://llena-tu-album.vercel.app/',

    'project.cabrapp.title': 'CABRApp — Inventario Caprino',
    'project.cabrapp.desc':
      'Aplicación multiplataforma desarrollada con Flutter para un cliente del sector agropecuario. Gestiona inventario, registros productivos y sincronización en la nube. Por acuerdo comercial no se publica el enlace del cliente; se muestran capturas y tecnologías de forma genérica.',
    'project.cabrapp.tags': 'Flutter,Dart,Supabase',

    'project.portfolio.title': 'Portafolio Personal',
    'project.portfolio.desc':
      'Sitio bilingüe construido con Astro y Tailwind CSS para presentar mi experiencia, proyectos y stack técnico de forma clara, rápida y accesible.',
    'project.portfolio.tags': 'Astro,Tailwind CSS,TypeScript',

    'experience.title': 'Experiencia',

    'exp.adres26.role': 'Ingeniero de Sistemas y Desarrollador de Software',
    'exp.adres26.company': 'ADRES',
    'exp.adres26.period': 'Enero 2026 — Actualidad',
    'exp.adres26.desc':
      'Desarrollo y evolución de un motor de auditoría automatizada para cuentas médicas de bajo costo. Proceso miles de reclamaciones comparándolas contra bases de datos SQL, tablas de referencia y reglas de negocio. Integro Azure Blob Storage para soportes médicos y trabajo con equipos de negocio para alinear el sistema con procesos reales validados.',
    'exp.adres26.stack': 'Python,Django,SQL,Azure Blob Storage,IIS,Power BI,Git',

    'exp.adres24.role': 'Ingeniero de Sistemas y Analista de Datos',
    'exp.adres24.company': 'ADRES',
    'exp.adres24.period': 'Enero 2024 — Diciembre 2024',
    'exp.adres24.desc':
      'Análisis de datos y auditoría médica con SQL, Python y Power BI. Apoyo en la detección de inconsistencias y en la construcción de insumos para la toma de decisiones operativas.',
    'exp.adres24.stack': 'SQL,Python,Power BI,SSMS',

    'exp.sbd.role': 'Practicante en Automatizaciones',
    'exp.sbd.company': 'Stanley Black & Decker',
    'exp.sbd.period': 'Enero 2022 — Julio 2022',
    'exp.sbd.desc':
      'Scripts en Python para extracción de datos vía API y gestión de bases de datos SQL para monitoreo de automatizaciones.',
    'exp.sbd.stack': 'Python,SQL,APIs',

    'exp.freelance.role': 'Desarrollador Web Freelance',
    'exp.freelance.company': 'Freelance',
    'exp.freelance.period': '2021',
    'exp.freelance.desc':
      'Desarrollo de sitios web responsivos con JavaScript, HTML y CSS para pequeños proyectos y clientes locales.',
    'exp.freelance.stack': 'JavaScript,HTML,CSS',

    'skills.title': 'Habilidades y stack',
    'skills.strongest': 'Fortalezas principales',
    'skills.working': 'Conocimiento sólido',
    'skills.foundational': 'Conocimiento complementario',

    'contact.title': 'Contacto',
    'contact.text':
      'Si quieres conversar sobre un proyecto, una oportunidad o simplemente intercambiar ideas, puedes encontrarme aquí:',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.credit': 'Hecho con Astro y Tailwind CSS',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.title': 'Leonardo Omeara',
    'hero.role': 'Systems Engineer & Software Developer',
    'hero.subtitle':
      'Full-stack development with a focus on backend engineering, SQL, data, and process automation.',
    'hero.location': 'Bogotá, Colombia',

    'about.title': 'About me',
    'about.text':
      'I build practical software solutions that connect business processes, data, and automation. My strongest areas are SQL, Python, backend development, and collaborative work with Git/GitHub. I currently develop an automated medical claims audit engine at ADRES, while maintaining personal projects with Astro and Flutter.',

    'projects.title': 'Featured projects',

    'project.audit.title': 'Automated Medical Claims Audit Engine',
    'project.audit.desc':
      'Internal ADRES system that processes thousands of low-cost medical claims, comparing claim data against SQL databases, reference tables, and business rules. Medical support documents are stored in Azure Blob Storage and processed with artificial intelligence to extract relevant text and feed the audit result, which is validated by human auditors.',
    'project.audit.tags': 'Python,Django,SQL,Azure Blob Storage,IIS',

    'project.album.title': 'Llena Tu Álbum',
    'project.album.desc':
      'Personal web app for tracking progress on the 2026 World Cup Panini-style album. It lets users track stickers, filter missing and duplicate ones, and offers more tracking options than the traditional physical album.',
    'project.album.tags': 'Astro,JavaScript,Supabase',
    'project.album.link': 'https://llena-tu-album.vercel.app/',

    'project.cabrapp.title': 'CABRApp — Farm Inventory',
    'project.cabrapp.desc':
      'Cross-platform Flutter application built for an agricultural client. Manages inventory, productive records, and cloud synchronization. The client-facing URL is not published under agreement; only generic screenshots and technologies are shown.',
    'project.cabrapp.tags': 'Flutter,Dart,Supabase',

    'project.portfolio.title': 'Personal Portfolio',
    'project.portfolio.desc':
      'Bilingual site built with Astro and Tailwind CSS to present my experience, projects, and technical stack in a clear, fast, and accessible way.',
    'project.portfolio.tags': 'Astro,Tailwind CSS,TypeScript',

    'experience.title': 'Experience',

    'exp.adres26.role': 'Systems Engineer & Software Developer',
    'exp.adres26.company': 'ADRES',
    'exp.adres26.period': 'January 2026 — Present',
    'exp.adres26.desc':
      'Develop and evolve an automated audit engine for low-cost medical claims. Process thousands of claims by comparing them against SQL databases, reference tables, and business rules. Integrate Azure Blob Storage for medical support documents and work with business teams to align the system with validated real-world processes.',
    'exp.adres26.stack': 'Python,Django,SQL,Azure Blob Storage,IIS,Power BI,Git',

    'exp.adres24.role': 'Systems Engineer & Data Analyst',
    'exp.adres24.company': 'ADRES',
    'exp.adres24.period': 'January 2024 — December 2024',
    'exp.adres24.desc':
      'Data analysis and medical auditing with SQL, Python, and Power BI. Supported inconsistency detection and built inputs for operational decision-making.',
    'exp.adres24.stack': 'SQL,Python,Power BI,SSMS',

    'exp.sbd.role': 'Automation Intern',
    'exp.sbd.company': 'Stanley Black & Decker',
    'exp.sbd.period': 'January 2022 — July 2022',
    'exp.sbd.desc':
      'Python scripts for API data extraction and SQL database management for automation monitoring.',
    'exp.sbd.stack': 'Python,SQL,APIs',

    'exp.freelance.role': 'Freelance Web Developer',
    'exp.freelance.company': 'Freelance',
    'exp.freelance.period': '2021',
    'exp.freelance.desc':
      'Development of responsive websites with JavaScript, HTML, and CSS for small projects and local clients.',
    'exp.freelance.stack': 'JavaScript,HTML,CSS',

    'skills.title': 'Skills & stack',
    'skills.strongest': 'Strongest skills',
    'skills.working': 'Working knowledge',
    'skills.foundational': 'Foundational knowledge',

    'contact.title': 'Contact',
    'contact.text':
      'If you want to talk about a project, an opportunity, or just exchange ideas, you can reach me here:',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.credit': 'Built with Astro and Tailwind CSS',
  },
} as const;
