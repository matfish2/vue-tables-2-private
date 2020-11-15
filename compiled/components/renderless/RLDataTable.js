"use strict";

module.exports = function () {
  var _this = this;

  return this.$slots["default"]({
    source: this.source,
    theme: this.theme,
    opts: this.opts,
    perPageValues: this.perPageValues,
    totalPages: this.totalPages,
    slots: this.$parent.$slots,
    page: this.page,
    setPage: this.setPage,
    virtualPagination: this.opts.pagination.virtual,
    loading: this.loading,
    override: this.componentsOverride.dataTable,
    styles: function styles() {
      var cls = [];

      if (_this.opts.pagination.virtual || _this.opts.stickyHeader) {
        cls.push('overflow-x:unset');
      }

      if (_this.opts.pagination.virtual) {
        cls.push('overflow-y:scroll');
      }

      return cls.join(';');
    }
  });
};