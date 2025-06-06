<script setup lang="ts">
import { useRouter } from 'vue-router';
import { nextTick } from 'vue'; // Import nextTick

const router = useRouter();

const goToVariables = () => {
  router.push({ name: 'variables' }).then(() => {
    nextTick(() => { // Use nextTick instead of setTimeout
      const element = document.getElementById('variables-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback or log if element not found, though nextTick should help
        console.warn('#variables-section not found after navigation.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
};
</script>

<template>
  <section id="fundamentos-js">
    <h2>
      <span class="js-icon">🚀</span> Conceptos Clave para Empezar
    </h2>
    <p>Antes de comenzar con tipos de datos y variables, asegúrate de comprender estos conceptos básicos:</p>
      <div class="responsive-grid-container">
        <div class="card-grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">🔗</span>
            <h3>Incluir tu Script</h3>
          </div>
          <p>Para que tu navegador ejecute código JavaScript, debes enlazar tu archivo .js a tu HTML. Lo más común es hacerlo justo antes de cerrar la etiqueta &lt;body&gt; para asegurar que el DOM esté listo.<br><code class="inline-code">&lt;script src="tu-script.js"&gt;&lt;/script&gt;</code></p>
        </div>
        <div class="card-grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">💻</span>
            <h3>console.log()</h3>
          </div>
          <p>Es tu mejor amigo para depurar. Permite mostrar mensajes, variables o resultados en la consola del navegador.<br><code class="inline-code">console.log("Hola, JavaScript!");</code><br><code class="inline-code">let nombre = "Mundo";</code><br><code class="inline-code">console.log("Hola, " + nombre + "!");</code></p>
        </div>
        <div class="card-grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">📝</span>
            <h3>Estructura de un Comando</h3>
          </div>
          <p>Cada "orden" o "instrucción" en JavaScript se llama comando o sentencia. Terminan con punto y coma (opcional en muchos casos, pero buena práctica).<br><code class="inline-code">let edad = 30;</code><br><code class="inline-code">console.log(edad);</code></p>
        </div>
        <div class="card-grid-item">
          <div class="icon-title-wrapper">
            <span class="icon">💡</span>
            <h3>Comentarios</h3>
          </div>
          <p>Usa comentarios para explicar tu código. El navegador los ignora.<br><code class="inline-code">// Esto es un comentario de una línea</code><br><code class="inline-code">/* Esto es un<br>comentario<br>multilínea */</code></p>
        </div>
    </div>
    <div class="button-container">
      <button @click="goToVariables" class="start-course-button">
        Comenzar con Tipos de Datos y Variables
      </button>
    </div>
  </section>
</template>

<style scoped>
#fundamentos-js {
    padding: 2rem;
    background-color: rgba(8, 19, 27, 0.7);
    backdrop-filter: blur(var(--blur-amount));
    border-radius: var(--border-radius);
    margin: 2rem 0;
    color: white;
}

#fundamentos-js h2 {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
}

.fundamentos-content {
    max-width: 800px;
    margin: 0 auto;
}

.fundamentos-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
}

.fundamentos-list li {
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    border: var(--glass-border);
}

.fundamentos-list li strong {
    color: #007acc;
    display: block;
    margin-bottom: 0.5rem;
}

.fundamentos-list code {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
}

.fundamentos-list kbd {
    background-color: #333;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
    border: 1px solid #666;
}

/* Styles for h3 within card-grid-item, specific to this component */
.card-grid-item h3 {
    color: #ADD8E6; /* Color más claro para el título */
    font-size: 1.5rem;
    font-weight: bold; /* Hacer el texto más negrita */
    margin-top: 0; /* Eliminar el margen superior para que esté en línea con el icono */
}

/* Paragraphs within card-grid-item in this section */
/* By default, .card-grid-item aligns items (like <p>) to center due to align-items: center. */
/* If text inside <p> needs to be left-aligned, add text-align: left; */
.card-grid-item p {
    /* Example: text-align: left; if needed */
    /* For now, relying on default block behavior which should be left-aligned unless parent centers text */
}

.conclusion {
    text-align: center;
    font-weight: bold;
    margin-top: 2rem;
    font-size: 1.1em;
    color: #007acc;
}

@media (max-width: 768px) {
    #fundamentos-js {
        padding: 1rem;
    }

    .fundamentos-list li {
        padding: 0.8rem;
    }
}

.button-container {
  text-align: center;
  margin-top: 2rem;
}

.start-course-button {
  background-color: yellow;
  color: black;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.start-course-button:hover {
  background-color: #f0f0f0;
}
</style>
