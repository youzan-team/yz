import Vue from "vue";
import  VueRouter from "vue-router"

// import Home from "@/components/home.vue"//引入页面


Vue.use(VueRouter) //在vue中使用vue-router

const router = new VueRouter({
    routers: [
        // {path:'/home',component:home.vue}
    ]
}) 
export default router;