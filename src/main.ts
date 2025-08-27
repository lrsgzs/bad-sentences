import { createApp } from 'vue';
import { router } from '@/router';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@/styles/app.css';
import App from './App.vue';

const app = createApp(App);
Reflect.set(window, 'vue', app);

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
    },
    components,
    directives,
});

app.use(router);
app.use(vuetify);
app.mount('#app');
