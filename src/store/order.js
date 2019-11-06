const order={
  namespaced:true,
    state:{
      // 表单下拉列表的数据
      orderSearchArr:[
        {
          value: '选项1',
          label: '订单号'
        }, {
          value: '选项2',
          label: '外部单号'
        }, {
          value: '选项3',
          label: '收货人姓名'
        }, {
          value: '选项4',
          label: '收货人手机号'
        }, {
          value: '选项5',
          label: '收货人手机号四位'
        }
      ],
      // 订单类型
      orderTypeArr:[
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '普通订单'
        },
        {
          value: '选项3',
          label: '代付订单'
        },
        {
          value: '选项4',
          label: '送礼订单'
        },
        {
          value: '选项5',
          label: '心愿订单'
        }
      ],
      // 维权状态
      statusType:[
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '退款处理中'
        },
        {
          value: '选项3',
          label: '退款结束'
        }
      ],
      // 订单状态

orderStatus:[
      {
        value: '选项1',
        label: '全部'
      },
      {
        value: '选项2',
        label: '待付款'
      },
      {
        value: '选项3',
        label: '代发货'
      },
      {
        value: '选项4',
        label: '已发货'
      },
      {
        value: '选项5',
        label: '已完成'
      }
    ],

    //  配送方式
    
    distributionArr:[
      {
        value: '选项1',
        label: '全部'
      },
      {
        value: '选项2',
        label: '快递发货'
      },
      {
        value: '选项3',
        label: '上门自提'
      },
      {
        value: '选项4',
        label: '同城配送'
      }
    ],
    // 付款方式
    paymentArr:[
      {
        value: '选项1',
        label: '全部'
      },
      {
        value: '选项2',
        label: '微信支付'
      },
      {
        value: '选项3',
        label: '银行卡支付'
      },
      {
        value: '选项4',
        label: '支付宝支付'
      }
    ] ,
    // 订单来源
    orderSource:[
      {
        value: '选项1',
        label: '全部'
      },
      {
        value: '选项2',
        label: '微信-商家小程序'
      },
      {
        value: '选项3',
        label: '微信-商家微商城'
      },
      {
        value: '选项4',
        label: '爱逛'
      }
    ],
    // 是否加星
    orderStartArr:[
      {
        value: '选项1',
        label: '全部'
      },
      {
        value: '选项2',
        label: '加星'
      }
    ]
    },
    mutations:{
      
    },
    actions:{
        
    }
  }
  
  export default order