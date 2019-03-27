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
    input_industry_longstring: '',
    input_record: -1,
    input_record_string: '',
    input_university_code: '',
    input_university_string: '',

    input_homecost: '',
    input_othercost: '',

    salaryref: 0,
    mouthPayBeg: 0,
    mouthPayEnd: 0,
    surplusref: 0,
    balanceBeg: 0,
    balanceEnd: 0,
    output_salaryref_range: '0 ~ 0 元',
    output_surplusref_range: '0 ~ 0 元',
    personalTax: 0,
    personalTaxBeg: 0,
    personalTaxEnd: 0,
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
    personalExgjjBeg: 0,
    personalExgjjEnd: 0,
    rankOfAll: 0,
    rankOfCity: 0,
    assessLevel: '',

    isHide: true,
    isSelectLock: false,
    university_longstring: false,
    isResultHide: true,
    isMoreButtonHide: true,
    isShadeHide: true,

    short_term_left: '',

    // moveData: null,
    winheight_start: '',
    // countWH: 0,
    winheight: '',
    startY: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var winheight = wx.getSystemInfoSync().windowHeight;
    var winwidth = wx.getSystemInfoSync().windowWidth;
    this.setData({
      winheight: winheight - 425 + 'px',
      // winheight: winheight - 200 + 'px',
      // winheight_start: winheight - 425 + 'px',
      // countWH: winheight,
      short_term_left: ( winwidth - 50 ) / 2 + 'px',
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


  // 展示最高学历选择栏
  select_record: function () {
    wx.navigateTo({ url: "/pages/recordlist/recordlist" })
    // this.setData({
    //   isHide: false
    // })
  },

  // 点击遮罩隐藏最高学历选择栏
  // cancel_selector: function () {
  //   this.setData({
  //     isHide: true
  //   })
  // },

  // 用户点击选择学历选项
  // click_rs_item: function (e) {
    // var id = e.currentTarget.dataset.id
    // var string = getrecordstring(id)

    // if (this.data.input_record_string == '') {
    //   this.setData({
    //     input_count: this.data.input_count + 8
    //   })
    //   this.cost_forecast()
    // }

    // this.setData({
    //   input_record: id,
    //   input_record_string: string
    // })

    // this.cancel_selector()
  // },

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
  // 点击出现数据结果
  analysis: function () {
    if (this.data.input_count == 15) {
      this.setData({
        isResultHide: false,
        isMoreButtonHide: false,
        isShadeHide: false,
      })

      // var winheight = wx.getSystemInfoSync().windowHeight;
      // var initnum = 200;
      // var resultheight = 425 - initnum;

      // var animation = wx.createAnimation({
      //   duration: 600,
      //   timingFunction: 'ease-out',
      // })

      // animation.translateY(-resultheight).step({ duration: 600 })
      // this.setData({ 
      //   moveData: animation.export() 
      // })

    }
  },
  // 点击跳转到报表页
  more: function () {
    if (this.data.input_count == 15) {
      this.datasave()
      wx.navigateTo({ url: "/pages/result/result" })
    }
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
      input_count: 0,

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
      Api.postAnalysis({
        "campus": this.data.input_university_string,
        "city": this.data.input_city_string,
        "diploma": this.data.input_record_string,
        "industry": this.data.input_industry_longstring,
        "houseRent": parseInt(this.data.input_homecost),
        "otherExpense": parseInt(this.data.input_othercost),
      }, function (res) {
        that.setData({
          salaryref: res.data.mouthPay,
          mouthPayBeg: res.data.mouthPayBeg,
          mouthPayEnd: res.data.mouthPayEnd,
          surplusref: res.data.balance,
          balanceBeg: res.data.balanceBeg,
          balanceEnd: res.data.balanceEnd,
          output_salaryref_range: res.data.mouthPayBeg + ' ~ ' + res.data.mouthPayEnd + ' 元',
          output_surplusref_range: res.data.balanceBeg + ' ~ ' + res.data.balanceEnd + ' 元',
          personalTax: res.data.personalTax,
          personalTaxBeg: res.data.personalTaxBeg,
          personalTaxEnd: res.data.personalTaxEnd,
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
          personalExgjjBeg: res.data.personalExgjjBeg,
          personalExgjjEnd: res.data.personalExgjjEnd,
          rankOfAll: res.data.rankOfAll,
          rankOfCity: res.data.rankOfCity,
          assessLevel: res.data.assessLevel,
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
    var that = this
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
        "mouthPay": this.data.salaryref,
        "mouthPayBeg": this.data.mouthPayBeg,
        "mouthPayEnd": this.data.mouthPayEnd,
        "balance": this.data.surplusref,
        "balanceBeg": this.data.balanceBeg,
        "balanceEnd": this.data.balanceEnd,
        "personalExgjjBeg": this.data.personalExgjjBeg,
        "personalExgjjEnd": this.data.personalExgjjEnd,
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
        "personalTaxBeg": this.data.personalTaxBeg,
        "personalTaxEnd": this.data.personalTaxEnd,
        "personalShebao": this.data.personalShebao,
        "rankOfAll": this.data.rankOfAll,
        "rankOfCity": this.data.rankOfCity,
        "assessLevel": this.data.assessLevel,
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
  },



  // 浮动页面滑动
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startY: e.touches[0].clientY,
        winheight_start: parseInt(this.data.winheight)
      });
    }
  },

  touchM: function (e) {
    // var windows_height = this.data.countWH

    if (e.touches.length == 1) {
      //手指移动时垂直方向位置
      var moveY = e.touches[0].clientY;
      //手指起始点位置与移动期间的差值
      var disY = this.data.startY - moveY;
      // var winheight_start = parseInt(this.data.winheight_start);
      // if (disY == 0 || disY < 0) {
      //   this.setData({
      //     winheight: winheight_start - disY + 'px'
      //   })
      // } else if (disY > 0) {
      //   if (parseInt(this.data.winheight) >= windows_height - 425) {
      //     this.setData({
      //       winheight: winheight_start - disY + 'px'
      //     })
      //   }
      // }
      var winheight_start = parseInt(this.data.winheight_start);
      if (disY < 0) {
        this.setData({
          winheight: winheight_start - disY + 'px'
        })
      }
    }
  },

  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      var winheight_start = parseInt(this.data.winheight_start)
      var winheight = parseInt(this.data.winheight)

      if (winheight_start - winheight < -50) {
        this.cancel_resultshade()
      } else {
        console.log(winheight_start)
        this.setData({
          winheight: winheight_start + 'px',
        })
      }
    //   this.setData({
    //     winheight_start: this.data.winheight
    //   })

    //   //手指移动结束后垂直位置
    //   var endY = e.changedTouches[0].clientY;
    //   if (endY >= this.data.countWH - 50) {
    //     this.cancel_resultshade()
    //   }

      //触摸开始与结束，手指移动的距离
      // var disY = this.data.startY - endY;
      // var delBtnWidth = this.data.delBtnWidth;
      // //如果距离小于删除按钮的1/2，不显示删除按钮
      // var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
      // //获取手指触摸的是哪一项
      // var index = e.currentTarget.dataset.index;
    }
  },



  cancel_resultshade: function() {
    var winheight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      winheight: winheight - 425 + 'px',
      // winheight: winheight - 200 + 'px',
      // winheight_start: winheight - 200 + 'px',
      isResultHide: true,
      isMoreButtonHide: true,
      isShadeHide: true,
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




