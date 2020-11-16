"use strict";

var _VtTextFilter = _interopRequireDefault(require("../components/VtTextFilter"));

var _VtListFilter = _interopRequireDefault(require("../components/VtListFilter"));

var _VtDateFilter = _interopRequireDefault(require("../components/VtDateFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (column) {
  if (!this.opts.filterable) return false;
  if (this.isTextFilter(column)) return _VtTextFilter["default"];
  if (this.isDateFilter(column)) return _VtDateFilter["default"];
  if (this.isListFilter(column)) return _VtListFilter["default"];
};