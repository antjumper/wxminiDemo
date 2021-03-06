// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     id:"",
     title:"",
     date:"",
     source:"",
     firstImage: "",
     content: "",
     readCount:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getNewsDetail()
  },
  // 刷新 不需要
  // onPullDownRefresh() {
  //   this.getNewsDetail(() => {
  //     wx.stopPullDownRefresh()
  //   })
  // },
  //获取网络数据
  getNewsDetail(callback){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    }),
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail?id='+this.data.id,
      success: res => {
        let result = res.data.result
        console.log(result)
        this.setDetailData(result)
      },
      complete: () => {
        wx.hideToast()
        callback && callback()
      }
    })
  },
  //关联网络数据
  setDetailData(result){
    let arr = result.content
    this.setData({
      id: result.id,
      title: result.title,
      date: result.date,
      source: result.source,
      firstImage: result.firstImage,
      content: arr,
      readCount: result.readCount
    })

  },
  
  onTapBack: function (e) {
    console.debug(e);
    wx.navigateBack()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})