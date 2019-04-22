import Vue from 'vue'
import Router from 'vue-router'
import shouye from "./shouye/index.js";
import fenlei from "./fenlei/index.js";
import shopcar from "./shopcar/index.js";
import mine from "./mine/index.js";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/shouye"
    },
    shouye,
    fenlei,
    shopcar,
    mine,
    {
      path:"**",
      redirect:"/shouye"
    }
  ]
})
