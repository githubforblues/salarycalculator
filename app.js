//app.js
var Api = require('/api/apis.js');

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // this.wxLogin();
  },
  globalData: {
    userInfo: null
  },
  //微信登录
  wxLogin: function () {
    var that = this;
    wx.login({
      success(res) {
        if (res.code) {
          //发送res.code到后台换取openId,sessionKey,unionId
          console.error('--- wx login success！---')
          console.error(`---user code---:${res.code}`)
          console.error('--- user info ---')
          console.log(res)
          console.error('^^^ user info ^^^')
          that.wxGetUserInfo(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  wxGetUserInfo: function (code) {
    var that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            withCredentials: true,
            lang: "zh_CN", //返回简中信息
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo;
              console.error('----- user info -------')
              console.log(res);
              wx.setStorageSync("avatar", res.userInfo.avatarUrl);
              wx.setStorageSync("nickName", res.userInfo.nickName);
              console.error('^^^ user info ^^^')
              that.login(code, res);

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
  //服务器登录
  login: function (code, res) {
    var that = this;
    // 发起网络请求
    Api.loginByWechat({
      code: code,
      encryptedData: res.encryptedData,
      iv: res.iv,
    }, function (res) {
      var token = res.header['x-token'];
      console.error('--- service login success！ ---')
      console.error(`---user token---:${token}`)
      console.error('--- logined user info ---')
      console.log(res)
      console.error('^^^ logined user info ^^^')
      // wx.setStorageSync("hasMobile", res.data.user.hasMobile);
      //保存token
      wx.setStorageSync("token", token);
      if (that.getLoginCallback) {
        that.getLoginCallback(res)
      }
    }, function (res) {
      var token = res.header['x-token'];
      //保存token
      wx.setStorageSync("token", token);
      if (that.getLoginCallback) {
        that.getLoginCallback(res)
      }

    })
  }
})