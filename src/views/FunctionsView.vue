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
    <h1>Funciones</h1>
    <p>Las funciones son bloques de código reutilizables que realizan una tarea específica. Son fundamentales para organizar y estructurar el código en JavaScript.</p>

    <section class="code-section">
      <h2>Conceptos Básicos</h2>
      <h3>Declaración de Función (Function Declaration)</h3>
      <p>Es la forma más común de definir una función. Son "hoisted", lo que significa que pueden ser llamadas antes de su declaración en el código.</p>
      <div class="example">
        <pre v-pre><code>
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log(saludar("Mundo")); // Salida: Hola, Mundo!
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function saludar(nombre) {\n  return 'Hola, ' + nombre + '!';\n}\nconsole.log(saludar('Mundo'));`)">Probar</button>
      </div>

      <h3>Expresión de Función (Function Expression)</h3>
      <p>Una función definida como parte de una expresión. No son "hoisted", por lo que deben ser definidas antes de ser llamadas.</p>
      <div class="example">
        <pre v-pre><code>
const despedir = function(nombre) {
  return "Adiós, " + nombre + ".";
};
console.log(despedir("Juan")); // Salida: Adiós, Juan.
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`const despedir = function(nombre) {\n  return 'Adiós, ' + nombre + '.';\n};\nconsole.log(despedir('Juan'));`)">Probar</button>
      </div>

      <h3>Funciones Anónimas</h3>
      <p>Funciones sin nombre, a menudo usadas como expresiones de función o callbacks.</p>
      <div class="example">
        <pre v-pre><code>
document.addEventListener('click', function() {
  console.log('¡Clic detectado!');
});
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`document.addEventListener('click', function() {\n  console.log('¡Clic detectado!');\n});`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Tipos de Funciones</h2>
      <h3>Funciones Flecha (Arrow Functions - ES6)</h3>
      <p>Una sintaxis más concisa para escribir expresiones de función. No tienen su propio `this`, `arguments`, `super` o `new.target`.</p>
      <div class="example">
        <pre v-pre><code>
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // Salida: 8

const duplicar = numero => numero * 2; // Paréntesis opcionales para un solo parámetro
console.log(duplicar(7)); // Salida: 14

const saludarCompleto = () => { // Llaves necesarias para múltiples sentencias
  const mensaje = "Hola desde una función flecha.";
  return mensaje;
};
console.log(saludarCompleto());
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`const sumar = (a, b) => a + b;\nconsole.log(sumar(5, 3));\n\nconst duplicar = numero => numero * 2;\nconsole.log(duplicar(7));\n\nconst saludarCompleto = () => {\n  const mensaje = 'Hola desde una función flecha.';\n  return mensaje;\n};\nconsole.log(saludarCompleto());`)">Probar</button>
      </div>

      <h3>Funciones de Devolución de Llamada (Callbacks)</h3>
      <p>Una función que se pasa como argumento a otra función, para ser ejecutada más tarde.</p>
      <div class="example">
        <pre v-pre><code>
function procesar(callback) {
  console.log("Procesando...");
  callback(); // Ejecuta la función de devolución de llamada
}

function miCallback() {
  console.log("¡Callback ejecutado!");
}

procesar(miCallback);
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function procesar(callback) {\n  console.log('Procesando...');\n  callback();\n}\n\nfunction miCallback() {\n  console.log('¡Callback ejecutado!');\n}\n\nprocesar(miCallback);`)">Probar</button>
      </div>

      <h3>Funciones Constructoras</h3>
      <p>Funciones usadas con la palabra clave `new` para crear objetos. (Ver <router-link to="/oop">Programación Orientada a Objetos</router-link> para más detalles).</p>
      <div class="example">
        <pre v-pre><code>
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  };
}
const persona1 = new Persona("Ana", 30);
console.log(persona1.saludar()); // Salida: Hola, soy Ana y tengo 30 años.
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function Persona(nombre, edad) {\n  this.nombre = nombre;\n  this.edad = edad;\n  this.saludar = function() {\n    return \`Hola, soy \${this.nombre} y tengo \${this.edad} años.\`;\n  };\n}\nconst persona1 = new Persona('Ana', 30);\nconsole.log(persona1.saludar());`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Parámetros y Argumentos</h2>
      <h3>Parámetros por Defecto (ES6)</h3>
      <p>Permiten inicializar parámetros con un valor por defecto si no se proporciona un argumento o si es `undefined`.</p>
      <div class="example">
        <pre v-pre><code>
function saludarConDefecto(nombre = "Invitado") {
  return `Hola, ${nombre}!`;
}
console.log(saludarConDefecto()); // Salida: Hola, Invitado!
console.log(saludarConDefecto("Pedro")); // Salida: Hola, Pedro!
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function saludarConDefecto(nombre = 'Invitado') {\n  return \`Hola, \${nombre}!\`;\n}\nconsole.log(saludarConDefecto());\nconsole.log(saludarConDefecto('Pedro'));`)">Probar</button>
      </div>

      <h3>Parámetros Rest (`...args` - ES6)</h3>
      <p>Permiten representar un número indefinido de argumentos como un array.</p>
      <div class="example">
        <pre v-pre><code>
function sumarTodos(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumarTodos(1, 2, 3, 4)); // Salida: 10
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function sumarTodos(...numeros) {\n  return numeros.reduce((total, num) => total + num, 0);\n}\nconsole.log(sumarTodos(1, 2, 3, 4));`)">Probar</button>
      </div>

      <h3>El Objeto `arguments`</h3>
      <p>Un objeto similar a un array que contiene los argumentos pasados a una función. Es menos moderno que los parámetros rest.</p>
      <div class="example">
        <pre v-pre><code>
function mostrarArgumentos() {
  let argsArray = Array.from(arguments); // Convertir a array real
  console.log(argsArray);
}
mostrarArgumentos(10, "hola", true); // Salida: [10, "hola", true]
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function mostrarArgumentos() {\n  let argsArray = Array.from(arguments);\n  console.log(argsArray);\n}\nmostrarArgumentos(10, 'hola', true);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Alcance (Scope) y Cierres (Closures)</h2>
      <h3>Alcance Global</h3>
      <p>Las variables declaradas globalmente son accesibles desde cualquier parte del código.</p>
      <div class="example">
        <pre v-pre><code>
let globalVar = "Soy global";
function mostrarGlobal() {
  console.log(globalVar);
}
mostrarGlobal(); // Salida: Soy global
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`let globalVar = 'Soy global';\nfunction mostrarGlobal() {\n  console.log(globalVar);\n}\nmostrarGlobal();`)">Probar</button>
      </div>

      <h3>Alcance de Función (Local)</h3>
      <p>Las variables declaradas dentro de una función solo son accesibles dentro de esa función.</p>
      <div class="example">
        <pre v-pre><code>
function mostrarLocal() {
  let localVar = "Soy local";
  console.log(localVar);
}
mostrarLocal(); // Salida: Soy local
// console.log(localVar); // Error: localVar is not defined
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function mostrarLocal() {\n  let localVar = 'Soy local';\n  console.log(localVar);\n}\nmostrarLocal();`)">Probar</button>
      </div>

      <h3>Alcance de Bloque (ES6 - `let`, `const`)</h3>
      <p>Las variables declaradas con `let` o `const` están limitadas al bloque de código donde se definen.</p>
      <div class="example">
        <pre v-pre><code>
if (true) {
  let blockVar = "Soy de bloque";
  console.log(blockVar); // Salida: Soy de bloque
}
// console.log(blockVar); // Error: blockVar is not defined
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`if (true) {\n  let blockVar = 'Soy de bloque';\n  console.log(blockVar);\n}`)">Probar</button>
      </div>

      <h3>Cierres (Closures)</h3>
      <p>Un cierre es la combinación de una función y el entorno léxico en el que fue declarada. Permite a una función interna acceder a las variables de su función externa, incluso después de que la función externa haya terminado de ejecutarse.</p>
      <div class="example">
        <pre v-pre><code>
function crearContador() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
}

const miContador = crearContador();
console.log(miContador()); // Salida: 1
console.log(miContador()); // Salida: 2
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function crearContador() {\n  let contador = 0;\n  return function() {\n    contador++;\n    return contador;\n  };\n}\n\nconst miContador = crearContador();\nconsole.log(miContador());\nconsole.log(miContador());`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>La Palabra Clave `this`</h2>
      <p>El valor de `this` depende de cómo se llama la función.</p>
      <div class="example">
        <pre v-pre><code>
// En el ámbito global (navegador), `this` se refiere al objeto `window`.
// En modo estricto o en módulos, `this` es `undefined`.
console.log(this === window); // true (en navegador, fuera de modo estricto)

// En un método de objeto, `this` se refiere al objeto que posee el método.
const miObjeto = {
  nombre: "Objeto",
  saludar: function() {
    console.log(`Hola desde ${this.nombre}`);
  }
};
miObjeto.saludar(); // Salida: Hola desde Objeto

// En una función constructora, `this` se refiere a la nueva instancia del objeto.
function Coche(marca) {
  this.marca = marca;
}
const miCoche = new Coche("Toyota");
console.log(miCoche.marca); // Salida: Toyota

// En funciones flecha, `this` se determina léxicamente (hereda el `this` del ámbito padre).
const otroObjeto = {
  nombre: "Otro Objeto",
  saludarFlecha: () => {
    console.log(`Hola desde ${this.nombre}`); // `this` aquí se refiere al `this` global (window)
  }
};
otroObjeto.saludarFlecha(); // Salida: Hola desde undefined (o el nombre de window si existe)

// Métodos para manipular `this`: call(), apply(), bind()
function mostrarNombre(ciudad, pais) {
  console.log(`${this.nombre} vive en ${ciudad}, ${pais}.`);
}

const persona = { nombre: "Carlos" };

mostrarNombre.call(persona, "Madrid", "España"); // Salida: Carlos vive en Madrid, España.
mostrarNombre.apply(persona, ["Barcelona", "España"]); // Salida: Carlos vive en Barcelona, España.

const mostrarNombreBind = mostrarNombre.bind(persona, "Sevilla");
mostrarNombreBind("España"); // Salida: Carlos vive en Sevilla, España.
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`console.log(this === window);\n\nconst miObjeto = {\n  nombre: 'Objeto',\n  saludar: function() {\n    console.log(\`Hola desde \${this.nombre}\`);\n  }\n};\nmiObjeto.saludar();\n\nfunction Coche(marca) {\n  this.marca = marca;\n}\nconst miCoche = new Coche('Toyota');\nconsole.log(miCoche.marca);\n\nconst otroObjeto = {\n  nombre: 'Otro Objeto',\n  saludarFlecha: () => {\n    console.log(\`Hola desde \${this.nombre}\`);\n  }\n};\notroObjeto.saludarFlecha();\n\nfunction mostrarNombre(ciudad, pais) {\n  console.log(\`\${this.nombre} vive en \${ciudad}, \${pais}.\`);\n}\n\nconst persona = { nombre: 'Carlos' };\n\nmostrarNombre.call(persona, 'Madrid', 'España');\nmostrarNombre.apply(persona, ['Barcelona', 'España']);\n\nconst mostrarNombreBind = mostrarNombre.bind(persona, 'Sevilla');\nmostrarNombreBind('España');`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Funciones de Orden Superior (Higher-Order Functions)</h2>
      <p>Funciones que operan sobre otras funciones, ya sea tomándolas como argumentos o devolviéndolas.</p>
      <div class="example">
        <pre v-pre><code>
function operar(operacion, a, b) {
  return operacion(a, b);
}

function multiplicar(x, y) {
  return x * y;
}

console.log(operar(multiplicar, 4, 5)); // Salida: 20
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function operar(operacion, a, b) {\n  return operacion(a, b);\n}\n\nfunction multiplicar(x, y) {\n  return x * y;\n}\n\nconsole.log(operar(multiplicar, 4, 5));`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Funciones Autoejecutables (IIFE - Immediately Invoked Function Expressions)</h2>
      <p>Se ejecutan tan pronto como se definen. Útiles para crear un ámbito privado y evitar la contaminación del ámbito global.</p>
      <div class="example">
        <pre v-pre><code>
(function() {
  const mensajePrivado = "Este mensaje es privado.";
  console.log(mensajePrivado); // Salida: Este mensaje es privado.
})();
// console.log(mensajePrivado); // Error: mensajePrivado is not defined
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`(function() {\n  const mensajePrivado = 'Este mensaje es privado.';\n  console.log(mensajePrivado);\n})();`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Recursividad</h2>
      <p>Una función que se llama a sí misma para resolver un problema, dividiéndolo en subproblemas más pequeños.</p>
      <div class="example">
        <pre v-pre><code>
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Caso base
  } else {
    return n * factorial(n - 1); // Caso recursivo
  }
}
console.log(factorial(5)); // Salida: 120 (5 * 4 * 3 * 2 * 1)
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function factorial(n) {\n  if (n === 0 || n === 1) {\n    return 1;\n  } else {\n    return n * factorial(n - 1);\n  }\n}\nconsole.log(factorial(5));`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Generadores (ES6)</h2>
      <p>Funciones que pueden pausar su ejecución y reanudarla más tarde, produciendo una secuencia de valores a través de la palabra clave `yield`.</p>
      <div class="example">
        <pre v-pre><code>
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // Salida: 1
console.log(gen.next().value); // Salida: 2
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`function* idGenerator() {\n  let id = 1;\n  while (true) {\n    yield id++;\n  }\n}\n\nconst gen = idGenerator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>Funciones Asíncronas (`async`/`await` - ES2017)</h2>
      <p>Simplifican el trabajo con Promesas, permitiendo escribir código asíncrono que parece síncrono. (Ver <router-link to="/async">Programación Asíncrona</router-link> para más detalles).</p>
      <div class="example">
        <pre v-pre><code>
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}
// obtenerDatos();
        </code></pre>
        <button class="load-code" @click="addCodeToConsole(`async function obtenerDatos() {\n  try {\n    const respuesta = await fetch('https://api.example.com/data');\n    const datos = await respuesta.json();\n    console.log(datos);\n  } catch (error) {\n    console.error('Error al obtener datos:', error);\n  }\n}\nobtenerDatos();`)">Probar</button>
      </div>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
</style>
