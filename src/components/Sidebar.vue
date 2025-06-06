<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['close-sidebar']); // Define el evento 'close-sidebar'

const router = useRouter();

const navigateTo = (routeName: string) => {
  router.push({ name: routeName });
  emit('close-sidebar'); // Emitir el evento para cerrar el sidebar
};
</script>

<template>
  <nav class="sidebar" :class="{ 'collapsed': !props.isExpanded }">
    <ul>
      <li>
        <a href="#" @click.prevent="navigateTo('variables')">
          <span v-if="props.isExpanded">Tipos de datos y variables</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('operadores')">
          <span v-if="props.isExpanded">Operadores</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('condicionales')">
          <span v-if="props.isExpanded">Condicionales</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('ejercicios')" class="exercise-link">
          <span v-if="props.isExpanded">Ejercicios</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('bucles')">
          <span v-if="props.isExpanded">Bucles</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('funciones')">
          <span v-if="props.isExpanded">Funciones</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('arrays')">
          <span v-if="props.isExpanded">Arrays</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('objetos')">
          <span v-if="props.isExpanded">Objetos</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('oop')">
          <span v-if="props.isExpanded">Programación Orientada a Objetos</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('dom')">
          <span v-if="props.isExpanded">Manipulación del DOM</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('eventos')">
          <span v-if="props.isExpanded">Eventos</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('asincronia')">
          <span v-if="props.isExpanded">Asincronía</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('modulos')">
          <span v-if="props.isExpanded">Módulos</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('es6-features')">
          <span v-if="props.isExpanded">Características ES6+</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('manejo-errores')">
          <span v-if="props.isExpanded">Manejo de Errores</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('json')">
          <span v-if="props.isExpanded">JSON</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('apis')">
          <span v-if="props.isExpanded">APIs y Fetch</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('almacenamiento-local')">
          <span v-if="props.isExpanded">Almacenamiento Local</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('regex')">
          <span v-if="props.isExpanded">Expresiones Regulares</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('testing')">
          <span v-if="props.isExpanded">Testing</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="navigateTo('patrones-diseno')">
          <span v-if="props.isExpanded">Patrones de Diseño</span>
        </a>
      </li>
      <!-- Añadir más elementos de la lista aquí si es necesario -->
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed; /* Cambiado de sticky a fixed */
  top: 72px; /* Altura del Navbar */
  left: 0;
  height: calc(100vh - 72px); /* Altura total de la ventana menos la altura del Navbar */
  width: 220px; /* Ancho por defecto expandido */
  background: linear-gradient(to right,#1a1a1a, #004a7c); /* Gradiente de azul oscuro a un color oscuro */
  color: white;
  border-radius: 0 var(--border-radius) var(--border-radius) 0; /* Solo borde derecho redondeado */
  overflow-y: auto;
  padding: 0.6rem;
  transition: width 0.3s ease, padding 0.3s ease; /* Transición para el ancho y padding */
  z-index: 999; /* Asegurar que esté debajo del Navbar pero sobre el contenido */
  box-shadow: var(--shadow);
}

.sidebar.collapsed {
  width: 0px; /* Ancho cuando está contraído */
  padding: 0; /* Eliminar padding */
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 6px;
  background: transparent; /* Fondo transparente */
  backdrop-filter: blur(calc(var(--blur-amount) / 2));
  border: var(--glass-border);
  transition: all 0.3s ease;
  text-align: center; /* Centrar el texto/abreviatura */
}

.sidebar.collapsed ul li {
  padding: 0; /* Eliminar padding */
  height: 0; /* Ocultar completamente */
  overflow: hidden; /* Asegurar que no se vea nada */
  margin-bottom: 0; /* Eliminar margen */
  opacity: 0; /* Hacer invisible */
}

.sidebar ul li:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: block;
  width: 100%;
  white-space: nowrap; /* Evitar que el texto se rompa en varias líneas */
  overflow: hidden; /* Ocultar el texto que se desborda */
  text-overflow: ellipsis; /* Añadir puntos suspensivos si el texto es demasiado largo */
}


/* Media queries para responsividad (mantener el comportamiento actual en móvil) */
@media (max-width: 768px) {
  .sidebar {
    position: relative; /* Vuelve a ser relativo en móvil */
    top: 0;
    left: 0;
    height: auto;
    max-height: 200px; /* O el valor que desees para el scroll en móvil */
    width: 100%; /* Ocupa todo el ancho en móvil */
    border-radius: var(--border-radius); /* Restaurar bordes redondeados */
    padding: 1rem;
    display: block; /* Explicit display type */
  }

  .sidebar.collapsed {
    width: 100%; /* En móvil, el colapsado no cambia el ancho, pero se oculta */
    /* padding: 1rem; */ /* Irrelevant due to display: none */
    display: none; /* Ocultar cuando está colapsado en móvil */
  }

  .sidebar ul li {
    text-align: left; /* Alinear a la izquierda en móvil */
  }

  .sidebar ul li a span[title] {
    font-size: 1em; /* Restaurar tamaño de fuente en móvil */
  }
}

/* Estilos para el scrollbar */
.sidebar::-webkit-scrollbar {
  width: 8px; /* Ancho del scrollbar */
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05); /* Fondo de la pista del scrollbar */
  border-radius: 10px;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2); /* Color del "pulgar" del scrollbar */
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1); /* Borde para el efecto glass */
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3); /* Color del "pulgar" al pasar el ratón */
}
</style>
