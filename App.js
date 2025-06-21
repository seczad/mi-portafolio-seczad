import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  // Debugging: Confirm App.js is loaded and running
  console.log("App.js loaded and running!");

  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Mock Data for Projects
  // Aquí es donde puedes agregar o modificar tus proyectos
  const projectsData = [
    {
      id: 'project-1',
      title: 'Aplicación de Gestión de Tareas',
      thumbnail: 'https://placehold.co/400x250/1e293b/cbd5e1?text=Proyecto+1', // Reemplaza con tu URL
      shortDescription: 'Una aplicación web para organizar tareas diarias y proyectos.',
      images: [
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Task+App+Screen+1', // Reemplaza con tu URL
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Task+App+Screen+2', // Reemplaza con tu URL
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Task+App+Screen+3', // Reemplaza con tu URL
      ],
      longDescription: 'Este proyecto es una aplicación de gestión de tareas construida con React y una API RESTful simulada. Permite a los usuarios añadir, editar, eliminar y marcar tareas como completadas. Se enfocó en una interfaz de usuario limpia y responsiva, utilizando animaciones CSS para una experiencia de usuario fluida. Tecnologías: React, Tailwind CSS, JavaScript.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      purpose: 'Mejorar la productividad personal y practicar habilidades de desarrollo frontend.',
      challenges: 'Optimizar el rendimiento de la lista de tareas y asegurar la persistencia de datos localmente.',
    },
    {
      id: 'project-2',
      title: 'Sitio Web de Comercio Electrónico (Mock)',
      thumbnail: 'https://placehold.co/400x250/1e293b/cbd5e1?text=Proyecto+2',
      shortDescription: 'Un prototipo de sitio de comercio electrónico con funcionalidades de carrito de compras.',
      images: [
        'https://placehold.co/800x500/1e293b/cbd5e1?text=E-commerce+Screen+1',
        'https://placehold.co/800x500/1e293b/cbd5e1?text=E-commerce+Screen+2',
      ],
      longDescription: 'Desarrollo de un sitio web de comercio electrónico ficticio para mostrar habilidades de diseño frontend y gestión de estado. Incluye páginas de productos, carrito de compras, y un flujo de pago simulado. El diseño es modular y escalable. Tecnologías: React, Context API, CSS Modules.',
      technologies: ['React', 'Context API', 'CSS Modules', 'Stripe API (simulado)'],
      purpose: 'Demostrar la capacidad de construir aplicaciones web complejas y con múltiples estados.',
      challenges: 'Manejo del estado global del carrito y optimización de las vistas de productos.',
    },
    {
      id: 'project-3',
      title: 'Visualizador de Datos Interactivo',
      thumbnail: 'https://placehold.co/400x250/1e293b/cbd5e1?text=Proyecto+3',
      shortDescription: 'Una herramienta web para visualizar conjuntos de datos complejos de forma interactiva.',
      images: [
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Data+Viz+Screen+1',
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Data+Viz+Screen+2',
      ],
      longDescription: 'Este proyecto se centra en la visualización de datos utilizando la librería D3.js integrada con React. Permite a los usuarios cargar datos (simulados) y generar gráficos dinámicos como barras, líneas y dispersión. Se priorizó la interactividad y la capacidad de respuesta. Tecnologías: React, D3.js, SVG.',
      technologies: ['React', 'D3.js', 'SVG', 'JavaScript'],
      purpose: 'Explorar técnicas avanzadas de visualización de datos y mejorar la comprensión de grandes volúmenes de información.',
      challenges: 'Sincronizar el estado de React con las manipulaciones del DOM de D3.js y optimizar el renderizado para grandes conjuntos de datos.',
    },
    {
      id: 'project-4',
      title: 'Juego de Rompecabezas Simple',
      thumbnail: 'https://placehold.co/400x250/1e293b/cbd5e1?text=Proyecto+4',
      shortDescription: 'Un pequeño juego de rompecabezas basado en navegador.',
      images: [
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Puzzle+Game+Screen+1',
        'https://placehold.co/800x500/1e293b/cbd5e1?text=Puzzle+Game+Screen+2',
      ],
      longDescription: 'Implementación de un juego de rompecabezas clásico (por ejemplo, 8-puzzle) usando JavaScript puro para la lógica y React para la interfaz de usuario. El objetivo era crear un juego simple pero divertido con una lógica de juego sólida. Tecnologías: React, JavaScript, CSS.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      purpose: 'Practicar algoritmos de juego y gestión de estado complejo en una aplicación interactiva.',
      challenges: 'Implementación del algoritmo de mezcla del rompecabezas y manejo de las transiciones de los bloques.',
    },
  ];

  // Mock Data for Blog Posts
  // Aquí es donde puedes agregar o modificar tus entradas de blog
  const blogPostsData = [
    {
      id: 'blog-1',
      title: 'El Futuro del Desarrollo Frontend',
      date: '2023-10-26',
      excerpt: 'Explorando las tendencias emergentes en el desarrollo frontend, desde frameworks hasta herramientas de automatización. El panorama evoluciona rápidamente...',
      content: 'El desarrollo frontend es un campo en constante evolución. En los últimos años, hemos visto una explosión de nuevos frameworks, librerías y herramientas que facilitan la creación de experiencias de usuario complejas y responsivas. Desde la maduración de React, Vue y Angular, hasta el auge de tecnologías como Svelte y Web Components, los desarrolladores tienen más opciones que nunca. Las tendencias actuales incluyen la optimización del rendimiento, la accesibilidad, el uso de WebAssembly, y el creciente interés en arquitecturas JAMstack. Mantenerse al día con estos cambios es crucial para cualquier desarrollador frontend que aspire a la excelencia. Además, la integración de la inteligencia artificial en las herramientas de desarrollo promete revolucionar la forma en que construimos aplicaciones web, automatizando tareas repetitivas y sugiriendo mejoras de código.'
    },
    {
      id: 'blog-2',
      title: 'Guía para empezar con Tailwind CSS',
      date: '2023-09-15',
      excerpt: 'Tailwind CSS es un framework de CSS de primera utilidad que ha ganado mucha popularidad. Esta guía te ayudará a comenzar...',
      content: 'Tailwind CSS ha transformado la forma en que muchos desarrolladores abordan el estilizado de sus aplicaciones. A diferencia de los frameworks CSS tradicionales que vienen con componentes predefinidos, Tailwind te proporciona clases de utilidad de bajo nivel que te permiten construir diseños personalizados directamente en tu marcado HTML. Esto lleva a un proceso de desarrollo más rápido y a estilos altamente personalizables sin la necesidad de escribir CSS personalizado complejo. Para empezar, primero instala Tailwind a través de npm o yarn. Luego, configura tu archivo `tailwind.config.js` para personalizar tus colores, fuentes y otras propiedades. Finalmente, incluye las directivas de Tailwind en tu archivo CSS principal y comienza a aplicar clases directamente en tus elementos HTML. La curva de aprendizaje inicial puede parecer un poco empinada, pero una vez que te acostumbras a la filosofía de "utilidad primero", te darás cuenta de lo eficiente que es.'
    },
    {
      id: 'blog-3',
      title: 'Desarrollo Responsivo: Más allá de los Media Queries',
      date: '2023-08-01',
      excerpt: 'El diseño responsivo es fundamental hoy en día. Pero, ¿qué hay más allá de las consultas de medios tradicionales? Exploramos nuevas técnicas...',
      content: 'El diseño responsivo ya no es una opción, es una necesidad. Si bien los media queries han sido la columna vertebral del diseño responsivo durante años, el ecosistema web ha evolucionado, ofreciendo nuevas y poderosas herramientas. Flexbox y Grid CSS han revolucionado la creación de layouts complejos y adaptables, permitiendo un control mucho más granular sobre la disposición de los elementos sin necesidad de múltiples breakpoints. Las unidades de viewport (vw, vh, vmin, vmax) y las funciones `calc()` ofrecen mayor flexibilidad en la definición de tamaños. Además, las propiedades lógicas de CSS (como `margin-inline-start` en lugar de `margin-left`) mejoran la adaptabilidad a diferentes modos de escritura. El futuro del responsivo también apunta a Container Queries, que permitirán que los componentes se adapten no solo al tamaño del viewport, sino al tamaño de su contenedor, lo que promete una modularidad y reutilización aún mayores.'
    },
  ];

  // Determine which projects/blog posts to show as "latest" on the homepage
  const latestProjects = projectsData.slice(0, 3);
  const latestBlogPosts = blogPostsData.slice(0, 3);

  // Function to navigate between pages
  const navigateTo = (page, projectId = null, blogId = null) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu on navigation
    // Store selected item ID if navigating to a detail page
    if (projectId) {
      sessionStorage.setItem('selectedProjectId', projectId);
    } else {
      sessionStorage.removeItem('selectedProjectId');
    }
    if (blogId) {
      sessionStorage.setItem('selectedBlogId', blogId);
    } else {
      sessionStorage.removeItem('selectedBlogId');
    }
    window.scrollTo(0, 0); // Scroll to top
  };

  // Check for selected item ID on initial load (for direct deep links or refreshes)
  useEffect(() => {
    const storedProjectId = sessionStorage.getItem('selectedProjectId');
    const storedBlogId = sessionStorage.getItem('selectedBlogId');
    if (storedProjectId && projectsData.some(p => p.id === storedProjectId)) {
      setCurrentPage('projectDetail');
    } else if (storedBlogId && blogPostsData.some(b => b.id === storedBlogId)) {
      setCurrentPage('blogDetail');
    }
  }, []); // Run only once on mount

  // Apply dark/light mode to body and html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-white'); // Ensure light mode background is removed
      document.body.classList.add('bg-gray-900'); // Set dark mode background
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-gray-900'); // Ensure dark mode background is removed
      document.body.classList.add('bg-white'); // Set light mode background
    }
  }, [isDarkMode]);

  // Component for Navigation Bar
  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* Logo / Sitio de Gustavo */}
          <a onClick={() => navigateTo('home')} className="text-xl font-bold text-white cursor-pointer hover:text-indigo-400 transition duration-300">
            {/* Puedes reemplazar "Mi Portafolio" con una imagen de logo si lo prefieres */}
            {/* Ejemplo con imagen de logo (descomenta y ajusta URL/tamaño): */}
            {/*
            <img
                src="./images/tu-logo.svg" // Reemplaza con la ruta a tu logo
                alt="Logo de Gustavo Seczad"
                className="h-8 w-auto" // Ajusta el tamaño según necesites
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/32x32/1e293b/cbd5e1?text=G'; }}
            />
            */}
            Mi Portafolio
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="home" label="🏠 Inicio" />
          <NavLink to="projects" label="🧑‍💻 Proyectos" />
          <NavLink to="blog" label="📝 Blog" />
          <NavLink to="contact" label="📫 Contacto" />
          <ThemeToggle />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white ml-4 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-800 py-4 pb-6 px-4 space-y-4 text-center animate-fade-in">
          <NavLink to="home" label="🏠 Inicio" />
          <NavLink to="projects" label="🧑‍💻 Proyectos" />
          <NavLink to="blog" label="📝 Blog" />
          <NavLink to="contact" label="📫 Contacto" />
        </div>
      )}
    </nav>
  );

  // Helper component for Navigation Links
  const NavLink = ({ to, label }) => (
    <a
      onClick={() => navigateTo(to)}
      className={`text-white text-lg hover:text-indigo-400 transition duration-300 cursor-pointer ${
        currentPage === to ? 'font-semibold text-indigo-400' : ''
      }`}
    >
      {label}
    </a>
  );

  // Theme Toggle Component (changes appearance based on mode)
  const ThemeToggle = () => (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500
        ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        // Sun icon for light mode (when currently in dark mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-4.275l-.707-.707M4.373 19.373l-.707-.707M19.373 4.373l-.707-.707M4.373 4.373l-.707.707M18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      ) : (
        // Moon icon for dark mode (when currently in light mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );

  // Component for Home Page
  const HomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 animate-fade-in px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Welcome Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
          ¡Hola! Soy <span className="text-indigo-400">Gustavo</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up delay-200">
          Freelancer en publicidad digital, explorando y ganando experiencia en nuevos entornos laborales para expandir mis horizontes.
        </p>

        {/* About Me Section */}
        <section className="mb-16 bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up delay-400 border border-gray-700">
          <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V8m-7 1h7m-7 7v.01M18 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            Sobre mí
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start text-left">
            <img
              src="https://placehold.co/150x150/667eea/ffffff?text=Avatar" // Reemplaza con la URL de tu avatar
              alt="Tu Avatar"
              className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-indigo-500 shadow-lg"
            />
            <div className="flex-1">
              <p className="text-gray-300 mb-4 text-lg">
                Soy Gustavo, un profesional apasionado por la publicidad digital, con experiencia en la creación de campañas exitosas y estrategias de marketing innovadoras.
              </p>
              <p className="text-gray-400 text-base mb-4">
                Actualmente, estoy entusiasmado por expandir mis habilidades y conocimientos en nuevos entornos laborales, explorando áreas como el desarrollo web y la analítica de datos. Este portafolio es un reflejo de mi viaje de aprendizaje y experimentación en estos nuevos campos.
              </p>
              <a
                href="./Gustavo_Seczad_CV.pdf" // Asegúrate que la ruta sea correcta a tu CV
                download="Gustavo_Seczad_CV.pdf"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md mt-4"
              >
                Descargar CV
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className="mb-16 animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 flex items-center justify-center">
            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
            Últimos Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProjects.map(project => (
              <ProjectCard key={project.id} project={project} navigateTo={navigateTo} />
            ))}
          </div>
          <button
            onClick={() => navigateTo('projects')}
            className="mt-10 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Ver Todos los Proyectos
          </button>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 flex items-center justify-center">
            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            Últimas Entradas del Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} navigateTo={navigateTo} />
            ))}
          </div>
          <button
            onClick={() => navigateTo('blog')}
            className="mt-10 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Ver Todas las Entradas
          </button>
        </section>
      </div>
    </div>
  );

  // Component for Project Card
  const ProjectCard = ({ project, navigateTo }) => (
    <div
      className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700 animate-fade-in"
      onClick={() => navigateTo('projectDetail', project.id)}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/334155/e2e8f0?text=Imagen+no+disponible'; }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.shortDescription}</p>
      </div>
    </div>
  );

  // Component for Projects Page
  const ProjectsPage = () => (
    <div className="min-h-screen pt-24 pb-12 bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300 px-4">
      <div className="container mx-auto max-w-6xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-12 animate-fade-in-up">
          Mis Proyectos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </div>
  );

  // Component for Project Detail Page
  const ProjectDetailPage = () => {
    const projectId = sessionStorage.getItem('selectedProjectId');
    const project = projectsData.find(p => p.id === projectId);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) {
      return (
        <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-900 text-white animate-fade-in px-4 text-center">
          <p className="text-2xl text-gray-400 mb-4">Proyecto no encontrado.</p>
          <button
            onClick={() => navigateTo('projects')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Volver a Proyectos
          </button>
        </div>
      );
    }

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300 px-4">
        <div className="container mx-auto max-w-5xl animate-fade-in">
          <button
            onClick={() => navigateTo('projects')}
            className="mb-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-5 rounded-lg transition duration-300 ease-in-out flex items-center shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-8 text-center animate-fade-in-up">
            {project.title}
          </h1>

          {/* Image Carousel */}
          {project.images && project.images.length > 0 && (
            <div className="relative mb-10 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <img
                src={project.images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1} de ${project.title}`}
                className="w-full h-80 md:h-96 object-cover transition-opacity duration-500 ease-in-out animate-fade-in"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x500/334155/e2e8f0?text=Imagen+no+disponible'; }}
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Siguiente imagen"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </>
              )}
               <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-indigo-400' : 'bg-gray-400'} cursor-pointer`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  ></span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.longDescription}
            </p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-indigo-400 mb-3">Tecnologías Usadas</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.purpose && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-indigo-400 mb-3">Propósito</h3>
                <p className="text-gray-300">{project.purpose}</p>
              </div>
            )}

            {project.challenges && (
              <div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-3">Retos</h3>
                <p className="text-gray-300">{project.challenges}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Component for Blog Post Card
  const BlogPostCard = ({ post, navigateTo }) => (
    <div
      className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700 animate-fade-in"
      onClick={() => navigateTo('blogDetail', null, post.id)}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{post.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="text-gray-300 text-base mb-4">{post.excerpt}</p>
        <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition duration-300">
          Leer más &rarr;
        </button>
      </div>
    </div>
  );

  // Component for Blog Page
  const BlogPage = () => (
    <div className="min-h-screen pt-24 pb-12 bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300 px-4">
      <div className="container mx-auto max-w-6xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-12 animate-fade-in-up">
          Mi Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => (
            <BlogPostCard key={post.id} post={post} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </div>
  );

  // Component for Blog Detail Page
  const BlogDetailPage = () => {
    const blogId = sessionStorage.getItem('selectedBlogId');
    const post = blogPostsData.find(p => p.id === blogId);

    if (!post) {
      return (
        <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-900 text-white animate-fade-in px-4 text-center">
          <p className="text-2xl text-gray-400 mb-4">Entrada de blog no encontrada.</p>
          <button
            onClick={() => navigateTo('blog')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Volver al Blog
          </button>
        </div>
      );
    }

    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300 px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <button
            onClick={() => navigateTo('blog')}
            className="mb-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-5 rounded-lg transition duration-300 ease-in-out flex items-center shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver
          </button>
          <div className="bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up border border-gray-700">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="prose prose-invert text-gray-300 max-w-none">
              {/* This is where the rich content of the blog post would go. */}
              {/* For simplicity, using a plain paragraph here. You can add HTML tags here for images, bold text, etc. */}
              {/* Example of adding an image inside blog post content: */}
              {/* <img src="./images/blog-image.jpg" alt="Description" class="my-8 rounded-lg shadow-md" onerror="this.onerror=null;this.src=\'https://placehold.co/700x400/334155/e2e8f0?text=Imagen+no+disponible\';"> */}
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Component for Contact Page
  const ContactPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real application, you would send this data to a backend server
      // For this static, free, self-hosted version, we'll just log it.
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      console.log('Datos del formulario de contacto:', data);
      alert('¡Gracias por tu mensaje! (Este es solo un mensaje de ejemplo, el formulario no envía datos reales en esta versión gratuita.)');
      e.target.reset(); // Clear form
    };

    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300 px-4">
        <div className="container mx-auto max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-12 animate-fade-in-up">
            Contacto
          </h1>
          <div className="bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 animate-fade-in-up">
            <p className="text-gray-300 text-lg mb-6 text-center">
              No dudes en ponerte en contacto conmigo para consultas, colaboraciones o simplemente para saludar.
            </p>

            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-indigo-400 mb-4">Correo Electrónico</h2>
              <a href="mailto:gustavo.seczad@ejemplo.com" className="text-indigo-300 hover:text-indigo-200 text-xl md:text-2xl font-medium transition duration-300 break-words">
                gustavo.seczad@ejemplo.com
              </a>
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-indigo-400 mb-4">Redes Sociales</h2>
              <div className="flex justify-center space-x-6 text-3xl">
                <a href="https://www.linkedin.com/in/gustavo-seczad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i> {/* FontAwesome LinkedIn icon */}
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/gustavo-seczad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300" aria-label="GitHub">
                  <i className="fab fa-github"></i> {/* FontAwesome GitHub icon */}
                  <span className="sr-only">GitHub</span>
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-indigo-400 mb-4 text-center">Formulario de Contacto</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-lg font-semibold mb-2">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-lg font-semibold mb-2">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-lg font-semibold mb-2">Mensaje:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200 resize-y"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-400 py-8 text-center text-sm border-t border-gray-700 transition-colors duration-300 px-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Gustavo 'Seczad'. Todos los derechos reservados.</p>
        <p className="mt-2">Diseñado con <span className="text-red-500">&hearts;</span> y React + Tailwind CSS.</p>
      </div>
    </footer>
  );

  // Router logic to render the correct page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'projectDetail':
        return <ProjectDetailPage />;
      case 'blog':
        return <BlogPage />;
      case 'blogDetail':
        return <BlogDetailPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`font-inter antialiased ${isDarkMode ? 'dark' : ''} bg-gray-900`}>
      {/* External CSS and Fonts (CDNs are loaded via index.html) */}
      {/* The style block here is for custom animations and prose styling */}
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
          /* Ensure body background changes with theme */
          background-color: ${isDarkMode ? '#111827' : '#ffffff'}; /* gray-900 or white */
        }
        /* Custom animations */
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Styling for prose (markdown-like content in blog posts) */
        .prose {
          color: #d1d5db; /* gray-300 */
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: #93c5fd; /* indigo-300 */
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }
        .prose p {
          margin-bottom: 1em;
        }
        .prose ul, .prose ol {
          margin-left: 1.5em;
          list-style-type: disc;
          margin-bottom: 1em;
        }
        .prose ol {
          list-style-type: decimal;
        }
        .prose a {
          color: #6366f1; /* indigo-500 */
          text-decoration: none;
        }
        .prose a:hover {
          text-decoration: underline;
        }
        .prose blockquote {
          border-left: 4px solid #6366f1; /* indigo-500 */
          padding-left: 1em;
          margin-left: 0;
          color: #a1a1aa; /* gray-400 */
          font-style: italic;
        }
        .prose img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem; /* rounded-lg */
            margin-top: 1.5em;
            margin-bottom: 1.5em;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .prose-invert {
            /* Styles for dark mode, mostly inherited but good to be explicit */
            color: #e2e8f0; /* light gray for text */
        }
        `}
      </style>

      <Navbar />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
