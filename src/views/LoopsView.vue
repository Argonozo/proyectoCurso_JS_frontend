<script setup lang="ts">
import NavigationButtons from '../components/NavigationButtons.vue';

// Lógica específica para la vista de Bucles
const emit = defineEmits(['load-code']);
const addCodeToConsole = (code: string) => {
  emit('load-code', code);
};
</script>

<template>
  <div class="view-container">
    <div class="explication-section">
      <h1>Bucles en JavaScript</h1>
      <p>Los bucles son herramientas fundamentales en la programación que nos permiten ejecutar un bloque de código repetidamente. Esto es útil para automatizar tareas, procesar colecciones de datos y mucho más.</p>
    </div>

    <section class="code-section">
      <h2>1. Bucle <code>for</code></h2>
      <p>El bucle <code>for</code> es uno de los bucles más comunes y se utiliza cuando se conoce el número exacto de iteraciones que se desean realizar.</p>
      <h3>Sintaxis:</h3>
      <div class="example">
        <pre><code>for (inicialización; condición; incremento/decremento) {
  // Código a ejecutar en cada iteración
}</code></pre>
      </div>
      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>for (let i = 0; i < 5; i++) {
  console.log("Bucle for - Iteración: " + i);
}</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`for (let i = 0; i < 5; i++) {\n  console.log('Bucle for - Iteración: ' + i);\n}`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>2. Bucle <code>while</code></h2>
      <p>El bucle <code>while</code> se utiliza cuando no se conoce el número exacto de iteraciones, pero se sabe que el bucle debe continuar mientras una condición específica sea verdadera.</p>
      <h3>Sintaxis:</h3>
      <div class="example">
        <pre><code>while (condición) {
  // Código a ejecutar mientras la condición sea verdadera
}</code></pre>
      </div>
      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>let i = 0;
while (i < 5) {
  console.log("Bucle while - Iteración: " + i);
  i++;
}</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let i = 0;\nwhile (i < 5) {\n  console.log('Bucle while - Iteración: ' + i);\n  i++;\n}`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>3. Bucle <code>do...while</code></h2>
      <p>El bucle <code>do...while</code> es similar al bucle <code>while</code>, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la primera ejecución.</p>
      <h3>Sintaxis:</h3>
      <div class="example">
        <pre><code>do {
  // Código a ejecutar al menos una vez
} while (condición);</code></pre>
      </div>
      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>let i = 0;
do {
  console.log("Bucle do...while - Iteración: " + i);
  i++;
} while (i < 0); // La condición es falsa, pero se ejecuta una vez</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let i = 0;\ndo {\n  console.log('Bucle do...while - Iteración: ' + i);\n  i++;\n} while (i < 0);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>4. Bucle <code>for...in</code></h2>
      <p>El bucle <code>for...in</code> se utiliza para iterar sobre las propiedades enumerables de un objeto.</p>
      <h3>Sintaxis:</h3>
      <div class="example">
        <pre><code>for (variable in objeto) {
  // Código a ejecutar para cada propiedad
}</code></pre>
      </div>
      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };\nfor (let clave in persona) {\n  console.log(clave + ': ' + persona[clave]);\n}`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>5. Bucle <code>for...of</code></h2>
      <p>El bucle <code>for...of</code> se utiliza para iterar sobre los valores de objetos iterables como Arrays, Strings, Mapas, Sets, etc.</p>
      <h3>Sintaxis:</h3>
      <div class="example">
        <pre><code>for (variable of iterable) {
  // Código a ejecutar para cada valor
}</code></pre>
      </div>
      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>const numeros = [10, 20, 30];
for (let num of numeros) {
  console.log("Número: " + num);
}</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const numeros = [10, 20, 30];\nfor (let num of numeros) {\n  console.log('Número: ' + num);\n}`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>6. Método <code>forEach()</code> para Arrays</h2>
      <p>El método <code>forEach()</code> es un método de array que ejecuta una función proporcionada una vez por cada elemento del array.</p>
      <h3>Sintaxis:</h3>
      <div class="example">
        <pre><code>array.forEach(function(elemento, indice, array) {
  // Código a ejecutar para cada elemento
});</code></pre>
      </div>
      <h3>Ejemplo:</h3>
      <div class="example">
        <pre v-pre><code>const frutas = ["Manzana", "Pera", "Uva"];
frutas.forEach(function(fruta, index) {
  console.log("Fruta " + (index + 1) + ": " + fruta);
});</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const frutas = ['Manzana', 'Pera', 'Uva'];\nfrutas.forEach(function(fruta, index) {\n  console.log('Fruta ' + (index + 1) + ': ' + fruta);\n});`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>7. Sentencias <code>break</code> y <code>continue</code></h2>
      <p>Estas sentencias permiten controlar el flujo de ejecución dentro de un bucle.</p>
      <h3><code>break</code>:</h3>
      <div class="example">
        <p>La sentencia <code>break</code> se utiliza para "romper" o terminar un bucle inmediatamente, saliendo de él.</p>
        <h3>Ejemplo de <code>break</code>:</h3>
        <pre v-pre><code>for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sale del bucle cuando i es 5
  }
  console.log("Break - Iteración: " + i);
}</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`for (let i = 0; i < 10; i++) {\n  if (i === 5) {\n    break; // Sale del bucle cuando i es 5\n  }\n  console.log('Break - Iteración: ' + i);\n}`)">Probar</button>
      </div>
      <h3><code>continue</code>:</h3>
      <div class="example">
        <p>La sentencia <code>continue</code> se utiliza para saltar la iteración actual de un bucle y pasar a la siguiente iteración.</p>
        <h3>Ejemplo de <code>continue</code>:</h3>
        <pre v-pre><code>for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta la iteración cuando i es 2
  }
  console.log("Continue - Iteración: " + i);
}</code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`for (let i = 0; i < 5; i++) {\n  if (i === 2) {\n    continue; // Salta la iteración cuando i es 2\n  }\n  console.log('Continue - Iteración: ' + i);\n}`)">Probar</button>
      </div>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
</style>
