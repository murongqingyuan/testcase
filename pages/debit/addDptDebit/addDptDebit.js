// pages/debit/addDptDebit/addDptDebit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    TotMoney: 20000,
    DepartmentID: '',
    DepartmentName: '',
    Money:'',
    checkMoney:true,
    checkDepartmentName:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
  dialogSelect(e) {

    var tmp = JSON.parse(e.detail)
    this.setData({
        DepartmentID: tmp.ID,
        DepartmentName: tmp.Name,
      checkDepartmentName:true
      }),
      console.log("DepartmentName", this.data.DepartmentName)
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
    this.searchDialog.selectDepartment()
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
    if (this.data.DepartmentName == "") {
      this.mySetData('checkDepartmentName', false)
    }
    if(this.data.checkDepartmentName&&this.data.checkMoney){
      console.log("下一步")
    }else{
      console.log("不完整")
    }
  },
})