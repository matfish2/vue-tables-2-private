export default {
    name: 'RLHeadingRow',
    inject: ['opts', 'theme', 'hasChildRow', 'allColumns', 'toggleAllRows'],
    render() {
        return this.$scopedSlots.default({
            columns: this.allColumns(),
            selectable: this.opts().selectable.mode,
            toggleAll: this.toggleAllRows,
            hasChildRow: this.hasChildRow,
            childRowTogglerFirst: this.hasChildRow() &&
                this.opts().showChildRowToggler &&
                this.opts().childRowTogglerFirst,
            childRowTogglerLast: this.hasChildRow() &&
                this.opts().showChildRowToggler &&
                !this.opts().childRowTogglerFirst
        })
    }
}
