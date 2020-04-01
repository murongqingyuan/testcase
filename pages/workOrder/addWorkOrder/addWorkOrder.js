// pages/project/addProject/addProject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workOrderType: 'PrjWorkOrder',
    showDialog: false,

    // searchDialog: '',

    CorpID: '',
    CorpName: '',
    ProjectCode: '',
    ProjectName: '',
    TargetValue: '',
    Money: '',
    Checker: '',
    Executor: '',
    StartDate: '',
    EndDate: '',
    Description: '',

    checkProject: true,
    checkTargetValue: true,
    checkMoney: true,
    checkChecker: true,
    checkExecutor: true,
    checkStartDate: true,
    checkEndDate: true,
    checkDescription: true,
    PrjManagerCode: '',
    PrjManagerName: '',



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.action == 'add') {
      var getType = options.cardType
      this.setData({
        workOrderType: getType,
     
      })
    } else if (options.action == 'edit') {
      var getData = JSON.parse(options.workOrderInfo)
      var getChecker = JSON.parse(options.Checker)
      var getExecutor = JSON.parse(options.Executor)
      var getType = options.cardType
      console.log('getType',getType)
      this.setData({
        workOrderType: getType,
        ProjectCode: getData.ProjectCode,
        ProjectName: getData.ProjectCode+"-"+getData.ProjectName,
        TargetValue: getData.TargetValue,
        Money: getData.Money,
        StartDate: getData.StartDate,
        EndDate: getData.EndDate,
        Description: getData.Description,
        Checker: getChecker,
        Executor: getExecutor,
      })
    }
    console.log(this.data.Checker)



    this.searchDialog = this.selectComponent('#searchDialog')
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
  showDialog(e) {
    console.log(e.target.dataset.action)
    if (e.target.dataset.action == 'customer') {

      this.searchDialog.selectCustomer()
    } else if (e.target.dataset.action == 'checker') {
      this.searchDialog.selectGetID('checker')
      this.searchDialog.selectEmployee()

    } else if (e.target.dataset.action == 'executor') {
      this.searchDialog.selectGetID('executor')
      this.searchDialog.selectEmployee()

    } else if (e.target.dataset.action == 'project') {
      this.searchDialog.selectGetID('project')
      this.searchDialog.selectProject()
    }
    this.setData({
      showDialog: true
    })
  },

  hideDialog() {
    this.setData({
      showDialog: false,
    })
  },

  dialogSelect(e) {
    console.log("返回父级")
    console.log(e)
    var tmp = JSON.parse(e.detail)
    if (tmp.GetID == 'project') {
      this.setData({
        ProjectCode: tmp.Code,
        ProjectName: tmp.text,
        checkProject: true,
      })
    } else if (tmp.GetID == 'checker') {
      var getChecker = {
        ID: tmp.ID,
        Code: tmp.Code,
        Name: tmp.Name,
        AvatorUrl: tmp.AvatorUrl
      }
      this.setData({
        Checker: getChecker,
        checkChecker: true,
      })
    } else if (tmp.GetID == 'executor') {
      var getExecutor = {
        ID: tmp.ID,
        Code: tmp.Code,
        Name: tmp.Name,
        AvatorUrl: tmp.AvatorUrl
      }
      this.setData({
        Executor: getExecutor,
        checkExecutor: true,
      })
    }

    // var tmp = JSON.parse(e.detail)
    // if (tmp.CorpName != undefined) {
    //   this.setData({
    //     CorpName: tmp.CorpName,
    //     CorpID: tmp.ID,
    //     checkCorp: true,
    //   })
    // } else if (tmp.Code != undefined) {
    //   this.setData({
    //     PrjManagerCode: tmp.Code,
    //     PrjManagerName: tmp.Name,
    //     checkPrjManager: true,
    //   })
    // }



    this.hideDialog();
  },
  inputChange(e) {
    console.log(e)
    if (e.target.dataset.id == 'TargetValue') {
      this.setData({
        TargetValue: e.detail.value,
        checkTargetValue: true
      })
    } else if (e.target.dataset.id == 'Money') {
      this.setData({
        Money: e.detail.value,
        checkMoney: true
      })
    } else if (e.target.dataset.id == 'Description') {
      this.setData({
        Description: e.detail.value,
        checkDescription: true
      })
    }
  },
  startDateChange(e) {
    console.log(e)
    if (this.data.EndDate == '') {
      this.setData({
        StartDate: e.detail.value,
        checkStartDate: true
      })
    } else {
      if (e.detail.value < this.data.EndDate) {
        this.setData({
          StartDate: e.detail.value,
          checkStartDate: true
        })
      } else {
        this.setData({
          StartDate: "范围有误",
          checkStartDate: false
        })
      }
    }

  },
  endDateChange(e) {
    if (this.data.StartDate == '') {
      this.setData({
        EndDate: e.detail.value,
        checkEndDate: true
      })
    } else {

      if (e.detail.value > this.data.StartDate) {
        this.setData({
          EndDate: e.detail.value,
          checkEndDate: true
        })
      } else {
        this.setData({
          EndDate: "范围有误",
          checkEndDate: false
        })
      }
    }
  },
  bindCheck() {

    if (this.data.ProjectCode == '') {
      this.setData({
        checkProject: false,
      })
    }

    if (this.data.Checker == '') {
      this.setData({
        checkChecker: false,
      })
    }
    if (this.data.Executor == '') {
      this.setData({
        checkExecutor: false,
      })
    }
    if (this.data.TargetValue == '') {
      this.setData({
        checkTargetValue: false,
      })
    }
    if (this.data.Money == '') {
      this.setData({
        checkMoney: false,
      })
    }
    if (this.data.Description == '') {
      this.setData({
        checkDescription: false,
      })
    }
    if (this.data.StartDate == '') {
      this.setData({
        checkStartDate: false,
      })
    }
    if (this.data.EndDate == '') {
      this.setData({
        checkEndDate: false,
      })
    }

    if (this.data.workOrderType == 'Projects') {
      if (this.data.checkCorp && this.data.checkProject && this.data.checkPrjManager) {

      }
    } else if (this.data.workOrderType == 'SaleProjects') {
      if (this.data.checkCorp && this.data.checkProject && this.data.checkOrderMoney && this.data.checkPrjManager) {

      }
    } else if (this.data.workOrderType == 'RepairProjects') {
      if (this.data.checkCorp && this.data.checkProject && this.data.checkOrderMoney && this.data.checkStartDate && this.data.checkEndDate && this.data.checkPrjManager) {

      }
    } else if (this.data.workOrderType == 'CorpProjects') {
      if (this.data.checkProject && this.data.checkOrderMoney && this.data.checkPrjManager) {

      }
    }
  },


})