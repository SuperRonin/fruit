// apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:  '请选择收货地址',
    isChooseAddress: false
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
    this.getStorage()
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
  
  },

  getStorage: function(){
    var that = this;
    wx.getStorage({
      'key': 'address',
      success: function (res) {
        that.setData({
          'address': res.data
        })
      }
    })
  },
  gopay: function(){
    wx.showToast({
      title: '暂未开通支付',
      image: '../img/tip.fw.png',
      duration: 2000
    }) 
  },
  openmap: function(){
    var that = this
    wx.chooseLocation({
      success: function(res){
        wx.setStorage({
          key: 'address',
          data: res.address
        })
        
      }
    })
    that.setData({
      "isChooseAddress": true
    })
  }
})