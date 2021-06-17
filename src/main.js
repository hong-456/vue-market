import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

import mitt from 'mitt'

const app = createApp(App)
app.config.globalProperties.$bus = new mitt()
app.
use(router).
use(store).
use(toast).
mount('#app')
