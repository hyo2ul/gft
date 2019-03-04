import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import App from './App.vue';

import router from './router';

/* Vue UI Libraries */
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import '../semantic/dist/semantic.min.css';
import store from './store';

Vue.use(SuiVue);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');
