import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faForward,
  faBackward,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Logo from "./components/Logo.vue";

library.add(faForward, faBackward, faPlayCircle, faPauseCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("logo-section", Logo);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// const hh = {
//   template: ``,
// };
