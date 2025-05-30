<script setup lang="ts">
import NavigationButtons from '../components/NavigationButtons.vue';

// Define los eventos que este componente puede emitir.
// 'load-code' se emite para enviar código a la consola principal.
const emit = defineEmits(['load-code']);

// Función para cargar el código de un ejemplo en la consola.
// Se activa al hacer clic en los botones "Agregar a la Consola" dentro de los ejemplos.
const loadCodeInConsole = (code: string) => {
  emit('load-code', code);
};
</script>

<template>
  <div class="view-container">
    <h1>Operadores en JavaScript</h1>
    <p>
      Los <strong>operadores</strong> en JavaScript son símbolos o palabras clave que nos permiten realizar diversas operaciones sobre uno o más valores (llamados operandos). Son esenciales para manipular datos, realizar cálculos, comparar expresiones y controlar el flujo de un programa.
    </p>
    <p>
      Comprender los diferentes tipos de operadores y cómo funcionan es fundamental para escribir lógica de programación efectiva y eficiente. A continuación, exploraremos las categorías principales de operadores en JavaScript.
    </p>

    <section class="code-section">
      <h2>🧮 1. Operadores Aritméticos</h2>
      <p>
        Se utilizan para hacer operaciones matemáticas. Son los mismos que usamos en
        la vida real:
      </p>
      <p>
        Estos operadores realizan operaciones matemáticas básicas.
      </p>
      <div class="code-example">
        <h4>Suma (<code>+</code>)</h4>
        <p>Utilizado para sumar números o concatenar cadenas de texto.</p>
        <pre v-pre><code>let resultado = 5 + 3; // 8
let texto = "Hola" + " " + "Mundo"; // "Hola Mundo"</code></pre>
        <button class="load-code" @click.stop="loadCodeInConsole(`let resultado = 5 + 3;\nconsole.log('Suma de números:', resultado);\n\nlet texto = 'Hola' + ' ' + 'Mundo';\nconsole.log('Concatenación de texto:', texto);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Resta (<code>-</code>)</h4>
        <p>Utilizado para restar números.</p>
        <pre v-pre><code>let resultado = 10 - 4; // 6</code></pre>
        <button class="load-code" @click.stop="loadCodeInConsole(`let resultado = 10 - 4;\nconsole.log('Resta:', resultado);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Multiplicación (<code>*</code>)</h4>
        <p>Utilizado para multiplicar números.</p>
        <pre v-pre><code>let resultado = 6 * 7; // 42</code></pre>
        <button class="load-code" @click.stop="loadCodeInConsole(`let resultado = 6 * 7;\nconsole.log('Multiplicación:', resultado);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>División (<code>/</code>)</h4>
        <p>Utilizado para dividir números.</p>
        <pre v-pre><code>let resultado = 20 / 4; // 5</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let resultado = 20 / 4;\nconsole.log('División:', resultado);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Módulo (<code>%</code>)</h4>
        <p>Devuelve el resto de una división.</p>
        <pre v-pre><code>let resultado = 10 % 3; // 1 (10 dividido por 3 es 3 con un resto de 1)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let resultado = 10 % 3;\nconsole.log('Módulo:', resultado);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Incremento (<code>++</code>) y Decremento (<code>--</code>)</h4>
        <p>Aumentan o disminuyen el valor de una variable en 1.</p>
        <pre v-pre><code>let i = 5;
i++; // i ahora es 6
let j = 10;
j--; // j ahora es 9</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let i = 5;\ni++;\nconsole.log('Incremento:', i);\n\nlet j = 10;\nj--;\nconsole.log('Decremento:', j);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>📝 2. Operadores de Asignación</h2>
      <p>
        Los operadores de asignación se utilizan para asignar valores a variables. El operador de asignación básico es <code>=</code>. Además, existen operadores de asignación compuestos que realizan una operación aritmética y una asignación en un solo paso.
      </p>
      <div class="code-example">
        <h4>Asignación Simple (<code>=</code>)</h4>
        <p>Asigna el valor del operando derecho al operando izquierdo.</p>
        <pre v-pre><code>let miNumero = 10; // Asigna 10 a miNumero</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let miNumero = 10;\nconsole.log('miNumero:', miNumero);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Asignación de Suma (<code>+=</code>)</h4>
        <p>Suma un valor a la variable y asigna el resultado a la misma variable.</p>
        <pre v-pre><code>let x = 5;
x += 3; // Equivalente a x = x + 3; x ahora es 8</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let x = 5;\nx += 3;\nconsole.log('x (+=):', x);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Asignación de Resta (<code>-=</code>)</h4>
        <p>Resta un valor a la variable y asigna el resultado.</p>
        <pre v-pre><code>let y = 10;
y -= 4; // Equivalente a y = y - 4; y ahora es 6</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let y = 10;\ny -= 4;\nconsole.log('y (-=):', y);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Asignación de Multiplicación (<code>*=</code>)</h4>
        <p>Multiplica la variable por un valor y asigna el resultado.</p>
        <pre v-pre><code>let z = 3;
z *= 5; // Equivalente a z = z * 5; z ahora es 15</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let z = 3;\nz *= 5;\nconsole.log('z (*=):', z);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Asignación de División (<code>/=</code>)</h4>
        <p>Divide la variable por un valor y asigna el resultado.</p>
        <pre v-pre><code>let w = 20;
w /= 4; // Equivalente a w = w / 4; w ahora es 5</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let w = 20;\nw /= 4;\nconsole.log('w (/=):', w);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Asignación de Módulo (<code>%=</code>)</h4>
        <p>Calcula el módulo y asigna el resultado a la variable.</p>
        <pre v-pre><code>let m = 10;
m %= 3; // Equivalente a m = m % 3; m ahora es 1</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let m = 10;\nm %= 3;\nconsole.log('m (%=):', m);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>🧠 3. Operadores de Comparación</h2>
      <p>
        Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (<code>true</code> o <code>false</code>) basado en si la comparación es verdadera o falsa.
      </p>
      <div class="code-example">
        <h4>Igualdad (<code>==</code>)</h4>
        <p>Compara si dos valores son iguales, realizando coerción de tipo si es necesario.</p>
        <pre v-pre><code>console.log(5 == 5);   // true
console.log('5' == 5); // true (coerción de tipo)
console.log(true == 1); // true (coerción de tipo)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 == 5);\nconsole.log('5' == 5);\nconsole.log(true == 1);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Igualdad Estricta (<code>===</code>)</h4>
        <p>Compara si dos valores son iguales Y del mismo tipo. Es el operador de comparación recomendado.</p>
        <pre v-pre><code>console.log(5 === 5);   // true
console.log('5' === 5); // false (tipos diferentes)
console.log(true === 1); // false (tipos diferentes)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 === 5);\nconsole.log('5' === 5);\nconsole.log(true === 1);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Desigualdad (<code>!=</code>)</h4>
        <p>Compara si dos valores son diferentes, realizando coerción de tipo si es necesario.</p>
        <pre v-pre><code>console.log(5 != 10);  // true
console.log('5' != 5); // false (coerción de tipo)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 != 10);\nconsole.log('5' != 5);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Desigualdad Estricta (<code>!==</code>)</h4>
        <p>Compara si dos valores son diferentes O de diferente tipo. Es el operador de desigualdad recomendado.</p>
        <pre v-pre><code>console.log(5 !== 10);  // true
console.log('5' !== 5); // true (tipos diferentes)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 !== 10);\nconsole.log('5' !== 5);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Mayor que (<code>></code>)</h4>
        <p>Verifica si el operando izquierdo es mayor que el derecho.</p>
        <pre v-pre><code>console.log(10 > 5); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(10 > 5);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Menor que (<code><</code>)</h4>
        <p>Verifica si el operando izquierdo es menor que el derecho.</p>
        <pre v-pre><code>console.log(5 < 10); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 < 10);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Mayor o igual que (<code>>=</code>)</h4>
        <p>Verifica si el operando izquierdo es mayor o igual que el derecho.</p>
        <pre v-pre><code>console.log(10 >= 10); // true
console.log(10 >= 5);  // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(10 >= 10);\nconsole.log(10 >= 5);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Menor o igual que (<code><=</code>)</h4>
        <p>Verifica si el operando izquierdo es menor o igual que el derecho.</p>
        <pre v-pre><code>console.log(5 <= 5);  // true
console.log(5 <= 10); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 <= 5);\nconsole.log(5 <= 10);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>💡 4. Operadores Lógicos</h2>
      <p>Los operadores lógicos se utilizan para combinar expresiones booleanas y devolver un valor booleano. Son fundamentales para controlar el flujo de un programa basado en múltiples condiciones.</p>
      <div class="code-example">
        <h4>AND Lógico (<code>&&</code>)</h4>
        <p>Devuelve <code>true</code> si ambos operandos son verdaderos. Si el primer operando es falso, no evalúa el segundo (cortocircuito).</p>
        <pre v-pre><code>let a = true;
let b = false;
console.log(a && b); // false

let edad = 25;
let tienePermiso = true;
console.log(edad >= 18 && tienePermiso); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let a = true;\nlet b = false;\nconsole.log('true && false:', a && b);\n\nlet edad = 25;\nlet tienePermiso = true;\nconsole.log('edad >= 18 && tienePermiso:', edad >= 18 && tienePermiso);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>OR Lógico (<code>||</code>)</h4>
        <p>Devuelve <code>true</code> si al menos uno de los operandos es verdadero. Si el primer operando es verdadero, no evalúa el segundo (cortocircuito).</p>
        <pre v-pre><code>let c = true;
let d = false;
console.log(c || d); // true

let hora = 9;
let esFinDeSemana = false;
console.log(hora < 10 || esFinDeSemana); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let c = true;\nlet d = false;\nconsole.log('true || false:', c || d);\n\nlet hora = 9;\nlet esFinDeSemana = false;\nconsole.log('hora < 10 || esFinDeSemana:', hora < 10 || esFinDeSemana);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>NOT Lógico (<code>!</code>)</h4>
        <p>Invierte el valor booleano del operando (de <code>true</code> a <code>false</code> y viceversa).</p>
        <pre v-pre><code>let esValido = false;
console.log(!esValido); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let esValido = false;\nconsole.log('!esValido:', !esValido);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>✅ 5. Operador Ternario (Condicional)</h2>
      <p>
        El operador ternario es una forma concisa de escribir una sentencia <code>if...else</code>. Es el único operador de JavaScript que toma tres operandos: una condición seguida de un signo de interrogación (<code>?</code>), una expresión a ejecutar si la condición es verdadera, seguida de dos puntos (<code>:</code>), y la expresión a ejecutar si la condición es falsa.
      </p>
      <div class="code-example">
        <h4>Sintaxis: <code>condición ? expresiónSiVerdadero : expresiónSiFalso</code></h4>
        <pre v-pre><code>let edad = 20;
let estado = (edad >= 18) ? "Adulto" : "Menor";
console.log(estado); // Salida: Adulto

let esMiembro = false;
let precio = esMiembro ? 10 : 20;
console.log("Precio:", precio); // Salida: Precio: 20</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`let edad = 20;\nlet estado = (edad >= 18) ? 'Adulto' : 'Menor';\nconsole.log(estado);\n\nlet esMiembro = false;\nlet precio = esMiembro ? 10 : 20;\nconsole.log('Precio:', precio);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>⚙️ 6. Operadores Bit a Bit</h2>
      <p>Los operadores bit a bit (bitwise) realizan operaciones directamente sobre los bits individuales de los números. Aunque no son de uso diario en el desarrollo web, son importantes en ciertos contextos como la manipulación de datos a bajo nivel o la optimización de algoritmos.</p>
      <div class="code-example">
        <h4>AND Bit a Bit (<code>&</code>)</h4>
        <p>Compara cada bit de dos números. Si ambos bits son 1, el bit resultante es 1; de lo contrario, es 0.</p>
        <pre v-pre><code>console.log(5 & 3); // 1 (0101 & 0011 = 0001)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 & 3);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>OR Bit a Bit (<code>|</code>)</h4>
        <p>Compara cada bit de dos números. Si al menos uno de los bits es 1, el bit resultante es 1; de lo contrario, es 0.</p>
        <pre v-pre><code>console.log(5 | 3); // 7 (0101 | 0011 = 0111)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 | 3);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>XOR Bit a Bit (<code>^</code>)</h4>
        <p>Compara cada bit de dos números. Si los bits son diferentes, el bit resultante es 1; de lo contrario, es 0.</p>
        <pre v-pre><code>console.log(5 ^ 3); // 6 (0101 ^ 0011 = 0110)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 ^ 3);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>NOT Bit a Bit (<code>~</code>)</h4>
        <p>Invierte todos los bits de un número. Es el complemento a uno.</p>
        <pre v-pre><code>console.log(~5); // -6 (invierte los bits de 5)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(~5);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Desplazamiento a la Izquierda (<code><<</code>)</h4>
        <p>Desplaza los bits de un número a la izquierda, rellenando con ceros a la derecha. Equivalente a multiplicar por potencias de 2.</p>
        <pre v-pre><code>console.log(5 << 1); // 10 (0101 << 1 = 1010)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 << 1);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Desplazamiento a la Derecha (<code>>></code>)</h4>
        <p>Desplaza los bits de un número a la derecha, manteniendo el signo. Equivalente a dividir por potencias de 2.</p>
        <pre v-pre><code>console.log(10 >> 1); // 5 (1010 >> 1 = 0101)</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(10 >> 1);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>📦 7. Operador <code>typeof</code></h2>
      <p>El operador <code>typeof</code> devuelve una cadena de texto que indica el tipo de dato de su operando. Es útil para la validación de tipos o para depurar.</p>
      <div class="code-example">
        <h4>Uso de <code>typeof</code></h4>
        <pre v-pre><code>console.log(typeof 42);        // "number"
console.log(typeof "Hola");    // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (¡una peculiaridad de JavaScript!)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(typeof 42);\nconsole.log(typeof 'Hola');\nconsole.log(typeof true);\nconsole.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(typeof {});\nconsole.log(typeof []);\nconsole.log(typeof function(){});`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <h2>📍 8. Operador <code>instanceof</code></h2>
      <p>El operador <code>instanceof</code> se utiliza para verificar si un objeto es una instancia de una clase o constructor específico. Devuelve <code>true</code> si el objeto es una instancia de la clase, y <code>false</code> en caso contrario.</p>
      <div class="code-example">
        <h4>Uso de <code>instanceof</code></h4>
        <pre v-pre><code>class Animal {}
class Perro extends Animal {}

let miPerro = new Perro();
let miAnimal = new Animal();

console.log(miPerro instanceof Perro);  // true
console.log(miPerro instanceof Animal); // true
console.log(miAnimal instanceof Perro); // false

console.log([] instanceof Array);    // true
console.log({} instanceof Object);   // true
console.log(new Date() instanceof Date); // true</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`class Animal {}\nclass Perro extends Animal {}\n\nlet miPerro = new Perro();\nlet miAnimal = new Animal();\n\nconsole.log('miPerro instanceof Perro:', miPerro instanceof Perro);\nconsole.log('miPerro instanceof Animal:', miPerro instanceof Animal);\nconsole.log('miAnimal instanceof Perro:', miAnimal instanceof Perro);\n\nconsole.log('[] instanceof Array:', [] instanceof Array);\nconsole.log('{} instanceof Object:', {} instanceof Object);\nconsole.log('new Date() instanceof Date:', new Date() instanceof Date);`)">Probar</button>
      </div>
    </section>

    <section class="code-section">
      <p>
        📌 <strong>Consejo:</strong> Siempre que sea posible, usa <code>===</code> en vez de
        <code>==</code> para evitar comportamientos inesperados debido a la coerción de tipos.
      </p>

      <h2>🎯 Práctica Guiada: Coerción de Tipos y Precedencia</h2>
      <p>
        JavaScript a veces realiza "coerción de tipos" (conversión automática de tipos) al usar ciertos operadores, lo que puede llevar a resultados sorprendentes. Intenta predecir los resultados de los siguientes ejemplos antes de ejecutarlos.
      </p>
      <div class="code-example">
        <h4>Ejemplo 1: Suma con String</h4>
        <p>¿Qué sucede cuando sumas un número y una cadena de texto?</p>
        <pre v-pre><code>console.log(5 + "5");</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(5 + '5');`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Ejemplo 2: Resta con String</h4>
        <p>¿Y si intentas restar una cadena de texto que parece un número?</p>
        <pre v-pre><code>console.log("10" - 2);</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log('10' - 2);`)">Probar</button>
      </div>
      <div class="code-example">
        <h4>Ejemplo 3: Precedencia de Operadores</h4>
        <p>¿Cuál será el resultado de esta expresión compleja? Recuerda el orden de las operaciones.</p>
        <pre v-pre><code>console.log(2 + 3 * 4 - (6 / 2));</code></pre>
        <button class="load-code" @click="loadCodeInConsole(`console.log(2 + 3 * 4 - (6 / 2));`)">Probar</button>
      </div>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
</style>
