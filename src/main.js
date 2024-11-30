import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import english from './langs/english'
import arabic from './langs/arabic'
import japanese from './langs/japanese'


const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en',
    // fallbackLocale: 'ar',
    fallbackLocale: ['ar', 'ja'],
    messages: {
        'en': english.messages,
        'ar': arabic.messages,
        'ja': japanese.messages
    },
    modifiers: {
        snakeCase: str => str.split(' ').join('_')
    },
    datetimeFormats: {
        'en': english.dateTimeFormats,
        'ar': arabic.dateTimeFormats,
        'ja': japanese.dateTimeFormats
    },
    numberFormats: {
        'en': english.numberFormats,
        'ar': arabic.numberFormats,
        'ja': japanese.numberFormats
    }
})


const app = createApp(App)
app.use(i18n)
app.mount('#app')
