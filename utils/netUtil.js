//网络请求封装类
const BASEURL = 'https://zhisou.test.yingliwang.com:18181';

//----------------- get请求 ----------------------
function getApi(apiUrl, params, success, fail) {
  let defaultOpts = {
    method: 'GET',
    data: params,
    header: {
      'content-type': 'application/json',
      'x-token': wx.getStorageSync("token")
    },
    success: function (res) {
      if (res.statusCode == 200) {
        success(res);
      } else {
        fail(res);
      }
      console.log("--- GET ---");
      console.log(res);
      console.log("--- GET ---");
    },
    fail: function (res) {
      wx.showToast({
        title: '请求出错',
        icon: 'fail',
        duration: 2000
      })
      console.error(`请求失败：${res.code}`);
      fail(res);
    },
    complete: function () {
      wx.hideLoading();
      console.log('请求完成');
    }
  }

  let opts = Object.assign(defaultOpts);
  wx.showLoading({
    mask: true
  })

  wx.request({
    url: BASEURL + apiUrl,
    data: opts.data,
    method: opts.method,
    header: opts.header,
    success: opts.success,
    fail: opts.fail,
    complete: opts.complete
  })
}
//------------------------------------------------



//----------------- post请求 ----------------------
function postApi(apiUrl, params, success, fail) {
  let defaultOpts = {
    method: 'POST',
    data: params,
    header: {
      'content-type': 'application/json',
      'x-token': wx.getStorageSync("token")
    },
    success: function (res) {
      if (res.statusCode == 200) {
        success(res);
      } else {
        fail(res);
      }
      console.log("--- GET ---");
      console.log(res);
      console.log("--- GET ---");
    },
    fail: function (res) {
      wx.showToast({
        title: '请求出错',
        icon: 'fail',
        duration: 2000
      })
      console.error(`请求失败：${res.code}`);
      fail(res);
    },
    complete: function () {
      wx.hideLoading();
      console.log('请求完成');
    }
  }
  let opts = Object.assign(defaultOpts);
  wx.showLoading({
    mask: true
  })

  wx.request({
    url: BASEURL + apiUrl,
    data: opts.data,
    method: opts.method,
    header: opts.header,
    success: opts.success,
    fail: opts.fail,
    complete: opts.complete
  })
}
//----------------- post2请求 ----------------------
function postApi1(apiUrl, params, success, fail) {
  let defaultOpts = {
    method: 'POST',
    data: params,
    header: {
      'content-type': 'application/json',
      'x-token': wx.getStorageSync("token")
    },
    success: function (res) {
      if (res.statusCode == 200) {
        success(res);
      } else {
        fail(res);
      }
      console.log("--- GET ---");
      console.log(res);
      console.log("--- GET ---");
    },
    fail: function (res) {
      wx.showToast({
        title: '请求出错',
        icon: 'fail',
        duration: 2000
      })
      console.error(`请求失败：${res.code}`);
      fail(res);
    },
    complete: function () {
      wx.hideLoading();
      console.log('请求完成');
    }
  }
  let opts = Object.assign(defaultOpts);
  wx.showLoading({
    mask: true
  })

  wx.request({
    url: VCODE_BASEURL + apiUrl,
    data: opts.data,
    method: opts.method,
    header: opts.header,
    success: opts.success,
    fail: opts.fail,
    complete: opts.complete
  })
}
//------------------------------------------------

//----------------- delete请求 ----------------------
function deleteApi(apiUrl, params, success, fail) {
  let defaultOpts = {
    method: 'DELETE',
    data: params,
    header: {
      'content-type': 'application/json',
      'x-token': wx.getStorageSync("token")
    },
    success: function (res) {
      if (res.statusCode == 200) {
        success(res);
      } else {
        fail(res);
      }
      console.log("--- DELETE ---");
      console.log(res);
      console.log("--- DELETE ---");
    },
    fail: function (res) {
      wx.showToast({
        title: '请求出错',
        icon: 'fail',
        duration: 2000
      })
      console.error(`请求失败：${res.code}`);
      fail(res);
    },
    complete: function () {
      wx.hideLoading();
      console.log('请求完成');
    }
  }

  let opts = Object.assign(defaultOpts);
  wx.showLoading({
    mask: true
  })

  wx.request({
    url: BASEURL + apiUrl,
    data: opts.data,
    method: opts.method,
    header: opts.header,
    success: opts.success,
    fail: opts.fail,
    complete: opts.complete
  })
}
//------------------------------------------------

module.exports = {
  getApi: getApi,
  postApi: postApi,
  postApi1: postApi1,
  deleteApi: deleteApi
}