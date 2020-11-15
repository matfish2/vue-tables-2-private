"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _methods = _interopRequireDefault(require("./mixins/methods"));

var _computed = _interopRequireDefault(require("./mixins/computed"));

var _beforeDestroy = _interopRequireDefault(require("./mixins/before-destroy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  return {
    methods: _methods["default"],
    computed: _computed["default"],
    beforeUnmount: _beforeDestroy["default"]
  };
}