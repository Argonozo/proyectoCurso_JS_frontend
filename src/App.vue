<script setup lang="ts">
// Importaciones de componentes se añadirán aquí
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Console from './components/Console.vue';
import Footer from './components/Footer.vue';

// Lógica de Vue aquí (Composition API)
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

// Estado para controlar si la consola de código es visible.
// Inicialmente, se establece en 'false' para que la consola no se muestre al cargar la página.
const isConsoleVisible = ref(false);

// Estado para controlar si el sidebar está expandido o contraído.
const isSidebarExpanded = ref(false); // true = expandido, false = contraído

// Nuevo estado para detectar si el ratón está cerca del borde izquierdo
const isMouseNearLeftEdge = ref(false);
const activationZoneWidth = 30; // Ancho en píxeles de la zona de activación

// Nuevo estado para rastrear cómo se abrió el sidebar
const sidebarOpenedBy = ref<'hover' | 'button' | null>(null);

// Función para alternar la visibilidad del sidebar.
const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value;
  if (isSidebarExpanded.value) {
    sidebarOpenedBy.value = 'button';
  } else {
    sidebarOpenedBy.value = null;
  }
};

// Calcula el margen izquierdo del contenido principal basado en el estado del sidebar.
const route = useRoute();

const isHomePage = computed(() => route.name === 'home');

const mainContentMarginLeft = computed(() =>
  isSidebarExpanded.value ? '220px' : '0px'
);

// Referencia al componente 'Console' para poder llamar a sus métodos internos,
// como 'loadCode', desde el componente padre 'App.vue'.
const consoleRef = ref<InstanceType<typeof Console> | null>(null);
const sidebarRef = ref<InstanceType<typeof Sidebar> | null>(null); // Referencia al sidebar

// Función para alternar la visibilidad de la consola.
// Se usa para mostrar u ocultar la consola al hacer clic en el botón correspondiente.
const toggleConsole = () => {
  isConsoleVisible.value = !isConsoleVisible.value;
};

// Función para cargar código en consola, llamada desde los componentes de las unidades
// Función para cargar un fragmento de código en la consola.

// Es llamada por los componentes de las unidades (ej. VariablesView, OperatorsView)
// cuando el usuario hace clic en un botón "Agregar a la Consola".
const loadCodeIntoConsole = (code: string) => {
  console.log('loadCodeIntoConsole called with code:', code); // Agregado para depuración
  if (consoleRef.value) {
    consoleRef.value.loadCode(code); // Carga el código en el área de texto de la consola.
    isConsoleVisible.value = true; // Hace que la consola sea visible automáticamente.
  }
};

const handleMouseMove = (event: MouseEvent) => {
  // Solo activar si no estamos en una pantalla pequeña (ej. móvil)
  if (window.innerWidth > 768) {
    const sidebarElement = sidebarRef.value?.$el as HTMLElement;
    const isOverSidebar = sidebarElement && event.clientX < sidebarElement.offsetWidth && event.clientX > 0;

    if (event.clientX < activationZoneWidth) {
      isMouseNearLeftEdge.value = true;
      if (!isSidebarExpanded.value) {
        isSidebarExpanded.value = true;
      }
    } else if (!isOverSidebar) {
      isMouseNearLeftEdge.value = false;
      // Solo contraer si fue expandido por hover y el ratón ya no está sobre el sidebar
      if (isSidebarExpanded.value && sidebarOpenedBy.value === 'hover') {
        isSidebarExpanded.value = false;
        sidebarOpenedBy.value = null;
      }
    }
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('scroll', handleScroll);
  document.addEventListener('mousemove', handleMouseMove); // Añadir listener para mousemove
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('scroll', handleScroll);
  document.removeEventListener('mousemove', handleMouseMove); // Limpiar listener
});

const handleClickOutside = (event: MouseEvent) => {
  // Lógica para la consola
  const consoleElement = consoleRef.value?.$el as HTMLElement;
  const toggleConsoleButton = document.getElementById('toggle-console');

  if (isConsoleVisible.value && consoleElement && !consoleElement.contains(event.target as Node) &&
      (!toggleConsoleButton || !toggleConsoleButton.contains(event.target as Node))) {
    isConsoleVisible.value = false;
  }

  // Lógica para el sidebar
  const sidebarElement = sidebarRef.value?.$el as HTMLElement;
  const toggleSidebarButton = document.getElementById('toggle-sidebar-button');

  // Si el sidebar está expandido y el clic no fue dentro del sidebar ni en el botón de hamburguesa,
  // contraer el sidebar.
  if (isSidebarExpanded.value && sidebarElement && !sidebarElement.contains(event.target as Node) &&
      (!toggleSidebarButton || !toggleSidebarButton.contains(event.target as Node))) {
    isSidebarExpanded.value = false;
    sidebarOpenedBy.value = null; // Resetear el estado de apertura
  }
};

const handleScroll = (event: Event) => {
  const sidebarElement = sidebarRef.value?.$el as HTMLElement;
  // Si el sidebar está expandido y el scroll no es dentro del sidebar,
  // contraer el sidebar.
  if (isSidebarExpanded.value && sidebarElement && !sidebarElement.contains(event.target as Node)) {
    isSidebarExpanded.value = false;
    sidebarOpenedBy.value = null; // Resetear el estado de apertura
  }
};

// Observar cambios en isSidebarExpanded para asegurar que el margen se actualice
watch(isSidebarExpanded, (newValue) => {
  // No es necesario hacer nada aquí directamente, ya que mainContentMarginLeft es un computed property
  // que reacciona automáticamente a los cambios de isSidebarExpanded.
});

</script>

<template>
  <Navbar @toggle-sidebar="toggleSidebar" />
  <div class="container">
    <Sidebar :is-expanded="isSidebarExpanded" ref="sidebarRef" @close-sidebar="isSidebarExpanded = false" />
    <main
      class="main-content"
      :class="{ 'main-content--transparent': isHomePage }"
      :style="{ marginLeft: mainContentMarginLeft }"
    >
      <router-view @load-code="loadCodeIntoConsole"></router-view>
    </main>
  </div>

  <Console :is-visible="isConsoleVisible" @toggle-visibility="toggleConsole" ref="consoleRef" />
  <button id="toggle-console" @click="toggleConsole">
    {{ isConsoleVisible ? 'Ocultar Consola' : 'Mostrar Consola' }}
  </button>

  <Footer />
</template>

<style scoped>
/* Los estilos específicos de App.vue se añadirán aquí si son necesarios.
   La mayoría de los estilos globales ya están en src/assets/styles.css. */

/* Estilos para el layout principal si no están en styles.css */
.container {
  display: flex; /* Usar flexbox en lugar de grid para el layout principal */
  gap: 20px;
  padding: 20px;
  /* Eliminado: height: calc(100vh - 72px); para permitir que el contenido empuje el footer */
  /* No se necesita transition para grid-template-columns aquí */
}

.main-content {
  flex: 1; /* Permite que el contenido principal ocupe el espacio restante */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Apilar en móvil */
    gap: 10px;
    padding: 10px;
  }
}

/* Ajuste para el botón de la consola */
#toggle-console {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  padding: 8px 16px;
  background-color: #005f99;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#toggle-console:hover {
  background-color: #007acc;
}

</style>
