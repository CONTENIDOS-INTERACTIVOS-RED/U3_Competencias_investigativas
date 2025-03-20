<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Elaboración de un cronograma'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 A continuación, se presenta una guía estructurada para la elaboración del cronograma, que incluye los pasos clave mencionados:
    
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Identificación de actividades")
            p Desglosar las actividades principales del proyecto en tareas específicas (revisión de literatura, diseño metodológico, etc.).
          .div(titulo="Secuencia lógica")
            p Establecer el orden de las actividades, identificando cuáles pueden realizarse en paralelo y cuáles dependen de tareas previas.
          .div(titulo="Estimación de tiempos")
            p Asignar un tiempo estimado para cada tarea, considerando la complejidad, recursos, posibles contratiempos y disponibilidad.
          .div(titulo="Uso de herramientas visuales")
            p Representar las actividades y su duración mediante un diagrama de Gantt o una herramienta similar.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Inclusión de hitos")
            p Definir puntos de control o evaluación para monitorear el progreso del proyecto.
          .div(titulo="Margen para imprevistos")
            p Reservar un tiempo adicional para enfrentar retrasos o problemas no anticipados.
          .div(titulo="Revisión periódica")
            p Actualizar el cronograma según el progreso real y realizar ajustes si es necesario.
    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-morado.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Un cronograma bien estructurado no solo organiza las actividades y los tiempos, sino que también permite gestionar de manera efectiva los recursos y supervisar el cumplimiento de los objetivos del proyecto.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/journal/290/29063559017/29063559017.pdf") Montero, J. M. C., et al. (2020). Áreas de conocimiento y fases clave en la gestión de proyectos: consideraciones teóricas. Revista Venezolana de Gerencia, 25(90), 680-692.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.19053/01211048.13408") Cárdenas Torrado, L., et al. (2022). Revisión del marco lógico: conceptualización, metodología, variaciones y aplicabilidad. Inquietud Empresarial, 22(1), 117-133.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=5hpXwN8OUWM") Universidad Continental (2019). El marco teórico de una investigación [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=5UYi3FWe12E") Universidad Continental (2019). Diseño de Investigación [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=cOweYm7oaZI") Calímaco Digital (2022). ¿Cómo usar Zotero? Genera citas y referencias automáticas [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=6Hpg_mCuhOY") CRAI Ulloa (2021). El nuevo Mendeley Cite: aprende su uso [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario='cuestionario'/>


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Unidad 3',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'En una investigación sobre el rendimiento de bases de datos distribuidas en aplicaciones en tiempo real, la etapa de análisis de resultados debe realizarse antes de la recolección de datos, ya que facilita la organización de la información.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En una investigación sobre la mejora del rendimiento de sistemas operativos, durante la etapa de experimentación, el investigador manipula variables para observar los efectos en un entorno controlado, lo que facilita la verificación o rechazo de hipótesis.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En una investigación sobre la evaluación del impacto de nuevas arquitecturas de microprocesadores en el rendimiento de dispositivos móviles, la conclusión del estudio no puede incluir la revisión de la o las hipótesis, ya que esto es parte exclusiva de la discusión de resultados.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En una propuesta sobre la implementación de tecnologías emergentes para mejorar la seguridad en redes de Internet de las Cosas (IoT), la introducción solo deberá contener los objetivos de la investigación, ya que el contexto del estudio no es relevante.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'A un grupo de Ingenieros, se le ha solicitado proponer un proyecto para mejorar el sistema de reconocimiento biométrico de un laboratorio. Una propuesta de investigación coherente debe incluir una revisión de la literatura que explore investigaciones previas relacionadas con el tema, permitiendo identificar vacíos en el conocimiento que justifiquen el estudio.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
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
