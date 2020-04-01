// pages/add/addMember/addMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ID: '',
    IsManageAssistant: false, //公司管理层
    IsProjectManager: false, //项目经理
    IsDptManager: false, //部门经理
    IsInfoManager: false, //信息管理员
    IsHR: false, //认识管理员
    IsDocumentManager: false, //文档管理员
    IsFinance: false, //财务
    IsCashier: false, //出纳
    IsStorageManager: false, //仓库管理员
    IsPurchasing: false, //采购
    IsBoss: false,
    Name: '',
    Code: '',
    LoginPSW: '',
    Mobile: '',
    CorpEMail: '',
    Holiday: '',
    Birthday: '',
    DepartmentID: '',
    DepartmentName: '',

    checkName: true,
    checkCode: true,
    checkLoginPSW: true,
    checkMobile: true,
    checkCorpEMail: true,
    checkHoliday: true,
    checkBirthday: true,
    checkDepartmentID: true,
    AvatarUrl: '',
    tempAvatar: '', //选择图片的缓存
    DepartmentArray: [{
      "ID": "0001",
      "Name": "研发"
    }, {
      "ID": "0002",
      "Name": "综管"
    }, {
      "ID": "0003",
      "Name": "市场"
    }, {
      "ID": "0004",
      "Name": "工程"
    }, {
      "ID": "0005",
      "Name": "售后"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.add == 'false') {
      var getData = JSON.parse(options.editInfo);
      console.log(getData)
      this.setData({
        ID: getData.ID,
        Name: getData.Name,
        Code: getData.Code,
        LoginPSW: getData.LoginPSW,
        Mobile: getData.Mobile,
        CorpEMail: getData.CorpEMail,
        Holiday: getData.Holiday,
        Birthday: getData.Birthday,
        DepartmentID: getData.DepartmentID,
        DepartmentName: getData.DepartmentName,
        IsManageAssistant: getData.IsManageAssistant,
        IsProjectManager: getData.IsProjectManager,
        IsDptManager: getData.IsDptManager,
        IsInfoManager: getData.IsInfoManager,
        IsHR: getData.IsHR,
        IsDocumentManager: getData.IsDocumentManager,
        IsFinance: getData.IsFinance,
        IsCashier: getData.IsCashier,
        IsStorageManager: getData.IsStorageManager,
        IsPurchasing: getData.IsPurchasing,
        IsBoss: getData.IsBoss,
      })

    } else {
      this.mySetData("DepartmentID", this.data.DepartmentArray[0].ID)
      this.mySetData("DepartmentName", this.data.DepartmentArray[0].Name)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //switch选项
  switchChange(e) {
    if (e.target.dataset.id == "IsManageAssistant") {
      this.mySetData("IsManageAssistant", e.detail.value);
    } else if (e.target.dataset.id == "IsProjectManager") {
      this.mySetData("IsProjectManager", e.detail.value);
    } else if (e.target.dataset.id == "IsDptManager") {
      this.mySetData("IsDptManager", e.detail.value);
    } else if (e.target.dataset.id == "IsInfoManager") {
      this.mySetData("IsInfoManager", e.detail.value);
    } else if (e.target.dataset.id == "IsHR") {
      this.mySetData("IsHR", e.detail.value);
    } else if (e.target.dataset.id == "IsDocumentManager") {
      this.mySetData("IsDocumentManager", e.detail.value);
    } else if (e.target.dataset.id == "IsFinance") {
      this.mySetData("IsFinance", e.detail.value);
    } else if (e.target.dataset.id == "IsCashier") {
      this.mySetData("IsCashier", e.detail.value);
    } else if (e.target.dataset.id == "IsStorageManager") {
      this.mySetData("IsStorageManager", e.detail.value);
    } else if (e.target.dataset.id == "IsPurchasing") {
      this.mySetData("IsPurchasing", e.detail.value);
    } else if (e.target.dataset.id == "IsBoss") {
      this.mySetData("IsBoss", e.detail.value);
    }
  },
  inputChange(e) {
    if (e.target.dataset.id == "Name") {
      this.mySetData("Name", e.detail.value);
      this.mySetData("checkName", true);
    } else if (e.target.dataset.id == "Code") {
      this.mySetData("Code", e.detail.value);
      this.mySetData("checkCode", true);
    } else if (e.target.dataset.id == "LoginPSW") {
      this.mySetData("LoginPSW", e.detail.value);
      this.mySetData("checkLoginPSW", true);
    } else if (e.target.dataset.id == "CorpEMail") {
      this.mySetData("CorpEMail", e.detail.value);
      this.mySetData("checkCorpEMail", true);
    } else if (e.target.dataset.id == "Mobile") {
      this.mySetData("Mobile", e.detail.value);
      this.mySetData("checkMobile", true);
    } else if (e.target.dataset.id == "Holiday") {
      this.mySetData("Holiday", e.detail.value);
      this.mySetData("checkHoliday", true);
    } else if (e.target.dataset.id == "Birthday") {
      this.mySetData("Birthday", e.detail.value);
      this.mySetData("checkBirthday", true);
    } else if (e.target.dataset.id == "DepartmentID") {
      this.mySetData("DepartmentID", e.detail.value);
      this.mySetData("checkDepartmentID", true);
    }


  },

  bindPickerChange(e) {
    console.log(e)
    this.mySetData("DepartmentID", this.data.DepartmentArray[e.detail.value].ID)
    this.mySetData("DepartmentName", this.data.DepartmentArray[e.detail.value].Name)

    this.mySetData("checkDepartmentID", true)

  },
  //自定义赋值
  mySetData(dataName, dataValue) {
    this.setData({
      [dataName]: dataValue
    })
  },

  bindSelectImage() {
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        _this.mySetData("tempAvatar", res.tempFilePaths)
      }
    })
  },

  bindCheck() {
    if (this.data.Name.length == 0) {
      this.mySetData("checkName", false)
    }
    if (this.data.Code.length == 0) {
      this.mySetData("checkCode", false)
    }
    if (this.data.LoginPSW.length == 0) {
      this.mySetData("checkLoginPSW", false)
    }
    if (this.data.Mobile.length == 0) {
      this.mySetData("checkMobile", false)
    }
    if (this.data.CorpEMail.length == 0) {
      this.mySetData("checkCorpEMail", false)
    }
    if (this.data.Holiday.length == 0) {
      this.mySetData("checkHoliday", false)
    }
    if (this.data.Birthday.length == 0) {
      this.mySetData("checkBirthday", false)
    }
    if (this.data.DepartmentID.length == 0) {
      this.mySetData("checkDepartmentID", false)
    }
    if (this.data.checkName &&
      this.data.checkCode &&
      this.data.checkLoginPSW &&
      this.data.checkMobile &&
      this.data.checkCorpEMail &&
      this.data.checkHoliday &&
      this.data.checkBirthday &&
      this.data.checkDepartmentID) {
      console.log("可以提交")

    } else {
      console.log("未填写完整")
    }

  }
})