import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style/typo.css"
import router from "./routes/index"

const app = createApp(App)
app.use(router)
app.mount('#app')
