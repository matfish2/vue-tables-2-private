"use strict";

module.exports = function () {
  if (this.orderBy.column != this.groupBy[0]) {
    this.setOrder(this.groupBy[0], true);
  } else {
    this.setOrder(this.groupBy[0], !this.orderBy.ascending);
  }
};