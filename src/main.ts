// import devtools from "@vue/devtools";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import App from "./App.vue";

import "primevue/resources/themes/saga-blue/theme.css";
// import 'primevue/resources/themes/saga-green/theme.css';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(PrimeVue);
app.directive("p-tooltip", Tooltip);
app.mount("#app");

// if (process.env.NODE_ENV === "development") {
//   devtools.connect();
// }
