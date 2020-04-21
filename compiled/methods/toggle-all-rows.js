"use strict";

module.exports = function (e) {
  this.selectedRows = e.target.checked ? this.data : [];
  this.dispatch('select', this.selectedRows);
};