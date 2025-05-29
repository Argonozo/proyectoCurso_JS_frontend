import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VariablesView from '../views/VariablesView.vue';
import OperatorsView from '../views/OperatorsView.vue';
import CondicionalesView from '../views/CondicionalesView.vue';
import EjerciciosView from '../views/EjerciciosView.vue';
import LoopsView from '../views/LoopsView.vue';
import FunctionsView from '../views/FunctionsView.vue';
import ArraysView from '../views/ArraysView.vue';
import ObjectsView from '../views/ObjectsView.vue';
import OOPView from '../views/OOPView.vue';
import DOMView from '../views/DOMView.vue';
import EventsView from '../views/EventsView.vue';
import AsyncView from '../views/AsyncView.vue';
import ModulesView from '../views/ModulesView.vue';
import ES6FeaturesView from '../views/ES6FeaturesView.vue';
import ErrorHandlingView from '../views/ErrorHandlingView.vue';
import JSONView from '../views/JSONView.vue';
import APIsView from '../views/APIsView.vue';
import StorageView from '../views/StorageView.vue';
import RegexView from '../views/RegexView.vue';
import TestingView from '../views/TestingView.vue';
import DesignPatternsView from '../views/DesignPatternsView.vue';
import ForoView from '../views/ForoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Siempre desplázate a la parte superior
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/foro',
      name: 'foro',
      component: ForoView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/variables',
      name: 'variables',
      component: VariablesView,
    },
    {
      path: '/operadores',
      name: 'operadores',
      component: OperatorsView,
    },
    {
      path: '/condicionales',
      name: 'condicionales',
      component: CondicionalesView,
    },
    {
      path: '/ejercicios',
      name: 'ejercicios',
      component: EjerciciosView,
    },
    {
      path: '/bucles',
      name: 'bucles',
      component: LoopsView,
    },
    {
      path: '/funciones',
      name: 'funciones',
      component: FunctionsView,
    },
    {
      path: '/arrays',
      name: 'arrays',
      component: ArraysView,
    },
    {
      path: '/objetos',
      name: 'objetos',
      component: ObjectsView,
    },
    {
      path: '/oop',
      name: 'oop',
      component: OOPView,
    },
    {
      path: '/dom',
      name: 'dom',
      component: DOMView,
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: EventsView,
    },
    {
      path: '/asincronia',
      name: 'asincronia',
      component: AsyncView,
    },
    {
      path: '/modulos',
      name: 'modulos',
      component: ModulesView,
    },
    {
      path: '/es6-features',
      name: 'es6-features',
      component: ES6FeaturesView,
    },
    {
      path: '/manejo-errores',
      name: 'manejo-errores',
      component: ErrorHandlingView,
    },
    {
      path: '/json',
      name: 'json',
      component: JSONView,
    },
    {
      path: '/apis',
      name: 'apis',
      component: APIsView,
    },
    {
      path: '/almacenamiento-local',
      name: 'almacenamiento-local',
      component: StorageView,
    },
    {
      path: '/regex',
      name: 'regex',
      component: RegexView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView,
    },
    {
      path: '/patrones-diseno',
      name: 'patrones-diseno',
      component: DesignPatternsView,
    },
  ],
});

export default router
