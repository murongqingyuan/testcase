// pages/workOrder/workOrderList/workOrderList.js
const allData = require('../../../utils/workOrder.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "项目任务",
      "部门任务",
      "公司任务"
    ],
    inited: false,
    isRefresh: false,
    showList: false,
    showDialog: false,
    workOrderList_prj: [],
    workOrderList_dpt: [],
    workOrderList_corp: [],

    windowHeight: getApp().globalData.windowHeight,

    SearchKey: '',
    StartDate: '',
    EndDate: '',
    Page: [1, 1, 1, 1],
    Size: getApp().globalData.Size,
    totalCount: [0, 0, 0], //总条数
    scrollTopNum: [0, 0, 0],//当前页面应该滚动到的位置
    lastScroll: [0, 0, 0],//记录上一个页面滚动到的位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWorkOrderData(this.data.navbarActiveIndex)
    console.log('windowHeight:' + this.data.windowHeight)
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

  bindShowDialog() {
    this.setData({
      showDialog: true
    })
  },
  bindHideDialog() {
    this.setData({
      showDialog: false
    })
  },
  addWorkOrder(e) {
    console.log(e.target.dataset.type)
    wx.navigateTo({
      url: '../addWorkOrder/addWorkOrder?action=add&cardType=' + e.target.dataset.type,
    })
    this.bindHideDialog();
  },


  onNavBarTap: function(event) {
    // 获取点击的navbar的index
    //在滑动之前先设置好当前页面scroll的位置
    var change = "scrollTopNum[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: this.data.lastScroll[this.data.navbarActiveIndex]
    })
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex,
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
    this.getWorkOrderData(this.data.navbarActiveIndex)
  },

  onBindAnimationFinish: function({
    detail
  }) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    var change = "scrollTopNum[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: this.data.lastScroll[this.data.navbarActiveIndex]
    })
    this.setData({
      navbarActiveIndex: detail.current
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
    this.getWorkOrderData(this.data.navbarActiveIndex)
  },

  getWorkOrderData(index) {
    var _this = this;
    var categroy = '';

    if (index == 0) categroy = 'ProjectWorkOrder'
    if (index == 1) categroy = 'DptWorkOrder'
    if (index == 2) categroy = 'CorpWorkOrder'
    
    var sendData = {
      'Type': 'GetWorkOrderList',
      'Page': 1,
      'Size': this.data.Size,
      'Category': categroy,
      'SearchKey': this.data.SearchKey,
      'StartDate': this.data.StartDate,
      'EndDate': this.data.EndDate,
    }
    wxRequest.post({
      data: sendData
    }).then(function (res) {
      console.log(res)
    })


    if (index == 0) {
      if (this.data.workOrderList_prj.length == 0) {
        this.setData({
          inited: false,
          showList: false,
        })
      } else {
        this.setData({
          inited: true,
          showList: true,
        })
        return;
      }
    } else if (index == 1) {
      if (this.data.workOrderList_dpt.length == 0) {
        this.setData({
          inited: false,
          showList: false,
        })
      } else {
        this.setData({
          inited: true,
          showList: true,
        })
        return;
      }
    } else if (index == 2) {
      if (this.data.workOrderList_corp.length == 0) {
        this.setData({
          inited: false,
          showList: false,
        })
      } else {
        this.setData({
          inited: true,
          showList: true,
        })
        return;
      }

    }


    setTimeout(function() {
      if (index == 0) {
        _this.setData({
          workOrderList_prj: allData.getWorkOrder()
        })
      } else if (index == 1) {
        _this.setData({
          workOrderList_dpt: allData.getWorkOrder()
        })
      } else if (index == 2) {
        _this.setData({
          workOrderList_corp: allData.getWorkOrder()
        })
      }
      _this.setData({
        inited: true,
        showList: true,
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
    this.getWorkOrderData();
   
  },
  reset() {

  },
  add() {

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
        ProjectList: [],
      })
    } else if (this.data.navbarActiveIndex == 1) {
      this.setData({
        SaleProjectList: [],
      })
    } else if (this.data.navbarActiveIndex == 2) {
      this.setData({
        RepairProjectList: [],
      })
    } else if (this.data.navbarActiveIndex == 3) {
      this.setData({
        CorpProjectList: [],
      })
    }

    this.getProjectData(this.data.navbarActiveIndex)

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
      setTimeout(function () {
        _this.setData({
          ProjectList: _this.data.ProjectList.concat(allData.getProject()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 1) {
      setTimeout(function () {
        _this.setData({
          SaleProjectList: _this.data.SaleProjectList.concat(allData.getProject()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 2) {
      setTimeout(function () {
        _this.setData({
          RepairProjectList: _this.data.RepairProjectList.concat(allData.getProject()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 3) {
      setTimeout(function () {
        _this.setData({
          CorpProjectList: _this.data.CorpProjectList.concat(allData.getProject()),
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
  scrolltoupper: function (e) {
    var change = "lastScroll[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: e.detail.scrollTop
    });
  },
})