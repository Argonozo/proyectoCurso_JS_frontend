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

@media (max-width: 768px) {
  #hero {
    padding: 3rem 1rem; /* Slightly reduced vertical padding */
  }
  #hero h1 {
    font-size: 2rem; /* Reduced font size */
  }
  #hero p {
    font-size: 1.1rem; /* Reduced font size */
  }
}

@media (max-width: 480px) {
  #hero {
    padding: 2rem 1rem; /* Further reduced vertical padding */
  }
  #hero h1 {
    font-size: 1.75rem; /* Further reduced font size */
  }
  #hero p {
    font-size: 1rem; /* Further reduced font size */
  }
}
</style>
