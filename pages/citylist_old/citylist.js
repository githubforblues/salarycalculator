// pages/home/home.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordlist: [],
    citylist: [
      { cityname: '北京市',
        citytag: 'B'          //必须使用大写
      },
      { cityname: '北京市',
        citytag: 'B'
      }
    ]  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    create_capital_letters(this);
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


function create_capital_letters(that) {
  var list = []
  for (var i = 0; i < 26; i++) {
    list.push(String.fromCharCode(65 + i));
  }
  that.setData({
    wordlist: list
  })
}



