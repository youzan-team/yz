import Vue from 'vue'
import Vuex from 'vuex'
import shop from './shop'
import product from './product'
import order from './order'
import customer from './customer'
import axios from 'axios'

Vue.use(Vuex)

// 封装fetch函数
export function fetch(api, callback) {
  axios({
    method: 'GET',
    url: 'http://localhost:8080' + api
  }).then(res => {
    let data = null;
    if (res.data.err === 0) {
      data = res.data.data
      callback && callback(data)
    }
  }).catch(err => {
    console.log('接口请求异常', err)
  }).then(() => {

  })
}
const store=new Vuex.Store({
  modules:{
    shop,
    product,
    order,
    customer 
  }    
})

export default store