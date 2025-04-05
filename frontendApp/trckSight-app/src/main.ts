import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Import vuetify
import router from './router'; // Import your router

const app = createApp(App);

app.use(vuetify); // Use vuetify
app.use(router);  // Use vue-router
app.mount('#app');
