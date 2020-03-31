//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    datas:['a','b','c'],
    active:'b'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickclick(){
    wx.requestSubscribeMessage({
      tmplIds: ['ZhSn2nTHdB5yuwIFdQRNkzv8qHOSiRcnHyD-kK5P0fY'],
      success(res){
        console.log(res)
      }
    })
  },
  clickme(e){
    let _this = this
    console.log(e.currentTarget.dataset.name)
    console.log(this.data.active)
    this.setData({
      active:e.currentTarget.dataset.name
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    wx.getUserInfo({
      complete: (res) => {console.log(res)},
    })

    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx28d00dc194cd3ec0&secret=a77a3d4b0e52fbddb7b8f23b45c13f07',
      success(res){
        // wx.request({
        //   method:'post',

        //   url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='+res.data.access_token,
        //   success(res1){

        //   }
        // })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
