export default {
    name: 'RLHeadingRow',
    inject: ['opts', 'theme', 'hasChildRow', 'allColumns', 'componentsOverride'],
    render() {
        return this.$slots.default({
            override: this.componentsOverride.headingsRow,
            opts: this.opts(),
            columns: this.allColumns(),
            selectable: this.opts().selectable.mode && !this.opts().selectable.programmatic,
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
