// public/payBillCard/payBillCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    payBillInfo: {
      type: JSON,
      value: {}
    },
    cardFrom: {
      type: String,
      value: 'per'
    },
    editable: {
      type: Boolean,
      value: true
    },
    vIndex: {
      type: String,
      value: ''
    },

  },
  /**
   * 组件的初始数据
   */
  data: {
    showItem: false
  },
  onLoad: function(){
    console.log("data" , this.data.payBillInfo)
  },
  ready: function() {
    
    this.getApplyerInfo();
    
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


  /**
   * 组件的方法列表
   */
  methods: {
    getApplyerInfo() {
      //获取用户信息，只需要部分
      var memberList = getApp().globalData.memberList;
      console.log(this.data.payBillInfo)
      for (var i in memberList) {
        if (memberList[i].Code == this.data.payBillInfo.Applyer) {
          this.setData({
            applyer: memberList[i]
          })
          break;
        }
      }
      console.log("applyer", this.data.applyer)

    },

    showDetail() {

      console.log(this.data.payBillInfo)
      if (this.data.payBillInfo.SubmitStatus) {
        wx.navigateTo({
          url: '../../../pages/payBill/payBillDetail/payBillDetail?payBillInfo=' + JSON.stringify(this.data.payBillInfo) + '&applyer=' + JSON.stringify(this.data.applyer) + '&cardFrom=' + this.data.cardFrom,
        })
      } else {
        wx.navigateTo({
          url: '../../../pages/payBill/addBill/addBill?type=edit&billInfo=' + JSON.stringify(this.data.payBillInfo) + '&cardFrom=' + this.data.cardFrom,
        })
      }
    },



  }
})