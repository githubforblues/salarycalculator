// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // salaryref: 0,
    // mouthPayBeg: 0,
    // mouthPayEnd: 0,
    // surplusref: 0,
    // balanceBeg: 0,
    // balanceEnd: 0,
    // personalTax: 0,
    // personalTaxBeg: 0,
    // personalTaxEnd: 0,
    // personalShebao: 0,
    // personalGjj: 0,
    // personalYanglaoBeg: 0,
    // personalYanglaoEnd: 0,
    // personalYiliaoBeg: 0,
    // personalYiliaoEnd: 0,
    // personalGjjBeg: 0,
    // personalGjjEnd: 0,
    // personalShiyeBeg: 0,
    // personalShiyeEnd: 0,
    // personalExgjjBeg: 0,
    // personalExgjjEnd: 0,
    // rankOfAll: 0,
    // rankOfCity: 0,
    // assessLevel: '',
    // city: '',

    levellist: ['乞丐','穷人','小康','中产','富豪'],
    levelnum: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];   //上一个页面

    this.setData({
      salaryref: prevPage.data.salaryref,
      mouthPayBeg: prevPage.data.mouthPayBeg,
      mouthPayEnd: prevPage.data.mouthPayEnd,
      surplusref: prevPage.data.surplusref,
      balanceBeg: prevPage.data.balanceBeg,
      balanceEnd: prevPage.data.balanceEnd,
      // personalTax: prevPage.data.personalTax,
      // personalTaxBeg: prevPage.data.personalTaxBeg,
      // personalTaxEnd: prevPage.data.personalTaxEnd,
      // personalShebao: prevPage.data.personalShebao,
      // personalGjj: prevPage.data.personalGjj,
      // personalYanglaoBeg: prevPage.data.personalYanglaoBeg,
      // personalYanglaoEnd: prevPage.data.personalYanglaoEnd,
      // personalYiliaoBeg: prevPage.data.personalYiliaoBeg,
      // personalYiliaoEnd: prevPage.data.personalYiliaoEnd,
      // personalGjjBeg: prevPage.data.personalGjjBeg,
      // personalGjjEnd: prevPage.data.personalGjjEnd,
      // personalShiyeBeg: prevPage.data.personalShiyeBeg,
      // personalShiyeEnd: prevPage.data.personalShiyeEnd,
      // personalExgjjBeg: prevPage.data.personalExgjjBeg,
      // personalExgjjEnd: prevPage.data.personalExgjjEnd,
      rankOfAll: (prevPage.data.rankOfAll * 100).toFixed(0),
      rankOfCity: (prevPage.data.rankOfCity * 100).toFixed(0),
      assessLevel: prevPage.data.assessLevel,

      city: prevPage.data.input_city_string,
    })


    for(var i=0; i<this.data.levellist.length; i++) {
      if(this.data.assessLevel == this.data.levellist[i]) {
        this.setData({
          levelnum: i+1
        })
      }
    }

    // prevPage.reset()
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