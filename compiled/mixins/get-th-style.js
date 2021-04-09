"use strict";

module.exports = {
  methods: {
    getThStyle: function getThStyle() {
      var cls = '';

      if (this.opts().stickyHeader) {
        cls += 'position:sticky; top:0;';
      }

      if (this.opts().stickyHeaderBackground) {
        cls += "background:".concat(this.opts().stickyHeaderBackground, ";");
      }

      return cls;
    }
  }
};