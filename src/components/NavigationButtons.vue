<template>
  <div class="navigation-buttons">
    <button
      v-if="previousRoute"
      @click="goToPrevious"
      class="nav-button previous-button"
    >
      Anterior
    </button>
    <button
      v-if="nextRoute"
      @click="goToNext"
      class="nav-button next-button"
    >
      Siguiente
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const courseRoutes = [
  'variables',
  'operadores',
  'condicionales',
  'ejercicios',
  'bucles',
  'funciones',
  'arrays',
  'objetos',
  'oop',
  'dom',
  'eventos',
  'asincronia',
  'modulos',
  'es6-features',
  'manejo-errores',
  'json',
  'apis',
  'almacenamiento-local',
  'regex',
  'testing',
  'patrones-diseno',
];

const currentIndex = computed(() => {
  return courseRoutes.indexOf(route.name as string);
});

const previousRoute = computed(() => {
  if (currentIndex.value > 0) {
    return courseRoutes[currentIndex.value - 1];
  }
  return null;
});

const nextRoute = computed(() => {
  if (currentIndex.value < courseRoutes.length - 1) {
    return courseRoutes[currentIndex.value + 1];
  }
  return null;
});

const goToPrevious = () => {
  if (previousRoute.value) {
    router.push({ name: previousRoute.value });
  }
};

const goToNext = () => {
  if (nextRoute.value) {
    router.push({ name: nextRoute.value });
  }
};
</script>

<style scoped>
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.previous-button {
  background: linear-gradient(45deg, #007acc, #005f99);
}

.next-button {
  background: linear-gradient(45deg, #28a745, #218838);
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.previous-button:hover {
  background: linear-gradient(45deg, #005f99, #007acc);
}

.next-button:hover {
  background: linear-gradient(45deg, #218838, #28a745);
}

.nav-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
</style>
