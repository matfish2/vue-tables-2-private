"use strict";

module.exports = function () {
  this.selectedRows = [];
  var toggler = document.getElementById('vt-toggle-all');
  toggler.checked = false;
  this.dispatch('select', this.selectedRows);
};