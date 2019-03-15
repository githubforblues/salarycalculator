// pages/index/index.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_count: 6,
    input_city: -1,
    input_city_string: '',
    input_industry: -1,
    input_industry_string: '',
    input_university: -1,
    input_university_string: '',
    university_longstring: false,
    input_record: -1,
    input_record_string: '',
    input_homecost: '',
    input_othercost: '',

    output_salaryref: 6803,
    output_salaryref_range: '5500 ~ 7200 元',
    output_surplusref: -200,
    output_surplusref_range: '-2500 ~ 200 元',

    isHide: true,
    isSelectLock: false,
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
    wx.navigateTo({ url: "/pages/universitylist/universitylist" })
  },
  // 点击跳转到城市选择页
  select_city: function() {
    wx.navigateTo({ url: "/pages/citylist/citylist" })
  },
  // 点击跳转到行业选择页
  select_industry: function () {
    wx.navigateTo({ url: "/pages/industrylist/industrylist" })
  },
  // 点击跳转到方案分析页
  analysis: function() {
    wx.navigateTo({ url: "/pages/result/result" })
    this.reset()      // 这个操作放到接口返回请求之后回调，体验更佳
  },

  // 输入数字时防止点击到其他选择项
  select_lock: function() {
    this.setData({
      isSelectLock: true,
    })
  },
  select_unlock: function () {
    this.setData({
      isSelectLock: false,
    })
  },

  // 把输入数值传递到data中
  inputnumber_homecost: function(e) {
    var num = e.detail.value
    if(num[0] == 0){
      num = num.split('0')[1]
    }
    this.setData({
      input_homecost: num
    })
  },
  inputnumber_othercost: function (e) {
    var num = e.detail.value
    if (num[0] == 0) {
      num = num.split('0')[1]
    }
    this.setData({
      input_othercost: num
    })
  },

  // 重置表单
  reset: function() {
    this.setData({
      input_city: -1,
      input_city_string: '',
      input_industry: -1,
      input_industry_string: '',
      input_university: -1,
      input_university_string: '',
      university_longstring: false,
      input_record: -1,
      input_record_string: '',
      input_homecost: '',
      input_othercost: '',
    })
  }
})



function getrecordstring(id) {
  var list = ['专科','本科','硕士','博士及以上']
  return list[id]
}






