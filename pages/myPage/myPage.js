// pages/myPage/myPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '杨杰',
    isManageAssistant: false,
    isProjectManager: false,
    isDptManager: false,
    isInfoManager: false,
    isHR: false,
    isDocumentManager: false,
    isFinance: false,
    isCashier: false,
    isStorageManager: false,
    isPurchasing: false,
    isBoss: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    that.setData({
      isManageAssistant: getApp().globalData.isManageAssistant,
      isProjectManager: getApp().globalData.isProjectManager,
      isDptManager: getApp().globalData.isDptManager,
      isInfoManager: getApp().globalData.isInfoManager,
      isHR: getApp().globalData.isHR,
      isDocumentManager: getApp().globalData.isDocumentManager,
      isFinance: getApp().globalData.isFinance,
      isCashier: getApp().globalData.isCashier,
      isStorageManager: getApp().globalData.isStorageManager,
      isPurchasing: getApp().globalData.isPurchasing,
      isBoss: getApp().globalData.isBoss,
      showTarget: true,
      targetAmount:200000,
      currentTarget:210000,
      costAmount: 2000,
      currentCost: 900,
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
  showTarget() {
    this.setData({
      showTarget: true
    })
    console.log(this.data.showTarget)
  },
  showMoney() {
    this.setData({
      showTarget: false
    })
    console.log(this.data.showTarget)
  },
})