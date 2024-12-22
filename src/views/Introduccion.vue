<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 El diseño y desarrollo de proyectos de investigación es una competencia fundamental en el ámbito académico y profesional, ya que permite construir conocimiento riguroso y fundamentado en diferentes disciplinas. En esta última unidad del curso “Competencias Investigativas” estará enfocada en los aspectos esenciales de un proyecto de investigación, le proporcionará una guía de comprensión integral de cómo llevar a cabo una investigación de calidad. Desde la selección del enfoque metodológico hasta la estructuración de cronogramas y el cálculo de recursos necesarios, esta secuencia lógica le facilitará la adquisición de competencias clave para la formulación de proyectos de investigación.


    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-morado.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Al finalizar esta unidad, usted será capaz de seleccionar el enfoque metodológico adecuado para su idea de investigación, entender las técnicas y herramientas de recolección de datos, estructurar de manera lógica y efectiva la propuesta de investigación, y proyectar cronogramas y planes de recursos que optimicen el uso de tiempo y medios en función de los objetivos planteados. El dominio de estas competencias no solo es útil en un contexto académico, sino que también es fundamental en la toma de decisiones basada en evidencia, un aspecto que es bastante bien valorado en ambientes laborales.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
    

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7.d-flex.flex-column
        span En este último espacio para concluir su curso, encontrará los aspectos relacionados con la selección del enfoque metodológico, un paso importante para juzgar la validez y pertinencia de los hallazgos de una investigación. Luego, se profundizará en las técnicas y herramientas de recolección de datos, proporcionando ejemplos y guías prácticas para el uso de encuestas, entrevistas, observaciones, y otras herramientas. Posteriormente, encontrará la estructura general de un proyecto de investigación, donde se explorarán los componentes básicos que un investigador debe considerar al presentar sus ideas y resultados. Finalmente, se estudiará la elaboración de cronogramas y la planificación de recursos, etapas que permiten maximizar la eficiencia y cumplir con los plazos establecidos. 

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
