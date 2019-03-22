// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

      wx.switchTab({
        url: '/pages/index/index'
      })

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }

      app.wxLogin();
      
      app.getLoginCallback = res => {
        console.log('登陆成功')
        console.log('res',res)
        if (res.statusCode == 200) {
          wx.switchTab({
            url: '/pages/index/index'
          })
        } else if (res.statusCode == 510) {
          wx.navigateTo({
            url: '/pages/index/index'
          })
        }
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
    }
  },
  login: function (e) {
    console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    app.wxLogin();
    app.getLoginCallback = res => {
      if (res.statusCode == 200) {
        wx.switchTab({
          url: '/pages/index/index'
        })
      } else if (res.statusCode == 510) {
        wx.navigateTo({
          url: '/pages/index/index'
        })
      }
    }
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