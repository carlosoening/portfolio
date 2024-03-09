import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import { pt_BR } from '../src/locales/pt_BR'
import { en } from '../src/locales/en'

const languages = {
    pt_BR,
    en
}

const i18n = createI18n({
    locale: 'pt_BR',
    fallbackLocale: 'pt_BR',
    messages: languages
})

createApp(App).use(i18n).mount('#app')
