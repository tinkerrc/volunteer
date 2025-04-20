/*
 =========================================================
 * Vue Black Dashboard - v1.1.3
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2024 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
 import Vue from "vue";
 import VueRouter from "vue-router";
 import RouterPrefetch from "vue-router-prefetch";
 import App from "./App";
 import router from "./router/index";
 import BlackDashboard from "./plugins/blackDashboard";
 import i18n from "./i18n";
 import "./registerServiceWorker";
 import { Auth0Plugin } from './auth';

 import { domain, clientId } from '../auth_config.json';

 Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    const target = appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname;

    if (router.currentRoute.path !== target) {
      router.push(target);
    }
  }
});
 Vue.config.productionTip = false;

 Vue.use(BlackDashboard);
 Vue.use(VueRouter);
 Vue.use(RouterPrefetch);
 
 new Vue({
   router,
   i18n,
   render: (h) => h(App),
 }).$mount("#app");
 
