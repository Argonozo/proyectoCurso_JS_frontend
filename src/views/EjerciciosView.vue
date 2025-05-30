<script setup lang="ts">
import { ref } from 'vue';
import NavigationButtons from '../components/NavigationButtons.vue';

// Explicación de prompt()
const promptExplanation = `
  La función \`prompt()\` en JavaScript se utiliza para mostrar un cuadro de diálogo que le pide al usuario que ingrese algún texto.
  El valor ingresado por el usuario se devuelve como una cadena de texto. Si el usuario hace clic en "Cancelar" o cierra el diálogo,
  la función devuelve \`null\`. Es importante recordar que el valor devuelto siempre es una cadena, por lo que si se espera un número,
  se debe convertir explícitamente (por ejemplo, usando \`parseInt()\` o \`parseFloat()\`).
`;

// Ejercicio 1: Mayor o menor de edad
const resultadoEjercicio1 = ref('');
const ejecutarEjercicio1 = () => {
  const edadStr = prompt("Ejercicio 1: Por favor, ingresa tu edad:");
  if (edadStr === null) {
    resultadoEjercicio1.value = "Operación cancelada.";
    return;
  }
  const edad = parseInt(edadStr);

  if (isNaN(edad)) {
    resultadoEjercicio1.value = "Por favor, ingresa una edad válida (un número).";
  } else if (edad >= 18) {
    resultadoEjercicio1.value = `Tienes ${edad} años. Eres mayor de edad.`;
    console.log(`Tienes ${edad} años. Eres mayor de edad.`);
  } else {
    resultadoEjercicio1.value = `Tienes ${edad} años. Eres menor de edad.`;
    console.log(`Tienes ${edad} años. Eres menor de edad.`);
  }
};

// Ejercicio 2: Cálculo de promedio de notas
const resultadoEjercicio2 = ref('');
const ejecutarEjercicio2 = () => {
  const nota1Str = prompt("Ejercicio 2: Ingresa la primera nota:");
  const nota2Str = prompt("Ejercicio 2: Ingresa la segunda nota:");
  const nota3Str = prompt("Ejercicio 2: Ingresa la tercera nota:");

  if (nota1Str === null || nota2Str === null || nota3Str === null) {
    resultadoEjercicio2.value = "Operación cancelada.";
    return;
  }

  const nota1 = parseFloat(nota1Str);
  const nota2 = parseFloat(nota2Str);
  const nota3 = parseFloat(nota3Str);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    resultadoEjercicio2.value = "Por favor, ingresa notas válidas (números).";
    return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;
  let estado = "";

  if (promedio < 4.0) {
    estado = "Reprobado";
  } else if (promedio >= 4.0 && promedio <= 5.9) {
    estado = "Aprobado";
  } else {
    estado = "Excelente";
  }

  resultadoEjercicio2.value = `El promedio es: ${promedio.toFixed(2)}. Estado: ${estado}.`;
};

// Ejercicio 3: Menú de productos
const resultadoEjercicio3 = ref('');
const ejecutarEjercicio3 = () => {
  interface Producto {
    nombre: string;
    precio: number;
  }

  const productos: { [key: number]: Producto } = {
    1: { nombre: "Pan", precio: 500 },
    2: { nombre: "Leche", precio: 1200 },
    3: { nombre: "Queso", precio: 1800 },
  };

  const menu = `
    Ejercicio 3: Productos disponibles:
    1. Pan ($500 c/u)
    2. Leche ($1200 c/u)
    3. Queso ($1800 c/u)

    Por favor, elige una opción (1-3):
  `;

  const opcionStr = prompt(menu);
  if (opcionStr === null) {
    resultadoEjercicio3.value = "Operación cancelada.";
    return;
  }

  const opcion = parseInt(opcionStr);

  if (isNaN(opcion) || !(opcion in productos)) {
    resultadoEjercicio3.value = "Opción inválida. Por favor, elige un número del 1 al 3.";
    return;
  }

  const cantidadStr = prompt(`¿Cuántas unidades de ${productos[opcion].nombre} deseas comprar?`);
  if (cantidadStr === null) {
    resultadoEjercicio3.value = "Operación cancelada.";
    return;
  }

  const cantidad = parseInt(cantidadStr);

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoEjercicio3.value = "Cantidad inválida. Por favor, ingresa un número positivo.";
    return;
  }

  const total = productos[opcion].precio * cantidad;
  resultadoEjercicio3.value = `Has elegido ${productos[opcion].nombre}. Cantidad: ${cantidad}. Total a pagar: $${total}.`;
};
</script>

<template>
  <div class="view-container">
    <div class="explication-section">
      <h1>Ejercicios de JavaScript</h1>
    </div>

    <section class="code-section">
      <h2>¿Qué es `prompt()`?</h2>
      <p>{{ promptExplanation }}</p>
    </section>

    <section class="code-section">
      <h2>Ejercicio 1: Mayor o Menor de Edad</h2>
      <p>Solicita la edad y determina si es mayor o menor de 18 años. El resultado se muestra en la consola.</p>
      <button @click="ejecutarEjercicio1">Ejecutar Ejercicio 1</button>
      <p v-if="resultadoEjercicio1"><strong>Resultado:</strong> {{ resultadoEjercicio1 }}</p>
    </section>

    <section class="code-section">
      <h2>Ejercicio 2: Cálculo de Promedio de Notas</h2>
      <p>Solicita tres notas, calcula el promedio y determina si el estudiante aprueba, reprueba o es excelente.</p>
      <button @click="ejecutarEjercicio2">Ejecutar Ejercicio 2</button>
      <p v-if="resultadoEjercicio2"><strong>Resultado:</strong> {{ resultadoEjercicio2 }}</p>
    </section>

    <section class="code-section">
      <h2>Ejercicio 3: Menú de Productos</h2>
      <p>Muestra un menú de productos, permite elegir una opción y cantidad, y calcula el total a pagar.</p>
      <button @click="ejecutarEjercicio3">Ejecutar Ejercicio 3</button>
      <p v-if="resultadoEjercicio3"><strong>Resultado:</strong> {{ resultadoEjercicio3 }}</p>
    </section>
    <NavigationButtons />
  </div>
</template>

<style scoped>
</style>
