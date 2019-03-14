// pages/industrylist/industrylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 列表应该需要提供id和string两个值
    industrylist: ['高科技/IT', '金融/Finance', '制造/Manufaturing','服务/Service'],
    industry: -1,
    industry_string: '',
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

  select_industry: function (e) {
    // 参数暂时写死
    var id = 1
    // 参数暂时写死
    var string = e.currentTarget.dataset.text
    string = string.split("/")[0]

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];   //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      input_industry: id,
      input_industry_string: string,
    })

    wx.navigateBack();   //返回上一个页面
  }
})


