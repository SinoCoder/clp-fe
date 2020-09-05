import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash/core";
import "./registerServiceWorker";
import globalComponents from "./register/globalComponents";

Vue.config.productionTip = false;

Vue.use(globalComponents);

const i18n = new VueI18n({
  locale: "zhCN"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
