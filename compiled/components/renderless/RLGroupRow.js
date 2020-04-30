"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLGroupRow',
  props: ['value', 'level'],
  inject: ['colspan', 'opts', 'theme', 'toggleGroupDirection', 'toggleGroup', 'groupToggleIcon', 'getGroupSlot', 'groupBy', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      opts: this.opts(),
      theme: this.theme,
      colspan: this.colspan(),
      toggleGroupDirection: this.level === 1 ? this.toggleGroupDirection : function () {},
      canToggleGroup: this.opts().toggleGroups,
      toggleGroup: this.toggleGroup,
      groupValue: this.value,
      level: this.level,
      groupToggleIcon: this.groupToggleIcon,
      slot: this.getGroupSlot(this.value),
      override: this.componentsOverride.groupRow
    });
  }
};
exports["default"] = _default;