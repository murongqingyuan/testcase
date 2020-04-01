// pages/debit/PerDebit/PerDebit.js
const allData = require('../../../utils/server.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "转出",
      "转入"
    ],
    outDebitList: [],
    inDebitList: [],
    windowHeight: getApp().globalData.windowHeight,
    SearchKey: '',
    StartDate: '',
    EndDate: '',
    Page: [1, 1, 1, 1],
    Size: getApp().globalData.Size,
    totalCount: [0, 0], //总条数
    scrollTopNum: [0, 0], //当前页面应该滚动到的位置
    lastScroll: [0, 0], //记录上一个页面滚动到的位置
    showDialog: false,
    inited: false,
    loadMore: false,
    isRefresh: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    setTimeout(function() {
      _this.setData({
        outDebitList: allData.getPerOutDebitList(),
        inDebitList: allData.getPerInDebitList(),
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
  onNavBarTap: function(event) {
    // 获取点击的navbar的index
    //在滑动之前先设置好当前页面scroll的位置
    console.log(1111111)
    var change = "scrollTopNum[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: this.data.lastScroll[this.data.navbarActiveIndex]
    })
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
    // 获取方式参考project
  },

  /**
   * 
   */
  onBindAnimationFinish: function({
    detail
  }) {
    var change = "scrollTopNum[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: this.data.lastScroll[this.data.navbarActiveIndex]
    })
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  },
  getMore() {
    this.setData({
      outDebitList: this.data.outDebitList.concat(this.data.outDebitList)
    })
  },
  addDebit() {
    wx.navigateTo({
      url: '../../../pages/debit/addPerDebit/addPerDebit',
    })
  },

  getDebitData(index) {
    var _this = this;
    var categroy = '';

    // 这里需要吧获取到的数据分类：转入转出一起的
    var sendData = {
      'Type': 'GetPerDebitRecordList',
      'Page': 1,
      'Size': this.data.Size,
      'SearchKey': this.data.SearchKey,
      'StartDate': this.data.StartDate,
      'EndDate': this.data.EndDate,
    }
    wxRequest.post({
      data: sendData
    }).then(function(res) {
      console.log(res)
    })

    if (index == 0) {
      if (this.data.outDebitList.length == 0) {
        this.setData({
          inited: false,

        })
      } else {
        this.setData({
          inited: true,

        })
        return;
      }
    } else if (index == 1) {
      if (this.data.inDebitList.length == 0) {
        this.setData({
          inited: false,

        })
      } else {
        this.setData({
          inited: true,

        })
        return;
      }
    }


    setTimeout(function() {
      if (index == 0) {
        _this.setData({
          outDebitList: allData.getPerOutDebitList()
        })
      } else if (index == 1) {
        _this.setData({
          inDebitList: allData.getPerInDebitList()
        })
      }
      _this.setData({
        inited: true,
        isRefresh: false,
      })
    }, 2000)
  },
  search(e) {
    this.setData({
      SearchKey: e.detail.searchKey,
      SartDate: e.detail.startDate,
      EndDate: e.detail.endDate
    })
    this.getDebitData();
  },
  reset() {

  },
  bindRefresh(e) {
    console.log(e)
    var _this = this;
    var change = "Page[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: 1
    })

    console.log("refresh Page:", this.data.Page)
    if (this.data.navbarActiveIndex == 0) {
      this.setData({
        outDebitList: [],
      })
    } else if (this.data.navbarActiveIndex == 1) {
      this.setData({
        inDebitList: [],
      })
    }

    this.getDebitData(this.data.navbarActiveIndex)

  },

  bindLoadMore(e) {
    var _this = this
    console.log(e)
    if (this.data.totalCount[this.data.navbarActiveIndex] <= this.data.Page[this.data.navbarActiveIndex] * this.data.Size) {
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
    var change = "Page[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: this.data.Page[this.data.navbarActiveIndex] + 1
    })
    console.log(this.data.Page)
    if (this.data.navbarActiveIndex == 0) {
      setTimeout(function() {
        _this.setData({
          outDebitList: _this.data.outDebitList.concat(allData.getPerOutDebitList()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 1) {
      setTimeout(function() {
        _this.setData({
          inDebitList: _this.data.inDebitList.concat(allData.getPerInDebitList()),
          loadMore: false
        })
      }, 2000)
    }


  },
  scrollTop() {
    var change = "scrollTopNum[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: 0
    });

  },
  scrolltoupper: function(e) {
    var change = "lastScroll[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: e.detail.scrollTop
    });
  },

})