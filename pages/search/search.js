// pages/search/search.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordFlag: 0,
    hotWords: ['西红柿','茄子','萝卜'],
    searchResult: [
      {
        'name': '西红柿',
        'price': 28,
        'imgUrl': 'http://120.79.20.16/static/img/1111.jpg'
      },
      {
        'name': '黄瓜',
        'price': 15,
        'imgUrl': 'http://120.79.20.16/static/img/1111.jpg'
      },
      {
        'name': '萝卜',
        'price': 6,
        'imgUrl': 'http://120.79.20.16/static/img/1111.jpg'
      },
      {
        'name': '茄子',
        'price': 12,
        'imgUrl': 'http://120.79.20.16/static/img/1111.jpg'
      }
    ]
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
    wx.showToast({
      title: 'sdasd',
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
  
  },
  hotWordClick: function(e){
    this.wordFlag = e.target.dataset.index;
    this.setData({
      wordFlag: e.target.dataset.index
    })
  }
})