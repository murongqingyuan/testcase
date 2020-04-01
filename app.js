//app.js
const allMember = require('utils/member.js')
const global = require('utils/global.js')
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      }),
      wx.getSystemInfo({
        success: res => {
          //导航高度
          this.globalData.navHeight = res.statusBarHeight + 46;
          let clientHeight = res.windowHeight,
            clientWidth = res.windowWidth,
            rpxR = 750 / clientWidth;
          var calc = clientHeight * rpxR;
          console.log(calc)
          this.globalData.windowHeight = calc
        },
        fail(err) {
          console.log(err);
        }
      }),
     
    this.globalData.memberList = allMember.getMemberList()
    this.globalData.AllEmployee = allMember.getMemberList()

  },
  globalData: {
    userInfo: null,
    companyID:'001',
    navHeight: 0,
    windowHeight: 600,
    Size:20,  //加载条数
    Password:'123',
    Code: 'yangjie',
    Name: '杨杰',
    isManageAssistant: true,
    isProjectManager: true,
    isDptManager: true,
    isInfoManager: true,
    isHR: true,
    isDocumentManager: true,
    isFinance: true,
    isCashier: true,
    isStorageManager: true,
    isPurchasing: true,
    isBoss: true,
    DepartmentName: '研发部',
    memberList: [],
    AllEmployee:[],
    global:global
  }
})