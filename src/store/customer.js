
const customer={
    namespaced: true,
    state:{
      aa:1
    },
    mutations:{
      up(state){
        state.aa=122
      }
    },
    actions:{
      aad(store){
        console.log(11165)
        store.commit('up')
      }
    }
  }
  
  export default customer