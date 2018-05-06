// pages/index/index.js
// 值为gn、gj、cj、yl、js、ty和other其中之一
var utils = require('../../utils/util.js')
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
   * 页面的初始数据 +":getHours()"+item.date.getMinutes()
   */
  data: {
    navigationItems: h_btn_text_arr,
    currentTab: 0,
    newsList: [],
    firstNews:{}
  },
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    }) 
    this.getNetworkDataAt(e.currentTarget.dataset.idx)
    },

  getNetworkDataAt(index,callBlock){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    }),
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list?type=' + h_btn_flag_arr[index],
      success: res => {
        let result = res.data.result
        console.log(result)
        if (result && result.length){
          // var arr_result = new Array()

          // for (var item in result) {
          //   var item_dict = {} 
          //   let time = utils.formatTime(Number(item.date),'h:m:s')

          //   item_dict.id = item.id;
          //   item_dict.firstImage = item.firstImage
          //   item_dict.date = item.time
          //   item_dict.source = item.source
          //   item_dict.title = item.title
          //   arr_result.push(item_dict)
          // }  

          let first_new = result[0];
          let news_list = result.slice(1,result.length)
          this.setData({
            newsList: news_list,
            firstNews: first_new
          })
        }
        
        // this.setNow(result)
        // this.setHourlyWeather(result)
        // this.setToday(result)
      },
      complete: () => {
        wx.hideToast()
        callBlock && callBlock()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNetworkDataAt(0)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getNetworkDataAt(this.currentTab,() => {
      wx.stopPullDownRefresh()
    })
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