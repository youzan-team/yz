import axios from 'axios'

function fetch(api, callback) {
  axios({
    method: "GET",
    url: 'http://localhost:8080' + api,
  }).then(res => {
    let data = null
    if (res.data.err === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err => {
    console.log('接口异常', err)
  }).then(() => {

  })
}

const order = {
  namespaced: true,
  state: {
    // 表格的数据
    a: 3,
    page: 1,
    // 表单下拉列表的数据
    orderSearchArr: [{
      value: '订单号',
      label: '订单号'
    }, {
      value: '外部单号',
      label: '外部单号'
    }, {
      value: '收货人姓名',
      label: '收货人姓名'
    }, {
      value: '收货人手机号',
      label: '收货人手机号'
    }, {
      value: '收货人手机号四位',
      label: '收货人手机号四位'
    }],
    // 订单类型
    orderTypeArr: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '普通订单',
        label: '普通订单'
      },
      {
        value: '代付订单',
        label: '代付订单'
      },
      {
        value: '送礼订单',
        label: '送礼订单'
      },
      {
        value: '心愿订单',
        label: '心愿订单'
      }
    ],
    // 维权状态
    statusType: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '退款处理中',
        label: '退款处理中'
      },
      {
        value: '退款结束',
        label: '退款结束'
      }
    ],
    // 订单状态

    orderStatus: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '待付款',
        label: '待付款'
      },
      {
        value: '代发货',
        label: '代发货'
      },
      {
        value: '已发货',
        label: '已发货'
      },
      {
        value: '已完成',
        label: '已完成'
      }
    ],

    //  配送方式

    distributionArr: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '快递发货',
        label: '快递发货'
      },
      {
        value: '上门自提',
        label: '上门自提'
      },
      {
        value: '同城配送',
        label: '同城配送'
      }
    ],
    // 付款方式
    paymentArr: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '微信支付',
        label: '微信支付'
      },
      {
        value: '银行卡支付',
        label: '银行卡支付'
      },
      {
        value: '支付宝支付',
        label: '支付宝支付'
      }
    ],
    // 订单来源
    orderSource: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '微信-商家小程序',
        label: '微信-商家小程序'
      },
      {
        value: '微信-商家微商城',
        label: '微信-商家微商城'
      },
      {
        value: '爱逛',
        label: '爱逛'
      }
    ],
    // 是否加星
    orderStartArr: [{
        value: '全部',
        label: '全部'
      },
      {
        value: '加星',
        label: '加星'
      }
    ],
    orderListArr: [],
    orderListArr1: [],
    orderArrType1:[]
  },
  mutations: {
    updateArr(state, payload) {
      console.log(payload)
      state.orderListArr1 = payload
      state.orderListArr = payload
      state.orderListArr1 = state.orderListArr.slice(0, 3)
    },
    // 分页
    page(state, payload) {
      state.page = payload
      state.orderListArr1 = state.orderListArr.slice((state.page - 1) * state.a, state.page * state.a)
    },
    aa(state, payload) {
      state.a = payload
      state.orderListArr1 = state.orderListArr.slice((state.page - 1) * state.a, state.page * state.a)
    },

    // 筛选
    updataList(state, payload) {
      var listarr = []
      let listType1=[]
      state.orderListArr.map((ele) => {
        let listType=payload.type
        if (ele.mode == listType.distribution) {
          listarr.push(ele)
        }
        if(listType.orderStatus=="待付款"){
          console.log(1)
          listType1.push(ele)
        }
      })
      state.orderListArr1 = listarr
      state.orderArrType1=listType1
      console.log(state.orderArrType)
    }
  },
  actions: {
    getOrderList(order) {
      fetch('/db/order.json', data => {
        order.commit("updateArr", data)
      })
    }
  }
}

export default order