import { fetch } from "./store.js"


const customer = {
  namespaced: true,
  state: {
    customer: [],  //操作处  显示的内容
    customer2: [], //数据出  
    article: 5,   //初始一页显示5条
    page: 1      //第一页
  },
  mutations: {
    updateCustomer(state, payload) {

      state.customer = payload
      state.customer2 = payload
      state.customer = state.customer2.slice(0, 5)

    },
    article(state, payload) {  //改变一页显示几条
      state.article = payload
      //console.log(state.article)
      state.customer = state.customer2.slice((state.page - 1) * state.article, state.page * state.article)
    },
    page(state, payload) {  //改变页数页
      state.page = payload
      //console.log(state.page)
      state.customer = state.customer2.slice((state.page - 1) * state.article, state.page * state.article)
    },
    addCustomer(state, payload) {  //添加用户
      state.customer.push(payload)
      state.customer2.push(payload)
    },
    deleCustomer(state, payload) {
      state.customer.splice(payload, 1) //删除客户
      state.customer2.splice(payload, 1)
    },
    filtrateCustomer(state, payload) {  //筛选
      let arr = []

      console.log(payload)
      if (payload.identity && payload.integral) {  //如果身份和积分都存在
        console.log(1)
        for (let i = 0; i < state.customer2.length; i++) {
          if (state.customer2[i].identity == payload.identity) {
            if (Math.floor(payload.integral) <= Math.floor(state.customer2[i].integral) && Math.floor(state.customer2[i].integral) <= Math.floor(payload.integralEnd)) {
              arr.push(state.customer2[i])
            }
          }
        }
      } else if (payload.identity&&!payload.integral) {     //如果身份存在
        console.log(2)
        for (let i = 0; i < state.customer2.length; i++) {
          if (state.customer2[i].identity == payload.identity) {
            arr.push(state.customer2[i])
          }
        }
      } else {    //如果积分存在
        console.log(3)
        for (let i = 0; i < state.customer2.length; i++) {
          if (Math.floor(payload.integral) <= Math.floor(state.customer2[i].integral) && Math.floor(state.customer2[i].integral) <= Math.floor(payload.integralEnd)) {
            arr.push(state.customer2[i])
          }
        }
      }

      state.customer2 = arr
      console.log(state.customer2)
      state.customer = state.customer2.slice((state.page - 1) * state.article, state.page * state.article)
    }
  },
  actions: {
    getCustomer(store) {
      fetch('/db/customer.json', data => {
        //console.log(data)
        store.commit('updateCustomer', data)
      })
    }
  }
}

export default customer