Component({
  /**
   * 组件的属性列表
   */
  properties: {
    vIndex: {
      type: String,
      value: ''
    },

    cardType: {
      type: String,
      value: 'per'
    },
    cardFrom: {
      type: String,
      value: 'per'
    },
    debitInfo: {
      type: JSON,
      value: {},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showItem: false,
  },

  /**
   * 组件的方法列表
   */
  ready() {
    console.log(this.data.debitInfo)
    var _this = this;
    var Size = 7;
    var waitTime = 0;
    waitTime = (this.data.vIndex % 20) * parseInt(this.data.vIndex)
    setTimeout(function() {
      _this.setData({
        showItem: true
      })

    }, waitTime)
  },

  methods: {
    jump() {
      if (this.data.cardFrom == 'dpt') {
        wx.navigateTo({
          url: '../../../pages/debit/addDptDebit/addDptDebit',
        })
      } else if (this.data.cardFrom == 'per') {
        wx.navigateTo({
          url: '../../../pages/debit/addPerDebit/addPerDebit',
        })
      }

    }
  }
})