import { createApp } from 'vue'
import App from './App.vue'
import CalculatorApp from './components/CalculatorApp.vue'

const app = createApp(App)
app.component('CalculatorApp', CalculatorApp) // Mendaftarkan komponen
app.mount('#app')