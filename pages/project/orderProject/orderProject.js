// pages/project/orderProject/orderProject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectInfo: {
      'ID': '0001',
      'CorpID': '0001',
      'Code': "GC15018",
      'Name': "武汉统一喷码控制系统2",
      'PrjManager': "lilin",
      'PrjManagerName': "李林",
      'CustomerID': '0001',
      'CustomerName': "湖北武汉中原电子",
      'BuildDate': "2020-03-05",
      'BuildStatus': 1,
      'BuildDocDateTime': '2020-03-09 12:12:12',
      'BuildDocStatus': 1,
      'OrderDateTime': '2020-03-09 12:12:12',
      'OrderMoney': '', //签约金额
      'ProjectMoney': '0', //项目金额
      'RepairMoney': '0', //维修金额
      'EqpMoneyBudget': '0', //设备成本预算
      'BusinessMoneyBudget': '0', //商务活动预算
      'ConstructMoneyBudget': '0', //施工成本预算
      'DevelopMoneyBudget': '0', //研发成本预算
      'IsWithRepair': 0, //是否含保修
      'RepairManager': '', //保修经理
      'RepairStartDate': '',
      'RepairEndDate': '',
      'IsEntrust': 0,
      'ConstructManager': '', //实施经理
      'OrderStatus': 1,
      'OrderDocDateTime': '2020-03-09 12:12:12',
      'OrderDocStatus': 1,
      'EntryDateTime': '2020-03-09 12:12:12',
      'EntryStatus': 1,
      'EntryDocDateTime': '2020-03-09 12:12:12',
      'EntryDocStatus': 1,
      'InspectDateTime': '2020-03-09 12:12:12',
      'InspectStatus': 1,
      'InspectDocDateTime': '2020-03-09 12:12:12',
      'InspectDocStatus': 1, //验收资料		
      'ForwardSettlementDateTime': '2020-03-09 12:12:12',
      'ForwardSettlementStatus': 0,
      'SettlementDateTime': '2020-03-09 12:12:12',
      'SettlementStatus': 1,
      'CloseDateTime': '2020-03-09 12:12:12',
      'CloseStatus': 1
    },
    OrderMoney: '',
    ProjectMoney: '',
    RepairMoney: '',
    EqpMoneyBudget: '',
    BusinessMoneyBudget: '',
    ConstructMoneyBudget: '',
    DevelopMoneyBudget: '',
    IsWithRepair: 0,
    RepairManagerCode: '',
    RepairManagerName: '',
    RepairStartDate: '',
    RepairEndDate: '',
    IsEntrust: 0,
    ConstructManagerCode: '',
    ConstructManagerName: '',

    checkOrderMoney: true,
    checkBusinessMoneyBudget: true,
    checkEqpMoneyBudget: true,
    checkConstructMoneyBudget: true,
    checkDevelopMoneyBudget: true,
    checkRepairStartDate: true,
    checkRepairEndDate: true,
    checkConstructManager: true,
    checkRepairManager: true,
    checkStartDate: true,
    checkEndDate: true,

    showDialog: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    if (JSON.stringify(options) == "{}") return;
    this.searchDialog = this.selectComponent('#searchDialog')
    console.log(options)
    var getProjectInfo = JSON.parse(options.projectInfo)
    console.log(getProjectInfo)
    this.setData({
      projectInfo: getProjectInfo
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
  inputChange(e) {


    if (e.target.dataset.id == 'OrderMoney') {
      this.setData({
        OrderMoney: e.detail.value,
        ProjectMoney: (e.detail.value * (1 - 0.025)).toFixed(3),
        RepairMoney: (e.detail.value * 0.025).toFixed(3),
        checkOrderMoney: true
      })
    } else if (e.target.dataset.id == 'EqpMoneyBudget') {
      this.setData({
        EqpMoneyBudget: e.detail.value,
        checkEqpMoneyBudget: true
      })
    } else if (e.target.dataset.id == 'BusinessMoneyBudget') {
      this.setData({
        BusinessMoneyBudget: e.detail.value,
        checkBusinessMoneyBudget: true
      })
    } else if (e.target.dataset.id == 'ConstructMoneyBudget') {
      this.setData({
        ConstructMoneyBudget: e.detail.value,
        checkConstructMoneyBudget: true
      })
    } else if (e.target.dataset.id == 'DevelopMoneyBudget') {
      this.setData({
        DevelopMoneyBudget: e.detail.value,
        checkDevelopMoneyBudget: true
      })
    }

  },
  switchChange(e) {
    if (e.target.dataset.id == 'IsWithRepair') {
      this.setData({
        IsWithRepair: e.detail.value
      })
    } else if (e.target.dataset.id == 'IsEntrust') {
      this.setData({
        IsEntrust: e.detail.value
      })
    }

  },
  startDateChange(e) {
    console.log(e)
    if (this.data.RepairEndDate == '') {
      this.setData({
        RepairStartDate: e.detail.value,
        checkStartDate: true
      })
    } else {
      if (e.detail.value < this.data.RepairEndDate) {
        this.setData({
          RepairStartDate: e.detail.value,
          checkStartDate: true
        })
      } else {
        this.setData({
          RepairStartDate: "范围有误",
          checkStartDate: false
        })
      }
    }

  },
  endDateChange(e) {
    if (this.data.RepairStartDate == '') {
      this.setData({
        RepairEndDate: e.detail.value,
        checkEndDate: true
      })
    } else {

      if (e.detail.value > this.data.RepairStartDate) {
        this.setData({
          RepairEndDate: e.detail.value,
          checkEndDate: true
        })
      } else {
        this.setData({
          RepairEndDate: "范围有误",
          checkEndDate: false
        })
      }
    }
  },
  showDialog(e) {
    var type = e.target.dataset.action;

    if (type == 'RepairManager') {
      this.searchDialog.selectGetID('RepairManager')
      this.searchDialog.selectEmployee();

    } else if (type == 'ConstructManager') {
      this.searchDialog.selectGetID('ConstructManager')
      this.searchDialog.selectEmployee();

    }
    this.setData({

      showDialog: true,
    })
  },
  hideDialog() {
    this.setData({
      showDialog: false,
    })
  },
  dialogSelect(e) {
    var tmp = JSON.parse(e.detail)
    if (tmp.GetID == 'RepairManager') {
      this.setData({
        RepairManagerCode: tmp.Code,
        RepairManagerName: tmp.Name,
        checkRepairManager: true,
      })
    } else if (tmp.GetID == 'ConstructManager') {
      this.setData({
        ConstructManagerCode: tmp.Code,
        ConstructManagerName: tmp.Name,
        checkConstructManager: true,
      })
    }

    this.hideDialog();
  },

  bindCheck() {
    if (this.data.OrderMoney == '') {
      this.setData({
        checkOrderMoney: false,
      })
    }
    if (this.data.BusinessMoneyBudget == '') {
      this.setData({
        checkBusinessMoneyBudget: false,
      })
    }
    if (this.data.EqpMoneyBudget == '') {
      this.setData({
        checkEqpMoneyBudget: false,
      })
    }
    if (this.data.ConstructMoneyBudget == '') {
      this.setData({
        checkConstructMoneyBudget: false,
      })
    }
    if (this.data.DevelopMoneyBudget == '') {
      this.setData({
        checkDevelopMoneyBudget: false,
      })
    }
    if (this.data.IsWithRepair) {
      if (this.data.RepairManagerName == '') {
        this.setData({
          checkRepairManager: false,
        })
      }
      if (this.data.RepairStartDate == '') {
        this.setData({
          checkStartDate: false,
        })
      }
      if (this.data.RepairEndDate == '') {
        this.setData({
          checkEndDate: false,
        })
      }

    }
    if (this.data.IsEntrust) {
      if (this.data.ConstructManagerName == '') {
        this.setData({
          checkConstructManager: false,
        })
      }

    }

    if (this.data.checkOrderMoney &&
      this.data.checkBusinessMoneyBudget &&
      this.data.checkEqpMoneyBudget &&
      this.data.checkConstructMoneyBudget &&
      this.data.checkDevelopMoneyBudget &&
      this.data.checkRepairStartDate &&
      this.data.checkRepairEndDate &&
      this.data.checkConstructManager &&
      this.data.checkRepairManager &&
      this.data.checkStartDate &&
      this.data.checkEndDate
    ) {

      console.log("完整")
    } else {
      console.log("不完整")
    }

  }
})