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
  <div class="view-container" id="variables-section">
    <h1>Variables en JavaScript</h1>
    <p>
      En JavaScript, las variables son contenedores que se utilizan para almacenar datos. Piensa en ellas como "cajas" con un nombre, donde puedes guardar diferentes tipos de información. Comprender cómo declarar y usar variables es fundamental para escribir cualquier programa en JavaScript.
    </p>
    <p>
      Existen dos palabras clave principales para declarar variables: <code>let</code> y <code>const</code>.
    </p>

    <section class="code-section">
      <h2>📘 Unidad 1 Tipos de datos y variables</h2>
      <ul>
        <li><code>let</code>: Se usa para declarar variables cuyo valor puede ser reasignado más tarde. Son ideales para valores que cambiarán durante la ejecución del programa.</li>
        <li><code>const</code>: Se usa para declarar variables cuyo valor no puede ser reasignado después de su inicialización. Son perfectas para valores que deben permanecer constantes, como configuraciones o constantes matemáticas.</li>
      </ul>

      <h3>Tipos de Datos en JavaScript</h3>
      <p>JavaScript es un lenguaje de tipado dinámico, lo que significa que no necesitas especificar el tipo de dato de una variable cuando la declaras. El tipo se determina automáticamente en tiempo de ejecución.</p>
      <div class="data-types-section">
        <div class="data-type-item">
          <h4>String (Cadena de Texto)</h4>
          <p>Representa secuencias de caracteres. Se usan comillas simples o dobles.</p>
          <pre v-pre><code>let saludo = "Hola Mundo";</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let saludo = 'Hola Mundo';\nconsole.log(saludo);`)">Probar</button>
        </div>
        <div class="data-type-item">
          <h4>Number (Número)</h4>
          <p>Representa números enteros y de punto flotante.</p>
          <pre v-pre><code>let edad = 30;
let precio = 99.99;</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let edad = 30;\nlet precio = 99.99;\nconsole.log('Edad:', edad, 'Precio:', precio);`)">Probar</button>
        </div>
        <div class="data-type-item">
          <h4>Boolean (Booleano)</h4>
          <p>Representa un valor lógico: <code>true</code> o <code>false</code>.</p>
          <pre v-pre><code>let esActivo = true;
let esMayor = false;</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let esActivo = true;\nlet esMayor = false;\nconsole.log('Activo:', esActivo, 'Mayor:', esMayor);`)">Probar</button>
        </div>
        <div class="data-type-item">
          <h4>Array (Arreglo)</h4>
          <p>Una lista ordenada de valores.</p>
          <pre v-pre><code>let frutas = ["manzana", "banana"];</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let frutas = ['manzana', 'banana'];\nconsole.log(frutas);`)">Probar</button>
        </div>
        <div class="data-type-item">
          <h4>Object (Objeto)</h4>
          <p>Una colección de propiedades, donde cada propiedad tiene un nombre y un valor.</p>
          <pre v-pre><code>let persona = { nombre: "Ana", edad: 25 };</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let persona = { nombre: 'Ana', edad: 25 };\nconsole.log(persona);`)">Probar</button>
        </div>
        <div class="data-type-item">
          <h4>undefined</h4>
          <p>Indica que una variable ha sido declarada pero aún no se le ha asignado un valor.</p>
          <pre v-pre><code>let sinValor;</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let sinValor;\nconsole.log(sinValor);`)">Probar</button>
        </div>
        <div class="data-type-item">
          <h4>null</h4>
          <p>Representa la ausencia intencional de cualquier valor de objeto. Es un valor asignado.</p>
          <pre v-pre><code>let vacio = null;</code></pre>
          <button class="load-code" @click="addCodeToConsole(`let vacio = null;\nconsole.log(vacio);`)">Probar</button>
        </div>
      </div>
    </section>

    <section class="code-section">
      <h3>Diferencia entre <code>let</code> y <code>const</code></h3>
      <p>Es crucial entender cuándo usar <code>let</code> y cuándo usar <code>const</code> para evitar errores y escribir código más predecible.</p>

      <div class="example">
        <h4>Uso de <code>let</code> (reasignable)</h4>
        <pre v-pre><code>
let contador = 0;
console.log("Contador inicial:", contador); // Salida: Contador inicial: 0

contador = 10; // Se puede reasignar
console.log("Contador reasignado:", contador); // Salida: Contador reasignado: 10
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`let contador = 0;\nconsole.log('Contador inicial:', contador);\n\ncontador = 10;\nconsole.log('Contador reasignado:', contador);`)">Probar let</button>
      </div>

      <div class="example">
        <h4>Uso de <code>const</code> (no reasignable)</h4>
        <pre v-pre><code>
const nombre = "Alice";
console.log("Nombre:", nombre); // Salida: Nombre: Alice

// Intentar reasignar una constante causará un error:
// nombre = "Bob"; // TypeError: Assignment to constant variable.
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`const nombre = 'Alice';\nconsole.log('Nombre:', nombre);\n\n// Intentar reasignar una constante causará un error:\n// nombre = 'Bob'; // TypeError: Assignment to constant variable.`)">Probar const</button>
      </div>

      <div class="example">
        <h3>Ejemplo: declara ciudad y población</h3>
        <pre v-pre><code>
let ciudad    = "Santiago";
let poblacion = 7000000;

console.log("Ciudad:", ciudad);
console.log("Población:", poblacion);
        </code></pre>
        <!-- Botón para cargar el código de ejemplo en la consola interactiva. -->
        <!-- Al hacer clic, llama a 'addCodeToConsole' con el código específico de este ejemplo. -->
        <button class="load-code" @click="addCodeToConsole(`let ciudad    = 'Santiago';
let poblacion = 7000000;

console.log('Ciudad:', ciudad);
console.log('Población:', poblacion);`)">Agregar a la Consola</button>
      </div>

      <div class="exercise">
        <h4>Ejercicio 1: <code>undefined</code> vs <code>null</code></h4>
        <p>
          Declara una variable sin asignarle un valor (<code>let sinValor;</code>) y otra asignándole <code>null</code> (<code>let vacio = null;</code>).
          Luego, muéstralas con <code>console.log</code> y analiza qué sucede en la consola.
        </p>
        <pre v-pre><code>
let sinValor;
let vacio = null;

console.log("sinValor:", sinValor);
console.log("vacio:", vacio);
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`let sinValor;\nlet vacio = null;\n\nconsole.log('sinValor:', sinValor);\nconsole.log('vacio:', vacio);`)">Probar Ejercicio 1</button>
      </div>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
.view-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
  scroll-margin-top: 70px; /* Ajusta esto si tu barra de navegación tiene una altura diferente */
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
/* Los estilos de las secciones de contenido ya están en src/assets/styles.css,
   pero si hay estilos específicos que solo aplican aquí, se pueden añadir. */
</style>
