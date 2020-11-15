"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTextFilter',
  inject: ['opts', 'search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'componentsOverride'],
  props: {
    column: {
      required: true,
      type: String
    }
  },
  render: function render() {
    return this.$slots["default"]({
      opts: this.opts(),
      column: this.column,
      debounce: this.opts().debounce,
      theme: this.theme,
      search: this.search,
      query: this.query(),
      getHeading: this.getHeading,
      name: this.getColumnName(this.column),
      display: this.display,
      override: this.componentsOverride.textFilter
    });
  }
};
exports["default"] = _default;