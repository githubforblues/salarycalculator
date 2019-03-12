var GET = require('../utils/netUtil.js')
var POST = require('../utils/netUtil.js')

export function getHotSearchList(params, success, fail) {
  GET.getApi('/v1/api/zhisou/index/hot/search', params, success, fail);
}
export function dislikeAnswer(params, id, success, fail) {
  POST.postApi('/v1/api/zhisou/issue/answer/' + id + '/dislike', params, success, fail);
}