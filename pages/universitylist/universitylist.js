// pages/citylist/citylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    provinceslist: ['直辖市', '江苏省', '浙江省', '直辖市', '江苏省', '浙江省', '直辖市', '江苏省', '浙江省', '直辖市', '江苏省', '浙江省', '浙江省', '浙江省', '浙江省', '浙江省',],
    citylist: ['北京市', '上海市', '天津市', '重庆市', '北京市', '上海市', '天津市', '重庆市', '北京市', '上海市', '天津市', '重庆市', '北京市', '上海市', '天津市', '重庆市', '北京市', '上海市', '天津市', '重庆市'],
    universitylist: ['清华大学', '上海外国语学院', '南京工业职业技术学院', '清华大学', '上海外国语学院', '南京工业职业技术学院', '清华大学', '上海外国语学院', '南京工业职业技术学院', '清华大学', '上海外国语学院', '南京工业职业技术学院', '清华大学', '上海外国语学院', '南京工业职业技术学院', '清华大学', '上海外国语学院', '南京工业职业技术学院'],
    // universitylist: ['清华大学', '上海外国语学院', '南京工业职业技术学院'],
    select_provinces_id: -1,
    select_city_id: -1,
    select_university_id: -1,
    select_university_string: '',
    isShade: false,
    iscitylistShow: false,
    isuniversitylistShow: false,
    iscitylistrestrain: false, 
    scroll_y_provinces: true,
    provinces_overflow: "auto",
    scrollTop: 0,
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

  select_provinces: function (e) {
    var id = 1    // 暂时写死。等列表中出现id字段时，通过自定义属性获取该值
    this.setData({
      isShade: true,
      iscitylistShow: true,
      select_provinces_id: id,
      provinces_overflow: "hidden",
      scroll_y_provinces: false,
    })
  },

  select_city: function (e) {
    var id = 1    // 暂时写死。等列表中出现id字段时，通过自定义属性获取该值
    this.setData({
      isuniversitylistShow: true,
      select_city_id: id,
      iscitylistrestrain: true,
    })
  },

  select_university: function (e) {
    var id = 1    // 暂时写死。等列表中出现id字段时，通过自定义属性获取该值
    var string = e.currentTarget.dataset.text
    var longstring = false
    if (string.length > 6) {
      longstring = true
    }

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];   //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      input_university: id,
      input_university_string: string,
      university_longstring: longstring,
    })

    wx.navigateBack();   //返回上一个页面
  },

  shadehide: function () {
    this.setData({
      isShade: false,
      iscitylistShow: false,
      isuniversitylistShow: false,
      iscitylistrestrain: false,
      select_provinces_id: -1,
      select_university_id: -1,
      provinces_overflow: "auto",
      scroll_y_provinces: true,
      scrollTop: 0,
    })
  },



})