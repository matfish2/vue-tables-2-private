"use strict";

module.exports = function (page, preventRequest) {
  page = parseInt(page);

  if (page < 1) {
    page = 1;
  }

  if (page > this.totalPages) {
    page = this.totalPages;
  }

  this.page = page;
  this.updateState('page', page);
  this.dispatch('pagination', page);
  if (this.source == 'server' && !preventRequest) this.getData();
};