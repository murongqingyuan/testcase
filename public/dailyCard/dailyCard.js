// public/dailyCard/dailyCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dailyData: {
      type: JSON,
      value: {},
    }, vIndex: {
      type: String,
      value: ''
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    writer: {},
    showItem: false,
  },
  ready() {
    var memberList = getApp().globalData.memberList;

    for (var i in memberList) {

      if (memberList[i].Code == this.data.dailyData.Writer) {
        this.setData({
          writer: memberList[i]
        })
        break;
      }
    }
    var _this = this;
    var Size = 7;
    var waitTime = 0;
    waitTime = (this.data.vIndex % 20) * parseInt(this.data.vIndex)
    setTimeout(function () {
      _this.setData({
        showItem: true
      })

    }, waitTime)
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    addDaily() {
      wx.navigateTo({
        url: '../../../pages/workDaily/addworkDaily/addworkDaily',
      })

    }
  }
})