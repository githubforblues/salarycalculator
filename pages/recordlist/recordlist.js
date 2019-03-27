// pages/recordlist/recordlist.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 列表应该需要提供id和string两个值
    recordlist: ['大专','本科','硕士','博士及以上'],
    // 选中的字符串，返回给上一页
    input_record: -1,
    input_record_string: '',
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

  },


  // 点击事件处理

  select_record: function (e) {
    var string = e.currentTarget.dataset.text
    // var string = longstring.split("/")[0]

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];   //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    if (prevPage.data.input_record_string == '') {
      prevPage.setData({
        input_count: prevPage.data.input_count + 8,
        input_record_string: string,
      })
      prevPage.cost_forecast()
    } else {
      prevPage.setData({
        input_record_string: string,
      })
      prevPage.cost_forecast()
    }

    wx.navigateBack();   //返回上一个页面
  }
})


