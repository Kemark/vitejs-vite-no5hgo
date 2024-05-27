import { createApp, defineCustomElement } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-teal/theme.css';

const app = createApp(App);

// create a custom component
const element = defineCustomElement(App);
customElements.define('my-app', element);

app.use(PrimeVue);
app.mount('#app');
