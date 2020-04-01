// pages/workDaily/workDaily.js
const allDaily = require('../../../utils/daily.js')
const wxRequest = require('../../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dailyList: [],
    showDialog: false,
    inited: false,
    loadMore: false,
    selectEmployee: {},
    windowHeight: getApp().globalData.windowHeight,

    SearchKey: '',
    StartDate: '',
    EndDate: '',
    Page: 1,
    Size: getApp().globalData.Size,
    totalCount: 20, //总条数
    scrollTopNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    this.searchDialog = this.selectComponent('#searchDialog')

    console.log(this.data.dailyList)

    var memberList = getApp().globalData.memberList
    for (var i in memberList) {
      if (memberList[i].Code == getApp().globalData.Code) {
        this.setData({
          selectEmployee: memberList[i]
        })
        break;
      }
    }
    this.getWorkDailyData()
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

  showDialog() {

    this.searchDialog.selectEmployee()
    this.setData({
      showDialog: true
    })
  },
  dialogSelect(e) {

    var tmp = JSON.parse(e.detail)
    var memberList = getApp().globalData.memberList
    for (var i in memberList) {
      if (memberList[i].Code == tmp.Code) {
        this.setData({
          selectEmployee: memberList[i]
        })
        break;
      }
    }
    this.hideDialog();

  },
  hideDialog() {
    console.log("hide")
    this.setData({
      showDialog: !this.data.showDialog
    })
  },

  getWorkDailyData() {
    var _this = this
    this.setData({
      inited: false,
     
    })
    var sendData = {
      'Type': 'GetWorkDaily',
      'Page': 1,
      'Size': this.data.Size,
      'Code': this.data.selectEmployee.Code,
      'SearchKey': this.data.SearchKey,
      'StartDate': this.data.StartDate,
      'EndDate': this.data.EndDate,
    }
    wxRequest.post({
      data: sendData
    }).then(function(res) {
      console.log(res)
    })


    setTimeout(function() {
      _this.setData({
        dailyList: allDaily.getDailyList(),
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
      dailyList:[]
    })

    this.getWorkDailyData()

  },

  bindLoadMore(e) {
    var _this = this
    console.log(e)
    if (this.data.totalCount<= this.data.Page * this.data.Size) {
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
        dailyList: _this.data.dailyList.concat(allDaily.getDailyList()),
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