/** 
 * url:网络请求的url
 * method:网络请求方式
 * params:请求参数
 * msg:loading的提示信息
 * suc:成功的回调函数
 * fail：失败的回调
 */
function req(url, method, params, msg, suc, fail) {
  // loading
  if (msg != '' && typeof msg == 'string') {
    wx.showLoading({
      title: msg,
    })
  }

  wx.request({
    url: url,
    method: method,
    data: params,
    success: function (res) {
      if (msg != '' && typeof msg == 'string') {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        suc(res.data)
      }
    },
    error: function (res) {
      if (msg != '' && typeof msg == 'string') {
        wx.hideLoading()
      }
      fai(res)
    }
  })
}

module.exports = {
  req: req
}