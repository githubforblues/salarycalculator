var GET = require('../utils/netUtil.js')
var POST = require('../utils/netUtil.js')
var DELETE = require('../utils/netUtil.js')

export function getIndustriesList(params, success, fail) {
  GET.getApi('/v1/api/assess/industries', params, success, fail);
}
export function getProvincesList(params, success, fail) {
  GET.getApi('/v1/api/geo/provinces', params, success, fail);
}
export function getCityList(params, success, fail) {
  // GET.getApi('/v1/api/geo/province/' + code + '/cities', params, success, fail);
  GET.getApi('/v1/api/assess/geo/province/cities', params, success, fail);
}
export function getUniversityList(params, success, fail) {
  GET.getApi('/v1/api/assess/campuses', params, success, fail);
}
export function getCostForecast(params, success, fail) {
  GET.getApi('/v1/api/assess/expense/city', params, success, fail);
}
export function postDataSave(params, success, fail) {
  POST.postApi('/v1/api/assess/income/evaluate/result', params, success, fail);
}
export function postAnalysis(params, success, fail) {
  POST.postApi('/v1/api/assess/income/evaluate', params, success, fail);
}
export function getResultList(params, success, fail) {
  GET.getApi('/v1/api/assess/income/evaluate/results', params, success, fail);
}
export function loginByWechat(params, success, fail) {
  POST.postApi('/v1/api/assess/account/xcx/login', params, success, fail);
}
export function deleteResultRow(params, id, success, fail) {
  DELETE.deleteApi('/v1/api/assess/income/evaluate/result/' + id, params, success, fail);
}
export function getRowDetail(params, id, success, fail) {
  GET.getApi('/v1/api/assess/income/evaluate/result/' + id, params, success, fail);
}



