import axios from 'axios'

function fetch(api, callback) {
  axios({
    method: 'GET',
    url: 'http://localhost:8080' + api
  }).then(res => {
    let data = null;
    if (res.data.err === 0) {
      data = res.data
      callback && callback(data)
    }
  }).catch(err => {
    console.log('接口请求异常', err)
  }).then(() => {

  })
}

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
        store.commit('updateNewsArr', data.data)
      })
    },
    // 请求表格数据
    getTableData(store) {
      fetch('/db/tableData.json', data =>{
        console.log(data)
        store.commit('updateTableData',data.tableData)
      } )
    }
  }
}

export default shop