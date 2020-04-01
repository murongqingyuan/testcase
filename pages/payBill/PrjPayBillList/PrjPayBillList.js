// pages/payBill/TravelPayBillList/TravelPayBillList.js
const allData = require('../../../utils/server.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toastIsShow: false,
    selectShowMore: false,
    showScrollTop: false,
    page: 1,
    size: 20,
    x: 999,
    y: 999,
    prjPayBillList: [],

    windowHeight: getApp().globalData.windowHeight,
    inited: false,
    loadMore: false,
    isRefresh:false,
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
  onLoad: function(options) {
    var _this = this;
    setTimeout(function() {
      _this.setData({
        prjPayBillList: allData.getPrjPayBillList(),
        inited: true
      })
    }, 2000)

    console.log(this.data.prjPayBillList)
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
  toastShow: function(str, src) {
    //自定义toast
    var _this = this;
    _this.setData({
      toastIsShow: true,
      toastContent: str,
      toastSrc: src
    });
    setTimeout(function() { //toast消失
      _this.setData({
        toastIsShow: false
      });
    }, 1500);
  },
  funb() {
    this.selectComponent("#fb").fa();
  },

  onPullDownRefresh() {
    console.log("kaishi")
    // setTimeout(function(){
    //   wx.stopPullDownRefresh()
    // },100)
  },
  onReachBottom() {
    console.log("上拉")
  },


  scrollToTop() {
    //回到顶部
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },

  onPageScroll(e) {
    //滚动监听，控制回到顶部按钮显示
    if (e.scrollTop > 200) {
      this.setData({
        showScrollTop: true,
      })
    } else {
      this.setData({
        showScrollTop: false,
      })
    }
  },
  addBill() {

    wx.navigateTo({
      url: '../addBill/addBill?type=add&billInfo=' + '&cardFrom=project',
    })
  },


  search(e) {
    console.log("收到搜索")
    this.setData({
      SearchKey: e.detail.searchKey,
      SartDate: e.detail.startDate,
      EndDate: e.detail.endDate
    })
    this.getPrjPayBillData();


  },
  reset() {
    console.log("收到重置")
  },

  getPrjPayBillData() {
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
        prjPayBillList: allData.getPrjPayBillList(),
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
      prjPayBillList: []
    })

    this.getPrjPayBillData()

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
        prjPayBillList: _this.data.prjPayBillList.concat(allData.getPrjPayBillList()),
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