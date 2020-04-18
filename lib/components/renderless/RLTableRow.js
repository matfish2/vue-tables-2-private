export default {
    name: 'RLTableRow',
    props:['row','index'],
    inject: ['allColumns','opts', 'rowWasClicked','hasChildRow','theme', 'componentsOverride'],
    provide() {
        return {
            row: () => this.row,
            index: this.index
        }
    },
    render() {
        return this.$scopedSlots.default({
            columns: this.allColumns(),
            hasChildRow: this.hasChildRow(),
            opts: this.opts(),
            selectable: this.opts().selectable.type,
            selectableCallback: this.opts().selectable.callback,
            rowId: this.row[this.opts().uniqueKey],
            row: this.row,
            rowAttrs: {
                class: this.getClass(),
                attrs: this.opts().rowAttributesCallback?this.opts().rowAttributesCallback(this.row) : {}
            },
            rowEvents:{
                click: this.rowWasClicked.bind(this, this.row, this.index),
                dblclick: this.rowWasClicked.bind(this, this.row, this.index)
            },
            childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,
            childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst,
            override: this.componentsOverride.tableRow
        })
    },
    methods:{
        getClass() {
            var cls = [];

            if (this.opts().rowClassCallback)  {
                cls.push(this.opts().rowClassCallback(this.row));
            }

            cls.push(this.theme.tr)

            if (this.index%2===0) {
                cls.push(this.theme.trEven)
            } else {
                cls.push(this.theme.trOdd)
            }

            return cls.join(' ');

        }
    }
}
