import "./assets/common.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Define la URL base de la aplicación
const baseURL = "/";

// Define la URL base de la aplicación como propiedad global
app.config.globalProperties.$baseUrl = baseURL;

app.mount("#app");
