"use strict";

module.exports = function (page, preventRequest) {
  page = parseInt(page);

  if (page < 1) {
    page = 1;
  }

  if (page > this.totalPages && this.opts.pagination.virtual) {
    return;
  }

  if (this.totalPages > 0 && page > this.totalPages) {
    page = this.totalPages;
  }

  this.page = page;
  this.updateState('page', page);
  this.dispatch('pagination', page);
  if (this.source == 'server' && !preventRequest) this.getData();
};