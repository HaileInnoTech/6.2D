import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import router from "./routes/index.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");

