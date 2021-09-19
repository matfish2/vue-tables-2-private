"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableRow',
  props: ['row', 'index'],
  inject: ['allColumns', 'opts', 'rowWasClicked', 'hasChildRow', 'theme', 'componentsOverride', 'isRowSelected'],
  provide: function provide() {
    var _this = this;

    return {
      row: function row() {
        return _this.row;
      },
      index: this.index
    };
  },
  render: function render() {
    return this.$slots["default"]({
      opts: this.opts(),
      columns: this.allColumns(),
      hasChildRow: this.hasChildRow(),
      selectable: this.opts().selectable.mode && !this.opts().selectable.programmatic,
      rowId: this.row[this.opts().uniqueKey],
      rowAttrs: {
        "class": this.getClass(),
        attrs: this.opts().rowAttributesCallback ? this.opts().rowAttributesCallback(this.row) : {}
      },
      rowEvents: {
        click: this.rowWasClicked.bind(this, this.row, this.index)
      },
      childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,
      childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst,
      override: this.componentsOverride.tableRow
    });
  },
  methods: {
    getClass: function getClass() {
      var cls = [];

      if (this.opts().rowClassCallback) {
        cls.push(this.opts().rowClassCallback(this.row));
      }

      cls.push(this.theme.tr);

      if (this.index % 2 === 0) {
        cls.push(this.theme.trEven);
      } else {
        cls.push(this.theme.trOdd);
      }

      if (this.opts().selectable.mode && this.isRowSelected(this.row)) {
        cls.push('VueTables__row--selected');
      }

      return cls.join(' ');
    }
  }
};
exports["default"] = _default;