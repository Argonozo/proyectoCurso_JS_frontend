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
        <button class="load-code" @click.stop="addCodeToConsole(`// Ejemplo de sintaxis básica, no ejecutable directamente sin definir 'condicion' y 'otraCondicion'.`)">Probar Sintaxis</button>
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
        <button class="load-code" @click.stop="addCodeToConsole(`let edad = 18;\n\nif (edad < 12) {\n  console.log('Eres un niño.');\n} else if (edad < 18) {\n  console.log('Eres un adolescente.');\n} else if (edad < 65) {\n  console.log('Eres un adulto.');\n} else {\n  console.log('Eres un adulto mayor.');\n}`)">Probar</button>
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
        <button class="load-code" @click.stop="addCodeToConsole(`// Ejemplo de sintaxis básica, no ejecutable directamente sin definir 'expresion'.`)">Probar Sintaxis</button>
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
        <button class="load-code" @click.stop="addCodeToConsole(`let dia = 'Lunes';\nlet mensaje;\n\nswitch (dia) {\n  case 'Lunes':\n    mensaje = 'Hoy es el primer día de la semana.';\n    break;\n  case 'Viernes':\n    mensaje = '¡Casi fin de semana!';\n    break;\n  case 'Sábado':\n  case 'Domingo':\n    mensaje = 'Es fin de semana.';\n    break;\n  default:\n    mensaje = 'Es un día de la semana normal.';\n}\nconsole.log(mensaje);`)">Probar</button>
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
        <button class="load-code" @click.stop="addCodeToConsole(`// Ejemplo de sintaxis básica, no ejecutable directamente sin definir 'condicion'.`)">Probar Sintaxis</button>
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
        <button class="load-code" @click.stop="addCodeToConsole(`let edad = 18;\nlet esMayorDeEdad = (edad >= 18) ? 'Sí' : 'No';\nconsole.log('¿Es mayor de edad? ' + esMayorDeEdad);\n\nlet tienePermiso = true;\nlet acceso = tienePermiso ? 'Acceso concedido' : 'Acceso denegado';\nconsole.log(acceso);`)">Probar</button>
      </div>
      <p>Es ideal para asignaciones condicionales o para devolver un valor basado en una condición simple.</p>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
</style>
