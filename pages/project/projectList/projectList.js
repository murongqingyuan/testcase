// pages/project/projectList/projectList.js

const allData = require('../../../utils/project.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: getApp().globalData.windowHeight,
    navbarActiveIndex: 0,
    navbarTitle: [
      "工程",
      "销售",
      "维修",
      "公司"
    ],

    ProjectList: [],
    RepairProjectList: [],
    SaleProjectList: [],
    CorpProjectList: [],

    SearchKey: '',
    StartDate: '',
    EndDate: '',
    Page: [1, 1, 1, 1],
    Size: getApp().globalData.Size,
    totalCount: [0, 0, 0, 0], //总条数
    scrollTopNum: [0, 0, 0, 0],//当前页面应该滚动到的位置
    lastScroll: [0, 0, 0, 0],//记录上一个页面滚动到的位置
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
    this.getProjectData(this.data.navbarActiveIndex)

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
  onReachBottom: function(e) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

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
    this.getProjectData(this.data.navbarActiveIndex)
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

    this.getProjectData(this.data.navbarActiveIndex)
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
  addProject(e) {

    wx.navigateTo({
      url: '../addProject/addProject?action=add&type=' + e.target.dataset.type,
    })
    this.bindHideDialog();
  },

  getProjectData(index) {
    var _this = this;
    var categroy = '';

    if (index == 0) categroy = 'Projects'
    if (index == 1) categroy = 'RepairProjects'
    if (index == 2) categroy = 'SaleProjects'
    if (index == 3) categroy = 'CorpProjects'

    var sendData = {
      'Type': 'GetProjectsList',
      'Page': 1,
      'Size': this.data.Size,
      'Category': categroy,
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
      if (this.data.ProjectList.length == 0) {
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
      if (this.data.SaleProjectList.length == 0) {
        this.setData({
          inited: false,
         
        })
      } else {
        this.setData({
          inited: true,
         
        })
        return;
      }
    } else if (index == 2) {
      if (this.data.RepairProjectList.length == 0) {
        this.setData({
          inited: false,
        
        })
      } else {
        this.setData({
          inited: true,
         
        })
        return;
      }
    } else if (index == 3) {
      if (this.data.CorpProjectList.length == 0) {
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
          ProjectList: allData.getProject()
        })
      } else if (index == 1) {
        _this.setData({
          SaleProjectList: allData.getProject()
        })
      } else if (index == 2) {
        _this.setData({
          RepairProjectList: allData.getProject()
        })
      } else if (index == 3) {
        _this.setData({
          CorpProjectList: allData.getProject()
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
    this.getProjectData();
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
      setTimeout(function() {
        _this.setData({
          ProjectList: _this.data.ProjectList.concat(allData.getProject()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 1) {
      setTimeout(function() {
        _this.setData({
          SaleProjectList: _this.data.SaleProjectList.concat(allData.getProject()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 2) {
      setTimeout(function() {
        _this.setData({
          RepairProjectList: _this.data.RepairProjectList.concat(allData.getProject()),
          loadMore: false
        })
      }, 2000)
    } else if (this.data.navbarActiveIndex == 3) {
      setTimeout(function() {
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
  scrolltoupper: function(e) {
    var change = "lastScroll[" + this.data.navbarActiveIndex + "]"
    this.setData({
      [change]: e.detail.scrollTop
    });
  },

})