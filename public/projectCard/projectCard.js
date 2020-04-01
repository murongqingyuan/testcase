// public/projectCard/projectCard.js
const getEmployee = require("../../utils/getEmployee.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    projectInfo: {
      type: JSON,
      value: {}
    },
    vIndex: {
      type: String,
      value: '0'
    },
    cardType: {
      type: String,
      value: 'Projects'
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    showItem: false,
    Publisher:{}
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
    
    this.setData({
      Publisher: getEmployee.getEmployeeInfo(this.data.projectInfo.PrjManager),
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    showDetail() {
      wx.navigateTo({
        url: '../../../pages/project/projectDetail/projectDetail?projectInfo=' + JSON.stringify(this.data.projectInfo) + '&cardType=' + this.data.cardType,
      })
    }
  }
})