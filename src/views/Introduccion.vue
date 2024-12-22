<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 En esta primera unidad del curso Competencias Investigativas, se abordarán los principios básicos de la investigación científica, un tema fundamental para cualquier estudiante o profesional que aspire a generar conocimiento riguroso y válido en su campo de estudio. Este proceso constituye la base del avance académico y profesional en prácticamente todas las disciplinas, ya que proporciona herramientas para responder a preguntas complejas y resolver problemas de manera sistemática y ética. En este contexto, resulta esencial comprender las bases sobre las cuales se construye la investigación y su impacto en el desarrollo del conocimiento.

    .row.mb-5
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-morado.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Al finalizar esta unidad, los participantes habrán comprendido los principios esenciales de la investigación científica y serán capaces de explicar la importancia de los métodos científicos en la generación de conocimiento. El propósito es que desarrollen habilidades que les permitan aplicar estos principios de manera adecuada en futuros proyectos académicos o profesionales.
        span La unidad está organizada en varios subtemas: la definición de investigación científica y sus características, detallando los elementos que la distinguen de otros tipos de indagaciones; los principios éticos en la investigación, y, finalmente, una profundización en las diferencias entre investigación básica y aplicada.  
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
