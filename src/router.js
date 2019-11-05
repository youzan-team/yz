import Vue from "vue";
import  VueRouter from "vue-router"

import Customer from "@/views/customer/Customer.vue"
import Order from "@/views/order/Order.vue"
import Product from "@/views/product/Product.vue"
import Shop from "@/views/shop/Shop.vue"



Vue.use(VueRouter) //在vue中使用vue-router

const router = new VueRouter({
    routes: [
      {
        path:'/',
        redirect:'/shop'
      },
      {
        path:'/shop',
        component:Shop
      },
      {
        path:'/product',
        component:Product
      },
      {
        path:'/order',
        component:Order
      },
      {
        path:'/customer',
        component:Customer
      }
    ]
}) 
export default router;