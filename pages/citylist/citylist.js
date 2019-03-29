// pages/citylist/citylist.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    provinceslist: [], 
    citylist: [],

    select_provinces_name: '',
    select_city_name: '',

    isShade: false,
    iscitylistShow: false,
    scroll_y: true,
    overflow: "auto",

    provinces_kind: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    Api.getProvincesListForCity({}, function (res) {
      var list = []
      for (var i = 0; i < res.data.length; i++) {
        var row = { 'name': res.data[i] }
        list.push(row)
      }
      that.setData({
        provinceslist: list
      })
    }, function (res) {
      if (res.statusCode == 404) {
        wx.showToast({
          title: '暂无内容',
          icon: 'none'
        })
      }
    })
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

  select_provinces: function (e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      isShade: true,
      iscitylistShow: true,
      select_provinces_name: name,
      overflow: "hidden",
      scroll_y: false,
    })


    var that = this
    Api.getCityListForCity({
      province: this.data.select_provinces_name
    }, function (res) {
      var list = []
      for (var i = 0; i < res.data.length; i++) {
        var row = { 'name': res.data[i] }
        list.push(row)
      }
      that.setData({
        citylist: list
      })
    }, function (res) {
      if (res.statusCode == 404) {
        wx.showToast({
          title: '暂无内容',
          icon: 'none'
        })
      }
    })
  },

  select_city: function (e) {
    var name = e.currentTarget.dataset.name

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];   //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    if (prevPage.data.input_city_string == '') {
      prevPage.setData({
        input_count: prevPage.data.input_count + 1,
        // input_city_code: code,
        input_city_string: name,
      })
      prevPage.cost_forecast()
    } else {
      prevPage.setData({
        // input_city_code: code,
        input_city_string: name,
      })
      prevPage.cost_forecast()
    }

    wx.navigateBack();   //返回上一个页面
  },

  shadehide: function () {
    this.setData({
      isShade: false,
      iscitylistShow: false,
      select_provinces_id: -1,
      overflow: "auto",
      scroll_y: true,
    })
  },

})