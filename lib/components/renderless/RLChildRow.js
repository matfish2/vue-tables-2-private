export default {
    name: 'RLChildRow',
    props:['row','index'],
    inject: ['colspan','getChildRowTemplate', 'opts','slots', 'componentsOverride'],
    render() {
        return this.$slots.default({
            opts: this.opts(),
            childRow: this.getChildRowTemplate(this.row, this.index, this.slots()['child_row']),
            colspan: this.colspan(),
            class: this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',
            override: this.componentsOverride.childRow
        })
    }
}




