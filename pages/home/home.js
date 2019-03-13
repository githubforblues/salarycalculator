// pages/home/home.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg'
    ],
    interval: 5000,
    duration: 1000,
    circular: true,
    leftMargin: '60rpx',
    rightMargin: '60rpx',
    currentIndex: 0,

    planlist: [
      {
        city: '上海市',
        industry: '高科技/IT',
        university: '中国科技大学',
        recode: '本科',
        homecost: 800,
        othercost: 1000,
        salaryref: 6803,
        salaryrefrang: '1000~2000',
        surplusref: -200,
        surplusrefrang: '-1000~2000',
      },
      {
        city: '上海市',
        industry: '高科技/IT',
        university: '中国科技大学',
        recode: '本科',
        homecost: 800,
        othercost: 1000,
        salaryref: 6803,
        salaryrefrang: '1000~2000',
        surplusref: -200,
        surplusrefrang: '-1000~2000',
      }
    ]
  },

  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
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