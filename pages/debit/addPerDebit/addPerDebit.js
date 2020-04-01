// pages/debit/addPerDebit/addPerDebit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    TotMoney: 20000,
    EmployeeCode: '',
    EmployeeName: '',
    Money: '',
    checkMoney: true,
    checkEmployeeName: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.searchDialog = this.selectComponent('#searchDialog')
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
  dialogSelect(e) {

    var tmp = JSON.parse(e.detail)
    this.setData({
      EmployeeCode: tmp.ID,
      EmployeeName: tmp.Name,
      checkEmployeeName: true
    }),
      console.log("EmployeeName", this.data.EmployeeName)
    this.hideDialog();
  },

  hideDialog() {
    console.log("hidedialog")
    this.setData({
      showDialog: false,
    })
  },
  showDialog() {
    this.searchDialog.selectFilter()
    this.searchDialog.selectEmployee()
    this.setData({
      showDialog: true,
    })
  },
  mySetData(name, value) {
    this.setData({
      [name]: value
    })
  },

  bindInput(e) {

    this.mySetData('Money', e.detail.value)
    if (e.detail.value > this.data.TotMoney) {
      this.mySetData('checkMoney', false)
    } else if (e.detail.value == 0) {
      this.mySetData('checkMoney', false)
    } else {
      this.mySetData('checkMoney', true)
    }

  },
  bindCheck() {
    if (this.data.Money == "") {
      this.mySetData('checkMoney', false)
    }
    if (this.data.EmployeeName == "") {
      this.mySetData('checkEmployeeName', false)
    }
    if (this.data.checkEmployeeName && this.data.checkMoney) {
      console.log("下一步")
    } else {
      console.log("不完整")
    }
  },
})