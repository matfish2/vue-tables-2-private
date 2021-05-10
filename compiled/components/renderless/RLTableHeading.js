"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getThStyle = require('../../mixins/get-th-style');

var _default = {
  name: 'RLTableHeading',
  props: ['column'],
  provide: function provide() {
    var _this = this;

    return {
      column: function column() {
        return _this.column;
      }
    };
  },
  inject: ['opts', 'theme', 'sortableClass', 'getHeadingTooltip', 'getHeading', 'orderByColumn', 'componentsOverride', 'tabIndex'],
  mixins: [getThStyle],
  render: function render(h) {
    var _this2 = this;

    return this.$slots["default"]({
      opts: this.opts(),
      thAttrs: {
        "class": this.getClasses(),
        tabIndex: this.tabIndex(),
        style: this.getThStyle(),
        title: this.getHeadingTooltip(this.column)
      },
      thEvents: {
        keypress: function keypress(e) {
          if (e.key === "Enter") {
            _this2.orderByColumn(_this2.column, e);
          }
        },
        click: function click(e) {
          if (e.target.className !== "resize-handle") {
            _this2.orderByColumn(_this2.column, e);
          }
        }
      },
      spanAttrs: {
        title: this.getHeadingTooltip(this.column)
      },
      heading: this.getHeading(this.column, h),
      override: this.componentsOverride.tableHeading
    });
  },
  methods: {
    getClasses: function getClasses() {
      var cls = this.sortableClass(this.column);

      if (this.theme.th) {
        cls += ' ' + this.theme.th;
      }

      return cls;
    }
  }
};
exports["default"] = _default;