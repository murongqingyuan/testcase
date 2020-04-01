// public/payBillCard/payBillCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    overTimeInfo: {
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
    console.log("data" , this.data.overTimeInfo)
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
      console.log(this.data.overTimeInfo)
      for (var i in memberList) {
        if (memberList[i].Code == this.data.overTimeInfo.Applyer) {
          this.setData({
            applyer: memberList[i]
          })
          break;
        }
      }
      console.log("applyer", this.data.applyer)

    },

    showDetail() {

      console.log(this.data.overTimeInfo)
      if (this.data.overTimeInfo.SubmitStatus) {
        wx.navigateTo({
          url: '../../../pages/overtime/overtimeDetail/overtimeDetail?overTimeInfo=' + JSON.stringify(this.data.overTimeInfo) + '&applyer=' + JSON.stringify(this.data.applyer) + '&cardFrom=' + this.data.cardFrom,
        })
      } else {
        wx.navigateTo({
          url: '../../../pages/overtime/addBill/addBill?type=edit&billInfo=' + JSON.stringify(this.data.overTimeInfo) + '&cardFrom=' + this.data.cardFrom,
        })
      }
    },



  }
})