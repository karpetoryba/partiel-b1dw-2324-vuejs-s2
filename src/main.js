import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createMemoryHistory } from "vue-router";
import { createRouter } from "vue-router";
import RegistrationForm from "./components/RegistrationForm.vue";
import ActivityTable from "./views/ActivityTable.vue";
import Session from "./views/Session.vue";

const routes = [
  { path: "/", component: RegistrationForm },
  { path: "/activitytable", component: ActivityTable },
  { path: "/session", component: Session },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
