// pages/project/projectDetail/projectDetail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workOrderInfo: {
      // 'ID': '0007',
      // 'CorpID': '0001',
      // 'Code': 'RWD0001202003110007',
      // 'ProjectCode': 'GC19044',
      // 'ProjectName': '黄金搭档工控机维修',
      // 'StartDate': '2020-03-11',
      // 'EndDate': '2020-04-11',
      // 'TargetValue': '20000',
      // 'Money': '2000',
      // 'Description': '任务描述，做啥做啥做啥，巴拉巴拉',
      // 'Publisher': 'lilin',
      // 'Executor': 'yangjie',
      // 'Checker': 'caoshengli',
      // 'PublishStatus': 1,
      // 'PublishDate': '2020-03-11 12:12:12',
      // 'AcceptStatus': 1,
      // 'AcceptDate': '2020-03-12 12:12:12',
      // 'ApplyCheckStatus': 1,
      // 'ApplyCheckDate': '2020-03-13 12:12:12',
      // 'CheckStatus': 1,
      // 'CheckDate': '2020-03-14 12:12:12',
      // 'FinishStatus': 1,
      // 'FinishDate': '2020-03-15 12:12:12',
      // 'ForwardSettlementStatus': 1,
      // 'ForwardSettlementDateTime': '2020-03-16 12:12:12',
      // 'SettlementStatus': 1,
      // 'SettlementDateTime': '2020-03-17 12:12:12',

    },

    Publisher: {},
    Checker: {},
    Executor: {},
    cardType: 'PrjWorkOrder',
    EntryDate: '',
    InspectDate: '',
    checkEntryDate: true,
    checkInspectDate: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)


    var cardType = options.cardType
    this.setData({
      workOrderInfo: JSON.parse(options.workOrderInfo),
      Publisher: JSON.parse(options.Publisher),
      Checker: JSON.parse(options.Checker),
      Executor: JSON.parse(options.Executor),
      cardType: options.cardType,
    })
    console.log(this.data.workOrderInfo)
    console.log(this.data.cardType)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  dateChange(e) {
    console.log(e.detail.value)
    if (e.target.dataset.id == 'EntryDate') {
      this.setData({
        EntryDate: e.detail.value,
        checkEntryDate: true,
      })
    } else if (e.target.dataset.id == 'InspectDate') {
      this.setData({
        InspectDate: e.detail.value,
        checkInspectDate: true,
      })
    }
  },
  bindEdit(e) {
    console.log(e.target.dataset.action)
    var action = e.target.dataset.action
    if (action == 'Edit') {
      wx.navigateTo({
        url: '../addProject/addProject?action=edit&type=' + this.data.cardType + '&workOrderInfo=' + JSON.stringify(this.data.workOrderInfo),
      })
    } else if (action == 'BuildDoc' || action == 'OrderDoc' || action == 'EntryDoc' || action == 'InspectDoc') {
      console.log(action + '资料确认')
      var tmp = {
        'type': ProjectsAddDoc,
        'LoginCode': xxx,
        'Password': xxx,
        'Category': this.data.cardType,
        'ID': this.data.workOrderInfo.ID,
        'DocType': action,
        'Status': 1,
      }

    } else if (action == 'Order') {
      wx.navigateTo({
        url: '../orderProject/orderProject?workOrderInfo=' + JSON.stringify(this.data.workOrderInfo),
      })
    } else if (action == 'Entry') {
      if (this.data.EntryDate == '') {
        console.log('EntryDate:false')
        this.setData({
          checkEntryDate: false
        })
        return;
      }

      var tmp = {
        'Type': 'ProjectEntry',
        'LoginCode': 'xxx',
        'Password': 'xxx',
        'ID': 'xxx',
        'EntryStatus': 1,
        'EntryDateTime': ''
      }
    } else if (action == 'Inspect') {
      if (this.data.InspectDate == '') {
        this.setData({
          checkInspectDate: false

        })
        return;
      }
      var tmp = {
        'Type': 'ProjectInspect',
        'LoginCode': 'xxx',
        'Password': 'xxx',
        'ID': 'xxx',
        'InspectStatus': 1,
        'InspectDateTime': ''

      }
    } else if (action == 'ForwardSettlement') {
      var tmp = {
        'Type': 'ProjectForwardSettlement',
        'LoginCode': 'xxx',
        'Password': 'xxx',
        'ID': 'xxxx',
        'ForwardSettlementStatus': 1


      }

    } else if (action == 'Settlement') {
      var tmp = {
        'Type': 'ProjectSettlement',
        'LoginCode': 'xxx',
        'Password': 'xxx',
        'ID': 'xxx',
        'SettlementStatus': 1


      }

    } else if (action == 'Close') {
      var tmp = {
        'Type': 'ProjectClose',
        'LoginCode': xxx,
        'Password': xxx,
        'Category': this.data.cardType,
        'ID': this.data.workOrderInfo.ID,
        'CloseStatus': 1


      }
    }



  }
})