import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { VueFire, VueFireAuth } from 'vuefire'


import { firebase } from './firebase'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(VueFire, {
    firebaseApp: firebase,
    modules: [VueFireAuth()]
})

app.mount('#app')
