<script setup lang="ts">
import NavigationButtons from '../components/NavigationButtons.vue';

// Define los eventos que este componente puede emitir.
// 'load-code' se emite para enviar código a la consola principal.
const emit = defineEmits(['load-code']);

// Función para añadir un fragmento de código a la consola.
// Recibe el código como una cadena de texto y lo emite al componente padre (App.vue).
const addCodeToConsole = (code: string) => {
  emit('load-code', code);
};
</script>

<template>
  <div class="view-container">
    <h1>Condicionales en JavaScript</h1>
    <p>Las estructuras condicionales permiten ejecutar diferentes bloques de código basándose en si una condición es verdadera o falsa. Son fundamentales para controlar el flujo de un programa.</p>

    <section class="code-section">
      <h2>1. Sentencia <code>if</code>, <code>else if</code> y <code>else</code></h2>
      <p>La sentencia <code>if</code> ejecuta un bloque de código si la condición especificada es verdadera. Se puede combinar con <code>else if</code> para probar múltiples condiciones y <code>else</code> para un bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera.</p>

      <h3>Sintaxis Básica:</h3>
      <div class="example">
        <pre v-pre><code>
if (condicion) {
  // Código a ejecutar si la condición es verdadera
} else if (otraCondicion) {
  // Código a ejecutar si otraCondicion es verdadera
} else {
  // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`// Ejemplo de sintaxis básica, no ejecutable directamente sin definir 'condicion' y 'otraCondicion'.`)">Probar Sintaxis</button>
      </div>

      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>
let edad = 18;

if (edad < 12) {
  console.log("Eres un niño.");
} else if (edad < 18) {
  console.log("Eres un adolescente.");
} else if (edad < 65) {
  console.log("Eres un adulto.");
} else {
  console.log("Eres un adulto mayor.");
}
// Salida: "Eres un adulto."
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`let edad = 18;\n\nif (edad < 12) {\n  console.log('Eres un niño.');\n} else if (edad < 18) {\n  console.log('Eres un adolescente.');\n} else if (edad < 65) {\n  console.log('Eres un adulto.');\n} else {\n  console.log('Eres un adulto mayor.');\n}`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>2. Sentencia <code>switch</code></h2>
      <p>La sentencia <code>switch</code> evalúa una expresión y ejecuta un bloque de código asociado con el valor de esa expresión. Es útil cuando tienes múltiples condiciones basadas en un solo valor.</p>

      <h3>Sintaxis Básica:</h3>
      <div class="example">
        <pre v-pre><code>
switch (expresion) {
  case valor1:
    // Código a ejecutar si expresion es igual a valor1
    break;
  case valor2:
    // Código a ejecutar si expresion es igual a valor2
    break;
  default:
    // Código a ejecutar si la expresion no coincide con ningún caso
}
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`// Ejemplo de sintaxis básica, no ejecutable directamente sin definir 'expresion'.`)">Probar Sintaxis</button>
      </div>

      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>
let dia = "Lunes";
let mensaje;

switch (dia) {
  case "Lunes":
    mensaje = "Hoy es el primer día de la semana.";
    break;
  case "Viernes":
    mensaje = "¡Casi fin de semana!";
    break;
  case "Sábado":
  case "Domingo":
    mensaje = "Es fin de semana.";
    break;
  default:
    mensaje = "Es un día de la semana normal.";
}
console.log(mensaje);
// Salida: "Hoy es el primer día de la semana."
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`let dia = 'Lunes';\nlet mensaje;\n\nswitch (dia) {\n  case 'Lunes':\n    mensaje = 'Hoy es el primer día de la semana.';\n    break;\n  case 'Viernes':\n    mensaje = '¡Casi fin de semana!';\n    break;\n  case 'Sábado':\n  case 'Domingo':\n    mensaje = 'Es fin de semana.';\n    break;\n  default:\n    mensaje = 'Es un día de la semana normal.';\n}\nconsole.log(mensaje);`)">Probar</button>
      </div>
      <p>Es importante usar <code>break</code> para salir del bloque <code>switch</code> una vez que se encuentra una coincidencia. Si se omite, la ejecución continuará en el siguiente <code>case</code>.</p>
    </section>

    <section class="code-section">
      <h2>3. Operador Ternario (Condicional)</h2>
      <p>El operador ternario es una forma concisa de escribir una sentencia <code>if-else</code> simple. Es el único operador de JavaScript que toma tres operandos.</p>

      <h3>Sintaxis Básica:</h3>
      <div class="example">
        <pre v-pre><code>
condicion ? expresionSiVerdadero : expresionSiFalso;
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`// Ejemplo de sintaxis básica, no ejecutable directamente sin definir 'condicion'.`)">Probar Sintaxis</button>
      </div>

      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>
let edad = 18;
let esMayorDeEdad = (edad >= 18) ? "Sí" : "No";
console.log("¿Es mayor de edad? " + esMayorDeEdad);
// Si edad es 18, salida: "¿Es mayor de edad? Sí"

let tienePermiso = true;
let acceso = tienePermiso ? "Acceso concedido" : "Acceso denegado";
console.log(acceso);
// Salida: "Acceso concedido"
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`let edad = 18;\nlet esMayorDeEdad = (edad >= 18) ? 'Sí' : 'No';\nconsole.log('¿Es mayor de edad? ' + esMayorDeEdad);\n\nlet tienePermiso = true;\nlet acceso = tienePermiso ? 'Acceso concedido' : 'Acceso denegado';\nconsole.log(acceso);`)">Probar</button>
      </div>
      <p>Es ideal para asignaciones condicionales o para devolver un valor basado en una condición simple.</p>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
.view-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 40px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

h3 {
  color: #34495e;
  margin-top: 20px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.code-section {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

pre {
  background-color: #eef;
  border: 1px solid #ccd;
  border-left: 5px solid #4CAF50;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin-top: 15px;
}

code {
  font-family: 'Consolas', 'Monaco', monospace;
  color: #007bff;
}

pre code {
  color: #333;
}

/* Estilos para el componente Console si es necesario */
.console-output {
  background-color: #222;
  color: #0f0;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  white-space: pre-wrap;
}

.data-type-item, .example, .exercise {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.data-type-item h4, .example h4, .exercise h4 {
  color: #007bff;
  margin-bottom: 10px;
}

.data-type-item pre, .example pre, .exercise pre {
  background-color: #f4f4f4;
  border-left: 3px solid #007bff;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

.data-type-item button, .example button, .exercise button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.data-type-item button:hover, .example button:hover, .exercise button:hover {
  background-color: #0056b3;
}
</style>
