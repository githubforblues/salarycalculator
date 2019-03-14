// pages/index/index.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_count: 6,
    input_city: '上海市',
    input_industry: '高科技/IT',
    input_university: -1,
    input_university_string: '江西财经大学',
    input_record: -1,
    input_record_string: '',
    input_homecost: 800,
    input_othercost: 1000,

    output_salaryref: 6803,
    output_salaryref_range: '5500 ~ 7200 元',
    output_surplusref: -200,
    output_surplusref_range: '-2500 ~ 200 元',

    isHide: true,
    trtr: true,
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


  // 展示最高学历选择栏
  select_record: function() {
    this.setData({
      isHide: false
    })
  },

  // 点击遮罩隐藏最高学历选择栏
  cancel_selector: function() {
    this.setData({
      isHide: true
    })
  },

  // 用户点击选择学历选项
  click_rs_item: function(e) {
    var id = e.currentTarget.dataset.id
    var string = getrecordstring(id)
    this.setData({
      input_record: id,
      input_record_string: string
    })
    this.cancel_selector()
  },

  // 点击跳转到学校选择页
  select_university: function() {
    wx.navigateTo({ url: "/pages/citylist/citylist" })
  }
})

function getrecordstring(id) {
  var list = ['专科','本科','硕士','博士及以上']
  return list[id]
}






