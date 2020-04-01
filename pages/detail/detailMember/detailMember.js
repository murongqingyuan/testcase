// pages/detail/detailMember/detailMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IsManageAssistant: false,			//公司管理层
    IsProjectManager: false,			//项目经理
    IsDptManager: false,				//部门经理
    IsInfoManager: false,				//信息管理员
    IsHR: false,						//认识管理员
    IsDocumentManager: false,		//文档管理员
    IsFinance: false,					//财务
    IsCashier: false,					//出纳
    IsStorageManager: false,			//仓库管理员
    IsPurchasing: false,				//采购
    IsBoss: false,		

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var getData = JSON.parse(options.memberInfo)
    console.log(getData)
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
  switch1Change(e) {


   this.setData({
     IsManageAssistant: e.target.dataset.id == "IsManageAssistant" ? e.detail.value : this.data.IsManageAssistant,
     IsProjectManager: e.target.dataset.id == "IsProjectManager" ? e.detail.value : this.data.IsProjectManager,
     IsDptManager: e.target.dataset.id == "IsDptManager" ? e.detail.value : this.data.IsDptManager,
     IsInfoManager: e.target.dataset.id == "IsInfoManager" ? e.detail.value : this.data.IsInfoManager,
     IsHR: e.target.dataset.id == "IsHR" ? e.detail.value : this.data.IsHR,
     IsDocumentManager: e.target.dataset.id == "IsDocumentManager" ? e.detail.value : this.data.IsDocumentManager,
     IsFinance: e.target.dataset.id == "IsFinance" ? e.detail.value : this.data.IsFinance,
     IsCashier: e.target.dataset.id == "IsCashier" ? e.detail.value : this.data.IsCashier,
     IsStorageManager: e.target.dataset.id == "IsStorageManager" ? e.detail.value : this.data.IsStorageManager,
     IsPurchasing: e.target.dataset.id == "IsPurchasing" ? e.detail.value : this.data.IsPurchasing,
     IsBoss: e.target.dataset.id == "IsBoss" ? e.detail.value : this.data.IsBoss,
   })
  
  }
})