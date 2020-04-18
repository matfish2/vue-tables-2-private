export default {
    name: 'RLRowSelector',
    inject: ['opts', 'theme', 'colspan', 'slots', 'selectRow','isRowSelected','componentsOverride'],
    props:['row'],
    render() {
        return this.$scopedSlots.default({
            type: this.opts().selectable.type,
            callback: this.opts().selectable.callback,
            row: this.row,
            selectRow: this.selectRow,
            isRowSelected: this.isRowSelected,
            override: this.componentsOverride.rowSelector
        })
    }
}
