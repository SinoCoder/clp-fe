import Vue from "vue";
import { Button } from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "./locale";

Vue.config.productionTip = false;
Vue.use(Button);

new Vue({
  i18n,
  router,
  store,
  mounted() {
    window.vue = this;
  },
  render: h => h(App)
}).$mount("#app");
