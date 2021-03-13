import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchPage from './components/SwitchPage.vue'
import ButtonPage from './components/ButtonPage.vue'
import DialogPage from './components/DialogPage.vue'
import TabsPage from './components/TabsPage.vue'
import DocPage from './components/DocPage.vue'
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

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
                { path: "intro", component: md('intro') },
                { path: "get-started", component: md('getStarted') },
                { path: "install", component: md('install') },
                { path: 'switch', component: SwitchPage },
                { path: 'button', component: ButtonPage },
                { path: 'dialog', component: DialogPage },
                { path: 'tabs', component: TabsPage },
            ]
        }
    ]
})