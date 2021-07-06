import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import { setI18n } from "vue-composable";
import Locales from './services/i18n.js';
import midataPortal from 'vue-midata/midataPortal.js';
import Vue3Components, { Filters } from 'basic-vue3-components';

const i18n = setI18n({
    locale: "en",
    fallback: "en",
    messages: Locales
});

const app = createApp({    
    created() {        
      midataPortal.init(this.$route);
      i18n.locale.value = midataPortal.language;       
      
    },
    render: function () { return h(App) },
});

app.config.globalProperties.$filters = Filters;
app.config.globalProperties.$t = i18n.$ts;

app.use(router).use(i18n).use(Vue3Components);
router.isReady().then(() => app.mount('#app'));

