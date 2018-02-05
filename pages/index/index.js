var config = require("../../configs/config")
//获取应用实例
var app = getApp()
Page({
  data: {
    showNodata: false,
    activeindex: 0,
    carTotalNum: 0,
    carTotalPrice: 0.00,
    address: '正在获取您的位置',
    tabs: [],
    textData: [],
    AllList:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    

    var that = this;
    that.getLocation()
    that.getShops();
    // that.data.textData = that.data.AllList[that.data.activeindex];
    // this.setData({"textData": that.data.textData })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  getLocation: function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res.latitude)
        console.log(res.longitude)
        // 腾讯地图开发平台(根据经纬度获取地理位置)
        var qqMapApi = config.qqMapApi + "?location=" + res.latitude + ',' + res.longitude + "&key=" + config.qqUserkey + "&get_poi=1";
        app.http.req(qqMapApi, 'get', {}, '', function (res) {
          that.address = res.result.address;
          console.log(res)
          that.setData({
            'address': that.address
          })
          wx.setStorage({
            key: 'address',
            data: that.address
          })
        }, function () {
          wx.showToast({
            title: '获取地理位置信息失败',
          })
        })
      }
    })
  },
  gopay: function(){
    if (this.data.carTotalNum == 0){
      wx.showToast({
        title: '请添加商品',
        image: '../img/tip.fw.png',
        duration: 1500
      })
      return
    }
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  //获取所有商品
  getShops: function(index){
    var that = this;
    app.http.req('http://120.79.20.16/shops', 'get', {}, '加载中', function(res){
      console.log(res)
      that.AllList = res.shops
      that.setData({
        'AllList': that.AllList,
        'textData': res.shops[0],
        "tabs": res.tabList
      })
    },function(){
      wx.showToast({
        title: 'error',
      })
    })
  },
  // 增加商品
  addShopNum: function(e){
    var curIndex = e.target.dataset.index;
    var activeindex = this.data.activeindex;
    // 数组集合中找到当前tab下的商品列表    再找当前商品
    this.data.AllList[activeindex][curIndex].isShow = true 
    this.data.AllList[activeindex][curIndex].num += 1
    
    this.countCarInfo(curIndex,'+')
    this.setData({
      "AllList": this.data.AllList,
      "textData": this.data.AllList[activeindex]
    })
  },
  // 减少商品
  reduceShopNum: function (e) {
    var curIndex = e.target.dataset.index; //当前索引
    var activeindex = this.data.activeindex;
    var curNum = this.data.AllList[activeindex][curIndex].num; //当前商品数量
    if (curNum <= 1){
      this.data.AllList[activeindex][curIndex].isShow = false
      this.data.AllList[activeindex][curIndex].num = 0
    }else{
      this.data.AllList[activeindex][curIndex].num -= 1
    }
    
    this.countCarInfo(curIndex)
    this.setData({
      "AllList": this.data.AllList,
      "textData": this.data.AllList[activeindex]
    })
  },
  // 左侧tab点击
  tabClick: function(e){
    var showNodata;
    var curIndex = e.target.dataset.index; //当前索引
    var activeindex = this.data.activeindex;
    
    // 无商品
    if (!this.data.AllList[curIndex] || this.data.AllList[curIndex].length == 0) {
      showNodata = true
      this.data.showNodata = true
    }else{
      showNodata = false
      this.data.showNodata = false
    }

    this.setData({
      "textData": this.data.AllList[curIndex] || [],
      "activeindex": curIndex,
      "showNodata": showNodata
    })
    
  },
  // 价格、数量信息计算
  countCarInfo: function (index,type){
    var activeindex = this.data.activeindex;
    if (type == '+'){
      this.data.carTotalNum += 1;
      this.data.carTotalPrice += this.data.AllList[activeindex][index].price;
    }else{
      this.data.carTotalNum -= 1;
      this.data.carTotalPrice -= this.data.AllList[activeindex][index].price;
    }
    this.setData({
      "carTotalNum": this.data.carTotalNum,
      "carTotalPrice": this.data.carTotalPrice
    })
  }
})
