import './assets/styles.css'

import { createApp, type ComponentPublicInstance } from 'vue' // Update import
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Global error handler
app.config.errorHandler = (err: unknown, instance: ComponentPublicInstance | null, info: string) => {
  console.error("Unhandled error:", err);
  if (instance) {
    // Attempt to get component name or UID. Note: instance.$.type.name might not always be available
    // depending on the component definition (e.g., script setup without explicit name).
    // instance.$.uid provides a unique identifier for the component instance.
    const componentName = instance.$.type.name || 'AnonymousComponent';
    console.error(`Occurred in component: ${componentName} (uid: ${instance.$.uid})`);
  }
  console.error("Error info:", info);
  // Add more sophisticated error handling here in the future (e.g., reporting to a service)
};

app.mount('#app')
