import { fetch } from "./store.js"

const product = {
    namespaced: true,
    state: {
        msg: 'le-product',
        productArr: [],
        productArr2:[]
    },
    mutations: {
        //删除
        updateDelect(state,payload){
            console.log("___",state)
            console.log("__",payload)
            let cutArr1=state.productArr2
            let cutArr2=payload
            for(let i=0;i<cutArr1.length;i++){
                for(let j=0;j<cutArr2.length; j++){
                    if(cutArr1[i].id ===cutArr2[j].id){
                        cutArr1.splice(i,1)
                    }
                }
            }
            state.productArr1=cutArr1
        },
        //分页
        updateProductArr(state,payload){
            if(payload.list){
                state.productArr=payload.list
            }
            let page=payload.page||1
            let list=state.productArr
            state.productArr2=list.slice((page-1)*5,page*5)
        },
    },
    actions: {
        //分页
        getProduct(store) {
            fetch('/db/product.json', data => {
                console.log(data)
                let payload={
                    page:1,
                    list:data,
                }
                store.commit("updateProductArr", payload)
            })
        },
    }
}

export default product