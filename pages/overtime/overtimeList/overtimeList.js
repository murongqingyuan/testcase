// pages/overtime/overtime.js
const allData = require('../../../utils/overtime')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inited:false,
    windowHeight: getApp().globalData.windowHeight,
    targetAcList:[],
    inited: false,
    loadMore: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    setTimeout(function() {
      _this.setData({
        targetAcList: allData.getOverTimeList(),
        inited: true
      })

      console.log(_this.data.targetAcList[0])
    }, 2000)
    getApp().globalData.global("lalalalalalalala")
  },
  bindShowDialog:function(){
    console.log(123)
      wx.navigateTo({
        url: '../addOvertime/addOvertime',
      })
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

  }
})