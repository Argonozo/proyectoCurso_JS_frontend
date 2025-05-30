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
    <h1>Arrays</h1>
    <p>Los arrays (arreglos) son objetos tipo lista que permiten almacenar colecciones ordenadas de elementos. Pueden contener elementos de cualquier tipo de dato.</p>

    <section class="code-section">
      <h2>Conceptos Básicos</h2>
      <h3>Creación de Arrays</h3>
      <p>Se pueden crear usando literales de array o el constructor `Array`.</p>
      <div class="example">
        <pre v-pre><code>
// Literal de array (forma preferida)
const frutas = ["Manzana", "Banana", "Cereza"];
console.log(frutas); // Salida: ["Manzana", "Banana", "Cereza"]

// Constructor Array (menos común)
const numeros = new Array(1, 2, 3);
console.log(numeros); // Salida: [1, 2, 3]

// Array vacío
const vacio = [];

// Array con longitud predefinida (elementos undefined)
const diezElementos = new Array(10);
console.log(diezElementos.length); // Salida: 10
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const frutas = ['Manzana', 'Banana', 'Cereza'];\nconsole.log(frutas);\n\nconst numeros = new Array(1, 2, 3);\nconsole.log(numeros);\n\nconst vacio = [];\n\nconst diezElementos = new Array(10);\nconsole.log(diezElementos.length);`)">Probar</button>
      </div>

      <h3>Acceso a Elementos</h3>
      <p>Los elementos se acceden mediante su índice (posición), que comienza en 0.</p>
      <div class="example">
        <pre v-pre><code>
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores[0]); // Salida: Rojo
console.log(colores[1]); // Salida: Verde
console.log(colores[colores.length - 1]); // Acceder al último elemento: Azul
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const colores = ['Rojo', 'Verde', 'Azul'];\nconsole.log(colores[0]);\nconsole.log(colores[1]);\nconsole.log(colores[colores.length - 1]);`)">Probar</button>
      </div>

      <h3>Propiedad `length`</h3>
      <p>Indica el número de elementos en el array.</p>
      <div class="example">
        <pre v-pre><code>
const animales = ["Perro", "Gato", "Pez"];
console.log(animales.length); // Salida: 3
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const animales = ['Perro', 'Gato', 'Pez'];\nconsole.log(animales.length);`)">Probar</button>
      </div>

      <h3>Arrays Dispersos (Sparse Arrays)</h3>
      <p>Arrays con "huecos" o índices no contiguos.</p>
      <div class="example">
        <pre v-pre><code>
const sparseArray = [1, , 3]; // El índice 1 está vacío
console.log(sparseArray[1]); // Salida: undefined
console.log(sparseArray.length); // Salida: 3
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const sparseArray = [1, , 3];\nconsole.log(sparseArray[1]);\nconsole.log(sparseArray.length);`)">Probar</button>
      </div>

      <h2>Métodos Mutadores (Modifican el Array Original)</h2>
      <h3>`push()` y `pop()`</h3>
      <p>Añaden/eliminan elementos al final del array.</p>
      <div class="example">
        <pre v-pre><code>
let pila = [1, 2];
pila.push(3); // Añade 3 al final
console.log(pila); // Salida: [1, 2, 3]
let ultimo = pila.pop(); // Elimina y devuelve el último elemento
console.log(ultimo); // Salida: 3
console.log(pila); // Salida: [1, 2]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let pila = [1, 2];\npila.push(3);\nconsole.log(pila);\nlet ultimo = pila.pop();\nconsole.log(ultimo);\nconsole.log(pila);`)">Probar</button>
      </div>

      <h3>`shift()` y `unshift()`</h3>
      <p>Eliminan/añaden elementos al principio del array.</p>
      <div class="example">
        <pre v-pre><code>
let cola = [1, 2];
cola.unshift(0); // Añade 0 al principio
console.log(cola); // Salida: [0, 1, 2]
let primero = cola.shift(); // Elimina y devuelve el primer elemento
console.log(primero); // Salida: 0
console.log(cola); // Salida: [1, 2]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let cola = [1, 2];\ncola.unshift(0);\nconsole.log(cola);\nlet primero = cola.shift();\nconsole.log(primero);\nconsole.log(cola);`)">Probar</button>
      </div>

      <h3>`splice()`</h3>
      <p>Cambia el contenido de un array eliminando elementos existentes y/o añadiendo nuevos elementos en su lugar.</p>
      <div class="example">
        <pre v-pre><code>
let arr = [1, 2, 3, 4, 5];
// Eliminar 2 elementos desde el índice 2 (el 3 y el 4)
arr.splice(2, 2);
console.log(arr); // Salida: [1, 2, 5]

// Añadir elementos desde el índice 1
arr.splice(1, 0, "a", "b");
console.log(arr); // Salida: [1, "a", "b", 2, 5]

// Reemplazar elementos
arr.splice(0, 1, "x");
console.log(arr); // Salida: ["x", "a", "b", 2, 5]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let arr = [1, 2, 3, 4, 5];\narr.splice(2, 2);\nconsole.log(arr);\n\narr.splice(1, 0, 'a', 'b');\nconsole.log(arr);\n\narr.splice(0, 1, 'x');\nconsole.log(arr);`)">Probar</button>
      </div>

      <h3>`sort()`</h3>
      <p>Ordena los elementos de un array. Por defecto, ordena alfabéticamente (convirtiendo a cadena).</p>
      <div class="example">
        <pre v-pre><code>
let nombres = ["Carlos", "Ana", "Pedro"];
nombres.sort();
console.log(nombres); // Salida: ["Ana", "Carlos", "Pedro"]

let numerosDesordenados = [40, 1, 5, 200];
numerosDesordenados.sort(); // Ordena como cadenas: [1, 200, 40, 5]
console.log(numerosDesordenados);

// Ordenar números correctamente con una función de comparación
numerosDesordenados.sort((a, b) => a - b); // Orden ascendente
console.log(numerosDesordenados); // Salida: [1, 5, 40, 200]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let nombres = ['Carlos', 'Ana', 'Pedro'];\nnombres.sort();\nconsole.log(nombres);\n\nlet numerosDesordenados = [40, 1, 5, 200];\nnumerosDesordenados.sort();\nconsole.log(numerosDesordenados);\n\nnumerosDesordenados.sort((a, b) => a - b);\nconsole.log(numerosDesordenados);`)">Probar</button>
      </div>

      <h3>`reverse()`</h3>
      <p>Invierte el orden de los elementos de un array.</p>
      <div class="example">
        <pre v-pre><code>
let letras = ["a", "b", "c"];
letras.reverse();
console.log(letras); // Salida: ["c", "b", "a"]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let letras = ['a', 'b', 'c'];\nletras.reverse();\nconsole.log(letras);`)">Probar</button>
      </div>

      <h3>`fill()`</h3>
      <p>Rellena todos los elementos de un array desde un índice inicial a uno final con un valor estático.</p>
      <div class="example">
        <pre v-pre><code>
let arrFill = [1, 2, 3, 4, 5];
arrFill.fill(0, 2, 4); // Rellena con 0 desde el índice 2 (inclusive) hasta el 4 (exclusive)
console.log(arrFill); // Salida: [1, 2, 0, 0, 5]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let arrFill = [1, 2, 3, 4, 5];\narrFill.fill(0, 2, 4);\nconsole.log(arrFill);`)">Probar</button>
      </div>

      <h3>`copyWithin()`</h3>
      <p>Copia una secuencia de elementos del array dentro del mismo array.</p>
      <div class="example">
        <pre v-pre><code>
let arrCopy = [1, 2, 3, 4, 5];
arrCopy.copyWithin(0, 3); // Copia desde el índice 3 (4, 5) al índice 0
console.log(arrCopy); // Salida: [4, 5, 3, 4, 5]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`let arrCopy = [1, 2, 3, 4, 5];\narrCopy.copyWithin(0, 3);\nconsole.log(arrCopy);`)">Probar</button>
      </div>

      <h2>Métodos No Mutadores (Devuelven un Nuevo Array/Valor)</h2>
      <h3>`concat()`</h3>
      <p>Combina dos o más arrays. No modifica los arrays existentes.</p>
      <div class="example">
        <pre v-pre><code>
const arr1 = [1, 2];
const arr2 = [3, 4];
const nuevoArr = arr1.concat(arr2);
console.log(nuevoArr); // Salida: [1, 2, 3, 4]
console.log(arr1); // Salida: [1, 2] (arr1 no se modifica)
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst nuevoArr = arr1.concat(arr2);\nconsole.log(nuevoArr);\nconsole.log(arr1);`)">Probar</button>
      </div>

      <h3>`slice()`</h3>
      <p>Extrae una porción de un array en un nuevo array.</p>
      <div class="example">
        <pre v-pre><code>
const original = ["a", "b", "c", "d", "e"];
const subArray = original.slice(1, 4); // Desde índice 1 (inclusive) hasta 4 (exclusive)
console.log(subArray); // Salida: ["b", "c", "d"]
console.log(original); // Salida: ["a", "b", "c", "d", "e"] (original no se modifica)
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const original = ['a', 'b', 'c', 'd', 'e'];\nconst subArray = original.slice(1, 4);\nconsole.log(subArray);\nconsole.log(original);`)">Probar</button>
      </div>

      <h3>`join()`</h3>
      <p>Une todos los elementos de un array en una cadena, usando un separador especificado.</p>
      <div class="example">
        <pre v-pre><code>
const palabras = ["Hola", "Mundo"];
const frase = palabras.join(" ");
console.log(frase); // Salida: "Hola Mundo"
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const palabras = ['Hola', 'Mundo'];\nconst frase = palabras.join(' ');\nconsole.log(frase);`)">Probar</button>
      </div>

      <h3>`toString()` y `toLocaleString()`</h3>
      <p>Convierten el array a una cadena de texto.</p>
      <div class="example">
        <pre v-pre><code>
const nums = [1, 2, 3];
console.log(nums.toString()); // Salida: "1,2,3"
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const nums = [1, 2, 3];\nconsole.log(nums.toString());`)">Probar</button>
      </div>

      <h3>`indexOf()`, `lastIndexOf()`, `includes()`</h3>
      <p>Métodos para buscar elementos en un array.</p>
      <div class="example">
        <pre v-pre><code>
const elementos = ["a", "b", "c", "a"];
console.log(elementos.indexOf("a")); // Salida: 0 (primera ocurrencia)
console.log(elementos.lastIndexOf("a")); // Salida: 3 (última ocurrencia)
console.log(elementos.includes("b")); // Salida: true
console.log(elementos.includes("z")); // Salida: false
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const elementos = ['a', 'b', 'c', 'a'];\nconsole.log(elementos.indexOf('a'));\nconsole.log(elementos.lastIndexOf('a'));\nconsole.log(elementos.includes('b'));\nconsole.log(elementos.includes('z'));`)">Probar</button>
      </div>

      <h2>Métodos Iteradores (Higher-Order Array Methods - ES5/ES6)</h2>
      <p>Estos métodos toman una función de callback y la aplican a cada elemento del array.</p>
      <h3>`forEach()`</h3>
      <p>Ejecuta una función proporcionada una vez por cada elemento del array.</p>
      <div class="example">
        <pre v-pre><code>
const numerosForEach = [1, 2, 3];
numerosForEach.forEach(num => console.log(num * 2));
// Salida:
// 2
// 4
// 6
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const numerosForEach = [1, 2, 3];\nnumerosForEach.forEach(num => console.log(num * 2));`)">Probar</button>
      </div>

      <h3>`map()`</h3>
      <p>Crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada uno de sus elementos.</p>
      <div class="example">
        <pre v-pre><code>
const numerosMap = [1, 2, 3];
const duplicados = numerosMap.map(num => num * 2);
console.log(duplicados); // Salida: [2, 4, 6]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const numerosMap = [1, 2, 3];\nconst duplicados = numerosMap.map(num => num * 2);\nconsole.log(duplicados);`)">Probar</button>
      </div>

      <h3>`filter()`</h3>
      <p>Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función dada.</p>
      <div class="example">
        <pre v-pre><code>
const edades = [12, 18, 25, 6];
const mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // Salida: [18, 25]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const edades = [12, 18, 25, 6];\nconst mayoresDeEdad = edades.filter(edad => edad >= 18);\nconsole.log(mayoresDeEdad);`)">Probar</button>
      </div>

      <h3>`reduce()` y `reduceRight()`</h3>
      <p>Ejecuta una función "reductora" sobre cada elemento del array, de izquierda a derecha (o derecha a izquierda para `reduceRight`), para reducirlo a un único valor.</p>
      <div class="example">
        <pre v-pre><code>
const numerosReduce = [1, 2, 3, 4];
const sumaTotal = numerosReduce.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal); // Salida: 10
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const numerosReduce = [1, 2, 3, 4];\nconst sumaTotal = numerosReduce.reduce((acumulador, valorActual) => acumulador + valorActual, 0);\nconsole.log(sumaTotal);`)">Probar</button>
      </div>

      <h3>`some()` y `every()`</h3>
      <p>`some()` comprueba si al menos un elemento en el array pasa la prueba. `every()` comprueba si todos los elementos pasan la prueba.</p>
      <div class="example">
        <pre v-pre><code>
const numerosCheck = [1, 2, 3, 4, 5];
console.log(numerosCheck.some(num => num > 3)); // Salida: true (4 y 5 son mayores que 3)
console.log(numerosCheck.every(num => num > 0)); // Salida: true (todos son mayores que 0)
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const numerosCheck = [1, 2, 3, 4, 5];\nconsole.log(numerosCheck.some(num => num > 3));\nconsole.log(numerosCheck.every(num => num > 0));`)">Probar</button>
      </div>

      <h3>`find()` y `findIndex()`</h3>
      <p>`find()` devuelve el primer elemento que satisface la función de prueba. `findIndex()` devuelve el índice del primer elemento que satisface la función de prueba.</p>
      <div class="example">
        <pre v-pre><code>
const usuarios = [{ id: 1, nombre: "Alice" }, { id: 2, nombre: "Bob" }];
const usuarioEncontrado = usuarios.find(user => user.id === 2);
console.log(usuarioEncontrado); // Salida: { id: 2, nombre: "Bob" }

const indiceEncontrado = usuarios.findIndex(user => user.nombre === "Alice");
console.log(indiceEncontrado); // Salida: 0
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const usuarios = [{ id: 1, nombre: 'Alice' }, { id: 2, nombre: 'Bob' }];\nconst usuarioEncontrado = usuarios.find(user => user.id === 2);\nconsole.log(usuarioEncontrado);\n\nconst indiceEncontrado = usuarios.findIndex(user => user.nombre === 'Alice');\nconsole.log(indiceEncontrado);`)">Probar</button>
      </div>

      <h3>`flatMap()` y `flat()` (ES2019)</h3>
      <p>`flat()` crea un nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada. `flatMap()` mapea cada elemento usando una función y luego aplana el resultado en un nuevo array.</p>
      <div class="example">
        <pre v-pre><code>
const arrAnidado = [1, [2, 3], [4, [5, 6]]];
console.log(arrAnidado.flat(1)); // Salida: [1, 2, 3, 4, [5, 6]]
console.log(arrAnidado.flat(2)); // Salida: [1, 2, 3, 4, 5, 6]

const palabrasFlatMap = ["Hola mundo", "JavaScript es genial"];
const letras = palabrasFlatMap.flatMap(frase => frase.split(""));
console.log(letras); // Salida: ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "e", "s", " ", "g", "e", "n", "i", "a", "l"]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const arrAnidado = [1, [2, 3], [4, [5, 6]]];\nconsole.log(arrAnidado.flat(1));\nconsole.log(arrAnidado.flat(2));\n\nconst palabrasFlatMap = ['Hola mundo', 'JavaScript es genial'];\nconst letras = palabrasFlatMap.flatMap(frase => frase.split(''));\nconsole.log(letras);`)">Probar</button>
      </div>

      <h2>Iteración de Arrays</h2>
      <h3>Bucle `for` tradicional</h3>
      <div class="example">
        <pre v-pre><code>
const items = ["item1", "item2", "item3"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const items = ['item1', 'item2', 'item3'];\nfor (let i = 0; i < items.length; i++) {\n  console.log(items[i]);\n}`)">Probar</button>
      </div>

      <h3>Bucle `for...of` (ES6)</h3>
      <p>Itera sobre los valores de un objeto iterable (como un array).</p>
      <div class="example">
        <pre v-pre><code>
const itemsForOf = ["uno", "dos", "tres"];
for (const item of itemsForOf) {
  console.log(item);
}
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const itemsForOf = ['uno', 'dos', 'tres'];\nfor (const item of itemsForOf) {\n  console.log(item);\n}`)">Probar</button>
      </div>

      <h2>Desestructuración de Arrays (ES6)</h2>
      <p>Permite desempaquetar valores de arrays en variables separadas de forma concisa.</p>
      <div class="example">
        <pre v-pre><code>
const [a, b, c] = [10, 20, 30];
console.log(a, b, c); // Salida: 10 20 30

// Con valores por defecto
const [x, y, z = 100] = [1, 2];
console.log(x, y, z); // Salida: 1 2 100

// Con el operador rest
const [primero, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // Salida: 1
console.log(resto); // Salida: [2, 3, 4, 5]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const [a, b, c] = [10, 20, 30];\nconsole.log(a, b, c);\n\nconst [x, y, z = 100] = [1, 2];\nconsole.log(x, y, z);\n\nconst [primero, ...resto] = [1, 2, 3, 4, 5];\nconsole.log(primero);\nconsole.log(resto);`)">Probar</button>
      </div>

      <h2>Spread Operator (`...`) con Arrays (ES6)</h2>
      <p>Permite expandir un array en elementos individuales.</p>
      <div class="example">
        <pre v-pre><code>
// Copiar un array
const originalArr = [1, 2, 3];
const copiaArr = [...originalArr];
console.log(copiaArr); // Salida: [1, 2, 3]

// Concatenar arrays
const arrA = [1, 2];
const arrB = [3, 4];
const combinado = [...arrA, ...arrB];
console.log(combinado); // Salida: [1, 2, 3, 4]

// Expandir en argumentos de función
function mostrarNumeros(n1, n2, n3) {
  console.log(n1, n2, n3);
}
const numsParaFuncion = [7, 8, 9];
mostrarNumeros(...numsParaFuncion); // Salida: 7 8 9
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const originalArr = [1, 2, 3];\nconst copiaArr = [...originalArr];\nconsole.log(copiaArr);\n\nconst arrA = [1, 2];\nconst arrB = [3, 4];\nconst combinado = [...arrA, ...arrB];\nconsole.log(combinado);\n\nfunction mostrarNumeros(n1, n2, n3) {\n  console.log(n1, n2, n3);\n}\nconst numsParaFuncion = [7, 8, 9];\nmostrarNumeros(...numsParaFuncion);`)">Probar</button>
      </div>

      <h2>Arrays Multidimensionales</h2>
      <p>Arrays que contienen otros arrays, formando estructuras de datos más complejas (matrices, tablas).</p>
      <div class="example">
        <pre v-pre><code>
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[0][0]); // Salida: 1
console.log(matriz[1][2]); // Salida: 6
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const matriz = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\nconsole.log(matriz[0][0]);\nconsole.log(matriz[1][2]);`)">Probar</button>
      </div>

      <h2>`Array.from()` y `Array.of()` (ES6)</h2>
      <p>`Array.from()` crea un nuevo array a partir de un objeto iterable o similar a un array. `Array.of()` crea un nuevo array con un número variable de argumentos, independientemente del número o tipo de los argumentos.</p>
      <div class="example">
        <pre v-pre><code>
const str = "Hola";
const arrFromStr = Array.from(str);
console.log(arrFromStr); // Salida: ["H", "o", "l", "a"]

const arrOf = Array.of(1, 2, 3);
console.log(arrOf); // Salida: [1, 2, 3]

const arrOfSingle = Array.of(7);
console.log(arrOfSingle); // Salida: [7]
        </code></pre>
        <button class="load-code" @click.stop="addCodeToConsole(`const str = 'Hola';\nconst arrFromStr = Array.from(str);\nconsole.log(arrFromStr);\n\nconst arrOf = Array.of(1, 2, 3);\nconsole.log(arrOf);\n\nconst arrOfSingle = Array.of(7);\nconsole.log(arrOfSingle);`)">Probar</button>
      </div>
    </section>
  </div>
  <NavigationButtons />
</template>

<style scoped>
</style>
