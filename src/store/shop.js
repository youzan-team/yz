 import axios from 'axios'
 
function fetch(api,callback) {
     axios({
       method:'GET',
       url:'http://localhost:8080'+api
     }).then( res => {
       let data = null;
       if(res.data.err === 0) {
         data = res.data.data
         callback && callback(data)
       }
     }).catch( err => {
        console.log('接口请求异常', err)
     }).then(() => {

     })
}

const shop={
    namespaced: true,
    state:{
     newsArr:[]
    },
    mutations:{
      updateNewsArr(state,payload){
        state.newsArr= payload

      }
    },
    actions:{
       getNewsArr(store) {
         fetch('/db/news.json',data => {
          console.log(data)
          store.commit('updateNewsArr', data)
         })
       }
    }
  }
  
  export default shop