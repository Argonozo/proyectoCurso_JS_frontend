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
  background: linear-gradient(135deg, var(--color-background-soft, #f8f8f8) 0%, var(--color-background-mute, #f2f2f2) 100%); /* Light neutral gradient */
  color: var(--neutral-light-text); /* Dark text for light background */
  text-align: center;
  padding: 5rem 1.5rem; /* Increased padding */
}

#hero .hero-content {
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Softer, larger shadow */
  border-radius: 12px; /* More pronounced rounding */
  padding: 2.5rem; /* Added internal padding */
  /* background-color: var(--neutral-light-bg); /* Optional: if #hero bg is colored */
}

#hero h1 {
  font-family: var(--font-family-heading);
  font-size: 3.25rem; /* Increased font size */
  line-height: 1.2; /* Adjusted line height */
  margin-bottom: 1.5rem; /* Adjusted margin */
  color: var(--color-heading); /* Use heading color variable */
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); Removed */
}

#hero p {
  font-family: var(--font-family-body);
  font-size: 1.15rem; /* Adjusted font size */
  margin-bottom: 2.5rem; /* Adjusted margin */
  color: var(--color-text); /* Use text color variable */
  /* text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); Removed */
}

#btn-start {
  background-color: var(--evolved-clarity-accent-amber);
  color: var(--neutral-dark-text); /* Dark text on amber */
  font-family: var(--font-family-heading);
  font-weight: bold;
  padding: 1rem 2rem; /* Increased padding */
  font-size: 1rem; /* Kept font size, or adjust e.g. 1.1rem */
  border: none; /* Removed border */
  border-radius: 6px; /* Consistent rounding */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out; /* Enhanced transition */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Added subtle shadow */
  /* text-shadow: black; Removed */
}

#btn-start:hover {
  background-color: #e6a200; /* Darker amber */
  transform: translateY(-2px); /* Slight lift effect */
}

@media (max-width: 768px) {
  #hero {
    padding: 4rem 1rem; /* Adjusted padding */
  }
  #hero h1 {
    font-size: 2.5rem; /* Adjusted relative to new base */
  }
  #hero p {
    font-size: 1.1rem; /* Kept, good for mobile */
  }
}

@media (max-width: 480px) {
  #hero {
    padding: 3rem 1rem; /* Adjusted padding */
  }
  #hero h1 {
    font-size: 2rem; /* Adjusted relative to new base */
  }
  #hero p {
    font-size: 1rem; /* Kept, good for small mobile */
  }
}
</style>
</style>
