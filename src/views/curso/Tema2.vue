<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Recolección de datos: técnicas y herramientas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 Para seleccionar el método o herramienta de recolección de la información para una investigación, es preciso interiorizar y comprender el alcance que puede tener la ruta cualitativa y la cuantitativa. 
    p.mb-4 <b>Figura 1.</b> Métodos de recolección en ruta cuantitativa. 
    figure.mb-4
      img.mb-3(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen').mb-4
      figcaption <b>Nota.</b>Elaboración propia a partir de Hernández Sampieri y Mendoza Torres (2018). 
    
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .bg-morado.p-4.mb-4
          span Como se puede ver, hay un amplio abanico de posibilidades para la elección o definición del método de recolección de la información, esta elección siempre debe estar estrechamente relacionado con la expectativa del estudio, así como las posibilidades de acceso a los datos, también es importante tener claro que no necesariamente se debe elegir sólo un método, es posible combinar los métodos para la obtención de datos necesaria pero es importante aplicar cada método con el suficiente rigor para evitar el sesgo en la información. 
        span Por otra parte, los estudios de tipo cualitativo muestran una serie de rutas que pueden llegar a ser un poco más flexibles que las cualitativas, no obstante, la información también debe ser tomada con alto rigor para evitar los mencionados sesgos. 
      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 2.</b>Métodos de recolección en ruta cualitativa
    figure.mb-4
      img.mb-3(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen').mb-4
      figcaption <b>Nota.</b>Elaboración propia a partir de Hernández Sampieri y Mendoza Torres (2018). 
    
    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Técnicas de recolección de datos

    p.mb-4 Una vez definido el diseño de investigación, es fundamental seleccionar los instrumentos adecuados para recolectar la información. A continuación, se presentan los instrumentos organizados por enfoques cualitativo y cuantitativo, complementados con tablas para estructurar mejor la información.
    h2 Instrumentos cualitativos


    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        h3 
          span.bg-rojo.px-2.pb-1 a
          span.ms-3 Entrevistas semiestructuradas 
        p.mb-4 Son herramientas flexibles que permiten obtener descripciones detalladas sobre percepciones o experiencias. Simulan una conversación y posibilitan profundizar en temas emergentes.
        .row
          .col-12.col-md-10.mx-auto
            SlyderF(columnas="col-12 col-lg-6 col-xl-4 py-4 px-3")
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Uso
                p.px-1.text-small.mb-0.d-flex.text-center Entender perspectivas y significados sobre un fenómeno. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Guía
                p.px-1.text-small.mb-0.d-flex.text-center Preguntas predefinidas, con flexibilidad en su orden y forma. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Registro
                p.px-1.text-small.mb-0.d-flex.text-center Requiere grabación en audio o video para análisis posterior. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Comunicación
                p.px-1.text-small.mb-0.d-flex.text-center Considera tanto aspectos verbales como no verbales. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Contexto
                p.px-1.text-small.mb-0.d-flex.text-center Dinámica entre iguales para construir significados compartidos. 
    h3 
      span.bg-rojo.px-2.pb-1 b
      span.ms-3 Grupos focales
    p.mb-4 Entrevista grupal semi-estructurada, ideal para explorar problemáticas colectivas en contextos específicos.
    .row.mb-4
      .col-12.col-xl-6
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <b>Tamaño del grupo</b> <br>6 a 12 participantes.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <b>Moderador</b> <br>Facilita y guía la discusión.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <b>Ambiente</b> <br>Permisivo y no directivo para fomentar la participación.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 <b>Tema</b> <br>Enfocado en una problemática o temática específica.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 5
            p.mb-0 <b>Datos</b> <br>Generados a partir de la interacción grupal.
      .col-12.col-xl-6.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
    h3 
      span.bg-rojo.px-2.pb-1 c
      span.ms-3 Observación participante
    p.mb-4 El investigador se integra en el contexto estudiado, participando activamente en actividades cotidianas para obtener una perspectiva interna.
    .row.mb-4
      .col-12.col-xl-6.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-6
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <b>Inmersión</b> <br>El investigador se integra en el contexto del grupo.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <b>Registro</b> <br>Notas de campo detalladas y sistemáticas.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <b>Participación</b> <br>Equilibrio entre observar y participar.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 <b>Propósito</b> <br>Comprender comportamientos y significados desde una perspectiva interna.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 5
            p.mb-0 <b>Resultados</b> <br>Datos ricos en detalle cultural y social.

    h2 Instrumentos cuantitativos
    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        h3 
          span.bg-rojo.px-2.pb-1 a
          span.ms-3 Encuestas 
        p.mb-4 Instrumentos estructurados para recolectar información de grandes muestras mediante preguntas estandarizadas.
        .row
          .col-12.col-md-10.mx-auto
            SlyderF(columnas="col-12 col-lg-6 col-xl-4 py-4 px-3")
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Tipo de preguntas
                p.px-1.text-small.mb-0.d-flex.text-center Estructuradas y estandarizadas.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Respuestas
                p.px-1.text-small.mb-0.d-flex.text-center Opciones predeterminadas que facilitan el análisis estadístico. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Muestra
                p.px-1.text-small.mb-0.d-flex.text-center Aplicable a grandes poblaciones. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Resultados
                p.px-1.text-small.mb-0.d-flex.text-center Permiten generalizar y buscar patrones. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Análisis
                p.px-1.text-small.mb-0.d-flex.text-center Uso de herramientas estadísticas para interpretación de datos. 

    h3 
      span.bg-rojo.px-2.pb-1 b
      span.ms-3 Escalas de medición
    p.mb-4 Herramientas que asignan valores numéricos o cualitativos para medir variables como actitudes o comportamientos.
    .row.mb-4
      .col-12.col-xl-6
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <b>Likert</b> <br>Muy en desacuerdo - En desacuerdo - Neutral - De acuerdo - Muy de acuerdo.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <b>Diferencial semántico</b> <br>Asociar conceptos con adjetivos opuestos (ej.: útil/inútil).
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <b>Nominal</b> <br>Clasificación en categorías (ej.: masculino/femenino).
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 <b>Ordinal</b> <br>Clasificación según jerarquías o niveles.
      .col-12.col-xl-6.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
    h3 
      span.bg-rojo.px-2.pb-1 c
      span.ms-3 Pruebas estandarizadas
    p.mb-4 Diseñadas para medir conocimientos o competencias específicas bajo criterios uniformes.
    .row.mb-4
      .col-12.col-xl-6.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-xl-6
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 <b>Procedimientos.</b> <br>Uniformes en administración y calificación.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 <b>Normas.</b> <br>Interpretación basada en estándares predefinidos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 <b>Validez.</b> <br>Validación estadística previa para garantizar fiabilidad.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 <b>Aplicaciones.</b> <br>Comparaciones entre individuos o grupos en condiciones controladas.

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        h2 Integración de instrumentos
        p.mb-4 Al igual que en el diseño metodológico, es posible combinar instrumentos cualitativos y cuantitativos. La tabla siguiente resume las ventajas de esta combinación:
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Enriquecimiento de datos
              p.px-1.text-small.mb-0.d-flex.text-center Se complementan los datos estadísticos con interpretaciones detalladas.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Visión integral
              p.px-1.text-small.mb-0.d-flex.text-center Ofrece un entendimiento más profundo y completo del fenómeno.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Validación cruzada
              p.px-1.text-small.mb-0.d-flex.text-center Los datos de un enfoque pueden corroborar los del otro.
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Flexibilidad
              p.px-1.text-small.mb-0.d-flex.text-center Permite adaptarse a preguntas diversas dentro de un mismo estudio. 

    .row
      .col-10.mx-auto(data-aos="fade-up")
        .bg-morado.p-4.mb-4
          span Seleccionar y emplear las técnicas adecuadas es esencial para garantizar resultados sólidos y relevantes en la investigación.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Del enfoque metodológico al  diseño de un proyecto de investigación

    .row.mb-4 
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 A continuación, se abordará la relevancia del diseño dentro de un proyecto de investigación. Se explicará cómo una planificación adecuada en esta etapa inicial garantiza un estudio sólido y bien fundamentado. Además, se presentarán los elementos clave para estructurar una propuesta de investigación y se destacará la importancia de la validez, la confiabilidad y los aspectos éticos en el proceso.
        TarjetaAudio.color-primario.bg-white.mb-0(
          texto="La importancia del diseño en un proyecto de investigación"
          tiempo
          :audio="require('../../assets/componentes/audios/La importancia del diseño_mezcla.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
    h2 Planeación del proyecto de investigación
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-morado.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La estructura de una propuesta de investigación debe reflejar una planificación inicial de manera sistemática y coherente. El documento debe presentar una progresión lógica que permita al lector comprender la naturaleza del estudio, su fundamentación teórica y su aproximación metodológica (Albán, et al., 2020). La introducción contextualiza el problema y justifica su relevancia, mientras que el marco teórico establece los fundamentos conceptuales que sustentan la investigación. La metodología, por su parte, detalla el enfoque y los procedimientos que se emplearán para alcanzar los objetivos propuestos.

    h2 Estructura general de una propuesta de investigación
    .row.mb-4
      .col-10.mx-auto
        .bg-amarillo-oscruo.p-4
          span Para iniciar con la estructuración de la propuesta de investigación, es necesario que reflexiona sobre las siguientes cuestiones que plantea Hernández Sampieri (2018, p.719):
        .bg-amarillo.p-4
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Qué va a ser investigado? (planteamiento del problema: objetivos y preguntas).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Por qué y para qué debe investigarse? (planteamiento del problema: justificación).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Dónde y cuándo debe investigarse? (contexto: lugar y tiempo).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Cómo va a estudiarse? (¿Qué estrategias y métodos se utilizarán para recolectar y analizar los datos? ¿Qué tipo de datos o información resulta pertinente recabar?) (método).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Qué casos o participantes serán estudiados? (muestra).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Qué resultados se pretende obtener? (resultados).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿De qué manera se validarán los resultados? (validez, confiabilidad y rigor).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Cuánto tiempo consumirá la investigación? (calendario o programación de tiempos).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Cuánto costará? (presupuesto).
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 ¿Cuál es el valor y las aportaciones concretas del estudio? (planteamiento del problema: justificación).

    p.mb-4 Lo anterior le permitirá reflexionar y ordenar las ideas para proceder con la redacción del documento y además, cuidar la cohesión y la coherencia entre cada uno de los apartados. Gregorio Rojas (2023) señala una estructura básica para cualquier propuesta de investigación:

    .row.mb-4
      .col-12.col-xl-7
        .bg-azul-claro.p-4
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Título
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Planteamiento del problema
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Pregunta problema
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Justificación
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Objetivo General 
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Objetivos Específicos
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Antecedentes (O estado del arte)
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Marco Teórico
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-azul-claro.p-4
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            .d-flex.flex-column
              p.mb-3 Metodología, que incluya:  
              p.ms-4.mb-3 <b class="text-naranja">●</b>	Enfoque de investigación
              p.ms-4.mb-3 <b class="text-naranja">●</b>	Tipo de investigación
              p.ms-4.mb-3 <b class="text-naranja">●</b> Universo	
              p.ms-4.mb-3 <b class="text-naranja">●</b>	Muestra
              p.ms-4.mb-3 <b class="text-naranja">●</b>	Técnicas e Instrumentos de recolección de la información.
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Cronograma
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Presupuesto (Cuando aplica)
          div.d-flex.mb-4(data-aos="fade-up")
            img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 Referencias Bibliográficas

    .row.bg-morado.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Estructura general de una propuesta de investigación
          p.mb-3 En esta oportunidad, se invita a revisar la estructura propuesta por Gregorio Rojas para proyectos de investigación, destacando la importancia de incluir un apartado explícito sobre las consideraciones éticas. Este espacio permite detallar las medidas tomadas durante la planeación, ejecución y difusión de los resultados del estudio.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Estructura general de una propuesta de investigación
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/217824") Pineda Martínez, E. O. & Orozco Pineda, P. A. (2018). Herramientas digitales para la investigación educativa en contextos de convergencia cibercultural. Ediciones USTA.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.18004/pdfce/2076-054x/2022.028.54.093") Alegre Brítez, M. Á. (2022). Aspectos relevantes en las técnicas e instrumentos de recolección de datos en la investigación cualitativa. Población y desarrollo, 28(54), 93-100.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
