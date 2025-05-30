<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToHome = () => {
  router.push({ name: 'home' });
};

// Define los eventos que este componente puede emitir
const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
  emit('toggle-sidebar');
};
</script>

<template>
  <header class="navbar">
    
    <div class="logo">
      <button id="toggle-sidebar-button" @click="toggleSidebar" class="hamburger-menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <img src="/img/gatpñoh.gif" alt="Nucleo CM @marca registrada" />
    </div>

    <h1 class="title">Casi todo sobre Javascript</h1>

    <div class="navbar-links">
      <a href="#" @click.prevent="navigateToHome">Inicio</a>
      <router-link to="/foro" class="nav-link">Foro</router-link>
      

    </div>
  </header>
</template>

<style scoped>
/* Ajustes específicos manteniendo la transparencia */
.navbar {
  opacity: 0.9; /* Opacidad para un efecto de transparencia */
  backdrop-filter: blur(10px); /* Efecto de desenfoque para el fondo */
 
  background: linear-gradient(to right,#1a1a1a, #004a7c, #1a1a1a); /* Gradiente de azul oscuro a un color oscuro para fusionarse con el sidebar */
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px; /* Altura fija del navbar */
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar .logo {
  height: 100%;
  display: flex;
  align-items: center;
  padding:  0; /* Espacio interno vertical */
}

.navbar .logo img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

/* --- EFECTO AL TÍTULO DEL NAVBAR --- */
.navbar .title {
  font-weight: 900;
  font-size: 2.1rem;
  background:linear-gradient(to right,#1a1a1a,white, #004a7c, #4b3d3d,yellow);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 2px 12px #0008, 0 1px 0 #fff2;
  animation: gradient-move 4s linear infinite;
  letter-spacing: -1px;
}

@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.navbar-links {
  display: flex;
  gap: 1rem;
  align-items: center; /* Alinea los elementos verticalmente */
}

.hamburger-menu {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hamburger-menu svg {
  width: 24px;
  height: 24px;
}

.navbar-links a {
  color: white; /* Color del texto blanco */
  text-decoration: none; /* Quitar subrayado */
  font-size: 1.1rem; /* Tamaño de fuente ligeramente más grande */
  padding: 0.5rem 1rem; /* Espaciado interno para hacerlos más clicables */
  border-radius: 5px; /* Bordes ligeramente redondeados */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave para efectos */
}

.navbar-links a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Fondo semitransparente al pasar el ratón */
  color: #e0e0e0; /* Color de texto ligeramente más claro al pasar el ratón */
  text-decoration: underline; /* Subrayado al pasar el ratón */
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem;
  }

  .navbar .logo {
    height: 56px; /* Altura más pequeña en móviles */
  }
}
</style>
