var getThStyle = require('../../mixins/get-th-style')

export default {
    name: 'RLHeadingRow',
    inject: ['opts', 'theme', 'hasChildRow', 'allColumns', 'toggleAllRows', 'componentsOverride'],
    mixins:[getThStyle],
    render() {
        return this.$slots.default({
            override: this.componentsOverride.headingsRow,
            theme: this.theme,
            opts: this.opts(),
            columns: this.allColumns(),
            selectable: this.opts().selectable.mode && !this.opts().selectable.programmatic,
            thStyle:this.getThStyle(),
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
