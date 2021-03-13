import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchPage from './components/SwitchPage.vue'
import ButtonPage from './components/ButtonPage.vue'
import DialogPage from './components/DialogPage.vue'
import TabsPage from './components/TabsPage.vue'
import DocPage from './components/DocPage.vue'

import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: '', component: DocPage },
                { path: 'intro', component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                { path: 'switch', component: SwitchPage },
                { path: 'button', component: ButtonPage },
                { path: 'dialog', component: DialogPage },
                { path: 'tabs', component: TabsPage },
            ]
        }
    ]
})