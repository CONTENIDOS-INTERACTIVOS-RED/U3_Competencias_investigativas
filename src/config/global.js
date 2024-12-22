export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Diseño metodológico y planificación de proyectos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Selección del enfoque metodológico.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recolección de datos: técnicas y herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas de recolección de datos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Del enfoque metodológico al  diseño de un proyecto de investigación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elaboración de un cronograma',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Albán, G. P. G., Arguello, A. V., & Molina, N. E. C. (2020). Metodologías de investigación educativa (descriptivas, experimentales, participativas, y de investigación-acción). RECIMUNDO: Revista Científica de la Investigación y el Conocimiento, 4(3), 163-173.',
      link: 'https://www.recimundo.com/index.php/es/article/view/860',
    },
    {
      referencia:
        'Hernández Sampieri, R., Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.ezproxy.uniminuto.edu/?il=6443',
    },
  ],
  glosario: [
    {
      termino: 'Cronograma',
      significado:
        'Herramienta de planificación que organiza temporalmente las actividades de investigación, incluyendo hitos y puntos de control para evaluar el avance del proyecto.',
    },
    {
      termino: 'Entrevista semi-estructurada',
      significado:
        'Herramienta de investigación que utiliza una guía de preguntas flexibles, permitiendo una conversación dinámica mientras mantiene el enfoque en temas específicos.',
    },
    {
      termino: 'Escalas de diferencial semántico',
      significado:
        'Instrumento que mide las reacciones de las personas hacia conceptos o estímulos mediante pares de adjetivos opuestos (por ejemplo: bueno-malo, fuerte-débil), donde el participante selecciona un punto en el continuo entre ambos extremos.',
    },
    {
      termino: 'Escalas de medición',
      significado:
        'Instrumentos que permiten asignar valores numéricos a constructos que no son directamente observables, como actitudes o percepciones.',
    },
    {
      termino: 'Escalas de ordenamiento',
      significado:
        'Tipo de escala donde los participantes deben organizar una serie de elementos o alternativas según un criterio específico (como preferencia, importancia o frecuencia), asignándoles rangos o posiciones relativas entre sí.',
    },
    {
      termino: 'Escalas Likert',
      significado:
        'Instrumento de medición que presenta una serie de afirmaciones ante las cuales los participantes indican su nivel de acuerdo o desacuerdo, típicamente en un rango de 5 o 7 puntos (por ejemplo: desde "totalmente en desacuerdo" hasta "totalmente de acuerdo").',
    },
    {
      termino: 'Estado del arte',
      significado:
        'Recopilación y análisis de investigaciones recientes (últimos 5 años) relacionadas con el tema de estudio, abarcando contextos internacionales, nacionales y locales.',
    },
    {
      termino: 'Grupos focales',
      significado:
        'Técnica de recolección de datos mediante entrevistas grupales semi-estructuradas con 6-12 participantes, guiadas por un moderador en torno a una temática específica.',
    },
    {
      termino: 'Marco teórico',
      significado:
        'Descripción de teorías, conceptos y enfoques que fundamentan y guían la investigación, incluyendo la evolución histórica de los conceptos clave.',
    },
    {
      termino: 'Pruebas estandarizadas',
      significado:
        'Instrumentos validados y normalizados que proporcionan medidas objetivas de una muestra de conducta, con procedimientos uniformes de administración y calificación.',
    },
    {
      termino: 'Validación de instrumentos',
      significado:
        'Proceso de verificación de la calidad y pertinencia de los instrumentos de investigación, ya sea mediante evaluación de expertos o pruebas piloto, para evitar sesgos en la recolección de información.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
