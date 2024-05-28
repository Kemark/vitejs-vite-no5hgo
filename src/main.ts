import { createApp, defineCustomElement } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-teal/theme.css';


const app = createApp(App);

// create a custom component
const myApp = defineCustomElement(App);
customElements.define('my-app', myApp);

app.use(PrimeVue);
app.mount('#app');