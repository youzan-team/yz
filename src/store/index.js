import Vue from 'vue'
import Vuex from 'vuex'
import shop from './shop'
import product from './product'
import order from './order'
import customer from './customer'

Vue.use(Vuex)

const store=new Vuex.Store({
  modules:{
    shop,
    product,
    order,
    customer 
  }    
})

export default store