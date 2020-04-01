// pages/project/projectDetail/projectDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectInfo: {
      // 'ID': '0001',
      // 'CorpID': '0001',
      // 'Code': "GC15018",
      // 'Name': "武汉统一喷码控制系统2",
      // 'PrjManager': "lilin",
      // 'PrjManagerName': "李林",
      // 'CustomerID': '0001',
      // 'CustomerName': "湖北武汉中原电子",
      // 'BuildDate': "2020-03-05",
      // 'BuildStatus': 1,
      // 'BuildDocDateTime': '2020-03-09 12:12:12',
      // 'BuildDocStatus': 1,
      // 'OrderDateTime': '2020-03-09 12:12:12',
      // 'OrderMoney': 20000, //签约金额
      // 'OrderStatus': 1,
      // 'ProjectMoney': 20000, //项目金额
      // 'RepairMoney': 20000, //维修金额
      // 'EqpMoneyBudget': 20000, //设备成本预算
      // 'BusinessMoneyBudget': 1000, //商务活动预算
      // 'ConstructMoneyBudget': 10000, //施工成本预算
      // 'DevelopMoneyBudget': 10000, //研发成本预算
      // 'OrderDocDateTime': '2020-03-09 12:12:12',
      // 'OrderDocStatus': 1,
      // 'EntryDateTime': '2020-03-09 12:12:12',
      // 'EntryStatus': 1,
      // 'EntryDocDateTime': '2020-03-09 12:12:12',
      // 'EntryDocStatus': 1,
      // 'InspectDateTime': '2020-03-09 12:12:12',
      // 'InspectStatus': 1,
      // 'InspectDocDateTime': '2020-03-09 12:12:12',
      // 'InspectDocStatus': 1, //验收资料		
      // 'IsWithRepair': 1, //是否含保修
      // 'RepairManager': 'xxx', //保修经理
      // 'RepairStartDate': '2020-03-09 12:12:12',
      // 'RepairEndDate': '2020-03-09 12:12:12',
      // 'IsEntrust': 1,
      // 'ConstructManager': 'xxx', //实施经理
      // 'ForwardSettlementDateTime': '2020-03-09 12:12:12',
      // 'ForwardSettlementStatus': 0,
      // 'SettlementDateTime': '2020-03-09 12:12:12',
      // 'SettlementStatus': 1,
      // 'CloseDateTime': '2020-03-09 12:12:12',
      // 'CloseStatus':1

    },
    cardType: 'Projects',
    EntryDate: '',
    InspectDate: '',
    checkEntryDate: true,
    checkInspectDate: true,
    PrjManager:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var projectInfo = JSON.parse(options.projectInfo)
    var cardType = options.cardType
    this.setData({
      projectInfo: projectInfo,
      cardType: cardType
    })
    console.log(projectInfo)
    console.log(cardType)
    this.setData({
      PrjManager: getEmployee.getEmployeeInfo(this.data.projectInfo.PrjManager)
    })
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
        url: '../addProject/addProject?action=edit&type=' + this.data.cardType + '&projectInfo=' + JSON.stringify(this.data.projectInfo),
      })
    } else if (action == 'BuildDoc' || action == 'OrderDoc' || action == 'EntryDoc' || action == 'InspectDoc') {
      console.log(action + '资料确认')
      var tmp = {
        'type': ProjectsAddDoc,
        'LoginCode': xxx,
        'Password': xxx,
        'Category': this.data.cardType,
        'ID': this.data.projectInfo.ID,
        'DocType': action,
        'Status': 1,
      }

    } else if (action == 'Order') {
      wx.navigateTo({
        url: '../orderProject/orderProject?projectInfo=' + JSON.stringify(this.data.projectInfo),
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
        'ID': this.data.projectInfo.ID,
        'CloseStatus': 1


      }
    }



  }
})