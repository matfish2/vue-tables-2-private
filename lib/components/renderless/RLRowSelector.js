export default {
    name: 'RLRowSelector',
    inject: ['opts', 'theme', 'colspan', 'slots', 'toggleRowSelection','isRowSelected','componentsOverride', 'row','index'],
    render() {
        return this.$scopedSlots.default({
            type: this.opts().selectable.mode,
            row: this.row(),
            index: this.index,
            toggleRow: this.toggleRowSelection,
            selected: this.isRowSelected(this.row),
            disabled: this.opts().selectable.only && !this.opts().selectable.only(this.row()),
            override: this.componentsOverride.rowSelector
        })
    }
}
