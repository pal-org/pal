import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import 'animate.css';

// import axios from 'axios';
// import VueAxios from 'vue-axios';

// Vue.use(normalize);
// Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
