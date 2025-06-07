<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  isSidebarExpanded: Boolean
});

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
      <button
        id="toggle-sidebar-button"
        @click="toggleSidebar"
        class="hamburger-menu"
        :aria-expanded="props.isSidebarExpanded.toString()"
        aria-controls="sidebar-nav"
        aria-label="Toggle navigation menu"
      >
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
.navbar {
  background: var(--evolved-clarity-primary); /* New background color */
  color: var(--neutral-light-bg); /* New text color */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 1.5rem; /* Updated padding */
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Added box-shadow */
}

.navbar .logo {
  height: 100%;
  display: flex;
  align-items: center;
  padding:  0;
}

.navbar .logo img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.navbar .title {
  font-family: var(--font-family-heading); /* Explicitly set font family */
  font-weight: 900; /* Retain existing weight or adjust as per new guidelines */
  font-size: 2rem; /* Adjusted font size */
  color: var(--neutral-light-bg); /* Solid text color */
  letter-spacing: normal; /* Adjusted letter spacing */
  /* Removed gradient, animation, and text-shadow properties */
}

.navbar-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.hamburger-menu {
  background: none;
  border: none;
  color: var(--neutral-light-bg); /* Updated color */
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px; /* Added border-radius */
  transition: background-color 0.2s ease-in-out; /* Updated transition */
}

.hamburger-menu:hover,
.hamburger-menu:focus {
  background-color: rgba(255, 255, 255, 0.1); /* Subtle hover/focus feedback */
}

.hamburger-menu svg {
  width: 24px;
  height: 24px;
  /* stroke="currentColor" is in the template, stroke-width="2" is kept */
}

.navbar-links a {
  font-family: var(--font-family-body); /* Use body font for nav links */
  font-weight: 700; /* Bolder weight for nav links */
  color: var(--neutral-light-bg); /* Updated text color */
  text-decoration: none;
  font-size: 1rem; /* Adjusted font size */
  padding: 0.5rem 1rem;
  border-radius: 6px; /* Updated border-radius */
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; /* Updated transition */
}

.navbar-links a:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Subtle hover background */
  color: var(--neutral-light-bg); /* Keep text color or slightly adjust if needed */
  /* text-decoration: underline; Removed */
}

/* Media queries para responsividad */
/* Tablet Styles */
@media (max-width: 1023px) and (min-width: 769px) {
  .navbar .title {
    font-size: 1.8rem; /* Kept relative, seems fine */
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar {
    padding: 0 0.75rem; /* Adjusted padding for mobile */
  }

  .navbar .logo {
    height: 56px; /* Altura más pequeña en móviles */
  }

  .navbar .title {
    font-size: 1.5rem; /* Kept relative, seems fine */
  }
}

@media (max-width: 400px) {
  .navbar .title {
    font-size: 1.2rem; /* Kept relative, seems fine */
  }
}
</style>
</style>
