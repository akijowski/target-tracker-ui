/* eslint-disable vue/multi-word-component-names */
// import devtools from "@vue/devtools";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Tooltip from "primevue/tooltip";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Chart from "primevue/chart";
import Column from "primevue/column";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import App from "./App.vue";

import "primevue/resources/themes/saga-blue/theme.css";
// import 'primevue/resources/themes/saga-green/theme.css';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Button", Button);
app.component("Chart", Chart);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);

app.directive("p-tooltip", Tooltip);
app.mount("#app");

// if (process.env.NODE_ENV === "development") {
//   devtools.connect();
// }
