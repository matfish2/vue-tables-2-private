export default {
    name: 'RLChildRowToggler',
    props: ['rowId'],
    inject: ['toggleChildRow', 'opts', 'childRowTogglerClass', 'componentsOverride', 'tabIndex'],
    render(h) {
        return this.$slots.default({
            opts: this.opts(),
            class: this.childRowTogglerClass.bind(this, this.rowId),
            toggle: this.toggleChildRow.bind(this, this.rowId),
            override: this.componentsOverride.childRowToggler,
            tabIndex: this.tabIndex()
        })
    }
}




