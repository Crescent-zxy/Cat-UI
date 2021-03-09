import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import {
    createWebHashHistory,
    createRouter
} from 'vue-router'
import Home from './components/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')