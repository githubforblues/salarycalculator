// pages/home/home.js
var Api = require('../../api/apis.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg'
    ],
    interval: 5000,
    duration: 1000,
    circular: true,
    leftMargin: '60rpx',
    rightMargin: '60rpx',
    currentIndex: 0,

    list: [],

    delBtnWidth: 63,
    startX: "",
    readydeleterowid: "",

    levellist: ['乞丐', '穷人', '小康', '中产', '富豪'],
    levelnum: 0,

    username: '',
    userimg: '',

    isFirst: true,
  },

  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.isFirst == true) {
      this.setData({
        isFirst: false
      })

      var that = this
      Api.getResultList({
        'offset': 0,
        'length': 100
      }, function (res) {
        var tmplist = res.data
        for (var i = 0; i < tmplist.length; i++) {
          tmplist[i]['txtStyle'] = ''
        }
        that.setData({
          list: tmplist,
        })
      }, function (res) {
        if (res.statusCode == 404) {
          wx.showToast({
            title: '暂无内容',
            icon: 'none'
          })
        }
      })

      var userInfo = app.globalData.userInfo
      this.setData({
        userimg: userInfo.avatarUrl,
        username: userInfo.nickName,
      })
    }
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
    if (this.data.isFirst == false) {
      var that = this
      Api.getResultList({
        'offset': 0,
        'length': 100
      }, function (res) {
        var tmplist = res.data
        for (var i = 0; i < tmplist.length; i++) {
          tmplist[i]['txtStyle'] = ''
        }
        that.setData({
          list: tmplist,
        })
      }, function (res) {
        if (res.statusCode == 404) {
          wx.showToast({
            title: '暂无内容',
            icon: 'none'
          })
        }
      })

      var userInfo = app.globalData.userInfo
      this.setData({
        userimg: userInfo.avatarUrl,
        username: userInfo.nickName,
      })
    }
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



  touchS: function (e) {
    if (this.data.readydeleterowid != '' && this.data.readydeleterowid != e.currentTarget.dataset.index) {
      this.cancelotherdeletestatus()
    }
    
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX
      });
    }
  },

  touchM: function (e) {
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，说明向右滑动，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = this.data.list;
      for(var i=0; i<list.length; i++) {
        if (list[i].id == index) {
          list[i].txtStyle = txtStyle;
        }
      }      
      
      //更新列表的状态
      this.setData({
        list: list
      });
    }
  },

  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = this.data.list;
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == index) {
          list[i].txtStyle = txtStyle;
        }
      }
      //更新列表的状态
      this.setData({
        list: list,
        readydeleterowid: index,
      });
    }
  },

  //点击其他行取消之前的左滑删除状态
  cancelotherdeletestatus: function() {
    var list = this.data.list;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id == this.data.readydeleterowid) {
        list[i].txtStyle = 0;
      }
    }
    //更新列表的状态
    this.setData({
      list: list,
    });
  },

  //获取元素自适应后的实际宽度
  // getEleWidth: function (w) {
  //   var real = 0;
  //   try {
  //     var res = wx.getSystemInfoSync().windowWidth;
  //     //以宽度750px设计稿做宽度的自适应
  //     var scale = (750 / 2) / (w / 2);    
  //     real = Math.floor(res / scale);
  //     return real;
  //   } catch (e) {
  //     return false;
  //     // Do something when catch error
  //   }
  // },

  // initEleWidth: function () {
  //   var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
  //   this.setData({
  //     delBtnWidth: delBtnWidth
  //   });
  // },

  //点击删除按钮事件
  delItem: function (e) {
    //获取列表中要删除项的下标
    var index = e.currentTarget.dataset.index;

    var list = this.data.list
    var that = this
    Api.deleteResultRow({}, index, function (res) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == index) {
          console.log(i)
          list.splice(i, 1);
          that.setData({
            list: list
          });
        }
      }  
    }, function (res) {
      if (res.statusCode == 404) {
        wx.showToast({
          title: '暂无内容',
          icon: 'none'
        })
      }
    })
  },

  //点击跳转评估结果页
  rowdetail: function(e) {
    var that = this
    var txtStyle = e.currentTarget.dataset.style;
    var id = e.currentTarget.dataset.index;
    if (txtStyle == "" || txtStyle == "left:0px") {
      Api.getRowDetail({}, id, function (res) {
        for (var i = 0; i < that.data.levellist.length; i++) {
          if (res.data.content.result.assessLevel == that.data.levellist[i]) {
            that.setData({
              levelnum: i + 1
            })
          }
        }

        that.setData({
          salaryref: res.data.content.result.mouthPay,
          mouthPayBeg: res.data.content.result.mouthPayBeg,
          mouthPayEnd: res.data.content.result.mouthPayEnd,
          surplusref: res.data.content.result.balance,
          balanceBeg: res.data.content.result.balanceBeg,
          balanceEnd: res.data.content.result.balanceEnd,
          rankOfAll: res.data.content.result.rankOfAll,
          rankOfCity: res.data.content.result.rankOfCity,
          assessLevel: res.data.content.result.assessLevel,
          input_city_string: res.data.content.form.city,
        })

        that.redirect_to_detail()
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

  //跳转评估结果页
  redirect_to_detail: function() {
    wx.navigateTo({ url: "/pages/result/result" })
  },

})


