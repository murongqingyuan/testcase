// pages/loginPage/loginPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    
    toastIsShow:false,
    toastContent:'',
    toastSrc:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  log_btn: function() {


    
    var name = this.data.userName;
    // if (name == "") {
    //   this.toastShow('验证失败', "../../images/icon_wrong.png");
    // }
  },
  
  toastShow: function(str, src) {
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
    }, 2000);
  }



})