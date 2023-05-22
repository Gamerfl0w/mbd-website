import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')

// app.use(router)

// app.mount('#app')
