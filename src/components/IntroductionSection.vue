<script setup lang="ts">
// Lógica específica de IntroductionSection aquí
</script>

<template>
  <section id="introduccion-js">
    <div class="introduccion-texto">
      <h1>Introducción a JavaScript</h1>
      <p>
        JavaScript es un lenguaje de programación versátil y potente que se
        utiliza principalmente para crear interactividad en páginas web. Con
        él, puedes manipular el contenido, responder a eventos del usuario y
        mucho más.
      </p>

      <div class="historia-img-container">
        <div class="introduccion-img">
          <img src="/img/javascript fondo.jpg" alt="Introducción a JavaScript" />
        </div>
        <div class="historia-texto">
          <h2>
            <span class="js-icon">⏳</span> Breve Historia de JavaScript
          </h2>
          <p>
            JavaScript fue creado en 1995 por Brendan Eich en Netscape, inicialmente llamado LiveScript. Su propósito era añadir interactividad a las páginas web. Rápidamente ganó popularidad de Java en ese momento, aunque son lenguajes muy diferentes.
          </p>
          <p>
            A lo largo de los años, JavaScript ha evolucionado enormemente. La introducción de ECMAScript 2015 (ES6) marcó un antes y un después, añadiendo características modernas como flechas, clases, promesas y módulos, que lo convirtieron en un lenguaje mucho más potente y agradable de usar. Hoy en día, es uno de los lenguajes más populares y versátiles del mundo.
          </p>
        </div>
      </div>

      <div class="que-es-js-container">
        <h2>
          <span class="js-icon">📜</span> ¿Qué es JavaScript y para qué sirve?
        </h2>
        <p>
          JavaScript es el lenguaje de programación que da vida a las páginas
          web. Mientras que HTML define la estructura y CSS el estilo, JS
          permite:
        </p>
      </div>

      <div class="grid-container">
        <div class="grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">⚙️</span>
            <h3>Manipulación del DOM</h3>
          </div>
          <p>Añadir, quitar o cambiar elementos HTML y CSS dinámicamente.</p>
        </div>
        <div class="grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">⚡</span>
            <h3>Interactividad</h3>
          </div>
          <p>Responder a acciones del usuario como clics, formularios y movimientos del ratón.</p>
        </div>
        <div class="grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">📡</span>
            <h3>Comunicación con Servidores</h3>
          </div>
          <p>Realizar peticiones AJAX/fetch para cargar datos sin recargar la página.</p>
        </div>
        <div class="grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">✨</span>
            <h3>Efectos y Animaciones</h3>
          </div>
          <p>Crear efectos visuales y animaciones que mejoran la experiencia del usuario.</p>
        </div>
        <div class="grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">🚀</span>
            <h3>Desarrollo de Aplicaciones</h3>
          </div>
          <p>Construir aplicaciones web completas (SPAs) con frameworks como Vue, React o Angular.</p>
        </div>
        <div class="grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">📱</span>
            <h3>Desarrollo Backend y Móvil</h3>
          </div>
          <p>Con Node.js, JS se usa en servidores; con React Native, en apps móviles.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Estilos para sección de Introducción a JS */
#introduccion-js {
  display: flex;
  flex-direction: row; /* Align items in a row */
  gap: 2rem; /* Space between image and text */
  background-color: rgba(8, 19, 27, 0.7);
  color: #f1f1f1;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: var(--border-radius);
  align-items: center; /* Vertically align image and text */
}

.introduccion-img {
  flex: 0 0 40%; /* Don't grow, don't shrink, base width 40% */
  text-align: center; /* Center the image horizontally */
}

.introduccion-texto {
  flex: 1; /* Takes remaining space */
}

#introduccion-js img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

#introduccion-js h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

#introduccion-js p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.historia-img-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.historia-texto {
  flex: 1;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  #introduccion-js {
    flex-direction: column; /* Stack image and text on smaller screens */
    align-items: stretch; /* Full width items */
  }

  .introduccion-img {
    flex: 1; /* Take full width */
  }

  .introduccion-texto {
    padding-left: 0; /* Remove left padding */
    margin-top: 1rem; /* Add top margin */
  }

  .historia-img-container {
    flex-direction: column;
  }
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
    gap: 2rem;
    padding: 1rem;
}

/* Ajustes responsivos para el grid-container */
@media (max-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets */
    }
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr; /* 1 columna en móviles */
    }
}

.grid-item {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: var(--border-radius);
    transition: transform 0.3s ease;
    backdrop-filter: blur(calc(var(--blur-amount) / 2));
    border: var(--glass-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.grid-item:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
}

.icon-title-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Espacio entre el icono y el título */
    margin-bottom: 1rem; /* Espacio debajo del icono y título */
}

.grid-item h3 {
    color: #ADD8E6; /* Color más claro para el título */
    font-size: 1.5rem;
    font-weight: bold; /* Hacer el texto más negrita */
    margin-top: 0; /* Eliminar el margen superior para que esté en línea con el icono */
}
</style>
