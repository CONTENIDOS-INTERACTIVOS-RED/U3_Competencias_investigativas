<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la investigación científica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La ciencia se puede entender como el conjunto coherente de conocimientos relativos a una determinada área de la realidad que se obtienen mediante el empleo de un método y un lenguaje adecuados. Que se obtengan conocimientos en ese ámbito implica que se realizan investigaciones y en estas se ha seguido un determinado método. La idea de ciencia está ligada a la de método. 
        span La investigación científica es una actitud. Una actitud de compromiso existencial con la verdad, en contraposición con el escepticismo; una actitud humilde de aceptación de las propias limitaciones en el conocer real, en oposición al dogmatismo de quien no reconoce límites para saber. Es una actitud de ámbito personal e intransmisible o imitable. Es incompatible con la pura fe y con el puro interés. La ciencia se fundamenta y se lleva a cabo desde el conocimiento o desde la “ignorancia y sorpresa”, pero no puede nacer de la fe ni del puro interés.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Definición y concepto de investigación científica
    p.mb-4 La investigación científica, además de considerar la naturaleza de los objetos de estudio, incluye una reflexión sobre los métodos empleados y la validez de los resultados obtenidos. Para desarrollar este proceso, es fundamental comprender sus elementos constitutivos, que se presentan a continuación de manera estructurada.

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        p.mb-4 A continuación, se describen los aspectos esenciales que componen la investigación científica:
        AcordionA(tipo="b")
          .div(titulo="Objeto o fenómeno de interés")
            p Se refiere a las inquietudes que la investigación busca resolver. Incluye entidades específicas hacia las cuales se dirige el estudio. Estas propiedades suelen no ser observables directamente.
          .div(titulo="Métodos de recolección de datos")
            p Incluyen técnicas diseñadas para recopilar información de manera sistemática, adecuada a los objetivos y características de cada investigación. Ejemplos: encuestas, entrevistas y experimentos.
          .div(titulo="Análisis de datos")
            p Proceso que organiza, interpreta y da sentido a los datos recopilados para extraer conclusiones significativas y fundamentadas.
          .div(titulo="Validez y confiabilidad")
            p Garantizan que los resultados sean precisos, relevantes y replicables, permitiendo su aplicación en contextos similares.

    .row.mb-4
      .col-10.mx-auto
        .bg-rojo.p-4
          span Estos elementos garantizan un desarrollo riguroso del proceso investigativo, asegurando la obtención de conclusiones fundamentadas y útiles.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Importancia de la investigación en diversas disciplinas

    p.mb-4 La investigación es esencial en todas las áreas del conocimiento. Desde las ciencias experimentales hasta las ciencias sociales, proporciona herramientas para explorar, explicar y aplicar conceptos clave. Su impacto abarca desde descubrimientos innovadores hasta el diseño de soluciones prácticas.

    .row.mb-4
      ImagenInfografica.color-secundario.mb-5.d-md-none.col-10.mx-auto
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

        .tarjeta.bg-rojo.p-4(x="90%" y="10.5%" numero="+")
          .h5.mb-2 Ciencias experimentales
          p Desarrollo de nuevos medicamentos, tecnologías avanzadas y soluciones ambientales mediante la experimentación y observación rigurosas.
        .tarjeta.bg-rojo.p-4(x="10%" y="30%" numero="+")
          .h5.mb-2 Ciencias sociales
          p Análisis del comportamiento humano, diseño de políticas públicas, comprensión de fenómenos sociales y culturales.
        .tarjeta.bg-rojo.p-4(x="86%" y="50%" numero="+")
          .h5.mb-2 Matemáticas
          p Creación y validación de teorías abstractas aplicables en campos como la física, la economía y la informática.
        .tarjeta.bg-rojo.p-4(x="11%" y="69.7%" numero="+")
          .h5.mb-2 Medicina
          p Mejora de la prevención, diagnóstico y tratamiento de enfermedades a través de investigaciones clínicas y epidemiológicas.
        .tarjeta.bg-rojo.p-4(x="80%" y="89.5%" numero="+")
          .h5.mb-2 Educación
          p Innovación en métodos pedagógicos, desarrollo curricular y herramientas para fomentar aprendizajes más efectivos.
    ImagenInfografica.color-secundario.mb-5.d-none.d-md-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

      .tarjeta.bg-rojo.p-4(x="10.5%" y="85%" numero="+")
        .h5.mb-2 Ciencias experimentales
        p Desarrollo de nuevos medicamentos, tecnologías avanzadas y soluciones ambientales mediante la experimentación y observación rigurosas.
      .tarjeta.bg-rojo.p-4(x="30.3%" y="19%" numero="+")
        .h5.mb-2 Ciencias sociales
        p Análisis del comportamiento humano, diseño de políticas públicas, comprensión de fenómenos sociales y culturales.
      .tarjeta.bg-rojo.p-4(x="50%" y="72%" numero="+")
        .h5.mb-2 Matemáticas
        p Creación y validación de teorías abstractas aplicables en campos como la física, la economía y la informática.
      .tarjeta.bg-rojo.p-4(x="69.6%" y="27.3%" numero="+")
        .h5.mb-2 Medicina
        p Mejora de la prevención, diagnóstico y tratamiento de enfermedades a través de investigaciones clínicas y epidemiológicas.
      .tarjeta.bg-rojo.p-4(x="89.4%" y="72%" numero="+")
        .h5.mb-2 Educación
        p Innovación en métodos pedagógicos, desarrollo curricular y herramientas para fomentar aprendizajes más efectivos.

    .row.mb-5
      .col-10.mx-auto
        .bg-morado.p-4
          span La investigación fomenta el pensamiento crítico, la innovación y el desarrollo de conocimientos que benefician tanto a la comunidad científica como a la sociedad en general.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.31876/is.v3i2.5") Chinche Duicela, J., Ramón Pozo, J., y López Aguirre, J. F. (2020). El Método Científico: Análisis de la literatura. Revista Imaginario Social, 3(2).
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.35383/educare.v8i1.397") Campos Olazabal, P. J. (2020). La importancia de la investigación formativa como estrategia de aprendizaje. Educare Et Comunicare.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=xPjRiNPu038") SFPIE UV (2020). La investigación y su importancia. Inversión en I+D [Vídeo]
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
