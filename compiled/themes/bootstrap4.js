"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function () {
  var _ref;

  return _ref = {
    framework: 'bootstrap4',
    td: '',
    table: 'table table-striped table-bordered table-hover',
    row: 'row',
    th: ''
  }, _defineProperty(_ref, "td", ''), _defineProperty(_ref, "tr", ''), _defineProperty(_ref, "trEven", ''), _defineProperty(_ref, "trOdd", ''), _defineProperty(_ref, "column", 'col-md-12'), _defineProperty(_ref, "label", ''), _defineProperty(_ref, "input", 'form-control'), _defineProperty(_ref, "select", 'form-control'), _defineProperty(_ref, "field", 'form-group'), _defineProperty(_ref, "inline", 'form-inline'), _defineProperty(_ref, "right", 'float-right'), _defineProperty(_ref, "left", 'float-left'), _defineProperty(_ref, "center", 'text-center'), _defineProperty(_ref, "contentCenter", 'justify-content-center'), _defineProperty(_ref, "nomargin", 'm-0'), _defineProperty(_ref, "groupTr", 'table-info'), _defineProperty(_ref, "small", ''), _defineProperty(_ref, "button", 'btn btn-secondary'), _defineProperty(_ref, "dropdown", {
    container: 'dropdown',
    trigger: 'dropdown-toggle',
    menu: 'dropdown-menu',
    content: '',
    item: 'dropdown-item',
    caret: 'caret'
  }), _defineProperty(_ref, "pagination", {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled',
    icon: ''
  }), _ref;
};