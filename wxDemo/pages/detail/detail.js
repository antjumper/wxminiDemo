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
 
  onPullDownRefresh() {
    this.getNewsDetail(() => {
      wx.stopPullDownRefresh()
    })
  },
  getNewsDetail(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail?id='+this.data.id,
      success: res => {
        let result = res.data.result
        console.log(result)
        this.setDetailData(result)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  setDetailData(result){
    var xmlString = ""
    let arr = result.content
    console.log(arr)
    for (var i = 0, len = arr.length; i < len; i++) {
      let dic_item = arr[i]
      let src = dic_item.src
      let text = dic_item.text
      xmlString = xmlString + "\r\n<" + dic_item.type
      if (src){
        xmlString = xmlString + " src=" + src
      }
      xmlString = xmlString + ">"

      if (text){
        xmlString = xmlString + text
      }
      xmlString = xmlString + "<\/" + dic_item.type + ">"
      // xmlString = xmlString + "<" + dic_item.type + " src=" + dic_item.src
      //   + " >"
      //   + dic_item.text
      //   + "</" + dic_item.type + ">"
    }
    // for (dic_item in arr){
    //   console.log(xmlString)
    //   xmlString = xmlString + "<" + dic_item.type + " src=" + dic_item.src
    //     +" >" 
    //     + dic_item.text
    //     + "</" + dic_item.type+">"
    // }
    this.setData({
      id: result.id,
      title: result.title,
      date: result.date,
      source: result.source,
      firstImage: result.firstImage,
      content: xmlString,
      readCount: result.readCount
    })

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