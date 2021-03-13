import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchPage from './components/SwitchPage.vue'
import ButtonPage from './components/ButtonPage.vue'
import DialogPage from './components/DialogPage.vue'
import TabsPage from './components/TabsPage.vue'
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/getStarted.md'
import install from './markdown/install.md'
const md = (string, key) => h(Markdown, { content: string, key })

const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: '', redirect: '/doc/intro' },
                { path: "intro", component: md(intro, 'intro') },
                { path: "get-started", component: md(getStarted, 'getStarted') },
                { path: "install", component: md(install, 'install') },
                { path: 'switch', component: SwitchPage },
                { path: 'button', component: ButtonPage },
                { path: 'dialog', component: DialogPage },
                { path: 'tabs', component: TabsPage },
            ]
        }
    ]
})