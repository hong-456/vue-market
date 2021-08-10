"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  var instance = _axios["default"].create({
    // baseURL请使用本机本地地址
    // 测试一下
    // baseURL:"http://localhost:3000",
    baseURL: "http://192.168.31.6:3000",
    timeout: 5000
  });

  instance.interceptors.request.use(function (config) {
    return config;
  }, function (err) {// console.log(err);
  });
  instance.interceptors.response.use(function (res) {
    return res.data;
  }, function (err) {
    console.log(err);
  });
  return instance(config);
}