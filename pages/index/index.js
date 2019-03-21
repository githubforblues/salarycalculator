// pages/index/index.js
var Api = require('../../api/apis.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_count: 0,

    input_city_code: '',
    input_city_string: '',
    input_industry_string: '',
    input_record: -1,
    input_record_string: '',
    input_university_code: '',
    input_university_string: '',

    input_homecost: '',
    input_othercost: '',

    salaryref: 0,
    surplusref: 0,
    output_salaryref_range: '0 ~ 0 元',
    output_surplusref_range: '0 ~ 0 元',
    personalTax: 0,
    personalShebao: 0,
    personalGjj: 0,
    personalYanglaoBeg: 0,
    personalYanglaoEnd: 0,
    personalYiliaoBeg: 0,
    personalYiliaoEnd: 0,
    personalGjjBeg: 0,
    personalGjjEnd: 0,
    personalShiyeBeg: 0,
    personalShiyeEnd: 0,

    isHide: true,
    isSelectLock: false,
    university_longstring: false,
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
  select_record: function () {
    this.setData({
      isHide: false
    })
  },

  // 点击遮罩隐藏最高学历选择栏
  cancel_selector: function () {
    this.setData({
      isHide: true
    })
  },

  // 用户点击选择学历选项
  click_rs_item: function (e) {
    var id = e.currentTarget.dataset.id
    var string = getrecordstring(id)

    if (this.data.input_record_string == '') {
      this.setData({
        input_count: this.data.input_count + 8
      })
      this.cost_forecast()
    }

    this.setData({
      input_record: id,
      input_record_string: string
    })

    this.cancel_selector()
  },

  // 点击跳转到学校选择页
  select_university: function () {
    wx.navigateTo({ url: "/pages/universitylist/universitylist" })
  },
  // 点击跳转到城市选择页
  select_city: function () {
    wx.navigateTo({ url: "/pages/citylist/citylist" })
  },
  // 点击跳转到行业选择页
  select_industry: function () {
    wx.navigateTo({ url: "/pages/industrylist/industrylist" })
  },
  // 点击跳转到方案分析页
  analysis: function () {
    this.datasave()
    wx.navigateTo({ url: "/pages/result/result" })
    this.reset()      // 这个操作放到接口返回请求之后回调，体验更佳
  },

  // 输入数字时防止点击到其他选择项
  select_lock: function () {
    this.setData({
      isSelectLock: true,
    })
  },
  select_unlock: function () {
    this.setData({
      isSelectLock: false,
    })
    this.comp_result()
  },

  // 把输入数值传递到data中
  inputnumber_homecost: function (e) {
    var num = e.detail.value
    if (num[0] == 0) {
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
  reset: function () {
    this.setData({
      input_city: -1,
      input_city_string: '',
      input_industry: -1,
      input_industry_string: '',
      input_university: -1,
      input_university_string: '',
      university_longstring: false,
      input_record_string: '',
      input_homecost: '',
      input_othercost: '',

      salaryref: 0,
      surplusref: 0,
      output_salaryref_range: '0 ~ 0 元',
      output_surplusref_range: '0 ~ 0 元',
      personalTax: 0,
      personalShebao: 0,
      personalGjj: 0,
      personalYanglaoBeg: 0,
      personalYanglaoEnd: 0,
      personalYiliaoBeg: 0,
      personalYiliaoEnd: 0,
      personalGjjBeg: 0,
      personalGjjEnd: 0,
      personalShiyeBeg: 0,
      personalShiyeEnd: 0,
    })
  },

  // 支出预估
  cost_forecast: function () {
    // 填写前四项后进行支出预估，前四项填写后，会分别为input_count加上1、2、4、8，这样就知道填写情况
    if (this.data.input_count == 15) {
      var that = this
      Api.getCostForecast({
        'name': this.data.input_city_string
      }, function (res) {
        that.setData({
          input_homecost: res.data.houseRent,
          input_othercost: res.data.other
        })
        // 四项填写后自动出剩下两项，所以就可以出结果了
        that.comp_result()
      }, function (res) {
        if (res.statusCode == 404) {
          wx.showToast({
            title: '暂无内容',
            icon: 'none'
          })
        }
      })
    }
  },

  // 评估结果
  comp_result: function () {
    if (this.data.input_count == 15) {
      if (this.data.input_homecost == '') {
        this.setData({
          input_homecost: 0,
        })
      }
      if (this.data.input_othercost == '') {
        this.setData({
          input_othercost: 0,
        })
      }

      var that = this
      console.log(this.data.input_homecost)
      Api.postAnalysis({
        "campus": this.data.input_university_string,
        "city": this.data.input_city_string,
        "diploma": this.data.input_record_string,
        "industry": this.data.input_industry_string,
        "houseRent": this.data.input_homecost,
        "otherExpense": this.data.input_othercost,
      }, function (res) {
        that.setData({
          salaryref: res.data.mouthPay,
          surplusref: res.data.balance,
          output_salaryref_range: res.data.mouthPayBeg + ' ~ ' + res.data.mouthPayEnd + ' 元',
          output_surplusref_range: res.data.balanceBeg + ' ~ ' + res.data.balanceEnd + ' 元',
          personalTax: res.data.personalTax,
          personalShebao: res.data.personalShebao,
          personalGjj: res.data.personalGjj,
          personalYanglaoBeg: res.data.personalYanglaoBeg,
          personalYanglaoEnd: res.data.personalYanglaoEnd,
          personalYiliaoBeg: res.data.personalYiliaoBeg,
          personalYiliaoEnd: res.data.personalYiliaoEnd,
          personalGjjBeg: res.data.personalGjjBeg,
          personalGjjEnd: res.data.personalGjjEnd,
          personalShiyeBeg: res.data.personalShiyeBeg,
          personalShiyeEnd: res.data.personalShiyeEnd,
        })
      }, function (res) {
        if (res.statusCode == 404) {
          wx.showToast({
            title: '暂无内容',
            icon: 'none'
          })
        }
      })
    }
  },

  // 保存填写内容和结果
  datasave: function () {
    Api.postDataSave({
      "form": {
        "campus": this.data.input_university_string,
        "city": this.data.input_city_string,
        "diploma": this.data.input_record_string,
        "industry": this.data.input_industry_string,
        "houseRent": this.data.input_homecost,
        "otherExpense": this.data.input_othercost,
      },
      "result": {
        "salaryref": this.data.salaryref,
        "mouthPayBeg": 5214,			// 月薪范围开始
        "mouthPayEnd": 7225,			// 月薪范围结束
        "surplusref": this.data.surplusref,
        "balanceBeg": -5786,			// 支出范围开始
        "balanceEnd": -3775,			// 支出范围结束
        "personalExgjjBeg": 0,			// 额为公积金范围开始
        "personalExgjjEnd": 0,			// 额外公积金范围结束
        "personalGjj": this.data.personalYiliaoBeg,
        "personalGjjBeg": this.data.personalYiliaoBeg,
        "personalGjjEnd": this.data.personalYiliaoBeg,
        "personalShiyeBeg": this.data.personalYiliaoBeg,
        "personalShiyeEnd": this.data.personalYiliaoBeg,
        "personalYanglaoBeg": this.data.personalYiliaoBeg,
        "personalYanglaoEnd": this.data.personalYiliaoBeg,
        "personalYiliaoBeg": this.data.personalYiliaoBeg,
        "personalYiliaoEnd": this.data.personalYiliaoBeg,
        "personalTax": this.data.personalTax,
        "personalTaxBeg": 6,			// 个税
        "personalTaxEnd": 68,			// 个税
        "personalShebao": this.data.personalShebao,
        "rankOfAll": 0.1572,			// 全国排名，double , 15%
        "rankOfCity": 0.02202697,		// 城市排名，double , 2%
        "assessLevel": "乞丐"				// 等级 | 乞丐  穷人 小康 中产 富豪 

        salaryref: res.data.mouthPay,
        surplusref: res.data.balance,
        output_salaryref_range: res.data.mouthPayBeg + ' ~ ' + res.data.mouthPayEnd + ' 元',
        output_surplusref_range: res.data.balanceBeg + ' ~ ' + res.data.balanceEnd + ' 元',
        personalTax: res.data.personalTax,
        // personalShebao: res.data.personalShebao,
        // personalGjj: res.data.personalGjj,
        // personalYanglaoBeg: res.data.personalYanglaoBeg,
        // personalYanglaoEnd: res.data.personalYanglaoEnd,
        // personalYiliaoBeg: res.data.personalYiliaoBeg,
        // personalYiliaoEnd: res.data.personalYiliaoEnd,
        // personalGjjBeg: res.data.personalGjjBeg,
        // personalGjjEnd: res.data.personalGjjEnd,
        // personalShiyeBeg: res.data.personalShiyeBeg,
        // personalShiyeEnd: res.data.personalShiyeEnd,
      }
    }, function (res) {
      that.setData({
        input_homecost: res.data.houseRent,
        input_othercost: res.data.other
      })
      // 四项填写后自动出剩下两项，所以就可以出结果了
      that.comp_result()
    }, function (res) {
      if (res.statusCode == 404) {
        wx.showToast({
          title: '暂无内容',
          icon: 'none'
        })
      }
    })
  }


})



function getrecordstring(id) {
  var list = ['专科', '本科', '硕士', '博士及以上']
  return list[id]
}

function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}




