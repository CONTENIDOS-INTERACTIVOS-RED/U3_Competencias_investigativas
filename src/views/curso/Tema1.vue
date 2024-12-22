<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Selección del enfoque metodológico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Los enfoques metodológicos de investigación ofrecen diferentes caminos para abordar y comprender la realidad social y científica. A continuación, se presentan las características de cada enfoque, sus aplicaciones y criterios para su selección:
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Enfoque cuantitativo
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Características.</b> Se basa en la medición numérica, el análisis estadístico y un proceso secuencial y deductivo.

              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Procedimientos.</b> Parte de una idea, acota objetivos y preguntas, formula hipótesis y recolecta datos mediante instrumentos estandarizados.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Ventajas.</b> Permite generalizar resultados y replicar estudios, buscando patrones en poblaciones o datos específicos.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Aplicación.</b> Ideal para medir variables, probar teorías y establecer relaciones estadísticas entre los datos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Enfoque cualitativo
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Características.</b> Es interpretativo y busca comprender profundamente los fenómenos desde la perspectiva de los participantes en su entorno natural.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Procedimientos.</b> Sigue un proceso inductivo y flexible, utilizando técnicas como entrevistas abiertas, observación y análisis de documentos.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Ventajas.</b> Proporciona una comprensión detallada de experiencias humanas, significados y contextos socioculturales.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Aplicación.</b> Adecuado para explorar fenómenos poco estudiados, construir teorías y analizar procesos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Enfoque mixto
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Características.</b> Integra los métodos cuantitativo y cualitativo en un solo estudio, combinando sus fortalezas.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Procedimientos.</b> Puede seguir estrategias secuenciales, concurrentes o transformativas según las necesidades del estudio.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Ventajas.</b> Ofrece una comprensión más completa y profunda al combinar datos numéricos con interpretaciones ricas.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 18px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Aplicación.</b> Recomendado para problemas complejos que requieren tanto medición como análisis contextual.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

    h2 Factores para la selección del enfoque
    p.mb-4 La elección del enfoque metodológico depende de varios factores
    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="20%" y="21%" numero="+")
        .h5.mb-2 Contexto del estudio
        p Las condiciones sociales, culturales o ambientales del fenómeno pueden orientar la elección del método.
      .tarjeta.bg-white.p-4(x="81%" y="21%" numero="+")
        .h5.mb-2 Problema de investigación 
        p Si se busca medir o probar teorías, el enfoque cuantitativo será adecuado; para explorar fenómenos complejos o poco estudiados, se recomienda el cualitativo.
      .tarjeta.bg-white.p-4(x="81%" y="70%" numero="+")
        .h5.mb-2 Objetivos del estudio
        p El enfoque mixto es ideal si se requiere integrar perspectivas numéricas y cualitativas para comprender el problema en su totalidad.
      .tarjeta.bg-white.p-4(x="20%" y="70%" numero="+")
        .h5.mb-2 Recursos disponibles
        p El tiempo, el presupuesto y el acceso a participantes o datos pueden influir en la viabilidad del enfoque.
    .row.mb-5.-mt-24px
      .col-10.mx-auto(data-aos="zoom-up")
        .bg-rojo-claro.p-4
          span No existe un enfoque superior de forma inherente; cada uno tiene sus propias fortalezas y limitaciones. La clave radica en seleccionar el enfoque o la combinación de enfoques que mejor se adapten a los objetivos y necesidades de la investigación. De este modo, se asegura una aproximación efectiva y rigurosa al problema planteado.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/229656") Gregorio Rojas, N. (2023). Metodología de la investigación para anteproyectos (1 ed.). Universidad Abierta para Adultos (UAPA).
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.scielo.br/j/cp/a/xpbhxtDHLrGHfLPthJHQNwK") Ramos, J. R. G. (2018). Cómo se construye el marco teórico de la investigación. Cadernos de pesquisa, 48, 830-854.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.recimundo.com/index.php/es/article/view/860") Albán, G. P. G., Arguello, A. V., & Molina, N. E. C. (2020). Metodologías de investigación educativa. RECIMUNDO, 4(3), 163-173.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
