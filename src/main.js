import Vue from 'vue';
import App from './App.vue';
import data_bank from './data_import';
import output from './data_func';


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');



//output(data_bank.deposit);
//output(data_bank.currency);

