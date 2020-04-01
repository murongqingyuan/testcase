// public/workOrderCard/workOrderCard.js
const getEmployee = require("../../utils/getEmployee.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    workOrderInfo: {
      type: JSON,
      value: {}
    },
    editable: {
      type: Boolean,
      value: true
    },
    cardType: {
      type: String,
      value: 'PrjWorkOrder'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showItem: false,
    Publisher: {},
    Checker: {},
    Executor: {},

  },
  ready() {
    var _this = this;
    this.setData({
      Publisher: getEmployee.getEmployeeInfo(this.data.workOrderInfo.Publisher),
      Checker: getEmployee.getEmployeeInfo(this.data.workOrderInfo.Checker),
      Executor: getEmployee.getEmployeeInfo(this.data.workOrderInfo.Executor)
    })
    console.log(this.data.Publisher)
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
   * 组件的方法列表
   */
  methods: {
    showDetail() {
      console.log(this.data.workOrderInfo.PublishStatus)
      if (this.data.workOrderInfo.PublishStatus) {
        wx.navigateTo({
          url: '../../../pages/workOrder/workOrderDetail/workOrderDetail' +
            '?workOrderInfo=' + JSON.stringify(this.data.workOrderInfo) +
            '&cardType=' + this.data.cardType +
            '&Publisher=' + JSON.stringify(this.data.Publisher) +
            '&Checker=' + JSON.stringify(this.data.Checker) +
            '&Executor=' + JSON.stringify(this.data.Executor),
        })
      }else{
        console.log(this.data.Checker)
        wx.navigateTo({
          url: '../../../pages/workOrder/addWorkOrder/addWorkOrder' +
            '?action=edit'+
            '&workOrderInfo=' + JSON.stringify(this.data.workOrderInfo) +
            '&cardType=' + this.data.cardType +
            '&Publisher=' + JSON.stringify(this.data.Publisher) +
            '&Checker=' + JSON.stringify(this.data.Checker) +
            '&Executor=' + JSON.stringify(this.data.Executor),
        })
      }

    }
  }
})