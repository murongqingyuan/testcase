// pages/listMember/listMember.js

const allMember = require('../../../utils/member.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberList: [],
    inited: false,
    loadMore: false,
    windowHeight: getApp().globalData.windowHeight,

    isRefresh: false,
    SearchKey: '',
    StartDate: '',
    EndDate: '',

    totalCount: 21, //总条数
    scrollTopNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(allMember.getMemberList())
    var _this = this
    setTimeout(function() {
      _this.setData({
        memberList: allMember.getMemberList(),
        inited: true
      })
    }, 2000)

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
  addBill() {

    wx.navigateTo({
      url: '../addBill/addBill?type=add&billInfo=' + '&cardFrom=travel',
    })
  },

  search(e) {
    // 此处做本地搜索
    console.log("收到搜索")
    this.setData({
      SearchKey: e.detail.searchKey,
      SartDate: e.detail.startDate,
      EndDate: e.detail.endDate
    })
    this.getMemberData();

  },
  reset() {
    console.log("收到重置")
  },
  getMemberData() {
    var _this = this
    this.setData({
      inited: false,

    })
    var sendData = {
      'Type': 'GetCorpEmployeeList',

    }
    wxRequest.post({
      data: sendData
    }).then(function(res) {
      console.log(res)
    })


    setTimeout(function() {
      _this.setData({
        memberList: allMember.getMemberList(),
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
      memberList: []
    })

    this.getMemberData()

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
    setTimeout(function() {
      _this.setData({
        memberList: _this.data.memberList.concat(allMember.getMemberList()),
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