// pages/payBill/outMoneyBillList/outMoneyBillList.js
const allData = require('../../../utils/outMoneyBill.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    outMoneyBillList: [],
    windowHeight: getApp().globalData.windowHeight,
    inited: false,

    loadMore: false,
    isRefresh: false,
    SearchKey: '',
    StartDate: '',
    EndDate: '',
    Page: 1,
    Size: getApp().globalData.Size,
    totalCount: 21, //总条数
    scrollTopNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    setTimeout(function(){
      _this.setData({
        outMoneyBillList: allData.getOutMoneyBillList(),
        inited:true
      })
    },2000)
    
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
  addBill() {

    wx.navigateTo({
      url: '../addBill/addBill?type=add&billInfo=' + '&cardFrom=outMoneyBill',
    })
  },

  search(e){
    console.log("收到搜索")
    this.setData({
      SearchKey: e.detail.searchKey,
      SartDate: e.detail.startDate,
      EndDate: e.detail.endDate
    })
    this.getOutMoneyBillData();
  },
  reset(){
    console.log("收到重置")
  },
  getOutMoneyBillData() {
    var _this = this
    this.setData({
      inited: false,

    })
    var sendData = {
      'Type': 'GetPrjPayBillList',
      'Page': 1,
      'Size': this.data.Size,
      'SearchKey': this.data.SearchKey,
      'StartDate': this.data.StartDate,
      'EndDate': this.data.EndDate,
    }
    wxRequest.post({
      data: sendData
    }).then(function (res) {
      console.log(res)
    })


    setTimeout(function () {
      _this.setData({
        outMoneyBillList: allData.getOutMoneyBillList(),
        inited: true,
        isRefresh: false,
      })
    }, 2000)
  },

  bindRefresh(e) {
    console.log(e)
    var _this = this;

    this.setData({
      Page: 1,
      outMoneyBillList: []
    })

    this.getOutMoneyBillData()

  },

  bindLoadMore(e) {
    var _this = this
    console.log(e)
    if (this.data.totalCount <= this.data.Page * this.data.Size) {
      wx.showToast({
        title: '没有更多了',
        icon: 'none',
        duration: 1500
      })
      return
    }
    if (!this.data.loadMore) {
      this.setData({
        loadMore: true
      })
    }
    this.setData({
      Page: this.data.Page + 1
    })
    console.log(this.data.Page)
    setTimeout(function () {
      _this.setData({
        outMoneyBillList: _this.data.outMoneyBillList.concat(allData.getOutMoneyBillList),
        loadMore: false
      })
    }, 2000)
  },
  scrollTop() {
    this.setData({
      scrollTopNum: 0
    });
  },
})