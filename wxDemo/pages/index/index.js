// pages/index/index.js
// 值为gn、gj、cj、yl、js、ty和other其中之一

const h_btn_flag_arr = [
  "gn",
  "gj",
  "cj",
  "yl",
  "js",
  "ty",
  "other"
]
const h_btn_text_arr = [
  "国内",
  "国际",
  "财经",
  "娱乐",
  "军事",
  "体育",
  "其他"
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationItems: h_btn_text_arr,
    currentTab: 0
  },
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    }) 
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})