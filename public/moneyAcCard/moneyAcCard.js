// public/moneyAcCard/moneyAcCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    moneyAcInfo: {
      type: JSON,
      value: {}
    },
    vIndex: {
      type: String,
      value: '0'
    },
    cardFrom: {
      type: String,
      value: 'person'
    }
  },
  ready() {
    var _this = this;
    var Size = 7;
    var waitTime = 0;
    waitTime = (this.data.vIndex % 100) * parseInt(this.data.vIndex)
    setTimeout(function() {
      _this.setData({
        showItem: true
      })

    }, waitTime)
  },

  /**
   * 组件的初始数据
   */
  data: {
    showItem: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})