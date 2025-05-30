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
    <h1>Objetos</h1>
    <p>Los objetos en JavaScript son colecciones de propiedades, donde cada propiedad tiene un nombre (clave) y un valor. Son fundamentales para representar entidades complejas y datos estructurados.</p>

    <h2>Conceptos Básicos</h2>
    <h3>Creación de Objetos</h3>
    <p>La forma más común es usando literales de objeto.</p>
    <div class="example">
      <pre v-pre><code>
// Literal de objeto (forma preferida)
const persona = {
  nombre: "Alice",
  edad: 30,
  ciudad: "Nueva York"
};
console.log(persona); // Salida: { nombre: "Alice", edad: 30, ciudad: "Nueva York" }

// Constructor Object (menos común)
const coche = new Object();
coche.marca = "Toyota";
coche.modelo = "Corolla";
console.log(coche); // Salida: { marca: "Toyota", modelo: "Corolla" }

// Usando Object.create()
const prototipoAnimal = {
  saludar() {
    return `Hola, soy un ${this.tipo}.`;
  }
};
const perro = Object.create(prototipoAnimal);
perro.tipo = "perro";
console.log(perro.saludar()); // Salida: Hola, soy un perro.
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const persona = {\n  nombre: 'Alice',\n  edad: 30,\n  ciudad: 'Nueva York'\n};\nconsole.log(persona);\n\nconst coche = new Object();\ncoche.marca = 'Toyota';\ncoche.modelo = 'Corolla';\nconsole.log(coche);\n\nconst prototipoAnimal = {\n  saludar() {\n    return \`Hola, soy un \${this.tipo}.\`;\n  }\n};\nconst perro = Object.create(prototipoAnimal);\nperro.tipo = 'perro';\nconsole.log(perro.saludar());`)">Probar</button>
    </div>

    <h3>Acceso a Propiedades</h3>
    <p>Se puede acceder a las propiedades usando la notación de punto o la notación de corchetes.</p>
    <div class="example">
      <pre v-pre><code>
const usuario = {
  nombre: "Bob",
  "apellido-paterno": "Esponja",
  edad: 25
};

// Notación de punto (cuando el nombre de la propiedad es un identificador válido)
console.log(usuario.nombre); // Salida: Bob

// Notación de corchetes (cuando el nombre de la propiedad contiene caracteres especiales,
// es una variable, o es una expresión)
console.log(usuario["apellido-paterno"]); // Salida: Esponja
const clave = "edad";
console.log(usuario[clave]); // Salida: 25
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const usuario = {\n  nombre: 'Bob',\n  'apellido-paterno': 'Esponja',\n  edad: 25\n};\n\nconsole.log(usuario.nombre);\n\nconsole.log(usuario['apellido-paterno']);\nconst clave = 'edad';\nconsole.log(usuario[clave]);`)">Probar</button>
    </div>

    <h2>Modificación y Eliminación de Propiedades</h2>
    <div class="example">
      <pre v-pre><code>
const producto = {
  nombre: "Laptop",
  precio: 1200
};

// Añadir una nueva propiedad
producto.stock = 50;
console.log(producto); // Salida: { nombre: "Laptop", precio: 1200, stock: 50 }

// Actualizar una propiedad existente
producto.precio = 1150;
console.log(producto); // Salida: { nombre: "Laptop", precio: 1150, stock: 50 }

// Eliminar una propiedad
delete producto.stock;
console.log(producto); // Salida: { nombre: "Laptop", precio: 1150 }
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const producto = {\n  nombre: 'Laptop',\n  precio: 1200\n};\n\nproducto.stock = 50;\nconsole.log(producto);\n\nproducto.precio = 1150;\nconsole.log(producto);\n\ndelete producto.stock;\nconsole.log(producto);`)">Probar</button>
    </div>

    <h2>Métodos de Objetos (ES5/ES6)</h2>
    <h3>`Object.keys()`, `Object.values()`, `Object.entries()`</h3>
    <p>Permiten obtener las claves, los valores o los pares clave-valor de un objeto como arrays.</p>
    <div class="example">
      <pre v-pre><code>
const cocheInfo = {
  marca: "Ford",
  modelo: "Fiesta",
  año: 2020
};

console.log(Object.keys(cocheInfo));   // Salida: ["marca", "modelo", "año"]
console.log(Object.values(cocheInfo)); // Salida: ["Ford", "Fiesta", 2020]
console.log(Object.entries(cocheInfo));// Salida: [["marca", "Ford"], ["modelo", "Fiesta"], ["año", 2020]]
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const cocheInfo = {\n  marca: 'Ford',\n  modelo: 'Fiesta',\n  año: 2020\n};\n\nconsole.log(Object.keys(cocheInfo));\nconsole.log(Object.values(cocheInfo));\nconsole.log(Object.entries(cocheInfo));`)">Probar</button>
    </div>

    <h3>`Object.assign()`</h3>
    <p>Copia todas las propiedades enumerables propias de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.</p>
    <div class="example">
      <pre v-pre><code>
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const objCombinado = Object.assign({}, obj1, obj2);
console.log(objCombinado); // Salida: { a: 1, b: 3, c: 4 } (b se sobrescribe)
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\nconst objCombinado = Object.assign({}, obj1, obj2);\nconsole.log(objCombinado);`)">Probar</button>
    </div>

    <h3>`Object.freeze()` y `Object.seal()`</h3>
    <p>Controlan la mutabilidad de los objetos.</p>
    <ul>
      <li>`Object.freeze()`: Impide añadir, eliminar o modificar propiedades.</li>
      <li>`Object.seal()`: Impide añadir o eliminar propiedades, pero permite modificar las existentes.</li>
    </ul>
    <div class="example">
      <pre v-pre><code>
const objCongelado = { prop: "valor" };
Object.freeze(objCongelado);
// objCongelado.prop = "nuevo valor"; // No se puede modificar
// objCongelado.nuevaProp = "otro"; // No se puede añadir
console.log(Object.isFrozen(objCongelado)); // Salida: true

const objSellado = { prop: "valor" };
Object.seal(objSellado);
objSellado.prop = "nuevo valor"; // Se puede modificar
// objSellado.nuevaProp = "otro"; // No se puede añadir
console.log(Object.isSealed(objSellado)); // Salida: true
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const objCongelado = { prop: 'valor' };\nObject.freeze(objCongelado);\nconsole.log(Object.isFrozen(objCongelado));\n\nconst objSellado = { prop: 'valor' };\nObject.seal(objSellado);\nobjSellado.prop = 'nuevo valor';\nconsole.log(Object.isSealed(objSellado));`)">Probar</button>
    </div>

    <h3>`Object.is()`</h3>
    <p>Compara si dos valores son el mismo valor. Es más robusto que `===` para casos especiales como `NaN`.</p>
    <div class="example">
      <pre v-pre><code>
console.log(Object.is(25, 25));     // Salida: true
console.log(Object.is(NaN, NaN));   // Salida: true (a diferencia de NaN === NaN que es false)
console.log(Object.is(0, -0));      // Salida: false (a diferencia de 0 === -0 que es true)
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`console.log(Object.is(25, 25));\nconsole.log(Object.is(NaN, NaN));\nconsole.log(Object.is(0, -0));`)">Probar</button>
    </div>

    <h3>`Object.getPrototypeOf()` y `Object.setPrototypeOf()`</h3>
    <p>Permiten trabajar con la cadena de prototipos de un objeto.</p>
    <div class="example">
      <pre v-pre><code>
const proto = { z: 3 };
const obj = Object.create(proto);
obj.x = 1;
obj.y = 2;

console.log(Object.getPrototypeOf(obj)); // Salida: { z: 3 }
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const proto = { z: 3 };\nconst obj = Object.create(proto);\nobj.x = 1;\nobj.y = 2;\n\nconsole.log(Object.getPrototypeOf(obj));`)">Probar</button>
    </div>

    <h2>Iteración de Objetos</h2>
    <h3>Bucle `for...in`</h3>
    <p>Itera sobre las propiedades enumerables de un objeto (incluyendo las heredadas del prototipo).</p>
    <div class="example">
      <pre v-pre><code>
const miObjeto = { a: 1, b: 2, c: 3 };
for (const clave in miObjeto) {
  if (miObjeto.hasOwnProperty(clave)) { // Es buena práctica usar hasOwnProperty
    console.log(`${clave}: ${miObjeto[clave]}`);
  }
}
// Salida:
// a: 1
// b: 2
// c: 3
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const miObjeto = { a: 1, b: 2, c: 3 };\nfor (const clave in miObjeto) {\n  if (miObjeto.hasOwnProperty(clave)) {\n    console.log(\`\${clave}: \${miObjeto[clave]}\`);\n  }\n}`)">Probar</button>
    </div>

    <h3>Iteración con `Object.keys()`, `Object.values()`, `Object.entries()`</h3>
    <p>Forma más moderna y segura de iterar sobre las propiedades propias de un objeto.</p>
    <div class="example">
      <pre v-pre><code>
const datos = { nombre: "Marta", edad: 28 };

Object.keys(datos).forEach(key => {
  console.log(`Clave: ${key}`);
});

Object.values(datos).forEach(value => {
  console.log(`Valor: ${value}`);
});

Object.entries(datos).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const datos = { nombre: 'Marta', edad: 28 };\n\nObject.keys(datos).forEach(key => {\n  console.log(\`Clave: \${key}\`);\n});\n\nObject.values(datos).forEach(value => {\n  console.log(\`Valor: \${value}\`);\n});\n\nObject.entries(datos).forEach(([key, value]) => {\n  console.log(\`\${key}: \${value}\`);\n});`)">Probar</button>
    </div>

    <h2>Desestructuración de Objetos (ES6)</h2>
    <p>Permite extraer propiedades de objetos en variables separadas de forma concisa.</p>
    <div class="example">
      <pre v-pre><code>
const libro = {
  titulo: "El Gran Gatsby",
  autor: "F. Scott Fitzgerald",
  año: 1925
};

const { titulo, autor } = libro;
console.log(titulo); // Salida: El Gran Gatsby
console.log(autor);  // Salida: F. Scott Fitzgerald

// Renombrar variables y valores por defecto
const { titulo: nombreLibro, paginas = 300 } = libro;
console.log(nombreLibro); // Salida: El Gran Gatsby
console.log(paginas);     // Salida: 300

// Con el operador rest
const { año, ...restoLibro } = libro;
console.log(año);        // Salida: 1925
console.log(restoLibro); // Salida: { titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald" }
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const libro = {\n  titulo: 'El Gran Gatsby',\n  autor: 'F. Scott Fitzgerald',\n  año: 1925\n};\n\nconst { titulo, autor } = libro;\nconsole.log(titulo);\nconsole.log(autor);\n\nconst { titulo: nombreLibro, paginas = 300 } = libro;\nconsole.log(nombreLibro);\nconsole.log(paginas);\n\nconst { año, ...restoLibro } = libro;\nconsole.log(año);\nconsole.log(restoLibro);`)">Probar</button>
    </div>

    <h2>Spread Operator (`...`) con Objetos (ES6)</h2>
    <p>Permite copiar propiedades de objetos o fusionar objetos.</p>
    <div class="example">
      <pre v-pre><code>
// Copiar un objeto
const originalObj = { a: 1, b: 2 };
const copiaObj = { ...originalObj };
console.log(copiaObj); // Salida: { a: 1, b: 2 }

// Fusionar objetos
const objA = { x: 1, y: 2 };
const objB = { y: 3, z: 4 };
const objFusionado = { ...objA, ...objB };
console.log(objFusionado); // Salida: { x: 1, y: 3, z: 4 } (y se sobrescribe)
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const originalObj = { a: 1, b: 2 };\nconst copiaObj = { ...originalObj };\nconsole.log(copiaObj);\n\nconst objA = { x: 1, y: 2 };\nconst objB = { y: 3, z: 4 };\nconst objFusionado = { ...objA, ...objB };\nconsole.log(objFusionado);`)">Probar</button>
    </div>

    <h2>La Palabra Clave `this` en Objetos</h2>
    <p>Dentro de un método de objeto, `this` se refiere al objeto al que pertenece el método.</p>
    <div class="example">
      <pre v-pre><code>
const cuenta = {
  saldo: 1000,
  depositar: function(cantidad) {
    this.saldo += cantidad;
    console.log(`Nuevo saldo: ${this.saldo}`);
  }
};
cuenta.depositar(500); // Salida: Nuevo saldo: 1500
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const cuenta = {\n  saldo: 1000,\n  depositar: function(cantidad) {\n    this.saldo += cantidad;\n    console.log(\`Nuevo saldo: \${this.saldo}\`);\n  }\n};\ncuenta.depositar(500);`)">Probar</button>
    </div>

    <h2>Propiedades Computadas (Computed Property Names - ES6)</h2>
    <p>Permiten usar una expresión como nombre de propiedad en un literal de objeto.</p>
    <div class="example">
      <pre v-pre><code>
const claveDinamica = "nombreCompleto";
const usuarioDinamico = {
  [claveDinamica]: "Juan Pérez",
  edad: 40
};
console.log(usuarioDinamico); // Salida: { nombreCompleto: "Juan Pérez", edad: 40 }
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const claveDinamica = 'nombreCompleto';\nconst usuarioDinamico = {\n  [claveDinamica]: 'Juan Pérez',\n  edad: 40\n};\nconsole.log(usuarioDinamico);`)">Probar</button>
    </div>

    <h2>Getters y Setters</h2>
    <p>Métodos especiales que permiten definir cómo se obtiene (getter) o se establece (setter) el valor de una propiedad.</p>
    <div class="example">
      <pre v-pre><code>
const rectangulo = {
  ancho: 10,
  alto: 5,
  get area() {
    return this.ancho * this.alto;
  },
  set dimensiones(nuevaDimensiones) {
    this.ancho = nuevaDimensiones.ancho;
    this.alto = nuevaDimensiones.alto;
  }
};
console.log(rectangulo.area); // Salida: 50 (llama al getter)
rectangulo.dimensiones = { ancho: 20, alto: 10 }; // Llama al setter
console.log(rectangulo.area); // Salida: 200
      </code></pre>
      <button class="load-code" @click="addCodeToConsole(`const rectangulo = {\n  ancho: 10,\n  alto: 5,\n  get area() {\n    return this.ancho * this.alto;\n  },\n  set dimensiones(nuevaDimensiones) {\n    this.ancho = nuevaDimensiones.ancho;\n    this.alto = nuevaDimensiones.alto;\n  }\n};\nconsole.log(rectangulo.area);\nrectangulo.dimensiones = { ancho: 20, alto: 10 };\nconsole.log(rectangulo.area);`)">Probar</button>
    </div>

    <h2>Programación Orientada a Objetos (OOP)</h2>
    <p>Los objetos son la base de la OOP en JavaScript, que se extiende con constructores, prototipos y clases. (Ver <router-link to="/oop">Programación Orientada a Objetos</router-link> para una explicación más profunda).</p>

    <h2>JSON (JavaScript Object Notation)</h2>
    <p>JSON es un formato de texto ligero para el intercambio de datos, basado en la sintaxis de objetos de JavaScript. (Ver <router-link to="/json">JSON</router-link> para más detalles).</p>
  </div>
  <NavigationButtons />
</template>

<style scoped>
</style>
