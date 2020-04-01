// pages/payBill/payBillDetail/payBillDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardFrom:'',
    overTimeInfo:'',
    Applyer:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var getData = JSON.parse(options.overTimeInfo)
    var getApplyer = JSON.parse(options.applyer)
    var getFrom = options.cardFrom
    this.setData({
      overTimeInfo: getData,
      Applyer: getApplyer,
      cardFrom: getFrom
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
  reject() {
    console.log('11111111111')
  },

  // bindEdit() {
  //   console.log('2222')

  //   wx.navigateTo({
  //     url: '../../../pages/add/addBxd/addBxd?add=false&editInfo=' + JSON.stringify(this.data.bxdInfo),
  //   })
  // },

   editBill() {
   
  },
})