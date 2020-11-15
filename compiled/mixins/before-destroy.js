"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

// import EventBus from '../bus';
function _default() {
  var _this = this;

  var el; // if (this.opts.destroyEventBus) {
  //     EventBus.$off();
  //     EventBus.$destroy();
  // }

  if (this.vuex && !this.opts.preserveState) {
    this.$store.unregisterModule(this.name);
  }

  if (this.opts.filterByColumn) {
    this.datepickerColumns.forEach(function (column) {
      el = $(_this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter").data('daterangepicker');
      if (el) el.remove();
    });
  }
}