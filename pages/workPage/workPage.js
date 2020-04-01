// pages/workPage/workPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  jump(e) {
    // console.log(e.target.dataset.page)
    if (e.target.dataset.page == 'companyPage') {
      wx.navigateTo({
        url: '../companyPage/companyPage',
      })
    } else if (e.target.dataset.page == 'bxdPage') {
      wx.navigateTo({
        url: '../list/listBxd/listBxd',
      })
    } else if (e.target.dataset.page == 'memberPage') {
      wx.navigateTo({
        url: '../list/listMember/listMember',
      })
    } else if (e.target.dataset.page == 'DptDebit') {
      wx.navigateTo({
        url: '../debit/DptDebit/DptDebit',
      })
    } else if (e.target.dataset.page == 'PerDebit') {
      wx.navigateTo({
        url: '../debit/PerDebit/PerDebit',
      })
    } else if (e.target.dataset.page == 'dptPayBill') {
      wx.navigateTo({
        url: '../payBill/DptPayBillList/DptPayBillList',
      })
    } else if (e.target.dataset.page == 'prjPayBill') {
      wx.navigateTo({
        url: '../payBill/PrjPayBillList/PrjPayBillList',
      })
    } else if (e.target.dataset.page == 'travelPayBill') {
      wx.navigateTo({
        url: '../payBill/TravelPayBillList/TravelPayBillList',
      })
    } else if (e.target.dataset.page == 'outMoneyBillList') {
      wx.navigateTo({
        url: '../payBill/outMoneyBillList/outMoneyBillList',
      })
    } else if (e.target.dataset.page == 'workDailyList') {
      wx.navigateTo({
        url: '../workDaily/workDailyList/workDailyList',
      })
    } else if (e.target.dataset.page == 'dptMoneyAc') {
      wx.navigateTo({
        url: '../moneyAc/dptMoneyAc/dptMoneyAc',
      })
    } else if (e.target.dataset.page == 'perMoneyAc') {
      wx.navigateTo({
        url: '../moneyAc/perMoneyAc/perMoneyAc',
      })
    } else if (e.target.dataset.page == 'dptTargetAc') {
      wx.navigateTo({
        url: '../targetAc/dptTargetAc/dptTargetAc',
      })
    } else if (e.target.dataset.page == 'perTargetAc') {
      wx.navigateTo({
        url: '../targetAc/perTargetAc/perTargetAc',
      })
    } else if (e.target.dataset.page == 'projectList') {
      wx.navigateTo({
        url: '../project/projectList/projectList',
      })
    } else if (e.target.dataset.page == 'overtime') {
      wx.navigateTo({
        url: '../overtime/overtime',
      })
    }
    
  }
})