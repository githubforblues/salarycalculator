var GET = require('../utils/netUtil.js')
var POST = require('../utils/netUtil.js')

export function getIndustriesList(params, success, fail) {
  GET.getApi('/v1/api/assess/industries', params, success, fail);
}
export function getProvincesList(params, success, fail) {
  GET.getApi('/v1/api/geo/provinces', params, success, fail);
}
export function getCityList(params, code, success, fail) {
  GET.getApi('/v1/api/geo/province/' + code + '/cities', params, success, fail);
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

