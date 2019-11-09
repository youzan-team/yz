
import { fetch } from "./store.js"

const shop = {
  namespaced: true,
  state: {
    newsArr: [],
    tableData:[]
  },
  mutations: {
    updateNewsArr(state, payload) {
      state.newsArr = payload
    },
    updateTableData(state,payload) {
      state.tableData = payload
    }
  },
  actions: {
    // 请求新闻列表
    getNewsArr(store) {
      fetch('/db/news.json', data => {
        console.log(data)
        store.commit('updateNewsArr', data)
      })
    },
    // 请求表格数据
    getTableData(store) {
      fetch('/db/tableData.json', data =>{
        console.log(data)
        store.commit('updateTableData',data)
      } )
    }
  }
}

export default shop