//app.js
App({
  
  // 小程序启动时执行的方法
  // 以wx.开头的都是系统封装好的方法
  onLaunch: function () {
    // 展示本地存储能力 调用系统API从本地缓存中获取数据
    // 获取本地缓存的logs字段
    var logs = wx.getStorageSync('logs') || []
    // unshift是js的知识，unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
    logs.unshift(Date.now())
    // 将新的数组放入缓存
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
})