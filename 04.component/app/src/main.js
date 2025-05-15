import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MySimpleComponent from './components/registration/SimpleComponent.vue'

const app = createApp(App);

app.component('my-simple-component', MySimpleComponent);

app.mount('#app');
