<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Enfoques de investigación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 Los enfoques de investigación son estrategias generales que un investigador puede adoptar para abordar un fenómeno o problema (Arias y Covinos, 2021). Estos enfoques guían decisiones clave sobre la recopilación, análisis e interpretación de datos y afectan directamente el diseño de la investigación. A continuación, se describen las características de los enfoques más comunes según Fresno Chávez (2019):
    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Investigación cualitativa

    p.mb-4 Este enfoque, fundamentado en un paradigma que considera la realidad como subjetiva y construida a partir de vivencias y experiencias, busca comprender la realidad social desde la perspectiva de los sujetos de estudio.
    p.mb-4 Las características principales son:

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 La realidad social se analiza a través de representaciones e interpretaciones personales.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 Enfocado en datos descriptivos y en profundidad sobre experiencias y significados.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 Resultados no generalizables a toda la población, pero pueden generar conceptos generales aplicables en el campo de estudio.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 Específico al contexto donde se realiza el estudio.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Investigación cuantitativa

    p.mb-4 La investigación cuantitativa mide variables, establece hipótesis, presenta teorías o las verifica, buscando objetividad y precisión en el análisis de datos.
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Las características principales son: 
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 Enfocada en la medición y análisis estadístico de datos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 Permite comprender el comportamiento de las variables mediante comprobación experimental.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 Orientada a la predicción y la generalización de los resultados.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 Asociada a la neutralidad del investigador, aunque puede incorporar supuestos o teorías.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 5
            p.mb-0 Requiere conocimientos técnicos para manejar programas de análisis de datos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 6
            p.mb-0 Puede llevar a sobregeneralizaciones o ignorar parámetros no considerados.
    #t_3_3.titulo-segundo
      div.d-flex
        span.me-3 3.3  
        h2 Investigación mixta
    p.mb-4 El enfoque mixto combina elementos de los enfoques cualitativo y cuantitativo, proporcionando una visión más integral y profunda de fenómenos complejos.

    p.mb-4 Las características principales son:
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 1
            p.mb-0 Integra recolección y análisis de datos numéricos y textuales.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 2
            p.mb-0 Permite abordar problemas desde múltiples perspectivas, obteniendo resultados más completos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 3
            p.mb-0 Los datos cuantitativos aportan objetividad y generalización.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 4
            p.mb-0 Los datos cualitativos proporcionan un entendimiento más profundo de contextos y percepciones.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo-2
              span 5
            p.mb-0 Captura tanto el "qué" como el "por qué" de un fenómeno, superando las limitaciones de los métodos exclusivos.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    p.mb-4 La elección del enfoque adecuado depende del problema de investigación, los objetivos planteados y el contexto en el que se realiza el estudio.

    .row.bg-morado-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Ética en la investigación científica
          p.mb-5 ¿Cómo influyen los principios éticos en la investigación científica y en la relación entre ciencia y sociedad? En el documento Ética en la investigación científica , se exploran conceptos clave como respeto, honestidad y accesibilidad, destacando su importancia en la recolección y análisis de datos. Se abordan prácticas como el consentimiento informado, la confidencialidad y la objetividad en el análisis, así como desafíos emergentes en el manejo de big data. Le invitamos a consultar el documento para reflexionar sobre la relevancia de la ética en la producción de conocimiento responsable y su impacto social.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Ética en la investigación científica.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ética en la investigación científica 

    #t_3_4.titulo-segundo
      div.d-flex
        span.me-3 3.4  
        h2 Tipos de investigación 
    p.mb-4 La clasificación de los tipos de investigación refleja la evolución del pensamiento científico y las diversas aproximaciones epistemológicas en la generación de conocimiento. Este sistema permite abordar la realidad desde diferentes perspectivas, organizando los procesos según criterios específicos. A continuación, se presentan los principales tipos de investigación y sus características distintivas, enmarcadas en los paradigmas positivista, interpretativo y crítico.
    .row.position-relative.mb-5.py-4.bg-azul.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Investigación formativa
              p.mb-4 Se centra en el desarrollo de habilidades investigativas, especialmente en entornos educativos, fortaleciendo el pensamiento científico sin priorizar resultados.
              p.mb-1.text-bold Características: 
              p.mb-1 ● Enfoque pedagógico.
              p.mb-1 ● Desarrollo progresivo de competencias. 
              p.mb-1 ● Énfasis en procesos más que en resultados.
              p.mb-1 ● Supervisión constante.
              p.mb-1 ● Integración teoría-práctica.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Investigación básica
              p.mb-4 Orientada al descubrimiento de principios fundamentales, busca expandir el conocimiento teórico sin fines prácticos inmediatos.
              p.mb-1.text-bold Características:
              p.mb-1 ● Enfoque en fundamentos teóricos.
              p.mb-1 ● Resultados de largo plazo. 
              p.mb-1 ● Rigor metodológico. 
              p.mb-1 ● Sin aplicación directa inmediata. 
              p.mb-1 ● Contribuye al desarrollo de teorías.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Investigación aplicada
              p.mb-4 Se enfoca en resolver problemas concretos utilizando conocimientos teóricos en contextos específicos, como la industria o la salud.
              p.mb-1.text-bold Características:
              p.mb-1 ● Orientación práctica.
              p.mb-1 ● Resultados tangibles a corto o mediano plazo.
              p.mb-1 ● Uso de teorías para resolver problemas. 
              p.mb-1 ● Relación directa con necesidades sociales.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

    p.mb-4 Los diferentes tipos de investigación no operan de forma aislada, sino que están interrelacionados, formando un ciclo continuo que retroalimenta el desarrollo del conocimiento.

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Ciclo de conocimiento")
            p La investigación básica genera fundamentos teóricos; la aplicada utiliza estos conocimientos para resolver problemas, y la formativa prepara nuevos investigadores para estos procesos.
          .div(titulo="Retroalimentación")
            p Los resultados prácticos obtenidos en la investigación aplicada informan y refinan teorías básicas, mientras que las necesidades sociales impulsan nuevas líneas de investigación.
          .div(titulo="Impacto social")
            p Este ciclo integrado fomenta la innovación, la formación de capital humano y el avance científico sostenible, alineado con las demandas sociales y económicas.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    .bg-rojo.p-4.mb-4
      span La diversificación de los tipos de investigación responde a la necesidad de abordar problemas desde perspectivas teóricas, prácticas y formativas. Esta clasificación no solo enriquece el entendimiento científico, sino que también promueve un desarrollo equilibrado, al conectar los fundamentos teóricos con las aplicaciones prácticas y la formación de nuevas generaciones de investigadores.

    #t_3_5.titulo-segundo
      div.d-flex
        span.me-3 3.5  
        h2 Aplicación de los principios de la investigación científica en diferentes campos

    p.mb-4 Los principios fundamentales de la investigación científica (sistemático, objetivo, reproducible y verificable) se aplican de manera particular en diferentes áreas del conocimiento, adaptándose a sus características y necesidades específicas, pero sin perder el rigor que los define.

    .row.position-relative.mb-5.py-4.bg-azul.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Medicina
              p.mb-4 Permiten desarrollar tratamientos seguros y confiables mediante diseños rigurosos y objetivos.

              p.text-bold.mb-1 Ejemplo: 
              span En el desarrollo de una vacuna, la sistematicidad asegura el cumplimiento adecuado de todas las fases de prueba y análisis, y la reproducibilidad garantiza que los resultados puedan replicarse en diferentes contextos para brindar seguridad.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Ciencias sociales
              p.mb-4 Facilitan el estudio de fenómenos humanos y sociales complejos, minimizando sesgos personales y fundamentando conclusiones en datos concretos.

              p.text-bold.mb-1 Ejemplo:
              span Estudios sobre dinámicas de grupo y comportamiento humano permiten diseñar políticas públicas o programas sociales que atiendan necesidades reales de la población.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Ingeniería
              p.mb-4 Conectan con el desarrollo de soluciones tecnológicas y materiales, asegurando estándares de calidad y seguridad.

              p.text-bold.mb-1 Ejemplo:
              span  Al diseñar un material resistente, la sistematicidad en la experimentación y la reproducibilidad de resultados garantizan su fabricación a escala y confiabilidad en aplicaciones industriales
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    p.mb-5 Independientemente del área, los principios de la investigación científica son esenciales para fundamentar estudios rigurosos. Sin embargo, la flexibilidad en su aplicación es clave para ajustarlos a las características de cada campo, manteniendo siempre el rigor y la objetividad. Esta adaptabilidad asegura que los métodos se alineen con las necesidades específicas del ámbito en el que se desarrollan las investigaciones.


    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202018000100305") Salazar Raymond, M. B., et al. (2018). La importancia de la ética en la investigación.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202020000400333") Espinoza Freire, E. E., y Calva Nagua, D. X. (2020). La ética en las investigaciones educativas.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.25267/Periferica.2006.i7.05") Sánchez González, M. P. (2022). Nociones básicas en materia de propiedad intelectual.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=O_DlP9wRKbg") SOCEMURP (2023). ÉTICA EN LA INVESTIGACIÓN || DEFINICIÓN E IMPORTANCIA DE LA ÉTICA [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
