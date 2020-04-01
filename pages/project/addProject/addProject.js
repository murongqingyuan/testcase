// pages/project/addProject/addProject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectType: 'Projects',
    showDialog: false,

    // searchDialog: '',

    CorpID: '',
    CorpName: '',
    ProjectCode: '',
    ProjectName: '',
    OrderMoney: '',
    RepairStartDate: '',
    RepairEndDate: '',
    checkCorp: true,
    checkProjectCode: true,
    checkProjectName: true,
    checkOrderMoney: true,
    checkStartDate: true,
    checkEndDate: true,
    checkPrjManager: true,
    PrjManagerCode: '',
    PrjManagerName: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.action == 'add') {
      this.setData({
        projectType: options.type,
        PrjManagerCode: getApp().globalData.Code,
        PrjManagerName: getApp().globalData.Name,
      })
    } else if (options.action == 'edit') {
      var getData = JSON.parse(options.projectInfo)
      this.setData({
        projectType: options.type,
        ProjectCode: getData.Code,
        ProjectName: getData.Name,
        CorpID: getData.CustomerID,
        CorpName: getData.CustomerName,
      })
    }



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
    var type = e.target.dataset.action;
    console.log(e.target.dataset.action)

    if (type == 'customer') {
      this.searchDialog.selectGetID('customer')
      this.searchDialog.selectCustomer();

    } else if (type == 'prjManager') {
      this.searchDialog.selectGetID('prjManager')
      this.searchDialog.selectEmployee();

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
    console.log(e)

    var tmp = JSON.parse(e.detail)
    if (tmp.GetID == 'customer') {
      this.setData({
        CorpName: tmp.CorpName,
        CorpID: tmp.ID,
        checkCorp: true,
      })
    } else if (tmp.GetID == 'prjManager') {
      this.setData({
        PrjManagerCode: tmp.Code,
        PrjManagerName: tmp.Name,
        checkPrjManager: true,
      })
    }




    this.hideDialog();
  },
  inputChange(e) {
    console.log(e)
    if (e.target.dataset.id == 'ProjectCode') {
      this.setData({
        ProjectCode: e.detail.value,
        checkProjectCode: true
      })
    } else if (e.target.dataset.id == 'ProjectName') {
      this.setData({
        ProjectName: e.detail.value,
        checkProjectName: true
      })
    } else if (e.target.dataset.id == 'OrderMoney') {
      this.setData({
        OrderMoney: e.detail.value,
        checkOrderMoney: true
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
  bindCheck() {
    if (this.data.CorpID == '') {
      this.setData({
        checkCorp: false,
      })
    }
    if (this.data.ProjectCode == '') {
      this.setData({
        checkProjectCode: false,
      })
    }
    if (this.data.ProjectName == '') {
      this.setData({
        checkProjectName: false,
      })
    }
    if (this.data.OrderMoney == '') {
      this.setData({
        checkOrderMoney: false,
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
    if (this.data.PrjManagerName == '') {
      this.setData({
        checkPrjManager: false,
      })
    }
    console.log(this.data.PrjManagerCode)
    console.log(this.data.PrjManagerName)
    if (this.data.projectType == 'Projects') {
      if (this.data.checkCorp && this.data.checkProjectCode && this.data.checkProjectName && this.data.checkPrjManager) {

      }
    } else if (this.data.projectType == 'SaleProjects') {
      if (this.data.checkCorp && this.data.checkProjectCode && this.data.checkProjectName && this.data.checkOrderMoney && this.data.checkPrjManager) {

      }
    } else if (this.data.projectType == 'RepairProjects') {
      if (this.data.checkCorp && this.data.checkProjectCode && this.data.checkProjectName && this.data.checkOrderMoney && this.data.checkStartDate && this.data.checkEndDate && this.data.checkPrjManager) {

      }
    } else if (this.data.projectType == 'CorpProjects') {
      if (this.data.checkProjectCode && this.data.checkProjectName && this.data.checkOrderMoney && this.data.checkPrjManager) {

      }
    }
  },


})