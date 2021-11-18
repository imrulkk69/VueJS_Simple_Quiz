import { createWebHistory, createRouter } from "vue-router";
import Start from '../view/Start.vue';
import Quiz from '../view/Quiz.vue';
import Finish from '../view/Finish.vue';

const routes = [
    {
      path: "/",
      name: "Start",
      component: Start
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: Quiz
    },
    {
        path: "/finish",
        name: "Finish",
        component: Finish
    },
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes
});
  
export default router;