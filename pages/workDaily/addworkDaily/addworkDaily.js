// pages/workDaily/addworkDaily/addworkDaily.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    CorpID: '0001',
    CorpName: '上海千帆科技股份有限公司',
    dialogCategory: 'company', //project
    WorkOrderType: "",
    WorkOrderTypeList: ['工程项目', '公司项目', '部门项目'],
    ProjectCode: '',
    ProjectName: '',
    WorkOrderCode: '',
    Description: '',
    searchDialog: '',

    checkProjectType: true,
    checkProjectCode: true,
    checkWorkOrderCode: true,
    checkDescription: true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //默认先获取到自己的公司

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
    var type = e.target.dataset.type;
    console.log('type:' + type)
    var tmp = this.data.WorkOrderType == '工程项目' ? 'ProjectWorkOrder' : (this.data.WorkOrderType == '公司项目' ? 'CorpWorkOrder' : 'DptWorkOrder')
    if (type == 'project') {
      this.searchDialog.selectGetID('project')
      this.searchDialog.selectProject();

      this.searchDialog.changeWorkOrderType(tmp, 'WorkDaily');

    } else if (type == 'workOrder') {
      this.searchDialog.selectGetID('workOrder')
      this.searchDialog.selectWorkOrder();

      this.searchDialog.getWorkOrderList(tmp, this.data.ProjectCode, 'WorkDaily')

    }



    this.setData({
      showDialog: true
    })
  },
  inputChange(e) {
    console.log(e)
    if (e.target.dataset.id == 'Description') {
      this.setData({
        Description: e.detail.value,
        checkDescription: true
      })
    }
  },
  dialogSelect(e) {
    console.log(e)
    var tmp = JSON.parse(e.detail)
    if (tmp.GetID == "project") {
      /*
       *改变项目编号，清空任务单信息
       */
      this.setData({
        ProjectCode: tmp.Code,
        ProjectName: tmp.text,
        WorkOrderCode: '',
        checkProjectCode: true,
      })
    } else if (tmp.GetID == "workOrder") {
      this.setData({
        WorkOrderCode: tmp.Code,
        checkWorkOrderCode: true,
      })
    }
    // if (tmp.CorpID != undefined) {
    //   /*
    //    *改变公司编号，清空项目信息和任务单信息
    //    */
    //   this.setData({
    //     CorpID: tmp.CorpID,
    //     CorpName: tmp.CorpName,
    //     ProjectCode: '',
    //     ProjectName: '',
    //     WorkOrderCode: '',
    //   })

    //   this.changeCompany(tmp.CorpID);
    // } else if (tmp.ProjectCode != undefined) {

    //   this.changeProject(tmp.ProjectCode);
    // } else if (tmp.WorkOrderCode != undefined) {

    // }

    this.hideDialog();
  },
  hideDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    })
  },
  bindPickerChange(e) {
    /*
     *改变项目类型，清空项目信息和任务单信息
     */
    this.setData({
      WorkOrderType: this.data.WorkOrderTypeList[e.detail.value],
      ProjectCode: '',
      ProjectName: '',
      WorkOrderCode: '',
      checkProjectType: true
    })
    // this.changeWorkOrderType(this.data.WorkOrderType);

  },

  // changeCompany(companyID) {
  //   /* 调用子组件，赋值companyID*/
  //   this.searchDialog.changeCompany(companyID);
  // },
  // changeWorkOrderType(workOrderType) {
  //   /* 调用子组件，赋值prjType*/
  //   this.searchDialog.changeWorkOrderType(workOrderType == '工程项目任务' ? 'ProjectWorkOrder' : (workOrderType == '公司项目任务' ? 'CorpWorkOrder' : 'DptWorkOrder'));
  // },
  changeProject(prjCode) {
    /* 调用子组件，赋值prjCode*/
    this.searchDialog.changePrjCode(prjCode);
  },
  bindblur(e) {
    if (e.detail.value.length != 0) {
      this.setData({
        Description: e.detail.value,
        checkDescription: true
      })
    }

  },
  bindCheck() {
    if (this.data.WorkOrderType == '') {
      this.setData({
        checkProjectType: false
      })
    }
    if (this.data.WorkOrderType != "部门项目" && this.data.ProjectCode == '') {
      this.setData({
        checkProjectCode: false
      })
    }
    if (this.data.WorkOrderCode == '') {
      this.setData({
        checkWorkOrderCode: false
      })
    }
    if (this.data.Description == '') {
      this.setData({
        checkDescription: false
      })
    }

    if (this.data.checkProjectType &&
      this.data.checkProjectCode &&
      this.data.checkWorkOrderCode &&
      this.data.checkDescription) {
      console.log("可以提交")

    } else {
      console.log("未填写完整")
    }

  }
})