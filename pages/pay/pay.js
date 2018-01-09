// pages/classify/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeindex : 0,
    showloading: false,
    movielist: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/in_theaters',
      method: "jsonp",
      data:{},
      success:function(res){
        if (res.statusCode == 200){
          console.log(res.data.subjects)
          that.setData({
            movielist: res.data.subjects
          })
        }
      }
    });  
  },
  // 正在热映
  in_theater: function (e) {
    this.setData({
      activeindex: e.target.dataset.index,
      showloading: true
    })
    var that = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/coming_soon',
      method: "jsonp",
      data: {},
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            movielist: res.data.subjects
          })
        }
        that.setData({
          showloading: false
        })
      }
    });
  },
  // 即将上映
  coming_soon: function(e){
    this.setData({
      activeindex: e.target.dataset.index,
      showloading: true
    })
    var that = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/coming_soon',
      method: "jsonp",
      data: {},
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            movielist: res.data.subjects
          })
        }
        that.setData({
          showloading: false
        })
      }
    });
  },
  //TOP250
  TOP250: function (e) {
    this.setData({
      activeindex: e.target.dataset.index,
      showloading: true
    })
    var that = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/top250',
      method: "jsonp",
      data: {},
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            movielist: res.data.subjects
          })
        }
        that.setData({
          showloading: false
        })
      }
    });
  },
  //北美票房榜
  us_box: function (e) {
    this.setData({
      activeindex: e.target.dataset.index,
      showloading: true
    })
    var that = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/us_box',
      method: "jsonp",
      data: {},
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            movielist: res.data.subjects
          })
        }
        that.setData({
          showloading: false
        })
      }
    });
  },
  //新片榜
  new_movies: function (e) {
    this.setData({
      activeindex: e.target.dataset.index,
      showloading: true
    })
    var that = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/new_movies',
      method: "jsonp",
      data: {},
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            movielist: res.data.subjects
          })
        }
        that.setData({
          showloading: false
        })
      }
    });
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