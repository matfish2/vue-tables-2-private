export default {
    name: 'RLTableBody',
    inject: ['opts', 'theme', 'source','filteredData','tableData','colspan','openChildRows','collapsedGroups','slots', 'componentsOverride','page','limit'],
    render() {
        return this.$slots.default({
            opts: this.opts(),
            source: this.source,
            canToggleGroups: this.opts().toggleGroups,
            collapsedGroups: this.collapsedGroups(),
            data: this.source==='client' ? this.filteredData() : this.tableData(),
            colspan: this.colspan(),
            loading: true,
            hasChildRow: this.opts().childRow || this.slots()['child_row'],
            openChildRows: this.openChildRows(),
            uniqueRowId: this.opts().uniqueKey,
            groupBy: this.getGroupBy(),
            slots: this.slots(),
            override: this.componentsOverride.tableBody,
            initialIndex: (this.page()-1) * this.limit(),
        })
    },
    methods:{
        getGroupBy() {
            var groupBy = this.opts().groupBy

            if (groupBy) {
                return typeof groupBy==='string' ? [groupBy] : groupBy
            }

            return null;
        }
    }
}




