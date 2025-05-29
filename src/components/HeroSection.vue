<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleStartClick = () => {
  router.push({ name: 'home' }).then(() => {
    const element = document.getElementById('fundamentos-js');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
</script>

<template>
  <section id="hero">
    <div class="hero-content">
      <h1>Domina JavaScript desde Cero</h1>
      <p>
        Aprende paso a paso, practica en la consola integrada y conviértete en
        un experto.
      </p>
      <button id="btn-start" @click="handleStartClick">¡Empezar Ahora!</button>
    </div>
  </section>
</template>

<style scoped>
/* Hero introductorio */
#hero {
  background: transparent;
  color: white;
  text-align: center;
  padding: 4rem 1rem;
}

#hero .hero-content {
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Sombra sutil para el contenido del hero */
  border-radius: 8px; /* Borde redondeado para el contenido del hero */
}

#hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra de texto para h1 */
}

#hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Sombra de texto para p */
}

#btn-start {
  background-color: yellow;
  color: black;

  
  border: black;
  text-shadow: black;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

#btn-start:hover {
  background-color: #f0f0f0;
}

/* Style the grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
  gap: 1rem;
}

/* Style each grid item */
.grid-item {
  display: flex;
  flex-direction: row; /* Icon and text in a row */
  align-items: center; /* Vertically align icon and text */
  gap: 0.5rem; /* Space between icon and text */
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
}

.grid-item .icon {
  font-size: 1.5rem;
  color: #007bff; /* Bootstrap primary color */
}

.grid-item h3 {
  font-size: 1.2rem;
  margin: 0; /* Remove default margin */
}

.grid-item p {
  font-size: 1rem;
  margin: 0; /* Remove default margin */
}
</style>
