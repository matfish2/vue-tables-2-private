"use strict";

module.exports = function (e, row, index, disabled) {
  var _this = this;

  e.stopPropagation();
  if (disabled) return;
  var id = this.opts.uniqueKey;

  if (this.opts.selectable.mode === 'single') {
    this.selectedRows = !this.isRowSelected(row) ? [row] : [];
  } else {
    var prevIndex = this.selectedIndex;
    this.selectedIndex = index; // Handle multiple select via Shift+Click

    if (e.shiftKey && prevIndex !== this.selectedIndex) {
      // Get the subset of the message list between the
      // two indicies.
      var subset = this.filteredData.slice(Math.min(prevIndex, this.selectedIndex), Math.max(prevIndex, this.selectedIndex)); // Determine the operation based on the checked state
      // of the clicked checkbox.

      var toggleFn = !this.isRowSelected(row) ? addCheckedSubset : removeCheckedSubset;
      this.selectedRows = toggleFn(this.selectedRows, subset).filter(function (row) {
        return !_this.opts.selectable.only || _this.opts.selectable.only(row);
      });
    } else {
      if (!this.isRowSelected(row)) {
        this.selectedRows.push(row);
      } else {
        this.selectedRows = this.selectedRows.filter(function (R) {
          return R[id] !== row[id];
        });
      }
    }
  }

  this.dispatch('select', this.selectedRows);
};

var notInArr = function notInArr(item) {
  return this.indexOf(item) === -1;
};

function addCheckedSubset(current, add) {
  if (!current.length) return add; // Add only items which are not already checked

  return current.concat(add.filter(notInArr, current));
}

function removeCheckedSubset(current, remove) {
  // Return only items which are not in subset
  return current.filter(notInArr, remove);
}