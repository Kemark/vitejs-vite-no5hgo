import { createApp, defineCustomElement } from 'vue';
import './style.css';
import App from './App.vue';
import ComponentsView from './views/ComponentsView.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import 'primevue/resources/themes/lara-dark-teal/theme.css';



// create a custom component
const myApp = defineCustomElement(ComponentsView);
customElements.define('my-app', myApp);

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');