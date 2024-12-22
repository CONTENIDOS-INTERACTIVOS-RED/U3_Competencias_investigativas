<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Método científico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El método científico guía el desarrollo del proceso investigativo, comenzando con la identificación de un problema, hecho curioso o fenómeno desconocido, seguido de su fundamentación y la formulación de una hipótesis (o resultados esperados). Este proceso continúa con la recopilación organizada de datos, el análisis e interpretación de los mismos, y concluye con la comprobación, contrastación o aceptación de la hipótesis según los resultados obtenidos (Chinche Duicela et al., 2020).
        .bg-rojo.p-4
          span El método científico ha sido aplicado tradicionalmente en todos los niveles del conocimiento positivo, aunque con variantes según las especialidades de cada disciplina, adaptándose al objeto de estudio.
        span A lo largo de estas etapas, los investigadores pueden establecer teorías y leyes basadas en evidencias sólidas y verificables, lo que facilita un entendimiento más profundo de la realidad. Es fundamental seguir estas etapas de manera rigurosa y objetiva para garantizar resultados válidos y confiables.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    p.mb-4 Sin embargo, dependiendo del campo del conocimiento, algunas etapas pueden ser adaptadas o flexibilizadas. Lo esencial es desarrollar cada una de ellas de forma adecuada y ética, asegurando la validez y confiabilidad de los resultados obtenidos.

    .row.mb-4
      .col-12.col-md-7.col-xl-5.mx-auto
        p.mb-4 <strong>Figura 1.</strong> Pasos del método científico
        figure
          img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          figcaption <strong>Fuente</strong> Elaboración propia a partir de Chinche Duicela (2020)
    p.mb-4 Las actividades típicas que se realizan de manera sistemática en cada paso del método científico, no obstante, según el tipo de estudio los pasos pueden tener algunas variaciones.

    .row.position-relative.mb-5.py-4.bg-azul.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Observación 
              p.mb-4 La observación es el inicio del proceso científico, donde se examina sistemáticamente la realidad para identificar fenómenos de interés. Implica una percepción estructurada y registro detallado del entorno, manteniendo objetividad.
              p.mb-1.text-bold Actividades:
              p.mb-1 ● Identificación de fenómenos de interés.
              p.mb-1 ● Documentación detallada.
              p.mb-1 ● Recopilación preliminar.
              p.mb-1 ● Registro contextual.
              p.mb-1 ● Revisión de literatura.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Planteamiento del problema 
              p.mb-4 Transformación de una observación en una pregunta específica de investigación. Se delimita el alcance y relevancia del estudio, orientando la investigación.
              p.mb-1.text-bold Actividades:
              p.mb-1 ● Delimitación del fenómeno.
              p.mb-1 ● Formulación de preguntas.
              p.mb-1 ● Justificación del estudio.
              p.mb-1 ● Establecimiento de objetivos.
              p.mb-1 ● Determinación de viabilidad.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Formulación de hipótesis
              p.mb-4 Creación de explicaciones tentativas sobre el fenómeno. Las hipótesis son comprobables y guían la investigación.
              p.mb-1.text-bold.mb-4 Actividades:
              p.mb-1 ● Proposición de explicaciones.
              p.mb-1 ● Identificación de variables.
              p.mb-1 ● Establecimiento de relaciones.
              p.mb-1 ● Operacionalización de variables.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Experimentación 
              p.mb-4 Etapa de recolección de evidencia. En estudios experimentales, implica manipulación controlada; en no experimentales, se observan fenómenos en su contexto natural. 
              p.mb-1.text-bold Actividades:
              .row
                .col-12.col-md-6
                  p.mb-1.text-bold Experimentales
                  p.mb-1 ● Diseño experimental. 
                  p.mb-1 ● Control de variables.
                  p.mb-1 ● Grupos control y experimental.
                  p.mb-1 ● Manipulación de variables.
                  p.mb-1 ● Registro de resultados.
                .col-12.col-md-6
                  p.mb-1.text-bold No experimentales
                  p.mb-1 ● Diseño de instrumentos.
                  p.mb-1 ● Selección de métodos observacionales.
                  p.mb-1 ● Implementación de estudios.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Análisis de resultados
              p.mb-4 Procesamiento e interpretación de datos mediante métodos estadísticos o analíticos, evaluando patrones y si los resultados apoyan las hipótesis. 
              p.mb-1.text-bold Actividades:
              p.mb-1 ● Organización de datos.
              p.mb-1 ● Métodos estadísticos.
              p.mb-1 ● Interpretación de patrones.
              p.mb-1 ● Evaluación de significancia.
              p.mb-1 ● Comparación con hipótesis.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Conclusión
              p.mb-4 Síntesis e interpretación de hallazgos respecto al problema original. Se evalúa la validez de hipótesis, se reconocen limitaciones y se exploran implicaciones.
              p.mb-1.text-bold Actividades:
              p.mb-1 ● Evaluación de hipótesis.
              p.mb-1 ● Síntesis de hallazgos.
              p.mb-1 ● Identificación de limitaciones.
              p.mb-1 ● Propuesta de implicaciones prácticas.
              p.mb-1 ● Sugerencias futuras.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Comunicación 
              p.mb-4 Difusión de hallazgos a la comunidad científica y público relevante. Se realiza en formatos estandarizados para evaluación y replicación.
              p.mb-1.text-bold Actividades:
              p.mb-1 ● Redacción del informe.
              p.mb-1 ● Elaboración de artículos.
              p.mb-1 ● Presentaciones.
              p.mb-1 ● Participación en congresos.
              p.mb-1 ● Divulgación en medios.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Características y etapas del método científico

    p.mb-4 El método científico es un conjunto de principios y reglas que orientan al investigador en la obtención de conocimientos fiables y explicaciones fundamentadas sobre la realidad. Este enfoque no es un esquema rígido, sino una guía flexible que permite adaptar las acciones según el fenómeno de interés, promoviendo un conocimiento empírico sólido.
    h2 Etapas del método científico
    p.mb-4 A continuación, se presenta una síntesis de las tres etapas principales del método científico y sus respectivos pasos:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Inducción")
            p Observación de un fenómeno para identificar patrones y formular teorías generales que lo expliquen.
          .div(titulo="Deducción")
            p Aplicación de las teorías formuladas al fenómeno observado, deduciendo sus consecuencias empíricas y verificando su consistencia teórica.
          .div(titulo="Verificación")
            p Comprobación mediante observación y experimentación controlada para determinar si las afirmaciones deducidas coinciden con la realidad observada.

    h2 Importancia de la fiabilidad y validez en el método científico
    p.mb-4 La fiabilidad y la validez son pilares fundamentales en el método científico, ya que:

    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Fiabilidad
                p.text-small.px-4.text-start.pb-2 Asegura que los resultados sean consistentes y replicables bajo las mismas condiciones.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Validez
                p.text-small.px-4.text-start.pb-2 Garantiza que los resultados realmente midan lo que se pretende estudiar, reflejando con precisión la realidad investigada.

    .row.mb-5
      .col-10.mx-auto
        .bg-rojo.p-4
          span Este proceso estructurado, pero flexible, permite obtener conocimientos confiables y aceptados por la comunidad científica, contribuyendo al avance de diversas disciplinas.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/98278") Fresno Chávez, C. (2019). Metodología de la investigación: así de fácil. Ciudad Educativa.
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
