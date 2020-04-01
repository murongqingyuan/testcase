// pages/payBill/addBill/addBill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardFrom: '',
    cardType: '',
    ID: '',
    Code: '',
    CategoryList: '',
    Category: '',
    showDialog: false,
    searchDialog: '',
    ProjectCode: '',
    ProjectName: '',
    WorkOrderCode: '',
    Money: '',
    TravelDays: '',
    Memo: '',




    checkProject: true,
    checkWorkOrder: true,
    checkMoney: true,
    checkDays: true,
    checkMemo: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.searchDialog = this.selectComponent('#searchDialog')
    console.log(options)

    this.setData({
      cardFrom: options.cardFrom,
      cardType: options.type
    })

    if (this.data.cardFrom == 'travel') {
      this.setData({
        CategoryList: ['项目报销', '任务报销'],
      })
    } else if (this.data.cardFrom == 'department') {
      this.setData({
        CategoryList: ['团建', '福利', '培训学习', '其他'],
      })
    } else if (this.data.cardFrom == 'project') {
      this.setData({
        CategoryList: ['商务', '宴请', '礼品', '其他'],
      })
    }
    if (this.data.cardType == 'add') {
      if (this.data.cardFrom == 'travel') {
        this.setData({
          Category: '任务报销'
        })
      } else if (this.data.cardFrom == 'department') {
        this.setData({
          Category: '团建'
        })
      } else if (this.data.cardFrom == 'project') {
        this.setData({
          Category: '商务'
        })
      }

    } else if (this.data.cardType == 'edit') {
      var getData = JSON.parse(options.billInfo);
      if (this.data.cardFrom == 'travel') {
        this.setData({
          Code: getData.Code,
          Category: getData.Category,
          ProjectCode: getData.ProjectCode,
          ProjectName: getData.ProjectName,
          WorkOrderCode: getData.WorkOrderCode,
          Money: getData.Money,
          TravelDays: getData.TravelDays,
          Memo: getData.Memo,
        })
      } else if (this.data.cardFrom == 'department') {
        this.setData({
          Code: getData.Code,
          Category: getData.Category,
          Money: getData.Money,
          TravelDays: getData.TravelDays,
          Memo: getData.Memo,
        })
      } else if (this.data.cardFrom == 'project') {
        this.setData({
          Code: getData.Code,
          Category: getData.Category,
          ProjectCode: getData.ProjectCode,
          ProjectName: getData.ProjectName,
          Money: getData.Money,
          TravelDays: getData.TravelDays,
          Memo: getData.Memo,
        })
      } else if (this.data.cardFrom == 'outMoneyBill') {
        this.setData({
          Code: getData.Code,
          Money: getData.ApplyMoney,
          Memo: getData.Memo,
        })
      }
    }


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
  radioChange: function(e) {
    this.setData({
      Category: e.detail.value
    })

  },
  showDialog(e) {
    var type = e.target.dataset.type;
    console.log('type:' + type)
    var tmp = "SaleProjects"
    //需要增加一个输入栏，选择项目类型
    if (type == 'project') {
      this.searchDialog.selectProject();
      this.searchDialog.selectGetID('project')
      this.searchDialog.changeWorkOrderType(tmp, 'PayBill');

    } else if (type == 'workOrder') {
      this.searchDialog.selectWorkOrder();
      this.searchDialog.selectGetID('workOrder')
      this.searchDialog.getWorkOrderList(tmp, this.data.ProjectCode, 'PayBill')

    }

    this.setData({
      showDialog: true
    })
  },
  hideDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    })
  },

  changeProject(prjCode) {
    /* 调用子组件，赋值prjCode*/
    this.searchDialog.changePrjCode(prjCode);
  },

  dialogSelect(e) {
    console.log(e)
    var tmp = JSON.parse(e.detail)
    if (tmp.GetID == 'project') {
      this.setData({
        ProjectCode: tmp.Code,
        ProjectName: tmp.text,
        WorkOrderCode: '',
        checkProject: true,
      })
    } else if (tmp.GetID == 'workOrder') {
      this.setData({
        WorkOrderCode: tmp.Code,
        checkWorkOrder: true,
      })
    }

    this.hideDialog();
  },

  inputChange(e) {
    console.log(e)
    if (e.target.dataset.id == "Money") {
      this.setData({
        Money: e.detail.value,
        checkMoney: true
      })
    } else if (e.target.dataset.id == "TravelDays") {
      this.setData({
        TravelDays: e.detail.value,
        checkDays: true

      })
    }
  },
  bindblur(e) {
    this.setData({
      Memo: e.detail.value,
      checkMemo: true
    })
  },
  bindCheck() {
    if (this.data.cardFrom == 'travel') {
      if (this.data.Category == '项目报销') {
        this.setData({
          checkWorkOrder: true
        })
      } else {
        if (this.data.WorkOrderCode == '') {
          this.setData({
            checkWorkOrder: false
          })
        }
      }
      if (this.data.ProjectCode == '') {
        this.setData({
          checkProject: false
        })
      }
      if (this.data.Money == '') {
        this.setData({
          checkMoney: false
        })
      }
      if (this.data.TravelDays == '') {
        this.setData({
          checkDays: false
        })
      }
      if (this.data.Memo == '') {
        this.setData({
          checkMemo: false
        })
      }
      if (this.data.checkProject &&
        this.data.checkWorkOrder &&
        this.data.checkMoney &&
        this.data.checkDays &&
        this.data.checkMemo) {
        console.log("可以提交")
        if (this.data.cardType == 'edit') {
          var upData = {
            'ID': this.data.ID,
            'Categroy': this.data.Category,
            'ProjectCode': this.data.ProjectCode,
            'WorkOrderCode': this.data.WorkOrderCode,
            'Money': this.data.Money,
            'TravelDays': this.data.TravelDays,
            'Memo': this.data.Memo,
          }
        }
      } else {
        console.log("未填写完整")
      }
    } else if (this.data.cardFrom == 'department') {
      if (this.data.Money == '') {
        this.setData({
          checkMoney: false
        })
      }
      if (this.data.Memo == '') {
        this.setData({
          checkMemo: false
        })
      }
      if (
        this.data.checkMoney && this.data.checkMemo) {
        console.log("可以提交")
        if (this.data.cardType == 'edit') {
          var upData = {
            'ID': this.data.ID,
            'Categroy': this.data.Category,
            'Money': this.data.Money,
            'Memo': this.data.Memo,
          }
        }
      } else {
        console.log("未填写完整")
      }
    } else if (this.data.cardFrom == 'project') {
      if (this.data.ProjectCode == '') {
        this.setData({
          checkProject: false
        })
      }
      if (this.data.Money == '') {
        this.setData({
          checkMoney: false
        })
      }
      if (this.data.Memo == '') {
        this.setData({
          checkMemo: false
        })
      }
      if (this.data.checkProject &&
        this.data.checkMoney && this.data.checkMemo) {
        console.log("可以提交")
        if (this.data.cardType == 'edit') {
          var upData = {
            'ID': this.data.ID,
            'Categroy': this.data.Category,
            'ProjectCode': this.data.ProjectCode,
            'Money': this.data.Money,
            'Memo': this.data.Memo,
          }
        }
      } else {
        console.log("未填写完整")
      }
    } else if (this.data.cardFrom == 'outMoneyBill') {
      if (this.data.Money == '') {
        this.setData({
          checkMoney: false
        })
      }
      if (this.data.Memo == '') {
        this.setData({
          checkMemo: false
        })
      }
      if (
        this.data.checkMoney && this.data.checkMemo) {
        console.log("可以提交")
        if (this.data.cardType == 'edit') {
          var upData = {
            'ID': this.data.ID,
            'Money': this.data.Money,
            'Memo': this.data.Memo,
          }
        }
      } else {
        console.log("未填写完整")
      }
    }

  }
})